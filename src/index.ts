/**
 * Highcharts tool class.
 */

import Highcharts from 'highcharts';

// Core Highcharts
// import Chart from 'highcharts/es-modules/Core/Chart/Chart.js';

// import ColumnSeries from 'highcharts/es-modules/Series/Column/ColumnSeries.js';

// import ColumnDataLabel from 'highcharts/es-modules/Series/Column/ColumnDataLabel.js';
// ColumnDataLabel.compose(ColumnSeries);

// import LineSeries from 'highcharts/es-modules/Series/Line/LineSeries.js';

// Classes - Highcharts tool.
export default class HighchartsTool {
    constructor() {}

    // Operations - Render.
    render = (renderTo: HTMLElement): unknown => {
        try {
            const chart = Highcharts.chart(renderTo, {
                chart: { type: 'column', reflow: false },
                title: { text: 'Fruit Consumption 2' },
                xAxis: { categories: ['Apples', 'Bananas', 'Oranges'] },
                yAxis: { title: { text: 'Fruit eaten' } },
                series: [
                    { type: 'column', name: 'Jane', data: [1, 0, 4] },
                    { type: 'column', name: 'John', data: [15, 17, 13] }
                ]
            });
            console.log('OK', chart);
            return { chart, resize: (): void => chart.reflow() };
        } catch (error) {
            console.log('ERROR', error);
        }
    };
}
