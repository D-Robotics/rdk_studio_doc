---
sidebar_label: '5.12 Remote desktop slow or disconnected'
title: 5.12 Remote desktop slow or disconnected
---

# 5.12 Remote desktop slow or disconnected

**Typical symptoms:** *Remote desktop* spinner never finishes; session is buttery but unusable; pointer mapping wrong; clipped window or pure black framebuffer.

## First steps

1. Confirm SSH is healthy.
2. Re-open *Remote desktop* and relaunch components per banners.
3. Install missing prerequisites if prompted.
4. Reduce bitrate/resolution when only perf suffers.
5. Paste errors back to Moss.

## Troubleshooting buckets

### 1. Backend never ready

Studio bootstraps VNC-ish pieces on demand. Typical blockers = offline board, disk full, or stripped-down OS builds. Prefer in-page retry/install actions.

### 2. Motion judder / latency

Higher pixel clocks stress SoC uplinks. Mitigate via toolbar quality presets—or lower desktop resolution directly on-device.

### 3. Cursor offset

Usually HiDPI host scaling ≠ 100%. Right-click the video surface → settings → pin zoom to **100 %**.

### 4. Black screen

Happens without physical display, stalled DE, or corrupted agent stack. Restart from the page; escalate with Moss + logs if persists.

## Hardening

- Official RDK roots ship required bits.
- Stabilize network (wired when possible).
- Pilot on a small fleet before wide rollout.

## Still stuck?

1. Paste stack traces into AI Dock for RDK-aware triage.  
2. Ask Moss to search forum threads for similar symptoms.  
3. [Official RDK docs](https://developer.d-robotics.cc/rdk_doc)  
4. [RDK developer community](https://developer.d-robotics.cc/forum)  
5. *Settings → App & updates → Export diagnostics* and share the bundle with support.
