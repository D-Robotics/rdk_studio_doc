---
sidebar_label: '3.8.2 Add hidden Wi‑Fi'
title: 3.8.2 Add hidden Wi‑Fi
unlisted: true
---

# 3.8.2 Add hidden Wi‑Fi

## Adding a hidden SSID manually

Some enterprise or lab networks do not advertise in scans—you add them manually:

1. Click *Add SSID manually* at the bottom of the Wi‑Fi dialog.
2. Enter the SSID (**case‑sensitive**).
3. Enter the password.
4. If prompted for security type, use what your router/admin provided.
5. Check *Hidden network*.
6. Click *Connect*.

On success the device remembers the profile—reboot usually auto‑reconnects.

## Advanced options

Most home and office setups need no tweaks—only change values when admins require them explicitly.

When unsure what an option means, leave defaults first. After a failure, send the hint to Moss or confirm network type/password with IT.

## Ethernet and Wi‑Fi together

With both plugged in and Wi‑Fi up, the system typically favors the stabler link—no extra daily steps.

If you only need to verify Wi‑Fi, unplug Ethernet temporarily. For permanent routing policy, have someone versed in networking apply it.

## 2.4 GHz vs 5 GHz

With dual‑band radios, the device often picks by itself.

If links are flaky, rename bands in router admin—for example `office_2g` and `office_5g`—then choose whichever is stabler in Studio.
