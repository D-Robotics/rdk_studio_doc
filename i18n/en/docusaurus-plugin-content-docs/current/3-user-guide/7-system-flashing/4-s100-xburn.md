---
sidebar_label: '3.7.4 S100 flashing'
title: 3.7.4 S100 flashing
---

# 3.7.4 S100 flashing

RDK S100 uses the dedicated **xburn** tool—you cannot flash a TF card the same way as RDK X3 / X5.

RDK Studio’s flashing page guides you to download **xburn-gui** from D-Robotics.

## Steps

1. In the desktop client, open *Flashing → S100*.
2. Studio shows an xburn-gui download link (matched to your OS).
3. Download and install xburn-gui.
4. Prepare the image—usually `product.zip` or an extracted folder.
5. Follow the in-Studio guide and complete flashing in xburn-gui.

When available, the desktop client also offers *Open local xburn* and *one-click CLI flash* to reduce manual tool launches.

## Getting xburn-gui

| OS | Download |
|---|---|
| Windows | Install package link on the Studio flashing page |
| macOS (Apple Silicon / M series) | DMG link on the Studio flashing page |

xburn-gui is maintained by D-Robotics. For full usage docs, see the RDK S100 flashing section in [RDK official documentation](https://developer.d-robotics.cc/rdk_doc).

## Preparing the image

RDK S100 images are often shipped as `product.zip` containing:

- The system image
- Bootloader
- Partition layout
- Checksums / metadata

Do **not** manually unpack and edit contents—that can brick the flash or fail boot. Provide `product.zip` to xburn-gui as-is.

## Troubleshooting

| Symptom | What to try |
|---|---|
| xburn-gui won’t start | Install required drivers/components per D‑Robotics docs |
| Board not responding | Full-feature USB cable? Correct boot mode? |
| Flash fails mid-way | Re-seat USB and retry; if persistent, verify `product.zip` integrity |

If troubleshooting stalls, check the S100 section on [RDK developer community](https://developer.d-robotics.cc) or describe the error in AI Dock.
