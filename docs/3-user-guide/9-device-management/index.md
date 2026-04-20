---
sidebar_label: '3.9 设备管理'
title: 3.9 设备管理
---

# 3.9 设备管理

![设备连接设置页：局域网 Agent Mesh 开关、已保存的设备（含移除按钮）、添加设备入口、连接超时与开机自动连接](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/settings-device-connection.png)

设备管理是 RDK Studio 多设备并行的中枢。Studio 维护一份设备清单，每台已添加的设备包含连接信息、SSH 凭据、平台画像（型号、镜像、网卡列表等）、自定义备注。所有 tab 共享"当前激活设备"概念——切换设备后，远程终端、文件管理、IDE、远程桌面、AI Dock 全部自动跟随。

设备清单存储位置：

| 操作系统 | 路径 |
|---|---|
| Windows | `%USERPROFILE%\.rdk-studio\data\devices.json` |
| macOS / Linux | `~/.rdk-studio/data/devices.json` |

## 本节包含

- [3.9.1 设备列表与切换](./1-list-and-switch.md)：列表展示、三种切换方式、切换后的同步行为
- [3.9.2 自动设备识别](./2-auto-detect.md)：第一次接入时的探测项与对 AI 上下文的影响
- [3.9.3 在线状态监控](./3-online-monitoring.md)：心跳探测、离线判定、低频探测策略
- [3.9.4 配置导入与导出](./4-import-export.md)：跨机器同步设备列表与 SSH 认证方式
