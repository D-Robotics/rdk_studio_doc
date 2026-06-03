---
sidebar_label: '3.4.1 Browse and transfer files'
title: 3.4.1 Browse and transfer files
---

# 3.4.1 Browse and transfer files

The Files UI has three parts: the folder tree on the left, the file list on the right, and the task bar at the bottom.

## Layout

| Area | What it shows |
|---|---|
| Left folder tree | Common root folders on device and children of what you expanded |
| Right file list | Files in the current folder: name, size, modified time, permissions |
| Top address bar | Type a path to jump quickly (e.g. `/opt/tros/humble/lib/`) |
| Top breadcrumbs | Each segment can be clicked |
| Bottom task bar | Active uploads/downloads with speed and ETA |

## Upload files

| Method | How |
|---|---|
| Drag and drop | Drag files or folders from the PC onto the Studio window |
| Upload button | **Upload** in the toolbar opens a file picker |
| Bulk upload | Select multiple files or a whole folder in one shot |

Progress appears in the task bar. Writes to sensitive paths (e.g. `/sys`, `/proc`) follow access-control rules — see [3.4.3 Paths you cannot edit](./3-path-access-control.md).

## Download files

| Method | How |
|---|---|
| Download icon | Icon next to a file downloads to your PC default download folder |
| Bulk download | Select multiple files → right‑click **Download selection** → gets a ZIP |
| Drag out | On hosts that support it, drag to desktop or Explorer |

## Context menu

Right‑click a file or folder:

| Action | Purpose |
|---|---|
| New file | Creates an empty file in this folder |
| New folder | Creates a subfolder here |
| Rename | Renames the file or folder |
| Delete | Deletes the selection (Delete key works too) |
| Copy full path | Copies absolute path to clipboard |
| Open terminal here | Opens a new **Terminal** tab with `cd` to this folder |

## Filename search

The search box searches file names **only** in the current folder (no recursion), avoiding stalls on huge trees.

For wider search, tell AI Dock: “Under `/opt/tros`, find `.hbm` files” — Moss can run appropriate find commands.

## Common paths

| Path | Use |
|---|---|
| `/userdata/` | RDK‑recommended writable user area (survives image refresh) |
| `/tmp/` | Temp files cleared on reboot |
| `/opt/tros/humble/` | TROS install (lib, share, include) |
| `/home/<user>/` | User home |
| `/var/log/` | System logs |
| `/etc/` | System configuration |
