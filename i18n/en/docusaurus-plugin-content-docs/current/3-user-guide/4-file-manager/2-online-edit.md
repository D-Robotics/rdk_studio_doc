---
sidebar_label: '3.4.2 Online Editing'
title: 3.4.2 Online Editing
---

# 3.4.2 Online Editing

The file manager integrates the Monaco Editor (the same editor component used in VS Code), allowing you to directly edit board-side files within Studio without downloading them to your PC. This capability is ideal for modifying individual configuration files or quickly reviewing code—use [Section 3.5 Remote IDE](../5-remote-ide/index.md) for multi-file or project-level development.

## Editing Workflow

| Step | Action |
|---|---|
| 1 | Double-click the target file in the file manager |
| 2 | The Monaco Editor opens on the right side or in a new window |
| 3 | Edit the content; syntax highlighting is displayed in real time |
| 4 | Press Ctrl + S to save—the file is automatically written back to the board via SFTP |

A success notification appears after saving. If saving fails (e.g., due to insufficient permissions), the editor displays an error message.

## Supported File Types

Monaco Editor provides syntax highlighting by default for the following common formats:

| Category | Extensions |
|---|---|
| Configuration files | `.yaml`, `.yml`, `.toml`, `.ini`, `.json`, `.conf` |
| Scripts | `.sh`, `.py`, `.js`, `.ts` |
| Source code | `.cpp`, `.c`, `.h`, `.hpp`, `.go`, `.rs` |
| Markup languages | `.md`, `.xml`, `.html` |
| Plain text | `.txt`, `.log` |

Files with unrecognized extensions are displayed as plain text but can still be edited and saved.

## Editor Features

| Feature | Supported |
|---|---|
| Syntax highlighting | Yes |
| Line numbers | Yes |
| Code folding | Yes |
| Find and replace | Ctrl + F / Ctrl + H |
| Multi-cursor editing | Alt + Click |
| Auto-save | No (manual save with Ctrl + S required) |
| Undo/Redo | Ctrl + Z / Ctrl + Y |

## Large File Warning

When opening a file larger than 5 MB, the editor displays a warning because:

- Editing large files in the browser performs poorly and may cause lag
- Saving large files over SFTP takes considerable time
- Large files are typically logs or binaries, which are unsuitable for online editing

Recommendations:

- For log files, first extract a sample using a remote terminal command like `head -1000 large.log > /tmp/sample.log`, then view the sample
- Use the [Section 3.5 Remote IDE](../5-remote-ide/index.md) for large code projects (based on code-server, with files processed directly on the board)
- Do not attempt to open binary files in the editor—they will appear as garbled text