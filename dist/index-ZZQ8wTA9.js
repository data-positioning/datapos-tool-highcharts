function Ip(ve) {
  return ve && ve.__esModule && Object.prototype.hasOwnProperty.call(ve, "default") ? ve.default : ve;
}
var za = { exports: {} }, Bp = za.exports, _h;
function Np() {
  return _h || (_h = 1, (function(ve, Kt) {
    /**
    * Highcharts JS v12.4.0 (2025-09-04)
    * @module highcharts/highcharts
    *
    * (c) 2009-2025 Highsoft AS
    *
    * License: www.highcharts.com/license
    */
    (function(nt, Lt) {
      nt._Highcharts = Lt(), ve.exports = nt._Highcharts;
    })(typeof window > "u" ? Bp : window, () => (() => {
      let nt, Lt;
      var ee, Et, Nt, re, Ut, ne, gi, de, ti, We, Te, Le, kt, Rt, le, ei, ft, Ci, fi = {};
      fi.d = (h, t) => {
        for (var e in t) fi.o(t, e) && !fi.o(h, e) && Object.defineProperty(h, e, { enumerable: !0, get: t[e] });
      }, fi.o = (h, t) => Object.prototype.hasOwnProperty.call(h, t);
      var _ = {};
      fi.d(_, { default: () => Dp }), (function(h) {
        h.SVG_NS = "http://www.w3.org/2000/svg", h.product = "Highcharts", h.version = "12.4.0", h.win = typeof window < "u" ? window : {}, h.doc = h.win.document, h.svg = !!h.doc?.createElementNS?.(h.SVG_NS, "svg")?.createSVGRect, h.pageLang = h.doc?.documentElement?.closest("[lang]")?.lang, h.userAgent = h.win.navigator?.userAgent || "", h.isChrome = h.win.chrome, h.isFirefox = h.userAgent.indexOf("Firefox") !== -1, h.isMS = /(edge|msie|trident)/i.test(h.userAgent) && !h.win.opera, h.isSafari = !h.isChrome && h.userAgent.indexOf("Safari") !== -1, h.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(h.userAgent), h.isWebKit = h.userAgent.indexOf("AppleWebKit") !== -1, h.deg2rad = 2 * Math.PI / 360, h.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"], h.noop = function() {
        }, h.supportsPassiveEvents = (function() {
          let t = !1;
          if (!h.isMS) {
            let e = Object.defineProperty({}, "passive", { get: function() {
              t = !0;
            } });
            h.win.addEventListener && h.win.removeEventListener && (h.win.addEventListener("testPassive", h.noop, e), h.win.removeEventListener("testPassive", h.noop, e));
          }
          return t;
        })(), h.charts = [], h.composed = [], h.dateFormats = {}, h.seriesTypes = {}, h.symbolSizes = {}, h.chartCount = 0;
      })(ee || (ee = {}));
      let X = ee, { charts: pe, doc: mi, win: De } = X;
      function ii(h, t, e, i) {
        let s = t ? "Highcharts error" : "Highcharts warning";
        h === 32 && (h = `${s}: Deprecated member`);
        let r = $(h), o = r ? `${s} #${h}: www.highcharts.com/errors/${h}/` : h.toString();
        if (i !== void 0) {
          let a = "";
          r && (o += "?"), ge(i, function(l, c) {
            a += `
 - ${c}: ${l}`, r && (o += encodeURI(c) + "=" + encodeURI(l));
          }), o += a;
        }
        us(X, "displayError", { chart: e, code: h, message: o, params: i }, function() {
          if (t) throw Error(o);
          De.console && ii.messages.indexOf(o) === -1 && console.warn(o);
        }), ii.messages.push(o);
      }
      function Ai(h, t) {
        return parseInt(h, t || 10);
      }
      function zt(h) {
        return typeof h == "string";
      }
      function Xe(h) {
        let t = Object.prototype.toString.call(h);
        return t === "[object Array]" || t === "[object Array Iterator]";
      }
      function Se(h, t) {
        return !!h && typeof h == "object" && (!t || !Xe(h));
      }
      function Y(h) {
        return Se(h) && typeof h.nodeType == "number";
      }
      function U(h) {
        let t = h?.constructor;
        return !!(Se(h, !0) && !Y(h) && t?.name && t.name !== "Object");
      }
      function $(h) {
        return typeof h == "number" && !isNaN(h) && h < 1 / 0 && h > -1 / 0;
      }
      function lt(h) {
        return h != null;
      }
      function At(h, t, e) {
        let i, s = zt(t) && !lt(e), r = (o, a) => {
          lt(o) ? h.setAttribute(a, o) : s ? (i = h.getAttribute(a)) || a !== "class" || (i = h.getAttribute(a + "Name")) : h.removeAttribute(a);
        };
        return zt(t) ? r(e, t) : ge(t, r), i;
      }
      function mt(h) {
        return Xe(h) ? h : [h];
      }
      function Dt(h, t) {
        let e;
        for (e in h || (h = {}), t) h[e] = t[e];
        return h;
      }
      function Xt() {
        let h = arguments, t = h.length;
        for (let e = 0; e < t; e++) {
          let i = h[e];
          if (i != null) return i;
        }
      }
      function ue(h, t) {
        Dt(h.style, t);
      }
      function Ee(h) {
        return Math.pow(10, Math.floor(Math.log(h) / Math.LN10));
      }
      function xi(h, t) {
        return h > 1e14 ? h : parseFloat(h.toPrecision(t || 14));
      }
      (ii || (ii = {})).messages = [], Math.easeInOutSine = function(h) {
        return -0.5 * (Math.cos(Math.PI * h) - 1);
      };
      let It = Array.prototype.find ? function(h, t) {
        return h.find(t);
      } : function(h, t) {
        let e, i = h.length;
        for (e = 0; e < i; e++) if (t(h[e], e)) return h[e];
      };
      function ge(h, t, e) {
        for (let i in h) Object.hasOwnProperty.call(h, i) && t.call(e || h[i], h[i], i, h);
      }
      function Vs(h, t, e) {
        function i(o, a) {
          let l = h.removeEventListener;
          l && l.call(h, o, a, !1);
        }
        function s(o) {
          let a, l;
          h.nodeName && (t ? (a = {})[t] = !0 : a = o, ge(a, function(c, f) {
            if (o[f]) for (l = o[f].length; l--; ) i(f, o[f][l].fn);
          }));
        }
        let r = typeof h == "function" && h.prototype || h;
        if (Object.hasOwnProperty.call(r, "hcEvents")) {
          let o = r.hcEvents;
          if (t) {
            let a = o[t] || [];
            e ? (o[t] = a.filter(function(l) {
              return e !== l.fn;
            }), i(t, e)) : (s(o), o[t] = []);
          } else s(o), delete r.hcEvents;
        }
      }
      function us(h, t, e, i) {
        if (e = e || {}, mi?.createEvent && (h.dispatchEvent || h.fireEvent && h !== X)) {
          let s = mi.createEvent("Events");
          s.initEvent(t, !0, !0), e = Dt(s, e), h.dispatchEvent ? h.dispatchEvent(e) : h.fireEvent(t, e);
        } else if (h.hcEvents) {
          e.target || Dt(e, { preventDefault: function() {
            e.defaultPrevented = !0;
          }, target: h, type: t });
          let s = [], r = h, o = !1;
          for (; r.hcEvents; ) Object.hasOwnProperty.call(r, "hcEvents") && r.hcEvents[t] && (s.length && (o = !0), s.unshift.apply(s, r.hcEvents[t])), r = Object.getPrototypeOf(r);
          o && s.sort((a, l) => a.order - l.order), s.forEach((a) => {
            a.fn.call(h, e) === !1 && e.preventDefault();
          });
        }
        i && !e.defaultPrevented && i.call(h, e);
      }
      let Xa = (function() {
        let h = Math.random().toString(36).substring(2, 9) + "-", t = 0;
        return function() {
          return "highcharts-" + (nt ? "" : h) + t++;
        };
      })();
      De.jQuery && (De.jQuery.fn.highcharts = function() {
        let h = [].slice.call(arguments);
        if (this[0]) return h[0] ? (new X[zt(h[0]) ? h.shift() : "Chart"](this[0], h[0], h[1]), this) : pe[At(this[0], "data-highcharts-chart")];
      });
      let J = { addEvent: function(h, t, e, i = {}) {
        let s = typeof h == "function" && h.prototype || h;
        Object.hasOwnProperty.call(s, "hcEvents") || (s.hcEvents = {});
        let r = s.hcEvents;
        X.Point && h instanceof X.Point && h.series && h.series.chart && (h.series.chart.runTrackerClick = !0);
        let o = h.addEventListener;
        o && o.call(h, t, e, !!X.supportsPassiveEvents && { passive: i.passive === void 0 ? t.indexOf("touch") !== -1 : i.passive, capture: !1 }), r[t] || (r[t] = []);
        let a = { fn: e, order: typeof i.order == "number" ? i.order : 1 / 0 };
        return r[t].push(a), r[t].sort((l, c) => l.order - c.order), function() {
          Vs(h, t, e);
        };
      }, arrayMax: function(h) {
        let t = h.length, e = h[0];
        for (; t--; ) h[t] > e && (e = h[t]);
        return e;
      }, arrayMin: function(h) {
        let t = h.length, e = h[0];
        for (; t--; ) h[t] < e && (e = h[t]);
        return e;
      }, attr: At, clamp: function(h, t, e) {
        return h > t ? h < e ? h : e : t;
      }, clearTimeout: function(h) {
        lt(h) && clearTimeout(h);
      }, correctFloat: xi, createElement: function(h, t, e, i, s) {
        let r = mi.createElement(h);
        return t && Dt(r, t), s && ue(r, { padding: "0", border: "none", margin: "0" }), e && ue(r, e), i && i.appendChild(r), r;
      }, crisp: function(h, t = 0, e) {
        let i = t % 2 / 2, s = e ? -1 : 1;
        return (Math.round(h * s - i) + i) * s;
      }, css: ue, defined: lt, destroyObjectProperties: function(h, t, e) {
        ge(h, function(i, s) {
          i !== t && i?.destroy && i.destroy(), (i?.destroy || !e) && delete h[s];
        });
      }, diffObjects: function(h, t, e, i) {
        let s = {};
        return (function r(o, a, l, c) {
          let f = e ? a : o;
          ge(o, function(d, m) {
            if (!c && i && i.indexOf(m) > -1 && a[m]) {
              d = mt(d), l[m] = [];
              for (let x = 0; x < Math.max(d.length, a[m].length); x++) a[m][x] && (d[x] === void 0 ? l[m][x] = a[m][x] : (l[m][x] = {}, r(d[x], a[m][x], l[m][x], c + 1)));
            } else Se(d, !0) && !d.nodeType ? (l[m] = Xe(d) ? [] : {}, r(d, a[m] || {}, l[m], c + 1), Object.keys(l[m]).length === 0 && (m !== "colorAxis" || c !== 0) && delete l[m]) : (o[m] !== a[m] || m in o && !(m in a)) && m !== "__proto__" && m !== "constructor" && (l[m] = f[m]);
          });
        })(h, t, s, 0), s;
      }, discardElement: function(h) {
        h?.parentElement?.removeChild(h);
      }, erase: function(h, t) {
        let e = h.length;
        for (; e--; ) if (h[e] === t) {
          h.splice(e, 1);
          break;
        }
      }, error: ii, extend: Dt, extendClass: function(h, t) {
        let e = function() {
        };
        return e.prototype = new h(), Dt(e.prototype, t), e;
      }, find: It, fireEvent: us, getAlignFactor: (h = "") => ({ center: 0.5, right: 1, middle: 0.5, bottom: 1 })[h] || 0, getClosestDistance: function(h, t) {
        let e, i, s, r = !t;
        return h.forEach((o) => {
          if (o.length > 1) for (s = o.length - 1; s > 0; s--) (i = o[s] - o[s - 1]) < 0 && !r ? (t?.(), t = void 0) : i && (e === void 0 || i < e) && (e = i);
        }), e;
      }, getMagnitude: Ee, getNestedProperty: function(h, t) {
        let e = h.split(".");
        for (; e.length && lt(t); ) {
          let i = e.shift();
          if (i === void 0 || i === "__proto__") return;
          if (i === "this") {
            let r;
            return Se(t) && (r = t["@this"]), r ?? t;
          }
          let s = t[i.replace(/[\\'"]/g, "")];
          if (!lt(s) || typeof s == "function" || typeof s.nodeType == "number" || s === De) return;
          t = s;
        }
        return t;
      }, getStyle: function h(t, e, i) {
        let s;
        if (e === "width") {
          let o = Math.min(t.offsetWidth, t.scrollWidth), a = t.getBoundingClientRect?.().width;
          return a < o && a >= o - 1 && (o = Math.floor(a)), Math.max(0, o - (h(t, "padding-left", !0) || 0) - (h(t, "padding-right", !0) || 0));
        }
        if (e === "height") return Math.max(0, Math.min(t.offsetHeight, t.scrollHeight) - (h(t, "padding-top", !0) || 0) - (h(t, "padding-bottom", !0) || 0));
        let r = De.getComputedStyle(t, void 0);
        return r && (s = r.getPropertyValue(e), Xt(i, e !== "opacity") && (s = Ai(s))), s;
      }, insertItem: function(h, t) {
        let e, i = h.options.index, s = t.length;
        for (e = h.options.isInternal ? s : 0; e < s + 1; e++) if (!t[e] || $(i) && i < Xt(t[e].options.index, t[e]._i) || t[e].options.isInternal) {
          t.splice(e, 0, h);
          break;
        }
        return e;
      }, isArray: Xe, isClass: U, isDOMElement: Y, isFunction: function(h) {
        return typeof h == "function";
      }, isNumber: $, isObject: Se, isString: zt, merge: function(h, ...t) {
        let e, i = [h, ...t], s = {}, r = function(a, l) {
          return typeof a != "object" && (a = {}), ge(l, function(c, f) {
            f !== "__proto__" && f !== "constructor" && (!Se(c, !0) || U(c) || Y(c) ? a[f] = l[f] : a[f] = r(a[f] || {}, c));
          }), a;
        };
        h === !0 && (s = i[1], i = Array.prototype.slice.call(i, 2));
        let o = i.length;
        for (e = 0; e < o; e++) s = r(s, i[e]);
        return s;
      }, normalizeTickInterval: function(h, t, e, i, s) {
        let r, o = h;
        e = Xt(e, Ee(h));
        let a = h / e;
        for (!t && (t = s ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], i === !1 && (e === 1 ? t = t.filter(function(l) {
          return l % 1 == 0;
        }) : e <= 0.1 && (t = [1 / e]))), r = 0; r < t.length && (o = t[r], (!s || !(o * e >= h)) && (s || !(a <= (t[r] + (t[r + 1] || t[r])) / 2))); r++) ;
        return xi(o * e, -Math.round(Math.log(1e-3) / Math.LN10));
      }, objectEach: ge, offset: function(h) {
        let t = mi.documentElement, e = h.parentElement || h.parentNode ? h.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 };
        return { top: e.top + (De.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: e.left + (De.pageXOffset || t.scrollLeft) - (t.clientLeft || 0), width: e.width, height: e.height };
      }, pad: function(h, t, e) {
        return Array((t || 2) + 1 - String(h).replace("-", "").length).join(e || "0") + h;
      }, pick: Xt, pInt: Ai, pushUnique: function(h, t) {
        return 0 > h.indexOf(t) && !!h.push(t);
      }, relativeLength: function(h, t, e) {
        return /%$/.test(h) ? t * parseFloat(h) / 100 + (e || 0) : parseFloat(h);
      }, removeEvent: Vs, replaceNested: function(h, ...t) {
        let e, i;
        do
          for (i of (e = h, t)) h = h.replace(i[0], i[1]);
        while (h !== e);
        return h;
      }, splat: mt, stableSort: function(h, t) {
        let e, i, s = h.length;
        for (i = 0; i < s; i++) h[i].safeI = i;
        for (h.sort(function(r, o) {
          return (e = t(r, o)) === 0 ? r.safeI - o.safeI : e;
        }), i = 0; i < s; i++) delete h[i].safeI;
      }, syncTimeout: function(h, t, e) {
        return t > 0 ? setTimeout(h, t, e) : (h.call(0, e), -1);
      }, timeUnits: { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 24192e5, year: 314496e5 }, ucfirst: function(h) {
        return zt(h) ? h.substring(0, 1).toUpperCase() + h.substring(1) : String(h);
      }, uniqueKey: Xa, useSerialIds: function(h) {
        return nt = Xt(h, nt);
      }, wrap: function(h, t, e) {
        let i = h[t];
        h[t] = function() {
          let s = arguments, r = this;
          return e.apply(this, [function() {
            return i.apply(r, arguments.length ? arguments : s);
          }].concat([].slice.call(arguments)));
        };
      } }, { pageLang: Ga, win: gs } = X, { defined: Ie, error: so, extend: ke, isNumber: ro, isObject: Ti, isString: Vi, merge: oo, objectEach: Ya, pad: Ge, splat: ja, timeUnits: qs, ucfirst: Ua } = J, Ks = X.isSafari && gs.Intl && !gs.Intl.DateTimeFormat.prototype.formatRange, Va = (h) => h.main === void 0, qa = class {
        constructor(h, t) {
          this.options = { timezone: "UTC" }, this.variableTimezone = !1, this.Date = gs.Date, this.update(h), this.lang = t;
        }
        update(h = {}) {
          this.dTLCache = {}, this.options = h = oo(!0, this.options, h);
          let { timezoneOffset: t, useUTC: e, locale: i } = h;
          this.Date = h.Date || gs.Date || Date;
          let s = h.timezone;
          Ie(e) && (s = e ? "UTC" : void 0), t && t % 60 == 0 && (s = "Etc/GMT" + (t > 0 ? "+" : "") + t / 60), this.variableTimezone = s !== "UTC" && s?.indexOf("Etc/GMT") !== 0, this.timezone = s, this.lang && i && (this.lang.locale = i), ["months", "shortMonths", "weekdays", "shortWeekdays"].forEach((r) => {
            let o = /months/i.test(r), a = /short/.test(r), l = { timeZone: "UTC" };
            l[o ? "month" : "weekday"] = a ? "short" : "long", this[r] = (o ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : [3, 4, 5, 6, 7, 8, 9]).map((c) => this.dateFormat(l, (o ? 31 : 1) * 24 * 36e5 * c));
          });
        }
        toParts(h) {
          let [t, e, i, s, r, o, a] = this.dateTimeFormat({ weekday: "narrow", day: "numeric", month: "numeric", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }, h, "es").split(/(?:, | |\/|:)/g);
          return [s, i - 1, e, r, o, a, Math.floor(Number(h) || 0) % 1e3, "DLMXJVS".indexOf(t)].map(Number);
        }
        dateTimeFormat(h, t, e = this.options.locale || Ga) {
          let i = JSON.stringify(h) + e;
          Vi(h) && (h = this.str2dtf(h));
          let s = this.dTLCache[i];
          if (!s) {
            h.timeZone ?? (h.timeZone = this.timezone);
            try {
              s = new Intl.DateTimeFormat(e, h);
            } catch (r) {
              /Invalid time zone/i.test(r.message) ? (so(34), h.timeZone = "UTC", s = new Intl.DateTimeFormat(e, h)) : so(r.message, !1);
            }
          }
          return this.dTLCache[i] = s, s?.format(t) || "";
        }
        str2dtf(h, t = {}) {
          let e = { L: { fractionalSecondDigits: 3 }, S: { second: "2-digit" }, M: { minute: "numeric" }, H: { hour: "2-digit" }, k: { hour: "numeric" }, E: { weekday: "narrow" }, a: { weekday: "short" }, A: { weekday: "long" }, d: { day: "2-digit" }, e: { day: "numeric" }, b: { month: "short" }, B: { month: "long" }, m: { month: "2-digit" }, o: { month: "numeric" }, y: { year: "2-digit" }, Y: { year: "numeric" } };
          return Object.keys(e).forEach((i) => {
            h.indexOf(i) !== -1 && ke(t, e[i]);
          }), t;
        }
        makeTime(h, t, e = 1, i = 0, s, r, o) {
          let a = this.Date.UTC(h, t, e, i, s || 0, r || 0, o || 0);
          if (this.timezone !== "UTC") {
            let l = this.getTimezoneOffset(a);
            if (a += l, [2, 3, 8, 9, 10, 11].indexOf(t) !== -1 && (i < 5 || i > 20)) {
              let c = this.getTimezoneOffset(a);
              l !== c ? a += c - l : l - 36e5 !== this.getTimezoneOffset(a - 36e5) || Ks || (a -= 36e5);
            }
          }
          return a;
        }
        parse(h) {
          if (!Vi(h)) return h ?? void 0;
          let t = (h = h.replace(/\//g, "-").replace(/(GMT|UTC)/, "")).indexOf("Z") > -1 || /([+-][0-9]{2}):?[0-9]{2}$/.test(h), e = /^[0-9]{4}-[0-9]{2}(-[0-9]{2}|)$/.test(h);
          t || e || (h += "Z");
          let i = Date.parse(h);
          if (ro(i)) return i + (!t || e ? this.getTimezoneOffset(i) : 0);
        }
        getTimezoneOffset(h) {
          if (this.timezone !== "UTC") {
            let [t, e, i, s, r = 0] = this.dateTimeFormat({ timeZoneName: "shortOffset" }, h, "en").split(/(GMT|:)/).map(Number), o = -(60 * (i + r / 60) * 6e4);
            if (ro(o)) return o;
          }
          return 0;
        }
        dateFormat(h, t, e) {
          let i = this.lang;
          if (!Ie(t) || isNaN(t)) return i?.invalidDate || "";
          if (Vi(h = h ?? "%Y-%m-%d %H:%M:%S")) {
            let s, r = /%\[([a-zA-Z]+)\]/g;
            for (; s = r.exec(h); ) h = h.replace(s[0], this.dateTimeFormat(s[1], t, i?.locale));
          }
          if (Vi(h) && h.indexOf("%") !== -1) {
            let s = this, [r, o, a, l, c, f, d, m] = this.toParts(t), x = i?.weekdays || this.weekdays, y = i?.shortWeekdays || this.shortWeekdays, M = i?.months || this.months, w = i?.shortMonths || this.shortMonths;
            Ya(ke({ a: y ? y[m] : x[m].substr(0, 3), A: x[m], d: Ge(a), e: Ge(a, 2, " "), w: m, v: i?.weekFrom ?? "", b: w[o], B: M[o], m: Ge(o + 1), o: o + 1, y: r.toString().substr(2, 2), Y: r, H: Ge(l), k: l, I: Ge(l % 12 || 12), l: l % 12 || 12, M: Ge(c), p: l < 12 ? "AM" : "PM", P: l < 12 ? "am" : "pm", S: Ge(f), L: Ge(d, 3) }, X.dateFormats), function(v, T) {
              if (Vi(h)) for (; h.indexOf("%" + T) !== -1; ) h = h.replace("%" + T, typeof v == "function" ? v.call(s, t) : v);
            });
          } else if (Ti(h)) {
            let s = (this.getTimezoneOffset(t) || 0) / 36e5, r = this.timezone || "Etc/GMT" + (s >= 0 ? "+" : "") + s, { prefix: o = "", suffix: a = "" } = h;
            h = o + this.dateTimeFormat(ke({ timeZone: r }, h), t) + a;
          }
          return e ? Ua(h) : h;
        }
        resolveDTLFormat(h) {
          return Ti(h, !0) ? Ti(h, !0) && Va(h) ? { main: h } : h : { main: (h = ja(h))[0], from: h[1], to: h[2] };
        }
        getDateFormat(h, t, e, i) {
          let s = this.dateFormat("%m-%d %H:%M:%S.%L", t), r = "01-01 00:00:00.000", o = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, a = "millisecond", l = a;
          for (a in qs) {
            if (h && h === qs.week && +this.dateFormat("%w", t) === e && s.substr(6) === r.substr(6)) {
              a = "week";
              break;
            }
            if (h && qs[a] > h) {
              a = l;
              break;
            }
            if (o[a] && s.substr(o[a]) !== r.substr(o[a])) break;
            a !== "week" && (l = a);
          }
          return this.resolveDTLFormat(i[a]).main;
        }
      }, { defined: ao, extend: no, timeUnits: Ft } = J, $s = class extends qa {
        getTimeTicks(h, t, e, i) {
          let s = this, r = [], o = {}, { count: a = 1, unitRange: l } = h, [c, f, d, m, x, y] = s.toParts(t), M = (t || 0) % 1e3, w;
          if (i ?? (i = 1), ao(t)) {
            if (M = l >= Ft.second ? 0 : a * Math.floor(M / a), l >= Ft.second && (y = l >= Ft.minute ? 0 : a * Math.floor(y / a)), l >= Ft.minute && (x = l >= Ft.hour ? 0 : a * Math.floor(x / a)), l >= Ft.hour && (m = l >= Ft.day ? 0 : a * Math.floor(m / a)), l >= Ft.day && (d = l >= Ft.month ? 1 : Math.max(1, a * Math.floor(d / a))), l >= Ft.month && (f = l >= Ft.year ? 0 : a * Math.floor(f / a)), l >= Ft.year && (c -= c % a), l === Ft.week) {
              a && (t = s.makeTime(c, f, d, m, x, y, M));
              let S = this.dateTimeFormat({ timeZone: this.timezone, weekday: "narrow" }, t, "es"), O = "DLMXJVS".indexOf(S);
              d += -O + i + (O < i ? -7 : 0);
            }
            t = s.makeTime(c, f, d, m, x, y, M), s.variableTimezone && ao(e) && (w = e - t > 4 * Ft.month || s.getTimezoneOffset(t) !== s.getTimezoneOffset(e));
            let v = t, T = 1;
            for (; v < e; ) r.push(v), l === Ft.year ? v = s.makeTime(c + T * a, 0) : l === Ft.month ? v = s.makeTime(c, f + T * a) : w && (l === Ft.day || l === Ft.week) ? v = s.makeTime(c, f, d + T * a * (l === Ft.day ? 1 : 7)) : w && l === Ft.hour && a > 1 ? v = s.makeTime(c, f, d, m + T * a) : v += l * a, T++;
            r.push(v), l <= Ft.hour && r.length < 1e4 && r.forEach((S) => {
              S % 18e5 == 0 && s.dateFormat("%H%M%S%L", S) === "000000000" && (o[S] = "day");
            });
          }
          return r.info = no(h, { higherRanks: o, totalRange: l * a }), r;
        }
      }, { isTouchDevice: Ka } = X, { fireEvent: lo, merge: ho } = J, Ye = { colors: ["#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1"], symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { weekFrom: "week from", chartTitle: "Chart title", locale: void 0, loading: "Loading...", months: void 0, seriesName: "Series {add index 1}", shortMonths: void 0, weekdays: void 0, numericSymbols: ["k", "M", "G", "T", "P", "E"], pieSliceName: "Slice", resetZoom: "Reset zoom", yAxisTitle: "Values", resetZoomTitle: "Reset zoom level 1:1" }, global: { buttonTheme: { fill: "#f7f7f7", padding: 8, r: 2, stroke: "#cccccc", "stroke-width": 1, style: { color: "#333333", cursor: "pointer", fontSize: "0.8em", fontWeight: "normal" }, states: { hover: { fill: "#e6e6e6" }, select: { fill: "#e6e9ff", style: { color: "#000000", fontWeight: "bold" } }, disabled: { style: { color: "#cccccc" } } } } }, time: { Date: void 0, timezone: "UTC", timezoneOffset: 0, useUTC: void 0 }, chart: { alignThresholds: !1, panning: { enabled: !1, type: "x" }, styledMode: !1, borderRadius: 0, colorCount: 10, allowMutatingData: !0, ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: {}, position: {} }, reflow: !0, type: "line", zooming: { singleTouch: !1, resetButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } } }, width: null, height: null, borderColor: "#334eff", backgroundColor: "#ffffff", plotBorderColor: "#cccccc" }, title: { style: { color: "#333333", fontWeight: "bold" }, text: "Chart title", margin: 15, minScale: 0.67 }, subtitle: { style: { color: "#666666", fontSize: "0.8em" }, text: "" }, caption: { margin: 15, style: { color: "#666666", fontSize: "0.8em" }, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {}, legend: { enabled: !0, align: "center", alignColumns: !0, className: "highcharts-no-tooltip", events: {}, layout: "horizontal", itemMarginBottom: 2, itemMarginTop: 2, labelFormatter: function() {
        return this.name;
      }, borderColor: "#999999", borderRadius: 0, navigation: { style: { fontSize: "0.8em" }, activeColor: "#0022ff", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "0.8em", textDecoration: "none", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#666666", textDecoration: "line-through" }, shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { color: "#333333", fontSize: "0.8em", fontWeight: "bold" } } }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: 0.5, textAlign: "center" } }, tooltip: { enabled: !0, animation: { duration: 300, easing: (h) => Math.sqrt(1 - Math.pow(h - 1, 2)) }, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%[AebHMSL]", second: "%[AebHMS]", minute: "%[AebHM]", hour: "%[AebHM]", day: "%[AebY]", week: "%v %[AebY]", month: "%[BY]", year: "%Y" }, footerFormat: "", headerShape: "callout", hideDelay: 500, padding: 8, position: { x: 0, y: 3 }, shared: !1, snap: Ka ? 25 : 10, headerFormat: '<span style="font-size: 0.8em">{ucfirst point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: "#ffffff", borderWidth: void 0, stickOnContact: !1, style: { color: "#333333", cursor: "default", fontSize: "0.8em" }, useHTML: !1 }, credits: { enabled: !0, href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "0.6em" }, text: "Highcharts.com" } }, Zs = new $s(Ye.time, Ye.lang), fe = { defaultOptions: Ye, defaultTime: Zs, getOptions: function() {
        return Ye;
      }, setOptions: function(h) {
        return lo(X, "setOptions", { options: h }), ho(!0, Ye, h), h.time && Zs.update(Ye.time), h.lang && "locale" in h.lang && Zs.update({ locale: h.lang.locale }), h.lang?.chartTitle && (Ye.title = { ...Ye.title, text: h.lang.chartTitle }), Ye;
      } }, { win: $a } = X, { isNumber: qi, isString: Za, merge: fs, pInt: oe, defined: co } = J, po = (h, t, e) => `color-mix(in srgb,${h},${t} ${100 * e}%)`, ms = (h) => Za(h) && !!h && h !== "none";
      class Tt {
        static parse(t) {
          return t ? new Tt(t) : Tt.None;
        }
        constructor(t) {
          let e, i, s, r;
          this.rgba = [NaN, NaN, NaN, NaN], this.input = t;
          let o = X.Color;
          if (o && o !== Tt) return new o(t);
          if (typeof t == "object" && t.stops !== void 0) this.stops = t.stops.map((a) => new Tt(a[1]));
          else if (typeof t == "string") for (this.input = t = Tt.names[t.toLowerCase()] || t, s = Tt.parsers.length; s-- && !i; ) (e = (r = Tt.parsers[s]).regex.exec(t)) && (i = r.parse(e));
          i && (this.rgba = i);
        }
        get(t) {
          let e = this.input, i = this.rgba;
          if (this.output) return this.output;
          if (typeof e == "object" && this.stops !== void 0) {
            let s = fs(e);
            return s.stops = [].slice.call(s.stops), this.stops.forEach((r, o) => {
              s.stops[o] = [s.stops[o][0], r.get(t)];
            }), s;
          }
          return i && qi(i[0]) ? t !== "rgb" && (t || i[3] !== 1) ? t === "a" ? `${i[3]}` : "rgba(" + i.join(",") + ")" : "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")" : e;
        }
        brighten(t) {
          let e = this.rgba;
          if (this.stops) this.stops.forEach(function(i) {
            i.brighten(t);
          });
          else if (qi(t) && t !== 0) if (qi(e[0])) for (let i = 0; i < 3; i++) e[i] += oe(255 * t), e[i] < 0 && (e[i] = 0), e[i] > 255 && (e[i] = 255);
          else Tt.useColorMix && ms(this.input) && (this.output = po(this.input, t > 0 ? "white" : "black", Math.abs(t)));
          return this;
        }
        setOpacity(t) {
          return this.rgba[3] = t, this;
        }
        tweenTo(t, e) {
          let i = this.rgba, s = t.rgba;
          if (!qi(i[0]) || !qi(s[0])) return Tt.useColorMix && ms(this.input) && ms(t.input) && e < 0.99 ? po(this.input, t.input, e) : t.input || "none";
          let r = s[3] !== 1 || i[3] !== 1, o = (l, c) => l + (i[c] - l) * (1 - e), a = s.slice(0, 3).map(o).map(Math.round);
          return r && a.push(o(s[3], 3)), (r ? "rgba(" : "rgb(") + a.join(",") + ")";
        }
      }
      Tt.names = { white: "#ffffff", black: "#000000" }, Tt.parsers = [{ regex: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?(?:\.\d+)?)\s*\)/, parse: function(h) {
        return [oe(h[1]), oe(h[2]), oe(h[3]), parseFloat(h[4], 10)];
      } }, { regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/, parse: function(h) {
        return [oe(h[1]), oe(h[2]), oe(h[3]), 1];
      } }, { regex: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?$/i, parse: function(h) {
        return [oe(h[1] + h[1], 16), oe(h[2] + h[2], 16), oe(h[3] + h[3], 16), co(h[4]) ? oe(h[4] + h[4], 16) / 255 : 1];
      } }, { regex: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?$/i, parse: function(h) {
        return [oe(h[1], 16), oe(h[2], 16), oe(h[3], 16), co(h[4]) ? oe(h[4], 16) / 255 : 1];
      } }], Tt.useColorMix = $a.CSS?.supports("color", "color-mix(in srgb,red,blue 9%)"), Tt.None = new Tt("");
      let { parse: uo } = Tt, { win: go } = X, { isNumber: _s, objectEach: fo } = J;
      class ae {
        constructor(t, e, i) {
          this.pos = NaN, this.options = e, this.elem = t, this.prop = i;
        }
        dSetter() {
          let t = this.paths, e = t?.[0], i = t?.[1], s = this.now || 0, r = [];
          if (s !== 1 && e && i) if (e.length === i.length && s < 1) for (let o = 0; o < i.length; o++) {
            let a = e[o], l = i[o], c = [];
            for (let f = 0; f < l.length; f++) {
              let d = a[f], m = l[f];
              _s(d) && _s(m) && (l[0] !== "A" || f !== 4 && f !== 5) ? c[f] = d + s * (m - d) : c[f] = m;
            }
            r.push(c);
          }
          else r = i;
          else r = this.toD || [];
          this.elem.attr("d", r, void 0, !0);
        }
        update() {
          let t = this.elem, e = this.prop, i = this.now, s = this.options.step;
          this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, s && s.call(t, i, this);
        }
        run(t, e, i) {
          let s = this, r = s.options, o = function(c) {
            return !o.stopped && s.step(c);
          }, a = go.requestAnimationFrame || function(c) {
            setTimeout(c, 13);
          }, l = function() {
            for (let c = 0; c < ae.timers.length; c++) ae.timers[c]() || ae.timers.splice(c--, 1);
            ae.timers.length && a(l);
          };
          t !== e || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = t, this.end = e, this.unit = i, this.now = this.start, this.pos = 0, o.elem = this.elem, o.prop = this.prop, o() && ae.timers.push(o) === 1 && a(l)) : (delete r.curAnim[this.prop], r.complete && Object.keys(r.curAnim).length === 0 && r.complete.call(this.elem));
        }
        step(t) {
          let e, i, s = +/* @__PURE__ */ new Date(), r = this.options, o = this.elem, a = r.complete, l = r.duration, c = r.curAnim;
          return o.attr && !o.element ? e = !1 : t || s >= l + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), c[this.prop] = !0, i = !0, fo(c, function(f) {
            f !== !0 && (i = !1);
          }), i && a && a.call(o), e = !1) : (this.pos = r.easing((s - this.startTime) / l), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0), e;
        }
        initPath(t, e, i) {
          let s = t.startX, r = t.endX, o = i.slice(), a = t.isArea, l = a ? 2 : 1, c = e && i.length > e.length && i.hasStackedCliffs, f, d, m, x, y = e?.slice();
          if (!y || c) return [o, o];
          function M(v, T) {
            for (; v.length < d; ) {
              let S = v[0], O = T[d - v.length];
              if (O && S[0] === "M" && (O[0] === "C" ? v[0] = ["C", S[1], S[2], S[1], S[2], S[1], S[2]] : v[0] = ["L", S[1], S[2]]), v.unshift(S), a) {
                let L = v.pop();
                v.push(v[v.length - 1], L);
              }
            }
          }
          function w(v) {
            for (; v.length < d; ) {
              let T = v[Math.floor(v.length / l) - 1].slice();
              if (T[0] === "C" && (T[1] = T[5], T[2] = T[6]), a) {
                let S = v[Math.floor(v.length / l)].slice();
                v.splice(v.length / 2, 0, T, S);
              } else v.push(T);
            }
          }
          if (s && r && r.length) {
            for (m = 0; m < s.length; m++) if (s[m] === r[0]) {
              f = m;
              break;
            } else if (s[0] === r[r.length - s.length + m]) {
              f = m, x = !0;
              break;
            } else if (s[s.length - 1] === r[r.length - s.length + m]) {
              f = s.length - m;
              break;
            }
            f === void 0 && (y = []);
          }
          return y.length && _s(f) && (d = o.length + f * l, x ? (M(y, o), w(o)) : (M(o, y), w(y))), [y, o];
        }
        fillSetter() {
          ae.prototype.strokeSetter.apply(this, arguments);
        }
        strokeSetter() {
          this.elem.attr(this.prop, uo(this.start).tweenTo(uo(this.end), this.pos), void 0, !0);
        }
      }
      ae.timers = [];
      let { defined: _a, getStyle: mo, isArray: Ja, isNumber: Qa, isObject: Js, merge: xo, objectEach: xs, pick: bs } = J;
      function Ki(h) {
        return Js(h) ? xo({ duration: 500, defer: 0 }, h) : { duration: 500 * !!h, defer: 0 };
      }
      function ys(h, t) {
        let e = ae.timers.length;
        for (; e--; ) ae.timers[e].elem !== h || t && t !== ae.timers[e].prop || (ae.timers[e].stopped = !0);
      }
      let $t = { animate: function(h, t, e) {
        let i, s = "", r, o, a;
        Js(e) || (a = arguments, e = { duration: a[2], easing: a[3], complete: a[4] }), Qa(e.duration) || (e.duration = 400), e.easing = typeof e.easing == "function" ? e.easing : Math[e.easing] || Math.easeInOutSine, e.curAnim = xo(t), xs(t, function(l, c) {
          ys(h, c), o = new ae(h, e, c), r = void 0, c === "d" && Ja(t.d) ? (o.paths = o.initPath(h, h.pathArray, t.d), o.toD = t.d, i = 0, r = 1) : h.attr ? i = h.attr(c) : (i = parseFloat(mo(h, c)) || 0, c !== "opacity" && (s = "px")), r || (r = l), typeof r == "string" && r.match("px") && (r = r.replace(/px/g, "")), o.run(i, r, s);
        });
      }, animObject: Ki, getDeferredAnimation: function(h, t, e) {
        let i = Ki(t), s = e ? [e] : h.series, r = 0, o = 0;
        return s.forEach((a) => {
          let l = Ki(a.options.animation);
          r = Js(t) && _a(t.defer) ? i.defer : Math.max(r, l.duration + l.defer), o = Math.min(i.duration, l.duration);
        }), h.renderer.forExport && (r = 0), { defer: Math.max(0, r - o), duration: Math.min(r, o) };
      }, setAnimation: function(h, t) {
        t.renderer.globalAnimation = bs(h, t.options.chart.animation, !0);
      }, stop: ys }, { SVG_NS: Qs, win: tn } = X, { attr: en, createElement: sn, css: rn, error: bo, isFunction: tr, isString: er, objectEach: yo, splat: ir } = J, { trustedTypes: sr } = tn, vs = sr && tr(sr.createPolicy) && sr.createPolicy("highcharts", { createHTML: (h) => h }), on = vs ? vs.createHTML("") : "";
      class Bt {
        static filterUserAttributes(t) {
          return yo(t, (e, i) => {
            let s = !0;
            Bt.allowedAttributes.indexOf(i) === -1 && (s = !1), ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(i) !== -1 && (s = er(e) && Bt.allowedReferences.some((r) => e.indexOf(r) === 0)), s || (bo(33, !1, void 0, { "Invalid attribute in config": `${i}` }), delete t[i]), er(e) && t[i] && (t[i] = e.replace(/</g, "&lt;"));
          }), t;
        }
        static parseStyle(t) {
          return t.split(";").reduce((e, i) => {
            let s = i.split(":").map((o) => o.trim()), r = s.shift();
            return r && s.length && (e[r.replace(/-([a-z])/g, (o) => o[1].toUpperCase())] = s.join(":")), e;
          }, {});
        }
        static setElementHTML(t, e) {
          t.innerHTML = Bt.emptyHTML, e && new Bt(e).addToDOM(t);
        }
        constructor(t) {
          this.nodes = typeof t == "string" ? this.parseMarkup(t) : t;
        }
        addToDOM(t) {
          return (function e(i, s) {
            let r;
            return ir(i).forEach(function(o) {
              let a, l = o.tagName, c = o.textContent ? X.doc.createTextNode(o.textContent) : void 0, f = Bt.bypassHTMLFiltering;
              if (l) if (l === "#text") a = c;
              else if (Bt.allowedTags.indexOf(l) !== -1 || f) {
                let d = l === "svg" ? Qs : s.namespaceURI || Qs, m = X.doc.createElementNS(d, l), x = o.attributes || {};
                yo(o, function(y, M) {
                  M !== "tagName" && M !== "attributes" && M !== "children" && M !== "style" && M !== "textContent" && (x[M] = y);
                }), en(m, f ? x : Bt.filterUserAttributes(x)), o.style && rn(m, o.style), c && m.appendChild(c), e(o.children || [], m), a = m;
              } else bo(33, !1, void 0, { "Invalid tagName in config": l });
              a && s.appendChild(a), r = a;
            }), r;
          })(this.nodes, t);
        }
        parseMarkup(t) {
          let e, i = [];
          t = t.trim().replace(/ style=(["'])/g, " data-style=$1");
          try {
            e = new DOMParser().parseFromString(vs ? vs.createHTML(t) : t, "text/html");
          } catch {
          }
          if (!e) {
            let r = sn("div");
            r.innerHTML = t, e = { body: r };
          }
          let s = (r, o) => {
            let a = r.nodeName.toLowerCase(), l = { tagName: a };
            a === "#text" && (l.textContent = r.textContent || "");
            let c = r.attributes;
            if (c) {
              let f = {};
              [].forEach.call(c, (d) => {
                d.name === "data-style" ? l.style = Bt.parseStyle(d.value) : f[d.name] = d.value;
              }), l.attributes = f;
            }
            if (r.childNodes.length) {
              let f = [];
              [].forEach.call(r.childNodes, (d) => {
                s(d, f);
              }), f.length && (l.children = f);
            }
            o.push(l);
          };
          return [].forEach.call(e.body.childNodes, (r) => s(r, i)), i;
        }
      }
      Bt.allowedAttributes = ["alt", "aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-pressed", "aria-readonly", "aria-roledescription", "aria-selected", "class", "clip-path", "color", "colspan", "cx", "cy", "d", "disabled", "dx", "dy", "fill", "filterUnits", "flood-color", "flood-opacity", "height", "href", "id", "in", "in2", "markerHeight", "markerWidth", "offset", "opacity", "operator", "orient", "padding", "paddingLeft", "paddingRight", "patternUnits", "r", "radius", "refX", "refY", "result", "role", "rowspan", "scope", "slope", "src", "startOffset", "stdDeviation", "stroke-linecap", "stroke-width", "stroke", "style", "summary", "tabindex", "tableValues", "target", "text-align", "text-anchor", "textAnchor", "textLength", "title", "type", "valign", "width", "x", "x1", "x2", "xlink:href", "y", "y1", "y2", "zIndex"], Bt.allowedReferences = ["https://", "http://", "mailto:", "/", "../", "./", "#"], Bt.allowedTags = ["#text", "a", "abbr", "b", "br", "button", "caption", "circle", "clipPath", "code", "dd", "defs", "div", "dl", "dt", "em", "feComponentTransfer", "feComposite", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "filter", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "li", "linearGradient", "marker", "ol", "p", "path", "pattern", "pre", "rect", "small", "span", "stop", "strong", "style", "sub", "sup", "svg", "table", "tbody", "td", "text", "textPath", "th", "thead", "title", "tr", "tspan", "u", "ul"], Bt.emptyHTML = on, Bt.bypassHTMLFiltering = !1;
      let { defaultOptions: vo, defaultTime: ko } = fe, { pageLang: an } = X, { extend: nn, getNestedProperty: wo, isArray: ln, isNumber: Mo, isObject: rr, isString: or, pick: ar, ucfirst: Co } = J, ks = { add: (h, t) => h + t, divide: (h, t) => t !== 0 ? h / t : "", eq: (h, t) => h == t, each: function(h) {
        let t = arguments[arguments.length - 1];
        return !!ln(h) && h.map((e, i) => je(t.body, nn(rr(e) ? e : { "@this": e }, { "@index": i, "@first": i === 0, "@last": i === h.length - 1 }))).join("");
      }, ge: (h, t) => h >= t, gt: (h, t) => h > t, if: (h) => !!h, le: (h, t) => h <= t, lt: (h, t) => h < t, multiply: (h, t) => h * t, ne: (h, t) => h != t, subtract: (h, t) => h - t, ucfirst: Co, unless: (h) => !h }, nr = {}, lr = (h) => /^["'].+["']$/.test(h);
      function je(h = "", t, e) {
        let i = /\{([a-zA-Z\u00C0-\u017F\d:\.,;\-\/<>\[\]%_@+"'’= #\(\)]+)\}/g, s = /\(([a-zA-Z\u00C0-\u017F\d:\.,;\-\/<>\[\]%_@+"'= ]+)\)/g, r = [], o = /f$/, a = /\.(\d)/, l = e?.options?.lang || vo.lang, c = e?.time || ko, f = e?.numberFormatter || hr.bind(e), d = (w = "") => {
          let v;
          return w === "true" || w !== "false" && ((v = Number(w)).toString() === w ? v : lr(w) ? w.slice(1, -1) : wo(w, t));
        }, m, x, y = 0, M;
        for (; (m = i.exec(h)) !== null; ) {
          let w = m, v = s.exec(m[1]);
          v && (m = v, M = !0), x?.isBlock || (x = { ctx: t, expression: m[1], find: m[0], isBlock: m[1].charAt(0) === "#", start: m.index, startInner: m.index + m[0].length, length: m[0].length });
          let T = (x.isBlock ? w : m)[1].split(" ")[0].replace("#", "");
          ks[T] && (x.isBlock && T === x.fn && y++, x.fn || (x.fn = T));
          let S = m[1] === "else";
          if (x.isBlock && x.fn && (m[1] === `/${x.fn}` || S)) if (y) !S && y--;
          else {
            let O = x.startInner, L = h.substr(O, m.index - O);
            x.body === void 0 ? (x.body = L, x.startInner = m.index + m[0].length) : x.elseBody = L, x.find += L + m[0], S || (r.push(x), x = void 0);
          }
          else x.isBlock || r.push(x);
          if (v && !x?.isBlock) break;
        }
        return r.forEach((w) => {
          let v, T, { body: S, elseBody: O, expression: L, fn: D } = w;
          if (D) {
            let N = [w], I = [], W = L.length, j = 0, H;
            for (T = 0; T <= W; T++) {
              let K = L.charAt(T);
              H || K !== '"' && K !== "'" ? H === K && (H = "") : H = K, H || K !== " " && T !== W || (I.push(L.substr(j, T - j)), j = T + 1);
            }
            for (T = ks[D].length; T--; ) N.unshift(d(I[T + 1]));
            v = ks[D].apply(t, N), w.isBlock && typeof v == "boolean" && (v = je(v ? S : O, t, e));
          } else {
            let N = lr(L) ? [L] : L.split(":"), I = (v = d(N.shift() || "")) % 1 != 0;
            if (typeof v == "number" && (N.length || I)) {
              let W = N.join(":");
              if (o.test(W) || I) {
                let j = parseInt((W.match(a) || ["", "-1"])[1], 10);
                v !== null && (v = f(v, j, l.decimalPoint, W.indexOf(",") > -1 ? l.thousandsSep : ""));
              } else v = c.dateFormat(W, v);
            }
            s.lastIndex = 0, s.test(w.find) && or(v) && (v = `"${v}"`);
          }
          h = h.replace(w.find, ar(v, ""));
        }), M ? je(h, t, e) : h;
      }
      function hr(h, t, e, i) {
        t *= 1;
        let s, r, [o, a] = (h = +h || 0).toString().split("e").map(Number), l = this?.options?.lang || vo.lang, c = (h.toString().split(".")[1] || "").split("e")[0].length, f = t, d = {};
        e ?? (e = l.decimalPoint), i ?? (i = l.thousandsSep), t === -1 ? t = Math.min(c, 20) : Mo(t) ? t && a < 0 && ((r = t + a) >= 0 ? (o = +o.toExponential(r).split("e")[0], t = r) : (o = Math.floor(o), h = t < 20 ? +(o * Math.pow(10, a)).toFixed(t) : 0, a = 0)) : t = 2, a && (t ?? (t = 2), h = o), Mo(t) && t >= 0 && (d.minimumFractionDigits = t, d.maximumFractionDigits = t), i === "" && (d.useGrouping = !1);
        let m = i || e, x = m ? "en" : this?.locale || l.locale || an, y = JSON.stringify(d) + x;
        return s = (nr[y] ?? (nr[y] = new Intl.NumberFormat(x, d))).format(h), m && (s = s.replace(/([,\.])/g, "_$1").replace(/_\,/g, i ?? ",").replace("_.", e ?? ".")), (t || +s != 0) && (!(a < 0) || f) || (s = "0"), a && +s != 0 && (s += "e" + (a < 0 ? "" : "+") + a), s;
      }
      let he = { dateFormat: function(h, t, e) {
        return ko.dateFormat(h, t, e);
      }, format: je, helpers: ks, numberFormat: hr };
      (function(h) {
        let t;
        h.rendererTypes = {}, h.getRendererType = function(e = t) {
          return h.rendererTypes[e] || h.rendererTypes[t];
        }, h.registerRendererType = function(e, i, s) {
          h.rendererTypes[e] = i, (!t || s) && (t = e, X.Renderer = i);
        };
      })(Et || (Et = {}));
      let $i = Et, { clamp: hn, pick: cn, pushUnique: dn, stableSort: cr } = J;
      (Nt || (Nt = {})).distribute = function h(t, e, i) {
        let s = t, r = s.reducedLen || e, o = (S, O) => S.target - O.target, a = [], l = t.length, c = [], f = a.push, d, m, x, y = !0, M, w, v = 0, T;
        for (d = l; d--; ) v += t[d].size;
        if (v > r) {
          for (cr(t, (S, O) => (O.rank || 0) - (S.rank || 0)), x = (T = t[0].rank === t[t.length - 1].rank) ? l / 2 : -1, m = T ? x : l - 1; x && v > r; ) M = t[d = Math.floor(m)], dn(c, d) && (v -= M.size), m += x, T && m >= t.length && (x /= 2, m = x);
          c.sort((S, O) => O - S).forEach((S) => f.apply(a, t.splice(S, 1)));
        }
        for (cr(t, o), t = t.map((S) => ({ size: S.size, targets: [S.target], align: cn(S.align, 0.5) })); y; ) {
          for (d = t.length; d--; ) M = t[d], w = (Math.min.apply(0, M.targets) + Math.max.apply(0, M.targets)) / 2, M.pos = hn(w - M.size * M.align, 0, e - M.size);
          for (d = t.length, y = !1; d--; ) d > 0 && t[d - 1].pos + t[d - 1].size > t[d].pos && (t[d - 1].size += t[d].size, t[d - 1].targets = t[d - 1].targets.concat(t[d].targets), t[d - 1].align = 0.5, t[d - 1].pos + t[d - 1].size > e && (t[d - 1].pos = e - t[d - 1].size), t.splice(d, 1), y = !0);
        }
        return f.apply(s, a), d = 0, t.some((S) => {
          let O = 0;
          return (S.targets || []).some(() => (s[d].pos = S.pos + O, i !== void 0 && Math.abs(s[d].pos - s[d].target) > i ? (s.slice(0, d + 1).forEach((L) => delete L.pos), s.reducedLen = (s.reducedLen || e) - 0.1 * e, s.reducedLen > 0.1 * e && h(s, e, i), !0) : (O += s[d].size, d++, !1)));
        }), cr(s, o), s;
      };
      let ws = Nt, { animate: pn, animObject: un, stop: Ao } = $t, { deg2rad: To, doc: bi, svg: So, SVG_NS: Si, win: Eo, isFirefox: Po } = X, { addEvent: gn, attr: dr, createElement: pr, crisp: Ms, css: Oo, defined: Be, erase: Lo, extend: Zi, fireEvent: ur, getAlignFactor: gr, isArray: fn, isFunction: mn, isNumber: zl, isObject: xn, isString: Do, merge: fr, objectEach: Ei, pick: Ue, pInt: _i, pushUnique: bn, replaceNested: yn, syncTimeout: vn, uniqueKey: Io } = J;
      class Zt {
        _defaultGetter(t) {
          let e = Ue(this[t + "Value"], this[t], this.element ? this.element.getAttribute(t) : null, 0);
          return /^-?[\d\.]+$/.test(e) && (e = parseFloat(e)), e;
        }
        _defaultSetter(t, e, i) {
          i.setAttribute(e, t);
        }
        add(t) {
          let e, i = this.renderer, s = this.element;
          return t && (this.parentGroup = t), this.textStr !== void 0 && this.element.nodeName === "text" && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(s), this.onAdd && this.onAdd(), this;
        }
        addClass(t, e) {
          let i = e ? "" : this.attr("class") || "";
          return (t = (t || "").split(/ /g).reduce(function(s, r) {
            return i.indexOf(r) === -1 && s.push(r), s;
          }, i ? [i] : []).join(" ")) !== i && this.attr("class", t), this;
        }
        afterSetters() {
          this.doTransform && (this.updateTransform(), this.doTransform = !1);
        }
        align(t, e, i, s = !0) {
          let r = this.renderer, o = r.alignedObjects, a = !!t;
          t ? (this.alignOptions = t, this.alignByTranslate = e, this.alignTo = i) : (t = this.alignOptions || {}, e = this.alignByTranslate, i = this.alignTo);
          let l = !i || Do(i) ? i || "renderer" : void 0;
          l && (a && bn(o, this), i = void 0);
          let c = Ue(i, r[l], r), f = (c.x || 0) + (t.x || 0) + ((c.width || 0) - (t.width || 0)) * gr(t.align), d = (c.y || 0) + (t.y || 0) + ((c.height || 0) - (t.height || 0)) * gr(t.verticalAlign), m = { "text-align": t?.align };
          return m[e ? "translateX" : "x"] = Math.round(f), m[e ? "translateY" : "y"] = Math.round(d), s && (this[this.placed ? "animate" : "attr"](m), this.placed = !0), this.alignAttr = m, this;
        }
        alignSetter(t) {
          let e = { left: "start", center: "middle", right: "end" };
          e[t] && (this.alignValue = t, this.element.setAttribute("text-anchor", e[t]));
        }
        animate(t, e, i) {
          let s = un(Ue(e, this.renderer.globalAnimation, !0)), r = s.defer;
          return bi.hidden && (s.duration = 0), s.duration !== 0 ? (i && (s.complete = i), vn(() => {
            this.element && pn(this, t, s);
          }, r)) : (this.attr(t, void 0, i || s.complete), Ei(t, function(o, a) {
            s.step && s.step.call(this, o, { prop: a, pos: 1, elem: this });
          }, this)), this;
        }
        applyTextOutline(t) {
          let e = this.element;
          t.indexOf("contrast") !== -1 && (t = t.replace(/contrast/g, this.renderer.getContrast(e.style.fill)));
          let i = t.indexOf(" "), s = t.substring(i + 1), r = t.substring(0, i);
          if (r && r !== "none" && X.svg) {
            this.fakeTS = !0, r = r.replace(/(^[\d\.]+)(.*?)$/g, function(f, d, m) {
              return 2 * Number(d) + m;
            }), this.removeTextOutline();
            let o = bi.createElementNS(Si, "tspan");
            dr(o, { class: "highcharts-text-outline", fill: s, stroke: s, "stroke-width": r, "stroke-linejoin": "round" });
            let a = e.querySelector("textPath") || e;
            [].forEach.call(a.childNodes, (f) => {
              let d = f.cloneNode(!0);
              d.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((m) => d.removeAttribute(m)), o.appendChild(d);
            });
            let l = 0;
            [].forEach.call(a.querySelectorAll("text tspan"), (f) => {
              l += Number(f.getAttribute("dy"));
            });
            let c = bi.createElementNS(Si, "tspan");
            c.textContent = "​", dr(c, { x: Number(e.getAttribute("x")), dy: -l }), o.appendChild(c), a.insertBefore(o, a.firstChild);
          }
        }
        attr(t, e, i, s) {
          let { element: r } = this, o = Zt.symbolCustomAttribs, a, l, c = this, f;
          return typeof t == "string" && e !== void 0 && (a = t, (t = {})[a] = e), typeof t == "string" ? c = (this[t + "Getter"] || this._defaultGetter).call(this, t, r) : (Ei(t, function(d, m) {
            f = !1, s || Ao(this, m), this.symbolName && o.indexOf(m) !== -1 && (l || (this.symbolAttr(t), l = !0), f = !0), this.rotation && (m === "x" || m === "y") && (this.doTransform = !0), f || (this[m + "Setter"] || this._defaultSetter).call(this, d, m, r);
          }, this), this.afterSetters()), i && i.call(this), c;
        }
        clip(t) {
          if (t && !t.clipPath) {
            let e = Io() + "-", i = this.renderer.createElement("clipPath").attr({ id: e }).add(this.renderer.defs);
            Zi(t, { clipPath: i, id: e, count: 0 }), t.add(i);
          }
          return this.attr("clip-path", t ? `url(${this.renderer.url}#${t.id})` : "none");
        }
        crisp(t, e) {
          e = Math.round(e || t.strokeWidth || 0);
          let i = t.x || this.x || 0, s = t.y || this.y || 0, r = (t.width || this.width || 0) + i, o = (t.height || this.height || 0) + s, a = Ms(i, e), l = Ms(s, e);
          return Zi(t, { x: a, y: l, width: Ms(r, e) - a, height: Ms(o, e) - l }), Be(t.strokeWidth) && (t.strokeWidth = e), t;
        }
        complexColor(t, e, i) {
          let s = this.renderer, r, o, a, l, c, f, d, m, x, y, M = [], w;
          ur(this.renderer, "complexColor", { args: arguments }, function() {
            if (t.radialGradient ? o = "radialGradient" : t.linearGradient && (o = "linearGradient"), o) {
              if (a = t[o], c = s.gradients, f = t.stops, x = i.radialReference, fn(a) && (t[o] = a = { x1: a[0], y1: a[1], x2: a[2], y2: a[3], gradientUnits: "userSpaceOnUse" }), o === "radialGradient" && x && !Be(a.gradientUnits) && (l = a, a = fr(a, s.getRadialAttr(x, l), { gradientUnits: "userSpaceOnUse" })), Ei(a, function(v, T) {
                T !== "id" && M.push(T, v);
              }), Ei(f, function(v) {
                M.push(v);
              }), c[M = M.join(",")]) y = c[M].attr("id");
              else {
                a.id = y = Io();
                let v = c[M] = s.createElement(o).attr(a).add(s.defs);
                v.radAttr = l, v.stops = [], f.forEach(function(T) {
                  T[1].indexOf("rgba") === 0 ? (d = (r = Tt.parse(T[1])).get("rgb"), m = r.get("a")) : (d = T[1], m = 1);
                  let S = s.createElement("stop").attr({ offset: T[0], "stop-color": d, "stop-opacity": m }).add(v);
                  v.stops.push(S);
                });
              }
              w = "url(" + s.url + "#" + y + ")", i.setAttribute(e, w), i.gradient = M, t.toString = function() {
                return w;
              };
            }
          });
        }
        css(t) {
          let e = this.styles, i = {}, s = this.element, r, o = !e;
          if (e && Ei(t, function(a, l) {
            e && e[l] !== a && (i[l] = a, o = !0);
          }), o) {
            e && (t = Zi(e, i)), t.width === null || t.width === "auto" ? delete this.textWidth : s.nodeName.toLowerCase() === "text" && t.width && (r = this.textWidth = _i(t.width)), Zi(this.styles, t), r && !So && this.renderer.forExport && delete t.width;
            let a = Po && t.fontSize || null;
            a && (zl(a) || /^\d+$/.test(a)) && (t.fontSize += "px");
            let l = fr(t);
            s.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "whiteSpace", "width"].forEach((c) => l && delete l[c]), l.color && (l.fill = l.color, delete l.color)), Oo(s, l);
          }
          return this.added && (this.element.nodeName === "text" && this.renderer.buildText(this), t.textOutline && this.applyTextOutline(t.textOutline)), this;
        }
        dashstyleSetter(t) {
          let e, i = this["stroke-width"];
          if (i === "inherit" && (i = 1), t) {
            let s = (t = t.toLowerCase()).replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
            for (e = s.length; e--; ) s[e] = "" + _i(s[e]) * Ue(i, NaN);
            t = s.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t);
          }
        }
        destroy() {
          let t = this, e = t.element || {}, i = t.renderer, s = e.ownerSVGElement, r = e.nodeName === "SPAN" && t.parentGroup || void 0, o, a;
          if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, Ao(t), t.clipPath && s) {
            let l = t.clipPath;
            [].forEach.call(s.querySelectorAll("[clip-path],[CLIP-PATH]"), function(c) {
              c.getAttribute("clip-path").indexOf(l.element.id) > -1 && c.removeAttribute("clip-path");
            }), t.clipPath = l.destroy();
          }
          if (t.stops) {
            for (a = 0; a < t.stops.length; a++) t.stops[a].destroy();
            t.stops.length = 0, t.stops = void 0;
          }
          for (t.safeRemoveChild(e); r?.div && r.div.childNodes.length === 0; ) o = r.parentGroup, t.safeRemoveChild(r.div), delete r.div, r = o;
          t.alignOptions && Lo(i.alignedObjects, t), Ei(t, (l, c) => {
            (t[c]?.parentGroup === t || ["connector", "foreignObject"].indexOf(c) !== -1) && t[c]?.destroy?.(), delete t[c];
          });
        }
        dSetter(t, e, i) {
          fn(t) && (typeof t[0] == "string" && (t = this.renderer.pathToSegments(t)), this.pathArray = t, t = t.reduce((s, r, o) => r?.join ? (o ? s + " " : "") + r.join(" ") : (r || "").toString(), "")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t);
        }
        fillSetter(t, e, i) {
          typeof t == "string" ? i.setAttribute(e, t) : t && this.complexColor(t, e, i);
        }
        hrefSetter(t, e, i) {
          i.setAttributeNS("http://www.w3.org/1999/xlink", e, t);
        }
        getBBox(t, e) {
          let i, s, r, o, { alignValue: a, element: l, renderer: c, styles: f, textStr: d } = this, { cache: m, cacheKeys: x } = c, y = l.namespaceURI === this.SVG_NS, M = Ue(e, this.rotation, 0), w = c.styledMode ? l && Zt.prototype.getStyle.call(l, "font-size") : f.fontSize;
          if (Be(d) && ((o = d.toString()).indexOf("<") === -1 && (o = o.replace(/\d/g, "0")), o += ["", c.rootFontSize, w, M, this.textWidth, a, f.lineClamp, f.textOverflow, f.fontWeight].join(",")), o && !t && (i = m[o]), !i || i.polygon) {
            if (y || c.forExport) {
              try {
                r = this.fakeTS && function(T) {
                  let S = l.querySelector(".highcharts-text-outline");
                  S && Oo(S, { display: T });
                }, mn(r) && r("none"), i = l.getBBox ? Zi({}, l.getBBox()) : { width: l.offsetWidth, height: l.offsetHeight, x: 0, y: 0 }, mn(r) && r("");
              } catch {
              }
              (!i || i.width < 0) && (i = { x: 0, y: 0, width: 0, height: 0 });
            } else i = this.htmlGetBBox();
            s = i.height, y && (i.height = s = { "11px,17": 14, "13px,20": 16 }[`${w || ""},${Math.round(s)}`] || s), M && (i = this.getRotatedBox(i, M));
            let v = { bBox: i };
            ur(this, "afterGetBBox", v), i = v.bBox;
          }
          if (o && (d === "" || i.height > 0)) {
            for (; x.length > 250; ) delete m[x.shift()];
            m[o] || x.push(o), m[o] = i;
          }
          return i;
        }
        getRotatedBox(t, e) {
          let { x: i, y: s, width: r, height: o } = t, { alignValue: a, translateY: l, rotationOriginX: c = 0, rotationOriginY: f = 0 } = this, d = gr(a), m = Number(this.element.getAttribute("y") || 0) - (l ? 0 : s), x = e * To, y = (e - 90) * To, M = Math.cos(x), w = Math.sin(x), v = r * M, T = r * w, S = Math.cos(y), O = Math.sin(y), [[L, D], [N, I]] = [c, f].map((at) => [at - at * M, at * w]), W = i + d * (r - v) + L + I + m * S, j = W + v, H = j - o * S, K = H - v, Q = s + m - d * T - D + N + m * O, et = Q + T, V = et - o * O, Z = V - T, tt = Math.min(W, j, H, K), St = Math.min(Q, et, V, Z), gt = Math.max(W, j, H, K) - tt, xe = Math.max(Q, et, V, Z) - St;
          return { x: tt, y: St, width: gt, height: xe, polygon: [[W, Q], [j, et], [H, V], [K, Z]] };
        }
        getStyle(t) {
          return Eo.getComputedStyle(this.element || this, "").getPropertyValue(t);
        }
        hasClass(t) {
          return ("" + this.attr("class")).split(" ").indexOf(t) !== -1;
        }
        hide() {
          return this.attr({ visibility: "hidden" });
        }
        htmlGetBBox() {
          return { height: 0, width: 0, x: 0, y: 0 };
        }
        constructor(t, e) {
          this.onEvents = {}, this.opacity = 1, this.SVG_NS = Si, this.element = e === "span" || e === "body" ? pr(e) : bi.createElementNS(this.SVG_NS, e), this.renderer = t, this.styles = {}, ur(this, "afterInit");
        }
        on(t, e) {
          let { onEvents: i } = this;
          return i[t] && i[t](), i[t] = gn(this.element, t, e), this;
        }
        opacitySetter(t, e, i) {
          let s = Number(Number(t).toFixed(3));
          this.opacity = s, i.setAttribute(e, s);
        }
        reAlign() {
          this.alignOptions?.width && this.alignOptions.align !== "left" && (this.alignOptions.width = this.getBBox().width, this.placed = !1, this.align());
        }
        removeClass(t) {
          return this.attr("class", ("" + this.attr("class")).replace(Do(t) ? RegExp(`(^| )${t}( |$)`) : t, " ").replace(/ +/g, " ").trim());
        }
        removeTextOutline() {
          let t = this.element.querySelector("tspan.highcharts-text-outline");
          t && this.safeRemoveChild(t);
        }
        safeRemoveChild(t) {
          let e = t.parentNode;
          e && e.removeChild(t);
        }
        setRadialReference(t) {
          let e = this.element.gradient && this.renderer.gradients[this.element.gradient] || void 0;
          return this.element.radialReference = t, e?.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this;
        }
        shadow(t) {
          let { renderer: e } = this, i = fr(this.parentGroup?.rotation === 90 ? { offsetX: -1, offsetY: -1 } : {}, xn(t) ? t : {}), s = e.shadowDefinition(i);
          return this.attr({ filter: t ? `url(${e.url}#${s})` : "none" });
        }
        show(t = !0) {
          return this.attr({ visibility: t ? "inherit" : "visible" });
        }
        "stroke-widthSetter"(t, e, i) {
          this[e] = t, i.setAttribute(e, t);
        }
        strokeWidth() {
          if (!this.renderer.styledMode) return this["stroke-width"] || 0;
          let t = this.getStyle("stroke-width"), e = 0, i;
          return /px$/.test(t) ? e = _i(t) : t !== "" && (dr(i = bi.createElementNS(Si, "rect"), { width: t, "stroke-width": 0 }), this.element.parentNode.appendChild(i), e = i.getBBox().width, i.parentNode.removeChild(i)), e;
        }
        symbolAttr(t) {
          let e = this;
          Zt.symbolCustomAttribs.forEach(function(i) {
            e[i] = Ue(t[i], e[i]);
          }), e.attr({ d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e) });
        }
        textSetter(t) {
          t !== this.textStr && (delete this.textPxLength, this.textStr = t, this.added && this.renderer.buildText(this), this.reAlign());
        }
        titleSetter(t) {
          let e = this.element, i = e.getElementsByTagName("title")[0] || bi.createElementNS(this.SVG_NS, "title");
          e.insertBefore ? e.insertBefore(i, e.firstChild) : e.appendChild(i), i.textContent = yn(Ue(t, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        }
        toFront() {
          let t = this.element;
          return t.parentNode.appendChild(t), this;
        }
        translate(t, e) {
          return this.attr({ translateX: t, translateY: e });
        }
        updateTransform(t = "transform") {
          let { element: e, foreignObject: i, matrix: s, padding: r, rotation: o = 0, rotationOriginX: a, rotationOriginY: l, scaleX: c, scaleY: f, text: d, translateX: m = 0, translateY: x = 0 } = this, y = ["translate(" + m + "," + x + ")"];
          Be(s) && y.push("matrix(" + s.join(",") + ")"), o && (y.push("rotate(" + o + " " + (a ?? e.getAttribute("x") ?? this.x ?? 0) + " " + (l ?? e.getAttribute("y") ?? this.y ?? 0) + ")"), d?.element.tagName !== "SPAN" || d?.foreignObject || d.attr({ rotation: o, rotationOriginX: (a || 0) - r, rotationOriginY: (l || 0) - r })), (Be(c) || Be(f)) && y.push("scale(" + Ue(c, 1) + " " + Ue(f, 1) + ")"), y.length && !(d || this).textPath && (i?.element || e).setAttribute(t, y.join(" "));
        }
        visibilitySetter(t, e, i) {
          t === "inherit" ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t;
        }
        xGetter(t) {
          return this.element.nodeName === "circle" && (t === "x" ? t = "cx" : t === "y" && (t = "cy")), this._defaultGetter(t);
        }
        zIndexSetter(t, e) {
          let i = this.renderer, s = this.parentGroup, r = (s || i).element || i.box, o = this.element, a = r === i.box, l, c, f, d = !1, m, x = this.added, y;
          if (Be(t) ? (o.setAttribute("data-z-index", t), t *= 1, this[e] === t && (x = !1)) : Be(this[e]) && o.removeAttribute("data-z-index"), this[e] = t, x) {
            for ((t = this.zIndex) && s && (s.handleZ = !0), y = (l = r.childNodes).length - 1; y >= 0 && !d; y--) m = !Be(f = (c = l[y]).getAttribute("data-z-index")), c !== o && (t < 0 && m && !a && !y ? (r.insertBefore(o, l[y]), d = !0) : (_i(f) <= t || m && (!Be(t) || t >= 0)) && (r.insertBefore(o, l[y + 1]), d = !0));
            d || (r.insertBefore(o, l[3 * !!a]), d = !0);
          }
          return d;
        }
      }
      Zt.symbolCustomAttribs = ["anchorX", "anchorY", "clockwise", "end", "height", "innerR", "r", "start", "width", "x", "y"], Zt.prototype.strokeSetter = Zt.prototype.fillSetter, Zt.prototype.yGetter = Zt.prototype.xGetter, Zt.prototype.matrixSetter = Zt.prototype.rotationOriginXSetter = Zt.prototype.rotationOriginYSetter = Zt.prototype.rotationSetter = Zt.prototype.scaleXSetter = Zt.prototype.scaleYSetter = Zt.prototype.translateXSetter = Zt.prototype.translateYSetter = Zt.prototype.verticalAlignSetter = function(h, t) {
        this[t] = h, this.doTransform = !0;
      };
      let Pe = Zt, { defined: Bo, extend: kn, getAlignFactor: No, isNumber: Ji, merge: Cs, pick: Qi, removeEvent: si } = J;
      class ri extends Pe {
        constructor(t, e, i, s, r, o, a, l, c, f) {
          let d;
          super(t, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.doUpdate = !1, this.textStr = e, this.x = i, this.y = s, this.anchorX = o, this.anchorY = a, this.baseline = c, this.className = f, this.addClass(f === "button" ? "highcharts-no-tooltip" : "highcharts-label"), f && this.addClass("highcharts-" + f), this.text = t.text(void 0, 0, 0, l).attr({ zIndex: 1 }), typeof r == "string" && ((d = /^url\((.*?)\)$/.test(r)) || this.renderer.symbols[r]) && (this.symbolKey = r), this.bBox = ri.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t.styledMode || d, this.deferredAttr = {}, this.alignFactor = 0;
        }
        alignSetter(t) {
          let e = No(t);
          this.textAlign = t, e !== this.alignFactor && (this.alignFactor = e, this.bBox && Ji(this.xSetting) && this.attr({ x: this.xSetting }));
        }
        anchorXSetter(t, e) {
          this.anchorX = t, this.boxAttr(e, Math.round(t) - this.getCrispAdjust() - this.xSetting);
        }
        anchorYSetter(t, e) {
          this.anchorY = t, this.boxAttr(e, t - this.ySetting);
        }
        boxAttr(t, e) {
          this.box ? this.box.attr(t, e) : this.deferredAttr[t] = e;
        }
        css(t) {
          if (t) {
            let e = {};
            t = Cs(t), ri.textProps.forEach((i) => {
              t[i] !== void 0 && (e[i] = t[i], delete t[i]);
            }), this.text.css(e), "fontSize" in e || "fontWeight" in e ? this.updateTextPadding() : ("width" in e || "textOverflow" in e) && this.updateBoxSize();
          }
          return Pe.prototype.css.call(this, t);
        }
        destroy() {
          si(this.element, "mouseenter"), si(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), Pe.prototype.destroy.call(this);
        }
        fillSetter(t, e) {
          t && (this.needsBox = !0), this.fill = t, this.boxAttr(e, t);
        }
        getBBox(t, e) {
          this.textStr && this.bBox.width === 0 && this.bBox.height === 0 && this.updateBoxSize();
          let { padding: i, height: s = 0, translateX: r = 0, translateY: o = 0, width: a = 0 } = this, l = Qi(this.paddingLeft, i), c = e ?? (this.rotation || 0), f = { width: a, height: s, x: r + this.bBox.x - l, y: o + this.bBox.y - i + this.baselineOffset };
          return c && (f = this.getRotatedBox(f, c)), f;
        }
        getCrispAdjust() {
          return (this.renderer.styledMode && this.box ? this.box.strokeWidth() : this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
        }
        heightSetter(t) {
          this.heightSetting = t, this.doUpdate = !0;
        }
        afterSetters() {
          super.afterSetters(), this.doUpdate && (this.updateBoxSize(), this.doUpdate = !1);
        }
        onAdd() {
          this.text.add(this), this.attr({ text: Qi(this.textStr, ""), x: this.x || 0, y: this.y || 0 }), this.box && Bo(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
        }
        paddingSetter(t, e) {
          Ji(t) ? t !== this[e] && (this[e] = t, this.updateTextPadding()) : this[e] = void 0;
        }
        rSetter(t, e) {
          this.boxAttr(e, t);
        }
        strokeSetter(t, e) {
          this.stroke = t, this.boxAttr(e, t);
        }
        "stroke-widthSetter"(t, e) {
          t && (this.needsBox = !0), this["stroke-width"] = t, this.boxAttr(e, t);
        }
        "text-alignSetter"(t) {
          this.textAlign = this["text-align"] = t, this.updateTextPadding();
        }
        textSetter(t) {
          t !== void 0 && this.text.attr({ text: t }), this.updateTextPadding(), this.reAlign();
        }
        updateBoxSize() {
          let t, e = this.text, i = {}, s = this.padding, r = this.bBox = (!Ji(this.widthSetting) || !Ji(this.heightSetting) || this.textAlign) && Bo(e.textStr) ? e.getBBox(void 0, 0) : ri.emptyBBox;
          this.width = this.getPaddedWidth(), this.height = (this.heightSetting || r.height || 0) + 2 * s;
          let o = this.renderer.fontMetrics(e);
          if (this.baselineOffset = s + Math.min((this.text.firstLineMetrics || o).b, r.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - o.h) / 2), this.needsBox && !e.textPath) {
            if (!this.box) {
              let a = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
              a.addClass((this.className === "button" ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), a.add(this);
            }
            i.x = t = this.getCrispAdjust(), i.y = (this.baseline ? -this.baselineOffset : 0) + t, i.width = Math.round(this.width), i.height = Math.round(this.height), this.box.attr(kn(i, this.deferredAttr)), this.deferredAttr = {};
          }
        }
        updateTextPadding() {
          let t = this.text, e = t.styles.textAlign || this.textAlign;
          if (!t.textPath) {
            this.updateBoxSize();
            let i = this.baseline ? 0 : this.baselineOffset, s = (this.paddingLeft ?? this.padding) + No(e) * (this.widthSetting ?? this.bBox.width);
            (s !== t.x || i !== t.y) && (t.attr({ align: e, x: s }), i !== void 0 && t.attr("y", i)), t.x = s, t.y = i;
          }
        }
        widthSetter(t) {
          this.widthSetting = Ji(t) ? t : void 0, this.doUpdate = !0;
        }
        getPaddedWidth() {
          let t = this.padding, e = Qi(this.paddingLeft, t), i = Qi(this.paddingRight, t);
          return (this.widthSetting || this.bBox.width || 0) + e + i;
        }
        xSetter(t) {
          this.x = t, this.alignFactor && (t -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.anchorX && (this["forceAnimate:anchorX"] = !0), this.xSetting = Math.round(t), this.attr("translateX", this.xSetting);
        }
        ySetter(t) {
          this.anchorY && (this["forceAnimate:anchorY"] = !0), this.ySetting = this.y = Math.round(t), this.attr("translateY", this.ySetting);
        }
      }
      ri.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }, ri.textProps = ["color", "direction", "fontFamily", "fontSize", "fontStyle", "fontWeight", "lineClamp", "lineHeight", "textAlign", "textDecoration", "textOutline", "textOverflow", "whiteSpace", "width"];
      let { defined: Ro, isNumber: wn, pick: yi } = J;
      function mr(h, t, e, i, s) {
        let r = [];
        if (s) {
          let o = s.start || 0, a = s.end || 0, l = yi(s.r, e), c = yi(s.r, i || e), f = 2e-4 / (s.borderRadius ? 1 : Math.max(l, 1)), d = Math.abs(a - o - 2 * Math.PI) < f;
          d && (o = Math.PI / 2, a = 2.5 * Math.PI - f);
          let m = s.innerR, x = yi(s.open, d), y = Math.cos(o), M = Math.sin(o), w = Math.cos(a), v = Math.sin(a), T = yi(s.longArc, a - o - Math.PI < f ? 0 : 1), S = ["A", l, c, 0, T, yi(s.clockwise, 1), h + l * w, t + c * v];
          S.params = { start: o, end: a, cx: h, cy: t }, r.push(["M", h + l * y, t + c * M], S), Ro(m) && ((S = ["A", m, m, 0, T, Ro(s.clockwise) ? 1 - s.clockwise : 0, h + m * y, t + m * M]).params = { start: a, end: o, cx: h, cy: t }, r.push(x ? ["M", h + m * w, t + m * v] : ["L", h + m * w, t + m * v], S)), x || r.push(["Z"]);
        }
        return r;
      }
      function zo(h, t, e, i, s) {
        return s?.r ? xr(h, t, e, i, s) : [["M", h, t], ["L", h + e, t], ["L", h + e, t + i], ["L", h, t + i], ["Z"]];
      }
      function xr(h, t, e, i, s) {
        let r = s?.r || 0;
        return [["M", h + r, t], ["L", h + e - r, t], ["A", r, r, 0, 0, 1, h + e, t + r], ["L", h + e, t + i - r], ["A", r, r, 0, 0, 1, h + e - r, t + i], ["L", h + r, t + i], ["A", r, r, 0, 0, 1, h, t + i - r], ["L", h, t + r], ["A", r, r, 0, 0, 1, h + r, t], ["Z"]];
      }
      let oi = { arc: mr, callout: function(h, t, e, i, s) {
        let r = Math.min(s?.r || 0, e, i), o = r + 6, a = s?.anchorX, l = s?.anchorY || 0, c = xr(h, t, e, i, { r });
        if (!wn(a) || a < e && a > 0 && l < i && l > 0) return c;
        if (h + a > e - o) if (l > t + o && l < t + i - o) c.splice(3, 1, ["L", h + e, l - 6], ["L", h + e + 6, l], ["L", h + e, l + 6], ["L", h + e, t + i - r]);
        else if (a < e) {
          let f = l < t + o, d = f ? t : t + i;
          c.splice(f ? 2 : 5, 0, ["L", a, l], ["L", h + e - r, d]);
        } else c.splice(3, 1, ["L", h + e, i / 2], ["L", a, l], ["L", h + e, i / 2], ["L", h + e, t + i - r]);
        else if (h + a < o) if (l > t + o && l < t + i - o) c.splice(7, 1, ["L", h, l + 6], ["L", h - 6, l], ["L", h, l - 6], ["L", h, t + r]);
        else if (a > 0) {
          let f = l < t + o, d = f ? t : t + i;
          c.splice(f ? 1 : 6, 0, ["L", a, l], ["L", h + r, d]);
        } else c.splice(7, 1, ["L", h, i / 2], ["L", a, l], ["L", h, i / 2], ["L", h, t + r]);
        else l > i && a < e - o ? c.splice(5, 1, ["L", a + 6, t + i], ["L", a, t + i + 6], ["L", a - 6, t + i], ["L", h + r, t + i]) : l < 0 && a > o && c.splice(1, 1, ["L", a - 6, t], ["L", a, t - 6], ["L", a + 6, t], ["L", e - r, t]);
        return c;
      }, circle: function(h, t, e, i) {
        return mr(h + e / 2, t + i / 2, e / 2, i / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: !1 });
      }, diamond: function(h, t, e, i) {
        return [["M", h + e / 2, t], ["L", h + e, t + i / 2], ["L", h + e / 2, t + i], ["L", h, t + i / 2], ["Z"]];
      }, rect: zo, roundedRect: xr, square: zo, triangle: function(h, t, e, i) {
        return [["M", h + e / 2, t], ["L", h + e, t + i], ["L", h, t + i], ["Z"]];
      }, "triangle-down": function(h, t, e, i) {
        return [["M", h, t], ["L", h + e, t], ["L", h + e / 2, t + i], ["Z"]];
      } }, { doc: Pi, SVG_NS: Fo, win: Ho } = X, { attr: br, extend: ts, fireEvent: Wo, isString: es, objectEach: Mn, pick: Cn } = J, ai = (h, t) => h.substring(0, t) + "…", An = class {
        constructor(h) {
          let t = h.styles;
          this.renderer = h.renderer, this.svgElement = h, this.width = h.textWidth, this.textLineHeight = t?.lineHeight, this.textOutline = t?.textOutline, this.ellipsis = t?.textOverflow === "ellipsis", this.lineClamp = t?.lineClamp, this.noWrap = t?.whiteSpace === "nowrap";
        }
        buildSVG() {
          let h = this.svgElement, t = h.element, e = h.renderer, i = Cn(h.textStr, "").toString(), s = i.indexOf("<") !== -1, r = t.childNodes, o = !h.added && e.box, a = [i, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, h.getStyle("font-size"), h.styles.lineClamp, this.width].join(",");
          if (a !== h.textCache) {
            h.textCache = a, delete h.actualWidth;
            for (let l = r.length; l--; ) t.removeChild(r[l]);
            if (s || this.ellipsis || this.width || h.textPath || i.indexOf(" ") !== -1 && (!this.noWrap || /<br.*?>/g.test(i))) {
              if (i !== "") {
                o && o.appendChild(t);
                let l = new Bt(i);
                this.modifyTree(l.nodes), l.addToDOM(t), this.modifyDOM(), this.ellipsis && (t.textContent || "").indexOf("…") !== -1 && h.attr("title", this.unescapeEntities(h.textStr || "", ["&lt;", "&gt;"])), o && o.removeChild(t);
              }
            } else t.appendChild(Pi.createTextNode(this.unescapeEntities(i)));
            es(this.textOutline) && h.applyTextOutline && h.applyTextOutline(this.textOutline);
          }
        }
        modifyDOM() {
          let h, t = this.svgElement, e = br(t.element, "x");
          for (t.firstLineMetrics = void 0; (h = t.element.firstChild) && /^[\s\u200B]*$/.test(h.textContent || " "); ) t.element.removeChild(h);
          [].forEach.call(t.element.querySelectorAll("tspan.highcharts-br"), (o, a) => {
            o.nextSibling && o.previousSibling && (a === 0 && o.previousSibling.nodeType === 1 && (t.firstLineMetrics = t.renderer.fontMetrics(o.previousSibling)), br(o, { dy: this.getLineHeight(o.nextSibling), x: e }));
          });
          let i = this.width || 0;
          if (!i) return;
          let s = (o, a) => {
            let l = o.textContent || "", c = l.replace(/([^\^])-/g, "$1- ").split(" "), f = !this.noWrap && (c.length > 1 || t.element.childNodes.length > 1), d = this.getLineHeight(a), m = Math.max(0, i - 0.8 * d), x = 0, y = t.actualWidth;
            if (f) {
              let M = [], w = [];
              for (; a.firstChild && a.firstChild !== o; ) w.push(a.firstChild), a.removeChild(a.firstChild);
              for (; c.length; ) if (c.length && !this.noWrap && x > 0 && (M.push(o.textContent || ""), o.textContent = c.join(" ").replace(/- /g, "-")), this.truncate(o, void 0, c, x === 0 && y || 0, i, m, (v, T) => c.slice(0, T).join(" ").replace(/- /g, "-")), y = t.actualWidth, x++, this.lineClamp && x >= this.lineClamp) {
                c.length && (this.truncate(o, o.textContent || "", void 0, 0, i, m, ai), o.textContent = o.textContent?.replace("…", "") + "…");
                break;
              }
              w.forEach((v) => {
                a.insertBefore(v, o);
              }), M.forEach((v) => {
                a.insertBefore(Pi.createTextNode(v), o);
                let T = Pi.createElementNS(Fo, "tspan");
                T.textContent = "​", br(T, { dy: d, x: e }), a.insertBefore(T, o);
              });
            } else this.ellipsis && l && this.truncate(o, l, void 0, 0, i, m, ai);
          }, r = (o) => {
            [].slice.call(o.childNodes).forEach((a) => {
              a.nodeType === Ho.Node.TEXT_NODE ? s(a, o) : (a.className.baseVal.indexOf("highcharts-br") !== -1 && (t.actualWidth = 0), r(a));
            });
          };
          r(t.element);
        }
        getLineHeight(h) {
          let t = h.nodeType === Ho.Node.TEXT_NODE ? h.parentElement : h;
          return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(t || this.svgElement.element).h;
        }
        modifyTree(h) {
          let t = (e, i) => {
            let { attributes: s = {}, children: r, style: o = {}, tagName: a } = e, l = this.renderer.styledMode;
            if (a === "b" || a === "strong" ? l ? s.class = "highcharts-strong" : o.fontWeight = "bold" : (a === "i" || a === "em") && (l ? s.class = "highcharts-emphasized" : o.fontStyle = "italic"), o?.color && (o.fill = o.color), a === "br") {
              s.class = "highcharts-br", e.textContent = "​";
              let c = h[i + 1];
              c?.textContent && (c.textContent = c.textContent.replace(/^ +/gm, ""));
            } else a === "a" && r && r.some((c) => c.tagName === "#text") && (e.children = [{ children: r, tagName: "tspan" }]);
            a !== "#text" && a !== "a" && (e.tagName = "tspan"), ts(e, { attributes: s, style: o }), r && r.filter((c) => c.tagName !== "#text").forEach(t);
          };
          h.forEach(t), Wo(this.svgElement, "afterModifyTree", { nodes: h });
        }
        truncate(h, t, e, i, s, r, o) {
          let a, l, c = this.svgElement, { rotation: f } = c, d = [], m = e && !i ? 1 : 0, x = (t || e || "").length, y = x;
          e || (s = r);
          let M = function(w, v) {
            let T = v || w, S = h.parentNode;
            if (S && d[T] === void 0 && S.getSubStringLength) try {
              d[T] = i + S.getSubStringLength(0, e ? T + 1 : T);
            } catch {
            }
            return d[T];
          };
          if (c.rotation = 0, i + (l = M(h.textContent.length)) > s) {
            for (; m <= x; ) y = Math.ceil((m + x) / 2), e && (a = o(e, y)), l = M(y, a && a.length - 1), m === x ? m = x + 1 : l > s ? x = y - 1 : m = y;
            x === 0 ? h.textContent = "" : t && x === t.length - 1 || (h.textContent = a || o(t || e, y)), this.ellipsis && l > s && this.truncate(h, h.textContent || "", void 0, 0, s, r, ai);
          }
          e && e.splice(0, y), c.actualWidth = l, c.rotation = f;
        }
        unescapeEntities(h, t) {
          return Mn(this.renderer.escapes, function(e, i) {
            t && t.indexOf(e) !== -1 || (h = h.toString().replace(RegExp(e, "g"), i));
          }), h;
        }
      }, { defaultOptions: Tn } = fe, { charts: yr, deg2rad: Xo, doc: vi, isFirefox: Jt, isMS: vr, isWebKit: As, noop: Oi, SVG_NS: Sn, symbolSizes: ni, win: kr } = X, { addEvent: Ts, attr: Li, createElement: Go, crisp: Oe, css: Ve, defined: _t, destroyObjectProperties: Ss, extend: li, isArray: Es, isNumber: Ne, isObject: is, isString: wr, merge: Mr, pick: Cr, pInt: En, replaceNested: Pn, uniqueKey: On } = J;
      class Ps {
        constructor(t, e, i, s, r, o, a) {
          let l, c;
          this.x = 0, this.y = 0;
          let f = this.createElement("svg").attr({ version: "1.1", class: "highcharts-root" }), d = f.element;
          a || f.css(this.getStyle(s || {})), t.appendChild(d), Li(t, "dir", "ltr"), t.innerHTML.indexOf("xmlns") === -1 && Li(d, "xmlns", this.SVG_NS), this.box = d, this.boxWrapper = f, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(vi.createTextNode("Created with Highcharts 12.4.0")), this.defs = this.createElement("defs").add(), this.allowHTML = o, this.forExport = r, this.styledMode = a, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = f.getStyle("font-size"), this.setSize(e, i, !1), Jt && t.getBoundingClientRect && ((l = function() {
            Ve(t, { left: 0, top: 0 }), c = t.getBoundingClientRect(), Ve(t, { left: Math.ceil(c.left) - c.left + "px", top: Math.ceil(c.top) - c.top + "px" });
          })(), this.unSubPixelFix = Ts(kr, "resize", l));
        }
        definition(t) {
          return new Bt([t]).addToDOM(this.defs.element);
        }
        getReferenceURL() {
          if ((Jt || As) && vi.getElementsByTagName("base").length) {
            if (!_t(Lt)) {
              let t = On(), e = new Bt([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: t }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": `url(#${t})`, fill: "rgba(0,0,0,0.001)" } }] }]).addToDOM(vi.body);
              Ve(e, { position: "fixed", top: 0, left: 0, zIndex: 9e5 }), Lt = vi.elementFromPoint(6, 6)?.id === "hitme", vi.body.removeChild(e);
            }
            if (Lt) return Pn(kr.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"]);
          }
          return "";
        }
        getStyle(t) {
          return this.style = li({ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif', fontSize: "1rem" }, t), this.style;
        }
        setStyle(t) {
          this.boxWrapper.css(this.getStyle(t));
        }
        isHidden() {
          return !this.boxWrapper.getBBox().width;
        }
        destroy() {
          let t = this.defs;
          return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), Ss(this.gradients || {}), this.gradients = null, this.defs = t.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null, null;
        }
        createElement(t) {
          return new this.Element(this, t);
        }
        getRadialAttr(t, e) {
          return { cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2], cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2], r: (e.r || 0) * t[2] };
        }
        shadowDefinition(t) {
          let e = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(t).map((s) => `${s}-${t[s]}`)].join("-").toLowerCase().replace(/[^a-z\d\-]/g, ""), i = Mr({ color: "#000000", offsetX: 1, offsetY: 1, opacity: 0.15, width: 5 }, t);
          return this.defs.element.querySelector(`#${e}`) || this.definition({ tagName: "filter", attributes: { id: e, filterUnits: i.filterUnits }, children: this.getShadowFilterContent(i) }), e;
        }
        getShadowFilterContent(t) {
          return [{ tagName: "feDropShadow", attributes: { dx: t.offsetX, dy: t.offsetY, "flood-color": t.color, "flood-opacity": Math.min(5 * t.opacity, 1), stdDeviation: t.width / 2 } }];
        }
        buildText(t) {
          new An(t).buildSVG();
        }
        getContrast(t) {
          if (t === "transparent") return "#000000";
          let e = Tt.parse(t).rgba, i = " clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1)";
          if (Ne(e[0]) || !Tt.useColorMix) {
            let s = e.map((o) => {
              let a = o / 255;
              return a <= 0.04 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
            }), r = 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2];
            return 1.05 / (r + 0.05) > (r + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
          }
          return "color(from " + t + " srgb" + i + i + i + ")";
        }
        button(t, e, i, s, r = {}, o, a, l, c, f) {
          let d = this.label(t, e, i, c, void 0, void 0, f, void 0, "button"), m = this.styledMode, x = arguments, y = 0;
          r = Mr(Tn.global.buttonTheme, r), m && (delete r.fill, delete r.stroke, delete r["stroke-width"]);
          let M = r.states || {}, w = r.style || {};
          delete r.states, delete r.style;
          let v = [Bt.filterUserAttributes(r)], T = [w];
          return m || ["hover", "select", "disabled"].forEach((S, O) => {
            v.push(Mr(v[0], Bt.filterUserAttributes(x[O + 5] || M[S] || {}))), T.push(v[O + 1].style), delete v[O + 1].style;
          }), Ts(d.element, vr ? "mouseover" : "mouseenter", function() {
            y !== 3 && d.setState(1);
          }), Ts(d.element, vr ? "mouseout" : "mouseleave", function() {
            y !== 3 && d.setState(y);
          }), d.setState = (S = 0) => {
            if (S !== 1 && (d.state = y = S), d.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][S]), !m) {
              d.attr(v[S]);
              let O = T[S];
              is(O) && d.css(O);
            }
          }, d.attr(v[0]), !m && (d.css(li({ cursor: "default" }, w)), f && d.text.css({ pointerEvents: "none" })), d.on("touchstart", (S) => S.stopPropagation()).on("click", function(S) {
            y !== 3 && s?.call(d, S);
          });
        }
        crispLine(t, e) {
          let [i, s] = t;
          return _t(i[1]) && i[1] === s[1] && (i[1] = s[1] = Oe(i[1], e)), _t(i[2]) && i[2] === s[2] && (i[2] = s[2] = Oe(i[2], e)), t;
        }
        path(t) {
          let e = this.styledMode ? {} : { fill: "none" };
          return Es(t) ? e.d = t : is(t) && li(e, t), this.createElement("path").attr(e);
        }
        circle(t, e, i) {
          let s = is(t) ? t : t === void 0 ? {} : { x: t, y: e, r: i }, r = this.createElement("circle");
          return r.xSetter = r.ySetter = function(o, a, l) {
            l.setAttribute("c" + a, o);
          }, r.attr(s);
        }
        arc(t, e, i, s, r, o) {
          let a;
          is(t) ? (e = (a = t).y, i = a.r, s = a.innerR, r = a.start, o = a.end, t = a.x) : a = { innerR: s, start: r, end: o };
          let l = this.symbol("arc", t, e, i, i, a);
          return l.r = i, l;
        }
        rect(t, e, i, s, r, o) {
          let a = is(t) ? t : t === void 0 ? {} : { x: t, y: e, r, width: Math.max(i || 0, 0), height: Math.max(s || 0, 0) }, l = this.createElement("rect");
          return this.styledMode || (o !== void 0 && (a["stroke-width"] = o, li(a, l.crisp(a))), a.fill = "none"), l.rSetter = function(c, f, d) {
            l.r = c, Li(d, { rx: c, ry: c });
          }, l.rGetter = function() {
            return l.r || 0;
          }, l.attr(a);
        }
        roundedRect(t) {
          return this.symbol("roundedRect").attr(t);
        }
        setSize(t, e, i) {
          this.width = t, this.height = e, this.boxWrapper.animate({ width: t, height: e }, { step: function() {
            this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
          }, duration: Cr(i, !0) ? void 0 : 0 }), this.alignElements();
        }
        g(t) {
          let e = this.createElement("g");
          return t ? e.attr({ class: "highcharts-" + t }) : e;
        }
        image(t, e, i, s, r, o) {
          let a = { preserveAspectRatio: "none" };
          Ne(e) && (a.x = e), Ne(i) && (a.y = i), Ne(s) && (a.width = s), Ne(r) && (a.height = r);
          let l = this.createElement("image").attr(a), c = function(f) {
            l.attr({ href: t }), o.call(l, f);
          };
          if (o) {
            l.attr({ href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" });
            let f = new kr.Image();
            Ts(f, "load", c), f.src = t, f.complete && c({});
          } else l.attr({ href: t });
          return l;
        }
        symbol(t, e, i, s, r, o) {
          let a, l, c, f, d = this, m = /^url\((.*?)\)$/, x = m.test(t), y = !x && (this.symbols[t] ? t : "circle"), M = y && this.symbols[y];
          if (M) typeof e == "number" && (l = M.call(this.symbols, e || 0, i || 0, s || 0, r || 0, o)), a = this.path(l), d.styledMode || a.attr("fill", "none"), li(a, { symbolName: y || void 0, x: e, y: i, width: s, height: r }), o && li(a, o);
          else if (x) {
            c = t.match(m)[1];
            let w = a = this.image(c);
            w.imgwidth = Cr(o?.width, ni[c]?.width), w.imgheight = Cr(o?.height, ni[c]?.height), f = (v) => v.attr({ width: v.width, height: v.height }), ["width", "height"].forEach((v) => {
              w[`${v}Setter`] = function(T, S) {
                this[S] = T;
                let { alignByTranslate: O, element: L, width: D, height: N, imgwidth: I, imgheight: W } = this, j = S === "width" ? I : W, H = 1;
                o && o.backgroundSize === "within" && D && N && I && W ? (H = Math.min(D / I, N / W), Li(L, { width: Math.round(I * H), height: Math.round(W * H) })) : L && j && L.setAttribute(S, j), !O && I && W && this.translate(((D || 0) - I * H) / 2, ((N || 0) - W * H) / 2);
              };
            }), _t(e) && w.attr({ x: e, y: i }), w.isImg = !0, w.symbolUrl = t, _t(w.imgwidth) && _t(w.imgheight) ? f(w) : (w.attr({ width: 0, height: 0 }), Go("img", { onload: function() {
              let v = yr[d.chartIndex];
              this.width === 0 && (Ve(this, { position: "absolute", top: "-999em" }), vi.body.appendChild(this)), ni[c] = { width: this.width, height: this.height }, w.imgwidth = this.width, w.imgheight = this.height, w.element && f(w), this.parentNode && this.parentNode.removeChild(this), d.imgCount--, d.imgCount || !v || v.hasLoaded || v.onload();
            }, src: c }), this.imgCount++);
          }
          return a;
        }
        clipRect(t, e, i, s) {
          return this.rect(t, e, i, s, 0);
        }
        text(t, e, i, s) {
          let r = {};
          if (s && (this.allowHTML || !this.forExport)) return this.html(t, e, i);
          r.x = Math.round(e || 0), i && (r.y = Math.round(i)), _t(t) && (r.text = t);
          let o = this.createElement("text").attr(r);
          return s && (!this.forExport || this.allowHTML) || (o.xSetter = function(a, l, c) {
            let f = c.getElementsByTagName("tspan"), d = c.getAttribute(l);
            for (let m = 0, x; m < f.length; m++) (x = f[m]).getAttribute(l) === d && x.setAttribute(l, a);
            c.setAttribute(l, a);
          }), o;
        }
        fontMetrics(t) {
          let e = Ne(t) ? t : En(Pe.prototype.getStyle.call(t, "font-size") || 0), i = e < 24 ? e + 3 : Math.round(1.2 * e), s = Math.round(0.8 * i);
          return { h: i, b: s, f: e };
        }
        rotCorr(t, e, i) {
          let s = t;
          return e && i && (s = Math.max(s * Math.cos(e * Xo), 4)), { x: -t / 3 * Math.sin(e * Xo), y: s };
        }
        pathToSegments(t) {
          let e = [], i = [], s = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 };
          for (let r = 0; r < t.length; r++) wr(i[0]) && Ne(t[r]) && i.length === s[i[0].toUpperCase()] && t.splice(r, 0, i[0].replace("M", "L").replace("m", "l")), typeof t[r] == "string" && (i.length && e.push(i.slice(0)), i.length = 0), i.push(t[r]);
          return e.push(i.slice(0)), e;
        }
        label(t, e, i, s, r, o, a, l, c) {
          return new ri(this, t, e, i, s, r, o, a, l, c);
        }
        alignElements() {
          this.alignedObjects.forEach((t) => t.align());
        }
      }
      li(Ps.prototype, { Element: Pe, SVG_NS: Sn, escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, symbols: oi, draw: Oi }), $i.registerRendererType("svg", Ps, !0);
      let { composed: Ln, isFirefox: Dn } = X, { attr: In, css: hi, createElement: Bn, defined: Yo, extend: Os, getAlignFactor: Nn, isNumber: Ls, pInt: jo, pushUnique: Rn } = J;
      function Uo(h, t, e) {
        let i = this.div?.style;
        Pe.prototype[`${t}Setter`].call(this, h, t, e), i && (e.style[t] = i[t] = h);
      }
      let Vo = (h, t) => {
        if (!h.div) {
          let e = In(h.element, "class"), i = h.css, s = Bn("div", e ? { className: e } : void 0, { position: "absolute", left: `${h.translateX || 0}px`, top: `${h.translateY || 0}px`, ...h.styles, display: h.display, opacity: h.opacity, visibility: h.visibility }, h.parentGroup?.div || t);
          h.classSetter = (r, o, a) => {
            a.setAttribute("class", r), s.className = r;
          }, h.translateXSetter = h.translateYSetter = (r, o) => {
            h[o] = r, s.style[o === "translateX" ? "left" : "top"] = `${r}px`, h.doTransform = !0;
          }, h.scaleXSetter = h.scaleYSetter = (r, o) => {
            h[o] = r, h.doTransform = !0;
          }, h.opacitySetter = h.visibilitySetter = Uo, h.css = (r) => (i.call(h, r), r.cursor && (s.style.cursor = r.cursor), r.pointerEvents && (s.style.pointerEvents = r.pointerEvents), h), h.on = function() {
            return Pe.prototype.on.apply({ element: s, onEvents: h.onEvents }, arguments), h;
          }, h.div = s;
        }
        return h.div;
      };
      class we extends Pe {
        static compose(t) {
          Rn(Ln, this.compose) && (t.prototype.html = function(e, i, s) {
            return new we(this, "span").attr({ text: e, x: Math.round(i), y: Math.round(s) });
          });
        }
        constructor(t, e) {
          super(t, e), we.useForeignObject ? this.foreignObject = t.createElement("foreignObject").attr({ zIndex: 2 }) : this.css({ position: "absolute", ...t.styledMode ? {} : { fontFamily: t.style.fontFamily, fontSize: t.style.fontSize } }), this.element.style.whiteSpace = "nowrap";
        }
        getSpanCorrection(t, e, i) {
          this.xCorr = -t * i, this.yCorr = -e;
        }
        css(t) {
          let e, { element: i } = this, s = i.tagName === "SPAN" && t && "width" in t, r = s && t.width;
          return s && (delete t.width, this.textWidth = jo(r) || void 0, e = !0), t?.textOverflow === "ellipsis" && (t.overflow = "hidden", t.whiteSpace = "nowrap"), t?.lineClamp && (t.display = "-webkit-box", t.WebkitLineClamp = t.lineClamp, t.WebkitBoxOrient = "vertical", t.overflow = "hidden"), Ls(Number(t?.fontSize)) && (t.fontSize += "px"), Os(this.styles, t), hi(i, t), e && this.updateTransform(), this;
        }
        htmlGetBBox() {
          let { element: t } = this;
          return { x: t.offsetLeft, y: t.offsetTop, width: t.offsetWidth, height: t.offsetHeight };
        }
        updateTransform() {
          if (!this.added) {
            this.alignOnAdd = !0;
            return;
          }
          let { element: t, foreignObject: e, oldTextWidth: i, renderer: s, rotation: r, rotationOriginX: o, rotationOriginY: a, scaleX: l, scaleY: c, styles: { display: f = "inline-block", whiteSpace: d }, textAlign: m = "left", textWidth: x, translateX: y = 0, translateY: M = 0, x: w = 0, y: v = 0 } = this;
          if (e || hi(t, { marginLeft: `${y}px`, marginTop: `${M}px` }), t.tagName === "SPAN") {
            let T, S = [r, m, t.innerHTML, x, this.textAlign].join(","), O = -(this.parentGroup?.padding * 1) || 0;
            if (x !== i) {
              let I = this.textPxLength ? this.textPxLength : (hi(t, { width: "", whiteSpace: d || "nowrap" }), t.offsetWidth), W = x || 0, j = !s.styledMode && t.style.textOverflow === "" && t.style.webkitLineClamp;
              (W > i || I > W || j) && (/[\-\s\u00AD]/.test(t.textContent || t.innerText) || t.style.textOverflow === "ellipsis") && (hi(t, { width: (r || l || I > W || j) && Ls(x) ? x + "px" : "auto", display: f, whiteSpace: d || "normal" }), this.oldTextWidth = x);
            }
            e && (hi(t, { display: "inline-block", verticalAlign: "top" }), e.attr({ width: s.width, height: s.height })), S !== this.cTT && (T = s.fontMetrics(t).b, Yo(r) && !e && (r !== (this.oldRotation || 0) || m !== this.oldAlign) && hi(t, { transform: `rotate(${r}deg)`, transformOrigin: `${O}% ${O}px` }), this.getSpanCorrection(!Yo(r) && !this.textWidth && this.textPxLength || t.offsetWidth, T, Nn(m)));
            let { xCorr: L = 0, yCorr: D = 0 } = this, N = { left: `${w + L}px`, top: `${v + D}px`, textAlign: m, transformOrigin: `${(o ?? w) - L - w - O}px ${(a ?? v) - D - v - O}px` };
            (l || c) && (N.transform = `scale(${l ?? 1},${c ?? 1})`), e ? (super.updateTransform(), Ls(w) && Ls(v) ? (e.attr({ x: w + L, y: v + D, width: t.offsetWidth + 3, height: t.offsetHeight, "transform-origin": t.getAttribute("transform-origin") || "0 0" }), hi(t, { display: f, textAlign: m })) : Dn && e.attr({ width: 0, height: 0 })) : hi(t, N), this.cTT = S, this.oldRotation = r, this.oldAlign = m;
          }
        }
        add(t) {
          let { foreignObject: e, renderer: i } = this, s = i.box.parentNode, r = [];
          if (e) e.add(t), super.add(i.createElement("body").attr({ xmlns: "http://www.w3.org/1999/xhtml" }).css({ background: "transparent", margin: "0 3px 0 0" }).add(e));
          else {
            let o;
            if (this.parentGroup = t, t && !(o = t.div)) {
              let a = t;
              for (; a; ) r.push(a), a = a.parentGroup;
              for (let l of r.reverse()) o = Vo(l, s);
            }
            (o || s).appendChild(this.element);
          }
          return this.added = !0, this.alignOnAdd && this.updateTransform(), this;
        }
        textSetter(t) {
          t !== this.textStr && (delete this.bBox, delete this.oldTextWidth, Bt.setElementHTML(this.element, t ?? ""), this.textStr = t, this.doTransform = !0);
        }
        alignSetter(t) {
          this.alignValue = this.textAlign = t, this.doTransform = !0;
        }
        xSetter(t, e) {
          this[e] = t, this.doTransform = !0;
        }
      }
      let Re = we.prototype;
      Re.visibilitySetter = Re.opacitySetter = Uo, Re.ySetter = Re.rotationSetter = Re.rotationOriginXSetter = Re.rotationOriginYSetter = Re.xSetter, (function(h) {
        h.xAxis = { alignTicks: !0, allowDecimals: void 0, panningEnabled: !0, zIndex: 2, zoomEnabled: !0, dateTimeLabelFormats: { millisecond: { main: "%[HMSL]", range: !1 }, second: { main: "%[HMS]", range: !1 }, minute: { main: "%[HM]", range: !1 }, hour: { main: "%[HM]", range: !1 }, day: { main: "%[eb]" }, week: { main: "%[eb]" }, month: { main: "%[bY]" }, year: { main: "%Y" } }, endOnTick: !1, gridLineDashStyle: "Solid", gridZIndex: 1, labels: { autoRotationLimit: 80, distance: 15, enabled: !0, indentation: 10, overflow: "justify", reserveSpace: void 0, rotation: void 0, staggerLines: 0, step: 0, useHTML: !1, zIndex: 7, style: { color: "#333333", cursor: "default", fontSize: "0.8em", textOverflow: "ellipsis" } }, maxPadding: 0.01, minorGridLineDashStyle: "Solid", minorTickLength: 2, minorTickPosition: "outside", minorTicksPerMajor: 5, minPadding: 0.01, offset: void 0, reversed: void 0, reversedStacks: !1, showEmpty: !0, showFirstLabel: !0, showLastLabel: !0, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", useHTML: !1, x: 0, y: 0, style: { color: "#666666", fontSize: "0.8em" } }, visible: !0, minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#333333", lineWidth: 1, gridLineColor: "#e6e6e6", gridLineWidth: void 0, tickColor: "#333333" }, h.yAxis = { reversedStacks: !0, endOnTick: !0, maxPadding: 0.05, minPadding: 0.05, tickPixelInterval: 72, showLastLabel: !0, labels: { x: void 0 }, startOnTick: !0, title: {}, stackLabels: { animation: {}, allowOverlap: !1, enabled: !1, crop: !0, overflow: "justify", formatter: function() {
          let { numberFormatter: t } = this.axis.chart;
          return t(this.total || 0, -1);
        }, style: { color: "#000000", fontSize: "0.7em", fontWeight: "bold", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 };
      })(re || (re = {}));
      let qo = re, { addEvent: Ko, isFunction: $o, objectEach: Zo, removeEvent: _o } = J;
      (Ut || (Ut = {})).registerEventOptions = function(h, t) {
        h.eventOptions = h.eventOptions || {}, Zo(t.events, function(e, i) {
          h.eventOptions[i] !== e && (h.eventOptions[i] && (_o(h, i, h.eventOptions[i]), delete h.eventOptions[i]), $o(e) && (h.eventOptions[i] = e, Ko(h, i, e, { order: 0 })));
        });
      };
      let Di = Ut, { deg2rad: Ar } = X, { clamp: Jo, correctFloat: ss, defined: Tr, destroyObjectProperties: zn, extend: Qo, fireEvent: rs, getAlignFactor: Sr, isNumber: Ii, merge: Er, objectEach: Pr, pick: ze } = J, Bi = class {
        constructor(h, t, e, i, s) {
          this.isNew = !0, this.isNewLabel = !0, this.axis = h, this.pos = t, this.type = e || "", this.parameters = s || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, rs(this, "init"), e || i || this.addLabel();
        }
        addLabel() {
          let h = this, t = h.axis, e = t.options, i = t.chart, s = t.categories, r = t.logarithmic, o = t.names, a = h.pos, l = ze(h.options?.labels, e.labels), c = t.tickPositions, f = a === c[0], d = a === c[c.length - 1], m = (!l.step || l.step === 1) && t.tickInterval === 1, x = c.info, y = h.label, M, w, v, T = this.parameters.category || (s ? ze(s[a], o[a], a) : a);
          r && Ii(T) && (T = ss(r.lin2log(T))), t.dateTime && (x ? M = (w = i.time.resolveDTLFormat(e.dateTimeLabelFormats[!e.grid?.enabled && x.higherRanks[a] || x.unitName])).main : Ii(T) && (M = t.dateTime.getXDateFormat(T, e.dateTimeLabelFormats || {}))), h.isFirst = f, h.isLast = d;
          let S = { axis: t, chart: i, dateTimeLabelFormat: M, isFirst: f, isLast: d, pos: a, tick: h, tickPositionInfo: x, value: T };
          rs(this, "labelFormat", S);
          let O = (N) => l.formatter ? l.formatter.call(N, N) : l.format ? (N.text = t.defaultLabelFormatter.call(N), he.format(l.format, N, i)) : t.defaultLabelFormatter.call(N), L = O.call(S, S), D = w?.list;
          D ? h.shortenLabel = function() {
            for (v = 0; v < D.length; v++) if (Qo(S, { dateTimeLabelFormat: D[v] }), y.attr({ text: O.call(S, S) }), y.getBBox().width < t.getSlotWidth(h) - 2 * (l.padding || 0)) return;
            y.attr({ text: "" });
          } : h.shortenLabel = void 0, m && t._addedPlotLB && h.moveLabel(L, l), Tr(y) || h.movedLabel ? y && y.textStr !== L && !m && (!y.textWidth || l.style.width || y.styles.width || y.css({ width: null }), y.attr({ text: L }), y.textPxLength = y.getBBox().width) : (h.label = y = h.createLabel(L, l), h.rotation = 0);
        }
        createLabel(h, t, e) {
          let i = this.axis, { renderer: s, styledMode: r } = i.chart, o = t.style.whiteSpace, a = Tr(h) && t.enabled ? s.text(h, e?.x, e?.y, t.useHTML).add(i.labelGroup) : void 0;
          return a && (r || a.css(Er(t.style)), a.textPxLength = a.getBBox().width, !r && o && a.css({ whiteSpace: o })), a;
        }
        destroy() {
          zn(this, this.axis);
        }
        getPosition(h, t, e, i) {
          let s = this.axis, r = s.chart, o = i && r.oldChartHeight || r.chartHeight, a = { x: h ? ss(s.translate(t + e, void 0, void 0, i) + s.transB) : s.left + s.offset + (s.opposite ? (i && r.oldChartWidth || r.chartWidth) - s.right - s.left : 0), y: h ? o - s.bottom + s.offset - (s.opposite ? s.height : 0) : ss(o - s.translate(t + e, void 0, void 0, i) - s.transB) };
          return a.y = Jo(a.y, -1e9, 1e9), rs(this, "afterGetPosition", { pos: a }), a;
        }
        getLabelPosition(h, t, e, i, s, r, o, a) {
          let l, c, f = this.axis, d = f.transA, m = f.isLinked && f.linkedParent ? f.linkedParent.reversed : f.reversed, x = f.staggerLines, y = f.tickRotCorr || { x: 0, y: 0 }, M = i || f.reserveSpaceDefault ? 0 : -f.labelOffset * (f.labelAlign === "center" ? 0.5 : 1), w = s.distance, v = {};
          return l = f.side === 0 ? e.rotation ? -w : -e.getBBox().height : f.side === 2 ? y.y + w : Math.cos(e.rotation * Ar) * (y.y - e.getBBox(!1, 0).height / 2), Tr(s.y) && (l = f.side === 0 && f.horiz ? s.y + l : s.y), h = h + ze(s.x, [0, 1, 0, -1][f.side] * w) + M + y.x - (r && i ? r * d * (m ? -1 : 1) : 0), t = t + l - (r && !i ? r * d * (m ? 1 : -1) : 0), x && (c = o / (a || 1) % x, f.opposite && (c = x - c - 1), t += c * (f.labelOffset / x)), v.x = h, v.y = Math.round(t), rs(this, "afterGetLabelPosition", { pos: v, tickmarkOffset: r, index: o }), v;
        }
        getLabelSize() {
          return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
        }
        getMarkPath(h, t, e, i, s = !1, r) {
          return r.crispLine([["M", h, t], ["L", h + (s ? 0 : -e), t + (s ? e : 0)]], i);
        }
        handleOverflow(h) {
          let t = this.axis, e = t.options.labels, i = h.x, s = t.chart.chartWidth, r = t.chart.spacing, o = ze(t.labelLeft, Math.min(t.pos, r[3])), a = ze(t.labelRight, Math.max(t.isRadial ? 0 : t.pos + t.len, s - r[1])), l = this.label, c = this.rotation, f = Sr(t.labelAlign || l.attr("align")), d = l.getBBox().width, m = t.getSlotWidth(this), x = m, y = 1, M;
          c || e.overflow !== "justify" ? c < 0 && i - f * d < o ? M = Math.round(i / Math.cos(c * Ar) - o) : c > 0 && i + f * d > a && (M = Math.round((s - i) / Math.cos(c * Ar))) : (i - f * d < o ? x = h.x + x * (1 - f) - o : i + (1 - f) * d > a && (x = a - h.x + x * f, y = -1), (x = Math.min(m, x)) < m && t.labelAlign === "center" && (h.x += y * (m - x - f * (m - Math.min(d, x)))), (d > x || t.autoRotation && l?.styles?.width) && (M = x)), M && l && (this.shortenLabel ? this.shortenLabel() : l.css(Qo({}, { width: Math.floor(M) + "px", lineClamp: +!t.isRadial })));
        }
        moveLabel(h, t) {
          let e = this, i = e.label, s = e.axis, r = !1, o;
          i && i.textStr === h ? (e.movedLabel = i, r = !0, delete e.label) : Pr(s.ticks, function(a) {
            r || a.isNew || a === e || !a.label || a.label.textStr !== h || (e.movedLabel = a.label, r = !0, a.labelPos = e.movedLabel.xy, delete a.label);
          }), !r && (e.labelPos || i) && (o = e.labelPos || i.xy, e.movedLabel = e.createLabel(h, t, o), e.movedLabel && e.movedLabel.attr({ opacity: 0 }));
        }
        render(h, t, e) {
          let i = this.axis, s = i.horiz, r = this.pos, o = ze(this.tickmarkOffset, i.tickmarkOffset), a = this.getPosition(s, r, o, t), l = a.x, c = a.y, f = i.pos, d = f + i.len, m = s ? l : c, x = ze(e, this.label?.newOpacity, 1);
          !i.chart.polar && (ss(m) < f || m > d) && (e = 0), e ?? (e = 1), this.isActive = !0, this.renderGridLine(t, e), this.renderMark(a, e), this.renderLabel(a, t, x, h), this.isNew = !1, rs(this, "afterRender");
        }
        renderGridLine(h, t) {
          let e = this.axis, i = e.options, s = {}, r = this.pos, o = this.type, a = ze(this.tickmarkOffset, e.tickmarkOffset), l = e.chart.renderer, c = this.gridLine, f, d = i.gridLineWidth, m = i.gridLineColor, x = i.gridLineDashStyle;
          this.type === "minor" && (d = i.minorGridLineWidth, m = i.minorGridLineColor, x = i.minorGridLineDashStyle), c || (e.chart.styledMode || (s.stroke = m, s["stroke-width"] = d || 0, s.dashstyle = x), o || (s.zIndex = 1), h && (t = 0), this.gridLine = c = l.path().attr(s).addClass("highcharts-" + (o ? o + "-" : "") + "grid-line").add(e.gridGroup)), c && (f = e.getPlotLinePath({ value: r + a, lineWidth: c.strokeWidth(), force: "pass", old: h, acrossPanes: !1 })) && c[h || this.isNew ? "attr" : "animate"]({ d: f, opacity: t });
        }
        renderMark(h, t) {
          let e = this.axis, i = e.options, s = e.chart.renderer, r = this.type, o = e.tickSize(r ? r + "Tick" : "tick"), a = h.x, l = h.y, c = ze(i[r !== "minor" ? "tickWidth" : "minorTickWidth"], !r && e.isXAxis ? 1 : 0), f = i[r !== "minor" ? "tickColor" : "minorTickColor"], d = this.mark, m = !d;
          o && (e.opposite && (o[0] = -o[0]), !d && (this.mark = d = s.path().addClass("highcharts-" + (r ? r + "-" : "") + "tick").add(e.axisGroup), e.chart.styledMode || d.attr({ stroke: f, "stroke-width": c })), d[m ? "attr" : "animate"]({ d: this.getMarkPath(a, l, o[0], d.strokeWidth(), e.horiz, s), opacity: t }));
        }
        renderLabel(h, t, e, i) {
          let s = this.axis, r = s.horiz, o = s.options, a = this.label, l = o.labels, c = l.step, f = ze(this.tickmarkOffset, s.tickmarkOffset), d = h.x, m = h.y, x = !0;
          a && Ii(d) && (a.xy = h = this.getLabelPosition(d, m, a, r, l, f, i, c), (!this.isFirst || this.isLast || o.showFirstLabel) && (!this.isLast || this.isFirst || o.showLastLabel) ? !r || l.step || l.rotation || t || e === 0 || this.handleOverflow(h) : x = !1, c && i % c && (x = !1), x && Ii(h.y) ? (h.opacity = e, a[this.isNewLabel ? "attr" : "animate"](h).show(!0), this.isNewLabel = !1) : (a.hide(), this.isNewLabel = !0));
        }
        replaceMovedLabel() {
          let h = this.label, t = this.axis;
          h && !this.isNew && (h.animate({ opacity: 0 }, void 0, h.destroy), delete this.label), t.isDirty = !0, this.label = this.movedLabel, delete this.movedLabel;
        }
      }, { animObject: ta } = $t, { xAxis: ea, yAxis: ia } = qo, { defaultOptions: Or } = fe, { registerEventOptions: Fn } = Di, { deg2rad: Hn } = X, { arrayMax: sa, arrayMin: Wn, clamp: Lr, correctFloat: ce, defined: Ct, destroyObjectProperties: ra, erase: Dr, error: Ir, extend: Ni, fireEvent: Ht, getClosestDistance: os, insertItem: oa, isArray: Ds, isNumber: it, isString: aa, merge: ki, normalizeTickInterval: Is, objectEach: Bs, pick: ct, relativeLength: Ns, removeEvent: Xn, splat: Gn, syncTimeout: Yn } = J, Br = (h, t) => Is(t, void 0, void 0, ct(h.options.allowDecimals, t < 0.5 || h.tickAmount !== void 0), !!h.tickAmount);
      Ni(Or, { xAxis: ea, yAxis: ki(ea, ia) });
      class Ri {
        constructor(t, e, i) {
          this.init(t, e, i);
        }
        init(t, e, i = this.coll) {
          let s = i === "xAxis", r = this.isZAxis || (t.inverted ? !s : s);
          this.chart = t, this.horiz = r, this.isXAxis = s, this.coll = i, Ht(this, "init", { userOptions: e }), this.opposite = ct(e.opposite, this.opposite), this.side = ct(e.side, this.side, r ? 2 * !this.opposite : this.opposite ? 1 : 3), this.setOptions(e);
          let o = this.options, a = o.labels;
          this.type ?? (this.type = o.type || "linear"), this.uniqueNames ?? (this.uniqueNames = o.uniqueNames ?? !0), Ht(this, "afterSetType"), this.userOptions = e, this.minPixelPadding = 0, this.reversed = ct(o.reversed, this.reversed), this.visible = o.visible, this.zoomEnabled = o.zoomEnabled, this.hasNames = this.type === "category" || o.categories === !0, this.categories = Ds(o.categories) && o.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = Ct(o.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len ?? (this.len = 0), this.minRange = this.userMinRange = o.minRange || o.maxZoom, this.range = o.range, this.offset = o.offset || 0, this.max = void 0, this.min = void 0;
          let l = ct(o.crosshair, Gn(t.options.tooltip.crosshairs)[+!s]);
          this.crosshair = l === !0 ? {} : l, t.axes.indexOf(this) === -1 && (s ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this), oa(this, t[this.coll])), t.orderItems(this.coll), this.series = this.series || [], t.inverted && !this.isZAxis && s && !Ct(this.reversed) && (this.reversed = !0), this.labelRotation = it(a.rotation) ? a.rotation : void 0, Fn(this, o), Ht(this, "afterInit");
        }
        setOptions(t) {
          let e = this.horiz ? { labels: { autoRotation: [-45], padding: 3 }, margin: 15 } : { labels: { padding: 1 }, title: { rotation: 90 * this.side } };
          this.options = ki(e, this.coll === "yAxis" ? { title: { text: this.chart.options.lang.yAxisTitle } } : {}, Or[this.coll], t), Ht(this, "afterSetOptions", { userOptions: t });
        }
        defaultLabelFormatter() {
          let t = this.axis, { numberFormatter: e } = this.chart, i = it(this.value) ? this.value : NaN, s = t.chart.time, r = t.categories, o = this.dateTimeLabelFormat, a = Or.lang, l = a.numericSymbols, c = a.numericSymbolMagnitude || 1e3, f = t.logarithmic ? Math.abs(i) : t.tickInterval, d = l?.length, m, x;
          if (r) x = `${this.value}`;
          else if (o) x = s.dateFormat(o, i, !0);
          else if (d && l && f >= 1e3) for (; d-- && x === void 0; ) f >= (m = Math.pow(c, d + 1)) && 10 * i % m == 0 && l[d] !== null && i !== 0 && (x = e(i / m, -1) + l[d]);
          return x === void 0 && (x = Math.abs(i) >= 1e4 ? e(i, -1) : e(i, -1, void 0, "")), x;
        }
        getSeriesExtremes() {
          let t, e = this;
          Ht(this, "getSeriesExtremes", null, function() {
            e.hasVisibleSeries = !1, e.dataMin = e.dataMax = e.threshold = void 0, e.softThreshold = !e.isXAxis, e.series.forEach((i) => {
              if (i.reserveSpace()) {
                let s = i.options, r, o = s.threshold, a, l;
                if (e.hasVisibleSeries = !0, e.positiveValuesOnly && 0 >= (o || 0) && (o = void 0), e.isXAxis) (r = i.getColumn("x")).length && (r = e.logarithmic ? r.filter((c) => c > 0) : r, a = (t = i.getXExtremes(r)).min, l = t.max, it(a) || a instanceof Date || (r = r.filter(it), a = (t = i.getXExtremes(r)).min, l = t.max), r.length && (e.dataMin = Math.min(ct(e.dataMin, a), a), e.dataMax = Math.max(ct(e.dataMax, l), l)));
                else {
                  let c = i.applyExtremes();
                  it(c.dataMin) && (a = c.dataMin, e.dataMin = Math.min(ct(e.dataMin, a), a)), it(c.dataMax) && (l = c.dataMax, e.dataMax = Math.max(ct(e.dataMax, l), l)), Ct(o) && (e.threshold = o), (!s.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1);
                }
              }
            });
          }), Ht(this, "afterGetSeriesExtremes");
        }
        translate(t, e, i, s, r, o) {
          let a = this.linkedParent || this, l = s && a.old ? a.old.min : a.min;
          if (!it(l)) return NaN;
          let c = a.minPixelPadding, f = (a.isOrdinal || a.brokenAxis?.hasBreaks || a.logarithmic && r) && !!a.lin2val, d = 1, m = 0, x = s && a.old ? a.old.transA : a.transA, y = 0;
          return x || (x = a.transA), i && (d *= -1, m = a.len), a.reversed && (d *= -1, m -= d * (a.sector || a.len)), e ? (y = (t = t * d + m - c) / x + l, f && (y = a.lin2val(y))) : (f && (t = a.val2lin(t)), y = d * (t - l) * x + m + d * c + (it(o) ? x * o : 0), a.isRadial || (y = ce(y))), y;
        }
        toPixels(t, e) {
          return this.translate(this.chart?.time.parse(t) ?? NaN, !1, !this.horiz, void 0, !0) + (e ? 0 : this.pos);
        }
        toValue(t, e) {
          return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, void 0, !0);
        }
        getPlotLinePath(t) {
          let e = this, i = e.chart, s = e.left, r = e.top, o = t.old, a = t.value, l = t.lineWidth, c = o && i.oldChartHeight || i.chartHeight, f = o && i.oldChartWidth || i.chartWidth, d = e.transB, m = t.translatedValue, x = t.force, y, M, w, v, T;
          function S(L, D, N) {
            return x !== "pass" && (L < D || L > N) && (x ? L = Lr(L, D, N) : T = !0), L;
          }
          let O = { value: a, lineWidth: l, old: o, force: x, acrossPanes: t.acrossPanes, translatedValue: m };
          return Ht(this, "getPlotLinePath", O, function(L) {
            y = w = (m = Lr(m = ct(m, e.translate(a, void 0, void 0, o)), -1e9, 1e9)) + d, M = v = c - m - d, it(m) ? e.horiz ? (M = r, v = c - e.bottom + (e.options.isInternal ? 0 : i.scrollablePixelsY || 0), y = w = S(y, s, s + e.width)) : (y = s, w = f - e.right + (i.scrollablePixelsX || 0), M = v = S(M, r, r + e.height)) : (T = !0, x = !1), L.path = T && !x ? void 0 : i.renderer.crispLine([["M", y, M], ["L", w, v]], l || 1);
          }), O.path;
        }
        getLinearTickPositions(t, e, i) {
          let s, r, o, a = ce(Math.floor(e / t) * t), l = ce(Math.ceil(i / t) * t), c = [];
          if (ce(a + t) === a && (o = 20), this.single) return [e];
          for (s = a; s <= l && (c.push(s), (s = ce(s + t, o)) !== r); ) r = s;
          return c;
        }
        getMinorTickInterval() {
          let { minorTicks: t, minorTickInterval: e } = this.options;
          return t === !0 ? ct(e, "auto") : t !== !1 ? e : void 0;
        }
        getMinorTickPositions() {
          let t = this.options, e = this.tickPositions, i = this.minorTickInterval, s = this.pointRangePadding || 0, r = (this.min || 0) - s, o = (this.max || 0) + s, a = this.brokenAxis?.hasBreaks ? this.brokenAxis.unitLength : o - r, l = [], c;
          if (a && a / i < this.len / 3) {
            let f = this.logarithmic;
            if (f) this.paddedTicks.forEach(function(d, m, x) {
              m && l.push.apply(l, f.getLogTickPositions(i, x[m - 1], x[m], !0));
            });
            else if (this.dateTime && this.getMinorTickInterval() === "auto") l = l.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(i), r, o, t.startOfWeek));
            else for (c = r + (e[0] - r) % i; c <= o && c !== l[0]; c += i) l.push(c);
          }
          return l.length !== 0 && this.trimTicks(l), l;
        }
        adjustForMinRange() {
          let t = this.options, e = this.logarithmic, i = this.chart.time, { max: s, min: r, minRange: o } = this, a, l, c, f;
          this.isXAxis && o === void 0 && !e && (o = Ct(t.min) || Ct(t.max) || Ct(t.floor) || Ct(t.ceiling) ? null : Math.min(5 * (os(this.series.map((d) => {
            let m = d.getColumn("x");
            return d.xIncrement ? m.slice(0, 2) : m;
          })) || 0), this.dataMax - this.dataMin)), it(s) && it(r) && it(o) && s - r < o && (l = this.dataMax - this.dataMin >= o, a = (o - s + r) / 2, c = [r - a, i.parse(t.min) ?? r - a], l && (c[2] = e ? e.log2lin(this.dataMin) : this.dataMin), f = [(r = sa(c)) + o, i.parse(t.max) ?? r + o], l && (f[2] = e ? e.log2lin(this.dataMax) : this.dataMax), (s = Wn(f)) - r < o && (c[0] = s - o, c[1] = i.parse(t.min) ?? s - o, r = sa(c))), this.minRange = o, this.min = r, this.max = s;
        }
        getClosest() {
          let t, e;
          if (this.categories) e = 1;
          else {
            let i = [];
            this.series.forEach(function(s) {
              let r = s.closestPointRange, o = s.getColumn("x");
              o.length === 1 ? i.push(o[0]) : s.sorted && Ct(r) && s.reserveSpace() && (e = Ct(e) ? Math.min(e, r) : r);
            }), i.length && (i.sort((s, r) => s - r), t = os([i]));
          }
          return t && e ? Math.min(t, e) : t || e;
        }
        nameToX(t) {
          let e = Ds(this.options.categories), i = e ? this.categories : this.names, s = t.options.x, r;
          return t.series.requireSorting = !1, Ct(s) || (s = this.uniqueNames && i ? e ? i.indexOf(t.name) : ct(i.keys[t.name], -1) : t.series.autoIncrement()), s === -1 ? !e && i && (r = i.length) : it(s) && (r = s), r !== void 0 ? (this.names[r] = t.name, this.names.keys[t.name] = r) : t.x && (r = t.x), r;
        }
        updateNames() {
          let t = this, e = this.names;
          e.length > 0 && (Object.keys(e.keys).forEach(function(i) {
            delete e.keys[i];
          }), e.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach((i) => {
            i.xIncrement = null, (!i.points || i.isDirtyData) && (t.max = Math.max(t.max || 0, i.dataTable.rowCount - 1), i.processData(), i.generatePoints());
            let s = i.getColumn("x").slice();
            i.data.forEach((r, o) => {
              let a = s[o];
              r?.options && r.name !== void 0 && (a = t.nameToX(r)) !== void 0 && a !== r.x && (s[o] = r.x = a);
            }), i.dataTable.setColumn("x", s);
          }));
        }
        setAxisTranslation() {
          let t = this, e = t.max - t.min, i = t.linkedParent, s = !!t.categories, r = t.isXAxis, o = t.axisPointRange || 0, a, l = 0, c = 0, f, d = t.transA;
          (r || s || o) && (a = t.getClosest(), i ? (l = i.minPointOffset, c = i.pointRangePadding) : t.series.forEach(function(m) {
            let x = s ? 1 : r ? ct(m.options.pointRange, a, 0) : t.axisPointRange || 0, y = m.options.pointPlacement;
            if (o = Math.max(o, x), !t.single || s) {
              let M = m.is("xrange") ? !r : r;
              l = Math.max(l, M && aa(y) ? 0 : x / 2), c = Math.max(c, M && y === "on" ? 0 : x);
            }
          }), f = t.ordinal?.slope && a ? t.ordinal.slope / a : 1, t.minPointOffset = l *= f, t.pointRangePadding = c *= f, t.pointRange = Math.min(o, t.single && s ? 1 : e), r && (t.closestPointRange = a)), t.translationSlope = t.transA = d = t.staticScale || t.len / (e + c || 1), t.transB = t.horiz ? t.left : t.bottom, t.minPixelPadding = d * l, Ht(this, "afterSetAxisTranslation");
        }
        minFromRange() {
          let { max: t, min: e } = this;
          return it(t) && it(e) && t - e || void 0;
        }
        setTickInterval(t) {
          let { categories: e, chart: i, dataMax: s, dataMin: r, dateTime: o, isXAxis: a, logarithmic: l, options: c, softThreshold: f } = this, d = i.time, m = it(this.threshold) ? this.threshold : void 0, x = this.minRange || 0, { ceiling: y, floor: M, linkedTo: w, softMax: v, softMin: T } = c, S = it(w) && i[this.coll]?.[w], O = c.tickPixelInterval, L = c.maxPadding, D = c.minPadding, N = 0, I, W = it(c.tickInterval) && c.tickInterval >= 0 ? c.tickInterval : void 0, j, H, K, Q;
          if (o || e || S || this.getTickAmount(), K = ct(this.userMin, d.parse(c.min)), Q = ct(this.userMax, d.parse(c.max)), S ? (this.linkedParent = S, I = S.getExtremes(), this.min = ct(I.min, I.dataMin), this.max = ct(I.max, I.dataMax), this.type !== S.type && Ir(11, !0, i)) : (f && Ct(m) && it(s) && it(r) && (r >= m ? (j = m, D = 0) : s <= m && (H = m, L = 0)), this.min = ct(K, j, r), this.max = ct(Q, H, s)), it(this.max) && it(this.min) && (l && (this.positiveValuesOnly && !t && 0 >= Math.min(this.min, ct(r, this.min)) && Ir(10, !0, i), this.min = ce(l.log2lin(this.min), 16), this.max = ce(l.log2lin(this.max), 16)), this.range && it(r) && (this.userMin = this.min = K = Math.max(r, this.minFromRange() || 0), this.userMax = Q = this.max, this.range = void 0)), Ht(this, "foundExtremes"), this.adjustForMinRange(), it(this.min) && it(this.max)) {
            if (!it(this.userMin) && it(T) && T < this.min && (this.min = K = T), !it(this.userMax) && it(v) && v > this.max && (this.max = Q = v), e || this.axisPointRange || this.stacking?.usePercentage || S || (N = this.max - this.min) && (!Ct(K) && D && (this.min -= N * D), !Ct(Q) && L && (this.max += N * L)), !it(this.userMin) && it(M) && (this.min = Math.max(this.min, M)), !it(this.userMax) && it(y) && (this.max = Math.min(this.max, y)), f && it(r) && it(s)) {
              let V = m || 0;
              !Ct(K) && this.min < V && r >= V ? this.min = c.minRange ? Math.min(V, this.max - x) : V : !Ct(Q) && this.max > V && s <= V && (this.max = c.minRange ? Math.max(V, this.min + x) : V);
            }
            !i.polar && this.min > this.max && (Ct(c.min) ? this.max = this.min : Ct(c.max) && (this.min = this.max)), N = this.max - this.min;
          }
          if (this.min !== this.max && it(this.min) && it(this.max) ? S && !W && O === S.options.tickPixelInterval ? this.tickInterval = W = S.tickInterval : this.tickInterval = ct(W, this.tickAmount ? N / Math.max(this.tickAmount - 1, 1) : void 0, e ? 1 : N * O / Math.max(this.len, O)) : this.tickInterval = 1, a && !t) {
            let V = this.min !== this.old?.min || this.max !== this.old?.max;
            this.series.forEach(function(Z) {
              Z.forceCrop = Z.forceCropping?.(), Z.processData(V);
            }), Ht(this, "postProcessData", { hasExtremesChanged: V });
          }
          this.setAxisTranslation(), Ht(this, "initialAxisTranslation"), this.pointRange && !W && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
          let et = ct(c.minTickInterval, o && !this.series.some((V) => !V.sorted) ? this.closestPointRange : 0);
          !W && et && this.tickInterval < et && (this.tickInterval = et), o || l || W || (this.tickInterval = Br(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions();
        }
        setTickPositions() {
          let t = this.options, e = t.tickPositions, i = t.tickPositioner, s = this.getMinorTickInterval(), r = !this.isPanning, o = r && t.startOnTick, a = r && t.endOnTick, l = [], c;
          if (this.tickmarkOffset = this.categories && t.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0, this.single = this.min === this.max && Ct(this.min) && !this.tickAmount && (this.min % 1 == 0 || t.allowDecimals !== !1), e) l = e.slice();
          else if (it(this.min) && it(this.max)) {
            if (!this.ordinal?.positions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) l = [this.min, this.max], Ir(19, !1, this.chart);
            else if (this.dateTime) l = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, t.units), this.min, this.max, t.startOfWeek, this.ordinal?.positions, this.closestPointRange, !0);
            else if (this.logarithmic) l = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
            else {
              let f = this.tickInterval, d = f;
              for (; d <= 2 * f && (l = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && l.length > this.tickAmount); ) this.tickInterval = Br(this, d *= 1.1);
            }
            l.length > this.len && (l = [l[0], l[l.length - 1]])[0] === l[1] && (l.length = 1), i && (this.tickPositions = l, (c = i.apply(this, [this.min, this.max])) && (l = c));
          }
          this.tickPositions = l, this.minorTickInterval = s === "auto" && this.tickInterval ? this.tickInterval / t.minorTicksPerMajor : s, this.paddedTicks = l.slice(0), this.trimTicks(l, o, a), !this.isLinked && it(this.min) && it(this.max) && (this.single && l.length < 2 && !this.categories && !this.series.some((f) => f.is("heatmap") && f.options.pointPlacement === "between") && (this.min -= 0.5, this.max += 0.5), e || c || this.adjustTickAmount()), Ht(this, "afterSetTickPositions");
        }
        trimTicks(t, e, i) {
          let s = t[0], r = t[t.length - 1], o = !this.isOrdinal && this.minPointOffset || 0;
          if (Ht(this, "trimTicks"), !this.isLinked || !this.grid) {
            if (e && s !== -1 / 0) this.min = s;
            else for (; this.min - o > t[0]; ) t.shift();
            if (i) this.max = r;
            else for (; this.max + o < t[t.length - 1]; ) t.pop();
            t.length === 0 && Ct(s) && !this.options.tickPositions && t.push((r + s) / 2);
          }
        }
        alignToOthers() {
          let t, e = this, i = e.chart, s = [this], r = e.options, o = i.options.chart, a = this.coll === "yAxis" && o.alignThresholds, l = [];
          if (e.thresholdAlignment = void 0, (o.alignTicks !== !1 && r.alignTicks || a) && r.startOnTick !== !1 && r.endOnTick !== !1 && !e.logarithmic) {
            let c = (d) => {
              let { horiz: m, options: x } = d;
              return [m ? x.left : x.top, x.width, x.height, x.pane].join(",");
            }, f = c(this);
            i[this.coll].forEach(function(d) {
              let { series: m } = d;
              m.length && m.some((x) => x.visible) && d !== e && c(d) === f && (t = !0, s.push(d));
            });
          }
          if (t && a) {
            s.forEach((f) => {
              let d = f.getThresholdAlignment(e);
              it(d) && l.push(d);
            });
            let c = l.length > 1 ? l.reduce((f, d) => f += d, 0) / l.length : void 0;
            s.forEach((f) => {
              f.thresholdAlignment = c;
            });
          }
          return t;
        }
        getThresholdAlignment(t) {
          if ((!it(this.dataMin) || this !== t && this.series.some((e) => e.isDirty || e.isDirtyData)) && this.getSeriesExtremes(), it(this.threshold)) {
            let e = Lr((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
            return this.options.reversed && (e = 1 - e), e;
          }
        }
        getTickAmount() {
          let t = this.options, e = t.tickPixelInterval, i = t.tickAmount;
          Ct(t.tickInterval) || i || !(this.len < e) || this.isRadial || this.logarithmic || !t.startOnTick || !t.endOnTick || (i = 2), !i && this.alignToOthers() && (i = Math.ceil(this.len / e) + 1), i < 4 && (this.finalTickAmt = i, i = 5), this.tickAmount = i;
        }
        adjustTickAmount() {
          let t = this, { finalTickAmt: e, max: i, min: s, options: r, tickPositions: o, tickAmount: a, thresholdAlignment: l } = t, c = o?.length, f = ct(t.threshold, t.softThreshold ? 0 : null), d, m, x = t.tickInterval, y, M = () => o.push(ce(o[o.length - 1] + x)), w = () => o.unshift(ce(o[0] - x));
          if (it(l) && (y = l < 0.5 ? Math.ceil(l * (a - 1)) : Math.floor(l * (a - 1)), r.reversed && (y = a - 1 - y)), t.hasData() && it(s) && it(i)) {
            let v = () => {
              t.transA *= (c - 1) / (a - 1), t.min = r.startOnTick ? o[0] : Math.min(s, o[0]), t.max = r.endOnTick ? o[o.length - 1] : Math.max(i, o[o.length - 1]);
            };
            if (it(y) && it(t.threshold)) {
              for (; o[y] !== f || o.length !== a || o[0] > s || o[o.length - 1] < i; ) {
                for (o.length = 0, o.push(t.threshold); o.length < a; ) o[y] === void 0 || o[y] > t.threshold ? w() : M();
                if (x > 8 * t.tickInterval) break;
                x *= 2;
              }
              v();
            } else if (c < a) {
              for (; o.length < a; ) o.length % 2 || s === f ? M() : w();
              v();
            }
            if (Ct(e)) {
              for (m = d = o.length; m--; ) (e === 3 && m % 2 == 1 || e <= 2 && m > 0 && m < d - 1) && o.splice(m, 1);
              t.finalTickAmt = void 0;
            }
          }
        }
        setScale() {
          let { coll: t, stacking: e } = this, i = !1, s = !1;
          this.series.forEach((o) => {
            i = i || o.isDirtyData || o.isDirty, s = s || o.xAxis?.isDirty || !1;
          }), this.setAxisSize();
          let r = this.len !== this.old?.len;
          r || i || s || this.isLinked || this.forceRedraw || this.userMin !== this.old?.userMin || this.userMax !== this.old?.userMax || this.alignToOthers() ? (e && t === "yAxis" && e.buildStacks(), this.forceRedraw = !1, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), e && t === "xAxis" && e.buildStacks(), this.isDirty || (this.isDirty = r || this.min !== this.old?.min || this.max !== this.old?.max)) : e && e.cleanStacks(), i && delete this.allExtremes, Ht(this, "afterSetScale");
        }
        setExtremes(t, e, i = !0, s, r) {
          let o = this.chart;
          this.series.forEach((a) => {
            delete a.kdTree;
          }), t = o.time.parse(t), e = o.time.parse(e), Ht(this, "setExtremes", r = Ni(r, { min: t, max: e }), (a) => {
            this.userMin = a.min, this.userMax = a.max, this.eventArgs = a, i && o.redraw(s);
          });
        }
        setAxisSize() {
          let t = this.chart, e = this.options, i = e.offsets || [0, 0, 0, 0], s = this.horiz, r = this.width = Math.round(Ns(ct(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)), o = this.height = Math.round(Ns(ct(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)), a = this.top = Math.round(Ns(ct(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)), l = this.left = Math.round(Ns(ct(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft));
          this.bottom = t.chartHeight - o - a, this.right = t.chartWidth - r - l, this.len = Math.max(s ? r : o, 0), this.pos = s ? l : a;
        }
        getExtremes() {
          let t = this.logarithmic;
          return { min: t ? ce(t.lin2log(this.min)) : this.min, max: t ? ce(t.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
        }
        getThreshold(t) {
          let e = this.logarithmic, i = e ? e.lin2log(this.min) : this.min, s = e ? e.lin2log(this.max) : this.max;
          return t === null || t === -1 / 0 ? t = i : t === 1 / 0 ? t = s : i > t ? t = i : s < t && (t = s), this.translate(t, 0, 1, 0, 1);
        }
        autoLabelAlign(t) {
          let e = (ct(t, 0) - 90 * this.side + 720) % 360, i = { align: "center" };
          return Ht(this, "autoLabelAlign", i, function(s) {
            e > 15 && e < 165 ? s.align = "right" : e > 195 && e < 345 && (s.align = "left");
          }), i.align;
        }
        tickSize(t) {
          let e = this.options, i = ct(e[t === "tick" ? "tickWidth" : "minorTickWidth"], t === "tick" && this.isXAxis && !this.categories ? 1 : 0), s = e[t === "tick" ? "tickLength" : "minorTickLength"], r;
          i && s && (e[t + "Position"] === "inside" && (s = -s), r = [s, i]);
          let o = { tickSize: r };
          return Ht(this, "afterTickSize", o), o.tickSize;
        }
        labelMetrics() {
          let t = this.chart.renderer, e = this.ticks, i = e[Object.keys(e)[0]] || {};
          return this.chart.renderer.fontMetrics(i.label || i.movedLabel || t.box);
        }
        unsquish() {
          let t = this.options.labels, e = t.padding || 0, i = this.horiz, s = this.tickInterval, r = this.len / ((+!!this.categories + this.max - this.min) / s), o = t.rotation, a = ce(0.8 * this.labelMetrics().h), l = Math.max(this.max - this.min, 0), c = function(y) {
            let M = (y + 2 * e) / (r || 1);
            return (M = M > 1 ? Math.ceil(M) : 1) * s > l && y !== 1 / 0 && r !== 1 / 0 && l && (M = Math.ceil(l / s)), ce(M * s);
          }, f = s, d, m = Number.MAX_VALUE, x;
          if (i) {
            if (!t.staggerLines && (it(o) ? x = [o] : r < t.autoRotationLimit && (x = t.autoRotation)), x) {
              let y, M;
              for (let w of x) (w === o || w && w >= -90 && w <= 90) && (M = (y = c(Math.abs(a / Math.sin(Hn * w)))) + Math.abs(w / 360)) < m && (m = M, d = w, f = y);
            }
          } else f = c(0.75 * a);
          return this.autoRotation = x, this.labelRotation = ct(d, it(o) ? o : 0), t.step ? s : f;
        }
        getSlotWidth(t) {
          let e = this.chart, i = this.horiz, s = this.options.labels, r = Math.max(this.tickPositions.length - !this.categories, 1), o = e.margin[3];
          if (t && it(t.slotWidth)) return t.slotWidth;
          if (i && s.step < 2 && !this.isRadial) return s.rotation ? 0 : (this.staggerLines || 1) * this.len / r;
          if (!i) {
            let a = s.style.width;
            if (a !== void 0) return parseInt(String(a), 10);
            if (!this.opposite && o) return o - e.spacing[3];
          }
          return 0.33 * e.chartWidth;
        }
        renderUnsquish() {
          let t = this.chart, e = t.renderer, i = this.tickPositions, s = this.ticks, r = this.options.labels, o = r.style, a = this.horiz, l = this.getSlotWidth(), c = Math.max(1, Math.round(l - (a ? 2 * (r.padding || 0) : r.distance || 0))), f = {}, d = this.labelMetrics(), m = o.lineClamp, x, y = m ?? (Math.floor(this.len / (i.length * d.h)) || 1), M = 0;
          aa(r.rotation) || (f.rotation = r.rotation || 0), i.forEach(function(w) {
            let v = s[w];
            v.movedLabel && v.replaceMovedLabel();
            let T = v.label?.textPxLength || 0;
            T > M && (M = T);
          }), this.maxLabelLength = M, this.autoRotation ? M > c && M > d.h ? f.rotation = this.labelRotation : this.labelRotation = 0 : l && (x = c), f.rotation && (x = M > 0.5 * t.chartHeight ? 0.33 * t.chartHeight : M, m || (y = 1)), this.labelAlign = r.align || this.autoLabelAlign(this.labelRotation), this.labelAlign && (f.align = this.labelAlign), i.forEach(function(w) {
            let v = s[w], T = v?.label, S = o.width, O = {};
            T && (T.attr(f), v.shortenLabel ? v.shortenLabel() : x && !S && o.whiteSpace !== "nowrap" && (x < (T.textPxLength || 0) || T.element.tagName === "SPAN") ? T.css(Ni(O, { width: `${x}px`, lineClamp: y })) : !T.styles.width || O.width || S || T.css({ width: "auto" }), v.rotation = f.rotation);
          }, this), this.tickRotCorr = e.rotCorr(d.b, this.labelRotation || 0, this.side !== 0);
        }
        hasData() {
          return this.series.some(function(t) {
            return t.hasData();
          }) || this.options.showEmpty && Ct(this.min) && Ct(this.max);
        }
        addTitle(t) {
          let e, i = this.chart.renderer, s = this.horiz, r = this.opposite, o = this.options.title, a = this.chart.styledMode;
          this.axisTitle || ((e = o.textAlign) || (e = (s ? { low: "left", middle: "center", high: "right" } : { low: r ? "right" : "left", middle: "center", high: r ? "left" : "right" })[o.align]), this.axisTitle = i.text(o.text || "", 0, 0, o.useHTML).attr({ zIndex: 7, rotation: o.rotation || 0, align: e }).addClass("highcharts-axis-title"), a || this.axisTitle.css(ki(o.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), a || o.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }), this.axisTitle[t ? "show" : "hide"](t);
        }
        generateTick(t) {
          let e = this.ticks;
          e[t] ? e[t].addLabel() : e[t] = new Bi(this, t);
        }
        createGroups() {
          let { axisParent: t, chart: e, coll: i, options: s } = this, r = e.renderer, o = (a, l, c) => r.g(a).attr({ zIndex: c }).addClass(`highcharts-${i.toLowerCase()}${l} ` + (this.isRadial ? `highcharts-radial-axis${l} ` : "") + (s.className || "")).add(t);
          this.axisGroup || (this.gridGroup = o("grid", "-grid", s.gridZIndex), this.axisGroup = o("axis", "", s.zIndex), this.labelGroup = o("axis-labels", "-labels", s.labels.zIndex));
        }
        getOffset() {
          let t = this, { chart: e, horiz: i, options: s, side: r, ticks: o, tickPositions: a, coll: l } = t, c = e.inverted && !t.isZAxis ? [1, 0, 3, 2][r] : r, f = t.hasData(), d = s.title, m = s.labels, x = it(s.crossing), y = e.axisOffset, M = e.clipOffset, w = [-1, 1, 1, -1][r], v, T = 0, S, O = 0, L = 0, D, N;
          if (t.showAxis = v = f || s.showEmpty, t.staggerLines = t.horiz && m.staggerLines || void 0, t.createGroups(), f || t.isLinked ? (a.forEach(function(I) {
            t.generateTick(I);
          }), t.renderUnsquish(), t.reserveSpaceDefault = r === 0 || r === 2 || { 1: "left", 3: "right" }[r] === t.labelAlign, ct(m.reserveSpace, !x && null, t.labelAlign === "center" || null, t.reserveSpaceDefault) && a.forEach(function(I) {
            L = Math.max(o[I].getLabelSize(), L);
          }), t.staggerLines && (L *= t.staggerLines), t.labelOffset = L * (t.opposite ? -1 : 1)) : Bs(o, function(I, W) {
            I.destroy(), delete o[W];
          }), d?.text && d.enabled !== !1 && (t.addTitle(v), v && !x && d.reserveSpace !== !1 && (t.titleOffset = T = t.axisTitle.getBBox()[i ? "height" : "width"], O = Ct(S = d.offset) ? 0 : ct(d.margin, i ? 5 : 10))), t.renderLine(), t.offset = w * ct(s.offset, y[r] ? y[r] + (s.margin || 0) : 0), t.tickRotCorr = t.tickRotCorr || { x: 0, y: 0 }, N = r === 0 ? -t.labelMetrics().h : r === 2 ? t.tickRotCorr.y : 0, D = Math.abs(L) + O, L && (D -= N, D += w * (i ? ct(m.y, t.tickRotCorr.y + w * m.distance) : ct(m.x, w * m.distance))), t.axisTitleMargin = ct(S, D), t.getMaxLabelDimensions && (t.maxLabelDimensions = t.getMaxLabelDimensions(o, a)), l !== "colorAxis" && M) {
            let I = this.tickSize("tick");
            y[r] = Math.max(y[r], (t.axisTitleMargin || 0) + T + w * t.offset, D, a?.length && I ? I[0] + w * t.offset : 0);
            let W = !t.axisLine || s.offset ? 0 : t.axisLine.strokeWidth() / 2;
            M[c] = Math.max(M[c], W);
          }
          Ht(this, "afterGetOffset");
        }
        getLinePath(t) {
          let e = this.chart, i = this.opposite, s = this.offset, r = this.horiz, o = this.left + (i ? this.width : 0) + s, a = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
          return i && (t *= -1), e.renderer.crispLine([["M", r ? this.left : o, r ? a : this.top], ["L", r ? e.chartWidth - this.right : o, r ? a : e.chartHeight - this.bottom]], t);
        }
        renderLine() {
          !this.axisLine && (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
        }
        getTitlePosition(t) {
          let e = this.horiz, i = this.left, s = this.top, r = this.len, o = this.options.title, a = e ? i : s, l = this.opposite, c = this.offset, f = o.x, d = o.y, m = this.chart.renderer.fontMetrics(t), x = t ? Math.max(t.getBBox(!1, 0).height - m.h - 1, 0) : 0, y = { low: a + (e ? 0 : r), middle: a + r / 2, high: a + (e ? r : 0) }[o.align], M = (e ? s + this.height : i) + (e ? 1 : -1) * (l ? -1 : 1) * (this.axisTitleMargin || 0) + [-x, x, m.f, -x][this.side], w = { x: e ? y + f : M + (l ? this.width : 0) + c + f, y: e ? M + d - (l ? this.height : 0) + c : y + d };
          return Ht(this, "afterGetTitlePosition", { titlePosition: w }), w;
        }
        renderMinorTick(t, e) {
          let i = this.minorTicks;
          i[t] || (i[t] = new Bi(this, t, "minor")), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1);
        }
        renderTick(t, e, i) {
          let s = this.isLinked, r = this.ticks;
          (!s || t >= this.min && t <= this.max || this.grid?.isColumn) && (r[t] || (r[t] = new Bi(this, t)), i && r[t].isNew && r[t].render(e, !0, -1), r[t].render(e));
        }
        render() {
          let t, e, i = this, s = i.chart, r = i.logarithmic, o = s.renderer, a = i.options, l = i.isLinked, c = i.tickPositions, f = i.axisTitle, d = i.ticks, m = i.minorTicks, x = i.alternateBands, y = a.stackLabels, M = a.alternateGridColor, w = a.crossing, v = i.tickmarkOffset, T = i.axisLine, S = i.showAxis, O = ta(o.globalAnimation);
          if (i.labelEdge.length = 0, i.overlap = !1, [d, m, x].forEach(function(L) {
            Bs(L, function(D) {
              D.isActive = !1;
            });
          }), it(w)) {
            let L = this.isXAxis ? s.yAxis[0] : s.xAxis[0], D = [1, -1, -1, 1][this.side];
            if (L) {
              let N = L.toPixels(w, !0);
              i.horiz && (N = L.len - N), i.offset = D * N;
            }
          }
          if (i.hasData() || l) {
            let L = i.chart.hasRendered && i.old && it(i.old.min);
            i.minorTickInterval && !i.categories && i.getMinorTickPositions().forEach(function(D) {
              i.renderMinorTick(D, L);
            }), c.length && (c.forEach(function(D, N) {
              i.renderTick(D, N, L);
            }), v && (i.min === 0 || i.single) && (d[-1] || (d[-1] = new Bi(i, -1, null, !0)), d[-1].render(-1))), M && c.forEach(function(D, N) {
              e = c[N + 1] !== void 0 ? c[N + 1] + v : i.max - v, N % 2 == 0 && D < i.max && e <= i.max + (s.polar ? -v : v) && (x[D] || (x[D] = new X.PlotLineOrBand(i, {})), t = D + v, x[D].options = { from: r ? r.lin2log(t) : t, to: r ? r.lin2log(e) : e, color: M, className: "highcharts-alternate-grid" }, x[D].render(), x[D].isActive = !0);
            }), i._addedPlotLB || (i._addedPlotLB = !0, (a.plotLines || []).concat(a.plotBands || []).forEach(function(D) {
              i.addPlotBandOrLine(D);
            }));
          }
          [d, m, x].forEach(function(L) {
            let D = [], N = O.duration;
            Bs(L, function(I, W) {
              I.isActive || (I.render(W, !1, 0), I.isActive = !1, D.push(W));
            }), Yn(function() {
              let I = D.length;
              for (; I--; ) L[D[I]] && !L[D[I]].isActive && (L[D[I]].destroy(), delete L[D[I]]);
            }, L !== x && s.hasRendered && N ? N : 0);
          }), T && (T[T.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(T.strokeWidth()) }), T.isPlaced = !0, T[S ? "show" : "hide"](S)), f && S && (f[f.isNew ? "attr" : "animate"](i.getTitlePosition(f)), f.isNew = !1), y?.enabled && i.stacking && i.stacking.renderStackTotals(), i.old = { len: i.len, max: i.max, min: i.min, transA: i.transA, userMax: i.userMax, userMin: i.userMin }, i.isDirty = !1, Ht(this, "afterRender");
        }
        redraw() {
          this.visible && (this.render(), this.plotLinesAndBands.forEach(function(t) {
            t.render();
          })), this.series.forEach(function(t) {
            t.isDirty = !0;
          });
        }
        getKeepProps() {
          return this.keepProps || Ri.keepProps;
        }
        destroy(t) {
          let e = this, i = e.plotLinesAndBands, s = this.eventOptions;
          if (Ht(this, "destroy", { keepEvents: t }), t || Xn(e), [e.ticks, e.minorTicks, e.alternateBands].forEach(function(r) {
            ra(r);
          }), i) {
            let r = i.length;
            for (; r--; ) i[r].destroy();
          }
          for (let r in ["axisLine", "axisTitle", "axisGroup", "gridGroup", "labelGroup", "cross", "scrollbar"].forEach(function(o) {
            e[o] && (e[o] = e[o].destroy());
          }), e.plotLinesAndBandsGroups) e.plotLinesAndBandsGroups[r] = e.plotLinesAndBandsGroups[r].destroy();
          Bs(e, function(r, o) {
            e.getKeepProps().indexOf(o) === -1 && delete e[o];
          }), this.eventOptions = s;
        }
        drawCrosshair(t, e) {
          let i = this.crosshair, s = i?.snap ?? !0, r = this.chart, o, a, l, c = this.cross, f;
          if (Ht(this, "drawCrosshair", { e: t, point: e }), t || (t = this.cross?.e), i && (Ct(e) || !s) !== !1) {
            if (s ? Ct(e) && (a = ct(this.coll !== "colorAxis" ? e.crosshairPos : null, this.isXAxis ? e.plotX : this.len - e.plotY)) : a = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), Ct(a) && (f = { value: e && (this.isXAxis ? e.x : ct(e.stackY, e.y)), translatedValue: a }, r.polar && Ni(f, { isCrosshair: !0, chartX: t?.chartX, chartY: t?.chartY, point: e }), o = this.getPlotLinePath(f) || null), !Ct(o)) return void this.hideCrosshair();
            l = this.categories && !this.isRadial, c || (this.cross = c = r.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (l ? "category " : "thin ") + (i.className || "")).attr({ zIndex: ct(i.zIndex, 2) }).add(), !r.styledMode && (c.attr({ stroke: i.color || (l ? Tt.parse("#ccd3ff").setOpacity(0.25).get() : "#cccccc"), "stroke-width": ct(i.width, 1) }).css({ "pointer-events": "none" }), i.dashStyle && c.attr({ dashstyle: i.dashStyle }))), c.show().attr({ d: o }), l && !i.width && c.attr({ "stroke-width": this.transA }), this.cross.e = t;
          } else this.hideCrosshair();
          Ht(this, "afterDrawCrosshair", { e: t, point: e });
        }
        hideCrosshair() {
          this.cross && this.cross.hide(), Ht(this, "afterHideCrosshair");
        }
        update(t, e) {
          let i = this.chart;
          t = ki(this.userOptions, t), this.destroy(!0), this.init(i, t), i.isDirtyBox = !0, ct(e, !0) && i.redraw();
        }
        remove(t) {
          let e = this.chart, i = this.coll, s = this.series, r = s.length;
          for (; r--; ) s[r] && s[r].remove(!1);
          Dr(e.axes, this), Dr(e[i] || [], this), e.orderItems(i), this.destroy(), e.isDirtyBox = !0, ct(t, !0) && e.redraw();
        }
        setTitle(t, e) {
          this.update({ title: t }, e);
        }
        setCategories(t, e) {
          this.update({ categories: t }, e);
        }
      }
      Ri.keepProps = ["coll", "extKey", "hcEvents", "len", "names", "series", "userMax", "userMin"];
      let { addEvent: qe, getMagnitude: jn, normalizeTickInterval: Un, timeUnits: Rs } = J;
      (function(h) {
        function t() {
          return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
        }
        function e() {
          if (this.type !== "datetime") {
            this.dateTime = void 0;
            return;
          }
          this.dateTime || (this.dateTime = new i(this));
        }
        h.compose = function(s) {
          return s.keepProps.includes("dateTime") || (s.keepProps.push("dateTime"), s.prototype.getTimeTicks = t, qe(s, "afterSetType", e)), s;
        };
        class i {
          constructor(r) {
            this.axis = r;
          }
          normalizeTimeTickInterval(r, o) {
            let a = o || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], l = a[a.length - 1], c = Rs[l[0]], f = l[1], d;
            for (d = 0; d < a.length && (c = Rs[(l = a[d])[0]], f = l[1], !a[d + 1] || !(r <= (c * f[f.length - 1] + Rs[a[d + 1][0]]) / 2)); d++) ;
            c === Rs.year && r < 5 * c && (f = [1, 2, 5]);
            let m = Un(r / c, f, l[0] === "year" ? Math.max(jn(r / c), 1) : 1);
            return { unitRange: c, count: m, unitName: l[0] };
          }
          getXDateFormat(r, o) {
            let { axis: a } = this, l = a.chart.time;
            return a.closestPointRange ? l.getDateFormat(a.closestPointRange, r, a.options.startOfWeek, o) || l.resolveDTLFormat(o.year).main : l.resolveDTLFormat(o.day).main;
          }
        }
        h.Additions = i;
      })(ne || (ne = {}));
      let Vn = ne, { addEvent: Nr, normalizeTickInterval: as, pick: ns } = J;
      (function(h) {
        function t() {
          this.type !== "logarithmic" ? this.logarithmic = void 0 : this.logarithmic ?? (this.logarithmic = new i(this));
        }
        function e() {
          let s = this.logarithmic;
          s && (this.lin2val = function(r) {
            return s.lin2log(r);
          }, this.val2lin = function(r) {
            return s.log2lin(r);
          });
        }
        h.compose = function(s) {
          return s.keepProps.includes("logarithmic") || (s.keepProps.push("logarithmic"), Nr(s, "afterSetType", t), Nr(s, "afterInit", e)), s;
        };
        class i {
          constructor(r) {
            this.axis = r;
          }
          getLogTickPositions(r, o, a, l) {
            let c = this.axis, f = c.len, d = c.options, m = [];
            if (l || (this.minorAutoInterval = void 0), r >= 0.5) r = Math.round(r), m = c.getLinearTickPositions(r, o, a);
            else if (r >= 0.08) {
              let x, y, M, w, v, T, S, O = Math.floor(o);
              for (x = r > 0.3 ? [1, 2, 4] : r > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], y = O; y < a + 1 && !S; y++) for (M = 0, w = x.length; M < w && !S; M++) (v = this.log2lin(this.lin2log(y) * x[M])) > o && (!l || T <= a) && T !== void 0 && m.push(T), T > a && (S = !0), T = v;
            } else {
              let x = this.lin2log(o), y = this.lin2log(a), M = l ? c.getMinorTickInterval() : d.tickInterval, w = d.tickPixelInterval / (l ? 5 : 1), v = l ? f / c.tickPositions.length : f;
              r = as(r = ns(M === "auto" ? null : M, this.minorAutoInterval, (y - x) * w / (v || 1))), m = c.getLinearTickPositions(r, x, y).map(this.log2lin), l || (this.minorAutoInterval = r / 5);
            }
            return l || (c.tickInterval = r), m;
          }
          lin2log(r) {
            return Math.pow(10, r);
          }
          log2lin(r) {
            return Math.log(r) / Math.LN10;
          }
        }
        h.Additions = i;
      })(gi || (gi = {}));
      let zs = gi, { erase: na, extend: Rr, isNumber: Fs } = J;
      (function(h) {
        let t;
        function e(c) {
          return this.addPlotBandOrLine(c, "plotBands");
        }
        function i(c, f) {
          let d = this.userOptions, m = new t(this, c);
          if (this.visible && (m = m.render()), m) {
            if (this._addedPlotLB || (this._addedPlotLB = !0, (d.plotLines || []).concat(d.plotBands || []).forEach((x) => {
              this.addPlotBandOrLine(x);
            })), f) {
              let x = d[f] || [];
              x.push(c), d[f] = x;
            }
            this.plotLinesAndBands.push(m);
          }
          return m;
        }
        function s(c) {
          return this.addPlotBandOrLine(c, "plotLines");
        }
        function r(c, f, d) {
          d = d || this.options;
          let m = this.getPlotLinePath({ value: f, force: !0, acrossPanes: d.acrossPanes }), x = [], y = this.horiz, M = !Fs(this.min) || !Fs(this.max) || c < this.min && f < this.min || c > this.max && f > this.max, w = this.getPlotLinePath({ value: c, force: !0, acrossPanes: d.acrossPanes }), v, T = 1, S;
          if (w && m) for (M && (S = w.toString() === m.toString(), T = 0), v = 0; v < w.length; v += 2) {
            let O = w[v], L = w[v + 1], D = m[v], N = m[v + 1];
            (O[0] === "M" || O[0] === "L") && (L[0] === "M" || L[0] === "L") && (D[0] === "M" || D[0] === "L") && (N[0] === "M" || N[0] === "L") && (y && D[1] === O[1] ? (D[1] += T, N[1] += T) : y || D[2] !== O[2] || (D[2] += T, N[2] += T), x.push(["M", O[1], O[2]], ["L", L[1], L[2]], ["L", N[1], N[2]], ["L", D[1], D[2]], ["Z"])), x.isFlat = S;
          }
          return x;
        }
        function o(c) {
          this.removePlotBandOrLine(c);
        }
        function a(c) {
          let f = this.plotLinesAndBands, d = this.options, m = this.userOptions;
          if (f) {
            let x = f.length;
            for (; x--; ) f[x].id === c && f[x].destroy();
            [d.plotLines || [], m.plotLines || [], d.plotBands || [], m.plotBands || []].forEach(function(y) {
              for (x = y.length; x--; ) y[x]?.id === c && na(y, y[x]);
            });
          }
        }
        function l(c) {
          this.removePlotBandOrLine(c);
        }
        h.compose = function(c, f) {
          let d = f.prototype;
          return d.addPlotBand || (t = c, Rr(d, { addPlotBand: e, addPlotLine: s, addPlotBandOrLine: i, getPlotBandPath: r, removePlotBand: o, removePlotLine: l, removePlotBandOrLine: a })), f;
        };
      })(de || (de = {}));
      let la = de, { addEvent: qn, arrayMax: ha, arrayMin: zr, defined: Fe, destroyObjectProperties: Fr, erase: Kn, fireEvent: $n, merge: ca, objectEach: Hr, pick: Zn } = J;
      class wi {
        static compose(t, e) {
          return qn(t, "afterInit", function() {
            this.labelCollectors.push(() => {
              let i = [];
              for (let s of this.axes) for (let { label: r, options: o } of s.plotLinesAndBands) r && !o?.label?.allowOverlap && i.push(r);
              return i;
            });
          }), la.compose(wi, e);
        }
        constructor(t, e) {
          this.axis = t, this.options = e, this.id = e.id;
        }
        render() {
          $n(this, "render");
          let { axis: t, options: e } = this, { horiz: i, logarithmic: s } = t, { color: r, events: o, zIndex: a = 0 } = e, { renderer: l, time: c } = t.chart, f = {}, d = c.parse(e.to), m = c.parse(e.from), x = c.parse(e.value), y = e.borderWidth, M = e.label, { label: w, svgElem: v } = this, T = [], S, O = Fe(m) && Fe(d), L = Fe(x), D = !v, N = { class: "highcharts-plot-" + (O ? "band " : "line ") + (e.className || "") }, I = O ? "bands" : "lines";
          if (!t.chart.styledMode && (L ? (N.stroke = r || "#999999", N["stroke-width"] = Zn(e.width, 1), e.dashStyle && (N.dashstyle = e.dashStyle)) : O && (N.fill = r || "#e6e9ff", y && (N.stroke = e.borderColor, N["stroke-width"] = y))), f.zIndex = a, I += "-" + a, (S = t.plotLinesAndBandsGroups[I]) || (t.plotLinesAndBandsGroups[I] = S = l.g("plot-" + I).attr(f).add()), v || (this.svgElem = v = l.path().attr(N).add(S)), Fe(x)) T = t.getPlotLinePath({ value: s?.log2lin(x) ?? x, lineWidth: v.strokeWidth(), acrossPanes: e.acrossPanes });
          else {
            if (!(Fe(m) && Fe(d))) return;
            T = t.getPlotBandPath(s?.log2lin(m) ?? m, s?.log2lin(d) ?? d, e);
          }
          return !this.eventsAdded && o && (Hr(o, (W, j) => {
            v?.on(j, (H) => {
              o[j].apply(this, [H]);
            });
          }), this.eventsAdded = !0), (D || !v.d) && T?.length ? v.attr({ d: T }) : v && (T ? (v.show(), v.animate({ d: T })) : v.d && (v.hide(), w && (this.label = w = w.destroy()))), M && (Fe(M.text) || Fe(M.formatter)) && T?.length && t.width > 0 && t.height > 0 && !T.isFlat ? (M = ca({ align: i && O ? "center" : void 0, x: i ? !O && 4 : 10, verticalAlign: !i && O ? "middle" : void 0, y: i ? O ? 16 : 10 : O ? 6 : -4, rotation: i && !O ? 90 : 0, ...O ? { inside: !0 } : {} }, M), this.renderLabel(M, T, O, a)) : w && w.hide(), this;
        }
        renderLabel(t, e, i, s) {
          let r = this.axis, o = r.chart.renderer, a = t.inside, l = this.label;
          l || (this.label = l = o.text(this.getLabelText(t), 0, 0, t.useHTML).attr({ align: t.textAlign || t.align, rotation: t.rotation, class: "highcharts-plot-" + (i ? "band" : "line") + "-label " + (t.className || ""), zIndex: s }), r.chart.styledMode || l.css(ca({ color: r.chart.options.title?.style?.color, fontSize: "0.8em", textOverflow: i && !a ? "" : "ellipsis" }, t.style)), l.add());
          let c = e.xBounds || [e[0][1], e[1][1], i ? e[2][1] : e[0][1]], f = e.yBounds || [e[0][2], e[1][2], i ? e[2][2] : e[0][2]], d = zr(c), m = zr(f), x = ha(c) - d;
          l.align(t, !1, { x: d, y: m, width: x, height: ha(f) - m }), l.alignAttr.y -= o.fontMetrics(l).b, (!l.alignValue || l.alignValue === "left" || Fe(a)) && l.css({ width: (t.style?.width || (i && a ? x : l.rotation === 90 ? r.height - (l.alignAttr.y - r.top) : (t.clip ? r.width : r.chart.chartWidth) - (l.alignAttr.x - r.left))) + "px" }), l.show(!0);
        }
        getLabelText(t) {
          return Fe(t.formatter) ? t.formatter.call(this) : t.text;
        }
        destroy() {
          Kn(this.axis.plotLinesAndBands, this), delete this.axis, Fr(this);
        }
      }
      let { animObject: da } = $t, { format: pa } = he, { composed: Hs, dateFormats: _n, doc: Wr, isSafari: Xr } = X, { distribute: Jn } = ws, { addEvent: Qn, clamp: zi, css: ci, discardElement: tl, extend: Gr, fireEvent: Ws, getAlignFactor: ua, isArray: Yr, isNumber: ga, isObject: Me, isString: jr, merge: u, pick: n, pushUnique: p, splat: g, syncTimeout: b } = J;
      class C {
        constructor(t, e, i) {
          this.allowShared = !0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !1, this.options = {}, this.outside = !1, this.chart = t, this.init(t, e), this.pointer = i;
        }
        bodyFormatter(t) {
          return t.map((e) => {
            let i = e.series.tooltipOptions, s = e.formatPrefix || "point";
            return (i[s + "Formatter"] || e.tooltipFormatter).call(e, i[s + "Format"] || "");
          });
        }
        cleanSplit(t) {
          this.chart.series.forEach(function(e) {
            let i = e?.tt;
            i && (!i.isActive || t ? e.tt = i.destroy() : i.isActive = !1);
          });
        }
        defaultFormatter(t) {
          let e, i = this.points || g(this);
          return (e = (e = [t.headerFooterFormatter(i[0])]).concat(t.bodyFormatter(i))).push(t.headerFooterFormatter(i[0], !0)), e;
        }
        destroy() {
          this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(!0), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), tl(this.container)), J.clearTimeout(this.hideTimer);
        }
        getAnchor(t, e) {
          let i, { chart: s, pointer: r } = this, o = s.inverted, a = s.plotTop, l = s.plotLeft;
          if (t = g(t), t[0].series?.yAxis && !t[0].series.yAxis.options.reversedStacks && (t = t.slice().reverse()), this.followPointer && e) e.chartX === void 0 && (e = r.normalize(e)), i = [e.chartX - l, e.chartY - a];
          else if (t[0].tooltipPos) i = t[0].tooltipPos;
          else {
            let f = 0, d = 0;
            t.forEach(function(m) {
              let x = m.pos(!0);
              x && (f += x[0], d += x[1]);
            }), f /= t.length, d /= t.length, this.shared && t.length > 1 && e && (o ? f = e.chartX : d = e.chartY), i = [f - l, d - a];
          }
          let c = { point: t[0], ret: i };
          return Ws(this, "getAnchor", c), c.ret.map(Math.round);
        }
        getClassName(t, e, i) {
          let s = this.options, r = t.series, o = r.options;
          return [s.className, "highcharts-label", i && "highcharts-tooltip-header", e ? "highcharts-tooltip-box" : "highcharts-tooltip", !i && "highcharts-color-" + n(t.colorIndex, r.colorIndex), o?.className].filter(jr).join(" ");
        }
        getLabel({ anchorX: t, anchorY: e } = { anchorX: 0, anchorY: 0 }) {
          let i = this, s = this.chart.styledMode, r = this.options, o = this.split && this.allowShared, a = this.container, l = this.chart.renderer;
          if (this.label) {
            let c = !this.label.hasClass("highcharts-label");
            (!o && c || o && !c) && this.destroy();
          }
          if (!this.label) {
            if (this.outside) {
              let c = this.chart, f = c.options.chart.style, d = $i.getRendererType();
              this.container = a = X.doc.createElement("div"), a.className = "highcharts-tooltip-container " + (c.renderTo.className.match(/(highcharts[a-zA-Z0-9-]+)\s?/gm) || ""), ci(a, { position: "absolute", top: "1px", pointerEvents: "none", zIndex: Math.max(this.options.style.zIndex || 0, (f?.zIndex || 0) + 3) }), this.renderer = l = new d(a, 0, 0, f, void 0, void 0, l.styledMode);
            }
            if (o ? this.label = l.g("tooltip") : (this.label = l.label("", t, e, r.shape || "callout", void 0, void 0, r.useHTML, void 0, "tooltip").attr({ padding: r.padding, r: r.borderRadius }), s || this.label.attr({ fill: r.backgroundColor, "stroke-width": r.borderWidth || 0 }).css(r.style).css({ pointerEvents: r.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none") })), i.outside) {
              let c = this.label;
              [c.xSetter, c.ySetter].forEach((f, d) => {
                c[d ? "ySetter" : "xSetter"] = (m) => {
                  f.call(c, i.distance), c[d ? "y" : "x"] = m, a && (a.style[d ? "top" : "left"] = `${m}px`);
                };
              });
            }
            this.label.attr({ zIndex: 8 }).shadow(r.shadow ?? !r.fixed).add();
          }
          return a && !a.parentElement && X.doc.body.appendChild(a), this.label;
        }
        getPlayingField() {
          let { body: t, documentElement: e } = Wr, { chart: i, distance: s, outside: r } = this;
          return { width: r ? Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth) - 2 * s - 2 : i.chartWidth, height: r ? Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight) : i.chartHeight };
        }
        getPosition(t, e, i) {
          let { distance: s, chart: r, outside: o, pointer: a } = this, { inverted: l, plotLeft: c, plotTop: f, polar: d } = r, { plotX: m = 0, plotY: x = 0 } = i, y = {}, M = l && i.h || 0, { height: w, width: v } = this.getPlayingField(), T = a.getChartPosition(), S = (V) => V * T.scaleX, O = (V) => V * T.scaleY, L = (V) => {
            let Z = V === "x";
            return [V, Z ? v : w, Z ? t : e].concat(o ? [Z ? S(t) : O(e), Z ? T.left - s + S(m + c) : T.top - s + O(x + f), 0, Z ? v : w] : [Z ? t : e, Z ? m + c : x + f, Z ? c : f, Z ? c + r.plotWidth : f + r.plotHeight]);
          }, D = L("y"), N = L("x"), I, W = !!i.negative;
          !d && r.hoverSeries?.yAxis?.reversed && (W = !W);
          let j = !this.followPointer && n(i.ttBelow, !d && !l === W), H = function(V, Z, tt, St, gt, xe, at) {
            let ot = o ? V === "y" ? O(s) : S(s) : s, yt = (tt - St) / 2, pt = St < gt - s, Pt = gt + s + St < Z, Ot = gt - ot - tt + yt, vt = gt + ot - yt;
            if (j && Pt) y[V] = vt;
            else if (!j && pt) y[V] = Ot;
            else if (pt) y[V] = Math.min(at - St, Ot - M < 0 ? Ot : Ot - M);
            else {
              if (!Pt) return y[V] = 0, !1;
              y[V] = Math.max(xe, vt + M + tt > Z ? vt : vt + M);
            }
          }, K = function(V, Z, tt, St, gt) {
            if (gt < s || gt > Z - s) return !1;
            gt < tt / 2 ? y[V] = 1 : gt > Z - St / 2 ? y[V] = Z - St - 2 : y[V] = gt - tt / 2;
          }, Q = function(V) {
            [D, N] = [N, D], I = V;
          }, et = () => {
            H.apply(0, D) !== !1 ? K.apply(0, N) !== !1 || I || (Q(!0), et()) : I ? y.x = y.y = 0 : (Q(!0), et());
          };
          return (l && !d || this.len > 1) && Q(), et(), y;
        }
        getFixedPosition(t, e, i) {
          let s = i.series, { chart: r, options: o, split: a } = this, l = o.position, c = l.relativeTo, f = o.shared || s?.yAxis?.isRadial && (c === "pane" || !c) ? "plotBox" : c, d = f === "chart" ? r.renderer : r[f] || r.getClipBox(s, !0);
          return { x: d.x + (d.width - t) * ua(l.align) + l.x, y: d.y + (d.height - e) * ua(l.verticalAlign) + (!a && l.y || 0) };
        }
        hide(t) {
          let e = this;
          J.clearTimeout(this.hideTimer), t = n(t, this.options.hideDelay), this.isHidden || (this.hideTimer = b(function() {
            let i = e.getLabel();
            e.getLabel().animate({ opacity: 0 }, { duration: t && 150, complete: () => {
              i.hide(), e.container && e.container.remove();
            } }), e.isHidden = !0;
          }, t));
        }
        init(t, e) {
          this.chart = t, this.options = e, this.crosshairs = [], this.isHidden = !0, this.split = e.split && !t.inverted && !t.polar, this.shared = e.shared || this.split, this.outside = n(e.outside, !!(t.scrollablePixelsX || t.scrollablePixelsY));
        }
        shouldStickOnContact(t) {
          return !!(!this.followPointer && this.options.stickOnContact && (!t || this.pointer.inClass(t.target, "highcharts-tooltip")));
        }
        move(t, e, i, s) {
          let { followPointer: r, options: o } = this, a = da(!r && !this.isHidden && !o.fixed && o.animation), l = r || (this.len || 0) > 1, c = { x: t, y: e };
          l ? c.anchorX = c.anchorY = NaN : (c.anchorX = i, c.anchorY = s), a.step = () => this.drawTracker(), this.getLabel().animate(c, a);
        }
        refresh(t, e) {
          let { chart: i, options: s, pointer: r, shared: o } = this, a = g(t), l = a[0], c = s.format, f = s.formatter || this.defaultFormatter, d = i.styledMode, m = this.allowShared;
          if (!s.enabled || !l.series) return;
          J.clearTimeout(this.hideTimer), this.allowShared = !(!Yr(t) && t.series && t.series.noSharedTooltip), m = m && !this.allowShared, this.followPointer = !this.split && l.series.tooltipOptions.followPointer;
          let x = this.getAnchor(t, e), y = x[0], M = x[1];
          o && this.allowShared && (r.applyInactiveState(a), a.forEach((T) => T.setState("hover")), l.points = a), this.len = a.length;
          let w = jr(c) ? pa(c, l, i) : f.call(l, this);
          l.points = void 0;
          let v = l.series;
          if (this.distance = n(v.tooltipOptions.distance, 16), w === !1) this.hide();
          else {
            if (this.split && this.allowShared) this.renderSplit(w, a);
            else {
              let T = y, S = M;
              if (e && r.isDirectTouch && (T = e.chartX - i.plotLeft, S = e.chartY - i.plotTop), !(i.polar || v.options.clip === !1 || a.some((O) => r.isDirectTouch || O.series.shouldShowTooltip(T, S)))) return void this.hide();
              {
                let O = this.getLabel(m && this.tt || {});
                (!s.style.width || d) && O.css({ width: (this.outside ? this.getPlayingField() : i.spacingBox).width + "px" }), O.attr({ class: this.getClassName(l), text: w && w.join ? w.join("") : w }), this.outside && O.attr({ x: zi(O.x || 0, 0, this.getPlayingField().width - (O.width || 0) - 1) }), d || O.attr({ stroke: s.borderColor || l.color || v.color || "#666666" }), this.updatePosition({ plotX: y, plotY: M, negative: l.negative, ttBelow: l.ttBelow, series: v, h: x[2] || 0 });
              }
            }
            this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(), this.isHidden = !1;
          }
          Ws(this, "refresh");
        }
        renderSplit(t, e) {
          let i = this, { chart: s, chart: { chartWidth: r, chartHeight: o, plotHeight: a, plotLeft: l, plotTop: c, scrollablePixelsY: f = 0, scrollablePixelsX: d, styledMode: m }, distance: x, options: y, options: { fixed: M, position: w, positioner: v }, pointer: T } = i, { scrollLeft: S = 0, scrollTop: O = 0 } = s.scrollablePlotArea?.scrollingContainer || {}, L = i.outside && typeof d != "number" ? Wr.documentElement.getBoundingClientRect() : { left: S, right: S + r }, D = i.getLabel(), N = this.renderer || s.renderer, I = !!s.xAxis[0]?.opposite, { left: W, top: j } = T.getChartPosition(), H = v || M, K = c + O, Q = 0, et = a - f, V = function(at, ot, yt, pt = [0, 0], Pt = !0) {
            let Ot, vt;
            if (yt.isHeader) vt = I ? 0 : et, Ot = zi(pt[0] - at / 2, L.left, L.right - at - (i.outside ? W : 0));
            else if (M && yt) {
              let jt = i.getFixedPosition(at, ot, yt);
              Ot = jt.x, vt = jt.y - K;
            } else vt = pt[1] - K, Ot = zi(Ot = Pt ? pt[0] - at - x : pt[0] + x, Pt ? Ot : L.left, L.right);
            return { x: Ot, y: vt };
          };
          jr(t) && (t = [!1, t]);
          let Z = t.slice(0, e.length + 1).reduce(function(at, ot, yt) {
            if (ot !== !1 && ot !== "") {
              let pt = e[yt - 1] || { isHeader: !0, plotX: e[0].plotX, plotY: a, series: {} }, Pt = pt.isHeader, Ot = Pt ? i : pt.series, vt = Ot.tt = (function(Je, ye, ui) {
                let Ui = Je, { isHeader: ps, series: io } = ye, Qe = io.tooltipOptions || y;
                if (!Ui) {
                  let Us = { padding: Qe.padding, r: Qe.borderRadius };
                  m || (Us.fill = Qe.backgroundColor, Us["stroke-width"] = Qe.borderWidth ?? (M && !ps ? 0 : 1)), Ui = N.label("", 0, 0, Qe[ps ? "headerShape" : "shape"] || (M && !ps ? "rect" : "callout"), void 0, void 0, Qe.useHTML).addClass(i.getClassName(ye, !0, ps)).attr(Us).add(D);
                }
                return Ui.isActive = !0, Ui.attr({ text: ui }), m || Ui.css(Qe.style).attr({ stroke: Qe.borderColor || ye.color || io.color || "#333333" }), Ui;
              })(Ot.tt, pt, ot.toString()), jt = vt.getBBox(), be = jt.width + vt.strokeWidth();
              Pt && (Q = jt.height, et += Q, I && (K -= Q));
              let { anchorX: Ae, anchorY: ji } = (function(Je) {
                let ye, ui, { isHeader: Ui, plotX: ps = 0, plotY: io = 0, series: Qe } = Je;
                if (Ui) ye = Math.max(l + ps, l), ui = c + a / 2;
                else {
                  let { xAxis: Us, yAxis: Zh } = Qe;
                  ye = Us.pos + zi(ps, -x, Us.len + x), Qe.shouldShowTooltip(0, Zh.pos - c + io, { ignoreX: !0 }) && (ui = Zh.pos + io);
                }
                return { anchorX: ye = zi(ye, L.left - x, L.right + x), anchorY: ui };
              })(pt);
              if (typeof ji == "number") {
                let Je = jt.height + 1, ye = (v || V).call(i, be, Je, pt, [Ae, ji]);
                at.push({ align: H ? 0 : void 0, anchorX: Ae, anchorY: ji, boxWidth: be, point: pt, rank: n(ye.rank, +!!Pt), size: Je, target: ye.y, tt: vt, x: ye.x });
              } else vt.isActive = !1;
            }
            return at;
          }, []);
          !H && Z.some((at) => {
            let { outside: ot } = i, yt = (ot ? W : 0) + at.anchorX;
            return yt < L.left && yt + at.boxWidth < L.right || yt < W - L.left + at.boxWidth && L.right - yt > yt;
          }) && (Z = Z.map((at) => {
            let { x: ot, y: yt } = V.call(this, at.boxWidth, at.size, at.point, [at.anchorX, at.anchorY], !1);
            return Gr(at, { target: yt, x: ot });
          })), i.cleanSplit(), Jn(Z, et);
          let tt = { left: W, right: W };
          Z.forEach(function(at) {
            let { x: ot, boxWidth: yt, isHeader: pt } = at;
            !pt && (i.outside && W + ot < tt.left && (tt.left = W + ot), !pt && i.outside && tt.left + yt > tt.right && (tt.right = W + ot));
          }), Z.forEach(function(at) {
            let { x: ot, anchorX: yt, anchorY: pt, pos: Pt, point: { isHeader: Ot } } = at, vt = { visibility: Pt === void 0 ? "hidden" : "inherit", x: ot, y: (Pt || 0) + K + (M && w.y || 0), anchorX: yt, anchorY: pt };
            if (i.outside && ot < yt) {
              let jt = W - tt.left;
              jt > 0 && (Ot || (vt.x = ot + jt, vt.anchorX = yt + jt), Ot && (vt.x = (tt.right - tt.left) / 2, vt.anchorX = yt + jt));
            }
            at.tt.attr(vt);
          });
          let { container: St, outside: gt, renderer: xe } = i;
          if (gt && St && xe) {
            let { width: at, height: ot, x: yt, y: pt } = D.getBBox();
            xe.setSize(at + yt, ot + pt, !1), St.style.left = tt.left + "px", St.style.top = j + "px";
          }
          Xr && D.attr({ opacity: D.opacity === 1 ? 0.999 : 1 });
        }
        drawTracker() {
          if (!this.shouldStickOnContact()) {
            this.tracker && (this.tracker = this.tracker.destroy());
            return;
          }
          let t = this.chart, e = this.label, i = this.shared ? t.hoverPoints : t.hoverPoint;
          if (!e || !i) return;
          let s = { x: 0, y: 0, width: 0, height: 0 }, r = this.getAnchor(i), o = e.getBBox();
          r[0] += t.plotLeft - (e.translateX || 0), r[1] += t.plotTop - (e.translateY || 0), s.x = Math.min(0, r[0]), s.y = Math.min(0, r[1]), s.width = r[0] < 0 ? Math.max(Math.abs(r[0]), o.width - r[0]) : Math.max(Math.abs(r[0]), o.width), s.height = r[1] < 0 ? Math.max(Math.abs(r[1]), o.height - Math.abs(r[1])) : Math.max(Math.abs(r[1]), o.height), this.tracker ? this.tracker.attr(s) : (this.tracker = e.renderer.rect(s).addClass("highcharts-tracker").add(e), t.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
        }
        styledModeFormat(t) {
          return t.replace('style="font-size: 0.8em"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"');
        }
        headerFooterFormatter(t, e) {
          let i = t.series, s = i.tooltipOptions, r = i.xAxis, o = r?.dateTime, a = { isFooter: e, point: t }, l = s.xDateFormat || "", c = s[e ? "footerFormat" : "headerFormat"];
          return Ws(this, "headerFormatter", a, function(f) {
            if (o && !l && ga(t.key) && (l = o.getXDateFormat(t.key, s.dateTimeLabelFormats)), o && l) {
              if (Me(l)) {
                let d = l;
                _n[0] = (m) => i.chart.time.dateFormat(d, m), l = "%0";
              }
              (t.tooltipDateKeys || ["key"]).forEach((d) => {
                c = c.replace(RegExp("point\\." + d + "([ \\)}])"), `(point.${d}:${l})$1`);
              });
            }
            i.chart.styledMode && (c = this.styledModeFormat(c)), f.text = pa(c, t, this.chart);
          }), a.text || "";
        }
        update(t) {
          this.destroy(), this.init(this.chart, u(!0, this.options, t));
        }
        updatePosition(t) {
          let { chart: e, container: i, distance: s, options: r, pointer: o, renderer: a } = this, { height: l = 0, width: c = 0 } = this.getLabel(), { fixed: f, positioner: d } = r, { left: m, top: x, scaleX: y, scaleY: M } = o.getChartPosition(), w = (d || f && this.getFixedPosition || this.getPosition).call(this, c, l, t), v = X.doc, T = (t.plotX || 0) + e.plotLeft, S = (t.plotY || 0) + e.plotTop, O;
          if (a && i) {
            if (d || f) {
              let { scrollLeft: L = 0, scrollTop: D = 0 } = e.scrollablePlotArea?.scrollingContainer || {};
              w.x += L + m - s, w.y += D + x - s;
            }
            O = (r.borderWidth || 0) + 2 * s + 2, a.setSize(zi(c + O, 0, v.documentElement.clientWidth) - 1, l + O, !1), (y !== 1 || M !== 1) && (ci(i, { transform: `scale(${y}, ${M})` }), T *= y, S *= M), T += m - w.x, S += x - w.y;
          }
          this.move(Math.round(w.x), Math.round(w.y || 0), T, S);
        }
      }
      (function(h) {
        h.compose = function(t) {
          p(Hs, "Core.Tooltip") && Qn(t, "afterInit", function() {
            let e = this.chart;
            e.options.tooltip && (e.tooltip = new h(e, e.options.tooltip, this));
          });
        };
      })(C || (C = {}));
      let k = C, { animObject: A } = $t, { defaultOptions: E } = fe, { format: P } = he, { addEvent: B, crisp: z, erase: R, extend: F, fireEvent: G, getNestedProperty: q, isArray: xt, isFunction: dt, isNumber: ht, isObject: ut, merge: st, pick: rt, syncTimeout: wt, removeEvent: Mt, uniqueKey: Qt } = J;
      class Wt {
        animateBeforeDestroy() {
          let t = this, e = { x: t.startXPos, opacity: 0 }, i = t.getGraphicalProps();
          i.singular.forEach(function(s) {
            t[s] = t[s].animate(s === "dataLabel" ? { x: t[s].startXPos, y: t[s].startYPos, opacity: 0 } : e);
          }), i.plural.forEach(function(s) {
            t[s].forEach(function(r) {
              r.element && r.animate(F({ x: t.startXPos }, r.startYPos ? { x: r.startXPos, y: r.startYPos } : {}));
            });
          });
        }
        applyOptions(t, e) {
          let i = this.series, s = i.options.pointValKey || i.pointValKey;
          return F(this, t = Wt.prototype.optionsToObject.call(this, t)), this.options = this.options ? F(this.options, t) : t, t.group && delete this.group, t.dataLabels && delete this.dataLabels, s && (this.y = Wt.prototype.getNestedProperty.call(this, s)), this.selected && (this.state = "select"), "name" in this && e === void 0 && i.xAxis && i.xAxis.hasNames && (this.x = i.xAxis.nameToX(this)), this.x === void 0 && i ? this.x = e ?? i.autoIncrement() : ht(t.x) && i.options.relativeXValue ? this.x = i.autoIncrement(t.x) : typeof this.x == "string" && (e ?? (e = i.chart.time.parse(this.x)), ht(e) && (this.x = e)), this.isNull = this.isValid && !this.isValid(), this.formatPrefix = this.isNull ? "null" : "point", this;
        }
        destroy() {
          if (!this.destroyed) {
            let t = this, e = t.series, i = e.chart, s = e.options.dataSorting, r = i.hoverPoints, o = A(t.series.chart.renderer.globalAnimation), a = () => {
              for (let l in (t.graphic || t.graphics || t.dataLabel || t.dataLabels) && (Mt(t), t.destroyElements()), t) delete t[l];
            };
            t.legendItem && i.legend.destroyItem(t), r && (t.setState(), R(r, t), r.length || (i.hoverPoints = null)), t === i.hoverPoint && t.onMouseOut(), s?.enabled ? (this.animateBeforeDestroy(), wt(a, o.duration)) : a(), i.pointCount--;
          }
          this.destroyed = !0;
        }
        destroyElements(t) {
          let e = this, i = e.getGraphicalProps(t);
          i.singular.forEach(function(s) {
            e[s] = e[s].destroy();
          }), i.plural.forEach(function(s) {
            e[s].forEach(function(r) {
              r?.element && r.destroy();
            }), delete e[s];
          });
        }
        firePointEvent(t, e, i) {
          let s = this, r = this.series.options;
          s.manageEvent(t), t === "click" && r.allowPointSelect && (i = function(o) {
            !s.destroyed && s.select && s.select(null, o.ctrlKey || o.metaKey || o.shiftKey);
          }), G(s, t, e, i);
        }
        getClassName() {
          return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (this.colorIndex !== void 0 ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone?.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
        }
        getGraphicalProps(t) {
          let e, i, s = this, r = [], o = { singular: [], plural: [] };
          for ((t = t || { graphic: 1, dataLabel: 1 }).graphic && r.push("graphic", "connector"), t.dataLabel && r.push("dataLabel", "dataLabelPath", "dataLabelUpper"), i = r.length; i--; ) s[e = r[i]] && o.singular.push(e);
          return ["graphic", "dataLabel"].forEach(function(a) {
            let l = a + "s";
            t[a] && s[l] && o.plural.push(l);
          }), o;
        }
        getNestedProperty(t) {
          if (t) return t.indexOf("custom.") === 0 ? q(t, this.options) : this[t];
        }
        getZone() {
          let t = this.series, e = t.zones, i = t.zoneAxis || "y", s, r = 0;
          for (s = e[0]; this[i] >= s.value; ) s = e[++r];
          return this.nonZonedColor || (this.nonZonedColor = this.color), s?.color && !this.options.color ? this.color = s.color : this.color = this.nonZonedColor, s;
        }
        hasNewShapeType() {
          return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
        }
        constructor(t, e, i) {
          this.formatPrefix = "point", this.visible = !0, this.point = this, this.series = t, this.applyOptions(e, i), this.id ?? (this.id = Qt()), this.resolveColor(), this.dataLabelOnNull ?? (this.dataLabelOnNull = t.options.nullInteraction), t.chart.pointCount++, G(this, "afterInit");
        }
        isValid() {
          return (ht(this.x) || this.x instanceof Date) && ht(this.y);
        }
        optionsToObject(t) {
          let e = this.series, i = e.options.keys, s = i || e.pointArrayMap || ["y"], r = s.length, o = {}, a, l = 0, c = 0;
          if (ht(t) || t === null) o[s[0]] = t;
          else if (xt(t)) for (!i && t.length > r && ((a = typeof t[0]) == "string" ? e.xAxis?.dateTime ? o.x = e.chart.time.parse(t[0]) : o.name = t[0] : a === "number" && (o.x = t[0]), l++); c < r; ) i && t[l] === void 0 || (s[c].indexOf(".") > 0 ? Wt.prototype.setNestedProperty(o, t[l], s[c]) : o[s[c]] = t[l]), l++, c++;
          else typeof t == "object" && (o = t, t.dataLabels && (e.hasDataLabels = () => !0), t.marker && (e._hasPointMarkers = !0));
          return o;
        }
        pos(t, e = this.plotY) {
          if (!this.destroyed) {
            let { plotX: i, series: s } = this, { chart: r, xAxis: o, yAxis: a } = s, l = 0, c = 0;
            if (ht(i) && ht(e)) return t && (l = o ? o.pos : r.plotLeft, c = a ? a.pos : r.plotTop), r.inverted && o && a ? [a.len - e + c, o.len - i + l] : [i + l, e + c];
          }
        }
        resolveColor() {
          let t = this.series, e = t.chart.options.chart, i = t.chart.styledMode, s, r, o = e.colorCount, a;
          delete this.nonZonedColor, t.options.colorByPoint ? (i || (s = (r = t.options.colors || t.chart.options.colors)[t.colorCounter], o = r.length), a = t.colorCounter, t.colorCounter++, t.colorCounter === o && (t.colorCounter = 0)) : (i || (s = t.color), a = t.colorIndex), this.colorIndex = rt(this.options.colorIndex, a), this.color = rt(this.options.color, s);
        }
        setNestedProperty(t, e, i) {
          return i.split(".").reduce(function(s, r, o, a) {
            let l = a.length - 1 === o;
            return s[r] = l ? e : ut(s[r], !0) ? s[r] : {}, s[r];
          }, t), t;
        }
        shouldDraw() {
          return !this.isNull;
        }
        tooltipFormatter(t) {
          let { chart: e, pointArrayMap: i = ["y"], tooltipOptions: s } = this.series, { valueDecimals: r = "", valuePrefix: o = "", valueSuffix: a = "" } = s;
          return e.styledMode && (t = e.tooltip?.styledModeFormat(t) || t), i.forEach((l) => {
            l = "{point." + l, (o || a) && (t = t.replace(RegExp(l + "}", "g"), o + l + "}" + a)), t = t.replace(RegExp(l + "}", "g"), l + ":,." + r + "f}");
          }), P(t, this, e);
        }
        update(t, e, i, s) {
          let r, o = this, a = o.series, l = o.graphic, c = a.chart, f = a.options;
          function d() {
            o.applyOptions(t);
            let m = l && o.hasMockGraphic, x = o.y === null ? !m : m;
            l && x && (o.graphic = l.destroy(), delete o.hasMockGraphic), ut(t, !0) && (l?.element && t && t.marker && t.marker.symbol !== void 0 && (o.graphic = l.destroy()), t?.dataLabels && o.dataLabel && (o.dataLabel = o.dataLabel.destroy())), r = o.index;
            let y = {};
            for (let M of a.dataColumnKeys()) y[M] = o[M];
            a.dataTable.setRow(y, r), f.data[r] = ut(f.data[r], !0) || ut(t, !0) ? o.options : rt(t, f.data[r]), a.isDirty = a.isDirtyData = !0, !a.fixedBox && a.hasCartesianSeries && (c.isDirtyBox = !0), f.legendType === "point" && (c.isDirtyLegend = !0), e && c.redraw(i);
          }
          e = rt(e, !0), s === !1 ? d() : o.firePointEvent("update", { options: t }, d);
        }
        remove(t, e) {
          this.series.removePoint(this.series.data.indexOf(this), t, e);
        }
        select(t, e) {
          let i = this, s = i.series, r = s.chart;
          t = rt(t, !i.selected), this.selectedStaging = t, i.firePointEvent(t ? "select" : "unselect", { accumulate: e }, function() {
            i.selected = i.options.selected = t, s.options.data[s.data.indexOf(i)] = i.options, i.setState(t && "select"), e || r.getSelectedPoints().forEach(function(o) {
              let a = o.series;
              o.selected && o !== i && (o.selected = o.options.selected = !1, a.options.data[a.data.indexOf(o)] = o.options, o.setState(r.hoverPoints && a.options.inactiveOtherPoints ? "inactive" : ""), o.firePointEvent("unselect"));
            });
          }), delete this.selectedStaging;
        }
        onMouseOver(t) {
          let { inverted: e, pointer: i } = this.series.chart;
          i && (t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e), i.runPointActions(t, this));
        }
        onMouseOut() {
          let t = this.series.chart;
          this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (t.hoverPoints || []).forEach(function(e) {
            e.setState();
          }), t.hoverPoints = t.hoverPoint = null;
        }
        manageEvent(t) {
          let e = st(this.series.options.point, this.options), i = e.events?.[t];
          dt(i) && (!this.hcEvents?.[t] || this.hcEvents?.[t]?.map((s) => s.fn).indexOf(i) === -1) ? (this.importedUserEvent?.(), this.importedUserEvent = B(this, t, i), this.hcEvents && (this.hcEvents[t].userEvent = !0)) : this.importedUserEvent && !i && this.hcEvents?.[t] && this.hcEvents?.[t].userEvent && (Mt(this, t), delete this.hcEvents[t], Object.keys(this.hcEvents) || delete this.importedUserEvent);
        }
        setState(t, e) {
          let i = this.series, s = this.state, r = i.options.states[t || "normal"] || {}, o = E.plotOptions[i.type].marker && i.options.marker, a = o && o.enabled === !1, l = o?.states?.[t || "normal"] || {}, c = l.enabled === !1, f = this.marker || {}, d = i.chart, m = o && i.markerAttribs, x = i.halo, y, M, w, v = i.stateMarkerGraphic, T;
          if ((t = t || "") === this.state && !e || this.selected && t !== "select" || r.enabled === !1 || t && (c || a && l.enabled === !1) || t && f.states && f.states[t] && f.states[t].enabled === !1) return;
          if (this.state = t, m && (y = i.markerAttribs(this, t)), this.graphic && !this.hasMockGraphic) {
            if (s && this.graphic.removeClass("highcharts-point-" + s), t && this.graphic.addClass("highcharts-point-" + t), !d.styledMode) {
              M = i.pointAttribs(this, t), w = rt(d.options.chart.animation, r.animation);
              let D = M.opacity;
              i.options.inactiveOtherPoints && ht(D) && (this.dataLabels || []).forEach(function(N) {
                N && !N.hasClass("highcharts-data-label-hidden") && (N.animate({ opacity: D }, w), N.connector && N.connector.animate({ opacity: D }, w));
              }), this.graphic.animate(M, w);
            }
            y && this.graphic.animate(y, rt(d.options.chart.animation, l.animation, o.animation)), v && v.hide();
          } else t && l && (T = f.symbol || i.symbol, v && v.currentSymbol !== T && (v = v.destroy()), y && (v ? v[e ? "animate" : "attr"]({ x: y.x, y: y.y }) : T && (i.stateMarkerGraphic = v = d.renderer.symbol(T, y.x, y.y, y.width, y.height, st(o, l)).add(i.markerGroup), v.currentSymbol = T)), !d.styledMode && v && this.state !== "inactive" && v.attr(i.pointAttribs(this, t))), v && (v[t && this.isInside ? "show" : "hide"](), v.element.point = this, v.addClass(this.getClassName(), !0));
          let S = r.halo, O = this.graphic || v, L = O?.visibility || "inherit";
          S?.size && O && L !== "hidden" && !this.isCluster ? (x || (i.halo = x = d.renderer.path().add(O.parentGroup)), x.show()[e ? "animate" : "attr"]({ d: this.haloPath(S.size) }), x.attr({ class: "highcharts-halo highcharts-color-" + rt(this.colorIndex, i.colorIndex) + (this.className ? " " + this.className : ""), visibility: L, zIndex: -1 }), x.point = this, d.styledMode || x.attr(F({ fill: this.color || i.color, "fill-opacity": S.opacity }, Bt.filterUserAttributes(S.attributes || {})))) : x?.point?.haloPath && !x.point.destroyed && x.animate({ d: x.point.haloPath(0) }, null, x.hide), G(this, "afterSetState", { state: t });
        }
        haloPath(t) {
          let e = this.pos();
          return e ? this.series.chart.renderer.symbols.circle(z(e[0], 1) - t, e[1] - t, 2 * t, 2 * t) : [];
        }
      }
      let Vt = Wt, { parse: Ke } = Tt, { charts: Xs, composed: rc, isTouchDevice: oc } = X, { addEvent: He, attr: ac, css: el, extend: il, find: Fl, fireEvent: Fi, isNumber: fa, isObject: ma, objectEach: nc, offset: lc, pick: di, pushUnique: hc, splat: Hl } = J;
      class ie {
        applyInactiveState(t = []) {
          let e = [];
          for (let i of (t.forEach((s) => {
            let r = s.series;
            e.push(r), r.linkedParent && e.push(r.linkedParent), r.linkedSeries && e.push.apply(e, r.linkedSeries), r.navigatorSeries && e.push(r.navigatorSeries), r.boosted && r.markerGroup && e.push.apply(e, this.chart.series.filter((o) => o.markerGroup === r.markerGroup));
          }), this.chart.series)) {
            let s = i.options;
            s.states?.inactive?.enabled !== !1 && (e.indexOf(i) === -1 ? i.setState("inactive", !0) : s.inactiveOtherPoints && i.setAllPointsToState("inactive"));
          }
        }
        destroy() {
          let t = this;
          this.eventsToUnbind.forEach((e) => e()), this.eventsToUnbind = [], !X.chartCount && (ie.unbindDocumentMouseUp.forEach((e) => e.unbind()), ie.unbindDocumentMouseUp.length = 0, ie.unbindDocumentTouchEnd && (ie.unbindDocumentTouchEnd = ie.unbindDocumentTouchEnd())), clearInterval(t.tooltipTimeout), nc(t, function(e, i) {
            t[i] = void 0;
          });
        }
        getSelectionMarkerAttrs(t, e) {
          let i = { args: { chartX: t, chartY: e }, attrs: {}, shapeType: "rect" };
          return Fi(this, "getSelectionMarkerAttrs", i, (s) => {
            let r, { chart: o, zoomHor: a, zoomVert: l } = this, { mouseDownX: c = 0, mouseDownY: f = 0 } = o, d = s.attrs;
            d.x = o.plotLeft, d.y = o.plotTop, d.width = a ? 1 : o.plotWidth, d.height = l ? 1 : o.plotHeight, a && (d.width = Math.max(1, Math.abs(r = t - c)), d.x = (r > 0 ? 0 : r) + c), l && (d.height = Math.max(1, Math.abs(r = e - f)), d.y = (r > 0 ? 0 : r) + f);
          }), i;
        }
        drag(t) {
          let { chart: e } = this, { mouseDownX: i = 0, mouseDownY: s = 0 } = e, { panning: r, panKey: o, selectionMarkerFill: a } = e.options.chart, l = e.plotLeft, c = e.plotTop, f = e.plotWidth, d = e.plotHeight, m = ma(r) ? r.enabled : r, x = o && t[`${o}Key`], y = t.chartX, M = t.chartY, w, v = this.selectionMarker;
          if ((!v || !v.touch) && (y < l ? y = l : y > l + f && (y = l + f), M < c ? M = c : M > c + d && (M = c + d), this.hasDragged = Math.sqrt(Math.pow(i - y, 2) + Math.pow(s - M, 2)), this.hasDragged > 10)) {
            w = e.isInsidePlot(i - l, s - c, { visiblePlotOnly: !0 });
            let { shapeType: T, attrs: S } = this.getSelectionMarkerAttrs(y, M);
            this.hasZoom && w && !x && !v && (this.selectionMarker = v = e.renderer[T](), v.attr({ class: "highcharts-selection-marker", zIndex: 7 }).add(), e.styledMode || v.attr({ fill: a || Ke("#334eff").setOpacity(0.25).get() })), v && v.attr(S), w && !v && m && e.pan(t, r);
          }
        }
        dragStart(t) {
          let e = this.chart;
          e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = t.chartX, e.mouseDownY = t.chartY;
        }
        getSelectionBox(t) {
          let e = { args: { marker: t }, result: t.getBBox() };
          return Fi(this, "getSelectionBox", e), e.result;
        }
        drop(t) {
          let e, { chart: i, selectionMarker: s } = this;
          for (let r of i.axes) r.isPanning && (r.isPanning = !1, (r.options.startOnTick || r.options.endOnTick || r.series.some((o) => o.boosted)) && (r.forceRedraw = !0, r.setExtremes(r.userMin, r.userMax, !1), e = !0));
          if (e && i.redraw(), s && t) {
            if (this.hasDragged) {
              let r = this.getSelectionBox(s);
              i.transform({ axes: i.axes.filter((o) => o.zoomEnabled && (o.coll === "xAxis" && this.zoomX || o.coll === "yAxis" && this.zoomY)), selection: { originalEvent: t, xAxis: [], yAxis: [], ...r }, from: r });
            }
            fa(i.index) && (this.selectionMarker = s.destroy());
          }
          i && fa(i.index) && (el(i.container, { cursor: i._cursor }), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = !1, this.hasDragged = 0, this.pinchDown = [], this.hasPinchMoved = !1);
        }
        findNearestKDPoint(t, e, i) {
          let s;
          return t.forEach(function(r) {
            let o = !(r.noSharedTooltip && e) && 0 > r.options.findNearestPointBy.indexOf("y"), a = r.searchPoint(i, o);
            ma(a, !0) && a.series && (!ma(s, !0) || (function(l, c) {
              let f = l.distX - c.distX, d = l.dist - c.dist, m = c.series.group?.zIndex - l.series.group?.zIndex;
              return f !== 0 && e ? f : d !== 0 ? d : m !== 0 ? m : l.series.index > c.series.index ? -1 : 1;
            })(s, a) > 0) && (s = a);
          }), s;
        }
        getChartCoordinatesFromPoint(t, e) {
          let { xAxis: i, yAxis: s } = t.series, r = t.shapeArgs;
          if (i && s) {
            let o = t.clientX ?? t.plotX ?? 0, a = t.plotY || 0;
            return t.isNode && r && fa(r.x) && fa(r.y) && (o = r.x, a = r.y), e ? { chartX: s.len + s.pos - a, chartY: i.len + i.pos - o } : { chartX: o + i.pos, chartY: a + s.pos };
          }
          if (r?.x && r.y) return { chartX: r.x, chartY: r.y };
        }
        getChartPosition() {
          if (this.chartPosition) return this.chartPosition;
          let { container: t } = this.chart, e = lc(t);
          this.chartPosition = { left: e.left, top: e.top, scaleX: 1, scaleY: 1 };
          let { offsetHeight: i, offsetWidth: s } = t;
          return s > 2 && i > 2 && (this.chartPosition.scaleX = e.width / s, this.chartPosition.scaleY = e.height / i), this.chartPosition;
        }
        getCoordinates(t) {
          let e = { xAxis: [], yAxis: [] };
          for (let i of this.chart.axes) e[i.isXAxis ? "xAxis" : "yAxis"].push({ axis: i, value: i.toValue(t[i.horiz ? "chartX" : "chartY"]) });
          return e;
        }
        getHoverData(t, e, i, s, r, o) {
          let a = [], l = function(x) {
            return x.visible && !(!r && x.directTouch) && di(x.options.enableMouseTracking, !0);
          }, c = e, f, d = { chartX: o ? o.chartX : void 0, chartY: o ? o.chartY : void 0, shared: r };
          Fi(this, "beforeGetHoverData", d), f = c && !c.stickyTracking ? [c] : i.filter((x) => x.stickyTracking && (d.filter || l)(x));
          let m = s && t || !o ? t : this.findNearestKDPoint(f, r, o);
          return c = m?.series, m && (r && !c.noSharedTooltip ? (f = i.filter(function(x) {
            return d.filter ? d.filter(x) : l(x) && !x.noSharedTooltip;
          })).forEach(function(x) {
            let y = x.options?.nullInteraction, M = Fl(x.points, function(w) {
              return w.x === m.x && (!w.isNull || !!y);
            });
            ma(M) && (x.boosted && x.boost && (M = x.boost.getPoint(M)), a.push(M));
          }) : a.push(m)), Fi(this, "afterGetHoverData", d = { hoverPoint: m }), { hoverPoint: d.hoverPoint, hoverSeries: c, hoverPoints: a };
        }
        getPointFromEvent(t) {
          let e = t.target, i;
          for (; e && !i; ) i = e.point, e = e.parentNode;
          return i;
        }
        onTrackerMouseOut(t) {
          let e = this.chart, i = t.relatedTarget, s = e.hoverSeries;
          this.isDirectTouch = !1, !s || !i || s.stickyTracking || this.inClass(i, "highcharts-tooltip") || this.inClass(i, "highcharts-series-" + s.index) && this.inClass(i, "highcharts-tracker") || s.onMouseOut();
        }
        inClass(t, e) {
          let i = t, s;
          for (; i; ) {
            if (s = ac(i, "class")) {
              if (s.indexOf(e) !== -1) return !0;
              if (s.indexOf("highcharts-container") !== -1) return !1;
            }
            i = i.parentElement;
          }
        }
        constructor(t, e) {
          this.hasDragged = 0, this.pointerCaptureEventsToUnbind = [], this.eventsToUnbind = [], this.options = e, this.chart = t, this.runChartClick = !!e.chart.events?.click, this.pinchDown = [], this.setDOMEvents(), Fi(this, "afterInit");
        }
        normalize(t, e) {
          let i = t.touches, s = i ? i.length ? i.item(0) : di(i.changedTouches, t.changedTouches)[0] : t;
          e || (e = this.getChartPosition());
          let r = s.pageX - e.left, o = s.pageY - e.top;
          return il(t, { chartX: Math.round(r /= e.scaleX), chartY: Math.round(o /= e.scaleY) });
        }
        onContainerClick(t) {
          let e = this.chart, i = e.hoverPoint, s = this.normalize(t), r = e.plotLeft, o = e.plotTop;
          !e.cancelClick && (i && this.inClass(s.target, "highcharts-tracker") ? (Fi(i.series, "click", il(s, { point: i })), e.hoverPoint && i.firePointEvent("click", s)) : (il(s, this.getCoordinates(s)), e.isInsidePlot(s.chartX - r, s.chartY - o, { visiblePlotOnly: !0 }) && Fi(e, "click", s)));
        }
        onContainerMouseDown(t) {
          let e = (1 & (t.buttons || t.button)) == 1;
          t = this.normalize(t), X.isFirefox && t.button !== 0 && this.onContainerMouseMove(t), (t.button === void 0 || e) && (this.zoomOption(t), e && t.preventDefault?.(), this.dragStart(t));
        }
        onContainerMouseLeave(t) {
          let { pointer: e } = Xs[di(ie.hoverChartIndex, -1)] || {};
          t = this.normalize(t), this.onContainerMouseMove(t), e && !this.inClass(t.relatedTarget, "highcharts-tooltip") && (e.reset(), e.chartPosition = void 0);
        }
        onContainerMouseEnter() {
          delete this.chartPosition;
        }
        onContainerMouseMove(t) {
          let e = this.chart, i = e.tooltip, s = this.normalize(t);
          this.setHoverChartIndex(t), (e.mouseIsDown === "mousedown" || this.touchSelect(s)) && this.drag(s), !e.exporting?.openMenu && (this.inClass(s.target, "highcharts-tracker") || e.isInsidePlot(s.chartX - e.plotLeft, s.chartY - e.plotTop, { visiblePlotOnly: !0 })) && !i?.shouldStickOnContact(s) && (this.inClass(s.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(s));
        }
        onDocumentTouchEnd(t) {
          this.onDocumentMouseUp(t);
        }
        onContainerTouchMove(t) {
          this.touchSelect(t) ? this.onContainerMouseMove(t) : this.touch(t);
        }
        onContainerTouchStart(t) {
          this.touchSelect(t) ? this.onContainerMouseDown(t) : (this.zoomOption(t), this.touch(t, !0));
        }
        onDocumentMouseMove(t) {
          let e = this.chart, i = e.tooltip, s = this.chartPosition, r = this.normalize(t, s);
          !s || e.isInsidePlot(r.chartX - e.plotLeft, r.chartY - e.plotTop, { visiblePlotOnly: !0 }) || i?.shouldStickOnContact(r) || r.target !== e.container.ownerDocument && this.inClass(r.target, "highcharts-tracker") || this.reset();
        }
        onDocumentMouseUp(t) {
          t?.touches && this.hasPinchMoved && t?.preventDefault?.(), Xs[di(ie.hoverChartIndex, -1)]?.pointer?.drop(t);
        }
        pinch(t) {
          let e = this, { chart: i, hasZoom: s, lastTouches: r } = e, o = [].map.call(t.touches || [], (d) => e.normalize(d)), a = o.length, l = a === 1 && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick), c = i.tooltip, f = a === 1 && di(c?.options.followTouchMove, !0);
          a > 1 ? e.initiated = !0 : f && (e.initiated = !1), s && e.initiated && !l && t.cancelable !== !1 && t.preventDefault(), t.type === "touchstart" ? (e.pinchDown = o, e.res = !0, i.mouseDownX = t.chartX) : f ? this.runPointActions(e.normalize(t)) : r && (Fi(i, "touchpan", { originalEvent: t, touches: o }, () => {
            let d = (m) => {
              let x = m[0], y = m[1] || x;
              return { x: x.chartX, y: x.chartY, width: y.chartX - x.chartX, height: y.chartY - x.chartY };
            };
            i.transform({ axes: i.axes.filter((m) => m.zoomEnabled && (this.zoomHor && m.horiz || this.zoomVert && !m.horiz)), to: d(o), from: d(r), trigger: t.type });
          }), e.res && (e.res = !1, this.reset(!1, 0))), e.lastTouches = o;
        }
        reset(t, e) {
          let i = this.chart, s = i.hoverSeries, r = i.hoverPoint, o = i.hoverPoints, a = i.tooltip, l = a?.shared ? o : r;
          t && l && Hl(l).forEach(function(c) {
            c.series.isCartesian && c.plotX === void 0 && (t = !1);
          }), t ? a && l && Hl(l).length && (a.refresh(l), a.shared && o ? o.forEach(function(c) {
            c.setState(c.state, !0), c.series.isCartesian && (c.series.xAxis.crosshair && c.series.xAxis.drawCrosshair(null, c), c.series.yAxis.crosshair && c.series.yAxis.drawCrosshair(null, c));
          }) : r && (r.setState(r.state, !0), i.axes.forEach(function(c) {
            c.crosshair && r.series[c.coll] === c && c.drawCrosshair(null, r);
          }))) : (r && r.onMouseOut(), o && o.forEach(function(c) {
            c.setState();
          }), s && s.onMouseOut(), a && a.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), i.axes.forEach(function(c) {
            c.hideCrosshair();
          }), i.hoverPoints = i.hoverPoint = void 0);
        }
        runPointActions(t, e, i) {
          let s = this.chart, r = s.series, o = s.tooltip?.options.enabled ? s.tooltip : void 0, a = !!o && o.shared, l = e || s.hoverPoint, c = l?.series || s.hoverSeries, f = (!t || t.type !== "touchmove") && (!!e || c?.directTouch && this.isDirectTouch), d = this.getHoverData(l, c, r, f, a, t);
          l = d.hoverPoint, c = d.hoverSeries;
          let m = d.hoverPoints, x = c?.tooltipOptions.followPointer && !c.tooltipOptions.split, y = a && c && !c.noSharedTooltip;
          if (l && (i || l !== s.hoverPoint || o?.isHidden)) {
            if ((s.hoverPoints || []).forEach(function(M) {
              m.indexOf(M) === -1 && M.setState();
            }), s.hoverSeries !== c && c.onMouseOver(), this.applyInactiveState(m), (m || []).forEach(function(M) {
              M.setState("hover");
            }), s.hoverPoint && s.hoverPoint.firePointEvent("mouseOut"), !l.series) return;
            s.hoverPoints = m, s.hoverPoint = l, l.firePointEvent("mouseOver", void 0, () => {
              o && l && o.refresh(y ? m : l, t);
            });
          } else if (x && o && !o.isHidden) {
            let M = o.getAnchor([{}], t);
            s.isInsidePlot(M[0], M[1], { visiblePlotOnly: !0 }) && o.updatePosition({ plotX: M[0], plotY: M[1] });
          }
          this.unDocMouseMove || (this.unDocMouseMove = He(s.container.ownerDocument, "mousemove", (M) => Xs[ie.hoverChartIndex ?? -1]?.pointer?.onDocumentMouseMove(M)), this.eventsToUnbind.push(this.unDocMouseMove)), s.axes.forEach(function(M) {
            let w, v = M.crosshair?.snap ?? !0;
            v && ((w = s.hoverPoint) && w.series[M.coll] === M || (w = Fl(m, (T) => T.series?.[M.coll] === M))), w || !v ? M.drawCrosshair(t, w) : M.hideCrosshair();
          });
        }
        setDOMEvents() {
          let t = this.chart.container, e = t.ownerDocument;
          t.onmousedown = this.onContainerMouseDown.bind(this), t.onmousemove = this.onContainerMouseMove.bind(this), t.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(He(t, "mouseenter", this.onContainerMouseEnter.bind(this)), He(t, "mouseleave", this.onContainerMouseLeave.bind(this))), ie.unbindDocumentMouseUp.some((s) => s.doc === e) || ie.unbindDocumentMouseUp.push({ doc: e, unbind: He(e, "mouseup", this.onDocumentMouseUp.bind(this)) });
          let i = this.chart.renderTo.parentElement;
          for (; i && i.tagName !== "BODY"; ) this.eventsToUnbind.push(He(i, "scroll", () => {
            delete this.chartPosition;
          })), i = i.parentElement;
          this.eventsToUnbind.push(He(t, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 }), He(t, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })), ie.unbindDocumentTouchEnd || (ie.unbindDocumentTouchEnd = He(e, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 })), this.setPointerCapture(), He(this.chart, "redraw", this.setPointerCapture.bind(this));
        }
        setPointerCapture() {
          if (!oc) return;
          let t = this.pointerCaptureEventsToUnbind, e = this.chart, i = e.container, s = di(e.options.tooltip?.followTouchMove, !0) && e.series.some((r) => r.options.findNearestPointBy.indexOf("y") > -1);
          !this.hasPointerCapture && s ? (t.push(He(i, "pointerdown", (r) => {
            r.target?.hasPointerCapture(r.pointerId) && r.target?.releasePointerCapture(r.pointerId);
          }), He(i, "pointermove", (r) => {
            e.pointer?.getPointFromEvent(r)?.onMouseOver(r);
          })), e.styledMode || el(i, { "touch-action": "none" }), i.className += " highcharts-no-touch-action", this.hasPointerCapture = !0) : this.hasPointerCapture && !s && (t.forEach((r) => r()), t.length = 0, e.styledMode || el(i, { "touch-action": di(e.options.chart.style?.["touch-action"], "manipulation") }), i.className = i.className.replace(" highcharts-no-touch-action", ""), this.hasPointerCapture = !1);
        }
        setHoverChartIndex(t) {
          let e = this.chart, i = X.charts[di(ie.hoverChartIndex, -1)];
          if (i && i !== e) {
            let s = { relatedTarget: e.container };
            t && !t?.relatedTarget && Object.assign({}, t, s), i.pointer?.onContainerMouseLeave(t || s);
          }
          i?.mouseIsDown || (ie.hoverChartIndex = e.index);
        }
        touch(t, e) {
          let i, { chart: s, pinchDown: r = [] } = this;
          this.setHoverChartIndex(), (t = this.normalize(t)).touches.length === 1 ? s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop, { visiblePlotOnly: !0 }) && !s.exporting?.openMenu ? (e && this.runPointActions(t), t.type === "touchmove" && (this.hasPinchMoved = i = !!r[0] && Math.pow(r[0].chartX - t.chartX, 2) + Math.pow(r[0].chartY - t.chartY, 2) >= 16), di(i, !0) && this.pinch(t)) : e && this.reset() : t.touches.length === 2 && this.pinch(t);
        }
        touchSelect(t) {
          return !!(this.chart.zooming.singleTouch && t.touches && t.touches.length === 1);
        }
        zoomOption(t) {
          let e = this.chart, i = e.inverted, s = e.zooming.type || "", r, o;
          /touch/.test(t.type) && (s = di(e.zooming.pinchType, s)), this.zoomX = r = /x/.test(s), this.zoomY = o = /y/.test(s), this.zoomHor = r && !i || o && i, this.zoomVert = o && !i || r && i, this.hasZoom = r || o;
        }
      }
      ie.unbindDocumentMouseUp = [], (function(h) {
        h.compose = function(t) {
          hc(rc, "Core.Pointer") && He(t, "beforeRender", function() {
            this.pointer = new h(this, this.options);
          });
        };
      })(ie || (ie = {}));
      let Wl = ie;
      (function(h) {
        h.setLength = function(t, e, i) {
          return Array.isArray(t) ? (t.length = e, t) : t[i ? "subarray" : "slice"](0, e);
        }, h.splice = function(t, e, i, s, r = []) {
          if (Array.isArray(t)) return Array.isArray(r) || (r = Array.from(r)), { removed: t.splice(e, i, ...r), array: t };
          let o = Object.getPrototypeOf(t).constructor, a = t[s ? "subarray" : "slice"](e, e + i), l = new o(t.length - i + r.length);
          return l.set(t.subarray(0, e), 0), l.set(r, e), l.set(t.subarray(e + i), e + r.length), { removed: a, array: l };
        };
      })(ti || (ti = {}));
      let { setLength: cc, splice: Xl } = ti, { fireEvent: sl, objectEach: Ur, uniqueKey: Vr } = J, xa = class {
        constructor(h = {}) {
          this.autoId = !h.id, this.columns = {}, this.id = h.id || Vr(), this.modified = this, this.rowCount = 0, this.versionTag = Vr();
          let t = 0;
          Ur(h.columns || {}, (e, i) => {
            this.columns[i] = e.slice(), t = Math.max(t, e.length);
          }), this.applyRowCount(t);
        }
        applyRowCount(h) {
          this.rowCount = h, Ur(this.columns, (t, e) => {
            t.length !== h && (this.columns[e] = cc(t, h));
          });
        }
        deleteRows(h, t = 1) {
          if (t > 0 && h < this.rowCount) {
            let e = 0;
            Ur(this.columns, (i, s) => {
              this.columns[s] = Xl(i, h, t).array, e = i.length;
            }), this.rowCount = e;
          }
          sl(this, "afterDeleteRows", { rowIndex: h, rowCount: t }), this.versionTag = Vr();
        }
        getColumn(h, t) {
          return this.columns[h];
        }
        getColumns(h, t) {
          return (h || Object.keys(this.columns)).reduce((e, i) => (e[i] = this.columns[i], e), {});
        }
        getRow(h, t) {
          return (t || Object.keys(this.columns)).map((e) => this.columns[e]?.[h]);
        }
        setColumn(h, t = [], e = 0, i) {
          this.setColumns({ [h]: t }, e, i);
        }
        setColumns(h, t, e) {
          let i = this.rowCount;
          Ur(h, (s, r) => {
            this.columns[r] = s.slice(), i = s.length;
          }), this.applyRowCount(i), e?.silent || (sl(this, "afterSetColumns"), this.versionTag = Vr());
        }
        setRow(h, t = this.rowCount, e, i) {
          let { columns: s } = this, r = e ? this.rowCount + 1 : t + 1;
          Ur(h, (o, a) => {
            let l = s[a] || i?.addColumns !== !1 && Array(r);
            l && (e ? l = Xl(l, t, 0, !0, [o]).array : l[t] = o, s[a] = l);
          }), r > this.rowCount && this.applyRowCount(r), i?.silent || (sl(this, "afterSetRows"), this.versionTag = Vr());
        }
      }, { extend: dc, merge: pc, pick: Gl } = J;
      (function(h) {
        function t(e, i, s) {
          let r = this.legendItem = this.legendItem || {}, { chart: o, options: a } = this, { baseline: l = 0, symbolWidth: c, symbolHeight: f } = e, d = this.symbol || "circle", m = f / 2, x = o.renderer, y = r.group, M = l - Math.round((e.fontMetrics?.b || f) * (s ? 0.4 : 0.3)), w = {}, v, T = a.marker, S = 0;
          if (o.styledMode || (w["stroke-width"] = Math.min(a.lineWidth || 0, 24), a.dashStyle ? w.dashstyle = a.dashStyle : a.linecap !== "square" && (w["stroke-linecap"] = "round")), r.line = x.path().addClass("highcharts-graph").attr(w).add(y), s && (r.area = x.path().addClass("highcharts-area").add(y)), w["stroke-linecap"] && (S = Math.min(r.line.strokeWidth(), c) / 2), c) {
            let O = [["M", S, M], ["L", c - S, M]];
            r.line.attr({ d: O }), r.area?.attr({ d: [...O, ["L", c - S, l], ["L", S, l]] });
          }
          if (T && T.enabled !== !1 && c) {
            let O = Math.min(Gl(T.radius, m), m);
            d.indexOf("url") === 0 && (T = pc(T, { width: f, height: f }), O = 0), r.symbol = v = x.symbol(d, c / 2 - O, M - O, 2 * O, 2 * O, dc({ context: "legend" }, T)).addClass("highcharts-point").add(y), v.isMarker = !0;
          }
        }
        h.areaMarker = function(e, i) {
          t.call(this, e, i, !0);
        }, h.lineMarker = t, h.rectangle = function(e, i) {
          let s = i.legendItem || {}, r = e.options, o = e.symbolHeight, a = r.squareSymbol, l = a ? o : e.symbolWidth;
          s.symbol = this.chart.renderer.rect(a ? (e.symbolWidth - o) / 2 : 0, e.baseline - o + 1, l, o, Gl(e.options.symbolRadius, o / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(s.group);
        };
      })(We || (We = {}));
      let Yl = We, { defaultOptions: jl } = fe, { extend: uc, extendClass: gc, merge: fc } = J;
      (function(h) {
        function t(e, i) {
          let s = jl.plotOptions || {}, r = i.defaultOptions, o = i.prototype;
          return o.type = e, o.pointClass || (o.pointClass = Vt), !h.seriesTypes[e] && (r && (s[e] = r), h.seriesTypes[e] = i, !0);
        }
        h.seriesTypes = X.seriesTypes, h.registerSeriesType = t, h.seriesType = function(e, i, s, r, o) {
          let a = jl.plotOptions || {};
          if (i = i || "", a[e] = fc(a[i], s), delete h.seriesTypes[e], t(e, gc(h.seriesTypes[i] || Ce, r)), h.seriesTypes[e].prototype.type = e, o) {
            class l extends Vt {
            }
            uc(l.prototype, o), h.seriesTypes[e].prototype.pointClass = l;
          }
          return h.seriesTypes[e];
        };
      })(Te || (Te = {}));
      let qt = Te, { animObject: Ul, setAnimation: mc } = $t, { defaultOptions: ba } = fe, { registerEventOptions: xc } = Di, { svg: bc, win: yc } = X, { seriesTypes: Gs } = qt, { format: vc } = he, { arrayMax: rl, arrayMin: Vl, clamp: ql, correctFloat: Kl, crisp: kc, defined: te, destroyObjectProperties: wc, diffObjects: Mc, erase: $l, error: ya, extend: Ys, find: Cc, fireEvent: Gt, getClosestDistance: Ac, getNestedProperty: Zl, insertItem: _l, isArray: Jl, isNumber: se, isString: Tc, merge: qr, objectEach: ol, pick: Yt, removeEvent: Sc, syncTimeout: Ql } = J;
      class $e {
        constructor() {
          this.zoneAxis = "y";
        }
        init(t, e) {
          let i;
          Gt(this, "init", { options: e }), this.dataTable ?? (this.dataTable = new xa());
          let s = t.series;
          this.eventsToUnbind = [], this.chart = t, this.options = this.setOptions(e);
          let r = this.options, o = r.visible !== !1;
          this.linkedSeries = [], this.bindAxes(), Ys(this, { name: r.name, state: "", visible: o, selected: r.selected === !0 }), xc(this, r), (r.events?.click || r.point?.events?.click || r.allowPointSelect) && (t.runTrackerClick = !0), this.getColor(), this.getSymbol(), this.isCartesian && (t.hasCartesianSeries = !0), s.length && (i = s[s.length - 1]), this._i = Yt(i?._i, -1) + 1, this.opacity = this.options.opacity, t.orderItems("series", _l(this, s)), r.dataSorting?.enabled ? this.setDataSortingOptions() : this.points || this.data || this.setData(r.data, !1), Gt(this, "afterInit");
        }
        is(t) {
          return Gs[t] && this instanceof Gs[t];
        }
        bindAxes() {
          let t, e = this, i = e.options, s = e.chart;
          Gt(this, "bindAxes", null, function() {
            (e.axisTypes || []).forEach(function(r) {
              (s[r] || []).forEach(function(o) {
                t = o.options, (Yt(i[r], 0) === o.index || i[r] !== void 0 && i[r] === t.id) && (_l(e, o.series), e[r] = o, o.isDirty = !0);
              }), e[r] || e.optionalAxis === r || ya(18, !0, s);
            });
          }), Gt(this, "afterBindAxes");
        }
        hasData() {
          return this.visible && this.dataMax !== void 0 && this.dataMin !== void 0 || this.visible && this.dataTable.rowCount > 0;
        }
        hasMarkerChanged(t, e) {
          let i = t.marker, s = e.marker || {};
          return i && (s.enabled && !i.enabled || s.symbol !== i.symbol || s.height !== i.height || s.width !== i.width);
        }
        autoIncrement(t) {
          let e, i = this.options, { pointIntervalUnit: s, relativeXValue: r } = this.options, o = this.chart.time, a = this.xIncrement ?? o.parse(i.pointStart) ?? 0;
          if (this.pointInterval = e = Yt(this.pointInterval, i.pointInterval, 1), r && se(t) && (e *= t), s) {
            let l = o.toParts(a);
            s === "day" ? l[2] += e : s === "month" ? l[1] += e : s === "year" && (l[0] += e), e = o.makeTime.apply(o, l) - a;
          }
          return r && se(t) ? a + e : (this.xIncrement = a + e, a);
        }
        setDataSortingOptions() {
          let t = this.options;
          Ys(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }), te(t.pointRange) || (t.pointRange = 1);
        }
        setOptions(t) {
          let e, i = this.chart, s = i.options.plotOptions, r = i.userOptions || {}, o = qr(t), a = i.styledMode, l = { plotOptions: s, userOptions: o };
          Gt(this, "setOptions", l);
          let c = l.plotOptions[this.type], f = r.plotOptions || {}, d = f.series || {}, m = ba.plotOptions[this.type] || {}, x = f[this.type] || {};
          c.dataLabels = this.mergeArrays(m.dataLabels, c.dataLabels), this.userOptions = l.userOptions;
          let y = qr(c, s.series, x, o);
          this.tooltipOptions = qr(ba.tooltip, ba.plotOptions.series?.tooltip, m?.tooltip, i.userOptions.tooltip, f.series?.tooltip, x.tooltip, o.tooltip), this.stickyTracking = Yt(o.stickyTracking, x.stickyTracking, d.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || y.stickyTracking), c.marker === null && delete y.marker, this.zoneAxis = y.zoneAxis || "y";
          let M = this.zones = (y.zones || []).map((w) => ({ ...w }));
          return (y.negativeColor || y.negativeFillColor) && !y.zones && (e = { value: y[this.zoneAxis + "Threshold"] || y.threshold || 0, className: "highcharts-negative" }, a || (e.color = y.negativeColor, e.fillColor = y.negativeFillColor), M.push(e)), M.length && te(M[M.length - 1].value) && M.push(a ? {} : { color: this.color, fillColor: this.fillColor }), Gt(this, "afterSetOptions", { options: y }), y;
        }
        getName() {
          return this.options.name ?? vc(this.chart.options.lang.seriesName, this, this.chart);
        }
        getCyclic(t, e, i) {
          let s, r, o = this.chart, a = `${t}Index`, l = `${t}Counter`, c = i?.length || o.options.chart.colorCount;
          !e && (te(r = Yt(t === "color" ? this.options.colorIndex : void 0, this[a])) ? s = r : (o.series.length || (o[l] = 0), s = o[l] % c, o[l] += 1), i && (e = i[s])), s !== void 0 && (this[a] = s), this[t] = e;
        }
        getColor() {
          this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || ba.plotOptions[this.type].color, this.chart.options.colors);
        }
        getPointsCollection() {
          return (this.hasGroupedData ? this.points : this.data) || [];
        }
        getSymbol() {
          let t = this.options.marker;
          this.getCyclic("symbol", t.symbol, this.chart.options.symbols);
        }
        getColumn(t, e) {
          return (e ? this.dataTable.modified : this.dataTable).getColumn(t, !0) || [];
        }
        findPointIndex(t, e) {
          let i, s, r, { id: o, x: a } = t, l = this.points, c = this.options.dataSorting, f = this.cropStart || 0;
          if (o) {
            let d = this.chart.get(o);
            d instanceof Vt && (i = d);
          } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
            let d = (m) => !m.touched && m.index === t.index;
            if (c?.matchByName ? d = (m) => !m.touched && m.name === t.name : this.options.relativeXValue && (d = (m) => !m.touched && m.options.x === t.x), !(i = Cc(l, d))) return;
          }
          return i && (r = i?.index) !== void 0 && (s = !0), r === void 0 && se(a) && (r = this.getColumn("x").indexOf(a, e)), r !== -1 && r !== void 0 && this.cropped && (r = r >= f ? r - f : r), !s && se(r) && l[r]?.touched && (r = void 0), r;
        }
        updateData(t, e) {
          let { options: i, requireSorting: s } = this, r = i.dataSorting, o = this.points, a = [], l = t.length === o.length, c, f, d, m, x = !0;
          if (this.xIncrement = null, t.forEach((M, w) => {
            let v, T = te(M) && this.pointClass.prototype.optionsToObject.call({ series: this }, M) || {}, { id: S, x: O } = T;
            S || se(O) ? ((v = this.findPointIndex(T, m)) === -1 || v === void 0 ? a.push(M) : o[v] && M !== i.data?.[v] ? (o[v].update(M, !1, void 0, !1), o[v].touched = !0, s && (m = v + 1)) : o[v] && (o[v].touched = !0), (!l || w !== v || r?.enabled || this.hasDerivedData) && (c = !0)) : a.push(M);
          }, this), c) for (f = o.length; f--; ) (d = o[f]) && !d.touched && d.remove?.(!1, e);
          else l && !r?.enabled ? (t.forEach((M, w) => {
            M === o[w].y || o[w].destroyed || o[w].update(M, !1, void 0, !1);
          }), a.length = 0) : x = !1;
          if (o.forEach((M) => {
            M && (M.touched = !1);
          }), !x) return !1;
          a.forEach((M) => {
            this.addPoint(M, !1, void 0, void 0, !1);
          }, this);
          let y = this.getColumn("x");
          return this.xIncrement === null && y.length && (this.xIncrement = rl(y), this.autoIncrement()), !0;
        }
        dataColumnKeys() {
          return ["x", ...this.pointArrayMap || ["y"]];
        }
        setData(t, e = !0, i, s) {
          let r = this.points, o = r?.length || 0, a = this.options, l = this.chart, c = a.dataSorting, f = this.xAxis, d = a.turboThreshold, m = this.dataTable, x = this.dataColumnKeys(), y = this.pointValKey || "y", M = (this.pointArrayMap || []).length, w = a.keys, v, T, S = 0, O = 1, L;
          l.options.chart.allowMutatingData || (a.data && delete this.options.data, this.userOptions.data && delete this.userOptions.data, L = qr(!0, t));
          let D = (t = L || t || []).length;
          if (c?.enabled && (t = this.sortData(t)), l.options.chart.allowMutatingData && s !== !1 && D && o && !this.cropped && !this.hasGroupedData && this.visible && !this.boosted && (T = this.updateData(t, i)), !T) {
            this.xIncrement = null, this.colorCounter = 0;
            let N = d && !a.relativeXValue && D > d;
            if (N) {
              let I = this.getFirstValidPoint(t), W = this.getFirstValidPoint(t, D - 1, -1), j = (H) => !!(Jl(H) && (w || se(H[0])));
              if (se(I) && se(W)) {
                let H = [], K = [];
                for (let Q of t) H.push(this.autoIncrement()), K.push(Q);
                m.setColumns({ x: H, [y]: K });
              } else if (j(I) && j(W)) if (M) {
                let H = +(I.length === M), K = Array(x.length).fill(0).map(() => []);
                for (let Q of t) {
                  H && K[0].push(this.autoIncrement());
                  for (let et = H; et <= M; et++) K[et]?.push(Q[et - H]);
                }
                m.setColumns(x.reduce((Q, et, V) => (Q[et] = K[V], Q), {}));
              } else {
                w && (S = w.indexOf("x"), O = w.indexOf("y"), S = S >= 0 ? S : 0, O = O >= 0 ? O : 1), I.length === 1 && (O = 0);
                let H = [], K = [];
                if (S === O) for (let Q of t) H.push(this.autoIncrement()), K.push(Q[O]);
                else for (let Q of t) H.push(Q[S]), K.push(Q[O]);
                m.setColumns({ x: H, [y]: K });
              }
              else N = !1;
            }
            if (!N) {
              let I = x.reduce((W, j) => (W[j] = [], W), {});
              for (v = 0; v < D; v++) {
                let W = this.pointClass.prototype.applyOptions.apply({ series: this }, [t[v]]);
                for (let j of x) I[j][v] = W[j];
              }
              m.setColumns(I);
            }
            for (Tc(this.getColumn("y")[0]) && ya(14, !0, l), this.data = [], this.options.data = this.userOptions.data = t, v = o; v--; ) r[v]?.destroy();
            f && (f.minRange = f.userMinRange), this.isDirty = l.isDirtyBox = !0, this.isDirtyData = !!r, i = !1;
          }
          a.legendType === "point" && (this.processData(), this.generatePoints()), e && l.redraw(i);
        }
        sortData(t) {
          let e = this, i = e.options.dataSorting.sortKey || "y", s = function(r, o) {
            return te(o) && r.pointClass.prototype.optionsToObject.call({ series: r }, o) || {};
          };
          return t.forEach(function(r, o) {
            t[o] = s(e, r), t[o].index = o;
          }, this), t.concat().sort((r, o) => {
            let a = Zl(i, r), l = Zl(i, o);
            return l < a ? -1 : +(l > a);
          }).forEach(function(r, o) {
            r.x = o;
          }, this), e.linkedSeries && e.linkedSeries.forEach(function(r) {
            let o = r.options, a = o.data;
            !o.dataSorting?.enabled && a && (a.forEach(function(l, c) {
              a[c] = s(r, l), t[c] && (a[c].x = t[c].x, a[c].index = c);
            }), r.setData(a, !1));
          }), t;
        }
        getProcessedData(t) {
          let e = this, { dataTable: i, isCartesian: s, options: r, xAxis: o } = e, a = r.cropThreshold, l = t || e.getExtremesFromAll, c = o?.logarithmic, f = i.rowCount, d, m, x = 0, y, M, w, v = e.getColumn("x"), T = i, S = !1;
          return o && (M = (y = o.getExtremes()).min, w = y.max, S = !!(o.categories && !o.names.length), s && e.sorted && !l && (!a || f > a || e.forceCrop) && (v[f - 1] < M || v[0] > w ? T = new xa() : e.getColumn(e.pointValKey || "y").length && (v[0] < M || v[f - 1] > w) && (T = (d = this.cropData(i, M, w)).modified, x = d.start, m = !0))), v = T.getColumn("x") || [], { modified: T, cropped: m, cropStart: x, closestPointRange: Ac([c ? v.map(c.log2lin) : v], () => e.requireSorting && !S && ya(15, !1, e.chart)) };
        }
        processData(t) {
          let e = this.xAxis, i = this.dataTable;
          if (this.isCartesian && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !t) return !1;
          let s = this.getProcessedData();
          i.modified = s.modified, this.cropped = s.cropped, this.cropStart = s.cropStart, this.closestPointRange = this.basePointRange = s.closestPointRange, Gt(this, "afterProcessData");
        }
        cropData(t, e, i) {
          let s = t.getColumn("x", !0) || [], r = s.length, o = {}, a, l, c = 0, f = r;
          for (a = 0; a < r; a++) if (s[a] >= e) {
            c = Math.max(0, a - 1);
            break;
          }
          for (l = a; l < r; l++) if (s[l] > i) {
            f = l + 1;
            break;
          }
          for (let d of this.dataColumnKeys()) {
            let m = t.getColumn(d, !0);
            m && (o[d] = m.slice(c, f));
          }
          return { modified: new xa({ columns: o }), start: c, end: f };
        }
        generatePoints() {
          let t = this.options, e = this.processedData || t.data, i = this.dataTable.modified, s = this.getColumn("x", !0), r = this.pointClass, o = i.rowCount, a = this.cropStart || 0, l = this.hasGroupedData, c = t.keys, f = [], d = t.dataGrouping?.groupAll ? a : 0, m = this.xAxis?.categories, x = this.pointArrayMap || ["y"], y = this.dataColumnKeys(), M, w, v, T, S = this.data, O;
          if (!S && !l) {
            let L = [];
            L.length = e?.length || 0, S = this.data = L;
          }
          for (c && l && (this.options.keys = !1), T = 0; T < o; T++) w = a + T, l ? ((v = new r(this, i.getRow(T, y) || [])).dataGroup = this.groupMap[d + T], v.dataGroup?.options && (v.options = v.dataGroup.options, Ys(v, v.dataGroup.options), delete v.dataLabels)) : (v = S[w], O = e ? e[w] : i.getRow(T, x), v || O === void 0 || (S[w] = v = new r(this, O, s[T]))), v && (v.index = l ? d + T : w, f[T] = v, v.category = m?.[v.x] ?? v.x, v.key = v.name ?? v.category);
          if (this.options.keys = c, S && (o !== (M = S.length) || l)) for (T = 0; T < M; T++) T !== a || l || (T += o), S[T] && (S[T].destroyElements(), S[T].plotX = void 0);
          this.data = S, this.points = f, Gt(this, "afterGeneratePoints");
        }
        getXExtremes(t) {
          return { min: Vl(t), max: rl(t) };
        }
        getExtremes(t, e) {
          let { xAxis: i, yAxis: s } = this, r = e || this.getExtremesFromAll || this.options.getExtremesFromAll, o = r && this.cropped ? this.dataTable : this.dataTable.modified, a = o.rowCount, l = t || this.stackedYData, c = l ? [l] : (this.keysAffectYAxis || this.pointArrayMap || ["y"])?.map((L) => o.getColumn(L, !0) || []) || [], f = this.getColumn("x", !0), d = [], m = this.requireSorting && !this.is("column") ? 1 : 0, x = !!s && s.positiveValuesOnly, y = r || this.cropped || !i, M, w, v, T = 0, S = 0;
          for (i && (T = (M = i.getExtremes()).min, S = M.max), v = 0; v < a; v++) if (w = f[v], y || (f[v + m] || w) >= T && (f[v - m] || w) <= S) for (let L of c) {
            let D = L[v];
            se(D) && (D > 0 || !x) && d.push(D);
          }
          let O = { activeYData: d, dataMin: Vl(d), dataMax: rl(d) };
          return Gt(this, "afterGetExtremes", { dataExtremes: O }), O;
        }
        applyExtremes() {
          let t = this.getExtremes();
          return this.dataMin = t.dataMin, this.dataMax = t.dataMax, t;
        }
        getFirstValidPoint(t, e = 0, i = 1) {
          let s = t.length, r = e;
          for (; r >= 0 && r < s; ) {
            if (te(t[r])) return t[r];
            r += i;
          }
        }
        translate() {
          this.generatePoints();
          let t = this.options, e = t.stacking, i = this.xAxis, s = this.enabledDataSorting, r = this.yAxis, o = this.points, a = o.length, l = this.pointPlacementToXValue(), c = !!l, f = t.threshold, d = t.startFromThreshold ? f : 0, m = t?.nullInteraction && r.len, x, y, M, w, v = Number.MAX_VALUE;
          function T(S) {
            return ql(S, -1e9, 1e9);
          }
          for (x = 0; x < a; x++) {
            let S, O = o[x], L = O.x, D, N, I = O.y, W = O.low, j = e && r.stacking?.stacks[(this.negStacks && I < (d ? 0 : f) ? "-" : "") + this.stackKey];
            O.plotX = se(y = i.translate(L, !1, !1, !1, !0, l)) ? Kl(T(y)) : void 0, e && this.visible && j && j[L] && (w = this.getStackIndicator(w, L, this.index), !O.isNull && w.key && (N = (D = j[L]).points[w.key]), D && Jl(N) && (W = N[0], I = N[1], W === d && w.key === j[L].base && (W = Yt(se(f) ? f : r.min)), r.positiveValuesOnly && te(W) && W <= 0 && (W = void 0), O.total = O.stackTotal = Yt(D.total), O.percentage = te(O.y) && D.total ? O.y / D.total * 100 : void 0, O.stackY = I, this.irregularWidths || D.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), O.yBottom = te(W) ? T(r.translate(W, !1, !0, !1, !0)) : void 0, this.dataModify && (I = this.dataModify.modifyValue(I, x)), se(I) && O.plotX !== void 0 ? S = se(S = r.translate(I, !1, !0, !1, !0)) ? T(S) : void 0 : !se(I) && m && (S = m), O.plotY = S, O.isInside = this.isPointInside(O), O.clientX = c ? Kl(i.translate(L, !1, !1, !1, !0, l)) : y, O.negative = (O.y || 0) < (f || 0), O.isNull || O.visible === !1 || (M !== void 0 && (v = Math.min(v, Math.abs(y - M))), M = y), O.zone = this.zones.length ? O.getZone() : void 0, !O.graphic && this.group && s && (O.isNew = !0);
          }
          this.closestPointRangePx = v, Gt(this, "afterTranslate");
        }
        getValidPoints(t, e, i) {
          let s = this.chart;
          return (t || this.points || []).filter(function(r) {
            let { plotX: o, plotY: a } = r;
            return (!!i || !r.isNull && !!se(a)) && (!e || !!s.isInsidePlot(o, a, { inverted: s.inverted })) && r.visible !== !1;
          });
        }
        getSharedClipKey() {
          return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey;
        }
        setClip() {
          let { chart: t, group: e, markerGroup: i } = this, s = t.sharedClips, r = t.renderer, o = t.getClipBox(this), a = this.getSharedClipKey(), l = s[a];
          l ? l.animate(o) : s[a] = l = r.clipRect(o), e && e.clip(this.options.clip === !1 ? void 0 : l), i && i.clip();
        }
        animate(t) {
          let { chart: e, group: i, markerGroup: s } = this, r = e.inverted, o = Ul(this.options.animation), a = [this.getSharedClipKey(), o.duration, o.easing, o.defer].join(","), l = e.sharedClips[a], c = e.sharedClips[a + "m"];
          if (t && i) {
            let f = e.getClipBox(this);
            if (l) l.attr("height", f.height);
            else {
              f.width = 0, r && (f.x = e.plotHeight), l = e.renderer.clipRect(f), e.sharedClips[a] = l;
              let d = { x: -99, y: -99, width: r ? e.plotWidth + 199 : 99, height: r ? 99 : e.plotHeight + 199 };
              c = e.renderer.clipRect(d), e.sharedClips[a + "m"] = c;
            }
            i.clip(l), s?.clip(c);
          } else if (l && !l.hasClass("highcharts-animating")) {
            let f = e.getClipBox(this), d = o.step;
            (s?.element.childNodes.length || e.series.length > 1) && (o.step = function(m, x) {
              d && d.apply(x, arguments), x.prop === "width" && c?.element && c.attr(r ? "height" : "width", m + 99);
            }), l.addClass("highcharts-animating").animate(f, o);
          }
        }
        afterAnimate() {
          this.setClip(), ol(this.chart.sharedClips, (t, e, i) => {
            t && !this.chart.container.querySelector(`[clip-path="url(#${t.id})"]`) && (t.destroy(), delete i[e]);
          }), this.finishedAnimating = !0, Gt(this, "afterAnimate");
        }
        drawPoints(t = this.points) {
          let e, i, s, r, o, a, l, c = this.chart, f = c.styledMode, { colorAxis: d, options: m } = this, x = m.marker, y = m.nullInteraction, M = this[this.specialGroup || "markerGroup"], w = this.xAxis, v = Yt(x.enabled, !w || !!w.isRadial || null, this.closestPointRangePx >= x.enabledThreshold * x.radius);
          if (x.enabled !== !1 || this._hasPointMarkers) for (e = 0; e < t.length; e++) {
            r = (s = (i = t[e]).graphic) ? "animate" : "attr", o = i.marker || {}, a = !!i.marker;
            let T = i.isNull;
            if ((v && !te(o.enabled) || o.enabled) && (!T || y) && i.visible !== !1) {
              let S = Yt(o.symbol, this.symbol, "rect");
              l = this.markerAttribs(i, i.selected && "select"), this.enabledDataSorting && (i.startXPos = w.reversed ? -(l.width || 0) : w.width);
              let O = i.isInside !== !1;
              if (!s && O && ((l.width || 0) > 0 || i.hasImage) && (i.graphic = s = c.renderer.symbol(S, l.x, l.y, l.width, l.height, a ? o : x).add(M), this.enabledDataSorting && c.hasRendered && (s.attr({ x: i.startXPos }), r = "animate")), s && r === "animate" && s[O ? "show" : "hide"](O).animate(l), s) {
                let L = this.pointAttribs(i, f || !i.selected ? void 0 : "select");
                f ? d && s.css({ fill: L.fill }) : s[r](L);
              }
              s && s.addClass(i.getClassName(), !0);
            } else s && (i.graphic = s.destroy());
          }
        }
        markerAttribs(t, e) {
          let i = this.options, s = i.marker, r = t.marker || {}, o = r.symbol || s.symbol, a = {}, l, c, f = Yt(r.radius, s?.radius);
          e && (l = s.states[e], c = r.states && r.states[e], f = Yt(c?.radius, l?.radius, f && f + (l?.radiusPlus || 0))), t.hasImage = o && o.indexOf("url") === 0, t.hasImage && (f = 0);
          let d = t.pos();
          return se(f) && d && (i.crisp && (d[0] = kc(d[0], t.hasImage ? 0 : o === "rect" ? s?.lineWidth || 0 : 1)), a.x = d[0] - f, a.y = d[1] - f), f && (a.width = a.height = 2 * f), a;
        }
        pointAttribs(t, e) {
          let i = this.options, s = i.marker, r = t?.options, o = r?.marker || {}, a = r?.color, l = t?.color, c = t?.zone?.color, f, d, m = this.color, x, y, M = Yt(o.lineWidth, s.lineWidth), w = t?.isNull && i.nullInteraction ? 0 : 1;
          return m = a || c || l || m, x = o.fillColor || s.fillColor || m, y = o.lineColor || s.lineColor || m, e = e || "normal", f = s.states[e] || {}, M = Yt((d = o.states && o.states[e] || {}).lineWidth, f.lineWidth, M + Yt(d.lineWidthPlus, f.lineWidthPlus, 0)), x = d.fillColor || f.fillColor || x, y = d.lineColor || f.lineColor || y, { stroke: y, "stroke-width": M, fill: x, opacity: w = Yt(d.opacity, f.opacity, w) };
        }
        destroy(t) {
          let e, i, s = this, r = s.chart, o = /AppleWebKit\/533/.test(yc.navigator.userAgent), a = s.data || [];
          for (Gt(s, "destroy", { keepEventsForUpdate: t }), this.removeEvents(t), (s.axisTypes || []).forEach(function(l) {
            i = s[l], i?.series && ($l(i.series, s), i.isDirty = i.forceRedraw = !0);
          }), s.legendItem && s.chart.legend.destroyItem(s), e = a.length; e--; ) a[e]?.destroy?.();
          for (let l of s.zones) wc(l, void 0, !0);
          J.clearTimeout(s.animationTimeout), ol(s, function(l, c) {
            l instanceof Pe && !l.survive && l[o && c === "group" ? "hide" : "destroy"]();
          }), r.hoverSeries === s && (r.hoverSeries = void 0), $l(r.series, s), r.orderItems("series"), ol(s, function(l, c) {
            t && c === "hcEvents" || delete s[c];
          });
        }
        applyZones() {
          let { area: t, chart: e, graph: i, zones: s, points: r, xAxis: o, yAxis: a, zoneAxis: l } = this, { inverted: c, renderer: f } = e, d = this[`${l}Axis`], { isXAxis: m, len: x = 0, minPointOffset: y = 0 } = d || {}, M = (i?.strokeWidth() || 0) / 2 + 1, w = (v, T = 0, S = 0) => {
            c && (S = x - S);
            let { translated: O = 0, lineClip: L } = v, D = S - O;
            L?.push(["L", T, Math.abs(D) < M ? S - M * (D <= 0 ? -1 : 1) : O]);
          };
          if (s.length && (i || t) && d && se(d.min)) {
            let v = d.getExtremes().max + y, T = (L) => {
              L.forEach((D, N) => {
                (D[0] === "M" || D[0] === "L") && (L[N] = [D[0], m ? x - D[1] : D[1], m ? D[2] : x - D[2]]);
              });
            };
            if (s.forEach((L) => {
              L.lineClip = [], L.translated = ql(d.toPixels(Yt(L.value, v), !0) || 0, 0, x);
            }), i && !this.showLine && i.hide(), t && t.hide(), l === "y" && r.length < o.len) for (let L of r) {
              let { plotX: D, plotY: N, zone: I } = L, W = I && s[s.indexOf(I) - 1];
              I && w(I, D, N), W && w(W, D, N);
            }
            let S = [], O = d.toPixels(d.getExtremes().min - y, !0);
            s.forEach((L) => {
              let D = L.lineClip || [], N = Math.round(L.translated || 0);
              o.reversed && D.reverse();
              let { clip: I, simpleClip: W } = L, j = 0, H = 0, K = o.len, Q = a.len;
              m ? (j = N, K = O) : (H = N, Q = O);
              let et = [["M", j, H], ["L", K, H], ["L", K, Q], ["L", j, Q], ["Z"]], V = [et[0], ...D, et[1], et[2], ...S, et[3], et[4]];
              S = D.reverse(), O = N, c && (T(V), t && T(et)), I ? (I.animate({ d: V }), W?.animate({ d: et })) : (I = L.clip = f.path(V), t && (W = L.simpleClip = f.path(et))), i && L.graph?.clip(I), t && L.area?.clip(W);
            });
          } else this.visible && (i && i.show(), t && t.show());
        }
        plotGroup(t, e, i, s, r) {
          let o = this[t], a = !o, l = { visibility: i, zIndex: s || 0.1 };
          return te(this.opacity) && !this.chart.styledMode && this.state !== "inactive" && (l.opacity = this.opacity), o || (this[t] = o = this.chart.renderer.g().add(r)), o.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (te(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (o.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), o.attr(l)[a ? "attr" : "animate"](this.getPlotBox(e)), o;
        }
        getPlotBox(t) {
          let e = this.xAxis, i = this.yAxis, s = this.chart, r = s.inverted && !s.polar && e && this.invertible && t === "series";
          s.inverted && (e = i, i = this.xAxis);
          let o = { scale: 1, translateX: e ? e.left : s.plotLeft, translateY: i ? i.top : s.plotTop, name: t };
          Gt(this, "getPlotBox", o);
          let { scale: a, translateX: l, translateY: c } = o;
          return { translateX: l, translateY: c, rotation: 90 * !!r, rotationOriginX: r ? a * (e.len - i.len) / 2 : 0, rotationOriginY: r ? a * (e.len + i.len) / 2 : 0, scaleX: r ? -a : a, scaleY: a };
        }
        removeEvents(t) {
          let { eventsToUnbind: e } = this;
          t || Sc(this), e.length && (e.forEach((i) => {
            i();
          }), e.length = 0);
        }
        render() {
          let t = this, { chart: e, options: i, hasRendered: s } = t, r = Ul(i.animation), o = t.visible ? "inherit" : "hidden", a = i.zIndex, l = e.seriesGroup, c = t.finishedAnimating ? 0 : r.duration;
          Gt(this, "render"), t.plotGroup("group", "series", o, a, l), t.markerGroup = t.plotGroup("markerGroup", "markers", o, a, l), i.clip !== !1 && t.setClip(), c && t.animate?.(!0), t.drawGraph && (t.drawGraph(), t.applyZones()), t.visible && t.drawPoints(), t.drawDataLabels?.(), t.redrawPoints?.(), i.enableMouseTracking && t.drawTracker?.(), c && t.animate?.(), s || (c && r.defer && (c += r.defer), t.animationTimeout = Ql(() => {
            t.afterAnimate();
          }, c || 0)), t.isDirty = !1, t.hasRendered = !0, Gt(t, "afterRender");
        }
        redraw() {
          let t = this.isDirty || this.isDirtyData;
          this.translate(), this.render(), t && delete this.kdTree;
        }
        reserveSpace() {
          return this.visible || !this.chart.options.chart.ignoreHiddenSeries;
        }
        searchPoint(t, e) {
          let { xAxis: i, yAxis: s } = this, r = this.chart.inverted;
          return this.searchKDTree({ clientX: r ? i.len - t.chartY + i.pos : t.chartX - i.pos, plotY: r ? s.len - t.chartX + s.pos : t.chartY - s.pos }, e, t);
        }
        buildKDTree(t) {
          this.buildingKdTree = !0;
          let e = this, i = e.options, s = i.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
          delete e.kdTree, Ql(function() {
            e.kdTree = (function r(o, a, l) {
              let c, f, d = o?.length;
              if (d) return c = e.kdAxisArray[a % l], o.sort((m, x) => (m[c] || 0) - (x[c] || 0)), { point: o[f = Math.floor(d / 2)], left: r(o.slice(0, f), a + 1, l), right: r(o.slice(f + 1), a + 1, l) };
            })(e.getValidPoints(void 0, !e.directTouch, i?.nullInteraction), s, s), e.buildingKdTree = !1;
          }, i.kdNow || t?.type === "touchstart" ? 0 : 1);
        }
        searchKDTree(t, e, i, s, r) {
          let o = this, [a, l] = this.kdAxisArray, c = e ? "distX" : "dist", f = (o.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1, d = !!o.isBubble, m = s || ((y, M, w) => {
            let v = y[w] || 0, T = M[w] || 0;
            return [v === T && y.index > M.index || v < T ? y : M, !1];
          }), x = r || ((y, M) => y < M);
          if (this.kdTree || this.buildingKdTree || this.buildKDTree(i), this.kdTree) return (function y(M, w, v, T) {
            let S = w.point, O = o.kdAxisArray[v % T], L = S, D = !1;
            (function(j, H) {
              let K = j[a], Q = H[a], et = te(K) && te(Q) ? K - Q : null, V = j[l], Z = H[l], tt = te(V) && te(Z) ? V - Z : 0, St = d && H.marker?.radius || 0;
              H.dist = Math.sqrt((et && et * et || 0) + tt * tt) - St, H.distX = te(et) ? Math.abs(et) - St : Number.MAX_VALUE;
            })(M, S);
            let N = (M[O] || 0) - (S[O] || 0) + (d && S.marker?.radius || 0), I = N < 0 ? "left" : "right", W = N < 0 ? "right" : "left";
            return w[I] && ([L, D] = m(S, y(M, w[I], v + 1, T), c)), w[W] && x(Math.sqrt(N * N), L[c], D) && (L = m(L, y(M, w[W], v + 1, T), c)[0]), L;
          })(t, this.kdTree, f, f);
        }
        pointPlacementToXValue() {
          let { options: t, xAxis: e } = this, i = t.pointPlacement;
          return i === "between" && (i = e.reversed ? -0.5 : 0.5), se(i) ? i * (t.pointRange || e.pointRange) : 0;
        }
        isPointInside(t) {
          let { chart: e, xAxis: i, yAxis: s } = this, { plotX: r = -1, plotY: o = -1 } = t;
          return o >= 0 && o <= (s ? s.len : e.plotHeight) && r >= 0 && r <= (i ? i.len : e.plotWidth);
        }
        drawTracker() {
          let t = this, e = t.options, i = e.trackByArea, s = [].concat((i ? t.areaPath : t.graphPath) || []), r = t.chart, o = r.pointer, a = r.renderer, l = r.options.tooltip?.snap || 0, c = () => {
            e.enableMouseTracking && r.hoverSeries !== t && t.onMouseOver();
          }, f = "rgba(192,192,192," + (bc ? 1e-4 : 2e-3) + ")", d = t.tracker;
          d ? d.attr({ d: s }) : t.graph && (t.tracker = d = a.path(s).attr({ visibility: t.visible ? "inherit" : "hidden", zIndex: 2 }).addClass(i ? "highcharts-tracker-area" : "highcharts-tracker-line").add(t.group), r.styledMode || d.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: f, fill: i ? f : "none", "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * l) }), [t.tracker, t.markerGroup, t.dataLabelsGroup].forEach((m) => {
            m && (m.addClass("highcharts-tracker").on("mouseover", c).on("mouseout", (x) => {
              o?.onTrackerMouseOut(x);
            }), e.cursor && !r.styledMode && m.css({ cursor: e.cursor }), m.on("touchstart", c));
          })), Gt(this, "afterDrawTracker");
        }
        addPoint(t, e, i, s, r) {
          let o, a, l = this.options, { chart: c, data: f, dataTable: d, xAxis: m } = this, x = m?.hasNames && m.names, y = l.data, M = this.getColumn("x");
          e = Yt(e, !0);
          let w = { series: this };
          this.pointClass.prototype.applyOptions.apply(w, [t]);
          let v = w.x;
          if (a = M.length, this.requireSorting && v < M[a - 1]) for (o = !0; a && M[a - 1] > v; ) a--;
          d.setRow(w, a, !0, { addColumns: !1 }), x && w.name && (x[v] = w.name), y?.splice(a, 0, t), (o || this.processedData) && (this.data.splice(a, 0, null), this.processData()), l.legendType === "point" && this.generatePoints(), i && (f[0] && f[0].remove ? f[0].remove(!1) : ([f, y].filter(te).forEach((T) => {
            T.shift();
          }), d.deleteRows(0))), r !== !1 && Gt(this, "addPoint", { point: w }), this.isDirty = !0, this.isDirtyData = !0, e && c.redraw(s);
        }
        removePoint(t, e, i) {
          let s = this, { chart: r, data: o, points: a, dataTable: l } = s, c = o[t], f = function() {
            [a?.length === o.length ? a : void 0, o, s.options.data].filter(te).forEach((d) => {
              d.splice(t, 1);
            }), l.deleteRows(t), c?.destroy(), s.isDirty = !0, s.isDirtyData = !0, e && r.redraw();
          };
          mc(i, r), e = Yt(e, !0), c ? c.firePointEvent("remove", null, f) : f();
        }
        remove(t, e, i, s) {
          let r = this, o = r.chart;
          function a() {
            r.destroy(s), o.isDirtyLegend = o.isDirtyBox = !0, o.linkSeries(s), Yt(t, !0) && o.redraw(e);
          }
          i !== !1 ? Gt(r, "remove", null, a) : a();
        }
        update(t, e) {
          Gt(this, "update", { options: t = Mc(t, this.userOptions) });
          let i = this, s = i.chart, r = i.userOptions, o = i.initialType || i.type, a = s.options.plotOptions, l = Gs[o].prototype, c = i.finishedAnimating && { animation: !1 }, f = {}, d, m, x = $e.keepProps.slice(), y = t.type || r.type || s.options.chart.type, M = !(this.hasDerivedData || y && y !== this.type || t.keys !== void 0 || t.pointStart !== void 0 || t.pointInterval !== void 0 || t.relativeXValue !== void 0 || t.joinBy || t.mapData || ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some((v) => i.hasOptionChanged(v)));
          y = y || o, M ? (x.push.apply(x, $e.keepPropsForPoints), t.visible !== !1 && x.push("area", "graph"), i.parallelArrays.forEach(function(v) {
            x.push(v + "Data");
          }), t.data && (t.dataSorting && Ys(i.options.dataSorting, t.dataSorting), this.setData(t.data, !1))) : this.dataTable.modified = this.dataTable, t = qr(r, { index: r.index === void 0 ? i.index : r.index, pointStart: a?.series?.pointStart ?? r.pointStart ?? i.getColumn("x")[0] }, !M && { data: i.options.data }, t, c), M && t.data && (t.data = i.options.data), (x = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(x)).forEach(function(v) {
            x[v] = i[v], delete i[v];
          });
          let w = !1;
          if (Gs[y]) {
            if (w = y !== i.type, i.remove(!1, !1, !1, !0), w) if (s.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(i, Gs[y].prototype);
            else {
              let v = Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents;
              for (m in l) i[m] = void 0;
              Ys(i, Gs[y].prototype), v ? i.hcEvents = v : delete i.hcEvents;
            }
          } else ya(17, !0, s, { missingModuleFor: y });
          if (x.forEach(function(v) {
            i[v] = x[v];
          }), i.init(s, t), M && this.points) for (let v of ((d = i.options).visible === !1 ? (f.graphic = 1, f.dataLabel = 1) : (this.hasMarkerChanged(d, r) && (f.graphic = 1), i.hasDataLabels?.() || (f.dataLabel = 1)), this.points)) v?.series && (v.resolveColor(), Object.keys(f).length && v.destroyElements(f), d.showInLegend === !1 && v.legendItem && s.legend.destroyItem(v));
          i.initialType = o, s.linkSeries(), s.setSortedData(), w && i.linkedSeries.length && (i.isDirtyData = !0), Gt(this, "afterUpdate"), Yt(e, !0) && s.redraw(!!M && void 0);
        }
        setName(t) {
          this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0;
        }
        hasOptionChanged(t) {
          let e = this.chart, i = this.options[t], s = e.options.plotOptions, r = this.userOptions[t], o = Yt(s?.[this.type]?.[t], s?.series?.[t]);
          return r && !te(o) ? i !== r : i !== Yt(o, i);
        }
        onMouseOver() {
          let t = this.chart, e = t.hoverSeries;
          t.pointer?.setHoverChartIndex(), e && e !== this && e.onMouseOut(), this.options.events.mouseOver && Gt(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this;
        }
        onMouseOut() {
          let t = this.options, e = this.chart, i = e.tooltip, s = e.hoverPoint;
          e.hoverSeries = null, s && s.onMouseOut(), this && t.events.mouseOut && Gt(this, "mouseOut"), i && !this.stickyTracking && (!i.shared || this.noSharedTooltip) && i.hide(), e.series.forEach(function(r) {
            r.setState("", !0);
          });
        }
        setState(t, e) {
          let i = this, s = i.options, r = i.graph, o = s.inactiveOtherPoints, a = s.states, l = Yt(a[t || "normal"] && a[t || "normal"].animation, i.chart.options.chart.animation), c = s.lineWidth, f = s.opacity;
          if (t = t || "", i.state !== t && ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(function(d) {
            d && (i.state && d.removeClass("highcharts-series-" + i.state), t && d.addClass("highcharts-series-" + t));
          }), i.state = t, !i.chart.styledMode)) {
            if (a[t] && a[t].enabled === !1) return;
            if (t && (c = a[t].lineWidth || c + (a[t].lineWidthPlus || 0), f = Yt(a[t].opacity, f)), r && !r.dashstyle && se(c)) for (let d of [r, ...this.zones.map((m) => m.graph)]) d?.animate({ "stroke-width": c }, l);
            o || [i.group, i.markerGroup, i.dataLabelsGroup, i.labelBySeries].forEach(function(d) {
              d && d.animate({ opacity: f }, l);
            });
          }
          e && o && i.points && i.setAllPointsToState(t || void 0);
        }
        setAllPointsToState(t) {
          this.points.forEach(function(e) {
            e.setState && e.setState(t);
          });
        }
        setVisible(t, e) {
          let i = this, s = i.chart, r = s.options.chart.ignoreHiddenSeries, o = i.visible;
          i.visible = t = i.options.visible = i.userOptions.visible = t === void 0 ? !o : t;
          let a = t ? "show" : "hide";
          ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach((l) => {
            i[l]?.[a]();
          }), (s.hoverSeries === i || s.hoverPoint?.series === i) && i.onMouseOut(), i.legendItem && s.legend.colorizeItem(i, t), i.isDirty = !0, i.options.stacking && s.series.forEach((l) => {
            l.options.stacking && l.visible && (l.isDirty = !0);
          }), i.linkedSeries.forEach((l) => {
            l.setVisible(t, !1);
          }), r && (s.isDirtyBox = !0), Gt(i, a), e !== !1 && s.redraw();
        }
        show() {
          this.setVisible(!0);
        }
        hide() {
          this.setVisible(!1);
        }
        select(t) {
          this.selected = t = this.options.selected = t === void 0 ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), Gt(this, t ? "select" : "unselect");
        }
        shouldShowTooltip(t, e, i = {}) {
          return i.series = this, i.visiblePlotOnly = !0, this.chart.isInsidePlot(t, e, i);
        }
        drawLegendSymbol(t, e) {
          Yl[this.options.legendSymbol || "rectangle"]?.call(this, t, e);
        }
      }
      $e.defaultOptions = { lineWidth: 2, allowPointSelect: !1, crisp: !0, showCheckbox: !1, animation: { duration: 1e3 }, enableMouseTracking: !0, events: {}, marker: { enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: { normal: { animation: !0 }, hover: { animation: { duration: 150 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: { animation: {}, align: "center", borderWidth: 0, defer: !0, formatter: function() {
        let { numberFormatter: h } = this.series.chart;
        return typeof this.y != "number" ? "" : h(this.y, -1);
      }, padding: 5, style: { fontSize: "0.7em", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: !0, states: { normal: { animation: !0 }, hover: { animation: { duration: 150 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: 0.25 } }, select: { animation: { duration: 0 } }, inactive: { animation: { duration: 150 }, opacity: 0.2 } }, stickyTracking: !0, turboThreshold: 1e3, findNearestPointBy: "x" }, $e.types = qt.seriesTypes, $e.registerType = qt.registerSeriesType, $e.keepProps = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"], $e.keepPropsForPoints = ["data", "isDirtyData", "isDirtyCanvas", "points", "dataTable", "processedData", "xIncrement", "cropped", "_hasPointMarkers", "hasDataLabels", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX", "transformGroups"], Ys($e.prototype, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, directTouch: !1, invertible: !0, isCartesian: !0, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: Vt, requireSorting: !0, sorted: !0 }), qt.series = $e;
      let Ce = $e, { animObject: Ec, setAnimation: Pc } = $t, { registerEventOptions: th } = Di, { composed: Oc, marginNames: eh } = X, { distribute: Lc } = ws, { format: Dc } = he, { addEvent: va, createElement: Ic, css: Bc, defined: al, discardElement: Nc, find: Rc, fireEvent: Mi, isNumber: ih, merge: ls, pick: Ze, pushUnique: zc, relativeLength: Fc, stableSort: Hc, syncTimeout: Wc } = J;
      class nl {
        constructor(t, e) {
          this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = t, this.setOptions(e), e.enabled && (this.render(), th(this, e), va(this.chart, "endResize", function() {
            this.legend.positionCheckboxes();
          })), va(this.chart, "render", () => {
            this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems());
          });
        }
        setOptions(t) {
          let e = Ze(t.padding, 8);
          this.options = t, this.chart.styledMode || (this.itemStyle = t.itemStyle, this.itemHiddenStyle = ls(this.itemStyle, t.itemHiddenStyle)), this.itemMarginTop = t.itemMarginTop, this.itemMarginBottom = t.itemMarginBottom, this.padding = e, this.initialItemY = e - 5, this.symbolWidth = Ze(t.symbolWidth, 16), this.pages = [], this.proximate = t.layout === "proximate" && !this.chart.inverted, this.baseline = void 0;
        }
        update(t, e) {
          let i = this.chart;
          this.setOptions(ls(!0, this.options, t)), "events" in this.options && th(this, this.options), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, Ze(e, !0) && i.redraw(), Mi(this, "afterUpdate", { redraw: e });
        }
        colorizeItem(t, e) {
          let i = t.color, { area: s, group: r, label: o, line: a, symbol: l } = t.legendItem || {};
          if ((t instanceof Ce || t instanceof Vt) && (t.color = t.options?.legendSymbolColor || i), r?.[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
            let { itemHiddenStyle: c = {} } = this, f = c.color, { fillColor: d, fillOpacity: m, lineColor: x, marker: y } = t.options, M = (w) => (!e && (w.fill && (w.fill = f), w.stroke && (w.stroke = f)), w);
            o?.css(ls(e ? this.itemStyle : c)), a?.attr(M({ stroke: x || t.color })), l && l.attr(M(y && l.isMarker ? t.pointAttribs() : { fill: t.color })), s?.attr(M({ fill: d || t.color, "fill-opacity": d ? 1 : m ?? 0.75 }));
          }
          t.color = i, Mi(this, "afterColorizeItem", { item: t, visible: e });
        }
        positionItems() {
          this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
        }
        positionItem(t) {
          let { group: e, x: i = 0, y: s = 0 } = t.legendItem || {}, r = this.options, o = r.symbolPadding, a = !r.rtl, l = t.checkbox;
          if (e?.element) {
            let c = { translateX: a ? i : this.legendWidth - i - 2 * o - 4, translateY: s };
            e[al(e.translateY) ? "animate" : "attr"](c, void 0, () => {
              Mi(this, "afterPositionItem", { item: t });
            });
          }
          l && (l.x = i, l.y = s);
        }
        destroyItem(t) {
          let e = t.legendItem || {};
          for (let i of ["group", "label", "line", "symbol"]) e[i] && (e[i] = e[i].destroy());
          t.checkbox = Nc(t.checkbox), t.legendItem = void 0;
        }
        destroy() {
          for (let t of this.getAllItems()) this.destroyItem(t);
          for (let t of ["clipRect", "up", "down", "pager", "nav", "box", "title", "group"]) this[t] && (this[t] = this[t].destroy());
          this.display = null;
        }
        positionCheckboxes() {
          let t, e = this.group?.alignAttr, i = this.clipHeight || this.legendHeight, s = this.titleHeight;
          e && (t = e.translateY, this.allItems.forEach(function(r) {
            let o, a = r.checkbox;
            a && (o = t + s + a.y + (this.scrollOffset || 0) + 3, Bc(a, { left: e.translateX + r.checkboxOffset + a.x - 20 + "px", top: o + "px", display: this.proximate || o > t - 6 && o < t + i - 6 ? "" : "none" }));
          }, this));
        }
        renderTitle() {
          let t = this.options, e = this.padding, i = t.title, s, r = 0;
          i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, void 0, void 0, void 0, t.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(i.style), this.title.add(this.group)), i.width || this.title.css({ width: this.maxLegendWidth + "px" }), r = (s = this.title.getBBox()).height, this.offsetWidth = s.width, this.contentGroup.attr({ translateY: r })), this.titleHeight = r;
        }
        setText(t) {
          let e = this.options;
          t.legendItem.label.attr({ text: e.labelFormat ? Dc(e.labelFormat, t, this.chart) : e.labelFormatter.call(t) });
        }
        renderItem(t) {
          let e = t.legendItem = t.legendItem || {}, i = this.chart, s = i.renderer, r = this.options, o = r.layout === "horizontal", a = this.symbolWidth, l = r.symbolPadding || 0, c = this.itemStyle, f = this.itemHiddenStyle, d = o ? Ze(r.itemDistance, 20) : 0, m = !r.rtl, x = !t.series, y = !x && t.series.drawLegendSymbol ? t.series : t, M = y.options, w = !!this.createCheckboxForItem && M && M.showCheckbox, v = r.useHTML, T = t.options.className, S = e.label, O = a + l + d + 20 * !!w;
          !S && (e.group = s.g("legend-item").addClass("highcharts-" + y.type + "-series highcharts-color-" + t.colorIndex + (T ? " " + T : "") + (x ? " highcharts-series-" + t.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), e.label = S = s.text("", m ? a + l : -l, this.baseline || 0, v), i.styledMode || S.css(ls(t.visible ? c : f)), S.attr({ align: m ? "left" : "right", zIndex: 2 }).add(e.group), !this.baseline && (this.fontMetrics = s.fontMetrics(S), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, S.attr("y", this.baseline), this.symbolHeight = Ze(r.symbolHeight, this.fontMetrics.f), r.squareSymbol && (this.symbolWidth = Ze(r.symbolWidth, Math.max(this.symbolHeight, 16)), O = this.symbolWidth + l + d + 20 * !!w, m && S.attr("x", this.symbolWidth + l))), y.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, S, v)), w && !t.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t), this.colorizeItem(t, t.visible), (i.styledMode || !c.width) && S.css({ width: (r.itemWidth || this.widthOption || i.spacingBox.width) - O + "px" }), this.setText(t);
          let L = S.getBBox(), D = this.fontMetrics?.h || 0;
          t.itemWidth = t.checkboxOffset = r.itemWidth || e.labelWidth || L.width + O, this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth), this.totalItemWidth += t.itemWidth, this.itemHeight = t.itemHeight = Math.round(e.labelHeight || (L.height > 1.5 * D ? L.height : D));
        }
        layoutItem(t) {
          let e = this.options, i = this.padding, s = e.layout === "horizontal", r = t.itemHeight, o = this.itemMarginBottom, a = this.itemMarginTop, l = s ? Ze(e.itemDistance, 20) : 0, c = this.maxLegendWidth, f = e.alignColumns && this.totalItemWidth > c ? this.maxItemWidth : t.itemWidth, d = t.legendItem || {};
          s && this.itemX - i + f > c && (this.itemX = i, this.lastLineHeight && (this.itemY += a + this.lastLineHeight + o), this.lastLineHeight = 0), this.lastItemY = a + this.itemY + o, this.lastLineHeight = Math.max(r, this.lastLineHeight), d.x = this.itemX, d.y = this.itemY, s ? this.itemX += f : (this.itemY += a + r + o, this.lastLineHeight = r), this.offsetWidth = this.widthOption || Math.max((s ? this.itemX - i - (t.checkbox ? 0 : l) : f) + i, this.offsetWidth);
        }
        getAllItems() {
          let t = [];
          return this.chart.series.forEach(function(e) {
            let i = e?.options;
            e && Ze(i.showInLegend, !al(i.linkedTo) && void 0, !0) && (t = t.concat(e.legendItem?.labels || (i.legendType === "point" ? e.data : e)));
          }), Mi(this, "afterGetAllItems", { allItems: t }), t;
        }
        getAlignment() {
          let t = this.options;
          return this.proximate ? t.align.charAt(0) + "tv" : t.floating ? "" : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0);
        }
        adjustMargins(t, e) {
          let i = this.chart, s = this.options, r = this.getAlignment();
          r && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach((o, a) => {
            o.test(r) && !al(t[a]) && (i[eh[a]] = Math.max(i[eh[a]], i.legend[(a + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][a] * s[a % 2 ? "x" : "y"] + (s.margin ?? 12) + e[a] + (i.titleOffset[a] || 0)));
          });
        }
        proximatePositions() {
          let t, e = this.chart, i = [], s = this.options.align === "left";
          for (let r of (this.allItems.forEach(function(o) {
            let a, l, c = s, f, d;
            o.yAxis && (o.xAxis.options.reversed && (c = !c), o.points && (a = Rc(c ? o.points : o.points.slice(0).reverse(), function(m) {
              return ih(m.plotY);
            })), l = this.itemMarginTop + o.legendItem.label.getBBox().height + this.itemMarginBottom, d = o.yAxis.top - e.plotTop, f = o.visible ? (a ? a.plotY : o.yAxis.height) + (d - 0.3 * l) : d + o.yAxis.height, i.push({ target: f, size: l, item: o }));
          }, this), Lc(i, e.plotHeight))) t = r.item.legendItem || {}, ih(r.pos) && (t.y = e.plotTop - e.spacing[0] + r.pos);
        }
        render() {
          let t = this.chart, e = t.renderer, i = this.options, s = this.padding, r = this.getAllItems(), o, a, l, c = this.group, f, d = this.box;
          this.itemX = s, this.itemY = this.initialItemY, this.offsetWidth = 0, this.lastItemY = 0, this.widthOption = Fc(i.width, t.spacingBox.width - s), f = t.spacingBox.width - 2 * s - i.x, ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (f /= 2), this.maxLegendWidth = this.widthOption || f, c || (this.group = c = e.g("legend").addClass(i.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = e.g().attr({ zIndex: 1 }).add(c), this.scrollGroup = e.g().add(this.contentGroup)), this.renderTitle(), Hc(r, (m, x) => (m.options?.legendIndex || 0) - (x.options?.legendIndex || 0)), i.reversed && r.reverse(), this.allItems = r, this.display = o = !!r.length, this.lastLineHeight = 0, this.maxItemWidth = 0, this.totalItemWidth = 0, this.itemHeight = 0, r.forEach(this.renderItem, this), r.forEach(this.layoutItem, this), a = (this.widthOption || this.offsetWidth) + s, l = this.lastItemY + this.lastLineHeight + this.titleHeight, l = this.handleOverflow(l) + s, d || (this.box = d = e.rect().addClass("highcharts-legend-box").attr({ r: i.borderRadius }).add(c)), t.styledMode || d.attr({ stroke: i.borderColor, "stroke-width": i.borderWidth || 0, fill: i.backgroundColor || "none" }).shadow(i.shadow), a > 0 && l > 0 && d[d.placed ? "animate" : "attr"](d.crisp.call({}, { x: 0, y: 0, width: a, height: l }, d.strokeWidth())), c[o ? "show" : "hide"](), t.styledMode && c.getStyle("display") === "none" && (a = l = 0), this.legendWidth = a, this.legendHeight = l, o && this.align(), this.proximate || this.positionItems(), Mi(this, "afterRender");
        }
        align(t = this.chart.spacingBox) {
          let e = this.chart, i = this.options, s = t.y;
          /(lth|ct|rth)/.test(this.getAlignment()) && e.titleOffset[0] > 0 ? s += e.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && e.titleOffset[2] > 0 && (s -= e.titleOffset[2]), s !== t.y && (t = ls(t, { y: s })), e.hasRendered || (this.group.placed = !1), this.group.align(ls(i, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : i.verticalAlign }), !0, t);
        }
        handleOverflow(t) {
          let e = this, i = this.chart, s = i.renderer, r = this.options, o = r.y, a = r.verticalAlign === "top", l = this.padding, c = r.maxHeight, f = r.navigation, d = Ze(f.animation, !0), m = f.arrowSize || 12, x = this.pages, y = this.allItems, M = function(I) {
            typeof I == "number" ? N.attr({ height: I }) : N && (e.clipRect = N.destroy(), e.contentGroup.clip()), e.contentGroup.div && (e.contentGroup.div.style.clip = I ? "rect(" + l + "px,9999px," + (l + I) + "px,0)" : "auto");
          }, w = function(I) {
            return e[I] = s.circle(0, 0, 1.3 * m).translate(m / 2, m / 2).add(D), i.styledMode || e[I].attr("fill", "rgba(0,0,0,0.0001)"), e[I];
          }, v, T, S, O, L = i.spacingBox.height + (a ? -o : o) - l, D = this.nav, N = this.clipRect;
          return r.layout !== "horizontal" || r.verticalAlign === "middle" || r.floating || (L /= 2), c && (L = Math.min(L, c)), x.length = 0, t && L > 0 && t > L && f.enabled !== !1 ? (this.clipHeight = v = Math.max(L - 20 - this.titleHeight - l, 0), this.currentPage = Ze(this.currentPage, 1), this.fullHeight = t, y.forEach((I, W) => {
            let j = (S = I.legendItem || {}).y || 0, H = Math.round(S.label.getBBox().height), K = x.length;
            (!K || j - x[K - 1] > v && (T || j) !== x[K - 1]) && (x.push(T || j), K++), S.pageIx = K - 1, T && O && (O.pageIx = K - 1), W === y.length - 1 && j + H - x[K - 1] > v && j > x[K - 1] && (x.push(j), S.pageIx = K), j !== T && (T = j), O = S;
          }), N || (N = e.clipRect = s.clipRect(0, l - 2, 9999, 0), e.contentGroup.clip(N)), M(v), D || (this.nav = D = s.g().attr({ zIndex: 1 }).add(this.group), this.up = s.symbol("triangle", 0, 0, m, m).add(D), w("upTracker").on("click", function() {
            e.scroll(-1, d);
          }), this.pager = s.text("", 15, 10).addClass("highcharts-legend-navigation"), !i.styledMode && f.style && this.pager.css(f.style), this.pager.add(D), this.down = s.symbol("triangle-down", 0, 0, m, m).add(D), w("downTracker").on("click", function() {
            e.scroll(1, d);
          })), e.scroll(0), t = L) : D && (M(), this.nav = D.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0), t;
        }
        scroll(t, e) {
          let i = this.chart, s = this.pages, r = s.length, o = this.clipHeight, a = this.options.navigation, l = this.pager, c = this.padding, f = this.currentPage + t;
          f > r && (f = r), f > 0 && (e !== void 0 && Pc(e, i), this.nav.attr({ translateX: c, translateY: o + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function(d) {
            d.attr({ class: f === 1 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
          }), l.attr({ text: f + "/" + r }), [this.down, this.downTracker].forEach(function(d) {
            d.attr({ x: 18 + this.pager.getBBox().width, class: f === r ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
          }, this), i.styledMode || (this.up.attr({ fill: f === 1 ? a.inactiveColor : a.activeColor }), this.upTracker.css({ cursor: f === 1 ? "default" : "pointer" }), this.down.attr({ fill: f === r ? a.inactiveColor : a.activeColor }), this.downTracker.css({ cursor: f === r ? "default" : "pointer" })), this.scrollOffset = -s[f - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = f, this.positionCheckboxes(), Wc(() => {
            Mi(this, "afterScroll", { currentPage: f });
          }, Ec(Ze(e, i.renderer.globalAnimation, !0)).duration));
        }
        setItemEvents(t, e, i) {
          let s = this, r = t.legendItem || {}, o = s.chart.renderer.boxWrapper, a = t instanceof Vt, l = t instanceof Ce, c = "highcharts-legend-" + (a ? "point" : "series") + "-active", f = s.chart.styledMode, d = i ? [e, r.symbol] : [r.group], m = (x) => {
            s.allItems.forEach((y) => {
              t !== y && [y].concat(y.linkedSeries || []).forEach((M) => {
                M.setState(x, !a);
              });
            });
          };
          for (let x of d) x && x.on("mouseover", function() {
            t.visible && m("inactive"), t.setState("hover"), t.visible && o.addClass(c), f || e.css(s.options.itemHoverStyle);
          }).on("mouseout", function() {
            s.chart.styledMode || e.css(ls(t.visible ? s.itemStyle : s.itemHiddenStyle)), m(""), o.removeClass(c), t.setState();
          }).on("click", function(y) {
            let M = function() {
              t.setVisible && t.setVisible(), m(t.visible ? "inactive" : "");
            };
            o.removeClass(c), Mi(s, "itemClick", { browserEvent: y, legendItem: t }, M), a ? t.firePointEvent("legendItemClick", { browserEvent: y }) : l && Mi(t, "legendItemClick", { browserEvent: y });
          });
        }
        createCheckboxForItem(t) {
          t.checkbox = Ic("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: t.selected, defaultChecked: t.selected }, this.options.itemCheckboxStyle, this.chart.container), va(t.checkbox, "click", function(e) {
            let i = e.target;
            Mi(t.series || t, "checkboxClick", { checked: i.checked, item: t }, function() {
              t.select();
            });
          });
        }
      }
      (function(h) {
        h.compose = function(t) {
          zc(Oc, "Core.Legend") && va(t, "beforeMargins", function() {
            this.legend = new h(this, this.options.legend);
          });
        };
      })(nl || (nl = {}));
      let sh = nl, { animate: ll, animObject: Xc, setAnimation: hl } = $t, { defaultOptions: cl } = fe, { numberFormat: Gc } = he, { registerEventOptions: rh } = Di, { charts: hs, doc: Kr, marginNames: oh, svg: Yc, win: ah } = X, { seriesTypes: dl } = qt, { addEvent: pl, attr: nh, createElement: ul, css: _e, defined: Hi, diffObjects: lh, discardElement: jc, erase: Uc, error: gl, extend: Wi, find: fl, fireEvent: bt, getAlignFactor: Vc, getStyle: ml, isArray: qc, isNumber: js, isObject: Kc, isString: ka, merge: pi, objectEach: xl, pick: me, pInt: $c, relativeLength: hh, removeEvent: ch, splat: wa, syncTimeout: Zc, uniqueKey: _c } = J;
      class Xi {
        static chart(t, e, i) {
          return new Xi(t, e, i);
        }
        constructor(t, e, i) {
          this.sharedClips = {};
          let s = [...arguments];
          (ka(t) || t.nodeName) && (this.renderTo = s.shift()), this.init(s[0], s[1]);
        }
        setZoomOptions() {
          let t = this.options.chart, e = t.zooming;
          this.zooming = { ...e, type: me(t.zoomType, e.type), key: me(t.zoomKey, e.key), pinchType: me(t.pinchType, e.pinchType), singleTouch: me(t.zoomBySingleTouch, e.singleTouch, !1), resetButton: pi(e.resetButton, t.resetZoomButton) };
        }
        init(t, e) {
          bt(this, "init", { args: arguments }, function() {
            let i = pi(cl, t), s = i.chart, r = this.renderTo || s.renderTo;
            this.userOptions = Wi({}, t), (this.renderTo = ka(r) ? Kr.getElementById(r) : r) || gl(13, !0, this), this.margin = [], this.spacing = [], this.labelCollectors = [], this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.locale = i.lang.locale ?? this.renderTo.closest("[lang]")?.lang, this.time = new $s(Wi(i.time || {}, { locale: this.locale }), i.lang), i.time = this.time.options, this.numberFormatter = (s.numberFormatter || Gc).bind(this), this.styledMode = s.styledMode, this.hasCartesianSeries = s.showAxes, this.index = hs.length, hs.push(this), X.chartCount++, rh(this, s), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), bt(this, "afterInit"), this.firstRender();
          });
        }
        initSeries(t) {
          let e = this.options.chart, i = t.type || e.type, s = dl[i];
          s || gl(17, !0, this, { missingModuleFor: i });
          let r = new s();
          return typeof r.init == "function" && r.init(this, t), r;
        }
        setSortedData() {
          this.getSeriesOrderByLinks().forEach(function(t) {
            t.points || t.data || !t.enabledDataSorting || t.setData(t.options.data, !1);
          });
        }
        getSeriesOrderByLinks() {
          return this.series.concat().sort(function(t, e) {
            return t.linkedSeries.length || e.linkedSeries.length ? e.linkedSeries.length - t.linkedSeries.length : 0;
          });
        }
        orderItems(t, e = 0) {
          let i = this[t], s = this.options[t] = wa(this.options[t]).slice(), r = this.userOptions[t] = this.userOptions[t] ? wa(this.userOptions[t]).slice() : [];
          if (this.hasRendered && (s.splice(e), r.splice(e)), i) for (let o = e, a = i.length; o < a; ++o) {
            let l = i[o];
            l && (l.index = o, l instanceof Ce && (l.name = l.getName()), l.options.isInternal || (s[o] = l.options, r[o] = l.userOptions));
          }
        }
        getClipBox(t, e) {
          let i = this.inverted, { xAxis: s, yAxis: r } = t || {}, { x: o, y: a, width: l, height: c } = pi(this.clipBox);
          return t && (s && s.len !== this.plotSizeX && (l = s.len), r && r.len !== this.plotSizeY && (c = r.len), i && !t.invertible && ([l, c] = [c, l])), e && (o += (i ? r : s)?.pos ?? this.plotLeft, a += (i ? s : r)?.pos ?? this.plotTop), { x: o, y: a, width: l, height: c };
        }
        isInsidePlot(t, e, i = {}) {
          let { inverted: s, plotBox: r, plotLeft: o, plotTop: a, scrollablePlotBox: l } = this, { scrollLeft: c = 0, scrollTop: f = 0 } = i.visiblePlotOnly && this.scrollablePlotArea?.scrollingContainer || {}, d = i.series, m = i.visiblePlotOnly && l || r, x = i.inverted ? e : t, y = i.inverted ? t : e, M = { x, y, isInsidePlot: !0, options: i };
          if (!i.ignoreX) {
            let w = d && (s && !this.polar ? d.yAxis : d.xAxis) || { pos: o, len: 1 / 0 }, v = i.paneCoordinates ? w.pos + x : o + x;
            v >= Math.max(c + o, w.pos) && v <= Math.min(c + o + m.width, w.pos + w.len) || (M.isInsidePlot = !1);
          }
          if (!i.ignoreY && M.isInsidePlot) {
            let w = !s && i.axis && !i.axis.isXAxis && i.axis || d && (s ? d.xAxis : d.yAxis) || { pos: a, len: 1 / 0 }, v = i.paneCoordinates ? w.pos + y : a + y;
            v >= Math.max(f + a, w.pos) && v <= Math.min(f + a + m.height, w.pos + w.len) || (M.isInsidePlot = !1);
          }
          return bt(this, "afterIsInsidePlot", M), M.isInsidePlot;
        }
        redraw(t) {
          bt(this, "beforeRedraw");
          let e = this.hasCartesianSeries ? this.axes : this.colorAxis || [], i = this.series, s = this.pointer, r = this.legend, o = this.userOptions.legend, a = this.renderer, l = a.isHidden(), c = [], f, d, m, x = this.isDirtyBox, y = this.isDirtyLegend, M;
          for (a.rootFontSize = a.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(!1), hl(!!this.hasRendered && t, this), l && this.temporaryDisplay(), this.layOutTitles(!1), m = i.length; m--; ) if (((M = i[m]).options.stacking || M.options.centerInCategory) && (d = !0, M.isDirty)) {
            f = !0;
            break;
          }
          if (f) for (m = i.length; m--; ) (M = i[m]).options.stacking && (M.isDirty = !0);
          i.forEach(function(w) {
            w.isDirty && (w.options.legendType === "point" ? (typeof w.updateTotals == "function" && w.updateTotals(), y = !0) : o && (o.labelFormatter || o.labelFormat) && (y = !0)), w.isDirtyData && bt(w, "updatedData");
          }), y && r && r.options.enabled && (r.render(), this.isDirtyLegend = !1), d && this.getStacks(), e.forEach(function(w) {
            w.updateNames(), w.setScale();
          }), this.getMargins(), e.forEach(function(w) {
            w.isDirty && (x = !0);
          }), e.forEach(function(w) {
            let v = w.min + "," + w.max;
            w.extKey !== v && (w.extKey = v, c.push(function() {
              bt(w, "afterSetExtremes", Wi(w.eventArgs, w.getExtremes())), delete w.eventArgs;
            })), (x || d) && w.redraw();
          }), x && this.drawChartBox(), bt(this, "predraw"), i.forEach(function(w) {
            (x || w.isDirty) && w.visible && w.redraw(), w.isDirtyData = !1;
          }), s && s.reset(!0), a.draw(), bt(this, "redraw"), bt(this, "render"), l && this.temporaryDisplay(!0), c.forEach(function(w) {
            w.call();
          });
        }
        get(t) {
          let e = this.series;
          function i(r) {
            return r.id === t || r.options && r.options.id === t;
          }
          let s = fl(this.axes, i) || fl(this.series, i);
          for (let r = 0; !s && r < e.length; r++) s = fl(e[r].points || [], i);
          return s;
        }
        createAxes() {
          let t = this.userOptions;
          for (let e of (bt(this, "createAxes"), ["xAxis", "yAxis"])) for (let i of t[e] = wa(t[e] || {})) new Ri(this, i, e);
          bt(this, "afterCreateAxes");
        }
        getSelectedPoints() {
          return this.series.reduce((t, e) => (e.getPointsCollection().forEach((i) => {
            me(i.selectedStaging, i.selected) && t.push(i);
          }), t), []);
        }
        getSelectedSeries() {
          return this.series.filter((t) => t.selected);
        }
        setTitle(t, e, i) {
          this.applyDescription("title", t), this.applyDescription("subtitle", e), this.applyDescription("caption", void 0), this.layOutTitles(i);
        }
        applyDescription(t, e) {
          let i = this, s = this.options[t] = pi(this.options[t], e), r = this[t];
          r && e && (this[t] = r = r.destroy()), s && !r && ((r = this.renderer.text(s.text, 0, 0, s.useHTML).attr({ align: s.align, class: "highcharts-" + t, zIndex: s.zIndex || 4 }).css({ textOverflow: "ellipsis", whiteSpace: "nowrap" }).add()).update = function(o, a) {
            i.applyDescription(t, o), i.layOutTitles(a);
          }, this.styledMode || r.css(Wi(t === "title" ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {}, s.style)), r.textPxLength = r.getBBox().width, r.css({ whiteSpace: s.style?.whiteSpace }), this[t] = r);
        }
        layOutTitles(t = !0) {
          let e = [0, 0, 0], { options: i, renderer: s, spacingBox: r } = this;
          ["title", "subtitle", "caption"].forEach((a) => {
            let l = this[a], c = this.options[a], f = pi(r), d = l?.textPxLength || 0;
            if (l && c) {
              bt(this, "layOutTitle", { alignTo: f, key: a, textPxLength: d });
              let m = s.fontMetrics(l), x = m.b, y = m.h, M = c.verticalAlign || "top", w = M === "top", v = w && c.minScale || 1, T = a === "title" ? w ? -3 : 0 : w ? e[0] + 2 : 0, S = Math.min(f.width / d, 1), O = Math.max(v, S), L = pi({ y: M === "bottom" ? x : T + x }, { align: a === "title" ? S < v ? "left" : "center" : this.title?.alignValue }, c), D = (c.width || (S > v ? this.chartWidth : f.width) / O) + "px";
              l.alignValue !== L.align && (l.placed = !1);
              let N = Math.round(l.css({ width: D }).getBBox(c.useHTML).height);
              if (L.height = N, l.align(L, !1, f).attr({ align: L.align, scaleX: O, scaleY: O, "transform-origin": `${f.x + d * O * Vc(L.align)} ${y}` }), !c.floating) {
                let I = N * (N < 1.2 * y ? 1 : O);
                M === "top" ? e[0] = Math.ceil(e[0] + I) : M === "bottom" && (e[2] = Math.ceil(e[2] + I));
              }
            }
          }, this), e[0] && (i.title?.verticalAlign || "top") === "top" && (e[0] += i.title?.margin || 0), e[2] && i.caption?.verticalAlign === "bottom" && (e[2] += i.caption?.margin || 0);
          let o = !this.titleOffset || this.titleOffset.join(",") !== e.join(",");
          this.titleOffset = e, bt(this, "afterLayOutTitles"), !this.isDirtyBox && o && (this.isDirtyBox = this.isDirtyLegend = o, this.hasRendered && t && this.isDirtyBox && this.redraw());
        }
        getContainerBox() {
          let t = [].map.call(this.renderTo.children, (i) => {
            if (i !== this.container) {
              let s = i.style.display;
              return i.style.display = "none", [i, s];
            }
          }), e = { width: ml(this.renderTo, "width", !0) || 0, height: ml(this.renderTo, "height", !0) || 0 };
          return t.filter(Boolean).forEach(([i, s]) => {
            i.style.display = s;
          }), e;
        }
        getChartSize() {
          let t = this.options.chart, e = t.width, i = t.height, s = this.getContainerBox(), r = s.height <= 1 || !this.renderTo.parentElement?.style.height && this.renderTo.style.height === "100%";
          this.chartWidth = Math.max(0, e || s.width || 600), this.chartHeight = Math.max(0, hh(i, this.chartWidth) || (r ? 400 : s.height)), this.containerBox = s;
        }
        temporaryDisplay(t) {
          let e = this.renderTo, i;
          if (t) for (; e?.style; ) e.hcOrigStyle && (_e(e, e.hcOrigStyle), delete e.hcOrigStyle), e.hcOrigDetached && (Kr.body.removeChild(e), e.hcOrigDetached = !1), e = e.parentNode;
          else for (; e?.style && (Kr.body.contains(e) || e.parentNode || (e.hcOrigDetached = !0, Kr.body.appendChild(e)), (ml(e, "display", !1) === "none" || e.hcOricDetached) && (e.hcOrigStyle = { display: e.style.display, height: e.style.height, overflow: e.style.overflow }, i = { display: "block", overflow: "hidden" }, e !== this.renderTo && (i.height = 0), _e(e, i), e.offsetWidth || e.style.setProperty("display", "block", "important")), (e = e.parentNode) !== Kr.body); ) ;
        }
        setClassName(t) {
          this.container.className = "highcharts-container " + (t || "");
        }
        getContainer() {
          let t, e = this.options, i = e.chart, s = "data-highcharts-chart", r = _c(), o = this.renderTo, a = $c(nh(o, s));
          js(a) && hs[a] && hs[a].hasRendered && hs[a].destroy(), nh(o, s, this.index), o.innerHTML = Bt.emptyHTML, i.skipClone || o.offsetWidth || this.temporaryDisplay(), this.getChartSize();
          let l = this.chartHeight, c = this.chartWidth;
          _e(o, { overflow: "hidden" }), this.styledMode || (t = Wi({ position: "relative", overflow: "hidden", width: c + "px", height: l + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none", padding: "0px" }, i.style || {}));
          let f = ul("div", { id: r }, t, o);
          this.container = f, this.getChartSize(), c !== this.chartWidth && (c = this.chartWidth, this.styledMode || _e(f, { width: me(i.style?.width, c + "px") })), this.containerBox = this.getContainerBox(), this._cursor = f.style.cursor;
          let d = i.renderer || !Yc ? $i.getRendererType(i.renderer) : Ps;
          if (this.renderer = new d(f, c, l, void 0, i.forExport, e.exporting?.allowHTML, this.styledMode), hl(void 0, this), this.setClassName(i.className), this.styledMode) for (let m in e.defs) this.renderer.definition(e.defs[m]);
          else this.renderer.setStyle(i.style);
          this.renderer.chartIndex = this.index, bt(this, "afterGetContainer");
        }
        getMargins(t) {
          let { spacing: e, margin: i, titleOffset: s } = this;
          this.resetMargins(), s[0] && !Hi(i[0]) && (this.plotTop = Math.max(this.plotTop, s[0] + e[0])), s[2] && !Hi(i[2]) && (this.marginBottom = Math.max(this.marginBottom, s[2] + e[2])), this.legend?.display && this.legend.adjustMargins(i, e), bt(this, "getMargins"), t || this.getAxisMargins();
        }
        getAxisMargins() {
          let t = this, e = t.axisOffset = [0, 0, 0, 0], i = t.colorAxis, s = t.margin, r = (o) => {
            o.forEach((a) => {
              a.visible && a.getOffset();
            });
          };
          t.hasCartesianSeries ? r(t.axes) : i?.length && r(i), oh.forEach((o, a) => {
            Hi(s[a]) || (t[o] += e[a]);
          }), t.setChartSize();
        }
        getOptions() {
          return lh(this.userOptions, cl);
        }
        reflow(t) {
          let e = this, i = e.containerBox, s = e.getContainerBox();
          delete e.pointer?.chartPosition, !e.exporting?.isPrinting && !e.isResizing && i && s.width && ((s.width !== i.width || s.height !== i.height) && (J.clearTimeout(e.reflowTimeout), e.reflowTimeout = Zc(function() {
            e.container && e.setSize(void 0, void 0, !1);
          }, 100 * !!t)), e.containerBox = s);
        }
        setReflow() {
          let t = this, e = (i) => {
            t.options?.chart.reflow && t.hasLoaded && t.reflow(i);
          };
          if (typeof ResizeObserver == "function") new ResizeObserver(e).observe(t.renderTo);
          else {
            let i = pl(ah, "resize", e);
            pl(this, "destroy", i);
          }
        }
        setSize(t, e, i) {
          let s = this, r = s.renderer;
          s.isResizing += 1, hl(i, s);
          let o = r.globalAnimation;
          s.oldChartHeight = s.chartHeight, s.oldChartWidth = s.chartWidth, t !== void 0 && (s.options.chart.width = t), e !== void 0 && (s.options.chart.height = e), s.getChartSize();
          let { chartWidth: a, chartHeight: l, scrollablePixelsX: c = 0, scrollablePixelsY: f = 0 } = s;
          (s.isDirtyBox || a !== s.oldChartWidth || l !== s.oldChartHeight) && (s.styledMode || (o ? ll : _e)(s.container, { width: `${a + c}px`, height: `${l + f}px` }, o), s.setChartSize(!0), r.setSize(a, l, o), s.axes.forEach(function(d) {
            d.isDirty = !0, d.setScale();
          }), s.isDirtyLegend = !0, s.isDirtyBox = !0, s.layOutTitles(), s.getMargins(), s.redraw(o), s.oldChartHeight = void 0, bt(s, "resize"), setTimeout(() => {
            s && bt(s, "endResize");
          }, Xc(o).duration)), s.isResizing -= 1;
        }
        setChartSize(t) {
          let e, i, s, r, { chartHeight: o, chartWidth: a, inverted: l, spacing: c, renderer: f } = this, d = this.clipOffset, m = Math[l ? "floor" : "round"];
          this.plotLeft = e = Math.round(this.plotLeft), this.plotTop = i = Math.round(this.plotTop), this.plotWidth = s = Math.max(0, Math.round(a - e - (this.marginRight ?? 0))), this.plotHeight = r = Math.max(0, Math.round(o - i - (this.marginBottom ?? 0))), this.plotSizeX = l ? r : s, this.plotSizeY = l ? s : r, this.spacingBox = f.spacingBox = { x: c[3], y: c[0], width: a - c[3] - c[1], height: o - c[0] - c[2] }, this.plotBox = f.plotBox = { x: e, y: i, width: s, height: r }, d && (this.clipBox = { x: m(d[3]), y: m(d[0]), width: m(this.plotSizeX - d[1] - d[3]), height: m(this.plotSizeY - d[0] - d[2]) }), t || (this.axes.forEach(function(x) {
            x.setAxisSize(), x.setAxisTranslation();
          }), f.alignElements()), bt(this, "afterSetChartSize", { skipAxes: t });
        }
        resetMargins() {
          bt(this, "resetMargins");
          let t = this, e = t.options.chart, i = e.plotBorderWidth || 0, s = Math.round(i) / 2;
          ["margin", "spacing"].forEach((r) => {
            let o = e[r], a = Kc(o) ? o : [o, o, o, o];
            ["Top", "Right", "Bottom", "Left"].forEach((l, c) => {
              t[r][c] = e[`${r}${l}`] ?? a[c];
            });
          }), oh.forEach((r, o) => {
            t[r] = t.margin[o] ?? t.spacing[o];
          }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [s, s, s, s], t.plotBorderWidth = i;
        }
        drawChartBox() {
          let t = this.options.chart, e = this.renderer, i = this.chartWidth, s = this.chartHeight, r = this.styledMode, o = this.plotBGImage, a = t.backgroundColor, l = t.plotBackgroundColor, c = t.plotBackgroundImage, f = this.plotLeft, d = this.plotTop, m = this.plotWidth, x = this.plotHeight, y = this.plotBox, M = this.clipRect, w = this.clipBox, v = this.chartBackground, T = this.plotBackground, S = this.plotBorder, O, L, D, N = "animate";
          v || (this.chartBackground = v = e.rect().addClass("highcharts-background").add(), N = "attr"), r ? O = L = v.strokeWidth() : (L = (O = t.borderWidth || 0) + 8 * !!t.shadow, D = { fill: a || "none" }, (O || v["stroke-width"]) && (D.stroke = t.borderColor, D["stroke-width"] = O), v.attr(D).shadow(t.shadow)), v[N]({ x: L / 2, y: L / 2, width: i - L - O % 2, height: s - L - O % 2, r: t.borderRadius }), N = "animate", T || (N = "attr", this.plotBackground = T = e.rect().addClass("highcharts-plot-background").add()), T[N](y), !r && (T.attr({ fill: l || "none" }).shadow(t.plotShadow), c && (o ? (c !== o.attr("href") && o.attr("href", c), o.animate(y)) : this.plotBGImage = e.image(c, f, d, m, x).add())), M ? M.animate({ width: w.width, height: w.height }) : this.clipRect = e.clipRect(w), N = "animate", S || (N = "attr", this.plotBorder = S = e.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()), r || S.attr({ stroke: t.plotBorderColor, "stroke-width": t.plotBorderWidth || 0, fill: "none" }), S[N](S.crisp(y, -S.strokeWidth())), this.isDirtyBox = !1, bt(this, "afterDrawChartBox");
        }
        propFromSeries() {
          let t, e, i, s = this, r = s.options.chart, o = s.options.series;
          ["inverted", "angular", "polar"].forEach(function(a) {
            for (e = dl[r.type], i = r[a] || e && e.prototype[a], t = o?.length; !i && t--; ) (e = dl[o[t].type]) && e.prototype[a] && (i = !0);
            s[a] = i;
          });
        }
        linkSeries(t) {
          let e = this, i = e.series;
          i.forEach(function(s) {
            s.linkedSeries.length = 0;
          }), i.forEach(function(s) {
            let { linkedTo: r } = s.options;
            if (ka(r)) {
              let o;
              (o = r === ":previous" ? e.series[s.index - 1] : e.get(r)) && o.linkedParent !== s && (o.linkedSeries.push(s), s.linkedParent = o, o.enabledDataSorting && s.setDataSortingOptions(), s.visible = me(s.options.visible, o.options.visible, s.visible));
            }
          }), bt(this, "afterLinkSeries", { isUpdating: t });
        }
        renderSeries() {
          this.series.forEach(function(t) {
            t.translate(), t.render();
          });
        }
        render() {
          let t = this.axes, e = this.colorAxis, i = this.renderer, s = this.options.chart.axisLayoutRuns || 2, r = (f) => {
            f.forEach((d) => {
              d.visible && d.render();
            });
          }, o = 0, a = !0, l, c = 0;
          for (let f of (this.setTitle(), bt(this, "beforeMargins"), this.getStacks?.(), this.getMargins(!0), this.setChartSize(), t)) {
            let { options: d } = f, { labels: m } = d;
            if (this.hasCartesianSeries && f.horiz && f.visible && m.enabled && f.series.length && f.coll !== "colorAxis" && !this.polar) {
              o = d.tickLength, f.createGroups();
              let x = new Bi(f, 0, "", !0), y = x.createLabel("x", m);
              if (x.destroy(), y && me(m.reserveSpace, !js(d.crossing)) && (o = y.getBBox().height + m.distance + Math.max(d.offset || 0, 0)), o) {
                y?.destroy();
                break;
              }
            }
          }
          for (this.plotHeight = Math.max(this.plotHeight - o, 0); (a || l || s > 1) && c < s; ) {
            let f = this.plotWidth, d = this.plotHeight;
            for (let m of t) c === 0 ? m.setScale() : (m.horiz && a || !m.horiz && l) && m.setTickInterval(!0);
            c === 0 ? this.getAxisMargins() : this.getMargins(), a = f / this.plotWidth > (c ? 1 : 1.1), l = d / this.plotHeight > (c ? 1 : 1.05), c++;
          }
          this.drawChartBox(), this.hasCartesianSeries ? r(t) : e?.length && r(e), this.seriesGroup || (this.seriesGroup = i.g("series-group").attr({ zIndex: 3 }).shadow(this.options.chart.seriesGroupShadow).add()), this.dataLabelsGroup || (this.dataLabelsGroup = i.g("datalabels-group").attr({ zIndex: 6 }).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0;
        }
        addCredits(t) {
          let e = this, i = pi(!0, this.options.credits, t);
          i.enabled && !this.credits && (this.credits = this.renderer.text(i.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
            i.href && (ah.location.href = i.href);
          }).attr({ align: i.position.align, zIndex: 8 }), e.styledMode || this.credits.css(i.style), this.credits.add().align(i.position), this.credits.update = function(s) {
            e.credits = e.credits.destroy(), e.addCredits(s);
          });
        }
        destroy() {
          let t, e = this, i = e.axes, s = e.series, r = e.container, o = r?.parentNode;
          for (bt(e, "destroy"), e.renderer.forExport ? Uc(hs, e) : hs[e.index] = void 0, X.chartCount--, e.renderTo.removeAttribute("data-highcharts-chart"), ch(e), t = i.length; t--; ) i[t] = i[t].destroy();
          for (this.scroller?.destroy?.(), t = s.length; t--; ) s[t] = s[t].destroy();
          ["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"].forEach((a) => {
            e[a] = e[a]?.destroy?.();
          }), r && (r.innerHTML = Bt.emptyHTML, ch(r), o && jc(r)), xl(e, function(a, l) {
            delete e[l];
          });
        }
        firstRender() {
          let t = this, e = t.options;
          t.getContainer(), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.createAxes();
          let i = qc(e.series) ? e.series : [];
          e.series = [], i.forEach(function(s) {
            t.initSeries(s);
          }), t.linkSeries(), t.setSortedData(), bt(t, "beforeRender"), t.render(), t.pointer?.getChartPosition(), t.renderer.imgCount || t.hasLoaded || t.onload(), t.temporaryDisplay(!0);
        }
        onload() {
          this.callbacks.concat([this.callback]).forEach(function(t) {
            t && this.index !== void 0 && t.apply(this, [this]);
          }, this), bt(this, "load"), bt(this, "render"), Hi(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = !0;
        }
        warnIfA11yModuleNotLoaded() {
          let { options: t, title: e } = this;
          t && !this.accessibility && (this.renderer.boxWrapper.attr({ role: "img", "aria-label": (e?.element.textContent || "").replace(/</g, "&lt;") }), t.accessibility && t.accessibility.enabled === !1 || gl('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', !1, this));
        }
        addSeries(t, e, i) {
          let s, r = this;
          return t && (e = me(e, !0), bt(r, "addSeries", { options: t }, function() {
            s = r.initSeries(t), r.isDirtyLegend = !0, r.linkSeries(), s.enabledDataSorting && s.setData(t.data, !1), bt(r, "afterAddSeries", { series: s }), e && r.redraw(i);
          })), s;
        }
        addAxis(t, e, i, s) {
          return this.createAxis(e ? "xAxis" : "yAxis", { axis: t, redraw: i, animation: s });
        }
        addColorAxis(t, e, i) {
          return this.createAxis("colorAxis", { axis: t, redraw: e, animation: i });
        }
        createAxis(t, e) {
          let i = new Ri(this, e.axis, t);
          return me(e.redraw, !0) && this.redraw(e.animation), i;
        }
        showLoading(t) {
          let e = this, i = e.options, s = i.loading, r = function() {
            o && _e(o, { left: e.plotLeft + "px", top: e.plotTop + "px", width: e.plotWidth + "px", height: e.plotHeight + "px" });
          }, o = e.loadingDiv, a = e.loadingSpan;
          o || (e.loadingDiv = o = ul("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, e.container)), a || (e.loadingSpan = a = ul("span", { className: "highcharts-loading-inner" }, null, o), pl(e, "redraw", r)), o.className = "highcharts-loading", Bt.setElementHTML(a, me(t, i.lang.loading, "")), !e.styledMode && (_e(o, Wi(s.style, { zIndex: 10 })), _e(a, s.labelStyle), e.loadingShown || (_e(o, { opacity: 0, display: "" }), ll(o, { opacity: s.style.opacity || 0.5 }, { duration: s.showDuration || 0 }))), e.loadingShown = !0, r();
        }
        hideLoading() {
          let t = this.options, e = this.loadingDiv;
          e && (e.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || ll(e, { opacity: 0 }, { duration: t.loading.hideDuration || 100, complete: function() {
            _e(e, { display: "none" });
          } })), this.loadingShown = !1;
        }
        update(t, e, i, s) {
          let r, o, a, l = this, c = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, f = t.isResponsiveOptions, d = [];
          bt(l, "update", { options: t }), f || l.setResponsive(!1, !0), t = lh(t, l.options), l.userOptions = pi(l.userOptions, t);
          let m = t.chart;
          m && (pi(!0, l.options.chart, m), this.setZoomOptions(), "className" in m && l.setClassName(m.className), ("inverted" in m || "polar" in m || "type" in m) && (l.propFromSeries(), r = !0), "alignTicks" in m && (r = !0), "events" in m && rh(this, m), xl(m, function(M, w) {
            l.propsRequireUpdateSeries.indexOf("chart." + w) !== -1 && (o = !0), l.propsRequireDirtyBox.indexOf(w) !== -1 && (l.isDirtyBox = !0), l.propsRequireReflow.indexOf(w) !== -1 && (l.isDirtyBox = !0, f || (a = !0));
          }), !l.styledMode && m.style && l.renderer.setStyle(l.options.chart.style || {})), !l.styledMode && t.colors && (this.options.colors = t.colors), xl(t, function(M, w) {
            l[w] && typeof l[w].update == "function" ? l[w].update(M, !1) : typeof l[c[w]] == "function" ? l[c[w]](M) : w !== "colors" && l.collectionsWithUpdate.indexOf(w) === -1 && pi(!0, l.options[w], t[w]), w !== "chart" && l.propsRequireUpdateSeries.indexOf(w) !== -1 && (o = !0);
          }), this.collectionsWithUpdate.forEach(function(M) {
            t[M] && (wa(t[M]).forEach(function(w, v) {
              let T, S = Hi(w.id);
              S && (T = l.get(w.id)), !T && l[M] && (T = l[M][me(w.index, v)]) && (S && Hi(T.options.id) || T.options.isInternal) && (T = void 0), T && T.coll === M && (T.update(w, !1), i && (T.touched = !0)), !T && i && l.collectionsWithInit[M] && (l.collectionsWithInit[M][0].apply(l, [w].concat(l.collectionsWithInit[M][1] || []).concat([!1])).touched = !0);
            }), i && l[M].forEach(function(w) {
              w.touched || w.options.isInternal ? delete w.touched : d.push(w);
            }));
          }), d.forEach(function(M) {
            M.chart && M.remove && M.remove(!1);
          }), r && l.axes.forEach(function(M) {
            M.update({}, !1);
          }), o && l.getSeriesOrderByLinks().forEach(function(M) {
            M.chart && M.update({}, !1);
          }, this);
          let x = m?.width, y = m && (ka(m.height) ? hh(m.height, x || l.chartWidth) : m.height);
          a || js(x) && x !== l.chartWidth || js(y) && y !== l.chartHeight ? l.setSize(x, y, s) : me(e, !0) && l.redraw(s), bt(l, "afterUpdate", { options: t, redraw: e, animation: s });
        }
        setSubtitle(t, e) {
          this.applyDescription("subtitle", t), this.layOutTitles(e);
        }
        setCaption(t, e) {
          this.applyDescription("caption", t), this.layOutTitles(e);
        }
        showResetZoom() {
          let t = this, e = cl.lang, i = t.zooming.resetButton, s = i.theme, r = i.relativeTo === "chart" || i.relativeTo === "spacingBox" ? null : "plotBox";
          function o() {
            t.zoomOut();
          }
          bt(this, "beforeShowResetZoom", null, function() {
            t.resetZoomButton = t.renderer.button(e.resetZoom, null, null, o, s).attr({ align: i.position.align, title: e.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(i.position, !1, r);
          }), bt(this, "afterShowResetZoom");
        }
        zoomOut() {
          bt(this, "selection", { resetSelection: !0 }, () => this.transform({ reset: !0, trigger: "zoom" }));
        }
        pan(t, e) {
          let i = this, s = typeof e == "object" ? e : { enabled: e, type: "x" }, r = s.type, o = r && i[{ x: "xAxis", xy: "axes", y: "yAxis" }[r]].filter((l) => l.options.panningEnabled && !l.options.isInternal), a = i.options.chart;
          a?.panning && (a.panning = s), bt(this, "pan", { originalEvent: t }, () => {
            i.transform({ axes: o, event: t, to: { x: t.chartX - (i.mouseDownX || 0), y: t.chartY - (i.mouseDownY || 0) }, trigger: "pan" }), _e(i.container, { cursor: "move" });
          });
        }
        transform(t) {
          let { axes: e = this.axes, event: i, from: s = {}, reset: r, selection: o, to: a = {}, trigger: l } = t, { inverted: c, time: f } = this;
          this.hoverPoints?.forEach((y) => y.setState()), bt(this, "transform", t);
          let d = t.hasZoomed || !1, m, x;
          for (let y of e) {
            let { horiz: M, len: w, minPointOffset: v = 0, options: T, reversed: S } = y, O = M ? "width" : "height", L = M ? "x" : "y", D = me(a[O], y.len), N = me(s[O], y.len), I = 10 > Math.abs(D) ? 1 : D / N, W = (s[L] || 0) + N / 2 - y.pos, j = W - ((a[L] ?? y.pos) + D / 2 - y.pos) / I, H = S && !c || !S && c ? -1 : 1;
            if (!r && (W < 0 || W > y.len)) continue;
            let K = y.chart.polar || y.isOrdinal ? 0 : v * H || 0, Q = y.toValue(j, !0), et = y.toValue(j + w / I, !0), V = Q + K, Z = et - K, tt = y.allExtremes;
            if (o && o[y.coll].push({ axis: y, min: Math.min(Q, et), max: Math.max(Q, et) }), V > Z && ([V, Z] = [Z, V]), I === 1 && !r && y.coll === "yAxis" && !tt) {
              for (let ye of y.series) {
                let ui = ye.getExtremes(ye.getProcessedData(!0).modified.getColumn("y") || [], !0);
                tt ?? (tt = { dataMin: Number.MAX_VALUE, dataMax: -Number.MAX_VALUE }), js(ui.dataMin) && js(ui.dataMax) && (tt.dataMin = Math.min(ui.dataMin, tt.dataMin), tt.dataMax = Math.max(ui.dataMax, tt.dataMax));
              }
              y.allExtremes = tt;
            }
            let { dataMin: St, dataMax: gt, min: xe, max: at } = Wi(y.getExtremes(), tt || {}), ot = f.parse(T.min), yt = f.parse(T.max), pt = St ?? ot, Pt = gt ?? yt, Ot = Z - V, vt = y.categories ? 0 : Math.min(Ot, Pt - pt), jt = pt - vt * (Hi(ot) ? 0 : T.minPadding), be = Pt + vt * (Hi(yt) ? 0 : T.maxPadding), Ae = y.allowZoomOutside || I === 1 || l !== "zoom" && I > 1, ji = Math.min(ot ?? jt, jt, Ae ? xe : jt), Je = Math.max(yt ?? be, be, Ae ? at : be);
            (!y.isOrdinal || I !== 1 || r) && (V < ji && (V = ji, I >= 1 && (Z = V + Ot)), Z > Je && (Z = Je, I >= 1 && (V = Z - Ot)), (r || y.series.length && (V !== xe || Z !== at) && V >= ji && Z <= Je) && (o ? o[y.coll].push({ axis: y, min: V, max: Z }) : (y.isPanning = l !== "zoom", y.isPanning && (x = !0), y.setExtremes(r ? void 0 : V, r ? void 0 : Z, !1, !1, { move: j, trigger: l, scale: I }), !r && (V > ji || Z < Je) && l !== "mousewheel" && (m = !0)), d = !0), this.hasCartesianSeries || r || l === "mousewheel" || (m = !0), i && (this[M ? "mouseDownX" : "mouseDownY"] = i[M ? "chartX" : "chartY"]));
          }
          return d && (o ? bt(this, "selection", o, () => {
            delete t.selection, t.trigger = "zoom", this.transform(t);
          }) : (!m || x || this.resetZoomButton ? !m && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()) : this.showResetZoom(), this.redraw(l === "zoom" && (this.options.chart.animation ?? this.pointCount < 100)))), d;
        }
      }
      Wi(Xi.prototype, { callbacks: [], collectionsWithInit: { xAxis: [Xi.prototype.addAxis, [!0]], yAxis: [Xi.prototype.addAxis, [!1]], series: [Xi.prototype.addSeries] }, collectionsWithUpdate: ["xAxis", "yAxis", "series"], propsRequireDirtyBox: ["backgroundColor", "borderColor", "borderWidth", "borderRadius", "plotBackgroundColor", "plotBackgroundImage", "plotBorderColor", "plotBorderWidth", "plotShadow", "shadow"], propsRequireReflow: ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "spacing", "spacingTop", "spacingRight", "spacingBottom", "spacingLeft"], propsRequireUpdateSeries: ["chart.inverted", "chart.polar", "chart.ignoreHiddenSeries", "chart.type", "colors", "plotOptions", "time", "tooltip"] });
      let { stop: Jc } = $t, { composed: Qc } = X, { addEvent: Gi, createElement: Ma, css: bl, defined: yl, erase: td, merge: dh, pushUnique: ph } = J;
      function ed() {
        let h = this.scrollablePlotArea;
        (this.scrollablePixelsX || this.scrollablePixelsY) && !h && (this.scrollablePlotArea = h = new $r(this)), h?.applyFixed();
      }
      function uh() {
        this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0);
      }
      class $r {
        static compose(t, e, i) {
          ph(Qc, this.compose) && (Gi(t, "afterInit", uh), Gi(e, "afterSetChartSize", (s) => this.afterSetSize(s.target, s)), Gi(e, "render", ed), Gi(i, "show", uh));
        }
        static afterSetSize(t, e) {
          let i, s, r, { minWidth: o, minHeight: a } = t.options.chart.scrollablePlotArea || {}, { clipBox: l, plotBox: c, inverted: f, renderer: d } = t;
          if (!d.forExport) if (o ? (t.scrollablePixelsX = i = Math.max(0, o - t.chartWidth), i && (t.scrollablePlotBox = dh(t.plotBox), c.width = t.plotWidth += i, l[f ? "height" : "width"] += i, r = !0)) : a && (t.scrollablePixelsY = s = Math.max(0, a - t.chartHeight), yl(s) && (t.scrollablePlotBox = dh(t.plotBox), c.height = t.plotHeight += s, l[f ? "width" : "height"] += s, r = !1)), yl(r)) {
            if (!e.skipAxes) for (let m of t.axes) (m.horiz === r || t.hasParallelCoordinates && m.coll === "yAxis") && (m.setAxisSize(), m.setAxisTranslation());
          } else delete t.scrollablePlotBox;
        }
        constructor(t) {
          let e, i = t.options.chart, s = $i.getRendererType(), r = i.scrollablePlotArea || {}, o = this.moveFixedElements.bind(this), a = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
          t.scrollablePixelsX && (a.overflowX = "auto"), t.scrollablePixelsY && (a.overflowY = "auto"), this.chart = t;
          let l = this.parentDiv = Ma("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, t.renderTo), c = this.scrollingContainer = Ma("div", { className: "highcharts-scrolling" }, a, l), f = this.innerContainer = Ma("div", { className: "highcharts-inner-container" }, void 0, c), d = this.fixedDiv = Ma("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (i.style?.zIndex || 0) + 2, top: 0 }, void 0, !0), m = this.fixedRenderer = new s(d, t.chartWidth, t.chartHeight, i.style);
          this.mask = m.path().attr({ fill: i.backgroundColor || "#fff", "fill-opacity": r.opacity ?? 0.85, zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), c.parentNode.insertBefore(d, c), bl(t.renderTo, { overflow: "visible" }), Gi(t, "afterShowResetZoom", o), Gi(t, "afterApplyDrilldown", o), Gi(t, "afterLayOutTitles", o), Gi(c, "scroll", () => {
            let { pointer: x, hoverPoint: y } = t;
            x && (delete x.chartPosition, y && (e = y), x.runPointActions(void 0, e, !0));
          }), f.appendChild(t.container);
        }
        applyFixed() {
          let { chart: t, fixedRenderer: e, isDirty: i, scrollingContainer: s } = this, { axisOffset: r, chartWidth: o, chartHeight: a, container: l, plotHeight: c, plotLeft: f, plotTop: d, plotWidth: m, scrollablePixelsX: x = 0, scrollablePixelsY: y = 0 } = t, { scrollPositionX: M = 0, scrollPositionY: w = 0 } = t.options.chart.scrollablePlotArea || {}, v = o + x, T = a + y;
          e.setSize(o, a), (i ?? !0) && (this.isDirty = !1, this.moveFixedElements()), Jc(t.container), bl(l, { width: `${v}px`, height: `${T}px` }), t.renderer.boxWrapper.attr({ width: v, height: T, viewBox: [0, 0, v, T].join(" ") }), t.chartBackground?.attr({ width: v, height: T }), bl(s, { width: `${o}px`, height: `${a}px` }), yl(i) || (s.scrollLeft = x * M, s.scrollTop = y * w);
          let S = d - r[0] - 1, O = f - r[3] - 1, L = d + c + r[2] + 1, D = f + m + r[1] + 1, N = f + m - x, I = d + c - y, W = [["M", 0, 0]];
          x ? W = [["M", 0, S], ["L", f - 1, S], ["L", f - 1, L], ["L", 0, L], ["Z"], ["M", N, S], ["L", o, S], ["L", o, L], ["L", N, L], ["Z"]] : y && (W = [["M", O, 0], ["L", O, d - 1], ["L", D, d - 1], ["L", D, 0], ["Z"], ["M", O, I], ["L", O, a], ["L", D, a], ["L", D, I], ["Z"]]), t.redrawTrigger !== "adjustHeight" && this.mask.attr({ d: W });
        }
        moveFixedElements() {
          let t, { container: e, inverted: i, scrollablePixelsX: s, scrollablePixelsY: r } = this.chart, o = this.fixedRenderer, a = $r.fixedSelectors;
          if (s && !i ? t = ".highcharts-yaxis" : s && i || r && !i ? t = ".highcharts-xaxis" : r && i && (t = ".highcharts-yaxis"), t && !(this.chart.hasParallelCoordinates && t === ".highcharts-yaxis")) for (let l of [`${t}:not(.highcharts-radial-axis)`, `${t}-labels:not(.highcharts-radial-axis-labels)`]) ph(a, l);
          else for (let l of [".highcharts-xaxis", ".highcharts-yaxis"]) for (let c of [`${l}:not(.highcharts-radial-axis)`, `${l}-labels:not(.highcharts-radial-axis-labels)`]) td(a, c);
          for (let l of a) [].forEach.call(e.querySelectorAll(l), (c) => {
            (c.namespaceURI === o.SVG_NS ? o.box : o.box.parentNode).appendChild(c), c.style.pointerEvents = "auto";
          });
        }
      }
      $r.fixedSelectors = [".highcharts-breadcrumbs-group", ".highcharts-contextbutton", ".highcharts-caption", ".highcharts-credits", ".highcharts-drillup-button", ".highcharts-legend", ".highcharts-legend-checkbox", ".highcharts-navigator-series", ".highcharts-navigator-xaxis", ".highcharts-navigator-yaxis", ".highcharts-navigator", ".highcharts-range-selector-group", ".highcharts-reset-zoom", ".highcharts-scrollbar", ".highcharts-subtitle", ".highcharts-title"];
      let { format: id } = he, { series: sd } = qt, { destroyObjectProperties: rd, fireEvent: gh, getAlignFactor: vl, isNumber: kl, pick: Zr } = J, fh = class {
        constructor(h, t, e, i, s) {
          let r = h.chart.inverted, o = h.reversed;
          this.axis = h;
          let a = this.isNegative = !!e != !!o;
          this.options = t = t || {}, this.x = i, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = !1, this.stack = s, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = { align: t.align || (r ? a ? "left" : "right" : "center"), verticalAlign: t.verticalAlign || (r ? "middle" : a ? "bottom" : "top"), y: t.y, x: t.x }, this.textAlign = t.textAlign || (r ? a ? "right" : "left" : "center");
        }
        destroy() {
          rd(this, this.axis);
        }
        render(h) {
          let t = this.axis.chart, e = this.options, i = e.format, s = i ? id(i, this, t) : e.formatter.call(this);
          if (this.label) this.label.attr({ text: s, visibility: "hidden" });
          else {
            this.label = t.renderer.label(s, null, void 0, e.shape, void 0, void 0, e.useHTML, !1, "stack-labels");
            let r = { r: e.borderRadius || 0, text: s, padding: Zr(e.padding, 5), visibility: "hidden" };
            t.styledMode || (r.fill = e.backgroundColor, r.stroke = e.borderColor, r["stroke-width"] = e.borderWidth, this.label.css(e.style || {})), this.label.attr(r), this.label.added || this.label.add(h);
          }
          this.label.labelrank = t.plotSizeY, gh(this, "afterRender");
        }
        setOffset(h, t, e, i, s, r) {
          let { alignOptions: o, axis: a, label: l, options: c, textAlign: f } = this, d = a.chart, m = this.getStackBox({ xOffset: h, width: t, boxBottom: e, boxTop: i, defaultX: s, xAxis: r }), { verticalAlign: x } = o;
          if (l && m) {
            let y = l.getBBox(void 0, 0), M = l.padding, w = Zr(c.overflow, "justify") === "justify", v;
            o.x = c.x || 0, o.y = c.y || 0;
            let { x: T, y: S } = this.adjustStackPosition({ labelBox: y, verticalAlign: x, textAlign: f });
            m.x -= T, m.y -= S, l.align(o, !1, m), (v = d.isInsidePlot(l.alignAttr.x + o.x + T, l.alignAttr.y + o.y + S)) || (w = !1), w && sd.prototype.justifyDataLabel.call(a, l, o, l.alignAttr, y, m), l.attr({ x: l.alignAttr.x, y: l.alignAttr.y, rotation: c.rotation, rotationOriginX: y.width * vl(c.textAlign || "center"), rotationOriginY: y.height / 2 }), Zr(!w && c.crop, !0) && (v = kl(l.x) && kl(l.y) && d.isInsidePlot(l.x - M + (l.width || 0), l.y) && d.isInsidePlot(l.x + M, l.y)), l[v ? "show" : "hide"]();
          }
          gh(this, "afterSetOffset", { xOffset: h, width: t });
        }
        adjustStackPosition({ labelBox: h, verticalAlign: t, textAlign: e }) {
          return { x: h.width / 2 + h.width / 2 * (2 * vl(e) - 1), y: h.height / 2 * 2 * (1 - vl(t)) };
        }
        getStackBox(h) {
          let t = this.axis, e = t.chart, { boxTop: i, defaultX: s, xOffset: r, width: o, boxBottom: a } = h, l = t.stacking.usePercentage ? 100 : Zr(i, this.total, 0), c = t.toPixels(l), f = h.xAxis || e.xAxis[0], d = Zr(s, f.translate(this.x)) + r, m = Math.abs(c - t.toPixels(a || kl(t.min) && t.logarithmic && t.logarithmic.lin2log(t.min) || 0)), x = e.inverted, y = this.isNegative;
          return x ? { x: (y ? c : c - m) - e.plotLeft, y: f.height - d - o + f.top - e.plotTop, width: m, height: o } : { x: d + f.transB - e.plotLeft, y: (y ? c - m : c) - e.plotTop, width: o, height: m };
        }
      }, { getDeferredAnimation: od } = $t, { series: { prototype: ad } } = qt, { addEvent: mh, correctFloat: _r, defined: xh, destroyObjectProperties: nd, fireEvent: ld, isNumber: wl, objectEach: cs, pick: Ml } = J;
      function hd() {
        let h = this.inverted;
        this.axes.forEach((t) => {
          t.stacking?.stacks && t.hasVisibleSeries && (t.stacking.oldStacks = t.stacking.stacks);
        }), this.series.forEach((t) => {
          let e = t.xAxis?.options || {};
          t.options.stacking && t.reserveSpace() && (t.stackKey = [t.type, Ml(t.options.stack, ""), h ? e.top : e.left, h ? e.height : e.width].join(","));
        });
      }
      function cd() {
        let h = this.stacking;
        if (h) {
          let t = h.stacks;
          cs(t, (e, i) => {
            nd(e), delete t[i];
          }), h.stackTotalGroup?.destroy();
        }
      }
      function dd() {
        this.stacking || (this.stacking = new xd(this));
      }
      function pd(h, t, e, i) {
        return !xh(h) || h.x !== t || i && h.stackKey !== i ? h = { x: t, index: 0, key: i, stackKey: i } : h.index++, h.key = [e, t, h.index].join(","), h;
      }
      function ud() {
        let h, t = this, e = t.yAxis, i = t.stackKey || "", s = e.stacking.stacks, r = t.getColumn("x", !0), o = t.options.stacking, a = t[o + "Stacker"];
        a && [i, "-" + i].forEach((l) => {
          let c = r.length, f, d, m;
          for (; c--; ) f = r[c], h = t.getStackIndicator(h, f, t.index, l), d = s[l]?.[f], (m = d?.points[h.key || ""]) && a.call(t, m, d, c);
        });
      }
      function gd(h, t, e) {
        let i = t.total ? 100 / t.total : 0;
        h[0] = _r(h[0] * i), h[1] = _r(h[1] * i), this.stackedYData[e] = h[1];
      }
      function fd(h) {
        (this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && this.chart.series.length > 1 ? ad.setStackedPoints.call(this, h, "group") : h.stacking.resetStacks());
      }
      function md(h, t) {
        let e, i, s, r, o, a, l, c = t || this.options.stacking;
        if (!c || !this.reserveSpace() || ({ group: "xAxis" }[c] || "yAxis") !== h.coll) return;
        let f = this.getColumn("x", !0), d = this.getColumn(this.pointValKey || "y", !0), m = [], x = d.length, y = this.options, M = y.threshold || 0, w = y.startFromThreshold ? M : 0, v = y.stack, T = t ? `${this.type},${c}` : this.stackKey || "", S = "-" + T, O = this.negStacks, L = h.stacking, D = L.stacks, N = L.oldStacks;
        for (L.stacksTouched += 1, l = 0; l < x; l++) {
          let I = f[l] || 0, W = d[l], j = wl(W) && W || 0;
          a = (e = this.getStackIndicator(e, I, this.index)).key || "", D[o = (i = O && j < (w ? 0 : M)) ? S : T] || (D[o] = {}), D[o][I] || (N[o]?.[I] ? (D[o][I] = N[o][I], D[o][I].total = null) : D[o][I] = new fh(h, h.options.stackLabels, !!i, I, v)), s = D[o][I], W !== null ? (s.points[a] = s.points[this.index] = [Ml(s.cumulative, w)], xh(s.cumulative) || (s.base = a), s.touched = L.stacksTouched, e.index > 0 && this.singleStacks === !1 && (s.points[a][0] = s.points[this.index + "," + I + ",0"][0])) : (delete s.points[a], delete s.points[this.index]);
          let H = s.total || 0;
          c === "percent" ? (r = i ? T : S, H = O && D[r]?.[I] ? (r = D[r][I]).total = Math.max(r.total || 0, H) + Math.abs(j) : _r(H + Math.abs(j))) : c === "group" ? wl(W) && H++ : H = _r(H + j), c === "group" ? s.cumulative = (H || 1) - 1 : s.cumulative = _r(Ml(s.cumulative, w) + j), s.total = H, W !== null && (s.points[a].push(s.cumulative), m[l] = s.cumulative, s.hasValidPoints = !0);
        }
        c === "percent" && (L.usePercentage = !0), c !== "group" && (this.stackedYData = m), L.oldStacks = {};
      }
      class xd {
        constructor(t) {
          this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = t;
        }
        buildStacks() {
          let t, e, i = this.axis, s = i.series, r = i.coll === "xAxis", o = i.options.reversedStacks, a = s.length;
          for (this.resetStacks(), this.usePercentage = !1, e = a; e--; ) t = s[o ? e : a - e - 1], r && t.setGroupedPoints(i), t.setStackedPoints(i);
          if (!r) for (e = 0; e < a; e++) s[e].modifyStacks();
          ld(i, "afterBuildStacks");
        }
        cleanStacks() {
          this.oldStacks && (this.stacks = this.oldStacks, cs(this.stacks, (t) => {
            cs(t, (e) => {
              e.cumulative = e.total;
            });
          }));
        }
        resetStacks() {
          cs(this.stacks, (t) => {
            cs(t, (e, i) => {
              wl(e.touched) && e.touched < this.stacksTouched ? (e.destroy(), delete t[i]) : (e.total = null, e.cumulative = null);
            });
          });
        }
        renderStackTotals() {
          let t = this.axis, e = t.chart, i = e.renderer, s = this.stacks, r = od(e, t.options.stackLabels?.animation || !1), o = this.stackTotalGroup = this.stackTotalGroup || i.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add();
          o.translate(e.plotLeft, e.plotTop), cs(s, (a) => {
            cs(a, (l) => {
              l.render(o);
            });
          }), o.animate({ opacity: 1 }, r);
        }
      }
      (Le || (Le = {})).compose = function(h, t, e) {
        let i = t.prototype, s = e.prototype;
        i.getStacks || (mh(h, "init", dd), mh(h, "destroy", cd), i.getStacks = hd, s.getStackIndicator = pd, s.modifyStacks = ud, s.percentStacker = gd, s.setGroupedPoints = fd, s.setStackedPoints = md);
      };
      let bd = Le, { defined: yd, merge: bh, isObject: vd } = J;
      class yh extends Ce {
        drawGraph() {
          let t = this.options, e = (this.gappedPath || this.getGraphPath).call(this), i = this.chart.styledMode;
          [this, ...this.zones].forEach((s, r) => {
            let o, a = s.graph, l = a ? "animate" : "attr", c = s.dashStyle || t.dashStyle;
            a ? (a.endX = this.preventGraphAnimation ? null : e.xMap, a.animate({ d: e })) : e.length && (s.graph = a = this.chart.renderer.path(e).addClass("highcharts-graph" + (r ? ` highcharts-zone-graph-${r - 1} ` : " ") + (r && s.className || "")).attr({ zIndex: 1 }).add(this.group)), a && !i && (o = { stroke: !r && t.lineColor || s.color || this.color || "#cccccc", "stroke-width": t.lineWidth || 0, fill: this.fillGraph && this.color || "none" }, c ? o.dashstyle = c : t.linecap !== "square" && (o["stroke-linecap"] = o["stroke-linejoin"] = "round"), a[l](o).shadow(t.shadow && bh({ filterUnits: "userSpaceOnUse" }, vd(t.shadow) ? t.shadow : {}))), a && (a.startX = e.xMap, a.isArea = e.isArea);
          });
        }
        getGraphPath(t, e, i) {
          let s = this, r = s.options, o = [], a = [], l, c = r.step, f = (t = t || s.points).reversed;
          return f && t.reverse(), (c = { right: 1, center: 2 }[c] || c && 3) && f && (c = 4 - c), (t = this.getValidPoints(t, !1, r.nullInteraction || !(r.connectNulls && !e && !i))).forEach(function(d, m) {
            let x, y = d.plotX, M = d.plotY, w = t[m - 1], v = d.isNull || typeof M != "number";
            (d.leftCliff || w?.rightCliff) && !i && (l = !0), v && !yd(e) && m > 0 ? l = !r.connectNulls : v && !e ? l = !0 : (m === 0 || l ? x = [["M", d.plotX, d.plotY]] : s.getPointSpline ? x = [s.getPointSpline(t, d, m)] : c ? (x = c === 1 ? [["L", w.plotX, M]] : c === 2 ? [["L", (w.plotX + y) / 2, w.plotY], ["L", (w.plotX + y) / 2, M]] : [["L", y, w.plotY]]).push(["L", y, M]) : x = [["L", y, M]], a.push(d.x), c && (a.push(d.x), c === 2 && a.push(d.x)), o.push.apply(o, x), l = !1);
          }), o.xMap = a, s.graphPath = o, o;
        }
      }
      yh.defaultOptions = bh(Ce.defaultOptions, { legendSymbol: "lineMarker" }), qt.registerSeriesType("line", yh);
      let { seriesTypes: { line: Cl } } = qt, { extend: kd, merge: wd, objectEach: Md, pick: Ca } = J;
      class Al extends Cl {
        drawGraph() {
          this.areaPath = [], super.drawGraph.apply(this);
          let { areaPath: t, options: e } = this;
          [this, ...this.zones].forEach((i, s) => {
            let r = {}, o = i.fillColor || e.fillColor, a = i.area, l = a ? "animate" : "attr";
            a ? (a.endX = this.preventGraphAnimation ? null : t.xMap, a.animate({ d: t })) : (r.zIndex = 0, (a = i.area = this.chart.renderer.path(t).addClass("highcharts-area" + (s ? ` highcharts-zone-area-${s - 1} ` : " ") + (s && i.className || "")).add(this.group)).isArea = !0), this.chart.styledMode || (r.fill = o || i.color || this.color, r["fill-opacity"] = o ? 1 : e.fillOpacity ?? 0.75, a.css({ pointerEvents: this.stickyTracking ? "none" : "auto" })), a[l](r), a.startX = t.xMap, a.shiftUnit = e.step ? 2 : 1;
          });
        }
        getGraphPath(t) {
          let e, i, s, r = Cl.prototype.getGraphPath, o = this.options, a = o.stacking, l = this.yAxis, c = [], f = [], d = this.index, m = l.stacking.stacks[this.stackKey], x = o.threshold, y = Math.round(l.getThreshold(o.threshold)), M = Ca(o.connectNulls, a === "percent"), w = function(D, N, I) {
            let W = t[D], j = a && m[W.x].points[d], H = W[I + "Null"] || 0, K = W[I + "Cliff"] || 0, Q, et, V = !0;
            K || H ? (Q = (H ? j[0] : j[1]) + K, et = j[0] + K, V = !!H) : !a && t[N] && t[N].isNull && (Q = et = x), Q !== void 0 && (f.push({ plotX: e, plotY: Q === null ? y : l.getThreshold(Q), isNull: V, isCliff: !0 }), c.push({ plotX: e, plotY: et === null ? y : l.getThreshold(et), doCurve: !1 }));
          };
          t = t || this.points, a && (t = this.getStackPoints(t));
          for (let D = 0, N = t.length; D < N; ++D) a || (t[D].leftCliff = t[D].rightCliff = t[D].leftNull = t[D].rightNull = void 0), i = t[D].isNull, e = Ca(t[D].rectPlotX, t[D].plotX), s = a ? Ca(t[D].yBottom, y) : y, (!i || M) && (M || w(D, D - 1, "left"), i && !a && M || (f.push(t[D]), c.push({ x: D, plotX: e, plotY: s })), M || w(D, D + 1, "right"));
          let v = r.call(this, f, !0, !0);
          c.reversed = !0;
          let T = r.call(this, c, !0, !0), S = T[0];
          S && S[0] === "M" && (T[0] = ["L", S[1], S[2]]);
          let O = v.concat(T);
          O.length && O.push(["Z"]);
          let L = r.call(this, f, !1, M);
          return this.chart.series.length > 1 && a && f.some((D) => D.isCliff) && (O.hasStackedCliffs = L.hasStackedCliffs = !0), O.xMap = v.xMap, this.areaPath = O, L;
        }
        getStackPoints(t) {
          let e = this, i = [], s = [], r = this.xAxis, o = this.yAxis, a = o.stacking.stacks[this.stackKey], l = {}, c = o.series, f = c.length, d = o.options.reversedStacks ? 1 : -1, m = c.indexOf(e);
          if (t = t || this.points, this.options.stacking) {
            for (let y = 0; y < t.length; y++) t[y].leftNull = t[y].rightNull = void 0, l[t[y].x] = t[y];
            Md(a, function(y, M) {
              y.total !== null && s.push(M);
            }), s.sort(function(y, M) {
              return y - M;
            });
            let x = c.map((y) => y.visible);
            s.forEach(function(y, M) {
              let w = 0, v, T;
              if (l[y] && !l[y].isNull) i.push(l[y]), [-1, 1].forEach(function(S) {
                let O = S === 1 ? "rightNull" : "leftNull", L = a[s[M + S]], D = 0;
                if (L) {
                  let N = m;
                  for (; N >= 0 && N < f; ) {
                    let I = c[N].index;
                    !(v = L.points[I]) && (I === e.index ? l[y][O] = !0 : x[N] && (T = a[y].points[I]) && (D -= T[1] - T[0])), N += d;
                  }
                }
                l[y][S === 1 ? "rightCliff" : "leftCliff"] = D;
              });
              else {
                let S = m;
                for (; S >= 0 && S < f; ) {
                  let O = c[S].index;
                  if (v = a[y].points[O]) {
                    w = v[1];
                    break;
                  }
                  S += d;
                }
                w = Ca(w, 0), w = o.translate(w, 0, 1, 0, 1), i.push({ isNull: !0, plotX: r.translate(y, 0, 0, 0, 1), x: y, plotY: w, yBottom: w });
              }
            });
          }
          return i;
        }
      }
      Al.defaultOptions = wd(Cl.defaultOptions, { threshold: 0, legendSymbol: "areaMarker" }), kd(Al.prototype, { singleStacks: !1 }), qt.registerSeriesType("area", Al);
      let { line: vh } = qt.seriesTypes, { merge: Cd, pick: Aa } = J;
      class Tl extends vh {
        getPointSpline(t, e, i) {
          let s, r, o, a, l = e.plotX || 0, c = e.plotY || 0, f = t[i - 1], d = t[i + 1];
          function m(y) {
            return y && !y.isNull && y.doCurve !== !1 && !e.isCliff;
          }
          if (m(f) && m(d)) {
            let y = f.plotX || 0, M = f.plotY || 0, w = d.plotX || 0, v = d.plotY || 0, T = 0;
            s = (1.5 * l + y) / 2.5, r = (1.5 * c + M) / 2.5, o = (1.5 * l + w) / 2.5, a = (1.5 * c + v) / 2.5, o !== s && (T = (a - r) * (o - l) / (o - s) + c - a), r += T, a += T, r > M && r > c ? (r = Math.max(M, c), a = 2 * c - r) : r < M && r < c && (r = Math.min(M, c), a = 2 * c - r), a > v && a > c ? (a = Math.max(v, c), r = 2 * c - a) : a < v && a < c && (a = Math.min(v, c), r = 2 * c - a), e.rightContX = o, e.rightContY = a, e.controlPoints = { low: [s, r], high: [o, a] };
          }
          let x = ["C", Aa(f.rightContX, f.plotX, 0), Aa(f.rightContY, f.plotY, 0), Aa(s, l, 0), Aa(r, c, 0), l, c];
          return f.rightContX = f.rightContY = void 0, x;
        }
      }
      Tl.defaultOptions = Cd(vh.defaultOptions), qt.registerSeriesType("spline", Tl);
      let kh = Tl, { area: Ad, area: { prototype: Sl } } = qt.seriesTypes, { extend: Td, merge: Sd } = J;
      class El extends kh {
      }
      El.defaultOptions = Sd(kh.defaultOptions, Ad.defaultOptions), Td(El.prototype, { getGraphPath: Sl.getGraphPath, getStackPoints: Sl.getStackPoints, drawGraph: Sl.drawGraph }), qt.registerSeriesType("areaspline", El);
      let { animObject: Ed } = $t, { parse: Pd } = Tt, { noop: Od } = X, { clamp: Ta, crisp: Sa, defined: wh, extend: Mh, fireEvent: Ch, isArray: Ah, isNumber: Ea, merge: Pl, pick: Jr, objectEach: Ld } = J;
      class Pa extends Ce {
        animate(t) {
          let e, i, s = this, r = this.yAxis, o = r.pos, a = r.reversed, l = s.options, { clipOffset: c, inverted: f } = this.chart, d = {}, m = f ? "translateX" : "translateY";
          t && c ? (d.scaleY = 1e-3, i = Ta(r.toPixels(l.threshold || 0), o, o + r.len), f ? d.translateX = (i += a ? -Math.floor(c[0]) : Math.ceil(c[2])) - r.len : d.translateY = i += a ? Math.ceil(c[0]) : -Math.floor(c[2]), s.clipBox && s.setClip(), s.group.attr(d)) : (e = Number(s.group.attr(m)), s.group.animate({ scaleY: 1 }, Mh(Ed(s.options.animation), { step: function(x, y) {
            s.group && (d[m] = e + y.pos * (o - e), s.group.attr(d));
          } })));
        }
        init(t, e) {
          super.init.apply(this, arguments);
          let i = this;
          (t = i.chart).hasRendered && t.series.forEach(function(s) {
            s.type === i.type && (s.isDirty = !0);
          });
        }
        getColumnMetrics() {
          let t = this, e = t.options, i = t.xAxis, s = t.yAxis, r = i.options.reversedStacks, o = i.reversed && !r || !i.reversed && r, a = {}, l, c = 0;
          e.grouping === !1 ? c = 1 : t.chart.series.forEach(function(M) {
            let w, v = M.yAxis, T = M.options;
            M.type === t.type && M.reserveSpace() && s.len === v.len && s.pos === v.pos && (T.stacking && T.stacking !== "group" ? (a[l = M.stackKey] === void 0 && (a[l] = c++), w = a[l]) : T.grouping !== !1 && (w = c++), M.columnIndex = w);
          });
          let f = Math.min(Math.abs(i.transA) * (!i.brokenAxis?.hasBreaks && i.ordinal?.slope || e.pointRange || i.closestPointRange || i.tickInterval || 1), i.len), d = f * e.groupPadding, m = (f - 2 * d) / (c || 1), x = Math.min(e.maxPointWidth || i.len, Jr(e.pointWidth, m * (1 - 2 * e.pointPadding))), y = (t.columnIndex || 0) + +!!o;
          return t.columnMetrics = { width: x, offset: (m - x) / 2 + (d + y * m - f / 2) * (o ? -1 : 1), paddedWidth: m, columnCount: c }, t.columnMetrics;
        }
        crispCol(t, e, i, s) {
          let r = this.borderWidth, o = this.chart.inverted;
          return s = Sa(e + s, r, o) - (e = Sa(e, r, o)), this.options.crisp && (i = Sa(t + i, r) - (t = Sa(t, r))), { x: t, y: e, width: i, height: s };
        }
        adjustForMissingColumns(t, e, i, s) {
          if (!i.isNull && s.columnCount > 1) {
            let r = this.xAxis.series.filter((c) => c.visible).map((c) => c.index), o = 0, a = 0;
            Ld(this.xAxis.stacking?.stacks, (c) => {
              let f = typeof i.x == "number" ? c[i.x.toString()]?.points : void 0, d = f?.[this.index], m = {};
              if (f && Ah(d)) {
                let x = this.index, y = Object.keys(f).filter((M) => !M.match(",") && f[M] && f[M].length > 1).map(parseFloat).filter((M) => r.indexOf(M) !== -1).filter((M) => {
                  let w = this.chart.series[M].options, v = w.stacking && w.stack;
                  if (wh(v)) {
                    if (Ea(m[v])) return x === M && (x = m[v]), !1;
                    m[v] = M;
                  }
                  return !0;
                }).sort((M, w) => w - M);
                o = y.indexOf(x), a = y.length;
              }
            }), o = this.xAxis.reversed ? a - 1 - o : o;
            let l = (a - 1) * s.paddedWidth + e;
            t = (i.plotX || 0) + l / 2 - e - o * s.paddedWidth;
          }
          return t;
        }
        translate() {
          let t = this, e = t.chart, i = t.options, s = t.dense = t.closestPointRange * t.xAxis.transA < 2, r = t.borderWidth = Jr(i.borderWidth, +!s), o = t.xAxis, a = t.yAxis, l = i.threshold, c = Jr(i.minPointLength, 5), f = t.getColumnMetrics(), d = f.width, m = t.pointXOffset = f.offset, x = t.dataMin, y = t.dataMax, M = t.translatedThreshold = a.getThreshold(l), w = t.barW = Math.max(d, 1 + 2 * r);
          i.pointPadding && i.crisp && (w = Math.ceil(w)), Ce.prototype.translate.apply(t), t.points.forEach(function(v) {
            let T = Jr(v.yBottom, M), S = 999 + Math.abs(T), O = v.plotX || 0, L = Ta(v.plotY, -S, a.len + S), D, N = Math.min(L, T), I = Math.max(L, T) - N, W = d, j = O + m, H = w;
            c && Math.abs(I) < c && (I = c, D = !a.reversed && !v.negative || a.reversed && v.negative, Ea(l) && Ea(y) && v.y === l && y <= l && (a.min || 0) < l && (x !== y || (a.max || 0) <= l) && (D = !D, v.negative = !v.negative), N = Math.abs(N - M) > c ? T - c : M - (D ? c : 0)), wh(v.options.pointWidth) && (j -= Math.round(((W = H = Math.ceil(v.options.pointWidth)) - d) / 2)), i.centerInCategory && (j = t.adjustForMissingColumns(j, W, v, f)), v.barX = j, v.pointWidth = W, v.tooltipPos = e.inverted ? [Ta(a.len + a.pos - e.plotLeft - L, a.pos - e.plotLeft, a.len + a.pos - e.plotLeft), o.len + o.pos - e.plotTop - j - H / 2, I] : [o.left - e.plotLeft + j + H / 2, Ta(L + a.pos - e.plotTop, a.pos - e.plotTop, a.len + a.pos - e.plotTop), I], v.shapeType = t.pointClass.prototype.shapeType || "roundedRect", v.shapeArgs = t.crispCol(j, N, H, v.isNull ? 0 : I);
          }), Ch(this, "afterColumnTranslate");
        }
        drawGraph() {
          this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
        }
        pointAttribs(t, e) {
          let i = this.options, s = this.pointAttrToOptions || {}, r = s.stroke || "borderColor", o = s["stroke-width"] || "borderWidth", a, l, c, f = t && t.color || this.color, d = t && t[r] || i[r] || f, m = t && t.options.dashStyle || i.dashStyle, x = t && t[o] || i[o] || this[o] || 0, y = t?.isNull && i.nullInteraction ? 0 : t?.opacity ?? i.opacity ?? 1;
          t && this.zones.length && (l = t.getZone(), f = t.options.color || l && (l.color || t.nonZonedColor) || this.color, l && (d = l.borderColor || d, m = l.dashStyle || m, x = l.borderWidth || x)), e && t && (c = (a = Pl(i.states[e], t.options.states && t.options.states[e] || {})).brightness, f = a.color || c !== void 0 && Pd(f).brighten(a.brightness).get() || f, d = a[r] || d, x = a[o] || x, m = a.dashStyle || m, y = Jr(a.opacity, y));
          let M = { fill: f, stroke: d, "stroke-width": x, opacity: y };
          return m && (M.dashstyle = m), M;
        }
        drawPoints(t = this.points) {
          let e, i = this, s = this.chart, r = i.options, o = r.nullInteraction, a = s.renderer, l = r.animationLimit || 250;
          t.forEach(function(c) {
            let f = c.plotY, d = c.graphic, m = !!d, x = d && s.pointCount < l ? "animate" : "attr";
            Ea(f) && (c.y !== null || o) ? (e = c.shapeArgs, d && c.hasNewShapeType() && (d = d.destroy()), i.enabledDataSorting && (c.startXPos = i.xAxis.reversed ? -(e && e.width || 0) : i.xAxis.width), !d && (c.graphic = d = a[c.shapeType](e).add(c.group || i.group), d && i.enabledDataSorting && s.hasRendered && s.pointCount < l && (d.attr({ x: c.startXPos }), m = !0, x = "animate")), d && m && d[x](Pl(e)), s.styledMode || d[x](i.pointAttribs(c, c.selected && "select")).shadow(c.allowShadow !== !1 && r.shadow), d && (d.addClass(c.getClassName(), !0), d.attr({ visibility: c.visible ? "inherit" : "hidden" }))) : d && (c.graphic = d.destroy());
          });
        }
        drawTracker(t = this.points) {
          let e, i = this, s = i.chart, r = s.pointer, o = function(a) {
            r?.normalize(a);
            let l = r?.getPointFromEvent(a);
            r && l && i.options.enableMouseTracking && (s.isInsidePlot(a.chartX - s.plotLeft, a.chartY - s.plotTop, { visiblePlotOnly: !0 }) || r?.inClass(a.target, "highcharts-data-label")) && (r.isDirectTouch = !0, l.onMouseOver(a));
          };
          t.forEach(function(a) {
            e = Ah(a.dataLabels) ? a.dataLabels : a.dataLabel ? [a.dataLabel] : [], a.graphic && (a.graphic.element.point = a), e.forEach(function(l) {
              (l.div || l.element).point = a;
            });
          }), i._hasTracking || (i.trackerGroups.forEach(function(a) {
            i[a] && (i[a].addClass("highcharts-tracker").on("mouseover", o).on("mouseout", function(l) {
              r?.onTrackerMouseOut(l);
            }).on("touchstart", o), !s.styledMode && i.options.cursor && i[a].css({ cursor: i.options.cursor }));
          }), i._hasTracking = !0), Ch(this, "afterDrawTracker");
        }
        remove() {
          let t = this, e = t.chart;
          e.hasRendered && e.series.forEach(function(i) {
            i.type === t.type && (i.isDirty = !0);
          }), Ce.prototype.remove.apply(t, arguments);
        }
      }
      Pa.defaultOptions = Pl(Ce.defaultOptions, { borderRadius: 3, centerInCategory: !1, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: 0.1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" }), Mh(Pa.prototype, { directTouch: !0, getSymbol: Od, negStacks: !0, trackerGroups: ["group", "dataLabelsGroup"] }), qt.registerSeriesType("column", Pa);
      let Oa = Pa, { getDeferredAnimation: Dd } = $t, { format: Id } = he, { defined: ds, extend: Th, fireEvent: Ol, getAlignFactor: Sh, isArray: Yi, isString: Qr, merge: to, objectEach: Bd, pick: eo, pInt: Nd, splat: Eh } = J;
      (function(h) {
        function t() {
          return l(this).some((f) => f?.enabled);
        }
        function e(f, d, m, x, y) {
          let { chart: M, enabledDataSorting: w } = this, v = this.isCartesian && M.inverted, T = f.plotX, S = f.plotY, O = m.rotation || 0, L = ds(T) && ds(S) && M.isInsidePlot(T, Math.round(S), { inverted: v, paneCoordinates: !0, series: this }), D = O === 0 && eo(m.overflow, w ? "none" : "justify") === "justify", N = this.visible && f.visible !== !1 && ds(T) && (f.series.forceDL || w && !D || L || eo(m.inside, !!this.options.stacking) && x && M.isInsidePlot(T, v ? x.x + 1 : x.y + x.height - 1, { inverted: v, paneCoordinates: !0, series: this })), I = f.pos();
          if (N && I) {
            var W;
            let j = d.getBBox(), H = d.getBBox(void 0, 0);
            if (x = Th({ x: I[0], y: Math.round(I[1]), width: 0, height: 0 }, x || {}), m.alignTo === "plotEdges" && this.isCartesian && (x[v ? "x" : "y"] = 0, x[v ? "width" : "height"] = this.yAxis?.len || 0), Th(m, { width: j.width, height: j.height }), W = x, w && this.xAxis && !D && this.setDataLabelStartPos(f, d, y, L, W), d.align(to(m, { width: H.width, height: H.height }), !1, x, !1), d.alignAttr.x += Sh(m.align) * (H.width - j.width), d.alignAttr.y += Sh(m.verticalAlign) * (H.height - j.height), d[d.placed ? "animate" : "attr"]({ "text-align": d.alignAttr["text-align"] || "center", x: d.alignAttr.x + (j.width - H.width) / 2, y: d.alignAttr.y + (j.height - H.height) / 2, rotationOriginX: (d.width || 0) / 2, rotationOriginY: (d.height || 0) / 2 }), D && x.height >= 0) this.justifyDataLabel(d, m, d.alignAttr, j, x, y);
            else if (eo(m.crop, !0)) {
              let { x: K, y: Q } = d.alignAttr;
              N = M.isInsidePlot(K, Q, { paneCoordinates: !0, series: this }) && M.isInsidePlot(K + j.width - 1, Q + j.height - 1, { paneCoordinates: !0, series: this });
            }
            m.shape && !O && d[y ? "attr" : "animate"]({ anchorX: I[0], anchorY: I[1] });
          }
          y && w && (d.placed = !1), N || w && !D ? (d.show(), d.placed = !0) : (d.hide(), d.placed = !1);
        }
        function i() {
          return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6, this.chart.dataLabelsGroup);
        }
        function s(f) {
          let d = this.hasRendered || 0, m = this.initDataLabelsGroup().attr({ opacity: +d });
          return !d && m && (this.visible && m.show(), this.options.animation ? m.animate({ opacity: 1 }, f) : m.attr({ opacity: 1 })), m;
        }
        function r(f) {
          let d;
          f = f || this.points;
          let m = this, x = m.chart, y = m.options, M = x.renderer, { backgroundColor: w, plotBackgroundColor: v } = x.options.chart, T = M.getContrast(Qr(v) && v || Qr(w) && w || "#000000"), S = l(m), { animation: O, defer: L } = S[0], D = L ? Dd(x, O, m) : { defer: 0, duration: 0 };
          Ol(this, "drawDataLabels"), m.hasDataLabels?.() && (d = this.initDataLabels(D), f.forEach((N) => {
            let I = N.dataLabels || [], W = N.color || m.color;
            Eh(a(S, N.dlOptions || N.options?.dataLabels)).forEach((H, K) => {
              let Q = H.enabled && (N.visible || N.dataLabelOnHidden) && (!N.isNull || N.dataLabelOnNull) && (function(Pt, Ot) {
                let vt = Ot.filter;
                if (vt) {
                  let jt = vt.operator, be = Pt[vt.property], Ae = vt.value;
                  return jt === ">" && be > Ae || jt === "<" && be < Ae || jt === ">=" && be >= Ae || jt === "<=" && be <= Ae || jt === "==" && be == Ae || jt === "===" && be === Ae || jt === "!=" && be != Ae || jt === "!==" && be !== Ae || !1;
                }
                return !0;
              })(N, H), { backgroundColor: et, borderColor: V, distance: Z, style: tt = {} } = H, St, gt, xe, at = {}, ot = I[K], yt = !ot, pt;
              Q && (gt = ds(St = eo(H[N.formatPrefix + "Format"], H.format)) ? Id(St, N, x) : (H[N.formatPrefix + "Formatter"] || H.formatter).call(N, H), xe = H.rotation, !x.styledMode && (tt.color = eo(H.color, tt.color, Qr(m.color) ? m.color : void 0, "#000000"), tt.color === "contrast" ? (et !== "none" && (pt = et), N.contrastColor = M.getContrast(pt !== "auto" && Qr(pt) && pt || (Qr(W) ? W : "")), tt.color = pt || !ds(Z) && H.inside || 0 > Nd(Z || 0) || y.stacking ? N.contrastColor : T) : delete N.contrastColor, y.cursor && (tt.cursor = y.cursor)), at = { r: H.borderRadius || 0, rotation: xe, padding: H.padding, zIndex: 1 }, x.styledMode || (at.fill = et === "auto" ? N.color : et, at.stroke = V === "auto" ? N.color : V, at["stroke-width"] = H.borderWidth), Bd(at, (Pt, Ot) => {
                Pt === void 0 && delete at[Ot];
              })), !ot || Q && ds(gt) && !!(ot.div || ot.text?.foreignObject) == !!H.useHTML && (ot.rotation && H.rotation || ot.rotation === H.rotation) || (ot = void 0, yt = !0), Q && ds(gt) && gt !== "" && (ot ? at.text = gt : (ot = M.label(gt, 0, 0, H.shape, void 0, void 0, H.useHTML, void 0, "data-label")).addClass(" highcharts-data-label-color-" + N.colorIndex + " " + (H.className || "") + (H.useHTML ? " highcharts-tracker" : "")), ot && (ot.options = H, ot.attr(at), x.styledMode ? tt.width && ot.css({ width: tt.width, textOverflow: tt.textOverflow, whiteSpace: tt.whiteSpace }) : ot.css(tt).shadow(H.shadow), Ol(ot, "beforeAddingDataLabel", { labelOptions: H, point: N }), ot.added || ot.add(d), m.alignDataLabel(N, ot, H, void 0, yt), ot.isActive = !0, I[K] && I[K] !== ot && I[K].destroy(), I[K] = ot));
            });
            let j = I.length;
            for (; j--; ) I[j]?.isActive ? I[j].isActive = !1 : (I[j]?.destroy(), I.splice(j, 1));
            N.dataLabel = I[0], N.dataLabels = I;
          })), Ol(this, "afterDrawDataLabels");
        }
        function o(f, d, m, x, y, M) {
          let w = this.chart, v = d.align, T = d.verticalAlign, S = f.box ? 0 : f.padding || 0, O = w.inverted ? this.yAxis : this.xAxis, L = O ? O.left - w.plotLeft : 0, D = w.inverted ? this.xAxis : this.yAxis, N = D ? D.top - w.plotTop : 0, { x: I = 0, y: W = 0 } = d, j, H;
          return (j = (m.x || 0) + S + L) < 0 && (v === "right" && I >= 0 ? (d.align = "left", d.inside = !0) : I -= j, H = !0), (j = (m.x || 0) + x.width - S + L) > w.plotWidth && (v === "left" && I <= 0 ? (d.align = "right", d.inside = !0) : I += w.plotWidth - j, H = !0), (j = m.y + S + N) < 0 && (T === "bottom" && W >= 0 ? (d.verticalAlign = "top", d.inside = !0) : W -= j, H = !0), (j = (m.y || 0) + x.height - S + N) > w.plotHeight && (T === "top" && W <= 0 ? (d.verticalAlign = "bottom", d.inside = !0) : W += w.plotHeight - j, H = !0), H && (d.x = I, d.y = W, f.placed = !M, f.align(d, void 0, y)), H;
        }
        function a(f, d) {
          let m = [], x;
          if (Yi(f) && !Yi(d)) m = f.map(function(y) {
            return to(y, d);
          });
          else if (Yi(d) && !Yi(f)) m = d.map(function(y) {
            return to(f, y);
          });
          else if (Yi(f) || Yi(d)) {
            if (Yi(f) && Yi(d)) for (x = Math.max(f.length, d.length); x--; ) m[x] = to(f[x], d[x]);
          } else m = to(f, d);
          return m;
        }
        function l(f) {
          let d = f.chart.options.plotOptions;
          return Eh(a(a(d?.series?.dataLabels, d?.[f.type]?.dataLabels), f.options.dataLabels));
        }
        function c(f, d, m, x, y) {
          let M = this.chart, w = M.inverted, v = this.xAxis, T = v.reversed, S = ((w ? d.height : d.width) || 0) / 2, O = f.pointWidth, L = O ? O / 2 : 0;
          d.startXPos = w ? y.x : T ? -S - L : v.width - S + L, d.startYPos = w ? T ? this.yAxis.height - S + L : -S - L : y.y, x ? d.visibility === "hidden" && (d.show(), d.attr({ opacity: 0 }).animate({ opacity: 1 })) : d.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, d.hide), M.hasRendered && (m && d.attr({ x: d.startXPos, y: d.startYPos }), d.placed = !0);
        }
        h.compose = function(f) {
          let d = f.prototype;
          d.initDataLabels || (d.initDataLabels = s, d.initDataLabelsGroup = i, d.alignDataLabel = e, d.drawDataLabels = r, d.justifyDataLabel = o, d.mergeArrays = a, d.setDataLabelStartPos = c, d.hasDataLabels = t);
        };
      })(kt || (kt = {}));
      let La = kt, { composed: Rd } = X, { series: Ph } = qt, { merge: zd, pushUnique: Fd } = J;
      (function(h) {
        function t(e, i, s, r, o) {
          let { chart: a, options: l } = this, c = a.inverted, f = this.xAxis?.len || a.plotSizeX || 0, d = this.yAxis?.len || a.plotSizeY || 0, m = e.dlBox || e.shapeArgs, x = e.below ?? (e.plotY || 0) > (this.translatedThreshold ?? d), y = s.inside ?? !!l.stacking;
          if (m) {
            if (r = zd(m), s.overflow !== "allow" || s.crop !== !1 || l.clip !== !1) {
              r.y < 0 && (r.height += r.y, r.y = 0);
              let M = r.y + r.height - d;
              M > 0 && M < r.height - 1 && (r.height -= M);
            }
            c && (r = { x: d - r.y - r.height, y: f - r.x - r.width, width: r.height, height: r.width }), y || (c ? (r.x += x ? 0 : r.width, r.width = 0) : (r.y += x ? r.height : 0, r.height = 0));
          }
          s.align ?? (s.align = !c || y ? "center" : x ? "right" : "left"), s.verticalAlign ?? (s.verticalAlign = c || y ? "middle" : x ? "top" : "bottom"), Ph.prototype.alignDataLabel.call(this, e, i, s, r, o), s.inside && e.contrastColor && i.css({ color: e.contrastColor });
        }
        h.compose = function(e) {
          La.compose(Ph), Fd(Rd, "ColumnDataLabel") && (e.prototype.alignDataLabel = t);
        };
      })(Rt || (Rt = {}));
      let Hd = Rt, { extend: Wd, merge: Xd } = J;
      class Ll extends Oa {
      }
      Ll.defaultOptions = Xd(Oa.defaultOptions, {}), Wd(Ll.prototype, { inverted: !0 }), qt.registerSeriesType("bar", Ll);
      let { column: Gd, line: Oh } = qt.seriesTypes, { addEvent: Yd, extend: jd, merge: Ud } = J;
      class Da extends Oh {
        applyJitter() {
          let t = this, e = this.options.jitter, i = this.points.length;
          e && this.points.forEach(function(s, r) {
            ["x", "y"].forEach(function(o, a) {
              if (e[o] && !s.isNull) {
                let l = `plot${o.toUpperCase()}`, c = t[`${o}Axis`], f = e[o] * c.transA;
                if (c && !c.logarithmic) {
                  let d = Math.max(0, (s[l] || 0) - f), m = Math.min(c.len, (s[l] || 0) + f);
                  s[l] = d + (m - d) * (function(x) {
                    let y = 1e4 * Math.sin(x);
                    return y - Math.floor(y);
                  })(r + a * i), o === "x" && (s.clientX = s.plotX);
                }
              }
            });
          });
        }
        drawGraph() {
          this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy());
        }
      }
      Da.defaultOptions = Ud(Oh.defaultOptions, { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: { headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } }), jd(Da.prototype, { drawTracker: Gd.prototype.drawTracker, sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"] }), Yd(Da, "afterTranslate", function() {
        this.applyJitter();
      }), qt.registerSeriesType("scatter", Da);
      let { deg2rad: Lh } = X, { fireEvent: Vd, isNumber: Dl, pick: Ia, relativeLength: qd } = J;
      (function(h) {
        h.getCenter = function() {
          let t = this.options, e = this.chart, i = 2 * (t.slicedOffset || 0), s = e.plotWidth - 2 * i, r = e.plotHeight - 2 * i, o = t.center, a = Math.min(s, r), l = t.thickness, c, f = t.size, d = t.innerSize || 0, m, x;
          typeof f == "string" && (f = parseFloat(f)), typeof d == "string" && (d = parseFloat(d));
          let y = [Ia(o?.[0], "50%"), Ia(o?.[1], "50%"), Ia(f && f < 0 ? void 0 : t.size, "100%"), Ia(d && d < 0 ? void 0 : t.innerSize || 0, "0%")];
          for (!e.angular || this instanceof Ce || (y[3] = 0), m = 0; m < 4; ++m) x = y[m], c = m < 2 || m === 2 && /%$/.test(x), y[m] = qd(x, [s, r, a, y[2]][m]) + (c ? i : 0);
          return y[3] > y[2] && (y[3] = y[2]), Dl(l) && 2 * l < y[2] && l > 0 && (y[3] = y[2] - 2 * l), Vd(this, "afterGetCenter", { positions: y }), y;
        }, h.getStartAndEndRadians = function(t, e) {
          let i = Dl(t) ? t : 0, s = Dl(e) && e > i && e - i < 360 ? e : i + 360;
          return { start: Lh * (i + -90), end: Lh * (s + -90) };
        };
      })(le || (le = {}));
      let Dh = le, { setAnimation: Kd } = $t, { addEvent: Ih, defined: $d, extend: Zd, isNumber: _d, pick: Jd, relativeLength: Qd } = J;
      class Bh extends Vt {
        getConnectorPath(t) {
          let e = t.dataLabelPosition, i = t.options || {}, s = i.connectorShape, r = this.connectorShapes[s] || s;
          return e && r.call(this, { ...e.computed, alignment: e.alignment }, e.connectorPosition, i) || [];
        }
        getTranslate() {
          return this.sliced && this.slicedTranslation || { translateX: 0, translateY: 0 };
        }
        haloPath(t) {
          let e = this.shapeArgs;
          return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, { innerR: e.r - 1, start: e.start, end: e.end, borderRadius: e.borderRadius });
        }
        constructor(t, e, i) {
          super(t, e, i), this.half = 0, this.name ?? (this.name = t.chart.options.lang.pieSliceName);
          let s = (r) => {
            this.slice(r.type === "select");
          };
          Ih(this, "select", s), Ih(this, "unselect", s);
        }
        isValid() {
          return _d(this.y) && this.y >= 0;
        }
        setVisible(t, e = !0) {
          t !== this.visible && this.update({ visible: t ?? !this.visible }, e, void 0, !1);
        }
        slice(t, e, i) {
          let s = this.series;
          Kd(i, s.chart), e = Jd(e, !0), this.sliced = this.options.sliced = t = $d(t) ? t : !this.sliced, s.options.data[s.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate());
        }
      }
      Zd(Bh.prototype, { connectorShapes: { fixedOffset: function(h, t, e) {
        let i = t.breakAt, s = t.touchingSliceAt, r = e.softConnector ? ["C", h.x + (h.alignment === "left" ? -5 : 5), h.y, 2 * i.x - s.x, 2 * i.y - s.y, i.x, i.y] : ["L", i.x, i.y];
        return [["M", h.x, h.y], r, ["L", s.x, s.y]];
      }, straight: function(h, t) {
        let e = t.touchingSliceAt;
        return [["M", h.x, h.y], ["L", e.x, e.y]];
      }, crookedLine: function(h, t, e) {
        let { angle: i = this.angle || 0, breakAt: s, touchingSliceAt: r } = t, { series: o } = this, [a, l, c] = o.center, f = c / 2, { plotLeft: d, plotWidth: m } = o.chart, x = h.alignment === "left", { x: y, y: M } = h, w = s.x;
        if (e.crookDistance) {
          let T = Qd(e.crookDistance, 1);
          w = x ? a + f + (m + d - a - f) * (1 - T) : d + (a - f) * T;
        } else w = a + (l - M) * Math.tan(i - Math.PI / 2);
        let v = [["M", y, M]];
        return (x ? w <= y && w >= s.x : w >= y && w <= s.x) && v.push(["L", w, M]), v.push(["L", s.x, s.y], ["L", r.x, r.y]), v;
      } } });
      let { getStartAndEndRadians: tp } = Dh, { noop: Nh } = X, { clamp: ep, extend: ip, fireEvent: Rh, merge: Il, pick: sp } = J;
      class Bl extends Ce {
        animate(t) {
          let e = this, i = e.points, s = e.startAngleRad;
          t || i.forEach(function(r) {
            let o = r.graphic, a = r.shapeArgs;
            o && a && (o.attr({ r: sp(r.startR, e.center && e.center[3] / 2), start: s, end: s }), o.animate({ r: a.r, start: a.start, end: a.end }, e.options.animation));
          });
        }
        drawEmpty() {
          let t, e, i = this.startAngleRad, s = this.endAngleRad, r = this.options;
          this.total === 0 && this.center ? (t = this.center[0], e = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(t, e, this.center[1] / 2, 0, i, s).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({ d: oi.arc(t, e, this.center[2] / 2, 0, { start: i, end: s, innerR: this.center[3] / 2 }) }), this.chart.styledMode || this.graph.attr({ "stroke-width": r.borderWidth, fill: r.fillColor || "none", stroke: r.color || "#cccccc" })) : this.graph && (this.graph = this.graph.destroy());
        }
        drawPoints() {
          let t = this.chart.renderer;
          this.points.forEach(function(e) {
            e.graphic && e.hasNewShapeType() && (e.graphic = e.graphic.destroy()), e.graphic || (e.graphic = t[e.shapeType](e.shapeArgs).add(e.series.group), e.delayedRendering = !0);
          });
        }
        generatePoints() {
          super.generatePoints(), this.updateTotals();
        }
        getX(t, e, i, s) {
          let r = this.center, o = this.radii ? this.radii[i.index] || 0 : r[2] / 2, a = s.dataLabelPosition, l = a?.distance || 0, c = Math.asin(ep((t - r[1]) / (o + l), -1, 1));
          return r[0] + Math.cos(c) * (o + l) * (e ? -1 : 1) + (l > 0 ? (e ? -1 : 1) * (s.padding || 0) : 0);
        }
        hasData() {
          return this.points.some((t) => t.visible);
        }
        redrawPoints() {
          let t, e, i, s, r = this, o = r.chart;
          this.drawEmpty(), r.group && !o.styledMode && r.group.shadow(r.options.shadow), r.points.forEach(function(a) {
            let l = {};
            e = a.graphic, !a.isNull && e ? (s = a.shapeArgs, t = a.getTranslate(), o.styledMode || (i = r.pointAttribs(a, a.selected && "select")), a.delayedRendering ? (e.setRadialReference(r.center).attr(s).attr(t), o.styledMode || e.attr(i).attr({ "stroke-linejoin": "round" }), a.delayedRendering = !1) : (e.setRadialReference(r.center), o.styledMode || Il(!0, l, i), Il(!0, l, s, t), e.animate(l)), e.attr({ visibility: a.visible ? "inherit" : "hidden" }), e.addClass(a.getClassName(), !0)) : e && (a.graphic = e.destroy());
          });
        }
        sortByAngle(t, e) {
          t.sort(function(i, s) {
            return i.angle !== void 0 && (s.angle - i.angle) * e;
          });
        }
        translate(t) {
          Rh(this, "translate"), this.generatePoints();
          let e = this.options, i = e.slicedOffset, s = tp(e.startAngle, e.endAngle), r = this.startAngleRad = s.start, o = (this.endAngleRad = s.end) - r, a = this.points, l = e.ignoreHiddenPoint, c = a.length, f, d, m, x, y, M, w, v = 0;
          for (t || (this.center = t = this.getCenter()), M = 0; M < c; M++) {
            w = a[M], f = r + v * o, w.isValid() && (!l || w.visible) && (v += w.percentage / 100), d = r + v * o;
            let T = { x: t[0], y: t[1], r: t[2] / 2, innerR: t[3] / 2, start: Math.round(1e3 * f) / 1e3, end: Math.round(1e3 * d) / 1e3 };
            w.shapeType = "arc", w.shapeArgs = T, (m = (d + f) / 2) > 1.5 * Math.PI ? m -= 2 * Math.PI : m < -Math.PI / 2 && (m += 2 * Math.PI), w.slicedTranslation = { translateX: Math.round(Math.cos(m) * i), translateY: Math.round(Math.sin(m) * i) }, x = Math.cos(m) * t[2] / 2, y = Math.sin(m) * t[2] / 2, w.tooltipPos = [t[0] + 0.7 * x, t[1] + 0.7 * y], w.half = +(m < -Math.PI / 2 || m > Math.PI / 2), w.angle = m;
          }
          Rh(this, "afterTranslate");
        }
        updateTotals() {
          let t = this.points, e = t.length, i = this.options.ignoreHiddenPoint, s, r, o = 0;
          for (s = 0; s < e; s++) (r = t[s]).isValid() && (!i || r.visible) && (o += r.y);
          for (s = 0, this.total = o; s < e; s++) (r = t[s]).percentage = o > 0 && (r.visible || !i) ? r.y / o * 100 : 0, r.total = o;
        }
      }
      Bl.defaultOptions = Il(Ce.defaultOptions, { borderRadius: 3, center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { connectorPadding: 5, connectorShape: "crookedLine", crookDistance: void 0, distance: 30, enabled: !0, formatter: function() {
        return this.isNull ? void 0 : this.name;
      }, softConnector: !0, x: 0 }, fillColor: void 0, ignoreHiddenPoint: !0, inactiveOtherPoints: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: 0.1 } } }), ip(Bl.prototype, { axisTypes: [], directTouch: !0, drawGraph: void 0, drawTracker: Oa.prototype.drawTracker, getCenter: Dh.getCenter, getSymbol: Nh, invertible: !1, isCartesian: !1, noSharedTooltip: !0, pointAttribs: Oa.prototype.pointAttribs, pointClass: Bh, requireSorting: !1, searchPoint: Nh, trackerGroups: ["group", "dataLabelsGroup"] }), qt.registerSeriesType("pie", Bl);
      let { composed: rp, noop: op } = X, { distribute: ap } = ws, { series: zh } = qt, { arrayMax: np, clamp: Fh, defined: Hh, isNumber: lp, pick: hp, pushUnique: cp, relativeLength: Wh } = J;
      (function(h) {
        let t = { radialDistributionY: function(o, a) {
          return (a.dataLabelPosition?.top || 0) + o.distributeBox.pos;
        }, radialDistributionX: function(o, a, l, c, f) {
          let d = f.dataLabelPosition;
          return o.getX(l < (d?.top || 0) + 2 || l > (d?.bottom || 0) - 2 ? c : l, a.half, a, f);
        }, justify: function(o, a, l, c) {
          return c[0] + (o.half ? -1 : 1) * (l + (a.dataLabelPosition?.distance || 0));
        }, alignToPlotEdges: function(o, a, l, c) {
          let f = o.getBBox().width;
          return a ? f + c : l - f - c;
        }, alignToConnectors: function(o, a, l, c) {
          let f = 0, d;
          return o.forEach(function(m) {
            (d = m.dataLabel.getBBox().width) > f && (f = d);
          }), a ? f + c : l - f - c;
        } };
        function e(o, a) {
          let l = Math.PI / 2, { start: c = 0, end: f = 0 } = o.shapeArgs || {}, d = o.angle || 0;
          a > 0 && c < l && f > l && d > l / 2 && d < 1.5 * l && (d = d <= l ? Math.max(l / 2, (c + l) / 2) : Math.min(1.5 * l, (l + f) / 2));
          let { center: m, options: x } = this, y = m[2] / 2, M = Math.cos(d), w = Math.sin(d), v = m[0] + M * y, T = m[1] + w * y, S = Math.min((x.slicedOffset || 0) + (x.borderWidth || 0), a / 5);
          return { natural: { x: v + M * a, y: T + w * a }, computed: {}, alignment: a < 0 ? "center" : o.half ? "right" : "left", connectorPosition: { angle: d, breakAt: { x: v + M * S, y: T + w * S }, touchingSliceAt: { x: v, y: T } }, distance: a };
        }
        function i() {
          let o = this, a = o.points, l = o.chart, c = l.plotWidth, f = l.plotHeight, d = l.plotLeft, m = Math.round(l.chartWidth / 3), x = o.center, y = x[2] / 2, M = x[1], w = [[], []], v = [0, 0, 0, 0], T = o.dataLabelPositioners, S, O, L, D = 0;
          o.visible && o.hasDataLabels?.() && (a.forEach((N) => {
            (N.dataLabels || []).forEach((I) => {
              I.shortened && (I.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), I.shortened = !1);
            });
          }), zh.prototype.drawDataLabels.apply(o), a.forEach((N) => {
            (N.dataLabels || []).forEach((I, W) => {
              let j = x[2] / 2, H = I.options, K = Wh(H?.distance || 0, j);
              W === 0 && w[N.half].push(N), !Hh(H?.style?.width) && I.getBBox().width > m && (I.css({ width: Math.round(0.7 * m) + "px" }), I.shortened = !0), I.dataLabelPosition = this.getDataLabelPosition(N, K), D = Math.max(D, K);
            });
          }), w.forEach((N, I) => {
            let W = N.length, j = [], H, K, Q = 0, et;
            W && (o.sortByAngle(N, I - 0.5), D > 0 && (H = Math.max(0, M - y - D), K = Math.min(M + y + D, l.plotHeight), N.forEach((V) => {
              (V.dataLabels || []).forEach((Z) => {
                let tt = Z.dataLabelPosition;
                tt && tt.distance > 0 && (tt.top = Math.max(0, M - y - tt.distance), tt.bottom = Math.min(M + y + tt.distance, l.plotHeight), Q = Z.getBBox().height || 21, Z.lineHeight = l.renderer.fontMetrics(Z.text || Z).h + 2 * Z.padding, V.distributeBox = { target: (Z.dataLabelPosition?.natural.y || 0) - tt.top + Z.lineHeight / 2, size: Q, rank: V.y }, j.push(V.distributeBox));
              });
            }), ap(j, et = K + Q - H, et / 5)), N.forEach((V) => {
              (V.dataLabels || []).forEach((Z) => {
                let tt = Z.options || {}, St = V.distributeBox, gt = Z.dataLabelPosition, xe = gt?.natural.y || 0, at = tt.connectorPadding || 0, ot = Z.lineHeight || 21, yt = (ot - Z.getBBox().height) / 2, pt = 0, Pt = xe, Ot = "inherit";
                if (gt) {
                  if (j && Hh(St) && gt.distance > 0 && (St.pos === void 0 ? Ot = "hidden" : (L = St.size, Pt = T.radialDistributionY(V, Z))), tt.justify) pt = T.justify(V, Z, y, x);
                  else switch (tt.alignTo) {
                    case "connectors":
                      pt = T.alignToConnectors(N, I, c, d);
                      break;
                    case "plotEdges":
                      pt = T.alignToPlotEdges(Z, I, c, d);
                      break;
                    default:
                      pt = T.radialDistributionX(o, V, Pt - yt, xe, Z);
                  }
                  if (gt.attribs = { visibility: Ot, align: gt.alignment }, gt.posAttribs = { x: pt + (tt.x || 0) + ({ left: at, right: -at }[gt.alignment] || 0), y: Pt + (tt.y || 0) - ot / 2 }, gt.computed.x = pt, gt.computed.y = Pt - yt, hp(tt.crop, !0)) {
                    let vt;
                    pt - (O = Z.getBBox().width) < at && I === 1 ? (vt = Math.round(O - pt + at), v[3] = Math.max(vt, v[3])) : pt + O > c - at && I === 0 && (vt = Math.round(pt + O - c + at), v[1] = Math.max(vt, v[1])), Pt - L / 2 < 0 ? v[0] = Math.max(Math.round(-Pt + L / 2), v[0]) : Pt + L / 2 > f && (v[2] = Math.max(Math.round(Pt + L / 2 - f), v[2])), gt.sideOverflow = vt;
                  }
                }
              });
            }));
          }), (np(v) === 0 || this.verifyDataLabelOverflow(v)) && (this.placeDataLabels(), this.points.forEach((N) => {
            (N.dataLabels || []).forEach((I) => {
              let { connectorColor: W, connectorWidth: j = 1 } = I.options || {}, H = I.dataLabelPosition;
              if (lp(j)) {
                let K;
                S = I.connector, H && H.distance > 0 ? (K = !S, S || (I.connector = S = l.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + N.colorIndex + (N.className ? " " + N.className : "")).add(o.dataLabelsGroup)), l.styledMode || S.attr({ "stroke-width": j, stroke: W || N.color || "#666666" }), S[K ? "attr" : "animate"]({ d: N.getConnectorPath(I) }), S.attr({ visibility: H.attribs?.visibility })) : S && (I.connector = S.destroy());
              }
            });
          })));
        }
        function s() {
          this.points.forEach((o) => {
            (o.dataLabels || []).forEach((a) => {
              let l = a.dataLabelPosition;
              l ? (l.sideOverflow && (a.css({ width: Math.max(a.getBBox().width - l.sideOverflow, 0) + "px", textOverflow: a.options?.style?.textOverflow || "ellipsis" }), a.shortened = !0), a.attr(l.attribs), a[a.moved ? "animate" : "attr"](l.posAttribs), a.moved = !0) : a && a.attr({ y: -9999 });
            }), delete o.distributeBox;
          }, this);
        }
        function r(o) {
          let a = this.center, l = this.options, c = l.center, f = l.minSize || 80, d = f, m = l.size !== null;
          return !m && (c[0] !== null ? d = Math.max(a[2] - Math.max(o[1], o[3]), f) : (d = Math.max(a[2] - o[1] - o[3], f), a[0] += (o[3] - o[1]) / 2), c[1] !== null ? d = Fh(d, f, a[2] - Math.max(o[0], o[2])) : (d = Fh(d, f, a[2] - o[0] - o[2]), a[1] += (o[0] - o[2]) / 2), d < a[2] ? (a[2] = d, a[3] = Math.min(l.thickness ? Math.max(0, d - 2 * l.thickness) : Math.max(0, Wh(l.innerSize || 0, d)), d), this.translate(a), this.drawDataLabels && this.drawDataLabels()) : m = !0), m;
        }
        h.compose = function(o) {
          if (La.compose(zh), cp(rp, "PieDataLabel")) {
            let a = o.prototype;
            a.dataLabelPositioners = t, a.alignDataLabel = op, a.drawDataLabels = i, a.getDataLabelPosition = e, a.placeDataLabels = s, a.verifyDataLabelOverflow = r;
          }
        };
      })(ei || (ei = {}));
      let dp = ei;
      (function(h) {
        h.getCenterOfPoints = function(t) {
          let e = t.reduce((i, s) => (i.x += s.x, i.y += s.y, i), { x: 0, y: 0 });
          return { x: e.x / t.length, y: e.y / t.length };
        }, h.getDistanceBetweenPoints = function(t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, h.getAngleBetweenPoints = function(t, e) {
          return Math.atan2(e.x - t.x, e.y - t.y);
        }, h.pointInPolygon = function({ x: t, y: e }, i) {
          let s = i.length, r, o, a = !1;
          for (r = 0, o = s - 1; r < s; o = r++) {
            let [l, c] = i[r], [f, d] = i[o];
            c > e != d > e && t < (f - l) * (e - c) / (d - c) + l && (a = !a);
          }
          return a;
        };
      })(ft || (ft = {}));
      let { pointInPolygon: pp } = ft, { addEvent: up, getAlignFactor: gp, fireEvent: Xh, objectEach: Gh, pick: fp } = J;
      function mp(h) {
        let t = h.length, e = (f, d) => !(d.x >= f.x + f.width || d.x + d.width <= f.x || d.y >= f.y + f.height || d.y + d.height <= f.y), i = (f, d) => {
          for (let m of f) if (pp({ x: m[0], y: m[1] }, d)) return !0;
          return !1;
        }, s, r, o, a, l, c = !1;
        for (let f = 0; f < t; f++) (s = h[f]) && (s.oldOpacity = s.opacity, s.newOpacity = 1, s.absoluteBox = (function(d) {
          if (d && (!d.alignAttr || d.placed)) {
            let m = d.box ? 0 : d.padding || 0, x = d.alignAttr || { x: d.attr("x"), y: d.attr("y") }, { height: y, polygon: M, width: w } = d.getBBox(), v = gp(d.alignValue) * w;
            return d.width = w, d.height = y, { x: x.x + (d.parentGroup?.translateX || 0) + m - v, y: x.y + (d.parentGroup?.translateY || 0) + m, width: w - 2 * m, height: y - 2 * m, polygon: M };
          }
        })(s));
        h.sort((f, d) => (d.labelrank || 0) - (f.labelrank || 0));
        for (let f = 0; f < t; ++f) {
          a = (r = h[f]) && r.absoluteBox;
          let d = a?.polygon;
          for (let m = f + 1; m < t; ++m) {
            l = (o = h[m]) && o.absoluteBox;
            let x = !1;
            if (a && l && r !== o && r.newOpacity !== 0 && o.newOpacity !== 0 && r.visibility !== "hidden" && o.visibility !== "hidden") {
              let y = l.polygon;
              if (d && y && d !== y ? i(d, y) && (x = !0) : e(a, l) && (x = !0), x) {
                let M = r.labelrank < o.labelrank ? r : o, w = M.text;
                M.newOpacity = 0, w?.element.querySelector("textPath") && w.hide();
              }
            }
          }
        }
        for (let f of h) Yh(f, this) && (c = !0);
        c && Xh(this, "afterHideAllOverlappingLabels");
      }
      function Yh(h, t) {
        let e, i = !1;
        return h && (e = h.newOpacity, h.oldOpacity !== e && (h.hasClass("highcharts-data-label") ? (h[e ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), i = !0, h[h.isOld ? "animate" : "attr"]({ opacity: e }, void 0, function() {
          t.styledMode || h.css({ pointerEvents: e ? "auto" : "none" });
        }), Xh(t, "afterHideOverlappingLabel")) : h.attr({ opacity: e })), h.isOld = !0), i;
      }
      function xp() {
        let h = this, t = [];
        for (let e of h.labelCollectors || []) t = t.concat(e());
        for (let e of h.yAxis || []) e.stacking && e.options.stackLabels && !e.options.stackLabels.allowOverlap && Gh(e.stacking.stacks, (i) => {
          Gh(i, (s) => {
            s.label && t.push(s.label);
          });
        });
        for (let e of h.series || []) if (e.visible && e.hasDataLabels?.()) {
          let i = (s) => {
            for (let r of s) r.visible && (r.dataLabels || []).forEach((o) => {
              let a = o.options || {};
              o.labelrank = fp(a.labelrank, r.labelrank, r.shapeArgs?.height), a.allowOverlap ?? Number(a.distance) > 0 ? (o.oldOpacity = o.opacity, o.newOpacity = 1, Yh(o, h)) : t.push(o);
            });
          };
          i(e.nodes || []), i(e.points);
        }
        this.hideOverlappingLabels(t);
      }
      let jh = { compose: function(h) {
        let t = h.prototype;
        t.hideOverlappingLabels || (t.hideOverlappingLabels = mp, up(h, "render", xp));
      } }, { defaultOptions: bp } = fe, { noop: Uh } = X, { addEvent: Vh, extend: yp, isObject: qh, merge: vp, relativeLength: Nl } = J, kp = { radius: 0, scope: "stack", where: void 0 }, Kh = Uh, $h = Uh;
      function wp(h, t, e, i, s = {}) {
        let r = Kh(h, t, e, i, s), { brStart: o = !0, brEnd: a = !0, innerR: l = 0, r: c = e, start: f = 0, end: d = 0 } = s;
        if (s.open || !s.borderRadius) return r;
        let m = d - f, x = Math.sin(m / 2), y = Math.max(Math.min(Nl(s.borderRadius || 0, c - l), (c - l) / 2, c * x / (1 + x)), 0), M = Math.min(y, m / Math.PI * 2 * l), w = r.length - 1;
        for (; w--; ) (o || w !== 0 && w !== 3) && (a || w !== 1 && w !== 2) && (function(v, T, S) {
          let O, L, D, N = v[T], I = v[T + 1];
          if (I[0] === "Z" && (I = v[0]), (N[0] === "M" || N[0] === "L") && I[0] === "A" ? (O = N, L = I, D = !0) : N[0] === "A" && (I[0] === "M" || I[0] === "L") && (O = I, L = N), O && L && L.params) {
            let W = L[1], j = L[5], H = L.params, { start: K, end: Q, cx: et, cy: V } = H, Z = j ? W - S : W + S, tt = Z ? Math.asin(S / Z) : 0, St = j ? tt : -tt, gt = Math.cos(tt) * Z;
            D ? (H.start = K + St, O[1] = et + gt * Math.cos(K), O[2] = V + gt * Math.sin(K), v.splice(T + 1, 0, ["A", S, S, 0, 0, 1, et + W * Math.cos(H.start), V + W * Math.sin(H.start)])) : (H.end = Q - St, L[6] = et + W * Math.cos(H.end), L[7] = V + W * Math.sin(H.end), v.splice(T + 1, 0, ["A", S, S, 0, 0, 1, et + gt * Math.cos(Q), V + gt * Math.sin(Q)])), L[4] = Math.abs(H.end - H.start) < Math.PI ? 0 : 1;
          }
        })(r, w, w > 1 ? M : y);
        return r;
      }
      function Mp() {
        if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
          let { options: h, yAxis: t } = this, e = h.stacking === "percent", i = bp.plotOptions?.[this.type]?.borderRadius, s = Rl(h.borderRadius, qh(i) ? i : {}), r = t.options.reversed;
          for (let o of this.points) {
            let { shapeArgs: a } = o;
            if (o.shapeType === "roundedRect" && a) {
              let { width: l = 0, height: c = 0, y: f = 0 } = a, d = f, m = c;
              if (s.scope === "stack" && o.stackTotal) {
                let w = t.translate(e ? 100 : o.stackTotal, !1, !0, !1, !0), v = t.translate(h.threshold || 0, !1, !0, !1, !0), T = this.crispCol(0, Math.min(w, v), 0, Math.abs(w - v));
                d = T.y, m = T.height;
              }
              let x = (o.negative ? -1 : 1) * (r ? -1 : 1) == -1, y = s.where;
              !y && this.is("waterfall") && Math.abs((o.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (y = "all"), y || (y = "end");
              let M = Math.min(Nl(s.radius, l), l / 2, y === "all" ? c / 2 : 1 / 0) || 0;
              y === "end" && (x && (d -= M), m += M), yp(a, { brBoxHeight: m, brBoxY: d, r: M });
            }
          }
        }
      }
      function Rl(h, t) {
        return qh(h) || (h = { radius: h || 0 }), vp(kp, t, h);
      }
      function Cp() {
        let h = Rl(this.options.borderRadius);
        for (let t of this.points) {
          let e = t.shapeArgs;
          e && (e.borderRadius = Nl(h.radius, (e.r || 0) - (e.innerR || 0)));
        }
      }
      function Ap(h, t, e, i, s = {}) {
        let r = $h(h, t, e, i, s), { r: o = 0, brBoxHeight: a = i, brBoxY: l = t } = s, c = t - l, f = l + a - (t + i), d = c - o > -0.1 ? 0 : o, m = f - o > -0.1 ? 0 : o, x = Math.max(d && c, 0), y = Math.max(m && f, 0), M = [h + d, t], w = [h + e - d, t], v = [h + e, t + d], T = [h + e, t + i - m], S = [h + e - m, t + i], O = [h + m, t + i], L = [h, t + i - m], D = [h, t + d], N = (I, W) => Math.sqrt(Math.pow(I, 2) - Math.pow(W, 2));
        if (x) {
          let I = N(d, d - x);
          M[0] -= I, w[0] += I, v[1] = D[1] = t + d - x;
        }
        if (i < d - x) {
          let I = N(d, d - x - i);
          v[0] = T[0] = h + e - d + I, S[0] = Math.min(v[0], S[0]), O[0] = Math.max(T[0], O[0]), L[0] = D[0] = h + d - I, v[1] = D[1] = t + i;
        }
        if (y) {
          let I = N(m, m - y);
          S[0] += I, O[0] -= I, T[1] = L[1] = t + i - m + y;
        }
        if (i < m - y) {
          let I = N(m, m - y - i);
          v[0] = T[0] = h + e - m + I, w[0] = Math.min(v[0], w[0]), M[0] = Math.max(T[0], M[0]), L[0] = D[0] = h + m - I, T[1] = L[1] = t;
        }
        return r.length = 0, r.push(["M", ...M], ["L", ...w], ["A", d, d, 0, 0, 1, ...v], ["L", ...T], ["A", m, m, 0, 0, 1, ...S], ["L", ...O], ["A", m, m, 0, 0, 1, ...L], ["L", ...D], ["A", d, d, 0, 0, 1, ...M], ["Z"]), r;
      }
      let { diffObjects: Tp, extend: Sp, find: Ep, merge: Pp, pick: Ba, uniqueKey: Op } = J;
      (function(h) {
        function t(i, s) {
          let r = i.condition;
          (r.callback || function() {
            return this.chartWidth <= Ba(r.maxWidth, Number.MAX_VALUE) && this.chartHeight <= Ba(r.maxHeight, Number.MAX_VALUE) && this.chartWidth >= Ba(r.minWidth, 0) && this.chartHeight >= Ba(r.minHeight, 0);
          }).call(this) && s.push(i._id);
        }
        function e(i, s) {
          let r = this.options.responsive, o = this.currentResponsive, a = [], l;
          !s && r && r.rules && r.rules.forEach((d) => {
            d._id === void 0 && (d._id = Op()), this.matchResponsiveRule(d, a);
          }, this);
          let c = Pp(...a.map((d) => Ep(r?.rules || [], (m) => m._id === d)).map((d) => d?.chartOptions));
          c.isResponsiveOptions = !0, a = a.toString() || void 0;
          let f = o?.ruleIds;
          a !== f && (o && (this.currentResponsive = void 0, this.updatingResponsive = !0, this.update(o.undoOptions, i, !0), this.updatingResponsive = !1), a ? ((l = Tp(c, this.options, !0, this.collectionsWithUpdate)).isResponsiveOptions = !0, this.currentResponsive = { ruleIds: a, mergedOptions: c, undoOptions: l }, this.updatingResponsive || this.update(c, i, !0)) : this.currentResponsive = void 0);
        }
        h.compose = function(i) {
          let s = i.prototype;
          return s.matchResponsiveRule || Sp(s, { matchResponsiveRule: t, setResponsive: e }), i;
        };
      })(Ci || (Ci = {}));
      let Lp = Ci;
      X.AST = Bt, X.Axis = Ri, X.Chart = Xi, X.Color = Tt, X.DataLabel = La, X.DataTableCore = xa, X.Fx = ae, X.HTMLElement = we, X.Legend = sh, X.LegendSymbol = Yl, X.OverlappingDataLabels = X.OverlappingDataLabels || jh, X.PlotLineOrBand = wi, X.Point = Vt, X.Pointer = Wl, X.RendererRegistry = $i, X.Series = Ce, X.SeriesRegistry = qt, X.StackItem = fh, X.SVGElement = Pe, X.SVGRenderer = Ps, X.Templating = he, X.Tick = Bi, X.Time = $s, X.Tooltip = k, X.animate = $t.animate, X.animObject = $t.animObject, X.chart = Xi.chart, X.color = Tt.parse, X.dateFormat = he.dateFormat, X.defaultOptions = fe.defaultOptions, X.distribute = ws.distribute, X.format = he.format, X.getDeferredAnimation = $t.getDeferredAnimation, X.getOptions = fe.getOptions, X.numberFormat = he.numberFormat, X.seriesType = qt.seriesType, X.setAnimation = $t.setAnimation, X.setOptions = fe.setOptions, X.stop = $t.stop, X.time = fe.defaultTime, X.timers = ae.timers, { compose: function(h, t, e) {
        let i = h.types.pie;
        if (!t.symbolCustomAttribs.includes("borderRadius")) {
          let s = e.prototype.symbols;
          Vh(h, "afterColumnTranslate", Mp, { order: 9 }), Vh(i, "afterTranslate", Cp), t.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY", "brEnd", "brStart"), Kh = s.arc, $h = s.roundedRect, s.arc = wp, s.roundedRect = Ap;
        }
      }, optionsToObject: Rl }.compose(X.Series, X.SVGElement, X.SVGRenderer), Hd.compose(X.Series.types.column), La.compose(X.Series), Vn.compose(X.Axis), we.compose(X.SVGRenderer), sh.compose(X.Chart), zs.compose(X.Axis), jh.compose(X.Chart), dp.compose(X.Series.types.pie), wi.compose(X.Chart, X.Axis), Wl.compose(X.Chart), Lp.compose(X.Chart), $r.compose(X.Axis, X.Chart, X.Series), bd.compose(X.Axis, X.Chart, X.Series), k.compose(X.Pointer), J.extend(X, J);
      let Dp = X;
      return _.default;
    })());
  })(za)), za.exports;
}
var Rp = Np();
const Na = /* @__PURE__ */ Ip(Rp);
var Fa = { exports: {} }, zp = Fa.exports, Jh;
function Fp() {
  return Jh || (Jh = 1, (function(ve, Kt) {
    /**
    * Highcharts JS v12.4.0 (2025-09-04)
    * @module highcharts/themes/adaptive
    * @requires highcharts
    *
    * (c) 2009-2025 Torstein Honsi
    *
    * License: www.highcharts.com/license
    */
    (function(nt, Lt) {
      ve.exports = Lt(nt._Highcharts);
    })(typeof window > "u" ? zp : window, (nt) => (() => {
      var Lt, ee = { 944: (kt) => {
        kt.exports = nt;
      } }, Et = {};
      function Nt(kt) {
        var Rt = Et[kt];
        if (Rt !== void 0) return Rt.exports;
        var le = Et[kt] = { exports: {} };
        return ee[kt](le, le.exports, Nt), le.exports;
      }
      Nt.n = (kt) => {
        var Rt = kt && kt.__esModule ? () => kt.default : () => kt;
        return Nt.d(Rt, { a: Rt }), Rt;
      }, Nt.d = (kt, Rt) => {
        for (var le in Rt) Nt.o(Rt, le) && !Nt.o(kt, le) && Object.defineProperty(kt, le, { enumerable: !0, get: Rt[le] });
      }, Nt.o = (kt, Rt) => Object.prototype.hasOwnProperty.call(kt, Rt);
      var re = {};
      Nt.d(re, { default: () => Le });
      var Ut = Nt(944), ne = Nt.n(Ut);
      let { setOptions: gi } = ne(), de = `
        /* Colors for data series and points */
        --highcharts-color-0: #2caffe;
        --highcharts-color-1: #544fc5;
        --highcharts-color-2: #00e272;
        --highcharts-color-3: #fe6a35;
        --highcharts-color-4: #6b8abc;
        --highcharts-color-5: #d568fb;
        --highcharts-color-6: #2ee0ca;
        --highcharts-color-7: #fa4b42;
        --highcharts-color-8: #feb56a;
        --highcharts-color-9: #91e8e1;

    /* Chart background, point stroke for markers and columns etc */
    --highcharts-background-color: #ffffff;

    /*
    Neutral colors, grayscale by default. The default colors are defined by
    mixing the background-color with neutral, with a weight corresponding to
    the number in the name.

    https://www.highcharts.com/samples/highcharts/css/palette-helper
    */

    /* Strong text. */
    --highcharts-neutral-color-100: #000000;

    /* Main text, axis labels and some strokes. */
    --highcharts-neutral-color-80: #333333;

    /* Axis title, connector fallback. */
    --highcharts-neutral-color-60: #666666;

    /* Credits text, export menu stroke. */
    --highcharts-neutral-color-40: #999999;

    /* Disabled texts, button strokes, crosshair etc. */
    --highcharts-neutral-color-20: #cccccc;

    /* Grid lines etc. */
    --highcharts-neutral-color-10: #e6e6e6;

    /* Minor grid lines etc. */
    --highcharts-neutral-color-5: #f2f2f2;

    /* Tooltip background, button fills, map null points. */
    --highcharts-neutral-color-3: #f7f7f7;

    /*
    Highlights, shades of blue by default
    */

    /* Drilldown clickable labels, color axis max color. */
    --highcharts-highlight-color-100: #0022ff;

    /* Selection marker, menu hover, button hover, chart border, navigator
    series. */
    --highcharts-highlight-color-80: #334eff;

    /* Navigator mask fill. */
    --highcharts-highlight-color-60: #667aff;

    /* Ticks and axis line. */
    --highcharts-highlight-color-20: #ccd3ff;

    /* Pressed button, color axis min color. */
    --highcharts-highlight-color-10: #e6e9ff;

    /* Indicators */
    --highcharts-positive-color: #06b535;
    --highcharts-negative-color: #f21313;

    /* Transparent colors for annotations */
    --highcharts-annotation-color-0: rgba(130, 170, 255, 0.4);
    --highcharts-annotation-color-1: rgba(139, 191, 216, 0.4);
    --highcharts-annotation-color-2: rgba(150, 216, 192, 0.4);
    --highcharts-annotation-color-3: rgba(156, 229, 161, 0.4);
    --highcharts-annotation-color-4: rgba(162, 241, 130, 0.4);
    --highcharts-annotation-color-5: rgba(169, 255, 101, 0.4);
`, ti = `
    /* Colors for data series and points */
    --highcharts-color-1: #00e272;
    --highcharts-color-2: #efdf00;

    /* UI colors */
    --highcharts-background-color: #141414;

    /*
        Neutral color variations
        https://www.highcharts.com/samples/highcharts/css/palette-helper
    */
    --highcharts-neutral-color-100: #ffffff;
    --highcharts-neutral-color-80: #d0d0d0;
    --highcharts-neutral-color-60: #a1a1a1;
    --highcharts-neutral-color-40: #727272;
    --highcharts-neutral-color-20: #434343;
    --highcharts-neutral-color-10: #2c2c2c;
    --highcharts-neutral-color-5: #202020;
    --highcharts-neutral-color-3: #1b1b1b;

    /* Highlight color variations */
    --highcharts-highlight-color-100: #2caffe;
    --highcharts-highlight-color-80: #2790cf;
    --highcharts-highlight-color-60: #2271a0;
    --highcharts-highlight-color-20: #193343;
    --highcharts-highlight-color-10: #16242b;
`, We = `
:root,
.highcharts-light {
    ${de}
}

@media (prefers-color-scheme: dark) {
    :root {
        ${ti}
    }
}

.highcharts-dark {
    ${ti}
}
`;
      (function(kt) {
        kt.options = { colors: ["var(--highcharts-color-0)", "var(--highcharts-color-1)", "var(--highcharts-color-2)", "var(--highcharts-color-3)", "var(--highcharts-color-4)", "var(--highcharts-color-5)", "var(--highcharts-color-6)", "var(--highcharts-color-7)", "var(--highcharts-color-8)", "var(--highcharts-color-9)"], global: { buttonTheme: { fill: "var(--highcharts-neutral-color-3)", stroke: "var(--highcharts-neutral-color-20)", style: { color: "var(--highcharts-neutral-color-80)" }, states: { hover: { fill: "var(--highcharts-neutral-color-10)" }, select: { fill: "var(--highcharts-highlight-color-10)", style: { color: "var(--highcharts-neutral-color-100)" } }, disabled: { style: { color: "var(--highcharts-neutral-color-20)" } } } } }, chart: { borderColor: "var(--highcharts-highlight-color-80)", backgroundColor: "var(--highcharts-background-color)", plotBorderColor: "var(--highcharts-neutral-color-20)" }, title: { style: { color: "var(--highcharts-neutral-color-80)" } }, subtitle: { style: { color: "var(--highcharts-neutral-color-60)" } }, caption: { style: { color: "var(--highcharts-neutral-color-60)" } }, plotOptions: { line: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, area: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, spline: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, areaspline: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, column: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, bar: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, scatter: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, pie: { borderColor: "var(--highcharts-background-color)" }, hlc: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, ohlc: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, candlestick: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)", lineColor: "var(--highcharts-neutral-color-100)", upColor: "var(--highcharts-background-color)" }, flags: { states: { hover: { lineColor: "var(--highcharts-neutral-color-100)", fillColor: "var(--highcharts-highlight-color-20)" }, select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)", fillColor: "var(--highcharts-background-color)", style: { color: "var(--highcharts-neutral-color-100)" } }, arearange: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, areasplinerange: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, boxplot: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)", fillColor: "var(--highcharts-background-color)" }, bubble: { marker: { states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, columnrange: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, columnpyramid: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, errorbar: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)", fillColor: "var(--highcharts-background-color)", color: "var(--highcharts-neutral-color-100)" }, gauge: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } }, dataLabels: { borderColor: "var(--highcharts-neutral-color-20)" }, dial: { backgroundColor: "var(--highcharts-neutral-color-100)", borderColor: "var(--highcharts-neutral-color-20)" }, pivot: { borderColor: "var(--highcharts-neutral-color-20)", backgroundColor: "var(--highcharts-neutral-color-100)" } }, packedbubble: { marker: { states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, polygon: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, waterfall: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-neutral-color-80)", lineColor: "var(--highcharts-neutral-color-80)" }, scatter3d: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, map: { states: { hover: { borderColor: "var(--highcharts-neutral-color-60)" }, select: { color: "var(--highcharts-neutral-color-20)" } }, nullColor: "var(--highcharts-neutral-color-3)", borderColor: "var(--highcharts-neutral-color-10)" }, mapline: { states: { hover: { borderColor: "var(--highcharts-neutral-color-60)" }, select: { color: "var(--highcharts-neutral-color-20)" } }, nullColor: "var(--highcharts-neutral-color-3)", borderColor: "var(--highcharts-neutral-color-10)" }, mappoint: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } }, dataLabels: { style: { color: "var(--highcharts-neutral-color-100)" } } }, mapbubble: { marker: { states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, heatmap: { marker: { states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } }, nullColor: "var(--highcharts-neutral-color-3)" }, xrange: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, gantt: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, sankey: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, dependencywheel: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, funnel: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, pyramid: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, histogram: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, bellcurve: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, item: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } }, borderColor: "var(--highcharts-background-color)" }, organization: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-neutral-color-60)", link: { color: "var(--highcharts-neutral-color-60)" } }, solidgauge: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } }, dataLabels: { borderColor: "var(--highcharts-neutral-color-20)" }, dial: { backgroundColor: "var(--highcharts-neutral-color-100)", borderColor: "var(--highcharts-neutral-color-20)" }, pivot: { borderColor: "var(--highcharts-neutral-color-20)", backgroundColor: "var(--highcharts-neutral-color-100)" } }, timeline: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } }, dataLabels: { backgroundColor: "var(--highcharts-background-color)", borderColor: "var(--highcharts-neutral-color-40)", color: "var(--highcharts-neutral-color-80)" } }, treemap: { states: { hover: { borderColor: "var(--highcharts-neutral-color-40)" } }, borderColor: "var(--highcharts-neutral-color-10)" }, sunburst: { states: { hover: { borderColor: "var(--highcharts-neutral-color-40)" } }, borderColor: "var(--highcharts-neutral-color-10)" }, treegraph: { states: { hover: { borderColor: "var(--highcharts-neutral-color-40)" } }, borderColor: "var(--highcharts-neutral-color-10)", link: { color: "var(--highcharts-neutral-color-60)" } } }, legend: { borderColor: "var(--highcharts-neutral-color-40)", navigation: { activeColor: "var(--highcharts-highlight-color-100)", inactiveColor: "var(--highcharts-neutral-color-20)" }, itemStyle: { color: "var(--highcharts-neutral-color-80)" }, itemHoverStyle: { color: "var(--highcharts-neutral-color-100)" }, itemHiddenStyle: { color: "var(--highcharts-neutral-color-60)" }, title: { style: { color: "var(--highcharts-neutral-color-80)" } }, bubbleLegend: { labels: { style: { color: "var(--highcharts-neutral-color-100)" } } } }, loading: { style: { backgroundColor: "var(--highcharts-background-color)" } }, tooltip: { backgroundColor: "var(--highcharts-background-color)", style: { color: "var(--highcharts-neutral-color-80)" } }, credits: { style: { color: "var(--highcharts-neutral-color-40)" } }, xAxis: { labels: { style: { color: "var(--highcharts-neutral-color-80)" } }, title: { style: { color: "var(--highcharts-neutral-color-60)" } }, minorGridLineColor: "var(--highcharts-neutral-color-5)", minorTickColor: "var(--highcharts-neutral-color-40)", lineColor: "var(--highcharts-neutral-color-80)", gridLineColor: "var(--highcharts-neutral-color-10)", tickColor: "var(--highcharts-neutral-color-80)", grid: { borderColor: "var(--highcharts-neutral-color-20)" } }, yAxis: { labels: { style: { color: "var(--highcharts-neutral-color-80)" } }, title: { style: { color: "var(--highcharts-neutral-color-60)" } }, minorGridLineColor: "var(--highcharts-neutral-color-5)", minorTickColor: "var(--highcharts-neutral-color-40)", lineColor: "var(--highcharts-neutral-color-80)", gridLineColor: "var(--highcharts-neutral-color-10)", tickColor: "var(--highcharts-neutral-color-80)", stackLabels: { style: { color: "var(--highcharts-neutral-color-100)" } }, grid: { borderColor: "var(--highcharts-neutral-color-20)" } }, navigator: { handles: { backgroundColor: "var(--highcharts-neutral-color-5)", borderColor: "var(--highcharts-neutral-color-40)" }, outlineColor: "var(--highcharts-neutral-color-40)", xAxis: { gridLineColor: "var(--highcharts-neutral-color-10)", labels: { style: { color: "var(--highcharts-neutral-color-100)" } } } }, rangeSelector: { inputStyle: { color: "var(--highcharts-highlight-color-80)" }, labelStyle: { color: "var(--highcharts-neutral-color-60)" } }, scrollbar: { barBackgroundColor: "var(--highcharts-neutral-color-20)", barBorderColor: "var(--highcharts-neutral-color-20)", buttonArrowColor: "var(--highcharts-neutral-color-80)", buttonBackgroundColor: "var(--highcharts-neutral-color-10)", buttonBorderColor: "var(--highcharts-neutral-color-20)", trackBorderColor: "var(--highcharts-neutral-color-20)" }, pane: { background: { borderColor: "var(--highcharts-neutral-color-20)", backgroundColor: { stops: [[0, "var(--highcharts-background-color)"], [1, "var(--highcharts-neutral-color-10)"]] } } }, zAxis: { labels: { style: { color: "var(--highcharts-neutral-color-80)" } }, title: { style: { color: "var(--highcharts-neutral-color-60)" } }, minorGridLineColor: "var(--highcharts-neutral-color-5)", minorTickColor: "var(--highcharts-neutral-color-40)", lineColor: "var(--highcharts-neutral-color-80)", gridLineColor: "var(--highcharts-neutral-color-10)", tickColor: "var(--highcharts-neutral-color-80)" }, colorAxis: { labels: { style: { color: "var(--highcharts-neutral-color-80)" } }, title: { style: { color: "var(--highcharts-neutral-color-60)" } }, minorGridLineColor: "var(--highcharts-neutral-color-5)", minorTickColor: "var(--highcharts-neutral-color-40)", lineColor: "var(--highcharts-neutral-color-80)", gridLineColor: "var(--highcharts-background-color)", tickColor: "var(--highcharts-neutral-color-80)", marker: { color: "var(--highcharts-neutral-color-40)" }, minColor: "var(--highcharts-highlight-color-10)", maxColor: "var(--highcharts-highlight-color-100)" }, mapNavigation: { buttonOptions: { style: { color: "var(--highcharts-neutral-color-60)" }, theme: { fill: "var(--highcharts-background-color)", stroke: "var(--highcharts-neutral-color-10)" } } }, accessibility: { keyboardNavigation: { focusBorder: { style: { color: "var(--highcharts-highlight-color-80)" } } } }, drilldown: { activeAxisLabelStyle: { color: "var(--highcharts-highlight-color-100)" }, activeDataLabelStyle: { color: "var(--highcharts-highlight-color-100)" } }, annotations: { labelOptions: { borderColor: "var(--highcharts-neutral-color-100)", backgroundColor: "color-mix(in srgb, var(--highcharts-neutral-color-100) 75%, transparent)" }, controlPointOptions: { style: { fill: "var(--highcharts-background-color)", stroke: "var(--highcharts-neutral-color-100)" } }, types: { elliottWave: { labelOptions: { style: { color: "var(--highcharts-neutral-color-60)" } } }, fibonacci: { typeOptions: { lineColor: "var(--highcharts-neutral-color-40)" }, labelOptions: { style: { color: "var(--highcharts-neutral-color-60)" } } }, fibonacciTimeZones: { typeOptions: { line: { stroke: "var(--highcharts-neutral-color-80)" } } }, verticalLine: { labelOptions: { style: { color: "var(--highcharts-neutral-color-60)" } } }, measure: { typeOptions: { label: { style: { color: "var(--highcharts-neutral-color-60)" } } } } }, shapeOptions: { fill: "color-mix(in srgb, var(--highcharts-neutral-color-100) 75%, transparent)", stroke: "color-mix(in srgb, var(--highcharts-neutral-color-100) 75%, transparent)" } }, navigation: { buttonOptions: { symbolFill: "var(--highcharts-neutral-color-60)", symbolStroke: "var(--highcharts-neutral-color-60)", theme: { fill: "var(--highcharts-background-color)" } }, menuStyle: { background: "var(--highcharts-background-color)" }, menuItemStyle: { color: "var(--highcharts-neutral-color-80)" }, menuItemHoverStyle: { background: "var(--highcharts-neutral-color-5)" } } }, kt.apply = function() {
          let Rt = document.createElement("style");
          Rt.nonce = "highcharts", Rt.innerText = We, document.getElementsByTagName("head")[0].appendChild(Rt), gi(kt.options);
        };
      })(Lt || (Lt = {}));
      let Te = Lt;
      ne().theme = Te.options, Te.apply();
      let Le = ne();
      return re.default;
    })());
  })(Fa)), Fa.exports;
}
Fp();
var Ha = { exports: {} }, Hp = Ha.exports, Qh;
function Wp() {
  return Qh || (Qh = 1, (function(ve, Kt) {
    /**
    * Highcharts JS v12.4.0 (2025-09-04)
    * @module highcharts/modules/accessibility
    * @requires highcharts
    *
    * Accessibility module
    *
    * (c) 2010-2025 Highsoft AS
    * Author: Oystein Moseng
    *
    * License: www.highcharts.com/license
    */
    (function(nt, Lt) {
      ve.exports = Lt(nt._Highcharts, nt._Highcharts.Templating, nt._Highcharts.AST, nt._Highcharts.Legend, nt._Highcharts.Axis, nt._Highcharts.Color, nt._Highcharts.SeriesRegistry, nt._Highcharts.RendererRegistry, nt._Highcharts.SVGRenderer, nt._Highcharts.Point, nt._Highcharts.Series);
    })(typeof window > "u" ? Hp : window, (nt, Lt, ee, Et, Nt, re, Ut, ne, gi, de, ti) => (() => {
      let We;
      var Te, Le, kt, Rt, le = { 260: (u) => {
        u.exports = de;
      }, 512: (u) => {
        u.exports = Ut;
      }, 532: (u) => {
        u.exports = Nt;
      }, 540: (u) => {
        u.exports = gi;
      }, 608: (u) => {
        u.exports = ne;
      }, 620: (u) => {
        u.exports = re;
      }, 632: (u) => {
        u.exports = Et;
      }, 660: (u) => {
        u.exports = ee;
      }, 820: (u) => {
        u.exports = ti;
      }, 944: (u) => {
        u.exports = nt;
      }, 984: (u) => {
        u.exports = Lt;
      } }, ei = {};
      function ft(u) {
        var n = ei[u];
        if (n !== void 0) return n.exports;
        var p = ei[u] = { exports: {} };
        return le[u](p, p.exports, ft), p.exports;
      }
      ft.n = (u) => {
        var n = u && u.__esModule ? () => u.default : () => u;
        return ft.d(n, { a: n }), n;
      }, ft.d = (u, n) => {
        for (var p in n) ft.o(n, p) && !ft.o(u, p) && Object.defineProperty(u, p, { enumerable: !0, get: n[p] });
      }, ft.o = (u, n) => Object.prototype.hasOwnProperty.call(u, n);
      var Ci = {};
      ft.d(Ci, { default: () => jr });
      var fi = ft(944), _ = ft.n(fi);
      let { doc: X, win: pe } = _(), { css: mi } = _(), De = pe.EventTarget && new pe.EventTarget() || "none";
      function ii(u) {
        if (typeof pe.MouseEvent == "function") return new pe.MouseEvent(u.type, u);
        if (X?.createEvent) {
          let n = X.createEvent("MouseEvent");
          if (n.initMouseEvent) return n.initMouseEvent(u.type, u.bubbles, u.cancelable, u.view || pe, u.detail, u.screenX, u.screenY, u.clientX, u.clientY, u.ctrlKey, u.altKey, u.shiftKey, u.metaKey, u.button, u.relatedTarget), n;
        }
        return Ai(u.type);
      }
      function Ai(u, n, p) {
        let g = n || { x: 0, y: 0 };
        if (typeof pe.MouseEvent == "function") return new pe.MouseEvent(u, { bubbles: !0, cancelable: !0, composed: !0, button: 0, buttons: 1, relatedTarget: p || De, view: pe, detail: +(u === "click"), screenX: g.x, screenY: g.y, clientX: g.x, clientY: g.y });
        if (X?.createEvent) {
          let b = X.createEvent("MouseEvent");
          if (b.initMouseEvent) return b.initMouseEvent(u, !0, !0, pe, +(u === "click"), g.x, g.y, g.x, g.y, !1, !1, !1, !1, 0, null), b;
        }
        return { type: u };
      }
      let zt = { addClass: function(u, n) {
        u.classList ? u.classList.add(n) : 0 > u.className.indexOf(n) && (u.className += " " + n);
      }, cloneMouseEvent: ii, cloneTouchEvent: function(u) {
        let n = (g) => {
          let b = [];
          for (let C = 0; C < g.length; ++C) {
            let k = g.item(C);
            k && b.push(k);
          }
          return b;
        };
        if (typeof pe.TouchEvent == "function") {
          let g = new pe.TouchEvent(u.type, { touches: n(u.touches), targetTouches: n(u.targetTouches), changedTouches: n(u.changedTouches), ctrlKey: u.ctrlKey, shiftKey: u.shiftKey, altKey: u.altKey, metaKey: u.metaKey, bubbles: u.bubbles, cancelable: u.cancelable, composed: u.composed, detail: u.detail, view: u.view });
          return u.defaultPrevented && g.preventDefault(), g;
        }
        let p = ii(u);
        return p.touches = u.touches, p.changedTouches = u.changedTouches, p.targetTouches = u.targetTouches, p;
      }, escapeStringForHTML: function(u) {
        return u.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
      }, getElement: function(u) {
        return X.getElementById(u);
      }, getFakeMouseEvent: Ai, getHeadingTagNameForElement: function(u) {
        let n = (C) => "h" + Math.min(6, parseInt(C.slice(1), 10) + 1), p = (C) => /^H[1-6]$/i.test(C), g = (C) => {
          let k = C;
          for (; k = k.previousSibling; ) {
            let A = k.tagName || "";
            if (p(A)) return A;
          }
          return "";
        }, b = (C) => {
          let k = g(C);
          if (k) return n(k);
          let A = C.parentElement;
          if (!A) return "h6";
          let E = A.tagName;
          return p(E) ? n(E) : b(A);
        };
        return b(u);
      }, removeChildNodes: function(u) {
        for (; u.lastChild; ) u.removeChild(u.lastChild);
      }, removeClass: function(u, n) {
        u.classList ? u.classList.remove(n) : u.className = u.className.replace(RegExp(n, "g"), "");
      }, removeElement: function(u) {
        u && u.parentNode && u.parentNode.removeChild(u);
      }, reverseChildNodes: function(u) {
        let n = u.childNodes.length;
        for (; n--; ) u.appendChild(u.childNodes[n]);
      }, simulatedEventTarget: De, stripHTMLTagsFromString: function(u, n = !1) {
        return typeof u == "string" ? n ? u.replace(/<\/?[^>]+(>|$)/g, "") : u.replace(/<\/?(?!\s)[^>]+(>|$)/g, "") : u;
      }, visuallyHideElement: function(u) {
        mi(u, { position: "absolute", width: "1px", height: "1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(1px, 1px, 1px, 1px)", marginTop: "-3px", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)", filter: "alpha(opacity=1)", opacity: 0.01 });
      } };
      var Xe = ft(984), Se = ft.n(Xe);
      let { format: Y } = Se(), { getNestedProperty: U, pick: $ } = _();
      (function(u) {
        function n(g, b, C) {
          let k = (z, R) => {
            let F = z.slice(R || 0), G = F.indexOf("{"), q = F.indexOf("}");
            if (G > -1 && q > G) return { statement: F.substring(G + 1, q), begin: R + G + 1, end: R + q };
          }, A = [], E, P, B = 0;
          do
            E = k(g, B), (P = g.substring(B, E && E.begin - 1)).length && A.push({ value: P, type: "constant" }), E && A.push({ value: E.statement, type: "statement" }), B = E ? E.end + 1 : B + 1;
          while (E);
          return A.forEach((z) => {
            z.type === "statement" && (z.value = (function(R, F) {
              let G, q, xt = R.indexOf("#each("), dt = R.indexOf("#plural("), ht = R.indexOf("["), ut = R.indexOf("]");
              if (xt > -1) {
                let rt = R.slice(xt).indexOf(")") + xt, wt = R.substring(0, xt), Mt = R.substring(rt + 1), Qt = R.substring(xt + 6, rt).split(","), Wt = Number(Qt[1]), Vt;
                if (q = "", G = U(Qt[0], F)) {
                  Vt = (Wt = isNaN(Wt) ? G.length : Wt) < 0 ? G.length + Wt : Math.min(Wt, G.length);
                  for (let Ke = 0; Ke < Vt; ++Ke) q += wt + G[Ke] + Mt;
                }
                return q.length ? q : "";
              }
              if (dt > -1) {
                var st;
                let rt = R.slice(dt).indexOf(")") + dt, wt = R.substring(dt + 8, rt).split(",");
                switch (Number(U(wt[0], F))) {
                  case 0:
                    q = $(wt[4], wt[1]);
                    break;
                  case 1:
                    q = $(wt[2], wt[1]);
                    break;
                  case 2:
                    q = $(wt[3], wt[1]);
                    break;
                  default:
                    q = wt[1];
                }
                return q ? (st = q).trim && st.trim() || st.replace(/^\s+|\s+$/g, "") : "";
              }
              if (ht > -1) {
                let rt, wt = R.substring(0, ht), Mt = Number(R.substring(ht + 1, ut));
                return G = U(wt, F), !isNaN(Mt) && G && (Mt < 0 ? (rt = G[G.length + Mt]) === void 0 && (rt = G[0]) : (rt = G[Mt]) === void 0 && (rt = G[G.length - 1])), rt !== void 0 ? rt : "";
              }
              return "{" + R + "}";
            })(z.value, b));
          }), Y(A.reduce((z, R) => z + R.value, ""), b, C);
        }
        function p(g, b) {
          let C = g.split("."), k = this.options.lang, A = 0;
          for (; A < C.length; ++A) k = k && k[C[A]];
          return typeof k == "string" ? n(k, b, this) : "";
        }
        u.compose = function(g) {
          let b = g.prototype;
          b.langFormat || (b.langFormat = p);
        }, u.i18nFormat = n;
      })(Te || (Te = {}));
      let lt = Te, { doc: At } = _(), { stripHTMLTagsFromString: mt } = zt, { defined: Dt, find: Xt, fireEvent: ue } = _();
      function Ee(u) {
        if (u.points && u.points.length) {
          let n = Xt(u.points, (p) => !!p.graphic);
          return n && n.graphic && n.graphic.element;
        }
      }
      function xi(u) {
        let n = Ee(u);
        return n && n.parentNode || u.graph && u.graph.element || u.group && u.group.element;
      }
      let It = { fireEventOnWrappedOrUnwrappedElement: function u(n, p) {
        let g = p.type, b = n.hcEvents;
        At?.createEvent && (n.dispatchEvent || n.fireEvent) ? n.dispatchEvent ? n.dispatchEvent(p) : n.fireEvent(g, p) : b && b[g] ? ue(n, g, p) : n.element && u(n.element, p);
      }, getChartTitle: function(u) {
        return mt(u.options.title.text || u.langFormat("accessibility.defaultChartTitle", { chart: u }), u.renderer.forExport);
      }, getAxisDescription: function(u) {
        return u && (u.options.accessibility?.description || u.axisTitle?.textStr || u.options.id || u.categories && "categories" || u.dateTime && "Time" || "values");
      }, getAxisRangeDescription: function(u) {
        let n = u.options || {};
        return n.accessibility && n.accessibility.rangeDescription !== void 0 ? n.accessibility.rangeDescription : u.categories ? (function(p) {
          let g = p.chart;
          return p.dataMax && p.dataMin ? g.langFormat("accessibility.axis.rangeCategories", { chart: g, axis: p, numCategories: p.dataMax - p.dataMin + 1 }) : "";
        })(u) : u.dateTime && (u.min === 0 || u.dataMin === 0) ? (function(p) {
          let g = p.chart, b = {}, C = p.dataMin || p.min || 0, k = p.dataMax || p.max || 0, A = "Seconds";
          b.Seconds = (k - C) / 1e3, b.Minutes = b.Seconds / 60, b.Hours = b.Minutes / 60, b.Days = b.Hours / 24, ["Minutes", "Hours", "Days"].forEach(function(P) {
            b[P] > 2 && (A = P);
          });
          let E = b[A].toFixed(+(A !== "Seconds" && A !== "Minutes"));
          return g.langFormat("accessibility.axis.timeRange" + A, { chart: g, axis: p, range: E.replace(".0", "") });
        })(u) : (function(p) {
          let g = p.chart, b = g.options, C = b && b.accessibility && b.accessibility.screenReaderSection.axisRangeDateFormat || "", k = { min: p.dataMin || p.min || 0, max: p.dataMax || p.max || 0 }, A = function(E) {
            return p.dateTime ? g.time.dateFormat(C, k[E]) : k[E].toString();
          };
          return g.langFormat("accessibility.axis.rangeFromTo", { chart: g, axis: p, rangeFrom: A("min"), rangeTo: A("max") });
        })(u);
      }, getPointFromXY: function(u, n, p) {
        let g = u.length, b;
        for (; g--; ) if (b = Xt(u[g].points || [], function(C) {
          return C.x === n && C.y === p;
        })) return b;
      }, getSeriesFirstPointElement: Ee, getSeriesFromName: function(u, n) {
        return n ? (u.series || []).filter(function(p) {
          return p.name === n;
        }) : u.series;
      }, getSeriesA11yElement: xi, unhideChartElementFromAT: function u(n, p) {
        p.setAttribute("aria-hidden", !1), p !== n.renderTo && p.parentNode && p.parentNode !== At.body && (Array.prototype.forEach.call(p.parentNode.childNodes, function(g) {
          g.hasAttribute("aria-hidden") || g.setAttribute("aria-hidden", !0);
        }), u(n, p.parentNode));
      }, hideSeriesFromAT: function(u) {
        let n = xi(u);
        n && n.setAttribute("aria-hidden", !0);
      }, scrollAxisToPoint: function(u) {
        let n = u.series.xAxis, p = u.series.yAxis, g = n && n.scrollbar ? n : p, b = g && g.scrollbar;
        if (b && Dt(b.to) && Dt(b.from)) {
          let C = b.to - b.from, k = (function(A, E) {
            if (!Dt(A.dataMin) || !Dt(A.dataMax)) return 0;
            let P = A.toPixels(A.dataMin), B = A.toPixels(A.dataMax), z = A.coll === "xAxis" ? "x" : "y";
            return (A.toPixels(E[z] || 0) - P) / (B - P);
          })(g, u);
          b.updatePosition(k - C / 2, k + C / 2), ue(b, "changed", { from: b.from, to: b.to, trigger: "scrollbar", DOMEvent: null });
        }
      } }, { doc: ge } = _(), { removeElement: Vs } = zt, us = class {
        constructor() {
          this.elements = [];
        }
        createElement() {
          let u = ge.createElement.apply(ge, arguments);
          return this.elements.push(u), u;
        }
        removeElement(u) {
          Vs(u), this.elements.splice(this.elements.indexOf(u), 1);
        }
        destroyCreatedElements() {
          this.elements.forEach(function(u) {
            Vs(u);
          }), this.elements = [];
        }
      }, { addEvent: Xa } = _(), J = class {
        constructor() {
          this.eventRemovers = [];
        }
        addEvent() {
          let u = Xa.apply(_(), arguments);
          return this.eventRemovers.push({ element: arguments[0], remover: u }), u;
        }
        removeEvent(u) {
          let n = this.eventRemovers.map((p) => p.remover).indexOf(u);
          this.eventRemovers[n].remover(), this.eventRemovers.splice(n, 1);
        }
        removeAddedEvents() {
          this.eventRemovers.map((u) => u.remover).forEach((u) => u()), this.eventRemovers = [];
        }
      }, { fireEventOnWrappedOrUnwrappedElement: Ga } = It, { getFakeMouseEvent: gs } = zt, Ie = class {
        destroy() {
        }
        getKeyboardNavigation() {
          return [];
        }
        init() {
        }
        onChartRender() {
        }
        onChartUpdate() {
        }
        initBase(u, n) {
          this.chart = u, this.eventProvider = new J(), this.domElementProvider = new us(), this.proxyProvider = n, this.keyCodes = { left: 37, right: 39, up: 38, down: 40, enter: 13, space: 32, esc: 27, tab: 9, pageUp: 33, pageDown: 34, end: 35, home: 36 };
        }
        addEvent(u, n, p, g) {
          return this.eventProvider.addEvent(u, n, p, g);
        }
        createElement(u, n) {
          return this.domElementProvider.createElement(u, n);
        }
        fakeClickEvent(u) {
          Ga(u, gs("click"));
        }
        destroyBase() {
          this.domElementProvider.destroyCreatedElements(), this.eventProvider.removeAddedEvents();
        }
      }, { find: so } = _(), ke = class {
        constructor(u, n) {
          this.chart = u, this.keyCodeMap = n.keyCodeMap || [], this.validate = n.validate, this.init = n.init, this.terminate = n.terminate, this.response = { success: 1, prev: 2, next: 3, noHandler: 4, fail: 5 };
        }
        run(u) {
          let n = u.which || u.keyCode, p = this.response.noHandler, g = so(this.keyCodeMap, function(b) {
            return b[0].indexOf(n) > -1;
          });
          return g ? p = g[1].call(this, n, u) : n === 9 && (p = this.response[u.shiftKey ? "prev" : "next"]), p;
        }
      }, { unhideChartElementFromAT: ro, getChartTitle: Ti } = It, { doc: Vi } = _(), { stripHTMLTagsFromString: oo } = zt, Ya = class extends Ie {
        onChartUpdate() {
          this.handleSVGTitleElement(), this.setSVGContainerLabel(), this.setGraphicContainerAttrs(), this.setRenderToAttrs(), this.makeCreditsAccessible();
        }
        handleSVGTitleElement() {
          let u = this.chart, n = "highcharts-title-" + u.index, p = oo(u.langFormat("accessibility.svgContainerTitle", { chartTitle: Ti(u) }));
          if (p.length) {
            let g = this.svgTitleElement = this.svgTitleElement || Vi.createElementNS("http://www.w3.org/2000/svg", "title");
            g.textContent = p, g.id = n, u.renderTo.insertBefore(g, u.renderTo.firstChild);
          }
        }
        setSVGContainerLabel() {
          let u = this.chart, n = u.langFormat("accessibility.svgContainerLabel", { chartTitle: Ti(u) });
          u.renderer.box && n.length && u.renderer.box.setAttribute("aria-label", n);
        }
        setGraphicContainerAttrs() {
          let u = this.chart, n = u.langFormat("accessibility.graphicContainerLabel", { chartTitle: Ti(u) });
          n.length && u.container.setAttribute("aria-label", n);
        }
        setRenderToAttrs() {
          let u = this.chart, n = u.options.accessibility.landmarkVerbosity !== "disabled", p = u.langFormat("accessibility.chartContainerLabel", { title: Ti(u), chart: u });
          p && (u.renderTo.setAttribute("role", n ? "region" : "group"), u.renderTo.setAttribute("aria-label", p));
        }
        makeCreditsAccessible() {
          let u = this.chart, n = u.credits;
          n && (n.textStr && n.element.setAttribute("aria-label", u.langFormat("accessibility.credits", { creditsStr: oo(n.textStr, u.renderer.forExport) })), ro(u, n.element));
        }
        getKeyboardNavigation() {
          let u = this.chart;
          return new ke(u, { keyCodeMap: [], validate: function() {
            return !0;
          }, init: function() {
            let n = u.accessibility;
            n && n.keyboardNavigation.tabindexContainer.focus();
          } });
        }
        destroy() {
          this.chart.renderTo.setAttribute("aria-hidden", !0);
        }
      }, { addEvent: Ge, pick: ja } = _();
      (function(u) {
        let n = ["x", "y", "transform", "width", "height", "r", "d", "stroke-width"];
        function p() {
          let k = this.focusElement, A = this.options.accessibility.keyboardNavigation.focusBorder;
          k && (k.removeFocusBorder(), A.enabled && k.addFocusBorder(A.margin, { stroke: A.style.color, strokeWidth: A.style.lineWidth, r: A.style.borderRadius }));
        }
        function g(k, A) {
          let E = this.options.accessibility.keyboardNavigation.focusBorder, P = A || k.element;
          P && P.focus && (P.hcEvents && P.hcEvents.focusin || Ge(P, "focusin", function() {
          }), P.focus(), E.hideBrowserFocusOutline && (P.style.outline = "none")), this.focusElement && this.focusElement.removeFocusBorder(), this.focusElement = k, Ge(this, "endResize", function() {
            this.renderFocusBorder();
          }), this.renderFocusBorder();
        }
        function b(k, A) {
          this.focusBorder && this.removeFocusBorder();
          let E = this.getBBox(), P = ja(k, 3), B = this.parentGroup, z = this.scaleX || B && B.scaleX, R = this.scaleY || B && B.scaleY, F = (z ? !R : R) ? Math.abs(z || R || 1) : (Math.abs(z || 1) + Math.abs(R || 1)) / 2, G = this.renderer.fontMetrics(this).h;
          E.x += this.translateX ? this.translateX : 0, E.y += this.translateY ? this.translateY : 0;
          let q = E.x - P, xt = E.y - P, dt = E.width + 2 * P, ht = E.height + 2 * P, ut = !!this.text;
          if (this.element.nodeName === "text" || ut) {
            let st, rt, wt = !!this.rotation, Mt = ut ? { x: +!!wt, y: 0 } : (st = 0, rt = 0, this.attr("text-anchor") === "middle" ? st = rt = 0.5 : this.rotation ? st = 0.25 : rt = 0.75, { x: st, y: rt }), Qt = +this.attr("x"), Wt = +this.attr("y");
            if (isNaN(Qt) || (q = Qt - E.width * Mt.x - P), isNaN(Wt) || (xt = Wt - (this.attr("text-anchor") === "start" ? G : E.height) * Mt.y - P), ut && wt) {
              let Vt = dt;
              dt = ht, ht = Vt, isNaN(Qt) || (q = Qt - E.height * Mt.x - P), isNaN(Wt) || (xt = Wt - E.width * Mt.y - P);
            }
          }
          this.focusBorder = this.renderer.rect(q, xt, dt, ht, parseInt((A && A.r || 0).toString(), 10) / F).addClass("highcharts-focus-border").attr({ zIndex: 99 }).add(B), this.renderer.styledMode || this.focusBorder.attr({ stroke: A && A.stroke, "stroke-width": (A && A.strokeWidth || 0) / F }), (function(st, ...rt) {
            st.focusBorderUpdateHooks || (st.focusBorderUpdateHooks = {}, n.forEach((wt) => {
              let Mt = wt + "Setter", Qt = st[Mt] || st._defaultSetter;
              st.focusBorderUpdateHooks[Mt] = Qt, st[Mt] = function() {
                let Wt = Qt.apply(st, arguments);
                return st.addFocusBorder.apply(st, rt), Wt;
              };
            }));
          })(this, k, A), (function(st) {
            if (st.focusBorderDestroyHook) return;
            let rt = st.destroy;
            st.destroy = function() {
              return st.focusBorder && st.focusBorder.destroy && st.focusBorder.destroy(), rt.apply(st, arguments);
            }, st.focusBorderDestroyHook = rt;
          })(this);
        }
        function C() {
          var k;
          k = this, k.focusBorderUpdateHooks && (Object.keys(k.focusBorderUpdateHooks).forEach((A) => {
            let E = k.focusBorderUpdateHooks[A];
            E === k._defaultSetter ? delete k[A] : k[A] = E;
          }), delete k.focusBorderUpdateHooks), this.focusBorderDestroyHook && (this.destroy = this.focusBorderDestroyHook, delete this.focusBorderDestroyHook), this.focusBorder && (this.focusBorder.destroy(), delete this.focusBorder);
        }
        u.compose = function(k, A) {
          let E = k.prototype, P = A.prototype;
          E.renderFocusBorder || (E.renderFocusBorder = p, E.setFocusToElement = g), P.addFocusBorder || (P.addFocusBorder = b, P.removeFocusBorder = C);
        };
      })(Le || (Le = {}));
      let qs = Le;
      var Ua = ft(660), Ks = ft.n(Ua);
      let { doc: Va } = _(), { addClass: qa, visuallyHideElement: ao } = zt, { attr: no } = _(), Ft = class {
        constructor(u, n) {
          this.chart = u, this.domElementProvider = new us(), this.announceRegion = this.addAnnounceRegion(n);
        }
        destroy() {
          this.domElementProvider.destroyCreatedElements();
        }
        announce(u) {
          Ks().setElementHTML(this.announceRegion, u), this.clearAnnouncementRegionTimer && clearTimeout(this.clearAnnouncementRegionTimer), this.clearAnnouncementRegionTimer = setTimeout(() => {
            this.announceRegion.innerHTML = Ks().emptyHTML, delete this.clearAnnouncementRegionTimer;
          }, 3e3);
        }
        addAnnounceRegion(u) {
          let n = this.chart.announcerContainer || this.createAnnouncerContainer(), p = this.domElementProvider.createElement("div");
          return no(p, { "aria-hidden": !1, "aria-live": u, "aria-atomic": !0 }), this.chart.styledMode ? qa(p, "highcharts-visually-hidden") : ao(p), n.appendChild(p), p;
        }
        createAnnouncerContainer() {
          let u = this.chart, n = Va.createElement("div");
          return no(n, { "aria-hidden": !1, class: "highcharts-announcer-container" }), n.style.position = "relative", u.renderTo.insertBefore(n, u.renderTo.firstChild), u.announcerContainer = n, n;
        }
      }, { escapeStringForHTML: $s, stripHTMLTagsFromString: Ka } = zt;
      function lo(u) {
        return (u.annotations || []).reduce((n, p) => (p.options && p.options.visible !== !1 && (n = n.concat(p.labels)), n), []);
      }
      function ho(u) {
        return u.options && u.options.accessibility && u.options.accessibility.description || u.graphic && u.graphic.text && u.graphic.text.textStr || "";
      }
      function Ye(u) {
        let n = u.options && u.options.accessibility && u.options.accessibility.description;
        if (n) return n;
        let p = u.chart, g = ho(u), b = u.points, C = (B) => B.graphic && B.graphic.element && B.graphic.element.getAttribute("aria-label") || "", k = b.filter((B) => !!B.graphic).map((B) => {
          let z = B.accessibility && B.accessibility.valueDescription || C(B), R = B && B.series.name || "";
          return (R ? R + ", " : "") + "data point " + z;
        }).filter((B) => !!B), A = k.length, E = A > 1 ? "MultiplePoints" : A ? "SinglePoint" : "NoPoints", P = { annotationText: g, annotation: u, numPoints: A, annotationPoint: k[0], additionalAnnotationPoints: k.slice(1) };
        return p.langFormat("accessibility.screenReaderSection.annotations.description" + E, P);
      }
      function Zs(u) {
        return lo(u).map((n) => {
          let p = $s(Ka(Ye(n), u.renderer.forExport));
          return p ? `<li>${p}</li>` : "";
        });
      }
      let fe = { getAnnotationsInfoHTML: function(u) {
        let n = u.annotations;
        return n && n.length ? `<ul style="list-style-type: none">${Zs(u).join(" ")}</ul>` : "";
      }, getPointAnnotationTexts: function(u) {
        let n = lo(u.series.chart).filter((p) => p.points.indexOf(u) > -1);
        return n.length ? n.map((p) => `${ho(p)}`) : [];
      } }, { getAnnotationsInfoHTML: $a } = fe, { getAxisDescription: qi, getAxisRangeDescription: Za, getChartTitle: fs, unhideChartElementFromAT: oe } = It, { format: co } = Se(), { doc: po } = _(), { addClass: ms, getElement: Tt, getHeadingTagNameForElement: uo, stripHTMLTagsFromString: go, visuallyHideElement: _s } = zt, { attr: fo, pick: ae, replaceNested: _a } = _();
      function mo(u) {
        return _a(u, [/<([\w\-.:!]+)\b[^<>]*>\s*<\/\1>/g, ""]);
      }
      let Ja = class extends Ie {
        constructor() {
          super(...arguments), this.screenReaderSections = {};
        }
        init() {
          let u = this.chart, n = this;
          this.initRegionsDefinitions(), this.addEvent(u, "afterGetTableAST", function(p) {
            n.onDataTableCreated(p);
          }), this.addEvent(u, "afterViewData", function(p) {
            p.wasHidden && (n.dataTableDiv = p.element, setTimeout(function() {
              n.focusDataTable();
            }, 300));
          }), this.addEvent(u, "afterHideData", function() {
            n.viewDataTableButton && n.viewDataTableButton.setAttribute("aria-expanded", "false");
          }), u.exporting && this.addEvent(u, "afterPrint", function() {
            n.updateAllScreenReaderSections();
          }), this.announcer = new Ft(u, "assertive");
        }
        initRegionsDefinitions() {
          let u = this, n = this.chart.options.accessibility;
          this.screenReaderSections = { before: { element: null, buildContent: function(p) {
            let g = n.screenReaderSection.beforeChartFormatter;
            return g ? g(p) : u.defaultBeforeChartFormatter(p);
          }, insertIntoDOM: function(p, g) {
            g.renderTo.insertBefore(p, g.renderTo.firstChild);
          }, afterInserted: function() {
            u.sonifyButtonId !== void 0 && u.initSonifyButton(u.sonifyButtonId), u.dataTableButtonId !== void 0 && u.initDataTableButton(u.dataTableButtonId);
          } }, after: { element: null, buildContent: function(p) {
            let g = n.screenReaderSection.afterChartFormatter;
            return g ? g(p) : u.defaultAfterChartFormatter();
          }, insertIntoDOM: function(p, g) {
            g.renderTo.insertBefore(p, g.container.nextSibling);
          }, afterInserted: function() {
            u.chart.accessibility && n.keyboardNavigation.enabled && u.chart.accessibility.keyboardNavigation.updateExitAnchor();
          } } };
        }
        onChartRender() {
          this.linkedDescriptionElement = this.getLinkedDescriptionElement(), this.setLinkedDescriptionAttrs(), this.updateAllScreenReaderSections();
        }
        updateAllScreenReaderSections() {
          let u = this;
          Object.keys(this.screenReaderSections).forEach(function(n) {
            u.updateScreenReaderSection(n);
          });
        }
        getLinkedDescriptionElement() {
          let u = this.chart.options.accessibility.linkedDescription;
          if (!u) return;
          if (typeof u != "string") return u;
          let n = co(u, this.chart), p = po.querySelectorAll(n);
          if (p.length === 1) return p[0];
        }
        setLinkedDescriptionAttrs() {
          let u = this.linkedDescriptionElement;
          u && (u.setAttribute("aria-hidden", "true"), ms(u, "highcharts-linked-description"));
        }
        updateScreenReaderSection(u) {
          let n = this.chart, p = this.screenReaderSections[u], g = p.buildContent(n), b = p.element = p.element || this.createElement("div"), C = b.firstChild || this.createElement("div");
          g ? (this.setScreenReaderSectionAttribs(b, u), Ks().setElementHTML(C, g), b.appendChild(C), p.insertIntoDOM(b, n), n.styledMode ? ms(C, "highcharts-visually-hidden") : _s(C), oe(n, C), p.afterInserted && p.afterInserted()) : (b.parentNode && b.parentNode.removeChild(b), p.element = null);
        }
        setScreenReaderSectionAttribs(u, n) {
          let p = this.chart, g = p.langFormat("accessibility.screenReaderSection." + n + "RegionLabel", { chart: p, chartTitle: fs(p) });
          fo(u, { id: `highcharts-screen-reader-region-${n}-${p.index}`, "aria-label": g || void 0 }), u.style.position = "relative", g && u.setAttribute("role", p.options.accessibility.landmarkVerbosity === "all" ? "region" : "group");
        }
        defaultBeforeChartFormatter() {
          let u = this.chart, n = u.options.accessibility.screenReaderSection.beforeChartFormat;
          if (!n) return "";
          let p = this.getAxesDescription(), g = u.sonify && u.options.sonification && u.options.sonification.enabled, b = "highcharts-a11y-sonify-data-btn-" + u.index, C = "hc-linkto-highcharts-data-table-" + u.index, k = $a(u), A = u.langFormat("accessibility.screenReaderSection.annotations.heading", { chart: u }), E = { headingTagName: uo(u.renderTo), chartTitle: fs(u), typeDescription: this.getTypeDescriptionText(), chartSubtitle: this.getSubtitleText(), chartLongdesc: this.getLongdescText(), xAxisDescription: p.xAxis, yAxisDescription: p.yAxis, playAsSoundButton: g ? this.getSonifyButtonText(b) : "", viewTableButton: u.exporting?.getCSV ? this.getDataTableButtonText(C) : "", annotationsTitle: k ? A : "", annotationsList: k }, P = lt.i18nFormat(n, E, u);
          return this.dataTableButtonId = C, this.sonifyButtonId = b, mo(P);
        }
        defaultAfterChartFormatter() {
          let u = this.chart, n = u.options.accessibility.screenReaderSection.afterChartFormat;
          if (!n) return "";
          let p = { endOfChartMarker: this.getEndOfChartMarkerText() };
          return mo(lt.i18nFormat(n, p, u));
        }
        getLinkedDescription() {
          let u = this.linkedDescriptionElement;
          return go(u && u.innerHTML || "", this.chart.renderer.forExport);
        }
        getLongdescText() {
          let u = this.chart.options, n = u.caption, p = n && n.text, g = this.getLinkedDescription();
          return u.accessibility.description || g || p || "";
        }
        getTypeDescriptionText() {
          let u = this.chart;
          return u.types ? u.options.accessibility.typeDescription || (function(n, p) {
            let g = p[0], b = n.series && n.series[0] || {}, C = n.mapView && n.mapView.geoMap && n.mapView.geoMap.title, k = { numSeries: n.series.length, numPoints: b.points && b.points.length, chart: n, mapTitle: C };
            if (!g) return n.langFormat("accessibility.chartTypes.emptyChart", k);
            if (g === "map" || g === "tiledwebmap") return k.mapTitle ? n.langFormat("accessibility.chartTypes.mapTypeDescription", k) : n.langFormat("accessibility.chartTypes.unknownMap", k);
            if (n.types.length > 1) return n.langFormat("accessibility.chartTypes.combinationChart", k);
            let A = p[0], E = n.langFormat("accessibility.seriesTypeDescriptions." + A, k), P = n.series && n.series.length < 2 ? "Single" : "Multiple";
            return (n.langFormat("accessibility.chartTypes." + A + P, k) || n.langFormat("accessibility.chartTypes.default" + P, k)) + (E ? " " + E : "");
          })(u, u.types) : "";
        }
        getDataTableButtonText(u) {
          let n = this.chart;
          return '<button id="' + u + '">' + n.langFormat("accessibility.table.viewAsDataTableButtonText", { chart: n, chartTitle: fs(n) }) + "</button>";
        }
        getSonifyButtonText(u) {
          let n = this.chart;
          return n.options.sonification && n.options.sonification.enabled === !1 ? "" : '<button id="' + u + '">' + n.langFormat("accessibility.sonification.playAsSoundButtonText", { chart: n, chartTitle: fs(n) }) + "</button>";
        }
        getSubtitleText() {
          let u = this.chart.options.subtitle;
          return go(u && u.text || "", this.chart.renderer.forExport);
        }
        getEndOfChartMarkerText() {
          let u = Tt(`highcharts-end-of-chart-marker-${this.chart.index}`);
          if (u) return u.outerHTML;
          let n = this.chart, p = n.langFormat("accessibility.screenReaderSection.endOfChartMarker", { chart: n });
          return '<div id="highcharts-end-of-chart-marker-' + n.index + '">' + p + "</div>";
        }
        onDataTableCreated(u) {
          let n = this.chart;
          if (n.options.accessibility.enabled) {
            this.viewDataTableButton && this.viewDataTableButton.setAttribute("aria-expanded", "true");
            let p = u.tree.attributes || {};
            p.tabindex = -1, p.summary = n.langFormat("accessibility.table.tableSummary", { chart: n }), u.tree.attributes = p;
          }
        }
        focusDataTable() {
          let u = this.dataTableDiv, n = u && u.getElementsByTagName("table")[0];
          n && n.focus && n.focus();
        }
        initSonifyButton(u) {
          let n = this.sonifyButton = Tt(u), p = this.chart, g = (b) => {
            n && (n.setAttribute("aria-hidden", "true"), n.setAttribute("aria-label", "")), b.preventDefault(), b.stopPropagation();
            let C = p.langFormat("accessibility.sonification.playAsSoundClickAnnouncement", { chart: p });
            this.announcer.announce(C), setTimeout(() => {
              n && (n.removeAttribute("aria-hidden"), n.removeAttribute("aria-label")), p.sonify && p.sonify();
            }, 1e3);
          };
          n && p && (n.setAttribute("tabindex", -1), n.onclick = function(b) {
            (p.options.accessibility && p.options.accessibility.screenReaderSection.onPlayAsSoundClick || g).call(this, b, p);
          });
        }
        initDataTableButton(u) {
          let n = this.viewDataTableButton = Tt(u), p = this.chart, g = u.replace("hc-linkto-", "");
          n && (fo(n, { tabindex: -1, "aria-expanded": !!Tt(g) }), n.onclick = p.options.accessibility.screenReaderSection.onViewDataTableClick || function() {
            p.exporting?.viewData();
          });
        }
        getAxesDescription() {
          let u = this.chart, n = function(A, E) {
            let P = u[A];
            return P.length > 1 || P[0] && ae(P[0].options.accessibility && P[0].options.accessibility.enabled, E);
          }, p = !!u.types && 0 > u.types.indexOf("map") && 0 > u.types.indexOf("treemap") && 0 > u.types.indexOf("tilemap"), g = !!u.hasCartesianSeries, b = n("xAxis", !u.angular && g && p), C = n("yAxis", g && p), k = {};
          return b && (k.xAxis = this.getAxisDescriptionText("xAxis")), C && (k.yAxis = this.getAxisDescriptionText("yAxis")), k;
        }
        getAxisDescriptionText(u) {
          let n = this.chart, p = n[u];
          return n.langFormat("accessibility.axis." + u + "Description" + (p.length > 1 ? "Plural" : "Singular"), { chart: n, names: p.map(function(g) {
            return qi(g);
          }), ranges: p.map(function(g) {
            return Za(g);
          }), numAxes: p.length });
        }
        destroy() {
          this.announcer && this.announcer.destroy();
        }
      }, { attr: Qa } = _(), { getChartTitle: Js, unhideChartElementFromAT: xo } = It, { getFakeMouseEvent: xs } = zt;
      function bs(u) {
        return u.exporting?.svgElements?.[0];
      }
      class Ki extends Ie {
        init() {
          let n = this.chart, p = this;
          this.addEvent(n, "exportMenuShown", function() {
            p.onMenuShown();
          }), this.addEvent(n, "exportMenuHidden", function() {
            p.onMenuHidden();
          }), this.createProxyGroup();
        }
        onMenuHidden() {
          let n = this.chart.exporting?.contextMenuEl;
          n && n.setAttribute("aria-hidden", "true"), this.setExportButtonExpandedState("false");
        }
        onMenuShown() {
          let n = this.chart, p = n.exporting?.contextMenuEl;
          p && (this.addAccessibleContextMenuAttribs(), xo(n, p)), this.setExportButtonExpandedState("true");
        }
        setExportButtonExpandedState(n) {
          this.exportButtonProxy && this.exportButtonProxy.innerElement.setAttribute("aria-expanded", n);
        }
        onChartRender() {
          let n = this.chart, p = n.focusElement, g = n.accessibility;
          this.proxyProvider.clearGroup("chartMenu"), this.proxyMenuButton(), this.exportButtonProxy && p && p === n.exporting?.group && (p.focusBorder ? n.setFocusToElement(p, this.exportButtonProxy.innerElement) : g && g.keyboardNavigation.tabindexContainer.focus());
        }
        proxyMenuButton() {
          let n = this.chart, p = this.proxyProvider, g = bs(n);
          (function(b) {
            let C = b.options.exporting, k = bs(b);
            return !!(C && C.enabled !== !1 && C.accessibility && C.accessibility.enabled && k && k.element);
          })(n) && g && (this.exportButtonProxy = p.addProxyElement("chartMenu", { click: g }, "button", { "aria-label": n.langFormat("accessibility.exporting.menuButtonLabel", { chart: n, chartTitle: Js(n) }), "aria-expanded": !1, title: n.options.lang.contextButtonTitle || null }));
        }
        createProxyGroup() {
          this.chart && this.proxyProvider && this.proxyProvider.addGroup("chartMenu");
        }
        addAccessibleContextMenuAttribs() {
          let n = this.chart, p = n.exporting?.divElements;
          if (p && p.length) {
            p.forEach((b) => {
              b && (b.tagName !== "LI" || b.children && b.children.length ? b.setAttribute("aria-hidden", "true") : b.setAttribute("tabindex", -1));
            });
            let g = p[0] && p[0].parentNode;
            g && Qa(g, { "aria-hidden": void 0, "aria-label": n.langFormat("accessibility.exporting.chartMenuLabel", { chart: n }), role: "list" });
          }
        }
        getKeyboardNavigation() {
          let n = this.keyCodes, p = this.chart, g = this;
          return new ke(p, { keyCodeMap: [[[n.left, n.up], function() {
            return g.onKbdPrevious(this);
          }], [[n.right, n.down], function() {
            return g.onKbdNext(this);
          }], [[n.enter, n.space], function() {
            return g.onKbdClick(this);
          }]], validate: function() {
            return !!p.exporting && p.options.exporting?.buttons?.contextButton.enabled !== !1 && p.options.exporting.enabled !== !1 && (p.options.exporting.accessibility?.enabled || !1) !== !1;
          }, init: function() {
            let b = g.exportButtonProxy, C = g.chart.exporting?.group;
            b && C && p.setFocusToElement(C, b.innerElement);
          }, terminate: function() {
            p.hideExportMenu();
          } });
        }
        onKbdPrevious(n) {
          let p = this.chart, g = p.options.accessibility, b = n.response, C = p.highlightedExportItemIx || 0;
          for (; C--; ) if (p.highlightExportItem(C)) return b.success;
          return g.keyboardNavigation.wrapAround ? (p.highlightLastExportItem(), b.success) : b.prev;
        }
        onKbdNext(n) {
          let p = this.chart, g = p.options.accessibility, b = n.response;
          for (let C = (p.highlightedExportItemIx || 0) + 1; C < (p.exporting?.divElements?.length || 0); ++C) if (p.highlightExportItem(C)) return b.success;
          return g.keyboardNavigation.wrapAround ? (p.highlightExportItem(0), b.success) : b.next;
        }
        onKbdClick(n) {
          let p = this.chart, g = p.highlightedExportItemIx !== void 0 && p.exporting?.divElements?.[p.highlightedExportItemIx], b = bs(p)?.element;
          return p.exporting?.openMenu ? g && this.fakeClickEvent(g) : (b && this.fakeClickEvent(b), p.highlightExportItem(0)), n.response.success;
        }
      }
      (function(u) {
        function n() {
          let C = bs(this);
          if (C) {
            let k = C.element;
            k.onclick && (k.onclick = function() {
              xs("click");
            });
          }
        }
        function p() {
          let C = this.exporting?.divElements;
          C && this.exporting?.contextMenuEl && this.exporting?.openMenu && (C.forEach((k) => {
            k && k.className === "highcharts-menu-item" && k.onmouseout && k.onmouseout(xs("mouseout"));
          }), this.highlightedExportItemIx = 0, this.exporting.contextMenuEl.hideMenu(), this.container.focus());
        }
        function g(C) {
          let k = this.exporting?.divElements?.[C], A = this.highlightedExportItemIx !== void 0 && this.exporting?.divElements?.[this.highlightedExportItemIx];
          if (k && k.tagName === "LI" && !(k.children && k.children.length)) {
            let E = !!(this.renderTo.getElementsByTagName("g")[0] || {}).focus;
            return k.focus && E && k.focus(), A && A.onmouseout && A.onmouseout(xs("mouseout")), k.onmouseover && k.onmouseover(xs("mouseover")), this.highlightedExportItemIx = C, !0;
          }
          return !1;
        }
        function b() {
          if (this.exporting?.divElements) {
            let C = this.exporting?.divElements.length;
            for (; C--; ) if (this.highlightExportItem(C)) return !0;
          }
          return !1;
        }
        u.compose = function(C) {
          let k = C.prototype;
          k.hideExportMenu || (k.hideExportMenu = p, k.highlightExportItem = g, k.highlightLastExportItem = b, k.showExportMenu = n);
        };
      })(Ki || (Ki = {}));
      let ys = Ki, { doc: $t, win: Qs } = _(), { addEvent: tn, defined: en, fireEvent: sn } = _(), { getElement: rn, simulatedEventTarget: bo } = zt;
      class tr {
        constructor(n, p) {
          this.currentModuleIx = NaN, this.modules = [], this.init(n, p);
        }
        init(n, p) {
          let g = this.eventProvider = new J();
          this.chart = n, this.components = p, this.modules = [], this.currentModuleIx = 0, this.update(), g.addEvent(this.tabindexContainer, "keydown", (b) => this.onKeydown(b)), g.addEvent(this.tabindexContainer, "focus", (b) => this.onFocus(b)), ["mouseup", "touchend"].forEach((b) => g.addEvent($t, b, (C) => this.onMouseUp(C))), ["mousedown", "touchstart"].forEach((b) => g.addEvent(n.renderTo, b, () => {
            this.isClickingChart = !0;
          }));
        }
        update(n) {
          let p = this.chart.options.accessibility, g = p && p.keyboardNavigation, b = this.components;
          this.updateContainerTabindex(), g && g.enabled && n && n.length ? (this.modules = n.reduce(function(C, k) {
            let A = b[k].getKeyboardNavigation();
            return C.concat(A);
          }, []), this.updateExitAnchor()) : (this.modules = [], this.currentModuleIx = 0, this.removeExitAnchor());
        }
        updateExitAnchor() {
          let n = rn(`highcharts-end-of-chart-marker-${this.chart.index}`);
          this.removeExitAnchor(), n ? (this.makeElementAnExitAnchor(n), this.exitAnchor = n) : this.createExitAnchor();
        }
        move(n) {
          let p = this.modules && this.modules[this.currentModuleIx];
          p && p.terminate && p.terminate(n), this.chart.focusElement && this.chart.focusElement.removeFocusBorder(), this.currentModuleIx += n;
          let g = this.modules && this.modules[this.currentModuleIx];
          if (g) {
            if (g.validate && !g.validate()) return this.move(n);
            if (g.init) return g.init(n), !0;
          }
          return this.currentModuleIx = 0, this.exiting = !0, n > 0 ? this.exitAnchor && this.exitAnchor.focus() : this.tabindexContainer.focus(), !1;
        }
        onFocus(n) {
          let p = this.chart, g = n.relatedTarget && p.container.contains(n.relatedTarget), b = p.options.accessibility, C = b && b.keyboardNavigation;
          if (C && C.enabled && !this.exiting && !this.tabbingInBackwards && !this.isClickingChart && !g) {
            let k = this.getFirstValidModuleIx();
            k !== null && (this.currentModuleIx = k, this.modules[k].init(1));
          }
          this.keyboardReset = !1, this.exiting = !1;
        }
        onMouseUp(n) {
          if (delete this.isClickingChart, !this.keyboardReset && n.relatedTarget !== bo) {
            let p = this.chart;
            if (!n.target || !p.container.contains(n.target)) {
              let g = this.modules && this.modules[this.currentModuleIx || 0];
              g && g.terminate && g.terminate(), this.currentModuleIx = 0;
            }
            p.focusElement && (p.focusElement.removeFocusBorder(), delete p.focusElement), this.keyboardReset = !0;
          }
        }
        onKeydown(n) {
          let p, g = n || Qs.event, b = this.modules && this.modules.length && this.modules[this.currentModuleIx], C = g.target;
          if ((!C || C.nodeName !== "INPUT" || C.classList.contains("highcharts-a11y-proxy-element")) && (this.keyboardReset = !1, this.exiting = !1, b)) {
            let k = b.run(g);
            k === b.response.success ? p = !0 : k === b.response.prev ? p = this.move(-1) : k === b.response.next && (p = this.move(1)), p && (g.preventDefault(), g.stopPropagation());
          }
        }
        updateContainerTabindex() {
          let n, p = this.chart.options.accessibility, g = p && p.keyboardNavigation, b = !(g && g.enabled === !1), C = this.chart, k = C.container;
          C.renderTo.hasAttribute("tabindex") ? (k.removeAttribute("tabindex"), n = C.renderTo) : n = k, this.tabindexContainer = n;
          let A = n.getAttribute("tabindex");
          b && !A ? n.setAttribute("tabindex", "0") : b || C.container.removeAttribute("tabindex");
        }
        createExitAnchor() {
          let n = this.chart, p = this.exitAnchor = $t.createElement("div");
          n.renderTo.appendChild(p), this.makeElementAnExitAnchor(p);
        }
        makeElementAnExitAnchor(n) {
          let p = this.tabindexContainer.getAttribute("tabindex") || 0;
          n.setAttribute("class", "highcharts-exit-anchor"), n.setAttribute("tabindex", p), n.setAttribute("aria-hidden", !1), this.addExitAnchorEventsToEl(n);
        }
        removeExitAnchor() {
          if (this.exitAnchor) {
            let n = this.eventProvider.eventRemovers.find((p) => p.element === this.exitAnchor);
            n && en(n.remover) && this.eventProvider.removeEvent(n.remover), this.exitAnchor.parentNode && this.exitAnchor.parentNode.removeChild(this.exitAnchor), delete this.exitAnchor;
          }
        }
        addExitAnchorEventsToEl(n) {
          let p = this.chart, g = this;
          this.eventProvider.addEvent(n, "focus", function(b) {
            let C = b || Qs.event, k = !(C.relatedTarget && p.container.contains(C.relatedTarget) || g.exiting);
            if (p.focusElement && delete p.focusElement, k) {
              if (g.tabbingInBackwards = !0, g.tabindexContainer.focus(), delete g.tabbingInBackwards, C.preventDefault(), g.modules && g.modules.length) {
                g.currentModuleIx = g.modules.length - 1;
                let A = g.modules[g.currentModuleIx];
                A && A.validate && !A.validate() ? g.move(-1) : A && A.init(-1);
              }
            } else g.exiting = !1;
          });
        }
        getFirstValidModuleIx() {
          let n = this.modules.length;
          for (let p = 0; p < n; ++p) {
            let g = this.modules[p];
            if (!g.validate || g.validate()) return p;
          }
          return null;
        }
        destroy() {
          this.removeExitAnchor(), this.eventProvider.removeAddedEvents(), this.chart.container.removeAttribute("tabindex");
        }
      }
      (function(u) {
        function n() {
          let g = this;
          sn(this, "dismissPopupContent", {}, function() {
            g.tooltip && g.tooltip.hide(0), g.hideExportMenu();
          });
        }
        function p(g) {
          (g.which || g.keyCode) === 27 && _().charts && _().charts.forEach((b) => {
            b && b.dismissPopupContent && b.dismissPopupContent();
          });
        }
        u.compose = function(g) {
          ys.compose(g);
          let b = g.prototype;
          return !b.dismissPopupContent && (b.dismissPopupContent = n, $t && tn($t, "keydown", p)), g;
        };
      })(tr || (tr = {}));
      let er = tr;
      var yo = ft(632), ir = ft.n(yo);
      let { animObject: sr } = _(), { doc: vs } = _(), { addEvent: on, fireEvent: Bt, isNumber: vo, pick: ko, syncTimeout: an } = _(), { getChartTitle: nn } = It, { stripHTMLTagsFromString: wo, addClass: ln, removeClass: Mo } = zt;
      function rr(u) {
        let n = u.legend && u.legend.allItems, p = u.options.legend.accessibility || {}, g = u.colorAxis && u.colorAxis.some((b) => !b.dataClasses || !b.dataClasses.length);
        return !!(n && n.length && !g && p.enabled !== !1);
      }
      function or(u, n) {
        let p = n.legendItem || {};
        for (let g of (n.setState(u ? "hover" : "", !0), ["group", "label", "symbol"])) {
          let b = p[g], C = b && b.element || b;
          C && Bt(C, u ? "mouseover" : "mouseout");
        }
      }
      class ar extends Ie {
        constructor() {
          super(...arguments), this.highlightedLegendItemIx = NaN, this.proxyGroup = null;
        }
        init() {
          let n = this;
          this.recreateProxies(), this.addEvent(ir(), "afterScroll", function() {
            this.chart === n.chart && (n.proxyProvider.updateGroupProxyElementPositions("legend"), n.updateLegendItemProxyVisibility(), n.highlightedLegendItemIx > -1 && this.chart.highlightLegendItem(n.highlightedLegendItemIx));
          }), this.addEvent(ir(), "afterPositionItem", function(p) {
            this.chart === n.chart && this.chart.renderer && n.updateProxyPositionForItem(p.item);
          }), this.addEvent(ir(), "afterRender", function() {
            this.chart === n.chart && this.chart.renderer && n.recreateProxies() && an(() => n.proxyProvider.updateGroupProxyElementPositions("legend"), sr(ko(this.chart.renderer.globalAnimation, !0)).duration);
          });
        }
        updateLegendItemProxyVisibility() {
          let n, p = this.chart, g = p.legend, b = g.allItems || [], C = g.currentPage || 1, k = g.clipHeight || 0;
          b.forEach((A) => {
            if (A.a11yProxyElement) {
              let E = g.pages && g.pages.length, P = A.a11yProxyElement.element, B = !1;
              if (n = A.legendItem || {}, E) {
                let z = n.pageIx || 0;
                B = (n.y || 0) + (n.label ? Math.round(n.label.getBBox().height) : 0) - g.pages[z] > k || z !== C - 1;
              }
              B ? p.styledMode ? ln(P, "highcharts-a11y-invisible") : P.style.visibility = "hidden" : (Mo(P, "highcharts-a11y-invisible"), P.style.visibility = "");
            }
          });
        }
        onChartRender() {
          rr(this.chart) || this.removeProxies();
        }
        highlightAdjacentLegendPage(n) {
          let p = this.chart, g = p.legend, b = (g.currentPage || 1) + n, C = g.pages || [];
          if (b > 0 && b <= C.length) {
            let k = 0;
            for (let A of g.allItems) ((A.legendItem || {}).pageIx || 0) + 1 === b && p.highlightLegendItem(k) && (this.highlightedLegendItemIx = k), ++k;
          }
        }
        updateProxyPositionForItem(n) {
          n.a11yProxyElement && n.a11yProxyElement.refreshPosition();
        }
        recreateProxies() {
          let n = vs.activeElement, p = this.proxyGroup, g = n && p && p.contains(n);
          return this.removeProxies(), !!rr(this.chart) && (this.addLegendProxyGroup(), this.proxyLegendItems(), this.updateLegendItemProxyVisibility(), this.updateLegendTitle(), g && this.chart.highlightLegendItem(this.highlightedLegendItemIx), !0);
        }
        removeProxies() {
          this.proxyProvider.removeGroup("legend");
        }
        updateLegendTitle() {
          let n = this.chart, p = wo((n.legend && n.legend.options.title && n.legend.options.title.text || "").replace(/<br ?\/?>/g, " "), n.renderer.forExport), g = n.langFormat("accessibility.legend.legendLabel" + (p ? "" : "NoTitle"), { chart: n, legendTitle: p, chartTitle: nn(n) });
          this.proxyProvider.updateGroupAttrs("legend", { "aria-label": g });
        }
        addLegendProxyGroup() {
          let n = this.chart.options.accessibility.landmarkVerbosity === "all" ? "region" : null;
          this.proxyGroup = this.proxyProvider.addGroup("legend", "ul", { "aria-label": "_placeholder_", role: n });
        }
        proxyLegendItems() {
          let n, p = this;
          ((this.chart.legend || {}).allItems || []).forEach((g) => {
            (n = g.legendItem || {}).label && n.label.element && p.proxyLegendItem(g);
          });
        }
        proxyLegendItem(n) {
          let p = n.legendItem || {}, g = n.legendItem?.label, b = g?.element, C = p.label?.styles?.textOverflow === "ellipsis";
          if (!p.label || !p.group) return;
          let k = this.chart.langFormat("accessibility.legend.legendItem", { chart: this.chart, itemName: wo(n.name, this.chart.renderer.forExport), item: n }), A = { tabindex: -1, "aria-pressed": n.visible, "aria-label": k, title: "" };
          C && (b.textContent || "").indexOf("…") !== -1 && (A.title = g?.textStr);
          let E = p.group.div ? p.label : p.group;
          n.a11yProxyElement = this.proxyProvider.addProxyElement("legend", { click: p.label, visual: E.element }, "button", A);
        }
        getKeyboardNavigation() {
          let n = this.keyCodes, p = this, g = this.chart;
          return new ke(g, { keyCodeMap: [[[n.left, n.right, n.up, n.down], function(b) {
            return p.onKbdArrowKey(this, b);
          }], [[n.enter, n.space], function() {
            return p.onKbdClick(this);
          }], [[n.pageDown, n.pageUp], function(b) {
            let C = b === n.pageDown ? 1 : -1;
            return p.highlightAdjacentLegendPage(C), this.response.success;
          }]], validate: function() {
            return p.shouldHaveLegendNavigation();
          }, init: function() {
            g.highlightLegendItem(0), p.highlightedLegendItemIx = 0;
          }, terminate: function() {
            p.highlightedLegendItemIx = -1, g.legend.allItems.forEach((b) => or(!1, b));
          } });
        }
        onKbdArrowKey(n, p) {
          let { keyCodes: { left: g, up: b }, highlightedLegendItemIx: C, chart: k } = this, A = k.legend.allItems.length, E = k.options.accessibility.keyboardNavigation.wrapAround, P = p === g || p === b ? -1 : 1;
          return k.highlightLegendItem(C + P) ? this.highlightedLegendItemIx += P : E && A > 1 && (this.highlightedLegendItemIx = P > 0 ? 0 : A - 1, k.highlightLegendItem(this.highlightedLegendItemIx)), n.response.success;
        }
        onKbdClick(n) {
          let p = this.chart.legend.allItems[this.highlightedLegendItemIx];
          return p && p.a11yProxyElement && p.a11yProxyElement.click(), n.response.success;
        }
        shouldHaveLegendNavigation() {
          if (!rr(this.chart)) return !1;
          let n = this.chart, p = (n.options.legend || {}).accessibility || {};
          return !!(n.legend.display && p.keyboardNavigation && p.keyboardNavigation.enabled);
        }
        destroy() {
          this.removeProxies();
        }
      }
      (function(u) {
        function n(g) {
          let b = this.legend.allItems, C = this.accessibility && this.accessibility.components.legend.highlightedLegendItemIx, k = b[g], A = k?.legendItem || {};
          if (k) {
            vo(C) && b[C] && or(!1, b[C]);
            var E = this.legend;
            let P = (E.allItems[g].legendItem || {}).pageIx, B = E.currentPage;
            P !== void 0 && P + 1 !== B && E.scroll(1 + P - B);
            let z = A.label, R = k.a11yProxyElement && k.a11yProxyElement.innerElement;
            return z && z.element && R && this.setFocusToElement(z, R), or(!0, k), !0;
          }
          return !1;
        }
        function p(g) {
          let b = this.chart.options.accessibility, C = g.item;
          b.enabled && C && C.a11yProxyElement && C.a11yProxyElement.innerElement.setAttribute("aria-pressed", g.visible ? "true" : "false");
        }
        u.compose = function(g, b) {
          let C = g.prototype;
          C.highlightLegendItem || (C.highlightLegendItem = n, on(b, "afterColorizeItem", p));
        };
      })(ar || (ar = {}));
      let Co = ar;
      var ks = ft(532), nr = ft.n(ks);
      let { isTouchDevice: lr } = _(), { addEvent: je, merge: hr, pick: he } = _(), $i = [];
      function hn() {
        this.navigator && this.navigator.setBaseSeries(null, !1);
      }
      function cn() {
        let u, n, p, g = this.legend, b = this.navigator;
        if (b) {
          u = g && g.options, n = b.xAxis, p = b.yAxis;
          let { scrollbarHeight: C, scrollButtonSize: k } = b;
          this.inverted ? (b.left = b.opposite ? this.chartWidth - C - b.height : this.spacing[3] + C, b.top = this.plotTop + k) : (b.left = he(n.left, this.plotLeft + k), b.top = b.navigatorOptions.top || this.chartHeight - b.height - C - (this.scrollbar?.options.margin || 0) - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (u && u.verticalAlign === "bottom" && u.layout !== "proximate" && u.enabled && !u.floating ? g.legendHeight + he(u.margin, 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0)), n && p && (this.inverted ? n.options.left = p.options.left = b.left : n.options.top = p.options.top = b.top, n.setAxisSize(), p.setAxisSize());
        }
      }
      function dn(u) {
        !this.navigator && !this.scroller && (this.options.navigator.enabled || this.options.scrollbar.enabled) && (this.scroller = this.navigator = new We(this), he(u.redraw, !0) && this.redraw(u.animation));
      }
      function cr() {
        let u = this.options;
        (u.navigator.enabled || u.scrollbar.enabled) && (this.scroller = this.navigator = new We(this));
      }
      function ws() {
        let u = this.options, n = u.navigator, p = u.rangeSelector;
        if ((n && n.enabled || p && p.enabled) && (!lr && this.zooming.type === "x" || lr && this.zooming.pinchType === "x")) return !1;
      }
      function pn(u) {
        let n = u.navigator;
        if (n && u.xAxis[0]) {
          let p = u.xAxis[0].getExtremes();
          n.render(p.min, p.max);
        }
      }
      function un(u) {
        let n = u.options.navigator || {}, p = u.options.scrollbar || {};
        !this.navigator && !this.scroller && (n.enabled || p.enabled) && (hr(!0, this.options.navigator, n), hr(!0, this.options.scrollbar, p), delete u.options.navigator, delete u.options.scrollbar);
      }
      let Ao = { compose: function(u, n) {
        if (_().pushUnique($i, u)) {
          let p = u.prototype;
          We = n, p.callbacks.push(pn), je(u, "afterAddSeries", hn), je(u, "afterSetChartSize", cn), je(u, "afterUpdate", dn), je(u, "beforeRender", cr), je(u, "beforeShowResetZoom", ws), je(u, "update", un);
        }
      } }, { isTouchDevice: To } = _(), { addEvent: bi, correctFloat: So, defined: Si, isNumber: Eo, pick: Po } = _();
      function gn() {
        this.navigatorAxis || (this.navigatorAxis = new pr(this));
      }
      function dr(u) {
        let n, p = this.chart, g = p.options, b = g.navigator, C = this.navigatorAxis, k = p.zooming.pinchType, A = g.rangeSelector, E = p.zooming.type;
        if (this.isXAxis && (b?.enabled || A?.enabled)) {
          if (E === "y" && u.trigger === "zoom") n = !1;
          else if ((u.trigger === "zoom" && E === "xy" || To && k === "xy") && this.options.range) {
            let P = C.previousZoom;
            Si(u.min) ? C.previousZoom = [this.min, this.max] : P && (u.min = P[0], u.max = P[1], C.previousZoom = void 0);
          }
        }
        n !== void 0 && u.preventDefault();
      }
      class pr {
        static compose(n) {
          n.keepProps.includes("navigatorAxis") || (n.keepProps.push("navigatorAxis"), bi(n, "init", gn), bi(n, "setExtremes", dr));
        }
        constructor(n) {
          this.axis = n;
        }
        destroy() {
          this.axis = void 0;
        }
        toFixedRange(n, p, g, b) {
          let C = this.axis, k = (C.pointRange || 0) / 2, A = Po(g, C.translate(n, !0, !C.horiz)), E = Po(b, C.translate(p, !0, !C.horiz));
          return Si(g) || (A = So(A + k)), Si(b) || (E = So(E - k)), Eo(A) && Eo(E) || (A = E = void 0), { min: A, max: E };
        }
      }
      var Ms = ft(620), Oo = ft.n(Ms), Be = ft(512), Lo = ft.n(Be);
      let { parse: Zi } = Oo(), { seriesTypes: ur } = Lo(), gr = { height: 40, margin: 22, maskInside: !0, handles: { width: 7, borderRadius: 0, height: 15, symbols: ["navigator-handle", "navigator-handle"], enabled: !0, lineWidth: 1, backgroundColor: "#f2f2f2", borderColor: "#999999" }, maskFill: Zi("#667aff").setOpacity(0.3).get(), outlineColor: "#999999", outlineWidth: 1, series: { type: ur.areaspline === void 0 ? "line" : "areaspline", fillOpacity: 0.05, lineWidth: 1, compare: null, sonification: { enabled: !1 }, dataGrouping: { approximation: "average", enabled: !0, groupPixelWidth: 2, firstAnchor: "firstPoint", anchor: "middle", lastAnchor: "lastPoint", units: [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2, 3, 4]], ["week", [1, 2, 3]], ["month", [1, 3, 6]], ["year", null]] }, dataLabels: { enabled: !1, zIndex: 2 }, id: "highcharts-navigator-series", className: "highcharts-navigator-series", lineColor: null, marker: { enabled: !1 }, threshold: null }, xAxis: { className: "highcharts-navigator-xaxis", tickLength: 0, lineWidth: 0, gridLineColor: "#e6e6e6", id: "navigator-x-axis", gridLineWidth: 1, tickPixelInterval: 200, labels: { align: "left", style: { color: "#000000", fontSize: "0.7em", opacity: 0.6, textOutline: "2px contrast" }, x: 3, y: -4 }, crosshair: !1 }, yAxis: { className: "highcharts-navigator-yaxis", gridLineWidth: 0, startOnTick: !1, endOnTick: !1, minPadding: 0.1, id: "navigator-y-axis", maxPadding: 0.1, labels: { enabled: !1 }, crosshair: !1, title: { text: void 0 }, tickLength: 0, tickWidth: 0 } }, { defined: fn, isNumber: mn, pick: zl } = _(), xn = { rect: function(u, n, p, g, b) {
        return b?.r ? (function(C, k, A, E, P) {
          let B = P?.r || 0;
          return [["M", C + B, k], ["L", C + A - B, k], ["A", B, B, 0, 0, 1, C + A, k + B], ["L", C + A, k + E - B], ["A", B, B, 0, 0, 1, C + A - B, k + E], ["L", C + B, k + E], ["A", B, B, 0, 0, 1, C, k + E - B], ["L", C, k + B], ["A", B, B, 0, 0, 1, C + B, k], ["Z"]];
        })(u, n, p, g, b) : [["M", u, n], ["L", u + p, n], ["L", u + p, n + g], ["L", u, n + g], ["Z"]];
      } }, { relativeLength: Do } = _(), fr = { "navigator-handle": function(u, n, p, g, b = {}) {
        let C = b.width ? b.width / 2 : p, k = Do(b.borderRadius || 0, Math.min(2 * C, g));
        return [["M", -1.5, (g = b.height || g) / 2 - 3.5], ["L", -1.5, g / 2 + 4.5], ["M", 0.5, g / 2 - 3.5], ["L", 0.5, g / 2 + 4.5], ...xn.rect(-C - 1, 0.5, 2 * C + 1, g, { r: k })];
      } };
      var Ei = ft(608), Ue = ft.n(Ei);
      let { defined: _i } = _(), { defaultOptions: bn } = _(), { composed: yn } = _(), { getRendererType: vn } = Ue(), { setFixedRange: Io } = { setFixedRange: function(u) {
        let n = this.xAxis[0];
        _i(n.dataMax) && _i(n.dataMin) && u ? this.fixedRange = Math.min(u, n.dataMax - n.dataMin) : this.fixedRange = u;
      } }, { addEvent: Zt, extend: Pe, pushUnique: Bo } = _();
      function kn() {
        this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, !1);
      }
      let No = { compose: function(u, n, p) {
        pr.compose(n), Bo(yn, "Navigator") && (u.prototype.setFixedRange = Io, Pe(vn().prototype.symbols, fr), Pe(bn, { navigator: gr }), Zt(p, "afterUpdate", kn));
      } }, { composed: Ji } = _(), { addEvent: Cs, correctFloat: Qi, defined: si, pick: ri, pushUnique: Ro } = _();
      (function(u) {
        let n;
        function p(k) {
          let A = ri(k.options?.min, k.min), E = ri(k.options?.max, k.max);
          return { axisMin: A, axisMax: E, scrollMin: si(k.dataMin) ? Math.min(A, k.min ?? 1 / 0, k.dataMin, k.threshold ?? 1 / 0) : A, scrollMax: k.treeGrid?.adjustedMax ?? (si(k.dataMax) ? Math.max(E, k.max ?? -1 / 0, k.dataMax, k.threshold ?? -1 / 0) : E) };
        }
        function g() {
          let k = this.scrollbar, A = k && !k.options.opposite, E = this.horiz ? 2 : A ? 3 : 1;
          k && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[E] += k.size + (k.options.margin || 0));
        }
        function b() {
          let k = this;
          k.options?.scrollbar?.enabled && (k.options.scrollbar.vertical = !k.horiz, k.options.startOnTick = k.options.endOnTick = !1, k.scrollbar = new n(k.chart.renderer, k.options.scrollbar, k.chart), Cs(k.scrollbar, "changed", function(A) {
            let E, P, { axisMin: B, axisMax: z, scrollMin: R, scrollMax: F } = p(k), G = k.toPixels(R), q = k.toPixels(F) - G;
            if (si(B) && si(z)) if (k.horiz && !k.reversed || !k.horiz && k.reversed ? (E = Math.min(F, k.toValue(G + q * this.to)), P = Math.max(R, k.toValue(G + q * this.from))) : (E = Math.min(F, k.toValue(G + q * (1 - this.from))), P = Math.max(R, k.toValue(G + q * (1 - this.to)))), this.shouldUpdateExtremes(A.DOMType)) {
              let xt = A.DOMType !== "mousemove" && A.DOMType !== "touchmove" && void 0;
              k.setExtremes(Qi(P), Qi(E), !0, xt, A);
            } else this.setRange(this.from, this.to);
          }));
        }
        function C() {
          let k, A, E, { scrollMin: P, scrollMax: B } = p(this), z = this.scrollbar, R = (this.axisTitleMargin || 0) + (this.titleOffset || 0), F = this.chart.scrollbarsOffsets, G = this.options.margin || 0;
          if (z && F) {
            if (this.horiz) this.opposite || (F[1] += R), z.position(this.left, this.top + this.height + 2 + F[1] - (this.opposite ? G : 0), this.width, this.height), this.opposite || (F[1] += G), k = 1;
            else {
              let q;
              this.opposite && (F[0] += R), q = z.options.opposite ? this.left + this.width + 2 + F[0] - (this.opposite ? 0 : G) : this.opposite ? 0 : G, z.position(q, this.top, this.width, this.height), this.opposite && (F[0] += G), k = 0;
            }
            if (F[k] += z.size + (z.options.margin || 0), isNaN(P) || isNaN(B) || !si(this.min) || !si(this.max) || si(this.dataMin) && this.dataMin === this.dataMax) z.setRange(0, 1);
            else if (this.min === this.max) {
              let q = this.pointRange / (this.dataMax + 1);
              A = q * this.min, E = q * (this.max + 1), z.setRange(A, E);
            } else A = (this.toPixels(this.min) - this.toPixels(P)) / (this.toPixels(B) - this.toPixels(P)), E = (this.toPixels(this.max) - this.toPixels(P)) / (this.toPixels(B) - this.toPixels(P)), this.horiz && !this.reversed || !this.horiz && this.reversed ? z.setRange(A, E) : z.setRange(1 - E, 1 - A);
          }
        }
        u.compose = function(k, A) {
          Ro(Ji, "Axis.Scrollbar") && (n = A, Cs(k, "afterGetOffset", g), Cs(k, "afterInit", b), Cs(k, "afterRender", C));
        };
      })(kt || (kt = {}));
      let wn = kt, yi = { height: 10, barBorderRadius: 5, buttonBorderRadius: 0, buttonsEnabled: !1, liveRedraw: void 0, margin: void 0, minWidth: 6, opposite: !0, step: 0.2, zIndex: 3, barBackgroundColor: "#cccccc", barBorderWidth: 0, barBorderColor: "#cccccc", buttonArrowColor: "#333333", buttonBackgroundColor: "#e6e6e6", buttonBorderColor: "#cccccc", buttonBorderWidth: 1, rifleColor: "none", trackBackgroundColor: "rgba(255, 255, 255, 0.001)", trackBorderColor: "#cccccc", trackBorderRadius: 5, trackBorderWidth: 1 }, { defaultOptions: mr } = _(), { composed: zo } = _(), { addEvent: xr, correctFloat: oi, crisp: Pi, defined: Fo, destroyObjectProperties: Ho, extend: br, fireEvent: ts, merge: Wo, pick: es, pushUnique: Mn, removeEvent: Cn } = _();
      class ai {
        static compose(n) {
          wn.compose(n, ai), Mn(zo, "Scrollbar") && br(mr, { scrollbar: yi });
        }
        static swapXY(n, p) {
          return p && n.forEach((g) => {
            let b, C = g.length;
            for (let k = 0; k < C; k += 2) typeof (b = g[k + 1]) == "number" && (g[k + 1] = g[k + 2], g[k + 2] = b);
          }), n;
        }
        constructor(n, p, g) {
          this._events = [], this.chartX = 0, this.chartY = 0, this.from = 0, this.scrollbarButtons = [], this.scrollbarLeft = 0, this.scrollbarStrokeWidth = 1, this.scrollbarTop = 0, this.size = 0, this.to = 0, this.trackBorderWidth = 1, this.x = 0, this.y = 0, this.init(n, p, g);
        }
        addEvents() {
          let n = this.options.inverted ? [1, 0] : [0, 1], p = this.scrollbarButtons, g = this.scrollbarGroup.element, b = this.track.element, C = this.mouseDownHandler.bind(this), k = this.mouseMoveHandler.bind(this), A = this.mouseUpHandler.bind(this), E = [[p[n[0]].element, "click", this.buttonToMinClick.bind(this)], [p[n[1]].element, "click", this.buttonToMaxClick.bind(this)], [b, "click", this.trackClick.bind(this)], [g, "mousedown", C], [g.ownerDocument, "mousemove", k], [g.ownerDocument, "mouseup", A], [g, "touchstart", C], [g.ownerDocument, "touchmove", k], [g.ownerDocument, "touchend", A]];
          E.forEach(function(P) {
            xr.apply(null, P);
          }), this._events = E;
        }
        buttonToMaxClick(n) {
          let p = (this.to - this.from) * es(this.options.step, 0.2);
          this.updatePosition(this.from + p, this.to + p), ts(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: n });
        }
        buttonToMinClick(n) {
          let p = oi(this.to - this.from) * es(this.options.step, 0.2);
          this.updatePosition(oi(this.from - p), oi(this.to - p)), ts(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: n });
        }
        cursorToScrollbarPosition(n) {
          let p = this.options, g = p.minWidth > this.calculatedWidth ? p.minWidth : 0;
          return { chartX: (n.chartX - this.x - this.xOffset) / (this.barWidth - g), chartY: (n.chartY - this.y - this.yOffset) / (this.barWidth - g) };
        }
        destroy() {
          let n = this, p = n.chart.scroller;
          n.removeEvents(), ["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"].forEach(function(g) {
            n[g] && n[g].destroy && (n[g] = n[g].destroy());
          }), p && n === p.scrollbar && (p.scrollbar = null, Ho(p.scrollbarButtons));
        }
        drawScrollbarButton(n) {
          let p = this.renderer, g = this.scrollbarButtons, b = this.options, C = this.size, k = p.g().add(this.group);
          if (g.push(k), b.buttonsEnabled) {
            let A = p.rect().addClass("highcharts-scrollbar-button").add(k);
            this.chart.styledMode || A.attr({ stroke: b.buttonBorderColor, "stroke-width": b.buttonBorderWidth, fill: b.buttonBackgroundColor }), A.attr(A.crisp({ x: -0.5, y: -0.5, width: C, height: C, r: b.buttonBorderRadius }, A.strokeWidth()));
            let E = p.path(ai.swapXY([["M", C / 2 + (n ? -1 : 1), C / 2 - 3], ["L", C / 2 + (n ? -1 : 1), C / 2 + 3], ["L", C / 2 + (n ? 2 : -2), C / 2]], b.vertical)).addClass("highcharts-scrollbar-arrow").add(g[n]);
            this.chart.styledMode || E.attr({ fill: b.buttonArrowColor });
          }
        }
        init(n, p, g) {
          this.scrollbarButtons = [], this.renderer = n, this.userOptions = p, this.options = Wo(yi, mr.scrollbar, p), this.options.margin = es(this.options.margin, 10), this.chart = g, this.size = es(this.options.size, this.options.height), p.enabled && (this.render(), this.addEvents());
        }
        mouseDownHandler(n) {
          let p = this.chart.pointer?.normalize(n) || n, g = this.cursorToScrollbarPosition(p);
          this.chartX = g.chartX, this.chartY = g.chartY, this.initPositions = [this.from, this.to], this.grabbedCenter = !0;
        }
        mouseMoveHandler(n) {
          let p, g = this.chart.pointer?.normalize(n) || n, b = this.options.vertical ? "chartY" : "chartX", C = this.initPositions || [];
          this.grabbedCenter && (!n.touches || n.touches[0][b] !== 0) && (p = this.cursorToScrollbarPosition(g)[b] - this[b], this.hasDragged = !0, this.updatePosition(C[0] + p, C[1] + p), this.hasDragged && ts(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMType: n.type, DOMEvent: n }));
        }
        mouseUpHandler(n) {
          this.hasDragged && ts(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMType: n.type, DOMEvent: n }), this.grabbedCenter = this.hasDragged = this.chartX = this.chartY = null;
        }
        position(n, p, g, b) {
          let { buttonsEnabled: C, margin: k = 0, vertical: A } = this.options, E = this.rendered ? "animate" : "attr", P = b, B = 0;
          this.group.show(), this.x = n, this.y = p + this.trackBorderWidth, this.width = g, this.height = b, this.xOffset = P, this.yOffset = B, A ? (this.width = this.yOffset = g = B = this.size, this.xOffset = P = 0, this.yOffset = B = C ? this.size : 0, this.barWidth = b - (C ? 2 * g : 0), this.x = n += k) : (this.height = b = this.size, this.xOffset = P = C ? this.size : 0, this.barWidth = g - (C ? 2 * b : 0), this.y = this.y + k), this.group[E]({ translateX: n, translateY: this.y }), this.track[E]({ width: g, height: b }), this.scrollbarButtons[1][E]({ translateX: A ? 0 : g - P, translateY: A ? b - B : 0 });
        }
        removeEvents() {
          this._events.forEach(function(n) {
            Cn.apply(null, n);
          }), this._events.length = 0;
        }
        render() {
          let n = this.renderer, p = this.options, g = this.size, b = this.chart.styledMode, C = n.g("scrollbar").attr({ zIndex: p.zIndex }).hide().add();
          this.group = C, this.track = n.rect().addClass("highcharts-scrollbar-track").attr({ r: p.trackBorderRadius || 0, height: g, width: g }).add(C), b || this.track.attr({ fill: p.trackBackgroundColor, stroke: p.trackBorderColor, "stroke-width": p.trackBorderWidth });
          let k = this.trackBorderWidth = this.track.strokeWidth();
          this.track.attr({ x: -Pi(0, k), y: -Pi(0, k) }), this.scrollbarGroup = n.g().add(C), this.scrollbar = n.rect().addClass("highcharts-scrollbar-thumb").attr({ height: g - k, width: g - k, r: p.barBorderRadius || 0 }).add(this.scrollbarGroup), this.scrollbarRifles = n.path(ai.swapXY([["M", -3, g / 4], ["L", -3, 2 * g / 3], ["M", 0, g / 4], ["L", 0, 2 * g / 3], ["M", 3, g / 4], ["L", 3, 2 * g / 3]], p.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup), b || (this.scrollbar.attr({ fill: p.barBackgroundColor, stroke: p.barBorderColor, "stroke-width": p.barBorderWidth }), this.scrollbarRifles.attr({ stroke: p.rifleColor, "stroke-width": 1 })), this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(), this.scrollbarGroup.translate(-Pi(0, this.scrollbarStrokeWidth), -Pi(0, this.scrollbarStrokeWidth)), this.drawScrollbarButton(0), this.drawScrollbarButton(1);
        }
        setRange(n, p) {
          let g, b, C = this.options, k = C.vertical, A = C.minWidth, E = this.barWidth, P = !this.rendered || this.hasDragged || this.chart.navigator && this.chart.navigator.hasDragged ? "attr" : "animate";
          if (!Fo(E)) return;
          let B = E * Math.min(p, 1);
          g = Math.ceil(E * (n = Math.max(n, 0))), this.calculatedWidth = b = oi(B - g), b < A && (g = (E - A + b) * n, b = A);
          let z = Math.floor(g + this.xOffset + this.yOffset), R = b / 2 - 0.5;
          this.from = n, this.to = p, k ? (this.scrollbarGroup[P]({ translateY: z }), this.scrollbar[P]({ height: b }), this.scrollbarRifles[P]({ translateY: R }), this.scrollbarTop = z, this.scrollbarLeft = 0) : (this.scrollbarGroup[P]({ translateX: z }), this.scrollbar[P]({ width: b }), this.scrollbarRifles[P]({ translateX: R }), this.scrollbarLeft = z, this.scrollbarTop = 0), b <= 12 ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(), C.showFull === !1 && (n <= 0 && p >= 1 ? this.group.hide() : this.group.show()), this.rendered = !0;
        }
        shouldUpdateExtremes(n) {
          return es(this.options.liveRedraw, _().svg && !_().isTouchDevice && !this.chart.boosted) || n === "mouseup" || n === "touchend" || !Fo(n);
        }
        trackClick(n) {
          let p = this.chart.pointer?.normalize(n) || n, g = this.to - this.from, b = this.y + this.scrollbarTop, C = this.x + this.scrollbarLeft;
          this.options.vertical && p.chartY > b || !this.options.vertical && p.chartX > C ? this.updatePosition(this.from + g, this.to + g) : this.updatePosition(this.from - g, this.to - g), ts(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: n });
        }
        update(n) {
          this.destroy(), this.init(this.chart.renderer, Wo(!0, this.options, n), this.chart);
        }
        updatePosition(n, p) {
          p > 1 && (n = oi(1 - oi(p - n)), p = 1), n < 0 && (p = oi(p - n), n = 0), this.from = n, this.to = p;
        }
      }
      ai.defaultOptions = yi;
      var An = ft(540), Tn = ft.n(An);
      let { defaultOptions: yr } = _(), { isTouchDevice: Xo } = _(), { prototype: { symbols: vi } } = Tn(), { addEvent: Jt, clamp: vr, correctFloat: As, defined: Oi, destroyObjectProperties: Sn, erase: ni, extend: kr, find: Ts, fireEvent: Li, isArray: Go, isNumber: Oe, merge: Ve, pick: _t, removeEvent: Ss, splat: li } = _();
      function Es(u, ...n) {
        let p = [].filter.call(n, Oe);
        if (p.length) return Math[u].apply(0, p);
      }
      class Ne {
        static compose(n, p, g) {
          Ao.compose(n, Ne), No.compose(n, p, g);
        }
        constructor(n) {
          this.isDirty = !1, this.scrollbarHeight = 0, this.init(n);
        }
        drawHandle(n, p, g, b) {
          let C = this.navigatorOptions.handles.height;
          this.handles[p][b](g ? { translateX: Math.round(this.left + this.height / 2), translateY: Math.round(this.top + parseInt(n, 10) + 0.5 - C) } : { translateX: Math.round(this.left + parseInt(n, 10)), translateY: Math.round(this.top + this.height / 2 - C / 2 - 1) });
        }
        drawOutline(n, p, g, b) {
          let C = this.navigatorOptions.maskInside, k = this.outline.strokeWidth(), A = k / 2, E = k % 2 / 2, P = this.scrollButtonSize, B = this.size, z = this.top, R = this.height, F = z - A, G = z + R, q = this.left, xt, dt;
          g ? (xt = z + p + E, p = z + n + E, dt = [["M", q + R, z - P - E], ["L", q + R, xt], ["L", q, xt], ["M", q, p], ["L", q + R, p], ["L", q + R, z + B + P]], C && dt.push(["M", q + R, xt - A], ["L", q + R, p + A])) : (q -= P, n += q + P - E, p += q + P - E, dt = [["M", q, F], ["L", n, F], ["L", n, G], ["M", p, G], ["L", p, F], ["L", q + B + 2 * P, F]], C && dt.push(["M", n - A, F], ["L", p + A, F])), this.outline[b]({ d: dt });
        }
        drawMasks(n, p, g, b) {
          let C, k, A, E, P = this.left, B = this.top, z = this.height;
          g ? (A = [P, P, P], E = [B, B + n, B + p], k = [z, z, z], C = [n, p - n, this.size - p]) : (A = [P, P + n, P + p], E = [B, B, B], k = [n, p - n, this.size - p], C = [z, z, z]), this.shades.forEach((R, F) => {
            R[b]({ x: A[F], y: E[F], width: k[F], height: C[F] });
          });
        }
        renderElements() {
          let n = this, p = n.navigatorOptions, g = p.maskInside, b = n.chart, C = b.inverted, k = b.renderer, A = { cursor: C ? "ns-resize" : "ew-resize" }, E = n.navigatorGroup ?? (n.navigatorGroup = k.g("navigator").attr({ zIndex: 8, visibility: "hidden" }).add());
          if ([!g, g, !g].forEach((P, B) => {
            let z = n.shades[B] ?? (n.shades[B] = k.rect().addClass("highcharts-navigator-mask" + (B === 1 ? "-inside" : "-outside")).add(E));
            b.styledMode || (z.attr({ fill: P ? p.maskFill : "rgba(0,0,0,0)" }), B === 1 && z.css(A));
          }), n.outline || (n.outline = k.path().addClass("highcharts-navigator-outline").add(E)), b.styledMode || n.outline.attr({ "stroke-width": p.outlineWidth, stroke: p.outlineColor }), p.handles?.enabled) {
            let P = p.handles, { height: B, width: z } = P;
            [0, 1].forEach((R) => {
              let F = P.symbols[R];
              if (n.handles[R] && n.handles[R].symbolUrl === F) {
                if (!n.handles[R].isImg && n.handles[R].symbolName !== F) {
                  let G = vi[F].call(vi, -z / 2 - 1, 0, z, B);
                  n.handles[R].attr({ d: G }), n.handles[R].symbolName = F;
                }
              } else n.handles[R]?.destroy(), n.handles[R] = k.symbol(F, -z / 2 - 1, 0, z, B, P), n.handles[R].attr({ zIndex: 7 - R }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][R]).add(E), n.addMouseEvents();
              b.inverted && n.handles[R].attr({ rotation: 90, rotationOriginX: Math.floor(-z / 2), rotationOriginY: (B + z) / 2 }), b.styledMode || n.handles[R].attr({ fill: P.backgroundColor, stroke: P.borderColor, "stroke-width": P.lineWidth, width: P.width, height: P.height, x: -z / 2 - 1, y: 0 }).css(A);
            });
          }
        }
        update(n, p = !1) {
          let g = this.chart, b = g.options.chart.inverted !== g.scrollbar?.options.vertical;
          if (Ve(!0, g.options.navigator, n), this.navigatorOptions = g.options.navigator || {}, this.setOpposite(), Oi(n.enabled) || b) return this.destroy(), this.navigatorEnabled = n.enabled || this.navigatorEnabled, this.init(g);
          if (this.navigatorEnabled && (this.isDirty = !0, n.adaptToUpdatedData === !1 && this.baseSeries.forEach((C) => {
            Ss(C, "updatedData", this.updatedDataHandler);
          }, this), n.adaptToUpdatedData && this.baseSeries.forEach((C) => {
            C.eventsToUnbind.push(Jt(C, "updatedData", this.updatedDataHandler));
          }, this), (n.series || n.baseSeries) && this.setBaseSeries(void 0, !1), n.height || n.xAxis || n.yAxis)) {
            this.height = n.height ?? this.height;
            let C = this.getXAxisOffsets();
            this.xAxis.update({ ...n.xAxis, offsets: C, [g.inverted ? "width" : "height"]: this.height, [g.inverted ? "height" : "width"]: void 0 }, !1), this.yAxis.update({ ...n.yAxis, [g.inverted ? "width" : "height"]: this.height }, !1);
          }
          p && g.redraw();
        }
        render(n, p, g, b) {
          let C = this.chart, k = this.xAxis, A = k.pointRange || 0, E = k.navigatorAxis.fake ? C.xAxis[0] : k, P = this.navigatorEnabled, B = this.rendered, z = C.inverted, R = C.xAxis[0].minRange, F = C.xAxis[0].options.maxRange, G = this.scrollButtonSize, q, xt, dt, ht = this.scrollbarHeight, ut, st;
          if (this.hasDragged && !Oi(g)) return;
          if (this.isDirty && this.renderElements(), n = As(n - A / 2), p = As(p + A / 2), !Oe(n) || !Oe(p)) if (B) g = 0, b = _t(k.width, E.width);
          else return;
          this.left = _t(k.left, C.plotLeft + G + (z ? C.plotWidth : 0));
          let rt = this.size = ut = _t(k.len, (z ? C.plotHeight : C.plotWidth) - 2 * G);
          q = z ? ht : ut + 2 * G, g = _t(g, k.toPixels(n, !0)), b = _t(b, k.toPixels(p, !0)), Oe(g) && Math.abs(g) !== 1 / 0 || (g = 0, b = q);
          let wt = k.toValue(g, !0), Mt = k.toValue(b, !0), Qt = Math.abs(As(Mt - wt));
          Qt < R ? this.grabbedLeft ? g = k.toPixels(Mt - R - A, !0) : this.grabbedRight && (b = k.toPixels(wt + R + A, !0)) : Oi(F) && As(Qt - A) > F && (this.grabbedLeft ? g = k.toPixels(Mt - F - A, !0) : this.grabbedRight && (b = k.toPixels(wt + F + A, !0))), this.zoomedMax = vr(Math.max(g, b), 0, rt), this.zoomedMin = vr(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(g, b), 0, rt), this.range = this.zoomedMax - this.zoomedMin, rt = Math.round(this.zoomedMax);
          let Wt = Math.round(this.zoomedMin);
          P && (this.navigatorGroup.attr({ visibility: "inherit" }), st = B && !this.hasDragged ? "animate" : "attr", this.drawMasks(Wt, rt, z, st), this.drawOutline(Wt, rt, z, st), this.navigatorOptions.handles.enabled && (this.drawHandle(Wt, 0, z, st), this.drawHandle(rt, 1, z, st))), this.scrollbar && (z ? (dt = this.top - G, xt = this.left - ht + (P || !E.opposite ? 0 : (E.titleOffset || 0) + E.axisTitleMargin), ht = ut + 2 * G) : (dt = this.top + (P ? this.height : -ht), xt = this.left - G), this.scrollbar.position(xt, dt, q, ht), this.scrollbar.setRange(this.zoomedMin / (ut || 1), this.zoomedMax / (ut || 1))), this.rendered = !0, this.isDirty = !1, Li(this, "afterRender");
        }
        addMouseEvents() {
          let n = this, p = n.chart, g = p.container, b = [], C, k;
          n.mouseMoveHandler = C = function(A) {
            n.onMouseMove(A);
          }, n.mouseUpHandler = k = function(A) {
            n.onMouseUp(A);
          }, (b = n.getPartsEvents("mousedown")).push(Jt(p.renderTo, "mousemove", C), Jt(g.ownerDocument, "mouseup", k), Jt(p.renderTo, "touchmove", C), Jt(g.ownerDocument, "touchend", k)), b.concat(n.getPartsEvents("touchstart")), n.eventsToUnbind = b, n.series && n.series[0] && b.push(Jt(n.series[0].xAxis, "foundExtremes", function() {
            p.navigator.modifyNavigatorAxisExtremes();
          }));
        }
        getPartsEvents(n) {
          let p = this, g = [];
          return ["shades", "handles"].forEach(function(b) {
            p[b].forEach(function(C, k) {
              g.push(Jt(C.element, n, function(A) {
                p[b + "Mousedown"](A, k);
              }));
            });
          }), g;
        }
        shadesMousedown(n, p) {
          n = this.chart.pointer?.normalize(n) || n;
          let g = this.chart, b = this.xAxis, C = this.zoomedMin, k = this.size, A = this.range, E = this.left, P = n.chartX, B, z, R, F;
          g.inverted && (P = n.chartY, E = this.top), p === 1 ? (this.grabbedCenter = P, this.fixedWidth = A, this.dragOffset = P - C) : (F = P - E - A / 2, p === 0 ? F = Math.max(0, F) : p === 2 && F + A >= k && (F = k - A, this.reversedExtremes ? (F -= A, z = this.getUnionExtremes().dataMin) : B = this.getUnionExtremes().dataMax), F !== C && (this.fixedWidth = A, Oi((R = b.navigatorAxis.toFixedRange(F, F + A, z, B)).min) && Li(this, "setRange", { min: Math.min(R.min, R.max), max: Math.max(R.min, R.max), redraw: !0, eventArguments: { trigger: "navigator" } })));
        }
        handlesMousedown(n, p) {
          n = this.chart.pointer?.normalize(n) || n;
          let g = this.chart, b = g.xAxis[0], C = this.reversedExtremes;
          p === 0 ? (this.grabbedLeft = !0, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = C ? b.min : b.max) : (this.grabbedRight = !0, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = C ? b.max : b.min), g.setFixedRange(void 0);
        }
        onMouseMove(n) {
          let p = this, g = p.chart, b = p.navigatorSize, C = p.range, k = p.dragOffset, A = g.inverted, E = p.left, P;
          (!n.touches || n.touches[0].pageX !== 0) && (P = (n = g.pointer?.normalize(n) || n).chartX, A && (E = p.top, P = n.chartY), p.grabbedLeft ? (p.hasDragged = !0, p.render(0, 0, P - E, p.otherHandlePos)) : p.grabbedRight ? (p.hasDragged = !0, p.render(0, 0, p.otherHandlePos, P - E)) : p.grabbedCenter && (p.hasDragged = !0, P < k ? P = k : P > b + k - C && (P = b + k - C), p.render(0, 0, P - k, P - k + C)), p.hasDragged && p.scrollbar && _t(p.scrollbar.options.liveRedraw, !Xo && !this.chart.boosted) && (n.DOMType = n.type, setTimeout(function() {
            p.onMouseUp(n);
          }, 0)));
        }
        onMouseUp(n) {
          let p, g, b, C, k, A, E = this.chart, P = this.xAxis, B = this.scrollbar, z = n.DOMEvent || n, R = E.inverted, F = this.rendered && !this.hasDragged ? "animate" : "attr";
          (this.hasDragged && (!B || !B.hasDragged) || n.trigger === "scrollbar") && (b = this.getUnionExtremes(), this.zoomedMin === this.otherHandlePos ? C = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (k = this.fixedExtreme), this.zoomedMax === this.size && (k = this.reversedExtremes ? b.dataMin : b.dataMax), this.zoomedMin === 0 && (C = this.reversedExtremes ? b.dataMax : b.dataMin), Oi((A = P.navigatorAxis.toFixedRange(this.zoomedMin, this.zoomedMax, C, k)).min) && Li(this, "setRange", { min: Math.min(A.min, A.max), max: Math.max(A.min, A.max), redraw: !0, animation: !this.hasDragged && null, eventArguments: { trigger: "navigator", triggerOp: "navigator-drag", DOMEvent: z } })), n.DOMType !== "mousemove" && n.DOMType !== "touchmove" && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null), this.navigatorEnabled && Oe(this.zoomedMin) && Oe(this.zoomedMax) && (g = Math.round(this.zoomedMin), p = Math.round(this.zoomedMax), this.shades && this.drawMasks(g, p, R, F), this.outline && this.drawOutline(g, p, R, F), this.navigatorOptions.handles.enabled && Object.keys(this.handles).length === this.handles.length && (this.drawHandle(g, 0, R, F), this.drawHandle(p, 1, R, F)));
        }
        removeEvents() {
          this.eventsToUnbind && (this.eventsToUnbind.forEach(function(n) {
            n();
          }), this.eventsToUnbind = void 0), this.removeBaseSeriesEvents();
        }
        removeBaseSeriesEvents() {
          let n = this.baseSeries || [];
          this.navigatorEnabled && n[0] && (this.navigatorOptions.adaptToUpdatedData !== !1 && n.forEach(function(p) {
            Ss(p, "updatedData", this.updatedDataHandler);
          }, this), n[0].xAxis && Ss(n[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
        }
        getXAxisOffsets() {
          return this.chart.inverted ? [this.scrollButtonSize, 0, -this.scrollButtonSize, 0] : [0, -this.scrollButtonSize, 0, this.scrollButtonSize];
        }
        init(n) {
          let p = n.options, g = p.navigator || {}, b = g.enabled, C = p.scrollbar || {}, k = C.enabled, A = b && g.height || 0, E = k && C.height || 0, P = C.buttonsEnabled && E || 0;
          this.handles = [], this.shades = [], this.chart = n, this.setBaseSeries(), this.height = A, this.scrollbarHeight = E, this.scrollButtonSize = P, this.scrollbarEnabled = k, this.navigatorEnabled = b, this.navigatorOptions = g, this.scrollbarOptions = C, this.setOpposite();
          let B = this, z = B.baseSeries, R = n.xAxis.length, F = n.yAxis.length, G = z && z[0] && z[0].xAxis || n.xAxis[0] || { options: {} };
          if (n.isDirtyBox = !0, B.navigatorEnabled) {
            let q = this.getXAxisOffsets();
            B.xAxis = new (nr())(n, Ve({ breaks: G.options.breaks, ordinal: G.options.ordinal, overscroll: G.options.overscroll }, g.xAxis, { type: "datetime", yAxis: g.yAxis?.id, index: R, isInternal: !0, offset: 0, keepOrdinalPadding: !0, startOnTick: !1, endOnTick: !1, minPadding: G.options.ordinal ? 0 : G.options.minPadding, maxPadding: G.options.ordinal ? 0 : G.options.maxPadding, zoomEnabled: !1 }, n.inverted ? { offsets: q, width: A } : { offsets: q, height: A }), "xAxis"), B.yAxis = new (nr())(n, Ve(g.yAxis, { alignTicks: !1, offset: 0, index: F, isInternal: !0, reversed: _t(g.yAxis && g.yAxis.reversed, n.yAxis[0] && n.yAxis[0].reversed, !1), zoomEnabled: !1 }, n.inverted ? { width: A } : { height: A }), "yAxis"), z || g.series.data ? B.updateNavigatorSeries(!1) : n.series.length === 0 && (B.unbindRedraw = Jt(n, "beforeRedraw", function() {
              n.series.length > 0 && !B.series && (B.setBaseSeries(), B.unbindRedraw());
            })), B.reversedExtremes = n.inverted && !B.xAxis.reversed || !n.inverted && B.xAxis.reversed, B.renderElements(), B.addMouseEvents();
          } else B.xAxis = { chart: n, navigatorAxis: { fake: !0 }, translate: function(q, xt) {
            let dt = n.xAxis[0], ht = dt.getExtremes(), ut = dt.len - 2 * P, st = Es("min", dt.options.min, ht.dataMin), rt = Es("max", dt.options.max, ht.dataMax) - st;
            return xt ? q * rt / ut + st : ut * (q - st) / rt;
          }, toPixels: function(q) {
            return this.translate(q);
          }, toValue: function(q) {
            return this.translate(q, !0);
          } }, B.xAxis.navigatorAxis.axis = B.xAxis, B.xAxis.navigatorAxis.toFixedRange = pr.prototype.toFixedRange.bind(B.xAxis.navigatorAxis);
          if (n.options.scrollbar?.enabled) {
            let q = Ve(n.options.scrollbar, { vertical: n.inverted });
            Oe(q.margin) || (q.margin = n.inverted ? -3 : 3), n.scrollbar = B.scrollbar = new ai(n.renderer, q, n), Jt(B.scrollbar, "changed", function(xt) {
              let dt = B.size, ht = dt * this.to, ut = dt * this.from;
              B.hasDragged = B.scrollbar.hasDragged, B.render(0, 0, ut, ht), this.shouldUpdateExtremes(xt.DOMType) && setTimeout(function() {
                B.onMouseUp(xt);
              });
            });
          }
          B.addBaseSeriesEvents(), B.addChartEvents();
        }
        setOpposite() {
          let n = this.navigatorOptions, p = this.navigatorEnabled, g = this.chart;
          this.opposite = _t(n.opposite, !!(!p && g.inverted));
        }
        getUnionExtremes(n) {
          let p, g = this.chart.xAxis[0], b = this.chart.time, C = this.xAxis, k = C.options, A = g.options;
          return n && g.dataMin === null || (p = { dataMin: _t(b.parse(k?.min), Es("min", b.parse(A.min), g.dataMin, C.dataMin, C.min)), dataMax: _t(b.parse(k?.max), Es("max", b.parse(A.max), g.dataMax, C.dataMax, C.max)) }), p;
        }
        setBaseSeries(n, p) {
          let g = this.chart, b = this.baseSeries = [];
          n = n || g.options && g.options.navigator.baseSeries || (g.series.length ? Ts(g.series, (C) => !C.options.isInternal).index : 0), (g.series || []).forEach((C, k) => {
            !C.options.isInternal && (C.options.showInNavigator || (k === n || C.options.id === n) && C.options.showInNavigator !== !1) && b.push(C);
          }), this.xAxis && !this.xAxis.navigatorAxis.fake && this.updateNavigatorSeries(!0, p);
        }
        updateNavigatorSeries(n, p) {
          let g = this, b = g.chart, C = g.baseSeries, k = { enableMouseTracking: !1, index: null, linkedTo: null, group: "nav", padXAxis: !1, xAxis: this.navigatorOptions.xAxis?.id, yAxis: this.navigatorOptions.yAxis?.id, showInLegend: !1, stacking: void 0, isInternal: !0, states: { inactive: { opacity: 1 } } }, A = g.series = (g.series || []).filter((R) => {
            let F = R.baseSeries;
            return !(0 > C.indexOf(F)) || (F && (Ss(F, "updatedData", g.updatedDataHandler), delete F.navigatorSeries), R.chart && R.destroy(), !1);
          }), E, P, B = g.navigatorOptions.series, z;
          C && C.length && C.forEach((R) => {
            let F = R.navigatorSeries, G = kr({ color: R.color, visible: R.visible }, Go(B) ? yr.navigator.series : B);
            if (F && g.navigatorOptions.adaptToUpdatedData === !1) return;
            k.name = "Navigator " + C.length, z = (E = R.options || {}).navigatorOptions || {}, G.dataLabels = li(G.dataLabels), (P = Ve(E, k, G, z)).pointRange = _t(G.pointRange, z.pointRange, yr.plotOptions[P.type || "line"].pointRange);
            let q = z.data || G.data;
            g.hasNavigatorData = g.hasNavigatorData || !!q, P.data = q || E.data?.slice(0), F && F.options ? F.update(P, p) : (R.navigatorSeries = b.initSeries(P), b.setSortedData(), R.navigatorSeries.baseSeries = R, A.push(R.navigatorSeries));
          }), (B.data && !(C && C.length) || Go(B)) && (g.hasNavigatorData = !1, (B = li(B)).forEach((R, F) => {
            k.name = "Navigator " + (A.length + 1), (P = Ve(yr.navigator.series, { color: b.series[F] && !b.series[F].options.isInternal && b.series[F].color || b.options.colors[F] || b.options.colors[0] }, k, R)).data = R.data, P.data && (g.hasNavigatorData = !0, A.push(b.initSeries(P)));
          })), n && this.addBaseSeriesEvents();
        }
        addBaseSeriesEvents() {
          let n = this, p = n.baseSeries || [];
          p[0] && p[0].xAxis && p[0].eventsToUnbind.push(Jt(p[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes)), p.forEach((g) => {
            g.eventsToUnbind.push(Jt(g, "show", function() {
              this.navigatorSeries && this.navigatorSeries.setVisible(!0, !1);
            })), g.eventsToUnbind.push(Jt(g, "hide", function() {
              this.navigatorSeries && this.navigatorSeries.setVisible(!1, !1);
            })), this.navigatorOptions.adaptToUpdatedData !== !1 && g.xAxis && g.eventsToUnbind.push(Jt(g, "updatedData", this.updatedDataHandler)), g.eventsToUnbind.push(Jt(g, "remove", function() {
              p && ni(p, g), this.navigatorSeries && n.series && (ni(n.series, this.navigatorSeries), Oi(this.navigatorSeries.options) && this.navigatorSeries.remove(!1), delete this.navigatorSeries);
            }));
          });
        }
        getBaseSeriesMin(n) {
          return this.baseSeries.reduce(function(p, g) {
            return Math.min(p, g.getColumn("x")[0] ?? p);
          }, n);
        }
        modifyNavigatorAxisExtremes() {
          let n = this.xAxis;
          if (n.getExtremes !== void 0) {
            let p = this.getUnionExtremes(!0);
            p && (p.dataMin !== n.min || p.dataMax !== n.max) && (n.min = p.dataMin, n.max = p.dataMax);
          }
        }
        modifyBaseAxisExtremes() {
          let n, p, g = this.chart.navigator, b = this.getExtremes(), C = b.min, k = b.max, A = b.dataMin, E = b.dataMax, P = k - C, B = g.stickToMin, z = g.stickToMax, R = _t(this.ordinal?.convertOverscroll(this.options.overscroll), 0), F = g.series && g.series[0], G = !!this.setExtremes;
          !(this.eventArgs && this.eventArgs.trigger === "rangeSelectorButton") && (B && (n = (p = A) + P), z && (n = E + R, B || (p = Math.max(A, n - P, g.getBaseSeriesMin(F && F.xData ? F.xData[0] : -Number.MAX_VALUE)))), G && (B || z) && Oe(p) && (this.min = this.userMin = p, this.max = this.userMax = n)), g.stickToMin = g.stickToMax = null;
        }
        updatedDataHandler() {
          let n = this.chart.navigator, p = this.navigatorSeries, g = n.reversedExtremes ? Math.round(n.zoomedMin) === 0 : Math.round(n.zoomedMax) >= Math.round(n.size);
          n.stickToMax = _t(this.chart.options.navigator && this.chart.options.navigator.stickToMax, g), n.stickToMin = n.shouldStickToMin(this, n), p && !n.hasNavigatorData && (p.options.pointStart = this.getColumn("x")[0], p.setData(this.options.data, !1, null, !1));
        }
        shouldStickToMin(n, p) {
          let g = p.getBaseSeriesMin(n.getColumn("x")[0]), b = n.xAxis, C = b.max, k = b.min, A = b.options.range;
          return !!(Oe(C) && Oe(k)) && (A && C - g > 0 ? C - g < A : k <= g);
        }
        addChartEvents() {
          this.eventsToUnbind || (this.eventsToUnbind = []), this.eventsToUnbind.push(Jt(this.chart, "redraw", function() {
            let n = this.navigator, p = n && (n.baseSeries && n.baseSeries[0] && n.baseSeries[0].xAxis || this.xAxis[0]);
            p && n.render(p.min, p.max);
          }), Jt(this.chart, "getMargins", function() {
            let n = this.navigator, p = n.opposite ? "plotTop" : "marginBottom";
            this.inverted && (p = n.opposite ? "marginRight" : "plotLeft"), this[p] = (this[p] || 0) + (n.navigatorEnabled || !this.inverted ? n.height + (this.scrollbar?.options.margin || 0) + n.scrollbarHeight : 0) + (n.navigatorOptions.margin || 0);
          }), Jt(Ne, "setRange", function(n) {
            this.chart.xAxis[0].setExtremes(n.min, n.max, n.redraw, n.animation, n.eventArguments);
          }));
        }
        destroy() {
          this.removeEvents(), this.xAxis && (ni(this.chart.xAxis, this.xAxis), ni(this.chart.axes, this.xAxis)), this.yAxis && (ni(this.chart.yAxis, this.yAxis), ni(this.chart.axes, this.yAxis)), (this.series || []).forEach((n) => {
            n.destroy && n.destroy();
          }), ["series", "xAxis", "yAxis", "shades", "outline", "scrollbarTrack", "scrollbarRifles", "scrollbarGroup", "scrollbar", "navigatorGroup", "rendered"].forEach((n) => {
            this[n] && this[n].destroy && this[n].destroy(), this[n] = null;
          }), [this.handles].forEach((n) => {
            Sn(n);
          }), this.baseSeries.forEach((n) => {
            n.navigatorSeries = void 0;
          }), this.navigatorEnabled = !1;
        }
      }
      let { animObject: is } = _(), { format: wr } = Se(), { clamp: Mr, pick: Cr, syncTimeout: En } = _(), { getFakeMouseEvent: Pn } = zt, { getAxisRangeDescription: On, fireEventOnWrappedOrUnwrappedElement: Ps } = It, Ln = class extends Ie {
        init() {
          let u = this.chart, n = this;
          this.announcer = new Ft(u, "polite"), this.addEvent(Ne, "afterRender", function() {
            this.chart === n.chart && this.chart.renderer && En(() => {
              n.proxyProvider.updateGroupProxyElementPositions("navigator"), n.updateHandleValues();
            }, is(Cr(this.chart.renderer.globalAnimation, !0)).duration);
          });
        }
        onChartUpdate() {
          let u = this.chart, n = u.options, p = n.navigator;
          if (p.enabled && p.accessibility?.enabled) {
            let g = n.accessibility.landmarkVerbosity, b = n.lang.accessibility?.navigator.groupLabel;
            this.proxyProvider.removeGroup("navigator"), this.proxyProvider.addGroup("navigator", "div", { role: g === "all" ? "region" : "group", "aria-label": wr(b, { chart: u }, u) });
            let C = n.lang.accessibility?.navigator.handleLabel;
            [0, 1].forEach((k) => {
              let A = this.getHandleByIx(k);
              if (A) {
                let E = this.proxyProvider.addProxyElement("navigator", { click: A }, "input", { type: "range", "aria-label": wr(C, { handleIx: k, chart: u }, u) });
                this[k ? "maxHandleProxy" : "minHandleProxy"] = E.innerElement, E.innerElement.style.pointerEvents = "none", E.innerElement.oninput = () => this.updateNavigator();
              }
            }), this.updateHandleValues();
          } else this.proxyProvider.removeGroup("navigator");
        }
        getNavigatorHandleNavigation(u) {
          let n = this, p = this.chart, g = u ? this.maxHandleProxy : this.minHandleProxy, b = this.keyCodes;
          return new ke(p, { keyCodeMap: [[[b.left, b.right, b.up, b.down], function(C) {
            if (g) {
              let k = C === b.left || C === b.up ? -1 : 1;
              g.value = "" + Mr(parseFloat(g.value) + k, 0, 100), n.updateNavigator(() => {
                let A = n.getHandleByIx(u);
                A && p.setFocusToElement(A, g);
              });
            }
            return this.response.success;
          }]], init: () => {
            p.setFocusToElement(this.getHandleByIx(u), g);
          }, validate: () => !!(this.getHandleByIx(u) && g && p.options.navigator.accessibility?.enabled) });
        }
        getKeyboardNavigation() {
          return [this.getNavigatorHandleNavigation(0), this.getNavigatorHandleNavigation(1)];
        }
        destroy() {
          this.updateNavigatorThrottleTimer && clearTimeout(this.updateNavigatorThrottleTimer), this.proxyProvider.removeGroup("navigator"), this.announcer && this.announcer.destroy();
        }
        updateHandleValues() {
          let u = this.chart.navigator;
          if (u && this.minHandleProxy && this.maxHandleProxy) {
            let n = u.size;
            this.minHandleProxy.value = "" + Math.round(u.zoomedMin / n * 100), this.maxHandleProxy.value = "" + Math.round(u.zoomedMax / n * 100);
          }
        }
        getHandleByIx(u) {
          let n = this.chart.navigator;
          return n && n.handles && n.handles[u];
        }
        updateNavigator(u) {
          this.updateNavigatorThrottleTimer && clearTimeout(this.updateNavigatorThrottleTimer), this.updateNavigatorThrottleTimer = setTimeout(((n) => {
            let p = this.chart, { navigator: g, pointer: b } = p, C = this.chart.accessibility?.keyboardNavigation;
            if (g && b && this.minHandleProxy && this.maxHandleProxy) {
              let k = b.getChartPosition(), A = parseFloat(this.minHandleProxy.value) / 100 * g.size, E = parseFloat(this.maxHandleProxy.value) / 100 * g.size;
              [[0, "mousedown", g.zoomedMin], [0, "mousemove", A], [0, "mouseup", A], [1, "mousedown", g.zoomedMax], [1, "mousemove", E], [1, "mouseup", E]].forEach(([z, R, F]) => {
                let G = this.getHandleByIx(z)?.element;
                G && Ps(G, Pn(R, { x: k.left + g.left + F, y: k.top + g.top }, G));
              }), C && (C.keyboardReset = !1), n && n();
              let P = p.options.lang.accessibility?.navigator.changeAnnouncement, B = On(p.xAxis[0]);
              this.announcer.announce(wr(P, { axisRangeDescription: B, chart: p }, p));
            }
          }).bind(this, u), 20);
        }
      }, { getPointAnnotationTexts: Dn } = fe, { getAxisDescription: In, getSeriesFirstPointElement: hi, getSeriesA11yElement: Bn, unhideChartElementFromAT: Yo } = It, { format: Os, numberFormat: Nn } = Se(), { reverseChildNodes: Ls, stripHTMLTagsFromString: jo } = zt, { find: Rn, isNumber: Uo, isString: Vo, pick: we, defined: Re } = _();
      function qo(u) {
        let n = u.chart.options.accessibility.series.pointDescriptionEnabledThreshold;
        return !!(n !== !1 && u.points && u.points.length >= +n);
      }
      function Ko(u, n) {
        let p = u.series, g = p.chart, b = g.options.accessibility.point || {}, C = p.options.accessibility && p.options.accessibility.point || {}, k = p.tooltipOptions || {}, A = g.options.lang;
        return Uo(n) ? Nn(n, C.valueDecimals || b.valueDecimals || k.valueDecimals || -1, A.decimalPoint, A.accessibility.thousandsSep || A.thousandsSep) : n;
      }
      function $o(u, n) {
        let p = u[n];
        return u.chart.langFormat("accessibility.series." + n + "Description", { name: In(p), series: u });
      }
      function Zo(u) {
        let n = u.series, p = n.chart.series.length > 1 || n.options.name, g = (function(A) {
          let E = A.series, P = E.chart, B = E.options.accessibility, z = B && B.point && B.point.valueDescriptionFormat || P.options.accessibility.point.valueDescriptionFormat, R = we(E.xAxis && E.xAxis.options.accessibility && E.xAxis.options.accessibility.enabled, !P.angular && E.type !== "flowmap"), F = R ? (function(G) {
            let q = (function(ut) {
              let st = ut.series, rt = st.chart, wt = st.options.accessibility && st.options.accessibility.point || {}, Mt = rt.options.accessibility.point || {}, Qt = st.xAxis && st.xAxis.dateTime;
              if (Qt) {
                let Wt = Qt.getXDateFormat(ut.x || 0, rt.options.tooltip.dateTimeLabelFormats), Vt = wt.dateFormatter && wt.dateFormatter(ut) || Mt.dateFormatter && Mt.dateFormatter(ut) || wt.dateFormat || Mt.dateFormat || Wt;
                return rt.time.dateFormat(Vt, ut.x || 0, void 0);
              }
            })(G), xt = (G.series.xAxis || {}).categories && Re(G.category) && ("" + G.category).replace("<br/>", " "), dt = Re(G.id) && 0 > ("" + G.id).indexOf("highcharts-"), ht = "x, " + G.x;
            return G.name || q || xt || (dt ? G.id : ht);
          })(A) : "";
          return Os(z, { point: A, index: Re(A.index) ? A.index + 1 : "", xDescription: F, value: (function(G) {
            let q = G.series, xt = q.chart.options.accessibility.point || {}, dt = q.chart.options.accessibility && q.chart.options.accessibility.point || {}, ht = q.tooltipOptions || {}, ut = dt.valuePrefix || xt.valuePrefix || ht.valuePrefix || "", st = dt.valueSuffix || xt.valueSuffix || ht.valueSuffix || "", rt = G.value !== void 0 ? "value" : "y", wt = Ko(G, G[rt]);
            if (G.isNull) return q.chart.langFormat("accessibility.series.nullPointValue", { point: G });
            if (q.pointArrayMap) {
              let Mt = ut || "", Qt = st || "", Wt = function(Vt) {
                let Ke = Ko(G, we(G[Vt], G.options[Vt]));
                return Ke !== void 0 ? Vt + ": " + Mt + Ke + Qt : Ke;
              };
              return G.series.pointArrayMap.reduce(function(Vt, Ke) {
                let Xs = Wt(Ke);
                return Xs ? Vt + (Vt.length ? ", " : "") + Xs : Vt;
              }, "");
            }
            return ut + wt + st;
          })(A), separator: R ? ", " : "" }, P);
        })(u), b = u.options && u.options.accessibility && u.options.accessibility.description, C = p ? " " + n.name + "." : "", k = (function(A) {
          let E = A.series.chart, P = Dn(A);
          return P.length ? E.langFormat("accessibility.series.pointAnnotationsDescription", { point: A, annotations: P }) : "";
        })(u);
        return u.accessibility = u.accessibility || {}, u.accessibility.valueDescription = g, g + (b ? " " + b : "") + C + (k ? " " + k : "");
      }
      function _o(u) {
        let n = u.chart, p = n.types || [], g = (function(R) {
          let F = (R.options.accessibility || {}).description;
          return F && R.chart.langFormat("accessibility.series.description", { description: F, series: R }) || "";
        })(u), b = function(R) {
          return n[R] && n[R].length > 1 && u[R];
        }, C = u.index + 1, k = $o(u, "xAxis"), A = $o(u, "yAxis"), E = { seriesNumber: C, series: u, chart: n }, P = p.length > 1 ? "Combination" : "", B = n.langFormat("accessibility.series.summary." + u.type + P, E) || n.langFormat("accessibility.series.summary.default" + P, E), z = (b("yAxis") ? " " + A + "." : "") + (b("xAxis") ? " " + k + "." : "");
        return Os(we(u.options.accessibility && u.options.accessibility.descriptionFormat, n.options.accessibility.series.descriptionFormat, ""), { seriesDescription: B, authorDescription: g ? " " + g : "", axisDescription: z, series: u, chart: n, seriesNumber: C }, void 0);
      }
      let Di = { defaultPointDescriptionFormatter: Zo, defaultSeriesDescriptionFormatter: _o, describeSeries: function(u) {
        let n = u.chart, p = hi(u), g = Bn(u), b = n.is3d && n.is3d();
        if (g) {
          g.lastChild !== p || b || Ls(g);
          let C = (function(E) {
            let P = E.options.accessibility || {};
            return !qo(E) && !P.exposeAsGroupOnly;
          })(u), k = (function(E) {
            let P = E.chart.options.accessibility.keyboardNavigation.seriesNavigation;
            return !!(E.points && (E.points.length < +P.pointNavigationEnabledThreshold || P.pointNavigationEnabledThreshold === !1));
          })(u), A = u.chart.options.accessibility.point.describeNull;
          if ((C || k) && u.points.forEach((E) => {
            let P = E.graphic && E.graphic.element || (function(z) {
              let R = z.series, F = R && R.chart, G = R && R.is("sunburst"), q = z.isNull, xt = F && F.options.accessibility.point.describeNull;
              return q && !G && xt;
            })(E) && (function(z) {
              let R = z.series, F = (function(ht) {
                let ut = ht.index;
                if (!ht.series || !ht.series.data || !Re(ut)) return null;
                let st = ht.series.options?.nullInteraction;
                return Rn(ht.series.data, function(rt) {
                  return !!(rt && rt.index !== void 0 && (st || rt.index > ut) && rt.graphic && rt.graphic.element);
                }) || null;
              })(z), G = F && F.graphic, q = G ? G.parentGroup : R.graph || R.group, xt = F ? { x: we(z.plotX, F.plotX, 0), y: we(z.plotY, F.plotY, 0) } : { x: we(z.plotX, 0), y: we(z.plotY, 0) }, dt = (function(ht, ut) {
                let st = ht.series.chart.renderer.rect(ut.x, ut.y, 1, 1);
                return st.attr({ class: "highcharts-a11y-mock-point", fill: "none", opacity: 0, "fill-opacity": 0, "stroke-opacity": 0 }), st;
              })(z, xt);
              if (q && q.element) return z.graphic = dt, z.hasMockGraphic = !0, dt.add(q), q.element.insertBefore(dt.element, G ? G.element : null), dt.element;
            })(E), B = E.options && E.options.accessibility && E.options.accessibility.enabled === !1;
            if (P) {
              if (E.isNull && !A) return void P.setAttribute("aria-hidden", !0);
              if (P.setAttribute("tabindex", "-1"), u.chart.styledMode || (P.style.outline = "none"), C && !B) {
                let z = E.series, R = z.options.accessibility?.point || {}, F = z.chart.options.accessibility.point || {}, G = jo(Vo(R.descriptionFormat) && Os(R.descriptionFormat, E, z.chart) || R.descriptionFormatter?.(E) || Vo(F.descriptionFormat) && Os(F.descriptionFormat, E, z.chart) || F.descriptionFormatter?.(E) || Zo(E), z.chart.renderer.forExport);
                P.setAttribute("role", "img"), P.setAttribute("aria-label", G);
              } else P.setAttribute("aria-hidden", !0);
            }
          }), Yo(n, g), (function(E) {
            let P = E.chart, B = P.options.chart, z = B.options3d && B.options3d.enabled, R = P.series.length > 1, F = P.options.accessibility.series.describeSingleSeries, G = (E.options.accessibility || {}).exposeAsGroupOnly;
            return !(z && R) && (R || F || G || qo(E));
          })(u)) {
            let E = u.options.accessibility || {}, P = u.chart.options.accessibility, B = P.landmarkVerbosity;
            E.exposeAsGroupOnly ? g.setAttribute("role", "img") : B === "all" ? g.setAttribute("role", "region") : g.setAttribute("role", "group"), g.setAttribute("tabindex", "-1"), u.chart.styledMode || (g.style.outline = "none"), g.setAttribute("aria-label", jo(P.series.descriptionFormatter && P.series.descriptionFormatter(u) || _o(u), u.chart.renderer.forExport));
          } else g.removeAttribute("aria-label");
        }
      } }, { composed: Ar } = _(), { addEvent: Jo, defined: ss, pushUnique: Tr } = _(), { getChartTitle: zn } = It, { defaultPointDescriptionFormatter: Qo, defaultSeriesDescriptionFormatter: rs } = Di;
      function Sr(u) {
        return !!u.options.accessibility.announceNewData.enabled;
      }
      class Ii {
        constructor(n) {
          this.dirty = { allSeries: {} }, this.lastAnnouncementTime = 0, this.chart = n;
        }
        init() {
          let n = this.chart, p = n.options.accessibility.announceNewData.interruptUser ? "assertive" : "polite";
          this.lastAnnouncementTime = 0, this.dirty = { allSeries: {} }, this.eventProvider = new J(), this.announcer = new Ft(n, p), this.addEventListeners();
        }
        destroy() {
          this.eventProvider.removeAddedEvents(), this.announcer.destroy();
        }
        addEventListeners() {
          let n = this, p = this.chart, g = this.eventProvider;
          g.addEvent(p, "afterApplyDrilldown", function() {
            n.lastAnnouncementTime = 0;
          }), g.addEvent(p, "afterAddSeries", function(b) {
            n.onSeriesAdded(b.series);
          }), g.addEvent(p, "redraw", function() {
            n.announceDirtyData();
          });
        }
        onSeriesAdded(n) {
          Sr(this.chart) && (this.dirty.hasDirty = !0, this.dirty.allSeries[n.name + n.index] = n, this.dirty.newSeries = ss(this.dirty.newSeries) ? void 0 : n);
        }
        announceDirtyData() {
          let n = this.chart, p = this;
          if (n.options.accessibility.announceNewData && this.dirty.hasDirty) {
            let g = this.dirty.newPoint;
            g && (g = (function(b) {
              let C = b.series.data.filter((k) => b.x === k.x && b.y === k.y);
              return C.length === 1 ? C[0] : b;
            })(g)), this.queueAnnouncement(Object.keys(this.dirty.allSeries).map((b) => p.dirty.allSeries[b]), this.dirty.newSeries, g), this.dirty = { allSeries: {} };
          }
        }
        queueAnnouncement(n, p, g) {
          let b = this.chart.options.accessibility.announceNewData;
          if (b.enabled) {
            let C = +/* @__PURE__ */ new Date(), k = C - this.lastAnnouncementTime, A = Math.max(0, b.minAnnounceInterval - k), E = (function(B, z) {
              let R = (B || []).concat(z || []).reduce((F, G) => (F[G.name + G.index] = G, F), {});
              return Object.keys(R).map((F) => R[F]);
            })(this.queuedAnnouncement && this.queuedAnnouncement.series, n), P = this.buildAnnouncementMessage(E, p, g);
            P && (this.queuedAnnouncement && clearTimeout(this.queuedAnnouncementTimer), this.queuedAnnouncement = { time: C, message: P, series: E }, this.queuedAnnouncementTimer = setTimeout(() => {
              this && this.announcer && (this.lastAnnouncementTime = +/* @__PURE__ */ new Date(), this.announcer.announce(this.queuedAnnouncement.message), delete this.queuedAnnouncement, delete this.queuedAnnouncementTimer);
            }, A));
          }
        }
        buildAnnouncementMessage(n, p, g) {
          let b = this.chart, C = b.options.accessibility.announceNewData;
          if (C.announcementFormatter) {
            let P = C.announcementFormatter(n, p, g);
            if (P !== !1) return P.length ? P : null;
          }
          let k = _().charts && _().charts.length > 1 ? "Multiple" : "Single", A = p ? "newSeriesAnnounce" + k : g ? "newPointAnnounce" + k : "newDataAnnounce", E = zn(b);
          return b.langFormat("accessibility.announceNewData." + A, { chartTitle: E, seriesDesc: p ? rs(p) : null, pointDesc: g ? Qo(g) : null, point: g, series: p });
        }
      }
      (function(u) {
        function n(g) {
          let b = this.chart, C = b.accessibility?.components.series.newDataAnnouncer;
          C && C.chart === b && Sr(b) && (C.dirty.newPoint = ss(C.dirty.newPoint) ? void 0 : g.point);
        }
        function p() {
          let g = this.chart, b = g.accessibility?.components.series.newDataAnnouncer;
          b && b.chart === g && Sr(g) && (b.dirty.hasDirty = !0, b.dirty.allSeries[this.name + this.index] = this);
        }
        u.compose = function(g) {
          Tr(Ar, "A11y.NDA") && (Jo(g, "addPoint", n), Jo(g, "updatedData", p));
        };
      })(Ii || (Ii = {}));
      let Er = Ii, { doc: Pr, win: ze } = _(), { attr: Bi, css: ta, merge: ea } = _(), { fireEventOnWrappedOrUnwrappedElement: ia } = It, { cloneMouseEvent: Or, cloneTouchEvent: Fn, getFakeMouseEvent: Hn, removeElement: sa } = zt, Wn = class {
        constructor(u, n, p = "button", g, b) {
          this.chart = u, this.target = n, this.eventProvider = new J();
          let C = this.innerElement = Pr.createElement(p), k = this.element = g ? Pr.createElement(g) : C;
          u.styledMode || this.hideElementVisually(C), g && (g !== "li" || u.styledMode || (k.style.listStyle = "none"), k.appendChild(C), this.element = k), this.updateTarget(n, b);
        }
        click() {
          let u = this.getTargetPosition();
          u.x += u.width / 2, u.y += u.height / 2;
          let n = Hn("click", u);
          ia(this.target.click, n);
        }
        updateTarget(u, n) {
          this.target = u, this.updateCSSClassName();
          let p = n || {};
          Object.keys(p).forEach((b) => {
            p[b] === null && delete p[b];
          });
          let g = this.getTargetAttr(u.click, "aria-label");
          Bi(this.innerElement, ea(g ? { "aria-label": g } : {}, p)), this.eventProvider.removeAddedEvents(), this.addProxyEventsToElement(this.innerElement, u.click), this.refreshPosition();
        }
        refreshPosition() {
          let u = this.getTargetPosition();
          ta(this.innerElement, { width: (u.width || 1) + "px", height: (u.height || 1) + "px", left: (Math.round(u.x) || 0) + "px", top: (Math.round(u.y) || 0) + "px" });
        }
        remove() {
          this.eventProvider.removeAddedEvents(), sa(this.element);
        }
        updateCSSClassName() {
          let u = (C) => C.indexOf("highcharts-no-tooltip") > -1, n = this.chart.legend, p = n.group && n.group.div, g = u(p && p.className || ""), b = u(this.getTargetAttr(this.target.click, "class") || "");
          this.innerElement.className = g || b ? "highcharts-a11y-proxy-element highcharts-no-tooltip" : "highcharts-a11y-proxy-element";
        }
        addProxyEventsToElement(u, n) {
          ["click", "touchstart", "touchend", "touchcancel", "touchmove", "mouseover", "mouseenter", "mouseleave", "mouseout"].forEach((p) => {
            let g = p.indexOf("touch") === 0;
            this.eventProvider.addEvent(u, p, (b) => {
              let C = g ? Fn(b) : Or(b);
              n && ia(n, C), b.stopPropagation(), g || b.preventDefault();
            }, { passive: !1 });
          });
        }
        hideElementVisually(u) {
          ta(u, { borderWidth: 0, backgroundColor: "transparent", cursor: "pointer", outline: "none", opacity: 1e-3, filter: "alpha(opacity=1)", zIndex: 999, overflow: "hidden", padding: 0, margin: 0, display: "block", position: "absolute", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)" });
        }
        getTargetPosition() {
          let u = this.target.click, n = u.element ? u.element : u, p = this.target.visual || n, g = this.chart.renderTo, b = this.chart.pointer;
          if (g && p?.getBoundingClientRect && b) {
            let C = ze.scrollY || Pr.documentElement.scrollTop, k = p.getBoundingClientRect(), A = b.getChartPosition();
            return { x: (k.left - A.left) / A.scaleX, y: (k.top + C - A.top) / A.scaleY, width: k.right / A.scaleX - k.left / A.scaleX, height: k.bottom / A.scaleY - k.top / A.scaleY };
          }
          return { x: 0, y: 0, width: 1, height: 1 };
        }
        getTargetAttr(u, n) {
          return u.element ? u.element.getAttribute(n) : u.getAttribute(n);
        }
      }, { doc: Lr } = _(), { attr: ce, css: Ct } = _(), { unhideChartElementFromAT: ra } = It, { removeChildNodes: Dr } = zt, Ir = class {
        constructor(u) {
          this.chart = u, this.domElementProvider = new us(), this.groups = {}, this.groupOrder = [], this.beforeChartProxyPosContainer = this.createProxyPosContainer("before"), this.afterChartProxyPosContainer = this.createProxyPosContainer("after"), this.update();
        }
        addProxyElement(u, n, p = "button", g) {
          let b = this.groups[u];
          if (!b) throw Error("ProxyProvider.addProxyElement: Invalid group key " + u);
          let C = b.type === "ul" || b.type === "ol" ? "li" : void 0, k = new Wn(this.chart, n, p, C, g);
          return b.proxyContainerElement.appendChild(k.element), b.proxyElements.push(k), k;
        }
        addGroup(u, n = "div", p) {
          let g, b = this.groups[u];
          if (b) return b.groupElement;
          let C = this.domElementProvider.createElement(n);
          return p && p.role && n !== "div" ? (g = this.domElementProvider.createElement("div")).appendChild(C) : g = C, g.className = "highcharts-a11y-proxy-group highcharts-a11y-proxy-group-" + u.replace(/\W/g, "-"), this.groups[u] = { proxyContainerElement: C, groupElement: g, type: n, proxyElements: [] }, ce(g, p || {}), n === "ul" && C.setAttribute("role", "list"), this.afterChartProxyPosContainer.appendChild(g), this.updateGroupOrder(this.groupOrder), g;
        }
        updateGroupAttrs(u, n) {
          let p = this.groups[u];
          if (!p) throw Error("ProxyProvider.updateGroupAttrs: Invalid group key " + u);
          ce(p.groupElement, n);
        }
        updateGroupOrder(u) {
          if (this.groupOrder = u.slice(), this.isDOMOrderGroupOrder()) return;
          let n = u.indexOf("series"), p = n > -1 ? u.slice(0, n) : u, g = n > -1 ? u.slice(n + 1) : [], b = Lr.activeElement;
          ["before", "after"].forEach((C) => {
            let k = this[C === "before" ? "beforeChartProxyPosContainer" : "afterChartProxyPosContainer"];
            Dr(k), (C === "before" ? p : g).forEach((A) => {
              let E = this.groups[A];
              E && k.appendChild(E.groupElement);
            });
          }), (this.beforeChartProxyPosContainer.contains(b) || this.afterChartProxyPosContainer.contains(b)) && b && b.focus && b.focus();
        }
        clearGroup(u) {
          let n = this.groups[u];
          if (!n) throw Error("ProxyProvider.clearGroup: Invalid group key " + u);
          Dr(n.proxyContainerElement);
        }
        removeGroup(u) {
          let n = this.groups[u];
          n && (this.domElementProvider.removeElement(n.groupElement), n.groupElement !== n.proxyContainerElement && this.domElementProvider.removeElement(n.proxyContainerElement), delete this.groups[u]);
        }
        update() {
          this.updatePosContainerPositions(), this.updateGroupOrder(this.groupOrder), this.updateProxyElementPositions();
        }
        updateProxyElementPositions() {
          Object.keys(this.groups).forEach(this.updateGroupProxyElementPositions.bind(this));
        }
        updateGroupProxyElementPositions(u) {
          let n = this.groups[u];
          n && n.proxyElements.forEach((p) => p.refreshPosition());
        }
        destroy() {
          this.domElementProvider.destroyCreatedElements();
        }
        createProxyPosContainer(u) {
          let n = this.domElementProvider.createElement("div");
          return n.setAttribute("aria-hidden", "false"), n.className = "highcharts-a11y-proxy-container" + (u ? "-" + u : ""), Ct(n, { top: "0", left: "0" }), this.chart.styledMode || (n.style.whiteSpace = "nowrap", n.style.position = "absolute"), n;
        }
        getCurrentGroupOrderInDOM() {
          let u = (b) => {
            let C = Object.keys(this.groups), k = C.length;
            for (; k--; ) {
              let A = C[k], E = this.groups[A];
              if (E && b === E.groupElement) return A;
            }
          }, n = (b) => {
            let C = [], k = b.children;
            for (let A = 0; A < k.length; ++A) {
              let E = u(k[A]);
              E && C.push(E);
            }
            return C;
          }, p = n(this.beforeChartProxyPosContainer), g = n(this.afterChartProxyPosContainer);
          return p.push("series"), p.concat(g);
        }
        isDOMOrderGroupOrder() {
          let u = this.getCurrentGroupOrderInDOM(), n = this.groupOrder.filter((g) => g === "series" || !!this.groups[g]), p = u.length;
          if (p !== n.length) return !1;
          for (; p--; ) if (u[p] !== n[p]) return !1;
          return !0;
        }
        updatePosContainerPositions() {
          let u = this.chart;
          if (u.renderer.forExport) return;
          let n = u.renderer.box;
          u.container.insertBefore(this.afterChartProxyPosContainer, n.nextSibling), u.container.insertBefore(this.beforeChartProxyPosContainer, n), ra(this.chart, this.afterChartProxyPosContainer), ra(this.chart, this.beforeChartProxyPosContainer);
        }
      }, { unhideChartElementFromAT: Ni, getAxisRangeDescription: Ht } = It, { addEvent: os, attr: oa } = _();
      class Ds extends Ie {
        init() {
          let n = this.chart;
          this.announcer = new Ft(n, "polite");
        }
        onChartUpdate() {
          let n = this.chart, p = this, g = n.rangeSelector;
          g && (this.updateSelectorVisibility(), this.setDropdownAttrs(), g.buttons && g.buttons.length && g.buttons.forEach((b) => {
            p.setRangeButtonAttrs(b);
          }), g.maxInput && g.minInput && ["minInput", "maxInput"].forEach(function(b, C) {
            let k = g[b];
            k && (Ni(n, k), p.setRangeInputAttrs(k, "accessibility.rangeSelector." + (C ? "max" : "min") + "InputLabel"));
          }));
        }
        updateSelectorVisibility() {
          let n = this.chart, p = n.rangeSelector, g = p && p.dropdown, b = p && p.buttons || [], C = (k) => k.setAttribute("aria-hidden", !0);
          p && p.hasVisibleDropdown && g ? (Ni(n, g), b.forEach((k) => C(k.element))) : (g && C(g), b.forEach((k) => Ni(n, k.element)));
        }
        setDropdownAttrs() {
          let n = this.chart, p = n.rangeSelector && n.rangeSelector.dropdown;
          if (p) {
            let g = n.langFormat("accessibility.rangeSelector.dropdownLabel", { rangeTitle: n.options.lang.rangeSelectorZoom });
            p.setAttribute("aria-label", g), p.setAttribute("tabindex", -1);
          }
        }
        setRangeButtonAttrs(n) {
          oa(n.element, { tabindex: -1, role: "button" });
        }
        setRangeInputAttrs(n, p) {
          let g = this.chart;
          oa(n, { tabindex: -1, "aria-label": g.langFormat(p, { chart: g }) });
        }
        onButtonNavKbdArrowKey(n, p) {
          let g = n.response, b = this.keyCodes, C = this.chart, k = C.options.accessibility.keyboardNavigation.wrapAround, A = p === b.left || p === b.up ? -1 : 1;
          return C.highlightRangeSelectorButton(C.highlightedRangeSelectorItemIx + A) ? g.success : k ? (n.init(A), g.success) : g[A > 0 ? "next" : "prev"];
        }
        onButtonNavKbdClick(n) {
          let p = n.response, g = this.chart;
          return g.oldRangeSelectorItemState !== 3 && this.fakeClickEvent(g.rangeSelector.buttons[g.highlightedRangeSelectorItemIx].element), p.success;
        }
        onAfterBtnClick() {
          let n = this.chart, p = Ht(n.xAxis[0]), g = n.langFormat("accessibility.rangeSelector.clickButtonAnnouncement", { chart: n, axisRangeDescription: p });
          g && this.announcer.announce(g);
        }
        onInputKbdMove(n) {
          let p = this.chart, g = p.rangeSelector, b = p.highlightedInputRangeIx = (p.highlightedInputRangeIx || 0) + n;
          if (b > 1 || b < 0) {
            if (p.accessibility) return p.accessibility.keyboardNavigation.exiting = !0, p.accessibility.keyboardNavigation.tabindexContainer.focus(), p.accessibility.keyboardNavigation.move(n);
          } else if (g) {
            let C = g[b ? "maxDateBox" : "minDateBox"], k = g[b ? "maxInput" : "minInput"];
            C && k && p.setFocusToElement(C, k);
          }
          return !0;
        }
        onInputNavInit(n) {
          let p = this, g = this.chart, b = n > 0 ? 0 : 1, C = g.rangeSelector, k = C && C[b ? "maxDateBox" : "minDateBox"], A = C && C.minInput, E = C && C.maxInput;
          if (g.highlightedInputRangeIx = b, k && A && E) {
            g.setFocusToElement(k, b ? E : A), this.removeInputKeydownHandler && this.removeInputKeydownHandler();
            let P = (R) => {
              (R.which || R.keyCode) === this.keyCodes.tab && p.onInputKbdMove(R.shiftKey ? -1 : 1) && (R.preventDefault(), R.stopPropagation());
            }, B = os(A, "keydown", P), z = os(E, "keydown", P);
            this.removeInputKeydownHandler = () => {
              B(), z();
            };
          }
        }
        onInputNavTerminate() {
          let n = this.chart.rangeSelector || {};
          n.maxInput && n.hideInput("max"), n.minInput && n.hideInput("min"), this.removeInputKeydownHandler && (this.removeInputKeydownHandler(), delete this.removeInputKeydownHandler);
        }
        initDropdownNav() {
          let n = this.chart, p = n.rangeSelector, g = p && p.dropdown;
          p && g && (n.setFocusToElement(p.buttonGroup, g), this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeDropdownKeydownHandler = os(g, "keydown", (b) => {
            let C = (b.which || b.keyCode) === this.keyCodes.tab, k = n.accessibility;
            C && (b.preventDefault(), b.stopPropagation(), k && k.keyboardNavigation.move(b.shiftKey ? -1 : 1));
          }));
        }
        getRangeSelectorButtonNavigation() {
          let n = this.chart, p = this.keyCodes, g = this;
          return new ke(n, { keyCodeMap: [[[p.left, p.right, p.up, p.down], function(b) {
            return g.onButtonNavKbdArrowKey(this, b);
          }], [[p.enter, p.space], function() {
            return g.onButtonNavKbdClick(this);
          }]], validate: function() {
            return !!(n.rangeSelector && n.rangeSelector.buttons && n.rangeSelector.buttons.length);
          }, init: function(b) {
            let C = n.rangeSelector;
            if (C && C.hasVisibleDropdown) g.initDropdownNav();
            else if (C) {
              let k = C.buttons.length - 1;
              n.highlightRangeSelectorButton(b > 0 ? 0 : k);
            }
          }, terminate: function() {
            g.removeDropdownKeydownHandler && (g.removeDropdownKeydownHandler(), delete g.removeDropdownKeydownHandler);
          } });
        }
        getRangeSelectorInputNavigation() {
          let n = this.chart, p = this;
          return new ke(n, { keyCodeMap: [], validate: function() {
            return !!(n.rangeSelector && n.rangeSelector.inputGroup && n.rangeSelector.inputGroup.element.style.visibility !== "hidden" && n.options.rangeSelector.inputEnabled !== !1 && n.rangeSelector.minInput && n.rangeSelector.maxInput);
          }, init: function(g) {
            p.onInputNavInit(g);
          }, terminate: function() {
            p.onInputNavTerminate();
          } });
        }
        getKeyboardNavigation() {
          return [this.getRangeSelectorButtonNavigation(), this.getRangeSelectorInputNavigation()];
        }
        destroy() {
          this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeInputKeydownHandler && this.removeInputKeydownHandler(), this.announcer && this.announcer.destroy();
        }
      }
      (function(u) {
        function n(g) {
          let b = this.rangeSelector && this.rangeSelector.buttons || [], C = this.highlightedRangeSelectorItemIx, k = this.rangeSelector && this.rangeSelector.selected;
          return C !== void 0 && b[C] && C !== k && b[C].setState(this.oldRangeSelectorItemState || 0), this.highlightedRangeSelectorItemIx = g, !!b[g] && (this.setFocusToElement(b[g].box, b[g].element), g !== k && (this.oldRangeSelectorItemState = b[g].state, b[g].setState(1)), !0);
        }
        function p() {
          let g = this.chart.accessibility;
          if (g && g.components.rangeSelector) return g.components.rangeSelector.onAfterBtnClick();
        }
        u.compose = function(g, b) {
          let C = g.prototype;
          C.highlightRangeSelectorButton || (C.highlightRangeSelectorButton = n, os(b, "afterBtnClick", p));
        };
      })(Ds || (Ds = {}));
      let it = Ds, { composed: aa } = _(), { addEvent: ki, merge: Is, pushUnique: Bs } = _();
      (function(u) {
        function n(E) {
          Is(!0, E, { marker: { enabled: !0, states: { normal: { opacity: 0 } } } });
        }
        function p(E) {
          return E.marker.states && E.marker.states.normal && E.marker.states.normal.opacity;
        }
        function g(E) {
          return !!(E._hasPointMarkers && E.points && E.points.length);
        }
        function b() {
          this.chart.styledMode && (this.markerGroup && this.markerGroup[this.a11yMarkersForced ? "addClass" : "removeClass"]("highcharts-a11y-markers-hidden"), g(this) && this.points.forEach((E) => {
            E.graphic && (E.graphic[E.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-hidden"), E.graphic[E.hasForcedA11yMarker === !1 ? "addClass" : "removeClass"]("highcharts-a11y-marker-visible"));
          }));
        }
        function C(E) {
          this.resetA11yMarkerOptions = Is(E.options.marker || {}, this.userOptions.marker || {});
        }
        function k() {
          let E = this.options;
          (function(P) {
            let B = P.chart.options.accessibility.enabled, z = (P.options.accessibility && P.options.accessibility.enabled) !== !1;
            return B && z && (function(R) {
              let F = R.chart.options.accessibility;
              return R.points.length < F.series.pointDescriptionEnabledThreshold || F.series.pointDescriptionEnabledThreshold === !1;
            })(P);
          })(this) ? (E.marker && E.marker.enabled === !1 && (this.a11yMarkersForced = !0, n(this.options)), g(this) && (function(P) {
            let B = P.points.length;
            for (; B--; ) {
              let R = P.points[B], F = R.options, G = R.hasForcedA11yMarker;
              if (delete R.hasForcedA11yMarker, F.marker) {
                var z;
                let q = G && p(F) === 0;
                F.marker.enabled && !q ? (Is(!0, (z = F).marker, { states: { normal: { opacity: p(z) || 1 } } }), R.hasForcedA11yMarker = !1) : F.marker.enabled === !1 && (n(F), R.hasForcedA11yMarker = !0);
              }
            }
          })(this)) : this.a11yMarkersForced && (delete this.a11yMarkersForced, (function(P) {
            let B = P.resetA11yMarkerOptions;
            if (B) {
              let z = B.states && B.states.normal && B.states.normal.opacity;
              P.userOptions && P.userOptions.marker && (P.userOptions.marker.enabled = !0), P.update({ marker: { enabled: B.enabled, states: { normal: { opacity: z } } } });
            }
          })(this), E.marker && E.marker.enabled === !1 && delete this.resetA11yMarkerOptions);
        }
        function A() {
          this.boosted && this.a11yMarkersForced && (Is(!0, this.options, { marker: { enabled: !1 } }), delete this.a11yMarkersForced);
        }
        u.compose = function(E) {
          Bs(aa, "A11y.FM") && (ki(E, "afterSetOptions", C), ki(E, "render", k), ki(E, "afterRender", b), ki(E, "renderCanvas", A));
        };
      })(Rt || (Rt = {}));
      let ct = Rt;
      var Ns = ft(260), Xn = ft.n(Ns), Gn = ft(820), Yn = ft.n(Gn);
      let { seriesTypes: Br } = Lo(), { doc: Ri } = _(), { defined: qe, fireEvent: jn } = _(), { getPointFromXY: Un, getSeriesFromName: Rs, scrollAxisToPoint: Vn } = It;
      function Nr(u) {
        let n = u.index, p = u.series.points, g = p.length;
        if (p[n] === u) return n;
        for (; g--; ) if (p[g] === u) return g;
      }
      function as(u) {
        let n = u.chart.options.accessibility.keyboardNavigation.seriesNavigation, p = u.options.accessibility || {}, g = p.keyboardNavigation;
        return g && g.enabled === !1 || p.enabled === !1 || u.options.enableMouseTracking === !1 || !u.visible || n.pointNavigationEnabledThreshold && +n.pointNavigationEnabledThreshold <= u.points.length;
      }
      function ns(u) {
        let n = u.series, p = n.options.nullInteraction, g = u.options.accessibility, b = n.chart.options.accessibility, C = g?.enabled === !1;
        return b.keyboardNavigation.seriesNavigation.skipNullPoints ?? (!(!u.isNull || p) && u.visible === !1 || u.isInside === !1 || C || as(n));
      }
      function zs(u) {
        let n = u.series || [], p = n.length;
        for (let g = 0; g < p; ++g) if (!as(n[g])) {
          let b = (function(C) {
            let k = C.points || [], A = k.length;
            for (let E = 0; E < A; ++E) if (!ns(k[E])) return k[E];
            return null;
          })(n[g]);
          if (b) return b;
        }
        return null;
      }
      function na(u) {
        let n = u.series.length, p = !1;
        for (; n-- && (u.highlightedPoint = u.series[n].points[u.series[n].points.length - 1], !(p = u.series[n].highlightNextValidPoint())); ) ;
        return p;
      }
      function Rr(u) {
        delete u.highlightedPoint;
        let n = zs(u);
        return !!n && n.highlight();
      }
      class Fs {
        constructor(n, p) {
          this.keyCodes = p, this.chart = n;
        }
        init() {
          let n = this, p = this.chart, g = this.eventProvider = new J();
          g.addEvent(Yn(), "destroy", function() {
            return n.onSeriesDestroy(this);
          }), g.addEvent(p, "afterApplyDrilldown", function() {
            let b = zs(this);
            b && b.highlight(!1);
          }), g.addEvent(p, "drilldown", function(b) {
            let C = b.point, k = C.series;
            n.lastDrilledDownPoint = { x: C.x, y: C.y, seriesName: k ? k.name : "" };
          }), g.addEvent(p, "drillupall", function() {
            setTimeout(function() {
              n.onDrillupAll();
            }, 10);
          }), g.addEvent(Xn(), "afterSetState", function() {
            let b = this.graphic && this.graphic.element, C = Ri.activeElement, k = C && C.getAttribute("class"), A = k && k.indexOf("highcharts-a11y-proxy-element") > -1;
            p.highlightedPoint === this && C !== b && !A && b && b.focus && b.focus();
          });
        }
        onDrillupAll() {
          let n, p = this.lastDrilledDownPoint, g = this.chart, b = p && Rs(g, p.seriesName);
          p && b && qe(p.x) && qe(p.y) && (n = Un(b, p.x, p.y)), n = n || zs(g), g.container && g.container.focus(), n && n.highlight && n.highlight(!1);
        }
        getKeyboardNavigationHandler() {
          let n = this, p = this.keyCodes, g = this.chart, b = g.inverted;
          return new ke(g, { keyCodeMap: [[b ? [p.up, p.down] : [p.left, p.right], function(C) {
            return n.onKbdSideways(this, C);
          }], [b ? [p.left, p.right] : [p.up, p.down], function(C) {
            return n.onKbdVertical(this, C);
          }], [[p.enter, p.space], function(C, k) {
            let A = g.highlightedPoint;
            if (A) {
              let { plotLeft: E, plotTop: P } = this.chart, { plotX: B = 0, plotY: z = 0 } = A;
              k = { ...k, chartX: E + B, chartY: P + z, point: A, target: A.graphic?.element || k.target }, jn(A.series, "click", k), A.firePointEvent("click", k);
            }
            return this.response.success;
          }], [[p.home], function() {
            return Rr(g), this.response.success;
          }], [[p.end], function() {
            return na(g), this.response.success;
          }], [[p.pageDown, p.pageUp], function(C) {
            return g.highlightAdjacentSeries(C === p.pageDown), this.response.success;
          }]], init: function() {
            return n.onHandlerInit(this);
          }, validate: function() {
            return !!zs(g);
          }, terminate: function() {
            return n.onHandlerTerminate();
          } });
        }
        onKbdSideways(n, p) {
          let g = this.keyCodes, b = p === g.right || p === g.down;
          return this.attemptHighlightAdjacentPoint(n, b);
        }
        onHandlerInit(n) {
          let p = this.chart;
          return p.options.accessibility.keyboardNavigation.seriesNavigation.rememberPointFocus && p.highlightedPoint ? p.highlightedPoint.highlight() : Rr(p), n.response.success;
        }
        onKbdVertical(n, p) {
          let g = this.chart, b = this.keyCodes, C = p === b.down || p === b.right, k = g.options.accessibility.keyboardNavigation.seriesNavigation;
          if (k.mode && k.mode === "serialize") return this.attemptHighlightAdjacentPoint(n, C);
          let A = g.highlightedPoint && g.highlightedPoint.series.keyboardMoveVertical ? "highlightAdjacentPointVertical" : "highlightAdjacentSeries";
          return g[A](C), n.response.success;
        }
        onHandlerTerminate() {
          let n = this.chart, p = n.options.accessibility.keyboardNavigation;
          n.tooltip && n.tooltip.hide(0);
          let g = n.highlightedPoint && n.highlightedPoint.series;
          g && g.onMouseOut && g.onMouseOut(), n.highlightedPoint && n.highlightedPoint.onMouseOut && n.highlightedPoint.onMouseOut(), p.seriesNavigation.rememberPointFocus || delete n.highlightedPoint;
        }
        attemptHighlightAdjacentPoint(n, p) {
          let g = this.chart, b = g.options.accessibility.keyboardNavigation.wrapAround;
          return g.highlightAdjacentPoint(p) || b && (p ? Rr(g) : na(g)) ? n.response.success : n.response[p ? "next" : "prev"];
        }
        onSeriesDestroy(n) {
          let p = this.chart;
          p.highlightedPoint && p.highlightedPoint.series === n && (delete p.highlightedPoint, p.focusElement && p.focusElement.removeFocusBorder());
        }
        destroy() {
          this.eventProvider.removeAddedEvents();
        }
      }
      (function(u) {
        function n(k) {
          let A, E, P = this.series, B = this.highlightedPoint, z = B && Nr(B) || 0, R = B && B.series.points || [], F = this.series && this.series[this.series.length - 1], G = F && F.points && F.points[F.points.length - 1];
          if (!P[0] || !P[0].points) return !1;
          if (B) {
            if (A = P[B.series.index + (k ? 1 : -1)], (E = R[z + (k ? 1 : -1)]) || !A || (E = A.points[k ? 0 : A.points.length - 1]), !E) return !1;
          } else E = k ? P[0].points[0] : G;
          return ns(E) ? (as(A = E.series) ? this.highlightedPoint = k ? A.points[A.points.length - 1] : A.points[0] : this.highlightedPoint = E, this.highlightAdjacentPoint(k)) : E.highlight();
        }
        function p(k) {
          let A = this.highlightedPoint, E = 1 / 0, P;
          return !!qe(A.plotX) && !!qe(A.plotY) && (this.series.forEach((B) => {
            as(B) || B.points.forEach((z) => {
              if (!qe(z.plotY) || !qe(z.plotX) || z === A) return;
              let R = z.plotY - A.plotY, F = Math.abs(z.plotX - A.plotX), G = Math.abs(R) * Math.abs(R) + F * F * 4;
              B.yAxis && B.yAxis.reversed && (R *= -1), !(R <= 0 && k || R >= 0 && !k || G < 5 || ns(z)) && G < E && (E = G, P = z);
            });
          }), !!P && P.highlight());
        }
        function g(k) {
          let A, E, P, B = this.highlightedPoint, z = this.series && this.series[this.series.length - 1], R = z && z.points && z.points[z.points.length - 1];
          return this.highlightedPoint ? !!(A = this.series[B.series.index + (k ? -1 : 1)]) && !!(E = (function(F, G, q, xt) {
            let dt = 1 / 0, ht, ut, st, rt = G.points.length, wt = (Mt) => !(qe(Mt.plotX) && qe(Mt.plotY));
            if (!wt(F)) {
              for (; rt--; ) !wt(ht = G.points[rt]) && (st = (F.plotX - ht.plotX) * (F.plotX - ht.plotX) * 4 + (F.plotY - ht.plotY) * (F.plotY - ht.plotY) * 1) < dt && (dt = st, ut = rt);
              return qe(ut) ? G.points[ut] : void 0;
            }
          })(B, A)) && (as(A) ? (E.highlight(), (P = this.highlightAdjacentSeries(k)) ? P : (B.highlight(), !1)) : (E.highlight(), E.series.highlightNextValidPoint())) : (A = k ? this.series && this.series[0] : z, !!(E = k ? A && A.points && A.points[0] : R) && E.highlight());
        }
        function b(k = !0) {
          let A = this.series.chart, E = A.tooltip?.label?.element;
          (!this.isNull || this.series.options?.nullInteraction) && k ? this.onMouseOver() : A.tooltip && A.tooltip.hide(0), Vn(this), this.graphic && (A.setFocusToElement(this.graphic), !k && A.focusElement && A.focusElement.removeFocusBorder()), A.highlightedPoint = this;
          let P = E?.getBoundingClientRect().top;
          if (E && P && P < 0) {
            let B = window.scrollY;
            window.scrollTo({ behavior: "smooth", top: B + P });
          }
          return this;
        }
        function C() {
          let k = this.chart.highlightedPoint, A = (k && k.series) === this ? Nr(k) : 0, E = this.points, P = E.length;
          if (E && P) {
            for (let B = A; B < P; ++B) if (!ns(E[B])) return E[B].highlight();
            for (let B = A; B >= 0; --B) if (!ns(E[B])) return E[B].highlight();
          }
          return !1;
        }
        u.compose = function(k, A, E) {
          let P = k.prototype, B = A.prototype, z = E.prototype;
          P.highlightAdjacentPoint || (P.highlightAdjacentPoint = n, P.highlightAdjacentPointVertical = p, P.highlightAdjacentSeries = g, B.highlight = b, z.keyboardMoveVertical = !0, ["column", "gantt", "pie"].forEach((R) => {
            Br[R] && (Br[R].prototype.keyboardMoveVertical = !1);
          }), z.highlightNextValidPoint = C);
        };
      })(Fs || (Fs = {}));
      let la = Fs, { hideSeriesFromAT: qn } = It, { describeSeries: ha } = Di, zr = class extends Ie {
        static compose(u, n, p) {
          Er.compose(p), ct.compose(p), la.compose(u, n, p);
        }
        init() {
          this.newDataAnnouncer = new Er(this.chart), this.newDataAnnouncer.init(), this.keyboardNavigation = new la(this.chart, this.keyCodes), this.keyboardNavigation.init(), this.hideTooltipFromATWhenShown(), this.hideSeriesLabelsFromATWhenShown();
        }
        hideTooltipFromATWhenShown() {
          let u = this;
          this.chart.tooltip && this.addEvent(this.chart.tooltip.constructor, "refresh", function() {
            this.chart === u.chart && this.label && this.label.element && this.label.element.setAttribute("aria-hidden", !0);
          });
        }
        hideSeriesLabelsFromATWhenShown() {
          this.addEvent(this.chart, "afterDrawSeriesLabels", function() {
            this.series.forEach(function(u) {
              u.labelBySeries && u.labelBySeries.attr("aria-hidden", !0);
            });
          });
        }
        onChartRender() {
          this.chart.series.forEach(function(u) {
            (u.options.accessibility && u.options.accessibility.enabled) !== !1 && u.visible && u.getPointsCollection().length !== 0 ? ha(u) : qn(u);
          });
        }
        getKeyboardNavigation() {
          return this.keyboardNavigation.getKeyboardNavigationHandler();
        }
        destroy() {
          this.newDataAnnouncer.destroy(), this.keyboardNavigation.destroy();
        }
      }, { unhideChartElementFromAT: Fe } = It, { getFakeMouseEvent: Fr } = zt, { attr: Kn, pick: $n } = _(), ca = class extends Ie {
        constructor() {
          super(...arguments), this.focusedMapNavButtonIx = -1;
        }
        init() {
          let u = this, n = this.chart;
          this.proxyProvider.addGroup("zoom", "div"), ["afterShowResetZoom", "afterApplyDrilldown", "drillupall"].forEach((p) => {
            u.addEvent(n, p, function() {
              u.updateProxyOverlays();
            });
          });
        }
        onChartUpdate() {
          let u = this.chart, n = this;
          u.mapNavigation && u.mapNavigation.navButtons.forEach((p, g) => {
            Fe(u, p.element), n.setMapNavButtonAttrs(p.element, "accessibility.zoom.mapZoom" + (g ? "Out" : "In"));
          });
        }
        setMapNavButtonAttrs(u, n) {
          let p = this.chart;
          Kn(u, { tabindex: -1, role: "button", "aria-label": p.langFormat(n, { chart: p }) });
        }
        onChartRender() {
          this.updateProxyOverlays();
        }
        updateProxyOverlays() {
          let u = this.chart;
          if (this.proxyProvider.clearGroup("zoom"), u.resetZoomButton && this.createZoomProxyButton(u.resetZoomButton, "resetZoomProxyButton", u.langFormat("accessibility.zoom.resetZoomButton", { chart: u })), u.drillUpButton && u.breadcrumbs && u.breadcrumbs.list) {
            let n = u.breadcrumbs.list[u.breadcrumbs.list.length - 1];
            this.createZoomProxyButton(u.drillUpButton, "drillUpProxyButton", u.langFormat("accessibility.drillUpButton", { chart: u, buttonText: u.breadcrumbs.getButtonText(n) }));
          }
        }
        createZoomProxyButton(u, n, p) {
          this[n] = this.proxyProvider.addProxyElement("zoom", { click: u }, "button", { "aria-label": p, tabindex: -1 });
        }
        getMapZoomNavigation() {
          let u = this.keyCodes, n = this.chart, p = this;
          return new ke(n, { keyCodeMap: [[[u.up, u.down, u.left, u.right], function(g) {
            return p.onMapKbdArrow(this, g);
          }], [[u.tab], function(g, b) {
            return p.onMapKbdTab(this, b);
          }], [[u.space, u.enter], function() {
            return p.onMapKbdClick(this);
          }]], validate: function() {
            return !!(n.mapView && n.mapNavigation && n.mapNavigation.navButtons.length);
          }, init: function(g) {
            return p.onMapNavInit(g);
          } });
        }
        onMapKbdArrow(u, n) {
          let p = this.chart, g = this.keyCodes, b = p.container, C = n === g.up || n === g.down, k = n === g.left || n === g.up ? 1 : -1, A = (C ? p.plotHeight : p.plotWidth) / 10 * k, E = 10 * Math.random(), P = { x: b.offsetLeft + p.plotLeft + p.plotWidth / 2 + E, y: b.offsetTop + p.plotTop + p.plotHeight / 2 + E }, B = C ? { x: P.x, y: P.y + A } : { x: P.x + A, y: P.y };
          return [Fr("mousedown", P), Fr("mousemove", B), Fr("mouseup", B)].forEach((z) => b.dispatchEvent(z)), u.response.success;
        }
        onMapKbdTab(u, n) {
          let p = this.chart, g = u.response, b = n.shiftKey, C = b && !this.focusedMapNavButtonIx || !b && this.focusedMapNavButtonIx;
          if (p.mapNavigation.navButtons[this.focusedMapNavButtonIx].setState(0), C) return p.mapView && p.mapView.zoomBy(), g[b ? "prev" : "next"];
          this.focusedMapNavButtonIx += b ? -1 : 1;
          let k = p.mapNavigation.navButtons[this.focusedMapNavButtonIx];
          return p.setFocusToElement(k.box, k.element), k.setState(2), g.success;
        }
        onMapKbdClick(u) {
          let n = this.chart.mapNavigation.navButtons[this.focusedMapNavButtonIx].element;
          return this.fakeClickEvent(n), u.response.success;
        }
        onMapNavInit(u) {
          let n = this.chart, p = n.mapNavigation.navButtons[0], g = n.mapNavigation.navButtons[1], b = u > 0 ? p : g;
          n.setFocusToElement(b.box, b.element), b.setState(2), this.focusedMapNavButtonIx = u > 0 ? 0 : 1;
        }
        simpleButtonNavigation(u, n, p) {
          let g = this.keyCodes, b = this, C = this.chart;
          return new ke(C, { keyCodeMap: [[[g.tab, g.up, g.down, g.left, g.right], function(k, A) {
            let E = k === g.tab && A.shiftKey || k === g.left || k === g.up;
            return this.response[E ? "prev" : "next"];
          }], [[g.space, g.enter], function() {
            return $n(p(this, C), this.response.success);
          }]], validate: function() {
            return C[u] && C[u].box && b[n].innerElement;
          }, init: function() {
            C.setFocusToElement(C[u].box, b[n].innerElement);
          } });
        }
        getKeyboardNavigation() {
          return [this.simpleButtonNavigation("resetZoomButton", "resetZoomProxyButton", function(u, n) {
            n.zoomOut();
          }), this.simpleButtonNavigation("drillUpButton", "drillUpProxyButton", function(u, n) {
            return n.drillUp(), u.response.prev;
          }), this.getMapZoomNavigation()];
        }
      }, { doc: Hr, isMS: Zn, win: wi } = _(), da = { isHighContrastModeActive: function() {
        if (Zn && wi.getComputedStyle) {
          let u = Hr.createElement("div");
          u.style.backgroundImage = "url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)", Hr.body.appendChild(u);
          let n = (u.currentStyle || wi.getComputedStyle(u)).backgroundImage;
          return Hr.body.removeChild(u), n === "none";
        }
        return wi.matchMedia && wi.matchMedia("(forced-colors: active)").matches;
      }, setHighContrastTheme: function(u) {
        u.highContrastModeActive = !0;
        let n = u.options.accessibility.highContrastTheme;
        u.update(n, !1);
        let p = n.colors?.length > 1;
        u.series.forEach(function(g) {
          let b = n.plotOptions[g.type] || {}, C = p && g.colorIndex !== void 0 ? n.colors[g.colorIndex] : b.color || "window", k = { color: b.color || "windowText", colors: p ? n.colors : [b.color || "windowText"], borderColor: b.borderColor || "window", fillColor: C };
          g.update(k, !1), g.points && g.points.forEach(function(A) {
            A.options && A.options.color && A.update({ color: b.color || "windowText", borderColor: b.borderColor || "window" }, !1);
          });
        }), u.redraw();
      } }, pa = { chart: { backgroundColor: "window" }, title: { style: { color: "windowText" } }, subtitle: { style: { color: "windowText" } }, colorAxis: { minColor: "windowText", maxColor: "windowText", stops: [], dataClasses: [] }, colors: ["windowText"], xAxis: { gridLineColor: "windowText", labels: { style: { color: "windowText" } }, lineColor: "windowText", minorGridLineColor: "windowText", tickColor: "windowText", title: { style: { color: "windowText" } } }, yAxis: { gridLineColor: "windowText", labels: { style: { color: "windowText" } }, lineColor: "windowText", minorGridLineColor: "windowText", tickColor: "windowText", title: { style: { color: "windowText" } } }, tooltip: { backgroundColor: "window", borderColor: "windowText", style: { color: "windowText" } }, plotOptions: { series: { lineColor: "windowText", fillColor: "window", borderColor: "windowText", edgeColor: "windowText", borderWidth: 1, dataLabels: { connectorColor: "windowText", color: "windowText", style: { color: "windowText", textOutline: "none" } }, marker: { lineColor: "windowText", fillColor: "windowText" } }, pie: { color: "window", colors: ["window"], borderColor: "windowText", borderWidth: 1 }, boxplot: { fillColor: "window" }, candlestick: { lineColor: "windowText", fillColor: "window" }, errorbar: { fillColor: "window" } }, legend: { backgroundColor: "window", itemStyle: { color: "windowText" }, itemHoverStyle: { color: "windowText" }, itemHiddenStyle: { color: "#555" }, title: { style: { color: "windowText" } } }, credits: { style: { color: "windowText" } }, drilldown: { activeAxisLabelStyle: { color: "windowText" }, activeDataLabelStyle: { color: "windowText" } }, navigation: { buttonOptions: { symbolStroke: "windowText", theme: { fill: "window" } } }, rangeSelector: { buttonTheme: { fill: "window", stroke: "windowText", style: { color: "windowText" }, states: { hover: { fill: "window", stroke: "windowText", style: { color: "windowText" } }, select: { fill: "#444", stroke: "windowText", style: { color: "windowText" } } } }, inputBoxBorderColor: "windowText", inputStyle: { backgroundColor: "window", color: "windowText" }, labelStyle: { color: "windowText" } }, navigator: { handles: { backgroundColor: "window", borderColor: "windowText" }, outlineColor: "windowText", maskFill: "transparent", series: { color: "windowText", lineColor: "windowText" }, xAxis: { gridLineColor: "windowText" } }, scrollbar: { barBackgroundColor: "#444", barBorderColor: "windowText", buttonArrowColor: "windowText", buttonBackgroundColor: "window", buttonBorderColor: "windowText", rifleColor: "windowText", trackBackgroundColor: "window", trackBorderColor: "windowText" } }, { error: Hs, pick: _n } = _();
      function Wr(u, n, p) {
        let g = u, b, C = 0;
        for (; C < n.length - 1; ++C) g = g[b = n[C]] = _n(g[b], {});
        g[n[n.length - 1]] = p;
      }
      function Xr(u, n, p, g) {
        function b(A, E) {
          return E.reduce(function(P, B) {
            return P[B];
          }, A);
        }
        let C = b(u.options, n), k = b(u.options, p);
        Object.keys(g).forEach(function(A) {
          let E = C[A];
          E !== void 0 && (Wr(k, g[A], E), Hs(32, !1, u, { [n.join(".") + "." + A]: p.join(".") + "." + g[A].join(".") }));
        });
      }
      let Jn = function(u) {
        let n = u.options.chart, p = u.options.accessibility || {};
        ["description", "typeDescription"].forEach(function(g) {
          n[g] && (p[g] = n[g], Hs(32, !1, u, { [`chart.${g}`]: `use accessibility.${g}` }));
        }), u.axes.forEach(function(g) {
          let b = g.options;
          b && b.description && (b.accessibility = b.accessibility || {}, b.accessibility.description = b.description, Hs(32, !1, u, { "axis.description": "use axis.accessibility.description" }));
        }), u.series && (function(g) {
          let b = { description: ["accessibility", "description"], exposeElementToA11y: ["accessibility", "exposeAsGroupOnly"], pointDescriptionFormatter: ["accessibility", "point", "descriptionFormatter"], skipKeyboardNavigation: ["accessibility", "keyboardNavigation", "enabled"], "accessibility.pointDescriptionFormatter": ["accessibility", "point", "descriptionFormatter"] };
          g.series.forEach(function(C) {
            Object.keys(b).forEach(function(k) {
              let A = C.options[k];
              k === "accessibility.pointDescriptionFormatter" && (A = C.options.accessibility && C.options.accessibility.pointDescriptionFormatter), A !== void 0 && (Wr(C.options, b[k], k === "skipKeyboardNavigation" ? !A : A), Hs(32, !1, g, { [`series.${k}`]: "series." + b[k].join(".") }));
            });
          });
        })(u), Xr(u, ["accessibility"], ["accessibility"], { pointDateFormat: ["point", "dateFormat"], pointDateFormatter: ["point", "dateFormatter"], pointDescriptionFormatter: ["point", "descriptionFormatter"], pointDescriptionThreshold: ["series", "pointDescriptionEnabledThreshold"], pointNavigationThreshold: ["keyboardNavigation", "seriesNavigation", "pointNavigationEnabledThreshold"], pointValueDecimals: ["point", "valueDecimals"], pointValuePrefix: ["point", "valuePrefix"], pointValueSuffix: ["point", "valueSuffix"], screenReaderSectionFormatter: ["screenReaderSection", "beforeChartFormatter"], describeSingleSeries: ["series", "describeSingleSeries"], seriesDescriptionFormatter: ["series", "descriptionFormatter"], onTableAnchorClick: ["screenReaderSection", "onViewDataTableClick"], axisRangeDateFormat: ["screenReaderSection", "axisRangeDateFormat"] }), Xr(u, ["accessibility", "keyboardNavigation"], ["accessibility", "keyboardNavigation", "seriesNavigation"], { skipNullPoints: ["skipNullPoints"], mode: ["mode"] }), Xr(u, ["lang", "accessibility"], ["lang", "accessibility"], { legendItem: ["legend", "legendItem"], legendLabel: ["legend", "legendLabel"], mapZoomIn: ["zoom", "mapZoomIn"], mapZoomOut: ["zoom", "mapZoomOut"], resetZoomButton: ["zoom", "resetZoomButton"], screenReaderRegionLabel: ["screenReaderSection", "beforeRegionLabel"], rangeSelectorButton: ["rangeSelector", "buttonText"], rangeSelectorMaxInput: ["rangeSelector", "maxInputLabel"], rangeSelectorMinInput: ["rangeSelector", "minInputLabel"], svgContainerEnd: ["screenReaderSection", "endOfChartMarker"], viewAsDataTable: ["table", "viewAsDataTableButtonText"], tableSummary: ["table", "tableSummary"] });
      }, { defaultOptions: Qn } = _(), { doc: zi } = _(), { addEvent: ci, extend: tl, fireEvent: Gr, merge: Ws } = _(), { removeElement: ua } = zt;
      class Yr {
        constructor(n) {
          this.init(n);
        }
        init(n) {
          if (this.chart = n, !zi?.addEventListener) {
            this.zombie = !0, this.components = {}, n.renderTo.setAttribute("aria-hidden", !0);
            return;
          }
          Jn(n), this.proxyProvider = new Ir(this.chart), this.initComponents(), this.keyboardNavigation = new er(n, this.components);
        }
        initComponents() {
          let n = this.chart, p = this.proxyProvider, g = n.options.accessibility;
          this.components = { container: new Ya(), infoRegions: new Ja(), legend: new Co(), chartMenu: new ys(), rangeSelector: new it(), series: new zr(), zoom: new ca(), navigator: new Ln() }, g.customComponents && tl(this.components, g.customComponents);
          let b = this.components;
          this.getComponentOrder().forEach(function(C) {
            b[C].initBase(n, p), b[C].init();
          });
        }
        getComponentOrder() {
          return this.components ? this.components.series ? ["series"].concat(Object.keys(this.components).filter((n) => n !== "series")) : Object.keys(this.components) : [];
        }
        update() {
          let n = this.components, p = this.chart, g = p.options.accessibility;
          Gr(p, "beforeA11yUpdate"), p.types = this.getChartTypes();
          let b = g.keyboardNavigation.order;
          this.proxyProvider.updateGroupOrder(b), this.getComponentOrder().forEach(function(C) {
            n[C].onChartUpdate(), Gr(p, "afterA11yComponentUpdate", { name: C, component: n[C] });
          }), this.keyboardNavigation.update(b), !p.highContrastModeActive && g.highContrastMode !== !1 && (da.isHighContrastModeActive() || g.highContrastMode === !0) && da.setHighContrastTheme(p), Gr(p, "afterA11yUpdate", { accessibility: this });
        }
        destroy() {
          let n = this.chart || {}, p = this.components;
          Object.keys(p).forEach(function(g) {
            p[g].destroy(), p[g].destroyBase();
          }), this.proxyProvider && this.proxyProvider.destroy(), n.announcerContainer && ua(n.announcerContainer), this.keyboardNavigation && this.keyboardNavigation.destroy(), n.renderTo && n.renderTo.setAttribute("aria-hidden", !0), n.focusElement && n.focusElement.removeFocusBorder();
        }
        getChartTypes() {
          let n = {};
          return this.chart.series.forEach(function(p) {
            n[p.type] = 1;
          }), Object.keys(n);
        }
      }
      (function(u) {
        function n() {
          this.accessibility && this.accessibility.destroy();
        }
        function p() {
          this.a11yDirty && this.renderTo && (delete this.a11yDirty, this.updateA11yEnabled());
          let k = this.accessibility;
          k && !k.zombie && (k.proxyProvider.updateProxyElementPositions(), k.getComponentOrder().forEach(function(A) {
            k.components[A].onChartRender();
          }));
        }
        function g(k) {
          let A = k.options.accessibility;
          A && (A.customComponents && (this.options.accessibility.customComponents = A.customComponents, delete A.customComponents), Ws(!0, this.options.accessibility, A), this.accessibility && this.accessibility.destroy && (this.accessibility.destroy(), delete this.accessibility)), this.a11yDirty = !0;
        }
        function b() {
          let k = this.accessibility, A = this.options.accessibility, E = this.renderer.boxWrapper.element, P = this.title;
          if (A && A.enabled) k && !k.zombie ? k.update() : (this.accessibility = k = new u(this), k && !k.zombie && k.update(), E.getAttribute("role") === "img" && E.removeAttribute("role"));
          else if (k) k.destroy && k.destroy(), delete this.accessibility;
          else {
            this.renderTo.setAttribute("role", "img"), this.renderTo.setAttribute("aria-hidden", !1), this.renderTo.setAttribute("aria-label", (P && P.element.textContent || "").replace(/</g, "&lt;")), E.setAttribute("aria-hidden", !0);
            let B = document.getElementsByClassName("highcharts-description")[0];
            B && (B.setAttribute("aria-hidden", !1), B.classList.remove("highcharts-linked-description"));
          }
        }
        function C() {
          this.series.chart.accessibility && (this.series.chart.a11yDirty = !0);
        }
        u.i18nFormat = lt.i18nFormat, u.compose = function(k, A, E, P, B, z) {
          er.compose(k), Er.compose(P), Co.compose(k, A), ys.compose(k), zr.compose(k, E, P), lt.compose(k), qs.compose(k, B), z && it.compose(k, z);
          let R = k.prototype;
          R.updateA11yEnabled || (R.updateA11yEnabled = b, ci(k, "destroy", n), ci(k, "render", p), ci(k, "update", g), ["addSeries", "init"].forEach((F) => {
            ci(k, F, function() {
              this.a11yDirty = !0;
            });
          }), ["afterApplyDrilldown", "drillupall"].forEach((F) => {
            ci(k, F, function() {
              let G = this.accessibility;
              G && !G.zombie && G.update();
            });
          }), ci(E, "update", C), ["update", "updatedData", "remove"].forEach((F) => {
            ci(P, F, function() {
              this.chart.accessibility && (this.chart.a11yDirty = !0);
            });
          }));
        };
      })(Yr || (Yr = {})), Ws(!0, Qn, { accessibility: { enabled: !0, screenReaderSection: { beforeChartFormat: "<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{playAsSoundButton}</div><div>{viewTableButton}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div><div>{annotationsTitle}{annotationsList}</div>", afterChartFormat: "{endOfChartMarker}", axisRangeDateFormat: "%Y-%m-%d %H:%M:%S" }, series: { descriptionFormat: "{seriesDescription}{authorDescription}{axisDescription}", describeSingleSeries: !1, pointDescriptionEnabledThreshold: 200 }, point: { valueDescriptionFormat: "{xDescription}{separator}{value}.", describeNull: !0 }, landmarkVerbosity: "all", linkedDescription: '*[data-highcharts-chart="{index}"] + .highcharts-description', highContrastMode: "auto", keyboardNavigation: { enabled: !0, focusBorder: { enabled: !0, hideBrowserFocusOutline: !0, style: { color: "#334eff", lineWidth: 2, borderRadius: 3 }, margin: 2 }, order: ["series", "zoom", "rangeSelector", "navigator", "legend", "chartMenu"], wrapAround: !0, seriesNavigation: { skipNullPoints: void 0, pointNavigationEnabledThreshold: !1, rememberPointFocus: !1 } }, announceNewData: { enabled: !1, minAnnounceInterval: 5e3, interruptUser: !1 } }, legend: { accessibility: { enabled: !0, keyboardNavigation: { enabled: !0 } } }, exporting: { accessibility: { enabled: !0 } }, navigator: { accessibility: { enabled: !0 } } }, { accessibility: { highContrastTheme: pa }, lang: { accessibility: { defaultChartTitle: "Chart", chartContainerLabel: "{title}. Highcharts interactive chart.", svgContainerLabel: "Interactive chart", drillUpButton: "{buttonText}", credits: "Chart credits: {creditsStr}", thousandsSep: ",", svgContainerTitle: "", graphicContainerLabel: "", screenReaderSection: { beforeRegionLabel: "", afterRegionLabel: "", annotations: { heading: "Chart annotations summary", descriptionSinglePoint: "{annotationText}. Related to {annotationPoint}", descriptionMultiplePoints: "{annotationText}. Related to {annotationPoint}{#each additionalAnnotationPoints}, also related to {this}{/each}", descriptionNoPoints: "{annotationText}" }, endOfChartMarker: "End of interactive chart." }, sonification: { playAsSoundButtonText: "Play as sound, {chartTitle}", playAsSoundClickAnnouncement: "Play" }, legend: { legendLabelNoTitle: "Toggle series visibility, {chartTitle}", legendLabel: "Chart legend: {legendTitle}", legendItem: "Show {itemName}" }, zoom: { mapZoomIn: "Zoom chart", mapZoomOut: "Zoom out chart", resetZoomButton: "Reset zoom" }, rangeSelector: { dropdownLabel: "{rangeTitle}", minInputLabel: "Select start date.", maxInputLabel: "Select end date.", clickButtonAnnouncement: "Viewing {axisRangeDescription}" }, navigator: { handleLabel: "{#eq handleIx 0}Start, percent{else}End, percent{/eq}", groupLabel: "Axis zoom", changeAnnouncement: "{axisRangeDescription}" }, table: { viewAsDataTableButtonText: "View as data table, {chartTitle}", tableSummary: "Table representation of chart." }, announceNewData: { newDataAnnounce: "Updated data for chart {chartTitle}", newSeriesAnnounceSingle: "New data series: {seriesDesc}", newPointAnnounceSingle: "New data point: {pointDesc}", newSeriesAnnounceMultiple: "New data series in chart {chartTitle}: {seriesDesc}", newPointAnnounceMultiple: "New data point in chart {chartTitle}: {pointDesc}" }, seriesTypeDescriptions: { boxplot: "Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.", arearange: "Arearange charts are line charts displaying a range between a lower and higher value for each point.", areasplinerange: "These charts are line charts displaying a range between a lower and higher value for each point.", bubble: "Bubble charts are scatter charts where each data point also has a size value.", columnrange: "Columnrange charts are column charts displaying a range between a lower and higher value for each point.", errorbar: "Errorbar series are used to display the variability of the data.", funnel: "Funnel charts are used to display reduction of data in stages.", pyramid: "Pyramid charts consist of a single pyramid with item heights corresponding to each point value.", waterfall: "A waterfall chart is a column chart where each column contributes towards a total end value." }, chartTypes: { emptyChart: "Empty chart", mapTypeDescription: "Map of {mapTitle} with {numSeries} data series.", unknownMap: "Map of unspecified region with {numSeries} data series.", combinationChart: "Combination chart with {numSeries} data series.", defaultSingle: "Chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.", defaultMultiple: "Chart with {numSeries} data series.", splineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.", splineMultiple: "Line chart with {numSeries} lines.", lineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.", lineMultiple: "Line chart with {numSeries} lines.", columnSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.", columnMultiple: "Bar chart with {numSeries} data series.", barSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.", barMultiple: "Bar chart with {numSeries} data series.", pieSingle: "Pie chart with {numPoints} {#eq numPoints 1}slice{else}slices{/eq}.", pieMultiple: "Pie chart with {numSeries} pies.", scatterSingle: "Scatter chart with {numPoints} {#eq numPoints 1}point{else}points{/eq}.", scatterMultiple: "Scatter chart with {numSeries} data series.", boxplotSingle: "Boxplot with {numPoints} {#eq numPoints 1}box{else}boxes{/eq}.", boxplotMultiple: "Boxplot with {numSeries} data series.", bubbleSingle: "Bubble chart with {numPoints} {#eq numPoints 1}bubbles{else}bubble{/eq}.", bubbleMultiple: "Bubble chart with {numSeries} data series." }, axis: { xAxisDescriptionSingular: "The chart has 1 X axis displaying {names[0]}. {ranges[0]}", xAxisDescriptionPlural: "The chart has {numAxes} X axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.", yAxisDescriptionSingular: "The chart has 1 Y axis displaying {names[0]}. {ranges[0]}", yAxisDescriptionPlural: "The chart has {numAxes} Y axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.", timeRangeDays: "Data range: {range} days.", timeRangeHours: "Data range: {range} hours.", timeRangeMinutes: "Data range: {range} minutes.", timeRangeSeconds: "Data range: {range} seconds.", rangeFromTo: "Data ranges from {rangeFrom} to {rangeTo}.", rangeCategories: "Data range: {numCategories} categories." }, exporting: { chartMenuLabel: "Chart menu", menuButtonLabel: "View chart menu, {chartTitle}" }, series: { summary: { default: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", defaultCombination: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", line: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", lineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", spline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", splineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", column: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", columnCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", bar: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", barCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", pie: "{series.name}, pie {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.", pieCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Pie with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.", scatter: "{series.name}, scatter plot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.", scatterCombination: "{series.name}, series {seriesNumber} of {chart.series.length}, scatter plot with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.", boxplot: "{series.name}, boxplot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.", boxplotCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Boxplot with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.", bubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.", bubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.", map: "{series.name}, map {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.", mapCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Map with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.", mapline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", maplineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", mapbubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.", mapbubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}." }, description: "{description}", xAxisDescription: "X axis, {name}", yAxisDescription: "Y axis, {name}", nullPointValue: "No value", pointAnnotationsDescription: "{#each annotations}Annotation: {this}{/each}" } } } });
      let ga = Yr, Me = _();
      Me.i18nFormat = ga.i18nFormat, Me.A11yChartUtilities = It, Me.A11yHTMLUtilities = zt, Me.AccessibilityComponent = Ie, Me.KeyboardNavigationHandler = ke, Me.SeriesAccessibilityDescriber = Di, ga.compose(Me.Chart, Me.Legend, Me.Point, Me.Series, Me.SVGElement, Me.RangeSelector);
      let jr = _();
      return Ci.default;
    })());
  })(Ha)), Ha.exports;
}
Wp();
var Wa = { exports: {} }, Xp = Wa.exports, tc;
function Gp() {
  return tc || (tc = 1, (function(ve, Kt) {
    /**
    * Highcharts JS v12.4.0 (2025-09-04)
    * @module highcharts/modules/pattern-fill
    * @requires highcharts
    *
    * Module for adding patterns and images as point fills.
    *
    * (c) 2010-2025 Highsoft AS
    * Author: Torstein Hønsi, Øystein Moseng
    *
    * License: www.highcharts.com/license
    */
    (function(nt, Lt) {
      ve.exports = Lt(nt._Highcharts);
    })(typeof window > "u" ? Xp : window, (nt) => (() => {
      var Lt = { 944: (Y) => {
        Y.exports = nt;
      } }, ee = {};
      function Et(Y) {
        var U = ee[Y];
        if (U !== void 0) return U.exports;
        var $ = ee[Y] = { exports: {} };
        return Lt[Y]($, $.exports, Et), $.exports;
      }
      Et.n = (Y) => {
        var U = Y && Y.__esModule ? () => Y.default : () => Y;
        return Et.d(U, { a: U }), U;
      }, Et.d = (Y, U) => {
        for (var $ in U) Et.o(U, $) && !Et.o(Y, $) && Object.defineProperty(Y, $, { enumerable: !0, get: U[$] });
      }, Et.o = (Y, U) => Object.prototype.hasOwnProperty.call(Y, U);
      var Nt = {};
      Et.d(Nt, { default: () => Se });
      var re = Et(944), Ut = Et.n(re);
      let { animObject: ne } = Ut(), { getOptions: gi } = Ut(), { addEvent: de, defined: ti, erase: We, extend: Te, merge: Le, pick: kt, removeEvent: Rt, wrap: le } = Ut(), ei = (function() {
        let Y = [], U = gi().colors, $ = 0;
        for (let lt of ["M 0 0 L 5 5 M 4.5 -0.5 L 5.5 0.5 M -0.5 4.5 L 0.5 5.5", "M 0 5 L 5 0 M -0.5 0.5 L 0.5 -0.5 M 4.5 5.5 L 5.5 4.5", "M 2 0 L 2 5 M 4 0 L 4 5", "M 0 2 L 5 2 M 0 4 L 5 4", "M 0 1.5 L 2.5 1.5 L 2.5 0 M 2.5 5 L 2.5 3.5 L 5 3.5"]) Y.push({ path: lt, color: U[$++], width: 5, height: 5, patternTransform: "scale(1.4 1.4)" });
        for (let lt of ($ = 5, ["M 0 0 L 5 10 L 10 0", "M 3 3 L 8 3 L 8 8 L 3 8 Z", "M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0", "M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11", "M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9"])) Y.push({ path: lt, color: U[$], width: 10, height: 10 }), $ += 5;
        return Y;
      })();
      function ft(Y, U) {
        let $ = JSON.stringify(Y), lt = $.length || 0, At = 0, mt = 0, Dt;
        if (U) {
          Dt = Math.max(Math.floor(lt / 500), 1);
          for (let Xt = 0; Xt < lt; Xt += Dt) At += $.charCodeAt(Xt);
          At &= At;
        }
        for (; mt < lt; ++mt) At = (At << 5) - At + $.charCodeAt(mt), At &= At;
        return At.toString(16).replace("-", "1");
      }
      function Ci() {
        if (this.renderer && (this.renderer.defIds || []).filter((Y) => Y && Y.indexOf && Y.indexOf("highcharts-pattern-") === 0).length) {
          for (let Y of this.series) if (Y.visible) for (let U of Y.points) {
            let $ = U.options && U.options.color;
            $ && $.pattern && ($.pattern._width = "defer", $.pattern._height = "defer");
          }
          this.redraw(!1);
        }
      }
      function fi() {
        let Y = {}, U = this.renderer, $ = (U.defIds || []).filter((lt) => lt.indexOf && lt.indexOf("highcharts-pattern-") === 0);
        if ($.length) for (let lt of ([].forEach.call(this.renderTo.querySelectorAll('[color^="url("], [fill^="url("], [stroke^="url("]'), (At) => {
          let mt = At.getAttribute("fill") || At.getAttribute("color") || At.getAttribute("stroke");
          mt && (Y[mt.replace(U.url, "").replace("url(#", "").replace(")", "")] = !0);
        }), $)) !Y[lt] && (We(U.defIds, lt), U.patternElements[lt] && (U.patternElements[lt].destroy(), delete U.patternElements[lt]));
      }
      function _() {
        let Y = this.options.color;
        Y && Y.pattern && (typeof Y.pattern.path == "string" && (Y.pattern.path = { d: Y.pattern.path }), this.color = this.options.color = Le(this.series.options.color, Y));
      }
      function X(Y) {
        let U = Y.args[0], $ = Y.args[1], lt = Y.args[2], At = this.chartIndex || 0, mt = U.pattern, Dt = "#333333";
        if (U.patternIndex !== void 0 && ei && (mt = ei[U.patternIndex]), !mt) return !0;
        if (mt.image || typeof mt.path == "string" || mt.path && mt.path.d) {
          let Xt = lt.parentNode && lt.parentNode.getAttribute("class");
          Xt = Xt && Xt.indexOf("highcharts-legend") > -1, (mt._width === "defer" || mt._height === "defer") && mi.call({ graphic: { element: lt } }, mt), (Xt || !mt.id) && ((mt = Le({}, mt)).id = "highcharts-pattern-" + At + "-" + ft(mt) + ft(mt, !0)), this.addPattern(mt, !this.forExport && kt(mt.animation, this.globalAnimation, { duration: 100 })), Dt = `url(${this.url}#${mt.id + (this.forExport ? "-export" : "")})`;
        } else Dt = mt.color || Dt;
        return lt.setAttribute($, Dt), U.toString = function() {
          return Dt;
        }, !1;
      }
      function pe() {
        let Y = this.chart.isResizing;
        if (this.isDirtyData || Y || !this.chart.hasRendered) for (let U of this.points) {
          let $ = U.options && U.options.color;
          $ && $.pattern && (Y && !(U.shapeArgs && U.shapeArgs.width && U.shapeArgs.height) ? ($.pattern._width = "defer", $.pattern._height = "defer") : U.calculatePatternDimensions($.pattern));
        }
      }
      function mi(Y) {
        if (Y.width && Y.height) return;
        let U = this.graphic && (this.graphic.getBBox && this.graphic.getBBox(!0) || this.graphic.element && this.graphic.element.getBBox()) || {}, $ = this.shapeArgs;
        if ($ && (U.width = $.width || U.width, U.height = $.height || U.height, U.x = $.x || U.x, U.y = $.y || U.y), Y.image) {
          if (!U.width || !U.height) {
            Y._width = "defer", Y._height = "defer";
            let lt = this.series.chart.mapView && this.series.chart.mapView.getSVGTransform().scaleY;
            ti(lt) && lt < 0 && (Y._inverted = !0);
            return;
          }
          Y.aspectRatio && (U.aspectRatio = U.width / U.height, Y.aspectRatio > U.aspectRatio ? U.aspectWidth = U.height * Y.aspectRatio : U.aspectHeight = U.width / Y.aspectRatio), Y._width = Y.width || Math.ceil(U.aspectWidth || U.width), Y._height = Y.height || Math.ceil(U.aspectHeight || U.height);
        }
        Y.width || (Y._x = Y.x || 0, Y._x += U.x - Math.round(U.aspectWidth ? Math.abs(U.aspectWidth - U.width) / 2 : 0)), Y.height || (Y._y = Y.y || 0, Y._y += U.y - Math.round(U.aspectHeight ? Math.abs(U.aspectHeight - U.height) / 2 : 0));
      }
      function De(Y, U) {
        let $ = kt(U, !0), lt = ne($), At = Y.color || "#333333", mt = Y.height || (typeof Y._height == "number" ? Y._height : 0) || 32, Dt = Y.width || (typeof Y._width == "number" ? Y._width : 0) || 32, Xt, ue = Y.id, Ee;
        if (!ue && (this.idCounter = this.idCounter || 0, ue = "highcharts-pattern-" + this.idCounter + "-" + (this.chartIndex || 0), ++this.idCounter), this.forExport && (ue += "-export"), this.defIds = this.defIds || [], this.defIds.indexOf(ue) > -1) return;
        this.defIds.push(ue);
        let xi = { id: ue, patternUnits: "userSpaceOnUse", patternContentUnits: Y.patternContentUnits || "userSpaceOnUse", width: Dt, height: mt, x: Y._x || Y.x || 0, y: Y._y || Y.y || 0 };
        Y._inverted && (xi.patternTransform = "scale(1, -1)", Y.patternTransform && (Y.patternTransform += " scale(1, -1)")), Y.patternTransform && (xi.patternTransform = Y.patternTransform);
        let It = this.createElement("pattern").attr(xi).add(this.defs);
        if (It.id = ue, Y.path) {
          let ge;
          Ee = Ut().isObject(Y.path) ? Y.path : { d: Y.path }, Y.backgroundColor && (ge = Y.backgroundColor, this.rect(0, 0, Dt, mt).attr({ fill: ge }).add(It)), Xt = { d: Ee.d }, this.styledMode || (Xt.stroke = Ee.stroke || At, Xt["stroke-width"] = kt(Ee.strokeWidth, 2), Xt.fill = Ee.fill || "none"), Ee.transform && (Xt.transform = Ee.transform), this.createElement("path").attr(Xt).add(It), It.color = At;
        } else Y.image && ($ ? this.image(Y.image, 0, 0, Dt, mt, function() {
          this.animate({ opacity: kt(Y.opacity, 1) }, lt), Rt(this.element, "load");
        }).attr({ opacity: 0 }).add(It) : this.image(Y.image, 0, 0, Dt, mt).add(It));
        return Y.image && $ || Y.opacity === void 0 || [].forEach.call(It.element.childNodes, (ge) => {
          ge.setAttribute("opacity", Y.opacity);
        }), this.patternElements = this.patternElements || {}, this.patternElements[ue] = It, It;
      }
      function ii(Y) {
        let U = this.options.color;
        U && U.pattern && !U.pattern.color ? (delete this.options.color, Y.apply(this, [].slice.call(arguments, 1)), U.pattern.color = this.color, this.color = this.options.color = U) : Y.apply(this, [].slice.call(arguments, 1));
      }
      function Ai() {
        if (!this.chart?.mapView) return;
        let Y = this.chart.renderer, U = Y.patternElements;
        Y.defIds?.length && U && this.points.filter(function($) {
          return !!$.graphic && ($.graphic.element.hasAttribute("fill") || $.graphic.element.hasAttribute("color") || $.graphic.element.hasAttribute("stroke")) && !$.options.color?.pattern?.image && !!$.group?.scaleX && !!$.group?.scaleY;
        }).map(function($) {
          return { id: ($.graphic?.element.getAttribute("fill") || $.graphic?.element.getAttribute("color") || $.graphic?.element.getAttribute("stroke") || "").replace(Y.url, "").replace("url(#", "").replace(")", ""), x: $.group?.scaleX || 1, y: $.group?.scaleY || 1 };
        }).filter(function($, lt, At) {
          return $.id !== "" && $.id.indexOf("highcharts-pattern-") !== -1 && !At.some(function(mt, Dt) {
            return mt.id === $.id && Dt < lt;
          });
        }).forEach(function($) {
          let lt = $.id;
          U[lt].scaleX = 1 / $.x, U[lt].scaleY = 1 / $.y, U[lt].updateTransform("patternTransform");
        });
      }
      let zt = { compose: function(Y, U, $) {
        let lt = U.prototype.pointClass, At = lt.prototype;
        At.calculatePatternDimensions || (de(Y, "endResize", Ci), de(Y, "redraw", fi), Te(At, { calculatePatternDimensions: mi }), de(lt, "afterInit", _), de(U, "render", pe), le(U.prototype, "getColor", ii), de(U, "afterRender", Ai), de(U, "mapZoomComplete", Ai), Te($.prototype, { addPattern: De }), de($, "complexColor", X));
      }, patterns: ei }, Xe = Ut();
      Xe.patterns = zt.patterns, zt.compose(Xe.Chart, Xe.Series, Xe.SVGRenderer);
      let Se = Ut();
      return Nt.default;
    })());
  })(Wa)), Wa.exports;
}
Gp();
const Ra = "highcharts";
let ec = !1, ic = !1, sc = !1;
class Yp {
  constructor() {
  }
  // Operations - Render cartesian chart.
  async renderCartesianChart(Kt, nt, Lt, ee) {
    const Et = [];
    for (const Ut of nt.data.measures)
      Et.push({ type: Kt.options.highchartsType, name: Ut.name, data: Ut.data });
    const Nt = {
      chart: { type: Kt.options.highchartsType },
      plotOptions: { series: { borderColor: "#333" } },
      series: Et,
      title: { text: nt.title.text },
      xAxis: { categories: nt.data.categoryLabels },
      yAxis: { title: { text: nt.data.name } }
    }, re = Na.chart(Lt, Nt, ee);
    return { chart: re, resize: () => re.reflow(), vendorId: Ra };
  }
  // Operations - Render.
  async render(Kt, nt, Lt) {
    await Promise.all([this.loadHighchartsMore()]);
    const ee = Na.chart(Kt, nt, Lt);
    return { chart: ee, resize: () => ee.reflow(), vendorId: Ra };
  }
  // Operations - Render polar chart.
  async renderPolarChart(Kt, nt, Lt, ee) {
    await Promise.all([this.loadHighchartsMore()]);
    const Et = [];
    for (const Ut of nt.data.measures)
      Et.push({ type: Kt.options.highchartsType, name: Ut.name, data: Ut.data });
    const Nt = {
      chart: { polar: !0 },
      plotOptions: { series: { borderColor: "#333" } },
      series: Et,
      title: { text: nt.title.text },
      xAxis: { categories: nt.data.categoryLabels },
      yAxis: { title: { text: nt.data.name } }
    }, re = Na.chart(Lt, Nt, ee);
    return { chart: re, resize: () => re.reflow(), vendorId: Ra };
  }
  // Operations - Render range chart.
  async renderRangeChart(Kt, nt, Lt, ee) {
    await Promise.all([this.loadHighchartsMore()]);
    const Et = [], Nt = [];
    for (let ne = 0; ne < nt.data.measures[0].data.length; ne++)
      Nt.push([nt.data.measures[0].data[ne][0], nt.data.measures[1].data[ne][0]]);
    Et.push({ type: Kt.options.highchartsType, name: "Unknown", data: Nt });
    const re = {
      chart: { type: Kt.options.highchartsType, inverted: Kt.options.inverted },
      plotOptions: { series: { borderColor: "#333" } },
      series: Et,
      title: { text: nt.title.text },
      xAxis: { categories: nt.data.categoryLabels },
      yAxis: { title: { text: nt.data.name } }
    }, Ut = Na.chart(Lt, re, ee);
    return { chart: Ut, resize: () => Ut.reflow(), vendorId: Ra };
  }
  // Utilities - Load dependency wheel and sankey modules.
  async loadDependencyWheelAndSankeyModules() {
    ec || (await Promise.all([import("./dependency-wheel-B3syjhjU.js").then((Kt) => Kt.d), import("./sankey-BTm_YAjl.js").then((Kt) => Kt.s)]), ec = !0);
  }
  // Utilities - Load Highcharts more.
  async loadHighchartsMore() {
    ic || (await import("./highcharts-more-DGRrl1r3.js").then((Kt) => Kt.h), ic = !0);
  }
  // Utilities - Load streamgraph module.
  async loadStreamgraphModule() {
    sc || (await import("./streamgraph-B3O7m-_M.js").then((Kt) => Kt.s), sc = !0);
  }
}
export {
  Yp as H,
  Ip as g
};
