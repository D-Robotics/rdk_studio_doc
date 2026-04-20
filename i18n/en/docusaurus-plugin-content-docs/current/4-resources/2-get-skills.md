---
sidebar_label: '4.2 Skill Acquisition'
title: 4.2 Skill Acquisition
---

# 4.2 Skill Acquisition

Reverse operation of [4.1 Skill Sharing](./1-share-skills.md): Install someone else's `SKILL.md` into your own Studio. This section describes four acquisition pathways and related decision points.

## Four Acquisition Pathways

All entry points are located in the *Skill Workshop*.

### Pathway 1: Built-in Skill Center (Fastest)

*Skill Workshop → Skill Center → catalog* → Browse the official skill catalog published by D-Robotics (45+ skills). Organized by category:

- Core Operations (`core/`): Device diagnostics, hardware knowledge, OpenClaw collaboration  
- Board-specific (`boards/`): RDK X5 applications, X5 AI detection  
- Documentation & Search (`docs/`): RDK official docs, TROS documentation  
- General Tools (`tools/`): Browser automation, search engines  
- Optional Extensions (`optional/`): Token usage reports, etc.

Click *Install Locally* or *Deploy to Board* to proceed.

### Pathway 2: ClawHub Community Search

*Skill Workshop → Skill Center → ClawHub Community* → Enter keywords to search:

| Action | How To |
|---|---|
| Keyword Search | Top search bar |
| Preview Skill | Click skill name → View full `SKILL.md` and frontmatter |
| One-click Install | *Install Locally* or *Deploy to Board* |
| Batch Install | Select multiple skills → *Batch Install* |

ClawHub uses a domestic mirror by default. If you can't find your target skill, verify network connectivity to the ClawHub domain.

### Pathway 3: Import from URL

Convert any external content into a skill:

| URL Type | Auto-recognition Rule |
|---|---|
| GitHub Repository | URL contains `github.com/...` |
| NodeHub Case | URL contains `developer.d-robotics.cc/nodehub` |
| General Webpage / Blog | Default |

Steps:

1. *Skill Workshop → Skill Center → Link*
2. Paste the URL; Studio auto-detects the source
3. Fill in the target description: "I want the AI to learn X"
4. Select applicable device model (X3 / X5 / S100 / Generic)
5. AI automatically fetches and converts it into `SKILL.md`
6. Preview → Adjust → Install

### Pathway 4: Manual File Placement

Lowest barrier—someone sends you a `SKILL.md` via chat or email:

1. Save it to your local workspace at `skills/<name>/SKILL.md`
2. Studio automatically scans and detects it—no restart needed
3. It appears in the *Installed* list

## Choosing Installation Location

| Option | Installed To | Available To |
|---|---|---|
| Install Locally | Within Studio process | PC-side D-Moss Agent |
| Deploy to Board | Synced via OpenClaw to board-side OpenClaw workspace | Board-side Agent |

If you want the board-resident Agent to use this skill (e.g., for long-term monitoring or offline autonomy), **you must choose "Deploy to Board"**. Skills installed only locally are invisible to the board-side Agent.

## How Many Skills Should You Install?

| Quantity | Impact |
|---|---|
| < 10 | No noticeable effect |
| 10–30 | Slight increase in AI skill selection time (milliseconds) |
| > 50 | Context bloat; AI decision-making may be disrupted |

**Do not "install a bunch just in case."** Install only what you need, and uninstall unused skills from the *Installed* list.

## Verifying Installed Skills

In AI Dock, type `/skills` → Lists the skill IDs and brief descriptions currently injected into the session.

Injection is dynamically loaded on-demand—not all installed skills are simultaneously present in context. `/skills` shows only those **active in the current session**.

## Let AI Help You Find Skills

Not sure which skill solves your problem? Just ask AI Dock: "Is there a skill that helps me debug a USB camera?" The Agent will search both the built-in catalog and ClawHub, present a few candidates with brief capability summaries, and install the one you select.

## Common Acquisition Issues

| Symptom | Solution |
|---|---|
| No results in ClawHub search | Use broader keywords; confirm network access to ClawHub domain |
| URL import fails | URL unreachable, content too long, or format unrecognized; manually convert to `SKILL.md` and use Pathway 4 |
| AI doesn’t use installed skill | Check if the `SKILL.md` trigger matches your actual scenario; modify trigger and restart Studio if needed |
| Too many skills disrupt AI decisions | Uninstall unused skills; see optimization tips in [3.11.5 Trigger Matching Mechanism](../3-user-guide/11-skill/5-trigger-matching.md) |