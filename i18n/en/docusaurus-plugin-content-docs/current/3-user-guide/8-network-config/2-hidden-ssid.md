---
sidebar_label: '3.8.2 Hidden SSID and Advanced Options'
title: 3.8.2 Hidden SSID and Advanced Options
---

# 3.8.2 Hidden SSID and Advanced Options

## Manually Adding a Hidden SSID

Some enterprise Wi-Fi networks do not broadcast their SSID, so they won't appear in scan results. To connect to such networks, you need to enter the details manually:

1. Click *Manually Add SSID* at the bottom of the Wi-Fi configuration dialog.
2. Enter the SSID name (case-sensitive).
3. Enter the password.
4. Select the security type (WPA2 / WPA3 / WEP / Open).
5. Check the *Hidden Network* checkbox.
6. Click *Connect*.

After rebooting the board, it will automatically attempt to reconnect to the saved hidden network without requiring manual intervention again.

## Security Type Selection

| Security Type | Applicability |
|---|---|
| WPA2 | The most common standard for home and office Wi-Fi today |
| WPA3 | A newer standard used by some modern routers |
| WEP | An obsolete legacy standard, only found on old devices |
| Open | Password-less networks (e.g., cafes, public Wi-Fi) |

If you're unsure about the security type, try WPA2 first; if that fails, try other types. `nmcli` usually automatically attempts common security types during connection.

## Switching Priority Between Wired and Wireless

When the board is connected to both wired and Wi-Fi networks simultaneously, routing defaults to the wired connection (as it offers more stable performance). If you need to force traffic through Wi-Fi (e.g., when the wired network has access restrictions):

```bash
# Temporarily disable wired connection
sudo ip route del default dev eth0
```

To make this change permanent, adjust the connection priority in NetworkManager on the board:

```bash
sudo nmcli connection modify "<connection-name>" connection.autoconnect-priority 100
```

Higher values indicate higher priority.

## Switching Between 2.4 GHz and 5 GHz

Some dual-band routers use the same SSID for both 2.4 GHz and 5 GHz bands. `nmcli` typically connects to the band with the stronger signal, but in areas with marginal signal strength, frequent switching between bands may cause instability.

If you encounter this issue, we recommend configuring distinct SSIDs for each band in your router's admin interface (e.g., `office_5g` and `office_2g`), then manually selecting the more stable one in Studio.