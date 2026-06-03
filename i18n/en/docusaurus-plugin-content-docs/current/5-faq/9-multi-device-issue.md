---
sidebar_label: '5.9 Wrong device target'
title: 5.9 Wrong device target
---

# 5.9 Wrong device target

## Typical symptoms

- After switching boards, Moss still talks about the previous one.
- Unclear which host will run a command.
- Mixing RDK with generic Linux—RDK-only tools vanish.

## Check three UI spots

1. Device chip in the workbench composer.  
2. Workspace header (alias, Host/IP, project path).  
3. Device list online / pending / offline badges.

## Recommended habits

| Situation | Approach |
|---|---|
| New unrelated task | Start a fresh chat |
| Must pin a board | Mention alias or Host/IP explicitly |
| Device just added | Wait until SSH verify completes |
| Non-RDK Linux | Don’t insist on OpenClaw or BPU tools |

Example:

```text
Run on RDK-X5-bench1 only—verify Host/IP and SKU before proceeding.
```

Serial alone does **not** register a managed device—paste logs manually or regain SSH before expecting Moss device tools.
