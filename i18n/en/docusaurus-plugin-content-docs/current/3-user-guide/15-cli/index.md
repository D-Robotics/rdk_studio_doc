---
sidebar_label: '3.15 Command-Line Tools'
title: 3.15 Command-Line Tools
---

# 3.15 Command-Line Tools

![rdkstudio --help terminal output: displays comprehensive information including common tasks, usage, options, interactive commands, environment variables, tips, end-to-end examples, etc.](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/zh/cli-help.png)

You can leverage RDK Studio's AI and device capabilities without launching the desktop client. Studio provides two separate command-line tools, each tailored for different scenarios:

| CLI | Source | Use Case |
|---|---|---|
| `rdkstudio` | Added to system PATH after enabling CLI in the desktop client | Works alongside the desktop client to automate routine tasks |
| `dmoss-agent` | Standalone NPM package `@dmoss/agent` (command name is `dmoss-agent` after installation) | CI/CD pipelines, Docker environments, embedded scripts, pure Agent scenarios |

These are **not the same tool**—choose carefully based on your needs. If you're unsure, use `rdkstudio` for most scenarios.

## This Section Includes

- [3.15.1 rdkstudio](./1-rdkstudio.md): Enabling the product CLI, subcommands, and commonly used flags  
- [3.15.2 @dmoss/agent](./2-dmoss-agent.md): Installation, configuration, and unique capabilities of the standalone Agent CLI  
- [3.15.3 Automation Scenario Examples](./3-automation-examples.md): CI code reviews, scheduled inspections, AI-powered log summarization