---
sidebar_label: '2.4 配置网络'
title: 2.4 配置网络
---

# 2.4 配置网络

为板端配置 WiFi 连接，让板可以独立接入网络。配置完成后即使拔掉 Type-C 数据线或网线，仍可通过无线网络远程访问板端。

底层实现是 Studio 通过 SSH 远程让板执行 `nmcli`（NetworkManager 命令行工具），扫描并连接 WiFi。配置写入板端 `/etc/NetworkManager/system-connections/`，重启板后自动重连，不需要每次手动连接。

## 通过引导向导配置

完成 [2.3 接入设备](./3-connect-device/index.md) 后，引导向导会自动跳转到 WiFi 配置页：

1. 点击 *扫描*，等待 Studio 列出周围可用的 WiFi 网络
2. 在列表中选择目标 SSID
3. 输入 WiFi 密码（隐藏 SSID 需要勾选 *隐藏网络* 并手动输入名称）
4. 点击 *连接*，等待 Studio 显示连接成功

如果只使用 Type-C 接入或网线，可以跳过 WiFi 配置——这一步是为了未来无线访问做准备，不影响当前的开发工作。

## 通过 AI 配置

也可以让 AI Agent 完成 WiFi 配置。在 AI Dock 中描述："板子连一下 office_5g 这个 WiFi，密码是 xxxx"。Agent 会执行扫描、连接、确认 IP 等步骤，完成后告诉你板的新 WiFi IP。

如果连接失败（密码错、信号弱、隐藏 SSID 等），AI 会主动提示具体原因。

## 连接成功后的下一步

WiFi 连接成功后，建议在设备列表中**新建一台设备**，使用板的 WiFi IP，标注为"板名（WiFi）"。这样下次开机后可以直接选择 WiFi 接入的设备，无需重新扫描配置。

```
原设备：RDK-X5-工位1（Type-C 接入，192.168.128.10）
新增：RDK-X5-工位1-WiFi（SSH 接入，192.168.1.45）
```

后续可以通过顶栏切换两台设备：在工位时用 Type-C，移动时用 WiFi。

## 详细操作与高级用法

本节只覆盖"快速跑通"所需的最简流程。下列高级用法请查阅 [3.8 网络配置](../3-user-guide/8-network-config/index.md)：

- 多个 WiFi 网络之间的切换
- 隐藏 SSID 的手动添加
- 配置持久化与开机自动重连
- 删除已保存的 WiFi 网络
- 强制指定网线或 WiFi 优先级

## 后续操作

WiFi 配置完成后，进入 [2.5 接入 AI 模型](./5-configure-ai-model.md) 让 AI 助手可用。
