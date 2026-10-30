---
sidebar_label: '3.11.5 Select and trigger skills'
title: 3.11.5 Select and trigger skills
description: 'How skills are selected, triggered, and actually loaded'
---

# 3.11.5 Select and trigger skills

A skill's name, description, and trigger information help the Agent decide when to use it. Runtime, enabled state, task context, and tool support affect actual use; trigger words are not a guarantee of loading.

## Select a specific skill

1. Confirm it exists and inspect it in **Plugin Center → Skills**.
2. Select it with composer skill search or type:

```text
/skill rdk-app-development Build a device status web page.
```

3. Specify the device, working folder, and acceptance criteria.
4. Review the answer and existing execution records to confirm the relevant workflow was used.

## Write trigger information

Describe specific use cases, device types, common problems, and distinctive errors. Include useful Chinese/English variants and abbreviations, but avoid broad terms such as “development” or “device” alone.

If the expected skill is not selected, check its state and runtime support, then improve the description or select it explicitly. Loading a skill does not mean an action ran; verify tool results.
