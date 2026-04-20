---
sidebar_label: '3.2.2 设备感知与工具调用'
title: 3.2.2 设备感知与工具调用
---

# 3.2.2 设备感知与工具调用

AI Dock 中的 Agent 不是一个通用聊天 AI——它知道你当前连的是哪台板，并能调用 50+ 个工具完成实际操作。这两点是"AI 不止能写代码，还能直接上板子调硬件"的具体体现。

## 设备感知

每次对话开始前，D-Moss Agent 会自动注入当前激活设备的画像作为上下文：

- 板的型号（RDK X3 / X5 / S100）
- 镜像版本与内核版本
- CPU、内存、磁盘的当前状态
- 网络接口与 IP 地址
- TROS、OpenClaw 等关键服务的运行状态

这些信息是 Studio 在第一次接入设备时自动探测得到的，并随心跳更新。开发者不需要每次对话开头复述"我板子是 X5、装的 RDKOS 3.4.1"——Agent 已经知道。

设备感知带来的实际差别：

- 用户问"BPU 占用率多少"，Agent 会按板型选择命令：X5 优先用 `hrut_bpuprofile -b 0`，X3 部分镜像用 `hrut_smi`；若不确定则直接回退到所有板型都有的 `cat /sys/devices/system/bpu/bpu0/ratio`，不依赖任何专属工具是否预装
- 用户说"装一个 ROS 2 包"，Agent 知道板上是 humble 版本，给出对应的 apt 命令而不是 foxy 的命令
- 用户问"为什么 hbm 加载失败"，Agent 知道当前是 X5（Bayes 架构），主动提示 hbm 必须用 Bayes 工具链编译

## 工具调用

D-Moss Agent 拥有 50+ 个工具，按类别组织：

| 类别 | 工具数量（约） | 典型工具 |
|---|---|---|
| 设备执行 | 8 | `device_exec`、`device_file_read/write/list` |
| 板端 OpenClaw 协同 | 6 | `board_openclaw_install`、`board_openclaw_health`、`board_openclaw_delegate` |
| ROS / TROS | 5 | 节点列表、话题查看、launch 启动 |
| 文件传输 | 4 | SFTP 上下行、目录同步 |
| 联网搜索 | 3 | 多搜索引擎、Tavily、内嵌浏览器 |
| 知识检索 | 4 | RDK 官方文档、论坛、技能注册表 |
| 设备管理 | 5 | 添加 / 切换 / 移除设备、网络探测 |
| 多通道 | 3 | 飞书与微信发消息 |
| 元工具 | 8+ | 任务编排、附件、语音、Token 报告等 |

工具采用**延迟加载**：会话开始时只加载基础工具；接入设备后加载设备工具；OpenClaw 部署完成后加载协同工具。这种按需加载机制保持 Agent 上下文窗口干净，避免一次性塞入所有工具说明。

## 透明 Agent

每一次工具调用对开发者可见：调用的命令、参数、原始输出都会在 AI Dock 的对话区流式显示，并同步出现在 *远程终端* tab 的当前会话中。可随时按 Esc 或点击"全部停止"中断。

![AI Dock 设备体检任务：Agent 把任务按编号步骤拆解（1 需求理解 / 2 关键指标计划 / 3 硬件与行为抓取 / 4 双轴汇总 / 5 填写和行动心得 / 6 二叉结论），中间调用 device_diagnose、device_exec、device_openclaw_status 等工具；每次工具调用展开显示命令、参数与原始输出；末尾以"硬件状态（全部正常）""网络状态（已发现）""关键服务状态（OpenClaw 运行正常）"三张结构化表格收尾](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/showcase-case1-healthcheck.png)

上图来自一次"设备体检"任务。面板内同时出现：任务拆解、SSH 命令、原始输出、结构化表格、"结束当前 / 全部停止"按钮。

端到端的实战案例见 [1.6 AI Dock 实战演示](../../1-product-intro/6-ai-showcase.md)。

如果 Agent 选择的命令不是预期的，可以在下一轮对话中明确指定工具或文件（例："用我自己的 launch 文件"），Agent 会调整策略。
