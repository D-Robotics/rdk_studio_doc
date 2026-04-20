---
sidebar_label: '3.10.2 部署与卸载'
title: 3.10.2 部署与卸载
---

# 3.10.2 部署与卸载

OpenClaw 的部署是一键操作。Studio 会完成环境检查、依赖安装、systemd 注册、网关启动等全部步骤；开发者无需手动 SSH 进板端配置。

## 部署前的环境要求

| 项 | 要求 |
|---|---|
| 板端 Node.js | 18 及以上（推荐 22.x） |
| 板端可用磁盘 | 至少 1 GB |
| 板端可用内存 | 至少 200 MB（OpenClaw 启动后占用约 150 MB） |
| 板端网络 | 安装期间需要能访问 npm 镜像（默认使用国内 npmmirror） |
| 板端用户 | 需要能写 systemd 用户服务目录 |

如果板端 Node 版本不达标，Studio 会提示先升级 Node：

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo bash -
sudo apt install -y nodejs
```

## 一键部署流程

1. 进入 *OpenClaw* tab
2. 看到"未安装"横幅 + "一键部署到当前设备"按钮
3. 点击 *一键部署*
4. 弹出环境检查结果（Node 版本、磁盘、网络、端口冲突）
5. 点击 *确认安装*
6. 实时滚动安装日志：

   ```
   ✓ 检查 Node v22+
   ✓ 配 npm fast registry
   ✓ npm install -g openclaw
   ✓ 注册 systemd 用户服务
   ✓ 启动并监听板端 18789
   ✓ Studio 与网关握手成功
   ```

7. 安装完成，横幅变绿"OpenClaw 已就绪"

实际耗时通常 1~3 分钟。弱网环境可能更长（最多由环境变量 `OPENCLAW_INSTALL_TIMEOUT_MS` 控制，默认 45 分钟硬上限）。

## 部署失败的常见原因

| 现象 | 原因 | 解决 |
|---|---|---|
| 卡在"准备环境" | Node 版本不达标 | SSH 进板端检查 `node --version`，按需升级 |
| 卡在"同步技能"超过 5 分钟 | 板端网络慢或 ClawHub 不可达 | 切换到国内镜像或重新部署 |
| 卡在"启动并监听端口" | 18789 端口被占用 | SSH 进板端 `ss -tlnp \| grep 18789` 看占用，kill 或换端口 |
| 卡在"工作区不可写" | 板端默认 `/app` 目录只读 | 在 *部署设置* 中手动指定可写目录（如 `/userdata/openclaw`） |

完整的故障排查见 [5.6 OpenClaw 安装失败](../../5-faq/6-openclaw-install-failed.md)。

## 升级与卸载

| 操作 | 入口 | 行为 |
|---|---|---|
| 升级 | OpenClaw tab 顶部 *升级* 按钮 | 拉取最新版 npm 包重装；保留状态机数据与配置 |
| 重启 | *重启* 按钮 | `systemctl --user restart openclaw`，常用于卡顿恢复 |
| 卸载 | *设置* → *卸载* | 停止服务、删除二进制、保留用户数据（如需彻底清理需手动删 `~/openclaw/`） |
| 重置 | *设置* → *重置* | 清空状态机与配置，但保留二进制；用于"重新配置"场景 |

升级与重启是无损操作，适合定期执行。卸载与重置会清除部分数据，需要谨慎。
