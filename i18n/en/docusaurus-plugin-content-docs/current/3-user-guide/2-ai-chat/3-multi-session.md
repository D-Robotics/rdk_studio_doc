---
sidebar_label: '3.2.3 Conversation history'
title: 3.2.3 Conversation history
---

# 3.2.3 Conversation history

Find and resume tasks from the project/conversation list on the left. Search, rename, pin, and archive are available. Before continuing, check the project, device, folder, and task runtime.

## New task or continue

Continue the same goal in its original conversation. Create a task for an unrelated goal, another project, or a different runtime. Existing tasks retain their Moss/DSH binding when the default for new tasks changes.

Long conversations may compact older content. Keep important logs, configuration, and conclusions in files or attachments. `/compact` availability depends on the current runtime.

## Desktop local history

Projects, chats, titles, pins, archives, and drafts belong to the current local data directory. Saved records remain viewable after sign-out or account switching; new execution uses the current account's permissions and quota. Different OS users or data directories do not automatically merge history.

| Action | Effect |
|---|---|
| Delete project | Removes its record and bindings; chats stay in recent tasks and local/board files remain |
| Delete from local history | Applies to accounts using the same data directory and prevents retained older sources from reappearing in the list |
| Permanently delete DSH conversation | A separate official-session deletion action for conversations the current account is allowed to delete |

Deleting local history does not permanently delete the official DSH conversation. Verify the target and confirmation before permanent deletion.

## Upgrade recovery

The new version copies and validates older local history while retaining the original sources. If recovery fails or storage is full, restore storage and local services, then select **Retry local history recovery**. Read-only recovery preserves the records; do not delete old records or reset the app to troubleshoot it.

Rolling back does not automatically import chats created by the newer version. Keep the data directory and run the newer version again to continue recovery.

## DSH and account switching

Saved local DSH history is available for viewing; execution recovery uses the official session. Continuing across accounts creates a linked task for the current account and retains the original record. A new account does not take over the old account's tasks or approvals.

Web deployments isolate conversations, projects, and tasks by account. Desktop shared local-history rules do not apply there.

## Continue after stopping

Stopping does not roll back completed commands, file writes, or device state. State the goal and check previous results before continuing to avoid repeating actions.
