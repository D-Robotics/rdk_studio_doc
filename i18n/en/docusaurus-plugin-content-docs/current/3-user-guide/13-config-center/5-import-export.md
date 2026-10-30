---
sidebar_label: '3.13.5 Import and export configuration'
title: 3.13.5 Import and export configuration
description: 'Back up and restore model configurations, including scope and steps'
---

# 3.13.5 Import and export configuration

The **Export / Import** buttons at the bottom of **Settings → Models & providers** back up and restore model configurations. This is not a full app backup: it does not include device lists, SSH credentials, messaging channels, conversation history, or project code.

## Export

1. Save at least one model configuration.
2. Select **Export** beneath the model configuration.
3. Save `rdkstudio-moss-config-<timestamp>.json`.

Desktop/local exports may contain API keys or other secrets; public Web Cloud exports are restricted. The current interface has no general “all settings / devices only” export and should not be assumed to offer a redaction checkbox. Inspect and remove sensitive values before sharing.

## Import

Select **Import** in the same location and choose a JSON file containing model entries. After success, check the model list, current selection, key status, and API connectivity before using the workbench.

If the file is invalid, lacks model entries, or fails to import, follow the error and repair or recreate the configuration. Do not assume per-entry conflict merging or complete application restore is provided.

## Other data

Back up project files, history, and local data separately. Changing the data directory does not automatically move existing files. Use the dedicated recovery retry for history problems.
