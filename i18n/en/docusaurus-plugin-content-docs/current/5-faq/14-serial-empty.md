---
sidebar_label: '5.14 Serial list empty'
title: 5.14 Serial list empty
---

# 5.14 Serial list empty

## Typical symptoms

- OS Device Manager sees a COM/tty entry but Studio’s picker is blank.
- “Authorize serial first.”
- Open fails → port busy.

## Why it happens

Local serial tooling needs **explicit pairing**. Hit **Add**, pick your adapter in the OS dialog, then the Studio dropdown fills in.

## Fix flow

1. Verify Windows/macOS/Linux enumerates the cable; install FTDI/CP210x drivers when missing.
2. On terminal or serial add-flow press **Add**.
3. Confirm the debugger’s COM/tty inside the consent UI.
4. Choose baud (`115200` typical) and Connect.
5. If everything shows “Unknown,” purge via **Clear unknown serials**, then redo authorization.

Remember: serial view doesn’t create a persisted device—you still need SSH for Moss tooling, filesystem, RD, OpenClaw, etc., once connectivity returns.
