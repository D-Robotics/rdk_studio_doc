---
sidebar_label: '3.6.3 Other remote approaches'
title: 3.6.3 Other remote approaches
unlisted: true
---

# 3.6.3 Other remote approaches

Bundled viewer covers most robotics GUI needs. Pursue natives only if chasing lower latency.

## Comparison

| Approach | Upside | Limitation |
|---|---|---|
| Studio baked viewer | Zero extra tooling, deepest integration | Very high FPS may jitter |
| Native VNC | Potentially smoother | Extra client tuning |
| xrdp (RDP stack) | Mature polish | ARM image quirks |
| SSH X11 forward | Forward lone apps, not whole desktop | Not full session compositor |

## When each fits

### Studio remote desktop (default)

rviz, camera feeds, generic GUI validation — built‑in path wins.

### Native VNC

Long sessions where micro‑stutter matters. Examples:

- macOS (Apple Silicon): built‑in *Screen Sharing*
- Windows: RealVNC Viewer, TigerVNC Viewer

You own networking + hardening — advanced users.

### xrdp

Only if image plays nice and you want RDP semantics:

- Board: `sudo apt install xrdp`
- Configure users + session type
- Client: Windows *Remote Desktop Connection*; macOS (Apple Silicon) Microsoft Remote Desktop

ARM xrdp hit‑or‑miss — pilot before fleet roll.

### SSH X11 forwarding

Single GUI binary without whole desktop:

```bash
ssh -X root@<device-ip>
# Run GUI inside SSH
rviz2
```

The GUI window appears on your PC desktop. Performance depends on how heavy the app is, but the PC must run an X server (on macOS Apple Silicon use XQuartz).

## Quick pick

| Need | Pick |
|---|---|
| Standard robotics desktop | Studio viewer |
| Long watch / smoother | Native VNC or xrdp |
| Isolated GUI windows | SSH X11 |
