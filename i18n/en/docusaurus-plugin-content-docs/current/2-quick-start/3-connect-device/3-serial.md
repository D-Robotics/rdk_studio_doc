---
sidebar_label: '2.3.3 Serial log'
title: 2.3.3 Serial log
---

# 2.3.3 Serial log

The serial path shows boot logs from a device wired to your PC—useful when boot fails, the network is unreachable, or you need to watch the startup sequence.

**Serial does not add the device to the device list.** It does not enable file ops, Moss device actions, or OpenClaw automatically.

## What serial can do

| Capability | Supported? |
|---|---|
| View boot and console output | Yes |
| Help rescue devices with no network | Yes |
| Shell access for manual fixes | Depends on serial login being enabled |
| Save as an RDK Studio device | No |
| Files, remote desktop, code editor | No—use SSH |
| Moss device tooling | No—use SSH |

If the UI does not expose serial, follow on-screen guidance.

## Steps

1. Connect the debug cable to the RDK debug port or a USB-UART adapter.
2. Confirm the OS sees the serial device.
3. Open *Add device → Local serial log*, or use the local serial strip on *Terminal*.
4. Click *Add* and authorize the port in the system prompt.
5. Pick the baud rate and click *Connect*.

`115200` is common on RDK debug ports. If you see garbled text, try other rates per board docs.

## Common issues

| Symptom | What to do |
|---|---|
| Empty dropdown | Click *Add* and authorize the port in the OS dialog |
| OS sees port but Studio does not | Refresh the list; pick the matching COM/tty |
| Ports show as unknown | Click *Clear unknown ports* and add again |
| Open failed | Another app may hold the port; close it and retry |
| Garbled output | Adjust baud rate; check RX/TX/GND wiring |

## Next steps

Serial only helps until the device can boot and reach the network or SSH. After that, return to [2.3.2 Add device via SSH](./2-ssh.md) to add it properly.
