---
sidebar_label: '3.7.3 eMMC flashing'
title: 3.7.3 eMMC flashing
---

# 3.7.3 eMMC flashing

RDK X5 boards with onboard eMMC can install the system to eMMC—no TF card needed.

eMMC flashing suits fixed deployments, but **back up eMMC strongly before flashing**. Flashing wipes existing data—backups are how you roll back cleanly.

## eMMC flashing steps

1. Put the board in flashing mode (per the board manual—boot jumper/settings).
2. Connect the board to your PC with a USB data cable.
3. In the desktop client, open *Flashing → eMMC flashing*.
4. Studio detects the board and starts flashing.
5. Wait until the page reports completion.

After flashing completes, the board reboots into the new system automatically.

## eMMC backup

Make a backup before each eMMC flash when possible:

1. Open *Flashing → eMMC backup*.
2. Studio reads the onboard eMMC state.
3. Start backup—progress appears live.
4. When done, download the image to your PC (saved as an `.img` file).

Backup images can be restored: pick that file under *Local image*, then follow the same eMMC flashing flow to return to the backed‑up state. This **backup → upgrade → rollback if needed** loop matters a lot in production.

## Boot mode switching

How to enter flashing mode depends on hardware:

- Jumper/DIP switches: follow the hardware guide.
- USB OTG: some boards can enter flashing mode directly over OTG.

After flashing, return to normal boot (restore jumpers/disconnect OTG as needed), then reboot—the board boots from eMMC.

## Compared to TF card

| Aspect | TF card | eMMC |
|---|---|---|
| Ease | High—flash from the PC reader | Medium—needs board boot-mode changes |
| Speed | Depends on image, medium, PC | Depends on image, connection, device state |
| Upgrade ease | High—swap the card | Medium—must re-enter flashing mode |
| Stability | Depends on TF card quality | Depends on onboard eMMC health |
| Best for | Dev, tests, frequent image swaps | Fixed installs, steady production use |
