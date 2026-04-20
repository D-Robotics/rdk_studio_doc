---
sidebar_label: '3.2 AI Chat'
title: 3.2 AI Chat
---

# 3.2 AI Chat

![AI Dock and Quick Prompts: Top bar shows a connected RDK X5 device (root@192.168.128.10:22); the workspace center displays device overview and metrics; AI Dock is expanded at the bottom showing example questions; Quick/Deep Thinking lane toggle is in the bottom-left](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/ai-dock-focused.png)

AI Chat is the core module that distinguishes RDK Studio from generic remote development tools. The persistent AI Dock at the bottom of the screen not only supports natural language conversations but can also invoke over 50 tools to perform real-world operations (SSH commands, file transfers, document retrieval, hardware diagnostics), and features hardware awareness—AI knows the model, image version, and status of the currently active device.

![Real AI Dock conversation example: User asks "What are the core features of RDK Studio? Please give a brief introduction." Moss responds with five points (Full Device Lifecycle Management / All-in-One Development Environment / AI Development Toolchain / Multimodal Debugging Capabilities / Collaborative Extensibility). Bottom displays "25 seconds · 8.9k tokens"](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/ai-dock-rdk-intro.png)

## This Section Includes

- [3.2.1 Overview and Access](./1-overview-and-entry.md): Location of AI Dock, how to open it, and its relationship with other tabs  
- [3.2.2 Device Awareness and Tool Invocation](./2-device-aware-tools.md): How the Agent understands the current device and invokes tools to complete tasks  
- [3.2.3 Multi-Session Management](./3-multi-session.md): Design of one independent session per device and session persistence  
- [3.2.4 Attachments and Multimodal Input](./4-attachments.md): Uploading files, images, and screenshots for Agent analysis  
- [3.2.5 Slash Commands](./5-slash-commands.md): Shortcut commands to trigger special behaviors  
- [3.2.6 Dual-Lane Routing](./6-dual-lane.md): How the Thinking and Quick models automatically route requests