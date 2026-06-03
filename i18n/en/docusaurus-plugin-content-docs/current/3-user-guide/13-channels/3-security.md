---
sidebar_label: '3.14.3 Confirm high-risk actions'
title: 3.14.3 Confirm high-risk actions
unlisted: true
---

# 3.14.3 Confirm high-risk actions

Feishu and WeChat are not in the main Studio window, so targets and blast radius need extra care. High‑risk actions therefore require confirmation in that channel again.

## Second confirmation for high-risk commands

When triggered via an external channel, high‑risk operations require a second confirmation **in the channel** (no Studio popup):

| Trigger | Behavior |
|---|---|
| Deleting many files | Bot replies “About to delete X. Confirm?” |
| Stopping critical processes | Same |
| Disk writes | Same |
| Changing system service config | Same |
| Sending or exporting sensitive files | Same |

Execution proceeds only after you confirm as prompted; anything else or a timeout cancels.

This reduces misuse from external channels—even if someone mis-triggers the bot, destructive steps do not run immediately.

## Confirmation by entry point

| How it was triggered | Approval |
|---|---|
| Studio desktop client | Follow on-page prompts |
| External channel (Feishu / WeChat) | High‑risk commands always need in-channel confirmation |
| On-device agent tasks | Only tasks you already allow on device |

## Recommendations

| Tip | Why |
|---|---|
| Use allowlist or approval mode in production | Do not let unrelated people use the bot freely |
| Never commit app secrets to a repo | Even private repos—leak cost is huge |
| High‑risk skills may be denied in message channels by default | Grant narrowly to specific allowlisted users if needed |
| Periodically audit paired clients | Remove unused or departed colleagues |
| Monitor bot logs | Unusual volume may mean abuse or compromise |

## Turning off a channel

When you no longer use a channel:

| Channel | How to stop |
|---|---|
| Feishu | Stop the channel under *Settings center → Message channels · Feishu* |
| WeChat | Restart or remove bindings under *Settings center → Message channels · WeChat* |

Stopping does not erase saved credentials or user lists; re‑enabling reuses prior config. If you are done for good, clear credentials too to avoid accidental reuse.

## If something looks wrong

If the bot seems abused or misbehaving:

1. **Stop the channel immediately**: turn off the switch in *Settings center*
2. **Revoke credentials**: in Feishu developer console or WeChat, rotate secrets or unbind
3. **Audit logs**: check channel status in settings, Feishu/WeChat console events, and on-device agent diagnostics
4. **Inspect data**: look for unexpected files or config changes on device
5. **Notify the team**: ask people with access to pause using the bot until resolved
