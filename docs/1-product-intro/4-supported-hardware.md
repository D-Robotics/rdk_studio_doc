---
sidebar_label: '1.4 支持的硬件'
title: 1.4 支持的硬件
---

# 1.4 支持的硬件

RDK Studio 对 RDK 系列开发板支持最完整，同时也允许通过 SSH 接入普通 Linux 主机、Jetson、Raspberry Pi、Rockchip 等设备。

你可以把 RDK 看作主要开发板，把其他 Linux 主机看作远端开发环境。

## RDK 设备支持情况

| 项目 | RDK X3 | RDK X5 | RDK S100 / S100P |
|---|---|---|---|
| **烧录方式** | TF 卡烧录 | TF 卡烧录；带 eMMC 的型号可使用 eMMC 流程 | S100 烧录流程，页面会引导准备 xburn |
| **Type-C 直连** | 不支持 | 支持 | 支持 |
| **OpenClaw 部署** | 支持，需设备能 SSH 访问 | 支持，需设备能 SSH 或 Type-C 接入 | 支持，需设备在线且网络可用 |

这张表只说明 RDK Studio 中的常用功能支持。

内存、存储、接口等硬件规格，请查看官方页面：

- [RDK X3](https://developer.d-robotics.cc/rdkx3)
- [RDK X5](https://developer.d-robotics.cc/rdkx5)
- [RDK S100](https://developer.d-robotics.cc/rdks100)

## 通用 SSH 设备

添加设备里的 **SSH 设备** 是通用入口，不只面向 RDK。以下设备可以作为远端主机使用：

| 设备家族 | 可用能力 | 受限能力 |
|---|---|---|
| 通用 Linux 主机 | Moss、终端、文件、代码编辑器、项目工作区 | RDK 专属烧录、BPU/TROS 知识、OpenClaw 设备部署 |
| NVIDIA Jetson | Moss、终端、文件、代码编辑器、项目工作区 | RDK 专属烧录与部分板端能力 |
| Raspberry Pi | Moss、终端、文件、代码编辑器、项目工作区 | RDK 专属烧录、OpenClaw 部署限制 |
| Rockchip 板卡 | Moss、终端、文件、代码编辑器、项目工作区 | RDK 专属硬件知识与烧录流程 |

RDK Studio 会根据探测结果区分“RDK 开发板”和“Linux 主机”。

有些功能只在 RDK 或板卡类设备上展示，例如 Wi-Fi 配网、Type-C 直连、BPU 温度、OpenClaw 安装入口等。

## 跑板端 AI 模型时再关注 hbm

hbm 是给 RDK 板端 BPU 使用的模型文件，文件名通常以 `.hbm` 结尾。它只和 **板端 AI 推理** 有关，不是接入设备或使用 RDK Studio 的前置知识。

如果你只是登录、烧录、添加设备、打开终端、传文件、远程桌面或使用本地大模型，可以先不用管 hbm。

当你运行 YOLO、检测、分割等板端 AI 示例，或者把自己的模型部署到 BPU 上时，hbm 就很重要：不同 RDK 板需要对应的 hbm 文件，不能随便混用。

- RDK X3 的 hbm 不能直接放到 RDK X5 / S100 运行。
- RDK X5 的 hbm 不能直接放到 RDK X3 / S100 运行。
- RDK S100 系列也需要使用对应模型产物。

遇到 `hbm version mismatch`、`model incompatible`、模型加载失败等问题时，优先确认模型是否为当前板型重新编译。

详细排查见 [5.5 hbm 模型无法加载](../5-faq/5-hbm-not-found.md)。

## 接入方式选择建议

| 场景 | 推荐入口 |
|---|---|
| 已知 IP、设备能 SSH | 添加设备 → SSH 设备 |
| RDK X5 / S100 在电脑旁、没有局域网 IP | 添加设备 → RDK Type-C 直连 |
| 只想看启动日志或系统网络不可达 | 终端或添加设备中的本机串口日志 |
| 需要烧录新系统 | 烧录 → 选择设备 → 选择镜像 |
| 非 RDK Linux 主机 | 添加设备 → SSH 设备 |

串口不是完整设备接入方式。它只打开本机串口终端，适合看启动日志、排查网络不可达的设备；文件、Moss、OpenClaw 和代码编辑器仍需要通过 SSH 添加设备。
