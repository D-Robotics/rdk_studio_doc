---
sidebar_label: '3.11.4 Create skills'
title: 3.11.4 Create skills
---

# 3.11.4 Create skills

Use **Plugin Center → Add → New skill**. The Skills view may also provide creation or link-generation entries.

## Steps

1. Describe the use case, target device, and intended result.
2. Fill in the skill name and `SKILL.md`, or have the Agent draft it first.
3. Review steps, commands, dependencies, risks, and verification.
4. Save or install through an action permitted by the deployment.
5. Verify a small task before considering board deployment.

Instructions should explain when to use the skill, required inputs, completion criteria, and failure handling. Review AI drafts and external material, especially deletion, dependency installation, device writes, and service actions.

## Draft from a link

Where the skill view offers link generation, provide a GitHub, case, or documentation link and explain the operation to capture. Access restrictions, dynamic content, and missing dependencies can affect the draft; check it against the original.

Generating a draft does not mean it was installed, run, or verified. Saving locally and deploying to OpenClaw are separate actions; confirm the target.

Public Web Cloud restricts creation and installation and does not allow arbitrary server-directory writes. Use the store or review flow supported by the page.
