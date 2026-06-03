---
sidebar_label: '5.11 Poor model reply quality'
title: 5.11 Poor model reply quality
---

# 5.11 Poor model reply quality

**Typical symptoms:** Answers drift off-topic, repeat loops, misuse tools, leak raw `<think>…`, or bilingual noise (Chinese riddled with English).

## Sanity checks before swapping models

1. Task difficulty — hard debugging belongs in **Thinking** mode.
2. Thread length — start a fresh session after long debates.
3. Skill load — `/skills` in AI Dock lists active skills—trim noise.
4. Only after the above consider upgrading the thinking backbone.

## Checklist detail

1. **Wrong modality** — Fast mode for micro Q&A only; Thinking for planning/tracebacks. Peek the footer model chip; tweak in *AI engine* if mismatched.

2. **Thinking tags bleed through** — some vendors wrap private reasoning inside `<think>`:
   - Upgrade via *Settings → App & updates*
   - Toggle advanced model options that hide reasoning traces.

3. **Mixed languages** — *AI engine → Advanced* ⇒ set Reply language to *Follow OS* or *Chinese*. Persisting English chunks usually means you need a stronger base model instead of UI knobs alone.

4. **Wrong tools/skills** — `/skills`; uninstall unused baggage under *Skill workshop → Installed*.

5. **Context rot** — very long transcripts confuse routing; spinning up a blank session is fastest remediation.

## Make it stick

- Invest in stronger thinking models for mission-critical workflows.
- Encode repeatable procedures into *Skill workshop → Create* so Moss stops guessing tooling.
- Keep Studio patched—providers ship compatibility fixes continuously.
