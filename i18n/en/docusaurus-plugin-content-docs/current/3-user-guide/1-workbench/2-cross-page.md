---
sidebar_label: '3.1.2 Working across pages'
title: 3.1.2 Working across pages
---

# 3.1.2 Working across pages

The composer's work-location bar groups the project, folder, and local/device target. Select **Open location** to show that task's workspace on the right.

## Use several tools at one location

| View | Purpose |
|---|---|
| Overview | Current task, project, device, artifacts, and references |
| Terminal | Run commands locally or at the intended device location |
| Files | Inspect, transfer, and edit files at that location |

When choosing “Open terminal here” from a file menu, check whether the terminal is local or on the board. A board terminal requires a working SSH connection; a local project does not require a device.

## Open dedicated pages

Flasher, Block studio, Remote desktop, Code editor, and Board Agent are under **Device & development**. Plugin Center and Local models are under **AI capabilities**.

After switching pages, return to the workbench or the left task list to continue. Provide logs, files, or diagnostics as attachments or references when asking for analysis, so the Agent has the relevant material.

## State changes

- Board offline: keep its project binding and saved information; restore the intended device before operating.
- No folder selected: bind the appropriate folder through the project or workspace entry.
- Runtime unavailable: open settings and recheck. Changing the default requires creating a new task.
- Task running: check its state before adding instructions, stopping, or starting another task to avoid duplicate execution.
