---
sidebar_label: '5.8 Remote IDE Fails to Start'
title: 5.8 Remote IDE Fails to Start
---

# 5.8 Remote IDE Fails to Start

**Typical symptoms**: After clicking "Open Remote IDE" in the *IDE* tab, the browser shows a blank page, displays an error `code-server not installed`, or gets stuck at "Downloading deb package" during installation.

## 30-Second Decision

Check the code-server status on the board:

```bash
which code-server
code-server --version          # Expected version >= 4.x
systemctl status code-server   # or ps aux | grep code-server
```

## Troubleshooting Checklist

1. **Not installed** — Studio automatically downloads the deb package from the built-in BOS and runs `dpkg -i`. If the board lacks internet access or BOS is unreachable, install manually:

   ```bash
   wget https://rdkstudio.bj.bcebos.com/code-server/code-server_version_number_arm64.deb
   sudo dpkg -i code-server_*_arm64.deb
   ```

2. **Port conflict** — Port 8080 (default) often conflicts with services like `hobot_websocket`. Change the `bind-addr` in `~/.config/code-server/config.yaml`:

   ```yaml
   bind-addr: 0.0.0.0:8443
   ```

   Then run `systemctl --user restart code-server`.

3. **Blank page / 404 for resources** — Open browser DevTools (F12) and check the Network tab; 404 errors occur when baseUrl isn't configured under reverse proxy setups.

## Permanent Fixes

- Set a fixed password and fixed port for Remote IDE in `~/.config/code-server/config.yaml`.
- When disk space on the board is low (`df -h /` shows usage ≥ 80%), `code-server` may fail to start. Regularly clean up `/var/log` and `/tmp`.