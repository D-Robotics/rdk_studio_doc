---
sidebar_label: '3.10.1 Overview and Applicable Scenarios'
title: 3.10.1 Overview and Applicable Scenarios
---

# 3.10.1 Overview and Applicable Scenarios

OpenClaw is not a mandatory component of RDK Studio. This section helps developers determine **when OpenClaw needs to be installed and when it does not**, avoiding unnecessary deployment costs.

## Role Division Between D-Moss and OpenClaw

| Role | Deployment Location | Strengths |
|---|---|---|
| D-Moss Agent | Inside the PC-side Studio process | Powerful model inference, cross-device planning, long-context handling, invoking both PC-side and board-side tools |
| OpenClaw Agent | Long-running systemd service on the RDK board | Persistent on-board presence, offline autonomy, tight hardware integration, long-duration monitoring tasks |

Both are complete AI Agent runtimes; the difference lies in their deployment locations and the types of tasks they excel at.

## Scenario Assessment

| Scenario | Is OpenClaw Required? |
|---|---|
| Occasionally running commands via SSH | No—remote terminal is sufficient |
| Letting AI run commands (with PC online) | No—AI can directly use `device_exec` over SSH |
| Needing a persistent Agent on the board that continues operating even when the PC is powered off | Required |
| PC delegating task planning to the board itself | Required |
| Multi-board collaboration and cross-board orchestration | Required (each board must have OpenClaw installed) |
| 24/7 integration with WeChat or Feishu | Recommended to deploy on the board to avoid channel interruption when the PC is off |

In short: **Temporary debugging doesn’t require it; persistent operation, autonomous execution, and multi-board coordination do.**

## Typical Use Cases

### Scenario A: Long-Term On-Board Monitoring

> "Check the BPU temperature on the board every 5 minutes and automatically throttle if it exceeds 70°C."

D-Moss identifies this as a long-term monitoring task and delegates it to OpenClaw on the board. OpenClaw continuously executes this within its state machine, unaffected even if the PC is powered off. When the temperature threshold is triggered, OpenClaw notifies the PC in real time via an SSH tunnel (if the PC is online).

### Scenario B: 24/7 On-Board Bot Availability

> "Team members @mention the bot in our WeChat group to check board status—even after I’ve left work, it should still respond."

Deploy the WeChat integration directly on the board’s OpenClaw, which handles all WeChat messages. As long as the board has power and network connectivity, it operates independently without relying on any PC.

### Scenario C: Automatic Recovery

> "If a critical service on the board crashes, I want it to restart automatically."

OpenClaw itself is managed by systemd and automatically restarts if it crashes. Tasks running inside OpenClaw are persisted via a state machine and resume from the latest checkpoint after restart. This self-healing capability enables unattended, reliable board operation.

## Scenarios Unsuitable for OpenClaw

| Scenario | Reason |
|---|---|
| Board hardware resources are constrained (RAM < 1 GB) | OpenClaw itself consumes ~150 MB of memory |
| Board image lacks Node.js 22+ | OpenClaw depends on a relatively recent Node.js runtime |
| One-off tasks that don’t require persistence | Using D-Moss + remote terminal is simpler |
| Board cannot access external networks | Installation requires pulling packages from npm |

If your use case involves **short-term debugging with the PC always online**, you can skip installing OpenClaw entirely and rely solely on D-Moss + remote terminal.