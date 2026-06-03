---
sidebar_label: '5.10 Token usage looks high'
title: 5.10 Token usage looks high
---

# 5.10 Token usage looks high

**Typical symptoms:** After only a handful of prompts, AI Dock shows large token totals; billing portals spike too.

## Revisit model pairing

Under *Settings → AI engine*, confirm defaults for **Thinking** vs **Fast**:

- Fast unset ⇒ even tiny asks may ride the heavy thinking backend.
- Wrong fast model ⇒ pick a lighter model tuned for summaries/short QA.
- If settings look sane, inspect whether oversized attachments/logs repeat every turn.

## What the counters mean

| UI surface | Accuracy |
|---|---|
| AI Dock capsule (current session) | Live session rollup |
| Post-task summaries | Matches that single invocation |
| Cross-session / dollar estimates | Guidance only—invoices beat UI |

Budget hardening tips:

- **Short term:** note the AI Dock capsule daily.
- **Long term:** configure spend alerts inside the inference vendor portal.

## Scenario drill-down

1. **Fast lane empty** — Thinking excels at deep work; fast should soak short pings. Populate fast in *AI engine*.
2. **Huge files every message** — reprocessing full logs/screens blows tokens: prefer *Attachments*, trim snippets first, fork new chats once threads sprawl.
3. **Mega single tasks** — long tool/agent loops accumulate tokens organically; leave sane iteration caps—don't crank max turns sky high without reason.

## Remediation recap

- Wire up a cheap fast endpoint.
- Chunk long inputs.
- Reconcile invoices regularly; escalate anomalies via this playbook.
