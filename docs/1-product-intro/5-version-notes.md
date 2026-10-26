---
sidebar_label: '1.5 版本说明'
title: 1.5 版本说明
---

# 1.5 版本说明

本手册按 RDK Studio **1.5.0 功能基线**更新。具体安装包是否已发布、是否可升级，以官方发布入口和 **设置 → 应用与更新** 为准。

## 本轮手册更新

| 变化 | 阅读位置 |
|---|---|
| 新任务可使用 Moss 或 DSH，已有任务保持原引擎 | [运行引擎与模型](../3-user-guide/2-ai-chat/6-dual-lane.md) |
| 工作方式区分执行、计划与 Spec | [AI Dock](../3-user-guide/2-ai-chat/index.md) |
| 项目可绑定本机与板端目录，明确工作位置 | [工作台](../3-user-guide/1-workbench/index.md) |
| 本机历史恢复、账号切换和 DSH 删除的区别 | [历史会话](../3-user-guide/2-ai-chat/3-multi-session.md) |
| 普通回复聚焦结果，更多菜单查看已有执行记录 | [设备操作与结果](../3-user-guide/2-ai-chat/2-device-aware-tools.md) |
| 扩展中心、MCP 与本机主模型配置 | [扩展中心](../3-user-guide/11-skill/index.md)、[模型设置](../3-user-guide/13-config-center/3-ai-engine.md) |
| 积木编程、仿真、项目与案例导入导出 | [积木工作室](../3-user-guide/17-block-studio/index.md) |

## 查看与升级

在桌面客户端打开 **设置 → 应用与更新**，查看版本并检查更新。网页版不通过桌面自动更新器升级。

升级前保存代码和文件。新版会尝试迁移并校验旧本机历史；遇到恢复失败或空间不足时，保留原数据，恢复存储和本地服务后重试。不要用重置清理来处理历史恢复问题。

本机项目、对话、模型、技能和设备配置不应只依靠升级保留，重要资料仍需独立备份。[模型配置导出](../3-user-guide/13-config-center/5-import-export.md)不包含项目代码或历史对话。

需要帮助时，从客户端资源与支持中的论坛或反馈入口提交问题，附上版本和脱敏后的错误信息。
