---
sidebar_label: '3.11.3 Find skills'
title: 3.11.3 Find skills
---

# 3.11.3 Find skills

The skill marketplace / SkillHub is your online doorway to reusable automation. Skill Workshop exposes search, preview, add-to-local Moss, deploy to OpenClaw on the device, plus batch actions.

![Skill marketplace: search, taxonomy, preview, add locally, deploy to device](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/skill-marketplace.png)

## Two install destinations

| Action | Writes to | When to choose |
|---|---|---|
| Add locally | Moss skill folder on this PC | No hardware connected, non-RDK host, desktop-only workflows |
| Deploy to device | OpenClaw workspace on the chosen RDK | Board Agent must invoke the skill |

Lists show **Added** and **Deployed** states. Non-RDK hosts warn that OpenClaw deploy is unavailable, yet local skills still operate.

## Search and preview

Filter by keywords, taxonomy, installation state. The preview spells out purpose, targeting, risks—before deploy validate:

- Will it execute device commands, write files, or start background workloads?
- Does it genuinely require RDK hardware?
- Do risk tags match how you intend to use it?
- Do keywords cover phrases you naturally type?

## Batch actions

Bulk add locally or deploy to multiple skills. Failures bubble per row with remediation hints.

## Generate from links

For GitHub, NodeHub, or normal pages, choose **generate from URL**. Moss pauses after drafting; approve content, then add locally or deploy.

Never bypass draft review—silent writes break Skill Workshop safeguards.
