---
sidebar_label: '3.2.4 Upload files and screenshots'
title: 3.2.4 Upload files and screenshots
---

# 3.2.4 Upload files and screenshots

The AI Dock accepts files, images, and screenshots as reference. Whether images are analyzed directly depends on whether the current model supports vision.

## Supported attachment types

| Type | Supported | Use |
|---|---|---|
| Images | png, jpg, jpeg, webp, gif | Show Moss screenshots, UI, or error dialogs |
| Documents | txt, py, yaml, json, sh, xml, md, cpp, h, log, etc. | Give Moss file contents |
| Screenshots | Paste or upload as an image | Quickly show what you see |

## Three ways to add attachments

| Method | Action |
|---|---|
| Attachment button | Paperclip next to the AI Dock input opens the file picker |
| Drag and drop | Drag from the file manager onto the input |
| Paste screenshot | Paste clipboard image into the input |

Attachments appear above the input and are sent with the message.

## Typical scenarios

### Analyze an error screenshot

When you see a GUI error on the board, paste a screenshot into the AI Dock and ask, for example: “What does this error mean and how do I fix it?” Vision-capable models read the image; Moss combines it with device context.

### Upload a config for edits

Upload launch files, YAML, etc., and describe the change you want. Moss reads the content, proposes edits, and writes back after you confirm.

### Long logs: summarize and locate

Save logs as text, upload, and ask: “Find the errors and summarize in time order.” Moss pulls the key events.

## Notes

Attachments become part of the model input and consume tokens:

- Larger images and longer text cost more.
- Resending the same file spends tokens again.
- Prefer uploading once, then referring to it in follow-ups.

If the token pill near the top of the AI Dock nears the limit, start a new session or trim attachments.
