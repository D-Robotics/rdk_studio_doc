---
sidebar_label: '3.2.5 Slash Commands'
title: 3.2.5 Slash Commands
---

# 3.2.5 Slash Commands

Slash commands are special instructions entered in the AI Dock input box that start with `/`. They trigger internal behaviors of Studio rather than being sent to the large language model. These commands do not consume tokens and execute immediately.

## Command List

| Command | Function |
|---|---|
| `/help` | Displays a list and descriptions of all available slash commands |
| `/clear` | Clears the context of the current session, starting a fresh conversation (while preserving the session history) |
| `/sessions` | Lists all historical sessions; allows switching to any session to continue |
| `/skills` | Lists the skill IDs and brief descriptions currently loaded in the session |
| `/model` | Temporarily switches the model used for the current conversation (effective only for this session) |
| `/reset` | Performs a deep reset of the Agent state: clears context, resets tool-loading status, and re-probes the device |

## Typical Use Cases

### `/clear` vs. Creating a New Session

`/clear` empties the current session's context while retaining the session history—ideal for "changing the topic within the same conversation." Creating a new session starts a completely independent conversation, suitable for "beginning an entirely new task." Developers can choose based on their specific scenario.

### Verifying Skill Loading with `/skills`

If a developer suspects that a particular skill hasn't been automatically loaded by the Agent (e.g., a skill was installed but the Agent’s responses don’t seem to utilize it), they can enter `/skills` to view the list of skills actually activated in the current session.

Skill loading is demand-driven: only skills whose trigger keywords match the user's message will be loaded. If the user's description doesn't align with a skill's trigger keywords, the skill won't activate. In such cases, developers can adjust the skill's trigger keywords in [Section 3.11 Skills](../11-skill/index.md).

### Temporarily Switching Models with `/model`

When a specific conversation requires a more powerful model (e.g., for complex code generation), you can temporarily switch using `/model`:

```
/model claude-sonnet-4-20250514
```

The switch takes effect immediately and applies only to the current session without altering the global default configuration. The model reverts to the default upon ending or creating a new session.

### Handling Agent Anomalies with `/reset`

When the Agent appears "stuck"—for example, repeatedly invoking the same failing tool or providing responses clearly disconnected from the context—you can use `/reset` for a deep reset. This clears the conversation context, reloads tools, and re-probes the current device, offering a more thorough recovery than `/clear`.