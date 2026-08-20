import { $ as e, C as t, G as n, H as r, J as i, K as a, M as o, N as s, O as c, Q as l, S as u, U as d, W as f, X as p, a as m, at as h, h as g, k as _, lt as v, n as y, nt as b, p as x, s as S, t as C, v as w, w as T, x as E, z as D } from "./AnimationUtilities-CJw-tdb_.js";
//#region node_modules/highcharts/es-modules/Core/Renderer/SVG/SVGElement.js
var { deg2rad: O, doc: k, svg: A, SVG_NS: j, win: M, isFirefox: N } = v, P = class P {
	_defaultGetter(e) {
		let t = l(this[e + "Value"], this[e], this.element ? this.element.getAttribute(e) : null, 0);
		return /^-?[\d\.]+$/.test(t) && (t = parseFloat(t)), t;
	}
	_defaultSetter(e, t, n) {
		n.setAttribute(t, e);
	}
	add(e) {
		let t = this.renderer, n = this.element, r;
		return e && (this.parentGroup = e), this.textStr !== void 0 && this.element.nodeName === "text" && t.buildText(this), this.added = !0, (!e || e.handleZ || this.zIndex) && (r = this.zIndexSetter()), r || (e ? e.element : t.box).appendChild(n), this.onAdd && this.onAdd(), this;
	}
	addClass(e, t) {
		let n = t ? "" : this.attr("class") || "";
		return e = (e || "").split(/ /g).reduce(function(e, t) {
			return n.indexOf(t) === -1 && e.push(t), e;
		}, n ? [n] : []).join(" "), e !== n && this.attr("class", e), this;
	}
	afterSetters() {
		this.doTransform &&= (this.updateTransform(), !1);
	}
	align(t, r, i, a = !0) {
		let o = this.renderer, c = o.alignedObjects, u = !!t;
		t ? (this.alignOptions = t, this.alignByTranslate = r, this.alignTo = i) : (t = this.alignOptions || {}, r = this.alignByTranslate, i = this.alignTo);
		let d = !i || n(i) ? i || "renderer" : void 0;
		d && (u && e(c, this), i = void 0);
		let f = l(i, o[d], o), p = (f.x || 0) + (t.x || 0) + ((f.width || 0) - (t.width || 0)) * s(t.align), m = (f.y || 0) + (t.y || 0) + ((f.height || 0) - (t.height || 0)) * s(t.verticalAlign), h = {};
		return t.align && (h["text-align"] = t.align), h[r ? "translateX" : "x"] = Math.round(p), h[r ? "translateY" : "y"] = Math.round(m), a && (this[this.placed ? "animate" : "attr"](h), this.placed = !0), this.alignAttr = h, this;
	}
	alignSetter(e) {
		let t = {
			left: "start",
			center: "middle",
			right: "end"
		};
		t[e] && (this.alignValue = e, this.element.setAttribute("text-anchor", t[e]));
	}
	animate(e, t, n) {
		let r = C(l(t, this.renderer.globalAnimation, !0)), a = r.defer;
		return k.hidden && (r.duration = 0), r.duration === 0 ? (this.attr(e, void 0, n || r.complete), i(e, function(e, t) {
			r.step && r.step.call(this, e, {
				prop: t,
				pos: 1,
				elem: this
			});
		}, this)) : (n && (r.complete = n), h(() => {
			this.element && y(this, e, r);
		}, a)), this;
	}
	applyTextOutline(e) {
		let t = this.element;
		e.indexOf("contrast") !== -1 && (e = e.replace(/contrast/g, this.renderer.getContrast(t.style.fill)));
		let n = e.indexOf(" "), r = e.substring(n + 1), i = e.substring(0, n);
		if (i && i !== "none" && v.svg) {
			this.fakeTS = !0, i = i.replace(/(^[\d\.]+)(.*?)$/g, function(e, t, n) {
				return 2 * Number(t) + n;
			}), this.removeTextOutline();
			let e = k.createElementNS(j, "tspan");
			w(e, {
				class: "highcharts-text-outline",
				fill: r,
				stroke: r,
				"stroke-width": i,
				"stroke-linejoin": "round"
			});
			let n = t.querySelector("textPath") || t;
			[].forEach.call(n.childNodes, (t) => {
				let n = t.cloneNode(!0);
				n.removeAttribute && [
					"fill",
					"stroke",
					"stroke-width",
					"stroke"
				].forEach((e) => n.removeAttribute(e)), e.appendChild(n);
			});
			let a = 0;
			[].forEach.call(n.querySelectorAll("text tspan"), (e) => {
				a += Number(e.getAttribute("dy"));
			});
			let o = k.createElementNS(j, "tspan");
			o.textContent = "​", w(o, {
				x: Number(t.getAttribute("x")),
				dy: -a
			}), e.appendChild(o), n.insertBefore(e, n.firstChild);
		}
	}
	attr(e, t, n, r) {
		let { element: a } = this, o = P.symbolCustomAttribs, s, c, l = this, u, d;
		return typeof e == "string" && t !== void 0 && (s = e, e = {}, e[s] = t), typeof e == "string" ? l = (this[e + "Getter"] || this._defaultGetter).call(this, e, a) : (i(e, function(t, n) {
			u = !1, r || m(this, n), this.symbolName && o.indexOf(n) !== -1 && (c ||= (this.symbolAttr(e), !0), u = !0), this.rotation && (n === "x" || n === "y") && (this.doTransform = !0), u || (d = this[n + "Setter"] || this._defaultSetter, d.call(this, t, n, a));
		}, this), this.afterSetters()), n && n.call(this), l;
	}
	clip(e) {
		if (e && !e.clipPath) {
			let t = x() + "-", n = this.renderer.createElement("clipPath").attr({ id: t }).add(this.renderer.defs);
			_(e, {
				clipPath: n,
				id: t,
				count: 0
			}), e.add(n);
		}
		return this.attr("clip-path", e ? `url(${this.renderer.url}#${e.id})` : "none");
	}
	crisp(e, t) {
		t = Math.round(t || e.strokeWidth || 0);
		let n = e.x || this.x || 0, r = e.y || this.y || 0, i = (e.width || this.width || 0) + n, a = (e.height || this.height || 0) + r, o = u(n, t), s = u(r, t), c = u(i, t), l = u(a, t);
		return _(e, {
			x: o,
			y: s,
			width: c - o,
			height: l - s
		}), T(e.strokeWidth) && (e.strokeWidth = t), e;
	}
	complexColor(e, t, n) {
		let r = this.renderer, s, c, l, u, d, f, p, m, h, g = [], _;
		o(this.renderer, "complexColor", { args: arguments }, () => {
			if (e.radialGradient ? c = "radialGradient" : e.linearGradient && (c = "linearGradient"), c) {
				if (l = e[c], d = r.gradients, f = e.stops, m = n.radialReference, D(l) && (e[c] = l = {
					x1: l[0],
					y1: l[1],
					x2: l[2],
					y2: l[3],
					gradientUnits: "userSpaceOnUse"
				}), c === "radialGradient" && m && !T(l.gradientUnits) && (u = l, l = a(l, r.getRadialAttr(m, u), { gradientUnits: "userSpaceOnUse" })), i(l, function(e, t) {
					t !== "id" && g.push(t, e);
				}), i(f, function(e) {
					g.push(e);
				}), g = g.join(","), d[g]) h = d[g].attr("id");
				else {
					l.id = h = x();
					let e = d[g] = r.createElement(c).attr(l).add(r.defs);
					e.radAttr = u, e.stops = [], f.forEach(([t, n]) => {
						n.indexOf("rgba") === 0 ? (s = S.parse(n), n = s.get("rgb"), p = s.get("a")) : p = 1;
						let i = r.createElement("stop").attr({
							offset: t,
							"stop-color": n,
							"stop-opacity": p
						}).add(e);
						e.stops.push(i);
					});
				}
				_ = "url(" + r.url + "#" + h + ")", n.setAttribute(t, _), n.gradient = g, e.toString = function() {
					return _;
				};
			}
		});
	}
	css(e) {
		let n = this.styles, r = {}, o = this.element, s = this.renderer, c, l = !n;
		if (n && i(e, function(e, t) {
			n && n[t] !== e && (r[t] = e, l = !0);
		}), l) {
			n && (e = _(n, r)), e.width === null || e.width === "auto" ? delete this.textWidth : o.nodeName.toLowerCase() === "text" && e.width && (c = this.textWidth = p(e.width)), _(this.styles, e), c && !A && s.forExport && delete e.width;
			let i = N && e.fontSize || null;
			i && (d(i) || /^\d+$/.test(i)) && (e.fontSize += "px");
			let l = a(e);
			o.namespaceURI === this.SVG_NS && ([
				"textOutline",
				"textOverflow",
				"whiteSpace",
				"width"
			].forEach((e) => l && delete l[e]), l.color && (l.fill = l.color, delete l.color)), t(o, l);
		}
		return this.added && (this.element.nodeName === "text" && s.buildText(this), e.textOutline && this.applyTextOutline(e.textOutline)), this;
	}
	dashstyleSetter(e) {
		let t, n = this["stroke-width"];
		if (n === "inherit" && (n = 1), e) {
			e = e.toLowerCase();
			let r = e.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
			for (t = r.length; t--;) r[t] = "" + p(r[t]) * l(n, NaN);
			e = r.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", e);
		}
	}
	destroy() {
		let e = this, { element: t = {}, renderer: n, stops: r } = e, a = t.ownerSVGElement;
		if (t.onclick = t.onmouseout = t.onmouseover = t.onmousemove = t.point = null, m(e), e.clipPath && a) {
			let t = e.clipPath;
			[].forEach.call(a.querySelectorAll("[clip-path],[CLIP-PATH]"), function(e) {
				e.getAttribute("clip-path").indexOf(t.element.id) > -1 && e.removeAttribute("clip-path");
			}), e.clipPath = t.destroy();
		}
		if (r) {
			for (let e of r) e.destroy();
			r.length = 0;
		}
		e.safeRemoveChild(t), e.alignOptions && c(n.alignedObjects, e), i(e, (t, n) => {
			(e[n]?.parentGroup === e || ["connector", "foreignObject"].indexOf(n) !== -1) && e[n]?.destroy?.(), delete e[n];
		});
	}
	dSetter(e, t, n) {
		D(e) && (typeof e[0] == "string" && (e = this.renderer.pathToSegments(e)), this.pathArray = e, e = e.reduce((e, t, n) => t?.join ? (n ? e + " " : "") + t.join(" ") : (t || "").toString(), "")), /(NaN| {2}|^$)/.test(e) && (e = "M 0 0"), this[t] !== e && (n.setAttribute(t, e), this[t] = e);
	}
	fillSetter(e, t, n) {
		typeof e == "string" ? n.setAttribute(t, e) : e && this.complexColor(e, t, n);
	}
	hrefSetter(e, t, n) {
		n.setAttributeNS("http://www.w3.org/1999/xlink", t, e);
	}
	getBBox(e, n) {
		let i = this, { element: a, renderer: s, styles: c, textStr: u } = i, { cache: d, cacheKeys: f } = s, p = a.namespaceURI === i.SVG_NS, m = l(n, i.rotation, 0), h = s.styledMode ? a && P.prototype.getStyle.call(a, "font-size") : c.fontSize, g = this.getBBoxCacheKey([
			s.rootFontSize,
			this.textWidth,
			this.alignValue,
			c.fontWeight,
			c.lineClamp,
			c.textOverflow,
			h,
			m
		]), v, y, b;
		if (g && !e && (v = d[g]), !v || v.polygon) {
			if (p || s.forExport) {
				try {
					b = this.fakeTS && function(e) {
						let n = a.querySelector(".highcharts-text-outline");
						n && t(n, { display: e });
					}, r(b) && b("none"), v = a.getBBox ? _({}, a.getBBox()) : {
						width: a.offsetWidth,
						height: a.offsetHeight,
						x: 0,
						y: 0
					}, r(b) && b("");
				} catch {}
				(!v || v.width < 0) && (v = {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				});
			} else v = i.htmlGetBBox();
			y = v.height, p && (v.height = y = {
				"11px,17": 14,
				"13px,20": 16
			}[`${h || ""},${Math.round(y)}`] || y), m && (v = this.getRotatedBox(v, m));
			let e = { bBox: v };
			o(this, "afterGetBBox", e), v = e.bBox;
		}
		if (g && (u === "" || v.height > 0)) {
			for (; f.length > 250;) delete d[f.shift()];
			d[g] || f.push(g), d[g] = v;
		}
		return v;
	}
	getBBoxCacheKey(e) {
		if (T(this.textStr)) {
			let t = "" + this.textStr;
			return t.indexOf("<") === -1 && (t = t.replace(/\d/g, "0")), [t, ...e].join(",");
		}
	}
	getRotatedBox(e, t) {
		let { x: n, y: r, width: i, height: a } = e, { alignValue: o, translateY: c, rotationOriginX: l = 0, rotationOriginY: u = 0 } = this, d = s(o), f = Number(this.element.getAttribute("y") || 0) - (c ? 0 : r), p = t * O, m = (t - 90) * O, h = Math.cos(p), g = Math.sin(p), _ = i * h, v = i * g, y = Math.cos(m), b = Math.sin(m), [[x, S], [C, w]] = [l, u].map((e) => [e - e * h, e * g]), T = n + d * (i - _) + x + w, E = r + f - d * v - S + C, D = T + f * y, k = D + _, A = k - a * y, j = A - _, M = E + f * b, N = M + v, P = N - a * b, F = P - v, I = Math.min(D, k, A, j), L = Math.min(M, N, P, F);
		return {
			x: I,
			y: L,
			width: Math.max(D, k, A, j) - I,
			height: Math.max(M, N, P, F) - L,
			polygon: [
				[D, M],
				[k, N],
				[A, P],
				[j, F]
			]
		};
	}
	getStyle(e) {
		return M.getComputedStyle(this.element || this, "").getPropertyValue(e);
	}
	hasClass(e) {
		return ("" + this.attr("class")).split(" ").indexOf(e) !== -1;
	}
	hide() {
		return this.attr({ visibility: "hidden" });
	}
	htmlGetBBox() {
		return {
			height: 0,
			width: 0,
			x: 0,
			y: 0
		};
	}
	constructor(e, t) {
		this.onEvents = {}, this.opacity = 1, this.SVG_NS = j, this.element = t === "div" || t === "body" ? E(t) : k.createElementNS(this.SVG_NS, t), this.renderer = e, this.styles = {}, o(this, "afterInit");
	}
	on(e, t) {
		let { onEvents: n } = this;
		return n[e] && n[e](), n[e] = g(this.element, e, t), this;
	}
	opacitySetter(e, t, n) {
		let r = Number(Number(e).toFixed(3));
		this.opacity = r, n.setAttribute(t, r);
	}
	reAlign() {
		this.alignOptions?.width && this.alignOptions.align !== "left" && (this.alignOptions.width = this.getBBox().width, this.placed = !1, this.align());
	}
	removeClass(e) {
		return this.attr("class", ("" + this.attr("class")).replace(n(e) ? RegExp(`(^| )${e}( |$)`) : e, " ").replace(/ +/g, " ").trim());
	}
	removeTextOutline() {
		let e = this.element.querySelector("tspan.highcharts-text-outline");
		e && this.safeRemoveChild(e);
	}
	safeRemoveChild(e) {
		let t = e.parentNode;
		t && t.removeChild(e);
	}
	setRadialReference(e) {
		let t = this.element.gradient && this.renderer.gradients[this.element.gradient] || void 0;
		return this.element.radialReference = e, t?.radAttr && t.animate(this.renderer.getRadialAttr(e, t.radAttr)), this;
	}
	shadow(e) {
		let { renderer: t } = this, n = a(this.parentGroup?.rotation === 90 ? {
			offsetX: -1,
			offsetY: -1
		} : {}, f(e) ? e : {}), r = t.shadowDefinition(n);
		return this.attr({ filter: e ? `url(${t.url}#${r})` : "none" });
	}
	show(e = !0) {
		return this.attr({ visibility: e ? "inherit" : "visible" });
	}
	"stroke-widthSetter"(e, t, n) {
		this[t] = e, n.setAttribute(t, e);
	}
	strokeWidth() {
		if (!this.renderer.styledMode) return this["stroke-width"] || 0;
		let e = this.getStyle("stroke-width"), t = 0, n;
		return /px$/.test(e) ? t = p(e) : e !== "" && (n = k.createElementNS(j, "rect"), w(n, {
			width: e,
			"stroke-width": 0
		}), this.element.parentNode.appendChild(n), t = n.getBBox().width, n.parentNode.removeChild(n)), t;
	}
	symbolAttr(e) {
		let t = this;
		P.symbolCustomAttribs.forEach(function(n) {
			t[n] = l(e[n], t[n]);
		}), t.attr({ d: t.renderer.symbols[t.symbolName](t.x, t.y, t.width, t.height, t) });
	}
	textSetter(e) {
		e !== this.textStr && (delete this.textPxLength, this.textStr = e, this.added && this.renderer.buildText(this), this.reAlign());
	}
	titleSetter(e) {
		let t = this.element, n = t.getElementsByTagName("title")[0] || k.createElementNS(this.SVG_NS, "title");
		t.insertBefore ? t.insertBefore(n, t.firstChild) : t.appendChild(n), n.textContent = b(l(e, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
	}
	toFront() {
		let e = this.element;
		return e.parentNode.appendChild(e), this;
	}
	translate(e, t) {
		return this.attr({
			translateX: e,
			translateY: t
		});
	}
	updateTransform(e = "transform") {
		let { element: t, foreignObject: n, matrix: r, rotation: i = 0, rotationOriginX: a, rotationOriginY: o, scaleX: s, scaleY: c, text: l, translateX: u = 0, translateY: d = 0 } = this, f = [`translate(${u},${d})`];
		T(r) && f.push("matrix(" + r.join(",") + ")"), i && f.push("rotate(" + i + " " + (a ?? t.getAttribute("x") ?? this.x ?? 0) + " " + (o ?? t.getAttribute("y") ?? this.y ?? 0) + ")"), (T(s) || T(c)) && f.push(`scale(${s ?? 1} ${c ?? 1})`), f.length && !(l || this).textPath && (n?.element || t).setAttribute(e, f.join(" "));
	}
	visibilitySetter(e, t, n) {
		e === "inherit" ? n.removeAttribute(t) : this[t] !== e && n.setAttribute(t, e), this[t] = e;
	}
	xGetter(e) {
		return this.element.nodeName === "circle" && (e === "x" ? e = "cx" : e === "y" && (e = "cy")), this._defaultGetter(e);
	}
	zIndexSetter(e, t) {
		let { element: n, parentGroup: r, renderer: i } = this, a = r?.element || i.box, o = a === i.box, s, c, l, u = !1, d, f = this.added, p;
		if (T(e) ? (n.setAttribute("data-z-index", e), e = +e, this[t] === e && (f = !1)) : T(this[t]) && n.removeAttribute("data-z-index"), this[t] = e, f) {
			for (e = this.zIndex, e && r && (r.handleZ = !0), s = a.childNodes, p = s.length - 1; p >= 0 && !u; p--) c = s[p], l = c.getAttribute("data-z-index"), d = !T(l), c !== n && (T(e) && e < 0 && d && !o && !p ? (a.insertBefore(n, s[p]), u = !0) : (T(e) && parseFloat(l || "") <= e || d && (!T(e) || e >= 0)) && (a.insertBefore(n, s[p + 1]), u = !0));
			u ||= (a.insertBefore(n, s[o ? 3 : 0]), !0);
		}
		return u;
	}
};
P.symbolCustomAttribs = [
	"anchorX",
	"anchorY",
	"clockwise",
	"end",
	"height",
	"innerR",
	"r",
	"start",
	"width",
	"x",
	"y"
], P.prototype.strokeSetter = P.prototype.fillSetter, P.prototype.yGetter = P.prototype.xGetter, P.prototype.matrixSetter = P.prototype.rotationOriginXSetter = P.prototype.rotationOriginYSetter = P.prototype.rotationSetter = P.prototype.scaleXSetter = P.prototype.scaleYSetter = P.prototype.translateXSetter = P.prototype.translateYSetter = P.prototype.verticalAlignSetter = function(e, t) {
	this[t] = e, this.doTransform = !0;
};
//#endregion
export { P as t };
