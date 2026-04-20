---
sidebar_label: '3.1 工作台'
title: 3.1 工作台
---

# 3.1 工作台

![工作台默认视图：顶部是身份徽章和设备型号，中间是指标条（MEM / TEMP / CPU / BPU / DISK / UPTIME），下面是快捷按钮和常用能力入口](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/01-dashboard.png)

工作台是 RDK Studio 桌面客户端的默认首页。它把当前激活设备的硬件指标和系统信息聚合到一页，让开发者无需反复执行 `top`、`free`、`df`、`hrut_bpuprofile`、`systemctl status` 等命令就能掌握板的状态。

工作台的设计目标是"看到问题，一键跳转到能动手的页面"——指标条下方提供快捷开发、终端、OpenClaw、设备体检等直达入口，以及开发环境 / IDE / 远程桌面的能力徽章，避免在多个 tab 之间反复切换。

## 本节包含

- [3.1.1 设备状态总览](./1-device-status.md)：8 个核心指标的展示与数据来源
- [3.1.2 跨页面联动](./2-cross-page.md)：从指标项跳转到对应功能页的规则
- [3.1.3 离线缓存机制](./3-offline-cache.md)：设备离线时的低频心跳与缓存数据策略
