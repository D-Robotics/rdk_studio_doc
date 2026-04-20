---
sidebar_label: '1.1 Product Overview'
title: 1.1 Product Overview
---

# 1.1 Product Overview

**RDK Studio is an AI Native development workspace built specifically for robotics—enabling AI not only to write code but also directly interact with hardware on your board.**

Describe your task, and the Agent autonomously handles SSH login, command execution, and log retrieval. Chat, terminal, file management, and flashing—all integrated into a single native window, eliminating constant tool switching.

![RDK Studio desktop client main interface: functional tabs on the left, overview of the currently active device in the center, and a persistent AI Dock at the bottom](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/01-dashboard.png)

## How Is This Different from "an IDE with Added AI"?

AI assistants in general-purpose IDEs can only help developers write code—they don’t know your board model, can’t connect to your device, and can’t execute any commands. In contrast, RDK Studio’s AI is a truly hands-on Agent:

- Say “Help me connect to my board,” and the Agent automatically scans your local network, identifies RDK boards, and establishes an SSH session.
- Say “Check BPU utilization,” and the Agent logs into the board and runs `hrut_bpuprofile -b 0` (or falls back to `cat /sys/devices/system/bpu/bpu0/ratio` depending on the board type), then parses and explains the result.
- Say “Launch the camera node—it keeps failing; can you check?”, and the Agent starts the node, captures the error logs, matches them against over 30 built-in RDK error patterns, and provides a direct fix.
- Say “Flash this new firmware onto the SD card,” and the Agent pops up a disk selection dialog, invokes the underlying flashing interface, and displays real-time progress.

Throughout this process, developers don’t need to memorize SSH commands, look up nmcli parameters, or Google error messages—just describe what you want to do.

## Core Problems Solved

RDK Studio addresses two key challenges in robotics and embedded AI development workflows.

The first is **tool fragmentation**. Traditionally, developers constantly switch between SSH clients, SCP/SFTP tools, VNC clients, IDEs, flashing utilities, and model API consoles. RDK Studio consolidates all these operations into a single native window—each capability can be triggered either by clicking a button manually or by simply telling the AI what to do.

The second is **experience barriers**. Traditional embedded development requires engineers to be proficient with Linux commands, SSH, nmcli, systemd, ROS workspaces, and other foundational tools. RDK Studio’s AI Native design abstracts these tools into internal implementation details of the Agent—developers only need to express their intent. If a developer is already familiar with these low-level tools, all commands remain fully accessible for direct use; if not, the Agent handles everything on their behalf.

## Target Users

RDK Studio is designed for all robotics developers—regardless of whether they use RDK boards or work individually or in teams:

- **Robotics and Embedded AI Engineers**: Frontline developers who frequently switch between multiple dev boards, seek to reduce operational complexity, and want AI as a daily companion.
- **ROS / ROS 2 / TROS Developers**: Automate manual tasks like board-side node/topic management, launch debugging, and log troubleshooting with the Agent.
- **Robotics Deployment Teams**: Engineering or DevOps teams needing to orchestrate board tasks within CI/CD pipelines or automation scripts.
- **Robotics Education and Research**: Students, educators, and researchers who wish to delegate tedious environment setup and command memorization to AI, so they can focus on algorithm and solution design.

While RDK Studio offers deep integration with RDK boards (including hardware awareness, board-type recognition, TROS knowledge, and flashing toolchains), its capabilities aren’t limited to the RDK platform—the AI Dock, remote terminal, IDE, and Skill Marketplace modules are usable with any SSH-accessible Linux board or robot host.

## Capabilities Outside Product Scope

To prevent misuse, the following capabilities are currently **not** included in RDK Studio. Please use the recommended dedicated tools instead:

| Requirement | Recommended Tool |
|---|---|
| Model Training | D-Robotics OE Toolchain, PyTorch, TensorFlow, etc. |
| Model Quantization and Compilation to HBM | D-Robotics model conversion tool `hb_mapper` |
| Cross-Platform BUILD CI | GitHub Actions, GitLab CI, etc. |
| Real-Time Collaborative Editing | Feishu Docs, Notion, or other knowledge base tools |
| User-Level Permission Isolation (RBAC) | Implement via SSH jump hosts or dedicated ops platforms |

## Next Steps

- [1.2 Core Architecture](./2-architecture.md): Understand the collaboration mechanism between the PC-side D-Moss and board-side OpenClaw dual Agents.
- [1.3 Feature Matrix](./3-feature-matrix.md): Comprehensive list of functional modules and compatibility across release variants.
- [1.6 AI Dock Demo](./6-ai-showcase.md): Three real-world dialogues (device health check, end-to-end YOLO deployment, AI-generated community post draft).
- [2. Quick Start](../2-quick-start/1-install-and-login.md): Complete the full workflow—from installation → device connection → configuration → conversational interaction—in six steps.