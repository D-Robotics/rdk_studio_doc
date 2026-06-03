---
sidebar_label: '3.2 AI Dock'
title: 3.2 AI Dock
---

# 3.2 AI Dock

The **AI Dock** is Moss’s input area. Open it from **Core → Workbench**, then follow **confirm device → choose mode → enter your question → review results**.

## First-time flow

| Step | What to do |
|---|---|
| 1 | Open **Core → Workbench** and find the input area at the bottom |
| 2 | Check the device chip in the input area and confirm it points to the right device |
| 3 | Choose **Plan** when impact is unclear; choose **Execute** when you want direct action |
| 4 | Use **Fast** for simple questions; use **Think** for troubleshooting and code work |
| 5 | After sending, check the chat, terminal, files, or diagnostics for outcomes |

## Common controls

| Control | Options | Role |
|---|---|---|
| Device chip | Current device / not bound | Tells Moss whether the task can reach a device directly |
| Work mode | Execute / Plan | Execute runs the task; Plan lists steps, risks, and confirmation points first |
| Reply mode | Fast / Think | Fast suits short Q&A; Think suits complex troubleshooting and multi-step tasks |
| Attachments | Files / images / screenshots | Give Moss logs, configs, screenshots, or code snippets for context |

## Relationship to the workspace

Moss sits in the main column on the left; workspace panels are on the right. You can let Moss analyze while you open Terminal, Files, Changes, Diagnostics, or History. Moss uses the current page, device, project directory, and references you selected.

## Offline and model error banners

The input area can show two important banners:

- **Device offline**: Moss can still plan and answer knowledge questions; device execution waits for reconnect or confirmation.
- **Model configuration error**: When Fast or Think points to local Ollama but the service is down or the model is missing, the banner links to **Local LLM** or **AI model settings**.

## History and slash commands

The AI Dock keeps local chat history—you can start a new session or resume an older one. The input supports a few slash commands for clearing context, switching models, or viewing help; natural language is fine whenever you are unsure.

## Next

- [3.2.1 Open the AI Dock](./1-overview-and-entry.md): first-time order of operations.
- [3.2.2 Device operations and results](./2-device-aware-tools.md): target device, execution output, and confirmation prompts.
- [3.2.4 Upload files and screenshots](./4-attachments.md): give Moss logs, images, and screenshots to analyze.
- [3.2.6 Choose reply mode](./6-dual-lane.md): when to use Fast vs Think.
