---
sidebar_label: '3.6 Remote Desktop'
title: 3.6 Remote Desktop
---

# 3.6 Remote Desktop

![Remote Desktop Interface: Studio embeds NoVNC, allowing direct viewing of the board's GUI within the workspace](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/07-remote.png)

After a successful connection, you can directly operate the board’s desktop within Studio:

![Board Desktop (VNC View): D-Robotics themed desktop with quick access icons such as File System / Home / Documentation / Community; top toolbar displays time and system status](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/remote-desktop-connected.png)

The remote desktop feature enables developers to view the board’s graphical user interface directly inside RDK Studio. Implemented using NoVNC (a browser-based VNC client built with HTML5 Canvas and WebSocket), it eliminates the need to install a local VNC client on your PC. Studio securely accesses port 5900 on the board via an SSH tunnel, preventing exposure to the public internet.

The VNC service running on the board is typically `x11vnc` (which takes over an existing X server), `tigervnc` (which includes its own X server), or `Xvfb` (a virtual display used when no physical monitor is connected to the board). Studio automatically selects and deploys an appropriate VNC service the first time you open the remote desktop.

## Typical Use Cases

| Scenario | Content You Need to View |
|---|---|
| ROS Debugging | rviz, rqt_graph, rqt_image_view |
| Camera Feed | hobot_usb_cam → image_view |
| GUI Application Debugging | Qt or GTK applications |
| HDMI Output Preview | Actual screen output when the board is connected to a monitor |
| Desktop OS Operation | RDK boards with Ubuntu Desktop installed |

## This Section Includes

- [3.6.1 Launch and Authentication](./1-startup-auth.md): Automatic installation process and password authentication when opening Remote Desktop for the first time  
- [3.6.2 Performance Tuning](./2-performance-tuning.md): Bandwidth control methods including RTT display, quality slider, and resolution adjustment  
- [3.6.3 Alternative Solutions Comparison](./3-alternatives.md): Differences between NoVNC and native VNC, xrdp, and SSH X11 forwarding