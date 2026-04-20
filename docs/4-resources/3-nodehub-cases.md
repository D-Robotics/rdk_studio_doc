---
sidebar_label: '4.3 NodeHub 案例'
title: 4.3 NodeHub 案例
---

# 4.3 NodeHub 案例

NodeHub 是 D-Robotics 官方的**案例分享平台**。与 ClawHub 分享单文件 SKILL.md 不同，NodeHub 分享的是**完整的项目代码**（含 README、依赖声明、可选的配套 SKILL.md）。

## NodeHub 与其他平台的分工

| 平台 | 内容 | 适用 | 入口 |
|---|---|---|---|
| NodeHub | 完整项目案例（带板型与分类） | 直接拿来跑通的端到端示例 | https://developer.d-robotics.cc/nodehub |
| ClawHub | SKILL.md 单文件技能 | 给 AI Agent 加"操作策略" | Studio 内 *技能工坊 → ClawHub 社区* |
| GitHub | 任意代码 | 通用代码托管，无专门的 RDK 分类 | github.com |

NodeHub 是专门针对 RDK 生态的聚合平台，按板型与应用类型分类，方便 RDK 开发者找到"直接能跑"的参考实现。

## 发布案例到 NodeHub

### 第 1 步：准备项目

确保项目包含：

| 必须 | 推荐 | 可选 |
|---|---|---|
| 源代码（公开仓库或压缩包） | README 说明文档（如何跑、依赖项） | SKILL.md（让 AI 能直接调用你的项目） |
| 适用板型说明 | 截图 / 动图展示效果 | 视频教程链接 |

### 第 2 步：登录 NodeHub

访问 https://developer.d-robotics.cc/nodehub，用 D-Robotics 开发者账号登录。

### 第 3 步：创建案例

点击 *发布案例*，填写：

- 案例标题
- 一句话描述
- 适用板卡（X3 / X5 / S100 / 通用）
- 分类标签（视觉、ROS、控制、AI 推理等）

### 第 4 步：上传内容

| 方式 | 适用 |
|---|---|
| 关联 GitHub 仓库 | 代码已经在 GitHub（推荐） |
| 上传 zip 包 | 不想用 Git 的场景 |

### 第 5 步：审核

提交后由 NodeHub 官方审核。审核通过后案例对所有 RDK 开发者公开可见。

## 从 NodeHub 获取案例

NodeHub 网站提供以下浏览方式：

| 浏览方式 | 入口 |
|---|---|
| 浏览首页推荐 | NodeHub 首页 |
| 按板卡 / 分类筛选 | 顶部分类导航 |
| 关键词搜索 | 顶部搜索框 |
| 查看详情 | 点案例标题 → 详情页（运行说明 + 用户评价） |

获取代码的方式：

| 方式 | 操作 |
|---|---|
| 直接 git clone | 案例页给出的 GitHub 链接 |
| 在 Studio 中转化为技能 | *技能工坊 → 从 URL 导入* → 粘贴 NodeHub 案例 URL → AI 自动转 SKILL.md |
| 直接下载 zip | 案例页 *下载* 按钮 |

Studio 当前**不支持**在 Studio 内浏览 NodeHub 案例 + 一键传到板端这种闭环操作。需要开发者在 NodeHub 网站手动下载代码，然后用 Studio 的 *文件管理* 或 *远程终端* 传到板端。

## 案例与 Skill 的协作模式

很多 NodeHub 案例附带配套 SKILL.md。这种"代码 + 技能"的组合让同一个案例同时服务两类用户：

- 开发者：git clone 仓库，参考代码实现
- AI Agent：导入 SKILL.md，学会"如何运行这个案例"

典型工作流：

1. 在 NodeHub 找到一个 ROS 摄像头检测案例
2. git clone 到板端，参考 README 手动运行一次验证
3. 把配套的 SKILL.md 用 *技能工坊 → 从 URL 导入* 装到 Studio
4. 之后在 AI Dock 中说"跑一下那个摄像头检测案例"，Agent 会按 SKILL.md 的步骤启动

## 优秀案例的特征

| 特征 | 说明 |
|---|---|
| README 完整 | 至少包含：环境要求、安装步骤、运行命令、预期结果 |
| 适配多板型 | 用条件判断处理不同板的差异（如 `if RDK_BOARD == 'X5'`） |
| 错误处理完善 | 不假设环境完美，常见错误给提示 |
| 截图或视频 | 让人一眼看到"这是干嘛的" |
| 附配套 SKILL.md | 让 AI Agent 也能直接使用 |
| 定期更新 | 响应 RDK 系统版本升级与用户反馈 |

发布前参考这些特征自查项目完成度。
