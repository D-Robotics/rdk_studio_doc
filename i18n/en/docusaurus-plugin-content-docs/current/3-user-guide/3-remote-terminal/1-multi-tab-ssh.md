---
sidebar_label: '3.3.1 Open SSH terminal'
title: 3.3.1 Open SSH terminal
---

# 3.3.1 Open SSH terminal

The terminal supports multiple SSH tabs side by side, each isolated—handy when one tab runs a long job while another checks status.

## Tab isolation

Each tab is its own SSH session:

- Env vars, working directory `cd`, and shell functions in tab A do not affect tab B
- Ctrl+C in tab A does not interrupt what runs in tab B
- Closing a tab closes only that SSH session; processes started with `nohup` on the board keep running

## What you see when Moss runs commands

Device commands Moss needs also stream in the terminal:

| Origin | Where commands show |
|---|---|
| You type in the terminal | Current tab |
| Moss runs on the device | Same tab, live |

You can watch exactly what Moss runs. If a command looks wrong, Ctrl+C in the terminal cancels it and the AI Dock task stays in sync.

## Switching devices and tabs

When you change the active device, Terminal usually opens the new session in a **new** tab while old tabs remain—long jobs are not torn down unexpectedly. Close old tabs manually if you do not need them.

## Common actions

- Stop a running command: use the usual interrupt key in the terminal.
- Copy output: select text, then copy per your OS habit.
- Paste commands: read them first, then paste to avoid accidents.
