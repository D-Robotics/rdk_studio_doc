---
sidebar_label: '5.6 OpenClaw Installation Failure'
title: 5.6 OpenClaw Installation Failure
---

# 5.6 OpenClaw Installation Failure

## Typical Symptoms

After clicking "One-click Deployment" in the *OpenClaw* tab:

- Stuck at "Syncing Skills" for a long time with no progress  
- Error: "Gateway failed to register"  
- Error: "Board workspace is not writable"  
- Stuck at "Installing npm global packages"

## Quick Diagnosis

Diagnose based on the specific stage where it gets stuck:

| Where It Gets Stuck | What To Do |
|---|---|
| Stuck at "Preparing Environment" | Node.js is not installed on the board or its version is < 18. SSH into the board and run `node -v` to verify. |
| Stuck at "Syncing Skills" for a long time | This is normal behavior; syncing dozens of skills for the first time takes 1–3 minutes. |
| Gateway failed to register | Port 18789 on the board is unreachable. SSH into the board and run `netstat -tlnp \| grep 18789`. |
| Workspace not writable | The default `/app` directory is read-only in some images; switch to a writable directory on the board. |

## Troubleshooting Checklist

1. **Slow Skill Sync**

   It is normal for the initial deployment to take **1–3 minutes** to sync dozens of skills. Only start troubleshooting if there’s no progress after 5 minutes.

2. **Workspace Path Not Writable**

   On some RDK images, `/app` on the board is read-only. Studio automatically detects writable paths (e.g., `~/openclaw`, `/userdata/openclaw`). If detection fails, manually specify a writable directory in *OpenClaw Panel → Deployment Settings*.

3. **Node.js Version on Board**

   SSH into the board and run `node --version` to confirm the version is ≥ 18. If not:

   ```bash
   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo bash -
   sudo apt install -y nodejs
   ```

4. **Board Network Issues**

   If npm on the board cannot access the default registry:

   ```bash
   npm config set registry https://registry.npmmirror.com
   ```

5. **Port 18789 Occupied**

   Check port usage:

   ```bash
   ss -tlnp | grep 18789
   ```

   Either kill the occupying process or change the port in *Deployment Settings*.

## Permanent Solutions

- Before deployment, use the "Pre-check" button (if available) at the top of the *OpenClaw Panel* to automatically run checks for Node.js, disk space, and port availability.
- Immediately after installation, run a full health check under *OpenClaw Panel → Health* to establish baseline data for future comparisons.
- Always use the official recommended image for production boards to avoid compatibility issues introduced by third-party images.