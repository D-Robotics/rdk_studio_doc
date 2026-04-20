---
sidebar_label: '2.3.2 通过 SSH 接入'
title: 2.3.2 通过 SSH 接入
---

# 2.3.2 通过 SSH 接入

![添加设备对话框 · SSH 配置表单（IP、用户、密码、端口、设备别名）](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/add-device-ssh-form.png)

SSH 接入适用于板端已经加入局域网（网线或 WiFi）的场景。这是 RDK 全系列板都支持的通用接入方式。

## 第 1 步：获取板端 IP

板端 IP 的获取方式取决于网络环境：

| 你的网络环境 | 获取 IP 的方法 |
|---|---|
| 板端通过网线直接连 PC（无路由器） | 板端默认 IP `192.168.127.10`（RDK 官方镜像出厂配置） |
| 板端接路由器，通过 DHCP 获取 IP | 路由器后台的 ARP 表；或用网络扫描工具（如 `nmap`） |
| 板端连 WiFi | 同上 |

如果不想自己扫描，可以在 AI Dock 中描述："扫描一下局域网里有没有 RDK 板"。Agent 会调用网络扫描工具列出当前局域网中疑似 RDK 板的 IP。

### 用 nmap 扫描

在 PC 上运行（替换为你的实际子网）：

```bash
nmap -sn 192.168.1.0/24
```

逐个 `ssh root@<IP>` 试探，或在板端通电时观察 `nmap` 输出中哪台刚上线的主机是板（最稳妥的办法是让 AI Dock 帮你扫：「扫描一下局域网里有没有 RDK 板」，Agent 会自动筛选出疑似板的主机）。

如果不想安装 nmap，可以用通用的逐个 ping：

```bash
for i in {1..254}; do ping -c 1 -W 1 192.168.1.$i &>/dev/null && echo 192.168.1.$i; done
```

## 第 2 步：在 Studio 中添加设备

打开桌面客户端，点击顶部 *添加设备*，在弹窗中选择 *SSH 网络连接*。填写以下字段：

| 字段 | 默认值 | 说明 |
|---|---|---|
| IP / Host | （上一步获取的 IP） | 支持 IPv4、IPv6、域名 |
| 端口 | `22` | 标准 SSH 端口 |
| 用户名 | `root` | RDK 官方镜像出厂默认 |
| 认证方式 | 密码 | 见下方对比 |

部分场景下板端 SSH 端口可能不是 22（如公网穿透、Docker 容器内的 SSH），按实际值填写。

## 第 3 步：选择认证方式

| 认证方式 | 适用场景 | 操作 |
|---|---|---|
| 密码 | 第一次连接，最简单 | 输入密码（RDK 出厂默认 `root`） |
| SSH 密钥 | 长期生产、团队规范 | 选择本机的 `~/.ssh/id_rsa` 等私钥；首次需在板端运行 `ssh-copy-id` |

### 配置 SSH 密钥

更安全、不需要每次输密码：

```bash
# 第一次（在 PC 上运行）
ssh-keygen -t ed25519                    # 没有密钥就生成一个
ssh-copy-id root@<板端IP>                 # 把公钥推到板端
```

之后在 Studio 中添加设备时选择 *SSH 密钥认证*，选择本机私钥即可。

## 第 4 步：连接

点击 *连接*。Studio 会按以下顺序执行：

1. ping 一下确认网络可达
2. 建立 SSH 会话
3. 自动探测板的型号、镜像版本、CPU/RAM、磁盘、网卡列表等信息
4. 把板加入设备列表，激活为当前操作的目标设备

## 常见 IP 速查

| 接入场景 | 默认 IP |
|---|---|
| 网线直连（板与 PC 一根网线） | `192.168.127.10` |
| Type-C 闪连 | `192.168.128.10`（详见 [2.3.1](./1-typec-flash.md)） |
| WiFi / DHCP | 路由器分配，需要手动查询 |

## 连接失败的常见原因

| 现象 | 解决方法 |
|---|---|
| `Connection timed out` | 用 `ping <IP>` 确认网络可达 |
| `Permission denied` | 用户名或密码错误；或板端禁用了密码登录 |
| `Host key verification failed` | 板端重刷过系统、SSH 主机密钥变了，在 PC 端运行 `ssh-keygen -R <IP>` 清除旧密钥 |
| `Connection refused` | 板端 sshd 服务未启动；通过串口进入板端运行 `systemctl start ssh` |

完整的故障排查见 [5.2 SSH 连接失败](../../5-faq/2-ssh-failed.md)。

## 后续操作

SSH 接入成功后，建议给板配置 WiFi（[2.4 配置网络](../4-configure-network.md)），后续即使拔了网线也能通过无线网络访问板端。
