import { E as e, U as t, f as n } from "./AnimationUtilities-Bby2idBR.js";
import { t as r } from "./SeriesRegistry-0cj0ZJqn.js";
//#region node_modules/highcharts/es-modules/Series/Streamgraph/StreamgraphSeriesDefaults.js
var i = {
	fillOpacity: 1,
	lineWidth: 0,
	marker: { enabled: !1 },
	stacking: "stream"
}, { areaspline: a } = r.seriesTypes, o = class extends a {
	streamStacker(e, t, n) {
		e[0] -= t.total / 2, e[1] -= t.total / 2, this.stackedYData && (this.stackedYData[n] = Math.max.apply(0, e));
	}
};
o.defaultOptions = t(a.defaultOptions, i), n(o, "afterGetExtremes", (e) => {
	e.dataExtremes.dataMin = -e.dataExtremes.dataMax;
}), e(o.prototype, { negStacks: !1 }), r.registerSeriesType("streamgraph", o);
//#endregion

//# sourceMappingURL=streamgraph.src-Bn6PY8Fd.js.map