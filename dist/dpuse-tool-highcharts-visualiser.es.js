import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, H as c, I as l, J as u, K as d, L as f, M as p, N as m, O as h, P as g, Q as _, R as v, S as y, T as b, U as x, V as S, W as C, X as w, Y as T, Z as E, _ as D, a as O, at as k, b as A, c as j, d as M, et as N, f as P, g as F, h as I, i as L, it as ee, j as R, k as z, l as te, m as ne, n as B, nt as V, o as re, ot as H, p as ie, q as ae, r as oe, rt as se, s as U, tt as ce, u as le, v as W, w as ue, x as G, y as de, z as fe } from "./AnimationUtilities-Bby2idBR.js";
import { i as K, n as pe, r as q, t as J } from "./SeriesRegistry-0cj0ZJqn.js";
import { t as me } from "./SVGElement-BmvC_qu3.js";
import { a as he, c as ge, i as _e, l as ve, o as ye, r as be, s as xe, t as Se } from "./BorderRadius-2zMZW_aK.js";
//#region node_modules/highcharts/es-modules/Core/Renderer/RendererUtilities.js
var Ce;
(function(e) {
	function t(e, n, r) {
		let i = e, a = i.reducedLen || n, o = (e, t) => (t.rank || 0) - (e.rank || 0), s = (e, t) => e.target - t.target, c = [], l = e.length, u = [], d = c.push, f, p = !0, m, h, g = 0, _;
		for (f = l; f--;) g += e[f].size;
		if (g > a) {
			if (ce(e, o), _ = e[0].rank === e[e.length - 1].rank, _) {
				let t = [[0, l - 1]];
				for (; t.length && g > a;) {
					let n = t.shift();
					if (!n) break;
					f = Math.floor((n[0] + n[1]) / 2), m = e[f], w(u, f) && (g -= m.size), n[0] < f && t.push([n[0], f - 1]), f < n[1] && t.push([f + 1, n[1]]);
				}
			} else for (f = l - 1; g > a && f >= 0;) m = e[f], w(u, f) && (g -= m.size), f--;
			u.sort((e, t) => t - e).forEach((t) => d.apply(c, e.splice(t, 1)));
		}
		for (ce(e, s), e = e.map((e) => ({
			size: e.size,
			targets: [e.target],
			align: T(e.align, .5)
		})); p;) {
			for (f = e.length; f--;) m = e[f], h = (Math.min.apply(0, m.targets) + Math.max.apply(0, m.targets)) / 2, m.pos = F(h - m.size * m.align, 0, n - m.size);
			for (f = e.length, p = !1; f--;) f > 0 && e[f - 1].pos + e[f - 1].size > e[f].pos && (e[f - 1].size += e[f].size, e[f - 1].targets = e[f - 1].targets.concat(e[f].targets), e[f - 1].align = .5, e[f - 1].pos + e[f - 1].size > n && (e[f - 1].pos = n - e[f - 1].size), e.splice(f, 1), p = !0);
		}
		return d.apply(i, c), f = 0, e.some((e) => {
			let a = 0;
			return (e.targets || []).some(() => (i[f].pos = e.pos + a, r !== void 0 && Math.abs(i[f].pos - i[f].target) > r ? (i.slice(0, f + 1).forEach((e) => delete e.pos), i.reducedLen = (i.reducedLen || n) - n * .1, i.reducedLen > n * .1 && t(i, n, r), !0) : (a += i[f].size, f++, !1)));
		}), ce(i, s), i;
	}
	e.distribute = t;
})(Ce ||= {});
var we = Ce, { charts: Te } = H, Ee = [
	"#2caffe",
	"#544fc5",
	"#00e272",
	"#fe6a35",
	"#6b8abc",
	"#d568fb",
	"#2ee0ca",
	"#fa4b42",
	"#feb56a",
	"#91e8e1"
], De = [
	null,
	"#00e272",
	"#efdf00"
], Oe = (e, t) => {
	let n = (e) => {
		let n = "";
		return s(t.light, (r, i) => {
			n += e && r !== t.dark[i] ? `  ${i}: light-dark(${r}, ${t.dark[i]});\n` : `  ${i}: ${r};\n`;
		}), n;
	}, r = n(), i = n(!0);
	return `${e || ":root"} {
${r}
}
@supports (color: light-dark(#fff, #000)) {
  ${e || ":root"} {
${i}
  }
}
.highcharts-container {
  color-scheme: light dark;
}
.highcharts-light .highcharts-container {
  color-scheme: light;
}
.highcharts-dark .highcharts-container {
  color-scheme: dark;
}`;
}, ke = class {
	constructor(e, t) {
		this.defaultOptions = k, this.options = x(k), this.cssVars = {
			light: {},
			dark: {}
		}, this.renderer = e, this.update(t);
	}
	injectCSS(e) {
		let { cssVars: t, renderer: n } = this, i = Object.keys(r(e, this.defaultOptions)).length > 0, o = Math.max(e.colors?.length || 0, Ee.length), l = "light", u = (e, n) => {
			c(e) && (n = n.replace(/([0-9]+)/g, "-$1").replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`), t[l][`--highcharts-${n}`] = e);
		};
		for (let n of ["light", "dark"]) {
			let r = e[n] || {}, i = {}, c = new L(r?.neutralColor || ""), d = new L(r?.backgroundColor || ""), f = new L(r?.highlightColor || "");
			l = n, [
				3,
				5,
				10,
				20,
				40,
				60,
				80,
				100
			].forEach((e) => {
				i[`neutralColor${e}`] = d.tweenTo(c, e / 100), i[`highlightColor${e}`] = d.tweenTo(f, e / 100);
			});
			for (let t = 0; t < o; t++) u(r?.colors?.[t] || e.colors?.[t] || (n === "dark" ? De : [])?.[t] || Ee[t] || "#888a", `color${t}`);
			s(r, u), s(i, u), n === "light" && a(t.dark, t.light);
		}
		let d = n.defs.element, f = i ? `*[data-highcharts-chart="${n.chartIndex}"]` : "", p = d.querySelector("style.highcharts-palette") || n.box.ownerDocument.createElement("style");
		p.parentNode || (p.nonce = "highcharts", p.className = "highcharts-palette", d.appendChild(p)), p.textContent = Oe(f, t);
	}
	update(e) {
		let t = this.renderer.box.parentElement, n = Te?.[this.renderer.chartIndex];
		e = x(!0, this.options, e), n && (n.options.palette = e), e.injectCSS !== !1 && this.injectCSS(e), t && (c(e.colorScheme) && [
			"light",
			"dark",
			"inherit"
		].includes(e.colorScheme) ? t.style.colorScheme = e.colorScheme : t.style.removeProperty("color-scheme"));
	}
}, Ae = class e extends me {
	constructor(t, n, r, i, a, o, s, c, l, u) {
		super(t, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.doUpdate = !1, this.textStr = n, this.x = r, this.y = i, this.anchorX = o, this.anchorY = s, this.baseline = l, this.className = u, this.addClass(u === "button" ? "highcharts-no-tooltip" : "highcharts-label"), u && this.addClass("highcharts-" + u), this.text = t.text(void 0, 0, 0, c).attr({ zIndex: 1 });
		let d;
		typeof a == "string" && (d = /^url\((.*?)\)$/.test(a), (d || this.renderer.symbols[a]) && (this.symbolKey = a)), this.bBox = e.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t.styledMode || d, this.deferredAttr = {}, this.alignFactor = 0;
	}
	alignSetter(e) {
		let r = t(e);
		this.textAlign = e, r !== this.alignFactor && (this.alignFactor = r, this.bBox && n(this.xSetting) && this.attr({ x: this.xSetting }), this.updateTextPadding());
	}
	anchorXSetter(e, t) {
		this.anchorX = e, this.boxAttr(t, Math.round(e) - this.getCrispAdjust() - this.xSetting);
	}
	anchorYSetter(e, t) {
		this.anchorY = e, this.boxAttr(t, e - this.ySetting);
	}
	boxAttr(e, t) {
		this.box ? this.box.attr(e, t) : this.deferredAttr[e] = t;
	}
	css(t) {
		if (t) {
			let n = {};
			t = x(t), e.textProps.forEach((e) => {
				t[e] !== void 0 && (n[e] = t[e], delete t[e]);
			}), this.text.css(n), "fontSize" in n || "fontWeight" in n || "width" in n ? this.updateTextPadding() : "textOverflow" in n && this.updateBoxSize(), "color" in n && this.updateBackground();
		}
		return me.prototype.css.call(this, t);
	}
	destroy() {
		_(this.element, "mouseenter"), _(this.element, "mouseleave"), this.text && this.text.destroy(), this.box &&= this.box.destroy(), me.prototype.destroy.call(this);
	}
	fillSetter(e, t) {
		e && (this.needsBox = !0), this.fill = e, this.boxAttr(t, e);
	}
	getBBox(e, t) {
		(this.textStr && this.bBox.width === 0 && this.bBox.height === 0 || this.rotation) && this.updateBoxSize();
		let { padding: n, height: r = 0, translateX: i = 0, translateY: a = 0, width: o = 0 } = this, s = T(this.paddingLeft, n), c = t ?? (this.rotation || 0), l = {
			width: o,
			height: r,
			x: i + this.bBox.x - s,
			y: a + this.bBox.y - n + this.baselineOffset
		};
		return c && (l = this.getRotatedBox(l, c)), l;
	}
	getCrispAdjust() {
		return (this.renderer.styledMode && this.box ? this.box.strokeWidth() : this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
	}
	heightSetter(e) {
		this.heightSetting = e, this.doUpdate = !0;
	}
	afterSetters() {
		super.afterSetters(), this.doUpdate &&= (this.updateBoxSize(), !1), this.updateBackground();
	}
	onAdd() {
		this.text.add(this), this.attr({
			text: T(this.textStr, ""),
			x: this.x || 0,
			y: this.y || 0
		}), this.box && G(this.anchorX) && this.attr({
			anchorX: this.anchorX,
			anchorY: this.anchorY
		});
	}
	paddingSetter(e, t) {
		n(e) ? e !== this[t] && (this[t] = e, this.updateTextPadding()) : this[t] = void 0;
	}
	rSetter(e, t) {
		this.boxAttr(t, e);
	}
	strokeSetter(e, t) {
		this.stroke = e, this.boxAttr(t, e);
	}
	"stroke-widthSetter"(e, t) {
		e && (this.needsBox = !0), this["stroke-width"] = e, this.boxAttr(t, e);
	}
	"text-alignSetter"(e) {
		this.textAlign = this["text-align"] = e, this.updateTextPadding();
	}
	textSetter(e) {
		e !== void 0 && this.text.attr({ text: e }), this.updateTextPadding(), this.reAlign();
	}
	updateBackground() {
		this.fill === "contrast" && this.box?.attr({
			fill: this.renderer.getContrast(this.text.styles.color || "#000"),
			"fill-opacity": .65
		});
	}
	updateBoxSize() {
		let t = this.text, r = {}, i = this.padding, o = this.bBox = (!n(this.widthSetting) || !n(this.heightSetting) || this.textAlign) && G(t.textStr) ? t.getBBox(void 0, 0) : e.emptyBBox, s;
		this.width = this.getPaddedWidth(), this.height = (this.heightSetting || o.height || 0) + 2 * i;
		let c = this.renderer.fontMetrics(t);
		if (this.baselineOffset = i + Math.min((this.text.firstLineMetrics || c).b, o.height || Infinity), this.heightSetting && (this.baselineOffset += (this.heightSetting - c.h) / 2), this.needsBox && !t.textPath) {
			if (!this.box) {
				let e = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
				e.addClass((this.className === "button" ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), e.add(this);
			}
			s = this.getCrispAdjust(), r.x = s, r.y = (this.baseline ? -this.baselineOffset : 0) + s, r.width = Math.round(this.width), r.height = Math.round(this.height), this.box.attr(a(r, this.deferredAttr)), this.deferredAttr = {};
		}
	}
	updateTextPadding() {
		let e = this.text, n = e.styles.textAlign || this.textAlign;
		if (!e.textPath) {
			this.updateBoxSize();
			let r = this.baseline ? 0 : this.baselineOffset, i = (this.paddingLeft ?? this.padding) + t(n) * (this.widthSetting ?? this.bBox.width);
			(i !== e.x || r !== e.y) && (e.attr({
				align: n,
				x: i
			}), r !== void 0 && e.attr("y", r)), e.x = i, e.y = r;
		}
	}
	widthSetter(e) {
		this.widthSetting = n(e) ? e : void 0, this.doUpdate = !0;
	}
	getPaddedWidth() {
		let e = this.padding, t = T(this.paddingLeft, e), n = T(this.paddingRight, e);
		return (this.widthSetting || this.bBox.width || 0) + t + n;
	}
	xSetter(e) {
		this.x = e, this.alignFactor && (e -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.anchorX && (this["forceAnimate:anchorX"] = !0), this.xSetting = Math.round(e), this.attr("translateX", this.xSetting);
	}
	ySetter(e) {
		this.anchorY && (this["forceAnimate:anchorY"] = !0), this.ySetting = this.y = Math.round(e), this.attr("translateY", this.ySetting);
	}
};
Ae.emptyBBox = {
	width: 0,
	height: 0,
	x: 0,
	y: 0
}, Ae.textProps = [
	"color",
	"direction",
	"fontFamily",
	"fontSize",
	"fontStyle",
	"fontWeight",
	"lineClamp",
	"lineHeight",
	"textAlign",
	"textDecoration",
	"textOutline",
	"textOverflow",
	"whiteSpace",
	"width"
];
//#endregion
//#region node_modules/highcharts/es-modules/Core/Renderer/SVG/Symbols.js
function je(e, t, n, r, i) {
	let a = [];
	if (i) {
		let o = i.start || 0, s = i.end || 0, c = T(i.r, n), l = T(i.r, r || n), u = 1e-4, d = Math.abs(s - o - 2 * Math.PI) < u;
		d && (o = Math.PI / 2, s = Math.PI * 2.5 - u);
		let f = i.innerR, p = T(i.open, d), m = d ? 0 : Math.cos(o), h = d ? 1 : Math.sin(o), g = d ? 0 : Math.cos(s), _ = d ? 1 : Math.sin(s), v = T(i.longArc, s - o - Math.PI < u ? 0 : 1), y = [
			"A",
			c,
			l,
			0,
			v,
			T(i.clockwise, 1),
			e + (d ? .001 : c * g),
			t + l * _
		];
		y.params = {
			start: o,
			end: s,
			cx: e,
			cy: t
		}, a.push([
			"M",
			e + c * m,
			t + l * h
		], y), G(f) && (y = [
			"A",
			f,
			f,
			0,
			v,
			G(i.clockwise) ? 1 - i.clockwise : 0,
			e + (d ? -.001 : f * m),
			t + f * h
		], y.params = {
			start: s,
			end: o,
			cx: e,
			cy: t
		}, a.push(p ? [
			"M",
			e + f * g,
			t + f * _
		] : [
			"L",
			e + f * g,
			t + f * _
		], y)), p || a.push(["Z"]);
	}
	return a;
}
function Me(e, t, r, i, a) {
	let o = Math.min(a?.r || 0, r, i), s = o + 6, c = a?.anchorX, l = a?.anchorY || 0, u = Ie(e, t, r, i, { r: o });
	if (!n(c) || c < r && c > 0 && l < i && l > 0) return u;
	if (e + c > r - s) if (l > t + s && l < t + i - s) u.splice(3, 1, [
		"L",
		e + r,
		l - 6
	], [
		"L",
		e + r + 6,
		l
	], [
		"L",
		e + r,
		l + 6
	], [
		"L",
		e + r,
		t + i - o
	]);
	else if (c < r) {
		let n = l < t + s, a = n ? t : t + i, d = n ? 2 : 5;
		u.splice(d, 0, [
			"L",
			c,
			l
		], [
			"L",
			e + r - o,
			a
		]);
	} else u.splice(3, 1, [
		"L",
		e + r,
		i / 2
	], [
		"L",
		c,
		l
	], [
		"L",
		e + r,
		i / 2
	], [
		"L",
		e + r,
		t + i - o
	]);
	else if (e + c < s) if (l > t + s && l < t + i - s) u.splice(7, 1, [
		"L",
		e,
		l + 6
	], [
		"L",
		e - 6,
		l
	], [
		"L",
		e,
		l - 6
	], [
		"L",
		e,
		t + o
	]);
	else if (c > 0) {
		let n = l < t + s, r = n ? t : t + i, a = n ? 1 : 6;
		u.splice(a, 0, [
			"L",
			c,
			l
		], [
			"L",
			e + o,
			r
		]);
	} else u.splice(7, 1, [
		"L",
		e,
		i / 2
	], [
		"L",
		c,
		l
	], [
		"L",
		e,
		i / 2
	], [
		"L",
		e,
		t + o
	]);
	else l > i && c < r - s ? u.splice(5, 1, [
		"L",
		c + 6,
		t + i
	], [
		"L",
		c,
		t + i + 6
	], [
		"L",
		c - 6,
		t + i
	], [
		"L",
		e + o,
		t + i
	]) : l < 0 && c > s && u.splice(1, 1, [
		"L",
		c - 6,
		t
	], [
		"L",
		c,
		t - 6
	], [
		"L",
		c + 6,
		t
	], [
		"L",
		r - o,
		t
	]);
	return u;
}
function Ne(e, t, n, r) {
	return je(e + n / 2, t + r / 2, n / 2, r / 2, {
		start: Math.PI * .5,
		end: Math.PI * 2.5,
		open: !1
	});
}
function Pe(e, t, n, r) {
	return [
		[
			"M",
			e + n / 2,
			t
		],
		[
			"L",
			e + n,
			t + r / 2
		],
		[
			"L",
			e + n / 2,
			t + r
		],
		[
			"L",
			e,
			t + r / 2
		],
		["Z"]
	];
}
function Fe(e, t, n, r, i) {
	return i?.r ? Ie(e, t, n, r, i) : [
		[
			"M",
			e,
			t
		],
		[
			"L",
			e + n,
			t
		],
		[
			"L",
			e + n,
			t + r
		],
		[
			"L",
			e,
			t + r
		],
		["Z"]
	];
}
function Ie(e, t, n, r, i) {
	let a = i?.r || 0;
	return [
		[
			"M",
			e + a,
			t
		],
		[
			"L",
			e + n - a,
			t
		],
		[
			"A",
			a,
			a,
			0,
			0,
			1,
			e + n,
			t + a
		],
		[
			"L",
			e + n,
			t + r - a
		],
		[
			"A",
			a,
			a,
			0,
			0,
			1,
			e + n - a,
			t + r
		],
		[
			"L",
			e + a,
			t + r
		],
		[
			"A",
			a,
			a,
			0,
			0,
			1,
			e,
			t + r - a
		],
		[
			"L",
			e,
			t + a
		],
		[
			"A",
			a,
			a,
			0,
			0,
			1,
			e + a,
			t
		],
		["Z"]
	];
}
function Le(e, t, n, r) {
	return [
		[
			"M",
			e + n / 2,
			t
		],
		[
			"L",
			e + n,
			t + r
		],
		[
			"L",
			e,
			t + r
		],
		["Z"]
	];
}
function Re(e, t, n, r) {
	return [
		[
			"M",
			e,
			t
		],
		[
			"L",
			e + n,
			t
		],
		[
			"L",
			e + n / 2,
			t + r
		],
		["Z"]
	];
}
var ze = {
	arc: je,
	callout: Me,
	circle: Ne,
	diamond: Pe,
	rect: Fe,
	roundedRect: Ie,
	square: Fe,
	triangle: Le,
	"triangle-down": Re
}, { doc: Be, SVG_NS: Ve, win: He } = H, Ue = (e, t) => e.substring(0, t) + "…", We = class {
	constructor(e) {
		let t = e.styles;
		this.renderer = e.renderer, this.svgElement = e, this.width = e.textWidth, this.textLineHeight = t?.lineHeight, this.textOutline = t?.textOutline, this.ellipsis = t?.textOverflow === "ellipsis", this.lineClamp = t?.lineClamp, this.noWrap = t?.whiteSpace === "nowrap";
	}
	buildSVG() {
		let e = this.svgElement, t = e.element, n = e.renderer, r = T(e.textStr, "").toString(), i = r.indexOf("<") !== -1, a = t.childNodes, o = !e.added && n.box, s = /<br.*?>/g, l = [
			r,
			this.ellipsis,
			this.noWrap,
			this.textLineHeight,
			this.textOutline,
			e.getStyle("font-size"),
			e.styles.lineClamp,
			this.width
		].join(",");
		if (l !== e.textCache) {
			e.textCache = l, delete e.actualWidth;
			for (let e = a.length; e--;) t.removeChild(a[e]);
			if (!i && !this.ellipsis && !this.width && !e.textPath && (r.indexOf(" ") === -1 || this.noWrap && !s.test(r))) t.appendChild(Be.createTextNode(this.unescapeEntities(r)));
			else if (r !== "") {
				o && o.appendChild(t);
				let n = new K(r);
				this.modifyTree(n.nodes), n.addToDOM(t), this.modifyDOM(), this.ellipsis && (t.textContent || "").indexOf("…") !== -1 && e.attr("title", this.unescapeEntities(e.textStr || "", ["&lt;", "&gt;"])), o && o.removeChild(t);
			}
			c(this.textOutline) && e.applyTextOutline && e.applyTextOutline(this.textOutline);
		}
	}
	modifyDOM() {
		let e = this.svgElement, t = I(e.element, "x");
		e.firstLineMetrics = void 0;
		let n;
		for (; (n = e.element.firstChild) && /^[\s\u200B]*$/.test(n.textContent || " ");) e.element.removeChild(n);
		[].forEach.call(e.element.querySelectorAll("tspan.highcharts-br"), (n, r) => {
			n.nextSibling && n.previousSibling && (r === 0 && n.previousSibling.nodeType === 1 && (e.firstLineMetrics = e.renderer.fontMetrics(n.previousSibling)), I(n, {
				dy: this.getLineHeight(n.nextSibling),
				x: t
			}));
		});
		let r = this.width || 0;
		if (!r) return;
		let i = (n, i) => {
			let a = n.textContent || "", o = a.replace(/([^\^])-/g, "$1- ").split(" "), s = !this.noWrap && (o.length > 1 || e.element.childNodes.length > 1), c = this.getLineHeight(i), l = Math.max(0, r - .8 * c), u = 0, d = e.actualWidth;
			if (s) {
				let a = [], s = [];
				for (; i.firstChild && i.firstChild !== n;) s.push(i.firstChild), i.removeChild(i.firstChild);
				for (; o.length;) if (o.length && !this.noWrap && u > 0 && (a.push(n.textContent || ""), n.textContent = o.join(" ").replace(/- /g, "-")), this.truncate(n, void 0, o, u === 0 && d || 0, r, l, (e, t) => o.slice(0, t).join(" ").replace(/- /g, "-")), d = e.actualWidth, u++, this.lineClamp && u >= this.lineClamp) {
					o.length && (this.truncate(n, n.textContent || "", void 0, 0, r, l, Ue), n.textContent = n.textContent?.replace("…", "") + "…");
					break;
				}
				s.forEach((e) => {
					i.insertBefore(e, n);
				}), a.forEach((e) => {
					i.insertBefore(Be.createTextNode(e), n);
					let r = Be.createElementNS(Ve, "tspan");
					r.textContent = "​", I(r, {
						dy: c,
						x: t
					}), i.insertBefore(r, n);
				});
			} else this.ellipsis && a && this.truncate(n, a, void 0, 0, r, l, Ue);
		}, a = ((t) => {
			[].slice.call(t.childNodes).forEach((n) => {
				n.nodeType === He.Node.TEXT_NODE ? i(n, t) : (n.className.baseVal.indexOf("highcharts-br") !== -1 && (e.actualWidth = 0), a(n));
			});
		});
		a(e.element);
	}
	getLineHeight(e) {
		let t = e.nodeType === He.Node.TEXT_NODE ? e.parentElement : e;
		return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(t || this.svgElement.element).h;
	}
	modifyTree(e) {
		let t = (n, r) => {
			let { attributes: i = {}, children: o, style: s = {}, tagName: c } = n, l = this.renderer.styledMode;
			if (c === "b" || c === "strong" ? l ? i.class = "highcharts-strong" : s.fontWeight = "bold" : (c === "i" || c === "em") && (l ? i.class = "highcharts-emphasized" : s.fontStyle = "italic"), s?.color && (s.fill = s.color), c === "br") {
				i.class = "highcharts-br", n.textContent = "​";
				let t = e[r + 1];
				t?.textContent && (t.textContent = t.textContent.replace(/^ +/gm, ""));
			} else c === "a" && o && o.some((e) => e.tagName === "#text") && (n.children = [{
				children: o,
				tagName: "tspan"
			}]);
			c !== "#text" && c !== "a" && (n.tagName = "tspan"), a(n, {
				attributes: i,
				style: s
			}), o && o.filter((e) => e.tagName !== "#text").forEach(t);
		};
		e.forEach(t), z(this.svgElement, "afterModifyTree", { nodes: e });
	}
	truncate(e, t, n, r, i, a, o) {
		let s = this.svgElement, { rotation: c } = s, l = [], u = n && !r ? 1 : 0, d = (t || n || "").length, f = d, p, m;
		n || (i = a);
		let h = function(t, i) {
			let a = i || t, o = e.parentNode;
			if (o && l[a] === void 0 && o.getSubStringLength) try {
				l[a] = r + o.getSubStringLength(0, n ? a + 1 : a);
			} catch {}
			return l[a];
		};
		if (s.rotation = 0, m = h(e.textContent.length), r + m > i) {
			for (; u <= d;) f = Math.ceil((u + d) / 2), n && (p = o(n, f)), m = h(f, p && p.length - 1), u === d ? u = d + 1 : m > i ? d = f - 1 : u = f;
			d === 0 ? e.textContent = "" : t && d === t.length - 1 || (e.textContent = p || o(t || n, f)), this.ellipsis && m > i && this.truncate(e, e.textContent || "", void 0, 0, i, a, Ue);
		}
		n && n.splice(0, f), s.actualWidth = m, s.rotation = c;
	}
	unescapeEntities(e, t) {
		return s(this.renderer.escapes, function(n, r) {
			(!t || t.indexOf(n) === -1) && (e = e.toString().replace(new RegExp(n, "g"), r));
		}), e;
	}
}, { defaultOptions: Ge } = O, { charts: Ke, deg2rad: qe, doc: Je, isFirefox: Ye, isMS: Xe, isWebKit: Ze, noop: Qe, SVG_NS: $e, symbolSizes: et, win: tt } = H, nt, rt = class {
	constructor(e, t, n, r, i, a, o, s, c) {
		this.x = 0, this.y = 0;
		let l = this, u = l.createElement("svg").attr({
			version: "1.1",
			class: "highcharts-root"
		}), d = u.element;
		e.appendChild(d), I(e, "dir", "ltr"), e.innerHTML.indexOf("xmlns") === -1 && I(d, "xmlns", this.SVG_NS), this.box = d, this.boxWrapper = u, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(Je.createTextNode("Created with Highcharts 13.0.0")), this.defs = this.createElement("defs").add(), this.allowHTML = a, this.forExport = i, this.styledMode = o, this.chartIndex = c || 0, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.asyncCounter = 0, this.rootFontSize = u.getStyle("font-size"), l.setSize(t, n, !1), o || (u.css(this.getStyle(r || {})), this.palette = new ke(this, s || Ge.palette));
		let f, p;
		Ye && e.getBoundingClientRect && (f = function() {
			A(e, {
				left: 0,
				top: 0
			}), p = e.getBoundingClientRect(), A(e, {
				left: Math.ceil(p.left) - p.left + "px",
				top: Math.ceil(p.top) - p.top + "px"
			});
		}, f(), l.unSubPixelFix = P(tt, "resize", f));
	}
	definition(e) {
		return new K([e]).addToDOM(this.defs.element);
	}
	getReferenceURL() {
		if ((Ye || Ze) && Je.getElementsByTagName("base").length) {
			if (!G(nt)) {
				let e = le(), t = new K([{
					tagName: "svg",
					attributes: {
						width: 8,
						height: 8
					},
					children: [{
						tagName: "defs",
						children: [{
							tagName: "clipPath",
							attributes: { id: e },
							children: [{
								tagName: "rect",
								attributes: {
									width: 4,
									height: 4
								}
							}]
						}]
					}, {
						tagName: "rect",
						attributes: {
							id: "hitme",
							width: 8,
							height: 8,
							"clip-path": `url(#${e})`,
							fill: "rgba(0,0,0,0.001)"
						}
					}]
				}]).addToDOM(Je.body);
				A(t, {
					position: "fixed",
					top: 0,
					left: 0,
					zIndex: 9e5
				}), nt = Je.elementFromPoint(6, 6)?.id === "hitme", Je.body.removeChild(t);
			}
			if (nt) return e(tt.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"]);
		}
		return "";
	}
	getStyle(e) {
		return this.style = a({
			fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif",
			fontSize: "1rem"
		}, e), this.style;
	}
	setStyle(e) {
		this.boxWrapper.css(this.getStyle(e));
	}
	isHidden() {
		return !this.boxWrapper.getBBox().width;
	}
	destroy() {
		let e = this, t = e.defs;
		return e.box = null, e.boxWrapper = e.boxWrapper.destroy(), y(e.gradients || {}), e.gradients = null, e.defs = t.destroy(), e.unSubPixelFix && e.unSubPixelFix(), e.alignedObjects.length = 0, null;
	}
	createElement(e) {
		return new this.Element(this, e);
	}
	getRadialAttr(e, t) {
		return {
			cx: e[0] - e[2] / 2 + (t.cx || 0) * e[2],
			cy: e[1] - e[2] / 2 + (t.cy || 0) * e[2],
			r: (t.r || 0) * e[2]
		};
	}
	shadowDefinition(e) {
		let t = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(e).map((t) => `${t}-${e[t]}`)].join("-").toLowerCase().replace(/[^a-z\d\-]/g, ""), n = x({
			color: "#000000",
			offsetX: 0,
			offsetY: 2,
			opacity: .05,
			width: 6
		}, e);
		return this.defs.element.querySelector(`#${t}`) || this.definition({
			tagName: "filter",
			attributes: {
				id: t,
				filterUnits: n.filterUnits
			},
			children: this.getShadowFilterContent(n)
		}), t;
	}
	getShadowFilterContent(e) {
		return [{
			tagName: "feDropShadow",
			attributes: {
				dx: e.offsetX,
				dy: e.offsetY,
				"flood-color": e.color,
				"flood-opacity": Math.min(e.opacity * 5, 1),
				stdDeviation: e.width / 2
			}
		}];
	}
	buildText(e) {
		new We(e).buildSVG();
	}
	getContrast(e) {
		if (e === "transparent") return "#000000";
		let t = L.parse(e).rgba;
		if (n(t[0]) || !L.useColorMix) {
			let e = t.map((e) => {
				let t = e / 255;
				return t <= .04 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
			}), n = .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
			return 1.05 / (n + .05) > (n + .05) / .05 ? "#FFFFFF" : "#000000";
		}
		return "color(from " + e + " srgb clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1) clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1) clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1))";
	}
	button(e, t, n, r, i = {}, o, s, c, l, u) {
		let d = this.label(e, t, n, l, void 0, void 0, u, void 0, "button"), f = this.styledMode, p = arguments, m = 0;
		i = x(Ge.global.buttonTheme, i), f && (delete i.fill, delete i.stroke, delete i["stroke-width"]);
		let h = i.states || {}, g = i.style || {};
		delete i.states, delete i.style;
		let _ = [K.filterUserAttributes(i)], v = [g];
		return f || [
			"hover",
			"select",
			"disabled"
		].forEach((e, t) => {
			_.push(x(_[0], K.filterUserAttributes(p[t + 5] || h[e] || {}))), v.push(_[t + 1].style), delete _[t + 1].style;
		}), P(d.element, Xe ? "mouseover" : "mouseenter", function() {
			m !== 3 && d.setState(1);
		}), P(d.element, Xe ? "mouseout" : "mouseleave", function() {
			m !== 3 && d.setState(m);
		}), d.setState = (e = 0) => {
			if (e !== 1 && (d.state = m = e), d.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + [
				"normal",
				"hover",
				"pressed",
				"disabled"
			][e]), !f) {
				d.attr(_[e]);
				let t = v[e];
				S(t) && d.css(t);
			}
		}, d.attr(_[0]), f || (d.css(a({ cursor: "default" }, g)), u && d.text.css({ pointerEvents: "none" })), d.on("touchstart", (e) => e.stopPropagation()).on("click", function(e) {
			m !== 3 && r?.call(d, e);
		});
	}
	crispLine(e, t) {
		let [n, r] = e;
		return G(n[1]) && n[1] === r[1] && (n[1] = r[1] = de(n[1], t)), G(n[2]) && n[2] === r[2] && (n[2] = r[2] = de(n[2], t)), e;
	}
	path(e) {
		let t = this.styledMode ? {} : { fill: "none" };
		return l(e) ? t.d = e : S(e) && a(t, e), this.createElement("path").attr(t);
	}
	circle(e, t, n) {
		let r = S(e) ? e : e === void 0 ? {} : {
			x: e,
			y: t,
			r: n
		}, i = this.createElement("circle");
		return i.xSetter = i.ySetter = function(e, t, n) {
			n.setAttribute("c" + t, e);
		}, i.attr(r);
	}
	arc(e, t, n, r, i, a) {
		let o;
		S(e) ? (o = e, t = o.y, n = o.r, r = o.innerR, i = o.start, a = o.end, e = o.x) : o = {
			innerR: r,
			start: i,
			end: a
		};
		let s = this.symbol("arc", e, t, n, n, o);
		return s.r = n, s;
	}
	rect(e, t, n, r, i, o) {
		let s = S(e) ? e : e === void 0 ? {} : {
			x: e,
			y: t,
			r: i,
			width: Math.max(n || 0, 0),
			height: Math.max(r || 0, 0)
		}, c = this.createElement("rect");
		return this.styledMode || (o !== void 0 && (s["stroke-width"] = o, a(s, c.crisp(s))), s.fill = "none"), c.rSetter = function(e, t, n) {
			c.r = e, I(n, {
				rx: e,
				ry: e
			});
		}, c.rGetter = function() {
			return c.r || 0;
		}, c.attr(s);
	}
	roundedRect(e) {
		return this.symbol("roundedRect").attr(e);
	}
	setSize(e, t, n) {
		let r = this;
		r.width = e, r.height = t, r.boxWrapper.animate({
			width: e,
			height: t
		}, {
			step: function() {
				this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
			},
			duration: T(n, !0) ? void 0 : 0
		}), r.alignElements();
	}
	g(e) {
		let t = this.createElement("g");
		return e ? t.attr({ class: "highcharts-" + e }) : t;
	}
	image(e, t, r, i, a, o) {
		let s = { preserveAspectRatio: "none" };
		n(t) && (s.x = t), n(r) && (s.y = r), n(i) && (s.width = i), n(a) && (s.height = a);
		let c = this.createElement("image").attr(s), l = function(t) {
			c.attr({ href: e }), o.call(c, t);
		};
		if (o) {
			c.attr({ href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" });
			let t = new tt.Image();
			P(t, "load", l), t.src = e, t.complete && l({});
		} else c.attr({ href: e });
		return c;
	}
	symbol(e, t, n, r, i, o) {
		let s = this, c = /^url\((.*?)\)$/, l = c.test(e), u = !l && (this.symbols[e] ? e : "circle"), d = u && this.symbols[u], f, p, m, h;
		if (d) typeof t == "number" && (p = d.call(this.symbols, t || 0, n || 0, r || 0, i || 0, o)), f = this.path(p), s.styledMode || f.attr("fill", "none"), a(f, {
			symbolName: u || void 0,
			x: t,
			y: n,
			width: r,
			height: i
		}), o && a(f, o);
		else if (l) {
			m = e.match(c)[1];
			let r = f = this.image(m);
			r.imgwidth = T(o?.width, et[m]?.width), r.imgheight = T(o?.height, et[m]?.height), h = (e) => e.attr({
				width: e.width,
				height: e.height
			}), ["width", "height"].forEach((e) => {
				r[`${e}Setter`] = function(e, t) {
					this[t] = e;
					let { alignByTranslate: n, element: r, width: i, height: a, imgwidth: s, imgheight: c } = this, l = t === "width" ? s : c, u = 1;
					o && o.backgroundSize === "within" && i && a && s && c ? (u = Math.min(i / s, a / c), I(r, {
						width: Math.round(s * u),
						height: Math.round(c * u)
					})) : r && l && r.setAttribute(t, l), !n && s && c && this.translate(((i || 0) - s * u) / 2, ((a || 0) - c * u) / 2);
				};
			}), G(t) && r.attr({
				x: t,
				y: n
			}), r.isImg = !0, G(r.imgwidth) && G(r.imgheight) ? h(r) : (r.attr({
				width: 0,
				height: 0
			}), W("img", {
				onload: function() {
					let e = Ke[s.chartIndex];
					this.width === 0 && (A(this, {
						position: "absolute",
						top: "-999em"
					}), Je.body.appendChild(this)), et[m] = {
						width: this.width,
						height: this.height
					}, r.imgwidth = this.width, r.imgheight = this.height, r.element && h(r), this.parentNode && this.parentNode.removeChild(this), s.asyncCounter--, !s.asyncCounter && e && !e.hasLoaded && e.onload();
				},
				src: m
			}), this.asyncCounter++);
		}
		return f;
	}
	clipRect(e, t, n, r) {
		return this.rect(e, t, n, r, 0);
	}
	text(e, t, n, r) {
		let i = this, a = {};
		if (r && (i.allowHTML || !i.forExport)) return i.html(e, t, n);
		a.x = Math.round(t || 0), n && (a.y = Math.round(n)), G(e) && (a.text = e);
		let o = i.createElement("text").attr(a);
		return (!r || i.forExport && !i.allowHTML) && (o.xSetter = function(e, t, n) {
			let r = n.getElementsByTagName("tspan"), i = n.getAttribute(t);
			for (let n = 0, a; n < r.length; n++) a = r[n], a.getAttribute(t) === i && a.setAttribute(t, e);
			n.setAttribute(t, e);
		}), o;
	}
	fontMetrics(e) {
		let t = n(e) ? e : ae(me.prototype.getStyle.call(e, "font-size") || 0), r = t < 24 ? t + 3 : Math.round(t * 1.2);
		return {
			h: r,
			b: Math.round(r * .8),
			f: t
		};
	}
	rotCorr(e, t, n) {
		let r = e;
		return t && n && (r = Math.max(r * Math.cos(t * qe), 4)), {
			x: -e / 3 * Math.sin(t * qe),
			y: r
		};
	}
	pathToSegments(e) {
		let t = [], r = [], i = {
			A: 8,
			C: 7,
			H: 2,
			L: 3,
			M: 3,
			Q: 5,
			S: 5,
			T: 3,
			V: 2
		};
		for (let a = 0; a < e.length; a++) c(r[0]) && n(e[a]) && r.length === i[r[0].toUpperCase()] && e.splice(a, 0, r[0].replace("M", "L").replace("m", "l")), typeof e[a] == "string" && (r.length && t.push(r.slice(0)), r.length = 0), r.push(e[a]);
		return t.push(r.slice(0)), t;
	}
	label(e, t, n, r, i, a, o, s, c) {
		return new Ae(this, e, t, n, r, i, a, o, s, c);
	}
	alignElements() {
		this.alignedObjects.forEach((e) => e.align());
	}
};
a(rt.prototype, {
	Element: me,
	SVG_NS: $e,
	escapes: {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"'": "&#39;",
		"\"": "&quot;"
	},
	symbols: ze,
	draw: Qe
}), H.Renderer = rt;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Renderer/HTML/HTMLElement.js
var { composed: it, isFirefox: at } = H, ot = class e extends me {
	static compose(t) {
		w(it, "HTMLElement") && (t.prototype.html = function(t, n, r) {
			return new e(this, "div").attr({
				text: t,
				x: Math.round(n),
				y: Math.round(r)
			});
		});
	}
	constructor(e, t) {
		super(e, t), this.foreignObject = e.createElement("foreignObject").attr({ zIndex: 2 }), this.element.style.whiteSpace = "nowrap";
	}
	getSpanCorrection(e, t, n) {
		this.xCorr = -e * n, this.yCorr = -t;
	}
	css(e) {
		let { element: t } = this, r = e && "width" in e, i = r && e.width, o;
		return r && (delete e.width, this.textWidth = ae(i) || void 0, o = !0), e?.textOverflow === "ellipsis" && (e.overflow = "hidden", e.whiteSpace = "nowrap"), e?.lineClamp ? (e.display = "-webkit-box", e.WebkitLineClamp = e.lineClamp, e.WebkitBoxOrient = "vertical", e.overflow = "hidden") : e?.lineClamp === 0 && (e.display = "inline-block"), n(Number(e?.fontSize)) && (e.fontSize += "px"), a(this.styles, e), A(t, e), o && this.updateTransform(), this;
	}
	htmlGetBBox() {
		let { element: e } = this;
		return {
			x: e.offsetLeft,
			y: e.offsetTop,
			width: e.offsetWidth,
			height: e.offsetHeight
		};
	}
	updateTransform() {
		if (!this.added) {
			this.alignOnAdd = !0;
			return;
		}
		let { element: e, foreignObject: r, oldTextWidth: i, renderer: a, rotation: o, scaleX: s, styles: { display: c = "inline-block", whiteSpace: l }, textAlign: u = "left", textWidth: d, x: f = 0, y: p = 0 } = this, m = () => this.textPxLength ? this.textPxLength : (A(e, {
			width: "",
			whiteSpace: l || "nowrap"
		}), e.offsetWidth), h = [
			o,
			u,
			e.innerHTML,
			d,
			this.textAlign
		].join(","), g;
		if (A(e, {
			display: "inline-block",
			verticalAlign: "top"
		}), d !== i) {
			let t = m(), r = d || 0, u = !a.styledMode && e.style.textOverflow === "" && e.style.webkitLineClamp;
			(r > i || t > r || u) && (/[\-\s\u00AD]/.test(e.textContent || e.innerText) || e.style.textOverflow === "ellipsis") && (A(e, {
				width: (o || s || t > r) && n(d) ? d + "px" : u ? Math.min(t + 1, r) + "px" : "auto",
				display: c,
				whiteSpace: l || "normal"
			}), this.oldTextWidth = d);
		}
		r.attr({
			width: a.width,
			height: a.height
		}), h !== this.cTT && (g = a.fontMetrics(e).b, this.getSpanCorrection(!G(o) && !this.textWidth && this.textPxLength || e.offsetWidth, g, t(u))), super.updateTransform(), n(f) && n(p) ? (r.attr({
			x: f + (this.xCorr || 0),
			y: p + (this.yCorr || 0),
			width: e.offsetWidth + 4,
			height: e.offsetHeight + 1,
			"transform-origin": e.getAttribute("transform-origin") || "0 0"
		}), A(e, {
			display: c,
			textAlign: u
		})) : at && r.attr({
			width: 0,
			height: 0
		}), this.cTT = h;
	}
	add(e) {
		let { foreignObject: t, renderer: n } = this;
		return t.add(e), super.add(n.createElement("body").attr({ xmlns: "http://www.w3.org/1999/xhtml" }).css({
			background: "transparent",
			margin: "0 3px 0 0"
		}).add(t)), this.alignOnAdd && this.updateTransform(), this;
	}
	textSetter(e) {
		e !== this.textStr && (delete this.oldTextWidth, K.setElementHTML(this.element, e ?? ""), this.textStr = e, this.doTransform = !0);
	}
	alignSetter(e) {
		this.alignValue = this.textAlign = e, this.doTransform = !0;
	}
	xSetter(e, t) {
		this[t] = e, this.doTransform = !0;
	}
}, st = ot.prototype;
st.ySetter = st.xSetter;
//#endregion
//#region node_modules/highcharts/es-modules/Core/Axis/AxisDefaults.js
var ct;
(function(e) {
	e.xAxis = {
		alignTicks: !0,
		allowDecimals: void 0,
		panningEnabled: !0,
		zIndex: 2,
		zoomEnabled: !0,
		dateTimeLabelFormats: {
			millisecond: {
				main: "%[HMSL]",
				range: !1
			},
			second: {
				main: "%[HMS]",
				range: !1
			},
			minute: {
				main: "%[HM]",
				range: !1
			},
			hour: {
				main: "%[HM]",
				boundary: void 0,
				range: !1
			},
			day: {
				main: "%[eb]",
				boundary: "%[eb]"
			},
			week: { main: "%[eb]" },
			month: {
				main: "%[bY]",
				boundary: void 0
			},
			year: {
				main: "%[Y]",
				boundary: void 0
			}
		},
		endOnTick: !1,
		gridLineDashStyle: "Solid",
		gridZIndex: 1,
		labels: {
			autoRotationLimit: 80,
			distance: 15,
			enabled: !0,
			indentation: 10,
			overflow: "justify",
			reserveSpace: void 0,
			rotation: void 0,
			staggerLines: 0,
			step: 0,
			useHTML: !1,
			zIndex: 7,
			style: {
				color: "var(--highcharts-neutral-color-80)",
				cursor: "default",
				fontSize: "0.8em",
				textOverflow: "ellipsis"
			}
		},
		maxPadding: .01,
		minorGridLineDashStyle: "Solid",
		minorTickLength: 2,
		minorTickPosition: "outside",
		minorTicksPerMajor: 5,
		minPadding: .01,
		offset: void 0,
		reversed: void 0,
		reversedStacks: !1,
		showEmpty: !0,
		showFirstLabel: !0,
		showLastLabel: !0,
		startOfWeek: 1,
		startOnTick: !1,
		tickLength: 10,
		tickmarkPlacement: "between",
		tickPixelInterval: 100,
		tickPosition: "outside",
		title: {
			align: "middle",
			useHTML: !1,
			x: 0,
			y: 0,
			style: {
				color: "var(--highcharts-neutral-color-60)",
				fontSize: "0.8em"
			}
		},
		visible: !0,
		minorGridLineColor: "var(--highcharts-neutral-color-5)",
		minorGridLineWidth: 1,
		minorTickColor: "var(--highcharts-neutral-color-40)",
		lineColor: "var(--highcharts-neutral-color-80)",
		lineWidth: 1,
		gridLineColor: "var(--highcharts-neutral-color-10)",
		gridLineWidth: void 0,
		tickColor: "var(--highcharts-neutral-color-80)"
	}, e.yAxis = {
		reversedStacks: !0,
		endOnTick: !0,
		maxPadding: .05,
		minPadding: .05,
		tickPixelInterval: 72,
		showLastLabel: !0,
		labels: { x: void 0 },
		startOnTick: !0,
		title: {},
		stackLabels: {
			animation: {},
			allowOverlap: !1,
			enabled: !1,
			crop: !0,
			overflow: "justify",
			formatter: function() {
				return this.axis.chart.numberFormatter(this.total || 0, -1);
			},
			style: {
				color: "var(--highcharts-neutral-color-100)",
				fontSize: "0.7em",
				fontWeight: "bold",
				textOutline: "1px contrast"
			}
		},
		gridLineWidth: 1,
		lineWidth: 0
	};
})(ct ||= {});
var lt = ct, { deg2rad: ut } = H, dt = class {
	constructor(e, t, n, r, i) {
		this.isNew = !0, this.isNewLabel = !0, this.axis = e, this.pos = t, this.type = n || "", this.parameters = i || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, z(this, "init"), !n && !r && this.addLabel();
	}
	addLabel() {
		let e = this, t = e.axis, r = t.options, i = t.chart, o = t.categories, s = t.logarithmic, c = t.names, l = e.pos, u = T(e.options?.labels, r.labels), d = t.tickPositions, f = l === d[0], p = l === d[d.length - 1], m = d.info, h = m?.boundaryTicks[l], g = r.dateTimeLabelFormats, _ = e.label, v, y, b, x = this.parameters.category || (o ? T(o[l], c[l], l) : l);
		if (s && n(x) && (x = D(s.lin2log(x))), t.dateTime && g) if (m) {
			let e = {
				millisecond: "hour",
				second: "hour",
				minute: "hour",
				hour: "day",
				day: "month",
				week: "month",
				month: "year",
				year: "year"
			}, t = m.unitName, n = e[t], a = !r.grid?.enabled && h && n && g[n]?.boundary || g[t];
			y = i.time.resolveDTLFormat(a), v = y.main;
		} else n(x) && (v = t.dateTime.getXDateFormat(x, g || {}));
		e.isFirst = f, e.isLast = p, e.boundary = h;
		let S = {
			axis: t,
			chart: i,
			dateTimeLabelFormat: v,
			boundary: h,
			isFirst: f,
			isLast: p,
			pos: l,
			tick: e,
			tickPositionInfo: m,
			value: x
		};
		z(this, "labelFormat", S);
		let C = (e) => u.formatter ? u.formatter.call(e, e) : u.format ? (e.text = t.defaultLabelFormatter.call(e), q.format(u.format, e, i)) : t.defaultLabelFormatter.call(e), w = C.call(S, S), E = y?.list;
		e.shortenLabel = E ? function() {
			for (b = 0; b < E.length; b++) if (a(S, { dateTimeLabelFormat: E[b] }), _.attr({ text: C.call(S, S) }), _.getBBox().width < t.getSlotWidth(e) - 2 * (u.padding || 0)) return;
			_.attr({ text: "" });
		} : void 0, _ ? _.textStr !== w && (_.textWidth && !u.style.width && !_.styles.width && _.css({ width: void 0 }), _.attr({ text: w }), _.textPxLength = _.getBBox().width) : (e.label = _ = e.createLabel(w, u), e.rotation = 0);
	}
	createLabel(e, t, n) {
		let r = this.axis, { renderer: i, styledMode: a } = r.chart, o = t.style.whiteSpace, s = G(e) && t.enabled ? i.text(e, n?.x, n?.y, t.useHTML).add(r.labelGroup) : void 0;
		return s && (a || s.css(x(t.style)), s.textPxLength = s.getBBox().width, !a && o && s.css({ whiteSpace: o })), s;
	}
	destroy() {
		y(this, this.axis);
	}
	getPosition(e, t, n, r) {
		let i = this.axis, a = i.chart, o = r && a.oldChartHeight || a.chartHeight, s = {
			x: e ? D(i.translate(t + n, void 0, void 0, r) + i.transB) : i.left + i.offset + (i.opposite ? (r && a.oldChartWidth || a.chartWidth) - i.right - i.left : 0),
			y: e ? o - i.bottom + i.offset - (i.opposite ? i.height : 0) : D(o - i.translate(t + n, void 0, void 0, r) - i.transB)
		};
		return s.y = F(s.y, -1e9, 1e9), z(this, "afterGetPosition", { pos: s }), s;
	}
	getLabelPosition(e, t, n, r, i, a, o, s) {
		let c = this.axis, l = c.transA, u = c.isLinked && c.linkedParent ? c.linkedParent.reversed : c.reversed, d = c.staggerLines, f = c.tickRotCorr || {
			x: 0,
			y: 0
		}, p = !r && !c.reserveSpaceDefault ? -c.labelOffset * (c.labelAlign === "center" ? .5 : 1) : 0, m = i.distance, h = {}, g, _;
		return g = c.side === 0 ? n.rotation ? -m : -n.getBBox().height : c.side === 2 ? f.y + m : Math.cos(n.rotation * ut) * (f.y - n.getBBox(!1, 0).height / 2), G(i.y) && (g = c.side === 0 && c.horiz ? i.y + g : i.y), e = e + T(i.x, [
			0,
			1,
			0,
			-1
		][c.side] * m) + p + f.x - (a && r ? a * l * (u ? -1 : 1) : 0), t = t + g - (a && !r ? a * l * (u ? 1 : -1) : 0), d && (_ = o / (s || 1) % d, c.opposite && (_ = d - _ - 1), t += _ * (c.labelOffset / d)), h.x = e, h.y = Math.round(t), z(this, "afterGetLabelPosition", {
			pos: h,
			tickmarkOffset: a,
			index: o
		}), h;
	}
	getLabelSize() {
		return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
	}
	getMarkPath(e, t, n, r, i = !1, a) {
		return a.crispLine([[
			"M",
			e,
			t
		], [
			"L",
			e + (i ? 0 : -n),
			t + (i ? n : 0)
		]], r);
	}
	handleOverflow(e) {
		let n = this, r = this.axis, i = r.options.labels, o = e.x, s = r.chart.chartWidth, c = r.chart.spacing, l = T(r.labelLeft, Math.min(r.pos, c[3])), u = T(r.labelRight, Math.max(r.isRadial ? 0 : r.pos + r.len, s - c[1])), d = this.label, f = this.rotation, p = t(r.labelAlign || d.attr("align")), m = d.getBBox().width, h = r.getSlotWidth(n), g = p, _ = {}, v = h, y = 1, b, x, S;
		!f && i.overflow === "justify" ? (b = o - p * m, x = o + (1 - p) * m, b < l ? v = e.x + v * (1 - p) - l : x > u && (v = u - e.x + v * p, y = -1), v = Math.min(h, v), v < h && r.labelAlign === "center" && (e.x += y * (h - v - g * (h - Math.min(m, v)))), (m > v || r.autoRotation && d?.styles?.width) && (S = v)) : f < 0 && o - p * m < l ? S = Math.round(o / Math.cos(f * ut) - l) : f > 0 && o + p * m > u && (S = Math.round((s - o) / Math.cos(f * ut))), S && d && (n.shortenLabel ? n.shortenLabel() : d.css(a(_, {
			width: Math.floor(S) + "px",
			lineClamp: +!r.isRadial
		})));
	}
	render(e, t, n) {
		let r = this, i = r.axis, a = i.horiz, o = r.pos, s = T(r.tickmarkOffset, i.tickmarkOffset), c = r.getPosition(a, o, s, t), l = c.x, u = c.y, d = i.pos, f = d + i.len, p = a ? l : u, m = T(n, r.label?.newOpacity, 1);
		!i.chart.polar && (D(p) < d || p > f) && (n = 0), n ??= 1, this.isActive = !0, this.renderGridLine(t, n), this.renderMark(c, n), this.renderLabel(c, t, m, e), r.isNew = !1, z(this, "afterRender");
	}
	renderGridLine(e, t) {
		let n = this, r = n.axis, i = r.options, a = {}, o = n.pos, s = n.type, c = T(n.tickmarkOffset, r.tickmarkOffset), l = r.chart.renderer, u = n.gridLine, d, f = i.gridLineWidth, p = i.gridLineColor, m = i.gridLineDashStyle;
		n.type === "minor" && (f = i.minorGridLineWidth, p = i.minorGridLineColor, m = i.minorGridLineDashStyle), u || (r.chart.styledMode || (a.stroke = p, a["stroke-width"] = f || 0, a.dashstyle = m), s || (a.zIndex = 1), e && (t = 0), n.gridLine = u = l.path().attr(a).addClass("highcharts-" + (s ? s + "-" : "") + "grid-line").add(r.gridGroup)), u && (d = r.getPlotLinePath({
			value: o + c,
			lineWidth: u.strokeWidth(),
			force: "pass",
			old: e,
			acrossPanes: !1
		}), d && u[e || n.isNew ? "attr" : "animate"]({
			d,
			opacity: t
		}));
	}
	renderMark(e, t) {
		let n = this, r = n.axis, i = r.options, a = r.chart.renderer, o = n.type, s = r.tickSize(o ? o + "Tick" : "tick"), c = e.x, l = e.y, u = T(i[o === "minor" ? "minorTickWidth" : "tickWidth"], !o && r.isXAxis ? 1 : 0), d = i[o === "minor" ? "minorTickColor" : "tickColor"], f = n.mark, p = !f;
		s && (r.opposite && (s[0] = -s[0]), f || (n.mark = f = a.path().addClass("highcharts-" + (o ? o + "-" : "") + "tick").add(r.axisGroup), r.chart.styledMode || f.attr({
			stroke: d,
			"stroke-width": u
		})), f[p ? "attr" : "animate"]({
			d: n.getMarkPath(c, l, s[0], f.strokeWidth(), r.horiz, a),
			opacity: t
		}));
	}
	renderLabel(e, t, r, i) {
		let a = this, o = a.axis, s = o.horiz, c = o.options, l = a.label, u = c.labels, d = u.step, f = T(a.tickmarkOffset, o.tickmarkOffset), p = e.x, m = e.y, h = !0;
		l && n(p) && (l.xy = e = a.getLabelPosition(p, m, l, s, u, f, i, d), a.isFirst && !a.isLast && !c.showFirstLabel || a.isLast && !a.isFirst && !c.showLastLabel ? h = !1 : s && !t && r !== 0 && a.handleOverflow(e), d && i % d && (h = !1), h && n(e.y) ? (e.opacity = r, l[a.isNewLabel ? "attr" : "animate"](e).show(!0), a.isNewLabel = !1) : (l.hide(), a.isNewLabel = !0));
	}
}, { animObject: ft } = B, { xAxis: pt, yAxis: mt } = lt, { parse: ht } = L, { defaultOptions: gt } = O, { registerEventOptions: _t } = ve, { deg2rad: vt } = H, yt = (e, t) => C(t, void 0, void 0, T(e.options.allowDecimals, t < .5 || e.tickAmount !== void 0), !!e.tickAmount);
a(gt, {
	xAxis: pt,
	yAxis: x(pt, mt)
});
var bt = class e {
	constructor(e, t, n) {
		this.clippable = !0, this.init(e, t, n);
	}
	init(e, t, r = this.coll) {
		let i = r === "xAxis", a = this, o = a.isZAxis || (e.inverted ? !i : i);
		a.chart = e, a.horiz = o, a.isXAxis = i, a.coll = r, z(this, "init", { userOptions: t }), a.opposite = T(t.opposite, a.opposite), a.side = T(t.side, a.side, o ? a.opposite ? 0 : 2 : a.opposite ? 1 : 3), a.setOptions(t);
		let s = a.options, c = s.labels;
		a.type ??= s.type || "linear", a.uniqueNames ??= s.uniqueNames ?? !0, z(a, "afterSetType"), a.userOptions = t, a.minPixelPadding = 0, a.reversed = T(s.reversed, a.reversed), a.visible = s.visible, a.zoomEnabled = s.zoomEnabled, a.hasNames = this.type === "category" || s.categories === !0, a.categories = l(s.categories) && s.categories || (a.hasNames ? [] : void 0), a.names ||= [], a.namesMap ||= {}, a.plotLinesAndBandsGroups = {}, a.positiveValuesOnly = !!a.logarithmic, a.isLinked = G(s.linkedTo), a.ticks = {}, a.labelEdge = [], a.minorTicks = {}, a.plotLinesAndBands = [], a.alternateBands = {}, a.len ??= 0, a.minRange = a.userMinRange = s.minRange || s.maxZoom, a.range = s.range, a.max = void 0, a.min = void 0;
		let u = T(s.crosshair, N(e.options.tooltip.crosshairs)[+!i]);
		a.crosshair = u === !0 ? {} : u, e.axes.indexOf(a) === -1 && (i ? e.axes.splice(e.xAxis.length, 0, a) : e.axes.push(a), j(this, e[this.coll])), e.orderItems(a.coll), a.series = a.series || [], e.inverted && !a.isZAxis && i && !G(a.reversed) && (a.reversed = !0), a.labelRotation = n(c.rotation) ? c.rotation : void 0, _t(a, s), z(this, "afterInit");
	}
	setOptions(e) {
		let t = this.horiz ? {
			labels: {
				autoRotation: [-45],
				padding: 3
			},
			margin: 15
		} : {
			labels: { padding: 1 },
			title: { rotation: 90 * this.side }
		};
		this.options = x(t, this.coll === "yAxis" ? { title: { text: this.chart.options.lang.yAxisTitle } } : {}, gt[this.coll], e), z(this, "afterSetOptions", { userOptions: e });
	}
	defaultLabelFormatter() {
		let e = this.axis, t = this.chart, { numberFormatter: r } = t, i = n(this.value) ? this.value : NaN, a = e.chart.time, o = e.categories, s = this.dateTimeLabelFormat, c = gt.lang, l = c.numericSymbols, u = c.numericSymbolMagnitude || 1e3, d = e.logarithmic ? Math.abs(i) : e.tickInterval, f = l?.length, p, m;
		if (o) m = `${this.value}`;
		else if (s) m = a.dateFormat(s, i, !0);
		else if (f && l && d >= 1e3) for (; f-- && m === void 0;) p = u ** +(f + 1), d >= p && i * 10 % p == 0 && l[f] !== null && i !== 0 && (m = r(i / p, -1, void 0, void 0, t) + l[f]);
		return m ??= r(i, -1, void 0, Math.abs(i) < 1e4 ? "" : void 0, t), m;
	}
	getSeriesExtremes() {
		let e = this, t;
		z(this, "getSeriesExtremes", null, function() {
			e.hasVisibleSeries = !1, e.dataMin = e.dataMax = e.threshold = void 0, e.softThreshold = !e.isXAxis, e.series.forEach((r) => {
				if (r.reserveSpace()) {
					let i = r.options, a, o = i.threshold, s, c;
					if (e.hasVisibleSeries = !0, e.positiveValuesOnly && (o || 0) <= 0 && (o = void 0), e.isXAxis) a = r.getColumn("x"), a.length && (a = e.logarithmic ? a.filter((e) => e > 0) : a, t = r.getXExtremes(a), s = t.min, c = t.max, !n(s) && !(s instanceof Date) && (a = a.filter(n), t = r.getXExtremes(a), s = t.min, c = t.max), a.length && (e.dataMin = Math.min(T(e.dataMin, s), s), e.dataMax = Math.max(T(e.dataMax, c), c)));
					else {
						let t = r.applyExtremes();
						n(t.dataMin) && (s = t.dataMin, e.dataMin = Math.min(T(e.dataMin, s), s)), n(t.dataMax) && (c = t.dataMax, e.dataMax = Math.max(T(e.dataMax, c), c)), G(o) && (e.threshold = o), (!i.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1);
					}
				}
			});
		}), z(this, "afterGetSeriesExtremes");
	}
	translate(e, t, r, i, a, o) {
		let s = this.linkedParent || this, c = i && s.old ? s.old.min : s.min;
		if (!n(c)) return NaN;
		let l = s.minPixelPadding, u = (s.isOrdinal || s.brokenAxis?.hasBreaks || s.logarithmic && a) && !!s.lin2val, d = 1, f = 0, p = i && s.old ? s.old.transA : s.transA, m = 0;
		return p ||= s.transA, r && (d *= -1, f = s.len), s.reversed && (d *= -1, f -= d * (s.sector || s.len)), t ? (e = e * d + f, e -= l, m = e / p + c, u && (m = s.lin2val(m))) : (u && (e = s.val2lin(e)), m = d * (e - c) * p + f + d * l + (n(o) ? p * o : 0), s.isRadial || (m = D(m))), m;
	}
	toPixels(e, t) {
		return this.translate(this.chart?.time.parse(e) ?? NaN, !1, !this.horiz, void 0, !0) + (t ? 0 : this.pos);
	}
	toValue(e, t) {
		return this.translate(e - (t ? 0 : this.pos), !0, !this.horiz, void 0, !0);
	}
	getPlotLinePath(e) {
		let t = this, r = t.chart, i = t.left, a = t.top, o = e.old, s = e.value, c = e.lineWidth, l = o && r.oldChartHeight || r.chartHeight, u = o && r.oldChartWidth || r.chartWidth, d = t.transB, f = e.translatedValue, p = e.force, m, h, g, _, v;
		function y(e, t, n) {
			return p !== "pass" && (e < t || e > n) && (p ? e = F(e, t, n) : v = !0), e;
		}
		let b = {
			value: s,
			lineWidth: c,
			old: o,
			force: p,
			acrossPanes: e.acrossPanes,
			translatedValue: f
		};
		return z(this, "getPlotLinePath", b, function(e) {
			f = T(f, t.translate(s, void 0, void 0, o)), f = F(f, -1e9, 1e9), m = g = f + d, h = _ = l - f - d, n(f) ? t.horiz ? (h = a, _ = l - t.bottom + (t.options.isInternal ? 0 : r.scrollablePixelsY || 0), m = g = y(m, i, i + t.width)) : (m = i, g = u - t.right + (r.scrollablePixelsX || 0), h = _ = y(h, a, a + t.height)) : (v = !0, p = !1), e.path = v && !p ? void 0 : r.renderer.crispLine([[
				"M",
				m,
				h
			], [
				"L",
				g,
				_
			]], c || 1);
		}), b.path;
	}
	getLinearTickPositions(e, t, n) {
		let r = D(Math.floor(t / e) * e), i = D(Math.ceil(n / e) * e), a = [], o, s, c;
		if (D(r + e) === r && (c = 20), this.single) return [t];
		for (o = r; o <= i && (a.push(o), o = D(o + e, c), o !== s);) s = o;
		return a;
	}
	getMinorTickInterval() {
		let { minorTicks: e, minorTickInterval: t } = this.options;
		if (e === !0) return T(t, "auto");
		if (e !== !1) return t;
	}
	getMinorTickPositions() {
		let e = this, t = e.options, n = e.tickPositions, r = e.minorTickInterval, i = e.pointRangePadding || 0, a = (e.min || 0) - i, o = (e.max || 0) + i, s = e.brokenAxis?.hasBreaks ? e.brokenAxis.unitLength : o - a, c = [], l;
		if (s && s / r < e.len / 3) {
			let i = e.logarithmic;
			if (i) this.paddedTicks.forEach(function(e, t, n) {
				t && c.push.apply(c, i.getLogTickPositions(r, n[t - 1], n[t], !0));
			});
			else if (e.dateTime && this.getMinorTickInterval() === "auto") c = c.concat(e.getTimeTicks(e.dateTime.normalizeTimeTickInterval(r), a, o, t.startOfWeek));
			else for (l = a + (n[0] - a) % r; l <= o && l !== c[0]; l += r) c.push(l);
		}
		return c.length !== 0 && e.trimTicks(c), c;
	}
	adjustForMinRange() {
		let e = this, t = e.options, r = e.logarithmic, i = e.chart.time, { max: a, min: o, minRange: s } = e, c, l, u, d, f;
		e.isXAxis && s === void 0 && !r && (G(t.min) || G(t.max) || G(t.floor) || G(t.ceiling) ? s = null : (u = R(e.series.map((e) => {
			let t = e.getColumn("x");
			return e.xIncrement ? t.slice(0, 2) : t;
		})) || 0, s = Math.min(u * 5, e.dataMax - e.dataMin))), n(a) && n(o) && n(s) && a - o < s && (l = e.dataMax - e.dataMin >= s, c = (s - a + o) / 2, d = [o - c, i.parse(t.min) ?? o - c], l && (d[2] = r ? r.log2lin(e.dataMin) : e.dataMin), o = ie(d), f = [o + s, i.parse(t.max) ?? o + s], l && (f[2] = r ? r.log2lin(e.dataMax) : e.dataMax), a = ne(f), a - o < s && (d[0] = a - s, d[1] = i.parse(t.min) ?? a - s, o = ie(d))), e.minRange = s, e.min = o, e.max = a;
	}
	getClosest() {
		let e, t;
		if (this.categories) t = 1;
		else {
			let n = [];
			this.series.forEach(function(e) {
				let r = e.closestPointRange, i = e.getColumn("x");
				i.length === 1 ? n.push(i[0]) : e.sorted && G(r) && e.reserveSpace() && (t = G(t) ? Math.min(t, r) : r);
			}), n.length && (n.sort((e, t) => e - t), e = R([n]));
		}
		return e && t ? Math.min(e, t) : e || t;
	}
	nameToX(e, t) {
		let r = l(this.options.categories), { name: i, series: a } = e, o = r ? this.categories : this.names, s = this.namesMap, c;
		return a.requireSorting = !1, G(t) || (t = this.uniqueNames && o ? r ? o.indexOf(i) : s[i] ?? -1 : a.autoIncrement()), t === -1 ? !r && o && (c = o.length) : n(t) && (c = t), c === void 0 ? c = n(e.x) ? e.x : a.autoIncrement() : (this.names[c] = e.name, s[e.name] = c), c;
	}
	updateNames() {
		let e = this, { names: t, namesMap: n } = this;
		t.length > 0 && (Object.keys(n).forEach(function(e) {
			delete n[e];
		}), t.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach((t) => {
			if (t.xIncrement = null, delete t.xColumn, !t.points || t.isDirtyData) e.max = Math.max(e.max || 0, t.dataTable.rowCount - 1), t.processData(), t.generatePoints();
			else {
				let e = t.getColumn("x");
				t.points?.forEach((t) => {
					t.x = e[t.index];
				});
			}
		}));
	}
	setAxisTranslation() {
		let e = this, t = e.max - e.min, n = e.linkedParent, r = !!e.categories, i = e.isXAxis, a = e.axisPointRange || 0, o, s = 0, l = 0, u, d = e.transA;
		(i || r || a) && (o = e.getClosest(), n ? (s = n.minPointOffset, l = n.pointRangePadding) : e.series.forEach(function(t) {
			let n = r ? 1 : i ? T(t.options.pointRange, o, 0) : e.axisPointRange || 0, u = t.options.pointPlacement;
			if (a = Math.max(a, n), !e.single || r) {
				let e = t.is("xrange") ? !i : i;
				s = Math.max(s, e && c(u) ? 0 : n / 2), l = Math.max(l, e && u === "on" ? 0 : n);
			}
		}), u = e.ordinal?.slope && o ? e.ordinal.slope / o : 1, e.minPointOffset = s *= u, e.pointRangePadding = l *= u, e.pointRange = Math.min(a, e.single && r ? 1 : t), i && (e.closestPointRange = o)), e.translationSlope = e.transA = d = e.staticScale || e.len / (t + l || 1), e.transB = e.horiz ? e.left : e.bottom, e.minPixelPadding = d * s, z(this, "afterSetAxisTranslation");
	}
	minFromRange() {
		let { max: e, min: t } = this;
		return n(e) && n(t) && e - t || void 0;
	}
	setTickInterval(e) {
		let t = this, { categories: r, chart: i, dataMax: a, dataMin: o, dateTime: s, isXAxis: c, logarithmic: l, options: u, softThreshold: d } = t, f = i.time, p = n(t.threshold) ? t.threshold : void 0, m = t.minRange || 0, { ceiling: h, floor: g, linkedTo: _, softMax: v, softMin: y } = u, b = n(_) && i[t.coll]?.[_], x = u.tickPixelInterval, S = u.maxPadding, C = u.minPadding, w = 0, E, O = n(u.tickInterval) && u.tickInterval >= 0 ? u.tickInterval : void 0, k, A, j, M;
		if (!s && !r && !b && this.getTickAmount(), j = T(t.userMin, f.parse(u.min)), M = T(t.userMax, f.parse(u.max)), b ? (t.linkedParent = b, E = b.getExtremes(), t.min = T(E.min, E.dataMin), t.max = T(E.max, E.dataMax), this.type !== b.type && U(11, !0, i)) : (d && G(p) && n(a) && n(o) && (o >= p ? (k = p, C = 0) : a <= p && (A = p, S = 0)), t.min = T(j, k, o), t.max = T(M, A, a)), n(t.max) && n(t.min) && (l && (t.positiveValuesOnly && !e && Math.min(t.min, T(o, t.min)) <= 0 && U(10, !0, i), t.min = D(l.log2lin(t.min), 16), t.max = D(l.log2lin(t.max), 16)), t.range && n(o) && (t.userMin = t.min = j = Math.max(o, t.minFromRange() || 0), t.userMax = M = t.max, t.range = void 0)), z(t, "foundExtremes"), t.adjustForMinRange(), n(t.min) && n(t.max)) {
			if (!n(t.userMin) && n(y) && y < t.min && (t.min = j = y), !n(t.userMax) && n(v) && v > t.max && (t.max = M = v), !r && !t.axisPointRange && !t.stacking?.usePercentage && !b && (w = t.max - t.min, w && (!G(j) && C && (t.min -= w * C), !G(M) && S && (t.max += w * S))), !n(t.userMin) && n(g) && (t.min = Math.max(t.min, g)), !n(t.userMax) && n(h) && (t.max = Math.min(t.max, h)), d && n(o) && n(a)) {
				let e = p || 0;
				!G(j) && t.min < e && o >= e ? t.min = u.minRange ? Math.min(e, t.max - m) : e : !G(M) && t.max > e && a <= e && (t.max = u.minRange ? Math.max(e, t.min + m) : e);
			}
			!i.polar && t.min > t.max && (G(u.min) ? t.max = t.min : G(u.max) && (t.min = t.max)), w = t.max - t.min;
		}
		if (t.tickInterval = t.min === t.max || !n(t.min) || !n(t.max) ? 1 : b && !O && x === b.options.tickPixelInterval ? O = b.tickInterval : T(O, this.tickAmount ? w / Math.max(this.tickAmount - 1, 1) : void 0, r ? 1 : w * x / Math.max(t.len, x)), c && !e) {
			let e = t.min !== t.old?.min || t.max !== t.old?.max;
			t.series.forEach(function(t) {
				t.forceCrop = t.forceCropping?.(), t.processData(e);
			}), z(this, "postProcessData", { hasExtremesChanged: e });
		}
		t.setAxisTranslation(), z(this, "initialAxisTranslation"), t.pointRange && !O && (t.tickInterval = Math.max(t.pointRange, t.tickInterval));
		let N = T(u.minTickInterval, s && !t.series.some((e) => !e.sorted) ? t.closestPointRange : 0);
		!O && N && t.tickInterval < N && (t.tickInterval = N), !s && !l && !O && (t.tickInterval = yt(t, t.tickInterval)), this.tickAmount || (t.tickInterval = t.unsquish()), this.setTickPositions();
	}
	setTickPositions() {
		let e = this, t = this.options, r = t.tickPositions, i = t.tickPositioner, a = this.getMinorTickInterval(), o = !this.isPanning, s = o && t.startOnTick, c = o && t.endOnTick, l = [], u;
		if (this.tickmarkOffset = this.categories && t.tickmarkPlacement === "between" && this.tickInterval === 1 ? .5 : 0, this.single = this.min === this.max && G(this.min) && !this.tickAmount && (this.min % 1 == 0 || t.allowDecimals !== !1), r) l = r.slice();
		else if (n(this.min) && n(this.max)) {
			if (!e.ordinal?.positions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) l = [this.min, this.max], U(19, !1, this.chart);
			else if (e.dateTime) l = e.getTimeTicks(e.dateTime.normalizeTimeTickInterval(this.tickInterval, t.units), this.min, this.max, t.startOfWeek, e.ordinal?.positions, this.closestPointRange, !0);
			else if (e.logarithmic) l = e.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
			else {
				let e = this.tickInterval, t = e;
				for (; t <= e * 2 && (l = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && l.length > this.tickAmount);) this.tickInterval = yt(this, t *= 1.1);
			}
			l.length > this.len && (l = [l[0], l[l.length - 1]], l[0] === l[1] && (l.length = 1)), i && (this.tickPositions = l, u = i.apply(e, [
				this.min,
				this.max,
				e
			]), u && (l = u));
		}
		!this.isDirty && l.length !== this.tickPositions?.length && (this.isDirty = !0), this.tickPositions = l, this.minorTickInterval = a === "auto" && this.tickInterval ? this.tickInterval / t.minorTicksPerMajor : a, this.paddedTicks = l.slice(0), this.trimTicks(l, s, c), !this.isLinked && n(this.min) && n(this.max) && (this.single && l.length < 2 && !this.categories && !this.series.some((e) => e.is("heatmap") && e.options.pointPlacement === "between") && (this.min -= .5, this.max += .5), !r && !u && this.adjustTickAmount()), z(this, "afterSetTickPositions");
	}
	trimTicks(e, t, r) {
		let i = e[0], a = e[e.length - 1], o = !this.isOrdinal && this.minPointOffset || 0;
		if (z(this, "trimTicks"), !this.isLinked || !this.grid) {
			if (t && n(i)) this.min = i;
			else if (e.length) for (; this.min - o > e[0];) e.shift();
			if (r && n(a)) this.max = a;
			else for (; this.max + o < e[e.length - 1];) e.pop();
			e.length === 0 && G(i) && !this.options.tickPositions && e.push((a + i) / 2);
		}
	}
	alignToOthers() {
		let e = this, t = e.chart, r = [this], i = e.options, a = t.options.chart, o = this.coll === "yAxis" && a.alignThresholds, s = [], c;
		if (e.thresholdAlignment = void 0, (a.alignTicks !== !1 && i.alignTicks || o) && i.startOnTick !== !1 && i.endOnTick !== !1 && !e.logarithmic) {
			let n = (e) => {
				let { horiz: t, options: n } = e;
				return [
					t ? n.left : n.top,
					n.width,
					n.height,
					n.pane
				].join(",");
			}, i = n(this);
			t[this.coll].forEach(function(t) {
				let { series: a } = t;
				a.length && a.some((e) => e.visible) && t !== e && n(t) === i && (c = !0, r.push(t));
			});
		}
		if (c && o) {
			r.forEach((t) => {
				let r = t.getThresholdAlignment(e);
				n(r) && s.push(r);
			});
			let t = s.length > 1 ? s.reduce((e, t) => e += t, 0) / s.length : void 0;
			r.forEach((e) => {
				e.thresholdAlignment = t;
			});
		}
		return c;
	}
	getThresholdAlignment(e) {
		if ((!n(this.dataMin) || this !== e && this.series.some((e) => e.isDirty || e.isDirtyData || e.xAxis?.isDirty)) && this.getSeriesExtremes(), n(this.threshold)) {
			let e = F((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
			return this.options.reversed && (e = 1 - e), e;
		}
	}
	getTickAmount() {
		let e = this, t = this.options, n = t.tickPixelInterval, r = t.tickAmount;
		!G(t.tickInterval) && !r && this.len < n && !this.isRadial && !e.logarithmic && t.startOnTick && t.endOnTick && (r = 2), !r && this.alignToOthers() && (r = Math.ceil(this.len / n) + 1), r < 4 && (this.finalTickAmt = r, r = 5), this.tickAmount = r;
	}
	adjustTickAmount() {
		let e = this, { finalTickAmt: t, max: r, min: i, options: a, tickPositions: o, tickAmount: s, thresholdAlignment: c } = e, l = o?.length, u = T(e.threshold, e.softThreshold ? 0 : null), d, f, p = e.tickInterval, m, h = () => o.push(D(o[o.length - 1] + p)), g = () => o.unshift(D(o[0] - p));
		if (n(c) && (m = c === 0 ? 0 : c === 1 ? s - 1 : Math.round(F(c * (s - 1), 1, s - 2)), a.reversed && (m = s - 1 - m)), e.hasData() && n(i) && n(r)) {
			let c = () => {
				e.transA *= (l - 1) / (s - 1), e.min = a.startOnTick ? o[0] : Math.min(i, o[0]), e.max = a.endOnTick ? o[o.length - 1] : Math.max(r, o[o.length - 1]);
			};
			if (n(m) && n(e.threshold)) {
				for (; o[m] !== u || o.length !== s || o[0] > i || o[o.length - 1] < r;) {
					for (o.length = 0, o.push(e.threshold); o.length < s;) o[m] === void 0 || o[m] > e.threshold ? g() : h();
					if (p > e.tickInterval * 8) break;
					p *= 2;
				}
				c();
			} else if (l < s) {
				for (; o.length < s;) o.length % 2 || i === u ? h() : g();
				c();
			}
			if (G(t)) {
				for (f = d = o.length; f--;) (t === 3 && f % 2 == 1 || t <= 2 && f > 0 && f < d - 1) && o.splice(f, 1);
				e.finalTickAmt = void 0;
			}
		}
	}
	setScale() {
		let e = this, { coll: t, stacking: n } = e, r = !1, i = !1;
		e.series.forEach((e) => {
			r = r || e.isDirtyData || e.isDirty, i = i || e.xAxis?.isDirty || !1;
		}), e.setAxisSize();
		let a = e.len !== e.old?.len;
		a || r || i || e.isLinked || e.forceRedraw || e.userMin !== e.old?.userMin || e.userMax !== e.old?.userMax || e.alignToOthers() ? (n && t === "yAxis" && n.buildStacks(), e.forceRedraw = !1, e.userMinRange || (e.minRange = void 0), e.getSeriesExtremes(), e.setTickInterval(), n && t === "xAxis" && n.buildStacks(), e.isDirty ||= a || e.min !== e.old?.min || e.max !== e.old?.max) : n && n.cleanStacks(), r && delete e.allExtremes, z(this, "afterSetScale");
	}
	setExtremes(e, t, n = !0, r, i) {
		let o = this.chart;
		this.series.forEach((e) => {
			delete e.kdTree;
		}), e = o.time.parse(e), t = o.time.parse(t), i = a(i, {
			min: e,
			max: t
		}), z(this, "setExtremes", i, (e) => {
			this.userMin = e.min, this.userMax = e.max, this.eventArgs = e, n && o.redraw(r);
		});
	}
	setAxisSize() {
		let e = this.chart, t = this.options, n = t.offsets || [
			0,
			0,
			0,
			0
		], r = this.horiz, i = this.width = Math.round(E(T(t.width, e.plotWidth - n[3] + n[1]), e.plotWidth)), a = this.height = Math.round(E(T(t.height, e.plotHeight - n[0] + n[2]), e.plotHeight)), o = this.top = Math.round(E(T(t.top, e.plotTop + n[0]), e.plotHeight, e.plotTop)), s = this.left = Math.round(E(T(t.left, e.plotLeft + n[3]), e.plotWidth, e.plotLeft));
		this.bottom = e.chartHeight - a - o, this.right = e.chartWidth - i - s, this.len = Math.max(r ? i : a, 0), this.pos = r ? s : o;
	}
	getExtremes() {
		let e = this, t = e.logarithmic;
		return {
			min: t ? D(t.lin2log(e.min)) : e.min,
			max: t ? D(t.lin2log(e.max)) : e.max,
			dataMin: e.dataMin,
			dataMax: e.dataMax,
			userMin: e.userMin,
			userMax: e.userMax
		};
	}
	getThreshold(e) {
		let t = this, n = t.logarithmic, r = n ? n.lin2log(t.min) : t.min, i = n ? n.lin2log(t.max) : t.max;
		return e === null || e === -Infinity ? e = r : e === Infinity ? e = i : r > e ? e = r : i < e && (e = i), t.translate(e, 0, 1, 0, 1);
	}
	autoLabelAlign(e) {
		let t = ((e - this.side * 90) % 360 + 360) % 360, n = { align: "center" };
		return z(this, "autoLabelAlign", n, function(e) {
			t > 15 && t < 165 ? e.align = "right" : t > 195 && t < 345 && (e.align = "left");
		}), n.align;
	}
	tickSize(e) {
		let t = this.options, n = T(t[e === "tick" ? "tickWidth" : "minorTickWidth"], e === "tick" && this.isXAxis && !this.categories ? 1 : 0), r = t[e === "tick" ? "tickLength" : "minorTickLength"], i;
		n && r && (t[e + "Position"] === "inside" && (r = -r), i = [r, n]);
		let a = {
			tickSize: i,
			prefix: e
		};
		return z(this, "afterTickSize", a), a.tickSize;
	}
	labelMetrics() {
		let e = this.chart.renderer, t = this.ticks, n = t[Object.keys(t)[0]] || {};
		return this.chart.renderer.fontMetrics(n.label || e.box);
	}
	unsquish() {
		let e = this.options.labels, t = e.padding || 0, r = this.horiz, i = this.tickInterval, a = this.len / ((+!!this.categories + this.max - this.min) / i), o = e.rotation, s = D(this.labelMetrics().h * .8), c = Math.max(this.max - this.min, 0), l = function(e) {
			let n = (e + 2 * t) / (a || 1);
			return n = n > 1 ? Math.ceil(n) : 1, n * i > c && e !== Infinity && a !== Infinity && c && (n = Math.ceil(c / i)), D(n * i);
		}, u = i, d, f = Number.MAX_VALUE, p;
		if (r) {
			if (e.staggerLines || (n(o) ? p = [o] : a < e.autoRotationLimit && (p = e.autoRotation)), p) {
				let e, t;
				for (let n of p) (n === o || n && n >= -90 && n <= 90) && (e = l(Math.abs(s / Math.sin(vt * n))), t = e + Math.abs(n / 360), t < f && (f = t, d = n, u = e));
			}
		} else u = l(s * .75);
		return this.autoRotation = p, this.labelRotation = T(d, n(o) ? o : 0), e.step ? i : u;
	}
	getSlotWidth(e) {
		let t = this.chart, r = this.horiz, i = this.options.labels, a = Math.max(this.tickPositions.length - +!this.categories, 1), o = t.margin[3];
		if (e && n(e.slotWidth)) return e.slotWidth;
		if (r && i.step < 2 && !this.isRadial) return i.rotation ? 0 : (this.staggerLines || 1) * this.len / a;
		if (!r) {
			let e = i.style.width;
			if (e !== void 0) return parseInt(String(e), 10);
			if (!this.opposite && o) return o - t.spacing[3];
		}
		return t.chartWidth * .33;
	}
	renderUnsquish() {
		let e = this.chart, t = e.renderer, n = this.tickPositions, r = this.ticks, i = this.options.labels, o = i.style, s = this.horiz, l = this.getSlotWidth(), u = Math.max(1, Math.round(l - (s ? 2 * (i.padding || 0) : i.distance || 0))), d = {}, f = this.labelMetrics(), p = o.lineClamp, m, h = p ?? (Math.floor(this.len / (n.length * f.h)) || 1), g = 0;
		c(i.rotation) || (d.rotation = i.rotation || 0), n.forEach(function(e) {
			g = Math.max(g, r[e].label?.textPxLength || 0);
		}), this.maxLabelLength = g, this.autoRotation ? g > u && g > f.h ? d.rotation = this.labelRotation : this.labelRotation = 0 : l && (m = u), d.rotation && (m = g > e.chartHeight * .5 ? e.chartHeight * .33 : g, p || (h = 1)), this.labelAlign = i.align || this.autoLabelAlign(this.labelRotation || 0), this.labelAlign && (d.align = this.labelAlign), n.forEach(function(e) {
			let t = r[e], n = t?.label, i = o.width, s = {};
			n && (n.attr(d), t.shortenLabel ? t.shortenLabel() : m && !i && o.whiteSpace !== "nowrap" && (m < (n.textPxLength || 0) || n.element.tagName === "DIV") ? n.css(a(s, {
				width: `${m}px`,
				lineClamp: h
			})) : (n.styles.width || n.textWidth || n.styles.lineClamp) && !s.width && !i && n.css({
				width: "auto",
				lineClamp: 0
			}), t.rotation = d.rotation);
		}, this), this.tickRotCorr = t.rotCorr(f.b, this.labelRotation || 0, this.side !== 0);
	}
	hasData() {
		return this.series.some(function(e) {
			return e.hasData();
		}) || this.options.showEmpty && G(this.min) && G(this.max);
	}
	addTitle(e) {
		let t = this, n = t.chart.renderer, r = t.horiz, i = t.opposite, a = t.options.title, o = t.chart.styledMode, s;
		t.axisTitle || (s = a.textAlign, s ||= (r ? {
			low: "left",
			middle: "center",
			high: "right"
		} : {
			low: i ? "right" : "left",
			middle: "center",
			high: i ? "left" : "right"
		})[a.align], t.axisTitle = n.text(a.text || "", 0, 0, a.useHTML).attr({
			zIndex: 7,
			rotation: a.rotation || 0,
			align: s
		}).addClass("highcharts-axis-title"), o || t.axisTitle.css(x(a.style)), t.axisTitle.add(t.axisGroup), t.axisTitle.isNew = !0), !o && !a.style.width && !t.isRadial && t.axisTitle.css({ width: t.len + "px" }), t.axisTitle[e ? "show" : "hide"](e);
	}
	generateTick(e) {
		let t = this, n = t.ticks;
		n[e] ? n[e].addLabel() : n[e] = new dt(t, e);
	}
	createGroups() {
		let { axisParent: e, chart: t, coll: n, options: r } = this, i = t.renderer, a = (t, a, o) => i.g(t).attr({ zIndex: o }).addClass(`highcharts-${n.toLowerCase()}${a} ` + (this.isRadial ? `highcharts-radial-axis${a} ` : "") + (r.className || "")).add(e);
		this.axisGroup || (this.gridGroup = a("grid", "-grid", r.gridZIndex).clip(this.clippable ? t.plotClipInner : void 0), this.axisGroup = a("axis", "", r.zIndex), this.labelGroup = a("axis-labels", "-labels", r.labels.zIndex));
	}
	shuffleTicks() {
		let e = this.ticks, t = this.old?.names;
		if (this.type === "category" && t) {
			t.forEach((n, r) => {
				let i = this.namesMap[n];
				G(i) && r !== i && (e[r] && (e[r].pos = i, this.isDirty = !0), e[i] && this.names.indexOf(t[i]) === -1 && (e[i].pos = NaN));
			});
			let n = Object.values(e);
			Object.keys(e).forEach((t) => {
				delete e[t];
			}), n.forEach((t) => {
				isNaN(t.pos) ? t.destroy() : e[t.pos] = t;
			});
		}
	}
	getOffset() {
		let e = this, { chart: t, horiz: r, options: i, side: a, ticks: o, tickPositions: c, coll: l } = e, u = e.hasData(), d = i.title, f = i.labels, p = n(i.crossing), m = t.axisOffset, h = t.clipOffset, g = [
			-1,
			1,
			1,
			-1
		][a], _ = e.tickRotCorr || {
			x: 0,
			y: 0
		}, v = 0, y, b = 0, x, S = 0, C = 0, w, E, D;
		if (e.showAxis = y = u || i.showEmpty, e.staggerLines = e.horiz && f.staggerLines || void 0, e.createGroups(), u || e.isLinked ? (e.shuffleTicks(), c.forEach(e.generateTick.bind(e)), e.renderUnsquish(), _ = e.tickRotCorr, v = Math.abs(_.x), D = e.reserveSpaceDefault = a === 0 || a === 2 || {
			1: "left",
			3: "right"
		}[a] === e.labelAlign, (f.reserveSpace ?? (!p && null) ?? (e.labelAlign === "center" || null) ?? D) && c.forEach(function(e) {
			C = Math.max(o[e].getLabelSize(), C);
		}), e.staggerLines && (C *= e.staggerLines), !r && n(e.labelRotation) && D && (C -= v), e.labelOffset = C * (e.opposite ? -1 : 1)) : s(o, function(e, t) {
			e.destroy(), delete o[t];
		}), d?.text && d.enabled !== !1 && (e.addTitle(y), y && !p && d.reserveSpace !== !1 && (e.titleOffset = b = e.axisTitle.getBBox()[r ? "height" : "width"], x = d.offset, S = G(x) ? 0 : T(d.margin, r ? 5 : 10))), e.renderLine(), e.offset = g * (n(i.offset) ? i.offset : m[a] ? m[a] + (i.margin || 0) : 0), E = a === 0 ? -e.labelMetrics().h : a === 2 ? _.y : 0, w = Math.abs(C) + S, C && (w -= E, w += g * (r ? f.y ?? _.y + g * f.distance : f.x ?? (D ? g * (f.distance - v) : _.x + g * f.distance)), !r && !D && e.labelAlign === "center" && n(e.labelRotation) && (w += v)), e.axisTitleMargin = x ?? w, e.maxLabelDimensions = e.getMaxLabelDimensions?.(o, c), l !== "colorAxis" && h) {
			let t = this.tickSize("tick");
			m[a] = Math.max(m[a], (e.axisTitleMargin || 0) + b + g * e.offset, w, c?.length && t ? t[0] + g * e.offset : 0);
			let n = !e.axisLine || i.offset ? 0 : e.axisLine.strokeWidth() / 2;
			h[a] = Math.max(h[a], n);
		}
		z(this, "afterGetOffset");
	}
	getLinePath(e) {
		let t = this.chart, n = this.opposite, r = this.offset, i = this.horiz, a = this.left + (n ? this.width : 0) + r, o = t.chartHeight - this.bottom - (n ? this.height : 0) + r;
		return n && (e *= -1), t.renderer.crispLine([[
			"M",
			i ? this.left : a,
			i ? o : this.top
		], [
			"L",
			i ? t.chartWidth - this.right : a,
			i ? o : t.chartHeight - this.bottom
		]], e);
	}
	renderLine() {
		let { chart: e, offset: t = 0, options: n } = this;
		this.axisLine ||= e.renderer.path().addClass("highcharts-axis-line").attr(e.styledMode ? {} : {
			stroke: n.lineColor,
			"stroke-width": n.lineWidth,
			zIndex: 7
		}).clip(this.clippable && t <= 0 ? e.plotClipOuter : void 0).add(this.axisGroup);
	}
	getTitlePosition(e) {
		let t = this.horiz, n = this.left, r = this.top, i = this.len, a = this.options.title, o = t ? n : r, s = this.opposite, c = this.offset, l = a.x, u = a.y, d = this.chart.renderer.fontMetrics(e), f = e ? Math.max(e.getBBox(!1, 0).height - d.h - 1, 0) : 0, p = {
			low: o + (t ? 0 : i),
			middle: o + i / 2,
			high: o + (t ? i : 0)
		}[a.align], m = (t ? r + this.height : n) + (t ? 1 : -1) * (s ? -1 : 1) * (this.axisTitleMargin || 0) + [
			-f,
			f,
			d.f,
			-f
		][this.side], h = {
			x: t ? p + l : m + (s ? this.width : 0) + c + l,
			y: t ? m + u - (s ? this.height : 0) + c : p + u
		};
		return z(this, "afterGetTitlePosition", { titlePosition: h }), h;
	}
	renderMinorTick(e, t) {
		let n = this, r = n.minorTicks;
		r[e] || (r[e] = new dt(n, e, "minor")), t && r[e].isNew && r[e].render(null, !0), r[e].render(null, !1, 1);
	}
	renderTick(e, t, n) {
		let r = this, i = r.isLinked, a = r.ticks;
		(!i || e >= r.min && e <= r.max || r.grid?.isColumn) && (a[e] || (a[e] = new dt(r, e)), n && a[e].isNew && a[e].render(t, !0, -1), a[e].render(t));
	}
	render() {
		let e = this, t = e.chart, r = e.logarithmic, i = t.renderer, a = e.options, o = e.isLinked, c = e.tickPositions, l = e.axisTitle, u = e.ticks, d = e.minorTicks, f = e.alternateBands, p = a.stackLabels, m = a.alternateGridColor, h = a.crossing, g = e.tickmarkOffset, _ = e.axisLine, v = e.showAxis, y = ft(i.globalAnimation), b, x;
		if (e.labelEdge.length = 0, e.overlap = !1, [
			u,
			d,
			f
		].forEach(function(e) {
			s(e, function(e) {
				e.isActive = !1;
			});
		}), n(h)) {
			let n = this.isXAxis ? t.yAxis[0] : t.xAxis[0], r = [
				1,
				-1,
				-1,
				1
			][this.side];
			if (n) {
				let t = n.toPixels(h, !0);
				e.horiz && (t = n.len - t), e.offset = r * t;
			}
		}
		if (e.hasData() || o) {
			let i = e.chart.hasRendered && e.old && n(e.old.min);
			e.minorTickInterval && !e.categories && e.getMinorTickPositions().forEach(function(t) {
				e.renderMinorTick(t, i);
			}), c.length && (c.forEach(function(t, n) {
				e.renderTick(t, n, i);
			}), g && (e.min === 0 || e.single) && (u[-1] ||= new dt(e, -1, null, !0), u[-1].render(-1))), m && c.forEach(function(n, i) {
				x = c[i + 1] === void 0 ? e.max - g : c[i + 1] + g, i % 2 == 0 && n < e.max && x <= e.max + (t.polar ? -g : g) && (f[n] || (f[n] = new H.PlotLineOrBand(e, {})), b = n + g, f[n].options = {
					from: r ? r.lin2log(b) : b,
					to: r ? r.lin2log(x) : x,
					color: m,
					className: "highcharts-alternate-grid"
				}, f[n].render(), f[n].isActive = !0);
			}), e._addedPlotLB || (e._addedPlotLB = !0, (a.plotLines || []).concat(a.plotBands || []).forEach(function(t) {
				e.addPlotBandOrLine(t);
			}));
		}
		[
			u,
			d,
			f
		].forEach(function(e) {
			let n = [], r = y.duration;
			s(e, function(e, t) {
				e.isActive || (e.render(t, !1, 0), e.isActive = !1, n.push(t));
			}), V(function() {
				let t = n.length;
				for (; t--;) e[n[t]] && !e[n[t]].isActive && (e[n[t]].destroy(), delete e[n[t]]);
			}, e === f || !t.hasRendered || !r ? 0 : r);
		}), _ && (_[_.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(_.strokeWidth()) }), _.isPlaced = !0, _[v ? "show" : "hide"](v)), l && v && (l[l.isNew ? "attr" : "animate"](e.getTitlePosition(l)), l.isNew = !1), p?.enabled && e.stacking && e.stacking.renderStackTotals(), this.old || this.saveOld(), e.isDirty = !1, z(this, "afterRender");
	}
	redraw() {
		this.visible && (this.render(), this.plotLinesAndBands.forEach(function(e) {
			e.render();
		})), this.series.forEach(function(e) {
			e.isDirty = !0;
		});
	}
	saveOld() {
		this.old = n(this.min) ? {
			len: this.len,
			max: this.max,
			min: this.min,
			names: this.names.slice(),
			transA: this.transA,
			userMax: this.userMax,
			userMin: this.userMin
		} : void 0;
	}
	getKeepProps() {
		return this.keepProps || e.keepProps;
	}
	destroy(e) {
		let t = this, n = t.plotLinesAndBands, r = this.eventOptions;
		if (z(this, "destroy", { keepEvents: e }), e || _(t), [
			t.ticks,
			t.minorTicks,
			t.alternateBands
		].forEach(function(e) {
			y(e);
		}), n) {
			let e = n.length;
			for (; e--;) n[e].destroy();
		}
		[
			"axisLine",
			"axisTitle",
			"axisGroup",
			"gridGroup",
			"labelGroup",
			"cross",
			"scrollbar"
		].forEach(function(e) {
			t[e] && (t[e] = t[e].destroy());
		});
		for (let e in t.plotLinesAndBandsGroups) t.plotLinesAndBandsGroups[e] = t.plotLinesAndBandsGroups[e].destroy();
		s(t, function(e, n) {
			t.getKeepProps().indexOf(n) === -1 && delete t[n];
		}), this.eventOptions = r;
	}
	drawCrosshair(e, t) {
		let n = this.crosshair, r = n?.snap ?? !0, i = this.chart, o = this.cross, s, c, l, u;
		if (z(this, "drawCrosshair", {
			e,
			point: t
		}), e ||= this.cross?.e, !n || (G(t) || !r) === !1) this.hideCrosshair();
		else {
			if (clearTimeout(this.crossShowTimer), r ? G(t) && (c = T(this.coll === "colorAxis" ? null : t.crosshairPos, this.isXAxis ? t.plotX : this.len - t.plotY)) : c = e && (this.horiz ? e.chartX - this.pos : this.len - e.chartY + this.pos), G(c) && (u = {
				value: t && (this.isXAxis ? t.x : T(t.stackY, t.y)),
				translatedValue: c
			}, i.polar && a(u, {
				isCrosshair: !0,
				chartX: e?.chartX,
				chartY: e?.chartY,
				point: t
			}), s = this.getPlotLinePath(u) || null), !G(s)) {
				this.hideCrosshair();
				return;
			}
			l = this.categories && !this.isRadial, this.crossShowTimer = V(() => {
				let t = this.cross;
				t || (this.cross = t = i.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (l ? "category " : "thin ") + (n.className || "")).attr({ zIndex: T(n.zIndex, 2) }).clip(n.clip === !1 ? void 0 : i.plotClipInner).add(), i.styledMode || (t.attr({
					stroke: n.color || (l ? ht("var(--highcharts-highlight-color-20)").setOpacity(.25).get() : "var(--highcharts-neutral-color-20)"),
					"stroke-width": T(n.width, 1)
				}).css({ "pointer-events": "none" }), n.dashStyle && t.attr({ dashstyle: n.dashStyle }))), t.show().animate({ d: s }, ft(n?.animation)), l && !n.width && t.attr({ "stroke-width": this.transA }), this.cross && (this.cross.e = e);
			}, (!o || o.attr("visibility") === "hidden") && n.showDelay || 0);
		}
		z(this, "afterDrawCrosshair", {
			e,
			point: t
		});
	}
	hideCrosshair() {
		clearTimeout(this.crossShowTimer), this.cross && this.cross.hide(), z(this, "afterHideCrosshair");
	}
	update(e, t) {
		let n = this.chart;
		e = x(this.userOptions, e), this.destroy(!0), this.init(n, e), n.isDirtyBox = !0, T(t, !0) && n.redraw();
	}
	remove(e) {
		let t = this.chart, n = this.coll, r = this.series, i = r.length;
		for (; i--;) r[i] && r[i].remove(!1);
		b(t.axes, this), b(t[n] || [], this), t.orderItems(n), this.destroy(), t.isDirtyBox = !0, T(e, !0) && t.redraw();
	}
	setTitle(e, t) {
		this.update({ title: e }, t);
	}
	setCategories(e, t) {
		this.update({ categories: e }, t);
	}
};
bt.keepProps = [
	"coll",
	"extKey",
	"hcEvents",
	"len",
	"names",
	"series",
	"userMax",
	"userMin"
];
//#endregion
//#region node_modules/highcharts/es-modules/Core/Axis/DateTimeAxis.js
var xt;
(function(e) {
	function t(e) {
		if (!e.keepProps.includes("dateTime")) {
			e.keepProps.push("dateTime");
			let t = e.prototype;
			t.getTimeTicks = n, P(e, "afterSetType", r);
		}
		return e;
	}
	e.compose = t;
	function n() {
		return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
	}
	function r() {
		if (this.type !== "datetime") {
			this.dateTime = void 0;
			return;
		}
		this.dateTime ||= new i(this);
	}
	class i {
		constructor(e) {
			this.axis = e;
		}
		normalizeTimeTickInterval(e, t) {
			let n = t || [
				["millisecond", [
					1,
					2,
					5,
					10,
					20,
					25,
					50,
					100,
					200,
					500
				]],
				["second", [
					1,
					2,
					5,
					10,
					15,
					30
				]],
				["minute", [
					1,
					2,
					5,
					10,
					15,
					30
				]],
				["hour", [
					1,
					2,
					3,
					4,
					6,
					8,
					12
				]],
				["day", [1, 2]],
				["week", [1, 2]],
				["month", [
					1,
					2,
					3,
					4,
					6
				]],
				["year", null]
			], r = n[n.length - 1], i = te[r[0]], a = r[1], o, s;
			for (o = 0; o < n.length; o++) if (r = n[o], i = te[r[0]], a = r[1], n[o + 1]) {
				let t = (i * a[a.length - 1] + te[n[o + 1][0]]) / 2;
				if (e <= t) {
					s = t / e;
					break;
				}
			}
			i === te.year && e < 5 * i && (a = [
				1,
				2,
				5
			]);
			let c = C(e / i, a, r[0] === "year" ? Math.max(p(e / i), 1) : 1);
			return {
				unitRange: i,
				count: c,
				unitName: r[0],
				match: s
			};
		}
		getXDateFormat(e, t) {
			let { axis: n } = this, r = n.chart.time;
			return n.closestPointRange ? r.getDateFormat(n.closestPointRange, e, n.options.startOfWeek, t) || r.resolveDTLFormat(t.year).main : r.resolveDTLFormat(t.day).main;
		}
	}
	e.Additions = i;
})(xt ||= {});
var St = xt, Ct;
(function(e) {
	function t(e) {
		return e.keepProps.includes("logarithmic") || (e.keepProps.push("logarithmic"), P(e, "afterSetType", n), P(e, "afterInit", r)), e;
	}
	e.compose = t;
	function n() {
		this.type === "logarithmic" ? this.logarithmic ??= new i(this) : this.logarithmic = void 0;
	}
	function r() {
		let e = this, t = e.logarithmic;
		t && (e.lin2val = function(e) {
			return t.lin2log(e);
		}, e.val2lin = function(e) {
			return t.log2lin(e);
		});
	}
	class i {
		constructor(e) {
			this.axis = e;
		}
		getLogTickPositions(e, t, n, r) {
			let i = this, a = i.axis, o = a.len, s = a.options, c = [];
			if (r || (i.minorAutoInterval = void 0), e >= .5) e = Math.round(e), c = a.getLinearTickPositions(e, t, n);
			else if (e >= .08) {
				let a = Math.floor(t), o, s, l, u, d, f, p;
				for (o = e > .3 ? [
					1,
					2,
					4
				] : e > .15 ? [
					1,
					2,
					4,
					6,
					8
				] : [
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9
				], s = a; s < n + 1 && !p; s++) for (u = o.length, l = 0; l < u && !p; l++) d = i.log2lin(i.lin2log(s) * o[l]), d > t && (!r || f <= n) && f !== void 0 && c.push(f), f > n && (p = !0), f = d;
			} else {
				let l = i.lin2log(t), u = i.lin2log(n), d = r ? a.getMinorTickInterval() : s.tickInterval, f = d === "auto" ? null : d, p = s.tickPixelInterval / (r ? 5 : 1), m = r ? o / a.tickPositions.length : o;
				e = T(f, i.minorAutoInterval, (u - l) * p / (m || 1)), e = C(e), c = a.getLinearTickPositions(e, l, u).map(i.log2lin), r || (i.minorAutoInterval = e / 5);
			}
			return r || (a.tickInterval = e), c;
		}
		lin2log(e) {
			return 10 ** e;
		}
		log2lin(e) {
			return Math.log(e) / Math.LN10;
		}
	}
	e.Additions = i;
})(Ct ||= {});
var wt = Ct, Tt;
(function(e) {
	let t;
	function r(e) {
		return this.addPlotBandOrLine(e, "plotBands");
	}
	function i(e, n) {
		let r = this.userOptions, i = new t(this, e);
		if (this.visible && (i = i.render()), i) {
			if (this._addedPlotLB || (this._addedPlotLB = !0, (r.plotLines || []).concat(r.plotBands || []).forEach((e) => {
				this.addPlotBandOrLine(e);
			})), n) {
				let t = r[n] || [];
				t.push(e), r[n] = t;
			}
			this.plotLinesAndBands.push(i);
		}
		return i;
	}
	function o(e) {
		return this.addPlotBandOrLine(e, "plotLines");
	}
	function s(e, n) {
		let s = n.prototype;
		return s.addPlotBand || (t = e, a(s, {
			addPlotBand: r,
			addPlotLine: o,
			addPlotBandOrLine: i,
			getPlotBandPath: c,
			removePlotBand: l,
			removePlotLine: d,
			removePlotBandOrLine: u
		})), n;
	}
	e.compose = s;
	function c(e, t, r) {
		r ||= this.options;
		let i = this.getPlotLinePath({
			value: t,
			force: !0,
			acrossPanes: r.acrossPanes
		}), a = [], o = this.horiz, s = !n(this.min) || !n(this.max) || e < this.min && t < this.min || e > this.max && t > this.max, c = this.getPlotLinePath({
			value: e,
			force: !0,
			acrossPanes: r.acrossPanes
		}), l, u = 1, d;
		if (c && i) for (s && (d = c.toString() === i.toString(), u = 0), l = 0; l < c.length; l += 2) {
			let e = c[l], t = c[l + 1], n = i[l], r = i[l + 1];
			(e[0] === "M" || e[0] === "L") && (t[0] === "M" || t[0] === "L") && (n[0] === "M" || n[0] === "L") && (r[0] === "M" || r[0] === "L") && (o && n[1] === e[1] ? (n[1] += u, r[1] += u) : !o && n[2] === e[2] && (n[2] += u, r[2] += u), a.push([
				"M",
				e[1],
				e[2]
			], [
				"L",
				t[1],
				t[2]
			], [
				"L",
				r[1],
				r[2]
			], [
				"L",
				n[1],
				n[2]
			], ["Z"])), a.isFlat = d;
		}
		return a;
	}
	function l(e) {
		this.removePlotBandOrLine(e);
	}
	function u(e) {
		let t = this.plotLinesAndBands, n = this.options, r = this.userOptions;
		if (t) {
			let i = t.length;
			for (; i--;) t[i].id === e && t[i].destroy();
			[
				n.plotLines || [],
				r.plotLines || [],
				n.plotBands || [],
				r.plotBands || []
			].forEach(function(t) {
				for (i = t.length; i--;) t[i]?.id === e && b(t, t[i]);
			});
		}
	}
	function d(e) {
		this.removePlotBandOrLine(e);
	}
})(Tt ||= {});
var Et = Tt, Dt = class e {
	static compose(t, n) {
		return P(t, "afterInit", function() {
			this.labelCollectors.push(() => {
				let e = [];
				for (let t of this.axes) for (let { label: n, options: r } of t.plotLinesAndBands) n && !r?.label?.allowOverlap && e.push(n);
				return e;
			});
		}), Et.compose(e, n);
	}
	constructor(e, t) {
		this.axis = e, this.options = t, this.id = t.id;
	}
	render() {
		z(this, "render");
		let { axis: e, options: t } = this, { chart: n, horiz: r, logarithmic: i } = e, { color: a, events: o, zIndex: c = 0 } = t, { renderer: l, time: u } = e.chart, d = {}, f = u.parse(t.to), p = u.parse(t.from), m = u.parse(t.value), h = t.borderWidth, g = t.label, { label: _, svgElem: v } = this, y = [], b, S = G(p) && G(f), C = G(m), w = !v, E = { class: "highcharts-plot-" + (S ? "band " : "line ") + (t.className || "") }, D = S ? "bands" : "lines";
		if (n.styledMode || (C ? (E.stroke = a || "var(--highcharts-neutral-color-40)", E["stroke-width"] = T(t.width, 1), t.dashStyle && (E.dashstyle = t.dashStyle)) : S && (E.fill = a || "var(--highcharts-highlight-color-10)", h && (E.stroke = t.borderColor, E["stroke-width"] = h))), d.zIndex = c, D += "-" + c, b = e.plotLinesAndBandsGroups[D], b || (e.plotLinesAndBandsGroups[D] = b = l.g("plot-" + D).clip(n.plotClipOuter).attr(d).add()), v || (this.svgElem = v = l.path().attr(E).add(b)), G(m)) y = e.getPlotLinePath({
			value: i?.log2lin(m) ?? m,
			lineWidth: v.strokeWidth(),
			acrossPanes: t.acrossPanes
		});
		else if (G(p) && G(f)) y = e.getPlotBandPath(i?.log2lin(p) ?? p, i?.log2lin(f) ?? f, t);
		else return;
		return !this.eventsAdded && o && (s(o, (e, t) => {
			v?.on(t, (e) => {
				o[t].apply(this, [e, this]);
			});
		}), this.eventsAdded = !0), (w || !v.d) && y?.length ? v.attr({ d: y }) : v && (y ? (v.show(), v.animate({ d: y })) : v.d && (v.hide(), _ && (this.label = _ = _.destroy()))), g && (G(g.text) || G(g.formatter)) && y?.length && e.width > 0 && e.height > 0 && !y.isFlat ? (g = x({
			align: r && S ? "center" : void 0,
			x: r ? !S && 4 : 10,
			verticalAlign: !r && S ? "middle" : void 0,
			y: r ? S ? 16 : 10 : S ? 6 : -4,
			rotation: r && !S ? 90 : 0,
			...S ? { inside: !0 } : {}
		}, g), this.renderLabel(g, y, S, c)) : _ && _.hide(), this;
	}
	renderLabel(e, t, n, r) {
		let i = this, a = i.axis, o = a.chart.renderer, s = e.inside, c = i.label;
		c || (i.label = c = o.text(this.getLabelText(e), 0, 0, e.useHTML).attr({
			align: e.textAlign || e.align,
			rotation: e.rotation,
			class: "highcharts-plot-" + (n ? "band" : "line") + "-label " + (e.className || ""),
			zIndex: r
		}), a.chart.styledMode || c.css(x({
			color: a.chart.options.title?.style?.color,
			fontSize: "0.8em",
			textOverflow: n && !s ? "" : "ellipsis"
		}, e.style)), c.add());
		let l = t.xBounds || [
			t[0][1],
			t[1][1],
			n ? t[2][1] : t[0][1]
		], u = t.yBounds || [
			t[0][2],
			t[1][2],
			n ? t[2][2] : t[0][2]
		], d = ne(l), f = ne(u), p = ie(l) - d;
		c.align(e, !1, {
			x: d,
			y: f,
			width: p,
			height: ie(u) - f
		}), c.alignAttr.y -= o.fontMetrics(c).b, (!c.alignValue || c.alignValue === "left" || G(s)) && c.css({ width: (e.style?.width || (!n || !s ? c.rotation === 90 ? a.height - (c.alignAttr.y - a.top) : (e.clip ? a.width + a.left : a.chart.chartWidth) - c.alignAttr.x : p)) + "px" }), c.show(!0);
	}
	getLabelText(e) {
		return G(e.formatter) ? e.formatter.call(this, this) : e.text;
	}
	destroy() {
		b(this.axis.plotLinesAndBands, this), delete this.axis, y(this);
	}
}, { animObject: Ot } = B, { format: kt } = q, { composed: At, dateFormats: jt, doc: Mt, isSafari: Nt } = H, { distribute: Pt } = we, Ft = (e) => {
	clearTimeout(e.hideTimer), clearTimeout(e.showTimer);
}, It = class {
	constructor(e, t, n) {
		this.allowShared = !0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !1, this.options = {}, this.outside = !1, this.chart = e, this.init(e, t), this.pointer = n;
	}
	bodyFormatter(e) {
		return e.map((e) => {
			let t = e.series.tooltipOptions, n = e.formatPrefix || "point";
			return (t[n + "Formatter"] || e.tooltipFormatter).call(e, t[n + "Format"] || "", e);
		});
	}
	cleanSplit(e) {
		this.chart.series.forEach(function(t) {
			let n = t?.tt;
			n && (!n.isActive || e ? t.tt = n.destroy() : n.isActive = !1);
		});
	}
	defaultFormatter(e) {
		let t = this.points || N(this), n;
		return n = [e.headerFooterFormatter(t[0])], n = n.concat(e.bodyFormatter(t)), n.push(e.headerFooterFormatter(t[0], !0)), n;
	}
	destroy() {
		this.label &&= this.label.destroy(), this.split && (this.cleanSplit(!0), this.tt &&= this.tt.destroy()), this.renderer && (this.renderer = this.renderer.destroy(), ue(this.container)), o(this.hideTimer), Ft(this);
	}
	getAnchor(e, t) {
		let { chart: n, pointer: r } = this, i = n.inverted, a = n.plotTop, o = n.plotLeft, s;
		if (e = N(e), e[0].series?.yAxis && !e[0].series.yAxis.options.reversedStacks && (e = e.slice().reverse()), this.followPointer && t) t.chartX === void 0 && (t = r.normalize(t)), s = [t.chartX - o, t.chartY - a];
		else if (e[0].tooltipPos) s = e[0].tooltipPos;
		else {
			let n = 0, r = 0;
			e.forEach(function(e) {
				let t = e.pos(!0);
				t && (n += t[0], r += t[1]);
			}), n /= e.length, r /= e.length, this.shared && e.length > 1 && t && (i ? n = t.chartX : r = t.chartY), s = [n - o, r - a];
		}
		let c = {
			point: e[0],
			ret: s
		};
		return z(this, "getAnchor", c), c.ret.map(Math.round);
	}
	getClassName(e, t, n) {
		let r = this.options, i = e.series, a = i.options;
		return [
			r.className,
			"highcharts-label",
			n && "highcharts-tooltip-header",
			t ? "highcharts-tooltip-box" : "highcharts-tooltip",
			!n && "highcharts-color-" + T(e.colorIndex, i.colorIndex),
			a?.className
		].filter(c).join(" ");
	}
	getLabel({ anchorX: e, anchorY: t } = {
		anchorX: 0,
		anchorY: 0
	}) {
		let n = this, r = this.chart.styledMode, i = this.options, a = this.split && this.allowShared, o = this.container, s = this.chart.renderer;
		if (this.label) {
			let e = !this.label.hasClass("highcharts-label");
			(!a && e || a && !e) && this.destroy();
		}
		if (!this.label) {
			if (this.outside) {
				let e = this.chart, t = e.options.chart.style;
				this.container = o = H.doc.createElement("div"), o.className = "highcharts-container highcharts-tooltip-container " + (e.renderTo.className.match(/(highcharts[a-zA-Z0-9-]+)\s?/gm) || [].join(" ")), o.dataset.highchartsChart = e.index.toString(), A(o, {
					position: "absolute",
					top: "1px",
					pointerEvents: "none",
					zIndex: Math.max(i.style.zIndex || 0, (t?.zIndex || 0) + 3)
				}), this.renderer = s = new rt(o, 0, 0, t, void 0, void 0, s.styledMode);
			}
			if (a ? this.label = s.g("tooltip") : (this.label = s.label("", e, t, i.shape || "callout", void 0, void 0, i.useHTML, void 0, "tooltip").attr({
				padding: i.padding,
				r: i.borderRadius
			}), r || this.label.attr({
				fill: i.backgroundColor,
				"stroke-width": i.borderWidth ?? +!i.fixed
			}).css(i.style).css({ pointerEvents: i.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none") })), n.outside) {
				let e = this.label;
				[e.xSetter, e.ySetter].forEach((t, r) => {
					e[r ? "ySetter" : "xSetter"] = (i) => {
						t.call(e, n.distance), e[r ? "y" : "x"] = i, o && (o.style[r ? "top" : "left"] = `${i}px`);
					};
				});
			}
			this.label.attr({ zIndex: 8 }).shadow(i.shadow ?? !i.fixed).add();
		}
		return o && !o.parentElement && H.doc.body.appendChild(o), this.label;
	}
	getPlayingField() {
		let { body: e, documentElement: t } = Mt, { chart: n, distance: r, outside: i } = this;
		return {
			width: i ? Math.max(e.scrollWidth, t.scrollWidth, e.offsetWidth, t.offsetWidth, t.clientWidth) - 2 * r - 2 : n.chartWidth,
			height: i ? Math.max(e.scrollHeight, t.scrollHeight, e.offsetHeight, t.offsetHeight, t.clientHeight) : n.chartHeight
		};
	}
	getPosition(e, t, n) {
		let { distance: r, chart: i, outside: a, pointer: o } = this, { inverted: s, plotLeft: c, plotTop: l, polar: u } = i, { plotX: d = 0, plotY: f = 0 } = n, p = {}, m = s && n.h || 0, { height: h, width: g } = this.getPlayingField(), _ = o.getChartPosition(), v = (e) => e * _.scaleX, y = (e) => e * _.scaleY, b = (n) => {
			let o = n === "x";
			return [
				n,
				o ? g : h,
				o ? e : t
			].concat(a ? [
				o ? v(e) : y(t),
				o ? _.left - r + v(d + c) : _.top - r + y(f + l),
				0,
				o ? g : h
			] : [
				o ? e : t,
				o ? d + c : f + l,
				o ? c : l,
				o ? c + i.plotWidth : l + i.plotHeight
			]);
		}, x = b("y"), S = b("x"), C, w = !!n.negative;
		!u && i.hoverSeries?.yAxis?.reversed && (w = !w);
		let E = !this.followPointer && T(n.ttBelow, !u && !s === w), D = function(e, t, n, i, o, s, c) {
			let l = a ? e === "y" ? y(r) : v(r) : r, u = (n - i) / 2, d = i < o - r, f = o + r + i < t, h = o - l - n + u, g = o + l - u;
			if (E && f) p[e] = g;
			else if (!E && d) p[e] = h;
			else if (d) p[e] = Math.min(c - i, h - m < 0 ? h : h - m);
			else if (f) p[e] = Math.max(s, g + m + n > t ? g : g + m);
			else return p[e] = 0, !1;
		}, O = function(e, t, n, i, a) {
			if (a < r || a > t - r) return !1;
			a < n / 2 ? p[e] = 1 : a > t - i / 2 ? p[e] = t - i - 2 : p[e] = a - n / 2;
		}, k = function(e) {
			[x, S] = [S, x], C = e;
		}, A = () => {
			D.apply(0, x) === !1 ? C ? p.x = p.y = 0 : (k(!0), A()) : O.apply(0, S) === !1 && !C && (k(!0), A());
		};
		return (s && !u || this.len > 1) && k(), A(), a && (p.x -= _.left, p.y -= _.top), p;
	}
	getFixedPosition(e, n, r) {
		let i = r.series, { chart: a, options: o, split: s } = this, c = o.position, l = c.relativeTo, u = o.shared || i?.yAxis?.isRadial && (l === "pane" || !l) ? "plotBox" : l, d = u === "chart" ? a.renderer : a[u] || a.getClipBox(i, !0);
		return {
			x: d.x + (d.width - e) * t(c.align) + c.x,
			y: d.y + (d.height - n) * t(c.verticalAlign) + (!s && c.y || 0)
		};
	}
	hide(e) {
		let t = this;
		Ft(this), e = T(e, this.options.hideDelay), this.isHidden || (this.hideTimer = V(function() {
			let n = t.getLabel();
			t.getLabel().animate({ opacity: 0 }, {
				duration: e && 150,
				complete: () => {
					n.hide(), t.container && t.container.remove();
				}
			}), t.isHidden = !0;
		}, e));
	}
	init(e, t) {
		this.chart = e, this.options = t, this.crosshairs = [], this.isHidden = !0, this.split = t.split && !e.inverted && !e.polar, this.shared = t.shared || this.split, this.outside = T(t.outside, !!(e.scrollablePixelsX || e.scrollablePixelsY));
	}
	shouldStickOnContact(e) {
		return !!(!this.followPointer && this.options.stickOnContact && (!e || this.pointer.inClass(e.target, "highcharts-tooltip")));
	}
	move(e, t, n, r) {
		let { followPointer: i, options: a } = this, o = Ot(!i && !this.isHidden && !a.fixed && a.animation), s = i || (this.len || 0) > 1, c = {
			x: e,
			y: t
		};
		s ? c.anchorX = c.anchorY = NaN : (c.anchorX = n, c.anchorY = r), o.step = () => this.drawTracker(), this.getLabel().animate(c, o);
	}
	refresh(e, t) {
		let n = this, { chart: r, options: i, pointer: a, shared: o } = this, s = N(e), u = s[0], d = i.format, f = i.formatter || n.defaultFormatter, p = r.styledMode, m = n.allowShared;
		if (!i.enabled || !u.series) return;
		Ft(this), n.allowShared = !(!l(e) && e.series && e.series.noSharedTooltip), m &&= !n.allowShared, n.followPointer = !n.split && u.series.tooltipOptions.followPointer;
		let h = n.getAnchor(e, t), g = h[0], _ = h[1];
		o && n.allowShared && (a.applyInactiveState(s), s.forEach((e) => e.setState("hover")), u.points = s), this.len = s.length;
		let v = c(d) ? kt(d, u, r) : f.call(u, n, u);
		u.points = void 0;
		let y = u.series;
		this.distance = T(y.tooltipOptions.distance, 16), v === !1 ? this.hide() : this.showTimer = V(() => {
			if (n.split && n.allowShared) n.renderSplit(v, s);
			else {
				let e = g, o = _;
				if (t && a.isDirectTouch && (e = t.chartX - r.plotLeft, o = t.chartY - r.plotTop), r.polar || y.options.clip === !1 || s.some((t) => a.isDirectTouch || t.series.shouldShowTooltip(e, o))) {
					let e = n.getLabel(m && n.tt || {});
					(!i.style.width || p) && e.css({ width: (this.outside ? this.getPlayingField() : r.spacingBox).width - 2 * i.padding + "px" }), e.attr({
						class: n.getClassName(u),
						text: l(v) ? v.join("") : v
					}), this.outside && e.attr({ x: F(e.x || 0, 0, this.getPlayingField().width - (e.width || 0) - 1) }), p || e.attr({ stroke: i.borderColor || u.color || y.color || "var(--highcharts-neutral-color-60)" }), n.updatePosition({
						plotX: g,
						plotY: _,
						negative: u.negative,
						ttBelow: u.ttBelow,
						series: y,
						h: h[2] || 0
					});
				} else {
					n.hide();
					return;
				}
			}
			n.isHidden && n.label && n.label.attr({ opacity: 1 }).show(), n.isHidden = !1;
		}, n.isHidden && i.showDelay || 0), z(this, "refresh");
	}
	renderSplit(e, t) {
		let n = this, { chart: r, chart: { chartWidth: i, chartHeight: o, plotHeight: s, plotLeft: l, plotTop: u, scrollablePixelsY: d = 0, scrollablePixelsX: f, styledMode: p }, distance: m, options: h, options: { fixed: g, position: _, positioner: v }, pointer: y } = n, { scrollLeft: b = 0, scrollTop: S = 0 } = r.scrollablePlotArea?.scrollingContainer || {}, C = n.outside && typeof f != "number" ? Mt.documentElement.getBoundingClientRect() : {
			left: b,
			right: b + i,
			top: S,
			bottom: S + o
		}, w = n.getLabel(), E = this.renderer || r.renderer, D = !!r.xAxis[0]?.opposite, { left: O, top: k } = y.getChartPosition(), A = v || g, j = u + S, M = 0, N = s - d;
		function P(e) {
			let { isHeader: t, plotX: n = 0, plotY: r = 0, series: i } = e, a, o;
			if (t) a = Math.max(l + n, l), o = u + s / 2;
			else {
				let { xAxis: e, yAxis: t } = i;
				a = e.pos + F(n, -m, e.len + m), i.shouldShowTooltip(0, t.pos - u + r, { ignoreX: !0 }) && (o = t.pos + r);
			}
			return a = F(a, C.left - m, C.right + m), {
				anchorX: a,
				anchorY: o
			};
		}
		let I = function(e, t, r, i, a = [0, 0], o = !0) {
			let s, c;
			if (r.isHeader) c = D ? 0 : N, s = F(a[0] - e / 2, C.left, C.right - e - (n.outside ? O : 0));
			else if (g && r) {
				let i = n.getFixedPosition(e, t, r);
				s = i.x, c = i.y - j;
			} else c = a[1] - j, s = o ? a[0] - e - m : a[0] + m, s = F(s, o ? s : C.left, C.right);
			return {
				x: s,
				y: c
			};
		};
		function L(e, t, r) {
			let i = e, { isHeader: a, series: o } = t, s = o.tooltipOptions || h, c = a ? x(s, s.header) : s;
			if (!i) {
				let e = {
					padding: s.padding,
					r: s.borderRadius
				};
				p || (e.fill = c.backgroundColor, e["stroke-width"] = c.borderWidth ?? +!s.fixed), i = E.label("", 0, 0, c.shape || (g && !a ? "rect" : "callout"), void 0, void 0, s.useHTML).addClass(n.getClassName(t, !0, a)).attr(e).add(w);
			}
			return i.isActive = !0, p || i.css(c.style), i.attr({ text: r }), p || i.attr({ stroke: c.borderColor || t.color || o.color || "var(--highcharts-neutral-color-80)" }), i;
		}
		c(e) && (e = [!1, e]);
		let ee = e.slice(0, t.length + 1).reduce(function(e, r, i) {
			if (r !== !1 && r !== "") {
				let a = t[i - 1] || {
					isHeader: !0,
					plotX: t[0].plotX,
					plotY: s,
					series: {}
				}, o = a.isHeader, c = o ? n : a.series, l = c.tt = L(c.tt, a, r.toString()), u = l.getBBox(), d = u.width + l.strokeWidth();
				o && (M = u.height + h.header.distance, N += M, D && (j -= M));
				let { anchorX: f, anchorY: p } = P(a);
				if (typeof p == "number") {
					let t = u.height + 1, r = (v || I).call(n, d, t, a, n, [f, p]);
					e.push({
						align: A ? 0 : void 0,
						anchorX: f,
						anchorY: p,
						boxWidth: d,
						point: a,
						rank: T(r.rank, +!!o),
						size: t,
						target: r.y,
						tt: l,
						x: r.x
					});
				} else l.isActive = !1;
			}
			return e;
		}, []);
		!A && ee.some((e) => {
			let { outside: t } = n, r = (t ? O : 0) + e.anchorX;
			return r < C.left && r + e.boxWidth < C.right || r < O - C.left + e.boxWidth && C.right - r > r;
		}) && (ee = ee.map((e) => {
			let { x: t, y: n } = I.call(this, e.boxWidth, e.size, e.point, void 0, [e.anchorX, e.anchorY], !1);
			return a(e, {
				target: n,
				x: t
			});
		})), n.cleanSplit(), Pt(ee, N);
		let R = {
			left: O,
			right: O
		};
		ee.forEach(function(e) {
			let { x: t, boxWidth: r, isHeader: i } = e;
			i || (n.outside && O + t < R.left && (R.left = O + t), n.outside && R.left + r > R.right && (R.right = O + t));
		}), ee.forEach(function(e) {
			let { x: t, anchorX: r, anchorY: i, pos: a, point: { isHeader: o } } = e, s = {
				visibility: a === void 0 ? "hidden" : "inherit",
				x: t,
				y: (a || 0) + j + (g && _.y || 0),
				anchorX: r,
				anchorY: i
			};
			if (n.outside && t < r) {
				let e = O - R.left;
				e > 0 && (s.x = o ? (R.right - R.left) / 2 : t + e, s.anchorX = r + e);
			}
			e.tt.attr(s);
		});
		let { container: z, outside: te, renderer: ne } = n;
		if (te && z && ne) {
			let { width: e, height: t, x: n, y: r } = w.getBBox();
			ne.setSize(e + n, t + r, !1), z.style.left = R.left + "px", z.style.top = k + "px";
		}
		Nt && w.attr({ opacity: w.opacity === 1 ? .999 : 1 });
	}
	drawTracker() {
		let e = this;
		if (!this.shouldStickOnContact()) {
			e.tracker &&= e.tracker.destroy();
			return;
		}
		let t = e.chart, n = e.label, r = e.shared ? t.hoverPoints : t.hoverPoint;
		if (!n || !r) return;
		let i = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		}, a = this.getAnchor(r), o = n.getBBox();
		a[0] += t.plotLeft - (n.translateX || 0), a[1] += t.plotTop - (n.translateY || 0), i.x = Math.min(0, a[0]), i.y = Math.min(0, a[1]), i.width = a[0] < 0 ? Math.max(Math.abs(a[0]), o.width - a[0]) : Math.max(Math.abs(a[0]), o.width), i.height = a[1] < 0 ? Math.max(Math.abs(a[1]), o.height - Math.abs(a[1])) : Math.max(Math.abs(a[1]), o.height), e.tracker ? e.tracker.attr(i) : (e.tracker = n.renderer.rect(i).addClass("highcharts-tracker").add(n), P(e.tracker.element, "mouseenter", () => Ft(e)), t.styledMode || e.tracker.attr({ fill: "rgba(0,0,0,0)" }));
	}
	styledModeFormat(e) {
		return e.replace("style=\"font-size: 0.8em\"", "class=\"highcharts-header\"").replace(/style="color:{(point|series)\.color}"/g, "class=\"highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}\"");
	}
	headerFooterFormatter(e, t) {
		let r = e.series, i = r.tooltipOptions, a = r.xAxis?.dateTime, o = {
			isFooter: t,
			point: e
		}, s = i.xDateFormat || "", c = i[t ? "footerFormat" : "headerFormat"];
		return z(this, "headerFormatter", o, function(t) {
			if (a && !s && n(e.key) && (s = a.getXDateFormat(e.key, i.dateTimeLabelFormats)), a && s) {
				if (S(s)) {
					let e = s;
					jt[0] = (t) => r.chart.time.dateFormat(e, t), s = "%0";
				}
				(e.tooltipDateKeys || ["key"]).forEach((e) => {
					c = c.replace(RegExp("point\\." + e + "([ \\)}])"), `(point.${e}:${s})$1`);
				});
			}
			r.chart.styledMode && (c = this.styledModeFormat(c)), t.text = kt(c, e, this.chart);
		}), o.text || "";
	}
	update(e) {
		this.destroy(), this.init(this.chart, x(!0, this.options, e));
	}
	updatePosition(e) {
		let { chart: t, container: n, distance: r, options: i, pointer: a, renderer: o } = this, { height: s = 0, width: c = 0 } = this.getLabel(), { fixed: l, positioner: u } = i, { left: d, top: f, scaleX: p, scaleY: m } = a.getChartPosition(), h = (u || l && this.getFixedPosition || this.getPosition).call(this, c, s, e, this), g = H.doc, _ = (e.plotX || 0) + t.plotLeft, v = (e.plotY || 0) + t.plotTop, y;
		if (o && n) {
			if (h.x += d, h.y += f, u || l) {
				let { scrollLeft: e = 0, scrollTop: n = 0 } = t.scrollablePlotArea?.scrollingContainer || {};
				h.x += e, h.y += n;
			}
			y = (i.borderWidth ?? +!l) + 2 * r + 2, o.setSize(F(c + y, 0, g.documentElement.clientWidth) - 1, s + y, !1), (p !== 1 || m !== 1) && (A(n, { transform: `scale(${p}, ${m})` }), _ *= p, v *= m), _ += d - h.x, v += f - h.y;
		}
		this.move(Math.round(h.x), Math.round(h.y || 0), _, v);
	}
};
(function(e) {
	function t(t) {
		w(At, "Core.Tooltip") && P(t, "afterInit", function() {
			let t = this.chart;
			t.options.tooltip && (t.tooltip = new e(t, t.options.tooltip, this));
		});
	}
	e.compose = t;
})(It ||= {});
var Lt = It, { charts: Rt, composed: zt, isTouchDevice: Bt } = H, Vt = (e, t) => !G(t) || e[`${t}Key`], Ht = class e {
	applyInactiveState(e = []) {
		let t = [];
		e.forEach((e) => {
			let n = e.series;
			t.push(n), n.linkedParent && t.push(n.linkedParent), n.linkedSeries && t.push.apply(t, n.linkedSeries), n.navigatorSeries && t.push(n.navigatorSeries), n.boosted && n.markerGroup && t.push.apply(t, this.chart.series.filter((e) => e.markerGroup === n.markerGroup));
		});
		for (let e of this.chart.series) {
			let n = e.options;
			n.states?.inactive?.enabled !== !1 && (t.indexOf(e) === -1 ? e.setState("inactive", !0) : n.inactiveOtherPoints && e.setAllPointsToState("inactive"));
		}
	}
	destroy() {
		let t = this;
		this.eventsToUnbind.forEach((e) => e()), this.eventsToUnbind = [], H.chartCount || (e.unbindDocumentMouseUp.forEach((e) => e.unbind()), e.unbindDocumentMouseUp.length = 0, e.unbindDocumentTouchEnd &&= e.unbindDocumentTouchEnd()), s(t, function(e, n) {
			t[n] = void 0;
		});
	}
	getSelectionMarkerAttrs(e, t) {
		let n = {
			args: {
				chartX: e,
				chartY: t
			},
			attrs: {},
			shapeType: "rect"
		};
		return z(this, "getSelectionMarkerAttrs", n, (n) => {
			let { chart: r, zoomHor: i, zoomVert: a } = this, { mouseDownX: o = 0, mouseDownY: s = 0 } = r, c = n.attrs, l;
			c.x = r.plotLeft, c.y = r.plotTop, c.width = i ? 1 : r.plotWidth, c.height = a ? 1 : r.plotHeight, i && (l = e - o, c.width = Math.max(1, Math.abs(l)), c.x = (l > 0 ? 0 : l) + o), a && (l = t - s, c.height = Math.max(1, Math.abs(l)), c.y = (l > 0 ? 0 : l) + s);
		}), n;
	}
	drag(e) {
		let { chart: t } = this, { mouseDownX: n = 0, mouseDownY: r = 0 } = t, { panning: i, panKey: a, selectionMarkerFill: o } = t.options.chart, s = t.plotLeft, c = t.plotTop, l = t.plotWidth, u = t.plotHeight, d = S(i) ? i.enabled : i, f = a && e[`${a}Key`], p = e.chartX, m = e.chartY, h, g = this.selectionMarker;
		if (!(g && g.touch) && (p < s ? p = s : p > s + l && (p = s + l), m < c ? m = c : m > c + u && (m = c + u), this.hasDragged = Math.sqrt((n - p) ** 2 + (r - m) ** 2), this.hasDragged > 10)) {
			h = t.isInsidePlot(n - s, r - c, { visiblePlotOnly: !0 });
			let { shapeType: l, attrs: u } = this.getSelectionMarkerAttrs(p, m);
			this.hasZoom && h && !f && (g || (this.selectionMarker = g = t.renderer[l](), g.attr({
				class: "highcharts-selection-marker",
				zIndex: 7
			}).add(), t.styledMode || g.attr({ fill: o }))), g && g.attr(u), h && !g && d && Vt(e, a) && t.pan(e, i);
		}
	}
	dragStart(e) {
		let t = this.chart;
		t.mouseIsDown = e.type, t.cancelClick = !1, t.mouseDownX = e.chartX, t.mouseDownY = e.chartY;
	}
	getSelectionBox(e) {
		let t = {
			args: { marker: e },
			result: e.getBBox()
		};
		return z(this, "getSelectionBox", t), t.result;
	}
	drop(e) {
		let { chart: t, selectionMarker: r } = this, i;
		for (let e of t.axes) e.isPanning && (e.isPanning = !1, (e.options.startOnTick || e.options.endOnTick || e.series.some((e) => e.boosted)) && (e.forceRedraw = !0, e.setExtremes(e.userMin, e.userMax, !1), i = !0));
		if (i && t.redraw(), r && e) {
			if (this.hasDragged) {
				let n = this.getSelectionBox(r);
				t.transform({
					axes: t.axes.filter((e) => e.zoomEnabled && (e.coll === "xAxis" && this.zoomX || e.coll === "yAxis" && this.zoomY)),
					selection: {
						originalEvent: e,
						xAxis: [],
						yAxis: [],
						...n
					},
					from: n
				});
			}
			n(t.index) && (this.selectionMarker = r.destroy());
		}
		t && n(t.index) && (A(t.container, { cursor: t._cursor }), t.cancelClick = this.hasDragged > 10, t.mouseIsDown = !1, this.hasDragged = 0, this.pinchDown = [], this.hasPinchMoved = !1);
	}
	findNearestKDPoint(e, t, n) {
		let r;
		function i(e, n) {
			let r = e.distX - n.distX, i = e.dist - n.dist, a = n.series.group?.zIndex - e.series.group?.zIndex, o;
			return o = r !== 0 && t ? r : i === 0 ? a === 0 ? e.series.index > n.series.index ? -1 : 1 : a : i, o;
		}
		return e.forEach(function(e) {
			let a = !(e.noSharedTooltip && t) && e.options.findNearestPointBy.indexOf("y") < 0, o = e.searchPoint(n, a);
			S(o, !0) && o.series && (!S(r, !0) || i(r, o) > 0) && (r = o);
		}), r;
	}
	getChartCoordinatesFromPoint(e, t) {
		let { xAxis: r, yAxis: i } = e.series, a = e.shapeArgs;
		if (r && i) {
			let o = e.clientX ?? e.plotX ?? 0, s = e.plotY || 0;
			return e.isNode && a && n(a.x) && n(a.y) && (o = a.x, s = a.y), t ? {
				chartX: i.len + i.pos - s,
				chartY: r.len + r.pos - o
			} : {
				chartX: o + r.pos,
				chartY: s + i.pos
			};
		}
		if (a?.x && a.y) return {
			chartX: a.x,
			chartY: a.y
		};
	}
	getChartPosition() {
		if (this.chartPosition) return this.chartPosition;
		let { container: e } = this.chart, t = d(e);
		this.chartPosition = {
			left: t.left,
			top: t.top,
			scaleX: 1,
			scaleY: 1
		};
		let { offsetHeight: n, offsetWidth: r } = e;
		return r > 2 && n > 2 && (this.chartPosition.scaleX = t.width / r, this.chartPosition.scaleY = t.height / n), this.chartPosition;
	}
	getCoordinates(e) {
		let t = {
			xAxis: [],
			yAxis: []
		};
		for (let n of this.chart.axes) t[n.isXAxis ? "xAxis" : "yAxis"].push({
			axis: n,
			value: n.toValue(e[n.horiz ? "chartX" : "chartY"])
		});
		return t;
	}
	getHoverData(e, t, n, r, i, a) {
		let o = [], s = !!(r && e), c = function(e) {
			return e.visible && !(!i && e.directTouch) && T(e.options.enableMouseTracking, !0);
		}, l = t, u, d = {
			chartX: a ? a.chartX : void 0,
			chartY: a ? a.chartY : void 0,
			shared: i
		};
		z(this, "beforeGetHoverData", d), u = l && !l.stickyTracking ? [l] : n.filter((e) => e.stickyTracking && (d.filter || c)(e));
		let f = s || !a ? e : this.findNearestKDPoint(u, i, a);
		return l = f?.series, f && (i && !l.noSharedTooltip ? (u = n.filter(function(e) {
			return d.filter ? d.filter(e) : c(e) && !e.noSharedTooltip;
		}), u.forEach(function(e) {
			let t = e.options?.nullInteraction, n = h(e.points, function(e) {
				return e.x === f.x && (!e.isNull || !!t);
			});
			S(n) && (e.boosted && e.boost && (n = e.boost.getPoint(n)), o.push(n));
		})) : o.push(f)), d = { hoverPoint: f }, z(this, "afterGetHoverData", d), {
			hoverPoint: d.hoverPoint,
			hoverSeries: l,
			hoverPoints: o
		};
	}
	getPointFromEvent(e) {
		let t = e.target, n;
		for (; t && !n;) n = t.point, t = t.parentNode;
		return n;
	}
	onTrackerMouseOut(e) {
		let t = this.chart, n = e.relatedTarget, r = t.hoverSeries;
		this.isDirectTouch = !1, r && n && !r.stickyTracking && !this.inClass(n, "highcharts-tooltip") && (!this.inClass(n, "highcharts-series-" + r.index) || !this.inClass(n, "highcharts-tracker")) && r.onMouseOut();
	}
	inClass(e, t) {
		let n = e, r;
		for (; n;) {
			if (r = I(n, "class"), r) {
				if (r.indexOf(t) !== -1) return !0;
				if (r.indexOf("highcharts-container") !== -1) return !1;
			}
			n = n.parentElement;
		}
	}
	constructor(e, t) {
		this.hasDragged = 0, this.pointerCaptureEventsToUnbind = [], this.eventsToUnbind = [], this.options = t, this.chart = e, this.runChartClick = !!t.chart.events?.click, this.pinchDown = [], this.setDOMEvents(), z(this, "afterInit");
	}
	normalize(e, t) {
		let n = e.touches, r = n ? n.length ? n.item(0) : T(n.changedTouches, e.changedTouches)[0] : e;
		t ||= this.getChartPosition();
		let i = r.pageX - t.left, o = r.pageY - t.top;
		return i /= t.scaleX, o /= t.scaleY, a(e, {
			chartX: Math.round(i),
			chartY: Math.round(o)
		});
	}
	onContainerClick(e) {
		let t = this.chart, n = t.hoverPoint, r = this.normalize(e), i = t.plotLeft, o = t.plotTop;
		t.cancelClick || (n && this.inClass(r.target, "highcharts-tracker") ? (z(n.series, "click", a(r, { point: n })), t.hoverPoint && n.firePointEvent("click", r)) : (a(r, this.getCoordinates(r)), t.isInsidePlot(r.chartX - i, r.chartY - o, { visiblePlotOnly: !0 }) && z(t, "click", r)));
	}
	onContainerMouseDown(e) {
		let t = ((e.buttons || e.button) & 1) == 1;
		e = this.normalize(e), H.isFirefox && e.button !== 0 && this.onContainerMouseMove(e), (e.button === void 0 || t) && (this.zoomOption(e), t && e.preventDefault?.(), this.dragStart(e));
	}
	onContainerMouseLeave(t) {
		let { pointer: n } = Rt[T(e.hoverChartIndex, -1)] || {};
		t = this.normalize(t), this.onContainerMouseMove(t), n && !this.inClass(t.relatedTarget, "highcharts-tooltip") && (n.reset(), n.chartPosition = void 0);
	}
	onContainerMouseEnter() {
		delete this.chartPosition;
	}
	onContainerMouseMove(e) {
		let t = this.chart, n = t.tooltip, r = this.normalize(e);
		this.setHoverChartIndex(e), (t.mouseIsDown === "mousedown" || this.touchSelect(r)) && this.drag(r), !t.exporting?.openMenu && (this.inClass(r.target, "highcharts-tracker") || t.isInsidePlot(r.chartX - t.plotLeft, r.chartY - t.plotTop, { visiblePlotOnly: !0 })) && !n?.shouldStickOnContact(r) && (this.inClass(r.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(r));
	}
	onDocumentTouchEnd(e) {
		this.onDocumentMouseUp(e);
	}
	onContainerTouchMove(e) {
		this.touchSelect(e) ? this.onContainerMouseMove(e) : this.touch(e);
	}
	onContainerTouchStart(e) {
		this.touchSelect(e) ? this.onContainerMouseDown(e) : (this.zoomOption(e), this.touch(e, !0));
	}
	onDocumentMouseMove(e) {
		let t = this.chart, n = t.tooltip, r = this.chartPosition, i = this.normalize(e, r);
		r && !t.isInsidePlot(i.chartX - t.plotLeft, i.chartY - t.plotTop, { visiblePlotOnly: !0 }) && !n?.shouldStickOnContact(i) && (i.target === t.container.ownerDocument || !this.inClass(i.target, "highcharts-tracker")) && this.reset();
	}
	onDocumentMouseUp(t) {
		t?.touches && this.hasPinchMoved && t?.preventDefault?.(), Rt[T(e.hoverChartIndex, -1)]?.pointer?.drop(t);
	}
	pinch(e) {
		let t = this, { chart: n, hasZoom: r, lastTouches: i } = t, a = [].map.call(e.touches || [], (e) => t.normalize(e)), o = a.length, s = o === 1 && (t.inClass(e.target, "highcharts-tracker") && n.runTrackerClick || t.runChartClick), c = o === 1 && (n.tooltip?.options.followTouchMove ?? !0);
		o > 1 ? t.initiated = !0 : c && (t.initiated = !1), r && t.initiated && !s && e.cancelable !== !1 && e.preventDefault(), e.type === "touchstart" ? (t.pinchDown = a, t.res = !0, n.mouseDownX = e.chartX) : c ? this.runPointActions(t.normalize(e)) : i && (z(n, "touchpan", {
			originalEvent: e,
			touches: a
		}, () => {
			let t = (e) => {
				let t = e[0], n = e[1] || t;
				return {
					x: t.chartX,
					y: t.chartY,
					width: n.chartX - t.chartX,
					height: n.chartY - t.chartY
				};
			};
			n.transform({
				axes: n.axes.filter((e) => e.zoomEnabled && (this.zoomHor && e.horiz || this.zoomVert && !e.horiz)),
				to: t(a),
				from: t(i),
				trigger: e.type
			});
		}), t.res && (t.res = !1, this.reset(!1, 0))), t.lastTouches = a;
	}
	reset(e, t) {
		let n = this, r = n.chart, i = r.hoverSeries, a = r.hoverPoint, o = r.hoverPoints, s = r.tooltip, c = s?.shared ? o : a;
		e && c && N(c).forEach(function(t) {
			t.series.isCartesian && t.plotX === void 0 && (e = !1);
		}), e ? s && c && N(c).length && (s.refresh(c), s.shared && o ? o.forEach(function(e) {
			e.setState(e.state, !0), e.series.isCartesian && (e.series.xAxis.crosshair && e.series.xAxis.drawCrosshair(null, e), e.series.yAxis.crosshair && e.series.yAxis.drawCrosshair(null, e));
		}) : a && (a.setState(a.state, !0), r.axes.forEach(function(e) {
			e.crosshair && a.series[e.coll] === e && e.drawCrosshair(null, a);
		}))) : (a && a.onMouseOut(), o && o.forEach(function(e) {
			e.setState();
		}), i && i.onMouseOut(), s && s.hide(t), n.unDocMouseMove &&= n.unDocMouseMove(), r.axes.forEach(function(e) {
			e.hideCrosshair();
		}), r.hoverPoints = r.hoverPoint = void 0);
	}
	runPointActions(t, n, r) {
		let i = this, a = i.chart, o = a.series, s = a.tooltip?.options.enabled ? a.tooltip : void 0, c = s ? s.shared : !1, l = n || a.hoverPoint, u = l?.series || a.hoverSeries, d = (!t || t.type !== "touchmove") && (!!n || u?.directTouch && i.isDirectTouch), f = this.getHoverData(l, u, o, d, c, t);
		l = f.hoverPoint, u = f.hoverSeries;
		let p = f.hoverPoints, m = u?.tooltipOptions.followPointer && !u.tooltipOptions.split, g = c && u && !u.noSharedTooltip;
		if (l && (r || l !== a.hoverPoint || s?.isHidden)) {
			if ((a.hoverPoints || []).forEach(function(e) {
				p.indexOf(e) === -1 && e.setState();
			}), a.hoverSeries !== u && u.onMouseOver(), i.applyInactiveState(p), (p || []).forEach(function(e) {
				e.setState("hover");
			}), a.hoverPoint && a.hoverPoint.firePointEvent("mouseOut"), !l.series) return;
			a.hoverPoints = p, a.hoverPoint = l, l.firePointEvent("mouseOver", void 0, () => {
				s && l && s.refresh(g ? p : l, t);
			});
		} else if (m && s && !s.isHidden) {
			let e = s.getAnchor([{}], t);
			a.isInsidePlot(e[0], e[1], { visiblePlotOnly: !0 }) && s.updatePosition({
				plotX: e[0],
				plotY: e[1]
			});
		}
		i.unDocMouseMove || (i.unDocMouseMove = P(a.container.ownerDocument, "mousemove", (t) => Rt[e.hoverChartIndex ?? -1]?.pointer?.onDocumentMouseMove(t)), i.eventsToUnbind.push(i.unDocMouseMove)), a.axes.forEach(function(e) {
			let n = e.crosshair?.snap ?? !0, r;
			n && (r = a.hoverPoint, (!r || r.series[e.coll] !== e) && (r = h(p, (t) => t.series?.[e.coll] === e))), r || !n ? e.drawCrosshair(t, r) : e.hideCrosshair();
		});
	}
	setDOMEvents() {
		let t = this.chart.container, n = t.ownerDocument, r = (e) => e.parentElement || e.getRootNode()?.host?.parentElement;
		t.onmousedown = this.onContainerMouseDown.bind(this), t.onmousemove = this.onContainerMouseMove.bind(this), t.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(P(t, "mouseenter", this.onContainerMouseEnter.bind(this)), P(t, "mouseleave", this.onContainerMouseLeave.bind(this))), e.unbindDocumentMouseUp.some((e) => e.doc === n) || e.unbindDocumentMouseUp.push({
			doc: n,
			unbind: P(n, "mouseup", this.onDocumentMouseUp.bind(this))
		});
		let i = r(this.chart.renderTo);
		for (; i && i.tagName !== "BODY";) this.eventsToUnbind.push(P(i, "scroll", () => {
			delete this.chartPosition;
		})), i = r(i);
		this.eventsToUnbind.push(P(t, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 }), P(t, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })), e.unbindDocumentTouchEnd ||= P(n, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 }), this.setPointerCapture(), P(this.chart, "redraw", this.setPointerCapture.bind(this));
	}
	setPointerCapture() {
		if (!Bt) return;
		let e = this, t = e.pointerCaptureEventsToUnbind, n = e.chart, r = n.container, i = (n.options.tooltip?.followTouchMove ?? !0) && n.series.some((e) => e.options.findNearestPointBy.indexOf("y") > -1);
		!e.hasPointerCapture && i ? (t.push(P(r, "pointerdown", (e) => {
			e.target?.hasPointerCapture(e.pointerId) && e.target?.releasePointerCapture(e.pointerId);
		}), P(r, "pointermove", (e) => {
			n.pointer?.getPointFromEvent(e)?.onMouseOver(e);
		})), e.hasPointerCapture = !0) : e.hasPointerCapture && !i && (t.forEach((e) => e()), t.length = 0, e.hasPointerCapture = !1);
	}
	setHoverChartIndex(t) {
		let n = this.chart, r = H.charts[T(e.hoverChartIndex, -1)];
		if (r && r !== n) {
			let e = { relatedTarget: n.container };
			t && !t?.relatedTarget && Object.assign({}, t, e), r.pointer?.onContainerMouseLeave(t || e);
		}
		r?.mouseIsDown || (e.hoverChartIndex = n.index);
	}
	touch(e, t) {
		let { chart: n, pinchDown: r = [] } = this, i, a;
		this.setHoverChartIndex(), e = this.normalize(e), e.touches.length === 1 ? (a = n.isInsidePlot(e.chartX - n.plotLeft, e.chartY - n.plotTop, { visiblePlotOnly: !0 }), a && !n.exporting?.openMenu ? (t && this.runPointActions(e), e.type === "touchmove" && (this.hasPinchMoved = i = r[0] ? (r[0].chartX - e.chartX) ** 2 + (r[0].chartY - e.chartY) ** 2 >= 16 : !1), T(i, !0) && this.pinch(e)) : t && this.reset(), (n.tooltip?.options.followTouchMove ?? !0) && a && e.preventDefault()) : e.touches.length === 2 && this.pinch(e);
	}
	touchSelect(e) {
		return !!(this.chart.zooming.singleTouch && e.touches && e.touches.length === 1);
	}
	zoomOption(e) {
		let t = this.chart, n = t.inverted, r = t.zooming.type || "", i, a;
		/touch/.test(e.type) && (r = T(t.zooming.pinchType, r)), this.zoomX = i = /x/.test(r), this.zoomY = a = /y/.test(r), this.zoomHor = i && !n || a && n, this.zoomVert = a && !n || i && n, this.hasZoom = (i || a) && Vt(e, t.zooming.key);
	}
};
Ht.unbindDocumentMouseUp = [], (function(e) {
	function t(t) {
		w(zt, "Core.Pointer") && P(t, "beforeRender", function() {
			this.pointer = new e(this, this.options);
		});
	}
	e.compose = t;
})(Ht ||= {});
var Ut = Ht, { animObject: Wt, setAnimation: Gt } = B, { registerEventOptions: Kt } = ve, { composed: qt, marginNames: Jt } = H, { distribute: Yt } = we, { format: Xt } = q, Zt = class {
	constructor(e, t) {
		this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = e, this.setOptions(t), t.enabled && (this.render(), Kt(this, t), P(this.chart, "endResize", function() {
			this.legend.positionCheckboxes();
		})), P(this.chart, "render", () => {
			this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems());
		});
	}
	setOptions(e) {
		let t = T(e.padding, 8);
		this.options = e, this.chart.styledMode || (this.itemStyle = e.itemStyle, this.itemHiddenStyle = x(this.itemStyle, e.itemHiddenStyle)), this.itemMarginTop = e.itemMarginTop, this.itemMarginBottom = e.itemMarginBottom, this.padding = t, this.initialItemY = t - 5, this.symbolWidth = T(e.symbolWidth, 16), this.pages = [], this.proximate = e.layout === "proximate" && !this.chart.inverted, this.baseline = void 0;
	}
	update(e, t) {
		let n = this.chart;
		this.setOptions(x(!0, this.options, e)), "events" in this.options && Kt(this, this.options), this.destroy(), n.isDirtyLegend = n.isDirtyBox = !0, T(t, !0) && n.redraw(), z(this, "afterUpdate", { redraw: t });
	}
	colorizeItem(e, t) {
		let n = e.color, { area: r, group: i, label: a, line: o, symbol: s } = e.legendItem || {};
		if ((e instanceof ye || e instanceof pe) && (e.color = e.options?.legendSymbolColor || n), i?.[t ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
			let { itemHiddenStyle: n = {} } = this, i = n.color, { fillColor: c, lineColor: l } = e.options, u = (e) => (t || (e.fill &&= i, e.stroke &&= i), e);
			a?.css(x(t ? this.itemStyle : n)), o?.attr(u({ stroke: l || e.color })), s?.attr(u(e.series ? e.series.pointAttribs?.(e) : e.pointAttribs?.() || { fill: e.color })), r?.attr(u({
				fill: c || e.color,
				"fill-opacity": c ? 1 : e.options.fillOpacity ?? .75
			}));
		}
		e.color = n, z(this, "afterColorizeItem", {
			item: e,
			visible: t
		});
	}
	positionItems() {
		this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
	}
	positionItem(e) {
		let t = this, { group: n, x: r = 0, y: i = 0 } = e.legendItem || {}, a = t.options, o = a.symbolPadding, s = !a.rtl, c = e.checkbox;
		if (n?.element) {
			let a = {
				translateX: s ? r : t.legendWidth - r - 2 * o - 4,
				translateY: i
			};
			n[G(n.translateY) ? "animate" : "attr"](a, void 0, () => {
				z(this, "afterPositionItem", { item: e });
			});
		}
		c && (c.x = r, c.y = i);
	}
	destroyItem(e) {
		let t = e.legendItem || {};
		for (let e of [
			"group",
			"label",
			"line",
			"symbol"
		]) t[e] && (t[e] = t[e].destroy());
		e.checkbox = ue(e.checkbox), e.legendItem = void 0;
	}
	destroy() {
		let e = this;
		for (let e of this.getAllItems()) this.destroyItem(e);
		for (let t of [
			"clipRect",
			"up",
			"down",
			"pager",
			"nav",
			"box",
			"title",
			"group"
		]) e[t] && (e[t] = e[t].destroy());
		this.display = null;
	}
	positionCheckboxes() {
		let e = this.group?.alignAttr, t = this.clipHeight || this.legendHeight, n = this.titleHeight, r;
		e && (r = e.translateY, this.allItems.forEach(function(i) {
			let a = i.checkbox, o;
			a && (o = r + n + a.y + (this.scrollOffset || 0) + 3, A(a, {
				left: e.translateX + i.checkboxOffset + a.x - 20 + "px",
				top: o + "px",
				display: this.proximate || o > r - 6 && o < r + t - 6 ? "" : "none"
			}));
		}, this));
	}
	renderTitle() {
		let e = this.options, t = this.padding, n = e.title, r, i = 0;
		n.text && (this.title || (this.title = this.chart.renderer.label(n.text, t - 3, t - 4, void 0, void 0, void 0, e.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(n.style), this.title.add(this.group)), n.width || this.title.css({ width: this.maxLegendWidth + "px" }), r = this.title.getBBox(), i = r.height, this.offsetWidth = r.width, this.contentGroup.attr({ translateY: i })), this.titleHeight = i;
	}
	setText(e) {
		let t = this.options;
		e.legendItem.label.attr({ text: t.labelFormat ? Xt(t.labelFormat, e, this.chart) : t.labelFormatter.call(e, e) });
	}
	renderItem(e) {
		let t = this, n = e.legendItem = e.legendItem || {}, r = t.chart, i = r.renderer, a = t.options, o = a.layout === "horizontal", s = t.symbolWidth, c = a.symbolPadding || 0, l = t.itemStyle, u = t.itemHiddenStyle, d = o ? T(a.itemDistance, 20) : 0, f = !a.rtl, p = !e.series, m = !p && e.series.drawLegendSymbol ? e.series : e, h = m.options, g = !!t.createCheckboxForItem && h && h.showCheckbox, _ = a.useHTML, v = e.options.className, y = n.label, b = s + c + d + (g ? 20 : 0);
		y || (n.group = i.g("legend-item").addClass("highcharts-" + m.type + "-series highcharts-color-" + e.colorIndex + (v ? " " + v : "") + (p ? " highcharts-series-" + e.index : "")).attr({ zIndex: 1 }).add(t.scrollGroup), n.label = y = i.text("", f ? s + c : -c, t.baseline || 0, _), r.styledMode || y.css(x(e.visible ? l : u)), y.attr({
			align: f ? "left" : "right",
			zIndex: 2
		}).add(n.group), t.baseline || (t.fontMetrics = i.fontMetrics(y), t.baseline = t.fontMetrics.f + 3 + t.itemMarginTop, y.attr("y", t.baseline), t.symbolHeight = T(a.symbolHeight, t.fontMetrics.f), a.squareSymbol && (t.symbolWidth = T(a.symbolWidth, Math.max(t.symbolHeight, 16)), b = t.symbolWidth + c + d + (g ? 20 : 0), f && y.attr("x", t.symbolWidth + c))), m.drawLegendSymbol(t, e), t.setItemEvents && t.setItemEvents(e, y, _)), g && !e.checkbox && t.createCheckboxForItem && t.createCheckboxForItem(e), t.colorizeItem(e, e.visible), (r.styledMode || !l.width) && y.css({ width: Math.min(a.itemWidth || t.widthOption || r.spacingBox.width, a.maxWidth ? E(a.maxWidth, r.chartWidth) : Infinity) - b + "px" }), t.setText(e);
		let S = y.getBBox(), C = t.fontMetrics?.h || 0;
		e.itemWidth = e.checkboxOffset = a.itemWidth || n.labelWidth || S.width + b, t.maxItemWidth = Math.max(t.maxItemWidth, e.itemWidth), t.totalItemWidth += e.itemWidth, t.itemHeight = e.itemHeight = Math.round(n.labelHeight || (S.height > C * 1.5 ? S.height : C));
	}
	layoutItem(e) {
		let t = this.options, n = this.padding, r = t.layout === "horizontal", i = e.itemHeight, a = this.itemMarginBottom, o = this.itemMarginTop, s = r ? T(t.itemDistance, 20) : 0, c = this.maxLegendWidth, l = t.alignColumns && this.totalItemWidth > c ? this.maxItemWidth : e.itemWidth, u = e.legendItem || {};
		r && this.itemX - n + l > c && (this.itemX = n, this.lastLineHeight && (this.itemY += o + this.lastLineHeight + a), this.lastLineHeight = 0), this.lastItemY = o + this.itemY + a, this.lastLineHeight = Math.max(i, this.lastLineHeight), u.x = this.itemX, u.y = this.itemY, r ? this.itemX += l : (this.itemY += o + i + a, this.lastLineHeight = i), this.offsetWidth = this.widthOption || Math.max((r ? this.itemX - n - (e.checkbox ? 0 : s) : l) + n, this.offsetWidth);
	}
	getAllItems() {
		let e = [];
		return this.chart.series.forEach(function(t) {
			let n = t?.options;
			t && T(n.showInLegend, !G(n.linkedTo) && void 0, !0) && (e = e.concat(t.legendItem?.labels || (n.legendType === "point" ? t.data : t)));
		}), z(this, "afterGetAllItems", { allItems: e }), e;
	}
	getAlignment() {
		let e = this.options;
		return this.proximate ? e.align.charAt(0) + "tv" : e.floating ? "" : e.align.charAt(0) + e.verticalAlign.charAt(0) + e.layout.charAt(0);
	}
	adjustMargins(e, t) {
		let n = this.chart, r = this.options, i = this.getAlignment();
		i && [
			/(lth|ct|rth)/,
			/(rtv|rm|rbv)/,
			/(rbh|cb|lbh)/,
			/(lbv|lm|ltv)/
		].forEach((a, o) => {
			a.test(i) && !G(e[o]) && (n[Jt[o]] = Math.max(n[Jt[o]], n.legend[(o + 1) % 2 ? "legendHeight" : "legendWidth"] + [
				1,
				-1,
				-1,
				1
			][o] * r[o % 2 ? "x" : "y"] + (r.margin ?? 12) + t[o] + (n.titleOffset[o] || 0)));
		});
	}
	proximatePositions() {
		let e = this.chart, t = [], r = this.options.align === "left";
		this.allItems.forEach(function(i) {
			let a, o, s = r, c, l;
			i.yAxis && (i.xAxis.options.reversed && (s = !s), i.points && (a = h(s ? i.points : i.points.slice(0).reverse(), function(e) {
				return n(e.plotY);
			})), o = this.itemMarginTop + i.legendItem.label.getBBox().height + this.itemMarginBottom, l = i.yAxis.top - e.plotTop, i.visible ? (c = a ? a.plotY : i.yAxis.height, c += l - .3 * o) : c = l + i.yAxis.height, t.push({
				target: c,
				size: o,
				item: i
			}));
		}, this);
		let i;
		for (let r of Yt(t, e.plotHeight)) i = r.item.legendItem || {}, n(r.pos) && (i.y = e.plotTop - e.spacing[0] + r.pos);
	}
	render() {
		let e = this, t = e.chart, n = t.spacingBox.width, r = t.renderer, i = e.options, a = e.padding, o = e.getAllItems(), s, c, l, u = e.group, d, f = e.box;
		e.itemX = a, e.itemY = e.initialItemY, e.offsetWidth = 0, e.lastItemY = 0, e.widthOption = E(i.width, n - a), d = n - 2 * a - i.x, ["rm", "lm"].indexOf(e.getAlignment().substring(0, 2)) > -1 && (d /= 2), e.maxLegendWidth = e.widthOption || d, u || (e.group = u = r.g("legend").addClass(i.className || "").attr({ zIndex: 7 }).add(), e.contentGroup = r.g().attr({ zIndex: 1 }).add(u), e.scrollGroup = r.g().add(e.contentGroup)), e.renderTitle(), ce(o, (e, t) => (e.options?.legendIndex || 0) - (t.options?.legendIndex || 0)), i.reversed && o.reverse(), e.allItems = o, e.display = s = !!o.length, e.lastLineHeight = 0, e.maxItemWidth = 0, e.totalItemWidth = 0, e.itemHeight = 0, o.forEach(e.renderItem, e), o.forEach(e.layoutItem, e), c = (i.maxWidth ? Math.min(e.widthOption || e.offsetWidth, d, E(i.maxWidth, t.chartWidth) || Infinity) : e.widthOption || e.offsetWidth) + a, l = e.lastItemY + e.lastLineHeight + e.titleHeight, l = e.handleOverflow(l), l += a, f || (e.box = f = r.rect().addClass("highcharts-legend-box").attr({ r: i.borderRadius }).add(u)), t.styledMode || f.attr({
			stroke: i.borderColor,
			"stroke-width": i.borderWidth || 0,
			fill: i.backgroundColor || "none"
		}).shadow(i.shadow), c > 0 && l > 0 && f[f.placed ? "animate" : "attr"](f.crisp.call({}, {
			x: 0,
			y: 0,
			width: c,
			height: l
		}, f.strokeWidth())), u[s ? "show" : "hide"](), t.styledMode && u.getStyle("display") === "none" && (c = l = 0), e.legendWidth = c, e.legendHeight = l, s && e.align(), this.proximate || this.positionItems(), z(this, "afterRender");
	}
	align(e = this.chart.spacingBox) {
		let t = this.chart, n = this.options, r = e.y;
		/(lth|ct|rth)/.test(this.getAlignment()) && t.titleOffset[0] > 0 ? r += t.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && t.titleOffset[2] > 0 && (r -= t.titleOffset[2]), r !== e.y && (e = x(e, { y: r })), t.hasRendered || (this.group.placed = !1), this.group.align(x(n, {
			width: this.legendWidth,
			height: this.legendHeight,
			verticalAlign: this.proximate ? "top" : n.verticalAlign
		}), !0, e);
	}
	handleOverflow(e) {
		let t = this, n = this.chart, r = n.renderer, i = this.options, a = i.y, o = i.verticalAlign === "top", s = this.padding, c = i.maxHeight, l = i.navigation, u = T(l.animation, !0), d = l.arrowSize || 12, f = this.pages, p = this.allItems, m = function(e) {
			typeof e == "number" ? S.attr({ height: e }) : S && (t.clipRect = S.destroy(), t.contentGroup.clip()), t.contentGroup.div && (t.contentGroup.div.style.clip = e ? "rect(" + s + "px,9999px," + (s + e) + "px,0)" : "auto");
		}, h = function(e) {
			return t[e] = r.circle(0, 0, d * 1.3).translate(d / 2, d / 2).add(x), n.styledMode || t[e].attr("fill", "rgba(0,0,0,0.0001)"), t[e];
		}, g, _, v, y, b = n.spacingBox.height + (o ? -a : a) - s, x = this.nav, S = this.clipRect;
		return i.layout === "horizontal" && i.verticalAlign !== "middle" && !i.floating && (b /= 2), c && (b = Math.min(b, c)), f.length = 0, e && b > 0 && e > b && l.enabled !== !1 ? (this.clipHeight = g = Math.max(b - 20 - this.titleHeight - s, 0), this.currentPage = T(this.currentPage, 1), this.fullHeight = e, p.forEach((e, t) => {
			v = e.legendItem || {};
			let n = v.y || 0, r = Math.round(v.label.getBBox().height), i = f.length;
			(!i || n - f[i - 1] > g && (_ || n) !== f[i - 1]) && (f.push(_ || n), i++), v.pageIx = i - 1, _ && y && (y.pageIx = i - 1), t === p.length - 1 && n + r - f[i - 1] > g && n > f[i - 1] && (f.push(n), v.pageIx = i), n !== _ && (_ = n), y = v;
		}), S || (S = t.clipRect = r.clipRect(0, s - 2, 9999, 0), t.contentGroup.clip(S)), m(g), x || (this.nav = x = r.g().attr({ zIndex: 1 }).add(this.group), this.up = r.symbol("triangle", 0, 0, d, d).add(x), h("upTracker").on("click", function() {
			t.scroll(-1, u);
		}), this.pager = r.text("", 15, 10).addClass("highcharts-legend-navigation"), !n.styledMode && l.style && this.pager.css(l.style), this.pager.add(x), this.down = r.symbol("triangle-down", 0, 0, d, d).add(x), h("downTracker").on("click", function() {
			t.scroll(1, u);
		})), t.scroll(0), e = b) : x && (m(), this.nav = x.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0), e;
	}
	scroll(e, t) {
		let n = this.chart, r = this.pages, i = r.length, a = this.clipHeight, o = this.options.navigation, s = this.pager, c = this.padding, l = this.currentPage + e;
		if (l > i && (l = i), l > 0) {
			t !== void 0 && Gt(t, n), this.nav.attr({
				translateX: c,
				translateY: a + this.padding + 7 + this.titleHeight,
				visibility: "inherit"
			}), [this.up, this.upTracker].forEach(function(e) {
				e.attr({ class: l === 1 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
			}), s.attr({ text: l + "/" + i }), [this.down, this.downTracker].forEach(function(e) {
				e.attr({
					x: 18 + this.pager.getBBox().width,
					class: l === i ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
				});
			}, this), n.styledMode || (this.up.attr({ fill: l === 1 ? o.inactiveColor : o.activeColor }), this.upTracker.css({ cursor: l === 1 ? "default" : "pointer" }), this.down.attr({ fill: l === i ? o.inactiveColor : o.activeColor }), this.downTracker.css({ cursor: l === i ? "default" : "pointer" })), this.scrollOffset = -r[l - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = l, this.positionCheckboxes();
			let e = Wt(T(t, n.renderer.globalAnimation, !0));
			V(() => {
				z(this, "afterScroll", { currentPage: l });
			}, e.duration);
		}
	}
	setItemEvents(e, t, n) {
		let r = this, i = e.legendItem || {}, a = r.chart.renderer.boxWrapper, o = e instanceof pe, s = e instanceof ye, c = "highcharts-legend-" + (o ? "point" : "series") + "-active", l = r.chart.styledMode, u = n ? [t, i.symbol] : [i.group], d = (t) => {
			r.allItems.forEach((n) => {
				e !== n && [n].concat(n.linkedSeries || []).forEach((e) => {
					e.setState(t, !o);
				});
			});
		};
		for (let n of u) n && n.on("mouseover", function() {
			e.visible && d("inactive"), e.setState("hover"), e.visible && a.addClass(c), l || t.css(r.options.itemHoverStyle);
		}).on("mouseout", function() {
			r.chart.styledMode || t.css(x(e.visible ? r.itemStyle : r.itemHiddenStyle)), d(""), a.removeClass(c), e.setState();
		}).on("click", function(t) {
			a.removeClass(c), z(r, "itemClick", {
				browserEvent: t,
				legendItem: e,
				context: r
			}, function() {
				e.setVisible && e.setVisible(), d(e.visible ? "inactive" : "");
			}), o ? e.firePointEvent("legendItemClick", { browserEvent: t }) : s && z(e, "legendItemClick", { browserEvent: t });
		});
	}
	createCheckboxForItem(e) {
		let t = this;
		e.checkbox = W("input", {
			type: "checkbox",
			className: "highcharts-legend-checkbox",
			checked: e.selected,
			defaultChecked: e.selected
		}, t.options.itemCheckboxStyle, t.chart.container), P(e.checkbox, "click", function(t) {
			let n = t.target;
			z(e.series || e, "checkboxClick", {
				checked: n.checked,
				item: e
			}, function() {
				e.select();
			});
		});
	}
};
(function(e) {
	function t(t) {
		w(qt, "Core.Legend") && P(t, "beforeMargins", function() {
			this.legend = new e(this, this.options.legend);
		});
	}
	e.compose = t;
})(Zt ||= {});
var Qt = Zt, { animate: $t, animObject: en, setAnimation: tn } = B, { defaultOptions: nn } = O, { numberFormat: rn } = q, { registerEventOptions: an } = ve, { charts: on, doc: sn, marginNames: cn, win: ln } = H, { seriesTypes: un } = J, dn = class e {
	static chart(t, n, r) {
		let i = new e(t, n, r);
		return i.promise || i;
	}
	constructor(e, t, n) {
		if (this.sharedClips = {}, !sn) {
			U(36, !1, this);
			return;
		}
		let r = [...arguments];
		(c(e) || e.nodeName) && (this.renderTo = r.shift()), this.init(r[0], r[1]);
	}
	setZoomOptions() {
		let e = this, t = e.options.chart, n = t.zooming;
		e.zooming = {
			...n,
			type: T(t.zoomType, n.type),
			key: T(t.zoomKey, n.key),
			pinchType: T(t.pinchType, n.pinchType),
			singleTouch: T(t.zoomBySingleTouch, n.singleTouch, !1),
			resetButton: x(n.resetButton, t.resetZoomButton)
		};
	}
	init(e, t) {
		z(this, "init", { args: arguments }, function() {
			let n = x(nn, e), r = n.chart, i = this.renderTo || r.renderTo;
			this.userOptions = a({}, e), (this.renderTo = c(i) ? sn.getElementById(i) : i) || U(13, !0, this), this.margin = [], this.spacing = [], this.labelCollectors = [], t === !0 ? this.promise = new Promise((e) => {
				this.callback = e;
			}) : this.callback = t, this.isResizing = 0, this.options = n, this.axes = [], this.series = [], this.locale = n.lang.locale ?? this.renderTo.closest("[lang]")?.lang, this.time = new re(a(n.time || {}, { locale: this.locale }), n.lang), n.time = this.time.options, this.numberFormatter = (r.numberFormatter || rn).bind(this), this.styledMode = r.styledMode, this.hasCartesianSeries = r.showAxes;
			let o = this;
			o.index = on.length, o.dataTable = o.getDataTable(n), on.push(o), H.chartCount++, an(this, r), o.xAxis = [], o.yAxis = [], o.pointCount = o.colorCounter = o.symbolCounter = 0, this.setZoomOptions(), z(o, "afterInit"), o.firstRender();
		});
	}
	getDataTable(e) {
		return (e.dataTable ? N(e.dataTable) : []).map((e) => e.isDataTable ? e : new ge(e));
	}
	initSeries(e) {
		let t = this, n = t.options.chart, r = e.type || n.type, i = un[r];
		i || U(17, !0, t, { missingModuleFor: r });
		let a = new i();
		return typeof a.init == "function" && a.init(t, e), a;
	}
	orderItems(e, t = 0) {
		let n = this[e], r = this.options[e] = N(this.options[e]).slice(), i = this.userOptions[e] = this.userOptions[e] ? N(this.userOptions[e]).slice() : [];
		if (this.hasRendered && (r.splice(t), i.splice(t)), n) for (let e = t, a = n.length; e < a; ++e) {
			let t = n[e];
			t && (t.index = e, t instanceof ye && (t.name = t.getName()), t.options.isInternal || (r[e] = t.options, i[e] = t.userOptions));
		}
	}
	getClipBox(e, t) {
		let n = this.inverted, { xAxis: r, yAxis: i } = e || {}, { x: a, y: o, width: s, height: c } = x(this.clipBox);
		return e && (r && r.len !== this.plotSizeX && !r.isRadial && (s = r.len), i && i.len !== this.plotSizeY && !i.isRadial && (c = i.len), n && !e.invertible && ([s, c] = [c, s])), t && (a += (n ? i : r)?.pos ?? this.plotLeft, o += (n ? r : i)?.pos ?? this.plotTop), {
			x: a,
			y: o,
			width: s,
			height: c
		};
	}
	isInsidePlot(e, t, n = {}) {
		let { inverted: r, plotBox: i, plotLeft: a, plotTop: o, scrollablePlotBox: s } = this, { scrollLeft: c = 0, scrollTop: l = 0 } = n.visiblePlotOnly && this.scrollablePlotArea?.scrollingContainer || {}, u = n.series, d = n.visiblePlotOnly && s || i, f = n.inverted ? t : e, p = n.inverted ? e : t, m = {
			x: f,
			y: p,
			isInsidePlot: !0,
			options: n
		};
		if (!n.ignoreX) {
			let e = u && (r && !this.polar ? u.yAxis : u.xAxis) || {
				pos: a,
				len: Infinity
			}, t = n.paneCoordinates ? e.pos + f : a + f;
			t >= Math.max(c + a, e.pos) && t <= Math.min(c + a + d.width, e.pos + e.len) || (m.isInsidePlot = !1);
		}
		if (!n.ignoreY && m.isInsidePlot) {
			let e = !r && n.axis && !n.axis.isXAxis && n.axis || u && (r ? u.xAxis : u.yAxis) || {
				pos: o,
				len: Infinity
			}, t = n.paneCoordinates ? e.pos + p : o + p;
			t >= Math.max(l + o, e.pos) && t <= Math.min(l + o + d.height, e.pos + e.len) || (m.isInsidePlot = !1);
		}
		return z(this, "afterIsInsidePlot", m), m.isInsidePlot;
	}
	redraw(e) {
		z(this, "beforeRedraw");
		let t = this, n = t.hasCartesianSeries ? t.axes : t.colorAxis || [], r = t.series, i = t.pointer, o = t.legend, s = t.userOptions.legend, c = t.renderer, l = c.isHidden(), u = [], d, f, p, m = t.isDirtyBox, h = t.isDirtyLegend, g;
		for (c.rootFontSize = c.boxWrapper.getStyle("font-size"), t.setResponsive && t.setResponsive(!1), tn(t.hasRendered ? e : !1, t), l && t.temporaryDisplay(), t.layOutTitles(!1), p = r.length; p--;) if (g = r[p], (g.options.stacking || g.options.centerInCategory) && (f = !0, g.isDirty)) {
			d = !0;
			break;
		}
		if (d) for (p = r.length; p--;) g = r[p], g.options.stacking && (g.isDirty = !0);
		r.forEach(function(e) {
			e.isDirty && (e.options.legendType === "point" ? (typeof e.updateTotals == "function" && e.updateTotals(), h = !0) : s && (s.labelFormatter || s.labelFormat) && (h = !0)), e.isDirtyData && z(e, "updatedData");
		}), h && o && o.options.enabled && (o.render(), t.isDirtyLegend = !1), f && t.getStacks(), n.forEach(function(e) {
			e.updateNames(), e.setScale();
		}), t.getMargins(), n.forEach(function(e) {
			e.isDirty && (m = !0);
		}), n.forEach(function(e) {
			let t = e.min + "," + e.max;
			e.extKey !== t && (e.extKey = t, u.push(function() {
				z(e, "afterSetExtremes", a(e.eventArgs, e.getExtremes())), delete e.eventArgs;
			})), (m || f) && e.redraw();
		}), m && t.drawChartBox(), z(t, "predraw"), r.forEach(function(e) {
			(m || e.isDirty) && e.visible && e.redraw(), e.isDirtyData = !1;
		}), i && i.reset(!0), c.draw(), n.forEach((e) => {
			e.saveOld();
		}), z(t, "redraw"), z(t, "render"), l && t.temporaryDisplay(!0), u.forEach(function(e) {
			e.call();
		});
	}
	get(e) {
		let t = this.series;
		function n(t) {
			return t.id === e || t.options && t.options.id === e;
		}
		let r = h(this.axes, n) || h(this.series, n);
		for (let e = 0; !r && e < t.length; e++) r = h(t[e].points || [], n);
		return r;
	}
	createAxes() {
		let e = this.userOptions;
		z(this, "createAxes");
		for (let t of ["xAxis", "yAxis"]) {
			let n = e[t] = N(e[t] || {});
			for (let e of n) new bt(this, e, t);
		}
		z(this, "afterCreateAxes");
	}
	getSelectedPoints() {
		return this.series.reduce((e, t) => (t.getPointsCollection().forEach((t) => {
			T(t.selectedStaging, t.selected) && e.push(t);
		}), e), []);
	}
	getSelectedSeries() {
		return this.series.filter((e) => e.selected);
	}
	setTitle(e, t, n) {
		this.applyDescription("title", e), this.applyDescription("subtitle", t), this.applyDescription("caption", void 0), this.layOutTitles(n);
	}
	applyDescription(e, t) {
		let n = this, r = this.options[e] = x(this.options[e], t), i = this[e];
		i && t && (this[e] = i = i.destroy()), r && !i && (i = this.renderer.text(r.text, 0, 0, r.useHTML).attr({
			align: r.align,
			class: "highcharts-" + e,
			zIndex: r.zIndex || 4
		}).css({
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		}).add(), i.update = function(t, r) {
			n.applyDescription(e, t), n.layOutTitles(r);
		}, this.styledMode || i.css(a(e === "title" ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {}, r.style)), i.textPxLength = i.getBBox().width, i.css({ whiteSpace: r.style?.whiteSpace }), this[e] = i);
	}
	layOutTitles(e = !0) {
		let n = [
			0,
			0,
			0
		], { options: r, renderer: i, spacingBox: a } = this;
		[
			"title",
			"subtitle",
			"caption"
		].forEach((e) => {
			let r = this[e], o = this.options[e], s = x(a), c = r?.textPxLength || 0;
			if (r && o) {
				z(this, "layOutTitle", {
					alignTo: s,
					key: e,
					textPxLength: c
				});
				let a = i.fontMetrics(r), l = a.b, u = a.h, d = o.verticalAlign || "top", f = d === "top", p = f && o.minScale || 1, m = e === "title" ? f ? -3 : 0 : f ? n[0] + 2 : 0, h = Math.min(s.width / c, 1), g = Math.max(p, h), _ = x({ y: d === "bottom" ? l : m + l }, o), v = (o.width || (h > p ? this.chartWidth : s.width) / g) + "px";
				_.align ??= e === "title" ? h < p ? "left" : "center" : this.title?.alignValue, r.alignValue !== _.align && (r.placed = !1);
				let y = Math.round(r.css({ width: v }).getBBox(o.useHTML).height);
				if (_.height = y, r.align(_, !1, s).attr({
					align: _.align,
					scaleX: g,
					scaleY: g,
					"transform-origin": `${s.x + c * g * t(_.align)} ${u}`
				}), !o.floating) {
					let e = y * (y < u * 1.2 ? 1 : g);
					d === "top" ? n[0] = Math.ceil(n[0] + e) : d === "bottom" && (n[2] = Math.ceil(n[2] + e));
				}
			}
		}, this), n[0] && (r.title?.verticalAlign || "top") === "top" && (n[0] += r.title?.margin || 0), n[2] && r.caption?.verticalAlign === "bottom" && (n[2] += r.caption?.margin || 0);
		let o = !this.titleOffset || this.titleOffset.join(",") !== n.join(",");
		this.titleOffset = n, z(this, "afterLayOutTitles"), !this.isDirtyBox && o && (this.isDirtyBox = this.isDirtyLegend = o, this.hasRendered && e && this.isDirtyBox && this.redraw());
	}
	getContainerBox() {
		let e = [].map.call(this.renderTo.children, (e) => {
			if (e !== this.container) {
				let t = e.style.display;
				return e.style.display = "none", [e, t];
			}
		}), t = {
			width: g(this.renderTo, "width", !0) || 0,
			height: g(this.renderTo, "height", !0) || 0
		};
		return e.filter(Boolean).forEach(([e, t]) => {
			e.style.display = t;
		}), t;
	}
	getChartSize() {
		let e = this, t = e.options.chart, n = t.width, r = t.height, i = e.getContainerBox(), a = i.height <= 1 || !e.renderTo.parentElement?.style.height && e.renderTo.style.height === "100%";
		e.chartWidth = Math.max(0, n || i.width || 600), e.chartHeight = Math.max(0, E(r, e.chartWidth) || (a ? 400 : i.height)), e.containerBox = i;
	}
	temporaryDisplay(e) {
		let t = this.renderTo, n;
		if (e) for (; t?.style;) t.hcOrigStyle && (A(t, t.hcOrigStyle), delete t.hcOrigStyle), t.hcOrigDetached && (sn.body.removeChild(t), t.hcOrigDetached = !1), t = t.parentNode;
		else for (; t?.style && (!sn.body.contains(t) && !t.parentNode && (t.hcOrigDetached = !0, sn.body.appendChild(t)), (g(t, "display", !1) === "none" || t.hcOrigDetached) && (t.hcOrigStyle = {
			display: t.style.display,
			height: t.style.height,
			overflow: t.style.overflow
		}, n = {
			display: "block",
			overflow: "hidden"
		}, t !== this.renderTo && (n.height = 0), A(t, n), t.offsetWidth || t.style.setProperty("display", "block", "important")), t = t.parentNode, t !== sn.body););
	}
	setClassName(e) {
		this.container.className = "highcharts-container " + (e || "");
	}
	getContainer() {
		let e = this, t = e.options, r = t.chart, i = "data-highcharts-chart", o = le(), s = e.renderTo, c, l = ae(I(s, i));
		n(l) && on[l] && on[l].hasRendered && on[l].destroy(), I(s, i, e.index), s.innerHTML = K.emptyHTML, !r.skipClone && !s.offsetWidth && e.temporaryDisplay(), e.getChartSize();
		let u = e.chartHeight, d = e.chartWidth;
		e.styledMode || A(s, { overflow: "hidden" }), e.styledMode || (c = a({
			position: "relative",
			overflow: "hidden",
			width: d + "px",
			height: u + "px",
			textAlign: "left",
			lineHeight: "normal",
			zIndex: 0,
			"-webkit-tap-highlight-color": "rgba(0,0,0,0)",
			userSelect: "none",
			"touch-action": "manipulation",
			outline: "none",
			padding: "0px"
		}, r.style || {}));
		let f = W("div", { id: o }, c, s);
		if (e.container = f, e.getChartSize(), d !== e.chartWidth && (d = e.chartWidth, e.styledMode || A(f, { width: T(r.style?.width, d + "px") })), e._cursor = f.style.cursor, e.renderer = new rt(f, d, u, void 0, r.forExport, t.exporting?.allowHTML, e.styledMode, t.palette, e.index), e.containerBox = e.getContainerBox(), tn(void 0, e), e.setClassName(r.className), !e.styledMode) e.renderer.setStyle(r.style), this.palette = e.renderer.palette;
		else for (let e in t.defs) this.renderer.definition(t.defs[e]);
		z(this, "afterGetContainer");
	}
	getMargins(e) {
		let { spacing: t, margin: n, titleOffset: r } = this;
		this.resetMargins(), r[0] && !G(n[0]) && (this.plotTop = Math.max(this.plotTop, r[0] + t[0])), r[2] && !G(n[2]) && (this.marginBottom = Math.max(this.marginBottom, r[2] + t[2])), this.legend?.display && this.legend.adjustMargins(n, t), z(this, "getMargins"), e || this.getAxisMargins();
	}
	getAxisMargins() {
		let e = this, t = e.axisOffset = [
			0,
			0,
			0,
			0
		], n = e.colorAxis, r = e.margin, i = (e) => {
			e.forEach((e) => {
				e.visible && e.getOffset();
			});
		};
		e.hasCartesianSeries ? i(e.axes) : n?.length && i(n), cn.forEach((n, i) => {
			G(r[i]) || (e[n] += t[i]);
		}), e.setChartSize();
	}
	getOptions() {
		return r(this.userOptions, nn);
	}
	reflow(e) {
		let t = this, n = t.containerBox, r = t.getContainerBox();
		delete t.pointer?.chartPosition, !t.exporting?.isPrinting && !t.isResizing && n && r.width && ((r.width !== n.width || r.height !== n.height) && (o(t.reflowTimeout), t.reflowTimeout = V(function() {
			if (t.container) {
				t.setSize(void 0, void 0, !1);
				let e = t.containerBox;
				e && (e.height = t.chartHeight);
			}
		}, e ? 100 : 0)), t.containerBox = r);
	}
	setReflow() {
		let e = this, t = (t) => {
			e.options?.chart.reflow && e.hasLoaded && e.reflow(t);
		};
		if (typeof ResizeObserver == "function") new ResizeObserver(t).observe(e.renderTo);
		else {
			let e = P(ln, "resize", t);
			P(this, "destroy", e);
		}
	}
	setSize(e, t, n) {
		let r = this, i = r.renderer;
		r.isResizing += 1, tn(n, r);
		let a = i.globalAnimation;
		r.oldChartHeight = r.chartHeight, r.oldChartWidth = r.chartWidth, e !== void 0 && (r.options.chart.width = e), t !== void 0 && (r.options.chart.height = t), r.getChartSize();
		let { chartWidth: o, chartHeight: s, scrollablePixelsX: c = 0, scrollablePixelsY: l = 0 } = r;
		(r.isDirtyBox || o !== r.oldChartWidth || s !== r.oldChartHeight) && (r.styledMode || (a ? $t : A)(r.container, {
			width: `${o + c}px`,
			height: `${s + l}px`
		}, a), r.setChartSize(!0), i.setSize(o, s, a), r.axes.forEach(function(e) {
			e.isDirty = !0, e.setScale();
		}), r.isDirtyLegend = !0, r.isDirtyBox = !0, r.layOutTitles(), r.getMargins(), r.redraw(a), r.oldChartHeight = void 0, z(r, "resize"), setTimeout(() => {
			r && z(r, "endResize");
		}, en(a).duration)), --r.isResizing;
	}
	setChartSize(e) {
		let t = this, { chartHeight: n, chartWidth: r, clipOffset: i, inverted: a, spacing: o, renderer: s } = t, c = Math[a ? "floor" : "round"], l, u, d, f;
		if (t.plotLeft = l = Math.round(t.plotLeft), t.plotTop = u = Math.round(t.plotTop), t.plotWidth = d = Math.max(0, Math.round(r - l - (t.marginRight ?? 0))), t.plotHeight = f = Math.max(0, Math.round(n - u - (t.marginBottom ?? 0))), t.plotSizeX = a ? f : d, t.plotSizeY = a ? d : f, t.spacingBox = s.spacingBox = {
			x: o[3],
			y: o[0],
			width: r - o[3] - o[1],
			height: n - o[0] - o[2]
		}, t.plotBox = s.plotBox = {
			x: l,
			y: u,
			width: d,
			height: f
		}, i && (t.clipBox = {
			x: c(i[a ? 2 : 3]),
			y: c(i[+!!a]),
			width: c(t.plotSizeX - i[+!a] - i[a ? 2 : 3]),
			height: c(t.plotSizeY - i[+!!a] - i[a ? 3 : 2])
		}), !e) {
			for (let e of t.axes) e.setAxisSize(), e.setAxisTranslation();
			s.alignElements();
		}
		z(t, "afterSetChartSize", { skipAxes: e });
	}
	resetMargins() {
		z(this, "resetMargins");
		let e = this, t = e.options.chart, n = t.plotBorderWidth || 0, r = Math.round(n) / 2;
		["margin", "spacing"].forEach((n) => {
			let r = t[n], i = S(r) ? r : [
				r,
				r,
				r,
				r
			];
			[
				"Top",
				"Right",
				"Bottom",
				"Left"
			].forEach((r, a) => {
				e[n][a] = t[`${n}${r}`] ?? i[a];
			});
		}), cn.forEach((t, n) => {
			e[t] = e.margin[n] ?? e.spacing[n];
		}), e.axisOffset = [
			0,
			0,
			0,
			0
		], e.clipOffset = [
			r,
			r,
			r,
			r
		], e.plotBorderWidth = n;
	}
	drawChartBox() {
		let e = this, t = e.options.chart, { backgroundColor: n, plotBackgroundColor: r, plotBackgroundImage: i, plotBorderRadius: a = 0, shadow: o } = t, { chartWidth: s, chartHeight: c, clipBox: l, clipOffset: u, clipRect: d, plotBGImage: f, plotBox: p, plotLeft: m, plotTop: h, plotWidth: g, plotHeight: _, renderer: v, styledMode: y } = e, b = e.chartBackground, S = e.plotBackground, C = e.plotBorder, w, T, E, D = "animate";
		b || (e.chartBackground = b = v.rect().addClass("highcharts-background").add(), D = "attr"), y ? w = T = b.strokeWidth() : (w = t.borderWidth || 0, T = w + (o ? 8 : 0), E = { fill: n || "none" }, (w || b["stroke-width"]) && (E.stroke = t.borderColor, E["stroke-width"] = w), b.attr(E).shadow(o)), b[D]({
			x: T / 2,
			y: T / 2,
			width: s - T - w % 2,
			height: c - T - w % 2,
			r: t.borderRadius
		}), D = "animate", S || (D = "attr", e.plotBackground = S = v.rect().addClass("highcharts-plot-background").add()), S[D]({
			...p,
			r: a
		}), y || (S.attr({ fill: r || "none" }).shadow(t.plotShadow), i && (f ? (i !== f.attr("href") && f.attr("href", i), f.animate(p)) : e.plotBGImage = v.image(i, m, h, g, _).add())), d ? d.animate({
			width: l.width,
			height: l.height
		}) : e.clipRect = v.clipRect(l), D = "animate", C || (D = "attr", e.plotBorder = C = v.rect().addClass("highcharts-plot-border").attr({ zIndex: 1.5 }).add()), C.attr(y ? void 0 : {
			stroke: t.plotBorderColor,
			"stroke-width": t.plotBorderWidth || 0,
			fill: "none"
		})[D]({ r: a });
		let O = C.strokeWidth(), k = x(C.crisp(p, -O));
		if (u && !y) {
			let e = u[0] - O / 2, t = u[3] - O / 2;
			k.x -= t, k.y -= e, k.width += t + u[1] - O / 2, k.height += e + u[2] - O / 2;
		}
		C[D](k), ["plotClipOuter", "plotClipInner"].forEach((t, n) => {
			let r = e[t], i = n ? -O : O;
			r?.[a ? D : "attr"]({
				x: k.x - i / 2,
				y: k.y - i / 2,
				width: k.width + i,
				height: k.height + i,
				r: a ? a + i / 2 : 0
			}), r?.parentGroup?.attr({ display: a ? "" : "none" });
		}), e.isDirtyBox = !1, z(this, "afterDrawChartBox");
	}
	propFromSeries() {
		let e = this, t = e.options.chart, n = e.options.series, r, i, a;
		[
			"inverted",
			"angular",
			"polar"
		].forEach(function(o) {
			for (i = un[t.type], a = t[o] || i && i.prototype[o], r = n?.length; !a && r--;) i = un[n[r].type], i && i.prototype[o] && (a = !0);
			e[o] = a;
		});
	}
	linkSeries(e) {
		let t = this, n = t.series;
		n.forEach(function(e) {
			e.linkedSeries.length = 0;
		}), n.forEach(function(e) {
			let { linkedTo: r } = e.options, i = c(r) && (r === ":previous" ? n[e.index - 1] : t.get(r));
			i && i.linkedParent !== e && (i.linkedSeries.push(e), e.linkedParent = i, e.visible = e.options.visible ?? i.options.visible ?? e.visible);
		}), z(this, "afterLinkSeries", { isUpdating: e });
	}
	renderSeries() {
		this.series.forEach(function(e) {
			e.translate(), e.render();
		});
	}
	render() {
		let e = this, t = e.axes, r = e.colorAxis, i = e.renderer, { axisLayoutRuns: a = 2, plotBorderRadius: o } = e.options.chart, s = (e) => {
			e.forEach((e) => {
				e.visible && e.render();
			});
		}, c = 0, l = !0, u, d = 0;
		o && (e.plotClipOuter ||= i.clipRect(), e.plotClipInner ||= i.clipRect()), e.setTitle(), z(e, "beforeMargins"), e.getStacks?.(), e.getMargins(!0), e.setChartSize();
		for (let r of t) {
			let { options: t } = r, { labels: i, offset: a } = t;
			if (e.hasCartesianSeries && r.horiz && r.visible && i.enabled && r.series.length && r.coll !== "colorAxis" && !r.isRadial) {
				c = t.tickLength, r.createGroups();
				let e = new dt(r, 0, "", !0), o = e.createLabel("x", i);
				if (e.destroy(), o && T(i.reserveSpace, !n(t.crossing)) && (c = o.getBBox().height + i.distance + Math.max(n(a) ? a : 0, 0)), c) {
					o?.destroy();
					break;
				}
			}
		}
		for (e.plotHeight = Math.max(e.plotHeight - c, 0); (l || u || a > 1) && d < a;) {
			let n = e.plotWidth, r = e.plotHeight, i = [1.05, 1.1];
			for (let e of t) {
				let t = +(e.horiz || 0);
				if (d === 0) {
					e.setScale();
					let n = e.tickPositions?.info?.match;
					n && (i[t] = Math.min(n, i[t]));
				} else (t && l || !t && u) && e.setTickInterval(!0);
			}
			d === 0 ? e.getAxisMargins() : e.getMargins(), l = n / e.plotWidth > (d ? 1 : i[1]), u = r / e.plotHeight > (d ? 1 : i[0]), d++;
		}
		e.drawChartBox(), e.hasCartesianSeries ? s(t) : r?.length && s(r), e.seriesGroup ||= i.g("series-group").attr({ zIndex: 3 }).shadow(e.options.chart.seriesGroupShadow).add(), e.renderSeries(), e.addCredits(), e.setResponsive && e.setResponsive(), e.hasRendered = !0;
	}
	addCredits(e) {
		let t = this, n = x(!0, this.options.credits, e);
		n.enabled && !this.credits && (this.credits = this.renderer.text(n.text + (this.mapCredits || ""), 0, 0, n.useHTML).addClass("highcharts-credits").on("click", function(e) {
			z(t, "creditsClick", e, () => {
				n.href && (ln.location.href = n.href);
			});
		}).attr({
			align: n.position.align,
			zIndex: 8
		}), n.events?.click && P(t, "creditsClick", n.events.click), t.styledMode || this.credits.css(n.style), this.credits.add().align(n.position), this.credits.update = function(e) {
			t.credits = t.credits.destroy(), t.addCredits(e);
		});
	}
	destroy() {
		let e = this, t = e.axes, n = e.series, r = e.container, i = r?.parentNode, a;
		for (z(e, "destroy"), e.renderer.forExport ? b(on, e) : on[e.index] = void 0, H.chartCount--, e.renderTo.removeAttribute("data-highcharts-chart"), _(e), a = t.length; a--;) t[a] = t[a].destroy();
		for (this.scroller?.destroy?.(), a = n.length; a--;) n[a] = n[a].destroy();
		[
			"title",
			"subtitle",
			"chartBackground",
			"plotBackground",
			"plotBGImage",
			"plotBorder",
			"seriesGroup",
			"clipRect",
			"credits",
			"pointer",
			"rangeSelector",
			"legend",
			"resetZoomButton",
			"tooltip",
			"renderer"
		].forEach((t) => {
			e[t] = e[t]?.destroy?.();
		}), r && (r.innerHTML = K.emptyHTML, _(r), i && ue(r)), s(e, function(t, n) {
			delete e[n];
		});
	}
	firstRender() {
		let e = this, t = e.options;
		e.getContainer(), e.resetMargins(), e.setChartSize(), e.propFromSeries(), e.createAxes();
		let n = l(t.series) ? t.series : [];
		t.series = [], n.forEach(function(t) {
			e.initSeries(t);
		}), e.linkSeries(), z(e, "beforeRender"), e.render(), e.pointer?.getChartPosition(), !e.renderer.asyncCounter && !e.hasLoaded && e.onload(), e.temporaryDisplay(!0);
	}
	onload() {
		this.callbacks.concat([this.callback]).forEach(function(e) {
			e && this.index !== void 0 && e.apply(this, [this]);
		}, this), z(this, "load"), z(this, "render"), G(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.warnIfCSSNotLoaded(), this.hasLoaded = !0;
	}
	warnIfA11yModuleNotLoaded() {
		let { options: e, title: t } = this;
		e && !this.accessibility && (this.renderer.boxWrapper.attr({
			role: "img",
			"aria-label": (t?.element.textContent || "").replace(/</g, "&lt;")
		}), e.accessibility && e.accessibility.enabled === !1 || U("Highcharts warning: Consider including the \"accessibility.js\" module to make your chart more usable for people with disabilities. Set the \"accessibility.enabled\" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.", !1, this));
	}
	warnIfCSSNotLoaded() {
		this.styledMode && ln.getComputedStyle(this.container).zIndex !== "0" && U(35, !1, this);
	}
	addSeries(e, t, n) {
		let r = this, i;
		return e && (t = T(t, !0), z(r, "addSeries", { options: e }, function() {
			i = r.initSeries(e), r.isDirtyLegend = !0, r.linkSeries(), z(r, "afterAddSeries", { series: i }), t && r.redraw(n);
		})), i;
	}
	addAxis(e, t, n, r) {
		return this.createAxis(t ? "xAxis" : "yAxis", {
			axis: e,
			redraw: n,
			animation: r
		});
	}
	addColorAxis(e, t, n) {
		return this.createAxis("colorAxis", {
			axis: e,
			redraw: t,
			animation: n
		});
	}
	createAxis(e, t) {
		let n = new bt(this, t.axis, e);
		return T(t.redraw, !0) && this.redraw(t.animation), n;
	}
	showLoading(e) {
		let t = this, n = t.options, r = n.loading, i = r?.style ?? {}, o = function() {
			s && A(s, {
				left: i.left ?? t.plotLeft + "px",
				top: i.top ?? t.plotTop + "px",
				width: i.width ?? t.plotWidth + "px",
				height: i.height ?? t.plotHeight + "px"
			});
		}, s = t.loadingDiv, c = t.loadingSpan;
		s || (t.loadingDiv = s = W("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, t.container)), c || (t.loadingSpan = c = W("span", { className: "highcharts-loading-inner" }, null, s), P(t, "redraw", o)), s.className = "highcharts-loading", K.setElementHTML(c, T(e, n.lang.loading, "")), t.styledMode || (A(s, a(i, { zIndex: 10 })), A(c, r?.labelStyle ?? {}), t.loadingShown || (A(s, {
			opacity: 0,
			display: ""
		}), $t(s, { opacity: i.opacity ?? .5 }, { duration: r?.showDuration ?? 0 }))), t.loadingShown = !0, o();
	}
	hideLoading() {
		let e = this.options, t = this.loadingDiv;
		t && (t.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || $t(t, { opacity: 0 }, {
			duration: e.loading?.hideDuration ?? 100,
			complete: function() {
				A(t, { display: "none" });
			}
		})), this.loadingShown = !1;
	}
	update(e, t, i, a) {
		let o = this, l = {
			credits: "addCredits",
			title: "setTitle",
			subtitle: "setSubtitle",
			caption: "setCaption"
		}, u = e.isResponsiveOptions, d = [], f, p, m;
		z(o, "update", { options: e }), u || o.setResponsive(!1, !0), e = r(e, o.options), o.userOptions = x(o.userOptions, e);
		let h = e.chart;
		h && (x(!0, o.options.chart, h), this.setZoomOptions(), "className" in h && o.setClassName(h.className), ("inverted" in h || "polar" in h || "type" in h) && (o.propFromSeries(), f = !0), "alignTicks" in h && (f = !0), "events" in h && an(this, h), s(h, function(e, t) {
			o.propsRequireUpdateSeries.indexOf("chart." + t) !== -1 && (p = !0), o.propsRequireDirtyBox.indexOf(t) !== -1 && (o.isDirtyBox = !0), o.propsRequireReflow.indexOf(t) !== -1 && (o.isDirtyBox = !0, u || (m = !0));
		}), !o.styledMode && h.style && o.renderer.setStyle(o.options.chart.style || {})), !o.styledMode && e.colors && (this.options.colors = e.colors), s(e, function(t, n) {
			o[n] && typeof o[n].update == "function" ? o[n].update(t, !1) : typeof o[l[n]] == "function" ? o[l[n]](t) : n !== "colors" && o.collectionsWithUpdate.indexOf(n) === -1 && x(!0, o.options[n], e[n]), n !== "chart" && o.propsRequireUpdateSeries.indexOf(n) !== -1 && (p = !0);
		}), this.collectionsWithUpdate.forEach((t) => {
			e[t] && (N(e[t]).forEach((e, n) => {
				if (!e) return;
				let r = G(e.id), a;
				r && (a = o.get(e.id)), !a && o[t] && (a = o[t][T(e.index, n)], a && (r && G(a.options.id) || a.options.isInternal) && (a = void 0)), a && a.coll === t && (a.update(e, !1), i && (a.touched = !0)), !a && i && o.collectionsWithInit[t] && (o.collectionsWithInit[t][0].apply(o, [e].concat(o.collectionsWithInit[t][1] || [], [!1])).touched = !0);
			}), i && o[t].forEach((e) => {
				!e.touched && !e.options.isInternal ? d.push(e) : delete e.touched;
			}));
		}), d.forEach((e) => {
			e.chart && e.remove && e.remove(!1);
		}), f && o.axes.forEach(function(e) {
			e.update({}, !1);
		}), p && o.series.forEach((e) => {
			e.chart && e.update({}, !1);
		});
		let g = h?.width, _ = h && (c(h.height) ? E(h.height, g || o.chartWidth) : h.height);
		m || n(g) && g !== o.chartWidth || n(_) && _ !== o.chartHeight ? o.setSize(g, _, a) : T(t, !0) && o.redraw(a), z(o, "afterUpdate", {
			options: e,
			redraw: t,
			animation: a
		});
	}
	setSubtitle(e, t) {
		this.applyDescription("subtitle", e), this.layOutTitles(t);
	}
	setCaption(e, t) {
		this.applyDescription("caption", e), this.layOutTitles(t);
	}
	showResetZoom() {
		let e = this, t = e.options.lang, n = e.zooming.resetButton, r = n.theme, i = n.relativeTo === "chart" || n.relativeTo === "spacingBox" ? null : "plotBox";
		function a() {
			e.zoomOut();
		}
		z(this, "beforeShowResetZoom", null, function() {
			e.resetZoomButton = e.renderer.button(t.resetZoom, null, null, a, r).attr({
				align: n.position.align,
				title: t.resetZoomTitle
			}).addClass("highcharts-reset-zoom").add().align(n.position, !1, i);
		}), z(this, "afterShowResetZoom");
	}
	zoomOut() {
		z(this, "selection", { resetSelection: !0 }, () => this.transform({
			reset: !0,
			trigger: "zoom"
		}));
	}
	pan(e, t) {
		let n = this, r = typeof t == "object" ? t : {
			enabled: t,
			type: "x"
		}, i = r.type, a = i && n[{
			x: "xAxis",
			xy: "axes",
			y: "yAxis"
		}[i]].filter((e) => e.options.panningEnabled && !e.options.isInternal), o = n.options.chart;
		o?.panning && (o.panning = r), z(this, "pan", { originalEvent: e }, () => {
			n.transform({
				axes: a,
				event: e,
				to: {
					x: e.chartX - (n.mouseDownX || 0),
					y: e.chartY - (n.mouseDownY || 0)
				},
				trigger: "pan"
			}), A(n.container, { cursor: "move" });
		});
	}
	transform(e) {
		let { axes: t = this.axes, event: r, from: i = {}, reset: o, selection: s, to: c = {}, trigger: l, allowResetButton: u = !0 } = e, { inverted: d, time: f } = this;
		this.hoverPoints?.forEach((e) => e.setState()), z(this, "transform", e);
		let p = e.hasZoomed || !1, m, h;
		for (let e of t) {
			let { horiz: t, len: g, minPointOffset: _ = 0, options: v, reversed: y } = e, b = t ? "width" : "height", x = t ? "x" : "y", S = T(c[b], e.len), C = T(i[b], e.len), w = Math.abs(S) < 10 ? 1 : S / C, E = (i[x] || 0) + C / 2 - e.pos, D = E - ((c[x] ?? e.pos) + S / 2 - e.pos) / w, O = y && !d || !y && d ? -1 : 1, k = D;
			if (!o && (E < 0 || E > e.len)) continue;
			let A = e.chart.polar || e.isOrdinal && w <= 1 ? 0 : _ * O || 0, j = e.toValue(k, !0), M = e.toValue(k + g / w, !0), N = j + A, P = M - A, F = e.allExtremes;
			if (s && s[e.coll].push({
				axis: e,
				min: Math.min(j, M),
				max: Math.max(j, M)
			}), N > P && ([N, P] = [P, N]), w === 1 && !o && e.coll === "yAxis" && !F) {
				for (let t of e.series) {
					let e = t.getExtremes(t.getProcessedData(!0).modified.getColumn(t.pointValKey || "y") || [], !0);
					F ??= {
						dataMin: Number.MAX_VALUE,
						dataMax: -Number.MAX_VALUE
					}, n(e.dataMin) && n(e.dataMax) && (F.dataMin = Math.min(e.dataMin, F.dataMin), F.dataMax = Math.max(e.dataMax, F.dataMax));
				}
				e.allExtremes = F;
			}
			let { dataMin: I, dataMax: L, min: ee, max: R } = a(e.getExtremes(), F || {}), z = f.parse(v.min), te = f.parse(v.max), ne = I ?? z, B = L ?? te, V = P - N, re = e.categories ? 0 : Math.min(V, B - ne), H = ne - re * (G(z) ? 0 : v.minPadding), ie = B + re * (G(te) ? 0 : v.maxPadding), ae = e.allowZoomOutside || w === 1 || l !== "zoom" && w > 1, oe = Math.min(z ?? H, H, ae ? ee : H), se = Math.max(te ?? ie, ie, ae ? R : ie);
			(!e.isOrdinal || w !== 1 || o) && (N < oe && (N = oe, w >= 1 && (P = N + V)), P > se && (P = se, w >= 1 && (N = P - V)), (o || e.series.length && (N !== ee || P !== R) && N >= oe && P <= se) && (s ? s[e.coll].push({
				axis: e,
				min: N,
				max: P
			}) : (e.isPanning = l !== "zoom", e.isPanning && l !== "mousewheel" && (h = !0), e.setExtremes(o ? void 0 : N, o ? void 0 : P, !1, !1, {
				move: D,
				trigger: l,
				scale: w
			}), !o && (N > oe || P < se) && (m = u)), p = !0), !this.hasCartesianSeries && !o && (m = u), r && (this[t ? "mouseDownX" : "mouseDownY"] = r[t ? "chartX" : "chartY"]));
		}
		return p && (s ? z(this, "selection", s, () => {
			delete e.selection, e.trigger = "zoom", this.transform(e);
		}) : (m && !h && !this.resetZoomButton ? this.showResetZoom() : !m && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()), this.redraw(l === "zoom" && (this.options.chart.animation ?? this.pointCount < 100)))), p;
	}
};
a(dn.prototype, {
	callbacks: [],
	collectionsWithInit: {
		xAxis: [dn.prototype.addAxis, [!0]],
		yAxis: [dn.prototype.addAxis, [!1]],
		series: [dn.prototype.addSeries]
	},
	collectionsWithUpdate: [
		"xAxis",
		"yAxis",
		"series"
	],
	propsRequireDirtyBox: [
		"backgroundColor",
		"borderColor",
		"borderWidth",
		"borderRadius",
		"plotBackgroundColor",
		"plotBackgroundImage",
		"plotBorderColor",
		"plotBorderRadius",
		"plotBorderWidth",
		"plotShadow",
		"shadow"
	],
	propsRequireReflow: [
		"margin",
		"marginTop",
		"marginRight",
		"marginBottom",
		"marginLeft",
		"spacing",
		"spacingTop",
		"spacingRight",
		"spacingBottom",
		"spacingLeft"
	],
	propsRequireUpdateSeries: [
		"chart.inverted",
		"chart.polar",
		"chart.ignoreHiddenSeries",
		"chart.type",
		"colors",
		"plotOptions",
		"time",
		"tooltip"
	]
});
//#endregion
//#region node_modules/highcharts/es-modules/Extensions/ScrollablePlotArea.js
var { stop: fn } = B, { composed: pn } = H;
function mn() {
	(this.scrollablePixelsX || this.scrollablePixelsY) && !this.scrollablePlotArea && (this.scrollablePlotArea = new gn(this)), this.scrollablePlotArea?.applyFixed();
}
function hn() {
	this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0);
}
var gn = class e {
	static compose(e, t, n) {
		w(pn, "ScrollablePlotArea") && (P(e, "afterInit", hn), P(t, "afterSetChartSize", (e) => this.afterSetSize(e.target, e)), P(t, "render", mn), P(n, "show", hn));
	}
	static afterSetSize(e, t) {
		let { minWidth: n, minHeight: r } = e.options.chart.scrollablePlotArea || {}, { clipBox: i, plotBox: a, inverted: o, renderer: s } = e, c, l, u;
		if (!s.forExport) if (n ? (e.scrollablePixelsX = c = Math.max(0, n - e.chartWidth), c && (e.scrollablePlotBox = x(e.plotBox), a.width = e.plotWidth += c, i[o ? "height" : "width"] += c, u = !0)) : r && (e.scrollablePixelsY = l = Math.max(0, r - e.chartHeight), G(l) && (e.scrollablePlotBox = x(e.plotBox), a.height = e.plotHeight += l, i[o ? "width" : "height"] += l, u = !1)), G(u)) {
			if (!t.skipAxes) for (let t of e.axes) (t.horiz === u || e.hasParallelCoordinates && t.coll === "yAxis") && (t.setAxisSize(), t.setAxisTranslation());
		} else delete e.scrollablePlotBox;
	}
	constructor(e) {
		let t = e.options.chart, n = t.scrollablePlotArea || {}, r = this.moveFixedElements.bind(this), i = {
			WebkitOverflowScrolling: "touch",
			overflowX: "hidden",
			overflowY: "hidden"
		};
		e.scrollablePixelsX && (i.overflowX = "auto"), e.scrollablePixelsY && (i.overflowY = "auto"), this.chart = e;
		let a = this.parentDiv = W("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, e.renderTo), o = this.scrollingContainer = W("div", { className: "highcharts-scrolling" }, i, a), s = this.innerContainer = W("div", { className: "highcharts-inner-container" }, void 0, o), c = this.fixedDiv = W("div", { className: "highcharts-fixed" }, {
			position: "absolute",
			overflow: "hidden",
			pointerEvents: "none",
			zIndex: (t.style?.zIndex || 0) + 2,
			top: 0
		}, void 0, !0), l = this.fixedRenderer = new rt(c, e.chartWidth, e.chartHeight, t.style);
		this.mask = l.path().attr({
			fill: t.backgroundColor || "#fff",
			"fill-opacity": n.opacity ?? .85,
			zIndex: -1
		}).addClass("highcharts-scrollable-mask").add(), o.parentNode.insertBefore(c, o), A(e.renderTo, { overflow: "visible" }), P(e, "afterShowResetZoom", r), P(e, "afterApplyDrilldown", r), P(e, "afterLayOutTitles", r);
		let u;
		P(o, "scroll", () => {
			let { pointer: t, hoverPoint: n } = e;
			t && (delete t.chartPosition, n && (u = n), t.runPointActions(void 0, u, !0));
		}), s.appendChild(e.container);
	}
	applyFixed() {
		let { chart: e, fixedRenderer: t, isDirty: n, scrollingContainer: r } = this, { axisOffset: i, chartWidth: a, chartHeight: o, container: s, plotHeight: c, plotLeft: l, plotTop: u, plotWidth: d, scrollablePixelsX: f = 0, scrollablePixelsY: p = 0 } = e, { scrollPositionX: m = 0, scrollPositionY: h = 0 } = e.options.chart.scrollablePlotArea || {}, g = a + f, _ = o + p;
		t.setSize(a, o), (n ?? !0) && (this.isDirty = !1, this.moveFixedElements()), fn(e.container), A(s, {
			width: `${g}px`,
			height: `${_}px`
		}), e.renderer.boxWrapper.attr({
			width: g,
			height: _,
			viewBox: [
				0,
				0,
				g,
				_
			].join(" ")
		}), e.chartBackground?.attr({
			width: g,
			height: _
		}), A(r, {
			width: `${a}px`,
			height: `${o}px`
		}), G(n) || (r.scrollLeft = f * m, r.scrollTop = p * h);
		let v = u - i[0] - 1, y = l - i[3] - 1, b = u + c + i[2] + 1, x = l + d + i[1] + 1, S = l + d - f, C = u + c - p, w = [[
			"M",
			0,
			0
		]];
		f ? w = [
			[
				"M",
				0,
				v
			],
			[
				"L",
				l - 1,
				v
			],
			[
				"L",
				l - 1,
				b
			],
			[
				"L",
				0,
				b
			],
			["Z"],
			[
				"M",
				S,
				v
			],
			[
				"L",
				a,
				v
			],
			[
				"L",
				a,
				b
			],
			[
				"L",
				S,
				b
			],
			["Z"]
		] : p && (w = [
			[
				"M",
				y,
				0
			],
			[
				"L",
				y,
				u - 1
			],
			[
				"L",
				x,
				u - 1
			],
			[
				"L",
				x,
				0
			],
			["Z"],
			[
				"M",
				y,
				C
			],
			[
				"L",
				y,
				o
			],
			[
				"L",
				x,
				o
			],
			[
				"L",
				x,
				C
			],
			["Z"]
		]), e.redrawTrigger !== "adjustHeight" && this.mask.attr({ d: w });
	}
	moveFixedElements() {
		let { container: t, inverted: n, scrollablePixelsX: r, scrollablePixelsY: i } = this.chart, a = this.fixedRenderer, o = e.fixedSelectors.slice(), s;
		if (r && !n ? s = ".highcharts-yaxis" : r && n || i && !n ? s = ".highcharts-xaxis" : i && n && (s = ".highcharts-yaxis"), s && !(this.chart.hasParallelCoordinates && s === ".highcharts-yaxis")) for (let e of [`${s}:not(.highcharts-radial-axis)`, `${s}-labels:not(.highcharts-radial-axis-labels)`]) w(o, e);
		else for (let e of [".highcharts-xaxis", ".highcharts-yaxis"]) for (let t of [`${e}:not(.highcharts-radial-axis)`, `${e}-labels:not(.highcharts-radial-axis-labels)`]) b(o, t);
		for (let e of o) [].forEach.call(t.querySelectorAll(e), (e) => {
			(e.namespaceURI === a.SVG_NS ? a.box : a.box.parentNode).appendChild(e), e.style.pointerEvents = "auto";
		});
	}
};
gn.fixedSelectors = [
	".highcharts-breadcrumbs-group",
	".highcharts-contextbutton",
	".highcharts-caption",
	".highcharts-credits",
	".highcharts-drillup-button",
	".highcharts-legend",
	".highcharts-legend-checkbox",
	".highcharts-navigator-series",
	".highcharts-navigator-xaxis",
	".highcharts-navigator-yaxis",
	".highcharts-navigator",
	".highcharts-range-selector-group",
	".highcharts-reset-zoom",
	".highcharts-scrollbar",
	".highcharts-subtitle",
	".highcharts-title"
];
//#endregion
//#region node_modules/highcharts/es-modules/Core/Axis/Stacking/StackingAxis.js
var { getDeferredAnimation: _n } = B, { series: { prototype: vn } } = J;
function yn() {
	let e = this, t = e.inverted;
	e.axes.forEach((e) => {
		e.stacking?.stacks && e.hasVisibleSeries && (e.stacking.oldStacks = e.stacking.stacks);
	}), e.series.forEach((e) => {
		let n = e.xAxis?.options || {};
		e.options.stacking && e.reserveSpace() && (e.stackKey = [
			e.type,
			T(e.options.stack, ""),
			t ? n.top : n.left,
			t ? n.height : n.width
		].join(","));
	});
}
function bn() {
	let e = this.stacking;
	if (e) {
		let t = e.stacks;
		s(t, (e, n) => {
			y(e), delete t[n];
		}), e.stackTotalGroup?.destroy();
	}
}
function xn() {
	this.stacking ||= new Dn(this);
}
function Sn(e, t, n, r) {
	return !G(e) || e.x !== t || r && e.stackKey !== r ? e = {
		x: t,
		index: 0,
		key: r,
		stackKey: r
	} : e.index++, e.key = [
		n,
		t,
		e.index
	].join(","), e;
}
function Cn() {
	let e = this, t = e.yAxis, n = e.stackKey || "", r = t.stacking.stacks, i = e.getColumn("x", !0), a = e[e.options.stacking + "Stacker"], o;
	a && [n, "-" + n].forEach((t) => {
		let n = i.length, s, c, l;
		for (; n--;) s = i[n], o = e.getStackIndicator(o, s, e.index, t), c = r[t]?.[s], l = c?.points[o.key || ""], l && a.call(e, l, c, n);
	});
}
function wn(e, t, n) {
	let r = t.total ? 100 / t.total : 0;
	e[0] = D(e[0] * r), e[1] = D(e[1] * r), this.stackedYData[n] = e[1];
}
function Tn(e) {
	(this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && this.chart.series.length > 1 ? vn.setStackedPoints.call(this, e, "group") : e.stacking.resetStacks());
}
function En(e, t) {
	let r = t || this.options.stacking;
	if (!r || !this.reserveSpace() || ({ group: "xAxis" }[r] || "yAxis") !== e.coll) return;
	let i = this, a = i.getColumn("x", !0), o = i.getColumn(i.pointValKey || "y", !0), s = [], c = o.length, l = i.options, u = l.threshold || 0, d = l.startFromThreshold ? u : 0, f = l.stack, p = t ? `${i.type},${r}` : i.stackKey || "", m = "-" + p, h = i.negStacks, g = e.stacking, _ = g.stacks, v = g.oldStacks, y, b, x, S, C, w, E;
	for (g.stacksTouched += 1, E = 0; E < c; E++) {
		let t = a[E] || 0, c = o[E], l = n(c) && c || 0;
		y = i.getStackIndicator(y, t, i.index), w = y.key || "", b = h && l < (d ? 0 : u), C = b ? m : p, _[C] || (_[C] = {}), _[C][t] || (v[C]?.[t] ? (_[C][t] = v[C][t], _[C][t].total = null) : _[C][t] = new he(e, e.options.stackLabels, !!b, t, f)), x = _[C][t], c === null ? (delete x.points[w], delete x.points[i.index]) : (x.points[w] = x.points[i.index] = [T(x.cumulative, d)], G(x.cumulative) || (x.base = w), x.touched = g.stacksTouched, y.index > 0 && i.singleStacks === !1 && (x.points[w][0] = x.points[i.index + "," + t + ",0"][0]));
		let O = x.total || 0;
		r === "percent" ? (S = b ? p : m, h && _[S]?.[t] ? (S = _[S][t], O = S.total = Math.max(S.total || 0, O) + Math.abs(l)) : O = D(O + Math.abs(l))) : r === "group" ? n(c) && O++ : O = D(O + l), r === "group" ? x.cumulative = (O || 1) - 1 : x.cumulative = D(T(x.cumulative, d) + l), x.total = O, c !== null && (x.points[w].push(x.cumulative), s[E] = x.cumulative, x.hasValidPoints = !0);
	}
	r === "percent" && (g.usePercentage = !0), r !== "group" && (this.stackedYData = s), g.oldStacks = {};
}
var Dn = class {
	constructor(e) {
		this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = e;
	}
	buildStacks() {
		let e = this, t = e.axis, n = t.series, r = t.coll === "xAxis", i = t.options.reversedStacks, a = n.length, o, s;
		for (this.resetStacks(), e.usePercentage = !1, s = a; s--;) o = n[i ? s : a - s - 1], r && o.setGroupedPoints(t), o.setStackedPoints(t);
		if (!r) for (s = 0; s < a; s++) n[s].modifyStacks();
		z(t, "afterBuildStacks");
	}
	cleanStacks() {
		this.oldStacks && (this.stacks = this.oldStacks, s(this.stacks, (e) => {
			s(e, (e) => {
				e.cumulative = e.total;
			});
		}));
	}
	resetStacks() {
		s(this.stacks, (e) => {
			s(e, (t, r) => {
				n(t.touched) && t.touched < this.stacksTouched ? (t.destroy(), delete e[r]) : (t.total = null, t.cumulative = null);
			});
		});
	}
	renderStackTotals() {
		let e = this, t = e.axis, n = t.chart, r = n.renderer, i = e.stacks, a = t.options.stackLabels?.animation, o = _n(n, a || !1), c = e.stackTotalGroup = e.stackTotalGroup || r.g("stack-labels").attr({
			zIndex: 6,
			opacity: 0
		}).add();
		c.translate(n.plotLeft, n.plotTop), s(i, (e) => {
			s(e, (e) => {
				e.render(c);
			});
		}), c.animate({ opacity: 1 }, o);
	}
}, On;
(function(e) {
	function t(e, t, n) {
		let r = t.prototype, i = n.prototype;
		r.getStacks || (P(e, "init", xn), P(e, "destroy", bn), r.getStacks = yn, i.getStackIndicator = Sn, i.modifyStacks = Cn, i.percentStacker = wn, i.setGroupedPoints = Tn, i.setStackedPoints = En);
	}
	e.compose = t;
})(On ||= {});
var kn = On, An = class extends ye {
	drawGraph() {
		let e = this.options, t = (this.gappedPath || this.getGraphPath).call(this), n = this.chart.styledMode;
		[this, ...this.zones].forEach((r, i) => {
			let a, o = r.graph, s = o ? "animate" : "attr", c = r.dashStyle || e.dashStyle;
			if (o ? (o.endX = this.preventGraphAnimation ? null : t.xMap, o.animate({ d: t })) : t.length && (r.graph = o = this.chart.renderer.path(t).addClass("highcharts-graph" + (i ? ` highcharts-zone-graph-${i - 1} ` : " ") + (i && r.className || "")).attr({ zIndex: 1 }).add(this.group)), o && !n && (a = {
				stroke: !i && e.lineColor || r.color || this.color || "var(--highcharts-neutral-color-20)",
				"stroke-width": e.lineWidth || 0,
				fill: this.fillGraph && this.color || "none"
			}, c ? a.dashstyle = c : e.linecap !== "square" && (a["stroke-linecap"] = a["stroke-linejoin"] = "round"), o[s](a), e.shadow)) {
				let t = this.chart.inverted, n = { filterUnits: "userSpaceOnUse" }, r = S(e.shadow) ? x(t ? {} : n, e.shadow) : t ? !0 : n;
				o.shadow(r);
			}
			o && (o.startX = t.xMap, o.isArea = t.isArea);
		});
	}
	getGraphPath(e, t, n) {
		let r = this, i = r.options, a = [], o = [], s, c = i.step;
		e ||= r.points;
		let l = e.reversed;
		return l && e.reverse(), c = {
			right: 1,
			center: 2
		}[c] || c && 3, c && l && (c = 4 - c), e = this.getValidPoints(e, !1, i.nullInteraction || !(i.connectNulls && !t && !n)), e.forEach(function(l, u) {
			let d = l.plotX, f = l.plotY, p = e[u - 1], m = l.isNull || typeof f != "number", h;
			(l.leftCliff || p?.rightCliff) && !n && (s = !0), m && !G(t) && u > 0 ? s = !i.connectNulls : m && !t ? s = !0 : (u === 0 || s ? h = [[
				"M",
				l.plotX,
				l.plotY
			]] : r.getPointSpline ? h = [r.getPointSpline(e, l, u)] : c ? (h = c === 1 ? [[
				"L",
				p.plotX,
				f
			]] : c === 2 ? [[
				"L",
				(p.plotX + d) / 2,
				p.plotY
			], [
				"L",
				(p.plotX + d) / 2,
				f
			]] : [[
				"L",
				d,
				p.plotY
			]], h.push([
				"L",
				d,
				f
			])) : h = [[
				"L",
				d,
				f
			]], o.push(l.x), c && (o.push(l.x), c === 2 && o.push(l.x)), a.push.apply(a, h), s = !1);
		}), a.xMap = o, r.graphPath = a, a;
	}
};
An.defaultOptions = x(ye.defaultOptions, { legendSymbol: "lineMarker" }), J.registerSeriesType("line", An);
//#endregion
//#region node_modules/highcharts/es-modules/Series/Area/AreaSeriesDefaults.js
var jn = {
	threshold: 0,
	legendSymbol: "areaMarker"
}, { seriesTypes: { line: Mn } } = J, Nn = class extends Mn {
	drawGraph() {
		this.areaPath = [], super.drawGraph.apply(this);
		let { areaPath: e, options: t } = this;
		[this, ...this.zones].forEach((n, r) => {
			let i = {}, a = n.fillColor || t.fillColor, o = n.area, s = o ? "animate" : "attr";
			o ? (o.endX = this.preventGraphAnimation ? null : e.xMap, o.animate({ d: e })) : (i.zIndex = 0, o = n.area = this.chart.renderer.path(e).addClass("highcharts-area" + (r ? ` highcharts-zone-area-${r - 1} ` : " ") + (r && n.className || "")).add(this.group), o.isArea = !0), this.chart.styledMode || (i.fill = a || n.color || this.color, i["fill-opacity"] = a ? 1 : t.fillOpacity ?? .75, o.css({ pointerEvents: this.stickyTracking ? "none" : "auto" })), o[s](i), o.startX = e.xMap, o.shiftUnit = t.step ? 2 : 1;
		});
	}
	getGraphPath(e) {
		let t = Mn.prototype.getGraphPath, n = this.options, r = n.stacking, i = this.yAxis, a = [], o = [], s = this.index, c = i.stacking.stacks[this.stackKey], l = n.threshold, u = Math.round(i.getThreshold(n.threshold)), d = T(n.connectNulls, r === "percent"), f = function(t, n, d) {
			let f = e[t], m = e[n], h = r && c[f.x].points[s], g = f[d + "Null"] || 0, _ = f[d + "Cliff"] || 0, v, y, b = !0;
			h && (_ || g) ? (v = (g ? h[0] : h[1]) + _, y = h[0] + _, b = !!g) : !r && m && (m.isNull || !G(m.plotY)) && (v = y = l), v !== void 0 && (o.push({
				plotX: p,
				plotY: v === null ? u : i.getThreshold(v),
				isNull: b,
				isCliff: !0
			}), a.push({
				plotX: p,
				plotY: y === null ? u : i.getThreshold(y),
				doCurve: !1
			}));
		}, p, m, h;
		e ||= this.points, r && (e = this.getStackPoints(e));
		for (let t = 0, n = e.length; t < n; ++t) r || (e[t].leftCliff = e[t].rightCliff = e[t].leftNull = e[t].rightNull = void 0), m = e[t].isNull || !G(e[t].plotY), p = T(e[t].rectPlotX, e[t].plotX), h = r ? T(e[t].yBottom, u) : u, (!m || d) && (d || f(t, t - 1, "left"), m && !r && d || (o.push(e[t]), a.push({
			x: t,
			plotX: p,
			plotY: h
		})), d || f(t, t + 1, "right"));
		let g = t.call(this, o, !0, !0);
		a.reversed = !0;
		let _ = t.call(this, a, !0, !0), v = _[0];
		v && v[0] === "M" && (_[0] = [
			"L",
			v[1],
			v[2]
		]);
		let y = g.concat(_);
		y.length && y.push(["Z"]);
		let b = t.call(this, o, !1, d);
		return this.chart.series.length > 1 && r && o.some((e) => e.isCliff) && (y.hasStackedCliffs = b.hasStackedCliffs = !0), y.xMap = g.xMap, this.areaPath = y, b;
	}
	getStackPoints(e) {
		let t = this, n = [], r = [], i = this.xAxis, a = this.yAxis, o = a.stacking.stacks[this.stackKey], c = {}, l = a.series, u = l.length, d = a.options.reversedStacks ? 1 : -1, f = l.indexOf(t), p = a.getThreshold(t.options.threshold || 0);
		if (e ||= this.points, this.options.stacking) {
			for (let t = 0; t < e.length; t++) e[t].leftNull = e[t].rightNull = void 0, c[e[t].x] = e[t];
			s(o, function(e, t) {
				e.total !== null && r.push(t);
			}), r.sort(function(e, t) {
				return e - t;
			});
			let m = l.map((e) => e.visible);
			r.forEach(function(e, s) {
				let h = 0, g, _;
				if (c[e] && !c[e].isNull) n.push(c[e]), [-1, 1].forEach(function(n) {
					let i = n === 1 ? "rightNull" : "leftNull", a = n === 1 ? "rightCliff" : "leftCliff", p = o[r[s + n]], h = 0;
					if (p) {
						let n = f;
						for (; n >= 0 && n < u;) {
							let r = l[n].index;
							g = p.points[r], g || (r === t.index ? c[e][i] = !0 : m[n] && (_ = o[e].points[r], _ && (h -= _[1] - _[0]))), n += d;
						}
					}
					c[e][a] = h;
				});
				else {
					let t = f;
					for (; t >= 0 && t < u;) {
						let n = l[t].index;
						if (g = o[e].points[n], g) {
							h = g[1];
							break;
						}
						t += d;
					}
					h ||= 0;
					let r = a.positiveValuesOnly && h <= 0 ? p : a.translate(h, !1, !0, !1, !0);
					n.push({
						isNull: !0,
						plotX: i.translate(e, !1, !1, !1, !0),
						x: e,
						plotY: r,
						yBottom: r
					});
				}
			});
		}
		return n;
	}
};
Nn.defaultOptions = x(Mn.defaultOptions, jn), a(Nn.prototype, { singleStacks: !1 }), J.registerSeriesType("area", Nn);
//#endregion
//#region node_modules/highcharts/es-modules/Series/Spline/SplineSeries.js
var { line: Pn } = J.seriesTypes, Fn = class extends Pn {
	getPointSpline(e, t, n) {
		let r = 1.5, i = 2.5, a = t.plotX || 0, o = t.plotY || 0, s = e[n - 1], c = e[n + 1], l, u, d, f;
		function p(e) {
			return e && !e.isNull && e.doCurve !== !1 && !t.isCliff;
		}
		if (p(s) && p(c)) {
			let e = s.plotX || 0, n = s.plotY || 0, p = c.plotX || 0, m = c.plotY || 0, h = 0;
			l = (r * a + e) / i, u = (r * o + n) / i, d = (r * a + p) / i, f = (r * o + m) / i, d !== l && (h = (f - u) * (d - a) / (d - l) + o - f), u += h, f += h, u > n && u > o ? (u = Math.max(n, o), f = 2 * o - u) : u < n && u < o && (u = Math.min(n, o), f = 2 * o - u), f > m && f > o ? (f = Math.max(m, o), u = 2 * o - f) : f < m && f < o && (f = Math.min(m, o), u = 2 * o - f), t.rightContX = d, t.rightContY = f, t.controlPoints = {
				low: [l, u],
				high: [d, f]
			};
		}
		let m = [
			"C",
			T(s.rightContX, s.plotX, 0),
			T(s.rightContY, s.plotY, 0),
			T(l, a, 0),
			T(u, o, 0),
			a,
			o
		];
		return s.rightContX = s.rightContY = void 0, m;
	}
};
Fn.defaultOptions = x(Pn.defaultOptions), J.registerSeriesType("spline", Fn);
//#endregion
//#region node_modules/highcharts/es-modules/Series/AreaSpline/AreaSplineSeries.js
var { area: In, area: { prototype: Ln } } = J.seriesTypes, Rn = class extends Fn {};
Rn.defaultOptions = x(Fn.defaultOptions, In.defaultOptions), a(Rn.prototype, {
	getGraphPath: Ln.getGraphPath,
	getStackPoints: Ln.getStackPoints,
	drawGraph: Ln.drawGraph
}), J.registerSeriesType("areaspline", Rn);
//#endregion
//#region node_modules/highcharts/es-modules/Core/Series/DataLabel.js
var { getDeferredAnimation: zn } = B, { format: Bn } = q, Vn;
(function(e) {
	function r() {
		return g(this).some((e) => e?.enabled);
	}
	function i(e, r, i, o, s) {
		let c = this, { chart: l } = this, u = this.isCartesian && l.inverted, { condemned: d, origin: f, plotX: p, plotY: m } = e, { crop: h = !0, distance: g, overflow: _ = "justify", rotation: v = 0 } = i, y = t(i.align), b = t(i.verticalAlign), S = v === 0 && !d && _ === "justify", C = e.pos(), w = G(p) && G(m) && l.isInsidePlot(p, Math.round(m), {
			inverted: u,
			paneCoordinates: !0,
			series: c
		}), E = this.visible && e.visible && G(p) && (c.forceDL || d || w || T(i.inside, !!this.options.stacking) && o && l.isInsidePlot(p, u ? o.x + 1 : o.y + o.height - 1, {
			inverted: u,
			paneCoordinates: !0,
			series: c
		}));
		if (C) {
			let t = r.getBBox(), p = r.getBBox(void 0, 0);
			o = a({
				x: C[0],
				y: Math.round(C[1]),
				width: 0,
				height: 0
			}, o || {}), i.alignTo === "plotEdges" && c.isCartesian && (o[u ? "x" : "y"] = 0, o[u ? "width" : "height"] = this.yAxis?.len || 0), a(i, {
				width: t.width,
				height: t.height
			});
			let m = 0, _ = 0;
			n(g) && !i.inside && (m = g * (1 - 2 * y), _ = g * (1 - 2 * b)), r.align(x(i, {
				x: (i.x || 0) + m,
				y: (i.y || 0) + _,
				width: p.width,
				height: p.height
			}), !1, o, !1), r.distX = m, r.distY = _, r.alignAttr.x += y * (p.width - t.width), r.alignAttr.y += b * (p.height - t.height);
			let w = r.alignAttr.x + (t.width - p.width) / 2, T = r.alignAttr.y + (t.height - p.height) / 2;
			if (f) {
				let t = e.pos(!1, f.x, f.y);
				if (t) {
					let n = [t[0] - C[0], t[1] - C[1]];
					(c.is("column") || e.plotHigh) && (n[+!u] = 0), r.attr({
						x: w + n[0],
						y: T + n[1],
						opacity: .01
					}), r.placed = !0, s = !1;
				}
			}
			let D = {
				"text-align": r.alignAttr["text-align"] || "center",
				x: w,
				y: T,
				rotationOriginX: (r.width || 0) / 2,
				rotationOriginY: (r.height || 0) / 2
			};
			if ((d || !E) && (D.opacity = 0), r[r.placed ? "animate" : "attr"](D), S && E && o.height >= 0) this.justifyDataLabel(r, i, r.alignAttr, t, o, s);
			else if (h && !d) {
				let { x: e, y: n } = r.alignAttr;
				E = l.isInsidePlot(e, n, {
					paneCoordinates: !0,
					series: c
				}) && l.isInsidePlot(e + t.width - 1, n + t.height - 1, {
					paneCoordinates: !0,
					series: c
				});
			}
			i.shape && !v && r[s ? "attr" : "animate"]({
				anchorX: C[0],
				anchorY: C[1]
			});
		}
		r[s ? "attr" : "animate"]({ visibility: E ? "inherit" : "hidden" }), r.placed = E;
	}
	function o(e, t) {
		let n = t.filter;
		if (n) {
			let t = n.operator, r = e[n.property], i = n.value;
			return t === ">" && r > i || t === "<" && r < i || t === ">=" && r >= i || t === "<=" && r <= i || t === "==" && r == i || t === "===" && r === i || t === "!=" && r != i || t === "!==" && r !== i;
		}
		return !0;
	}
	function u(e) {
		let t = e.prototype;
		t.initDataLabels || (t.initDataLabels = f, t.initDataLabelsGroup = d, t.alignDataLabel = i, t.drawDataLabels = p, t.justifyDataLabel = m, t.mergeArrays = h, t.hasDataLabels = r);
	}
	e.compose = u;
	function d(e, t) {
		z(this, "initDataLabelsGroup", {
			index: e,
			zIndex: t?.zIndex
		}), this.dataLabelsGroup = this.dataLabelsGroups?.[e];
		let n = this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", t?.zIndex ?? 6, this.dataLabelsParentGroups?.[e]);
		return this.dataLabelsGroups ||= [], this.dataLabelsGroups[e] = n, this.dataLabelsGroup = this.dataLabelsGroups[0], n;
	}
	function f(e, t, n) {
		let r = this, i = !!r.hasRendered, a = this.initDataLabelsGroup(e, n).attr({ opacity: +i });
		return !i && a && (r.visible && a.show(), r.options.animation ? a.animate({ opacity: 1 }, t) : a.attr({ opacity: 1 })), a;
	}
	function p(e) {
		e ||= this.points;
		let t = this, n = t.chart, r = t.options, i = n.renderer, { backgroundColor: a, plotBackgroundColor: l } = n.options.chart, u = i.getContrast(c(l) && l || c(a) && a || "var(--highcharts-background-color)"), d = [], f = g(t), { animation: p, defer: m } = f[0], _ = m ? zn(n, p, t) : {
			defer: 0,
			duration: 0
		};
		z(this, "drawDataLabels"), t.hasDataLabels?.() && e.concat(t.condemnedPoints).forEach((e) => {
			let a = e.dataLabels || [], l = e.color || t.color;
			N(h(f, e.dlOptions || e.options?.dataLabels)).forEach((f, p) => {
				let m = f.enabled && (e.visible || e.dataLabelOnHidden) && (!e.isNull || e.dataLabelOnNull) && o(e, f), { backgroundColor: h, borderColor: g, distance: v, style: y = {} } = f, b = N(f.padding || 0), x, S, C, w = {}, E = a[p], D = !E, O;
				if (m && (x = T(f[e.formatPrefix + "Format"], f.format), S = G(x) ? Bn(x, e, n) : (f[e.formatPrefix + "Formatter"] || f.formatter).call(e, f, e), C = f.rotation, n.styledMode || (y.color = T(f.color, y.color, c(t.color) ? t.color : void 0, "var(--highcharts-neutral-color-100)"), y.color === "contrast" ? (h !== "none" && (O = h), e.contrastColor = i.getContrast(O !== "auto" && O !== "contrast" && c(O) && O || (c(l) ? l : "")), y.color = O && O !== "contrast" || f.inside || ae(v || 0) < 0 || r.stacking ? e.contrastColor : u) : delete e.contrastColor, r.cursor && (y.cursor = r.cursor)), w = {
					r: f.borderRadius ?? 3,
					rotation: C,
					padding: b[0],
					paddingLeft: b[3 % b.length],
					paddingRight: b[1 % b.length],
					zIndex: 1
				}, n.styledMode || (w.fill = h === "auto" ? e.color : h, w.stroke = g === "auto" ? e.color : g, w["stroke-width"] = f.borderWidth), s(w, (e, t) => {
					e === void 0 && delete w[t];
				})), E && (!m || !G(S) || !!(E.div || E.text?.foreignObject) != !!f.useHTML || (!E.rotation || !f.rotation) && E.rotation !== f.rotation) && (E = void 0, D = !0), m && G(S) && S !== "" && (E ? w.text = S : (E = i.label(S, 0, 0, f.shape, void 0, void 0, f.useHTML, void 0, "data-label"), E.addClass(" highcharts-data-label-color-" + e.colorIndex + " " + (f.className || "") + (f.useHTML ? " highcharts-tracker" : ""))), E)) {
					E.options = f, E.attr(w), n.styledMode ? y.width && E.css({
						width: y.width,
						textOverflow: y.textOverflow,
						whiteSpace: y.whiteSpace
					}) : E.css(y).shadow(f.shadow), z(E, "beforeAddingDataLabel", {
						labelOptions: f,
						point: e
					});
					let r = d[p] = d[p] || this.initDataLabels(p, _, f);
					E.added || E.add(r), t.alignDataLabel(e, E, f, void 0, D), E.isActive = !0, a[p] && a[p] !== E && a[p].destroy(), a[p] = E;
				}
			});
			let p = a.length;
			for (; p--;) a[p]?.isActive ? a[p].isActive = !1 : (a[p]?.destroy(), a.splice(p, 1));
			e.dataLabel = a[0], e.dataLabels = a;
		}), z(this, "afterDrawDataLabels");
	}
	function m(e, t, n, r, i, a) {
		let o = this.chart, { align: s, verticalAlign: c } = t, { distX: l = 0, distY: u = 0 } = e, d = e.box ? 0 : e.padding || 0, f = o.inverted ? this.yAxis : this.xAxis, p = f ? f.left - o.plotLeft : 0, m = o.inverted ? this.xAxis : this.yAxis, h = m ? m.top - o.plotTop : 0, { x: g = 0, y: _ = 0 } = t, v, y, b;
		return v = (n.x || 0) - l + d + p, v < 0 && (s === "right" && g >= 0 ? (t.align = "left", t.inside = !0, g -= l) : g -= v, y = !0), v = (n.x || 0) + r.width - l - d + p, v > o.plotWidth && (s === "left" && g <= 0 ? (t.align = "right", t.inside = !0, g -= l) : g += o.plotWidth - v, y = !0), v = (n.y || 0) - u + d + h, v < 0 && (c === "bottom" && _ >= 0 ? (t.verticalAlign = "top", t.inside = !0, _ -= u) : _ -= v, b = !0), v = (n.y || 0) + r.height - u - d + h, v > o.plotHeight && (c === "top" && _ <= 0 ? (t.verticalAlign = "bottom", t.inside = !0, _ -= u) : _ += o.plotHeight - v, b = !0), (y || b) && (t.x = y ? g : g + l, t.y = b ? _ : _ + u, e.placed = !a, e.align(t, void 0, i)), y || b;
	}
	function h(e, t) {
		let n = [], r;
		if (l(e) && !l(t)) n = e.map(function(e) {
			return x(e, t);
		});
		else if (l(t) && !l(e)) n = t.map(function(t) {
			return x(e, t);
		});
		else if (!l(e) && !l(t)) n = x(e, t);
		else if (l(e) && l(t)) for (r = Math.max(e.length, t.length); r--;) n[r] = x(e[r], t[r]);
		return n;
	}
	function g(e) {
		let t = e.chart.options.plotOptions;
		return N(h(h(t?.series?.dataLabels, t?.[e.type]?.dataLabels), e.options.dataLabels));
	}
})(Vn ||= {});
var Hn = Vn, { composed: Un } = H, { series: Wn } = J, Gn;
(function(e) {
	function t(e, t, n, r, i) {
		let { chart: a, options: o } = this, s = a.inverted, c = this.xAxis?.len || a.plotSizeX || 0, l = this.yAxis?.len || a.plotSizeY || 0, u = e.dlBox || e.shapeArgs, d = e.below ?? (e.plotY || 0) > (this.translatedThreshold ?? l), f = n.inside ?? !!o.stacking;
		if (u) {
			if (r = x(u), n.overflow !== "allow" || n.crop !== !1 || o.clip !== !1) {
				r.y < 0 && (r.height += r.y, r.y = 0);
				let e = r.y + r.height - l;
				e > 0 && e < r.height - 1 && (r.height -= e);
			}
			s && (r = {
				x: l - r.y - r.height,
				y: c - r.x - r.width,
				width: r.height,
				height: r.width
			}), f || (s ? (r.x += d ? 0 : r.width, r.width = 0) : (r.y += d ? r.height : 0, r.height = 0));
		}
		n.align ??= !s || f ? "center" : d ? "right" : "left", n.verticalAlign ??= s || f ? "middle" : d ? "top" : "bottom", Wn.prototype.alignDataLabel.call(this, e, t, n, r, i), n.inside && e.contrastColor && t.css({ color: e.contrastColor });
	}
	function n(e) {
		Hn.compose(Wn), w(Un, "ColumnDataLabel") && (e.prototype.alignDataLabel = t);
	}
	e.compose = n;
})(Gn ||= {});
var Kn = Gn, qn = class extends _e {};
qn.defaultOptions = x(_e.defaultOptions, {}), a(qn.prototype, { inverted: !0 }), J.registerSeriesType("bar", qn);
//#endregion
//#region node_modules/highcharts/es-modules/Series/Scatter/ScatterSeriesDefaults.js
var Jn = {
	lineWidth: 0,
	findNearestPointBy: "xy",
	jitter: {
		x: 0,
		y: 0
	},
	marker: { enabled: !0 },
	tooltip: {
		headerFormat: "<span style=\"color:{point.color}\">●</span> <span style=\"font-size: 0.8em\"> {series.name}</span><br/>",
		pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
	}
}, { column: Yn, line: Xn } = J.seriesTypes, Zn = class extends Xn {
	applyJitter() {
		let e = this, t = this.options.jitter, n = this.points.length;
		function r(e) {
			let t = Math.sin(e) * 1e4;
			return t - Math.floor(t);
		}
		t && this.points.forEach(function(i, a) {
			["x", "y"].forEach(function(o, s) {
				if (t[o] && !i.isNull) {
					let c = `plot${o.toUpperCase()}`, l = e[`${o}Axis`], u = t[o] * l.transA;
					if (l && !l.logarithmic) {
						let e = Math.max(0, (i[c] || 0) - u);
						i[c] = e + (Math.min(l.len, (i[c] || 0) + u) - e) * r(a + s * n), o === "x" && (i.clientX = i.plotX);
					}
				}
			});
		});
	}
	drawGraph() {
		this.options.lineWidth ? super.drawGraph() : this.graph &&= this.graph.destroy();
	}
};
Zn.defaultOptions = x(Xn.defaultOptions, Jn), a(Zn.prototype, {
	allowOutsidePlotInteraction: !0,
	drawTracker: Yn.prototype.drawTracker,
	sorted: !1,
	requireSorting: !1,
	noSharedTooltip: !0,
	trackerGroups: [
		"group",
		"markerGroup",
		"dataLabelsGroup"
	]
}), P(Zn, "afterTranslate", function() {
	this.applyJitter();
}), J.registerSeriesType("scatter", Zn);
//#endregion
//#region node_modules/highcharts/es-modules/Series/Pie/PiePoint.js
var { setAnimation: Qn } = B, $n = class extends pe {
	getConnectorPath(e) {
		let t = e.dataLabelPosition, n = e.options || {}, r = n.connectorShape, i = this.connectorShapes[r] || r;
		return t && i.call(this, {
			...t.computed,
			alignment: t.alignment
		}, t.connectorPosition, n) || [];
	}
	getTranslate() {
		return this.sliced && this.slicedTranslation || {
			translateX: 0,
			translateY: 0
		};
	}
	haloPath(e) {
		let t = this.shapeArgs;
		return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(t.x, t.y, t.r + e, t.r + e, {
			innerR: t.r - 1,
			start: t.start,
			end: t.end,
			borderRadius: t.borderRadius
		});
	}
	constructor(e, t, n) {
		super(e, t, n), this.half = 0, this.name ??= e.chart.options.lang.pieSliceName;
		let r = (e) => {
			this.slice(e.type === "select");
		};
		P(this, "select", r), P(this, "unselect", r);
	}
	isValid() {
		return n(this.y) && this.y >= 0;
	}
	setVisible(e, t = !0) {
		e !== this.visible && this.update({ visible: e ?? !this.visible }, t, void 0, !1);
	}
	slice(e, t, n) {
		let r = this.series, i = r.chart;
		Qn(n, i), t = T(t, !0), this.sliced = this.options.sliced = e ?? !this.sliced, r.options.data && (r.options.data[r.data.indexOf(this)] = this.options), this.graphic?.animate(this.getTranslate());
	}
};
a($n.prototype, { connectorShapes: {
	fixedOffset: function(e, t, n) {
		let r = t.breakAt, i = t.touchingSliceAt, a = n.softConnector ? [
			"C",
			e.x + (e.alignment === "left" ? -5 : 5),
			e.y,
			2 * r.x - i.x,
			2 * r.y - i.y,
			r.x,
			r.y
		] : [
			"L",
			r.x,
			r.y
		];
		return [
			[
				"M",
				e.x,
				e.y
			],
			a,
			[
				"L",
				i.x,
				i.y
			]
		];
	},
	straight: function(e, t) {
		let n = t.touchingSliceAt;
		return [[
			"M",
			e.x,
			e.y
		], [
			"L",
			n.x,
			n.y
		]];
	},
	crookedLine: function(e, t, n) {
		let { angle: r = this.angle || 0, breakAt: i, touchingSliceAt: a } = t, { series: o } = this, [s, c, l] = o.center, u = l / 2, { plotLeft: d, plotWidth: f } = o.chart, p = e.alignment === "left", { x: m, y: h } = e, g = i.x;
		if (n.crookDistance) {
			let e = E(n.crookDistance, 1);
			g = p ? s + u + (f + d - s - u) * (1 - e) : d + (s - u) * e;
		} else g = s + (c - h) * Math.tan(r - Math.PI / 2);
		let _ = [[
			"M",
			m,
			h
		]];
		return (p ? g <= m && g >= i.x : g >= m && g <= i.x) && _.push([
			"L",
			g,
			h
		]), _.push([
			"L",
			i.x,
			i.y
		], [
			"L",
			a.x,
			a.y
		]), _;
	}
} });
//#endregion
//#region node_modules/highcharts/es-modules/Series/Pie/PieSeriesDefaults.js
var er = {
	borderRadius: 3,
	center: [null, null],
	clip: !1,
	colorByPoint: !0,
	dataLabels: {
		connectorPadding: 5,
		connectorShape: "crookedLine",
		crookDistance: void 0,
		distance: 30,
		enabled: !0,
		formatter: function() {
			return this.isNull ? void 0 : this.name;
		},
		softConnector: !0,
		x: 0
	},
	fillColor: void 0,
	ignoreHiddenPoint: !0,
	inactiveOtherPoints: !0,
	legendType: "point",
	marker: null,
	size: null,
	showInLegend: !1,
	slicedOffset: 10,
	stickyTracking: !1,
	tooltip: { followPointer: !0 },
	borderColor: "var(--highcharts-background-color)",
	borderWidth: 1,
	lineWidth: void 0,
	states: { hover: { brightness: .1 } }
}, { getStartAndEndRadians: tr } = be, { noop: nr } = H, rr = class extends ye {
	animate(e) {
		let t = this, n = t.points, r = t.startAngleRad;
		e || n.forEach(function(e) {
			let n = e.graphic, i = e.shapeArgs;
			n && i && (n.attr({
				r: T(e.startR, t.center && t.center[3] / 2),
				start: r,
				end: r
			}), n.animate({
				r: i.r,
				start: i.start,
				end: i.end
			}, t.options.animation));
		});
	}
	drawEmpty() {
		let e = this.startAngleRad, t = this.endAngleRad, n = this.options, r, i;
		this.total === 0 && this.center ? (r = this.center[0], i = this.center[1], this.graph ||= this.chart.renderer.arc(r, i, this.center[1] / 2, 0, e, t).addClass("highcharts-empty-series").add(this.group), this.graph.attr({ d: ze.arc(r, i, this.center[2] / 2, 0, {
			start: e,
			end: t,
			innerR: this.center[3] / 2
		}) }), this.chart.styledMode || this.graph.attr({
			"stroke-width": n.borderWidth,
			fill: n.fillColor || "none",
			stroke: n.color || "var(--highcharts-neutral-color-20)"
		})) : this.graph &&= this.graph.destroy();
	}
	drawPoints() {
		let e = this.chart.renderer;
		this.points.forEach(function(t) {
			t.graphic && t.hasNewShapeType() && (t.graphic = t.graphic.destroy()), t.graphic || (t.graphic = e[t.shapeType](t.shapeArgs).add(t.series.group), t.delayedRendering = !0);
		});
	}
	generatePoints() {
		super.generatePoints(), this.updateTotals();
	}
	getXPos(e, t, n, r) {
		let i = this.center, a = this.radii ? this.radii[n.index] || 0 : i[2] / 2, o = r.dataLabelPosition?.distance || 0, s = Math.asin(F((e - i[1]) / (a + o), -1, 1));
		return i[0] + (t ? -1 : 1) * (Math.cos(s) * (a + o)) + (o > 0 ? t ? -5 : 5 : 0);
	}
	hasData() {
		return this.points.some((e) => e.visible);
	}
	redrawPoints() {
		let e = this, t = e.chart, n, r, i, a;
		this.drawEmpty(), e.group && !t.styledMode && e.group.shadow(e.options.shadow), e.points.forEach(function(o) {
			let s = {};
			r = o.graphic, !o.isNull && r ? (a = o.shapeArgs, n = o.getTranslate(), t.styledMode || (i = e.pointAttribs(o, o.selected && "select")), o.delayedRendering ? (r.setRadialReference(e.center).attr(a).attr(n), t.styledMode || r.attr(i).attr({ "stroke-linejoin": "round" }), o.delayedRendering = !1) : (r.setRadialReference(e.center), t.styledMode || x(!0, s, i), x(!0, s, a, n), r.animate(s)), r.attr({ visibility: o.visible ? "inherit" : "hidden" }), r.addClass(o.getClassName(), !0)) : r && (o.graphic = r.destroy());
		});
	}
	sortByAngle(e, t) {
		e.sort(function(e, n) {
			return e.angle !== void 0 && (n.angle - e.angle) * t;
		});
	}
	translate(e) {
		z(this, "translate"), this.generatePoints();
		let t = this, n = t.options, r = n.slicedOffset, i = tr(n.startAngle, n.endAngle), a = t.startAngleRad = i.start, o = (t.endAngleRad = i.end) - a, s = t.points, c = n.ignoreHiddenPoint, l = s.length, u, d, f, p, m, h, g, _ = 0;
		for (e || (t.center = e = t.getCenter()), h = 0; h < l; h++) {
			g = s[h], u = a + _ * o, g.isValid() && (!c || g.visible) && (_ += g.percentage / 100), d = a + _ * o;
			let t = {
				x: e[0],
				y: e[1],
				r: e[2] / 2,
				innerR: e[3] / 2,
				start: u,
				end: d
			};
			g.shapeType = "arc", g.shapeArgs = t, f = (d + u) / 2, f > 1.5 * Math.PI ? f -= 2 * Math.PI : f < -Math.PI / 2 && (f += 2 * Math.PI), g.slicedTranslation = {
				translateX: Math.round(Math.cos(f) * r),
				translateY: Math.round(Math.sin(f) * r)
			}, p = Math.cos(f) * e[2] / 2, m = Math.sin(f) * e[2] / 2, g.tooltipPos = [e[0] + p * .7, e[1] + m * .7], g.half = +(f < -Math.PI / 2 || f > Math.PI / 2), g.angle = f;
		}
		z(t, "afterTranslate");
	}
	updateTotals() {
		let e = this.points, t = e.length, n = this.options.ignoreHiddenPoint, r, i, a = 0;
		for (r = 0; r < t; r++) i = e[r], i.isValid() && (!n || i.visible) && (a += i.y);
		for (this.total = a, r = 0; r < t; r++) i = e[r], i.percentage = a > 0 && (i.visible || !n) ? i.y / a * 100 : 0, i.total = a;
	}
};
rr.defaultOptions = x(ye.defaultOptions, er), a(rr.prototype, {
	axisTypes: [],
	directTouch: !0,
	drawGraph: void 0,
	drawTracker: _e.prototype.drawTracker,
	getCenter: be.getCenter,
	getSymbol: nr,
	invertible: !1,
	isCartesian: !1,
	noSharedTooltip: !0,
	pointAttribs: _e.prototype.pointAttribs,
	pointClass: $n,
	requireSorting: !1,
	searchPoint: nr,
	trackerGroups: ["group", "dataLabelsGroup"]
}), J.registerSeriesType("pie", rr);
//#endregion
//#region node_modules/highcharts/es-modules/Series/Pie/PieDataLabel.js
var { composed: ir, noop: ar } = H, { distribute: or } = we, { series: sr } = J, cr;
(function(e) {
	let t = {
		radialDistributionY: function(e, t) {
			return (t.dataLabelPosition?.top || 0) + e.distributeBox.pos;
		},
		radialDistributionX: function(e, t, n, r, i) {
			let a = i.dataLabelPosition;
			return e.getXPos(n < (a?.top || 0) + 2 || n > (a?.bottom || 0) - 2 ? r : n, t.half, t, i);
		},
		justify: function(e, t, n, r) {
			return r[0] + (e.half ? -1 : 1) * (n + (t.dataLabelPosition?.distance || 0));
		},
		alignToPlotEdges: function(e, t, n, r) {
			let i = e.getBBox().width;
			return t ? i + r : n - i - r;
		},
		alignToConnectors: function(e, t, n, r) {
			let i = 0, a;
			return e.forEach(function(e) {
				a = e.dataLabel.getBBox().width, a > i && (i = a);
			}), t ? i + r : n - i - r;
		}
	};
	function r(e) {
		if (Hn.compose(sr), w(ir, "PieDataLabel")) {
			let n = e.prototype;
			n.dataLabelPositioners = t, n.alignDataLabel = ar, n.drawDataLabels = a, n.getDataLabelPosition = i, n.placeDataLabels = o, n.verifyDataLabelOverflow = s;
		}
	}
	e.compose = r;
	function i(e, t) {
		let n = Math.PI / 2, { start: r = 0, end: i = 0 } = e.shapeArgs || {}, a = e.angle || 0;
		t > 0 && r < n && i > n && a > n / 2 && a < n * 1.5 && (a = a <= n ? Math.max(n / 2, (r + n) / 2) : Math.min(n * 1.5, (n + i) / 2));
		let { center: o, options: s } = this, c = o[2] / 2, l = Math.cos(a), u = Math.sin(a), d = o[0] + l * c, f = o[1] + u * c, p = Math.min((s.slicedOffset || 0) + (s.borderWidth || 0), t / 5);
		return {
			natural: {
				x: d + l * t,
				y: f + u * t
			},
			computed: {},
			alignment: t < 0 ? "center" : e.half ? "right" : "left",
			connectorPosition: {
				angle: a,
				breakAt: {
					x: d + l * p,
					y: f + u * p
				},
				touchingSliceAt: {
					x: d,
					y: f
				}
			},
			distance: t
		};
	}
	function a() {
		let e = this, t = e.points, r = e.chart, i = r.plotWidth, a = r.plotHeight, o = r.plotLeft, s = Math.round(r.chartWidth / 3), c = e.center, l = c[2] / 2, u = c[1], d = [[], []], f = [
			0,
			0,
			0,
			0
		], p = e.dataLabelPositioners, m, h, g, _ = 0;
		!e.visible || !e.hasDataLabels?.() || (t.forEach((e) => {
			(e.dataLabels || []).forEach((e) => {
				e.shortened &&= (e.attr({ width: "auto" }).css({
					width: "auto",
					textOverflow: "clip"
				}), !1);
			});
		}), sr.prototype.drawDataLabels.apply(e), t.forEach((e) => {
			(e.dataLabels || []).forEach((t, n) => {
				let r = c[2] / 2, i = t.options, a = E(i?.distance || 0, r);
				n === 0 && d[e.half].push(e), G(i?.style?.width) || t.getBBox().width > s && (t.css({ width: Math.round(s * .7) + "px" }), t.shortened = !0), t.dataLabelPosition = this.getDataLabelPosition(e, a), _ = Math.max(_, a);
			});
		}), d.forEach((t, n) => {
			let s = t.length, d = [], m, v, y = 0, b;
			s && (e.sortByAngle(t, n - .5), _ > 0 && (m = Math.max(0, u - l - _), v = Math.min(u + l + _, r.plotHeight), t.forEach((e) => {
				(e.dataLabels || []).forEach((t) => {
					let n = t.dataLabelPosition;
					n && n.distance > 0 && (n.top = Math.max(0, u - l - n.distance), n.bottom = Math.min(u + l + n.distance, r.plotHeight), y = t.getBBox().height || 21, t.lineHeight = r.renderer.fontMetrics(t.text || t).h + 2 * t.padding, e.distributeBox = {
						target: (t.dataLabelPosition?.natural.y || 0) - n.top + t.lineHeight / 2,
						size: y,
						rank: e.y
					}, d.push(e.distributeBox));
				});
			}), b = v + y - m, or(d, b, b / 5)), t.forEach((r) => {
				(r.dataLabels || []).forEach((s) => {
					let u = s.options || {}, m = r.distributeBox, _ = s.dataLabelPosition, v = _?.natural.y || 0, y = u.connectorPadding || 0, b = s.lineHeight || 21, x = (b - s.getBBox().height) / 2, S = 0, C = v, w = "inherit";
					if (_) {
						if (d && G(m) && _.distance > 0 && (m.pos === void 0 ? w = "hidden" : (g = m.size, C = p.radialDistributionY(r, s))), u.justify) S = p.justify(r, s, l, c);
						else switch (u.alignTo) {
							case "connectors":
								S = p.alignToConnectors(t, n, i, o);
								break;
							case "plotEdges":
								S = p.alignToPlotEdges(s, n, i, o);
								break;
							default: S = p.radialDistributionX(e, r, C - x, v, s);
						}
						if (_.attribs = {
							visibility: w,
							align: _.alignment
						}, _.posAttribs = {
							x: S + (u.x || 0) + ({
								left: y,
								right: -y
							}[_.alignment] || 0),
							y: C + (u.y || 0) - b / 2
						}, _.computed.x = S, _.computed.y = C - x, T(u.crop, !0)) {
							h = s.getBBox().width;
							let e;
							S - h < y && n === 1 ? (e = Math.round(h - S + y), f[3] = Math.max(e, f[3])) : S + h > i - y && n === 0 && (e = Math.round(S + h - i + y), f[1] = Math.max(e, f[1])), C - g / 2 < 0 ? f[0] = Math.max(Math.round(-C + g / 2), f[0]) : C + g / 2 > a && (f[2] = Math.max(Math.round(C + g / 2 - a), f[2])), _.sideOverflow = e;
						}
					}
				});
			}));
		}), (ie(f) === 0 || this.verifyDataLabelOverflow(f)) && (this.placeDataLabels(), this.points.forEach((t) => {
			t.dataLabels?.forEach((i, a) => {
				let { connectorColor: o, connectorWidth: s = 1 } = i.options || {}, c = i.dataLabelPosition;
				if (n(s)) {
					let n;
					m = i.connector, c && c.distance > 0 ? (n = !m, m || (i.connector = m = r.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + t.colorIndex + (t.className ? " " + t.className : "")).add(e.dataLabelsGroups?.[a])), r.styledMode || m.attr({
						"stroke-width": s,
						stroke: o || t.color || "var(--highcharts-neutral-color-60)"
					}), m[n ? "attr" : "animate"]({ d: t.getConnectorPath(i) }), m.attr({ visibility: c.attribs?.visibility })) : m && (i.connector = m.destroy());
				}
			});
		})));
	}
	function o() {
		this.points.forEach((e) => {
			(e.dataLabels || []).forEach((e) => {
				let t = e.dataLabelPosition;
				t ? (t.sideOverflow && (e.css({
					width: Math.max(e.getBBox().width - t.sideOverflow, 0) + "px",
					textOverflow: e.options?.style?.textOverflow || "ellipsis"
				}), e.shortened = !0), e.attr(t.attribs), e[e.moved ? "animate" : "attr"](t.posAttribs), e.moved = !0) : e && e.attr({ y: -9999 });
			}), delete e.distributeBox;
		}, this);
	}
	function s(e) {
		let t = this.center, n = this.options, r = n.center, i = n.minSize || 80, a = i, o = n.size !== null;
		return o || (r[0] === null ? (a = Math.max(t[2] - e[1] - e[3], i), t[0] += (e[3] - e[1]) / 2) : a = Math.max(t[2] - Math.max(e[1], e[3]), i), r[1] === null ? (a = F(a, i, t[2] - e[0] - e[2]), t[1] += (e[0] - e[2]) / 2) : a = F(a, i, t[2] - Math.max(e[0], e[2])), a < t[2] ? (t[2] = a, t[3] = Math.min(n.thickness ? Math.max(0, a - n.thickness * 2) : Math.max(0, E(n.innerSize || 0, a)), a), this.translate(t), this.drawDataLabels && this.drawDataLabels()) : o = !0), o;
	}
})(cr ||= {});
var lr = cr, ur;
(function(e) {
	function t(e) {
		let t = e.reduce((e, t) => (e.x += t.x, e.y += t.y, e), {
			x: 0,
			y: 0
		});
		return {
			x: t.x / e.length,
			y: t.y / e.length
		};
	}
	e.getCenterOfPoints = t;
	function n(e, t) {
		return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
	}
	e.getDistanceBetweenPoints = n;
	function r(e, t) {
		return Math.atan2(t.x - e.x, t.y - e.y);
	}
	e.getAngleBetweenPoints = r;
	function i({ x: e, y: t }, n) {
		let r = n.length, i, a, o = !1;
		for (i = 0, a = r - 1; i < r; a = i++) {
			let [r, s] = n[i], [c, l] = n[a];
			s > t != l > t && e < (c - r) * (t - s) / (l - s) + r && (o = !o);
		}
		return o;
	}
	e.pointInPolygon = i;
})(ur ||= {});
//#endregion
//#region node_modules/highcharts/es-modules/Core/Series/OverlappingDataLabels.js
var { pointInPolygon: dr } = ur;
function fr(e) {
	let n = this, r = e.length, i = (e, t) => !(t.x >= e.x + e.width || t.x + t.width <= e.x || t.y >= e.y + e.height || t.y + t.height <= e.y), a = (e, t) => {
		for (let n of e) if (dr({
			x: n[0],
			y: n[1]
		}, t)) return !0;
		return !1;
	};
	function o(e) {
		if (e && (!e.alignAttr || e.placed)) {
			let n = e.box ? 0 : e.padding || 0, r = e.dataLabelPosition?.posAttribs || e.alignAttr || {
				x: e.attr("x"),
				y: e.attr("y")
			}, { height: i, polygon: a, width: o } = e.getBBox(), s = t(e.alignValue) * o;
			return e.width = o, e.height = i, {
				x: r.x + (e.parentGroup?.translateX || 0) + n - s,
				y: r.y + (e.parentGroup?.translateY || 0) + n,
				width: o - 2 * n,
				height: i - 2 * n,
				polygon: a
			};
		}
	}
	let s, c, l, u, d, f = !1;
	for (let t = 0; t < r; t++) s = e[t], s && (s.oldOpacity = s.opacity, s.newOpacity = 1, s.absoluteBox = o(s));
	e.sort((e, t) => (t?.labelrank || 0) - (e?.labelrank || 0));
	for (let t = 0; t < r; ++t) {
		c = e[t], u = c && c.absoluteBox;
		let n = u?.polygon;
		for (let o = t + 1; o < r; ++o) {
			l = e[o], d = l && l.absoluteBox;
			let t = !1;
			if (u && d && c !== l && c?.newOpacity !== 0 && l?.newOpacity !== 0 && c?.visibility !== "hidden" && l?.visibility !== "hidden") {
				let e = d.polygon;
				if (n && e && n !== e ? a(n, e) && (t = !0) : i(u, d) && (t = !0), t) {
					let e = c?.labelrank < l?.labelrank ? c : l, t = e?.text;
					e && (e.newOpacity = 0), t?.element.querySelector("textPath") && t.hide();
				}
			}
		}
	}
	for (let t of e) t && mr(t, n) && (f = !0);
	f && z(n, "afterHideAllOverlappingLabels");
}
function pr(e) {
	let t = e.prototype;
	t.hideOverlappingLabels || (t.hideOverlappingLabels = fr, P(e, "render", hr));
}
function mr(e, t) {
	let n, r, i = !1;
	return e && (r = e.newOpacity, e.oldOpacity !== r && (e.hasClass("highcharts-data-label") ? (e[r ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), n = function() {
		t.styledMode || e.css({ pointerEvents: r ? "auto" : "none" });
	}, i = !0, e[e.isOld || e.placed ? "animate" : "attr"]({ opacity: r }, void 0, n), z(t, "afterHideOverlappingLabel")) : e.attr({ opacity: r })), e.isOld = !0), i;
}
function hr() {
	let e = this, t = [];
	for (let n of e.labelCollectors || []) t = t.concat(n());
	for (let n of e.yAxis || []) n.stacking && n.options.stackLabels && !n.options.stackLabels.allowOverlap && s(n.stacking.stacks, (e) => {
		s(e, (e) => {
			e.label && t.push(e.label);
		});
	});
	for (let n of e.series || []) if (n.visible && n.hasDataLabels?.()) {
		let r = (r) => {
			for (let i of r) i.visible && (i.dataLabels || []).forEach((r) => {
				let a = r.options || {};
				r.labelrank = T(a.labelrank, i.labelrank, i.shapeArgs?.height), a.allowOverlap ?? (n.is("pie") && Number(a.distance) > 0) ? (r.oldOpacity = r.opacity, r.newOpacity = 1, mr(r, e)) : t.push(r);
			});
		};
		r(n.nodes || []), r(n.points);
	}
	this.hideOverlappingLabels(t);
}
//#endregion
//#region node_modules/highcharts/es-modules/Core/Responsive.js
var gr;
(function(e) {
	function t(e) {
		let t = e.prototype;
		return t.matchResponsiveRule || a(t, {
			matchResponsiveRule: n,
			setResponsive: i
		}), e;
	}
	e.compose = t;
	function n(e, t) {
		let n = e.condition;
		(n.callback || function() {
			return this.chartWidth <= T(n.maxWidth, Number.MAX_VALUE) && this.chartHeight <= T(n.maxHeight, Number.MAX_VALUE) && this.chartWidth >= T(n.minWidth, 0) && this.chartHeight >= T(n.minHeight, 0);
		}).call(this, this) && t.push(e._id);
	}
	function i(e, t) {
		let n = this.options.responsive, i = this.currentResponsive, a = [], o;
		!t && n && n.rules && n.rules.forEach((e) => {
			e._id === void 0 && (e._id = le()), this.matchResponsiveRule(e, a);
		}, this);
		let s = x(...a.map((e) => h(n?.rules || [], (t) => t._id === e)).map((e) => e?.chartOptions));
		s.isResponsiveOptions = !0, a = a.toString() || void 0;
		let c = i?.ruleIds;
		a !== c && (i && (this.currentResponsive = void 0, this.updatingResponsive = !0, this.update(i.undoOptions, e, !0), this.updatingResponsive = !1), a ? (o = r(s, this.options, !0, this.collectionsWithUpdate), o.isResponsiveOptions = !0, this.currentResponsive = {
			ruleIds: a,
			mergedOptions: s,
			undoOptions: o
		}, this.updatingResponsive || this.update(s, e, !0)) : this.currentResponsive = void 0);
	}
})(gr ||= {});
var _r = gr, Y = H;
Y.AST = K, Y.Axis = bt, Y.Chart = dn, Y.Color = L, Y.DataLabel = Hn, Y.DataTable = ge, Y.DataTableCore = ge, Y.Fx = oe, Y.HTMLElement = ot, Y.Legend = Qt, Y.LegendSymbol = xe, Y.PlotLineOrBand = Dt, Y.Point = pe, Y.Pointer = Ut, Y.Series = ye, Y.SeriesRegistry = J, Y.StackItem = he, Y.SVGElement = me, Y.SVGRenderer = rt, Y.Templating = q, Y.Tick = dt, Y.Time = re, Y.Tooltip = Lt, Y.addEvent = P, Y.animObject = B.animObject, Y.animate = B.animate, Y.arrayMax = ie, Y.arrayMin = ne, Y.attr = I, Y.chart = dn.chart, Y.clamp = F, Y.color = L.parse, Y.correctFloat = D, Y.createElement = W, Y.css = A, Y.crisp = de, Y.dateFormat = q.dateFormat, Y.defaultOptions = O.defaultOptions, Y.defined = G, Y.destroyObjectProperties = y, Y.diffObjects = r, Y.discardElement = ue, Y.distribute = we.distribute, Y.erase = b, Y.error = U, Y.extend = a, Y.extendClass = i, Y.find = h, Y.fireEvent = z, Y.format = q.format, Y.getAlignFactor = t, Y.getClosestDistance = R, Y.getDeferredAnimation = B.getDeferredAnimation, Y.getMagnitude = p, Y.getNestedProperty = m, Y.getOptions = O.getOptions, Y.getStyle = g, Y.insertItem = j, Y.isArray = l, Y.isClass = f, Y.isDOMElement = v, Y.isFunction = fe, Y.isNumber = n, Y.isObject = S, Y.isString = c, Y.internalClearTimeout = o, Y.merge = x, Y.normalizeTickInterval = C, Y.numberFormat = q.numberFormat, Y.objectEach = s, Y.offset = d, Y.pad = u, Y.pick = T, Y.pushUnique = w, Y.pInt = ae, Y.relativeLength = E, Y.removeEvent = _, Y.replaceNested = e, Y.seriesType = J.seriesType, Y.setAnimation = B.setAnimation, Y.setOptions = O.setOptions, Y.splat = N, Y.stableSort = ce, Y.stop = B.stop, Y.syncTimeout = V, Y.time = O.defaultTime, Y.ucfirst = se, Y.timers = oe.timers, Y.timeUnits = te, Y.uniqueKey = le, Y.useSerialIds = M, Y.wrap = ee, Se(Y.Series, Y.SVGElement, Y.SVGRenderer), Kn.compose(Y.Series.types.column), Hn.compose(Y.Series), St.compose(Y.Axis), ot.compose(Y.SVGRenderer), Qt.compose(Y.Chart), wt.compose(Y.Axis), pr(Y.Chart), lr.compose(Y.Series.types.pie), Dt.compose(Y.Chart, Y.Axis), Ut.compose(Y.Chart), _r.compose(Y.Chart), gn.compose(Y.Axis, Y.Chart, Y.Series), kn.compose(Y.Axis, Y.Chart, Y.Series), Lt.compose(Y.Pointer);
//#endregion
//#region node_modules/highcharts/es-modules/Extensions/Themes/Adaptive.js
var { setOptions: vr } = O, yr = "\n        /* Colors for data series and points */\n        --highcharts-color-0: #2caffe;\n        --highcharts-color-1: #544fc5;\n        --highcharts-color-2: #00e272;\n        --highcharts-color-3: #fe6a35;\n        --highcharts-color-4: #6b8abc;\n        --highcharts-color-5: #d568fb;\n        --highcharts-color-6: #2ee0ca;\n        --highcharts-color-7: #fa4b42;\n        --highcharts-color-8: #feb56a;\n        --highcharts-color-9: #91e8e1;\n\n    /* Chart background, point stroke for markers and columns etc */\n    --highcharts-background-color: #ffffff;\n\n    /*\n    Neutral colors, grayscale by default. The default colors are defined by\n    mixing the background-color with neutral, with a weight corresponding to\n    the number in the name.\n\n    https://www.highcharts.com/samples/highcharts/css/palette-helper\n    */\n\n    /* Strong text. */\n    --highcharts-neutral-color-100: #000000;\n\n    /* Main text, axis labels and some strokes. */\n    --highcharts-neutral-color-80: #333333;\n\n    /* Axis title, connector fallback. */\n    --highcharts-neutral-color-60: #666666;\n\n    /* Credits text, export menu stroke. */\n    --highcharts-neutral-color-40: #999999;\n\n    /* Disabled texts, button strokes, crosshair etc. */\n    --highcharts-neutral-color-20: #cccccc;\n\n    /* Grid lines etc. */\n    --highcharts-neutral-color-10: #e6e6e6;\n\n    /* Minor grid lines etc. */\n    --highcharts-neutral-color-5: #f2f2f2;\n\n    /* Tooltip background, button fills, map null points. */\n    --highcharts-neutral-color-3: #f7f7f7;\n\n    /*\n    Highlights, shades of blue by default\n    */\n\n    /* Drilldown clickable labels, color axis max color. */\n    --highcharts-highlight-color-100: #0022ff;\n\n    /* Selection marker, menu hover, button hover, chart border, navigator\n    series. */\n    --highcharts-highlight-color-80: #334eff;\n\n    /* Navigator mask fill. */\n    --highcharts-highlight-color-60: #667aff;\n\n    /* Ticks and axis line. */\n    --highcharts-highlight-color-20: #ccd3ff;\n\n    /* Pressed button, color axis min color. */\n    --highcharts-highlight-color-10: #e6e9ff;\n\n    /* Indicators */\n    --highcharts-positive-color: #06b535;\n    --highcharts-negative-color: #f21313;\n\n    /* Transparent colors for annotations */\n    --highcharts-annotation-color-0: rgba(130, 170, 255, 0.4);\n    --highcharts-annotation-color-1: rgba(139, 191, 216, 0.4);\n    --highcharts-annotation-color-2: rgba(150, 216, 192, 0.4);\n    --highcharts-annotation-color-3: rgba(156, 229, 161, 0.4);\n    --highcharts-annotation-color-4: rgba(162, 241, 130, 0.4);\n    --highcharts-annotation-color-5: rgba(169, 255, 101, 0.4);\n", br = "\n    /* Colors for data series and points */\n    --highcharts-color-1: #00e272;\n    --highcharts-color-2: #efdf00;\n\n    /* UI colors */\n    --highcharts-background-color: #141414;\n\n    /*\n        Neutral color variations\n        https://www.highcharts.com/samples/highcharts/css/palette-helper\n    */\n    --highcharts-neutral-color-100: #ffffff;\n    --highcharts-neutral-color-80: #d0d0d0;\n    --highcharts-neutral-color-60: #a1a1a1;\n    --highcharts-neutral-color-40: #727272;\n    --highcharts-neutral-color-20: #434343;\n    --highcharts-neutral-color-10: #2c2c2c;\n    --highcharts-neutral-color-5: #202020;\n    --highcharts-neutral-color-3: #1b1b1b;\n\n    /* Highlight color variations */\n    --highcharts-highlight-color-100: #2caffe;\n    --highcharts-highlight-color-80: #2790cf;\n    --highcharts-highlight-color-60: #2271a0;\n    --highcharts-highlight-color-20: #193343;\n    --highcharts-highlight-color-10: #16242b;\n", xr = `
:root,
.highcharts-light {
    ${yr}
}

@media (prefers-color-scheme: dark) {
    :root {
        ${br}
    }
}

.highcharts-dark {
    ${br}
}

.highcharts-container {
    color-scheme: light dark;
}

.highcharts-light .highcharts-container {
    color-scheme: light;
}

.highcharts-dark .highcharts-container {
    color-scheme: dark;
}
`, Sr;
(function(e) {
	e.options = {
		colors: [
			"var(--highcharts-color-0)",
			"var(--highcharts-color-1)",
			"var(--highcharts-color-2)",
			"var(--highcharts-color-3)",
			"var(--highcharts-color-4)",
			"var(--highcharts-color-5)",
			"var(--highcharts-color-6)",
			"var(--highcharts-color-7)",
			"var(--highcharts-color-8)",
			"var(--highcharts-color-9)"
		],
		global: { buttonTheme: {
			fill: "var(--highcharts-neutral-color-3)",
			stroke: "var(--highcharts-neutral-color-20)",
			style: { color: "var(--highcharts-neutral-color-80)" },
			states: {
				hover: { fill: "var(--highcharts-neutral-color-10)" },
				select: {
					fill: "var(--highcharts-highlight-color-10)",
					style: { color: "var(--highcharts-neutral-color-100)" }
				},
				disabled: { style: { color: "var(--highcharts-neutral-color-20)" } }
			}
		} },
		chart: {
			borderColor: "var(--highcharts-highlight-color-80)",
			backgroundColor: "var(--highcharts-background-color)",
			plotBorderColor: "var(--highcharts-neutral-color-20)"
		},
		title: { style: { color: "var(--highcharts-neutral-color-80)" } },
		subtitle: { style: { color: "var(--highcharts-neutral-color-60)" } },
		caption: { style: { color: "var(--highcharts-neutral-color-60)" } },
		plotOptions: {
			line: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			area: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			spline: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			areaspline: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			column: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			bar: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			scatter: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			pie: { borderColor: "var(--highcharts-background-color)" },
			hlc: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			ohlc: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			candlestick: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)",
				lineColor: "var(--highcharts-neutral-color-100)",
				upColor: "var(--highcharts-background-color)"
			},
			flags: {
				states: {
					hover: {
						lineColor: "var(--highcharts-neutral-color-100)",
						fillColor: "var(--highcharts-highlight-color-20)"
					},
					select: {
						color: "var(--highcharts-neutral-color-20)",
						borderColor: "var(--highcharts-neutral-color-100)"
					}
				},
				borderColor: "var(--highcharts-background-color)",
				fillColor: "var(--highcharts-background-color)",
				style: { color: "var(--highcharts-neutral-color-100)" }
			},
			arearange: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			areasplinerange: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			boxplot: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)",
				fillColor: "var(--highcharts-background-color)"
			},
			bubble: { marker: { states: { select: {
				fillColor: "var(--highcharts-neutral-color-20)",
				lineColor: "var(--highcharts-neutral-color-100)"
			} } } },
			columnrange: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			columnpyramid: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			errorbar: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)",
				fillColor: "var(--highcharts-background-color)",
				color: "var(--highcharts-neutral-color-100)"
			},
			gauge: {
				marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				},
				dataLabels: { borderColor: "var(--highcharts-neutral-color-20)" },
				dial: {
					backgroundColor: "var(--highcharts-neutral-color-100)",
					borderColor: "var(--highcharts-neutral-color-20)"
				},
				pivot: {
					borderColor: "var(--highcharts-neutral-color-100)",
					backgroundColor: "var(--highcharts-background-color)"
				}
			},
			packedbubble: { marker: { states: { select: {
				fillColor: "var(--highcharts-neutral-color-20)",
				lineColor: "var(--highcharts-neutral-color-100)"
			} } } },
			polygon: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			waterfall: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-neutral-color-80)",
				lineColor: "var(--highcharts-neutral-color-80)"
			},
			scatter3d: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			map: {
				states: {
					hover: { borderColor: "var(--highcharts-neutral-color-60)" },
					select: { color: "var(--highcharts-neutral-color-20)" }
				},
				nullColor: "var(--highcharts-neutral-color-3)",
				borderColor: "var(--highcharts-neutral-color-10)"
			},
			mapline: {
				states: {
					hover: { borderColor: "var(--highcharts-neutral-color-60)" },
					select: { color: "var(--highcharts-neutral-color-20)" }
				},
				nullColor: "var(--highcharts-neutral-color-3)",
				borderColor: "var(--highcharts-neutral-color-10)"
			},
			mappoint: {
				marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				},
				dataLabels: { style: { color: "var(--highcharts-neutral-color-100)" } }
			},
			mapbubble: { marker: { states: { select: {
				fillColor: "var(--highcharts-neutral-color-20)",
				lineColor: "var(--highcharts-neutral-color-100)"
			} } } },
			heatmap: {
				marker: { states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} } },
				nullColor: "var(--highcharts-neutral-color-3)"
			},
			xrange: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			gantt: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			sankey: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			dependencywheel: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			funnel: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			pyramid: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			histogram: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-background-color)"
			},
			bellcurve: { marker: {
				lineColor: "var(--highcharts-background-color)",
				states: { select: {
					fillColor: "var(--highcharts-neutral-color-20)",
					lineColor: "var(--highcharts-neutral-color-100)"
				} }
			} },
			item: {
				marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				},
				borderColor: "var(--highcharts-background-color)"
			},
			organization: {
				states: { select: {
					color: "var(--highcharts-neutral-color-20)",
					borderColor: "var(--highcharts-neutral-color-100)"
				} },
				borderColor: "var(--highcharts-neutral-color-60)",
				link: { color: "var(--highcharts-neutral-color-60)" }
			},
			solidgauge: {
				marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				},
				dataLabels: { borderColor: "var(--highcharts-neutral-color-20)" },
				dial: {
					backgroundColor: "var(--highcharts-neutral-color-100)",
					borderColor: "var(--highcharts-neutral-color-20)"
				},
				pivot: {
					borderColor: "var(--highcharts-neutral-color-20)",
					backgroundColor: "var(--highcharts-neutral-color-100)"
				}
			},
			timeline: {
				marker: {
					lineColor: "var(--highcharts-background-color)",
					states: { select: {
						fillColor: "var(--highcharts-neutral-color-20)",
						lineColor: "var(--highcharts-neutral-color-100)"
					} }
				},
				dataLabels: {
					backgroundColor: "var(--highcharts-background-color)",
					borderColor: "var(--highcharts-neutral-color-40)",
					color: "var(--highcharts-neutral-color-80)"
				}
			},
			treemap: {
				states: { hover: { borderColor: "var(--highcharts-neutral-color-40)" } },
				borderColor: "var(--highcharts-neutral-color-10)"
			},
			sunburst: {
				states: { hover: { borderColor: "var(--highcharts-neutral-color-40)" } },
				borderColor: "var(--highcharts-neutral-color-10)"
			},
			treegraph: {
				states: { hover: { borderColor: "var(--highcharts-neutral-color-40)" } },
				borderColor: "var(--highcharts-neutral-color-10)",
				link: { color: "var(--highcharts-neutral-color-60)" }
			}
		},
		legend: {
			borderColor: "var(--highcharts-neutral-color-40)",
			navigation: {
				activeColor: "var(--highcharts-highlight-color-100)",
				inactiveColor: "var(--highcharts-neutral-color-20)"
			},
			itemStyle: { color: "var(--highcharts-neutral-color-80)" },
			itemHoverStyle: { color: "var(--highcharts-neutral-color-100)" },
			itemHiddenStyle: { color: "var(--highcharts-neutral-color-60)" },
			title: { style: { color: "var(--highcharts-neutral-color-80)" } },
			bubbleLegend: { labels: { style: { color: "var(--highcharts-neutral-color-100)" } } }
		},
		loading: { style: { backgroundColor: "var(--highcharts-background-color)" } },
		tooltip: {
			backgroundColor: "var(--highcharts-background-color)",
			style: { color: "var(--highcharts-neutral-color-80)" }
		},
		credits: { style: { color: "var(--highcharts-neutral-color-40)" } },
		xAxis: {
			labels: { style: { color: "var(--highcharts-neutral-color-80)" } },
			title: { style: { color: "var(--highcharts-neutral-color-60)" } },
			minorGridLineColor: "var(--highcharts-neutral-color-5)",
			minorTickColor: "var(--highcharts-neutral-color-40)",
			lineColor: "var(--highcharts-neutral-color-80)",
			gridLineColor: "var(--highcharts-neutral-color-10)",
			tickColor: "var(--highcharts-neutral-color-80)",
			grid: { borderColor: "var(--highcharts-neutral-color-20)" }
		},
		yAxis: {
			labels: { style: { color: "var(--highcharts-neutral-color-80)" } },
			title: { style: { color: "var(--highcharts-neutral-color-60)" } },
			minorGridLineColor: "var(--highcharts-neutral-color-5)",
			minorTickColor: "var(--highcharts-neutral-color-40)",
			lineColor: "var(--highcharts-neutral-color-80)",
			gridLineColor: "var(--highcharts-neutral-color-10)",
			tickColor: "var(--highcharts-neutral-color-80)",
			stackLabels: { style: { color: "var(--highcharts-neutral-color-100)" } },
			grid: { borderColor: "var(--highcharts-neutral-color-20)" }
		},
		navigator: {
			handles: {
				backgroundColor: "var(--highcharts-neutral-color-5)",
				borderColor: "var(--highcharts-neutral-color-40)"
			},
			outlineColor: "var(--highcharts-neutral-color-40)",
			xAxis: {
				gridLineColor: "var(--highcharts-neutral-color-10)",
				labels: { style: { color: "var(--highcharts-neutral-color-100)" } }
			}
		},
		rangeSelector: {
			inputStyle: { color: "var(--highcharts-highlight-color-80)" },
			labelStyle: { color: "var(--highcharts-neutral-color-60)" }
		},
		scrollbar: {
			barBackgroundColor: "var(--highcharts-neutral-color-20)",
			barBorderColor: "var(--highcharts-neutral-color-20)",
			buttonArrowColor: "var(--highcharts-neutral-color-80)",
			buttonBackgroundColor: "var(--highcharts-neutral-color-10)",
			buttonBorderColor: "var(--highcharts-neutral-color-20)",
			trackBorderColor: "var(--highcharts-neutral-color-20)"
		},
		pane: { background: {
			borderColor: "var(--highcharts-neutral-color-20)",
			backgroundColor: "var(--highcharts-neutral-color-5)"
		} },
		zAxis: {
			labels: { style: { color: "var(--highcharts-neutral-color-80)" } },
			title: { style: { color: "var(--highcharts-neutral-color-60)" } },
			minorGridLineColor: "var(--highcharts-neutral-color-5)",
			minorTickColor: "var(--highcharts-neutral-color-40)",
			lineColor: "var(--highcharts-neutral-color-80)",
			gridLineColor: "var(--highcharts-neutral-color-10)",
			tickColor: "var(--highcharts-neutral-color-80)"
		},
		colorAxis: {
			labels: { style: { color: "var(--highcharts-neutral-color-80)" } },
			title: { style: { color: "var(--highcharts-neutral-color-60)" } },
			minorGridLineColor: "var(--highcharts-neutral-color-5)",
			minorTickColor: "var(--highcharts-neutral-color-40)",
			lineColor: "var(--highcharts-neutral-color-80)",
			gridLineColor: "var(--highcharts-background-color)",
			tickColor: "var(--highcharts-neutral-color-80)",
			marker: { color: "var(--highcharts-neutral-color-40)" },
			minColor: "var(--highcharts-highlight-color-10)",
			maxColor: "var(--highcharts-highlight-color-100)"
		},
		mapNavigation: { buttonOptions: {
			style: { color: "var(--highcharts-neutral-color-60)" },
			theme: {
				fill: "var(--highcharts-background-color)",
				stroke: "var(--highcharts-neutral-color-10)"
			}
		} },
		accessibility: { keyboardNavigation: { focusBorder: { style: { color: "var(--highcharts-highlight-color-80)" } } } },
		drilldown: {
			activeAxisLabelStyle: { color: "var(--highcharts-highlight-color-100)" },
			activeDataLabelStyle: { color: "var(--highcharts-highlight-color-100)" }
		},
		annotations: {
			labelOptions: {
				borderColor: "var(--highcharts-neutral-color-100)",
				backgroundColor: "color-mix(in srgb, var(--highcharts-neutral-color-100) 75%, transparent)"
			},
			controlPointOptions: { style: {
				fill: "var(--highcharts-background-color)",
				stroke: "var(--highcharts-neutral-color-100)"
			} },
			types: {
				elliottWave: { labelOptions: { style: { color: "var(--highcharts-neutral-color-60)" } } },
				fibonacci: {
					typeOptions: { lineColor: "var(--highcharts-neutral-color-40)" },
					labelOptions: { style: { color: "var(--highcharts-neutral-color-60)" } }
				},
				fibonacciTimeZones: { typeOptions: { line: { stroke: "var(--highcharts-neutral-color-80)" } } },
				verticalLine: { labelOptions: { style: { color: "var(--highcharts-neutral-color-60)" } } },
				measure: { typeOptions: { label: { style: { color: "var(--highcharts-neutral-color-60)" } } } }
			},
			shapeOptions: {
				fill: "color-mix(in srgb, var(--highcharts-neutral-color-100) 75%, transparent)",
				stroke: "color-mix(in srgb, var(--highcharts-neutral-color-100) 75%, transparent)"
			}
		},
		navigation: {
			buttonOptions: {
				symbolFill: "var(--highcharts-neutral-color-60)",
				symbolStroke: "var(--highcharts-neutral-color-60)",
				theme: { fill: "var(--highcharts-background-color)" }
			},
			menuStyle: { background: "var(--highcharts-background-color)" },
			menuItemStyle: { color: "var(--highcharts-neutral-color-80)" },
			menuItemHoverStyle: { background: "var(--highcharts-neutral-color-5)" }
		}
	};
	function t() {
		let t = document.createElement("style");
		t.nonce = "highcharts", t.innerText = xr, t.id = "highcharts-adaptive-theme", document.getElementsByTagName("head")[0].appendChild(t), vr(e.options), P(dn, "afterGetContainer", function() {
			let e = this.container.getRootNode().host?.shadowRoot;
			if (e && !e.getElementById("highcharts-adaptive-theme")) {
				let n = t.cloneNode(!0);
				e.appendChild(n);
			}
		});
	}
	e.apply = t;
})(Sr ||= {});
var Cr = Sr;
H.theme = Cr.options, Cr.apply();
//#endregion
//#region node_modules/highcharts/es-modules/Accessibility/Utils/HTMLUtilities.js
var { doc: wr, win: X } = H, Tr = X.EventTarget && new X.EventTarget() || "none";
function Er(e, t) {
	e.classList ? e.classList.add(t) : e.className.indexOf(t) < 0 && (e.className += " " + t);
}
function Dr(e, t) {
	e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp(t, "g"), "");
}
function Or(e) {
	if (typeof X.MouseEvent == "function") return new X.MouseEvent(e.type, e);
	if (wr?.createEvent) {
		let t = wr.createEvent("MouseEvent");
		if (t.initMouseEvent) return t.initMouseEvent(e.type, e.bubbles, e.cancelable, e.view || X, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget), t;
	}
	return Mr(e.type);
}
function kr(e) {
	let t = (e) => {
		let t = [];
		for (let n = 0; n < e.length; ++n) {
			let r = e.item(n);
			r && t.push(r);
		}
		return t;
	};
	if (typeof X.TouchEvent == "function") {
		let n = new X.TouchEvent(e.type, {
			touches: t(e.touches),
			targetTouches: t(e.targetTouches),
			changedTouches: t(e.changedTouches),
			ctrlKey: e.ctrlKey,
			shiftKey: e.shiftKey,
			altKey: e.altKey,
			metaKey: e.metaKey,
			bubbles: e.bubbles,
			cancelable: e.cancelable,
			composed: e.composed,
			detail: e.detail,
			view: e.view
		});
		return e.defaultPrevented && n.preventDefault(), n;
	}
	let n = Or(e);
	return n.touches = e.touches, n.changedTouches = e.changedTouches, n.targetTouches = e.targetTouches, n;
}
function Ar(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
}
function jr(e) {
	return wr.getElementById(e);
}
function Mr(e, t, n) {
	let r = t || {
		x: 0,
		y: 0
	};
	if (typeof X.MouseEvent == "function") return new X.MouseEvent(e, {
		bubbles: !0,
		cancelable: !0,
		composed: !0,
		button: 0,
		buttons: 1,
		relatedTarget: n || Tr,
		view: X,
		detail: +(e === "click"),
		screenX: r.x,
		screenY: r.y,
		clientX: r.x,
		clientY: r.y
	});
	if (wr?.createEvent) {
		let t = wr.createEvent("MouseEvent");
		if (t.initMouseEvent) return t.initMouseEvent(e, !0, !0, X, +(e === "click"), r.x, r.y, r.x, r.y, !1, !1, !1, !1, 0, null), t;
	}
	return { type: e };
}
function Nr(e) {
	let t = (e) => {
		let t = parseInt(e.slice(1), 10);
		return "h" + Math.min(6, t + 1);
	}, n = (e) => /^H[1-6]$/i.test(e), r = (e) => {
		let t = e;
		for (; t = t.previousSibling;) {
			let e = t.tagName || "";
			if (n(e)) return e;
		}
		return "";
	}, i = (e) => {
		let a = r(e);
		if (a) return t(a);
		let o = e.parentElement;
		if (!o) return "h6";
		let s = o.tagName;
		return n(s) ? t(s) : i(o);
	};
	return i(e);
}
function Pr(e) {
	e && e.parentNode && e.parentNode.removeChild(e);
}
function Fr(e) {
	for (; e.lastChild;) e.removeChild(e.lastChild);
}
function Ir(e) {
	let t = e.childNodes.length;
	for (; t--;) e.appendChild(e.childNodes[t]);
}
function Lr(e, t = !1) {
	return typeof e == "string" ? t ? e.replace(/<\/?[^>]+(>|$)/g, "") : e.replace(/<\/?(?!\s)[^>]+(>|$)/g, "") : e;
}
function Rr(e) {
	A(e, {
		position: "absolute",
		width: "1px",
		height: "1px",
		overflow: "hidden",
		whiteSpace: "nowrap",
		clip: "rect(1px, 1px, 1px, 1px)",
		marginTop: "-3px",
		"-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)",
		filter: "alpha(opacity=1)",
		opacity: .01
	});
}
var Z = {
	addClass: Er,
	cloneMouseEvent: Or,
	cloneTouchEvent: kr,
	escapeStringForHTML: Ar,
	getElement: jr,
	getFakeMouseEvent: Mr,
	getHeadingTagNameForElement: Nr,
	removeChildNodes: Fr,
	removeClass: Dr,
	removeElement: Pr,
	reverseChildNodes: Ir,
	simulatedEventTarget: Tr,
	stripHTMLTagsFromString: Lr,
	visuallyHideElement: Rr
}, { format: zr } = q, Br;
(function(e) {
	function t(e) {
		let t = e.prototype;
		t.langFormat ||= i;
	}
	e.compose = t;
	function n(e, t) {
		let n = e.indexOf("#each("), r = e.indexOf("#plural("), i = e.indexOf("["), o = e.indexOf("]"), s, c;
		if (n > -1) {
			let r = e.slice(n).indexOf(")") + n, i = e.substring(0, n), a = e.substring(r + 1), o = e.substring(n + 6, r).split(","), l = Number(o[1]), u;
			if (c = "", s = m(o[0], t), s) {
				l = isNaN(l) ? s.length : l, u = l < 0 ? s.length + l : Math.min(l, s.length);
				for (let e = 0; e < u; ++e) c += i + s[e] + a;
			}
			return c.length ? c : "";
		}
		if (r > -1) {
			let n = e.slice(r).indexOf(")") + r, i = e.substring(r + 8, n).split(",");
			switch (Number(m(i[0], t))) {
				case 0:
					c = T(i[4], i[1]);
					break;
				case 1:
					c = T(i[2], i[1]);
					break;
				case 2:
					c = T(i[3], i[1]);
					break;
				default: c = i[1];
			}
			return c ? a(c) : "";
		}
		if (i > -1) {
			let n = e.substring(0, i), r = Number(e.substring(i + 1, o)), a;
			return s = m(n, t), !isNaN(r) && s && (r < 0 ? (a = s[s.length + r], a === void 0 && (a = s[0])) : (a = s[r], a === void 0 && (a = s[s.length - 1]))), a === void 0 ? "" : a;
		}
		return "{" + e + "}";
	}
	function r(e, t, r) {
		let i = (e, t) => {
			let n = e.slice(t || 0), r = n.indexOf("{"), i = n.indexOf("}");
			if (r > -1 && i > r) return {
				statement: n.substring(r + 1, i),
				begin: t + r + 1,
				end: t + i
			};
		}, a = [], o, s, c = 0;
		do
			o = i(e, c), s = e.substring(c, o && o.begin - 1), s.length && a.push({
				value: s,
				type: "constant"
			}), o && a.push({
				value: o.statement,
				type: "statement"
			}), c = o ? o.end + 1 : c + 1;
		while (o);
		return a.forEach((e) => {
			e.type === "statement" && (e.value = n(e.value, t));
		}), zr(a.reduce((e, t) => e + t.value, ""), t, r);
	}
	e.i18nFormat = r;
	function i(e, t) {
		let n = e.split("."), i = this.options.lang, a = 0;
		for (; a < n.length; ++a) i &&= i[n[a]];
		return typeof i == "string" ? r(i, t, this) : "";
	}
	function a(e) {
		return e.trim && e.trim() || e.replace(/^\s+|\s+$/g, "");
	}
})(Br ||= {});
var Vr = Br, { doc: Hr } = H, { stripHTMLTagsFromString: Ur } = Z;
function Wr(e, t) {
	let n = t.type, r = e.hcEvents;
	Hr?.createEvent && (e.dispatchEvent || e.fireEvent) ? e.dispatchEvent ? e.dispatchEvent(t) : e.fireEvent(n, t) : r && r[n] ? z(e, n, t) : e.element && Wr(e.element, t);
}
function Gr(e) {
	return Ur(e.options.title.text || e.langFormat("accessibility.defaultChartTitle", { chart: e }), e.renderer.forExport);
}
function Kr(e) {
	return e && (e.options.accessibility?.description || e.axisTitle?.textStr || e.options.id || e.categories && e.chart.langFormat("accessibility.axis.defaultAxisNames.categories", {}) || e.dateTime && e.chart.langFormat("accessibility.axis.defaultAxisNames.time", {}) || e.chart.langFormat("accessibility.axis.defaultAxisNames.values", {}));
}
function qr(e) {
	let t = e.options || {};
	return t.accessibility && t.accessibility.rangeDescription !== void 0 ? t.accessibility.rangeDescription : e.categories ? Jr(e) : e.dateTime && (e.min === 0 || e.dataMin === 0) ? Yr(e) : Xr(e);
}
function Jr(e) {
	let t = e.chart;
	return e.dataMax && e.dataMin ? t.langFormat("accessibility.axis.rangeCategories", {
		chart: t,
		axis: e,
		numCategories: e.dataMax - e.dataMin + 1
	}) : "";
}
function Yr(e) {
	let t = e.chart, n = {}, r = e.dataMin || e.min || 0, i = e.dataMax || e.max || 0, a = "Seconds";
	n.Seconds = (i - r) / 1e3, n.Minutes = n.Seconds / 60, n.Hours = n.Minutes / 60, n.Days = n.Hours / 24, [
		"Minutes",
		"Hours",
		"Days"
	].forEach(function(e) {
		n[e] > 2 && (a = e);
	});
	let o = n[a].toFixed(+(a !== "Seconds" && a !== "Minutes"));
	return t.langFormat("accessibility.axis.timeRange" + a, {
		chart: t,
		axis: e,
		range: o.replace(".0", "")
	});
}
function Xr(e) {
	let t = e.chart, n = t.options, r = n && n.accessibility && n.accessibility.screenReaderSection.axisRangeDateFormat || "", i = {
		min: e.dataMin || e.min || 0,
		max: e.dataMax || e.max || 0
	}, a = function(n) {
		return e.dateTime ? t.time.dateFormat(r, i[n]) : i[n].toString();
	};
	return t.langFormat("accessibility.axis.rangeFromTo", {
		chart: t,
		axis: e,
		rangeFrom: a("min"),
		rangeTo: a("max")
	});
}
function Zr(e) {
	if (e.points && e.points.length) {
		let t = h(e.points, (e) => !!e.graphic);
		return t && t.graphic && t.graphic.element;
	}
}
function Qr(e) {
	let t = Zr(e);
	return t && t.parentNode || e.graph && e.graph.element || e.group && e.group.element;
}
function $r(e, t) {
	t.setAttribute("aria-hidden", !1), !(t === e.renderTo || !t.parentNode || t.parentNode === Hr.body) && (Array.prototype.forEach.call(t.parentNode.childNodes, function(e) {
		e.hasAttribute("aria-hidden") || e.setAttribute("aria-hidden", !0);
	}), $r(e, t.parentNode));
}
function ei(e) {
	let t = Qr(e);
	t && t.setAttribute("aria-hidden", !0);
}
function ti(e, t) {
	return t ? (e.series || []).filter(function(e) {
		return e.name === t;
	}) : e.series;
}
function ni(e, t, n) {
	let r = e.length, i;
	for (; r--;) if (i = h(e[r].points || [], function(e) {
		return e.x === t && e.y === n;
	}), i) return i;
}
function ri(e, t) {
	if (!G(e.dataMin) || !G(e.dataMax)) return 0;
	let n = e.toPixels(e.dataMin), r = e.toPixels(e.dataMax), i = e.coll === "xAxis" ? "x" : "y";
	return (e.toPixels(t[i] || 0) - n) / (r - n);
}
function ii(e) {
	let t = e.series.xAxis, n = e.series.yAxis, r = t && t.scrollbar ? t : n, i = r && r.scrollbar;
	if (i && G(i.to) && G(i.from)) {
		let t = i.to - i.from, n = ri(r, e);
		i.updatePosition(n - t / 2, n + t / 2), z(i, "changed", {
			from: i.from,
			to: i.to,
			trigger: "scrollbar",
			DOMEvent: null
		});
	}
}
var Q = {
	fireEventOnWrappedOrUnwrappedElement: Wr,
	getChartTitle: Gr,
	getAxisDescription: Kr,
	getAxisRangeDescription: qr,
	getPointFromXY: ni,
	getSeriesFirstPointElement: Zr,
	getSeriesFromName: ti,
	getSeriesA11yElement: Qr,
	unhideChartElementFromAT: $r,
	hideSeriesFromAT: ei,
	scrollAxisToPoint: ii
}, { doc: ai } = H, { removeElement: oi } = Z, si = class {
	constructor() {
		this.elements = [];
	}
	createElement() {
		let e = ai.createElement.apply(ai, arguments);
		return this.elements.push(e), e;
	}
	removeElement(e) {
		oi(e), this.elements.splice(this.elements.indexOf(e), 1);
	}
	destroyCreatedElements() {
		this.elements.forEach(function(e) {
			oi(e);
		}), this.elements = [];
	}
}, ci = class {
	constructor() {
		this.eventRemovers = [];
	}
	addEvent() {
		let e = P.apply(H, arguments);
		return this.eventRemovers.push({
			element: arguments[0],
			remover: e
		}), e;
	}
	removeEvent(e) {
		let t = this.eventRemovers.map((e) => e.remover).indexOf(e);
		this.eventRemovers[t].remover(), this.eventRemovers.splice(t, 1);
	}
	removeAddedEvents() {
		this.eventRemovers.map((e) => e.remover).forEach((e) => e()), this.eventRemovers = [];
	}
}, { fireEventOnWrappedOrUnwrappedElement: li } = Q, { getFakeMouseEvent: ui } = Z, di = class {
	destroy() {}
	getKeyboardNavigation() {
		return [];
	}
	init() {}
	onChartRender() {}
	onChartUpdate() {}
	initBase(e, t) {
		this.chart = e, this.eventProvider = new ci(), this.domElementProvider = new si(), this.proxyProvider = t, this.keyCodes = {
			left: 37,
			right: 39,
			up: 38,
			down: 40,
			enter: 13,
			space: 32,
			esc: 27,
			tab: 9,
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36
		};
	}
	addEvent(e, t, n, r) {
		return this.eventProvider.addEvent(e, t, n, r);
	}
	createElement(e, t) {
		return this.domElementProvider.createElement(e, t);
	}
	fakeClickEvent(e) {
		li(e, ui("click"));
	}
	destroyBase() {
		this.domElementProvider.destroyCreatedElements(), this.eventProvider.removeAddedEvents();
	}
}, fi = class {
	constructor(e, t) {
		this.chart = e, this.keyCodeMap = t.keyCodeMap || [], this.validate = t.validate, this.init = t.init, this.terminate = t.terminate, this.response = {
			success: 1,
			prev: 2,
			next: 3,
			noHandler: 4,
			fail: 5
		};
	}
	run(e) {
		let t = e.which || e.keyCode, n = this.response.noHandler, r = h(this.keyCodeMap, function(e) {
			return e[0].indexOf(t) > -1;
		});
		return r ? n = r[1].call(this, t, e) : t === 9 && (n = this.response[e.shiftKey ? "prev" : "next"]), n;
	}
}, { unhideChartElementFromAT: pi, getChartTitle: mi } = Q, { doc: hi } = H, { stripHTMLTagsFromString: gi } = Z, _i = class extends di {
	onChartUpdate() {
		this.handleSVGTitleElement(), this.setSVGContainerLabel(), this.setGraphicContainerAttrs(), this.setRenderToAttrs(), this.makeCreditsAccessible();
	}
	handleSVGTitleElement() {
		let e = this.chart, t = "highcharts-title-" + e.index, n = gi(e.langFormat("accessibility.svgContainerTitle", { chartTitle: mi(e) }));
		if (n.length) {
			let r = this.svgTitleElement = this.svgTitleElement || hi.createElementNS("http://www.w3.org/2000/svg", "title");
			r.textContent = n, r.id = t, e.renderTo.insertBefore(r, e.renderTo.firstChild);
		}
	}
	setSVGContainerLabel() {
		let e = this.chart, t = e.langFormat("accessibility.svgContainerLabel", { chartTitle: mi(e) });
		e.renderer.box && t.length && e.renderer.box.setAttribute("aria-label", t);
	}
	setGraphicContainerAttrs() {
		let e = this.chart, t = e.langFormat("accessibility.graphicContainerLabel", { chartTitle: mi(e) });
		t.length && e.container.setAttribute("aria-label", t);
	}
	setRenderToAttrs() {
		let e = this.chart, t = e.options.accessibility.landmarkVerbosity !== "disabled", n = e.langFormat("accessibility.chartContainerLabel", {
			title: mi(e),
			chart: e
		});
		n && (e.renderTo.setAttribute("role", t ? "region" : "group"), e.renderTo.setAttribute("aria-label", n));
	}
	makeCreditsAccessible() {
		let e = this.chart, t = e.credits;
		t && (t.textStr && t.element.setAttribute("aria-label", e.langFormat("accessibility.credits", { creditsStr: gi(t.textStr, e.renderer.forExport) })), pi(e, t.element));
	}
	getKeyboardNavigation() {
		let e = this.chart;
		return new fi(e, {
			keyCodeMap: [],
			validate: function() {
				return !0;
			},
			init: function() {
				let t = e.accessibility;
				t && t.keyboardNavigation.tabindexContainer.focus();
			}
		});
	}
	destroy() {
		this.chart.renderTo.setAttribute("aria-hidden", !0);
	}
}, vi;
(function(e) {
	let t = [
		"x",
		"y",
		"transform",
		"width",
		"height",
		"r",
		"d",
		"stroke-width"
	];
	function n(e, t) {
		let n = e.prototype, a = t.prototype;
		n.renderFocusBorder || (n.renderFocusBorder = r, n.setFocusToElement = i), a.addFocusBorder || (a.addFocusBorder = o, a.removeFocusBorder = l);
	}
	e.compose = n;
	function r() {
		let e = this.focusElement, t = this.options.accessibility.keyboardNavigation.focusBorder;
		e && (e.removeFocusBorder(), t.enabled && e.addFocusBorder(t.margin, {
			stroke: t.style.color,
			strokeWidth: t.style.lineWidth,
			r: t.style.borderRadius
		}));
	}
	function i(e, t) {
		let n = this.options.accessibility.keyboardNavigation.focusBorder, r = t || e.element;
		r && r.focus && (r.hcEvents && r.hcEvents.focusin || P(r, "focusin", function() {}), r.focus(), n.hideBrowserFocusOutline && (r.style.outline = "none")), this.focusElement && this.focusElement.removeFocusBorder(), this.focusElement = e, P(this, "endResize", function() {
			this.renderFocusBorder();
		}), this.renderFocusBorder();
	}
	function a(e) {
		if (e.focusBorderDestroyHook) return;
		let t = e.destroy;
		e.destroy = function() {
			return e.focusBorder && e.focusBorder.destroy && e.focusBorder.destroy(), t.apply(e, arguments);
		}, e.focusBorderDestroyHook = t;
	}
	function o(e, t) {
		this.focusBorder && this.removeFocusBorder();
		let n = this.getBBox(), r = T(e, 3), i = this.parentGroup, o = this.scaleX || i && i.scaleX, c = this.scaleY || i && i.scaleY, l = (o ? !c : c) ? Math.abs(o || c || 1) : (Math.abs(o || 1) + Math.abs(c || 1)) / 2, u = this.renderer.fontMetrics(this).h;
		n.x += this.translateX ? this.translateX : 0, n.y += this.translateY ? this.translateY : 0;
		let d = n.x - r, f = n.y - r, p = n.width + 2 * r, m = n.height + 2 * r;
		function h(e) {
			let t = 0, n = 0;
			return e.attr("text-anchor") === "middle" ? t = n = .5 : e.rotation ? t = .25 : n = .75, {
				x: t,
				y: n
			};
		}
		let g = !!this.text;
		if (this.element.nodeName === "text" || g) {
			let e = !!this.rotation, t = g ? {
				x: +!!e,
				y: 0
			} : h(this), i = +this.attr("x"), a = +this.attr("y");
			if (isNaN(i) || (d = i - n.width * t.x - r), isNaN(a) || (f = a - (this.attr("text-anchor") === "start" ? u : n.height) * t.y - r), g && e) {
				let e = p;
				p = m, m = e, isNaN(i) || (d = i - n.height * t.x - r), isNaN(a) || (f = a - n.width * t.y - r);
			}
		}
		this.focusBorder = this.renderer.rect(d, f, p, m, parseInt((t && t.r || 0).toString(), 10) / l).addClass("highcharts-focus-border").attr({ zIndex: 99 }).add(i), this.renderer.styledMode || this.focusBorder.attr({
			stroke: t && t.stroke,
			"stroke-width": (t && t.strokeWidth || 0) / l
		}), s(this, e, t), a(this);
	}
	function s(e, ...n) {
		e.focusBorderUpdateHooks || (e.focusBorderUpdateHooks = {}, t.forEach((t) => {
			let r = t + "Setter", i = e[r] || e._defaultSetter;
			e.focusBorderUpdateHooks[r] = i, e[r] = function() {
				let t = i.apply(e, arguments);
				return e.addFocusBorder.apply(e, n), t;
			};
		}));
	}
	function c(e) {
		e.focusBorderDestroyHook && (e.destroy = e.focusBorderDestroyHook, delete e.focusBorderDestroyHook);
	}
	function l() {
		u(this), c(this), this.focusBorder && (this.focusBorder.destroy(), delete this.focusBorder);
	}
	function u(e) {
		e.focusBorderUpdateHooks && (Object.keys(e.focusBorderUpdateHooks).forEach((t) => {
			let n = e.focusBorderUpdateHooks[t];
			n === e._defaultSetter ? delete e[t] : e[t] = n;
		}), delete e.focusBorderUpdateHooks);
	}
})(vi ||= {});
var yi = vi, { doc: bi } = H, { addClass: xi, visuallyHideElement: Si } = Z, Ci = class {
	constructor(e, t) {
		this.chart = e, this.domElementProvider = new si(), this.announceRegion = this.addAnnounceRegion(t);
	}
	destroy() {
		this.domElementProvider.destroyCreatedElements();
	}
	announce(e) {
		K.setElementHTML(this.announceRegion, e), this.clearAnnouncementRegionTimer && o(this.clearAnnouncementRegionTimer), this.clearAnnouncementRegionTimer = setTimeout(() => {
			this.announceRegion.innerHTML = K.emptyHTML, delete this.clearAnnouncementRegionTimer;
		}, 3e3);
	}
	addAnnounceRegion(e) {
		let t = this.chart.announcerContainer || this.createAnnouncerContainer(), n = this.domElementProvider.createElement("div");
		return I(n, {
			"aria-hidden": !1,
			"aria-live": e,
			"aria-atomic": !0
		}), Si(n), this.chart.styledMode && xi(n, "highcharts-visually-hidden"), t.appendChild(n), n;
	}
	createAnnouncerContainer() {
		let e = this.chart, t = bi.createElement("div");
		return I(t, {
			"aria-hidden": !1,
			class: "highcharts-announcer-container"
		}), Si(t), e.renderTo.insertBefore(t, e.renderTo.firstChild), e.announcerContainer = t, t;
	}
}, { escapeStringForHTML: wi, stripHTMLTagsFromString: Ti } = Z;
function Ei(e) {
	return (e.annotations || []).reduce((e, t) => (t.options && t.options.visible !== !1 && (e = e.concat(t.labels)), e), []);
}
function Di(e) {
	return e.options && e.options.accessibility && e.options.accessibility.description || e.graphic && e.graphic.text && e.graphic.text.textStr || "";
}
function Oi(e) {
	let t = e.options && e.options.accessibility && e.options.accessibility.description;
	if (t) return t;
	let n = e.chart, r = Di(e), i = e.points, a = (e) => e.graphic && e.graphic.element && e.graphic.element.getAttribute("aria-label") || "", o = i.filter((e) => !!e.graphic).map((e) => {
		let t = e.accessibility && e.accessibility.valueDescription || a(e), n = e && e.series.name || "";
		return (n ? n + ", " : "") + "data point " + t;
	}).filter((e) => !!e), s = o.length, c = "accessibility.screenReaderSection.annotations.description" + (s > 1 ? "MultiplePoints" : s ? "SinglePoint" : "NoPoints"), l = {
		annotationText: r,
		annotation: e,
		numPoints: s,
		annotationPoint: o[0],
		additionalAnnotationPoints: o.slice(1)
	};
	return n.langFormat(c, l);
}
function ki(e) {
	return Ei(e).map((t) => {
		let n = wi(Ti(Oi(t), e.renderer.forExport));
		return n ? `<li>${n}</li>` : "";
	});
}
function Ai(e) {
	let t = e.annotations;
	return t && t.length ? `<ul style="list-style-type: none">${ki(e).join(" ")}</ul>` : "";
}
function ji(e) {
	let t = Ei(e.series.chart).filter((t) => t.points.indexOf(e) > -1);
	return t.length ? t.map((e) => `${Di(e)}`) : [];
}
var Mi = {
	getAnnotationsInfoHTML: Ai,
	getAnnotationLabelDescription: Oi,
	getAnnotationListItems: ki,
	getPointAnnotationTexts: ji
}, { getAnnotationsInfoHTML: Ni } = Mi, { getAxisDescription: Pi, getAxisRangeDescription: Fi, getChartTitle: Ii, unhideChartElementFromAT: Li } = Q, { format: Ri } = q, { doc: zi } = H, { addClass: Bi, getElement: Vi, getHeadingTagNameForElement: Hi, stripHTMLTagsFromString: Ui, visuallyHideElement: Wi } = Z;
function Gi(e) {
	return e.langFormat("accessibility.table.tableSummary", { chart: e });
}
function Ki(e, t) {
	return t.mapTitle ? e.langFormat("accessibility.chartTypes.mapTypeDescription", t) : e.langFormat("accessibility.chartTypes.unknownMap", t);
}
function qi(e, t) {
	return e.langFormat("accessibility.chartTypes.combinationChart", t);
}
function Ji(e, t) {
	return e.langFormat("accessibility.chartTypes.emptyChart", t);
}
function Yi(e, t, n) {
	let r = t[0], i = e.langFormat("accessibility.seriesTypeDescriptions." + r, n), a = e.series && e.series.length < 2 ? "Single" : "Multiple";
	return (e.langFormat("accessibility.chartTypes." + r + a, n) || e.langFormat("accessibility.chartTypes.default" + a, n)) + (i ? " " + i : "");
}
function Xi(e, t) {
	let n = t[0], r = e.series && e.series[0] || {}, i = e.mapView && e.mapView.geoMap && e.mapView.geoMap.title, a = {
		numSeries: e.series.length,
		numPoints: r.points && r.points.length,
		chart: e,
		mapTitle: i
	};
	return n ? n === "map" || n === "tiledwebmap" ? Ki(e, a) : e.types.length > 1 ? qi(e, a) : Yi(e, t, a) : Ji(e, a);
}
function Zi(t) {
	return e(t, [/<([\w\-.:!]+)\b[^<>]*>\s*<\/\1>/g, ""]);
}
var Qi = class extends di {
	constructor() {
		super(...arguments), this.screenReaderSections = {};
	}
	init() {
		let e = this.chart, t = this;
		this.initRegionsDefinitions(), this.addEvent(e, "afterGetTableAST", function(e) {
			t.onDataTableCreated(e);
		}), this.addEvent(e, "afterViewData", function(e) {
			e.wasHidden && (t.dataTableDiv = e.element, setTimeout(function() {
				t.focusDataTable();
			}, 300));
		}), this.addEvent(e, "afterHideData", function() {
			t.viewDataTableButton && t.viewDataTableButton.setAttribute("aria-expanded", "false");
		}), e.exporting && this.addEvent(e, "afterPrint", function() {
			t.updateAllScreenReaderSections();
		}), this.announcer = new Ci(e, "assertive");
	}
	initRegionsDefinitions() {
		let e = this, t = this.chart.options.accessibility;
		this.screenReaderSections = {
			before: {
				element: null,
				buildContent: function(n) {
					let r = t.screenReaderSection.beforeChartFormatter;
					return r ? r(n, e) : e.defaultBeforeChartFormatter();
				},
				insertIntoDOM: function(e, t) {
					t.renderTo.insertBefore(e, t.renderTo.firstChild);
				},
				afterInserted: function() {
					e.sonifyButtonId !== void 0 && e.initSonifyButton(e.sonifyButtonId), e.dataTableButtonId !== void 0 && e.initDataTableButton(e.dataTableButtonId);
				}
			},
			after: {
				element: null,
				buildContent: function(n) {
					let r = t.screenReaderSection.afterChartFormatter;
					return r ? r(n, e) : e.defaultAfterChartFormatter();
				},
				insertIntoDOM: function(e, t) {
					t.renderTo.insertBefore(e, t.container.nextSibling);
				},
				afterInserted: function() {
					e.chart.accessibility && t.keyboardNavigation.enabled && e.chart.accessibility.keyboardNavigation.updateExitAnchor();
				}
			}
		};
	}
	onChartRender() {
		this.linkedDescriptionElement = this.getLinkedDescriptionElement(), this.setLinkedDescriptionAttrs(), this.updateAllScreenReaderSections();
	}
	updateAllScreenReaderSections() {
		let e = this;
		Object.keys(this.screenReaderSections).forEach(function(t) {
			e.updateScreenReaderSection(t);
		});
	}
	getLinkedDescriptionElement() {
		let e = this.chart.options.accessibility.linkedDescription;
		if (!e) return;
		if (typeof e != "string") return e;
		let t = Ri(e, this.chart), n = zi.querySelectorAll(t);
		if (n.length === 1) return n[0];
	}
	setLinkedDescriptionAttrs() {
		let e = this.linkedDescriptionElement;
		e && (e.setAttribute("aria-hidden", "true"), Bi(e, "highcharts-linked-description"));
	}
	updateScreenReaderSection(e) {
		let t = this.chart, n = this.screenReaderSections[e], r = n.buildContent(t), i = n.element = n.element || this.createElement("div"), a = i.firstChild || this.createElement("div");
		r ? (this.setScreenReaderSectionAttribs(i, e), K.setElementHTML(a, r), i.appendChild(a), n.insertIntoDOM(i, t), Wi(a), t.styledMode && Bi(a, "highcharts-visually-hidden"), Li(t, a), n.afterInserted && n.afterInserted()) : (i.parentNode && i.parentNode.removeChild(i), n.element = null);
	}
	setScreenReaderSectionAttribs(e, t) {
		let n = this.chart, r = n.langFormat("accessibility.screenReaderSection." + t + "RegionLabel", {
			chart: n,
			chartTitle: Ii(n)
		}), i = `highcharts-screen-reader-region-${t}-${n.index}`;
		I(e, {
			id: i,
			"aria-label": r || void 0
		}), e.style.position = "relative", r && e.setAttribute("role", n.options.accessibility.landmarkVerbosity === "all" ? "region" : "group");
	}
	defaultBeforeChartFormatter() {
		let e = this.chart, t = e.options.accessibility.screenReaderSection.beforeChartFormat;
		if (!t) return "";
		let n = this.getAxesDescription(), r = e.sonify && e.options.sonification && e.options.sonification.enabled, i = "highcharts-a11y-sonify-data-btn-" + e.index, a = "hc-linkto-highcharts-data-table-" + e.index, o = Ni(e), s = e.langFormat("accessibility.screenReaderSection.annotations.heading", { chart: e }), c = {
			headingTagName: Hi(e.renderTo),
			chartTitle: Ii(e),
			typeDescription: this.getTypeDescriptionText(),
			chartSubtitle: this.getSubtitleText(),
			chartLongdesc: this.getLongdescText(),
			xAxisDescription: n.xAxis,
			yAxisDescription: n.yAxis,
			playAsSoundButton: r ? this.getSonifyButtonText(i) : "",
			viewTableButton: e.exporting?.getCSV ? this.getDataTableButtonText(a) : "",
			annotationsTitle: o ? s : "",
			annotationsList: o
		}, l = Vr.i18nFormat(t, c, e);
		return this.dataTableButtonId = a, this.sonifyButtonId = i, Zi(l);
	}
	defaultAfterChartFormatter() {
		let e = this.chart, t = e.options.accessibility.screenReaderSection.afterChartFormat;
		if (!t) return "";
		let n = { endOfChartMarker: this.getEndOfChartMarkerText() };
		return Zi(Vr.i18nFormat(t, n, e));
	}
	getLinkedDescription() {
		let e = this.linkedDescriptionElement;
		return Ui(e && e.innerHTML || "", this.chart.renderer.forExport);
	}
	getLongdescText() {
		let e = this.chart.options, t = e.caption, n = t && t.text, r = this.getLinkedDescription();
		return e.accessibility.description || r || n || "";
	}
	getTypeDescriptionText() {
		let e = this.chart;
		return e.types ? e.options.accessibility.typeDescription || Xi(e, e.types) : "";
	}
	getDataTableButtonText(e) {
		let t = this.chart, n = t.langFormat("accessibility.table.viewAsDataTableButtonText", {
			chart: t,
			chartTitle: Ii(t)
		});
		return "<button id=\"" + e + "\">" + n + "</button>";
	}
	getSonifyButtonText(e) {
		let t = this.chart;
		if (t.options.sonification && t.options.sonification.enabled === !1) return "";
		let n = t.langFormat("accessibility.sonification.playAsSoundButtonText", {
			chart: t,
			chartTitle: Ii(t)
		});
		return "<button id=\"" + e + "\">" + n + "</button>";
	}
	getSubtitleText() {
		let e = this.chart.options.subtitle;
		return Ui(e && e.text || "", this.chart.renderer.forExport);
	}
	getEndOfChartMarkerText() {
		let e = Vi(`highcharts-end-of-chart-marker-${this.chart.index}`);
		if (e) return e.outerHTML;
		let t = this.chart, n = t.langFormat("accessibility.screenReaderSection.endOfChartMarker", { chart: t });
		return "<div id=\"" + ("highcharts-end-of-chart-marker-" + t.index) + "\">" + n + "</div>";
	}
	onDataTableCreated(e) {
		let t = this.chart;
		if (t.options.accessibility.enabled) {
			this.viewDataTableButton && this.viewDataTableButton.setAttribute("aria-expanded", "true");
			let n = e.tree.attributes || {};
			n.tabindex = -1, n.summary = Gi(t), e.tree.attributes = n;
		}
	}
	focusDataTable() {
		let e = this.dataTableDiv, t = e && e.getElementsByTagName("table")[0];
		t && t.focus && t.focus();
	}
	initSonifyButton(e) {
		let t = this.sonifyButton = Vi(e), n = this.chart, r = (e) => {
			t && (t.setAttribute("aria-hidden", "true"), t.setAttribute("aria-label", "")), e.preventDefault(), e.stopPropagation();
			let r = n.langFormat("accessibility.sonification.playAsSoundClickAnnouncement", { chart: n });
			this.announcer.announce(r), setTimeout(() => {
				t && (t.removeAttribute("aria-hidden"), t.removeAttribute("aria-label")), n.sonify && n.sonify();
			}, 1e3);
		};
		t && n && (t.setAttribute("tabindex", -1), t.onclick = function(e) {
			(n.options.accessibility && n.options.accessibility.screenReaderSection.onPlayAsSoundClick || r).call(this, e, n, this);
		});
	}
	initDataTableButton(e) {
		let t = this.viewDataTableButton = Vi(e), n = this.chart, r = e.replace("hc-linkto-", "");
		t && (I(t, {
			tabindex: -1,
			"aria-expanded": !!Vi(r)
		}), t.onclick = n.options.accessibility.screenReaderSection.onViewDataTableClick || function() {
			n.exporting?.viewData();
		});
	}
	getAxesDescription() {
		let e = this.chart, t = function(t, n) {
			let r = e[t];
			return r.length > 1 || r[0] && T(r[0].options.accessibility && r[0].options.accessibility.enabled, n);
		}, n = !!e.types && e.types.indexOf("map") < 0 && e.types.indexOf("treemap") < 0 && e.types.indexOf("tilemap") < 0, r = !!e.hasCartesianSeries, i = t("xAxis", !e.angular && r && n), a = t("yAxis", r && n), o = {};
		return i && (o.xAxis = this.getAxisDescriptionText("xAxis")), a && (o.yAxis = this.getAxisDescriptionText("yAxis")), o;
	}
	getAxisDescriptionText(e) {
		let t = this.chart, n = t[e];
		return t.langFormat("accessibility.axis." + e + "Description" + (n.length > 1 ? "Plural" : "Singular"), {
			chart: t,
			names: n.map(function(e) {
				return Pi(e);
			}),
			ranges: n.map(function(e) {
				return Fi(e);
			}),
			numAxes: n.length
		});
	}
	destroy() {
		this.announcer && this.announcer.destroy();
	}
}, { getChartTitle: $i, unhideChartElementFromAT: ea } = Q, { getFakeMouseEvent: ta } = Z;
function na(e) {
	return e.exporting?.svgElements?.[0];
}
function ra(e) {
	let t = e.options.exporting, n = na(e);
	return !!(t && t.enabled !== !1 && t.accessibility && t.accessibility.enabled && n && n.element);
}
var ia = class extends di {
	init() {
		let e = this.chart, t = this;
		this.addEvent(e, "exportMenuShown", function() {
			t.onMenuShown();
		}), this.addEvent(e, "exportMenuHidden", function() {
			t.onMenuHidden();
		}), this.createProxyGroup();
	}
	onMenuHidden() {
		let e = this.chart.exporting?.contextMenuEl;
		e && e.setAttribute("aria-hidden", "true"), this.setExportButtonExpandedState("false");
	}
	onMenuShown() {
		let e = this.chart, t = e.exporting?.contextMenuEl;
		t && (this.addAccessibleContextMenuAttribs(), ea(e, t)), this.setExportButtonExpandedState("true");
	}
	setExportButtonExpandedState(e) {
		this.exportButtonProxy && this.exportButtonProxy.innerElement.setAttribute("aria-expanded", e);
	}
	onChartRender() {
		let e = this.chart, t = e.focusElement, n = e.accessibility;
		this.proxyProvider.clearGroup("chartMenu"), this.proxyMenuButton(), this.exportButtonProxy && t && t === e.exporting?.group && (t.focusBorder ? e.setFocusToElement(t, this.exportButtonProxy.innerElement) : n && n.keyboardNavigation.tabindexContainer.focus());
	}
	proxyMenuButton() {
		let e = this.chart, t = this.proxyProvider, n = na(e);
		ra(e) && n && (this.exportButtonProxy = t.addProxyElement("chartMenu", { click: n }, "button", {
			"aria-label": e.langFormat("accessibility.exporting.menuButtonLabel", {
				chart: e,
				chartTitle: $i(e)
			}),
			"aria-expanded": !1,
			title: e.options.lang.contextButtonTitle || null
		}));
	}
	createProxyGroup() {
		this.chart && this.proxyProvider && this.proxyProvider.addGroup("chartMenu");
	}
	addAccessibleContextMenuAttribs() {
		let e = this.chart, t = e.exporting?.divElements;
		if (t && t.length) {
			t.forEach((e) => {
				e && (e.tagName === "LI" && !(e.children && e.children.length) ? e.setAttribute("tabindex", -1) : e.setAttribute("aria-hidden", "true"));
			});
			let n = t[0] && t[0].parentNode;
			n && I(n, {
				"aria-hidden": void 0,
				"aria-label": e.langFormat("accessibility.exporting.chartMenuLabel", { chart: e }),
				role: "list"
			});
		}
	}
	getKeyboardNavigation() {
		let e = this.keyCodes, t = this.chart, n = this;
		return new fi(t, {
			keyCodeMap: [
				[[e.left, e.up], function() {
					return n.onKbdPrevious(this);
				}],
				[[e.right, e.down], function() {
					return n.onKbdNext(this);
				}],
				[[e.enter, e.space], function() {
					return n.onKbdClick(this);
				}]
			],
			validate: function() {
				return !!t.exporting && t.options.exporting?.buttons?.contextButton.enabled !== !1 && t.options.exporting.enabled !== !1 && (t.options.exporting.accessibility?.enabled || !1) !== !1;
			},
			init: function() {
				let e = n.exportButtonProxy, r = n.chart.exporting?.group;
				e && r && t.setFocusToElement(r, e.innerElement);
			},
			terminate: function() {
				t.hideExportMenu();
			}
		});
	}
	onKbdPrevious(e) {
		let t = this.chart, n = t.options.accessibility, r = e.response, i = t.highlightedExportItemIx || 0;
		for (; i--;) if (t.highlightExportItem(i)) return r.success;
		return n.keyboardNavigation.wrapAround ? (t.highlightLastExportItem(), r.success) : r.prev;
	}
	onKbdNext(e) {
		let t = this.chart, n = t.options.accessibility, r = e.response;
		for (let e = (t.highlightedExportItemIx || 0) + 1; e < (t.exporting?.divElements?.length || 0); ++e) if (t.highlightExportItem(e)) return r.success;
		return n.keyboardNavigation.wrapAround ? (t.highlightExportItem(0), r.success) : r.next;
	}
	onKbdClick(e) {
		let t = this.chart, n = t.highlightedExportItemIx !== void 0 && t.exporting?.divElements?.[t.highlightedExportItemIx], r = na(t)?.element;
		return t.exporting?.openMenu ? n && this.fakeClickEvent(n) : (r && this.fakeClickEvent(r), t.highlightExportItem(0)), e.response.success;
	}
};
(function(e) {
	function t(e) {
		let t = e.prototype;
		t.hideExportMenu || (t.hideExportMenu = r, t.highlightExportItem = i, t.highlightLastExportItem = a, t.showExportMenu = n);
	}
	e.compose = t;
	function n() {
		let e = na(this);
		if (e) {
			let t = e.element;
			t.onclick &&= function() {
				ta("click");
			};
		}
	}
	function r() {
		let e = this, t = e.exporting?.divElements;
		t && e.exporting?.contextMenuEl && e.exporting?.openMenu && (t.forEach((e) => {
			e && e.className === "highcharts-menu-item" && e.onmouseout && e.onmouseout(ta("mouseout"));
		}), e.highlightedExportItemIx = 0, e.exporting.contextMenuEl.hideMenu(), e.container.focus());
	}
	function i(e) {
		let t = this.exporting?.divElements?.[e], n = this.highlightedExportItemIx !== void 0 && this.exporting?.divElements?.[this.highlightedExportItemIx];
		if (t && t.tagName === "LI" && !(t.children && t.children.length)) {
			let r = !!(this.renderTo.getElementsByTagName("g")[0] || {}).focus;
			return t.focus && r && t.focus(), n && n.onmouseout && n.onmouseout(ta("mouseout")), t.onmouseover && t.onmouseover(ta("mouseover")), this.highlightedExportItemIx = e, !0;
		}
		return !1;
	}
	function a() {
		let e = this;
		if (e.exporting?.divElements) {
			let t = e.exporting?.divElements.length;
			for (; t--;) if (e.highlightExportItem(t)) return !0;
		}
		return !1;
	}
})(ia ||= {});
var aa = ia, { doc: oa, win: sa } = H, { getElement: ca, simulatedEventTarget: la } = Z, ua = class {
	constructor(e, t) {
		this.currentModuleIx = NaN, this.modules = [], this.init(e, t);
	}
	init(e, t) {
		let n = this.eventProvider = new ci();
		this.chart = e, this.components = t, this.modules = [], this.currentModuleIx = 0, this.update(), n.addEvent(this.tabindexContainer, "keydown", (e) => this.onKeydown(e)), n.addEvent(this.tabindexContainer, "focus", (e) => this.onFocus(e)), ["mouseup", "touchend"].forEach((e) => n.addEvent(oa, e, (e) => this.onMouseUp(e))), ["mousedown", "touchstart"].forEach((t) => n.addEvent(e.renderTo, t, () => {
			this.isClickingChart = !0;
		}));
	}
	update(e) {
		let t = this.chart.options.accessibility, n = t && t.keyboardNavigation, r = this.components;
		this.updateContainerTabindex(), n && n.enabled && e && e.length ? (this.modules = e.reduce(function(e, t) {
			let n = r[t].getKeyboardNavigation();
			return e.concat(n);
		}, []), this.updateExitAnchor()) : (this.modules = [], this.currentModuleIx = 0, this.removeExitAnchor());
	}
	updateExitAnchor() {
		let e = ca(`highcharts-end-of-chart-marker-${this.chart.index}`);
		this.removeExitAnchor(), e ? (this.makeElementAnExitAnchor(e), this.exitAnchor = e) : this.createExitAnchor();
	}
	move(e) {
		let t = this.modules && this.modules[this.currentModuleIx];
		t && t.terminate && t.terminate(e), this.chart.focusElement && this.chart.focusElement.removeFocusBorder(), this.currentModuleIx += e;
		let n = this.modules && this.modules[this.currentModuleIx];
		if (n) {
			if (n.validate && !n.validate()) return this.move(e);
			if (n.init) return n.init(e), !0;
		}
		return this.currentModuleIx = 0, this.exiting = !0, e > 0 ? this.exitAnchor && this.exitAnchor.focus() : this.tabindexContainer.focus(), !1;
	}
	onFocus(e) {
		let t = this.chart, n = e.relatedTarget && t.container.contains(e.relatedTarget), r = t.options.accessibility, i = r && r.keyboardNavigation;
		if (i && i.enabled && !this.exiting && !this.tabbingInBackwards && !this.isClickingChart && !n) {
			let e = this.getFirstValidModuleIx();
			e !== null && (this.currentModuleIx = e, this.modules[e].init(1));
		}
		this.keyboardReset = !1, this.exiting = !1;
	}
	onMouseUp(e) {
		if (delete this.isClickingChart, !this.keyboardReset && e.relatedTarget !== la) {
			let t = this.chart;
			if (!e.target || !t.container.contains(e.target)) {
				let e = this.modules && this.modules[this.currentModuleIx || 0];
				e && e.terminate && e.terminate(), this.currentModuleIx = 0;
			}
			t.focusElement && (t.focusElement.removeFocusBorder(), delete t.focusElement), this.keyboardReset = !0;
		}
	}
	onKeydown(e) {
		let t = e || sa.event, n = this.modules && this.modules.length && this.modules[this.currentModuleIx], r, i = t.target;
		if (!(i && i.nodeName === "INPUT" && !i.classList.contains("highcharts-a11y-proxy-element")) && (this.keyboardReset = !1, this.exiting = !1, n)) {
			let e = n.run(t);
			e === n.response.success ? r = !0 : e === n.response.prev ? r = this.move(-1) : e === n.response.next && (r = this.move(1)), r && (t.preventDefault(), t.stopPropagation());
		}
	}
	updateContainerTabindex() {
		let e = this.chart.options.accessibility, t = e && e.keyboardNavigation, n = !(t && t.enabled === !1), r = this.chart, i = r.container, a;
		r.renderTo.hasAttribute("tabindex") ? (i.removeAttribute("tabindex"), a = r.renderTo) : a = i, this.tabindexContainer = a;
		let o = a.getAttribute("tabindex");
		n && !o ? a.setAttribute("tabindex", "0") : n || r.container.removeAttribute("tabindex");
	}
	createExitAnchor() {
		let e = this.chart, t = this.exitAnchor = oa.createElement("div");
		e.renderTo.appendChild(t), this.makeElementAnExitAnchor(t);
	}
	makeElementAnExitAnchor(e) {
		let t = this.tabindexContainer.getAttribute("tabindex") || 0;
		e.setAttribute("class", "highcharts-exit-anchor"), e.setAttribute("tabindex", t), e.setAttribute("aria-hidden", !1), this.addExitAnchorEventsToEl(e);
	}
	removeExitAnchor() {
		if (this.exitAnchor) {
			let e = this.eventProvider.eventRemovers.find((e) => e.element === this.exitAnchor);
			e && G(e.remover) && this.eventProvider.removeEvent(e.remover), this.exitAnchor.parentNode && this.exitAnchor.parentNode.removeChild(this.exitAnchor), delete this.exitAnchor;
		}
	}
	addExitAnchorEventsToEl(e) {
		let t = this.chart, n = this;
		this.eventProvider.addEvent(e, "focus", function(e) {
			let r = e || sa.event, i = !(r.relatedTarget && t.container.contains(r.relatedTarget) || n.exiting);
			if (t.focusElement && delete t.focusElement, i) {
				if (n.tabbingInBackwards = !0, n.tabindexContainer.focus(), delete n.tabbingInBackwards, r.preventDefault(), n.modules && n.modules.length) {
					n.currentModuleIx = n.modules.length - 1;
					let e = n.modules[n.currentModuleIx];
					e && e.validate && !e.validate() ? n.move(-1) : e && e.init(-1);
				}
			} else n.exiting = !1;
		});
	}
	getFirstValidModuleIx() {
		let e = this.modules.length;
		for (let t = 0; t < e; ++t) {
			let e = this.modules[t];
			if (!e.validate || e.validate()) return t;
		}
		return null;
	}
	destroy() {
		this.removeExitAnchor(), this.eventProvider.removeAddedEvents(), this.chart.container.removeAttribute("tabindex");
	}
};
(function(e) {
	function t(e) {
		aa.compose(e);
		let t = e.prototype;
		return t.dismissPopupContent || (t.dismissPopupContent = n, oa && P(oa, "keydown", r)), e;
	}
	e.compose = t;
	function n() {
		let e = this;
		z(this, "dismissPopupContent", {}, function() {
			e.tooltip && e.tooltip.hide(0), e.hideExportMenu();
		});
	}
	function r(e) {
		(e.which || e.keyCode) === 27 && H.charts && H.charts.forEach((e) => {
			e && e.dismissPopupContent && e.dismissPopupContent();
		});
	}
})(ua ||= {});
var da = ua, { animObject: fa } = B, { doc: pa } = H, { getChartTitle: ma } = Q, { stripHTMLTagsFromString: ha, addClass: ga, removeClass: _a } = Z;
function va(e, t) {
	let n = (e.allItems[t].legendItem || {}).pageIx, r = e.currentPage;
	n !== void 0 && n + 1 !== r && e.scroll(1 + n - r);
}
function ya(e) {
	let t = e.legend && e.legend.allItems, n = e.options.legend.accessibility || {}, r = e.colorAxis && e.colorAxis.some((e) => !e.dataClasses || !e.dataClasses.length);
	return !!(t && t.length && !r && n.enabled !== !1);
}
function ba(e, t) {
	let n = t.legendItem || {};
	t.setState(e ? "hover" : "", !0);
	for (let t of [
		"group",
		"label",
		"symbol"
	]) {
		let r = n[t], i = r && r.element || r;
		i && z(i, e ? "mouseover" : "mouseout");
	}
}
var xa = class extends di {
	constructor() {
		super(...arguments), this.highlightedLegendItemIx = NaN, this.proxyGroup = null;
	}
	init() {
		let e = this;
		this.recreateProxies(), this.addEvent(Qt, "afterScroll", function() {
			this.chart === e.chart && (e.proxyProvider.updateGroupProxyElementPositions("legend"), e.updateLegendItemProxyVisibility(), e.highlightedLegendItemIx > -1 && this.chart.highlightLegendItem(e.highlightedLegendItemIx));
		}), this.addEvent(Qt, "afterPositionItem", function(t) {
			this.chart === e.chart && this.chart.renderer && e.updateProxyPositionForItem(t.item);
		}), this.addEvent(Qt, "afterRender", function() {
			this.chart === e.chart && this.chart.renderer && e.recreateProxies() && V(() => e.proxyProvider.updateGroupProxyElementPositions("legend"), fa(T(this.chart.renderer.globalAnimation, !0)).duration);
		});
	}
	updateLegendItemProxyVisibility() {
		let e = this.chart, t = e.legend, n = t.allItems || [], r = t.currentPage || 1, i = t.clipHeight || 0, a;
		n.forEach((n) => {
			if (n.a11yProxyElement) {
				let o = t.pages && t.pages.length, s = n.a11yProxyElement.element, c = !1;
				if (a = n.legendItem || {}, o) {
					let e = a.pageIx || 0;
					c = (a.y || 0) + (a.label ? Math.round(a.label.getBBox().height) : 0) - t.pages[e] > i || e !== r - 1;
				}
				c ? e.styledMode ? ga(s, "highcharts-a11y-invisible") : s.style.visibility = "hidden" : (_a(s, "highcharts-a11y-invisible"), s.style.visibility = "");
			}
		});
	}
	onChartRender() {
		ya(this.chart) || this.removeProxies();
	}
	highlightAdjacentLegendPage(e) {
		let t = this.chart, n = t.legend, r = (n.currentPage || 1) + e, i = n.pages || [];
		if (r > 0 && r <= i.length) {
			let e = 0, i;
			for (let a of n.allItems) ((a.legendItem || {}).pageIx || 0) + 1 === r && (i = t.highlightLegendItem(e), i && (this.highlightedLegendItemIx = e)), ++e;
		}
	}
	updateProxyPositionForItem(e) {
		e.a11yProxyElement && e.a11yProxyElement.refreshPosition();
	}
	recreateProxies() {
		let e = pa.activeElement, t = this.proxyGroup, n = e && t && t.contains(e);
		return this.removeProxies(), ya(this.chart) ? (this.addLegendProxyGroup(), this.proxyLegendItems(), this.updateLegendItemProxyVisibility(), this.updateLegendTitle(), n && this.chart.highlightLegendItem(this.highlightedLegendItemIx), !0) : !1;
	}
	removeProxies() {
		this.proxyProvider.removeGroup("legend");
	}
	updateLegendTitle() {
		let e = this.chart, t = ha((e.legend && e.legend.options.title && e.legend.options.title.text || "").replace(/<br ?\/?>/g, " "), e.renderer.forExport), n = e.langFormat("accessibility.legend.legendLabel" + (t ? "" : "NoTitle"), {
			chart: e,
			legendTitle: t,
			chartTitle: ma(e)
		});
		this.proxyProvider.updateGroupAttrs("legend", { "aria-label": n });
	}
	addLegendProxyGroup() {
		let e = this.chart.options.accessibility.landmarkVerbosity === "all" ? "region" : null;
		this.proxyGroup = this.proxyProvider.addGroup("legend", "ul", {
			"aria-label": "_placeholder_",
			role: e
		});
	}
	proxyLegendItems() {
		let e = this, t = (this.chart.legend || {}).allItems || [], n;
		t.forEach((t) => {
			n = t.legendItem || {}, n.label && n.label.element && e.proxyLegendItem(t);
		});
	}
	proxyLegendItem(e) {
		let t = e.legendItem || {}, n = e.legendItem?.label, r = n?.element, i = t.label?.styles?.textOverflow === "ellipsis";
		if (!t.label || !t.group) return;
		let a = this.chart.langFormat("accessibility.legend.legendItem", {
			chart: this.chart,
			itemName: ha(e.name, this.chart.renderer.forExport),
			item: e
		}), o = {
			tabindex: -1,
			"aria-pressed": e.visible,
			"aria-label": a,
			title: ""
		};
		i && (r.textContent || "").indexOf("…") !== -1 && (o.title = n?.textStr);
		let s = t.group.div ? t.label : t.group;
		e.a11yProxyElement = this.proxyProvider.addProxyElement("legend", {
			click: t.label,
			visual: s.element
		}, "button", o);
	}
	getKeyboardNavigation() {
		let e = this.keyCodes, t = this, n = this.chart;
		return new fi(n, {
			keyCodeMap: [
				[[
					e.left,
					e.right,
					e.up,
					e.down
				], function(e) {
					return t.onKbdArrowKey(this, e);
				}],
				[[e.enter, e.space], function() {
					return t.onKbdClick(this);
				}],
				[[e.pageDown, e.pageUp], function(n) {
					let r = n === e.pageDown ? 1 : -1;
					return t.highlightAdjacentLegendPage(r), this.response.success;
				}]
			],
			validate: function() {
				return t.shouldHaveLegendNavigation();
			},
			init: function() {
				n.highlightLegendItem(0), t.highlightedLegendItemIx = 0;
			},
			terminate: function() {
				t.highlightedLegendItemIx = -1, n.legend.allItems.forEach((e) => ba(!1, e));
			}
		});
	}
	onKbdArrowKey(e, t) {
		let { keyCodes: { left: n, up: r }, highlightedLegendItemIx: i, chart: a } = this, o = a.legend.allItems.length, s = a.options.accessibility.keyboardNavigation.wrapAround, c = t === n || t === r ? -1 : 1;
		return a.highlightLegendItem(i + c) ? this.highlightedLegendItemIx += c : s && o > 1 && (this.highlightedLegendItemIx = c > 0 ? 0 : o - 1, a.highlightLegendItem(this.highlightedLegendItemIx)), e.response.success;
	}
	onKbdClick(e) {
		let t = this.chart.legend.allItems[this.highlightedLegendItemIx];
		return t && t.a11yProxyElement && t.a11yProxyElement.click(), e.response.success;
	}
	shouldHaveLegendNavigation() {
		if (!ya(this.chart)) return !1;
		let e = this.chart, t = (e.options.legend || {}).accessibility || {};
		return !!(e.legend.display && t.keyboardNavigation && t.keyboardNavigation.enabled);
	}
	destroy() {
		this.removeProxies();
	}
};
(function(e) {
	function t(e) {
		let t = this.legend.allItems, r = this.accessibility && this.accessibility.components.legend.highlightedLegendItemIx, i = t[e], a = i?.legendItem || {};
		if (i) {
			n(r) && t[r] && ba(!1, t[r]), va(this.legend, e);
			let o = a.label, s = i.a11yProxyElement && i.a11yProxyElement.innerElement;
			return o && o.element && s && this.setFocusToElement(o, s), ba(!0, i), !0;
		}
		return !1;
	}
	function r(e, n) {
		let r = e.prototype;
		r.highlightLegendItem || (r.highlightLegendItem = t, P(n, "afterColorizeItem", i));
	}
	e.compose = r;
	function i(e) {
		let t = this.chart.options.accessibility, n = e.item;
		t.enabled && n && n.a11yProxyElement && n.a11yProxyElement.innerElement.setAttribute("aria-pressed", e.visible ? "true" : "false");
	}
})(xa ||= {});
var Sa = xa, { isTouchDevice: Ca } = H, wa = [], Ta;
function Ea(e, t) {
	if (w(wa, e)) {
		let n = e.prototype;
		Ta = t, n.callbacks.push(Ma), P(e, "afterAddSeries", Da), P(e, "afterSetChartSize", Oa), P(e, "afterUpdate", ka), P(e, "beforeRender", Aa), P(e, "beforeShowResetZoom", ja), P(e, "update", Na);
	}
}
function Da() {
	this.navigator && this.navigator.setBaseSeries(null, !1);
}
function Oa() {
	let e = this.legend, t = this.navigator, n, r, i;
	if (t) {
		n = e && e.options, r = t.xAxis, i = t.yAxis;
		let { scrollbarHeight: a, scrollButtonSize: o } = t;
		this.inverted ? (t.left = t.opposite ? this.chartWidth - a - t.height : this.spacing[3] + a, t.top = this.plotTop + o) : (t.left = T(r.left, this.plotLeft + o), t.top = t.navigatorOptions.top || this.chartHeight - t.height - a - (this.scrollbar?.options.margin || 0) - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (n && n.verticalAlign === "bottom" && n.layout !== "proximate" && n.enabled && !n.floating ? e.legendHeight + T(n.margin, 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0)), r && i && (this.inverted ? r.options.left = i.options.left = t.left : r.options.top = i.options.top = t.top, r.setAxisSize(), i.setAxisSize());
	}
}
function ka(e) {
	!this.navigator && !this.scroller && (this.options.navigator.enabled || this.options.scrollbar.enabled) && (this.scroller = this.navigator = new Ta(this), T(e.redraw, !0) && this.redraw(e.animation));
}
function Aa() {
	let e = this.options;
	(e.navigator.enabled || e.scrollbar.enabled) && (this.scroller = this.navigator = new Ta(this));
}
function ja() {
	let e = this.options, t = e.navigator, n = e.rangeSelector;
	if ((t && t.enabled || n && n.enabled) && (!Ca && this.zooming.type === "x" || Ca && this.zooming.pinchType === "x")) return !1;
}
function Ma(e) {
	let t = e.navigator;
	if (t && e.xAxis[0]) {
		let n = e.xAxis[0].getExtremes();
		t.render(n.min, n.max);
	}
}
function Na(e) {
	let t = e.options.navigator || {}, n = e.options.scrollbar || {};
	!this.navigator && !this.scroller && (t.enabled || n.enabled) && (x(!0, this.options.navigator, t), x(!0, this.options.scrollbar, n), delete e.options.navigator, delete e.options.scrollbar);
}
var Pa = { compose: Ea }, { isTouchDevice: Fa } = H;
function Ia() {
	let e = this;
	e.navigatorAxis ||= new Ra(e);
}
function La(e) {
	let t = this, n = t.chart, r = n.options, i = r.navigator, a = t.navigatorAxis, o = n.zooming.pinchType, s = r.rangeSelector, c = n.zooming.type, l;
	if (t.isXAxis && (i?.enabled || s?.enabled)) {
		if (c === "y" && e.trigger === "zoom") l = !1;
		else if ((e.trigger === "zoom" && c === "xy" || Fa && o === "xy") && t.options.range) {
			let n = a.previousZoom;
			G(e.min) ? a.previousZoom = [t.min, t.max] : n && (e.min = n[0], e.max = n[1], a.previousZoom = void 0);
		}
	}
	l !== void 0 && e.preventDefault();
}
var Ra = class {
	static compose(e) {
		e.keepProps.includes("navigatorAxis") || (e.keepProps.push("navigatorAxis"), P(e, "init", Ia), P(e, "setExtremes", La));
	}
	constructor(e) {
		this.axis = e;
	}
	destroy() {
		this.axis = void 0;
	}
	toFixedRange(e, t, r, i) {
		let a = this.axis, o = (a.pointRange || 0) / 2, s = T(r, a.translate(e, !0, !a.horiz)), c = T(i, a.translate(t, !0, !a.horiz));
		return G(r) || (s = D(s + o)), G(i) || (c = D(c - o)), (!n(s) || !n(c)) && (s = c = void 0), {
			min: s,
			max: c
		};
	}
}, { seriesTypes: za } = J, Ba = {
	height: 40,
	margin: 22,
	maskInside: !0,
	handles: {
		width: 7,
		borderRadius: 0,
		height: 15,
		symbols: ["navigator-handle", "navigator-handle"],
		enabled: !0,
		lineWidth: 1,
		backgroundColor: "var(--highcharts-neutral-color-5)",
		borderColor: "var(--highcharts-neutral-color-40)"
	},
	maskFill: "color-mix(var(--highcharts-highlight-color-60) 30%, transparent)",
	outlineColor: "var(--highcharts-neutral-color-40)",
	outlineWidth: 1,
	series: {
		type: za.areaspline === void 0 ? "line" : "areaspline",
		fillOpacity: .05,
		lineWidth: 1,
		compare: null,
		sonification: { enabled: !1 },
		dataGrouping: {
			approximation: "average",
			enabled: !0,
			groupPixelWidth: 2,
			firstAnchor: "firstPoint",
			anchor: "middle",
			lastAnchor: "lastPoint",
			units: [
				["millisecond", [
					1,
					2,
					5,
					10,
					20,
					25,
					50,
					100,
					200,
					500
				]],
				["second", [
					1,
					2,
					5,
					10,
					15,
					30
				]],
				["minute", [
					1,
					2,
					5,
					10,
					15,
					30
				]],
				["hour", [
					1,
					2,
					3,
					4,
					6,
					8,
					12
				]],
				["day", [
					1,
					2,
					3,
					4
				]],
				["week", [
					1,
					2,
					3
				]],
				["month", [
					1,
					3,
					6
				]],
				["year", null]
			]
		},
		dataLabels: {
			enabled: !1,
			zIndex: 2
		},
		id: "highcharts-navigator-series",
		className: "highcharts-navigator-series",
		lineColor: null,
		marker: { enabled: !1 },
		threshold: null
	},
	xAxis: {
		className: "highcharts-navigator-xaxis",
		tickLength: 0,
		lineWidth: 0,
		gridLineColor: "var(--highcharts-neutral-color-10)",
		id: "navigator-x-axis",
		gridLineWidth: 1,
		tickPixelInterval: 200,
		labels: {
			align: "left",
			style: {
				color: "var(--highcharts-neutral-color-100)",
				fontSize: "0.7em",
				opacity: .6,
				textOutline: "2px contrast"
			},
			x: 3,
			y: -4
		},
		crosshair: !1
	},
	yAxis: {
		className: "highcharts-navigator-yaxis",
		gridLineWidth: 0,
		startOnTick: !1,
		endOnTick: !1,
		minPadding: .1,
		id: "navigator-y-axis",
		maxPadding: .1,
		labels: { enabled: !1 },
		crosshair: !1,
		title: { text: void 0 },
		tickLength: 0,
		tickWidth: 0
	}
};
//#endregion
//#region node_modules/highcharts/es-modules/Stock/Navigator/NavigatorSymbols.js
function Va(e, t, n, r, i = {}) {
	let a = i.width ? i.width / 2 : n, o = E(i.borderRadius || 0, Math.min(a * 2, r));
	return r = i.height || r, [
		[
			"M",
			-1.5,
			r / 2 - 3.5
		],
		[
			"L",
			-1.5,
			r / 2 + 4.5
		],
		[
			"M",
			.5,
			r / 2 - 3.5
		],
		[
			"L",
			.5,
			r / 2 + 4.5
		],
		...ze.rect(-a - 1, .5, a * 2 + 1, r, { r: o })
	];
}
var Ha = { "navigator-handle": Va };
//#endregion
//#region node_modules/highcharts/es-modules/Stock/Utilities/StockUtilities.js
function Ua(e) {
	let t = this.xAxis[0];
	this.fixedRange = G(t.dataMax) && G(t.dataMin) && e ? Math.min(e, t.dataMax - t.dataMin) : e;
}
var Wa = { setFixedRange: Ua }, { defaultOptions: Ga } = O, { composed: Ka } = H, { setFixedRange: qa } = Wa;
function Ja(e, t, n) {
	Ra.compose(t), w(Ka, "Navigator") && (e.prototype.setFixedRange = qa, a(rt.prototype.symbols, Ha), a(Ga, { navigator: Ba }), P(n, "afterUpdate", Ya));
}
function Ya() {
	this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, !1);
}
var Xa = { compose: Ja }, { composed: Za } = H, Qa;
(function(e) {
	let t;
	function n(e, n) {
		w(Za, "Axis.Scrollbar") && (t = n, P(e, "afterGetOffset", i), P(e, "afterInit", a), P(e, "afterRender", o));
	}
	e.compose = n;
	function r(e) {
		let t = T(e.options?.min, e.min), n = T(e.options?.max, e.max);
		return {
			axisMin: t,
			axisMax: n,
			scrollMin: G(e.dataMin) ? Math.min(t, e.min ?? Infinity, e.dataMin, e.threshold ?? Infinity) : t,
			scrollMax: e.treeGrid?.adjustedMax ?? (G(e.dataMax) ? Math.max(n, e.max ?? -Infinity, e.dataMax, e.threshold ?? -Infinity) : n)
		};
	}
	function i() {
		let e = this, t = e.scrollbar, n = t && !t.options.opposite, r = e.horiz ? 2 : n ? 3 : 1;
		t && (e.chart.scrollbarsOffsets = [0, 0], e.chart.axisOffset[r] += t.size + (t.options.margin || 0));
	}
	function a() {
		let e = this;
		e.options?.scrollbar?.enabled && (e.options.scrollbar.vertical = !e.horiz, e.options.startOnTick = e.options.endOnTick = !1, e.scrollbar = new t(e.chart.renderer, e.options.scrollbar, e.chart), P(e.scrollbar, "changed", function(t) {
			let { axisMin: n, axisMax: i, scrollMin: a, scrollMax: o } = r(e), s = e.toPixels(a), c = e.toPixels(o) - s, l, u;
			if (!(!G(n) || !G(i))) if (e.horiz && !e.reversed || !e.horiz && e.reversed ? (l = Math.min(o, e.toValue(s + c * this.to)), u = Math.max(a, e.toValue(s + c * this.from))) : (l = Math.min(o, e.toValue(s + c * (1 - this.from))), u = Math.max(a, e.toValue(s + c * (1 - this.to)))), this.shouldUpdateExtremes(t.DOMType)) {
				let n = t.DOMType === "mousemove" || t.DOMType === "touchmove" ? !1 : void 0;
				e.setExtremes(D(u), D(l), !0, n, t);
			} else this.setRange(this.from, this.to);
		}));
	}
	function o() {
		let e = this, { scrollMin: t, scrollMax: n } = r(e), i = e.scrollbar, a = (e.axisTitleMargin || 0) + (e.titleOffset || 0), o = e.chart.scrollbarsOffsets, s = e.options.margin || 0, c, l, u;
		if (i && o) {
			if (e.horiz) e.opposite || (o[1] += a), i.position(e.left, e.top + e.height + 2 + o[1] - (e.opposite ? s : 0), e.width, e.height), e.opposite || (o[1] += s), c = 1;
			else {
				e.opposite && (o[0] += a);
				let t;
				t = i.options.opposite ? e.left + e.width + 2 + o[0] - (e.opposite ? 0 : s) : e.opposite ? 0 : s, i.position(t, e.top, e.width, e.height), e.opposite && (o[0] += s), c = 0;
			}
			if (o[c] += i.size + (i.options.margin || 0), isNaN(t) || isNaN(n) || !G(e.min) || !G(e.max) || G(e.dataMin) && e.dataMin === e.dataMax) i.setRange(0, 1);
			else if (e.min === e.max) {
				let t = e.pointRange / (e.dataMax + 1);
				l = t * e.min, u = t * (e.max + 1), i.setRange(l, u);
			} else l = (e.toPixels(e.min) - e.toPixels(t)) / (e.toPixels(n) - e.toPixels(t)), u = (e.toPixels(e.max) - e.toPixels(t)) / (e.toPixels(n) - e.toPixels(t)), e.horiz && !e.reversed || !e.horiz && e.reversed ? i.setRange(l, u) : i.setRange(1 - u, 1 - l);
		}
	}
})(Qa ||= {});
var $a = Qa, eo = {
	height: 10,
	barBorderRadius: 5,
	buttonBorderRadius: 0,
	buttonsEnabled: !1,
	liveRedraw: void 0,
	margin: void 0,
	minWidth: 6,
	opposite: !0,
	step: .2,
	zIndex: 3,
	barBackgroundColor: "var(--highcharts-neutral-color-20)",
	barBorderWidth: 0,
	barBorderColor: "var(--highcharts-neutral-color-20)",
	buttonArrowColor: "var(--highcharts-neutral-color-80)",
	buttonBackgroundColor: "var(--highcharts-neutral-color-10)",
	buttonBorderColor: "var(--highcharts-neutral-color-20)",
	buttonBorderWidth: 1,
	rifleColor: "none",
	trackBackgroundColor: "rgba(255, 255, 255, 0.001)",
	trackBorderColor: "var(--highcharts-neutral-color-20)",
	trackBorderRadius: 5,
	trackBorderWidth: 1
}, { defaultOptions: to } = O, { composed: no } = H, ro = class e {
	static compose(t) {
		$a.compose(t, e), w(no, "Scrollbar") && a(to, { scrollbar: eo });
	}
	static swapXY(e, t) {
		return t && e.forEach((e) => {
			let t = e.length, n;
			for (let r = 0; r < t; r += 2) n = e[r + 1], typeof n == "number" && (e[r + 1] = e[r + 2], e[r + 2] = n);
		}), e;
	}
	constructor(e, t, n) {
		this._events = [], this.chartX = 0, this.chartY = 0, this.from = 0, this.scrollbarButtons = [], this.scrollbarLeft = 0, this.scrollbarStrokeWidth = 1, this.scrollbarTop = 0, this.size = 0, this.to = 0, this.trackBorderWidth = 1, this.x = 0, this.y = 0, this.init(e, t, n);
	}
	addEvents() {
		let e = this.options.inverted ? [1, 0] : [0, 1], t = this.scrollbarButtons, n = this.scrollbarGroup.element, r = this.track.element, i = this.mouseDownHandler.bind(this), a = this.mouseMoveHandler.bind(this), o = this.mouseUpHandler.bind(this), s = [
			[
				t[e[0]].element,
				"click",
				this.buttonToMinClick.bind(this)
			],
			[
				t[e[1]].element,
				"click",
				this.buttonToMaxClick.bind(this)
			],
			[
				r,
				"click",
				this.trackClick.bind(this)
			],
			[
				n,
				"mousedown",
				i
			],
			[
				n.ownerDocument,
				"mousemove",
				a
			],
			[
				n.ownerDocument,
				"mouseup",
				o
			],
			[
				n,
				"touchstart",
				i
			],
			[
				n.ownerDocument,
				"touchmove",
				a
			],
			[
				n.ownerDocument,
				"touchend",
				o
			]
		];
		s.forEach(function(e) {
			P.apply(null, e);
		}), this._events = s;
	}
	buttonToMaxClick(e) {
		let t = this, n = (t.to - t.from) * T(t.options.step, .2);
		t.updatePosition(t.from + n, t.to + n), z(t, "changed", {
			from: t.from,
			to: t.to,
			trigger: "scrollbar",
			DOMEvent: e
		});
	}
	buttonToMinClick(e) {
		let t = this, n = D(t.to - t.from) * T(t.options.step, .2);
		t.updatePosition(D(t.from - n), D(t.to - n)), z(t, "changed", {
			from: t.from,
			to: t.to,
			trigger: "scrollbar",
			DOMEvent: e
		});
	}
	cursorToScrollbarPosition(e) {
		let t = this, n = t.options, r = n.minWidth > t.calculatedWidth ? n.minWidth : 0;
		return {
			chartX: (e.chartX - t.x - t.xOffset) / (t.barWidth - r),
			chartY: (e.chartY - t.y - t.yOffset) / (t.barWidth - r)
		};
	}
	destroy() {
		let e = this, t = e.chart.scroller;
		e.removeEvents(), [
			"track",
			"scrollbarRifles",
			"scrollbar",
			"scrollbarGroup",
			"group"
		].forEach(function(t) {
			e[t] && e[t].destroy && (e[t] = e[t].destroy());
		}), t && e === t.scrollbar && (t.scrollbar = null, y(t.scrollbarButtons));
	}
	drawScrollbarButton(t) {
		let n = this, r = n.renderer, i = n.scrollbarButtons, a = n.options, o = n.size, s = r.g().add(n.group);
		if (i.push(s), a.buttonsEnabled) {
			let c = r.rect().addClass("highcharts-scrollbar-button").add(s);
			n.chart.styledMode || c.attr({
				stroke: a.buttonBorderColor,
				"stroke-width": a.buttonBorderWidth,
				fill: a.buttonBackgroundColor
			}), c.attr(c.crisp({
				x: -.5,
				y: -.5,
				width: o,
				height: o,
				r: a.buttonBorderRadius
			}, c.strokeWidth()));
			let l = r.path(e.swapXY([
				[
					"M",
					o / 2 + (t ? -1 : 1),
					o / 2 - 3
				],
				[
					"L",
					o / 2 + (t ? -1 : 1),
					o / 2 + 3
				],
				[
					"L",
					o / 2 + (t ? 2 : -2),
					o / 2
				]
			], a.vertical)).addClass("highcharts-scrollbar-arrow").add(i[t]);
			n.chart.styledMode || l.attr({ fill: a.buttonArrowColor });
		}
	}
	init(e, t, n) {
		let r = this;
		r.scrollbarButtons = [], r.renderer = e, r.userOptions = t, r.options = x(eo, to.scrollbar, t), r.options.margin = T(r.options.margin, 10), r.chart = n, r.size = T(r.options.size, r.options.height), t.enabled && (r.render(), r.addEvents());
	}
	mouseDownHandler(e) {
		let t = this, n = t.chart.pointer?.normalize(e) || e, r = t.cursorToScrollbarPosition(n);
		t.chartX = r.chartX, t.chartY = r.chartY, t.initPositions = [t.from, t.to], t.grabbedCenter = !0;
	}
	mouseMoveHandler(e) {
		let t = this, n = t.chart.pointer?.normalize(e) || e, r = t.options.vertical ? "chartY" : "chartX", i = t.initPositions || [], a, o, s;
		t.grabbedCenter && (!e.touches || e.touches[0][r] !== 0) && (o = t.cursorToScrollbarPosition(n)[r], a = t[r], s = o - a, t.hasDragged = !0, t.updatePosition(i[0] + s, i[1] + s), t.hasDragged && z(t, "changed", {
			from: t.from,
			to: t.to,
			trigger: "scrollbar",
			DOMType: e.type,
			DOMEvent: e
		}));
	}
	mouseUpHandler(e) {
		let t = this;
		t.hasDragged && z(t, "changed", {
			from: t.from,
			to: t.to,
			trigger: "scrollbar",
			DOMType: e.type,
			DOMEvent: e
		}), t.grabbedCenter = t.hasDragged = t.chartX = t.chartY = null;
	}
	position(e, t, n, r) {
		let i = this, { buttonsEnabled: a, margin: o = 0, vertical: s } = i.options, c = i.rendered ? "animate" : "attr", l = r, u = 0;
		i.group.show(), i.x = e, i.y = t + this.trackBorderWidth, i.width = n, i.height = r, i.xOffset = l, i.yOffset = u, s ? (i.width = i.yOffset = n = u = i.size, i.xOffset = l = 0, i.yOffset = u = a ? i.size : 0, i.barWidth = r - (a ? n * 2 : 0), i.x = e += o) : (i.height = r = i.size, i.xOffset = l = a ? i.size : 0, i.barWidth = n - (a ? r * 2 : 0), i.y += o), i.group[c]({
			translateX: e,
			translateY: i.y
		}), i.track[c]({
			width: n,
			height: r
		}), i.scrollbarButtons[1][c]({
			translateX: s ? 0 : n - l,
			translateY: s ? r - u : 0
		});
	}
	removeEvents() {
		this._events.forEach(function(e) {
			_.apply(null, e);
		}), this._events.length = 0;
	}
	render() {
		let t = this, n = t.renderer, r = t.options, i = t.size, a = t.chart.styledMode, o = n.g("scrollbar").attr({ zIndex: r.zIndex }).hide().add();
		t.group = o, t.track = n.rect().addClass("highcharts-scrollbar-track").attr({
			r: r.trackBorderRadius || 0,
			height: i,
			width: i
		}).add(o), a || t.track.attr({
			fill: r.trackBackgroundColor,
			stroke: r.trackBorderColor,
			"stroke-width": r.trackBorderWidth
		});
		let s = t.trackBorderWidth = t.track.strokeWidth();
		t.track.attr({
			x: -de(0, s),
			y: -de(0, s)
		}), t.scrollbarGroup = n.g().add(o), t.scrollbar = n.rect().addClass("highcharts-scrollbar-thumb").attr({
			height: i - s,
			width: i - s,
			r: r.barBorderRadius || 0
		}).add(t.scrollbarGroup), t.scrollbarRifles = n.path(e.swapXY([
			[
				"M",
				-3,
				i / 4
			],
			[
				"L",
				-3,
				2 * i / 3
			],
			[
				"M",
				0,
				i / 4
			],
			[
				"L",
				0,
				2 * i / 3
			],
			[
				"M",
				3,
				i / 4
			],
			[
				"L",
				3,
				2 * i / 3
			]
		], r.vertical)).addClass("highcharts-scrollbar-rifles").add(t.scrollbarGroup), a || (t.scrollbar.attr({
			fill: r.barBackgroundColor,
			stroke: r.barBorderColor,
			"stroke-width": r.barBorderWidth
		}), t.scrollbarRifles.attr({
			stroke: r.rifleColor,
			"stroke-width": 1
		})), t.scrollbarStrokeWidth = t.scrollbar.strokeWidth(), t.scrollbarGroup.translate(-de(0, t.scrollbarStrokeWidth), -de(0, t.scrollbarStrokeWidth)), t.drawScrollbarButton(0), t.drawScrollbarButton(1);
	}
	setRange(e, t) {
		let n = this, r = n.options, i = r.vertical, a = r.minWidth, o = n.barWidth, s = this.rendered && !this.hasDragged && !(this.chart.navigator && this.chart.navigator.hasDragged) ? "animate" : "attr";
		if (!G(o)) return;
		let c = o * Math.min(t, 1), l, u;
		e = Math.max(e, 0), l = Math.ceil(o * e), n.calculatedWidth = u = D(c - l), u < a && (l = (o - a + u) * e, u = a);
		let d = Math.floor(l + n.xOffset + n.yOffset), f = u / 2 - .5;
		n.from = e, n.to = t, i ? (n.scrollbarGroup[s]({ translateY: d }), n.scrollbar[s]({ height: u }), n.scrollbarRifles[s]({ translateY: f }), n.scrollbarTop = d, n.scrollbarLeft = 0) : (n.scrollbarGroup[s]({ translateX: d }), n.scrollbar[s]({ width: u }), n.scrollbarRifles[s]({ translateX: f }), n.scrollbarLeft = d, n.scrollbarTop = 0), u <= 12 ? n.scrollbarRifles.hide() : n.scrollbarRifles.show(), r.showFull === !1 && (e <= 0 && t >= 1 ? n.group.hide() : n.group.show()), n.rendered = !0;
	}
	shouldUpdateExtremes(e) {
		return T(this.options.liveRedraw, H.svg && !H.isTouchDevice && !this.chart.boosted) || e === "mouseup" || e === "touchend" || !G(e);
	}
	trackClick(e) {
		let t = this, n = t.chart.pointer?.normalize(e) || e, r = t.to - t.from, i = t.y + t.scrollbarTop, a = t.x + t.scrollbarLeft;
		t.options.vertical && n.chartY > i || !t.options.vertical && n.chartX > a ? t.updatePosition(t.from + r, t.to + r) : t.updatePosition(t.from - r, t.to - r), z(t, "changed", {
			from: t.from,
			to: t.to,
			trigger: "scrollbar",
			DOMEvent: e
		});
	}
	update(e) {
		this.destroy(), this.init(this.chart.renderer, x(!0, this.options, e), this.chart);
	}
	updatePosition(e, t) {
		t > 1 && (e = D(1 - D(t - e)), t = 1), e < 0 && (t = D(t - e), e = 0), this.from = e, this.to = t;
	}
};
ro.defaultOptions = eo;
//#endregion
//#region node_modules/highcharts/es-modules/Stock/Navigator/Navigator.js
var { defaultOptions: io } = O, { isTouchDevice: ao } = H;
function oo(e, ...t) {
	let r = [].filter.call(t, n);
	if (r.length) return Math[e].apply(0, r);
}
var so = class e {
	static compose(t, n, r) {
		Pa.compose(t, e), Xa.compose(t, n, r);
	}
	constructor(e) {
		this.isDirty = !1, this.scrollbarHeight = 0, this.init(e);
	}
	drawHandle(e, t, n, r) {
		let i = this, a = i.navigatorOptions.handles.height;
		i.handles[t][r](n ? {
			translateX: Math.round(i.left + i.height / 2),
			translateY: Math.round(i.top + parseInt(e, 10) + .5 - a)
		} : {
			translateX: Math.round(i.left + parseInt(e, 10)),
			translateY: Math.round(i.top + i.height / 2 - a / 2 - 1)
		});
	}
	drawOutline(e, t, n, r) {
		let i = this, a = i.navigatorOptions.maskInside, o = i.outline.strokeWidth(), s = o / 2, c = o % 2 / 2, l = i.scrollButtonSize, u = i.size, d = i.top, f = i.height, p = d - s, m = d + f, h = i.left, g, _;
		n ? (g = d + t + c, t = d + e + c, _ = [
			[
				"M",
				h + f,
				d - l - c
			],
			[
				"L",
				h + f,
				g
			],
			[
				"L",
				h,
				g
			],
			[
				"M",
				h,
				t
			],
			[
				"L",
				h + f,
				t
			],
			[
				"L",
				h + f,
				d + u + l
			]
		], a && _.push([
			"M",
			h + f,
			g - s
		], [
			"L",
			h + f,
			t + s
		])) : (h -= l, e += h + l - c, t += h + l - c, _ = [
			[
				"M",
				h,
				p
			],
			[
				"L",
				e,
				p
			],
			[
				"L",
				e,
				m
			],
			[
				"M",
				t,
				m
			],
			[
				"L",
				t,
				p
			],
			[
				"L",
				h + u + l * 2,
				p
			]
		], a && _.push([
			"M",
			e - s,
			p
		], [
			"L",
			t + s,
			p
		])), i.outline[r]({ d: _ });
	}
	drawMasks(e, t, n, r) {
		let i = this, a = i.left, o = i.top, s = i.height, c, l, u, d;
		n ? (u = [
			a,
			a,
			a
		], d = [
			o,
			o + e,
			o + t
		], l = [
			s,
			s,
			s
		], c = [
			e,
			t - e,
			i.size - t
		]) : (u = [
			a,
			a + e,
			a + t
		], d = [
			o,
			o,
			o
		], l = [
			e,
			t - e,
			i.size - t
		], c = [
			s,
			s,
			s
		]), i.shades.forEach((e, t) => {
			e[r]({
				x: u[t],
				y: d[t],
				width: l[t],
				height: c[t]
			});
		});
	}
	renderElements() {
		let e = this, t = e.navigatorOptions, n = t.maskInside, r = e.chart, i = r.inverted, a = r.renderer, o = { cursor: i ? "ns-resize" : "ew-resize" }, s = e.navigatorGroup ??= a.g("navigator").attr({
			zIndex: 8,
			visibility: "hidden"
		}).add();
		if ([
			!n,
			n,
			!n
		].forEach((n, i) => {
			let c = e.shades[i] ?? (e.shades[i] = a.rect().addClass("highcharts-navigator-mask" + (i === 1 ? "-inside" : "-outside")).add(s));
			r.styledMode || (c.attr({ fill: n ? t.maskFill : "rgba(0,0,0,0)" }), i === 1 && c.css(o));
		}), e.outline ||= a.path().addClass("highcharts-navigator-outline").add(s), r.styledMode || e.outline.attr({
			"stroke-width": t.outlineWidth,
			stroke: t.outlineColor
		}), t.handles?.enabled) {
			let n = !1, i = t.handles, { height: c, width: l } = i;
			[0, 1].forEach((t) => {
				let u = i.symbols[t];
				n ||= e.handles[t]?.symbolName !== u, n && (e.handles[t]?.destroy(), e.handles[t] = a.symbol(u, -l / 2 - 1, 0, l, c, i), e.handles[t].attr({ zIndex: 7 - t }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][t]).add(s)), r.inverted && e.handles[t].attr({
					rotation: 90,
					rotationOriginX: Math.floor(-l / 2),
					rotationOriginY: (c + l) / 2
				}), r.styledMode || e.handles[t].attr({
					fill: i.backgroundColor,
					stroke: i.borderColor,
					"stroke-width": i.lineWidth,
					width: i.width,
					height: i.height,
					x: -l / 2 - 1,
					y: 0
				}).css(o);
			}), n && (e.partsEventsToUnbind?.forEach((e) => {
				e();
			}), e.partsEventsToUnbind = [...e.getPartsEvents("mousedown"), ...e.getPartsEvents("touchstart")]);
		}
	}
	update(e, t = !1) {
		let n = this.chart, r = n.options.chart.inverted !== n.scrollbar?.options.vertical;
		if (x(!0, n.options.navigator, e), this.navigatorOptions = n.options.navigator || {}, this.setOpposite(), G(e.enabled) || r) return this.destroy(), this.navigatorEnabled = e.enabled || this.navigatorEnabled, this.init(n);
		if (this.navigatorEnabled && (this.isDirty = !0, e.adaptToUpdatedData === !1 && this.baseSeries.forEach((e) => {
			_(e, "updatedData", this.updatedDataHandler);
		}, this), e.adaptToUpdatedData && this.baseSeries.forEach((e) => {
			e.eventsToUnbind.push(P(e, "updatedData", this.updatedDataHandler));
		}, this), (e.series || e.baseSeries) && this.setBaseSeries(void 0, !1), e.height || e.xAxis || e.yAxis)) {
			this.height = e.height ?? this.height;
			let t = this.getXAxisOffsets();
			this.xAxis.update({
				...e.xAxis,
				offsets: t,
				[n.inverted ? "width" : "height"]: this.height,
				[n.inverted ? "height" : "width"]: void 0
			}, !1), this.yAxis.update({
				...e.yAxis,
				[n.inverted ? "width" : "height"]: this.height
			}, !1);
		}
		t && n.redraw();
	}
	render(e, t, r, i) {
		let a = this, o = a.chart, s = a.xAxis, c = s.pointRange || 0, l = s.navigatorAxis.fake ? o.xAxis[0] : s, u = a.navigatorEnabled, d = a.rendered, f = o.inverted, p = o.xAxis[0].minRange, m = o.xAxis[0].options.maxRange, h = a.scrollButtonSize, g, _, v, y = a.scrollbarHeight, b, x;
		if (this.hasDragged && !G(r)) return;
		if (this.isDirty && this.renderElements(), e = D(e - c / 2), t = D(t + c / 2), !n(e) || !n(t)) if (d) r = 0, i = T(s.width, l.width);
		else return;
		a.left = T(s.left, o.plotLeft + h + (f ? o.plotWidth : 0));
		let S = a.size = b = T(s.len, (f ? o.plotHeight : o.plotWidth) - 2 * h);
		g = f ? y : b + 2 * h, r = T(r, s.toPixels(e, !0)), i = T(i, s.toPixels(t, !0)), (!n(r) || Math.abs(r) === Infinity) && (r = 0, i = g);
		let C = s.toValue(r, !0), w = s.toValue(i, !0), E = Math.abs(D(w - C));
		G(p) && E < p ? this.grabbedLeft ? r = s.toPixels(w - p - c, !0) : this.grabbedRight && (i = s.toPixels(C + p + c, !0)) : G(m) && D(E - c) > m && (this.grabbedLeft ? r = s.toPixels(w - m - c, !0) : this.grabbedRight && (i = s.toPixels(C + m + c, !0))), a.zoomedMax = F(Math.max(r, i), 0, S), a.zoomedMin = F(a.fixedWidth ? a.zoomedMax - a.fixedWidth : Math.min(r, i), 0, S), a.range = a.zoomedMax - a.zoomedMin, S = Math.round(a.zoomedMax);
		let O = Math.round(a.zoomedMin);
		u && (a.navigatorGroup.attr({ visibility: "inherit" }), x = d && !a.hasDragged ? "animate" : "attr", a.drawMasks(O, S, f, x), a.drawOutline(O, S, f, x), a.navigatorOptions.handles?.enabled && (a.drawHandle(O, 0, f, x), a.drawHandle(S, 1, f, x))), a.scrollbar && (f ? (v = a.top - h, _ = a.left - y + (u || !l.opposite ? 0 : (l.titleOffset || 0) + l.axisTitleMargin), y = b + 2 * h) : (v = a.top + (u ? a.height : -y), _ = a.left - h), a.scrollbar.position(_, v, g, y), a.scrollbar.setRange(a.zoomedMin / (b || 1), a.zoomedMax / (b || 1))), a.rendered = !0, this.isDirty = !1, z(this, "afterRender");
	}
	addMouseEvents() {
		let e = this, t = e.chart, n = t.container, r = [], i, a;
		e.mouseMoveHandler = i = function(t) {
			e.onMouseMove(t);
		}, e.mouseUpHandler = a = function(t) {
			e.onMouseUp(t);
		}, r.push(P(t.renderTo, "mousemove", i), P(n.ownerDocument, "mouseup", a), P(t.renderTo, "touchmove", i), P(n.ownerDocument, "touchend", a)), e.eventsToUnbind = r, e.series && e.series[0] && r.push(P(e.series[0].xAxis, "foundExtremes", function() {
			t.navigator?.modifyNavigatorAxisExtremes();
		}));
	}
	getPartsEvents(e) {
		let t = this, n = [];
		return ["shades", "handles"].forEach((r) => {
			t[r].forEach(function(i, a) {
				n.push(P(i.element, e, function(e) {
					t[`${r}Mousedown`](e, a);
				}));
			});
		}), n;
	}
	shadesMousedown(e, t) {
		e = this.chart.pointer?.normalize(e) || e;
		let n = this, r = n.chart, i = n.xAxis, a = n.zoomedMin, o = n.size, s = n.range, c = n.left, l = e.chartX, u, d, f, p;
		r.inverted && (l = e.chartY, c = n.top), t === 1 ? (n.grabbedCenter = l, n.fixedWidth = s, n.dragOffset = l - a) : (p = l - c - s / 2, t === 0 ? p = Math.max(0, p) : t === 2 && p + s >= o && (p = o - s, n.reversedExtremes ? (p -= s, d = n.getUnionExtremes()?.dataMin) : u = n.getUnionExtremes()?.dataMax), p !== a && (n.fixedWidth = s, f = i.navigatorAxis.toFixedRange(p, p + s, d, u), G(f.min) && z(this, "setRange", {
			min: Math.min(f.min, f.max),
			max: Math.max(f.min, f.max),
			redraw: !0,
			eventArguments: { trigger: "navigator" }
		})));
	}
	handlesMousedown(e, t) {
		e = this.chart.pointer?.normalize(e) || e;
		let n = this, r = n.chart, i = r.xAxis[0], a = n.reversedExtremes;
		t === 0 ? (n.grabbedLeft = !0, n.otherHandlePos = n.zoomedMax, n.fixedExtreme = a ? i.min : i.max) : (n.grabbedRight = !0, n.otherHandlePos = n.zoomedMin, n.fixedExtreme = a ? i.max : i.min), r.setFixedRange(void 0);
	}
	onMouseMove(e) {
		let t = this, n = t.chart, r = t.navigatorSize, i = t.range, a = t.dragOffset, o = n.inverted, s = t.left, c;
		(!e.touches || e.touches[0].pageX !== 0) && (e = n.pointer?.normalize(e) || e, c = e.chartX, o && (s = t.top, c = e.chartY), t.grabbedLeft ? (t.hasDragged = !0, t.render(0, 0, c - s, t.otherHandlePos)) : t.grabbedRight ? (t.hasDragged = !0, t.render(0, 0, t.otherHandlePos, c - s)) : t.grabbedCenter && a && (t.hasDragged = !0, c < a ? c = a : c > r + a - i && (c = r + a - i), t.render(0, 0, c - a, c - a + i)), t.hasDragged && T(t.scrollbarOptions?.liveRedraw, !ao && !this.chart.boosted) && (e.DOMType = e.type, setTimeout(function() {
			t.onMouseUp(e);
		}, 0)));
	}
	onMouseUp(e) {
		let t = this, r = t.chart, i = t.xAxis, a = t.scrollbar, o = e.DOMEvent || e, s = r.inverted, c = t.rendered && !t.hasDragged ? "animate" : "attr", l, u, d, f, p, m;
		(t.hasDragged && (!a || !a.hasDragged) || e.trigger === "scrollbar") && (d = t.getUnionExtremes(), t.zoomedMin === t.otherHandlePos ? f = t.fixedExtreme : t.zoomedMax === t.otherHandlePos && (p = t.fixedExtreme), t.zoomedMax === t.size && (p = t.reversedExtremes ? d.dataMin : d.dataMax), t.zoomedMin === 0 && (f = t.reversedExtremes ? d.dataMax : d.dataMin), m = i.navigatorAxis.toFixedRange(t.zoomedMin, t.zoomedMax, f, p), G(m.min) && z(this, "setRange", {
			min: Math.min(m.min, m.max),
			max: Math.max(m.min, m.max),
			redraw: !0,
			animation: !t.hasDragged && null,
			eventArguments: {
				trigger: "navigator",
				triggerOp: "navigator-drag",
				DOMEvent: o
			}
		})), e.DOMType !== "mousemove" && e.DOMType !== "touchmove" && (t.grabbedLeft = t.grabbedRight = t.grabbedCenter = t.fixedWidth = t.fixedExtreme = t.otherHandlePos = t.hasDragged = t.dragOffset = null), t.navigatorEnabled && n(t.zoomedMin) && n(t.zoomedMax) && (u = Math.round(t.zoomedMin), l = Math.round(t.zoomedMax), t.shades && t.drawMasks(u, l, s, c), t.outline && t.drawOutline(u, l, s, c), t.navigatorOptions.handles?.enabled && Object.keys(t.handles).length === t.handles.length && (t.drawHandle(u, 0, s, c), t.drawHandle(l, 1, s, c)));
	}
	removeEvents() {
		this.eventsToUnbind?.forEach((e) => {
			e();
		}), this.eventsToUnbind = void 0, this.removeBaseSeriesEvents();
	}
	removeBaseSeriesEvents() {
		let e = this.baseSeries || [];
		this.navigatorEnabled && e[0] && (this.navigatorOptions.adaptToUpdatedData !== !1 && e.forEach(function(e) {
			_(e, "updatedData", this.updatedDataHandler);
		}, this), e[0].xAxis && _(e[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
	}
	getXAxisOffsets() {
		return this.chart.inverted ? [
			this.scrollButtonSize,
			0,
			-this.scrollButtonSize,
			0
		] : [
			0,
			-this.scrollButtonSize,
			0,
			this.scrollButtonSize
		];
	}
	init(e) {
		let t = e.options, r = t.navigator || {}, i = r.enabled, a = t.scrollbar || {}, o = a.enabled, s = i && r.height || 0, c = o && a.height || 0, l = a.buttonsEnabled && c || 0;
		this.handles = [], this.shades = [], this.chart = e, this.setBaseSeries(), this.height = s, this.scrollbarHeight = c, this.scrollButtonSize = l, this.scrollbarEnabled = o, this.navigatorEnabled = !!i, this.navigatorOptions = r, this.scrollbarOptions = a, this.setOpposite();
		let u = this, d = u.baseSeries, f = e.xAxis.length, p = e.yAxis.length, m = d && d[0] && d[0].xAxis || e.xAxis[0] || { options: {} };
		if (e.isDirtyBox = !0, u.navigatorEnabled) {
			let t = this.getXAxisOffsets();
			u.xAxis = new bt(e, x({
				breaks: m.options.breaks,
				ordinal: m.options.ordinal,
				overscroll: m.options.overscroll
			}, r.xAxis, {
				type: "datetime",
				yAxis: r.yAxis?.id,
				index: f,
				isInternal: !0,
				offset: 0,
				keepOrdinalPadding: !0,
				startOnTick: !1,
				endOnTick: !1,
				minPadding: m.options.ordinal ? 0 : m.options.minPadding,
				maxPadding: m.options.ordinal ? 0 : m.options.maxPadding,
				zoomEnabled: !1
			}, e.inverted ? {
				offsets: t,
				width: s
			} : {
				offsets: t,
				height: s
			}), "xAxis"), u.yAxis = new bt(e, x(r.yAxis, {
				alignTicks: !1,
				offset: 0,
				index: p,
				isInternal: !0,
				reversed: T(r.yAxis && r.yAxis.reversed, e.yAxis[0] && e.yAxis[0].reversed, !1),
				zoomEnabled: !1
			}, e.inverted ? { width: s } : { height: s }), "yAxis"), u.xAxis.clippable = !1, u.yAxis.clippable = !1, d || r.series?.data || r.series?.dataTable ? u.updateNavigatorSeries(!1) : e.series.length === 0 && (u.unbindRedraw = P(e, "beforeRedraw", function() {
				e.series.length > 0 && !u.series && (u.setBaseSeries(), u.unbindRedraw?.());
			})), u.reversedExtremes = e.inverted && !u.xAxis.reversed || !e.inverted && u.xAxis.reversed, u.renderElements(), u.addMouseEvents();
		} else u.xAxis = {
			chart: e,
			navigatorAxis: { fake: !0 },
			translate: function(t, n) {
				let r = e.xAxis[0], i = r.getExtremes(), a = r.len - 2 * l, o = oo("min", r.options.min, i.dataMin), s = oo("max", r.options.max, i.dataMax) - o;
				return n ? t * s / a + o : a * (t - o) / s;
			},
			toPixels: function(e) {
				return this.translate(e);
			},
			toValue: function(e) {
				return this.translate(e, !0);
			}
		}, u.xAxis.navigatorAxis.axis = u.xAxis, u.xAxis.navigatorAxis.toFixedRange = Ra.prototype.toFixedRange.bind(u.xAxis.navigatorAxis);
		if (e.options.scrollbar?.enabled) {
			let t = x(e.options.scrollbar, { vertical: e.inverted });
			n(t.margin) || (t.margin = e.inverted ? -3 : 3), e.scrollbar = u.scrollbar = new ro(e.renderer, t, e), P(u.scrollbar, "changed", function(e) {
				let t = u.size, n = t * this.to, r = t * this.from;
				u.hasDragged = u.scrollbar?.hasDragged, u.render(0, 0, r, n), this.shouldUpdateExtremes(e.DOMType) && setTimeout(function() {
					u.onMouseUp(e);
				});
			});
		}
		u.addBaseSeriesEvents(), u.addChartEvents();
	}
	setOpposite() {
		let e = this.navigatorOptions, t = this.navigatorEnabled, n = this.chart;
		this.opposite = T(e.opposite, !!(!t && n.inverted));
	}
	getUnionExtremes(e) {
		let t = this.chart.xAxis[0], n = this.chart.time, r = this.xAxis, i = r.options, a = t.options, o;
		return (!e || t.dataMin !== null) && (o = {
			dataMin: T(n.parse(i?.min), oo("min", n.parse(a.min), t.dataMin, r.dataMin, r.min)),
			dataMax: T(n.parse(i?.max), oo("max", n.parse(a.max), t.dataMax, r.dataMax, r.max))
		}), o;
	}
	setBaseSeries(e, t) {
		let n = this.chart, r = this.baseSeries = [];
		e = e || n.options.navigator?.baseSeries || (n.series.length ? h(n.series, (e) => !e.options.isInternal).index : 0), (n.series || []).forEach((t, n) => {
			!t.options.isInternal && (t.options.showInNavigator || (n === e || t.options.id === e) && t.options.showInNavigator !== !1) && r.push(t);
		}), this.xAxis && !this.xAxis.navigatorAxis.fake && this.updateNavigatorSeries(!0, t);
	}
	updateNavigatorSeries(e, t) {
		let n = this, r = n.chart, i = n.baseSeries, o = {
			enableMouseTracking: !1,
			index: null,
			linkedTo: null,
			group: "nav",
			padXAxis: !1,
			xAxis: this.navigatorOptions.xAxis?.id,
			yAxis: this.navigatorOptions.yAxis?.id,
			showInLegend: !1,
			stacking: void 0,
			isInternal: !0,
			states: { inactive: { opacity: 1 } }
		}, s = n.series = (n.series || []).filter((e) => {
			let t = e.baseSeries;
			return t && i.indexOf(t) < 0 ? (t && (_(t, "updatedData", n.updatedDataHandler), delete t.navigatorSeries), e.chart && e.destroy(), !1) : !0;
		}), c, u, d = n.navigatorOptions.series, f;
		if (i && i.length && i.forEach((e) => {
			let p = e.navigatorSeries, m = a({
				color: e.color,
				visible: e.visible
			}, l(d) ? io.navigator.series : d);
			if (p && n.navigatorOptions.adaptToUpdatedData === !1) return;
			o.name = "Navigator " + i.length, c = e.options || {}, f = c.navigatorOptions || {}, m.dataLabels = N(m.dataLabels), u = x(c, o, m, f), u.pointRange = T(m.pointRange, f.pointRange, io.plotOptions[u.type || "line"]?.pointRange);
			let h = f.data || m.data, g = f.dataTable || m.dataTable;
			n.hasNavigatorData = n.hasNavigatorData || !!h || !!g, u.data = h || c.data?.slice(0), u.dataTable = g || c.dataTable, p && p.options ? p.update(u, t) : (e.navigatorSeries = r.initSeries(u), z(e.navigatorSeries, "afterUpdate"), e.navigatorSeries.baseSeries = e, s.push(e.navigatorSeries));
		}), (d?.data || d?.dataTable) && !(i && i.length) || l(d)) {
			let e = r.options.colors || [];
			n.hasNavigatorData = !1, d = N(d), d.forEach((t, i) => {
				o.name = "Navigator " + (s.length + 1), u = x(io.navigator?.series, { color: r.series[i] && !r.series[i].options.isInternal && r.series[i].color || e[i] || e[0] }, o, t), u.data = t.data, u.dataTable = t.dataTable, (u.data || u.dataTable) && (n.hasNavigatorData = !0, s.push(r.initSeries(u)));
			});
		}
		e && this.addBaseSeriesEvents();
	}
	addBaseSeriesEvents() {
		let e = this, t = e.baseSeries || [];
		t[0] && t[0].xAxis && t[0].eventsToUnbind.push(P(t[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes)), t.forEach((n) => {
			n.eventsToUnbind.push(P(n, "show", function() {
				this.navigatorSeries && this.navigatorSeries.setVisible(!0, !1);
			})), n.eventsToUnbind.push(P(n, "hide", function() {
				this.navigatorSeries && this.navigatorSeries.setVisible(!1, !1);
			})), this.navigatorOptions.adaptToUpdatedData !== !1 && n.xAxis && n.eventsToUnbind.push(P(n, "updatedData", this.updatedDataHandler)), n.eventsToUnbind.push(P(n, "remove", function() {
				t && b(t, n), this.navigatorSeries && e.series && (b(e.series, this.navigatorSeries), G(this.navigatorSeries.options) && this.navigatorSeries.remove(!1), delete this.navigatorSeries);
			}));
		});
	}
	getBaseSeriesMin(e) {
		return this.baseSeries.reduce(function(e, t) {
			return Math.min(e, t.getColumn("x")[0] ?? e);
		}, e);
	}
	modifyNavigatorAxisExtremes() {
		let e = this.xAxis;
		if (e.getExtremes !== void 0) {
			let t = this.getUnionExtremes(!0);
			t && (t.dataMin !== e.min || t.dataMax !== e.max) && (e.min = t.dataMin, e.max = t.dataMax);
		}
	}
	modifyBaseAxisExtremes() {
		let e = this, t = e.chart.navigator, r = e.getExtremes(), i = r.min, a = r.max, o = r.dataMin, s = r.dataMax, c = a - i, l = t?.stickToMin, u = t?.stickToMax, d = T(e.ordinal?.convertOverscroll(e.options.overscroll), 0), f = t.series && t.series[0], p = !!e.setExtremes, m = e.eventArgs && e.eventArgs.trigger === "rangeSelectorButton", h, g;
		m || (l && (g = o, h = g + c), u && (h = s + d, l || (g = Math.max(o, h - c, t.getBaseSeriesMin(f && f.xData ? f.xData[0] : -Number.MAX_VALUE)))), p && (l || u) && n(g) && (e.min = e.userMin = g, e.max = e.userMax = h)), t.stickToMin = t.stickToMax = null;
	}
	updatedDataHandler() {
		let e = this.chart.navigator, t = this, n = this.navigatorSeries, r = e.reversedExtremes ? Math.round(e.zoomedMin) === 0 : Math.round(e.zoomedMax) >= Math.round(e.size);
		e.stickToMax = T(this.chart.options.navigator && this.chart.options.navigator.stickToMax, r), e.stickToMin = e.shouldStickToMin(t, e), n && !e.hasNavigatorData && (n.options.pointStart = t.getColumn("x")[0], n.setData(t.options.data || t.options.dataTable, !1, void 0, !1));
	}
	shouldStickToMin(e, t) {
		let r = t.getBaseSeriesMin(e.getColumn("x")[0]), i = e.xAxis, a = i.max, o = i.min, s = i.options.range, c = !0;
		return c = n(a) && n(o) ? s && a - r > 0 ? a - r < s : o <= r : !1, c;
	}
	addChartEvents() {
		this.eventsToUnbind ||= [], this.eventsToUnbind.push(P(this.chart, "redraw", function() {
			let e = this.navigator, t = e && (e.baseSeries && e.baseSeries[0] && e.baseSeries[0].xAxis || this.xAxis[0]);
			t && e.render(t.min, t.max);
		}), P(this.chart, "getMargins", function() {
			let e = this, t = e.navigator, n = t.opposite ? "plotTop" : "marginBottom";
			e.inverted && (n = t.opposite ? "marginRight" : "plotLeft"), e[n] = (e[n] || 0) + (t.navigatorEnabled || !e.inverted ? t.height + (this.scrollbar?.options.margin || 0) + t.scrollbarHeight : 0) + (t.navigatorOptions.margin || 0);
		}), P(this, "setRange", function(e) {
			this.chart.xAxis[0].setExtremes(e.min, e.max, e.redraw, e.animation, e.eventArguments);
		}));
	}
	destroy() {
		this.removeEvents(), this.xAxis && (b(this.chart.xAxis, this.xAxis), b(this.chart.axes, this.xAxis)), this.yAxis && (b(this.chart.yAxis, this.yAxis), b(this.chart.axes, this.yAxis)), (this.series || []).forEach((e) => {
			e.destroy && e.destroy();
		}), [
			"series",
			"xAxis",
			"yAxis",
			"shades",
			"outline",
			"scrollbarTrack",
			"scrollbarRifles",
			"scrollbarGroup",
			"scrollbar",
			"navigatorGroup",
			"rendered"
		].forEach((e) => {
			this[e] && this[e].destroy && this[e].destroy(), this[e] = null;
		}), [this.handles].forEach((e) => {
			y(e);
		}), this.baseSeries.forEach((e) => {
			e.navigatorSeries = void 0;
		}), this.navigatorEnabled = !1;
	}
}, { animObject: co } = B, { format: lo } = q, { getFakeMouseEvent: uo } = Z, { getAxisRangeDescription: fo, fireEventOnWrappedOrUnwrappedElement: po } = Q, mo = class extends di {
	init() {
		let e = this.chart, t = this;
		this.announcer = new Ci(e, "polite"), this.addEvent(so, "afterRender", function() {
			this.chart === t.chart && this.chart.renderer && V(() => {
				t.proxyProvider.updateGroupProxyElementPositions("navigator"), t.updateHandleValues();
			}, co(T(this.chart.renderer.globalAnimation, !0)).duration);
		});
	}
	onChartUpdate() {
		let e = this.chart, t = e.options, n = t.navigator;
		if (n.enabled && n.accessibility?.enabled) {
			let n = t.accessibility.landmarkVerbosity, r = t.lang.accessibility?.navigator.groupLabel;
			this.proxyProvider.removeGroup("navigator"), this.proxyProvider.addGroup("navigator", "div", {
				role: n === "all" ? "region" : "group",
				"aria-label": lo(r, { chart: e }, e)
			});
			let i = t.lang.accessibility?.navigator.handleLabel;
			[0, 1].forEach((t) => {
				let n = this.getHandleByIx(t);
				if (n) {
					let r = this.proxyProvider.addProxyElement("navigator", { click: n }, "input", {
						type: "range",
						"aria-label": lo(i, {
							handleIx: t,
							chart: e
						}, e)
					});
					this[t ? "maxHandleProxy" : "minHandleProxy"] = r.innerElement, r.innerElement.style.pointerEvents = "none", r.innerElement.oninput = () => this.updateNavigator();
				}
			}), this.updateHandleValues();
		} else this.proxyProvider.removeGroup("navigator");
	}
	getNavigatorHandleNavigation(e) {
		let t = this, n = this.chart, r = e ? this.maxHandleProxy : this.minHandleProxy, i = this.keyCodes;
		return new fi(n, {
			keyCodeMap: [[[
				i.left,
				i.right,
				i.up,
				i.down
			], function(a) {
				if (r) {
					let o = a === i.left || a === i.up ? -1 : 1;
					r.value = "" + F(parseFloat(r.value) + o, 0, 100), t.updateNavigator(() => {
						let i = t.getHandleByIx(e);
						i && n.setFocusToElement(i, r);
					});
				}
				return this.response.success;
			}]],
			init: () => {
				n.setFocusToElement(this.getHandleByIx(e), r);
			},
			validate: () => !!(this.getHandleByIx(e) && r && n.options.navigator.accessibility?.enabled)
		});
	}
	getKeyboardNavigation() {
		return [this.getNavigatorHandleNavigation(0), this.getNavigatorHandleNavigation(1)];
	}
	destroy() {
		this.updateNavigatorThrottleTimer && o(this.updateNavigatorThrottleTimer), this.proxyProvider.removeGroup("navigator"), this.announcer && this.announcer.destroy();
	}
	updateHandleValues() {
		let e = this.chart.navigator;
		if (e && this.minHandleProxy && this.maxHandleProxy) {
			let t = e.size;
			this.minHandleProxy.value = "" + Math.round(e.zoomedMin / t * 100), this.maxHandleProxy.value = "" + Math.round(e.zoomedMax / t * 100);
		}
	}
	getHandleByIx(e) {
		let t = this.chart.navigator;
		return t && t.handles && t.handles[e];
	}
	updateNavigator(e) {
		let t = (e) => {
			let t = this.chart, { navigator: n, pointer: r } = t, i = this.chart.accessibility?.keyboardNavigation;
			if (n && r && this.minHandleProxy && this.maxHandleProxy) {
				let a = r.getChartPosition(), o = parseFloat(this.minHandleProxy.value) / 100 * n.size, s = parseFloat(this.maxHandleProxy.value) / 100 * n.size;
				[
					[
						0,
						"mousedown",
						n.zoomedMin
					],
					[
						0,
						"mousemove",
						o
					],
					[
						0,
						"mouseup",
						o
					],
					[
						1,
						"mousedown",
						n.zoomedMax
					],
					[
						1,
						"mousemove",
						s
					],
					[
						1,
						"mouseup",
						s
					]
				].forEach(([e, t, r]) => {
					let i = this.getHandleByIx(e)?.element;
					i && po(i, uo(t, {
						x: a.left + n.left + r,
						y: a.top + n.top
					}, i));
				}), i && (i.keyboardReset = !1), e && e();
				let c = t.options.lang.accessibility?.navigator.changeAnnouncement, l = fo(t.xAxis[0]);
				this.announcer.announce(lo(c, {
					axisRangeDescription: l,
					chart: t
				}, t));
			}
		};
		this.updateNavigatorThrottleTimer && o(this.updateNavigatorThrottleTimer), this.updateNavigatorThrottleTimer = setTimeout(t.bind(this, e), 20);
	}
}, { getPointAnnotationTexts: ho } = Mi, { getAxisDescription: go, getSeriesFirstPointElement: _o, getSeriesA11yElement: vo, unhideChartElementFromAT: yo } = Q, { format: bo, numberFormat: xo } = q, { reverseChildNodes: So, stripHTMLTagsFromString: Co } = Z;
function wo(e) {
	let t = e.index;
	if (!e.series || !e.series.data || !G(t)) return null;
	let n = e.series.options?.nullInteraction;
	return h(e.series.data, function(e) {
		return !!(e && e.index !== void 0 && (n || e.index > t) && e.graphic && e.graphic.element);
	}) || null;
}
function To(e) {
	let t = e.series, n = t && t.chart, r = t && t.is("sunburst"), i = e.isNull, a = n && n.options.accessibility.point.describeNull;
	return i && !r && a;
}
function Eo(e, t) {
	let n = e.series.chart.renderer.rect(t.x, t.y, 1, 1);
	return n.attr({
		class: "highcharts-a11y-mock-point",
		fill: "none",
		opacity: 0,
		"fill-opacity": 0,
		"stroke-opacity": 0
	}), n;
}
function Do(e) {
	let t = e.series, n = wo(e), r = n && n.graphic, i = r ? r.parentGroup : t.graph || t.group, a = Eo(e, n ? {
		x: T(e.plotX, n.plotX, 0),
		y: T(e.plotY, n.plotY, 0)
	} : {
		x: T(e.plotX, 0),
		y: T(e.plotY, 0)
	});
	if (i && i.element) return e.graphic = a, e.hasMockGraphic = !0, a.add(i), i.element.insertBefore(a.element, r ? r.element : null), a.element;
}
function Oo(e) {
	let t = e.chart.options.accessibility.series.pointDescriptionEnabledThreshold;
	return !!(t !== !1 && e.points && e.points.length >= +t);
}
function ko(e) {
	let t = e.options.accessibility || {};
	return !Oo(e) && !t.exposeAsGroupOnly;
}
function Ao(e) {
	let t = e.chart.options.accessibility.keyboardNavigation.seriesNavigation;
	return !!(e.points && (e.points.length < +t.pointNavigationEnabledThreshold || t.pointNavigationEnabledThreshold === !1));
}
function jo(e) {
	let t = e.chart, n = t.options.chart, r = n.options3d && n.options3d.enabled, i = t.series.length > 1, a = t.options.accessibility.series.describeSingleSeries, o = (e.options.accessibility || {}).exposeAsGroupOnly;
	return !(r && i) && (i || a || o || Oo(e));
}
function Mo(e, t) {
	let r = e.series, i = r.chart, a = i.options.accessibility.point || {}, o = r.options.accessibility && r.options.accessibility.point || {}, s = r.tooltipOptions || {}, c = i.options.lang;
	return n(t) ? xo(t, o.valueDecimals || a.valueDecimals || s.valueDecimals || -1, c.decimalPoint, c.accessibility.thousandsSep || c.thousandsSep) : t;
}
function No(e) {
	let t = (e.options.accessibility || {}).description;
	return t && e.chart.langFormat("accessibility.series.description", {
		description: t,
		series: e
	}) || "";
}
function Po(e, t) {
	let n = e[t];
	return e.chart.langFormat("accessibility.series." + t + "Description", {
		name: go(n),
		series: e
	});
}
function Fo(e) {
	let t = e.series, n = t.chart, r = t.options.accessibility && t.options.accessibility.point || {}, i = n.options.accessibility.point || {}, a = t.xAxis && t.xAxis.dateTime;
	if (a) {
		let t = a.getXDateFormat(e.x || 0, n.options.tooltip.dateTimeLabelFormats), o = r.dateFormatter && r.dateFormatter(e) || i.dateFormatter?.(e) || r.dateFormat || i.dateFormat || t;
		return n.time.dateFormat(o, e.x || 0, void 0);
	}
}
function Io(e) {
	let t = Fo(e), n = (e.series.xAxis || {}).categories && G(e.category) && ("" + e.category).replace("<br/>", " "), r = G(e.id) && ("" + e.id).indexOf("highcharts-") < 0, i = "x, " + e.x;
	return e.name || t || n || (r ? e.id : i);
}
function Lo(e, t, n) {
	let r = t || "", i = n || "", a = function(t) {
		let n = Mo(e, T(e[t], e.options[t]));
		return n === void 0 ? n : t + ": " + r + n + i;
	};
	return e.series.pointArrayMap.reduce(function(e, t) {
		let n = a(t);
		return n ? e + (e.length ? ", " : "") + n : e;
	}, "");
}
function Ro(e) {
	let t = e.series, n = t.chart.options.accessibility.point || {}, r = t.chart.options.accessibility && t.chart.options.accessibility.point || {}, i = t.tooltipOptions || {}, a = r.valuePrefix || n.valuePrefix || i.valuePrefix || "", o = r.valueSuffix || n.valueSuffix || i.valueSuffix || "", s = Mo(e, e[e.value === void 0 ? "y" : "value"]);
	return e.isNull ? t.chart.langFormat("accessibility.series.nullPointValue", { point: e }) : t.pointArrayMap ? Lo(e, a, o) : a + s + o;
}
function zo(e) {
	let t = e.series.chart, n = ho(e), r = {
		point: e,
		annotations: n
	};
	return n.length ? t.langFormat("accessibility.series.pointAnnotationsDescription", r) : "";
}
function Bo(e) {
	let t = e.series, n = t.chart, r = t.options.accessibility, i = r && r.point && r.point.valueDescriptionFormat || n.options.accessibility.point.valueDescriptionFormat, a = T(t.xAxis && t.xAxis.options.accessibility && t.xAxis.options.accessibility.enabled, !n.angular && t.type !== "flowmap"), o = a ? Io(e) : "";
	return bo(i, {
		point: e,
		index: G(e.index) ? e.index + 1 : "",
		xDescription: o,
		value: Ro(e),
		separator: a ? ", " : ""
	}, n);
}
function Vo(e) {
	let t = e.series, n = t.chart.series.length > 1 || t.options.name, r = Bo(e), i = e.options && e.options.accessibility && e.options.accessibility.description, a = i ? " " + i : "", o = n ? " " + t.name + "." : "", s = zo(e), c = s ? " " + s : "";
	return e.accessibility = e.accessibility || {}, e.accessibility.valueDescription = r, r + a + o + c;
}
function Ho(e, t) {
	let n = e.series, r = n.options.accessibility?.point || {}, i = n.chart.options.accessibility.point || {}, a = Co(c(r.descriptionFormat) && bo(r.descriptionFormat, e, n.chart) || r.descriptionFormatter?.(e) || c(i.descriptionFormat) && bo(i.descriptionFormat, e, n.chart) || i.descriptionFormatter?.(e) || Vo(e), n.chart.renderer.forExport);
	t.setAttribute("role", "img"), t.setAttribute("aria-label", a);
}
function Uo(e) {
	let t = ko(e), n = Ao(e), r = e.chart.options.accessibility.point.describeNull;
	(t || n) && e.points.forEach((n) => {
		let i = n.graphic && n.graphic.element || To(n) && Do(n), a = n.options && n.options.accessibility && n.options.accessibility.enabled === !1;
		if (i) {
			if (n.isNull && !r) {
				i.setAttribute("aria-hidden", !0);
				return;
			}
			i.setAttribute("tabindex", "-1"), e.chart.styledMode || (i.style.outline = "none"), t && !a ? Ho(n, i) : i.setAttribute("aria-hidden", !0);
		}
	});
}
function Wo(e) {
	let t = e.chart, n = t.types || [], r = No(e), i = function(n) {
		return t[n] && t[n].length > 1 && e[n];
	}, a = e.index + 1, o = Po(e, "xAxis"), s = Po(e, "yAxis"), c = {
		seriesNumber: a,
		series: e,
		chart: t
	}, l = n.length > 1 ? "Combination" : "", u = t.langFormat("accessibility.series.summary." + e.type + l, c) || t.langFormat("accessibility.series.summary.default" + l, c), d = (i("yAxis") ? " " + s + "." : "") + (i("xAxis") ? " " + o + "." : "");
	return bo(T(e.options.accessibility && e.options.accessibility.descriptionFormat, t.options.accessibility.series.descriptionFormat, ""), {
		seriesDescription: u,
		authorDescription: r ? " " + r : "",
		axisDescription: d,
		series: e,
		chart: t,
		seriesNumber: a
	}, void 0);
}
function Go(e, t) {
	let n = e.options.accessibility || {}, r = e.chart.options.accessibility, i = r.landmarkVerbosity;
	n.exposeAsGroupOnly ? t.setAttribute("role", "img") : i === "all" ? t.setAttribute("role", "region") : t.setAttribute("role", "group"), t.setAttribute("tabindex", "-1"), e.chart.styledMode || (t.style.outline = "none"), t.setAttribute("aria-label", Co(r.series.descriptionFormatter && r.series.descriptionFormatter(e) || Wo(e), e.chart.renderer.forExport));
}
function Ko(e) {
	let t = e.chart, n = _o(e), r = vo(e), i = t.is3d && t.is3d();
	r && (r.lastChild === n && !i && So(r), Uo(e), yo(t, r), jo(e) ? Go(e, r) : r.removeAttribute("aria-label"));
}
var qo = {
	defaultPointDescriptionFormatter: Vo,
	defaultSeriesDescriptionFormatter: Wo,
	describeSeries: Ko
}, { composed: Jo } = H, { getChartTitle: Yo } = Q, { defaultPointDescriptionFormatter: Xo, defaultSeriesDescriptionFormatter: Zo } = qo;
function Qo(e) {
	return !!e.options.accessibility.announceNewData.enabled;
}
function $o(e) {
	let t = e.series.data.filter((t) => e.x === t.x && e.y === t.y);
	return t.length === 1 ? t[0] : e;
}
function es(e, t) {
	let n = (e || []).concat(t || []).reduce((e, t) => (e[t.name + t.index] = t, e), {});
	return Object.keys(n).map((e) => n[e]);
}
var ts = class {
	constructor(e) {
		this.dirty = { allSeries: {} }, this.lastAnnouncementTime = 0, this.chart = e;
	}
	init() {
		let e = this.chart, t = e.options.accessibility.announceNewData.interruptUser ? "assertive" : "polite";
		this.lastAnnouncementTime = 0, this.dirty = { allSeries: {} }, this.eventProvider = new ci(), this.announcer = new Ci(e, t), this.addEventListeners();
	}
	destroy() {
		this.eventProvider.removeAddedEvents(), this.announcer.destroy();
	}
	addEventListeners() {
		let e = this, t = this.chart, n = this.eventProvider;
		n.addEvent(t, "afterApplyDrilldown", function() {
			e.lastAnnouncementTime = 0;
		}), n.addEvent(t, "afterAddSeries", function(t) {
			e.onSeriesAdded(t.series);
		}), n.addEvent(t, "redraw", function() {
			e.announceDirtyData();
		});
	}
	onSeriesAdded(e) {
		Qo(this.chart) && (this.dirty.hasDirty = !0, this.dirty.allSeries[e.name + e.index] = e, this.dirty.newSeries = G(this.dirty.newSeries) ? void 0 : e);
	}
	announceDirtyData() {
		let e = this.chart, t = this;
		if (e.options.accessibility.announceNewData && this.dirty.hasDirty) {
			let e = this.dirty.newPoint;
			e &&= $o(e), this.queueAnnouncement(Object.keys(this.dirty.allSeries).map((e) => t.dirty.allSeries[e]), this.dirty.newSeries, e), this.dirty = { allSeries: {} };
		}
	}
	queueAnnouncement(e, t, n) {
		let r = this.chart.options.accessibility.announceNewData;
		if (r.enabled) {
			let i = +/* @__PURE__ */ new Date(), a = i - this.lastAnnouncementTime, s = Math.max(0, r.minAnnounceInterval - a), c = es(this.queuedAnnouncement && this.queuedAnnouncement.series, e), l = this.buildAnnouncementMessage(c, t, n);
			l && (this.queuedAnnouncement && o(this.queuedAnnouncementTimer), this.queuedAnnouncement = {
				time: i,
				message: l,
				series: c
			}, this.queuedAnnouncementTimer = setTimeout(() => {
				this && this.announcer && (this.lastAnnouncementTime = +/* @__PURE__ */ new Date(), this.announcer.announce(this.queuedAnnouncement.message), delete this.queuedAnnouncement, delete this.queuedAnnouncementTimer);
			}, s));
		}
	}
	buildAnnouncementMessage(e, t, n) {
		let r = this.chart, i = r.options.accessibility.announceNewData;
		if (i.announcementFormatter) {
			let r = i.announcementFormatter(e, t, n, this);
			if (r !== !1) return r.length ? r : null;
		}
		let a = H.charts && H.charts.length > 1 ? "Multiple" : "Single", o = t ? "newSeriesAnnounce" + a : n ? "newPointAnnounce" + a : "newDataAnnounce", s = Yo(r);
		return r.langFormat("accessibility.announceNewData." + o, {
			chartTitle: s,
			seriesDesc: t ? Zo(t) : null,
			pointDesc: n ? Xo(n) : null,
			point: n,
			series: t
		});
	}
};
(function(e) {
	function t(e) {
		w(Jo, "A11y.NDA") && (P(e, "addPoint", n), P(e, "updatedData", r));
	}
	e.compose = t;
	function n(e) {
		let t = this.chart, n = t.accessibility?.components.series.newDataAnnouncer;
		n && n.chart === t && Qo(t) && (n.dirty.newPoint = G(n.dirty.newPoint) ? void 0 : e.point);
	}
	function r() {
		let e = this.chart, t = e.accessibility?.components.series.newDataAnnouncer;
		t && t.chart === e && Qo(e) && (t.dirty.hasDirty = !0, t.dirty.allSeries[this.name + this.index] = this);
	}
})(ts ||= {});
var ns = ts, { doc: rs, win: is } = H, { fireEventOnWrappedOrUnwrappedElement: as } = Q, { cloneMouseEvent: os, cloneTouchEvent: ss, getFakeMouseEvent: cs, removeElement: ls } = Z, us = class {
	constructor(e, t, n = "button", r, i) {
		this.chart = e, this.target = t, this.eventProvider = new ci();
		let a = this.innerElement = rs.createElement(n), o = this.element = r ? rs.createElement(r) : a;
		e.styledMode || this.hideElementVisually(a), r && (r === "li" && !e.styledMode && (o.style.listStyle = "none"), o.appendChild(a), this.element = o), this.updateTarget(t, i);
	}
	click() {
		let e = this.getTargetPosition();
		e.x += e.width / 2, e.y += e.height / 2;
		let t = cs("click", e);
		as(this.target.click, t);
	}
	updateTarget(e, t) {
		this.target = e, this.updateCSSClassName();
		let n = t || {};
		Object.keys(n).forEach((e) => {
			n[e] === null && delete n[e];
		});
		let r = this.getTargetAttr(e.click, "aria-label");
		I(this.innerElement, x(r ? { "aria-label": r } : {}, n)), this.eventProvider.removeAddedEvents(), this.addProxyEventsToElement(this.innerElement, e.click), this.refreshPosition();
	}
	refreshPosition() {
		let e = this.getTargetPosition();
		A(this.innerElement, {
			width: (e.width || 1) + "px",
			height: (e.height || 1) + "px",
			left: (Math.round(e.x) || 0) + "px",
			top: (Math.round(e.y) || 0) + "px"
		});
	}
	remove() {
		this.eventProvider.removeAddedEvents(), ls(this.element);
	}
	updateCSSClassName() {
		let e = (e) => e.indexOf("highcharts-no-tooltip") > -1, t = e(this.chart.legend?.group?.div?.className || ""), n = e(this.getTargetAttr(this.target.click, "class") || "");
		this.innerElement.className = t || n ? "highcharts-a11y-proxy-element highcharts-no-tooltip" : "highcharts-a11y-proxy-element";
	}
	addProxyEventsToElement(e, t) {
		[
			"click",
			"touchstart",
			"touchend",
			"touchcancel",
			"touchmove",
			"mouseover",
			"mouseenter",
			"mouseleave",
			"mouseout"
		].forEach((n) => {
			let r = n.indexOf("touch") === 0;
			this.eventProvider.addEvent(e, n, (e) => {
				let n = r ? ss(e) : os(e);
				t && as(t, n), e.stopPropagation(), r || e.preventDefault();
			}, { passive: !1 });
		});
	}
	hideElementVisually(e) {
		A(e, {
			borderWidth: 0,
			backgroundColor: "transparent",
			cursor: "pointer",
			outline: "none",
			opacity: .001,
			filter: "alpha(opacity=1)",
			zIndex: 999,
			overflow: "hidden",
			padding: 0,
			margin: 0,
			display: "block",
			position: "absolute",
			"-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)"
		});
	}
	getTargetPosition() {
		let e = this.target.click, t = e.element ? e.element : e, n = this.target.visual || t, r = this.chart.renderTo, i = this.chart.pointer;
		if (r && n?.getBoundingClientRect && i) {
			let e = is.scrollY || rs.documentElement.scrollTop, t = n.getBoundingClientRect(), r = i.getChartPosition();
			return {
				x: (t.left - r.left) / r.scaleX,
				y: (t.top + e - r.top) / r.scaleY,
				width: t.right / r.scaleX - t.left / r.scaleX,
				height: t.bottom / r.scaleY - t.top / r.scaleY
			};
		}
		return {
			x: 0,
			y: 0,
			width: 1,
			height: 1
		};
	}
	getTargetAttr(e, t) {
		return e.element ? e.element.getAttribute(t) : e.getAttribute(t);
	}
}, { doc: ds } = H, { unhideChartElementFromAT: fs } = Q, { removeChildNodes: ps } = Z, ms = class {
	constructor(e) {
		this.chart = e, this.domElementProvider = new si(), this.groups = {}, this.groupOrder = [], this.beforeChartProxyPosContainer = this.createProxyPosContainer("before"), this.afterChartProxyPosContainer = this.createProxyPosContainer("after"), this.update();
	}
	addProxyElement(e, t, n = "button", r) {
		let i = this.groups[e];
		if (!i) throw Error("ProxyProvider.addProxyElement: Invalid group key " + e);
		let a = i.type === "ul" || i.type === "ol" ? "li" : void 0, o = new us(this.chart, t, n, a, r);
		return i.proxyContainerElement.appendChild(o.element), i.proxyElements.push(o), o;
	}
	addGroup(e, t = "div", n) {
		let r = this.groups[e];
		if (r) return r.groupElement;
		let i = this.domElementProvider.createElement(t), a;
		return n && n.role && t !== "div" ? (a = this.domElementProvider.createElement("div"), a.appendChild(i)) : a = i, a.className = "highcharts-a11y-proxy-group highcharts-a11y-proxy-group-" + e.replace(/\W/g, "-"), this.groups[e] = {
			proxyContainerElement: i,
			groupElement: a,
			type: t,
			proxyElements: []
		}, I(a, n || {}), t === "ul" && i.setAttribute("role", "list"), this.afterChartProxyPosContainer.appendChild(a), this.updateGroupOrder(this.groupOrder), a;
	}
	updateGroupAttrs(e, t) {
		let n = this.groups[e];
		if (!n) throw Error("ProxyProvider.updateGroupAttrs: Invalid group key " + e);
		I(n.groupElement, t);
	}
	updateGroupOrder(e) {
		if (this.groupOrder = e.slice(), this.isDOMOrderGroupOrder()) return;
		let t = e.indexOf("series"), n = t > -1 ? e.slice(0, t) : e, r = t > -1 ? e.slice(t + 1) : [], i = ds.activeElement;
		["before", "after"].forEach((e) => {
			let t = this[e === "before" ? "beforeChartProxyPosContainer" : "afterChartProxyPosContainer"], i = e === "before" ? n : r;
			ps(t), i.forEach((e) => {
				let n = this.groups[e];
				n && t.appendChild(n.groupElement);
			});
		}), (this.beforeChartProxyPosContainer.contains(i) || this.afterChartProxyPosContainer.contains(i)) && i && i.focus && i.focus();
	}
	clearGroup(e) {
		let t = this.groups[e];
		if (!t) throw Error("ProxyProvider.clearGroup: Invalid group key " + e);
		ps(t.proxyContainerElement);
	}
	removeGroup(e) {
		let t = this.groups[e];
		t && (this.domElementProvider.removeElement(t.groupElement), t.groupElement !== t.proxyContainerElement && this.domElementProvider.removeElement(t.proxyContainerElement), delete this.groups[e]);
	}
	update() {
		this.updatePosContainerPositions(), this.updateGroupOrder(this.groupOrder), this.updateProxyElementPositions();
	}
	updateProxyElementPositions() {
		Object.keys(this.groups).forEach(this.updateGroupProxyElementPositions.bind(this));
	}
	updateGroupProxyElementPositions(e) {
		let t = this.groups[e];
		t && t.proxyElements.forEach((e) => e.refreshPosition());
	}
	destroy() {
		this.domElementProvider.destroyCreatedElements();
	}
	createProxyPosContainer(e) {
		let t = this.domElementProvider.createElement("div");
		return t.setAttribute("aria-hidden", "false"), t.className = "highcharts-a11y-proxy-container" + (e ? "-" + e : ""), A(t, {
			position: "absolute",
			top: "0",
			left: "0",
			whiteSpace: "nowrap"
		}), t;
	}
	getCurrentGroupOrderInDOM() {
		let e = (e) => {
			let t = Object.keys(this.groups), n = t.length;
			for (; n--;) {
				let r = t[n], i = this.groups[r];
				if (i && e === i.groupElement) return r;
			}
		}, t = (t) => {
			let n = [], r = t.children;
			for (let t = 0; t < r.length; ++t) {
				let i = e(r[t]);
				i && n.push(i);
			}
			return n;
		}, n = t(this.beforeChartProxyPosContainer), r = t(this.afterChartProxyPosContainer);
		return n.push("series"), n.concat(r);
	}
	isDOMOrderGroupOrder() {
		let e = this.getCurrentGroupOrderInDOM(), t = this.groupOrder.filter((e) => e === "series" || !!this.groups[e]), n = e.length;
		if (n !== t.length) return !1;
		for (; n--;) if (e[n] !== t[n]) return !1;
		return !0;
	}
	updatePosContainerPositions() {
		let e = this.chart;
		if (e.renderer.forExport) return;
		let t = e.renderer.box;
		e.container.insertBefore(this.afterChartProxyPosContainer, t.nextSibling), e.container.insertBefore(this.beforeChartProxyPosContainer, t), fs(this.chart, this.afterChartProxyPosContainer), fs(this.chart, this.beforeChartProxyPosContainer);
	}
}, { unhideChartElementFromAT: hs, getAxisRangeDescription: gs } = Q;
function _s(e) {
	return !!(e.rangeSelector && e.rangeSelector.inputGroup && e.rangeSelector.inputGroup.element.style.visibility !== "hidden" && e.options.rangeSelector.inputEnabled !== !1 && e.rangeSelector.minInput && e.rangeSelector.maxInput);
}
var vs = class extends di {
	init() {
		let e = this.chart;
		this.announcer = new Ci(e, "polite");
	}
	onChartUpdate() {
		let e = this.chart, t = this, n = e.rangeSelector;
		n && (this.updateSelectorVisibility(), this.setDropdownAttrs(), n.buttons && n.buttons.length && n.buttons.forEach((e) => {
			t.setRangeButtonAttrs(e);
		}), n.maxInput && n.minInput && ["minInput", "maxInput"].forEach(function(r, i) {
			let a = n[r];
			a && (hs(e, a), t.setRangeInputAttrs(a, "accessibility.rangeSelector." + (i ? "max" : "min") + "InputLabel"));
		}));
	}
	updateSelectorVisibility() {
		let e = this.chart, t = e.rangeSelector, n = t && t.dropdown, r = t && t.buttons || [], i = (e) => e.setAttribute("aria-hidden", !0);
		t && t.hasVisibleDropdown && n ? (hs(e, n), r.forEach((e) => i(e.element))) : (n && i(n), r.forEach((t) => hs(e, t.element)));
	}
	setDropdownAttrs() {
		let e = this.chart, t = e.rangeSelector && e.rangeSelector.dropdown;
		if (t) {
			let n = e.langFormat("accessibility.rangeSelector.dropdownLabel", { rangeTitle: e.options.lang.rangeSelectorZoom });
			t.setAttribute("aria-label", n), t.setAttribute("tabindex", -1);
		}
	}
	setRangeButtonAttrs(e) {
		I(e.element, {
			tabindex: -1,
			role: "button"
		});
	}
	setRangeInputAttrs(e, t) {
		let n = this.chart;
		I(e, {
			tabindex: -1,
			"aria-label": n.langFormat(t, { chart: n })
		});
	}
	onButtonNavKbdArrowKey(e, t) {
		let n = e.response, r = this.keyCodes, i = this.chart, a = i.options.accessibility.keyboardNavigation.wrapAround, o = t === r.left || t === r.up ? -1 : 1;
		return i.highlightRangeSelectorButton(i.highlightedRangeSelectorItemIx + o) ? n.success : a ? (e.init(o), n.success) : n[o > 0 ? "next" : "prev"];
	}
	onButtonNavKbdClick(e) {
		let t = e.response, n = this.chart;
		return n.oldRangeSelectorItemState !== 3 && this.fakeClickEvent(n.rangeSelector.buttons[n.highlightedRangeSelectorItemIx].element), t.success;
	}
	onAfterBtnClick() {
		let e = this.chart, t = gs(e.xAxis[0]), n = e.langFormat("accessibility.rangeSelector.clickButtonAnnouncement", {
			chart: e,
			axisRangeDescription: t
		});
		n && this.announcer.announce(n);
	}
	onInputKbdMove(e) {
		let t = this.chart, n = t.rangeSelector, r = t.highlightedInputRangeIx = (t.highlightedInputRangeIx || 0) + e;
		if (r > 1 || r < 0) {
			if (t.accessibility) return t.accessibility.keyboardNavigation.exiting = !0, t.accessibility.keyboardNavigation.tabindexContainer.focus(), t.accessibility.keyboardNavigation.move(e);
		} else if (n) {
			let e = n[r ? "maxDateBox" : "minDateBox"], i = n[r ? "maxInput" : "minInput"];
			e && i && t.setFocusToElement(e, i);
		}
		return !0;
	}
	onInputNavInit(e) {
		let t = this, n = this.chart, r = e > 0 ? 0 : 1, i = n.rangeSelector, a = i && i[r ? "maxDateBox" : "minDateBox"], o = i && i.minInput, s = i && i.maxInput, c = r ? s : o;
		if (n.highlightedInputRangeIx = r, a && o && s) {
			n.setFocusToElement(a, c), this.removeInputKeydownHandler && this.removeInputKeydownHandler();
			let e = (e) => {
				(e.which || e.keyCode) === this.keyCodes.tab && t.onInputKbdMove(e.shiftKey ? -1 : 1) && (e.preventDefault(), e.stopPropagation());
			}, r = P(o, "keydown", e), i = P(s, "keydown", e);
			this.removeInputKeydownHandler = () => {
				r(), i();
			};
		}
	}
	onInputNavTerminate() {
		let e = this.chart.rangeSelector || {};
		e.maxInput && e.hideInput("max"), e.minInput && e.hideInput("min"), this.removeInputKeydownHandler && (this.removeInputKeydownHandler(), delete this.removeInputKeydownHandler);
	}
	initDropdownNav() {
		let e = this.chart, t = e.rangeSelector, n = t && t.dropdown;
		t && n && (e.setFocusToElement(t.buttonGroup, n), this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeDropdownKeydownHandler = P(n, "keydown", (t) => {
			let n = (t.which || t.keyCode) === this.keyCodes.tab, r = e.accessibility;
			n && (t.preventDefault(), t.stopPropagation(), r && r.keyboardNavigation.move(t.shiftKey ? -1 : 1));
		}));
	}
	getRangeSelectorButtonNavigation() {
		let e = this.chart, t = this.keyCodes, n = this;
		return new fi(e, {
			keyCodeMap: [[[
				t.left,
				t.right,
				t.up,
				t.down
			], function(e) {
				return n.onButtonNavKbdArrowKey(this, e);
			}], [[t.enter, t.space], function() {
				return n.onButtonNavKbdClick(this);
			}]],
			validate: function() {
				return !!(e.rangeSelector && e.rangeSelector.buttons && e.rangeSelector.buttons.length);
			},
			init: function(t) {
				let r = e.rangeSelector;
				if (r && r.hasVisibleDropdown) n.initDropdownNav();
				else if (r) {
					let n = r.buttons.length - 1;
					e.highlightRangeSelectorButton(t > 0 ? 0 : n);
				}
			},
			terminate: function() {
				n.removeDropdownKeydownHandler && (n.removeDropdownKeydownHandler(), delete n.removeDropdownKeydownHandler);
			}
		});
	}
	getRangeSelectorInputNavigation() {
		let e = this.chart, t = this;
		return new fi(e, {
			keyCodeMap: [],
			validate: function() {
				return _s(e);
			},
			init: function(e) {
				t.onInputNavInit(e);
			},
			terminate: function() {
				t.onInputNavTerminate();
			}
		});
	}
	getKeyboardNavigation() {
		return [this.getRangeSelectorButtonNavigation(), this.getRangeSelectorInputNavigation()];
	}
	destroy() {
		this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeInputKeydownHandler && this.removeInputKeydownHandler(), this.announcer && this.announcer.destroy();
	}
};
(function(e) {
	function t(e) {
		let t = this.rangeSelector && this.rangeSelector.buttons || [], n = this.highlightedRangeSelectorItemIx, r = this.rangeSelector && this.rangeSelector.selected;
		return n !== void 0 && t[n] && n !== r && t[n].setState(this.oldRangeSelectorItemState || 0), this.highlightedRangeSelectorItemIx = e, t[e] ? (this.setFocusToElement(t[e].box, t[e].element), e !== r && (this.oldRangeSelectorItemState = t[e].state, t[e].setState(1)), !0) : !1;
	}
	function n(e, n) {
		let i = e.prototype;
		i.highlightRangeSelectorButton || (i.highlightRangeSelectorButton = t, P(n, "afterBtnClick", r));
	}
	e.compose = n;
	function r() {
		let e = this.chart.accessibility;
		if (e && e.components.rangeSelector) return e.components.rangeSelector.onAfterBtnClick();
	}
})(vs ||= {});
var ys = vs, { composed: bs } = H, xs;
(function(e) {
	function t(e) {
		w(bs, "A11y.FM") && (P(e, "afterSetOptions", c), P(e, "render", l), P(e, "afterRender", s), P(e, "renderCanvas", m));
	}
	e.compose = t;
	function n(e) {
		x(!0, e, { marker: {
			enabled: !0,
			states: { normal: { opacity: 0 } }
		} });
	}
	function r(e) {
		return e.marker.states && e.marker.states.normal && e.marker.states.normal.opacity;
	}
	function i(e) {
		let t = e.points.length;
		for (; t--;) {
			let i = e.points[t], a = i.options, o = i.hasForcedA11yMarker;
			if (delete i.hasForcedA11yMarker, a.marker) {
				let e = o && r(a) === 0;
				a.marker.enabled && !e ? (d(a), i.hasForcedA11yMarker = !1) : a.marker.enabled === !1 && (n(a), i.hasForcedA11yMarker = !0);
			}
		}
	}
	function a(e) {
		return !!(e._hasPointMarkers && e.points && e.points.length);
	}
	function o(e) {
		let t = e.chart.options.accessibility;
		return e.points.length < t.series.pointDescriptionEnabledThreshold || t.series.pointDescriptionEnabledThreshold === !1;
	}
	function s() {
		let e = this;
		e.chart.styledMode && (e.markerGroup && e.markerGroup[e.a11yMarkersForced ? "addClass" : "removeClass"]("highcharts-a11y-markers-hidden"), a(e) && e.points.forEach((e) => {
			e.graphic && (e.graphic[e.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-hidden"), e.graphic[e.hasForcedA11yMarker === !1 ? "addClass" : "removeClass"]("highcharts-a11y-marker-visible"));
		}));
	}
	function c(e) {
		this.resetA11yMarkerOptions = x(e.options.marker || {}, this.userOptions.marker || {});
	}
	function l() {
		let e = this, t = e.options;
		u(e) ? (t.marker?.enabled === !1 && (e.a11yMarkersForced = !0, n(e.options)), a(e) && i(e)) : e.a11yMarkersForced ? (delete e.a11yMarkersForced, e.isDirty = !0, p(e), t.marker?.enabled === !1 && delete e.resetA11yMarkerOptions) : e.chart.styledMode && t.marker?.enabled === !1 && !a(e) && f(e);
	}
	function u(e) {
		let t = e.chart.options.accessibility.enabled, n = (e.options.accessibility && e.options.accessibility.enabled) !== !1;
		return t && n && o(e);
	}
	function d(e) {
		x(!0, e.marker, { states: { normal: { opacity: r(e) || 1 } } });
	}
	function f(e) {
		e.points?.forEach((e) => {
			e.graphic &&= e.graphic.destroy();
		});
	}
	function p(e) {
		let t = e.resetA11yMarkerOptions;
		if (t) {
			let n = t.states && t.states.normal && t.states.normal.opacity;
			e.chart.styledMode && t.enabled === !1 && f(e), e.userOptions && e.userOptions.marker && (e.userOptions.marker.enabled = !0), e.update({ marker: {
				enabled: t.enabled,
				states: { normal: { opacity: n } }
			} });
		}
	}
	function m() {
		this.boosted && this.a11yMarkersForced && (x(!0, this.options, { marker: { enabled: !1 } }), delete this.a11yMarkersForced);
	}
})(xs ||= {});
var Ss = xs, { seriesTypes: Cs } = J, { doc: ws } = H, { getPointFromXY: Ts, getSeriesFromName: Es, scrollAxisToPoint: Ds } = Q;
function Os(e) {
	let t = e.index, n = e.series.points, r = n.length;
	if (n[t] !== e) {
		for (; r--;) if (n[r] === e) return r;
	} else return t;
}
function ks(e) {
	let t = e.chart.options.accessibility.keyboardNavigation.seriesNavigation, n = e.options.accessibility || {}, r = n.keyboardNavigation;
	return r && r.enabled === !1 || n.enabled === !1 || e.options.enableMouseTracking === !1 || !e.visible || t.pointNavigationEnabledThreshold && +t.pointNavigationEnabledThreshold <= e.points.length;
}
function As(e) {
	let t = e.series, n = t.options.nullInteraction, r = e.options.accessibility, i = t.chart.options.accessibility, a = r?.enabled === !1;
	return i.keyboardNavigation.seriesNavigation.skipNullPoints ?? (!(!e.isNull || n) && e.visible === !1 || e.isInside === !1 || a || ks(t));
}
function js(e) {
	let t = e.points || [], n = t.length;
	for (let e = 0; e < n; ++e) if (!As(t[e])) return t[e];
	return null;
}
function Ms(e) {
	let t = e.series || [], n = t.length;
	for (let e = 0; e < n; ++e) if (!ks(t[e])) {
		let n = js(t[e]);
		if (n) return n;
	}
	return null;
}
function Ns(e) {
	let t = e.series.length, n = !1;
	for (; t-- && (e.highlightedPoint = e.series[t].points[e.series[t].points.length - 1], n = e.series[t].highlightNextValidPoint(), !n););
	return n;
}
function Ps(e) {
	let t = Ms(e);
	t && t.highlight(!1);
}
function Fs(e) {
	delete e.highlightedPoint;
	let t = Ms(e);
	return t ? t.highlight() : !1;
}
var Is = class {
	constructor(e, t) {
		this.keyCodes = t, this.chart = e;
	}
	init() {
		let e = this, t = this.chart, n = this.eventProvider = new ci();
		n.addEvent(ye, "destroy", function() {
			return e.onSeriesDestroy(this);
		}), n.addEvent(t, "afterApplyDrilldown", function() {
			Ps(this);
		}), n.addEvent(t, "drilldown", function(t) {
			let n = t.point, r = n.series;
			e.lastDrilledDownPoint = {
				x: n.x,
				y: n.y,
				seriesName: r ? r.name : ""
			};
		}), n.addEvent(t, "drillupall", function() {
			setTimeout(function() {
				e.onDrillupAll();
			}, 10);
		}), n.addEvent(pe, "afterSetState", function() {
			let e = this, n = e.graphic && e.graphic.element, r = ws.activeElement, i = r && r.getAttribute("class"), a = i && i.indexOf("highcharts-a11y-proxy-element") > -1;
			t.highlightedPoint === e && r !== n && !a && n && n.focus && n.focus();
		});
	}
	onDrillupAll() {
		let e = this.lastDrilledDownPoint, t = this.chart, n = e && Es(t, e.seriesName), r;
		e && n && G(e.x) && G(e.y) && (r = Ts(n, e.x, e.y)), r ||= Ms(t), t.container && t.container.focus(), r && r.highlight && r.highlight(!1);
	}
	getKeyboardNavigationHandler() {
		let e = this, t = this.keyCodes, n = this.chart, r = n.inverted;
		return new fi(n, {
			keyCodeMap: [
				[r ? [t.up, t.down] : [t.left, t.right], function(t) {
					return e.onKbdSideways(this, t);
				}],
				[r ? [t.left, t.right] : [t.up, t.down], function(t) {
					return e.onKbdVertical(this, t);
				}],
				[[t.enter, t.space], function(e, t) {
					let r = n.highlightedPoint;
					if (r) {
						let { plotLeft: e, plotTop: n } = this.chart, { plotX: i = 0, plotY: a = 0 } = r;
						t = {
							...t,
							chartX: e + i,
							chartY: n + a,
							point: r,
							target: r.graphic?.element || t.target
						}, z(r.series, "click", t), r.firePointEvent("click", t);
					}
					return this.response.success;
				}],
				[[t.home], function() {
					return Fs(n), this.response.success;
				}],
				[[t.end], function() {
					return Ns(n), this.response.success;
				}],
				[[t.pageDown, t.pageUp], function(e) {
					return n.highlightAdjacentSeries(e === t.pageDown), this.response.success;
				}]
			],
			init: function() {
				return e.onHandlerInit(this);
			},
			validate: function() {
				return !!Ms(n);
			},
			terminate: function() {
				return e.onHandlerTerminate();
			}
		});
	}
	onKbdSideways(e, t) {
		let n = this.keyCodes, r = t === n.right || t === n.down;
		return this.attemptHighlightAdjacentPoint(e, r);
	}
	onHandlerInit(e) {
		let t = this.chart;
		return t.options.accessibility.keyboardNavigation.seriesNavigation.rememberPointFocus && t.highlightedPoint ? t.highlightedPoint.highlight() : Fs(t), e.response.success;
	}
	onKbdVertical(e, t) {
		let n = this.chart, r = this.keyCodes, i = t === r.down || t === r.right, a = n.options.accessibility.keyboardNavigation.seriesNavigation;
		return a.mode && a.mode === "serialize" ? this.attemptHighlightAdjacentPoint(e, i) : (n[n.highlightedPoint && n.highlightedPoint.series.keyboardMoveVertical ? "highlightAdjacentPointVertical" : "highlightAdjacentSeries"](i), e.response.success);
	}
	onHandlerTerminate() {
		let e = this.chart, t = e.options.accessibility.keyboardNavigation;
		e.tooltip && e.tooltip.hide(0);
		let n = e.highlightedPoint && e.highlightedPoint.series;
		n && n.onMouseOut && n.onMouseOut(), e.highlightedPoint && e.highlightedPoint.onMouseOut && e.highlightedPoint.onMouseOut(), t.seriesNavigation.rememberPointFocus || delete e.highlightedPoint;
	}
	attemptHighlightAdjacentPoint(e, t) {
		let n = this.chart, r = n.options.accessibility.keyboardNavigation.wrapAround;
		return n.highlightAdjacentPoint(t) || r && (t ? Fs(n) : Ns(n)) ? e.response.success : e.response[t ? "next" : "prev"];
	}
	onSeriesDestroy(e) {
		let t = this.chart;
		t.highlightedPoint && t.highlightedPoint.series === e && (delete t.highlightedPoint, t.focusElement && t.focusElement.removeFocusBorder());
	}
	destroy() {
		this.eventProvider.removeAddedEvents();
	}
};
(function(e) {
	function t(e) {
		let t = this, n = t.series, r = t.highlightedPoint, i = r && Os(r) || 0, a = r && r.series.points || [], o = t.series && t.series[t.series.length - 1], s = o && o.points && o.points[o.points.length - 1], c, l;
		if (!n[0] || !n[0].points) return !1;
		if (!r) l = e ? n[0].points[0] : s;
		else if (c = n[r.series.index + (e ? 1 : -1)], l = a[i + (e ? 1 : -1)], !l && c && (l = c.points[e ? 0 : c.points.length - 1]), !l) return !1;
		return As(l) ? (c = l.series, t.highlightedPoint = ks(c) ? e ? c.points[c.points.length - 1] : c.points[0] : l, t.highlightAdjacentPoint(e)) : l.highlight();
	}
	function n(e) {
		let t = this.highlightedPoint, n = Infinity, r;
		return !G(t.plotX) || !G(t.plotY) ? !1 : (this.series.forEach((i) => {
			ks(i) || i.points.forEach((a) => {
				if (!G(a.plotY) || !G(a.plotX) || a === t) return;
				let o = a.plotY - t.plotY, s = Math.abs(a.plotX - t.plotX), c = Math.abs(o) * Math.abs(o) + s * s * 4;
				i.yAxis && i.yAxis.reversed && (o *= -1), !(o <= 0 && e || o >= 0 && !e || c < 5 || As(a)) && c < n && (n = c, r = a);
			});
		}), r ? r.highlight() : !1);
	}
	function r(e) {
		let t = this, n = t.highlightedPoint, r = t.series && t.series[t.series.length - 1], i = r && r.points && r.points[r.points.length - 1], o, s, c;
		return t.highlightedPoint ? (o = t.series[n.series.index + (e ? -1 : 1)], !o || (s = a(n, o, 4), !s) ? !1 : ks(o) ? (s.highlight(), c = t.highlightAdjacentSeries(e), c || (n.highlight(), !1)) : (s.highlight(), s.series.highlightNextValidPoint())) : (o = e ? t.series && t.series[0] : r, s = e ? o && o.points && o.points[0] : i, s ? s.highlight() : !1);
	}
	function i(e, i, a) {
		let c = e.prototype, l = i.prototype, u = a.prototype;
		c.highlightAdjacentPoint || (c.highlightAdjacentPoint = t, c.highlightAdjacentPointVertical = n, c.highlightAdjacentSeries = r, l.highlight = o, u.keyboardMoveVertical = !0, [
			"column",
			"gantt",
			"pie"
		].forEach((e) => {
			Cs[e] && (Cs[e].prototype.keyboardMoveVertical = !1);
		}), u.highlightNextValidPoint = s);
	}
	e.compose = i;
	function a(e, t, n, r) {
		let i = Infinity, a, o, s, c = t.points.length, l = (e) => !(G(e.plotX) && G(e.plotY));
		if (!l(e)) {
			for (; c--;) a = t.points[c], !l(a) && (s = (e.plotX - a.plotX) * (e.plotX - a.plotX) * (n || 1) + (e.plotY - a.plotY) * (e.plotY - a.plotY) * (r || 1), s < i && (i = s, o = c));
			return G(o) ? t.points[o] : void 0;
		}
	}
	function o(e = !0) {
		let t = this.series.chart, n = t.tooltip?.label?.element;
		(!this.isNull || this.series.options?.nullInteraction) && e ? this.onMouseOver() : t.tooltip && t.tooltip.hide(0), Ds(this), this.graphic && (t.setFocusToElement(this.graphic), !e && t.focusElement && t.focusElement.removeFocusBorder()), t.highlightedPoint = this;
		let r = n?.getBoundingClientRect().top;
		if (n && r && r < 0) {
			let e = window.scrollY + r;
			window.scrollTo({
				behavior: "smooth",
				top: e
			});
		}
		return this;
	}
	function s() {
		let e = this.chart.highlightedPoint, t = (e && e.series) === this ? Os(e) : 0, n = this.points, r = n.length;
		if (n && r) {
			for (let e = t; e < r; ++e) if (!As(n[e])) return n[e].highlight();
			for (let e = t; e >= 0; --e) if (!As(n[e])) return n[e].highlight();
		}
		return !1;
	}
})(Is ||= {});
var Ls = Is, { hideSeriesFromAT: Rs } = Q, { describeSeries: zs } = qo, Bs = class extends di {
	static compose(e, t, n) {
		ns.compose(n), Ss.compose(n), Ls.compose(e, t, n);
	}
	init() {
		this.newDataAnnouncer = new ns(this.chart), this.newDataAnnouncer.init(), this.keyboardNavigation = new Ls(this.chart, this.keyCodes), this.keyboardNavigation.init(), this.hideTooltipFromATWhenShown(), this.hideSeriesLabelsFromATWhenShown();
	}
	hideTooltipFromATWhenShown() {
		let e = this;
		this.chart.tooltip && this.addEvent(this.chart.tooltip.constructor, "refresh", function() {
			this.chart === e.chart && this.label && this.label.element && this.label.element.setAttribute("aria-hidden", !0);
		});
	}
	hideSeriesLabelsFromATWhenShown() {
		this.addEvent(this.chart, "afterDrawSeriesLabels", function() {
			this.series.forEach(function(e) {
				e.labelBySeries && e.labelBySeries.attr("aria-hidden", !0);
			});
		});
	}
	onChartRender() {
		this.chart.series.forEach(function(e) {
			(e.options.accessibility && e.options.accessibility.enabled) !== !1 && e.visible && e.getPointsCollection().length !== 0 ? zs(e) : Rs(e);
		});
	}
	getKeyboardNavigation() {
		return this.keyboardNavigation.getKeyboardNavigationHandler();
	}
	destroy() {
		this.newDataAnnouncer.destroy(), this.keyboardNavigation.destroy();
	}
}, { unhideChartElementFromAT: Vs } = Q, { getFakeMouseEvent: Hs } = Z;
function Us(e) {
	return !!(e.mapView && e.mapNavigation && e.mapNavigation.navButtons.length);
}
var Ws = class extends di {
	constructor() {
		super(...arguments), this.focusedMapNavButtonIx = -1;
	}
	init() {
		let e = this, t = this.chart;
		this.proxyProvider.addGroup("zoom", "div"), [
			"afterShowResetZoom",
			"afterApplyDrilldown",
			"drillupall"
		].forEach((n) => {
			e.addEvent(t, n, function() {
				e.updateProxyOverlays();
			});
		});
	}
	onChartUpdate() {
		let e = this.chart, t = this;
		e.mapNavigation && e.mapNavigation.navButtons.forEach((n, r) => {
			Vs(e, n.element), t.setMapNavButtonAttrs(n.element, "accessibility.zoom.mapZoom" + (r ? "Out" : "In"));
		});
	}
	setMapNavButtonAttrs(e, t) {
		let n = this.chart, r = n.langFormat(t, { chart: n });
		I(e, {
			tabindex: -1,
			role: "button",
			"aria-label": r
		});
	}
	onChartRender() {
		this.updateProxyOverlays();
	}
	updateProxyOverlays() {
		let e = this.chart;
		if (this.proxyProvider.clearGroup("zoom"), e.resetZoomButton && this.createZoomProxyButton(e.resetZoomButton, "resetZoomProxyButton", e.langFormat("accessibility.zoom.resetZoomButton", { chart: e })), e.drillUpButton && e.breadcrumbs && e.breadcrumbs.list) {
			let t = e.breadcrumbs.list[e.breadcrumbs.list.length - 1];
			this.createZoomProxyButton(e.drillUpButton, "drillUpProxyButton", e.langFormat("accessibility.drillUpButton", {
				chart: e,
				buttonText: e.breadcrumbs.getButtonText(t)
			}));
		}
	}
	createZoomProxyButton(e, t, n) {
		this[t] = this.proxyProvider.addProxyElement("zoom", { click: e }, "button", {
			"aria-label": n,
			tabindex: -1
		});
	}
	getMapZoomNavigation() {
		let e = this.keyCodes, t = this.chart, n = this;
		return new fi(t, {
			keyCodeMap: [
				[[
					e.up,
					e.down,
					e.left,
					e.right
				], function(e) {
					return n.onMapKbdArrow(this, e);
				}],
				[[e.tab], function(e, t) {
					return n.onMapKbdTab(this, t);
				}],
				[[e.space, e.enter], function() {
					return n.onMapKbdClick(this);
				}]
			],
			validate: function() {
				return Us(t);
			},
			init: function(e) {
				return n.onMapNavInit(e);
			}
		});
	}
	onMapKbdArrow(e, t) {
		let n = this.chart, r = this.keyCodes, i = n.container, a = t === r.up || t === r.down, o = t === r.left || t === r.up ? 1 : -1, s = (a ? n.plotHeight : n.plotWidth) / 10 * o, c = Math.random() * 10, l = {
			x: i.offsetLeft + n.plotLeft + n.plotWidth / 2 + c,
			y: i.offsetTop + n.plotTop + n.plotHeight / 2 + c
		}, u = a ? {
			x: l.x,
			y: l.y + s
		} : {
			x: l.x + s,
			y: l.y
		};
		return [
			Hs("mousedown", l),
			Hs("mousemove", u),
			Hs("mouseup", u)
		].forEach((e) => i.dispatchEvent(e)), e.response.success;
	}
	onMapKbdTab(e, t) {
		let n = this.chart, r = e.response, i = t.shiftKey, a = i && !this.focusedMapNavButtonIx || !i && this.focusedMapNavButtonIx;
		if (n.mapNavigation.navButtons[this.focusedMapNavButtonIx].setState(0), a) return n.mapView && n.mapView.zoomBy(), r[i ? "prev" : "next"];
		this.focusedMapNavButtonIx += i ? -1 : 1;
		let o = n.mapNavigation.navButtons[this.focusedMapNavButtonIx];
		return n.setFocusToElement(o.box, o.element), o.setState(2), r.success;
	}
	onMapKbdClick(e) {
		let t = this.chart.mapNavigation.navButtons[this.focusedMapNavButtonIx].element;
		return this.fakeClickEvent(t), e.response.success;
	}
	onMapNavInit(e) {
		let t = this.chart, n = t.mapNavigation.navButtons[0], r = t.mapNavigation.navButtons[1], i = e > 0 ? n : r;
		t.setFocusToElement(i.box, i.element), i.setState(2), this.focusedMapNavButtonIx = e > 0 ? 0 : 1;
	}
	simpleButtonNavigation(e, t, n) {
		let r = this.keyCodes, i = this, a = this.chart;
		return new fi(a, {
			keyCodeMap: [[[
				r.tab,
				r.up,
				r.down,
				r.left,
				r.right
			], function(e, t) {
				let n = e === r.tab && t.shiftKey || e === r.left || e === r.up;
				return this.response[n ? "prev" : "next"];
			}], [[r.space, r.enter], function() {
				let e = n(this, a);
				return T(e, this.response.success);
			}]],
			validate: function() {
				return a[e] && a[e].box && i[t].innerElement;
			},
			init: function() {
				a.setFocusToElement(a[e].box, i[t].innerElement);
			}
		});
	}
	getKeyboardNavigation() {
		return [
			this.simpleButtonNavigation("resetZoomButton", "resetZoomProxyButton", function(e, t) {
				t.zoomOut();
			}),
			this.simpleButtonNavigation("drillUpButton", "drillUpProxyButton", function(e, t) {
				return t.drillUp(), e.response.prev;
			}),
			this.getMapZoomNavigation()
		];
	}
}, { doc: Gs, isMS: Ks, win: qs } = H;
function Js() {
	if (Ks && qs.getComputedStyle) {
		let e = Gs.createElement("div");
		e.style.backgroundImage = "url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)", Gs.body.appendChild(e);
		let t = (e.currentStyle || qs.getComputedStyle(e)).backgroundImage;
		return Gs.body.removeChild(e), t === "none";
	}
	return qs.matchMedia && qs.matchMedia("(forced-colors: active)").matches;
}
function Ys(e) {
	let t = e.highContrastState ||= {};
	t.active = !0, t.applying = !0;
	try {
		let t = e.options.accessibility.highContrastTheme;
		e.update(t, !1);
		let n = t.colors?.length > 1;
		e.series.forEach(function(e) {
			let r = t.plotOptions[e.type] || {}, i = n && e.colorIndex !== void 0 ? t.colors[e.colorIndex] : r.color || "window", a = {
				color: r.color || "windowText",
				colors: n ? t.colors : [r.color || "windowText"],
				borderColor: r.borderColor || "window",
				fillColor: i
			};
			e.update(a, !1), e.points && e.points.forEach(function(e) {
				e.options && e.options.color && e.update({
					color: r.color || "windowText",
					borderColor: r.borderColor || "window"
				}, !1);
			});
		}), e.redraw();
	} finally {
		delete t.applying;
	}
}
var Xs = {
	isHighContrastModeActive: Js,
	setHighContrastTheme: Ys
}, Zs = {
	chart: { backgroundColor: "window" },
	title: { style: { color: "windowText" } },
	subtitle: { style: { color: "windowText" } },
	colorAxis: {
		minColor: "windowText",
		maxColor: "windowText",
		stops: [],
		dataClasses: []
	},
	colors: ["windowText"],
	xAxis: {
		gridLineColor: "windowText",
		labels: { style: { color: "windowText" } },
		lineColor: "windowText",
		minorGridLineColor: "windowText",
		tickColor: "windowText",
		title: { style: { color: "windowText" } }
	},
	yAxis: {
		gridLineColor: "windowText",
		labels: { style: { color: "windowText" } },
		lineColor: "windowText",
		minorGridLineColor: "windowText",
		tickColor: "windowText",
		title: { style: { color: "windowText" } }
	},
	tooltip: {
		backgroundColor: "window",
		borderColor: "windowText",
		style: { color: "windowText" }
	},
	plotOptions: {
		series: {
			lineColor: "windowText",
			fillColor: "window",
			borderColor: "windowText",
			edgeColor: "windowText",
			borderWidth: 1,
			dataLabels: {
				connectorColor: "windowText",
				color: "windowText",
				style: {
					color: "windowText",
					textOutline: "none"
				}
			},
			marker: {
				lineColor: "windowText",
				fillColor: "windowText"
			}
		},
		pie: {
			color: "window",
			colors: ["window"],
			borderColor: "windowText",
			borderWidth: 1
		},
		boxplot: { fillColor: "window" },
		candlestick: {
			lineColor: "windowText",
			fillColor: "window"
		},
		errorbar: { fillColor: "window" }
	},
	legend: {
		backgroundColor: "window",
		itemStyle: { color: "windowText" },
		itemHoverStyle: { color: "windowText" },
		itemHiddenStyle: { color: "#555" },
		title: { style: { color: "windowText" } }
	},
	credits: { style: { color: "windowText" } },
	drilldown: {
		activeAxisLabelStyle: { color: "windowText" },
		activeDataLabelStyle: { color: "windowText" }
	},
	navigation: { buttonOptions: {
		symbolStroke: "windowText",
		theme: { fill: "window" }
	} },
	rangeSelector: {
		buttonTheme: {
			fill: "window",
			stroke: "windowText",
			style: { color: "windowText" },
			states: {
				hover: {
					fill: "window",
					stroke: "windowText",
					style: { color: "windowText" }
				},
				select: {
					fill: "#444",
					stroke: "windowText",
					style: { color: "windowText" }
				}
			}
		},
		inputBoxBorderColor: "windowText",
		inputStyle: {
			backgroundColor: "window",
			color: "windowText"
		},
		labelStyle: { color: "windowText" }
	},
	navigator: {
		handles: {
			backgroundColor: "window",
			borderColor: "windowText"
		},
		outlineColor: "windowText",
		maskFill: "transparent",
		series: {
			color: "windowText",
			lineColor: "windowText"
		},
		xAxis: { gridLineColor: "windowText" }
	},
	scrollbar: {
		barBackgroundColor: "#444",
		barBorderColor: "windowText",
		buttonArrowColor: "windowText",
		buttonBackgroundColor: "window",
		buttonBorderColor: "windowText",
		rifleColor: "windowText",
		trackBackgroundColor: "window",
		trackBorderColor: "windowText"
	}
}, Qs = {
	accessibility: {
		enabled: !0,
		screenReaderSection: {
			beforeChartFormat: "<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{playAsSoundButton}</div><div>{viewTableButton}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div><div>{annotationsTitle}{annotationsList}</div>",
			afterChartFormat: "{endOfChartMarker}",
			axisRangeDateFormat: "%Y-%m-%d %H:%M:%S"
		},
		series: {
			descriptionFormat: "{seriesDescription}{authorDescription}{axisDescription}",
			describeSingleSeries: !1,
			pointDescriptionEnabledThreshold: 200
		},
		point: {
			valueDescriptionFormat: "{xDescription}{separator}{value}.",
			describeNull: !0
		},
		landmarkVerbosity: "all",
		linkedDescription: "*[data-highcharts-chart=\"{index}\"] + .highcharts-description",
		highContrastMode: "auto",
		keyboardNavigation: {
			enabled: !0,
			focusBorder: {
				enabled: !0,
				hideBrowserFocusOutline: !0,
				style: {
					color: "var(--highcharts-highlight-color-80)",
					lineWidth: 2,
					borderRadius: 3
				},
				margin: 2
			},
			order: [
				"series",
				"zoom",
				"rangeSelector",
				"navigator",
				"legend",
				"chartMenu"
			],
			wrapAround: !0,
			seriesNavigation: {
				skipNullPoints: void 0,
				pointNavigationEnabledThreshold: !1,
				rememberPointFocus: !1
			}
		},
		announceNewData: {
			enabled: !1,
			minAnnounceInterval: 5e3,
			interruptUser: !1
		}
	},
	legend: { accessibility: {
		enabled: !0,
		keyboardNavigation: { enabled: !0 }
	} },
	exporting: { accessibility: { enabled: !0 } },
	navigator: { accessibility: { enabled: !0 } }
}, $s = { accessibility: {
	defaultChartTitle: "Chart",
	chartContainerLabel: "{title}. Highcharts interactive chart.",
	svgContainerLabel: "Interactive chart",
	drillUpButton: "{buttonText}",
	credits: "Chart credits: {creditsStr}",
	thousandsSep: ",",
	svgContainerTitle: "",
	graphicContainerLabel: "",
	screenReaderSection: {
		beforeRegionLabel: "",
		afterRegionLabel: "",
		annotations: {
			heading: "Chart annotations summary",
			descriptionSinglePoint: "{annotationText}. Related to {annotationPoint}",
			descriptionMultiplePoints: "{annotationText}. Related to {annotationPoint}{#each additionalAnnotationPoints}, also related to {this}{/each}",
			descriptionNoPoints: "{annotationText}"
		},
		endOfChartMarker: "End of interactive chart."
	},
	sonification: {
		playAsSoundButtonText: "Play as sound, {chartTitle}",
		playAsSoundClickAnnouncement: "Play"
	},
	legend: {
		legendLabelNoTitle: "Toggle series visibility, {chartTitle}",
		legendLabel: "Chart legend: {legendTitle}",
		legendItem: "Show {itemName}"
	},
	zoom: {
		mapZoomIn: "Zoom chart",
		mapZoomOut: "Zoom out chart",
		resetZoomButton: "Reset zoom"
	},
	rangeSelector: {
		dropdownLabel: "{rangeTitle}",
		minInputLabel: "Select start date.",
		maxInputLabel: "Select end date.",
		clickButtonAnnouncement: "Viewing {axisRangeDescription}"
	},
	navigator: {
		handleLabel: "{#eq handleIx 0}Start, percent{else}End, percent{/eq}",
		groupLabel: "Axis zoom",
		changeAnnouncement: "{axisRangeDescription}"
	},
	stockTools: {
		groupLabel: "Stock chart tools",
		arrowLabel: "Toggle submenu"
	},
	table: {
		viewAsDataTableButtonText: "View as data table, {chartTitle}",
		tableSummary: "Table representation of chart."
	},
	announceNewData: {
		newDataAnnounce: "Updated data for chart {chartTitle}",
		newSeriesAnnounceSingle: "New data series: {seriesDesc}",
		newPointAnnounceSingle: "New data point: {pointDesc}",
		newSeriesAnnounceMultiple: "New data series in chart {chartTitle}: {seriesDesc}",
		newPointAnnounceMultiple: "New data point in chart {chartTitle}: {pointDesc}"
	},
	seriesTypeDescriptions: {
		boxplot: "Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.",
		arearange: "Arearange charts are line charts displaying a range between a lower and higher value for each point.",
		areasplinerange: "These charts are line charts displaying a range between a lower and higher value for each point.",
		bubble: "Bubble charts are scatter charts where each data point also has a size value.",
		columnrange: "Columnrange charts are column charts displaying a range between a lower and higher value for each point.",
		errorbar: "Errorbar series are used to display the variability of the data.",
		funnel: "Funnel charts are used to display reduction of data in stages.",
		pyramid: "Pyramid charts consist of a single pyramid with item heights corresponding to each point value.",
		waterfall: "A waterfall chart is a column chart where each column contributes towards a total end value."
	},
	chartTypes: {
		emptyChart: "Empty chart",
		mapTypeDescription: "Map of {mapTitle} with {numSeries} data series.",
		unknownMap: "Map of unspecified region with {numSeries} data series.",
		combinationChart: "Combination chart with {numSeries} data series.",
		defaultSingle: "Chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.",
		defaultMultiple: "Chart with {numSeries} data series.",
		splineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.",
		splineMultiple: "Line chart with {numSeries} lines.",
		lineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.",
		lineMultiple: "Line chart with {numSeries} lines.",
		columnSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.",
		columnMultiple: "Bar chart with {numSeries} data series.",
		barSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.",
		barMultiple: "Bar chart with {numSeries} data series.",
		pieSingle: "Pie chart with {numPoints} {#eq numPoints 1}slice{else}slices{/eq}.",
		pieMultiple: "Pie chart with {numSeries} pies.",
		scatterSingle: "Scatter chart with {numPoints} {#eq numPoints 1}point{else}points{/eq}.",
		scatterMultiple: "Scatter chart with {numSeries} data series.",
		boxplotSingle: "Boxplot with {numPoints} {#eq numPoints 1}box{else}boxes{/eq}.",
		boxplotMultiple: "Boxplot with {numSeries} data series.",
		bubbleSingle: "Bubble chart with {numPoints} {#eq numPoints 1}bubbles{else}bubble{/eq}.",
		bubbleMultiple: "Bubble chart with {numSeries} data series."
	},
	axis: {
		xAxisDescriptionSingular: "The chart has 1 X axis displaying {names[0]}. {ranges[0]}",
		xAxisDescriptionPlural: "The chart has {numAxes} X axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.",
		yAxisDescriptionSingular: "The chart has 1 Y axis displaying {names[0]}. {ranges[0]}",
		yAxisDescriptionPlural: "The chart has {numAxes} Y axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.",
		timeRangeDays: "Data range: {range} days.",
		timeRangeHours: "Data range: {range} hours.",
		timeRangeMinutes: "Data range: {range} minutes.",
		timeRangeSeconds: "Data range: {range} seconds.",
		rangeFromTo: "Data ranges from {rangeFrom} to {rangeTo}.",
		rangeCategories: "Data range: {numCategories} categories.",
		defaultAxisNames: {
			categories: "categories",
			time: "Time",
			values: "values"
		}
	},
	exporting: {
		chartMenuLabel: "Chart menu",
		menuButtonLabel: "View chart context menu, {chartTitle}"
	},
	series: {
		summary: {
			default: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			defaultCombination: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			line: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			lineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			spline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			splineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			column: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
			columnCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
			bar: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
			barCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.",
			pie: "{series.name}, pie {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.",
			pieCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Pie with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.",
			scatter: "{series.name}, scatter plot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.",
			scatterCombination: "{series.name}, series {seriesNumber} of {chart.series.length}, scatter plot with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.",
			boxplot: "{series.name}, boxplot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.",
			boxplotCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Boxplot with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.",
			bubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.",
			bubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.",
			map: "{series.name}, map {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.",
			mapCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Map with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.",
			mapline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			maplineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.",
			mapbubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.",
			mapbubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}."
		},
		description: "{description}",
		xAxisDescription: "X axis, {name}",
		yAxisDescription: "Y axis, {name}",
		nullPointValue: "No value",
		pointAnnotationsDescription: "{#each annotations}Annotation: {this}{/each}"
	}
} };
//#endregion
//#region node_modules/highcharts/es-modules/Accessibility/Options/DeprecatedOptions.js
function ec(e, t, n) {
	let r = e, i, a = 0;
	for (; a < t.length - 1; ++a) i = t[a], r = r[i] = T(r[i], {});
	r[t[t.length - 1]] = n;
}
function tc(e, t, n, r) {
	function i(e, t) {
		return t.reduce(function(e, t) {
			return e[t];
		}, e);
	}
	let a = i(e.options, t), o = i(e.options, n);
	Object.keys(r).forEach(function(i) {
		let s = a[i];
		s !== void 0 && (ec(o, r[i], s), U(32, !1, e, { [t.join(".") + "." + i]: n.join(".") + "." + r[i].join(".") }));
	});
}
function nc(e) {
	let t = e.options.chart, n = e.options.accessibility || {};
	["description", "typeDescription"].forEach(function(r) {
		t[r] && (n[r] = t[r], U(32, !1, e, { [`chart.${r}`]: `use accessibility.${r}` }));
	});
}
function rc(e) {
	e.axes.forEach(function(t) {
		let n = t.options;
		n && n.description && (n.accessibility = n.accessibility || {}, n.accessibility.description = n.description, U(32, !1, e, { "axis.description": "use axis.accessibility.description" }));
	});
}
function ic(e) {
	let t = {
		description: ["accessibility", "description"],
		exposeElementToA11y: ["accessibility", "exposeAsGroupOnly"],
		pointDescriptionFormat: [
			"accessibility",
			"point",
			"descriptionFormat"
		],
		pointDescriptionFormatter: [
			"accessibility",
			"point",
			"descriptionFormatter"
		],
		skipKeyboardNavigation: [
			"accessibility",
			"keyboardNavigation",
			"enabled"
		],
		"accessibility.pointDescriptionFormatter": [
			"accessibility",
			"point",
			"descriptionFormatter"
		]
	};
	e.series.forEach(function(n) {
		Object.keys(t).forEach(function(r) {
			let i = n.options[r];
			r === "accessibility.pointDescriptionFormatter" && (i = n.options.accessibility && n.options.accessibility.pointDescriptionFormatter), i !== void 0 && (ec(n.options, t[r], r === "skipKeyboardNavigation" ? !i : i), U(32, !1, e, { [`series.${r}`]: "series." + t[r].join(".") }));
		});
	});
}
function ac(e) {
	tc(e, ["accessibility"], ["accessibility"], {
		pointDateFormat: ["point", "dateFormat"],
		pointDateFormatter: ["point", "dateFormatter"],
		pointDescriptionFormatter: ["point", "descriptionFormatter"],
		pointDescriptionThreshold: ["series", "pointDescriptionEnabledThreshold"],
		pointNavigationThreshold: [
			"keyboardNavigation",
			"seriesNavigation",
			"pointNavigationEnabledThreshold"
		],
		pointValueDecimals: ["point", "valueDecimals"],
		pointValuePrefix: ["point", "valuePrefix"],
		pointValueSuffix: ["point", "valueSuffix"],
		screenReaderSectionFormatter: ["screenReaderSection", "beforeChartFormatter"],
		describeSingleSeries: ["series", "describeSingleSeries"],
		seriesDescriptionFormatter: ["series", "descriptionFormatter"],
		onTableAnchorClick: ["screenReaderSection", "onViewDataTableClick"],
		axisRangeDateFormat: ["screenReaderSection", "axisRangeDateFormat"]
	});
}
function oc(e) {
	tc(e, ["accessibility", "keyboardNavigation"], [
		"accessibility",
		"keyboardNavigation",
		"seriesNavigation"
	], {
		skipNullPoints: ["skipNullPoints"],
		mode: ["mode"]
	});
}
function sc(e) {
	tc(e, ["lang", "accessibility"], ["lang", "accessibility"], {
		legendItem: ["legend", "legendItem"],
		legendLabel: ["legend", "legendLabel"],
		mapZoomIn: ["zoom", "mapZoomIn"],
		mapZoomOut: ["zoom", "mapZoomOut"],
		resetZoomButton: ["zoom", "resetZoomButton"],
		screenReaderRegionLabel: ["screenReaderSection", "beforeRegionLabel"],
		rangeSelectorButton: ["rangeSelector", "buttonText"],
		rangeSelectorMaxInput: ["rangeSelector", "maxInputLabel"],
		rangeSelectorMinInput: ["rangeSelector", "minInputLabel"],
		svgContainerEnd: ["screenReaderSection", "endOfChartMarker"],
		viewAsDataTable: ["table", "viewAsDataTableButtonText"],
		tableSummary: ["table", "tableSummary"]
	});
}
function cc(e) {
	nc(e), rc(e), e.series && ic(e), ac(e), oc(e), sc(e);
}
//#endregion
//#region node_modules/highcharts/es-modules/Accessibility/Accessibility.js
var { defaultOptions: lc } = O, { doc: uc } = H, { removeElement: dc } = Z, fc = class {
	constructor(e) {
		this.init(e);
	}
	init(e) {
		if (this.chart = e, !uc?.addEventListener) {
			this.zombie = !0, this.components = {}, e.renderTo.setAttribute("aria-hidden", !0);
			return;
		}
		cc(e), this.proxyProvider = new ms(this.chart), this.initComponents(), this.keyboardNavigation = new da(e, this.components);
	}
	initComponents() {
		let e = this.chart, t = this.proxyProvider, n = e.options.accessibility;
		this.components = {
			container: new _i(),
			infoRegions: new Qi(),
			legend: new Sa(),
			chartMenu: new aa(),
			rangeSelector: new ys(),
			series: new Bs(),
			zoom: new Ws(),
			navigator: new mo()
		}, n.customComponents && a(this.components, n.customComponents);
		let r = this.components;
		this.getComponentOrder().forEach(function(n) {
			r[n].initBase(e, t), r[n].init();
		});
	}
	getComponentOrder() {
		if (!this.components) return [];
		if (!this.components.series) return Object.keys(this.components);
		let e = Object.keys(this.components).filter((e) => e !== "series");
		return ["series"].concat(e);
	}
	update() {
		let e = this.components, t = this.chart, n = t.options.accessibility;
		z(t, "beforeA11yUpdate"), t.types = this.getChartTypes();
		let r = n.keyboardNavigation.order;
		this.proxyProvider.updateGroupOrder(r), this.getComponentOrder().forEach(function(n) {
			e[n].onChartUpdate(), z(t, "afterA11yComponentUpdate", {
				name: n,
				component: e[n]
			});
		}), this.keyboardNavigation.update(r), !t.highContrastState?.applying && n.highContrastMode !== !1 && (t.highContrastState?.active || Xs.isHighContrastModeActive() || n.highContrastMode === !0) && Xs.setHighContrastTheme(t), z(t, "afterA11yUpdate", { accessibility: this });
	}
	destroy() {
		let e = this.chart || {}, t = this.components;
		Object.keys(t).forEach(function(e) {
			t[e].destroy(), t[e].destroyBase();
		}), this.proxyProvider && this.proxyProvider.destroy(), e.announcerContainer && dc(e.announcerContainer), this.keyboardNavigation && this.keyboardNavigation.destroy(), e.renderTo && e.renderTo.setAttribute("aria-hidden", !0), e.focusElement && e.focusElement.removeFocusBorder();
	}
	getChartTypes() {
		let e = {};
		return this.chart.series.forEach(function(t) {
			e[t.type] = 1;
		}), Object.keys(e);
	}
};
(function(e) {
	e.i18nFormat = Vr.i18nFormat;
	function t() {
		this.accessibility && this.accessibility.destroy();
	}
	function n() {
		this.a11yDirty && this.renderTo && (delete this.a11yDirty, this.updateA11yEnabled());
		let e = this.accessibility;
		e && !e.zombie && (e.proxyProvider.updateProxyElementPositions(), e.getComponentOrder().forEach(function(t) {
			e.components[t].onChartRender();
		}));
	}
	function r(e) {
		let t = e.options.accessibility;
		t && (t.customComponents && (this.options.accessibility.customComponents = t.customComponents, delete t.customComponents), x(!0, this.options.accessibility, t), this.accessibility && this.accessibility.destroy && (this.accessibility.destroy(), delete this.accessibility)), this.a11yDirty = !0;
	}
	function i() {
		let t = this.accessibility, n = this.options.accessibility, r = this.renderer.boxWrapper.element, i = this.title;
		if (n && n.enabled) t && !t.zombie ? t.update() : (this.accessibility = t = new e(this), t && !t.zombie && t.update(), r.getAttribute("role") === "img" && r.removeAttribute("role"));
		else if (t) t.destroy && t.destroy(), delete this.accessibility;
		else {
			this.renderTo.setAttribute("role", "img"), this.renderTo.setAttribute("aria-hidden", !1), this.renderTo.setAttribute("aria-label", (i && i.element.textContent || "").replace(/</g, "&lt;")), r.setAttribute("aria-hidden", !0);
			let e = document.getElementsByClassName("highcharts-description")[0];
			e && (e.setAttribute("aria-hidden", !1), e.classList.remove("highcharts-linked-description"));
		}
	}
	function a(e, a, s, c, l, u) {
		da.compose(e), ns.compose(c), Sa.compose(e, a), aa.compose(e), Bs.compose(e, s, c), Vr.compose(e), yi.compose(e, l), u && ys.compose(e, u);
		let d = e.prototype;
		d.updateA11yEnabled || (d.updateA11yEnabled = i, P(e, "destroy", t), P(e, "render", n), P(e, "update", r), ["addSeries", "init"].forEach((t) => {
			P(e, t, function() {
				this.a11yDirty = !0;
			});
		}), ["afterApplyDrilldown", "drillupall"].forEach((t) => {
			P(e, t, function() {
				let e = this.accessibility;
				e && !e.zombie && e.update();
			});
		}), P(s, "update", o), [
			"update",
			"updatedData",
			"remove"
		].forEach((e) => {
			P(c, e, function() {
				this.chart.accessibility && (this.chart.a11yDirty = !0);
			});
		}));
	}
	e.compose = a;
	function o() {
		this.series.chart.accessibility && (this.series.chart.a11yDirty = !0);
	}
})(fc ||= {}), x(!0, lc, Qs, {
	accessibility: { highContrastTheme: Zs },
	lang: $s
});
var pc = fc, $ = H;
$.i18nFormat = pc.i18nFormat, $.A11yChartUtilities = Q, $.A11yHTMLUtilities = Z, $.AccessibilityComponent = di, $.KeyboardNavigationHandler = fi, $.SeriesAccessibilityDescriber = qo, pc.compose($.Chart, $.Legend, $.Point, $.Series, $.SVGElement, $.RangeSelector);
//#endregion
//#region src/index.ts
var mc = {
	areaLine: "area",
	areaSpline: "areaspline",
	bar: "bar",
	column: "column",
	line: "line",
	spline: "spline"
}, hc = {
	areaLine: "area",
	areaRange: "arearange",
	areaSpline: "areaspline",
	column: "column",
	columnRange: "columnrange",
	line: "line",
	spline: "spline"
}, gc = {
	areaLine: "arearange",
	areaSpline: "areasplinerange",
	bar: "columnrange",
	column: "columnrange"
}, _c = "highcharts", vc = {
	isDependencyWheelAndSankeyModulesLoaded: !1,
	isHighchartsMoreLoaded: !1,
	isPatternFillLoaded: !1,
	isStreamgraphModuleLoaded: !1
}, yc = class {
	renderCartesianChart(e, t, n, r) {
		let i = mc[e], a = Array.from(t.data.measures, (e) => ({
			type: i,
			name: e.name,
			data: e.values
		})), o = {
			chart: { type: i },
			plotOptions: { series: { borderColor: "#333" } },
			series: a,
			title: { text: t.title.text },
			xAxis: { categories: t.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: t.title.text } }
		}, s = Y.chart(n, o, r);
		return {
			chart: s,
			resize: () => {
				s.reflow();
			},
			vendorId: _c
		};
	}
	async render(e, t, n) {
		await Promise.all([this.loadHighchartsMore(), this.loadPatternFill()]);
		let r = Y.chart(t, e, n);
		return {
			chart: r,
			resize: () => {
				r.reflow();
			},
			vendorId: _c
		};
	}
	async renderPeriodFlowBoundaries(e, t, n) {
		await this.loadHighchartsMore();
		let r = {
			chart: { type: "waterfall" },
			plotOptions: { series: { borderColor: "#333" } },
			series: Array.from(e.data.measures, (e) => ({
				type: "waterfall",
				name: e.name,
				data: e.values
			})),
			title: { text: e.title.text },
			xAxis: { categories: e.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: e.title.text } }
		}, i = Y.chart(t, r, n);
		return {
			chart: i,
			resize: () => {
				i.reflow();
			},
			vendorId: _c
		};
	}
	async renderPolarChart(e, t, n, r) {
		await this.loadHighchartsMore();
		let i = hc[e], a = {
			chart: { polar: !0 },
			plotOptions: { series: { borderColor: "#333" } },
			series: Array.from(t.data.measures, (e) => ({
				type: i,
				name: e.name,
				data: e.values
			})),
			title: { text: t.title.text },
			xAxis: { categories: t.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: t.title.text } }
		}, o = Y.chart(n, a, r);
		return {
			chart: o,
			resize: () => {
				o.reflow();
			},
			vendorId: _c
		};
	}
	async renderRangeChart(e, t, n, r) {
		await this.loadHighchartsMore();
		let i = gc[e], a = [], o = [];
		for (let e = 0; e < t.data.dimension.values.length; e++) o.push([t.data.measures[0]?.values[e]?.[0] ?? 0, t.data.measures[1]?.values[e]?.[0] ?? 0]);
		a.push({
			type: i,
			name: "Unknown",
			data: o
		});
		let s = {
			chart: {
				type: i,
				inverted: e === "bar"
			},
			plotOptions: { series: { borderColor: "#333" } },
			series: a,
			title: { text: t.title.text },
			xAxis: { categories: t.data.dimension.values.map((e) => e.label?.text ?? "") },
			yAxis: { title: { text: t.title.text } }
		}, c = Y.chart(n, s, r);
		return {
			chart: c,
			resize: () => {
				c.reflow();
			},
			vendorId: _c
		};
	}
	setColorMode(e) {
		typeof document > "u" || (document.documentElement.classList.toggle("highcharts-dark", e === "dark"), document.documentElement.classList.toggle("highcharts-light", e !== "dark"));
	}
	async loadDependencyWheelAndSankeyModules() {
		vc.isDependencyWheelAndSankeyModulesLoaded ||= (await Promise.all([import("./dependency-wheel.src-BHmwx9rW.js"), import("./sankey.src-DocCurOx.js")]), !0);
	}
	async loadHighchartsMore() {
		vc.isHighchartsMoreLoaded ||= (await import("./highchartsMoreCustom-CcpfmVny.js"), !0);
	}
	async loadPatternFill() {
		vc.isPatternFillLoaded ||= (await import("./pattern-fill.src-BPmr3DQg.js"), !0);
	}
	async loadStreamGraphModule() {
		vc.isStreamgraphModuleLoaded ||= (await import("./streamgraph.src-Bn6PY8Fd.js"), !0);
	}
};
//#endregion
export { yc as HighchartsTool };

//# sourceMappingURL=dpuse-tool-highcharts-visualiser.es.js.map