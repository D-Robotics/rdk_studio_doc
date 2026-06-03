---
sidebar_label: '3.8.3 Saved Wi‑Fi profiles'
title: 3.8.3 Saved Wi‑Fi profiles
unlisted: true
---

# 3.8.3 Saved Wi‑Fi profiles

Wi‑Fi profiles you configure through Studio persist on the device. After reboot, it usually reconnects without re-entering the password.

## If it doesn’t reconnect after reboot

Check in roughly this order:

- Router/Wi‑Fi health.
- Password was not changed upstream.
- Device range/obstruction—metal enclosures, racks, walls.
- Router allows new clients; DHCP can hand out addresses.

A changed IP alone is often normal—DHCP rotated leases. Prefer router reservations or static IPs when you need a fixed address.

## Removing saved networks

Remove unused profiles from the *Saved* list in the Wi‑Fi dialog—credentials for that SSID go away until you reconnect.

If deletion fails, share the hint with Moss for next steps.

## Long‑term deployments

Ethernet plus fixed IPs reduce Wi‑Fi variability and roaming IP headaches.

See [5.7 Wi-Fi connection failed](../../5-faq/7-network-failed.md) for full Wi‑Fi troubleshooting.
