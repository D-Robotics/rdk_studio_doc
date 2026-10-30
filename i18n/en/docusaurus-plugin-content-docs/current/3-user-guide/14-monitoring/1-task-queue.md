---
sidebar_label: '3.15.1 Task progress'
title: 3.15.1 Task progress
description: 'Track current tasks, background runs, and background processes'
---

# 3.15.1 Task progress

Open the runtime overview in the top bar for current Agent execution, plans, background conversations/processes, and other long operations. Progress and controls vary by task.

## Observe and stop

| Object | Check |
|---|---|
| Current Agent task | Execution state, pending confirmation, and whether stopping completed |
| Background task | Conversation, runtime, and recovery state |
| Background process | Device/local location, logs, and stop entry |
| Flashing or other long operation | Actual progress and result on the original tool page |

Pending recovery does not mean still executing. Open the task and verify state before continuing. Changing pages or closing a panel does not prove a background task stopped.

## Scheduled tasks

Where offered, the scheduled-task panel shows prompts, schedules, next-run times, and state. Check the name, instructions, and schedule when creating one. Tasks pending approval must be approved before running.

Use the available approve, pause, resume, and stop buttons. Pending approval, paused, circuit-open, and active are distinct states. Resolve errors instead of creating duplicates. Accounts should see/control only tasks they may manage; support depends on deployment.

Before closing the app, verify important work completed or stopped. Scheduling requires the relevant services to remain available; do not assume every task continues after exiting the client.
