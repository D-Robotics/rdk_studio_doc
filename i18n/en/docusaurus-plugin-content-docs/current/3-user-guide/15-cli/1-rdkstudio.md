---
sidebar_label: '3.15.1 rdkstudio'
title: 3.15.1 rdkstudio
---

# 3.15.1 rdkstudio

![rdkstudio device list output: lists connected RDK X5 devices](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/cli-device-list.png)

`rdkstudio` is the official CLI for RDK Studio, sharing the same device list and model configurations with the desktop client. Developers can run commands, inspect files, interact with AI—all directly from the terminal—seamlessly integrated with the desktop application.

## Enabling the CLI

`rdkstudio` is **not installed separately via npm**. It is managed by the desktop client. To enable it:

1. Open the RDK Studio desktop client  
2. Go to **Settings Center → Apps & Updates**  
3. Locate **"Command-line tool rdkstudio"**  
4. Click **Enable Command Line** (if already enabled and you wish to overwrite, click **Re-enable**)

Platform-specific notes:

- **Windows**: After successful setup, **close your current terminal and open a new one**—older windows may not recognize the updated PATH.
- **macOS**: Usually works in the current terminal; if you see `command not found`, run `hash -r` or open a new terminal.
- **Linux**: Typically requires starting a new shell session or running `source ~/.bashrc`.

## Verifying Installation

```bash
rdkstudio --version
rdkstudio --help
```

These commands should print the version number (matching the desktop client) and help information. Typical output of `rdkstudio --help`:

```
RDK Studio CLI v1.1.0

Common Tasks (in order of appearance)
  · Add an RDK dev board          rdkstudio device add 192.168.1.100
  · Verify device list            rdkstudio device list
  · Configure model (API key)     vim ~/.rdkstudio/agent-config.json
                                 · export OPENAI_API_KEY=sk-...
  · Execute command on device     rdkstudio exec "uname -a"
  · Chat naturally with Agent     rdkstudio (enters interactive mode)
                                 · rdkstudio "Check ROS nodes on the board" (single query)

Usage:
  rdkstudio                          Enter interactive chat
  rdkstudio "your question"          Ask once and exit
  rdkstudio chat [session-id]        Chat with specified session ID
  rdkstudio device list|add|connect|remove   Device management
  rdkstudio exec <command>           Execute command on device
  rdkstudio file list|read|write     File operations on device
  rdkstudio skill list               List available skills
  rdkstudio config [list|set|get]    CLI configuration management
  rdkstudio --version                Show version

Options:
  --provider <name>     Model provider (default: openai-compatible)
  --model <name>        Model name
  --base-url <url>      API endpoint URL
  --api-key <key>       API key
  --agent <id>          Agent ID (default: main)
  --pipe                Pipe mode (read from stdin, plain-text output)
  --approval            Enable tool approval (on-miss mode)
  --approval always     Require approval for every tool call
```

Add `--help` to any subcommand for detailed examples, e.g., `rdkstudio device --help`.

## Shared vs. Independent Configuration

| Mode | Behavior |
|---|---|
| Default | `rdkstudio` automatically reuses the desktop client’s model config (`~/.rdkstudio/agent-config.json`) and device list |
| Independent | Create `~/.rdkstudio/cli-config.json`; CLI prioritizes this file. Delete it to revert to shared mode |

To assign a separate API key to the CLI (e.g., using a different model):

```bash
rdkstudio config set provider qwen
rdkstudio config set apiKey sk-xxxx
rdkstudio config set model qwen3.6-plus
```

Or edit `~/.rdkstudio/cli-config.json` directly.

## Subcommand Reference

| Command | Purpose |
|---|---|
| `device list` | List known devices (shared with desktop) |
| `device add <host> [user] [port]` | Add a new device |
| `device connect <id>` | Connect and activate a device |
| `device remove <id>` | Remove a device |
| `exec <command> --device <id\|host>` | Run command remotely on specified device |
| `file list <remote-path>` | List remote directory contents |
| `file read <remote-path>` | Read remote file and output to stdout |
| `file write <local> <remote>` | Upload local file to remote path |
| `skill list` | List skills detected in current workspace |
| `config list \| set \| get \| delete` | Manage CLI configuration entries |

## Common Flags

| Flag | Purpose |
|---|---|
| `--provider <name>` | Temporarily switch provider (this run only) |
| `--model <id>` | Temporarily switch model |
| `--base-url <url>` | Temporarily override base URL |
| `--api-key <key>` | Temporarily use a different API key |
| `--agent <type>` | Select Agent type (default: D-Moss) |
| `--pipe` | Read input from stdin |
| `--approval` / `--approval always` | Tool approval mode (always prompt for confirmation) |
| `--help`, `-h` | Show help |
| `--version`, `-v` | Show version |

## Three Usage Modes

| Mode | Command |
|---|---|
| Interactive (REPL) | `rdkstudio` |
| Single query | `rdkstudio "Check BPU utilization on current device"` |
| Piped input | `cat error.log \| rdkstudio --pipe` |
| Specified session | `rdkstudio chat <session-id>` |

## Slash Commands in Interactive Mode

Once inside the `rdkstudio` interactive shell, use slash commands:

| Command | Purpose |
|---|---|
| `/help` | Show help |
| `/clear` | Clear current session context |
| `/reset` | Reset Agent state |
| `/history` | View conversation history in this session |
| `/sessions` | List all sessions |
| `/model` | Temporarily switch model |
| `/quit` (or Ctrl + D) | Exit |