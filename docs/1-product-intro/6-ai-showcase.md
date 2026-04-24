---
sidebar_label: '1.6 AI Dock 实战演示'
title: 1.6 AI Dock 实战演示
---

# 1.6 AI Dock 实战演示

本节记录三段来自 Studio 实际运行的对话，展示 AI Dock 的交互形态与工具调用过程。案例 1 为单设备状态采集与报告；案例 2 为端到端部署 YOLO 并在 Web 端观察检测结果；案例 3 为基于实操经验生成社区发帖草稿。

## 案例 1：全量设备体检

**用户输入**

```
请帮我一次性做体检：温度、CPU/BPU、内存、磁盘、网络和关键服务状态
```

**对话全貌**

![AI Dock 设备体检对话：Moss 按编号步骤串起"1. 需求理解与拆解 / 2. 关键指标计划 / 3. 硬件与行为抓取 / 4. 双轴汇总 / 5. 填写和行动心得 / 6. 二叉结论"六段；中间 device_diagnose、device_exec、device_openclaw_status 等工具调用逐一列出，SSH 抓取 uptime / free / df / thermal / ip addr / systemctl status 的原始输出完整展示；末尾以"硬件状态（全部正常）""网络状态（已发现）""关键服务状态（OpenClaw 运行正常）"三张结构化表格和一段总结闭环](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/showcase-case1-healthcheck.png)

观察到的要点：

- Agent 把任务拆为 6 个编号步骤，每步都对应一次明确的意图
- 每次工具调用都展开了命令名、参数、原始输出（可复制到远程终端再跑一遍验证）
- 最终产出分三张表：硬件状态、网络状态、关键服务状态
- 底部给出结论与建议动作

## 案例 2：端到端部署 YOLO 并验证

本案例分两段对话：第一段让 Agent 查文档 + 计划 + 启动；第二段重启并在 Web 端查看检测结果。

### 2.1 规划与启动

**用户输入**

```
在当前设备上跑一次 YOLO 示例，给出步骤，告诉我预期输出
```

**对话全貌**

![AI Dock YOLO 规划与启动对话：Agent 先后调用 OpenClaw 专家、fetch 官方文档（developer.d-robotics.cc/rdk-doc）、rdk-doc-search 知识库，然后分节给出"1. 需求澄清确认 / 2. 板上当前环境 / 3. 兼容性摘要 / 4. 联网检索验证 / 5. 可运行方案（YOLOv8n 系列）"；可运行方案段列出启动命令 ros2 launch yolo_dnn_example hobot_dnn_node_example.launch.py yolo_example_config_file:=config/... / 预期输出（INFO 日志样本）/ 可选替换的 YOLOv5/YOLOv8/YOLOv10/YOLOv11/YOLOv12 配置；尾部给出"二次确认"按钮，待用户点击"执行"后才实际下发命令；用时 51 秒](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/showcase-case2-yolo-plan.png)

观察到的要点：

- Agent 串联了三类信息源：内置知识（OpenClaw 专家）、联网文档检索、板上实测
- 关键命令在执行前先作为"可运行方案"展示给用户，并附预期输出
- 用"执行"按钮作为二次确认，开发者可看清全部细节再授权动作

### 2.2 重启与 Web 验证

**用户输入**

```
把之前的 YOLO 停掉，重新拉起 YOLOv8n，并把 Web 页面打开给我看
```

**对话全貌**

![AI Dock 重启 YOLO 并显示 Web 视图：Agent 先调用 device_exec 杀掉旧进程（kill -9 67335 2>/dev/null || true），再重新启动；面板中展示"已重新启动 YOLOv8n 目标检测示例 / 新进程 PID 83250 / 日志路径 /tmp/rdkstudio-bg-82831.log / 运行状态：USB 摄像头、编码、DNN 推理、Web 服务均已正常启动 / 预览页面已打开：http://192.168.127.10:8000"；右侧悬浮窗 TogetheROS Web Display 实时显示摄像头画面，画面中键盘与床边缘被识别并打上 keyboard / bed 蓝色检测框；底部统计 cpu 1500000、temp 84.4、fps 0；用时 57 秒](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/showcase-case2-yolo-running.png)

