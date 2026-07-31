import { $ as e, A as t, B as n, E as r, G as i, H as a, I as o, T as s, U as c, V as l, X as u, Y as d, b as f, f as p, h as m, i as h, k as g, n as _, nt as v, ot as y, q as b, u as x, v as S, x as C, y as w, z as T } from "./AnimationUtilities-Bby2idBR.js";
//#region node_modules/highcharts/es-modules/Core/Renderer/SVG/SVGElement.js
var { animate: E, animObject: D, stop: O } = _, { deg2rad: k, doc: A, svg: j, SVG_NS: M, win: N, isFirefox: P } = y, F = class _ {
	_defaultGetter(e) {
		let t = d(this[e + "Value"], this[e], this.element ? this.element.getAttribute(e) : null, 0);
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
	align(e, n, r, i = !0) {
		let o = this.renderer, s = o.alignedObjects, c = !!e;
		e ? (this.alignOptions = e, this.alignByTranslate = n, this.alignTo = r) : (e = this.alignOptions || {}, n = this.alignByTranslate, r = this.alignTo);
		let l = !r || a(r) ? r || "renderer" : void 0;
		l && (c && u(s, this), r = void 0);
		let f = d(r, o[l], o), p = (f.x || 0) + (e.x || 0) + ((f.width || 0) - (e.width || 0)) * t(e.align), m = (f.y || 0) + (e.y || 0) + ((f.height || 0) - (e.height || 0)) * t(e.verticalAlign), h = {};
		return e.align && (h["text-align"] = e.align), h[n ? "translateX" : "x"] = Math.round(p), h[n ? "translateY" : "y"] = Math.round(m), i && (this[this.placed ? "animate" : "attr"](h), this.placed = !0), this.alignAttr = h, this;
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
		let r = D(d(t, this.renderer.globalAnimation, !0)), a = r.defer;
		return A.hidden && (r.duration = 0), r.duration === 0 ? (this.attr(e, void 0, n || r.complete), i(e, function(e, t) {
			r.step && r.step.call(this, e, {
				prop: t,
				pos: 1,
				elem: this
			});
		}, this)) : (n && (r.complete = n), v(() => {
			this.element && E(this, e, r);
		}, a)), this;
	}
	applyTextOutline(e) {
		let t = this.element;
		e.indexOf("contrast") !== -1 && (e = e.replace(/contrast/g, this.renderer.getContrast(t.style.fill)));
		let n = e.indexOf(" "), r = e.substring(n + 1), i = e.substring(0, n);
		if (i && i !== "none" && y.svg) {
			this.fakeTS = !0, i = i.replace(/(^[\d\.]+)(.*?)$/g, function(e, t, n) {
				return 2 * Number(t) + n;
			}), this.removeTextOutline();
			let e = A.createElementNS(M, "tspan");
			m(e, {
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
			let o = A.createElementNS(M, "tspan");
			o.textContent = "​", m(o, {
				x: Number(t.getAttribute("x")),
				dy: -a
			}), e.appendChild(o), n.insertBefore(e, n.firstChild);
		}
	}
	attr(e, t, n, r) {
		let { element: a } = this, o = _.symbolCustomAttribs, s, c, l = this, u, d;
		return typeof e == "string" && t !== void 0 && (s = e, e = {}, e[s] = t), typeof e == "string" ? l = (this[e + "Getter"] || this._defaultGetter).call(this, e, a) : (i(e, function(t, n) {
			u = !1, r || O(this, n), this.symbolName && o.indexOf(n) !== -1 && (c ||= (this.symbolAttr(e), !0), u = !0), this.rotation && (n === "x" || n === "y") && (this.doTransform = !0), u || (d = this[n + "Setter"] || this._defaultSetter, d.call(this, t, n, a));
		}, this), this.afterSetters()), n && n.call(this), l;
	}
	clip(e) {
		if (e && !e.clipPath) {
			let t = x() + "-", n = this.renderer.createElement("clipPath").attr({ id: t }).add(this.renderer.defs);
			r(e, {
				clipPath: n,
				id: t,
				count: 0
			}), e.add(n);
		}
		return this.attr("clip-path", e ? `url(${this.renderer.url}#${e.id})` : "none");
	}
	crisp(e, t) {
		t = Math.round(t || e.strokeWidth || 0);
		let n = e.x || this.x || 0, i = e.y || this.y || 0, a = (e.width || this.width || 0) + n, o = (e.height || this.height || 0) + i, s = w(n, t), c = w(i, t), l = w(a, t), u = w(o, t);
		return r(e, {
			x: s,
			y: c,
			width: l - s,
			height: u - c
		}), C(e.strokeWidth) && (e.strokeWidth = t), e;
	}
	complexColor(e, t, n) {
		let r = this.renderer, a, s, l, u, d, f, p, m, _, v = [], y;
		g(this.renderer, "complexColor", { args: arguments }, () => {
			if (e.radialGradient ? s = "radialGradient" : e.linearGradient && (s = "linearGradient"), s) {
				if (l = e[s], d = r.gradients, f = e.stops, m = n.radialReference, o(l) && (e[s] = l = {
					x1: l[0],
					y1: l[1],
					x2: l[2],
					y2: l[3],
					gradientUnits: "userSpaceOnUse"
				}), s === "radialGradient" && m && !C(l.gradientUnits) && (u = l, l = c(l, r.getRadialAttr(m, u), { gradientUnits: "userSpaceOnUse" })), i(l, function(e, t) {
					t !== "id" && v.push(t, e);
				}), i(f, function(e) {
					v.push(e);
				}), v = v.join(","), d[v]) _ = d[v].attr("id");
				else {
					l.id = _ = x();
					let e = d[v] = r.createElement(s).attr(l).add(r.defs);
					e.radAttr = u, e.stops = [], f.forEach(([t, n]) => {
						n.indexOf("rgba") === 0 ? (a = h.parse(n), n = a.get("rgb"), p = a.get("a")) : p = 1;
						let i = r.createElement("stop").attr({
							offset: t,
							"stop-color": n,
							"stop-opacity": p
						}).add(e);
						e.stops.push(i);
					});
				}
				y = "url(" + r.url + "#" + _ + ")", n.setAttribute(t, y), n.gradient = v, e.toString = function() {
					return y;
				};
			}
		});
	}
	css(e) {
		let t = this.styles, a = {}, o = this.element, s = this.renderer, l, u = !t;
		if (t && i(e, function(e, n) {
			t && t[n] !== e && (a[n] = e, u = !0);
		}), u) {
			t && (e = r(t, a)), e.width === null || e.width === "auto" ? delete this.textWidth : o.nodeName.toLowerCase() === "text" && e.width && (l = this.textWidth = b(e.width)), r(this.styles, e), l && !j && s.forExport && delete e.width;
			let i = P && e.fontSize || null;
			i && (n(i) || /^\d+$/.test(i)) && (e.fontSize += "px");
			let u = c(e);
			o.namespaceURI === this.SVG_NS && ([
				"textOutline",
				"textOverflow",
				"whiteSpace",
				"width"
			].forEach((e) => u && delete u[e]), u.color && (u.fill = u.color, delete u.color)), f(o, u);
		}
		return this.added && (this.element.nodeName === "text" && s.buildText(this), e.textOutline && this.applyTextOutline(e.textOutline)), this;
	}
	dashstyleSetter(e) {
		let t, n = this["stroke-width"];
		if (n === "inherit" && (n = 1), e) {
			e = e.toLowerCase();
			let r = e.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
			for (t = r.length; t--;) r[t] = "" + b(r[t]) * d(n, NaN);
			e = r.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", e);
		}
	}
	destroy() {
		let e = this, { element: t = {}, renderer: n, stops: r } = e, a = t.ownerSVGElement;
		if (t.onclick = t.onmouseout = t.onmouseover = t.onmousemove = t.point = null, O(e), e.clipPath && a) {
			let t = e.clipPath;
			[].forEach.call(a.querySelectorAll("[clip-path],[CLIP-PATH]"), function(e) {
				e.getAttribute("clip-path").indexOf(t.element.id) > -1 && e.removeAttribute("clip-path");
			}), e.clipPath = t.destroy();
		}
		if (r) {
			for (let e of r) e.destroy();
			r.length = 0;
		}
		e.safeRemoveChild(t), e.alignOptions && s(n.alignedObjects, e), i(e, (t, n) => {
			(e[n]?.parentGroup === e || ["connector", "foreignObject"].indexOf(n) !== -1) && e[n]?.destroy?.(), delete e[n];
		});
	}
	dSetter(e, t, n) {
		o(e) && (typeof e[0] == "string" && (e = this.renderer.pathToSegments(e)), this.pathArray = e, e = e.reduce((e, t, n) => t?.join ? (n ? e + " " : "") + t.join(" ") : (t || "").toString(), "")), /(NaN| {2}|^$)/.test(e) && (e = "M 0 0"), this[t] !== e && (n.setAttribute(t, e), this[t] = e);
	}
	fillSetter(e, t, n) {
		typeof e == "string" ? n.setAttribute(t, e) : e && this.complexColor(e, t, n);
	}
	hrefSetter(e, t, n) {
		n.setAttributeNS("http://www.w3.org/1999/xlink", t, e);
	}
	getBBox(e, t) {
		let n = this, { element: i, renderer: a, styles: o, textStr: s } = n, { cache: c, cacheKeys: l } = a, u = i.namespaceURI === n.SVG_NS, p = d(t, n.rotation, 0), m = a.styledMode ? i && _.prototype.getStyle.call(i, "font-size") : o.fontSize, h = this.getBBoxCacheKey([
			a.rootFontSize,
			this.textWidth,
			this.alignValue,
			o.fontWeight,
			o.lineClamp,
			o.textOverflow,
			m,
			p
		]), v, y, b;
		if (h && !e && (v = c[h]), !v || v.polygon) {
			if (u || a.forExport) {
				try {
					b = this.fakeTS && function(e) {
						let t = i.querySelector(".highcharts-text-outline");
						t && f(t, { display: e });
					}, T(b) && b("none"), v = i.getBBox ? r({}, i.getBBox()) : {
						width: i.offsetWidth,
						height: i.offsetHeight,
						x: 0,
						y: 0
					}, T(b) && b("");
				} catch {}
				(!v || v.width < 0) && (v = {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				});
			} else v = n.htmlGetBBox();
			y = v.height, u && (v.height = y = {
				"11px,17": 14,
				"13px,20": 16
			}[`${m || ""},${Math.round(y)}`] || y), p && (v = this.getRotatedBox(v, p));
			let e = { bBox: v };
			g(this, "afterGetBBox", e), v = e.bBox;
		}
		if (h && (s === "" || v.height > 0)) {
			for (; l.length > 250;) delete c[l.shift()];
			c[h] || l.push(h), c[h] = v;
		}
		return v;
	}
	getBBoxCacheKey(e) {
		if (C(this.textStr)) {
			let t = "" + this.textStr;
			return t.indexOf("<") === -1 && (t = t.replace(/\d/g, "0")), [t, ...e].join(",");
		}
	}
	getRotatedBox(e, n) {
		let { x: r, y: i, width: a, height: o } = e, { alignValue: s, translateY: c, rotationOriginX: l = 0, rotationOriginY: u = 0 } = this, d = t(s), f = Number(this.element.getAttribute("y") || 0) - (c ? 0 : i), p = n * k, m = (n - 90) * k, h = Math.cos(p), g = Math.sin(p), _ = a * h, v = a * g, y = Math.cos(m), b = Math.sin(m), [[x, S], [C, w]] = [l, u].map((e) => [e - e * h, e * g]), T = r + d * (a - _) + x + w, E = i + f - d * v - S + C, D = T + f * y, O = D + _, A = O - o * y, j = A - _, M = E + f * b, N = M + v, P = N - o * b, F = P - v, I = Math.min(D, O, A, j), L = Math.min(M, N, P, F);
		return {
			x: I,
			y: L,
			width: Math.max(D, O, A, j) - I,
			height: Math.max(M, N, P, F) - L,
			polygon: [
				[D, M],
				[O, N],
				[A, P],
				[j, F]
			]
		};
	}
	getStyle(e) {
		return N.getComputedStyle(this.element || this, "").getPropertyValue(e);
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
		this.onEvents = {}, this.opacity = 1, this.SVG_NS = M, this.element = t === "div" || t === "body" ? S(t) : A.createElementNS(this.SVG_NS, t), this.renderer = e, this.styles = {}, g(this, "afterInit");
	}
	on(e, t) {
		let { onEvents: n } = this;
		return n[e] && n[e](), n[e] = p(this.element, e, t), this;
	}
	opacitySetter(e, t, n) {
		let r = Number(Number(e).toFixed(3));
		this.opacity = r, n.setAttribute(t, r);
	}
	reAlign() {
		this.alignOptions?.width && this.alignOptions.align !== "left" && (this.alignOptions.width = this.getBBox().width, this.placed = !1, this.align());
	}
	removeClass(e) {
		return this.attr("class", ("" + this.attr("class")).replace(a(e) ? RegExp(`(^| )${e}( |$)`) : e, " ").replace(/ +/g, " ").trim());
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
		let { renderer: t } = this, n = c(this.parentGroup?.rotation === 90 ? {
			offsetX: -1,
			offsetY: -1
		} : {}, l(e) ? e : {}), r = t.shadowDefinition(n);
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
		return /px$/.test(e) ? t = b(e) : e !== "" && (n = A.createElementNS(M, "rect"), m(n, {
			width: e,
			"stroke-width": 0
		}), this.element.parentNode.appendChild(n), t = n.getBBox().width, n.parentNode.removeChild(n)), t;
	}
	symbolAttr(e) {
		let t = this;
		_.symbolCustomAttribs.forEach(function(n) {
			t[n] = d(e[n], t[n]);
		}), t.attr({ d: t.renderer.symbols[t.symbolName](t.x, t.y, t.width, t.height, t) });
	}
	textSetter(e) {
		e !== this.textStr && (delete this.textPxLength, this.textStr = e, this.added && this.renderer.buildText(this), this.reAlign());
	}
	titleSetter(t) {
		let n = this.element, r = n.getElementsByTagName("title")[0] || A.createElementNS(this.SVG_NS, "title");
		n.insertBefore ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.textContent = e(d(t, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
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
		C(r) && f.push("matrix(" + r.join(",") + ")"), i && f.push("rotate(" + i + " " + (a ?? t.getAttribute("x") ?? this.x ?? 0) + " " + (o ?? t.getAttribute("y") ?? this.y ?? 0) + ")"), (C(s) || C(c)) && f.push(`scale(${s ?? 1} ${c ?? 1})`), f.length && !(l || this).textPath && (n?.element || t).setAttribute(e, f.join(" "));
	}
	visibilitySetter(e, t, n) {
		e === "inherit" ? n.removeAttribute(t) : this[t] !== e && n.setAttribute(t, e), this[t] = e;
	}
	xGetter(e) {
		return this.element.nodeName === "circle" && (e === "x" ? e = "cx" : e === "y" && (e = "cy")), this._defaultGetter(e);
	}
	zIndexSetter(e, t) {
		let { element: n, parentGroup: r, renderer: i } = this, a = r?.element || i.box, o = a === i.box, s, c, l, u = !1, d, f = this.added, p;
		if (C(e) ? (n.setAttribute("data-z-index", e), e = +e, this[t] === e && (f = !1)) : C(this[t]) && n.removeAttribute("data-z-index"), this[t] = e, f) {
			for (e = this.zIndex, e && r && (r.handleZ = !0), s = a.childNodes, p = s.length - 1; p >= 0 && !u; p--) c = s[p], l = c.getAttribute("data-z-index"), d = !C(l), c !== n && (C(e) && e < 0 && d && !o && !p ? (a.insertBefore(n, s[p]), u = !0) : (C(e) && parseFloat(l || "") <= e || d && (!C(e) || e >= 0)) && (a.insertBefore(n, s[p + 1]), u = !0));
			u ||= (a.insertBefore(n, s[o ? 3 : 0]), !0);
		}
		return u;
	}
};
F.symbolCustomAttribs = [
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
], F.prototype.strokeSetter = F.prototype.fillSetter, F.prototype.yGetter = F.prototype.xGetter, F.prototype.matrixSetter = F.prototype.rotationOriginXSetter = F.prototype.rotationOriginYSetter = F.prototype.rotationSetter = F.prototype.scaleXSetter = F.prototype.scaleYSetter = F.prototype.translateXSetter = F.prototype.translateYSetter = F.prototype.verticalAlignSetter = function(e, t) {
	this[t] = e, this.doTransform = !0;
};
//#endregion
export { F as t };

//# sourceMappingURL=SVGElement-BmvC_qu3.js.map