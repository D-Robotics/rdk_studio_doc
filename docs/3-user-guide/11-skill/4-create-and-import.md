---
sidebar_label: '3.11.4 创建与导入技能'
title: 3.11.4 创建与导入技能
---

# 3.11.4 创建与导入技能

技能工坊支持两种方式产生新技能：从模板创建（含 AI 辅助生成）、从外部 URL 导入（GitHub、NodeHub、普通网页）。两种方式都能把开发者的需求转化为标准 SKILL.md。

![创建自定义技能表单：描述框 + 技能 ID + SKILL.md 内容编辑器，底部是"部署到套件端 / 重置模板"按钮](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/skill-create-form.png)

![链接转技能表单：粘贴 GitHub / NodeHub / 文档 URL，补充目标说明，两阶段 AI 辅助转换为 SKILL.md](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/skill-link-import.png)

## 创建流程（模板 + AI 辅助）

| 步骤 | 操作 |
|---|---|
| 1 | *技能工坊 → 技能中心 → 创建* 选择空模板（已预填 frontmatter 字段与注释） |
| 2 | 在描述框中说明技能的用途，例如"教 AI 在 RDK X5 WiFi 不稳定时如何切到 2.4 GHz" |
| 3 | AI 自动生成完整 SKILL.md 草稿（含 trigger、risk、正文步骤） |
| 4 | 在编辑器中调整：补充实际命令、修正 trigger、调整 risk |
| 5 | 测试触发：输入测试场景（如"WiFi 不稳"），Studio 用 trigger 关键词模拟匹配 |
| 6 | 装到本地或部署到板端 |

AI 辅助生成的 SKILL.md 通常质量较好，但仍需要开发者审核：

- 检查 trigger 关键词是否过宽泛（容易与无关对话冲突）或过狭窄（不容易命中）
- 确认 risk 等级是否准确（涉及破坏性命令应至少 medium）
- 验证正文的命令是否真的有效（AI 可能生成看起来对但实际不存在的命令）

## URL 导入流程

把任意外部内容转化为技能：

| 步骤 | 操作 |
|---|---|
| 1 | *技能工坊 → 技能中心 → 链接* |
| 2 | 粘贴 URL，Studio 自动识别来源类型 |
| 3 | 填写目标描述："我想让 AI 学会 X" |
| 4 | 选择适用设备型号（X3 / X5 / S100 / 通用） |
| 5 | AI 抓取 URL 内容并转化为 SKILL.md |
| 6 | 在编辑器中调整 |
| 7 | 装到本地或部署到板端 |

## 来源识别

| 来源 | 识别规则 | AI 处理方式 |
|---|---|---|
| GitHub 仓库 | URL 含 `github.com/...` | 抓取 README + 仓库结构，提取关键命令与流程 |
| NodeHub 案例 | URL 含 `developer.d-robotics.cc/nodehub` | 抓取案例文档与运行说明 |
| 普通网页或博客 | 默认 | 抓取 HTML 正文，提取技术内容 |

GitHub 与 NodeHub 的识别有专门的解析逻辑，结果通常比普通网页更准确。普通网页（如博客文章）的转化质量取决于内容结构。

## URL 导入的局限

| 局限 | 说明 |
|---|---|
| 内容超长 | 超过 50 KB 的网页可能截断或转化失败 |
| 含交互元素 | 网页中需要 JavaScript 渲染的内容可能丢失 |
| 反爬虫机制 | 部分网站拒绝抓取请求 |
| 视频或图片 | 仅提取文字描述，无法理解视频或图片内容 |

如果 URL 导入失败，可以手动复制网页内容到本地，自己整理为 SKILL.md 后通过 *技能工坊 → 创建* 提交。

## 写出好技能的几个建议

| 建议 | 解释 |
|---|---|
| 先写 description 再写正文 | 想清楚"AI 在什么场景会用它"，才能写出对应的步骤 |
| trigger 不要太宽泛 | 不要写 `trigger: 摄像头`——会跟所有摄像头话题冲突；用 `trigger: USB摄像头黑屏,hobot_usb_cam,code -6` 等具体场景 |
| 正文用步骤化 | `1. 2. 3.` 而不是大段散文，AI 解析更稳定 |
| 附完整命令 | 别写"看一下进程"，写 `ps aux \| grep ros` 等完整命令 |
| 加反例 | "以下做法不要做"往往比"应该这样做"更有教育意义 |
