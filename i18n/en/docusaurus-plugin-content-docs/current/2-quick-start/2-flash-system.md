---
sidebar_label: '2.2 Flash a system image'
title: 2.2 Flash a system image
---

# 2.2 Flash a system image

Use Flasher when the board has no usable system or needs reinstalling. A bootable device with an IP can proceed to [Connect a device](./3-connect-device/index.md). Flashing overwrites target storage; back up important data first.

## Choose a flow

| Device | Flow |
|---|---|
| RDK X3 / X5 | Choose the board-specific image, usually written to TF/SD; use the appropriate flow for eMMC models |
| RDK S100 / S100P | Supported desktop environments can prepare firmware and flash within the app |
| RDK S600 | Follow official XBurn manual-flashing guidance rather than TF-card images |
| Other media | Choose a compatible local image and verify device compatibility |

## Image and target confirmation

1. Confirm the board type and choose an official image or local image/firmware.
2. Continue to target-disk/device confirmation as instructed.
3. Verify media name, capacity, and path; read the erase warning before starting.
4. Wait for actual download, preparation, writing, and validation results. Keep cables connected and the computer awake.
5. Start the device as instructed, then connect it to RDK Studio.

S100 accepts supported firmware archives or folders. S600 uses companion-tool guidance. If the environment is unsupported, follow the upgrade or official-tool instructions.

## Web

Pages supporting Flash Bridge use a program on your computer to read images and write disks. Start it as instructed and confirm it is online. It reads local absolute paths; the browser does not write disks directly. Use the desktop client when bridge support is absent.

See [Flashing](../3-user-guide/7-system-flashing/index.md) and [S100 / S600](../3-user-guide/7-system-flashing/4-s100-xburn.md).
