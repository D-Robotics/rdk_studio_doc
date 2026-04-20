---
sidebar_label: '3.8.3 Configuration Persistence'
title: 3.8.3 Configuration Persistence
---

# 3.8.3 Configuration Persistence

Wi-Fi configured via Studio is persistent by default—after rebooting the board, it automatically reconnects without requiring manual intervention each time. This behavior is provided by the NetworkManager daemon on the board.

## Persistence Mechanism

| Step | Implementation |
|---|---|
| Studio triggers `nmcli dev wifi connect` | NetworkManager receives the connection request |
| Configuration written after successful connection | Config saved to `/etc/NetworkManager/system-connections/<SSID>.nmconnection` |
| Board reboots | NetworkManager daemon starts automatically |
| Daemon reads configuration | Actively attempts to connect to saved networks |

This mechanism is transparent to developers; under normal circumstances, "connect once, use indefinitely."

## Common Causes for Lost Configuration After Reboot

| Symptom | Troubleshooting |
|---|---|
| Wi-Fi not connected at all after reboot | NetworkManager service may not be enabled to start automatically; run `sudo systemctl enable NetworkManager` |
| Connects after reboot but IP changes | Caused by router's DHCP allocation; recommend binding a static IP to the MAC address |
| Occasional failure after reboot | Incorrect system time on the board causing certificate validation failures; ensure NTP synchronization is working properly |
| Unable to connect to previous SSID at all | Router password may have changed; re-enter the password |

## Deleting Saved Networks

Wi-Fi configurations no longer needed can be deleted:

| Method | Action |
|---|---|
| Within Studio | Wi-Fi configuration popup → *Saved* list → Select network → *Forget* |
| Board command line | Use `nmcli connection show` to list saved connections, then `nmcli connection delete <connection-name>` to delete |

After deletion, the network’s password is also cleared from the board, requiring re-entry upon next connection.

## Recommendations for Long-Term Production Environments

For production boards intended for long-term operation (e.g., devices in a server room), we recommend:

1. Prefer **wired network + static IP**: eliminates Wi-Fi signal instability and DHCP uncertainty.
2. Configure static IP using `nmcli`:

   ```bash
   nmcli connection modify "<connection-name>" \
     ipv4.addresses 192.168.1.100/24 \
     ipv4.gateway 192.168.1.1 \
     ipv4.dns 8.8.8.8 \
     ipv4.method manual
   ```

3. Add the device in Studio’s device list using the same static IP to avoid querying the board’s IP address after each boot.

For comprehensive Wi-Fi troubleshooting, see [5.7 Network Connection Failure](../../5-faq/7-network-failed.md).