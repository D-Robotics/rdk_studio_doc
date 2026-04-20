---
sidebar_label: '5.11 Model Response Quality Issues'
title: 5.11 Model Response Quality Issues
---

# 5.11 Model Response Quality Issues

**Typical symptoms**: Off-topic responses / repetitive outputs / incorrect tool selection / raw `<think>...</think>` tags appearing in output / Chinese responses mixed with English (or vice versa).

## 30-Second Decision Guide

90% of quality issues aren't caused by the model itself—first rule out "environmental interference":

1. Has the Quick lane taken over a task that should be handled by the Thinking lane? Check the model tag at the bottom of AI Dock.
2. Is context usage exceeding 90%? Start a new session.
3. Are too many injected skills interfering with each other? Type `/skills` in AI Dock to review the list.
4. If it's truly a model capability issue → switch to a model in the Thinking lane.

## Troubleshooting Checklist

1. **Lane Mismatch** — Using lite/mini models in the Quick lane for tasks requiring planning will inevitably result in poor quality. You can see the actual model being used at the bottom of *AI Dock*. If incorrect, go to *Settings Panel → AI Engine* and correctly assign the appropriate lane.

2. **Exposed `<think>` Raw Tags** — Some domestic models wrap their reasoning steps inside `<think>` tags. Studio’s InlineThinkingRouter automatically strips these tags. If you see raw tags:
   - Upgrade to the latest version (fixes various vendor-specific variants)
   - Or temporarily set *Reasoning visibility* to `hidden`

3. **Mixed-Language Output** — In *Settings Panel → AI Engine → Advanced*, set "Response Language" to "Follow System" or "Chinese". A few smaller models may still occasionally output English; switching to a more capable model is the most effective solution.

4. **Incorrect Tool Selection** — Type `/skills` in *AI Dock* to see which skills are currently injected. Too many redundant skills can interfere with decision-making; uninstall unused ones via *Skill Workshop → Installed*.

5. **Degraded Performance from Long Conversations** — Extended conversations accumulate excessive context, degrading model performance. Studio automatically compacts context at 70% usage, but if usage exceeds 90% and you're still asking follow-ups, start a new session.

## Permanent Solutions

- Always select the strongest available model for the Thinking lane—**don’t use mini models just to save tokens**.
- For critical scenarios, go to *Skill Workshop → Create New Skill* and write a dedicated **SKILL.md** file so the Agent doesn’t have to "guess" which path to take.
- Pay attention to RDK Studio update notifications—the model understanding layer (including reasoning tag processors like InlineThinkingRouter) continuously improves with each version.