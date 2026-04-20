---
sidebar_label: '1.4 Supported Hardware'
title: 1.4 Supported Hardware
---

# 1.4 Supported Hardware

RDK Studio currently supports three RDK-series development boards released by D-Robotics. This section provides key hardware specifications and BPU architecture differences among these three boards, along with how these differences impact the development workflow.

## Comparison of the Three Boards

| Item | RDK X3 | RDK X5 | RDK S100/S100P |
|---|---|---|---|
| **SoC** | Sunrise 3 | Sunrise 5 | Sunrise S100E/S100P |
| **CPU** | Quad-core ARM Cortex-A53 @1.5 GHz | Octa-core ARM Cortex-A55 @1.5 GHz | Hexa-core ARM Cortex-A78AE @1.5 GHz (S100P: 2.0 GHz) |
| **MCU** | — | — | Quad-core ARM Cortex-R52+ @1.2 GHz |
| **BPU Performance (INT8 equivalent)** | 5 TOPS | 10 TOPS | 80 TOPS (S100) / 128 TOPS (S100P) |
| **BPU Architecture** | Bernoulli2 | Bayes | Nash |
| **GPU** | — | 32 GFLOPS (Mali) | 100 GFLOPS (Mali-G78AE) |
| **Memory** | 2 GB / 4 GB LPDDR4 | 4 GB / 8 GB LPDDR4 | 12 GB (S100) / 24 GB (S100P) LPDDR5 |
| **Storage** | Micro SD | Micro SD (some versions include eMMC) | 64 GB eMMC + M.2 Key M SSD interface |
| **Networking** | Gigabit Ethernet | Gigabit Ethernet (PoE) + Wi-Fi 6 + BT 5.4 | Varies by configuration |
| **USB** | USB 3.0 / USB 2.0 | 4× USB 3.0 Type-A + 1× USB-C | Varies by configuration |
| **Camera Interfaces** | 2× MIPI CSI | 2× 4-lane MIPI CSI | Varies by configuration |
| **Typical Use Cases** | Entry-level AI, low-cost robotics | Primary development platform, ROS/TROS, vision applications | Embodied intelligence, Transformer inference, multi-sensor fusion |

> Source: [RDK X3 Official Page](https://developer.d-robotics.cc/en/rdkx3), [RDK X5 Official Page](https://developer.d-robotics.cc/en/rdkx5), [RDK S100 Official Page](https://developer.d-robotics.cc/en/rdks100), and official D-Robotics hardware documentation. Refer to official pages for exact specifications.

The RDK X5 is currently the flagship development board, offering a balanced performance-to-power ratio and supporting Type-C Flash Connect (5-second connection). The RDK X3 is an entry-level board commonly used for learning and lightweight inference tasks. The RDK S100 targets high-compute scenarios such as embodied intelligence; its Nash BPU architecture offers significantly better support for Transformer-family operators compared to previous generations and introduces LPDDR5 memory and NVMe storage.

## Impact of BPU Architecture Differences on Development

The three boards use three different generations of BPU architectures:

| Generation | Architecture | Board Model | Equivalent Performance |
|---|---|---|---|
| 1st | Bernoulli2 | RDK X3 | 5 TOPS |
| 2nd | Bayes | RDK X5 | 10 TOPS |
| 3rd | Nash | RDK S100 / S100P | 80 / 128 TOPS |

HBM model files compiled by D-Robotics’ model conversion tool `hb_mapper` **cannot be used across different BPU architectures**:

- An HBM compiled on RDK X3 cannot run directly on RDK X5.
- An HBM compiled on RDK X5 cannot run directly on RDK S100.

To deploy the same model across different boards, you must recompile it using the corresponding board-specific toolchain. Errors such as `hbm version mismatch` or `model incompatible` during runtime typically indicate that a model compiled for the wrong board type is being used. For detailed troubleshooting steps, see [5.5 HBM Model Fails to Load](../5-faq/5-hbm-not-found.md).

RDK Studio automatically detects the currently active device’s board type in AI conversations and loads the corresponding hardware knowledge. If a user issues a command or performs an operation incompatible with the current board type, the AI will proactively alert them—for example, if a developer connected to an RDK X3 requests to “use an RDK X5 Bayes-architecture HBM,” the AI will first point out the board-type mismatch.

## Feature Availability Across Different Boards

Most RDK Studio features offer consistent experiences across all three boards. The following capabilities differ:

| Feature | RDK X3 | RDK X5 | RDK S100 |
|---|---|---|---|
| Type-C Flash Connect | Not supported | Supported | Not supported |
| TF Card Flashing | Supported | Supported | Not supported (no TF card slot) |
| eMMC Flashing | Not supported | Supported (requires eMMC version) | N/A (xburn only) |
| xburn Flashing | Not supported | Not supported | Supported (only method available) |
| Serial Console Access | Via UART2 on GPIO | Via onboard micro-USB | Via onboard USB-UART |

All other features not listed in the table—including remote terminal, AI conversation, file management, IDE, remote desktop, Wi-Fi configuration, device management, OpenClaw, etc.—function identically across all three boards.

## Recommended Initial Connection Methods

| Board Model | Recommended Initial Connection Method |
|---|---|
| RDK X5 | Type-C Flash Connect (fastest, no network setup required) |
| RDK X3 | SSH over network (connect the board to a router first and obtain its IP from the router’s admin interface) |
| RDK S100 | SSH over network |
| Any board with boot failure | Serial console access (for recovery; allows reading boot logs) |

For detailed instructions, see [2.3 Connecting to Your Device](../2-quick-start/3-connect-device/index.md).