---
sidebar_label: '3.11.4 Create and Import Skills'
title: 3.11.4 Create and Import Skills
---

# 3.11.4 Create and Import Skills

Skill Workshop supports two methods for creating new skills: creating from a template (with AI-assisted generation) and importing from an external URL (GitHub, NodeHub, or general web pages). Both approaches convert developer requirements into a standardized SKILL.md file.

![Custom skill creation form: description box + Skill ID + SKILL.md content editor, with "Deploy to Device / Reset Template" buttons at the bottom](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/skill-create-form.png)

![URL-to-skill form: paste GitHub / NodeHub / documentation URL, add target description, and use two-stage AI assistance to convert into SKILL.md](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/skill-link-import.png)

## Creation Workflow (Template + AI Assistance)

| Step | Action |
|---|---|
| 1 | Go to *Skill Workshop → Skill Center → Create* and select an empty template (pre-filled with frontmatter fields and comments) |
| 2 | Describe the skill's purpose in the description box, e.g., "Teach AI how to switch to 2.4 GHz when RDK X5 WiFi is unstable" |
| 3 | AI automatically generates a complete SKILL.md draft (including trigger, risk, and step-by-step instructions) |
| 4 | Refine in the editor: add actual commands, correct the trigger, adjust the risk level |
| 5 | Test triggering: input a test scenario (e.g., "WiFi unstable"); Studio simulates matching using trigger keywords |
| 6 | Install locally or deploy to the device |

AI-generated SKILL.md files are usually of good quality but still require developer review:

- Check whether trigger keywords are too broad (causing conflicts with unrelated conversations) or too narrow (hard to match)
- Verify that the risk level is accurate (destructive commands should be at least "medium")
- Confirm that the commands in the body actually work (AI may generate plausible-looking but non-existent commands)

## URL Import Workflow

Convert any external content into a skill:

| Step | Action |
|---|---|
| 1 | Go to *Skill Workshop → Skill Center → Link* |
| 2 | Paste the URL; Studio automatically detects the source type |
| 3 | Provide a goal description: "I want AI to learn X" |
| 4 | Select applicable device models (X3 / X5 / S100 / Generic) |
| 5 | AI fetches content from the URL and converts it into SKILL.md |
| 6 | Refine in the editor |
| 7 | Install locally or deploy to the device |

## Source Recognition

| Source | Recognition Rule | AI Processing Method |
|---|---|---|
| GitHub Repository | URL contains `github.com/...` | Fetches README + repository structure, extracts key commands and workflows |
| NodeHub Case | URL contains `developer.d-robotics.cc/nodehub` | Fetches case documentation and execution instructions |
| General Web Page or Blog | Default | Extracts HTML body text and pulls out technical content |

GitHub and NodeHub sources benefit from dedicated parsing logic, typically yielding more accurate results than generic web pages. The conversion quality for generic web pages (e.g., blog posts) depends heavily on content structure.

## Limitations of URL Import

| Limitation | Description |
|---|---|
| Excessively Long Content | Web pages over 50 KB may be truncated or fail to convert |
| Interactive Elements | Content requiring JavaScript rendering may be lost |
| Anti-Scraping Mechanisms | Some websites block scraping requests |
| Videos or Images | Only textual descriptions are extracted; video or image content cannot be interpreted |

If URL import fails, manually copy the web content locally, organize it into a proper SKILL.md file yourself, and submit it via *Skill Workshop → Create*.

## Tips for Writing Effective Skills

| Tip | Explanation |
|---|---|
| Write the description before the body | Clarify "In what scenario will AI use this?" to craft appropriate steps |
| Avoid overly broad triggers | Don't write `trigger: camera`—it will conflict with all camera-related topics; instead, use specific scenarios like `trigger: USB camera black screen,hobot_usb_cam,code -6` |
| Use step-by-step formatting | Use `1. 2. 3.` instead of long paragraphs; this ensures more stable AI parsing |
| Include complete commands | Don't write "check the process"; write the full command like `ps aux \| grep ros` |
| Add counterexamples | "What not to do" is often more instructive than "what to do" |