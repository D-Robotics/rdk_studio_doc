---
sidebar_label: '3.13.4 Device connection defaults'
title: 3.13.4 Device connection defaults
unlisted: true
---

# 3.13.4 Device connection defaults

Device connection sets **global** habits for how Studio reaches devices. It does not change a specific device’s host/IP, username, or password.

## Main options

Defaults are fine unless you hit a concrete issue or team policy says otherwise.

| Setting | When it matters |
|---|---|
| Auto-reconnect | Device drops briefly; you want it online again without manual retry |
| Connection timeout | Slow network or slow boot; SSH often times out too early |
| Per-device SSH concurrency cap | Many terminals, file jobs, or Moss tasks on one device |
| LAN collaboration | Same-LAN multi-PC / multi-device teamwork |
| Online check interval | Many devices, or you need faster offline/online visibility |

## Auto-reconnect

Leave on. Studio retries after short outages or reboots. Turn off only when devices stay offline on purpose and reconnect noise is annoying.

## Connection timeout

How long Studio waits for SSH during connect. Increase for slow links or cold boots; local stable LANs rarely need changes.

## Per-device SSH concurrency cap

Too many parallel SSH sessions, transfers, and Moss jobs can queue new work. Leave default unless devices and network clearly have headroom.

## LAN collaboration

Leave off for solo work. Enable only when your team coordinates multi-machine / multi-device tests on the LAN.

## Online check interval

Defaults are fine with few devices. With many devices or heavy network load, you may lower check frequency; raise it when you need quicker online/offline feedback.
