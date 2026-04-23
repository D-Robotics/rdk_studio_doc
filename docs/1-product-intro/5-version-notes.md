---
sidebar_label: '1.5 版本说明'
title: 1.5 版本说明
---

# 1.5 版本说明


## 当前手册描述的版本

本手册描述 **RDK Studio 1.1.x** 系列。如果你看到的客户端界面与本手册描述明显不一致，建议先升级客户端。
老版本 RDK Studio 客户端的下载地址及用户手册请参考[RDK Studio 使用指南](https://developer.d-robotics.cc/rdk_doc/RDK_Studio)。

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

## 更新日志

### 版本号：v1.1.2

#### 更新内容

- 远程桌面（VNC）

    修复桌面安装版连接远程桌面时立即报 “Connection closed (code 1006)” 的问题。内置服务端口 fallback（8788+/49152+）与 file:// 跨源 SSO Cookie 两类根因一并兜底。

- 远程桌面

    noVNC 握手 URL 改为跟随 Electron 实际后端端口，并在 WebSocket 握手的 query 上附带 SSO 会话镜像，打包态与开发态行为一致。

### 版本号：v1.0.10

#### 更新内容

- Studio 局域网 Mesh

    设置 → 设备连接中可开关，与持久化配置及 API 同步；若已设置 RDK_STUDIO_MESH=false，界面会禁用并提示需改环境变量后重启。
    Studio Mesh 端口使用 RDK_STUDIO_MESH_PORT（默认 19090），与独立 CLI 的 DMOSS_MESH_PORT 分离，避免同一环境里端口混用。

### 版本号：v1.0.9

#### 更新内容

- Moss 记忆

    - 偏好与设备/项目类追问支持多路中英关键词检索合并，跨语言召回更稳。
    - 记忆写入前轻量安检。
    - 索引体量接近上限时提示整理。

- 安全与人设

    - 拦截危险或越权工具后明确告知用户，禁止换命令伪造结果。
    - 系统托管配置文件不向用户泄露内容。

- 多模态与 AI Dock

    - 附件按类型给模型与输入区提示。
    - 仅发附件时气泡可读摘要。
    - 外部渠道附件处理指引更明确。

- @dmoss/agent CLI

    自动向上加载 .env（含 monorepo 根目录），本地密钥与 Studio 一致时可直接 `npm run cli`。

- 研发

    `ai-dock-capability-probe` 能力探针场景与通过准则更新。


## 联系我们

如果您在使用过程中遇到问题，可以通过以下方式获取帮助：

- 🌐 [开发者社区](https://developer.d-robotics.cc/)
- 📧 [技术支持邮箱](mailto:developer@d-robotics.cc)
- 📱 [官方技术交流群](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=dd2ra5d5-a239-4b4d-bc26-46e3374d1428)
