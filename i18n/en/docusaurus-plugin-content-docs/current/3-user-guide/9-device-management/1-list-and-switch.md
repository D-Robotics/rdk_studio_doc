---
sidebar_label: '3.9.1 Switch active device'
title: 3.9.1 Switch active device
---

# 3.9.1 Switch active device

## What appears in the list

Each row shows:

| Field | Description |
|---|---|
| Note name | The label you gave the device |
| IP address | Address used for access |
| Online state | Whether the device is reachable now—see [3.9.3 View online status](./3-online-monitoring.md) |

Sort by name, IP, or state to find devices quickly in multi-board setups.

## Three ways to change the active device

| Method | Where | When to use |
|---|---|---|
| Top-left device dropdown | Most pages | Fastest for daily work |
| *Activate* in the device list | *Configuration center → Device connection* | When you need details before switching |
| Natural language in AI Dock | e.g. “Switch to RDK-X5-bench-2” | When you don’t want to leave the editor |

After switching, the workspace tracks the newly active device.

## What changes after switching

Workbench, Files, IDE, Remote Desktop, and AI Dock target the new device. Open terminal tabs and chat history stay—switch back later and continue where you left off.

| Area | Effect |
|---|---|
| Workbench | Reloads state for the new device |
| Files / IDE | Points at the new device’s environment |
| AI Dock | Uses the new device’s context |
| Top bar IP list | Shows the new device’s addresses |

## Quick IP from the top bar

After switching, click the device name in the top bar to view/copy its IP—no terminal query needed for external tools.
