---
sidebar_label: '3.9.2 Automatic device detection'
title: 3.9.2 Automatic device detection
unlisted: true
---

# 3.9.2 Automatic device detection

On first connect Studio captures hardware and OS metadata and stores it so Moss knows what kind of board it is talking to.

## What gets detected

| Info | Why it matters |
|---|---|
| Board type (X3 / X5 / S100) | Gates board-specific features |
| System image details | Grounds environment-aware answers |
| ROS / TROS stack | Better ROS command guidance |
| OpenClaw status | Whether the on-board agent is available |
| BPU type | Warns if model artifacts match the board |
| Network addresses | Quick lookup in lists and Workbench |

Detection runs when you add a device—no manual trigger needed. After a full reflash, follow device detail prompts to refresh.

## How Moss uses it

Moss leans on this context for practical answers instead of generic templates.

Examples:

| You ask | Moss tends to |
|---|---|
| “Check BPU usage” | Pick checks appropriate to the board |
| “Install a ROS 2 package” | Suggest commands aligned with the installed distro |
| “Why does hbm load fail?” | Relate errors to BPU/model compatibility |

“Knowing the active device” is one of the biggest differences from a plain chat client.

## Incomplete detection

Custom images may omit standard fields—then:

- Studio marks missing items as “unknown” without blocking the rest.
- You can set board type and image version manually on the device page.
- Moss can still use those manual fields.

If answers stay wrong after manual fixes, post on [RDK developer community](https://developer.d-robotics.cc).
