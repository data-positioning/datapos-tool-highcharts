/**
 * Highcharts tool class.
 */

// Core Highcharts
import Chart from 'highcharts/es-modules/Core/Chart/Chart.js';

// Series types
import 'highcharts/es-modules/Series/Area/AreaSeries.js';
import 'highcharts/es-modules/Series/Column/ColumnSeries.js';
import 'highcharts/es-modules/Series/Line/LineSeries.js';

// Required compositions for axis and legend functionality
import Axis from 'highcharts/es-modules/Core/Axis/Axis.js';
import Legend from 'highcharts/es-modules/Core/Legend/Legend.js';

// Compose the required functionality
Legend.compose(Chart);
Axis.compose(Chart);

// Classes - Highcharts tool.
export default class HighchartsTool {
    constructor() {}

    // Operations - Render.
    render = (renderTo: HTMLElement): unknown => {
        try {
            console.log('0000', Chart);
            const chart = new Chart(renderTo, {
                chart: { type: 'column', reflow: false },
                title: { text: 'Fruit Consumption' },
                xAxis: { categories: ['Apples', 'Bananas', 'Oranges'] },
                yAxis: { title: { text: 'Fruit eaten' } },
                series: [
                    { name: 'Jane', data: [1, 0, 4] },
                    { name: 'John', data: [15, 17, 13] }
                ]
            });
            console.log(1111, chart);
            return { chart, resize: (): void => chart.reflow() };
        } catch (error) {
            console.log(2222, error);
        }
    };
}
