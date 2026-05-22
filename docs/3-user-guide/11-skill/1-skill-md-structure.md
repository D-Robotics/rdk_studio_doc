---
sidebar_label: '3.11.1 技能文件怎么写'
title: 3.11.1 技能文件怎么写
---

# 3.11.1 技能文件怎么写

SKILL.md 由两部分组成：文件头部字段和正文步骤。头部字段让 Moss 知道这个技能叫什么、什么时候用、风险有多高；正文步骤告诉 Moss 具体怎么做。

## 完整模板

```markdown
---
name: my-skill
description: 一句话讲它干啥
version: 1.0.0
trigger: 关键词1,关键词2,关键词3
risk: low
permissions: device_exec
delegate_preference: board
requires_board: true
approval_level: none
cooldown_seconds: 0
scheduler_template: none
category: Custom
---

# 技能标题

## 适用场景
（什么时候用这个技能）

## 执行流程
（步骤 1 → 步骤 2 → ...）

## 工具映射
（用哪些 Studio 工具或板端命令）

## 常见问题
（已知坑和绕过方法）
```

文件顶部用 `---` 包围的部分就是头部字段。你不需要理解格式来源，按模板填写即可。

## 关键字段说明

| 字段 | 必填 | 说明 |
|---|---|---|
| `name` | 是 | 技能的唯一名称，建议用短英文或拼音 |
| `description` | 是 | 一句话描述，**AI 选择技能的最关键依据** |
| `version` | 否 | 技能版本号，使用语义化版本（如 1.0.0） |
| `trigger` | 是 | 触发关键词列表（逗号分隔），命中后优先加载 |
| `risk` | 是 | 风险等级：`low` / `medium` / `high` |
| `permissions` | 是 | 技能需要使用的工具权限 |
| `delegate_preference` | 否 | 偏好执行位置：`local`（PC）/ `board`（板端）/ `hybrid` |
| `approval_level` | 否 | 执行时是否需要你确认 |
| `requires_board` | 否 | 是否必须有板端设备才能使用 |
| `category` | 否 | 分类标签，用于 UI 中分组展示 |

## 风险字段的影响

| 取值 | Moss 行为 |
|---|---|
| `low` | 低风险任务，可减少确认打扰 |
| `medium` | 执行前在对话中提示将要执行什么 |
| `high` | 执行前需要你明确点击 *允许* 才继续 |

设计技能时不要低估风险等级——宁可保守。涉及板端系统配置修改、删除文件、重启服务等操作建议设为 `medium` 或 `high`。

## 正文的推荐结构

虽然 Markdown 正文格式自由，但建议按以下结构组织以便 AI 理解：

| 标题 | 内容 |
|---|---|
| 适用场景 | 什么时候用这个技能（与 description 互补） |
| 执行流程 | 步骤化的具体操作（编号列表） |
| 工具映射 | 用到的 Studio 工具与板端命令 |
| 常见问题 | 已知坑、错误处理、绕过方法 |

避免大段散文。AI 在解析时对结构化的步骤列表识别更稳定。
