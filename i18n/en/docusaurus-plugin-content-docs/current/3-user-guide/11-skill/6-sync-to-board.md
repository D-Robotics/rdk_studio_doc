---
sidebar_label: '3.11.6 Sync to device'
title: 3.11.6 Sync to device
unlisted: true
---

# 3.11.6 Sync to device

Skills default to the PC for Moss.

To let board OpenClaw handle them—on-board chat, device-side messaging, hardware-local automation—mirror them into the OpenClaw workspace.

## Sync flow

| Step | Action |
|---|---|
| 1 | *Skill Workshop → Installed* (board scope) |
| 2 | Select skills (multi-select OK) |
| 3 | Press *Sync skills* |
| 4 | Wait until the progress banner clears |

Synchronization pushes PC copies to the attached board—after edits locally, rerun sync intentionally.

## Auto-sync stays off by default

Studio disables “Automatically sync newly installed PC skills to the board.” Rationale:

- Many skills remain desktop-only (docs review, repos on disk)
- Background sync wastes bandwidth unnoticed

Teams needing parity should agree on cadence or run manual batch sync periodically.

## When sync matters

| Scenario | Need sync |
|---|---|
| Board is only SSH target; Moss on PC suffices | Usually no |
| Board Agent invokes the capability | Yes—push related skills |
| WeChat/Feishu bots pinned to hardware | Yes—include handler skills |
| Same skill spans multiple robots | Repeat per hardware |

## Progress and failures

Status chips live directly in Skill Workshop. On failure validate device uptime and OpenClaw health, retry sync afterward.

## Uninstall from board

Under *Skill Workshop → Installed* (board), pick **Remove from board**. That wipes the device copy—not the PC originals.
