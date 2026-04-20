---
sidebar_label: '3.5.2 系统要求'
title: 3.5.2 系统要求
---

# 3.5.2 系统要求

远程 IDE 在板端运行 code-server 实例，因此对板端的硬件、磁盘、网络有一定要求。本节列出最低要求与推荐配置。

## 硬件要求

| 项 | 最低 | 推荐 |
|---|---|---|
| 设备架构 | ARM64 | ARM64 |
| 板端可用内存 | 1 GB | 2 GB |
| 板端可用磁盘 | code-server 本身约 200 MB；项目空间另计 | 至少 5 GB 项目空间 |
| 网络 | 安装期间需要板端能访问内置镜像（D-Robotics CDN） | 同上 |

RDK X3、X5、S100 三款板均满足要求。如果在多个项目并行开发或安装大量扩展，建议预留 2 GB 内存与 5 GB 磁盘。

## 不支持的环境

| 环境 | 原因 |
|---|---|
| x86 / x64 板端 | code-server 仅打包了 ARM64 版本 |
| 无 systemd 的精简镜像 | 自动部署依赖 systemd 注册服务 |
| 无 apt 的非 Debian 系镜像 | 自动安装依赖 dpkg / apt |

如果板端是上述非标环境，可以参考 [code-server 官方文档](https://github.com/coder/code-server) 手动部署。

## 扩展兼容性

VS Code 大多数扩展可以在 code-server 中使用，但 ARM64 架构有以下限制：

| 扩展类型 | 支持 |
|---|---|
| 纯 JavaScript 扩展 | 完全支持 |
| 含 ARM64 二进制的扩展 | 支持 |
| 仅含 x86 / x64 二进制的扩展 | 不支持（最常见的是 Pylance） |

判断扩展是否兼容的方法：在 VS Code Marketplace 的扩展页面查看"Requirements"或"Platform support"一栏，确认包含 `linux-arm64`。
