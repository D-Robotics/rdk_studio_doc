---
sidebar_label: '3.16.3 Automation examples'
title: 3.16.3 Automation examples
unlisted: true
---

# 3.16.3 Automation examples

Three patterns for automation: CI review, scheduled device health checks, and log summarization. Adapt paths, devices, and model settings before production use.

## AI code review in CI

GitHub Actions example using `@dmoss/agent` on a PR diff:

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

`dmoss-agent` interprets the diff, flags likely bugs, and suggests tests—output lands in Action logs.

## Scheduled device checks

Hourly health capture with `rdkstudio`:

```bash
# /etc/cron.d/rdk-checkin
0 * * * * rdkstudio exec "df -h /; free -h; uptime" --device prod-x5-01 \
  | tee -a /var/log/rdk-checkin.log
```

Disk, memory, and uptime append each hour—scan the log for trends.

Daily AI commentary on top:

```bash
# midnight
0 0 * * * bash /opt/rdk/daily-health.sh
```

```bash
#!/bin/bash
# /opt/rdk/daily-health.sh
set -e

DIAGNOSIS=$(rdkstudio exec "cat /proc/meminfo; df -h; dmesg | tail -100" --device prod-x5-01)

echo "$DIAGNOSIS" | dmoss-agent --pipe \
  "Analyze this device output and give a health score plus recommendations" \
  > /var/log/rdk-daily-report.log
```

## Summarize logs with AI

Pipe service logs:

```bash
journalctl -u myservice --since="1 hour ago" \
  | dmoss-agent --pipe "summarize errors and root causes"
```

`dmoss-agent` clusters issues and suggests causes—handy when logs are huge.

Optional alert hook:

```bash
LOG=$(journalctl -u myservice --since="5m ago" --no-pager)

RESULT=$(echo "$LOG" | dmoss-agent --pipe --json \
  "Check for severe errors. Return JSON: {severity: none|low|medium|high, summary: '...'}")

SEVERITY=$(echo "$RESULT" | jq -r '.severity')

if [ "$SEVERITY" = "high" ]; then
  curl -X POST https://your-alert-endpoint \
    -d "$(echo "$RESULT" | jq -r '.summary')"
fi
```

## Docker image

Minimal container hosting `@dmoss/agent`:

```dockerfile
FROM node:22-alpine

RUN npm install -g @dmoss/agent

ENV DMOSS_WORKSPACE=/app
WORKDIR /app

ENTRYPOINT ["dmoss-agent"]
```

Build & run:

```bash
docker build -t my-dmoss-agent .

docker run -it --rm \
  -e DMOSS_API_KEY=<your-api-key> \
  -e DMOSS_MODEL=qwen3.6-plus \
  my-dmoss-agent "Analyze the structure of the current workspace"
```

Useful for standardized CI/CD or containerized debugging.
