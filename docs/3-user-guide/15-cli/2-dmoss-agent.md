---
sidebar_label: '3.15.2 @dmoss/agent'
title: 3.15.2 @dmoss/agent
---

# 3.15.2 @dmoss/agent

`@dmoss/agent` 是独立的 NPM 包，提供纯 Agent 运行时。适用于"不需要 RDK Studio 桌面客户端，只想要一个能调用工具、执行任务的 AI Agent"的场景。典型用途：CI / CD、Docker 镜像、嵌入式脚本。

## 安装

```bash
npm install -g @dmoss/agent
```

要求：Node.js 20 及以上，推荐 22.x。

验证安装：

```bash
dmoss-agent --version
```

## 配置

通过环境变量或本地配置文件 `~/.dmoss-agent/config.json`：

```bash
export DMOSS_API_KEY=sk-xxxx
export DMOSS_MODEL=qwen3.6-plus
export DMOSS_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
export DMOSS_WORKSPACE=/path/to/your/project
```

可选环境变量：

| 变量 | 用途 |
|---|---|
| `DMOSS_EXEC_BACKEND` | 命令执行后端：`local`（本地）或 `remote`（远程设备） |
| `DMOSS_DEVICE_*` | 远程设备相关（IP、用户、密钥等） |
| `DMOSS_WEIXIN_ILINK_TOKEN` | 微信通道的 iLink Token |

## 三种使用模式

```bash
# 交互 REPL
dmoss-agent

# 单次提问
dmoss-agent "帮我整理这个目录"

# 管道
echo "解释这段代码" | dmoss-agent
```

## 独有 flag

`@dmoss/agent` 比 `rdkstudio` 有两个独有的 flag：

| flag | 用途 |
|---|---|
| `--weixin` | 启用微信 iLink 通道，CLI 进程作为微信 Bot 服务端 |
| `--mesh` | 加入 Agent Mesh，多机协作 |
| `--debug` / `--quiet` | 日志详细度 |
| `--log-level=<level>` | 精细控制 |
| `--json` | JSON 格式输出，便于程序解析 |
| `--no-color` | 关闭 ANSI 色彩 |
| `--help`、`-h` | 帮助 |
| `--version`、`-v` | 版本 |

## 交互内命令

| 命令 | 作用 |
|---|---|
| `/model` | 切换当前模型 |
| `/models` | 列出可用模型 |
| `/memory` | 查看当前 Agent 内存 |
| `/skills` | 列出已加载技能 |
| `/quit` | 退出 |

## 与 rdkstudio 的对比

| 维度 | `rdkstudio` | `@dmoss/agent` |
|---|---|---|
| 安装方式 | 桌面客户端启用 | npm install -g |
| 配置来源 | 与桌面客户端共享 | 独立（环境变量或本地配置） |
| 设备管理 | 支持（device 子命令） | 不支持 |
| 微信通道 | 不支持 | 支持（`--weixin`） |
| Mesh | 不支持 | 支持（`--mesh`） |
| 适合 | 日常开发与自动化 | CI / Docker / 纯 Agent 场景 |

## 何时选择 @dmoss/agent 而不是 rdkstudio

| 场景 | 选择 |
|---|---|
| 在 CI 流水线中跑代码审查 | `@dmoss/agent`（不依赖桌面客户端） |
| 在 Docker 镜像中部署 Agent | `@dmoss/agent`（镜像体积更小） |
| 需要长期运行的微信 Bot | `@dmoss/agent --weixin` |
| 日常终端中跑命令、查文件 | `rdkstudio`（配置复用更省事） |
