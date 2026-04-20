---
sidebar_label: '5.9 Multi-device Switching Issues'
title: 5.9 Multi-device Switching Issues
---

# 5.9 Multi-device Switching Issues

**Typical symptoms**: After switching devices, the AI conversation context appears to remain on the previous device / the "device list" is missing / two boards are connected simultaneously, and running `device_exec` targets the wrong device.

## 30-Second Decision Guide

*Settings Panel → Device Connection* → Check the "Device List":

- **List is empty** → Refer to "Backup & Restore" below  
- **List is complete** → Confirm the currently active device via the device dropdown in the top-right corner of the header bar

## Troubleshooting Checklist

1. **Missing device list** — Occasionally occurs after upgrades. Go to *Settings Panel → Device Connection → Import Device Configuration* to re-import; if you never exported before, re-enter the device details manually.

2. **AI conversation context mixed up** — Studio creates one session per device by default and automatically switches sessions when changing devices, but **model token usage is globally shared**. If responses clearly don’t match the current device’s context, click *New Session* at the top of the *AI Chat* panel to force open a fresh window.

3. **Commands executed on the wrong device** — Verify the "Target Device" label at the top of AI Dock. If AI automatically selected the "primary device," explicitly specify the target by saying in the AI chat: “Execute XX on device X.”

4. **Concurrent connection limit per device** — Studio enforces a default SSH concurrency limit of 8 per device. When long-running tasks occupy all slots, other operations will queue—this is **not an error**. Simply wait for the running commands to finish.

## Permanent Solutions

- When multiple team members share the same board, designate a **dedicated operator** to avoid accidentally killing each other’s processes.
- Add **clear labels** to production devices (use the "Notes" field when adding a device).
- Regularly back up your configuration via *Settings Panel → Device Connection → Export Device Configuration*.