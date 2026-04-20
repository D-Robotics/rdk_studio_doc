---
sidebar_label: '1.6 AI Dock Hands-on Demo'
title: 1.6 AI Dock Hands-on Demo
---

# 1.6 AI Dock Hands-on Demo

This section documents three real conversations from Studio runtime, demonstrating AI Dock's interaction patterns and tool invocation processes. Case 1 covers single-device status collection and reporting; Case 2 demonstrates end-to-end YOLO deployment with detection results observed via a web interface; Case 3 generates a community forum draft based on hands-on experience.

## Case 1: Full Device Health Check

**User Input**

```
Please perform a full health check for me: temperature, CPU/BPU, memory, disk, network, and critical service status.
```

**Full Conversation**

![AI Dock device health check conversation: Moss structures the interaction into six numbered steps—"1. Requirement Understanding & Decomposition / 2. Key Metric Planning / 3. Hardware & Behavior Data Collection / 4. Dual-axis Aggregation / 5. Filling in Details & Action Insights / 6. Binary Conclusion." Tool calls such as device_diagnose, device_exec, and device_openclaw_status are listed sequentially. Raw SSH outputs from commands like uptime, free, df, thermal, ip addr, and systemctl status are fully displayed. The conversation concludes with three structured tables—"Hardware Status (All Normal)," "Network Status (Detected)," and "Critical Service Status (OpenClaw Running Normally)"—plus a summarizing conclusion.](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/showcase-case1-healthcheck.png)

Key observations:

- The agent breaks down the task into 6 numbered steps, each corresponding to a clear intent.
- Every tool invocation displays the command name, parameters, and raw output (which can be copied and re-run in a remote terminal for verification).
- The final output is organized into three tables: Hardware Status, Network Status, and Critical Service Status.
- A conclusion and recommended actions are provided at the bottom.

## Case 2: End-to-End YOLO Deployment and Verification

This case consists of two conversation segments: the first asks the agent to consult documentation, plan, and initiate deployment; the second restarts the process and verifies detection results via a web interface.

### 2.1 Planning and Launch

**User Input**

```
Run a YOLO example on the current device following official procedures, and tell me the expected output.
```

**Full Conversation**

![AI Dock YOLO planning and launch conversation: The agent sequentially invokes the OpenClaw expert, fetches official documentation (developer.d-robotics.cc/rdk-doc), and queries the rdk-doc-search knowledge base. It then presents a structured response with sections: "1. Requirement Clarification / 2. Current On-Board Environment / 3. Compatibility Summary / 4. Online Validation / 5. Executable Plan (YOLOv8n series)." The executable plan includes the launch command `ros2 launch yolo_dnn_example hobot_dnn_node_example.launch.py yolo_example_config_file:=config/...`, sample INFO log output, and optional configurations for YOLOv5/YOLOv8/YOLOv10/YOLOv11/YOLOv12. A "Confirm Execution" button appears at the end—actual command execution only occurs after the user clicks "Execute." Total time: 51 seconds.](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/showcase-case2-yolo-plan.png)

Key observations:

- The agent integrates three information sources: built-in knowledge (OpenClaw expert), online documentation retrieval, and on-device measurements.
- Critical commands are first presented as an "executable plan" with expected outputs before actual execution.
- An "Execute" button provides secondary confirmation, allowing developers to review all details before authorizing actions.

### 2.2 Restart and Web Verification

**User Input**

```
Stop the previous YOLO instance, relaunch YOLOv8n, and open the web page for me to view.
```

**Full Conversation**

![AI Dock restarting YOLO and displaying the web view: The agent first uses device_exec to kill the old process (`kill -9 67335 2>/dev/null || true`), then relaunches YOLOv8n. The panel shows: "YOLOv8n object detection example restarted / New PID: 83250 / Log path: /tmp/rdkstudio-bg-82831.log / Status: USB camera, encoding, DNN inference, and web service all started successfully / Preview page opened: http://192.168.127.10:8000." A floating TogetheROS Web Display window on the right shows real-time camera feed with detected objects labeled as "keyboard" and "bed" in blue bounding boxes. Bottom metrics display cpu 1500000, temp 84.4, fps 0. Total time: 57 seconds.](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/showcase-case2-yolo-running.png)

