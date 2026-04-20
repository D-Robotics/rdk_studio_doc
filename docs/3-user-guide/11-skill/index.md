---
sidebar_label: '3.11 技能（Skill）'
title: 3.11 技能（Skill）
---

# 3.11 技能（Skill）

![技能工坊界面：展示本地已安装的技能列表、来源（内置 / 社区）、触发关键词、风险等级等元数据](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/04-skill.png)

技能（Skill）是给 AI Agent 的"操作策略"，本质是一份带 YAML frontmatter 的 SKILL.md 文件。Agent 在对话中根据 trigger 关键词命中后加载对应技能进入上下文——这是 Studio 让 Agent 学会专项能力的标准方式。

技能机制不是 RAG（检索增强生成）。Agent 不会把所有 SKILL.md 都塞进上下文，而是只在用户消息命中 trigger 时才加载特定技能。这种"按需加载"的设计避免了上下文膨胀，让 Agent 即使安装了几十个技能也能保持决策清晰。

本节是 SKILL.md 字段、技能工作机制的完整参考。后续 4.1 与 4.2 章节中关于技能分享与获取的内容不再重复字段定义。

## 本节包含

- [3.11.1 SKILL.md 文件结构](./1-skill-md-structure.md)：YAML frontmatter 字段与正文模板
- [3.11.2 内置技能与分类](./2-builtin-skills.md)：Studio 装包自带的官方技能与分类组织
- [3.11.3 ClawHub 社区技能](./3-clawhub-community.md)：第三方技能的搜索、安装与镜像配置
- [3.11.4 创建与导入技能](./4-create-and-import.md)：模板新建、AI 辅助生成、URL 导入流程
- [3.11.5 触发匹配机制](./5-trigger-matching.md)：D-Moss 如何根据 trigger 加载技能
- [3.11.6 同步至板端](./6-sync-to-board.md)：让板端 OpenClaw 也能使用同一套技能
