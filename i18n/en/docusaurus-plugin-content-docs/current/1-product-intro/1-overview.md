---
sidebar_label: '1.1 Product overview'
title: 1.1 Product overview
description: 'Positioning, core capabilities, and use cases for RDK Studio'
---

# 1.1 Product overview

**RDK Studio is an AI-native workbench for robotics and edge AI development.** It brings Agent conversations, projects, device connections, terminals, files, remote desktops, code editing, flashing, and block programming into one environment.

Describe a goal and let the Agent analyze, plan, and act with project and device context, or open a development tool directly. Without a connected board, you can still ask questions, analyze attachments, and work on an authorized local project.

## Where to start

| Goal | Entry |
|---|---|
| Ask, develop, troubleshoot, or resume work | Agent Workspace |
| Organize code and tasks | Projects and conversations in the left sidebar |
| Connect or switch boards | Device picker → Connect device |
| Flash, transfer files, run commands, or use a desktop | Device & development |
| Assemble robot programs with blocks | Device & development → Block studio |
| Manage skills, MCP, and other extensions | AI capabilities → Plugin Center |
| Download and use models on your computer | AI capabilities → Local models |
| Configure models or the engine for new tasks | Settings → Models & providers |

## Agent, model, and Board Agent

Workbench tasks use **Moss** or an available **DSH (DeepSeek Harness)** runtime. Each task keeps its runtime binding; changing the default for new tasks does not rebind existing tasks. Model services and task runtimes are separate settings. See [Configure AI models](../3-user-guide/13-config-center/3-ai-engine.md).

**Board Agent (OpenClaw)** is a separate path deployed on the board. It requires a device connection and its own board configuration, managed separately from workbench Moss/DSH tasks.

## Projects and work locations

When creating a project, choose its primary location: **local computer** or **board**. You can bind a folder on the other side later. Before sending a task, check the project, work location, and device shown by the composer so computer paths and board paths stay clear.

Desktop projects and conversations belong to the current local data directory; switching accounts does not automatically hide local history. Web user data is isolated by account. See [Conversation history](../3-user-guide/2-ai-chat/3-multi-session.md).

## Typical uses

- RDK connections, system flashing, ROS/TROS development, and board troubleshooting.
- Projects combining local development with deployment to a board.
- Running model applications, analyzing logs, and verifying devices.
- Teaching, robot block programming, and reusable skills.

RDK devices are the primary targets. Generic Linux, Jetson, Raspberry Pi, and Rockchip devices can reuse compatible SSH workflows. Board-specific flashing and diagnostics depend on the device profile and page guidance.

## Continue reading

- [Feature entries](./3-feature-matrix.md)
- [Quick start](../2-quick-start/1-install-and-login.md)
- [Workbench and projects](../3-user-guide/1-workbench/index.md)
- [Block studio](../3-user-guide/17-block-studio/index.md)
