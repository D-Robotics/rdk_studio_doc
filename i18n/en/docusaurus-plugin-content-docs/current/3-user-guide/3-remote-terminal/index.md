---
sidebar_label: '3.3 Remote Terminal'
title: 3.3 Remote Terminal
---

# 3.3 Remote Terminal

![Remote terminal interface: Multi-tab SSH sessions, with the top bar showing the current device identity and connection status](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/05-terminal.png)

RDK Studio includes a full-featured SSH terminal implemented using WebSocket + Socket.IO + PTY. Functionally equivalent to a complete SSH client (PTY-based tools such as vim, htop, and tmux all work properly), it shares device state and Agent context with other Studio modules—meaning commands invoked by the AI Agent via `device_exec` are also displayed in real time within the terminal, allowing developers to fully observe what the AI is doing.

## This section includes

- [3.3.1 Multi-tab SSH Sessions](./1-multi-tab-ssh.md): Independent SSH sessions and PTY processes for each tab  
- [3.3.2 Reconnection Mechanism](./2-reconnect.md): Automatic recovery during network fluctuations or brief device power outages  
- [3.3.3 Serial Connection](./3-serial.md): Unified access point for both serial and SSH connections within the same terminal tab