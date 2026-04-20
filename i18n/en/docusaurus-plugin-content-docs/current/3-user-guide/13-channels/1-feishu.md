---
sidebar_label: '3.13.1 Feishu Channel'
title: 3.13.1 Feishu Channel
---

# 3.13.1 Feishu Channel

The Feishu channel integrates RDK Studio's AI conversation capabilities into your enterprise Feishu bot, enabling team members to:

- Mention the @Bot in a Feishu group to let AI assist with board operations  
- Have one-on-one conversations with AI via private chat  
- View all AI responses directly within Feishu, ensuring full traceability of task flows  

## Configuration Settings

Configure the following fields under *Configuration Center → Multi-channel Integration → Feishu*:

| Field | Required | Source |
|---|---|---|
| App ID | Yes | Feishu Developer Console → Your App → Credentials & Basic Info |
| App Secret | Yes | Same as above |
| Encrypt Key | No | Feishu Console → Event Subscriptions |
| Verification Token | No | Same as above |

App ID and App Secret are authentication credentials for your Feishu self-built app. The Encrypt Key is used to decrypt events pushed by Feishu, and the Verification Token verifies the event source—both are optional and will fall back to default security policies if not configured.

## Creating a Feishu Self-Built App

If your team doesn’t already have a Feishu self-built app, create one first:

1. Go to the Feishu Developer Console  
2. Create a new "Self-Built App" and fill in the app name, icon, and description  
3. Under *Permission Management*, enable required permissions such as reading messages, sending messages, and accessing group info  
4. Under *Event Subscriptions*, subscribe to the "Receive Message" event and enter the callback URL (pointing to your Studio instance’s public address)  
5. Submit the app under *Version Release* and wait for approval from your enterprise admin  
6. After approval, retrieve the App ID and App Secret  

For detailed instructions, refer to the official Feishu Open Platform documentation.

## Three Private Chat Policies

| Mode | Behavior | Recommended Scenario |
|---|---|---|
| Allowlist Mode | Only specified Feishu users can initiate private chats with the Bot | Strongly recommended for production environments |
| Approval Mode | Any user can message the Bot, but requires admin approval for continued use | Internal teams wanting moderate control |
| Open Mode | Any Feishu user who can see the Bot can use it directly | Testing environments or scenarios with no sensitive operations |

**Always use Allowlist Mode in production.** Open Mode means anyone can instruct the AI to run commands on your boards—this poses extremely high risk.

## User Management

| Action | Path |
|---|---|
| View bound users | *Feishu → User Management* |
| Approve pending pairing requests | *Feishu → Pending Approvals* |
| Remove a user | *User Management → Select User → Remove* |
| Enable / Disable the entire Feishu channel | *Feishu → Channel Toggle* |

## Bot Capabilities in Feishu

The Bot offers nearly identical functionality to AI Dock:

- Check device status: e.g., "Check BPU usage on RDK-X5-Workstation1"  
- File transfer: e.g., "Send me /tmp/log.txt" (the Bot sends the file as an attachment in Feishu)  
- Command execution: e.g., "Restart ROS node camera_publisher"  
- Invoke any installed skill  

When invoking high-risk commands (e.g., `rm -rf`, `kill`, `dd`) via Feishu, the Bot will always require explicit secondary confirmation within Feishu—even if such commands are allowed by default in Studio. This stricter policy exists because Feishu is an external channel, warranting enhanced security measures.