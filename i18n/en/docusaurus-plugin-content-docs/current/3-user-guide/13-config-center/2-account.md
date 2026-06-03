---
sidebar_label: '3.13.2 Sign in & account'
title: 3.13.2 Sign in & account
---

# 3.13.2 Sign in & account

Account & security shows your signed-in D-Robotics identity and supports sign-out and local session cleanup.

## Signed-in details

After sign-in, the account section shows:

- Username / email
- Role (when RBAC is configured)
- Sign-in time and remaining session validity
- Linked org / team (when applicable)

## Sign out

| Action | Behavior |
|---|---|
| Sign out | Clears local session tokens; keeps other config (devices, model entries, skills, etc.) |
| Sign out and clear local data | Also clears device list, model entries, chat history, and similar local data |

Next launch requires sign-in again. Use *Sign out* for a temporary logout; use *Sign out and clear local data* before handing the PC to someone else.

## Weird sign-in state

If you see “signed in but actions blocked” or the login page loops:

1. In the account section, **Sign out**, then sign in again.
2. Restart RDK Studio and retry.
3. If still broken, use the local session cleanup entry on the page, then sign in again.

You rarely need to touch session files manually—they keep login state only; passwords are not stored locally.

## Switching accounts

To use another D-Robotics account:

1. Sign out
2. Restart Studio (sometimes needed to clear embedded browser cookie cache)
3. Sign in with the new account

After switching, Studio syncs that account’s cloud-backed settings when cloud sync is on. Local device lists and skills are **not** overwritten—they stay on the machine.

## Multiple accounts on one PC

Different D-Robotics accounts can use Studio on the same PC, but only one session at a time. Guidance:

- Teams: each person signs in on their own PC
- Shared PC: sign out and clear local data between users to avoid mixing data

If enterprise SSO fails or you still have no permission after login, contact internal IT or your admin for account status.
