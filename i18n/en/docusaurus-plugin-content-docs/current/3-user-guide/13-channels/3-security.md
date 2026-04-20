---
sidebar_label: '3.13.3 Security Policies and Approvals'
title: 3.13.3 Security Policies and Approvals
---

# 3.13.3 Security Policies and Approvals

External channels (Feishu, WeChat) apply stricter approval policies by default compared to those within Studio. This section describes these policies and best practices.

## Secondary Confirmation for High-Risk Commands

High-risk operations triggered via external channels require users to confirm a second time within the channel itself (not via a Studio pop-up):

| Trigger Command | Behavior |
|---|---|
| `rm -rf` | Bot replies: "About to delete X. Confirm? Please reply `/yes` to proceed." |
| `kill` critical processes | Same as above |
| `dd` disk writes | Same as above |
| Modifying systemd service configurations | Same as above |
| Deleting large numbers of files | Same as above |

The command executes only after the user replies with `/yes` (on Feishu) or `确认` ("Confirm" on WeChat). Any other reply or timeout (default: 60 seconds) cancels execution.

This mechanism mitigates security risks arising from the combination of "malicious insiders + external Bot access"—even if the Bot is misused, destructive commands cannot be executed directly.

## Multi-Channel Approval Coordination

| Trigger Method | Approval Requirement |
|---|---|
| Studio desktop client | Determined by the `risk` field (low: auto-execute; medium: prompt; high: mandatory confirmation) |
| External channels (Feishu / WeChat) | All high-risk commands require in-channel secondary confirmation, regardless of the `risk` field |
| Autonomy (OpenClaw autonomous tasks) | Only executes operations explicitly permitted in the OpenClaw configuration |

## Security Best Practices

| Practice | Explanation |
|---|---|
| Use allowlists or approval mode in production environments | Do not allow arbitrary Feishu users to connect to the Bot |
| Never commit App Secrets to Git | Not even in private repositories—leakage can be extremely costly |
| Deny high-risk skills by default in multi-channel scenarios | Grant explicit authorization only to specific allowlisted users when necessary |
| Regularly audit paired clients | Remove clients belonging to former employees or unused accounts |
| Monitor Bot invocation logs | Unusually high-frequency calls may indicate abuse or compromise |

## Disabling Channels

When discontinuing use of a channel:

| Channel | Disable Method |
|---|---|
| Feishu | Go to *Configuration Center → Multi-Channel → Feishu → Channel Toggle* and turn it off |
| WeChat | Go to *Configuration Center → Multi-Channel → WeChat → Channel Control → Stop* |

Disabling a channel does not delete its configured credentials or user lists. Re-enabling takes effect immediately. If you no longer intend to use the channel at all, we recommend also cleaning up its credentials to prevent accidental misuse.

## Incident Response

If Bot misuse or anomalous behavior is detected:

1. **Immediately disable the channel**: Turn off the corresponding channel toggle in the *Configuration Center*
2. **Revoke credentials**: Revoke the App Secret or unbind the integration in the Feishu developer console or WeChat backend
3. **Audit logs**: Review all invocations during the suspicious period in the *Logs* tab of OpenClaw
4. **Clean up data**: Check the board for unexpected files or modified configurations
5. **Notify the team**: Alert all team members authorized to use the Bot

Regularly practice this incident response procedure to ensure rapid reaction when incidents occur.