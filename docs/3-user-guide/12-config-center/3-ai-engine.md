---
sidebar_label: '3.12.3 AI 引擎配置'
title: 3.12.3 AI 引擎配置
---

# 3.12.3 AI 引擎配置

![AI 引擎配置页：顶部显示"当前模型 / 思考 / 快速"的车道切换，下面按顺序排列内置模型、服务商、Model、API Key、Base URL、测试按钮](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/09-setting.png)

AI 引擎区域是 RDK Studio 模型管理的核心。本节是模型条目字段、双车道路由、协议判定规则的完整参考，[2.5 接入 AI 模型](../../2-quick-start/5-configure-ai-model.md) 中的快速接入流程在此展开为详细参考。

## 内置默认模型

RDK Studio **对所有登录用户开放**一个官方推荐模型，使用 D-Robotics 账号登录后即可直接使用，无需配置 API Key。该模型走 D-Robotics 官方网关统一转发，针对 RDK 开发场景做了适配，对公司内部账号与外部开发者账号一视同仁。

如果开发者只需要"开箱即用"，使用默认模型即可，不必新建任何模型条目。

## 自定义模型条目

外部开发者或希望使用特定模型的团队可以新建自定义模型条目。每个条目支持以下字段：

| 字段 | 必填 | 说明 |
|---|---|---|
| Label | 是 | 条目的显示名，便于在下拉框中识别 |
| Provider | 是 | 厂商标识，决定使用的协议（详见下方"协议判定"） |
| Model | 是 | 厂商的模型 ID（必须精确，区分大小写） |
| API Key | 是 | 厂商控制台获取的 Key |
| Base URL | 否 | 服务端点，留空使用厂商默认 |
| Temperature | 否 | 采样温度，0 = 确定性，1+ = 创造性，默认 0.7 |
| Top-P | 否 | 核采样阈值，默认 1.0 |
| Reasoning visibility | 否 | 推理过程是否显示给用户：`inline` / `hidden` |

## 协议判定规则

Studio 通过 **Provider 字段**决定使用哪种 API 协议（不是看 URL）：

| Provider 字段值 | 使用的协议 | 认证方式 |
|---|---|---|
| `openai` / `qwen` / `doubao` / `gemini` / `deepseek` / `moonshot` / `siliconflow` / `ollama` / `openai-compatible` | OpenAI Completions | `Authorization: Bearer <key>` |
| `anthropic` / `anthropic-compatible` | Anthropic Messages | `x-api-key: <key>` |

**协议判定不依赖 URL 路径中是否含 `anthropic` 字样。** 如果使用反向代理把 Anthropic 服务包装成不含 anthropic 的路径，仍需将 Provider 设置为 `anthropic-compatible`，否则 Studio 会按 OpenAI 协议发请求并得到 401 错误。

这一逻辑由 `server/agent/provider-setup.ts` 的 `resolveProtocol()` 函数实现。

## 双车道路由

RDK Studio 设计了 Thinking 与 Quick 两套模型槽位：

| 车道 | 触发场景 | 推荐模型 |
|---|---|---|
| Thinking | 主对话、复杂推理、需要硬件感知与工具调用 | Claude Sonnet、qwen-plus、doubao-seed-pro 等 |
| Quick | 工具结果总结、文件浏览总结、简短问答 | gpt-4o-mini、qwen-turbo、doubao-seed-lite 等 |

在 AI 引擎区域顶部有两个独立下拉框，分别为 Thinking 和 Quick 指派模型条目。两个车道可以使用不同厂商。

如果只配置 Thinking 车道、Quick 车道空缺，所有任务都会走 Thinking 车道，Token 成本会显著上升（5~10 倍）。强烈建议同时配置两个车道，Quick 车道选择便宜的小模型即可。

## 测试连通性

每个模型条目可以独立测试连通性：

| 操作 | 路径 |
|---|---|
| 测试条目 | 模型条目右侧的 *测试连通性* 按钮 |
| 返回成功 | 显示模型列表，证明 Provider、Model、API Key、Base URL 配置正确 |
| 返回失败 | 显示具体错误码（401、403、404、timeout 等），按错误码排查 |

## 高级参数

| 参数 | 作用 | 默认值 |
|---|---|---|
| Temperature | 采样温度，0 完全确定，越高越创造性 | 0.7 |
| Top-P | 核采样阈值，控制生成多样性 | 1.0 |
| Thinking 默认开 | 此模型是否默认走深度思考模式 | 跟随系统 |
| Reasoning visibility | 推理过程是否显示 | inline |

调整这些参数会影响模型的回复风格与质量。建议保持默认值，仅在确实需要时调整。

## 配置导入与导出

模型条目可以批量导入导出，详见 [3.12.5 配置导入与导出](./5-import-export.md)。
