---
sidebar_label: '5.12 远程桌面连接或卡顿'
title: 5.12 远程桌面连接或卡顿
---

# 5.12 远程桌面连接或卡顿

**典型现象**：在 *远程桌面* tab 一直转圈连不上 / 连上后画面延迟 > 2 秒 / 鼠标点击位置和实际位置不一致 / 画面只显示一半 / 黑屏。

## 30 秒决策

板端检查：

```bash
ps aux | grep -E "x11vnc|tigervnc|Xvfb"   # 查 VNC 进程
ss -tlnp | grep 5900                       # 查 5900 端口监听
```

## 排查清单

### 1. VNC 服务未启动

Studio 第一次会自动用 `apt install` 装 `x11vnc` 或 `tigervnc`。失败常见原因：板端没网 / apt 不可达 / 磁盘满。手动装：

```bash
sudo apt install -y x11vnc xvfb
sudo x11vnc -display :0 -forever -shared -rfbport 5900 -nopw &
```

### 2. 端口冲突

5900 被 ROS 节点占了换端口：

```bash
x11vnc -rfbport 5901 ...
```

然后 Studio 内 *远程桌面 → 设置* 改成 5901

### 3. 画面卡顿

RDK 的 BPU 不参与 X11 渲染，纯 CPU 编码 VNC 流，1080p 全屏经常吃满。两种降载方式：

- 降板端分辨率：`Xvfb :0 -screen 0 1280x720x24`
- Studio 的 *远程桌面* 工具栏有"画质"滑块往下调（如调到 6），显著降带宽

### 4. 鼠标点击错位

多发于 4K 显示器 / HiDPI。Studio 内右键画面 → *设置 → 缩放* 改成 100%

### 5. 黑屏

板端没显示器 / 没启动 X server：

```bash
sudo apt install -y xvfb
Xvfb :0 -screen 0 1280x720x24 &
export DISPLAY=:0
```

然后再启 x11vnc

## 永久解决

- 给生产板提前装好 `xvfb + x11vnc` 并写到 systemd 自启动
- 长期远程办公推荐 **NoVNC + WebSocket**（Studio 默认用的），不要走原生 VNC client
- 极致流畅性换 **xrdp**（RDP 协议），但 RDK 板的 ARM xrdp 包对部分镜像兼容性差，先小范围试

## 还没解决？

按以下顺序求助：

1. *AI 对话* 直接贴报错日志——Studio 内置 30+ 种 RDK 板端错误模式识别会自动匹配并给修复建议
2. *AI 对话* 里说"帮我搜下论坛上类似的问题"——Studio 自动调用 RDK 开发者社区搜索能力
3. [RDK 官方文档](https://developer.d-robotics.cc/rdk_doc)
4. [RDK 开发者社区](https://developer.d-robotics.cc/forum)
5. Studio 内 *设置面板 → 应用与更新 → 诊断包导出*，把诊断包发给我们排查
