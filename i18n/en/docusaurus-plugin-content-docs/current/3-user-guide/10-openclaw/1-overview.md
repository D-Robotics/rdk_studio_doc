---
sidebar_label: '3.10.1 Decide whether you need OpenClaw'
title: 3.10.1 Decide whether you need OpenClaw
unlisted: true
---

# 3.10.1 Decide whether you need OpenClaw

OpenClaw does not need to be installed from day one. This page helps you decide when to install it and when Moss plus SSH is enough.

## Decide first

| What you want to do | Recommendation |
|---|---|
| General Q&A, reading logs, organizing steps | Start with Moss |
| Occasionally run commands over SSH | Use Terminal or Moss |
| Need on-board skills, on-board models, or device-side message channels | Then deploy OpenClaw |

## Common scenarios

| Scenario | Need OpenClaw? |
|---|---|
| Occasionally run commands over SSH | No—Terminal is enough |
| Let AI run commands (PC online) | No—Moss can run on the connected device and show output in the UI |
| Need on-board skills or on-board models | Usually yes |
| Need message channels attached to the device | Deploy per page guidance |
| Want work centered on this specific device | Consider it |

In short: **use Moss plus Terminal for ad hoc debugging; open the On-device Agent page when you need an on-board assistant.**

## Examples

- “Check board temperature and key services; tell me first if anything looks wrong.”
- “My team wants to query on-board status from a group chat.”
- “A critical service misbehaved on the board; I want root cause before deciding to restart.”

These can change device behavior—prefer having Moss propose investigation steps first, and confirm in the UI before execution.

## When OpenClaw is a poor fit

| Scenario | Reason |
|---|---|
| Board resources are obviously tight | The on-board service uses extra resources |
| Board image lacks the runtime | Components must install before OpenClaw |
| One-off task | Moss plus Terminal is simpler |
| Board cannot reach the internet | Install may fail to download deps |

If you only need short-lived debugging with the PC staying online, you can skip OpenClaw and use Moss plus Terminal.
