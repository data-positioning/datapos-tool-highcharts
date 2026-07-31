import { A as e, E as t, U as n, X as r, Z as i, f as a, ot as o, u as s, x as c } from "./AnimationUtilities-Bby2idBR.js";
//#region node_modules/highcharts/es-modules/Series/Sankey/SankeyColumnComposition.js
var l;
(function(t) {
	function n(e, t) {
		let n = e;
		return n.sankeyColumn = new r(n, t), n;
	}
	t.compose = n;
	class r {
		constructor(e, t) {
			this.points = e, this.series = t;
		}
		getTranslationFactor(e) {
			let t = this.points, n = t.slice(), r = e.chart, i = e.options.minLinkWidth || 0, a, o = 0, s, c = (r.plotSizeY || 0) - (e.options.borderWidth || 0) - (t.length - 1) * e.nodePadding;
			for (; t.length;) {
				for (o = c / t.sankeyColumn.sum(), a = !1, s = t.length; s--;) t[s].getSum() * o < i && (t.splice(s, 1), c = Math.max(0, c - i), a = !0);
				if (!a) break;
			}
			t.length = 0;
			for (let e of n) t.push(e);
			return o;
		}
		top(t) {
			let n = this.series, r = n.nodePadding, i = this.points.reduce((e, i) => {
				e > 0 && (e += r);
				let a = Math.max(i.getSum() * t, n.options.minLinkWidth || 0);
				return e += a, e;
			}, 0);
			return e(n.options.nodeAlignment || "center") * ((n.chart.plotSizeY || 0) - i);
		}
		left(e) {
			let t = this.series, n = t.chart, r = t.options.equalNodes, i = n.inverted ? n.plotHeight : n.plotWidth, a = t.nodePadding, o = this.points.reduce((n, o) => {
				n > 0 && (n += a);
				let s = r ? i / o.series.nodes.length - a : Math.max(o.getSum() * e, t.options.minLinkWidth || 0);
				return n += s, n;
			}, 0);
			return ((n.plotSizeX || 0) - Math.round(o)) / 2;
		}
		sum() {
			return this.points.reduce((e, t) => e + t.getSum(), 0);
		}
		offset(e, t) {
			let n = this.points, r = this.series, a = r.nodePadding, o = 0, s;
			if (r.is("organization") && e.hangsFrom) return { absoluteTop: e.hangsFrom.nodeY };
			for (let l = 0; l < n.length; l++) {
				let u = n[l].getSum(), d = Math.max(u * t, r.options.minLinkWidth || 0), f = e.options[r.chart.inverted ? "offsetHorizontal" : "offsetVertical"], p = e.options.offset || 0;
				if (s = u ? d + a : 0, n[l] === e) return { relativeTop: o + (c(f) ? i(f, d) : i(p, s)) };
				o += s;
			}
		}
	}
	t.SankeyColumnAdditions = r;
})(l ||= {});
var u = l, { composed: d, deg2rad: f } = o;
function p(e, r) {
	let i = this.renderer.url, o = this.text || this, l = o.textPath, { attributes: u, enabled: d } = n({
		enabled: !0,
		attributes: {
			dy: -5,
			startOffset: "50%",
			textAnchor: "middle"
		}
	}, r);
	if (e ||= l && l.path, l?.undo(), e && d) {
		let n = a(o, "afterModifyTree", (n) => {
			if (e && d) {
				let r = e.attr("id");
				r || e.attr("id", r = s());
				let a = {
					x: 0,
					y: 0
				};
				c(u.dx) && (a.dx = u.dx, delete u.dx), c(u.dy) && (a.dy = u.dy, delete u.dy), o.attr(a), this.attr({ transform: "" }), this.box &&= this.box.destroy();
				let l = n.nodes.slice(0);
				n.nodes.length = 0, n.nodes[0] = {
					tagName: "textPath",
					attributes: t(u, {
						"text-anchor": u.textAnchor,
						href: `${i}#${r}`
					}),
					children: l
				};
			}
		});
		o.textPath = {
			path: e,
			undo: n
		};
	} else o.attr({
		dx: 0,
		dy: 0
	}), delete o.textPath;
	return this.added && (o.textCache = "", this.renderer.buildText(o)), this;
}
function m(e) {
	let t = e.bBox, n = this.element?.querySelector("textPath");
	if (n) {
		let e = [], { b: r, h: i } = this.renderer.fontMetrics(this.element), a = i - r, o = /* @__PURE__ */ RegExp("(<tspan>|<tspan(?!\\sclass=\"highcharts-br\")[^>]*>|<\\/tspan>)", "g"), s = n.innerHTML.replace(o, "").split(/<tspan class="highcharts-br"[^>]*>/), c = s.length, l = (e, t) => {
			let { x: i, y: o } = t, s = (n.getRotationOfChar(e) - 90) * f, c = Math.cos(s), l = Math.sin(s);
			return [[i - a * c, o - a * l], [i + r * c, o + r * l]];
		};
		for (let t = 0, r = 0; r < c; r++) {
			let i = s[r].length;
			for (let a = 0; a < i; a += 5) try {
				let i = t + a + r, [o, s] = l(i, n.getStartPositionOfChar(i));
				a === 0 ? (e.push(s), e.push(o)) : (r === 0 && e.unshift(s), r === c - 1 && e.push(o));
			} catch {
				break;
			}
			t += i - 1;
			try {
				let i = t + r, [a, o] = l(i, n.getEndPositionOfChar(i));
				e.unshift(o), e.unshift(a);
			} catch {
				break;
			}
		}
		e.length && e.push(e[0].slice()), t.polygon = e;
	}
	return t;
}
function h(e) {
	let t = e.labelOptions, n = e.point, r = t[n.formatPrefix + "TextPath"] || t.textPath;
	r && !t.useHTML && (this.setTextPath(n.getDataLabelPath?.(this) || n.graphic, r), n.dataLabelPath && !r.enabled && (n.dataLabelPath = n.dataLabelPath.destroy()));
}
function g(e) {
	r(d, "TextPath") && (a(e, "afterGetBBox", m), a(e, "beforeAddingDataLabel", h), e.prototype.setTextPath = e.prototype.setTextPath ?? p);
}
//#endregion
export { u as n, g as t };

//# sourceMappingURL=TextPath-DK4Jkzd7.js.map