---
sidebar_label: '3.10.5 Handle on-board tasks'
title: 3.10.5 Handle on-board tasks
unlisted: true
---

# 3.10.5 Handle on-board tasks

Some tasks fit the board better—device state, on-board models, or on-board skills. The OpenClaw page exposes what is available based on device state.

## Handing work to OpenClaw

After Moss routes a task on-board, you land on On-device Agent. Typical flow:

1. Describe needs in AI Dock, e.g. “Check critical services on the board.”
2. Moss validates requirements.
3. If ready, Moss explains the plan and asks for confirmation.
4. After you confirm, OpenClaw (or the relevant page) continues.
5. Results return to Studio for follow-up or debugging.

## When the network jitters

If plain SSH commands time out or flap, Studio shows the failure reason. Retry, stabilize the network, or ask Moss whether the On-device Agent path makes sense.

High-risk actions still require your confirmation.

## Task output

After OpenClaw runs, key outcomes appear in Studio—inspection summaries, logs, failure reasons, or the next confirmation step.

If the device is offline, Studio guides you to restore connection from the page state.

## When not to delegate to OpenClaw

| Scenario | Reason |
|---|---|
| You explicitly say “do this on the PC” | Follow your instruction |
| Work is only local files | OpenClaw targets the board |
| Deep analysis needed | Outline with Moss first |
| Quick win | Finish in Terminal or Workbench |
