---
sidebar_label: '3.11.2 内置技能与分类'
title: 3.11.2 内置技能与分类
---

# 3.11.2 内置技能与分类

RDK Studio 装包自带一组精选官方技能，由 D-Robotics 维护，覆盖 RDK 开发中最常见的场景。开发者无需手动安装，开箱即可使用。

## 五大分类

内置技能按以下分类组织：

| 分类 | 用途 | 典型技能 |
|---|---|---|
| 核心操作（core/） | 设备诊断、硬件知识、OpenClaw 协作的底层能力 | `rdk-openclaw`、`rdk-device-ops`、`rdk-hardware`、`rdk-board-knowledge` |
| 板型专属（boards/） | 针对特定板型的专项能力 | `rdk-x5-app`、`rdk-x5-ai-detect`、`rdk-x5-tros-runtime` |
| 文档与搜索（docs/） | 在 RDK 官方文档与社区中检索 | `rdk-developer-docs`、`rdk-doc-optimized`、`rdk-ros`、`rdk-forum-search` |
| 通用工具（tools/） | 跨场景通用能力 | `multi-search-engine`、`agent-browser`、`duckduckgo-search` |
| 可选扩展（optional/） | 可选启用的高级能力 | `rdk-token-usage`、`nano-banana-pro`、`rdk-skill-authoring-guide` |

## 技能数量与查看入口

仓库中实际包含 45 个 SKILL.md（按 `skills/**/SKILL.md` 文件计数）。其中 *技能工坊 → 技能中心 → catalog* 列出的是精选推荐子集，更多技能可在 ClawHub 社区搜索找到。

查看技能详情的方式：

| 入口 | 路径 |
|---|---|
| Studio 内置目录 | *技能工坊 → 技能中心 → catalog* |
| 仓库源文件 | `<仓库根>/skills/<分类>/<技能名>/SKILL.md` |
| AI Dock 中查看当前激活的 | 输入 `/skills` 命令 |

## 技能的实际"住所"

| 位置 | 内容 |
|---|---|
| Studio 装包内 | 精选官方技能，约 12 条，由 `src/skill-center/manifest.json` 列出 |
| 仓库 `skills/` 目录 | 完整官方技能集（45 个） |
| 板端 OpenClaw 工作区 | 同步过来的技能（默认关闭自动同步） |
| ClawHub 远程 | 社区第三方技能（按需拉取） |

D-Moss Agent 启动时会扫描本机的 `skills/**/SKILL.md` 建立索引，对话中按 trigger 关键词命中后加载到上下文。

## 内置技能的"为什么不全部加载"

Studio 不会把所有内置技能都注入每次对话的上下文。这是 trigger 触发匹配机制的核心设计——避免上下文膨胀、保持 Agent 决策清晰。详细的触发匹配逻辑见 [3.11.5 触发匹配机制](./5-trigger-matching.md)。

如果开发者希望某个技能"无论用户说什么都加载"，可以在 SKILL.md 的 trigger 字段中加入广义关键词（如 `rdk` `开发`），但这通常不推荐——会让技能与不相关的对话也命中，影响 Agent 的注意力分配。
