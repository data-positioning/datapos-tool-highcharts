import { B as e, D as t, E as n, G as r, H as i, I as a, N as o, Q as s, T as c, U as l, V as u, Y as d, _ as f, a as p, b as m, et as h, f as g, h as _, k as v, n as y, ot as b, rt as x, s as S, u as C, v as w, y as T, z as E } from "./AnimationUtilities-Bby2idBR.js";
//#region node_modules/highcharts/es-modules/Core/Renderer/HTML/AST.js
var { SVG_NS: D, win: O } = b, { trustedTypes: k } = O, A = k && E(k.createPolicy) && k.createPolicy("highcharts", { createHTML: (e) => e }), j = A ? A.createHTML("") : "", M = class e {
	static filterUserAttributes(t) {
		return r(t, (n, r) => {
			let a = !0;
			e.allowedAttributes.indexOf(r) === -1 && (a = !1), [
				"background",
				"dynsrc",
				"href",
				"lowsrc",
				"src"
			].indexOf(r) !== -1 && (a = i(n) && e.allowedReferences.some((e) => n.indexOf(e) === 0)), a || (S(33, !1, void 0, { "Invalid attribute in config": `${r}` }), delete t[r]), i(n) && t[r] && (t[r] = n.replace(/</g, "&lt;"));
		}), t;
	}
	static parseStyle(e) {
		return e.split(";").reduce((e, t) => {
			let n = t.split(":").map((e) => e.trim()), r = n.shift();
			return r && n.length && (e[r.replace(/-([a-z])/g, (e) => e[1].toUpperCase())] = n.join(":")), e;
		}, {});
	}
	static setElementHTML(t, n) {
		t.innerHTML = e.emptyHTML, n && new e(n).addToDOM(t);
	}
	constructor(e) {
		this.nodes = typeof e == "string" ? this.parseMarkup(e) : e;
	}
	addToDOM(t) {
		function n(t, i) {
			let a;
			return h(t).forEach(function(t) {
				let o = t.tagName, s = t.textContent ? b.doc.createTextNode(t.textContent) : void 0, c = e.bypassHTMLFiltering, l;
				if (o) if (o === "#text") l = s;
				else if (e.allowedTags.indexOf(o) !== -1 || c) {
					let a = o === "svg" ? D : i.namespaceURI || D, u = b.doc.createElementNS(a, o), d = t.attributes || {};
					r(t, function(e, t) {
						t !== "tagName" && t !== "attributes" && t !== "children" && t !== "style" && t !== "textContent" && (d[t] = e);
					}), _(u, c ? d : e.filterUserAttributes(d)), t.style && m(u, t.style), s && u.appendChild(s), n(t.children || [], u), l = u;
				} else S(33, !1, void 0, { "Invalid tagName in config": o });
				l && i.appendChild(l), a = l;
			}), a;
		}
		return n(this.nodes, t);
	}
	parseMarkup(t) {
		let n = [];
		t = t.trim().replace(/ style=(["'])/g, " data-style=$1");
		let r;
		try {
			r = new DOMParser().parseFromString(A ? A.createHTML(t) : t, "text/html");
		} catch {}
		if (!r) {
			let e = w("div");
			e.innerHTML = t, r = { body: e };
		}
		let i = (t, n) => {
			let r = t.nodeName.toLowerCase(), a = { tagName: r };
			r === "#text" && (a.textContent = t.textContent || "");
			let o = t.attributes;
			if (o) {
				let t = {};
				[].forEach.call(o, (n) => {
					n.name === "data-style" ? a.style = e.parseStyle(n.value) : t[n.name] = n.value;
				}), a.attributes = t;
			}
			if (t.childNodes.length) {
				let e = [];
				[].forEach.call(t.childNodes, (t) => {
					i(t, e);
				}), e.length && (a.children = e);
			}
			n.push(a);
		};
		return [].forEach.call(r.body.childNodes, (e) => i(e, n)), n;
	}
};
M.allowedAttributes = /* @__PURE__ */ "alt.aria-controls.aria-describedby.aria-expanded.aria-haspopup.aria-hidden.aria-label.aria-labelledby.aria-live.aria-pressed.aria-readonly.aria-roledescription.aria-selected.aria-sort.class.clip-path.color.colspan.cx.cy.d.disabled.dx.dy.fill.filterUnits.flood-color.flood-opacity.height.href.id.in.in2.markerHeight.markerWidth.offset.opacity.operator.orient.padding.paddingLeft.paddingRight.patternUnits.r.radius.refX.refY.result.role.rowspan.scope.slope.src.startOffset.stdDeviation.stroke-linecap.stroke-width.stroke.style.summary.tabindex.tableValues.target.text-align.text-anchor.textAnchor.textLength.title.type.valign.width.x.x1.x2.xlink:href.y.y1.y2.zIndex".split("."), M.allowedReferences = [
	"https://",
	"http://",
	"mailto:",
	"/",
	"../",
	"./",
	"#"
], M.allowedTags = /* @__PURE__ */ "#text.a.abbr.b.br.button.caption.circle.clipPath.code.dd.defs.div.dl.dt.em.feComponentTransfer.feComposite.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feMerge.feMergeNode.feMorphology.feOffset.filter.h1.h2.h3.h4.h5.h6.hr.i.img.li.linearGradient.marker.ol.p.path.pattern.pre.rect.small.span.stop.strong.style.sub.sup.svg.table.tbody.td.text.textPath.th.thead.title.tr.tspan.u.ul".split("."), M.emptyHTML = j, M.bypassHTMLFiltering = !1;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Templating.js
var { defaultOptions: N, defaultTime: P } = p, { pageLang: F } = b, I = {
	add: (e, t) => e + t,
	divide: (e, t) => t === 0 ? "" : f(e / t),
	eq: (e, t) => e == t,
	each: function(e) {
		let t = arguments[arguments.length - 1];
		return a(e) ? e.map((r, i) => B(t.body, n(u(r) ? r : { "@this": r }, {
			"@index": i,
			"@first": i === 0,
			"@last": i === e.length - 1
		}))).join("") : !1;
	},
	ge: (e, t) => e >= t,
	gt: (e, t) => e > t,
	if: (e) => !!e,
	le: (e, t) => e <= t,
	lt: (e, t) => e < t,
	multiply: (e, t) => f(e * t, 15),
	ne: (e, t) => e != t,
	subtract: (e, t) => e - t,
	ucfirst: x,
	unless: (e) => !e
}, L = {}, R = (e) => /^["'].+["']$/.test(e);
function z(e, t, n) {
	return P.dateFormat(e, t, n);
}
function B(e = "", t, n) {
	let r = /\{([^{}]+)\}/g, a = /\(([^()]+)\)/g, s = [], c = /f$/, l = /\.(\d)/, u = n?.options?.lang || N.lang, f = n?.time || P, p = n?.numberFormatter || V.bind(n), m = (e = "") => {
		let n;
		return e === "true" ? !0 : e === "false" ? !1 : (n = Number(e)).toString() === e ? n : R(e) ? e.slice(1, -1) : o(e, t);
	}, h, g, _ = 0, v;
	for (; (h = r.exec(e)) !== null;) {
		let n = h, r = a.exec(h[1]);
		r && (h = r, v = !0), g?.isBlock || (g = {
			ctx: t,
			expression: h[1],
			find: h[0],
			isBlock: h[1].charAt(0) === "#",
			start: h.index,
			startInner: h.index + h[0].length,
			length: h[0].length
		});
		let i = (g.isBlock ? n : h)[1].split(" ")[0].replace("#", "");
		I[i] && (g.isBlock && i === g.fn && _++, g.fn || (g.fn = i));
		let o = h[1] === "else";
		if (g.isBlock && g.fn && (h[1] === `/${g.fn}` || o)) if (_) o || _--;
		else {
			let t = g.startInner, n = e.substr(t, h.index - t);
			g.body === void 0 ? (g.body = n, g.startInner = h.index + h[0].length) : g.elseBody = n, g.find += n + h[0], o || (s.push(g), g = void 0);
		}
		else g.isBlock || s.push(g);
		if (r && !g?.isBlock) break;
	}
	return s.forEach((r) => {
		let { body: o, elseBody: s, expression: h, fn: g } = r, _, v;
		if (g) {
			let e = [r], i = [], a = h.length, c = 0, l;
			for (v = 0; v <= a; v++) {
				let e = h.charAt(v);
				!l && (e === "\"" || e === "'") ? l = e : l === e && (l = ""), !l && (e === " " || v === a) && (i.push(h.substr(c, v - c)), c = v + 1);
			}
			for (v = I[g].length; v--;) e.unshift(m(i[v + 1]));
			_ = I[g].apply(t, e), r.isBlock && typeof _ == "boolean" && (_ = B(_ ? o : s, t, n));
		} else {
			let e = R(h) ? [h] : h.split(":");
			if (_ = m(e.shift() || ""), e.length && typeof _ == "number") {
				let t = e.join(":");
				if (c.test(t)) {
					let e = parseInt((t.match(l) || ["", "-1"])[1], 10);
					_ !== null && (_ = p(_, e, u.decimalPoint, t.indexOf(",") > -1 ? u.thousandsSep : ""));
				} else _ = f.dateFormat(t, _);
			}
			a.lastIndex = 0, a.test(r.find) && i(_) && (_ = `"${_}"`);
		}
		e = e.replace(r.find, d(_, ""));
	}), v ? B(e, t, n) : e;
}
function V(t, n, r, i) {
	t = +t || 0, n = +n;
	let a, o, [s, c] = t.toString().split("e").map(Number), l = this?.options?.lang || N.lang, u = (t.toString().split(".")[1] || "").split("e")[0].length, d = n, f = {};
	r ??= l.decimalPoint, i ??= l.thousandsSep, n === -1 ? n = Math.min(u, 20) : e(n) ? n && c < 0 && (o = n + c, o >= 0 ? (s = +s.toExponential(o).split("e")[0], n = o) : (s = Math.floor(s), t = n < 20 ? +(s * 10 ** c).toFixed(n) : 0, c = 0)) : n = 2, c && (n ??= 2, t = s), e(n) && n >= 0 && (f.minimumFractionDigits = n, f.maximumFractionDigits = n), i === "" && (f.useGrouping = !1);
	let p = i || r, m = p ? "en" : this?.locale || l.locale || F, h = JSON.stringify(f) + m;
	return a = (L[h] ?? (L[h] = new Intl.NumberFormat(m, f))).format(t), p && (a = a.replace(/([,\.])/g, "_$1").replace(/_\,/g, i ?? ",").replace("_.", r ?? ".")), (!n && +a == 0 || c < 0 && !d) && (a = "0"), c && +a != 0 && (a += "e" + (c < 0 ? "" : "+") + c), a;
}
var H = {
	dateFormat: z,
	format: B,
	helpers: I,
	numberFormat: V
}, { animObject: U } = y, { defaultOptions: W } = p, { format: G } = H, K = class t {
	constructor(e, t, n) {
		this.formatPrefix = "point", this.visible = !0, this.point = this, this.series = e, this.applyOptions(t, n), this.id ??= C(), this.resolveColor(), this.dataLabelOnNull ??= e.options.nullInteraction, e.chart.pointCount++, this.category = e.xAxis?.categories?.[this.x] ?? this.x, this.key = this.name ?? this.category, v(this, "afterInit");
	}
	applyOptions(r, i, a) {
		let o = this, s = o.series, c = s.options.pointValKey || s.pointValKey;
		return r = t.prototype.optionsToObject.call(this, r), n(o, r), o.options = o.options ? s.chart.options.chart.allowMutatingData ? n(o.options, r) : l(o.options, r) : r, c && (o.y = t.prototype.getNestedProperty.call(o, c)), e(i) && (o.x = i), a || (o.selected && (o.state = "select"), r.group && delete o.group, r.dataLabels && delete o.dataLabels, o.isNull = o.isValid && !o.isValid(), o.formatPrefix = o.isNull ? "null" : "point"), o;
	}
	getOrigin({ x: e = 0, y: t = 0 }, n = {}) {
		let { graphic: r, series: i } = this;
		if (i.chart.inverted && r?.parentGroup && !r?.parentGroup?.rotation) {
			let n = this.pos(!1, e, t);
			n && (e = n[0], t = n[1]);
		}
		e -= (n.width || 0) / 2, t -= (n.height || 0) / 2;
		let a = { x: e };
		return !i.is("column") && !this.plotHigh && (a.y = t), a;
	}
	destroy() {
		if (!this.condemned) {
			let e = this, t = e.series, n = t.chart, r = n.hoverPoints, i = e.series.chart.renderer.globalAnimation, { duration: a } = U(i), o = () => {
				(e.graphic || e.graphics || e.dataLabel || e.dataLabels) && (s(e), e.destroyElements());
				for (let t in e) delete e[t];
			};
			e.legendItem && n.legend.destroyItem(e), r && (e.setState(), c(r, e), r.length || (n.hoverPoints = void 0)), e === n.hoverPoint && e.onMouseOut(), a && t.condemnedPoints ? (t.condemnedPoints.push(this), this.graphic?.addClass("highcharts-point-condemned"), setTimeout(o, a)) : o(), n.pointCount--;
		}
		this.condemned = !0;
	}
	destroyElements(e = {
		graphic: 1,
		dataLabel: 1
	}) {
		let t = this, n = [], r, i;
		for (e.graphic && n.push("graphic", "connector"), e.dataLabel && n.push("dataLabel", "dataLabelPath", "dataLabelUpper"), i = n.length; i--;) r = n[i], t[r] && (t[r] = t[r].destroy());
		["graphic", "dataLabel"].forEach((n) => {
			let r = `${n}s`;
			e[n] && t[r] && (t[r].forEach((e) => {
				e?.element && e.destroy();
			}), delete t[r]);
		});
	}
	firePointEvent(e, t, n) {
		let r = this, i = this.series.options;
		r.manageEvent(e), e === "click" && i.allowPointSelect && (n = function(e) {
			!r.condemned && r.select && r.select(null, e.ctrlKey || e.metaKey || e.shiftKey);
		}), v(r, e, t, n);
	}
	getClassName() {
		let e = this;
		return "highcharts-point" + (e.selected ? " highcharts-point-select" : "") + (e.negative && e.series.options.negativeColor !== !1 ? " highcharts-negative" : "") + (e.isNull ? " highcharts-null-point" : "") + (e.colorIndex === void 0 ? "" : " highcharts-color-" + e.colorIndex) + (e.options.className ? " " + e.options.className : "") + (e.zone?.className ? " " + e.zone.className.replace("highcharts-negative", "") : "");
	}
	getNestedProperty(e) {
		if (e) return e.indexOf("custom.") === 0 ? o(e, this.options) : this[e];
	}
	getZone() {
		let e = this.series, t = e.zones, n = e.zoneAxis || "y", r, i = 0;
		for (r = t[i]; this[n] >= r.value;) r = t[++i];
		return this.nonZonedColor ||= this.color, this.color = r?.color && !this.options.color ? r.color : this.nonZonedColor, r;
	}
	hasNewShapeType() {
		let e = this;
		return (e.graphic && (e.graphic.symbolName || e.graphic.element.nodeName)) !== this.shapeType;
	}
	isValid() {
		return (e(this.x) || this.x instanceof Date) && e(this.y);
	}
	optionsToObject(n) {
		let r = this.series, i = r.options.keys, o = i || r.pointArrayMap || ["y"], s = o.length, c = {}, l, u = 0, d = 0;
		if (e(n) || n === null) c[o[0]] = n;
		else if (a(n)) for (!i && n.length > s && (l = typeof n[0], l === "string" ? r.xAxis?.dateTime ? c.x = r.chart.time.parse(n[0]) : c[r.tupleKey || "name"] = n[0] : l === "number" && (c.x = n[0]), u++); d < s;) (!i || n[u] !== void 0) && (c[o[d]] = n[u]), u++, d++;
		else typeof n == "object" && (c = n, n.dataLabels && (r.hasDataLabels = () => !0), n.marker && (r._hasPointMarkers = !0));
		return (i || !r.options.data) && Object.keys(c).forEach((e) => {
			e.indexOf(".") > 0 && (t.prototype.setNestedProperty(c, c[e], e), delete c[e]);
		}), c;
	}
	pos(t, n = this.plotX, r = this.plotY) {
		let { series: i } = this, { chart: a, xAxis: o, yAxis: s } = i || {}, c = 0, l = 0;
		if (a && e(n) && e(r)) return t && (c = o ? o.pos : a.plotLeft, l = s ? s.pos : a.plotTop), a.inverted && o && s ? [s.len - r + l, o.len - n + c] : [n + c, r + l];
	}
	resolveColor() {
		let { options: e, series: t } = this, n = t.chart, r = n.options.chart, i = n.styledMode, a, o = r.colorCount, s;
		if (delete this.nonZonedColor, t.options.colorByPoint) {
			if (!i) {
				let e = t.options.colors || n.options.colors;
				a = e?.[t.colorCounter], o = e?.length;
			}
			s = t.colorCounter, t.colorCounter++, t.colorCounter === o && (t.colorCounter = 0);
		} else i || (a = t.color), s = t.colorIndex;
		this.colorIndex = e.colorIndex ?? s, this.color = e.color ?? a;
	}
	setNestedProperty(e, t, n) {
		return n.split(".").reduce(function(e, n, r, i) {
			return e[n] = i.length - 1 === r ? t : u(e[n], !0) ? e[n] : {}, e[n];
		}, e), e;
	}
	shouldDraw() {
		return !this.isNull;
	}
	tooltipFormatter(e) {
		let { chart: t, pointArrayMap: n = ["y"], tooltipOptions: r } = this.series, { valueDecimals: i = "", valuePrefix: a = "", valueSuffix: o = "" } = r;
		return t.styledMode && (e = t.tooltip?.styledModeFormat(e) || e), n.forEach((t) => {
			t = "{point." + t, (a || o) && (e = e.replace(RegExp(t + "}", "g"), a + t + "}" + o)), e = e.replace(RegExp(t + "}", "g"), t + ":,." + i + "f}");
		}), G(e, this, t);
	}
	update(e, t = !0, n, r) {
		let a = this, o = a.series, s = a.graphic, c = o.chart, l = o.options, d = l.data;
		function f() {
			a.applyOptions(e);
			let r = s && a.hasMockGraphic, f = a.index, p = a.y === null ? !r : r;
			s && p && (a.graphic = s.destroy(), delete a.hasMockGraphic), u(e, !0) && (s?.element && e?.marker && e.marker.symbol !== void 0 && (a.graphic = s.destroy()), e?.dataLabels && a.dataLabel && (a.dataLabel = a.dataLabel.destroy()));
			let m = a.optionsToObject(e);
			o.hasProcessedDataTable || (o.dataTable.setRow(m, f), d && (d[f] = u(d[f], !0) || u(e, !0) ? a.options : e ?? d[f])), o.isDirty = o.isDirtyData = !0, "x" in m && (i(m.x) && (o.xColumnIsNumbers = void 0), a.x = o.getX(m.x), a.isNull = a.isValid && !a.isValid(), o.xColumn && (o.xColumn[f] = a.x)), !o.fixedBox && o.hasCartesianSeries && (c.isDirtyBox = !0), l.legendType === "point" && (c.isDirtyLegend = !0), t && c.redraw(n);
		}
		r === !1 ? f() : a.firePointEvent("update", { options: e }, f);
	}
	remove(e, t) {
		this.series.removePoint(this.series.data.indexOf(this), e, t);
	}
	select(e, t) {
		let n = this, r = n.series, i = r.chart;
		e = d(e, !n.selected), this.selectedStaging = e, n.firePointEvent(e ? "select" : "unselect", { accumulate: t }, function() {
			n.selected = n.options.selected = e, r.options.data && (r.options.data[r.data.indexOf(n)] = n.options), n.setState(e && "select"), t || i.getSelectedPoints().forEach(function(e) {
				let t = e.series, r = t.options;
				e.selected && e !== n && (e.selected = e.options.selected = !1, r.data && (r.data[t.data.indexOf(e)] = e.options), e.setState(i.hoverPoints && r.inactiveOtherPoints ? "inactive" : ""), e.firePointEvent("unselect"));
			});
		}), delete this.selectedStaging;
	}
	onMouseOver(e) {
		let t = this, { inverted: n, pointer: r } = t.series.chart;
		r && (e = e ? r.normalize(e) : r.getChartCoordinatesFromPoint(t, n), r.runPointActions(e, t));
	}
	onMouseOut() {
		let e = this;
		if (!e.series) return;
		let t = e.series.chart;
		e.firePointEvent("mouseOut"), e.series.options.inactiveOtherPoints || (t.hoverPoints || []).forEach(function(e) {
			e.setState();
		}), t.hoverPoints = t.hoverPoint = null;
	}
	manageEvent(e) {
		let t = this, n = l(t.series.options.point, t.options).events?.[e];
		E(n) && (!t.hcEvents?.[e] || t.hcEvents?.[e]?.map((e) => e.fn).indexOf(n) === -1) ? (t.importedUserEvent?.(), t.importedUserEvent = g(t, e, n), t.hcEvents && (t.hcEvents[e].userEvent = !0)) : t.importedUserEvent && !n && t.hcEvents?.[e] && t.hcEvents?.[e].userEvent && (s(t, e), delete t.hcEvents[e], Object.keys(t.hcEvents) || delete t.importedUserEvent);
	}
	setState(t, r) {
		let i = this, a = i.series, o = i.state, s = a.options.states[t || "normal"] || {}, c = W.plotOptions[a.type].marker && a.options.marker, u = c && c.enabled === !1, f = c?.states?.[t || "normal"] || {}, p = f.enabled === !1, m = i.marker || {}, h = a.chart, g = c && a.markerAttribs, _ = a.halo, y, b, x, S = a.stateMarkerGraphic, C;
		if (t ||= "", t === i.state && !r || i.selected && t !== "select" || s.enabled === !1 || t && (p || u && f.enabled === !1) || t && m.states && m.states[t] && m.states[t].enabled === !1) return;
		if (i.state = t, g && (y = a.markerAttribs(i, t)), i.graphic && !i.hasMockGraphic) {
			if (o && i.graphic.removeClass("highcharts-point-" + o), t && i.graphic.addClass("highcharts-point-" + t), !h.styledMode) {
				b = a.pointAttribs(i, t), x = d(h.options.chart.animation, s.animation);
				let n = b.opacity;
				a.options.inactiveOtherPoints && e(n) && (i.dataLabels || []).forEach(function(e) {
					e && !e.hasClass("highcharts-data-label-hidden") && (e.animate({ opacity: n }, x), e.connector && e.connector.animate({ opacity: n }, x));
				}), i.graphic.animate(b, x);
			}
			y && i.graphic.animate(y, d(h.options.chart.animation, f.animation, c.animation)), S && S.hide();
		} else t && f && (C = m.symbol || a.symbol, S && S.currentSymbol !== C && (S = S.destroy()), y && (S ? S[r ? "animate" : "attr"]({
			x: y.x,
			y: y.y
		}) : C && (a.stateMarkerGraphic = S = h.renderer.symbol(C, y.x, y.y, y.width, y.height, l(c, f)).add(a.markerGroup), S.currentSymbol = C)), !h.styledMode && S && i.state !== "inactive" && S.attr(a.pointAttribs(i, t))), S && (S[t && i.isInside ? "show" : "hide"](), S.element.point = i, S.addClass(i.getClassName(), !0));
		let w = s.halo, T = i.graphic || S, E = T?.visibility || "inherit";
		w?.size && T && E !== "hidden" && !i.isCluster ? (_ || (a.halo = _ = h.renderer.path().add(T.parentGroup)), _.show()[r ? "animate" : "attr"]({ d: i.haloPath(w.size) }), _.attr({
			class: "highcharts-halo highcharts-color-" + d(i.colorIndex, a.colorIndex) + (i.className ? " " + i.className : ""),
			visibility: E,
			zIndex: -1
		}), _.point = i, h.styledMode || _.attr(n({
			fill: i.color || a.color,
			"fill-opacity": w.opacity
		}, M.filterUserAttributes(w.attributes || {})))) : _?.point?.haloPath && !_.point.destroyed && _.animate({ d: _.point.haloPath(0) }, null, _.hide), v(i, "afterSetState", { state: t });
	}
	haloPath(e) {
		let t = this.pos();
		return t ? this.series.chart.renderer.symbols.circle(T(t[0], 1) - e, t[1] - e, e * 2, e * 2) : [];
	}
}, { defaultOptions: q } = p, J;
(function(e) {
	e.seriesTypes = b.seriesTypes;
	function r(t, n) {
		let r = q.plotOptions || {}, i = n.defaultOptions, a = n.prototype;
		return a.type = t, a.pointClass ||= K, !e.seriesTypes[t] && (i && (r[t] = i), e.seriesTypes[t] = n, !0);
	}
	e.registerSeriesType = r;
	function i(i, a, o, s, c) {
		let u = q.plotOptions || {};
		a ||= "", u[i] = l(u[a], o), delete e.seriesTypes[i];
		let d = e.seriesTypes[a] || b.Series;
		if (r(i, t(d, s)), e.seriesTypes[i].prototype.type = i, c) {
			class t extends K {}
			n(t.prototype, c), e.seriesTypes[i].prototype.pointClass = t;
		}
		return e.seriesTypes[i];
	}
	e.seriesType = i;
})(J ||= {});
var Y = J;
//#endregion
export { M as i, K as n, H as r, Y as t };

//# sourceMappingURL=SeriesRegistry-0cj0ZJqn.js.map