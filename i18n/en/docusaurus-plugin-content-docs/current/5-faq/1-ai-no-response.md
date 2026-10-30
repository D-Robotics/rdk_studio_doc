---
sidebar_label: '5.1 Agent does not respond'
title: 5.1 Agent does not respond
description: 'Diagnose no-response issues across engine, model, and device'
---

# 5.1 Agent does not respond

First distinguish an **unavailable runtime, failed model request, still-running task, or offline device**.

## Check in order

1. Read the Moss/DSH indicator and current task state.
2. Check runtime status in **Settings → Models & providers**; recheck DSH if needed.
3. For Moss model failures, test the current model and verify its ID, provider, Base URL, and key state.
4. For Ollama, confirm the service is running, the model is downloaded, and tool calling is supported.
5. Inspect the error or existing execution records from the message menu before retrying.

| Symptom | First action |
|---|---|
| DSH unavailable / check failed | Resolve its reason; to use Moss, change the default and create a task |
| Invalid key / permission denied | Correct model credentials and account permissions |
| Model missing | Check the full model ID and endpoint |
| Request timeout | Check network, proxy, and service state |
| Task has not stopped | Wait for the stop result and check state before resubmitting |
| Device offline | Restore the task's bound device; another online device does not replace it |

An offline device does not prevent knowledge questions or local-project work; it restricts actions requiring that device. Changing the default runtime does not migrate an existing task.

If failure persists, retain the version, runtime, error, and request ID for redacted feedback. Do not send API keys in chat.
