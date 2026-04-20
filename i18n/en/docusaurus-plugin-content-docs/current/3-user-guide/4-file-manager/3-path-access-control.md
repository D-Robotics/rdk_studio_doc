---
sidebar_label: '3.4.3 Path Access Control'
title: 3.4.3 Path Access Control
---

# 3.4.3 Path Access Control

Write access to certain sensitive paths (e.g., `/sys`, `/proc`) is restricted by Studio's security policy. This mechanism prevents AI Agents from accidentally damaging the board-side system—for example, writing data to incorrect kernel interfaces could crash the system.

## Restricted Paths

| Path | Reason for Restriction |
|---|---|
| `/sys/` | Linux kernel interface; writing to specific files may alter kernel behavior or even cause hardware malfunctions |
| `/proc/` | Linux process and kernel status interface; writing may interfere with running processes |
| `/dev/` | Device nodes; incorrect writes may cause device malfunctions |
| `/boot/` | System boot-related files; incorrect modifications may prevent the system from booting |

Reading these paths is **not** restricted—developers can freely browse and view their contents. Only write operations are intercepted.

## Exception Authorization Methods

If a developer genuinely needs to write to a restricted path, there are two approaches:

### Method 1: Use the Remote Terminal

Manually execute commands in the [3.3 Remote Terminal](../3-remote-terminal/index.md):

```bash
echo 1 > /sys/class/leds/red/brightness
```

The remote terminal bypasses the file management access control layer, so all commands are executed directly by the board-side shell.

### Method 2: Explicit Authorization in AI Dock

Explicitly grant authorization when describing your request in AI Dock, for example:

> "I authorize you to write to the `/sys/class/leds` path. Please turn on the red LED."

Upon receiving such explicit authorization, the Agent will perform the write operation. This method is suitable for scenarios where you want to leverage AI automation while still operating on sensitive paths.

## Interception Behavior

When file management intercepts a write operation, the following message is displayed:

```
This path is within a restricted range and cannot be written to directly via file management.
Please use the remote terminal to operate manually, or explicitly authorize the action in AI Dock.
```

There will be no ambiguous state where an operation appears successful but was actually not performed—the interception always clearly informs the developer.