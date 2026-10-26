---
sidebar_label: '3.17 Block studio'
title: 3.17 Block studio
---

# 3.17 Block studio

Open **Device & development → Block studio** for visual programming. Choose a robot or sample, connect blocks on the canvas, test in simulation, then run on a device when needed.

## First use

1. Select a robot or sample and read its description.
2. Connect blocks on the canvas and fill in parameters.
3. Select **Simulate** and observe the stage and run log.
4. Stop before editing, then run the revised program.
5. Use **Save project**, or export a project/case from the file menu.

Simulation does not require a board. Its result describes simulated execution and does not prove that real hardware or device commands ran.

## Run on a device

1. Connect and verify the intended device, and confirm its robot package matches.
2. Stop any existing simulation/run and check the program and target.
3. Select **Run on device** and follow the confirmation prompts.
4. Inspect actual logs, failures, and results, then stop the run when finished.

Conflicting actions are disabled while running; simulation and device execution cannot run simultaneously. Resolve offline states, target changes, and validation failures first. Simulation success is not device verification.

## Save and exchange

| File | Content |
|---|---|
| `.rdkdevice.json` | Robot configuration/block definition |
| `.rdkproject.json` | Block project |
| `.rdkcase.json` | Case package containing both configuration and project |

Use the file menu to import/export projects and cases, and the robot-package menu to import, export, or delete configurations. Extract ZIP files as instructed before importing a supported file.

Built-in samples are read-only; save a copy for changes. Save important work before switching projects, importing, or leaving. Exported files support backup across environments; browser-local drafts are not an independent backup.

## Troubleshooting

- No blocks or compilation fails: select a valid robot configuration and resolve parameter validation errors.
- Run on device unavailable: check connection, current run state, and device-execution support in the configuration.
- Unexpected results after a page/device change: stop, check the target and logs, then start again.
