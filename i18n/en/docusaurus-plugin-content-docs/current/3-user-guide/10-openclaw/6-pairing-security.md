---
sidebar_label: '3.10.6 Pairing and Security'
title: 3.10.6 Pairing and Security
---

# 3.10.6 Pairing and Security

OpenClaw's gateway is not publicly accessible by default—initial connections require pairing authentication, after which a long-lived token generated during pairing is used for identity verification. This mechanism prevents unauthorized clients from connecting to the OpenClaw instance running on the board.

## Initial Pairing Process

1. When Studio on the PC connects to the board’s OpenClaw for the first time, OpenClaw generates a one-time token.
2. The token is securely transmitted to the PC via an SSH channel.
3. Studio uses this token to complete pairing, and OpenClaw records the client as authorized.
4. Subsequently, Studio communicates with OpenClaw using the long-lived token established during pairing.

This entire process is transparent to developers and requires no manual intervention.

## Pairing Management

The *Pairing* sub-tab under the OpenClaw tab allows management of paired clients:

| Action | Description |
|---|---|
| View Paired Clients | Displays client ID, pairing time, and last active time |
| Revoke Pairing | Removes authorization for a specific client; the client must re-pair upon next access |
| View Pending Approval Requests | If "approval mode" is enabled, new pairing requests appear in the pending approval list |

## Default Binding to 127.0.0.1 Only

By default, the OpenClaw gateway binds only to `127.0.0.1:18789` on the board and does not accept external connections. This means:

- Devices on the public internet or local network cannot directly access OpenClaw on the board.
- Only clients that have accessed the board via SSH can reach OpenClaw (including Studio using SSH tunnel forwarding).
- Even if the board’s IP address is exposed to the public internet, the OpenClaw port itself remains unreachable.

## Tool Invocation Allowlist

Tool invocations in OpenClaw are filtered through an allowlist:

- Default allowed tools: remote command execution, file read/write, network access, skill invocation.
- High-risk tools (e.g., system-level configuration changes) must be explicitly enabled in OpenClaw’s configuration.
- Dangerous commands (e.g., `rm -rf`, `dd`, etc.) trigger a secondary confirmation prompt within the communication channel before execution.

This design allows OpenClaw to be safely exposed to external channels (e.g., Lark Bot) without risking direct system damage from malicious commands.

## Risks and Recommendations for Public Exposure

| Approach | Risk Level |
|---|---|
| Directly exposing OpenClaw port 18789 to the public internet | High (anyone can attempt to connect) |
| Changing the default binding to `0.0.0.0` | High (bypasses local isolation) |
| Exposing the SSH port to the public internet and relying on SSH tunneling to access OpenClaw | Medium (depends on SSH security; requires key-based authentication + fail2ban) |
| Accessing the board via VPN without exposing any ports to the public internet | Low (recommended approach) |

Production environment recommendations:

- Always access OpenClaw via SSH tunneling; never expose port 18789 directly to the public.
- Use SSH key-based authentication and disable password login.
- Configure a firewall on the board to open only essential ports.
- Regularly audit the list of paired OpenClaw clients and revoke access for unused clients.