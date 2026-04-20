---
sidebar_label: '3.11.5 触发匹配机制'
title: 3.11.5 触发匹配机制
---

# 3.11.5 触发匹配机制

D-Moss Agent 通过 trigger 关键词匹配机制决定哪些技能加载到当前对话的上下文。本节描述这一机制的工作流程，以及它与 RAG（检索增强生成）的区别。

## D-Moss 内的处理流程

Studio 启动时，D-Moss Agent 内的 SkillManager 完成以下初始化：

1. 扫描 `skills/**/SKILL.md` 全部文件（递归 glob）
2. 解析每个 SKILL.md 的 frontmatter
3. 用 trigger、category、risk 等字段建立内存索引
4. 提供 `/api/skills` 接口供前端列表展示
5. 提供 `inject()` 方法供对话时按需加载

每次用户在 AI Dock 中发送消息时：

1. SkillManager 扫描所有已安装技能的 trigger 关键词
2. 命中相关技能（例如用户提到"USB 摄像头黑屏"，命中 `rdk-x5-camera-debug`）
3. 把命中技能的 SKILL.md 正文注入模型上下文
4. 模型按 SKILL.md 中的步骤决策与执行（可能调用 `device_exec`、`device_file_read` 等工具）
5. 回复用户时已经有了"针对性方案 + 具体命令"

## 与 RAG 的区别

技能机制与 RAG（Retrieval-Augmented Generation）有本质差别：

| 维度 | RAG | 技能（trigger 匹配） |
|---|---|---|
| 触发方式 | 向量相似度匹配 | 字符串关键词匹配 |
| 加载时机 | 每次对话都尝试检索 | 仅命中 trigger 时加载 |
| 上下文消耗 | 可能注入大量片段 | 只注入命中的完整 SKILL.md |
| 可解释性 | 模糊（向量相似度难解释） | 明确（命中哪个 trigger 就加载哪个技能） |
| 适用场景 | 海量文档库的语义搜索 | 结构化操作策略库 |

技能机制更适合"教 AI 学会一种套路"的场景。RAG 更适合"在大量文档中找答案"的场景。两者可以并存——RDK Studio 同时支持两种机制（RAG 用于内置文档检索，技能用于操作策略）。

## 触发的精度

trigger 匹配是字符串匹配，不做语义理解。这意味着：

| 触发词 | 用户消息 | 是否命中 |
|---|---|---|
| `USB摄像头` | "USB 摄像头黑屏怎么办" | 命中（精确匹配） |
| `USB摄像头` | "我板子的相机不显示画面" | 不命中（语义相同但字面不一致） |
| `USB摄像头,相机,camera` | "我板子的相机不显示画面" | 命中（trigger 中包含"相机"） |

为了提高命中率，建议在设计 trigger 时：

- 列出常见的同义词与变体（中文、英文、缩写）
- 包含错误信息中的特征字符串（如 `code -6`、`SIGABRT`）
- 包含开发者描述问题时常用的口语化表达

## 验证当前会话已加载的技能

在 AI Dock 中输入 `/skills`：

```
/skills
```

返回示例：

```
当前会话已加载技能：
- rdk-device-ops (设备操作核心)
- rdk-x5-camera-debug (X5 摄像头调试)
- rdk-developer-docs (RDK 官方文档检索)
```

如果你装了某个技能但 `/skills` 中没显示，说明它的 trigger 与当前对话没匹配。修改 SKILL.md 的 trigger 字段后重启 Studio 重新建立索引即可。
