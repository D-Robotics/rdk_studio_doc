---
sidebar_label: '3.10.4 Coordination Mechanism with D-Moss'
title: 3.10.4 Coordination Mechanism with D-Moss
---

# 3.10.4 Coordination Mechanism with D-Moss

The D-Moss Agent on the PC side coordinates with the OpenClaw Agent on the board side via an SSH tunnel. This section describes the underlying physical link, the OpenClaw tool suite provided by D-Moss, and security design principles.

## Physical Link

```text
PC Side
├─ Studio Process
│  └─ D-Moss Agent
│     └─ oc-bridge (SSH tunnel client, established on demand)
│           ↓
Board Side
├─ sshd (port 22)
│  └─ Port Forwarding: Remote 18789 → Local 18789
│        ↓
└─ 127.0.0.1:18789
   └─ OpenClaw Gateway Process
      └─ OpenClaw Agent (Node.js long-running service)
```

By default, the OpenClaw gateway listens only on `127.0.0.1:18789` on the board side and does not bind to any external IP address. Studio reuses the established SSH channel for TCP port forwarding, maintaining security while avoiding the need to expose a public port specifically for OpenClaw.

## Long-Connection Lifecycle

| Phase | Behavior |
|---|---|
| First access to OpenClaw | oc-bridge establishes an SSH tunnel and starts forwarding |
| Continuous access | SSH channel remains alive and is reused as needed |
| All holders disconnect | oc-bridge releases the SSH connection after a 60-second delay |
| Subsequent access | Re-establishes the SSH tunnel |

The 60-second delay before releasing the connection helps avoid frequent creation and teardown of SSH connections within a short period. This behavior is controlled by the environment variable `RDK_OC_BRIDGE_IDLE_TEARDOWN_MS`, which defaults to 60,000 milliseconds.

## D-Moss OpenClaw Tool Suite

The D-Moss Agent provides more than 15 tools prefixed with `board_openclaw_`, encapsulating the full capabilities of OpenClaw. When users mention OpenClaw-related topics in AI Dock, D-Moss automatically invokes these tools as needed:

| Tool | Purpose |
|---|---|
| `board_openclaw_status` | Quick status summary |
| `board_openclaw_health` | Structured JSON health check |
| `board_openclaw_check` | Comprehensive diagnostics (equivalent to the "doctor" command) |
| `board_openclaw_logs` | Fetch OpenClaw logs |
| `board_openclaw_install` / `upgrade` / `uninstall` | Lifecycle management |
| `board_openclaw_restart_gateway` | Restart the gateway process |
| `board_openclaw_model_switch` | Switch the model used by OpenClaw on the board |
| `board_openclaw_feishu_config` | Configure Feishu channel credentials on the board |
| `board_openclaw_weixin_config` | Configure WeChat channel credentials on the board |
| `board_openclaw_pairing_list` / `approve` / `reject` | Pairing management |
| `board_openclaw_assess` | Evaluate whether a task is suitable for execution on the board |
| `board_openclaw_delegate` | Delegate a task to be executed in OpenClaw’s own session on the board |
| `board_openclaw_doctor` | Automatically attempt to fix common issues |

Developers typically do not need to invoke these tools directly—simply describing requirements in natural language within AI Dock is sufficient, and D-Moss will automatically select and combine the appropriate tools.

## Health Monitoring and Auto-Reconnection

The Studio Dashboard displays an OpenClaw health badge (green / yellow / red):

- **Green**: OpenClaw gateway responds normally, and the model API is reachable  
- **Yellow**: Gateway response is slow or the model API returns errors, but remains usable  
- **Red**: Gateway is unresponsive or the SSH tunnel is disconnected  

When background keep-alive probes detect anomalies, Studio’s notification center displays an alert and automatically attempts to reconnect. In most cases, reconnection completes transparently without requiring developer intervention.