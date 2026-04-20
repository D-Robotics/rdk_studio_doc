---
sidebar_label: '3.5 远程 IDE'
title: 3.5 远程 IDE
---

# 3.5 远程 IDE

![远程 IDE 入口：Studio 内嵌的 code-server 启动页，顶栏显示已连接 RDK X5 设备（root@192.168.128.10:22），中央"打开 code-server"按钮，下方列出"F11 全屏模式 / 悬浮窗 / AI 对话区联动 / 设备端口 9888 / 中文 UI + 插件生态"等特性](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/remote-ide.png)

点击"打开 code-server"进入浏览器版完整 VS Code：

![浏览器版 VS Code（code-server 加载完成）：左侧文件树列出板端 /root 下的文件，右侧是 Welcome 页面的 "Get Started with VS Code for the Web" 教程](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/remote-ide-connected.png)

远程 IDE 在 RDK Studio 内提供完整的 VS Code 体验，基于 code-server 实现。所有文件、Git 仓库、调试器、终端都在板端原地工作——开发者不需要把代码同步回 PC，Studio 客户端只是 UI 容器。

## 与文件管理的区别

| 使用场景 | 推荐 |
|---|---|
| 修改一两个文件、快速查看代码 | [3.4 文件管理](../4-file-manager/index.md)（Monaco Editor 即开即用） |
| 项目级开发、多文件、Git、调试 | 本节远程 IDE |
| 跑命令、看长输出 | [3.3 远程终端](../3-remote-terminal/index.md) 或 IDE 集成终端 |

简单说：文件管理面向"快速改一改"，远程 IDE 面向"开发整个项目"。

## 本节包含

- [3.5.1 安装与初始化](./1-install-and-init.md)：第一次打开 IDE 时的自动安装流程
- [3.5.2 系统要求](./2-system-requirements.md)：板端硬件与网络要求
- [3.5.3 浮窗模式与扩展管理](./3-floating-window.md)：桌面客户端独有的浮窗模式与推荐扩展
