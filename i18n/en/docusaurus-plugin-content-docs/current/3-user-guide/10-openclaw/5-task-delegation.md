---
sidebar_label: '3.10.5 Task Delegation and Automatic Fallback'
title: 3.10.5 Task Delegation and Automatic Fallback
---

# 3.10.5 Task Delegation and Automatic Fallback

OpenClaw’s core value lies in two mechanisms: "long-running task delegation" and "automatic recovery during SSH blockage." This section details these two interaction patterns.

## Long-Running Task Delegation

After D-Moss evaluates the characteristics of a task, it delegates tasks suitable for on-board execution to OpenClaw. The standard delegation workflow is as follows:

1. The user describes in AI Dock: "Check BPU temperature every 5 minutes on the board; automatically downclock if it exceeds 70°C."
2. D-Moss calls `board_openclaw_assess` to evaluate: whether the board has `hrut_smi`, whether the `cpufreq` tool is available, and whether frequency scaling can be performed.
3. OpenClaw responds: "Execution is possible; all required tools are available."
4. D-Moss calls `board_openclaw_delegate`, writing the task along with guidance into OpenClaw’s state machine:

   ```yaml
   Original intent: Monitor BPU temperature and automatically downclock
   Threshold: 70°C
   Downclocking method: Invoke cpufreq-set to switch to powersave governor
   Reporting method: Notify PC via reverse tunnel when downclocking is triggered
   ```

5. OpenClaw continuously executes this task on the board—even if the PC shuts down, the on-board task continues running.
6. When the temperature threshold is exceeded, OpenClaw pushes the event to the PC through an SSH tunnel (real-time notification if the PC is online; events remain stored in OpenClaw for retrieval once the PC reconnects if offline).

## Automatic Fallback: Self-Recovery During SSH Blockage

When the PC invokes `device_exec` via standard SSH and encounters a timeout or blockage, D-Moss automatically shifts execution to the on-board OpenClaw for retry, ensuring the command ultimately succeeds.

Full workflow example:

```
User: "Run ros2 topic list on the board"
   ↓
D-Moss Round 1:
   ├─ Calls device_exec("ros2 topic list", deviceId)
   │     ↓
   │     SSH hangs indefinitely (due to abnormal SSH channel or network jitter on the board)
   │     ↓
   │     Times out (default 30 seconds)
   ↓
D-Moss Round 2 (automatic):
   ├─ Calls board_openclaw_assess("I need to run ros2 topic list")
   │     ↓
   │     OpenClaw responds: "Yes, ros2 command is available locally"
   ├─ Calls board_openclaw_delegate("ros2 topic list", guidance="Original intent: List current ROS topics")
   │     ↓
   │     Executes within OpenClaw's own session on the board (bypassing PC SSH)
   │     ↓
   │     More reliable, as it reuses OpenClaw gateway's local connection
   └─ Returns execution result to PC-side D-Moss
   ↓
Returns to user: Complete list of topics
```

This mechanism ensures that common on-board issues like "SSH blockage" do not cause AI tasks to fail completely. As long as OpenClaw on the board remains healthy, commands will eventually execute successfully.

## Reverse Notification from Delegated Tasks

While executing long-running tasks on the board, OpenClaw can push critical events back to the PC. Examples include:

- Monitoring task triggers a threshold
- Long-running task completes
- Task fails and requires PC intervention

When the PC is online, notifications appear in real time via Studio’s notification center; when offline, events remain stored in OpenClaw’s state machine and are fetched the next time the PC reconnects.

## When Automatic Delegation Does Not Occur

D-Moss does not blindly delegate all tasks to the board. The following scenarios are still handled directly by PC-side D-Moss:

| Scenario | Reason |
|---|---|
| User explicitly says "Do this on the PC" | Respect user instruction |
| Task requires PC-side tools (e.g., local file operations) | On-board OpenClaw lacks these tools |
| Task requires heavy model inference (on-board model may be weaker) | Prioritize inference quality |
| Task completes quickly (< 10 seconds) | Overhead of delegation is not justified |