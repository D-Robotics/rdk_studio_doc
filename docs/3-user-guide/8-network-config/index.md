---
sidebar_label: '3.8 网络配置'
title: 3.8 网络配置
---

# 3.8 网络配置

![WiFi 配置对话框：可用网络列表、SSID 输入框、密码输入框，底部"取消 / 连接网络"按钮](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/wifi-config-dialog.png)

[2.4 配置网络](../../2-quick-start/4-configure-network.md) 介绍了首次接入设备时的最简 WiFi 配置流程。本节是日常多 WiFi 切换、隐藏 SSID 添加、配置持久化等高级场景的完整参考。

底层实现依赖板端的 NetworkManager 守护进程：Studio 通过 SSH 远程让板端执行 `nmcli` 命令完成扫描、连接、持久化。配置写入板端 `/etc/NetworkManager/system-connections/`，重启板后自动重连，不需要每次手动配置。

## 本节包含

- [3.8.1 入口与状态显示](./1-entry-and-status.md)：网络配置的多个入口与顶栏 WiFi 状态实时显示
- [3.8.2 隐藏 SSID 与高级选项](./2-hidden-ssid.md)：手动添加隐藏网络与加密类型选择
- [3.8.3 配置持久化](./3-persistence.md)：开机自动重连机制与已保存网络的管理
