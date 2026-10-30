---
sidebar_label: '3.13.1 Understand settings'
title: 3.13.1 Understand settings
description: 'Find the right settings section for each problem'
---

# 3.13.1 Understand settings

Use the relevant settings section: **Models & providers** for model connectivity, **Device connection** for device failures, and **Data locations** for local data locations.

## Which changes affect a task

| Change | Effect |
|---|---|
| Default runtime for new tasks | Affects newly created tasks only; existing bindings remain |
| Model entries | Saved/selected model configuration is used without changing the task runtime |
| Project or device folder | Changes the work location; check the original binding when resuming history |
| Data directory | Existing files are not automatically migrated; some settings require restart |
| App update | Save files and restart as instructed |

The composer runtime indicator opens runtime settings, and the model settings entry opens Models & providers. A redundant model control may be hidden when only one default alias exists.

## Deployment differences

Public Web Cloud isolates user data by account and hides process-wide Data locations, Feishu, and WeChat configuration. Custom MCP and host capabilities also depend on deployment permissions.

## Recovery and reset

Model export is not a full local-data backup. If history recovery fails, restore local storage and services, then select **Retry local history recovery**. Resetting or deleting data may affect other accounts using the same local data directory and is not a substitute for signing out.
