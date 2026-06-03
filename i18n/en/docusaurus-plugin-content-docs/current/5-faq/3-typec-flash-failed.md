---
sidebar_label: '5.3 Type-C direct failed'
title: 5.3 Type-C direct failed
---

# 5.3 Type-C direct failed

## Typical symptoms

- After choosing RDK Type-C direct during add-device, the NIC list is empty.
- A NIC appears offline or has no address.
- After setup, SSH to `192.168.128.10` fails.
- Wi‑Fi stays up but general internet breaks on the PC.

## Quick diagnosis

| Symptom | Likely cause |
|---|---|
| No new NIC | Charge-only cable, or USB networking not enabled on device |
| NIC offline | Boot incomplete, or wrong interface selected |
| Timeout with NIC | Boot not finished, wrong address, or weak power |
| Auth failure | Image password differs from default `root/root` |
| PC loses internet | USB NIC bumped default-route priority |

## What to do

1. Use a **full-feature** Type-C cable.
2. Power-cycle the board and wait for full boot, then refresh the list.
3. Pick the interface that appears/changes state when you plug in.
4. If the UI warns about routing, adjust Wi‑Fi priority as hinted.
5. If auth keeps failing, use the SSH dialog and fill username, password, and Host/IP manually.

## Address convention

On RDK Type-C direct link, the board side often uses **`192.168.128.10`**. Don’t confuse it with Ethernet/Wi‑Fi DHCP addresses.
