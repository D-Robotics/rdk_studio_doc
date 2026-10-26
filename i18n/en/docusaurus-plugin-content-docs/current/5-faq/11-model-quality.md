---
sidebar_label: '5.11 Model answer quality'
title: 5.11 Model answer quality
---

# 5.11 Model answer quality

If answers drift, repeat failed steps, or misuse tools, check the task, context, and model capability first.

1. **Work location:** verify the project, local/board folder, and target device.
2. **Deliverable:** state the intended result, verification method, and full error.
3. **Workflow:** use Plan for analysis, Spec to align complex requirements, and Execute when the goal is clear.
4. **Model capability:** inspect the selected model in Models & providers; local main models require tool calling.
5. **Long conversations:** create tasks for unrelated goals, keep important information in files, and compact where supported.
6. **Skills:** use Plugin Center and composer skill search rather than older `/skills` instructions.

Moss and DSH differ in model/tool support. Changing models is separate from changing runtime. The old Fast/Thinking switch is not a troubleshooting path for this version.

If raw `<think>` tags or unexpected internal text appear, retain a redacted example, check the client version, and report it. Ordinary copy/share focuses on the answer; inspect existing execution details through the message menu.
