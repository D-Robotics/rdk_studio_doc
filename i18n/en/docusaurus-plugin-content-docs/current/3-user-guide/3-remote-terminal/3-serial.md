---
sidebar_label: '3.3.3 View serial logs'
title: 3.3.3 View serial logs
---

# 3.3.3 View serial logs

The Terminal page also supports serial (no SSH) alongside SSH, managed in the same UI.

Serial is suited when SSH is unavailable—watch boot logs and debug wiring/setup in [2.3.3 Serial log](../../2-quick-start/3-connect-device/3-serial.md).

## One entry for serial and SSH

Studio does not split SSH vs serial—both use **New tab**:

| Option | Behavior |
|---|---|
| *SSH session* | SSH connect to the active device |
| *Serial connection* | Serial dialog—pick COM/tty device and baud rate |

You can pivot on one Terminal page: use serial during failed boot, then SSH once the stack is up.

## Limits of serial

Serial is terminal-only. It does **not** support:

- File transfer
- Remote desktop
- Code editor
- OpenClaw deployment (needs network)

For transfers or GUI work you still need SSH to the same machine. SSH and serial can coexist in Studio independently.

## Studio logs panel

The Terminal page exposes **Studio logs**—logs from **this client**, not from the board.

Use it mainly when Studio misbehaves (SSH handshake failures, model API errors, etc.). You rarely need this day to day.
