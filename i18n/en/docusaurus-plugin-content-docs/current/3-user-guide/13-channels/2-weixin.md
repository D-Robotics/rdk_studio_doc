---
sidebar_label: '3.13.2 WeChat Channel'
title: 3.13.2 WeChat Channel
---

# 3.13.2 WeChat Channel

The WeChat channel enables AI conversation integration by binding the developer's personal WeChat account. Please note: this refers to your **personal WeChat account**, not WeCom (Enterprise WeChat). After binding, developers can send messages to the Bot via WeChat, check board status, and remotely trigger tasks.

## Binding Steps

| Step | Action |
|---|---|
| 1 | *Configuration Center → Multi-channel Integration → WeChat* → Click *Bind WeChat* |
| 2 | Studio displays a QR code |
| 3 | Scan the QR code using WeChat |
| 4 | Receive a "Binding Successful" message from the Bot in WeChat |
| 5 | Send messages to the Bot afterward to start conversing with the AI |

After binding, a new contact (or group bot, depending on implementation) will appear in WeChat. Conversations with this contact are equivalent to conversations with the AI.

## Management Operations

| Action | Path |
|---|---|
| View bound accounts | *WeChat → User List* |
| Remove a binding | *User List → Select Account → Remove* |
| Restart WeChat channel | *WeChat → Channel Control → Restart* |

## Limitations of the WeChat Channel

| Limitation | Impact |
|---|---|
| Personal WeChat | Only a **limited number of accounts** can be bound simultaneously (exact limit depends on WeChat's policy) |
| High-risk operations | Require secondary confirmation, same as Feishu channel |
| Rich text display | Limited formatting in WeChat chat; long outputs may be truncated or split into multiple messages |
| File transfer | Restricted by WeChat API; large files require alternative methods (e.g., direct SSH transfer) |
| Account risk | Frequent automated messaging may trigger WeChat’s account suspension policy—use with caution |

## Recommended Use Cases

| Scenario | Recommendation |
|---|---|
| Checking board status while traveling or away from the office | Recommended |
| Team members operating the board via a WeChat group | Not recommended (use Feishu enterprise Bot instead) |
| 7×24 automated bot integration | Not recommended (due to account risk; use a dedicated Bot platform or Feishu instead) |

## Deploying on OpenClaw Board

If you want WeChat messages to be processed even after your PC is shut down, you can deploy the WeChat channel on the OpenClaw board:

1. Go to *OpenClaw → Configuration → WeChat Channel*
2. Configure or scan to bind your account
3. The OpenClaw board takes over WeChat message processing
4. PC shutdown no longer affects functionality—as long as the board has power and network connectivity, it can process messages

Bindings on the board and on the PC can coexist independently, but binding the same WeChat account simultaneously on both is not recommended (may cause message handling conflicts).