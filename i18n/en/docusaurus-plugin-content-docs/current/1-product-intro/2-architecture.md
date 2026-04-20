---
sidebar_label: '1.2 Core Architecture'
title: 1.2 Core Architecture
---

# 1.2 Core Architecture

RDK Studio consists of two ends and three processes. Understanding this architecture is key to grasping how RDK Studio differs from ordinary remote development tools—when you issue a single command, Agents on both your PC and the board can collaboratively complete the task, powered precisely by this dual-Agent orchestration mechanism.

## Roles of the Three Processes

| Process | Running Location | Responsibilities |
|---|---|---|
| Desktop Client | Your PC (Windows / macOS / Ubuntu) | An Electron-based GUI workspace providing all functional tabs, AI Dock, and device management interface |
| D-Moss Agent | Embedded within the desktop client process | The PC-side AI orchestration engine. Understands user intent, schedules built-in tools, plans multi-step tasks, and coordinates across devices |
| OpenClaw Agent | Runs on the RDK board, managed as a persistent service by systemd | The board-side AI runtime. Can independently handle board-local tasks or receive subtasks delegated by D-Moss |

Both D-Moss and OpenClaw are full-fledged AI Agent runtimes—their differences lie in deployment location and the types of tasks they excel at.

![OpenClaw main panel in Studio: The top displays real-time status of gateway, network, and models; the right side shows configuration progress and quick actions (restart gateway, view logs, upgrade, diagnose and fix)](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/03-OpenClaw.png)

## Dual-Agent Collaboration Mechanism

D-Moss and OpenClaw communicate via an SSH tunnel. When a developer initiates a task, it first arrives at D-Moss, which then determines the optimal execution location based on task characteristics:

- **Executed directly by D-Moss**: Pure PC operations (e.g., local file handling), tasks requiring strong model inference, or cross-device planning
- **Delegated to OpenClaw**: Tasks requiring long-running execution, offline operation, or tight integration with hardware sensors

Once delegated, OpenClaw executes the task on the board and sends results back to the PC. Throughout this process, developers don’t need to manage the coordination between the two ends—the AI Agents handle scheduling automatically behind the scenes.

For example: You say, "Check the BPU temperature on the board every 5 minutes, and automatically throttle if it exceeds 70°C." D-Moss evaluates that this is a long-term monitoring task requiring persistent execution on the board, so it writes the task along with execution parameters (threshold, throttling method, reporting mechanism) into OpenClaw’s state machine. Even if you shut down your PC or close Studio afterward, OpenClaw on the board continues executing the task. When the temperature threshold is triggered, OpenClaw pushes an event back to the PC through the SSH tunnel (notifying you in real time if the PC is online).

## Communication Link

```text
PC Side
├─ Desktop Client
│  └─ D-Moss Agent
│     └─ oc-bridge (SSH tunnel client)
│           ↓
Board Side
├─ sshd (SSH server, port 22)
│  └─ Port forwarding to localhost 127.0.0.1:18789
│        ↓
└─ OpenClaw Gateway Process
   └─ OpenClaw Agent (Node.js persistent service)
```

By default, the OpenClaw gateway on the board listens only on `127.0.0.1:18789` and is not exposed to the public internet. Studio reuses the established SSH connection for TCP port forwarding, maintaining security while avoiding the need to open additional public ports on the board.

## Standard Task Flow

The complete flow for a user speaking to the AI Dock is as follows:

1. The desktop client sends the user input to the D-Moss Agent.
2. D-Moss injects the profile of the currently active device (board type, image, status) as context.
3. After matching relevant skills (SKILL.md), D-Moss injects the skill content into the context.
4. D-Moss invokes a large language model, which decides whether to reply to the user or call a tool.
5. Tool invocations are dispatched based on type:
   - General-purpose tools (web search, document retrieval) are executed locally by D-Moss.
   - Device-specific tools (SSH commands, file transfers) are executed via direct SSH connection from the PC to the board.
   - OpenClaw tools (task delegation, long-running task orchestration) are forwarded to the board-side OpenClaw via oc-bridge.
6. Tool results are returned to the model, which continues making decisions until the task is complete.
7. Streaming output is sent back to the desktop client for display to the user.

This entire flow is transparent to developers, yet Studio displays every tool invocation—including commands, parameters, and outputs—in real time within both the conversation area and the remote terminal. This approach neither forces developers to understand architectural details nor hides those details from them.

## Further Reading

- [3.10 OpenClaw Board-side Agent](../3-user-guide/10-openclaw/index.md): Deployment, sub-tabs, and collaboration details of OpenClaw
- [3.2 AI Chat](../3-user-guide/2-ai-chat/index.md): Specific capabilities of the D-Moss Agent within AI Dock