---
sidebar_label: '3.7.1 Comparison of Flashing Media'
title: 3.7.1 Comparison of Flashing Media
---

# 3.7.1 Comparison of Flashing Media

RDK Studio supports three types of flashing media, each tailored for different board models and usage scenarios. This section provides a comparison table and selection recommendations.

## Comparison of the Three Media Types

| Medium | Compatible Boards | Recommended Use Case | Medium Cost |
|---|---|---|---|
| TF Card (SD Card) | RDK X3, RDK X5 | Development and debugging; situations requiring quick switching between image versions | Low (a 32 GB SanDisk Extreme card costs approximately ¥50) |
| eMMC (On-board) | RDK X5 with eMMC version | Production deployment; scenarios not relying on external storage | Fixed on board; no additional purchase required |
| RDK S100 xburn | RDK S100 | The only flashing method available for RDK S100 | Fixed on board |

## Selection Recommendations

| Your Board Model and Goal | Recommended Medium |
|---|---|
| RDK X3 in any scenario | TF Card |
| RDK X5 (without eMMC) | TF Card |
| RDK X5 (with eMMC) during development | TF Card (for easier image switching) |
| RDK X5 (with eMMC) for mass production deployment | eMMC (no external medium required; more reliable) |
| RDK S100 in any scenario | xburn tool |

## TF Card Selection Recommendations

Not all TF cards are suitable for use as an RDK system disk. We recommend selecting cards that meet the following criteria:

- Capacity ≥ 16 GB (32 GB or 64 GB recommended)
- Speed Class 10 or higher (A1 / A2 Application Performance Class recommended)
- Reputable brands (e.g., SanDisk, Samsung, Kingston)

Common issues with low-quality TF cards include:

- False capacity labeling, causing flashing failures mid-process  
- Slow write speeds, resulting in flashing times of tens of minutes  
- Short lifespan, leading to frequent read/write errors after 1–2 months of use  

## Preparations Before Flashing

Regardless of the medium used, it is recommended to:

- Back up any data on the target medium beforehand (flashing will erase all existing data)  
- Power off the board to prevent accidental boot-up during flashing  
- Ensure your PC is connected to a stable power source (laptops should be plugged into their AC adapters to avoid sleep mode during flashing)