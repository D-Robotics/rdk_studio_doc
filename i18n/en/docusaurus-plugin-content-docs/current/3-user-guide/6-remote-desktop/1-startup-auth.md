---
sidebar_label: '3.6.1 Launch and Authentication'
title: 3.6.1 Launch and Authentication
---

# 3.6.1 Launch and Authentication

## Automatic Launch Process

The first time you open the *Remote Desktop* tab, Studio performs the following steps:

1. SSH into the board to check whether `x11vnc`, `tigervnc`, or `Xvfb` is installed.
2. If none are installed, a confirmation dialog pops up; upon developer confirmation, they are installed via `apt install`.
3. If the board has no physical display, Xvfb is automatically started as a virtual display.
4. The VNC service is launched, listening on local port 5900.
5. The Studio client connects an embedded NoVNC client through an SSH tunnel.

The entire process requires no manual intervention from the developer. The initial installation takes 1–3 minutes; subsequent launches are nearly instantaneous.

## VNC Password Authentication

The VNC service supports password authentication via the RFB protocol:

- On the first launch, Studio prompts the developer to set a VNC password (or optionally generate a random one).
- The password is encrypted and stored in the current device configuration under *Configuration Center → Device Connections*.
- When switching devices or logging into Studio from a new machine with the same account, the password is automatically synchronized—no re-entry required.

## Security Notice

Do **not** expose VNC port 5900 to the public internet. The RFB protocol has historically had multiple security vulnerabilities, making public exposure highly risky. By default, RDK Studio accesses VNC through an SSH tunnel, with port 5900 bound only to the board's localhost (`127.0.0.1`), which is a secure approach.

If you need to manually access the board using another VNC client, we recommend:

- Setting up port forwarding in your SSH client:  
  `ssh -L 5900:localhost:5900 root@<board_IP>`
- Then connecting your local VNC client to `localhost:5900`
- **Never** bind port 5900 directly to `0.0.0.0` or expose it publicly.