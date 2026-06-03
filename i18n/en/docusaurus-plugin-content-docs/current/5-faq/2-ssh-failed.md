---
sidebar_label: '5.2 SSH connection failed'
title: 5.2 SSH connection failed
---

# 5.2 SSH connection failed

## Typical symptoms

When adding a device under *Device manager*, you may see timeout, bad password, or connection refused—**before changing system settings**, verify Host/IP, networking, and credentials in this order.

## Quick mapping

| UI hint | Check first |
|---|---|
| Connection timeout | Powered on? Correct Host/IP? PC and device on reachable networks? |
| Bad password | Username/password correct? Official RDK images often use `root/root` |
| Connection refused | Remote login (`sshd`) may not be running |
| Broken after reflashing | Stale saved device entries—clear and reconnect |

## Checklist

1. **Host / IP** — Enter the device’s IP or hostname, **not** the PC’s.
2. **Network** — Host and studio must reach each other. Type-C issues: [5.3 Type-C direct failed](./3-typec-flash-failed.md). Wi‑Fi issues: [5.7 Wi-Fi connection failed](./7-network-failed.md).
3. **Account** — Official images commonly `root/root`; follow your image notes if passwords changed.
4. **Remote login** — If boot is broken, use serial first and enable SSH.
5. **Stale profiles** — After reflash, remove old saved connections and add fresh.

## Common addresses

| Hookup | Typical address | How to verify |
|---|---|---|
| Type-C direct | `192.168.128.10` | Complete the Type-C add flow first |
| Ethernet | Per image docs | Screen, docs, or serial log |
| Wi‑Fi / DHCP | From router | Router admin UI, OS network UI, or serial |

## Follow-up

- Pin static IPs for rigs you use often.
- After add succeeds, confirm *Device manager* moves from pending verify to online.
- If it still fails, paste the UI message plus Host/IP to Moss for guided triage.
