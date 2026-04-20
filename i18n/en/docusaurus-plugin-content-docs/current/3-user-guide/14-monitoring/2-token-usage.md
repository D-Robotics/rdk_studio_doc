---
sidebar_label: '3.14.2 Token Usage Statistics'
title: 3.14.2 Token Usage Statistics
---

# 3.14.2 Token Usage Statistics

A token is the smallest unit of text processed by an LLM: in English, 1 token roughly equals 4 characters (about 0.75 words); in Chinese, 1 token roughly equals 1.5 characters. Model billing is almost always calculated based on token count—token usage directly equals cost.

RDK Studio provides token usage statistics in two places: the session capsule at the top of AI Dock and the summary shown after each Run completes. This section also clarifies the current version’s statistical boundaries to prevent developers from misjudging its capabilities.

## Session Capsule at the Top of AI Dock

The "usage capsule" in the AI Dock top status bar displays real-time information:

- Total tokens used in the current session (input + output)
- Percentage of the current model’s context window limit
- Turns red as a warning when nearing the limit

Capsule data is **session-level**: switching to another session updates the capsule to show that session’s cumulative total; creating a new session resets it to zero.

## Summary After Each Run Completes

After each AI response completes, a token usage overview for that round appears at the end of the message:

| Field | Description |
|---|---|
| Total this round | Input tokens, output tokens, and total (including chain-of-thought tokens, if any) |
| Rounds | Number of iterations in the Agent Loop this round (each tool call followed by model processing counts as one iteration) |
| Tool Calls | Aggregated by tool name, clearly showing which tool contributed most |
| Duration | Total wall-clock time from user sending the message to AI completion |
| Estimated Cost | Estimated based on the model provider’s published pricing |

A typical Agent Loop workflow: user input → model decides (to speak or call a tool) → tool executes → tool result returned to model → model continues deciding → repeats until the model says “completed.” A single user message may trigger multiple iterations, each consuming tokens.

## Statistical Boundaries in Current Version

Token statistics in RDK Studio 1.1.x have clear boundaries—you **must know**:

| What You See | Actual Behavior |
|---|---|
| AI Dock Capsule (current session) | Accurate, real-time at session level |
| Summary after Run completion | Accurate, cumulative per Run |
| Sum across multiple rounds in same session | Accurate |
| Cross-session cumulative totals | **Not persisted—resets to zero upon Studio restart** |
| Persisted version aggregated by tool | **Not persisted** |
| Daily / Weekly / Monthly cumulative totals | **Not persisted** |
| Historical estimated costs | **Not persisted** |

If your workflow requires strict cost control (e.g., monthly billing reconciliation), you cannot rely on cumulative data within Studio.

## Recommended Practices for Strict Cost Control

| Period | Recommended Practice |
|---|---|
| Short-term (daily) | Take daily screenshots of the AI Dock capsule for archiving and comparison |
| Long-term (monthly) | Enable billing alerts and daily reports in your model provider’s console—the most reliable method, decoupled from Studio |

Billing data from the model provider’s console reflects actual charges and won’t be lost due to Studio restarts.

## Accuracy of Estimated Costs

The estimated costs displayed in Studio are approximations and may differ from actual bills for several reasons:

- Actual provider billing may include discounts for input caching, separate tool-call fees, inference fees, etc.
- Studio may not immediately sync with provider price changes
- Studio doesn’t know about volume discounts or enterprise contract pricing

For precise cost tracking, always refer to your provider’s billing statement. Studio’s cost estimates are intended only for “intra-day rough comparisons”—for example, to see how many times more expensive one task is compared to another.

## Implementation Details

Token statistics are aggregated in Studio’s process memory:

- Calculation entry point: `server/monitoring/token-usage.ts`
- Data flow to frontend: `run-summary` event in `src/hooks/useAIChatStore.ts`
- Tool: D-Moss Agent’s `dmoss_token_usage_report` tool can query cumulative data currently held in process memory

Future versions plan to persist data to disk and enhance cost estimation—see the roadmap for details.