---
sidebar_label: '3.15.2 Token usage'
title: 3.15.2 Token usage
---

# 3.15.2 Token usage

Tokens measure text processed by a model. More messages, attachments, and tool round trips generally increase usage.

## Read usage

Inspect the usage information provided by the task or conversation. Fields vary across Moss, DSH, and model providers. Missing data must not be treated as zero.

| Information | Use |
|---|---|
| Input / output tokens | Compare text processed by a task |
| Accumulated usage | Observe consumption within the scope stated by the page |
| Duration / action count | Help identify repeated attempts |
| Cost estimate | Rough comparison, not an invoice |

Conversation usage, individual runs, account quota, and provider billing are different scopes. Check the scope after changing conversations or runtimes instead of summing unrelated totals.

## Reduce wasted usage

State a clear goal, provide relevant log excerpts, and avoid duplicate tasks. Start separate conversations for unrelated goals and align complex requests through Plan or Spec first.

Balance model capability and cost. Local models still need suitable tool support. Consult the relevant platform for official billing, cache discounts, and account quota.
