---
sidebar_label: '3.16.1 rdkstudio'
title: 3.16.1 rdkstudio
---

# 3.16.1 rdkstudio

`rdkstudio` 是 RDK Studio 的命令行工具。启用后，你可以在终端里查看设备、执行简单命令、查看文件，或把一段问题交给 Moss 分析。

![rdkstudio 常用命令示意：进入交互模式、单次提问、查看设备、执行命令、查看文件](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/cli-rdkstudio-help.png)

## 什么时候用

| 你想做什么 | 常用命令 |
|---|---|
| 确认命令可用 | `rdkstudio --version` |
| 查看已添加设备 | `rdkstudio device list` |
| 让 Moss 分析一个问题 | `rdkstudio "查看当前设备状态"` |
| 在设备上执行一条命令 | `rdkstudio exec "uname -a"` |
| 查看设备目录 | `rdkstudio file list /userdata` |

涉及真实设备的命令需要设备能 SSH 登录；涉及 Moss 对话的命令需要模型配置可用。

## 启用命令行

1. 打开 RDK Studio 桌面客户端。
2. 进入 *配置中心 → 应用与更新*。
3. 找到"命令行工具 rdkstudio"。
4. 点击 *启用命令行*；如果已经启用过，可以点击 *重新启用*。

Windows 启用后需要关闭当前终端再新开一个。macOS（Apple Silicon）通常当前终端就能使用；如果提示 `command not found`，新开终端或运行 `hash -r` 后再试。

## 第一次验证

```bash
rdkstudio --version
rdkstudio device list
```

`--version` 能输出版本号，说明命令已经能被终端找到。`device list` 如果提示没有设备，说明 CLI 正常，只是还没有添加设备。

需要查看完整帮助时，再运行：

```bash
rdkstudio --help
rdkstudio device --help
```

## 添加和使用设备

添加设备时填写设备的 Host / IP。命令会在终端里提示输入 SSH 密码，密码不会显示在屏幕上。

```bash
rdkstudio device add <设备 IP>
rdkstudio device list
```

设备添加成功后，可以执行单条命令或查看目录：

```bash
rdkstudio exec "uname -a"
rdkstudio file list /userdata
```

`exec` 适合短命令。安装软件、编译、长时间运行任务这类操作，建议回到桌面端 AI Dock 或终端里处理，进度和错误更容易看清楚。

## 使用 Moss 对话

如果模型配置已经可用，可以直接把问题交给 Moss：

```bash
rdkstudio "查看当前设备状态"
cat error.log | rdkstudio --pipe
```

如果提示模型、API、URL 或访问密钥错误，先回到桌面客户端的 *配置中心 → AI 引擎* 检查模型配置。

## 配置来源和安全

| 配置方式 | 适合场景 |
|---|---|
| 桌面客户端配置 | 日常使用，最省事 |
| 命令行参数 | 临时切换一次模型或服务地址 |
| 环境变量 | 自动化脚本或临时终端会话 |
| `rdkstudio config` | 管理 CLI 的普通本地偏好 |

访问密钥建议在桌面客户端的 AI 引擎里配置，或使用环境变量。不要把真实密钥写进文档、脚本、截图或聊天内容。

需要临时换模型时，可以这样写：

```bash
rdkstudio --provider openai-compatible --model qwen3.6-plus "总结当前目录"
```

`rdkstudio config` 适合查看或修改普通本地偏好，不建议用它保存访问密钥。

## 常用子命令

| 命令 | 作用 |
|---|---|
| `device list` | 列出已知设备 |
| `device add <host> [user] [port]` | 添加设备 |
| `device connect <id>` | 重新连接设备 |
| `device remove <id>` | 从本机移除设备记录 |
| `exec <command> --device <device>` | 在指定设备远程执行命令 |
| `file list <remote-path>` | 列远程目录 |
| `file read <remote-path>` | 读取远程文件并在终端输出 |
| `file write <remote-path> <content>` | 写入一小段文本到设备文件 |
| `skill list` | 列出当前工作区扫描到的技能 |
| `config list / set / get / delete` | 配置项管理 |

完整参数以 `rdkstudio --help` 和各子命令的 `--help` 为准。

## 依赖条件

| 命令 | 需要什么 |
|---|---|
| `rdkstudio --version`、`rdkstudio --help` | 不需要设备，也不需要模型 |
| `rdkstudio device list`、`rdkstudio config list`、`rdkstudio skill list` | 不需要设备；只读取本机配置或当前目录 |
| `rdkstudio device add <host>` | 需要设备能 SSH 登录 |
| `rdkstudio exec ...`、`rdkstudio file ...` | 需要先添加设备，并能通过 SSH 连接 |
| `rdkstudio`、`rdkstudio "问题"`、`rdkstudio --pipe` | 需要可用模型配置 |

如果设备命令提示找不到设备，先运行 `rdkstudio device list`；如果 SSH 连接失败，先确认 Host / IP、用户名、密码和网络。

## 交互模式命令

进入 `rdkstudio` 交互模式后，可以使用斜杠命令：

| 命令 | 作用 |
|---|---|
| `/help` | 帮助 |
| `/clear` | 清空当前会话参考信息 |
| `/reset` | 重置 Moss 状态 |
| `/history` | 查看本次会话历史 |
| `/sessions` | 列出会话 |
| `/model` | 临时切换模型 |
| `/quit`（或 Ctrl + D） | 退出 |
