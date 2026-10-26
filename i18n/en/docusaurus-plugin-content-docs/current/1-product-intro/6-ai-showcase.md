---
sidebar_label: '1.6 AI Dock examples'
title: 1.6 AI Dock examples
---

# 1.6 AI Dock examples

These examples show workflows from a goal to verification. They are requests to try, not evidence that your device already succeeded. Tools, output, and timing depend on runtime, model, device, and environment.

## Example 1: device health

Connect the intended device, choose Execute, and send:

```text
Read-only: check temperature, CPU, memory, disk, network, and key services on this device. List problems, evidence, and missing information without changing anything.
```

Check the device model and actual measurements. Open existing execution records from the message menu for command/tool details.

## Example 2: camera detection application

Start with Plan or Spec:

```text
I want camera object detection on this RDK device. First check the board, OS, camera, and existing dependencies, then propose an approach, risks, and acceptance steps. Do not install or start services yet.
```

After agreement, execute with clear scope for dependency installation, file changes, and device actions. Verify processes, logs, and actual images. Generated commands, an opened preview URL, or simulation results do not replace a real device run.

## Example 3: reusable results

```text
Turn this successfully verified workflow into a documentation draft with environment, steps, verification, failures, and unverified items. Do not invent performance measurements or publish it directly.
```

Review code, commands, and data sources before saving. Use [Plugin Center](../3-user-guide/11-skill/index.md) for reusable skills or try [Block studio](../3-user-guide/17-block-studio/index.md) for visual programming.

## Inspect and share

Answers focus on results and necessary actions. Ordinary copy/share preserves code and command examples without including internal tool arguments by default. Open existing execution records when needed. Stopping does not undo completed device/file changes.
