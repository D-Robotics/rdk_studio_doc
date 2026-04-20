---
sidebar_label: '5.7 WiFi 连接失败'
title: 5.7 WiFi 连接失败
---

# 5.7 WiFi 连接失败

**典型现象**：在 *WiFi 配置* 弹窗输入 SSID 和密码后连接失败 / 连接显示成功但 `ip addr` 看 `wlan0` 没拿到 IP / 重启后 WiFi 配置丢失。

## 30 秒决策

板端跑这三行，定位是哪一步坏的：

```bash
nmcli dev status                # WiFi 模块是否正常
nmcli dev wifi list             # 能否扫到目标 SSID
nmcli dev wifi connect "目标SSID" password "密码"  # 手动连
```

## 排查清单

1. **SSID 扫描** — `nmcli dev wifi list` 看不到目标网络时：
   - 信号弱（< -70 dBm）靠近路由器
   - 5 GHz only 路由器 + 板端只有 2.4 GHz 模块 → 换路由器或开 2.4 GHz
   - 隐藏 SSID：`nmcli dev wifi connect "SSID" password "密码" hidden yes`

2. **密码错误** — `nmcli` 不会直接告诉你，会以 `Error: Connection activation failed` 笼统报错。手动重试注意大小写

3. **DHCP 失败** — 连上但没 IP：

   ```bash
   sudo dhclient wlan0
   # 或
   sudo systemctl restart NetworkManager
   ```

4. **驱动问题** — RDK X3 / X5 偶发 WiFi 模块需重新加载：

   ```bash
   sudo rmmod 8852be
   sudo modprobe 8852be
   ```

   模块名按 `lsmod | grep 88` 查

## 永久解决

- 在 *WiFi 配置* 弹窗勾"保存配置"，Studio 下发到板端 NetworkManager 持久化
- 重启就丢一般是板端 NetworkManager 未自启：`sudo systemctl enable NetworkManager`
- 长期生产环境推荐**网线 + 静态 IP**
