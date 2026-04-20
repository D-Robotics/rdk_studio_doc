---
sidebar_label: '3.6.3 Alternative Solutions Comparison'
title: 3.6.3 Alternative Solutions Comparison
---

# 3.6.3 Alternative Solutions Comparison

NoVNC is a browser-native VNC client, and its performance is inferior to certain dedicated solutions. If lower latency is required, consider the following alternatives.

## Solution Comparison

| Solution | Advantages | Disadvantages |
|---|---|---|
| NoVNC (Studio default) | Browser-native, no installation required, highest integration level | Weakest performance among the four solutions |
| Native VNC Client | Better performance than NoVNC | Requires installing an additional client on the PC; manual SSH tunnel setup needed for each connection |
| xrdp (RDP protocol) | Extremely smooth; Microsoft's RDP protocol is mature | ARM xrdp packages for RDK boards have poor compatibility with some images |
| SSH X11 Forwarding | Forwards individual GUI applications instead of the entire desktop | Not suitable for displaying a full desktop; only appropriate for specific GUI applications |

## Applicable Scenarios for Each Solution

### NoVNC (Recommended)

Suitable for most remote desktop needs: rviz debugging, camera preview, and GUI application verification. Offers the highest integration with Studio and works out-of-the-box.

### Native VNC Client

Ideal for scenarios requiring "long-duration observation with high sensitivity to smoothness." Common clients include:

- macOS: Built-in *Screen Sharing* (open vnc:// URLs directly)
- Windows / Linux: RealVNC Viewer, TigerVNC Viewer

Usage:

```bash
# Establish an SSH tunnel from the PC
ssh -L 5900:localhost:5900 root@<board_IP>

# Then connect using a VNC client
# vnc://localhost:5900
```

### xrdp

Best suited for scenarios with "strict smoothness requirements and board images compatible with xrdp." Requirements:

- Install xrdp on the board: `sudo apt install xrdp`
- Configure xrdp user and session type
- Use an RDP client on the PC (Windows built-in *Remote Desktop Connection*; Microsoft Remote Desktop for macOS)

xrdp compatibility on ARM platforms varies significantly—small-scale testing is recommended before wider adoption.

### SSH X11 Forwarding

Appropriate for scenarios where you "only need to view one or two GUI applications without requiring the full desktop":

```bash
ssh -X root@<board_IP>
# Run GUI applications within the SSH session
rviz2
```

GUI application windows appear directly on the PC desktop. Performance depends on the complexity of individual applications, but the PC must run an X server (XQuartz is required for macOS).