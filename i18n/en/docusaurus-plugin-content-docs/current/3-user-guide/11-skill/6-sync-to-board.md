---
sidebar_label: '3.11.6 Sync to Board'
title: 3.11.6 Sync to Board
---

# 3.11.6 Sync to Board

Skills are installed on the PC by default and loaded by D-Moss Agent. If you want the always-on OpenClaw Agent on the board to use these skills as well (e.g., for long-term monitoring, offline autonomous operation, or message processing in channels), you need to sync the skills to the board's OpenClaw workspace.

## Sync Process

| Step | Action |
|---|---|
| 1 | *Skill Workshop → Installed* (Board) |
| 2 | Select the skills you want to sync (or select all) |
| 3 | Click the *Sync Skills* button |
| 4 | Studio transfers the selected skills to the board’s OpenClaw workspace via an SSH tunnel |
| 5 | The board’s OpenClaw rescans the skills directory, and the new skills become immediately available |

Syncing is unidirectional: PC → Board. If the board’s skills fall out of sync with the PC, you must manually trigger syncing again.

## Auto-sync Disabled by Default

Studio disables "automatically sync newly installed PC skills to the board" by default. Reasons include:

- Initial sync of all 45 built-in skills takes 1–3 minutes  
- Not all skills need to run on the board (e.g., skills designed exclusively for the PC)  
- Auto-sync could consume bandwidth without the user’s awareness  

If your team workflow truly requires "PC and board to always stay in sync," you can enable auto-sync in *OpenClaw → Configuration*.

## When Sync Is Needed

| Scenario | Required? |
|---|---|
| Board used only as an SSH remote target, with PC always online | No—skills loaded by PC-side D-Moss suffice |
| Board runs a persistent Agent handling long-term monitoring tasks | Yes—sync monitoring-related skills to the board |
| WeChat / Feishu Bot deployed on the board | Yes—sync message-processing skills to the board |
| Multi-board collaboration requiring identical capabilities on each board | Yes—sync skills to every board |

## Viewing Sync Progress

Sync progress is displayed in real time under the *Logs* sub-tab in the OpenClaw tab:

```
[14:23:15] Starting sync of 12 skills to board
[14:23:16] Pushing rdk-openclaw → /home/root/openclaw/skills/rdk-openclaw/
[14:23:17] Pushing rdk-device-ops → ...
...
[14:23:45] Sync completed; board’s OpenClaw reloading skill index
```

If syncing fails midway (e.g., due to network disconnection), you can re-trigger it—the already synced skills will be skipped, and only missing ones will be resent.

## Uninstalling Skills from the Board

| Access Point | Action |
|---|---|
| Within Studio | *Skill Workshop → Installed* (Board) → Select → *Uninstall from Board* |
| Board Command Line | SSH into the board and delete the `~/openclaw/skills/<skill-name>/` directory |

Uninstalling from the board removes only the board’s local copy and does not affect the identically named skill on the PC.