---
sidebar_label: '3.9 Device Management'
title: 3.9 Device Management
---

# 3.9 Device Management

![Device Connection Settings Page: LAN Agent Mesh toggle, saved devices (with Remove button), Add Device entry point, connection timeout, and auto-connect on boot](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/settings-device-connection.png)

Device Management serves as the central hub for multi-device parallel operations in RDK Studio. Studio maintains a device inventory, where each added device includes connection details, SSH credentials, platform profile (model, image, network interface list, etc.), and custom notes. All tabs share the concept of the "currently active device"—once you switch devices, the remote terminal, file manager, IDE, remote desktop, and AI Dock automatically follow the switch.

Device inventory storage locations:

| Operating System | Path |
|---|---|
| Windows | `%USERPROFILE%\.rdk-studio\data\devices.json` |
| macOS / Linux | `~/.rdk-studio/data/devices.json` |

## This section includes

- [3.9.1 Device List and Switching](./1-list-and-switch.md): List display, three switching methods, and synchronized behaviors after switching  
- [3.9.2 Automatic Device Discovery](./2-auto-detect.md): Detection items upon first connection and their impact on AI context  
- [3.9.3 Online Status Monitoring](./3-online-monitoring.md): Heartbeat probing, offline detection, and low-frequency probing strategy  
- [3.9.4 Configuration Import and Export](./4-import-export.md): Synchronizing device lists across machines and SSH authentication methods