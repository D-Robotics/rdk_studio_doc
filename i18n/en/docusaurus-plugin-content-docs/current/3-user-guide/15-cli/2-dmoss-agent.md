---
sidebar_label: '3.15.2 @dmoss/agent'
title: 3.15.2 @dmoss/agent
---

# 3.15.2 @dmoss/agent

`@dmoss/agent` is a standalone NPM package that provides a pure Agent runtime. It is suitable for scenarios where "you don't need the RDK Studio desktop client and only want an AI Agent capable of invoking tools and executing tasks." Typical use cases include CI/CD, Docker images, and embedded scripts.

## Installation

```bash
npm install -g @dmoss/agent
```

Requirements: Node.js 20 or higher; Node.js 22.x is recommended.

Verify installation:

```bash
dmoss-agent --version
```

## Configuration

Via environment variables or the local configuration file `~/.dmoss-agent/config.json`:

```bash
export DMOSS_API_KEY=sk-xxxx
export DMOSS_MODEL=qwen3.6-plus
export DMOSS_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
export DMOSS_WORKSPACE=/path/to/your/project
```

Optional environment variables:

| Variable | Purpose |
|---|---|
| `DMOSS_EXEC_BACKEND` | Command execution backend: `local` (local machine) or `remote` (remote device) |
| `DMOSS_DEVICE_*` | Remote device-related settings (IP, user, key, etc.) |
| `DMOSS_WEIXIN_ILINK_TOKEN` | iLink Token for WeChat channel |

## Three Usage Modes

```bash
# Interactive REPL
dmoss-agent

# Single query
dmoss-agent "Help me organize this directory"

# Piped input
echo "Explain this code" | dmoss-agent
```

## Unique Flags

`@dmoss/agent` has two unique flags compared to `rdkstudio`:

| Flag | Purpose |
|---|---|
| `--weixin` | Enable WeChat iLink channel; CLI process acts as a WeChat Bot server |
| `--mesh` | Join Agent Mesh for multi-machine collaboration |
| `--debug` / `--quiet` | Control log verbosity |
| `--log-level=<level>` | Fine-grained log control |
| `--json` | Output in JSON format for programmatic parsing |
| `--no-color` | Disable ANSI colors |
| `--help`, `-h` | Show help |
| `--version`, `-v` | Show version |

## In-Session Commands

| Command | Function |
|---|---|
| `/model` | Switch current model |
| `/models` | List available models |
| `/memory` | View current Agent memory |
| `/skills` | List loaded skills |
| `/quit` | Exit session |

## Comparison with rdkstudio

| Aspect | `rdkstudio` | `@dmoss/agent` |
|---|---|---|
| Installation | Enabled via desktop client | `npm install -g` |
| Configuration source | Shared with desktop client | Independent (environment variables or local config) |
| Device management | Supported (`device` subcommand) | Not supported |
| WeChat channel | Not supported | Supported (`--weixin`) |
| Mesh | Not supported | Supported (`--mesh`) |
| Best suited for | Daily development and automation | CI / Docker / pure Agent scenarios |

## When to Choose @dmoss/agent Over rdkstudio

| Scenario | Choice |
|---|---|
| Running code reviews in CI pipelines | `@dmoss/agent` (no dependency on desktop client) |
| Deploying Agent inside Docker images | `@dmoss/agent` (smaller image footprint) |
| Long-running WeChat Bot | `@dmoss/agent --weixin` |
| Running commands or checking files in daily terminal usage | `rdkstudio` (configuration reuse is more convenient) |