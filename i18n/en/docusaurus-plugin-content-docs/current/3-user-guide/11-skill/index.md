---
sidebar_label: '3.11 Skill'
title: 3.11 Skill
---

# 3.11 Skill

![Skill Workshop interface: displays a list of locally installed skills, their sources (built-in / community), trigger keywords, risk levels, and other metadata](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/04-Skill_Workshop.png)

A Skill is an "operational strategy" for an AI Agent. Essentially, it is a SKILL.md file containing YAML frontmatter. During a conversation, when the Agent detects a user message matching a skill's trigger keyword, it loads the corresponding skill into context—this is Studio’s standard method for enabling Agents to acquire specialized capabilities.

The skill mechanism is not RAG (Retrieval-Augmented Generation). The Agent does not load all SKILL.md files into context; instead, it loads only the specific skill whose trigger matches the user's message. This "on-demand loading" design prevents context bloat, allowing the Agent to maintain clear decision-making even when dozens of skills are installed.

This section serves as a complete reference for SKILL.md fields and how the skill mechanism works. Definitions of these fields will not be repeated in Sections 4.1 and 4.2, which cover skill sharing and acquisition.

## This Section Includes

- [3.11.1 SKILL.md File Structure](./1-skill-md-structure.md): YAML frontmatter fields and body template  
- [3.11.2 Built-in Skills and Categories](./2-builtin-skills.md): Official skills included with Studio and their categorical organization  
- [3.11.3 ClawHub Community Skills](./3-clawhub-community.md): Searching, installing, and configuring mirrors for third-party skills  
- [3.11.4 Creating and Importing Skills](./4-create-and-import.md): Creating from templates, AI-assisted generation, and URL import workflows  
- [3.11.5 Trigger Matching Mechanism](./5-trigger-matching.md): How D-Moss loads skills based on triggers  
- [3.11.6 Syncing to the Board](./6-sync-to-board.md): Enabling OpenClaw on the board to use the same set of skills