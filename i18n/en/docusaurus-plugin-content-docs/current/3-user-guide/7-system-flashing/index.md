---
sidebar_label: '3.7 Flashing'
title: 3.7 Flashing
description: 'Choose a board and image, then start flashing'
---

# 3.7 Flashing

Open **Device & development → Flasher**, choose the board and image, then confirm the target disk/device. Flashing overwrites target media; back up data and verify the target first.

| Scenario | Action |
|---|---|
| RDK X3 / X5 TF card | Select an official/local image, insert the card, and choose its disk |
| X5 eMMC | Use the flow matching the specific eMMC model |
| S100 / S100P | Use in-app firmware preparation and writing where supported by the desktop environment |
| S600 | Follow official XBurn guidance to select firmware and flash manually |
| Web Flash Bridge | Start the bridge on your computer; it scans and writes once online |

System/internal disks may be hidden by protection policy. Changing board type does not bypass target restrictions. Keep power and cables stable and wait for actual results.

An Agent opening Flasher or checking readiness does not mean disk writing was authorized or started. Follow explicit confirmation and real progress on the page.

## Continue reading

- [Quick flashing flow](../../2-quick-start/2-flash-system.md)
- [TF card](./2-tf-card.md)
- [eMMC](./3-emmc.md)
- [S100 / S600](./4-s100-xburn.md)
