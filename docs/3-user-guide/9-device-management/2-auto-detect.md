---
sidebar_label: '3.9.2 自动设备识别'
title: 3.9.2 自动设备识别
---

# 3.9.2 自动设备识别

第一次接入设备时，Studio 会自动探测板端的硬件与软件状态，并把结果保存为该设备的"画像"。这个画像影响 AI 对话的硬件知识注入与工具加载行为。

## 探测项

| 探测项 | 数据来源 | 用途 |
|---|---|---|
| 板型（X3 / X5 / S100） | `cat /proc/device-tree/model` | 决定加载哪些板型专属的技能 |
| 镜像版本 | `cat /etc/rdkos-release` | 帮助 AI 判断系统能力 |
| Linux 内核 | `uname -r` | 排查内核相关问题时的依据 |
| TROS 版本 | `ls /opt/tros/` | 决定 ROS 命令的语法版本（humble / foxy） |
| OpenClaw 是否安装 | `which openclaw` | 决定是否加载 OpenClaw 协同工具 |
| BPU 类型 | 从板型推导 | hbm 模型架构兼容性提示 |
| 物理网卡列表 | `ip addr show` | 顶栏 IP 速查的数据源 |

探测在添加设备时自动完成，开发者通常不需要手动触发。如果板端环境发生变化（例如重新刷了系统），可以在设备详情中点击 *重新探测* 更新画像。

## 画像对 AI 的影响

设备画像在每次对话开始前被注入 D-Moss Agent 的上下文。这意味着 AI 的回复会基于当前设备的实际状态，而不是通用答案。

例子：

| 用户问 | AI 用画像决策 |
|---|---|
| "看看 BPU 占用" | 画像显示是 X5 → 调用 `hrut_bpuprofile -b 0`（X3 / S100 上不一定装，AI 会回退到通用的 `cat /sys/devices/system/bpu/bpu0/ratio`）|
| "装一个 ROS 2 包" | 画像显示是 humble → 给出 `apt install ros-humble-xxx` 而不是 foxy |
| "为什么 hbm 加载失败" | 画像显示是 X5（Bayes 架构） → 提示 hbm 必须用 Bayes 工具链编译 |

这种"AI 知道当前设备"的体验是 Studio 与通用 AI 助手最大的区别之一。

## 探测失败的处理

某些定制镜像可能缺少标准探测项（例如缺 `/proc/device-tree/model`）。这种情况下：

- Studio 会标记该探测项为"未知"，不影响其他探测项
- 在设备列表的详情页可以手动设置板型与镜像版本
- 手动设置后 AI 仍可以使用画像信息

如果手动设置后 AI 仍然回复不准确，可能是 Studio 的内置硬件知识库尚未覆盖该镜像，建议在 [RDK 开发者社区](https://developer.d-robotics.cc) 反馈。
