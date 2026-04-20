---
sidebar_label: '3.14.1 Task Queue'
title: 3.14.1 Task Queue
---

# 3.14.1 Task Queue

The task queue is located on the right side of the top toolbar in RDK Studio, centrally displaying ongoing workspace-related tasks. Developers can monitor the progress of long-running tasks without switching tabs. This design is inspired by the download list typically found at the bottom of web browsers.

## Task Types Displayed in the Top Toolbar

| Type | Trigger Scenario |
|---|---|
| System Flashing | After initiating flashing in the *System Flashing* tab |
| OpenClaw Deployment / Upgrade / Uninstall | Long-running tasks triggered from the *OpenClaw* tab |
| SFTP Batch Transfer | Drag-and-drop upload or download of multiple files in *File Manager* |
| Bulk Skill Installation | Installing multiple skills in *Skill Workshop* |
| Device Diagnostics | Comprehensive diagnostics initiated via *AI Chat* |
| Agent Orchestration (Multi-step Tasks) | Board-side tasks delegated by AI to OpenClaw |
| Device Discovery | Connectivity scan during device addition |

## Tasks Not Shown in the Top Toolbar

The task queue only displays tasks that are "workspace-related and frontend-perceivable." The following tasks are **not** shown in the top toolbar:

- Background heartbeats (device health monitoring)
- AI chat sessions themselves (progress visible in AI Dock)
- Single SSH commands (output visible in the remote terminal)
- WebSocket persistent connections (status indicated via status lights)

Progress, logs, and actions (retry, pause, cancel) for each complete workflow are typically managed within their respective feature pages or conversation contexts; only tasks meeting the criteria of "long-running + cross-tab perceivable" appear as chips in the top toolbar.

## Actions

| Action | How To |
|---|---|
| View Details | Click the chip → Navigate to the corresponding feature page (e.g., clicking the flashing chip opens the *System Flashing* page) |
| Cancel | Only the "Agent Orchestration" chip provides a cancel button; cancellation methods for other tasks vary by feature |
| Pause / Retry | Not centralized in the top toolbar—must be performed on the corresponding feature page |

## Tab Isolation

Task states are maintained independently per browser tab:

- Closing a tab → Frontend task state for that tab is lost
- Whether commands already sent to the backend or board continue execution → Depends on individual feature implementations:
  - Flashing, SFTP: Usually continue to completion (writing to disk or remote device)
  - SSH commands: Session disconnects upon tab closure, but whether the board-side process continues depends on the specific command (processes started with `nohup` will persist)
- Closing a tab does **not** automatically guarantee task termination—important tasks should retain their tab until truly completed

## Task History

The top toolbar only shows currently active tasks. Historical records are accessible separately within each feature page:

| Task Type | History Access |
|---|---|
| Flashing History | *System Flashing* tab → History tab at the top |
| OpenClaw Operation History | *OpenClaw* → Operation Logs |
| AI Conversation History | AI Dock → Conversation List |
| SFTP Transfer History | Not yet persisted historically; only recorded within the current tab |

This decentralized design stems from the significant differences in historical focus across task types: flashing history emphasizes "which images were flashed," OpenClaw tracks "what configuration changes were made," and conversations prioritize "context and responses." Consolidating them into a single location would make retrieval more difficult rather than easier.