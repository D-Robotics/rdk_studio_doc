---
sidebar_label: '1.5 Release Notes'
title: 1.5 Release Notes
---

# 1.5 Release Notes

![Settings Center · Application and Update Section](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/settings-app-update.png)

## Version Covered in This Document

This document describes the **RDK Studio 1.1.x** series. If the interface you see in your client significantly differs from what is described here, we recommend upgrading your client first.

## Version Check and Upgrade

Open the desktop client and navigate to *Settings Panel → Application and Update* to view your current version number, check for the latest released version, and perform a one-click upgrade. Upgrading Studio preserves all local configurations (device list, model entries, installed skills, conversation history) without data loss.

You can check CLI tool versions using the following commands:

```bash
rdkstudio --version
dmoss-agent --version
```

> `@dmoss/agent` is the npm package name; after installation, the command name is `dmoss-agent` (without the `@` prefix).

To upgrade the CLI tools:

```bash
# rdkstudio is managed by the desktop client; simply re-enable it to sync to the latest version
# Settings Panel → Application and Update → Command-line Tools → Re-enable

# dmoss-agent is upgraded via npm
npm install -g @dmoss/agent@latest
```

## Release Notes

For the complete version release notes, please click the version number at the lower left corner of the RDK Studio page to view the update details.
## Feedback Channels

If you encounter any issues during use, you can get help through the following methods:

- 🌐 [Developer Community](https://developer.d-robotics.cc/en)
- 📧 [Technical Support Email](mailto:developer@d-robotics.cc)
- 📱 [Official Technical Discussion Group](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=dd2ra5d5-a239-4b4d-bc26-46e3374d1428)
- Within the client: *Settings Panel → Application and Update → Export Diagnostic Bundle*: send us the diagnostic information for troubleshooting

The diagnostic bundle includes your local configuration, recent conversation logs (anonymized), and client runtime logs. It does **not** contain API keys or SSH passwords for edge devices.