---
sidebar_label: '5.13 Local LLM / Ollama issues'
title: 5.13 Local LLM / Ollama issues
---

# 5.13 Local LLM / Ollama issues

## Common symptoms

- Local LLM page reports “not installed” or “service stopped.”
- AI Dock warns the desktop model server is unreachable.
- Weights downloaded but Moss claims the model id is missing.
- Pull fails due to disk or port clashes.

## Triage sequence

1. Open *AI capabilities → Local LLM*.
2. Runtime installed?
3. Service alive?
4. Model list contains the configured id verbatim?
5. Run the built-in test harness.
6. Promote passing models to Moss’s **fast** slot.

## Key facts

| Term | Meaning |
|---|---|
| Desktop Ollama | Runs on your workstation—not the board |
| Model id | Must match `ollama list` exactly |
| Embedding models | Not valid chat backends for Moss |
| Stop service button | Only stops instances Studio launched—system‑wide daemons stop via OS tools |

Desktop Ollama fits Moss fast mode; avoid pointing OpenClaw at it unless the board can route to that endpoint.
