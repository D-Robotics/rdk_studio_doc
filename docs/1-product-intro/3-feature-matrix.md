---
sidebar_label: '1.3 功能矩阵'
title: 1.3 功能矩阵
---

# 1.3 功能矩阵

RDK Studio 提供 15 个功能模块，覆盖设备接入、远程开发、AI 协作、系统配置四类场景。本节给出完整的功能矩阵，作为查阅起点；每个模块的详细使用方法在 [3. 用户指南](../3-user-guide/1-workbench/index.md) 中。

![桌面客户端主界面：左侧 IconRail 聚合所有功能 tab，中间是当前激活设备的工作台，底部常驻 AI Dock](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/01-dashboard.png)

## 15 个功能模块

| 模块 | 一句话职责 | 详见 |
|---|---|---|
| 工作台 | 当前激活设备的硬件指标与系统信息总览 | [3.1](../3-user-guide/1-workbench/index.md) |
| AI 对话 | D-Moss Agent 入口，自然语言驱动的开发助手 | [3.2](../3-user-guide/2-ai-chat/index.md) |
| 远程终端 | 多标签 SSH 终端，断线自动重连，与 AI 工具调用共享显示 | [3.3](../3-user-guide/3-remote-terminal/index.md) |
| 文件管理 | 板端文件的可视化浏览、上传、下载、在线编辑 | [3.4](../3-user-guide/4-file-manager/index.md) |
| 远程 IDE | 基于 code-server 的浏览器版 VS Code，所有内容在板端原地工作 | [3.5](../3-user-guide/5-remote-ide/index.md) |
| 远程桌面 | 基于 NoVNC 的浏览器原生远程桌面 | [3.6](../3-user-guide/6-remote-desktop/index.md) |
| 系统烧录 | TF 卡 / eMMC / RDK S100 xburn 一站式烧录 | [3.7](../3-user-guide/7-system-flashing/index.md) |
| 网络配置 | 远程下发板端 WiFi，无需为板端连接键盘鼠标 | [3.8](../3-user-guide/8-network-config/index.md) |
| 设备管理 | 多设备列表、切换、自动设备识别、配置导入导出 | [3.9](../3-user-guide/9-device-management/index.md) |
| OpenClaw 板端 Agent | 板端 AI 运行时的部署与协同 | [3.10](../3-user-guide/10-openclaw/index.md) |
| 技能（Skill） | 给 Agent 的操作策略，可安装、自创、社区共享 | [3.11](../3-user-guide/11-skill/index.md) |
| 配置中心 | 账户、AI 引擎、设备连接、外观等全局配置的统一入口 | [3.12](../3-user-guide/12-config-center/index.md) |
| 多通道接入 | 把 Studio 的 AI 对话接入飞书、微信等通讯工具 | [3.13](../3-user-guide/13-channels/index.md) |
| 监控与运维 | 任务队列与 Token 用量统计 | [3.14](../3-user-guide/14-monitoring/index.md) |
| 命令行工具（CLI） | rdkstudio 与 @dmoss/agent，支持自动化与 CI 场景 | [3.15](../3-user-guide/15-cli/index.md) |

## 发布形态对比

RDK Studio 提供两种发布形态：

| 形态 | 适用场景 | 关键能力 |
|---|---|---|
| 桌面客户端 | 日常开发主场景 | 完整功能集，包含烧录、串口、远程桌面等需要原生系统能力的模块 |
| 命令行工具（CLI） | 自动化脚本、CI / CD、批量操作、远程会话 | 无 GUI 依赖；可管道；与桌面客户端共享设备列表与模型配置 |

CLI 进一步细分为两个独立命令：

- **`rdkstudio`**：产品 CLI，与桌面客户端共享设备和模型配置。在终端中跑命令、查文件、调 AI，与桌面端无缝衔接。
- **`@dmoss/agent`**：独立 NPM 包，纯 Agent 运行时。适合 Docker 镜像、CI 容器、远程脚本场景，不依赖桌面客户端。

两个 CLI 的具体差异、安装方式、典型用法见 [3.15 命令行工具](../3-user-guide/15-cli/index.md)。

## 模块在两种形态下的兼容性

| 模块 | 桌面客户端 | CLI |
|---|---|---|
| 工作台 | 支持 | 不支持（GUI 专属） |
| AI 对话 | 支持 | 支持 |
| 远程终端 | 支持 | 支持（管道与交互模式） |
| 文件管理 | 支持 | 支持 |
| 远程 IDE | 支持 | 不支持（GUI 专属） |
| 远程桌面 | 支持 | 不支持（GUI 专属） |
| 系统烧录 | 支持 | 不支持（依赖原生磁盘扫描） |
| 网络配置 | 支持 | 支持 |
| 设备管理 | 支持 | 支持 |
| OpenClaw 板端 Agent | 支持 | 支持 |
| 技能 | 支持 | 支持 |
| 配置中心 | 支持 | 部分支持（通过 `rdkstudio config`） |
| 多通道接入 | 支持 | 仅 `@dmoss/agent --weixin` |
| 监控与运维（任务队列） | 支持 | 不支持（GUI 专属） |
| 命令行工具 | 内置启用入口 | 自身即 CLI |

CLI 不支持图形界面相关的能力（工作台、IDE、远程桌面、烧录的可视化界面、任务队列）。AI 对话、终端、文件、设备管理、OpenClaw 协同、技能等核心能力两种形态都完整支持。
