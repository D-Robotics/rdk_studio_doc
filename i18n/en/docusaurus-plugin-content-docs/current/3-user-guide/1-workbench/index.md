---
sidebar_label: '3.1 Dashboard'
title: 3.1 Dashboard
---

# 3.1 Dashboard

![Default dashboard view: identity badge and device model at the top, metric bars (MEM / TEMP / CPU / BPU / DISK / UPTIME) in the middle, and quick-access buttons plus common capability entry points at the bottom](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/01-dashboard.png)

The Dashboard is the default home page of the RDK Studio desktop client. It aggregates hardware metrics and system information of the currently active device onto a single page, enabling developers to monitor the board's status without repeatedly running commands such as `top`, `free`, `df`, `hrut_bpuprofile`, or `systemctl status`.

The design philosophy behind the Dashboard is "See an issue, jump directly to the actionable page with one click." Below the metric bars, it provides direct access to Quick Development, Terminal, OpenClaw, Device Health Check, as well as capability badges for Development Environment / IDE / Remote Desktop—eliminating the need to constantly switch between multiple tabs.

## This section includes

- [3.1.1 Device Status Overview](./1-device-status.md): Display and data sources of 8 core metrics  
- [3.1.2 Cross-Page Navigation](./2-cross-page.md): Rules for navigating from metric items to corresponding feature pages  
- [3.1.3 Offline Caching Mechanism](./3-offline-cache.md): Low-frequency heartbeat and cached data strategy when the device is offline