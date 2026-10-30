---
sidebar_label: '3.12 Local models'
title: 3.12 Local models
description: 'Install Ollama, download models, and set the primary model locally'
---

# 3.12 Local models

**AI capabilities → Local models** manages Ollama and models on your computer and can set a supported model as the Agent main model. This requires desktop or a deployment that permits local model execution.

## Steps

1. Detect the local runtime and install it if needed.
2. Start the Ollama service.
3. Enter a model ID, download it, and wait for completion.
4. Test that the model responds.
5. Confirm tool-calling support, then select **Set as main model configuration**.
6. Check the current model in **Settings → Models & providers**, then try a workbench task.

## Model capabilities

The Agent main model requires **tool calling**. A successful chat test does not prove tool support. Embedding-only, vision-only, or other models without tool calling cannot directly serve as the main Agent model. Follow detection results for the specific model.

Computer resources, model size, and task complexity affect speed. Verify a small task before attempting multi-step development.

## Common states

| State | Action |
|---|---|
| Not installed | Install the runtime and detect again |
| Installed but stopped | Start the service |
| Port occupied or startup failed | Check existing Ollama services and processes |
| Model missing | Check the full model name and tag, download, and retry |
| Cannot set as main model | Check tool-calling support |
| Insufficient disk space | Check capacity and directories in Data locations before downloading |

The interface can manage runtime, model, and cache locations. Changing a directory does not automatically migrate files; follow its guidance, including restart requirements. Whether Stop controls the current service depends on the process ownership shown by the page.

## Related configuration

Local models manages runtime and model files; Models & providers manages model entries. Setting a local main model does not change Moss/DSH task bindings or guarantee that DSH uses the same configuration.

Board OpenClaw needs a separately configured model service. Your computer's `localhost` refers to that computer and is not automatically a reachable board endpoint.
