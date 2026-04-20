---
sidebar_label: '3.13 多通道接入'
title: 3.13 多通道接入
---

# 3.13 多通道接入

![配置中心 · 多通道接入 · 微信渠道：扫码绑定列表 + 扫码连接 / 重启渠道按钮，并与设备连接区一起展示](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/settings-weixin.png)

多通道接入把 RDK Studio 的 AI 对话能力接入飞书、微信等通讯工具，让团队成员在群聊或私聊中调度板端任务。

Studio 把"用户 → AI"的入口归类为不同 Channel，目前支持四类：

| Channel | 来源 |
|---|---|
| `studio` | Studio 桌面客户端的 AI Dock |
| `feishu` | 飞书 Bot |
| `weixin` | 个人微信 |
| `autonomy` | 板端 OpenClaw 自主任务 |

外部通道（feishu、weixin）默认应用更严格的审批策略——避免恶意指令通过外部入口直接破坏板端系统。

## 本节包含

- [3.13.1 飞书通道](./1-feishu.md)：企业飞书 Bot 的配置与三种私聊策略
- [3.13.2 微信通道](./2-weixin.md)：个人微信账号的扫码绑定与限制
- [3.13.3 安全策略与审批](./3-security.md)：高风险命令的二次确认机制与最佳实践
