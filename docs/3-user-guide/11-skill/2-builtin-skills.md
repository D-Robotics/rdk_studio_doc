---
sidebar_label: '3.11.2 查看内置技能'
title: 3.11.2 查看内置技能
---

# 3.11.2 查看内置技能

RDK Studio 自带一组 D-Robotics 维护的官方技能，覆盖 RDK 开发中最常见的场景。你不需要手动安装，打开 Studio 就能使用。

## 五大分类

内置技能按以下分类组织：

| 分类 | 用途 | 典型技能 |
|---|---|---|
| 核心操作 | 设备诊断、硬件知识、OpenClaw 协作的基础能力 | `rdk-openclaw`、`rdk-device-ops`、`rdk-hardware`、`rdk-board-knowledge` |
| 板型专属 | 针对特定板型的专项功能 | `rdk-x5-app`、`rdk-x5-ai-detect`、`rdk-x5-tros-runtime` |
| 文档与搜索 | 在 RDK 官方文档与社区中检索 | `rdk-developer-docs`、`rdk-doc-optimized`、`rdk-ros`、`rdk-forum-search` |
| 通用工具 | 跨场景通用能力 | `multi-search-engine`、`agent-browser`、`duckduckgo-search` |
| 可选扩展 | 可选启用的高级能力 | `rdk-token-usage`、`nano-banana-pro`、`rdk-skill-authoring-guide` |

## 在哪里查看技能

进入 **技能工坊** 后，可以在板端技能、本机 Moss 技能和 SkillHub 中查看可用技能。界面里会显示技能名称、适用场景和风险提示。

常用入口：

| 入口 | 路径 |
|---|---|
| Studio 内置目录 | *技能工坊 → 技能中心 / 节点中心* |
| AI Dock 中查看当前激活的 | 输入 `/skills` 命令 |
| SkillHub | 搜索并预览更多技能 |

## 技能保存在哪里

| 位置 | 内容 |
|---|---|
| Studio 装包内 | 开箱可用的官方技能 |
| 本机 Moss 工作区 | 你自己创建、从对话沉淀或从 SkillHub 添加的技能 |
| 板端 OpenClaw 工作区 | 已同步到当前 RDK 设备的技能 |
| SkillHub | 可搜索和添加的远程技能 |

Moss 会根据你在对话中提到的关键词，自动选择相关技能。你也可以用 `/skills` 查看当前会话已经加载了哪些技能。

## 为什么技能不会全部同时生效

Studio 会按你的提问加载相关技能，而不是把全部技能都放进每次对话。这样可以减少无关信息干扰，让 Moss 更容易围绕当前问题给出准确步骤。

详细说明见 [设置触发词](./5-trigger-matching.md)。

如果希望某个自定义技能更容易被触发，可以给它补充更贴近真实提问的 trigger 关键词。不要把关键词写得太宽泛，例如只写 `rdk` 或 `开发`，否则技能可能在无关对话中也被加载。
