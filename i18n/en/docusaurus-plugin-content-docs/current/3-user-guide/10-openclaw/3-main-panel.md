---
sidebar_label: '3.10.3 Main Panel and Sub-tabs'
title: 3.10.3 Main Panel and Sub-tabs
---

# 3.10.3 Main Panel and Sub-tabs

The main panel of the OpenClaw tab consists of a top status card, six sub-tabs, and four global buttons.

## Top Status Card

The status card displays key operational information about OpenClaw:

- Runtime status (Running / Stopped / Abnormal)  
- Current version number  
- Listening port (default: 18789)  
- Currently used model  
- Binding status of Feishu / WeChat channels  

You can instantly assess whether OpenClaw is operating healthily by glancing at this status card.

## Six Sub-tabs

| Sub-tab | Content | Primary Actions |
|---|---|---|
| Chat | Direct conversation with the on-board OpenClaw Agent | Bypasses PC-side D-Moss; tasks are handled directly by the on-board Agent |
| Configuration | Model entries, channel credentials, port settings, auto-installation policies | Modify OpenClaw's runtime parameters |
| Skills | List of skills synchronized to the board | Manually sync or uninstall skills |
| Pairing | Pending pairing requests and already-paired clients | Control which clients can connect to this OpenClaw instance |
| Logs | Real-time output from `journalctl` | Troubleshooting and observing what OpenClaw is doing |
| Monitoring | CPU, memory usage, gateway request volume, error rate | Long-term observation of OpenClaw’s resource consumption |

### Special Nature of the Chat Sub-tab

The *Chat* sub-tab enables direct communication with the on-board OpenClaw Agent, **bypassing the PC-side D-Moss entirely**. This approach is suitable for:

- Allowing the on-board Agent to autonomously handle tasks without PC involvement  
- Testing whether the on-board OpenClaw behaves as expected  
- Handing off tasks to the on-board Agent before shutting down the PC  

Note that the toolset available on the on-board OpenClaw differs somewhat from D-Moss—on-board tools are more focused on local operations and lack capabilities such as cross-device coordination and PC-side file manipulation.

## Four Global Buttons

| Button | Purpose | When to Use |
|---|---|---|
| Settings | Navigate to the *Configuration* sub-tab | When modifying models or channel configurations |
| Diagnose | Run the full `doctor` diagnostic suite | As the first step when OpenClaw exhibits abnormal behavior |
| Restart | Execute `systemctl --user restart openclaw` | When OpenClaw becomes unresponsive (analogous to force-quitting and relaunching a mobile app) |
| Upgrade | Pull and reinstall the latest npm package | To keep up with upstream OpenClaw releases |

The output of the Diagnose button includes checks on Node.js version, disk space, listening port, systemd service status, gateway connectivity, and model API connectivity—making it an efficient starting point for troubleshooting.