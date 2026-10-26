---
sidebar_label: '3.3.1 Open SSH terminals'
title: 3.3.1 Open SSH terminals
---

# 3.3.1 Open SSH terminals

An SSH terminal targets the specified device. Check its name and folder, then verify with read-only commands such as `pwd` and `uname -a`.

## Multiple tabs

Open tabs for separate work. Each SSH session has its own directory, environment variables, and foreground command. Ctrl+C in one tab does not automatically stop other tabs.

Recheck the target after switching devices or opening a tab. Do not rely only on an earlier prompt. Closing a session does not guarantee that background board processes stopped; inspect process or service state on the device.

## Work with the Agent

Use a manual terminal to try commands and inspect output, then attach or reference relevant logs for Agent analysis. Tool execution may use a separate session and should not be assumed to inherit your manual terminal's `cd` or environment variables.

Stop the Agent through its task control. A terminal interrupt controls only that session's foreground command.
