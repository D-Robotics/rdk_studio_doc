---
sidebar_label: '3.3 Terminal'
title: 3.3 Terminal
description: 'Switch between local and device terminals and verify directories'
---

# 3.3 Terminal

Terminals can target **your computer** or an **SSH device**. Check the target label and current directory before running commands.

## Choose a terminal

| Need | Action |
|---|---|
| Run commands in a project on your computer | Select a local project and use Open location → Terminal |
| Run commands on a board | Verify the intended device's SSH connection, then open Terminal or the task location |
| View boot logs | Use a serial entry supported on the current platform; serial is not SSH device access |

Run a simple command such as `pwd` first. Local and board folders are separate bindings, even if their path names look the same.

## Agent output and manual terminals

Agent commands and results can be inspected in conversation execution records or the corresponding task tool. They do not necessarily reuse your manually opened terminal session. Stop the Agent through its task control; Ctrl+C in a manual terminal interrupts that terminal's foreground command.

After reconnection, inspect process state before restarting services or repeating writes.

## Continue reading

- [SSH terminals](./1-multi-tab-ssh.md)
- [Reconnection](./2-reconnect.md)
- [Serial logs](./3-serial.md)
