---
sidebar_label: '3.10.2 Deploy and uninstall'
title: 3.10.2 Deploy and uninstall
---

# 3.10.2 Deploy and uninstall

OpenClaw deployment is one-click. Studio handles prerequisites, installs dependencies, and starts services—you don’t log into the board by hand.

## Prerequisites

Confirm three items before deploying:

- The device was added via SSH and is online.
- The device network can fetch required packages during installation.
- There is enough free space and your account may install components.

When something fails, the page explains what to do next.

## One-click deployment

1. Open the *On-device Agent* page
2. On the “not installed” prompt, choose *Deploy in one click*
3. Review the environment check results and resolve blockers if any appear
4. Choose *Confirm install*
5. Wait until OpenClaw is reported ready

Deployment is slower on weak networks—avoid closing Studio or restarting the board repeatedly mid-run.

## Common failure modes

| What you see | Likely cause | What to try |
|---|---|---|
| Prerequisites failed | Missing env or permissions | Fix per page guidance, redeploy |
| Download/sync very slow | Unstable board network | Stabilize network, redeploy |
| Start failed | Install finished but services didn’t start | Use diagnose & repair, or copy the banner to Moss |
| Folder not writable | Install path denies writes | Pick a writable path per page guidance |

Full troubleshooting guide: [5.6 OpenClaw install failed](../../5-faq/6-openclaw-install-failed.md).

## Upgrade and uninstall

| Action | Where | Effect |
|---|---|---|
| Diagnose & repair | Diagnose entry under *Deploy & connection* | Checks OpenClaw health and fixes common issues |
| Restart service | Recovery action under *Deploy & connection* | Often used when connection is flaky |
| Redeploy / upgrade | Redeploy entry under *Deploy & connection* | Pulls and reinstalls OpenClaw; keeps needed config |
| Uninstall | Uninstall entry under *Deploy & connection* | Stops services and removes OpenClaw; confirmation required |

Diagnose and restart target recovery. Redeploy and uninstall change the board—review running work first.
