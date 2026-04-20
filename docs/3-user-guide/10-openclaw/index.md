---
sidebar_label: '3.10 OpenClaw 板端 Agent'
title: 3.10 OpenClaw 板端 Agent
---

# 3.10 OpenClaw 板端 Agent

![OpenClaw 主面板：顶部是网关/网络/模型的实时状态徽章，右侧是配置进度与「重启网关、查看日志、升级、诊断并修复」四个快捷操作](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/03-OpenClaw.png)

OpenClaw 是开源的 AI Agent 框架，可独立运行在任意 Linux 机器上。RDK Studio 把 OpenClaw 部署到 RDK 板端作为常驻 AI 运行时，由 systemd 管理为长期服务。同时，PC 端的 D-Moss Agent 可以通过 SSH 隧道与板端 OpenClaw 协同——任务在两端自动流转。

OpenClaw 的核心特性：长期运行的 Node.js 服务、跨会话记忆、多步工作流、工具调用、显式状态机驱动的任务断点续传。设计哲学是"操作系统思维"——把执行平面和控制平面分离，验证命令执行结果而不依赖模型声明。

本节是 OpenClaw 在 Studio 内的完整参考。前面 1.2、3.2 等章节中提到 OpenClaw 时仅一笔带过，详细机制全部在本节展开。

## 本节包含

- [3.10.1 概述与适用场景](./1-overview.md)：什么时候需要 OpenClaw、什么时候不需要
- [3.10.2 部署与卸载](./2-deploy-uninstall.md)：一键部署的完整流程与失败排查
- [3.10.3 主面板与子页签](./3-main-panel.md)：6 个子页签的功能详解
- [3.10.4 与 D-Moss 的协同机制](./4-collab-with-dmoss.md)：物理链路、工具家族、安全设计
- [3.10.5 任务委派与自动 fallback](./5-task-delegation.md)：长任务委派与 SSH 阻塞时的自救机制
- [3.10.6 配对与安全](./6-pairing-security.md)：首次连接的配对 token 与安全策略
