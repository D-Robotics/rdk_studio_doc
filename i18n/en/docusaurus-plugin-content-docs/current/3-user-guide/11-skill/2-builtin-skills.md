---
sidebar_label: '3.11.2 Built-in Skills and Categories'
title: 3.11.2 Built-in Skills and Categories
---

# 3.11.2 Built-in Skills and Categories

RDK Studio comes bundled with a curated set of official skills maintained by D-Robotics, covering the most common scenarios in RDK development. Developers can use them out of the box without manual installation.

## Five Major Categories

Built-in skills are organized into the following categories:

| Category | Purpose | Example Skills |
|---|---|---|
| Core Operations (`core/`) | Device diagnostics, hardware knowledge, and foundational capabilities for OpenClaw collaboration | `rdk-openclaw`, `rdk-device-ops`, `rdk-hardware`, `rdk-board-knowledge` |
| Board-Specific (`boards/`) | Specialized capabilities tailored to specific board models | `rdk-x5-app`, `rdk-x5-ai-detect`, `rdk-x5-tros-runtime` |
| Documentation & Search (`docs/`) | Searching within RDK official documentation and community resources | `rdk-developer-docs`, `rdk-doc-optimized`, `rdk-ros`, `rdk-forum-search` |
| General Tools (`tools/`) | Cross-scenario通用 capabilities | `multi-search-engine`, `agent-browser`, `duckduckgo-search` |
| Optional Extensions (`optional/`) | Advanced capabilities that can be optionally enabled | `rdk-token-usage`, `nano-banana-pro`, `rdk-skill-authoring-guide` |

## Number of Skills and Access Points

The repository actually contains 45 `SKILL.md` files (counted by files matching `skills/**/SKILL.md`). The subset listed under *Skill Workshop → Skill Center → catalog* represents a curated selection; additional skills can be found via search on the ClawHub community.

Ways to view skill details:

| Access Point | Path |
|---|---|
| Built-in Studio Directory | *Skill Workshop → Skill Center → catalog* |
| Repository Source Files | `<repo-root>/skills/<category>/<skill-name>/SKILL.md` |
| View Currently Active Skills in AI Dock | Enter the `/skills` command |

## The Actual "Home" of Skills

| Location | Content |
|---|---|
| Within RDK Studio Installation | Curated official skills (~12), listed in `src/skill-center/manifest.json` |
| Repository `skills/` Directory | Full official skill set (45 skills) |
| On-Device OpenClaw Workspace | Skills synced from the repository (auto-sync disabled by default) |
| Remote ClawHub | Community-contributed third-party skills (pulled on demand) |

When the D-Moss Agent starts, it scans local `skills/**/SKILL.md` files to build an index. During conversations, skills are loaded into context when their trigger keywords are matched.

## Why Not Load All Built-in Skills?

RDK Studio does not inject all built-in skills into the context of every conversation. This is a core design principle of the trigger-based matching mechanism—to prevent context bloat and maintain clear decision-making by the Agent. For detailed trigger-matching logic, see [3.11.5 Trigger Matching Mechanism](./5-trigger-matching.md).

If a developer wishes a particular skill to be loaded "regardless of what the user says," they can add broad keywords (e.g., `rdk`, `development`) to the `trigger` field in `SKILL.md`. However, this is generally discouraged—it may cause the skill to activate during irrelevant conversations, disrupting the Agent’s attention allocation.