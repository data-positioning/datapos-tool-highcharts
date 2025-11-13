/**
 * Highcharts tool class.
 */

// Dependencies - Highcharts.
import Highcharts from 'highcharts';
import type { Chart, Options, SeriesOptionsType } from 'highcharts';

// Dependencies - Highcharts core modules.
import 'highcharts/modules/accessibility';

// Dependencies - Framework.
import type {
    PresentationView,
    PresentationVisualCartesianViewType,
    PresentationVisualContentConfig,
    PresentationVisualPolarViewType,
    PresentationVisualRangeViewType
} from '@datapos/datapos-shared';

// Types/Interfaces - Highcharts view.
interface HighchartsView extends PresentationView {
    chart: Chart;
}
// Constants
const HIGHCHARTS_ID = 'highcharts';

// Module Variables
let highchartsMoreModuleLoaded = false;

// Classes - Highcharts tool.
class HighchartsTool {
    constructor() {}

    // Operations - Render cartesian chart.
    async renderCartesianChart(
        type: PresentationVisualCartesianViewType,
        contentConfig: PresentationVisualContentConfig,
        element: HTMLElement,
        callback?: () => void
    ): Promise<HighchartsView> {
        const series: SeriesOptionsType[] = [];
        for (const measure of contentConfig.data.measures) {
            // series.push({ type: type.options.highchartsType, name: measure.name, data: getMeasureValues([measure.id]) });
            series.push({ type: type.options.highchartsType, name: measure.name, data: measure.data });
        }
        const options: Options = {
            chart: { type: type.options.highchartsType },
            plotOptions: { series: { borderColor: '#333' } },
            series,
            title: { text: contentConfig.title.text },
            xAxis: { categories: contentConfig.data.categoryLabels },
            yAxis: { title: { text: contentConfig.data.name } }
        };
        const chart = Highcharts.chart(element, options, callback);
        return { chart, resize: () => chart.reflow(), vendorId: HIGHCHARTS_ID };
    }

    // Operations - Render polar chart.
    async renderPolarChart(type: PresentationVisualPolarViewType, content: PresentationVisualContentConfig, element: HTMLElement, callback?: () => void): Promise<HighchartsView> {
        await Promise.all([this.loadHighchartsMoreModule()]);
        const series: SeriesOptionsType[] = [];
        for (const measure of content.data.measures) {
            // series.push({ type: type.options.highchartsType, name: measure.name, data: getMeasureValues([measure.id]) });
            series.push({ type: type.options.highchartsType, name: measure.name, data: measure.data });
        }
        const options: Options = {
            chart: { polar: true },
            plotOptions: { series: { borderColor: '#333' } },
            series,
            title: { text: content.title.text },
            xAxis: { categories: content.data.categoryLabels },
            yAxis: { title: { text: content.data.name } }
        };
        const chart = Highcharts!.chart(element, options, callback);
        return { chart, resize: () => chart.reflow(), vendorId: HIGHCHARTS_ID };
    }

    // Operations - Render range chart.
    async renderRangeChart(type: PresentationVisualRangeViewType, content: PresentationVisualContentConfig, element: HTMLElement, callback?: () => void): Promise<HighchartsView> {
        await Promise.all([this.loadHighchartsMoreModule()]);
        const series: SeriesOptionsType[] = [];
        // series.push({ type: type.options.highchartsType, name: 'Unknown', data: getMeasureValues([content.data.measures[0].id, content.data.measures[1].id]) });
        const data = [];
        for (let index = 0; index < content.data.measures[0].data!.length; index++) {
            data.push([content.data.measures[0].data![index][0], content.data.measures[1].data![index][0]]);
        }
        series.push({ type: type.options.highchartsType, name: 'Unknown', data });
        const options: Options = {
            chart: { type: type.options.highchartsType, inverted: type.options.inverted },
            plotOptions: { series: { borderColor: '#333' } },
            series,
            title: { text: content.title.text },
            xAxis: { categories: content.data.categoryLabels },
            yAxis: { title: { text: content.data.name } }
        };
        const chart = Highcharts!.chart(element, options, callback);
        return { chart, resize: () => chart.reflow(), vendorId: HIGHCHARTS_ID };
    }

    // Utilities - Load Highcharts more module.
    private async loadHighchartsMoreModule(): Promise<void> {
        if (highchartsMoreModuleLoaded) return;

        await import('highcharts/highcharts-more');
        highchartsMoreModuleLoaded = true;
    }
}

export { HighchartsTool, HighchartsView };
