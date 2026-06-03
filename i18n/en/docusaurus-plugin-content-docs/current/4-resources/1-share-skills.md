---
sidebar_label: '4.1 Share skills'
title: 4.1 Share skills
---

# 4.1 Share skills

Skills can be shared for **local Moss** or deployed for **device OpenClaw**. Public distribution goes through the skill marketplace / SkillHub or ordinary Git repos.

## Sharing paths

| Path | Best for | How it is used |
|---|---|---|
| Skill marketplace / SkillHub | Community, public sharing | Others search, preview, add, or deploy from Skill Workshop |
| Git / GitHub | Teams, private repos, frequent iteration | Send repo links so colleagues generate or import from them |
| NodeHub cases | Full projects plus matching skills | Publish project code and let Moss draft a skill from the case URL |
| Send files directly | One-offs | Share the skill file; the recipient imports it in Skill Workshop |

## Pre-publish checklist

- Use a clear name—avoid very long phrases.
- Describe what the skill does and does not do.
- Add keywords Moss is likely to search for.
- Set risk level to match real actions—especially writes, commands, daemons.
- When skills touch BPU, camera, GPIO, TROS, or RDK-specific paths, note if they only run on RDK boards.
- Do not embed API keys, internal URLs, personal credentials, or unauthorized content.

## Local Moss vs board OpenClaw

| Target | Fits best |
|---|---|
| Local Moss | Doc retrieval, code analysis, project work, generic Linux commands |
| Device OpenClaw | RDK device operations, board-side chat, channels, or tasks tied to the current device |

If the skill mainly helps Moss parse logs, you usually do not need to deploy it to the board; if OpenClaw must run it on the device, deploy from Skill Workshop to the device.
