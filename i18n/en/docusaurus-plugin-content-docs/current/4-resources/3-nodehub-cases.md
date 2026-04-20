---
sidebar_label: '4.3 NodeHub Case Study'
title: 4.3 NodeHub Case Study
---

# 4.3 NodeHub Case Study

NodeHub is D-Robotics' official **case sharing platform**. Unlike ClawHub, which shares single-file SKILL.md documents, NodeHub shares **complete project code** (including README, dependency declarations, and optionally a companion SKILL.md).

## Division of Responsibilities Among Platforms

| Platform | Content | Use Case | Access |
|---|---|---|---|
| NodeHub | Complete project examples (with board type and category) | End-to-end examples ready to run out-of-the-box | https://developer.d-robotics.cc/en/nodehub |
| ClawHub | Single-file SKILL.md skills | Adding "operational strategies" for AI Agents | Within Studio: *Skill Workshop → ClawHub Community* |
| GitHub | Any code | General-purpose code hosting, without dedicated RDK categorization | github.com |

NodeHub is a specialized aggregation platform tailored for the RDK ecosystem, organized by board type and application category, enabling RDK developers to easily find reference implementations that "just work."

## Publishing a Case Study to NodeHub

### Step 1: Prepare Your Project

Ensure your project includes:

| Required | Recommended | Optional |
|---|---|---|
| Source code (public repository or ZIP archive) | README documentation (how to run it, dependencies) | SKILL.md (enables direct invocation by AI) |
| Supported board type description | Screenshots / GIFs demonstrating functionality | Video tutorial link |

### Step 2: Log in to NodeHub

Visit https://developer.d-robotics.cc/en/nodehub and log in with your D-Robotics developer account.

### Step 3: Create a Case Study

Click *Publish Case*, and fill in:

- Case title  
- One-sentence description  
- Target board(s) (X3 / X5 / S100 / Generic)  
- Category tags (Vision, ROS, Control, AI Inference, etc.)

### Step 4: Upload Content

| Method | Suitable For |
|---|---|
| Link to GitHub repository | Code already hosted on GitHub (recommended) |
| Upload ZIP package | Scenarios where Git isn't preferred |

### Step 5: Review

After submission, your case will be reviewed by the NodeHub team. Once approved, it becomes publicly visible to all RDK developers.

## Obtaining Case Studies from NodeHub

The NodeHub website offers the following browsing options:

| Browsing Method | Access Point |
|---|---|
| Browse featured recommendations | NodeHub homepage |
| Filter by board / category | Top navigation bar |
| Keyword search | Search box at the top |
| View details | Click case title → detail page (includes run instructions + user reviews) |

Ways to obtain the code:

| Method | Action |
|---|---|
| Direct git clone | Use the GitHub link provided on the case page |
| Convert to skill in Studio | *Skill Workshop → Import from URL* → Paste NodeHub case URL → AI automatically generates SKILL.md |
| Download ZIP directly | Click the *Download* button on the case page |

Currently, Studio **does not support** browsing NodeHub cases within Studio and one-click deployment to the board. Developers must manually download the code from the NodeHub website and then transfer it to the board using Studio’s *File Manager* or *Remote Terminal*.

## Collaboration Between Cases and Skills

Many NodeHub case studies include a companion SKILL.md file. This “code + skill” combination allows a single case to serve two types of users:

- **Developers**: `git clone` the repository and refer to the implementation  
- **AI Agents**: Import the SKILL.md to learn “how to run this case”

Typical workflow:

1. Find a ROS camera detection case on NodeHub  
2. `git clone` it to the board and manually run it once following the README to verify functionality  
3. Import the companion SKILL.md into Studio via *Skill Workshop → Import from URL*  
4. Later, say in AI Dock: “Run that camera detection case,” and the Agent will execute it following the steps in SKILL.md

## Characteristics of High-Quality Case Studies

| Feature | Description |
|---|---|
| Comprehensive README | Must include: environment requirements, installation steps, run commands, expected output |
| Multi-board compatibility | Uses conditional logic to handle board differences (e.g., `if RDK_BOARD == 'X5'`) |
| Robust error handling | Doesn’t assume a perfect environment; provides helpful messages for common errors |
| Visuals (screenshots or video) | Instantly communicates “what this does” |
| Companion SKILL.md included | Enables direct use by AI Agents |
| Regular updates | Responds to RDK system upgrades and user feedback |

Before publishing, use these criteria to self-assess your project’s completeness.