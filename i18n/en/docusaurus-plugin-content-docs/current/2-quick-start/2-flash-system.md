---
sidebar_label: '2.2 Flash system image'
title: 2.2 Flash system image
---

# 2.2 Flash system image

Start here when the board has no usable OS, the OS is damaged, or you need to switch images. If the device already boots normally, skip this and go to [2.3 Connect a device](./3-connect-device/index.md).

## Enter flashing from onboarding

After “Choose board” in first-time onboarding, you reach “Prepare system.” If you choose to flash, the full flashing page opens. The wizard has four steps:

1. **Choose device**: RDK X3, RDK X5, RDK S100 / S100P, or another target for writing a local image.
2. **Choose image**: Official image, or a local image / firmware file.
3. **Start flash**: Confirm the TF card, disk, or device to write, then begin.
4. **Done**: Safely remove the TF card as prompted, or wait for the device to reboot.

![RDK Studio flash wizard: first choose the device type to flash](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/08-burning.png)

## Device and flash method

| Device | Recommended method | Notes |
|---|---|---|
| RDK X3 | TF card | Pick an official image and write to TF card |
| RDK X5 | TF card; eMMC-capable boards can use eMMC flow | Official image list is filtered by board |
| RDK S100 / S100P | S100 flash flow | Official firmware package or extracted firmware folder |
| Other device | Local image write | Generic SD / TF write for non-RDK boards |

RDK S100 supports firmware download, environment prep, and writing inside RDK Studio. If the local environment is unsupported or write fails, the UI will point you to the official flashing tool.

## Stable vs high-speed mode

TF-style writes offer two performance modes:

| Mode | Best for |
|---|---|
| Stable mode | Default; lower resource use; suitable for most PCs |
| High-speed mode | Faster writes; higher resource use; may affect other apps on low-end PCs |

Flashing erases the target card or disk. Before starting, confirm you did not select the system disk, a portable drive, or any volume with important data.

## What not to do while flashing

- Do not unplug the TF card, reader, Type-C cable, or S100 connection.
- Do not sleep, shut down, or force-quit RDK Studio.
- Do not dismiss system permission dialogs carelessly; canceling during S100 write may still require waiting for the writer to stop.

## Next steps

Power the device after flashing. When the system boots, go to [2.3 Connect a device](./3-connect-device/index.md).

For full TF card, eMMC, S100, and local image write coverage, see [3.7 System Flashing](../3-user-guide/7-system-flashing/index.md).
