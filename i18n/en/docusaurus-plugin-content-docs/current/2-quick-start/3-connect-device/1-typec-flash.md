---
sidebar_label: '2.3.1 Type-C direct'
title: 2.3.1 Type-C direct
---

# 2.3.1 Type-C direct

RDK Type-C direct is for when the device is next to your PC but has no LAN IP yet. RDK Studio helps detect the Type-C NIC, set up the direct link, and add the device using default credentials.

## When it applies

| Item | Requirement |
|---|---|
| Device | RDK hardware with USB networking |
| Cable | Full-feature Type-C data cable; charge-only cables will not work |
| Client | RDK Studio desktop app |
| Permissions | Admin rights may be needed the first time you configure the local NIC |

After a successful direct link, the device appears in the device list like any SSH device. File manager, terminal, Moss, OpenClaw, and other features then work the same way.

## Steps

1. Connect the board to your PC with a Type-C cable and wait for it to boot.
2. Open *Add device → RDK Type-C direct*.
3. In the NIC list, pick the interface that appears or goes online after you plug in.
4. Click *Connect*. RDK Studio configures the local network and tries to reach the device.
5. After success, enter or confirm the device alias and save to the list.

Typical addresses:

| Side | Address |
|---|---|
| Device | `192.168.128.10` |
| PC | A local address on the same subnet as the device |

The UI prefers online interfaces; you can switch to “show all” to debug offline or unrecognized NICs.

## Common messages

| Symptom | What to do |
|---|---|
| Type-C NIC not detected | Confirm the cable supports data; replug and refresh |
| NIC present but no IP | Confirm you selected the RDK NIC, then start connect again |
| SSH timeout | Wait for full boot and stable power, then retry |
| Auth failure | Defaults are often `root/root`; if the image password was changed, use the SSH flow and enter credentials manually |
| PC loses internet | USB NIC may have changed route priority; follow the in-app hint to adjust network settings |

Full troubleshooting: [5.3 Type-C direct failed](../../5-faq/3-typec-flash-failed.md).

## Next steps

Type-C direct suits first bring-up and bench debugging.

To use the device without the cable later, continue with [2.4 Configure network](../4-configure-network.md). After Wi-Fi is set up, add another SSH device entry using the Wi-Fi IP.
