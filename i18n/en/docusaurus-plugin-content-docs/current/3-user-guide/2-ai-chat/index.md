---
sidebar_label: '3.2 AI Dock'
title: 3.2 AI Dock
description: 'What the AI Dock input area contains and what to verify before sending'
---

# 3.2 AI Dock

AI Dock is the workbench task composer. Before sending, check the **project and work location, runtime, workflow, model, and attachments**.

## Workflows

| Workflow | Behavior | Use when |
|---|---|---|
| Execute | Acts and uses tools within permitted boundaries | The goal is clear and work should begin |
| Plan | Analyzes and lists steps without making changes | You want a proposal, impact, and risks first |
| Spec | Produces approvable requirements and steps before execution | A complex task needs agreement on goals and acceptance criteria |

Workflows are separate from runtime and model selection. A plan is not proof of successful execution, and approving a Spec does not authorize every subsequent sensitive action.

## Common controls

| Control | Purpose |
|---|---|
| Work-location bar | Check project, folder, local/device target, and open the location |
| Moss / DSH indicator | Show the current runtime and open runtime settings |
| Workflow | Choose Execute, Plan, or Spec |
| Model | Select an available configuration; a redundant selector may be hidden when only the default alias exists |
| Skills | Search and reference a skill |
| Attachments and voice | Add task materials or transcribe speech |
| Send / Stop | Start a task or request that its execution stop |

## Results and history

Answers prioritize results, required actions, and real errors. Open execution records from the message's more menu to inspect existing details. Ordinary copy and share focus on answer content while retaining code and command examples.

Resume history and project tasks from the left list. Changing the default runtime does not alter existing conversations. Questions can continue without a device; board actions require the intended device online.

## Continue reading

- [Open the composer](./1-overview-and-entry.md)
- [Device operations and results](./2-device-aware-tools.md)
- [Conversation history](./3-multi-session.md)
- [Slash commands](./5-slash-commands.md)
- [Runtime and models](./6-dual-lane.md)