Key observations:

- Within a single conversation, the agent completes: process termination, restart, web page opening, and result validation.
- The floating TogetheROS Web Display window is a browser preview automatically opened by Studio, showing real detection results.
- Labels like `keyboard` / `bed` are actual objects detected by YOLOv8n; CPU usage, temperature, and FPS metrics are displayed at the bottom.

## Case 3: Generating a Community Forum Draft from Hands-On Experience

**User Input**

```
Summarize the process of successfully running YOLO-World into a community forum draft, including environment setup, steps, real-world performance, common issues, and advanced tips.
```

**Conversation Output**

![AI Dock generating a community forum draft: Title reads "[Copy-Paste Ready Draft]," body titled "Running YOLO-World Open-Vocabulary Object Detection on RDK X5 in 5 Minutes." Sections include—Environment & Preparation (Device: RDK X5 8GB; OS: Official RDK Ubuntu 22.04 + TROS Humble; Camera: Standard USB plug-and-play 720P; Software: tros-humble-hobot-yolo-world v0.4.1); Complete Execution Steps (1. Install software / 2. Prepare config & environment / 3. Launch detection service—with separate bash commands for USB camera, MIPI camera, and local image test versions); Real-World Performance Table (Inference FPS ~6 / Per-frame latency ~150ms / BPU utilization ~60% / Full-partition resource usage 76bit); Viewing Results (via http://device-IP:8000 or studio_open_url for pop-up window); Common Issues & Fixes (5 scenarios: browser not opening, successful launch but blank page, camera not working, unstable bounding boxes, no detections—with root causes and troubleshooting commands); Advanced Tips (custom detection categories via yolo_world_texts, saving results, further development); Conclusion recommends directly copying these steps.](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/showcase-case3-forum-draft.png)

Key observations:

- The draft follows a standard community post structure: environment, steps, real-world results, troubleshooting, and advanced usage.
- Bash commands, paths, and package versions in the steps are directly sourced from the actual execution in Case 2.
- Real-world performance metrics (FPS, latency, BPU usage) are extracted from logs by the agent.
- "Common Issues & Fixes" are derived from the agent’s internalized experience and document retrieval—not hallucinated.

## Common Observations Across All Three Cases

| Dimension | Observation |
|---|---|
| Task Decomposition | Case 1: 6-step health check; Case 2: "Plan → Confirm → Execute → Verify"; Case 3: "Experience Reorganization → Forum Format" |
| Tool Invocation | Involved tools include SSH execution, file I/O, official doc retrieval, OpenClaw expert, and web URL opening |
| Raw Output | stdout/logs from every command are streamed in the conversation panel and can be copied for reproduction |
| Secondary Confirmation | Action-oriented tasks (e.g., service restart, critical commands) require clicking an "Execute" button for confirmation |
| Output Formats | Diverse outputs: tables, step-by-step lists, forum drafts, live web previews |
| Interruption Methods | "End Current / Stop All" buttons in panel + Esc key |

For technical details on tool invocation and device awareness, see [3.2.2 Device Awareness and Tool Invocation](../3-user-guide/2-ai-chat/2-device-aware-tools.md).

## Reproduction Requirements

1. Complete [2.1 Installation and Login](../2-quick-start/1-install-and-login.md) and connect an RDK board.
2. Activate an accessible model as described in [2.5 Configure AI Model](../2-quick-start/5-configure-ai-model.md).
3. Case 2 requires a USB camera (or follow instructions to switch to MIPI/local image versions).
4. Enter the prompts from this section into AI Dock.

Agent responses may vary slightly due to model randomness, on-device model library versions, and system state.