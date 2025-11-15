# Data Positioning Highcharts Tool

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A TypeScript wrapper for Highcharts that implements the Data Positioning chart-rendering interface. It improves browser memory efficiency by sharing a single Highcharts instance shared across all presenters and loading optional modules on demand.

## Installation

There’s no need to install this tool manually. Once released, it’s uploaded to the Data Positioning Engine cloud and becomes instantly available to all new instances of the browser app. A notification about the new version is also sent to all existing browser apps.

## Usage

Basic usage example with no error handling.

```typescript
import type { HighchartsTool, HighchartsView } from '@datapos/datapos-tool-highcharts';

async function loadHighchartsTool(version: string): Promise<HighchartsTool> {
    if (highchartsTool) return highchartsTool;

    const URL = `https://engine-eu.datapos.app/tools/highcharts_v${version}/datapos-tool-highcharts.es.js`;
    const HighchartsTool = (await import(/* @vite-ignore */ URL)).HighchartsTool as new () => HighchartsTool;
    return new HighchartsTool();
}

const highchartsTool = await loadHighchartsTool('n.n.nnn');

const cartesianChart: HighchartsView = await highchartsTool.renderCartesianChart(/* arguments... */);
const polarChart: HighchartsView = await highchartsTool.renderPolarChart(/* arguments... */);
const rangeChart: HighchartsView = await highchartsTool.renderRangeChart(/* arguments... */);
```

## Repository Management Commands

The following list details the repository management commands implementation by this project. For more details, please refer to the scripts section of the 'package.json' file in this project.

| Name               | VS Code Shortcuts | Notes                                                                                                                                              |
| ------------------ | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| audit              | alt+ctrl+shift+a  | Audit the project's dependencies for known security vulnerabilities.                                                                               |
| build              | alt+ctrl+shift+b  | Build the package using Vite. Output to '/dist' directory.                                                                                         |
| check              | alt+ctrl+shift+c  | Identify outdated dependencies using npm `outdated` and `npm-check-updates` with option to install latest versions. Also runs `retire` scanner.    |
| document           | alt+ctrl+shift+d  | Identify licenses of the project's production and peer dependencies. See [LICENSES.json](./LICENSES.json).                                         |
| format             | alt+ctrl+shift+f  | Use `prettier`to enforce formatting style rules.                                                                                                   |
| lint               | alt+ctrl+shift+l  | Use `eslint`to check the code for potential errors and enforces coding style rules.                                                                |
| publish            | alt+ctrl+shift+p  | Publish the package to `npm`.                                                                                                                      |
| release            | alt+ctrl+shift+r  | Bump version, build configuration, build presenter, synchronise with `GitHub`, upload presenter to Data Positioning platform and publish to `npm`. |
| sync:withGitHub    | alt+ctrl+shift+s  | Synchronise local repository with the main GitHub repository.                                                                                      |
| test               | alt+ctrl+shift+t  | ❌ Not implemented.                                                                                                                                |
| update:dataPosDeps | alt+ctrl+shift+u  | Install the latest version of all Data Positioning dependencies.                                                                                   |

## Bundle Analysis

View the [bundle report](https://data-positioning.github.io/datapos-tool-highcharts/stats/index.html) to analyze the bundle composition and module sizes (generated with rollup-plugin-visualizer).

## Compliance

The following badge reflects FOSSA's assessment of this repository's open-source license compliance.

## License

[MIT](./LICENSE) © 2026 Data Positioning Pty Ltd
