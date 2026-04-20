---
sidebar_label: '3.7 System Flashing'
title: 3.7 System Flashing
---

# 3.7 System Flashing

![System flashing wizard · Step 1: Select board type—three cards labeled RDK X3 / X5 / S100(P), with S100(P) marked as using the dedicated XBURN channel](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/08-burnning.png)

System flashing is an all-in-one flashing interface within RDK Studio, supporting the entire RDK board series: RDK X3 and RDK X5 use either TF cards or eMMC, while RDK S100 uses the dedicated xburn tool. Developers no longer need to install multiple flashing tools for different board types.

[2.2 Flashing the System Image](../../2-quick-start/2-flash-system.md) provides the simplest "quick start" procedure. This section serves as a comprehensive reference for flashing, covering detailed instructions for three media types, eMMC backup and restoration, and troubleshooting failed flashing attempts.

## Contents of this section

- [3.7.1 Comparison of Flashing Media](./1-media-comparison.md): Supported board types and recommended scenarios for each of the three media types  
- [3.7.2 TF Card Flashing](./2-tf-card.md): Standard flashing method for RDK X3 and RDK X5  
- [3.7.3 eMMC Flashing, Backup, and Restoration](./3-emmc.md): Flashing, backup, and restoration procedures for eMMC-equipped RDK X5 boards  
- [3.7.4 RDK S100 xburn](./4-s100-xburn.md): Workflow for the RDK S100–specific xburn-gui tool