---
sidebar_label: '3.10.5 任务委派与自动 fallback'
title: 3.10.5 任务委派与自动 fallback
---

# 3.10.5 任务委派与自动 fallback

OpenClaw 的核心价值在于"长任务委派"和"SSH 阻塞时的自动救火"两个机制。本节详细说明这两种交互模式。

## 长任务委派

D-Moss 评估任务特征后，将适合在板端执行的任务委派给 OpenClaw。委派的标准链路如下：

1. 用户在 AI Dock 中描述："板上每 5 分钟检查 BPU 温度，超过 70°C 自动降频"
2. D-Moss 调用 `board_openclaw_assess` 评估：板端是否有 `hrut_smi`、是否有 `cpufreq` 工具、能否执行降频
3. OpenClaw 反馈："可以执行，所需工具均可用"
4. D-Moss 调用 `board_openclaw_delegate`，把任务连同 guidance 写入 OpenClaw 的状态机：

   ```yaml
   原意图: 监控 BPU 温度并自动降频
   阈值: 70°C
   降频方法: 调用 cpufreq-set 切换到 powersave
   汇报方式: 触发降频时通过隧道反向通知 PC
   ```

5. OpenClaw 在板端持续执行该任务，PC 即使关机，板端任务依然运行
6. 当温度触发阈值时，OpenClaw 通过 SSH 隧道把事件推送给 PC（PC 在线时实时通知，离线时事件保留在 OpenClaw 内待 PC 重新接入后查看）

## 自动 fallback：SSH 阻塞时的自救

当 PC 通过普通 SSH 调用 `device_exec` 执行命令时遇到超时或阻塞，D-Moss 会自动转移到板端 OpenClaw 重试，确保命令最终执行成功。

完整流程示例：

```
用户: "在板上跑 ros2 topic list"
   ↓
D-Moss 第一回合:
   ├─ 调用 device_exec("ros2 topic list", deviceId)
   │     ↓
   │     SSH 长时间阻塞（板端 SSH 通道异常或网络抖动）
   │     ↓
   │     超时（默认 30 秒）
   ↓
D-Moss 第二回合（自动）:
   ├─ 调用 board_openclaw_assess("我要执行 ros2 topic list")
   │     ↓
   │     OpenClaw 反馈: "可以，本机就有 ros2 命令"
   ├─ 调用 board_openclaw_delegate("ros2 topic list", guidance="原意图：列出当前 ROS 话题")
   │     ↓
   │     在板端 OpenClaw 自己的会话中执行（不经 PC SSH）
   │     ↓
   │     更稳定，因为复用了 OpenClaw 网关的本地连接
   └─ 把执行结果返回给 PC D-Moss
   ↓
返回用户: 完整的话题列表
```

这一机制让"SSH 阻塞"这种常见的板端环境问题不会让 AI 任务彻底失败。只要板端 OpenClaw 健康，命令最终都能跑通。

## 委派的反向通知

OpenClaw 在板端执行长任务时，关键事件可以反向推送到 PC。例如：

- 监控任务触发了阈值
- 长任务完成
- 任务失败需要 PC 介入

PC 在线时通过 Studio 的通知中心实时显示；PC 离线时事件保留在 OpenClaw 的状态机中，PC 下次接入时拉取。

## 何时不会自动委派

D-Moss 不会无脑委派所有任务到板端。以下场景仍由 PC 端 D-Moss 直接处理：

| 场景 | 原因 |
|---|---|
| 用户明确说"在 PC 上做" | 尊重用户指令 |
| 任务需要 PC 端工具（如本机文件操作） | 板端 OpenClaw 没有这些工具 |
| 任务需要强模型推理（板端模型可能较弱） | 推理质量优先 |
| 任务很快能完成（&lt; 10 秒） | 不值得走委派的开销 |
