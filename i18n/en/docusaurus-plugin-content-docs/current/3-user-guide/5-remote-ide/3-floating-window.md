---
sidebar_label: '3.5.3 Pop out the editor window'
title: 3.5.3 Pop out the editor window
unlisted: true
---

# 3.5.3 Pop out the editor window

Floating windows split the editor — great for Moss/docs plus code, and for multi‑monitor. ARM64 extension tips for RDK included.

## Floating mode

Use *Pop out* in the code editor title bar (top right):

- Main Studio can show other tabs (Terminal, AI Dock, etc.)
- Editor float can stay on top, go full screen, drag to second display
- Typical layout: editor secondary; AI Dock + Terminal primary

Float shares device list, models, skills with the main window — close and pop again anytime.

## Suggested extensions

Handy for RDK (ARM64‑friendly):

| Extension | Role |
|---|---|
| Python | Highlights, IntelliSense, debug |
| C/C++ | C++ editing + IntelliSense |
| YAML | TROS launch files |
| GitLens | Git history |
| Markdown All in One | Docs |
| TODO Tree | Track TODO markers |

Avoid Pylance (x64 binary only). For Python IntelliSense basics, the stock Python extension is enough.

## Integrated terminal

The built‑in shell is **device** SSH, not your PC shell — iterate code/commands in one frame.

## Security

| Topic | Guidance |
|---|---|
| Normal Studio path | No need to poke extra network holes |
| Manual remote exposure | Strong passwords; trusted viewers only |
| Shared hardware | Coordinate who edits to avoid overwriting |

## Cross‑device parity

Configs are per‑device. For uniform fleets, bake one golden image after tuning a reference board.
