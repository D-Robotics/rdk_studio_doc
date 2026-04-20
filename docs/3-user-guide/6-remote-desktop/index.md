---
sidebar_label: '3.6 远程桌面'
title: 3.6 远程桌面
---

# 3.6 远程桌面

![远程桌面界面：Studio 内嵌 NoVNC，直接在工作台看到板端 GUI](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/07-remote.png)

连接成功后可在 Studio 内直接操作板端桌面：

![板端桌面（VNC 画面）：D-Robotics 主题桌面，包含 File System / Home / Documentation / Community 等快捷入口，顶部工具栏显示时间与系统状态](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/remote-desktop-connected.png)

远程桌面让开发者在 RDK Studio 内直接看到板端的图形界面。基于 NoVNC（HTML5 Canvas + WebSocket 实现的浏览器版 VNC 客户端）实现，无需在 PC 上安装本地 VNC 客户端。Studio 通过 SSH 隧道安全访问板端 5900 端口，避免暴露到公网。

板端的 VNC 服务通常是 `x11vnc`（接管现有 X server）、`tigervnc`（自带 X server）或 `Xvfb`（虚拟显示，板端无显示器时使用）。Studio 在第一次打开远程桌面时自动选择合适的 VNC 服务并部署。

## 典型使用场景

| 场景 | 你需要看的内容 |
|---|---|
| ROS 调试 | rviz、rqt_graph、rqt_image_view |
| 摄像头画面 | hobot_usb_cam → image_view |
| GUI 程序调试 | Qt、GTK 应用 |
| HDMI 输出预览 | 板端接显示器后的实际画面 |
| 桌面 OS 操作 | 已安装 Ubuntu Desktop 的 RDK 板 |

## 本节包含

- [3.6.1 启动与认证](./1-startup-auth.md)：第一次打开远程桌面时的自动安装流程与密码认证
- [3.6.2 性能调优](./2-performance-tuning.md)：RTT 显示、画质滑块、分辨率调整等带宽控制方法
- [3.6.3 替代方案对比](./3-alternatives.md)：NoVNC 与原生 VNC、xrdp、SSH X11 forwarding 的差异
