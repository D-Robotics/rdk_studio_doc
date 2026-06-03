---
sidebar_label: '5.5 Cannot load hbm model'
title: 5.5 Cannot load hbm model
---

# 5.5 Cannot load hbm model

## What “hbm” is

hbm packages BPU-ready weights for RDK boards (usually `.hbm`). Only board-side inference (YOLO, detection, segmentation samples, etc.) needs them.

Pure SSH/files/desktop/local LLM use generally never touches hbm.

## Typical failures

YOLO/detection launches log lines like:

- `No such file or directory: config/xxx.hbm`
- `model not found`
- `cannot open model: <path>`
- Silent immediate `exit 0`
- `hbm version mismatch` / `model incompatible`

## Quick triage

On the board locate real artifacts:

```bash
find /opt/tros -name "*.hbm" 2>/dev/null
```

Remap launches that use relative paths (`config/foo.hbm`) to the **absolute** path `find` prints.

## Don’t rely on relative paths

Launches probe `config/*.hbm` from the **process cwd**, which differs by invocation.

Files usually live under `/opt/tros/humble/lib/<package>/config/` or `share/<pkg>/config/`. **Prefer absolute paths.**

## Three fixes

### A — Absolute path (most reliable)

```python
model_file_path = '/opt/tros/humble/lib/hobot_yolo_world/config/yolo_world_v2.hbm'
```

Pros: deterministic. Cons: relocate per board/path changes.

### B — `ros2 pkg` share path (better portability)

```python
import os
from ament_index_python.packages import get_package_share_directory

model_file_path = os.path.join(
    get_package_share_directory('hobot_yolo_world'),
    'config',
    'yolo_world_v2.hbm'
)
```

Pros: works across setups if ROS finds the package. Cons: ROS index must resolve the pkg.

### C — Stable symlink when cwd varies

```bash
# Run once on board
mkdir -p /userdata/models
ln -sf /opt/tros/humble/lib/hobot_yolo_world/config/yolo_world_v2.hbm /userdata/models/yolo.hbm

# launch snippet
model_file_path = '/userdata/models/yolo.hbm'
```

Pros: writable fixed path. Cons: extra indirection.

## Board compatibility

Different RDK SoCs expose different BPU ISAs — **you cannot reuse hbm across board families.** Rough guide:

| Board | BPU ISA | Portable across boards? |
|---|---|---|
| RDK X3 | Bernoulli2 | No |
| RDK X5 | Bayes | No (not interchangeable with X3/S100) |
| RDK S100 | Nash | No |

Treat toolchain/board docs as authoritative.

For `hbm version mismatch` / `model incompatible`, rebuild hbm targeting the active board.

## Root cause

ROS 2 launches inherit cwd from invocation context:

- `ros2 launch` from a shell ⇒ that shell cwd  
- daemons ⇒ service-defined cwd  
- editor terminal vs SSH ⇒ may differ  

So **relative hbm lookups are flaky**.

## Operational practices

| Practice | Why |
|---|---|
| Ban relative paths in reviewed launches | Keeps onboarding predictable |
| Keep core models under `/opt/tros/humble/lib/<pkg>/config/` | ROS‑standard placement |
| Custom weights in writable areas | e.g. `/userdata/models/` survives many SD swaps |
| Per-board binaries in CI | Produce one hbm per SKU |
