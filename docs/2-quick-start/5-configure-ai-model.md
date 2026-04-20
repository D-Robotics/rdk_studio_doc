---
sidebar_label: '2.5 接入 AI 模型'
title: 2.5 接入 AI 模型
---

# 2.5 接入 AI 模型

RDK Studio 的所有 AI 能力都依赖大模型驱动。本节给出最简的接入方式；详细的模型条目字段、双车道路由机制、协议判定规则在 [3.12 配置中心](../3-user-guide/12-config-center/3-ai-engine.md) 详细说明。

## 两种接入方式

| 你的情况 | 推荐方式 |
|---|---|
| 默认情况（所有 RDK Studio 用户） | 使用**内置官方推荐模型**，无需任何配置 |
| 已有自己的外部模型 API Key，希望替换默认模型 | 在配置中心添加自定义模型条目 |

## 方式一：使用内置官方推荐模型

RDK Studio **对所有登录用户开放**一个官方推荐模型：完成 SSO 登录后，打开 *AI Dock* 直接发送消息即可，Studio 会自动使用内置模型——不需要申请额外的 API Key、也不需要在 Studio 中填任何字段。这个内置模型走 D-Robotics 官方网关统一转发，对公司内部账号与外部开发者账号一视同仁。

![新手引导向导 · 第 4 步试用 AI 助手：上面是"打个招呼"快捷发送，下面是可选的「OpenClaw 与模型（推荐）」入口，底部可"完成引导"进入正式工作台](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/onboarding-4-dmoss.png)

内置模型足以覆盖大部分场景。如果暂时不需要接其他厂商，可以直接在上图的"打个招呼"卡片点击 *发送*、或跳到 [2.6 发起首次对话](./6-first-conversation.md)。

## 方式二：自定义模型接入

适用于已经在外部模型厂商有账号和 API Key 的开发者。

### 第 1 步：进入 AI 引擎配置

打开桌面客户端，进入 *设置面板 → AI 引擎*。或者点击 AI Dock 底部的"模型"标签直接跳转。

### 第 2 步：新建模型条目

点击 *新建模型条目*，填写以下字段：

| 字段 | 说明 | 示例 |
|---|---|---|
| Label | 给条目起一个易识别的名字 | "我的 GPT-4" |
| Provider | 选择厂商/协议 | `openai` / `anthropic` / `qwen` / `doubao` / `gemini` / `deepseek` / `moonshot` / `ollama` / `openai-compatible` / `anthropic-compatible` 等 |
| Model | 厂商的模型 ID（必须精确） | `gpt-4o-mini` / `claude-sonnet-4-20250514` / `qwen-plus` / `doubao-1.5-pro-256k` |
| API Key | 厂商控制台获取 | `sk-xxxx...` |
| Base URL | 服务地址，使用厂商默认值留空即可 | （留空） |

### 第 3 步：测试连通性

点击 *测试连通性*。Studio 会向模型发送一条测试请求。返回模型列表说明配置正确。

### 第 4 步：保存并激活

保存模型条目后，在 AI 引擎顶部的下拉框选择该条目作为当前激活模型。Studio 会立即生效，无需重启。

## 关于双车道

RDK Studio 设计了 Thinking 与 Quick 两套模型槽位：

- **Thinking 车道**：处理主对话、复杂推理、规划
- **Quick 车道**：处理工具结果总结、文件浏览、简短问答

Studio 根据任务特征自动分发。如果只配置了 Thinking 车道、Quick 车道空缺，所有任务都会走 Thinking 车道，Token 成本会显著上升（5~10 倍）。强烈建议同时配置 Thinking 和 Quick 两个车道——Quick 车道选择便宜的小模型即可。

## 协议判定规则

Studio 通过模型条目的 **Provider** 字段决定使用哪种 API 协议（**不是看 URL**）：

| Provider 字段 | 使用的协议 | 认证头 |
|---|---|---|
| `openai` / `qwen` / `doubao` / `openai-compatible` 等 | OpenAI Completions | `Authorization: Bearer <key>` |
| `anthropic` / `anthropic-compatible` | Anthropic Messages | `x-api-key: <key>` |

如果使用反向代理把 Anthropic 服务包装成不含 `anthropic` 字样的路径，仍需将 Provider 设置为 `anthropic-compatible`，否则 Studio 会按 OpenAI 协议发请求并得到 401 错误。

## 后续操作

完成模型配置后，进入 [2.6 发起首次对话](./6-first-conversation.md) 给 AI 发送第一条消息。
