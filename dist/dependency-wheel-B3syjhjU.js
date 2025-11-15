import { g as ge } from "./index-ZZQ8wTA9.js";
function ye(T, S) {
  for (var P = 0; P < S.length; P++) {
    const M = S[P];
    if (typeof M != "string" && !Array.isArray(M)) {
      for (const L in M)
        if (L !== "default" && !(L in T)) {
          const k = Object.getOwnPropertyDescriptor(M, L);
          k && Object.defineProperty(T, L, k.get ? k : {
            enumerable: !0,
            get: () => M[L]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(T, Symbol.toStringTag, { value: "Module" }));
}
var C = { exports: {} }, xe = C.exports, R;
function me() {
  return R || (R = 1, (function(T, S) {
    /**
    * Highcharts JS v12.4.0 (2025-09-04)
    * @module highcharts/modules/dependency-wheel
    * @requires highcharts
    * @requires highcharts/modules/sankey
    *
    * Dependency wheel module
    *
    * (c) 2010-2025 Torstein Honsi
    *
    * License: www.highcharts.com/license
    */
    (function(P, M) {
      T.exports = M(P._Highcharts, P._Highcharts.SeriesRegistry, P._Highcharts.SVGElement);
    })(typeof window > "u" ? xe : window, (P, M, L) => (() => {
      var k, I = { 28: (n) => {
        n.exports = L;
      }, 512: (n) => {
        n.exports = M;
      }, 944: (n) => {
        n.exports = P;
      } }, N = {};
      function g(n) {
        var t = N[n];
        if (t !== void 0) return t.exports;
        var a = N[n] = { exports: {} };
        return I[n](a, a.exports, g), a.exports;
      }
      g.n = (n) => {
        var t = n && n.__esModule ? () => n.default : () => n;
        return g.d(t, { a: t }), t;
      }, g.d = (n, t) => {
        for (var a in t) g.o(t, a) && !g.o(n, a) && Object.defineProperty(n, a, { enumerable: !0, get: t[a] });
      }, g.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t);
      var F = {};
      g.d(F, { default: () => ce });
      var z = g(944), v = g.n(z), E = g(512), O = g.n(E);
      let { sankey: { prototype: { pointClass: X } } } = O().seriesTypes, { pInt: $, wrap: q } = v(), V = class extends X {
        getDataLabelPath(n) {
          let t = this, a = t.series.chart.renderer, e = t.shapeArgs, r = t.angle < 0 || t.angle > Math.PI, s = e.start || 0, i = e.end || 0;
          return t.dataLabelPath ? (t.dataLabelPath = t.dataLabelPath.destroy(), delete t.dataLabelPath) : q(n, "destroy", function(d) {
            return t.dataLabelPath && (t.dataLabelPath = t.dataLabelPath.destroy()), d.call(this);
          }), t.dataLabelPath = a.arc({ open: !0, longArc: Math.abs(Math.abs(s) - Math.abs(i)) < Math.PI ? 0 : 1 }).attr({ x: e.x, y: e.y, r: (e.r || 0) + $(n.options?.distance || 0), start: r ? s : i, end: r ? i : s, clockwise: +r }).add(a.defs), t.dataLabelPath;
        }
        isValid() {
          return !0;
        }
      }, { defined: G, getAlignFactor: K, relativeLength: _ } = v();
      (function(n) {
        n.compose = function(a, e) {
          return a.sankeyColumn = new t(a, e), a;
        };
        class t {
          constructor(e, r) {
            this.points = e, this.series = r;
          }
          getTranslationFactor(e) {
            let r = this.points, s = r.slice(), i = e.chart, d = e.options.minLinkWidth || 0, o, p = 0, h, c = (i.plotSizeY || 0) - (e.options.borderWidth || 0) - (r.length - 1) * e.nodePadding;
            for (; r.length; ) {
              for (p = c / r.sankeyColumn.sum(), o = !1, h = r.length; h--; ) r[h].getSum() * p < d && (r.splice(h, 1), c = Math.max(0, c - d), o = !0);
              if (!o) break;
            }
            for (let l of (r.length = 0, s)) r.push(l);
            return p;
          }
          top(e) {
            let r = this.series, s = r.nodePadding, i = this.points.reduce((d, o) => (d > 0 && (d += s), d += Math.max(o.getSum() * e, r.options.minLinkWidth || 0)), 0);
            return K(r.options.nodeAlignment || "center") * ((r.chart.plotSizeY || 0) - i);
          }
          left(e) {
            let r = this.series, s = r.chart, i = r.options.equalNodes, d = s.inverted ? s.plotHeight : s.plotWidth, o = r.nodePadding, p = this.points.reduce((h, c) => (h > 0 && (h += o), h += i ? d / c.series.nodes.length - o : Math.max(c.getSum() * e, r.options.minLinkWidth || 0)), 0);
            return ((s.plotSizeX || 0) - Math.round(p)) / 2;
          }
          sum() {
            return this.points.reduce((e, r) => e + r.getSum(), 0);
          }
          offset(e, r) {
            let s = this.points, i = this.series, d = i.nodePadding, o = 0, p;
            if (i.is("organization") && e.hangsFrom) return { absoluteTop: e.hangsFrom.nodeY };
            for (let h = 0; h < s.length; h++) {
              let c = s[h].getSum(), l = Math.max(c * r, i.options.minLinkWidth || 0), y = e.options[i.chart.inverted ? "offsetHorizontal" : "offsetVertical"], f = e.options.offset || 0;
              if (p = c ? l + d : 0, s[h] === e) return { relativeTop: o + (G(y) ? _(y, l) : _(f, p)) };
              o += p;
            }
          }
        }
        n.SankeyColumnAdditions = t;
      })(k || (k = {}));
      let J = k;
      var Q = g(28), U = g.n(Q);
      let { deg2rad: Z } = v(), { addEvent: W, merge: ee, uniqueKey: te, defined: j, extend: re } = v();
      function ae(n, t) {
        t = ee(!0, { enabled: !0, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, t);
        let a = this.renderer.url, e = this.text || this, r = e.textPath, { attributes: s, enabled: i } = t;
        if (n = n || r && r.path, r && r.undo(), n && i) {
          let d = W(e, "afterModifyTree", (o) => {
            if (n && i) {
              let p = n.attr("id");
              p || n.attr("id", p = te());
              let h = { x: 0, y: 0 };
              j(s.dx) && (h.dx = s.dx, delete s.dx), j(s.dy) && (h.dy = s.dy, delete s.dy), e.attr(h), this.attr({ transform: "" }), this.box && (this.box = this.box.destroy());
              let c = o.nodes.slice(0);
              o.nodes.length = 0, o.nodes[0] = { tagName: "textPath", attributes: re(s, { "text-anchor": s.textAnchor, href: `${a}#${p}` }), children: c };
            }
          });
          e.textPath = { path: n, undo: d };
        } else e.attr({ dx: 0, dy: 0 }), delete e.textPath;
        return this.added && (e.textCache = "", this.renderer.buildText(e)), this;
      }
      function ne(n) {
        let t = n.bBox, a = this.element?.querySelector("textPath");
        if (a) {
          let e = [], { b: r, h: s } = this.renderer.fontMetrics(this.element), i = s - r, d = RegExp('(<tspan>|<tspan(?!\\sclass="highcharts-br")[^>]*>|<\\/tspan>)', "g"), o = a.innerHTML.replace(d, "").split(/<tspan class="highcharts-br"[^>]*>/), p = o.length, h = (c, l) => {
            let { x: y, y: f } = l, m = (a.getRotationOfChar(c) - 90) * Z, b = Math.cos(m), x = Math.sin(m);
            return [[y - i * b, f - i * x], [y + r * b, f + r * x]];
          };
          for (let c = 0, l = 0; l < p; l++) {
            let y = o[l].length;
            for (let f = 0; f < y; f += 5) try {
              let m = c + f + l, [b, x] = h(m, a.getStartPositionOfChar(m));
              f === 0 ? (e.push(x), e.push(b)) : (l === 0 && e.unshift(x), l === p - 1 && e.push(b));
            } catch {
              break;
            }
            c += y - 1;
            try {
              let f = c + l, m = a.getEndPositionOfChar(f), [b, x] = h(f, m);
              e.unshift(x), e.unshift(b);
            } catch {
              break;
            }
          }
          e.length && e.push(e[0].slice()), t.polygon = e;
        }
        return t;
      }
      function se(n) {
        let t = n.labelOptions, a = n.point, e = t[a.formatPrefix + "TextPath"] || t.textPath;
        e && !t.useHTML && (this.setTextPath(a.getDataLabelPath?.(this) || a.graphic, e), a.dataLabelPath && !e.enabled && (a.dataLabelPath = a.dataLabelPath.destroy()));
      }
      let { animObject: oe } = v(), { deg2rad: ie } = v(), { pie: de, sankey: H } = O().seriesTypes, { extend: le, merge: he, relativeLength: pe } = v();
      ({ compose: function(n) {
        W(n, "afterGetBBox", ne), W(n, "beforeAddingDataLabel", se);
        let t = n.prototype;
        t.setTextPath || (t.setTextPath = ae);
      } }).compose(U());
      class A extends H {
        animate(t) {
          if (!t) {
            let a = oe(this.options.animation).duration / 2 / this.nodes.length, e = 0;
            for (let r of this.nodes) {
              let s = r.graphic;
              s && (s.attr({ opacity: 0 }), setTimeout(() => {
                r.graphic && r.graphic.animate({ opacity: 1 }, { duration: a });
              }, a * e++));
            }
            for (let r of this.points) {
              let s = r.graphic;
              !r.isNode && s && s.attr({ opacity: 0 }).animate({ opacity: 1 }, this.options.animation);
            }
          }
        }
        createNode(t) {
          let a = super.createNode(t);
          return a.getSum = () => a.linksFrom.concat(a.linksTo).reduce((e, r) => e + r.weight, 0), a.offset = (e) => {
            let r = (o) => o.fromNode === a ? o.toNode : o.fromNode, s = 0, i = a.linksFrom.concat(a.linksTo), d;
            i.sort((o, p) => r(o).index - r(p).index);
            for (let o = 0; o < i.length; o++) if (r(i[o]).index > a.index) {
              i = i.slice(0, o).reverse().concat(i.slice(o).reverse()), d = !0;
              break;
            }
            d || i.reverse();
            for (let o = 0; o < i.length; o++) {
              if (i[o] === e) return s;
              s += i[o].weight;
            }
          }, a;
        }
        createNodeColumns() {
          let t = [J.compose([], this)];
          for (let a of this.nodes) a.column = 0, t[0].push(a);
          return t;
        }
        getNodePadding() {
          return this.options.nodePadding / Math.PI;
        }
        translate() {
          let t = this.options, a = 2 * Math.PI / (this.chart.plotHeight + this.getNodePadding()), e = this.getCenter(), r = (t.startAngle - 90) * ie, s = t.borderRadius, i = typeof s == "object" ? s.radius : s;
          for (let d of (super.translate(), this.nodeColumns[0])) if (d.sum) {
            let o = d.shapeArgs, p = e[0], h = e[1], c = e[2] / 2, l = c - pe((t.nodeWidth === "auto" ? 20 : t.nodeWidth) || 0, c), y = r + a * (o.y || 0), f = r + a * ((o.y || 0) + (o.height || 0));
            for (let m of (d.angle = y + (f - y) / 2, d.shapeType = "arc", d.shapeArgs = { x: p, y: h, r: c, innerR: l, start: y, end: f, borderRadius: i }, d.dlBox = { x: p + Math.cos((y + f) / 2) * (c + l) / 2, y: h + Math.sin((y + f) / 2) * (c + l) / 2, width: 1, height: 1 }, d.linksFrom)) if (m.linkBase) {
              let b, x, u = m.linkBase.map((ue, fe) => {
                let w = a * ue, Y = Math.cos(r + w) * (l + 1), B = Math.sin(r + w) * (l + 1);
                return b = t.curveFactor || 0, (x = Math.abs(m.linkBase[3 - fe] * a - w)) > Math.PI && (x = 2 * Math.PI - x), (x *= l) < l && (b *= x / l), { x: p + Y, y: h + B, cpX: p + (1 - b) * Y, cpY: h + (1 - b) * B };
              });
              m.shapeArgs = { d: [["M", u[0].x, u[0].y], ["A", l, l, 0, 0, 1, u[1].x, u[1].y], ["C", u[1].cpX, u[1].cpY, u[2].cpX, u[2].cpY, u[2].x, u[2].y], ["A", l, l, 0, 0, 1, u[3].x, u[3].y], ["C", u[3].cpX, u[3].cpY, u[0].cpX, u[0].cpY, u[0].x, u[0].y]] };
            }
          }
        }
      }
      A.defaultOptions = he(H.defaultOptions, { center: [null, null], curveFactor: 0.6, startAngle: 0, dataLabels: { textPath: { enabled: !1, attributes: { dy: 5 } } } }), le(A.prototype, { orderNodes: !1, getCenter: de.prototype.getCenter }), A.prototype.pointClass = V, O().registerSeriesType("dependencywheel", A);
      let ce = v();
      return F.default;
    })());
  })(C)), C.exports;
}
var D = me();
const be = /* @__PURE__ */ ge(D), Me = /* @__PURE__ */ ye({
  __proto__: null,
  default: be
}, [D]);
export {
  Me as d
};
