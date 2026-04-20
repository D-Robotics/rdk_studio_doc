---
sidebar_label: '5.8 远程 IDE 无法启动'
title: 5.8 远程 IDE 无法启动
---

# 5.8 远程 IDE 无法启动

**典型现象**：在 *IDE* tab 点"打开远程 IDE"后浏览器空白 / 报 `code-server 未安装` / 安装过程中卡在"下载 deb 包"。

## 30 秒决策

板端检查 code-server 状态：

```bash
which code-server
code-server --version          # 期望 >= 4.x
systemctl status code-server   # 或 ps aux | grep code-server
```

## 排查清单

1. **未安装** — Studio 自动从内置 BOS 下载 deb 包并 `dpkg -i`。板端没网或 BOS 不可达时手动装：

   ```bash
   wget https://rdkstudio.bj.bcebos.com/code-server/code-server_版本号_arm64.deb
   sudo dpkg -i code-server_*_arm64.deb
   ```

2. **端口冲突** — 默认 8080 常和 hobot_websocket 等冲突，改 `~/.config/code-server/config.yaml` 的 `bind-addr`：

   ```yaml
   bind-addr: 0.0.0.0:8443
   ```

   然后 `systemctl --user restart code-server`

3. **空白页 / 资源 404** — 浏览器 F12 看 Network；反代下 baseUrl 没设时会 404

## 永久解决

- 远程 IDE 给固定密码 + 固定端口写进 `~/.config/code-server/config.yaml`
- 板端磁盘紧张（`df -h /` 显示 80% +）时 `code-server` 启动会失败，定期清 `/var/log` 和 `/tmp`
