---
sidebar_label: '5.7 WiFi Connection Failure'
title: 5.7 WiFi Connection Failure
---

# 5.7 WiFi Connection Failure

**Typical Symptoms**: After entering the SSID and password in the *WiFi Configuration* pop-up window, connection fails / connection appears successful but `ip addr` shows that `wlan0` hasn't obtained an IP address / WiFi configuration is lost after reboot.

## 30-Second Diagnosis

Run these three commands on the board to identify which step is failing:

```bash
nmcli dev status                # Check if the WiFi module is functioning properly
nmcli dev wifi list             # Check if the target SSID is visible
nmcli dev wifi connect "TargetSSID" password "Password"  # Manually connect
```

## Troubleshooting Checklist

1. **SSID Scanning** — When `nmcli dev wifi list` doesn't show the target network:
   - Weak signal (< -70 dBm): move closer to the router
   - 5 GHz-only router + board only has a 2.4 GHz module → switch routers or enable 2.4 GHz band
   - Hidden SSID: `nmcli dev wifi connect "SSID" password "Password" hidden yes`

2. **Incorrect Password** — `nmcli` won't explicitly tell you this; it generically reports `Error: Connection activation failed`. Retry manually and pay attention to case sensitivity.

3. **DHCP Failure** — Connected but no IP assigned:

   ```bash
   sudo dhclient wlan0
   # or
   sudo systemctl restart NetworkManager
   ```

4. **Driver Issues** — On RDK X3 / X5 boards, the WiFi module occasionally needs reloading:

   ```bash
   sudo rmmod 8852be
   sudo modprobe 8852be
   ```

   Check the exact module name using `lsmod | grep 88`.

## Permanent Solutions

- In the *WiFi Configuration* pop-up, check "Save Configuration" so Studio deploys persistent settings to NetworkManager on the board.
- If configuration disappears after reboot, NetworkManager likely isn't set to auto-start: `sudo systemctl enable NetworkManager`.
- For long-term production environments, we recommend using **Ethernet + static IP**.