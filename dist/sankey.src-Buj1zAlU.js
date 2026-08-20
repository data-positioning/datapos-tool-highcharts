import { K as e, Q as t, S as n, U as r, W as i, et as a, h as o, it as s, j as c, k as l, lt as u, s as d, w as f, y as p, z as m } from "./AnimationUtilities-CJw-tdb_.js";
import { n as h, t as g } from "./SeriesRegistry-CXsAINSj.js";
import { t as _ } from "./SVGElement-uTuGcjav.js";
import { n as v, t as y } from "./TextPath-Coabnrz0.js";
//#region node_modules/highcharts/es-modules/Series/NodesComposition.js
var { series: { prototype: b, prototype: { pointClass: { prototype: x } } } } = g, S;
(function(n) {
	function r(e, t) {
		let n = e.prototype, r = t.prototype;
		return n.setNodeState = p, n.setState = p, n.update = m, r.destroy = s, r.setData = d, o(t, "afterUpdate", i), t;
	}
	n.compose = r;
	function i() {
		if (!this.hasDataLabels?.() && this.nodes) for (let e of this.nodes) e.destroyElements({ dataLabel: 1 });
	}
	function a(e) {
		let n = this.pointClass, r = (e, t) => c(e, (e) => e.id === t), i = r(this.nodes, e), a;
		if (!i) {
			a = this.options.nodes && r(this.options.nodes, e);
			let t = new n(this, l({
				className: "highcharts-node",
				isNode: !0,
				id: e,
				y: 1
			}, a));
			t.linksTo = [], t.linksFrom = [], t.getSum = function() {
				let e = 0, n = 0;
				return t.linksTo.forEach((t) => {
					e += t.weight || 0;
				}), t.linksFrom.forEach((e) => {
					n += e.weight || 0;
				}), Math.max(e, n);
			}, t.offset = function(e, n) {
				let r = 0;
				for (let i = 0; i < t[n].length; i++) {
					if (t[n][i] === e) return r;
					r += t[n][i].weight;
				}
			}, t.hasShape = function() {
				let e = 0;
				return t.linksTo.forEach((t) => {
					t.outgoing && e++;
				}), !t.linksTo.length || e !== t.linksTo.length;
			}, t.index = this.nodes.push(t) - 1, i = t;
		}
		return i.formatPrefix = "node", i.name = i.name || i.options.id || "", i.mass = t(i.options.mass, i.options.marker && i.options.marker.radius, this.options.marker && this.options.marker.radius, 4), i;
	}
	n.createNode = a;
	function s() {
		return this.data = [].concat(this.points || [], this.nodes), b.destroy.apply(this, arguments);
	}
	n.destroy = s;
	function u() {
		let e = this.chart, n = {};
		b.generatePoints.call(this), this.nodes ||= [], this.colorCounter = 0, this.nodes.forEach((e) => {
			e.linksFrom.length = 0, e.linksTo.length = 0, e.level = e.options.level;
		}), this.points.forEach((r) => {
			f(r.from) && (n[r.from] || (n[r.from] = this.createNode(r.from)), n[r.from].linksFrom.push(r), r.fromNode = n[r.from], e.styledMode ? r.colorIndex = t(r.options.colorIndex, n[r.from].colorIndex) : r.color = r.options.color || n[r.from].color), f(r.to) && (n[r.to] || (n[r.to] = this.createNode(r.to)), n[r.to].linksTo.push(r), r.toNode = n[r.to]), r.name = r.name || r.id;
		}, this), this.nodeLookup = n;
	}
	n.generatePoints = u;
	function d() {
		this.nodes && (this.nodes.forEach((e) => {
			e.destroy();
		}), this.nodes.length = 0), b.setData.apply(this, arguments);
	}
	function p(e) {
		let t = arguments, n = this.isNode ? this.linksTo.concat(this.linksFrom) : [this.fromNode, this.toNode];
		e !== "select" && n.forEach((e) => {
			e && e.series && (x.setState.apply(e, t), e.isNode || (e.fromNode.graphic && x.setState.apply(e.fromNode, t), e.toNode && e.toNode.graphic && x.setState.apply(e.toNode, t)));
		}), x.setState.apply(this, t);
	}
	n.setNodeState = p;
	function m(n, r, i, a) {
		let o = this.series.options.nodes, s = this.series.options.data, c = s?.length || 0, l = s?.[this.index];
		if (x.update.call(this, n, !this.isNode && r, i, a), this.isNode) {
			let n = (o || []).reduce((e, t, n) => this.id === t.id ? n : e, -1), a = e(o && o[n] || {}, s?.[this.index] || {});
			s && (l ? s[this.index] = l : s.length = c), o ? n >= 0 ? o[n] = a : o.push(a) : this.series.options.nodes = [a], t(r, !0) && this.series.chart.redraw(i);
		}
	}
	n.updateNode = m;
})(S ||= {});
var C = S, { column: w } = g.seriesTypes, T = class extends w.prototype.pointClass {
	applyOptions(e, t) {
		return h.prototype.applyOptions.call(this, e, t), f(this.options.level) && (this.options.column = this.column = this.options.level), this;
	}
	getClassName() {
		return (this.isNode ? "highcharts-node " : "highcharts-link ") + h.prototype.getClassName.call(this);
	}
	getFromNode() {
		let e = this, t = -1, n;
		for (let r = 0; r < e.linksTo.length; r++) {
			let i = e.linksTo[r];
			i.fromNode.column > t && i.fromNode !== e && (n = i.fromNode, t = n.column);
		}
		return {
			fromNode: n,
			fromColumn: t
		};
	}
	setNodeColumn() {
		let e = this;
		f(e.options.column) || (e.column = e.linksTo.length === 0 ? 0 : e.getFromNode().fromColumn + 1);
	}
	isValid() {
		return this.isNode || typeof this.weight == "number";
	}
}, E = {
	borderWidth: 0,
	colorByPoint: !0,
	curveFactor: .33,
	dataLabels: {
		enabled: !0,
		backgroundColor: "none",
		crop: !1,
		nodeFormat: void 0,
		nodeFormatter: function() {
			return this.point.name;
		},
		format: void 0,
		formatter: function() {},
		inside: !0
	},
	inactiveOtherPoints: !0,
	linkColorMode: "from",
	linkOpacity: .5,
	opacity: 1,
	minLinkWidth: 0,
	nodeAlignment: "center",
	nodeWidth: 20,
	nodePadding: 10,
	nodeDistance: 30,
	showInLegend: !1,
	states: {
		hover: {
			linkOpacity: 1,
			opacity: 1
		},
		inactive: {
			linkOpacity: .1,
			opacity: .1,
			animation: { duration: 50 }
		}
	},
	tooltip: {
		followPointer: !0,
		headerFormat: "<span style=\"font-size: 0.8em\">{series.name}</span><br/>",
		pointFormat: "{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>",
		nodeFormat: "{point.name}: <b>{point.sum}</b><br/>"
	}
};
//#endregion
//#region node_modules/highcharts/es-modules/Series/TreeUtilities.js
function D(e, n) {
	let r = n.index, i = n.mapOptionsToLevel, a = n.parentColor, o = n.parentColorIndex, s = n.series, c = n.colors, l = n.siblings, u = s.points, f = s.chart.options.chart, p, m, h, g, _, v, y;
	return e && (m = u[e.i], h = i[e.level] || {}, p = m && h.colorByPoint, p && (_ = m.index % (c ? c.length : f.colorCount), g = c && c[_]), s.chart.styledMode || (v = t(m && m.options.color, h && h.color, g, a && ((e) => {
		let t = h && h.colorVariation;
		return t && t.key === "brightness" && r && l ? d.parse(e).brighten(t.to * (r / l)).get() : e;
	})(a), s.color)), y = t(m && m.options.colorIndex, h && h.colorIndex, _, o, n.colorIndex)), {
		color: v,
		colorIndex: y
	};
}
function O(n) {
	let a = {}, o, s, c, l, u, d;
	if (i(n)) for (l = r(n.from) ? n.from : 1, d = n.levels, s = {}, o = i(n.defaults) ? n.defaults : {}, m(d) && (s = d.reduce((n, a) => {
		let s, c, u;
		return i(a) && r(a.level) && (u = e({}, a), c = t(u.levelIsConstant, o.levelIsConstant), delete u.levelIsConstant, delete u.level, s = a.level + (c ? 0 : l - 1), i(n[s]) ? e(!0, n[s], u) : n[s] = u), n;
	}, {})), u = r(n.to) ? n.to : 1, c = 0; c <= u; c++) a[c] = e({}, o, i(s[c]) ? s[c] : {});
	return a;
}
function k(e, n) {
	let r = n.before, i = n.idRoot, a = n.mapIdToNode[i], o = n.levelIsConstant !== !1, s = n.points[e.i], c = s && s.options || {}, u = [], d = 0;
	e.levelDynamic = e.level - (o ? 0 : a.level), e.name = t(s && s.name, ""), e.visible = i === e.id || n.visible === !0, typeof r == "function" && (e = r(e, n)), e.children.forEach((t, r) => {
		let i = l({}, n);
		l(i, {
			index: r,
			siblings: e.children.length,
			visible: e.visible
		}), t = k(t, i), u.push(t), t.visible && (d += t.val);
	});
	let f = t(c.value, d);
	return e.visible = f >= 0 && (d > 0 || e.visible), e.children = u, e.childrenTotal = d, e.isLeaf = e.visible && !d, e.val = f, e;
}
function A(e) {
	let n, r;
	return i(e) && (r = i(e.options) ? e.options : {}, n = t(e.rootNode, r.rootId, ""), i(e.userOptions) && (e.userOptions.rootId = n), e.rootNode = n), n;
}
function j(e, t) {
	let { chart: n, options: r } = e, { nodeDistance: i = 0, nodeWidth: o = 0 } = r, { plotSizeX: s = 1 } = n;
	if (o === "auto") {
		if (typeof i == "string" && /%$/.test(i)) return s / (t + parseFloat(i) / 100 * (t - 1));
		let e = Number(i);
		return (s + e) / (t || 1) - e;
	}
	return a(o, s);
}
var M = {
	getColor: D,
	getLevelOptions: O,
	getNodeWidth: j,
	setTreeValues: k,
	updateRootId: A
}, { column: N, line: P } = g.seriesTypes, { parse: F } = d, { getLevelOptions: I, getNodeWidth: L } = M;
y(_);
var R = class r extends N {
	static getDLOptions(t) {
		let n = i(t.optionsPoint) ? t.optionsPoint.dataLabels : {}, r = i(t.level) ? t.level.dataLabels : {};
		return e({ style: {} }, r, n, { zIndex: r?.zIndex });
	}
	createNodeColumns() {
		let e = [];
		for (let t of this.nodes) t.setNodeColumn(), e[t.column] || (e[t.column] = v.compose([], this)), e[t.column].push(t);
		for (let t = 0; t < e.length; t++) e[t] === void 0 && (e[t] = v.compose([], this));
		return e;
	}
	order(e, t, n) {
		let r = this;
		if (n ||= /* @__PURE__ */ new Set(), e.level === void 0 || e.level < t) {
			e.level = t, n.add(e);
			for (let i of e.linksFrom) i.toNode && !n.has(i.toNode) && r.order(i.toNode, t + 1, n);
			n.delete(e);
		}
	}
	generatePoints() {
		if (C.generatePoints.apply(this, arguments), this.orderNodes) {
			for (let e of this.nodes) e.linksTo.length === 0 && this.order(e, 0);
			s(this.nodes, (e, t) => e.level - t.level);
		}
	}
	getNodePadding() {
		let e = this.options.nodePadding || 0;
		if (this.nodeColumns) {
			let t = this.nodeColumns.reduce((e, t) => Math.max(e, t.length), 0);
			t * e > this.chart.plotSizeY && (e = this.chart.plotSizeY / t);
		}
		return e;
	}
	hasData() {
		return !!this.dataTable.rowCount;
	}
	pointAttribs(e, n) {
		if (!e) return {};
		let r = this, i = e.isNode ? e.level : e.fromNode.level, a = r.mapOptionsToLevel[i || 0] || {}, o = e.options, s = a.states && a.states[n || ""] || {}, c = [
			"colorByPoint",
			"borderColor",
			"borderWidth",
			"linkOpacity",
			"opacity"
		].reduce((e, n) => (e[n] = t(s[n], o[n], a[n], r.options[n]), e), {}), l = t(s.color, o.color, c.colorByPoint ? e.color : a.color);
		return e.isNode ? {
			fill: l,
			stroke: c.borderColor,
			"stroke-width": c.borderWidth,
			opacity: c.opacity
		} : {
			fill: l,
			"fill-opacity": c.linkOpacity
		};
	}
	drawTracker() {
		N.prototype.drawTracker.call(this, this.points), N.prototype.drawTracker.call(this, this.nodes);
	}
	drawPoints() {
		N.prototype.drawPoints.call(this, this.points), N.prototype.drawPoints.call(this, this.nodes);
	}
	drawDataLabels() {
		N.prototype.drawDataLabels.call(this, this.points), N.prototype.drawDataLabels.call(this, this.nodes);
	}
	translate() {
		this.generatePoints(), this.nodeColumns = this.createNodeColumns();
		let e = this, t = this.chart, n = this.options, r = this.nodeColumns, i = r.length;
		this.nodeWidth = L(this, i), this.nodePadding = this.getNodePadding(), this.translationFactor = r.reduce((t, n) => Math.min(t, n.sankeyColumn.getTranslationFactor(e)), Infinity), this.colDistance = (t.plotSizeX - this.nodeWidth - n.borderWidth) / Math.max(1, r.length - 1), e.mapOptionsToLevel = I({
			from: 1,
			levels: n.levels,
			to: r.length - 1,
			defaults: {
				borderColor: n.borderColor,
				borderRadius: n.borderRadius,
				borderWidth: n.borderWidth,
				color: e.color,
				colorByPoint: n.colorByPoint,
				levelIsConstant: !0,
				linkColor: n.linkColor,
				linkLineWidth: n.linkLineWidth,
				linkOpacity: n.linkOpacity,
				states: n.states
			}
		});
		for (let t of r) for (let n of t) e.translateNode(n, t);
		for (let t of this.nodes) for (let n of t.linksFrom) (n.weight || n.isNull) && n.to && (e.translateLink(n), n.allowShadow = !1);
	}
	getY(e, t, n, r) {
		let i = (t.offset(e, n) || 0) * this.translationFactor;
		return Math.min(t.nodeY + i, t.nodeY + (t.shapeArgs && t.shapeArgs.height || 0) - r);
	}
	translateLink(e, n) {
		let r = e.fromNode, i = e.toNode, a = this.chart, { inverted: o } = a, s = this.translationFactor, c = this.options, l = t(e.linkColorMode, c.linkColorMode), u = (a.inverted ? -this.colDistance : this.colDistance) * c.curveFactor, d = r.nodeX, f = i.nodeX, p = e.outgoing, m = Math.max((e.weight || 0) * s, this.options.minLinkWidth || 0), h = this.getY(e, r, "linksFrom", m), g = n || this.getY(e, i, "linksTo", m), _ = this.nodeWidth, v = f > d + _;
		if (a.inverted && (h = a.plotSizeY - h, g = (a.plotSizeY || 0) - g, _ = -_, m = -m, v = d > f), e.shapeType = "path", e.linkBase = [
			h,
			h + m,
			g,
			g + m
		], v && typeof g == "number") e.shapeArgs = { d: [
			[
				"M",
				d + _,
				h
			],
			[
				"C",
				d + _ + u,
				h,
				f - u,
				g,
				f,
				g
			],
			[
				"L",
				f + (p ? _ : 0),
				g + m / 2
			],
			[
				"L",
				f,
				g + m
			],
			[
				"C",
				f - u,
				g + m,
				d + _ + u,
				h + m,
				d + _,
				h + m
			],
			["Z"]
		] };
		else if (typeof g == "number") {
			let t = a.plotHeight - h - m, n = f - 20 - m, r = f - 20, i = f, o = d + _, s = o + 20, c = s + m, l = h, u = h + m, p = u + 20, v = p + t, y = v + 20, b = y + m, x = g, S = x + m, C = S + 20, w = u - m * .7, T = y + m * .7, E = S - m * .7, D = i - m * .7, O = o + m * .7;
			e.shapeArgs = { d: [
				[
					"M",
					o,
					l
				],
				[
					"C",
					O,
					l,
					c,
					w,
					c,
					p
				],
				[
					"L",
					c,
					v
				],
				[
					"C",
					c,
					T,
					O,
					b,
					o,
					b
				],
				[
					"L",
					i,
					b
				],
				[
					"C",
					D,
					b,
					n,
					T,
					n,
					v
				],
				[
					"L",
					n,
					C
				],
				[
					"C",
					n,
					E,
					D,
					x,
					i,
					x
				],
				[
					"L",
					i,
					S
				],
				[
					"C",
					r,
					S,
					r,
					S,
					r,
					C
				],
				[
					"L",
					r,
					v
				],
				[
					"C",
					r,
					y,
					r,
					y,
					i,
					y
				],
				[
					"L",
					o,
					y
				],
				[
					"C",
					s,
					y,
					s,
					y,
					s,
					v
				],
				[
					"L",
					s,
					p
				],
				[
					"C",
					s,
					u,
					s,
					u,
					o,
					u
				],
				["Z"]
			] };
		}
		if (e.dlBox = {
			x: d + (f - d + _) / 2,
			y: h + (g - h) / 2,
			height: m,
			width: 0
		}, e.tooltipPos = a.inverted ? [a.plotSizeY - e.dlBox.y - m / 2, a.plotSizeX - e.dlBox.x] : [e.dlBox.x, e.dlBox.y + m / 2], e.y = e.plotY = 1, e.x = e.plotX = 1, !e.options.color) {
			if (l === "from") e.color = r.color;
			else if (l === "to") e.color = i.color;
			else if (l === "gradient") {
				let t = F(r.color).get(), n = F(i.color).get();
				e.color = {
					linearGradient: {
						x1: 1,
						x2: 0,
						y1: 0,
						y2: 0
					},
					stops: [[0, o ? t : n], [1, o ? n : t]]
				};
			}
		}
	}
	translateNode(e, o) {
		let s = this.translationFactor, c = this.chart, l = this.options, { borderRadius: u, borderWidth: d = 0 } = l, f = e.getSum(), m = Math.max(Math.round(f * s), this.options.minLinkWidth), h = Math.round(this.nodeWidth), g = o.sankeyColumn.offset(e, s), _ = n(t(g.absoluteTop, o.sankeyColumn.top(s) + g.relativeTop), d), v = n(this.colDistance * e.column + d / 2, d) + a(e.options[c.inverted ? "offsetVertical" : "offsetHorizontal"] || 0, h), y = c.inverted ? c.plotSizeX - v : v;
		if (e.sum = f, f) {
			e.shapeType = "roundedRect", e.nodeX = y, e.nodeY = _;
			let t = y, n = _, o = e.options.width || l.width || h, s = e.options.height || l.height || m, d = p(a((i(u) ? u.radius : u) || 0, o), 0, m / 2);
			c.inverted && (t = y - h, n = c.plotSizeY - _ - m, o = e.options.height || l.height || h, s = e.options.width || l.width || m), e.dlOptions = {
				...r.getDLOptions({
					level: this.mapOptionsToLevel[e.level],
					optionsPoint: e.options
				}),
				zIndex: void 0
			}, delete e.dlOptions.zIndex, e.plotX = 1, e.plotY = 1, e.tooltipPos = c.inverted ? [c.plotSizeY - n - s / 2, c.plotSizeX - t - o / 2] : [t + o / 2, n + s / 2], e.shapeArgs = {
				x: t,
				y: n,
				width: o,
				height: s,
				r: d,
				display: e.hasShape() ? "" : "none"
			};
		} else e.dlOptions = { enabled: !1 };
	}
};
R.defaultOptions = e(N.defaultOptions, E), C.compose(T, R), l(R.prototype, {
	animate: P.prototype.animate,
	createNode: C.createNode,
	forceDL: !0,
	invertible: !0,
	isCartesian: !1,
	orderNodes: !0,
	noSharedTooltip: !0,
	pointArrayMap: [
		"from",
		"to",
		"weight"
	],
	pointClass: T,
	searchPoint: u.noop
}), g.registerSeriesType("sankey", R);
//#endregion
//#region node_modules/highcharts/es-modules/masters/modules/sankey.src.js
var z = u;
//#endregion
export { z as default };
