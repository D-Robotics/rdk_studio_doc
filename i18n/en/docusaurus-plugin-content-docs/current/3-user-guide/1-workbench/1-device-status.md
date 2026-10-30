---
sidebar_label: '3.1.1 Device state and diagnostics'
title: 3.1.1 Device state and diagnostics
description: 'Verify the device target and review diagnostics in the workbench'
---

# 3.1.1 Device state and diagnostics

Use the device label, work-location bar, and task overview to confirm the intended target and connection state. Before diagnosis, verify the project's bound device rather than assuming another online device is the target.

| State | Meaning |
|---|---|
| Online / SSH verified | Device commands, files, and diagnostics can be requested |
| Pending verification / connecting | Wait for connection checks; old state does not prove current access |
| Offline | Saved history/logs remain readable; device operations require reconnection |
| No device selected | Ask questions or work locally; connect a device for board tasks |

## Request a read-only check

```text
Read-only: check the bound device's model, system version, CPU, memory, disk, temperature, network, and key services. State any missing information. Do not change configuration or restart anything.
```

The Agent gathers information using tools available to its runtime. Fields vary by board, OS, permissions, and connection. Inspect the reason for missing information; a missing field does not mean the entire device is unavailable.

## Verify the diagnosis

Review problems, evidence, and suggestions in the answer. Open existing execution records from the message's more menu if needed. Preserve command failures, timeouts, and missing-field messages; they are not a successful diagnosis.

Offline snapshots describe previously collected information. Working local files or terminals do not prove that the board connection has recovered.
