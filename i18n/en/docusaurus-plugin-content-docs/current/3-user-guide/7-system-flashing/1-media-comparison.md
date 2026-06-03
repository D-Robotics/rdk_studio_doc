---
sidebar_label: '3.7.1 Choose a flashing method'
title: 3.7.1 Choose a flashing method
unlisted: true
---

# 3.7.1 Choose a flashing method

RDK Studio supports three flashing methods for different boards and scenarios. Scan the comparison below, then pick the one that fits.

## Three entry points compared

| Entry | Typical use |
|---|---|
| TF card flashing | Common install path for RDK X3 / X5 |
| eMMC flashing | Use only when both the device and image support the eMMC flow |
| RDK S100 flashing | Dedicated flow for RDK S100 / S100P |

## Recommendations

| Your board and goal | Preferred medium |
|---|---|
| First-time setup on RDK X3 or RDK X5 | Start with TF card flashing |
| The page indicates eMMC support for the current device | Follow the eMMC procedure |
| RDK S100 / S100P | Use the S100 flashing flow |

## TF card tips

Some TF cards are not suitable as a system drive. Follow the image page or the board’s official guidance, and prefer reliable, healthy cards from trusted sources. Low‑quality TF cards often show:

- Fake capacity leading to failures mid‑flash
- Slow writes stretching flash time significantly
- Frequent read/write errors after some use

## Before you flash

Regardless of medium, beforehand you should:

- Back up anything on the target medium (flashing wipes existing data)
- Power off the board to avoid accidental boot during flashing
- Keep the PC on stable power (laptop plugged in—avoid sleep during flashing)
