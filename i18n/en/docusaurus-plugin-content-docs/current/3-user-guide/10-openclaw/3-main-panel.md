---
sidebar_label: '3.10.3 View status and configure'
title: 3.10.3 View status and configure
---

# 3.10.3 View status and configure

The **On-device Agent** page is organized around status summary, control panel, and on-board chat. First time: read the header, then deploy, repair, or configure models as prompted.

## Header status

The top bar shows on-board Agent health at a glance:

- **Device:** online and operable over SSH
- **Assistant:** OpenClaw installed, connector healthy, install integrity
- **Board outbound:** board can reach networks needed for deploy and models
- **Models:** whether a reachable model is available to the on-board agent

When something is off, the page suggests next steps such as deploy, diagnose & repair, configure models, or check network.

## Control panel

The right-side control panel has three tabs:

| Tab | Role | Typical actions |
|---|---|---|
| Deploy & connection | Install, run, and recover OpenClaw | Check env, one-click deploy, cancel deploy, diagnose & repair, restart connector, uninstall |
| Models | Model settings for the on-board agent | Follow Moss “thinking” model, or set Base URL, model ID, API key, then sync |
| Feishu integration | Feishu channel on the board | Enter app details, start/stop channel, manage paired users |

## Configuration checklist

The page shows a **configuration status** list, typically:

- **On-device agent:** not installed, corrupted install, installed, connector running, running but board offline from internet
- **Models:** unset, selected but missing credentials, OK
- **Feishu:** not configured or configured

Each row has actions such as “Deploy on-device agent”, “Diagnose & repair”, “Configure”, “Edit”, “View”.

## Quick tasks and on-board chat

Quick chips open the matching flow:

| Quick item | Purpose |
|---|---|
| Health check | Run a device and agent health pass |
| YOLO | Run the YOLO sample on this device and return results |
| Error explain | Interpret recent board logs for errors |
| Connection | Check on-board Agent connection |

When device, network, and model are OK, chat with the on-board agent at the bottom. It excels at tasks on *this* device; coordinate across devices, PC files, or deep analysis with Moss instead.
