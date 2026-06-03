---
sidebar_label: '3.3.2 Reconnect after disconnect'
title: 3.3.2 Reconnect after disconnect
unlisted: true
---

# 3.3.2 Reconnect after disconnect

Under network jitter or brief device unreachability, Terminal does not drop the session immediately—it tries automatic reconnect—so long jobs and log watching are less fragile.

## What you will see

| Situation | UI behavior |
|---|---|
| Brief network dip | Reconnect banner; Studio retries automatically |
| After device reboot reconnects | Terminal becomes usable again |
| Closing the tab intentionally | Session ends; no further reconnect |

Usually, text you typed but have not sent is preserved. Output produced while disconnected may not replay fully—run critical commands once the link feels stable again.

## If reconnect keeps failing

Check power, network, host/IP, and SSH service. Typical hints:

| Message | What to try |
|---|---|
| `Connection refused` | Device may be up but SSH is not responding normally |
| `Connection timed out` | Host cannot reach the device yet—check network and address |
| `Host key changed` | Possible reflash—follow the prompt to confirm the new host key |

Broader troubleshooting: [5.2 SSH connection failed](../../5-faq/2-ssh-failed.md).
