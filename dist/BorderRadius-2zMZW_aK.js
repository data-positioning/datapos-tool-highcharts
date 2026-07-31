import { A as e, B as t, C as n, E as r, F as i, G as a, H as o, I as s, Q as c, S as l, T as u, U as d, V as f, X as p, Y as m, Z as h, _ as g, a as _, c as v, f as y, g as b, i as x, j as S, k as C, m as w, n as T, nt as E, ot as D, p as O, s as k, u as A, x as j, y as M, z as ee } from "./AnimationUtilities-Bby2idBR.js";
import { n as te, r as N, t as P } from "./SeriesRegistry-0cj0ZJqn.js";
import { t as ne } from "./SVGElement-BmvC_qu3.js";
//#region node_modules/highcharts/es-modules/Core/Foundation.js
var F;
(function(e) {
	function t(e, t) {
		e.eventOptions = e.eventOptions || {}, a(t.events, function(t, n) {
			e.eventOptions[n] !== t && (e.eventOptions[n] && (c(e, n, e.eventOptions[n]), delete e.eventOptions[n]), ee(t) && (e.eventOptions[n] = t, y(e, n, t, { order: 0 })));
		});
	}
	e.registerEventOptions = t;
})(F ||= {});
var I = F;
//#endregion
//#region node_modules/highcharts/es-modules/Data/ColumnUtils.js
function re(e, t, n) {
	return Array.isArray(e) ? (e.length = t, e) : e[n ? "subarray" : "slice"](0, t);
}
function ie(e, t, n, r, i = []) {
	if (Array.isArray(e)) return Array.isArray(i) || (i = Array.from(i)), {
		removed: e.splice(t, n, ...i),
		array: e
	};
	let a = Object.getPrototypeOf(e).constructor, o = e[r ? "subarray" : "slice"](t, t + n), s = new a(e.length - n + i.length);
	return s.set(e.subarray(0, t), 0), s.set(i, t), s.set(e.subarray(t + n), t + i.length), {
		removed: o,
		array: s
	};
}
function L(e, t) {
	switch (typeof e) {
		case "boolean": return +!!e;
		case "number": return isNaN(e) && !t ? null : e;
		default: return e = parseFloat(`${e ?? ""}`), isNaN(e) && !t ? null : e;
	}
}
//#endregion
//#region node_modules/highcharts/es-modules/Data/DataTableCore.js
var { setLength: ae, splice: R } = {
	convertToNumber: L,
	setLength: re,
	splice: ie
}, z = class {
	constructor(e = {}) {
		this.isDataTable = !0, this.autoId = !e.id, this.columns = {}, this.id = e.id || A(), this.rowCount = 0, this.versionTag = A();
		let t = 0;
		a(e.columns || {}, (e, n) => {
			this.columns[n] = e.slice(), t = Math.max(t, e.length);
		}), this.applyRowCount(t);
	}
	applyRowCount(e) {
		this.rowCount = e, a(this.columns, (t, n) => {
			t.length !== e && (this.columns[n] = ae(t, e));
		});
	}
	deleteRows(e, t = 1) {
		if (t > 0 && e < this.rowCount) {
			let n = 0;
			a(this.columns, (r, i) => {
				this.columns[i] = R(r, e, t).array, n = r.length;
			}), this.rowCount = n;
		}
		C(this, "afterDeleteRows", {
			rowIndex: e,
			rowCount: t
		}), this.versionTag = A();
	}
	getColumn(e, t) {
		return this.columns[e];
	}
	getColumns(e, t) {
		return (e || Object.keys(this.columns)).reduce((e, t) => (e[t] = this.columns[t], e), {});
	}
	getRowObject(e, t) {
		let n = {}, r = this.columns;
		t ??= Object.keys(this.columns);
		for (let i of t) n[i] = r[i]?.[e];
		return n;
	}
	setColumn(e, t = [], n = 0, r) {
		this.setColumns({ [e]: t }, n, r);
	}
	setColumns(e, t, n) {
		let r = this.rowCount;
		a(e, (e, t) => {
			this.columns[t] = e.slice(), r = e.length;
		}), this.applyRowCount(r), n?.silent || (C(this, "afterSetColumns"), this.versionTag = A());
	}
	setRow(e, t = this.rowCount, n, r) {
		var i;
		let { columns: o } = this, s = n ? this.rowCount + 1 : t + 1, c = Object.keys(e);
		if (r?.addColumns !== !1) for (let e = 0, t = c.length; e < t; e++) o[i = c[e]] || (o[i] = Array(this.rowCount));
		a(o, (r, i) => {
			r && (n ? r = R(r, t, 0, !0, [e[i]]).array : r[t] = i in e ? e[i] : r[t], o[i] = r);
		}), this.applyRowCount(Math.max(s, this.rowCount)), r?.silent || (C(this, "afterSetRows", { rowIndex: t }), this.versionTag = A());
	}
	getModified() {
		return this.modified || this;
	}
}, B;
(function(e) {
	function t(e, t) {
		n.call(this, e, t, !0);
	}
	e.areaMarker = t;
	function n(e, t, n) {
		let i = this.legendItem = this.legendItem || {}, { chart: a, options: o } = this, { baseline: s = 0, symbolWidth: c, symbolHeight: l } = e, u = this.symbol || "circle", f = l / 2, p = a.renderer, h = i.group, g = s - Math.round((e.fontMetrics?.b || l) * (n ? .4 : .3)), _ = {}, v, y = o.marker, b = 0;
		if (a.styledMode || (_["stroke-width"] = Math.min(o.lineWidth || 0, 24), o.dashStyle ? _.dashstyle = o.dashStyle : o.linecap !== "square" && (_["stroke-linecap"] = "round")), i.line = p.path().addClass("highcharts-graph").attr(_).add(h), n && (i.area = p.path().addClass("highcharts-area").add(h)), _["stroke-linecap"] && (b = Math.min(i.line.strokeWidth(), c) / 2), c) {
			let e = [[
				"M",
				b,
				g
			], [
				"L",
				c - b,
				g
			]];
			i.line.attr({ d: e }), i.area?.attr({ d: [
				...e,
				[
					"L",
					c - b,
					s
				],
				[
					"L",
					b,
					s
				]
			] });
		}
		if (y && y.enabled !== !1 && c) {
			let e = Math.min(m(y.radius, f), f);
			u.indexOf("url") === 0 && (y = d(y, {
				width: l,
				height: l
			}), e = 0), i.symbol = v = p.symbol(u, c / 2 - e, g - e, 2 * e, 2 * e, r({ context: "legend" }, y)).addClass("highcharts-point").add(h), v.isMarker = !0;
		}
	}
	e.lineMarker = n;
})(B ||= {});
var V = B, oe = {
	lineWidth: 2,
	allowPointSelect: !1,
	crisp: !0,
	showCheckbox: !1,
	animation: { duration: 1e3 },
	enableMouseTracking: !0,
	events: {},
	marker: {
		enabledThreshold: 2,
		lineColor: "var(--highcharts-background-color)",
		lineWidth: 0,
		radius: 4,
		states: {
			normal: { animation: !0 },
			hover: {
				animation: { duration: 150 },
				enabled: !0,
				radiusPlus: 2,
				lineWidthPlus: 1
			},
			select: {
				fillColor: "var(--highcharts-neutral-color-20)",
				lineColor: "var(--highcharts-neutral-color-100)",
				lineWidth: 2
			}
		}
	},
	point: { events: {} },
	dataLabels: {
		animation: {},
		align: "center",
		borderWidth: 0,
		defer: !0,
		distance: 4,
		formatter: function() {
			let { numberFormatter: e } = this.series.chart;
			return typeof this.y == "number" ? e(this.y, -1) : "";
		},
		padding: [1, 3],
		style: {
			fontSize: "0.7em",
			fontWeight: "bold",
			color: "contrast",
			textOutline: "1px contrast"
		},
		verticalAlign: "bottom",
		x: 0,
		y: 0
	},
	cropThreshold: 300,
	opacity: 1,
	pointRange: 0,
	softThreshold: !0,
	states: {
		normal: { animation: !0 },
		hover: {
			animation: { duration: 150 },
			lineWidthPlus: 1,
			marker: {},
			halo: {
				size: 10,
				opacity: .25
			}
		},
		select: { animation: { duration: 0 } },
		inactive: {
			animation: { duration: 150 },
			opacity: .2
		}
	},
	stickyTracking: !0,
	turboThreshold: 1e3,
	findNearestPointBy: "x"
}, { animObject: H, setAnimation: se } = T, { defaultOptions: U } = _, { registerEventOptions: ce } = I, { svg: le, win: ue } = D, { seriesTypes: W } = P, { format: de } = N, G = class e {
	constructor() {
		this.zoneAxis = "y";
	}
	init(e, t) {
		C(this, "init", { options: t });
		let n = this, i = e.series;
		this.eventsToUnbind = [], this.condemnedPoints ||= [], n.chart = e, n.options = n.setOptions(t);
		let a = n.options, o = a.visible !== !1;
		this.dataTable ??= a.dataTable?.isDataTable ? a.dataTable : new z(a.dataTable), n.linkedSeries = [], n.bindAxes(), r(n, {
			name: a.name,
			state: "",
			visible: o,
			selected: a.selected === !0
		}), ce(this, a), (a.events?.click || a.point?.events?.click || a.allowPointSelect) && (e.runTrackerClick = !0), n.getColor(), n.getSymbol(), n.isCartesian && (e.hasCartesianSeries = !0);
		let s;
		i.length && (s = i[i.length - 1]), n._i = m(s?._i, -1) + 1, n.opacity = n.options.opacity, e.orderItems("series", v(this, i)), !n.points && !n.data && n.setData(a.data, !1), C(this, "afterInit");
	}
	is(e) {
		return W[e] && this instanceof W[e];
	}
	bindAxes() {
		let e = this, t = e.options, n = e.chart, r;
		C(this, "bindAxes", null, function() {
			(e.axisTypes || []).forEach(function(i) {
				(n[i] || []).forEach(function(n) {
					r = n.options, (m(t[i], 0) === n.index || t[i] !== void 0 && t[i] === r.id) && (v(e, n.series), e[i] = n, n.isDirty = !0);
				}), !e[i] && e.optionalAxis !== i && k(18, !0, n);
			});
		}), C(this, "afterBindAxes");
	}
	hasData() {
		return this.visible && this.dataMax !== void 0 && this.dataMin !== void 0 || this.visible && this.dataTable.rowCount > 0;
	}
	hasMarkerChanged(e, t) {
		let n = e.marker, r = t.marker || {};
		return n && (r.enabled && !n.enabled || r.symbol !== n.symbol || r.height !== n.height || r.width !== n.width);
	}
	autoIncrement(e) {
		let n = this.options, { pointIntervalUnit: r, relativeXValue: i } = this.options, a = this.chart.time, o = this.xIncrement ?? a.parse(n.pointStart) ?? 0, s;
		if (this.pointInterval = s = m(this.pointInterval, n.pointInterval, 1), i && t(e) && (s *= e), r) {
			let e = a.toParts(o);
			r === "day" ? e[2] += s : r === "month" ? e[1] += s : r === "year" && (e[0] += s), s = a.makeTime.apply(a, e) - o;
		}
		return i && t(e) ? o + s : (this.xIncrement = o + s, o);
	}
	setOptions(e) {
		let t = this.chart, n = t.options.plotOptions, r = t.userOptions || {}, i = d(e), a = t.styledMode, o = {
			plotOptions: n,
			userOptions: i
		}, s;
		C(this, "setOptions", o);
		let c = o.plotOptions[this.type], l = r.plotOptions || {}, u = l.series || {}, f = U.plotOptions[this.type] || {}, p = l[this.type] || {};
		c.dataLabels = this.mergeArrays(f.dataLabels, c.dataLabels), this.userOptions = o.userOptions;
		let h = d(c, n.series, p, i), { negativeColor: g, negativeFillColor: _, zoneAxis: v = "y", zones: y } = h, b = (y || []).map((e) => ({ ...e }));
		return this.tooltipOptions = d(U.tooltip, U.plotOptions.series?.tooltip, f?.tooltip, t.userOptions.tooltip, l.series?.tooltip, p.tooltip, i.tooltip), this.stickyTracking = m(i.stickyTracking, p.stickyTracking, u.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : h.stickyTracking), c.marker === null && delete h.marker, this.zones ||= b, this.zoneAxis = v, (g || _) && !y && (s = {
			value: h[v + "Threshold"] || h.threshold || 0,
			className: "highcharts-negative"
		}, a || (typeof g != "boolean" && (s.color = g), s.fillColor = _), b.push(s)), b.length && j(b[b.length - 1].value) && b.push(a ? {} : {
			color: this.color,
			fillColor: this.fillColor
		}), C(this, "afterSetOptions", { options: h }), h;
	}
	getName() {
		let { chart: e, options: t } = this, { dataMapping: n, name: r } = t, i = n?.y || n?.value, a = o(i) ? i : i?.column;
		return r ?? (o(a) ? a : de(e.options.lang.seriesName, this, e));
	}
	getCyclic(e, t, n) {
		let r = this.chart, i = `${e}Index`, a = `${e}Counter`, o = n?.length || r.options.chart.colorCount, s, c;
		t || (c = m(e === "color" ? this.options.colorIndex : void 0, this[i]), j(c) ? s = c : (r.series.length || (r[a] = 0), s = r[a] % o, r[a] += 1), n && (t = n[s])), s !== void 0 && (this[i] = s), this[e] = t;
	}
	getColor() {
		let e = this.chart;
		e.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "var(--highcharts-neutral-color-20)" : this.getCyclic("color", this.options.color || U.plotOptions[this.type]?.color, e.options.colors);
	}
	getPointsCollection() {
		return (this.hasGroupedData ? this.points : this.data) || [];
	}
	getSymbol() {
		let e = this.options.marker;
		this.getCyclic("symbol", e.symbol, this.chart.options.symbols);
	}
	getColumn(e, t, n) {
		let r = t ? this.dataTable.getModified() : this.dataTable, i = r.rowCount, a = this.dataTable !== r, o = r.getColumn(e, !0);
		if (e === "x" && !a) {
			if (this.xColumn) return this.xColumn;
			let e = r.getColumn("name", !0), t = this.options, n = (e) => {
				if (this.xColumnIsNumbers !== void 0) return this.xColumnIsNumbers;
				for (let t of e) if (typeof t != "number") return this.xColumnIsNumbers = !1;
				return this.xColumnIsNumbers = !0;
			};
			if (this.xIncrement = null, !o || this.xAxis?.hasNames || t.relativeXValue || o.length < (t.turboThreshold || Infinity) && !this.boosted && !n(o)) {
				let t = [];
				for (let n = 0; n < i; n++) {
					let r = o?.[n];
					j(r) || (this.xIncrement ??= t[t.length - 1] ?? null), t.push(this.getX(r, e?.[n]));
				}
				return this.xColumn = t;
			}
		}
		return o || Array(n ? i : 0);
	}
	getX(e, n) {
		return this.xAxis?.hasNames && this.dataTable.getColumn("name", !0) && j(n) ? this.xAxis.nameToX({
			name: n,
			series: this
		}, e) : e === void 0 || t(e) && this.options.relativeXValue ? this.autoIncrement(e) : (typeof e == "string" && (e = this.chart.time.parse(e), t(e)), e);
	}
	matchPoints(e, t, n, r) {
		let { dataTable: i, options: a, requireSorting: o } = this, s = a.dataSorting, c = this.data, l = [], u = [], d = i.rowCount === c.length, f, p, m, h = 0, g = !0;
		this.xIncrement = null, delete this.xColumn;
		let _ = i.getColumn("x"), v = i.getColumn("id"), y = s?.matchByName ? i.getColumn("name") : void 0, b = i.getColumn("index");
		for (p = 0; p < i.rowCount; p++) {
			let a = _?.[p], m = v?.[p], g = y?.[p], x = b?.[p], [S, C] = m && t ? [m, t] : g && n ? [g, n] : j(x) && r ? [x, r] : j(a) && e ? [a, e] : [], w = -1;
			if (C) {
				if (w = C.indexOf(S, h), w === -1) {
					let t = _?.[p], n = e?.length ?? i.rowCount;
					for (; n && e && typeof t == "number" && e[n - 1] > t;) n--;
					l.push({
						newIndex: n,
						oldIndex: p
					});
				} else c[w] && (u.push({
					newIndex: w,
					oldIndex: p
				}), c[w].touched = !0, o && (h = w + 1));
				(!d || p !== w || s?.enabled || this.hasDerivedData) && (f = !0);
			} else l.push({
				newIndex: p,
				oldIndex: p
			});
		}
		if (f) {
			for (u.forEach((e) => {
				c[e.newIndex].applyOptions(i.getRowObject(e.oldIndex));
			}), l.sort((e, t) => t.newIndex - e.newIndex), l.forEach((e) => {
				c.splice(e.newIndex, 0, void 0);
			}), p = c.length; p--;) m = c[p], m && !m.touched && (m.destroy(), c.splice(p, 1));
			this.isDirtyData = this.isDirty = !0;
		} else if (d && !s?.enabled) {
			for (p = 0; p < i.rowCount; p++) if (!c[p].destroyed && !c[p].condemned) {
				let e = i.getRowObject(p);
				e && (Object.keys(e).forEach((t) => {
					j(e[t]) || delete e[t];
				}), Object.keys(e).length && c[p].update(e, !1, void 0, !1));
			}
		} else g = !1;
		if (c.forEach((e) => {
			e && (e.touched = !1);
		}), !g) return !1;
		let x = this.getColumn("x");
		return this.xIncrement === null && x.length && (this.xIncrement = O(x), this.autoIncrement()), !0;
	}
	getDataColumnKeys() {
		return this.dataColumnKeys || ["x", ...this.pointArrayMap || ["y"]];
	}
	setData(e, t = !0, n, r) {
		let i = this, a = this.dataTable, c = i.options, l = i.points, u = l?.length || 0, f = a.getColumn("x"), p = a.getColumn("id"), m = c.dataSorting?.matchByName && l?.map((e) => e.name) || a.getColumn("name"), h = a.getColumn("index"), g = i.chart, _ = i.xAxis, v, y, b;
		if (g.options.chart.allowMutatingData || (c.data && delete i.options.data, i.userOptions.data && delete i.userOptions.data, b = d(!0, e)), e = b || e, i.xIncrement = null, delete i.xColumn, delete i.xColumnIsNumbers, a !== c.dataTable && delete a.columns.x, i.colorCounter = 0, s(e) ? this.setDataFromArray(e) : this.setDataFromTable(e), r !== !1 && u && !i.cropped && !i.hasGroupedData && i.visible && !i.boosted && (v = this.matchPoints(f, p, m, h)), !v) {
			for (o(this.getColumn("y")[0]) && k(14, !0, g), i.data = [], y = u; y--;) l[y]?.destroy();
			_ && (_.minRange = _.userMinRange), i.isDirty = g.isDirtyBox = !0, i.isDirtyData = !!l, n = !1;
		}
		s(e) && (i.options.data = i.userOptions.data = e), c.legendType === "point" && (this.processData(), this.generatePoints()), t && g.redraw(n);
	}
	setDataFromArray(e) {
		let n = e.length, { keys: r, turboThreshold: i } = this.options, { pointValKey: a = "y", pointArrayMap: o = [] } = this, c = o.length, l = this.dataTable, u = this.getDataColumnKeys(), d = i && n > i, f = 0, p = 1;
		if (d) {
			let i = this.getFirstValidPoint(e), m = this.getFirstValidPoint(e, n - 1, -1), h = (e) => !!(s(e) && (r || t(e[0])));
			if (t(i) && t(m)) l.setColumn(a, e);
			else if (h(i) && h(m)) if (c) {
				let t = i.length === c, n = Array(i.length).fill(0).map(() => []);
				for (let t of e) for (let e = 0; e <= c; e++) n[e]?.push(t[e]);
				l.setColumns((t ? o : u).reduce((e, t, r) => (e[t] = n[r], e), {}));
			} else {
				r && (f = r.indexOf("x"), p = r.indexOf("y"), f = f >= 0 ? f : 0, p = p >= 0 ? p : 1), i.length === 1 && (p = 0);
				let t = [], n = [];
				if (f === p) {
					for (let t of e) n.push(t[p]);
					l.setColumn(a, n);
				} else {
					for (let r of e) t.push(r[f]), n.push(r[p]);
					l.setColumns({
						x: t,
						[a]: n
					});
				}
			}
			else d = !1;
		}
		if (!d) {
			let t = {};
			for (let r = 0; r < n; r++) {
				let i = this.pointClass.prototype.optionsToObject.call({ series: this }, e[r]);
				for (let e of Object.keys(i)) t[e] || (t[e] = Array(n)), t[e][r] = i[e];
			}
			n ? l.setColumns(t) : l.deleteRows(0, l.rowCount);
		}
	}
	setDataFromTable(e) {
		let { chart: n, options: r, dataTable: i } = this, a = n.getDataTable(r), s = e ? [e] : a.length ? a : n.dataTable, c = this.getDataColumnKeys(), l = r.dataMapping, u = c.slice();
		l && (Object.keys(l).forEach((e) => {
			p(u, e);
		}), this.dataColumnKeys = u), s.forEach((e, n) => {
			let r = u.reduce((r, i) => {
				let a = l?.[i], s = e.columns || {}, c = e.id, u = o(a) ? n === 0 && s[a] : ((a?.dataTable || 0) === n || c && a?.dataTable === c) && (t(a?.column) ? Object.values(s)[a.column] : s[a?.column || i]);
				return u && (r[i] = u), r;
			}, {});
			(l || e) && i.setColumns(r), e.isDataTable && this.bindDataTableEvents(e, r);
		});
	}
	bindDataTableEvents(e, n) {
		if (this.hasBoundDataTableEvents) return;
		let { chart: r, eventsToUnbind: i } = this, a = () => {
			clearTimeout(r.redrawTimeout), r.redrawTimeout = setTimeout(() => r.renderer && r.redraw(), 0);
		};
		i.push(y(e, "afterSetRows", (e) => {
			let r = e.rowIndex;
			if (t(r)) {
				let e = z.prototype.getRowObject.call({ columns: n }, r), t = this.data[r];
				e && (this.currentDataGrouping ? this.setData() : (t ? t.update(e, !1) : this.addPoint(e, !1), a()));
			}
		})), i.push(y(e, "afterDeleteRows", (e) => {
			let { rowCount: n, rowIndex: r } = e;
			if (t(r)) {
				for (let e = r + n - 1; e >= r; e--) this.removePoint(e, !1);
				a();
			}
		})), i.push(y(e, "afterSetColumns", (e) => {
			this.setData(e.target);
		})), this.hasBoundDataTableEvents = !0;
	}
	getProcessedData(e) {
		let t = this, { dataTable: n, isCartesian: r, options: i, xAxis: a } = t, o = i.cropThreshold, s = e || t.getExtremesFromAll, c = a?.logarithmic, l = n.rowCount, u, d, f = 0, p, m, h, g = t.getColumn("x"), _ = n, v = !1;
		a && (p = a.getExtremes(), m = p.min, h = p.max, v = !!(a.categories && !a.names.length), r && t.sorted && !s && (!o || l > o || t.forceCrop) && (g[l - 1] < m || g[0] > h ? _ = new z() : t.getColumn(t.pointValKey || "y").length && (g[0] < m || g[l - 1] > h) && (u = this.cropData(n, m, h), _ = u.modified, f = u.start, d = !0))), g = this.getColumn("x", !0);
		let y = S([c ? g.map(c.log2lin) : g], () => t.requireSorting && !v && k(15, !1, t.chart));
		return {
			modified: _,
			cropped: d,
			cropStart: f,
			closestPointRange: y
		};
	}
	processData(e) {
		let t = this, n = t.xAxis, r = t.dataTable;
		if (t.isCartesian && !t.isDirty && !n.isDirty && !t.yAxis.isDirty && !e) return !1;
		let i = t.getProcessedData();
		r.modified = i.modified, t.cropped = i.cropped, t.cropStart = i.cropStart, t.closestPointRange = t.basePointRange = i.closestPointRange, C(t, "afterProcessData");
	}
	cropData(e, t, n) {
		let r = e === this.dataTable ? this.getColumn("x") : e.getColumn("x", !0), i = r.length, a, o, s = 0, c = i;
		for (a = 0; a < i; a++) if (r[a] >= t) {
			s = Math.max(0, a - 1);
			break;
		}
		for (o = a; o < i; o++) if (r[o] > n) {
			c = o + 1;
			break;
		}
		let l = Object.keys(e.columns).reduce((t, n) => (t[n] = (e.getColumn(n, !0) || []).slice(s, c), t), {});
		return l.x = r.slice(s, c), {
			modified: new z({ columns: l }),
			start: s,
			end: c
		};
	}
	generatePoints() {
		let e = this, t = e.options, n = e.hasProcessedDataTable ? void 0 : t.data, i = e.dataTable.getModified(), a = e.getColumn("x", !0), o = e.pointClass, s = i.rowCount, c = e.cropStart || 0, l = e.hasGroupedData, u = t.keys, d = [], f = t.dataGrouping?.groupAll ? c : 0, p = this.getDataColumnKeys(), m, h, g, _, v = e.data, y;
		if (!v && !l) {
			let t = [];
			t.length = n?.length || 0, v = e.data = t;
		}
		for (u && l && (e.options.keys = !1), _ = 0; _ < s; _++) h = c + _, l ? (g = new o(e, i.getRowObject(_, p)), g.dataGroup = e.groupMap?.[f + _], g.dataGroup?.options && (g.options = g.dataGroup.options, r(g, g.dataGroup.options), delete g.dataLabels, g.key = g.name ?? g.category)) : (g = v[h], y = n ? n[h] : i.getRowObject(_), !g && y !== void 0 ? v[h] = g = new o(e, y, a[_]) : g && (g.category = e.xAxis?.categories?.[g.x] ?? g.x, g.key = g.name ?? g.category)), g && (g.index = l ? f + _ : h, d[_] = g);
		if (e.options.keys = u, v && (s !== (m = v.length) || l)) for (_ = 0; _ < m; _++) _ === c && !l && (_ += s), v[_] && (v[_].destroyElements(), v[_].plotX = void 0);
		e.data = v, e.points = d, C(this, "afterGeneratePoints");
	}
	getXExtremes(e) {
		return {
			min: w(e),
			max: O(e)
		};
	}
	getExtremes(e, n) {
		let { xAxis: r, yAxis: i } = this, a = n || this.getExtremesFromAll || this.options.getExtremesFromAll, o = a && this.cropped ? this.dataTable : this.dataTable.getModified(), s = o.rowCount, c = e || this.stackedYData, l = c ? [c] : (this.keysAffectYAxis || this.pointArrayMap || ["y"])?.map((e) => o.getColumn(e, !0) || []) || [], u = this.getColumn("x", !0), d = [], f = this.requireSorting && !this.is("column") ? 1 : 0, p = i ? i.positiveValuesOnly : !1, m = a || this.cropped || !r, h, g, _, v = 0, y = 0;
		for (r && (h = r.getExtremes(), v = h.min, y = h.max), _ = 0; _ < s; _++) if (g = u[_], m || (u[_ + f] || g) >= v && (u[_ - f] || g) <= y) for (let e of l) {
			let n = e[_];
			t(n) && (n > 0 || !p) && d.push(n);
		}
		let b = {
			activeYData: d,
			dataMin: w(d),
			dataMax: O(d)
		};
		return C(this, "afterGetExtremes", { dataExtremes: b }), b;
	}
	applyExtremes() {
		let e = this.getExtremes();
		return this.dataMin = e.dataMin, this.dataMax = e.dataMax, e;
	}
	getFirstValidPoint(e, t = 0, n = 1) {
		let r = e.length, i = t;
		for (; i >= 0 && i < r;) {
			if (j(e[i])) return e[i];
			i += n;
		}
	}
	translate() {
		this.generatePoints();
		let e = this, { options: n, xAxis: r, yAxis: i } = e, { stacking: a, threshold: o } = n, { hasRendered: c, polar: l } = e.chart, u = e.points.concat(e.condemnedPoints), d = u.length, f = e.pointPlacementToXValue(), p = !!f, h = n.startFromThreshold ? o : 0, _ = n?.nullInteraction && i.len, v, y, x, S, w = Number.MAX_VALUE;
		function T(e) {
			return b(e, -1e9, 1e9);
		}
		let E = (e, n) => {
			let i = r.translate(e, !1, !1, n, !0, f);
			return t(i) ? g(T(i)) : void 0;
		}, D = (e, n, r) => {
			if (t(e) && n.plotX !== void 0) {
				let n = i.translate(e, !1, !0, r, !0);
				return t(n) ? T(n) : void 0;
			}
			if (!t(e) && _) return _;
		};
		for (v = 0; v < d; v++) {
			let n = u[v], d = n.x, _, b, C = n.y, O = n.low, k = a && i.stacking?.stacks[(e.negStacks && C < (h ? 0 : o) ? "-" : "") + e.stackKey];
			n.plotX = y = E(d), a && e.visible && k && k[d] && (S = e.getStackIndicator(S, d, e.index), !n.isNull && S.key && (_ = k[d], b = _.points[S.key]), _ && s(b) && (O = b[0], C = b[1], O === h && S.key === k[d].base && (O = m(t(o) ? o : i.min)), i.positiveValuesOnly && j(O) && O <= 0 && (O = void 0), n.total = n.stackTotal = m(_.total), n.percentage = j(n.y) && _.total ? n.y / _.total * 100 : void 0, n.stackY = C, e.irregularWidths || _.setOffset(e.pointXOffset || 0, e.barW || 0, void 0, void 0, void 0, e.xAxis))), n.yBottom = j(O) ? T(i.translate(O, !1, !0, !1, !0)) : void 0, e.dataModify && (C = e.dataModify.modifyValue(C, v)), n.plotY = D(C, n), n.origin = c && !n.graphic && !l ? {
				x: E(d, !0),
				y: D(C, n, !0)
			} : void 0, n.isInside = this.isPointInside(n), n.clientX = p ? g(r.translate(d, !1, !1, !1, !0, f)) : y, n.negative = (n.y || 0) < (o || 0), !n.isNull && n.visible !== !1 && t(y) && (t(x) && (w = Math.min(w, Math.abs(y - x))), x = y), n.zone = this.zones.length ? n.getZone() : void 0;
		}
		e.closestPointRangePx = w, C(this, "afterTranslate");
	}
	getValidPoints(e, n, r) {
		let i = this.chart;
		return (e || this.points || []).filter(function(e) {
			let { plotX: a, plotY: o } = e;
			return !r && (e.isNull || !t(o)) || n && !i.isInsidePlot(a, o, { inverted: i.inverted }) ? !1 : e.visible !== !1;
		});
	}
	getSharedClipKey() {
		return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey;
	}
	setClip() {
		let { chart: e, group: t, markerGroup: n, options: r, plotClipGroup: i } = this, a = e.sharedClips, o = e.renderer, s = e.getClipBox(this), c = r.clip ?? !0, l = this.getSharedClipKey(), u = a[l];
		u ? u.animate(s) : a[l] = u = o.clipRect(s), t?.clip(c ? u : void 0), n?.clip(), i?.clip(c && this.yAxis.clippable ? e.plotClipInner : void 0);
	}
	animate(e) {
		let { chart: t, group: n, markerGroup: r } = this, i = t.inverted, a = H(this.options.animation), o = [
			this.getSharedClipKey(),
			a.duration,
			a.easing,
			a.defer
		].join(","), s = t.sharedClips[o], c = t.sharedClips[o + "m"];
		if (e && n) {
			let e = t.getClipBox(this);
			if (s) s.attr("height", e.height);
			else {
				e.width = 0, i && (e.x = t.plotHeight), s = t.renderer.clipRect(e), t.sharedClips[o] = s;
				let n = {
					x: -99,
					y: -99,
					width: i ? t.plotWidth + 199 : 99,
					height: i ? 99 : t.plotHeight + 199
				};
				c = t.renderer.clipRect(n), t.sharedClips[o + "m"] = c;
			}
			n.clip(s), r?.clip(c);
		} else if (s && !s.hasClass("highcharts-animating")) {
			let e = t.getClipBox(this), n = a.step;
			(r?.element.childNodes.length || t.series.length > 1) && (a.step = function(e, t) {
				n && n.apply(t, arguments), t.prop === "width" && c?.element && c.attr(i ? "height" : "width", e + 99);
			}), s.addClass("highcharts-animating").animate(e, a);
		}
	}
	afterAnimate() {
		this.setClip(), a(this.chart.sharedClips, (e, t, n) => {
			e && !this.chart.container.querySelector(`[clip-path="url(#${e.id})"]`) && (e.destroy(), delete n[t]);
		}), this.finishedAnimating = !0, C(this, "afterAnimate");
	}
	drawPoints(e) {
		e ||= this.points.concat(this.condemnedPoints);
		let t = this, n = t.chart, r = n.styledMode, { colorAxis: i, options: a } = t, o = a.marker, s = a.nullInteraction, c = t[t.specialGroup || "markerGroup"], l = t.xAxis, u = m(o.enabled, !l || l.isRadial ? !0 : null, t.closestPointRangePx >= o.enabledThreshold * o.radius), d, f, p, h, g, _, v;
		if (o.enabled !== !1 || t._hasPointMarkers) for (d = 0; d < e.length; d++) {
			f = e[d], p = f.graphic, h = p ? "animate" : "attr", g = f.marker || {}, _ = !!f.marker;
			let a = f.isNull;
			if ((u && !j(g.enabled) || g.enabled) && (!a || s) && f.visible !== !1) {
				let e = m(g.symbol, t.symbol, "rect");
				v = t.markerAttribs(f, f.selected && "select");
				let a = f.isInside !== !1;
				if (!p && a && ((v.width || 0) > 0 || f.hasImage) && (f.graphic = p = n.renderer.symbol(e, v.x, v.y, v.width, v.height, _ ? g : o).add(c), f.origin)) {
					let e = f.getOrigin(f.origin, v);
					r || (e.opacity = 0), p.attr(e), h = "animate";
				}
				if (p) {
					h === "animate" && p?.animate(v);
					let e = t.pointAttribs(f, r || !f.selected ? void 0 : "select");
					r ? i && p.css({ fill: e.fill }) : p[h](e), p.addClass(f.getClassName(), !0);
				}
			} else p && (f.graphic = p.destroy());
		}
	}
	markerAttribs(e, n) {
		let r = this.options, i = r.marker, a = e.marker || {}, o = a.symbol || i.symbol, s = {}, c, l, u = m(a.radius, i?.radius);
		n && (c = i?.states?.[n], l = a.states?.[n], u = m(l?.radius, c?.radius, u && u + (c?.radiusPlus || 0))), e.hasImage = o && o.indexOf("url") === 0, e.hasImage && (u = 0);
		let d = e.pos();
		return t(u) && d && (r.crisp && (d[0] = M(d[0], e.hasImage ? 0 : o === "rect" ? i?.lineWidth || 0 : 1)), s.x = d[0] - u, s.y = d[1] - u), u && (s.width = s.height = 2 * u), s;
	}
	pointAttribs(e, t) {
		let n = this.options, r = n.marker, i = e?.options, a = i?.marker || {}, o = i?.color, s = e?.color, c = e?.zone?.color, l, u, d = this.color, f, p, h = m(a.lineWidth, r.lineWidth), g = e?.isNull && n.nullInteraction ? 0 : 1;
		return d = o || c || s || d, f = a.fillColor || r.fillColor || d, p = a.lineColor || r.lineColor || d, t ||= "normal", t && (l = r.states[t] || {}, u = a.states && a.states[t] || {}, h = m(u.lineWidth, l.lineWidth, h + m(u.lineWidthPlus, l.lineWidthPlus, 0)), f = u.fillColor || l.fillColor || f, p = u.lineColor || l.lineColor || p, g = m(u.opacity, l.opacity, g)), {
			stroke: p,
			"stroke-width": h,
			fill: f,
			opacity: e?.condemned || e?.isInside === !1 ? 0 : g
		};
	}
	destroy(e) {
		let t = this, n = t.chart, r = /AppleWebKit\/533/.test(ue.navigator.userAgent), o = t.data || [], s, c, d;
		for (C(t, "destroy", { keepEventsForUpdate: e }), this.removeEvents(e), (t.axisTypes || []).forEach(function(e) {
			d = t[e], d?.series && (u(d.series, t), d.isDirty = d.forceRedraw = !0);
		}), t.legendItem && t.chart.legend.destroyItem(t), c = o.length; c--;) o[c]?.destroy?.();
		for (let e of t.zones || []) l(e, void 0, !0);
		i(t.animationTimeout), a(t, function(e, t) {
			e instanceof ne && !e.survive && (s = r && t === "group" ? "hide" : "destroy", e[s]());
		}), n.hoverSeries === t && (n.hoverSeries = void 0), u(n.series, t), n.orderItems("series"), a(t, function(n, r) {
			(!e || r !== "hcEvents") && delete t[r];
		});
	}
	applyZones() {
		let e = this, { area: n, chart: r, graph: i, zones: a, points: o, xAxis: s, yAxis: c, zoneAxis: l } = e, { inverted: u, renderer: d } = r, f = this[`${l}Axis`], { isXAxis: p, len: h = 0, minPointOffset: g = 0 } = f || {}, _ = (i?.strokeWidth() || 0) / 2 + 1, v = (e, t = 0, n = 0) => {
			u && (n = h - n);
			let { translated: r = 0, lineClip: i, value: a } = e, o = n - r;
			i?.push([
				"L",
				t,
				Math.abs(o) < _ ? n - _ * (o < 0 || o === 0 && j(a) ? -1 : 1) : r
			]);
		};
		if (a.length && (i || n) && f && t(f.min)) {
			let e = f.getExtremes().max + g, t = (e) => {
				e.forEach((t, n) => {
					(t[0] === "M" || t[0] === "L") && (e[n] = [
						t[0],
						p ? h - t[1] : t[1],
						p ? t[2] : h - t[2]
					]);
				});
			};
			if (a.forEach((t) => {
				t.lineClip = [], t.translated = b(f.toPixels(m(t.value, e), !0) || 0, 0, h);
			}), i && !this.showLine && i.hide(), n && n.hide(), l === "y" && o.length < s.len) for (let e of o) {
				let { plotX: t, plotY: n, zone: r } = e, i = r && a[a.indexOf(r) - 1];
				r && v(r, t, n), i && v(i, t, n);
			}
			let r = [], _ = f.toPixels(f.getExtremes().min - g, !0);
			a.forEach((e) => {
				let a = e.lineClip || [], o = Math.round(e.translated || 0);
				s.reversed && a.reverse();
				let { clip: l, simpleClip: f } = e, m = 0, h = 0, g = s.len, v = c.len;
				p ? (m = o, g = _) : (h = o, v = _);
				let y = [
					[
						"M",
						m,
						h
					],
					[
						"L",
						g,
						h
					],
					[
						"L",
						g,
						v
					],
					[
						"L",
						m,
						v
					],
					["Z"]
				], b = [
					y[0],
					...a,
					y[1],
					y[2],
					...r,
					y[3],
					y[4]
				];
				r = a.reverse(), _ = o, u && (t(b), n && t(y)), l ? (l.animate({ d: b }), f?.animate({ d: y })) : (l = e.clip = d.path(b), n && (f = e.simpleClip = d.path(y))), i && e.graph?.clip(l), n && e.area?.clip(f);
			});
		} else e.visible && (i && i.show(), n && n.show());
	}
	plotGroup(e, t, n, r, i) {
		let a = this[e], o = !a, s = {
			visibility: n,
			zIndex: r || .1
		};
		return j(this.opacity) && !this.chart.styledMode && this.state !== "inactive" && (s.opacity = this.opacity), a || (this[e] = a = this.chart.renderer.g().add(i)), a.addClass("highcharts-" + t + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (j(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (a.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), a.attr(s)[o ? "attr" : "animate"](this.getPlotBox(t)), a;
	}
	getPlotBox(e) {
		let t = this.xAxis, n = this.yAxis, r = this.chart, i = r.inverted && !r.polar && t && this.invertible && e === "series";
		r.inverted && (t = n, n = this.xAxis);
		let a = {
			scale: 1,
			translateX: t ? t.left : r.plotLeft,
			translateY: n ? n.top : r.plotTop,
			name: e
		};
		C(this, "getPlotBox", a);
		let { scale: o, translateX: s, translateY: c } = a;
		return {
			translateX: s,
			translateY: c,
			rotation: i ? 90 : 0,
			rotationOriginX: i ? o * (t.len - n.len) / 2 : 0,
			rotationOriginY: i ? o * (t.len + n.len) / 2 : 0,
			scaleX: i ? -o : o,
			scaleY: o
		};
	}
	removeEvents(e) {
		let { eventsToUnbind: t } = this;
		e || c(this), t.length &&= (t.forEach((e) => {
			e();
		}), 0);
	}
	render() {
		let e = this, { chart: t, options: n, hasRendered: r } = e, i = H(n.animation), a = e.visible ? "inherit" : "hidden", o = n.zIndex, s = t.seriesGroup, c = e.finishedAnimating ? 0 : i.duration;
		C(this, "render"), t.plotClipInner && (e.plotClipGroup ||= t.renderer.g().add(s)), e.plotGroup("group", "series", a, o, e.plotClipGroup || s), e.markerGroup = e.plotGroup("markerGroup", "markers", a, o, s), n.clip !== !1 && e.setClip(), c && e.animate?.(!0), e.drawGraph && (e.drawGraph(), e.applyZones()), e.visible && e.drawPoints(), e.drawDataLabels?.(), e.redrawPoints?.(), n.enableMouseTracking && e.drawTracker?.(), c && e.animate?.(), r || (c && i.defer && (c += i.defer), e.animationTimeout = E(() => {
			e.afterAnimate();
		}, c || 0)), e.isDirty = !1, e.hasRendered = !0, C(e, "afterRender");
	}
	redraw() {
		let e = this.isDirty || this.isDirtyData;
		this.translate(), this.render(), e && delete this.kdTree, this.condemnedPoints.length = 0;
	}
	reserveSpace() {
		return this.visible || !this.chart.options.chart.ignoreHiddenSeries;
	}
	searchPoint(e, t) {
		let { xAxis: n, yAxis: r } = this, i = this.chart.inverted;
		return this.searchKDTree({
			clientX: i ? n.len - e.chartY + n.pos : e.chartX - n.pos,
			plotY: i ? r.len - e.chartX + r.pos : e.chartY - r.pos
		}, t, e);
	}
	buildKDTree(e) {
		this.buildingKdTree = !0;
		let t = this, n = t.options, r = n.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
		function i(e, n, r) {
			let a = e?.length, o, s;
			if (a) return o = t.kdAxisArray[n % r], e.sort((e, t) => (e[o] || 0) - (t[o] || 0)), s = Math.floor(a / 2), {
				point: e[s],
				left: i(e.slice(0, s), n + 1, r),
				right: i(e.slice(s + 1), n + 1, r)
			};
		}
		function a() {
			t.kdTree = i(t.getValidPoints(void 0, !t.directTouch, n?.nullInteraction), r, r), t.buildingKdTree = !1;
		}
		delete t.kdTree, E(a, n.kdNow || e?.type === "touchstart" ? 0 : 1);
	}
	searchKDTree(e, t, n, r, i) {
		let a = this, [o, s] = this.kdAxisArray, c = t ? "distX" : "dist", l = (a.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1, u = !!a.isBubble, d = r || ((e, t, n) => {
			let r = e[n] || 0, i = t[n] || 0;
			return [r === i && e.index > t.index || r < i ? e : t, !1];
		}), f = i || ((e, t) => e < t);
		function p(e, t) {
			let n = e[o], r = t[o], i = j(n) && j(r) ? n - r : null, a = e[s], c = t[s], l = j(a) && j(c) ? a - c : 0, d = u && t.marker?.radius || 0;
			t.dist = Math.sqrt((i && i * i || 0) + l * l) - d, t.distX = j(i) ? Math.abs(i) - d : Number.MAX_VALUE;
		}
		function m(e, t, n, r) {
			let i = t.point, o = a.kdAxisArray[n % r], s = i, l = !1;
			p(e, i);
			let h = (e[o] || 0) - (i[o] || 0) + (u && i.marker?.radius || 0), g = h < 0 ? "left" : "right", _ = h < 0 ? "right" : "left";
			if (t[g] && ([s, l] = d(i, m(e, t[g], n + 1, r), c)), t[_]) {
				let i = Math.sqrt(h * h), a = s[c];
				f(i, a, l) && (s = d(s, m(e, t[_], n + 1, r), c)[0]);
			}
			return s;
		}
		if (!this.kdTree && !this.buildingKdTree && this.buildKDTree(n), this.kdTree) return m(e, this.kdTree, l, l);
	}
	pointPlacementToXValue() {
		let { options: e, xAxis: n } = this, r = e.pointPlacement;
		return r === "between" && (r = n.reversed ? -.5 : .5), t(r) ? r * (e.pointRange || n.pointRange) : 0;
	}
	isPointInside(e) {
		let { chart: t, xAxis: n, yAxis: r } = this, { plotX: i = -1, plotY: a = -1 } = e;
		return a >= 0 && a <= (r ? r.len : t.plotHeight) && i >= 0 && i <= (n ? n.len : t.plotWidth);
	}
	drawTracker() {
		let e = this, t = e.options, n = t.trackByArea, r = [].concat((n ? e.areaPath : e.graphPath) || []), i = e.chart, a = i.pointer, o = i.renderer, s = i.options.tooltip?.snap || 0, c = () => {
			t.enableMouseTracking && i.hoverSeries !== e && e.onMouseOver();
		}, l = "rgba(192,192,192," + (le ? 1e-4 : .002) + ")", u = e.tracker;
		u ? u.attr({ d: r }) : e.graph && (e.tracker = u = o.path(r).attr({
			visibility: e.visible ? "inherit" : "hidden",
			zIndex: 2
		}).addClass(n ? "highcharts-tracker-area" : "highcharts-tracker-line").add(e.group), i.styledMode || u.attr({
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			stroke: l,
			fill: n ? l : "none",
			"stroke-width": e.graph.strokeWidth() + (n ? 0 : 2 * s)
		}), [
			e.tracker,
			e.markerGroup,
			...e.dataLabelsGroups || []
		].forEach((e) => {
			e && (e.addClass("highcharts-tracker").on("mouseover", c).on("mouseout", (e) => {
				a?.onTrackerMouseOut(e);
			}), t.cursor && !i.styledMode && e.css({ cursor: t.cursor }), e.on("touchstart", c));
		})), C(this, "afterDrawTracker");
	}
	addPoint(e, t, n, r, i) {
		let a = this, o = a.options, { chart: s, data: c, dataTable: l, xAxis: u } = a, d = u?.hasNames && u.names, f = o.data, p = a.getColumn("x"), h, g;
		t = m(t, !0);
		let { applyOptions: _, optionsToObject: v } = a.pointClass.prototype, y = { series: a }, b = v.call(y, e);
		_.call(y, b, void 0, !1);
		let x = y.x;
		if (g = p.length, a.requireSorting && x < p[g - 1]) for (h = !0; g && p[g - 1] > x;) g--;
		l.setRow(b, g, !0), this.xColumn?.splice(g, 0, this.getX(x)), d && y.name && (d[x] = y.name), f?.splice(g, 0, e), (h || a.hasProcessedDataTable) && (a.data.splice(g, 0, null), a.processData()), o.legendType === "point" && a.generatePoints(), n && (c[0] && c[0].remove ? c[0].remove(!1) : ([
			c,
			f,
			this.xColumn
		].filter(j).forEach((e) => {
			e.shift();
		}), l.deleteRows(0))), i !== !1 && C(a, "addPoint", { point: y }), a.isDirty = !0, a.isDirtyData = !0, t && s.redraw(r);
	}
	removePoint(e, t, n) {
		let r = this, { chart: i, data: a, points: o, dataTable: s } = r, c = a[e], l = function() {
			[
				o?.length === a.length ? o : void 0,
				a,
				r.options.data,
				r.xColumn
			].filter(j).forEach((t) => {
				t.splice(e, 1);
			}), s.deleteRows(e), s.modified = s, c?.destroy(), r.isDirty = !0, r.isDirtyData = !0, t && i.redraw();
		};
		se(n, i), t = m(t, !0), c ? c.firePointEvent("remove", null, l) : l();
	}
	remove(e, t, n, r) {
		let i = this, a = i.chart;
		function o() {
			i.destroy(r), a.isDirtyLegend = a.isDirtyBox = !0, a.linkSeries(r), m(e, !0) && a.redraw(t);
		}
		n === !1 ? o() : C(i, "remove", null, o);
	}
	update(t, i) {
		t = n(t, this.userOptions), C(this, "update", { options: t });
		let a = this, o = a.chart, s = a.userOptions, c = a.initialType || a.type, l = o.options.plotOptions, u = W[c].prototype, f = [
			"dataLabelsGroup",
			"dataLabelsGroups",
			"dataLabelsParentGroups",
			"group",
			"markerGroup",
			"plotClipGroup",
			"transformGroup"
		], p = [
			"dataGrouping",
			"pointStart",
			"pointInterval",
			"pointIntervalUnit",
			"keys"
		], h = a.finishedAnimating && { animation: !1 }, g = {}, _ = t.data || t.dataTable, v, y, b = e.keepProps.slice(), x = t.type || s.type || o.options.chart.type, S = !(this.hasDerivedData || x && x !== this.type || t.keys !== void 0 || t.pointStart !== void 0 || t.pointInterval !== void 0 || t.relativeXValue !== void 0 || t.joinBy || t.mapData || p.some((e) => a.hasOptionChanged(e)));
		x ||= c, S ? (b.push.apply(b, e.keepPropsForPoints), t.visible !== !1 && (b.push("area", "graph"), "zones" in t || b.push("zones")), a.parallelArrays.forEach(function(e) {
			b.push(e + "Data");
		}), _ && (t.dataSorting && r(a.options.dataSorting, t.dataSorting), this.setData(_, !1))) : this.dataTable.modified = this.dataTable, t.dataLabels && s.dataLabels && (t.dataLabels = this.mergeArrays(s.dataLabels, t.dataLabels)), t = d(s, {
			index: s.index === void 0 ? a.index : s.index,
			pointStart: l?.series?.pointStart ?? s.pointStart
		}, !S && { data: a.options.data }, t, h), S && t.data && (t.data = a.options.data), b = f.concat(b), b.forEach(function(e) {
			b[e] = a[e], delete a[e];
		});
		let w = !1;
		if (W[x]) {
			if (w = x !== a.type, a.remove(!1, !1, !1, !0), w) if (o.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(a, W[x].prototype);
			else {
				let e = Object.hasOwnProperty.call(a, "hcEvents") && a.hcEvents;
				for (y in u) a[y] = void 0;
				r(a, W[x].prototype), e ? a.hcEvents = e : delete a.hcEvents;
			}
		} else k(17, !0, o, { missingModuleFor: x });
		if (b.forEach(function(e) {
			a[e] = b[e];
		}), a.init(o, t), S && this.points) {
			v = a.options, v.visible === !1 ? (g.graphic = 1, g.dataLabel = 1) : (this.hasMarkerChanged(v, s) && (g.graphic = 1), a.hasDataLabels?.() || (g.dataLabel = 1));
			for (let e of this.points) e?.series && (e.resolveColor(), Object.keys(g).length && e.destroyElements(g), v.showInLegend === !1 && e.legendItem && o.legend.destroyItem(e));
		}
		a.initialType = c, o.linkSeries(), w && a.linkedSeries.length && (a.isDirtyData = !0), C(this, "afterUpdate"), m(i, !0) && o.redraw(S ? void 0 : !1);
	}
	setName(e) {
		this.name = this.options.name = this.userOptions.name = e, this.chart.isDirtyLegend = !0;
	}
	hasOptionChanged(e) {
		let t = this.chart, n = this.options[e], r = t.options.plotOptions, i = this.userOptions[e], a = m(r?.[this.type]?.[e], r?.series?.[e]);
		return i && !j(a) ? n !== i : n !== m(a, n);
	}
	onMouseOver() {
		let e = this, t = e.chart, n = t.hoverSeries;
		t.pointer?.setHoverChartIndex(), n && n !== e && n.onMouseOut(), C(e, "mouseOver"), e.setState("hover"), t.hoverSeries = e;
	}
	onMouseOut() {
		let e = this, t = e.chart, n = t.tooltip, r = t.hoverPoint;
		t.hoverSeries = null, r && r.onMouseOut(), C(e, "mouseOut"), n && !e.stickyTracking && (!n.shared || e.noSharedTooltip) && n.hide(), t.series.forEach(function(e) {
			e.setState("", !0);
		});
	}
	setState(e, n) {
		let r = this, { graph: i, options: a } = r, { inactiveOtherPoints: o, states: s } = a, c = m(s?.[e || "normal"]?.animation, r.chart.options.chart.animation), { lineWidth: l, opacity: u } = a;
		if (e ||= "", r.state !== e && ([
			r.group,
			r.markerGroup,
			...r.dataLabelsGroups || []
		].forEach(function(t) {
			t && (r.state && t.removeClass("highcharts-series-" + r.state), e && t.addClass("highcharts-series-" + e));
		}), r.state = e, !r.chart.styledMode)) {
			if (s[e]?.enabled === !1) return;
			if (e && (l = s[e].lineWidth || l + (s[e].lineWidthPlus || 0), u = m(s[e].opacity, u)), i && !i.dashstyle && t(l)) for (let e of [i, ...this.zones.map((e) => e.graph)]) e?.animate({ "stroke-width": l }, c);
			o || [
				r.group,
				r.markerGroup,
				...r.dataLabelsGroups || [],
				r.labelBySeries
			].forEach(function(e) {
				e?.animate({ opacity: u }, c);
			});
		}
		n && o && r.points && r.setAllPointsToState(e || void 0);
	}
	setAllPointsToState(e) {
		this.points.forEach(function(t) {
			t.setState && t.setState(e);
		});
	}
	setVisible(e, t) {
		let n = this, r = n.chart, i = r.options.chart.ignoreHiddenSeries, a = n.visible;
		n.visible = e = n.options.visible = n.userOptions.visible = e === void 0 ? !a : e;
		let o = e ? "show" : "hide";
		[
			"group",
			"markerGroup",
			"tracker",
			"tt"
		].forEach((e) => {
			n[e]?.[o]();
		}), n.dataLabelsGroups?.forEach((e) => {
			e?.[o]();
		}), (r.hoverSeries === n || r.hoverPoint?.series === n) && n.onMouseOut(), n.legendItem && r.legend.colorizeItem(n, e), n.isDirty = !0, n.options.stacking && r.series.forEach((e) => {
			e.options.stacking && e.visible && (e.isDirty = !0);
		}), n.linkedSeries.forEach((t) => {
			t.setVisible(e, !1);
		}), i && (r.isDirtyBox = !0), C(n, o), t !== !1 && r.redraw();
	}
	show() {
		this.setVisible(!0);
	}
	hide() {
		this.setVisible(!1);
	}
	select(e) {
		let t = this;
		t.selected = e = this.options.selected = e === void 0 ? !t.selected : e, t.checkbox && (t.checkbox.checked = e), C(t, e ? "select" : "unselect");
	}
	shouldShowTooltip(e, t, n = {}) {
		return n.series = this, n.visiblePlotOnly = !0, this.chart.isInsidePlot(e, t, n);
	}
	drawLegendSymbol(e, t) {
		let n = this.chart.renderer, r = this.options.legendSymbol || "rectangle", i = t.legendItem || {}, { options: a, symbolHeight: o, symbolWidth: s } = e, c = a.squareSymbol, l = c ? o : s, u = c ? (s - o) / 2 : 0, d = (e.baseline || 0) - o + 1, f = l, p = o, m = a.symbolRadius ?? o, h = r === "rectangle" ? n.rect(u, d, f, p, m) : n.symbols[r] && n.symbol(r, u, d, f, p, { r: m });
		h ? i.symbol = h.addClass("highcharts-point").attr({ zIndex: 3 }).add(i.group) : V[r]?.call(this, e, t);
	}
};
G.defaultOptions = oe, G.types = P.seriesTypes, G.registerType = P.registerSeriesType, G.keepProps = [
	"colorIndex",
	"eventOptions",
	"navigatorSeries",
	"symbolIndex",
	"baseSeries"
], G.keepPropsForPoints = [
	"data",
	"isDirtyData",
	"isDirtyCanvas",
	"points",
	"condemnedPoints",
	"dataTable",
	"hasProcessedDataTable",
	"xIncrement",
	"cropped",
	"_hasPointMarkers",
	"hasDataLabels",
	"nodes",
	"layout",
	"level",
	"mapMap",
	"mapData",
	"minY",
	"maxY",
	"minX",
	"maxX",
	"transformGroups"
], r(G.prototype, {
	axisTypes: ["xAxis", "yAxis"],
	coll: "series",
	colorCounter: 0,
	directTouch: !1,
	invertible: !0,
	isCartesian: !0,
	kdAxisArray: ["clientX", "plotY"],
	parallelArrays: ["x", "y"],
	pointClass: te,
	requireSorting: !0,
	sorted: !0
}), P.series = G;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Axis/Stacking/StackItem.js
var { format: fe } = N, { series: pe } = P, me = class {
	constructor(e, t, n, r, i) {
		let a = e.chart.inverted, o = e.reversed;
		this.axis = e;
		let s = this.isNegative = !!n != !!o;
		this.options = t ||= {}, this.x = r, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = !1, this.stack = i, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = {
			align: t.align || (a ? s ? "left" : "right" : "center"),
			verticalAlign: t.verticalAlign || (a ? "middle" : s ? "bottom" : "top"),
			y: t.y,
			x: t.x
		}, this.textAlign = t.textAlign || (a ? s ? "right" : "left" : "center");
	}
	destroy() {
		l(this, this.axis);
	}
	render(e) {
		let t = this.axis.chart, n = this.options, r = n.format, i = (r ? fe(r, this, t) : n.formatter?.call(this, this)) || "";
		if (this.label) this.label.attr({
			text: i,
			visibility: "hidden"
		});
		else {
			this.label = t.renderer.label(i, null, void 0, n.shape, void 0, void 0, n.useHTML, !1, "stack-labels");
			let r = {
				r: n.borderRadius || 0,
				text: i,
				padding: m(n.padding, 5),
				visibility: "hidden"
			};
			t.styledMode || (r.fill = n.backgroundColor, r.stroke = n.borderColor, r["stroke-width"] = n.borderWidth, this.label.css(n.style || {})), this.label.attr(r), this.label.added || this.label.add(e);
		}
		this.label.labelrank = t.plotSizeY, C(this, "afterRender");
	}
	setOffset(n, r, i, a, o, s) {
		let { alignOptions: c, axis: l, label: u, options: d, textAlign: f } = this, p = l.chart, h = this.getStackBox({
			xOffset: n,
			width: r,
			boxBottom: i,
			boxTop: a,
			defaultX: o,
			xAxis: s
		}), { verticalAlign: g } = c;
		if (u && h) {
			let n = u.getBBox(void 0, 0), r = u.padding, i = m(d.overflow, "justify") === "justify", a;
			c.x = d.x || 0, c.y = d.y || 0;
			let { x: o, y: s } = this.adjustStackPosition({
				labelBox: n,
				verticalAlign: g,
				textAlign: f
			});
			h.x -= o, h.y -= s, u.align(c, !1, h), a = p.isInsidePlot(u.alignAttr.x + c.x + o, u.alignAttr.y + c.y + s), a || (i = !1), i && pe.prototype.justifyDataLabel.call(l, u, c, u.alignAttr, n, h), u.attr({
				x: u.alignAttr.x,
				y: u.alignAttr.y,
				rotation: d.rotation,
				rotationOriginX: n.width * e(d.textAlign || "center"),
				rotationOriginY: n.height / 2
			}), m(!i && d.crop, !0) && (a = t(u.x) && t(u.y) && p.isInsidePlot(u.x - r + (u.width || 0), u.y) && p.isInsidePlot(u.x + r, u.y)), u[a ? "show" : "hide"]();
		}
		C(this, "afterSetOffset", {
			xOffset: n,
			width: r
		});
	}
	adjustStackPosition({ labelBox: t, verticalAlign: n, textAlign: r }) {
		return {
			x: t.width / 2 + t.width / 2 * (2 * e(r) - 1),
			y: t.height / 2 * 2 * (1 - e(n))
		};
	}
	getStackBox(e) {
		let n = this, r = this.axis, i = r.chart, { boxTop: a, defaultX: o, xOffset: s, width: c, boxBottom: l } = e, u = r.stacking.usePercentage ? 100 : m(a, this.total, 0), d = r.toPixels(u), f = e.xAxis || i.xAxis[0], p = m(o, f.translate(this.x)) + s, h = r.toPixels(l || t(r.min) && r.logarithmic && r.logarithmic.lin2log(r.min) || 0), g = Math.abs(d - h), _ = i.inverted, v = n.isNegative;
		return _ ? {
			x: (v ? d : d - g) - i.plotLeft,
			y: f.height - p - c + f.top - i.plotTop,
			width: g,
			height: c
		} : {
			x: p + f.transB - i.plotLeft,
			y: (v ? d - g : d) - i.plotTop,
			width: c,
			height: g
		};
	}
}, K = {
	borderRadius: 3,
	centerInCategory: !1,
	groupPadding: .2,
	marker: null,
	pointPadding: .1,
	minPointLength: 0,
	cropThreshold: 50,
	pointRange: null,
	states: {
		hover: {
			halo: !1,
			brightness: .2
		},
		select: {
			color: "var(--highcharts-neutral-color-20)",
			borderColor: "var(--highcharts-neutral-color-100)"
		}
	},
	dataLabels: {
		align: void 0,
		verticalAlign: void 0,
		y: void 0
	},
	startFromThreshold: !0,
	stickyTracking: !1,
	tooltip: { distance: 6 },
	threshold: 0,
	borderColor: "var(--highcharts-background-color)"
}, { animObject: he } = T, { parse: ge } = x, { noop: _e } = D, q = class extends G {
	animate(e) {
		let t = this, n = this.yAxis, i = n.pos, a = n.reversed, o = t.options, { clipOffset: s, inverted: c } = this.chart, l = {}, u = c ? "translateX" : "translateY", d, f;
		e && s ? (l.scaleY = .001, f = b(n.toPixels(o.threshold || 0), i, i + n.len), c ? (f += a ? -Math.floor(s[+!!c]) : Math.ceil(s[c ? 3 : 2]), l.translateX = f - n.len) : (f += a ? Math.ceil(s[+!!c]) : -Math.floor(s[c ? 3 : 2]), l.translateY = f), t.clipBox && t.setClip(), t.group.attr(l)) : (d = Number(t.group.attr(u)), t.group.animate({ scaleY: 1 }, r(he(t.options.animation), { step: function(e, n) {
			t.group && (l[u] = d + n.pos * (i - d), t.group.attr(l));
		} })));
	}
	init(e, t) {
		super.init.apply(this, arguments);
		let n = this;
		e = n.chart, e.hasRendered && e.series.forEach(function(e) {
			e.type === n.type && (e.isDirty = !0);
		});
	}
	getColumnMetrics() {
		let e = this, t = e.options, n = e.xAxis, r = e.yAxis, i = n.options.reversedStacks, a = n.reversed && !i || !n.reversed && i, o = {}, s, c = 0;
		t.grouping === !1 ? c = 1 : e.chart.series.forEach(function(t) {
			let n = t.yAxis, i = t.options, a;
			t.type === e.type && t.reserveSpace() && r.len === n.len && r.pos === n.pos && (i.stacking && i.stacking !== "group" ? (s = t.stackKey, o[s] === void 0 && (o[s] = c++), a = o[s]) : i.grouping !== !1 && (a = c++), t.columnIndex = a);
		});
		let l = Math.min(Math.abs(n.transA) * (!n.brokenAxis?.hasBreaks && n.ordinal?.slope || t.pointRange || n.closestPointRange || n.tickInterval || 1), n.len), u = l * t.groupPadding, d = (l - 2 * u) / (c || 1), f = Math.min(t.maxPointWidth || n.len, m(t.pointWidth, d * (1 - 2 * t.pointPadding)));
		return e.columnMetrics = {
			width: f,
			offset: (d - f) / 2 + (u + ((e.columnIndex || 0) + +!!a) * d - l / 2) * (a ? -1 : 1),
			paddedWidth: d,
			columnCount: c
		}, e.columnMetrics;
	}
	crispCol(e, t, n, r) {
		let i = this.borderWidth, a = this.chart.inverted, o = M(t + r, i, a);
		if (t = M(t, i, a), r = o - t, this.options.crisp) {
			let t = M(e + n, i);
			e = M(e, i), n = t - e;
		}
		return {
			x: e,
			y: t,
			width: n,
			height: r
		};
	}
	adjustForMissingColumns(e, n, r, i) {
		if (!r.isNull && i.columnCount > 1) {
			let o = this.xAxis.series.filter((e) => e.visible).map((e) => e.index), c = 0, l = 0;
			a(this.xAxis.stacking?.stacks, (e) => {
				let n = typeof r.x == "number" ? e[r.x.toString()]?.points : void 0, i = n?.[this.index], a = {};
				if (n && s(i)) {
					let e = this.index, r = Object.keys(n).filter((e) => !e.match(",") && n[e] && n[e].length > 1).map(parseFloat).filter((e) => o.indexOf(e) !== -1).filter((n) => {
						let r = this.chart.series[n].options, i = r.stacking && r.stack;
						if (j(i)) {
							if (t(a[i])) return e === n && (e = a[i]), !1;
							a[i] = n;
						}
						return !0;
					}).sort((e, t) => t - e);
					c = r.indexOf(e), l = r.length;
				}
			}), c = this.xAxis.reversed ? l - 1 - c : c;
			let u = (l - 1) * i.paddedWidth + n;
			e = (r.plotX || 0) + u / 2 - n - c * i.paddedWidth;
		}
		return e;
	}
	translate() {
		let e = this, n = e.chart, r = e.options, i = e.dense = e.closestPointRange * e.xAxis.transA < 2, a = e.borderWidth = r.borderWidth ?? +!i, o = e.xAxis, s = e.yAxis, c = r.threshold, l = r.minPointLength ?? 5, u = e.getColumnMetrics(), d = u.width, f = e.pointXOffset = u.offset, p = e.dataMin, m = e.dataMax, h = e.translatedThreshold = s.getThreshold(c), g = e.barW = Math.max(d, 1 + 2 * a);
		r.pointPadding && r.crisp && (g = Math.ceil(g)), G.prototype.translate.apply(e), e.points.concat(e.condemnedPoints).forEach(function(i) {
			let a = i.yBottom ?? h, _ = 999 + Math.abs(a), v = i.plotX || 0, y = b(i.plotY, -_, s.len + _), x, S = Math.min(y, a), C = Math.max(y, a) - S, w = d, T = v + f, E = g;
			l && Math.abs(C) < l && (C = l, x = !s.reversed && !i.negative || s.reversed && i.negative, t(c) && t(m) && i.y === c && m <= c && (s.min || 0) < c && (p !== m || (s.max || 0) <= c) && (x = !x, i.negative = !i.negative), S = Math.abs(S - h) > l ? a - (x ? l : 0) : h - (x ? l : 0)), j(i.options.pointWidth) && (w = E = Math.ceil(i.options.pointWidth), T -= Math.round((w - d) / 2)), r.centerInCategory && (T = e.adjustForMissingColumns(T, w, i, u)), i.barX = T, i.pointWidth = w, i.tooltipPos = n.inverted ? [
				b(s.len + s.pos - n.plotLeft - y, s.pos - n.plotLeft, s.len + s.pos - n.plotLeft),
				o.len + o.pos - n.plotTop - T - E / 2,
				C
			] : [
				o.left - n.plotLeft + T + E / 2,
				b(y + s.pos - n.plotTop, s.pos - n.plotTop, s.len + s.pos - n.plotTop),
				C
			], i.shapeType = e.pointClass.prototype.shapeType || "roundedRect", i.shapeArgs = e.crispCol(T, S, E, i.isNull ? 0 : C);
		}), C(this, "afterColumnTranslate");
	}
	drawGraph() {
		this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
	}
	pointAttribs(e, t) {
		let n = this.options, r = this.pointAttrToOptions || {}, i = r.stroke || "borderColor", a = r["stroke-width"] || "borderWidth", o, s, c, l = e && e.color || this.color, u = e && e[i] || n[i] || l, f = e && e.options.dashStyle || n.dashStyle, p = e?.[a] ?? n[a] ?? this[a] ?? 1, h = e?.isNull && n.nullInteraction ? 0 : e?.opacity ?? n.opacity ?? 1;
		e && this.zones.length && (s = e.getZone(), l = e.options.color || s && (s.color || e.nonZonedColor) || this.color, s && (u = s.borderColor || u, f = s.dashStyle || f, p = s.borderWidth || p)), t && e && (o = d(n.states[t], e.options.states?.[t] || {}), c = o.brightness, l = o.color || c !== void 0 && ge(l).brighten(o.brightness).get() || l, u = o[i] || u, p = o[a] || p, f = o.dashStyle || f, h = m(o.opacity, h));
		let g = {
			fill: l,
			stroke: u,
			"stroke-width": p,
			opacity: e?.condemned ? 0 : h
		};
		return f && (g.dashstyle = f), g;
	}
	drawPoints(e) {
		e ||= this.points.concat(this.condemnedPoints);
		let n = this, r = this.chart, i = n.options, a = i.nullInteraction, { styledMode: o, renderer: s } = r, c = i.animationLimit || 250, l;
		e.forEach(function(e) {
			let u = e.plotY, f = e.graphic, p = !!f, m = f && r.pointCount < c ? "animate" : "attr";
			if (t(u) && (e.y !== null || a)) {
				if (l = e.shapeArgs, f && e.hasNewShapeType() && (f = f.destroy()), !f) {
					let t = l;
					e.origin && r.pointCount < c && (t = d(l, e.getOrigin(e.origin, l)), o || (t.opacity = 0), p = !0, m = "animate"), e.graphic = f = s[e.shapeType](t).add(e.group || n.group);
				}
				p && f[m](d(l)), o || f[m](n.pointAttribs(e, e.selected && "select")).shadow(e.allowShadow !== !1 && i.shadow), f.addClass(e.getClassName(), !0).attr({ visibility: e.visible ? "inherit" : "hidden" });
			} else f && (e.graphic = f.destroy());
		});
	}
	drawTracker(e = this.points) {
		let t = this, n = t.chart, r = n.pointer, i = function(e) {
			r?.normalize(e);
			let i = r?.getPointFromEvent(e);
			r && i && t.options.enableMouseTracking && (n.isInsidePlot(e.chartX - n.plotLeft, e.chartY - n.plotTop, { visiblePlotOnly: !0 }) || t.allowOutsidePlotInteraction && r?.inClass(e.target, "highcharts-point") || r?.inClass(e.target, "highcharts-data-label")) && (r.isDirectTouch = !0, i.onMouseOver(e));
		}, a;
		e.forEach(function(e) {
			a = s(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : [], e.graphic && (e.graphic.element.point = e), a.forEach(function(t) {
				(t.div || t.element).point = e;
			});
		}), t._hasTracking ||= (t.trackerGroups?.reduce((e, n) => (n === "dataLabelsGroup" ? e.push(...t.dataLabelsGroups || []) : e.push(t[n]), e), []).forEach((e) => {
			e && (e.addClass("highcharts-tracker").on("mouseover", i).on("mouseout", function(e) {
				r?.onTrackerMouseOut(e);
			}).on("touchstart", i), !n.styledMode && t.options.cursor && e.css({ cursor: t.options.cursor }));
		}), !0), C(this, "afterDrawTracker");
	}
	remove() {
		let e = this, t = e.chart;
		t.hasRendered && t.series.forEach(function(t) {
			t.type === e.type && (t.isDirty = !0);
		}), G.prototype.remove.apply(e, arguments);
	}
};
q.defaultOptions = d(G.defaultOptions, K), r(q.prototype, {
	directTouch: !0,
	getSymbol: _e,
	negStacks: !0,
	trackerGroups: ["group", "dataLabelsGroup"]
}), P.registerSeriesType("column", q);
//#endregion
//#region node_modules/highcharts/es-modules/Series/CenteredUtilities.js
var { deg2rad: J } = D, Y;
(function(e) {
	function n() {
		let e = this.options, n = this.chart, r = 2 * (e.slicedOffset || 0), i = n.plotWidth - 2 * r, a = n.plotHeight - 2 * r, o = e.center, s = Math.min(i, a), c = e.thickness, l, u = e.size, d = e.innerSize || 0, f, p;
		typeof u == "string" && (u = parseFloat(u)), typeof d == "string" && (d = parseFloat(d));
		let g = [
			m(o?.[0], "50%"),
			m(o?.[1], "50%"),
			m(u && u < 0 ? void 0 : e.size, "100%"),
			m(d && d < 0 ? void 0 : e.innerSize || 0, "0%")
		];
		for (f = 0; f < 4; ++f) p = g[f], l = f < 2 || f === 2 && /%$/.test(p), g[f] = h(p, [
			i,
			a,
			s,
			g[2]
		][f]) + (l ? r : 0);
		return g[3] > g[2] && (g[3] = g[2]), t(c) && c * 2 < g[2] && c > 0 && (g[3] = g[2] - c * 2), C(this, "afterGetCenter", { positions: g }), g;
	}
	e.getCenter = n;
	function r(e, n) {
		let r = t(e) ? e : 0, i = t(n) && n > r && n - r < 360 ? n : r + 360;
		return {
			start: J * (r + -90),
			end: J * (i + -90)
		};
	}
	e.getStartAndEndRadians = r;
})(Y ||= {});
var ve = Y, { defaultOptions: ye } = _, { noop: X } = D, be = {
	radius: 0,
	scope: "stack",
	where: void 0
}, Z = X, Q = X;
function xe(e, t, n) {
	let r = e[t], i = e[t + 1];
	i[0] === "Z" && (i = e[0]);
	let a, o, s;
	if ((r[0] === "M" || r[0] === "L") && i[0] === "A" ? (a = r, o = i, s = !0) : r[0] === "A" && (i[0] === "M" || i[0] === "L") && (a = i, o = r), a && o && o.params) {
		let r = o[1], i = o[5], c = o.params, { start: l, end: u, cx: d, cy: f } = c, p = i ? r - n : r + n, m = p ? Math.asin(n / p) : 0, h = i ? m : -m, g = Math.cos(m) * p;
		s ? (c.start = l + h, a[1] = d + g * Math.cos(l), a[2] = f + g * Math.sin(l), e.splice(t + 1, 0, [
			"A",
			n,
			n,
			0,
			0,
			1,
			d + r * Math.cos(c.start),
			f + r * Math.sin(c.start)
		])) : (c.end = u - h, o[6] = d + r * Math.cos(c.end), o[7] = f + r * Math.sin(c.end), e.splice(t + 1, 0, [
			"A",
			n,
			n,
			0,
			0,
			1,
			d + g * Math.cos(u),
			f + g * Math.sin(u)
		])), o[4] = Math.abs(c.end - c.start) < Math.PI ? 0 : 1;
	}
}
function Se(e, t, n, r, i = {}) {
	let a = Z(e, t, n, r, i), { brStart: o = !0, brEnd: s = !0, innerR: c = 0, r: l = n, start: u = 0, end: d = 0 } = i;
	if (i.open || !i.borderRadius) return a;
	let f = d - u, p = Math.sin(f / 2), m = Math.max(Math.min(h(i.borderRadius || 0, l - c), (l - c) / 2, l * p / (1 + p)), 0), g = Math.min(m, f / Math.PI * 2 * c), _ = a.length - 1;
	for (; _--;) !o && (_ === 0 || _ === 3) || !s && (_ === 1 || _ === 2) || xe(a, _, _ > 1 ? g : m);
	return a;
}
function Ce() {
	if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
		let { options: e, yAxis: t } = this, n = e.stacking === "percent", i = ye.plotOptions?.[this.type]?.borderRadius, a = $(e.borderRadius, f(i) ? i : {}), o = t.options.reversed;
		for (let i of this.points) {
			let { shapeArgs: s } = i;
			if (i.shapeType === "roundedRect" && s) {
				let { width: c = 0, height: l = 0, y: u = 0 } = s, d = u, f = l;
				if (a.scope === "stack" && i.stackTotal) {
					let r = t.translate(n ? 100 : i.stackTotal, !1, !0, !1, !0), a = t.translate(e.threshold || 0, !1, !0, !1, !0), o = this.crispCol(0, Math.min(r, a), 0, Math.abs(r - a));
					d = o.y, f = o.height;
				}
				let p = (i.negative ? -1 : 1) * (o ? -1 : 1) == -1, m = a.where;
				!m && this.is("waterfall") && Math.abs((i.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (m = "all"), m ||= "end";
				let g = Math.min(h(a.radius, c), c / 2, m === "all" ? f / 2 : Infinity) || 0;
				m === "end" && (p && (d -= g), f += g), r(s, {
					brBoxHeight: f,
					brBoxY: d,
					r: g
				});
			}
		}
	}
}
function we(e, t, n) {
	let r = e.types.pie;
	if (!t.symbolCustomAttribs.includes("borderRadius")) {
		let i = n.prototype.symbols;
		y(e, "afterColumnTranslate", Ce, { order: 9 }), y(r, "afterTranslate", Te), t.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY", "brEnd", "brStart"), Z = i.arc, Q = i.roundedRect, i.arc = Se, i.roundedRect = Ee;
	}
}
function $(e, t) {
	return f(e) || (e = { radius: e || 0 }), d(be, t, e);
}
function Te() {
	let e = $(this.options.borderRadius);
	for (let t of this.points) {
		let n = t.shapeArgs;
		n && (n.borderRadius = h(e.radius, (n.r || 0) - (n.innerR || 0)));
	}
}
function Ee(e, t, n, r, i = {}) {
	let a = Q(e, t, n, r, i), { r: o = 0, brBoxHeight: s = r, brBoxY: c = t } = i, l = t - c, u = c + s - (t + r), d = l - o > -.1 ? 0 : o, f = u - o > -.1 ? 0 : o, p = Math.max(d && l, 0), m = Math.max(f && u, 0), h = [e + d, t], g = [e + n - d, t], _ = [e + n, t + d], v = [e + n, t + r - f], y = [e + n - f, t + r], b = [e + f, t + r], x = [e, t + r - f], S = [e, t + d], C = (e, t) => Math.sqrt(e ** 2 - t ** 2);
	if (p) {
		let e = C(d, d - p);
		h[0] -= e, g[0] += e, _[1] = S[1] = t + d - p;
	}
	if (r < d - p) {
		let i = C(d, d - p - r);
		_[0] = v[0] = e + n - d + i, y[0] = Math.min(_[0], y[0]), b[0] = Math.max(v[0], b[0]), x[0] = S[0] = e + d - i, _[1] = S[1] = t + r;
	}
	if (m) {
		let e = C(f, f - m);
		y[0] += e, b[0] -= e, v[1] = x[1] = t + r - f + m;
	}
	if (r < f - m) {
		let i = C(f, f - m - r);
		_[0] = v[0] = e + n - f + i, g[0] = Math.min(_[0], g[0]), h[0] = Math.max(v[0], h[0]), x[0] = S[0] = e + f - i, v[1] = x[1] = t;
	}
	return a.length = 0, a.push(["M", ...h], ["L", ...g], [
		"A",
		d,
		d,
		0,
		0,
		1,
		..._
	], ["L", ...v], [
		"A",
		f,
		f,
		0,
		0,
		1,
		...y
	], ["L", ...b], [
		"A",
		f,
		f,
		0,
		0,
		1,
		...x
	], ["L", ...S], [
		"A",
		d,
		d,
		0,
		0,
		1,
		...h
	], ["Z"]), a;
}
//#endregion
export { me as a, z as c, q as i, I as l, $ as n, G as o, ve as r, V as s, we as t };

//# sourceMappingURL=BorderRadius-2zMZW_aK.js.map