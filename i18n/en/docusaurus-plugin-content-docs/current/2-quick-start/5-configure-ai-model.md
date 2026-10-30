---
sidebar_label: '2.5 Connect an AI model'
title: 2.5 Connect an AI model
description: 'Add a model configuration in Settings and test connectivity'
---

# 2.5 Connect an AI model

Try the available model from the workbench first. Built-in model access depends on sign-in, account quota, and deployment configuration. If a key or connectivity error appears, open **Settings → Models & providers**.

## Choose a path

| Situation | Action |
|---|---|
| The built-in model works | Start a conversation |
| Your team has a model service | Add a model with provider, model ID, Base URL, and API key |
| You want models on your computer | Install Ollama from Local models and download a tool-capable model |
| You want DSH | Check runtime readiness, set it as default, and create a new task |

## Configure your model

1. Open **Settings → Models & providers** and add a configuration in the current-model area.
2. Enter the display name, provider, model ID, API key, and Base URL supplied by the provider.
3. Test the provider API, then save or select **Add and enable**.
4. Return to the workbench, verify the model name, and send a simple message.

A model provider and a task runtime are different concepts. Changing the Moss/DSH default does not rebind existing tasks.

## Use local Ollama

Open **AI capabilities → Local models**. Install or detect the runtime, start the service, download and test a model, then **set it as the main model configuration**. An Agent model must support tool calling; downloading or chatting successfully does not prove tool-task support.

The model runs on your computer. Board OpenClaw needs a separately configured endpoint reachable from the board.

## Continue reading

- [First conversation](./6-first-conversation.md)
- [Configure AI models](../3-user-guide/13-config-center/3-ai-engine.md)
- [Runtime and models](../3-user-guide/2-ai-chat/6-dual-lane.md)
