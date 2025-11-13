/**
 * Highcharts tool class.
 */

// Core Highcharts
import Chart from 'highcharts/es-modules/Core/Chart/Chart.js';
console.log('Chart', Chart);

import ColumnSeries from 'highcharts/es-modules/Series/Column/ColumnSeries.js';
console.log('ColumnSeries', ColumnSeries);
import ColumnDataLabel from 'highcharts/es-modules/Series/Column/ColumnDataLabel.js';
ColumnDataLabel.compose(ColumnSeries);

import LineSeries from 'highcharts/es-modules/Series/Line/LineSeries.js';
console.log('LineSeries', LineSeries);

// Classes - Highcharts tool.
export default class HighchartsTool {
    constructor() {}

    // Operations - Render.
    render = (renderTo: HTMLElement): void => {
        try {
            console.log('0000', Chart);
            const chart = new Chart(renderTo, {
                chart: { type: 'column', reflow: false },
                // title: { text: 'Fruit Consumption' },
                // xAxis: { categories: ['Apples', 'Bananas', 'Oranges'] },
                // yAxis: { title: { text: 'Fruit eaten' } },
                series: [
                    { type: 'column', name: 'Jane', data: [1, 0, 4] },
                    { type: 'column', name: 'John', data: [15, 17, 13] }
                ]
            });
            console.log(1111, chart);
        } catch (error) {
            console.log(2222, error);
        }
    };
}
