---
sidebar_label: '3.15.3 Automation Scenario Examples'
title: 3.15.3 Automation Scenario Examples
---

# 3.15.3 Automation Scenario Examples

This section provides three typical automation scenarios demonstrating CLI usage in CI, scheduled tasks, and log analysis. Each example can be directly copied into production environments.

## Running Code Reviews in CI

Use `@dmoss/agent` to review PR diffs within a GitHub Actions workflow:

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

The Agent analyzes the diff, points out potential bugs, and suggests adding tests. The output appears in the Action logs.

## Scheduled On-Device Health Checks

Use `rdkstudio` in a crontab to periodically check the health of production devices:

```bash
# /etc/cron.d/rdk-checkin
0 * * * * rdkstudio exec "df -h /; free -h; uptime" --device prod-x5-01 \
  | tee -a /var/log/rdk-checkin.log
```

This runs hourly, appending disk usage, memory usage, and uptime information to the log file. Regularly reviewing this log helps identify abnormal trends.

Going further, use `@dmoss/agent` to let AI automatically analyze inspection results:

```bash
# Trigger a full diagnostic once daily at midnight
0 0 * * * bash /opt/rdk/daily-health.sh
```

```bash
#!/bin/bash
# /opt/rdk/daily-health.sh
set -e

DIAGNOSIS=$(rdkstudio exec "cat /proc/meminfo; df -h; dmesg | tail -100" --device prod-x5-01)

echo "$DIAGNOSIS" | dmoss-agent --pipe \
  "Analyze the following device status output and provide a health score and recommendations" \
  > /var/log/rdk-daily-report.log
```

## AI-Powered Log Summarization

Hand systemd logs to AI for summarizing anomalies:

```bash
# Execute manually or via scheduled job
journalctl -u myservice --since="1 hour ago" \
  | dmoss-agent --pipe "summarize errors and root causes"
```

The Agent reads the logs, extracts error events, categorizes them by time and severity, and suggests possible root causes—ideal for quickly pinpointing issues amid large volumes of logs.

Extension: Let AI proactively notify you when critical issues are detected:

```bash
LOG=$(journalctl -u myservice --since="5m ago" --no-pager)

RESULT=$(echo "$LOG" | dmoss-agent --pipe --json \
  "Analyze whether the logs contain severe errors. Return JSON: {severity: none|low|medium|high, summary: '...'}")

SEVERITY=$(echo "$RESULT" | jq -r '.severity')

if [ "$SEVERITY" = "high" ]; then
  # Trigger alert channel
  curl -X POST https://your-alert-endpoint \
    -d "$(echo "$RESULT" | jq -r '.summary')"
fi
```

## Deployment in Docker Images

Package `@dmoss/agent` into a Docker image for containerized Agent services:

```dockerfile
FROM node:22-alpine

RUN npm install -g @dmoss/agent

ENV DMOSS_WORKSPACE=/app
WORKDIR /app

ENTRYPOINT ["dmoss-agent"]
```

Build and run:

```bash
docker build -t my-dmoss-agent .

docker run -it --rm \
  -e DMOSS_API_KEY=sk-xxxx \
  -e DMOSS_MODEL=qwen3.6-plus \
  my-dmoss-agent "Help me analyze the structure of the current working directory"
```

This approach is well-suited for deploying short-lived Agent tasks in Kubernetes or providing a consistent Agent runtime environment in CI/CD pipelines.