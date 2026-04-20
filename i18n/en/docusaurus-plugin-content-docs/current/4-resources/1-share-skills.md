---
sidebar_label: '4.1 Skill Sharing'
title: 4.1 Skill Sharing
---

# 4.1 Skill Sharing

Enabling others to use your well-crafted SKILL.md is the core of the skill ecosystem cycle. This section describes three sharing pathways. The field definitions and operational mechanisms of SKILL.md have already been thoroughly explained in [3.11.1 SKILL.md File Structure](../3-user-guide/11-skill/1-skill-md-structure.md), so they won't be repeated here.

## Three Sharing Pathways

| Pathway | Applicable Scenario | Scope of Impact |
|---|---|---|
| Submit to ClawHub | Public community sharing | Discoverable by anyone via Studio → *Skill Workshop → ClawHub Community* search |
| Git / GitHub Hosting | Private team use or frequent iteration | Only accessible to those who have the repository or file URL |
| Direct File Sharing | One-time informal sharing | Recipient manually places it into their own `skills/` directory |

Recommendation: Use Git for private team usage, ClawHub for skills with broad community value, and direct file sharing for temporary needs.

## Pathway 1: Submit to ClawHub

Suitable for verified skills that offer general value to the community.

1. In *Skill Workshop → Installed*, select your skill → right-click *Share to ClawHub*
2. Fill in public release information: maintainer, license, tags, and version notes
3. Submit for review
4. Once approved, anyone can discover it via *ClawHub Community* search

Before submitting, ensure:

- The `description` in SKILL.md is accurate (others rely on it to decide whether to install)
- `trigger` keywords cover typical scenarios
- Do not underestimate `risk`—better to be conservative
- Contains no sensitive information (API keys, internal links, personal credentials)

## Pathway 2: Git / GitHub Hosting

Ideal for private team skills or those requiring frequent iteration.

1. Place `skills/<name>/SKILL.md` into any Git repository (private or public)
2. Share the repository URL, a Release link, or the raw file URL with intended users
3. Recipients input this URL in Studio → *Skill Workshop → Import from URL* → one-click install

This is "link-based sharing":

- Doesn't depend on messaging apps—the URL itself is the sharing unit
- The same URL always points to the latest version (Git main branch)
- Using Release tags allows pointing to a fixed version, preventing changes in the main branch from affecting existing users

## Pathway 3: Direct File Sharing

Appropriate for one-time, informal sharing.

1. Send the actual `skills/<name>/SKILL.md` file to the recipient (via IM, email, cloud storage, etc.)
2. The recipient saves the file to their Studio workspace at `skills/<name>/SKILL.md`
3. Studio automatically detects it—**no restart required**

## Tips for Writing Effective Skills

| Tip | Explanation |
|---|---|
| Write the description before the main content | Clarify "in what scenario will the AI use this?" to guide step writing |
| Avoid overly broad triggers | Don’t write `trigger: camera`—it conflicts with all camera-related topics; instead, use specific scenarios like `trigger: USB camera black screen,hobot_usb_cam,code -6` |
| Use step-by-step formatting in the main content | Use `1. 2. 3.` instead of long paragraphs—AI parsing is more reliable |
| Include complete commands | Don’t write "check the process"; write full commands like `ps aux \| grep ros` |
| Add counterexamples | "What not to do" is often more instructive than "what to do" |
| Maintain the version field | Helps users determine if an update is needed |
| Include effectiveness notes in README | Helps potential users quickly assess suitability for their use case |