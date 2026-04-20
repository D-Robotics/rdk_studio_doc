---
sidebar_label: '3.1.1 Device Status Overview'
title: 3.1.1 Device Status Overview
---

# 3.1.1 Device Status Overview

![Dashboard metrics bar: Six key metrics—MEM / TEMP / CPU / BPU / DISK / UPTIME—displayed side by side](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/01-dashboard.png)

The dashboard displays core metrics (MEM, TEMP, CPU, BPU, DISK, UPTIME) of the currently active device. The default polling interval is controlled by `DEVICE_POLL_PERIOD_MS` (15 seconds in the current version), providing users with an "at-a-glance" status view.

## Core Metrics and Data Sources

| Metric | Display Content | Data Source |
|---|---|---|
| MEM (Memory) | Used / Total Memory | `free -h` |
| TEMP (Temperature) | SoC / CPU Temperature | `hrut_somstatus` (universal across all board models) |
| CPU | Current Utilization | Board-side `/proc/stat` |
| BPU | BPU Utilization (Inference Load) | `cat /sys/devices/system/bpu/bpu0/ratio` (universal across all board models) or `hrut_bpuprofile -b 0` (X5) |
| DISK (Disk) | Usage Percentage per Partition | `df -h` |
| UPTIME | System Uptime Since Boot | `uptime` |

Further information is displayed below the main metrics: image version, kernel version, TROS status, network interfaces and IPs, and key systemd services. This information is automatically detected and cached by Studio upon the device's first connection to avoid repeated queries.

## Let AI Monitor Health for You

All dashboard metrics are also accessible to the AI Agent. In AI Dock, simply describe your request—for example, "Check the overall health of this board"—and the Agent will retrieve underlying data and leverage its hardware knowledge to inform developers which metrics are normal, which are problematic, and whether immediate action is required.

This approach is especially useful in the following scenarios:

- Managing multiple boards simultaneously and wanting to quickly compare which ones are healthy versus abnormal  
- Being unfamiliar with typical RDK board metric ranges (e.g., how high is too high for BPU temperature?)  
- Preferring a structured diagnostic report over interpreting raw numerical data  

## Meaning of "N/A" Indicators

Some metrics may display "N/A" or "--". Common causes include:

| Metric | Reason for N/A Display |
|---|---|
| BPU Utilization | The `/sys/devices/system/bpu/bpu0/ratio` node does not exist, or the third-party image lacks mounted BPU drivers |
| TEMP Temperature | Board-side `hrut_somstatus` is unavailable or hardware sensor reading failed |
| TROS Status | TROS is not installed on the board, or it resides in a non-default path |

These situations typically do not affect the normal operation of other RDK Studio features—they only impact the display of corresponding metrics on the dashboard.