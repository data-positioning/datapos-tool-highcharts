import { g as ot } from "./index-B87IBrDY.js";
function it(W, R) {
  for (var k = 0; k < R.length; k++) {
    const v = R[k];
    if (typeof v != "string" && !Array.isArray(v)) {
      for (const T in v)
        if (T !== "default" && !(T in W)) {
          const z = Object.getOwnPropertyDescriptor(v, T);
          z && Object.defineProperty(W, T, z.get ? z : {
            enumerable: !0,
            get: () => v[T]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(W, Symbol.toStringTag, { value: "Module" }));
}
var I = { exports: {} }, st = I.exports, ke;
function nt() {
  return ke || (ke = 1, (function(W, R) {
    /**
    * Highcharts JS v12.4.0 (2025-09-04)
    * @module highcharts/modules/sankey
    * @requires highcharts
    *
    * Sankey diagram module
    *
    * (c) 2010-2025 Torstein Honsi
    *
    * License: www.highcharts.com/license
    */
    (function(k, v) {
      W.exports = v(k._Highcharts, k._Highcharts.SeriesRegistry, k._Highcharts.Point, k._Highcharts.Color, k._Highcharts.SVGElement);
    })(typeof window > "u" ? st : window, (k, v, T, z, Ne) => (() => {
      var $, q, Ce = { 28: (d) => {
        d.exports = Ne;
      }, 260: (d) => {
        d.exports = T;
      }, 512: (d) => {
        d.exports = v;
      }, 620: (d) => {
        d.exports = z;
      }, 944: (d) => {
        d.exports = k;
      } }, te = {};
      function x(d) {
        var e = te[d];
        if (e !== void 0) return e.exports;
        var i = te[d] = { exports: {} };
        return Ce[d](i, i.exports, x), i.exports;
      }
      x.n = (d) => {
        var e = d && d.__esModule ? () => d.default : () => d;
        return x.d(e, { a: e }), e;
      }, x.d = (d, e) => {
        for (var i in e) x.o(e, i) && !x.o(d, i) && Object.defineProperty(d, i, { enumerable: !0, get: e[i] });
      }, x.o = (d, e) => Object.prototype.hasOwnProperty.call(d, e);
      var oe = {};
      x.d(oe, { default: () => Ue });
      var Pe = x(944), N = x.n(Pe), Le = x(512), H = x.n(Le);
      let { series: { prototype: V, prototype: { pointClass: { prototype: D } } } } = H(), { defined: ie, extend: Se, find: Te, merge: we, pick: G } = N();
      (function(d) {
        function e() {
          return this.data = [].concat(this.points || [], this.nodes), V.destroy.apply(this, arguments);
        }
        function i() {
          this.nodes && (this.nodes.forEach((n) => {
            n.destroy();
          }), this.nodes.length = 0), V.setData.apply(this, arguments);
        }
        function t(n) {
          let l = arguments, o = this.isNode ? this.linksTo.concat(this.linksFrom) : [this.fromNode, this.toNode];
          n !== "select" && o.forEach((r) => {
            r && r.series && (D.setState.apply(r, l), !r.isNode && (r.fromNode.graphic && D.setState.apply(r.fromNode, l), r.toNode && r.toNode.graphic && D.setState.apply(r.toNode, l)));
          }), D.setState.apply(this, l);
        }
        function s(n, l, o, r) {
          let u = this.series.options.nodes, a = this.series.options.data, p = a?.length || 0, h = a?.[this.index];
          if (D.update.call(this, n, !this.isNode && l, o, r), this.isNode) {
            let y = (u || []).reduce((f, m, g) => this.id === m.id ? g : f, -1), c = we(u && u[y] || {}, a?.[this.index] || {});
            a && (h ? a[this.index] = h : a.length = p), u ? y >= 0 ? u[y] = c : u.push(c) : this.series.options.nodes = [c], G(l, !0) && this.series.chart.redraw(o);
          }
        }
        d.compose = function(n, l) {
          let o = n.prototype, r = l.prototype;
          return o.setNodeState = t, o.setState = t, o.update = s, r.destroy = e, r.setData = i, l;
        }, d.createNode = function(n) {
          let l = this.pointClass, o = (a, p) => Te(a, (h) => h.id === p), r = o(this.nodes, n), u;
          if (!r) {
            u = this.options.nodes && o(this.options.nodes, n);
            let a = new l(this, Se({ className: "highcharts-node", isNode: !0, id: n, y: 1 }, u));
            a.linksTo = [], a.linksFrom = [], a.getSum = function() {
              let p = 0, h = 0;
              return a.linksTo.forEach((y) => {
                p += y.weight || 0;
              }), a.linksFrom.forEach((y) => {
                h += y.weight || 0;
              }), Math.max(p, h);
            }, a.offset = function(p, h) {
              let y = 0;
              for (let c = 0; c < a[h].length; c++) {
                if (a[h][c] === p) return y;
                y += a[h][c].weight;
              }
            }, a.hasShape = function() {
              let p = 0;
              return a.linksTo.forEach((h) => {
                h.outgoing && p++;
              }), !a.linksTo.length || p !== a.linksTo.length;
            }, a.index = this.nodes.push(a) - 1, r = a;
          }
          return r.formatPrefix = "node", r.name = r.name || r.options.id || "", r.mass = G(r.options.mass, r.options.marker && r.options.marker.radius, this.options.marker && this.options.marker.radius, 4), r;
        }, d.destroy = e, d.generatePoints = function() {
          let n = this.chart, l = {};
          V.generatePoints.call(this), this.nodes || (this.nodes = []), this.colorCounter = 0, this.nodes.forEach((o) => {
            o.linksFrom.length = 0, o.linksTo.length = 0, o.level = o.options.level;
          }), this.points.forEach((o) => {
            ie(o.from) && (l[o.from] || (l[o.from] = this.createNode(o.from)), l[o.from].linksFrom.push(o), o.fromNode = l[o.from], n.styledMode ? o.colorIndex = G(o.options.colorIndex, l[o.from].colorIndex) : o.color = o.options.color || l[o.from].color), ie(o.to) && (l[o.to] || (l[o.to] = this.createNode(o.to)), l[o.to].linksTo.push(o), o.toNode = l[o.to]), o.name = o.name || o.id;
          }, this), this.nodeLookup = l;
        }, d.setNodeState = t, d.updateNode = s;
      })($ || ($ = {}));
      let Z = $;
      var Oe = x(260), se = x.n(Oe);
      let { column: Me } = H().seriesTypes, { defined: ne } = N();
      class re extends Me.prototype.pointClass {
        applyOptions(e, i) {
          return se().prototype.applyOptions.call(this, e, i), ne(this.options.level) && (this.options.column = this.column = this.options.level), this;
        }
        getClassName() {
          return (this.isNode ? "highcharts-node " : "highcharts-link ") + se().prototype.getClassName.call(this);
        }
        getFromNode() {
          let e = -1, i;
          for (let t = 0; t < this.linksTo.length; t++) {
            let s = this.linksTo[t];
            s.fromNode.column > e && s.fromNode !== this && (e = (i = s.fromNode).column);
          }
          return { fromNode: i, fromColumn: e };
        }
        setNodeColumn() {
          ne(this.options.column) || (this.linksTo.length === 0 ? this.column = 0 : this.column = this.getFromNode().fromColumn + 1);
        }
        isValid() {
          return this.isNode || typeof this.weight == "number";
        }
      }
      let { defined: Fe, getAlignFactor: We, relativeLength: le } = N();
      (function(d) {
        d.compose = function(i, t) {
          return i.sankeyColumn = new e(i, t), i;
        };
        class e {
          constructor(t, s) {
            this.points = t, this.series = s;
          }
          getTranslationFactor(t) {
            let s = this.points, n = s.slice(), l = t.chart, o = t.options.minLinkWidth || 0, r, u = 0, a, p = (l.plotSizeY || 0) - (t.options.borderWidth || 0) - (s.length - 1) * t.nodePadding;
            for (; s.length; ) {
              for (u = p / s.sankeyColumn.sum(), r = !1, a = s.length; a--; ) s[a].getSum() * u < o && (s.splice(a, 1), p = Math.max(0, p - o), r = !0);
              if (!r) break;
            }
            for (let h of (s.length = 0, n)) s.push(h);
            return u;
          }
          top(t) {
            let s = this.series, n = s.nodePadding, l = this.points.reduce((o, r) => (o > 0 && (o += n), o += Math.max(r.getSum() * t, s.options.minLinkWidth || 0)), 0);
            return We(s.options.nodeAlignment || "center") * ((s.chart.plotSizeY || 0) - l);
          }
          left(t) {
            let s = this.series, n = s.chart, l = s.options.equalNodes, o = n.inverted ? n.plotHeight : n.plotWidth, r = s.nodePadding, u = this.points.reduce((a, p) => (a > 0 && (a += r), a += l ? o / p.series.nodes.length - r : Math.max(p.getSum() * t, s.options.minLinkWidth || 0)), 0);
            return ((n.plotSizeX || 0) - Math.round(u)) / 2;
          }
          sum() {
            return this.points.reduce((t, s) => t + s.getSum(), 0);
          }
          offset(t, s) {
            let n = this.points, l = this.series, o = l.nodePadding, r = 0, u;
            if (l.is("organization") && t.hangsFrom) return { absoluteTop: t.hangsFrom.nodeY };
            for (let a = 0; a < n.length; a++) {
              let p = n[a].getSum(), h = Math.max(p * s, l.options.minLinkWidth || 0), y = t.options[l.chart.inverted ? "offsetHorizontal" : "offsetVertical"], c = t.options.offset || 0;
              if (u = p ? h + o : 0, n[a] === t) return { relativeTop: r + (Fe(y) ? le(y, h) : le(c, u)) };
              r += u;
            }
          }
        }
        d.SankeyColumnAdditions = e;
      })(q || (q = {}));
      let ae = q;
      var ze = x(620), De = x.n(ze);
      let { extend: lt, isArray: Ae, isNumber: K, isObject: A, merge: J, pick: Ye, relativeLength: Be } = N();
      var Ee = x(28), He = x.n(Ee);
      let { deg2rad: Xe } = N(), { addEvent: Q, merge: _e, uniqueKey: je, defined: de, extend: Ie } = N();
      function Re(d, e) {
        e = _e(!0, { enabled: !0, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, e);
        let i = this.renderer.url, t = this.text || this, s = t.textPath, { attributes: n, enabled: l } = e;
        if (d = d || s && s.path, s && s.undo(), d && l) {
          let o = Q(t, "afterModifyTree", (r) => {
            if (d && l) {
              let u = d.attr("id");
              u || d.attr("id", u = je());
              let a = { x: 0, y: 0 };
              de(n.dx) && (a.dx = n.dx, delete n.dx), de(n.dy) && (a.dy = n.dy, delete n.dy), t.attr(a), this.attr({ transform: "" }), this.box && (this.box = this.box.destroy());
              let p = r.nodes.slice(0);
              r.nodes.length = 0, r.nodes[0] = { tagName: "textPath", attributes: Ie(n, { "text-anchor": n.textAnchor, href: `${i}#${u}` }), children: p };
            }
          });
          t.textPath = { path: d, undo: o };
        } else t.attr({ dx: 0, dy: 0 }), delete t.textPath;
        return this.added && (t.textCache = "", this.renderer.buildText(t)), this;
      }
      function $e(d) {
        let e = d.bBox, i = this.element?.querySelector("textPath");
        if (i) {
          let t = [], { b: s, h: n } = this.renderer.fontMetrics(this.element), l = n - s, o = RegExp('(<tspan>|<tspan(?!\\sclass="highcharts-br")[^>]*>|<\\/tspan>)', "g"), r = i.innerHTML.replace(o, "").split(/<tspan class="highcharts-br"[^>]*>/), u = r.length, a = (p, h) => {
            let { x: y, y: c } = h, f = (i.getRotationOfChar(p) - 90) * Xe, m = Math.cos(f), g = Math.sin(f);
            return [[y - l * m, c - l * g], [y + s * m, c + s * g]];
          };
          for (let p = 0, h = 0; h < u; h++) {
            let y = r[h].length;
            for (let c = 0; c < y; c += 5) try {
              let f = p + c + h, [m, g] = a(f, i.getStartPositionOfChar(f));
              c === 0 ? (t.push(g), t.push(m)) : (h === 0 && t.unshift(g), h === u - 1 && t.push(m));
            } catch {
              break;
            }
            p += y - 1;
            try {
              let c = p + h, f = i.getEndPositionOfChar(c), [m, g] = a(c, f);
              t.unshift(g), t.unshift(m);
            } catch {
              break;
            }
          }
          t.length && t.push(t[0].slice()), e.polygon = t;
        }
        return e;
      }
      function qe(d) {
        let e = d.labelOptions, i = d.point, t = e[i.formatPrefix + "TextPath"] || e.textPath;
        t && !e.useHTML && (this.setTextPath(i.getDataLabelPath?.(this) || i.graphic, t), i.dataLabelPath && !t.enabled && (i.dataLabelPath = i.dataLabelPath.destroy()));
      }
      let { column: P, line: Ve } = H().seriesTypes, { parse: he } = De(), { getLevelOptions: Ge, getNodeWidth: Ze } = { getLevelOptions: function(d) {
        let e, i, t, s, n, l, o = {};
        if (A(d)) for (s = K(d.from) ? d.from : 1, l = d.levels, i = {}, e = A(d.defaults) ? d.defaults : {}, Ae(l) && (i = l.reduce((r, u) => {
          let a, p, h;
          return A(u) && K(u.level) && (p = Ye((h = J({}, u)).levelIsConstant, e.levelIsConstant), delete h.levelIsConstant, delete h.level, A(r[a = u.level + (p ? 0 : s - 1)]) ? J(!0, r[a], h) : r[a] = h), r;
        }, {})), n = K(d.to) ? d.to : 1, t = 0; t <= n; t++) o[t] = J({}, e, A(i[t]) ? i[t] : {});
        return o;
      }, getNodeWidth: function(d, e) {
        let { chart: i, options: t } = d, { nodeDistance: s = 0, nodeWidth: n = 0 } = t, { plotSizeX: l = 1 } = i;
        if (n === "auto") {
          if (typeof s == "string" && /%$/.test(s)) return l / (e + parseFloat(s) / 100 * (e - 1));
          let o = Number(s);
          return (l + o) / (e || 1) - o;
        }
        return Be(n, l);
      } }, { clamp: Ke, crisp: pe, extend: Je, isObject: ce, merge: ue, pick: X, relativeLength: fe, stableSort: Qe } = N();
      ({ compose: function(d) {
        Q(d, "afterGetBBox", $e), Q(d, "beforeAddingDataLabel", qe);
        let e = d.prototype;
        e.setTextPath || (e.setTextPath = Re);
      } }).compose(He());
      class M extends P {
        static getDLOptions(e) {
          let i = ce(e.optionsPoint) ? e.optionsPoint.dataLabels : {};
          return ue({ style: {} }, ce(e.level) ? e.level.dataLabels : {}, i);
        }
        createNodeColumns() {
          let e = [];
          for (let i of this.nodes) i.setNodeColumn(), e[i.column] || (e[i.column] = ae.compose([], this)), e[i.column].push(i);
          for (let i = 0; i < e.length; i++) e[i] === void 0 && (e[i] = ae.compose([], this));
          return e;
        }
        order(e, i) {
          if (e.level === void 0) for (let t of (e.level = i, e.linksFrom)) t.toNode && this.order(t.toNode, i + 1);
        }
        generatePoints() {
          if (Z.generatePoints.apply(this, arguments), this.orderNodes) {
            for (let e of this.nodes) e.linksTo.length === 0 && this.order(e, 0);
            Qe(this.nodes, (e, i) => e.level - i.level);
          }
        }
        getNodePadding() {
          let e = this.options.nodePadding || 0;
          if (this.nodeColumns) {
            let i = this.nodeColumns.reduce((t, s) => Math.max(t, s.length), 0);
            i * e > this.chart.plotSizeY && (e = this.chart.plotSizeY / i);
          }
          return e;
        }
        hasData() {
          return !!this.dataTable.rowCount;
        }
        pointAttribs(e, i) {
          if (!e) return {};
          let t = this, s = e.isNode ? e.level : e.fromNode.level, n = t.mapOptionsToLevel[s || 0] || {}, l = e.options, o = n.states && n.states[i || ""] || {}, r = ["colorByPoint", "borderColor", "borderWidth", "linkOpacity", "opacity"].reduce((a, p) => (a[p] = X(o[p], l[p], n[p], t.options[p]), a), {}), u = X(o.color, l.color, r.colorByPoint ? e.color : n.color);
          return e.isNode ? { fill: u, stroke: r.borderColor, "stroke-width": r.borderWidth, opacity: r.opacity } : { fill: u, "fill-opacity": r.linkOpacity };
        }
        drawTracker() {
          P.prototype.drawTracker.call(this, this.points), P.prototype.drawTracker.call(this, this.nodes);
        }
        drawPoints() {
          P.prototype.drawPoints.call(this, this.points), P.prototype.drawPoints.call(this, this.nodes);
        }
        drawDataLabels() {
          P.prototype.drawDataLabels.call(this, this.points), P.prototype.drawDataLabels.call(this, this.nodes);
        }
        translate() {
          this.generatePoints(), this.nodeColumns = this.createNodeColumns();
          let e = this, i = this.chart, t = this.options, s = this.nodeColumns, n = s.length;
          for (let l of (this.nodeWidth = Ze(this, n), this.nodePadding = this.getNodePadding(), this.translationFactor = s.reduce((o, r) => Math.min(o, r.sankeyColumn.getTranslationFactor(e)), 1 / 0), this.colDistance = (i.plotSizeX - this.nodeWidth - t.borderWidth) / Math.max(1, s.length - 1), e.mapOptionsToLevel = Ge({ from: 1, levels: t.levels, to: s.length - 1, defaults: { borderColor: t.borderColor, borderRadius: t.borderRadius, borderWidth: t.borderWidth, color: e.color, colorByPoint: t.colorByPoint, levelIsConstant: !0, linkColor: t.linkColor, linkLineWidth: t.linkLineWidth, linkOpacity: t.linkOpacity, states: t.states } }), s)) for (let o of l) e.translateNode(o, l);
          for (let l of this.nodes) for (let o of l.linksFrom) (o.weight || o.isNull) && o.to && (e.translateLink(o), o.allowShadow = !1);
        }
        translateLink(e) {
          let i = (b, C) => {
            let L = b.offset(e, C) * o;
            return Math.min(b.nodeY + L, b.nodeY + (b.shapeArgs && b.shapeArgs.height || 0) - c);
          }, t = e.fromNode, s = e.toNode, n = this.chart, { inverted: l } = n, o = this.translationFactor, r = this.options, u = X(e.linkColorMode, r.linkColorMode), a = (n.inverted ? -this.colDistance : this.colDistance) * r.curveFactor, p = t.nodeX, h = s.nodeX, y = e.outgoing, c = Math.max(e.weight * o, this.options.minLinkWidth), f = i(t, "linksFrom"), m = i(s, "linksTo"), g = this.nodeWidth, w = h > p + g;
          if (n.inverted && (f = n.plotSizeY - f, m = (n.plotSizeY || 0) - m, g = -g, c = -c, w = p > h), e.shapeType = "path", e.linkBase = [f, f + c, m, m + c], w && typeof m == "number") e.shapeArgs = { d: [["M", p + g, f], ["C", p + g + a, f, h - a, m, h, m], ["L", h + (y ? g : 0), m + c / 2], ["L", h, m + c], ["C", h - a, m + c, p + g + a, f + c, p + g, f + c], ["Z"]] };
          else if (typeof m == "number") {
            let b = n.plotHeight - f - c, C = h - 20 - c, L = h - 20, F = p + g, O = F + 20, _ = O + c, me = f, Y = f + c, U = Y + 20, B = U + b, S = B + 20, j = S + c, ee = m, E = ee + c, ge = E + 20, et = Y - 0.7 * c, ye = S + 0.7 * c, tt = E - 0.7 * c, xe = h - 0.7 * c, be = F + 0.7 * c;
            e.shapeArgs = { d: [["M", F, me], ["C", be, me, _, et, _, U], ["L", _, B], ["C", _, ye, be, j, F, j], ["L", h, j], ["C", xe, j, C, ye, C, B], ["L", C, ge], ["C", C, tt, xe, ee, h, ee], ["L", h, E], ["C", L, E, L, E, L, ge], ["L", L, B], ["C", L, S, L, S, h, S], ["L", F, S], ["C", O, S, O, S, O, B], ["L", O, U], ["C", O, Y, O, Y, F, Y], ["Z"]] };
          }
          if (e.dlBox = { x: p + (h - p + g) / 2, y: f + (m - f) / 2, height: c, width: 0 }, e.tooltipPos = n.inverted ? [n.plotSizeY - e.dlBox.y - c / 2, n.plotSizeX - e.dlBox.x] : [e.dlBox.x, e.dlBox.y + c / 2], e.y = e.plotY = 1, e.x = e.plotX = 1, !e.options.color) {
            if (u === "from") e.color = t.color;
            else if (u === "to") e.color = s.color;
            else if (u === "gradient") {
              let b = he(t.color).get(), C = he(s.color).get();
              e.color = { linearGradient: { x1: 1, x2: 0, y1: 0, y2: 0 }, stops: [[0, l ? b : C], [1, l ? C : b]] };
            }
          }
        }
        translateNode(e, i) {
          let t = this.translationFactor, s = this.chart, n = this.options, { borderRadius: l, borderWidth: o = 0 } = n, r = e.getSum(), u = Math.max(Math.round(r * t), this.options.minLinkWidth), a = Math.round(this.nodeWidth), p = i.sankeyColumn.offset(e, t), h = pe(X(p.absoluteTop, i.sankeyColumn.top(t) + p.relativeTop), o), y = pe(this.colDistance * e.column + o / 2, o) + fe(e.options[s.inverted ? "offsetVertical" : "offsetHorizontal"] || 0, a), c = s.inverted ? s.plotSizeX - y : y;
          if (e.sum = r, r) {
            e.shapeType = "roundedRect", e.nodeX = c, e.nodeY = h;
            let f = c, m = h, g = e.options.width || n.width || a, w = e.options.height || n.height || u, b = Ke(fe(typeof l == "object" ? l.radius : l || 0, g), 0, u / 2);
            s.inverted && (f = c - a, m = s.plotSizeY - h - u, g = e.options.height || n.height || a, w = e.options.width || n.width || u), e.dlOptions = M.getDLOptions({ level: this.mapOptionsToLevel[e.level], optionsPoint: e.options }), e.plotX = 1, e.plotY = 1, e.tooltipPos = s.inverted ? [s.plotSizeY - m - w / 2, s.plotSizeX - f - g / 2] : [f + g / 2, m + w / 2], e.shapeArgs = { x: f, y: m, width: g, height: w, r: b, display: e.hasShape() ? "" : "none" };
          } else e.dlOptions = { enabled: !1 };
        }
      }
      M.defaultOptions = ue(P.defaultOptions, { borderWidth: 0, colorByPoint: !0, curveFactor: 0.33, dataLabels: { enabled: !0, backgroundColor: "none", crop: !1, nodeFormat: void 0, nodeFormatter: function() {
        return this.point.name;
      }, format: void 0, formatter: function() {
      }, inside: !0 }, inactiveOtherPoints: !0, linkColorMode: "from", linkOpacity: 0.5, opacity: 1, minLinkWidth: 0, nodeAlignment: "center", nodeWidth: 20, nodePadding: 10, nodeDistance: 30, showInLegend: !1, states: { hover: { linkOpacity: 1, opacity: 1 }, inactive: { linkOpacity: 0.1, opacity: 0.1, animation: { duration: 50 } } }, tooltip: { followPointer: !0, headerFormat: '<span style="font-size: 0.8em">{series.name}</span><br/>', pointFormat: "{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>", nodeFormat: "{point.name}: <b>{point.sum}</b><br/>" } }), Z.compose(re, M), Je(M.prototype, { animate: Ve.prototype.animate, createNode: Z.createNode, forceDL: !0, invertible: !0, isCartesian: !1, orderNodes: !0, noSharedTooltip: !0, pointArrayMap: ["from", "to", "weight"], pointClass: re, searchPoint: N().noop }), H().registerSeriesType("sankey", M);
      let Ue = N();
      return oe.default;
    })());
  })(I)), I.exports;
}
var ve = nt();
const rt = /* @__PURE__ */ ot(ve), dt = /* @__PURE__ */ it({
  __proto__: null,
  default: rt
}, [ve]);
export {
  dt as s
};
