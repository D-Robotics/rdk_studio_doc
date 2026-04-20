---
sidebar_label: '3.10 OpenClaw On-Device Agent'
title: 3.10 OpenClaw On-Device Agent
---

# 3.10 OpenClaw On-Device Agent

![OpenClaw main panel: Real-time status badges for gateway/network/model at the top; on the right, configuration progress and four quick actions—"Restart Gateway," "View Logs," "Upgrade," and "Diagnose & Repair"](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/03-OpenClaw.png)

OpenClaw is an open-source AI Agent framework that can run independently on any Linux machine. RDK Studio deploys OpenClaw onto the RDK device as a resident AI runtime, managed by systemd as a long-running service. Meanwhile, the PC-side D-Moss Agent can collaborate with the on-device OpenClaw via an SSH tunnel—tasks automatically flow between both ends.

Core features of OpenClaw include: a long-running Node.js service, cross-session memory, multi-step workflows, tool invocation, and explicit state-machine-driven task checkpointing and resumption. Its design philosophy embodies an "operating system mindset"—separating the execution plane from the control plane and verifying command execution results rather than relying on model declarations.

This section serves as the complete reference for OpenClaw within Studio. Earlier sections (e.g., 1.2, 3.2) only briefly mention OpenClaw; all detailed mechanisms are elaborated here.

## This Section Includes

- [3.10.1 Overview and Use Cases](./1-overview.md): When you need OpenClaw—and when you don’t  
- [3.10.2 Deployment and Uninstallation](./2-deploy-uninstall.md): Full one-click deployment process and troubleshooting failures  
- [3.10.3 Main Panel and Sub-tabs](./3-main-panel.md): Detailed functionality of the six sub-tabs  
- [3.10.4 Collaboration Mechanism with D-Moss](./4-collab-with-dmoss.md): Physical link, tool families, and security design  
- [3.10.5 Task Delegation and Automatic Fallback](./5-task-delegation.md): Long-task delegation and self-recovery mechanisms when SSH is blocked  
- [3.10.6 Pairing and Security](./6-pairing-security.md): Pairing token for initial connection and security policies