---
sidebar_label: '3.15.2 Token usage'
title: 3.15.2 Token usage
unlisted: true
---

# 3.15.2 Token usage

Tokens measure how much text the model processes. You do not need exact math—longer messages, more attachments, and more steps usually mean higher usage.

RDK Studio surfaces usage in two places: the AI Dock header capsule and the per-turn summary after each reply. Both help estimate workload and cost.

## AI Dock header capsule

The “usage capsule” in AI Dock’s top bar shows:

- Session cumulative tokens (input + output)
- Ratio against the current model’s context window
- Red warning when approaching the limit

Capsule data is **per session**: switching sessions switches counters; new sessions reset.

## Per-turn summary

After each assistant reply, the footer lists that turn’s usage:

| Field | Meaning |
|---|---|
| Turn total | Input tokens, output tokens, sum |
| Turns | How many internal passes Moss needed |
| Tool calls | File reads, commands, status checks, etc. |
| Elapsed | Wall time from your send to completion |
| Estimated cost | Rough guide only—billing is from the vendor |

Even a short question may fan out internally: read a file → analyze → answer. Each pass consumes tokens.

## Boundaries

Token UI is great for watching a session—not for official invoices:

| What you see | Reality |
|---|---|
| AI Dock capsule (this session) | Accurate live session tally |
| Per-turn footer | Accurate for that reply |
| Sum within one session | Accurate |
| Cross-session totals | Not a durable ledger |
| Daily / weekly / monthly | Use provider billing |
| Historical “estimated cost” | Approximate only |

For month-end reconciliation, do not rely solely on Studio.

## When you need precision

| Horizon | Practice |
|---|---|
| Short term (daily) | Screenshot the capsule for comparison |
| Long term (monthly) | Enable billing alerts and reports in the provider console |

Provider consoles survive Studio restarts and session switches.

## Estimation accuracy

Studio’s cost numbers are estimates and may diverge because:

- Real bills can include input cache discounts, surcharges, etc.
- Provider price changes may lag in Studio
- Volume discounts or enterprise pricing are unknown to Studio

Trust invoices for exact dollars; use Studio to spot obvious outliers fast.

## Tips

- Prefer **Fast** mode for simple Q&A.
- Trim huge files—send excerpts first.
- For steady cost control, wire alerts to provider billing—not only Studio totals.
