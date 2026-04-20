---
sidebar_label: '3.13 Multi-Channel Integration'
title: 3.13 Multi-Channel Integration
---

# 3.13 Multi-Channel Integration

![Configuration Center · Multi-Channel Integration · WeChat Channel: QR Code Binding List + Scan-to-Connect / Restart Channel Button, displayed alongside the Device Connection Section](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/settings-weixin.png)

Multi-channel integration enables RDK Studio's AI conversational capabilities to be connected to communication tools such as Feishu and WeChat, allowing team members to dispatch board-side tasks directly from group chats or private conversations.

Studio categorizes user-to-AI entry points into distinct Channels. Currently, four types are supported:

| Channel | Source |
|---|---|
| `studio` | AI Dock in the Studio desktop client |
| `feishu` | Feishu Bot |
| `weixin` | Personal WeChat account |
| `autonomy` | On-board OpenClaw autonomous tasks |

External channels (`feishu`, `weixin`) apply stricter approval policies by default—to prevent malicious commands from external entry points from directly compromising the board-side system.

## This section includes

- [3.13.1 Feishu Channel](./1-feishu.md): Configuration of enterprise Feishu Bot and three private chat strategies  
- [3.13.2 WeChat Channel](./2-weixin.md): QR code binding for personal WeChat accounts and associated restrictions  
- [3.13.3 Security Policies and Approvals](./3-security.md): Secondary confirmation mechanisms for high-risk commands and best practices