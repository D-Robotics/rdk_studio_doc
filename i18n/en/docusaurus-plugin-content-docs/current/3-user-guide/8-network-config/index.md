---
sidebar_label: '3.8 Network Configuration'
title: 3.8 Network Configuration
---

# 3.8 Network Configuration

![WiFi Configuration Dialog: List of available networks, SSID input field, password input field, and "Cancel / Connect to Network" buttons at the bottom](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/wifi-config-dialog.png)

[Section 2.4 Configure Network](../../2-quick-start/4-configure-network.md) introduced the simplest WiFi configuration workflow for initial device setup. This section serves as a comprehensive reference for advanced scenarios such as switching between multiple WiFi networks, adding hidden SSIDs, and configuration persistence.

The underlying implementation relies on the NetworkManager daemon running on the board: Studio remotely executes `nmcli` commands on the board via SSH to perform network scanning, connection, and persistence. Configurations are written to `/etc/NetworkManager/system-connections/` on the board and automatically reconnect after reboot—manual reconfiguration is not required each time.

## Contents of this section

- [3.8.1 Entry Points and Status Display](./1-entry-and-status.md): Multiple access points for network configuration and real-time WiFi status display in the top bar  
- [3.8.2 Hidden SSID and Advanced Options](./2-hidden-ssid.md): Manually adding hidden networks and selecting encryption types  
- [3.8.3 Configuration Persistence](./3-persistence.md): Auto-reconnection mechanism on boot and management of saved networks