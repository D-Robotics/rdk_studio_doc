---
sidebar_label: '1.4 支持的硬件'
title: 1.4 支持的硬件
---

# 1.4 支持的硬件

RDK Studio 当前支持 D-Robotics（地瓜机器人）发布的三款 RDK 系列开发板。本节给出三款板的关键硬件参数与 BPU 架构差异，以及这些差异对开发流程的影响。

## 三款板对照

| 项目 | RDK X3 | RDK X5 | RDK S100/S100P |
|---|---|---|---|
| **芯片** | 旭日 3 | 旭日 5 | 旭日S100E/S100P |
| **CPU** | 四核 ARM Cortex-A53 @1.5 GHz | 八核 ARM Cortex-A55 @1.5 GHz | 六核 ARM Cortex-A78AE @1.5 GHz（S100P：2.0 GHz） |
| **MCU** | — | — | 四核 ARM Cortex-R52+ @1.2 GHz |
| **BPU 算力（INT8 等效）** | 5 TOPS | 10 TOPS | 80 TOPS（S100）/ 128 TOPS（S100P） |
| **BPU 架构** | Bernoulli2 | Bayes | Nash |
| **GPU** | — | 32 GFLOPS（Mali）| 100 GFLOPS（Mali-G78AE） |
| **内存** | 2 GB / 4 GB LPDDR4 | 4 GB / 8 GB LPDDR4 | 12 GB（S100）/ 24 GB（S100P）LPDDR5 |
| **存储** | Micro SD | Micro SD（部分版本带 eMMC） | 64 GB eMMC + M.2 Key M SSD 接口 |
| **网络** | 千兆以太网 | 千兆以太网（PoE）+ Wi-Fi 6 + BT 5.4 | 视配置 |
| **USB** | USB 3.0 / USB 2.0 | 4× USB 3.0 Type-A + 1× USB-C | 视配置 |
| **摄像头** | 2× MIPI CSI | 2× 4-lane MIPI CSI | 视配置 |
| **典型用途** | 入门 AI、低成本机器人 | 主力开发、ROS / TROS、视觉应用 | 具身智能、Transformer 推理、多传感器融合 |

> 数据来源：[RDK X3 官网](https://developer.d-robotics.cc/rdkx3)、[RDK X5 官网](https://developer.d-robotics.cc/rdkx5)、[RDK S100 官网](https://developer.d-robotics.cc/rdks100)、D-Robotics 官方硬件介绍。具体规格以官方页面为准。

RDK X5 是当前主推的开发板，性能与功耗均衡，且支持 Type-C 闪连（5 秒接入）。RDK X3 是入门款，常用于学习与轻量推理任务。RDK S100 面向具身智能等更高算力需求场景，BPU Nash 架构对 Transformer 系算子的支持显著优于前两代，同时引入 LPDDR5 与 NVMe 存储。

## BPU 架构差异对开发的影响

三款板使用三代不同的 BPU 架构：

| 代际 | 架构名 | 板型 | 等效算力 |
|---|---|---|---|
| 第一代 | Bernoulli2 | RDK X3 | 5 TOPS |
| 第二代 | Bayes | RDK X5 | 10 TOPS |
| 第三代 | Nash | RDK S100 / S100P | 80 / 128 TOPS |

D-Robotics 模型转换工具 `hb_mapper` 编译生成的 hbm 模型文件**不能跨架构使用**：

- 在 RDK X3 上编译的 hbm 不能直接拷到 RDK X5 上运行
- 在 RDK X5 上编译的 hbm 不能直接拷到 RDK S100 上运行

跨板部署同一个模型需要用对应板型的工具链重新编译。在板端运行时遇到 `hbm version mismatch` 或 `model incompatible` 等错误，基本可以判定为这种"用错板型编译的模型"问题。详细排查方法见 [5.5 hbm 模型无法加载](../5-faq/5-hbm-not-found.md)。

RDK Studio 在 AI 对话中会自动识别当前激活设备的板型，并加载对应的硬件知识。当用户提到的命令或操作与当前板型不匹配时，AI 会主动给出提示——例如开发者在连着 X3 的会话里要求"用 RDK X5 的 Bayes 架构 hbm"，AI 会先指出板型不匹配。

## Studio 在不同板型上的功能覆盖

绝大多数 RDK Studio 功能在三款板上的体验一致。以下是有差异的能力：

| 功能 | RDK X3 | RDK X5 | RDK S100 |
|---|---|---|---|
| Type-C 闪连 | 不支持 | 支持 | 不支持 |
| TF 卡烧录 | 支持 | 支持 | 不支持（无 TF 卡槽） |
| eMMC 烧录 | 不支持 | 支持（需带 eMMC 版本） | 不适用（仅 xburn） |
| xburn 烧录 | 不支持 | 不支持 | 支持（唯一方式） |
| 串口接入 | 通过 GPIO 上的 UART2 | 通过板载 micro-USB | 通过板载 USB-UART |

不在表格中的功能（远程终端、AI 对话、文件管理、IDE、远程桌面、WiFi 配置、设备管理、OpenClaw 等）在三款板上的使用方式完全一致。

## 接入方式选择建议

| 板型 | 推荐首次接入方式 |
|---|---|
| RDK X5 | Type-C 闪连（最快，无需配置网络） |
| RDK X3 | SSH 网络接入（先把板接入路由器，从路由器后台获取板的 IP） |
| RDK S100 | SSH 网络接入 |
| 任意板，系统启动失败 | 串口接入（救火，可读取 boot 日志） |

具体操作步骤见 [2.3 接入设备](../2-quick-start/3-connect-device/index.md)。
