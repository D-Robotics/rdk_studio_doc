---
sidebar_label: '3.15 命令行工具'
title: 3.15 命令行工具
---

# 3.15 命令行工具

![rdkstudio --help 终端输出：列出常见任务、用法、选项、交互命令、环境变量、Tips、端到端示例等完整信息](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/cli-help.png)

不需要打开桌面客户端也能使用 RDK Studio 的 AI 与设备能力。Studio 提供两条独立的命令行工具，分别面向不同场景：

| CLI | 来源 | 适用场景 |
|---|---|---|
| `rdkstudio` | 桌面客户端启用 CLI 后写入系统 PATH | 与桌面客户端配套，自动化日常任务 |
| `dmoss-agent` | 独立 NPM 包 `@dmoss/agent`（安装后命令名是 `dmoss-agent`） | CI / CD、Docker、嵌入式脚本，纯 Agent 场景 |

两者**不是同一个工具**——使用前需要清楚选择哪一个。如果不确定，多数场景使用 `rdkstudio` 即可。

## 本节包含

- [3.15.1 rdkstudio](./1-rdkstudio.md)：产品 CLI 的启用、子命令、常用 flag
- [3.15.2 @dmoss/agent](./2-dmoss-agent.md)：独立 Agent CLI 的安装、配置、独有能力
- [3.15.3 自动化场景示例](./3-automation-examples.md)：CI 代码审查、定时巡检、AI 总结日志
