import { A as e, B as t, E as n, G as r, I as i, O as a, U as o, V as s, X as c, Y as l, Z as u, _ as d, a as f, et as p, f as m, g as h, it as g, k as _, m as v, n as y, ot as b, p as x, u as S, x as C, y as w } from "./AnimationUtilities-Bby2idBR.js";
import { n as T, t as E } from "./SeriesRegistry-0cj0ZJqn.js";
import { a as D, i as O, n as k, o as A, r as ee } from "./BorderRadius-2zMZW_aK.js";
//#region node_modules/highcharts/es-modules/Series/AreaRange/AreaRangePoint.js
var { area: { prototype: { pointClass: te, pointClass: { prototype: j } } } } = E.seriesTypes, M = class extends te {
	setState() {
		let e = this.state, n = this.series, r = n.chart.polar;
		C(this.plotHigh) || (this.plotHigh = n.yAxis.toPixels(this.high, !0)), C(this.plotLow) || (this.plotLow = this.plotY = n.yAxis.toPixels(this.low, !0)), n.lowerStateMarkerGraphic = n.stateMarkerGraphic, n.stateMarkerGraphic = n.upperStateMarkerGraphic, this.graphic = this.graphics && this.graphics[1], this.plotY = this.plotHigh, r && t(this.plotHighX) && (this.plotX = this.plotHighX), j.setState.apply(this, arguments), this.state = e, this.plotY = this.plotLow, this.graphic = this.graphics && this.graphics[0], r && t(this.plotLowX) && (this.plotX = this.plotLowX), n.upperStateMarkerGraphic = n.stateMarkerGraphic, n.stateMarkerGraphic = n.lowerStateMarkerGraphic, n.lowerStateMarkerGraphic = void 0;
		let i = n.modifyMarkerSettings();
		j.setState.apply(this, arguments), n.restoreMarkerSettings(i);
	}
	haloPath() {
		let e = this.series.chart.polar, n = [];
		return this.plotY = this.plotLow, e && t(this.plotLowX) && (this.plotX = this.plotLowX), this.isInside && (n = j.haloPath.apply(this, arguments)), this.plotY = this.plotHigh, e && t(this.plotHighX) && (this.plotX = this.plotHighX), this.isTopInside && (n = n.concat(j.haloPath.apply(this, arguments))), n;
	}
	isValid() {
		return t(this.low) && t(this.high);
	}
}, { noop: N } = b, { area: P, area: { prototype: F }, column: { prototype: ne } } = E.seriesTypes, I = {
	lineWidth: 1,
	threshold: null,
	tooltip: { pointFormat: "<span style=\"color:{series.color}\">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>" },
	trackByArea: !0,
	dataLabels: {
		align: void 0,
		verticalAlign: void 0,
		xLow: 0,
		xHigh: 0,
		yLow: 0,
		yHigh: 0
	}
}, L = class extends P {
	toYData(e) {
		return [e.low, e.high];
	}
	highToXY(e) {
		let t = this.chart, n = this.xAxis.postTranslate(e.rectPlotX || 0, this.yAxis.len - (e.plotHigh || 0));
		e.plotHighX = n.x - t.plotLeft, e.plotHigh = n.y - t.plotTop, e.plotLowX = e.plotX;
	}
	getGraphPath(e) {
		let t = [], n = [], r = F.getGraphPath, i = this.options, a = this.chart.polar, o = a && i.connectEnds !== !1, s = i.connectNulls, c, u, d, f = i.step;
		for (e ||= this.points, c = e.length; c--;) {
			u = e[c];
			let r = a ? {
				plotX: u.rectPlotX,
				plotY: u.yBottom,
				doCurve: !1
			} : {
				plotX: u.plotX,
				plotY: u.plotY,
				doCurve: !1
			};
			!u.isNull && !o && !s && (!e[c + 1] || e[c + 1].isNull) && n.push(r), d = {
				polarPlotY: u.polarPlotY,
				rectPlotX: u.rectPlotX,
				yBottom: u.yBottom,
				plotX: l(u.plotHighX, u.plotX),
				plotY: u.plotHigh,
				isNull: u.isNull
			}, n.push(d), t.push(d), !u.isNull && !o && !s && (!e[c - 1] || e[c - 1].isNull) && n.push(r);
		}
		let p = r.call(this, e);
		f && (f === !0 && (f = "left"), i.step = {
			left: "right",
			center: "center",
			right: "left"
		}[f]);
		let m = r.call(this, t), h = r.call(this, n);
		i.step = f;
		let g = [].concat(p, m);
		return !this.chart.polar && h[0] && h[0][0] === "M" && (h[0] = [
			"L",
			h[0][1],
			h[0][2]
		]), this.graphPath = g, this.areaPath = p.concat(h), g.isArea = !0, g.xMap = p.xMap, this.areaPath.xMap = p.xMap, g;
	}
	drawDataLabels() {
		let e = this.points, t = e.length, r = [], a = this.options.dataLabels, o = this.chart.inverted, s, c, l, u, d;
		if (a) {
			if (i(a) ? (u = a[0] || { enabled: !1 }, d = a[1] || { enabled: !1 }) : (u = n({}, a), u.x = a.xHigh, u.y = a.yHigh, d = n({}, a), d.x = a.xLow, d.y = a.yLow), u.enabled || this.hasDataLabels?.()) {
				for (s = t; s--;) if (c = e[s], c) {
					let { plotHigh: e = 0, plotLow: t = 0 } = c;
					l = u.inside ? e < t : e > t, c.y = c.high, c._plotY = c.plotY, c.plotY = e, r[s] = c.dataLabel, c.dataLabel = c.dataLabelUpper, c.below = l, o ? u.align || (u.align = l ? "right" : "left") : u.verticalAlign || (u.verticalAlign = l ? "top" : "bottom");
				}
				for (this.options.dataLabels = u, F.drawDataLabels && F.drawDataLabels.apply(this, arguments), s = t; s--;) c = e[s], c && (c.dataLabelUpper = c.dataLabel, c.dataLabel = r[s], delete c.dataLabels, c.y = c.low, c.plotY = c._plotY);
			}
			if (d.enabled || this.hasDataLabels?.()) {
				for (s = t; s--;) if (c = e[s], c) {
					let { plotHigh: e = 0, plotLow: t = 0 } = c;
					l = d.inside ? e < t : e > t, c.below = !l, o ? d.align || (d.align = l ? "left" : "right") : d.verticalAlign || (d.verticalAlign = l ? "bottom" : "top");
				}
				this.options.dataLabels = d, F.drawDataLabels && F.drawDataLabels.apply(this, arguments);
			}
			if (u.enabled) for (s = t; s--;) c = e[s], c && (c.dataLabels = [c.dataLabelUpper, c.dataLabel].filter(function(e) {
				return !!e;
			}));
			this.options.dataLabels = a;
		}
	}
	alignDataLabel() {
		ne.alignDataLabel.apply(this, arguments);
	}
	modifyMarkerSettings() {
		let e = this, t = {
			marker: e.options.marker,
			symbol: e.symbol
		};
		if (e.options.lowMarker) {
			let { options: { marker: t, lowMarker: n } } = e;
			e.options.marker = o(t, n), n.symbol && (e.symbol = n.symbol);
		}
		return t;
	}
	restoreMarkerSettings(e) {
		let t = this;
		t.options.marker = e.marker, t.symbol = e.symbol;
	}
	drawPoints() {
		let e = this, t = e.points.length, r, i, a = e.modifyMarkerSettings();
		for (F.drawPoints.apply(e, arguments), e.restoreMarkerSettings(a), r = 0; r < t;) i = e.points[r], i.graphics = i.graphics || [], i.origProps = {
			plotY: i.plotY,
			plotX: i.plotX,
			isInside: i.isInside,
			negative: i.negative,
			zone: i.zone,
			y: i.y
		}, (i.graphic || i.graphics[0]) && (i.graphics[0] = i.graphic), i.graphic = i.graphics[1], i.plotY = i.plotHigh, C(i.plotHighX) && (i.plotX = i.plotHighX), i.y = l(i.high, i.origProps.y), i.negative = i.y < (e.options.threshold || 0), e.zones.length && (i.zone = i.getZone()), e.chart.polar || (i.isInside = i.isTopInside = i.plotY !== void 0 && i.plotY >= 0 && i.plotY <= e.yAxis.len && i.plotX >= 0 && i.plotX <= e.xAxis.len), r++;
		for (F.drawPoints.apply(e, arguments), r = 0; r < t;) i = e.points[r], i.graphics = i.graphics || [], (i.graphic || i.graphics[1]) && (i.graphics[1] = i.graphic), i.graphic = i.graphics[0], i.origProps && (n(i, i.origProps), delete i.origProps), r++;
	}
	hasMarkerChanged(e, t) {
		let n = e.lowMarker, r = t.lowMarker || {};
		return n && (n.enabled === !1 || r.symbol !== n.symbol || r.height !== n.height || r.width !== n.width) || super.hasMarkerChanged(e, t);
	}
};
L.defaultOptions = o(P.defaultOptions, I), m(L, "afterTranslate", function() {
	this.pointArrayMap.join(",") === "low,high" && this.points.forEach((e) => {
		let n = e.high, r = e.plotY;
		e.isNull ? e.plotY = void 0 : (e.plotLow = r, e.plotHigh = t(n) ? this.yAxis.translate(this.dataModify ? this.dataModify.modifyValue(n) : n, !1, !0, void 0, !0) : void 0, this.dataModify && (e.yBottom = e.plotHigh));
	});
}, { order: 0 }), m(L, "afterTranslate", function() {
	this.points.forEach((e) => {
		if (this.chart.polar) this.highToXY(e), e.plotLow = e.plotY, e.tooltipPos = [((e.plotHighX || 0) + (e.plotLowX || 0)) / 2, ((e.plotHigh || 0) + (e.plotLow || 0)) / 2];
		else {
			let t = e.pos(!1, void 0, e.plotLow), n = e.pos(!1, void 0, e.plotHigh);
			t && n && (t[0] = (t[0] + n[0]) / 2, t[1] = (t[1] + n[1]) / 2), e.tooltipPos = t;
		}
	});
}, { order: 3 }), n(L.prototype, {
	deferTranslatePolar: !0,
	pointArrayMap: ["low", "high"],
	pointClass: M,
	pointValKey: "low",
	setStackedPoints: N
}), E.registerSeriesType("arearange", L);
//#endregion
//#region node_modules/highcharts/es-modules/Series/AreaSplineRange/AreaSplineRangeSeries.js
var { spline: { prototype: R } } = E.seriesTypes, z = class extends L {};
z.defaultOptions = o(L.defaultOptions), n(z.prototype, { getPointSpline: R.getPointSpline }), E.registerSeriesType("areasplinerange", z);
//#endregion
//#region node_modules/highcharts/es-modules/Series/ColumnRange/ColumnRangePoint.js
var { seriesTypes: { column: { prototype: { pointClass: { prototype: B } } }, arearange: { prototype: { pointClass: V } } } } = E, re = class extends V {
	isValid() {
		return t(this.low);
	}
};
n(re.prototype, { setState: B.setState });
//#endregion
//#region node_modules/highcharts/es-modules/Series/ColumnRange/ColumnRangeSeries.js
var { noop: ie } = b, { seriesTypes: { arearange: H, column: ae, column: { prototype: U } } } = E, oe = {
	borderRadius: { where: "all" },
	pointRange: null,
	legendSymbol: "rectangle",
	marker: null,
	states: { hover: { halo: !1 } }
}, W = class extends H {
	setOptions() {
		return o(!0, arguments[0], { stacking: void 0 }), H.prototype.setOptions.apply(this, arguments);
	}
	translate() {
		return U.translate.apply(this);
	}
	pointAttribs() {
		return U.pointAttribs.apply(this, arguments);
	}
	translate3dPoints() {
		return U.translate3dPoints.apply(this, arguments);
	}
	translate3dShapes() {
		return U.translate3dShapes.apply(this, arguments);
	}
	afterColumnTranslate() {
		let e = this.yAxis, n = this.xAxis, r = n.startAngleRad, i = this.chart, a = this.xAxis.isRadial, s = Math.max(i.chartWidth, i.chartHeight) + 999, c, u, d, f;
		function p(e) {
			return h(e, -s, s);
		}
		this.points.forEach((s) => {
			let m = s.shapeArgs || {}, h = this.options.minPointLength, g = s.plotY, _ = e.translate(s.high, 0, 1, 0, 1);
			if (t(_) && t(g)) if (s.plotHigh = p(_), s.plotLow = p(g), f = s.plotHigh, c = l(s.rectPlotY, s.plotY) - s.plotHigh, Math.abs(c) < h ? (u = h - c, c += u, f -= u / 2) : c < 0 && (c *= -1, f -= c), a && this.polar) d = s.barX + r, s.shapeType = "arc", s.shapeArgs = this.polar.arc(f + c, f, d, d + (s.pointWidth || 0));
			else {
				m.height = c, m.y = f;
				let { x: t = 0, width: r = 0 } = m;
				s.shapeArgs = o(s.shapeArgs, this.crispCol(t, f, r, c)), s.tooltipPos = i.inverted ? [
					e.len + e.pos - i.plotLeft - f - c / 2,
					n.len + n.pos - i.plotTop - t - r / 2,
					c
				] : [
					n.left - i.plotLeft + t + r / 2,
					e.pos - i.plotTop + f + c / 2,
					c
				];
			}
		});
	}
};
W.defaultOptions = o(ae.defaultOptions, H.defaultOptions, oe), m(W, "afterColumnTranslate", function() {
	W.prototype.afterColumnTranslate.apply(this);
}, { order: 5 }), n(W.prototype, {
	directTouch: !0,
	pointClass: re,
	trackerGroups: ["group", "dataLabelsGroup"],
	adjustForMissingColumns: U.adjustForMissingColumns,
	animate: U.animate,
	crispCol: U.crispCol,
	drawGraph: ie,
	drawPoints: U.drawPoints,
	getSymbol: ie,
	drawTracker: U.drawTracker,
	getColumnMetrics: U.getColumnMetrics
}), E.registerSeriesType("columnrange", W);
//#endregion
//#region node_modules/highcharts/es-modules/Extensions/Pane/PaneComposition.js
function se(e) {
	let t = this, n;
	return e && t.pane.forEach((r) => {
		G(e.chartX - t.plotLeft, e.chartY - t.plotTop, r.center) && (n = r);
	}), n;
}
function ce(e, t) {
	let n = e.prototype;
	n.getHoverPane || (n.collectionsWithUpdate.push("pane"), n.getHoverPane = se, m(e, "afterIsInsidePlot", le), m(t, "afterGetHoverData", ue), m(t, "beforeGetHoverData", de));
}
function G(e, t, n, r, i) {
	let a = !0, o = n[0], s = n[1], c = 2 * Math.PI, l = Math.sqrt((e - o) ** 2 + (t - s) ** 2);
	if (C(r) && C(i)) {
		let n = Math.atan2(d(t - s, 8), d(e - o, 8));
		n = (n + c) % c, r = (r + c) % c, i = (i + c) % c, Math.abs(i - r) > 1e-6 && (a = r > i ? n >= r || n <= i : n >= r && n <= i);
	} else a = !0;
	return l <= Math.ceil(n[2] / 2) && a;
}
function le(e) {
	let t = this;
	t.polar && (e.options.inverted && ([e.x, e.y] = [e.y, e.x]), e.isInsidePlot = t.pane.some((t) => G(e.x, e.y, t.center, t.axis && t.axis.normalizedStartAngleRad, t.axis && t.axis.normalizedEndAngleRad)));
}
function ue(e) {
	let t = this.chart;
	e.hoverPoint && e.hoverPoint.plotX && e.hoverPoint.plotY && t.hoverPane && !G(e.hoverPoint.plotX, e.hoverPoint.plotY, t.hoverPane.center) && (e.hoverPoint = void 0);
}
function de(e) {
	let t = this.chart;
	t.polar ? (t.hoverPane = t.getHoverPane(e), e.filter = function(n) {
		return n.visible && !(!e.shared && n.directTouch) && l(n.options.enableMouseTracking, !0) && (!t.hoverPane || n.xAxis.pane === t.hoverPane);
	}) : t.hoverPane = void 0;
}
var fe = { compose: ce }, { defaultOptions: pe } = f, me = {
	shape: "arc",
	borderRadius: void 0,
	borderWidth: 0,
	borderColor: "var(--highcharts-neutral-color-20)",
	backgroundColor: "var(--highcharts-neutral-color-3)",
	from: -Number.MAX_VALUE,
	to: Number.MAX_VALUE,
	outerRadius: "100%"
}, he = {
	borderRadius: 3,
	margin: void 0
};
pe.pane = he;
var ge = {
	pane: he,
	background: me
}, K = class {
	constructor(e, t) {
		this.coll = "pane", this.init(e, t);
	}
	init(e, t) {
		this.chart = t, this.background = [], t.pane.push(this), this.setOptions(e);
	}
	hasSeriesType(e) {
		return !!(this.chart.options?.chart?.type === e || this.chart.options?.series?.some((t) => t.type === e));
	}
	setOptions(e) {
		this.options = o(ge.pane, this.chart.angular ? {
			background: {},
			innerSize: "85%"
		} : {}, e);
	}
	render() {
		let e = this.options, t = this.chart.renderer;
		this.group ||= t.g("pane-group").attr({ zIndex: e.zIndex || 0 }).add(), this.updateCenter();
		let n = this.options.background;
		if (n) {
			n = p(n);
			let e = Math.max(n.length, this.background.length || 0);
			for (let t = 0; t < e; t++) n[t] && this.axis ? this.renderBackground(o(ge.background, { borderRadius: this.options.borderRadius }, n[t]), t) : this.background[t] && (this.background[t] = this.background[t].destroy(), this.background.splice(t, 1));
		}
	}
	renderBackground(e, t) {
		let r = { class: "highcharts-pane " + (e.className || "") }, i = "animate";
		this.chart.styledMode || n(r, {
			fill: e.backgroundColor,
			stroke: e.borderColor,
			"stroke-width": e.borderWidth
		}), this.background[t] || (this.background[t] = this.chart.renderer.path().add(this.group), i = "attr"), this.background[t][i]({ d: this.axis.getPlotBandPath(e.from, e.to, e) }).attr(r);
	}
	updateCenter() {
		let { axis: n, chart: r, options: i } = this, { plotHeight: a, plotWidth: o } = r, s = i.center?.[1], c = i.margin, l = this.axis?.options.labels, d = i.thickness, f = Array.isArray(c) ? c : [
			c,
			c,
			c,
			c
		], m = [], h = i.size, g, _ = 0, v = 0, y = Math.min(r.series.reduce((t, n) => {
			if (!n.is("gauge") || n.yAxis?.pane !== this) return t;
			let r = p(n.options.dataLabels)[0], i = 0;
			return r && r.enabled !== !1 && (i = (1 - e(r.verticalAlign)) * 30 + (r.y || 0)), Math.max(t, i);
		}, 0), a * .3);
		if (l?.enabled) {
			let e = String(l.style?.fontSize || ""), t = (/px$/.test(e) ? parseFloat(e) : /em$/.test(e) ? parseFloat(e) * 12 : 12) * 1.2;
			v = Math.max(l.distance || 0, 0) + t / 2;
		}
		if (f.forEach((e, t) => {
			m[t] = e ?? Math.max(v || 0);
		}), n && (h === void 0 || s === void 0)) {
			let { endAngleRad: e, startAngleRad: t } = n, r = Math.PI * 2 / 360, s = t < Math.PI / 2 && e > Math.PI / 2 || p(i.background).some((e) => e?.shape === "circle") ? Math.PI : Math.max(Math.abs(t + Math.PI / 2), Math.abs(e + Math.PI / 2)), c = Math.sin(s - Math.PI / 2), l = .5 + .5 * Math.max(c, Math.sin(r * 0));
			if (g = (a - m[0] - m[2]) / l, h === void 0) {
				h = Math.max(Math.min(g, o - m[1] - m[3]), 1);
				let e = h + m[0] + m[2] + 2 * (y - a);
				e > 0 && (_ = e, h = Math.max(1, h - _));
			}
		}
		this.center = (n || {}).center = ee.getCenter.call(this), t(h) && h >= 0 && (this.center[2] = h, t(d) ? this.center[3] = this.center[2] - d * 2 : this.center[3] = Math.min(h, u(i.innerSize || 0, h))), C(s) || (i.size ? this.center[1] = a / 2 : t(g) && (this.center[1] = (g + this.center[2] - _) / 4 + m[0]));
	}
	update(e, t) {
		o(!0, this.options, e), this.setOptions(this.options), this.render(), this.chart.axes.forEach(function(e) {
			e.pane === this && (e.pane = null, e.update({}, t));
		}, this);
	}
};
K.compose = fe.compose;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Axis/RadialAxisDefaults.js
var _e = {
	circular: {
		gridLineWidth: 1,
		labels: {
			align: void 0,
			x: 0,
			y: void 0
		},
		maxPadding: 0,
		minPadding: 0,
		showLastLabel: !1,
		tickLength: 0
	},
	radial: {
		gridLineInterpolation: "circle",
		gridLineWidth: 1,
		labels: {
			align: "right",
			padding: 5,
			x: -3,
			y: -2
		},
		showLastLabel: !1,
		title: {
			x: 4,
			text: null,
			rotation: 90
		}
	},
	radialGauge: {
		gridLineWidth: 0,
		labels: {
			align: "center",
			distance: 15,
			x: 0,
			y: void 0
		},
		minorGridLineWidth: 0,
		minorTickLength: 5,
		minorTickPosition: "inside",
		minorTicksPerMajor: 10,
		minorTickWidth: 1,
		tickLength: void 0,
		tickWidth: 2,
		tickPixelInterval: 100,
		tickPosition: "inside",
		title: {
			rotation: 0,
			text: ""
		},
		zIndex: 2
	}
}, { defaultOptions: q } = f, { composed: ve, noop: J } = b, ye;
(function(e) {
	e.radialDefaultOptions = o(_e);
	function r() {
		this.autoConnect = this.isCircular && l(this.userMax, this.options.max) === void 0 && d(this.endAngleRad - this.startAngleRad) === d(2 * Math.PI), !this.isCircular && this.chart.inverted && this.max++, this.autoConnect && t(this.max) && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0);
	}
	function i(e, t) {
		return c(ve, "Axis.Radial") && (m(e, "afterInit", O), m(e, "afterTickSize", A), m(e, "autoLabelAlign", ee), m(e, "destroy", te), m(e, "init", j), m(e, "initialAxisTranslation", M), m(t, "afterGetLabelPosition", N), m(t, "afterGetPosition", P), m(b, "setOptions", F), g(e.prototype, "getMinorTickInterval", B), g(t.prototype, "getMarkPath", V)), e;
	}
	e.compose = i;
	function a() {
		return () => {
			if (this.isRadial && this.tickPositions && this.options.labels && this.options.labels.allowOverlap !== !0) return this.tickPositions.map((e) => this.ticks[e]?.label).filter((e) => !!e);
		};
	}
	function f() {
		return J;
	}
	function h(e, t, n) {
		let r = this.pane.center, i = e.value, a, o, s, c;
		return this.isCircular ? (C(i) ? e.point && (a = e.point.shapeArgs || {}, a.start && (i = this.chart.inverted ? this.translate(e.point.rectPlotY, !0) : e.point.x)) : (s = e.chartX || 0, c = e.chartY || 0, i = this.translate(Math.atan2(c - n, s - t) - this.startAngleRad, !0)), o = this.getPosition(i), s = o.x, c = o.y) : (C(i) || (s = e.chartX, c = e.chartY), C(s) && C(c) && (n = r[1] + this.chart.plotTop, i = this.translate(Math.min(Math.sqrt((s - t) ** 2 + (c - n) ** 2), r[2] / 2) - r[3] / 2, !0))), [
			i,
			s || 0,
			c || 0
		];
	}
	function v(e, t, n) {
		let r = this.pane.center, i = this.chart, a = this.left || 0, o = this.top || 0, s, c, u = l(t, r[2] / 2 - this.offset);
		return n ??= this.horiz ? 0 : this.center && -this.center[3] / 2, n && n > 0 && (u += n), this.isCircular || t !== void 0 ? (c = this.chart.renderer.symbols.arc(a + r[0], o + r[1], u, u, {
			start: this.startAngleRad,
			end: this.endAngleRad,
			open: !0,
			innerR: 0
		}), c.xBounds = [a + r[0]], c.yBounds = [o + r[1] - u]) : (s = this.postTranslate(this.angleRad, u), c = [[
			"M",
			this.center[0] + i.plotLeft,
			this.center[1] + i.plotTop
		], [
			"L",
			s.x,
			s.y
		]]), c;
	}
	function y() {
		this.constructor.prototype.getOffset.call(this);
		let e = this.options.offset ?? (this.pane.hasSeriesType("gauge") ? "-20%" : void 0);
		C(e) && (this.offset = u(e, this.center[2] / 2) * -1), this.chart.axisOffset[this.side] = 0;
	}
	function x(e, n, r) {
		let i = this.chart, a = (e) => {
			if (typeof e == "string") {
				let t = parseInt(e, 10);
				return h.test(e) && (t = t * d / 100), t;
			}
			return e;
		}, o = this.center, { endAngleRad: s, startAngleRad: c } = this, u = k(r.borderRadius ?? this.pane.options.borderRadius), d = o[2] / 2, f = Math.min(this.offset || 0, 0), p = this.left || 0, m = this.top || 0, h = /%$/, g = this.isCircular, _ = this.options.plotBands || [], v = _.indexOf(r), y, b, x, S, C, w, T = l(a(r.outerRadius), d), E = a(r.innerRadius), D = a(r.thickness), O = !0, A = !0;
		if (u.radius && u.scope === "stack" && v > -1 && (_[v - 1] && _[v - 1].to === e && (O = !1), _[v + 1] && _[v + 1].from === n && (A = !1)), this.options.gridLineInterpolation === "polygon") w = this.getPlotLinePath({ value: e }).concat(this.getPlotLinePath({
			value: n,
			reverse: !0
		}));
		else {
			t(this.min) && (e = Math.max(e, this.min)), t(this.max) && (n = Math.min(n, this.max));
			let a = this.translate(e), d = this.translate(n);
			g || (T = a || 0, E = d || 0), !t(this.min) && !t(this.max) && !r.color && !r.className ? (y = c, b = s) : r.shape === "circle" || !g ? (y = -Math.PI / 2, b = Math.PI * 1.5, C = !0) : (y = c + (a || 0), b = c + (d || 0)), T -= f, t(D) && (D -= f), w = i.renderer.symbols.arc(p + o[0], m + o[1], T, T, {
				start: Math.min(y, b),
				end: Math.max(y, b),
				innerR: l(E, t(D) ? T - D : void 0, this.center[3] / 2),
				open: C,
				borderRadius: u.radius,
				brStart: O,
				brEnd: A
			}), g && (x = (b + y) / 2, S = p + o[0] + o[2] / 2 * Math.cos(x), w.xBounds = x > -Math.PI / 2 && x < Math.PI / 2 ? [S, i.plotWidth] : [0, S], w.yBounds = [m + o[1] + o[2] / 2 * Math.sin(x)], w.yBounds[0] += x > -Math.PI && x < 0 || x > Math.PI ? -10 : 10);
		}
		return w;
	}
	function S(e) {
		let t = this.pane.center, n = this.chart, r = n.inverted, i = e.reverse, a = this.pane.options.background, o = a ? p(a)[0] : {}, s = o.innerRadius || "0%", c = o.outerRadius || "100%", l = t[0] + n.plotLeft, d = t[1] + n.plotTop, f = this.height, m = e.isCrosshair, h = t[3] / 2, g = n.time.parse(e.value) || 0, _, v, y, b, x, S, C, w, T, E = this.getPosition(g, t[2] / 2 + (this.isCircular ? this.offset : 0)), D = E.x, O = E.y;
		if (m && (w = this.getCrosshairPosition(e, l, d), g = w[0] || 0, D = w[1], O = w[2]), this.isCircular) v = Math.sqrt((D - l) ** 2 + (O - d) ** 2), y = typeof s == "string" ? u(s, 1) : s / v, b = typeof c == "string" ? u(c, 1) : c / v, t && h && (_ = h / v, y < _ && (y = _), b < _ && (b = _)), T = [[
			"M",
			l + y * (D - l),
			d - y * (d - O)
		], [
			"L",
			D - (1 - b) * (D - l),
			O + (1 - b) * (d - O)
		]];
		else {
			let e = this.translate(g);
			if (e && (e < 0 || e > f) && (e = 0), this.options.gridLineInterpolation === "circle") T = this.getLinePath(0, e, h);
			else if (T = [], n[r ? "yAxis" : "xAxis"].forEach((e) => {
				e.pane === this.pane && (x = e);
			}), x) {
				C = x.tickPositions, x.autoConnect && (C = C.concat([C[0]])), i && (C = C.slice().reverse()), e && (e += h);
				for (let t = 0; t < C.length; t++) S = x.getPosition(C[t], e), T.push(t ? [
					"L",
					S.x,
					S.y
				] : [
					"M",
					S.x,
					S.y
				]);
			}
		}
		return T;
	}
	function w(e, t) {
		let n = this.translate(e);
		return this.postTranslate(this.isCircular ? n : this.angleRad, l(this.isCircular ? t : n < 0 ? 0 : n, this.center[2] / 2) - this.offset);
	}
	function T() {
		let e = this.center, t = this.chart, n = this.options.title;
		return {
			x: t.plotLeft + e[0] + (n.x || 0),
			y: t.plotTop + e[1] - {
				high: .5,
				middle: .25,
				low: 0
			}[n.align] * e[2] + (n.y || 0)
		};
	}
	function E(e) {
		e.beforeSetTickPositions = r, e.createLabelCollector = a, e.getCrosshairPosition = h, e.getLinePath = v, e.getOffset = y, e.getPlotBandPath = x, e.getPlotLinePath = S, e.getPosition = w, e.getTitlePosition = T, e.postTranslate = ne, e.setAxisSize = L, e.setAxisTranslation = R, e.setOptions = z;
	}
	function D(e) {
		e.isHidden = !0, e.createLabelCollector = f, e.getOffset = J, e.redraw = I, e.render = I, e.setCategories = J, e.setTitle = J;
	}
	function O() {
		let e = this.chart, t = this.options, n = e.angular && this.isXAxis, r = this.pane, i = r?.options;
		if (!n && r && (e.angular || e.polar)) {
			let n = Math.PI * 2, r = i.startAngle ?? (e.angular ? -135 : 0), a = (r - 90) * Math.PI / 180, o = (l(i.endAngle, r + (e.angular ? 270 : 360)) - 90) * Math.PI / 180;
			this.angleRad = (t.angle || 0) * Math.PI / 180, this.startAngleRad = a, this.endAngleRad = o;
			let s = (a % n + n) % n, c = (o % n + n) % n;
			s > Math.PI && (s -= n), c > Math.PI && (c -= n), this.normalizedStartAngleRad = s, this.normalizedEndAngleRad = c;
		}
	}
	function A(e) {
		if (this.chart.angular) {
			let { options: t, pane: n } = this;
			n.hasSeriesType("gauge") && (e.tickSize = [t[`${e.prefix}Length`] ?? 10, t[`${e.prefix}Width`] ?? 1], t[`${e.prefix}Position`] === "inside" && (e.tickSize[0] *= -1));
		}
	}
	function ee(e) {
		this.isRadial && (e.align = void 0, e.preventDefault());
	}
	function te() {
		if (this.chart?.labelCollectors) {
			let e = this.labelCollector ? this.chart.labelCollectors.indexOf(this.labelCollector) : -1;
			e >= 0 && this.chart.labelCollectors.splice(e, 1);
		}
	}
	function j(e) {
		let t = this.chart, n = t.angular, r = t.polar, i = this.isXAxis, a = this.coll, o = n && i, s = e.userOptions.pane || 0, c = this.pane = t.pane && t.pane[s], l;
		if (a === "colorAxis") {
			this.isRadial = !1;
			return;
		}
		n ? (o ? D(this) : E(this), l = !i) : r && (E(this), l = this.horiz), n || r ? (this.isRadial = !0, this.labelCollector ||= this.createLabelCollector(), this.labelCollector && t.labelCollectors.push(this.labelCollector)) : this.isRadial = !1, c && l && (c.axis = this), this.isCircular = l;
	}
	function M() {
		this.isRadial && this.beforeSetTickPositions?.();
	}
	function N(e) {
		let t = this.label;
		if (!t) return;
		let n = this.axis, r = t.getBBox(), i = n.options.labels, a = (n.translate(this.pos) + n.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360, o = Math.round(a), s = C(i.y) ? 0 : -r.height * .3, c = i.y, l, d = 20, f = i.align, p = "end", m = o < 0 ? o + 360 : o, h = m, g = 0, _ = 0;
		n.isRadial && (l = n.getPosition(this.pos, n.center[2] / 2 + u(i.distance ?? -25, n.center[2] / 2) + n.offset), i.rotation === "auto" ? t.attr({ rotation: a }) : C(c) || (c = n.chart.renderer.fontMetrics(t).b - r.height / 2), C(f) || (n.isCircular ? (r.width > n.len * n.tickInterval / (n.max - n.min) && (d = 0), f = a > d && a < 180 - d ? "left" : a > 180 + d && a < 360 - d ? "right" : "center") : f = "center", t.attr({ align: f })), f === "auto" && n.tickPositions.length === 2 && n.isCircular && (m > 90 && m < 180 ? m = 180 - m : m > 270 && m <= 360 && (m = 540 - m), h > 180 && h <= 360 && (h = 360 - h), (n.pane.options.startAngle === o || n.pane.options.startAngle === o + 360 || n.pane.options.startAngle === o - 360) && (p = "start"), f = o >= -90 && o <= 90 || o >= -360 && o <= -270 || o >= 270 && o <= 360 ? p === "start" ? "right" : "left" : p === "start" ? "left" : "right", h > 70 && h < 110 && (f = "center"), m < 15 || m >= 180 && m < 195 ? g = r.height * .3 : m >= 15 && m <= 35 ? g = p === "start" ? 0 : r.height * .75 : m >= 195 && m <= 215 ? g = p === "start" ? r.height * .75 : 0 : m > 35 && m <= 90 ? g = p === "start" ? -r.height * .25 : r.height : m > 215 && m <= 270 && (g = p === "start" ? r.height : -r.height * .25), h < 15 ? _ = p === "start" ? -r.height * .15 : r.height * .15 : h > 165 && h <= 180 && (_ = p === "start" ? r.height * .15 : -r.height * .15), t.attr({ align: f }), t.translate(_, g + s)), e.pos.x = l.x + (i.x || 0), e.pos.y = l.y + (c || 0));
	}
	function P(e) {
		this.axis.getPosition && n(e.pos, this.axis.getPosition(this.pos));
	}
	function F({ options: t }) {
		t.xAxis && o(!0, e.radialDefaultOptions.circular, t.xAxis), t.yAxis && o(!0, e.radialDefaultOptions.radialGauge, t.yAxis);
	}
	function ne(e, t) {
		let n = this.chart, r = this.center;
		return e = this.startAngleRad + e, {
			x: n.plotLeft + r[0] + Math.cos(e) * t,
			y: n.plotTop + r[1] + Math.sin(e) * t
		};
	}
	function I() {
		this.isDirty = !1;
	}
	function L() {
		let e = this.constructor.prototype, t, n;
		e.setAxisSize.call(this), this.isRadial && (this.pane.updateCenter(), t = this.center = this.pane.center.slice(), this.isCircular ? (this.sector = this.endAngleRad - this.startAngleRad, this.len = this.width = this.height = t[2] * this.sector / 2) : (n = this.postTranslate(this.angleRad, t[3] / 2), t[0] = n.x - this.chart.plotLeft, t[1] = n.y - this.chart.plotTop, this.len = this.width = this.height = (t[2] - t[3]) / 2));
	}
	function R() {
		this.constructor.prototype.setAxisTranslation.call(this), this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : (this.center[2] - this.center[3]) / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0);
	}
	function z(t) {
		let { coll: n } = this, { angular: r, inverted: i, polar: a } = this.chart, c = {};
		r ? this.isXAxis || (c = o(q.yAxis, e.radialDefaultOptions.radialGauge)) : a && (c = this.horiz ? o(q.xAxis, e.radialDefaultOptions.circular) : o(n === "xAxis" ? q.xAxis : q.yAxis, e.radialDefaultOptions.radial)), i && n === "yAxis" && (c.stackLabels = s(q.yAxis, !0) ? q.yAxis.stackLabels : {}, c.reversedStacks = !0);
		let l = this.options = o(c, t);
		l.plotBands ||= [], _(this, "afterSetOptions");
	}
	function B(e) {
		return !C(this.options.minorTicks) && this.pane.hasSeriesType("gauge") ? "auto" : e.apply(this, Array.prototype.slice.call(arguments, 1));
	}
	function V(e, t, n, r, i, a, o) {
		let s = this.axis, c, l;
		return s.isRadial ? (c = s.getPosition(this.pos, s.center[2] / 2 + r), l = [
			"M",
			t,
			n,
			"L",
			c.x,
			c.y
		]) : l = e.call(this, t, n, r, i, a, o), l;
	}
})(ye ||= {});
var be = ye, { animObject: xe } = y, { defaultOptions: Se } = f, { composed: Ce } = b;
function we(e, t, n, r, i) {
	let a = S(), o = e.createElement("clipPath").attr({ id: a }).add(e.defs), s = i ? e.arc(t, n, r, i, 0, 2 * Math.PI).add(o) : e.circle(t, n, r).add(o);
	return s.id = a, s.clipPath = o, s;
}
function Te(e, t) {
	let n, r;
	return t.align === null && (n = e > 20 && e < 160 ? "left" : e > 200 && e < 340 ? "right" : "center", t.align = n), t.verticalAlign === null && (r = e < 45 || e > 315 ? "bottom" : e > 135 && e < 225 ? "top" : "middle", t.verticalAlign = r), t;
}
function Ee(e, t, n, r) {
	let i = 1.5, a = 2.5, o = +!!r, s, c, l, u, d, f;
	s = t >= 0 && t <= e.length - 1 ? t : t < 0 ? e.length - 1 + t : 0;
	let p = s - 1 < 0 ? e.length - (1 + o) : s - 1, m = s + 1 > e.length - 1 ? o : s + 1, h = e[p], g = e[m], _ = h.plotX, v = h.plotY, y = g.plotX, b = g.plotY, x = e[s].plotX, S = e[s].plotY;
	c = (i * x + _) / a, l = (i * S + v) / a, u = (i * x + y) / a, d = (i * S + b) / a;
	let C = Math.sqrt((c - x) ** 2 + (l - S) ** 2), w = Math.sqrt((u - x) ** 2 + (d - S) ** 2), T = Math.atan2(l - S, c - x), E = Math.atan2(d - S, u - x);
	f = Math.PI / 2 + (T + E) / 2, Math.abs(T - f) > Math.PI / 2 && (f -= Math.PI), c = x + Math.cos(f) * C, l = S + Math.sin(f) * C, u = x + Math.cos(Math.PI + f) * w, d = S + Math.sin(Math.PI + f) * w;
	let D = {
		rightContX: u,
		rightContY: d,
		leftContX: c,
		leftContY: l,
		plotX: x,
		plotY: S
	};
	return n && (D.prevPointCont = Ee(e, p, !1, r)), D;
}
function De() {
	(this.pane || []).forEach((e) => {
		e.render();
	});
}
function Oe(e) {
	let t = e.args[0].xAxis, n = e.args[0].yAxis, r = e.args[0].chart;
	t && n && (n.gridLineInterpolation === "polygon" ? (t.startOnTick = !0, t.endOnTick = !0) : t.gridLineInterpolation === "polygon" && r.inverted && (n.startOnTick = !0, n.endOnTick = !0));
}
function ke() {
	this.pane ||= [], this.options.pane = p(this.options.pane || {}), p(this.userOptions.pane || {}).forEach((e) => {
		new K(e, this);
	}, this);
}
function Ae(e) {
	let t = e.args.marker, n = this.chart.xAxis[0], r = this.chart.yAxis[0], i = this.chart.inverted, a = i ? r : n, o = i ? n : r;
	if (this.chart.polar) {
		e.preventDefault();
		let n = (t.attr ? t.attr("start") : t.start) - a.startAngleRad, r = t.attr ? t.attr("r") : t.r, i = (t.attr ? t.attr("end") : t.end) - a.startAngleRad, s = t.attr ? t.attr("innerR") : t.innerR;
		e.result.x = n + a.pos, e.result.width = i - n, e.result.y = o.len + o.pos - r, e.result.height = r - s;
	}
}
function je(e) {
	let t = this.chart;
	if (t.polar && t.hoverPane && t.hoverPane.axis) {
		e.preventDefault();
		let n = t.hoverPane.center, r = t.mouseDownX || 0, i = t.mouseDownY || 0, a = e.args.chartY, o = e.args.chartX, s = Math.PI * 2, c = t.hoverPane.axis.startAngleRad, l = t.hoverPane.axis.endAngleRad, u = t.inverted ? t.xAxis[0] : t.yAxis[0], d = {}, f = "arc";
		if (d.x = n[0] + t.plotLeft, d.y = n[1] + t.plotTop, this.zoomHor) {
			let e = c > 0 ? l - c : Math.abs(c) + Math.abs(l), p = Math.atan2(i - t.plotTop - n[1], r - t.plotLeft - n[0]) - c, m = Math.atan2(a - t.plotTop - n[1], o - t.plotLeft - n[0]) - c;
			if (d.r = n[2] / 2, d.innerR = n[3] / 2, p <= 0 && (p += s), m <= 0 && (m += s), m < p && (m = [p, p = m][0]), e < s) {
				let t = l + (s - e) / 2;
				c + m > t && (m = p, p = c <= 0 ? c : 0);
			}
			let h = d.start = Math.max(p + c, c), g = d.end = Math.min(m + c, l);
			if (u.options.gridLineInterpolation === "polygon") {
				let e = t.hoverPane.axis, r = h - e.startAngleRad + e.pos, i = g - h, a = u.getPlotLinePath({ value: u.max }), o = e.toValue(r), s = e.toValue(r + i);
				if (o < e.getExtremes().min) {
					let { min: t, max: n } = e.getExtremes();
					o = n - (t - o);
				}
				if (s < e.getExtremes().min) {
					let { min: t, max: n } = e.getExtremes();
					s = n - (t - s);
				}
				s < o && (s = [o, o = s][0]), a = Y(a, o, s, e), a.push([
					"L",
					n[0] + t.plotLeft,
					t.plotTop + n[1]
				]), d.d = a, f = "path";
			}
		}
		if (this.zoomVert) {
			let e = t.inverted ? t.xAxis[0] : t.yAxis[0], s = Math.sqrt((r - t.plotLeft - n[0]) ** 2 + (i - t.plotTop - n[1]) ** 2), u = Math.sqrt((o - t.plotLeft - n[0]) ** 2 + (a - t.plotTop - n[1]) ** 2);
			if (u < s && (s = [u, u = s][0]), u > n[2] / 2 && (u = n[2] / 2), s < n[3] / 2 && (s = n[3] / 2), this.zoomHor || (d.start = c, d.end = l), d.r = u, d.innerR = s, e.options.gridLineInterpolation === "polygon") {
				let t = e.toValue(e.len + e.pos - s), n = e.toValue(e.len + e.pos - u);
				d.d = e.getPlotLinePath({ value: n }).concat(e.getPlotLinePath({
					value: t,
					reverse: !0
				})), f = "path";
			}
		}
		if (this.zoomHor && this.zoomVert && u.options.gridLineInterpolation === "polygon") {
			let e = t.hoverPane.axis, n = d.start || 0, r = d.end || 0, i = n - e.startAngleRad + e.pos, a = r - n, o = e.toValue(i), s = e.toValue(i + a);
			if (d.d instanceof Array) {
				let e = d.d.slice(0, d.d.length / 2), n = d.d.slice(d.d.length / 2, d.d.length);
				n = [...n].reverse();
				let r = t.hoverPane.axis;
				e = Y(e, o, s, r), n = Y(n, o, s, r), n && (n[0][0] = "L"), n = [...n].reverse(), d.d = e.concat(n), f = "path";
			}
		}
		e.attrs = d, e.shapeType = f;
	}
}
function Me() {
	let e = this.chart;
	e.polar && (this.polar = new Ge(this), e.inverted && (this.isRadialSeries = !0, this.is("column") && (this.isRadialBar = !0)));
}
function Ne() {
	let { chart: e, options: t, yAxis: n } = this;
	if (t.borderRadius && e.polar && e.inverted) {
		let e = Se.plotOptions?.[this.type]?.borderRadius, { scope: r, where: i = "end" } = k(t.borderRadius, s(e) ? e : {});
		for (let e of this.points) {
			let { shapeArgs: a } = e;
			if (e.shapeType === "arc" && a) {
				let o = i === "all", s = !0;
				t.stacking && r === "stack" && (o = e.stackY === e.y && i === "all", s = e.stackY === e.stackTotal), n.reversed && ([o, s] = [s, o]), a.brStart = o, a.brEnd = s;
			}
		}
	}
}
function Pe() {
	if (this.chart.polar && this.xAxis) {
		let e = this, { xAxis: t, yAxis: n } = e, r = e.chart;
		e.kdByAngle = r.tooltip && r.tooltip.shared, e.kdByAngle || r.inverted ? e.searchPoint = Fe : e.options.findNearestPointBy = "xy";
		let i = e.points, a = i.length;
		for (; a--;) !e.is("column") && !e.is("columnrange") && e.polar.toXY(i[a]), !r.hasParallelCoordinates && !e.yAxis.reversed && (l(i[a].y, Number.MIN_VALUE) < n.min || i[a].x < t.min || i[a].x > t.max ? (i[a].isNull = !0, i[a].plotY = NaN) : i[a].isNull = i[a].isValid && !i[a].isValid());
		this.hasClipCircleSetter ||= !!e.eventsToUnbind.push(m(e, "afterRender", function() {
			let e;
			r.polar && this.options.clip !== !1 && (e = this.yAxis.pane.center, this.clipCircle ? this.clipCircle.animate({
				x: e[0],
				y: e[1],
				r: e[2] / 2,
				innerR: e[3] / 2
			}) : this.clipCircle = we(r.renderer, e[0], e[1], e[2] / 2, e[3] / 2), this.group.clip(this.clipCircle), this.setClip = b.noop);
		}));
	}
}
function Fe(e) {
	let t = this, n = t.chart, r = t.xAxis, i = t.yAxis, a = r.pane && r.pane.center, o = e.chartX - (a && a[0] || 0) - n.plotLeft, s = e.chartY - (a && a[1] || 0) - n.plotTop, c = n.inverted ? {
		clientX: e.chartX - i.pos,
		plotY: e.chartY - r.pos
	} : { clientX: 180 + -180 / Math.PI * Math.atan2(o, s) };
	return t.searchKDTree(c);
}
function Y(e, t, n, r) {
	let i = r.tickInterval, o = r.tickPositions, s = a(o, (e) => e >= n), c = a([...o].reverse(), (e) => e <= t);
	return C(s) || (s = o[o.length - 1]), C(c) || (c = o[0], s += i, e[0][0] = "L", e.unshift(e[e.length - 3])), e = e.slice(o.indexOf(c), o.indexOf(s) + 1), e[0][0] = "M", e;
}
function Ie(e, t) {
	return a(this.pane || [], (e) => e.options.id === t) || e.call(this, t);
}
function Le(e, t, n, r, i, a) {
	let s = this.chart, c = l(r.inside, !!this.options.stacking), u, d, f;
	s.polar ? (u = t.rectPlotX / Math.PI * 180, s.inverted ? (this.forceDL = s.isInsidePlot(t.plotX, t.plotY), c && t.shapeArgs ? (d = t.shapeArgs, f = this.yAxis.postTranslate(((d.start || 0) + (d.end || 0)) / 2 - this.xAxis.startAngleRad, t.barX + (t.pointWidth || 0) / 2), i = o(i, {
		x: f.x - s.plotLeft,
		y: f.y - s.plotTop
	})) : t.tooltipPos && (i = o(i, {
		x: t.tooltipPos[0],
		y: t.tooltipPos[1]
	})), r.align = l(r.align, "center"), r.verticalAlign = l(r.verticalAlign, "middle")) : r = Te(u, r), A.prototype.alignDataLabel.call(this, t, n, r, i, a), this.isRadialBar && t.shapeArgs && t.shapeArgs.start === t.shapeArgs.end ? n.hide() : n.show()) : e.call(this, t, n, r, i, a);
}
function Re() {
	let e = this, n = e.options, r = n.stacking, i = e.chart, a = e.xAxis, o = e.yAxis, s = o.reversed, c = o.center, l = a.startAngleRad, d = a.endAngleRad - l, f = n.threshold, p = 0, m, g, _, v, y, b = 0, x = 0, S, w, T, E, D, O, k, A;
	if (a.isRadial) for (m = e.points, _ = m.length, v = o.translate(o.min), y = o.translate(o.max), f = n.threshold || 0, i.inverted && t(f) && (p = o.translate(f), C(p) && (p < 0 ? p = 0 : p > d && (p = d), e.translatedThreshold = p + l)); _--;) {
		if (g = m[_], O = g.barX, w = g.x, T = g.y, g.shapeType = "arc", i.inverted) {
			g.plotY = o.translate(T), r && o.stacking ? (D = o.stacking.stacks[(T < 0 ? "-" : "") + e.stackKey], e.visible && D && D[w] && (g.isNull || (E = D[w].points[e.getStackIndicator(void 0, w, e.index).key], b = o.translate(E[0]), x = o.translate(E[1]), C(b) && (b = h(b, 0, d))))) : (b = p, x = g.plotY), b > x && (x = [b, b = x][0]), s ? x > v ? x = v : b < y ? b = y : (b > v || x < y) && (b = x = d) : b < v ? b = v : x > y ? x = y : (x < v || b > y) && (b = x = 0), o.min > o.max && (b = x = s ? d : 0), b += l, x += l, c && (g.barX = O += c[3] / 2), k = Math.max(O, 0), A = Math.max(O + (g.pointWidth || 0), 0);
			let t = n.borderRadius, i = typeof t == "object" ? t.radius : t, a = u(i || 0, A - k);
			g.shapeArgs = {
				x: c[0],
				y: c[1],
				r: A,
				innerR: k,
				start: b,
				end: x,
				borderRadius: a
			}, g.opacity = b === x ? 0 : void 0, g.plotY = (C(e.translatedThreshold) && (b < e.translatedThreshold ? b : x)) - l;
		} else b = O + l, g.shapeArgs = e.polar.arc(g.yBottom, g.plotY, b, b + (g.pointWidth || 0)), g.shapeArgs.borderRadius = 0;
		e.polar.toXY(g), i.inverted ? (S = o.postTranslate(g.rectPlotY, O + (g.pointWidth || 0) / 2), g.tooltipPos = [S.x - i.plotLeft, S.y - i.plotTop]) : g.tooltipPos = [g.plotX, g.plotY], c && (g.ttBelow = g.plotY > c[1]);
	}
}
function ze(e, t) {
	let n = this, r, i;
	if (this.chart.polar) {
		t ||= this.points;
		for (let e = 0; e < t.length; e++) if (!t[e].isNull) {
			r = e;
			break;
		}
		this.options.connectEnds !== !1 && r !== void 0 && (this.connectEnds = !0, t.splice(t.length, 0, t[r]), i = !0), t.forEach((e) => {
			e.polarPlotY === void 0 && n.polar.toXY(e);
		});
	}
	let a = e.apply(this, [].slice.call(arguments, 1));
	return i && t.pop(), a;
}
function Be(e, t) {
	let n = this.chart, r = {
		xAxis: [],
		yAxis: []
	};
	return n.polar ? n.axes.forEach((e) => {
		if (e.coll === "colorAxis") return;
		let i = e.isXAxis, a = e.center, o = t.chartX - a[0] - n.plotLeft, s = t.chartY - a[1] - n.plotTop;
		r[i ? "xAxis" : "yAxis"].push({
			axis: e,
			value: e.translate(i ? Math.PI - Math.atan2(o, s) : Math.sqrt(o ** 2 + s ** 2), !0)
		});
	}) : r = e.call(this, t), r;
}
function Ve(e, t) {
	this.chart.polar || e.call(this, t);
}
function He(e, t) {
	let n = this, r = this.chart, i = this.group, a = this.markerGroup, o = this.xAxis && this.xAxis.center, s = r.plotLeft, c = r.plotTop, u = this.options.animation, d, f, p, m, h, g;
	r.polar ? n.isRadialBar ? t || (n.startAngleRad = l(n.translatedThreshold, n.xAxis.startAngleRad), b.seriesTypes.pie.prototype.animate.call(n, t)) : (u = xe(u), n.is("column") ? t || (f = o[3] / 2, n.points.forEach((e) => {
		p = e.graphic, m = e.shapeArgs, h = m && m.r, g = m && m.innerR, p && m && (p.attr({
			r: f,
			innerR: f
		}), p.animate({
			r: h,
			innerR: g
		}, n.options.animation));
	})) : t ? (d = {
		translateX: o[0] + s,
		translateY: o[1] + c,
		scaleX: .001,
		scaleY: .001
	}, i.attr(d), a && a.attr(d)) : (d = {
		translateX: s,
		translateY: c,
		scaleX: 1,
		scaleY: 1
	}, i.animate(d, u), a && a.animate(d, u))) : e.call(this, t);
}
function Ue(e, n, r, i) {
	let a, o;
	if (this.chart.polar) if (!i) a = [
		"M",
		r.plotX,
		r.plotY
	];
	else {
		o = Ee(n, i, !0, this.connectEnds);
		let e = o.prevPointCont && o.prevPointCont.rightContX, r = o.prevPointCont && o.prevPointCont.rightContY;
		a = [
			"C",
			t(e) ? e : o.plotX,
			t(r) ? r : o.plotY,
			t(o.leftContX) ? o.leftContX : o.plotX,
			t(o.leftContY) ? o.leftContY : o.plotY,
			o.plotX,
			o.plotY
		];
	}
	else a = e.call(this, n, r, i);
	return a;
}
function We(e, n, r = this.plotX, i = this.plotY) {
	let { series: a } = this, { chart: o } = a || {};
	return o?.polar && t(r) && t(i) ? [r + (n ? o.plotLeft : 0), i + (n ? o.plotTop : 0)] : e.call(this, n, r, i);
}
var Ge = class {
	static compose(e, t, n, r, i, a, o, s, l, u) {
		if (K.compose(t, n), be.compose(e, i), c(Ce, "Polar")) {
			let e = t.prototype, i = a.prototype, c = n.prototype, d = r.prototype;
			if (m(t, "afterDrawChartBox", De), m(t, "createAxes", ke), m(t, "init", Oe), g(e, "get", Ie), g(c, "getCoordinates", Be), g(c, "pinch", Ve), m(n, "getSelectionMarkerAttrs", je), m(n, "getSelectionBox", Ae), m(r, "afterInit", Me), m(r, "afterColumnTranslate", Ne, { order: 9 }), m(r, "afterTranslate", Pe, { order: 2 }), m(r, "afterColumnTranslate", Re, { order: 4 }), g(d, "animate", He), g(i, "pos", We), s) {
				let e = s.prototype;
				g(e, "alignDataLabel", Le), g(e, "animate", He);
			}
			if (l) {
				let e = l.prototype;
				g(e, "getGraphPath", ze);
			}
			if (u) {
				let e = u.prototype;
				if (g(e, "getPointSpline", Ue), o) {
					let t = o.prototype;
					t.getPointSpline = e.getPointSpline;
				}
			}
		}
	}
	constructor(e) {
		this.series = e;
	}
	arc(e, t, n, r) {
		let i = this.series, a = i.xAxis.center, o = i.yAxis.len, s = a[3] / 2, c = o - t + s, u = o - l(e, o) + s;
		return i.yAxis.reversed && (c < 0 && (c = s), u < 0 && (u = s)), {
			x: a[0],
			y: a[1],
			r: c,
			innerR: u,
			start: n,
			end: r
		};
	}
	toXY(e) {
		let n = this.series, r = n.chart, i = n.xAxis, a = n.yAxis, o = e.plotX, s = r.inverted, c = e.y, l = e.plotY, u = s ? o : a.len - l, d;
		if (s && n && !n.isRadialBar && (e.plotY = l = t(c) ? a.translate(c) : 0), e.rectPlotX = o, e.rectPlotY = l, a.center && (u += a.center[3] / 2), t(l)) {
			let t = s ? a.postTranslate(l, u) : i.postTranslate(o, u);
			e.plotX = e.polarPlotX = t.x - r.plotLeft, e.plotY = e.polarPlotY = t.y - r.plotTop;
		}
		n.kdByAngle ? (d = (o / Math.PI * 180 + (i.pane.options.startAngle || 0)) % 360, d < 0 && (d += 360), e.clientX = d) : e.clientX = e.plotX;
	}
}, { composed: Ke } = b, qe;
(function(e) {
	function t(e, t) {
		c(Ke, "Axis.Waterfall") && (m(e, "init", a), m(e, "afterBuildStacks", n), m(e, "afterRender", i), m(t, "beforeRedraw", o));
	}
	e.compose = t;
	function n() {
		let e = this.waterfall?.stacks;
		e && (e.changed = !1, delete e.alreadyChanged);
	}
	function i() {
		let e = this;
		e.options.stackLabels?.enabled && e.waterfall?.stacks && e.waterfall.renderStackTotals();
	}
	function a() {
		let e = this;
		e.waterfall ||= new s(e);
	}
	function o() {
		let e = this.axes, t = this.series;
		for (let n of t) if (n.options.stacking) {
			for (let t of e) !t.isXAxis && t.waterfall && (t.waterfall.stacks.changed = !0);
			break;
		}
	}
	class s {
		constructor(e) {
			this.axis = e, this.stacks = { changed: !1 };
		}
		renderStackTotals() {
			let e = this.axis, t = e.waterfall?.stacks, n = e.stacking?.stackTotalGroup, i = new D(e, e.options.stackLabels || {}, !1, 0, void 0);
			this.dummyStackItem = i, n && r(t, (e) => {
				r(e, (e, t) => {
					i.total = e.stackTotal, i.x = +t, e.label && (i.label = e.label), D.prototype.render.call(i, n), e.label = i.label, delete i.label;
				});
			}), i.total = null;
		}
	}
	e.Composition = s;
})(qe ||= {});
var Je = qe, Ye = class extends O.prototype.pointClass {
	getClassName() {
		let e = T.prototype.getClassName.call(this);
		return this.isSum ? e += " highcharts-sum" : this.isIntermediateSum && (e += " highcharts-intermediate-sum"), e;
	}
	isValid() {
		return t(this.y) || this.isSum || !!this.isIntermediateSum;
	}
}, Xe = {
	dataLabels: { inside: !0 },
	lineWidth: 1,
	lineColor: "var(--highcharts-neutral-color-80)",
	dashStyle: "Dot",
	borderColor: "var(--highcharts-neutral-color-80)",
	states: { hover: { lineWidthPlus: 0 } }
}, { column: X, line: Ze } = E.seriesTypes;
function Z(e, t) {
	return Object.hasOwnProperty.call(e, t);
}
var Q = class extends X {
	generatePoints() {
		X.prototype.generatePoints.apply(this);
		let e = this.getColumn("y", !0);
		for (let n = 0, r = this.points.length; n < r; n++) {
			let r = this.points[n], i = e[n];
			t(i) && (r.isIntermediateSum || r.isSum) && (r.y = d(i));
		}
	}
	processData(e) {
		let t = this, n = t.options, r = t.getColumn("y"), i = t.getColumn("isSum"), a = t.getColumn("isIntermediateSum"), o = r.length, s = n.threshold || 0, c, l, u, f, p;
		l = c = u = f = 0;
		for (let e = 0; e < o; e++) p = r[e], p === "sum" || i[e] ? r[e] = d(l) : p === "intermediateSum" || a[e] ? (r[e] = d(c), c = 0) : (l += p, c += p), u = Math.min(l, u), f = Math.max(l, f);
		super.processData.call(this, e), n.stacking || (t.dataMin = u + s, t.dataMax = f);
	}
	toYData(e) {
		return e.isSum ? "sum" : e.isIntermediateSum ? "intermediateSum" : e.y;
	}
	pointAttribs(e, n) {
		let r = this.options.upColor;
		r && !e.options.color && t(e.y) && (e.color = e.y > 0 ? r : void 0);
		let i = X.prototype.pointAttribs.call(this, e, n);
		return delete i.dashstyle, i;
	}
	getGraphPath() {
		return this.graph?.pathArray || [[
			"M",
			0,
			0
		]];
	}
	getCrispPath() {
		let e = this.points.filter((e) => t(e.y)), n = this.yAxis, r = e.length, i = this.graph?.strokeWidth() || 0, a = this.xAxis.reversed, o = this.yAxis.reversed, s = this.options.stacking, c = [];
		for (let l = 1; l < r; l++) {
			if (!(this.options.connectNulls || t(this.data[e[l].index - 1].y))) continue;
			let r = e[l].box, u = e[l - 1], d = u.y || 0, f = e[l - 1].box;
			if (!r || !f) continue;
			let p = n.waterfall?.stacks[this.stackKey], m = d > 0 ? -f.height : 0;
			if (p && f && r) {
				let e = p[l - 1], t;
				t = w(s ? n.translate(e.connectorThreshold || 0, !1, !0, !1, !0) + (o ? m : 0) : f.y + (u.minPointLengthOffset || 0), i), c.push([
					"M",
					(f.x || 0) + (a ? 0 : f.width || 0),
					t
				], [
					"L",
					(r.x || 0) + (a && r.width || 0),
					t
				]);
			}
			if (f && c.length && (!s && d < 0 && !o || d > 0 && o)) {
				let e = c[c.length - 2];
				e && typeof e[2] == "number" && (e[2] += f.height || 0);
				let t = c[c.length - 1];
				t && typeof t[2] == "number" && (t[2] += f.height || 0);
			}
		}
		return c;
	}
	drawGraph() {
		Ze.prototype.drawGraph.call(this), this.graph?.animate({ d: this.getCrispPath() });
	}
	setStackedPoints(e) {
		let t = this, n = t.options, r = e.waterfall?.stacks, i = n.threshold || 0, a = t.stackKey, o = t.getColumn("x"), c = t.getColumn("y"), l = o.length, u = i, d = u, f, p = 0, m = 0, h = 0, g, _, v, y, b, x, S, C, w = (e, t, n, r) => {
			if (f) {
				if (!g) f.stackState[0] = e, g = f.stackState.length;
				else for (; n < g; n++) f.stackState[n] += r;
				f.stackState.push(f.stackState[g - 1] + t);
			}
		};
		if (e.stacking && r && t.reserveSpace()) {
			C = r.changed, S = r.alreadyChanged, S && S.indexOf(a) < 0 && (C = !0), r[a] || (r[a] = {});
			let e = r[a];
			if (e) for (let t = 0; t < l; t++) x = o[t], (!e[x] || C) && (e[x] = {
				negTotal: 0,
				posTotal: 0,
				stackTotal: 0,
				threshold: 0,
				stateIndex: 0,
				stackState: [],
				label: C && e[x] ? e[x].label : void 0
			}), f = e[x], b = c[t], b >= 0 ? f.posTotal += b : f.negTotal += b, y = n.data?.[t], _ = f.absolutePos = f.posTotal, v = f.absoluteNeg = f.negTotal, f.stackTotal = _ + v, g = f.stackState.length, s(y, !0) && y.isIntermediateSum ? (w(h, m, 0, h), h = m, m = i, u ^= d, d ^= u, u ^= d) : s(y, !0) && y.isSum ? (w(i, p, g, 0), u = i) : (w(u, b, 0, p), y && (p += b, m += b)), f.stateIndex++, f.threshold = u, u += f.stackTotal;
			r.changed = !1, r.alreadyChanged ||= [], r.alreadyChanged.push(a);
		}
	}
	getExtremes() {
		let e = this.options.stacking, t = this.yAxis.waterfall?.stacks, n, i;
		return e && t ? (n = this.stackedYNeg = [], i = this.stackedYPos = [], e === "overlap" ? r(t[this.stackKey], function(e) {
			n.push(v(e.stackState)), i.push(x(e.stackState));
		}) : r(t[this.stackKey], function(e) {
			n.push(e.negTotal + e.threshold), i.push(e.posTotal + e.threshold);
		}), {
			dataMin: v(n),
			dataMax: x(i)
		}) : {
			dataMin: this.dataMin,
			dataMax: this.dataMax
		};
	}
};
Q.defaultOptions = o(X.defaultOptions, Xe), Q.compose = Je.compose, n(Q.prototype, {
	pointValKey: "y",
	showLine: !0,
	pointClass: Ye
}), m(Q, "afterColumnTranslate", function() {
	let e = this, { options: r, points: i, yAxis: a } = e, s = l(r.minPointLength, 5), c = s / 2, u = r.threshold || 0, d = r.stacking, f = a.waterfall?.stacks[e.stackKey], p = e.getColumn("y", !0), m = u, h = u, g, _, v;
	for (let r = 0; r < i.length; r++) {
		let l = i[r], y = p[r], b = l.shapeArgs, x = n({
			x: 0,
			y: 0,
			width: 0,
			height: 0
		}, b || {});
		l.box = x;
		let S = [0, y], C = l.y || 0;
		if (d) {
			if (f) {
				let n = f[r];
				d === "overlap" ? (_ = n.stackState[n.stateIndex--], g = C >= 0 ? _ : _ - C, Z(n, "absolutePos") && delete n.absolutePos, Z(n, "absoluteNeg") && delete n.absoluteNeg) : (C >= 0 ? (_ = n.threshold + n.posTotal, n.posTotal -= C, g = _) : (_ = n.threshold + n.negTotal, n.negTotal -= C, g = _ - C), n.posTotal || t(n.absolutePos) && Z(n, "absolutePos") && (n.posTotal = n.absolutePos, delete n.absolutePos), n.negTotal || t(n.absoluteNeg) && Z(n, "absoluteNeg") && (n.negTotal = n.absoluteNeg, delete n.absoluteNeg)), l.isSum || (n.connectorThreshold = n.threshold + n.stackTotal), v = g - Math.abs(C), a.reversed && ([g, v] = [v, g]), l.below = g <= u, x.y = a.translate(g, !1, !0, !1, !0), x.height = a.translate(v, !1, !0, !1, !0) - x.y;
				let i = a.waterfall?.dummyStackItem;
				i && (i.x = r, i.label = f[r].label, i.setOffset(e.pointXOffset || 0, e.barW || 0, e.stackedYNeg[r], e.stackedYPos[r], void 0, this.xAxis));
			}
		} else g = Math.max(h, h + C) + S[0], x.y = a.translate(g, !1, !0, !1, !0), l.isSum ? (x.y = a.translate(S[1], !1, !0, !1, !0), x.height = Math.min(a.translate(S[0], !1, !0, !1, !0), a.len) - x.y, l.below = S[1] <= u) : l.isIntermediateSum ? (C >= 0 ? (g = S[1] + m, v = m) : (g = m, v = S[1] + m), a.reversed && ([g, v] = [v, g]), x.y = a.translate(g, !1, !0, !1, !0), x.height = Math.abs(x.y - Math.min(a.translate(v, !1, !0, !1, !0), a.len)), m += S[1], l.below = g <= u) : (x.height = y > 0 ? a.translate(h, !1, !0, !1, !0) - x.y : a.translate(h + y, !1, !0, !1, !0) - a.translate(h, !1, !0, !1, !0), h += y, l.below = h < u);
		x.height < 0 && (x.y += x.height, x.height *= -1), l.plotY = x.y, l.yBottom = x.y + x.height, x.height <= s && !l.isNull ? (x.height = s, x.y -= c, l.yBottom = x.y + x.height, l.plotY = x.y, l.minPointLengthOffset = C < 0 ? -c : c) : (l.isNull && (x.width = 0), l.minPointLengthOffset = 0);
		let T = l.plotY + (l.negative ? x.height : 0);
		l.below && (l.plotY += x.height), l.tooltipPos && (e.chart.inverted ? l.tooltipPos[0] = a.len - T : l.tooltipPos[1] = T), l.isInside = this.isPointInside(l);
		let E = w(l.yBottom, e.borderWidth);
		x.y = w(x.y, e.borderWidth), x.height = E - x.y, o(!0, l.shapeArgs, x);
	}
}, { order: 2 }), E.registerSeriesType("waterfall", Q);
//#endregion
//#region src/highchartsMoreCustom.ts
var $ = b;
$.RadialAxis = be, K.compose($.Chart, $.Pointer), Ge.compose($.Axis, $.Chart, $.Pointer, $.Series, $.Tick, $.Point, E.seriesTypes.areasplinerange, E.seriesTypes.column, E.seriesTypes.line, E.seriesTypes.spline), Q.compose($.Axis, $.Chart);
//#endregion

//# sourceMappingURL=highchartsMoreCustom-CcpfmVny.js.map