---
sidebar_label: '3.7.3 eMMC Flashing and Backup'
title: 3.7.3 eMMC Flashing and Backup
---

# 3.7.3 eMMC Flashing and Backup

The eMMC version of RDK X5 allows flashing the system onto the onboard eMMC, eliminating dependency on an external TF card. eMMC flashing is ideal for production deployment, but it is strongly recommended to back up the eMMC before flashing—eMMC flashing erases all data, and backup is the only way to revert to the original state.

## eMMC Flashing Steps

1. Put the board into flashing mode (follow the board manual to configure boot jumpers)
2. Connect the board to a PC using a USB cable
3. In the desktop client, navigate to *System Flashing → eMMC Flashing*
4. Studio automatically detects the board and starts flashing
5. Wait for flashing to complete (approximately 10–30 minutes, depending on image size)

After flashing completes, the board will automatically reboot into the new system.

## eMMC Backup

It is highly recommended to create a backup before each eMMC flashing operation. Backup procedure:

1. Go to *System Flashing → eMMC Backup*
2. Studio checks the eMMC status on the board
3. Start the backup process, with real-time progress display
4. After completion, download the backup to the local PC (saved as a `.img` file)

The backup image can be restored in reverse: select the backup file under *Local Images* and follow the standard eMMC flashing procedure to restore the board to the backed-up state. This workflow—"backup → upgrade → rollback if necessary"—is especially critical in production environments.

## Switching to Flashing Mode

The method for entering flashing mode depends on the specific hardware design of the board:

- Jumpers or DIP switches: refer to the board’s hardware manual  
- USB OTG: some boards support directly entering flashing mode via the USB OTG port

After flashing, revert the board to normal boot mode (restore jumpers or disconnect OTG) and reboot to boot from eMMC.

## Comparison with TF Card Flashing

| Aspect | TF Card Flashing | eMMC Flashing |
|---|---|---|
| Operational Convenience | High (flash TF card directly on PC) | Medium (requires switching board boot mode) |
| Flashing Speed | Fast (5–15 minutes) | Slower (10–30 minutes) |
| Upgrade Convenience | High (simply swap TF cards) | Medium (requires re-entering flashing mode) |
| Reliability | Medium (TF cards may reach end-of-life) | High (eMMC has significantly longer lifespan than TF cards) |
| Suitable Scenarios | Development, testing, frequent image switching | Production deployment, long-term operation |