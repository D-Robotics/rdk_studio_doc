---
sidebar_label: '1.1 Product Overview'
title: 1.1 Product Overview
---

# 1.1 Product Overview

**RDK Studio is an AI-native desktop workspace designed for robotics development. It integrates Moss conversation, project workspace, device connection, remote development, flashing, local models, and on-board agents into a single native window.**

After entering RDK Studio, the workspace brings **Moss conversation** and **project workspace** together.

You can start by describing your goals, letting Moss help you plan, check device and project status, and organize terminal or file information. You can also directly open functional pages such as flashing, remote desktop, code editor, on-board agent, local large model, and skill workshop for manual operations.

## Product Form

The main navigation of RDK Studio is divided into three groups based on workflow:

| Group | Entry | Purpose |
|---|---|---|
| Core | Workspace | Moss conversation, project workspace, device status, history, diagnostics, changes, file and terminal information |
| Development Tools | Flashing, Remote Desktop, Code Editor | System image writing, on-board GUI, remote code workspace |
| AI Capabilities | On-board Agent, Local Large Model, Skill Workshop | OpenClaw deployment and conversation, Ollama local model, Moss / OpenClaw skill management |

The **Resources & Support** section in the lower-left corner provides access to the D-Robotics Developer Forum, RoboGo platform, and user feedback entry; the settings entry is located at the bottom of the sidebar.

## What Makes It Different from Ordinary Remote Development Tools

Traditional remote development tools typically split SSH, files, remote desktop, code editor, flashing, and model configuration into multiple applications. The difference with RDK Studio is that these functions can work together within the same workspace:

- You say, "Help me figure out why this device can't connect to Wi-Fi," and Moss will analyze the current device status, terminal output, and network configuration together to troubleshoot.
- You say, "Don't execute yet, give me a risk plan," and you can switch to **Plan** mode, letting Moss list steps, risks, and actions that need confirmation.
- You say, "Answer the meaning of this error message in fast mode," and you can switch to **Fast** mode; for complex troubleshooting, switch back to **Thinking** mode.
- When you send a message on the on-board agent page, you can converse with OpenClaw; when you send a message in the workspace, Moss combines project, device, file, and diagnostic snapshots.

Actions such as commands, file writes, and on-board execution still have visible outputs and necessary confirmations. The goal of RDK Studio is to keep key processes visible, allowing you to know what Moss did and why.

## Core Problems Solved

The first type of problem is **information fragmentation**. Robotics development often involves on-board systems, networking, models, code directories, logs, cameras, BPU, remote desktop, and community knowledge simultaneously.

RDK Studio brings this information into the Moss workspace, reducing the need to switch between multiple tools.

The second type of problem is **the learning curve**. Beginners don't need to memorize a large number of commands first; those familiar with the command line can still operate directly in the terminal and hand over the output to Moss for further analysis.

The third type of problem is **how AI can be applied to actual development**. Moss is not just a Q&A box; it can combine terminal, file, device, and diagnostic information from RDK Studio to assist you in completing tasks.

OpenClaw is used for operations that are closer to the on-board device.

## Target Users

- **RDK and robotics development**: Need to connect, flash, and debug development boards, and want to delegate repetitive troubleshooting steps to Moss.
- **ROS / ROS 2 / TROS development**: Need to run nodes, check topics, view logs, and locate startup failures on the board.
- **AI applications and embodied AI teams**: Need to manage models, code, and device status across RDK X3 / X5 / S100 or other Linux hosts.
- **Teaching and research scenarios**: Want to reduce the cost of environment setup and command memorization, focusing energy on algorithms, tasks, and experiments.

## Which Devices Can Be Connected

RDK Studio focuses on supporting RDK X3, RDK X5, and RDK S100, including board type identification, RDKOS images, flashing, BPU/TROS knowledge, OpenClaw deployment, and more.

At the same time, SSH is a universal entry point. General Linux hosts, NVIDIA Jetson, Raspberry Pi, Rockchip boards, and others can also be connected as remote hosts.

These devices can use Moss conversation, terminal, files, code editor, and project workspace. Features specific to RDK hardware will be hidden or shown as unavailable on non-RDK devices.

## Scenarios Requiring Coordination with Other Platforms

RDK Studio is primarily responsible for local development, device connection, flashing, debugging, Moss collaboration, OpenClaw, and local model management.

For the following tasks, it is recommended to use RDK Studio in conjunction with the corresponding platforms. The **Resources & Support** section in the lower-left corner provides direct access to RoboGo, the D-Robotics Developer Forum, and user feedback entry.

| Scenario | Recommended Approach | Description |
|---|---|---|
| Cloud-based end-to-end robotics development | RoboGo | Suitable for data闭环, embodied AI training fields, agent development services, application development and deployment, and other cloud-based workflows; local debugging and on-board validation return to RDK Studio. |
| Ready-made applications / Demos / Cases | RoboGo, NodeHub | When looking for applications, cases, or consolidating project materials, start with these platforms; return to RDK Studio when you need to connect devices and run them. |
| Model training / Dataset management | Existing data闭环 or training pipelines in RoboGo, or PyTorch, TensorFlow, training platforms | Training is typically not done within RDK Studio. RDK Studio is better suited for connecting devices, preparing runtime environments, and validating model performance. |
| Model quantization and compilation to hbm | D-Robotics model conversion toolchain; if RoboGo provides a corresponding process, it can also be used in coordination | After generating hbm, deploy, run, and troubleshoot on devices connected via RDK Studio. |
| Multi-person collaboration and code hosting | Git platforms, online documents, collaborative code editors | RDK Studio is suitable for individual development and device debugging; multi-person collaboration should continue using your team's existing platforms. |
| Enterprise-level permissions and auditing | Enterprise operation platforms, jump servers, unified identity and role-based permission systems | RDK Studio will prompt risks and require confirmation but does not replace enterprise permission systems. |
| High-risk operation decisions | Confirm before executing | RDK Studio will explain risks and impacts as clearly as possible, but ultimately you need to decide whether to proceed. |

## Further Reading

- [1.2 Core Architecture](./2-architecture.md): Understand the collaboration boundaries between Moss, OpenClaw, and the desktop client.
- [1.3 Feature Access Points](./3-feature-matrix.md): Find commonly used features via the left navigation.
- [2.1 Install and sign in](../2-quick-start/1-install-and-login.md): Complete the first experience by following "Choose a development board → Prepare the system → Add a device → Start using Moss."
- [3.1 Workbench](../3-user-guide/1-workbench/index.md): Learn how the Moss workspace handles device status, history, diagnostics, changes, files, and the terminal.