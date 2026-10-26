---
sidebar_label: '3.2.5 Slash commands'
title: 3.2.5 Slash commands
---

# 3.2.5 Slash commands

Type `/` in the composer to see the current command menu. Some commands open settings or control tasks; others expand into instructions for the Agent and can use models, tools, and quota.

## Common commands

| Command | Purpose |
|---|---|
| `/plan <request>` | Switch to Plan and produce steps and risks only |
| `/build <request>` | Develop an application that runs on RDK |
| `/debug <problem>` | Investigate and fix a problem from evidence |
| `/learn <topic>` | Explain using skills and documentation; may suggest saving reusable knowledge |
| `/review <target>` | Review code or configuration before board deployment |
| `/team <problem>` | Request an expert team to gather evidence from several perspectives |
| `/goal set <goal>` | Set a recoverable goal; use `/goal status` to inspect it |
| `/compact` | Compact the current conversation context |
| `/settings` | Open settings |
| `/stop`, `/stop-all` | Request stopping the current task or all related tasks |

You can type `/skill <skill-name> [task]` or select a skill through skill search. It may be absent from the `/` menu. The menu may also offer application generation, run, and deployment commands; read their parameter hints first.

## Examples

```text
/plan Add camera preview to this project. Explain dependencies, risks, and verification steps first.
/debug A ROS 2 node fails to start on the board. Gather logs read-only first.
/skill rdk-app-development Build a device status web page.
```

Command availability depends on runtime and deployment. Moss commands and expert-team capabilities do not imply identical DSH support. Follow unsupported-operation messages; the task does not automatically switch runtimes.

Change models through the composer model selector or **Settings → Models & providers**. Manage history through the conversation list.
