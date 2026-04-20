---
sidebar_label: '3.5.1 安装与初始化'
title: 3.5.1 安装与初始化
---

# 3.5.1 安装与初始化

第一次打开 IDE tab 时，Studio 会检测板端是否已安装 code-server，如未安装则引导完成自动部署。整个过程无需开发者手动配置。

## 自动安装流程

1. Studio 通过 SSH 检测板端是否已安装 `code-server`
2. 未安装时弹出确认对话框："需要安装 code-server，是否继续？"
3. 开发者点击 *继续* 后，Studio 从内置 BOS 镜像下载对应板端架构（ARM64）的 deb 包
4. 在板端运行 `dpkg -i` 完成安装
5. 注册 systemd 服务并启动，监听本地端口（默认 8080）
6. Studio 客户端通过 SSH 隧道在内嵌窗口打开 code-server

首次安装通常耗时 2~5 分钟（取决于板端网络与磁盘速度）。安装完成后，再次打开 IDE tab 是秒开。

## 安装位置

| 项 | 路径 |
|---|---|
| 二进制 | `/usr/lib/code-server/` |
| 配置文件 | `~/.config/code-server/config.yaml` |
| 用户数据 | `~/.local/share/code-server/` |
| systemd 服务 | `code-server.service` |

如需手动卸载或重装，可通过 `sudo apt remove code-server` 卸载，再删除上述目录后重新安装。

## 启动后默认状态

code-server 启动后默认绑定本地端口 8080，仅监听 `127.0.0.1`，不暴露公网。Studio 客户端通过 SSH 隧道访问该端口，类似 `ssh -L 8080:localhost:8080 root@<板端IP>` 的效果，但完全自动化。

如需手动通过浏览器访问 code-server（例如使用同一台 PC 的本地浏览器调试），可以在 SSH 命令中建立端口转发后访问 `http://localhost:8080`。
