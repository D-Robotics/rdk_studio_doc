---
sidebar_label: '3.9.3 Online Status Monitoring'
title: 3.9.3 Online Status Monitoring
---

# 3.9.3 Online Status Monitoring

The Studio backend performs heartbeat probing on every added device to promptly reflect its online status. Developers don't need to manually query—the status indicator in the device list updates continuously.

## Heartbeat Strategy

| Phase | Probing Frequency | Trigger Condition |
|---|---|---|
| Device online and actively in use | Every 30 seconds | Default |
| 3 consecutive heartbeat failures | Marked as offline | Network jitter or temporary unreachability of the device |
| Low-frequency probing after going offline | Every 5 minutes | Reduce network requests to known offline devices |
| Successful probe | Immediately mark as online + trigger notification | Automatically detect when device recovers |

This strategy—"high-frequency probing when online, low-frequency when offline, immediate detection upon recovery"—balances real-time responsiveness with system resource consumption.

## Handling "Online but Unresponsive" Scenarios

Sometimes the heartbeat indicates the device is online, yet specific command operations (e.g., executing commands in a remote terminal) hang without response. Possible causes include:

- Heartbeat uses a simple SSH connection probe that doesn’t depend on the device’s application processes
- Actual commands may stall due to high CPU usage, I/O blocking, or other issues on the device
- In such cases, verify using commands in the remote terminal: `uptime`, `top`, `iostat`, etc.

If remote terminal commands also become unresponsive, consider alternative approaches like [3.7.4 RDK S100 xburn](../7-system-flashing/4-s100-xburn.md) or physically rebooting the device.

## Concurrent Connection Limits per Device

Studio enforces a maximum limit on concurrent SSH connections to the same device (default: 8). This prevents long-running tasks from occupying all SSH channels and blocking essential probes.

You might encounter this concurrency limit in scenarios such as:

- Opening multiple remote terminal tabs simultaneously + AI Agent invoking `device_exec` concurrently + background heartbeat probing
- Bulk uploading large files via File Manager + AI Agent reading many small files at the same time

When the concurrency limit is reached, new requests enter a waiting queue—they won’t fail. This queuing behavior is expected, not an error. If needed, you can adjust the limit via the environment variable `RDK_DEVICE_EXEC_MAX_CONCURRENT` (default value: 8).

## Collaboration Considerations

When multiple developers operate the same device through Studio simultaneously, the following issues may arise:

- One developer’s commands might interfere with another’s work (e.g., accidentally killing the other’s processes)
- If one user modifies the SSH credentials in the device list, others may lose access

Team recommendations:

- Assign dedicated personnel for production devices to avoid accidental process termination
- Use SSH key-based authentication for critical devices, with each team member having their own key
- Clearly annotate devices (e.g., “Dedicated / Shared Debugging”) in the device notes so the entire team understands usage rules