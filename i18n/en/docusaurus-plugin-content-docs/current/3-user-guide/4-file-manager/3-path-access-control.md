---
sidebar_label: '3.4.3 Paths you cannot edit'
title: 3.4.3 Paths you cannot edit
unlisted: true
---

# 3.4.3 Paths you cannot edit

Some sensitive paths (e.g. `/sys`, `/proc`) block **direct Files writes**, reducing risk of accidental kernel or boot breakage.

## Restricted paths

| Path | Why writes are risky |
|---|---|
| `/sys/` | Kernel interface; writes can change behaviour or hurt hardware |
| `/proc/` | Process/kernel state interface; writes can interfere with running processes |
| `/dev/` | Device nodes — bad writes risk device malfunction |
| `/boot/` | Boot assets — edits can brick boot |

Reads are unrestricted. Blocks apply to write operations only.

## When you truly need writes

Two ways:

### Option 1 — Terminal

In [3.3 Terminal](../3-remote-terminal/index.md), run explicitly:

```bash
echo 1 > /sys/class/leds/red/brightness
```

Commands run on‑device shell. Verify command and paths before pressing Enter.

### Option 2 — Explicit AI Dock authorization

State authorization clearly in AI Dock, e.g.

> “I authorize writes under `/sys/class/leds`. Turn on the red LED.”

Moss proceeds **only after** explicit approval when the destination is sensitive.

## What you see when blocked

When Files blocks a write:

```
This path is restricted and cannot be written via Files directly.
Use Terminal manually or give explicit authorization in AI Dock.
```

The UI surfaces the cause — not a silent apparent success.
