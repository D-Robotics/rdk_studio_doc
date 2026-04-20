---
sidebar_label: '3.9.2 Automatic Device Identification'
title: 3.9.2 Automatic Device Identification
---

# 3.9.2 Automatic Device Identification

When a device is connected for the first time, Studio automatically probes its hardware and software status and saves the results as the device's "profile." This profile influences the AI's injection of hardware-specific knowledge and tool-loading behavior during conversations.

## Probed Items

| Probed Item | Data Source | Purpose |
|---|---|---|
| Board Type (X3 / X5 / S100) | `cat /proc/device-tree/model` | Determines which board-specific skills to load |
| Image Version | `cat /etc/rdkos-release` | Helps the AI assess system capabilities |
| Linux Kernel | `uname -r` | Serves as reference when troubleshooting kernel-related issues |
| TROS Version | `ls /opt/tros/` | Determines the ROS command syntax version (humble / foxy) |
| OpenClaw Installed? | `which openclaw` | Determines whether to load OpenClaw collaboration tools |
| BPU Type | Inferred from board type | Provides compatibility hints for hbm model architectures |
| Physical Network Interfaces | `ip addr show` | Data source for quick IP lookup in the top bar |

Probing is automatically performed when adding a device, and developers typically don’t need to trigger it manually. If the board environment changes (e.g., after reflashing the system), you can click *Re-probe* in the device details to update its profile.

## Impact of the Profile on AI

The device profile is injected into the D-Moss Agent’s context before each conversation. This ensures that the AI’s responses are based on the actual state of the current device, rather than generic answers.

Examples:

| User Query | AI Decision Based on Profile |
|---|---|
| "Check BPU usage" | Profile shows X5 → executes `hrut_bpuprofile -b 0` (not necessarily installed on X3 / S100; AI falls back to generic command `cat /sys/devices/system/bpu/bpu0/ratio`) |
| "Install a ROS 2 package" | Profile shows humble → suggests `apt install ros-humble-xxx` instead of foxy |
| "Why does hbm fail to load?" | Profile shows X5 (Bayes architecture) → advises that hbm must be compiled with the Bayes toolchain |

This experience—where the AI “knows” the current device—is one of the key distinctions between Studio and generic AI assistants.

## Handling Probe Failures

Some custom images may lack standard probing items (e.g., missing `/proc/device-tree/model`). In such cases:

- Studio marks the missing item as "Unknown" without affecting other probes
- You can manually set the board type and image version on the device detail page in the device list
- Once manually set, the AI can still leverage the profile information

If the AI’s responses remain inaccurate even after manual configuration, it may indicate that Studio’s built-in hardware knowledge base doesn’t yet cover your specific image. We recommend reporting this on the [RDK Developer Community](https://developer.d-robotics.cc).