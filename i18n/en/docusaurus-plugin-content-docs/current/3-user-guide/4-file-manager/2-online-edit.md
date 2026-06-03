---
sidebar_label: '3.4.2 Edit files'
title: 3.4.2 Edit files
---

# 3.4.2 Edit files

Files can edit small text files **on device** without downloading first. Good for quick config tweaks, skimming scripts, or one‑line edits. For whole projects use [3.5 Code editor](../5-remote-ide/index.md).

## Edit flow

| Step | What to do |
|---|---|
| 1 | Double‑click the target file in Files |
| 2 | Editor opens on the side or in a new window |
| 3 | Edit; double‑check paths and critical settings |
| 4 | Ctrl+S saves back to device |

Expect a success toast. Failures such as permission errors show inline in the editor.

## Good candidates

Reasonable:

- Config: `.yaml`, `.json`, `.conf`
- Scripts: `.sh`, `.py`, `.js`
- Plain text, log snippets, Markdown

Avoid in Files:

- Very large logs
- Binaries, model weights, archives
- Multi‑file projects

## Troubleshooting

- Permission denied — confirm this path truly needs edits, then use Moss.
- Huge file / slow — tail in Terminal or switch to Code editor.
- App ignores changes — check reload/restart steps for the service.
