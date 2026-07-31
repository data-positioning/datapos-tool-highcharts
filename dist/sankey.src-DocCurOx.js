import { B as e, E as t, I as n, O as r, U as i, V as a, Y as o, Z as s, f as c, g as l, i as u, ot as d, tt as f, x as p, y as m } from "./AnimationUtilities-Bby2idBR.js";
import { n as h, t as g } from "./SeriesRegistry-0cj0ZJqn.js";
import { t as _ } from "./SVGElement-BmvC_qu3.js";
import { n as v, t as y } from "./TextPath-DK4Jkzd7.js";
//#region node_modules/highcharts/es-modules/Series/NodesComposition.js
var { series: { prototype: b, prototype: { pointClass: { prototype: x } } } } = g, S;
(function(e) {
	function n(e, t) {
		let n = e.prototype, r = t.prototype;
		return n.setNodeState = f, n.setState = f, n.update = m, r.destroy = l, r.setData = d, c(t, "afterUpdate", a), t;
	}
	e.compose = n;
	function a() {
		if (!this.hasDataLabels?.() && this.nodes) for (let e of this.nodes) e.destroyElements({ dataLabel: 1 });
	}
	function s(e) {
		let n = this.pointClass, i = (e, t) => r(e, (e) => e.id === t), a = i(this.nodes, e), s;
		if (!a) {
			s = this.options.nodes && i(this.options.nodes, e);
			let r = new n(this, t({
				className: "highcharts-node",
				isNode: !0,
				id: e,
				y: 1
			}, s));
			r.linksTo = [], r.linksFrom = [], r.getSum = function() {
				let e = 0, t = 0;
				return r.linksTo.forEach((t) => {
					e += t.weight || 0;
				}), r.linksFrom.forEach((e) => {
					t += e.weight || 0;
				}), Math.max(e, t);
			}, r.offset = function(e, t) {
				let n = 0;
				for (let i = 0; i < r[t].length; i++) {
					if (r[t][i] === e) return n;
					n += r[t][i].weight;
				}
			}, r.hasShape = function() {
				let e = 0;
				return r.linksTo.forEach((t) => {
					t.outgoing && e++;
				}), !r.linksTo.length || e !== r.linksTo.length;
			}, r.index = this.nodes.push(r) - 1, a = r;
		}
		return a.formatPrefix = "node", a.name = a.name || a.options.id || "", a.mass = o(a.options.mass, a.options.marker && a.options.marker.radius, this.options.marker && this.options.marker.radius, 4), a;
	}
	e.createNode = s;
	function l() {
		return this.data = [].concat(this.points || [], this.nodes), b.destroy.apply(this, arguments);
	}
	e.destroy = l;
	function u() {
		let e = this.chart, t = {};
		b.generatePoints.call(this), this.nodes ||= [], this.colorCounter = 0, this.nodes.forEach((e) => {
			e.linksFrom.length = 0, e.linksTo.length = 0, e.level = e.options.level;
		}), this.points.forEach((n) => {
			p(n.from) && (t[n.from] || (t[n.from] = this.createNode(n.from)), t[n.from].linksFrom.push(n), n.fromNode = t[n.from], e.styledMode ? n.colorIndex = o(n.options.colorIndex, t[n.from].colorIndex) : n.color = n.options.color || t[n.from].color), p(n.to) && (t[n.to] || (t[n.to] = this.createNode(n.to)), t[n.to].linksTo.push(n), n.toNode = t[n.to]), n.name = n.name || n.id;
		}, this), this.nodeLookup = t;
	}
	e.generatePoints = u;
	function d() {
		this.nodes && (this.nodes.forEach((e) => {
			e.destroy();
		}), this.nodes.length = 0), b.setData.apply(this, arguments);
	}
	function f(e) {
		let t = arguments, n = this.isNode ? this.linksTo.concat(this.linksFrom) : [this.fromNode, this.toNode];
		e !== "select" && n.forEach((e) => {
			e && e.series && (x.setState.apply(e, t), e.isNode || (e.fromNode.graphic && x.setState.apply(e.fromNode, t), e.toNode && e.toNode.graphic && x.setState.apply(e.toNode, t)));
		}), x.setState.apply(this, t);
	}
	e.setNodeState = f;
	function m(e, t, n, r) {
		let a = this.series.options.nodes, s = this.series.options.data, c = s?.length || 0, l = s?.[this.index];
		if (x.update.call(this, e, !this.isNode && t, n, r), this.isNode) {
			let e = (a || []).reduce((e, t, n) => this.id === t.id ? n : e, -1), r = i(a && a[e] || {}, s?.[this.index] || {});
			s && (l ? s[this.index] = l : s.length = c), a ? e >= 0 ? a[e] = r : a.push(r) : this.series.options.nodes = [r], o(t, !0) && this.series.chart.redraw(n);
		}
	}
	e.updateNode = m;
})(S ||= {});
var C = S, { column: w } = g.seriesTypes, T = class extends w.prototype.pointClass {
	applyOptions(e, t) {
		return h.prototype.applyOptions.call(this, e, t), p(this.options.level) && (this.options.column = this.column = this.options.level), this;
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
		p(e.options.column) || (e.column = e.linksTo.length === 0 ? 0 : e.getFromNode().fromColumn + 1);
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
function D(e, t) {
	let n = t.index, r = t.mapOptionsToLevel, i = t.parentColor, a = t.parentColorIndex, s = t.series, c = t.colors, l = t.siblings, d = s.points, f = s.chart.options.chart, p, m, h, g, _, v, y;
	return e && (m = d[e.i], h = r[e.level] || {}, p = m && h.colorByPoint, p && (_ = m.index % (c ? c.length : f.colorCount), g = c && c[_]), s.chart.styledMode || (v = o(m && m.options.color, h && h.color, g, i && ((e) => {
		let t = h && h.colorVariation;
		return t && t.key === "brightness" && n && l ? u.parse(e).brighten(t.to * (n / l)).get() : e;
	})(i), s.color)), y = o(m && m.options.colorIndex, h && h.colorIndex, _, a, t.colorIndex)), {
		color: v,
		colorIndex: y
	};
}
function O(t) {
	let r = {}, s, c, l, u, d, f;
	if (a(t)) for (u = e(t.from) ? t.from : 1, f = t.levels, c = {}, s = a(t.defaults) ? t.defaults : {}, n(f) && (c = f.reduce((t, n) => {
		let r, c, l;
		return a(n) && e(n.level) && (l = i({}, n), c = o(l.levelIsConstant, s.levelIsConstant), delete l.levelIsConstant, delete l.level, r = n.level + (c ? 0 : u - 1), a(t[r]) ? i(!0, t[r], l) : t[r] = l), t;
	}, {})), d = e(t.to) ? t.to : 1, l = 0; l <= d; l++) r[l] = i({}, s, a(c[l]) ? c[l] : {});
	return r;
}
function k(e, n) {
	let r = n.before, i = n.idRoot, a = n.mapIdToNode[i], s = n.levelIsConstant !== !1, c = n.points[e.i], l = c && c.options || {}, u = [], d = 0;
	e.levelDynamic = e.level - (s ? 0 : a.level), e.name = o(c && c.name, ""), e.visible = i === e.id || n.visible === !0, typeof r == "function" && (e = r(e, n)), e.children.forEach((r, i) => {
		let a = t({}, n);
		t(a, {
			index: i,
			siblings: e.children.length,
			visible: e.visible
		}), r = k(r, a), u.push(r), r.visible && (d += r.val);
	});
	let f = o(l.value, d);
	return e.visible = f >= 0 && (d > 0 || e.visible), e.children = u, e.childrenTotal = d, e.isLeaf = e.visible && !d, e.val = f, e;
}
function A(e) {
	let t, n;
	return a(e) && (n = a(e.options) ? e.options : {}, t = o(e.rootNode, n.rootId, ""), a(e.userOptions) && (e.userOptions.rootId = t), e.rootNode = t), t;
}
function j(e, t) {
	let { chart: n, options: r } = e, { nodeDistance: i = 0, nodeWidth: a = 0 } = r, { plotSizeX: o = 1 } = n;
	if (a === "auto") {
		if (typeof i == "string" && /%$/.test(i)) return o / (t + parseFloat(i) / 100 * (t - 1));
		let e = Number(i);
		return (o + e) / (t || 1) - e;
	}
	return s(a, o);
}
var M = {
	getColor: D,
	getLevelOptions: O,
	getNodeWidth: j,
	setTreeValues: k,
	updateRootId: A
}, { column: N, line: P } = g.seriesTypes, { parse: F } = u, { getLevelOptions: I, getNodeWidth: L } = M;
y(_);
var R = class e extends N {
	static getDLOptions(e) {
		let t = a(e.optionsPoint) ? e.optionsPoint.dataLabels : {}, n = a(e.level) ? e.level.dataLabels : {};
		return i({ style: {} }, n, t, { zIndex: n?.zIndex });
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
			f(this.nodes, (e, t) => e.level - t.level);
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
	pointAttribs(e, t) {
		if (!e) return {};
		let n = this, r = e.isNode ? e.level : e.fromNode.level, i = n.mapOptionsToLevel[r || 0] || {}, a = e.options, s = i.states && i.states[t || ""] || {}, c = [
			"colorByPoint",
			"borderColor",
			"borderWidth",
			"linkOpacity",
			"opacity"
		].reduce((e, t) => (e[t] = o(s[t], a[t], i[t], n.options[t]), e), {}), l = o(s.color, a.color, c.colorByPoint ? e.color : i.color);
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
	translateLink(e, t) {
		let n = e.fromNode, r = e.toNode, i = this.chart, { inverted: a } = i, s = this.translationFactor, c = this.options, l = o(e.linkColorMode, c.linkColorMode), u = (i.inverted ? -this.colDistance : this.colDistance) * c.curveFactor, d = n.nodeX, f = r.nodeX, p = e.outgoing, m = Math.max((e.weight || 0) * s, this.options.minLinkWidth || 0), h = this.getY(e, n, "linksFrom", m), g = t || this.getY(e, r, "linksTo", m), _ = this.nodeWidth, v = f > d + _;
		if (i.inverted && (h = i.plotSizeY - h, g = (i.plotSizeY || 0) - g, _ = -_, m = -m, v = d > f), e.shapeType = "path", e.linkBase = [
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
			let t = i.plotHeight - h - m, n = f - 20 - m, r = f - 20, a = f, o = d + _, s = o + 20, c = s + m, l = h, u = h + m, p = u + 20, v = p + t, y = v + 20, b = y + m, x = g, S = x + m, C = S + 20, w = u - m * .7, T = y + m * .7, E = S - m * .7, D = a - m * .7, O = o + m * .7;
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
					a,
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
					a,
					x
				],
				[
					"L",
					a,
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
					a,
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
		}, e.tooltipPos = i.inverted ? [i.plotSizeY - e.dlBox.y - m / 2, i.plotSizeX - e.dlBox.x] : [e.dlBox.x, e.dlBox.y + m / 2], e.y = e.plotY = 1, e.x = e.plotX = 1, !e.options.color) {
			if (l === "from") e.color = n.color;
			else if (l === "to") e.color = r.color;
			else if (l === "gradient") {
				let t = F(n.color).get(), i = F(r.color).get();
				e.color = {
					linearGradient: {
						x1: 1,
						x2: 0,
						y1: 0,
						y2: 0
					},
					stops: [[0, a ? t : i], [1, a ? i : t]]
				};
			}
		}
	}
	translateNode(t, n) {
		let r = this.translationFactor, i = this.chart, a = this.options, { borderRadius: c, borderWidth: u = 0 } = a, d = t.getSum(), f = Math.max(Math.round(d * r), this.options.minLinkWidth), p = Math.round(this.nodeWidth), h = n.sankeyColumn.offset(t, r), g = m(o(h.absoluteTop, n.sankeyColumn.top(r) + h.relativeTop), u), _ = m(this.colDistance * t.column + u / 2, u) + s(t.options[i.inverted ? "offsetVertical" : "offsetHorizontal"] || 0, p), v = i.inverted ? i.plotSizeX - _ : _;
		if (t.sum = d, d) {
			t.shapeType = "roundedRect", t.nodeX = v, t.nodeY = g;
			let n = v, r = g, o = t.options.width || a.width || p, u = t.options.height || a.height || f, d = l(s(typeof c == "object" ? c.radius : c || 0, o), 0, f / 2);
			i.inverted && (n = v - p, r = i.plotSizeY - g - f, o = t.options.height || a.height || p, u = t.options.width || a.width || f), t.dlOptions = {
				...e.getDLOptions({
					level: this.mapOptionsToLevel[t.level],
					optionsPoint: t.options
				}),
				zIndex: void 0
			}, delete t.dlOptions.zIndex, t.plotX = 1, t.plotY = 1, t.tooltipPos = i.inverted ? [i.plotSizeY - r - u / 2, i.plotSizeX - n - o / 2] : [n + o / 2, r + u / 2], t.shapeArgs = {
				x: n,
				y: r,
				width: o,
				height: u,
				r: d,
				display: t.hasShape() ? "" : "none"
			};
		} else t.dlOptions = { enabled: !1 };
	}
};
R.defaultOptions = i(N.defaultOptions, E), C.compose(T, R), t(R.prototype, {
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
	searchPoint: d.noop
}), g.registerSeriesType("sankey", R);
//#endregion
//#region node_modules/highcharts/es-modules/masters/modules/sankey.src.js
var z = d;
//#endregion
export { z as default };

//# sourceMappingURL=sankey.src-DocCurOx.js.map