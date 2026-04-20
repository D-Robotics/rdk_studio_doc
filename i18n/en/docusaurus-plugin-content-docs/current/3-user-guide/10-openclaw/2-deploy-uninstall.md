---
sidebar_label: '3.10.2 Deployment and Uninstallation'
title: 3.10.2 Deployment and Uninstallation
---

# 3.10.2 Deployment and Uninstallation

OpenClaw deployment is a one-click operation. Studio handles all steps—including environment checks, dependency installation, systemd registration, and gateway startup—so developers don’t need to manually SSH into the board for configuration.

## Pre-deployment Environment Requirements

| Item | Requirement |
|---|---|
| Board Node.js | Version 18 or higher (22.x recommended) |
| Available disk space on board | At least 1 GB |
| Available memory on board | At least 200 MB (OpenClaw uses ~150 MB after startup) |
| Board network connectivity | Must be able to access an npm registry during installation (defaults to the domestic npmmirror) |
| Board user permissions | Must have write access to the systemd user service directory |

If the board’s Node.js version doesn't meet requirements, Studio will prompt you to upgrade Node first:

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo bash -
sudo apt install -y nodejs
```

## One-click Deployment Process

1. Go to the *OpenClaw* tab  
2. See the "Not installed" banner + "Deploy to current device with one click" button  
3. Click *One-click Deploy*  
4. A popup shows environment check results (Node version, disk space, network, port conflicts)  
5. Click *Confirm Installation*  
6. Real-time installation logs scroll by:

   ```
   ✓ Check Node v22+
   ✓ Configure npm fast registry
   ✓ npm install -g openclaw
   ✓ Register systemd user service
   ✓ Start and listen on board port 18789
   ✓ Studio successfully handshakes with gateway
   ```

7. Installation completes; the banner turns green with "OpenClaw ready"

Typical duration is 1–3 minutes. On slow networks, it may take longer (maximum timeout controlled by the environment variable `OPENCLAW_INSTALL_TIMEOUT_MS`, default hard limit: 45 minutes).

## Common Causes of Deployment Failure

| Symptom | Cause | Solution |
|---|---|---|
| Stuck at "Preparing environment" | Node version too low | SSH into the board, check `node --version`, and upgrade if needed |
| Stuck at "Syncing skills" for over 5 minutes | Slow board network or ClawHub unreachable | Switch to a domestic mirror or redeploy |
| Stuck at "Starting and listening on port" | Port 18789 already in use | SSH into the board and run `ss -tlnp \| grep 18789` to identify the process; kill it or change the port |
| Stuck at "Workspace not writable" | Default `/app` directory on board is read-only | Manually specify a writable directory (e.g., `/userdata/openclaw`) in *Deployment Settings* |

For full troubleshooting guidance, see [5.6 OpenClaw Installation Failure](../../5-faq/6-openclaw-install-failed.md).

## Upgrade and Uninstallation

| Action | Access Point | Behavior |
|---|---|---|
| Upgrade | *Upgrade* button at top of OpenClaw tab | Reinstalls the latest npm package; preserves state machine data and configuration |
| Restart | *Restart* button | Runs `systemctl --user restart openclaw`; commonly used to recover from hangs |
| Uninstall | *Settings* → *Uninstall* | Stops service, removes binaries, but keeps user data (for complete cleanup, manually delete `~/openclaw/`) |
| Reset | *Settings* → *Reset* | Clears state machine and configuration, but keeps binaries; useful for "reconfiguration" scenarios |

Upgrades and restarts are non-destructive and safe for regular use. Uninstall and reset remove some data—use with caution.