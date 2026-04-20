---
sidebar_label: '5.5 HBM Model Fails to Load'
title: 5.5 HBM Model Fails to Load
---

# 5.5 HBM Model Fails to Load

## Typical Symptoms

YOLO or detection-related nodes fail to start, with logs showing:

- `No such file or directory: config/xxx.hbm`
- `model not found`
- `cannot open model: <path>`
- Exits immediately with `exit 0` after startup without any output
- `hbm version mismatch` or `model incompatible`

## Quick Diagnosis

Locate the actual HBM file on the board:

```bash
find /opt/tros -name "*.hbm" 2>/dev/null
```

Replace the relative path in your launch file (e.g., `config/yolo.hbm`) with the **absolute path** returned by the `find` command.

## Avoid Relying on Relative Paths

Most failures occur because the launch file or node searches for `config/xxx.hbm` in the "current working directory," while the actual file resides in `/opt/tros/humble/lib/<package_name>/config/` (or `share/<package>/config/`). **Only absolute paths guarantee stability.**

## Three Fix Methods

### Method A: Hardcode Absolute Path (Most Reliable)

```python
model_file_path = '/opt/tros/humble/lib/hobot_yolo_world/config/yolo_world_v2.hbm'
```

Pros: Fully deterministic and unaffected by how the node is launched.  
Cons: Requires manual path updates when migrating across boards.

### Method B: Use `ros2 pkg prefix` Concatenation (Migration-Friendly)

```python
import os
from ament_index_python.packages import get_package_share_directory

model_file_path = os.path.join(
    get_package_share_directory('hobot_yolo_world'),
    'config',
    'yolo_world_v2.hbm'
)
```

Pros: Same code works across different boards automatically.  
Cons: Depends on ROS 2's path resolution mechanism.

### Method C: Create Symlink to Writable Directory (Suitable When Working Directory Varies)

```bash
# Run once on the board
mkdir -p /userdata/models
ln -sf /opt/tros/humble/lib/hobot_yolo_world/config/yolo_world_v2.hbm /userdata/models/yolo.hbm

# Use fixed path in launch file
model_file_path = '/userdata/models/yolo.hbm'
```

Pros: Fixed, writable path.  
Cons: Adds an extra layer of indirection.

## BPU Architecture Compatibility

Different RDK boards use distinct BPU architectures—**HBM models are NOT cross-architecture compatible**:

| Board Model | BPU Architecture | Cross-Architecture HBM Compatibility |
|-------------|------------------|--------------------------------------|
| RDK X3      | Bernoulli2       | No                                   |
| RDK X5      | Bayes            | No (incompatible with X3 and S100)   |
| RDK S100    | Nash             | No                                   |

Errors like `hbm version mismatch` or `model incompatible` almost always indicate that an HBM compiled for the wrong board architecture is being used. Solution: Recompile the model using D-Robotics' model conversion tool (`hb_mapper`) specific to the target board.

## Root Cause

The "working directory" of a ROS 2 launch file depends on how it’s started:

- Direct `ros2 launch`: cwd is the directory from which the command was executed  
- systemd service: cwd is defined in the service file  
- IDE terminal vs SSH terminal: cwd may differ  

Therefore, **any relative path is unreliable**.

## Permanent Solutions

| Practice                              | Description                                                                 |
|---------------------------------------|-----------------------------------------------------------------------------|
| Team policy: prohibit relative paths in launch files | Enforce absolute paths or `get_package_share_directory` usage               |
| Centralize core models                | Store in `/opt/tros/humble/lib/<pkg>/config/` (standard ROS 2 location)     |
| Place custom business models in writable area | Use `/userdata/models/` (writable; preserved during SD card upgrades)      |
| Precompile for multi-board teams      | Prepare architecture-specific HBMs for each board; auto-select via device profile |