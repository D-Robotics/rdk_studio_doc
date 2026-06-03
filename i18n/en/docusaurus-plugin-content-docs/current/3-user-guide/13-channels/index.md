---
sidebar_label: '3.14 Message channels'
title: 3.14 Message channels
---

# 3.14 Message channels

Message channels forward messages from Feishu and WeChat to Moss so you can query device status, check task results, or trigger actions you have already configured. Settings are under **Settings center → Message channels · Feishu / Message channels · WeChat**.

## Recommended order

| Step | What to do |
|---|---|
| 1 | In Studio, confirm Moss, devices, and models work as expected |
| 2 | Choose Feishu or WeChat |
| 3 | Fill in fields or scan the QR code to finish binding |
| 4 | Send a simple test message first |
| 5 | After permissions and allowlists are right, let teammates use it |

RDK Studio distinguishes where messages come from. Four kinds are supported today:

| Source | Description |
|---|---|
| Studio | AI Dock in the desktop client |
| Feishu | Feishu bot |
| WeChat | Personal WeChat |
| On-device agent | Device-side messages related to OpenClaw |

Feishu and WeChat are external channels. When an action involves writing files, running commands, restarting services, or sending external messages, the app will ask for confirmation.

Only give external channels to people you trust. If you are unsure of impact, return to Studio and check device status first.

## Next

- [3.14.1 Connect Feishu](./1-feishu.md): Configure an enterprise Feishu bot and DM access control
- [3.14.2 Connect WeChat](./2-weixin.md): Bind a personal WeChat account by QR code and learn usage limits
