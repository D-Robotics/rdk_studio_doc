---
sidebar_label: '4.2 Get skills'
title: 4.2 Get skills
---

# 4.2 Get skills

All acquisition flows live in **Skill Workshop**. From there you can manage Moss skills on this PC, OpenClaw skills on the device, the marketplace, manual creation, and link-based generation.

## How to acquire

| Path | Best for |
|---|---|
| Skill marketplace / SkillHub | Search remote skills; add locally or deploy to the current device |
| Built‑in deployable skills | Curated skills bundled with RDK Studio |
| Local saved skills | User skills from chats, manual creation, or marketplace installs |
| Generate from links | Turn GitHub, NodeHub, web, or doc URLs into a skill draft |
| Paste manually | Paste an existing `SKILL.md`, review on the creation page, then save |

## Add locally vs deploy to device

| Action | Outcome |
|---|---|
| Add to this PC | Available to Moss; no SSH needed; does not require a connected RDK |
| Deploy to device | Writes into the current RDK OpenClaw workspace for the board agent |

Generic Linux hosts usually cannot deploy OpenClaw skills. If you see “device not deployable,” add to local Moss first.

## Ask Moss to search

Ask on the workbench:

```text
Are there skills that help troubleshoot a black screen on a USB webcam? List candidates only—don't install anything yet.
```

After you pick candidates, have Moss open Skill Workshop or generate from links. Always review risk fields before deploy or save.
