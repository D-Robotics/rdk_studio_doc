---
sidebar_label: '3.2.2 Device operations and results'
title: 3.2.2 Device operations and results
description: 'Confirm targets, permissions, and results for device tasks'
---

# 3.2.2 Device operations and results

For a device task, establish **which device, which folder, and which result**. Projects and historical conversations may retain an earlier device binding; checking which device happens to be online is insufficient.

## Start with read-only checks

```text
Check the network and disk on this project's bound device. Gather information read-only, then explain problems and suggestions.
```

While offline, you can analyze saved logs and prepare a proposal. Actual board commands, file operations, and services require the intended device connection. Another online device does not automatically take over.

## Execution and approval

Execute allows the Agent to use available tools, while permission policies still check each action and target. When an approval card appears, review the device, path, command, and impact before allowing or rejecting it. Plan only analyzes; Spec first produces requirements and steps for approval.

Moss and DSH may support different tools. If the runtime or action is unavailable, follow the displayed reason. “Task submitted” is not proof that an operation succeeded.

## Verify results

- Read completed work, remaining work, failures, and next steps in the answer.
- For underlying details, open **Execution records** from the message's more menu to inspect existing tool, terminal, or plan records for that message.
- Check actual output and changes in Terminal and Files under “Open location.”
- Ordinary copy and share focus on answer content and omit internal tool arguments and verification records by default, while preserving code, commands, and protocol examples.

Stopping requests that further execution end; completed actions are not automatically rolled back. Before redeploying, restarting, or repeating a write, check the current device state.
