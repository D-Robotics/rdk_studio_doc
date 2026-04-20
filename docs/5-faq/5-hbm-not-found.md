---
sidebar_label: '5.5 hbm 模型无法加载'
title: 5.5 hbm 模型无法加载
---

# 5.5 hbm 模型无法加载

## 典型现象

YOLO 或检测类节点启动失败，日志中出现：

- `No such file or directory: config/xxx.hbm`
- `model not found`
- `cannot open model: <path>`
- 启动后什么都不输出就 `exit 0`
- `hbm version mismatch` 或 `model incompatible`

## 快速判断

在板端找到真实的 hbm 文件位置：

```bash
find /opt/tros -name "*.hbm" 2>/dev/null
```

把 launch 文件中的相对路径（如 `config/yolo.hbm`）改成 `find` 输出的**绝对路径**。

## 不要依赖相对路径

大多数失败是因为 launch 或节点在"当前工作目录"下寻找 `config/xxx.hbm`，但实际文件在 `/opt/tros/humble/lib/<包名>/config/`（或 `share/<包>/config/`）。**绝对路径才能稳定。**

## 三种修复方法

### 方法 A：直接写绝对路径（最稳）

```python
model_file_path = '/opt/tros/humble/lib/hobot_yolo_world/config/yolo_world_v2.hbm'
```

优点：完全确定，不受启动方式影响。缺点：跨板迁移时需要手动修改路径。

### 方法 B：用 ros2 pkg prefix 拼接（迁移友好）

```python
import os
from ament_index_python.packages import get_package_share_directory

model_file_path = os.path.join(
    get_package_share_directory('hobot_yolo_world'),
    'config',
    'yolo_world_v2.hbm'
)
```

优点：同一份代码在不同板上都能找到对应路径。缺点：依赖 ROS 2 的路径解析机制。

### 方法 C：软链接到可写目录（适合脚本工作目录不固定）

```bash
# 在板端执行一次
mkdir -p /userdata/models
ln -sf /opt/tros/humble/lib/hobot_yolo_world/config/yolo_world_v2.hbm /userdata/models/yolo.hbm

# launch 中使用固定路径
model_file_path = '/userdata/models/yolo.hbm'
```

优点：路径固定且可写。缺点：增加一层间接引用。

## BPU 架构兼容性

不同 RDK 板使用不同的 BPU 架构，**hbm 模型不能跨架构使用**：

| 板型 | BPU 架构 | hbm 跨架构通用 |
|---|---|---|
| RDK X3 | Bernoulli2 | 否 |
| RDK X5 | Bayes | 否（与 X3、S100 不通用） |
| RDK S100 | Nash | 否 |

报错 `hbm version mismatch` 或 `model incompatible` 基本都是给错板型的 hbm。解决方法：用对应板型的 D-Robotics 模型转换工具（`hb_mapper`）重新编译。

## 根本原因

ROS 2 launch 文件的"工作目录"取决于启动方式：

- 直接 `ros2 launch`：cwd 是执行命令的目录
- systemd 服务：cwd 由 service 文件决定
- IDE 终端 vs SSH 终端：cwd 可能不一致

因此**任何相对路径都不可靠**。

## 永久解决

| 实践 | 说明 |
|---|---|
| 团队约定 launch 禁用相对路径 | 强制要求开发者写绝对路径或用 `get_package_share_directory` |
| 核心模型统一放置 | `/opt/tros/humble/lib/<pkg>/config/`（ROS 2 标准位置） |
| 业务自定义模型放在可写区 | `/userdata/models/`（目录可写、SD 卡升级保留） |
| 多板团队预编译 | 为每款板准备对应架构的 hbm，通过设备画像自动选择 |
