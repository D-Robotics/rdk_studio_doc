---
sidebar_label: '3.9.3 View online status'
title: 3.9.3 View online status
unlisted: true
---

# 3.9.3 View online status

Studio periodically checks whether saved devices are reachable—no manual refresh needed; list badges update on their own.

## How status changes

| UI | Meaning |
|---|---|
| Online | Terminal, Files, Moss, and other device features are usable |
| Offline | Power loss, unreachable network, or SSH failure |
| Back online | List updates once connectivity returns |

## “Online” but operations hang

Sometimes the badge says online while terminal/file ops stall—try:

- Wait a few seconds for recovery.
- Check load—heavy jobs can starve the session.
- If the shell still accepts input, ask Moss to inspect system health.

If the terminal is dead, verify power and network, then consider rebooting.

## Too many concurrent operations

Many parallel terminals, transfers, and Moss tasks can queue—let earlier work finish before retrying.

## Multi-user caveats

When several people use Studio against one device:

- One person’s commands can disrupt another’s session.
- Someone changing saved credentials can lock others out.

Team practices help:

- Assign an owner for production boards.
- Use personal or agreed team accounts for critical devices.
- Use device notes like “Owner only” / “Shared lab” so expectations are clear.
