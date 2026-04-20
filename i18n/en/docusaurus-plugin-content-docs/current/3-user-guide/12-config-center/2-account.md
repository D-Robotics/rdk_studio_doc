---
sidebar_label: '3.12.2 Account Management'
title: 3.12.2 Account Management
---

# 3.12.2 Account Management

The Account & Security section displays information about the currently logged-in D-Robotics account and provides operations such as logging out and clearing local sessions.

## Logged-in Information

After successful login, the account section displays:

- Username / Email
- User role (if RBAC is configured)
- Login time and remaining session validity
- Associated organization / team (if applicable)

## Log Out

| Action | Behavior |
|---|---|
| Log Out | Clears the local session token but retains other configurations (device list, model entries, skills, etc.) |
| Log Out and Clear Local Data | Also clears all local data, including device list, model entries, conversation history, etc. |

After logging out, you will need to log in again the next time you launch Studio. Use *Log Out* for temporary logout; use *Log Out and Clear Local Data* if you are lending your computer to someone else.

## Local Session Storage

Login sessions are stored in `~/.rdk-studio/sso-sessions.json`:

```json
{
  "user": "your-account",
  "access_token": "...",
  "refresh_token": "...",
  "expires_at": "2026-04-19T12:00:00Z"
}
```

If you encounter abnormal login status (e.g., showing as logged in but operations are restricted), delete this file and restart Studio to trigger a re-login.

## Account Switching

To switch to another D-Robotics account:

1. Log out
2. Restart Studio (a restart is required in some scenarios to clear browser cookie cache)
3. Log in with the new account

After switching accounts, Studio will sync configurations associated with the new account from the cloud (if cloud sync is enabled). Local data such as device lists and skills will not be overwritten—they remain local and do not change with account switching.

## Multiple Accounts on One Machine

Multiple D-Robotics accounts can share the same PC with Studio, but only one account can be logged in at a time. Recommendations:

- Team environments: Each developer should log in independently on their own PC.
- Shared PCs: Always log out and clear local data before switching accounts to avoid data confusion.

## Enterprise SSO Mode

In some enterprise deployments, RDK Studio enforces SSO login and does not allow guest mode. In such deployments:

- Logging out and restarting Studio will immediately trigger the SSO login window again.
- Skipping login and using Studio directly is not permitted.
- If the SSO service is unreachable, Studio cannot start.

For details about deployment modes, please consult your internal IT team.