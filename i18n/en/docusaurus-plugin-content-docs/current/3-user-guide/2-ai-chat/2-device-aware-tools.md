---
sidebar_label: '3.2.2 Device operations and results'
title: 3.2.2 Device operations and results
---

# 3.2.2 Device operations and results

Asking Moss to inspect the device, run commands, read files, or call OpenClaw counts as device work. This page explains how the target device is chosen, where execution shows up, and what needs your confirmation.

## What counts as device operations

These kinds of requests involve the device:

- Check OS version, disk, memory, network, or service status.
- Run commands, scripts, or samples on the device.
- Read, upload, or modify files on the device.
- Deploy OpenClaw, sync skills, or check on-board models.
- Trigger device-related actions via Feishu, WeChat, or other channels.

Pure concepts, documentation lookup, or drafting plans may not require a connection.

## How the target device is chosen

Moss prioritizes the device chip in the AI Dock. Before sending, check:

- Whether the current device is the one you intend.
- Whether it is online and SSH-verified.
- Whether the current project directory is the one you mean.

In multi-device setups you can name the target explicitly:

```text
Check the network on RDK-X5-workstation-1 only—do not touch other devices.
```

Fix the device chip if wrong; if offline, Moss can still plan until you reconnect.

## Where results appear

Depending on the task, output may show up here:

| Location | What you see |
|---|---|
| Chat stream | Moss explanations, steps, errors, and next-step advice |
| Terminal | Commands and their return values |
| Files | Paths read or written |
| Diagnostics | Device, network, and service checks |
| On-board Agent | OpenClaw deploy/check/model/skill results |

If results look wrong, re-check the device chip, then terminal output or on-page errors.

## Operations that need confirmation

Plain queries, status reads, and log reviews usually return directly. These can affect the device or external systems and will ask you to confirm:

- Write, overwrite, or delete files.
- Change network, service, or system configuration.
- Stop processes, restart services, or reboot the device.
- Send messages via Feishu, WeChat, or other external channels.
- Deploy, uninstall, or redeploy OpenClaw, skills, and similar components.

When scope is unclear, switch to **Plan** so Moss lists steps and risks.

## Serial is not full device access

Local serial logs only show boot output. They do **not** create an SSH device Moss can use, and they do not automatically enable Files, remote desktop, code editor, or OpenClaw.

After the network is back, add the device over SSH.