观察到的要点：

- 单次对话内完成：杀进程、重启、打开 Web、验证结果
- 右侧悬浮的 TogetheROS Web Display 窗口是 Studio 代为打开的浏览器预览，可以看到真实检测画面
- 画面中的 `keyboard` / `bed` 等是 YOLOv8n 识别到的真实目标，底部显示 CPU、温度、FPS 原始指标

## 案例 3：从一次实操生成社区发帖草稿

**用户输入**

```
把刚才跑通 YOLO-World 的过程整理成一篇社区发帖草稿，包含环境、步骤、实测性能、常见问题与进阶玩法
```

**对话产出**

![AI Dock 生成社区发帖草稿：标题"【无脑抄下草稿】"，正文"RDK X5 5 分钟跑通 YOLO-World 开放词汇目标检测"；章节自顶向下依次为——环境与准备（设备 RDK X5 8GB、系统 RDK 官方 Ubuntu 22.04 + TROS Humble、摄像头普通 USB 免驱 720P、软件包 tros-humble-hobot-yolo-world v0.4.1）；完整运行步骤（1 安装软件 / 2 准备配置与环境 / 3 启动检测服务，含 USB 摄像头版 / MIPI 摄像头版 / 本地图片测试版三段 bash 命令）；实测性能数据表（推理帧率 ~6fps / 单帧推理耗时 ~150ms / BPU 占用率 ~60% / 全分区资源 76bit）；效果查看（提供 http://板子IP:8000 / 若弹出独立窗口可使用 studio_open_url）；常见问题与解决（浏览器不开 / 启动成功但页面不开 / 摄像头不能用 / 检测框不稳定 / 检测不到物体 5 个常见场景的原因与命令）；进阶玩法（自定义检测类别 yolo_world_texts、保存检测结果、二次开发）；总结段落建议直接按此步骤复制操作](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/showcase-case3-forum-draft.png)

观察到的要点：

- 草稿结构按社区发帖常见骨架组织：环境、步骤、实测、问题、进阶
- 步骤中的 bash 命令、路径、软件包版本直接来自案例 2 的实际运行过程
- 实测性能数据（推理帧率、耗时、BPU 占用）由 Agent 读取日志后填入
- "常见问题与解决"来自 Agent 的经验内化 + 检索，不是凭空生成

## 三个案例的共通观察

| 维度 | 表现 |
|---|---|
| 任务拆分 | 案例 1 是 6 步体检；案例 2 是"计划 → 确认 → 执行 → 验证"；案例 3 是"经验重组 → 发帖格式" |
| 工具调用 | SSH 执行、文件读写、官方文档检索、OpenClaw 专家、Web URL 打开等均参与 |
| 原始输出 | 每条命令的 stdout / 日志在对话面板流式展示，可复制用于复现 |
| 二次确认 | 动作类任务（重启服务、关键命令）均以"执行"按钮二次确认 |
| 产出形态 | 表格、步骤清单、发帖草稿、Web 页面等多形态产出 |
| 中断方式 | 面板内"结束当前 / 全部停止"按钮 + Esc 键 |

工具调用与设备感知的技术细节见 [3.2.2 设备感知与工具调用](../3-user-guide/2-ai-chat/2-device-aware-tools.md)。

## 复现要求

1. 完成 [2.1 安装与登录](../2-quick-start/1-install-and-login.md) 并接入一台 RDK 板
2. 在 [2.5 配置 AI 模型](../2-quick-start/5-configure-ai-model.md) 中激活一个可达的模型
3. 案例 2 需要 USB 摄像头接入（或按步骤切换 MIPI / 本地图片版本）
4. 在 AI Dock 输入本节的 Prompt

Agent 的回复会因模型随机性、板上模型库版本、系统状态而略有差异。
