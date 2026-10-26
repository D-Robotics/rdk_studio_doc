---
sidebar_label: '1.2 Core architecture'
title: 1.2 Core architecture
---

# 1.2 Core architecture

For everyday use, distinguish the client, the workbench Agent, and the Board Agent.

| Part | Responsibility |
|---|---|
| RDK Studio client | Projects, device connections, files, terminals, flashing, and tool interfaces |
| Workbench Agent | Processes tasks with Moss or DSH using project context, attachments, and permitted tools |
| Model service | Supplies model responses, configured through provider, model name, API key, and Base URL |
| Board OpenClaw | Runs on the board and provides board conversations and skills |

## How a task runs

1. Select a project and verify its work location. For device operations, check that the target device is online.
2. Check the task runtime and choose Execute, Plan, or Spec.
3. Describe the goal and attach logs, screenshots, files, or workspace references as needed.
4. The Agent analyzes and uses tools supported by its runtime, showing approval or clarification prompts when required.
5. Review the answer, actual output, file changes, and verification results. Open the message's more menu to inspect existing execution records.

Stopping a task does not automatically undo completed file or device changes.

## Runtime binding

Moss and DSH are task runtimes, separate from model providers. Change the default for new tasks at **Settings → Models & providers → Runtime**. The runtime indicator in the composer links to this setting.

Existing tasks keep their original runtime. If DSH is unavailable, the interface shows the reason; Moss does not automatically take over that task. To use another runtime, change the default and create a new task.

## Deployment forms

| Form | Boundary |
|---|---|
| Desktop client | Uses services and system integration on your computer, including capabilities such as direct flashing and local models |
| Local Web / self-hosted Web | The browser connects to its service; paths and tool permissions depend on that service's environment |
| Public Web Cloud | Isolates user data by account and restricts server-local files, host operations, and some settings |

Accessing LAN devices from the web may require a local bridge, VPN, or reachable network. A browser page alone does not gain full access to your computer's devices.

## Local and device work are separate

Local projects do not require an online board. Board commands, files, and services require the intended device connection; another online device does not automatically replace an offline target. A serial console is for debugging logs and is not an SSH device connection.

Ollama on your computer and the model used by board OpenClaw are also configured separately. The board must be able to reach its model endpoint.
