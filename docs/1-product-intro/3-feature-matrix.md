---
sidebar_label: '1.3 功能入口'
title: 1.3 功能入口
description: '按导航区域说明常用功能入口与部署差异'
---

# 1.3 功能入口

当前导航以 **Agent 工作台、开发与设备、AI 能力** 组织常用功能。左侧也可切换到项目与对话列表。

| 入口 | 用途 | 手册 |
|---|---|---|
| Agent 工作台 | 提交任务、选择工作方式、继续项目对话 | [3.1 工作台](../3-user-guide/1-workbench/index.md) |
| 文件管理 | 本机或板端工作区文件、上传下载和编辑 | [3.4 文件](../3-user-guide/4-file-manager/index.md) |
| 终端 | 本机终端、SSH 终端与受支持的串口调试 | [3.3 终端](../3-user-guide/3-remote-terminal/index.md) |
| 烧录 | 选择板型、镜像与写入目标 | [3.7 烧录](../3-user-guide/7-system-flashing/index.md) |
| 积木工作室 | 选择机器人、编排积木、仿真与真机运行 | [3.17 积木工作室](../3-user-guide/17-block-studio/index.md) |
| 远程桌面 | 使用目标设备的图形桌面 | [3.6 远程桌面](../3-user-guide/6-remote-desktop/index.md) |
| 代码编辑器 | 打开远端代码工作区 | [3.5 代码编辑器](../3-user-guide/5-remote-ide/index.md) |
| 板端 Agent | 部署、配置与使用 OpenClaw | [3.10 OpenClaw](../3-user-guide/10-openclaw/index.md) |
| 扩展中心 | 管理技能、MCP 等扩展 | [3.11 扩展中心与技能](../3-user-guide/11-skill/index.md) |
| 本地大模型 | 安装 Ollama、下载模型、设为 Agent 主模型 | [3.12 本地大模型](../3-user-guide/12-local-models/index.md) |
| 设置 | 账户、设备、显示、模型与运行引擎、MCP、存储和更新 | [3.13 配置中心](../3-user-guide/13-config-center/index.md) |

入口随部署能力显示。公网网页端不直接提供电脑本机写盘、Ollama 和系统集成；需要页面支持的桥接流程或桌面客户端。技能商店需要当前部署启用相应服务，通常从扩展中心进入。

## 常见选择

- 只问问题：打开工作台，无需先连接开发板。
- 修改电脑上的代码：创建本机项目，绑定本机目录。
- 在开发板上运行程序：选择设备和板端目录，确认 SSH 在线。
- 只想先看步骤：选 **计划**；需要形成可审批的需求与验收标准时选 **Spec**。
- 想改用 DSH：在设置检测可用性并设为新任务默认引擎，再新建任务。

CLI 适合脚本与自动化，能力以命令帮助为准；它不承载图形化烧录向导、积木画布或远程桌面。
