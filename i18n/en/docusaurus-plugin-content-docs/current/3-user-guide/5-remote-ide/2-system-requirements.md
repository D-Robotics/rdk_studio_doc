---
sidebar_label: '3.5.2 Prepare the editing environment'
title: 3.5.2 Prepare the editing environment
unlisted: true
---

# 3.5.2 Prepare the editing environment

The editor needs an on‑device environment — expect minimum RAM, disk, and bandwidth. Check these before heavy use.

## Pre-flight checklist

| Item | Guidance |
|---|---|
| Device | SSH or Type‑C connected, shows online |
| Storage | Headroom for tooling + project |
| Network | First launch must reach install payloads |
| OS | Prefer official RDK images or team‑validated ones |

## Poor-fitting environments

| Environment | Reason |
|---|---|
| Stripped images | May miss auto‑install deps |
| Heavily customized team images | Might need manual env fixes first |
| Non‑RDK hosts | May work; capability per UI |

Non‑standard boards: fall back to official RDK image or have a platform owner prep the host.

## Extensions

Most mainstream extensions work; a few need uncommon system bits and may fail on‑device. If install fails, substitute an alternative or stick to core editing, terminal, and debug.
