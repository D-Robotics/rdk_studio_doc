---
sidebar_label: '1.1 产品概述'
title: 1.1 产品概述
---

# 1.1 产品概述

**RDK Studio 是为机器人而生的 AI Native 开发工作台。让 AI 不止能写代码，还能直接上板子调硬件。**

你描述任务，Agent 自主完成 SSH 登录、命令执行、日志回传；对话、终端、文件、烧录——集成于同一个原生窗口，告别工具切换。

![RDK Studio 桌面客户端主界面：左侧为功能 tab，中间为当前激活设备概览，底部常驻 AI Dock](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/01-dashboard.png)

## 与"加了 AI 的 IDE"有什么不同

通用 IDE 中的 AI 助手只能帮开发者写代码：它不知道你的板子型号、连不上你的设备、跑不了任何命令。RDK Studio 的 AI 是真正能动手的 Agent：

- 你说"帮我连一下板子"，Agent 自动扫描局域网，识别 RDK 板，建立 SSH 会话
- 你说"看下 BPU 占用"，Agent 登录板端执行 `hrut_bpuprofile -b 0`（或按板型回退到 `cat /sys/devices/system/bpu/bpu0/ratio`），把结果解析后告诉你
- 你说"启动摄像头节点，老报错你帮我看看"，Agent 启动节点，截取报错日志，匹配内置的 30+ 种 RDK 错误模式，直接给修复方案
- 你说"把这个新固件烧到 SD 卡"，Agent 弹出磁盘选择对话框，调用底层烧录接口，进度条实时显示

整个过程不需要开发者记 ssh 命令、不需要查 nmcli 参数、不需要 Google 报错——只需要描述想做什么。

## 解决的核心问题

RDK Studio 解决的是机器人与嵌入式 AI 开发流程中的两类问题。

第一类是**工具碎片化**。传统流程下，开发者需要在 SSH 客户端、SCP / SFTP 工具、VNC 客户端、IDE、烧录工具、模型 API 控制台之间频繁切换。RDK Studio 把这些操作集成到单一原生窗口，每个能力既可以"手动点按钮"，也可以"对 AI 说一句话"。

第二类是**经验门槛**。传统嵌入式开发要求工程师熟悉 Linux 命令、SSH、nmcli、systemd、ROS 工作空间等基础工具。RDK Studio 的 AI Native 设计让上述工具变成 Agent 内部实现的细节，开发者只需要描述意图。如果开发者熟悉这些底层工具，所有命令依然开放给开发者直接使用；如果开发者不熟悉，Agent 会代劳。

## 适用人群

RDK Studio 面向所有机器人开发者——无论是否使用 RDK 板、无论是单机开发还是团队协作：

- **机器人与嵌入式 AI 工程师**：需要在多块开发板之间频繁切换、希望降低操作复杂度、把 AI 当作日常工作伴侣的一线开发者
- **ROS / ROS 2 / TROS 开发者**：把板端节点、话题、launch 调试、日志排障的手工步骤交给 Agent 自动化
- **机器人应用落地团队**：需要在 CI / CD 或自动化脚本中调度板卡执行任务的工程 / 运维团队
- **机器人教学与研究场景**：希望把繁琐的环境准备、命令记忆让 AI 代劳，把精力集中在算法与方案设计上的师生与研究者

RDK Studio 为 RDK 板做了深度适配（硬件感知、板型识别、TROS 知识、烧录工具链），但产品能力不局限于 RDK 平台——AI Dock、远程终端、IDE、技能市场等通用模块对任何可 SSH 的 Linux 板卡 / 机器人主机都可使用。

## 不在产品范围内的能力

为避免误用，以下能力当前不在 RDK Studio 的范围内，请使用对应的专用工具：

| 需求 | 推荐工具 |
|---|---|
| 模型训练 | D-Robotics OE 工具链、PyTorch、TensorFlow 等 |
| 模型量化与编译为 hbm | D-Robotics 模型转换工具 `hb_mapper` |
| 跨平台 BUILD CI | GitHub Actions、GitLab CI 等 |
| 多人实时协作编辑 | 飞书文档、Notion 等知识库工具 |
| 用户级权限隔离（RBAC） | 通过 SSH 跳板机或运维平台实现 |

## 后续阅读

- [1.2 核心架构](./2-architecture.md)：了解 PC 端 D-Moss 与板端 OpenClaw 双 Agent 的协同机制
- [1.3 功能矩阵](./3-feature-matrix.md)：完整的功能模块清单与发布形态兼容性
- [1.6 AI Dock 实战演示](./6-ai-showcase.md)：三段真实对话（设备体检、端到端部署 YOLO、AI 生成社区发帖草稿）
- [2. 快速入门](../2-quick-start/1-install-and-login.md)：6 步完成"安装 → 接入 → 配置 → 对话"完整链路
