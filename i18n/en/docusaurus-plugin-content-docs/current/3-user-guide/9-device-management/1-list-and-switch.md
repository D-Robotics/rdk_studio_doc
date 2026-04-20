---
sidebar_label: '3.9.1 Device List and Switching'
title: 3.9.1 Device List and Switching
---

# 3.9.1 Device List and Switching

## Device List Display Items

Each device in the list displays the following information:

| Field | Description |
|---|---|
| Custom Name | Developer-defined device name |
| IP Address | IP address currently used for connection |
| Online Status | Real-time heartbeat result (see [3.9.3](./3-online-monitoring.md) for details) |

The list supports sorting by name, IP, or status, making it easy to locate devices quickly in multi-device scenarios.

## Three Ways to Switch Active Devices

| Method | Path | Use Case |
|---|---|---|
| Top-left device dropdown in header bar | Available on any tab | Fastest method; preferred for daily use |
| *Activate* button in device list | *Configuration Center → Device Connection* | When you need to review device details before switching |
| AI Dock natural language command | Say directly, e.g., "Switch to RDK-X5-Workstation2" | When editing documents or code and don't want to leave your current position |

Whichever method is used, the switch takes effect immediately.

## Synchronization Behavior After Switching

| Item | Behavior After Switching |
|---|---|
| Remote Terminal | Opens a new SSH session for the new device in a new tab; tabs for previous devices remain open |
| File Manager | Automatically points to the root directory of the new device |
| Remote IDE | Switches to the code-server instance on the new device |
| Remote Desktop | Switches to the VNC session of the new device |
| AI Dock | Switches to the session associated with the new device (each device has an independent session) |
| Dashboard | Reloads metrics data for the new device (takes approximately 2–5 seconds) |
| Header IP List | Updates to show all network interface IPs of the new device |

Switching does not lose the running state of the previous device—commands already running in the remote terminal and conversation history in AI Dock are preserved. You can resume work seamlessly when switching back later.

## Quick IP Lookup in Header Bar

After switching devices, clicking the device name in the header bar displays all network interface IPs for that device:

```
RDK-X5-Workstation1
- wlan0: 192.168.1.45 (WiFi)
- eth0:  192.168.127.10 (Ethernet direct connection)
- usb0:  192.168.128.10 (Type-C)
```

Each IP can be copied with one click—eliminating the need to SSH into the device to query IPs when using external tools.