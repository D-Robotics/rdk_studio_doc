---
sidebar_label: '1.3 Feature Access Points'
title: 1.3 Feature Access Points
---

# 1.3 Feature Access Points

The feature access points of RDK Studio are divided into three groups based on the left navigation: **Core, Development Tools, and AI Capabilities**.

You can start from the Workbench, and then proceed to tasks such as Flashing, Remote Desktop, Code Editor, On-board Agent, Local Large Language Models, or Skill Workshop as needed.

## Main Navigation

| Group | Access Point | One-sentence Description | Details |
|---|---|---|---|
| Core | Workbench | Moss conversation and project workspace, centralized display of device status, history, diagnostics, changes, files, and terminal | [3.1 Workbench](../3-user-guide/1-workbench/index.md) |
| Development Tools | Flashing | Image writing process for RDK X3 / X5 / S100 and other local images | [3.7 System Flashing](../3-user-guide/7-system-flashing/index.md) |
| Development Tools | Remote Desktop | View and operate the on-board graphical interface | [3.6 Remote desktop](../3-user-guide/6-remote-desktop/index.md) |
| Development Tools | Code Editor | Open the on-board code editing workspace | [3.5 Code editor](../3-user-guide/5-remote-ide/index.md) |
| AI Capabilities | On-board Agent | OpenClaw deployment, diagnostic repair, model synchronization, on-board conversations | [3.10 OpenClaw](../3-user-guide/10-openclaw/index.md) |
| AI Capabilities | Local Large Language Models | Install/start Ollama, download models, set as Moss quick mode | [3.12 Local LLMs](../3-user-guide/12-local-models/index.md) |
| AI Capabilities | Skill Workshop | Local Moss skills, device OpenClaw skills, skill marketplace, generate skills from links | [3.11 Skill Workshop](../3-user-guide/11-skill/index.md) |

## What You Can Do in the Workbench

The Workbench is not a single information card but the main workspace for Moss. It includes the following common features:

| Feature | Description |
|---|---|
| Moss Conversation | Send natural language tasks, supports attachments, device information, project information, execution/planning, quick/thinking modes |
| Current Status | View current project, device, directory, Git changes, diagnostic snapshots |
| History | Open local conversation history and continue previous tasks |
| Diagnostics | Capture device runtime snapshots and send them to Moss |
| Changes | View remote project Git status, initialize workspace if necessary |
| File / Terminal / Browse | Open common tools next to Moss to reduce switching back and forth |

## Settings and Resource Access Points

| Access Point | Content |
|---|---|
| Settings | Account & Security, Device Connection, Interface Display, AI Engine, Feishu, WeChat, Apps & Updates |
| Resources & Support | Dajiang Developer Forum, RoboGo Platform, User Feedback |
| AI Dock Settings Jump | Direct access to "Local Models" or "AI Engine" when model configuration is abnormal |

## Device and Platform Compatibility

| Feature | RDK Device | General Linux / Jetson / Raspberry Pi / Rockchip | Desktop Client | CLI |
|---|---|---|---|---|
| Moss Conversation & Workbench | Supported | Supported | Supported | Partially supported |
| SSH Terminal / File / Code Editor | Supported | Supported | Supported | Supported |
| Remote Desktop | Supported, requires on-board graphical services | Depends on target host environment | Supported | Not supported |
| Flashing | RDK X3 / X5 / S100 are primary targets | Local image can be written to other media optionally | Supported | Not supported |
| OpenClaw Deployment | Primary path for RDK devices | Not deployable by default; interface shows limitations | Supported | Supports some commands |
| Local Large Language Models | Runs locally on the computer | Runs locally on the computer | Supported | Not applicable |
| Skill Workshop | Deployable to device OpenClaw, also writable to local Moss | Writable to local Moss; device deployment limited | Supported | Supports some commands |

The CLI does not support graphical interfaces, flashing wizards, remote desktop, or local model management — capabilities exclusive to the desktop client. For scripting scenarios, `rdkstudio` or `dmoss-agent` can be used as needed for conversations, device management, files, and script tasks.