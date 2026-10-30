---
sidebar_label: '5.10 Unexpected token usage'
title: 5.10 Unexpected token usage
description: 'Find tasks and configurations behind unexpectedly high token usage'
---

# 5.10 Unexpected token usage

For unexpectedly high usage, check the task runtime, model, scope, and repeated execution first.

## Inspect

- Whether the selected model fits the task or uses an unexpectedly costly configuration.
- Repeated long logs, images, or entire code folders.
- Duplicate tasks, background runs, or repeated failed attempts.
- Large amounts of unrelated conversation context.

Stop unnecessary tasks, narrow the scope, and provide relevant excerpts. Change models in **Settings → Models & providers**, rather than troubleshooting through the older Fast/Thinking dual-mode settings.

Usage display depends on runtime, provider data, and measurement scope. Missing values do not mean zero. Usage/cost estimates are not invoices; consult the account or model-service platform for official quota and billing.

For apparent duplicate charges or unexpected quota after failure, retain the task, time, request ID, and error, then report them instead of repeatedly submitting the same task.
