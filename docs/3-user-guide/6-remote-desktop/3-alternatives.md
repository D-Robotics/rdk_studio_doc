---
sidebar_label: '3.6.3 替代方案对比'
title: 3.6.3 替代方案对比
---

# 3.6.3 替代方案对比

NoVNC 是浏览器原生 VNC 客户端，性能上不如某些专用方案。如果对延迟有更高要求，可以考虑以下替代方案。

## 方案对比

| 方案 | 优势 | 劣势 |
|---|---|---|
| NoVNC（Studio 默认） | 浏览器原生，无需安装，集成度最高 | 性能在四种方案中最弱 |
| 原生 VNC 客户端 | 性能比 NoVNC 强 | 需在 PC 安装额外客户端，每次连接需手动建立 SSH 隧道 |
| xrdp（RDP 协议） | 极致流畅，微软 RDP 协议成熟 | RDK 板的 ARM xrdp 包对部分镜像兼容性较差 |
| SSH X11 forwarding | 单 GUI 程序转发，不传输整桌面 | 不适合显示完整桌面，仅适合个别 GUI 程序 |

## 各方案的适用场景

### NoVNC（推荐）

适用于绝大多数远程桌面需求：rviz 调试、摄像头预览、GUI 程序验证。Studio 集成度最高，开箱即用。

### 原生 VNC 客户端

适用于"需要长时间观察、对流畅度敏感"的场景。常见客户端：

- macOS：内置 *屏幕共享*（直接打开 vnc:// URL）
- Windows / Linux：RealVNC Viewer、TigerVNC Viewer

使用方式：

```bash
# PC 端建立 SSH 隧道
ssh -L 5900:localhost:5900 root@<板端IP>

# 然后用 VNC 客户端连接
# vnc://localhost:5900
```

### xrdp

适用于"对流畅度有严苛要求、且板端镜像兼容 xrdp"的场景。需要：

- 板端安装 xrdp：`sudo apt install xrdp`
- 配置 xrdp 用户与会话类型
- PC 端使用 RDP 客户端（Windows 原生 *远程桌面连接*；macOS 用 Microsoft Remote Desktop）

xrdp 在 ARM 平台上的兼容性参差不齐，建议先小范围试用。

### SSH X11 forwarding

适用于"只需要看个别 GUI 程序、不要整桌面"的场景：

```bash
ssh -X root@<板端IP>
# 在 SSH 会话中运行 GUI 程序
rviz2
```

GUI 程序的窗口直接显示在 PC 桌面上。性能与单个程序的复杂度相关，但 PC 端必须运行 X server（macOS 需要 XQuartz）。

## 选择建议

| 需求 | 推荐 |
|---|---|
| 标准远程桌面（rviz 等） | NoVNC（Studio 默认） |
| 长时间观察、需要更流畅 | 原生 VNC 或 xrdp |
| 只看 1~2 个 GUI 程序 | SSH X11 forwarding |
