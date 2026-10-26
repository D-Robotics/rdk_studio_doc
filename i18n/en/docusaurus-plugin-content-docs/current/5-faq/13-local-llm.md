---
sidebar_label: '5.13 Local models / Ollama issues'
title: 5.13 Local models / Ollama issues
---

# 5.13 Local models / Ollama issues

Open **AI capabilities → Local models** and check the runtime, service, model files, and tool-calling capability in order.

| Problem | Action |
|---|---|
| Not installed / stopped | Install the runtime and start its service |
| Port conflict | Check existing Ollama processes before starting another |
| Model missing | Verify the full name and tag, then download |
| Chat works but main-model selection fails | Tool calling may be unsupported; use a model accepted by detection |
| Download fails / disk full | Check network, disk, and data directory; changing folders does not migrate old files |
| Workbench still uses old configuration | Set the main model again and verify the current entry in Models & providers |

The model runs on your computer. Board OpenClaw requires a reachable address; the computer's `localhost` is not a board endpoint. Setting a local model does not alter existing Moss/DSH task bindings.

See [Local models](../3-user-guide/12-local-models/index.md).
