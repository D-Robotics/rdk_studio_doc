---
sidebar_label: '3.3.2 Reconnection Mechanism'
title: 3.3.2 Reconnection Mechanism
---

# 3.3.2 Reconnection Mechanism

When network fluctuations occur or the remote device becomes temporarily unreachable, the remote terminal does not immediately terminate the session but instead attempts to automatically reconnect. This mechanism ensures developers don't need to worry about "having to log in again just because of a brief network hiccup" during long-running sessions.

## Reconnection Triggers

| Scenario | Studio Behavior |
|---|---|
| Network jitter (brief packet loss) | Automatically reconnects; unsent input is preserved |
| Device briefly loses power and then recovers | Displays a "Connection lost" banner; automatically reconnects once connectivity resumes |
| Inactivity for a long period (> 30 minutes) | Maintains connection via background heartbeats; does not actively disconnect |
| Tab closed manually | Disconnects immediately; no reconnection attempt |

## Session State During Reconnection

During reconnection:

- A yellow banner appears at the top of the terminal saying "Connection lost, reconnecting..."
- The input box remains usable; entered content is temporarily stored on the frontend and will not be lost
- No new output from the device is received (if the device continues producing output during disconnection, some buffered output may be lost)

After successful reconnection:

- The yellow banner disappears
- Buffered input can be sent normally
- The device-side session resumes from the point of disconnection—however, output from commands that were sent but not yet acknowledged before disconnection may not be replayed

## Heartbeat Maintenance

To prevent SSH sessions from being dropped by firewalls or routers due to prolonged inactivity, Studio sends an empty data packet every 30 seconds to keep the connection alive. This heartbeat mechanism is transparent to developers, though in environments with strict firewall policies, adjustments might be needed (contact your operations team to allow long-lived SSH connections).

## Reconnection Still Fails

If Studio fails to reconnect after multiple attempts (5 consecutive failures), it stops trying and prompts the developer to take manual action:

| Message | Recommended Action |
|---|---|
| `Connection refused` | The sshd service on the device may have stopped; log in via another method (e.g., serial console) to check |
| `Connection timed out` | The device is completely unreachable over the network; verify the device's power and network connectivity |
| `Host key changed` | The device image may have been reflashed; run `ssh-keygen -R <IP>` to remove the old key and reconnect |

For comprehensive troubleshooting, see [5.2 SSH Connection Failures](../../5-faq/2-ssh-failed.md).