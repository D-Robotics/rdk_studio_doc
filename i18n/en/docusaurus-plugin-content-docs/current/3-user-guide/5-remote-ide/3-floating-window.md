---
sidebar_label: '3.5.3 Floating Window Mode and Extension Management'
title: 3.5.3 Floating Window Mode and Extension Management
---

# 3.5.3 Floating Window Mode and Extension Management

Floating window mode is a unique capability of the RDK Studio desktop client, allowing you to detach the remote IDE into an independent window—ideal for multi-monitor development. This section also introduces recommended extensions for RDK development scenarios.

## Floating Window Mode

Using the *Pop Out* button in the top-right corner of an IDE tab’s title bar, you can detach the remote IDE into a separate window:

- The main Studio window can continue displaying other tabs (e.g., remote terminal, AI Dock)
- The IDE floating window supports always-on-top, full-screen mode, and dragging to secondary displays
- For multi-monitor setups, placing the IDE on a secondary screen while keeping the AI Dock and terminal on the primary screen creates a smoother workflow

The floating window shares all states with the main window (device list, model configurations, skills, etc.). After closing the floating window, you can pop it out again at any time.

## Recommended Extensions

For RDK development scenarios, the following extensions are commonly used and compatible with ARM64:

| Extension | Purpose |
|---|---|
| Python | Python syntax highlighting, intelligent completions, and debugging |
| C/C++ | C++ editing and IntelliSense |
| YAML | Editing TROS launch files |
| GitLens | Enhanced Git history |
| Markdown All in One | Writing documentation |
| TODO Tree | Tracking TODO comments in source code |

Do not install Pylance (it only provides x64 binaries). If you need Python intelligent completions, the basic Python extension is sufficient for most day-to-day development tasks.

## Integrated Terminal

The built-in terminal in the IDE (opened via Ctrl + ~ or *Terminal → New Terminal*) launches a shell session on the board (not your local PC). Functionally, it is equivalent to the [3.3 Remote Terminal](../3-remote-terminal/index.md), but more convenient within the IDE—you can write code and run commands in the same window simultaneously.

## Security Notes

| Note | Description |
|---|---|
| code-server listens on 127.0.0.1 by default | Accessible only through an SSH tunnel; not exposed publicly |
| If you manually expose the port publicly | Be sure to set a strong password in `~/.config/code-server/config.yaml` |
| Multi-user development on the same board | code-server sessions are cookie-based; multiple browser instances can be used concurrently, but teams should designate a primary user to avoid conflicts |

## Cross-Device Sync

code-server’s settings sync is not compatible with the desktop version of VS Code. Each device stores its IDE configuration independently on the board under `~/.local/share/code-server/` (including installed extensions, user preferences, and keybindings). If you wish to use identical configurations across multiple boards, we recommend manually backing up this directory and restoring it on new boards.