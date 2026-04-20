---
sidebar_label: '3.2.2 Device Awareness and Tool Invocation'
title: 3.2.2 Device Awareness and Tool Invocation
---

# 3.2.2 Device Awareness and Tool Invocation

The Agent in AI Dock is not a generic chatbot—it knows exactly which board you're currently connected to and can invoke over 50 tools to perform real operations. These two capabilities concretely demonstrate how "AI doesn't just write code—it can directly interact with hardware on the board."

## Device Awareness

Before each conversation begins, the D-Moss Agent automatically injects a profile of the currently active device as contextual information:

- Board model (RDK X3 / X5 / S100)  
- Image version and kernel version  
- Current CPU, memory, and disk status  
- Network interfaces and IP addresses  
- Running status of critical services such as TROS and OpenClaw  

This information is automatically detected by Studio upon the first device connection and updated via heartbeat. Developers no longer need to repeatedly state at the start of every conversation, "My board is an X5 running RDKOS 3.4.1"—the Agent already knows.

Practical implications of device awareness:

- When a user asks, "What’s the BPU utilization?", the Agent selects the appropriate command based on the board type: for X5, it prioritizes `hrut_bpuprofile -b 0`; for certain X3 images, it uses `hrut_smi`. If uncertain, it safely falls back to the universal command `cat /sys/devices/system/bpu/bpu0/ratio`, which works across all boards without relying on any pre-installed proprietary tools.
- When a user says, "Install a ROS 2 package," the Agent recognizes that the board runs the Humble distribution and provides the corresponding `apt` command instead of one for Foxy.
- When a user asks, "Why did HBM loading fail?", the Agent knows the current board is an X5 (Bayes architecture) and proactively reminds the user that HBM must be compiled using the Bayes toolchain.

## Tool Invocation

The D-Moss Agent has access to more than 50 tools, organized by category:

| Category | Approx. Number of Tools | Example Tools |
|---|---|---|
| Device Execution | 8 | `device_exec`, `device_file_read/write/list` |
| On-board OpenClaw Collaboration | 6 | `board_openclaw_install`, `board_openclaw_health`, `board_openclaw_delegate` |
| ROS / TROS | 5 | Node listing, topic inspection, launch execution |
| File Transfer | 4 | SFTP upload/download, directory sync |
| Web Search | 3 | Multi-search engine, Tavily, embedded browser |
| Knowledge Retrieval | 4 | RDK official documentation, forums, skill registry |
| Device Management | 5 | Add / switch / remove devices, network probing |
| Multi-channel Messaging | 3 | Sending messages via Feishu and WeChat |
| Meta-tools | 8+ | Task orchestration, file attachments, voice, token usage reports, etc. |

Tools are **lazy-loaded**: only basic tools are loaded at session start; device-specific tools are loaded once a device is connected; and OpenClaw collaboration tools are loaded only after OpenClaw deployment completes. This on-demand loading mechanism keeps the Agent's context window clean and avoids overwhelming it with all tool descriptions at once.

## Transparent Agent

Every tool invocation is fully visible to the developer: the executed command, its parameters, and raw output are streamed in real time within the AI Dock conversation panel and simultaneously appear in the *Remote Terminal* tab of the current session. You can interrupt execution at any time by pressing Esc or clicking "Stop All."

![AI Dock Device Health Check Task: The Agent breaks down the task into numbered steps (1. Requirement Understanding / 2. Key Metric Planning / 3. Hardware & Behavior Capture / 4. Dual-axis Summary / 5. Report Filling & Action Insights / 6. Binary Conclusion), invoking tools like `device_diagnose`, `device_exec`, and `device_openclaw_status` along the way. Each tool call expands to show the command, parameters, and raw output. The response concludes with three structured tables: "Hardware Status (All Normal)", "Network Status (Detected)", and "Critical Service Status (OpenClaw Running Normally)".](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/showcase-case1-healthcheck.png)

The image above shows a "Device Health Check" task. The panel simultaneously displays: task breakdown, SSH commands, raw outputs, structured tables, and "End Current / Stop All" buttons.

For end-to-end practical examples, see [1.6 AI Dock Demo](../../1-product-intro/6-ai-showcase.md).

If the Agent selects a command that doesn’t match your expectation, you can explicitly specify the desired tool or file in the next turn of conversation (e.g., "Use my own launch file"), and the Agent will adjust its strategy accordingly.