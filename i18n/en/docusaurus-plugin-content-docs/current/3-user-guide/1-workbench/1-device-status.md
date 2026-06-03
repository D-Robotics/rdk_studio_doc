---
sidebar_label: '3.1.1 Device status and diagnostics'
title: 3.1.1 Device status and diagnostics
unlisted: true
---

# 3.1.1 Device status and diagnostics

The Workbench surfaces device status through the **current workspace** Live page, diagnostic snapshots, device online status, and Moss task information.

## What the Workbench shows

| Area | Content |
|---|---|
| Top of current workspace | Current device, remote directory, SSH verification status, executable/read-only status |
| Live cards | Device management, project workspace settings, Git change summary, diagnostic snapshots, chat history |
| Diagnostic snapshot | Collect device runtime info and send it to Moss in one step |
| Moss chat | Answers or executes tasks using the current device, project directory, diagnostics, and file content |

## Diagnostic snapshot

When you click **Diagnostic snapshot** on the Live page, RDK Studio collects runtime information for the current device and shows a summary in the workspace. To dig deeper, you can send the snapshot to Moss.

Diagnostics typically cover:

| Type | Examples |
|---|---|
| System | Board type, image version, kernel, uptime |
| Resources | Memory, disk, temperature, CPU/BPU-related status |
| Network | IP, NICs, external reachability |
| Services | OpenClaw, code editor, remote desktop, ROS/TROS-related status |

Different boards, images, and network conditions may yield different fields. Missing fields appear as “unknown” or with a failure reason; that does not mean the whole device is unusable.

## Ask Moss to assess health

Describe what you need in the AI Dock, for example:

```text
Please assess this board’s overall health and list the issues that need attention first.
```

Moss combines the current device information, diagnostic snapshot, and available capabilities. Compared with reading a wall of metrics, this is better for troubleshooting and next-step guidance.

## What statuses mean when offline

| Status | Meaning |
|---|---|
| Online | Diagnostics collection, Terminal/Files, and device tools can run |
| Pending verification | SSH must be verified first to avoid misjudging from stale cache |
| Offline | History and cached info are viewable; device execution waits for recovery |
| Not connected | Moss can plan; device actions first prompt you to add a device |
