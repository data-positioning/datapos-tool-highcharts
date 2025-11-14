# Data Positioning Highcharts Tool

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A TypeScript wrapper for Highcharts that implements the Data Positioning chart-rendering interface. It optimizes browser memory usage by maintaining a single Highcharts instance shared across all presenters, loading optional modules only as needed.

## Installation

There’s no need to install this tool manually. Once released, it’s uploaded to the Data Positioning Engine cloud and becomes instantly available to all new instances of the browser app. A notification about the new version is also sent to all existing browser apps.

## Usage

```typescript
import type { Presenter, PresenterConfig } from '@datapos/datapos-shared';
import config from '~/config.json';

class MyPresenter implements Presenter {

    highchartsTool?: HighchartsTool;

    constructor(toolModuleConfigs: ToolModuleConfig[]) {
        this.config = config as PresenterConfig;
        this.toolModuleConfigs = toolModuleConfigs;
    }

    private async function loadHighchartsTool(version: string): Promise<HighchartsTool> {
        if (this.highchartsTool) return this.highchartsTool;

        const URL = `https://engine-eu.datapos.app/tools/v${version}/datapos-tool-highcharts.es.js`;
        const HighchartsTool = (await import(/* @vite-ignore */ URL)).HighchartsTool as new () => HighchartsTool;
        return new HighchartsTool();
    }

    this.highchartsTool = await loadHighchartsTool('n.n.nnn');

    await this.highchartsTool.renderCartesianChart(...);
    await this.highchartsTool.renderPolarChart(...);
    await this.highchartsTool.renderRangeChart(...);

    ...
}
```

## Repository Management Commands

The following list details the repository management commands implementation by this project. For more details, please refer to the scripts section of the 'package.json' file in this project.

| Name           | VS Code Shortcuts | Notes                                                                                                           |
| -------------- | ----------------- | --------------------------------------------------------------------------------------------------------------- |
| audit          | alt+ctrl+shift+a  | Audit the project's dependencies for known security vulnerabilities.                                            |
| build          | alt+ctrl+shift+b  | Type-check, compile and minify for production. Output in '/dist' directory.                                     |
| check          | alt+ctrl+shift+c  | List the dependencies in the project that are outdated.                                                         |
| document       | alt+ctrl+shift+d  | Identify the licenses of the project's dependencies.                                                            |
| format         | alt+ctrl+shift+f  | Enforce formatting style rules.                                                                                 |
| lint           | alt+ctrl+shift+l  | Check the code for potential errors and enforces coding styles.                                                 |
| release        | alt+ctrl+shift+r  | Synchronise local repository with the main GitHub repository and upload connector to Data Positioning platform. |
| syncWithGitHub | alt+ctrl+shift+s  | Synchronise local repository with the main GitHub repository.                                                   |
| update         | alt+ctrl+shift+l  | Install the latest version of Data Positioning dependencies.                                                    |

## Compliance

The following badge reflects FOSSA's assessment of this repository's open-source license compliance.

## License

[MIT](./LICENSE) © 2026 Data Positioning Pty Ltd
