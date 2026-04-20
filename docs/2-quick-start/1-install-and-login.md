---
sidebar_label: '2.1 安装与登录'
title: 2.1 安装与登录
---

# 2.1 安装与登录

本节带你完成 RDK Studio 桌面客户端的安装与首次登录。整个过程通常在 2 分钟内完成。

## 安装客户端

从 D-Robotics 官方发布页面下载对应平台的安装包：

| 平台 | 安装包格式 |
|---|---|
| Windows 10 / 11（64-bit） | `.exe`（NSIS 安装器）或 `.zip`（免安装版） |
| macOS 11 及以上 | `.dmg`（Apple Silicon 与 Intel 通用） |
| Ubuntu 20.04 及以上 | `.deb`（apt 安装）或 `.AppImage` |

下载后双击安装包按引导完成安装。Windows 与 macOS 平台首次启动可能弹出系统安全警告（Windows SmartScreen 或 macOS Gatekeeper），允许运行即可。

## 首次登录

启动桌面客户端后会自动弹出 D-Robotics 统一登录平台。RDK Studio 通过 OAuth 2.0 协议与 D-Robotics 账号体系对接，本机不存储密码，仅保留授权后的 access_token。

![D-Robotics 统一登录平台页面：标题"Hello，欢迎来到 D-Robotics 统一登录平台！"，表单提供"账号登录 / 短信登录"两种方式，账号与密码字段为空，下方有"立即登录 / 前往注册"按钮与"忘记密码？"链接；右上角语言切换（中 / En）](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/login-sso-empty.png)

登录步骤：

1. 在登录窗口输入 D-Robotics 账号和密码，或切换到 *短信登录* 使用手机号 + 验证码
2. 完成验证（首次登录可能需要短信或邮件验证码）
3. 点击 *立即登录*，浏览器自动跳回 Studio，登录窗口关闭
4. Studio 主窗口进入工作台

![D-Robotics 统一登录平台 · 填写账号后的状态：账号输入框显示 `qiaolongli`，密码输入框显示掩码（已填写），*立即登录* 按钮可点击](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/login-sso-filled.png)

登录完成后 Studio 会自动同步本机配置：设备列表、模型条目、技能安装状态、AI Dock 历史会话。

## 会话保留时长

登录会话默认保留 14 天。在此期间重新打开客户端时不需要再次登录，除非主动退出（*设置面板 → 账户与安全 → 退出登录*）或会话过期。

会话信息存储在本机：

| 操作系统 | 路径 |
|---|---|
| Windows | `%USERPROFILE%\.rdk-studio\sso-sessions.json` |
| macOS | `~/.rdk-studio/sso-sessions.json` |
| Linux | `~/.rdk-studio/sso-sessions.json` |

如果遇到登录状态异常，可以删除该文件后重新启动客户端，触发重新登录。

## 登不上的常见情况

| 现象 | 可能原因 | 解决方法 |
|---|---|---|
| 登录窗口一直转圈 | SSO 服务不可达 | 确认网络可达；企业内网用户切换到 VPN |
| 输完密码无反应 | Cookie 或缓存损坏 | 重启 Studio；必要时清理浏览器 Cookie |
| 登录窗口反复弹出 | OAuth 回调被防火墙拦截 | 联系运维放行 OAuth 回调地址 |
| `网络请求失败` | DNS 解析失败 | `ping sso.d-robotics.cc` 确认 DNS 是否正常 |

## 登录后进入引导向导

首次登录后，Studio 主窗口会进入新手引导向导（四步：**选择硬件 → 烧录系统 → 接入设备 → 接入 AI 助手**）。

![首次登录后的新手引导向导 · 第 1 步选择硬件：三张卡片并列展示 RDK X3 / X5 / S100 的 TOPS、CPU、内存与定位描述](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/onboarding-1-board.png)

这是 2.1 之后所有章节（2.2 烧录 → 2.3 接入 → 2.5 模型）的"导航主线"。如果板已经能正常启动、只想跳过向导直接进入工作台，点击底部的 *跳过引导，直接开始* 即可；工作台空页上仍保留"重新开始引导"入口，随时可重进。

## 后续操作

完成登录后，根据板的状态选择下一步：

- 板没有可用系统 → [2.2 烧录系统镜像](./2-flash-system.md)
- 板已经能正常启动 → [2.3 接入设备](./3-connect-device/index.md)

完整的账户与安全管理（切换账号、退出登录、本地数据清理）请见 [3.12 配置中心](../3-user-guide/12-config-center/2-account.md)。
