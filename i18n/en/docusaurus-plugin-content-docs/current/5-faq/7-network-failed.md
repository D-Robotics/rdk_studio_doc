---
sidebar_label: '5.7 Wi-Fi connection failed'
title: 5.7 Wi-Fi connection failed
---

# 5.7 Wi-Fi connection failed

## Typical symptoms

- Post–add-device Wi‑Fi step shows no SSIDs.
- “Connected” but no IP.
- After Type-C direct the PC loses general internet.
- Wi‑Fi profile disappears after reboot.

## First three steps

1. Move closer to the AP; double-check SSID/password.
2. Rescan & reconnect from RDK Studio’s Wi‑Fi dialog.
3. Copy the error string to Moss if it still fails.

## Checklist

| Issue | Fix |
|---|---|
| No SSIDs | Proximity; band support; hidden SSIDs need manual entry |
| Bad password | Case, symbols, stray IME spaces |
| No IP / DHCP timeout | Router blocking new clients? Reboot AP |
| Lost after reboot | Rejoin once in Studio; confirm the board persisted the profile |
| PC offline after Type-C | Adjust Wi‑Fi priority per UI hint; clear default gw/DNS on USB NIC |

For production rigs, assign static leases so addresses don’t jump after router reboots.
