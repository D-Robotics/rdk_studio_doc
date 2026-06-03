---
sidebar_label: '3.6.1 Open remote desktop'
title: 3.6.1 Open remote desktop
---

# 3.6.1 Open remote desktop

## Auto startup

First Remote desktop page visit fires:

1. Check whether viewer stack exists.
2. Prompt to install gaps.
3. After install Studio starts remote desktop.
4. Interactive once canvas renders.

Hands‑free — no SSH package hunting. Prep takes longer once; repeats are quicker.

## Password auth

To block casual openings, a viewer password gate may appear on first boot:

- On first launch the UI may show an eight‑digit default PIN, or you can align it with the passphrase actually used on the device.
- This credential is **only** for remote desktop; it is **not** the device SSH password.
- If you switch PC or device, or change the passphrase on the board, enter it again in the page before connecting.

## Security

Avoid exposing raw desktop services WAN‑wide — normal Studio path is safest.

If the canvas stays blank or the session drops, copy the UI message and describe device status to Moss so it can check network, desktop components, and permissions.
