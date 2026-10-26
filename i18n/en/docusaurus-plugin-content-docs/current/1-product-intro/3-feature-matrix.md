---
sidebar_label: '1.3 Feature entries'
title: 1.3 Feature entries
---

# 1.3 Feature entries

Current navigation groups common tools under **Agent workbench, Device & development, and AI capabilities**. The left sidebar can also show projects and conversations.

| Entry | Purpose | Manual |
|---|---|---|
| Agent Workspace | Submit tasks, choose a workflow, and resume project conversations | [3.1 Workbench](../3-user-guide/1-workbench/index.md) |
| File manager | Local or board workspace files, transfers, and editing | [3.4 Files](../3-user-guide/4-file-manager/index.md) |
| Terminal | Local terminals, SSH terminals, and supported serial debugging | [3.3 Terminal](../3-user-guide/3-remote-terminal/index.md) |
| Flasher | Select board, image, and write target | [3.7 Flashing](../3-user-guide/7-system-flashing/index.md) |
| Block studio | Choose a robot, assemble blocks, simulate, and run on a device | [3.17 Block studio](../3-user-guide/17-block-studio/index.md) |
| Remote desktop | Use the target device's graphical desktop | [3.6 Remote desktop](../3-user-guide/6-remote-desktop/index.md) |
| Code editor | Open a remote code workspace | [3.5 Code editor](../3-user-guide/5-remote-ide/index.md) |
| Board Agent | Deploy, configure, and use OpenClaw | [3.10 OpenClaw](../3-user-guide/10-openclaw/index.md) |
| Plugin Center | Manage skills, MCP, and other extensions | [3.11 Plugin Center and skills](../3-user-guide/11-skill/index.md) |
| Local models | Install Ollama, download a model, and set the Agent main model | [3.12 Local models](../3-user-guide/12-local-models/index.md) |
| Settings | Account, devices, appearance, model/runtime, MCP, storage, and updates | [3.13 Configuration](../3-user-guide/13-config-center/index.md) |

Entries depend on deployment capabilities. Public web deployments do not directly provide disk writing, Ollama, or system integration on your computer; use a supported bridge flow or the desktop client. The skill store requires its service to be enabled and is normally reached from Plugin Center.

## Common choices

- Ask a question: open the workbench; a board is optional.
- Edit code on your computer: create a local project and bind its folder.
- Run a board application: choose the device and board folder, then verify SSH is online.
- Explore steps first: choose **Plan**. For approvable requirements and acceptance criteria, choose **Spec**.
- Use DSH: check availability in settings, set it as the default for new tasks, then create a task.

The CLI is for scripts and automation; consult command help for supported capabilities. It does not provide graphical flashing wizards, a block canvas, or a remote desktop.
