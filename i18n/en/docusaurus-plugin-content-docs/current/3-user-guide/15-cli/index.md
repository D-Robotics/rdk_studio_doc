---
sidebar_label: '3.16 Command-Line Interface (CLI)'
title: 3.16 Command-Line Interface (CLI)
---

# 3.16 Command-Line Interface (CLI)

Get devices and models working in the desktop app before CLI work—then the CLI reuses the same device and model profiles and saves setup time.

## Recommended order

| Step | What to do |
|---|---|
| 1 | Add devices and configure models in the desktop client |
| 2 | In **Settings center → Apps & updates**, enable the CLI |
| 3 | Run `rdkstudio --version` in a terminal |
| 4 | Prefer `rdkstudio` day to day |
| 5 | For CI, Docker, or isolated scripts, consider `dmoss-agent` |

| CLI | Origin | Best for |
|---|---|---|
| `rdkstudio` | Enabled from desktop; added to PATH | Daily terminal use sharing desktop config |
| `dmoss-agent` | NPM package `@dmoss/agent` | CI/CD, Docker, scripted agents |

If you mostly develop with RDK Studio, use `rdkstudio`. Reach for `dmoss-agent` only when you cannot depend on the desktop install.

## Next

- [3.16.1 rdkstudio](./1-rdkstudio.md): Enable, verify, common commands
- [3.16.2 dmoss-agent](./2-dmoss-agent.md): Standalone agent CLI install, config, unique features
