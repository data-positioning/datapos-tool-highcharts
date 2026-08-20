import { A as e, C as t, G as n, H as r, I as i, J as a, K as o, M as s, O as c, Q as l, S as u, U as d, W as f, b as p, c as m, h, k as g, lt as _, ot as v, p as y, rt as b, t as x, tt as S, u as C, v as w, x as T, z as E } from "./AnimationUtilities-CJw-tdb_.js";
//#region node_modules/highcharts/es-modules/Core/Renderer/HTML/AST.js
var { SVG_NS: D, win: O } = _, { trustedTypes: k } = O, A = k && r(k.createPolicy) && k.createPolicy("highcharts", { createHTML: (e) => e }), j = A ? A.createHTML("") : "", M = class e {
	static filterUserAttributes(t) {
		return a(t, (r, i) => {
			let a = !0;
			e.allowedAttributes.indexOf(i) === -1 && (a = !1), [
				"background",
				"dynsrc",
				"href",
				"lowsrc",
				"src"
			].indexOf(i) !== -1 && (a = n(r) && e.allowedReferences.some((e) => r.indexOf(e) === 0)), a || (C(33, !1, void 0, { "Invalid attribute in config": `${i}` }), delete t[i]), n(r) && t[i] && (t[i] = r.replace(/</g, "&lt;"));
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
	addToDOM(n) {
		function r(n, i) {
			let o;
			return b(n).forEach(function(n) {
				let s = n.tagName, c = n.textContent ? _.doc.createTextNode(n.textContent) : void 0, l = e.bypassHTMLFiltering, u;
				if (s) {
					if (s === "#text") u = c;
					else if (e.allowedTags.indexOf(s) !== -1 || l) {
						let o = s === "svg" ? D : i.namespaceURI || D, d = _.doc.createElementNS(o, s), f = n.attributes || {};
						a(n, function(e, t) {
							t !== "tagName" && t !== "attributes" && t !== "children" && t !== "style" && t !== "textContent" && (f[t] = e);
						}), w(d, l ? f : e.filterUserAttributes(f)), n.style && t(d, n.style), c && d.appendChild(c), r(n.children || [], d), u = d;
					} else C(33, !1, void 0, { "Invalid tagName in config": s });
				}
				u && i.appendChild(u), o = u;
			}), o;
		}
		return r(this.nodes, n);
	}
	parseMarkup(t) {
		let n = [];
		t = t.trim().replace(/ style=(["'])/g, " data-style=$1");
		let r;
		try {
			r = new DOMParser().parseFromString(A ? A.createHTML(t) : t, "text/html");
		} catch {}
		if (!r) {
			let e = T("div");
			e.innerHTML = t, r = { body: e };
		}
		let i = (t, n) => {
			let r = t.localName || t.nodeName.toLowerCase(), a = { tagName: r };
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
M.allowedAttributes = /* @__PURE__ */ "alt.aria-controls.aria-describedby.aria-expanded.aria-haspopup.aria-hidden.aria-label.aria-labelledby.aria-live.aria-pressed.aria-readonly.aria-roledescription.aria-selected.aria-sort.class.clip-path.color.colspan.cx.cy.d.disabled.dx.dy.fill.filterUnits.flood-color.flood-opacity.height.href.id.in.in2.markerHeight.markerWidth.offset.opacity.operator.orient.padding.paddingLeft.paddingRight.patternUnits.r.radius.refX.refY.result.role.rowspan.scope.slope.src.startOffset.stdDeviation.stop-color.stop-opacity.stroke-linecap.stroke-width.stroke.style.summary.tabindex.tableValues.target.text-align.text-anchor.textAnchor.textLength.title.type.valign.width.x.x1.x2.xlink:href.y.y1.y2.zIndex".split("."), M.allowedReferences = [
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
var { defaultOptions: N, defaultTime: P } = m, { pageLang: F } = _, I = {
	add: (e, t) => e + t,
	divide: (e, t) => t === 0 ? "" : p(e / t),
	eq: (e, t) => e == t,
	each: function(e) {
		let t = arguments[arguments.length - 1];
		return E(e) ? e.map((n, r) => B(t.body, g(f(n) ? n : { "@this": n }, {
			"@index": r,
			"@first": r === 0,
			"@last": r === e.length - 1
		}))).join("") : !1;
	},
	ge: (e, t) => e >= t,
	gt: (e, t) => e > t,
	if: (e) => !!e,
	le: (e, t) => e <= t,
	lt: (e, t) => e < t,
	multiply: (e, t) => p(e * t, 15),
	ne: (e, t) => e != t,
	subtract: (e, t) => e - t,
	ucfirst: v,
	unless: (e) => !e
}, L = {}, R = (e) => /^["'].+["']$/.test(e);
function z(e, t, n) {
	return P.dateFormat(e, t, n);
}
function B(e = "", t, r) {
	let a = /\{([^{}]+)\}/g, o = /\(([^()]+)\)/g, s = [], c = /f$/, u = /\.(\d)/, d = r?.options?.lang || N.lang, f = r?.time || P, p = r?.numberFormatter || V.bind(r), m = (e = "") => {
		let n;
		return e === "true" ? !0 : e === "false" ? !1 : (n = Number(e)).toString() === e ? n : R(e) ? e.slice(1, -1) : i(e, t);
	}, h, g, _ = 0, v;
	for (; (h = a.exec(e)) !== null;) {
		let n = h, r = o.exec(h[1]);
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
		let a = h[1] === "else";
		if (g.isBlock && g.fn && (h[1] === `/${g.fn}` || a)) {
			if (_) a || _--;
			else {
				let t = g.startInner, n = e.substr(t, h.index - t);
				g.body === void 0 ? (g.body = n, g.startInner = h.index + h[0].length) : g.elseBody = n, g.find += n + h[0], a || (s.push(g), g = void 0);
			}
		} else g.isBlock || s.push(g);
		if (r && !g?.isBlock) break;
	}
	return s.forEach((i) => {
		let { body: a, elseBody: s, expression: h, fn: g } = i, _, v;
		if (g) {
			let e = [i], n = [], o = h.length, c = 0, l;
			for (v = 0; v <= o; v++) {
				let e = h.charAt(v);
				!l && (e === "\"" || e === "'") ? l = e : l === e && (l = ""), !l && (e === " " || v === o) && (n.push(h.substr(c, v - c)), c = v + 1);
			}
			for (v = I[g].length; v--;) e.unshift(m(n[v + 1]));
			_ = I[g].apply(t, e), i.isBlock && typeof _ == "boolean" && (_ = B(_ ? a : s, t, r));
		} else {
			let e = R(h) ? [h] : h.split(":");
			if (_ = m(e.shift() || ""), e.length && typeof _ == "number") {
				let t = e.join(":");
				if (c.test(t)) {
					let e = parseInt((t.match(u) || ["", "-1"])[1], 10);
					_ !== null && (_ = p(_, e, d.decimalPoint, t.indexOf(",") > -1 ? d.thousandsSep : ""));
				} else _ = f.dateFormat(t, _);
			}
			o.lastIndex = 0, o.test(i.find) && n(_) && (_ = `"${_}"`);
		}
		e = e.replace(i.find, l(_, ""));
	}), v ? B(e, t, r) : e;
}
function V(e, t, n, r) {
	e = +e || 0, t = +t;
	let i, a, [o, s] = e.toString().split("e").map(Number), c = this?.options?.lang || N.lang, l = (e.toString().split(".")[1] || "").split("e")[0].length, u = t, f = {};
	n ??= c.decimalPoint, r ??= c.thousandsSep, t === -1 ? t = Math.min(l, 20) : d(t) ? t && s < 0 && (a = t + s, a >= 0 ? (o = +o.toExponential(a).split("e")[0], t = a) : (o = Math.floor(o), e = t < 20 ? +(o * 10 ** s).toFixed(t) : 0, s = 0)) : t = 2, s && (t ??= 2, e = o), d(t) && t >= 0 && (f.minimumFractionDigits = t, f.maximumFractionDigits = t), r === "" && (f.useGrouping = !1);
	let p = r || n, m = p ? "en" : this?.locale || c.locale || F, h = JSON.stringify(f) + m;
	return i = (L[h] ?? (L[h] = new Intl.NumberFormat(m, f))).format(e), p && (i = i.replace(/([,\.])/g, "_$1").replace(/_\,/g, r ?? ",").replace("_.", n ?? ".")), (!t && +i == 0 || s < 0 && !u) && (i = "0"), s && +i != 0 && (i += "e" + (s < 0 ? "" : "+") + s), i;
}
var H = {
	dateFormat: z,
	format: B,
	helpers: I,
	numberFormat: V
}, { defaultOptions: U } = m, { format: W } = H, G = class e {
	constructor(e, t, n) {
		this.formatPrefix = "point", this.visible = !0, this.point = this, this.series = e, this.applyOptions(t, n), this.id ??= y(), this.resolveColor(), this.dataLabelOnNull ??= e.options.nullInteraction, e.chart.pointCount++, this.category = e.xAxis?.categories?.[this.x] ?? this.x, this.key = this.name ?? this.category, s(this, "afterInit");
	}
	applyOptions(t, n, r) {
		let i = this, a = i.series, s = a.options.pointValKey || a.pointValKey;
		return t = e.prototype.optionsToObject.call(this, t), g(i, t), i.options = i.options ? a.chart.options.chart.allowMutatingData ? g(i.options, t) : o(i.options, t) : t, s && (i.y = e.prototype.getNestedProperty.call(i, s)), d(n) && (i.x = n), r || (i.selected && (i.state = "select"), t.group && delete i.group, t.dataLabels && delete i.dataLabels, i.isNull = i.isValid && !i.isValid(), i.formatPrefix = i.isNull ? "null" : "point"), i;
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
	destroy(e) {
		if (!this.destroyed && !this.condemned) {
			let t = this, n = t.series, r = n.chart, i = r.hoverPoints, a = t.series.chart.renderer.globalAnimation, { duration: o } = x(a), s = () => {
				(t.graphic || t.graphics || t.dataLabel || t.dataLabels) && (S(t), t.destroyElements());
				for (let e in t) delete t[e];
				this.destroyed = !0;
			};
			t.legendItem && r.legend.destroyItem(t), i && (t.setState(), c(i, t), i.length || (r.hoverPoints = void 0)), t === r.hoverPoint && t.onMouseOut(), o && !e && n.condemnedPoints ? (n.condemnedPoints.push(this), this.graphic?.addClass("highcharts-point-condemned"), setTimeout(s, o)) : s(), r.pointCount--;
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
		}), s(r, e, t, n);
	}
	getClassName() {
		let e = this;
		return "highcharts-point" + (e.selected ? " highcharts-point-select" : "") + (e.negative && e.series.options.negativeColor !== !1 ? " highcharts-negative" : "") + (e.isNull ? " highcharts-null-point" : "") + (e.colorIndex === void 0 ? "" : " highcharts-color-" + e.colorIndex) + (e.options.className ? " " + e.options.className : "") + (e.zone?.className ? " " + e.zone.className.replace("highcharts-negative", "") : "");
	}
	getNestedProperty(e) {
		if (e) return e.indexOf("custom.") === 0 ? i(e, this.options) : this[e];
	}
	getZone() {
		let e = this.series, t = e.zones, n = e.zoneAxis || "y", r, i = 0;
		for (r = t[i]; i < t.length && this[n] >= r.value;) r = t[++i];
		return this.nonZonedColor ||= this.color, this.color = r?.color && !this.options.color ? r.color : this.nonZonedColor, r;
	}
	hasNewShapeType() {
		let e = this;
		return (e.graphic && (e.graphic.symbolName || e.graphic.element.nodeName)) !== this.shapeType;
	}
	isValid() {
		return (d(this.x) || this.x instanceof Date) && d(this.y);
	}
	optionsToObject(t) {
		let n = this.series, r = n.options.keys, i = r || n.pointArrayMap || ["y"], a = i.length, o = {}, s, c = 0, l = 0;
		if (d(t) || t === null) o[i[0]] = t;
		else if (E(t)) for (!r && t.length > a && (s = typeof t[0], s === "string" ? n.xAxis?.dateTime ? o.x = n.chart.time.parse(t[0]) : o[n.tupleKey || "name"] = t[0] : s === "number" && (o.x = t[0]), c++); l < a;) (!r || t[c] !== void 0) && (o[i[l]] = t[c]), c++, l++;
		else typeof t == "object" && (o = t, t.dataLabels && (n.hasDataLabels = () => !0), t.marker && (n._hasPointMarkers = !0));
		return (r || !n.options.data) && Object.keys(o).forEach((t) => {
			t.indexOf(".") > 0 && (e.prototype.setNestedProperty(o, o[t], t), delete o[t]);
		}), o;
	}
	pos(e, t = this.plotX, n = this.plotY) {
		let { series: r } = this, { chart: i, xAxis: a, yAxis: o } = r || {}, s = 0, c = 0;
		if (i && d(t) && d(n)) return e && (s = a ? a.pos : i.plotLeft, c = o ? o.pos : i.plotTop), i.inverted && a && o ? [o.len - n + c, a.len - t + s] : [t + s, n + c];
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
			return e[n] = i.length - 1 === r ? t : f(e[n], !0) ? e[n] : {}, e[n];
		}, e), e;
	}
	shouldDraw() {
		return !this.isNull;
	}
	tooltipFormatter(e) {
		let { chart: t, pointArrayMap: n = ["y"], tooltipOptions: r } = this.series, { valueDecimals: i = "", valuePrefix: a = "", valueSuffix: o = "" } = r;
		return t.styledMode && (e = t.tooltip?.styledModeFormat(e) || e), n.forEach((t) => {
			t = "{point." + t, (a || o) && (e = e.replace(RegExp(t + "}", "g"), a + t + "}" + o)), e = e.replace(RegExp(t + "}", "g"), t + ":,." + i + "f}");
		}), W(e, this, t);
	}
	update(e, t = !0, r, i) {
		let a = this, o = a.series, s = a.graphic, c = o.chart, l = o.options, u = l.data;
		function d() {
			a.applyOptions(e);
			let i = s && a.hasMockGraphic, d = a.index, p = a.y === null ? !i : i;
			s && p && (a.graphic = s.destroy(), delete a.hasMockGraphic), f(e, !0) && (s?.element && e?.marker && e.marker.symbol !== void 0 && (a.graphic = s.destroy()), e?.dataLabels && a.dataLabel && (a.dataLabel = a.dataLabel.destroy()));
			let m = a.optionsToObject(e);
			o.hasProcessedDataTable || (o.dataTable.setRow(m, d), u && (u[d] = f(u[d], !0) || f(e, !0) ? a.options : e ?? u[d])), o.isDirty = o.isDirtyData = !0, "x" in m && (n(m.x) && (o.xColumnIsNumbers = void 0), a.x = o.getX(m.x), a.isNull = a.isValid && !a.isValid(), o.xColumn && (o.xColumn[d] = a.x)), !o.fixedBox && o.hasCartesianSeries && (c.isDirtyBox = !0), l.legendType === "point" && (c.isDirtyLegend = !0), t && c.redraw(r);
		}
		i === !1 ? d() : a.firePointEvent("update", { options: e }, d);
	}
	remove(e, t) {
		this.series.removePoint(this.series.data.indexOf(this), e, t);
	}
	select(e, t) {
		let n = this, r = n.series, i = r.chart;
		e = l(e, !n.selected), this.selectedStaging = e, n.firePointEvent(e ? "select" : "unselect", { accumulate: t }, function() {
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
		let t = this, n = o(t.series.options.point, t.options).events?.[e];
		r(n) && (!t.hcEvents?.[e] || t.hcEvents?.[e]?.map((e) => e.fn).indexOf(n) === -1) ? (t.importedUserEvent?.(), t.importedUserEvent = h(t, e, n), t.hcEvents && (t.hcEvents[e].userEvent = !0)) : t.importedUserEvent && !n && t.hcEvents?.[e] && t.hcEvents?.[e].userEvent && (S(t, e), delete t.hcEvents[e], Object.keys(t.hcEvents) || delete t.importedUserEvent);
	}
	setState(e, t) {
		let n = this, r = n.series, i = n.state, a = r.options.states?.[e || "normal"] || {}, c = U.plotOptions?.[r.type]?.marker && r.options.marker, u = c?.enabled === !1, p = c?.states?.[e || "normal"] || {}, m = p.enabled === !1, h = n.marker || {}, _ = r.chart, v = c && r.markerAttribs, y = r.halo, b, x, S, C = r.stateMarkerGraphic, w;
		if (e ||= "", e === n.state && !t || n.selected && e !== "select" || a.enabled === !1 || e && (m || u && p.enabled === !1) || e && h.states?.[e]?.enabled === !1) return;
		if (n.state = e, v && (b = r.markerAttribs(n, e)), n.graphic && !n.hasMockGraphic) {
			if (i && n.graphic.removeClass("highcharts-point-" + i), e && n.graphic.addClass("highcharts-point-" + e), !_.styledMode) {
				x = r.pointAttribs(n, e), S = _.options.chart.animation ?? a.animation;
				let t = x.opacity;
				r.options.inactiveOtherPoints && d(t) && (n.dataLabels || []).forEach(function(e) {
					e && !e.hasClass("highcharts-data-label-hidden") && (e.animate({ opacity: t }, S), e.connector && e.connector.animate({ opacity: t }, S));
				}), n.graphic.animate(x, S);
			}
			b && n.graphic.animate(b, _.options.chart.animation ?? p.animation ?? c.animation), C && C.hide();
		} else e && p && (w = h.symbol || r.symbol, C && C.currentSymbol !== w && (C = C.destroy()), b && (C ? C[t ? "animate" : "attr"]({
			x: b.x,
			y: b.y
		}) : w && (r.stateMarkerGraphic = C = _.renderer.symbol(w, b.x, b.y, b.width, b.height, o(c, p)).add(r.markerGroup), C.currentSymbol = w)), !_.styledMode && C && n.state !== "inactive" && C.attr(r.pointAttribs(n, e))), C && (C[e && n.isInside ? "show" : "hide"](), C.element.point = n, C.addClass(n.getClassName(), !0));
		let T = f(a.halo) ? a.halo : {}, E = n.graphic || C, D = E?.visibility || "inherit";
		T.size && E && D !== "hidden" && !n.isCluster ? (y || (r.halo = y = _.renderer.path().add(E.parentGroup)), y.show()[t ? "animate" : "attr"]({ d: n.haloPath(T.size) }), y.attr({
			class: "highcharts-halo highcharts-color-" + l(n.colorIndex, r.colorIndex) + (n.className ? " " + n.className : ""),
			visibility: D,
			zIndex: -1
		}), y.point = n, _.styledMode || y.attr(g({
			fill: n.color || r.color,
			"fill-opacity": T.opacity
		}, M.filterUserAttributes(T.attributes || {})))) : y?.point?.haloPath && !y.point.destroyed && y.animate({ d: y.point.haloPath(0) }, null, y.hide), s(n, "afterSetState", { state: e });
	}
	haloPath(e) {
		let t = this.pos();
		return t ? this.series.chart.renderer.symbols.circle(u(t[0], 1) - e, t[1] - e, e * 2, e * 2) : [];
	}
}, { defaultOptions: K } = m, q;
(function(t) {
	t.seriesTypes = _.seriesTypes;
	function n(e, n) {
		let r = K.plotOptions || {}, i = n.defaultOptions, a = n.prototype;
		return a.type = e, a.pointClass ||= G, !t.seriesTypes[e] && (i && (r[e] = i), t.seriesTypes[e] = n, !0);
	}
	t.registerSeriesType = n;
	function r(r, i, a, s, c) {
		let l = K.plotOptions || {};
		i ||= "", l[r] = o(l[i], a), delete t.seriesTypes[r];
		let u = t.seriesTypes[i] || _.Series;
		if (n(r, e(u, s)), t.seriesTypes[r].prototype.type = r, c) {
			class e extends G {}
			g(e.prototype, c), t.seriesTypes[r].prototype.pointClass = e;
		}
		return t.seriesTypes[r];
	}
	t.seriesType = r;
})(q ||= {});
var J = q;
//#endregion
export { M as i, G as n, H as r, J as t };
