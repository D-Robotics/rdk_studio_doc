---
sidebar_label: '3.7.4 RDK S100 xburn'
title: 3.7.4 RDK S100 xburn
---

# 3.7.4 RDK S100 xburn

The RDK S100 uses a dedicated xburn toolchain and cannot directly flash SD cards like the RDK X3 and X5. xburn-gui is a graphical flashing tool provided by D-Robotics, supporting Windows, macOS, and Linux platforms.

## Procedure

1. In the desktop client, navigate to **System Flashing → S100**.
2. Studio provides a download link for xburn-gui (automatically selected based on your current PC platform).
3. Download and install xburn-gui.
4. Prepare the image file, typically named `product.zip` or its extracted directory.
5. Follow the flashing instructions within Studio to complete the flashing process in xburn-gui.

When system support is available, the desktop client may also offer options to **Open Local xburn** and **One-Click CLI Flashing**, eliminating the need for developers to manually launch external tools.

## Obtaining xburn-gui

| Platform | Download Method |
|---|---|
| Windows | Studio flashing page provides a link to the Windows installer |
| macOS | Studio flashing page provides a dmg link (supports both Apple Silicon and Intel) |
| Linux | Studio flashing page provides links to either a deb package or an AppImage |

The latest version of xburn-gui is maintained by D-Robotics. For detailed usage documentation, refer to the RDK S100 flashing section in the [RDK Official Documentation](https://developer.d-robotics.cc/rdk_doc/en/rdk_s/RDK).

## Image Preparation

RDK S100 images are typically distributed as a `product.zip` file, which includes:

- The system image itself
- Bootloader
- Partition table
- Checksum information

Do not manually extract and modify files inside the archive, as this may cause flashing failures or prevent the board from booting. Simply provide the `product.zip` file directly to xburn-gui.

## Common Issues

| Symptom | Troubleshooting |
|---|---|
| xburn-gui fails to launch | Missing underlying drivers—install them according to D-Robotics' official documentation |
| Board unresponsive | Verify that the USB cable is fully functional and that the boot mode is correctly set |
| Flashing fails mid-process | Replug the board's USB connection and retry; if failures persist, verify the integrity of `product.zip` |

If troubleshooting does not resolve the issue, we recommend consulting the S100 section of the [RDK Developer Community](https://developer.d-robotics.cc) or describing the specific error in AI Dock.