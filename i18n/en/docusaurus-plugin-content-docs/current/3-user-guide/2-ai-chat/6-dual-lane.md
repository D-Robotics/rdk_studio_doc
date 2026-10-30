---
sidebar_label: '3.2.6 Runtime and models'
title: 3.2.6 Runtime and models
description: 'Choose the task engine, work mode, and model configuration'
---

# 3.2.6 Runtime and models

The current version separates **task runtime**, **workflow**, and **model configuration**. The older Fast/Thinking dual-mode description is no longer a guide to the current composer.

| Setting | Determines | Entry |
|---|---|---|
| Runtime | Whether Moss or DSH executes new tasks | Settings → Models & providers → Runtime |
| Workflow | Execute, Plan, or Spec | Composer workflow menu |
| Model | The model-service configuration used by the Agent | Composer model selector and Models & providers |
| Reasoning depth | Reasoning settings for models/Agents supporting the capability | Reasoning controls exposed by the current interface |

## Use DSH

1. Open **Settings → Models & providers**.
2. Check DSH status and select **Check runtime availability again** if needed.
3. Once ready, select DSH as the default for new tasks.
4. Create a task, verify its runtime indicator, and send a message.

Existing tasks keep their original runtime. Follow the reason shown when detection fails or DSH is unavailable. DSH does not automatically fall back to Moss. To use Moss, change the default and create a new task.

## Change the model

Moss uses saved model entries, selectable from the composer or added and tested in settings. A redundant model selector may be hidden when only the default Moss alias exists.

Changing a Moss model does not configure DSH or change a task's runtime. Available models and tools depend on the actual runtime state.

After downloading an Ollama model, select **Set as main model configuration**. The model must support tool calling. See [Local models](../12-local-models/index.md) and [Model settings](../13-config-center/3-ai-engine.md).
