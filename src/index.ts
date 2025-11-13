/**
 * Highcharts tool class.
 */

// Core Highcharts
import Chart from 'highcharts/es-modules/Core/Chart/Chart.js';

console.log('zzzz', Chart);

// Classes - Highcharts tool.
export default class HighchartsTool {
    constructor() {}

    // Operations - Render.
    render = (renderTo: HTMLElement): void => {
        // try {
        //     console.log('0000', Chart);
        //     const chart = new Chart(renderTo, {
        //         chart: { type: 'column', reflow: false },
        //         title: { text: 'Fruit Consumption' },
        //         xAxis: { categories: ['Apples', 'Bananas', 'Oranges'] },
        //         yAxis: { title: { text: 'Fruit eaten' } },
        //         series: [
        //             { name: 'Jane', data: [1, 0, 4] },
        //             { name: 'John', data: [15, 17, 13] }
        //         ]
        //     });
        //     console.log(1111, chart);
        //     return { chart, resize: (): void => chart.reflow() };
        // } catch (error) {
        //     console.log(2222, error);
        // }
    };
}
