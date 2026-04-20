---
sidebar_label: '3.12.5 Configuration Import and Export'
title: 3.12.5 Configuration Import and Export
---

# 3.12.5 Configuration Import and Export

Configuration import and export are used in scenarios such as cross-machine synchronization, team sharing, and restoring settings after a Studio upgrade. All exportable configurations are bundled into a single JSON file.

## Exportable Configuration Items

| Content | Contains Sensitive Fields |
|---|---|
| All AI engine model entries | Contains plaintext API keys (during export, you can select "Sanitize" to replace keys with placeholders) |
| Feishu / WeChat channel credentials | Contains sensitive information such as App Secret |
| Device list and SSH credentials | If password authentication is used, contains plaintext passwords |
| Appearance and experience settings | No sensitive information |
| WeChat binding list | No (each machine maintains its own independent bindings) |

## Export Procedure

| Path | *Configuration Center → Top Bar → Export Configuration* |
|---|---|
| Options | Select the scope of content to export (All / AI Engine Only / Devices Only, etc.) |
| Sanitization Option | When enabled, API keys, passwords, and similar fields in the exported file are replaced with the placeholder `__REDACTED__` |
| Output | Downloaded as `rdk-studio-config-<timestamp>.json` |

## Best Practices for Team Collaboration

| Scenario | Recommended Approach |
|---|---|
| Securely share with trusted colleagues | Export with sensitive fields included, and transfer via encrypted channels (e.g., company encrypted email or encrypted IM) |
| Distribute to the team (without sensitive credentials) | Enable "Sanitize" during export to generate a placeholder template; recipients fill in their own API keys |
| Back up to a private team Git repository | Always sanitize before committing, and ensure repository access is restricted |

**Strictly Avoid:**

- Transmitting JSON files containing sensitive fields via public chat groups or unencrypted email attachments  
- Committing JSON files with sensitive fields to public Git repositories  
- Sharing such files in multi-user visible environments like Slack or enterprise WeChat groups  

## Import Procedure

| Path | *Configuration Center → Top Bar → Import Configuration* |
|---|---|
| Procedure | Select JSON file → Confirm → Automatically merge into local configuration |
| Conflict Handling | Duplicate-named entries will prompt for overwrite confirmation; choose either "Overwrite All" or "Confirm Individually" |
| Cross-Version Compatibility | Most fields are automatically migrated; manual adjustments may be needed for certain fields when upgrading across major versions (e.g., 1.0 → 1.1) |

## Export File Format

Example of exported JSON structure (sanitized):

```json
{
  "version": "1.1",
  "exportedAt": "2026-04-19T14:00:00Z",
  "aiEngine": {
    "thinkingModel": "claude-sonnet",
    "quickModel": "qwen-turbo",
    "models": [
      {
        "label": "Claude Sonnet 4",
        "provider": "anthropic",
        "model": "claude-sonnet-4-20250514",
        "apiKey": "__REDACTED__",
        "baseUrl": ""
      }
    ]
  },
  "devices": [
    {
      "name": "RDK-X5-Workstation1",
      "ip": "192.168.128.10",
      "user": "root",
      "auth": "password",
      "password": "__REDACTED__"
    }
  ]
}
```

Developers can manually edit this JSON (e.g., change IPs or add comments) and then re-import it into Studio.

## Cross-Version Compatibility

| Upgrade Path | Compatibility |
|---|---|
| Same minor version (1.1.0 → 1.1.5) | Fully compatible; no configuration adjustments needed |
| Across minor versions (1.1 → 1.2) | Mostly compatible; a few fields may require manual default value assignment |
| Across major versions (1.x → 2.x) | Most fields are automatically migrated; incompatible legacy fields may need manual cleanup |

If import fails with a "format incompatible" error, we recommend recreating the configuration in the new Studio version instead of forcing an import of the old JSON.