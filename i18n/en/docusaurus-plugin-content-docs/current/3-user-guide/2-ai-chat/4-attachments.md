---
sidebar_label: '3.2.4 Attachments and Multimodal Input'
title: 3.2.4 Attachments and Multimodal Input
---

# 3.2.4 Attachments and Multimodal Input

AI Dock supports uploading files, images, and screenshots as additional context for conversations. When the currently active model in Studio supports vision capabilities, images can be directly analyzed by the model; documents are treated as long-text context for the Agent to reference.

## Supported Attachment Types

| Type | Supported Formats | Purpose |
|---|---|---|
| Images | png, jpg, jpeg, webp, gif | Analyzed by vision-capable models (requires vision support, e.g., GPT-4V, Claude 3.5 Sonnet, Qwen-VL) |
| Documents | txt, py, yaml, json, sh, xml, md, cpp, h, log, etc. | Used as long-text context |
| Screenshots (from clipboard) | Paste directly via Ctrl + V | Treated the same as images |

## Three Ways to Add Attachments

| Method | Action |
|---|---|
| Click the attachment button | Paperclip icon next to the AI Dock input box opens a file selector |
| Drag and drop files | Drag from your file explorer onto the AI Dock input box |
| Paste screenshot | Ctrl + V (macOS: Cmd + V) directly attaches the image from your clipboard |

Attached files appear above the input box and are submitted together with your message to the Agent.

## Typical Use Cases

### Analyzing Error Screenshots

A developer sees a GUI error popup on their device, takes a screenshot, and pastes it into AI Dock with the prompt: "What does this error mean, and how can I fix it?" The vision model reads the screenshot content and, combined with the Agent’s device-aware capabilities, provides troubleshooting suggestions.

### Uploading Configuration Files for Modification

Upload launch files, YAML configurations, etc., to AI Dock and describe the desired changes. The Agent reads the file content, generates a modified version, and can directly write it back to the device using `device_file_write`.

### Summarizing and Diagnosing Long Logs

Save a 1000+ line journalctl log as a .txt file and upload it, then prompt: "Identify errors and summarize them chronologically." The Agent scans the entire log and extracts key events.

## Notes

Attachments are included in the conversation’s context window and therefore consume tokens:

- A 1080p screenshot typically uses 1k–3k tokens (depending on the model’s visual encoding method)
- A 100 KB text file consumes approximately 25k–30k tokens
- Re-sending the same file repeatedly will consume tokens each time; we recommend adopting the pattern of “upload once and have the Agent reference it continuously”

If the token counter at the top of AI Dock approaches its limit, consider starting a new session or reducing the size/number of attachments.