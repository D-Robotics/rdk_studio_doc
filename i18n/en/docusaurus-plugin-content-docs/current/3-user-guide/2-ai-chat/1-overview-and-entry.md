---
sidebar_label: '3.2.1 Open AI Dock'
title: 3.2.1 Open AI Dock
---

# 3.2.1 Open AI Dock

Start from **Agent Workspace** in the left navigation or open a task from projects and conversations. OpenClaw conversations on the Board Agent page use a separate entry.

## Before sending

1. **Project and folder:** for file work, check whether the folder is local or on the board.
2. **Device:** for device tasks, confirm the device label and online state. Knowledge questions and proposals can start without a device.
3. **Runtime:** the composer shows Moss or DSH. Clicking the indicator opens settings, which only change the default for new tasks.
4. **Workflow:** Execute acts; Plan analyzes without changes; Spec aligns requirements for approval first.
5. **Model and materials:** select a model if needed and attach screenshots, logs, or files, then send.

## First message

With a connected device:

```text
Read-only: check the current device model, system, disk, memory, and network. List problems without changing configuration.
```

Without a connected device:

```text
I have not connected a board yet. Explain what I can do now and give three example tasks for after connection.
```

## After sending

Review answers, approval prompts, and actual results. Select “Open location” for Overview, Terminal, and Files. Open the message's more menu for existing execution records. If a task fails, keep its error details and add instructions to continue troubleshooting.

Create a task for an unrelated goal; continue the current conversation for the same goal. To use another runtime, change the default in settings and create a new task.
