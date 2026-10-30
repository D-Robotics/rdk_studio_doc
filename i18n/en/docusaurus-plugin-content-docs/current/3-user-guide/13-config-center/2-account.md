---
sidebar_label: '3.13.2 Accounts'
title: 3.13.2 Accounts
description: 'Check sign-in status and how accounts relate to local data'
---

# 3.13.2 Accounts

Check sign-in state in **Settings → Account & security** and follow the available sign-in, sign-out, and account actions. Model requests use the current account's permissions and quota.

## Desktop accounts and local data

Saved desktop projects, chats, titles, pins, archives, and drafts belong to the current local data directory. They remain viewable after sign-out or account switching. Changing accounts does not hide local history or remove files.

On a shared computer, use separate OS users or data directories to isolate local work. Deleting local history affects users of the same data directory; deleting a project does not delete its files.

## DSH history

Saved DSH content can be viewed locally; execution recovery uses the official session. Continuing across accounts creates a linked task for the current account. It does not transfer the original account's tasks or approvals.

**Delete from local history** and **Permanently delete DSH conversation** are separate actions. The latter is available only for official conversations the current account may delete. See [Conversation history](../2-ai-chat/3-multi-session.md).

## Web deployments

Web projects, conversations, and tasks are isolated by account. Signing in as another account uses that account's data and permissions. Desktop local-history rules do not apply.

## Sign-in problems

Check network and displayed errors, then sign out and back in; restart the client if needed. If history is in read-only recovery, repair storage or services and retry recovery instead of resetting data as a sign-in fix.
