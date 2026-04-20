---
sidebar_label: '3.15.1 rdkstudio'
title: 3.15.1 rdkstudio
---

# 3.15.1 rdkstudio

![rdkstudio device list 输出：列出已连接的 RDK X5 设备](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/cli-device-list.png)

`rdkstudio` 是 RDK Studio 的产品 CLI，与桌面客户端共享设备列表与模型配置。开发者可以在终端中跑命令、查文件、调 AI，与桌面端无缝衔接。

## 启用 CLI

`rdkstudio` 不通过 npm 单独安装。它由桌面客户端管理，启用步骤：

1. 打开 RDK Studio 桌面客户端
2. 进入 *配置中心 → 应用与更新*
3. 找到"命令行工具 rdkstudio"
4. 点击 *启用命令行*（如已启用、想覆盖，点 *重新启用*）

平台相关注意：

- **Windows**：成功后**关闭当前终端再新开**——旧窗口可能读不到更新后的 PATH
- **macOS**：多数情况当前终端即可；若提示 `command not found`，运行 `hash -r` 或新开终端
- **Linux**：通常需要新开 shell 会话或 `source ~/.bashrc`

## 验证安装

```bash
rdkstudio --version
rdkstudio --help
```

正常情况下打印版本号（与桌面客户端版本对应）和帮助信息。`rdkstudio --help` 的典型输出：

```
RDK Studio CLI v1.1.0

常见任务（按出现顺序）
  · 添加 RDK 开发板         rdkstudio device add 192.168.1.100
  · 验证设备列表             rdkstudio device list
  · 配置模型 (API key)       vim ~/.rdkstudio/agent-config.json
                            · export OPENAI_API_KEY=sk-...
  · 在设备上执行命令         rdkstudio exec "uname -a"
  · 直接与 Agent 自然对话    rdkstudio（进入交互模式）
                            · rdkstudio "帮我看一下板上 ROS 节点"（单次提问）

用法:
  rdkstudio                          进入交互对话
  rdkstudio "你的问题"                单次提问后退出
  rdkstudio chat [session-id]        指定会话 ID 对话
  rdkstudio device list|add|connect|remove   设备管理
  rdkstudio exec <command>           在设备上执行命令
  rdkstudio file list|read|write     设备文件操作
  rdkstudio skill list               查看技能列表
  rdkstudio config [list|set|get]    CLI 配置管理
  rdkstudio --version                显示版本号

选项:
  --provider <name>     模型供应商（默认 openai-compatible）
  --model <name>        模型名称
  --base-url <url>      API 地址
  --api-key <key>       API 密钥
  --agent <id>          Agent ID（默认 main）
  --pipe                管道模式（从 stdin 读取，纯文本输出）
  --approval            启用工具审批（on-miss 模式）
  --approval always     每次工具调用都需审批
```

子命令加 `--help` 可以看更详细的示例，例如 `rdkstudio device --help`。

## 配置共享与独立

| 模式 | 行为 |
|---|---|
| 默认 | `rdkstudio` 自动复用桌面客户端的模型配置（`~/.rdkstudio/agent-config.json`）和设备列表 |
| 独立配置 | 创建 `~/.rdkstudio/cli-config.json`，CLI 优先使用这份；删除该文件即恢复共享 |

如果需要给 CLI 单独配 API Key（例如 CLI 走另一个模型）：

```bash
rdkstudio config set provider qwen
rdkstudio config set apiKey sk-xxxx
rdkstudio config set model qwen3.6-plus
```

或直接编辑 `~/.rdkstudio/cli-config.json`。

## 子命令清单

| 命令 | 作用 |
|---|---|
| `device list` | 列出已知设备（与桌面客户端共享） |
| `device add <host> [user] [port]` | 添加设备 |
| `device connect <id>` | 连接设备并设为当前激活 |
| `device remove <id>` | 移除设备 |
| `exec <command> --device <id\|host>` | 在指定设备远程执行命令 |
| `file list <remote-path>` | 列远程目录 |
| `file read <remote-path>` | 读远程文件输出到 stdout |
| `file write <local> <remote>` | 上传本地文件到远程 |
| `skill list` | 列出当前工作区扫描到的技能 |
| `config list \| set \| get \| delete` | 配置项管理 |

## 常用 flag

| flag | 用途 |
|---|---|
| `--provider <name>` | 临时切换厂商（仅本次） |
| `--model <id>` | 临时切换模型 |
| `--base-url <url>` | 临时改 base URL |
| `--api-key <key>` | 临时换 Key |
| `--agent <type>` | 选择 Agent 类型（默认 D-Moss） |
| `--pipe` | 从 stdin 读输入 |
| `--approval` / `--approval always` | 工具审批模式（始终弹确认） |
| `--help`、`-h` | 帮助 |
| `--version`、`-v` | 版本 |

## 三种使用模式

| 模式 | 命令 |
|---|---|
| 交互模式（REPL） | `rdkstudio` |
| 单次提问 | `rdkstudio "查看当前设备的 BPU 占用率"` |
| 管道输入 | `cat error.log \| rdkstudio --pipe` |
| 指定会话 | `rdkstudio chat <session-id>` |

## 交互模式内的斜杠命令

进入 `rdkstudio` 交互模式后，可以使用斜杠命令：

| 命令 | 作用 |
|---|---|
| `/help` | 帮助 |
| `/clear` | 清空当前会话上下文 |
| `/reset` | 重置 Agent 状态 |
| `/history` | 查看本次会话历史 |
| `/sessions` | 列出所有会话 |
| `/model` | 临时切换模型 |
| `/quit`（或 Ctrl + D） | 退出 |
