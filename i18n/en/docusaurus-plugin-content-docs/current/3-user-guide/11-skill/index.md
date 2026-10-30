---
sidebar_label: '3.11 Plugin Center and skills'
title: 3.11 Plugin Center and skills
description: 'Manage plugins, MCP, and skills in the Plugin Center'
---

# 3.11 Plugin Center and skills

Open **AI capabilities → Plugin Center** to manage plugins, MCP, and skills. Skill management previously described as “Skill Workshop” is now reached here; some internal views still use “Skill center.”

## Extension types

| Tab | Purpose |
|---|---|
| Plugins | Inspect and manage packages; install from public sources or import a directory |
| MCP | Manage tool-service connections; add from MCP Hub or manually |
| Skills | Browse, enable, create, and manage reusable instructions, with board deployment where supported |

Select **Add** to see installation, import, skill-creation, and MCP options supported in your environment. Actions may require sign-in, enabled services, or deployment permissions.

## Use a skill

Find and preview a skill in the Skills tab or skill store. Check its devices, steps, and impact before adding it to an allowed location. Use composer skill search or type `/skill <skill-name> [task]` to select one.

Skills provide instructions. Actual file, command, and device actions still depend on runtime, tools, and authorization. Installing a skill does not grant all permissions or make Moss and DSH capabilities identical.

## Local and board skills

Local skills and board OpenClaw skills are separate targets. To use a skill in OpenClaw, connect the intended device and deploy/sync through the skill view. A computer-side edit does not prove that the board version was updated.

Public Web Cloud does not permit arbitrary writes to server-local skill directories; use the store and review flows supported by the deployment.

## MCP

MCP supplies external tools to the Agent. Check connection/authentication state, enablement, and tool permissions separately. Installing a plugin or adding a server does not mean authentication succeeded. Configuration is also available at **Settings → MCP services**, subject to deployment permissions.

## Continue reading

- [Find skills](./3-clawhub-community.md)
- [Create skills](./4-create-and-import.md)
- [Sync to a board](./6-sync-to-board.md)
