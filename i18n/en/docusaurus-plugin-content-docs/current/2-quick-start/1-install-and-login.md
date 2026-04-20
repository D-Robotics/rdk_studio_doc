---
sidebar_label: '2.1 Installation and Login'
title: 2.1 Installation and Login
---

# 2.1 Installation and Login

This section guides you through installing the RDK Studio desktop client and completing your first login. The entire process typically takes less than 2 minutes.

## Install the Client

Download the installer for your platform from the official D-Robotics release page:

| Platform | Installer Format |
|---|---|
| Windows 10 / 11 (64-bit) | `.exe` (NSIS installer) or `.zip` (portable version) |
| macOS 11 and later | `.dmg` (universal binary for Apple Silicon and Intel) |
| Ubuntu 20.04 and later | `.deb` (install via apt) or `.AppImage` |

After downloading, double-click the installer and follow the on-screen instructions to complete installation. On Windows and macOS, the system may display a security warning upon first launch (Windows SmartScreen or macOS Gatekeeper); simply allow the application to run.

## First Login

Upon launching the desktop client, the D-Robotics unified login portal will automatically appear. RDK Studio integrates with the D-Robotics account system via the OAuth 2.0 protocol. Your password is never stored locally—only the authorized access_token is retained.

![D-Robotics Unified Login Portal: Title reads "Hello, welcome to the D-Robotics Unified Login Platform!", offering two login methods—"Account Login" and "SMS Login". Both username and password fields are empty. Buttons labeled "Log In Now" and "Register" appear below, along with a "Forgot Password?" link. Language toggle (中文 / En) is located in the top-right corner.](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/login-sso-empty.png)

Login steps:

1. Enter your D-Robotics account credentials in the login window, or switch to *SMS Login* and use your phone number + verification code.
2. Complete verification (first-time logins may require SMS or email verification).
3. Click *Log In Now*; your browser will automatically redirect back to Studio, and the login window will close.
4. The Studio main window will open to the workspace.

![D-Robotics Unified Login Portal – After entering credentials: Username field shows `qiaolongli`, password field displays masked characters (filled), and the *Log In Now* button is clickable.](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/login-sso-filled.png)

After successful login, Studio will automatically synchronize local configurations: device list, model entries, skill installation status, and AI Dock chat history.

## Session Duration

Login sessions are retained by default for 14 days. During this period, reopening the client won’t require re-authentication unless you explicitly log out (*Settings Panel → Account & Security → Log Out*) or the session expires.

Session information is stored locally:

| Operating System | Path |
|---|---|
| Windows | `%USERPROFILE%\.rdk-studio\sso-sessions.json` |
| macOS | `~/.rdk-studio/sso-sessions.json` |
| Linux | `~/.rdk-studio/sso-sessions.json` |

If you encounter abnormal login states, delete this file and restart the client to trigger a fresh login.

## Common Login Issues

| Symptom | Possible Cause | Solution |
|---|---|---|
| Login window keeps spinning | SSO service unreachable | Verify network connectivity; corporate users should connect via VPN |
| No response after entering password | Corrupted cookies or cache | Restart Studio; clear browser cookies if necessary |
| Login window repeatedly appears | OAuth callback blocked by firewall | Contact IT to allow OAuth callback URLs |
| `Network request failed` | DNS resolution failure | Run `ping sso.d-robotics.cc` to verify DNS functionality |

## Onboarding Guide After Login

After your first login, the Studio main window launches an onboarding guide (four steps: **Select Hardware → Flash System → Connect Device → Connect AI Assistant**).

![Onboarding Guide after first login – Step 1: Select Hardware. Three cards displayed side-by-side show RDK X3 / X5 / S100 with their TOPS, CPU, memory, and positioning descriptions.](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/onboarding-1-board.png)

This serves as the "navigation backbone" for all subsequent sections (2.2 Flashing → 2.3 Connecting → 2.5 Models). If your board is already bootable and you wish to skip the guide and go directly to the workspace, click *Skip Guide and Start Now* at the bottom. A "Restart Guide" entry remains available on the empty workspace page so you can re-enter anytime.

## Next Steps

After logging in, choose your next step based on your board’s status:

- Board has no usable OS → [2.2 Flash System Image](./2-flash-system.md)
- Board already boots normally → [2.3 Connect Device](./3-connect-device/index.md)

For comprehensive account and security management (switch accounts, log out, clear local data), see [3.12 Configuration Center](../3-user-guide/12-config-center/2-account.md).