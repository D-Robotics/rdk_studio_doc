---
sidebar_label: '5.6 OpenClaw 安装失败'
title: 5.6 OpenClaw 安装失败
---

# 5.6 OpenClaw 安装失败

## 典型现象

在 *OpenClaw* tab 点击"一键部署"后：

- 卡在"同步技能"很长时间不动
- 报错"网关无法 register"
- 报错"板端工作区不可写"
- 卡在"安装 npm 全局包"

## 快速判断

根据卡住的具体阶段判断：

| 卡在哪里 | 怎么办 |
|---|---|
| 卡在"准备环境" | 板端未装 Node 或版本 < 18，SSH 进板端执行 `node -v` 确认 |
| 卡在"同步技能"很久 | 正常行为，首次同步几十个技能需要 1~3 分钟 |
| 网关无法 register | 板端 18789 端口不可达，SSH 进板端 `netstat -tlnp \| grep 18789` |
| 工作区不可写 | 默认 `/app` 在部分镜像只读，需要换板端目录 |

## 排查清单

1. **同步技能慢**

   首次部署时同步几十个技能需要 **1~3 分钟**属于正常现象。超过 5 分钟无任何进展才开始排查。

2. **工作区路径不可写**

   板端的 `/app` 在部分 RDK 镜像中是只读的。Studio 会自动探测可写路径（如 `~/openclaw`、`/userdata/openclaw`）。如果探测错误，在 *OpenClaw 面板 → 部署设置* 中手动指定可写目录。

3. **板端 Node 版本**

   SSH 进板端执行 `node --version` 确认版本 ≥ 18。如果不达标：

   ```bash
   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo bash -
   sudo apt install -y nodejs
   ```

4. **板端网络**

   如果板端 npm 无法访问默认镜像：

   ```bash
   npm config set registry https://registry.npmmirror.com
   ```

5. **网关 18789 端口被占**

   检查端口占用：

   ```bash
   ss -tlnp | grep 18789
   ```

   kill 占用进程或在 *部署设置* 中换端口。

## 永久解决

- 部署前使用 *OpenClaw 面板* 顶部的"预检"按钮（如有）自动运行 Node / 磁盘 / 端口三项检查
- 装完立刻在 *OpenClaw 面板 → 健康* 跑一次完整健康检查，留下基线数据便于后续对比
- 生产板固定使用官方推荐镜像，避免第三方镜像带来的兼容性问题
