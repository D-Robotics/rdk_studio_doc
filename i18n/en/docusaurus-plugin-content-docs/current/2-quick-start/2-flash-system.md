---
sidebar_label: '2.2 Flashing the System Image'
title: 2.2 Flashing the System Image
---

# 2.2 Flashing the System Image

Begin from this step when your board lacks a usable system, the existing system is corrupted, or you need to replace the image. If your board already boots normally, you can skip this section and proceed directly to [2.3 Connecting Your Device](./3-connect-device/index.md).

## Flashing via the Onboarding Wizard

After your first login, once you complete the "Select Hardware" step in the onboarding wizard, it will automatically proceed to the **Flash System** step. This step lists recommended images compatible with your selected board and provides one-click access to the flashing tool:

![Onboarding Wizard · Step 2 – Flash System: Recommends RDKOS 3.4.1 Desktop (Ubuntu 22.04 / GUI) for the selected RDK X5, with buttons below labeled "Download Image" and "Open Flashing Tool"](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/onboarding-2-flash.png)

Clicking *Open Flashing Tool* navigates you to the full flashing wizard (*System Flashing* tab). The entire process consists of four steps: **Select Device → Select Image → Start Flashing → Complete**.

![Studio Flashing Wizard · Step 1 – Select Board Type: Cards display RDK X3 / X5 / S100(P), with S100(P) marked as using the dedicated XBURN channel](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/08-burnning.png)

Follow these steps in order:

1. Select your target board type (RDK X3 / RDK X5 / RDK S100)
2. Choose a recommended image version (D-Robotics official images listed by default)
3. Confirm the target storage medium (TF card, eMMC, or dedicated tool)
4. Wait for the download and flashing process to complete

Flashing duration depends on the storage medium and image size; TF card flashing typically takes 5–15 minutes.

If you missed the onboarding wizard, you can re-enter the flashing workflow from the *System Flashing* tab.

## Quick Reference: Three Flashing Media Options

| Board Type | Recommended Flashing Method |
|---|---|
| RDK X3 | TF Card Flashing |
| RDK X5 (without eMMC) | TF Card Flashing |
| RDK X5 (with eMMC version) | TF Card Flashing or eMMC Flashing |
| RDK S100 | Dedicated xburn Tool |

## Important Notes During Flashing

During the flashing process, you may switch to other tabs to view AI chat or run commands, but you must **not**:

- Remove the TF card or disconnect the USB cable
- Allow your PC to enter sleep or hibernation mode
- Close the main Studio window (minimizing is allowed)

After flashing completes, insert the TF card into your board and power it on, then wait for the board to boot.

## Detailed Procedures and Advanced Usage

This section only covers the minimal steps needed to get up and running quickly. For advanced scenarios, please refer to [3.7 System Flashing](../3-user-guide/7-system-flashing/index.md):

- Balanced vs. Turbo modes for TF card flashing
- Uploading custom local images
- eMMC flashing and eMMC backup
- Detailed xburn operations for RDK S100
- Comprehensive troubleshooting checklist for flashing failures

## Next Steps

Once your board has been flashed and powered on successfully, proceed to [2.3 Connecting Your Device](./3-connect-device/index.md) to add your board to Studio’s device list.