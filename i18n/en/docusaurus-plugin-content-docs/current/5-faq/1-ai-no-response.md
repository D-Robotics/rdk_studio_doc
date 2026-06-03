---
sidebar_label: '5.1 Moss not responding'
title: 5.1 Moss not responding
---

# 5.1 Moss not responding

## Typical symptoms

- The workbench spinner never finishes after you send a message.
- The composer shows “Fast / thinking model not configured correctly.”
- Local Ollama reports the service is unreachable.
- Remote models return key errors, “model not found,” or timeouts.

## Check composer banners first

AI Dock surfaces model setup issues proactively:

| Banner | What to do |
|---|---|
| Fast / thinking points at local Ollama but the service is down | Open [3.12 Local LLMs](../3-user-guide/12-local-models/index.md) and start the service |
| Model missing from local Ollama list | Pull the matching tag on the Local LLM page, or switch to a full model name from the list |
| Remote model incomplete | Open *Settings → AI engine* and fill in model name, Base URL, and API key |

## Remote-model checks

Go to *Settings → AI engine* and test the current thinking or fast model:

| Error | Common causes |
|---|---|
| Key error or insufficient permission | Wrong or expired API key, or missing role |
| Model not found | Wrong model id, or wrong Base URL |
| Connection timeout | Network, proxy, corporate firewall, or overloaded endpoint |
| Provider error | Provider does not match the platform you configured |

When unsure what is wrong, share the vendor’s field guide, the test error (with keys redacted), or a screenshot with keys hidden—do **not** paste API keys into chat.

## Local model checks

If you use Ollama:

1. Open *Local LLM*.
2. Confirm the runtime is installed.
3. Confirm the service is running.
4. Confirm the model name you configured exists in the list.
5. Run the model test.

More detail: [5.13 Local LLM / Ollama issues](./13-local-llm.md).

## Device offline is not “Moss silent”

When the device is offline, Moss can still plan and answer from docs; board-side commands wait for reconnect or extra confirmation. If you asked for execution, check whether the device chip shows online first.
