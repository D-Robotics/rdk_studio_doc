---
sidebar_label: '3.11.1 SKILL.md 文件结构'
title: 3.11.1 SKILL.md 文件结构
---

# 3.11.1 SKILL.md 文件结构

SKILL.md 由两部分组成：YAML frontmatter（结构化元数据）与 Markdown 正文（具体操作步骤）。两部分缺一不可。

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

YAML frontmatter 是 Markdown 文件顶部用 `---` 包围的元数据块。这种格式最早由 Jekyll、Hugo 等静态站点生成器引入，特点是结构化字段 + 易读，机器可读 + 人类可读。

## 关键字段说明

| 字段 | 必填 | 说明 |
|---|---|---|
| `name` | 是 | 技能的唯一 ID（slug 格式），AI 用它引用技能 |
| `description` | 是 | 一句话描述，**AI 选择技能的最关键依据** |
| `version` | 否 | 技能版本号，使用语义化版本（如 1.0.0） |
| `trigger` | 是 | 触发关键词列表（逗号分隔），命中后优先加载 |
| `risk` | 是 | 风险等级：`low` / `medium` / `high` |
| `permissions` | 是 | 所需的工具权限（如 `device_exec`、`network`） |
| `delegate_preference` | 否 | 偏好执行位置：`local`（PC）/ `board`（板端）/ `hybrid` |
| `approval_level` | 否 | 执行时是否弹审批：`none` / `prompt` / `always` |
| `requires_board` | 否 | 是否必须有板端设备才能使用 |
| `category` | 否 | 分类标签，用于 UI 中分组展示 |

## risk 字段的影响

| 取值 | Agent 行为 |
|---|---|
| `low` | 自动执行技能，不打扰用户 |
| `medium` | 执行前在对话中提示开发者将要执行什么 |
| `high` | 执行前需要开发者明确点击 *允许* 才继续 |

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
