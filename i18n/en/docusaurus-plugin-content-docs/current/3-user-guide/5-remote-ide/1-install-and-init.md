---
sidebar_label: '3.5.1 Installation and Initialization'
title: 3.5.1 Installation and Initialization
---

# 3.5.1 Installation and Initialization

The first time you open the IDE tab, Studio detects whether `code-server` is already installed on the board. If not installed, it automatically guides you through deployment. The entire process requires no manual configuration from the developer.

## Automatic Installation Process

1. Studio uses SSH to check whether `code-server` is installed on the board.
2. If not installed, a confirmation dialog appears: "code-server needs to be installed. Continue?"
3. After the developer clicks *Continue*, Studio downloads the `.deb` package matching the board’s architecture (ARM64) from its built-in BOS image.
4. Installs the package on the board by running `dpkg -i`.
5. Registers and starts a systemd service that listens on a local port (default: 8080).
6. The Studio client opens code-server in an embedded window via an SSH tunnel.

The initial installation typically takes 2–5 minutes (depending on the board’s network and disk speed). Once installed, subsequent openings of the IDE tab are instantaneous.

## Installation Paths

| Item | Path |
|---|---|
| Binary | `/usr/lib/code-server/` |
| Configuration file | `~/.config/code-server/config.yaml` |
| User data | `~/.local/share/code-server/` |
| systemd service | `code-server.service` |

To manually uninstall or reinstall, run `sudo apt remove code-server`, then delete the directories listed above before reinstalling.

## Default State After Startup

By default, `code-server` binds to local port 8080 after startup and only listens on `127.0.0.1`, without exposing it to the public network. The Studio client accesses this port through an SSH tunnel—similar to running `ssh -L 8080:localhost:8080 root@<board-IP>`—but fully automated.

If you need to access `code-server` manually via a browser (e.g., using a local browser on the same PC for debugging), set up port forwarding in your SSH command and then navigate to `http://localhost:8080`.