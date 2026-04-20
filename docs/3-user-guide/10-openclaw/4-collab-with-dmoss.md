---
sidebar_label: '3.10.4 与 D-Moss 的协同机制'
title: 3.10.4 与 D-Moss 的协同机制
---

# 3.10.4 与 D-Moss 的协同机制

PC 端的 D-Moss Agent 与板端的 OpenClaw Agent 通过 SSH 隧道协同。本节描述底层物理链路、D-Moss 提供的 OpenClaw 工具家族、安全设计原则。

## 物理链路

```text
PC 端
├─ Studio 进程
│  └─ D-Moss Agent
│     └─ oc-bridge（SSH 隧道客户端，按需建立）
│           ↓
板端
├─ sshd（端口 22）
│  └─ 端口转发：远端 18789 → 本地 18789
│        ↓
└─ 127.0.0.1:18789
   └─ OpenClaw 网关进程
      └─ OpenClaw Agent（Node.js 长期服务）
```

OpenClaw 网关默认仅监听板端 `127.0.0.1:18789`，不绑定外部 IP。Studio 复用已建立的 SSH 通道做 TCP 端口转发，既保留安全性，又避免为 OpenClaw 单独开放公网端口。

## 长连接生命周期

| 阶段 | 行为 |
|---|---|
| 首次访问 OpenClaw | oc-bridge 建立 SSH 隧道，开始转发 |
| 持续访问 | SSH 通道保活，按需复用 |
| 所有持有者断开 | oc-bridge 延迟 60 秒后释放 SSH 连接 |
| 再次访问 | 重新建立 SSH 隧道 |

延迟 60 秒释放是为了避免短时间内频繁建立和销毁 SSH 连接。这一行为由环境变量 `RDK_OC_BRIDGE_IDLE_TEARDOWN_MS` 控制，默认 60000 毫秒。

## D-Moss 的 OpenClaw 工具家族

D-Moss Agent 提供 15+ 个以 `board_openclaw_` 开头的工具，封装了 OpenClaw 的全部能力。当用户在 AI Dock 中提到 OpenClaw 相关话题时，D-Moss 会按需调用这些工具：

| 工具 | 用途 |
|---|---|
| `board_openclaw_status` | 快速状态摘要 |
| `board_openclaw_health` | 结构化 JSON 健康检查 |
| `board_openclaw_check` | 全面体检（doctor 等价命令） |
| `board_openclaw_logs` | 拉取 OpenClaw 日志 |
| `board_openclaw_install` / `upgrade` / `uninstall` | 生命周期管理 |
| `board_openclaw_restart_gateway` | 重启网关进程 |
| `board_openclaw_model_switch` | 切换板端 OpenClaw 使用的模型 |
| `board_openclaw_feishu_config` | 配置板端的飞书通道凭据 |
| `board_openclaw_weixin_config` | 配置板端的微信通道凭据 |
| `board_openclaw_pairing_list` / `approve` / `reject` | 配对管理 |
| `board_openclaw_assess` | 评估某个任务是否适合板端执行 |
| `board_openclaw_delegate` | 把任务委派到板端 OpenClaw 自己的会话执行 |
| `board_openclaw_doctor` | 自动尝试修复常见问题 |

开发者通常不需要直接调用这些工具——在 AI Dock 中用自然语言描述需求即可，D-Moss 会自动选择合适的工具组合。

## 健康监控与自动重连

Studio Dashboard 上有 OpenClaw 健康徽章（绿 / 黄 / 红）：

- **绿**：OpenClaw 网关正常响应，模型 API 可达
- **黄**：网关响应慢或模型 API 出错，但仍可用
- **红**：网关无响应或 SSH 隧道断开

后台保活探测异常时，Studio 通知中心会弹出提示并自动尝试重连。多数情况下重连透明完成，开发者不需要干预。
