---
sidebar_label: '3.15.1 Task progress'
title: 3.15.1 Task progress
unlisted: true
---

# 3.15.1 Task progress

The task queue sits on the right side of RDK Studio’s header and lists in-flight long tasks so you need not hunt through pages—flashing, deploys, bulk transfers, and more.

## Typical chip types

The queue favors work that lasts a while and still matters after you navigate away:

| Type | When it appears |
|---|---|
| Flash | After you start flashing from *Flash* |
| OpenClaw install / uninstall | Long jobs from *On-device agent* |
| Bulk file transfer | Multiple uploads/downloads in *Files* |
| Skill batch install or sync | Batch actions in *Skill workshop* |
| Device diagnostics | Moss- or UI-triggered diagnostics |

## Tasks that skip the header

Short actions usually do not spawn chips—for example ordinary chat, a single SSH command, or periodic online checks. Results show in AI Dock, the terminal, or the originating page.

If you do not see a chip, the job may still be running—return to where you started it.

## Actions

| Action | How |
|---|---|
| Details | Click the chip → jump to the owning page (e.g. Flash) |
| Cancel | Only some chips expose cancel; others need the feature page |
| Pause / retry | Handled per feature—not centralized in the header |

## Before closing the window

Let important jobs finish on the page when possible. After closing the window chips may disappear; whether work continues depends on the feature.

## History

Chips reflect **current** work only. For history, visit each area—flash history on *Flash*, Moss transcripts in AI Dock sessions, etc.
