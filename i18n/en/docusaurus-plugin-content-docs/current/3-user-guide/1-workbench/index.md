---
sidebar_label: '3.1 Workbench'
title: 3.1 Workbench
description: 'Start tasks, bind projects, and open workspaces from the workbench'
---

# 3.1 Workbench

The **Agent Workspace** starts tasks, resumes conversations, and shows the project and actual work location. Tasks use Moss or DSH; the composer shows the current task's runtime.

## First use

1. Open the workbench or create a task from the project/conversation sidebar.
2. Create or select a project when working with files. Questions can start without a bound folder.
3. Check the project, location, folder, and target device in the composer.
4. Choose Execute, Plan, or Spec, describe the goal, and send.
5. Select **Open location** to inspect Overview, Terminal, or Files for the task workspace.

## Create a project

Choose its primary work location:

| Location | Preparation | Typical work |
|---|---|---|
| Local computer | Select a project folder and authorize it when prompted | Local code, files, and commands without a connected board |
| Board | Select the device, then choose a board folder once online | Board development, execution, and file management |

After creation, you can add a folder on the other side. Local and board bindings are stored separately; check the path when changing work locations.

An offline board project keeps its device binding. Restore SSH to that device before choosing folders or running operations. Another online device does not automatically replace it.

## Project, device, and task

- A **project** groups related tasks and folders.
- A **device** identifies the target for board operations.
- The **work location** determines whether the task defaults to a local or board workspace.
- The **runtime** determines whether Moss or DSH executes the task, and stays fixed after creation.

Changing the default runtime does not migrate existing tasks. Switching the selected device should not be treated as confirmation that an old task has changed targets. Check task context before resuming history.

## Open location

| View | Purpose |
|---|---|
| Overview | Current project, device, progress, artifacts, and references |
| Terminal | Inspect or run commands at the corresponding location |
| Files | Inspect files and Agent changes at that location |

Use the task or tool entries provided by the current interface for diagnostics, changes, and previews. Keep actual error messages when execution fails and ask the Agent to investigate from that output.

## History and recovery

Use the left conversation list to find, rename, pin, archive, and resume tasks. Deleting a project removes its record and bindings; its chats remain in recent tasks, and local/board files remain intact. See [Conversation history](../2-ai-chat/3-multi-session.md).
