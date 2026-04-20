---
sidebar_label: '2.3 Connecting Devices'
title: 2.3 Connecting Devices
---

# 2.3 Connecting Devices

RDK Studio provides three methods to add a board to the device list. This section compares these methods and offers recommendations; detailed step-by-step instructions are provided in the three corresponding subsections.

![Onboarding Wizard · Step 3 Connect Device: Three side-by-side cards representing SSH over network, FlashConnect, and USB serial connection methods](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/onboarding-3-connect.png)

## Comparison of the Three Connection Methods

| Method | Recommended Scenario | Advantages | Limitations |
|---|---|---|---|
| Type-C Connection | Board and PC are on the same desk, without a router | Ready to use within 5 seconds after plugging in—no IP configuration required | Only supported on RDK X5 |
| SSH Connection | Board is already connected to a local network (via Ethernet or Wi-Fi) | Universal, stable, usable across rooms | Requires knowing the board's IP address |
| Serial Connection | Board fails to boot or has network issues | Does not depend on successful system startup on the board | Terminal-only—no file transfer, remote desktop, or IDE support |

## Recommendations

| Your Hardware and Board Status | Recommended Method |
|---|---|
| RDK X5 + full-featured Type-C data cable | [Type-C Connection](./1-typec-flash.md) (fastest) |
| RDK X3 or RDK S100 | [SSH Connection](./2-ssh.md) (first connect the board to your router, then obtain its IP from the router’s admin interface or via network scanning) |
| Board system corrupted or SSH inaccessible | [Serial Connection](./3-serial.md) (for emergency recovery) |

## Automatic Actions After Successful Connection

Regardless of the method used, once a board is added to Studio, the following actions are automatically performed:

- The "Current Device" dropdown in the top toolbar displays the newly added device and automatically activates it as the current target for operations.
- *Remote Terminal / File Manager / IDE / Remote Desktop* automatically point to the currently active device.
- AI chat switches to the session associated with that specific device (each device has an independent session).
- Background device probing runs automatically to identify the board model, image version, CPU/RAM specs, disk info, TROS status, etc.

For more details on device identification and advanced multi-device switching workflows, see [3.9 Device Management](../../3-user-guide/9-device-management/index.md).

## Connecting via AI

You can also let the AI Agent handle the connection for you. Simply describe your request in the AI Dock, for example:

- "Scan the RDK board connected via USB"—Agent initiates the Type-C connection workflow.
- "My board is at 192.168.1.123 with root/root credentials—please add it to my device list"—Agent initiates the SSH connection workflow.
- "The board failed to boot—help me open a serial console to view the boot logs"—Agent initiates the serial connection workflow.

The AI Agent will automatically select the appropriate method, configure parameters, establish the connection, and add the board to your device list.

## Next Steps

After successfully connecting your board, we recommend configuring Wi-Fi ([2.4 Configure Network](../4-configure-network.md)) so you can later disconnect the data or Ethernet cable and access the board remotely over wireless network.