---
sidebar_label: '4.3 NodeHub cases'
title: 4.3 NodeHub cases
---

# 4.3 NodeHub cases

NodeHub is the D‑Robotics official case hub for full projects, sample code, and run instructions.

The skill marketplace / SkillHub focuses on a single `SKILL.md`; NodeHub focuses on downloadable, runnable project cases.

## How the platforms differ

| Platform | Content | Role in RDK Studio |
|---|---|---|
| NodeHub | Full projects, README, deps, screenshots, video, optional skills | Give Moss a case URL to draft a skill |
| Skill marketplace / SkillHub | Individual `SKILL.md` entries | Add to this PC or deploy to the device from Skill Workshop |
| RDK developer community forum | Q&A, write-ups, postmortems | Open from the left Resources sidebar |
| RoboGo | Cloud robot dev platform: data loop, playgrounds, Agent services, app deploy, etc. | Open from the left Resources sidebar |

## From NodeHub to a skill

1. Open the NodeHub case detail page.
2. Copy the case URL.
3. In RDK Studio open *Skill Workshop → Generate skill from link*.
4. Paste the URL and let Moss draft a `SKILL.md`.
5. Review commands, risks, and supported boards.
6. Add to local Moss or deploy to the current RDK OpenClaw.

Do not publish an unvalidated case as a high-privilege skill. Run the README’s critical steps manually at least once.
