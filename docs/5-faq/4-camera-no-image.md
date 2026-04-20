---
sidebar_label: '5.4 USB 摄像头无图像'
title: 5.4 USB 摄像头无图像
---

# 5.4 USB 摄像头无图像

## 典型现象

启动 `hobot_usb_cam` 等节点后进程显示运行，但：

- Web 8080 端口画面黑屏
- `did not receive image data` 反复出现
- 节点直接退出，报错 `code -6`、`SIGABRT`、`terminate called after throwing`

## 快速判断

在板端执行：

```bash
v4l2-ctl -d /dev/video0 --list-formats-ext
```

看输出中是否有 `[0]: 'MJPG' (Motion-JPEG)`：

- 没有 MJPG → 该摄像头只支持 YUYV，必须用低分辨率 `320x240`
- 有 MJPG → 修改 launch 参数 `pixel_format=MJPEG`，并选一档支持的分辨率 / 帧率

## 排查清单

1. **确认设备节点**

   ```bash
   ls -l /dev/video*
   ```

   多路设备时：

   ```bash
   for d in /dev/video*; do
     echo "=== $d ==="
     v4l2-ctl -d $d --list-formats-ext 2>/dev/null | head -20
   done
   ```

2. **切换像素格式**

   UVC 摄像头默认尝试 YUYV，在板端 USB 总线带宽下经常断流，必须切换 MJPEG。在 launch 文件中设置：

   ```python
   pixel_format='MJPEG'
   image_width=640
   image_height=480
   framerate=30
   ```

3. **必须精确匹配**

   （宽度、高度、帧率）三元组必须与 `v4l2-ctl` 输出中的某一档一字不差。跑不了就降到 `320x240@15`。

4. **换路尝试**

   如果 `/dev/video0` 崩溃，尝试 `/dev/video1` 或其他。

5. **用 AI 协助**

   在 AI Dock 中粘贴完整的报错日志，Studio 内置的错误模式识别会直接给出修复方法。

## 根本原因

`hobot_usb_cam` 等节点默认尝试 YUYV 格式。USB 2.0 带宽约 480 Mbps（实际可用约 320 Mbps），而 640×480 YUYV 30fps 单路就要 147 Mbps。同总线接其他 USB 设备时经常掉帧或直接 SIGABRT。

MJPEG 压缩 10~20 倍，同样分辨率下数据量从 615 KB/帧 降到 150 KB/帧，整个总线轻松许多。

## 永久解决

按以下顺序处理，每步完成后再进入下一步：

1. **先用 v4l2-ctl 摸清摄像头能力**：支持哪些格式、分辨率、帧率
2. **修改 launch 文件**：设置 `pixel_format='MJPEG'` 并匹配某个支持的分辨率组合
3. **确认 topic 出图**：在 RViz 或 `ros2 topic echo` 中确认图像流稳定
4. **再挂检测或识别节点**

详细板端 ROS / TROS 配置请查阅 [RDK 官方文档](https://developer.d-robotics.cc/rdk_doc/Robot_development)。
