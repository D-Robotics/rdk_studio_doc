---
sidebar_label: '1.2 Core Architecture'
title: 1.2 Core Architecture
---

# 1.2 Core Architecture

RDK Studio can be understood in three parts: the desktop client on your computer, Moss who assists you within the interface, and OpenClaw, which is deployed to the RDK board when needed.

## The Three Parts You Will Encounter

| Part | Where You See It | What It Is Used For |
|---|---|---|
| Desktop Client | The RDK Studio window on your computer | Adding devices, flashing systems, opening terminals, files, remote desktop, code editor, and settings |
| Moss | Workbench and AI Dock | Analyzing problems, generating steps based on the current device, project, logs, and attachments, and executing supported actions after your confirmation |
| OpenClaw | Board-side Agent page | Board-side conversations, device skills, and tasks more closely tied to the current device after deployment to the RDK board |

In daily use, you don't need to remember these layers. First, add a device, then tell Moss your goal in the Workbench.

If a task requires the board-side Agent, RDK Studio will guide you to the corresponding page to deploy or connect OpenClaw.

## When to Use Moss and When to Use OpenClaw

Most daily development tasks should be handed to Moss first: checking logs, organizing steps, explaining errors, opening terminals, handling files, generating troubleshooting plans, or analyzing information across the current page.

Use OpenClaw when you need a board-side assistant. For example, managing board-side skills, configuring board-side models, having conversations directly with the development board, or handling tasks more dependent on the current device.

The board-side Agent page will show entry points for deployment, connection, models, and message integration. For what you can do, follow the prompts on the page.

## Connection Relationship

RDK Studio first accesses the device via SSH or Type-C direct connection. Once connected, the terminal, files, code editor, remote desktop, and Moss all work around the same device.

After OpenClaw is deployed to the RDK board, it is also used through the connection established by RDK Studio. You usually don't need to handle complex network configurations separately.

## What Happens After Sending a Message

1. You type a message in the AI Dock and choose the **Execute** or **Plan** working mode.
2. RDK Studio provides Moss with the current page, current device, project directory, attachments, and workspace information.
3. Moss either answers directly, asks follow-up questions, or provides execution steps.
4. If the terminal, files, device, or OpenClaw is needed, the interface will display the corresponding actions and execution results.
5. For high-risk actions such as writing files, changing device states, or sending external messages, the interface will ask for your confirmation.
6. If the task is better suited for the board-side Agent, Moss will guide you to the relevant OpenClaw page to continue.

## What You Can See Before and After Execution

Moss can help you analyze problems or, after your confirmation, use the terminal, files, device, and other functions to complete operations. Key actions will leave visible results in the interface, and you will typically see:

- Terminal commands, file operations, execution results, and error messages displayed in the conversation or workspace for easy review.
- For high-risk actions such as writing files, changing device states, or sending external messages, the interface will ask for your confirmation.
- When the device is offline, Moss can still answer knowledge-based questions, organize solutions, and analyze existing logs; actions requiring execution on the board must wait until the device reconnects.
- The serial port is mainly used to view logs from the locally connected development board. Opening the serial port does not add the board to the device list, nor does it equate to SSH device access.
- Ollama in the local large model page refers to the local service on your computer. Which model the board-side OpenClaw uses must be configured separately in the model settings on the board-side Agent page.

## Further Reading

- [3.1 Workbench](../3-user-guide/1-workbench/index.md): How the Moss workspace organizes device status, projects, and history.
- [3.2 AI Dock](../3-user-guide/2-ai-chat/index.md): Execute/Plan, Quick/Think, and current task information.
- [3.10 OpenClaw](../3-user-guide/10-openclaw/index.md): Deployment, diagnostics, model synchronization, and board-side conversations.