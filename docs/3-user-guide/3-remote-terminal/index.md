---
sidebar_label: '3.3 远程终端'
title: 3.3 远程终端
---

# 3.3 远程终端

![远程终端界面：多标签 SSH 会话，顶栏显示当前设备身份与连接状态](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/05-terminal.png)

RDK Studio 内置的全功能 SSH 终端，基于 WebSocket + Socket.IO + PTY 实现。功能上等同于一个完整的 SSH 客户端（vim、htop、tmux 等基于 PTY 的工具都能正常运行），但与 Studio 其他模块共享设备状态与 Agent 上下文——这意味着 AI Agent 通过 `device_exec` 调用的命令也会在终端中实时显示，开发者可以完整看到 AI 在做什么。

## 本节包含

- [3.3.1 多标签 SSH 会话](./1-multi-tab-ssh.md)：每个标签独立的 SSH 会话与 PTY 进程
- [3.3.2 断线重连机制](./2-reconnect.md)：网络抖动、设备短暂断电时的自动恢复
- [3.3.3 串口连接](./3-serial.md)：串口与 SSH 在同一终端 tab 内的统一入口
