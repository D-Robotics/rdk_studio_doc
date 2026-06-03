---
sidebar_label: '5.4 USB camera no image'
title: 5.4 USB camera no image
---

# 5.4 USB camera no image

## Typical symptoms

After launching `hobot_usb_cam` (or similar) the node shows running, but:

- Web preview stays black  
- Logs repeat `did not receive image data`  
- The node exits with `code -6`, `SIGABRT`, or `terminate called after throwing …`

## Quick check

On the board:

```bash
v4l2-ctl -d /dev/video0 --list-formats-ext
```

Look for `[0]: 'MJPG' (Motion-JPEG)` in the output:

- **No MJPG** → camera may be YUYV-only; try low resolutions such as `320x240`
- **Has MJPG** → set launch `pixel_format=MJPEG`, pick resolution/fps the camera lists as supported

## Checklist

1. **Identify the `/dev/video` node**

   ```bash
   ls -l /dev/video*
   ```

   Multiple devices:

   ```bash
   for d in /dev/video*; do
     echo "=== $d ==="
     v4l2-ctl -d $d --list-formats-ext 2>/dev/null | head -20
   done
   ```

2. **Switch pixel format**

   UVC often defaults to YUYV—on tight USB bandwidth the stream stalls. Prefer MJPEG—e.g. in launch:

   ```python
   pixel_format='MJPEG'
   image_width=640
   image_height=480
   framerate=30
   ```

3. **Match reported modes**

Width, height, and fps should match a line from `v4l2-ctl`. Drop to `320x240@15` if needed.

4. **Try another device node**

   If `/dev/video0` crashes, try `/dev/video1`, etc.

5. **Paste logs**

   Drop the full traceback into AI Dock—Moss can suggest RDK‑specific fixes.

## Why this works

Defaults that force YUYV move large payloads; extras on the same USB bus worsen drops. MJPEG squeezes bandwidth and is usually stabler.

## Permanent fix workflow

Proceed stepwise:

1. **Characterize modes** via `v4l2-ctl` (formats, sizes, fps)  
2. **Edit launch** with `pixel_format='MJPEG'` matching a supported combo  
3. **Verify topics**—RViz2 or `ros2 topic echo` should show steady frames  
4. **Then** stack detection/other nodes  

For ROS / TROS details see [official RDK documentation](https://developer.d-robotics.cc/rdk_doc/Robot_development).
