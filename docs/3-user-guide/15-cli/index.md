---
sidebar_label: '3.16 命令行'
title: 3.16 命令行
---

# 3.16 命令行

先用桌面端跑通设备和模型，再使用命令行工具。这样命令行可以复用桌面端里的设备和模型配置，少走很多配置步骤。

## 使用顺序

| 顺序 | 你要做什么 |
|---|---|
| 1 | 先在桌面客户端添加设备、配置模型 |
| 2 | 到 **配置中心 → 应用与更新** 启用命令行工具 |
| 3 | 在终端运行 `rdkstudio --version` 验证 |
| 4 | 日常使用优先选 `rdkstudio` |
| 5 | CI、Docker 或独立脚本环境，再考虑 `dmoss-agent` |

| CLI | 来源 | 适用场景 |
|---|---|---|
| `rdkstudio` | 桌面客户端启用后写入系统 PATH | 日常终端使用，复用桌面端设备和模型配置 |
| `dmoss-agent` | 独立 NPM 包 `@dmoss/agent` | CI / CD、Docker、脚本任务 |

如果只是配合 RDK Studio 做日常开发，优先使用 `rdkstudio`。只有在不依赖桌面客户端的自动化环境里，才考虑 `dmoss-agent`。

## 继续阅读

- [3.16.1 rdkstudio](./1-rdkstudio.md)：产品 CLI 的启用、验证和常用命令
- [3.16.2 dmoss-agent](./2-dmoss-agent.md)：独立 Agent CLI 的安装、配置、独有能力
