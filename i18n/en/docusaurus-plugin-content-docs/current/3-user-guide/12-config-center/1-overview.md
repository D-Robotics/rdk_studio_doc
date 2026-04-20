---
sidebar_label: '3.12.1 Overview'
title: 3.12.1 Overview
---

# 3.12.1 Overview

## 6 Main Sections

The Configuration Center is functionally divided into six sections:

| Section | Main Content |
|---|---|
| Account & Security | Logged-in account info, log out, local session cleanup |
| AI Engine | Model entries, dual-lane assignment, built-in presets, connectivity tests, import/export |
| Multi-Channel Integration | Feishu / WeChat credentials, user management, pairing approvals, channel enable/disable |
| Device Connection | Auto-reconnect, connection timeout, device list and removal, Mesh LAN Agent toggle |
| Appearance & Experience | Theme, font size, re-open onboarding wizard |
| Application & Updates | Version check, CLI install/uninstall, diagnostic bundle export |

## Configuration Activation Timing

| Configuration Item | Activation Timing |
|---|---|
| Model Entries (API Key, Base URL, etc.) | Takes effect immediately |
| Switching Currently Active Model | Takes effect immediately |
| Default Device Connection Settings (Auto-reconnect, Timeout) | Takes effect immediately |
| Multi-Channel Credentials | Takes effect immediately, but Bot service may require a restart |
| Appearance (Theme, Font) | Takes effect immediately |
| Advanced Settings (Port, SSO Mode) | Requires Studio restart |

Most configurations take effect immediately after modification; those requiring a restart will display a prompt upon saving.

## Configuration File Storage Locations

| Operating System | Path |
|---|---|
| Windows | `%USERPROFILE%\.rdk-studio\` |
| macOS / Linux | `~/.rdk-studio/` |

Key Files:

| File | Content |
|---|---|
| `agent-config.json` | AI Engine configuration (model entries, API keys, dual-lane assignments) |
| `data/devices.json` | Device list |
| `sso-sessions.json` | Login sessions |
| `cli-config.json` | Standalone CLI configuration (exists if maintained separately) |
| `sessions/<session-id>.jsonl` | AI Dock conversation history |

## Reset Studio

A hidden option at the bottom of the Configuration Center (typically found under *Application & Updates → Advanced* as *Reset Studio*) clears the following:

- Device list  
- Model configurations  
- Conversation history  
- Some local cache  

This reset operation is irreversible. Always *export your configuration* for backup before resetting. After reset, you’ll need to log in again.

Applicable scenarios:

- Studio behaves abnormally after an upgrade, suspected configuration corruption  
- Temporarily lending your laptop to a colleague and wanting to clear traces  
- Performing a thorough cleanup of local data when uninstalling Studio