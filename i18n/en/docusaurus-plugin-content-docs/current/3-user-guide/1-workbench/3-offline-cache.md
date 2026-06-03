---
sidebar_label: '3.1.3 Offline cache'
title: 3.1.3 Offline cache
unlisted: true
---

# 3.1.3 Offline cache

When the device is offline or the network is unstable, the Workbench does not go blank—it shows the last fetched state and marks the device offline. That way you can still gauge what was happening before the device dropped.

## What you see when offline

| Page state | Meaning |
|---|---|
| Online | Data comes live from the device |
| Slow response or connection failure | The page explains why and keeps trying to recover |
| Offline | Offline badge and the last known state |

After the device is back online, the Workbench updates automatically. You usually do not need to refresh manually.

## How to interpret offline data

Data shown offline is not live—use it only as reference:

- Check any timestamp on the page to see how old the data is.
- Do not use offline data to judge current temperature, load, or task state.
- To keep running device actions, restore the network or reconnect the device first.

## Workbench with multiple devices

The Workbench only shows the **active** device. To switch devices, use the device dropdown at the top, or pick another device under *Configuration center → Device connection*.

After switching, the Workbench reloads data for that device and does not keep the previous device’s state.
