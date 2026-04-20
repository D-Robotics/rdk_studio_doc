---
sidebar_label: '5.1 AI 助手无响应'
title: 5.1 AI 助手无响应
---

# 5.1 AI 助手无响应

## 典型现象

在 AI 对话中发送消息后，发送按钮变灰、没有任何输出，或控制台报：

- `401 Unauthorized`
- `403 Forbidden`
- `Connection refused`

## 快速判断

进入 *配置中心 → AI 引擎*，找到当前激活的模型条目，点击 *测试连通性*：

- **测试通过** → 不是配置问题，跳到"配置正确但仍无响应"
- **测试失败** → 按错误码排查：
  - 401 / 403：重新填写 API Key
  - 404：检查 Base URL 末尾是否有多余的 `/v1`
  - timeout：国内网络可能需要代理或镜像
  - DNS 解析失败：公司网络可能未放行该域名

## 排查清单

| 检查项 | 方法 |
|---|---|
| API Key 有效 | 配置中心 → AI 引擎找到当前激活条目，确认 Key 没空、没含中文引号、没多余空格；到模型厂商控制台确认未撤销 |
| 余额充足 | 多数厂商默认免费额度仅几百万 token，超出直接 402 |
| 服务可达 | 终端运行 `curl -i -H "Authorization: Bearer YOUR_KEY" "${BASE_URL}/v1/models"`，预期返回 200 OK 和模型列表 |
| 模型 ID 精确匹配 | 模型名必须一字不差，常见错误：`claude-sonnet` 错 → `claude-sonnet-4-20250514` 对；`gpt4o-mini` 错 → `gpt-4o-mini` 对 |
| Provider 字段正确 | Provider 决定协议，不看 URL。`anthropic` / `anthropic-compatible` 走 Anthropic Messages（`x-api-key`）；其他走 OpenAI Completions（`Authorization: Bearer`） |

## 配置正确但仍无响应

| 现象 | 原因 | 解决 |
|---|---|---|
| 几秒内秒断 | Base URL 末尾多了 `/v1` 被重复拼接 | 末尾去掉 `/v1`（除非你用固定路径反代） |
| 一直卡转圈超过 60 秒 | 模型走推理（thinking）模式但前端未显示 | 配置中心把 *Reasoning visibility* 临时改为 `inline` 观察 |
| `<think>...</think>` 出现在正文 | OpenAI 兼容协议下 reasoning 被发到上游 | Studio 会自动用 InlineThinkingRouter 解析；仍露出则升级到最新版 |
| 单条消息算清零 | Agent 单轮上限被卡 | 升级到最新版 RDK Studio |

## 关于协议判定

协议判定**只看 Provider 字段**，不会根据 URL 里有无 `anthropic` 字样自动切换。如果使用反向代理把 Anthropic 服务包装成不含 anthropic 的路径，仍需将 Provider 设置为 `anthropic-compatible`，否则 Studio 会按 OpenAI 协议发请求并得到 401。

这一逻辑由 `server/agent/provider-setup.ts` 的 `resolveProtocol()` 决定。

## 永久解决

- 在配置中心完成配置后 Studio 自动持久化到本机配置目录，换设备无需重填
- 关注 AI Dock 右上角 Token 用量胶囊的配额预警
- 团队场景使用配置导出生成 JSON 给同事一键导入
