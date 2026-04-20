---
sidebar_label: '3.11.3 ClawHub 社区技能'
title: 3.11.3 ClawHub 社区技能
---

# 3.11.3 ClawHub 社区技能

![能力市场（SkillHub）：左侧可切换 SkillHub / 板端技能，顶部搜索框，右侧为所选技能的详情预览](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/skill-marketplace.png)

ClawHub 是 SKILL.md 的注册中心，类似 npm Registry 之于 npm 包、PyPI 之于 Python 包。RDK Studio 通过 *技能工坊* 内嵌的 ClawHub 客户端搜索、预览、安装第三方开发者发布的技能。

ClawHub 与 SkillHub 同源（共享同一份注册表数据），只是名称不同。

## 默认配置

| 项 | 默认值 |
|---|---|
| 注册中心 URL | 国内镜像（提速访问） |
| 搜索缓存 | 24 小时 |
| 安装目录 | 与本地技能同位置：`<仓库根>/skills/community/<技能名>/` |

如果默认镜像不可达，可以在 *配置中心 → AI 引擎* 中修改 `CLAWHUB_REGISTRY` 为其他镜像或官方源。

## 搜索与预览

| 操作 | 路径 |
|---|---|
| 关键词搜索 | *技能工坊 → 技能中心 → ClawHub 社区* → 顶部搜索框 |
| 按分类浏览 | 左侧分类导航 |
| 查看技能详情 | 点击技能名 → 右侧显示 SKILL.md 全文与 frontmatter |

详情页可以查看：

- 技能的完整 description 与 trigger
- 风险等级与权限要求
- 维护者信息（用户名、license、版本说明）
- 最后更新时间与下载量
- SKILL.md 正文渲染后的视图

## 一键安装

| 操作 | 行为 |
|---|---|
| 安装到本地 | 把 SKILL.md 下载到本机 `skills/community/<技能名>/`，PC 端 D-Moss Agent 立即可用 |
| 部署到板端 | 通过 OpenClaw 同步到板端 OpenClaw 工作区，板端 Agent 也能用 |
| 批量部署 | 勾选多个技能 → *批量装*，按顺序安装 |

安装后 Studio 自动扫描技能目录，新技能立即可用，无需重启客户端。

## 卸载

| 入口 | 操作 |
|---|---|
| *技能工坊 → 已安装* 列表 | 选中技能 → *卸载* |
| 直接删除文件 | 删除 `skills/community/<技能名>/` 目录，刷新 *已安装* 列表 |

卸载只移除 SKILL.md 文件，不影响其他技能与 Agent 行为。

## 搜索无结果的处理

如果 ClawHub 搜索返回空：

1. 确认网络可达 ClawHub 域名（如默认镜像不可达，尝试切换镜像）
2. 关键词换更通用的词（"BPU 调试"换成 "BPU"）
3. 检查搜索是否启用了过滤条件（板型、分类等）
4. ClawHub 上确实没有该主题的技能——考虑自己创建一个，参考 [3.11.4 创建与导入技能](./4-create-and-import.md)

## 让 AI 帮你找技能

在 AI Dock 中描述需求："有没有让我能调试 USB 摄像头的技能？" Agent 会在内置目录与 ClawHub 中搜索，列出几个候选并简要说明各自的能力，开发者选择后让 Agent 执行安装。
