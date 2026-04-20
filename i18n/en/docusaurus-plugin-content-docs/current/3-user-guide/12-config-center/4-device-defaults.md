---
sidebar_label: '3.12.4 Device Connection Defaults'
title: 3.12.4 Device Connection Defaults
---

# 3.12.4 Device Connection Defaults

The device connection section controls global device access policies and default settings. These settings affect the behavior of all added devices and are independent of individual device connection details (such as IP address, credentials, etc.).

## Main Settings

| Setting | Default Value | Description |
|---|---|---|
| Auto Reconnect | Enabled | Whether to automatically attempt reconnection after a device disconnects |
| Connection Timeout | 30 seconds | SSH connection establishment timeout |
| Max Concurrent SSH Connections per Device | 8 connections | Maximum number of simultaneous SSH connections allowed per device |
| Mesh LAN Agent | Disabled | Whether to enable Agent Mesh multi-device collaboration |
| Heartbeat Interval (Active Devices) | 30 seconds | Frequency of background heartbeat probing |

## Auto Reconnect

When enabled, Studio enters a low-frequency probing mode if it detects a device disconnection (after three consecutive heartbeat failures), attempting to reconnect once every 5 minutes. Once the device recovers, Studio automatically switches back to high-frequency probing without requiring manual intervention.

This option is rarely disabled, primarily used in scenarios where "certain devices are known to remain offline for extended periods, and log noise reduction is desired."

## Connection Timeout

The waiting time for establishing an SSH connection. The default value of 30 seconds suits most scenarios.

Increase (e.g., to 60 seconds) for:

- Boards with slow boot times, where the SSH service hasn't started within 30 seconds
- High-latency networks (e.g., cross-region access, VPN tunnels)

Decrease (e.g., to 10 seconds) for:

- Cases where board responsiveness is expected to be fast, and quick failure detection aids troubleshooting
- Automated scripts that require rapid failure detection to facilitate retries

## Max Concurrent SSH Connections per Device

Studio enforces a limit on concurrent SSH connections to the same device (default: 8 connections). This prevents long-running tasks from occupying all SSH channels and blocking essential probes.

Increase (e.g., to 16 connections) for:

- High-intensity scenarios involving frequent simultaneous usage of multiple remote terminals, file management, and AI Agent calls via `device_exec`
- Boards where the SSH daemon (`sshd`) is configured to allow more concurrent sessions (default `MaxSessions` is 10)

The environment variable `RDK_DEVICE_EXEC_MAX_CONCURRENT` can also control this value, but its priority is lower than the GUI setting.

## Mesh LAN Agent

An experimental feature that has no effect when disabled. When enabled, it allows multiple Studio instances on the same local network to discover each other and collaborate via Agents (e.g., one Studio instance assisting another with task execution).

This feature has limited applicability and is typically used only in collaborative experimentation environments involving multiple robots and developers within a team. See relevant technical documentation for detailed mechanisms.

## Heartbeat Interval

The frequency of background heartbeat probing for devices. The default is 30 seconds and can be adjusted under *Configuration Center → Device Connection*.

Increase frequency (e.g., to 10 seconds) for:

- Critical scenarios requiring rapid detection of device status changes
- Testing environments with frequent device connect/disconnect cycles

Decrease frequency (e.g., to 60 seconds) for:

- Large numbers of devices, where reducing total heartbeat overhead on the PC is desired
- Networks with constrained bandwidth