---
sidebar_label: '3.8.1 Open Wi‑Fi configuration'
title: 3.8.1 Open Wi‑Fi configuration
---

# 3.8.1 Open Wi‑Fi configuration

## Opening Wi‑Fi configuration

The usual entry is the Wi‑Fi icon in the top toolbar—click it to open the current device’s Wi‑Fi dialog.

When you first add a device, the add-device wizard can jump to the Wi‑Fi step. To review defaults later, visit *Configuration center → Device connection*.

## Reading connection status

The top Wi‑Fi icon reflects the active device roughly as:

| State | Meaning |
|---|---|
| Connected | On Wi‑Fi; network name is shown |
| Disconnected | No usable Wi‑Fi link right now |
| Connecting | Scanning, associating, or obtaining an IP |
| Failed | Wrong password, weak signal, router policy, or DHCP issue (among others) |

The Wi‑Fi dialog shows steps and failure messages. Usually verify first: password, distance to the router, and whether new clients are allowed.

## Troubleshooting with Moss

Prefer entering SSID/password in the Wi‑Fi dialog itself. When connection fails, paste the on-page hint into AI Dock—for example:

```text
This board failed to join office_2.4g; logs stop at DHCP. Help me debug.
```

To debug another board (not the active one), switch the target in the composer or name the device in your message.
