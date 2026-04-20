---
sidebar_label: '3.7.2 TF Card Flashing'
title: 3.7.2 TF Card Flashing
---

# 3.7.2 TF Card Flashing

![Flashing Wizard · Step 2: Select Image – Lists official images such as RDKOS 3.4.1 Desktop/Server, 3.3.3 Desktop/Server, etc.; local image files can be uploaded on the right](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/flash-wizard-select-image.png)

TF card flashing is the most commonly used method for flashing RDK X3 and RDK X5 devices. The built-in flasher in Studio encapsulates low-level dd operations and provides native disk scanning, automatic privilege escalation, progress display, and other capabilities.

## Procedure

1. Insert the TF card into your PC's card reader.
2. Open the desktop client, navigate to the *System Flashing* tab, and select *TF Card Flashing*.
3. Select your target board model (RDK X3 or RDK X5).
4. Choose an image version (see "Image Selection" below for details).
5. Select the correct TF card from the list of detected cards (**double-check carefully! Flashing will erase all data**).
6. Choose a flashing mode: balanced or turbo.
7. Click *Start Flashing*.
8. Wait 5–15 minutes (depending on card speed and image size).

You may switch to other tabs during flashing to view AI chat or run commands, but do **not** remove the TF card or allow your PC to enter sleep mode.

## Comparison of Flashing Modes

| Mode | Speed | Recommended Use Case |
|---|---|---|
| balanced (default) | Medium | Best compatibility; suitable for most TF cards |
| turbo | 1.5–2× faster | Only suitable for high-quality TF cards (e.g., SanDisk Extreme Pro and other A2-grade cards) |

If you're unsure about your TF card's quality, use the balanced mode for greater reliability. Low-quality cards may fail verification mid-flashing when using turbo mode.

## Image Selection

By default, the Studio flashing page lists officially recommended images from D-Robotics:

| Board Model | Recommended Image | Includes Desktop |
|---|---|---|
| RDK X3 | RDKOS 3.0.x | Desktop (with GUI) / Server (command-line only) |
| RDK X5 | RDKOS 3.x (latest version) | Desktop / Server |

If you're uncertain which version to choose, **select the latest version**—this is usually the correct choice. Rolling back to older versions is rarely needed and should only be done when explicitly required by a specific project.

## Supported Image Formats

| Format | Description |
|---|---|
| `.img` | Raw disk image |
| `.img.xz` | xz-compressed; smaller file size, faster download |
| `.img.gz` | gzip-compressed; common format for Linux distribution images |

Studio automatically decompresses compressed images during flashing—no manual extraction is required.

## Uploading Local Images

To use a custom image (e.g., a team-customized build):

1. Go to *System Flashing → Local Images*.
2. Select your local `.img`, `.img.xz`, or `.img.gz` file from your PC.
3. Proceed with the same steps as when using built-in images.

## Common Issues

| Symptom | Troubleshooting |
|---|---|
| TF card not detected | Try a different card reader or USB port; the TF card may be damaged |
| Write failure or verification failure | The TF card may have bad blocks—reformat and retry, or replace the card |
| Device fails to boot after flashing | Mismatch between image version and board model—re-flash using the officially recommended version |

For comprehensive troubleshooting guidance, refer to the flashing-related sections in Chapter 5.x (Common Issues).