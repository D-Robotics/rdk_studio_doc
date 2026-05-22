---
sidebar_label: '2.1 安装与登录'
title: 2.1 安装与登录
---

# 2.1 安装与登录

这里带你完成客户端安装、账号登录和第一次打开后的基本设置。

## 安装客户端

从 D-Robotics 官方发布页面下载对应电脑系统的安装包：

| 支持的电脑系统 | 安装包格式 |
|---|---|
| Windows 10 / 11（64-bit） | `.exe` 安装器 |
| macOS（Apple Silicon / M 系列芯片） | `.dmg` |

RDK Studio 暂不提供 32 位 Windows、Windows 7 / 8 / 8.1、Intel Mac、Linux / Ubuntu 桌面客户端安装包。

Windows 与 macOS（Apple Silicon）首次启动时，系统可能会提示确认应用来源。确认安装包来自 D-Robotics 官方发布页面后，按系统提示允许运行。

## 首次登录

启动桌面客户端后会打开 D-Robotics 统一登录平台。RDK Studio 使用 D-Robotics 账号登录，本机不保存你的账号密码，只保存登录状态。

![D-Robotics 统一登录平台页面：账号登录和短信登录入口](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/login-sso-empty.png)

登录步骤：

1. 输入 D-Robotics 账号密码，或切换到短信登录。
2. 完成验证码或二次验证。
3. 登录窗口关闭后，RDK Studio 主窗口进入工作台。
4. 首次使用会进入引导流程；如果之前已经用过，会回到上次打开的页面和配置。

## 首次使用四步

首次使用引导分为四步：

| 步骤 | 页面文案 | 目标 |
|---|---|---|
| 1 | 选择开发板 | 选择 RDK X3 / X5 / S100，用于推荐镜像和接入方式 |
| 2 | 准备系统 | 根据板型进入烧录向导或跳过烧录 |
| 3 | 添加设备 | 通过 SSH、RDK Type-C 直连或本机串口日志进入下一步 |
| 4 | 开始使用 Moss | 在工作台向 Moss 发送第一条消息 |

![首次登录后的引导向导：选择开发板、准备系统、添加设备、开始使用 Moss](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/onboarding-1-board.png)

如果设备已经能正常启动，也可以跳过烧录，直接添加设备。跳过引导不会影响后续使用；工作台空态里仍能重新开始引导。

## 下次打开会保留什么

登录状态默认会保留一段时间。重新打开客户端时，RDK Studio 会恢复设备列表、模型配置、技能、本地模型状态和历史对话。

若登录状态异常，可以在 *设置 → 账户与安全* 退出后重新登录。

## 后续操作

- 板没有可用系统或需要重刷 → [2.2 烧录系统镜像](./2-flash-system.md)
- 板已经能 SSH 或能 Type-C 直连 → [2.3 接入设备](./3-connect-device/index.md)
- 登录后就想先试 AI → [2.6 发起首次对话](./6-first-conversation.md)

账户、安全与本地数据管理详见 [3.13.2 登录账号](../3-user-guide/13-config-center/2-account.md)。
