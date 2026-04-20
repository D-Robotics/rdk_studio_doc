---
sidebar_label: '3.11.1 SKILL.md File Structure'
title: 3.11.1 SKILL.md File Structure
---

# 3.11.1 SKILL.md File Structure

SKILL.md consists of two parts: YAML frontmatter (structured metadata) and Markdown body (detailed operational steps). Both parts are essential.

## Full Template

```markdown
---
name: my-skill
description: A one-sentence summary of what it does
version: 1.0.0
trigger: keyword1,keyword2,keyword3
risk: low
permissions: device_exec
delegate_preference: board
requires_board: true
approval_level: none
cooldown_seconds: 0
scheduler_template: none
category: Custom
---

# Skill Title

## Applicable Scenarios  
(When to use this skill)

## Execution Workflow  
(Step 1 → Step 2 → ...)

## Tool Mapping  
(Which Studio tools or board-side commands are used)

## Common Issues  
(Known pitfalls and workarounds)
```

YAML frontmatter is a metadata block enclosed by `---` at the top of a Markdown file. This format was originally introduced by static site generators like Jekyll and Hugo. Its key characteristics include structured fields, human readability, and machine readability.

## Key Field Descriptions

| Field | Required | Description |
|---|---|---|
| `name` | Yes | Unique skill ID (in slug format); used by AI to reference the skill |
| `description` | Yes | One-sentence description—**the most critical factor for AI when selecting a skill** |
| `version` | No | Skill version number, following semantic versioning (e.g., 1.0.0) |
| `trigger` | Yes | List of trigger keywords (comma-separated); skills matching these keywords are prioritized for loading |
| `risk` | Yes | Risk level: `low` / `medium` / `high` |
| `permissions` | Yes | Required tool permissions (e.g., `device_exec`, `network`) |
| `delegate_preference` | No | Preferred execution location: `local` (PC) / `board` (on-device) / `hybrid` |
| `approval_level` | No | Whether approval is required before execution: `none` / `prompt` / `always` |
| `requires_board` | No | Whether a board-side device is mandatory for using this skill |
| `category` | No | Category tag used for grouping in the UI |

## Impact of the `risk` Field

| Value | Agent Behavior |
|---|---|
| `low` | Executes the skill automatically without interrupting the user |
| `medium` | Prompts the developer in the conversation about what will be executed before proceeding |
| `high` | Requires explicit developer confirmation (clicking *Allow*) before continuing |

When designing skills, never underestimate the risk level—err on the side of caution. Operations involving board-side system configuration changes, file deletion, service restarts, etc., should be set to `medium` or `high`.

## Recommended Body Structure

Although the Markdown body allows flexible formatting, we recommend the following structure to enhance AI comprehension:

| Section | Content |
|---|---|
| Applicable Scenarios | When to use this skill (complements the `description`) |
| Execution Workflow | Step-by-step operational instructions (numbered list) |
| Tool Mapping | Studio tools and board-side commands used |
| Common Issues | Known pitfalls, error handling, and workarounds |

Avoid large blocks of prose. AI parsing is more reliable with structured, step-by-step lists.