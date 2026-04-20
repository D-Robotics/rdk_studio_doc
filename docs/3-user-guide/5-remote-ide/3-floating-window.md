---
sidebar_label: '3.5.3 浮窗模式与扩展管理'
title: 3.5.3 浮窗模式与扩展管理
---

# 3.5.3 浮窗模式与扩展管理

浮窗模式是 RDK Studio 桌面客户端独有的能力，允许把远程 IDE 拆分为独立窗口，多屏开发友好。本节同时介绍 RDK 开发场景的推荐扩展。

## 浮窗模式

通过 IDE tab 标题栏右上角的 *弹出* 按钮，可以把远程 IDE 拆分为独立窗口：

- 主 Studio 窗口可以继续显示其他 tab（如远程终端、AI Dock）
- IDE 浮窗支持置顶、全屏、拖到副屏
- 多屏开发时把 IDE 放副屏、AI Dock 与终端放主屏，工作流更顺畅

浮窗与主窗口共享所有状态（设备列表、模型配置、技能等），关闭浮窗后可以重新弹出。

## 推荐扩展

针对 RDK 开发场景，以下扩展常用且兼容 ARM64：

| 扩展 | 用途 |
|---|---|
| Python | Python 语法高亮、智能补全、调试 |
| C/C++ | C++ 编辑、IntelliSense |
| YAML | TROS launch 文件编辑 |
| GitLens | Git 历史增强 |
| Markdown All in One | 写文档 |
| TODO Tree | 跟踪源码中的 TODO 注释 |

不要安装 Pylance（仅有 x64 二进制）。如果需要 Python 智能补全，使用基础的 Python 扩展即可，功能基本满足日常开发。

## 集成终端

IDE 内置的终端（Ctrl + ~ 或 *Terminal → New Terminal*）打开的也是板端 shell（不是 PC shell）。功能上等价于 [3.3 远程终端](../3-remote-terminal/index.md)，但在 IDE 内更方便——可以一边写代码一边在同一窗口跑命令。

## 安全注意

| 注意点 | 说明 |
|---|---|
| code-server 默认仅监听 127.0.0.1 | 通过 SSH 隧道访问，不暴露公网 |
| 如手工把端口暴露公网 | 务必修改 `~/.config/code-server/config.yaml` 设置强密码 |
| 多人同板开发 | code-server 会话基于 cookie，不同浏览器实例可同时使用，但建议团队约定专人值守 |

## 跨设备同步

code-server 的设置同步与桌面版 VS Code 不通用——每台设备的 IDE 配置（已安装扩展、用户偏好、键位）独立存储在板端 `~/.local/share/code-server/`。如果希望多台板使用相同配置，建议手动备份该目录后在新板上恢复。
