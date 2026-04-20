---
sidebar_label: '5.2 SSH Connection Failure'
title: 5.2 SSH Connection Failure
---

# 5.2 SSH Connection Failure

## Typical Symptoms

Error messages appear when adding a device in *Device Management* or executing SSH commands:

- `ssh: connect to host X.X.X.X port 22: Connection timed out`
- `Permission denied (publickey,password)`
- `Host key verification failed`
- `Connection refused`

## Quick Diagnosis

Perform the following two-step diagnosis in order:

1. `ping <Device IP>`:
   - **Unreachable** → Network issue; refer to [5.7 Network Connection Failure](./7-network-failed.md) or [5.3 Type-C Flash Connection Failure](./3-typec-flash-failed.md)
   - **Reachable** → Proceed to Step 2
2. `ssh root@<Device IP>`:
   - `Permission denied` → Incorrect username or password; default credentials for official RDK images are `root` / `root`
   - `timed out` → The SSH daemon (`sshd`) is not running on the device
   - `Host key verification failed` → The device's OS was reflashed; clear the old host key as described below under "Clear Old Host Keys"

## Troubleshooting Checklist

1. **Network Reachability**: Run `ping <Device IP>`. If packet loss exceeds 5%, proceed directly to [5.7](./7-network-failed.md).
2. **SSH Service Running on Device**: Log into the device via serial console or another method and run:  
   `systemctl status ssh && netstat -tlnp | grep :22`
3. **Correct Credentials**: Official RDK images use `root/root` by default. When using custom credentials, ensure "Custom Credentials" is checked in Studio.
4. **Firewall Rules**: On Windows, configure third-party firewalls to allow outbound traffic for `ssh.exe` and inbound traffic on port 22.
5. **Host Key Changed**: After reflashing the device image, its host key changes. On your PC, run `ssh-keygen -R <Device IP>` to remove the old key.

## Common Default IPs at a Glance

| Connection Method       | Default IP           | Subnet                              |
|-------------------------|----------------------|-------------------------------------|
| Type-C Flash Connection | `192.168.128.10`     | `192.168.128.0/24` (PC side: `.100`) |
| Ethernet Direct (X5)    | `192.168.127.10`     | `192.168.127.0/24`                  |
| WiFi / DHCP             | Assigned by router   | Scan with `nmap -sn 192.168.1.0/24`, or check your router’s admin interface |

## Permanent Solutions

- Enable **Auto Reconnect** for frequently used devices.
- Use SSH keys instead of passwords: `ssh-copy-id root@<IP>`
- Configure a static IP on production devices (modify `/etc/dhcpcd.conf` or use `nmcli`)