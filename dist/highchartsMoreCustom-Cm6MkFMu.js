import { $ as e, J as t, K as n, M as r, N as i, Q as a, S as o, U as s, W as c, _ as l, b as u, c as d, et as f, g as p, h as m, j as h, k as g, lt as _, p as v, rt as y, st as b, t as x, w as S, y as C, z as w } from "./AnimationUtilities-CJw-tdb_.js";
import { n as T, t as E } from "./SeriesRegistry-CXsAINSj.js";
import { i as D, n as O, r as k, t as A } from "./CenteredUtilities-BTUT7_Ld.js";
import { t as j } from "./BorderRadius-CqHYi9va.js";
//#region node_modules/highcharts/es-modules/Series/AreaRange/AreaRangePoint.js
var { area: { prototype: { pointClass: M, pointClass: { prototype: N } } } } = E.seriesTypes, ee = class extends M {
	setState() {
		let e = this.state, t = this.series, n = t.chart.polar;
		S(this.plotHigh) || (this.plotHigh = t.yAxis.toPixels(this.high, !0)), S(this.plotLow) || (this.plotLow = this.plotY = t.yAxis.toPixels(this.low, !0)), t.lowerStateMarkerGraphic = t.stateMarkerGraphic, t.stateMarkerGraphic = t.upperStateMarkerGraphic, this.graphic = this.graphics && this.graphics[1], this.plotY = this.plotHigh, n && s(this.plotHighX) && (this.plotX = this.plotHighX), N.setState.apply(this, arguments), this.state = e, this.plotY = this.plotLow, this.graphic = this.graphics && this.graphics[0], n && s(this.plotLowX) && (this.plotX = this.plotLowX), t.upperStateMarkerGraphic = t.stateMarkerGraphic, t.stateMarkerGraphic = t.lowerStateMarkerGraphic, t.lowerStateMarkerGraphic = void 0;
		let r = t.modifyMarkerSettings();
		N.setState.apply(this, arguments), t.restoreMarkerSettings(r);
	}
	haloPath() {
		let e = this.series.chart.polar, t = [];
		return this.plotY = this.plotLow, e && s(this.plotLowX) && (this.plotX = this.plotLowX), this.isInside && (t = N.haloPath.apply(this, arguments)), this.plotY = this.plotHigh, e && s(this.plotHighX) && (this.plotX = this.plotHighX), this.isTopInside && (t = t.concat(N.haloPath.apply(this, arguments))), t;
	}
	isValid() {
		return s(this.low) && s(this.high);
	}
}, P;
(function(e) {
	let t = {
		close: ["plotClose"],
		high: ["highPlot", "plotHigh"],
		low: ["lowPlot", "plotLow"],
		median: ["medianPlot"],
		open: ["plotOpen"],
		q1: ["q1Plot"],
		q3: ["q3Plot"],
		y: ["plotY"]
	};
	function n(e, n) {
		let r = t[n] ?? [];
		for (let t of r) {
			let n = e[t];
			if (s(n)) return n;
		}
	}
	function r(e, t, r) {
		let i = n(e, "high"), a = n(e, "low");
		return s(i) && s(a) ? t.inside ? r === Math.min(i, a) : r === Math.max(i, a) : !1;
	}
	function i(e) {
		let t = e.prototype;
		return t.alignDataLabel = u, e;
	}
	e.compose = i;
	function a(e) {
		let t = e.alignToKey ? this.getNestedProperty(e.alignToKey) : this.y, n = s(t) ? t : this.y;
		return s(n) ? this.series.chart.numberFormatter(n, -1) : "";
	}
	e.formatter = a;
	function c(e) {
		let { alignToKey: t, format: n } = e;
		t && n && (e.format = n.replace(/\{(?:point\.)?y([:}])/g, "{point." + t + "$1"));
	}
	e.applyAlignToKeyValue = c;
	function l(e, t) {
		return t && e.pointArrayMap.indexOf(t) > -1 ? t : e.pointValKey;
	}
	e.resolveAlignToKey = l;
	function u(e, t, i, a, c) {
		let u = this, d = n(e, l(u, i.alignToKey)), f = e.shapeArgs, p = e.plotY, m = e.dlBox, h = e.below;
		if (s(d)) {
			e.plotY = d, f && !i.inside && (e.dlBox = {
				x: f.x ?? 0,
				y: o(d, u.borderWidth, u.chart.inverted),
				width: f.width ?? 0,
				height: 0
			});
			let t = e.below = r(e, i, d);
			u.chart.inverted ? i.align ??= t ? "right" : "left" : i.verticalAlign ??= t ? "top" : "bottom";
		}
		O.prototype.alignDataLabel.call(u, e, t, i, a, c), e.plotY = p, e.dlBox = m, e.below = h;
	}
	e.alignDataLabel = u;
})(P ||= {});
var F = P, { noop: te } = _, { area: I, area: { prototype: L } } = E.seriesTypes, R = {
	lineWidth: 1,
	threshold: null,
	tooltip: { pointFormat: "<span style=\"color:{series.color}\">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>" },
	trackByArea: !0,
	dataLabels: {
		align: void 0,
		formatter: F.formatter,
		verticalAlign: void 0,
		xLow: 0,
		xHigh: 0,
		yLow: 0,
		yHigh: 0
	}
};
function ne(e) {
	let t = e.options.dataLabels;
	return w(t) ? Array.from({ length: Math.max(t.length, 2) }, (r, i) => {
		let a = t[i], o = i === 0 ? "high" : i === 1 ? "low" : e.pointValKey, s = a?.alignToKey ?? o;
		return n(a ?? { enabled: !1 }, { alignToKey: s });
	}) : t?.alignToKey ? [n(t, t.alignToKey === "high" ? {
		x: t.xHigh,
		y: t.yHigh
	} : t.alignToKey === "low" ? {
		x: t.xLow,
		y: t.yLow
	} : {})] : [n(t, {
		alignToKey: "high",
		x: t?.xHigh,
		y: t?.yHigh
	}), n(t, {
		alignToKey: "low",
		x: t?.xLow,
		y: t?.yLow
	})];
}
var z = class extends I {
	toYData(e) {
		return [e.low, e.high];
	}
	highToXY(e) {
		let t = this.chart, n = this.xAxis.postTranslate(e.rectPlotX || 0, this.yAxis.len - (e.plotHigh || 0));
		e.plotHighX = n.x - t.plotLeft, e.plotHigh = n.y - t.plotTop, e.plotLowX = e.plotX;
	}
	getGraphPath(e) {
		let t = [], n = [], r = L.getGraphPath, i = this.options, a = this.chart.polar, o = a && i.connectEnds !== !1, s = i.connectNulls, c, l, u, d = i.step;
		for (e ||= this.points, c = e.length; c--;) {
			l = e[c];
			let r = a ? {
				plotX: l.rectPlotX,
				plotY: l.yBottom,
				doCurve: !1
			} : {
				plotX: l.plotX,
				plotY: l.plotY,
				doCurve: !1
			};
			!l.isNull && !o && !s && (!e[c + 1] || e[c + 1].isNull) && n.push(r), u = {
				polarPlotY: l.polarPlotY,
				rectPlotX: l.rectPlotX,
				yBottom: l.yBottom,
				plotX: l.plotHighX ?? l.plotX,
				plotY: l.plotHigh,
				isNull: l.isNull
			}, n.push(u), t.push(u), !l.isNull && !o && !s && (!e[c - 1] || e[c - 1].isNull) && n.push(r);
		}
		let f = r.call(this, e);
		d && (d === !0 && (d = "left"), i.step = {
			left: "right",
			center: "center",
			right: "left"
		}[d]);
		let p = r.call(this, t), m = r.call(this, n);
		i.step = d;
		let h = [].concat(f, p);
		return !this.chart.polar && m[0] && m[0][0] === "M" && (m[0] = [
			"L",
			m[0][1],
			m[0][2]
		]), this.graphPath = h, this.areaPath = f.concat(m), h.isArea = !0, h.xMap = f.xMap, this.areaPath.xMap = f.xMap, h;
	}
	drawDataLabels() {
		let e = this, t = e.options.dataLabels;
		if (t) {
			let n = ne(e);
			n.forEach(F.applyAlignToKeyValue), e.options.dataLabels = n, L.drawDataLabels && L.drawDataLabels.call(e), e.options.dataLabels = t;
			for (let t of e.points) {
				let n = t.dataLabels ?? [];
				t.dataLabelUpper = n.find((t) => F.resolveAlignToKey(e, t.options?.alignToKey) === "high"), t.dataLabel = n.find((t) => F.resolveAlignToKey(e, t.options?.alignToKey) === "low");
			}
		}
	}
	modifyMarkerSettings() {
		let e = this, t = {
			marker: e.options.marker,
			symbol: e.symbol
		};
		if (e.options.lowMarker) {
			let { options: { marker: t, lowMarker: r } } = e;
			e.options.marker = n(t, r), r.symbol && (e.symbol = r.symbol);
		}
		return t;
	}
	restoreMarkerSettings(e) {
		let t = this;
		t.options.marker = e.marker, t.symbol = e.symbol;
	}
	drawPoints() {
		let e = this, t = e.points.length, n, r, i = e.modifyMarkerSettings();
		for (L.drawPoints.apply(e, arguments), e.restoreMarkerSettings(i), n = 0; n < t;) r = e.points[n], r.graphics = r.graphics || [], r.origProps = {
			plotY: r.plotY,
			plotX: r.plotX,
			isInside: r.isInside,
			negative: r.negative,
			zone: r.zone,
			y: r.y
		}, (r.graphic || r.graphics[0]) && (r.graphics[0] = r.graphic), r.graphic = r.graphics[1], r.plotY = r.plotHigh, S(r.plotHighX) && (r.plotX = r.plotHighX), r.y = r.high ?? r.origProps.y, r.negative = r.y < (e.options.threshold || 0), e.zones.length && (r.zone = r.getZone()), e.chart.polar || (r.isInside = r.isTopInside = r.plotY !== void 0 && r.plotY >= 0 && r.plotY <= e.yAxis.len && r.plotX >= 0 && r.plotX <= e.xAxis.len), n++;
		for (L.drawPoints.apply(e, arguments), n = 0; n < t;) r = e.points[n], r.graphics = r.graphics || [], (r.graphic || r.graphics[1]) && (r.graphics[1] = r.graphic), r.graphic = r.graphics[0], r.origProps && (g(r, r.origProps), delete r.origProps), n++;
	}
	hasMarkerChanged(e, t) {
		let n = e.lowMarker, r = t.lowMarker || {};
		return n && (n.enabled === !1 || r.symbol !== n.symbol || r.height !== n.height || r.width !== n.width) || super.hasMarkerChanged(e, t);
	}
};
z.defaultOptions = n(I.defaultOptions, R), m(z, "afterTranslate", function() {
	this.pointArrayMap.join(",") === "low,high" && this.points.forEach((e) => {
		let t = e.high, n = e.plotY;
		e.isNull ? e.plotY = void 0 : (e.plotLow = n, e.plotHigh = s(t) ? this.yAxis.translate(this.dataModify ? this.dataModify.modifyValue(t) : t, !1, !0, void 0, !0) : void 0, this.dataModify && (e.yBottom = e.plotHigh));
	});
}, { order: 0 }), m(z, "afterTranslate", function() {
	this.points.forEach((e) => {
		if (this.chart.polar) this.highToXY(e), e.plotLow = e.plotY, e.tooltipPos = [((e.plotHighX || 0) + (e.plotLowX || 0)) / 2, ((e.plotHigh || 0) + (e.plotLow || 0)) / 2];
		else {
			let t = e.pos(!1, void 0, e.plotLow), n = e.pos(!1, void 0, e.plotHigh);
			t && n && (t[0] = (t[0] + n[0]) / 2, t[1] = (t[1] + n[1]) / 2), e.tooltipPos = t;
		}
	});
}, { order: 3 }), g(z.prototype, {
	deferTranslatePolar: !0,
	pointArrayMap: ["low", "high"],
	pointClass: ee,
	pointValKey: "low",
	setStackedPoints: te
}), F.compose(z), E.registerSeriesType("arearange", z);
//#endregion
//#region node_modules/highcharts/es-modules/Series/AreaSplineRange/AreaSplineRangeSeries.js
var { spline: { prototype: re } } = E.seriesTypes, B = class extends z {};
B.defaultOptions = n(z.defaultOptions), g(B.prototype, { getPointSpline: re.getPointSpline }), E.registerSeriesType("areasplinerange", B);
//#endregion
//#region node_modules/highcharts/es-modules/Series/ColumnRange/ColumnRangePoint.js
var { seriesTypes: { column: { prototype: { pointClass: { prototype: ie } } }, arearange: { prototype: { pointClass: ae } } } } = E, V = class extends ae {
	isValid() {
		return s(this.low);
	}
};
g(V.prototype, { setState: ie.setState });
//#endregion
//#region node_modules/highcharts/es-modules/Series/ColumnRange/ColumnRangeSeriesDefaults.js
var oe = {
	borderRadius: { where: "all" },
	pointRange: null,
	legendSymbol: "rectangle",
	marker: null,
	states: { hover: { halo: !1 } }
}, { noop: se } = _, { seriesTypes: { arearange: H, column: ce, column: { prototype: U } } } = E, W = class extends H {
	setOptions() {
		return n(!0, arguments[0], { stacking: void 0 }), H.prototype.setOptions.apply(this, arguments);
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
		let e = this.yAxis, t = this.xAxis, r = t.startAngleRad, i = this.chart, o = this.xAxis.isRadial, c = Math.max(i.chartWidth, i.chartHeight) + 999, l, u, d, f;
		function p(e) {
			return C(e, -c, c);
		}
		this.points.forEach((c) => {
			let m = c.shapeArgs || {}, h = this.options.minPointLength, g = c.plotY, _ = e.translate(c.high, 0, 1, 0, 1);
			if (s(_) && s(g)) {
				if (c.plotHigh = p(_), c.plotLow = p(g), f = c.plotHigh, l = a(c.rectPlotY, c.plotY) - c.plotHigh, Math.abs(l) < h ? (u = h - l, l += u, f -= u / 2) : l < 0 && (l *= -1, f -= l), o && this.polar) d = c.barX + r, c.shapeType = "arc", c.shapeArgs = this.polar.arc(f + l, f, d, d + (c.pointWidth || 0));
				else {
					m.height = l, m.y = f;
					let { x: r = 0, width: a = 0 } = m;
					c.shapeArgs = n(c.shapeArgs, this.crispCol(r, f, a, l)), c.tooltipPos = i.inverted ? [
						e.len + e.pos - i.plotLeft - f - l / 2,
						t.len + t.pos - i.plotTop - r - a / 2,
						l
					] : [
						t.left - i.plotLeft + r + a / 2,
						e.pos - i.plotTop + f + l / 2,
						l
					];
				}
			}
		});
	}
};
W.defaultOptions = n(ce.defaultOptions, H.defaultOptions, oe), m(W, "afterColumnTranslate", function() {
	W.prototype.afterColumnTranslate.apply(this);
}, { order: 5 }), g(W.prototype, {
	directTouch: !0,
	pointClass: V,
	trackerGroups: ["group", "dataLabelsGroup"],
	adjustForMissingColumns: U.adjustForMissingColumns,
	animate: U.animate,
	crispCol: U.crispCol,
	drawGraph: se,
	drawPoints: U.drawPoints,
	getSymbol: se,
	drawTracker: U.drawTracker,
	getColumnMetrics: U.getColumnMetrics
}), E.registerSeriesType("columnrange", W);
//#endregion
//#region node_modules/highcharts/es-modules/Extensions/Pane/PaneComposition.js
function le(e) {
	let t = this, n;
	return e && t.pane.forEach((r) => {
		G(e.chartX - t.plotLeft, e.chartY - t.plotTop, r.center) && (n = r);
	}), n;
}
function ue(e, t) {
	let n = e.prototype;
	n.getHoverPane || (n.collectionsWithUpdate.push("pane"), n.getHoverPane = le, m(e, "afterIsInsidePlot", de), m(t, "afterGetHoverData", fe), m(t, "beforeGetHoverData", pe));
}
function G(e, t, n, r, i) {
	let a = !0, o = n[0], s = n[1], c = 2 * Math.PI, l = Math.sqrt((e - o) ** 2 + (t - s) ** 2);
	if (S(r) && S(i)) {
		let n = Math.atan2(u(t - s, 8), u(e - o, 8));
		n = (n + c) % c, r = (r + c) % c, i = (i + c) % c, Math.abs(i - r) > 1e-6 && (a = r > i ? n >= r || n <= i : n >= r && n <= i);
	} else a = !0;
	return l <= Math.ceil(n[2] / 2) && a;
}
function de(e) {
	let t = this;
	t.polar && (e.options.inverted && ([e.x, e.y] = [e.y, e.x]), e.isInsidePlot = t.pane.some((t) => G(e.x, e.y, t.center, t.axis && t.axis.normalizedStartAngleRad, t.axis && t.axis.normalizedEndAngleRad)));
}
function fe(e) {
	let t = this.chart;
	e.hoverPoint && e.hoverPoint.plotX && e.hoverPoint.plotY && t.hoverPane && !G(e.hoverPoint.plotX, e.hoverPoint.plotY, t.hoverPane.center) && (e.hoverPoint = void 0);
}
function pe(e) {
	let t = this.chart;
	t.polar ? (t.hoverPane = t.getHoverPane(e), e.filter = function(n) {
		return n.visible && !(!e.shared && n.directTouch) && a(n.options.enableMouseTracking, !0) && (!t.hoverPane || n.xAxis.pane === t.hoverPane);
	}) : t.hoverPane = void 0;
}
var me = { compose: ue }, { defaultOptions: he } = d, ge = {
	shape: "arc",
	borderRadius: void 0,
	borderWidth: 0,
	borderColor: "var(--highcharts-neutral-color-20)",
	backgroundColor: "var(--highcharts-neutral-color-3)",
	from: -Number.MAX_VALUE,
	to: Number.MAX_VALUE,
	outerRadius: "100%"
}, _e = {
	borderRadius: 3,
	margin: void 0
};
he.pane = _e;
var ve = {
	pane: _e,
	background: ge
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
		this.options = n(ve.pane, this.chart.angular ? {
			background: {},
			innerSize: "85%"
		} : {}, e);
	}
	render() {
		let e = this.options, t = this.chart.renderer;
		this.group ||= t.g("pane-group").attr({ zIndex: e.zIndex || 0 }).add(), this.updateCenter();
		let r = this.options.background;
		if (r) {
			r = y(r);
			let e = Math.max(r.length, this.background.length || 0);
			for (let t = 0; t < e; t++) r[t] && this.axis ? this.renderBackground(n(ve.background, { borderRadius: this.options.borderRadius }, r[t]), t) : this.background[t] && (this.background[t] = this.background[t].destroy(), this.background.splice(t, 1));
		}
	}
	renderBackground(e, t) {
		let n = { class: "highcharts-pane " + (e.className || "") }, r = "animate";
		this.chart.styledMode || g(n, {
			fill: e.backgroundColor,
			stroke: e.borderColor,
			"stroke-width": e.borderWidth
		}), this.background[t] || (this.background[t] = this.chart.renderer.path().add(this.group), r = "attr"), this.background[t][r]({ d: this.axis.getPlotBandPath(e.from, e.to, e) }).attr(n);
	}
	updateCenter() {
		let { axis: e, chart: t, options: n } = this, { plotHeight: r, plotWidth: a } = t, o = n.center?.[1], c = n.margin, l = this.axis?.options.labels, u = n.thickness, d = Array.isArray(c) ? c : [
			c,
			c,
			c,
			c
		], p = [], m = n.size, h, g = 0, _ = 0, v = Math.min(t.series.reduce((e, t) => {
			if (!t.is("gauge") || t.yAxis?.pane !== this) return e;
			let n = y(t.options.dataLabels)[0], r = 0;
			return n && n.enabled !== !1 && (r = (1 - i(n.verticalAlign)) * 30 + (n.y || 0)), Math.max(e, r);
		}, 0), r * .3);
		if (l?.enabled) {
			let e = String(l.style?.fontSize || ""), t = (/px$/.test(e) ? parseFloat(e) : /em$/.test(e) ? parseFloat(e) * 12 : 12) * 1.2;
			_ = Math.max(l.distance || 0, 0) + t / 2;
		}
		if (d.forEach((e, t) => {
			p[t] = e ?? Math.max(_ || 0);
		}), e && (m === void 0 || o === void 0)) {
			let { endAngleRad: t, startAngleRad: i } = e, o = Math.PI * 2 / 360, s = i < Math.PI / 2 && t > Math.PI / 2 || y(n.background).some((e) => e?.shape === "circle") ? Math.PI : Math.max(Math.abs(i + Math.PI / 2), Math.abs(t + Math.PI / 2)), c = Math.sin(s - Math.PI / 2), l = .5 + .5 * Math.max(c, Math.sin(o * 0));
			if (h = (r - p[0] - p[2]) / l, m === void 0) {
				m = Math.max(Math.min(h, a - p[1] - p[3]), 1);
				let e = m + p[0] + p[2] + 2 * (v - r);
				e > 0 && (g = e, m = Math.max(1, m - g));
			}
		}
		this.center = (e || {}).center = A.getCenter.call(this), s(m) && m >= 0 && (this.center[2] = m, s(u) ? this.center[3] = this.center[2] - u * 2 : this.center[3] = Math.min(m, f(n.innerSize || 0, m))), S(o) || (n.size ? this.center[1] = r / 2 : s(h) && (this.center[1] = (h + this.center[2] - g) / 4 + p[0]));
	}
	update(e, t) {
		n(!0, this.options, e), this.setOptions(this.options), this.render(), this.chart.axes.forEach(function(e) {
			e.pane === this && (e.pane = null, e.update({}, t));
		}, this);
	}
};
K.compose = me.compose;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Axis/RadialAxisDefaults.js
var ye = {
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
}, { defaultOptions: q } = d, { composed: be, noop: J } = _, xe;
(function(t) {
	t.radialDefaultOptions = n(ye);
	function i() {
		this.autoConnect = this.isCircular && a(this.userMax, this.options.max) === void 0 && u(this.endAngleRad - this.startAngleRad) === u(2 * Math.PI), !this.isCircular && this.chart.inverted && this.max++, this.autoConnect && s(this.max) && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0);
	}
	function o(t, n) {
		return e(be, "Axis.Radial") && (m(t, "afterInit", k), m(t, "afterTickSize", A), m(t, "autoLabelAlign", M), m(t, "destroy", N), m(t, "init", ee), m(t, "initialAxisTranslation", P), m(n, "afterGetLabelPosition", F), m(n, "afterGetPosition", te), m(_, "setOptions", I), b(t.prototype, "getMinorTickInterval", B), b(n.prototype, "getMarkPath", ie)), t;
	}
	t.compose = o;
	function l() {
		return () => {
			if (this.isRadial && this.tickPositions && this.options.labels && this.options.labels.allowOverlap !== !0) return this.tickPositions.map((e) => this.ticks[e]?.label).filter((e) => !!e);
		};
	}
	function d() {
		return J;
	}
	function p(e, t, n) {
		let r = this.pane.center, i = e.value, a, o, s, c;
		return this.isCircular ? (S(i) ? e.point && (a = e.point.shapeArgs || {}, a.start && (i = this.chart.inverted ? this.translate(e.point.rectPlotY, !0) : e.point.x)) : (s = e.chartX || 0, c = e.chartY || 0, i = this.translate(Math.atan2(c - n, s - t) - this.startAngleRad, !0)), o = this.getPosition(i), s = o.x, c = o.y) : (S(i) || (s = e.chartX, c = e.chartY), S(s) && S(c) && (n = r[1] + this.chart.plotTop, i = this.translate(Math.min(Math.sqrt((s - t) ** 2 + (c - n) ** 2), r[2] / 2) - r[3] / 2, !0))), [
			i,
			s || 0,
			c || 0
		];
	}
	function h(e, t, n) {
		let r = this.pane.center, i = this.chart, o = this.left || 0, s = this.top || 0, c, l, u = a(t, r[2] / 2 - this.offset);
		return n ??= this.horiz ? 0 : this.center && -this.center[3] / 2, n && n > 0 && (u += n), this.isCircular || t !== void 0 ? (l = this.chart.renderer.symbols.arc(o + r[0], s + r[1], u, u, {
			start: this.startAngleRad,
			end: this.endAngleRad,
			open: !0,
			innerR: 0
		}), l.xBounds = [o + r[0]], l.yBounds = [s + r[1] - u]) : (c = this.postTranslate(this.angleRad, u), l = [[
			"M",
			this.center[0] + i.plotLeft,
			this.center[1] + i.plotTop
		], [
			"L",
			c.x,
			c.y
		]]), l;
	}
	function v() {
		this.constructor.prototype.getOffset.call(this);
		let e = this.options.offset ?? (this.pane.hasSeriesType("gauge") ? "-20%" : void 0);
		S(e) && (this.offset = f(e, this.center[2] / 2) * -1), this.chart.axisOffset[this.side] = 0;
	}
	function x(e, t, n) {
		let r = this.chart, i = (e) => {
			if (typeof e == "string") {
				let t = parseInt(e, 10);
				return h.test(e) && (t = t * d / 100), t;
			}
			return e;
		}, o = this.center, { endAngleRad: c, startAngleRad: l } = this, u = j(n.borderRadius ?? this.pane.options.borderRadius), d = o[2] / 2, f = Math.min(this.offset || 0, 0), p = this.left || 0, m = this.top || 0, h = /%$/, g = this.isCircular, _ = this.options.plotBands || [], v = _.indexOf(n), y, b, x, S, C, w, T = a(i(n.outerRadius), d), E = i(n.innerRadius), D = i(n.thickness), O = !0, k = !0;
		if (u.radius && u.scope === "stack" && v > -1 && (_[v - 1] && _[v - 1].to === e && (O = !1), _[v + 1] && _[v + 1].from === t && (k = !1)), this.options.gridLineInterpolation === "polygon") w = this.getPlotLinePath({ value: e }).concat(this.getPlotLinePath({
			value: t,
			reverse: !0
		}));
		else {
			s(this.min) && (e = Math.max(e, this.min)), s(this.max) && (t = Math.min(t, this.max));
			let i = this.translate(e), d = this.translate(t);
			g || (T = i || 0, E = d || 0), !s(this.min) && !s(this.max) && !n.color && !n.className ? (y = l, b = c) : n.shape === "circle" || !g ? (y = -Math.PI / 2, b = Math.PI * 1.5, C = !0) : (y = l + (i || 0), b = l + (d || 0)), T -= f, s(D) && (D -= f), w = r.renderer.symbols.arc(p + o[0], m + o[1], T, T, {
				start: Math.min(y, b),
				end: Math.max(y, b),
				innerR: a(E, s(D) ? T - D : void 0, this.center[3] / 2),
				open: C,
				borderRadius: u.radius,
				brStart: O,
				brEnd: k
			}), g && (x = (b + y) / 2, S = p + o[0] + o[2] / 2 * Math.cos(x), w.xBounds = x > -Math.PI / 2 && x < Math.PI / 2 ? [S, r.plotWidth] : [0, S], w.yBounds = [m + o[1] + o[2] / 2 * Math.sin(x)], w.yBounds[0] += x > -Math.PI && x < 0 || x > Math.PI ? -10 : 10);
		}
		return w;
	}
	function w(e) {
		let t = this.pane.center, n = this.chart, r = n.inverted, i = e.reverse, a = this.pane.options.background, o = a ? y(a)[0] : {}, s = o.innerRadius || "0%", c = o.outerRadius || "100%", l = t[0] + n.plotLeft, u = t[1] + n.plotTop, d = this.height, p = e.isCrosshair, m = t[3] / 2, h = n.time.parse(e.value) || 0, g, _, v, b, x, S, w, T, E, D = this.getPosition(h, t[2] / 2 + (this.isCircular ? this.offset : 0)), O = D.x, k = D.y;
		if (p && (T = this.getCrosshairPosition(e, l, u), h = T[0] || 0, O = T[1], k = T[2]), this.isCircular) _ = Math.sqrt((O - l) ** 2 + (k - u) ** 2), v = typeof s == "string" ? f(s, 1) : s / _, b = typeof c == "string" ? f(c, 1) : c / _, t && m && (g = m / _, v < g && (v = g), b < g && (b = g)), E = [[
			"M",
			l + v * (O - l),
			u - v * (u - k)
		], [
			"L",
			O - (1 - b) * (O - l),
			k + (1 - b) * (u - k)
		]];
		else {
			let e = C(this.translate(h), 0, d);
			if (this.options.gridLineInterpolation === "circle") E = this.getLinePath(0, e, m);
			else if (E = [], n[r ? "yAxis" : "xAxis"].forEach((e) => {
				e.pane === this.pane && (x = e);
			}), x) {
				w = x.tickPositions, x.autoConnect && (w = w.concat([w[0]])), i && (w = w.slice().reverse()), e && (e += m);
				for (let t = 0; t < w.length; t++) S = x.getPosition(w[t], e), E.push(t ? [
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
		return E;
	}
	function T(e, t) {
		let n = this.translate(e);
		return this.postTranslate(this.isCircular ? n : this.angleRad, a(this.isCircular ? t : n < 0 ? 0 : n, this.center[2] / 2) - this.offset);
	}
	function E() {
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
	function D(e) {
		e.beforeSetTickPositions = i, e.createLabelCollector = l, e.getCrosshairPosition = p, e.getLinePath = h, e.getOffset = v, e.getPlotBandPath = x, e.getPlotLinePath = w, e.getPosition = T, e.getTitlePosition = E, e.postTranslate = L, e.setAxisSize = ne, e.setAxisTranslation = z, e.setOptions = re;
	}
	function O(e) {
		e.isHidden = !0, e.createLabelCollector = d, e.getOffset = J, e.redraw = R, e.render = R, e.setCategories = J, e.setTitle = J;
	}
	function k() {
		let e = this.chart, t = this.options, n = e.angular && this.isXAxis, r = this.pane, i = r?.options;
		if (!n && r && (e.angular || e.polar)) {
			let n = Math.PI * 2, r = i.startAngle ?? (e.angular ? -135 : 0), o = (r - 90) * Math.PI / 180, s = (a(i.endAngle, r + (e.angular ? 270 : 360)) - 90) * Math.PI / 180;
			this.angleRad = (t.angle || 0) * Math.PI / 180, this.startAngleRad = o, this.endAngleRad = s;
			let c = (o % n + n) % n, l = (s % n + n) % n;
			c > Math.PI && (c -= n), l > Math.PI && (l -= n), this.normalizedStartAngleRad = c, this.normalizedEndAngleRad = l;
		}
	}
	function A(e) {
		if (this.chart.angular) {
			let { options: t, pane: n } = this;
			n.hasSeriesType("gauge") && (e.tickSize = [t[`${e.prefix}Length`] ?? 10, t[`${e.prefix}Width`] ?? 1], t[`${e.prefix}Position`] === "inside" && (e.tickSize[0] *= -1));
		}
	}
	function M(e) {
		this.isRadial && (e.align = void 0, e.preventDefault());
	}
	function N() {
		if (this.chart?.labelCollectors) {
			let e = this.labelCollector ? this.chart.labelCollectors.indexOf(this.labelCollector) : -1;
			e >= 0 && this.chart.labelCollectors.splice(e, 1);
		}
	}
	function ee(e) {
		let t = this.chart, n = t.angular, r = t.polar, i = this.isXAxis, a = this.coll, o = n && i, s = e.userOptions.pane || 0, c = this.pane = t.pane && t.pane[s], l;
		if (a === "colorAxis") {
			this.isRadial = !1;
			return;
		}
		n ? (o ? O(this) : D(this), l = !i) : r && (D(this), l = this.horiz), n || r ? (this.isRadial = !0, this.labelCollector ||= this.createLabelCollector(), this.labelCollector && t.labelCollectors.push(this.labelCollector)) : this.isRadial = !1, c && l && (c.axis = this), this.isCircular = l;
	}
	function P() {
		this.isRadial && this.beforeSetTickPositions?.();
	}
	function F(e) {
		let t = this.label;
		if (!t) return;
		let n = this.axis, r = t.getBBox(), i = n.options.labels, a = (n.translate(this.pos) + n.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360, o = Math.round(a), s = S(i.y) ? 0 : -r.height * .3, c = i.y, l, u = 20, d = i.align, p = "end", m = o < 0 ? o + 360 : o, h = m, g = 0, _ = 0;
		n.isRadial && (l = n.getPosition(this.pos, n.center[2] / 2 + f(i.distance ?? -25, n.center[2] / 2) + n.offset), i.rotation === "auto" ? t.attr({ rotation: a }) : S(c) || (c = n.chart.renderer.fontMetrics(t).b - r.height / 2), S(d) || (n.isCircular ? (r.width > n.len * n.tickInterval / (n.max - n.min) && (u = 0), d = a > u && a < 180 - u ? "left" : a > 180 + u && a < 360 - u ? "right" : "center") : d = "center", t.attr({ align: d })), d === "auto" && n.tickPositions.length === 2 && n.isCircular && (m > 90 && m < 180 ? m = 180 - m : m > 270 && m <= 360 && (m = 540 - m), h > 180 && h <= 360 && (h = 360 - h), (n.pane.options.startAngle === o || n.pane.options.startAngle === o + 360 || n.pane.options.startAngle === o - 360) && (p = "start"), d = o >= -90 && o <= 90 || o >= -360 && o <= -270 || o >= 270 && o <= 360 ? p === "start" ? "right" : "left" : p === "start" ? "left" : "right", h > 70 && h < 110 && (d = "center"), m < 15 || m >= 180 && m < 195 ? g = r.height * .3 : m >= 15 && m <= 35 ? g = p === "start" ? 0 : r.height * .75 : m >= 195 && m <= 215 ? g = p === "start" ? r.height * .75 : 0 : m > 35 && m <= 90 ? g = p === "start" ? -r.height * .25 : r.height : m > 215 && m <= 270 && (g = p === "start" ? r.height : -r.height * .25), h < 15 ? _ = p === "start" ? -r.height * .15 : r.height * .15 : h > 165 && h <= 180 && (_ = p === "start" ? r.height * .15 : -r.height * .15), t.attr({ align: d }), t.translate(_, g + s)), e.pos.x = l.x + (i.x || 0), e.pos.y = l.y + (c || 0));
	}
	function te(e) {
		this.axis.getPosition && g(e.pos, this.axis.getPosition(this.pos));
	}
	function I({ options: e }) {
		e.xAxis && n(!0, t.radialDefaultOptions.circular, e.xAxis), e.yAxis && n(!0, t.radialDefaultOptions.radialGauge, e.yAxis);
	}
	function L(e, t) {
		let n = this.chart, r = this.center;
		return e = this.startAngleRad + e, {
			x: n.plotLeft + r[0] + Math.cos(e) * t,
			y: n.plotTop + r[1] + Math.sin(e) * t
		};
	}
	function R() {
		this.isDirty = !1;
	}
	function ne() {
		let e = this.constructor.prototype, t, n;
		e.setAxisSize.call(this), this.isRadial && (this.pane.updateCenter(), t = this.center = this.pane.center.slice(), this.isCircular ? (this.sector = this.endAngleRad - this.startAngleRad, this.len = this.width = this.height = t[2] * this.sector / 2) : (n = this.postTranslate(this.angleRad, t[3] / 2), t[0] = n.x - this.chart.plotLeft, t[1] = n.y - this.chart.plotTop, this.len = this.width = this.height = (t[2] - t[3]) / 2));
	}
	function z() {
		this.constructor.prototype.setAxisTranslation.call(this), this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : (this.center[2] - this.center[3]) / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0);
	}
	function re(e) {
		let { coll: i } = this, { angular: a, inverted: o, polar: s } = this.chart, l = {};
		a ? this.isXAxis || (l = n(q.yAxis, t.radialDefaultOptions.radialGauge)) : s && (l = this.horiz ? n(q.xAxis, t.radialDefaultOptions.circular) : n(i === "xAxis" ? q.xAxis : q.yAxis, t.radialDefaultOptions.radial)), o && i === "yAxis" && (l.stackLabels = c(q.yAxis, !0) ? q.yAxis.stackLabels : {}, l.reversedStacks = !0);
		let u = this.options = n(l, e);
		u.plotBands ||= [], r(this, "afterSetOptions");
	}
	function B(e) {
		return !S(this.options.minorTicks) && this.pane.hasSeriesType("gauge") ? "auto" : e.apply(this, Array.prototype.slice.call(arguments, 1));
	}
	function ie(e, t, n, r, i, a, o) {
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
})(xe ||= {});
var Se = xe, { defaultOptions: Ce } = d, { composed: we } = _;
function Te(e, t, n, r, i) {
	let a = v(), o = e.createElement("clipPath").attr({ id: a }).add(e.defs), s = i ? e.arc(t, n, r, i, 0, 2 * Math.PI).add(o) : e.circle(t, n, r).add(o);
	return s.id = a, s.clipPath = o, s;
}
function Ee(e, t) {
	let n, r;
	return t.align === null && (n = e > 20 && e < 160 ? "left" : e > 200 && e < 340 ? "right" : "center", t.align = n), t.verticalAlign === null && (r = e < 45 || e > 315 ? "bottom" : e > 135 && e < 225 ? "top" : "middle", t.verticalAlign = r), t;
}
function De(e, t, n, r) {
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
	return n && (D.prevPointCont = De(e, p, !1, r)), D;
}
function Oe() {
	(this.pane || []).forEach((e) => {
		e.render();
	});
}
function ke(e) {
	let t = e.args[0].xAxis, n = e.args[0].yAxis, r = e.args[0].chart;
	t && n && (n.gridLineInterpolation === "polygon" ? (t.startOnTick = !0, t.endOnTick = !0) : t.gridLineInterpolation === "polygon" && r.inverted && (n.startOnTick = !0, n.endOnTick = !0));
}
function Ae() {
	this.pane ||= [], this.options.pane = y(this.options.pane || {}), y(this.userOptions.pane || {}).forEach((e) => {
		new K(e, this);
	}, this);
}
function je(e) {
	let t = e.args.marker, n = this.chart.xAxis[0], r = this.chart.yAxis[0], i = this.chart.inverted, a = i ? r : n, o = i ? n : r;
	if (this.chart.polar) {
		e.preventDefault();
		let n = (t.attr ? t.attr("start") : t.start) - a.startAngleRad, r = t.attr ? t.attr("r") : t.r, i = (t.attr ? t.attr("end") : t.end) - a.startAngleRad, s = t.attr ? t.attr("innerR") : t.innerR;
		e.result.x = n + a.pos, e.result.width = i - n, e.result.y = o.len + o.pos - r, e.result.height = r - s;
	}
}
function Me(e) {
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
function Ne() {
	let e = this.chart;
	e.polar && (this.polar = new Ke(this), e.inverted && (this.isRadialSeries = !0, this.is("column") && (this.isRadialBar = !0)));
}
function Pe() {
	let { chart: e, options: t, yAxis: n } = this;
	if (t.borderRadius && e.polar && e.inverted) {
		let e = Ce.plotOptions?.[this.type]?.borderRadius, { scope: r, where: i = "end" } = j(t.borderRadius, c(e) ? e : {});
		for (let e of this.points) {
			let { shapeArgs: a } = e;
			if (e.shapeType === "arc" && a) {
				let o = i === "all", s = !0;
				t.stacking && r === "stack" && (o = e.stackY === e.y && i === "all", s = e.stackY === e.stackTotal), n.reversed && ([o, s] = [s, o]), a.brStart = o, a.brEnd = s;
			}
		}
	}
}
function Fe() {
	if (this.chart.polar && this.xAxis) {
		let e = this, { xAxis: t, yAxis: n } = e, r = e.chart;
		e.kdByAngle = r.tooltip && r.tooltip.shared, e.kdByAngle || r.inverted ? e.searchPoint = Ie : e.options.findNearestPointBy = "xy";
		let i = e.points, o = i.length;
		for (; o--;) !e.is("column") && !e.is("columnrange") && e.polar.toXY(i[o]), !r.hasParallelCoordinates && !e.yAxis.reversed && (a(i[o].y, Number.MIN_VALUE) < n.min || i[o].x < t.min || i[o].x > t.max ? (i[o].isNull = !0, i[o].plotY = NaN) : i[o].isNull = i[o].isValid && !i[o].isValid());
		this.hasClipCircleSetter ||= !!e.eventsToUnbind.push(m(e, "afterRender", function() {
			let e;
			r.polar && this.options.clip !== !1 && (e = this.yAxis.pane.center, this.clipCircle ? this.clipCircle.animate({
				x: e[0],
				y: e[1],
				r: e[2] / 2,
				innerR: e[3] / 2
			}) : this.clipCircle = Te(r.renderer, e[0], e[1], e[2] / 2, e[3] / 2), this.group.clip(this.clipCircle), this.setClip = _.noop);
		}));
	}
}
function Ie(e) {
	let t = this, n = t.chart, r = t.xAxis, i = t.yAxis, a = r.pane && r.pane.center, o = e.chartX - (a && a[0] || 0) - n.plotLeft, s = e.chartY - (a && a[1] || 0) - n.plotTop, c = n.inverted ? {
		clientX: e.chartX - i.pos,
		plotY: e.chartY - r.pos
	} : { clientX: 180 + -180 / Math.PI * Math.atan2(o, s) };
	return t.searchKDTree(c);
}
function Y(e, t, n, r) {
	let i = r.tickInterval, a = r.tickPositions, o = h(a, (e) => e >= n), s = h([...a].reverse(), (e) => e <= t);
	return S(o) || (o = a[a.length - 1]), S(s) || (s = a[0], o += i, e[0][0] = "L", e.unshift(e[e.length - 3])), e = e.slice(a.indexOf(s), a.indexOf(o) + 1), e[0][0] = "M", e;
}
function Le(e, t) {
	return h(this.pane || [], (e) => e.options.id === t) || e.call(this, t);
}
function Re(e, t, r, i, o, s) {
	let c = this.chart, l = a(i.inside, !!this.options.stacking), u, d, f;
	c.polar ? (u = t.rectPlotX / Math.PI * 180, c.inverted ? (this.forceDL = c.isInsidePlot(t.plotX, t.plotY), l && t.shapeArgs ? (d = t.shapeArgs, f = this.yAxis.postTranslate(((d.start || 0) + (d.end || 0)) / 2 - this.xAxis.startAngleRad, t.barX + (t.pointWidth || 0) / 2), o = n(o, {
		x: f.x - c.plotLeft,
		y: f.y - c.plotTop
	})) : t.tooltipPos && (o = n(o, {
		x: t.tooltipPos[0],
		y: t.tooltipPos[1]
	})), i.align = a(i.align, "center"), i.verticalAlign = a(i.verticalAlign, "middle")) : i = Ee(u, i), D.prototype.alignDataLabel.call(this, t, r, i, o, s), this.isRadialBar && t.shapeArgs && t.shapeArgs.start === t.shapeArgs.end ? r.hide() : r.show()) : e.call(this, t, r, i, o, s);
}
function ze() {
	let e = this, { chart: t, options: n, xAxis: r, yAxis: i } = e, a = n.stacking, { center: o, reversed: c } = i, { endAngleRad: l, startAngleRad: u } = r, d = l - u, p = n.threshold, m = 0, h, g, _, v, y, b = 0, x = 0, w, T, E, D, O, k, A, M;
	if (r.isRadial) for (h = e.points, _ = h.length, v = i.translate(i.min), y = i.translate(i.max), p = n.threshold || 0, t.inverted && s(p) && (m = i.translate(p), S(m) && (m < 0 ? m = 0 : m > d && (m = d), e.translatedThreshold = m + u)); _--;) {
		if (g = h[_], k = g.barX, T = g.x, E = g.y, g.shapeType = "arc", t.inverted) {
			g.plotY = i.translate(E), a && i.stacking ? (O = i.stacking.stacks[(E < 0 ? "-" : "") + e.stackKey], e.visible && O && O[T] && (g.isNull || (D = O[T].points[e.getStackIndicator(void 0, T, e.index).key], b = i.translate(D[0]), x = i.translate(D[1]), S(b) && (b = C(b, 0, d))))) : (b = m, x = g.plotY), b > x && (x = [b, b = x][0]), c ? x > v ? x = v : b < y ? b = y : (b > v || x < y) && (b = x = d) : b < v ? b = v : x > y ? x = y : (x < v || b > y) && (b = x = 0), i.min > i.max && (b = x = c ? d : 0), b += u, x += u, o && (g.barX = k += o[3] / 2), A = Math.max(k, 0), M = Math.max(k + (g.pointWidth || 0), 0);
			let t = j(n.borderRadius), r = f(t.radius, M - A);
			g.shapeArgs = {
				x: o[0],
				y: o[1],
				r: M,
				innerR: A,
				start: b,
				end: x,
				borderRadius: r
			}, g.opacity = b === x ? 0 : void 0, g.plotY = (S(e.translatedThreshold) && (b < e.translatedThreshold ? b : x)) - u;
		} else b = k + u, g.shapeArgs = e.polar.arc(g.yBottom, g.plotY, b, b + (g.pointWidth || 0)), g.shapeArgs.borderRadius = 0;
		e.polar.toXY(g), t.inverted ? (w = i.postTranslate(g.rectPlotY, k + (g.pointWidth || 0) / 2), g.tooltipPos = [w.x - t.plotLeft, w.y - t.plotTop]) : g.tooltipPos = [g.plotX, g.plotY], o && (g.ttBelow = g.plotY > o[1]);
	}
}
function Be(e, t) {
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
function Ve(e, t) {
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
function He(e, t) {
	this.chart.polar || e.call(this, t);
}
function Ue(e, t) {
	let n = this, r = this.chart, i = this.group, o = this.markerGroup, s = this.xAxis && this.xAxis.center, c = r.plotLeft, l = r.plotTop, u = this.options.animation, d, f, p, m, h, g;
	r.polar ? n.isRadialBar ? t || (n.startAngleRad = a(n.translatedThreshold, n.xAxis.startAngleRad), _.seriesTypes.pie.prototype.animate.call(n, t)) : (u = x(u), n.is("column") ? t || (f = s[3] / 2, n.points.forEach((e) => {
		p = e.graphic, m = e.shapeArgs, h = m && m.r, g = m && m.innerR, p && m && (p.attr({
			r: f,
			innerR: f
		}), p.animate({
			r: h,
			innerR: g
		}, n.options.animation));
	})) : t ? (d = {
		translateX: s[0] + c,
		translateY: s[1] + l,
		scaleX: .001,
		scaleY: .001
	}, i.attr(d), o && o.attr(d)) : (d = {
		translateX: c,
		translateY: l,
		scaleX: 1,
		scaleY: 1
	}, i.animate(d, u), o && o.animate(d, u))) : e.call(this, t);
}
function We(e, t, n, r) {
	let i, a;
	if (this.chart.polar) {
		if (!r) i = [
			"M",
			n.plotX,
			n.plotY
		];
		else {
			a = De(t, r, !0, this.connectEnds);
			let e = a.prevPointCont && a.prevPointCont.rightContX, n = a.prevPointCont && a.prevPointCont.rightContY;
			i = [
				"C",
				s(e) ? e : a.plotX,
				s(n) ? n : a.plotY,
				s(a.leftContX) ? a.leftContX : a.plotX,
				s(a.leftContY) ? a.leftContY : a.plotY,
				a.plotX,
				a.plotY
			];
		}
	} else i = e.call(this, t, n, r);
	return i;
}
function Ge(e, t, n = this.plotX, r = this.plotY) {
	let { series: i } = this, { chart: a } = i || {};
	return a?.polar && s(n) && s(r) ? [n + (t ? a.plotLeft : 0), r + (t ? a.plotTop : 0)] : e.call(this, t, n, r);
}
var Ke = class {
	static compose(t, n, r, i, a, o, s, c, l, u) {
		if (K.compose(n, r), Se.compose(t, a), e(we, "Polar")) {
			let e = n.prototype, t = o.prototype, a = r.prototype, d = i.prototype;
			if (m(n, "afterDrawChartBox", Oe), m(n, "createAxes", Ae), m(n, "init", ke), b(e, "get", Le), b(a, "getCoordinates", Ve), b(a, "pinch", He), m(r, "getSelectionMarkerAttrs", Me), m(r, "getSelectionBox", je), m(i, "afterInit", Ne), m(i, "afterColumnTranslate", Pe, { order: 9 }), m(i, "afterTranslate", Fe, { order: 2 }), m(i, "afterColumnTranslate", ze, { order: 4 }), b(d, "animate", Ue), b(t, "pos", Ge), c) {
				let e = c.prototype;
				b(e, "alignDataLabel", Re), b(e, "animate", Ue);
			}
			if (l) {
				let e = l.prototype;
				b(e, "getGraphPath", Be);
			}
			if (u) {
				let e = u.prototype;
				if (b(e, "getPointSpline", We), s) {
					let t = s.prototype;
					t.getPointSpline = e.getPointSpline;
				}
			}
		}
	}
	constructor(e) {
		this.series = e;
	}
	arc(e, t, n, r) {
		let i = this.series, o = i.xAxis.center, s = i.yAxis.len, c = o[3] / 2, l = s - t + c, u = s - a(e, s) + c;
		return i.yAxis.reversed && (l < 0 && (l = c), u < 0 && (u = c)), {
			x: o[0],
			y: o[1],
			r: l,
			innerR: u,
			start: n,
			end: r
		};
	}
	toXY(e) {
		let t = this.series, n = t.chart, r = t.xAxis, i = t.yAxis, a = e.plotX, o = n.inverted, c = e.y, l = e.plotY, u = o ? a : i.len - l, d;
		if (o && t && !t.isRadialBar && (e.plotY = l = s(c) ? i.translate(c) : 0), e.rectPlotX = a, e.rectPlotY = l, i.center && (u += i.center[3] / 2), s(l)) {
			let t = o ? i.postTranslate(l, u) : r.postTranslate(a, u);
			e.plotX = e.polarPlotX = t.x - n.plotLeft, e.plotY = e.polarPlotY = t.y - n.plotTop;
		}
		t.kdByAngle ? (d = (a / Math.PI * 180 + (r.pane.options.startAngle || 0)) % 360, d < 0 && (d += 360), e.clientX = d) : e.clientX = e.plotX;
	}
}, { composed: qe } = _, Je;
(function(n) {
	function r(t, n) {
		e(qe, "Axis.Waterfall") && (m(t, "init", o), m(t, "afterBuildStacks", i), m(t, "afterRender", a), m(n, "beforeRedraw", s));
	}
	n.compose = r;
	function i() {
		let e = this.waterfall?.stacks;
		e && (e.changed = !1, delete e.alreadyChanged);
	}
	function a() {
		let e = this;
		e.options.stackLabels?.enabled && e.waterfall?.stacks && e.waterfall.renderStackTotals();
	}
	function o() {
		let e = this;
		e.waterfall ||= new c(e);
	}
	function s() {
		let e = this.axes, t = this.series;
		for (let n of t) if (n.options.stacking) {
			for (let t of e) !t.isXAxis && t.waterfall && (t.waterfall.stacks.changed = !0);
			break;
		}
	}
	class c {
		constructor(e) {
			this.axis = e, this.stacks = { changed: !1 };
		}
		renderStackTotals() {
			let e = this.axis, n = e.waterfall?.stacks, r = e.stacking?.stackTotalGroup, i = new k(e, e.options.stackLabels || {}, !1, 0, void 0);
			this.dummyStackItem = i, r && t(n, (e) => {
				t(e, (e, t) => {
					i.total = e.stackTotal, i.x = +t, e.label && (i.label = e.label), k.prototype.render.call(i, r), e.label = i.label, delete i.label;
				});
			}), i.total = null;
		}
	}
	n.Composition = c;
})(Je ||= {});
var Ye = Je, Xe = class extends O.prototype.pointClass {
	getClassName() {
		let e = T.prototype.getClassName.call(this);
		return this.isSum ? e += " highcharts-sum" : this.isIntermediateSum && (e += " highcharts-intermediate-sum"), e;
	}
	isValid() {
		return s(this.y) || this.isSum || !!this.isIntermediateSum;
	}
}, Ze = {
	dataLabels: { inside: !0 },
	lineWidth: 1,
	lineColor: "var(--highcharts-neutral-color-80)",
	dashStyle: "Dot",
	borderColor: "var(--highcharts-neutral-color-80)",
	states: { hover: { lineWidthPlus: 0 } }
}, { column: X, line: Qe } = E.seriesTypes;
function Z(e, t) {
	return Object.hasOwnProperty.call(e, t);
}
var Q = class extends X {
	generatePoints() {
		X.prototype.generatePoints.apply(this);
		let e = this.getColumn("y", !0);
		for (let t = 0, n = this.points.length; t < n; t++) {
			let n = this.points[t], r = e[t];
			s(r) && (n.isIntermediateSum || n.isSum) && (n.y = u(r));
		}
	}
	processData(e) {
		let t = this, n = t.options, r = t.getColumn("y"), i = t.getColumn("isSum"), a = t.getColumn("isIntermediateSum"), o = r.length, s = n.threshold || 0, c, l, d, f, p;
		l = c = d = f = 0;
		for (let e = 0; e < o; e++) p = r[e], p === "sum" || i[e] ? r[e] = u(l) : p === "intermediateSum" || a[e] ? (r[e] = u(c), c = 0) : (l += p, c += p), d = Math.min(l, d), f = Math.max(l, f);
		super.processData.call(this, e), n.stacking || (t.dataMin = d + s, t.dataMax = f);
	}
	toYData(e) {
		return e.isSum ? "sum" : e.isIntermediateSum ? "intermediateSum" : e.y;
	}
	pointAttribs(e, t) {
		let n = this.options.upColor;
		n && e && !e.options.color && s(e.y) && (e.color = e.y > 0 ? n : void 0);
		let r = X.prototype.pointAttribs.call(this, e, t);
		return delete r.dashstyle, r;
	}
	getGraphPath() {
		return this.graph?.pathArray || [[
			"M",
			0,
			0
		]];
	}
	getCrispPath() {
		let e = this.points.filter((e) => s(e.y)), t = this.yAxis, n = e.length, r = this.graph?.strokeWidth() || 0, i = this.xAxis.reversed, a = this.yAxis.reversed, c = this.options.stacking, l = [];
		for (let u = 1; u < n; u++) {
			if (!(this.options.connectNulls || s(this.data[e[u].index - 1].y))) continue;
			let n = e[u].box, d = e[u - 1], f = d.y || 0, p = e[u - 1].box;
			if (!n || !p) continue;
			let m = t.waterfall?.stacks[this.stackKey], h = f > 0 ? -p.height : 0;
			if (m && p && n) {
				let e = m[u - 1], s;
				s = o(c ? t.translate(e.connectorThreshold || 0, !1, !0, !1, !0) + (a ? h : 0) : p.y + (d.minPointLengthOffset || 0), r), l.push([
					"M",
					(p.x || 0) + (i ? 0 : p.width || 0),
					s
				], [
					"L",
					(n.x || 0) + (i && n.width || 0),
					s
				]);
			}
			if (p && l.length && (!c && f < 0 && !a || f > 0 && a)) {
				let e = l[l.length - 2];
				e && typeof e[2] == "number" && (e[2] += p.height || 0);
				let t = l[l.length - 1];
				t && typeof t[2] == "number" && (t[2] += p.height || 0);
			}
		}
		return l;
	}
	drawGraph() {
		Qe.prototype.drawGraph.call(this), this.graph?.animate({ d: this.getCrispPath() });
	}
	setStackedPoints(e) {
		let t = this, n = t.options, r = e.waterfall?.stacks, i = n.threshold || 0, a = t.stackKey, o = t.getColumn("x"), s = t.getColumn("y"), l = o.length, u = i, d = u, f, p = 0, m = 0, h = 0, g, _, v, y, b, x, S, C, w = (e, t, n, r) => {
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
			}), f = e[x], b = s[t], b >= 0 ? f.posTotal += b : f.negTotal += b, y = n.data?.[t], _ = f.absolutePos = f.posTotal, v = f.absoluteNeg = f.negTotal, f.stackTotal = _ + v, g = f.stackState.length, c(y, !0) && y.isIntermediateSum ? (w(h, m, 0, h), h = m, m = i, u ^= d, d ^= u, u ^= d) : c(y, !0) && y.isSum ? (w(i, p, g, 0), u = i) : (w(u, b, 0, p), y && (p += b, m += b)), f.stateIndex++, f.threshold = u, u += f.stackTotal;
			r.changed = !1, r.alreadyChanged ||= [], r.alreadyChanged.push(a);
		}
	}
	getExtremes() {
		let e = this.options.stacking, n = this.yAxis.waterfall?.stacks, r, i;
		return e && n ? (r = this.stackedYNeg = [], i = this.stackedYPos = [], e === "overlap" ? t(n[this.stackKey], function(e) {
			r.push(l(e.stackState)), i.push(p(e.stackState));
		}) : t(n[this.stackKey], function(e) {
			r.push(e.negTotal + e.threshold), i.push(e.posTotal + e.threshold);
		}), {
			dataMin: l(r),
			dataMax: p(i)
		}) : {
			dataMin: this.dataMin,
			dataMax: this.dataMax
		};
	}
};
Q.defaultOptions = n(X.defaultOptions, Ze), Q.compose = Ye.compose, g(Q.prototype, {
	pointValKey: "y",
	showLine: !0,
	pointClass: Xe
}), m(Q, "afterColumnTranslate", function() {
	let e = this, { options: t, points: r, yAxis: i } = e, c = a(t.minPointLength, 5), l = c / 2, u = t.threshold || 0, d = t.stacking, f = i.waterfall?.stacks[e.stackKey], p = e.getColumn("y", !0), m = u, h = u, _, v, y;
	for (let t = 0; t < r.length; t++) {
		let a = r[t], b = p[t], x = a.shapeArgs, S = g({
			x: 0,
			y: 0,
			width: 0,
			height: 0
		}, x || {});
		a.box = S;
		let C = [0, b], w = a.y || 0;
		if (d) {
			if (f) {
				let n = f[t];
				d === "overlap" ? (v = n.stackState[n.stateIndex--], _ = w >= 0 ? v : v - w, Z(n, "absolutePos") && delete n.absolutePos, Z(n, "absoluteNeg") && delete n.absoluteNeg) : (w >= 0 ? (v = n.threshold + n.posTotal, n.posTotal -= w, _ = v) : (v = n.threshold + n.negTotal, n.negTotal -= w, _ = v - w), n.posTotal || s(n.absolutePos) && Z(n, "absolutePos") && (n.posTotal = n.absolutePos, delete n.absolutePos), n.negTotal || s(n.absoluteNeg) && Z(n, "absoluteNeg") && (n.negTotal = n.absoluteNeg, delete n.absoluteNeg)), a.isSum || (n.connectorThreshold = n.threshold + n.stackTotal), y = _ - Math.abs(w), i.reversed && ([_, y] = [y, _]), a.below = _ <= u, S.y = i.translate(_, !1, !0, !1, !0), S.height = i.translate(y, !1, !0, !1, !0) - S.y;
				let r = i.waterfall?.dummyStackItem;
				r && (r.x = t, r.label = f[t].label, r.setOffset(e.pointXOffset || 0, e.barW || 0, e.stackedYNeg[t], e.stackedYPos[t], void 0, this.xAxis));
			}
		} else _ = Math.max(h, h + w) + C[0], S.y = i.translate(_, !1, !0, !1, !0), a.isSum ? (S.y = i.translate(C[1], !1, !0, !1, !0), S.height = Math.min(i.translate(C[0], !1, !0, !1, !0), i.len) - S.y, a.below = C[1] <= u) : a.isIntermediateSum ? (w >= 0 ? (_ = C[1] + m, y = m) : (_ = m, y = C[1] + m), i.reversed && ([_, y] = [y, _]), S.y = i.translate(_, !1, !0, !1, !0), S.height = Math.abs(S.y - Math.min(i.translate(y, !1, !0, !1, !0), i.len)), m += C[1], a.below = _ <= u) : (S.height = b > 0 ? i.translate(h, !1, !0, !1, !0) - S.y : i.translate(h + b, !1, !0, !1, !0) - i.translate(h, !1, !0, !1, !0), h += b, a.below = h < u);
		S.height < 0 && (S.y += S.height, S.height *= -1), a.plotY = S.y, a.yBottom = S.y + S.height, S.height <= c && !a.isNull ? (S.height = c, S.y -= l, a.yBottom = S.y + S.height, a.plotY = S.y, a.minPointLengthOffset = w < 0 ? -l : l) : (a.isNull && (S.width = 0), a.minPointLengthOffset = 0);
		let T = a.plotY + (a.negative ? S.height : 0);
		a.below && (a.plotY += S.height), a.tooltipPos && (e.chart.inverted ? a.tooltipPos[0] = i.len - T : a.tooltipPos[1] = T), a.isInside = this.isPointInside(a);
		let E = o(a.yBottom, e.borderWidth);
		S.y = o(S.y, e.borderWidth), S.height = E - S.y, n(!0, a.shapeArgs, S);
	}
}, { order: 2 }), E.registerSeriesType("waterfall", Q);
//#endregion
//#region src/highchartsMoreCustom.ts
var $ = _;
$.RadialAxis = Se, K.compose($.Chart, $.Pointer), Ke.compose($.Axis, $.Chart, $.Pointer, $.Series, $.Tick, $.Point, E.seriesTypes.areasplinerange, E.seriesTypes.column, E.seriesTypes.line, E.seriesTypes.spline), Q.compose($.Axis, $.Chart);
//#endregion
