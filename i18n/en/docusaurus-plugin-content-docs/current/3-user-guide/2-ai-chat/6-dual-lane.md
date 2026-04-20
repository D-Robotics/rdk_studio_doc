---
sidebar_label: '3.2.6 Dual-Lane Routing'
title: 3.2.6 Dual-Lane Routing
---

# 3.2.6 Dual-Lane Routing

RDK Studio provides two model slots—Thinking and Quick—which automatically dispatch tasks based on their type. This mechanism allows developers to leverage the strong reasoning capabilities of heavy models without incurring skyrocketing token costs from routing all tasks through them.

## Responsibilities of the Two Lanes

| Lane | Trigger Scenarios | Recommended Model Types |
|---|---|---|
| Thinking (Deep) | Main conversations, complex reasoning, multi-step planning, tasks requiring hardware awareness and tool invocation | Powerful models such as Claude Sonnet, Qwen Plus, Doubao Seed Pro, etc. |
| Quick (Fast) | Summarizing tool results, summarizing file browsing content, converting commands into descriptions, short Q&A | Lightweight models such as gpt-4o-mini, qwen-turbo, Doubao Seed Lite, etc. |

The Thinking lane handles tasks that "require deep thought," while the Quick lane handles tasks that "generate brief responses based on existing data."

## Automatic Routing

Studio automatically selects the appropriate lane based on task characteristics, and developers typically don’t need to intervene manually. For example:

- User asks, "Check my BPU usage and explain why it’s so high" → Handled by the Thinking lane (requires planning: first invoke a tool, then analyze the data)
- User asks, "What does the output of that previous command mean?" → Handled by the Quick lane (only needs to summarize based on existing context)
- After an Agent invokes a tool and needs to summarize the result for the user → Handled by the Quick lane

The "Current Model" label at the bottom of AI Dock displays the lane and model actually used for the current response, allowing developers to observe Studio's routing decisions.

## Cost of Leaving the Quick Lane Unconfigured

If a developer configures only the Thinking lane and leaves the Quick lane empty, all tasks will be routed through the Thinking lane, leading to the following consequences:

- **Token costs increase by 5–10×**: Short tasks that should go through the Quick lane are instead processed by powerful models
- **Slower responses**: Heavy models generally take longer to generate responses than lightweight ones
- **No functional impact**: Capabilities remain unaffected; only cost and speed degrade

We strongly recommend configuring the Quick lane. For this lane, you can choose the most cost-effective small models offered by vendors (e.g., gpt-4o-mini, qwen-turbo), with each invocation typically costing less than ¥0.01.

## Configuration Entry

The dual-lane assignment settings are located under *Configuration Center → AI Engine*:

- Two separate dropdown menus at the top allow you to assign model entries for Thinking and Quick lanes respectively
- Each lane can be independently configured with its own model entry (even from different vendors)
- Changes take effect immediately without requiring a restart

For complete details on model entry fields and protocol-based routing rules, see [3.12.3 AI Engine Configuration](../12-config-center/3-ai-engine.md).