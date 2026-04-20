---
sidebar_label: '3.12 Configuration Center'
title: 3.12 Configuration Center
---

# 3.12 Configuration Center

![Configuration Center (Moss Settings): Left-side navigation with 6 sections (Account & Security / AI Engine / Feishu / WeChat / Device Connection / Apps & Updates); right-side displays fields for Account & Security and AI Engine](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/settings-panel.png)

The Configuration Center is the unified management interface for global settings in RDK Studio. All non-temporary configuration items—such as accounts, AI models, default device connection settings, appearance, and app updates—are managed here.

Underlying configurations are defined using JSON Schema, facilitating validation, migration, and cross-version compatibility. Configuration files are stored in the local user directory and can be exported or imported to synchronize settings across different machines.

This section serves as the "primary home" for features such as AI Engine configuration, default device connection settings, and configuration import/export. The "detailed configuration" mentioned in [Section 2.5 Connecting AI Models](../../2-quick-start/5-configure-ai-model.md) is fully expanded here.

## This Section Includes

- [3.12.1 Overview](./1-overview.md): Six main sections, configuration file storage location, and when settings take effect  
- [3.12.2 Account Management](./2-account.md): Login information, sign-out, and local data cleanup  
- [3.12.3 AI Engine Configuration](./3-ai-engine.md): Model entry fields, dual-lane assignment, and protocol determination  
- [3.12.4 Default Device Connection Settings](./4-device-defaults.md): Auto-reconnection, timeout, and Mesh toggle  
- [3.12.5 Configuration Import and Export](./5-import-export.md): Cross-machine synchronization and team sharing