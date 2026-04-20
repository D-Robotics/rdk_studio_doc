---
sidebar_label: '5.2 SSH 连接失败'
title: 5.2 SSH 连接失败
---

# 5.2 SSH 连接失败

## 典型现象

在 *设备管理* 添加设备或执行 SSH 命令时报错：

- `ssh: connect to host X.X.X.X port 22: Connection timed out`
- `Permission denied (publickey,password)`
- `Host key verification failed`
- `Connection refused`

## 快速判断

按以下顺序执行两步诊断：

1. `ping <设备IP>`：
   - 不通 → 网络问题，走 [5.7 网络连接失败](./7-network-failed.md) 或 [5.3 Type-C 闪连失败](./3-typec-flash-failed.md)
   - 通 → 继续第 2 步
2. `ssh root@<设备IP>`：
   - `Permission denied` → 用户名或密码错；RDK 官方镜像默认 root / root
   - `timed out` → 板端 sshd 服务未启动
   - `Host key verification failed` → 板端重刷过系统，按下方"清旧密钥"

## 排查清单

1. **网络可达**：`ping <设备IP>`，丢包率 &gt; 5% 直接走 [5.7](./7-network-failed.md)
2. **板端 SSH 服务运行**：通过串口或其他方式登录板端，执行 `systemctl status ssh && netstat -tlnp | grep :22`
3. **凭据正确**：RDK 官方镜像默认 `root/root`，自定义凭据时在 Studio 中勾选"自定义凭据"
4. **防火墙放行**：Windows 第三方防火墙放行 `ssh.exe` 出站与 22 入站
5. **主机密钥变更**：板端重刷镜像后主机密钥会变，PC 运行 `ssh-keygen -R <设备IP>` 清除旧密钥

## 常见 IP 速查

| 接入方式 | 默认 IP | 子网 |
|---|---|---|
| Type-C 闪连 | `192.168.128.10` | `192.168.128.0/24`（PC 侧 `.100`） |
| 网口直连（X5） | `192.168.127.10` | `192.168.127.0/24` |
| WiFi / DHCP | 路由器分配 | 用 `nmap -sn 192.168.1.0/24` 扫描，或路由器后台查 |

## 永久解决

- 常用设备勾选 *自动重连*
- 使用 SSH 密钥代替密码：`ssh-copy-id root@<IP>`
- 生产板配置静态 IP（修改 `/etc/dhcpcd.conf` 或用 `nmcli`）
