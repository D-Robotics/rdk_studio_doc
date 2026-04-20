---
sidebar_label: '2.3.2 Connect via SSH'
title: 2.3.2 Connect via SSH
---

# 2.3.2 Connect via SSH

![Add Device Dialog · SSH Configuration Form (IP, User, Password, Port, Device Alias)](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/add-device-ssh-form.png)

SSH connection is suitable for scenarios where the board is already connected to a local network (via Ethernet or Wi-Fi). This is a universal connection method supported by all RDK boards.

## Step 1: Obtain the Board's IP Address

The method for obtaining the board’s IP address depends on your network environment:

| Your Network Environment | Method to Obtain IP |
|---|---|
| Board directly connected to PC via Ethernet cable (no router) | Default board IP: `192.168.127.10` (factory configuration in official RDK images) |
| Board connected to a router and assigned an IP via DHCP | Check the ARP table in your router’s admin interface; or use a network scanning tool (e.g., `nmap`) |
| Board connected to Wi-Fi | Same as above |

If you don’t want to scan manually, you can ask AI Dock: "Scan the local network for any RDK boards." The Agent will invoke a network scanning tool and list IPs of devices that appear to be RDK boards on your local network.

### Scanning with nmap

Run the following command on your PC (replace with your actual subnet):

```bash
nmap -sn 192.168.1.0/24
```

Try connecting one by one using `ssh root@<IP>`, or observe which newly appearing host shows up in the `nmap` output when powering on the board. The most reliable approach is to let AI Dock do it for you: say “Scan the local network for any RDK boards,” and the Agent will automatically filter out hosts likely to be RDK boards.

If you prefer not to install `nmap`, you can use a simple loop to ping each address:

```bash
for i in {1..254}; do ping -c 1 -W 1 192.168.1.$i &>/dev/null && echo 192.168.1.$i; done
```

## Step 2: Add the Device in Studio

Open the desktop client and click **Add Device** at the top. In the pop-up window, select **SSH Network Connection** and fill in the following fields:

| Field | Default Value | Description |
|---|---|---|
| IP / Host | (IP obtained in Step 1) | Supports IPv4, IPv6, and domain names |
| Port | `22` | Standard SSH port |
| Username | `root` | Default in official RDK images |
| Authentication Method | Password | See comparison below |

In some cases, the board’s SSH port might not be `22` (e.g., due to public network tunneling or running SSH inside a Docker container). Enter the actual port number if different.

## Step 3: Choose Authentication Method

| Authentication Method | Use Case | Instructions |
|---|---|---|
| Password | First-time connection; simplest method | Enter the password (default in RDK factory images: `root`) |
| SSH Key | Long-term production or team environments | Select a local private key such as `~/.ssh/id_rsa`; first-time setup requires running `ssh-copy-id` on the board |

### Setting Up SSH Key Authentication

More secure and eliminates the need to enter a password every time:

```bash
# First time (run on your PC)
ssh-keygen -t ed25519                    # Generate a key if you don't have one
ssh-copy-id root@<Board_IP>              # Push your public key to the board
```

Afterwards, when adding the device in Studio, choose **SSH Key Authentication** and select your local private key.

## Step 4: Connect

Click **Connect**. Studio will perform the following steps in order:

1. Ping the board to confirm network reachability  
2. Establish an SSH session  
3. Automatically detect board model, image version, CPU/RAM, disk, network interfaces, etc.  
4. Add the board to the device list and activate it as the current target device  

## Quick Reference for Common IPs

| Connection Scenario | Default IP |
|---|---|
| Direct Ethernet connection (board to PC via single cable) | `192.168.127.10` |
| Type-C Flash Connection | `192.168.128.10` (see [2.3.1](./1-typec-flash.md)) |
| Wi-Fi / DHCP | Assigned by router; must be looked up manually |

## Common Causes of Connection Failure

| Symptom | Solution |
|---|---|
| `Connection timed out` | Confirm network reachability with `ping <IP>` |
| `Permission denied` | Incorrect username or password; or password authentication disabled on the board |
| `Host key verification failed` | Board’s OS was reflashed, changing its SSH host key. Run `ssh-keygen -R <IP>` on your PC to remove the old key |
| `Connection refused` | SSH daemon (`sshd`) not running on the board. Access the board via serial console and run `systemctl start ssh` |

For complete troubleshooting guidance, see [5.2 SSH Connection Failure](../../5-faq/2-ssh-failed.md).

## Next Steps

After successfully connecting via SSH, we recommend configuring Wi-Fi on the board ([2.4 Configure Network](../4-configure-network.md)), so you can access it wirelessly even after disconnecting the Ethernet cable.