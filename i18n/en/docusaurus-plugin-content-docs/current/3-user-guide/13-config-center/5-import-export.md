---
sidebar_label: '3.13.5 Import & export'
title: 3.13.5 Import & export
---

# 3.13.5 Import & export

Import/export helps when you change PCs, share baseline config with the team, or restore after upgrades. Exported bundles can be imported back into RDK Studio.

## What export can include

| Content | Sensitive fields? |
|---|---|
| AI engine model entries | May include API keys (export can **redact**) |
| Feishu / WeChat channel secrets | Includes app secrets |
| Device list & SSH creds | Plaintext passwords if password auth |
| Appearance & UX prefs | No secrets |
| WeChat binding list | Not included (per-machine binding) |

## Export

| Path | *Settings center → top → Export configuration* |
|---|---|
| Scope | All / AI engine only / devices only / … |
| Redact | When checked, keys and passwords become placeholders |
| Output | `rdk-studio-config-<timestamp>.json` |

## Team workflows

| Scenario | Recommendation |
|---|---|
| Encrypted handoff to trusted coworker | Full export over encrypted email or IM |
| Team template without secrets | Export with **redact**; each person adds keys locally |
| Backup in private Git | **Redact** before commit; lock down repo access |

**Never:**

- Post full-secret JSON in public chats or open mail
- Commit secrets to public repos
- Paste secrets in Slack / Feishu groups everyone can read

## Import

| Path | *Settings center → top → Import configuration* |
|---|---|
| Action | Pick JSON → confirm → merge into local config |
| Conflicts | Prompt to overwrite; choose “overwrite all” or confirm one by one |
| Compatibility | Most fields map automatically; on failure, recreate per page hints |

## File format

Exports are structured JSON—you normally do not edit by hand. For bulk tweaks (e.g. changing device IPs), edit carefully and re-import.

If import says “incompatible format”, recreate settings in Studio instead of forcing old files.
