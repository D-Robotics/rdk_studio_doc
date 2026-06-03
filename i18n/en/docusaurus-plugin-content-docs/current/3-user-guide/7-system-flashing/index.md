---
sidebar_label: '3.7 System Flashing'
title: 3.7 System Flashing
---

# 3.7 System Flashing

![Flashing wizard: choose the board type to flash](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/08-burnning.png)

The Flashing page is used to install or reinstall the system on your board. Follow the prompts to select the board type, choose an image, pick the write target, then wait until it finishes.

[2.2 Flash system image](../../2-quick-start/2-flash-system.md) covers the fastest path to get started. The sections below go into detail by device and storage type.

## Suggested order

| Step | What to do |
|---|---|
| 1 | Confirm the board type you are flashing |
| 2 | Choose the officially recommended image, or upload an image provided by your team |
| 3 | Select the write target—double‑check it is **not** your PC’s system disk |
| 4 | After starting the flash, wait until it completes—do not unplug cables or let the PC sleep |
| 5 | When flashing is done, boot the device and connect it to RDK Studio |

Common choices are straightforward: RDK X3 / X5 usually start with TF‑card flashing; RDK X5 boards with eMMC can use eMMC flashing; RDK S100 uses the dedicated xburn tool.

## Read next

- [3.7.2 TF card flashing](./2-tf-card.md): common way to install the system on RDK X3 and RDK X5
- [3.7.3 eMMC flashing](./3-emmc.md): flashing and backup/restore for RDK X5 with eMMC
- [3.7.4 S100 flashing](./4-s100-xburn.md): dedicated flashing flow for RDK S100
