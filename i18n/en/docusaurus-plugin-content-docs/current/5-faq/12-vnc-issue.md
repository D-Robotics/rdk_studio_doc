---
sidebar_label: '5.12 Remote Desktop Connection Issues or Lag'
title: 5.12 Remote Desktop Connection Issues or Lag
---

# 5.12 Remote Desktop Connection Issues or Lag

**Typical symptoms**: The *Remote Desktop* tab keeps spinning without connecting / noticeable delay (>2 seconds) after connection / mouse clicks register at incorrect positions / only half the screen is displayed / black screen.

## 30-Second Decision

Check on the board:

```bash
ps aux | grep -E "x11vnc|tigervnc|Xvfb"   # Check for VNC processes
ss -tlnp | grep 5900                       # Check if port 5900 is listening
```

## Troubleshooting Checklist

### 1. VNC Service Not Started

Studio automatically installs `x11vnc` or `tigervnc` via `apt install` on first use. Common failure reasons: no network on the board / unreachable apt repositories / full disk. Install manually:

```bash
sudo apt install -y x11vnc xvfb
sudo x11vnc -display :0 -forever -shared -rfbport 5900 -nopw &
```

### 2. Port Conflict

If port 5900 is occupied by a ROS node, switch to another port:

```bash
x11vnc -rfbport 5901 ...
```

Then, in Studio, go to *Remote Desktop → Settings* and change the port to 5901.

### 3. Screen Lag

RDK's BPU does not participate in X11 rendering; VNC streams are encoded purely by the CPU, which often maxes out when streaming full-screen 1080p. Two ways to reduce load:

- Lower the board's resolution: `Xvfb :0 -screen 0 1280x720x24`
- In Studio’s *Remote Desktop* toolbar, drag the "Quality" slider down (e.g., to level 6), which significantly reduces bandwidth usage

### 4. Mouse Click Misalignment

Common with 4K monitors / HiDPI displays. In Studio, right-click the remote screen → *Settings → Scaling* and set it to 100%.

### 5. Black Screen

Caused by no physical monitor connected or X server not started on the board:

```bash
sudo apt install -y xvfb
Xvfb :0 -screen 0 1280x720x24 &
export DISPLAY=:0
```

Then start `x11vnc`.

## Permanent Solutions

- Pre-install `xvfb + x11vnc` on production boards and configure them to auto-start via systemd
- For long-term remote work, use **NoVNC + WebSocket** (default in Studio) instead of native VNC clients
- For maximum smoothness, consider switching to **xrdp** (RDP protocol); however, ARM xrdp packages on RDK boards have compatibility issues with certain OS images—test on a small scale first

## Still Not Resolved?

Seek help in the following order:

1. Paste error logs directly into *AI Chat* — Studio’s built-in system recognizes over 30 common RDK board-side error patterns and automatically provides fixes  
2. In *AI Chat*, say “Help me search the forum for similar issues” — Studio will automatically query the RDK developer community  
3. [RDK Official Documentation](https://developer.d-robotics.cc/rdk_doc/en/RDK)  
4. [RDK Developer Community](https://developer.d-robotics.cc/en/forum)  
5. In Studio, go to *Settings Panel → Application & Updates → Export Diagnostic Package*, and send us the diagnostic package for further investigation