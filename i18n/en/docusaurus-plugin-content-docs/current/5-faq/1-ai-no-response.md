---
sidebar_label: '5.1 AI Assistant Not Responding'
title: 5.1 AI Assistant Not Responding
---

# 5.1 AI Assistant Not Responding

## Typical Symptoms

After sending a message in an AI conversation, the send button turns gray with no output, or the console reports:

- `401 Unauthorized`
- `403 Forbidden`
- `Connection refused`

## Quick Diagnosis

Go to *Configuration Center → AI Engine*, locate the currently active model entry, and click *Test Connectivity*:

- **Test passes** → Not a configuration issue; proceed to "Correct Configuration but Still No Response"
- **Test fails** → Troubleshoot based on error code:
  - 401 / 403: Re-enter your API Key
  - 404: Check if the Base URL has an extra trailing `/v1`
  - Timeout: Domestic networks may require a proxy or mirror
  - DNS resolution failure: Your corporate network may be blocking the domain

## Troubleshooting Checklist

| Check Item | Method |
|---|---|
| Valid API Key | In Configuration Center → AI Engine, find the active entry and confirm the key is non-empty, doesn't contain Chinese quotation marks, and has no extra spaces; also verify in the model provider's console that the key hasn't been revoked |
| Sufficient balance | Most providers offer only a few million free tokens by default—exceeding this limit results in a `402` error |
| Service reachable | Run in terminal: `curl -i -H "Authorization: Bearer YOUR_KEY" "${BASE_URL}/v1/models"`; expect a `200 OK` response with a list of models |
| Model ID exact match | Model names must match exactly. Common mistakes: `claude-sonnet` (wrong) → `claude-sonnet-4-20250514` (correct); `gpt4o-mini` (wrong) → `gpt-4o-mini` (correct) |
| Correct Provider field | The Provider determines the protocol, not the URL. Use `anthropic` / `anthropic-compatible` for Anthropic Messages (`x-api-key` header); all others use OpenAI Completions (`Authorization: Bearer`) |

## Correct Configuration but Still No Response

| Symptom | Cause | Solution |
|---|---|---|
| Connection drops instantly within seconds | Extra `/v1` at the end of Base URL causes duplicate path concatenation | Remove the trailing `/v1` (unless you're using a fixed-path reverse proxy) |
| Stuck loading spinner for over 60 seconds | Model is in reasoning ("thinking") mode, but frontend isn't displaying it | Temporarily set *Reasoning visibility* to `inline` in Configuration Center to observe |
| `<think>...</think>` appears in message body | Reasoning content is being sent upstream under OpenAI-compatible protocol | Studio automatically parses this via InlineThinkingRouter; if still visible, upgrade to the latest version |
| Single message usage resets to zero | Agent's per-turn token limit is being hit | Upgrade to the latest RDK Studio version |

## About Protocol Detection

Protocol detection **depends solely on the Provider field**—it does *not* auto-switch based on whether the URL contains "anthropic". If you're using a reverse proxy to wrap Anthropic services under a path that doesn't include "anthropic", you must still set the Provider to `anthropic-compatible`. Otherwise, Studio will send requests using the OpenAI protocol and receive a `401`.

This logic is implemented in `server/agent/provider-setup.ts` by the `resolveProtocol()` function.

## Permanent Solutions

- After configuration in the Configuration Center, Studio automatically persists settings to your local config directory—no need to re-enter when switching devices
- Monitor the token usage capsule in the top-right corner of AI Dock for quota warnings
- In team environments, export configurations as JSON for one-click import by colleagues