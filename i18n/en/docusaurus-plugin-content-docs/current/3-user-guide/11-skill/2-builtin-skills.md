---
sidebar_label: '3.11.2 View built-in skills'
title: 3.11.2 View built-in skills
unlisted: true
---

# 3.11.2 View built-in skills

RDK Studio ships curated D-Robotics official skills spanning common development tasks. Nothing to install separately—launch Studio and they appear.

## Five families

Skills are grouped as follows:

| Family | Purpose | Typical skills |
|---|---|---|
| Core operations | Device ops, hardware context, OpenClaw basics | `rdk-openclaw`, `rdk-device-ops`, `rdk-hardware`, `rdk-board-knowledge` |
| Board-specific | Features targeting certain boards | `rdk-x5-app`, `rdk-x5-ai-detect`, `rdk-x5-tros-runtime` |
| Documentation & search | Official docs plus community lookups | `rdk-developer-docs`, `rdk-doc-optimized`, `rdk-ros`, `rdk-forum-search` |
| General utilities | Cross-cutting helpers | `multi-search-engine`, `agent-browser`, `duckduckgo-search` |
| Optional expansions | Advanced opt-in tooling | `rdk-token-usage`, `nano-banana-pro`, `rdk-skill-authoring-guide` |

## Where to browse

Inside **Skill Workshop**, explore device OpenClaw skills, local Moss skills, SkillHub entries, names, summaries, and risk notes.

Shortcuts:

| Entry | Path |
|---|---|
| Bundled catalogs | *Skill Workshop → Skill center / Node center* |
| Active session skills | Type `/skills` in AI Dock |
| SkillHub | Search and preview more skills |

## Where files live

| Location | Holds |
|---|---|
| Studio bundle | Ship-with official skills |
| Local Moss workspace | Skills you create, capture from chats, or add from SkillHub |
| Board OpenClaw workspace | Skills synced onto the current device |
| SkillHub | Discoverable remote skills |

Moss auto-selects matching skills based on wording; `/skills` shows what loaded for this session.

## Why not everything loads each turn

Studio injects relevant skills per question—not the entire catalogue—reducing noise and improving grounding.

See [3.11.5 Tune trigger keywords](./5-trigger-matching.md).

To elevate a custom skill, add realistic trigger phrases—not overly broad keywords like lone `rdk` or generic “development”, which inflate false positives.
