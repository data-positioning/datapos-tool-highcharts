import { E as e, Q as t, T as n, U as r, V as i, Y as a, a as o, f as s, it as c, ot as l, t as u, x as d } from "./AnimationUtilities-Bby2idBR.js";
//#region node_modules/highcharts/es-modules/Extensions/PatternFill.js
var { getOptions: f } = o, p = h();
function m(t, n, r) {
	let i = n.prototype.pointClass, a = i.prototype;
	a.calculatePatternDimensions || (s(t, "endResize", v), s(t, "redraw", y), e(a, { calculatePatternDimensions: C }), s(i, "afterInit", b), s(n, "render", S), c(n.prototype, "getColor", T), s(n, "afterRender", E), s(n, "mapZoomComplete", E), e(r.prototype, { addPattern: w }), s(r, "complexColor", x));
}
function h() {
	let e = [], t = f().colors, n = 0;
	for (let r of [
		"M 0 0 L 5 5 M 4.5 -0.5 L 5.5 0.5 M -0.5 4.5 L 0.5 5.5",
		"M 0 5 L 5 0 M -0.5 0.5 L 0.5 -0.5 M 4.5 5.5 L 5.5 4.5",
		"M 2 0 L 2 5 M 4 0 L 4 5",
		"M 0 2 L 5 2 M 0 4 L 5 4",
		"M 0 1.5 L 2.5 1.5 L 2.5 0 M 2.5 5 L 2.5 3.5 L 5 3.5"
	]) e.push({
		path: r,
		color: t[n++],
		width: 5,
		height: 5,
		patternTransform: "scale(1.4 1.4)"
	});
	n = 5;
	for (let r of [
		"M 0 0 L 5 10 L 10 0",
		"M 3 3 L 8 3 L 8 8 L 3 8 Z",
		"M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0",
		"M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11",
		"M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9"
	]) e.push({
		path: r,
		color: t[n++],
		width: 10,
		height: 10
	});
	return e;
}
function g(e, t) {
	let n = r({}, e), i = t.getBBox ? t.getBBox() : {
		x: 0,
		y: 0,
		width: 32,
		height: 32
	};
	return n._x = i.x, n._y = i.y, n;
}
function _(e, t) {
	let n = JSON.stringify(e), r = n.length || 0, i = 0, a = 0, o, s;
	if (t) {
		s = Math.max(Math.floor(r / 500), 1);
		for (let e = 0; e < r; e += s) i += n.charCodeAt(e);
		i &= i;
	}
	for (; a < r; ++a) o = n.charCodeAt(a), i = (i << 5) - i + o, i &= i;
	return i.toString(16).replace("-", "1");
}
function v() {
	if (this.renderer && (this.renderer.defIds || []).filter((e) => e && e.indexOf && e.indexOf("highcharts-pattern-") === 0).length) {
		for (let e of this.series) if (e.visible) for (let t of e.points) {
			let e = t.options && t.options.color;
			e && e.pattern && (e.pattern._width = "defer", e.pattern._height = "defer");
		}
		this.redraw(!1);
	}
}
function y() {
	let e = {}, t = this.renderer, r = (t.defIds || []).filter((e) => e.indexOf && e.indexOf("highcharts-pattern-") === 0);
	if (r.length) {
		[].forEach.call(this.renderTo.querySelectorAll("[color^=\"url(\"], [fill^=\"url(\"], [stroke^=\"url(\"]"), (n) => {
			let r = n.getAttribute("fill") || n.getAttribute("color") || n.getAttribute("stroke");
			if (r) {
				let n = r.replace(t.url, "").replace("url(#", "").replace(")", "");
				e[n] = !0;
			}
		});
		for (let i of r) e[i] || (n(t.defIds, i), t.patternElements[i] && (t.patternElements[i].destroy(), delete t.patternElements[i]));
	}
}
function b() {
	let e = this, t = e.options.color;
	t && (t.pattern || t.patternIndex !== void 0) && (typeof t.pattern?.path == "string" && (t.pattern.path = { d: t.pattern.path }), e.color = e.options.color = r(e.series.options.color, t));
}
function x(e) {
	let t = e.args[0], n = e.args[1], i = e.args[2], o = this.chartIndex || 0, s = t.pattern, c = "var(--highcharts-neutral-color-80)";
	if (t.patternIndex !== void 0 && p && (s = p[t.patternIndex]), !s) return !0;
	if (s.image || typeof s.path == "string" || s.path && s.path.d) {
		let e = i.parentNode && i.parentNode.getAttribute("class");
		e &&= e.indexOf("highcharts-legend") > -1, (s._width === "defer" || s._height === "defer") && C.call({ graphic: { element: i } }, s), (e || !s.id || s.anchorToPoint) && (s = r({}, s), s.anchorToPoint && (s = g(s, i)), s.id = "highcharts-pattern-" + o + "-" + _(s) + _(s, !0) + (s.anchorToPoint ? "-anchored" : "")), this.addPattern(s, !this.forExport && a(s.animation, this.globalAnimation, { duration: 100 })), c = `url(${this.url}#${s.id + (this.forExport ? "-export" : "")})`;
	} else c = s.color || c;
	return i.setAttribute(n, c), t.toString = function() {
		return c;
	}, !1;
}
function S() {
	let e = this.chart.isResizing;
	if (this.isDirtyData || e || !this.chart.hasRendered) for (let t of this.points) {
		let n = t.options && t.options.color;
		n && n.pattern && (e && !(t.shapeArgs && t.shapeArgs.width && t.shapeArgs.height) ? (n.pattern._width = "defer", n.pattern._height = "defer") : t.calculatePatternDimensions(n.pattern));
	}
}
function C(e) {
	if (e.width && e.height && !e.anchorToPoint) return;
	let t = this.graphic && (this.graphic.getBBox && this.graphic.getBBox(!0) || this.graphic.element && this.graphic.element.getBBox()) || {}, n = this.shapeArgs;
	if (n && (t.width = n.width || t.width, t.height = n.height || t.height, t.x = n.x || t.x, t.y = n.y || t.y), e.image) {
		if (!t.width || !t.height) {
			e._width = "defer", e._height = "defer";
			let t = this.series.chart.mapView && this.series.chart.mapView.getSVGTransform().scaleY;
			d(t) && t < 0 && (e._inverted = !0);
			return;
		}
		e.aspectRatio && (t.aspectRatio = t.width / t.height, e.aspectRatio > t.aspectRatio ? t.aspectWidth = t.height * e.aspectRatio : t.aspectHeight = t.width / e.aspectRatio), e._width = e.width || Math.ceil(t.aspectWidth || t.width), e._height = e.height || Math.ceil(t.aspectHeight || t.height);
	}
	e.anchorToPoint ? (e._x = 0, e._y = 0, e.width || (e._width = t.width), e.height || (e._height = t.height)) : (e.width || (e._x = e.x || 0, e._x += t.x - Math.round(t.aspectWidth ? Math.abs(t.aspectWidth - t.width) / 2 : 0)), e.height || (e._y = e.y || 0, e._y += t.y - Math.round(t.aspectHeight ? Math.abs(t.aspectHeight - t.height) / 2 : 0)));
}
function w(e, n) {
	let r = a(n, !0), o = u(r), s = e.color || "var(--highcharts-neutral-color-80)", c = e.height || (typeof e._height == "number" ? e._height : 0) || 32, l = e.width || (typeof e._width == "number" ? e._width : 0) || 32, d = e.anchorToPoint ? "userSpaceOnUse" : e.patternContentUnits || "userSpaceOnUse", f = (e) => this.rect(0, 0, l, c).attr({ fill: e }).add(_), p, m = e.id, h;
	if (m || (this.idCounter = this.idCounter || 0, m = "highcharts-pattern-" + this.idCounter + "-" + (this.chartIndex || 0), ++this.idCounter), this.forExport && (m += "-export"), this.defIds = this.defIds || [], this.defIds.indexOf(m) > -1) return;
	this.defIds.push(m);
	let g = {
		id: m,
		patternUnits: "userSpaceOnUse",
		patternContentUnits: d,
		width: l,
		height: c,
		x: e._x || e.x || 0,
		y: e._y || e.y || 0
	};
	e._inverted && (g.patternTransform = "scale(1, -1)", e.patternTransform && (e.patternTransform += " scale(1, -1)")), e.patternTransform && (g.patternTransform = e.patternTransform);
	let _ = this.createElement("pattern").attr(g).add(this.defs);
	return _.id = m, e.path ? (h = i(e.path) ? e.path : { d: e.path }, e.backgroundColor && f(e.backgroundColor), p = { d: h.d }, this.styledMode || (p.stroke = h.stroke || s, p["stroke-width"] = a(h.strokeWidth, 2), p.fill = h.fill || "none"), h.transform && (p.transform = h.transform), this.createElement("path").attr(p).add(_), _.color = s) : e.image && (r ? this.image(e.image, 0, 0, l, c, function() {
		this.animate({ opacity: a(e.opacity, 1) }, o), t(this.element, "load");
	}).attr({ opacity: 0 }).add(_) : this.image(e.image, 0, 0, l, c).add(_)), !(e.image && r) && e.opacity !== void 0 && [].forEach.call(_.element.childNodes, (t) => {
		t.setAttribute("opacity", e.opacity);
	}), this.patternElements = this.patternElements || {}, this.patternElements[m] = _, _;
}
function T(e) {
	let t = this.options.color;
	t && t.pattern && !t.pattern.color ? (delete this.options.color, e.apply(this, [].slice.call(arguments, 1)), t.pattern.color = this.color, this.color = this.options.color = t) : e.apply(this, [].slice.call(arguments, 1));
}
function E() {
	let e = this;
	if (!e.chart?.mapView) return;
	let t = e.chart.renderer, n = t.patternElements;
	t.defIds?.length && n && e.points.filter(function(e) {
		let t = e;
		return t.graphic ? (t.graphic.element.hasAttribute("fill") || t.graphic.element.hasAttribute("color") || t.graphic.element.hasAttribute("stroke")) && !t.options.color?.pattern?.image && !!t.group?.scaleX && !!t.group?.scaleY : !1;
	}).map(function(e) {
		let n = e;
		return {
			id: (n.graphic?.element.getAttribute("fill") || n.graphic?.element.getAttribute("color") || n.graphic?.element.getAttribute("stroke") || "").replace(t.url, "").replace("url(#", "").replace(")", ""),
			x: n.group?.scaleX || 1,
			y: n.group?.scaleY || 1
		};
	}).filter(function(e, t, n) {
		return e.id !== "" && e.id.indexOf("highcharts-pattern-") !== -1 && !n.some(function(n, r) {
			return n.id === e.id && r < t;
		});
	}).forEach(function(e) {
		let t = e.id;
		n[t].scaleX = 1 / e.x, n[t].scaleY = 1 / e.y, n[t].updateTransform("patternTransform");
	});
}
//#endregion
//#region node_modules/highcharts/es-modules/masters/modules/pattern-fill.src.js
var D = l;
D.patterns = p, m(D.Chart, D.Series, D.SVGRenderer);
//#endregion

//# sourceMappingURL=pattern-fill.src-BPmr3DQg.js.map