---
sidebar_label: '3.5.2 System Requirements'
title: 3.5.2 System Requirements
---

# 3.5.2 System Requirements

The remote IDE runs a code-server instance on the board, thus imposing certain requirements on the board's hardware, storage, and network. This section lists the minimum requirements and recommended configurations.

## Hardware Requirements

| Item | Minimum | Recommended |
|---|---|---|
| Device Architecture | ARM64 | ARM64 |
| Available Memory on Board | 1 GB | 2 GB |
| Available Disk Space on Board | Approximately 200 MB for code-server itself; project space required additionally | At least 5 GB for project space |
| Network | Board must be able to access the built-in image repository (D-Robotics CDN) during installation | Same as above |

The RDK X3, X5, and S100 boards all meet these requirements. If you are developing multiple projects in parallel or installing numerous extensions, it is recommended to reserve 2 GB of memory and 5 GB of disk space.

## Unsupported Environments

| Environment | Reason |
|---|---|
| x86 / x64 Boards | code-server is only packaged for ARM64 |
| Minimal Images Without systemd | Automated deployment relies on systemd for service registration |
| Non-Debian-based Images Without apt | Automated installation depends on dpkg / apt |

If your board uses one of the above non-standard environments, you can refer to the [official code-server documentation](https://github.com/coder/code-server) for manual deployment instructions.

## Extension Compatibility

Most VS Code extensions work with code-server, but there are the following limitations on ARM64 architecture:

| Extension Type | Support |
|---|---|
| Pure JavaScript Extensions | Fully supported |
| Extensions Including ARM64 Binaries | Supported |
| Extensions Including Only x86 / x64 Binaries | Not supported (Pylance is the most common example) |

To determine whether an extension is compatible: check the "Requirements" or "Platform support" section on the extension's page in the VS Code Marketplace and confirm that `linux-arm64` is listed.