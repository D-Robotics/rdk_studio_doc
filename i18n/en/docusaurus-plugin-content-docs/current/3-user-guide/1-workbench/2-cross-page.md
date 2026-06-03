---
sidebar_label: '3.1.2 Cross-page integration'
title: 3.1.2 Cross-page integration
unlisted: true
---

# 3.1.2 Cross-page integration

The Workbench puts Moss chat and the **current workspace** on one screen. The right-hand workspace shows what you can view and operate on, centered on the current project, device, directory, and diagnostic state.

## Live cards

The workspace **Live** page mainly includes these cards:

| Card | Behavior |
|---|---|
| Device management | Opens device management / add-device; when connected you can switch devices or verify SSH |
| Project workspace settings | Set or view the current remote project directory; shows a Git change summary when there is a repo |
| Send current context to Moss | Inserts references to project, device, directory, and change summary into the input box |
| Diagnostic snapshot | Collect device runtime status and send it to Moss in one step |
| Chat history | Open a past session and continue the task |

At the bottom of the Live page there are shortcuts: **History, Terminal, Files**. They switch panels inside the right workspace without leaving the Workbench.

## Workspace panels

You can switch these panels at the top of the workspace:

| Panel | Role |
|---|---|
| Live | Device, project directory, Git status, diagnostic snapshot, and history entry points |
| Terminal | Open an SSH terminal in the current project directory |
| Files | Browse, upload, download, and edit remote files under the current directory |
| Changes | View remote Git status and initialize a repo when needed |
| History | Open local session history |
| Browser | Appears when Moss opens a webpage or preview; refresh, copy URL, or close |

Terminal, Files, and Changes all use the same **current project directory**. If no directory is set, the UI will first prompt you to choose an on-board or remote directory.

## Integration with other pages

**Flashing, Remote desktop, Code editor, On-board Agent, Local LLM, and Skill workshop** in the left main nav are separate pages. Moss or workspace panels can take you there, for example:

- Open **Flashing** when you need to reflash the system.
- Open **Remote desktop** when you need a graphical desktop.
- Open **Code editor** for project-level development.
- Open **On-board Agent** to deploy or fix OpenClaw.
- Open **Local LLM** when you need local Ollama on this machine.

## Offline and read-only states

The workspace header shows the current device, directory, and executable status:

| State | Meaning |
|---|---|
| SSH verified / executable | Terminal, Files, Changes, and Moss device operations are available |
| Offline snapshot / read-only | Existing info and history are viewable; device operations wait for reconnect |
| On-board directory not set | Terminal, Files, and Changes first prompt to pick a directory |
| No device selected | Moss can plan and answer knowledge questions; execution needs a device added first |
