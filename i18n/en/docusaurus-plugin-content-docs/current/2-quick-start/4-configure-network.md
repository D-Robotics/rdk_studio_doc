---
sidebar_label: '2.4 Configure Network'
title: 2.4 Configure Network
---

# 2.4 Configure Network

Configure Wi-Fi connectivity for the board so it can independently access the network. After configuration, even if the Type-C data cable or Ethernet cable is unplugged, you can still remotely access the board over the wireless network.

Under the hood, Studio uses SSH to remotely execute `nmcli` (NetworkManager command-line tool) on the board to scan for and connect to Wi-Fi networks. The configuration is saved to `/etc/NetworkManager/system-connections/` on the board, enabling automatic reconnection after reboot—no need to manually reconnect each time.

## Configure via Setup Wizard

After completing [2.3 Connect Device](./3-connect-device/index.md), the setup wizard automatically navigates to the Wi-Fi configuration page:

1. Click **Scan** and wait for Studio to list available Wi-Fi networks nearby.
2. Select your target SSID from the list.
3. Enter the Wi-Fi password (for hidden SSIDs, check **Hidden Network** and manually enter the SSID name).
4. Click **Connect** and wait for Studio to confirm successful connection.

If you're only using Type-C or Ethernet connectivity, you may skip Wi-Fi configuration—this step prepares for future wireless access and won't affect your current development workflow.

## Configure via AI

You can also let the AI Agent handle Wi-Fi setup. In the AI Dock, describe: "Connect the board to the office_5g Wi-Fi network with password xxxx." The Agent will perform scanning, connecting, IP verification, and other steps, then inform you of the board's new Wi-Fi IP address upon completion.

If the connection fails (due to incorrect password, weak signal, hidden SSID, etc.), the AI will proactively indicate the specific reason.

## Next Steps After Successful Connection

After successfully connecting to Wi-Fi, we recommend **adding a new device** in your device list using the board’s Wi-Fi IP address, labeled as "Board Name (Wi-Fi)." This way, after the next boot-up, you can directly select the Wi-Fi-connected device without rescanning or reconfiguring.

```
Original device: RDK-X5-Workstation1 (Type-C, 192.168.128.10)
New entry: RDK-X5-Workstation1-WiFi (SSH, 192.168.1.45)
```

You can later switch between these two devices via the top toolbar: use Type-C when at your workstation, and Wi-Fi when mobile.

## Detailed Operations and Advanced Usage

This section covers only the minimal steps needed to get up and running quickly. For advanced usage, please refer to [3.8 Network Configuration](../3-user-guide/8-network-config/index.md):

- Switching between multiple Wi-Fi networks  
- Manually adding hidden SSIDs  
- Persistent configuration and auto-reconnect on boot  
- Deleting saved Wi-Fi networks  
- Forcing priority between Ethernet and Wi-Fi