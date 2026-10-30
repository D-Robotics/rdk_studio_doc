---
sidebar_label: '3.4.3 Paths and permissions'
title: 3.4.3 Paths and permissions
description: 'Path authorization, system directory limits, and permission boundaries'
---

# 3.4.3 Paths and permissions

File access depends on workspace authorization, path restrictions, device state, and OS permissions. Seeing a path does not grant write access.

## Common restrictions

| Situation | Action |
|---|---|
| No work folder bound | Select or authorize a project folder |
| Path outside the workspace | Return to the authorized folder or use the folder-authorization flow |
| Device offline / target mismatch | Restore the original target connection |
| System or sensitive path restricted | Read the error, check the need, and use a supported operation entry |
| OS permission denied | Check ownership, mount state, and device permissions |

Paths such as `/sys`, `/proc`, `/dev`, and `/boot` can affect the kernel, devices, and startup. Access depends on the specific operation; do not assume universal read or write support.

Saying “I authorize this” in chat does not automatically bypass path restrictions or OS permissions. Use the corresponding approval or authorization flow when required. Preserve rejection reasons rather than treating a failed write as success.
