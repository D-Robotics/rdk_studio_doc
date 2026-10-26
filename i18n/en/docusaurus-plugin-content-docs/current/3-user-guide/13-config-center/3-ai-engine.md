---
sidebar_label: '3.13.3 Configure AI models'
title: 3.13.3 Configure AI models
---

# 3.13.3 Configure AI models

Open **Settings → Models & providers**. Runtime, model-service, and action-confirmation controls are grouped here but have separate effects.

## Runtime

**Moss** is built in. **DSH** can be selected after its availability check succeeds. Use **Check runtime availability again** to inspect readiness and reasons.

Changing the default affects newly created tasks only; existing tasks keep their runtime. The composer shows the current task runtime or the default for a new task and links back to settings. Unavailable DSH does not automatically switch to Moss.

## Current model

Model configuration primarily serves Moss. Choose a saved model, add and enable one, or edit, test, and delete the current entry.

| Field | Value |
|---|---|
| Display name | A recognizable name |
| Provider | The actual provider, or the corresponding compatible interface |
| Model ID / name | The complete value supplied by the provider |
| API key | Enter it in settings; retain or replace saved keys as instructed |
| Base URL | The endpoint supplied by your provider or team |

Test the provider API, then select **Save** or **Add and enable**. If saving fails, read the error; entering new fields does not mean the configuration was saved.

Where available, the composer model selector can switch models. A redundant selector may be hidden when only one default Moss alias exists. Moss model configuration does not rebind DSH tasks or serve as DSH model settings.

## Built-in and local models

Reapply the built-in preset if the deployment has one available. Follow missing-key or missing-preset messages. **Keep built-in presets only** deletes extra local model entries, so check which configurations you need first.

Install and download Ollama models on [Local models](../12-local-models/index.md). Confirm tool-calling support before selecting **Set as main model configuration**. Board OpenClaw requires a model endpoint reachable from the board.

## MCP and legacy Agent diagnostics

Manage custom tool connections under **MCP services**, subject to deployment permissions. Legacy Agent diagnostics describe compatible-session installation or invocation issues; they do not make external coding Agents selectable in the current workbench.

See [Model configuration import and export](./5-import-export.md) for backup.
