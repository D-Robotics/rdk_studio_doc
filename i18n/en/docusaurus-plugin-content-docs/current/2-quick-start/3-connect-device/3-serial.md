---
sidebar_label: '2.3.3 Connect via Serial Port'
title: 2.3.3 Connect via Serial Port
---

# 2.3.3 Connect via Serial Port

![Add Device Dialog · USB Serial Debugging Instructions (Driver Download Link and Wiring Steps)](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/add-device-serial-form.png)

Serial port access is the emergency method when SSH is unavailable on the board: by directly reading the board's console through UART, you can view boot logs, log into the board’s shell, and debug U-Boot and kernel startup. Serial access provides only terminal capabilities and does **not** support file transfer, remote desktop, or remote IDE.

## Applicable Scenarios

| Scenario | Solved by Serial |
|---|---|
| Board is bricked and stuck at logo during boot | Read boot logs to locate the issue |
| Misconfigured network prevents SSH connection | Enter console to restore correct configuration |
| Need to view dmesg or kernel logs | Full kernel output available |
| Debugging U-Boot or kernel boot process | Only viable method |
| Need to transfer files, view desktop, or use remote IDE | Not supported by serial; requires SSH |

## Step 1: Wiring

The physical location of the serial port and default baud rate vary by board model (**these three parameters differ—always configure according to your specific board model; otherwise, you’ll see garbled text**):

| Board Model | Serial Port Location | Default Baud Rate |
|---|---|---|
| RDK X3 | UART2 on the 40-pin GPIO header | `921600` |
| RDK X5 | Onboard micro-USB debug port (built-in USB-UART bridge) | `115200` |
| RDK S100 | Onboard USB-UART (Type-C debug port J16) | `921600` |

> All boards use `8N1` configuration with no flow control.

RDK X5 and RDK S100 include a built-in USB-UART bridge—simply connect to your PC using a standard USB data cable. For RDK X3, you need a USB-to-TTL module, cross-connecting the module’s RX/TX pins to the board’s UART pins.

## Step 2: Select Serial Access in Studio

Open the desktop client and click **Add Device** at the top. In the pop-up window, choose **USB Serial Debugging** and fill in the following fields:

| Field | Default Value | Description |
|---|---|---|
| Serial Device | (Automatically listed by Studio) | Typically `/dev/tty.usbserial-XXXX` on macOS; `/dev/ttyUSB0` on Linux; `COM3`, etc., on Windows |
| Baud Rate | `115200` | Default in Studio UI; switch to `921600` for RDK X3 and RDK S100 |
| Data / Parity / Stop Bits | 8 / N / 1 | Standard serial configuration |

## Step 3: Connect

Click **Connect**. The terminal will immediately display the board’s console: if the board is already running, you’ll see a shell prompt; if the board is booting, you’ll see boot logs.

## Common Serial Issues

| Symptom | Possible Cause | Solution |
|---|---|---|
| Serial device list is empty | Driver not installed or cable not properly connected | macOS and Linux are usually driver-free; install CH340/FTDI drivers on Windows |
| Garbled characters appear after connection | Baud rate mismatch | Use `921600` for X3/S100 and `115200` for X5; if still garbled, try `1500000` |
| Characters appear but pressing Enter has no response | Incorrect line-ending setting | Studio defaults to LF; try switching to CRLF |
| Only a few lines appear during boot then stops | Incomplete UART connection or console hijacked | Check jumpers; some kernels may redirect console output to another channel |

## Emergency Example: Board Fails to Boot into System

Follow these steps to troubleshoot boot failure:

1. Connect the serial cable and power off the board.
2. In Studio, start listening on the serial port (connect first).
3. Power on the board.
4. When you see the U-Boot countdown, press any key to interrupt.
5. Once in the U-Boot shell, you can:
   - `setenv bootargs ...` to modify boot arguments
   - Choose an alternative kernel to boot
   - Flash firmware via TFTP (advanced)

If you can’t interpret U-Boot output, copy the entire boot log into AI Dock—AI will analyze exactly where the boot process is failing.

## Next Steps

Once the board boots successfully, switch to [2.3.2 Connect via SSH](./2-ssh.md) to restore full functionality (remote terminal, file management, IDE, remote desktop).