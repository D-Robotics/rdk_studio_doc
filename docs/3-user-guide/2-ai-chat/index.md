---
sidebar_label: '3.2 AI 对话'
title: 3.2 AI 对话
---

# 3.2 AI 对话

![AI Dock 与快捷提示：顶栏显示已连接 RDK X5 设备（root@192.168.128.10:22），工作台中间是设备概况与指标条，AI Dock 在底部展开示例问题，快速 / 深度思考车道切换在左下](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/ai-dock-focused.png)

AI 对话是 RDK Studio 区别于通用远程开发工具的核心模块。屏幕底部常驻的 AI Dock 不仅能进行自然语言对话，还能调用 50+ 个工具完成实际操作（SSH 命令、文件传输、文档检索、硬件诊断），并具备硬件感知能力——AI 知道当前激活设备的型号、镜像版本与状态。

![AI Dock 真实对话示例：用户问"RDK Studio 有哪些核心功能？请简要介绍"，Moss 分 5 点（设备全生命周期管理 / 一站式开发环境 / AI 开发工具链 / 多模态调试能力 / 协同扩展能力）回答，底部显示"25 秒 · 8.9k tokens"](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/ai-dock-rdk-intro.png)

## 本节包含

- [3.2.1 概述与入口](./1-overview-and-entry.md)：AI Dock 的位置、调起方式、与其他 tab 的关系
- [3.2.2 设备感知与工具调用](./2-device-aware-tools.md)：Agent 如何理解当前设备并调用工具完成任务
- [3.2.3 多会话管理](./3-multi-session.md)：每设备一个独立会话的设计与会话持久化
- [3.2.4 附件与多模态输入](./4-attachments.md)：上传文件、图片、截图给 Agent 分析
- [3.2.5 斜杠命令](./5-slash-commands.md)：触发特殊行为的快捷命令
- [3.2.6 双车道路由](./6-dual-lane.md)：Thinking 与 Quick 两套模型如何自动分发
