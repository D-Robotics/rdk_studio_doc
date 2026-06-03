---
sidebar_label: '3.16.2 dmoss-agent'
title: 3.16.2 dmoss-agent
---

# 3.16.2 dmoss-agent

`@dmoss/agent` is a standalone NPM package aimed at automation. For normal RDK Studio workflows, prefer the previous section’s `rdkstudio`.

Consider `dmoss-agent` for CI/CD, Docker, or headless scripts only.

## Install

```bash
npm install -g @dmoss/agent
```

Requires Node.js 20+ (22.x recommended).

Verify:

```bash
dmoss-agent --version
```

## Configuration

Set the model via environment variables or `~/.dmoss-agent/config.json`. Keep API keys in CI secrets or env—not in git.

```bash
export DMOSS_API_KEY=<your-api-key>
export DMOSS_MODEL=qwen3.6-plus
export DMOSS_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
export DMOSS_WORKSPACE=/path/to/your/project
```

Optional variables:

| Variable | Purpose |
|---|---|
| `DMOSS_EXEC_BACKEND` | Command backend: `local` or `remote` |
| `DMOSS_DEVICE_*` | Remote device (IP, user, keys, …) |
| `DMOSS_WEIXIN_ILINK_TOKEN` | WeChat iLink channel token |

## Modes

```bash
# Interactive
dmoss-agent

# One-shot
dmoss-agent "Organize this directory"

# Pipe
echo "Explain this code" | dmoss-agent
```

## Extra flags

`@dmoss/agent` adds automation-oriented switches beyond `rdkstudio`:

| Flag | Purpose |
|---|---|
| `--weixin` | Enable WeChat iLink; CLI acts as bot server |
| `--mesh` | Join Agent Mesh for multi-host work |
| `--debug` / `--quiet` | Verbosity |
| `--log-level=<level>` | Fine-grained logging |
| `--json` | Machine-readable output |
| `--no-color` | Disable ANSI color |
| `--help`, `-h` | Help |
| `--version`, `-v` | Version |

## Interactive commands

| Command | Action |
|---|---|
| `/model` | Switch model |
| `/models` | List models |
| `/memory` | Inspect agent memory |
| `/skills` | List loaded skills |
| `/quit` | Exit |

## vs `rdkstudio`

| Aspect | `rdkstudio` | `@dmoss/agent` |
|---|---|---|
| Install | Desktop enables + PATH | `npm install -g` |
| Config | Shared with desktop | Env or `~/.dmoss-agent/config.json` |
| Devices | `device` subcommands | Not supported |
| WeChat | Not supported | `--weixin` |
| Mesh | Not supported | `--mesh` |
| Best for | Daily dev + light automation | CI / Docker / pure agent |

## Picking between them

| Scenario | Choice |
|---|---|
| CI code review | `@dmoss/agent` (no desktop dependency) |
| Agent inside Docker | `@dmoss/agent` (smaller image story) |
| WeChat bot from scripts | `dmoss-agent --weixin` |
| Everyday terminal tasks | `rdkstudio` (shared config) |
