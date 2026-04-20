---
sidebar_label: '3.4 File Management'
title: 3.4 File Management
---

# 3.4 File Management

![File Management Interface: directory tree on the left, file list on the right, path breadcrumbs at the top](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/06-file.png)

File Management is a visual file operation interface within RDK Studio for onboard devices, offering capabilities such as directory browsing, uploading, downloading, and online editing. All file transfers are based on the SFTP protocol (a subsystem of SSH) and are fully encrypted throughout—never transmitted in plaintext—unlike traditional FTP.

File Management shares the same file system with AI Dock's file operation tools (`device_file_read`, `device_file_write`, `device_file_list`): files edited and saved by developers in File Management will reflect the updated content the next time AI reads them; similarly, files modified by AI will display those changes in File Management after the developer refreshes the view.

## This section includes

- [3.4.1 Directory Browsing and Transfers](./1-browse-and-transfer.md): directory tree on the left, file list on the right, drag-and-drop uploads, and batch downloads  
- [3.4.2 Online Editing](./2-online-edit.md): browser-based editor powered by Monaco Editor, supported file types and limitations  
- [3.4.3 Path Access Control](./3-path-access-control.md): write restrictions on sensitive paths (/sys, /proc) and exception-based authorization