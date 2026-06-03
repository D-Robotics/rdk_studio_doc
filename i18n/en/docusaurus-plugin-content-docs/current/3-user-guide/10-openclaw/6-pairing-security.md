---
sidebar_label: '3.10.6 Pairing and confirmations'
title: 3.10.6 Pairing and confirmations
unlisted: true
---

# 3.10.6 Pairing and confirmations

OpenClaw connects to RDK Studio securely. Daily use rarely needs manual network services, and exposing board services to the public internet is discouraged.

## First launch

OpenClaw completes required authorization automatically; if manual steps are needed, the page spells them out.

## Security touchpoints

Studio keeps connections provisioned. You mostly act in these places for security-sensitive work:

| Entry | Purpose |
|---|---|
| Deploy & connection | Status, diagnostics, restart, or uninstall on-board agent |
| Models | Manage board-reachable models; avoid pasting PC-only endpoints |
| Feishu integration | External channel credentials, start/stop, user pairing |

## Recommendations

- Prefer RDK Studio or a controlled network for OpenClaw access.
- Do not publish OpenClaw services directly to the open internet.
- External channels must bind users and follow on-page confirmations.
- Confirm device and blast radius before writes, commands, or service restarts.

## High-risk actions

OpenClaw can drive device operations with Moss. Risky flows require explicit confirmation—read the device, operation, and impact before continuing.
