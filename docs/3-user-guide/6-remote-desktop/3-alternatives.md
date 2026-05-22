---
sidebar_label: '3.6.3 其他远程方式'
title: 3.6.3 其他远程方式
unlisted: true
---

# 3.6.3 其他远程方式

RDK Studio 内置远程桌面适合大多数调试场景。如果对延迟有更高要求，可以再考虑其他方案。

## 方案对比

| 方案 | 优势 | 劣势 |
|---|---|---|
| Studio 内置远程桌面 | 无需安装额外工具，集成度最高 | 极高帧率场景可能不够流畅 |
| 原生 VNC 客户端 | 流畅度可能更好 | 需在电脑安装额外客户端，配置更复杂 |
| xrdp（RDP 协议） | 极致流畅，微软 RDP 协议成熟 | RDK 板的 ARM xrdp 包对部分镜像兼容性较差 |
| SSH X11 forwarding | 单 GUI 程序转发，不传输整桌面 | 不适合显示完整桌面，仅适合个别 GUI 程序 |

## 各方案的适用场景

### Studio 内置远程桌面（推荐）

适用于绝大多数远程桌面需求：rviz 调试、摄像头预览、GUI 程序验证。Studio 集成度最高，开箱即用。

### 原生 VNC 客户端

适用于“需要长时间观察、对流畅度敏感”的场景。常见客户端：

- macOS（Apple Silicon）：内置 *屏幕共享*
- Windows：RealVNC Viewer、TigerVNC Viewer

这种方式需要自己处理连接和安全配置，建议有经验后再使用。

### xrdp

适用于"对流畅度有严苛要求、且板端镜像兼容 xrdp"的场景。需要：

- 板端安装 xrdp：`sudo apt install xrdp`
- 配置 xrdp 用户与会话类型
- PC 端使用 RDP 客户端（Windows 原生 *远程桌面连接*；macOS（Apple Silicon）用 Microsoft Remote Desktop）

xrdp 在 ARM 平台上的兼容性参差不齐，建议先小范围试用。

### SSH X11 forwarding

适用于"只需要看个别 GUI 程序、不要整桌面"的场景：

```bash
ssh -X root@<板端IP>
# 在 SSH 会话中运行 GUI 程序
rviz2
```

GUI 程序的窗口直接显示在 PC 桌面上。性能与单个程序的复杂度相关，但 PC 端必须运行 X server（macOS（Apple Silicon）需要 XQuartz）。

## 选择建议

| 需求 | 推荐 |
|---|---|
| 标准远程桌面（rviz 等） | Studio 内置远程桌面 |
| 长时间观察、需要更流畅 | 原生 VNC 或 xrdp |
| 只看 1~2 个 GUI 程序 | SSH X11 forwarding |
