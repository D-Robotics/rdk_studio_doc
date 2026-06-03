---
sidebar_label: '1.4 Supported Hardware'
title: 1.4 Supported Hardware
---

# 1.4 Supported Hardware

RDK Studio offers the most comprehensive support for the RDK series development boards, while also allowing SSH access to standard Linux hosts, Jetson, Raspberry Pi, Rockchip, and other devices.

You can think of the RDK as the primary development board and other Linux hosts as remote development environments.

## RDK Device Support

| Item | RDK X3 | RDK X5 | RDK S100 / S100P |
|---|---|---|---|
| **Flashing Method** | TF card flashing | TF card flashing; models with eMMC can use the eMMC process | S100 flashing process; the page will guide you to prepare xburn |
| **Type-C Direct Connection** | Not supported | Supported | Supported |
| **OpenClaw Deployment** | Supported, requires SSH access to the device | Supported, requires SSH or Type-C access to the device | Supported, requires the device to be online with network access |

This table only describes the support for common features in RDK Studio.

For hardware specifications such as memory, storage, and interfaces, please refer to the official pages:

- [RDK X3](https://developer.d-robotics.cc/rdkx3)
- [RDK X5](https://developer.d-robotics.cc/rdkx5)
- [RDK S100](https://developer.d-robotics.cc/rdks100)

## General SSH Devices

The **SSH Device** option in "Add Device" is a general entry point, not limited to RDK. The following devices can be used as remote hosts:

| Device Family | Available Capabilities | Limited Capabilities |
|---|---|---|
| General Linux Host | Moss, terminal, files, code editor, project workspace | RDK-specific flashing, BPU/TROS knowledge, OpenClaw device deployment |
| NVIDIA Jetson | Moss, terminal, files, code editor, project workspace | RDK-specific flashing and some board-side capabilities |
| Raspberry Pi | Moss, terminal, files, code editor, project workspace | RDK-specific flashing, OpenClaw deployment limitations |
| Rockchip Boards | Moss, terminal, files, code editor, project workspace | RDK-specific hardware knowledge and flashing process |

RDK Studio distinguishes between "RDK development boards" and "Linux hosts" based on detection results.

Some features are only displayed on RDK or board-type devices, such as Wi-Fi configuration, Type-C direct connection, BPU temperature, and the OpenClaw installation entry.

## Pay Attention to hbm When Running On-Device AI Models

hbm is the model file format used by the RDK's on-board BPU, typically with a `.hbm` file extension. It is only relevant to **on-device AI inference** and is not prerequisite knowledge for connecting devices or using RDK Studio.

If you are only logging in, flashing, adding devices, opening terminals, transferring files, using remote desktop, or working with local large language models, you can ignore hbm for now.

hbm becomes important when you run on-device AI examples like YOLO, detection, segmentation, or deploy your own models to the BPU: different RDK boards require corresponding hbm files and cannot be used interchangeably.

- hbm files for RDK X3 cannot be directly run on RDK X5 / S100.
- hbm files for RDK X5 cannot be directly run on RDK X3 / S100.
- The RDK S100 series also requires using the corresponding compiled model artifacts.

If you encounter issues like `hbm version mismatch`, `model incompatible`, or model loading failures, first verify whether the model has been recompiled for the current board type.

For detailed troubleshooting, see [5.5 Cannot load hbm model](../5-faq/5-hbm-not-found.md).

## Recommendations for Choosing Connection Methods

| Scenario | Recommended Entry |
|---|---|
| Known IP, device supports SSH | Add Device → SSH Device |
| RDK X5 / S100 is near the computer, no LAN IP available | Add Device → RDK Type-C Direct Connection |
| Only want to view boot logs or the system network is unreachable | Terminal or Add Device → Local Serial Logs |
| Need to flash a new system | Flash → Select Device → Select Image |
| Non-RDK Linux host | Add Device → SSH Device |

Serial connection is not a complete device access method. It only opens a local serial terminal, suitable for viewing boot logs or troubleshooting network-unreachable devices. File management, Moss, OpenClaw, and the code editor still require adding the device via SSH.