---
sidebar_label: '1.5 Release Notes'
title: 1.5 Release Notes
---

# 1.5 Release Notes

## Version described in the current manual

This manual describes the **RDK Studio 1.1.x** series. If the client interface you see differs significantly from what is described in this manual, it is recommended to upgrade the client first.  
For download links and user manuals of older RDK Studio client versions, please refer to the [RDK Studio User Guide](https://developer.d-robotics.cc/rdk_doc/en/RDK_Studio).

## Version check and upgrade

Open the desktop client, navigate to *Settings Panel → Apps & Updates*. Here you can view the current version, check for the latest release, and perform a one-click upgrade. Studio upgrades will retain all local configurations (device list, model entries, installed skills, chat history) without any data loss.

The version of the CLI tool can be checked using the following commands:

```bash
rdkstudio --version
dmoss-agent --version
```

> `@dmoss/agent` is the npm package name. After installation, the command name is `dmoss-agent` (without the `@` prefix).

Upgrading the CLI:

```bash
# rdkstudio is managed by the desktop client; re-enable it to sync to the latest version
# Settings Panel → Apps & Updates → Command Line Tools → Re-enable

# Upgrade dmoss-agent via npm
npm install -g @dmoss/agent@latest
```

## Changelog

### Version: v1.1.2

#### Updates

- **Remote Desktop (VNC)**

    Fixed an issue where the desktop installation version would immediately report "Connection closed (code 1006)" when connecting to the remote desktop. Both root causes (service port fallback (8788+/49152+) and file:// cross-origin SSO Cookie) have been addressed.

- **Remote Desktop**

    The noVNC handshake URL has been changed to follow Electron's actual backend port, and the SSO session mirror is attached to the WebSocket handshake query, ensuring consistent behavior between packaged and development environments.

### Version: v1.0.10

#### Updates

- **Studio LAN Mesh**

    This can be toggled in Settings → Device Connection, synchronized with persistent configuration and API. If `RDK_STUDIO_MESH=false` is set, the UI will be disabled with a prompt to change the environment variable and restart.  
    The Studio Mesh port uses `RDK_STUDIO_MESH_PORT` (default 19090), separate from the standalone CLI's `DMOSS_MESH_PORT`, preventing port conflicts in the same environment.

### Version: v1.0.9

#### Updates

- **Moss Memory**

    - Preference and device/project-related follow-up questions now support multi-language keyword retrieval (Chinese/English) merged for more stable cross-language recall.
    - Lightweight security check before writing to memory.
    - Prompts to organize when the index size approaches the upper limit.

- **Security & Persona**

    - Clearly informs users when dangerous or unauthorized tools are intercepted, preventing command forgery to fake results.
    - System-managed configuration files do not leak content to users.

- **Multimodal & AI Dock**

    - Attachments provide type-specific hints to the model and input area.
    - Readable summaries for bubbles when only attachments are sent.
    - Clearer guidance for handling attachments from external channels.

- **@dmoss/agent CLI**

    Automatically loads `.env` files upwards (including monorepo root). When local keys match Studio, `npm run cli` can be used directly.

- **Development**

    Updates to the `ai-dock-capability-probe` capability probe scenarios and acceptance criteria.

## Contact Us

- 🌐 [Developer Community](https://developer.d-robotics.cc/en)
- 📧 [Technical Support Email](mailto:developer@d-robotics.cc)
- 📱 [Official Technical Discussion Group](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=dd2ra5d5-a239-4b4d-bc26-46e3374d1428)