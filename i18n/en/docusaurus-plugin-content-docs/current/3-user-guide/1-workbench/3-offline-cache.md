---
sidebar_label: '3.1.3 Offline Caching Mechanism'
title: 3.1.3 Offline Caching Mechanism
---

# 3.1.3 Offline Caching Mechanism

When the device goes offline or experiences network instability, the workspace won’t keep spinning indefinitely or display a blank screen. Instead, it switches to a low-frequency heartbeat mode and displays cached data. This mechanism ensures developers retain awareness of the device’s state even during temporary connectivity loss.

## Offline Detection and Refresh Strategy

The diagnostic polling interval of the workspace is controlled by `DEVICE_POLL_PERIOD_MS` (**15 seconds** in the current version). In cases of network jitter or SSH unavailability, Studio automatically retries within the same polling cycle:

| Device Status | Refresh Behavior | Workspace Display |
|---|---|---|
| Online | Diagnostics and heartbeat every 15 seconds | Real-time data |
| Timeout / Authentication Failure | Automatic retry in the next cycle | Orange diagnostic bar indicating the specific reason |
| Consecutive Failures (Offline) | Continues probing at the same interval, waiting for recovery | "Offline" label at the top + cached data |
| Network Restored | Immediately refreshes upon successful detection in the next cycle | Orange bar disappears; data becomes real-time |

Once the device comes back online, Studio instantly updates all metrics without requiring manual refresh.

## Semantics of Cached Data

Cached data represents a snapshot of metrics collected during the device’s last online session—it is not real-time data. This means:

- The workspace displays a timestamp for the data (e.g., "State from 2 minutes ago")
- Cached data helps developers recall "what the device’s state was before disconnection," but should not be used for real-time decision-making
- For critical scenarios (e.g., temperature monitoring), we recommend combining with [3.10 OpenClaw](../10-openclaw/index.md) to run a persistent agent on the device, enabling continued monitoring even during network outages

## Workspace with Multiple Devices

The workspace only displays the currently active device. Methods to switch devices:

- Device dropdown in the top-left corner → select another device  
- *Device Management* tab → click the *Quick Activate* button in the list  
- Say directly to AI Dock: "Switch to RDK-X5-Mobile"

After switching, the workspace fully reloads the new device’s data (takes approximately 2–5 seconds) and will not show cached data from the previously selected device.