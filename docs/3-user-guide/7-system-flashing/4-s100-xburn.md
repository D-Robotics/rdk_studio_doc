---
sidebar_label: '3.7.4 RDK S100 xburn'
title: 3.7.4 RDK S100 xburn
---

# 3.7.4 RDK S100 xburn

RDK S100 使用专用的 xburn 工具链，不能像 RDK X3 与 X5 那样直接烧录 TF 卡。xburn-gui 是 D-Robotics 提供的图形化烧录工具，支持 Windows、macOS、Linux 三个平台。

## 操作步骤

1. 在桌面客户端进入 *系统烧录 → S100*
2. Studio 提供 xburn-gui 的下载链接（按当前 PC 平台自动选择）
3. 下载并安装 xburn-gui
4. 准备镜像文件，通常为 `product.zip` 或解压后的目录
5. 按 Studio 内的烧录指引在 xburn-gui 中完成烧录

桌面客户端在系统支持时也可以提供 *打开本机 xburn* 与 *命令行一键烧写* 入口，避免开发者手动启动外部工具。

## xburn-gui 的获取

| 平台 | 下载方式 |
|---|---|
| Windows | Studio 烧录页提供 Windows 安装包链接 |
| macOS | Studio 烧录页提供 dmg 链接（同时支持 Apple Silicon 与 Intel） |
| Linux | Studio 烧录页提供 deb 或 AppImage 链接 |

xburn-gui 的最新版本由 D-Robotics 维护，详细使用文档请查阅 [RDK 官方文档](https://developer.d-robotics.cc/rdk_doc) 中的 RDK S100 烧录章节。

## 镜像准备

RDK S100 镜像通常以 `product.zip` 形式发布，包含：

- 系统镜像本体
- 启动加载器
- 分区表
- 校验信息

不要手动解压并修改其中的文件，否则可能导致烧录失败或板端无法启动。直接将 `product.zip` 提供给 xburn-gui 即可。

## 常见问题

| 现象 | 排查 |
|---|---|
| xburn-gui 无法启动 | 缺少底层驱动，按 D-Robotics 官方文档安装 |
| 板端无响应 | 检查 USB 数据线是否为全功能线、boot 模式是否正确 |
| 烧录中途失败 | 重新插拔板端 USB，重试；持续失败时检查 product.zip 是否完整 |

如果排障无果，建议查阅 [RDK 开发者社区](https://developer.d-robotics.cc) 的 S100 板块或在 AI Dock 中描述具体报错。
