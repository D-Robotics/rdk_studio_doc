---
sidebar_label: '3.5 Remote IDE'
title: 3.5 Remote IDE
---

# 3.5 Remote IDE

![Remote IDE entry: The startup page of the embedded code-server in Studio, showing a connected RDK X5 device (root@192.168.128.10:22) in the top bar, a central "Open code-server" button, and features listed below such as "F11 Fullscreen Mode / Floating Window / AI Chat Integration / Device Port 9888 / Chinese UI + Plugin Ecosystem"](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/remote-ide.png)

Click "Open code-server" to enter the browser-based full VS Code:

![Browser-based VS Code (code-server fully loaded): Left-side file explorer listing files under /root on the board, right-side Welcome page displaying the "Get Started with VS Code for the Web" tutorial](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/remote-ide-connected.png)

The Remote IDE provides a complete VS Code experience within RDK Studio, powered by code-server. All files, Git repositories, debuggers, and terminals operate directly on the board—developers don't need to sync code back to their PC; the Studio client serves only as a UI container.

## Difference from File Manager

| Use Case | Recommendation |
|---|---|
| Editing one or two files, quick code inspection | [3.4 File Manager](../4-file-manager/index.md) (Monaco Editor—ready instantly) |
| Project-level development involving multiple files, Git, debugging | Remote IDE in this section |
| Running commands, viewing lengthy outputs | [3.3 Remote Terminal](../3-remote-terminal/index.md) or the integrated terminal in the IDE |

In short: File Manager is for "quick edits," while Remote IDE is for "developing entire projects."

## Contents of This Section

- [3.5.1 Installation and Initialization](./1-install-and-init.md): Automatic installation process upon first opening the IDE  
- [3.5.2 System Requirements](./2-system-requirements.md): Hardware and network requirements for the board  
- [3.5.3 Floating Window Mode and Extension Management](./3-floating-window.md): Desktop-client-exclusive floating window mode and recommended extensions