import { K as e, O as t, Q as n, W as r, c as i, h as a, k as o, lt as s, st as c, t as l, tt as u, w as d } from "./AnimationUtilities-CJw-tdb_.js";
//#region node_modules/highcharts/es-modules/Extensions/PatternFill.js
var { getOptions: f } = i, p = h();
function m(e, t, n) {
	let r = t.prototype.pointClass, i = r.prototype;
	i.calculatePatternDimensions || (a(e, "endResize", v), a(e, "redraw", y), o(i, { calculatePatternDimensions: C }), a(r, "afterInit", b), a(t, "render", S), c(t.prototype, "getColor", T), a(t, "afterRender", E), a(t, "mapZoomComplete", E), o(n.prototype, { addPattern: w }), a(n, "complexColor", x));
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
function g(t, n) {
	let r = e({}, t), i = n.getBBox ? n.getBBox() : {
		x: 0,
		y: 0,
		width: 32,
		height: 32
	};
	return r._x = i.x, r._y = i.y, r;
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
	let e = {}, n = this.renderer, r = (n.defIds || []).filter((e) => e.indexOf && e.indexOf("highcharts-pattern-") === 0);
	if (r.length) {
		[].forEach.call(this.renderTo.querySelectorAll("[color^=\"url(\"], [fill^=\"url(\"], [stroke^=\"url(\"]"), (t) => {
			let r = t.getAttribute("fill") || t.getAttribute("color") || t.getAttribute("stroke");
			if (r) {
				let t = r.replace(n.url, "").replace("url(#", "").replace(")", "");
				e[t] = !0;
			}
		});
		for (let i of r) e[i] || (t(n.defIds, i), n.patternElements[i] && (n.patternElements[i].destroy(), delete n.patternElements[i]));
	}
}
function b() {
	let t = this, n = t.options.color;
	n && (n.pattern || n.patternIndex !== void 0) && (typeof n.pattern?.path == "string" && (n.pattern.path = { d: n.pattern.path }), t.color = t.options.color = e(t.series.options.color, n));
}
function x(t) {
	let r = t.args[0], i = t.args[1], a = t.args[2], o = this.chartIndex || 0, s = r.pattern, c = "var(--highcharts-neutral-color-80)";
	if (r.patternIndex !== void 0 && p && (s = p[r.patternIndex]), !s) return !0;
	if (s.image || typeof s.path == "string" || s.path && s.path.d) {
		let t = a.parentNode && a.parentNode.getAttribute("class");
		t &&= t.indexOf("highcharts-legend") > -1, (s._width === "defer" || s._height === "defer") && C.call({ graphic: { element: a } }, s), (t || !s.id || s.anchorToPoint) && (s = e({}, s), s.anchorToPoint && (s = g(s, a)), s.id = "highcharts-pattern-" + o + "-" + _(s) + _(s, !0) + (s.anchorToPoint ? "-anchored" : "")), this.addPattern(s, !this.forExport && n(s.animation, this.globalAnimation, { duration: 100 })), c = `url(${this.url}#${s.id + (this.forExport ? "-export" : "")})`;
	} else c = s.color || c;
	return a.setAttribute(i, c), r.toString = function() {
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
function w(e, t) {
	let i = n(t, !0), a = l(i), o = e.color || "var(--highcharts-neutral-color-80)", s = e.height || (typeof e._height == "number" ? e._height : 0) || 32, c = e.width || (typeof e._width == "number" ? e._width : 0) || 32, d = e.anchorToPoint ? "userSpaceOnUse" : e.patternContentUnits || "userSpaceOnUse", f = (e) => this.rect(0, 0, c, s).attr({ fill: e }).add(_), p, m = e.id, h;
	if (m || (this.idCounter = this.idCounter || 0, m = "highcharts-pattern-" + this.idCounter + "-" + (this.chartIndex || 0), ++this.idCounter), this.forExport && (m += "-export"), this.defIds = this.defIds || [], this.defIds.indexOf(m) > -1) return;
	this.defIds.push(m);
	let g = {
		id: m,
		patternUnits: "userSpaceOnUse",
		patternContentUnits: d,
		width: c,
		height: s,
		x: e._x || e.x || 0,
		y: e._y || e.y || 0
	};
	e._inverted && (g.patternTransform = "scale(1, -1)", e.patternTransform && (e.patternTransform += " scale(1, -1)")), e.patternTransform && (g.patternTransform = e.patternTransform);
	let _ = this.createElement("pattern").attr(g).add(this.defs);
	return _.id = m, e.path ? (h = r(e.path) ? e.path : { d: e.path }, e.backgroundColor && f(e.backgroundColor), p = { d: h.d }, this.styledMode || (p.stroke = h.stroke || o, p["stroke-width"] = n(h.strokeWidth, 2), p.fill = h.fill || "none"), h.transform && (p.transform = h.transform), this.createElement("path").attr(p).add(_), _.color = o) : e.image && (i ? this.image(e.image, 0, 0, c, s, function() {
		this.animate({ opacity: n(e.opacity, 1) }, a), u(this.element, "load");
	}).attr({ opacity: 0 }).add(_) : this.image(e.image, 0, 0, c, s).add(_)), !(e.image && i) && e.opacity !== void 0 && [].forEach.call(_.element.childNodes, (t) => {
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
var D = s;
D.patterns = p, m(D.Chart, D.Series, D.SVGRenderer);
//#endregion
