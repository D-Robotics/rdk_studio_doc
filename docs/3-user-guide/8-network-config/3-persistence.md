---
sidebar_label: '3.8.3 配置持久化'
title: 3.8.3 配置持久化
---

# 3.8.3 配置持久化

通过 Studio 配置的 WiFi 默认是持久化的——重启板端后会自动重连，不需要每次手动操作。这一行为由板端的 NetworkManager 守护进程提供。

## 持久化机制

| 步骤 | 实现 |
|---|---|
| Studio 触发 `nmcli dev wifi connect` | NetworkManager 接收连接请求 |
| 连接成功后写入配置 | 配置写入 `/etc/NetworkManager/system-connections/<SSID>.nmconnection` |
| 板端重启 | NetworkManager 守护进程自动启动 |
| 守护进程读取配置 | 主动尝试连接已保存的网络 |

整个机制对开发者透明，正常情况下"连接一次、长期可用"。

## 重启后丢失配置的常见原因

| 现象 | 排查 |
|---|---|
| 重启后 WiFi 完全未连接 | NetworkManager 服务可能未自启，运行 `sudo systemctl enable NetworkManager` |
| 重启后能连但 IP 变化 | 路由器 DHCP 分配机制，建议绑定 MAC 静态 IP |
| 偶发性重启后失败 | 板端时间不准导致证书校验失败，确认 NTP 同步正常 |
| 完全连不上之前的 SSID | 路由器密码可能改了，重新输入密码 |

## 删除已保存的网络

不再使用的 WiFi 配置可以删除：

| 方式 | 操作 |
|---|---|
| Studio 内 | WiFi 配置弹窗 → *已保存* 列表 → 选中 → *忘记* |
| 板端命令行 | `nmcli connection show` 查看已保存连接，`nmcli connection delete <连接名>` 删除 |

删除后该网络的密码也会从板端清除，下次连接需要重新输入。

## 长期生产环境建议

对于长期运行的生产板（例如机房中的设备），建议：

1. 优先使用**有线网络 + 静态 IP**：消除 WiFi 信号波动与 DHCP 不确定性
2. 静态 IP 的配置可以通过 `nmcli` 完成：

   ```bash
   nmcli connection modify "<连接名>" \
     ipv4.addresses 192.168.1.100/24 \
     ipv4.gateway 192.168.1.1 \
     ipv4.dns 8.8.8.8 \
     ipv4.method manual
   ```

3. 在 Studio 的设备列表中也用相同的静态 IP 添加设备，避免每次开机后查询板端 IP

完整的 WiFi 故障排查见 [5.7 网络连接失败](../../5-faq/7-network-failed.md)。
