---
sidebar_label: '1.3 Feature Matrix'
title: 1.3 Feature Matrix
---

# 1.3 Feature Matrix

RDK Studio provides 15 functional modules covering four scenarios: device onboarding, remote development, AI collaboration, and system configuration. This section presents the complete feature matrix as a starting point for reference; detailed usage instructions for each module can be found in [3. User Guide](../3-user-guide/1-workbench/index.md).

![Desktop client main interface: IconRail on the left aggregates all feature tabs, the center displays the workspace of the currently active device, and the AI Dock is persistently docked at the bottom](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/01-dashboard.png)

## 15 Functional Modules

| Module | One-sentence Description | See |
|---|---|---|
| Workspace | Overview of hardware metrics and system information for the currently active device | [3.1](../3-user-guide/1-workbench/index.md) |
| AI Chat | Entry point for D-Moss Agent—a natural language-driven development assistant | [3.2](../3-user-guide/2-ai-chat/index.md) |
| Remote Terminal | Multi-tab SSH terminal with automatic reconnection and shared display for AI tool invocation | [3.3](../3-user-guide/3-remote-terminal/index.md) |
| File Manager | Visual browsing, uploading, downloading, and online editing of board-side files | [3.4](../3-user-guide/4-file-manager/index.md) |
| Remote IDE | Browser-based VS Code powered by code-server, operating directly on the board | [3.5](../3-user-guide/5-remote-ide/index.md) |
| Remote Desktop | Browser-native remote desktop based on NoVNC | [3.6](../3-user-guide/6-remote-desktop/index.md) |
| System Flashing | One-stop flashing for TF cards / eMMC / RDK S100 xburn | [3.7](../3-user-guide/7-system-flashing/index.md) |
| Network Configuration | Remotely configure board-side Wi-Fi without needing a keyboard or mouse connected to the board | [3.8](../3-user-guide/8-network-config/index.md) |
| Device Management | Multi-device list, switching, automatic device recognition, and import/export of configurations | [3.9](../3-user-guide/9-device-management/index.md) |
| OpenClaw On-board Agent | Deployment and coordination of on-board AI runtime | [3.10](../3-user-guide/10-openclaw/index.md) |
| Skill | Operational strategies for Agents—installable, user-created, and community-shared | [3.11](../3-user-guide/11-skill/index.md) |
| Configuration Center | Unified entry point for global settings including account, AI engine, device connections, and UI appearance | [3.12](../3-user-guide/12-config-center/index.md) |
| Multi-channel Integration | Integrate Studio’s AI Chat into communication tools like Feishu and WeChat | [3.13](../3-user-guide/13-channels/index.md) |
| Monitoring & Operations | Task queue and token usage statistics | [3.14](../3-user-guide/14-monitoring/index.md) |
| Command-Line Interface (CLI) | `rdkstudio` and `@dmoss/agent`, supporting automation and CI scenarios | [3.15](../3-user-guide/15-cli/index.md) |

## Comparison of Distribution Forms

RDK Studio is available in two distribution forms:

| Form | Suitable Scenario | Key Capabilities |
|---|---|---|
| Desktop Client | Primary daily development scenario | Full feature set, including modules requiring native OS capabilities such as flashing, serial console, and remote desktop |
| Command-Line Interface (CLI) | Automation scripts, CI/CD, batch operations, remote sessions | No GUI dependency; supports piping; shares device list and model configurations with the desktop client |

The CLI is further divided into two separate commands:

- **`rdkstudio`**: Product CLI that shares device and model configurations with the desktop client. Run commands, inspect files, and invoke AI directly in the terminal, seamlessly integrated with the desktop client.
- **`@dmoss/agent`**: Standalone NPM package providing a pure Agent runtime. Ideal for Docker images, CI containers, and remote scripting scenarios without dependency on the desktop client.

For detailed differences, installation methods, and typical usage of both CLIs, see [3.15 Command-Line Tools](../3-user-guide/15-cli/index.md).

## Module Compatibility Across Distribution Forms

| Module | Desktop Client | CLI |
|---|---|---|
| Workspace | Supported | Not supported (GUI exclusive) |
| AI Chat | Supported | Supported |
| Remote Terminal | Supported | Supported (via pipe and interactive modes) |
| File Manager | Supported | Supported |
| Remote IDE | Supported | Not supported (GUI exclusive) |
| Remote Desktop | Supported | Not supported (GUI exclusive) |
| System Flashing | Supported | Not supported (requires native disk scanning) |
| Network Configuration | Supported | Supported |
| Device Management | Supported | Supported |
| OpenClaw On-board Agent | Supported | Supported |
| Skill | Supported | Supported |
| Configuration Center | Supported | Partially supported (via `rdkstudio config`) |
| Multi-channel Integration | Supported | Only via `@dmoss/agent --weixin` |
| Monitoring & Operations (Task Queue) | Supported | Not supported (GUI exclusive) |
| Command-Line Tools | Built-in launch entry | CLI itself |

The CLI does not support GUI-related capabilities (Workspace, IDE, Remote Desktop, visual System Flashing interface, Task Queue). Core functionalities—including AI Chat, Terminal, File Management, Device Management, OpenClaw collaboration, and Skills—are fully supported in both forms.