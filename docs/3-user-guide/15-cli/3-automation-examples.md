---
sidebar_label: '3.15.3 自动化场景示例'
title: 3.15.3 自动化场景示例
---

# 3.15.3 自动化场景示例

本节给出三个典型的自动化场景，展示 CLI 在 CI、定时任务、日志分析中的用法。每个示例可以直接复制到生产环境使用。

## CI 中跑代码审查

在 GitHub Actions 工作流中使用 `@dmoss/agent` 审查 PR 差异：

```yaml
# .github/workflows/review.yml
name: AI Code Review

on:
  pull_request:
    branches: [main]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v4
        with:
          node-version: '22'

      - name: Install @dmoss/agent
        run: npm install -g @dmoss/agent

      - name: Review diff
        env:
          DMOSS_API_KEY: ${{ secrets.DMOSS_API_KEY }}
          DMOSS_MODEL: claude-sonnet-4-20250514
          DMOSS_BASE_URL: https://api.anthropic.com
        run: |
          git diff origin/main HEAD | dmoss-agent --pipe \
            "review the diff, focus on bugs and missing tests"
```

Agent 会分析 diff、指出潜在 bug、建议补充测试。输出在 Action 日志中可见。

## 定时巡检板端

用 `rdkstudio` 在 crontab 中定时检查生产板端的健康状况：

```bash
# /etc/cron.d/rdk-checkin
0 * * * * rdkstudio exec "df -h /; free -h; uptime" --device prod-x5-01 \
  | tee -a /var/log/rdk-checkin.log
```

每小时执行一次，把磁盘、内存、运行时间信息追加到日志。定期检查日志即可发现异常趋势。

更进一步，用 `@dmoss/agent` 让 AI 自动分析巡检结果：

```bash
# 每天午夜触发一次完整诊断
0 0 * * * bash /opt/rdk/daily-health.sh
```

```bash
#!/bin/bash
# /opt/rdk/daily-health.sh
set -e

DIAGNOSIS=$(rdkstudio exec "cat /proc/meminfo; df -h; dmesg | tail -100" --device prod-x5-01)

echo "$DIAGNOSIS" | dmoss-agent --pipe \
  "分析以下板端状态输出，给出健康评分和建议" \
  > /var/log/rdk-daily-report.log
```

## AI 自动总结日志

把 systemd 日志交给 AI 总结异常：

```bash
# 手动或定时执行
journalctl -u myservice --since="1 hour ago" \
  | dmoss-agent --pipe "summarize errors and root causes"
```

Agent 会读取日志、提取错误事件、按时间和严重程度归类、给出可能的根因。适合大量日志中快速定位问题的场景。

扩展：让 AI 在发现严重问题时主动通知：

```bash
LOG=$(journalctl -u myservice --since="5m ago" --no-pager)

RESULT=$(echo "$LOG" | dmoss-agent --pipe --json \
  "分析日志是否有严重错误。返回 JSON: {severity: none|low|medium|high, summary: '...'}")

SEVERITY=$(echo "$RESULT" | jq -r '.severity')

if [ "$SEVERITY" = "high" ]; then
  # 调用告警通道
  curl -X POST https://your-alert-endpoint \
    -d "$(echo "$RESULT" | jq -r '.summary')"
fi
```

## 在 Docker 镜像中部署

把 `@dmoss/agent` 打包进 Docker 镜像，用于容器化的 Agent 服务：

```dockerfile
FROM node:22-alpine

RUN npm install -g @dmoss/agent

ENV DMOSS_WORKSPACE=/app
WORKDIR /app

ENTRYPOINT ["dmoss-agent"]
```

构建与运行：

```bash
docker build -t my-dmoss-agent .

docker run -it --rm \
  -e DMOSS_API_KEY=sk-xxxx \
  -e DMOSS_MODEL=qwen3.6-plus \
  my-dmoss-agent "帮我分析当前工作目录的结构"
```

这种方式适合在 Kubernetes 中部署短生命周期的 Agent 任务、或在 CI / CD 中提供一致的 Agent 运行环境。
