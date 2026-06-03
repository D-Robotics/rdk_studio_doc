---
sidebar_label: '3.13.1 Understand the settings UI'
title: 3.13.1 Understand the settings UI
unlisted: true
---

# 3.13.1 Understand the settings UI

## Areas

| Area | Main content | When it applies |
|---|---|---|
| Account & security | Sign-in, sign out, local data cleanup | Immediately |
| Device connection | SSH, online checks, auto-reconnect, LAN collaboration | Mostly immediately |
| Appearance | Density, scaling, desktop experience | Immediately |
| AI engine | Model entries, reasoning/fast selection, tests | Immediately |
| Message channels · Feishu | Feishu app credentials, channel on/off, bindings | After save; runtime ops may restart the channel |
| Message channels · WeChat | WeChat QR bind, remove accounts, restart | After save or scan |
| Apps & updates | Version check, CLI, diagnostics, reset | Some ops need restart |

## Guidance

If you do not know what a setting does, prefer defaults. Most apply immediately after save; a few tied to updates or channel restarts show whether a restart is needed.

## Cross-links

RDK Studio jumps into settings from many places:

- AI Dock model banner → AI engine or local LLMs.
- OpenClaw model setup → reasoning model in AI engine.
- Left settings button → opens settings and remembers last section.
- Apps & updates → CLI and diagnostic bundles.

## Reset Studio

Reset clears local devices, model config, chat history, and some caches. It is irreversible—export settings first. To sign out only, use *Account & security → Sign out*.
