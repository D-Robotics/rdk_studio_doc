---
sidebar_label: '3.2.1 概述与入口'
title: 3.2.1 概述与入口
---

# 3.2.1 概述与入口

![AI Dock 输入提示与快速入口：屏幕底部输入框显示"向 Moss 描述问题或目标（排障、方案、设备操作）— 或拖拽文件..."的提示；三个常用示例问题浮现在输入框上方；左下角下拉可切换快速 / 深度思考车道](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/ai-dock-focused.png)

AI Dock 是 RDK Studio 的常驻对话入口，位于客户端窗口底部。无论用户当前停留在哪个 tab（工作台、远程终端、文件管理、IDE 等），都可以通过同一个 AI Dock 与 Agent 交互——这是 Studio 把 AI 作为"贯穿全局的交互层"而不是"侧边栏聊天框"的体现。

![AI Dock 真实对话流：用户问"你好，请介绍你自己"，Moss 分段回答自我介绍（小地瓜 / 协助项目 / 擅长方向），对话面板流式展示回复，底部显示"12 秒 · 9.4k tokens"；顶部状态栏显示"Moss 就绪 OpenClaw 已连"，当前设备 root@192.168.128.10:22](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/ai-dock-valid-conversation.png)

## 调起 AI Dock

| 方式 | 操作 |
|---|---|
| /| 光标定位到对话框 |
| 鼠标 | 点击屏幕底部的输入框 |

调起后输入框获得焦点，可以立即开始输入。

## AI Dock 顶部状态栏

AI Dock 顶部状态栏显示当前对话的上下文信息：

- **当前模型**：显示这次对话使用的模型（Thinking 或 Quick 车道）
- **会话编号**：当前会话的 ID，点击可切换或新建会话
- **Token 用量胶囊**：本次会话累计 Token 占模型上下文上限的比例，接近上限时变红预警
- **设置入口**：跳转到 *配置中心 → AI 引擎*

## 与其他 tab 的关系

AI Dock 与各功能 tab 共享"当前激活设备"概念：

- 在 *远程终端* tab 中，AI 调用的命令会同步显示在终端内
- 在 *文件管理* tab 中，AI 的文件操作与开发者手动操作共享同一文件系统
- 在 *远程桌面* tab 中，可以一边看板端图形界面，一边让 AI 分析画面或执行命令

切换设备时，AI Dock 自动切换到对应设备的会话，每台设备有独立的对话历史。
