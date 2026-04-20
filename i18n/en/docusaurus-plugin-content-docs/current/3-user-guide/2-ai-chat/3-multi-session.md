---
sidebar_label: '3.2.3 Multi-Session Management'
title: 3.2.3 Multi-Session Management
---

# 3.2.3 Multi-Session Management

AI Dock supports parallel multi-session operation, preventing context interference between different tasks. Sessions are persisted locally in JSONL format, allowing historical conversations to remain accessible even after restarting the client.

## One Independent Session per Device

By default, Studio maintains a separate conversation session for each added device:

- When switching devices, AI Dock automatically switches to the corresponding device's session.
- Each session has its own independent context window and conversation history.
- Sessions do not interfere with each other—eliminating confusion such as "the Agent still thinks it's talking to X5 when switched to X3."

This design is especially useful during parallel development across multiple devices—developers can discuss X3-related issues within the X3 session and seamlessly switch to the X5 session to handle X5-specific tasks, without the AI mixing up the states of the two boards.

## Manually Creating New Sessions

In addition to the default per-device sessions, developers can manually create new sessions:

- Click "New Session" at the top of AI Dock.
- Ideal for scenarios where "multiple unrelated tasks run on the same board and require isolated contexts."
- For example: one session dedicated to ROS node debugging, another focused exclusively on model deployment.

## Session Persistence

Sessions are stored locally in JSONL format, with one message per line:

| Operating System | Path |
|---|---|
| Windows | `%USERPROFILE%\.rdk-studio\sessions\` |
| macOS / Linux | `~/.rdk-studio\sessions/` |

The JSONL format (one independent JSON object per line) is well-suited for append-only writes and stream processing. After restarting the client, the full session history remains intact. Developers can also directly read these files for offline analysis.

## Context Window and Automatic Compaction

Tokens consumed during each conversation accumulate continuously. When the total token count reaches 70% of the model's context window limit, Studio automatically triggers **compaction**: summarizing earlier dialogue into a concise summary while preserving the full content of recent exchanges. This mechanism enables long-running sessions to continue, but since summarization inherently involves "information compression," the ability to recall fine-grained details from early interactions diminishes.

If users notice the Agent inaccurately referencing earlier content, we recommend manually starting a new session for new topics to avoid accumulating excessive irrelevant context within a single session.

## Canceling an Ongoing Task

Running Agent tasks can be canceled at any time:

- Click the cancel button to the right of the input box.

Upon cancellation, the Agent stops subsequent tool invocations and model inference. The behavior of currently executing commands depends on the specific tool—for example, SSH commands will send a SIGINT signal to terminate the process running on the board.

## Session History

Use the slash command `/sessions` to list all historical sessions, view the title, associated device, and last updated time of each prior conversation, and switch to any historical session to continue.

```
/sessions
```

Example output:

```
- Current session: RDK-X5-Workstation1 (5 minutes ago)
- abc123: Camera Debugging (Yesterday)
- def456: YOLO Deployment (3 days ago)
```

Click a session ID or specify it directly in the slash command to switch sessions.