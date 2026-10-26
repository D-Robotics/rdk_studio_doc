---
sidebar_label: '2.6 First conversation'
title: 2.6 First conversation
---

# 2.6 First conversation

Open **Agent Workspace** and check that a model/runtime is available. Questions do not require a board; device tasks require the intended device connection.

## Steps

1. Open the workbench and create or select a project if needed.
2. Check the work-location bar: project, folder, and local/device target.
3. Check the Moss/DSH indicator. For first use, keep the available default.
4. Choose a workflow: **Execute** acts, **Plan** only analyzes, and **Spec** creates approvable requirements first.
5. Describe the goal, attach logs or screenshots if needed, and send.

## Suggested first messages

Connected device:

```text
Read-only: check the current board model, system version, disk, memory, and network. Explain problems and next steps without changing the device.
```

No device:

```text
Explain what RDK Studio can help me do and give three tasks to try after connecting an SSH device.
```

Local project:

```text
Inspect this project's structure and startup instructions read-only. Explain how to verify that it runs.
```

## Review results

Read the result, failure, or pending confirmation first. Select **Open location** for Terminal and Files. Open execution records from the message's more menu for existing execution details.

To change models, open **Settings → Models & providers**. To change runtime, set the default for new tasks and create a task; existing tasks retain their runtime.

Continue with [Workbench](../3-user-guide/1-workbench/index.md), [AI Dock](../3-user-guide/2-ai-chat/index.md), and [Conversation history](../3-user-guide/2-ai-chat/3-multi-session.md).
