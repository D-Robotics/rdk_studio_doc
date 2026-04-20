---
sidebar_label: '1.5 版本说明'
title: 1.5 版本说明
---

# 1.5 版本说明

![配置中心 · 应用与更新区域](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/settings-app-update.png)

## 当前手册描述的版本

本手册描述 **RDK Studio 1.1.x** 系列。如果你看到的客户端界面与本手册描述明显不一致，建议先升级客户端。

## 版本检查与升级

打开桌面客户端，依次进入 *设置面板 → 应用与更新*，可以查看当前版本号、检查最新发布版本、一键升级。Studio 升级会保留所有本机配置（设备列表、模型条目、安装的技能、历史对话），不会丢失数据。

CLI 工具的版本可以通过命令查看：

```bash
rdkstudio --version
dmoss-agent --version
```

> `@dmoss/agent` 是 npm 包名，安装后命令名是 `dmoss-agent`（无 `@` 前缀）。

升级 CLI：

```bash
# rdkstudio 由桌面客户端管理，重新启用即可同步到最新
# 设置面板 → 应用与更新 → 命令行工具 → 重新启用

# dmoss-agent 通过 npm 升级
npm install -g @dmoss/agent@latest
```

## 发布说明

完整的版本发布说明请点击 RDK Studio 页面左下角的版本号查阅更新说明。

## 反馈渠道

如果您在使用过程中遇到问题，可以通过以下方式获取帮助：

- 🌐 [开发者社区](https://developer.d-robotics.cc/)
- 📧 [技术支持邮箱](mailto:developer@d-robotics.cc)
- 📱 [官方技术交流群](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=dd2ra5d5-a239-4b4d-bc26-46e3374d1428)
-  客户端内 *设置面板 → 应用与更新 → 诊断包导出*：把诊断信息发送给我们排查，诊断包包含本机配置、最近的对话日志（已脱敏）、客户端运行时日志，不包含 API Key 与板端 SSH 密码。
