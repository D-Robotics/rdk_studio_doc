---
sidebar_label: '3.10.4 Work with Moss'
title: 3.10.4 Work with Moss
unlisted: true
---

# 3.10.4 Work with Moss

Desktop Moss works together with board OpenClaw: Moss interprets what you want; OpenClaw handles work that must stay close to the current device.

## How they coordinate

1. You describe the task in AI Dock.
2. Moss decides whether the On-device Agent page is needed.
3. When required, Moss checks OpenClaw status and on-board model availability.
4. After you confirm, the flow continues and results show in Studio.

Studio handles connectivity and safety checks—you don’t expose board services manually.

## What Moss helps with

When you mention OpenClaw in AI Dock, Moss follows live page state to:

- Check install state, connectivity, and model readiness
- Guide deploy, uninstall, restart, or diagnose & repair
- Review on-board models, Feishu, or WeChat channel setup
- Decide if the task should continue on-board and prompt you before risky steps

You rarely need memorized menu names—natural language is enough; destructive changes still require confirmation.

## When status is unhealthy

Workbench and On-device Agent show whether OpenClaw is ready. Errors may call for redeploy, model fixes, or waiting for the device to return online.

Paste the banner into Moss when unsure. Deploy, uninstall, and restart changes always confirm first.
