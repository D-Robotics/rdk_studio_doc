---
sidebar_label: '3.4.1 Browse and transfer files'
title: 3.4.1 Browse and transfer files
description: 'Browse local or device directories and transfer files'
---

# 3.4.1 Browse and transfer files

Check the local/device target, then browse with the tree, breadcrumbs, path bar, or file list. The task-workspace folder selector can also switch projects or change the corresponding folder.

## Upload and download

- Upload through the button or drag files into a supported view. Folder and batch support depend on the entry.
- Download through the file row or menu, then follow the system save prompt.
- On failure, check device connectivity, directory permissions, and the displayed error before retrying.

File views do not necessarily share batch download, folder-archive, or drag-out capabilities. Use the actions actually provided; do not assume ZIP packaging or dragging to the desktop is available everywhere.

## File operations

Use the current menu to create files/folders, rename, delete, copy paths, or open a terminal here. Check the location and target before deleting. After opening a terminal, verify whether it is local or on the intended device.

Name filters apply to the current view. For broader searches, specify the scope to the Agent:

```text
Read-only: find .hbm files under this board project's folder and list full paths. Do not modify anything.
```

`/tmp` is typically temporary; system and model folders vary by image. Whether flashing, partitioning, or upgrading retains a directory depends on the procedure. Do not treat `/userdata` or any similar folder as a guaranteed backup.
