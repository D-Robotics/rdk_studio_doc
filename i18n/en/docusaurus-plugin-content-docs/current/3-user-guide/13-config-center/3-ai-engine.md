---
sidebar_label: '3.13.3 Configure AI models'
title: 3.13.3 Configure AI models
---

# 3.13.3 Configure AI models

The AI engine tells Moss which model handles complex work and which handles quick answers. Start by understanding **reasoning** vs **fast** defaults.

![Settings center · AI engine: default models for reasoning and fast modes](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/settings-ai-engine.png)

## Reasoning vs fast

| Mode | Use for | Typical choice |
|---|---|---|
| Reasoning | Main chat, heavy tasks, device triage, code changes | Stronger cloud or team-hosted model |
| Fast | Short Q&A, summaries, file skim | Cheaper model or local Ollama |

If fast mode points to local Ollama but the model is not running, AI Dock prompts you to open [3.12 Local LLMs](../12-local-models/index.md).

## Field reference

| Field | What to enter |
|---|---|
| Display name | A label you recognize, e.g. “Company model” or “Local fast” |
| Provider | Match your platform or self-hosted stack |
| Model name | Exactly as the provider documents (case-sensitive) |
| API key | Usually required for remote models; often empty for local Ollama. Enter in settings—do not paste keys into chat |
| Base URL | For self-hosted gateways; leave empty for vendor defaults |

After saving, pick different models independently for reasoning and fast.

## Wrong provider

Provider must match the platform. “OpenAI-compatible” services use the matching compatible type; local Ollama uses Ollama. Wrong provider often shows failed tests, unknown model, or invalid key.

If unsure, share provider docs or internal field specs with Moss—**redact keys** in screenshots.

## Relationship to local LLMs

The local LLMs page installs, starts, downloads, and tests Ollama models; the AI engine assigns them to Moss. Recommended: on local LLMs click “set as fast model config”, then confirm in AI engine.

## Relationship to OpenClaw

On-device agents can follow Moss’s reasoning model, but some models cannot run on device. Local Ollama on the PC is not reachable from the board by default—the UI warns when that matters.

## Connectivity test

Click test before relying on a profile. If it fails, check:

- Provider choice
- Model name spelling
- Full API key copied (no extra spaces)
- Base URL if your team requires a custom endpoint
- Local Ollama is running and the model is downloaded
