var n = { exports: {} }, b = n.exports, c;
function k() {
  return c || (c = 1, (function(x, w) {
    /**
    * Highcharts JS v12.4.0 (2025-09-04)
    * @module highcharts/modules/streamgraph
    * @requires highcharts
    *
    * Streamgraph module
    *
    * (c) 2010-2025 Torstein Honsi
    *
    * License: www.highcharts.com/license
    */
    (function(s, p) {
      x.exports = p(s._Highcharts, s._Highcharts.SeriesRegistry);
    })(typeof window > "u" ? b : window, (s, p) => (() => {
      var g = { 512: (e) => {
        e.exports = p;
      }, 944: (e) => {
        e.exports = s;
      } }, i = {};
      function r(e) {
        var t = i[e];
        if (t !== void 0) return t.exports;
        var a = i[e] = { exports: {} };
        return g[e](a, a.exports, r), a.exports;
      }
      r.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, { a: t }), t;
      }, r.d = (e, t) => {
        for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
      var d = {};
      r.d(d, { default: () => S });
      var h = r(944), l = r.n(h), m = r(512), u = r.n(m);
      let { areaspline: f } = u().seriesTypes, { addEvent: v, merge: y, extend: O } = l();
      class o extends f {
        streamStacker(t, a, _) {
          t[0] -= a.total / 2, t[1] -= a.total / 2, this.stackedYData && (this.stackedYData[_] = Math.max.apply(0, t));
        }
      }
      o.defaultOptions = y(f.defaultOptions, { fillOpacity: 1, lineWidth: 0, marker: { enabled: !1 }, stacking: "stream" }), v(o, "afterGetExtremes", (e) => {
        e.dataExtremes.dataMin = -e.dataExtremes.dataMax;
      }), O(o.prototype, { negStacks: !1 }), u().registerSeriesType("streamgraph", o);
      let S = l();
      return d.default;
    })());
  })(n)), n.exports;
}
k();
const M = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  M as s
};
