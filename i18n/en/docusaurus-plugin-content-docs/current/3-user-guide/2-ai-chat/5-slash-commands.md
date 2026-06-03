---
sidebar_label: '3.2.5 Slash commands'
title: 3.2.5 Slash commands
unlisted: true
---

# 3.2.5 Slash commands

Slash commands start with `/` in the AI Dock. They manage the current session, list skills, or temporarily switch models. They are **not** sent to the model and do **not** use tokens.

## Command list

| Command | Effect |
|---|---|
| `/help` | Lists available slash commands and what they do |
| `/clear` | Clears the current session’s reference context and restarts “empty” (history kept) |
| `/sessions` | Lists past sessions; pick one to continue |
| `/skills` | Lists skill IDs loaded in this session with short descriptions |
| `/model` | Temporarily switches the model for **this session only** |
| `/reset` | Resets Moss: clears context, reloads capabilities, re-probes devices |

## Typical uses

### `/clear` vs new chat

`/clear` drops reference context but keeps the session record—good for “new topic, same thread.” **New chat** is better for a fully new task. Pick what fits.

### `/skills` to verify loading

If a skill seems absent (installed but unused), run `/skills` to see what is active.

Skills load on demand: only when your message matches a trigger keyword.

If wording and triggers disagree, adjust triggers in [3.11 Skill Workshop](../11-skill/index.md).

### `/model` for a one-off stronger model

For heavy code generation, temporarily switch:

```
/model claude-sonnet-4-20250514
```

Takes effect immediately for this session only; does not change global defaults. New sessions revert to defaults.

### `/reset` when Moss misbehaves

If Moss loops a failed step or drifts off-topic, `/reset` clears context, reloads tools, and re-probes the device—stronger than `/clear`.
