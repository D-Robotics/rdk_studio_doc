---
sidebar_label: '5.10 Abnormal Token Usage'
title: 5.10 Abnormal Token Usage
---

# 5.10 Abnormal Token Usage

**Typical symptoms**: After sending just a few messages, the token capsule at the top of *AI Dock* turns red; monthly bills far exceed budget.

## 30-Second Decision

*Settings Panel → AI Engine* → Check the "dual-lane" configuration:

- **Quick lane is empty** → All tasks default to the main model. Create a new Quick entry.
- **Quick lane exists but uses the wrong model** → Switch to an actually cheaper small model (`gpt-4o-mini`, `qwen-turbo`, `doubao-seed-2.0-lite`).
- **Quick lane already configured** → Proceed to "Troubleshooting by Scenario" below.

## Token Accounting Boundaries in Current Version

| What You See | Actual Behavior |
|---|---|
| Token capsule in top-right corner of AI Dock (current session) | Accurate, real-time at session level |
| Summary shown after a single Run completes in AI Dock | Accurate, cumulative for that Run |
| Cross-session totals / aggregation by tool / daily totals / cost equivalents | **Not persisted** in current version; **resets to zero upon Studio restart** |

For strict cost control:

- **Short term**: Take daily screenshots of the *AI Dock* token capsule for archiving.
- **Long term**: Enable **billing alerts** in your model provider’s console (most reliable, decoupled from Studio).

## Troubleshooting by Scenario

1. **Quick lane not enabled** — Studio implements a dual-lane design: Thinking (deep reasoning) uses models like `claude-sonnet-4` or `qwen3.6-plus`, while Quick (fast tasks) uses lightweight models like `gpt-4o-mini`, `qwen-turbo`, or `doubao-seed-2.0-lite`. If the Quick lane is empty, even small tasks go through the Thinking lane, causing **token usage to surge 5–10×**. Simply create a Quick entry in *Settings Panel → AI Engine*.

2. **Large files repeatedly uploaded** — Attaching long files or screenshots to every message repeatedly loads them into context:
   - Use *Attachments* instead of pasting directly.
   - Truncate long logs first (e.g., with `head -200`).
   - Do not manually disable D-Moss’s built-in pruning (automatically compacts context when it reaches 70% of the window size).

3. **Single task runs too long continuously** — By default, each message allows the model up to 64 consecutive reasoning steps (one step = one model call; tool calls count as well). Increasing this significantly (e.g., to 256) can generate massive token usage from a single message. **64 steps are sufficient for the vast majority of everyday tasks.**

## Permanent Solutions

- **Always configure a Quick lane** (choose a "lite"-series model from the four default built-in options).
- Review your model provider’s billing statement every Monday; if it deviates by >20% from the token counts shown in Studio’s capsule, investigate the three scenarios above.