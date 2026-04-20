---
sidebar_label: '3.4.1 Directory Browsing and Transfer'
title: 3.4.1 Directory Browsing and Transfer
---

# 3.4.1 Directory Browsing and Transfer

The main interface of file management is divided into three parts: the left-side directory tree, the right-side file list, and the bottom task bar.

## Interface Layout

| Area | Display Content |
|---|---|
| Left-side directory tree | Common root directories on the board and the currently opened subtree |
| Right-side file list | Files in the current directory, including name, size, modification time, and permissions |
| Top address bar | Directly enter a path for quick navigation, e.g., `/opt/tros/humble/lib/` |
| Top breadcrumb | Each segment of the current path is clickable for navigation |
| Bottom task bar | Ongoing upload/download tasks, showing speed and estimated remaining time |

## Uploading Files

| Method | Operation |
|---|---|
| Drag-and-drop upload | Drag files or folders directly from your PC into the Studio window |
| Upload button | Click the *Upload* button at the top to open a file selector |
| Batch upload | Select multiple files or an entire folder for one-time upload |

During upload, progress is displayed in the bottom task bar. Uploading to sensitive paths (e.g., `/sys`, `/proc`) is restricted by access control—see [3.4.3 Path Access Control](./3-path-access-control.md) for details.

## Downloading Files

| Method | Operation |
|---|---|
| Download button | Click the download icon next to a filename to download it to your PC's default download directory |
| Batch download | Select multiple files, right-click, and choose *Download Selected* to download them as a zip archive |
| Drag-and-drop download | Supported on macOS and Linux—drag files directly to the desktop or file explorer |

## Right-Click Context Menu

Right-clicking a file or directory opens an action menu:

| Action | Description |
|---|---|
| New File | Create a new empty file in the current directory |
| New Directory | Create a new subdirectory in the current directory |
| Rename | Rename the selected file or directory (also accessible via the F2 shortcut) |
| Delete | Delete the selected item (also accessible via the Delete key) |
| Copy Full Path | Copy the absolute path to the clipboard |
| Open Terminal Here | Open a new tab in the *Remote Terminal*, automatically changing directory (`cd`) to this location |

## Filename Search

The search box at the top searches only filenames in the current directory (non-recursive) to prevent freezing in large directories. For recursive searches across the entire filesystem, describe your request in AI Dock—for example: "Find all `.hbm` files under `/opt/tros`"—and the Agent will execute a `find` command to complete the task.

## Quick Reference for Common Paths

| Path | Purpose |
|---|---|
| `/userdata/` | RDK-recommended user-writable area; persists across system reboots |
| `/tmp/` | Temporary files; cleared on reboot |
| `/opt/tros/humble/` | TROS installation directory (includes lib, share, include) |
| `/home/<user>/` | User home directory |
| `/var/log/` | System logs |
| `/etc/` | System configuration |