var ie = { exports: {} }, sr = ie.exports, Ei;
function ar() {
  return Ei || (Ei = 1, (function(zi, or) {
    /**
    * Highcharts JS v12.4.0 (2025-09-04)
    * @module highcharts/highcharts-more
    * @requires highcharts
    *
    * (c) 2009-2025 Highsoft AS
    *
    * License: www.highcharts.com/license
    */
    (function(Z, se) {
      zi.exports = se(Z._Highcharts, Z._Highcharts.SeriesRegistry, Z._Highcharts.Series, Z._Highcharts.Series.types.column, Z._Highcharts.Templating, Z._Highcharts.Point, Z._Highcharts.Color, Z._Highcharts.Chart, Z._Highcharts.SVGElement, Z._Highcharts.StackItem);
    })(typeof window > "u" ? sr : window, (Z, se, Oi, Di, Bi, Wi, Hi, Fi, Gi, qi) => (() => {
      var ae, oe, re, Vi = { 28: (s) => {
        s.exports = Gi;
      }, 184: (s) => {
        s.exports = qi;
      }, 260: (s) => {
        s.exports = Wi;
      }, 448: (s) => {
        s.exports = Di;
      }, 512: (s) => {
        s.exports = se;
      }, 620: (s) => {
        s.exports = Hi;
      }, 820: (s) => {
        s.exports = Oi;
      }, 944: (s) => {
        s.exports = Z;
      }, 960: (s) => {
        s.exports = Fi;
      }, 984: (s) => {
        s.exports = Bi;
      } }, Xe = {};
      function z(s) {
        var t = Xe[s];
        if (t !== void 0) return t.exports;
        var e = Xe[s] = { exports: {} };
        return Vi[s](e, e.exports, z), e.exports;
      }
      z.n = (s) => {
        var t = s && s.__esModule ? () => s.default : () => s;
        return z.d(t, { a: t }), t;
      }, z.d = (s, t) => {
        for (var e in t) z.o(t, e) && !z.o(s, e) && Object.defineProperty(s, e, { enumerable: !0, get: t[e] });
      }, z.o = (s, t) => Object.prototype.hasOwnProperty.call(s, t);
      var Ye = {};
      z.d(Ye, { default: () => ir });
      var Ui = z(944), k = z.n(Ui), Ki = z(512), R = z.n(Ki), _i = z(820), Ie = z.n(_i);
      let { deg2rad: Re } = k(), { fireEvent: ji, isNumber: ne, pick: Bt, relativeLength: Zi } = k();
      (function(s) {
        s.getCenter = function() {
          let t = this.options, e = this.chart, i = 2 * (t.slicedOffset || 0), a = e.plotWidth - 2 * i, r = e.plotHeight - 2 * i, o = t.center, n = Math.min(a, r), l = t.thickness, d, p = t.size, h = t.innerSize || 0, u, c;
          typeof p == "string" && (p = parseFloat(p)), typeof h == "string" && (h = parseFloat(h));
          let m = [Bt(o?.[0], "50%"), Bt(o?.[1], "50%"), Bt(p && p < 0 ? void 0 : t.size, "100%"), Bt(h && h < 0 ? void 0 : t.innerSize || 0, "0%")];
          for (!e.angular || this instanceof Ie() || (m[3] = 0), u = 0; u < 4; ++u) c = m[u], d = u < 2 || u === 2 && /%$/.test(c), m[u] = Zi(c, [a, r, n, m[2]][u]) + (d ? i : 0);
          return m[3] > m[2] && (m[3] = m[2]), ne(l) && 2 * l < m[2] && l > 0 && (m[3] = m[2] - 2 * l), ji(this, "afterGetCenter", { positions: m }), m;
        }, s.getStartAndEndRadians = function(t, e) {
          let i = ne(t) ? t : 0, a = ne(e) && e > i && e - i < 360 ? e : i + 360;
          return { start: Re * (i + -90), end: Re * (a + -90) };
        };
      })(ae || (ae = {}));
      let $i = ae, { addEvent: le, correctFloat: Ee, defined: ze, pick: Qi } = k();
      function Ji(s) {
        let t, e = this;
        return s && e.pane.forEach((i) => {
          he(s.chartX - e.plotLeft, s.chartY - e.plotTop, i.center) && (t = i);
        }), t;
      }
      function he(s, t, e, i, a) {
        let r = !0, o = e[0], n = e[1], l = 2 * Math.PI, d = Math.sqrt(Math.pow(s - o, 2) + Math.pow(t - n, 2));
        if (ze(i) && ze(a)) {
          let p = Math.atan2(Ee(t - n, 8), Ee(s - o, 8));
          p = (p + l) % l, i = (i + l) % l, Math.abs((a = (a + l) % l) - i) > 1e-6 && (r = i > a ? p >= i || p <= a : p >= i && p <= a);
        } else r = !0;
        return d <= Math.ceil(e[2] / 2) && r;
      }
      function ts(s) {
        this.polar && (s.options.inverted && ([s.x, s.y] = [s.y, s.x]), s.isInsidePlot = this.pane.some((t) => he(s.x, s.y, t.center, t.axis && t.axis.normalizedStartAngleRad, t.axis && t.axis.normalizedEndAngleRad)));
      }
      function es(s) {
        let t = this.chart;
        s.hoverPoint && s.hoverPoint.plotX && s.hoverPoint.plotY && t.hoverPane && !he(s.hoverPoint.plotX, s.hoverPoint.plotY, t.hoverPane.center) && (s.hoverPoint = void 0);
      }
      function is(s) {
        let t = this.chart;
        t.polar ? (t.hoverPane = t.getHoverPane(s), s.filter = function(e) {
          return e.visible && !(!s.shared && e.directTouch) && Qi(e.options.enableMouseTracking, !0) && (!t.hoverPane || e.xAxis.pane === t.hoverPane);
        }) : t.hoverPane = void 0;
      }
      let { defaultOptions: ss } = k(), Oe = { shape: "circle", borderRadius: 0, borderWidth: 1, borderColor: "#cccccc", backgroundColor: { linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, stops: [[0, "#ffffff"], [1, "#e6e6e6"]] }, from: -Number.MAX_VALUE, innerRadius: 0, to: Number.MAX_VALUE, outerRadius: "105%" }, De = { background: Oe, center: ["50%", "50%"], size: "85%", innerSize: "0%", startAngle: 0 };
      ss.pane = De;
      let Be = { pane: De, background: Oe }, { extend: as, merge: pe, splat: os } = k();
      class Wt {
        constructor(t, e) {
          this.coll = "pane", this.init(t, e);
        }
        init(t, e) {
          this.chart = e, this.background = [], e.pane.push(this), this.setOptions(t);
        }
        setOptions(t) {
          this.options = t = pe(Be.pane, { background: this.chart.angular ? {} : void 0 }, t);
        }
        render() {
          let t = this.options, e = this.chart.renderer;
          this.group || (this.group = e.g("pane-group").attr({ zIndex: t.zIndex || 0 }).add()), this.updateCenter();
          let i = this.options.background;
          if (i) {
            let a = Math.max((i = os(i)).length, this.background.length || 0);
            for (let r = 0; r < a; r++) i[r] && this.axis ? this.renderBackground(pe(Be.background, i[r]), r) : this.background[r] && (this.background[r] = this.background[r].destroy(), this.background.splice(r, 1));
          }
        }
        renderBackground(t, e) {
          let i = { class: "highcharts-pane " + (t.className || "") }, a = "animate";
          this.chart.styledMode || as(i, { fill: t.backgroundColor, stroke: t.borderColor, "stroke-width": t.borderWidth }), this.background[e] || (this.background[e] = this.chart.renderer.path().add(this.group), a = "attr"), this.background[e][a]({ d: this.axis.getPlotBandPath(t.from, t.to, t) }).attr(i);
        }
        updateCenter(t) {
          this.center = (t || this.axis || {}).center = $i.getCenter.call(this);
        }
        update(t, e) {
          pe(!0, this.options, t), this.setOptions(this.options), this.render(), this.chart.axes.forEach(function(i) {
            i.pane === this && (i.pane = null, i.update({}, e));
          }, this);
        }
      }
      Wt.compose = function(s, t) {
        let e = s.prototype;
        e.getHoverPane || (e.collectionsWithUpdate.push("pane"), e.getHoverPane = Ji, le(s, "afterIsInsidePlot", ts), le(t, "afterGetHoverData", es), le(t, "beforeGetHoverData", is));
      };
      let { area: { prototype: { pointClass: rs, pointClass: { prototype: Ht } } } } = R().seriesTypes, { defined: We, isNumber: Mt } = k(), ns = class extends rs {
        setState() {
          let s = this.state, t = this.series, e = t.chart.polar;
          We(this.plotHigh) || (this.plotHigh = t.yAxis.toPixels(this.high, !0)), We(this.plotLow) || (this.plotLow = this.plotY = t.yAxis.toPixels(this.low, !0)), t.lowerStateMarkerGraphic = t.stateMarkerGraphic, t.stateMarkerGraphic = t.upperStateMarkerGraphic, this.graphic = this.graphics && this.graphics[1], this.plotY = this.plotHigh, e && Mt(this.plotHighX) && (this.plotX = this.plotHighX), Ht.setState.apply(this, arguments), this.state = s, this.plotY = this.plotLow, this.graphic = this.graphics && this.graphics[0], e && Mt(this.plotLowX) && (this.plotX = this.plotLowX), t.upperStateMarkerGraphic = t.stateMarkerGraphic, t.stateMarkerGraphic = t.lowerStateMarkerGraphic, t.lowerStateMarkerGraphic = void 0;
          let i = t.modifyMarkerSettings();
          Ht.setState.apply(this, arguments), t.restoreMarkerSettings(i);
        }
        haloPath() {
          let s = this.series.chart.polar, t = [];
          return this.plotY = this.plotLow, s && Mt(this.plotLowX) && (this.plotX = this.plotLowX), this.isInside && (t = Ht.haloPath.apply(this, arguments)), this.plotY = this.plotHigh, s && Mt(this.plotHighX) && (this.plotX = this.plotHighX), this.isTopInside && (t = t.concat(Ht.haloPath.apply(this, arguments))), t;
        }
        isValid() {
          return Mt(this.low) && Mt(this.high);
        }
      }, { noop: ls } = k(), { area: He, area: { prototype: ft }, column: { prototype: hs } } = R().seriesTypes, { addEvent: Fe, defined: ps, extend: Ft, isArray: ds, isNumber: cs, pick: Ge, merge: qe } = k();
      class Lt extends He {
        toYData(t) {
          return [t.low, t.high];
        }
        highToXY(t) {
          let e = this.chart, i = this.xAxis.postTranslate(t.rectPlotX || 0, this.yAxis.len - (t.plotHigh || 0));
          t.plotHighX = i.x - e.plotLeft, t.plotHigh = i.y - e.plotTop, t.plotLowX = t.plotX;
        }
        getGraphPath(t) {
          let e = [], i = [], a = ft.getGraphPath, r = this.options, o = this.chart.polar, n = o && r.connectEnds !== !1, l = r.connectNulls, d, p, h, u = r.step;
          for (d = (t = t || this.points).length; d--; ) {
            p = t[d];
            let x = o ? { plotX: p.rectPlotX, plotY: p.yBottom, doCurve: !1 } : { plotX: p.plotX, plotY: p.plotY, doCurve: !1 };
            p.isNull || n || l || t[d + 1] && !t[d + 1].isNull || i.push(x), h = { polarPlotY: p.polarPlotY, rectPlotX: p.rectPlotX, yBottom: p.yBottom, plotX: Ge(p.plotHighX, p.plotX), plotY: p.plotHigh, isNull: p.isNull }, i.push(h), e.push(h), p.isNull || n || l || t[d - 1] && !t[d - 1].isNull || i.push(x);
          }
          let c = a.call(this, t);
          u && (u === !0 && (u = "left"), r.step = { left: "right", center: "center", right: "left" }[u]);
          let m = a.call(this, e), y = a.call(this, i);
          r.step = u;
          let f = [].concat(c, m);
          return !this.chart.polar && y[0] && y[0][0] === "M" && (y[0] = ["L", y[0][1], y[0][2]]), this.graphPath = f, this.areaPath = c.concat(y), f.isArea = !0, f.xMap = c.xMap, this.areaPath.xMap = c.xMap, f;
        }
        drawDataLabels() {
          let t, e, i, a, r, o = this.points, n = o.length, l = [], d = this.options.dataLabels, p = this.chart.inverted;
          if (d) {
            if (ds(d) ? (a = d[0] || { enabled: !1 }, r = d[1] || { enabled: !1 }) : ((a = Ft({}, d)).x = d.xHigh, a.y = d.yHigh, (r = Ft({}, d)).x = d.xLow, r.y = d.yLow), a.enabled || this.hasDataLabels?.()) {
              for (t = n; t--; ) if (e = o[t]) {
                let { plotHigh: h = 0, plotLow: u = 0 } = e;
                i = a.inside ? h < u : h > u, e.y = e.high, e._plotY = e.plotY, e.plotY = h, l[t] = e.dataLabel, e.dataLabel = e.dataLabelUpper, e.below = i, p ? a.align || (a.align = i ? "right" : "left") : a.verticalAlign || (a.verticalAlign = i ? "top" : "bottom");
              }
              for (this.options.dataLabels = a, ft.drawDataLabels && ft.drawDataLabels.apply(this, arguments), t = n; t--; ) (e = o[t]) && (e.dataLabelUpper = e.dataLabel, e.dataLabel = l[t], delete e.dataLabels, e.y = e.low, e.plotY = e._plotY);
            }
            if (r.enabled || this.hasDataLabels?.()) {
              for (t = n; t--; ) if (e = o[t]) {
                let { plotHigh: h = 0, plotLow: u = 0 } = e;
                i = r.inside ? h < u : h > u, e.below = !i, p ? r.align || (r.align = i ? "left" : "right") : r.verticalAlign || (r.verticalAlign = i ? "bottom" : "top");
              }
              this.options.dataLabels = r, ft.drawDataLabels && ft.drawDataLabels.apply(this, arguments);
            }
            if (a.enabled) for (t = n; t--; ) (e = o[t]) && (e.dataLabels = [e.dataLabelUpper, e.dataLabel].filter(function(h) {
              return !!h;
            }));
            this.options.dataLabels = d;
          }
        }
        alignDataLabel() {
          hs.alignDataLabel.apply(this, arguments);
        }
        modifyMarkerSettings() {
          let t = { marker: this.options.marker, symbol: this.symbol };
          if (this.options.lowMarker) {
            let { options: { marker: e, lowMarker: i } } = this;
            this.options.marker = qe(e, i), i.symbol && (this.symbol = i.symbol);
          }
          return t;
        }
        restoreMarkerSettings(t) {
          this.options.marker = t.marker, this.symbol = t.symbol;
        }
        drawPoints() {
          let t, e, i = this.points.length, a = this.modifyMarkerSettings();
          for (ft.drawPoints.apply(this, arguments), this.restoreMarkerSettings(a), t = 0; t < i; ) (e = this.points[t]).graphics = e.graphics || [], e.origProps = { plotY: e.plotY, plotX: e.plotX, isInside: e.isInside, negative: e.negative, zone: e.zone, y: e.y }, (e.graphic || e.graphics[0]) && (e.graphics[0] = e.graphic), e.graphic = e.graphics[1], e.plotY = e.plotHigh, ps(e.plotHighX) && (e.plotX = e.plotHighX), e.y = Ge(e.high, e.origProps.y), e.negative = e.y < (this.options.threshold || 0), this.zones.length && (e.zone = e.getZone()), this.chart.polar || (e.isInside = e.isTopInside = e.plotY !== void 0 && e.plotY >= 0 && e.plotY <= this.yAxis.len && e.plotX >= 0 && e.plotX <= this.xAxis.len), t++;
          for (ft.drawPoints.apply(this, arguments), t = 0; t < i; ) (e = this.points[t]).graphics = e.graphics || [], (e.graphic || e.graphics[1]) && (e.graphics[1] = e.graphic), e.graphic = e.graphics[0], e.origProps && (Ft(e, e.origProps), delete e.origProps), t++;
        }
        hasMarkerChanged(t, e) {
          let i = t.lowMarker, a = e.lowMarker || {};
          return i && (i.enabled === !1 || a.symbol !== i.symbol || a.height !== i.height || a.width !== i.width) || super.hasMarkerChanged(t, e);
        }
      }
      Lt.defaultOptions = qe(He.defaultOptions, { lineWidth: 1, threshold: null, tooltip: { pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>' }, trackByArea: !0, dataLabels: { align: void 0, verticalAlign: void 0, xLow: 0, xHigh: 0, yLow: 0, yHigh: 0 } }), Fe(Lt, "afterTranslate", function() {
        this.pointArrayMap.join(",") === "low,high" && this.points.forEach((s) => {
          let t = s.high, e = s.plotY;
          s.isNull ? s.plotY = void 0 : (s.plotLow = e, s.plotHigh = cs(t) ? this.yAxis.translate(this.dataModify ? this.dataModify.modifyValue(t) : t, !1, !0, void 0, !0) : void 0, this.dataModify && (s.yBottom = s.plotHigh));
        });
      }, { order: 0 }), Fe(Lt, "afterTranslate", function() {
        this.points.forEach((s) => {
          if (this.chart.polar) this.highToXY(s), s.plotLow = s.plotY, s.tooltipPos = [((s.plotHighX || 0) + (s.plotLowX || 0)) / 2, ((s.plotHigh || 0) + (s.plotLow || 0)) / 2];
          else {
            let t = s.pos(!1, s.plotLow), e = s.pos(!1, s.plotHigh);
            t && e && (t[0] = (t[0] + e[0]) / 2, t[1] = (t[1] + e[1]) / 2), s.tooltipPos = t;
          }
        });
      }, { order: 3 }), Ft(Lt.prototype, { deferTranslatePolar: !0, pointArrayMap: ["low", "high"], pointClass: ns, pointValKey: "low", setStackedPoints: ls }), R().registerSeriesType("arearange", Lt);
      let Ve = Lt, { spline: { prototype: us } } = R().seriesTypes, { merge: gs, extend: fs } = k();
      class de extends Ve {
      }
      de.defaultOptions = gs(Ve.defaultOptions), fs(de.prototype, { getPointSpline: us.getPointSpline }), R().registerSeriesType("areasplinerange", de);
      var ms = z(448), Gt = z.n(ms);
      let { noop: Ue } = k(), { crisp: it, extend: bs, merge: ys, pick: ce, relativeLength: xs } = k();
      class qt extends Gt() {
        pointAttribs() {
          return {};
        }
        getWhiskerPair(t, e, i, a, r) {
          let o = r.whiskers.strokeWidth(), n = (l, d) => {
            let p = xs(l, 2 * t) / 2, h = it(d, o);
            return [["M", it(e - p), h], ["L", it(e + p), h]];
          };
          return [...n(i, r.highPlot), ...n(a, r.lowPlot)];
        }
        translate() {
          let t = this.yAxis, e = this.pointArrayMap;
          super.translate.apply(this), this.points.forEach(function(i) {
            e.forEach(function(a) {
              i[a] !== null && (i[a + "Plot"] = t.translate(i[a], 0, 1, 0, 1));
            }), i.plotHigh = i.highPlot;
          });
        }
        drawPoints() {
          let t, e, i, a, r, o, n, l, d, p, h, u = this.points, c = this.options, m = this.chart, y = m.renderer, f = this.doQuartiles !== !1, x = this.options.whiskerLength;
          for (let g of u) {
            let T = (l = g.graphic) ? "animate" : "attr", L = g.shapeArgs, X = {}, C = {}, w = {}, Y = {}, B = g.color || this.color, b = g.options.whiskerLength || x;
            if (g.plotY !== void 0) {
              let v;
              d = L.width, h = (p = L.x) + d, t = f ? g.q1Plot : g.lowPlot, e = f ? g.q3Plot : g.lowPlot, i = g.highPlot, a = g.lowPlot, l || (g.graphic = l = y.g("point").add(this.group), g.stem = y.path().addClass("highcharts-boxplot-stem").add(l), x && (g.whiskers = y.path().addClass("highcharts-boxplot-whisker").add(l)), f && (g.box = y.path(n).addClass("highcharts-boxplot-box").add(l)), g.medianShape = y.path(o).addClass("highcharts-boxplot-median").add(l)), m.styledMode || (C.stroke = g.stemColor || c.stemColor || B, C["stroke-width"] = ce(g.stemWidth, c.stemWidth, c.lineWidth), C.dashstyle = g.stemDashStyle || c.stemDashStyle || c.dashStyle, g.stem.attr(C), b && (w.stroke = g.whiskerColor || c.whiskerColor || B, w["stroke-width"] = ce(g.whiskerWidth, c.whiskerWidth, c.lineWidth), w.dashstyle = g.whiskerDashStyle || c.whiskerDashStyle || c.dashStyle, g.whiskers.attr(w)), f && (X.fill = g.fillColor || c.fillColor || B, X.stroke = c.lineColor || B, X["stroke-width"] = c.lineWidth || 0, X.dashstyle = g.boxDashStyle || c.boxDashStyle || c.dashStyle, g.box.attr(X)), Y.stroke = g.medianColor || c.medianColor || B, Y["stroke-width"] = ce(g.medianWidth, c.medianWidth, c.lineWidth), Y.dashstyle = g.medianDashStyle || c.medianDashStyle || c.dashStyle, g.medianShape.attr(Y));
              let P = it((g.plotX || 0) + (this.pointXOffset || 0) + (this.barW || 0) / 2, g.stem.strokeWidth());
              if (v = [["M", P, e], ["L", P, i], ["M", P, t], ["L", P, a]], g.stem[T]({ d: v }), f) {
                let M = g.box.strokeWidth();
                t = it(t, M), e = it(e, M), v = [["M", p = it(p, M), e], ["L", p, t], ["L", h = it(h, M), t], ["L", h, e], ["L", p, e], ["Z"]], g.box[T]({ d: v });
              }
              if (b) {
                let M = d / 2, N = this.getWhiskerPair(M, P, g.upperWhiskerLength ?? c.upperWhiskerLength ?? b, g.lowerWhiskerLength ?? c.lowerWhiskerLength ?? b, g);
                g.whiskers[T]({ d: N });
              }
              v = [["M", p, r = it(g.medianPlot, g.medianShape.strokeWidth())], ["L", h, r]], g.medianShape[T]({ d: v });
            }
          }
        }
        toYData(t) {
          return [t.low, t.q1, t.median, t.q3, t.high];
        }
      }
      qt.defaultOptions = ys(Gt().defaultOptions, { threshold: null, tooltip: { pointFormat: '<span style="color:{point.color}">●</span> <b>{series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>' }, whiskerLength: "50%", fillColor: "#ffffff", lineWidth: 1, medianWidth: 2, whiskerWidth: 2 }), bs(qt.prototype, { pointArrayMap: ["low", "q1", "median", "q3", "high"], pointValKey: "high", drawDataLabels: Ue, setStackedPoints: Ue }), R().registerSeriesType("boxplot", qt);
      let Ke = qt, Ps = { borderColor: void 0, borderWidth: 2, className: void 0, color: void 0, connectorClassName: void 0, connectorColor: void 0, connectorDistance: 60, connectorWidth: 1, enabled: !1, labels: { className: void 0, allowOverlap: !1, format: "", formatter: void 0, align: "right", style: { fontSize: "0.9em", color: "#000000" }, x: 0, y: 0 }, maxSize: 60, minSize: 10, legendIndex: 0, ranges: { value: void 0, borderColor: void 0, color: void 0, connectorColor: void 0 }, sizeBy: "area", sizeByAbsoluteValue: !1, zIndex: 1, zThreshold: 0 };
      var vs = z(984), Ms = z.n(vs);
      let { noop: Ls } = k(), { arrayMax: ks, arrayMin: ws, isNumber: _e, merge: Ct, pick: Xt, stableSort: As } = k(), Ss = class {
        constructor(s, t) {
          this.setState = Ls, this.init(s, t);
        }
        init(s, t) {
          this.options = s, this.visible = !0, this.chart = t.chart, this.legend = t;
        }
        addToLegend(s) {
          s.splice(this.options.legendIndex, 0, this);
        }
        drawLegendSymbol(s) {
          let t, e = Xt(s.options.itemDistance, 20), i = this.legendItem || {}, a = this.options, r = a.ranges, o = a.connectorDistance;
          if (!r || !r.length || !_e(r[0].value)) {
            s.options.bubbleLegend.autoRanges = !0;
            return;
          }
          As(r, function(p, h) {
            return h.value - p.value;
          }), this.ranges = r, this.setOptions(), this.render();
          let n = this.getMaxLabelSize(), l = this.ranges[0].radius, d = 2 * l;
          t = (t = o - l + n.width) > 0 ? t : 0, this.maxLabel = n, this.movementX = a.labels.align === "left" ? t : 0, i.labelWidth = d + t + e, i.labelHeight = d + n.height / 2;
        }
        setOptions() {
          let s = this.ranges, t = this.options, e = this.chart.series[t.seriesIndex], i = this.legend.baseline, a = { zIndex: t.zIndex, "stroke-width": t.borderWidth }, r = { zIndex: t.zIndex, "stroke-width": t.connectorWidth }, o = { align: this.legend.options.rtl || t.labels.align === "left" ? "right" : "left", zIndex: t.zIndex }, n = e.options.marker.fillOpacity, l = this.chart.styledMode;
          s.forEach(function(d, p) {
            l || (a.stroke = Xt(d.borderColor, t.borderColor, e.color), a.fill = d.color || t.color, a.fill || (a.fill = e.color, a["fill-opacity"] = n ?? 1), r.stroke = Xt(d.connectorColor, t.connectorColor, e.color)), s[p].radius = this.getRangeRadius(d.value), s[p] = Ct(s[p], { center: s[0].radius - s[p].radius + i }), l || Ct(!0, s[p], { bubbleAttribs: Ct(a), connectorAttribs: Ct(r), labelAttribs: o });
          }, this);
        }
        getRangeRadius(s) {
          let t = this.options, e = this.options.seriesIndex, i = this.chart.series[e], a = t.ranges[0].value, r = t.ranges[t.ranges.length - 1].value, o = t.minSize, n = t.maxSize;
          return i.getRadius.call(this, r, a, o, n, s);
        }
        render() {
          let s = this.legendItem || {}, t = this.chart.renderer, e = this.options.zThreshold;
          for (let i of (this.symbols || (this.symbols = { connectors: [], bubbleItems: [], labels: [] }), s.symbol = t.g("bubble-legend"), s.label = t.g("bubble-legend-item").css(this.legend.itemStyle || {}), s.symbol.translateX = 0, s.symbol.translateY = 0, s.symbol.add(s.label), s.label.add(s.group), this.ranges)) i.value >= e && this.renderRange(i);
          this.hideOverlappingLabels();
        }
        renderRange(s) {
          let t = this.ranges[0], e = this.legend, i = this.options, a = i.labels, r = this.chart, o = r.series[i.seriesIndex], n = r.renderer, l = this.symbols, d = l.labels, p = s.center, h = Math.abs(s.radius), u = i.connectorDistance || 0, c = a.align, m = e.options.rtl, y = i.borderWidth, f = i.connectorWidth, x = t.radius || 0, g = p - h - y / 2 + f / 2, T = (g % 1 ? 1 : 0.5) - (f % 2 ? 0 : 0.5), L = n.styledMode, X = m || c === "left" ? -u : u;
          c === "center" && (X = 0, i.connectorDistance = 0, s.labelAttribs.align = "center"), l.bubbleItems.push(n.circle(x, p + T, h).attr(L ? {} : s.bubbleAttribs).addClass((L ? "highcharts-color-" + o.colorIndex + " " : "") + "highcharts-bubble-legend-symbol " + (i.className || "")).add(this.legendItem.symbol)), l.connectors.push(n.path(n.crispLine([["M", x, g], ["L", x + X, g]], i.connectorWidth)).attr(L ? {} : s.connectorAttribs).addClass((L ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (i.connectorClassName || "")).add(this.legendItem.symbol));
          let C = n.text(this.formatLabel(s)).attr(L ? {} : s.labelAttribs).css(L ? {} : a.style).addClass("highcharts-bubble-legend-labels " + (i.labels.className || "")).add(this.legendItem.symbol), w = { x: x + X + i.labels.x, y: g + i.labels.y + 0.4 * C.getBBox().height };
          C.attr(w), d.push(C), C.placed = !0, C.alignAttr = w;
        }
        getMaxLabelSize() {
          let s, t;
          return this.symbols.labels.forEach(function(e) {
            t = e.getBBox(!0), s = s ? t.width > s.width ? t : s : t;
          }), s || {};
        }
        formatLabel(s) {
          let t = this.options, e = t.labels.formatter, i = t.labels.format, { numberFormatter: a } = this.chart;
          return i ? Ms().format(i, s, this.chart) : e ? e.call(s) : a(s.value, 1);
        }
        hideOverlappingLabels() {
          let s = this.chart, t = this.options.labels.allowOverlap, e = this.symbols;
          !t && e && (s.hideOverlappingLabels(e.labels), e.labels.forEach(function(i, a) {
            i.newOpacity ? i.newOpacity !== i.oldOpacity && e.connectors[a].show() : e.connectors[a].hide();
          }));
        }
        getRanges() {
          let s = this.legend.bubbleLegend, t = s.chart.series, e = s.options.ranges, i, a, r = Number.MAX_VALUE, o = -Number.MAX_VALUE;
          return t.forEach(function(n) {
            n.isBubble && !n.ignoreSeries && (a = n.getColumn("z").filter(_e)).length && (r = Xt(n.options.zMin, Math.min(r, Math.max(ws(a), n.options.displayNegative === !1 ? n.options.zThreshold : -Number.MAX_VALUE))), o = Xt(n.options.zMax, Math.max(o, ks(a))));
          }), i = r === o ? [{ value: o }] : [{ value: r }, { value: (r + o) / 2 }, { value: o, autoRanges: !0 }], e.length && e[0].radius && i.reverse(), i.forEach(function(n, l) {
            e && e[l] && (i[l] = Ct(e[l], n));
          }), i;
        }
        predictBubbleSizes() {
          let s = this.chart, t = s.legend.options, e = t.floating, i = t.layout === "horizontal", a = i ? s.legend.lastLineHeight : 0, r = s.plotSizeX, o = s.plotSizeY, n = s.series[this.options.seriesIndex], l = n.getPxExtremes(), d = Math.ceil(l.minPxSize), p = Math.ceil(l.maxPxSize), h = Math.min(o, r), u, c = n.options.maxSize;
          return e || !/%$/.test(c) ? u = p : (u = (h + a) * (c = parseFloat(c)) / 100 / (c / 100 + 1), (i && o - u >= r || !i && r - u >= o) && (u = p)), [d, Math.ceil(u)];
        }
        updateRanges(s, t) {
          let e = this.legend.options.bubbleLegend;
          e.minSize = s, e.maxSize = t, e.ranges = this.getRanges();
        }
        correctSizes() {
          let s = this.legend, t = this.chart.series[this.options.seriesIndex].getPxExtremes();
          Math.abs(Math.ceil(t.maxPxSize) - this.options.maxSize) > 1 && (this.updateRanges(this.options.minSize, t.maxPxSize), s.render());
        }
      }, { setOptions: Ts } = k(), { composed: Ns } = k(), { addEvent: je, objectEach: Cs, pushUnique: Xs, wrap: Ys } = k();
      function Is(s, t, e) {
        let i, a, r, o = this.legend, n = ue(this) >= 0;
        o && o.options.enabled && o.bubbleLegend && o.options.bubbleLegend.autoRanges && n ? (i = o.bubbleLegend.options, a = o.bubbleLegend.predictBubbleSizes(), o.bubbleLegend.updateRanges(a[0], a[1]), i.placed || (o.group.placed = !1, o.allItems.forEach((l) => {
          (r = l.legendItem || {}).group && (r.group.translateY = void 0);
        })), o.render(), i.placed || (this.getMargins(), this.axes.forEach((l) => {
          l.setScale(), l.updateNames(), Cs(l.ticks, function(d) {
            d.isNew = !0, d.isNewLabel = !0;
          });
        }), this.getMargins()), i.placed = !0, s.call(this, t, e), o.bubbleLegend.correctSizes(), $e(o, Ze(o))) : (s.call(this, t, e), o && o.options.enabled && o.bubbleLegend && (o.render(), $e(o, Ze(o))));
      }
      function ue(s) {
        let t = s.series, e = 0;
        for (; e < t.length; ) {
          if (t[e] && t[e].isBubble && t[e].visible && t[e].dataTable.rowCount) return e;
          e++;
        }
        return -1;
      }
      function Ze(s) {
        let t = s.allItems, e = [], i = t.length, a, r, o, n = 0, l = 0;
        for (n = 0; n < i; n++) if (r = t[n].legendItem || {}, o = (t[n + 1] || {}).legendItem || {}, r.labelHeight && (t[n].itemHeight = r.labelHeight), t[n] === t[i - 1] || r.y !== o.y) {
          for (e.push({ height: 0 }), a = e[e.length - 1]; l <= n; l++) t[l].itemHeight > a.height && (a.height = t[l].itemHeight);
          a.step = n;
        }
        return e;
      }
      function Rs(s) {
        let t = this.bubbleLegend, e = this.options, i = e.bubbleLegend, a = ue(this.chart);
        t && t.ranges && t.ranges.length && (i.ranges.length && (i.autoRanges = !!i.ranges[0].autoRanges), this.destroyItem(t)), a >= 0 && e.enabled && i.enabled && (i.seriesIndex = a, this.bubbleLegend = new Ss(i, this), this.bubbleLegend.addToLegend(s.allItems));
      }
      function Es(s) {
        let t;
        if (s.defaultPrevented) return !1;
        let e = s.legendItem, i = this.chart, a = e.visible;
        this && this.bubbleLegend && (e.visible = !a, e.ignoreSeries = a, t = ue(i) >= 0, this.bubbleLegend.visible !== t && (this.update({ bubbleLegend: { enabled: t } }), this.bubbleLegend.visible = t), e.visible = a);
      }
      function $e(s, t) {
        let e = s.allItems, i = s.options.rtl, a, r, o, n, l = 0;
        e.forEach((d, p) => {
          (n = d.legendItem || {}).group && (a = n.group.translateX || 0, r = n.y || 0, ((o = d.movementX) || i && d.ranges) && (o = i ? a - d.options.maxSize / 2 : a + o, n.group.attr({ translateX: o })), p > t[l].step && l++, n.group.attr({ translateY: Math.round(r + t[l].height / 2) }), n.y = r + t[l].height / 2);
        });
      }
      let zs = { compose: function(s, t) {
        Xs(Ns, "Series.BubbleLegend") && (Ts({ legend: { bubbleLegend: Ps } }), Ys(s.prototype, "drawChartBox", Is), je(t, "afterGetAllItems", Rs), je(t, "itemClick", Es));
      } };
      var Os = z(260), mt = z.n(Os);
      let { seriesTypes: { scatter: { prototype: { pointClass: Ds } } } } = R(), { extend: Bs } = k();
      class Qe extends Ds {
        haloPath(t) {
          let e = (t && this.marker && this.marker.radius || 0) + t;
          if (this.series.chart.inverted) {
            let i = this.pos() || [0, 0], { xAxis: a, yAxis: r, chart: o } = this.series, n = 2 * e;
            return o.renderer.symbols.circle((a?.len || 0) - i[1] - e, (r?.len || 0) - i[0] - e, n, n);
          }
          return mt().prototype.haloPath.call(this, e);
        }
      }
      Bs(Qe.prototype, { ttBelow: !1 });
      let { composed: Ws, noop: ge } = k(), { series: Hs, seriesTypes: { column: { prototype: Fs }, scatter: Je } } = R(), { addEvent: Vt, arrayMax: Gs, arrayMin: qs, clamp: Vs, extend: fe, isNumber: bt, merge: Us, pick: yt, pushUnique: Ks } = k();
      function _s() {
        let s = this.len, { coll: t, isXAxis: e, min: i } = this, a = (this.max || 0) - (i || 0), r = 0, o = s, n = s / a, l;
        (t === "xAxis" || t === "yAxis") && (this.series.forEach((d) => {
          if (d.bubblePadding && d.reserveSpace()) {
            this.allowZoomOutside = !0, l = !0;
            let p = d.getColumn(e ? "x" : "y");
            if (e && ((d.onPoint || d).getRadii(0, 0, d), d.onPoint && (d.radii = d.onPoint.radii)), a > 0) {
              let h = p.length;
              for (; h--; ) if (bt(p[h]) && this.dataMin <= p[h] && p[h] <= this.max) {
                let u = d.radii && d.radii[h] || 0;
                r = Math.min((p[h] - i) * n - u, r), o = Math.max((p[h] - i) * n + u, o);
              }
            }
          }
        }), l && a > 0 && !this.logarithmic && (o -= s, n *= (s + Math.max(0, r) - Math.min(o, s)) / s, [["min", "userMin", r], ["max", "userMax", o]].forEach((d) => {
          yt(this.options[d[0]], this[d[1]]) === void 0 && (this[d[0]] += d[2] / n);
        })));
      }
      function js() {
        let { ticks: s, tickPositions: t, dataMin: e = 0, dataMax: i = 0, categories: a } = this, r = this.options.type;
        if ((a?.length || r === "category") && this.series.find((o) => o.bubblePadding)) {
          let o = t.length;
          for (; o--; ) {
            let n = s[t[o]], l = n.pos || 0;
            (l > i || l < e) && n.label?.hide();
          }
        }
      }
      class kt extends Je {
        static compose(t, e, i) {
          zs.compose(e, i), Ks(Ws, "Series.Bubble") && (Vt(t, "foundExtremes", _s), Vt(t, "afterRender", js));
        }
        animate(t) {
          !t && this.points.length < this.options.animationLimit && this.points.forEach(function(e) {
            let { graphic: i, plotX: a = 0, plotY: r = 0 } = e;
            i && i.width && (this.hasRendered || i.attr({ x: a, y: r, width: 1, height: 1 }), i.animate(this.markerAttribs(e), this.options.animation));
          }, this);
        }
        getRadii() {
          let t = this.getColumn("z"), e = this.getColumn("y"), i = [], a, r, o, n = this.chart.bubbleZExtremes, { minPxSize: l, maxPxSize: d } = this.getPxExtremes();
          if (!n) {
            let p, h = Number.MAX_VALUE, u = -Number.MAX_VALUE;
            this.chart.series.forEach((c) => {
              if (c.bubblePadding && c.reserveSpace()) {
                let m = (c.onPoint || c).getZExtremes();
                m && (h = Math.min(yt(h, m.zMin), m.zMin), u = Math.max(yt(u, m.zMax), m.zMax), p = !0);
              }
            }), p ? (n = { zMin: h, zMax: u }, this.chart.bubbleZExtremes = n) : n = { zMin: 0, zMax: 0 };
          }
          for (r = 0, a = t.length; r < a; r++) o = t[r], i.push(this.getRadius(n.zMin, n.zMax, l, d, o, e && e[r]));
          this.radii = i;
        }
        getRadius(t, e, i, a, r, o) {
          let n = this.options, l = n.sizeBy !== "width", d = n.zThreshold, p = e - t, h = 0.5;
          if (o === null || r === null) return null;
          if (bt(r)) {
            if (n.sizeByAbsoluteValue && (r = Math.abs(r - d), e = p = Math.max(e - d, Math.abs(t - d)), t = 0), r < t) return i / 2 - 1;
            p > 0 && (h = (r - t) / p);
          }
          return l && h >= 0 && (h = Math.sqrt(h)), Math.ceil(i + h * (a - i)) / 2;
        }
        hasData() {
          return !!this.dataTable.rowCount;
        }
        markerAttribs(t, e) {
          let i = super.markerAttribs(t, e), { height: a = 0, width: r = 0 } = i;
          return this.chart.inverted ? fe(i, { x: (t.plotX || 0) - r / 2, y: (t.plotY || 0) - a / 2 }) : i;
        }
        pointAttribs(t, e) {
          let i = this.options.marker, a = i?.fillOpacity, r = Hs.prototype.pointAttribs.call(this, t, e);
          return r["fill-opacity"] = a ?? 1, r;
        }
        translate() {
          super.translate.call(this), this.getRadii(), this.translateBubble();
        }
        translateBubble() {
          let { data: t, options: e, radii: i } = this, { minPxSize: a } = this.getPxExtremes(), r = t.length;
          for (; r--; ) {
            let o = t[r], n = i ? i[r] : 0;
            this.zoneAxis === "z" && (o.negative = (o.z || 0) < (e.zThreshold || 0)), bt(n) && n >= a / 2 ? (o.marker = fe(o.marker, { radius: n, width: 2 * n, height: 2 * n }), o.dlBox = { x: o.plotX - n, y: o.plotY - n, width: 2 * n, height: 2 * n }) : (o.shapeArgs = o.plotY = o.dlBox = void 0, o.isInside = !1);
          }
        }
        getPxExtremes() {
          let t = Math.min(this.chart.plotWidth, this.chart.plotHeight), e = (r) => {
            let o;
            return typeof r == "string" && (o = /%$/.test(r), r = parseInt(r, 10)), o ? t * r / 100 : r;
          }, i = e(yt(this.options.minSize, 8)), a = Math.max(e(yt(this.options.maxSize, "20%")), i);
          return { minPxSize: i, maxPxSize: a };
        }
        getZExtremes() {
          let t = this.options, e = this.getColumn("z").filter(bt);
          if (e.length) {
            let i = yt(t.zMin, Vs(qs(e), t.displayNegative === !1 ? t.zThreshold || 0 : -Number.MAX_VALUE, Number.MAX_VALUE)), a = yt(t.zMax, Gs(e));
            if (bt(i) && bt(a)) return { zMin: i, zMax: a };
          }
        }
        searchKDTree(t, e, i, a = ge, r = ge) {
          return a = (o, n, l) => {
            let d = o[l] || 0, p = n[l] || 0, h, u = !1;
            return d === p ? h = o.index > n.index ? o : n : d < 0 && p < 0 ? (h = d - (o.marker?.radius || 0) >= p - (n.marker?.radius || 0) ? o : n, u = !0) : h = d < p ? o : n, [h, u];
          }, r = (o, n, l) => !l && o > n || o < n, super.searchKDTree(t, e, i, a, r);
        }
      }
      kt.defaultOptions = Us(Je.defaultOptions, { dataLabels: { formatter: function() {
        let { numberFormatter: s } = this.series.chart, { z: t } = this.point;
        return bt(t) ? s(t, -1) : "";
      }, inside: !0, verticalAlign: "middle" }, animationLimit: 250, marker: { lineColor: null, lineWidth: 1, fillOpacity: 0.5, radius: null, states: { hover: { radiusPlus: 0 } }, symbol: "circle" }, minSize: 8, maxSize: "20%", softThreshold: !1, states: { hover: { halo: { size: 5 } } }, tooltip: { pointFormat: "({point.x}, {point.y}), Size: {point.z}" }, turboThreshold: 0, zThreshold: 0, zoneAxis: "z" }), fe(kt.prototype, { alignDataLabel: Fs.alignDataLabel, applyZones: ge, bubblePadding: !0, isBubble: !0, keysAffectYAxis: ["y"], pointArrayMap: ["y", "z"], pointClass: Qe, parallelArrays: ["x", "y", "z"], trackerGroups: ["group", "dataLabelsGroup"], specialGroup: "group", zoneAxis: "z" }), Vt(kt, "updatedData", (s) => {
        delete s.target.chart.bubbleZExtremes;
      }), Vt(kt, "remove", (s) => {
        delete s.target.chart.bubbleZExtremes;
      }), R().registerSeriesType("bubble", kt);
      let { seriesTypes: { column: { prototype: { pointClass: { prototype: Zs } } }, arearange: { prototype: { pointClass: $s } } } } = R(), { extend: Qs, isNumber: Js } = k();
      class ti extends $s {
        isValid() {
          return Js(this.low);
        }
      }
      Qs(ti.prototype, { setState: Zs.setState });
      let { noop: ei } = k(), { seriesTypes: { arearange: me, column: ta, column: { prototype: J } } } = R(), { addEvent: ea, clamp: ii, extend: ia, isNumber: si, merge: be, pick: sa } = k();
      class Yt extends me {
        setOptions() {
          return be(!0, arguments[0], { stacking: void 0 }), me.prototype.setOptions.apply(this, arguments);
        }
        translate() {
          return J.translate.apply(this);
        }
        pointAttribs() {
          return J.pointAttribs.apply(this, arguments);
        }
        translate3dPoints() {
          return J.translate3dPoints.apply(this, arguments);
        }
        translate3dShapes() {
          return J.translate3dShapes.apply(this, arguments);
        }
        afterColumnTranslate() {
          let t, e, i, a, r = this.yAxis, o = this.xAxis, n = o.startAngleRad, l = this.chart, d = this.xAxis.isRadial, p = Math.max(l.chartWidth, l.chartHeight) + 999;
          this.points.forEach((h) => {
            let u = h.shapeArgs || {}, c = this.options.minPointLength, m = h.plotY, y = r.translate(h.high, 0, 1, 0, 1);
            if (si(y) && si(m)) if (h.plotHigh = ii(y, -p, p), h.plotLow = ii(m, -p, p), a = h.plotHigh, Math.abs(t = sa(h.rectPlotY, h.plotY) - h.plotHigh) < c ? (e = c - t, t += e, a -= e / 2) : t < 0 && (t *= -1, a -= t), d && this.polar) i = h.barX + n, h.shapeType = "arc", h.shapeArgs = this.polar.arc(a + t, a, i, i + h.pointWidth);
            else {
              u.height = t, u.y = a;
              let { x: f = 0, width: x = 0 } = u;
              h.shapeArgs = be(h.shapeArgs, this.crispCol(f, a, x, t)), h.tooltipPos = l.inverted ? [r.len + r.pos - l.plotLeft - a - t / 2, o.len + o.pos - l.plotTop - f - x / 2, t] : [o.left - l.plotLeft + f + x / 2, r.pos - l.plotTop + a + t / 2, t];
            }
          });
        }
      }
      Yt.defaultOptions = be(ta.defaultOptions, me.defaultOptions, { borderRadius: { where: "all" }, pointRange: null, legendSymbol: "rectangle", marker: null, states: { hover: { halo: !1 } } }), ea(Yt, "afterColumnTranslate", function() {
        Yt.prototype.afterColumnTranslate.apply(this);
      }, { order: 5 }), ia(Yt.prototype, { directTouch: !0, pointClass: ti, trackerGroups: ["group", "dataLabelsGroup"], adjustForMissingColumns: J.adjustForMissingColumns, animate: J.animate, crispCol: J.crispCol, drawGraph: ei, drawPoints: J.drawPoints, getSymbol: ei, drawTracker: J.drawTracker, getColumnMetrics: J.getColumnMetrics }), R().registerSeriesType("columnrange", Yt);
      let { column: ai } = R().seriesTypes, { clamp: aa, merge: oa, pick: ye } = k();
      class oi extends ai {
        translate() {
          let t = this.chart, e = this.options, i = this.dense = this.closestPointRange * this.xAxis.transA < 2, a = this.borderWidth = ye(e.borderWidth, +!i), r = this.yAxis, o = e.threshold, n = ye(e.minPointLength, 5), l = this.getColumnMetrics(), d = l.width, p = this.pointXOffset = l.offset, h = this.translatedThreshold = r.getThreshold(o), u = this.barW = Math.max(d, 1 + 2 * a);
          for (let c of (t.inverted && (h -= 0.5), e.pointPadding && (u = Math.ceil(u)), super.translate(), this.points)) {
            let m = ye(c.yBottom, h), y = 999 + Math.abs(m), f = aa(c.plotY, -y, r.len + y), x = u / 2, g = Math.min(f, m), T = Math.max(f, m) - g, L = c.plotX + p, X, C, w, Y, B, b, v, P, M, N, A;
            e.centerInCategory && (L = this.adjustForMissingColumns(L, d, c, l)), c.barX = L, c.pointWidth = d, c.tooltipPos = t.inverted ? [r.len + r.pos - t.plotLeft - f, this.xAxis.len - L - x, T] : [L + x, f + r.pos - t.plotTop, T], X = o + (c.total || c.y), e.stacking === "percent" && (X = o + (c.y < 0) ? -100 : 100);
            let S = r.toPixels(X, !0);
            w = (C = t.plotHeight - S - (t.plotHeight - h)) ? x * (g - S) / C : 0, Y = C ? x * (g + T - S) / C : 0, b = L - w + x, v = L + w + x, P = L + Y + x, M = L - Y + x, N = g - n, A = g + T, c.y < 0 && (N = g, A = g + T + n), t.inverted && (B = r.width - g, C = S - (r.width - h), w = x * (S - B) / C, Y = x * (S - (B - T)) / C, v = (b = L + x + w) - 2 * w, P = L - Y + x, M = L + Y + x, N = g, A = g + T - n, c.y < 0 && (A = g + T + n)), c.shapeType = "path", c.shapeArgs = { x: b, y: N, width: v - b, height: T, d: [["M", b, N], ["L", v, N], ["L", P, A], ["L", M, A], ["Z"]] };
          }
        }
      }
      oi.defaultOptions = oa(ai.defaultOptions, {}), R().registerSeriesType("columnpyramid", oi);
      let { arearange: ri } = R().seriesTypes, { addEvent: ra, merge: na, extend: la } = k();
      class Ut extends Ke {
        getColumnMetrics() {
          return this.linkedParent && this.linkedParent.columnMetrics || Gt().prototype.getColumnMetrics.call(this);
        }
        drawDataLabels() {
          let t = this.pointValKey;
          if (ri) for (let e of (ri.prototype.drawDataLabels.call(this), this.points)) e.y = e[t];
        }
        toYData(t) {
          return [t.low, t.high];
        }
      }
      Ut.defaultOptions = na(Ke.defaultOptions, { color: "#000000", grouping: !1, linkedTo: ":previous", tooltip: { pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>' }, whiskerWidth: null }), ra(Ut, "afterTranslate", function() {
        for (let s of this.points) s.plotLow = s.plotY;
      }, { order: 0 }), la(Ut.prototype, { pointArrayMap: ["low", "high"], pointValKey: "high", doQuartiles: !1 }), R().registerSeriesType("errorbar", Ut);
      let { series: { prototype: { pointClass: ha } } } = R(), { noop: pa } = k(), { series: Kt, seriesTypes: { column: da } } = R(), { clamp: ca, isNumber: ni, extend: ua, merge: xe, pick: ga, pInt: Pe, defined: fa } = k();
      class ve extends Kt {
        translate() {
          let t = this.yAxis, e = this.options, i = t.center;
          this.generatePoints(), this.points.forEach((a) => {
            let r = xe(e.dial, a.dial), o = Pe(r.radius) * i[2] / 200, n = Pe(r.baseLength) * o / 100, l = Pe(r.rearLength) * o / 100, d = r.baseWidth, p = r.topWidth, h = e.overshoot, u = t.startAngleRad + t.translate(a.y, void 0, void 0, void 0, !0);
            (ni(h) || e.wrap === !1) && (h = ni(h) ? h / 180 * Math.PI : 0, u = ca(u, t.startAngleRad - h, t.endAngleRad + h)), u = 180 * u / Math.PI, a.shapeType = "path", a.shapeArgs = { d: r.path || [["M", -l, -d / 2], ["L", n, -d / 2], ["L", o, -p / 2], ["L", o, p / 2], ["L", n, d / 2], ["L", -l, d / 2], ["Z"]], translateX: i[0], translateY: i[1], rotation: u }, a.plotX = i[0], a.plotY = i[1], fa(a.y) && t.max - t.min && (a.percentage = (a.y - t.min) / (t.max - t.min) * 100);
          });
        }
        drawPoints() {
          let t = this, e = t.chart, i = t.yAxis.center, a = t.pivot, r = t.options, o = r.pivot, n = e.renderer;
          t.points.forEach((l) => {
            let d = l.graphic, p = l.shapeArgs, h = p.d, u = xe(r.dial, l.dial);
            d ? (d.animate(p), p.d = h) : l.graphic = n[l.shapeType](p).addClass("highcharts-dial").add(t.group), e.styledMode || l.graphic[d ? "animate" : "attr"]({ stroke: u.borderColor, "stroke-width": u.borderWidth, fill: u.backgroundColor });
          }), a ? a.animate({ translateX: i[0], translateY: i[1] }) : o && (t.pivot = n.circle(0, 0, o.radius).attr({ zIndex: 2 }).addClass("highcharts-pivot").translate(i[0], i[1]).add(t.group), e.styledMode || t.pivot.attr({ fill: o.backgroundColor, stroke: o.borderColor, "stroke-width": o.borderWidth }));
        }
        animate(t) {
          let e = this;
          t || e.points.forEach((i) => {
            let a = i.graphic;
            a && (a.attr({ rotation: 180 * e.yAxis.startAngleRad / Math.PI }), a.animate({ rotation: i.shapeArgs.rotation }, e.options.animation));
          });
        }
        render() {
          this.group = this.plotGroup("group", "series", this.visible ? "inherit" : "hidden", this.options.zIndex, this.chart.seriesGroup), Kt.prototype.render.call(this), this.group.clip(this.chart.clipRect);
        }
        setData(t, e) {
          Kt.prototype.setData.call(this, t, !1), this.processData(), this.generatePoints(), ga(e, !0) && this.chart.redraw();
        }
        hasData() {
          return !!this.points.length;
        }
      }
      ve.defaultOptions = xe(Kt.defaultOptions, { dataLabels: { borderColor: "#cccccc", borderRadius: 3, borderWidth: 1, crop: !1, defer: !1, enabled: !0, verticalAlign: "top", y: 15, zIndex: 2 }, dial: { backgroundColor: "#000000", baseLength: "70%", baseWidth: 3, borderColor: "#cccccc", borderWidth: 0, radius: "80%", rearLength: "10%", topWidth: 1 }, pivot: { radius: 5, borderWidth: 0, borderColor: "#cccccc", backgroundColor: "#000000" }, tooltip: { headerFormat: "" }, showInLegend: !1 }), ua(ve.prototype, { angular: !0, directTouch: !0, drawGraph: pa, drawTracker: da.prototype.drawTracker, fixedBox: !0, forceDL: !0, noSharedTooltip: !0, pointClass: class extends ha {
        setState(s) {
          this.state = s;
        }
      }, trackerGroups: ["group", "dataLabelsGroup"] }), R().registerSeriesType("gauge", ve);
      var ma = z(620), ba = z.n(ma);
      let { composed: ya } = k(), { addEvent: It, pushUnique: xa } = k();
      function Pa() {
        let s, t, e, i, a = this;
        a.container && (s = It(a.container, "mousedown", (r) => {
          t && t(), e && e(), (i = a.hoverPoint) && i.series && i.series.hasDraggableNodes && i.series.options.draggable && (i.series.onMouseDown(i, r), t = It(a.container, "mousemove", (o) => i && i.series && i.series.onMouseMove(i, o)), e = It(a.container.ownerDocument, "mouseup", (o) => (t(), e(), i && i.series && i.series.onMouseUp(i, o))));
        })), It(a, "destroy", function() {
          s();
        });
      }
      let Rt = { compose: function(s) {
        xa(ya, "DragNodes") && It(s, "load", Pa);
      }, onMouseDown: function(s, t) {
        let { panKey: e } = this.chart.options.chart;
        if (e && t[`${e}Key`]) return;
        let i = this.chart.pointer?.normalize(t) || t;
        s.fixedPosition = { chartX: i.chartX, chartY: i.chartY, plotX: s.plotX, plotY: s.plotY }, s.inDragMode = !0;
      }, onMouseMove: function(s, t) {
        if (s.fixedPosition && s.inDragMode) {
          let e, i, a = this.chart, r = a.pointer?.normalize(t) || t, o = s.fixedPosition.chartX - r.chartX, n = s.fixedPosition.chartY - r.chartY, l = a.graphLayoutsLookup;
          (Math.abs(o) > 5 || Math.abs(n) > 5) && (e = s.fixedPosition.plotX - o, i = s.fixedPosition.plotY - n, a.isInsidePlot(e, i) && (s.plotX = e, s.plotY = i, s.hasDragged = !0, this.redrawHalo(s), l.forEach((d) => {
            d.restartSimulation();
          })));
        }
      }, onMouseUp: function(s) {
        s.fixedPosition && (s.hasDragged && (this.layout.enableSimulation ? this.layout.start() : this.chart.redraw()), s.inDragMode = s.hasDragged = !1, this.options.fixedDraggable || delete s.fixedPosition);
      }, redrawHalo: function(s) {
        s && this.halo && this.halo.attr({ d: s.haloPath(this.options.states.hover.halo.size) });
      } }, { setAnimation: va } = k(), { composed: Ma } = k(), { addEvent: _t, pushUnique: La } = k();
      function ka() {
        this.graphLayoutsLookup && (this.graphLayoutsLookup.forEach((s) => {
          s.updateSimulation();
        }), this.redraw());
      }
      function wa() {
        this.graphLayoutsLookup && (this.graphLayoutsLookup.forEach((s) => {
          s.updateSimulation(!1);
        }), this.redraw());
      }
      function Aa() {
        this.graphLayoutsLookup && this.graphLayoutsLookup.forEach((s) => {
          s.stop();
        });
      }
      function Sa() {
        let s, t = !1, e = (i) => {
          i.maxIterations-- && isFinite(i.temperature) && !i.isStable() && !i.enableSimulation && (i.beforeStep && i.beforeStep(), i.step(), s = !1, t = !0);
        };
        if (this.graphLayoutsLookup && !this.pointer?.hasDragged) {
          for (va(!1, this), this.graphLayoutsLookup.forEach((i) => i.start()); !s; ) s = !0, this.graphLayoutsLookup.forEach(e);
          t && this.series.forEach((i) => {
            i && i.layout && i.render();
          });
        }
      }
      let tt = { compose: function(s) {
        La(Ma, "GraphLayout") && (_t(s, "afterPrint", ka), _t(s, "beforePrint", wa), _t(s, "predraw", Aa), _t(s, "render", Sa));
      }, integrations: {}, layouts: {} };
      var Ta = z(960), Na = z.n(Ta);
      let { seriesTypes: { bubble: { prototype: { pointClass: Ca } } } } = R(), Xa = class extends Ca {
        destroy() {
          return this.series?.layout && this.series.layout.removeElementFromCollection(this, this.series.layout.nodes), mt().prototype.destroy.apply(this, arguments);
        }
        firePointEvent() {
          let s = this.series.options;
          if (this.isParentNode && s.parentNode) {
            let t = s.allowPointSelect;
            s.allowPointSelect = s.parentNode.allowPointSelect, mt().prototype.firePointEvent.apply(this, arguments), s.allowPointSelect = t;
          } else mt().prototype.firePointEvent.apply(this, arguments);
        }
        select() {
          let s = this.series.chart;
          this.isParentNode ? (s.getSelectedPoints = s.getSelectedParentNodes, mt().prototype.select.apply(this, arguments), s.getSelectedPoints = Na().prototype.getSelectedPoints) : mt().prototype.select.apply(this, arguments);
        }
        setState(s, t) {
          this?.graphic?.parentGroup?.element && super.setState(s, t);
        }
      }, { isNumber: Ya } = k(), li = { attractive: function(s, t, e) {
        let i = s.getMass(), a = -e.x * t * this.diffTemperature, r = -e.y * t * this.diffTemperature;
        s.fromNode.fixedPosition || (s.fromNode.plotX -= a * i.fromNode / s.fromNode.degree, s.fromNode.plotY -= r * i.fromNode / s.fromNode.degree), s.toNode.fixedPosition || (s.toNode.plotX += a * i.toNode / s.toNode.degree, s.toNode.plotY += r * i.toNode / s.toNode.degree);
      }, attractiveForceFunction: function(s, t) {
        return (t - s) / s;
      }, barycenter: function() {
        let s = this.options.gravitationalConstant || 0, t = (this.barycenter.xFactor - (this.box.left + this.box.width) / 2) * s, e = (this.barycenter.yFactor - (this.box.top + this.box.height) / 2) * s;
        this.nodes.forEach(function(i) {
          i.fixedPosition || (i.plotX -= t / i.mass / i.degree, i.plotY -= e / i.mass / i.degree);
        });
      }, getK: function(s) {
        return Math.pow(s.box.width * s.box.height / s.nodes.length, 0.5);
      }, integrate: function(s, t) {
        let e = -s.options.friction, i = s.options.maxSpeed, a = t.prevX, r = t.prevY, o = (t.plotX + t.dispX - a) * e, n = (t.plotY + t.dispY - r) * e, l = Math.abs, d = l(o) / (o || 1), p = l(n) / (n || 1), h = d * Math.min(i, Math.abs(o)), u = p * Math.min(i, Math.abs(n));
        t.prevX = t.plotX + t.dispX, t.prevY = t.plotY + t.dispY, t.plotX += h, t.plotY += u, t.temperature = s.vectorLength({ x: h, y: u });
      }, repulsive: function(s, t, e) {
        let i = t * this.diffTemperature / s.mass / s.degree;
        s.fixedPosition || (s.plotX += e.x * i, s.plotY += e.y * i);
      }, repulsiveForceFunction: function(s, t) {
        return (t - s) / s * (t > s);
      } }, { noop: Ia } = k(), Ra = { barycenter: function() {
        let s, t, e = this.options.gravitationalConstant || 0, i = this.box, a = this.nodes, r = Math.sqrt(a.length);
        for (let o of a) if (!o.fixedPosition) {
          let n = o.mass * r, l = o.plotX || 0, d = o.plotY || 0, p = o.series, h = p.parentNode;
          this.resolveSplitSeries(o) && h && !o.isParentNode ? (s = h.plotX || 0, t = h.plotY || 0) : (s = i.width / 2, t = i.height / 2), o.plotX = l - (l - s) * e / n, o.plotY = d - (d - t) * e / n, p.chart.hoverPoint === o && p.redrawHalo && p.halo && p.redrawHalo(o);
        }
      }, getK: Ia, integrate: li.integrate, repulsive: function(s, t, e, i) {
        let a = t * this.diffTemperature / s.mass / s.degree, r = e.x * a, o = e.y * a;
        s.fixedPosition || (s.plotX += r, s.plotY += o), i.fixedPosition || (i.plotX -= r, i.plotY -= o);
      }, repulsiveForceFunction: function(s, t, e, i) {
        return Math.min(s, (e.marker.radius + i.marker.radius) / 2);
      } }, Ea = { attractive: function(s, t, e, i) {
        let a = s.getMass(), r = e.x / i * t, o = e.y / i * t;
        s.fromNode.fixedPosition || (s.fromNode.dispX -= r * a.fromNode / s.fromNode.degree, s.fromNode.dispY -= o * a.fromNode / s.fromNode.degree), s.toNode.fixedPosition || (s.toNode.dispX += r * a.toNode / s.toNode.degree, s.toNode.dispY += o * a.toNode / s.toNode.degree);
      }, attractiveForceFunction: function(s, t) {
        return s * s / t;
      }, barycenter: function() {
        let s = this.options.gravitationalConstant, t = this.barycenter.xFactor, e = this.barycenter.yFactor;
        this.nodes.forEach(function(i) {
          if (!i.fixedPosition) {
            let a = i.getDegree(), r = a * (1 + a / 2);
            i.dispX += (t - i.plotX) * s * r / i.degree, i.dispY += (e - i.plotY) * s * r / i.degree;
          }
        });
      }, getK: function(s) {
        return Math.pow(s.box.width * s.box.height / s.nodes.length, 0.3);
      }, integrate: function(s, t) {
        t.dispX += t.dispX * s.options.friction, t.dispY += t.dispY * s.options.friction;
        let e = t.temperature = s.vectorLength({ x: t.dispX, y: t.dispY });
        e !== 0 && (t.plotX += t.dispX / e * Math.min(Math.abs(t.dispX), s.temperature), t.plotY += t.dispY / e * Math.min(Math.abs(t.dispY), s.temperature));
      }, repulsive: function(s, t, e, i) {
        s.dispX += e.x / i * t / s.degree, s.dispY += e.y / i * t / s.degree;
      }, repulsiveForceFunction: function(s, t) {
        return t * t / s;
      } };
      class xt {
        constructor(t) {
          this.body = !1, this.isEmpty = !1, this.isInternal = !1, this.nodes = [], this.box = t, this.boxSize = Math.min(t.width, t.height);
        }
        divideBox() {
          let t = this.box.width / 2, e = this.box.height / 2;
          this.nodes[0] = new xt({ left: this.box.left, top: this.box.top, width: t, height: e }), this.nodes[1] = new xt({ left: this.box.left + t, top: this.box.top, width: t, height: e }), this.nodes[2] = new xt({ left: this.box.left + t, top: this.box.top + e, width: t, height: e }), this.nodes[3] = new xt({ left: this.box.left, top: this.box.top + e, width: t, height: e });
        }
        getBoxPosition(t) {
          let e = t.plotX < this.box.left + this.box.width / 2, i = t.plotY < this.box.top + this.box.height / 2;
          return e ? 3 * !i : i ? 1 : 2;
        }
        insert(t, e) {
          let i;
          this.isInternal ? this.nodes[this.getBoxPosition(t)].insert(t, e - 1) : (this.isEmpty = !1, this.body ? e ? (this.isInternal = !0, this.divideBox(), this.body !== !0 && (this.nodes[this.getBoxPosition(this.body)].insert(this.body, e - 1), this.body = !0), this.nodes[this.getBoxPosition(t)].insert(t, e - 1)) : ((i = new xt({ top: t.plotX || NaN, left: t.plotY || NaN, width: 0.1, height: 0.1 })).body = t, i.isInternal = !1, this.nodes.push(i)) : (this.isInternal = !1, this.body = t));
        }
        updateMassAndCenter() {
          let t = 0, e = 0, i = 0;
          if (this.isInternal) {
            for (let a of this.nodes) a.isEmpty || (t += a.mass, e += a.plotX * a.mass, i += a.plotY * a.mass);
            e /= t, i /= t;
          } else this.body && (t = this.body.mass, e = this.body.plotX, i = this.body.plotY);
          this.mass = t, this.plotX = e, this.plotY = i;
        }
      }
      let za = class {
        constructor(s, t, e, i) {
          this.box = { left: s, top: t, width: e, height: i }, this.maxDepth = 25, this.root = new xt(this.box), this.root.isInternal = !0, this.root.isRoot = !0, this.root.divideBox();
        }
        calculateMassAndCenter() {
          this.visitNodeRecursive(null, null, function(s) {
            s.updateMassAndCenter();
          });
        }
        insertNodes(s) {
          for (let t of s) this.root.insert(t, this.maxDepth);
        }
        visitNodeRecursive(s, t, e) {
          let i;
          if (s || (s = this.root), s === this.root && t && (i = t(s)), i !== !1) {
            for (let a of s.nodes) {
              if (a.isInternal) {
                if (t && (i = t(a)), i === !1) continue;
                this.visitNodeRecursive(a, t, e);
              } else a.body && t && t(a.body);
              e && e(a);
            }
            s === this.root && e && e(s);
          }
        }
      }, { win: Me } = k(), { clamp: hi, defined: pi, isFunction: Oa, fireEvent: Da, pick: nt } = k();
      class Le {
        constructor() {
          this.box = {}, this.currentStep = 0, this.initialRendering = !0, this.links = [], this.nodes = [], this.series = [], this.simulation = !1;
        }
        static compose(t) {
          tt.compose(t), tt.integrations.euler = Ea, tt.integrations.verlet = li, tt.layouts["reingold-fruchterman"] = Le;
        }
        init(t) {
          this.options = t, this.nodes = [], this.links = [], this.series = [], this.box = { x: 0, y: 0, width: 0, height: 0 }, this.setInitialRendering(!0), this.integration = tt.integrations[t.integration], this.enableSimulation = t.enableSimulation, this.attractiveForce = nt(t.attractiveForce, this.integration.attractiveForceFunction), this.repulsiveForce = nt(t.repulsiveForce, this.integration.repulsiveForceFunction), this.approximation = t.approximation;
        }
        updateSimulation(t) {
          this.enableSimulation = nt(t, this.options.enableSimulation);
        }
        start() {
          let t = this.series, e = this.options;
          this.currentStep = 0, this.forces = t[0] && t[0].forces || [], this.chart = t[0] && t[0].chart, this.initialRendering && (this.initPositions(), t.forEach(function(i) {
            i.finishedAnimating = !0, i.render();
          })), this.setK(), this.resetSimulation(e), this.enableSimulation && this.step();
        }
        step() {
          let t = this.series;
          for (let e of (this.currentStep++, this.approximation === "barnes-hut" && (this.createQuadTree(), this.quadTree.calculateMassAndCenter()), this.forces || [])) this[e + "Forces"](this.temperature);
          if (this.applyLimits(), this.temperature = this.coolDown(this.startTemperature, this.diffTemperature, this.currentStep), this.prevSystemTemperature = this.systemTemperature, this.systemTemperature = this.getSystemTemperature(), this.enableSimulation) {
            for (let e of t) e.chart && e.render();
            this.maxIterations-- && isFinite(this.temperature) && !this.isStable() ? (this.simulation && Me.cancelAnimationFrame(this.simulation), this.simulation = Me.requestAnimationFrame(() => this.step())) : (this.simulation = !1, this.series.forEach((e) => {
              Da(e, "afterSimulation");
            }));
          }
        }
        stop() {
          this.simulation && Me.cancelAnimationFrame(this.simulation);
        }
        setArea(t, e, i, a) {
          this.box = { left: t, top: e, width: i, height: a };
        }
        setK() {
          this.k = this.options.linkLength || this.integration.getK(this);
        }
        addElementsToCollection(t, e) {
          for (let i of t) e.indexOf(i) === -1 && e.push(i);
        }
        removeElementFromCollection(t, e) {
          let i = e.indexOf(t);
          i !== -1 && e.splice(i, 1);
        }
        clear() {
          this.nodes.length = 0, this.links.length = 0, this.series.length = 0, this.resetSimulation();
        }
        resetSimulation() {
          this.forcedStop = !1, this.systemTemperature = 0, this.setMaxIterations(), this.setTemperature(), this.setDiffTemperature();
        }
        restartSimulation() {
          this.simulation ? this.resetSimulation() : (this.setInitialRendering(!1), this.enableSimulation ? this.start() : this.setMaxIterations(1), this.chart && this.chart.redraw(), this.setInitialRendering(!0));
        }
        setMaxIterations(t) {
          this.maxIterations = nt(t, this.options.maxIterations);
        }
        setTemperature() {
          this.temperature = this.startTemperature = Math.sqrt(this.nodes.length);
        }
        setDiffTemperature() {
          this.diffTemperature = this.startTemperature / (this.options.maxIterations + 1);
        }
        setInitialRendering(t) {
          this.initialRendering = t;
        }
        createQuadTree() {
          this.quadTree = new za(this.box.left, this.box.top, this.box.width, this.box.height), this.quadTree.insertNodes(this.nodes);
        }
        initPositions() {
          let t = this.options.initialPositions;
          if (Oa(t)) for (let e of (t.call(this), this.nodes)) pi(e.prevX) || (e.prevX = e.plotX), pi(e.prevY) || (e.prevY = e.plotY), e.dispX = 0, e.dispY = 0;
          else t === "circle" ? this.setCircularPositions() : this.setRandomPositions();
        }
        setCircularPositions() {
          let t, e = this.box, i = this.nodes, a = 2 * Math.PI / (i.length + 1), r = i.filter(function(p) {
            return p.linksTo.length === 0;
          }), o = {}, n = this.options.initialPositionRadius, l = (p) => {
            for (let h of p.linksFrom || []) o[h.toNode.id] || (o[h.toNode.id] = !0, d.push(h.toNode), l(h.toNode));
          }, d = [];
          for (let p of r) d.push(p), l(p);
          if (d.length) for (let p of i) d.indexOf(p) === -1 && d.push(p);
          else d = i;
          for (let p = 0, h = d.length; p < h; ++p) (t = d[p]).plotX = t.prevX = nt(t.plotX, e.width / 2 + n * Math.cos(p * a)), t.plotY = t.prevY = nt(t.plotY, e.height / 2 + n * Math.sin(p * a)), t.dispX = 0, t.dispY = 0;
        }
        setRandomPositions() {
          let t, e = this.box, i = this.nodes, a = i.length + 1, r = (o) => {
            let n = o * o / Math.PI;
            return n - Math.floor(n);
          };
          for (let o = 0, n = i.length; o < n; ++o) (t = i[o]).plotX = t.prevX = nt(t.plotX, e.width * r(o)), t.plotY = t.prevY = nt(t.plotY, e.height * r(a + o)), t.dispX = 0, t.dispY = 0;
        }
        force(t, ...e) {
          this.integration[t].apply(this, e);
        }
        barycenterForces() {
          this.getBarycenter(), this.force("barycenter");
        }
        getBarycenter() {
          let t = 0, e = 0, i = 0;
          for (let a of this.nodes) e += a.plotX * a.mass, i += a.plotY * a.mass, t += a.mass;
          return this.barycenter = { x: e, y: i, xFactor: e / t, yFactor: i / t }, this.barycenter;
        }
        barnesHutApproximation(t, e) {
          let i, a, r = this.getDistXY(t, e), o = this.vectorLength(r);
          return t !== e && o !== 0 && (e.isInternal ? e.boxSize / o < this.options.theta && o !== 0 ? (a = this.repulsiveForce(o, this.k), this.force("repulsive", t, a * e.mass, r, o), i = !1) : i = !0 : (a = this.repulsiveForce(o, this.k), this.force("repulsive", t, a * e.mass, r, o))), i;
        }
        repulsiveForces() {
          if (this.approximation === "barnes-hut") for (let t of this.nodes) this.quadTree.visitNodeRecursive(null, (e) => this.barnesHutApproximation(t, e));
          else {
            let t, e, i;
            for (let a of this.nodes) for (let r of this.nodes) a === r || a.fixedPosition || (i = this.getDistXY(a, r), (e = this.vectorLength(i)) !== 0 && (t = this.repulsiveForce(e, this.k), this.force("repulsive", a, t * r.mass, i, e)));
          }
        }
        attractiveForces() {
          let t, e, i;
          for (let a of this.links) a.fromNode && a.toNode && (t = this.getDistXY(a.fromNode, a.toNode), (e = this.vectorLength(t)) !== 0 && (i = this.attractiveForce(e, this.k), this.force("attractive", a, i, t, e)));
        }
        applyLimits() {
          for (let t of this.nodes) t.fixedPosition || (this.integration.integrate(this, t), this.applyLimitBox(t, this.box), t.dispX = 0, t.dispY = 0);
        }
        applyLimitBox(t, e) {
          let i = t.radius;
          t.plotX = hi(t.plotX, e.left + i, e.width - i), t.plotY = hi(t.plotY, e.top + i, e.height - i);
        }
        coolDown(t, e, i) {
          return t - e * i;
        }
        isStable() {
          return 1e-5 > Math.abs(this.systemTemperature - this.prevSystemTemperature) || this.temperature <= 0;
        }
        getSystemTemperature() {
          let t = 0;
          for (let e of this.nodes) t += e.temperature;
          return t;
        }
        vectorLength(t) {
          return Math.sqrt(t.x * t.x + t.y * t.y);
        }
        getDistR(t, e) {
          let i = this.getDistXY(t, e);
          return this.vectorLength(i);
        }
        getDistXY(t, e) {
          let i = t.plotX - e.plotX, a = t.plotY - e.plotY;
          return { x: i, y: a, absX: Math.abs(i), absY: Math.abs(a) };
        }
      }
      let di = Le, { addEvent: Ba, defined: Wa, pick: ci } = k();
      function Ha() {
        let s = this.series, t = [];
        return s.forEach((e) => {
          e.parentNode && e.parentNode.selected && t.push(e.parentNode);
        }), t;
      }
      function Fa() {
        this.allDataPoints && delete this.allDataPoints;
      }
      class jt extends di {
        constructor() {
          super(...arguments), this.index = NaN, this.nodes = [], this.series = [];
        }
        static compose(t) {
          di.compose(t), tt.integrations.packedbubble = Ra, tt.layouts.packedbubble = jt;
          let e = t.prototype;
          e.getSelectedParentNodes || (Ba(t, "beforeRedraw", Fa), e.getSelectedParentNodes = Ha), e.allParentNodes || (e.allParentNodes = []);
        }
        beforeStep() {
          this.options.marker && this.series.forEach((t) => {
            t && t.calculateParentRadius();
          });
        }
        isStable() {
          let t = Math.abs(this.prevSystemTemperature - this.systemTemperature);
          return 1 > Math.abs(10 * this.systemTemperature / Math.sqrt(this.nodes.length)) && t < 1e-5 || this.temperature <= 0;
        }
        setCircularPositions() {
          let t = this.box, e = [...this.nodes, ...this?.chart?.allParentNodes || []], i = 2 * Math.PI / (e.length + 1), a = this.options.initialPositionRadius, r, o, n = 0;
          for (let l of e) this.resolveSplitSeries(l) && !l.isParentNode ? (r = l.series.parentNode.plotX, o = l.series.parentNode.plotY) : (r = t.width / 2, o = t.height / 2), l.plotX = l.prevX = ci(l.plotX, r + a * Math.cos(l.index || n * i)), l.plotY = l.prevY = ci(l.plotY, o + a * Math.sin(l.index || n * i)), l.dispX = 0, l.dispY = 0, n++;
        }
        repulsiveForces() {
          let { options: t, k: e } = this, { bubblePadding: i = 0, seriesInteraction: a } = t, r = [...this.nodes, ...this?.chart?.allParentNodes || []];
          for (let o of r) {
            let n = o.series, l = o.fixedPosition, d = (o.marker?.radius || 0) + i;
            for (let p of (o.degree = o.mass, o.neighbours = 0, r)) {
              let h = p.series;
              if (o !== p && !l && (a || n === h) && !(n === h && (p.isParentNode || o.isParentNode))) {
                let u, c = this.getDistXY(o, p), m = this.vectorLength(c) - (d + (p.marker?.radius || 0));
                m < 0 && (o.degree += 0.01, u = this.repulsiveForce(-m / Math.sqrt(++o.neighbours), e, o, p) * p.mass), this.force("repulsive", o, u || 0, c, p, m);
              }
            }
          }
        }
        resolveSplitSeries(t) {
          let e = t.series?.options?.layoutAlgorithm?.splitSeries;
          return !Wa(e) && t.series.chart?.options?.plotOptions?.packedbubble?.layoutAlgorithm?.splitSeries || e || !1;
        }
        applyLimitBox(t, e) {
          let i, a;
          this.resolveSplitSeries(t) && !t.isParentNode && this.options.parentNodeLimit && (i = this.getDistXY(t, t.series.parentNode), (a = t.series.parentNodeRadius - t.marker.radius - this.vectorLength(i)) < 0 && a > -2 * t.marker.radius && (t.plotX -= 0.01 * i.x, t.plotY -= 0.01 * i.y)), super.applyLimitBox(t, e);
        }
      }
      tt.layouts.packedbubble = jt;
      let { merge: Ga, syncTimeout: qa } = k(), { animObject: Va } = k();
      var Ua = z(28), Ka = z.n(Ua);
      let { deg2rad: _a } = k(), { addEvent: ke, merge: ja, uniqueKey: Za, defined: ui, extend: $a } = k();
      function Qa(s, t) {
        t = ja(!0, { enabled: !0, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, t);
        let e = this.renderer.url, i = this.text || this, a = i.textPath, { attributes: r, enabled: o } = t;
        if (s = s || a && a.path, a && a.undo(), s && o) {
          let n = ke(i, "afterModifyTree", (l) => {
            if (s && o) {
              let d = s.attr("id");
              d || s.attr("id", d = Za());
              let p = { x: 0, y: 0 };
              ui(r.dx) && (p.dx = r.dx, delete r.dx), ui(r.dy) && (p.dy = r.dy, delete r.dy), i.attr(p), this.attr({ transform: "" }), this.box && (this.box = this.box.destroy());
              let h = l.nodes.slice(0);
              l.nodes.length = 0, l.nodes[0] = { tagName: "textPath", attributes: $a(r, { "text-anchor": r.textAnchor, href: `${e}#${d}` }), children: h };
            }
          });
          i.textPath = { path: s, undo: n };
        } else i.attr({ dx: 0, dy: 0 }), delete i.textPath;
        return this.added && (i.textCache = "", this.renderer.buildText(i)), this;
      }
      function Ja(s) {
        let t = s.bBox, e = this.element?.querySelector("textPath");
        if (e) {
          let i = [], { b: a, h: r } = this.renderer.fontMetrics(this.element), o = r - a, n = RegExp('(<tspan>|<tspan(?!\\sclass="highcharts-br")[^>]*>|<\\/tspan>)', "g"), l = e.innerHTML.replace(n, "").split(/<tspan class="highcharts-br"[^>]*>/), d = l.length, p = (h, u) => {
            let { x: c, y: m } = u, y = (e.getRotationOfChar(h) - 90) * _a, f = Math.cos(y), x = Math.sin(y);
            return [[c - o * f, m - o * x], [c + a * f, m + a * x]];
          };
          for (let h = 0, u = 0; u < d; u++) {
            let c = l[u].length;
            for (let m = 0; m < c; m += 5) try {
              let y = h + m + u, [f, x] = p(y, e.getStartPositionOfChar(y));
              m === 0 ? (i.push(x), i.push(f)) : (u === 0 && i.unshift(x), u === d - 1 && i.push(f));
            } catch {
              break;
            }
            h += c - 1;
            try {
              let m = h + u, y = e.getEndPositionOfChar(m), [f, x] = p(m, y);
              i.unshift(x), i.unshift(f);
            } catch {
              break;
            }
          }
          i.length && i.push(i[0].slice()), t.polygon = i;
        }
        return t;
      }
      function to(s) {
        let t = s.labelOptions, e = s.point, i = t[e.formatPrefix + "TextPath"] || t.textPath;
        i && !t.useHTML && (this.setTextPath(e.getDataLabelPath?.(this) || e.graphic, i), e.dataLabelPath && !i.enabled && (e.dataLabelPath = e.dataLabelPath.destroy()));
      }
      let { parse: gi } = ba(), { noop: fi } = k(), { series: { prototype: lt }, seriesTypes: { bubble: we } } = R(), { initDataLabels: eo, initDataLabelsDefer: io } = { initDataLabels: function() {
        let s = this.options.dataLabels;
        if (!this.dataLabelsGroup) {
          let t = this.initDataLabelsGroup();
          return !this.chart.styledMode && s?.style && t.css(s.style), t.attr({ opacity: 0 }), this.visible && (this.options.animation && s?.animation ? t.animate({ opacity: 1 }, s?.animation) : t.attr({ opacity: 1 }), t.show()), t;
        }
        return this.dataLabelsGroup.attr(Ga({ opacity: 1 }, this.getPlotBox("data-labels"))), this.dataLabelsGroup;
      }, initDataLabelsDefer: function() {
        let s = this.options.dataLabels;
        s?.defer && this.options.layoutAlgorithm?.enableSimulation ? qa(() => {
          this.deferDataLabels = !1;
        }, s ? Va(s.animation).defer : 0) : this.deferDataLabels = !1;
      } }, { addEvent: so, clamp: mi, defined: ht, extend: bi, fireEvent: ao, isArray: yi, isNumber: xi, merge: Et, pick: Zt } = k();
      ({ compose: function(s) {
        ke(s, "afterGetBBox", Ja), ke(s, "beforeAddingDataLabel", to);
        let t = s.prototype;
        t.setTextPath || (t.setTextPath = Qa);
      } }).compose(Ka());
      class $t extends we {
        constructor() {
          super(...arguments), this.parentNodeMass = 0, this.deferDataLabels = !0;
        }
        static compose(t, e, i) {
          we.compose(t, e, i), Rt.compose(e), jt.compose(e);
        }
        accumulateAllPoints() {
          let t = this.chart, e = [];
          for (let i of t.series) if (i.is("packedbubble") && i.reserveSpace()) {
            let a = i.getColumn("value");
            for (let r = 0; r < a.length; r++) e.push([null, null, a[r], i.index, r, { id: r, marker: { radius: 0 } }]);
          }
          return e;
        }
        addLayout() {
          let t = this.options.layoutAlgorithm = this.options.layoutAlgorithm || {}, e = t.type || "packedbubble", i = this.chart.options.chart, a = this.chart.graphLayoutsStorage, r = this.chart.graphLayoutsLookup, o;
          a || (this.chart.graphLayoutsStorage = a = {}, this.chart.graphLayoutsLookup = r = []), (o = a[e]) || (t.enableSimulation = ht(i.forExport) ? !i.forExport : t.enableSimulation, a[e] = o = new tt.layouts[e](), o.init(t), r.splice(o.index, 0, o)), this.layout = o, this.points.forEach((n) => {
            n.mass = 2, n.degree = 1, n.collisionNmb = 1;
          }), o.setArea(0, 0, this.chart.plotWidth, this.chart.plotHeight), o.addElementsToCollection([this], o.series), o.addElementsToCollection(this.points, o.nodes);
        }
        addSeriesLayout() {
          let t = this.options.layoutAlgorithm = this.options.layoutAlgorithm || {}, e = t.type || "packedbubble", i = this.chart.graphLayoutsStorage, a = this.chart.graphLayoutsLookup, r = Et(t, t.parentNodeOptions, { enableSimulation: this.layout.options.enableSimulation }), o = i[e + "-series"];
          o || (i[e + "-series"] = o = new tt.layouts[e](), o.init(r), a.splice(o.index, 0, o)), this.parentNodeLayout = o, this.createParentNodes();
        }
        calculateParentRadius() {
          let t = this.seriesBox();
          this.parentNodeRadius = mi(Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20, 20, t ? Math.max(Math.sqrt(Math.pow(t.width, 2) + Math.pow(t.height, 2)) / 2 + 20, 20) : Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20), this.parentNode && (this.parentNode.marker.radius = this.parentNode.radius = this.parentNodeRadius);
        }
        calculateZExtremes() {
          let t = this.chart.series, e = this.options.zMin, i = this.options.zMax, a = 1 / 0, r = -1 / 0;
          return e && i ? [e, i] : (t.forEach((o) => {
            o.getColumn("value").forEach((n) => {
              ht(n) && (n > r && (r = n), n < a && (a = n));
            });
          }), [e = Zt(e, a), i = Zt(i, r)]);
        }
        checkOverlap(t, e) {
          let i = t[0] - e[0], a = t[1] - e[1];
          return Math.sqrt(i * i + a * a) - Math.abs(t[2] + e[2]) < -1e-3;
        }
        createParentNodes() {
          let t = this.pointClass, e = this.chart, i = this.parentNodeLayout, a = this.layout.options, r, o = this.parentNode, n = { radius: this.parentNodeRadius, lineColor: this.color, fillColor: gi(this.color).brighten(0.4).get() };
          a.parentNodeOptions && (n = Et(a.parentNodeOptions.marker || {}, n)), this.parentNodeMass = 0, this.points.forEach((l) => {
            this.parentNodeMass += Math.PI * Math.pow(l.marker.radius, 2);
          }), this.calculateParentRadius(), i.nodes.forEach((l) => {
            l.seriesIndex === this.index && (r = !0);
          }), i.setArea(0, 0, e.plotWidth, e.plotHeight), r || (o || (o = new t(this, { mass: this.parentNodeRadius / 2, marker: n, dataLabels: { inside: !1 }, states: { normal: { marker: n }, hover: { marker: n } }, dataLabelOnNull: !0, degree: this.parentNodeRadius, isParentNode: !0, seriesIndex: this.index }), this.chart.allParentNodes.push(o)), this.parentNode && (o.plotX = this.parentNode.plotX, o.plotY = this.parentNode.plotY), this.parentNode = o, i.addElementsToCollection([this], i.series), i.addElementsToCollection([o], i.nodes));
        }
        deferLayout() {
          let t = this.options.layoutAlgorithm;
          this.visible && (this.addLayout(), t.splitSeries && this.addSeriesLayout());
        }
        destroy() {
          this.chart.graphLayoutsLookup && this.chart.graphLayoutsLookup.forEach((t) => {
            t.removeElementFromCollection(this, t.series);
          }, this), this.parentNode && this.parentNodeLayout && (this.parentNodeLayout.removeElementFromCollection(this.parentNode, this.parentNodeLayout.nodes), this.parentNode.dataLabel && (this.parentNode.dataLabel = this.parentNode.dataLabel.destroy())), lt.destroy.apply(this, arguments);
        }
        drawDataLabels() {
          !this.deferDataLabels && (lt.drawDataLabels.call(this, this.points), this.parentNode && (this.parentNode.formatPrefix = "parentNode", lt.drawDataLabels.call(this, [this.parentNode])));
        }
        drawGraph() {
          if (!this.layout || !this.layout.options.splitSeries) return;
          let t = this.chart, e = this.layout.options.parentNodeOptions.marker, i = { fill: e.fillColor || gi(this.color).brighten(0.4).get(), opacity: e.fillOpacity, stroke: e.lineColor || this.color, "stroke-width": Zt(e.lineWidth, this.options.lineWidth) }, a = {};
          this.parentNodesGroup = this.plotGroup("parentNodesGroup", "parentNode", this.visible ? "inherit" : "hidden", 0.1, t.seriesGroup), this.group?.attr({ zIndex: 2 }), this.calculateParentRadius(), this.parentNode && ht(this.parentNode.plotX) && ht(this.parentNode.plotY) && ht(this.parentNodeRadius) && (a = Et({ x: this.parentNode.plotX - this.parentNodeRadius, y: this.parentNode.plotY - this.parentNodeRadius, width: 2 * this.parentNodeRadius, height: 2 * this.parentNodeRadius }, i), this.parentNode.graphic || (this.graph = this.parentNode.graphic = t.renderer.symbol(i.symbol).add(this.parentNodesGroup)), this.parentNode.graphic.attr(a));
        }
        drawTracker() {
          let t, e = this.parentNode;
          super.drawTracker(), e && (t = yi(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : [], e.graphic && (e.graphic.element.point = e), t.forEach((i) => {
            (i.div || i.element).point = e;
          }));
        }
        getPointRadius() {
          let t, e, i, a, r = this.chart, o = r.plotWidth, n = r.plotHeight, l = this.options, d = l.useSimulation, p = Math.min(o, n), h = {}, u = [], c = r.allDataPoints || [], m = c.length;
          ["minSize", "maxSize"].forEach((f) => {
            let x = parseInt(l[f], 10), g = /%$/.test(l[f]);
            h[f] = g ? p * x / 100 : x * Math.sqrt(m);
          }), r.minRadius = t = h.minSize / Math.sqrt(m), r.maxRadius = e = h.maxSize / Math.sqrt(m);
          let y = d ? this.calculateZExtremes() : [t, e];
          c.forEach((f, x) => {
            i = d ? mi(f[2], y[0], y[1]) : f[2], (a = this.getRadius(y[0], y[1], t, e, i)) === 0 && (a = null), c[x][2] = a, u.push(a);
          }), this.radii = u;
        }
        init() {
          return lt.init.apply(this, arguments), io.call(this), this.eventsToUnbind.push(so(this, "updatedData", function() {
            this.chart.series.forEach((t) => {
              t.type === this.type && (t.isDirty = !0);
            }, this);
          })), this;
        }
        onMouseUp(t) {
          if (t.fixedPosition && !t.removed) {
            let e, i = this.layout, a = this.parentNodeLayout;
            !t.isParentNode && a && i.options.dragBetweenSeries && a.nodes.forEach((r) => {
              t && t.marker && r !== t.series.parentNode && (e = i.getDistXY(t, r), i.vectorLength(e) - r.marker.radius - t.marker.radius < 0 && (r.series.addPoint(Et(t.options, { plotX: t.plotX, plotY: t.plotY }), !1), i.removeElementFromCollection(t, i.nodes), t.remove()));
            }), Rt.onMouseUp.apply(this, arguments);
          }
        }
        placeBubbles(t) {
          let e = this.checkOverlap, i = this.positionBubble, a = [], r = 1, o = 0, n = 0, l, d = [], p, h = t.sort((u, c) => c[2] - u[2]);
          if (h.length) {
            if (a.push([[0, 0, h[0][2], h[0][3], h[0][4]]]), h.length > 1) for (a.push([[0, 0 - h[1][2] - h[0][2], h[1][2], h[1][3], h[1][4]]]), p = 2; p < h.length; p++) h[p][2] = h[p][2] || 1, e(l = i(a[r][o], a[r - 1][n], h[p]), a[r][0]) ? (a.push([]), n = 0, a[r + 1].push(i(a[r][o], a[r][0], h[p])), r++, o = 0) : r > 1 && a[r - 1][n + 1] && e(l, a[r - 1][n + 1]) ? (n++, a[r].push(i(a[r][o], a[r - 1][n], h[p])), o++) : (o++, a[r].push(l));
            this.chart.stages = a, this.chart.rawPositions = [].concat.apply([], a), this.resizeRadius(), d = this.chart.rawPositions;
          }
          return d;
        }
        pointAttribs(t, e) {
          let i = this.options, a = t && t.isParentNode, r = i.marker;
          a && i.layoutAlgorithm && i.layoutAlgorithm.parentNodeOptions && (r = i.layoutAlgorithm.parentNodeOptions.marker);
          let o = r.fillOpacity, n = lt.pointAttribs.call(this, t, e);
          return o !== 1 && (n["fill-opacity"] = o), n;
        }
        positionBubble(t, e, i) {
          let a = Math.asin, r = Math.acos, o = Math.pow, n = Math.abs, l = (0, Math.sqrt)(o(t[0] - e[0], 2) + o(t[1] - e[1], 2)), d = r((o(l, 2) + o(i[2] + e[2], 2) - o(i[2] + t[2], 2)) / (2 * (i[2] + e[2]) * l)), p = a(n(t[0] - e[0]) / l), h = (t[1] - e[1] < 0 ? 0 : Math.PI) + d + p * ((t[0] - e[0]) * (t[1] - e[1]) < 0 ? 1 : -1), u = Math.cos(h), c = Math.sin(h);
          return [e[0] + (e[2] + i[2]) * c, e[1] - (e[2] + i[2]) * u, i[2], i[3], i[4]];
        }
        render() {
          let t = [];
          lt.render.apply(this, arguments), !this.options.dataLabels.allowOverlap && (this.data.forEach((e) => {
            yi(e.dataLabels) && e.dataLabels.forEach((i) => {
              t.push(i);
            });
          }), this.options.useSimulation && this.chart.hideOverlappingLabels(t));
        }
        resizeRadius() {
          let t, e, i, a, r, o = this.chart, n = o.rawPositions, l = Math.min, d = Math.max, p = o.plotLeft, h = o.plotTop, u = o.plotHeight, c = o.plotWidth;
          for (let x of (t = i = Number.POSITIVE_INFINITY, e = a = Number.NEGATIVE_INFINITY, n)) r = x[2], t = l(t, x[0] - r), e = d(e, x[0] + r), i = l(i, x[1] - r), a = d(a, x[1] + r);
          let m = [e - t, a - i], y = [(c - p) / m[0], (u - h) / m[1]], f = l.apply([], y);
          if (Math.abs(f - 1) > 1e-10) {
            for (let x of n) x[2] *= f;
            this.placeBubbles(n);
          } else o.diffY = u / 2 + h - i - (a - i) / 2, o.diffX = c / 2 + p - t - (e - t) / 2;
        }
        seriesBox() {
          let t, e = this.chart, i = this.data, a = Math.max, r = Math.min, o = [e.plotLeft, e.plotLeft + e.plotWidth, e.plotTop, e.plotTop + e.plotHeight];
          return i.forEach((n) => {
            ht(n.plotX) && ht(n.plotY) && n.marker.radius && (t = n.marker.radius, o[0] = r(o[0], n.plotX - t), o[1] = a(o[1], n.plotX + t), o[2] = r(o[2], n.plotY - t), o[3] = a(o[3], n.plotY + t));
          }), xi(o.width / o.height) ? o : null;
        }
        setVisible() {
          let t = this;
          lt.setVisible.apply(t, arguments), t.parentNodeLayout && t.graph ? t.visible ? (t.graph.show(), t.parentNode.dataLabel && t.parentNode.dataLabel.show()) : (t.graph.hide(), t.parentNodeLayout.removeElementFromCollection(t.parentNode, t.parentNodeLayout.nodes), t.parentNode.dataLabel && t.parentNode.dataLabel.hide()) : t.layout && (t.visible ? t.layout.addElementsToCollection(t.points, t.layout.nodes) : t.points.forEach((e) => {
            t.layout.removeElementFromCollection(e, t.layout.nodes);
          }));
        }
        translate() {
          let t, e, i, a = this.chart, r = this.data, o = this.index, n = this.options.useSimulation;
          for (let l of (this.generatePoints(), ht(a.allDataPoints) || (a.allDataPoints = this.accumulateAllPoints(), this.getPointRadius()), n ? i = a.allDataPoints : (i = this.placeBubbles(a.allDataPoints), this.options.draggable = !1), i)) l[3] === o && (t = r[l[4]], e = Zt(l[2], void 0), n || (t.plotX = l[0] - a.plotLeft + a.diffX, t.plotY = l[1] - a.plotTop + a.diffY), xi(e) && (t.marker = bi(t.marker, { radius: e, width: 2 * e, height: 2 * e }), t.radius = e));
          n && this.deferLayout(), ao(this, "afterTranslate");
        }
      }
      $t.defaultOptions = Et(we.defaultOptions, { minSize: "10%", maxSize: "50%", sizeBy: "area", zoneAxis: "y", crisp: !1, tooltip: { pointFormat: "Value: {point.value}" }, draggable: !0, useSimulation: !0, parentNode: { allowPointSelect: !1 }, dataLabels: { formatter: function() {
        let { numberFormatter: s } = this.series.chart, { value: t } = this.point;
        return Ya(t) ? s(t, -1) : "";
      }, parentNodeFormatter: function() {
        return this.name || "";
      }, parentNodeTextPath: { enabled: !0 }, padding: 0, style: { transition: "opacity 2000ms" } }, layoutAlgorithm: { initialPositions: "circle", initialPositionRadius: 20, bubblePadding: 5, parentNodeLimit: !1, seriesInteraction: !0, dragBetweenSeries: !1, parentNodeOptions: { maxIterations: 400, gravitationalConstant: 0.03, maxSpeed: 50, initialPositionRadius: 100, seriesInteraction: !0, marker: { fillColor: null, fillOpacity: 1, lineWidth: null, lineColor: null, symbol: "circle" } }, enableSimulation: !0, type: "packedbubble", integration: "packedbubble", maxIterations: 1e3, splitSeries: !1, maxSpeed: 5, gravitationalConstant: 0.01, friction: -0.981 }, stickyTracking: !1 }), bi($t.prototype, { pointClass: Xa, axisTypes: [], directTouch: !0, forces: ["barycenter", "repulsive"], hasDraggableNodes: !0, invertible: !1, isCartesian: !1, noSharedTooltip: !0, pointArrayMap: ["value"], pointValKey: "value", requireSorting: !1, trackerGroups: ["group", "dataLabelsGroup", "parentNodesGroup"], initDataLabels: eo, alignDataLabel: lt.alignDataLabel, indexateNodes: fi, onMouseDown: Rt.onMouseDown, onMouseMove: Rt.onMouseMove, redrawHalo: Rt.redrawHalo, searchPoint: fi }), R().registerSeriesType("packedbubble", $t);
      let { noop: oo } = k(), { area: ro, line: Pi, scatter: vi } = R().seriesTypes, { extend: no, merge: lo } = k();
      class Ae extends vi {
        getGraphPath() {
          let t = Pi.prototype.getGraphPath.call(this), e = t.length + 1;
          for (; e--; ) (e === t.length || t[e][0] === "M") && e > 0 && t.splice(e, 0, ["Z"]);
          return this.areaPath = t, t;
        }
        drawGraph() {
          this.options.fillColor = this.color, ro.prototype.drawGraph.call(this);
        }
      }
      Ae.defaultOptions = lo(vi.defaultOptions, { marker: { enabled: !1, states: { hover: { enabled: !1 } } }, stickyTracking: !1, tooltip: { followPointer: !0, pointFormat: "" }, trackByArea: !0, legendSymbol: "rectangle" }), no(Ae.prototype, { type: "polygon", drawTracker: Pi.prototype.drawTracker, setStackedPoints: oo }), R().registerSeriesType("polygon", Ae);
      let { defaultOptions: rr } = k(), { noop: nr } = k(), { addEvent: lr, extend: hr, isObject: ho, merge: po, relativeLength: pr } = k(), co = { radius: 0, scope: "stack", where: void 0 };
      function uo(s, t) {
        return ho(s) || (s = { radius: s || 0 }), po(co, t, s);
      }
      let go = { circular: { gridLineWidth: 1, labels: { align: void 0, x: 0, y: void 0 }, maxPadding: 0, minPadding: 0, showLastLabel: !1, tickLength: 0 }, radial: { gridLineInterpolation: "circle", gridLineWidth: 1, labels: { align: "right", padding: 5, x: -3, y: -2 }, showLastLabel: !1, title: { x: 4, text: null, rotation: 90 } }, radialGauge: { endOnTick: !1, gridLineWidth: 0, labels: { align: "center", distance: -25, x: 0, y: void 0 }, lineWidth: 1, minorGridLineWidth: 0, minorTickInterval: "auto", minorTickLength: 10, minorTickPosition: "inside", minorTickWidth: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickPosition: "inside", tickWidth: 2, title: { rotation: 0, text: "" }, zIndex: 2 } }, { defaultOptions: wt } = k(), { composed: fo, noop: zt } = k(), { addEvent: pt, correctFloat: Mi, defined: Pt, extend: mo, fireEvent: bo, isObject: yo, merge: vt, pick: $, pushUnique: xo, relativeLength: Se, splat: Po, wrap: vo } = k();
      (function(s) {
        function t() {
          this.autoConnect = this.isCircular && $(this.userMax, this.options.max) === void 0 && Mi(this.endAngleRad - this.startAngleRad) === Mi(2 * Math.PI), !this.isCircular && this.chart.inverted && this.max++, this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0);
        }
        function e() {
          return () => {
            if (this.isRadial && this.tickPositions && this.options.labels && this.options.labels.allowOverlap !== !0) return this.tickPositions.map((b) => this.ticks[b]?.label).filter((b) => !!b);
          };
        }
        function i() {
          return zt;
        }
        function a(b, v, P) {
          let M = this.pane.center, N = b.value, A, S, I;
          return this.isCircular ? (Pt(N) ? b.point && (b.point.shapeArgs || {}).start && (N = this.chart.inverted ? this.translate(b.point.rectPlotY, !0) : b.point.x) : (S = b.chartX || 0, I = b.chartY || 0, N = this.translate(Math.atan2(I - P, S - v) - this.startAngleRad, !0)), S = (A = this.getPosition(N)).x, I = A.y) : (Pt(N) || (S = b.chartX, I = b.chartY), Pt(S) && Pt(I) && (P = M[1] + this.chart.plotTop, N = this.translate(Math.min(Math.sqrt(Math.pow(S - v, 2) + Math.pow(I - P, 2)), M[2] / 2) - M[3] / 2, !0))), [N, S || 0, I || 0];
        }
        function r(b, v, P) {
          let M = this.pane.center, N = this.chart, A = this.left || 0, S = this.top || 0, I, O = $(v, M[2] / 2 - this.offset), W;
          return P === void 0 && (P = this.horiz ? 0 : this.center && -this.center[3] / 2), P && (O += P), this.isCircular || v !== void 0 ? ((W = this.chart.renderer.symbols.arc(A + M[0], S + M[1], O, O, { start: this.startAngleRad, end: this.endAngleRad, open: !0, innerR: 0 })).xBounds = [A + M[0]], W.yBounds = [S + M[1] - O]) : (I = this.postTranslate(this.angleRad, O), W = [["M", this.center[0] + N.plotLeft, this.center[1] + N.plotTop], ["L", I.x, I.y]]), W;
        }
        function o() {
          this.constructor.prototype.getOffset.call(this), this.chart.axisOffset[this.side] = 0;
        }
        function n(b, v, P) {
          let M = this.chart, N = (q) => {
            if (typeof q == "string") {
              let Nt = parseInt(q, 10);
              return j.test(q) && (Nt = Nt * O / 100), Nt;
            }
            return q;
          }, A = this.center, S = this.startAngleRad, I = P.borderRadius, O = A[2] / 2, W = Math.min(this.offset, 0), V = this.left || 0, _ = this.top || 0, j = /%$/, E = this.isCircular, D = this.options.plotBands || [], F = D.indexOf(P), U, Q, K, ot, dt, G, rt = $(N(P.outerRadius), O), ct = N(P.innerRadius), Dt = $(N(P.thickness), 10), ut = !0, gt = !0;
          if (I && F > -1 && (D[F - 1] && D[F - 1].to === b && (ut = !1), D[F + 1] && D[F + 1].from === v && (gt = !1)), this.options.gridLineInterpolation === "polygon") G = this.getPlotLinePath({ value: b }).concat(this.getPlotLinePath({ value: v, reverse: !0 }));
          else {
            b = Math.max(b, this.min), v = Math.min(v, this.max);
            let q = this.translate(b), Nt = this.translate(v);
            E || (rt = q || 0, ct = Nt || 0), P.shape !== "circle" && E ? (U = S + (q || 0), Q = S + (Nt || 0)) : (U = -Math.PI / 2, Q = 1.5 * Math.PI, dt = !0), rt -= W, Dt -= W, G = M.renderer.symbols.arc(V + A[0], _ + A[1], rt, rt, { start: Math.min(U, Q), end: Math.max(U, Q), innerR: $(ct, rt - Dt), open: dt, borderRadius: I, brStart: ut, brEnd: gt }), E && (K = (Q + U) / 2, ot = V + A[0] + A[2] / 2 * Math.cos(K), G.xBounds = K > -Math.PI / 2 && K < Math.PI / 2 ? [ot, M.plotWidth] : [0, ot], G.yBounds = [_ + A[1] + A[2] / 2 * Math.sin(K)], G.yBounds[0] += K > -Math.PI && K < 0 || K > Math.PI ? -10 : 10);
          }
          return G;
        }
        function l(b) {
          let v = this.pane.center, P = this.chart, M = P.inverted, N = b.reverse, A = this.pane.options.background, S = A ? Po(A)[0] : {}, I = S.innerRadius || "0%", O = S.outerRadius || "100%", W = v[0] + P.plotLeft, V = v[1] + P.plotTop, _ = this.height, j = b.isCrosshair, E = v[3] / 2, D = b.value, F, U, Q, K, ot, dt, G, rt, ct, Dt = this.getPosition(D), ut = Dt.x, gt = Dt.y;
          if (j && (D = (rt = this.getCrosshairPosition(b, W, V))[0], ut = rt[1], gt = rt[2]), this.isCircular) U = Math.sqrt(Math.pow(ut - W, 2) + Math.pow(gt - V, 2)), Q = typeof I == "string" ? Se(I, 1) : I / U, K = typeof O == "string" ? Se(O, 1) : O / U, v && E && (Q < (F = E / U) && (Q = F), K < F && (K = F)), ct = [["M", W + Q * (ut - W), V - Q * (V - gt)], ["L", ut - (1 - K) * (ut - W), gt + (1 - K) * (V - gt)]];
          else if ((D = this.translate(D)) && (D < 0 || D > _) && (D = 0), this.options.gridLineInterpolation === "circle") ct = this.getLinePath(0, D, E);
          else if (ct = [], P[M ? "yAxis" : "xAxis"].forEach((q) => {
            q.pane === this.pane && (ot = q);
          }), ot) {
            G = ot.tickPositions, ot.autoConnect && (G = G.concat([G[0]])), N && (G = G.slice().reverse()), D && (D += E);
            for (let q = 0; q < G.length; q++) dt = ot.getPosition(G[q], D), ct.push(q ? ["L", dt.x, dt.y] : ["M", dt.x, dt.y]);
          }
          return ct;
        }
        function d(b, v) {
          let P = this.translate(b);
          return this.postTranslate(this.isCircular ? P : this.angleRad, $(this.isCircular ? v : P < 0 ? 0 : P, this.center[2] / 2) - this.offset);
        }
        function p() {
          let b = this.center, v = this.chart, P = this.options.title;
          return { x: v.plotLeft + b[0] + (P.x || 0), y: v.plotTop + b[1] - { high: 0.5, middle: 0.25, low: 0 }[P.align] * b[2] + (P.y || 0) };
        }
        function h(b) {
          b.beforeSetTickPositions = t, b.createLabelCollector = e, b.getCrosshairPosition = a, b.getLinePath = r, b.getOffset = o, b.getPlotBandPath = n, b.getPlotLinePath = l, b.getPosition = d, b.getTitlePosition = p, b.postTranslate = L, b.setAxisSize = C, b.setAxisTranslation = w, b.setOptions = Y;
        }
        function u() {
          let b = this.chart, v = this.options, P = b.angular && this.isXAxis, M = this.pane, N = M?.options;
          if (!P && M && (b.angular || b.polar)) {
            let A = 2 * Math.PI, S = ($(N.startAngle, 0) - 90) * Math.PI / 180, I = ($(N.endAngle, $(N.startAngle, 0) + 360) - 90) * Math.PI / 180;
            this.angleRad = (v.angle || 0) * Math.PI / 180, this.startAngleRad = S, this.endAngleRad = I, this.offset = v.offset || 0;
            let O = (S % A + A) % A, W = (I % A + A) % A;
            O > Math.PI && (O -= A), W > Math.PI && (W -= A), this.normalizedStartAngleRad = O, this.normalizedEndAngleRad = W;
          }
        }
        function c(b) {
          this.isRadial && (b.align = void 0, b.preventDefault());
        }
        function m() {
          if (this.chart?.labelCollectors) {
            let b = this.labelCollector ? this.chart.labelCollectors.indexOf(this.labelCollector) : -1;
            b >= 0 && this.chart.labelCollectors.splice(b, 1);
          }
        }
        function y(b) {
          let v, P = this.chart, M = P.angular, N = P.polar, A = this.isXAxis, S = this.coll, I = b.userOptions.pane || 0, O = this.pane = P.pane && P.pane[I];
          if (S === "colorAxis") {
            this.isRadial = !1;
            return;
          }
          M ? (M && A ? (this.isHidden = !0, this.createLabelCollector = i, this.getOffset = zt, this.redraw = X, this.render = X, this.setScale = zt, this.setCategories = zt, this.setTitle = zt) : h(this), v = !A) : N && (h(this), v = this.horiz), M || N ? (this.isRadial = !0, this.labelCollector || (this.labelCollector = this.createLabelCollector()), this.labelCollector && P.labelCollectors.push(this.labelCollector)) : this.isRadial = !1, O && v && (O.axis = this), this.isCircular = v;
        }
        function f() {
          this.isRadial && this.beforeSetTickPositions();
        }
        function x(b) {
          let v = this.label;
          if (!v) return;
          let P = this.axis, M = v.getBBox(), N = P.options.labels, A = (P.translate(this.pos) + P.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360, S = Math.round(A), I = Pt(N.y) ? 0 : -(0.3 * M.height), O = N.y, W, V = 20, _ = N.align, j = "end", E = S < 0 ? S + 360 : S, D = E, F = 0, U = 0;
          P.isRadial && (W = P.getPosition(this.pos, P.center[2] / 2 + Se($(N.distance, -25), P.center[2] / 2, -P.center[2] / 2)), N.rotation === "auto" ? v.attr({ rotation: A }) : Pt(O) || (O = P.chart.renderer.fontMetrics(v).b - M.height / 2), Pt(_) || (P.isCircular ? (M.width > P.len * P.tickInterval / (P.max - P.min) && (V = 0), _ = A > V && A < 180 - V ? "left" : A > 180 + V && A < 360 - V ? "right" : "center") : _ = "center", v.attr({ align: _ })), _ === "auto" && P.tickPositions.length === 2 && P.isCircular && (E > 90 && E < 180 ? E = 180 - E : E > 270 && E <= 360 && (E = 540 - E), D > 180 && D <= 360 && (D = 360 - D), (P.pane.options.startAngle === S || P.pane.options.startAngle === S + 360 || P.pane.options.startAngle === S - 360) && (j = "start"), _ = S >= -90 && S <= 90 || S >= -360 && S <= -270 || S >= 270 && S <= 360 ? j === "start" ? "right" : "left" : j === "start" ? "left" : "right", D > 70 && D < 110 && (_ = "center"), E < 15 || E >= 180 && E < 195 ? F = 0.3 * M.height : E >= 15 && E <= 35 ? F = j === "start" ? 0 : 0.75 * M.height : E >= 195 && E <= 215 ? F = j === "start" ? 0.75 * M.height : 0 : E > 35 && E <= 90 ? F = j === "start" ? -(0.25 * M.height) : M.height : E > 215 && E <= 270 && (F = j === "start" ? M.height : -(0.25 * M.height)), D < 15 ? U = j === "start" ? -(0.15 * M.height) : 0.15 * M.height : D > 165 && D <= 180 && (U = j === "start" ? 0.15 * M.height : -(0.15 * M.height)), v.attr({ align: _ }), v.translate(U, F + I)), b.pos.x = W.x + (N.x || 0), b.pos.y = W.y + (O || 0));
        }
        function g(b) {
          this.axis.getPosition && mo(b.pos, this.axis.getPosition(this.pos));
        }
        function T({ options: b }) {
          b.xAxis && vt(!0, s.radialDefaultOptions.circular, b.xAxis), b.yAxis && vt(!0, s.radialDefaultOptions.radialGauge, b.yAxis);
        }
        function L(b, v) {
          let P = this.chart, M = this.center;
          return b = this.startAngleRad + b, { x: P.plotLeft + M[0] + Math.cos(b) * v, y: P.plotTop + M[1] + Math.sin(b) * v };
        }
        function X() {
          this.isDirty = !1;
        }
        function C() {
          let b, v;
          this.constructor.prototype.setAxisSize.call(this), this.isRadial && (this.pane.updateCenter(this), b = this.center = this.pane.center.slice(), this.isCircular ? this.sector = this.endAngleRad - this.startAngleRad : (v = this.postTranslate(this.angleRad, b[3] / 2), b[0] = v.x - this.chart.plotLeft, b[1] = v.y - this.chart.plotTop), this.len = this.width = this.height = (b[2] - b[3]) * $(this.sector, 1) / 2);
        }
        function w() {
          this.constructor.prototype.setAxisTranslation.call(this), this.center && (this.isCircular ? this.transA = (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.transA = (this.center[2] - this.center[3]) / 2 / (this.max - this.min || 1), this.isXAxis ? this.minPixelPadding = this.transA * this.minPointOffset : this.minPixelPadding = 0);
        }
        function Y(b) {
          let { coll: v } = this, { angular: P, inverted: M, polar: N } = this.chart, A = {};
          P ? this.isXAxis || (A = vt(wt.yAxis, s.radialDefaultOptions.radialGauge)) : N && (A = this.horiz ? vt(wt.xAxis, s.radialDefaultOptions.circular) : vt(v === "xAxis" ? wt.xAxis : wt.yAxis, s.radialDefaultOptions.radial)), M && v === "yAxis" && (A.stackLabels = yo(wt.yAxis, !0) ? wt.yAxis.stackLabels : {}, A.reversedStacks = !0);
          let S = this.options = vt(A, b);
          S.plotBands || (S.plotBands = []), bo(this, "afterSetOptions");
        }
        function B(b, v, P, M, N, A, S) {
          let I, O = this.axis;
          return O.isRadial ? ["M", v, P, "L", (I = O.getPosition(this.pos, O.center[2] / 2 + M)).x, I.y] : b.call(this, v, P, M, N, A, S);
        }
        s.radialDefaultOptions = vt(go), s.compose = function(b, v) {
          return xo(fo, "Axis.Radial") && (pt(b, "afterInit", u), pt(b, "autoLabelAlign", c), pt(b, "destroy", m), pt(b, "init", y), pt(b, "initialAxisTranslation", f), pt(v, "afterGetLabelPosition", x), pt(v, "afterGetPosition", g), pt(k(), "setOptions", T), vo(v.prototype, "getMarkPath", B)), b;
        };
      })(oe || (oe = {}));
      let Li = oe, { animObject: Mo } = k(), { optionsToObject: Lo } = { optionsToObject: uo }, { defaultOptions: ko } = k(), { composed: wo } = k(), { addEvent: et, defined: Ot, find: Te, isNumber: st, isObject: Ao, merge: ki, pick: At, pushUnique: So, relativeLength: To, splat: wi, uniqueKey: No, wrap: at } = k();
      function Co() {
        (this.pane || []).forEach((s) => {
          s.render();
        });
      }
      function Xo(s) {
        let t = s.args[0].xAxis, e = s.args[0].yAxis, i = s.args[0].chart;
        t && e && (e.gridLineInterpolation === "polygon" ? (t.startOnTick = !0, t.endOnTick = !0) : t.gridLineInterpolation === "polygon" && i.inverted && (e.startOnTick = !0, e.endOnTick = !0));
      }
      function Yo() {
        this.pane || (this.pane = []), this.options.pane = wi(this.options.pane || {}), wi(this.userOptions.pane || {}).forEach((s) => {
          new Wt(s, this);
        }, this);
      }
      function Io(s) {
        let t = s.args.marker, e = this.chart.xAxis[0], i = this.chart.yAxis[0], a = this.chart.inverted, r = a ? i : e, o = a ? e : i;
        if (this.chart.polar) {
          s.preventDefault();
          let n = (t.attr ? t.attr("start") : t.start) - r.startAngleRad, l = t.attr ? t.attr("r") : t.r, d = (t.attr ? t.attr("end") : t.end) - r.startAngleRad, p = t.attr ? t.attr("innerR") : t.innerR;
          s.result.x = n + r.pos, s.result.width = d - n, s.result.y = o.len + o.pos - l, s.result.height = l - p;
        }
      }
      function Ro(s) {
        let t = this.chart;
        if (t.polar && t.hoverPane && t.hoverPane.axis) {
          s.preventDefault();
          let e = t.hoverPane.center, i = t.mouseDownX || 0, a = t.mouseDownY || 0, r = s.args.chartY, o = s.args.chartX, n = 2 * Math.PI, l = t.hoverPane.axis.startAngleRad, d = t.hoverPane.axis.endAngleRad, p = t.inverted ? t.xAxis[0] : t.yAxis[0], h = {}, u = "arc";
          if (h.x = e[0] + t.plotLeft, h.y = e[1] + t.plotTop, this.zoomHor) {
            let c = l > 0 ? d - l : Math.abs(l) + Math.abs(d), m = Math.atan2(a - t.plotTop - e[1], i - t.plotLeft - e[0]) - l, y = Math.atan2(r - t.plotTop - e[1], o - t.plotLeft - e[0]) - l;
            h.r = e[2] / 2, h.innerR = e[3] / 2, m <= 0 && (m += n), y <= 0 && (y += n), y < m && (y = [m, m = y][0]), c < n && l + y > d + (n - c) / 2 && (y = m, m = l <= 0 ? l : 0);
            let f = h.start = Math.max(m + l, l), x = h.end = Math.min(y + l, d);
            if (p.options.gridLineInterpolation === "polygon") {
              let g = t.hoverPane.axis, T = f - g.startAngleRad + g.pos, L = p.getPlotLinePath({ value: p.max }), X = g.toValue(T), C = g.toValue(T + (x - f));
              if (X < g.getExtremes().min) {
                let { min: w, max: Y } = g.getExtremes();
                X = Y - (w - X);
              }
              if (C < g.getExtremes().min) {
                let { min: w, max: Y } = g.getExtremes();
                C = Y - (w - C);
              }
              C < X && (C = [X, X = C][0]), (L = Ne(L, X, C, g)).push(["L", e[0] + t.plotLeft, t.plotTop + e[1]]), h.d = L, u = "path";
            }
          }
          if (this.zoomVert) {
            let c = t.inverted ? t.xAxis[0] : t.yAxis[0], m = Math.sqrt(Math.pow(i - t.plotLeft - e[0], 2) + Math.pow(a - t.plotTop - e[1], 2)), y = Math.sqrt(Math.pow(o - t.plotLeft - e[0], 2) + Math.pow(r - t.plotTop - e[1], 2));
            if (y < m && (m = [y, y = m][0]), y > e[2] / 2 && (y = e[2] / 2), m < e[3] / 2 && (m = e[3] / 2), this.zoomHor || (h.start = l, h.end = d), h.r = y, h.innerR = m, c.options.gridLineInterpolation === "polygon") {
              let f = c.toValue(c.len + c.pos - m), x = c.toValue(c.len + c.pos - y);
              h.d = c.getPlotLinePath({ value: x }).concat(c.getPlotLinePath({ value: f, reverse: !0 })), u = "path";
            }
          }
          if (this.zoomHor && this.zoomVert && p.options.gridLineInterpolation === "polygon") {
            let c = t.hoverPane.axis, m = h.start || 0, y = h.end || 0, f = m - c.startAngleRad + c.pos, x = c.toValue(f), g = c.toValue(f + (y - m));
            if (h.d instanceof Array) {
              let T = h.d.slice(0, h.d.length / 2), L = h.d.slice(h.d.length / 2, h.d.length);
              L = [...L].reverse();
              let X = t.hoverPane.axis;
              T = Ne(T, x, g, X), (L = Ne(L, x, g, X)) && (L[0][0] = "L"), L = [...L].reverse(), h.d = T.concat(L), u = "path";
            }
          }
          s.attrs = h, s.shapeType = u;
        }
      }
      function Eo() {
        let s = this.chart;
        s.polar && (this.polar = new Si(this), s.inverted && (this.isRadialSeries = !0, this.is("column") && (this.isRadialBar = !0)));
      }
      function zo() {
        let { chart: s, options: t, yAxis: e } = this;
        if (t.borderRadius && s.polar && s.inverted) {
          let i = ko.plotOptions?.[this.type]?.borderRadius, { scope: a, where: r = "end" } = Lo(t.borderRadius, Ao(i) ? i : {});
          for (let o of this.points) {
            let { shapeArgs: n } = o;
            if (o.shapeType === "arc" && n) {
              let l = r === "all", d = !0;
              t.stacking && a === "stack" && (l = o.stackY === o.y && r === "all", d = o.stackY === o.stackTotal), e.reversed && ([l, d] = [d, l]), n.brStart = l, n.brEnd = d;
            }
          }
        }
      }
      function Oo() {
        if (this.chart.polar && this.xAxis) {
          let { xAxis: s, yAxis: t } = this, e = this.chart;
          this.kdByAngle = e.tooltip && e.tooltip.shared, this.kdByAngle || e.inverted ? this.searchPoint = Do : this.options.findNearestPointBy = "xy";
          let i = this.points, a = i.length;
          for (; a--; ) this.is("column") || this.is("columnrange") || this.polar.toXY(i[a]), e.hasParallelCoordinates || this.yAxis.reversed || (At(i[a].y, Number.MIN_VALUE) < t.min || i[a].x < s.min || i[a].x > s.max ? (i[a].isNull = !0, i[a].plotY = NaN) : i[a].isNull = i[a].isValid && !i[a].isValid());
          this.hasClipCircleSetter || (this.hasClipCircleSetter = !!this.eventsToUnbind.push(et(this, "afterRender", function() {
            let r;
            e.polar && this.options.clip !== !1 && (r = this.yAxis.pane.center, this.clipCircle ? this.clipCircle.animate({ x: r[0], y: r[1], r: r[2] / 2, innerR: r[3] / 2 }) : this.clipCircle = (function(o, n, l, d, p) {
              let h = No(), u = o.createElement("clipPath").attr({ id: h }).add(o.defs), c = p ? o.arc(n, l, d, p, 0, 2 * Math.PI).add(u) : o.circle(n, l, d).add(u);
              return c.id = h, c.clipPath = u, c;
            })(e.renderer, r[0], r[1], r[2] / 2, r[3] / 2), this.group.clip(this.clipCircle), this.setClip = k().noop);
          })));
        }
      }
      function Do(s) {
        let t = this.chart, e = this.xAxis, i = this.yAxis, a = e.pane && e.pane.center, r = s.chartX - (a && a[0] || 0) - t.plotLeft, o = s.chartY - (a && a[1] || 0) - t.plotTop, n = t.inverted ? { clientX: s.chartX - i.pos, plotY: s.chartY - e.pos } : { clientX: 180 + -180 / Math.PI * Math.atan2(r, o) };
        return this.searchKDTree(n);
      }
      function Ne(s, t, e, i) {
        let a = i.tickInterval, r = i.tickPositions, o = Te(r, (l) => l >= e), n = Te([...r].reverse(), (l) => l <= t);
        return Ot(o) || (o = r[r.length - 1]), Ot(n) || (n = r[0], o += a, s[0][0] = "L", s.unshift(s[s.length - 3])), (s = s.slice(r.indexOf(n), r.indexOf(o) + 1))[0][0] = "M", s;
      }
      function Bo(s, t) {
        return Te(this.pane || [], (e) => e.options.id === t) || s.call(this, t);
      }
      function Wo(s, t, e, i, a, r) {
        let o, n, l, d = this.chart, p = At(i.inside, !!this.options.stacking);
        if (d.polar) {
          if (o = t.rectPlotX / Math.PI * 180, d.inverted) this.forceDL = d.isInsidePlot(t.plotX, t.plotY), p && t.shapeArgs ? (n = t.shapeArgs, a = ki(a, { x: (l = this.yAxis.postTranslate(((n.start || 0) + (n.end || 0)) / 2 - this.xAxis.startAngleRad, t.barX + t.pointWidth / 2)).x - d.plotLeft, y: l.y - d.plotTop })) : t.tooltipPos && (a = ki(a, { x: t.tooltipPos[0], y: t.tooltipPos[1] })), i.align = At(i.align, "center"), i.verticalAlign = At(i.verticalAlign, "middle");
          else {
            var h;
            (h = i).align === null && (h.align = o > 20 && o < 160 ? "left" : o > 200 && o < 340 ? "right" : "center"), h.verticalAlign === null && (h.verticalAlign = o < 45 || o > 315 ? "bottom" : o > 135 && o < 225 ? "top" : "middle"), i = h;
          }
          Ie().prototype.alignDataLabel.call(this, t, e, i, a, r), this.isRadialBar && t.shapeArgs && t.shapeArgs.start === t.shapeArgs.end ? e.hide() : e.show();
        } else s.call(this, t, e, i, a, r);
      }
      function Ho() {
        let s = this.options, t = s.stacking, e = this.chart, i = this.xAxis, a = this.yAxis, r = a.reversed, o = a.center, n = i.startAngleRad, l = i.endAngleRad - n, d = s.threshold, p = 0, h, u, c, m, y, f = 0, x = 0, g, T, L, X, C, w, Y, B;
        if (i.isRadial) for (c = (h = this.points).length, m = a.translate(a.min), y = a.translate(a.max), d = s.threshold || 0, e.inverted && st(d) && Ot(p = a.translate(d)) && (p < 0 ? p = 0 : p > l && (p = l), this.translatedThreshold = p + n); c--; ) {
          if (w = (u = h[c]).barX, T = u.x, L = u.y, u.shapeType = "arc", e.inverted) {
            u.plotY = a.translate(L), t && a.stacking ? (C = a.stacking.stacks[(L < 0 ? "-" : "") + this.stackKey], this.visible && C && C[T] && !u.isNull && (X = C[T].points[this.getStackIndicator(void 0, T, this.index).key], f = a.translate(X[0]), x = a.translate(X[1]), Ot(f) && (f = k().clamp(f, 0, l)))) : (f = p, x = u.plotY), f > x && (x = [f, f = x][0]), r ? x > m ? x = m : f < y ? f = y : (f > m || x < y) && (f = x = l) : f < m ? f = m : x > y ? x = y : (x < m || f > y) && (f = x = 0), a.min > a.max && (f = x = r ? l : 0), f += n, x += n, o && (u.barX = w += o[3] / 2), Y = Math.max(w, 0), B = Math.max(w + u.pointWidth, 0);
            let b = s.borderRadius, v = To((typeof b == "object" ? b.radius : b) || 0, B - Y);
            u.shapeArgs = { x: o[0], y: o[1], r: B, innerR: Y, start: f, end: x, borderRadius: v }, u.opacity = f === x ? 0 : void 0, u.plotY = (Ot(this.translatedThreshold) && (f < this.translatedThreshold ? f : x)) - n;
          } else f = w + n, u.shapeArgs = this.polar.arc(u.yBottom, u.plotY, f, f + u.pointWidth), u.shapeArgs.borderRadius = 0;
          this.polar.toXY(u), e.inverted ? (g = a.postTranslate(u.rectPlotY, w + u.pointWidth / 2), u.tooltipPos = [g.x - e.plotLeft, g.y - e.plotTop]) : u.tooltipPos = [u.plotX, u.plotY], o && (u.ttBelow = u.plotY > o[1]);
        }
      }
      function Fo(s, t) {
        let e, i, a = this;
        if (this.chart.polar) {
          t = t || this.points;
          for (let o = 0; o < t.length; o++) if (!t[o].isNull) {
            e = o;
            break;
          }
          this.options.connectEnds !== !1 && e !== void 0 && (this.connectEnds = !0, t.splice(t.length, 0, t[e]), i = !0), t.forEach((o) => {
            o.polarPlotY === void 0 && a.polar.toXY(o);
          });
        }
        let r = s.apply(this, [].slice.call(arguments, 1));
        return i && t.pop(), r;
      }
      function Go(s, t) {
        let e = this.chart, i = { xAxis: [], yAxis: [] };
        return e.polar ? e.axes.forEach((a) => {
          if (a.coll === "colorAxis") return;
          let r = a.isXAxis, o = a.center, n = t.chartX - o[0] - e.plotLeft, l = t.chartY - o[1] - e.plotTop;
          i[r ? "xAxis" : "yAxis"].push({ axis: a, value: a.translate(r ? Math.PI - Math.atan2(n, l) : Math.sqrt(Math.pow(n, 2) + Math.pow(l, 2)), !0) });
        }) : i = s.call(this, t), i;
      }
      function qo(s, t) {
        this.chart.polar || s.call(this, t);
      }
      function Ai(s, t) {
        let e = this, i = this.chart, a = this.group, r = this.markerGroup, o = this.xAxis && this.xAxis.center, n = i.plotLeft, l = i.plotTop, d = this.options.animation, p, h, u, c, m, y;
        i.polar ? e.isRadialBar ? t || (e.startAngleRad = At(e.translatedThreshold, e.xAxis.startAngleRad), k().seriesTypes.pie.prototype.animate.call(e, t)) : (d = Mo(d), e.is("column") ? t || (h = o[3] / 2, e.points.forEach((f) => {
          u = f.graphic, m = (c = f.shapeArgs) && c.r, y = c && c.innerR, u && c && (u.attr({ r: h, innerR: h }), u.animate({ r: m, innerR: y }, e.options.animation));
        })) : t ? (p = { translateX: o[0] + n, translateY: o[1] + l, scaleX: 1e-3, scaleY: 1e-3 }, a.attr(p), r && r.attr(p)) : (p = { translateX: n, translateY: l, scaleX: 1, scaleY: 1 }, a.animate(p, d), r && r.animate(p, d))) : s.call(this, t);
      }
      function Vo(s, t, e, i) {
        let a, r;
        if (this.chart.polar) if (i) {
          let o = (r = (function l(d, p, h, u) {
            let c, m, y, f, x, g, T = +!!u, L = (c = p >= 0 && p <= d.length - 1 ? p : p < 0 ? d.length - 1 + p : 0) - 1 < 0 ? d.length - (1 + T) : c - 1, X = c + 1 > d.length - 1 ? T : c + 1, C = d[L], w = d[X], Y = C.plotX, B = C.plotY, b = w.plotX, v = w.plotY, P = d[c].plotX, M = d[c].plotY;
            m = (1.5 * P + Y) / 2.5, y = (1.5 * M + B) / 2.5, f = (1.5 * P + b) / 2.5, x = (1.5 * M + v) / 2.5;
            let N = Math.sqrt(Math.pow(m - P, 2) + Math.pow(y - M, 2)), A = Math.sqrt(Math.pow(f - P, 2) + Math.pow(x - M, 2)), S = Math.atan2(y - M, m - P);
            g = Math.PI / 2 + (S + Math.atan2(x - M, f - P)) / 2, Math.abs(S - g) > Math.PI / 2 && (g -= Math.PI), m = P + Math.cos(g) * N, y = M + Math.sin(g) * N;
            let I = { rightContX: f = P + Math.cos(Math.PI + g) * A, rightContY: x = M + Math.sin(Math.PI + g) * A, leftContX: m, leftContY: y, plotX: P, plotY: M };
            return h && (I.prevPointCont = l(d, L, !1, u)), I;
          })(t, i, !0, this.connectEnds)).prevPointCont && r.prevPointCont.rightContX, n = r.prevPointCont && r.prevPointCont.rightContY;
          a = ["C", st(o) ? o : r.plotX, st(n) ? n : r.plotY, st(r.leftContX) ? r.leftContX : r.plotX, st(r.leftContY) ? r.leftContY : r.plotY, r.plotX, r.plotY];
        } else a = ["M", e.plotX, e.plotY];
        else a = s.call(this, t, e, i);
        return a;
      }
      function Uo(s, t, e = this.plotY) {
        if (!this.destroyed) {
          let { plotX: i, series: a } = this, { chart: r } = a;
          return r.polar && st(i) && st(e) ? [i + (t ? r.plotLeft : 0), e + (t ? r.plotTop : 0)] : s.call(this, t, e);
        }
      }
      class Si {
        static compose(t, e, i, a, r, o, n, l, d, p) {
          if (Wt.compose(e, i), Li.compose(t, r), So(wo, "Polar")) {
            let h = e.prototype, u = o.prototype, c = i.prototype, m = a.prototype;
            if (et(e, "afterDrawChartBox", Co), et(e, "createAxes", Yo), et(e, "init", Xo), at(h, "get", Bo), at(c, "getCoordinates", Go), at(c, "pinch", qo), et(i, "getSelectionMarkerAttrs", Ro), et(i, "getSelectionBox", Io), et(a, "afterInit", Eo), et(a, "afterColumnTranslate", zo, { order: 9 }), et(a, "afterTranslate", Oo, { order: 2 }), et(a, "afterColumnTranslate", Ho, { order: 4 }), at(m, "animate", Ai), at(u, "pos", Uo), l) {
              let y = l.prototype;
              at(y, "alignDataLabel", Wo), at(y, "animate", Ai);
            }
            if (d && at(d.prototype, "getGraphPath", Fo), p) {
              let y = p.prototype;
              at(y, "getPointSpline", Vo), n && (n.prototype.getPointSpline = y.getPointSpline);
            }
          }
        }
        constructor(t) {
          this.series = t;
        }
        arc(t, e, i, a) {
          let r = this.series, o = r.xAxis.center, n = r.yAxis.len, l = o[3] / 2, d = n - e + l, p = n - At(t, n) + l;
          return r.yAxis.reversed && (d < 0 && (d = l), p < 0 && (p = l)), { x: o[0], y: o[1], r: d, innerR: p, start: i, end: a };
        }
        toXY(t) {
          let e = this.series, i = e.chart, a = e.xAxis, r = e.yAxis, o = t.plotX, n = i.inverted, l = t.y, d = t.plotY, p = n ? o : r.len - d, h;
          if (n && e && !e.isRadialBar && (t.plotY = d = st(l) ? r.translate(l) : 0), t.rectPlotX = o, t.rectPlotY = d, r.center && (p += r.center[3] / 2), st(d)) {
            let u = n ? r.postTranslate(d, p) : a.postTranslate(o, p);
            t.plotX = t.polarPlotX = u.x - i.plotLeft, t.plotY = t.polarPlotY = u.y - i.plotTop;
          }
          e.kdByAngle ? ((h = (o / Math.PI * 180 + a.pane.options.startAngle) % 360) < 0 && (h += 360), t.clientX = h) : t.clientX = t.plotX;
        }
      }
      var Ko = z(184), Ti = z.n(Ko);
      let { composed: _o } = k(), { addEvent: Qt, objectEach: Ni, pushUnique: jo } = k();
      (function(s) {
        function t() {
          let o = this.waterfall?.stacks;
          o && (o.changed = !1, delete o.alreadyChanged);
        }
        function e() {
          this.options.stackLabels?.enabled && this.waterfall?.stacks && this.waterfall.renderStackTotals();
        }
        function i() {
          this.waterfall || (this.waterfall = new r(this));
        }
        function a() {
          let o = this.axes;
          for (let n of this.series) if (n.options.stacking) {
            for (let l of o) !l.isXAxis && l.waterfall && (l.waterfall.stacks.changed = !0);
            break;
          }
        }
        s.compose = function(o, n) {
          jo(_o, "Axis.Waterfall") && (Qt(o, "init", i), Qt(o, "afterBuildStacks", t), Qt(o, "afterRender", e), Qt(n, "beforeRedraw", a));
        };
        class r {
          constructor(n) {
            this.axis = n, this.stacks = { changed: !1 };
          }
          renderStackTotals() {
            let n = this.axis, l = n.waterfall?.stacks, d = n.stacking?.stackTotalGroup, p = new (Ti())(n, n.options.stackLabels || {}, !1, 0, void 0);
            this.dummyStackItem = p, d && Ni(l, (h) => {
              Ni(h, (u, c) => {
                p.total = u.stackTotal, p.x = +c, u.label && (p.label = u.label), Ti().prototype.render.call(p, d), u.label = p.label, delete p.label;
              });
            }), p.total = null;
          }
        }
        s.Composition = r;
      })(re || (re = {}));
      let Zo = re, { isNumber: $o } = k();
      class Qo extends Gt().prototype.pointClass {
        getClassName() {
          let t = mt().prototype.getClassName.call(this);
          return this.isSum ? t += " highcharts-sum" : this.isIntermediateSum && (t += " highcharts-intermediate-sum"), t;
        }
        isValid() {
          return $o(this.y) || this.isSum || !!this.isIntermediateSum;
        }
      }
      let { column: Jt, line: Jo } = R().seriesTypes, { addEvent: tr, arrayMax: Ci, arrayMin: Xi, correctFloat: Ce, crisp: te, extend: Yi, isNumber: St, merge: Ii, objectEach: Ri, pick: er } = k();
      function ee(s, t) {
        return Object.hasOwnProperty.call(s, t);
      }
      class Tt extends Jt {
        generatePoints() {
          Jt.prototype.generatePoints.apply(this);
          let t = this.getColumn("y", !0);
          for (let e = 0, i = this.points.length; e < i; e++) {
            let a = this.points[e], r = t[e];
            St(r) && (a.isIntermediateSum || a.isSum) && (a.y = Ce(r));
          }
        }
        processData(t) {
          let e, i, a, r, o, n, l = this.options, d = this.getColumn("y"), p = l.data, h = d.length, u = l.threshold || 0;
          a = i = r = o = 0;
          for (let c = 0; c < h; c++) n = d[c], e = p?.[c] || {}, n === "sum" || e.isSum ? d[c] = Ce(a) : n === "intermediateSum" || e.isIntermediateSum ? (d[c] = Ce(i), i = 0) : (a += n, i += n), r = Math.min(a, r), o = Math.max(a, o);
          super.processData.call(this, t), l.stacking || (this.dataMin = r + u, this.dataMax = o);
        }
        toYData(t) {
          return t.isSum ? "sum" : t.isIntermediateSum ? "intermediateSum" : t.y;
        }
        pointAttribs(t, e) {
          let i = this.options.upColor;
          i && !t.options.color && St(t.y) && (t.color = t.y > 0 ? i : void 0);
          let a = Jt.prototype.pointAttribs.call(this, t, e);
          return delete a.dashstyle, a;
        }
        getGraphPath() {
          return this.graph?.pathArray || [["M", 0, 0]];
        }
        getCrispPath() {
          let t = this.points.filter((d) => St(d.y)), e = this.yAxis, i = t.length, a = this.graph?.strokeWidth() || 0, r = this.xAxis.reversed, o = this.yAxis.reversed, n = this.options.stacking, l = [];
          for (let d = 1; d < i; d++) {
            if (!(this.options.connectNulls || St(this.data[t[d].index - 1].y))) continue;
            let p = t[d].box, h = t[d - 1], u = h.y || 0, c = t[d - 1].box;
            if (!p || !c) continue;
            let m = e.waterfall?.stacks[this.stackKey], y = u > 0 ? -c.height : 0;
            if (m && c && p) {
              let f, x = m[d - 1];
              f = te(n ? e.translate(x.connectorThreshold || 0, !1, !0, !1, !0) + (o ? y : 0) : c.y + (h.minPointLengthOffset || 0), a), l.push(["M", (c.x || 0) + (r ? 0 : c.width || 0), f], ["L", (p.x || 0) + (r && p.width || 0), f]);
            }
            if (c && l.length && (!n && u < 0 && !o || u > 0 && o)) {
              let f = l[l.length - 2];
              f && typeof f[2] == "number" && (f[2] += c.height || 0);
              let x = l[l.length - 1];
              x && typeof x[2] == "number" && (x[2] += c.height || 0);
            }
          }
          return l;
        }
        drawGraph() {
          Jo.prototype.drawGraph.call(this), this.graph?.animate({ d: this.getCrispPath() });
        }
        setStackedPoints(t) {
          let e = this.options, i = t.waterfall?.stacks, a = e.threshold || 0, r = this.stackKey, o = this.getColumn("x"), n = this.getColumn("y"), l = o.length, d = a, p = d, h, u = 0, c = 0, m = 0, y, f, x, g, T, L, X, C, w = (Y, B, b, v) => {
            if (h) {
              if (y) for (; b < y; b++) h.stackState[b] += v;
              else h.stackState[0] = Y, y = h.stackState.length;
              h.stackState.push(h.stackState[y - 1] + B);
            }
          };
          if (t.stacking && i && this.reserveSpace()) {
            C = i.changed, (X = i.alreadyChanged) && 0 > X.indexOf(r) && (C = !0), i[r] || (i[r] = {});
            let Y = i[r];
            if (Y) for (let B = 0; B < l; B++) (!Y[L = o[B]] || C) && (Y[L] = { negTotal: 0, posTotal: 0, stackTotal: 0, threshold: 0, stateIndex: 0, stackState: [], label: C && Y[L] ? Y[L].label : void 0 }), h = Y[L], (T = n[B]) >= 0 ? h.posTotal += T : h.negTotal += T, g = e.data[B], f = h.absolutePos = h.posTotal, x = h.absoluteNeg = h.negTotal, h.stackTotal = f + x, y = h.stackState.length, g?.isIntermediateSum ? (w(m, c, 0, m), m = c, c = a, d ^= p, p ^= d, d ^= p) : g?.isSum ? (w(a, u, y, 0), d = a) : (w(d, T, 0, u), g && (u += T, c += T)), h.stateIndex++, h.threshold = d, d += h.stackTotal;
            i.changed = !1, i.alreadyChanged || (i.alreadyChanged = []), i.alreadyChanged.push(r);
          }
        }
        getExtremes() {
          let t, e, i = this.options.stacking, a = this.yAxis, r = a.waterfall?.stacks;
          return i && r ? (t = this.stackedYNeg = [], e = this.stackedYPos = [], i === "overlap" ? Ri(r[this.stackKey], function(o) {
            t.push(Xi(o.stackState)), e.push(Ci(o.stackState));
          }) : Ri(r[this.stackKey], function(o) {
            t.push(o.negTotal + o.threshold), e.push(o.posTotal + o.threshold);
          }), { dataMin: Xi(t), dataMax: Ci(e) }) : { dataMin: this.dataMin, dataMax: this.dataMax };
        }
      }
      Tt.defaultOptions = Ii(Jt.defaultOptions, { dataLabels: { inside: !0 }, lineWidth: 1, lineColor: "#333333", dashStyle: "Dot", borderColor: "#333333", states: { hover: { lineWidthPlus: 0 } } }), Tt.compose = Zo.compose, Yi(Tt.prototype, { pointValKey: "y", showLine: !0, pointClass: Qo }), tr(Tt, "afterColumnTranslate", function() {
        let { options: s, points: t, yAxis: e } = this, i = er(s.minPointLength, 5), a = i / 2, r = s.threshold || 0, o = s.stacking, n = e.waterfall?.stacks[this.stackKey], l = this.getColumn("y", !0), d = r, p = r, h, u, c, m;
        for (let y = 0; y < t.length; y++) {
          let f = t[y], x = l[y], g = Yi({ x: 0, y: 0, width: 0, height: 0 }, f.shapeArgs || {});
          f.box = g;
          let T = [0, x], L = f.y || 0;
          if (o) {
            if (n) {
              let w = n[y];
              o === "overlap" ? (u = w.stackState[w.stateIndex--], h = L >= 0 ? u : u - L, ee(w, "absolutePos") && delete w.absolutePos, ee(w, "absoluteNeg") && delete w.absoluteNeg) : (L >= 0 ? (u = w.threshold + w.posTotal, w.posTotal -= L, h = u) : (u = w.threshold + w.negTotal, w.negTotal -= L, h = u - L), !w.posTotal && St(w.absolutePos) && ee(w, "absolutePos") && (w.posTotal = w.absolutePos, delete w.absolutePos), !w.negTotal && St(w.absoluteNeg) && ee(w, "absoluteNeg") && (w.negTotal = w.absoluteNeg, delete w.absoluteNeg)), f.isSum || (w.connectorThreshold = w.threshold + w.stackTotal), e.reversed ? (c = L >= 0 ? h - L : h + L, m = h) : (c = h, m = h - L), f.below = c <= r, g.y = e.translate(c, !1, !0, !1, !0), g.height = Math.abs(g.y - e.translate(m, !1, !0, !1, !0));
              let Y = e.waterfall?.dummyStackItem;
              Y && (Y.x = y, Y.label = n[y].label, Y.setOffset(this.pointXOffset || 0, this.barW || 0, this.stackedYNeg[y], this.stackedYPos[y], void 0, this.xAxis));
            }
          } else h = Math.max(p, p + L) + T[0], g.y = e.translate(h, !1, !0, !1, !0), f.isSum ? (g.y = e.translate(T[1], !1, !0, !1, !0), g.height = Math.min(e.translate(T[0], !1, !0, !1, !0), e.len) - g.y, f.below = T[1] <= r) : f.isIntermediateSum ? (L >= 0 ? (c = T[1] + d, m = d) : (c = d, m = T[1] + d), e.reversed && (c ^= m, m ^= c, c ^= m), g.y = e.translate(c, !1, !0, !1, !0), g.height = Math.abs(g.y - Math.min(e.translate(m, !1, !0, !1, !0), e.len)), d += T[1], f.below = c <= r) : (g.height = x > 0 ? e.translate(p, !1, !0, !1, !0) - g.y : e.translate(p, !1, !0, !1, !0) - e.translate(p - x, !1, !0, !1, !0), f.below = (p += x) < r), g.height < 0 && (g.y += g.height, g.height *= -1);
          f.plotY = g.y, f.yBottom = g.y + g.height, g.height <= i && !f.isNull ? (g.height = i, g.y -= a, f.yBottom = g.y + g.height, f.plotY = g.y, L < 0 ? f.minPointLengthOffset = -a : f.minPointLengthOffset = a) : (f.isNull && (g.width = 0), f.minPointLengthOffset = 0);
          let X = f.plotY + (f.negative ? g.height : 0);
          f.below && (f.plotY += g.height), f.tooltipPos && (this.chart.inverted ? f.tooltipPos[0] = e.len - X : f.tooltipPos[1] = X), f.isInside = this.isPointInside(f);
          let C = te(f.yBottom, this.borderWidth);
          g.y = te(g.y, this.borderWidth), g.height = C - g.y, Ii(!0, f.shapeArgs, g);
        }
      }, { order: 2 }), R().registerSeriesType("waterfall", Tt);
      let H = k();
      H.RadialAxis = Li, kt.compose(H.Axis, H.Chart, H.Legend), $t.compose(H.Axis, H.Chart, H.Legend), Wt.compose(H.Chart, H.Pointer), Si.compose(H.Axis, H.Chart, H.Pointer, H.Series, H.Tick, H.Point, R().seriesTypes.areasplinerange, R().seriesTypes.column, R().seriesTypes.line, R().seriesTypes.spline), Tt.compose(H.Axis, H.Chart);
      let ir = H;
      return Ye.default;
    })());
  })(ie)), ie.exports;
}
ar();
const dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  dr as h
};
