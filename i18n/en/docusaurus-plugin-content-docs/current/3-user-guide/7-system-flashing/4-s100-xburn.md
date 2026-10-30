---
sidebar_label: '3.7.4 S100 and S600 flashing'
title: 3.7.4 S100 and S600 flashing
description: 'Flash S100 and S600 firmware using the XBurn flow'
---

# 3.7.4 S100 and S600 flashing

S100 and S600 both require board-specific firmware and flashing procedures, but current in-app support differs.

## S100 / S100P

1. Select the matching S100 model in the desktop Flasher.
2. Choose official firmware or a local **firmware archive or folder**.
3. Connect Type-C and prepare the flashing mode as instructed.
4. Confirm and select **Start flashing (in app)**, then wait for preparation and writing results.

macOS prepares the environment automatically and may request administrator authorization for writing. Windows can offer a manual-flashing-mode option. Firmware format and paths must pass validation; do not modify package contents.

If the version cannot flash S100 in the app, follow its upgrade or official companion-tool guidance.

## S600

S600 uses **manual XBurn flashing**. It has no in-app S600 writer or ordinary TF-card image flow.

1. Obtain the S600-compatible XBurn and official guidance from the current flashing page.
2. Download and prepare firmware as instructed, then connect the board over Type-C.
3. Select its firmware directory in XBurn and flash.
4. Confirm the tool's actual result before starting and connecting the device.

Do not reuse older S100 tools or firmware. Follow current S600 guidance for tool/image compatibility.

## Troubleshooting

Keep the failed phase, error, firmware source, and tool version. Check cables, USB connectivity, flashing mode, and firmware integrity. Wait for the original writing process to stop before retrying. See [official RDK documentation](https://d-robotics.github.io/rdk_doc_center/en/) for detailed board procedures.
