---
sidebar_label: '3.11.1 How to author SKILL.md'
title: 3.11.1 How to author SKILL.md
unlisted: true
---

# 3.11.1 How to author SKILL.md

`SKILL.md` has two parts: frontmatter and body instructions. Frontmatter tells Moss what the skill is called, when to use it, and how risky it is; the body explains how to execute it.

## Full template

```markdown
---
name: my-skill
description: One-line explanation of purpose
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

# Skill title

## When to use
(Scenarios where this skill applies)

## Execution flow
(Step 1 → step 2 → ...)

## Tool mapping
(Which Studio tools or board commands to use)

## FAQ / pitfalls
(Known issues and workarounds)
```

The YAML block bounded by `---` is frontmatter—you only need to fill it in using the template.

## Key fields

| Field | Required | Meaning |
|---|---|---|
| `name` | Yes | Unique skill name; prefer short English or romanized identifiers |
| `description` | Yes | One sentence—**the strongest signal Moss uses to choose the skill** |
| `version` | No | Semantic version (for example `1.0.0`) |
| `trigger` | Yes | Comma-separated keywords; boosts priority when matched |
| `risk` | Yes | `low` / `medium` / `high` |
| `permissions` | Yes | Tools the skill expects to call |
| `delegate_preference` | No | `local` (PC), `board`, or `hybrid` |
| `approval_level` | No | Whether user confirmation runs before execution |
| `requires_board` | No | Must a board-attached session exist |
| `category` | Optional | Groups skills in UI |

## How `risk` changes behavior

| Value | Moss behavior |
|---|---|
| `low` | Lightweight tasks—fewer confirmation prompts |
| `medium` | Call out planned actions before running |
| `high` | Requires an explicit **Allow** click before continuing |

Prefer conservative labeling. Board tuning, deletes, restarts deserve `medium` or `high`.

## Recommended body outlines

Markdown bodies are flexible, but structuring helps Moss parse reliably:

| Section | Content |
|---|---|
| When to use | Complements `description` with timing cues |
| Execution flow | Numbered procedural steps |
| Tool mapping | Studio tools and shell snippets |
| FAQ / pitfalls | Errors, remediation, escapes |

Avoid long prose blobs—numbered steps parse more reliably.
