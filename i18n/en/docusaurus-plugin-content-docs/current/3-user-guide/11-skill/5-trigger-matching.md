---
sidebar_label: '3.11.5 Trigger Matching Mechanism'
title: 3.11.5 Trigger Matching Mechanism
---

# 3.11.5 Trigger Matching Mechanism

D-Moss Agent uses a trigger keyword matching mechanism to determine which skills are loaded into the current conversation context. This section describes how this mechanism works and how it differs from RAG (Retrieval-Augmented Generation).

## Processing Workflow in D-Moss

When Studio starts up, the SkillManager inside D-Moss Agent performs the following initialization steps:

1. Scans all files matching `skills/**/SKILL.md` (recursive glob)
2. Parses the frontmatter of each SKILL.md file
3. Builds an in-memory index using fields such as trigger, category, and risk
4. Exposes the `/api/skills` endpoint for frontend skill listing
5. Provides an `inject()` method for on-demand skill loading during conversations

Each time a user sends a message in AI Dock:

1. SkillManager scans the trigger keywords of all installed skills
2. Matches relevant skills (e.g., if the user says "USB camera black screen," it matches `rdk-x5-camera-debug`)
3. Injects the body content of the matched SKILL.md file into the model's context
4. The model follows the instructions in SKILL.md to make decisions and execute actions (possibly invoking tools like `device_exec`, `device_file_read`, etc.)
5. The response to the user already includes a "targeted solution + specific commands"

## Differences from RAG

The skill mechanism fundamentally differs from RAG (Retrieval-Augmented Generation):

| Dimension | RAG | Skill (Trigger Matching) |
|---|---|---|
| Trigger Method | Vector similarity matching | String keyword matching |
| Loading Timing | Attempts retrieval on every conversation turn | Loads only when a trigger is matched |
| Context Consumption | May inject numerous fragments | Injects only the full SKILL.md of matched skills |
| Interpretability | Opaque (vector similarity is hard to explain) | Transparent (clearly shows which trigger led to which skill being loaded) |
| Suitable Use Case | Semantic search across massive document collections | Structured operational playbook libraries |

The skill mechanism is better suited for scenarios where you want to "teach the AI a specific workflow or pattern." RAG is more appropriate for "finding answers within large volumes of documents." Both approaches can coexist—RDK Studio supports both mechanisms simultaneously (RAG for built-in documentation retrieval, and skills for operational strategies).

## Matching Precision

Trigger matching performs exact string matching without semantic understanding. This means:

| Trigger Word(s) | User Message | Matched? |
|---|---|---|
| `USB camera` | "What should I do if the USB camera screen is black?" | Matched (exact string match) |
| `USB camera` | "The camera on my board is not displaying any image" | Not matched (semantically equivalent but textually different) |
| `USB camera, camera, cam` | "The camera on my board is not displaying any image" | Matched (trigger includes "camera") |

To improve matching accuracy, we recommend the following when designing triggers:

- List common synonyms and variants (in Chinese, English, and abbreviations)
- Include distinctive strings from error messages (e.g., `code -6`, `SIGABRT`)
- Incorporate colloquial expressions developers commonly use when describing issues

## Verifying Skills Loaded in Current Session

Type `/skills` in AI Dock:

```
/skills
```

Example output:

```
Skills loaded in current session:
- rdk-device-ops (Core Device Operations)
- rdk-x5-camera-debug (X5 Camera Debugging)
- rdk-developer-docs (RDK Official Documentation Retrieval)
```

If you've installed a skill but it doesn't appear in the `/skills` output, it means its trigger didn't match the current conversation. Simply update the `trigger` field in the SKILL.md file and restart Studio to rebuild the index.