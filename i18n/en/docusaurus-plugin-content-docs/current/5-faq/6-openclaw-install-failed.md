---
sidebar_label: '5.6 OpenClaw install failed'
title: 5.6 OpenClaw install failed
---

# 5.6 OpenClaw install failed

## Typical symptoms

- On-device Agent UI shows deployment failed.
- Prompts complain about missing runtime dependencies.
- Device offline—deploy disabled.
- “Installation corrupted” banner.
- Model settings won’t sync to the board.

## Read the status strip

The board agent page tracks OpenClaw, model, and network health:

| State | Action |
|---|---|
| Device offline | Restore SSH first—deploy pauses |
| Missing deps | Start deploy to auto-install; if it fails, get the device online |
| npm download errors | Fix networking or switch npm registry |
| Corrupted install | Use *Diagnose & repair* and follow prompts |
| Model unreachable | Verify Base URL / API key reachable from the board |

## Local Ollama rarely feeds OpenClaw directly

If Moss’s thinking model is desktop Ollama, OpenClaw generally **cannot** reuse it. Pick a remote endpoint the board can reach, or host inference on the device.

## Triage tips

Prefer **Check environment** and **Diagnose & repair** in-app. If deployment logs exist, paste them to Moss for deeper analysis.

Unless you maintain the board yourself, avoid hand-editing OpenClaw install trees or systemd units.
