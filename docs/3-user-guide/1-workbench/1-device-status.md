---
sidebar_label: '3.1.1 设备状态总览'
title: 3.1.1 设备状态总览
---

# 3.1.1 设备状态总览

![工作台指标条：MEM / TEMP / CPU / BPU / DISK / UPTIME 六个关键指标并排显示](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/01-dashboard.png)

工作台显示当前激活设备的核心指标（MEM、TEMP、CPU、BPU、DISK、UPTIME），默认轮询周期由 `DEVICE_POLL_PERIOD_MS` 控制（当前版本 15 秒），向用户提供"一眼看清"的状态视图。

## 核心指标与数据来源

| 指标 | 显示内容 | 数据来源 |
|---|---|---|
| MEM（内存） | 已用 / 总内存 | `free -h` |
| TEMP（温度） | SoC / CPU 温度 | `hrut_somstatus`（所有板型通用）|
| CPU | 当前使用率 | 板端 `/proc/stat` |
| BPU | BPU 占用率（推理负载） | `cat /sys/devices/system/bpu/bpu0/ratio`（所有板型通用）或 `hrut_bpuprofile -b 0`（X5） |
| DISK（磁盘） | 各分区使用率 | `df -h` |
| UPTIME（在线时间） | 板端系统启动至今时长 | `uptime` |

页面下方进一步显示：镜像版本、内核版本、TROS 状态、网络接口与 IP、关键 systemd 服务。这些信息在第一次接入设备时由 Studio 自动探测并缓存，避免反复查询。

## 让 AI 替你看健康状况

工作台的所有指标 AI Agent 也能访问。在 AI Dock 中描述需求，例如"帮我看下这台板的整体健康状况"，Agent 会调用底层数据，结合自身的硬件知识告诉开发者哪些指标正常、哪些有问题、是否需要立即处理。

这种方式对于以下场景特别有用：

- 同时管理多台板，希望快速对比哪台健康哪台异常
- 不熟悉 RDK 板的正常指标范围（比如 BPU 温度多高算高）
- 希望得到结构化诊断报告而不是看一堆数字

## 指标"N/A"的含义

部分指标可能显示"N/A"或 "--"，常见原因：

| 指标 | 显示 N/A 的原因 |
|---|---|
| BPU 占用 | `/sys/devices/system/bpu/bpu0/ratio` 节点不存在，或第三方镜像未挂载 BPU 驱动 |
| TEMP 温度 | 板端 `hrut_somstatus` 不可用或硬件传感器读取失败 |
| TROS 状态 | 板端未安装 TROS 或路径非默认 |

这些情况通常不影响 RDK Studio 其他功能的正常使用，仅影响工作台对应指标的展示。
