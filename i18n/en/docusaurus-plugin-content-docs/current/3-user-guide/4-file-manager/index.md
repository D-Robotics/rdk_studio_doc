---
sidebar_label: '3.4 Files'
title: 3.4 Files
description: 'Entries for workspace files and device file management'
---

# 3.4 Files

Files includes **task-workspace files** and **device file management**. For local projects, use Open location → Files to browse the authorized folder. Device files require the intended SSH connection.

## Steps

1. Check the project, work location, and folder.
2. Open a local project directly; for board projects, verify the device is online and a remote folder is bound.
3. Browse through the directory tree, path bar, and file list.
4. Use the upload, download, create, rename, and edit actions provided by the current view.
5. Verify the target before writing and check the result after saving.

Local and board folders are stored separately. After switching device, project, or location, do not treat an older file list as the new target's content. Follow loading errors rather than assuming success.

## Files and the Agent

Inspect Agent changes at the corresponding work location. After manual saves, have the Agent reread current content. If another application is editing the file, check for overwrite conflicts before saving.

## Continue reading

- [Browse and transfer](./1-browse-and-transfer.md)
- [Edit files](./2-online-edit.md)
- [Paths and permissions](./3-path-access-control.md)
