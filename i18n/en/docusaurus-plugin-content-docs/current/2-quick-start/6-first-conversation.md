---
sidebar_label: '2.6 Initiate Your First Conversation'
title: 2.6 Initiate Your First Conversation
---

# 2.6 Initiate Your First Conversation

By now, you’ve completed all six steps: installation, login, flashing, device connection, network configuration, and model integration. This section guides you through sending your first message to the AI to verify that the entire pipeline is working.

## Invoke AI Dock

AI Dock is a persistent conversation area at the bottom of the screen that can be activated by clicking the input field at the bottom.

## Your First Message

Enter the following in the input box:

```
Help me check the system overview of this device.
```

Press Enter to send. Studio will perform the following steps:

1. Send the message to the currently active Thinking Lane model.
2. After understanding your intent, the model automatically invokes device tools (executing commands on the board via SSH).
3. Within a few seconds, it returns hardware metrics of the currently active device: CPU, memory, disk usage, image version, and key service statuses.

Throughout this process, the commands invoked by the Agent are displayed in real time in the remote terminal, helping developers understand what the AI is doing.

## A Few Initial Prompts Worth Trying

| Prompt | What the Agent Does |
|---|---|
| `What ROS nodes are currently running on this board?` | Executes `ros2 node list` via SSH and returns the node list. |
| `Copy /tmp/test.txt to my desktop.` | Invokes the file transfer tool to download the file to your PC. |
| `What’s the BPU utilization on the board?` | Executes `hrut_bpuprofile -b 0` (for X5) or reads `/sys/devices/system/bpu/bpu0/ratio` (fallback), then parses and returns real-time data. |
| `Explain the differences between RDK X5 and X3.` | Answers using the built-in hardware knowledge base. |
| `What does this error mean: <paste error here>` | Matches against over 30 built-in RDK error patterns and provides troubleshooting guidance. |

## Tips for Effective Usage

- **Don’t ask the AI to tackle complex tasks right away**: Start with simple questions to let the Agent understand the current state of your board.
- **Paste full error messages**: Studio’s error pattern recognition relies on complete, original error logs.
- **Don’t blindly approve tool invocation prompts**: By default, potentially destructive commands (e.g., `rm`, `kill`) trigger a confirmation dialog before execution.
- **Speak up if you’re unsatisfied**: For example, say “Don’t do X; instead, do Y,” and the Agent will adjust its strategy accordingly.

## Essential AI Dock Shortcuts

| Action | Shortcut |
|---|---|
| / | Cursor positioned on the dialog box|
| Send message | Enter |
| Insert line break in multi-line input | Shift + Enter |


## Full Pipeline Verification

If your first message successfully returns device status information, it confirms that the complete RDK Studio pipeline is operational:

- Desktop client (PC)
- D-Moss Agent (AI orchestration on PC)
- Large model API (cloud-hosted or self-hosted)
- SSH channel (PC ↔ board)
- Board-side hardware response

Next, you can:

- Explore each functional module in detail → [3. User Guide](../3-user-guide/1-workbench/index.md)
- Install additional capabilities for the AI → [3.11 Skills](../3-user-guide/11-skill/index.md)
- Run a persistent AI agent on the board → [3.10 OpenClaw On-Device Agent](../3-user-guide/10-openclaw/index.md)
- Troubleshoot issues → [5. FAQs](../5-faq/1-ai-no-response.md)