---
sidebar_label: '3.4 文件管理'
title: 3.4 文件管理
---

# 3.4 文件管理

![文件管理界面：左侧目录树、右侧文件列表、顶部路径面包屑](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/06-file.png)

文件管理是 RDK Studio 内的板端文件可视化操作界面，提供目录浏览、上传、下载、在线编辑能力。所有文件传输基于 SFTP 协议（即 SSH 子协议），全程加密，不经过任何明文传输——这与传统 FTP 完全不同。

文件管理与 AI Dock 的文件操作工具（`device_file_read`、`device_file_write`、`device_file_list`）共享同一文件系统：开发者在文件管理中编辑保存的文件，AI 下次读取时能看到新内容；AI 修改的文件，开发者刷新文件管理后能看到 AI 的修改。

## 本节包含

- [3.4.1 目录浏览与传输](./1-browse-and-transfer.md)：左侧目录树、右侧文件列表、拖拽上传、批量下载
- [3.4.2 在线编辑](./2-online-edit.md)：基于 Monaco Editor 的浏览器内编辑器，支持的文件类型与限制
- [3.4.3 路径访问控制](./3-path-access-control.md)：敏感路径（/sys、/proc）的写入限制与例外授权
