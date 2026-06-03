---
sidebar_label: '5.8 Code editor won’t start'
title: 5.8 Code editor won’t start
---

# 5.8 Code editor won’t start

**Typical symptoms:** *Code editor* opens blank, says the environment is missing, or the installer never finishes.

## First steps

1. Ensure the device is online and terminal SSH works.
2. Return to *Code editor* and reinstall/retry per banner.
3. Confirm the board can reach the internet—downloads are required.
4. Check free disk space.
5. Copy errors to Moss for guidance.

## Checklist

| Issue | Fix |
|---|---|
| Device offline | Fix SSH first |
| Package download failed | Network or retry later |
| Still blank after install | Reinstall; share logs with Moss |
| Empty webview | Refresh UI; restart RDK Studio if needed |
| Disk full | Clear logs/temp, retry |

## Longer term

- Stay on official RDK images to avoid missing OS bits.
- Reserve enough storage for toolchains.
- Coordinate among teammates so multiple installs don’t race the same device.
