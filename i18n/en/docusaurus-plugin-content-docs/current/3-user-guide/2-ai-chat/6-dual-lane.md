---
sidebar_label: '3.2.6 Choose reply mode'
title: 3.2.6 Choose reply mode
---

# 3.2.6 Choose reply mode

RDK Studio offers **Fast** and **Think** reply modes. Toggle them in the input area; defaults can be set separately in settings.

## What each mode is for

| Mode | Good for | Suggested models |
|---|---|---|
| Fast | Short Q&A, summarizing execution output, light file notes | Small or local Ollama models |
| Think | Multi-step troubleshooting, code changes, execution plans, complex device tasks | Stronger cloud or self-hosted models |

If Fast is unset, simple tasks fall back to Think—slower and costlier. Configure at least one low-cost Fast model.

## Local Ollama with Fast mode

On the Local LLM page you can one-click assign a downloaded Ollama model as Moss **Fast** mode. Typical flow:

1. Open *AI capabilities → Local LLM*.
2. Install and start Ollama.
3. Download a chat model.
4. Test the model.
5. Click **Set as Fast model configuration**.

If the input warns that Ollama is unreachable, the local service is not running or is blocked by another process.

## Where to configure

- Fast setup: left sidebar *AI capabilities → Local LLM*.
- Full setup: *Settings → AI engine*.

Service type on each model entry must match the provider. Field details: [3.13.3 Configure AI models](../13-config-center/3-ai-engine.md).
