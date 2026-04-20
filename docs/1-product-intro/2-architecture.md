---
sidebar_label: '1.2 核心架构'
title: 1.2 核心架构
---

# 1.2 核心架构

RDK Studio 由两端、三个进程组成。理解这套架构是理解 RDK Studio 区别于普通远程开发工具的关键——你说一句话能让 Agent 跨 PC 和板端协同完成任务，背后正是这套双 Agent 编排机制。

## 三个进程的分工

| 进程 | 运行位置 | 职责 |
|---|---|---|
| 桌面客户端 | 你的 PC（Windows / macOS / Ubuntu） | 基于 Electron 的 GUI 工作台，提供所有功能 tab、AI Dock、设备管理界面 |
| D-Moss Agent | 内置在桌面客户端进程内 | PC 端 AI 编排引擎。理解用户意图、调度内置工具、规划多步任务、跨设备协调 |
| OpenClaw Agent | RDK 板端，由 systemd 管理为长期服务 | 板端 AI 运行时。可独立处理板端任务，也可接收 D-Moss 委派的子任务 |

D-Moss 与 OpenClaw 都是完整的 AI Agent 运行时，差别在于部署位置与擅长的任务类型。

![Studio 中的 OpenClaw 主面板：顶部显示网关、网络、模型的实时状态；右侧是配置进度与快捷操作（重启网关、查看日志、升级、诊断并修复）](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/03-OpenClaw.png)

## 双 Agent 协同机制

D-Moss 与 OpenClaw 通过 SSH 隧道通信。开发者发起的任务首先到达 D-Moss，D-Moss 根据任务特征判断在哪一端执行更合适：

- **D-Moss 直接执行**：纯 PC 操作（如本地文件处理）、需要强模型推理的任务、跨设备规划
- **委派给 OpenClaw**：需要长时间运行、断网仍要工作、紧贴硬件传感器的任务

委派完成后，OpenClaw 在板端执行任务并将结果回传 PC。整个过程开发者不需要关心两端如何协同——AI Agent 在内部自动完成调度。

举一个例子：你说"在板上每 5 分钟检查 BPU 温度，超过 70°C 自动降频"。D-Moss 评估发现这是长期监控任务、需要在板端常驻，于是把任务连同执行参数（阈值、降频方法、汇报方式）写入 OpenClaw 的状态机。之后即使关闭 PC、关闭 Studio，板端 OpenClaw 仍会持续执行这个任务；当温度触发阈值时，OpenClaw 通过 SSH 隧道反向推送事件给 PC（PC 在线时实时通知）。

## 通信链路

```text
PC 端
├─ 桌面客户端
│  └─ D-Moss Agent
│     └─ oc-bridge（SSH 隧道客户端）
│           ↓
板端
├─ sshd（SSH 服务器，端口 22）
│  └─ 端口转发到本地 127.0.0.1:18789
│        ↓
└─ OpenClaw 网关进程
   └─ OpenClaw Agent（Node.js 长期服务）
```

板端 OpenClaw 网关默认仅监听 `127.0.0.1:18789`，不暴露公网。Studio 复用已建立的 SSH 通道做 TCP 端口转发，既保留了安全性，又避免了为板端额外开放公网端口。

## 任务流的标准链路

一次"用户对 AI Dock 说话"的完整链路如下：

1. 桌面客户端把用户输入发送给 D-Moss Agent
2. D-Moss Agent 注入当前激活设备的画像（板型、镜像、状态）作为上下文
3. D-Moss Agent 命中相关技能（SKILL.md）后将技能内容注入上下文
4. D-Moss Agent 调用大模型，模型决定回复用户或调用工具
5. 工具调用根据类型分发：
   - 通用工具（联网搜索、文档检索）由 D-Moss 本地完成
   - 设备工具（SSH 命令、文件传输）通过 PC 直连板端的 SSH 完成
   - OpenClaw 工具（任务委派、长任务编排）通过 oc-bridge 转发到板端 OpenClaw
6. 工具结果返回给模型，模型继续决策直至任务完成
7. 流式输出回桌面客户端显示给用户

整个链路对开发者透明，但 Studio 把每一步工具调用的命令、参数、输出都实时显示在对话区与远程终端中——既不强求开发者去理解架构细节，也不把架构细节藏起来。

## 后续阅读

- [3.10 OpenClaw 板端 Agent](../3-user-guide/10-openclaw/index.md)：OpenClaw 的部署、子页签、协同细节
- [3.2 AI 对话](../3-user-guide/2-ai-chat/index.md)：D-Moss Agent 在 AI Dock 中的具体能力
