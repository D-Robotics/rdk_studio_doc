---
sidebar_label: '3.11.5 Tune trigger keywords'
title: 3.11.5 Tune trigger keywords
unlisted: true
---

# 3.11.5 Tune trigger keywords

Each skill lists `trigger` keywords. Mentioning those words in AI Dock biases Moss to preload the skill—grounding replies in your playbook.

## How matching works

Think of triggers as wake words:

1. Studio inventories installed skills.
2. Moss inspects recent user text against each trigger table.
3. Matches fold the corresponding instructions into the session.
4. Answers blend skill steps with live telemetry and tooling output.

Say you authored “USB camera blackout troubleshooting” with triggers like `USB camera`, `camera`, `hobot_usb_cam`; messages that include those substrings load it faster than paraphrases with no literal overlap.

## Precision trade-offs

Triggers are naive substring checks—no semantic reranking yet:

| Trigger | Message | Hits? |
|---|---|---|
| `USB camera` | "USB camera black screen help" | Yes (literal match) |
| `USB camera` | "Board camera preview empty" | No (same idea, different words—unless you broaden triggers) |
| `USB camera,camera,hobot_usb_cam` | "Board camera preview empty" | Yes (trigger list includes `camera`) |

Improve coverage while authoring:

- Add synonyms, bilingual spellings if your team mixes languages, and shorthand
- Copy distinctive error salts such as `code -6`, `SIGABRT`
- Include colloquial phrasing teammates actually paste

## `/skills` quick check

In AI Dock enter:

```
/skills
```

Sample output:

```
Skills loaded this session:
- rdk-device-ops (device operations core)
- rdk-x5-camera-debug (X5 camera troubleshooting)
- rdk-developer-docs (official docs search)
```

If a skill installs but refuses to attach, wording likely missed triggers—iterate keywords in Skill Workshop, restart Studio per guidance, reload skills.
