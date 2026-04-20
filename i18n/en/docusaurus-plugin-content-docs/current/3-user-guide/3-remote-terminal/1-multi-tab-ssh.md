---
sidebar_label: '3.3.1 Multi-tab SSH Sessions'
title: 3.3.1 Multi-tab SSH Sessions
---

# 3.3.1 Multi-tab SSH Sessions

The remote terminal supports opening multiple independent SSH tabs simultaneously. Each tab maintains its own session and PTY process, operating independently without interference. This design makes common workflows—such as "running a long-running task in one tab while checking status in another"—a standard practice.

## Tab Independence

Each tab represents an independent SSH session, which means:

- Environment variables, current working directory (`cd` path), and shell functions defined in Tab A do not affect Tab B.
- Interrupting a command in Tab A (e.g., with Ctrl+C) does not impact commands running in Tab B.
- Closing a specific tab only terminates that tab’s SSH session; any processes started on the remote device with `nohup` will continue running.

## AI Integration: Transparent Agent

Commands invoked by the AI Agent via the `device_exec` tool are also displayed in real time within the remote terminal. Specifically:

| Initiator | Command Display Location |
|---|---|
| Developer manually typing in the terminal | Current tab |
| AI Agent invoking via tool | Also displayed in real time in the current tab |

This design ensures every action taken by the Agent remains visible to the developer, preventing scenarios where "the AI secretly performs actions behind the scenes." If the Agent executes an unintended command, the developer can immediately interrupt it using Ctrl+C directly in the terminal (and the corresponding Agent task in AI Dock will be canceled synchronously).

## Tab Behavior When Switching Devices

When switching the currently active device, the remote terminal opens a new session for the new device in a new tab by default, while preserving tabs associated with the previous device. This prevents accidentally terminating long-running tasks when switching devices. If you don’t need to retain the old tab, you can close it manually.

## Standard Shell Shortcuts

The terminal fully supports standard shell keyboard shortcuts:

| Shortcut | Function |
|---|---|
| Ctrl + C | Interrupt current command |
| Ctrl + D | Exit shell (close tab) |
| Ctrl + L | Clear screen (when terminal has focus) |
| Tab | Auto-complete |
| ↑ / ↓ | Navigate command history |
| Ctrl + R | Reverse search through history |
| Ctrl + W | Delete previous word |
| Ctrl + U | Clear entire line |



## Copy and Paste

| Platform | Copy | Paste |
|---|---|---|
| Windows / Linux | Selecting text automatically copies it (to avoid accidentally interrupting commands with Ctrl + C) | Ctrl + Shift + V or middle mouse button |
| macOS | Select text + Cmd + C | Cmd + V |