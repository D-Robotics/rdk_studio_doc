---
sidebar_label: '3.3.3 Serial Connection'
title: 3.3.3 Serial Connection
---

# 3.3.3 Serial Connection

The Remote Terminal tab supports serial connections (without SSH) and manages both serial and SSH sessions within the same interface. Serial connection serves as a fallback method when SSH is unavailable on the board. For detailed wiring, configuration, and troubleshooting examples, see [2.3.3 Accessing via Serial Port](../../2-quick-start/3-connect-device/3-serial.md).

## Unified Entry for Serial and SSH

Studio’s Remote Terminal does not differentiate between SSH and serial connections—both are created through the same *New Tab* entry:

| Option | Behavior |
|---|---|
| Select *SSH Session* | Establishes an SSH connection to the currently active device |
| Select *Serial Connection* | Opens a serial configuration dialog to select the serial port and baud rate |

This design enables seamless switching during troubleshooting: use the serial connection to diagnose boot failures, then switch to SSH for full development workflows once the board boots successfully.

## Limitations of Serial Connections

Serial connections provide only terminal access and do **not** support:

- File transfer  
- Remote desktop  
- Remote IDE  
- OpenClaw deployment (requires network connectivity)

If file transfer or GUI operations are needed during troubleshooting, you must establish an additional SSH connection to the same device. Studio allows simultaneous SSH and serial access to the same device, with both channels operating independently.

## Console Log Panel

Next to the Remote Terminal tab, there is a "Console" panel that displays runtime logs from the **Studio backend** (not logs from the board). This panel is used to diagnose issues within Studio itself—for example, SSH session establishment failures or abnormal Model API calls. Under normal circumstances, this panel does not need to be viewed; it should only be opened when Studio exhibits unexpected behavior.