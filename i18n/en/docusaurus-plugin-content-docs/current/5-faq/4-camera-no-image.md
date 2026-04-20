---
sidebar_label: '5.4 No Image from USB Camera'
title: 5.4 No Image from USB Camera
---

# 5.4 No Image from USB Camera

## Typical Symptoms

After launching nodes such as `hobot_usb_cam`, the process appears to be running, but:

- The web interface on port 8080 shows a black screen
- The message `did not receive image data` repeatedly appears
- The node exits immediately with errors like `code -6`, `SIGABRT`, or `terminate called after throwing`

## Quick Diagnosis

Run the following command on the board:

```bash
v4l2-ctl -d /dev/video0 --list-formats-ext
```

Check whether the output contains `[0]: 'MJPG' (Motion-JPEG)`:

- **No MJPG** → The camera only supports YUYV; you must use a low resolution of `320x240`
- **MJPG present** → Modify the launch parameter to `pixel_format=MJPEG` and select a supported resolution/frame rate combination

## Troubleshooting Checklist

1. **Verify the device node**

   ```bash
   ls -l /dev/video*
   ```

   For multiple devices:

   ```bash
   for d in /dev/video*; do
     echo "=== $d ==="
     v4l2-ctl -d $d --list-formats-ext 2>/dev/null | head -20
   done
   ```

2. **Switch pixel format**

   UVC cameras default to YUYV, which often causes stream interruptions under the limited USB bus bandwidth on embedded boards. You must switch to MJPEG. Set the following in your launch file:

   ```python
   pixel_format='MJPEG'
   image_width=640
   image_height=480
   framerate=30
   ```

3. **Exact match required**

   The triplet (width, height, frame rate) must exactly match one of the modes listed in the `v4l2-ctl` output. If it fails, fall back to `320x240@15`.

4. **Try a different device path**

   If `/dev/video0` crashes, try `/dev/video1` or another available video device.

5. **Use AI assistance**

   Paste the full error log into AI Dock. The built-in error pattern recognition in Studio will directly suggest a fix.

## Root Cause

Nodes like `hobot_usb_cam` default to the YUYV format. USB 2.0 has a theoretical bandwidth of ~480 Mbps (with ~320 Mbps practically usable), yet a single 640×480 YUYV stream at 30 fps already consumes ~147 Mbps. When other USB devices share the same bus, this often leads to frame drops or immediate `SIGABRT` crashes.

MJPEG compresses data by 10–20×, reducing the per-frame size from ~615 KB to ~150 KB at the same resolution—significantly easing the load on the USB bus.

## Permanent Fix

Follow these steps sequentially—only proceed to the next step after successfully completing the current one:

1. **First, use `v4l2-ctl` to fully understand your camera’s capabilities**: supported formats, resolutions, and frame rates  
2. **Modify the launch file**: set `pixel_format='MJPEG'` and choose a resolution/frame rate combination that the camera supports  
3. **Confirm image topic is publishing**: verify stable image streaming via RViz or `ros2 topic echo`  
4. **Then attach detection or recognition nodes**

For detailed on-board ROS/TROS configuration, refer to the [RDK Official Documentation](https://developer.d-robotics.cc/rdk_doc/en/Robot_development).