---
sidebar_label: '3.2.1 Overview and Entry Point'
title: 3.2.1 Overview and Entry Point
---

# 3.2.1 Overview and Entry Point

![AI Dock input prompt and quick access: The input box at the bottom of the screen displays the prompt "Describe your issue or goal to Moss (troubleshooting, solutions, device operations)—or drag and drop files..."; three common example questions float above the input box; a dropdown in the bottom-left corner allows switching between Quick and Deep Thinking lanes](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/ai-dock-focused.png)

AI Dock is the persistent conversational entry point in RDK Studio, located at the bottom of the client window. Regardless of which tab the user is currently on (Workspace, Remote Terminal, File Manager, IDE, etc.), they can interact with the Agent through the same AI Dock—this reflects Studio’s philosophy of treating AI as a “globally integrated interaction layer” rather than just a “sidebar chatbox.”

![AI Dock real conversation flow: User asks "Hello, please introduce yourself," and Moss responds with a segmented self-introduction (Xiaodigua / project assistance / areas of expertise). The reply appears streamingly in the conversation panel, with "12 sec · 9.4k tokens" displayed at the bottom. The top status bar shows "Moss Ready OpenClaw Connected," and the current device is root@192.168.128.10:22](http://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/rdk_studio/en/ai-dock-valid-conversation.png)

## Invoking AI Dock

| Method | Action |
|---|---|
| / | Cursor positioned on the dialog box |
| Mouse | Click the input box at the bottom of the screen |

Once invoked, the input box gains focus and you can start typing immediately.

## AI Dock Top Status Bar

The top status bar of AI Dock displays contextual information about the current conversation:

- **Current Model**: Indicates the model used for this conversation (Thinking or Quick lane)
- **Session ID**: ID of the current session; click to switch sessions or start a new one
- **Token Usage Indicator**: Shows the proportion of tokens used in this session relative to the model’s context limit; turns red as it approaches the limit to provide a warning
- **Settings Entry**: Navigate to *Configuration Center → AI Engine*

## Relationship with Other Tabs

AI Dock shares the concept of “currently active device” with all functional tabs:

- In the *Remote Terminal* tab, commands invoked by AI are displayed synchronously within the terminal
- In the *File Manager* tab, file operations performed by AI share the same file system as those performed manually by the developer
- In the *Remote Desktop* tab, you can view the device’s graphical interface while simultaneously asking AI to analyze the screen or execute commands

When switching devices, AI Dock automatically switches to the corresponding device’s session—each device maintains its own independent conversation history.