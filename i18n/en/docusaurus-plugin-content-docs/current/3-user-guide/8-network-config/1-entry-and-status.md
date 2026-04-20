---
sidebar_label: '3.8.1 Entry Points and Status Display'
title: 3.8.1 Entry Points and Status Display
---

# 3.8.1 Entry Points and Status Display

## Multiple Entry Points to Network Configuration

Studio provides multiple entry points to access network configuration, all powered by the same underlying capabilities:

| Entry Point | Use Case |
|---|---|
| Top bar WiFi icon | Already connected to a device; only want to change WiFi |
| Add Device Wizard → WiFi Step | First-time device onboarding; follow the guided flow |
| OpenClaw Deployment → WiFi Check | If the board lacks network connectivity during OpenClaw deployment, network configuration pops up automatically |
| Settings Center → Device Connection → Network | Advanced settings entry |

The most commonly used entry is the top bar WiFi icon, which allows one-click access to the WiFi configuration of the currently active device.

## Real-Time WiFi Status Display in Top Bar

The top toolbar displays the WiFi status of the currently active device:

| Status | Display |
|---|---|
| Connected | WiFi signal icon + SSID name |
| Disconnected or WiFi Off | Grayed-out WiFi icon + "Disconnected" indicator |
| Weak Signal (< -70 dBm) | WiFi icon + "Weak Signal" label |

Clicking the icon opens the WiFi configuration dialog.

## Real-Time Connection Logs

The bottom of the WiFi configuration popup displays real-time execution logs from `nmcli` commands:

```
[14:23:15] Scanning...
[14:23:17] Found 5 available networks
[14:23:23] Attempting to connect to OfficeNet-5G ...
[14:23:24] 802.11 association successful
[14:23:25] 4-Way handshake completed
[14:23:26] DHCP acquired IP: 192.168.1.45
[14:23:26] Connection successful
```

If connection fails, the log shows the specific failure point (e.g., weak signal, incorrect password, handshake failure, DHCP timeout, etc.). Pasting the entire log into AI Dock enables the Agent to provide targeted troubleshooting solutions based on the failure step.

## Let AI Switch Networks for You

You can also let the AI Agent handle WiFi switching. In AI Dock, describe: "Switch the board to the office_2.4g network with password xxxx." The Agent will disconnect the current connection, connect to the new network, verify successful IP acquisition, and inform the developer of the outcome once complete.

If you're switching the network on a different board (not the currently active device), explicitly specify it in your description:

> "Switch RDK-X5-Workstation2 to the lab_5g WiFi network with password 12345678"

The Agent will first switch to that device's session, then execute the WiFi switch.