---
sidebar_label: '3.1.2 Cross-Page Interaction'
title: 3.1.2 Cross-Page Interaction
---

# 3.1.2 Cross-Page Interaction

The workspace consolidates "reading data → taking action" onto a single screen: the metric bar displays status, and buttons below directly navigate to corresponding functional pages, eliminating the need for developers to constantly switch between multiple tabs.

## Four Primary CTAs Below the Metrics

Below the metric bar is a row of primary action buttons covering high-frequency scenarios:

| Button | Behavior |
|---|---|
| Quick Dev (primary) | Fills the AI Dock with a "one-click development" prompt; the Agent plans development tasks based on the current device |
| Terminal | Switches to the *Remote Terminal* tab and opens the first SSH session by default |
| OpenClaw | Switches to the *OpenClaw* tab to view the onboard Agent status |
| Device Health Check | Fills the AI Dock with a "device health check" prompt; the Agent automatically runs a diagnostic cycle |

## Capability Badges

Beneath the primary CTAs is a row of "Capability Badges" indicating the installation and runtime status of workspace modules. Clicking any badge navigates directly to its corresponding tab:

| Badge | Corresponding Tab | Status Meaning |
|---|---|---|
| Dev Environment | *Remote Terminal* | Green dot = ready; gray dot = not started; red dot = not installed |
| IDE | *Remote IDE* | Same as above (shows ready when code-server is installed and running) |
| Remote Desktop | *Remote Desktop* | Same as above (shows ready when the NoVNC service is running) |

Badge colors reflect the actual status of onboard services:  
- A green dot means the service is ready to use immediately upon entry.  
- A gray dot indicates the service is installed but not running (Studio will guide you through starting it after clicking).  
- A red dot means the service isn't installed yet (Studio will guide you through installation after clicking).

## Offline Diagnostic Alerts

If an orange banner appears below the metric bar (e.g., "Incorrect or missing device password—please reconnect in Device Management"), it indicates the latest probe attempt failed. This alert distinguishes among the following scenarios:

- Authentication failure (wrong password or missing SSH key)
- Response timeout (device offline or network congestion)
- Connection loss (physical disconnection of Ethernet/Wi-Fi)
- Other data collection failures

If the overall network is functioning normally but the system reports "offline," AI chat and software-installation-dependent features will be temporarily unavailable. However, basic workspace information will still be loaded from cache.