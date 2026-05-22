---
sidebar_label: '3.7 烧录'
title: 3.7 烧录
---

# 3.7 烧录

![烧录向导：选择要烧录的设备类型](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/08-burnning.png)

烧录页用于给开发板安装或重装系统。按页面提示选择板型、选择镜像、选择写入目标，然后等待完成。

[2.2 烧录系统镜像](../../2-quick-start/2-flash-system.md) 提供了最快上手流程。下面按不同设备和存储方式展开说明。

## 使用顺序

| 顺序 | 你要做什么 |
|---|---|
| 1 | 先确认要烧录的板型 |
| 2 | 选择官方推荐镜像，或上传团队提供的镜像 |
| 3 | 选择写入目标，认真确认不是电脑系统盘 |
| 4 | 开始烧录后等待完成，不要拔线或让电脑休眠 |
| 5 | 烧录完成后，再把设备启动并接入 RDK Studio |

常见选择很简单：RDK X3 / X5 通常从 TF 卡烧录开始；带 eMMC 的 RDK X5 可以使用 eMMC 烧录；RDK S100 使用专用 xburn 工具。

## 继续阅读

- [3.7.2 TF 卡烧录](./2-tf-card.md)：RDK X3 与 RDK X5 的常用装系统方式
- [3.7.3 eMMC 烧录](./3-emmc.md)：RDK X5 带 eMMC 版本的烧录与备份还原
- [3.7.4 S100 烧录](./4-s100-xburn.md)：RDK S100 的专用烧录流程
