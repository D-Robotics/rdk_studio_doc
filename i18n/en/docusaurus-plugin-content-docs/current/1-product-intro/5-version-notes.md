---
sidebar_label: '1.5 Version notes'
title: 1.5 Version notes
description: 'The 1.5.0 feature baseline, upgrade paths, and manual checks'
---

# 1.5 Version notes

This manual is refreshed against the RDK Studio **1.5.0 feature baseline**. Check official releases and **Settings → App & updates** for actual package availability and upgrade eligibility.

## Manual changes

| Change | Read more |
|---|---|
| New tasks can use Moss or DSH; existing tasks retain their runtime | [Runtime and models](../3-user-guide/2-ai-chat/6-dual-lane.md) |
| Execute, Plan, and Spec are distinct workflows | [AI Dock](../3-user-guide/2-ai-chat/index.md) |
| Projects can bind local and board folders with an explicit work location | [Workbench](../3-user-guide/1-workbench/index.md) |
| Local history recovery, account switching, and DSH deletion are distinguished | [Conversation history](../3-user-guide/2-ai-chat/3-multi-session.md) |
| Answers focus on results; message menus expose existing execution records | [Device operations and results](../3-user-guide/2-ai-chat/2-device-aware-tools.md) |
| Plugin Center, MCP, and local main-model configuration | [Extensions](../3-user-guide/11-skill/index.md), [Model settings](../3-user-guide/13-config-center/3-ai-engine.md) |
| Block programming, simulation, and project/case import and export | [Block studio](../3-user-guide/17-block-studio/index.md) |

## Check and upgrade

On desktop, open **Settings → App & updates** to view the version and check for updates. Web deployments do not upgrade through the desktop updater.

Save code and files before upgrading. The new version attempts to migrate and validate older local history. If recovery fails or storage is full, keep the original data and retry after restoring storage and local services. Do not reset data to fix history recovery.

Back up important projects, conversations, models, skills, and device settings independently. [Model configuration export](../3-user-guide/13-config-center/5-import-export.md) does not include project code or conversation history.

For help, use the forum or feedback entry in the client's support resources, including your version and redacted error details.
