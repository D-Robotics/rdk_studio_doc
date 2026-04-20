---
sidebar_label: '3.9.4 Configuration Import and Export'
title: 3.9.4 Configuration Import and Export
---

# 3.9.4 Configuration Import and Export

The device list can be exported as a JSON file for scenarios such as switching computers, sharing with colleagues, or restoring configurations after upgrading Studio.

## Export Device Configuration

| Path | *Configuration Center → Device Connection → Export Device Configuration* |
|---|---|
| Export Format | JSON file |
| Included Content | Device name, IP, port, username, SSH credentials (password or key path), platform profile, notes |
| Not Included | Conversation history, skill installation status, token usage data |

## Important: JSON Contains Plaintext SSH Passwords

If password-based authentication is used for a device, the exported JSON file contains plaintext SSH passwords (only lightly obfuscated, not encrypted). Treat this file with the same level of protection as you would the password itself:

| Recommended Practices | Not Recommended Practices |
|---|---|
| Transfer via encrypted channels (e.g., company-encrypted email, encrypted IM) | Share through public chat groups, email attachments, or cloud storage |
| Use one-time transfers (delete immediately after transfer) | Keep the file in shared folders with long-term accessibility |
| Use SSH keys instead of passwords in team environments | Multiple team members sharing the same root password |

## Recommendation: Migrate to SSH Key Authentication

For production devices used long-term, we recommend switching to SSH key authentication to avoid storing passwords in plaintext within exported files.

Migration steps:

1. Generate an SSH key pair on your PC (if you don’t already have one):

   ```bash
   ssh-keygen -t ed25519
   ```

2. Push the public key to the target device:

   ```bash
   ssh-copy-id root@<device_IP>
   ```

3. In Studio, edit the device entry and change the authentication method from *Password* to *SSH Key*, then select your local private key file.
4. Save and reconnect to verify.

After migration, exported JSON files will no longer contain passwords—only the private key file path. Remember to securely store your private key file.

## Import Device Configuration

| Path | *Configuration Center → Device Connection → Import Device Configuration* |
|---|---|
| Operation | Select JSON file → Confirm → Devices are automatically added to the list |
| Conflict Handling | If a device with the same name already exists, you’ll be prompted whether to overwrite it |
| Cross-Version Compatibility | The importer automatically migrates most fields; however, manual adjustments may be needed for certain fields when migrating across major versions (e.g., v1.0 → v1.1) |

After import, all device fields (IP, credentials, profile) are immediately available—no re-detection is required.