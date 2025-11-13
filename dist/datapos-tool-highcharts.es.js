function Cp(Be) {
  return Be && Be.__esModule && Object.prototype.hasOwnProperty.call(Be, "default") ? Be.default : Be;
}
var Rn = { exports: {} }, Ep = Rn.exports, $h;
function Pp() {
  return $h || ($h = 1, (function(Be, he) {
    /**
    * Highcharts JS v12.4.0 (2025-09-04)
    * @module highcharts/highcharts
    *
    * (c) 2009-2025 Highsoft AS
    *
    * License: www.highcharts.com/license
    */
    (function(dt, Vt) {
      dt._Highcharts = Vt(), Be.exports = dt._Highcharts;
    })(typeof window > "u" ? Ep : window, () => (() => {
      let dt, Vt;
      var ye, Jt, de, oe, Qt, Ne, Rs, zs, Fs, Mi, Ai, Ti, Si, Ci, Hs, _i, gt, Ji, Ei = {};
      Ei.d = (h, t) => {
        for (var e in t) Ei.o(t, e) && !Ei.o(h, e) && Object.defineProperty(h, e, { enumerable: !0, get: t[e] });
      }, Ei.o = (h, t) => Object.prototype.hasOwnProperty.call(h, t);
      var K = {};
      Ei.d(K, { default: () => Sp }), (function(h) {
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
      })(ye || (ye = {}));
      let X = ye, { charts: ne, doc: Qi, win: Re } = X;
      function ei(h, t, e, i) {
        let s = t ? "Highcharts error" : "Highcharts warning";
        h === 32 && (h = `${s}: Deprecated member`);
        let r = Pi(h), o = r ? `${s} #${h}: www.highcharts.com/errors/${h}/` : h.toString();
        if (i !== void 0) {
          let n = "";
          r && (o += "?"), ze(i, function(l, d) {
            n += `
 - ${d}: ${l}`, r && (o += encodeURI(d) + "=" + encodeURI(l));
          }), o += n;
        }
        ss(X, "displayError", { chart: e, code: h, message: o, params: i }, function() {
          if (t) throw Error(o);
          Re.console && ei.messages.indexOf(o) === -1 && console.warn(o);
        }), ei.messages.push(o);
      }
      function Ws(h, t) {
        return parseInt(h, t || 10);
      }
      function Ot(h) {
        return typeof h == "string";
      }
      function ts(h) {
        let t = Object.prototype.toString.call(h);
        return t === "[object Array]" || t === "[object Array Iterator]";
      }
      function be(h, t) {
        return !!h && typeof h == "object" && (!t || !ts(h));
      }
      function Xs(h) {
        return be(h) && typeof h.nodeType == "number";
      }
      function es(h) {
        let t = h?.constructor;
        return !!(be(h, !0) && !Xs(h) && t?.name && t.name !== "Object");
      }
      function Pi(h) {
        return typeof h == "number" && !isNaN(h) && h < 1 / 0 && h > -1 / 0;
      }
      function ve(h) {
        return h != null;
      }
      function Gs(h, t, e) {
        let i, s = Ot(t) && !ve(e), r = (o, n) => {
          ve(o) ? h.setAttribute(n, o) : s ? (i = h.getAttribute(n)) || n !== "class" || (i = h.getAttribute(n + "Name")) : h.removeAttribute(n);
        };
        return Ot(t) ? r(e, t) : ze(t, r), i;
      }
      function io(h) {
        return ts(h) ? h : [h];
      }
      function we(h, t) {
        let e;
        for (e in h || (h = {}), t) h[e] = t[e];
        return h;
      }
      function ii() {
        let h = arguments, t = h.length;
        for (let e = 0; e < t; e++) {
          let i = h[e];
          if (i != null) return i;
        }
      }
      function is(h, t) {
        we(h.style, t);
      }
      function Ys(h) {
        return Math.pow(10, Math.floor(Math.log(h) / Math.LN10));
      }
      function js(h, t) {
        return h > 1e14 ? h : parseFloat(h.toPrecision(t || 14));
      }
      (ei || (ei = {})).messages = [], Math.easeInOutSine = function(h) {
        return -0.5 * (Math.cos(Math.PI * h) - 1);
      };
      let Xt = Array.prototype.find ? function(h, t) {
        return h.find(t);
      } : function(h, t) {
        let e, i = h.length;
        for (e = 0; e < i; e++) if (t(h[e], e)) return h[e];
      };
      function ze(h, t, e) {
        for (let i in h) Object.hasOwnProperty.call(h, i) && t.call(e || h[i], h[i], i, h);
      }
      function Us(h, t, e) {
        function i(o, n) {
          let l = h.removeEventListener;
          l && l.call(h, o, n, !1);
        }
        function s(o) {
          let n, l;
          h.nodeName && (t ? (n = {})[t] = !0 : n = o, ze(n, function(d, m) {
            if (o[m]) for (l = o[m].length; l--; ) i(m, o[m][l].fn);
          }));
        }
        let r = typeof h == "function" && h.prototype || h;
        if (Object.hasOwnProperty.call(r, "hcEvents")) {
          let o = r.hcEvents;
          if (t) {
            let n = o[t] || [];
            e ? (o[t] = n.filter(function(l) {
              return e !== l.fn;
            }), i(t, e)) : (s(o), o[t] = []);
          } else s(o), delete r.hcEvents;
        }
      }
      function ss(h, t, e, i) {
        if (e = e || {}, Qi?.createEvent && (h.dispatchEvent || h.fireEvent && h !== X)) {
          let s = Qi.createEvent("Events");
          s.initEvent(t, !0, !0), e = we(s, e), h.dispatchEvent ? h.dispatchEvent(e) : h.fireEvent(t, e);
        } else if (h.hcEvents) {
          e.target || we(e, { preventDefault: function() {
            e.defaultPrevented = !0;
          }, target: h, type: t });
          let s = [], r = h, o = !1;
          for (; r.hcEvents; ) Object.hasOwnProperty.call(r, "hcEvents") && r.hcEvents[t] && (s.length && (o = !0), s.unshift.apply(s, r.hcEvents[t])), r = Object.getPrototypeOf(r);
          o && s.sort((n, l) => n.order - l.order), s.forEach((n) => {
            n.fn.call(h, e) === !1 && e.preventDefault();
          });
        }
        i && !e.defaultPrevented && i.call(h, e);
      }
      let Fn = (function() {
        let h = Math.random().toString(36).substring(2, 9) + "-", t = 0;
        return function() {
          return "highcharts-" + (dt ? "" : h) + t++;
        };
      })();
      Re.jQuery && (Re.jQuery.fn.highcharts = function() {
        let h = [].slice.call(arguments);
        if (this[0]) return h[0] ? (new X[Ot(h[0]) ? h.shift() : "Chart"](this[0], h[0], h[1]), this) : ne[Gs(this[0], "data-highcharts-chart")];
      });
      let $ = { addEvent: function(h, t, e, i = {}) {
        let s = typeof h == "function" && h.prototype || h;
        Object.hasOwnProperty.call(s, "hcEvents") || (s.hcEvents = {});
        let r = s.hcEvents;
        X.Point && h instanceof X.Point && h.series && h.series.chart && (h.series.chart.runTrackerClick = !0);
        let o = h.addEventListener;
        o && o.call(h, t, e, !!X.supportsPassiveEvents && { passive: i.passive === void 0 ? t.indexOf("touch") !== -1 : i.passive, capture: !1 }), r[t] || (r[t] = []);
        let n = { fn: e, order: typeof i.order == "number" ? i.order : 1 / 0 };
        return r[t].push(n), r[t].sort((l, d) => l.order - d.order), function() {
          Us(h, t, e);
        };
      }, arrayMax: function(h) {
        let t = h.length, e = h[0];
        for (; t--; ) h[t] > e && (e = h[t]);
        return e;
      }, arrayMin: function(h) {
        let t = h.length, e = h[0];
        for (; t--; ) h[t] < e && (e = h[t]);
        return e;
      }, attr: Gs, clamp: function(h, t, e) {
        return h > t ? h < e ? h : e : t;
      }, clearTimeout: function(h) {
        ve(h) && clearTimeout(h);
      }, correctFloat: js, createElement: function(h, t, e, i, s) {
        let r = Qi.createElement(h);
        return t && we(r, t), s && is(r, { padding: "0", border: "none", margin: "0" }), e && is(r, e), i && i.appendChild(r), r;
      }, crisp: function(h, t = 0, e) {
        let i = t % 2 / 2, s = e ? -1 : 1;
        return (Math.round(h * s - i) + i) * s;
      }, css: is, defined: ve, destroyObjectProperties: function(h, t, e) {
        ze(h, function(i, s) {
          i !== t && i?.destroy && i.destroy(), (i?.destroy || !e) && delete h[s];
        });
      }, diffObjects: function(h, t, e, i) {
        let s = {};
        return (function r(o, n, l, d) {
          let m = e ? n : o;
          ze(o, function(c, f) {
            if (!d && i && i.indexOf(f) > -1 && n[f]) {
              c = io(c), l[f] = [];
              for (let x = 0; x < Math.max(c.length, n[f].length); x++) n[f][x] && (c[x] === void 0 ? l[f][x] = n[f][x] : (l[f][x] = {}, r(c[x], n[f][x], l[f][x], d + 1)));
            } else be(c, !0) && !c.nodeType ? (l[f] = ts(c) ? [] : {}, r(c, n[f] || {}, l[f], d + 1), Object.keys(l[f]).length === 0 && (f !== "colorAxis" || d !== 0) && delete l[f]) : (o[f] !== n[f] || f in o && !(f in n)) && f !== "__proto__" && f !== "constructor" && (l[f] = m[f]);
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
      }, error: ei, extend: we, extendClass: function(h, t) {
        let e = function() {
        };
        return e.prototype = new h(), we(e.prototype, t), e;
      }, find: Xt, fireEvent: ss, getAlignFactor: (h = "") => ({ center: 0.5, right: 1, middle: 0.5, bottom: 1 })[h] || 0, getClosestDistance: function(h, t) {
        let e, i, s, r = !t;
        return h.forEach((o) => {
          if (o.length > 1) for (s = o.length - 1; s > 0; s--) (i = o[s] - o[s - 1]) < 0 && !r ? (t?.(), t = void 0) : i && (e === void 0 || i < e) && (e = i);
        }), e;
      }, getMagnitude: Ys, getNestedProperty: function(h, t) {
        let e = h.split(".");
        for (; e.length && ve(t); ) {
          let i = e.shift();
          if (i === void 0 || i === "__proto__") return;
          if (i === "this") {
            let r;
            return be(t) && (r = t["@this"]), r ?? t;
          }
          let s = t[i.replace(/[\\'"]/g, "")];
          if (!ve(s) || typeof s == "function" || typeof s.nodeType == "number" || s === Re) return;
          t = s;
        }
        return t;
      }, getStyle: function h(t, e, i) {
        let s;
        if (e === "width") {
          let o = Math.min(t.offsetWidth, t.scrollWidth), n = t.getBoundingClientRect?.().width;
          return n < o && n >= o - 1 && (o = Math.floor(n)), Math.max(0, o - (h(t, "padding-left", !0) || 0) - (h(t, "padding-right", !0) || 0));
        }
        if (e === "height") return Math.max(0, Math.min(t.offsetHeight, t.scrollHeight) - (h(t, "padding-top", !0) || 0) - (h(t, "padding-bottom", !0) || 0));
        let r = Re.getComputedStyle(t, void 0);
        return r && (s = r.getPropertyValue(e), ii(i, e !== "opacity") && (s = Ws(s))), s;
      }, insertItem: function(h, t) {
        let e, i = h.options.index, s = t.length;
        for (e = h.options.isInternal ? s : 0; e < s + 1; e++) if (!t[e] || Pi(i) && i < ii(t[e].options.index, t[e]._i) || t[e].options.isInternal) {
          t.splice(e, 0, h);
          break;
        }
        return e;
      }, isArray: ts, isClass: es, isDOMElement: Xs, isFunction: function(h) {
        return typeof h == "function";
      }, isNumber: Pi, isObject: be, isString: Ot, merge: function(h, ...t) {
        let e, i = [h, ...t], s = {}, r = function(n, l) {
          return typeof n != "object" && (n = {}), ze(l, function(d, m) {
            m !== "__proto__" && m !== "constructor" && (!be(d, !0) || es(d) || Xs(d) ? n[m] = l[m] : n[m] = r(n[m] || {}, d));
          }), n;
        };
        h === !0 && (s = i[1], i = Array.prototype.slice.call(i, 2));
        let o = i.length;
        for (e = 0; e < o; e++) s = r(s, i[e]);
        return s;
      }, normalizeTickInterval: function(h, t, e, i, s) {
        let r, o = h;
        e = ii(e, Ys(h));
        let n = h / e;
        for (!t && (t = s ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], i === !1 && (e === 1 ? t = t.filter(function(l) {
          return l % 1 == 0;
        }) : e <= 0.1 && (t = [1 / e]))), r = 0; r < t.length && (o = t[r], (!s || !(o * e >= h)) && (s || !(n <= (t[r] + (t[r + 1] || t[r])) / 2))); r++) ;
        return js(o * e, -Math.round(Math.log(1e-3) / Math.LN10));
      }, objectEach: ze, offset: function(h) {
        let t = Qi.documentElement, e = h.parentElement || h.parentNode ? h.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 };
        return { top: e.top + (Re.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: e.left + (Re.pageXOffset || t.scrollLeft) - (t.clientLeft || 0), width: e.width, height: e.height };
      }, pad: function(h, t, e) {
        return Array((t || 2) + 1 - String(h).replace("-", "").length).join(e || "0") + h;
      }, pick: ii, pInt: Ws, pushUnique: function(h, t) {
        return 0 > h.indexOf(t) && !!h.push(t);
      }, relativeLength: function(h, t, e) {
        return /%$/.test(h) ? t * parseFloat(h) / 100 + (e || 0) : parseFloat(h);
      }, removeEvent: Us, replaceNested: function(h, ...t) {
        let e, i;
        do
          for (i of (e = h, t)) h = h.replace(i[0], i[1]);
        while (h !== e);
        return h;
      }, splat: io, stableSort: function(h, t) {
        let e, i, s = h.length;
        for (i = 0; i < s; i++) h[i].safeI = i;
        for (h.sort(function(r, o) {
          return (e = t(r, o)) === 0 ? r.safeI - o.safeI : e;
        }), i = 0; i < s; i++) delete h[i].safeI;
      }, syncTimeout: function(h, t, e) {
        return t > 0 ? setTimeout(h, t, e) : (h.call(0, e), -1);
      }, timeUnits: { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 24192e5, year: 314496e5 }, ucfirst: function(h) {
        return Ot(h) ? h.substring(0, 1).toUpperCase() + h.substring(1) : String(h);
      }, uniqueKey: Fn, useSerialIds: function(h) {
        return dt = ii(h, dt);
      }, wrap: function(h, t, e) {
        let i = h[t];
        h[t] = function() {
          let s = arguments, r = this;
          return e.apply(this, [function() {
            return i.apply(r, arguments.length ? arguments : s);
          }].concat([].slice.call(arguments)));
        };
      } }, { pageLang: Hn, win: rs } = X, { defined: ce, error: so, extend: te, isNumber: ro, isObject: si, isString: Oi, merge: oo, objectEach: Wn, pad: ke, splat: Xn, timeUnits: Vs, ucfirst: Gn } = $, qs = X.isSafari && rs.Intl && !rs.Intl.DateTimeFormat.prototype.formatRange, Yn = (h) => h.main === void 0, jn = class {
        constructor(h, t) {
          this.options = { timezone: "UTC" }, this.variableTimezone = !1, this.Date = rs.Date, this.update(h), this.lang = t;
        }
        update(h = {}) {
          this.dTLCache = {}, this.options = h = oo(!0, this.options, h);
          let { timezoneOffset: t, useUTC: e, locale: i } = h;
          this.Date = h.Date || rs.Date || Date;
          let s = h.timezone;
          ce(e) && (s = e ? "UTC" : void 0), t && t % 60 == 0 && (s = "Etc/GMT" + (t > 0 ? "+" : "") + t / 60), this.variableTimezone = s !== "UTC" && s?.indexOf("Etc/GMT") !== 0, this.timezone = s, this.lang && i && (this.lang.locale = i), ["months", "shortMonths", "weekdays", "shortWeekdays"].forEach((r) => {
            let o = /months/i.test(r), n = /short/.test(r), l = { timeZone: "UTC" };
            l[o ? "month" : "weekday"] = n ? "short" : "long", this[r] = (o ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : [3, 4, 5, 6, 7, 8, 9]).map((d) => this.dateFormat(l, (o ? 31 : 1) * 24 * 36e5 * d));
          });
        }
        toParts(h) {
          let [t, e, i, s, r, o, n] = this.dateTimeFormat({ weekday: "narrow", day: "numeric", month: "numeric", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }, h, "es").split(/(?:, | |\/|:)/g);
          return [s, i - 1, e, r, o, n, Math.floor(Number(h) || 0) % 1e3, "DLMXJVS".indexOf(t)].map(Number);
        }
        dateTimeFormat(h, t, e = this.options.locale || Hn) {
          let i = JSON.stringify(h) + e;
          Oi(h) && (h = this.str2dtf(h));
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
            h.indexOf(i) !== -1 && te(t, e[i]);
          }), t;
        }
        makeTime(h, t, e = 1, i = 0, s, r, o) {
          let n = this.Date.UTC(h, t, e, i, s || 0, r || 0, o || 0);
          if (this.timezone !== "UTC") {
            let l = this.getTimezoneOffset(n);
            if (n += l, [2, 3, 8, 9, 10, 11].indexOf(t) !== -1 && (i < 5 || i > 20)) {
              let d = this.getTimezoneOffset(n);
              l !== d ? n += d - l : l - 36e5 !== this.getTimezoneOffset(n - 36e5) || qs || (n -= 36e5);
            }
          }
          return n;
        }
        parse(h) {
          if (!Oi(h)) return h ?? void 0;
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
          if (!ce(t) || isNaN(t)) return i?.invalidDate || "";
          if (Oi(h = h ?? "%Y-%m-%d %H:%M:%S")) {
            let s, r = /%\[([a-zA-Z]+)\]/g;
            for (; s = r.exec(h); ) h = h.replace(s[0], this.dateTimeFormat(s[1], t, i?.locale));
          }
          if (Oi(h) && h.indexOf("%") !== -1) {
            let s = this, [r, o, n, l, d, m, c, f] = this.toParts(t), x = i?.weekdays || this.weekdays, b = i?.shortWeekdays || this.shortWeekdays, M = i?.months || this.months, k = i?.shortMonths || this.shortMonths;
            Wn(te({ a: b ? b[f] : x[f].substr(0, 3), A: x[f], d: ke(n), e: ke(n, 2, " "), w: f, v: i?.weekFrom ?? "", b: k[o], B: M[o], m: ke(o + 1), o: o + 1, y: r.toString().substr(2, 2), Y: r, H: ke(l), k: l, I: ke(l % 12 || 12), l: l % 12 || 12, M: ke(d), p: l < 12 ? "AM" : "PM", P: l < 12 ? "am" : "pm", S: ke(m), L: ke(c, 3) }, X.dateFormats), function(v, S) {
              if (Oi(h)) for (; h.indexOf("%" + S) !== -1; ) h = h.replace("%" + S, typeof v == "function" ? v.call(s, t) : v);
            });
          } else if (si(h)) {
            let s = (this.getTimezoneOffset(t) || 0) / 36e5, r = this.timezone || "Etc/GMT" + (s >= 0 ? "+" : "") + s, { prefix: o = "", suffix: n = "" } = h;
            h = o + this.dateTimeFormat(te({ timeZone: r }, h), t) + n;
          }
          return e ? Gn(h) : h;
        }
        resolveDTLFormat(h) {
          return si(h, !0) ? si(h, !0) && Yn(h) ? { main: h } : h : { main: (h = Xn(h))[0], from: h[1], to: h[2] };
        }
        getDateFormat(h, t, e, i) {
          let s = this.dateFormat("%m-%d %H:%M:%S.%L", t), r = "01-01 00:00:00.000", o = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, n = "millisecond", l = n;
          for (n in Vs) {
            if (h && h === Vs.week && +this.dateFormat("%w", t) === e && s.substr(6) === r.substr(6)) {
              n = "week";
              break;
            }
            if (h && Vs[n] > h) {
              n = l;
              break;
            }
            if (o[n] && s.substr(o[n]) !== r.substr(o[n])) break;
            n !== "week" && (l = n);
          }
          return this.resolveDTLFormat(i[n]).main;
        }
      }, { defined: no, extend: ao, timeUnits: At } = $, Ks = class extends jn {
        getTimeTicks(h, t, e, i) {
          let s = this, r = [], o = {}, { count: n = 1, unitRange: l } = h, [d, m, c, f, x, b] = s.toParts(t), M = (t || 0) % 1e3, k;
          if (i ?? (i = 1), no(t)) {
            if (M = l >= At.second ? 0 : n * Math.floor(M / n), l >= At.second && (b = l >= At.minute ? 0 : n * Math.floor(b / n)), l >= At.minute && (x = l >= At.hour ? 0 : n * Math.floor(x / n)), l >= At.hour && (f = l >= At.day ? 0 : n * Math.floor(f / n)), l >= At.day && (c = l >= At.month ? 1 : Math.max(1, n * Math.floor(c / n))), l >= At.month && (m = l >= At.year ? 0 : n * Math.floor(m / n)), l >= At.year && (d -= d % n), l === At.week) {
              n && (t = s.makeTime(d, m, c, f, x, b, M));
              let C = this.dateTimeFormat({ timeZone: this.timezone, weekday: "narrow" }, t, "es"), O = "DLMXJVS".indexOf(C);
              c += -O + i + (O < i ? -7 : 0);
            }
            t = s.makeTime(d, m, c, f, x, b, M), s.variableTimezone && no(e) && (k = e - t > 4 * At.month || s.getTimezoneOffset(t) !== s.getTimezoneOffset(e));
            let v = t, S = 1;
            for (; v < e; ) r.push(v), l === At.year ? v = s.makeTime(d + S * n, 0) : l === At.month ? v = s.makeTime(d, m + S * n) : k && (l === At.day || l === At.week) ? v = s.makeTime(d, m, c + S * n * (l === At.day ? 1 : 7)) : k && l === At.hour && n > 1 ? v = s.makeTime(d, m, c, f + S * n) : v += l * n, S++;
            r.push(v), l <= At.hour && r.length < 1e4 && r.forEach((C) => {
              C % 18e5 == 0 && s.dateFormat("%H%M%S%L", C) === "000000000" && (o[C] = "day");
            });
          }
          return r.info = ao(h, { higherRanks: o, totalRange: l * n }), r;
        }
      }, { isTouchDevice: Un } = X, { fireEvent: lo, merge: ho } = $, Me = { colors: ["#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1"], symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { weekFrom: "week from", chartTitle: "Chart title", locale: void 0, loading: "Loading...", months: void 0, seriesName: "Series {add index 1}", shortMonths: void 0, weekdays: void 0, numericSymbols: ["k", "M", "G", "T", "P", "E"], pieSliceName: "Slice", resetZoom: "Reset zoom", yAxisTitle: "Values", resetZoomTitle: "Reset zoom level 1:1" }, global: { buttonTheme: { fill: "#f7f7f7", padding: 8, r: 2, stroke: "#cccccc", "stroke-width": 1, style: { color: "#333333", cursor: "pointer", fontSize: "0.8em", fontWeight: "normal" }, states: { hover: { fill: "#e6e6e6" }, select: { fill: "#e6e9ff", style: { color: "#000000", fontWeight: "bold" } }, disabled: { style: { color: "#cccccc" } } } } }, time: { Date: void 0, timezone: "UTC", timezoneOffset: 0, useUTC: void 0 }, chart: { alignThresholds: !1, panning: { enabled: !1, type: "x" }, styledMode: !1, borderRadius: 0, colorCount: 10, allowMutatingData: !0, ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: {}, position: {} }, reflow: !0, type: "line", zooming: { singleTouch: !1, resetButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } } }, width: null, height: null, borderColor: "#334eff", backgroundColor: "#ffffff", plotBorderColor: "#cccccc" }, title: { style: { color: "#333333", fontWeight: "bold" }, text: "Chart title", margin: 15, minScale: 0.67 }, subtitle: { style: { color: "#666666", fontSize: "0.8em" }, text: "" }, caption: { margin: 15, style: { color: "#666666", fontSize: "0.8em" }, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {}, legend: { enabled: !0, align: "center", alignColumns: !0, className: "highcharts-no-tooltip", events: {}, layout: "horizontal", itemMarginBottom: 2, itemMarginTop: 2, labelFormatter: function() {
        return this.name;
      }, borderColor: "#999999", borderRadius: 0, navigation: { style: { fontSize: "0.8em" }, activeColor: "#0022ff", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "0.8em", textDecoration: "none", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#666666", textDecoration: "line-through" }, shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { color: "#333333", fontSize: "0.8em", fontWeight: "bold" } } }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: 0.5, textAlign: "center" } }, tooltip: { enabled: !0, animation: { duration: 300, easing: (h) => Math.sqrt(1 - Math.pow(h - 1, 2)) }, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%[AebHMSL]", second: "%[AebHMS]", minute: "%[AebHM]", hour: "%[AebHM]", day: "%[AebY]", week: "%v %[AebY]", month: "%[BY]", year: "%Y" }, footerFormat: "", headerShape: "callout", hideDelay: 500, padding: 8, position: { x: 0, y: 3 }, shared: !1, snap: Un ? 25 : 10, headerFormat: '<span style="font-size: 0.8em">{ucfirst point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: "#ffffff", borderWidth: void 0, stickOnContact: !1, style: { color: "#333333", cursor: "default", fontSize: "0.8em" }, useHTML: !1 }, credits: { enabled: !0, href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "0.6em" }, text: "Highcharts.com" } }, $s = new Ks(Me.time, Me.lang), qt = { defaultOptions: Me, defaultTime: $s, getOptions: function() {
        return Me;
      }, setOptions: function(h) {
        return lo(X, "setOptions", { options: h }), ho(!0, Me, h), h.time && $s.update(Me.time), h.lang && "locale" in h.lang && $s.update({ locale: h.lang.locale }), h.lang?.chartTitle && (Me.title = { ...Me.title, text: h.lang.chartTitle }), Me;
      } }, { win: Vn } = X, { isNumber: Li, isString: qn, merge: os, pInt: Gt, defined: co } = $, po = (h, t, e) => `color-mix(in srgb,${h},${t} ${100 * e}%)`, ns = (h) => qn(h) && !!h && h !== "none";
      class bt {
        static parse(t) {
          return t ? new bt(t) : bt.None;
        }
        constructor(t) {
          let e, i, s, r;
          this.rgba = [NaN, NaN, NaN, NaN], this.input = t;
          let o = X.Color;
          if (o && o !== bt) return new o(t);
          if (typeof t == "object" && t.stops !== void 0) this.stops = t.stops.map((n) => new bt(n[1]));
          else if (typeof t == "string") for (this.input = t = bt.names[t.toLowerCase()] || t, s = bt.parsers.length; s-- && !i; ) (e = (r = bt.parsers[s]).regex.exec(t)) && (i = r.parse(e));
          i && (this.rgba = i);
        }
        get(t) {
          let e = this.input, i = this.rgba;
          if (this.output) return this.output;
          if (typeof e == "object" && this.stops !== void 0) {
            let s = os(e);
            return s.stops = [].slice.call(s.stops), this.stops.forEach((r, o) => {
              s.stops[o] = [s.stops[o][0], r.get(t)];
            }), s;
          }
          return i && Li(i[0]) ? t !== "rgb" && (t || i[3] !== 1) ? t === "a" ? `${i[3]}` : "rgba(" + i.join(",") + ")" : "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")" : e;
        }
        brighten(t) {
          let e = this.rgba;
          if (this.stops) this.stops.forEach(function(i) {
            i.brighten(t);
          });
          else if (Li(t) && t !== 0) if (Li(e[0])) for (let i = 0; i < 3; i++) e[i] += Gt(255 * t), e[i] < 0 && (e[i] = 0), e[i] > 255 && (e[i] = 255);
          else bt.useColorMix && ns(this.input) && (this.output = po(this.input, t > 0 ? "white" : "black", Math.abs(t)));
          return this;
        }
        setOpacity(t) {
          return this.rgba[3] = t, this;
        }
        tweenTo(t, e) {
          let i = this.rgba, s = t.rgba;
          if (!Li(i[0]) || !Li(s[0])) return bt.useColorMix && ns(this.input) && ns(t.input) && e < 0.99 ? po(this.input, t.input, e) : t.input || "none";
          let r = s[3] !== 1 || i[3] !== 1, o = (l, d) => l + (i[d] - l) * (1 - e), n = s.slice(0, 3).map(o).map(Math.round);
          return r && n.push(o(s[3], 3)), (r ? "rgba(" : "rgb(") + n.join(",") + ")";
        }
      }
      bt.names = { white: "#ffffff", black: "#000000" }, bt.parsers = [{ regex: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?(?:\.\d+)?)\s*\)/, parse: function(h) {
        return [Gt(h[1]), Gt(h[2]), Gt(h[3]), parseFloat(h[4], 10)];
      } }, { regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/, parse: function(h) {
        return [Gt(h[1]), Gt(h[2]), Gt(h[3]), 1];
      } }, { regex: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?$/i, parse: function(h) {
        return [Gt(h[1] + h[1], 16), Gt(h[2] + h[2], 16), Gt(h[3] + h[3], 16), co(h[4]) ? Gt(h[4] + h[4], 16) / 255 : 1];
      } }, { regex: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?$/i, parse: function(h) {
        return [Gt(h[1], 16), Gt(h[2], 16), Gt(h[3], 16), co(h[4]) ? Gt(h[4], 16) / 255 : 1];
      } }], bt.useColorMix = Vn.CSS?.supports("color", "color-mix(in srgb,red,blue 9%)"), bt.None = new bt("");
      let { parse: uo } = bt, { win: go } = X, { isNumber: Zs, objectEach: mo } = $;
      class Yt {
        constructor(t, e, i) {
          this.pos = NaN, this.options = e, this.elem = t, this.prop = i;
        }
        dSetter() {
          let t = this.paths, e = t?.[0], i = t?.[1], s = this.now || 0, r = [];
          if (s !== 1 && e && i) if (e.length === i.length && s < 1) for (let o = 0; o < i.length; o++) {
            let n = e[o], l = i[o], d = [];
            for (let m = 0; m < l.length; m++) {
              let c = n[m], f = l[m];
              Zs(c) && Zs(f) && (l[0] !== "A" || m !== 4 && m !== 5) ? d[m] = c + s * (f - c) : d[m] = f;
            }
            r.push(d);
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
          let s = this, r = s.options, o = function(d) {
            return !o.stopped && s.step(d);
          }, n = go.requestAnimationFrame || function(d) {
            setTimeout(d, 13);
          }, l = function() {
            for (let d = 0; d < Yt.timers.length; d++) Yt.timers[d]() || Yt.timers.splice(d--, 1);
            Yt.timers.length && n(l);
          };
          t !== e || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = t, this.end = e, this.unit = i, this.now = this.start, this.pos = 0, o.elem = this.elem, o.prop = this.prop, o() && Yt.timers.push(o) === 1 && n(l)) : (delete r.curAnim[this.prop], r.complete && Object.keys(r.curAnim).length === 0 && r.complete.call(this.elem));
        }
        step(t) {
          let e, i, s = +/* @__PURE__ */ new Date(), r = this.options, o = this.elem, n = r.complete, l = r.duration, d = r.curAnim;
          return o.attr && !o.element ? e = !1 : t || s >= l + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), d[this.prop] = !0, i = !0, mo(d, function(m) {
            m !== !0 && (i = !1);
          }), i && n && n.call(o), e = !1) : (this.pos = r.easing((s - this.startTime) / l), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0), e;
        }
        initPath(t, e, i) {
          let s = t.startX, r = t.endX, o = i.slice(), n = t.isArea, l = n ? 2 : 1, d = e && i.length > e.length && i.hasStackedCliffs, m, c, f, x, b = e?.slice();
          if (!b || d) return [o, o];
          function M(v, S) {
            for (; v.length < c; ) {
              let C = v[0], O = S[c - v.length];
              if (O && C[0] === "M" && (O[0] === "C" ? v[0] = ["C", C[1], C[2], C[1], C[2], C[1], C[2]] : v[0] = ["L", C[1], C[2]]), v.unshift(C), n) {
                let L = v.pop();
                v.push(v[v.length - 1], L);
              }
            }
          }
          function k(v) {
            for (; v.length < c; ) {
              let S = v[Math.floor(v.length / l) - 1].slice();
              if (S[0] === "C" && (S[1] = S[5], S[2] = S[6]), n) {
                let C = v[Math.floor(v.length / l)].slice();
                v.splice(v.length / 2, 0, S, C);
              } else v.push(S);
            }
          }
          if (s && r && r.length) {
            for (f = 0; f < s.length; f++) if (s[f] === r[0]) {
              m = f;
              break;
            } else if (s[0] === r[r.length - s.length + f]) {
              m = f, x = !0;
              break;
            } else if (s[s.length - 1] === r[r.length - s.length + f]) {
              m = s.length - f;
              break;
            }
            m === void 0 && (b = []);
          }
          return b.length && Zs(m) && (c = o.length + m * l, x ? (M(b, o), k(o)) : (M(o, b), k(b))), [b, o];
        }
        fillSetter() {
          Yt.prototype.strokeSetter.apply(this, arguments);
        }
        strokeSetter() {
          this.elem.attr(this.prop, uo(this.start).tweenTo(uo(this.end), this.pos), void 0, !0);
        }
      }
      Yt.timers = [];
      let { defined: Kn, getStyle: fo, isArray: $n, isNumber: Zn, isObject: _s, merge: xo, objectEach: as, pick: ls } = $;
      function Di(h) {
        return _s(h) ? xo({ duration: 500, defer: 0 }, h) : { duration: 500 * !!h, defer: 0 };
      }
      function hs(h, t) {
        let e = Yt.timers.length;
        for (; e--; ) Yt.timers[e].elem !== h || t && t !== Yt.timers[e].prop || (Yt.timers[e].stopped = !0);
      }
      let It = { animate: function(h, t, e) {
        let i, s = "", r, o, n;
        _s(e) || (n = arguments, e = { duration: n[2], easing: n[3], complete: n[4] }), Zn(e.duration) || (e.duration = 400), e.easing = typeof e.easing == "function" ? e.easing : Math[e.easing] || Math.easeInOutSine, e.curAnim = xo(t), as(t, function(l, d) {
          hs(h, d), o = new Yt(h, e, d), r = void 0, d === "d" && $n(t.d) ? (o.paths = o.initPath(h, h.pathArray, t.d), o.toD = t.d, i = 0, r = 1) : h.attr ? i = h.attr(d) : (i = parseFloat(fo(h, d)) || 0, d !== "opacity" && (s = "px")), r || (r = l), typeof r == "string" && r.match("px") && (r = r.replace(/px/g, "")), o.run(i, r, s);
        });
      }, animObject: Di, getDeferredAnimation: function(h, t, e) {
        let i = Di(t), s = e ? [e] : h.series, r = 0, o = 0;
        return s.forEach((n) => {
          let l = Di(n.options.animation);
          r = _s(t) && Kn(t.defer) ? i.defer : Math.max(r, l.duration + l.defer), o = Math.min(i.duration, l.duration);
        }), h.renderer.forExport && (r = 0), { defer: Math.max(0, r - o), duration: Math.min(r, o) };
      }, setAnimation: function(h, t) {
        t.renderer.globalAnimation = ls(h, t.options.chart.animation, !0);
      }, stop: hs }, { SVG_NS: Js, win: _n } = X, { attr: Jn, createElement: Qn, css: ta, error: yo, isFunction: Qs, isString: tr, objectEach: bo, splat: er } = $, { trustedTypes: ir } = _n, ds = ir && Qs(ir.createPolicy) && ir.createPolicy("highcharts", { createHTML: (h) => h }), ea = ds ? ds.createHTML("") : "";
      class Mt {
        static filterUserAttributes(t) {
          return bo(t, (e, i) => {
            let s = !0;
            Mt.allowedAttributes.indexOf(i) === -1 && (s = !1), ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(i) !== -1 && (s = tr(e) && Mt.allowedReferences.some((r) => e.indexOf(r) === 0)), s || (yo(33, !1, void 0, { "Invalid attribute in config": `${i}` }), delete t[i]), tr(e) && t[i] && (t[i] = e.replace(/</g, "&lt;"));
          }), t;
        }
        static parseStyle(t) {
          return t.split(";").reduce((e, i) => {
            let s = i.split(":").map((o) => o.trim()), r = s.shift();
            return r && s.length && (e[r.replace(/-([a-z])/g, (o) => o[1].toUpperCase())] = s.join(":")), e;
          }, {});
        }
        static setElementHTML(t, e) {
          t.innerHTML = Mt.emptyHTML, e && new Mt(e).addToDOM(t);
        }
        constructor(t) {
          this.nodes = typeof t == "string" ? this.parseMarkup(t) : t;
        }
        addToDOM(t) {
          return (function e(i, s) {
            let r;
            return er(i).forEach(function(o) {
              let n, l = o.tagName, d = o.textContent ? X.doc.createTextNode(o.textContent) : void 0, m = Mt.bypassHTMLFiltering;
              if (l) if (l === "#text") n = d;
              else if (Mt.allowedTags.indexOf(l) !== -1 || m) {
                let c = l === "svg" ? Js : s.namespaceURI || Js, f = X.doc.createElementNS(c, l), x = o.attributes || {};
                bo(o, function(b, M) {
                  M !== "tagName" && M !== "attributes" && M !== "children" && M !== "style" && M !== "textContent" && (x[M] = b);
                }), Jn(f, m ? x : Mt.filterUserAttributes(x)), o.style && ta(f, o.style), d && f.appendChild(d), e(o.children || [], f), n = f;
              } else yo(33, !1, void 0, { "Invalid tagName in config": l });
              n && s.appendChild(n), r = n;
            }), r;
          })(this.nodes, t);
        }
        parseMarkup(t) {
          let e, i = [];
          t = t.trim().replace(/ style=(["'])/g, " data-style=$1");
          try {
            e = new DOMParser().parseFromString(ds ? ds.createHTML(t) : t, "text/html");
          } catch {
          }
          if (!e) {
            let r = Qn("div");
            r.innerHTML = t, e = { body: r };
          }
          let s = (r, o) => {
            let n = r.nodeName.toLowerCase(), l = { tagName: n };
            n === "#text" && (l.textContent = r.textContent || "");
            let d = r.attributes;
            if (d) {
              let m = {};
              [].forEach.call(d, (c) => {
                c.name === "data-style" ? l.style = Mt.parseStyle(c.value) : m[c.name] = c.value;
              }), l.attributes = m;
            }
            if (r.childNodes.length) {
              let m = [];
              [].forEach.call(r.childNodes, (c) => {
                s(c, m);
              }), m.length && (l.children = m);
            }
            o.push(l);
          };
          return [].forEach.call(e.body.childNodes, (r) => s(r, i)), i;
        }
      }
      Mt.allowedAttributes = ["alt", "aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-pressed", "aria-readonly", "aria-roledescription", "aria-selected", "class", "clip-path", "color", "colspan", "cx", "cy", "d", "disabled", "dx", "dy", "fill", "filterUnits", "flood-color", "flood-opacity", "height", "href", "id", "in", "in2", "markerHeight", "markerWidth", "offset", "opacity", "operator", "orient", "padding", "paddingLeft", "paddingRight", "patternUnits", "r", "radius", "refX", "refY", "result", "role", "rowspan", "scope", "slope", "src", "startOffset", "stdDeviation", "stroke-linecap", "stroke-width", "stroke", "style", "summary", "tabindex", "tableValues", "target", "text-align", "text-anchor", "textAnchor", "textLength", "title", "type", "valign", "width", "x", "x1", "x2", "xlink:href", "y", "y1", "y2", "zIndex"], Mt.allowedReferences = ["https://", "http://", "mailto:", "/", "../", "./", "#"], Mt.allowedTags = ["#text", "a", "abbr", "b", "br", "button", "caption", "circle", "clipPath", "code", "dd", "defs", "div", "dl", "dt", "em", "feComponentTransfer", "feComposite", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "filter", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "li", "linearGradient", "marker", "ol", "p", "path", "pattern", "pre", "rect", "small", "span", "stop", "strong", "style", "sub", "sup", "svg", "table", "tbody", "td", "text", "textPath", "th", "thead", "title", "tr", "tspan", "u", "ul"], Mt.emptyHTML = ea, Mt.bypassHTMLFiltering = !1;
      let { defaultOptions: vo, defaultTime: wo } = qt, { pageLang: ia } = X, { extend: sa, getNestedProperty: ko, isArray: ra, isNumber: Mo, isObject: sr, isString: rr, pick: or, ucfirst: Ao } = $, cs = { add: (h, t) => h + t, divide: (h, t) => t !== 0 ? h / t : "", eq: (h, t) => h == t, each: function(h) {
        let t = arguments[arguments.length - 1];
        return !!ra(h) && h.map((e, i) => Ae(t.body, sa(sr(e) ? e : { "@this": e }, { "@index": i, "@first": i === 0, "@last": i === h.length - 1 }))).join("");
      }, ge: (h, t) => h >= t, gt: (h, t) => h > t, if: (h) => !!h, le: (h, t) => h <= t, lt: (h, t) => h < t, multiply: (h, t) => h * t, ne: (h, t) => h != t, subtract: (h, t) => h - t, ucfirst: Ao, unless: (h) => !h }, nr = {}, ar = (h) => /^["'].+["']$/.test(h);
      function Ae(h = "", t, e) {
        let i = /\{([a-zA-Z\u00C0-\u017F\d:\.,;\-\/<>\[\]%_@+"'’= #\(\)]+)\}/g, s = /\(([a-zA-Z\u00C0-\u017F\d:\.,;\-\/<>\[\]%_@+"'= ]+)\)/g, r = [], o = /f$/, n = /\.(\d)/, l = e?.options?.lang || vo.lang, d = e?.time || wo, m = e?.numberFormatter || lr.bind(e), c = (k = "") => {
          let v;
          return k === "true" || k !== "false" && ((v = Number(k)).toString() === k ? v : ar(k) ? k.slice(1, -1) : ko(k, t));
        }, f, x, b = 0, M;
        for (; (f = i.exec(h)) !== null; ) {
          let k = f, v = s.exec(f[1]);
          v && (f = v, M = !0), x?.isBlock || (x = { ctx: t, expression: f[1], find: f[0], isBlock: f[1].charAt(0) === "#", start: f.index, startInner: f.index + f[0].length, length: f[0].length });
          let S = (x.isBlock ? k : f)[1].split(" ")[0].replace("#", "");
          cs[S] && (x.isBlock && S === x.fn && b++, x.fn || (x.fn = S));
          let C = f[1] === "else";
          if (x.isBlock && x.fn && (f[1] === `/${x.fn}` || C)) if (b) !C && b--;
          else {
            let O = x.startInner, L = h.substr(O, f.index - O);
            x.body === void 0 ? (x.body = L, x.startInner = f.index + f[0].length) : x.elseBody = L, x.find += L + f[0], C || (r.push(x), x = void 0);
          }
          else x.isBlock || r.push(x);
          if (v && !x?.isBlock) break;
        }
        return r.forEach((k) => {
          let v, S, { body: C, elseBody: O, expression: L, fn: D } = k;
          if (D) {
            let N = [k], I = [], W = L.length, Y = 0, H;
            for (S = 0; S <= W; S++) {
              let V = L.charAt(S);
              H || V !== '"' && V !== "'" ? H === V && (H = "") : H = V, H || V !== " " && S !== W || (I.push(L.substr(Y, S - Y)), Y = S + 1);
            }
            for (S = cs[D].length; S--; ) N.unshift(c(I[S + 1]));
            v = cs[D].apply(t, N), k.isBlock && typeof v == "boolean" && (v = Ae(v ? C : O, t, e));
          } else {
            let N = ar(L) ? [L] : L.split(":"), I = (v = c(N.shift() || "")) % 1 != 0;
            if (typeof v == "number" && (N.length || I)) {
              let W = N.join(":");
              if (o.test(W) || I) {
                let Y = parseInt((W.match(n) || ["", "-1"])[1], 10);
                v !== null && (v = m(v, Y, l.decimalPoint, W.indexOf(",") > -1 ? l.thousandsSep : ""));
              } else v = d.dateFormat(W, v);
            }
            s.lastIndex = 0, s.test(k.find) && rr(v) && (v = `"${v}"`);
          }
          h = h.replace(k.find, or(v, ""));
        }), M ? Ae(h, t, e) : h;
      }
      function lr(h, t, e, i) {
        t *= 1;
        let s, r, [o, n] = (h = +h || 0).toString().split("e").map(Number), l = this?.options?.lang || vo.lang, d = (h.toString().split(".")[1] || "").split("e")[0].length, m = t, c = {};
        e ?? (e = l.decimalPoint), i ?? (i = l.thousandsSep), t === -1 ? t = Math.min(d, 20) : Mo(t) ? t && n < 0 && ((r = t + n) >= 0 ? (o = +o.toExponential(r).split("e")[0], t = r) : (o = Math.floor(o), h = t < 20 ? +(o * Math.pow(10, n)).toFixed(t) : 0, n = 0)) : t = 2, n && (t ?? (t = 2), h = o), Mo(t) && t >= 0 && (c.minimumFractionDigits = t, c.maximumFractionDigits = t), i === "" && (c.useGrouping = !1);
        let f = i || e, x = f ? "en" : this?.locale || l.locale || ia, b = JSON.stringify(c) + x;
        return s = (nr[b] ?? (nr[b] = new Intl.NumberFormat(x, c))).format(h), f && (s = s.replace(/([,\.])/g, "_$1").replace(/_\,/g, i ?? ",").replace("_.", e ?? ".")), (t || +s != 0) && (!(n < 0) || m) || (s = "0"), n && +s != 0 && (s += "e" + (n < 0 ? "" : "+") + n), s;
      }
      let jt = { dateFormat: function(h, t, e) {
        return wo.dateFormat(h, t, e);
      }, format: Ae, helpers: cs, numberFormat: lr };
      (function(h) {
        let t;
        h.rendererTypes = {}, h.getRendererType = function(e = t) {
          return h.rendererTypes[e] || h.rendererTypes[t];
        }, h.registerRendererType = function(e, i, s) {
          h.rendererTypes[e] = i, (!t || s) && (t = e, X.Renderer = i);
        };
      })(Jt || (Jt = {}));
      let Ii = Jt, { clamp: oa, pick: na, pushUnique: aa, stableSort: hr } = $;
      (de || (de = {})).distribute = function h(t, e, i) {
        let s = t, r = s.reducedLen || e, o = (C, O) => C.target - O.target, n = [], l = t.length, d = [], m = n.push, c, f, x, b = !0, M, k, v = 0, S;
        for (c = l; c--; ) v += t[c].size;
        if (v > r) {
          for (hr(t, (C, O) => (O.rank || 0) - (C.rank || 0)), x = (S = t[0].rank === t[t.length - 1].rank) ? l / 2 : -1, f = S ? x : l - 1; x && v > r; ) M = t[c = Math.floor(f)], aa(d, c) && (v -= M.size), f += x, S && f >= t.length && (x /= 2, f = x);
          d.sort((C, O) => O - C).forEach((C) => m.apply(n, t.splice(C, 1)));
        }
        for (hr(t, o), t = t.map((C) => ({ size: C.size, targets: [C.target], align: na(C.align, 0.5) })); b; ) {
          for (c = t.length; c--; ) M = t[c], k = (Math.min.apply(0, M.targets) + Math.max.apply(0, M.targets)) / 2, M.pos = oa(k - M.size * M.align, 0, e - M.size);
          for (c = t.length, b = !1; c--; ) c > 0 && t[c - 1].pos + t[c - 1].size > t[c].pos && (t[c - 1].size += t[c].size, t[c - 1].targets = t[c - 1].targets.concat(t[c].targets), t[c - 1].align = 0.5, t[c - 1].pos + t[c - 1].size > e && (t[c - 1].pos = e - t[c - 1].size), t.splice(c, 1), b = !0);
        }
        return m.apply(s, n), c = 0, t.some((C) => {
          let O = 0;
          return (C.targets || []).some(() => (s[c].pos = C.pos + O, i !== void 0 && Math.abs(s[c].pos - s[c].target) > i ? (s.slice(0, c + 1).forEach((L) => delete L.pos), s.reducedLen = (s.reducedLen || e) - 0.1 * e, s.reducedLen > 0.1 * e && h(s, e, i), !0) : (O += s[c].size, c++, !1)));
        }), hr(s, o), s;
      };
      let ps = de, { animate: la, animObject: ha, stop: To } = It, { deg2rad: So, doc: $e, svg: Co, SVG_NS: ri, win: Eo, isFirefox: Po } = X, { addEvent: da, attr: dr, createElement: cr, crisp: us, css: Oo, defined: pe, erase: Lo, extend: Bi, fireEvent: pr, getAlignFactor: ur, isArray: ca, isFunction: pa, isNumber: Nl, isObject: ua, isString: Do, merge: gr, objectEach: oi, pick: Te, pInt: Ni, pushUnique: ga, replaceNested: ma, syncTimeout: fa, uniqueKey: Io } = $;
      class Bt {
        _defaultGetter(t) {
          let e = Te(this[t + "Value"], this[t], this.element ? this.element.getAttribute(t) : null, 0);
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
          let r = this.renderer, o = r.alignedObjects, n = !!t;
          t ? (this.alignOptions = t, this.alignByTranslate = e, this.alignTo = i) : (t = this.alignOptions || {}, e = this.alignByTranslate, i = this.alignTo);
          let l = !i || Do(i) ? i || "renderer" : void 0;
          l && (n && ga(o, this), i = void 0);
          let d = Te(i, r[l], r), m = (d.x || 0) + (t.x || 0) + ((d.width || 0) - (t.width || 0)) * ur(t.align), c = (d.y || 0) + (t.y || 0) + ((d.height || 0) - (t.height || 0)) * ur(t.verticalAlign), f = { "text-align": t?.align };
          return f[e ? "translateX" : "x"] = Math.round(m), f[e ? "translateY" : "y"] = Math.round(c), s && (this[this.placed ? "animate" : "attr"](f), this.placed = !0), this.alignAttr = f, this;
        }
        alignSetter(t) {
          let e = { left: "start", center: "middle", right: "end" };
          e[t] && (this.alignValue = t, this.element.setAttribute("text-anchor", e[t]));
        }
        animate(t, e, i) {
          let s = ha(Te(e, this.renderer.globalAnimation, !0)), r = s.defer;
          return $e.hidden && (s.duration = 0), s.duration !== 0 ? (i && (s.complete = i), fa(() => {
            this.element && la(this, t, s);
          }, r)) : (this.attr(t, void 0, i || s.complete), oi(t, function(o, n) {
            s.step && s.step.call(this, o, { prop: n, pos: 1, elem: this });
          }, this)), this;
        }
        applyTextOutline(t) {
          let e = this.element;
          t.indexOf("contrast") !== -1 && (t = t.replace(/contrast/g, this.renderer.getContrast(e.style.fill)));
          let i = t.indexOf(" "), s = t.substring(i + 1), r = t.substring(0, i);
          if (r && r !== "none" && X.svg) {
            this.fakeTS = !0, r = r.replace(/(^[\d\.]+)(.*?)$/g, function(m, c, f) {
              return 2 * Number(c) + f;
            }), this.removeTextOutline();
            let o = $e.createElementNS(ri, "tspan");
            dr(o, { class: "highcharts-text-outline", fill: s, stroke: s, "stroke-width": r, "stroke-linejoin": "round" });
            let n = e.querySelector("textPath") || e;
            [].forEach.call(n.childNodes, (m) => {
              let c = m.cloneNode(!0);
              c.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((f) => c.removeAttribute(f)), o.appendChild(c);
            });
            let l = 0;
            [].forEach.call(n.querySelectorAll("text tspan"), (m) => {
              l += Number(m.getAttribute("dy"));
            });
            let d = $e.createElementNS(ri, "tspan");
            d.textContent = "​", dr(d, { x: Number(e.getAttribute("x")), dy: -l }), o.appendChild(d), n.insertBefore(o, n.firstChild);
          }
        }
        attr(t, e, i, s) {
          let { element: r } = this, o = Bt.symbolCustomAttribs, n, l, d = this, m;
          return typeof t == "string" && e !== void 0 && (n = t, (t = {})[n] = e), typeof t == "string" ? d = (this[t + "Getter"] || this._defaultGetter).call(this, t, r) : (oi(t, function(c, f) {
            m = !1, s || To(this, f), this.symbolName && o.indexOf(f) !== -1 && (l || (this.symbolAttr(t), l = !0), m = !0), this.rotation && (f === "x" || f === "y") && (this.doTransform = !0), m || (this[f + "Setter"] || this._defaultSetter).call(this, c, f, r);
          }, this), this.afterSetters()), i && i.call(this), d;
        }
        clip(t) {
          if (t && !t.clipPath) {
            let e = Io() + "-", i = this.renderer.createElement("clipPath").attr({ id: e }).add(this.renderer.defs);
            Bi(t, { clipPath: i, id: e, count: 0 }), t.add(i);
          }
          return this.attr("clip-path", t ? `url(${this.renderer.url}#${t.id})` : "none");
        }
        crisp(t, e) {
          e = Math.round(e || t.strokeWidth || 0);
          let i = t.x || this.x || 0, s = t.y || this.y || 0, r = (t.width || this.width || 0) + i, o = (t.height || this.height || 0) + s, n = us(i, e), l = us(s, e);
          return Bi(t, { x: n, y: l, width: us(r, e) - n, height: us(o, e) - l }), pe(t.strokeWidth) && (t.strokeWidth = e), t;
        }
        complexColor(t, e, i) {
          let s = this.renderer, r, o, n, l, d, m, c, f, x, b, M = [], k;
          pr(this.renderer, "complexColor", { args: arguments }, function() {
            if (t.radialGradient ? o = "radialGradient" : t.linearGradient && (o = "linearGradient"), o) {
              if (n = t[o], d = s.gradients, m = t.stops, x = i.radialReference, ca(n) && (t[o] = n = { x1: n[0], y1: n[1], x2: n[2], y2: n[3], gradientUnits: "userSpaceOnUse" }), o === "radialGradient" && x && !pe(n.gradientUnits) && (l = n, n = gr(n, s.getRadialAttr(x, l), { gradientUnits: "userSpaceOnUse" })), oi(n, function(v, S) {
                S !== "id" && M.push(S, v);
              }), oi(m, function(v) {
                M.push(v);
              }), d[M = M.join(",")]) b = d[M].attr("id");
              else {
                n.id = b = Io();
                let v = d[M] = s.createElement(o).attr(n).add(s.defs);
                v.radAttr = l, v.stops = [], m.forEach(function(S) {
                  S[1].indexOf("rgba") === 0 ? (c = (r = bt.parse(S[1])).get("rgb"), f = r.get("a")) : (c = S[1], f = 1);
                  let C = s.createElement("stop").attr({ offset: S[0], "stop-color": c, "stop-opacity": f }).add(v);
                  v.stops.push(C);
                });
              }
              k = "url(" + s.url + "#" + b + ")", i.setAttribute(e, k), i.gradient = M, t.toString = function() {
                return k;
              };
            }
          });
        }
        css(t) {
          let e = this.styles, i = {}, s = this.element, r, o = !e;
          if (e && oi(t, function(n, l) {
            e && e[l] !== n && (i[l] = n, o = !0);
          }), o) {
            e && (t = Bi(e, i)), t.width === null || t.width === "auto" ? delete this.textWidth : s.nodeName.toLowerCase() === "text" && t.width && (r = this.textWidth = Ni(t.width)), Bi(this.styles, t), r && !Co && this.renderer.forExport && delete t.width;
            let n = Po && t.fontSize || null;
            n && (Nl(n) || /^\d+$/.test(n)) && (t.fontSize += "px");
            let l = gr(t);
            s.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "whiteSpace", "width"].forEach((d) => l && delete l[d]), l.color && (l.fill = l.color, delete l.color)), Oo(s, l);
          }
          return this.added && (this.element.nodeName === "text" && this.renderer.buildText(this), t.textOutline && this.applyTextOutline(t.textOutline)), this;
        }
        dashstyleSetter(t) {
          let e, i = this["stroke-width"];
          if (i === "inherit" && (i = 1), t) {
            let s = (t = t.toLowerCase()).replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
            for (e = s.length; e--; ) s[e] = "" + Ni(s[e]) * Te(i, NaN);
            t = s.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t);
          }
        }
        destroy() {
          let t = this, e = t.element || {}, i = t.renderer, s = e.ownerSVGElement, r = e.nodeName === "SPAN" && t.parentGroup || void 0, o, n;
          if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, To(t), t.clipPath && s) {
            let l = t.clipPath;
            [].forEach.call(s.querySelectorAll("[clip-path],[CLIP-PATH]"), function(d) {
              d.getAttribute("clip-path").indexOf(l.element.id) > -1 && d.removeAttribute("clip-path");
            }), t.clipPath = l.destroy();
          }
          if (t.stops) {
            for (n = 0; n < t.stops.length; n++) t.stops[n].destroy();
            t.stops.length = 0, t.stops = void 0;
          }
          for (t.safeRemoveChild(e); r?.div && r.div.childNodes.length === 0; ) o = r.parentGroup, t.safeRemoveChild(r.div), delete r.div, r = o;
          t.alignOptions && Lo(i.alignedObjects, t), oi(t, (l, d) => {
            (t[d]?.parentGroup === t || ["connector", "foreignObject"].indexOf(d) !== -1) && t[d]?.destroy?.(), delete t[d];
          });
        }
        dSetter(t, e, i) {
          ca(t) && (typeof t[0] == "string" && (t = this.renderer.pathToSegments(t)), this.pathArray = t, t = t.reduce((s, r, o) => r?.join ? (o ? s + " " : "") + r.join(" ") : (r || "").toString(), "")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t);
        }
        fillSetter(t, e, i) {
          typeof t == "string" ? i.setAttribute(e, t) : t && this.complexColor(t, e, i);
        }
        hrefSetter(t, e, i) {
          i.setAttributeNS("http://www.w3.org/1999/xlink", e, t);
        }
        getBBox(t, e) {
          let i, s, r, o, { alignValue: n, element: l, renderer: d, styles: m, textStr: c } = this, { cache: f, cacheKeys: x } = d, b = l.namespaceURI === this.SVG_NS, M = Te(e, this.rotation, 0), k = d.styledMode ? l && Bt.prototype.getStyle.call(l, "font-size") : m.fontSize;
          if (pe(c) && ((o = c.toString()).indexOf("<") === -1 && (o = o.replace(/\d/g, "0")), o += ["", d.rootFontSize, k, M, this.textWidth, n, m.lineClamp, m.textOverflow, m.fontWeight].join(",")), o && !t && (i = f[o]), !i || i.polygon) {
            if (b || d.forExport) {
              try {
                r = this.fakeTS && function(S) {
                  let C = l.querySelector(".highcharts-text-outline");
                  C && Oo(C, { display: S });
                }, pa(r) && r("none"), i = l.getBBox ? Bi({}, l.getBBox()) : { width: l.offsetWidth, height: l.offsetHeight, x: 0, y: 0 }, pa(r) && r("");
              } catch {
              }
              (!i || i.width < 0) && (i = { x: 0, y: 0, width: 0, height: 0 });
            } else i = this.htmlGetBBox();
            s = i.height, b && (i.height = s = { "11px,17": 14, "13px,20": 16 }[`${k || ""},${Math.round(s)}`] || s), M && (i = this.getRotatedBox(i, M));
            let v = { bBox: i };
            pr(this, "afterGetBBox", v), i = v.bBox;
          }
          if (o && (c === "" || i.height > 0)) {
            for (; x.length > 250; ) delete f[x.shift()];
            f[o] || x.push(o), f[o] = i;
          }
          return i;
        }
        getRotatedBox(t, e) {
          let { x: i, y: s, width: r, height: o } = t, { alignValue: n, translateY: l, rotationOriginX: d = 0, rotationOriginY: m = 0 } = this, c = ur(n), f = Number(this.element.getAttribute("y") || 0) - (l ? 0 : s), x = e * So, b = (e - 90) * So, M = Math.cos(x), k = Math.sin(x), v = r * M, S = r * k, C = Math.cos(b), O = Math.sin(b), [[L, D], [N, I]] = [d, m].map((st) => [st - st * M, st * k]), W = i + c * (r - v) + L + I + f * C, Y = W + v, H = Y - o * C, V = H - v, Z = s + f - c * S - D + N + f * O, J = Z + S, j = J - o * O, q = j - S, _ = Math.min(W, Y, H, V), vt = Math.min(Z, J, j, q), ht = Math.max(W, Y, H, V) - _, $t = Math.max(Z, J, j, q) - vt;
          return { x: _, y: vt, width: ht, height: $t, polygon: [[W, Z], [Y, J], [H, j], [V, q]] };
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
          this.onEvents = {}, this.opacity = 1, this.SVG_NS = ri, this.element = e === "span" || e === "body" ? cr(e) : $e.createElementNS(this.SVG_NS, e), this.renderer = t, this.styles = {}, pr(this, "afterInit");
        }
        on(t, e) {
          let { onEvents: i } = this;
          return i[t] && i[t](), i[t] = da(this.element, t, e), this;
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
          let { renderer: e } = this, i = gr(this.parentGroup?.rotation === 90 ? { offsetX: -1, offsetY: -1 } : {}, ua(t) ? t : {}), s = e.shadowDefinition(i);
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
          return /px$/.test(t) ? e = Ni(t) : t !== "" && (dr(i = $e.createElementNS(ri, "rect"), { width: t, "stroke-width": 0 }), this.element.parentNode.appendChild(i), e = i.getBBox().width, i.parentNode.removeChild(i)), e;
        }
        symbolAttr(t) {
          let e = this;
          Bt.symbolCustomAttribs.forEach(function(i) {
            e[i] = Te(t[i], e[i]);
          }), e.attr({ d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e) });
        }
        textSetter(t) {
          t !== this.textStr && (delete this.textPxLength, this.textStr = t, this.added && this.renderer.buildText(this), this.reAlign());
        }
        titleSetter(t) {
          let e = this.element, i = e.getElementsByTagName("title")[0] || $e.createElementNS(this.SVG_NS, "title");
          e.insertBefore ? e.insertBefore(i, e.firstChild) : e.appendChild(i), i.textContent = ma(Te(t, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        }
        toFront() {
          let t = this.element;
          return t.parentNode.appendChild(t), this;
        }
        translate(t, e) {
          return this.attr({ translateX: t, translateY: e });
        }
        updateTransform(t = "transform") {
          let { element: e, foreignObject: i, matrix: s, padding: r, rotation: o = 0, rotationOriginX: n, rotationOriginY: l, scaleX: d, scaleY: m, text: c, translateX: f = 0, translateY: x = 0 } = this, b = ["translate(" + f + "," + x + ")"];
          pe(s) && b.push("matrix(" + s.join(",") + ")"), o && (b.push("rotate(" + o + " " + (n ?? e.getAttribute("x") ?? this.x ?? 0) + " " + (l ?? e.getAttribute("y") ?? this.y ?? 0) + ")"), c?.element.tagName !== "SPAN" || c?.foreignObject || c.attr({ rotation: o, rotationOriginX: (n || 0) - r, rotationOriginY: (l || 0) - r })), (pe(d) || pe(m)) && b.push("scale(" + Te(d, 1) + " " + Te(m, 1) + ")"), b.length && !(c || this).textPath && (i?.element || e).setAttribute(t, b.join(" "));
        }
        visibilitySetter(t, e, i) {
          t === "inherit" ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t;
        }
        xGetter(t) {
          return this.element.nodeName === "circle" && (t === "x" ? t = "cx" : t === "y" && (t = "cy")), this._defaultGetter(t);
        }
        zIndexSetter(t, e) {
          let i = this.renderer, s = this.parentGroup, r = (s || i).element || i.box, o = this.element, n = r === i.box, l, d, m, c = !1, f, x = this.added, b;
          if (pe(t) ? (o.setAttribute("data-z-index", t), t *= 1, this[e] === t && (x = !1)) : pe(this[e]) && o.removeAttribute("data-z-index"), this[e] = t, x) {
            for ((t = this.zIndex) && s && (s.handleZ = !0), b = (l = r.childNodes).length - 1; b >= 0 && !c; b--) f = !pe(m = (d = l[b]).getAttribute("data-z-index")), d !== o && (t < 0 && f && !n && !b ? (r.insertBefore(o, l[b]), c = !0) : (Ni(m) <= t || f && (!pe(t) || t >= 0)) && (r.insertBefore(o, l[b + 1]), c = !0));
            c || (r.insertBefore(o, l[3 * !!n]), c = !0);
          }
          return c;
        }
      }
      Bt.symbolCustomAttribs = ["anchorX", "anchorY", "clockwise", "end", "height", "innerR", "r", "start", "width", "x", "y"], Bt.prototype.strokeSetter = Bt.prototype.fillSetter, Bt.prototype.yGetter = Bt.prototype.xGetter, Bt.prototype.matrixSetter = Bt.prototype.rotationOriginXSetter = Bt.prototype.rotationOriginYSetter = Bt.prototype.rotationSetter = Bt.prototype.scaleXSetter = Bt.prototype.scaleYSetter = Bt.prototype.translateXSetter = Bt.prototype.translateYSetter = Bt.prototype.verticalAlignSetter = function(h, t) {
        this[t] = h, this.doTransform = !0;
      };
      let ae = Bt, { defined: Bo, extend: xa, getAlignFactor: No, isNumber: Ri, merge: gs, pick: zi, removeEvent: Fe } = $;
      class He extends ae {
        constructor(t, e, i, s, r, o, n, l, d, m) {
          let c;
          super(t, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.doUpdate = !1, this.textStr = e, this.x = i, this.y = s, this.anchorX = o, this.anchorY = n, this.baseline = d, this.className = m, this.addClass(m === "button" ? "highcharts-no-tooltip" : "highcharts-label"), m && this.addClass("highcharts-" + m), this.text = t.text(void 0, 0, 0, l).attr({ zIndex: 1 }), typeof r == "string" && ((c = /^url\((.*?)\)$/.test(r)) || this.renderer.symbols[r]) && (this.symbolKey = r), this.bBox = He.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t.styledMode || c, this.deferredAttr = {}, this.alignFactor = 0;
        }
        alignSetter(t) {
          let e = No(t);
          this.textAlign = t, e !== this.alignFactor && (this.alignFactor = e, this.bBox && Ri(this.xSetting) && this.attr({ x: this.xSetting }));
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
            t = gs(t), He.textProps.forEach((i) => {
              t[i] !== void 0 && (e[i] = t[i], delete t[i]);
            }), this.text.css(e), "fontSize" in e || "fontWeight" in e ? this.updateTextPadding() : ("width" in e || "textOverflow" in e) && this.updateBoxSize();
          }
          return ae.prototype.css.call(this, t);
        }
        destroy() {
          Fe(this.element, "mouseenter"), Fe(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), ae.prototype.destroy.call(this);
        }
        fillSetter(t, e) {
          t && (this.needsBox = !0), this.fill = t, this.boxAttr(e, t);
        }
        getBBox(t, e) {
          this.textStr && this.bBox.width === 0 && this.bBox.height === 0 && this.updateBoxSize();
          let { padding: i, height: s = 0, translateX: r = 0, translateY: o = 0, width: n = 0 } = this, l = zi(this.paddingLeft, i), d = e ?? (this.rotation || 0), m = { width: n, height: s, x: r + this.bBox.x - l, y: o + this.bBox.y - i + this.baselineOffset };
          return d && (m = this.getRotatedBox(m, d)), m;
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
          this.text.add(this), this.attr({ text: zi(this.textStr, ""), x: this.x || 0, y: this.y || 0 }), this.box && Bo(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
        }
        paddingSetter(t, e) {
          Ri(t) ? t !== this[e] && (this[e] = t, this.updateTextPadding()) : this[e] = void 0;
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
          let t, e = this.text, i = {}, s = this.padding, r = this.bBox = (!Ri(this.widthSetting) || !Ri(this.heightSetting) || this.textAlign) && Bo(e.textStr) ? e.getBBox(void 0, 0) : He.emptyBBox;
          this.width = this.getPaddedWidth(), this.height = (this.heightSetting || r.height || 0) + 2 * s;
          let o = this.renderer.fontMetrics(e);
          if (this.baselineOffset = s + Math.min((this.text.firstLineMetrics || o).b, r.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - o.h) / 2), this.needsBox && !e.textPath) {
            if (!this.box) {
              let n = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
              n.addClass((this.className === "button" ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), n.add(this);
            }
            i.x = t = this.getCrispAdjust(), i.y = (this.baseline ? -this.baselineOffset : 0) + t, i.width = Math.round(this.width), i.height = Math.round(this.height), this.box.attr(xa(i, this.deferredAttr)), this.deferredAttr = {};
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
          this.widthSetting = Ri(t) ? t : void 0, this.doUpdate = !0;
        }
        getPaddedWidth() {
          let t = this.padding, e = zi(this.paddingLeft, t), i = zi(this.paddingRight, t);
          return (this.widthSetting || this.bBox.width || 0) + e + i;
        }
        xSetter(t) {
          this.x = t, this.alignFactor && (t -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.anchorX && (this["forceAnimate:anchorX"] = !0), this.xSetting = Math.round(t), this.attr("translateX", this.xSetting);
        }
        ySetter(t) {
          this.anchorY && (this["forceAnimate:anchorY"] = !0), this.ySetting = this.y = Math.round(t), this.attr("translateY", this.ySetting);
        }
      }
      He.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }, He.textProps = ["color", "direction", "fontFamily", "fontSize", "fontStyle", "fontWeight", "lineClamp", "lineHeight", "textAlign", "textDecoration", "textOutline", "textOverflow", "whiteSpace", "width"];
      let { defined: Ro, isNumber: ya, pick: Ze } = $;
      function mr(h, t, e, i, s) {
        let r = [];
        if (s) {
          let o = s.start || 0, n = s.end || 0, l = Ze(s.r, e), d = Ze(s.r, i || e), m = 2e-4 / (s.borderRadius ? 1 : Math.max(l, 1)), c = Math.abs(n - o - 2 * Math.PI) < m;
          c && (o = Math.PI / 2, n = 2.5 * Math.PI - m);
          let f = s.innerR, x = Ze(s.open, c), b = Math.cos(o), M = Math.sin(o), k = Math.cos(n), v = Math.sin(n), S = Ze(s.longArc, n - o - Math.PI < m ? 0 : 1), C = ["A", l, d, 0, S, Ze(s.clockwise, 1), h + l * k, t + d * v];
          C.params = { start: o, end: n, cx: h, cy: t }, r.push(["M", h + l * b, t + d * M], C), Ro(f) && ((C = ["A", f, f, 0, S, Ro(s.clockwise) ? 1 - s.clockwise : 0, h + f * b, t + f * M]).params = { start: n, end: o, cx: h, cy: t }, r.push(x ? ["M", h + f * k, t + f * v] : ["L", h + f * k, t + f * v], C)), x || r.push(["Z"]);
        }
        return r;
      }
      function zo(h, t, e, i, s) {
        return s?.r ? fr(h, t, e, i, s) : [["M", h, t], ["L", h + e, t], ["L", h + e, t + i], ["L", h, t + i], ["Z"]];
      }
      function fr(h, t, e, i, s) {
        let r = s?.r || 0;
        return [["M", h + r, t], ["L", h + e - r, t], ["A", r, r, 0, 0, 1, h + e, t + r], ["L", h + e, t + i - r], ["A", r, r, 0, 0, 1, h + e - r, t + i], ["L", h + r, t + i], ["A", r, r, 0, 0, 1, h, t + i - r], ["L", h, t + r], ["A", r, r, 0, 0, 1, h + r, t], ["Z"]];
      }
      let We = { arc: mr, callout: function(h, t, e, i, s) {
        let r = Math.min(s?.r || 0, e, i), o = r + 6, n = s?.anchorX, l = s?.anchorY || 0, d = fr(h, t, e, i, { r });
        if (!ya(n) || n < e && n > 0 && l < i && l > 0) return d;
        if (h + n > e - o) if (l > t + o && l < t + i - o) d.splice(3, 1, ["L", h + e, l - 6], ["L", h + e + 6, l], ["L", h + e, l + 6], ["L", h + e, t + i - r]);
        else if (n < e) {
          let m = l < t + o, c = m ? t : t + i;
          d.splice(m ? 2 : 5, 0, ["L", n, l], ["L", h + e - r, c]);
        } else d.splice(3, 1, ["L", h + e, i / 2], ["L", n, l], ["L", h + e, i / 2], ["L", h + e, t + i - r]);
        else if (h + n < o) if (l > t + o && l < t + i - o) d.splice(7, 1, ["L", h, l + 6], ["L", h - 6, l], ["L", h, l - 6], ["L", h, t + r]);
        else if (n > 0) {
          let m = l < t + o, c = m ? t : t + i;
          d.splice(m ? 1 : 6, 0, ["L", n, l], ["L", h + r, c]);
        } else d.splice(7, 1, ["L", h, i / 2], ["L", n, l], ["L", h, i / 2], ["L", h, t + r]);
        else l > i && n < e - o ? d.splice(5, 1, ["L", n + 6, t + i], ["L", n, t + i + 6], ["L", n - 6, t + i], ["L", h + r, t + i]) : l < 0 && n > o && d.splice(1, 1, ["L", n - 6, t], ["L", n, t - 6], ["L", n + 6, t], ["L", e - r, t]);
        return d;
      }, circle: function(h, t, e, i) {
        return mr(h + e / 2, t + i / 2, e / 2, i / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: !1 });
      }, diamond: function(h, t, e, i) {
        return [["M", h + e / 2, t], ["L", h + e, t + i / 2], ["L", h + e / 2, t + i], ["L", h, t + i / 2], ["Z"]];
      }, rect: zo, roundedRect: fr, square: zo, triangle: function(h, t, e, i) {
        return [["M", h + e / 2, t], ["L", h + e, t + i], ["L", h, t + i], ["Z"]];
      }, "triangle-down": function(h, t, e, i) {
        return [["M", h, t], ["L", h + e, t], ["L", h + e / 2, t + i], ["Z"]];
      } }, { doc: ni, SVG_NS: Fo, win: Ho } = X, { attr: xr, extend: Fi, fireEvent: Wo, isString: Hi, objectEach: ba, pick: va } = $, Xe = (h, t) => h.substring(0, t) + "…", wa = class {
        constructor(h) {
          let t = h.styles;
          this.renderer = h.renderer, this.svgElement = h, this.width = h.textWidth, this.textLineHeight = t?.lineHeight, this.textOutline = t?.textOutline, this.ellipsis = t?.textOverflow === "ellipsis", this.lineClamp = t?.lineClamp, this.noWrap = t?.whiteSpace === "nowrap";
        }
        buildSVG() {
          let h = this.svgElement, t = h.element, e = h.renderer, i = va(h.textStr, "").toString(), s = i.indexOf("<") !== -1, r = t.childNodes, o = !h.added && e.box, n = [i, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, h.getStyle("font-size"), h.styles.lineClamp, this.width].join(",");
          if (n !== h.textCache) {
            h.textCache = n, delete h.actualWidth;
            for (let l = r.length; l--; ) t.removeChild(r[l]);
            if (s || this.ellipsis || this.width || h.textPath || i.indexOf(" ") !== -1 && (!this.noWrap || /<br.*?>/g.test(i))) {
              if (i !== "") {
                o && o.appendChild(t);
                let l = new Mt(i);
                this.modifyTree(l.nodes), l.addToDOM(t), this.modifyDOM(), this.ellipsis && (t.textContent || "").indexOf("…") !== -1 && h.attr("title", this.unescapeEntities(h.textStr || "", ["&lt;", "&gt;"])), o && o.removeChild(t);
              }
            } else t.appendChild(ni.createTextNode(this.unescapeEntities(i)));
            Hi(this.textOutline) && h.applyTextOutline && h.applyTextOutline(this.textOutline);
          }
        }
        modifyDOM() {
          let h, t = this.svgElement, e = xr(t.element, "x");
          for (t.firstLineMetrics = void 0; (h = t.element.firstChild) && /^[\s\u200B]*$/.test(h.textContent || " "); ) t.element.removeChild(h);
          [].forEach.call(t.element.querySelectorAll("tspan.highcharts-br"), (o, n) => {
            o.nextSibling && o.previousSibling && (n === 0 && o.previousSibling.nodeType === 1 && (t.firstLineMetrics = t.renderer.fontMetrics(o.previousSibling)), xr(o, { dy: this.getLineHeight(o.nextSibling), x: e }));
          });
          let i = this.width || 0;
          if (!i) return;
          let s = (o, n) => {
            let l = o.textContent || "", d = l.replace(/([^\^])-/g, "$1- ").split(" "), m = !this.noWrap && (d.length > 1 || t.element.childNodes.length > 1), c = this.getLineHeight(n), f = Math.max(0, i - 0.8 * c), x = 0, b = t.actualWidth;
            if (m) {
              let M = [], k = [];
              for (; n.firstChild && n.firstChild !== o; ) k.push(n.firstChild), n.removeChild(n.firstChild);
              for (; d.length; ) if (d.length && !this.noWrap && x > 0 && (M.push(o.textContent || ""), o.textContent = d.join(" ").replace(/- /g, "-")), this.truncate(o, void 0, d, x === 0 && b || 0, i, f, (v, S) => d.slice(0, S).join(" ").replace(/- /g, "-")), b = t.actualWidth, x++, this.lineClamp && x >= this.lineClamp) {
                d.length && (this.truncate(o, o.textContent || "", void 0, 0, i, f, Xe), o.textContent = o.textContent?.replace("…", "") + "…");
                break;
              }
              k.forEach((v) => {
                n.insertBefore(v, o);
              }), M.forEach((v) => {
                n.insertBefore(ni.createTextNode(v), o);
                let S = ni.createElementNS(Fo, "tspan");
                S.textContent = "​", xr(S, { dy: c, x: e }), n.insertBefore(S, o);
              });
            } else this.ellipsis && l && this.truncate(o, l, void 0, 0, i, f, Xe);
          }, r = (o) => {
            [].slice.call(o.childNodes).forEach((n) => {
              n.nodeType === Ho.Node.TEXT_NODE ? s(n, o) : (n.className.baseVal.indexOf("highcharts-br") !== -1 && (t.actualWidth = 0), r(n));
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
            let { attributes: s = {}, children: r, style: o = {}, tagName: n } = e, l = this.renderer.styledMode;
            if (n === "b" || n === "strong" ? l ? s.class = "highcharts-strong" : o.fontWeight = "bold" : (n === "i" || n === "em") && (l ? s.class = "highcharts-emphasized" : o.fontStyle = "italic"), o?.color && (o.fill = o.color), n === "br") {
              s.class = "highcharts-br", e.textContent = "​";
              let d = h[i + 1];
              d?.textContent && (d.textContent = d.textContent.replace(/^ +/gm, ""));
            } else n === "a" && r && r.some((d) => d.tagName === "#text") && (e.children = [{ children: r, tagName: "tspan" }]);
            n !== "#text" && n !== "a" && (e.tagName = "tspan"), Fi(e, { attributes: s, style: o }), r && r.filter((d) => d.tagName !== "#text").forEach(t);
          };
          h.forEach(t), Wo(this.svgElement, "afterModifyTree", { nodes: h });
        }
        truncate(h, t, e, i, s, r, o) {
          let n, l, d = this.svgElement, { rotation: m } = d, c = [], f = e && !i ? 1 : 0, x = (t || e || "").length, b = x;
          e || (s = r);
          let M = function(k, v) {
            let S = v || k, C = h.parentNode;
            if (C && c[S] === void 0 && C.getSubStringLength) try {
              c[S] = i + C.getSubStringLength(0, e ? S + 1 : S);
            } catch {
            }
            return c[S];
          };
          if (d.rotation = 0, i + (l = M(h.textContent.length)) > s) {
            for (; f <= x; ) b = Math.ceil((f + x) / 2), e && (n = o(e, b)), l = M(b, n && n.length - 1), f === x ? f = x + 1 : l > s ? x = b - 1 : f = b;
            x === 0 ? h.textContent = "" : t && x === t.length - 1 || (h.textContent = n || o(t || e, b)), this.ellipsis && l > s && this.truncate(h, h.textContent || "", void 0, 0, s, r, Xe);
          }
          e && e.splice(0, b), d.actualWidth = l, d.rotation = m;
        }
        unescapeEntities(h, t) {
          return ba(this.renderer.escapes, function(e, i) {
            t && t.indexOf(e) !== -1 || (h = h.toString().replace(RegExp(e, "g"), i));
          }), h;
        }
      }, { defaultOptions: ka } = qt, { charts: yr, deg2rad: Xo, doc: _e, isFirefox: Rt, isMS: br, isWebKit: ms, noop: ai, SVG_NS: Ma, symbolSizes: Ge, win: vr } = X, { addEvent: fs, attr: li, createElement: Go, crisp: le, css: Se, defined: Nt, destroyObjectProperties: xs, extend: Ye, isArray: ys, isNumber: ue, isObject: Wi, isString: wr, merge: kr, pick: Mr, pInt: Aa, replaceNested: Ta, uniqueKey: Sa } = $;
      class bs {
        constructor(t, e, i, s, r, o, n) {
          let l, d;
          this.x = 0, this.y = 0;
          let m = this.createElement("svg").attr({ version: "1.1", class: "highcharts-root" }), c = m.element;
          n || m.css(this.getStyle(s || {})), t.appendChild(c), li(t, "dir", "ltr"), t.innerHTML.indexOf("xmlns") === -1 && li(c, "xmlns", this.SVG_NS), this.box = c, this.boxWrapper = m, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(_e.createTextNode("Created with Highcharts 12.4.0")), this.defs = this.createElement("defs").add(), this.allowHTML = o, this.forExport = r, this.styledMode = n, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = m.getStyle("font-size"), this.setSize(e, i, !1), Rt && t.getBoundingClientRect && ((l = function() {
            Se(t, { left: 0, top: 0 }), d = t.getBoundingClientRect(), Se(t, { left: Math.ceil(d.left) - d.left + "px", top: Math.ceil(d.top) - d.top + "px" });
          })(), this.unSubPixelFix = fs(vr, "resize", l));
        }
        definition(t) {
          return new Mt([t]).addToDOM(this.defs.element);
        }
        getReferenceURL() {
          if ((Rt || ms) && _e.getElementsByTagName("base").length) {
            if (!Nt(Vt)) {
              let t = Sa(), e = new Mt([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: t }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": `url(#${t})`, fill: "rgba(0,0,0,0.001)" } }] }]).addToDOM(_e.body);
              Se(e, { position: "fixed", top: 0, left: 0, zIndex: 9e5 }), Vt = _e.elementFromPoint(6, 6)?.id === "hitme", _e.body.removeChild(e);
            }
            if (Vt) return Ta(vr.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"]);
          }
          return "";
        }
        getStyle(t) {
          return this.style = Ye({ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif', fontSize: "1rem" }, t), this.style;
        }
        setStyle(t) {
          this.boxWrapper.css(this.getStyle(t));
        }
        isHidden() {
          return !this.boxWrapper.getBBox().width;
        }
        destroy() {
          let t = this.defs;
          return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), xs(this.gradients || {}), this.gradients = null, this.defs = t.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null, null;
        }
        createElement(t) {
          return new this.Element(this, t);
        }
        getRadialAttr(t, e) {
          return { cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2], cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2], r: (e.r || 0) * t[2] };
        }
        shadowDefinition(t) {
          let e = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(t).map((s) => `${s}-${t[s]}`)].join("-").toLowerCase().replace(/[^a-z\d\-]/g, ""), i = kr({ color: "#000000", offsetX: 1, offsetY: 1, opacity: 0.15, width: 5 }, t);
          return this.defs.element.querySelector(`#${e}`) || this.definition({ tagName: "filter", attributes: { id: e, filterUnits: i.filterUnits }, children: this.getShadowFilterContent(i) }), e;
        }
        getShadowFilterContent(t) {
          return [{ tagName: "feDropShadow", attributes: { dx: t.offsetX, dy: t.offsetY, "flood-color": t.color, "flood-opacity": Math.min(5 * t.opacity, 1), stdDeviation: t.width / 2 } }];
        }
        buildText(t) {
          new wa(t).buildSVG();
        }
        getContrast(t) {
          if (t === "transparent") return "#000000";
          let e = bt.parse(t).rgba, i = " clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1)";
          if (ue(e[0]) || !bt.useColorMix) {
            let s = e.map((o) => {
              let n = o / 255;
              return n <= 0.04 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
            }), r = 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2];
            return 1.05 / (r + 0.05) > (r + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
          }
          return "color(from " + t + " srgb" + i + i + i + ")";
        }
        button(t, e, i, s, r = {}, o, n, l, d, m) {
          let c = this.label(t, e, i, d, void 0, void 0, m, void 0, "button"), f = this.styledMode, x = arguments, b = 0;
          r = kr(ka.global.buttonTheme, r), f && (delete r.fill, delete r.stroke, delete r["stroke-width"]);
          let M = r.states || {}, k = r.style || {};
          delete r.states, delete r.style;
          let v = [Mt.filterUserAttributes(r)], S = [k];
          return f || ["hover", "select", "disabled"].forEach((C, O) => {
            v.push(kr(v[0], Mt.filterUserAttributes(x[O + 5] || M[C] || {}))), S.push(v[O + 1].style), delete v[O + 1].style;
          }), fs(c.element, br ? "mouseover" : "mouseenter", function() {
            b !== 3 && c.setState(1);
          }), fs(c.element, br ? "mouseout" : "mouseleave", function() {
            b !== 3 && c.setState(b);
          }), c.setState = (C = 0) => {
            if (C !== 1 && (c.state = b = C), c.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][C]), !f) {
              c.attr(v[C]);
              let O = S[C];
              Wi(O) && c.css(O);
            }
          }, c.attr(v[0]), !f && (c.css(Ye({ cursor: "default" }, k)), m && c.text.css({ pointerEvents: "none" })), c.on("touchstart", (C) => C.stopPropagation()).on("click", function(C) {
            b !== 3 && s?.call(c, C);
          });
        }
        crispLine(t, e) {
          let [i, s] = t;
          return Nt(i[1]) && i[1] === s[1] && (i[1] = s[1] = le(i[1], e)), Nt(i[2]) && i[2] === s[2] && (i[2] = s[2] = le(i[2], e)), t;
        }
        path(t) {
          let e = this.styledMode ? {} : { fill: "none" };
          return ys(t) ? e.d = t : Wi(t) && Ye(e, t), this.createElement("path").attr(e);
        }
        circle(t, e, i) {
          let s = Wi(t) ? t : t === void 0 ? {} : { x: t, y: e, r: i }, r = this.createElement("circle");
          return r.xSetter = r.ySetter = function(o, n, l) {
            l.setAttribute("c" + n, o);
          }, r.attr(s);
        }
        arc(t, e, i, s, r, o) {
          let n;
          Wi(t) ? (e = (n = t).y, i = n.r, s = n.innerR, r = n.start, o = n.end, t = n.x) : n = { innerR: s, start: r, end: o };
          let l = this.symbol("arc", t, e, i, i, n);
          return l.r = i, l;
        }
        rect(t, e, i, s, r, o) {
          let n = Wi(t) ? t : t === void 0 ? {} : { x: t, y: e, r, width: Math.max(i || 0, 0), height: Math.max(s || 0, 0) }, l = this.createElement("rect");
          return this.styledMode || (o !== void 0 && (n["stroke-width"] = o, Ye(n, l.crisp(n))), n.fill = "none"), l.rSetter = function(d, m, c) {
            l.r = d, li(c, { rx: d, ry: d });
          }, l.rGetter = function() {
            return l.r || 0;
          }, l.attr(n);
        }
        roundedRect(t) {
          return this.symbol("roundedRect").attr(t);
        }
        setSize(t, e, i) {
          this.width = t, this.height = e, this.boxWrapper.animate({ width: t, height: e }, { step: function() {
            this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
          }, duration: Mr(i, !0) ? void 0 : 0 }), this.alignElements();
        }
        g(t) {
          let e = this.createElement("g");
          return t ? e.attr({ class: "highcharts-" + t }) : e;
        }
        image(t, e, i, s, r, o) {
          let n = { preserveAspectRatio: "none" };
          ue(e) && (n.x = e), ue(i) && (n.y = i), ue(s) && (n.width = s), ue(r) && (n.height = r);
          let l = this.createElement("image").attr(n), d = function(m) {
            l.attr({ href: t }), o.call(l, m);
          };
          if (o) {
            l.attr({ href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" });
            let m = new vr.Image();
            fs(m, "load", d), m.src = t, m.complete && d({});
          } else l.attr({ href: t });
          return l;
        }
        symbol(t, e, i, s, r, o) {
          let n, l, d, m, c = this, f = /^url\((.*?)\)$/, x = f.test(t), b = !x && (this.symbols[t] ? t : "circle"), M = b && this.symbols[b];
          if (M) typeof e == "number" && (l = M.call(this.symbols, e || 0, i || 0, s || 0, r || 0, o)), n = this.path(l), c.styledMode || n.attr("fill", "none"), Ye(n, { symbolName: b || void 0, x: e, y: i, width: s, height: r }), o && Ye(n, o);
          else if (x) {
            d = t.match(f)[1];
            let k = n = this.image(d);
            k.imgwidth = Mr(o?.width, Ge[d]?.width), k.imgheight = Mr(o?.height, Ge[d]?.height), m = (v) => v.attr({ width: v.width, height: v.height }), ["width", "height"].forEach((v) => {
              k[`${v}Setter`] = function(S, C) {
                this[C] = S;
                let { alignByTranslate: O, element: L, width: D, height: N, imgwidth: I, imgheight: W } = this, Y = C === "width" ? I : W, H = 1;
                o && o.backgroundSize === "within" && D && N && I && W ? (H = Math.min(D / I, N / W), li(L, { width: Math.round(I * H), height: Math.round(W * H) })) : L && Y && L.setAttribute(C, Y), !O && I && W && this.translate(((D || 0) - I * H) / 2, ((N || 0) - W * H) / 2);
              };
            }), Nt(e) && k.attr({ x: e, y: i }), k.isImg = !0, k.symbolUrl = t, Nt(k.imgwidth) && Nt(k.imgheight) ? m(k) : (k.attr({ width: 0, height: 0 }), Go("img", { onload: function() {
              let v = yr[c.chartIndex];
              this.width === 0 && (Se(this, { position: "absolute", top: "-999em" }), _e.body.appendChild(this)), Ge[d] = { width: this.width, height: this.height }, k.imgwidth = this.width, k.imgheight = this.height, k.element && m(k), this.parentNode && this.parentNode.removeChild(this), c.imgCount--, c.imgCount || !v || v.hasLoaded || v.onload();
            }, src: d }), this.imgCount++);
          }
          return n;
        }
        clipRect(t, e, i, s) {
          return this.rect(t, e, i, s, 0);
        }
        text(t, e, i, s) {
          let r = {};
          if (s && (this.allowHTML || !this.forExport)) return this.html(t, e, i);
          r.x = Math.round(e || 0), i && (r.y = Math.round(i)), Nt(t) && (r.text = t);
          let o = this.createElement("text").attr(r);
          return s && (!this.forExport || this.allowHTML) || (o.xSetter = function(n, l, d) {
            let m = d.getElementsByTagName("tspan"), c = d.getAttribute(l);
            for (let f = 0, x; f < m.length; f++) (x = m[f]).getAttribute(l) === c && x.setAttribute(l, n);
            d.setAttribute(l, n);
          }), o;
        }
        fontMetrics(t) {
          let e = ue(t) ? t : Aa(ae.prototype.getStyle.call(t, "font-size") || 0), i = e < 24 ? e + 3 : Math.round(1.2 * e), s = Math.round(0.8 * i);
          return { h: i, b: s, f: e };
        }
        rotCorr(t, e, i) {
          let s = t;
          return e && i && (s = Math.max(s * Math.cos(e * Xo), 4)), { x: -t / 3 * Math.sin(e * Xo), y: s };
        }
        pathToSegments(t) {
          let e = [], i = [], s = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 };
          for (let r = 0; r < t.length; r++) wr(i[0]) && ue(t[r]) && i.length === s[i[0].toUpperCase()] && t.splice(r, 0, i[0].replace("M", "L").replace("m", "l")), typeof t[r] == "string" && (i.length && e.push(i.slice(0)), i.length = 0), i.push(t[r]);
          return e.push(i.slice(0)), e;
        }
        label(t, e, i, s, r, o, n, l, d) {
          return new He(this, t, e, i, s, r, o, n, l, d);
        }
        alignElements() {
          this.alignedObjects.forEach((t) => t.align());
        }
      }
      Ye(bs.prototype, { Element: ae, SVG_NS: Ma, escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, symbols: We, draw: ai }), Ii.registerRendererType("svg", bs, !0);
      let { composed: Ca, isFirefox: Ea } = X, { attr: Pa, css: je, createElement: Oa, defined: Yo, extend: vs, getAlignFactor: La, isNumber: ws, pInt: jo, pushUnique: Da } = $;
      function Uo(h, t, e) {
        let i = this.div?.style;
        ae.prototype[`${t}Setter`].call(this, h, t, e), i && (e.style[t] = i[t] = h);
      }
      let Vo = (h, t) => {
        if (!h.div) {
          let e = Pa(h.element, "class"), i = h.css, s = Oa("div", e ? { className: e } : void 0, { position: "absolute", left: `${h.translateX || 0}px`, top: `${h.translateY || 0}px`, ...h.styles, display: h.display, opacity: h.opacity, visibility: h.visibility }, h.parentGroup?.div || t);
          h.classSetter = (r, o, n) => {
            n.setAttribute("class", r), s.className = r;
          }, h.translateXSetter = h.translateYSetter = (r, o) => {
            h[o] = r, s.style[o === "translateX" ? "left" : "top"] = `${r}px`, h.doTransform = !0;
          }, h.scaleXSetter = h.scaleYSetter = (r, o) => {
            h[o] = r, h.doTransform = !0;
          }, h.opacitySetter = h.visibilitySetter = Uo, h.css = (r) => (i.call(h, r), r.cursor && (s.style.cursor = r.cursor), r.pointerEvents && (s.style.pointerEvents = r.pointerEvents), h), h.on = function() {
            return ae.prototype.on.apply({ element: s, onEvents: h.onEvents }, arguments), h;
          }, h.div = s;
        }
        return h.div;
      };
      class ee extends ae {
        static compose(t) {
          Da(Ca, this.compose) && (t.prototype.html = function(e, i, s) {
            return new ee(this, "span").attr({ text: e, x: Math.round(i), y: Math.round(s) });
          });
        }
        constructor(t, e) {
          super(t, e), ee.useForeignObject ? this.foreignObject = t.createElement("foreignObject").attr({ zIndex: 2 }) : this.css({ position: "absolute", ...t.styledMode ? {} : { fontFamily: t.style.fontFamily, fontSize: t.style.fontSize } }), this.element.style.whiteSpace = "nowrap";
        }
        getSpanCorrection(t, e, i) {
          this.xCorr = -t * i, this.yCorr = -e;
        }
        css(t) {
          let e, { element: i } = this, s = i.tagName === "SPAN" && t && "width" in t, r = s && t.width;
          return s && (delete t.width, this.textWidth = jo(r) || void 0, e = !0), t?.textOverflow === "ellipsis" && (t.overflow = "hidden", t.whiteSpace = "nowrap"), t?.lineClamp && (t.display = "-webkit-box", t.WebkitLineClamp = t.lineClamp, t.WebkitBoxOrient = "vertical", t.overflow = "hidden"), ws(Number(t?.fontSize)) && (t.fontSize += "px"), vs(this.styles, t), je(i, t), e && this.updateTransform(), this;
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
          let { element: t, foreignObject: e, oldTextWidth: i, renderer: s, rotation: r, rotationOriginX: o, rotationOriginY: n, scaleX: l, scaleY: d, styles: { display: m = "inline-block", whiteSpace: c }, textAlign: f = "left", textWidth: x, translateX: b = 0, translateY: M = 0, x: k = 0, y: v = 0 } = this;
          if (e || je(t, { marginLeft: `${b}px`, marginTop: `${M}px` }), t.tagName === "SPAN") {
            let S, C = [r, f, t.innerHTML, x, this.textAlign].join(","), O = -(this.parentGroup?.padding * 1) || 0;
            if (x !== i) {
              let I = this.textPxLength ? this.textPxLength : (je(t, { width: "", whiteSpace: c || "nowrap" }), t.offsetWidth), W = x || 0, Y = !s.styledMode && t.style.textOverflow === "" && t.style.webkitLineClamp;
              (W > i || I > W || Y) && (/[\-\s\u00AD]/.test(t.textContent || t.innerText) || t.style.textOverflow === "ellipsis") && (je(t, { width: (r || l || I > W || Y) && ws(x) ? x + "px" : "auto", display: m, whiteSpace: c || "normal" }), this.oldTextWidth = x);
            }
            e && (je(t, { display: "inline-block", verticalAlign: "top" }), e.attr({ width: s.width, height: s.height })), C !== this.cTT && (S = s.fontMetrics(t).b, Yo(r) && !e && (r !== (this.oldRotation || 0) || f !== this.oldAlign) && je(t, { transform: `rotate(${r}deg)`, transformOrigin: `${O}% ${O}px` }), this.getSpanCorrection(!Yo(r) && !this.textWidth && this.textPxLength || t.offsetWidth, S, La(f)));
            let { xCorr: L = 0, yCorr: D = 0 } = this, N = { left: `${k + L}px`, top: `${v + D}px`, textAlign: f, transformOrigin: `${(o ?? k) - L - k - O}px ${(n ?? v) - D - v - O}px` };
            (l || d) && (N.transform = `scale(${l ?? 1},${d ?? 1})`), e ? (super.updateTransform(), ws(k) && ws(v) ? (e.attr({ x: k + L, y: v + D, width: t.offsetWidth + 3, height: t.offsetHeight, "transform-origin": t.getAttribute("transform-origin") || "0 0" }), je(t, { display: m, textAlign: f })) : Ea && e.attr({ width: 0, height: 0 })) : je(t, N), this.cTT = C, this.oldRotation = r, this.oldAlign = f;
          }
        }
        add(t) {
          let { foreignObject: e, renderer: i } = this, s = i.box.parentNode, r = [];
          if (e) e.add(t), super.add(i.createElement("body").attr({ xmlns: "http://www.w3.org/1999/xhtml" }).css({ background: "transparent", margin: "0 3px 0 0" }).add(e));
          else {
            let o;
            if (this.parentGroup = t, t && !(o = t.div)) {
              let n = t;
              for (; n; ) r.push(n), n = n.parentGroup;
              for (let l of r.reverse()) o = Vo(l, s);
            }
            (o || s).appendChild(this.element);
          }
          return this.added = !0, this.alignOnAdd && this.updateTransform(), this;
        }
        textSetter(t) {
          t !== this.textStr && (delete this.bBox, delete this.oldTextWidth, Mt.setElementHTML(this.element, t ?? ""), this.textStr = t, this.doTransform = !0);
        }
        alignSetter(t) {
          this.alignValue = this.textAlign = t, this.doTransform = !0;
        }
        xSetter(t, e) {
          this[e] = t, this.doTransform = !0;
        }
      }
      let ge = ee.prototype;
      ge.visibilitySetter = ge.opacitySetter = Uo, ge.ySetter = ge.rotationSetter = ge.rotationOriginXSetter = ge.rotationOriginYSetter = ge.xSetter, (function(h) {
        h.xAxis = { alignTicks: !0, allowDecimals: void 0, panningEnabled: !0, zIndex: 2, zoomEnabled: !0, dateTimeLabelFormats: { millisecond: { main: "%[HMSL]", range: !1 }, second: { main: "%[HMS]", range: !1 }, minute: { main: "%[HM]", range: !1 }, hour: { main: "%[HM]", range: !1 }, day: { main: "%[eb]" }, week: { main: "%[eb]" }, month: { main: "%[bY]" }, year: { main: "%Y" } }, endOnTick: !1, gridLineDashStyle: "Solid", gridZIndex: 1, labels: { autoRotationLimit: 80, distance: 15, enabled: !0, indentation: 10, overflow: "justify", reserveSpace: void 0, rotation: void 0, staggerLines: 0, step: 0, useHTML: !1, zIndex: 7, style: { color: "#333333", cursor: "default", fontSize: "0.8em", textOverflow: "ellipsis" } }, maxPadding: 0.01, minorGridLineDashStyle: "Solid", minorTickLength: 2, minorTickPosition: "outside", minorTicksPerMajor: 5, minPadding: 0.01, offset: void 0, reversed: void 0, reversedStacks: !1, showEmpty: !0, showFirstLabel: !0, showLastLabel: !0, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", useHTML: !1, x: 0, y: 0, style: { color: "#666666", fontSize: "0.8em" } }, visible: !0, minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#333333", lineWidth: 1, gridLineColor: "#e6e6e6", gridLineWidth: void 0, tickColor: "#333333" }, h.yAxis = { reversedStacks: !0, endOnTick: !0, maxPadding: 0.05, minPadding: 0.05, tickPixelInterval: 72, showLastLabel: !0, labels: { x: void 0 }, startOnTick: !0, title: {}, stackLabels: { animation: {}, allowOverlap: !1, enabled: !1, crop: !0, overflow: "justify", formatter: function() {
          let { numberFormatter: t } = this.axis.chart;
          return t(this.total || 0, -1);
        }, style: { color: "#000000", fontSize: "0.7em", fontWeight: "bold", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 };
      })(oe || (oe = {}));
      let qo = oe, { addEvent: Ko, isFunction: $o, objectEach: Zo, removeEvent: _o } = $;
      (Qt || (Qt = {})).registerEventOptions = function(h, t) {
        h.eventOptions = h.eventOptions || {}, Zo(t.events, function(e, i) {
          h.eventOptions[i] !== e && (h.eventOptions[i] && (_o(h, i, h.eventOptions[i]), delete h.eventOptions[i]), $o(e) && (h.eventOptions[i] = e, Ko(h, i, e, { order: 0 })));
        });
      };
      let hi = Qt, { deg2rad: Ar } = X, { clamp: Jo, correctFloat: Xi, defined: Tr, destroyObjectProperties: Ia, extend: Qo, fireEvent: Gi, getAlignFactor: Sr, isNumber: di, merge: Cr, objectEach: Er, pick: me } = $, ci = class {
        constructor(h, t, e, i, s) {
          this.isNew = !0, this.isNewLabel = !0, this.axis = h, this.pos = t, this.type = e || "", this.parameters = s || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, Gi(this, "init"), e || i || this.addLabel();
        }
        addLabel() {
          let h = this, t = h.axis, e = t.options, i = t.chart, s = t.categories, r = t.logarithmic, o = t.names, n = h.pos, l = me(h.options?.labels, e.labels), d = t.tickPositions, m = n === d[0], c = n === d[d.length - 1], f = (!l.step || l.step === 1) && t.tickInterval === 1, x = d.info, b = h.label, M, k, v, S = this.parameters.category || (s ? me(s[n], o[n], n) : n);
          r && di(S) && (S = Xi(r.lin2log(S))), t.dateTime && (x ? M = (k = i.time.resolveDTLFormat(e.dateTimeLabelFormats[!e.grid?.enabled && x.higherRanks[n] || x.unitName])).main : di(S) && (M = t.dateTime.getXDateFormat(S, e.dateTimeLabelFormats || {}))), h.isFirst = m, h.isLast = c;
          let C = { axis: t, chart: i, dateTimeLabelFormat: M, isFirst: m, isLast: c, pos: n, tick: h, tickPositionInfo: x, value: S };
          Gi(this, "labelFormat", C);
          let O = (N) => l.formatter ? l.formatter.call(N, N) : l.format ? (N.text = t.defaultLabelFormatter.call(N), jt.format(l.format, N, i)) : t.defaultLabelFormatter.call(N), L = O.call(C, C), D = k?.list;
          D ? h.shortenLabel = function() {
            for (v = 0; v < D.length; v++) if (Qo(C, { dateTimeLabelFormat: D[v] }), b.attr({ text: O.call(C, C) }), b.getBBox().width < t.getSlotWidth(h) - 2 * (l.padding || 0)) return;
            b.attr({ text: "" });
          } : h.shortenLabel = void 0, f && t._addedPlotLB && h.moveLabel(L, l), Tr(b) || h.movedLabel ? b && b.textStr !== L && !f && (!b.textWidth || l.style.width || b.styles.width || b.css({ width: null }), b.attr({ text: L }), b.textPxLength = b.getBBox().width) : (h.label = b = h.createLabel(L, l), h.rotation = 0);
        }
        createLabel(h, t, e) {
          let i = this.axis, { renderer: s, styledMode: r } = i.chart, o = t.style.whiteSpace, n = Tr(h) && t.enabled ? s.text(h, e?.x, e?.y, t.useHTML).add(i.labelGroup) : void 0;
          return n && (r || n.css(Cr(t.style)), n.textPxLength = n.getBBox().width, !r && o && n.css({ whiteSpace: o })), n;
        }
        destroy() {
          Ia(this, this.axis);
        }
        getPosition(h, t, e, i) {
          let s = this.axis, r = s.chart, o = i && r.oldChartHeight || r.chartHeight, n = { x: h ? Xi(s.translate(t + e, void 0, void 0, i) + s.transB) : s.left + s.offset + (s.opposite ? (i && r.oldChartWidth || r.chartWidth) - s.right - s.left : 0), y: h ? o - s.bottom + s.offset - (s.opposite ? s.height : 0) : Xi(o - s.translate(t + e, void 0, void 0, i) - s.transB) };
          return n.y = Jo(n.y, -1e9, 1e9), Gi(this, "afterGetPosition", { pos: n }), n;
        }
        getLabelPosition(h, t, e, i, s, r, o, n) {
          let l, d, m = this.axis, c = m.transA, f = m.isLinked && m.linkedParent ? m.linkedParent.reversed : m.reversed, x = m.staggerLines, b = m.tickRotCorr || { x: 0, y: 0 }, M = i || m.reserveSpaceDefault ? 0 : -m.labelOffset * (m.labelAlign === "center" ? 0.5 : 1), k = s.distance, v = {};
          return l = m.side === 0 ? e.rotation ? -k : -e.getBBox().height : m.side === 2 ? b.y + k : Math.cos(e.rotation * Ar) * (b.y - e.getBBox(!1, 0).height / 2), Tr(s.y) && (l = m.side === 0 && m.horiz ? s.y + l : s.y), h = h + me(s.x, [0, 1, 0, -1][m.side] * k) + M + b.x - (r && i ? r * c * (f ? -1 : 1) : 0), t = t + l - (r && !i ? r * c * (f ? 1 : -1) : 0), x && (d = o / (n || 1) % x, m.opposite && (d = x - d - 1), t += d * (m.labelOffset / x)), v.x = h, v.y = Math.round(t), Gi(this, "afterGetLabelPosition", { pos: v, tickmarkOffset: r, index: o }), v;
        }
        getLabelSize() {
          return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
        }
        getMarkPath(h, t, e, i, s = !1, r) {
          return r.crispLine([["M", h, t], ["L", h + (s ? 0 : -e), t + (s ? e : 0)]], i);
        }
        handleOverflow(h) {
          let t = this.axis, e = t.options.labels, i = h.x, s = t.chart.chartWidth, r = t.chart.spacing, o = me(t.labelLeft, Math.min(t.pos, r[3])), n = me(t.labelRight, Math.max(t.isRadial ? 0 : t.pos + t.len, s - r[1])), l = this.label, d = this.rotation, m = Sr(t.labelAlign || l.attr("align")), c = l.getBBox().width, f = t.getSlotWidth(this), x = f, b = 1, M;
          d || e.overflow !== "justify" ? d < 0 && i - m * c < o ? M = Math.round(i / Math.cos(d * Ar) - o) : d > 0 && i + m * c > n && (M = Math.round((s - i) / Math.cos(d * Ar))) : (i - m * c < o ? x = h.x + x * (1 - m) - o : i + (1 - m) * c > n && (x = n - h.x + x * m, b = -1), (x = Math.min(f, x)) < f && t.labelAlign === "center" && (h.x += b * (f - x - m * (f - Math.min(c, x)))), (c > x || t.autoRotation && l?.styles?.width) && (M = x)), M && l && (this.shortenLabel ? this.shortenLabel() : l.css(Qo({}, { width: Math.floor(M) + "px", lineClamp: +!t.isRadial })));
        }
        moveLabel(h, t) {
          let e = this, i = e.label, s = e.axis, r = !1, o;
          i && i.textStr === h ? (e.movedLabel = i, r = !0, delete e.label) : Er(s.ticks, function(n) {
            r || n.isNew || n === e || !n.label || n.label.textStr !== h || (e.movedLabel = n.label, r = !0, n.labelPos = e.movedLabel.xy, delete n.label);
          }), !r && (e.labelPos || i) && (o = e.labelPos || i.xy, e.movedLabel = e.createLabel(h, t, o), e.movedLabel && e.movedLabel.attr({ opacity: 0 }));
        }
        render(h, t, e) {
          let i = this.axis, s = i.horiz, r = this.pos, o = me(this.tickmarkOffset, i.tickmarkOffset), n = this.getPosition(s, r, o, t), l = n.x, d = n.y, m = i.pos, c = m + i.len, f = s ? l : d, x = me(e, this.label?.newOpacity, 1);
          !i.chart.polar && (Xi(f) < m || f > c) && (e = 0), e ?? (e = 1), this.isActive = !0, this.renderGridLine(t, e), this.renderMark(n, e), this.renderLabel(n, t, x, h), this.isNew = !1, Gi(this, "afterRender");
        }
        renderGridLine(h, t) {
          let e = this.axis, i = e.options, s = {}, r = this.pos, o = this.type, n = me(this.tickmarkOffset, e.tickmarkOffset), l = e.chart.renderer, d = this.gridLine, m, c = i.gridLineWidth, f = i.gridLineColor, x = i.gridLineDashStyle;
          this.type === "minor" && (c = i.minorGridLineWidth, f = i.minorGridLineColor, x = i.minorGridLineDashStyle), d || (e.chart.styledMode || (s.stroke = f, s["stroke-width"] = c || 0, s.dashstyle = x), o || (s.zIndex = 1), h && (t = 0), this.gridLine = d = l.path().attr(s).addClass("highcharts-" + (o ? o + "-" : "") + "grid-line").add(e.gridGroup)), d && (m = e.getPlotLinePath({ value: r + n, lineWidth: d.strokeWidth(), force: "pass", old: h, acrossPanes: !1 })) && d[h || this.isNew ? "attr" : "animate"]({ d: m, opacity: t });
        }
        renderMark(h, t) {
          let e = this.axis, i = e.options, s = e.chart.renderer, r = this.type, o = e.tickSize(r ? r + "Tick" : "tick"), n = h.x, l = h.y, d = me(i[r !== "minor" ? "tickWidth" : "minorTickWidth"], !r && e.isXAxis ? 1 : 0), m = i[r !== "minor" ? "tickColor" : "minorTickColor"], c = this.mark, f = !c;
          o && (e.opposite && (o[0] = -o[0]), !c && (this.mark = c = s.path().addClass("highcharts-" + (r ? r + "-" : "") + "tick").add(e.axisGroup), e.chart.styledMode || c.attr({ stroke: m, "stroke-width": d })), c[f ? "attr" : "animate"]({ d: this.getMarkPath(n, l, o[0], c.strokeWidth(), e.horiz, s), opacity: t }));
        }
        renderLabel(h, t, e, i) {
          let s = this.axis, r = s.horiz, o = s.options, n = this.label, l = o.labels, d = l.step, m = me(this.tickmarkOffset, s.tickmarkOffset), c = h.x, f = h.y, x = !0;
          n && di(c) && (n.xy = h = this.getLabelPosition(c, f, n, r, l, m, i, d), (!this.isFirst || this.isLast || o.showFirstLabel) && (!this.isLast || this.isFirst || o.showLastLabel) ? !r || l.step || l.rotation || t || e === 0 || this.handleOverflow(h) : x = !1, d && i % d && (x = !1), x && di(h.y) ? (h.opacity = e, n[this.isNewLabel ? "attr" : "animate"](h).show(!0), this.isNewLabel = !1) : (n.hide(), this.isNewLabel = !0));
        }
        replaceMovedLabel() {
          let h = this.label, t = this.axis;
          h && !this.isNew && (h.animate({ opacity: 0 }, void 0, h.destroy), delete this.label), t.isDirty = !0, this.label = this.movedLabel, delete this.movedLabel;
        }
      }, { animObject: tn } = It, { xAxis: en, yAxis: sn } = qo, { defaultOptions: Pr } = qt, { registerEventOptions: Ba } = hi, { deg2rad: Na } = X, { arrayMax: rn, arrayMin: Ra, clamp: Or, correctFloat: Ut, defined: yt, destroyObjectProperties: on, erase: Lr, error: Dr, extend: pi, fireEvent: Tt, getClosestDistance: Yi, insertItem: nn, isArray: ks, isNumber: Q, isString: an, merge: Je, normalizeTickInterval: Ms, objectEach: As, pick: ot, relativeLength: Ts, removeEvent: za, splat: Fa, syncTimeout: Ha } = $, Ir = (h, t) => Ms(t, void 0, void 0, ot(h.options.allowDecimals, t < 0.5 || h.tickAmount !== void 0), !!h.tickAmount);
      pi(Pr, { xAxis: en, yAxis: Je(en, sn) });
      class ui {
        constructor(t, e, i) {
          this.init(t, e, i);
        }
        init(t, e, i = this.coll) {
          let s = i === "xAxis", r = this.isZAxis || (t.inverted ? !s : s);
          this.chart = t, this.horiz = r, this.isXAxis = s, this.coll = i, Tt(this, "init", { userOptions: e }), this.opposite = ot(e.opposite, this.opposite), this.side = ot(e.side, this.side, r ? 2 * !this.opposite : this.opposite ? 1 : 3), this.setOptions(e);
          let o = this.options, n = o.labels;
          this.type ?? (this.type = o.type || "linear"), this.uniqueNames ?? (this.uniqueNames = o.uniqueNames ?? !0), Tt(this, "afterSetType"), this.userOptions = e, this.minPixelPadding = 0, this.reversed = ot(o.reversed, this.reversed), this.visible = o.visible, this.zoomEnabled = o.zoomEnabled, this.hasNames = this.type === "category" || o.categories === !0, this.categories = ks(o.categories) && o.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = yt(o.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len ?? (this.len = 0), this.minRange = this.userMinRange = o.minRange || o.maxZoom, this.range = o.range, this.offset = o.offset || 0, this.max = void 0, this.min = void 0;
          let l = ot(o.crosshair, Fa(t.options.tooltip.crosshairs)[+!s]);
          this.crosshair = l === !0 ? {} : l, t.axes.indexOf(this) === -1 && (s ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this), nn(this, t[this.coll])), t.orderItems(this.coll), this.series = this.series || [], t.inverted && !this.isZAxis && s && !yt(this.reversed) && (this.reversed = !0), this.labelRotation = Q(n.rotation) ? n.rotation : void 0, Ba(this, o), Tt(this, "afterInit");
        }
        setOptions(t) {
          let e = this.horiz ? { labels: { autoRotation: [-45], padding: 3 }, margin: 15 } : { labels: { padding: 1 }, title: { rotation: 90 * this.side } };
          this.options = Je(e, this.coll === "yAxis" ? { title: { text: this.chart.options.lang.yAxisTitle } } : {}, Pr[this.coll], t), Tt(this, "afterSetOptions", { userOptions: t });
        }
        defaultLabelFormatter() {
          let t = this.axis, { numberFormatter: e } = this.chart, i = Q(this.value) ? this.value : NaN, s = t.chart.time, r = t.categories, o = this.dateTimeLabelFormat, n = Pr.lang, l = n.numericSymbols, d = n.numericSymbolMagnitude || 1e3, m = t.logarithmic ? Math.abs(i) : t.tickInterval, c = l?.length, f, x;
          if (r) x = `${this.value}`;
          else if (o) x = s.dateFormat(o, i, !0);
          else if (c && l && m >= 1e3) for (; c-- && x === void 0; ) m >= (f = Math.pow(d, c + 1)) && 10 * i % f == 0 && l[c] !== null && i !== 0 && (x = e(i / f, -1) + l[c]);
          return x === void 0 && (x = Math.abs(i) >= 1e4 ? e(i, -1) : e(i, -1, void 0, "")), x;
        }
        getSeriesExtremes() {
          let t, e = this;
          Tt(this, "getSeriesExtremes", null, function() {
            e.hasVisibleSeries = !1, e.dataMin = e.dataMax = e.threshold = void 0, e.softThreshold = !e.isXAxis, e.series.forEach((i) => {
              if (i.reserveSpace()) {
                let s = i.options, r, o = s.threshold, n, l;
                if (e.hasVisibleSeries = !0, e.positiveValuesOnly && 0 >= (o || 0) && (o = void 0), e.isXAxis) (r = i.getColumn("x")).length && (r = e.logarithmic ? r.filter((d) => d > 0) : r, n = (t = i.getXExtremes(r)).min, l = t.max, Q(n) || n instanceof Date || (r = r.filter(Q), n = (t = i.getXExtremes(r)).min, l = t.max), r.length && (e.dataMin = Math.min(ot(e.dataMin, n), n), e.dataMax = Math.max(ot(e.dataMax, l), l)));
                else {
                  let d = i.applyExtremes();
                  Q(d.dataMin) && (n = d.dataMin, e.dataMin = Math.min(ot(e.dataMin, n), n)), Q(d.dataMax) && (l = d.dataMax, e.dataMax = Math.max(ot(e.dataMax, l), l)), yt(o) && (e.threshold = o), (!s.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1);
                }
              }
            });
          }), Tt(this, "afterGetSeriesExtremes");
        }
        translate(t, e, i, s, r, o) {
          let n = this.linkedParent || this, l = s && n.old ? n.old.min : n.min;
          if (!Q(l)) return NaN;
          let d = n.minPixelPadding, m = (n.isOrdinal || n.brokenAxis?.hasBreaks || n.logarithmic && r) && !!n.lin2val, c = 1, f = 0, x = s && n.old ? n.old.transA : n.transA, b = 0;
          return x || (x = n.transA), i && (c *= -1, f = n.len), n.reversed && (c *= -1, f -= c * (n.sector || n.len)), e ? (b = (t = t * c + f - d) / x + l, m && (b = n.lin2val(b))) : (m && (t = n.val2lin(t)), b = c * (t - l) * x + f + c * d + (Q(o) ? x * o : 0), n.isRadial || (b = Ut(b))), b;
        }
        toPixels(t, e) {
          return this.translate(this.chart?.time.parse(t) ?? NaN, !1, !this.horiz, void 0, !0) + (e ? 0 : this.pos);
        }
        toValue(t, e) {
          return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, void 0, !0);
        }
        getPlotLinePath(t) {
          let e = this, i = e.chart, s = e.left, r = e.top, o = t.old, n = t.value, l = t.lineWidth, d = o && i.oldChartHeight || i.chartHeight, m = o && i.oldChartWidth || i.chartWidth, c = e.transB, f = t.translatedValue, x = t.force, b, M, k, v, S;
          function C(L, D, N) {
            return x !== "pass" && (L < D || L > N) && (x ? L = Or(L, D, N) : S = !0), L;
          }
          let O = { value: n, lineWidth: l, old: o, force: x, acrossPanes: t.acrossPanes, translatedValue: f };
          return Tt(this, "getPlotLinePath", O, function(L) {
            b = k = (f = Or(f = ot(f, e.translate(n, void 0, void 0, o)), -1e9, 1e9)) + c, M = v = d - f - c, Q(f) ? e.horiz ? (M = r, v = d - e.bottom + (e.options.isInternal ? 0 : i.scrollablePixelsY || 0), b = k = C(b, s, s + e.width)) : (b = s, k = m - e.right + (i.scrollablePixelsX || 0), M = v = C(M, r, r + e.height)) : (S = !0, x = !1), L.path = S && !x ? void 0 : i.renderer.crispLine([["M", b, M], ["L", k, v]], l || 1);
          }), O.path;
        }
        getLinearTickPositions(t, e, i) {
          let s, r, o, n = Ut(Math.floor(e / t) * t), l = Ut(Math.ceil(i / t) * t), d = [];
          if (Ut(n + t) === n && (o = 20), this.single) return [e];
          for (s = n; s <= l && (d.push(s), (s = Ut(s + t, o)) !== r); ) r = s;
          return d;
        }
        getMinorTickInterval() {
          let { minorTicks: t, minorTickInterval: e } = this.options;
          return t === !0 ? ot(e, "auto") : t !== !1 ? e : void 0;
        }
        getMinorTickPositions() {
          let t = this.options, e = this.tickPositions, i = this.minorTickInterval, s = this.pointRangePadding || 0, r = (this.min || 0) - s, o = (this.max || 0) + s, n = this.brokenAxis?.hasBreaks ? this.brokenAxis.unitLength : o - r, l = [], d;
          if (n && n / i < this.len / 3) {
            let m = this.logarithmic;
            if (m) this.paddedTicks.forEach(function(c, f, x) {
              f && l.push.apply(l, m.getLogTickPositions(i, x[f - 1], x[f], !0));
            });
            else if (this.dateTime && this.getMinorTickInterval() === "auto") l = l.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(i), r, o, t.startOfWeek));
            else for (d = r + (e[0] - r) % i; d <= o && d !== l[0]; d += i) l.push(d);
          }
          return l.length !== 0 && this.trimTicks(l), l;
        }
        adjustForMinRange() {
          let t = this.options, e = this.logarithmic, i = this.chart.time, { max: s, min: r, minRange: o } = this, n, l, d, m;
          this.isXAxis && o === void 0 && !e && (o = yt(t.min) || yt(t.max) || yt(t.floor) || yt(t.ceiling) ? null : Math.min(5 * (Yi(this.series.map((c) => {
            let f = c.getColumn("x");
            return c.xIncrement ? f.slice(0, 2) : f;
          })) || 0), this.dataMax - this.dataMin)), Q(s) && Q(r) && Q(o) && s - r < o && (l = this.dataMax - this.dataMin >= o, n = (o - s + r) / 2, d = [r - n, i.parse(t.min) ?? r - n], l && (d[2] = e ? e.log2lin(this.dataMin) : this.dataMin), m = [(r = rn(d)) + o, i.parse(t.max) ?? r + o], l && (m[2] = e ? e.log2lin(this.dataMax) : this.dataMax), (s = Ra(m)) - r < o && (d[0] = s - o, d[1] = i.parse(t.min) ?? s - o, r = rn(d))), this.minRange = o, this.min = r, this.max = s;
        }
        getClosest() {
          let t, e;
          if (this.categories) e = 1;
          else {
            let i = [];
            this.series.forEach(function(s) {
              let r = s.closestPointRange, o = s.getColumn("x");
              o.length === 1 ? i.push(o[0]) : s.sorted && yt(r) && s.reserveSpace() && (e = yt(e) ? Math.min(e, r) : r);
            }), i.length && (i.sort((s, r) => s - r), t = Yi([i]));
          }
          return t && e ? Math.min(t, e) : t || e;
        }
        nameToX(t) {
          let e = ks(this.options.categories), i = e ? this.categories : this.names, s = t.options.x, r;
          return t.series.requireSorting = !1, yt(s) || (s = this.uniqueNames && i ? e ? i.indexOf(t.name) : ot(i.keys[t.name], -1) : t.series.autoIncrement()), s === -1 ? !e && i && (r = i.length) : Q(s) && (r = s), r !== void 0 ? (this.names[r] = t.name, this.names.keys[t.name] = r) : t.x && (r = t.x), r;
        }
        updateNames() {
          let t = this, e = this.names;
          e.length > 0 && (Object.keys(e.keys).forEach(function(i) {
            delete e.keys[i];
          }), e.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach((i) => {
            i.xIncrement = null, (!i.points || i.isDirtyData) && (t.max = Math.max(t.max || 0, i.dataTable.rowCount - 1), i.processData(), i.generatePoints());
            let s = i.getColumn("x").slice();
            i.data.forEach((r, o) => {
              let n = s[o];
              r?.options && r.name !== void 0 && (n = t.nameToX(r)) !== void 0 && n !== r.x && (s[o] = r.x = n);
            }), i.dataTable.setColumn("x", s);
          }));
        }
        setAxisTranslation() {
          let t = this, e = t.max - t.min, i = t.linkedParent, s = !!t.categories, r = t.isXAxis, o = t.axisPointRange || 0, n, l = 0, d = 0, m, c = t.transA;
          (r || s || o) && (n = t.getClosest(), i ? (l = i.minPointOffset, d = i.pointRangePadding) : t.series.forEach(function(f) {
            let x = s ? 1 : r ? ot(f.options.pointRange, n, 0) : t.axisPointRange || 0, b = f.options.pointPlacement;
            if (o = Math.max(o, x), !t.single || s) {
              let M = f.is("xrange") ? !r : r;
              l = Math.max(l, M && an(b) ? 0 : x / 2), d = Math.max(d, M && b === "on" ? 0 : x);
            }
          }), m = t.ordinal?.slope && n ? t.ordinal.slope / n : 1, t.minPointOffset = l *= m, t.pointRangePadding = d *= m, t.pointRange = Math.min(o, t.single && s ? 1 : e), r && (t.closestPointRange = n)), t.translationSlope = t.transA = c = t.staticScale || t.len / (e + d || 1), t.transB = t.horiz ? t.left : t.bottom, t.minPixelPadding = c * l, Tt(this, "afterSetAxisTranslation");
        }
        minFromRange() {
          let { max: t, min: e } = this;
          return Q(t) && Q(e) && t - e || void 0;
        }
        setTickInterval(t) {
          let { categories: e, chart: i, dataMax: s, dataMin: r, dateTime: o, isXAxis: n, logarithmic: l, options: d, softThreshold: m } = this, c = i.time, f = Q(this.threshold) ? this.threshold : void 0, x = this.minRange || 0, { ceiling: b, floor: M, linkedTo: k, softMax: v, softMin: S } = d, C = Q(k) && i[this.coll]?.[k], O = d.tickPixelInterval, L = d.maxPadding, D = d.minPadding, N = 0, I, W = Q(d.tickInterval) && d.tickInterval >= 0 ? d.tickInterval : void 0, Y, H, V, Z;
          if (o || e || C || this.getTickAmount(), V = ot(this.userMin, c.parse(d.min)), Z = ot(this.userMax, c.parse(d.max)), C ? (this.linkedParent = C, I = C.getExtremes(), this.min = ot(I.min, I.dataMin), this.max = ot(I.max, I.dataMax), this.type !== C.type && Dr(11, !0, i)) : (m && yt(f) && Q(s) && Q(r) && (r >= f ? (Y = f, D = 0) : s <= f && (H = f, L = 0)), this.min = ot(V, Y, r), this.max = ot(Z, H, s)), Q(this.max) && Q(this.min) && (l && (this.positiveValuesOnly && !t && 0 >= Math.min(this.min, ot(r, this.min)) && Dr(10, !0, i), this.min = Ut(l.log2lin(this.min), 16), this.max = Ut(l.log2lin(this.max), 16)), this.range && Q(r) && (this.userMin = this.min = V = Math.max(r, this.minFromRange() || 0), this.userMax = Z = this.max, this.range = void 0)), Tt(this, "foundExtremes"), this.adjustForMinRange(), Q(this.min) && Q(this.max)) {
            if (!Q(this.userMin) && Q(S) && S < this.min && (this.min = V = S), !Q(this.userMax) && Q(v) && v > this.max && (this.max = Z = v), e || this.axisPointRange || this.stacking?.usePercentage || C || (N = this.max - this.min) && (!yt(V) && D && (this.min -= N * D), !yt(Z) && L && (this.max += N * L)), !Q(this.userMin) && Q(M) && (this.min = Math.max(this.min, M)), !Q(this.userMax) && Q(b) && (this.max = Math.min(this.max, b)), m && Q(r) && Q(s)) {
              let j = f || 0;
              !yt(V) && this.min < j && r >= j ? this.min = d.minRange ? Math.min(j, this.max - x) : j : !yt(Z) && this.max > j && s <= j && (this.max = d.minRange ? Math.max(j, this.min + x) : j);
            }
            !i.polar && this.min > this.max && (yt(d.min) ? this.max = this.min : yt(d.max) && (this.min = this.max)), N = this.max - this.min;
          }
          if (this.min !== this.max && Q(this.min) && Q(this.max) ? C && !W && O === C.options.tickPixelInterval ? this.tickInterval = W = C.tickInterval : this.tickInterval = ot(W, this.tickAmount ? N / Math.max(this.tickAmount - 1, 1) : void 0, e ? 1 : N * O / Math.max(this.len, O)) : this.tickInterval = 1, n && !t) {
            let j = this.min !== this.old?.min || this.max !== this.old?.max;
            this.series.forEach(function(q) {
              q.forceCrop = q.forceCropping?.(), q.processData(j);
            }), Tt(this, "postProcessData", { hasExtremesChanged: j });
          }
          this.setAxisTranslation(), Tt(this, "initialAxisTranslation"), this.pointRange && !W && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
          let J = ot(d.minTickInterval, o && !this.series.some((j) => !j.sorted) ? this.closestPointRange : 0);
          !W && J && this.tickInterval < J && (this.tickInterval = J), o || l || W || (this.tickInterval = Ir(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions();
        }
        setTickPositions() {
          let t = this.options, e = t.tickPositions, i = t.tickPositioner, s = this.getMinorTickInterval(), r = !this.isPanning, o = r && t.startOnTick, n = r && t.endOnTick, l = [], d;
          if (this.tickmarkOffset = this.categories && t.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0, this.single = this.min === this.max && yt(this.min) && !this.tickAmount && (this.min % 1 == 0 || t.allowDecimals !== !1), e) l = e.slice();
          else if (Q(this.min) && Q(this.max)) {
            if (!this.ordinal?.positions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) l = [this.min, this.max], Dr(19, !1, this.chart);
            else if (this.dateTime) l = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, t.units), this.min, this.max, t.startOfWeek, this.ordinal?.positions, this.closestPointRange, !0);
            else if (this.logarithmic) l = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
            else {
              let m = this.tickInterval, c = m;
              for (; c <= 2 * m && (l = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && l.length > this.tickAmount); ) this.tickInterval = Ir(this, c *= 1.1);
            }
            l.length > this.len && (l = [l[0], l[l.length - 1]])[0] === l[1] && (l.length = 1), i && (this.tickPositions = l, (d = i.apply(this, [this.min, this.max])) && (l = d));
          }
          this.tickPositions = l, this.minorTickInterval = s === "auto" && this.tickInterval ? this.tickInterval / t.minorTicksPerMajor : s, this.paddedTicks = l.slice(0), this.trimTicks(l, o, n), !this.isLinked && Q(this.min) && Q(this.max) && (this.single && l.length < 2 && !this.categories && !this.series.some((m) => m.is("heatmap") && m.options.pointPlacement === "between") && (this.min -= 0.5, this.max += 0.5), e || d || this.adjustTickAmount()), Tt(this, "afterSetTickPositions");
        }
        trimTicks(t, e, i) {
          let s = t[0], r = t[t.length - 1], o = !this.isOrdinal && this.minPointOffset || 0;
          if (Tt(this, "trimTicks"), !this.isLinked || !this.grid) {
            if (e && s !== -1 / 0) this.min = s;
            else for (; this.min - o > t[0]; ) t.shift();
            if (i) this.max = r;
            else for (; this.max + o < t[t.length - 1]; ) t.pop();
            t.length === 0 && yt(s) && !this.options.tickPositions && t.push((r + s) / 2);
          }
        }
        alignToOthers() {
          let t, e = this, i = e.chart, s = [this], r = e.options, o = i.options.chart, n = this.coll === "yAxis" && o.alignThresholds, l = [];
          if (e.thresholdAlignment = void 0, (o.alignTicks !== !1 && r.alignTicks || n) && r.startOnTick !== !1 && r.endOnTick !== !1 && !e.logarithmic) {
            let d = (c) => {
              let { horiz: f, options: x } = c;
              return [f ? x.left : x.top, x.width, x.height, x.pane].join(",");
            }, m = d(this);
            i[this.coll].forEach(function(c) {
              let { series: f } = c;
              f.length && f.some((x) => x.visible) && c !== e && d(c) === m && (t = !0, s.push(c));
            });
          }
          if (t && n) {
            s.forEach((m) => {
              let c = m.getThresholdAlignment(e);
              Q(c) && l.push(c);
            });
            let d = l.length > 1 ? l.reduce((m, c) => m += c, 0) / l.length : void 0;
            s.forEach((m) => {
              m.thresholdAlignment = d;
            });
          }
          return t;
        }
        getThresholdAlignment(t) {
          if ((!Q(this.dataMin) || this !== t && this.series.some((e) => e.isDirty || e.isDirtyData)) && this.getSeriesExtremes(), Q(this.threshold)) {
            let e = Or((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
            return this.options.reversed && (e = 1 - e), e;
          }
        }
        getTickAmount() {
          let t = this.options, e = t.tickPixelInterval, i = t.tickAmount;
          yt(t.tickInterval) || i || !(this.len < e) || this.isRadial || this.logarithmic || !t.startOnTick || !t.endOnTick || (i = 2), !i && this.alignToOthers() && (i = Math.ceil(this.len / e) + 1), i < 4 && (this.finalTickAmt = i, i = 5), this.tickAmount = i;
        }
        adjustTickAmount() {
          let t = this, { finalTickAmt: e, max: i, min: s, options: r, tickPositions: o, tickAmount: n, thresholdAlignment: l } = t, d = o?.length, m = ot(t.threshold, t.softThreshold ? 0 : null), c, f, x = t.tickInterval, b, M = () => o.push(Ut(o[o.length - 1] + x)), k = () => o.unshift(Ut(o[0] - x));
          if (Q(l) && (b = l < 0.5 ? Math.ceil(l * (n - 1)) : Math.floor(l * (n - 1)), r.reversed && (b = n - 1 - b)), t.hasData() && Q(s) && Q(i)) {
            let v = () => {
              t.transA *= (d - 1) / (n - 1), t.min = r.startOnTick ? o[0] : Math.min(s, o[0]), t.max = r.endOnTick ? o[o.length - 1] : Math.max(i, o[o.length - 1]);
            };
            if (Q(b) && Q(t.threshold)) {
              for (; o[b] !== m || o.length !== n || o[0] > s || o[o.length - 1] < i; ) {
                for (o.length = 0, o.push(t.threshold); o.length < n; ) o[b] === void 0 || o[b] > t.threshold ? k() : M();
                if (x > 8 * t.tickInterval) break;
                x *= 2;
              }
              v();
            } else if (d < n) {
              for (; o.length < n; ) o.length % 2 || s === m ? M() : k();
              v();
            }
            if (yt(e)) {
              for (f = c = o.length; f--; ) (e === 3 && f % 2 == 1 || e <= 2 && f > 0 && f < c - 1) && o.splice(f, 1);
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
          r || i || s || this.isLinked || this.forceRedraw || this.userMin !== this.old?.userMin || this.userMax !== this.old?.userMax || this.alignToOthers() ? (e && t === "yAxis" && e.buildStacks(), this.forceRedraw = !1, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), e && t === "xAxis" && e.buildStacks(), this.isDirty || (this.isDirty = r || this.min !== this.old?.min || this.max !== this.old?.max)) : e && e.cleanStacks(), i && delete this.allExtremes, Tt(this, "afterSetScale");
        }
        setExtremes(t, e, i = !0, s, r) {
          let o = this.chart;
          this.series.forEach((n) => {
            delete n.kdTree;
          }), t = o.time.parse(t), e = o.time.parse(e), Tt(this, "setExtremes", r = pi(r, { min: t, max: e }), (n) => {
            this.userMin = n.min, this.userMax = n.max, this.eventArgs = n, i && o.redraw(s);
          });
        }
        setAxisSize() {
          let t = this.chart, e = this.options, i = e.offsets || [0, 0, 0, 0], s = this.horiz, r = this.width = Math.round(Ts(ot(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)), o = this.height = Math.round(Ts(ot(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)), n = this.top = Math.round(Ts(ot(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)), l = this.left = Math.round(Ts(ot(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft));
          this.bottom = t.chartHeight - o - n, this.right = t.chartWidth - r - l, this.len = Math.max(s ? r : o, 0), this.pos = s ? l : n;
        }
        getExtremes() {
          let t = this.logarithmic;
          return { min: t ? Ut(t.lin2log(this.min)) : this.min, max: t ? Ut(t.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
        }
        getThreshold(t) {
          let e = this.logarithmic, i = e ? e.lin2log(this.min) : this.min, s = e ? e.lin2log(this.max) : this.max;
          return t === null || t === -1 / 0 ? t = i : t === 1 / 0 ? t = s : i > t ? t = i : s < t && (t = s), this.translate(t, 0, 1, 0, 1);
        }
        autoLabelAlign(t) {
          let e = (ot(t, 0) - 90 * this.side + 720) % 360, i = { align: "center" };
          return Tt(this, "autoLabelAlign", i, function(s) {
            e > 15 && e < 165 ? s.align = "right" : e > 195 && e < 345 && (s.align = "left");
          }), i.align;
        }
        tickSize(t) {
          let e = this.options, i = ot(e[t === "tick" ? "tickWidth" : "minorTickWidth"], t === "tick" && this.isXAxis && !this.categories ? 1 : 0), s = e[t === "tick" ? "tickLength" : "minorTickLength"], r;
          i && s && (e[t + "Position"] === "inside" && (s = -s), r = [s, i]);
          let o = { tickSize: r };
          return Tt(this, "afterTickSize", o), o.tickSize;
        }
        labelMetrics() {
          let t = this.chart.renderer, e = this.ticks, i = e[Object.keys(e)[0]] || {};
          return this.chart.renderer.fontMetrics(i.label || i.movedLabel || t.box);
        }
        unsquish() {
          let t = this.options.labels, e = t.padding || 0, i = this.horiz, s = this.tickInterval, r = this.len / ((+!!this.categories + this.max - this.min) / s), o = t.rotation, n = Ut(0.8 * this.labelMetrics().h), l = Math.max(this.max - this.min, 0), d = function(b) {
            let M = (b + 2 * e) / (r || 1);
            return (M = M > 1 ? Math.ceil(M) : 1) * s > l && b !== 1 / 0 && r !== 1 / 0 && l && (M = Math.ceil(l / s)), Ut(M * s);
          }, m = s, c, f = Number.MAX_VALUE, x;
          if (i) {
            if (!t.staggerLines && (Q(o) ? x = [o] : r < t.autoRotationLimit && (x = t.autoRotation)), x) {
              let b, M;
              for (let k of x) (k === o || k && k >= -90 && k <= 90) && (M = (b = d(Math.abs(n / Math.sin(Na * k)))) + Math.abs(k / 360)) < f && (f = M, c = k, m = b);
            }
          } else m = d(0.75 * n);
          return this.autoRotation = x, this.labelRotation = ot(c, Q(o) ? o : 0), t.step ? s : m;
        }
        getSlotWidth(t) {
          let e = this.chart, i = this.horiz, s = this.options.labels, r = Math.max(this.tickPositions.length - !this.categories, 1), o = e.margin[3];
          if (t && Q(t.slotWidth)) return t.slotWidth;
          if (i && s.step < 2 && !this.isRadial) return s.rotation ? 0 : (this.staggerLines || 1) * this.len / r;
          if (!i) {
            let n = s.style.width;
            if (n !== void 0) return parseInt(String(n), 10);
            if (!this.opposite && o) return o - e.spacing[3];
          }
          return 0.33 * e.chartWidth;
        }
        renderUnsquish() {
          let t = this.chart, e = t.renderer, i = this.tickPositions, s = this.ticks, r = this.options.labels, o = r.style, n = this.horiz, l = this.getSlotWidth(), d = Math.max(1, Math.round(l - (n ? 2 * (r.padding || 0) : r.distance || 0))), m = {}, c = this.labelMetrics(), f = o.lineClamp, x, b = f ?? (Math.floor(this.len / (i.length * c.h)) || 1), M = 0;
          an(r.rotation) || (m.rotation = r.rotation || 0), i.forEach(function(k) {
            let v = s[k];
            v.movedLabel && v.replaceMovedLabel();
            let S = v.label?.textPxLength || 0;
            S > M && (M = S);
          }), this.maxLabelLength = M, this.autoRotation ? M > d && M > c.h ? m.rotation = this.labelRotation : this.labelRotation = 0 : l && (x = d), m.rotation && (x = M > 0.5 * t.chartHeight ? 0.33 * t.chartHeight : M, f || (b = 1)), this.labelAlign = r.align || this.autoLabelAlign(this.labelRotation), this.labelAlign && (m.align = this.labelAlign), i.forEach(function(k) {
            let v = s[k], S = v?.label, C = o.width, O = {};
            S && (S.attr(m), v.shortenLabel ? v.shortenLabel() : x && !C && o.whiteSpace !== "nowrap" && (x < (S.textPxLength || 0) || S.element.tagName === "SPAN") ? S.css(pi(O, { width: `${x}px`, lineClamp: b })) : !S.styles.width || O.width || C || S.css({ width: "auto" }), v.rotation = m.rotation);
          }, this), this.tickRotCorr = e.rotCorr(c.b, this.labelRotation || 0, this.side !== 0);
        }
        hasData() {
          return this.series.some(function(t) {
            return t.hasData();
          }) || this.options.showEmpty && yt(this.min) && yt(this.max);
        }
        addTitle(t) {
          let e, i = this.chart.renderer, s = this.horiz, r = this.opposite, o = this.options.title, n = this.chart.styledMode;
          this.axisTitle || ((e = o.textAlign) || (e = (s ? { low: "left", middle: "center", high: "right" } : { low: r ? "right" : "left", middle: "center", high: r ? "left" : "right" })[o.align]), this.axisTitle = i.text(o.text || "", 0, 0, o.useHTML).attr({ zIndex: 7, rotation: o.rotation || 0, align: e }).addClass("highcharts-axis-title"), n || this.axisTitle.css(Je(o.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), n || o.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }), this.axisTitle[t ? "show" : "hide"](t);
        }
        generateTick(t) {
          let e = this.ticks;
          e[t] ? e[t].addLabel() : e[t] = new ci(this, t);
        }
        createGroups() {
          let { axisParent: t, chart: e, coll: i, options: s } = this, r = e.renderer, o = (n, l, d) => r.g(n).attr({ zIndex: d }).addClass(`highcharts-${i.toLowerCase()}${l} ` + (this.isRadial ? `highcharts-radial-axis${l} ` : "") + (s.className || "")).add(t);
          this.axisGroup || (this.gridGroup = o("grid", "-grid", s.gridZIndex), this.axisGroup = o("axis", "", s.zIndex), this.labelGroup = o("axis-labels", "-labels", s.labels.zIndex));
        }
        getOffset() {
          let t = this, { chart: e, horiz: i, options: s, side: r, ticks: o, tickPositions: n, coll: l } = t, d = e.inverted && !t.isZAxis ? [1, 0, 3, 2][r] : r, m = t.hasData(), c = s.title, f = s.labels, x = Q(s.crossing), b = e.axisOffset, M = e.clipOffset, k = [-1, 1, 1, -1][r], v, S = 0, C, O = 0, L = 0, D, N;
          if (t.showAxis = v = m || s.showEmpty, t.staggerLines = t.horiz && f.staggerLines || void 0, t.createGroups(), m || t.isLinked ? (n.forEach(function(I) {
            t.generateTick(I);
          }), t.renderUnsquish(), t.reserveSpaceDefault = r === 0 || r === 2 || { 1: "left", 3: "right" }[r] === t.labelAlign, ot(f.reserveSpace, !x && null, t.labelAlign === "center" || null, t.reserveSpaceDefault) && n.forEach(function(I) {
            L = Math.max(o[I].getLabelSize(), L);
          }), t.staggerLines && (L *= t.staggerLines), t.labelOffset = L * (t.opposite ? -1 : 1)) : As(o, function(I, W) {
            I.destroy(), delete o[W];
          }), c?.text && c.enabled !== !1 && (t.addTitle(v), v && !x && c.reserveSpace !== !1 && (t.titleOffset = S = t.axisTitle.getBBox()[i ? "height" : "width"], O = yt(C = c.offset) ? 0 : ot(c.margin, i ? 5 : 10))), t.renderLine(), t.offset = k * ot(s.offset, b[r] ? b[r] + (s.margin || 0) : 0), t.tickRotCorr = t.tickRotCorr || { x: 0, y: 0 }, N = r === 0 ? -t.labelMetrics().h : r === 2 ? t.tickRotCorr.y : 0, D = Math.abs(L) + O, L && (D -= N, D += k * (i ? ot(f.y, t.tickRotCorr.y + k * f.distance) : ot(f.x, k * f.distance))), t.axisTitleMargin = ot(C, D), t.getMaxLabelDimensions && (t.maxLabelDimensions = t.getMaxLabelDimensions(o, n)), l !== "colorAxis" && M) {
            let I = this.tickSize("tick");
            b[r] = Math.max(b[r], (t.axisTitleMargin || 0) + S + k * t.offset, D, n?.length && I ? I[0] + k * t.offset : 0);
            let W = !t.axisLine || s.offset ? 0 : t.axisLine.strokeWidth() / 2;
            M[d] = Math.max(M[d], W);
          }
          Tt(this, "afterGetOffset");
        }
        getLinePath(t) {
          let e = this.chart, i = this.opposite, s = this.offset, r = this.horiz, o = this.left + (i ? this.width : 0) + s, n = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
          return i && (t *= -1), e.renderer.crispLine([["M", r ? this.left : o, r ? n : this.top], ["L", r ? e.chartWidth - this.right : o, r ? n : e.chartHeight - this.bottom]], t);
        }
        renderLine() {
          !this.axisLine && (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
        }
        getTitlePosition(t) {
          let e = this.horiz, i = this.left, s = this.top, r = this.len, o = this.options.title, n = e ? i : s, l = this.opposite, d = this.offset, m = o.x, c = o.y, f = this.chart.renderer.fontMetrics(t), x = t ? Math.max(t.getBBox(!1, 0).height - f.h - 1, 0) : 0, b = { low: n + (e ? 0 : r), middle: n + r / 2, high: n + (e ? r : 0) }[o.align], M = (e ? s + this.height : i) + (e ? 1 : -1) * (l ? -1 : 1) * (this.axisTitleMargin || 0) + [-x, x, f.f, -x][this.side], k = { x: e ? b + m : M + (l ? this.width : 0) + d + m, y: e ? M + c - (l ? this.height : 0) + d : b + c };
          return Tt(this, "afterGetTitlePosition", { titlePosition: k }), k;
        }
        renderMinorTick(t, e) {
          let i = this.minorTicks;
          i[t] || (i[t] = new ci(this, t, "minor")), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1);
        }
        renderTick(t, e, i) {
          let s = this.isLinked, r = this.ticks;
          (!s || t >= this.min && t <= this.max || this.grid?.isColumn) && (r[t] || (r[t] = new ci(this, t)), i && r[t].isNew && r[t].render(e, !0, -1), r[t].render(e));
        }
        render() {
          let t, e, i = this, s = i.chart, r = i.logarithmic, o = s.renderer, n = i.options, l = i.isLinked, d = i.tickPositions, m = i.axisTitle, c = i.ticks, f = i.minorTicks, x = i.alternateBands, b = n.stackLabels, M = n.alternateGridColor, k = n.crossing, v = i.tickmarkOffset, S = i.axisLine, C = i.showAxis, O = tn(o.globalAnimation);
          if (i.labelEdge.length = 0, i.overlap = !1, [c, f, x].forEach(function(L) {
            As(L, function(D) {
              D.isActive = !1;
            });
          }), Q(k)) {
            let L = this.isXAxis ? s.yAxis[0] : s.xAxis[0], D = [1, -1, -1, 1][this.side];
            if (L) {
              let N = L.toPixels(k, !0);
              i.horiz && (N = L.len - N), i.offset = D * N;
            }
          }
          if (i.hasData() || l) {
            let L = i.chart.hasRendered && i.old && Q(i.old.min);
            i.minorTickInterval && !i.categories && i.getMinorTickPositions().forEach(function(D) {
              i.renderMinorTick(D, L);
            }), d.length && (d.forEach(function(D, N) {
              i.renderTick(D, N, L);
            }), v && (i.min === 0 || i.single) && (c[-1] || (c[-1] = new ci(i, -1, null, !0)), c[-1].render(-1))), M && d.forEach(function(D, N) {
              e = d[N + 1] !== void 0 ? d[N + 1] + v : i.max - v, N % 2 == 0 && D < i.max && e <= i.max + (s.polar ? -v : v) && (x[D] || (x[D] = new X.PlotLineOrBand(i, {})), t = D + v, x[D].options = { from: r ? r.lin2log(t) : t, to: r ? r.lin2log(e) : e, color: M, className: "highcharts-alternate-grid" }, x[D].render(), x[D].isActive = !0);
            }), i._addedPlotLB || (i._addedPlotLB = !0, (n.plotLines || []).concat(n.plotBands || []).forEach(function(D) {
              i.addPlotBandOrLine(D);
            }));
          }
          [c, f, x].forEach(function(L) {
            let D = [], N = O.duration;
            As(L, function(I, W) {
              I.isActive || (I.render(W, !1, 0), I.isActive = !1, D.push(W));
            }), Ha(function() {
              let I = D.length;
              for (; I--; ) L[D[I]] && !L[D[I]].isActive && (L[D[I]].destroy(), delete L[D[I]]);
            }, L !== x && s.hasRendered && N ? N : 0);
          }), S && (S[S.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(S.strokeWidth()) }), S.isPlaced = !0, S[C ? "show" : "hide"](C)), m && C && (m[m.isNew ? "attr" : "animate"](i.getTitlePosition(m)), m.isNew = !1), b?.enabled && i.stacking && i.stacking.renderStackTotals(), i.old = { len: i.len, max: i.max, min: i.min, transA: i.transA, userMax: i.userMax, userMin: i.userMin }, i.isDirty = !1, Tt(this, "afterRender");
        }
        redraw() {
          this.visible && (this.render(), this.plotLinesAndBands.forEach(function(t) {
            t.render();
          })), this.series.forEach(function(t) {
            t.isDirty = !0;
          });
        }
        getKeepProps() {
          return this.keepProps || ui.keepProps;
        }
        destroy(t) {
          let e = this, i = e.plotLinesAndBands, s = this.eventOptions;
          if (Tt(this, "destroy", { keepEvents: t }), t || za(e), [e.ticks, e.minorTicks, e.alternateBands].forEach(function(r) {
            on(r);
          }), i) {
            let r = i.length;
            for (; r--; ) i[r].destroy();
          }
          for (let r in ["axisLine", "axisTitle", "axisGroup", "gridGroup", "labelGroup", "cross", "scrollbar"].forEach(function(o) {
            e[o] && (e[o] = e[o].destroy());
          }), e.plotLinesAndBandsGroups) e.plotLinesAndBandsGroups[r] = e.plotLinesAndBandsGroups[r].destroy();
          As(e, function(r, o) {
            e.getKeepProps().indexOf(o) === -1 && delete e[o];
          }), this.eventOptions = s;
        }
        drawCrosshair(t, e) {
          let i = this.crosshair, s = i?.snap ?? !0, r = this.chart, o, n, l, d = this.cross, m;
          if (Tt(this, "drawCrosshair", { e: t, point: e }), t || (t = this.cross?.e), i && (yt(e) || !s) !== !1) {
            if (s ? yt(e) && (n = ot(this.coll !== "colorAxis" ? e.crosshairPos : null, this.isXAxis ? e.plotX : this.len - e.plotY)) : n = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), yt(n) && (m = { value: e && (this.isXAxis ? e.x : ot(e.stackY, e.y)), translatedValue: n }, r.polar && pi(m, { isCrosshair: !0, chartX: t?.chartX, chartY: t?.chartY, point: e }), o = this.getPlotLinePath(m) || null), !yt(o)) return void this.hideCrosshair();
            l = this.categories && !this.isRadial, d || (this.cross = d = r.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (l ? "category " : "thin ") + (i.className || "")).attr({ zIndex: ot(i.zIndex, 2) }).add(), !r.styledMode && (d.attr({ stroke: i.color || (l ? bt.parse("#ccd3ff").setOpacity(0.25).get() : "#cccccc"), "stroke-width": ot(i.width, 1) }).css({ "pointer-events": "none" }), i.dashStyle && d.attr({ dashstyle: i.dashStyle }))), d.show().attr({ d: o }), l && !i.width && d.attr({ "stroke-width": this.transA }), this.cross.e = t;
          } else this.hideCrosshair();
          Tt(this, "afterDrawCrosshair", { e: t, point: e });
        }
        hideCrosshair() {
          this.cross && this.cross.hide(), Tt(this, "afterHideCrosshair");
        }
        update(t, e) {
          let i = this.chart;
          t = Je(this.userOptions, t), this.destroy(!0), this.init(i, t), i.isDirtyBox = !0, ot(e, !0) && i.redraw();
        }
        remove(t) {
          let e = this.chart, i = this.coll, s = this.series, r = s.length;
          for (; r--; ) s[r] && s[r].remove(!1);
          Lr(e.axes, this), Lr(e[i] || [], this), e.orderItems(i), this.destroy(), e.isDirtyBox = !0, ot(t, !0) && e.redraw();
        }
        setTitle(t, e) {
          this.update({ title: t }, e);
        }
        setCategories(t, e) {
          this.update({ categories: t }, e);
        }
      }
      ui.keepProps = ["coll", "extKey", "hcEvents", "len", "names", "series", "userMax", "userMin"];
      let { addEvent: Ce, getMagnitude: Wa, normalizeTickInterval: Xa, timeUnits: Ss } = $;
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
          return s.keepProps.includes("dateTime") || (s.keepProps.push("dateTime"), s.prototype.getTimeTicks = t, Ce(s, "afterSetType", e)), s;
        };
        class i {
          constructor(r) {
            this.axis = r;
          }
          normalizeTimeTickInterval(r, o) {
            let n = o || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], l = n[n.length - 1], d = Ss[l[0]], m = l[1], c;
            for (c = 0; c < n.length && (d = Ss[(l = n[c])[0]], m = l[1], !n[c + 1] || !(r <= (d * m[m.length - 1] + Ss[n[c + 1][0]]) / 2)); c++) ;
            d === Ss.year && r < 5 * d && (m = [1, 2, 5]);
            let f = Xa(r / d, m, l[0] === "year" ? Math.max(Wa(r / d), 1) : 1);
            return { unitRange: d, count: f, unitName: l[0] };
          }
          getXDateFormat(r, o) {
            let { axis: n } = this, l = n.chart.time;
            return n.closestPointRange ? l.getDateFormat(n.closestPointRange, r, n.options.startOfWeek, o) || l.resolveDTLFormat(o.year).main : l.resolveDTLFormat(o.day).main;
          }
        }
        h.Additions = i;
      })(Ne || (Ne = {}));
      let Ga = Ne, { addEvent: Br, normalizeTickInterval: ji, pick: Ui } = $;
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
          return s.keepProps.includes("logarithmic") || (s.keepProps.push("logarithmic"), Br(s, "afterSetType", t), Br(s, "afterInit", e)), s;
        };
        class i {
          constructor(r) {
            this.axis = r;
          }
          getLogTickPositions(r, o, n, l) {
            let d = this.axis, m = d.len, c = d.options, f = [];
            if (l || (this.minorAutoInterval = void 0), r >= 0.5) r = Math.round(r), f = d.getLinearTickPositions(r, o, n);
            else if (r >= 0.08) {
              let x, b, M, k, v, S, C, O = Math.floor(o);
              for (x = r > 0.3 ? [1, 2, 4] : r > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], b = O; b < n + 1 && !C; b++) for (M = 0, k = x.length; M < k && !C; M++) (v = this.log2lin(this.lin2log(b) * x[M])) > o && (!l || S <= n) && S !== void 0 && f.push(S), S > n && (C = !0), S = v;
            } else {
              let x = this.lin2log(o), b = this.lin2log(n), M = l ? d.getMinorTickInterval() : c.tickInterval, k = c.tickPixelInterval / (l ? 5 : 1), v = l ? m / d.tickPositions.length : m;
              r = ji(r = Ui(M === "auto" ? null : M, this.minorAutoInterval, (b - x) * k / (v || 1))), f = d.getLinearTickPositions(r, x, b).map(this.log2lin), l || (this.minorAutoInterval = r / 5);
            }
            return l || (d.tickInterval = r), f;
          }
          lin2log(r) {
            return Math.pow(10, r);
          }
          log2lin(r) {
            return Math.log(r) / Math.LN10;
          }
        }
        h.Additions = i;
      })(Rs || (Rs = {}));
      let Cs = Rs, { erase: ln, extend: Nr, isNumber: Es } = $;
      (function(h) {
        let t;
        function e(d) {
          return this.addPlotBandOrLine(d, "plotBands");
        }
        function i(d, m) {
          let c = this.userOptions, f = new t(this, d);
          if (this.visible && (f = f.render()), f) {
            if (this._addedPlotLB || (this._addedPlotLB = !0, (c.plotLines || []).concat(c.plotBands || []).forEach((x) => {
              this.addPlotBandOrLine(x);
            })), m) {
              let x = c[m] || [];
              x.push(d), c[m] = x;
            }
            this.plotLinesAndBands.push(f);
          }
          return f;
        }
        function s(d) {
          return this.addPlotBandOrLine(d, "plotLines");
        }
        function r(d, m, c) {
          c = c || this.options;
          let f = this.getPlotLinePath({ value: m, force: !0, acrossPanes: c.acrossPanes }), x = [], b = this.horiz, M = !Es(this.min) || !Es(this.max) || d < this.min && m < this.min || d > this.max && m > this.max, k = this.getPlotLinePath({ value: d, force: !0, acrossPanes: c.acrossPanes }), v, S = 1, C;
          if (k && f) for (M && (C = k.toString() === f.toString(), S = 0), v = 0; v < k.length; v += 2) {
            let O = k[v], L = k[v + 1], D = f[v], N = f[v + 1];
            (O[0] === "M" || O[0] === "L") && (L[0] === "M" || L[0] === "L") && (D[0] === "M" || D[0] === "L") && (N[0] === "M" || N[0] === "L") && (b && D[1] === O[1] ? (D[1] += S, N[1] += S) : b || D[2] !== O[2] || (D[2] += S, N[2] += S), x.push(["M", O[1], O[2]], ["L", L[1], L[2]], ["L", N[1], N[2]], ["L", D[1], D[2]], ["Z"])), x.isFlat = C;
          }
          return x;
        }
        function o(d) {
          this.removePlotBandOrLine(d);
        }
        function n(d) {
          let m = this.plotLinesAndBands, c = this.options, f = this.userOptions;
          if (m) {
            let x = m.length;
            for (; x--; ) m[x].id === d && m[x].destroy();
            [c.plotLines || [], f.plotLines || [], c.plotBands || [], f.plotBands || []].forEach(function(b) {
              for (x = b.length; x--; ) b[x]?.id === d && ln(b, b[x]);
            });
          }
        }
        function l(d) {
          this.removePlotBandOrLine(d);
        }
        h.compose = function(d, m) {
          let c = m.prototype;
          return c.addPlotBand || (t = d, Nr(c, { addPlotBand: e, addPlotLine: s, addPlotBandOrLine: i, getPlotBandPath: r, removePlotBand: o, removePlotLine: l, removePlotBandOrLine: n })), m;
        };
      })(zs || (zs = {}));
      let hn = zs, { addEvent: Ya, arrayMax: dn, arrayMin: Rr, defined: fe, destroyObjectProperties: zr, erase: ja, fireEvent: Ua, merge: cn, objectEach: Fr, pick: Va } = $;
      class Qe {
        static compose(t, e) {
          return Ya(t, "afterInit", function() {
            this.labelCollectors.push(() => {
              let i = [];
              for (let s of this.axes) for (let { label: r, options: o } of s.plotLinesAndBands) r && !o?.label?.allowOverlap && i.push(r);
              return i;
            });
          }), hn.compose(Qe, e);
        }
        constructor(t, e) {
          this.axis = t, this.options = e, this.id = e.id;
        }
        render() {
          Ua(this, "render");
          let { axis: t, options: e } = this, { horiz: i, logarithmic: s } = t, { color: r, events: o, zIndex: n = 0 } = e, { renderer: l, time: d } = t.chart, m = {}, c = d.parse(e.to), f = d.parse(e.from), x = d.parse(e.value), b = e.borderWidth, M = e.label, { label: k, svgElem: v } = this, S = [], C, O = fe(f) && fe(c), L = fe(x), D = !v, N = { class: "highcharts-plot-" + (O ? "band " : "line ") + (e.className || "") }, I = O ? "bands" : "lines";
          if (!t.chart.styledMode && (L ? (N.stroke = r || "#999999", N["stroke-width"] = Va(e.width, 1), e.dashStyle && (N.dashstyle = e.dashStyle)) : O && (N.fill = r || "#e6e9ff", b && (N.stroke = e.borderColor, N["stroke-width"] = b))), m.zIndex = n, I += "-" + n, (C = t.plotLinesAndBandsGroups[I]) || (t.plotLinesAndBandsGroups[I] = C = l.g("plot-" + I).attr(m).add()), v || (this.svgElem = v = l.path().attr(N).add(C)), fe(x)) S = t.getPlotLinePath({ value: s?.log2lin(x) ?? x, lineWidth: v.strokeWidth(), acrossPanes: e.acrossPanes });
          else {
            if (!(fe(f) && fe(c))) return;
            S = t.getPlotBandPath(s?.log2lin(f) ?? f, s?.log2lin(c) ?? c, e);
          }
          return !this.eventsAdded && o && (Fr(o, (W, Y) => {
            v?.on(Y, (H) => {
              o[Y].apply(this, [H]);
            });
          }), this.eventsAdded = !0), (D || !v.d) && S?.length ? v.attr({ d: S }) : v && (S ? (v.show(), v.animate({ d: S })) : v.d && (v.hide(), k && (this.label = k = k.destroy()))), M && (fe(M.text) || fe(M.formatter)) && S?.length && t.width > 0 && t.height > 0 && !S.isFlat ? (M = cn({ align: i && O ? "center" : void 0, x: i ? !O && 4 : 10, verticalAlign: !i && O ? "middle" : void 0, y: i ? O ? 16 : 10 : O ? 6 : -4, rotation: i && !O ? 90 : 0, ...O ? { inside: !0 } : {} }, M), this.renderLabel(M, S, O, n)) : k && k.hide(), this;
        }
        renderLabel(t, e, i, s) {
          let r = this.axis, o = r.chart.renderer, n = t.inside, l = this.label;
          l || (this.label = l = o.text(this.getLabelText(t), 0, 0, t.useHTML).attr({ align: t.textAlign || t.align, rotation: t.rotation, class: "highcharts-plot-" + (i ? "band" : "line") + "-label " + (t.className || ""), zIndex: s }), r.chart.styledMode || l.css(cn({ color: r.chart.options.title?.style?.color, fontSize: "0.8em", textOverflow: i && !n ? "" : "ellipsis" }, t.style)), l.add());
          let d = e.xBounds || [e[0][1], e[1][1], i ? e[2][1] : e[0][1]], m = e.yBounds || [e[0][2], e[1][2], i ? e[2][2] : e[0][2]], c = Rr(d), f = Rr(m), x = dn(d) - c;
          l.align(t, !1, { x: c, y: f, width: x, height: dn(m) - f }), l.alignAttr.y -= o.fontMetrics(l).b, (!l.alignValue || l.alignValue === "left" || fe(n)) && l.css({ width: (t.style?.width || (i && n ? x : l.rotation === 90 ? r.height - (l.alignAttr.y - r.top) : (t.clip ? r.width : r.chart.chartWidth) - (l.alignAttr.x - r.left))) + "px" }), l.show(!0);
        }
        getLabelText(t) {
          return fe(t.formatter) ? t.formatter.call(this) : t.text;
        }
        destroy() {
          ja(this.axis.plotLinesAndBands, this), delete this.axis, zr(this);
        }
      }
      let { animObject: pn } = It, { format: un } = jt, { composed: Ps, dateFormats: qa, doc: Hr, isSafari: Wr } = X, { distribute: Ka } = ps, { addEvent: $a, clamp: gi, css: Ue, discardElement: Za, extend: Xr, fireEvent: Os, getAlignFactor: gn, isArray: Gr, isNumber: mn, isObject: ie, isString: Yr, merge: u, pick: a, pushUnique: p, splat: g, syncTimeout: y } = $;
      class A {
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
          this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(!0), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), Za(this.container)), $.clearTimeout(this.hideTimer);
        }
        getAnchor(t, e) {
          let i, { chart: s, pointer: r } = this, o = s.inverted, n = s.plotTop, l = s.plotLeft;
          if (t = g(t), t[0].series?.yAxis && !t[0].series.yAxis.options.reversedStacks && (t = t.slice().reverse()), this.followPointer && e) e.chartX === void 0 && (e = r.normalize(e)), i = [e.chartX - l, e.chartY - n];
          else if (t[0].tooltipPos) i = t[0].tooltipPos;
          else {
            let m = 0, c = 0;
            t.forEach(function(f) {
              let x = f.pos(!0);
              x && (m += x[0], c += x[1]);
            }), m /= t.length, c /= t.length, this.shared && t.length > 1 && e && (o ? m = e.chartX : c = e.chartY), i = [m - l, c - n];
          }
          let d = { point: t[0], ret: i };
          return Os(this, "getAnchor", d), d.ret.map(Math.round);
        }
        getClassName(t, e, i) {
          let s = this.options, r = t.series, o = r.options;
          return [s.className, "highcharts-label", i && "highcharts-tooltip-header", e ? "highcharts-tooltip-box" : "highcharts-tooltip", !i && "highcharts-color-" + a(t.colorIndex, r.colorIndex), o?.className].filter(Yr).join(" ");
        }
        getLabel({ anchorX: t, anchorY: e } = { anchorX: 0, anchorY: 0 }) {
          let i = this, s = this.chart.styledMode, r = this.options, o = this.split && this.allowShared, n = this.container, l = this.chart.renderer;
          if (this.label) {
            let d = !this.label.hasClass("highcharts-label");
            (!o && d || o && !d) && this.destroy();
          }
          if (!this.label) {
            if (this.outside) {
              let d = this.chart, m = d.options.chart.style, c = Ii.getRendererType();
              this.container = n = X.doc.createElement("div"), n.className = "highcharts-tooltip-container " + (d.renderTo.className.match(/(highcharts[a-zA-Z0-9-]+)\s?/gm) || ""), Ue(n, { position: "absolute", top: "1px", pointerEvents: "none", zIndex: Math.max(this.options.style.zIndex || 0, (m?.zIndex || 0) + 3) }), this.renderer = l = new c(n, 0, 0, m, void 0, void 0, l.styledMode);
            }
            if (o ? this.label = l.g("tooltip") : (this.label = l.label("", t, e, r.shape || "callout", void 0, void 0, r.useHTML, void 0, "tooltip").attr({ padding: r.padding, r: r.borderRadius }), s || this.label.attr({ fill: r.backgroundColor, "stroke-width": r.borderWidth || 0 }).css(r.style).css({ pointerEvents: r.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none") })), i.outside) {
              let d = this.label;
              [d.xSetter, d.ySetter].forEach((m, c) => {
                d[c ? "ySetter" : "xSetter"] = (f) => {
                  m.call(d, i.distance), d[c ? "y" : "x"] = f, n && (n.style[c ? "top" : "left"] = `${f}px`);
                };
              });
            }
            this.label.attr({ zIndex: 8 }).shadow(r.shadow ?? !r.fixed).add();
          }
          return n && !n.parentElement && X.doc.body.appendChild(n), this.label;
        }
        getPlayingField() {
          let { body: t, documentElement: e } = Hr, { chart: i, distance: s, outside: r } = this;
          return { width: r ? Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth) - 2 * s - 2 : i.chartWidth, height: r ? Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight) : i.chartHeight };
        }
        getPosition(t, e, i) {
          let { distance: s, chart: r, outside: o, pointer: n } = this, { inverted: l, plotLeft: d, plotTop: m, polar: c } = r, { plotX: f = 0, plotY: x = 0 } = i, b = {}, M = l && i.h || 0, { height: k, width: v } = this.getPlayingField(), S = n.getChartPosition(), C = (j) => j * S.scaleX, O = (j) => j * S.scaleY, L = (j) => {
            let q = j === "x";
            return [j, q ? v : k, q ? t : e].concat(o ? [q ? C(t) : O(e), q ? S.left - s + C(f + d) : S.top - s + O(x + m), 0, q ? v : k] : [q ? t : e, q ? f + d : x + m, q ? d : m, q ? d + r.plotWidth : m + r.plotHeight]);
          }, D = L("y"), N = L("x"), I, W = !!i.negative;
          !c && r.hoverSeries?.yAxis?.reversed && (W = !W);
          let Y = !this.followPointer && a(i.ttBelow, !c && !l === W), H = function(j, q, _, vt, ht, $t, st) {
            let it = o ? j === "y" ? O(s) : C(s) : s, ut = (_ - vt) / 2, at = vt < ht - s, wt = ht + s + vt < q, kt = ht - it - _ + ut, mt = ht + it - ut;
            if (Y && wt) b[j] = mt;
            else if (!Y && at) b[j] = kt;
            else if (at) b[j] = Math.min(st - vt, kt - M < 0 ? kt : kt - M);
            else {
              if (!wt) return b[j] = 0, !1;
              b[j] = Math.max($t, mt + M + _ > q ? mt : mt + M);
            }
          }, V = function(j, q, _, vt, ht) {
            if (ht < s || ht > q - s) return !1;
            ht < _ / 2 ? b[j] = 1 : ht > q - vt / 2 ? b[j] = q - vt - 2 : b[j] = ht - _ / 2;
          }, Z = function(j) {
            [D, N] = [N, D], I = j;
          }, J = () => {
            H.apply(0, D) !== !1 ? V.apply(0, N) !== !1 || I || (Z(!0), J()) : I ? b.x = b.y = 0 : (Z(!0), J());
          };
          return (l && !c || this.len > 1) && Z(), J(), b;
        }
        getFixedPosition(t, e, i) {
          let s = i.series, { chart: r, options: o, split: n } = this, l = o.position, d = l.relativeTo, m = o.shared || s?.yAxis?.isRadial && (d === "pane" || !d) ? "plotBox" : d, c = m === "chart" ? r.renderer : r[m] || r.getClipBox(s, !0);
          return { x: c.x + (c.width - t) * gn(l.align) + l.x, y: c.y + (c.height - e) * gn(l.verticalAlign) + (!n && l.y || 0) };
        }
        hide(t) {
          let e = this;
          $.clearTimeout(this.hideTimer), t = a(t, this.options.hideDelay), this.isHidden || (this.hideTimer = y(function() {
            let i = e.getLabel();
            e.getLabel().animate({ opacity: 0 }, { duration: t && 150, complete: () => {
              i.hide(), e.container && e.container.remove();
            } }), e.isHidden = !0;
          }, t));
        }
        init(t, e) {
          this.chart = t, this.options = e, this.crosshairs = [], this.isHidden = !0, this.split = e.split && !t.inverted && !t.polar, this.shared = e.shared || this.split, this.outside = a(e.outside, !!(t.scrollablePixelsX || t.scrollablePixelsY));
        }
        shouldStickOnContact(t) {
          return !!(!this.followPointer && this.options.stickOnContact && (!t || this.pointer.inClass(t.target, "highcharts-tooltip")));
        }
        move(t, e, i, s) {
          let { followPointer: r, options: o } = this, n = pn(!r && !this.isHidden && !o.fixed && o.animation), l = r || (this.len || 0) > 1, d = { x: t, y: e };
          l ? d.anchorX = d.anchorY = NaN : (d.anchorX = i, d.anchorY = s), n.step = () => this.drawTracker(), this.getLabel().animate(d, n);
        }
        refresh(t, e) {
          let { chart: i, options: s, pointer: r, shared: o } = this, n = g(t), l = n[0], d = s.format, m = s.formatter || this.defaultFormatter, c = i.styledMode, f = this.allowShared;
          if (!s.enabled || !l.series) return;
          $.clearTimeout(this.hideTimer), this.allowShared = !(!Gr(t) && t.series && t.series.noSharedTooltip), f = f && !this.allowShared, this.followPointer = !this.split && l.series.tooltipOptions.followPointer;
          let x = this.getAnchor(t, e), b = x[0], M = x[1];
          o && this.allowShared && (r.applyInactiveState(n), n.forEach((S) => S.setState("hover")), l.points = n), this.len = n.length;
          let k = Yr(d) ? un(d, l, i) : m.call(l, this);
          l.points = void 0;
          let v = l.series;
          if (this.distance = a(v.tooltipOptions.distance, 16), k === !1) this.hide();
          else {
            if (this.split && this.allowShared) this.renderSplit(k, n);
            else {
              let S = b, C = M;
              if (e && r.isDirectTouch && (S = e.chartX - i.plotLeft, C = e.chartY - i.plotTop), !(i.polar || v.options.clip === !1 || n.some((O) => r.isDirectTouch || O.series.shouldShowTooltip(S, C)))) return void this.hide();
              {
                let O = this.getLabel(f && this.tt || {});
                (!s.style.width || c) && O.css({ width: (this.outside ? this.getPlayingField() : i.spacingBox).width + "px" }), O.attr({ class: this.getClassName(l), text: k && k.join ? k.join("") : k }), this.outside && O.attr({ x: gi(O.x || 0, 0, this.getPlayingField().width - (O.width || 0) - 1) }), c || O.attr({ stroke: s.borderColor || l.color || v.color || "#666666" }), this.updatePosition({ plotX: b, plotY: M, negative: l.negative, ttBelow: l.ttBelow, series: v, h: x[2] || 0 });
              }
            }
            this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(), this.isHidden = !1;
          }
          Os(this, "refresh");
        }
        renderSplit(t, e) {
          let i = this, { chart: s, chart: { chartWidth: r, chartHeight: o, plotHeight: n, plotLeft: l, plotTop: d, scrollablePixelsY: m = 0, scrollablePixelsX: c, styledMode: f }, distance: x, options: b, options: { fixed: M, position: k, positioner: v }, pointer: S } = i, { scrollLeft: C = 0, scrollTop: O = 0 } = s.scrollablePlotArea?.scrollingContainer || {}, L = i.outside && typeof c != "number" ? Hr.documentElement.getBoundingClientRect() : { left: C, right: C + r }, D = i.getLabel(), N = this.renderer || s.renderer, I = !!s.xAxis[0]?.opposite, { left: W, top: Y } = S.getChartPosition(), H = v || M, V = d + O, Z = 0, J = n - m, j = function(st, it, ut, at = [0, 0], wt = !0) {
            let kt, mt;
            if (ut.isHeader) mt = I ? 0 : J, kt = gi(at[0] - st / 2, L.left, L.right - st - (i.outside ? W : 0));
            else if (M && ut) {
              let Pt = i.getFixedPosition(st, it, ut);
              kt = Pt.x, mt = Pt.y - V;
            } else mt = at[1] - V, kt = gi(kt = wt ? at[0] - st - x : at[0] + x, wt ? kt : L.left, L.right);
            return { x: kt, y: mt };
          };
          Yr(t) && (t = [!1, t]);
          let q = t.slice(0, e.length + 1).reduce(function(st, it, ut) {
            if (it !== !1 && it !== "") {
              let at = e[ut - 1] || { isHeader: !0, plotX: e[0].plotX, plotY: n, series: {} }, wt = at.isHeader, kt = wt ? i : at.series, mt = kt.tt = (function(De, _t, Ke) {
                let ki = De, { isHeader: Zi, series: eo } = _t, Ie = eo.tooltipOptions || b;
                if (!ki) {
                  let Ns = { padding: Ie.padding, r: Ie.borderRadius };
                  f || (Ns.fill = Ie.backgroundColor, Ns["stroke-width"] = Ie.borderWidth ?? (M && !Zi ? 0 : 1)), ki = N.label("", 0, 0, Ie[Zi ? "headerShape" : "shape"] || (M && !Zi ? "rect" : "callout"), void 0, void 0, Ie.useHTML).addClass(i.getClassName(_t, !0, Zi)).attr(Ns).add(D);
                }
                return ki.isActive = !0, ki.attr({ text: Ke }), f || ki.css(Ie.style).attr({ stroke: Ie.borderColor || _t.color || eo.color || "#333333" }), ki;
              })(kt.tt, at, it.toString()), Pt = mt.getBBox(), Zt = Pt.width + mt.strokeWidth();
              wt && (Z = Pt.height, J += Z, I && (V -= Z));
              let { anchorX: re, anchorY: wi } = (function(De) {
                let _t, Ke, { isHeader: ki, plotX: Zi = 0, plotY: eo = 0, series: Ie } = De;
                if (ki) _t = Math.max(l + Zi, l), Ke = d + n / 2;
                else {
                  let { xAxis: Ns, yAxis: Kh } = Ie;
                  _t = Ns.pos + gi(Zi, -x, Ns.len + x), Ie.shouldShowTooltip(0, Kh.pos - d + eo, { ignoreX: !0 }) && (Ke = Kh.pos + eo);
                }
                return { anchorX: _t = gi(_t, L.left - x, L.right + x), anchorY: Ke };
              })(at);
              if (typeof wi == "number") {
                let De = Pt.height + 1, _t = (v || j).call(i, Zt, De, at, [re, wi]);
                st.push({ align: H ? 0 : void 0, anchorX: re, anchorY: wi, boxWidth: Zt, point: at, rank: a(_t.rank, +!!wt), size: De, target: _t.y, tt: mt, x: _t.x });
              } else mt.isActive = !1;
            }
            return st;
          }, []);
          !H && q.some((st) => {
            let { outside: it } = i, ut = (it ? W : 0) + st.anchorX;
            return ut < L.left && ut + st.boxWidth < L.right || ut < W - L.left + st.boxWidth && L.right - ut > ut;
          }) && (q = q.map((st) => {
            let { x: it, y: ut } = j.call(this, st.boxWidth, st.size, st.point, [st.anchorX, st.anchorY], !1);
            return Xr(st, { target: ut, x: it });
          })), i.cleanSplit(), Ka(q, J);
          let _ = { left: W, right: W };
          q.forEach(function(st) {
            let { x: it, boxWidth: ut, isHeader: at } = st;
            !at && (i.outside && W + it < _.left && (_.left = W + it), !at && i.outside && _.left + ut > _.right && (_.right = W + it));
          }), q.forEach(function(st) {
            let { x: it, anchorX: ut, anchorY: at, pos: wt, point: { isHeader: kt } } = st, mt = { visibility: wt === void 0 ? "hidden" : "inherit", x: it, y: (wt || 0) + V + (M && k.y || 0), anchorX: ut, anchorY: at };
            if (i.outside && it < ut) {
              let Pt = W - _.left;
              Pt > 0 && (kt || (mt.x = it + Pt, mt.anchorX = ut + Pt), kt && (mt.x = (_.right - _.left) / 2, mt.anchorX = ut + Pt));
            }
            st.tt.attr(mt);
          });
          let { container: vt, outside: ht, renderer: $t } = i;
          if (ht && vt && $t) {
            let { width: st, height: it, x: ut, y: at } = D.getBBox();
            $t.setSize(st + ut, it + at, !1), vt.style.left = _.left + "px", vt.style.top = Y + "px";
          }
          Wr && D.attr({ opacity: D.opacity === 1 ? 0.999 : 1 });
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
          let i = t.series, s = i.tooltipOptions, r = i.xAxis, o = r?.dateTime, n = { isFooter: e, point: t }, l = s.xDateFormat || "", d = s[e ? "footerFormat" : "headerFormat"];
          return Os(this, "headerFormatter", n, function(m) {
            if (o && !l && mn(t.key) && (l = o.getXDateFormat(t.key, s.dateTimeLabelFormats)), o && l) {
              if (ie(l)) {
                let c = l;
                qa[0] = (f) => i.chart.time.dateFormat(c, f), l = "%0";
              }
              (t.tooltipDateKeys || ["key"]).forEach((c) => {
                d = d.replace(RegExp("point\\." + c + "([ \\)}])"), `(point.${c}:${l})$1`);
              });
            }
            i.chart.styledMode && (d = this.styledModeFormat(d)), m.text = un(d, t, this.chart);
          }), n.text || "";
        }
        update(t) {
          this.destroy(), this.init(this.chart, u(!0, this.options, t));
        }
        updatePosition(t) {
          let { chart: e, container: i, distance: s, options: r, pointer: o, renderer: n } = this, { height: l = 0, width: d = 0 } = this.getLabel(), { fixed: m, positioner: c } = r, { left: f, top: x, scaleX: b, scaleY: M } = o.getChartPosition(), k = (c || m && this.getFixedPosition || this.getPosition).call(this, d, l, t), v = X.doc, S = (t.plotX || 0) + e.plotLeft, C = (t.plotY || 0) + e.plotTop, O;
          if (n && i) {
            if (c || m) {
              let { scrollLeft: L = 0, scrollTop: D = 0 } = e.scrollablePlotArea?.scrollingContainer || {};
              k.x += L + f - s, k.y += D + x - s;
            }
            O = (r.borderWidth || 0) + 2 * s + 2, n.setSize(gi(d + O, 0, v.documentElement.clientWidth) - 1, l + O, !1), (b !== 1 || M !== 1) && (Ue(i, { transform: `scale(${b}, ${M})` }), S *= b, C *= M), S += f - k.x, C += x - k.y;
          }
          this.move(Math.round(k.x), Math.round(k.y || 0), S, C);
        }
      }
      (function(h) {
        h.compose = function(t) {
          p(Ps, "Core.Tooltip") && $a(t, "afterInit", function() {
            let e = this.chart;
            e.options.tooltip && (e.tooltip = new h(e, e.options.tooltip, this));
          });
        };
      })(A || (A = {}));
      let w = A, { animObject: T } = It, { defaultOptions: E } = qt, { format: P } = jt, { addEvent: B, crisp: z, erase: R, extend: F, fireEvent: G, getNestedProperty: U, isArray: ct, isFunction: nt, isNumber: rt, isObject: lt, merge: tt, pick: et, syncTimeout: ft, removeEvent: xt, uniqueKey: zt } = $;
      class St {
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
          return F(this, t = St.prototype.optionsToObject.call(this, t)), this.options = this.options ? F(this.options, t) : t, t.group && delete this.group, t.dataLabels && delete this.dataLabels, s && (this.y = St.prototype.getNestedProperty.call(this, s)), this.selected && (this.state = "select"), "name" in this && e === void 0 && i.xAxis && i.xAxis.hasNames && (this.x = i.xAxis.nameToX(this)), this.x === void 0 && i ? this.x = e ?? i.autoIncrement() : rt(t.x) && i.options.relativeXValue ? this.x = i.autoIncrement(t.x) : typeof this.x == "string" && (e ?? (e = i.chart.time.parse(this.x)), rt(e) && (this.x = e)), this.isNull = this.isValid && !this.isValid(), this.formatPrefix = this.isNull ? "null" : "point", this;
        }
        destroy() {
          if (!this.destroyed) {
            let t = this, e = t.series, i = e.chart, s = e.options.dataSorting, r = i.hoverPoints, o = T(t.series.chart.renderer.globalAnimation), n = () => {
              for (let l in (t.graphic || t.graphics || t.dataLabel || t.dataLabels) && (xt(t), t.destroyElements()), t) delete t[l];
            };
            t.legendItem && i.legend.destroyItem(t), r && (t.setState(), R(r, t), r.length || (i.hoverPoints = null)), t === i.hoverPoint && t.onMouseOut(), s?.enabled ? (this.animateBeforeDestroy(), ft(n, o.duration)) : n(), i.pointCount--;
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
          return ["graphic", "dataLabel"].forEach(function(n) {
            let l = n + "s";
            t[n] && s[l] && o.plural.push(l);
          }), o;
        }
        getNestedProperty(t) {
          if (t) return t.indexOf("custom.") === 0 ? U(t, this.options) : this[t];
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
          this.formatPrefix = "point", this.visible = !0, this.point = this, this.series = t, this.applyOptions(e, i), this.id ?? (this.id = zt()), this.resolveColor(), this.dataLabelOnNull ?? (this.dataLabelOnNull = t.options.nullInteraction), t.chart.pointCount++, G(this, "afterInit");
        }
        isValid() {
          return (rt(this.x) || this.x instanceof Date) && rt(this.y);
        }
        optionsToObject(t) {
          let e = this.series, i = e.options.keys, s = i || e.pointArrayMap || ["y"], r = s.length, o = {}, n, l = 0, d = 0;
          if (rt(t) || t === null) o[s[0]] = t;
          else if (ct(t)) for (!i && t.length > r && ((n = typeof t[0]) == "string" ? e.xAxis?.dateTime ? o.x = e.chart.time.parse(t[0]) : o.name = t[0] : n === "number" && (o.x = t[0]), l++); d < r; ) i && t[l] === void 0 || (s[d].indexOf(".") > 0 ? St.prototype.setNestedProperty(o, t[l], s[d]) : o[s[d]] = t[l]), l++, d++;
          else typeof t == "object" && (o = t, t.dataLabels && (e.hasDataLabels = () => !0), t.marker && (e._hasPointMarkers = !0));
          return o;
        }
        pos(t, e = this.plotY) {
          if (!this.destroyed) {
            let { plotX: i, series: s } = this, { chart: r, xAxis: o, yAxis: n } = s, l = 0, d = 0;
            if (rt(i) && rt(e)) return t && (l = o ? o.pos : r.plotLeft, d = n ? n.pos : r.plotTop), r.inverted && o && n ? [n.len - e + d, o.len - i + l] : [i + l, e + d];
          }
        }
        resolveColor() {
          let t = this.series, e = t.chart.options.chart, i = t.chart.styledMode, s, r, o = e.colorCount, n;
          delete this.nonZonedColor, t.options.colorByPoint ? (i || (s = (r = t.options.colors || t.chart.options.colors)[t.colorCounter], o = r.length), n = t.colorCounter, t.colorCounter++, t.colorCounter === o && (t.colorCounter = 0)) : (i || (s = t.color), n = t.colorIndex), this.colorIndex = et(this.options.colorIndex, n), this.color = et(this.options.color, s);
        }
        setNestedProperty(t, e, i) {
          return i.split(".").reduce(function(s, r, o, n) {
            let l = n.length - 1 === o;
            return s[r] = l ? e : lt(s[r], !0) ? s[r] : {}, s[r];
          }, t), t;
        }
        shouldDraw() {
          return !this.isNull;
        }
        tooltipFormatter(t) {
          let { chart: e, pointArrayMap: i = ["y"], tooltipOptions: s } = this.series, { valueDecimals: r = "", valuePrefix: o = "", valueSuffix: n = "" } = s;
          return e.styledMode && (t = e.tooltip?.styledModeFormat(t) || t), i.forEach((l) => {
            l = "{point." + l, (o || n) && (t = t.replace(RegExp(l + "}", "g"), o + l + "}" + n)), t = t.replace(RegExp(l + "}", "g"), l + ":,." + r + "f}");
          }), P(t, this, e);
        }
        update(t, e, i, s) {
          let r, o = this, n = o.series, l = o.graphic, d = n.chart, m = n.options;
          function c() {
            o.applyOptions(t);
            let f = l && o.hasMockGraphic, x = o.y === null ? !f : f;
            l && x && (o.graphic = l.destroy(), delete o.hasMockGraphic), lt(t, !0) && (l?.element && t && t.marker && t.marker.symbol !== void 0 && (o.graphic = l.destroy()), t?.dataLabels && o.dataLabel && (o.dataLabel = o.dataLabel.destroy())), r = o.index;
            let b = {};
            for (let M of n.dataColumnKeys()) b[M] = o[M];
            n.dataTable.setRow(b, r), m.data[r] = lt(m.data[r], !0) || lt(t, !0) ? o.options : et(t, m.data[r]), n.isDirty = n.isDirtyData = !0, !n.fixedBox && n.hasCartesianSeries && (d.isDirtyBox = !0), m.legendType === "point" && (d.isDirtyLegend = !0), e && d.redraw(i);
          }
          e = et(e, !0), s === !1 ? c() : o.firePointEvent("update", { options: t }, c);
        }
        remove(t, e) {
          this.series.removePoint(this.series.data.indexOf(this), t, e);
        }
        select(t, e) {
          let i = this, s = i.series, r = s.chart;
          t = et(t, !i.selected), this.selectedStaging = t, i.firePointEvent(t ? "select" : "unselect", { accumulate: e }, function() {
            i.selected = i.options.selected = t, s.options.data[s.data.indexOf(i)] = i.options, i.setState(t && "select"), e || r.getSelectedPoints().forEach(function(o) {
              let n = o.series;
              o.selected && o !== i && (o.selected = o.options.selected = !1, n.options.data[n.data.indexOf(o)] = o.options, o.setState(r.hoverPoints && n.options.inactiveOtherPoints ? "inactive" : ""), o.firePointEvent("unselect"));
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
          let e = tt(this.series.options.point, this.options), i = e.events?.[t];
          nt(i) && (!this.hcEvents?.[t] || this.hcEvents?.[t]?.map((s) => s.fn).indexOf(i) === -1) ? (this.importedUserEvent?.(), this.importedUserEvent = B(this, t, i), this.hcEvents && (this.hcEvents[t].userEvent = !0)) : this.importedUserEvent && !i && this.hcEvents?.[t] && this.hcEvents?.[t].userEvent && (xt(this, t), delete this.hcEvents[t], Object.keys(this.hcEvents) || delete this.importedUserEvent);
        }
        setState(t, e) {
          let i = this.series, s = this.state, r = i.options.states[t || "normal"] || {}, o = E.plotOptions[i.type].marker && i.options.marker, n = o && o.enabled === !1, l = o?.states?.[t || "normal"] || {}, d = l.enabled === !1, m = this.marker || {}, c = i.chart, f = o && i.markerAttribs, x = i.halo, b, M, k, v = i.stateMarkerGraphic, S;
          if ((t = t || "") === this.state && !e || this.selected && t !== "select" || r.enabled === !1 || t && (d || n && l.enabled === !1) || t && m.states && m.states[t] && m.states[t].enabled === !1) return;
          if (this.state = t, f && (b = i.markerAttribs(this, t)), this.graphic && !this.hasMockGraphic) {
            if (s && this.graphic.removeClass("highcharts-point-" + s), t && this.graphic.addClass("highcharts-point-" + t), !c.styledMode) {
              M = i.pointAttribs(this, t), k = et(c.options.chart.animation, r.animation);
              let D = M.opacity;
              i.options.inactiveOtherPoints && rt(D) && (this.dataLabels || []).forEach(function(N) {
                N && !N.hasClass("highcharts-data-label-hidden") && (N.animate({ opacity: D }, k), N.connector && N.connector.animate({ opacity: D }, k));
              }), this.graphic.animate(M, k);
            }
            b && this.graphic.animate(b, et(c.options.chart.animation, l.animation, o.animation)), v && v.hide();
          } else t && l && (S = m.symbol || i.symbol, v && v.currentSymbol !== S && (v = v.destroy()), b && (v ? v[e ? "animate" : "attr"]({ x: b.x, y: b.y }) : S && (i.stateMarkerGraphic = v = c.renderer.symbol(S, b.x, b.y, b.width, b.height, tt(o, l)).add(i.markerGroup), v.currentSymbol = S)), !c.styledMode && v && this.state !== "inactive" && v.attr(i.pointAttribs(this, t))), v && (v[t && this.isInside ? "show" : "hide"](), v.element.point = this, v.addClass(this.getClassName(), !0));
          let C = r.halo, O = this.graphic || v, L = O?.visibility || "inherit";
          C?.size && O && L !== "hidden" && !this.isCluster ? (x || (i.halo = x = c.renderer.path().add(O.parentGroup)), x.show()[e ? "animate" : "attr"]({ d: this.haloPath(C.size) }), x.attr({ class: "highcharts-halo highcharts-color-" + et(this.colorIndex, i.colorIndex) + (this.className ? " " + this.className : ""), visibility: L, zIndex: -1 }), x.point = this, c.styledMode || x.attr(F({ fill: this.color || i.color, "fill-opacity": C.opacity }, Mt.filterUserAttributes(C.attributes || {})))) : x?.point?.haloPath && !x.point.destroyed && x.animate({ d: x.point.haloPath(0) }, null, x.hide), G(this, "afterSetState", { state: t });
        }
        haloPath(t) {
          let e = this.pos();
          return e ? this.series.chart.renderer.symbols.circle(z(e[0], 1) - t, e[1] - t, 2 * t, 2 * t) : [];
        }
      }
      let Lt = St, { parse: Ee } = bt, { charts: Ls, composed: Jh, isTouchDevice: Qh } = X, { addEvent: xe, attr: td, css: _a, extend: Ja, find: Rl, fireEvent: mi, isNumber: fn, isObject: xn, objectEach: ed, offset: id, pick: Ve, pushUnique: sd, splat: zl } = $;
      class Ht {
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
          this.eventsToUnbind.forEach((e) => e()), this.eventsToUnbind = [], !X.chartCount && (Ht.unbindDocumentMouseUp.forEach((e) => e.unbind()), Ht.unbindDocumentMouseUp.length = 0, Ht.unbindDocumentTouchEnd && (Ht.unbindDocumentTouchEnd = Ht.unbindDocumentTouchEnd())), clearInterval(t.tooltipTimeout), ed(t, function(e, i) {
            t[i] = void 0;
          });
        }
        getSelectionMarkerAttrs(t, e) {
          let i = { args: { chartX: t, chartY: e }, attrs: {}, shapeType: "rect" };
          return mi(this, "getSelectionMarkerAttrs", i, (s) => {
            let r, { chart: o, zoomHor: n, zoomVert: l } = this, { mouseDownX: d = 0, mouseDownY: m = 0 } = o, c = s.attrs;
            c.x = o.plotLeft, c.y = o.plotTop, c.width = n ? 1 : o.plotWidth, c.height = l ? 1 : o.plotHeight, n && (c.width = Math.max(1, Math.abs(r = t - d)), c.x = (r > 0 ? 0 : r) + d), l && (c.height = Math.max(1, Math.abs(r = e - m)), c.y = (r > 0 ? 0 : r) + m);
          }), i;
        }
        drag(t) {
          let { chart: e } = this, { mouseDownX: i = 0, mouseDownY: s = 0 } = e, { panning: r, panKey: o, selectionMarkerFill: n } = e.options.chart, l = e.plotLeft, d = e.plotTop, m = e.plotWidth, c = e.plotHeight, f = xn(r) ? r.enabled : r, x = o && t[`${o}Key`], b = t.chartX, M = t.chartY, k, v = this.selectionMarker;
          if ((!v || !v.touch) && (b < l ? b = l : b > l + m && (b = l + m), M < d ? M = d : M > d + c && (M = d + c), this.hasDragged = Math.sqrt(Math.pow(i - b, 2) + Math.pow(s - M, 2)), this.hasDragged > 10)) {
            k = e.isInsidePlot(i - l, s - d, { visiblePlotOnly: !0 });
            let { shapeType: S, attrs: C } = this.getSelectionMarkerAttrs(b, M);
            this.hasZoom && k && !x && !v && (this.selectionMarker = v = e.renderer[S](), v.attr({ class: "highcharts-selection-marker", zIndex: 7 }).add(), e.styledMode || v.attr({ fill: n || Ee("#334eff").setOpacity(0.25).get() })), v && v.attr(C), k && !v && f && e.pan(t, r);
          }
        }
        dragStart(t) {
          let e = this.chart;
          e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = t.chartX, e.mouseDownY = t.chartY;
        }
        getSelectionBox(t) {
          let e = { args: { marker: t }, result: t.getBBox() };
          return mi(this, "getSelectionBox", e), e.result;
        }
        drop(t) {
          let e, { chart: i, selectionMarker: s } = this;
          for (let r of i.axes) r.isPanning && (r.isPanning = !1, (r.options.startOnTick || r.options.endOnTick || r.series.some((o) => o.boosted)) && (r.forceRedraw = !0, r.setExtremes(r.userMin, r.userMax, !1), e = !0));
          if (e && i.redraw(), s && t) {
            if (this.hasDragged) {
              let r = this.getSelectionBox(s);
              i.transform({ axes: i.axes.filter((o) => o.zoomEnabled && (o.coll === "xAxis" && this.zoomX || o.coll === "yAxis" && this.zoomY)), selection: { originalEvent: t, xAxis: [], yAxis: [], ...r }, from: r });
            }
            fn(i.index) && (this.selectionMarker = s.destroy());
          }
          i && fn(i.index) && (_a(i.container, { cursor: i._cursor }), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = !1, this.hasDragged = 0, this.pinchDown = [], this.hasPinchMoved = !1);
        }
        findNearestKDPoint(t, e, i) {
          let s;
          return t.forEach(function(r) {
            let o = !(r.noSharedTooltip && e) && 0 > r.options.findNearestPointBy.indexOf("y"), n = r.searchPoint(i, o);
            xn(n, !0) && n.series && (!xn(s, !0) || (function(l, d) {
              let m = l.distX - d.distX, c = l.dist - d.dist, f = d.series.group?.zIndex - l.series.group?.zIndex;
              return m !== 0 && e ? m : c !== 0 ? c : f !== 0 ? f : l.series.index > d.series.index ? -1 : 1;
            })(s, n) > 0) && (s = n);
          }), s;
        }
        getChartCoordinatesFromPoint(t, e) {
          let { xAxis: i, yAxis: s } = t.series, r = t.shapeArgs;
          if (i && s) {
            let o = t.clientX ?? t.plotX ?? 0, n = t.plotY || 0;
            return t.isNode && r && fn(r.x) && fn(r.y) && (o = r.x, n = r.y), e ? { chartX: s.len + s.pos - n, chartY: i.len + i.pos - o } : { chartX: o + i.pos, chartY: n + s.pos };
          }
          if (r?.x && r.y) return { chartX: r.x, chartY: r.y };
        }
        getChartPosition() {
          if (this.chartPosition) return this.chartPosition;
          let { container: t } = this.chart, e = id(t);
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
          let n = [], l = function(x) {
            return x.visible && !(!r && x.directTouch) && Ve(x.options.enableMouseTracking, !0);
          }, d = e, m, c = { chartX: o ? o.chartX : void 0, chartY: o ? o.chartY : void 0, shared: r };
          mi(this, "beforeGetHoverData", c), m = d && !d.stickyTracking ? [d] : i.filter((x) => x.stickyTracking && (c.filter || l)(x));
          let f = s && t || !o ? t : this.findNearestKDPoint(m, r, o);
          return d = f?.series, f && (r && !d.noSharedTooltip ? (m = i.filter(function(x) {
            return c.filter ? c.filter(x) : l(x) && !x.noSharedTooltip;
          })).forEach(function(x) {
            let b = x.options?.nullInteraction, M = Rl(x.points, function(k) {
              return k.x === f.x && (!k.isNull || !!b);
            });
            xn(M) && (x.boosted && x.boost && (M = x.boost.getPoint(M)), n.push(M));
          }) : n.push(f)), mi(this, "afterGetHoverData", c = { hoverPoint: f }), { hoverPoint: c.hoverPoint, hoverSeries: d, hoverPoints: n };
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
            if (s = td(i, "class")) {
              if (s.indexOf(e) !== -1) return !0;
              if (s.indexOf("highcharts-container") !== -1) return !1;
            }
            i = i.parentElement;
          }
        }
        constructor(t, e) {
          this.hasDragged = 0, this.pointerCaptureEventsToUnbind = [], this.eventsToUnbind = [], this.options = e, this.chart = t, this.runChartClick = !!e.chart.events?.click, this.pinchDown = [], this.setDOMEvents(), mi(this, "afterInit");
        }
        normalize(t, e) {
          let i = t.touches, s = i ? i.length ? i.item(0) : Ve(i.changedTouches, t.changedTouches)[0] : t;
          e || (e = this.getChartPosition());
          let r = s.pageX - e.left, o = s.pageY - e.top;
          return Ja(t, { chartX: Math.round(r /= e.scaleX), chartY: Math.round(o /= e.scaleY) });
        }
        onContainerClick(t) {
          let e = this.chart, i = e.hoverPoint, s = this.normalize(t), r = e.plotLeft, o = e.plotTop;
          !e.cancelClick && (i && this.inClass(s.target, "highcharts-tracker") ? (mi(i.series, "click", Ja(s, { point: i })), e.hoverPoint && i.firePointEvent("click", s)) : (Ja(s, this.getCoordinates(s)), e.isInsidePlot(s.chartX - r, s.chartY - o, { visiblePlotOnly: !0 }) && mi(e, "click", s)));
        }
        onContainerMouseDown(t) {
          let e = (1 & (t.buttons || t.button)) == 1;
          t = this.normalize(t), X.isFirefox && t.button !== 0 && this.onContainerMouseMove(t), (t.button === void 0 || e) && (this.zoomOption(t), e && t.preventDefault?.(), this.dragStart(t));
        }
        onContainerMouseLeave(t) {
          let { pointer: e } = Ls[Ve(Ht.hoverChartIndex, -1)] || {};
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
          t?.touches && this.hasPinchMoved && t?.preventDefault?.(), Ls[Ve(Ht.hoverChartIndex, -1)]?.pointer?.drop(t);
        }
        pinch(t) {
          let e = this, { chart: i, hasZoom: s, lastTouches: r } = e, o = [].map.call(t.touches || [], (c) => e.normalize(c)), n = o.length, l = n === 1 && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick), d = i.tooltip, m = n === 1 && Ve(d?.options.followTouchMove, !0);
          n > 1 ? e.initiated = !0 : m && (e.initiated = !1), s && e.initiated && !l && t.cancelable !== !1 && t.preventDefault(), t.type === "touchstart" ? (e.pinchDown = o, e.res = !0, i.mouseDownX = t.chartX) : m ? this.runPointActions(e.normalize(t)) : r && (mi(i, "touchpan", { originalEvent: t, touches: o }, () => {
            let c = (f) => {
              let x = f[0], b = f[1] || x;
              return { x: x.chartX, y: x.chartY, width: b.chartX - x.chartX, height: b.chartY - x.chartY };
            };
            i.transform({ axes: i.axes.filter((f) => f.zoomEnabled && (this.zoomHor && f.horiz || this.zoomVert && !f.horiz)), to: c(o), from: c(r), trigger: t.type });
          }), e.res && (e.res = !1, this.reset(!1, 0))), e.lastTouches = o;
        }
        reset(t, e) {
          let i = this.chart, s = i.hoverSeries, r = i.hoverPoint, o = i.hoverPoints, n = i.tooltip, l = n?.shared ? o : r;
          t && l && zl(l).forEach(function(d) {
            d.series.isCartesian && d.plotX === void 0 && (t = !1);
          }), t ? n && l && zl(l).length && (n.refresh(l), n.shared && o ? o.forEach(function(d) {
            d.setState(d.state, !0), d.series.isCartesian && (d.series.xAxis.crosshair && d.series.xAxis.drawCrosshair(null, d), d.series.yAxis.crosshair && d.series.yAxis.drawCrosshair(null, d));
          }) : r && (r.setState(r.state, !0), i.axes.forEach(function(d) {
            d.crosshair && r.series[d.coll] === d && d.drawCrosshair(null, r);
          }))) : (r && r.onMouseOut(), o && o.forEach(function(d) {
            d.setState();
          }), s && s.onMouseOut(), n && n.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), i.axes.forEach(function(d) {
            d.hideCrosshair();
          }), i.hoverPoints = i.hoverPoint = void 0);
        }
        runPointActions(t, e, i) {
          let s = this.chart, r = s.series, o = s.tooltip?.options.enabled ? s.tooltip : void 0, n = !!o && o.shared, l = e || s.hoverPoint, d = l?.series || s.hoverSeries, m = (!t || t.type !== "touchmove") && (!!e || d?.directTouch && this.isDirectTouch), c = this.getHoverData(l, d, r, m, n, t);
          l = c.hoverPoint, d = c.hoverSeries;
          let f = c.hoverPoints, x = d?.tooltipOptions.followPointer && !d.tooltipOptions.split, b = n && d && !d.noSharedTooltip;
          if (l && (i || l !== s.hoverPoint || o?.isHidden)) {
            if ((s.hoverPoints || []).forEach(function(M) {
              f.indexOf(M) === -1 && M.setState();
            }), s.hoverSeries !== d && d.onMouseOver(), this.applyInactiveState(f), (f || []).forEach(function(M) {
              M.setState("hover");
            }), s.hoverPoint && s.hoverPoint.firePointEvent("mouseOut"), !l.series) return;
            s.hoverPoints = f, s.hoverPoint = l, l.firePointEvent("mouseOver", void 0, () => {
              o && l && o.refresh(b ? f : l, t);
            });
          } else if (x && o && !o.isHidden) {
            let M = o.getAnchor([{}], t);
            s.isInsidePlot(M[0], M[1], { visiblePlotOnly: !0 }) && o.updatePosition({ plotX: M[0], plotY: M[1] });
          }
          this.unDocMouseMove || (this.unDocMouseMove = xe(s.container.ownerDocument, "mousemove", (M) => Ls[Ht.hoverChartIndex ?? -1]?.pointer?.onDocumentMouseMove(M)), this.eventsToUnbind.push(this.unDocMouseMove)), s.axes.forEach(function(M) {
            let k, v = M.crosshair?.snap ?? !0;
            v && ((k = s.hoverPoint) && k.series[M.coll] === M || (k = Rl(f, (S) => S.series?.[M.coll] === M))), k || !v ? M.drawCrosshair(t, k) : M.hideCrosshair();
          });
        }
        setDOMEvents() {
          let t = this.chart.container, e = t.ownerDocument;
          t.onmousedown = this.onContainerMouseDown.bind(this), t.onmousemove = this.onContainerMouseMove.bind(this), t.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(xe(t, "mouseenter", this.onContainerMouseEnter.bind(this)), xe(t, "mouseleave", this.onContainerMouseLeave.bind(this))), Ht.unbindDocumentMouseUp.some((s) => s.doc === e) || Ht.unbindDocumentMouseUp.push({ doc: e, unbind: xe(e, "mouseup", this.onDocumentMouseUp.bind(this)) });
          let i = this.chart.renderTo.parentElement;
          for (; i && i.tagName !== "BODY"; ) this.eventsToUnbind.push(xe(i, "scroll", () => {
            delete this.chartPosition;
          })), i = i.parentElement;
          this.eventsToUnbind.push(xe(t, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 }), xe(t, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })), Ht.unbindDocumentTouchEnd || (Ht.unbindDocumentTouchEnd = xe(e, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 })), this.setPointerCapture(), xe(this.chart, "redraw", this.setPointerCapture.bind(this));
        }
        setPointerCapture() {
          if (!Qh) return;
          let t = this.pointerCaptureEventsToUnbind, e = this.chart, i = e.container, s = Ve(e.options.tooltip?.followTouchMove, !0) && e.series.some((r) => r.options.findNearestPointBy.indexOf("y") > -1);
          !this.hasPointerCapture && s ? (t.push(xe(i, "pointerdown", (r) => {
            r.target?.hasPointerCapture(r.pointerId) && r.target?.releasePointerCapture(r.pointerId);
          }), xe(i, "pointermove", (r) => {
            e.pointer?.getPointFromEvent(r)?.onMouseOver(r);
          })), e.styledMode || _a(i, { "touch-action": "none" }), i.className += " highcharts-no-touch-action", this.hasPointerCapture = !0) : this.hasPointerCapture && !s && (t.forEach((r) => r()), t.length = 0, e.styledMode || _a(i, { "touch-action": Ve(e.options.chart.style?.["touch-action"], "manipulation") }), i.className = i.className.replace(" highcharts-no-touch-action", ""), this.hasPointerCapture = !1);
        }
        setHoverChartIndex(t) {
          let e = this.chart, i = X.charts[Ve(Ht.hoverChartIndex, -1)];
          if (i && i !== e) {
            let s = { relatedTarget: e.container };
            t && !t?.relatedTarget && Object.assign({}, t, s), i.pointer?.onContainerMouseLeave(t || s);
          }
          i?.mouseIsDown || (Ht.hoverChartIndex = e.index);
        }
        touch(t, e) {
          let i, { chart: s, pinchDown: r = [] } = this;
          this.setHoverChartIndex(), (t = this.normalize(t)).touches.length === 1 ? s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop, { visiblePlotOnly: !0 }) && !s.exporting?.openMenu ? (e && this.runPointActions(t), t.type === "touchmove" && (this.hasPinchMoved = i = !!r[0] && Math.pow(r[0].chartX - t.chartX, 2) + Math.pow(r[0].chartY - t.chartY, 2) >= 16), Ve(i, !0) && this.pinch(t)) : e && this.reset() : t.touches.length === 2 && this.pinch(t);
        }
        touchSelect(t) {
          return !!(this.chart.zooming.singleTouch && t.touches && t.touches.length === 1);
        }
        zoomOption(t) {
          let e = this.chart, i = e.inverted, s = e.zooming.type || "", r, o;
          /touch/.test(t.type) && (s = Ve(e.zooming.pinchType, s)), this.zoomX = r = /x/.test(s), this.zoomY = o = /y/.test(s), this.zoomHor = r && !i || o && i, this.zoomVert = o && !i || r && i, this.hasZoom = r || o;
        }
      }
      Ht.unbindDocumentMouseUp = [], (function(h) {
        h.compose = function(t) {
          sd(Jh, "Core.Pointer") && xe(t, "beforeRender", function() {
            this.pointer = new h(this, this.options);
          });
        };
      })(Ht || (Ht = {}));
      let Fl = Ht;
      (function(h) {
        h.setLength = function(t, e, i) {
          return Array.isArray(t) ? (t.length = e, t) : t[i ? "subarray" : "slice"](0, e);
        }, h.splice = function(t, e, i, s, r = []) {
          if (Array.isArray(t)) return Array.isArray(r) || (r = Array.from(r)), { removed: t.splice(e, i, ...r), array: t };
          let o = Object.getPrototypeOf(t).constructor, n = t[s ? "subarray" : "slice"](e, e + i), l = new o(t.length - i + r.length);
          return l.set(t.subarray(0, e), 0), l.set(r, e), l.set(t.subarray(e + i), e + r.length), { removed: n, array: l };
        };
      })(Fs || (Fs = {}));
      let { setLength: rd, splice: Hl } = Fs, { fireEvent: Qa, objectEach: jr, uniqueKey: Ur } = $, yn = class {
        constructor(h = {}) {
          this.autoId = !h.id, this.columns = {}, this.id = h.id || Ur(), this.modified = this, this.rowCount = 0, this.versionTag = Ur();
          let t = 0;
          jr(h.columns || {}, (e, i) => {
            this.columns[i] = e.slice(), t = Math.max(t, e.length);
          }), this.applyRowCount(t);
        }
        applyRowCount(h) {
          this.rowCount = h, jr(this.columns, (t, e) => {
            t.length !== h && (this.columns[e] = rd(t, h));
          });
        }
        deleteRows(h, t = 1) {
          if (t > 0 && h < this.rowCount) {
            let e = 0;
            jr(this.columns, (i, s) => {
              this.columns[s] = Hl(i, h, t).array, e = i.length;
            }), this.rowCount = e;
          }
          Qa(this, "afterDeleteRows", { rowIndex: h, rowCount: t }), this.versionTag = Ur();
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
          jr(h, (s, r) => {
            this.columns[r] = s.slice(), i = s.length;
          }), this.applyRowCount(i), e?.silent || (Qa(this, "afterSetColumns"), this.versionTag = Ur());
        }
        setRow(h, t = this.rowCount, e, i) {
          let { columns: s } = this, r = e ? this.rowCount + 1 : t + 1;
          jr(h, (o, n) => {
            let l = s[n] || i?.addColumns !== !1 && Array(r);
            l && (e ? l = Hl(l, t, 0, !0, [o]).array : l[t] = o, s[n] = l);
          }), r > this.rowCount && this.applyRowCount(r), i?.silent || (Qa(this, "afterSetRows"), this.versionTag = Ur());
        }
      }, { extend: od, merge: nd, pick: Wl } = $;
      (function(h) {
        function t(e, i, s) {
          let r = this.legendItem = this.legendItem || {}, { chart: o, options: n } = this, { baseline: l = 0, symbolWidth: d, symbolHeight: m } = e, c = this.symbol || "circle", f = m / 2, x = o.renderer, b = r.group, M = l - Math.round((e.fontMetrics?.b || m) * (s ? 0.4 : 0.3)), k = {}, v, S = n.marker, C = 0;
          if (o.styledMode || (k["stroke-width"] = Math.min(n.lineWidth || 0, 24), n.dashStyle ? k.dashstyle = n.dashStyle : n.linecap !== "square" && (k["stroke-linecap"] = "round")), r.line = x.path().addClass("highcharts-graph").attr(k).add(b), s && (r.area = x.path().addClass("highcharts-area").add(b)), k["stroke-linecap"] && (C = Math.min(r.line.strokeWidth(), d) / 2), d) {
            let O = [["M", C, M], ["L", d - C, M]];
            r.line.attr({ d: O }), r.area?.attr({ d: [...O, ["L", d - C, l], ["L", C, l]] });
          }
          if (S && S.enabled !== !1 && d) {
            let O = Math.min(Wl(S.radius, f), f);
            c.indexOf("url") === 0 && (S = nd(S, { width: m, height: m }), O = 0), r.symbol = v = x.symbol(c, d / 2 - O, M - O, 2 * O, 2 * O, od({ context: "legend" }, S)).addClass("highcharts-point").add(b), v.isMarker = !0;
          }
        }
        h.areaMarker = function(e, i) {
          t.call(this, e, i, !0);
        }, h.lineMarker = t, h.rectangle = function(e, i) {
          let s = i.legendItem || {}, r = e.options, o = e.symbolHeight, n = r.squareSymbol, l = n ? o : e.symbolWidth;
          s.symbol = this.chart.renderer.rect(n ? (e.symbolWidth - o) / 2 : 0, e.baseline - o + 1, l, o, Wl(e.options.symbolRadius, o / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(s.group);
        };
      })(Mi || (Mi = {}));
      let Xl = Mi, { defaultOptions: Gl } = qt, { extend: ad, extendClass: ld, merge: hd } = $;
      (function(h) {
        function t(e, i) {
          let s = Gl.plotOptions || {}, r = i.defaultOptions, o = i.prototype;
          return o.type = e, o.pointClass || (o.pointClass = Lt), !h.seriesTypes[e] && (r && (s[e] = r), h.seriesTypes[e] = i, !0);
        }
        h.seriesTypes = X.seriesTypes, h.registerSeriesType = t, h.seriesType = function(e, i, s, r, o) {
          let n = Gl.plotOptions || {};
          if (i = i || "", n[e] = hd(n[i], s), delete h.seriesTypes[e], t(e, ld(h.seriesTypes[i] || se, r)), h.seriesTypes[e].prototype.type = e, o) {
            class l extends Lt {
            }
            ad(l.prototype, o), h.seriesTypes[e].prototype.pointClass = l;
          }
          return h.seriesTypes[e];
        };
      })(Ai || (Ai = {}));
      let Dt = Ai, { animObject: Yl, setAnimation: dd } = It, { defaultOptions: bn } = qt, { registerEventOptions: cd } = hi, { svg: pd, win: ud } = X, { seriesTypes: Ds } = Dt, { format: gd } = jt, { arrayMax: tl, arrayMin: jl, clamp: Ul, correctFloat: Vl, crisp: md, defined: Ft, destroyObjectProperties: fd, diffObjects: xd, erase: ql, error: vn, extend: Is, find: yd, fireEvent: Ct, getClosestDistance: bd, getNestedProperty: Kl, insertItem: $l, isArray: Zl, isNumber: Wt, isString: vd, merge: Vr, objectEach: el, pick: Et, removeEvent: wd, syncTimeout: _l } = $;
      class Pe {
        constructor() {
          this.zoneAxis = "y";
        }
        init(t, e) {
          let i;
          Ct(this, "init", { options: e }), this.dataTable ?? (this.dataTable = new yn());
          let s = t.series;
          this.eventsToUnbind = [], this.chart = t, this.options = this.setOptions(e);
          let r = this.options, o = r.visible !== !1;
          this.linkedSeries = [], this.bindAxes(), Is(this, { name: r.name, state: "", visible: o, selected: r.selected === !0 }), cd(this, r), (r.events?.click || r.point?.events?.click || r.allowPointSelect) && (t.runTrackerClick = !0), this.getColor(), this.getSymbol(), this.isCartesian && (t.hasCartesianSeries = !0), s.length && (i = s[s.length - 1]), this._i = Et(i?._i, -1) + 1, this.opacity = this.options.opacity, t.orderItems("series", $l(this, s)), r.dataSorting?.enabled ? this.setDataSortingOptions() : this.points || this.data || this.setData(r.data, !1), Ct(this, "afterInit");
        }
        is(t) {
          return Ds[t] && this instanceof Ds[t];
        }
        bindAxes() {
          let t, e = this, i = e.options, s = e.chart;
          Ct(this, "bindAxes", null, function() {
            (e.axisTypes || []).forEach(function(r) {
              (s[r] || []).forEach(function(o) {
                t = o.options, (Et(i[r], 0) === o.index || i[r] !== void 0 && i[r] === t.id) && ($l(e, o.series), e[r] = o, o.isDirty = !0);
              }), e[r] || e.optionalAxis === r || vn(18, !0, s);
            });
          }), Ct(this, "afterBindAxes");
        }
        hasData() {
          return this.visible && this.dataMax !== void 0 && this.dataMin !== void 0 || this.visible && this.dataTable.rowCount > 0;
        }
        hasMarkerChanged(t, e) {
          let i = t.marker, s = e.marker || {};
          return i && (s.enabled && !i.enabled || s.symbol !== i.symbol || s.height !== i.height || s.width !== i.width);
        }
        autoIncrement(t) {
          let e, i = this.options, { pointIntervalUnit: s, relativeXValue: r } = this.options, o = this.chart.time, n = this.xIncrement ?? o.parse(i.pointStart) ?? 0;
          if (this.pointInterval = e = Et(this.pointInterval, i.pointInterval, 1), r && Wt(t) && (e *= t), s) {
            let l = o.toParts(n);
            s === "day" ? l[2] += e : s === "month" ? l[1] += e : s === "year" && (l[0] += e), e = o.makeTime.apply(o, l) - n;
          }
          return r && Wt(t) ? n + e : (this.xIncrement = n + e, n);
        }
        setDataSortingOptions() {
          let t = this.options;
          Is(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }), Ft(t.pointRange) || (t.pointRange = 1);
        }
        setOptions(t) {
          let e, i = this.chart, s = i.options.plotOptions, r = i.userOptions || {}, o = Vr(t), n = i.styledMode, l = { plotOptions: s, userOptions: o };
          Ct(this, "setOptions", l);
          let d = l.plotOptions[this.type], m = r.plotOptions || {}, c = m.series || {}, f = bn.plotOptions[this.type] || {}, x = m[this.type] || {};
          d.dataLabels = this.mergeArrays(f.dataLabels, d.dataLabels), this.userOptions = l.userOptions;
          let b = Vr(d, s.series, x, o);
          this.tooltipOptions = Vr(bn.tooltip, bn.plotOptions.series?.tooltip, f?.tooltip, i.userOptions.tooltip, m.series?.tooltip, x.tooltip, o.tooltip), this.stickyTracking = Et(o.stickyTracking, x.stickyTracking, c.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || b.stickyTracking), d.marker === null && delete b.marker, this.zoneAxis = b.zoneAxis || "y";
          let M = this.zones = (b.zones || []).map((k) => ({ ...k }));
          return (b.negativeColor || b.negativeFillColor) && !b.zones && (e = { value: b[this.zoneAxis + "Threshold"] || b.threshold || 0, className: "highcharts-negative" }, n || (e.color = b.negativeColor, e.fillColor = b.negativeFillColor), M.push(e)), M.length && Ft(M[M.length - 1].value) && M.push(n ? {} : { color: this.color, fillColor: this.fillColor }), Ct(this, "afterSetOptions", { options: b }), b;
        }
        getName() {
          return this.options.name ?? gd(this.chart.options.lang.seriesName, this, this.chart);
        }
        getCyclic(t, e, i) {
          let s, r, o = this.chart, n = `${t}Index`, l = `${t}Counter`, d = i?.length || o.options.chart.colorCount;
          !e && (Ft(r = Et(t === "color" ? this.options.colorIndex : void 0, this[n])) ? s = r : (o.series.length || (o[l] = 0), s = o[l] % d, o[l] += 1), i && (e = i[s])), s !== void 0 && (this[n] = s), this[t] = e;
        }
        getColor() {
          this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || bn.plotOptions[this.type].color, this.chart.options.colors);
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
          let i, s, r, { id: o, x: n } = t, l = this.points, d = this.options.dataSorting, m = this.cropStart || 0;
          if (o) {
            let c = this.chart.get(o);
            c instanceof Lt && (i = c);
          } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
            let c = (f) => !f.touched && f.index === t.index;
            if (d?.matchByName ? c = (f) => !f.touched && f.name === t.name : this.options.relativeXValue && (c = (f) => !f.touched && f.options.x === t.x), !(i = yd(l, c))) return;
          }
          return i && (r = i?.index) !== void 0 && (s = !0), r === void 0 && Wt(n) && (r = this.getColumn("x").indexOf(n, e)), r !== -1 && r !== void 0 && this.cropped && (r = r >= m ? r - m : r), !s && Wt(r) && l[r]?.touched && (r = void 0), r;
        }
        updateData(t, e) {
          let { options: i, requireSorting: s } = this, r = i.dataSorting, o = this.points, n = [], l = t.length === o.length, d, m, c, f, x = !0;
          if (this.xIncrement = null, t.forEach((M, k) => {
            let v, S = Ft(M) && this.pointClass.prototype.optionsToObject.call({ series: this }, M) || {}, { id: C, x: O } = S;
            C || Wt(O) ? ((v = this.findPointIndex(S, f)) === -1 || v === void 0 ? n.push(M) : o[v] && M !== i.data?.[v] ? (o[v].update(M, !1, void 0, !1), o[v].touched = !0, s && (f = v + 1)) : o[v] && (o[v].touched = !0), (!l || k !== v || r?.enabled || this.hasDerivedData) && (d = !0)) : n.push(M);
          }, this), d) for (m = o.length; m--; ) (c = o[m]) && !c.touched && c.remove?.(!1, e);
          else l && !r?.enabled ? (t.forEach((M, k) => {
            M === o[k].y || o[k].destroyed || o[k].update(M, !1, void 0, !1);
          }), n.length = 0) : x = !1;
          if (o.forEach((M) => {
            M && (M.touched = !1);
          }), !x) return !1;
          n.forEach((M) => {
            this.addPoint(M, !1, void 0, void 0, !1);
          }, this);
          let b = this.getColumn("x");
          return this.xIncrement === null && b.length && (this.xIncrement = tl(b), this.autoIncrement()), !0;
        }
        dataColumnKeys() {
          return ["x", ...this.pointArrayMap || ["y"]];
        }
        setData(t, e = !0, i, s) {
          let r = this.points, o = r?.length || 0, n = this.options, l = this.chart, d = n.dataSorting, m = this.xAxis, c = n.turboThreshold, f = this.dataTable, x = this.dataColumnKeys(), b = this.pointValKey || "y", M = (this.pointArrayMap || []).length, k = n.keys, v, S, C = 0, O = 1, L;
          l.options.chart.allowMutatingData || (n.data && delete this.options.data, this.userOptions.data && delete this.userOptions.data, L = Vr(!0, t));
          let D = (t = L || t || []).length;
          if (d?.enabled && (t = this.sortData(t)), l.options.chart.allowMutatingData && s !== !1 && D && o && !this.cropped && !this.hasGroupedData && this.visible && !this.boosted && (S = this.updateData(t, i)), !S) {
            this.xIncrement = null, this.colorCounter = 0;
            let N = c && !n.relativeXValue && D > c;
            if (N) {
              let I = this.getFirstValidPoint(t), W = this.getFirstValidPoint(t, D - 1, -1), Y = (H) => !!(Zl(H) && (k || Wt(H[0])));
              if (Wt(I) && Wt(W)) {
                let H = [], V = [];
                for (let Z of t) H.push(this.autoIncrement()), V.push(Z);
                f.setColumns({ x: H, [b]: V });
              } else if (Y(I) && Y(W)) if (M) {
                let H = +(I.length === M), V = Array(x.length).fill(0).map(() => []);
                for (let Z of t) {
                  H && V[0].push(this.autoIncrement());
                  for (let J = H; J <= M; J++) V[J]?.push(Z[J - H]);
                }
                f.setColumns(x.reduce((Z, J, j) => (Z[J] = V[j], Z), {}));
              } else {
                k && (C = k.indexOf("x"), O = k.indexOf("y"), C = C >= 0 ? C : 0, O = O >= 0 ? O : 1), I.length === 1 && (O = 0);
                let H = [], V = [];
                if (C === O) for (let Z of t) H.push(this.autoIncrement()), V.push(Z[O]);
                else for (let Z of t) H.push(Z[C]), V.push(Z[O]);
                f.setColumns({ x: H, [b]: V });
              }
              else N = !1;
            }
            if (!N) {
              let I = x.reduce((W, Y) => (W[Y] = [], W), {});
              for (v = 0; v < D; v++) {
                let W = this.pointClass.prototype.applyOptions.apply({ series: this }, [t[v]]);
                for (let Y of x) I[Y][v] = W[Y];
              }
              f.setColumns(I);
            }
            for (vd(this.getColumn("y")[0]) && vn(14, !0, l), this.data = [], this.options.data = this.userOptions.data = t, v = o; v--; ) r[v]?.destroy();
            m && (m.minRange = m.userMinRange), this.isDirty = l.isDirtyBox = !0, this.isDirtyData = !!r, i = !1;
          }
          n.legendType === "point" && (this.processData(), this.generatePoints()), e && l.redraw(i);
        }
        sortData(t) {
          let e = this, i = e.options.dataSorting.sortKey || "y", s = function(r, o) {
            return Ft(o) && r.pointClass.prototype.optionsToObject.call({ series: r }, o) || {};
          };
          return t.forEach(function(r, o) {
            t[o] = s(e, r), t[o].index = o;
          }, this), t.concat().sort((r, o) => {
            let n = Kl(i, r), l = Kl(i, o);
            return l < n ? -1 : +(l > n);
          }).forEach(function(r, o) {
            r.x = o;
          }, this), e.linkedSeries && e.linkedSeries.forEach(function(r) {
            let o = r.options, n = o.data;
            !o.dataSorting?.enabled && n && (n.forEach(function(l, d) {
              n[d] = s(r, l), t[d] && (n[d].x = t[d].x, n[d].index = d);
            }), r.setData(n, !1));
          }), t;
        }
        getProcessedData(t) {
          let e = this, { dataTable: i, isCartesian: s, options: r, xAxis: o } = e, n = r.cropThreshold, l = t || e.getExtremesFromAll, d = o?.logarithmic, m = i.rowCount, c, f, x = 0, b, M, k, v = e.getColumn("x"), S = i, C = !1;
          return o && (M = (b = o.getExtremes()).min, k = b.max, C = !!(o.categories && !o.names.length), s && e.sorted && !l && (!n || m > n || e.forceCrop) && (v[m - 1] < M || v[0] > k ? S = new yn() : e.getColumn(e.pointValKey || "y").length && (v[0] < M || v[m - 1] > k) && (S = (c = this.cropData(i, M, k)).modified, x = c.start, f = !0))), v = S.getColumn("x") || [], { modified: S, cropped: f, cropStart: x, closestPointRange: bd([d ? v.map(d.log2lin) : v], () => e.requireSorting && !C && vn(15, !1, e.chart)) };
        }
        processData(t) {
          let e = this.xAxis, i = this.dataTable;
          if (this.isCartesian && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !t) return !1;
          let s = this.getProcessedData();
          i.modified = s.modified, this.cropped = s.cropped, this.cropStart = s.cropStart, this.closestPointRange = this.basePointRange = s.closestPointRange, Ct(this, "afterProcessData");
        }
        cropData(t, e, i) {
          let s = t.getColumn("x", !0) || [], r = s.length, o = {}, n, l, d = 0, m = r;
          for (n = 0; n < r; n++) if (s[n] >= e) {
            d = Math.max(0, n - 1);
            break;
          }
          for (l = n; l < r; l++) if (s[l] > i) {
            m = l + 1;
            break;
          }
          for (let c of this.dataColumnKeys()) {
            let f = t.getColumn(c, !0);
            f && (o[c] = f.slice(d, m));
          }
          return { modified: new yn({ columns: o }), start: d, end: m };
        }
        generatePoints() {
          let t = this.options, e = this.processedData || t.data, i = this.dataTable.modified, s = this.getColumn("x", !0), r = this.pointClass, o = i.rowCount, n = this.cropStart || 0, l = this.hasGroupedData, d = t.keys, m = [], c = t.dataGrouping?.groupAll ? n : 0, f = this.xAxis?.categories, x = this.pointArrayMap || ["y"], b = this.dataColumnKeys(), M, k, v, S, C = this.data, O;
          if (!C && !l) {
            let L = [];
            L.length = e?.length || 0, C = this.data = L;
          }
          for (d && l && (this.options.keys = !1), S = 0; S < o; S++) k = n + S, l ? ((v = new r(this, i.getRow(S, b) || [])).dataGroup = this.groupMap[c + S], v.dataGroup?.options && (v.options = v.dataGroup.options, Is(v, v.dataGroup.options), delete v.dataLabels)) : (v = C[k], O = e ? e[k] : i.getRow(S, x), v || O === void 0 || (C[k] = v = new r(this, O, s[S]))), v && (v.index = l ? c + S : k, m[S] = v, v.category = f?.[v.x] ?? v.x, v.key = v.name ?? v.category);
          if (this.options.keys = d, C && (o !== (M = C.length) || l)) for (S = 0; S < M; S++) S !== n || l || (S += o), C[S] && (C[S].destroyElements(), C[S].plotX = void 0);
          this.data = C, this.points = m, Ct(this, "afterGeneratePoints");
        }
        getXExtremes(t) {
          return { min: jl(t), max: tl(t) };
        }
        getExtremes(t, e) {
          let { xAxis: i, yAxis: s } = this, r = e || this.getExtremesFromAll || this.options.getExtremesFromAll, o = r && this.cropped ? this.dataTable : this.dataTable.modified, n = o.rowCount, l = t || this.stackedYData, d = l ? [l] : (this.keysAffectYAxis || this.pointArrayMap || ["y"])?.map((L) => o.getColumn(L, !0) || []) || [], m = this.getColumn("x", !0), c = [], f = this.requireSorting && !this.is("column") ? 1 : 0, x = !!s && s.positiveValuesOnly, b = r || this.cropped || !i, M, k, v, S = 0, C = 0;
          for (i && (S = (M = i.getExtremes()).min, C = M.max), v = 0; v < n; v++) if (k = m[v], b || (m[v + f] || k) >= S && (m[v - f] || k) <= C) for (let L of d) {
            let D = L[v];
            Wt(D) && (D > 0 || !x) && c.push(D);
          }
          let O = { activeYData: c, dataMin: jl(c), dataMax: tl(c) };
          return Ct(this, "afterGetExtremes", { dataExtremes: O }), O;
        }
        applyExtremes() {
          let t = this.getExtremes();
          return this.dataMin = t.dataMin, this.dataMax = t.dataMax, t;
        }
        getFirstValidPoint(t, e = 0, i = 1) {
          let s = t.length, r = e;
          for (; r >= 0 && r < s; ) {
            if (Ft(t[r])) return t[r];
            r += i;
          }
        }
        translate() {
          this.generatePoints();
          let t = this.options, e = t.stacking, i = this.xAxis, s = this.enabledDataSorting, r = this.yAxis, o = this.points, n = o.length, l = this.pointPlacementToXValue(), d = !!l, m = t.threshold, c = t.startFromThreshold ? m : 0, f = t?.nullInteraction && r.len, x, b, M, k, v = Number.MAX_VALUE;
          function S(C) {
            return Ul(C, -1e9, 1e9);
          }
          for (x = 0; x < n; x++) {
            let C, O = o[x], L = O.x, D, N, I = O.y, W = O.low, Y = e && r.stacking?.stacks[(this.negStacks && I < (c ? 0 : m) ? "-" : "") + this.stackKey];
            O.plotX = Wt(b = i.translate(L, !1, !1, !1, !0, l)) ? Vl(S(b)) : void 0, e && this.visible && Y && Y[L] && (k = this.getStackIndicator(k, L, this.index), !O.isNull && k.key && (N = (D = Y[L]).points[k.key]), D && Zl(N) && (W = N[0], I = N[1], W === c && k.key === Y[L].base && (W = Et(Wt(m) ? m : r.min)), r.positiveValuesOnly && Ft(W) && W <= 0 && (W = void 0), O.total = O.stackTotal = Et(D.total), O.percentage = Ft(O.y) && D.total ? O.y / D.total * 100 : void 0, O.stackY = I, this.irregularWidths || D.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), O.yBottom = Ft(W) ? S(r.translate(W, !1, !0, !1, !0)) : void 0, this.dataModify && (I = this.dataModify.modifyValue(I, x)), Wt(I) && O.plotX !== void 0 ? C = Wt(C = r.translate(I, !1, !0, !1, !0)) ? S(C) : void 0 : !Wt(I) && f && (C = f), O.plotY = C, O.isInside = this.isPointInside(O), O.clientX = d ? Vl(i.translate(L, !1, !1, !1, !0, l)) : b, O.negative = (O.y || 0) < (m || 0), O.isNull || O.visible === !1 || (M !== void 0 && (v = Math.min(v, Math.abs(b - M))), M = b), O.zone = this.zones.length ? O.getZone() : void 0, !O.graphic && this.group && s && (O.isNew = !0);
          }
          this.closestPointRangePx = v, Ct(this, "afterTranslate");
        }
        getValidPoints(t, e, i) {
          let s = this.chart;
          return (t || this.points || []).filter(function(r) {
            let { plotX: o, plotY: n } = r;
            return (!!i || !r.isNull && !!Wt(n)) && (!e || !!s.isInsidePlot(o, n, { inverted: s.inverted })) && r.visible !== !1;
          });
        }
        getSharedClipKey() {
          return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey;
        }
        setClip() {
          let { chart: t, group: e, markerGroup: i } = this, s = t.sharedClips, r = t.renderer, o = t.getClipBox(this), n = this.getSharedClipKey(), l = s[n];
          l ? l.animate(o) : s[n] = l = r.clipRect(o), e && e.clip(this.options.clip === !1 ? void 0 : l), i && i.clip();
        }
        animate(t) {
          let { chart: e, group: i, markerGroup: s } = this, r = e.inverted, o = Yl(this.options.animation), n = [this.getSharedClipKey(), o.duration, o.easing, o.defer].join(","), l = e.sharedClips[n], d = e.sharedClips[n + "m"];
          if (t && i) {
            let m = e.getClipBox(this);
            if (l) l.attr("height", m.height);
            else {
              m.width = 0, r && (m.x = e.plotHeight), l = e.renderer.clipRect(m), e.sharedClips[n] = l;
              let c = { x: -99, y: -99, width: r ? e.plotWidth + 199 : 99, height: r ? 99 : e.plotHeight + 199 };
              d = e.renderer.clipRect(c), e.sharedClips[n + "m"] = d;
            }
            i.clip(l), s?.clip(d);
          } else if (l && !l.hasClass("highcharts-animating")) {
            let m = e.getClipBox(this), c = o.step;
            (s?.element.childNodes.length || e.series.length > 1) && (o.step = function(f, x) {
              c && c.apply(x, arguments), x.prop === "width" && d?.element && d.attr(r ? "height" : "width", f + 99);
            }), l.addClass("highcharts-animating").animate(m, o);
          }
        }
        afterAnimate() {
          this.setClip(), el(this.chart.sharedClips, (t, e, i) => {
            t && !this.chart.container.querySelector(`[clip-path="url(#${t.id})"]`) && (t.destroy(), delete i[e]);
          }), this.finishedAnimating = !0, Ct(this, "afterAnimate");
        }
        drawPoints(t = this.points) {
          let e, i, s, r, o, n, l, d = this.chart, m = d.styledMode, { colorAxis: c, options: f } = this, x = f.marker, b = f.nullInteraction, M = this[this.specialGroup || "markerGroup"], k = this.xAxis, v = Et(x.enabled, !k || !!k.isRadial || null, this.closestPointRangePx >= x.enabledThreshold * x.radius);
          if (x.enabled !== !1 || this._hasPointMarkers) for (e = 0; e < t.length; e++) {
            r = (s = (i = t[e]).graphic) ? "animate" : "attr", o = i.marker || {}, n = !!i.marker;
            let S = i.isNull;
            if ((v && !Ft(o.enabled) || o.enabled) && (!S || b) && i.visible !== !1) {
              let C = Et(o.symbol, this.symbol, "rect");
              l = this.markerAttribs(i, i.selected && "select"), this.enabledDataSorting && (i.startXPos = k.reversed ? -(l.width || 0) : k.width);
              let O = i.isInside !== !1;
              if (!s && O && ((l.width || 0) > 0 || i.hasImage) && (i.graphic = s = d.renderer.symbol(C, l.x, l.y, l.width, l.height, n ? o : x).add(M), this.enabledDataSorting && d.hasRendered && (s.attr({ x: i.startXPos }), r = "animate")), s && r === "animate" && s[O ? "show" : "hide"](O).animate(l), s) {
                let L = this.pointAttribs(i, m || !i.selected ? void 0 : "select");
                m ? c && s.css({ fill: L.fill }) : s[r](L);
              }
              s && s.addClass(i.getClassName(), !0);
            } else s && (i.graphic = s.destroy());
          }
        }
        markerAttribs(t, e) {
          let i = this.options, s = i.marker, r = t.marker || {}, o = r.symbol || s.symbol, n = {}, l, d, m = Et(r.radius, s?.radius);
          e && (l = s.states[e], d = r.states && r.states[e], m = Et(d?.radius, l?.radius, m && m + (l?.radiusPlus || 0))), t.hasImage = o && o.indexOf("url") === 0, t.hasImage && (m = 0);
          let c = t.pos();
          return Wt(m) && c && (i.crisp && (c[0] = md(c[0], t.hasImage ? 0 : o === "rect" ? s?.lineWidth || 0 : 1)), n.x = c[0] - m, n.y = c[1] - m), m && (n.width = n.height = 2 * m), n;
        }
        pointAttribs(t, e) {
          let i = this.options, s = i.marker, r = t?.options, o = r?.marker || {}, n = r?.color, l = t?.color, d = t?.zone?.color, m, c, f = this.color, x, b, M = Et(o.lineWidth, s.lineWidth), k = t?.isNull && i.nullInteraction ? 0 : 1;
          return f = n || d || l || f, x = o.fillColor || s.fillColor || f, b = o.lineColor || s.lineColor || f, e = e || "normal", m = s.states[e] || {}, M = Et((c = o.states && o.states[e] || {}).lineWidth, m.lineWidth, M + Et(c.lineWidthPlus, m.lineWidthPlus, 0)), x = c.fillColor || m.fillColor || x, b = c.lineColor || m.lineColor || b, { stroke: b, "stroke-width": M, fill: x, opacity: k = Et(c.opacity, m.opacity, k) };
        }
        destroy(t) {
          let e, i, s = this, r = s.chart, o = /AppleWebKit\/533/.test(ud.navigator.userAgent), n = s.data || [];
          for (Ct(s, "destroy", { keepEventsForUpdate: t }), this.removeEvents(t), (s.axisTypes || []).forEach(function(l) {
            i = s[l], i?.series && (ql(i.series, s), i.isDirty = i.forceRedraw = !0);
          }), s.legendItem && s.chart.legend.destroyItem(s), e = n.length; e--; ) n[e]?.destroy?.();
          for (let l of s.zones) fd(l, void 0, !0);
          $.clearTimeout(s.animationTimeout), el(s, function(l, d) {
            l instanceof ae && !l.survive && l[o && d === "group" ? "hide" : "destroy"]();
          }), r.hoverSeries === s && (r.hoverSeries = void 0), ql(r.series, s), r.orderItems("series"), el(s, function(l, d) {
            t && d === "hcEvents" || delete s[d];
          });
        }
        applyZones() {
          let { area: t, chart: e, graph: i, zones: s, points: r, xAxis: o, yAxis: n, zoneAxis: l } = this, { inverted: d, renderer: m } = e, c = this[`${l}Axis`], { isXAxis: f, len: x = 0, minPointOffset: b = 0 } = c || {}, M = (i?.strokeWidth() || 0) / 2 + 1, k = (v, S = 0, C = 0) => {
            d && (C = x - C);
            let { translated: O = 0, lineClip: L } = v, D = C - O;
            L?.push(["L", S, Math.abs(D) < M ? C - M * (D <= 0 ? -1 : 1) : O]);
          };
          if (s.length && (i || t) && c && Wt(c.min)) {
            let v = c.getExtremes().max + b, S = (L) => {
              L.forEach((D, N) => {
                (D[0] === "M" || D[0] === "L") && (L[N] = [D[0], f ? x - D[1] : D[1], f ? D[2] : x - D[2]]);
              });
            };
            if (s.forEach((L) => {
              L.lineClip = [], L.translated = Ul(c.toPixels(Et(L.value, v), !0) || 0, 0, x);
            }), i && !this.showLine && i.hide(), t && t.hide(), l === "y" && r.length < o.len) for (let L of r) {
              let { plotX: D, plotY: N, zone: I } = L, W = I && s[s.indexOf(I) - 1];
              I && k(I, D, N), W && k(W, D, N);
            }
            let C = [], O = c.toPixels(c.getExtremes().min - b, !0);
            s.forEach((L) => {
              let D = L.lineClip || [], N = Math.round(L.translated || 0);
              o.reversed && D.reverse();
              let { clip: I, simpleClip: W } = L, Y = 0, H = 0, V = o.len, Z = n.len;
              f ? (Y = N, V = O) : (H = N, Z = O);
              let J = [["M", Y, H], ["L", V, H], ["L", V, Z], ["L", Y, Z], ["Z"]], j = [J[0], ...D, J[1], J[2], ...C, J[3], J[4]];
              C = D.reverse(), O = N, d && (S(j), t && S(J)), I ? (I.animate({ d: j }), W?.animate({ d: J })) : (I = L.clip = m.path(j), t && (W = L.simpleClip = m.path(J))), i && L.graph?.clip(I), t && L.area?.clip(W);
            });
          } else this.visible && (i && i.show(), t && t.show());
        }
        plotGroup(t, e, i, s, r) {
          let o = this[t], n = !o, l = { visibility: i, zIndex: s || 0.1 };
          return Ft(this.opacity) && !this.chart.styledMode && this.state !== "inactive" && (l.opacity = this.opacity), o || (this[t] = o = this.chart.renderer.g().add(r)), o.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (Ft(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (o.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), o.attr(l)[n ? "attr" : "animate"](this.getPlotBox(e)), o;
        }
        getPlotBox(t) {
          let e = this.xAxis, i = this.yAxis, s = this.chart, r = s.inverted && !s.polar && e && this.invertible && t === "series";
          s.inverted && (e = i, i = this.xAxis);
          let o = { scale: 1, translateX: e ? e.left : s.plotLeft, translateY: i ? i.top : s.plotTop, name: t };
          Ct(this, "getPlotBox", o);
          let { scale: n, translateX: l, translateY: d } = o;
          return { translateX: l, translateY: d, rotation: 90 * !!r, rotationOriginX: r ? n * (e.len - i.len) / 2 : 0, rotationOriginY: r ? n * (e.len + i.len) / 2 : 0, scaleX: r ? -n : n, scaleY: n };
        }
        removeEvents(t) {
          let { eventsToUnbind: e } = this;
          t || wd(this), e.length && (e.forEach((i) => {
            i();
          }), e.length = 0);
        }
        render() {
          let t = this, { chart: e, options: i, hasRendered: s } = t, r = Yl(i.animation), o = t.visible ? "inherit" : "hidden", n = i.zIndex, l = e.seriesGroup, d = t.finishedAnimating ? 0 : r.duration;
          Ct(this, "render"), t.plotGroup("group", "series", o, n, l), t.markerGroup = t.plotGroup("markerGroup", "markers", o, n, l), i.clip !== !1 && t.setClip(), d && t.animate?.(!0), t.drawGraph && (t.drawGraph(), t.applyZones()), t.visible && t.drawPoints(), t.drawDataLabels?.(), t.redrawPoints?.(), i.enableMouseTracking && t.drawTracker?.(), d && t.animate?.(), s || (d && r.defer && (d += r.defer), t.animationTimeout = _l(() => {
            t.afterAnimate();
          }, d || 0)), t.isDirty = !1, t.hasRendered = !0, Ct(t, "afterRender");
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
          delete e.kdTree, _l(function() {
            e.kdTree = (function r(o, n, l) {
              let d, m, c = o?.length;
              if (c) return d = e.kdAxisArray[n % l], o.sort((f, x) => (f[d] || 0) - (x[d] || 0)), { point: o[m = Math.floor(c / 2)], left: r(o.slice(0, m), n + 1, l), right: r(o.slice(m + 1), n + 1, l) };
            })(e.getValidPoints(void 0, !e.directTouch, i?.nullInteraction), s, s), e.buildingKdTree = !1;
          }, i.kdNow || t?.type === "touchstart" ? 0 : 1);
        }
        searchKDTree(t, e, i, s, r) {
          let o = this, [n, l] = this.kdAxisArray, d = e ? "distX" : "dist", m = (o.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1, c = !!o.isBubble, f = s || ((b, M, k) => {
            let v = b[k] || 0, S = M[k] || 0;
            return [v === S && b.index > M.index || v < S ? b : M, !1];
          }), x = r || ((b, M) => b < M);
          if (this.kdTree || this.buildingKdTree || this.buildKDTree(i), this.kdTree) return (function b(M, k, v, S) {
            let C = k.point, O = o.kdAxisArray[v % S], L = C, D = !1;
            (function(Y, H) {
              let V = Y[n], Z = H[n], J = Ft(V) && Ft(Z) ? V - Z : null, j = Y[l], q = H[l], _ = Ft(j) && Ft(q) ? j - q : 0, vt = c && H.marker?.radius || 0;
              H.dist = Math.sqrt((J && J * J || 0) + _ * _) - vt, H.distX = Ft(J) ? Math.abs(J) - vt : Number.MAX_VALUE;
            })(M, C);
            let N = (M[O] || 0) - (C[O] || 0) + (c && C.marker?.radius || 0), I = N < 0 ? "left" : "right", W = N < 0 ? "right" : "left";
            return k[I] && ([L, D] = f(C, b(M, k[I], v + 1, S), d)), k[W] && x(Math.sqrt(N * N), L[d], D) && (L = f(L, b(M, k[W], v + 1, S), d)[0]), L;
          })(t, this.kdTree, m, m);
        }
        pointPlacementToXValue() {
          let { options: t, xAxis: e } = this, i = t.pointPlacement;
          return i === "between" && (i = e.reversed ? -0.5 : 0.5), Wt(i) ? i * (t.pointRange || e.pointRange) : 0;
        }
        isPointInside(t) {
          let { chart: e, xAxis: i, yAxis: s } = this, { plotX: r = -1, plotY: o = -1 } = t;
          return o >= 0 && o <= (s ? s.len : e.plotHeight) && r >= 0 && r <= (i ? i.len : e.plotWidth);
        }
        drawTracker() {
          let t = this, e = t.options, i = e.trackByArea, s = [].concat((i ? t.areaPath : t.graphPath) || []), r = t.chart, o = r.pointer, n = r.renderer, l = r.options.tooltip?.snap || 0, d = () => {
            e.enableMouseTracking && r.hoverSeries !== t && t.onMouseOver();
          }, m = "rgba(192,192,192," + (pd ? 1e-4 : 2e-3) + ")", c = t.tracker;
          c ? c.attr({ d: s }) : t.graph && (t.tracker = c = n.path(s).attr({ visibility: t.visible ? "inherit" : "hidden", zIndex: 2 }).addClass(i ? "highcharts-tracker-area" : "highcharts-tracker-line").add(t.group), r.styledMode || c.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: m, fill: i ? m : "none", "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * l) }), [t.tracker, t.markerGroup, t.dataLabelsGroup].forEach((f) => {
            f && (f.addClass("highcharts-tracker").on("mouseover", d).on("mouseout", (x) => {
              o?.onTrackerMouseOut(x);
            }), e.cursor && !r.styledMode && f.css({ cursor: e.cursor }), f.on("touchstart", d));
          })), Ct(this, "afterDrawTracker");
        }
        addPoint(t, e, i, s, r) {
          let o, n, l = this.options, { chart: d, data: m, dataTable: c, xAxis: f } = this, x = f?.hasNames && f.names, b = l.data, M = this.getColumn("x");
          e = Et(e, !0);
          let k = { series: this };
          this.pointClass.prototype.applyOptions.apply(k, [t]);
          let v = k.x;
          if (n = M.length, this.requireSorting && v < M[n - 1]) for (o = !0; n && M[n - 1] > v; ) n--;
          c.setRow(k, n, !0, { addColumns: !1 }), x && k.name && (x[v] = k.name), b?.splice(n, 0, t), (o || this.processedData) && (this.data.splice(n, 0, null), this.processData()), l.legendType === "point" && this.generatePoints(), i && (m[0] && m[0].remove ? m[0].remove(!1) : ([m, b].filter(Ft).forEach((S) => {
            S.shift();
          }), c.deleteRows(0))), r !== !1 && Ct(this, "addPoint", { point: k }), this.isDirty = !0, this.isDirtyData = !0, e && d.redraw(s);
        }
        removePoint(t, e, i) {
          let s = this, { chart: r, data: o, points: n, dataTable: l } = s, d = o[t], m = function() {
            [n?.length === o.length ? n : void 0, o, s.options.data].filter(Ft).forEach((c) => {
              c.splice(t, 1);
            }), l.deleteRows(t), d?.destroy(), s.isDirty = !0, s.isDirtyData = !0, e && r.redraw();
          };
          dd(i, r), e = Et(e, !0), d ? d.firePointEvent("remove", null, m) : m();
        }
        remove(t, e, i, s) {
          let r = this, o = r.chart;
          function n() {
            r.destroy(s), o.isDirtyLegend = o.isDirtyBox = !0, o.linkSeries(s), Et(t, !0) && o.redraw(e);
          }
          i !== !1 ? Ct(r, "remove", null, n) : n();
        }
        update(t, e) {
          Ct(this, "update", { options: t = xd(t, this.userOptions) });
          let i = this, s = i.chart, r = i.userOptions, o = i.initialType || i.type, n = s.options.plotOptions, l = Ds[o].prototype, d = i.finishedAnimating && { animation: !1 }, m = {}, c, f, x = Pe.keepProps.slice(), b = t.type || r.type || s.options.chart.type, M = !(this.hasDerivedData || b && b !== this.type || t.keys !== void 0 || t.pointStart !== void 0 || t.pointInterval !== void 0 || t.relativeXValue !== void 0 || t.joinBy || t.mapData || ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some((v) => i.hasOptionChanged(v)));
          b = b || o, M ? (x.push.apply(x, Pe.keepPropsForPoints), t.visible !== !1 && x.push("area", "graph"), i.parallelArrays.forEach(function(v) {
            x.push(v + "Data");
          }), t.data && (t.dataSorting && Is(i.options.dataSorting, t.dataSorting), this.setData(t.data, !1))) : this.dataTable.modified = this.dataTable, t = Vr(r, { index: r.index === void 0 ? i.index : r.index, pointStart: n?.series?.pointStart ?? r.pointStart ?? i.getColumn("x")[0] }, !M && { data: i.options.data }, t, d), M && t.data && (t.data = i.options.data), (x = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(x)).forEach(function(v) {
            x[v] = i[v], delete i[v];
          });
          let k = !1;
          if (Ds[b]) {
            if (k = b !== i.type, i.remove(!1, !1, !1, !0), k) if (s.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(i, Ds[b].prototype);
            else {
              let v = Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents;
              for (f in l) i[f] = void 0;
              Is(i, Ds[b].prototype), v ? i.hcEvents = v : delete i.hcEvents;
            }
          } else vn(17, !0, s, { missingModuleFor: b });
          if (x.forEach(function(v) {
            i[v] = x[v];
          }), i.init(s, t), M && this.points) for (let v of ((c = i.options).visible === !1 ? (m.graphic = 1, m.dataLabel = 1) : (this.hasMarkerChanged(c, r) && (m.graphic = 1), i.hasDataLabels?.() || (m.dataLabel = 1)), this.points)) v?.series && (v.resolveColor(), Object.keys(m).length && v.destroyElements(m), c.showInLegend === !1 && v.legendItem && s.legend.destroyItem(v));
          i.initialType = o, s.linkSeries(), s.setSortedData(), k && i.linkedSeries.length && (i.isDirtyData = !0), Ct(this, "afterUpdate"), Et(e, !0) && s.redraw(!!M && void 0);
        }
        setName(t) {
          this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0;
        }
        hasOptionChanged(t) {
          let e = this.chart, i = this.options[t], s = e.options.plotOptions, r = this.userOptions[t], o = Et(s?.[this.type]?.[t], s?.series?.[t]);
          return r && !Ft(o) ? i !== r : i !== Et(o, i);
        }
        onMouseOver() {
          let t = this.chart, e = t.hoverSeries;
          t.pointer?.setHoverChartIndex(), e && e !== this && e.onMouseOut(), this.options.events.mouseOver && Ct(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this;
        }
        onMouseOut() {
          let t = this.options, e = this.chart, i = e.tooltip, s = e.hoverPoint;
          e.hoverSeries = null, s && s.onMouseOut(), this && t.events.mouseOut && Ct(this, "mouseOut"), i && !this.stickyTracking && (!i.shared || this.noSharedTooltip) && i.hide(), e.series.forEach(function(r) {
            r.setState("", !0);
          });
        }
        setState(t, e) {
          let i = this, s = i.options, r = i.graph, o = s.inactiveOtherPoints, n = s.states, l = Et(n[t || "normal"] && n[t || "normal"].animation, i.chart.options.chart.animation), d = s.lineWidth, m = s.opacity;
          if (t = t || "", i.state !== t && ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(function(c) {
            c && (i.state && c.removeClass("highcharts-series-" + i.state), t && c.addClass("highcharts-series-" + t));
          }), i.state = t, !i.chart.styledMode)) {
            if (n[t] && n[t].enabled === !1) return;
            if (t && (d = n[t].lineWidth || d + (n[t].lineWidthPlus || 0), m = Et(n[t].opacity, m)), r && !r.dashstyle && Wt(d)) for (let c of [r, ...this.zones.map((f) => f.graph)]) c?.animate({ "stroke-width": d }, l);
            o || [i.group, i.markerGroup, i.dataLabelsGroup, i.labelBySeries].forEach(function(c) {
              c && c.animate({ opacity: m }, l);
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
          let n = t ? "show" : "hide";
          ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach((l) => {
            i[l]?.[n]();
          }), (s.hoverSeries === i || s.hoverPoint?.series === i) && i.onMouseOut(), i.legendItem && s.legend.colorizeItem(i, t), i.isDirty = !0, i.options.stacking && s.series.forEach((l) => {
            l.options.stacking && l.visible && (l.isDirty = !0);
          }), i.linkedSeries.forEach((l) => {
            l.setVisible(t, !1);
          }), r && (s.isDirtyBox = !0), Ct(i, n), e !== !1 && s.redraw();
        }
        show() {
          this.setVisible(!0);
        }
        hide() {
          this.setVisible(!1);
        }
        select(t) {
          this.selected = t = this.options.selected = t === void 0 ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), Ct(this, t ? "select" : "unselect");
        }
        shouldShowTooltip(t, e, i = {}) {
          return i.series = this, i.visiblePlotOnly = !0, this.chart.isInsidePlot(t, e, i);
        }
        drawLegendSymbol(t, e) {
          Xl[this.options.legendSymbol || "rectangle"]?.call(this, t, e);
        }
      }
      Pe.defaultOptions = { lineWidth: 2, allowPointSelect: !1, crisp: !0, showCheckbox: !1, animation: { duration: 1e3 }, enableMouseTracking: !0, events: {}, marker: { enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: { normal: { animation: !0 }, hover: { animation: { duration: 150 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: { animation: {}, align: "center", borderWidth: 0, defer: !0, formatter: function() {
        let { numberFormatter: h } = this.series.chart;
        return typeof this.y != "number" ? "" : h(this.y, -1);
      }, padding: 5, style: { fontSize: "0.7em", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: !0, states: { normal: { animation: !0 }, hover: { animation: { duration: 150 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: 0.25 } }, select: { animation: { duration: 0 } }, inactive: { animation: { duration: 150 }, opacity: 0.2 } }, stickyTracking: !0, turboThreshold: 1e3, findNearestPointBy: "x" }, Pe.types = Dt.seriesTypes, Pe.registerType = Dt.registerSeriesType, Pe.keepProps = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"], Pe.keepPropsForPoints = ["data", "isDirtyData", "isDirtyCanvas", "points", "dataTable", "processedData", "xIncrement", "cropped", "_hasPointMarkers", "hasDataLabels", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX", "transformGroups"], Is(Pe.prototype, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, directTouch: !1, invertible: !0, isCartesian: !0, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: Lt, requireSorting: !0, sorted: !0 }), Dt.series = Pe;
      let se = Pe, { animObject: kd, setAnimation: Md } = It, { registerEventOptions: Jl } = hi, { composed: Ad, marginNames: Ql } = X, { distribute: Td } = ps, { format: Sd } = jt, { addEvent: wn, createElement: Cd, css: Ed, defined: il, discardElement: Pd, find: Od, fireEvent: ti, isNumber: th, merge: Vi, pick: Oe, pushUnique: Ld, relativeLength: Dd, stableSort: Id, syncTimeout: Bd } = $;
      class sl {
        constructor(t, e) {
          this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = t, this.setOptions(e), e.enabled && (this.render(), Jl(this, e), wn(this.chart, "endResize", function() {
            this.legend.positionCheckboxes();
          })), wn(this.chart, "render", () => {
            this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems());
          });
        }
        setOptions(t) {
          let e = Oe(t.padding, 8);
          this.options = t, this.chart.styledMode || (this.itemStyle = t.itemStyle, this.itemHiddenStyle = Vi(this.itemStyle, t.itemHiddenStyle)), this.itemMarginTop = t.itemMarginTop, this.itemMarginBottom = t.itemMarginBottom, this.padding = e, this.initialItemY = e - 5, this.symbolWidth = Oe(t.symbolWidth, 16), this.pages = [], this.proximate = t.layout === "proximate" && !this.chart.inverted, this.baseline = void 0;
        }
        update(t, e) {
          let i = this.chart;
          this.setOptions(Vi(!0, this.options, t)), "events" in this.options && Jl(this, this.options), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, Oe(e, !0) && i.redraw(), ti(this, "afterUpdate", { redraw: e });
        }
        colorizeItem(t, e) {
          let i = t.color, { area: s, group: r, label: o, line: n, symbol: l } = t.legendItem || {};
          if ((t instanceof se || t instanceof Lt) && (t.color = t.options?.legendSymbolColor || i), r?.[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
            let { itemHiddenStyle: d = {} } = this, m = d.color, { fillColor: c, fillOpacity: f, lineColor: x, marker: b } = t.options, M = (k) => (!e && (k.fill && (k.fill = m), k.stroke && (k.stroke = m)), k);
            o?.css(Vi(e ? this.itemStyle : d)), n?.attr(M({ stroke: x || t.color })), l && l.attr(M(b && l.isMarker ? t.pointAttribs() : { fill: t.color })), s?.attr(M({ fill: c || t.color, "fill-opacity": c ? 1 : f ?? 0.75 }));
          }
          t.color = i, ti(this, "afterColorizeItem", { item: t, visible: e });
        }
        positionItems() {
          this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
        }
        positionItem(t) {
          let { group: e, x: i = 0, y: s = 0 } = t.legendItem || {}, r = this.options, o = r.symbolPadding, n = !r.rtl, l = t.checkbox;
          if (e?.element) {
            let d = { translateX: n ? i : this.legendWidth - i - 2 * o - 4, translateY: s };
            e[il(e.translateY) ? "animate" : "attr"](d, void 0, () => {
              ti(this, "afterPositionItem", { item: t });
            });
          }
          l && (l.x = i, l.y = s);
        }
        destroyItem(t) {
          let e = t.legendItem || {};
          for (let i of ["group", "label", "line", "symbol"]) e[i] && (e[i] = e[i].destroy());
          t.checkbox = Pd(t.checkbox), t.legendItem = void 0;
        }
        destroy() {
          for (let t of this.getAllItems()) this.destroyItem(t);
          for (let t of ["clipRect", "up", "down", "pager", "nav", "box", "title", "group"]) this[t] && (this[t] = this[t].destroy());
          this.display = null;
        }
        positionCheckboxes() {
          let t, e = this.group?.alignAttr, i = this.clipHeight || this.legendHeight, s = this.titleHeight;
          e && (t = e.translateY, this.allItems.forEach(function(r) {
            let o, n = r.checkbox;
            n && (o = t + s + n.y + (this.scrollOffset || 0) + 3, Ed(n, { left: e.translateX + r.checkboxOffset + n.x - 20 + "px", top: o + "px", display: this.proximate || o > t - 6 && o < t + i - 6 ? "" : "none" }));
          }, this));
        }
        renderTitle() {
          let t = this.options, e = this.padding, i = t.title, s, r = 0;
          i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, void 0, void 0, void 0, t.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(i.style), this.title.add(this.group)), i.width || this.title.css({ width: this.maxLegendWidth + "px" }), r = (s = this.title.getBBox()).height, this.offsetWidth = s.width, this.contentGroup.attr({ translateY: r })), this.titleHeight = r;
        }
        setText(t) {
          let e = this.options;
          t.legendItem.label.attr({ text: e.labelFormat ? Sd(e.labelFormat, t, this.chart) : e.labelFormatter.call(t) });
        }
        renderItem(t) {
          let e = t.legendItem = t.legendItem || {}, i = this.chart, s = i.renderer, r = this.options, o = r.layout === "horizontal", n = this.symbolWidth, l = r.symbolPadding || 0, d = this.itemStyle, m = this.itemHiddenStyle, c = o ? Oe(r.itemDistance, 20) : 0, f = !r.rtl, x = !t.series, b = !x && t.series.drawLegendSymbol ? t.series : t, M = b.options, k = !!this.createCheckboxForItem && M && M.showCheckbox, v = r.useHTML, S = t.options.className, C = e.label, O = n + l + c + 20 * !!k;
          !C && (e.group = s.g("legend-item").addClass("highcharts-" + b.type + "-series highcharts-color-" + t.colorIndex + (S ? " " + S : "") + (x ? " highcharts-series-" + t.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), e.label = C = s.text("", f ? n + l : -l, this.baseline || 0, v), i.styledMode || C.css(Vi(t.visible ? d : m)), C.attr({ align: f ? "left" : "right", zIndex: 2 }).add(e.group), !this.baseline && (this.fontMetrics = s.fontMetrics(C), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, C.attr("y", this.baseline), this.symbolHeight = Oe(r.symbolHeight, this.fontMetrics.f), r.squareSymbol && (this.symbolWidth = Oe(r.symbolWidth, Math.max(this.symbolHeight, 16)), O = this.symbolWidth + l + c + 20 * !!k, f && C.attr("x", this.symbolWidth + l))), b.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, C, v)), k && !t.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t), this.colorizeItem(t, t.visible), (i.styledMode || !d.width) && C.css({ width: (r.itemWidth || this.widthOption || i.spacingBox.width) - O + "px" }), this.setText(t);
          let L = C.getBBox(), D = this.fontMetrics?.h || 0;
          t.itemWidth = t.checkboxOffset = r.itemWidth || e.labelWidth || L.width + O, this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth), this.totalItemWidth += t.itemWidth, this.itemHeight = t.itemHeight = Math.round(e.labelHeight || (L.height > 1.5 * D ? L.height : D));
        }
        layoutItem(t) {
          let e = this.options, i = this.padding, s = e.layout === "horizontal", r = t.itemHeight, o = this.itemMarginBottom, n = this.itemMarginTop, l = s ? Oe(e.itemDistance, 20) : 0, d = this.maxLegendWidth, m = e.alignColumns && this.totalItemWidth > d ? this.maxItemWidth : t.itemWidth, c = t.legendItem || {};
          s && this.itemX - i + m > d && (this.itemX = i, this.lastLineHeight && (this.itemY += n + this.lastLineHeight + o), this.lastLineHeight = 0), this.lastItemY = n + this.itemY + o, this.lastLineHeight = Math.max(r, this.lastLineHeight), c.x = this.itemX, c.y = this.itemY, s ? this.itemX += m : (this.itemY += n + r + o, this.lastLineHeight = r), this.offsetWidth = this.widthOption || Math.max((s ? this.itemX - i - (t.checkbox ? 0 : l) : m) + i, this.offsetWidth);
        }
        getAllItems() {
          let t = [];
          return this.chart.series.forEach(function(e) {
            let i = e?.options;
            e && Oe(i.showInLegend, !il(i.linkedTo) && void 0, !0) && (t = t.concat(e.legendItem?.labels || (i.legendType === "point" ? e.data : e)));
          }), ti(this, "afterGetAllItems", { allItems: t }), t;
        }
        getAlignment() {
          let t = this.options;
          return this.proximate ? t.align.charAt(0) + "tv" : t.floating ? "" : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0);
        }
        adjustMargins(t, e) {
          let i = this.chart, s = this.options, r = this.getAlignment();
          r && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach((o, n) => {
            o.test(r) && !il(t[n]) && (i[Ql[n]] = Math.max(i[Ql[n]], i.legend[(n + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][n] * s[n % 2 ? "x" : "y"] + (s.margin ?? 12) + e[n] + (i.titleOffset[n] || 0)));
          });
        }
        proximatePositions() {
          let t, e = this.chart, i = [], s = this.options.align === "left";
          for (let r of (this.allItems.forEach(function(o) {
            let n, l, d = s, m, c;
            o.yAxis && (o.xAxis.options.reversed && (d = !d), o.points && (n = Od(d ? o.points : o.points.slice(0).reverse(), function(f) {
              return th(f.plotY);
            })), l = this.itemMarginTop + o.legendItem.label.getBBox().height + this.itemMarginBottom, c = o.yAxis.top - e.plotTop, m = o.visible ? (n ? n.plotY : o.yAxis.height) + (c - 0.3 * l) : c + o.yAxis.height, i.push({ target: m, size: l, item: o }));
          }, this), Td(i, e.plotHeight))) t = r.item.legendItem || {}, th(r.pos) && (t.y = e.plotTop - e.spacing[0] + r.pos);
        }
        render() {
          let t = this.chart, e = t.renderer, i = this.options, s = this.padding, r = this.getAllItems(), o, n, l, d = this.group, m, c = this.box;
          this.itemX = s, this.itemY = this.initialItemY, this.offsetWidth = 0, this.lastItemY = 0, this.widthOption = Dd(i.width, t.spacingBox.width - s), m = t.spacingBox.width - 2 * s - i.x, ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (m /= 2), this.maxLegendWidth = this.widthOption || m, d || (this.group = d = e.g("legend").addClass(i.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = e.g().attr({ zIndex: 1 }).add(d), this.scrollGroup = e.g().add(this.contentGroup)), this.renderTitle(), Id(r, (f, x) => (f.options?.legendIndex || 0) - (x.options?.legendIndex || 0)), i.reversed && r.reverse(), this.allItems = r, this.display = o = !!r.length, this.lastLineHeight = 0, this.maxItemWidth = 0, this.totalItemWidth = 0, this.itemHeight = 0, r.forEach(this.renderItem, this), r.forEach(this.layoutItem, this), n = (this.widthOption || this.offsetWidth) + s, l = this.lastItemY + this.lastLineHeight + this.titleHeight, l = this.handleOverflow(l) + s, c || (this.box = c = e.rect().addClass("highcharts-legend-box").attr({ r: i.borderRadius }).add(d)), t.styledMode || c.attr({ stroke: i.borderColor, "stroke-width": i.borderWidth || 0, fill: i.backgroundColor || "none" }).shadow(i.shadow), n > 0 && l > 0 && c[c.placed ? "animate" : "attr"](c.crisp.call({}, { x: 0, y: 0, width: n, height: l }, c.strokeWidth())), d[o ? "show" : "hide"](), t.styledMode && d.getStyle("display") === "none" && (n = l = 0), this.legendWidth = n, this.legendHeight = l, o && this.align(), this.proximate || this.positionItems(), ti(this, "afterRender");
        }
        align(t = this.chart.spacingBox) {
          let e = this.chart, i = this.options, s = t.y;
          /(lth|ct|rth)/.test(this.getAlignment()) && e.titleOffset[0] > 0 ? s += e.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && e.titleOffset[2] > 0 && (s -= e.titleOffset[2]), s !== t.y && (t = Vi(t, { y: s })), e.hasRendered || (this.group.placed = !1), this.group.align(Vi(i, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : i.verticalAlign }), !0, t);
        }
        handleOverflow(t) {
          let e = this, i = this.chart, s = i.renderer, r = this.options, o = r.y, n = r.verticalAlign === "top", l = this.padding, d = r.maxHeight, m = r.navigation, c = Oe(m.animation, !0), f = m.arrowSize || 12, x = this.pages, b = this.allItems, M = function(I) {
            typeof I == "number" ? N.attr({ height: I }) : N && (e.clipRect = N.destroy(), e.contentGroup.clip()), e.contentGroup.div && (e.contentGroup.div.style.clip = I ? "rect(" + l + "px,9999px," + (l + I) + "px,0)" : "auto");
          }, k = function(I) {
            return e[I] = s.circle(0, 0, 1.3 * f).translate(f / 2, f / 2).add(D), i.styledMode || e[I].attr("fill", "rgba(0,0,0,0.0001)"), e[I];
          }, v, S, C, O, L = i.spacingBox.height + (n ? -o : o) - l, D = this.nav, N = this.clipRect;
          return r.layout !== "horizontal" || r.verticalAlign === "middle" || r.floating || (L /= 2), d && (L = Math.min(L, d)), x.length = 0, t && L > 0 && t > L && m.enabled !== !1 ? (this.clipHeight = v = Math.max(L - 20 - this.titleHeight - l, 0), this.currentPage = Oe(this.currentPage, 1), this.fullHeight = t, b.forEach((I, W) => {
            let Y = (C = I.legendItem || {}).y || 0, H = Math.round(C.label.getBBox().height), V = x.length;
            (!V || Y - x[V - 1] > v && (S || Y) !== x[V - 1]) && (x.push(S || Y), V++), C.pageIx = V - 1, S && O && (O.pageIx = V - 1), W === b.length - 1 && Y + H - x[V - 1] > v && Y > x[V - 1] && (x.push(Y), C.pageIx = V), Y !== S && (S = Y), O = C;
          }), N || (N = e.clipRect = s.clipRect(0, l - 2, 9999, 0), e.contentGroup.clip(N)), M(v), D || (this.nav = D = s.g().attr({ zIndex: 1 }).add(this.group), this.up = s.symbol("triangle", 0, 0, f, f).add(D), k("upTracker").on("click", function() {
            e.scroll(-1, c);
          }), this.pager = s.text("", 15, 10).addClass("highcharts-legend-navigation"), !i.styledMode && m.style && this.pager.css(m.style), this.pager.add(D), this.down = s.symbol("triangle-down", 0, 0, f, f).add(D), k("downTracker").on("click", function() {
            e.scroll(1, c);
          })), e.scroll(0), t = L) : D && (M(), this.nav = D.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0), t;
        }
        scroll(t, e) {
          let i = this.chart, s = this.pages, r = s.length, o = this.clipHeight, n = this.options.navigation, l = this.pager, d = this.padding, m = this.currentPage + t;
          m > r && (m = r), m > 0 && (e !== void 0 && Md(e, i), this.nav.attr({ translateX: d, translateY: o + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function(c) {
            c.attr({ class: m === 1 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
          }), l.attr({ text: m + "/" + r }), [this.down, this.downTracker].forEach(function(c) {
            c.attr({ x: 18 + this.pager.getBBox().width, class: m === r ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
          }, this), i.styledMode || (this.up.attr({ fill: m === 1 ? n.inactiveColor : n.activeColor }), this.upTracker.css({ cursor: m === 1 ? "default" : "pointer" }), this.down.attr({ fill: m === r ? n.inactiveColor : n.activeColor }), this.downTracker.css({ cursor: m === r ? "default" : "pointer" })), this.scrollOffset = -s[m - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = m, this.positionCheckboxes(), Bd(() => {
            ti(this, "afterScroll", { currentPage: m });
          }, kd(Oe(e, i.renderer.globalAnimation, !0)).duration));
        }
        setItemEvents(t, e, i) {
          let s = this, r = t.legendItem || {}, o = s.chart.renderer.boxWrapper, n = t instanceof Lt, l = t instanceof se, d = "highcharts-legend-" + (n ? "point" : "series") + "-active", m = s.chart.styledMode, c = i ? [e, r.symbol] : [r.group], f = (x) => {
            s.allItems.forEach((b) => {
              t !== b && [b].concat(b.linkedSeries || []).forEach((M) => {
                M.setState(x, !n);
              });
            });
          };
          for (let x of c) x && x.on("mouseover", function() {
            t.visible && f("inactive"), t.setState("hover"), t.visible && o.addClass(d), m || e.css(s.options.itemHoverStyle);
          }).on("mouseout", function() {
            s.chart.styledMode || e.css(Vi(t.visible ? s.itemStyle : s.itemHiddenStyle)), f(""), o.removeClass(d), t.setState();
          }).on("click", function(b) {
            let M = function() {
              t.setVisible && t.setVisible(), f(t.visible ? "inactive" : "");
            };
            o.removeClass(d), ti(s, "itemClick", { browserEvent: b, legendItem: t }, M), n ? t.firePointEvent("legendItemClick", { browserEvent: b }) : l && ti(t, "legendItemClick", { browserEvent: b });
          });
        }
        createCheckboxForItem(t) {
          t.checkbox = Cd("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: t.selected, defaultChecked: t.selected }, this.options.itemCheckboxStyle, this.chart.container), wn(t.checkbox, "click", function(e) {
            let i = e.target;
            ti(t.series || t, "checkboxClick", { checked: i.checked, item: t }, function() {
              t.select();
            });
          });
        }
      }
      (function(h) {
        h.compose = function(t) {
          Ld(Ad, "Core.Legend") && wn(t, "beforeMargins", function() {
            this.legend = new h(this, this.options.legend);
          });
        };
      })(sl || (sl = {}));
      let eh = sl, { animate: rl, animObject: Nd, setAnimation: ol } = It, { defaultOptions: nl } = qt, { numberFormat: Rd } = jt, { registerEventOptions: ih } = hi, { charts: qi, doc: qr, marginNames: sh, svg: zd, win: rh } = X, { seriesTypes: al } = Dt, { addEvent: ll, attr: oh, createElement: hl, css: Le, defined: fi, diffObjects: nh, discardElement: Fd, erase: Hd, error: dl, extend: xi, find: cl, fireEvent: pt, getAlignFactor: Wd, getStyle: pl, isArray: Xd, isNumber: Bs, isObject: Gd, isString: kn, merge: qe, objectEach: ul, pick: Kt, pInt: Yd, relativeLength: ah, removeEvent: lh, splat: Mn, syncTimeout: jd, uniqueKey: Ud } = $;
      class yi {
        static chart(t, e, i) {
          return new yi(t, e, i);
        }
        constructor(t, e, i) {
          this.sharedClips = {};
          let s = [...arguments];
          (kn(t) || t.nodeName) && (this.renderTo = s.shift()), this.init(s[0], s[1]);
        }
        setZoomOptions() {
          let t = this.options.chart, e = t.zooming;
          this.zooming = { ...e, type: Kt(t.zoomType, e.type), key: Kt(t.zoomKey, e.key), pinchType: Kt(t.pinchType, e.pinchType), singleTouch: Kt(t.zoomBySingleTouch, e.singleTouch, !1), resetButton: qe(e.resetButton, t.resetZoomButton) };
        }
        init(t, e) {
          pt(this, "init", { args: arguments }, function() {
            let i = qe(nl, t), s = i.chart, r = this.renderTo || s.renderTo;
            this.userOptions = xi({}, t), (this.renderTo = kn(r) ? qr.getElementById(r) : r) || dl(13, !0, this), this.margin = [], this.spacing = [], this.labelCollectors = [], this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.locale = i.lang.locale ?? this.renderTo.closest("[lang]")?.lang, this.time = new Ks(xi(i.time || {}, { locale: this.locale }), i.lang), i.time = this.time.options, this.numberFormatter = (s.numberFormatter || Rd).bind(this), this.styledMode = s.styledMode, this.hasCartesianSeries = s.showAxes, this.index = qi.length, qi.push(this), X.chartCount++, ih(this, s), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), pt(this, "afterInit"), this.firstRender();
          });
        }
        initSeries(t) {
          let e = this.options.chart, i = t.type || e.type, s = al[i];
          s || dl(17, !0, this, { missingModuleFor: i });
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
          let i = this[t], s = this.options[t] = Mn(this.options[t]).slice(), r = this.userOptions[t] = this.userOptions[t] ? Mn(this.userOptions[t]).slice() : [];
          if (this.hasRendered && (s.splice(e), r.splice(e)), i) for (let o = e, n = i.length; o < n; ++o) {
            let l = i[o];
            l && (l.index = o, l instanceof se && (l.name = l.getName()), l.options.isInternal || (s[o] = l.options, r[o] = l.userOptions));
          }
        }
        getClipBox(t, e) {
          let i = this.inverted, { xAxis: s, yAxis: r } = t || {}, { x: o, y: n, width: l, height: d } = qe(this.clipBox);
          return t && (s && s.len !== this.plotSizeX && (l = s.len), r && r.len !== this.plotSizeY && (d = r.len), i && !t.invertible && ([l, d] = [d, l])), e && (o += (i ? r : s)?.pos ?? this.plotLeft, n += (i ? s : r)?.pos ?? this.plotTop), { x: o, y: n, width: l, height: d };
        }
        isInsidePlot(t, e, i = {}) {
          let { inverted: s, plotBox: r, plotLeft: o, plotTop: n, scrollablePlotBox: l } = this, { scrollLeft: d = 0, scrollTop: m = 0 } = i.visiblePlotOnly && this.scrollablePlotArea?.scrollingContainer || {}, c = i.series, f = i.visiblePlotOnly && l || r, x = i.inverted ? e : t, b = i.inverted ? t : e, M = { x, y: b, isInsidePlot: !0, options: i };
          if (!i.ignoreX) {
            let k = c && (s && !this.polar ? c.yAxis : c.xAxis) || { pos: o, len: 1 / 0 }, v = i.paneCoordinates ? k.pos + x : o + x;
            v >= Math.max(d + o, k.pos) && v <= Math.min(d + o + f.width, k.pos + k.len) || (M.isInsidePlot = !1);
          }
          if (!i.ignoreY && M.isInsidePlot) {
            let k = !s && i.axis && !i.axis.isXAxis && i.axis || c && (s ? c.xAxis : c.yAxis) || { pos: n, len: 1 / 0 }, v = i.paneCoordinates ? k.pos + b : n + b;
            v >= Math.max(m + n, k.pos) && v <= Math.min(m + n + f.height, k.pos + k.len) || (M.isInsidePlot = !1);
          }
          return pt(this, "afterIsInsidePlot", M), M.isInsidePlot;
        }
        redraw(t) {
          pt(this, "beforeRedraw");
          let e = this.hasCartesianSeries ? this.axes : this.colorAxis || [], i = this.series, s = this.pointer, r = this.legend, o = this.userOptions.legend, n = this.renderer, l = n.isHidden(), d = [], m, c, f, x = this.isDirtyBox, b = this.isDirtyLegend, M;
          for (n.rootFontSize = n.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(!1), ol(!!this.hasRendered && t, this), l && this.temporaryDisplay(), this.layOutTitles(!1), f = i.length; f--; ) if (((M = i[f]).options.stacking || M.options.centerInCategory) && (c = !0, M.isDirty)) {
            m = !0;
            break;
          }
          if (m) for (f = i.length; f--; ) (M = i[f]).options.stacking && (M.isDirty = !0);
          i.forEach(function(k) {
            k.isDirty && (k.options.legendType === "point" ? (typeof k.updateTotals == "function" && k.updateTotals(), b = !0) : o && (o.labelFormatter || o.labelFormat) && (b = !0)), k.isDirtyData && pt(k, "updatedData");
          }), b && r && r.options.enabled && (r.render(), this.isDirtyLegend = !1), c && this.getStacks(), e.forEach(function(k) {
            k.updateNames(), k.setScale();
          }), this.getMargins(), e.forEach(function(k) {
            k.isDirty && (x = !0);
          }), e.forEach(function(k) {
            let v = k.min + "," + k.max;
            k.extKey !== v && (k.extKey = v, d.push(function() {
              pt(k, "afterSetExtremes", xi(k.eventArgs, k.getExtremes())), delete k.eventArgs;
            })), (x || c) && k.redraw();
          }), x && this.drawChartBox(), pt(this, "predraw"), i.forEach(function(k) {
            (x || k.isDirty) && k.visible && k.redraw(), k.isDirtyData = !1;
          }), s && s.reset(!0), n.draw(), pt(this, "redraw"), pt(this, "render"), l && this.temporaryDisplay(!0), d.forEach(function(k) {
            k.call();
          });
        }
        get(t) {
          let e = this.series;
          function i(r) {
            return r.id === t || r.options && r.options.id === t;
          }
          let s = cl(this.axes, i) || cl(this.series, i);
          for (let r = 0; !s && r < e.length; r++) s = cl(e[r].points || [], i);
          return s;
        }
        createAxes() {
          let t = this.userOptions;
          for (let e of (pt(this, "createAxes"), ["xAxis", "yAxis"])) for (let i of t[e] = Mn(t[e] || {})) new ui(this, i, e);
          pt(this, "afterCreateAxes");
        }
        getSelectedPoints() {
          return this.series.reduce((t, e) => (e.getPointsCollection().forEach((i) => {
            Kt(i.selectedStaging, i.selected) && t.push(i);
          }), t), []);
        }
        getSelectedSeries() {
          return this.series.filter((t) => t.selected);
        }
        setTitle(t, e, i) {
          this.applyDescription("title", t), this.applyDescription("subtitle", e), this.applyDescription("caption", void 0), this.layOutTitles(i);
        }
        applyDescription(t, e) {
          let i = this, s = this.options[t] = qe(this.options[t], e), r = this[t];
          r && e && (this[t] = r = r.destroy()), s && !r && ((r = this.renderer.text(s.text, 0, 0, s.useHTML).attr({ align: s.align, class: "highcharts-" + t, zIndex: s.zIndex || 4 }).css({ textOverflow: "ellipsis", whiteSpace: "nowrap" }).add()).update = function(o, n) {
            i.applyDescription(t, o), i.layOutTitles(n);
          }, this.styledMode || r.css(xi(t === "title" ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {}, s.style)), r.textPxLength = r.getBBox().width, r.css({ whiteSpace: s.style?.whiteSpace }), this[t] = r);
        }
        layOutTitles(t = !0) {
          let e = [0, 0, 0], { options: i, renderer: s, spacingBox: r } = this;
          ["title", "subtitle", "caption"].forEach((n) => {
            let l = this[n], d = this.options[n], m = qe(r), c = l?.textPxLength || 0;
            if (l && d) {
              pt(this, "layOutTitle", { alignTo: m, key: n, textPxLength: c });
              let f = s.fontMetrics(l), x = f.b, b = f.h, M = d.verticalAlign || "top", k = M === "top", v = k && d.minScale || 1, S = n === "title" ? k ? -3 : 0 : k ? e[0] + 2 : 0, C = Math.min(m.width / c, 1), O = Math.max(v, C), L = qe({ y: M === "bottom" ? x : S + x }, { align: n === "title" ? C < v ? "left" : "center" : this.title?.alignValue }, d), D = (d.width || (C > v ? this.chartWidth : m.width) / O) + "px";
              l.alignValue !== L.align && (l.placed = !1);
              let N = Math.round(l.css({ width: D }).getBBox(d.useHTML).height);
              if (L.height = N, l.align(L, !1, m).attr({ align: L.align, scaleX: O, scaleY: O, "transform-origin": `${m.x + c * O * Wd(L.align)} ${b}` }), !d.floating) {
                let I = N * (N < 1.2 * b ? 1 : O);
                M === "top" ? e[0] = Math.ceil(e[0] + I) : M === "bottom" && (e[2] = Math.ceil(e[2] + I));
              }
            }
          }, this), e[0] && (i.title?.verticalAlign || "top") === "top" && (e[0] += i.title?.margin || 0), e[2] && i.caption?.verticalAlign === "bottom" && (e[2] += i.caption?.margin || 0);
          let o = !this.titleOffset || this.titleOffset.join(",") !== e.join(",");
          this.titleOffset = e, pt(this, "afterLayOutTitles"), !this.isDirtyBox && o && (this.isDirtyBox = this.isDirtyLegend = o, this.hasRendered && t && this.isDirtyBox && this.redraw());
        }
        getContainerBox() {
          let t = [].map.call(this.renderTo.children, (i) => {
            if (i !== this.container) {
              let s = i.style.display;
              return i.style.display = "none", [i, s];
            }
          }), e = { width: pl(this.renderTo, "width", !0) || 0, height: pl(this.renderTo, "height", !0) || 0 };
          return t.filter(Boolean).forEach(([i, s]) => {
            i.style.display = s;
          }), e;
        }
        getChartSize() {
          let t = this.options.chart, e = t.width, i = t.height, s = this.getContainerBox(), r = s.height <= 1 || !this.renderTo.parentElement?.style.height && this.renderTo.style.height === "100%";
          this.chartWidth = Math.max(0, e || s.width || 600), this.chartHeight = Math.max(0, ah(i, this.chartWidth) || (r ? 400 : s.height)), this.containerBox = s;
        }
        temporaryDisplay(t) {
          let e = this.renderTo, i;
          if (t) for (; e?.style; ) e.hcOrigStyle && (Le(e, e.hcOrigStyle), delete e.hcOrigStyle), e.hcOrigDetached && (qr.body.removeChild(e), e.hcOrigDetached = !1), e = e.parentNode;
          else for (; e?.style && (qr.body.contains(e) || e.parentNode || (e.hcOrigDetached = !0, qr.body.appendChild(e)), (pl(e, "display", !1) === "none" || e.hcOricDetached) && (e.hcOrigStyle = { display: e.style.display, height: e.style.height, overflow: e.style.overflow }, i = { display: "block", overflow: "hidden" }, e !== this.renderTo && (i.height = 0), Le(e, i), e.offsetWidth || e.style.setProperty("display", "block", "important")), (e = e.parentNode) !== qr.body); ) ;
        }
        setClassName(t) {
          this.container.className = "highcharts-container " + (t || "");
        }
        getContainer() {
          let t, e = this.options, i = e.chart, s = "data-highcharts-chart", r = Ud(), o = this.renderTo, n = Yd(oh(o, s));
          Bs(n) && qi[n] && qi[n].hasRendered && qi[n].destroy(), oh(o, s, this.index), o.innerHTML = Mt.emptyHTML, i.skipClone || o.offsetWidth || this.temporaryDisplay(), this.getChartSize();
          let l = this.chartHeight, d = this.chartWidth;
          Le(o, { overflow: "hidden" }), this.styledMode || (t = xi({ position: "relative", overflow: "hidden", width: d + "px", height: l + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none", padding: "0px" }, i.style || {}));
          let m = hl("div", { id: r }, t, o);
          this.container = m, this.getChartSize(), d !== this.chartWidth && (d = this.chartWidth, this.styledMode || Le(m, { width: Kt(i.style?.width, d + "px") })), this.containerBox = this.getContainerBox(), this._cursor = m.style.cursor;
          let c = i.renderer || !zd ? Ii.getRendererType(i.renderer) : bs;
          if (this.renderer = new c(m, d, l, void 0, i.forExport, e.exporting?.allowHTML, this.styledMode), ol(void 0, this), this.setClassName(i.className), this.styledMode) for (let f in e.defs) this.renderer.definition(e.defs[f]);
          else this.renderer.setStyle(i.style);
          this.renderer.chartIndex = this.index, pt(this, "afterGetContainer");
        }
        getMargins(t) {
          let { spacing: e, margin: i, titleOffset: s } = this;
          this.resetMargins(), s[0] && !fi(i[0]) && (this.plotTop = Math.max(this.plotTop, s[0] + e[0])), s[2] && !fi(i[2]) && (this.marginBottom = Math.max(this.marginBottom, s[2] + e[2])), this.legend?.display && this.legend.adjustMargins(i, e), pt(this, "getMargins"), t || this.getAxisMargins();
        }
        getAxisMargins() {
          let t = this, e = t.axisOffset = [0, 0, 0, 0], i = t.colorAxis, s = t.margin, r = (o) => {
            o.forEach((n) => {
              n.visible && n.getOffset();
            });
          };
          t.hasCartesianSeries ? r(t.axes) : i?.length && r(i), sh.forEach((o, n) => {
            fi(s[n]) || (t[o] += e[n]);
          }), t.setChartSize();
        }
        getOptions() {
          return nh(this.userOptions, nl);
        }
        reflow(t) {
          let e = this, i = e.containerBox, s = e.getContainerBox();
          delete e.pointer?.chartPosition, !e.exporting?.isPrinting && !e.isResizing && i && s.width && ((s.width !== i.width || s.height !== i.height) && ($.clearTimeout(e.reflowTimeout), e.reflowTimeout = jd(function() {
            e.container && e.setSize(void 0, void 0, !1);
          }, 100 * !!t)), e.containerBox = s);
        }
        setReflow() {
          let t = this, e = (i) => {
            t.options?.chart.reflow && t.hasLoaded && t.reflow(i);
          };
          if (typeof ResizeObserver == "function") new ResizeObserver(e).observe(t.renderTo);
          else {
            let i = ll(rh, "resize", e);
            ll(this, "destroy", i);
          }
        }
        setSize(t, e, i) {
          let s = this, r = s.renderer;
          s.isResizing += 1, ol(i, s);
          let o = r.globalAnimation;
          s.oldChartHeight = s.chartHeight, s.oldChartWidth = s.chartWidth, t !== void 0 && (s.options.chart.width = t), e !== void 0 && (s.options.chart.height = e), s.getChartSize();
          let { chartWidth: n, chartHeight: l, scrollablePixelsX: d = 0, scrollablePixelsY: m = 0 } = s;
          (s.isDirtyBox || n !== s.oldChartWidth || l !== s.oldChartHeight) && (s.styledMode || (o ? rl : Le)(s.container, { width: `${n + d}px`, height: `${l + m}px` }, o), s.setChartSize(!0), r.setSize(n, l, o), s.axes.forEach(function(c) {
            c.isDirty = !0, c.setScale();
          }), s.isDirtyLegend = !0, s.isDirtyBox = !0, s.layOutTitles(), s.getMargins(), s.redraw(o), s.oldChartHeight = void 0, pt(s, "resize"), setTimeout(() => {
            s && pt(s, "endResize");
          }, Nd(o).duration)), s.isResizing -= 1;
        }
        setChartSize(t) {
          let e, i, s, r, { chartHeight: o, chartWidth: n, inverted: l, spacing: d, renderer: m } = this, c = this.clipOffset, f = Math[l ? "floor" : "round"];
          this.plotLeft = e = Math.round(this.plotLeft), this.plotTop = i = Math.round(this.plotTop), this.plotWidth = s = Math.max(0, Math.round(n - e - (this.marginRight ?? 0))), this.plotHeight = r = Math.max(0, Math.round(o - i - (this.marginBottom ?? 0))), this.plotSizeX = l ? r : s, this.plotSizeY = l ? s : r, this.spacingBox = m.spacingBox = { x: d[3], y: d[0], width: n - d[3] - d[1], height: o - d[0] - d[2] }, this.plotBox = m.plotBox = { x: e, y: i, width: s, height: r }, c && (this.clipBox = { x: f(c[3]), y: f(c[0]), width: f(this.plotSizeX - c[1] - c[3]), height: f(this.plotSizeY - c[0] - c[2]) }), t || (this.axes.forEach(function(x) {
            x.setAxisSize(), x.setAxisTranslation();
          }), m.alignElements()), pt(this, "afterSetChartSize", { skipAxes: t });
        }
        resetMargins() {
          pt(this, "resetMargins");
          let t = this, e = t.options.chart, i = e.plotBorderWidth || 0, s = Math.round(i) / 2;
          ["margin", "spacing"].forEach((r) => {
            let o = e[r], n = Gd(o) ? o : [o, o, o, o];
            ["Top", "Right", "Bottom", "Left"].forEach((l, d) => {
              t[r][d] = e[`${r}${l}`] ?? n[d];
            });
          }), sh.forEach((r, o) => {
            t[r] = t.margin[o] ?? t.spacing[o];
          }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [s, s, s, s], t.plotBorderWidth = i;
        }
        drawChartBox() {
          let t = this.options.chart, e = this.renderer, i = this.chartWidth, s = this.chartHeight, r = this.styledMode, o = this.plotBGImage, n = t.backgroundColor, l = t.plotBackgroundColor, d = t.plotBackgroundImage, m = this.plotLeft, c = this.plotTop, f = this.plotWidth, x = this.plotHeight, b = this.plotBox, M = this.clipRect, k = this.clipBox, v = this.chartBackground, S = this.plotBackground, C = this.plotBorder, O, L, D, N = "animate";
          v || (this.chartBackground = v = e.rect().addClass("highcharts-background").add(), N = "attr"), r ? O = L = v.strokeWidth() : (L = (O = t.borderWidth || 0) + 8 * !!t.shadow, D = { fill: n || "none" }, (O || v["stroke-width"]) && (D.stroke = t.borderColor, D["stroke-width"] = O), v.attr(D).shadow(t.shadow)), v[N]({ x: L / 2, y: L / 2, width: i - L - O % 2, height: s - L - O % 2, r: t.borderRadius }), N = "animate", S || (N = "attr", this.plotBackground = S = e.rect().addClass("highcharts-plot-background").add()), S[N](b), !r && (S.attr({ fill: l || "none" }).shadow(t.plotShadow), d && (o ? (d !== o.attr("href") && o.attr("href", d), o.animate(b)) : this.plotBGImage = e.image(d, m, c, f, x).add())), M ? M.animate({ width: k.width, height: k.height }) : this.clipRect = e.clipRect(k), N = "animate", C || (N = "attr", this.plotBorder = C = e.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()), r || C.attr({ stroke: t.plotBorderColor, "stroke-width": t.plotBorderWidth || 0, fill: "none" }), C[N](C.crisp(b, -C.strokeWidth())), this.isDirtyBox = !1, pt(this, "afterDrawChartBox");
        }
        propFromSeries() {
          let t, e, i, s = this, r = s.options.chart, o = s.options.series;
          ["inverted", "angular", "polar"].forEach(function(n) {
            for (e = al[r.type], i = r[n] || e && e.prototype[n], t = o?.length; !i && t--; ) (e = al[o[t].type]) && e.prototype[n] && (i = !0);
            s[n] = i;
          });
        }
        linkSeries(t) {
          let e = this, i = e.series;
          i.forEach(function(s) {
            s.linkedSeries.length = 0;
          }), i.forEach(function(s) {
            let { linkedTo: r } = s.options;
            if (kn(r)) {
              let o;
              (o = r === ":previous" ? e.series[s.index - 1] : e.get(r)) && o.linkedParent !== s && (o.linkedSeries.push(s), s.linkedParent = o, o.enabledDataSorting && s.setDataSortingOptions(), s.visible = Kt(s.options.visible, o.options.visible, s.visible));
            }
          }), pt(this, "afterLinkSeries", { isUpdating: t });
        }
        renderSeries() {
          this.series.forEach(function(t) {
            t.translate(), t.render();
          });
        }
        render() {
          let t = this.axes, e = this.colorAxis, i = this.renderer, s = this.options.chart.axisLayoutRuns || 2, r = (m) => {
            m.forEach((c) => {
              c.visible && c.render();
            });
          }, o = 0, n = !0, l, d = 0;
          for (let m of (this.setTitle(), pt(this, "beforeMargins"), this.getStacks?.(), this.getMargins(!0), this.setChartSize(), t)) {
            let { options: c } = m, { labels: f } = c;
            if (this.hasCartesianSeries && m.horiz && m.visible && f.enabled && m.series.length && m.coll !== "colorAxis" && !this.polar) {
              o = c.tickLength, m.createGroups();
              let x = new ci(m, 0, "", !0), b = x.createLabel("x", f);
              if (x.destroy(), b && Kt(f.reserveSpace, !Bs(c.crossing)) && (o = b.getBBox().height + f.distance + Math.max(c.offset || 0, 0)), o) {
                b?.destroy();
                break;
              }
            }
          }
          for (this.plotHeight = Math.max(this.plotHeight - o, 0); (n || l || s > 1) && d < s; ) {
            let m = this.plotWidth, c = this.plotHeight;
            for (let f of t) d === 0 ? f.setScale() : (f.horiz && n || !f.horiz && l) && f.setTickInterval(!0);
            d === 0 ? this.getAxisMargins() : this.getMargins(), n = m / this.plotWidth > (d ? 1 : 1.1), l = c / this.plotHeight > (d ? 1 : 1.05), d++;
          }
          this.drawChartBox(), this.hasCartesianSeries ? r(t) : e?.length && r(e), this.seriesGroup || (this.seriesGroup = i.g("series-group").attr({ zIndex: 3 }).shadow(this.options.chart.seriesGroupShadow).add()), this.dataLabelsGroup || (this.dataLabelsGroup = i.g("datalabels-group").attr({ zIndex: 6 }).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0;
        }
        addCredits(t) {
          let e = this, i = qe(!0, this.options.credits, t);
          i.enabled && !this.credits && (this.credits = this.renderer.text(i.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
            i.href && (rh.location.href = i.href);
          }).attr({ align: i.position.align, zIndex: 8 }), e.styledMode || this.credits.css(i.style), this.credits.add().align(i.position), this.credits.update = function(s) {
            e.credits = e.credits.destroy(), e.addCredits(s);
          });
        }
        destroy() {
          let t, e = this, i = e.axes, s = e.series, r = e.container, o = r?.parentNode;
          for (pt(e, "destroy"), e.renderer.forExport ? Hd(qi, e) : qi[e.index] = void 0, X.chartCount--, e.renderTo.removeAttribute("data-highcharts-chart"), lh(e), t = i.length; t--; ) i[t] = i[t].destroy();
          for (this.scroller?.destroy?.(), t = s.length; t--; ) s[t] = s[t].destroy();
          ["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"].forEach((n) => {
            e[n] = e[n]?.destroy?.();
          }), r && (r.innerHTML = Mt.emptyHTML, lh(r), o && Fd(r)), ul(e, function(n, l) {
            delete e[l];
          });
        }
        firstRender() {
          let t = this, e = t.options;
          t.getContainer(), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.createAxes();
          let i = Xd(e.series) ? e.series : [];
          e.series = [], i.forEach(function(s) {
            t.initSeries(s);
          }), t.linkSeries(), t.setSortedData(), pt(t, "beforeRender"), t.render(), t.pointer?.getChartPosition(), t.renderer.imgCount || t.hasLoaded || t.onload(), t.temporaryDisplay(!0);
        }
        onload() {
          this.callbacks.concat([this.callback]).forEach(function(t) {
            t && this.index !== void 0 && t.apply(this, [this]);
          }, this), pt(this, "load"), pt(this, "render"), fi(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = !0;
        }
        warnIfA11yModuleNotLoaded() {
          let { options: t, title: e } = this;
          t && !this.accessibility && (this.renderer.boxWrapper.attr({ role: "img", "aria-label": (e?.element.textContent || "").replace(/</g, "&lt;") }), t.accessibility && t.accessibility.enabled === !1 || dl('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', !1, this));
        }
        addSeries(t, e, i) {
          let s, r = this;
          return t && (e = Kt(e, !0), pt(r, "addSeries", { options: t }, function() {
            s = r.initSeries(t), r.isDirtyLegend = !0, r.linkSeries(), s.enabledDataSorting && s.setData(t.data, !1), pt(r, "afterAddSeries", { series: s }), e && r.redraw(i);
          })), s;
        }
        addAxis(t, e, i, s) {
          return this.createAxis(e ? "xAxis" : "yAxis", { axis: t, redraw: i, animation: s });
        }
        addColorAxis(t, e, i) {
          return this.createAxis("colorAxis", { axis: t, redraw: e, animation: i });
        }
        createAxis(t, e) {
          let i = new ui(this, e.axis, t);
          return Kt(e.redraw, !0) && this.redraw(e.animation), i;
        }
        showLoading(t) {
          let e = this, i = e.options, s = i.loading, r = function() {
            o && Le(o, { left: e.plotLeft + "px", top: e.plotTop + "px", width: e.plotWidth + "px", height: e.plotHeight + "px" });
          }, o = e.loadingDiv, n = e.loadingSpan;
          o || (e.loadingDiv = o = hl("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, e.container)), n || (e.loadingSpan = n = hl("span", { className: "highcharts-loading-inner" }, null, o), ll(e, "redraw", r)), o.className = "highcharts-loading", Mt.setElementHTML(n, Kt(t, i.lang.loading, "")), !e.styledMode && (Le(o, xi(s.style, { zIndex: 10 })), Le(n, s.labelStyle), e.loadingShown || (Le(o, { opacity: 0, display: "" }), rl(o, { opacity: s.style.opacity || 0.5 }, { duration: s.showDuration || 0 }))), e.loadingShown = !0, r();
        }
        hideLoading() {
          let t = this.options, e = this.loadingDiv;
          e && (e.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || rl(e, { opacity: 0 }, { duration: t.loading.hideDuration || 100, complete: function() {
            Le(e, { display: "none" });
          } })), this.loadingShown = !1;
        }
        update(t, e, i, s) {
          let r, o, n, l = this, d = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, m = t.isResponsiveOptions, c = [];
          pt(l, "update", { options: t }), m || l.setResponsive(!1, !0), t = nh(t, l.options), l.userOptions = qe(l.userOptions, t);
          let f = t.chart;
          f && (qe(!0, l.options.chart, f), this.setZoomOptions(), "className" in f && l.setClassName(f.className), ("inverted" in f || "polar" in f || "type" in f) && (l.propFromSeries(), r = !0), "alignTicks" in f && (r = !0), "events" in f && ih(this, f), ul(f, function(M, k) {
            l.propsRequireUpdateSeries.indexOf("chart." + k) !== -1 && (o = !0), l.propsRequireDirtyBox.indexOf(k) !== -1 && (l.isDirtyBox = !0), l.propsRequireReflow.indexOf(k) !== -1 && (l.isDirtyBox = !0, m || (n = !0));
          }), !l.styledMode && f.style && l.renderer.setStyle(l.options.chart.style || {})), !l.styledMode && t.colors && (this.options.colors = t.colors), ul(t, function(M, k) {
            l[k] && typeof l[k].update == "function" ? l[k].update(M, !1) : typeof l[d[k]] == "function" ? l[d[k]](M) : k !== "colors" && l.collectionsWithUpdate.indexOf(k) === -1 && qe(!0, l.options[k], t[k]), k !== "chart" && l.propsRequireUpdateSeries.indexOf(k) !== -1 && (o = !0);
          }), this.collectionsWithUpdate.forEach(function(M) {
            t[M] && (Mn(t[M]).forEach(function(k, v) {
              let S, C = fi(k.id);
              C && (S = l.get(k.id)), !S && l[M] && (S = l[M][Kt(k.index, v)]) && (C && fi(S.options.id) || S.options.isInternal) && (S = void 0), S && S.coll === M && (S.update(k, !1), i && (S.touched = !0)), !S && i && l.collectionsWithInit[M] && (l.collectionsWithInit[M][0].apply(l, [k].concat(l.collectionsWithInit[M][1] || []).concat([!1])).touched = !0);
            }), i && l[M].forEach(function(k) {
              k.touched || k.options.isInternal ? delete k.touched : c.push(k);
            }));
          }), c.forEach(function(M) {
            M.chart && M.remove && M.remove(!1);
          }), r && l.axes.forEach(function(M) {
            M.update({}, !1);
          }), o && l.getSeriesOrderByLinks().forEach(function(M) {
            M.chart && M.update({}, !1);
          }, this);
          let x = f?.width, b = f && (kn(f.height) ? ah(f.height, x || l.chartWidth) : f.height);
          n || Bs(x) && x !== l.chartWidth || Bs(b) && b !== l.chartHeight ? l.setSize(x, b, s) : Kt(e, !0) && l.redraw(s), pt(l, "afterUpdate", { options: t, redraw: e, animation: s });
        }
        setSubtitle(t, e) {
          this.applyDescription("subtitle", t), this.layOutTitles(e);
        }
        setCaption(t, e) {
          this.applyDescription("caption", t), this.layOutTitles(e);
        }
        showResetZoom() {
          let t = this, e = nl.lang, i = t.zooming.resetButton, s = i.theme, r = i.relativeTo === "chart" || i.relativeTo === "spacingBox" ? null : "plotBox";
          function o() {
            t.zoomOut();
          }
          pt(this, "beforeShowResetZoom", null, function() {
            t.resetZoomButton = t.renderer.button(e.resetZoom, null, null, o, s).attr({ align: i.position.align, title: e.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(i.position, !1, r);
          }), pt(this, "afterShowResetZoom");
        }
        zoomOut() {
          pt(this, "selection", { resetSelection: !0 }, () => this.transform({ reset: !0, trigger: "zoom" }));
        }
        pan(t, e) {
          let i = this, s = typeof e == "object" ? e : { enabled: e, type: "x" }, r = s.type, o = r && i[{ x: "xAxis", xy: "axes", y: "yAxis" }[r]].filter((l) => l.options.panningEnabled && !l.options.isInternal), n = i.options.chart;
          n?.panning && (n.panning = s), pt(this, "pan", { originalEvent: t }, () => {
            i.transform({ axes: o, event: t, to: { x: t.chartX - (i.mouseDownX || 0), y: t.chartY - (i.mouseDownY || 0) }, trigger: "pan" }), Le(i.container, { cursor: "move" });
          });
        }
        transform(t) {
          let { axes: e = this.axes, event: i, from: s = {}, reset: r, selection: o, to: n = {}, trigger: l } = t, { inverted: d, time: m } = this;
          this.hoverPoints?.forEach((b) => b.setState()), pt(this, "transform", t);
          let c = t.hasZoomed || !1, f, x;
          for (let b of e) {
            let { horiz: M, len: k, minPointOffset: v = 0, options: S, reversed: C } = b, O = M ? "width" : "height", L = M ? "x" : "y", D = Kt(n[O], b.len), N = Kt(s[O], b.len), I = 10 > Math.abs(D) ? 1 : D / N, W = (s[L] || 0) + N / 2 - b.pos, Y = W - ((n[L] ?? b.pos) + D / 2 - b.pos) / I, H = C && !d || !C && d ? -1 : 1;
            if (!r && (W < 0 || W > b.len)) continue;
            let V = b.chart.polar || b.isOrdinal ? 0 : v * H || 0, Z = b.toValue(Y, !0), J = b.toValue(Y + k / I, !0), j = Z + V, q = J - V, _ = b.allExtremes;
            if (o && o[b.coll].push({ axis: b, min: Math.min(Z, J), max: Math.max(Z, J) }), j > q && ([j, q] = [q, j]), I === 1 && !r && b.coll === "yAxis" && !_) {
              for (let _t of b.series) {
                let Ke = _t.getExtremes(_t.getProcessedData(!0).modified.getColumn("y") || [], !0);
                _ ?? (_ = { dataMin: Number.MAX_VALUE, dataMax: -Number.MAX_VALUE }), Bs(Ke.dataMin) && Bs(Ke.dataMax) && (_.dataMin = Math.min(Ke.dataMin, _.dataMin), _.dataMax = Math.max(Ke.dataMax, _.dataMax));
              }
              b.allExtremes = _;
            }
            let { dataMin: vt, dataMax: ht, min: $t, max: st } = xi(b.getExtremes(), _ || {}), it = m.parse(S.min), ut = m.parse(S.max), at = vt ?? it, wt = ht ?? ut, kt = q - j, mt = b.categories ? 0 : Math.min(kt, wt - at), Pt = at - mt * (fi(it) ? 0 : S.minPadding), Zt = wt + mt * (fi(ut) ? 0 : S.maxPadding), re = b.allowZoomOutside || I === 1 || l !== "zoom" && I > 1, wi = Math.min(it ?? Pt, Pt, re ? $t : Pt), De = Math.max(ut ?? Zt, Zt, re ? st : Zt);
            (!b.isOrdinal || I !== 1 || r) && (j < wi && (j = wi, I >= 1 && (q = j + kt)), q > De && (q = De, I >= 1 && (j = q - kt)), (r || b.series.length && (j !== $t || q !== st) && j >= wi && q <= De) && (o ? o[b.coll].push({ axis: b, min: j, max: q }) : (b.isPanning = l !== "zoom", b.isPanning && (x = !0), b.setExtremes(r ? void 0 : j, r ? void 0 : q, !1, !1, { move: Y, trigger: l, scale: I }), !r && (j > wi || q < De) && l !== "mousewheel" && (f = !0)), c = !0), this.hasCartesianSeries || r || l === "mousewheel" || (f = !0), i && (this[M ? "mouseDownX" : "mouseDownY"] = i[M ? "chartX" : "chartY"]));
          }
          return c && (o ? pt(this, "selection", o, () => {
            delete t.selection, t.trigger = "zoom", this.transform(t);
          }) : (!f || x || this.resetZoomButton ? !f && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()) : this.showResetZoom(), this.redraw(l === "zoom" && (this.options.chart.animation ?? this.pointCount < 100)))), c;
        }
      }
      xi(yi.prototype, { callbacks: [], collectionsWithInit: { xAxis: [yi.prototype.addAxis, [!0]], yAxis: [yi.prototype.addAxis, [!1]], series: [yi.prototype.addSeries] }, collectionsWithUpdate: ["xAxis", "yAxis", "series"], propsRequireDirtyBox: ["backgroundColor", "borderColor", "borderWidth", "borderRadius", "plotBackgroundColor", "plotBackgroundImage", "plotBorderColor", "plotBorderWidth", "plotShadow", "shadow"], propsRequireReflow: ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "spacing", "spacingTop", "spacingRight", "spacingBottom", "spacingLeft"], propsRequireUpdateSeries: ["chart.inverted", "chart.polar", "chart.ignoreHiddenSeries", "chart.type", "colors", "plotOptions", "time", "tooltip"] });
      let { stop: Vd } = It, { composed: qd } = X, { addEvent: bi, createElement: An, css: gl, defined: ml, erase: Kd, merge: hh, pushUnique: dh } = $;
      function $d() {
        let h = this.scrollablePlotArea;
        (this.scrollablePixelsX || this.scrollablePixelsY) && !h && (this.scrollablePlotArea = h = new Kr(this)), h?.applyFixed();
      }
      function ch() {
        this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0);
      }
      class Kr {
        static compose(t, e, i) {
          dh(qd, this.compose) && (bi(t, "afterInit", ch), bi(e, "afterSetChartSize", (s) => this.afterSetSize(s.target, s)), bi(e, "render", $d), bi(i, "show", ch));
        }
        static afterSetSize(t, e) {
          let i, s, r, { minWidth: o, minHeight: n } = t.options.chart.scrollablePlotArea || {}, { clipBox: l, plotBox: d, inverted: m, renderer: c } = t;
          if (!c.forExport) if (o ? (t.scrollablePixelsX = i = Math.max(0, o - t.chartWidth), i && (t.scrollablePlotBox = hh(t.plotBox), d.width = t.plotWidth += i, l[m ? "height" : "width"] += i, r = !0)) : n && (t.scrollablePixelsY = s = Math.max(0, n - t.chartHeight), ml(s) && (t.scrollablePlotBox = hh(t.plotBox), d.height = t.plotHeight += s, l[m ? "width" : "height"] += s, r = !1)), ml(r)) {
            if (!e.skipAxes) for (let f of t.axes) (f.horiz === r || t.hasParallelCoordinates && f.coll === "yAxis") && (f.setAxisSize(), f.setAxisTranslation());
          } else delete t.scrollablePlotBox;
        }
        constructor(t) {
          let e, i = t.options.chart, s = Ii.getRendererType(), r = i.scrollablePlotArea || {}, o = this.moveFixedElements.bind(this), n = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
          t.scrollablePixelsX && (n.overflowX = "auto"), t.scrollablePixelsY && (n.overflowY = "auto"), this.chart = t;
          let l = this.parentDiv = An("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, t.renderTo), d = this.scrollingContainer = An("div", { className: "highcharts-scrolling" }, n, l), m = this.innerContainer = An("div", { className: "highcharts-inner-container" }, void 0, d), c = this.fixedDiv = An("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (i.style?.zIndex || 0) + 2, top: 0 }, void 0, !0), f = this.fixedRenderer = new s(c, t.chartWidth, t.chartHeight, i.style);
          this.mask = f.path().attr({ fill: i.backgroundColor || "#fff", "fill-opacity": r.opacity ?? 0.85, zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), d.parentNode.insertBefore(c, d), gl(t.renderTo, { overflow: "visible" }), bi(t, "afterShowResetZoom", o), bi(t, "afterApplyDrilldown", o), bi(t, "afterLayOutTitles", o), bi(d, "scroll", () => {
            let { pointer: x, hoverPoint: b } = t;
            x && (delete x.chartPosition, b && (e = b), x.runPointActions(void 0, e, !0));
          }), m.appendChild(t.container);
        }
        applyFixed() {
          let { chart: t, fixedRenderer: e, isDirty: i, scrollingContainer: s } = this, { axisOffset: r, chartWidth: o, chartHeight: n, container: l, plotHeight: d, plotLeft: m, plotTop: c, plotWidth: f, scrollablePixelsX: x = 0, scrollablePixelsY: b = 0 } = t, { scrollPositionX: M = 0, scrollPositionY: k = 0 } = t.options.chart.scrollablePlotArea || {}, v = o + x, S = n + b;
          e.setSize(o, n), (i ?? !0) && (this.isDirty = !1, this.moveFixedElements()), Vd(t.container), gl(l, { width: `${v}px`, height: `${S}px` }), t.renderer.boxWrapper.attr({ width: v, height: S, viewBox: [0, 0, v, S].join(" ") }), t.chartBackground?.attr({ width: v, height: S }), gl(s, { width: `${o}px`, height: `${n}px` }), ml(i) || (s.scrollLeft = x * M, s.scrollTop = b * k);
          let C = c - r[0] - 1, O = m - r[3] - 1, L = c + d + r[2] + 1, D = m + f + r[1] + 1, N = m + f - x, I = c + d - b, W = [["M", 0, 0]];
          x ? W = [["M", 0, C], ["L", m - 1, C], ["L", m - 1, L], ["L", 0, L], ["Z"], ["M", N, C], ["L", o, C], ["L", o, L], ["L", N, L], ["Z"]] : b && (W = [["M", O, 0], ["L", O, c - 1], ["L", D, c - 1], ["L", D, 0], ["Z"], ["M", O, I], ["L", O, n], ["L", D, n], ["L", D, I], ["Z"]]), t.redrawTrigger !== "adjustHeight" && this.mask.attr({ d: W });
        }
        moveFixedElements() {
          let t, { container: e, inverted: i, scrollablePixelsX: s, scrollablePixelsY: r } = this.chart, o = this.fixedRenderer, n = Kr.fixedSelectors;
          if (s && !i ? t = ".highcharts-yaxis" : s && i || r && !i ? t = ".highcharts-xaxis" : r && i && (t = ".highcharts-yaxis"), t && !(this.chart.hasParallelCoordinates && t === ".highcharts-yaxis")) for (let l of [`${t}:not(.highcharts-radial-axis)`, `${t}-labels:not(.highcharts-radial-axis-labels)`]) dh(n, l);
          else for (let l of [".highcharts-xaxis", ".highcharts-yaxis"]) for (let d of [`${l}:not(.highcharts-radial-axis)`, `${l}-labels:not(.highcharts-radial-axis-labels)`]) Kd(n, d);
          for (let l of n) [].forEach.call(e.querySelectorAll(l), (d) => {
            (d.namespaceURI === o.SVG_NS ? o.box : o.box.parentNode).appendChild(d), d.style.pointerEvents = "auto";
          });
        }
      }
      Kr.fixedSelectors = [".highcharts-breadcrumbs-group", ".highcharts-contextbutton", ".highcharts-caption", ".highcharts-credits", ".highcharts-drillup-button", ".highcharts-legend", ".highcharts-legend-checkbox", ".highcharts-navigator-series", ".highcharts-navigator-xaxis", ".highcharts-navigator-yaxis", ".highcharts-navigator", ".highcharts-range-selector-group", ".highcharts-reset-zoom", ".highcharts-scrollbar", ".highcharts-subtitle", ".highcharts-title"];
      let { format: Zd } = jt, { series: _d } = Dt, { destroyObjectProperties: Jd, fireEvent: ph, getAlignFactor: fl, isNumber: xl, pick: $r } = $, uh = class {
        constructor(h, t, e, i, s) {
          let r = h.chart.inverted, o = h.reversed;
          this.axis = h;
          let n = this.isNegative = !!e != !!o;
          this.options = t = t || {}, this.x = i, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = !1, this.stack = s, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = { align: t.align || (r ? n ? "left" : "right" : "center"), verticalAlign: t.verticalAlign || (r ? "middle" : n ? "bottom" : "top"), y: t.y, x: t.x }, this.textAlign = t.textAlign || (r ? n ? "right" : "left" : "center");
        }
        destroy() {
          Jd(this, this.axis);
        }
        render(h) {
          let t = this.axis.chart, e = this.options, i = e.format, s = i ? Zd(i, this, t) : e.formatter.call(this);
          if (this.label) this.label.attr({ text: s, visibility: "hidden" });
          else {
            this.label = t.renderer.label(s, null, void 0, e.shape, void 0, void 0, e.useHTML, !1, "stack-labels");
            let r = { r: e.borderRadius || 0, text: s, padding: $r(e.padding, 5), visibility: "hidden" };
            t.styledMode || (r.fill = e.backgroundColor, r.stroke = e.borderColor, r["stroke-width"] = e.borderWidth, this.label.css(e.style || {})), this.label.attr(r), this.label.added || this.label.add(h);
          }
          this.label.labelrank = t.plotSizeY, ph(this, "afterRender");
        }
        setOffset(h, t, e, i, s, r) {
          let { alignOptions: o, axis: n, label: l, options: d, textAlign: m } = this, c = n.chart, f = this.getStackBox({ xOffset: h, width: t, boxBottom: e, boxTop: i, defaultX: s, xAxis: r }), { verticalAlign: x } = o;
          if (l && f) {
            let b = l.getBBox(void 0, 0), M = l.padding, k = $r(d.overflow, "justify") === "justify", v;
            o.x = d.x || 0, o.y = d.y || 0;
            let { x: S, y: C } = this.adjustStackPosition({ labelBox: b, verticalAlign: x, textAlign: m });
            f.x -= S, f.y -= C, l.align(o, !1, f), (v = c.isInsidePlot(l.alignAttr.x + o.x + S, l.alignAttr.y + o.y + C)) || (k = !1), k && _d.prototype.justifyDataLabel.call(n, l, o, l.alignAttr, b, f), l.attr({ x: l.alignAttr.x, y: l.alignAttr.y, rotation: d.rotation, rotationOriginX: b.width * fl(d.textAlign || "center"), rotationOriginY: b.height / 2 }), $r(!k && d.crop, !0) && (v = xl(l.x) && xl(l.y) && c.isInsidePlot(l.x - M + (l.width || 0), l.y) && c.isInsidePlot(l.x + M, l.y)), l[v ? "show" : "hide"]();
          }
          ph(this, "afterSetOffset", { xOffset: h, width: t });
        }
        adjustStackPosition({ labelBox: h, verticalAlign: t, textAlign: e }) {
          return { x: h.width / 2 + h.width / 2 * (2 * fl(e) - 1), y: h.height / 2 * 2 * (1 - fl(t)) };
        }
        getStackBox(h) {
          let t = this.axis, e = t.chart, { boxTop: i, defaultX: s, xOffset: r, width: o, boxBottom: n } = h, l = t.stacking.usePercentage ? 100 : $r(i, this.total, 0), d = t.toPixels(l), m = h.xAxis || e.xAxis[0], c = $r(s, m.translate(this.x)) + r, f = Math.abs(d - t.toPixels(n || xl(t.min) && t.logarithmic && t.logarithmic.lin2log(t.min) || 0)), x = e.inverted, b = this.isNegative;
          return x ? { x: (b ? d : d - f) - e.plotLeft, y: m.height - c - o + m.top - e.plotTop, width: f, height: o } : { x: c + m.transB - e.plotLeft, y: (b ? d - f : d) - e.plotTop, width: o, height: f };
        }
      }, { getDeferredAnimation: Qd } = It, { series: { prototype: tc } } = Dt, { addEvent: gh, correctFloat: Zr, defined: mh, destroyObjectProperties: ec, fireEvent: ic, isNumber: yl, objectEach: Ki, pick: bl } = $;
      function sc() {
        let h = this.inverted;
        this.axes.forEach((t) => {
          t.stacking?.stacks && t.hasVisibleSeries && (t.stacking.oldStacks = t.stacking.stacks);
        }), this.series.forEach((t) => {
          let e = t.xAxis?.options || {};
          t.options.stacking && t.reserveSpace() && (t.stackKey = [t.type, bl(t.options.stack, ""), h ? e.top : e.left, h ? e.height : e.width].join(","));
        });
      }
      function rc() {
        let h = this.stacking;
        if (h) {
          let t = h.stacks;
          Ki(t, (e, i) => {
            ec(e), delete t[i];
          }), h.stackTotalGroup?.destroy();
        }
      }
      function oc() {
        this.stacking || (this.stacking = new cc(this));
      }
      function nc(h, t, e, i) {
        return !mh(h) || h.x !== t || i && h.stackKey !== i ? h = { x: t, index: 0, key: i, stackKey: i } : h.index++, h.key = [e, t, h.index].join(","), h;
      }
      function ac() {
        let h, t = this, e = t.yAxis, i = t.stackKey || "", s = e.stacking.stacks, r = t.getColumn("x", !0), o = t.options.stacking, n = t[o + "Stacker"];
        n && [i, "-" + i].forEach((l) => {
          let d = r.length, m, c, f;
          for (; d--; ) m = r[d], h = t.getStackIndicator(h, m, t.index, l), c = s[l]?.[m], (f = c?.points[h.key || ""]) && n.call(t, f, c, d);
        });
      }
      function lc(h, t, e) {
        let i = t.total ? 100 / t.total : 0;
        h[0] = Zr(h[0] * i), h[1] = Zr(h[1] * i), this.stackedYData[e] = h[1];
      }
      function hc(h) {
        (this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && this.chart.series.length > 1 ? tc.setStackedPoints.call(this, h, "group") : h.stacking.resetStacks());
      }
      function dc(h, t) {
        let e, i, s, r, o, n, l, d = t || this.options.stacking;
        if (!d || !this.reserveSpace() || ({ group: "xAxis" }[d] || "yAxis") !== h.coll) return;
        let m = this.getColumn("x", !0), c = this.getColumn(this.pointValKey || "y", !0), f = [], x = c.length, b = this.options, M = b.threshold || 0, k = b.startFromThreshold ? M : 0, v = b.stack, S = t ? `${this.type},${d}` : this.stackKey || "", C = "-" + S, O = this.negStacks, L = h.stacking, D = L.stacks, N = L.oldStacks;
        for (L.stacksTouched += 1, l = 0; l < x; l++) {
          let I = m[l] || 0, W = c[l], Y = yl(W) && W || 0;
          n = (e = this.getStackIndicator(e, I, this.index)).key || "", D[o = (i = O && Y < (k ? 0 : M)) ? C : S] || (D[o] = {}), D[o][I] || (N[o]?.[I] ? (D[o][I] = N[o][I], D[o][I].total = null) : D[o][I] = new uh(h, h.options.stackLabels, !!i, I, v)), s = D[o][I], W !== null ? (s.points[n] = s.points[this.index] = [bl(s.cumulative, k)], mh(s.cumulative) || (s.base = n), s.touched = L.stacksTouched, e.index > 0 && this.singleStacks === !1 && (s.points[n][0] = s.points[this.index + "," + I + ",0"][0])) : (delete s.points[n], delete s.points[this.index]);
          let H = s.total || 0;
          d === "percent" ? (r = i ? S : C, H = O && D[r]?.[I] ? (r = D[r][I]).total = Math.max(r.total || 0, H) + Math.abs(Y) : Zr(H + Math.abs(Y))) : d === "group" ? yl(W) && H++ : H = Zr(H + Y), d === "group" ? s.cumulative = (H || 1) - 1 : s.cumulative = Zr(bl(s.cumulative, k) + Y), s.total = H, W !== null && (s.points[n].push(s.cumulative), f[l] = s.cumulative, s.hasValidPoints = !0);
        }
        d === "percent" && (L.usePercentage = !0), d !== "group" && (this.stackedYData = f), L.oldStacks = {};
      }
      class cc {
        constructor(t) {
          this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = t;
        }
        buildStacks() {
          let t, e, i = this.axis, s = i.series, r = i.coll === "xAxis", o = i.options.reversedStacks, n = s.length;
          for (this.resetStacks(), this.usePercentage = !1, e = n; e--; ) t = s[o ? e : n - e - 1], r && t.setGroupedPoints(i), t.setStackedPoints(i);
          if (!r) for (e = 0; e < n; e++) s[e].modifyStacks();
          ic(i, "afterBuildStacks");
        }
        cleanStacks() {
          this.oldStacks && (this.stacks = this.oldStacks, Ki(this.stacks, (t) => {
            Ki(t, (e) => {
              e.cumulative = e.total;
            });
          }));
        }
        resetStacks() {
          Ki(this.stacks, (t) => {
            Ki(t, (e, i) => {
              yl(e.touched) && e.touched < this.stacksTouched ? (e.destroy(), delete t[i]) : (e.total = null, e.cumulative = null);
            });
          });
        }
        renderStackTotals() {
          let t = this.axis, e = t.chart, i = e.renderer, s = this.stacks, r = Qd(e, t.options.stackLabels?.animation || !1), o = this.stackTotalGroup = this.stackTotalGroup || i.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add();
          o.translate(e.plotLeft, e.plotTop), Ki(s, (n) => {
            Ki(n, (l) => {
              l.render(o);
            });
          }), o.animate({ opacity: 1 }, r);
        }
      }
      (Ti || (Ti = {})).compose = function(h, t, e) {
        let i = t.prototype, s = e.prototype;
        i.getStacks || (gh(h, "init", oc), gh(h, "destroy", rc), i.getStacks = sc, s.getStackIndicator = nc, s.modifyStacks = ac, s.percentStacker = lc, s.setGroupedPoints = hc, s.setStackedPoints = dc);
      };
      let pc = Ti, { defined: uc, merge: fh, isObject: gc } = $;
      class xh extends se {
        drawGraph() {
          let t = this.options, e = (this.gappedPath || this.getGraphPath).call(this), i = this.chart.styledMode;
          [this, ...this.zones].forEach((s, r) => {
            let o, n = s.graph, l = n ? "animate" : "attr", d = s.dashStyle || t.dashStyle;
            n ? (n.endX = this.preventGraphAnimation ? null : e.xMap, n.animate({ d: e })) : e.length && (s.graph = n = this.chart.renderer.path(e).addClass("highcharts-graph" + (r ? ` highcharts-zone-graph-${r - 1} ` : " ") + (r && s.className || "")).attr({ zIndex: 1 }).add(this.group)), n && !i && (o = { stroke: !r && t.lineColor || s.color || this.color || "#cccccc", "stroke-width": t.lineWidth || 0, fill: this.fillGraph && this.color || "none" }, d ? o.dashstyle = d : t.linecap !== "square" && (o["stroke-linecap"] = o["stroke-linejoin"] = "round"), n[l](o).shadow(t.shadow && fh({ filterUnits: "userSpaceOnUse" }, gc(t.shadow) ? t.shadow : {}))), n && (n.startX = e.xMap, n.isArea = e.isArea);
          });
        }
        getGraphPath(t, e, i) {
          let s = this, r = s.options, o = [], n = [], l, d = r.step, m = (t = t || s.points).reversed;
          return m && t.reverse(), (d = { right: 1, center: 2 }[d] || d && 3) && m && (d = 4 - d), (t = this.getValidPoints(t, !1, r.nullInteraction || !(r.connectNulls && !e && !i))).forEach(function(c, f) {
            let x, b = c.plotX, M = c.plotY, k = t[f - 1], v = c.isNull || typeof M != "number";
            (c.leftCliff || k?.rightCliff) && !i && (l = !0), v && !uc(e) && f > 0 ? l = !r.connectNulls : v && !e ? l = !0 : (f === 0 || l ? x = [["M", c.plotX, c.plotY]] : s.getPointSpline ? x = [s.getPointSpline(t, c, f)] : d ? (x = d === 1 ? [["L", k.plotX, M]] : d === 2 ? [["L", (k.plotX + b) / 2, k.plotY], ["L", (k.plotX + b) / 2, M]] : [["L", b, k.plotY]]).push(["L", b, M]) : x = [["L", b, M]], n.push(c.x), d && (n.push(c.x), d === 2 && n.push(c.x)), o.push.apply(o, x), l = !1);
          }), o.xMap = n, s.graphPath = o, o;
        }
      }
      xh.defaultOptions = fh(se.defaultOptions, { legendSymbol: "lineMarker" }), Dt.registerSeriesType("line", xh);
      let { seriesTypes: { line: vl } } = Dt, { extend: mc, merge: fc, objectEach: xc, pick: Tn } = $;
      class wl extends vl {
        drawGraph() {
          this.areaPath = [], super.drawGraph.apply(this);
          let { areaPath: t, options: e } = this;
          [this, ...this.zones].forEach((i, s) => {
            let r = {}, o = i.fillColor || e.fillColor, n = i.area, l = n ? "animate" : "attr";
            n ? (n.endX = this.preventGraphAnimation ? null : t.xMap, n.animate({ d: t })) : (r.zIndex = 0, (n = i.area = this.chart.renderer.path(t).addClass("highcharts-area" + (s ? ` highcharts-zone-area-${s - 1} ` : " ") + (s && i.className || "")).add(this.group)).isArea = !0), this.chart.styledMode || (r.fill = o || i.color || this.color, r["fill-opacity"] = o ? 1 : e.fillOpacity ?? 0.75, n.css({ pointerEvents: this.stickyTracking ? "none" : "auto" })), n[l](r), n.startX = t.xMap, n.shiftUnit = e.step ? 2 : 1;
          });
        }
        getGraphPath(t) {
          let e, i, s, r = vl.prototype.getGraphPath, o = this.options, n = o.stacking, l = this.yAxis, d = [], m = [], c = this.index, f = l.stacking.stacks[this.stackKey], x = o.threshold, b = Math.round(l.getThreshold(o.threshold)), M = Tn(o.connectNulls, n === "percent"), k = function(D, N, I) {
            let W = t[D], Y = n && f[W.x].points[c], H = W[I + "Null"] || 0, V = W[I + "Cliff"] || 0, Z, J, j = !0;
            V || H ? (Z = (H ? Y[0] : Y[1]) + V, J = Y[0] + V, j = !!H) : !n && t[N] && t[N].isNull && (Z = J = x), Z !== void 0 && (m.push({ plotX: e, plotY: Z === null ? b : l.getThreshold(Z), isNull: j, isCliff: !0 }), d.push({ plotX: e, plotY: J === null ? b : l.getThreshold(J), doCurve: !1 }));
          };
          t = t || this.points, n && (t = this.getStackPoints(t));
          for (let D = 0, N = t.length; D < N; ++D) n || (t[D].leftCliff = t[D].rightCliff = t[D].leftNull = t[D].rightNull = void 0), i = t[D].isNull, e = Tn(t[D].rectPlotX, t[D].plotX), s = n ? Tn(t[D].yBottom, b) : b, (!i || M) && (M || k(D, D - 1, "left"), i && !n && M || (m.push(t[D]), d.push({ x: D, plotX: e, plotY: s })), M || k(D, D + 1, "right"));
          let v = r.call(this, m, !0, !0);
          d.reversed = !0;
          let S = r.call(this, d, !0, !0), C = S[0];
          C && C[0] === "M" && (S[0] = ["L", C[1], C[2]]);
          let O = v.concat(S);
          O.length && O.push(["Z"]);
          let L = r.call(this, m, !1, M);
          return this.chart.series.length > 1 && n && m.some((D) => D.isCliff) && (O.hasStackedCliffs = L.hasStackedCliffs = !0), O.xMap = v.xMap, this.areaPath = O, L;
        }
        getStackPoints(t) {
          let e = this, i = [], s = [], r = this.xAxis, o = this.yAxis, n = o.stacking.stacks[this.stackKey], l = {}, d = o.series, m = d.length, c = o.options.reversedStacks ? 1 : -1, f = d.indexOf(e);
          if (t = t || this.points, this.options.stacking) {
            for (let b = 0; b < t.length; b++) t[b].leftNull = t[b].rightNull = void 0, l[t[b].x] = t[b];
            xc(n, function(b, M) {
              b.total !== null && s.push(M);
            }), s.sort(function(b, M) {
              return b - M;
            });
            let x = d.map((b) => b.visible);
            s.forEach(function(b, M) {
              let k = 0, v, S;
              if (l[b] && !l[b].isNull) i.push(l[b]), [-1, 1].forEach(function(C) {
                let O = C === 1 ? "rightNull" : "leftNull", L = n[s[M + C]], D = 0;
                if (L) {
                  let N = f;
                  for (; N >= 0 && N < m; ) {
                    let I = d[N].index;
                    !(v = L.points[I]) && (I === e.index ? l[b][O] = !0 : x[N] && (S = n[b].points[I]) && (D -= S[1] - S[0])), N += c;
                  }
                }
                l[b][C === 1 ? "rightCliff" : "leftCliff"] = D;
              });
              else {
                let C = f;
                for (; C >= 0 && C < m; ) {
                  let O = d[C].index;
                  if (v = n[b].points[O]) {
                    k = v[1];
                    break;
                  }
                  C += c;
                }
                k = Tn(k, 0), k = o.translate(k, 0, 1, 0, 1), i.push({ isNull: !0, plotX: r.translate(b, 0, 0, 0, 1), x: b, plotY: k, yBottom: k });
              }
            });
          }
          return i;
        }
      }
      wl.defaultOptions = fc(vl.defaultOptions, { threshold: 0, legendSymbol: "areaMarker" }), mc(wl.prototype, { singleStacks: !1 }), Dt.registerSeriesType("area", wl);
      let { line: yh } = Dt.seriesTypes, { merge: yc, pick: Sn } = $;
      class kl extends yh {
        getPointSpline(t, e, i) {
          let s, r, o, n, l = e.plotX || 0, d = e.plotY || 0, m = t[i - 1], c = t[i + 1];
          function f(b) {
            return b && !b.isNull && b.doCurve !== !1 && !e.isCliff;
          }
          if (f(m) && f(c)) {
            let b = m.plotX || 0, M = m.plotY || 0, k = c.plotX || 0, v = c.plotY || 0, S = 0;
            s = (1.5 * l + b) / 2.5, r = (1.5 * d + M) / 2.5, o = (1.5 * l + k) / 2.5, n = (1.5 * d + v) / 2.5, o !== s && (S = (n - r) * (o - l) / (o - s) + d - n), r += S, n += S, r > M && r > d ? (r = Math.max(M, d), n = 2 * d - r) : r < M && r < d && (r = Math.min(M, d), n = 2 * d - r), n > v && n > d ? (n = Math.max(v, d), r = 2 * d - n) : n < v && n < d && (n = Math.min(v, d), r = 2 * d - n), e.rightContX = o, e.rightContY = n, e.controlPoints = { low: [s, r], high: [o, n] };
          }
          let x = ["C", Sn(m.rightContX, m.plotX, 0), Sn(m.rightContY, m.plotY, 0), Sn(s, l, 0), Sn(r, d, 0), l, d];
          return m.rightContX = m.rightContY = void 0, x;
        }
      }
      kl.defaultOptions = yc(yh.defaultOptions), Dt.registerSeriesType("spline", kl);
      let bh = kl, { area: bc, area: { prototype: Ml } } = Dt.seriesTypes, { extend: vc, merge: wc } = $;
      class Al extends bh {
      }
      Al.defaultOptions = wc(bh.defaultOptions, bc.defaultOptions), vc(Al.prototype, { getGraphPath: Ml.getGraphPath, getStackPoints: Ml.getStackPoints, drawGraph: Ml.drawGraph }), Dt.registerSeriesType("areaspline", Al);
      let { animObject: kc } = It, { parse: Mc } = bt, { noop: Ac } = X, { clamp: Cn, crisp: En, defined: vh, extend: wh, fireEvent: kh, isArray: Mh, isNumber: Pn, merge: Tl, pick: _r, objectEach: Tc } = $;
      class On extends se {
        animate(t) {
          let e, i, s = this, r = this.yAxis, o = r.pos, n = r.reversed, l = s.options, { clipOffset: d, inverted: m } = this.chart, c = {}, f = m ? "translateX" : "translateY";
          t && d ? (c.scaleY = 1e-3, i = Cn(r.toPixels(l.threshold || 0), o, o + r.len), m ? c.translateX = (i += n ? -Math.floor(d[0]) : Math.ceil(d[2])) - r.len : c.translateY = i += n ? Math.ceil(d[0]) : -Math.floor(d[2]), s.clipBox && s.setClip(), s.group.attr(c)) : (e = Number(s.group.attr(f)), s.group.animate({ scaleY: 1 }, wh(kc(s.options.animation), { step: function(x, b) {
            s.group && (c[f] = e + b.pos * (o - e), s.group.attr(c));
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
          let t = this, e = t.options, i = t.xAxis, s = t.yAxis, r = i.options.reversedStacks, o = i.reversed && !r || !i.reversed && r, n = {}, l, d = 0;
          e.grouping === !1 ? d = 1 : t.chart.series.forEach(function(M) {
            let k, v = M.yAxis, S = M.options;
            M.type === t.type && M.reserveSpace() && s.len === v.len && s.pos === v.pos && (S.stacking && S.stacking !== "group" ? (n[l = M.stackKey] === void 0 && (n[l] = d++), k = n[l]) : S.grouping !== !1 && (k = d++), M.columnIndex = k);
          });
          let m = Math.min(Math.abs(i.transA) * (!i.brokenAxis?.hasBreaks && i.ordinal?.slope || e.pointRange || i.closestPointRange || i.tickInterval || 1), i.len), c = m * e.groupPadding, f = (m - 2 * c) / (d || 1), x = Math.min(e.maxPointWidth || i.len, _r(e.pointWidth, f * (1 - 2 * e.pointPadding))), b = (t.columnIndex || 0) + +!!o;
          return t.columnMetrics = { width: x, offset: (f - x) / 2 + (c + b * f - m / 2) * (o ? -1 : 1), paddedWidth: f, columnCount: d }, t.columnMetrics;
        }
        crispCol(t, e, i, s) {
          let r = this.borderWidth, o = this.chart.inverted;
          return s = En(e + s, r, o) - (e = En(e, r, o)), this.options.crisp && (i = En(t + i, r) - (t = En(t, r))), { x: t, y: e, width: i, height: s };
        }
        adjustForMissingColumns(t, e, i, s) {
          if (!i.isNull && s.columnCount > 1) {
            let r = this.xAxis.series.filter((d) => d.visible).map((d) => d.index), o = 0, n = 0;
            Tc(this.xAxis.stacking?.stacks, (d) => {
              let m = typeof i.x == "number" ? d[i.x.toString()]?.points : void 0, c = m?.[this.index], f = {};
              if (m && Mh(c)) {
                let x = this.index, b = Object.keys(m).filter((M) => !M.match(",") && m[M] && m[M].length > 1).map(parseFloat).filter((M) => r.indexOf(M) !== -1).filter((M) => {
                  let k = this.chart.series[M].options, v = k.stacking && k.stack;
                  if (vh(v)) {
                    if (Pn(f[v])) return x === M && (x = f[v]), !1;
                    f[v] = M;
                  }
                  return !0;
                }).sort((M, k) => k - M);
                o = b.indexOf(x), n = b.length;
              }
            }), o = this.xAxis.reversed ? n - 1 - o : o;
            let l = (n - 1) * s.paddedWidth + e;
            t = (i.plotX || 0) + l / 2 - e - o * s.paddedWidth;
          }
          return t;
        }
        translate() {
          let t = this, e = t.chart, i = t.options, s = t.dense = t.closestPointRange * t.xAxis.transA < 2, r = t.borderWidth = _r(i.borderWidth, +!s), o = t.xAxis, n = t.yAxis, l = i.threshold, d = _r(i.minPointLength, 5), m = t.getColumnMetrics(), c = m.width, f = t.pointXOffset = m.offset, x = t.dataMin, b = t.dataMax, M = t.translatedThreshold = n.getThreshold(l), k = t.barW = Math.max(c, 1 + 2 * r);
          i.pointPadding && i.crisp && (k = Math.ceil(k)), se.prototype.translate.apply(t), t.points.forEach(function(v) {
            let S = _r(v.yBottom, M), C = 999 + Math.abs(S), O = v.plotX || 0, L = Cn(v.plotY, -C, n.len + C), D, N = Math.min(L, S), I = Math.max(L, S) - N, W = c, Y = O + f, H = k;
            d && Math.abs(I) < d && (I = d, D = !n.reversed && !v.negative || n.reversed && v.negative, Pn(l) && Pn(b) && v.y === l && b <= l && (n.min || 0) < l && (x !== b || (n.max || 0) <= l) && (D = !D, v.negative = !v.negative), N = Math.abs(N - M) > d ? S - d : M - (D ? d : 0)), vh(v.options.pointWidth) && (Y -= Math.round(((W = H = Math.ceil(v.options.pointWidth)) - c) / 2)), i.centerInCategory && (Y = t.adjustForMissingColumns(Y, W, v, m)), v.barX = Y, v.pointWidth = W, v.tooltipPos = e.inverted ? [Cn(n.len + n.pos - e.plotLeft - L, n.pos - e.plotLeft, n.len + n.pos - e.plotLeft), o.len + o.pos - e.plotTop - Y - H / 2, I] : [o.left - e.plotLeft + Y + H / 2, Cn(L + n.pos - e.plotTop, n.pos - e.plotTop, n.len + n.pos - e.plotTop), I], v.shapeType = t.pointClass.prototype.shapeType || "roundedRect", v.shapeArgs = t.crispCol(Y, N, H, v.isNull ? 0 : I);
          }), kh(this, "afterColumnTranslate");
        }
        drawGraph() {
          this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
        }
        pointAttribs(t, e) {
          let i = this.options, s = this.pointAttrToOptions || {}, r = s.stroke || "borderColor", o = s["stroke-width"] || "borderWidth", n, l, d, m = t && t.color || this.color, c = t && t[r] || i[r] || m, f = t && t.options.dashStyle || i.dashStyle, x = t && t[o] || i[o] || this[o] || 0, b = t?.isNull && i.nullInteraction ? 0 : t?.opacity ?? i.opacity ?? 1;
          t && this.zones.length && (l = t.getZone(), m = t.options.color || l && (l.color || t.nonZonedColor) || this.color, l && (c = l.borderColor || c, f = l.dashStyle || f, x = l.borderWidth || x)), e && t && (d = (n = Tl(i.states[e], t.options.states && t.options.states[e] || {})).brightness, m = n.color || d !== void 0 && Mc(m).brighten(n.brightness).get() || m, c = n[r] || c, x = n[o] || x, f = n.dashStyle || f, b = _r(n.opacity, b));
          let M = { fill: m, stroke: c, "stroke-width": x, opacity: b };
          return f && (M.dashstyle = f), M;
        }
        drawPoints(t = this.points) {
          let e, i = this, s = this.chart, r = i.options, o = r.nullInteraction, n = s.renderer, l = r.animationLimit || 250;
          t.forEach(function(d) {
            let m = d.plotY, c = d.graphic, f = !!c, x = c && s.pointCount < l ? "animate" : "attr";
            Pn(m) && (d.y !== null || o) ? (e = d.shapeArgs, c && d.hasNewShapeType() && (c = c.destroy()), i.enabledDataSorting && (d.startXPos = i.xAxis.reversed ? -(e && e.width || 0) : i.xAxis.width), !c && (d.graphic = c = n[d.shapeType](e).add(d.group || i.group), c && i.enabledDataSorting && s.hasRendered && s.pointCount < l && (c.attr({ x: d.startXPos }), f = !0, x = "animate")), c && f && c[x](Tl(e)), s.styledMode || c[x](i.pointAttribs(d, d.selected && "select")).shadow(d.allowShadow !== !1 && r.shadow), c && (c.addClass(d.getClassName(), !0), c.attr({ visibility: d.visible ? "inherit" : "hidden" }))) : c && (d.graphic = c.destroy());
          });
        }
        drawTracker(t = this.points) {
          let e, i = this, s = i.chart, r = s.pointer, o = function(n) {
            r?.normalize(n);
            let l = r?.getPointFromEvent(n);
            r && l && i.options.enableMouseTracking && (s.isInsidePlot(n.chartX - s.plotLeft, n.chartY - s.plotTop, { visiblePlotOnly: !0 }) || r?.inClass(n.target, "highcharts-data-label")) && (r.isDirectTouch = !0, l.onMouseOver(n));
          };
          t.forEach(function(n) {
            e = Mh(n.dataLabels) ? n.dataLabels : n.dataLabel ? [n.dataLabel] : [], n.graphic && (n.graphic.element.point = n), e.forEach(function(l) {
              (l.div || l.element).point = n;
            });
          }), i._hasTracking || (i.trackerGroups.forEach(function(n) {
            i[n] && (i[n].addClass("highcharts-tracker").on("mouseover", o).on("mouseout", function(l) {
              r?.onTrackerMouseOut(l);
            }).on("touchstart", o), !s.styledMode && i.options.cursor && i[n].css({ cursor: i.options.cursor }));
          }), i._hasTracking = !0), kh(this, "afterDrawTracker");
        }
        remove() {
          let t = this, e = t.chart;
          e.hasRendered && e.series.forEach(function(i) {
            i.type === t.type && (i.isDirty = !0);
          }), se.prototype.remove.apply(t, arguments);
        }
      }
      On.defaultOptions = Tl(se.defaultOptions, { borderRadius: 3, centerInCategory: !1, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: 0.1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" }), wh(On.prototype, { directTouch: !0, getSymbol: Ac, negStacks: !0, trackerGroups: ["group", "dataLabelsGroup"] }), Dt.registerSeriesType("column", On);
      let Ln = On, { getDeferredAnimation: Sc } = It, { format: Cc } = jt, { defined: $i, extend: Ah, fireEvent: Sl, getAlignFactor: Th, isArray: vi, isString: Jr, merge: Qr, objectEach: Ec, pick: to, pInt: Pc, splat: Sh } = $;
      (function(h) {
        function t() {
          return l(this).some((m) => m?.enabled);
        }
        function e(m, c, f, x, b) {
          let { chart: M, enabledDataSorting: k } = this, v = this.isCartesian && M.inverted, S = m.plotX, C = m.plotY, O = f.rotation || 0, L = $i(S) && $i(C) && M.isInsidePlot(S, Math.round(C), { inverted: v, paneCoordinates: !0, series: this }), D = O === 0 && to(f.overflow, k ? "none" : "justify") === "justify", N = this.visible && m.visible !== !1 && $i(S) && (m.series.forceDL || k && !D || L || to(f.inside, !!this.options.stacking) && x && M.isInsidePlot(S, v ? x.x + 1 : x.y + x.height - 1, { inverted: v, paneCoordinates: !0, series: this })), I = m.pos();
          if (N && I) {
            var W;
            let Y = c.getBBox(), H = c.getBBox(void 0, 0);
            if (x = Ah({ x: I[0], y: Math.round(I[1]), width: 0, height: 0 }, x || {}), f.alignTo === "plotEdges" && this.isCartesian && (x[v ? "x" : "y"] = 0, x[v ? "width" : "height"] = this.yAxis?.len || 0), Ah(f, { width: Y.width, height: Y.height }), W = x, k && this.xAxis && !D && this.setDataLabelStartPos(m, c, b, L, W), c.align(Qr(f, { width: H.width, height: H.height }), !1, x, !1), c.alignAttr.x += Th(f.align) * (H.width - Y.width), c.alignAttr.y += Th(f.verticalAlign) * (H.height - Y.height), c[c.placed ? "animate" : "attr"]({ "text-align": c.alignAttr["text-align"] || "center", x: c.alignAttr.x + (Y.width - H.width) / 2, y: c.alignAttr.y + (Y.height - H.height) / 2, rotationOriginX: (c.width || 0) / 2, rotationOriginY: (c.height || 0) / 2 }), D && x.height >= 0) this.justifyDataLabel(c, f, c.alignAttr, Y, x, b);
            else if (to(f.crop, !0)) {
              let { x: V, y: Z } = c.alignAttr;
              N = M.isInsidePlot(V, Z, { paneCoordinates: !0, series: this }) && M.isInsidePlot(V + Y.width - 1, Z + Y.height - 1, { paneCoordinates: !0, series: this });
            }
            f.shape && !O && c[b ? "attr" : "animate"]({ anchorX: I[0], anchorY: I[1] });
          }
          b && k && (c.placed = !1), N || k && !D ? (c.show(), c.placed = !0) : (c.hide(), c.placed = !1);
        }
        function i() {
          return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6, this.chart.dataLabelsGroup);
        }
        function s(m) {
          let c = this.hasRendered || 0, f = this.initDataLabelsGroup().attr({ opacity: +c });
          return !c && f && (this.visible && f.show(), this.options.animation ? f.animate({ opacity: 1 }, m) : f.attr({ opacity: 1 })), f;
        }
        function r(m) {
          let c;
          m = m || this.points;
          let f = this, x = f.chart, b = f.options, M = x.renderer, { backgroundColor: k, plotBackgroundColor: v } = x.options.chart, S = M.getContrast(Jr(v) && v || Jr(k) && k || "#000000"), C = l(f), { animation: O, defer: L } = C[0], D = L ? Sc(x, O, f) : { defer: 0, duration: 0 };
          Sl(this, "drawDataLabels"), f.hasDataLabels?.() && (c = this.initDataLabels(D), m.forEach((N) => {
            let I = N.dataLabels || [], W = N.color || f.color;
            Sh(n(C, N.dlOptions || N.options?.dataLabels)).forEach((H, V) => {
              let Z = H.enabled && (N.visible || N.dataLabelOnHidden) && (!N.isNull || N.dataLabelOnNull) && (function(wt, kt) {
                let mt = kt.filter;
                if (mt) {
                  let Pt = mt.operator, Zt = wt[mt.property], re = mt.value;
                  return Pt === ">" && Zt > re || Pt === "<" && Zt < re || Pt === ">=" && Zt >= re || Pt === "<=" && Zt <= re || Pt === "==" && Zt == re || Pt === "===" && Zt === re || Pt === "!=" && Zt != re || Pt === "!==" && Zt !== re || !1;
                }
                return !0;
              })(N, H), { backgroundColor: J, borderColor: j, distance: q, style: _ = {} } = H, vt, ht, $t, st = {}, it = I[V], ut = !it, at;
              Z && (ht = $i(vt = to(H[N.formatPrefix + "Format"], H.format)) ? Cc(vt, N, x) : (H[N.formatPrefix + "Formatter"] || H.formatter).call(N, H), $t = H.rotation, !x.styledMode && (_.color = to(H.color, _.color, Jr(f.color) ? f.color : void 0, "#000000"), _.color === "contrast" ? (J !== "none" && (at = J), N.contrastColor = M.getContrast(at !== "auto" && Jr(at) && at || (Jr(W) ? W : "")), _.color = at || !$i(q) && H.inside || 0 > Pc(q || 0) || b.stacking ? N.contrastColor : S) : delete N.contrastColor, b.cursor && (_.cursor = b.cursor)), st = { r: H.borderRadius || 0, rotation: $t, padding: H.padding, zIndex: 1 }, x.styledMode || (st.fill = J === "auto" ? N.color : J, st.stroke = j === "auto" ? N.color : j, st["stroke-width"] = H.borderWidth), Ec(st, (wt, kt) => {
                wt === void 0 && delete st[kt];
              })), !it || Z && $i(ht) && !!(it.div || it.text?.foreignObject) == !!H.useHTML && (it.rotation && H.rotation || it.rotation === H.rotation) || (it = void 0, ut = !0), Z && $i(ht) && ht !== "" && (it ? st.text = ht : (it = M.label(ht, 0, 0, H.shape, void 0, void 0, H.useHTML, void 0, "data-label")).addClass(" highcharts-data-label-color-" + N.colorIndex + " " + (H.className || "") + (H.useHTML ? " highcharts-tracker" : "")), it && (it.options = H, it.attr(st), x.styledMode ? _.width && it.css({ width: _.width, textOverflow: _.textOverflow, whiteSpace: _.whiteSpace }) : it.css(_).shadow(H.shadow), Sl(it, "beforeAddingDataLabel", { labelOptions: H, point: N }), it.added || it.add(c), f.alignDataLabel(N, it, H, void 0, ut), it.isActive = !0, I[V] && I[V] !== it && I[V].destroy(), I[V] = it));
            });
            let Y = I.length;
            for (; Y--; ) I[Y]?.isActive ? I[Y].isActive = !1 : (I[Y]?.destroy(), I.splice(Y, 1));
            N.dataLabel = I[0], N.dataLabels = I;
          })), Sl(this, "afterDrawDataLabels");
        }
        function o(m, c, f, x, b, M) {
          let k = this.chart, v = c.align, S = c.verticalAlign, C = m.box ? 0 : m.padding || 0, O = k.inverted ? this.yAxis : this.xAxis, L = O ? O.left - k.plotLeft : 0, D = k.inverted ? this.xAxis : this.yAxis, N = D ? D.top - k.plotTop : 0, { x: I = 0, y: W = 0 } = c, Y, H;
          return (Y = (f.x || 0) + C + L) < 0 && (v === "right" && I >= 0 ? (c.align = "left", c.inside = !0) : I -= Y, H = !0), (Y = (f.x || 0) + x.width - C + L) > k.plotWidth && (v === "left" && I <= 0 ? (c.align = "right", c.inside = !0) : I += k.plotWidth - Y, H = !0), (Y = f.y + C + N) < 0 && (S === "bottom" && W >= 0 ? (c.verticalAlign = "top", c.inside = !0) : W -= Y, H = !0), (Y = (f.y || 0) + x.height - C + N) > k.plotHeight && (S === "top" && W <= 0 ? (c.verticalAlign = "bottom", c.inside = !0) : W += k.plotHeight - Y, H = !0), H && (c.x = I, c.y = W, m.placed = !M, m.align(c, void 0, b)), H;
        }
        function n(m, c) {
          let f = [], x;
          if (vi(m) && !vi(c)) f = m.map(function(b) {
            return Qr(b, c);
          });
          else if (vi(c) && !vi(m)) f = c.map(function(b) {
            return Qr(m, b);
          });
          else if (vi(m) || vi(c)) {
            if (vi(m) && vi(c)) for (x = Math.max(m.length, c.length); x--; ) f[x] = Qr(m[x], c[x]);
          } else f = Qr(m, c);
          return f;
        }
        function l(m) {
          let c = m.chart.options.plotOptions;
          return Sh(n(n(c?.series?.dataLabels, c?.[m.type]?.dataLabels), m.options.dataLabels));
        }
        function d(m, c, f, x, b) {
          let M = this.chart, k = M.inverted, v = this.xAxis, S = v.reversed, C = ((k ? c.height : c.width) || 0) / 2, O = m.pointWidth, L = O ? O / 2 : 0;
          c.startXPos = k ? b.x : S ? -C - L : v.width - C + L, c.startYPos = k ? S ? this.yAxis.height - C + L : -C - L : b.y, x ? c.visibility === "hidden" && (c.show(), c.attr({ opacity: 0 }).animate({ opacity: 1 })) : c.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, c.hide), M.hasRendered && (f && c.attr({ x: c.startXPos, y: c.startYPos }), c.placed = !0);
        }
        h.compose = function(m) {
          let c = m.prototype;
          c.initDataLabels || (c.initDataLabels = s, c.initDataLabelsGroup = i, c.alignDataLabel = e, c.drawDataLabels = r, c.justifyDataLabel = o, c.mergeArrays = n, c.setDataLabelStartPos = d, c.hasDataLabels = t);
        };
      })(Si || (Si = {}));
      let Dn = Si, { composed: Oc } = X, { series: Ch } = Dt, { merge: Lc, pushUnique: Dc } = $;
      (function(h) {
        function t(e, i, s, r, o) {
          let { chart: n, options: l } = this, d = n.inverted, m = this.xAxis?.len || n.plotSizeX || 0, c = this.yAxis?.len || n.plotSizeY || 0, f = e.dlBox || e.shapeArgs, x = e.below ?? (e.plotY || 0) > (this.translatedThreshold ?? c), b = s.inside ?? !!l.stacking;
          if (f) {
            if (r = Lc(f), s.overflow !== "allow" || s.crop !== !1 || l.clip !== !1) {
              r.y < 0 && (r.height += r.y, r.y = 0);
              let M = r.y + r.height - c;
              M > 0 && M < r.height - 1 && (r.height -= M);
            }
            d && (r = { x: c - r.y - r.height, y: m - r.x - r.width, width: r.height, height: r.width }), b || (d ? (r.x += x ? 0 : r.width, r.width = 0) : (r.y += x ? r.height : 0, r.height = 0));
          }
          s.align ?? (s.align = !d || b ? "center" : x ? "right" : "left"), s.verticalAlign ?? (s.verticalAlign = d || b ? "middle" : x ? "top" : "bottom"), Ch.prototype.alignDataLabel.call(this, e, i, s, r, o), s.inside && e.contrastColor && i.css({ color: e.contrastColor });
        }
        h.compose = function(e) {
          Dn.compose(Ch), Dc(Oc, "ColumnDataLabel") && (e.prototype.alignDataLabel = t);
        };
      })(Ci || (Ci = {}));
      let Ic = Ci, { extend: Bc, merge: Nc } = $;
      class Cl extends Ln {
      }
      Cl.defaultOptions = Nc(Ln.defaultOptions, {}), Bc(Cl.prototype, { inverted: !0 }), Dt.registerSeriesType("bar", Cl);
      let { column: Rc, line: Eh } = Dt.seriesTypes, { addEvent: zc, extend: Fc, merge: Hc } = $;
      class In extends Eh {
        applyJitter() {
          let t = this, e = this.options.jitter, i = this.points.length;
          e && this.points.forEach(function(s, r) {
            ["x", "y"].forEach(function(o, n) {
              if (e[o] && !s.isNull) {
                let l = `plot${o.toUpperCase()}`, d = t[`${o}Axis`], m = e[o] * d.transA;
                if (d && !d.logarithmic) {
                  let c = Math.max(0, (s[l] || 0) - m), f = Math.min(d.len, (s[l] || 0) + m);
                  s[l] = c + (f - c) * (function(x) {
                    let b = 1e4 * Math.sin(x);
                    return b - Math.floor(b);
                  })(r + n * i), o === "x" && (s.clientX = s.plotX);
                }
              }
            });
          });
        }
        drawGraph() {
          this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy());
        }
      }
      In.defaultOptions = Hc(Eh.defaultOptions, { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: { headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } }), Fc(In.prototype, { drawTracker: Rc.prototype.drawTracker, sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"] }), zc(In, "afterTranslate", function() {
        this.applyJitter();
      }), Dt.registerSeriesType("scatter", In);
      let { deg2rad: Ph } = X, { fireEvent: Wc, isNumber: El, pick: Bn, relativeLength: Xc } = $;
      (function(h) {
        h.getCenter = function() {
          let t = this.options, e = this.chart, i = 2 * (t.slicedOffset || 0), s = e.plotWidth - 2 * i, r = e.plotHeight - 2 * i, o = t.center, n = Math.min(s, r), l = t.thickness, d, m = t.size, c = t.innerSize || 0, f, x;
          typeof m == "string" && (m = parseFloat(m)), typeof c == "string" && (c = parseFloat(c));
          let b = [Bn(o?.[0], "50%"), Bn(o?.[1], "50%"), Bn(m && m < 0 ? void 0 : t.size, "100%"), Bn(c && c < 0 ? void 0 : t.innerSize || 0, "0%")];
          for (!e.angular || this instanceof se || (b[3] = 0), f = 0; f < 4; ++f) x = b[f], d = f < 2 || f === 2 && /%$/.test(x), b[f] = Xc(x, [s, r, n, b[2]][f]) + (d ? i : 0);
          return b[3] > b[2] && (b[3] = b[2]), El(l) && 2 * l < b[2] && l > 0 && (b[3] = b[2] - 2 * l), Wc(this, "afterGetCenter", { positions: b }), b;
        }, h.getStartAndEndRadians = function(t, e) {
          let i = El(t) ? t : 0, s = El(e) && e > i && e - i < 360 ? e : i + 360;
          return { start: Ph * (i + -90), end: Ph * (s + -90) };
        };
      })(Hs || (Hs = {}));
      let Oh = Hs, { setAnimation: Gc } = It, { addEvent: Lh, defined: Yc, extend: jc, isNumber: Uc, pick: Vc, relativeLength: qc } = $;
      class Dh extends Lt {
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
          Lh(this, "select", s), Lh(this, "unselect", s);
        }
        isValid() {
          return Uc(this.y) && this.y >= 0;
        }
        setVisible(t, e = !0) {
          t !== this.visible && this.update({ visible: t ?? !this.visible }, e, void 0, !1);
        }
        slice(t, e, i) {
          let s = this.series;
          Gc(i, s.chart), e = Vc(e, !0), this.sliced = this.options.sliced = t = Yc(t) ? t : !this.sliced, s.options.data[s.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate());
        }
      }
      jc(Dh.prototype, { connectorShapes: { fixedOffset: function(h, t, e) {
        let i = t.breakAt, s = t.touchingSliceAt, r = e.softConnector ? ["C", h.x + (h.alignment === "left" ? -5 : 5), h.y, 2 * i.x - s.x, 2 * i.y - s.y, i.x, i.y] : ["L", i.x, i.y];
        return [["M", h.x, h.y], r, ["L", s.x, s.y]];
      }, straight: function(h, t) {
        let e = t.touchingSliceAt;
        return [["M", h.x, h.y], ["L", e.x, e.y]];
      }, crookedLine: function(h, t, e) {
        let { angle: i = this.angle || 0, breakAt: s, touchingSliceAt: r } = t, { series: o } = this, [n, l, d] = o.center, m = d / 2, { plotLeft: c, plotWidth: f } = o.chart, x = h.alignment === "left", { x: b, y: M } = h, k = s.x;
        if (e.crookDistance) {
          let S = qc(e.crookDistance, 1);
          k = x ? n + m + (f + c - n - m) * (1 - S) : c + (n - m) * S;
        } else k = n + (l - M) * Math.tan(i - Math.PI / 2);
        let v = [["M", b, M]];
        return (x ? k <= b && k >= s.x : k >= b && k <= s.x) && v.push(["L", k, M]), v.push(["L", s.x, s.y], ["L", r.x, r.y]), v;
      } } });
      let { getStartAndEndRadians: Kc } = Oh, { noop: Ih } = X, { clamp: $c, extend: Zc, fireEvent: Bh, merge: Pl, pick: _c } = $;
      class Ol extends se {
        animate(t) {
          let e = this, i = e.points, s = e.startAngleRad;
          t || i.forEach(function(r) {
            let o = r.graphic, n = r.shapeArgs;
            o && n && (o.attr({ r: _c(r.startR, e.center && e.center[3] / 2), start: s, end: s }), o.animate({ r: n.r, start: n.start, end: n.end }, e.options.animation));
          });
        }
        drawEmpty() {
          let t, e, i = this.startAngleRad, s = this.endAngleRad, r = this.options;
          this.total === 0 && this.center ? (t = this.center[0], e = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(t, e, this.center[1] / 2, 0, i, s).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({ d: We.arc(t, e, this.center[2] / 2, 0, { start: i, end: s, innerR: this.center[3] / 2 }) }), this.chart.styledMode || this.graph.attr({ "stroke-width": r.borderWidth, fill: r.fillColor || "none", stroke: r.color || "#cccccc" })) : this.graph && (this.graph = this.graph.destroy());
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
          let r = this.center, o = this.radii ? this.radii[i.index] || 0 : r[2] / 2, n = s.dataLabelPosition, l = n?.distance || 0, d = Math.asin($c((t - r[1]) / (o + l), -1, 1));
          return r[0] + Math.cos(d) * (o + l) * (e ? -1 : 1) + (l > 0 ? (e ? -1 : 1) * (s.padding || 0) : 0);
        }
        hasData() {
          return this.points.some((t) => t.visible);
        }
        redrawPoints() {
          let t, e, i, s, r = this, o = r.chart;
          this.drawEmpty(), r.group && !o.styledMode && r.group.shadow(r.options.shadow), r.points.forEach(function(n) {
            let l = {};
            e = n.graphic, !n.isNull && e ? (s = n.shapeArgs, t = n.getTranslate(), o.styledMode || (i = r.pointAttribs(n, n.selected && "select")), n.delayedRendering ? (e.setRadialReference(r.center).attr(s).attr(t), o.styledMode || e.attr(i).attr({ "stroke-linejoin": "round" }), n.delayedRendering = !1) : (e.setRadialReference(r.center), o.styledMode || Pl(!0, l, i), Pl(!0, l, s, t), e.animate(l)), e.attr({ visibility: n.visible ? "inherit" : "hidden" }), e.addClass(n.getClassName(), !0)) : e && (n.graphic = e.destroy());
          });
        }
        sortByAngle(t, e) {
          t.sort(function(i, s) {
            return i.angle !== void 0 && (s.angle - i.angle) * e;
          });
        }
        translate(t) {
          Bh(this, "translate"), this.generatePoints();
          let e = this.options, i = e.slicedOffset, s = Kc(e.startAngle, e.endAngle), r = this.startAngleRad = s.start, o = (this.endAngleRad = s.end) - r, n = this.points, l = e.ignoreHiddenPoint, d = n.length, m, c, f, x, b, M, k, v = 0;
          for (t || (this.center = t = this.getCenter()), M = 0; M < d; M++) {
            k = n[M], m = r + v * o, k.isValid() && (!l || k.visible) && (v += k.percentage / 100), c = r + v * o;
            let S = { x: t[0], y: t[1], r: t[2] / 2, innerR: t[3] / 2, start: Math.round(1e3 * m) / 1e3, end: Math.round(1e3 * c) / 1e3 };
            k.shapeType = "arc", k.shapeArgs = S, (f = (c + m) / 2) > 1.5 * Math.PI ? f -= 2 * Math.PI : f < -Math.PI / 2 && (f += 2 * Math.PI), k.slicedTranslation = { translateX: Math.round(Math.cos(f) * i), translateY: Math.round(Math.sin(f) * i) }, x = Math.cos(f) * t[2] / 2, b = Math.sin(f) * t[2] / 2, k.tooltipPos = [t[0] + 0.7 * x, t[1] + 0.7 * b], k.half = +(f < -Math.PI / 2 || f > Math.PI / 2), k.angle = f;
          }
          Bh(this, "afterTranslate");
        }
        updateTotals() {
          let t = this.points, e = t.length, i = this.options.ignoreHiddenPoint, s, r, o = 0;
          for (s = 0; s < e; s++) (r = t[s]).isValid() && (!i || r.visible) && (o += r.y);
          for (s = 0, this.total = o; s < e; s++) (r = t[s]).percentage = o > 0 && (r.visible || !i) ? r.y / o * 100 : 0, r.total = o;
        }
      }
      Ol.defaultOptions = Pl(se.defaultOptions, { borderRadius: 3, center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { connectorPadding: 5, connectorShape: "crookedLine", crookDistance: void 0, distance: 30, enabled: !0, formatter: function() {
        return this.isNull ? void 0 : this.name;
      }, softConnector: !0, x: 0 }, fillColor: void 0, ignoreHiddenPoint: !0, inactiveOtherPoints: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: 0.1 } } }), Zc(Ol.prototype, { axisTypes: [], directTouch: !0, drawGraph: void 0, drawTracker: Ln.prototype.drawTracker, getCenter: Oh.getCenter, getSymbol: Ih, invertible: !1, isCartesian: !1, noSharedTooltip: !0, pointAttribs: Ln.prototype.pointAttribs, pointClass: Dh, requireSorting: !1, searchPoint: Ih, trackerGroups: ["group", "dataLabelsGroup"] }), Dt.registerSeriesType("pie", Ol);
      let { composed: Jc, noop: Qc } = X, { distribute: tp } = ps, { series: Nh } = Dt, { arrayMax: ep, clamp: Rh, defined: zh, isNumber: ip, pick: sp, pushUnique: rp, relativeLength: Fh } = $;
      (function(h) {
        let t = { radialDistributionY: function(o, n) {
          return (n.dataLabelPosition?.top || 0) + o.distributeBox.pos;
        }, radialDistributionX: function(o, n, l, d, m) {
          let c = m.dataLabelPosition;
          return o.getX(l < (c?.top || 0) + 2 || l > (c?.bottom || 0) - 2 ? d : l, n.half, n, m);
        }, justify: function(o, n, l, d) {
          return d[0] + (o.half ? -1 : 1) * (l + (n.dataLabelPosition?.distance || 0));
        }, alignToPlotEdges: function(o, n, l, d) {
          let m = o.getBBox().width;
          return n ? m + d : l - m - d;
        }, alignToConnectors: function(o, n, l, d) {
          let m = 0, c;
          return o.forEach(function(f) {
            (c = f.dataLabel.getBBox().width) > m && (m = c);
          }), n ? m + d : l - m - d;
        } };
        function e(o, n) {
          let l = Math.PI / 2, { start: d = 0, end: m = 0 } = o.shapeArgs || {}, c = o.angle || 0;
          n > 0 && d < l && m > l && c > l / 2 && c < 1.5 * l && (c = c <= l ? Math.max(l / 2, (d + l) / 2) : Math.min(1.5 * l, (l + m) / 2));
          let { center: f, options: x } = this, b = f[2] / 2, M = Math.cos(c), k = Math.sin(c), v = f[0] + M * b, S = f[1] + k * b, C = Math.min((x.slicedOffset || 0) + (x.borderWidth || 0), n / 5);
          return { natural: { x: v + M * n, y: S + k * n }, computed: {}, alignment: n < 0 ? "center" : o.half ? "right" : "left", connectorPosition: { angle: c, breakAt: { x: v + M * C, y: S + k * C }, touchingSliceAt: { x: v, y: S } }, distance: n };
        }
        function i() {
          let o = this, n = o.points, l = o.chart, d = l.plotWidth, m = l.plotHeight, c = l.plotLeft, f = Math.round(l.chartWidth / 3), x = o.center, b = x[2] / 2, M = x[1], k = [[], []], v = [0, 0, 0, 0], S = o.dataLabelPositioners, C, O, L, D = 0;
          o.visible && o.hasDataLabels?.() && (n.forEach((N) => {
            (N.dataLabels || []).forEach((I) => {
              I.shortened && (I.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), I.shortened = !1);
            });
          }), Nh.prototype.drawDataLabels.apply(o), n.forEach((N) => {
            (N.dataLabels || []).forEach((I, W) => {
              let Y = x[2] / 2, H = I.options, V = Fh(H?.distance || 0, Y);
              W === 0 && k[N.half].push(N), !zh(H?.style?.width) && I.getBBox().width > f && (I.css({ width: Math.round(0.7 * f) + "px" }), I.shortened = !0), I.dataLabelPosition = this.getDataLabelPosition(N, V), D = Math.max(D, V);
            });
          }), k.forEach((N, I) => {
            let W = N.length, Y = [], H, V, Z = 0, J;
            W && (o.sortByAngle(N, I - 0.5), D > 0 && (H = Math.max(0, M - b - D), V = Math.min(M + b + D, l.plotHeight), N.forEach((j) => {
              (j.dataLabels || []).forEach((q) => {
                let _ = q.dataLabelPosition;
                _ && _.distance > 0 && (_.top = Math.max(0, M - b - _.distance), _.bottom = Math.min(M + b + _.distance, l.plotHeight), Z = q.getBBox().height || 21, q.lineHeight = l.renderer.fontMetrics(q.text || q).h + 2 * q.padding, j.distributeBox = { target: (q.dataLabelPosition?.natural.y || 0) - _.top + q.lineHeight / 2, size: Z, rank: j.y }, Y.push(j.distributeBox));
              });
            }), tp(Y, J = V + Z - H, J / 5)), N.forEach((j) => {
              (j.dataLabels || []).forEach((q) => {
                let _ = q.options || {}, vt = j.distributeBox, ht = q.dataLabelPosition, $t = ht?.natural.y || 0, st = _.connectorPadding || 0, it = q.lineHeight || 21, ut = (it - q.getBBox().height) / 2, at = 0, wt = $t, kt = "inherit";
                if (ht) {
                  if (Y && zh(vt) && ht.distance > 0 && (vt.pos === void 0 ? kt = "hidden" : (L = vt.size, wt = S.radialDistributionY(j, q))), _.justify) at = S.justify(j, q, b, x);
                  else switch (_.alignTo) {
                    case "connectors":
                      at = S.alignToConnectors(N, I, d, c);
                      break;
                    case "plotEdges":
                      at = S.alignToPlotEdges(q, I, d, c);
                      break;
                    default:
                      at = S.radialDistributionX(o, j, wt - ut, $t, q);
                  }
                  if (ht.attribs = { visibility: kt, align: ht.alignment }, ht.posAttribs = { x: at + (_.x || 0) + ({ left: st, right: -st }[ht.alignment] || 0), y: wt + (_.y || 0) - it / 2 }, ht.computed.x = at, ht.computed.y = wt - ut, sp(_.crop, !0)) {
                    let mt;
                    at - (O = q.getBBox().width) < st && I === 1 ? (mt = Math.round(O - at + st), v[3] = Math.max(mt, v[3])) : at + O > d - st && I === 0 && (mt = Math.round(at + O - d + st), v[1] = Math.max(mt, v[1])), wt - L / 2 < 0 ? v[0] = Math.max(Math.round(-wt + L / 2), v[0]) : wt + L / 2 > m && (v[2] = Math.max(Math.round(wt + L / 2 - m), v[2])), ht.sideOverflow = mt;
                  }
                }
              });
            }));
          }), (ep(v) === 0 || this.verifyDataLabelOverflow(v)) && (this.placeDataLabels(), this.points.forEach((N) => {
            (N.dataLabels || []).forEach((I) => {
              let { connectorColor: W, connectorWidth: Y = 1 } = I.options || {}, H = I.dataLabelPosition;
              if (ip(Y)) {
                let V;
                C = I.connector, H && H.distance > 0 ? (V = !C, C || (I.connector = C = l.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + N.colorIndex + (N.className ? " " + N.className : "")).add(o.dataLabelsGroup)), l.styledMode || C.attr({ "stroke-width": Y, stroke: W || N.color || "#666666" }), C[V ? "attr" : "animate"]({ d: N.getConnectorPath(I) }), C.attr({ visibility: H.attribs?.visibility })) : C && (I.connector = C.destroy());
              }
            });
          })));
        }
        function s() {
          this.points.forEach((o) => {
            (o.dataLabels || []).forEach((n) => {
              let l = n.dataLabelPosition;
              l ? (l.sideOverflow && (n.css({ width: Math.max(n.getBBox().width - l.sideOverflow, 0) + "px", textOverflow: n.options?.style?.textOverflow || "ellipsis" }), n.shortened = !0), n.attr(l.attribs), n[n.moved ? "animate" : "attr"](l.posAttribs), n.moved = !0) : n && n.attr({ y: -9999 });
            }), delete o.distributeBox;
          }, this);
        }
        function r(o) {
          let n = this.center, l = this.options, d = l.center, m = l.minSize || 80, c = m, f = l.size !== null;
          return !f && (d[0] !== null ? c = Math.max(n[2] - Math.max(o[1], o[3]), m) : (c = Math.max(n[2] - o[1] - o[3], m), n[0] += (o[3] - o[1]) / 2), d[1] !== null ? c = Rh(c, m, n[2] - Math.max(o[0], o[2])) : (c = Rh(c, m, n[2] - o[0] - o[2]), n[1] += (o[0] - o[2]) / 2), c < n[2] ? (n[2] = c, n[3] = Math.min(l.thickness ? Math.max(0, c - 2 * l.thickness) : Math.max(0, Fh(l.innerSize || 0, c)), c), this.translate(n), this.drawDataLabels && this.drawDataLabels()) : f = !0), f;
        }
        h.compose = function(o) {
          if (Dn.compose(Nh), rp(Jc, "PieDataLabel")) {
            let n = o.prototype;
            n.dataLabelPositioners = t, n.alignDataLabel = Qc, n.drawDataLabels = i, n.getDataLabelPosition = e, n.placeDataLabels = s, n.verifyDataLabelOverflow = r;
          }
        };
      })(_i || (_i = {}));
      let op = _i;
      (function(h) {
        h.getCenterOfPoints = function(t) {
          let e = t.reduce((i, s) => (i.x += s.x, i.y += s.y, i), { x: 0, y: 0 });
          return { x: e.x / t.length, y: e.y / t.length };
        }, h.getDistanceBetweenPoints = function(t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, h.getAngleBetweenPoints = function(t, e) {
          return Math.atan2(e.x - t.x, e.y - t.y);
        }, h.pointInPolygon = function({ x: t, y: e }, i) {
          let s = i.length, r, o, n = !1;
          for (r = 0, o = s - 1; r < s; o = r++) {
            let [l, d] = i[r], [m, c] = i[o];
            d > e != c > e && t < (m - l) * (e - d) / (c - d) + l && (n = !n);
          }
          return n;
        };
      })(gt || (gt = {}));
      let { pointInPolygon: np } = gt, { addEvent: ap, getAlignFactor: lp, fireEvent: Hh, objectEach: Wh, pick: hp } = $;
      function dp(h) {
        let t = h.length, e = (m, c) => !(c.x >= m.x + m.width || c.x + c.width <= m.x || c.y >= m.y + m.height || c.y + c.height <= m.y), i = (m, c) => {
          for (let f of m) if (np({ x: f[0], y: f[1] }, c)) return !0;
          return !1;
        }, s, r, o, n, l, d = !1;
        for (let m = 0; m < t; m++) (s = h[m]) && (s.oldOpacity = s.opacity, s.newOpacity = 1, s.absoluteBox = (function(c) {
          if (c && (!c.alignAttr || c.placed)) {
            let f = c.box ? 0 : c.padding || 0, x = c.alignAttr || { x: c.attr("x"), y: c.attr("y") }, { height: b, polygon: M, width: k } = c.getBBox(), v = lp(c.alignValue) * k;
            return c.width = k, c.height = b, { x: x.x + (c.parentGroup?.translateX || 0) + f - v, y: x.y + (c.parentGroup?.translateY || 0) + f, width: k - 2 * f, height: b - 2 * f, polygon: M };
          }
        })(s));
        h.sort((m, c) => (c.labelrank || 0) - (m.labelrank || 0));
        for (let m = 0; m < t; ++m) {
          n = (r = h[m]) && r.absoluteBox;
          let c = n?.polygon;
          for (let f = m + 1; f < t; ++f) {
            l = (o = h[f]) && o.absoluteBox;
            let x = !1;
            if (n && l && r !== o && r.newOpacity !== 0 && o.newOpacity !== 0 && r.visibility !== "hidden" && o.visibility !== "hidden") {
              let b = l.polygon;
              if (c && b && c !== b ? i(c, b) && (x = !0) : e(n, l) && (x = !0), x) {
                let M = r.labelrank < o.labelrank ? r : o, k = M.text;
                M.newOpacity = 0, k?.element.querySelector("textPath") && k.hide();
              }
            }
          }
        }
        for (let m of h) Xh(m, this) && (d = !0);
        d && Hh(this, "afterHideAllOverlappingLabels");
      }
      function Xh(h, t) {
        let e, i = !1;
        return h && (e = h.newOpacity, h.oldOpacity !== e && (h.hasClass("highcharts-data-label") ? (h[e ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), i = !0, h[h.isOld ? "animate" : "attr"]({ opacity: e }, void 0, function() {
          t.styledMode || h.css({ pointerEvents: e ? "auto" : "none" });
        }), Hh(t, "afterHideOverlappingLabel")) : h.attr({ opacity: e })), h.isOld = !0), i;
      }
      function cp() {
        let h = this, t = [];
        for (let e of h.labelCollectors || []) t = t.concat(e());
        for (let e of h.yAxis || []) e.stacking && e.options.stackLabels && !e.options.stackLabels.allowOverlap && Wh(e.stacking.stacks, (i) => {
          Wh(i, (s) => {
            s.label && t.push(s.label);
          });
        });
        for (let e of h.series || []) if (e.visible && e.hasDataLabels?.()) {
          let i = (s) => {
            for (let r of s) r.visible && (r.dataLabels || []).forEach((o) => {
              let n = o.options || {};
              o.labelrank = hp(n.labelrank, r.labelrank, r.shapeArgs?.height), n.allowOverlap ?? Number(n.distance) > 0 ? (o.oldOpacity = o.opacity, o.newOpacity = 1, Xh(o, h)) : t.push(o);
            });
          };
          i(e.nodes || []), i(e.points);
        }
        this.hideOverlappingLabels(t);
      }
      let Gh = { compose: function(h) {
        let t = h.prototype;
        t.hideOverlappingLabels || (t.hideOverlappingLabels = dp, ap(h, "render", cp));
      } }, { defaultOptions: pp } = qt, { noop: Yh } = X, { addEvent: jh, extend: up, isObject: Uh, merge: gp, relativeLength: Ll } = $, mp = { radius: 0, scope: "stack", where: void 0 }, Vh = Yh, qh = Yh;
      function fp(h, t, e, i, s = {}) {
        let r = Vh(h, t, e, i, s), { brStart: o = !0, brEnd: n = !0, innerR: l = 0, r: d = e, start: m = 0, end: c = 0 } = s;
        if (s.open || !s.borderRadius) return r;
        let f = c - m, x = Math.sin(f / 2), b = Math.max(Math.min(Ll(s.borderRadius || 0, d - l), (d - l) / 2, d * x / (1 + x)), 0), M = Math.min(b, f / Math.PI * 2 * l), k = r.length - 1;
        for (; k--; ) (o || k !== 0 && k !== 3) && (n || k !== 1 && k !== 2) && (function(v, S, C) {
          let O, L, D, N = v[S], I = v[S + 1];
          if (I[0] === "Z" && (I = v[0]), (N[0] === "M" || N[0] === "L") && I[0] === "A" ? (O = N, L = I, D = !0) : N[0] === "A" && (I[0] === "M" || I[0] === "L") && (O = I, L = N), O && L && L.params) {
            let W = L[1], Y = L[5], H = L.params, { start: V, end: Z, cx: J, cy: j } = H, q = Y ? W - C : W + C, _ = q ? Math.asin(C / q) : 0, vt = Y ? _ : -_, ht = Math.cos(_) * q;
            D ? (H.start = V + vt, O[1] = J + ht * Math.cos(V), O[2] = j + ht * Math.sin(V), v.splice(S + 1, 0, ["A", C, C, 0, 0, 1, J + W * Math.cos(H.start), j + W * Math.sin(H.start)])) : (H.end = Z - vt, L[6] = J + W * Math.cos(H.end), L[7] = j + W * Math.sin(H.end), v.splice(S + 1, 0, ["A", C, C, 0, 0, 1, J + ht * Math.cos(Z), j + ht * Math.sin(Z)])), L[4] = Math.abs(H.end - H.start) < Math.PI ? 0 : 1;
          }
        })(r, k, k > 1 ? M : b);
        return r;
      }
      function xp() {
        if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
          let { options: h, yAxis: t } = this, e = h.stacking === "percent", i = pp.plotOptions?.[this.type]?.borderRadius, s = Dl(h.borderRadius, Uh(i) ? i : {}), r = t.options.reversed;
          for (let o of this.points) {
            let { shapeArgs: n } = o;
            if (o.shapeType === "roundedRect" && n) {
              let { width: l = 0, height: d = 0, y: m = 0 } = n, c = m, f = d;
              if (s.scope === "stack" && o.stackTotal) {
                let k = t.translate(e ? 100 : o.stackTotal, !1, !0, !1, !0), v = t.translate(h.threshold || 0, !1, !0, !1, !0), S = this.crispCol(0, Math.min(k, v), 0, Math.abs(k - v));
                c = S.y, f = S.height;
              }
              let x = (o.negative ? -1 : 1) * (r ? -1 : 1) == -1, b = s.where;
              !b && this.is("waterfall") && Math.abs((o.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (b = "all"), b || (b = "end");
              let M = Math.min(Ll(s.radius, l), l / 2, b === "all" ? d / 2 : 1 / 0) || 0;
              b === "end" && (x && (c -= M), f += M), up(n, { brBoxHeight: f, brBoxY: c, r: M });
            }
          }
        }
      }
      function Dl(h, t) {
        return Uh(h) || (h = { radius: h || 0 }), gp(mp, t, h);
      }
      function yp() {
        let h = Dl(this.options.borderRadius);
        for (let t of this.points) {
          let e = t.shapeArgs;
          e && (e.borderRadius = Ll(h.radius, (e.r || 0) - (e.innerR || 0)));
        }
      }
      function bp(h, t, e, i, s = {}) {
        let r = qh(h, t, e, i, s), { r: o = 0, brBoxHeight: n = i, brBoxY: l = t } = s, d = t - l, m = l + n - (t + i), c = d - o > -0.1 ? 0 : o, f = m - o > -0.1 ? 0 : o, x = Math.max(c && d, 0), b = Math.max(f && m, 0), M = [h + c, t], k = [h + e - c, t], v = [h + e, t + c], S = [h + e, t + i - f], C = [h + e - f, t + i], O = [h + f, t + i], L = [h, t + i - f], D = [h, t + c], N = (I, W) => Math.sqrt(Math.pow(I, 2) - Math.pow(W, 2));
        if (x) {
          let I = N(c, c - x);
          M[0] -= I, k[0] += I, v[1] = D[1] = t + c - x;
        }
        if (i < c - x) {
          let I = N(c, c - x - i);
          v[0] = S[0] = h + e - c + I, C[0] = Math.min(v[0], C[0]), O[0] = Math.max(S[0], O[0]), L[0] = D[0] = h + c - I, v[1] = D[1] = t + i;
        }
        if (b) {
          let I = N(f, f - b);
          C[0] += I, O[0] -= I, S[1] = L[1] = t + i - f + b;
        }
        if (i < f - b) {
          let I = N(f, f - b - i);
          v[0] = S[0] = h + e - f + I, k[0] = Math.min(v[0], k[0]), M[0] = Math.max(S[0], M[0]), L[0] = D[0] = h + f - I, S[1] = L[1] = t;
        }
        return r.length = 0, r.push(["M", ...M], ["L", ...k], ["A", c, c, 0, 0, 1, ...v], ["L", ...S], ["A", f, f, 0, 0, 1, ...C], ["L", ...O], ["A", f, f, 0, 0, 1, ...L], ["L", ...D], ["A", c, c, 0, 0, 1, ...M], ["Z"]), r;
      }
      let { diffObjects: vp, extend: wp, find: kp, merge: Mp, pick: Nn, uniqueKey: Ap } = $;
      (function(h) {
        function t(i, s) {
          let r = i.condition;
          (r.callback || function() {
            return this.chartWidth <= Nn(r.maxWidth, Number.MAX_VALUE) && this.chartHeight <= Nn(r.maxHeight, Number.MAX_VALUE) && this.chartWidth >= Nn(r.minWidth, 0) && this.chartHeight >= Nn(r.minHeight, 0);
          }).call(this) && s.push(i._id);
        }
        function e(i, s) {
          let r = this.options.responsive, o = this.currentResponsive, n = [], l;
          !s && r && r.rules && r.rules.forEach((c) => {
            c._id === void 0 && (c._id = Ap()), this.matchResponsiveRule(c, n);
          }, this);
          let d = Mp(...n.map((c) => kp(r?.rules || [], (f) => f._id === c)).map((c) => c?.chartOptions));
          d.isResponsiveOptions = !0, n = n.toString() || void 0;
          let m = o?.ruleIds;
          n !== m && (o && (this.currentResponsive = void 0, this.updatingResponsive = !0, this.update(o.undoOptions, i, !0), this.updatingResponsive = !1), n ? ((l = vp(d, this.options, !0, this.collectionsWithUpdate)).isResponsiveOptions = !0, this.currentResponsive = { ruleIds: n, mergedOptions: d, undoOptions: l }, this.updatingResponsive || this.update(d, i, !0)) : this.currentResponsive = void 0);
        }
        h.compose = function(i) {
          let s = i.prototype;
          return s.matchResponsiveRule || wp(s, { matchResponsiveRule: t, setResponsive: e }), i;
        };
      })(Ji || (Ji = {}));
      let Tp = Ji;
      X.AST = Mt, X.Axis = ui, X.Chart = yi, X.Color = bt, X.DataLabel = Dn, X.DataTableCore = yn, X.Fx = Yt, X.HTMLElement = ee, X.Legend = eh, X.LegendSymbol = Xl, X.OverlappingDataLabels = X.OverlappingDataLabels || Gh, X.PlotLineOrBand = Qe, X.Point = Lt, X.Pointer = Fl, X.RendererRegistry = Ii, X.Series = se, X.SeriesRegistry = Dt, X.StackItem = uh, X.SVGElement = ae, X.SVGRenderer = bs, X.Templating = jt, X.Tick = ci, X.Time = Ks, X.Tooltip = w, X.animate = It.animate, X.animObject = It.animObject, X.chart = yi.chart, X.color = bt.parse, X.dateFormat = jt.dateFormat, X.defaultOptions = qt.defaultOptions, X.distribute = ps.distribute, X.format = jt.format, X.getDeferredAnimation = It.getDeferredAnimation, X.getOptions = qt.getOptions, X.numberFormat = jt.numberFormat, X.seriesType = Dt.seriesType, X.setAnimation = It.setAnimation, X.setOptions = qt.setOptions, X.stop = It.stop, X.time = qt.defaultTime, X.timers = Yt.timers, { compose: function(h, t, e) {
        let i = h.types.pie;
        if (!t.symbolCustomAttribs.includes("borderRadius")) {
          let s = e.prototype.symbols;
          jh(h, "afterColumnTranslate", xp, { order: 9 }), jh(i, "afterTranslate", yp), t.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY", "brEnd", "brStart"), Vh = s.arc, qh = s.roundedRect, s.arc = fp, s.roundedRect = bp;
        }
      }, optionsToObject: Dl }.compose(X.Series, X.SVGElement, X.SVGRenderer), Ic.compose(X.Series.types.column), Dn.compose(X.Series), Ga.compose(X.Axis), ee.compose(X.SVGRenderer), eh.compose(X.Chart), Cs.compose(X.Axis), Gh.compose(X.Chart), op.compose(X.Series.types.pie), Qe.compose(X.Chart, X.Axis), Fl.compose(X.Chart), Tp.compose(X.Chart), Kr.compose(X.Axis, X.Chart, X.Series), pc.compose(X.Axis, X.Chart, X.Series), w.compose(X.Pointer), $.extend(X, $);
      let Sp = X;
      return K.default;
    })());
  })(Rn)), Rn.exports;
}
var Op = Pp();
const Il = /* @__PURE__ */ Cp(Op);
var zn = { exports: {} }, Lp = zn.exports, Zh;
function Dp() {
  return Zh || (Zh = 1, (function(Be, he) {
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
    (function(dt, Vt) {
      Be.exports = Vt(dt._Highcharts, dt._Highcharts.Templating, dt._Highcharts.AST, dt._Highcharts.Legend, dt._Highcharts.Axis, dt._Highcharts.Color, dt._Highcharts.SeriesRegistry, dt._Highcharts.RendererRegistry, dt._Highcharts.SVGRenderer, dt._Highcharts.Point, dt._Highcharts.Series);
    })(typeof window > "u" ? Lp : window, (dt, Vt, ye, Jt, de, oe, Qt, Ne, Rs, zs, Fs) => (() => {
      let Mi;
      var Ai, Ti, Si, Ci, Hs = { 260: (u) => {
        u.exports = zs;
      }, 512: (u) => {
        u.exports = Qt;
      }, 532: (u) => {
        u.exports = de;
      }, 540: (u) => {
        u.exports = Rs;
      }, 608: (u) => {
        u.exports = Ne;
      }, 620: (u) => {
        u.exports = oe;
      }, 632: (u) => {
        u.exports = Jt;
      }, 660: (u) => {
        u.exports = ye;
      }, 820: (u) => {
        u.exports = Fs;
      }, 944: (u) => {
        u.exports = dt;
      }, 984: (u) => {
        u.exports = Vt;
      } }, _i = {};
      function gt(u) {
        var a = _i[u];
        if (a !== void 0) return a.exports;
        var p = _i[u] = { exports: {} };
        return Hs[u](p, p.exports, gt), p.exports;
      }
      gt.n = (u) => {
        var a = u && u.__esModule ? () => u.default : () => u;
        return gt.d(a, { a }), a;
      }, gt.d = (u, a) => {
        for (var p in a) gt.o(a, p) && !gt.o(u, p) && Object.defineProperty(u, p, { enumerable: !0, get: a[p] });
      }, gt.o = (u, a) => Object.prototype.hasOwnProperty.call(u, a);
      var Ji = {};
      gt.d(Ji, { default: () => Yr });
      var Ei = gt(944), K = gt.n(Ei);
      let { doc: X, win: ne } = K(), { css: Qi } = K(), Re = ne.EventTarget && new ne.EventTarget() || "none";
      function ei(u) {
        if (typeof ne.MouseEvent == "function") return new ne.MouseEvent(u.type, u);
        if (X?.createEvent) {
          let a = X.createEvent("MouseEvent");
          if (a.initMouseEvent) return a.initMouseEvent(u.type, u.bubbles, u.cancelable, u.view || ne, u.detail, u.screenX, u.screenY, u.clientX, u.clientY, u.ctrlKey, u.altKey, u.shiftKey, u.metaKey, u.button, u.relatedTarget), a;
        }
        return Ws(u.type);
      }
      function Ws(u, a, p) {
        let g = a || { x: 0, y: 0 };
        if (typeof ne.MouseEvent == "function") return new ne.MouseEvent(u, { bubbles: !0, cancelable: !0, composed: !0, button: 0, buttons: 1, relatedTarget: p || Re, view: ne, detail: +(u === "click"), screenX: g.x, screenY: g.y, clientX: g.x, clientY: g.y });
        if (X?.createEvent) {
          let y = X.createEvent("MouseEvent");
          if (y.initMouseEvent) return y.initMouseEvent(u, !0, !0, ne, +(u === "click"), g.x, g.y, g.x, g.y, !1, !1, !1, !1, 0, null), y;
        }
        return { type: u };
      }
      let Ot = { addClass: function(u, a) {
        u.classList ? u.classList.add(a) : 0 > u.className.indexOf(a) && (u.className += " " + a);
      }, cloneMouseEvent: ei, cloneTouchEvent: function(u) {
        let a = (g) => {
          let y = [];
          for (let A = 0; A < g.length; ++A) {
            let w = g.item(A);
            w && y.push(w);
          }
          return y;
        };
        if (typeof ne.TouchEvent == "function") {
          let g = new ne.TouchEvent(u.type, { touches: a(u.touches), targetTouches: a(u.targetTouches), changedTouches: a(u.changedTouches), ctrlKey: u.ctrlKey, shiftKey: u.shiftKey, altKey: u.altKey, metaKey: u.metaKey, bubbles: u.bubbles, cancelable: u.cancelable, composed: u.composed, detail: u.detail, view: u.view });
          return u.defaultPrevented && g.preventDefault(), g;
        }
        let p = ei(u);
        return p.touches = u.touches, p.changedTouches = u.changedTouches, p.targetTouches = u.targetTouches, p;
      }, escapeStringForHTML: function(u) {
        return u.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
      }, getElement: function(u) {
        return X.getElementById(u);
      }, getFakeMouseEvent: Ws, getHeadingTagNameForElement: function(u) {
        let a = (A) => "h" + Math.min(6, parseInt(A.slice(1), 10) + 1), p = (A) => /^H[1-6]$/i.test(A), g = (A) => {
          let w = A;
          for (; w = w.previousSibling; ) {
            let T = w.tagName || "";
            if (p(T)) return T;
          }
          return "";
        }, y = (A) => {
          let w = g(A);
          if (w) return a(w);
          let T = A.parentElement;
          if (!T) return "h6";
          let E = T.tagName;
          return p(E) ? a(E) : y(T);
        };
        return y(u);
      }, removeChildNodes: function(u) {
        for (; u.lastChild; ) u.removeChild(u.lastChild);
      }, removeClass: function(u, a) {
        u.classList ? u.classList.remove(a) : u.className = u.className.replace(RegExp(a, "g"), "");
      }, removeElement: function(u) {
        u && u.parentNode && u.parentNode.removeChild(u);
      }, reverseChildNodes: function(u) {
        let a = u.childNodes.length;
        for (; a--; ) u.appendChild(u.childNodes[a]);
      }, simulatedEventTarget: Re, stripHTMLTagsFromString: function(u, a = !1) {
        return typeof u == "string" ? a ? u.replace(/<\/?[^>]+(>|$)/g, "") : u.replace(/<\/?(?!\s)[^>]+(>|$)/g, "") : u;
      }, visuallyHideElement: function(u) {
        Qi(u, { position: "absolute", width: "1px", height: "1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(1px, 1px, 1px, 1px)", marginTop: "-3px", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)", filter: "alpha(opacity=1)", opacity: 0.01 });
      } };
      var ts = gt(984), be = gt.n(ts);
      let { format: Xs } = be(), { getNestedProperty: es, pick: Pi } = K();
      (function(u) {
        function a(g, y, A) {
          let w = (z, R) => {
            let F = z.slice(R || 0), G = F.indexOf("{"), U = F.indexOf("}");
            if (G > -1 && U > G) return { statement: F.substring(G + 1, U), begin: R + G + 1, end: R + U };
          }, T = [], E, P, B = 0;
          do
            E = w(g, B), (P = g.substring(B, E && E.begin - 1)).length && T.push({ value: P, type: "constant" }), E && T.push({ value: E.statement, type: "statement" }), B = E ? E.end + 1 : B + 1;
          while (E);
          return T.forEach((z) => {
            z.type === "statement" && (z.value = (function(R, F) {
              let G, U, ct = R.indexOf("#each("), nt = R.indexOf("#plural("), rt = R.indexOf("["), lt = R.indexOf("]");
              if (ct > -1) {
                let et = R.slice(ct).indexOf(")") + ct, ft = R.substring(0, ct), xt = R.substring(et + 1), zt = R.substring(ct + 6, et).split(","), St = Number(zt[1]), Lt;
                if (U = "", G = es(zt[0], F)) {
                  Lt = (St = isNaN(St) ? G.length : St) < 0 ? G.length + St : Math.min(St, G.length);
                  for (let Ee = 0; Ee < Lt; ++Ee) U += ft + G[Ee] + xt;
                }
                return U.length ? U : "";
              }
              if (nt > -1) {
                var tt;
                let et = R.slice(nt).indexOf(")") + nt, ft = R.substring(nt + 8, et).split(",");
                switch (Number(es(ft[0], F))) {
                  case 0:
                    U = Pi(ft[4], ft[1]);
                    break;
                  case 1:
                    U = Pi(ft[2], ft[1]);
                    break;
                  case 2:
                    U = Pi(ft[3], ft[1]);
                    break;
                  default:
                    U = ft[1];
                }
                return U ? (tt = U).trim && tt.trim() || tt.replace(/^\s+|\s+$/g, "") : "";
              }
              if (rt > -1) {
                let et, ft = R.substring(0, rt), xt = Number(R.substring(rt + 1, lt));
                return G = es(ft, F), !isNaN(xt) && G && (xt < 0 ? (et = G[G.length + xt]) === void 0 && (et = G[0]) : (et = G[xt]) === void 0 && (et = G[G.length - 1])), et !== void 0 ? et : "";
              }
              return "{" + R + "}";
            })(z.value, y));
          }), Xs(T.reduce((z, R) => z + R.value, ""), y, A);
        }
        function p(g, y) {
          let A = g.split("."), w = this.options.lang, T = 0;
          for (; T < A.length; ++T) w = w && w[A[T]];
          return typeof w == "string" ? a(w, y, this) : "";
        }
        u.compose = function(g) {
          let y = g.prototype;
          y.langFormat || (y.langFormat = p);
        }, u.i18nFormat = a;
      })(Ai || (Ai = {}));
      let ve = Ai, { doc: Gs } = K(), { stripHTMLTagsFromString: io } = Ot, { defined: we, find: ii, fireEvent: is } = K();
      function Ys(u) {
        if (u.points && u.points.length) {
          let a = ii(u.points, (p) => !!p.graphic);
          return a && a.graphic && a.graphic.element;
        }
      }
      function js(u) {
        let a = Ys(u);
        return a && a.parentNode || u.graph && u.graph.element || u.group && u.group.element;
      }
      let Xt = { fireEventOnWrappedOrUnwrappedElement: function u(a, p) {
        let g = p.type, y = a.hcEvents;
        Gs?.createEvent && (a.dispatchEvent || a.fireEvent) ? a.dispatchEvent ? a.dispatchEvent(p) : a.fireEvent(g, p) : y && y[g] ? is(a, g, p) : a.element && u(a.element, p);
      }, getChartTitle: function(u) {
        return io(u.options.title.text || u.langFormat("accessibility.defaultChartTitle", { chart: u }), u.renderer.forExport);
      }, getAxisDescription: function(u) {
        return u && (u.options.accessibility?.description || u.axisTitle?.textStr || u.options.id || u.categories && "categories" || u.dateTime && "Time" || "values");
      }, getAxisRangeDescription: function(u) {
        let a = u.options || {};
        return a.accessibility && a.accessibility.rangeDescription !== void 0 ? a.accessibility.rangeDescription : u.categories ? (function(p) {
          let g = p.chart;
          return p.dataMax && p.dataMin ? g.langFormat("accessibility.axis.rangeCategories", { chart: g, axis: p, numCategories: p.dataMax - p.dataMin + 1 }) : "";
        })(u) : u.dateTime && (u.min === 0 || u.dataMin === 0) ? (function(p) {
          let g = p.chart, y = {}, A = p.dataMin || p.min || 0, w = p.dataMax || p.max || 0, T = "Seconds";
          y.Seconds = (w - A) / 1e3, y.Minutes = y.Seconds / 60, y.Hours = y.Minutes / 60, y.Days = y.Hours / 24, ["Minutes", "Hours", "Days"].forEach(function(P) {
            y[P] > 2 && (T = P);
          });
          let E = y[T].toFixed(+(T !== "Seconds" && T !== "Minutes"));
          return g.langFormat("accessibility.axis.timeRange" + T, { chart: g, axis: p, range: E.replace(".0", "") });
        })(u) : (function(p) {
          let g = p.chart, y = g.options, A = y && y.accessibility && y.accessibility.screenReaderSection.axisRangeDateFormat || "", w = { min: p.dataMin || p.min || 0, max: p.dataMax || p.max || 0 }, T = function(E) {
            return p.dateTime ? g.time.dateFormat(A, w[E]) : w[E].toString();
          };
          return g.langFormat("accessibility.axis.rangeFromTo", { chart: g, axis: p, rangeFrom: T("min"), rangeTo: T("max") });
        })(u);
      }, getPointFromXY: function(u, a, p) {
        let g = u.length, y;
        for (; g--; ) if (y = ii(u[g].points || [], function(A) {
          return A.x === a && A.y === p;
        })) return y;
      }, getSeriesFirstPointElement: Ys, getSeriesFromName: function(u, a) {
        return a ? (u.series || []).filter(function(p) {
          return p.name === a;
        }) : u.series;
      }, getSeriesA11yElement: js, unhideChartElementFromAT: function u(a, p) {
        p.setAttribute("aria-hidden", !1), p !== a.renderTo && p.parentNode && p.parentNode !== Gs.body && (Array.prototype.forEach.call(p.parentNode.childNodes, function(g) {
          g.hasAttribute("aria-hidden") || g.setAttribute("aria-hidden", !0);
        }), u(a, p.parentNode));
      }, hideSeriesFromAT: function(u) {
        let a = js(u);
        a && a.setAttribute("aria-hidden", !0);
      }, scrollAxisToPoint: function(u) {
        let a = u.series.xAxis, p = u.series.yAxis, g = a && a.scrollbar ? a : p, y = g && g.scrollbar;
        if (y && we(y.to) && we(y.from)) {
          let A = y.to - y.from, w = (function(T, E) {
            if (!we(T.dataMin) || !we(T.dataMax)) return 0;
            let P = T.toPixels(T.dataMin), B = T.toPixels(T.dataMax), z = T.coll === "xAxis" ? "x" : "y";
            return (T.toPixels(E[z] || 0) - P) / (B - P);
          })(g, u);
          y.updatePosition(w - A / 2, w + A / 2), is(y, "changed", { from: y.from, to: y.to, trigger: "scrollbar", DOMEvent: null });
        }
      } }, { doc: ze } = K(), { removeElement: Us } = Ot, ss = class {
        constructor() {
          this.elements = [];
        }
        createElement() {
          let u = ze.createElement.apply(ze, arguments);
          return this.elements.push(u), u;
        }
        removeElement(u) {
          Us(u), this.elements.splice(this.elements.indexOf(u), 1);
        }
        destroyCreatedElements() {
          this.elements.forEach(function(u) {
            Us(u);
          }), this.elements = [];
        }
      }, { addEvent: Fn } = K(), $ = class {
        constructor() {
          this.eventRemovers = [];
        }
        addEvent() {
          let u = Fn.apply(K(), arguments);
          return this.eventRemovers.push({ element: arguments[0], remover: u }), u;
        }
        removeEvent(u) {
          let a = this.eventRemovers.map((p) => p.remover).indexOf(u);
          this.eventRemovers[a].remover(), this.eventRemovers.splice(a, 1);
        }
        removeAddedEvents() {
          this.eventRemovers.map((u) => u.remover).forEach((u) => u()), this.eventRemovers = [];
        }
      }, { fireEventOnWrappedOrUnwrappedElement: Hn } = Xt, { getFakeMouseEvent: rs } = Ot, ce = class {
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
        initBase(u, a) {
          this.chart = u, this.eventProvider = new $(), this.domElementProvider = new ss(), this.proxyProvider = a, this.keyCodes = { left: 37, right: 39, up: 38, down: 40, enter: 13, space: 32, esc: 27, tab: 9, pageUp: 33, pageDown: 34, end: 35, home: 36 };
        }
        addEvent(u, a, p, g) {
          return this.eventProvider.addEvent(u, a, p, g);
        }
        createElement(u, a) {
          return this.domElementProvider.createElement(u, a);
        }
        fakeClickEvent(u) {
          Hn(u, rs("click"));
        }
        destroyBase() {
          this.domElementProvider.destroyCreatedElements(), this.eventProvider.removeAddedEvents();
        }
      }, { find: so } = K(), te = class {
        constructor(u, a) {
          this.chart = u, this.keyCodeMap = a.keyCodeMap || [], this.validate = a.validate, this.init = a.init, this.terminate = a.terminate, this.response = { success: 1, prev: 2, next: 3, noHandler: 4, fail: 5 };
        }
        run(u) {
          let a = u.which || u.keyCode, p = this.response.noHandler, g = so(this.keyCodeMap, function(y) {
            return y[0].indexOf(a) > -1;
          });
          return g ? p = g[1].call(this, a, u) : a === 9 && (p = this.response[u.shiftKey ? "prev" : "next"]), p;
        }
      }, { unhideChartElementFromAT: ro, getChartTitle: si } = Xt, { doc: Oi } = K(), { stripHTMLTagsFromString: oo } = Ot, Wn = class extends ce {
        onChartUpdate() {
          this.handleSVGTitleElement(), this.setSVGContainerLabel(), this.setGraphicContainerAttrs(), this.setRenderToAttrs(), this.makeCreditsAccessible();
        }
        handleSVGTitleElement() {
          let u = this.chart, a = "highcharts-title-" + u.index, p = oo(u.langFormat("accessibility.svgContainerTitle", { chartTitle: si(u) }));
          if (p.length) {
            let g = this.svgTitleElement = this.svgTitleElement || Oi.createElementNS("http://www.w3.org/2000/svg", "title");
            g.textContent = p, g.id = a, u.renderTo.insertBefore(g, u.renderTo.firstChild);
          }
        }
        setSVGContainerLabel() {
          let u = this.chart, a = u.langFormat("accessibility.svgContainerLabel", { chartTitle: si(u) });
          u.renderer.box && a.length && u.renderer.box.setAttribute("aria-label", a);
        }
        setGraphicContainerAttrs() {
          let u = this.chart, a = u.langFormat("accessibility.graphicContainerLabel", { chartTitle: si(u) });
          a.length && u.container.setAttribute("aria-label", a);
        }
        setRenderToAttrs() {
          let u = this.chart, a = u.options.accessibility.landmarkVerbosity !== "disabled", p = u.langFormat("accessibility.chartContainerLabel", { title: si(u), chart: u });
          p && (u.renderTo.setAttribute("role", a ? "region" : "group"), u.renderTo.setAttribute("aria-label", p));
        }
        makeCreditsAccessible() {
          let u = this.chart, a = u.credits;
          a && (a.textStr && a.element.setAttribute("aria-label", u.langFormat("accessibility.credits", { creditsStr: oo(a.textStr, u.renderer.forExport) })), ro(u, a.element));
        }
        getKeyboardNavigation() {
          let u = this.chart;
          return new te(u, { keyCodeMap: [], validate: function() {
            return !0;
          }, init: function() {
            let a = u.accessibility;
            a && a.keyboardNavigation.tabindexContainer.focus();
          } });
        }
        destroy() {
          this.chart.renderTo.setAttribute("aria-hidden", !0);
        }
      }, { addEvent: ke, pick: Xn } = K();
      (function(u) {
        let a = ["x", "y", "transform", "width", "height", "r", "d", "stroke-width"];
        function p() {
          let w = this.focusElement, T = this.options.accessibility.keyboardNavigation.focusBorder;
          w && (w.removeFocusBorder(), T.enabled && w.addFocusBorder(T.margin, { stroke: T.style.color, strokeWidth: T.style.lineWidth, r: T.style.borderRadius }));
        }
        function g(w, T) {
          let E = this.options.accessibility.keyboardNavigation.focusBorder, P = T || w.element;
          P && P.focus && (P.hcEvents && P.hcEvents.focusin || ke(P, "focusin", function() {
          }), P.focus(), E.hideBrowserFocusOutline && (P.style.outline = "none")), this.focusElement && this.focusElement.removeFocusBorder(), this.focusElement = w, ke(this, "endResize", function() {
            this.renderFocusBorder();
          }), this.renderFocusBorder();
        }
        function y(w, T) {
          this.focusBorder && this.removeFocusBorder();
          let E = this.getBBox(), P = Xn(w, 3), B = this.parentGroup, z = this.scaleX || B && B.scaleX, R = this.scaleY || B && B.scaleY, F = (z ? !R : R) ? Math.abs(z || R || 1) : (Math.abs(z || 1) + Math.abs(R || 1)) / 2, G = this.renderer.fontMetrics(this).h;
          E.x += this.translateX ? this.translateX : 0, E.y += this.translateY ? this.translateY : 0;
          let U = E.x - P, ct = E.y - P, nt = E.width + 2 * P, rt = E.height + 2 * P, lt = !!this.text;
          if (this.element.nodeName === "text" || lt) {
            let tt, et, ft = !!this.rotation, xt = lt ? { x: +!!ft, y: 0 } : (tt = 0, et = 0, this.attr("text-anchor") === "middle" ? tt = et = 0.5 : this.rotation ? tt = 0.25 : et = 0.75, { x: tt, y: et }), zt = +this.attr("x"), St = +this.attr("y");
            if (isNaN(zt) || (U = zt - E.width * xt.x - P), isNaN(St) || (ct = St - (this.attr("text-anchor") === "start" ? G : E.height) * xt.y - P), lt && ft) {
              let Lt = nt;
              nt = rt, rt = Lt, isNaN(zt) || (U = zt - E.height * xt.x - P), isNaN(St) || (ct = St - E.width * xt.y - P);
            }
          }
          this.focusBorder = this.renderer.rect(U, ct, nt, rt, parseInt((T && T.r || 0).toString(), 10) / F).addClass("highcharts-focus-border").attr({ zIndex: 99 }).add(B), this.renderer.styledMode || this.focusBorder.attr({ stroke: T && T.stroke, "stroke-width": (T && T.strokeWidth || 0) / F }), (function(tt, ...et) {
            tt.focusBorderUpdateHooks || (tt.focusBorderUpdateHooks = {}, a.forEach((ft) => {
              let xt = ft + "Setter", zt = tt[xt] || tt._defaultSetter;
              tt.focusBorderUpdateHooks[xt] = zt, tt[xt] = function() {
                let St = zt.apply(tt, arguments);
                return tt.addFocusBorder.apply(tt, et), St;
              };
            }));
          })(this, w, T), (function(tt) {
            if (tt.focusBorderDestroyHook) return;
            let et = tt.destroy;
            tt.destroy = function() {
              return tt.focusBorder && tt.focusBorder.destroy && tt.focusBorder.destroy(), et.apply(tt, arguments);
            }, tt.focusBorderDestroyHook = et;
          })(this);
        }
        function A() {
          var w;
          w = this, w.focusBorderUpdateHooks && (Object.keys(w.focusBorderUpdateHooks).forEach((T) => {
            let E = w.focusBorderUpdateHooks[T];
            E === w._defaultSetter ? delete w[T] : w[T] = E;
          }), delete w.focusBorderUpdateHooks), this.focusBorderDestroyHook && (this.destroy = this.focusBorderDestroyHook, delete this.focusBorderDestroyHook), this.focusBorder && (this.focusBorder.destroy(), delete this.focusBorder);
        }
        u.compose = function(w, T) {
          let E = w.prototype, P = T.prototype;
          E.renderFocusBorder || (E.renderFocusBorder = p, E.setFocusToElement = g), P.addFocusBorder || (P.addFocusBorder = y, P.removeFocusBorder = A);
        };
      })(Ti || (Ti = {}));
      let Vs = Ti;
      var Gn = gt(660), qs = gt.n(Gn);
      let { doc: Yn } = K(), { addClass: jn, visuallyHideElement: no } = Ot, { attr: ao } = K(), At = class {
        constructor(u, a) {
          this.chart = u, this.domElementProvider = new ss(), this.announceRegion = this.addAnnounceRegion(a);
        }
        destroy() {
          this.domElementProvider.destroyCreatedElements();
        }
        announce(u) {
          qs().setElementHTML(this.announceRegion, u), this.clearAnnouncementRegionTimer && clearTimeout(this.clearAnnouncementRegionTimer), this.clearAnnouncementRegionTimer = setTimeout(() => {
            this.announceRegion.innerHTML = qs().emptyHTML, delete this.clearAnnouncementRegionTimer;
          }, 3e3);
        }
        addAnnounceRegion(u) {
          let a = this.chart.announcerContainer || this.createAnnouncerContainer(), p = this.domElementProvider.createElement("div");
          return ao(p, { "aria-hidden": !1, "aria-live": u, "aria-atomic": !0 }), this.chart.styledMode ? jn(p, "highcharts-visually-hidden") : no(p), a.appendChild(p), p;
        }
        createAnnouncerContainer() {
          let u = this.chart, a = Yn.createElement("div");
          return ao(a, { "aria-hidden": !1, class: "highcharts-announcer-container" }), a.style.position = "relative", u.renderTo.insertBefore(a, u.renderTo.firstChild), u.announcerContainer = a, a;
        }
      }, { escapeStringForHTML: Ks, stripHTMLTagsFromString: Un } = Ot;
      function lo(u) {
        return (u.annotations || []).reduce((a, p) => (p.options && p.options.visible !== !1 && (a = a.concat(p.labels)), a), []);
      }
      function ho(u) {
        return u.options && u.options.accessibility && u.options.accessibility.description || u.graphic && u.graphic.text && u.graphic.text.textStr || "";
      }
      function Me(u) {
        let a = u.options && u.options.accessibility && u.options.accessibility.description;
        if (a) return a;
        let p = u.chart, g = ho(u), y = u.points, A = (B) => B.graphic && B.graphic.element && B.graphic.element.getAttribute("aria-label") || "", w = y.filter((B) => !!B.graphic).map((B) => {
          let z = B.accessibility && B.accessibility.valueDescription || A(B), R = B && B.series.name || "";
          return (R ? R + ", " : "") + "data point " + z;
        }).filter((B) => !!B), T = w.length, E = T > 1 ? "MultiplePoints" : T ? "SinglePoint" : "NoPoints", P = { annotationText: g, annotation: u, numPoints: T, annotationPoint: w[0], additionalAnnotationPoints: w.slice(1) };
        return p.langFormat("accessibility.screenReaderSection.annotations.description" + E, P);
      }
      function $s(u) {
        return lo(u).map((a) => {
          let p = Ks(Un(Me(a), u.renderer.forExport));
          return p ? `<li>${p}</li>` : "";
        });
      }
      let qt = { getAnnotationsInfoHTML: function(u) {
        let a = u.annotations;
        return a && a.length ? `<ul style="list-style-type: none">${$s(u).join(" ")}</ul>` : "";
      }, getPointAnnotationTexts: function(u) {
        let a = lo(u.series.chart).filter((p) => p.points.indexOf(u) > -1);
        return a.length ? a.map((p) => `${ho(p)}`) : [];
      } }, { getAnnotationsInfoHTML: Vn } = qt, { getAxisDescription: Li, getAxisRangeDescription: qn, getChartTitle: os, unhideChartElementFromAT: Gt } = Xt, { format: co } = be(), { doc: po } = K(), { addClass: ns, getElement: bt, getHeadingTagNameForElement: uo, stripHTMLTagsFromString: go, visuallyHideElement: Zs } = Ot, { attr: mo, pick: Yt, replaceNested: Kn } = K();
      function fo(u) {
        return Kn(u, [/<([\w\-.:!]+)\b[^<>]*>\s*<\/\1>/g, ""]);
      }
      let $n = class extends ce {
        constructor() {
          super(...arguments), this.screenReaderSections = {};
        }
        init() {
          let u = this.chart, a = this;
          this.initRegionsDefinitions(), this.addEvent(u, "afterGetTableAST", function(p) {
            a.onDataTableCreated(p);
          }), this.addEvent(u, "afterViewData", function(p) {
            p.wasHidden && (a.dataTableDiv = p.element, setTimeout(function() {
              a.focusDataTable();
            }, 300));
          }), this.addEvent(u, "afterHideData", function() {
            a.viewDataTableButton && a.viewDataTableButton.setAttribute("aria-expanded", "false");
          }), u.exporting && this.addEvent(u, "afterPrint", function() {
            a.updateAllScreenReaderSections();
          }), this.announcer = new At(u, "assertive");
        }
        initRegionsDefinitions() {
          let u = this, a = this.chart.options.accessibility;
          this.screenReaderSections = { before: { element: null, buildContent: function(p) {
            let g = a.screenReaderSection.beforeChartFormatter;
            return g ? g(p) : u.defaultBeforeChartFormatter(p);
          }, insertIntoDOM: function(p, g) {
            g.renderTo.insertBefore(p, g.renderTo.firstChild);
          }, afterInserted: function() {
            u.sonifyButtonId !== void 0 && u.initSonifyButton(u.sonifyButtonId), u.dataTableButtonId !== void 0 && u.initDataTableButton(u.dataTableButtonId);
          } }, after: { element: null, buildContent: function(p) {
            let g = a.screenReaderSection.afterChartFormatter;
            return g ? g(p) : u.defaultAfterChartFormatter();
          }, insertIntoDOM: function(p, g) {
            g.renderTo.insertBefore(p, g.container.nextSibling);
          }, afterInserted: function() {
            u.chart.accessibility && a.keyboardNavigation.enabled && u.chart.accessibility.keyboardNavigation.updateExitAnchor();
          } } };
        }
        onChartRender() {
          this.linkedDescriptionElement = this.getLinkedDescriptionElement(), this.setLinkedDescriptionAttrs(), this.updateAllScreenReaderSections();
        }
        updateAllScreenReaderSections() {
          let u = this;
          Object.keys(this.screenReaderSections).forEach(function(a) {
            u.updateScreenReaderSection(a);
          });
        }
        getLinkedDescriptionElement() {
          let u = this.chart.options.accessibility.linkedDescription;
          if (!u) return;
          if (typeof u != "string") return u;
          let a = co(u, this.chart), p = po.querySelectorAll(a);
          if (p.length === 1) return p[0];
        }
        setLinkedDescriptionAttrs() {
          let u = this.linkedDescriptionElement;
          u && (u.setAttribute("aria-hidden", "true"), ns(u, "highcharts-linked-description"));
        }
        updateScreenReaderSection(u) {
          let a = this.chart, p = this.screenReaderSections[u], g = p.buildContent(a), y = p.element = p.element || this.createElement("div"), A = y.firstChild || this.createElement("div");
          g ? (this.setScreenReaderSectionAttribs(y, u), qs().setElementHTML(A, g), y.appendChild(A), p.insertIntoDOM(y, a), a.styledMode ? ns(A, "highcharts-visually-hidden") : Zs(A), Gt(a, A), p.afterInserted && p.afterInserted()) : (y.parentNode && y.parentNode.removeChild(y), p.element = null);
        }
        setScreenReaderSectionAttribs(u, a) {
          let p = this.chart, g = p.langFormat("accessibility.screenReaderSection." + a + "RegionLabel", { chart: p, chartTitle: os(p) });
          mo(u, { id: `highcharts-screen-reader-region-${a}-${p.index}`, "aria-label": g || void 0 }), u.style.position = "relative", g && u.setAttribute("role", p.options.accessibility.landmarkVerbosity === "all" ? "region" : "group");
        }
        defaultBeforeChartFormatter() {
          let u = this.chart, a = u.options.accessibility.screenReaderSection.beforeChartFormat;
          if (!a) return "";
          let p = this.getAxesDescription(), g = u.sonify && u.options.sonification && u.options.sonification.enabled, y = "highcharts-a11y-sonify-data-btn-" + u.index, A = "hc-linkto-highcharts-data-table-" + u.index, w = Vn(u), T = u.langFormat("accessibility.screenReaderSection.annotations.heading", { chart: u }), E = { headingTagName: uo(u.renderTo), chartTitle: os(u), typeDescription: this.getTypeDescriptionText(), chartSubtitle: this.getSubtitleText(), chartLongdesc: this.getLongdescText(), xAxisDescription: p.xAxis, yAxisDescription: p.yAxis, playAsSoundButton: g ? this.getSonifyButtonText(y) : "", viewTableButton: u.exporting?.getCSV ? this.getDataTableButtonText(A) : "", annotationsTitle: w ? T : "", annotationsList: w }, P = ve.i18nFormat(a, E, u);
          return this.dataTableButtonId = A, this.sonifyButtonId = y, fo(P);
        }
        defaultAfterChartFormatter() {
          let u = this.chart, a = u.options.accessibility.screenReaderSection.afterChartFormat;
          if (!a) return "";
          let p = { endOfChartMarker: this.getEndOfChartMarkerText() };
          return fo(ve.i18nFormat(a, p, u));
        }
        getLinkedDescription() {
          let u = this.linkedDescriptionElement;
          return go(u && u.innerHTML || "", this.chart.renderer.forExport);
        }
        getLongdescText() {
          let u = this.chart.options, a = u.caption, p = a && a.text, g = this.getLinkedDescription();
          return u.accessibility.description || g || p || "";
        }
        getTypeDescriptionText() {
          let u = this.chart;
          return u.types ? u.options.accessibility.typeDescription || (function(a, p) {
            let g = p[0], y = a.series && a.series[0] || {}, A = a.mapView && a.mapView.geoMap && a.mapView.geoMap.title, w = { numSeries: a.series.length, numPoints: y.points && y.points.length, chart: a, mapTitle: A };
            if (!g) return a.langFormat("accessibility.chartTypes.emptyChart", w);
            if (g === "map" || g === "tiledwebmap") return w.mapTitle ? a.langFormat("accessibility.chartTypes.mapTypeDescription", w) : a.langFormat("accessibility.chartTypes.unknownMap", w);
            if (a.types.length > 1) return a.langFormat("accessibility.chartTypes.combinationChart", w);
            let T = p[0], E = a.langFormat("accessibility.seriesTypeDescriptions." + T, w), P = a.series && a.series.length < 2 ? "Single" : "Multiple";
            return (a.langFormat("accessibility.chartTypes." + T + P, w) || a.langFormat("accessibility.chartTypes.default" + P, w)) + (E ? " " + E : "");
          })(u, u.types) : "";
        }
        getDataTableButtonText(u) {
          let a = this.chart;
          return '<button id="' + u + '">' + a.langFormat("accessibility.table.viewAsDataTableButtonText", { chart: a, chartTitle: os(a) }) + "</button>";
        }
        getSonifyButtonText(u) {
          let a = this.chart;
          return a.options.sonification && a.options.sonification.enabled === !1 ? "" : '<button id="' + u + '">' + a.langFormat("accessibility.sonification.playAsSoundButtonText", { chart: a, chartTitle: os(a) }) + "</button>";
        }
        getSubtitleText() {
          let u = this.chart.options.subtitle;
          return go(u && u.text || "", this.chart.renderer.forExport);
        }
        getEndOfChartMarkerText() {
          let u = bt(`highcharts-end-of-chart-marker-${this.chart.index}`);
          if (u) return u.outerHTML;
          let a = this.chart, p = a.langFormat("accessibility.screenReaderSection.endOfChartMarker", { chart: a });
          return '<div id="highcharts-end-of-chart-marker-' + a.index + '">' + p + "</div>";
        }
        onDataTableCreated(u) {
          let a = this.chart;
          if (a.options.accessibility.enabled) {
            this.viewDataTableButton && this.viewDataTableButton.setAttribute("aria-expanded", "true");
            let p = u.tree.attributes || {};
            p.tabindex = -1, p.summary = a.langFormat("accessibility.table.tableSummary", { chart: a }), u.tree.attributes = p;
          }
        }
        focusDataTable() {
          let u = this.dataTableDiv, a = u && u.getElementsByTagName("table")[0];
          a && a.focus && a.focus();
        }
        initSonifyButton(u) {
          let a = this.sonifyButton = bt(u), p = this.chart, g = (y) => {
            a && (a.setAttribute("aria-hidden", "true"), a.setAttribute("aria-label", "")), y.preventDefault(), y.stopPropagation();
            let A = p.langFormat("accessibility.sonification.playAsSoundClickAnnouncement", { chart: p });
            this.announcer.announce(A), setTimeout(() => {
              a && (a.removeAttribute("aria-hidden"), a.removeAttribute("aria-label")), p.sonify && p.sonify();
            }, 1e3);
          };
          a && p && (a.setAttribute("tabindex", -1), a.onclick = function(y) {
            (p.options.accessibility && p.options.accessibility.screenReaderSection.onPlayAsSoundClick || g).call(this, y, p);
          });
        }
        initDataTableButton(u) {
          let a = this.viewDataTableButton = bt(u), p = this.chart, g = u.replace("hc-linkto-", "");
          a && (mo(a, { tabindex: -1, "aria-expanded": !!bt(g) }), a.onclick = p.options.accessibility.screenReaderSection.onViewDataTableClick || function() {
            p.exporting?.viewData();
          });
        }
        getAxesDescription() {
          let u = this.chart, a = function(T, E) {
            let P = u[T];
            return P.length > 1 || P[0] && Yt(P[0].options.accessibility && P[0].options.accessibility.enabled, E);
          }, p = !!u.types && 0 > u.types.indexOf("map") && 0 > u.types.indexOf("treemap") && 0 > u.types.indexOf("tilemap"), g = !!u.hasCartesianSeries, y = a("xAxis", !u.angular && g && p), A = a("yAxis", g && p), w = {};
          return y && (w.xAxis = this.getAxisDescriptionText("xAxis")), A && (w.yAxis = this.getAxisDescriptionText("yAxis")), w;
        }
        getAxisDescriptionText(u) {
          let a = this.chart, p = a[u];
          return a.langFormat("accessibility.axis." + u + "Description" + (p.length > 1 ? "Plural" : "Singular"), { chart: a, names: p.map(function(g) {
            return Li(g);
          }), ranges: p.map(function(g) {
            return qn(g);
          }), numAxes: p.length });
        }
        destroy() {
          this.announcer && this.announcer.destroy();
        }
      }, { attr: Zn } = K(), { getChartTitle: _s, unhideChartElementFromAT: xo } = Xt, { getFakeMouseEvent: as } = Ot;
      function ls(u) {
        return u.exporting?.svgElements?.[0];
      }
      class Di extends ce {
        init() {
          let a = this.chart, p = this;
          this.addEvent(a, "exportMenuShown", function() {
            p.onMenuShown();
          }), this.addEvent(a, "exportMenuHidden", function() {
            p.onMenuHidden();
          }), this.createProxyGroup();
        }
        onMenuHidden() {
          let a = this.chart.exporting?.contextMenuEl;
          a && a.setAttribute("aria-hidden", "true"), this.setExportButtonExpandedState("false");
        }
        onMenuShown() {
          let a = this.chart, p = a.exporting?.contextMenuEl;
          p && (this.addAccessibleContextMenuAttribs(), xo(a, p)), this.setExportButtonExpandedState("true");
        }
        setExportButtonExpandedState(a) {
          this.exportButtonProxy && this.exportButtonProxy.innerElement.setAttribute("aria-expanded", a);
        }
        onChartRender() {
          let a = this.chart, p = a.focusElement, g = a.accessibility;
          this.proxyProvider.clearGroup("chartMenu"), this.proxyMenuButton(), this.exportButtonProxy && p && p === a.exporting?.group && (p.focusBorder ? a.setFocusToElement(p, this.exportButtonProxy.innerElement) : g && g.keyboardNavigation.tabindexContainer.focus());
        }
        proxyMenuButton() {
          let a = this.chart, p = this.proxyProvider, g = ls(a);
          (function(y) {
            let A = y.options.exporting, w = ls(y);
            return !!(A && A.enabled !== !1 && A.accessibility && A.accessibility.enabled && w && w.element);
          })(a) && g && (this.exportButtonProxy = p.addProxyElement("chartMenu", { click: g }, "button", { "aria-label": a.langFormat("accessibility.exporting.menuButtonLabel", { chart: a, chartTitle: _s(a) }), "aria-expanded": !1, title: a.options.lang.contextButtonTitle || null }));
        }
        createProxyGroup() {
          this.chart && this.proxyProvider && this.proxyProvider.addGroup("chartMenu");
        }
        addAccessibleContextMenuAttribs() {
          let a = this.chart, p = a.exporting?.divElements;
          if (p && p.length) {
            p.forEach((y) => {
              y && (y.tagName !== "LI" || y.children && y.children.length ? y.setAttribute("aria-hidden", "true") : y.setAttribute("tabindex", -1));
            });
            let g = p[0] && p[0].parentNode;
            g && Zn(g, { "aria-hidden": void 0, "aria-label": a.langFormat("accessibility.exporting.chartMenuLabel", { chart: a }), role: "list" });
          }
        }
        getKeyboardNavigation() {
          let a = this.keyCodes, p = this.chart, g = this;
          return new te(p, { keyCodeMap: [[[a.left, a.up], function() {
            return g.onKbdPrevious(this);
          }], [[a.right, a.down], function() {
            return g.onKbdNext(this);
          }], [[a.enter, a.space], function() {
            return g.onKbdClick(this);
          }]], validate: function() {
            return !!p.exporting && p.options.exporting?.buttons?.contextButton.enabled !== !1 && p.options.exporting.enabled !== !1 && (p.options.exporting.accessibility?.enabled || !1) !== !1;
          }, init: function() {
            let y = g.exportButtonProxy, A = g.chart.exporting?.group;
            y && A && p.setFocusToElement(A, y.innerElement);
          }, terminate: function() {
            p.hideExportMenu();
          } });
        }
        onKbdPrevious(a) {
          let p = this.chart, g = p.options.accessibility, y = a.response, A = p.highlightedExportItemIx || 0;
          for (; A--; ) if (p.highlightExportItem(A)) return y.success;
          return g.keyboardNavigation.wrapAround ? (p.highlightLastExportItem(), y.success) : y.prev;
        }
        onKbdNext(a) {
          let p = this.chart, g = p.options.accessibility, y = a.response;
          for (let A = (p.highlightedExportItemIx || 0) + 1; A < (p.exporting?.divElements?.length || 0); ++A) if (p.highlightExportItem(A)) return y.success;
          return g.keyboardNavigation.wrapAround ? (p.highlightExportItem(0), y.success) : y.next;
        }
        onKbdClick(a) {
          let p = this.chart, g = p.highlightedExportItemIx !== void 0 && p.exporting?.divElements?.[p.highlightedExportItemIx], y = ls(p)?.element;
          return p.exporting?.openMenu ? g && this.fakeClickEvent(g) : (y && this.fakeClickEvent(y), p.highlightExportItem(0)), a.response.success;
        }
      }
      (function(u) {
        function a() {
          let A = ls(this);
          if (A) {
            let w = A.element;
            w.onclick && (w.onclick = function() {
              as("click");
            });
          }
        }
        function p() {
          let A = this.exporting?.divElements;
          A && this.exporting?.contextMenuEl && this.exporting?.openMenu && (A.forEach((w) => {
            w && w.className === "highcharts-menu-item" && w.onmouseout && w.onmouseout(as("mouseout"));
          }), this.highlightedExportItemIx = 0, this.exporting.contextMenuEl.hideMenu(), this.container.focus());
        }
        function g(A) {
          let w = this.exporting?.divElements?.[A], T = this.highlightedExportItemIx !== void 0 && this.exporting?.divElements?.[this.highlightedExportItemIx];
          if (w && w.tagName === "LI" && !(w.children && w.children.length)) {
            let E = !!(this.renderTo.getElementsByTagName("g")[0] || {}).focus;
            return w.focus && E && w.focus(), T && T.onmouseout && T.onmouseout(as("mouseout")), w.onmouseover && w.onmouseover(as("mouseover")), this.highlightedExportItemIx = A, !0;
          }
          return !1;
        }
        function y() {
          if (this.exporting?.divElements) {
            let A = this.exporting?.divElements.length;
            for (; A--; ) if (this.highlightExportItem(A)) return !0;
          }
          return !1;
        }
        u.compose = function(A) {
          let w = A.prototype;
          w.hideExportMenu || (w.hideExportMenu = p, w.highlightExportItem = g, w.highlightLastExportItem = y, w.showExportMenu = a);
        };
      })(Di || (Di = {}));
      let hs = Di, { doc: It, win: Js } = K(), { addEvent: _n, defined: Jn, fireEvent: Qn } = K(), { getElement: ta, simulatedEventTarget: yo } = Ot;
      class Qs {
        constructor(a, p) {
          this.currentModuleIx = NaN, this.modules = [], this.init(a, p);
        }
        init(a, p) {
          let g = this.eventProvider = new $();
          this.chart = a, this.components = p, this.modules = [], this.currentModuleIx = 0, this.update(), g.addEvent(this.tabindexContainer, "keydown", (y) => this.onKeydown(y)), g.addEvent(this.tabindexContainer, "focus", (y) => this.onFocus(y)), ["mouseup", "touchend"].forEach((y) => g.addEvent(It, y, (A) => this.onMouseUp(A))), ["mousedown", "touchstart"].forEach((y) => g.addEvent(a.renderTo, y, () => {
            this.isClickingChart = !0;
          }));
        }
        update(a) {
          let p = this.chart.options.accessibility, g = p && p.keyboardNavigation, y = this.components;
          this.updateContainerTabindex(), g && g.enabled && a && a.length ? (this.modules = a.reduce(function(A, w) {
            let T = y[w].getKeyboardNavigation();
            return A.concat(T);
          }, []), this.updateExitAnchor()) : (this.modules = [], this.currentModuleIx = 0, this.removeExitAnchor());
        }
        updateExitAnchor() {
          let a = ta(`highcharts-end-of-chart-marker-${this.chart.index}`);
          this.removeExitAnchor(), a ? (this.makeElementAnExitAnchor(a), this.exitAnchor = a) : this.createExitAnchor();
        }
        move(a) {
          let p = this.modules && this.modules[this.currentModuleIx];
          p && p.terminate && p.terminate(a), this.chart.focusElement && this.chart.focusElement.removeFocusBorder(), this.currentModuleIx += a;
          let g = this.modules && this.modules[this.currentModuleIx];
          if (g) {
            if (g.validate && !g.validate()) return this.move(a);
            if (g.init) return g.init(a), !0;
          }
          return this.currentModuleIx = 0, this.exiting = !0, a > 0 ? this.exitAnchor && this.exitAnchor.focus() : this.tabindexContainer.focus(), !1;
        }
        onFocus(a) {
          let p = this.chart, g = a.relatedTarget && p.container.contains(a.relatedTarget), y = p.options.accessibility, A = y && y.keyboardNavigation;
          if (A && A.enabled && !this.exiting && !this.tabbingInBackwards && !this.isClickingChart && !g) {
            let w = this.getFirstValidModuleIx();
            w !== null && (this.currentModuleIx = w, this.modules[w].init(1));
          }
          this.keyboardReset = !1, this.exiting = !1;
        }
        onMouseUp(a) {
          if (delete this.isClickingChart, !this.keyboardReset && a.relatedTarget !== yo) {
            let p = this.chart;
            if (!a.target || !p.container.contains(a.target)) {
              let g = this.modules && this.modules[this.currentModuleIx || 0];
              g && g.terminate && g.terminate(), this.currentModuleIx = 0;
            }
            p.focusElement && (p.focusElement.removeFocusBorder(), delete p.focusElement), this.keyboardReset = !0;
          }
        }
        onKeydown(a) {
          let p, g = a || Js.event, y = this.modules && this.modules.length && this.modules[this.currentModuleIx], A = g.target;
          if ((!A || A.nodeName !== "INPUT" || A.classList.contains("highcharts-a11y-proxy-element")) && (this.keyboardReset = !1, this.exiting = !1, y)) {
            let w = y.run(g);
            w === y.response.success ? p = !0 : w === y.response.prev ? p = this.move(-1) : w === y.response.next && (p = this.move(1)), p && (g.preventDefault(), g.stopPropagation());
          }
        }
        updateContainerTabindex() {
          let a, p = this.chart.options.accessibility, g = p && p.keyboardNavigation, y = !(g && g.enabled === !1), A = this.chart, w = A.container;
          A.renderTo.hasAttribute("tabindex") ? (w.removeAttribute("tabindex"), a = A.renderTo) : a = w, this.tabindexContainer = a;
          let T = a.getAttribute("tabindex");
          y && !T ? a.setAttribute("tabindex", "0") : y || A.container.removeAttribute("tabindex");
        }
        createExitAnchor() {
          let a = this.chart, p = this.exitAnchor = It.createElement("div");
          a.renderTo.appendChild(p), this.makeElementAnExitAnchor(p);
        }
        makeElementAnExitAnchor(a) {
          let p = this.tabindexContainer.getAttribute("tabindex") || 0;
          a.setAttribute("class", "highcharts-exit-anchor"), a.setAttribute("tabindex", p), a.setAttribute("aria-hidden", !1), this.addExitAnchorEventsToEl(a);
        }
        removeExitAnchor() {
          if (this.exitAnchor) {
            let a = this.eventProvider.eventRemovers.find((p) => p.element === this.exitAnchor);
            a && Jn(a.remover) && this.eventProvider.removeEvent(a.remover), this.exitAnchor.parentNode && this.exitAnchor.parentNode.removeChild(this.exitAnchor), delete this.exitAnchor;
          }
        }
        addExitAnchorEventsToEl(a) {
          let p = this.chart, g = this;
          this.eventProvider.addEvent(a, "focus", function(y) {
            let A = y || Js.event, w = !(A.relatedTarget && p.container.contains(A.relatedTarget) || g.exiting);
            if (p.focusElement && delete p.focusElement, w) {
              if (g.tabbingInBackwards = !0, g.tabindexContainer.focus(), delete g.tabbingInBackwards, A.preventDefault(), g.modules && g.modules.length) {
                g.currentModuleIx = g.modules.length - 1;
                let T = g.modules[g.currentModuleIx];
                T && T.validate && !T.validate() ? g.move(-1) : T && T.init(-1);
              }
            } else g.exiting = !1;
          });
        }
        getFirstValidModuleIx() {
          let a = this.modules.length;
          for (let p = 0; p < a; ++p) {
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
        function a() {
          let g = this;
          Qn(this, "dismissPopupContent", {}, function() {
            g.tooltip && g.tooltip.hide(0), g.hideExportMenu();
          });
        }
        function p(g) {
          (g.which || g.keyCode) === 27 && K().charts && K().charts.forEach((y) => {
            y && y.dismissPopupContent && y.dismissPopupContent();
          });
        }
        u.compose = function(g) {
          hs.compose(g);
          let y = g.prototype;
          return !y.dismissPopupContent && (y.dismissPopupContent = a, It && _n(It, "keydown", p)), g;
        };
      })(Qs || (Qs = {}));
      let tr = Qs;
      var bo = gt(632), er = gt.n(bo);
      let { animObject: ir } = K(), { doc: ds } = K(), { addEvent: ea, fireEvent: Mt, isNumber: vo, pick: wo, syncTimeout: ia } = K(), { getChartTitle: sa } = Xt, { stripHTMLTagsFromString: ko, addClass: ra, removeClass: Mo } = Ot;
      function sr(u) {
        let a = u.legend && u.legend.allItems, p = u.options.legend.accessibility || {}, g = u.colorAxis && u.colorAxis.some((y) => !y.dataClasses || !y.dataClasses.length);
        return !!(a && a.length && !g && p.enabled !== !1);
      }
      function rr(u, a) {
        let p = a.legendItem || {};
        for (let g of (a.setState(u ? "hover" : "", !0), ["group", "label", "symbol"])) {
          let y = p[g], A = y && y.element || y;
          A && Mt(A, u ? "mouseover" : "mouseout");
        }
      }
      class or extends ce {
        constructor() {
          super(...arguments), this.highlightedLegendItemIx = NaN, this.proxyGroup = null;
        }
        init() {
          let a = this;
          this.recreateProxies(), this.addEvent(er(), "afterScroll", function() {
            this.chart === a.chart && (a.proxyProvider.updateGroupProxyElementPositions("legend"), a.updateLegendItemProxyVisibility(), a.highlightedLegendItemIx > -1 && this.chart.highlightLegendItem(a.highlightedLegendItemIx));
          }), this.addEvent(er(), "afterPositionItem", function(p) {
            this.chart === a.chart && this.chart.renderer && a.updateProxyPositionForItem(p.item);
          }), this.addEvent(er(), "afterRender", function() {
            this.chart === a.chart && this.chart.renderer && a.recreateProxies() && ia(() => a.proxyProvider.updateGroupProxyElementPositions("legend"), ir(wo(this.chart.renderer.globalAnimation, !0)).duration);
          });
        }
        updateLegendItemProxyVisibility() {
          let a, p = this.chart, g = p.legend, y = g.allItems || [], A = g.currentPage || 1, w = g.clipHeight || 0;
          y.forEach((T) => {
            if (T.a11yProxyElement) {
              let E = g.pages && g.pages.length, P = T.a11yProxyElement.element, B = !1;
              if (a = T.legendItem || {}, E) {
                let z = a.pageIx || 0;
                B = (a.y || 0) + (a.label ? Math.round(a.label.getBBox().height) : 0) - g.pages[z] > w || z !== A - 1;
              }
              B ? p.styledMode ? ra(P, "highcharts-a11y-invisible") : P.style.visibility = "hidden" : (Mo(P, "highcharts-a11y-invisible"), P.style.visibility = "");
            }
          });
        }
        onChartRender() {
          sr(this.chart) || this.removeProxies();
        }
        highlightAdjacentLegendPage(a) {
          let p = this.chart, g = p.legend, y = (g.currentPage || 1) + a, A = g.pages || [];
          if (y > 0 && y <= A.length) {
            let w = 0;
            for (let T of g.allItems) ((T.legendItem || {}).pageIx || 0) + 1 === y && p.highlightLegendItem(w) && (this.highlightedLegendItemIx = w), ++w;
          }
        }
        updateProxyPositionForItem(a) {
          a.a11yProxyElement && a.a11yProxyElement.refreshPosition();
        }
        recreateProxies() {
          let a = ds.activeElement, p = this.proxyGroup, g = a && p && p.contains(a);
          return this.removeProxies(), !!sr(this.chart) && (this.addLegendProxyGroup(), this.proxyLegendItems(), this.updateLegendItemProxyVisibility(), this.updateLegendTitle(), g && this.chart.highlightLegendItem(this.highlightedLegendItemIx), !0);
        }
        removeProxies() {
          this.proxyProvider.removeGroup("legend");
        }
        updateLegendTitle() {
          let a = this.chart, p = ko((a.legend && a.legend.options.title && a.legend.options.title.text || "").replace(/<br ?\/?>/g, " "), a.renderer.forExport), g = a.langFormat("accessibility.legend.legendLabel" + (p ? "" : "NoTitle"), { chart: a, legendTitle: p, chartTitle: sa(a) });
          this.proxyProvider.updateGroupAttrs("legend", { "aria-label": g });
        }
        addLegendProxyGroup() {
          let a = this.chart.options.accessibility.landmarkVerbosity === "all" ? "region" : null;
          this.proxyGroup = this.proxyProvider.addGroup("legend", "ul", { "aria-label": "_placeholder_", role: a });
        }
        proxyLegendItems() {
          let a, p = this;
          ((this.chart.legend || {}).allItems || []).forEach((g) => {
            (a = g.legendItem || {}).label && a.label.element && p.proxyLegendItem(g);
          });
        }
        proxyLegendItem(a) {
          let p = a.legendItem || {}, g = a.legendItem?.label, y = g?.element, A = p.label?.styles?.textOverflow === "ellipsis";
          if (!p.label || !p.group) return;
          let w = this.chart.langFormat("accessibility.legend.legendItem", { chart: this.chart, itemName: ko(a.name, this.chart.renderer.forExport), item: a }), T = { tabindex: -1, "aria-pressed": a.visible, "aria-label": w, title: "" };
          A && (y.textContent || "").indexOf("…") !== -1 && (T.title = g?.textStr);
          let E = p.group.div ? p.label : p.group;
          a.a11yProxyElement = this.proxyProvider.addProxyElement("legend", { click: p.label, visual: E.element }, "button", T);
        }
        getKeyboardNavigation() {
          let a = this.keyCodes, p = this, g = this.chart;
          return new te(g, { keyCodeMap: [[[a.left, a.right, a.up, a.down], function(y) {
            return p.onKbdArrowKey(this, y);
          }], [[a.enter, a.space], function() {
            return p.onKbdClick(this);
          }], [[a.pageDown, a.pageUp], function(y) {
            let A = y === a.pageDown ? 1 : -1;
            return p.highlightAdjacentLegendPage(A), this.response.success;
          }]], validate: function() {
            return p.shouldHaveLegendNavigation();
          }, init: function() {
            g.highlightLegendItem(0), p.highlightedLegendItemIx = 0;
          }, terminate: function() {
            p.highlightedLegendItemIx = -1, g.legend.allItems.forEach((y) => rr(!1, y));
          } });
        }
        onKbdArrowKey(a, p) {
          let { keyCodes: { left: g, up: y }, highlightedLegendItemIx: A, chart: w } = this, T = w.legend.allItems.length, E = w.options.accessibility.keyboardNavigation.wrapAround, P = p === g || p === y ? -1 : 1;
          return w.highlightLegendItem(A + P) ? this.highlightedLegendItemIx += P : E && T > 1 && (this.highlightedLegendItemIx = P > 0 ? 0 : T - 1, w.highlightLegendItem(this.highlightedLegendItemIx)), a.response.success;
        }
        onKbdClick(a) {
          let p = this.chart.legend.allItems[this.highlightedLegendItemIx];
          return p && p.a11yProxyElement && p.a11yProxyElement.click(), a.response.success;
        }
        shouldHaveLegendNavigation() {
          if (!sr(this.chart)) return !1;
          let a = this.chart, p = (a.options.legend || {}).accessibility || {};
          return !!(a.legend.display && p.keyboardNavigation && p.keyboardNavigation.enabled);
        }
        destroy() {
          this.removeProxies();
        }
      }
      (function(u) {
        function a(g) {
          let y = this.legend.allItems, A = this.accessibility && this.accessibility.components.legend.highlightedLegendItemIx, w = y[g], T = w?.legendItem || {};
          if (w) {
            vo(A) && y[A] && rr(!1, y[A]);
            var E = this.legend;
            let P = (E.allItems[g].legendItem || {}).pageIx, B = E.currentPage;
            P !== void 0 && P + 1 !== B && E.scroll(1 + P - B);
            let z = T.label, R = w.a11yProxyElement && w.a11yProxyElement.innerElement;
            return z && z.element && R && this.setFocusToElement(z, R), rr(!0, w), !0;
          }
          return !1;
        }
        function p(g) {
          let y = this.chart.options.accessibility, A = g.item;
          y.enabled && A && A.a11yProxyElement && A.a11yProxyElement.innerElement.setAttribute("aria-pressed", g.visible ? "true" : "false");
        }
        u.compose = function(g, y) {
          let A = g.prototype;
          A.highlightLegendItem || (A.highlightLegendItem = a, ea(y, "afterColorizeItem", p));
        };
      })(or || (or = {}));
      let Ao = or;
      var cs = gt(532), nr = gt.n(cs);
      let { isTouchDevice: ar } = K(), { addEvent: Ae, merge: lr, pick: jt } = K(), Ii = [];
      function oa() {
        this.navigator && this.navigator.setBaseSeries(null, !1);
      }
      function na() {
        let u, a, p, g = this.legend, y = this.navigator;
        if (y) {
          u = g && g.options, a = y.xAxis, p = y.yAxis;
          let { scrollbarHeight: A, scrollButtonSize: w } = y;
          this.inverted ? (y.left = y.opposite ? this.chartWidth - A - y.height : this.spacing[3] + A, y.top = this.plotTop + w) : (y.left = jt(a.left, this.plotLeft + w), y.top = y.navigatorOptions.top || this.chartHeight - y.height - A - (this.scrollbar?.options.margin || 0) - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (u && u.verticalAlign === "bottom" && u.layout !== "proximate" && u.enabled && !u.floating ? g.legendHeight + jt(u.margin, 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0)), a && p && (this.inverted ? a.options.left = p.options.left = y.left : a.options.top = p.options.top = y.top, a.setAxisSize(), p.setAxisSize());
        }
      }
      function aa(u) {
        !this.navigator && !this.scroller && (this.options.navigator.enabled || this.options.scrollbar.enabled) && (this.scroller = this.navigator = new Mi(this), jt(u.redraw, !0) && this.redraw(u.animation));
      }
      function hr() {
        let u = this.options;
        (u.navigator.enabled || u.scrollbar.enabled) && (this.scroller = this.navigator = new Mi(this));
      }
      function ps() {
        let u = this.options, a = u.navigator, p = u.rangeSelector;
        if ((a && a.enabled || p && p.enabled) && (!ar && this.zooming.type === "x" || ar && this.zooming.pinchType === "x")) return !1;
      }
      function la(u) {
        let a = u.navigator;
        if (a && u.xAxis[0]) {
          let p = u.xAxis[0].getExtremes();
          a.render(p.min, p.max);
        }
      }
      function ha(u) {
        let a = u.options.navigator || {}, p = u.options.scrollbar || {};
        !this.navigator && !this.scroller && (a.enabled || p.enabled) && (lr(!0, this.options.navigator, a), lr(!0, this.options.scrollbar, p), delete u.options.navigator, delete u.options.scrollbar);
      }
      let To = { compose: function(u, a) {
        if (K().pushUnique(Ii, u)) {
          let p = u.prototype;
          Mi = a, p.callbacks.push(la), Ae(u, "afterAddSeries", oa), Ae(u, "afterSetChartSize", na), Ae(u, "afterUpdate", aa), Ae(u, "beforeRender", hr), Ae(u, "beforeShowResetZoom", ps), Ae(u, "update", ha);
        }
      } }, { isTouchDevice: So } = K(), { addEvent: $e, correctFloat: Co, defined: ri, isNumber: Eo, pick: Po } = K();
      function da() {
        this.navigatorAxis || (this.navigatorAxis = new cr(this));
      }
      function dr(u) {
        let a, p = this.chart, g = p.options, y = g.navigator, A = this.navigatorAxis, w = p.zooming.pinchType, T = g.rangeSelector, E = p.zooming.type;
        if (this.isXAxis && (y?.enabled || T?.enabled)) {
          if (E === "y" && u.trigger === "zoom") a = !1;
          else if ((u.trigger === "zoom" && E === "xy" || So && w === "xy") && this.options.range) {
            let P = A.previousZoom;
            ri(u.min) ? A.previousZoom = [this.min, this.max] : P && (u.min = P[0], u.max = P[1], A.previousZoom = void 0);
          }
        }
        a !== void 0 && u.preventDefault();
      }
      class cr {
        static compose(a) {
          a.keepProps.includes("navigatorAxis") || (a.keepProps.push("navigatorAxis"), $e(a, "init", da), $e(a, "setExtremes", dr));
        }
        constructor(a) {
          this.axis = a;
        }
        destroy() {
          this.axis = void 0;
        }
        toFixedRange(a, p, g, y) {
          let A = this.axis, w = (A.pointRange || 0) / 2, T = Po(g, A.translate(a, !0, !A.horiz)), E = Po(y, A.translate(p, !0, !A.horiz));
          return ri(g) || (T = Co(T + w)), ri(y) || (E = Co(E - w)), Eo(T) && Eo(E) || (T = E = void 0), { min: T, max: E };
        }
      }
      var us = gt(620), Oo = gt.n(us), pe = gt(512), Lo = gt.n(pe);
      let { parse: Bi } = Oo(), { seriesTypes: pr } = Lo(), ur = { height: 40, margin: 22, maskInside: !0, handles: { width: 7, borderRadius: 0, height: 15, symbols: ["navigator-handle", "navigator-handle"], enabled: !0, lineWidth: 1, backgroundColor: "#f2f2f2", borderColor: "#999999" }, maskFill: Bi("#667aff").setOpacity(0.3).get(), outlineColor: "#999999", outlineWidth: 1, series: { type: pr.areaspline === void 0 ? "line" : "areaspline", fillOpacity: 0.05, lineWidth: 1, compare: null, sonification: { enabled: !1 }, dataGrouping: { approximation: "average", enabled: !0, groupPixelWidth: 2, firstAnchor: "firstPoint", anchor: "middle", lastAnchor: "lastPoint", units: [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2, 3, 4]], ["week", [1, 2, 3]], ["month", [1, 3, 6]], ["year", null]] }, dataLabels: { enabled: !1, zIndex: 2 }, id: "highcharts-navigator-series", className: "highcharts-navigator-series", lineColor: null, marker: { enabled: !1 }, threshold: null }, xAxis: { className: "highcharts-navigator-xaxis", tickLength: 0, lineWidth: 0, gridLineColor: "#e6e6e6", id: "navigator-x-axis", gridLineWidth: 1, tickPixelInterval: 200, labels: { align: "left", style: { color: "#000000", fontSize: "0.7em", opacity: 0.6, textOutline: "2px contrast" }, x: 3, y: -4 }, crosshair: !1 }, yAxis: { className: "highcharts-navigator-yaxis", gridLineWidth: 0, startOnTick: !1, endOnTick: !1, minPadding: 0.1, id: "navigator-y-axis", maxPadding: 0.1, labels: { enabled: !1 }, crosshair: !1, title: { text: void 0 }, tickLength: 0, tickWidth: 0 } }, { defined: ca, isNumber: pa, pick: Nl } = K(), ua = { rect: function(u, a, p, g, y) {
        return y?.r ? (function(A, w, T, E, P) {
          let B = P?.r || 0;
          return [["M", A + B, w], ["L", A + T - B, w], ["A", B, B, 0, 0, 1, A + T, w + B], ["L", A + T, w + E - B], ["A", B, B, 0, 0, 1, A + T - B, w + E], ["L", A + B, w + E], ["A", B, B, 0, 0, 1, A, w + E - B], ["L", A, w + B], ["A", B, B, 0, 0, 1, A + B, w], ["Z"]];
        })(u, a, p, g, y) : [["M", u, a], ["L", u + p, a], ["L", u + p, a + g], ["L", u, a + g], ["Z"]];
      } }, { relativeLength: Do } = K(), gr = { "navigator-handle": function(u, a, p, g, y = {}) {
        let A = y.width ? y.width / 2 : p, w = Do(y.borderRadius || 0, Math.min(2 * A, g));
        return [["M", -1.5, (g = y.height || g) / 2 - 3.5], ["L", -1.5, g / 2 + 4.5], ["M", 0.5, g / 2 - 3.5], ["L", 0.5, g / 2 + 4.5], ...ua.rect(-A - 1, 0.5, 2 * A + 1, g, { r: w })];
      } };
      var oi = gt(608), Te = gt.n(oi);
      let { defined: Ni } = K(), { defaultOptions: ga } = K(), { composed: ma } = K(), { getRendererType: fa } = Te(), { setFixedRange: Io } = { setFixedRange: function(u) {
        let a = this.xAxis[0];
        Ni(a.dataMax) && Ni(a.dataMin) && u ? this.fixedRange = Math.min(u, a.dataMax - a.dataMin) : this.fixedRange = u;
      } }, { addEvent: Bt, extend: ae, pushUnique: Bo } = K();
      function xa() {
        this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, !1);
      }
      let No = { compose: function(u, a, p) {
        cr.compose(a), Bo(ma, "Navigator") && (u.prototype.setFixedRange = Io, ae(fa().prototype.symbols, gr), ae(ga, { navigator: ur }), Bt(p, "afterUpdate", xa));
      } }, { composed: Ri } = K(), { addEvent: gs, correctFloat: zi, defined: Fe, pick: He, pushUnique: Ro } = K();
      (function(u) {
        let a;
        function p(w) {
          let T = He(w.options?.min, w.min), E = He(w.options?.max, w.max);
          return { axisMin: T, axisMax: E, scrollMin: Fe(w.dataMin) ? Math.min(T, w.min ?? 1 / 0, w.dataMin, w.threshold ?? 1 / 0) : T, scrollMax: w.treeGrid?.adjustedMax ?? (Fe(w.dataMax) ? Math.max(E, w.max ?? -1 / 0, w.dataMax, w.threshold ?? -1 / 0) : E) };
        }
        function g() {
          let w = this.scrollbar, T = w && !w.options.opposite, E = this.horiz ? 2 : T ? 3 : 1;
          w && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[E] += w.size + (w.options.margin || 0));
        }
        function y() {
          let w = this;
          w.options?.scrollbar?.enabled && (w.options.scrollbar.vertical = !w.horiz, w.options.startOnTick = w.options.endOnTick = !1, w.scrollbar = new a(w.chart.renderer, w.options.scrollbar, w.chart), gs(w.scrollbar, "changed", function(T) {
            let E, P, { axisMin: B, axisMax: z, scrollMin: R, scrollMax: F } = p(w), G = w.toPixels(R), U = w.toPixels(F) - G;
            if (Fe(B) && Fe(z)) if (w.horiz && !w.reversed || !w.horiz && w.reversed ? (E = Math.min(F, w.toValue(G + U * this.to)), P = Math.max(R, w.toValue(G + U * this.from))) : (E = Math.min(F, w.toValue(G + U * (1 - this.from))), P = Math.max(R, w.toValue(G + U * (1 - this.to)))), this.shouldUpdateExtremes(T.DOMType)) {
              let ct = T.DOMType !== "mousemove" && T.DOMType !== "touchmove" && void 0;
              w.setExtremes(zi(P), zi(E), !0, ct, T);
            } else this.setRange(this.from, this.to);
          }));
        }
        function A() {
          let w, T, E, { scrollMin: P, scrollMax: B } = p(this), z = this.scrollbar, R = (this.axisTitleMargin || 0) + (this.titleOffset || 0), F = this.chart.scrollbarsOffsets, G = this.options.margin || 0;
          if (z && F) {
            if (this.horiz) this.opposite || (F[1] += R), z.position(this.left, this.top + this.height + 2 + F[1] - (this.opposite ? G : 0), this.width, this.height), this.opposite || (F[1] += G), w = 1;
            else {
              let U;
              this.opposite && (F[0] += R), U = z.options.opposite ? this.left + this.width + 2 + F[0] - (this.opposite ? 0 : G) : this.opposite ? 0 : G, z.position(U, this.top, this.width, this.height), this.opposite && (F[0] += G), w = 0;
            }
            if (F[w] += z.size + (z.options.margin || 0), isNaN(P) || isNaN(B) || !Fe(this.min) || !Fe(this.max) || Fe(this.dataMin) && this.dataMin === this.dataMax) z.setRange(0, 1);
            else if (this.min === this.max) {
              let U = this.pointRange / (this.dataMax + 1);
              T = U * this.min, E = U * (this.max + 1), z.setRange(T, E);
            } else T = (this.toPixels(this.min) - this.toPixels(P)) / (this.toPixels(B) - this.toPixels(P)), E = (this.toPixels(this.max) - this.toPixels(P)) / (this.toPixels(B) - this.toPixels(P)), this.horiz && !this.reversed || !this.horiz && this.reversed ? z.setRange(T, E) : z.setRange(1 - E, 1 - T);
          }
        }
        u.compose = function(w, T) {
          Ro(Ri, "Axis.Scrollbar") && (a = T, gs(w, "afterGetOffset", g), gs(w, "afterInit", y), gs(w, "afterRender", A));
        };
      })(Si || (Si = {}));
      let ya = Si, Ze = { height: 10, barBorderRadius: 5, buttonBorderRadius: 0, buttonsEnabled: !1, liveRedraw: void 0, margin: void 0, minWidth: 6, opposite: !0, step: 0.2, zIndex: 3, barBackgroundColor: "#cccccc", barBorderWidth: 0, barBorderColor: "#cccccc", buttonArrowColor: "#333333", buttonBackgroundColor: "#e6e6e6", buttonBorderColor: "#cccccc", buttonBorderWidth: 1, rifleColor: "none", trackBackgroundColor: "rgba(255, 255, 255, 0.001)", trackBorderColor: "#cccccc", trackBorderRadius: 5, trackBorderWidth: 1 }, { defaultOptions: mr } = K(), { composed: zo } = K(), { addEvent: fr, correctFloat: We, crisp: ni, defined: Fo, destroyObjectProperties: Ho, extend: xr, fireEvent: Fi, merge: Wo, pick: Hi, pushUnique: ba, removeEvent: va } = K();
      class Xe {
        static compose(a) {
          ya.compose(a, Xe), ba(zo, "Scrollbar") && xr(mr, { scrollbar: Ze });
        }
        static swapXY(a, p) {
          return p && a.forEach((g) => {
            let y, A = g.length;
            for (let w = 0; w < A; w += 2) typeof (y = g[w + 1]) == "number" && (g[w + 1] = g[w + 2], g[w + 2] = y);
          }), a;
        }
        constructor(a, p, g) {
          this._events = [], this.chartX = 0, this.chartY = 0, this.from = 0, this.scrollbarButtons = [], this.scrollbarLeft = 0, this.scrollbarStrokeWidth = 1, this.scrollbarTop = 0, this.size = 0, this.to = 0, this.trackBorderWidth = 1, this.x = 0, this.y = 0, this.init(a, p, g);
        }
        addEvents() {
          let a = this.options.inverted ? [1, 0] : [0, 1], p = this.scrollbarButtons, g = this.scrollbarGroup.element, y = this.track.element, A = this.mouseDownHandler.bind(this), w = this.mouseMoveHandler.bind(this), T = this.mouseUpHandler.bind(this), E = [[p[a[0]].element, "click", this.buttonToMinClick.bind(this)], [p[a[1]].element, "click", this.buttonToMaxClick.bind(this)], [y, "click", this.trackClick.bind(this)], [g, "mousedown", A], [g.ownerDocument, "mousemove", w], [g.ownerDocument, "mouseup", T], [g, "touchstart", A], [g.ownerDocument, "touchmove", w], [g.ownerDocument, "touchend", T]];
          E.forEach(function(P) {
            fr.apply(null, P);
          }), this._events = E;
        }
        buttonToMaxClick(a) {
          let p = (this.to - this.from) * Hi(this.options.step, 0.2);
          this.updatePosition(this.from + p, this.to + p), Fi(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: a });
        }
        buttonToMinClick(a) {
          let p = We(this.to - this.from) * Hi(this.options.step, 0.2);
          this.updatePosition(We(this.from - p), We(this.to - p)), Fi(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: a });
        }
        cursorToScrollbarPosition(a) {
          let p = this.options, g = p.minWidth > this.calculatedWidth ? p.minWidth : 0;
          return { chartX: (a.chartX - this.x - this.xOffset) / (this.barWidth - g), chartY: (a.chartY - this.y - this.yOffset) / (this.barWidth - g) };
        }
        destroy() {
          let a = this, p = a.chart.scroller;
          a.removeEvents(), ["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"].forEach(function(g) {
            a[g] && a[g].destroy && (a[g] = a[g].destroy());
          }), p && a === p.scrollbar && (p.scrollbar = null, Ho(p.scrollbarButtons));
        }
        drawScrollbarButton(a) {
          let p = this.renderer, g = this.scrollbarButtons, y = this.options, A = this.size, w = p.g().add(this.group);
          if (g.push(w), y.buttonsEnabled) {
            let T = p.rect().addClass("highcharts-scrollbar-button").add(w);
            this.chart.styledMode || T.attr({ stroke: y.buttonBorderColor, "stroke-width": y.buttonBorderWidth, fill: y.buttonBackgroundColor }), T.attr(T.crisp({ x: -0.5, y: -0.5, width: A, height: A, r: y.buttonBorderRadius }, T.strokeWidth()));
            let E = p.path(Xe.swapXY([["M", A / 2 + (a ? -1 : 1), A / 2 - 3], ["L", A / 2 + (a ? -1 : 1), A / 2 + 3], ["L", A / 2 + (a ? 2 : -2), A / 2]], y.vertical)).addClass("highcharts-scrollbar-arrow").add(g[a]);
            this.chart.styledMode || E.attr({ fill: y.buttonArrowColor });
          }
        }
        init(a, p, g) {
          this.scrollbarButtons = [], this.renderer = a, this.userOptions = p, this.options = Wo(Ze, mr.scrollbar, p), this.options.margin = Hi(this.options.margin, 10), this.chart = g, this.size = Hi(this.options.size, this.options.height), p.enabled && (this.render(), this.addEvents());
        }
        mouseDownHandler(a) {
          let p = this.chart.pointer?.normalize(a) || a, g = this.cursorToScrollbarPosition(p);
          this.chartX = g.chartX, this.chartY = g.chartY, this.initPositions = [this.from, this.to], this.grabbedCenter = !0;
        }
        mouseMoveHandler(a) {
          let p, g = this.chart.pointer?.normalize(a) || a, y = this.options.vertical ? "chartY" : "chartX", A = this.initPositions || [];
          this.grabbedCenter && (!a.touches || a.touches[0][y] !== 0) && (p = this.cursorToScrollbarPosition(g)[y] - this[y], this.hasDragged = !0, this.updatePosition(A[0] + p, A[1] + p), this.hasDragged && Fi(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMType: a.type, DOMEvent: a }));
        }
        mouseUpHandler(a) {
          this.hasDragged && Fi(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMType: a.type, DOMEvent: a }), this.grabbedCenter = this.hasDragged = this.chartX = this.chartY = null;
        }
        position(a, p, g, y) {
          let { buttonsEnabled: A, margin: w = 0, vertical: T } = this.options, E = this.rendered ? "animate" : "attr", P = y, B = 0;
          this.group.show(), this.x = a, this.y = p + this.trackBorderWidth, this.width = g, this.height = y, this.xOffset = P, this.yOffset = B, T ? (this.width = this.yOffset = g = B = this.size, this.xOffset = P = 0, this.yOffset = B = A ? this.size : 0, this.barWidth = y - (A ? 2 * g : 0), this.x = a += w) : (this.height = y = this.size, this.xOffset = P = A ? this.size : 0, this.barWidth = g - (A ? 2 * y : 0), this.y = this.y + w), this.group[E]({ translateX: a, translateY: this.y }), this.track[E]({ width: g, height: y }), this.scrollbarButtons[1][E]({ translateX: T ? 0 : g - P, translateY: T ? y - B : 0 });
        }
        removeEvents() {
          this._events.forEach(function(a) {
            va.apply(null, a);
          }), this._events.length = 0;
        }
        render() {
          let a = this.renderer, p = this.options, g = this.size, y = this.chart.styledMode, A = a.g("scrollbar").attr({ zIndex: p.zIndex }).hide().add();
          this.group = A, this.track = a.rect().addClass("highcharts-scrollbar-track").attr({ r: p.trackBorderRadius || 0, height: g, width: g }).add(A), y || this.track.attr({ fill: p.trackBackgroundColor, stroke: p.trackBorderColor, "stroke-width": p.trackBorderWidth });
          let w = this.trackBorderWidth = this.track.strokeWidth();
          this.track.attr({ x: -ni(0, w), y: -ni(0, w) }), this.scrollbarGroup = a.g().add(A), this.scrollbar = a.rect().addClass("highcharts-scrollbar-thumb").attr({ height: g - w, width: g - w, r: p.barBorderRadius || 0 }).add(this.scrollbarGroup), this.scrollbarRifles = a.path(Xe.swapXY([["M", -3, g / 4], ["L", -3, 2 * g / 3], ["M", 0, g / 4], ["L", 0, 2 * g / 3], ["M", 3, g / 4], ["L", 3, 2 * g / 3]], p.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup), y || (this.scrollbar.attr({ fill: p.barBackgroundColor, stroke: p.barBorderColor, "stroke-width": p.barBorderWidth }), this.scrollbarRifles.attr({ stroke: p.rifleColor, "stroke-width": 1 })), this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(), this.scrollbarGroup.translate(-ni(0, this.scrollbarStrokeWidth), -ni(0, this.scrollbarStrokeWidth)), this.drawScrollbarButton(0), this.drawScrollbarButton(1);
        }
        setRange(a, p) {
          let g, y, A = this.options, w = A.vertical, T = A.minWidth, E = this.barWidth, P = !this.rendered || this.hasDragged || this.chart.navigator && this.chart.navigator.hasDragged ? "attr" : "animate";
          if (!Fo(E)) return;
          let B = E * Math.min(p, 1);
          g = Math.ceil(E * (a = Math.max(a, 0))), this.calculatedWidth = y = We(B - g), y < T && (g = (E - T + y) * a, y = T);
          let z = Math.floor(g + this.xOffset + this.yOffset), R = y / 2 - 0.5;
          this.from = a, this.to = p, w ? (this.scrollbarGroup[P]({ translateY: z }), this.scrollbar[P]({ height: y }), this.scrollbarRifles[P]({ translateY: R }), this.scrollbarTop = z, this.scrollbarLeft = 0) : (this.scrollbarGroup[P]({ translateX: z }), this.scrollbar[P]({ width: y }), this.scrollbarRifles[P]({ translateX: R }), this.scrollbarLeft = z, this.scrollbarTop = 0), y <= 12 ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(), A.showFull === !1 && (a <= 0 && p >= 1 ? this.group.hide() : this.group.show()), this.rendered = !0;
        }
        shouldUpdateExtremes(a) {
          return Hi(this.options.liveRedraw, K().svg && !K().isTouchDevice && !this.chart.boosted) || a === "mouseup" || a === "touchend" || !Fo(a);
        }
        trackClick(a) {
          let p = this.chart.pointer?.normalize(a) || a, g = this.to - this.from, y = this.y + this.scrollbarTop, A = this.x + this.scrollbarLeft;
          this.options.vertical && p.chartY > y || !this.options.vertical && p.chartX > A ? this.updatePosition(this.from + g, this.to + g) : this.updatePosition(this.from - g, this.to - g), Fi(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: a });
        }
        update(a) {
          this.destroy(), this.init(this.chart.renderer, Wo(!0, this.options, a), this.chart);
        }
        updatePosition(a, p) {
          p > 1 && (a = We(1 - We(p - a)), p = 1), a < 0 && (p = We(p - a), a = 0), this.from = a, this.to = p;
        }
      }
      Xe.defaultOptions = Ze;
      var wa = gt(540), ka = gt.n(wa);
      let { defaultOptions: yr } = K(), { isTouchDevice: Xo } = K(), { prototype: { symbols: _e } } = ka(), { addEvent: Rt, clamp: br, correctFloat: ms, defined: ai, destroyObjectProperties: Ma, erase: Ge, extend: vr, find: fs, fireEvent: li, isArray: Go, isNumber: le, merge: Se, pick: Nt, removeEvent: xs, splat: Ye } = K();
      function ys(u, ...a) {
        let p = [].filter.call(a, le);
        if (p.length) return Math[u].apply(0, p);
      }
      class ue {
        static compose(a, p, g) {
          To.compose(a, ue), No.compose(a, p, g);
        }
        constructor(a) {
          this.isDirty = !1, this.scrollbarHeight = 0, this.init(a);
        }
        drawHandle(a, p, g, y) {
          let A = this.navigatorOptions.handles.height;
          this.handles[p][y](g ? { translateX: Math.round(this.left + this.height / 2), translateY: Math.round(this.top + parseInt(a, 10) + 0.5 - A) } : { translateX: Math.round(this.left + parseInt(a, 10)), translateY: Math.round(this.top + this.height / 2 - A / 2 - 1) });
        }
        drawOutline(a, p, g, y) {
          let A = this.navigatorOptions.maskInside, w = this.outline.strokeWidth(), T = w / 2, E = w % 2 / 2, P = this.scrollButtonSize, B = this.size, z = this.top, R = this.height, F = z - T, G = z + R, U = this.left, ct, nt;
          g ? (ct = z + p + E, p = z + a + E, nt = [["M", U + R, z - P - E], ["L", U + R, ct], ["L", U, ct], ["M", U, p], ["L", U + R, p], ["L", U + R, z + B + P]], A && nt.push(["M", U + R, ct - T], ["L", U + R, p + T])) : (U -= P, a += U + P - E, p += U + P - E, nt = [["M", U, F], ["L", a, F], ["L", a, G], ["M", p, G], ["L", p, F], ["L", U + B + 2 * P, F]], A && nt.push(["M", a - T, F], ["L", p + T, F])), this.outline[y]({ d: nt });
        }
        drawMasks(a, p, g, y) {
          let A, w, T, E, P = this.left, B = this.top, z = this.height;
          g ? (T = [P, P, P], E = [B, B + a, B + p], w = [z, z, z], A = [a, p - a, this.size - p]) : (T = [P, P + a, P + p], E = [B, B, B], w = [a, p - a, this.size - p], A = [z, z, z]), this.shades.forEach((R, F) => {
            R[y]({ x: T[F], y: E[F], width: w[F], height: A[F] });
          });
        }
        renderElements() {
          let a = this, p = a.navigatorOptions, g = p.maskInside, y = a.chart, A = y.inverted, w = y.renderer, T = { cursor: A ? "ns-resize" : "ew-resize" }, E = a.navigatorGroup ?? (a.navigatorGroup = w.g("navigator").attr({ zIndex: 8, visibility: "hidden" }).add());
          if ([!g, g, !g].forEach((P, B) => {
            let z = a.shades[B] ?? (a.shades[B] = w.rect().addClass("highcharts-navigator-mask" + (B === 1 ? "-inside" : "-outside")).add(E));
            y.styledMode || (z.attr({ fill: P ? p.maskFill : "rgba(0,0,0,0)" }), B === 1 && z.css(T));
          }), a.outline || (a.outline = w.path().addClass("highcharts-navigator-outline").add(E)), y.styledMode || a.outline.attr({ "stroke-width": p.outlineWidth, stroke: p.outlineColor }), p.handles?.enabled) {
            let P = p.handles, { height: B, width: z } = P;
            [0, 1].forEach((R) => {
              let F = P.symbols[R];
              if (a.handles[R] && a.handles[R].symbolUrl === F) {
                if (!a.handles[R].isImg && a.handles[R].symbolName !== F) {
                  let G = _e[F].call(_e, -z / 2 - 1, 0, z, B);
                  a.handles[R].attr({ d: G }), a.handles[R].symbolName = F;
                }
              } else a.handles[R]?.destroy(), a.handles[R] = w.symbol(F, -z / 2 - 1, 0, z, B, P), a.handles[R].attr({ zIndex: 7 - R }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][R]).add(E), a.addMouseEvents();
              y.inverted && a.handles[R].attr({ rotation: 90, rotationOriginX: Math.floor(-z / 2), rotationOriginY: (B + z) / 2 }), y.styledMode || a.handles[R].attr({ fill: P.backgroundColor, stroke: P.borderColor, "stroke-width": P.lineWidth, width: P.width, height: P.height, x: -z / 2 - 1, y: 0 }).css(T);
            });
          }
        }
        update(a, p = !1) {
          let g = this.chart, y = g.options.chart.inverted !== g.scrollbar?.options.vertical;
          if (Se(!0, g.options.navigator, a), this.navigatorOptions = g.options.navigator || {}, this.setOpposite(), ai(a.enabled) || y) return this.destroy(), this.navigatorEnabled = a.enabled || this.navigatorEnabled, this.init(g);
          if (this.navigatorEnabled && (this.isDirty = !0, a.adaptToUpdatedData === !1 && this.baseSeries.forEach((A) => {
            xs(A, "updatedData", this.updatedDataHandler);
          }, this), a.adaptToUpdatedData && this.baseSeries.forEach((A) => {
            A.eventsToUnbind.push(Rt(A, "updatedData", this.updatedDataHandler));
          }, this), (a.series || a.baseSeries) && this.setBaseSeries(void 0, !1), a.height || a.xAxis || a.yAxis)) {
            this.height = a.height ?? this.height;
            let A = this.getXAxisOffsets();
            this.xAxis.update({ ...a.xAxis, offsets: A, [g.inverted ? "width" : "height"]: this.height, [g.inverted ? "height" : "width"]: void 0 }, !1), this.yAxis.update({ ...a.yAxis, [g.inverted ? "width" : "height"]: this.height }, !1);
          }
          p && g.redraw();
        }
        render(a, p, g, y) {
          let A = this.chart, w = this.xAxis, T = w.pointRange || 0, E = w.navigatorAxis.fake ? A.xAxis[0] : w, P = this.navigatorEnabled, B = this.rendered, z = A.inverted, R = A.xAxis[0].minRange, F = A.xAxis[0].options.maxRange, G = this.scrollButtonSize, U, ct, nt, rt = this.scrollbarHeight, lt, tt;
          if (this.hasDragged && !ai(g)) return;
          if (this.isDirty && this.renderElements(), a = ms(a - T / 2), p = ms(p + T / 2), !le(a) || !le(p)) if (B) g = 0, y = Nt(w.width, E.width);
          else return;
          this.left = Nt(w.left, A.plotLeft + G + (z ? A.plotWidth : 0));
          let et = this.size = lt = Nt(w.len, (z ? A.plotHeight : A.plotWidth) - 2 * G);
          U = z ? rt : lt + 2 * G, g = Nt(g, w.toPixels(a, !0)), y = Nt(y, w.toPixels(p, !0)), le(g) && Math.abs(g) !== 1 / 0 || (g = 0, y = U);
          let ft = w.toValue(g, !0), xt = w.toValue(y, !0), zt = Math.abs(ms(xt - ft));
          zt < R ? this.grabbedLeft ? g = w.toPixels(xt - R - T, !0) : this.grabbedRight && (y = w.toPixels(ft + R + T, !0)) : ai(F) && ms(zt - T) > F && (this.grabbedLeft ? g = w.toPixels(xt - F - T, !0) : this.grabbedRight && (y = w.toPixels(ft + F + T, !0))), this.zoomedMax = br(Math.max(g, y), 0, et), this.zoomedMin = br(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(g, y), 0, et), this.range = this.zoomedMax - this.zoomedMin, et = Math.round(this.zoomedMax);
          let St = Math.round(this.zoomedMin);
          P && (this.navigatorGroup.attr({ visibility: "inherit" }), tt = B && !this.hasDragged ? "animate" : "attr", this.drawMasks(St, et, z, tt), this.drawOutline(St, et, z, tt), this.navigatorOptions.handles.enabled && (this.drawHandle(St, 0, z, tt), this.drawHandle(et, 1, z, tt))), this.scrollbar && (z ? (nt = this.top - G, ct = this.left - rt + (P || !E.opposite ? 0 : (E.titleOffset || 0) + E.axisTitleMargin), rt = lt + 2 * G) : (nt = this.top + (P ? this.height : -rt), ct = this.left - G), this.scrollbar.position(ct, nt, U, rt), this.scrollbar.setRange(this.zoomedMin / (lt || 1), this.zoomedMax / (lt || 1))), this.rendered = !0, this.isDirty = !1, li(this, "afterRender");
        }
        addMouseEvents() {
          let a = this, p = a.chart, g = p.container, y = [], A, w;
          a.mouseMoveHandler = A = function(T) {
            a.onMouseMove(T);
          }, a.mouseUpHandler = w = function(T) {
            a.onMouseUp(T);
          }, (y = a.getPartsEvents("mousedown")).push(Rt(p.renderTo, "mousemove", A), Rt(g.ownerDocument, "mouseup", w), Rt(p.renderTo, "touchmove", A), Rt(g.ownerDocument, "touchend", w)), y.concat(a.getPartsEvents("touchstart")), a.eventsToUnbind = y, a.series && a.series[0] && y.push(Rt(a.series[0].xAxis, "foundExtremes", function() {
            p.navigator.modifyNavigatorAxisExtremes();
          }));
        }
        getPartsEvents(a) {
          let p = this, g = [];
          return ["shades", "handles"].forEach(function(y) {
            p[y].forEach(function(A, w) {
              g.push(Rt(A.element, a, function(T) {
                p[y + "Mousedown"](T, w);
              }));
            });
          }), g;
        }
        shadesMousedown(a, p) {
          a = this.chart.pointer?.normalize(a) || a;
          let g = this.chart, y = this.xAxis, A = this.zoomedMin, w = this.size, T = this.range, E = this.left, P = a.chartX, B, z, R, F;
          g.inverted && (P = a.chartY, E = this.top), p === 1 ? (this.grabbedCenter = P, this.fixedWidth = T, this.dragOffset = P - A) : (F = P - E - T / 2, p === 0 ? F = Math.max(0, F) : p === 2 && F + T >= w && (F = w - T, this.reversedExtremes ? (F -= T, z = this.getUnionExtremes().dataMin) : B = this.getUnionExtremes().dataMax), F !== A && (this.fixedWidth = T, ai((R = y.navigatorAxis.toFixedRange(F, F + T, z, B)).min) && li(this, "setRange", { min: Math.min(R.min, R.max), max: Math.max(R.min, R.max), redraw: !0, eventArguments: { trigger: "navigator" } })));
        }
        handlesMousedown(a, p) {
          a = this.chart.pointer?.normalize(a) || a;
          let g = this.chart, y = g.xAxis[0], A = this.reversedExtremes;
          p === 0 ? (this.grabbedLeft = !0, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = A ? y.min : y.max) : (this.grabbedRight = !0, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = A ? y.max : y.min), g.setFixedRange(void 0);
        }
        onMouseMove(a) {
          let p = this, g = p.chart, y = p.navigatorSize, A = p.range, w = p.dragOffset, T = g.inverted, E = p.left, P;
          (!a.touches || a.touches[0].pageX !== 0) && (P = (a = g.pointer?.normalize(a) || a).chartX, T && (E = p.top, P = a.chartY), p.grabbedLeft ? (p.hasDragged = !0, p.render(0, 0, P - E, p.otherHandlePos)) : p.grabbedRight ? (p.hasDragged = !0, p.render(0, 0, p.otherHandlePos, P - E)) : p.grabbedCenter && (p.hasDragged = !0, P < w ? P = w : P > y + w - A && (P = y + w - A), p.render(0, 0, P - w, P - w + A)), p.hasDragged && p.scrollbar && Nt(p.scrollbar.options.liveRedraw, !Xo && !this.chart.boosted) && (a.DOMType = a.type, setTimeout(function() {
            p.onMouseUp(a);
          }, 0)));
        }
        onMouseUp(a) {
          let p, g, y, A, w, T, E = this.chart, P = this.xAxis, B = this.scrollbar, z = a.DOMEvent || a, R = E.inverted, F = this.rendered && !this.hasDragged ? "animate" : "attr";
          (this.hasDragged && (!B || !B.hasDragged) || a.trigger === "scrollbar") && (y = this.getUnionExtremes(), this.zoomedMin === this.otherHandlePos ? A = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (w = this.fixedExtreme), this.zoomedMax === this.size && (w = this.reversedExtremes ? y.dataMin : y.dataMax), this.zoomedMin === 0 && (A = this.reversedExtremes ? y.dataMax : y.dataMin), ai((T = P.navigatorAxis.toFixedRange(this.zoomedMin, this.zoomedMax, A, w)).min) && li(this, "setRange", { min: Math.min(T.min, T.max), max: Math.max(T.min, T.max), redraw: !0, animation: !this.hasDragged && null, eventArguments: { trigger: "navigator", triggerOp: "navigator-drag", DOMEvent: z } })), a.DOMType !== "mousemove" && a.DOMType !== "touchmove" && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null), this.navigatorEnabled && le(this.zoomedMin) && le(this.zoomedMax) && (g = Math.round(this.zoomedMin), p = Math.round(this.zoomedMax), this.shades && this.drawMasks(g, p, R, F), this.outline && this.drawOutline(g, p, R, F), this.navigatorOptions.handles.enabled && Object.keys(this.handles).length === this.handles.length && (this.drawHandle(g, 0, R, F), this.drawHandle(p, 1, R, F)));
        }
        removeEvents() {
          this.eventsToUnbind && (this.eventsToUnbind.forEach(function(a) {
            a();
          }), this.eventsToUnbind = void 0), this.removeBaseSeriesEvents();
        }
        removeBaseSeriesEvents() {
          let a = this.baseSeries || [];
          this.navigatorEnabled && a[0] && (this.navigatorOptions.adaptToUpdatedData !== !1 && a.forEach(function(p) {
            xs(p, "updatedData", this.updatedDataHandler);
          }, this), a[0].xAxis && xs(a[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
        }
        getXAxisOffsets() {
          return this.chart.inverted ? [this.scrollButtonSize, 0, -this.scrollButtonSize, 0] : [0, -this.scrollButtonSize, 0, this.scrollButtonSize];
        }
        init(a) {
          let p = a.options, g = p.navigator || {}, y = g.enabled, A = p.scrollbar || {}, w = A.enabled, T = y && g.height || 0, E = w && A.height || 0, P = A.buttonsEnabled && E || 0;
          this.handles = [], this.shades = [], this.chart = a, this.setBaseSeries(), this.height = T, this.scrollbarHeight = E, this.scrollButtonSize = P, this.scrollbarEnabled = w, this.navigatorEnabled = y, this.navigatorOptions = g, this.scrollbarOptions = A, this.setOpposite();
          let B = this, z = B.baseSeries, R = a.xAxis.length, F = a.yAxis.length, G = z && z[0] && z[0].xAxis || a.xAxis[0] || { options: {} };
          if (a.isDirtyBox = !0, B.navigatorEnabled) {
            let U = this.getXAxisOffsets();
            B.xAxis = new (nr())(a, Se({ breaks: G.options.breaks, ordinal: G.options.ordinal, overscroll: G.options.overscroll }, g.xAxis, { type: "datetime", yAxis: g.yAxis?.id, index: R, isInternal: !0, offset: 0, keepOrdinalPadding: !0, startOnTick: !1, endOnTick: !1, minPadding: G.options.ordinal ? 0 : G.options.minPadding, maxPadding: G.options.ordinal ? 0 : G.options.maxPadding, zoomEnabled: !1 }, a.inverted ? { offsets: U, width: T } : { offsets: U, height: T }), "xAxis"), B.yAxis = new (nr())(a, Se(g.yAxis, { alignTicks: !1, offset: 0, index: F, isInternal: !0, reversed: Nt(g.yAxis && g.yAxis.reversed, a.yAxis[0] && a.yAxis[0].reversed, !1), zoomEnabled: !1 }, a.inverted ? { width: T } : { height: T }), "yAxis"), z || g.series.data ? B.updateNavigatorSeries(!1) : a.series.length === 0 && (B.unbindRedraw = Rt(a, "beforeRedraw", function() {
              a.series.length > 0 && !B.series && (B.setBaseSeries(), B.unbindRedraw());
            })), B.reversedExtremes = a.inverted && !B.xAxis.reversed || !a.inverted && B.xAxis.reversed, B.renderElements(), B.addMouseEvents();
          } else B.xAxis = { chart: a, navigatorAxis: { fake: !0 }, translate: function(U, ct) {
            let nt = a.xAxis[0], rt = nt.getExtremes(), lt = nt.len - 2 * P, tt = ys("min", nt.options.min, rt.dataMin), et = ys("max", nt.options.max, rt.dataMax) - tt;
            return ct ? U * et / lt + tt : lt * (U - tt) / et;
          }, toPixels: function(U) {
            return this.translate(U);
          }, toValue: function(U) {
            return this.translate(U, !0);
          } }, B.xAxis.navigatorAxis.axis = B.xAxis, B.xAxis.navigatorAxis.toFixedRange = cr.prototype.toFixedRange.bind(B.xAxis.navigatorAxis);
          if (a.options.scrollbar?.enabled) {
            let U = Se(a.options.scrollbar, { vertical: a.inverted });
            le(U.margin) || (U.margin = a.inverted ? -3 : 3), a.scrollbar = B.scrollbar = new Xe(a.renderer, U, a), Rt(B.scrollbar, "changed", function(ct) {
              let nt = B.size, rt = nt * this.to, lt = nt * this.from;
              B.hasDragged = B.scrollbar.hasDragged, B.render(0, 0, lt, rt), this.shouldUpdateExtremes(ct.DOMType) && setTimeout(function() {
                B.onMouseUp(ct);
              });
            });
          }
          B.addBaseSeriesEvents(), B.addChartEvents();
        }
        setOpposite() {
          let a = this.navigatorOptions, p = this.navigatorEnabled, g = this.chart;
          this.opposite = Nt(a.opposite, !!(!p && g.inverted));
        }
        getUnionExtremes(a) {
          let p, g = this.chart.xAxis[0], y = this.chart.time, A = this.xAxis, w = A.options, T = g.options;
          return a && g.dataMin === null || (p = { dataMin: Nt(y.parse(w?.min), ys("min", y.parse(T.min), g.dataMin, A.dataMin, A.min)), dataMax: Nt(y.parse(w?.max), ys("max", y.parse(T.max), g.dataMax, A.dataMax, A.max)) }), p;
        }
        setBaseSeries(a, p) {
          let g = this.chart, y = this.baseSeries = [];
          a = a || g.options && g.options.navigator.baseSeries || (g.series.length ? fs(g.series, (A) => !A.options.isInternal).index : 0), (g.series || []).forEach((A, w) => {
            !A.options.isInternal && (A.options.showInNavigator || (w === a || A.options.id === a) && A.options.showInNavigator !== !1) && y.push(A);
          }), this.xAxis && !this.xAxis.navigatorAxis.fake && this.updateNavigatorSeries(!0, p);
        }
        updateNavigatorSeries(a, p) {
          let g = this, y = g.chart, A = g.baseSeries, w = { enableMouseTracking: !1, index: null, linkedTo: null, group: "nav", padXAxis: !1, xAxis: this.navigatorOptions.xAxis?.id, yAxis: this.navigatorOptions.yAxis?.id, showInLegend: !1, stacking: void 0, isInternal: !0, states: { inactive: { opacity: 1 } } }, T = g.series = (g.series || []).filter((R) => {
            let F = R.baseSeries;
            return !(0 > A.indexOf(F)) || (F && (xs(F, "updatedData", g.updatedDataHandler), delete F.navigatorSeries), R.chart && R.destroy(), !1);
          }), E, P, B = g.navigatorOptions.series, z;
          A && A.length && A.forEach((R) => {
            let F = R.navigatorSeries, G = vr({ color: R.color, visible: R.visible }, Go(B) ? yr.navigator.series : B);
            if (F && g.navigatorOptions.adaptToUpdatedData === !1) return;
            w.name = "Navigator " + A.length, z = (E = R.options || {}).navigatorOptions || {}, G.dataLabels = Ye(G.dataLabels), (P = Se(E, w, G, z)).pointRange = Nt(G.pointRange, z.pointRange, yr.plotOptions[P.type || "line"].pointRange);
            let U = z.data || G.data;
            g.hasNavigatorData = g.hasNavigatorData || !!U, P.data = U || E.data?.slice(0), F && F.options ? F.update(P, p) : (R.navigatorSeries = y.initSeries(P), y.setSortedData(), R.navigatorSeries.baseSeries = R, T.push(R.navigatorSeries));
          }), (B.data && !(A && A.length) || Go(B)) && (g.hasNavigatorData = !1, (B = Ye(B)).forEach((R, F) => {
            w.name = "Navigator " + (T.length + 1), (P = Se(yr.navigator.series, { color: y.series[F] && !y.series[F].options.isInternal && y.series[F].color || y.options.colors[F] || y.options.colors[0] }, w, R)).data = R.data, P.data && (g.hasNavigatorData = !0, T.push(y.initSeries(P)));
          })), a && this.addBaseSeriesEvents();
        }
        addBaseSeriesEvents() {
          let a = this, p = a.baseSeries || [];
          p[0] && p[0].xAxis && p[0].eventsToUnbind.push(Rt(p[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes)), p.forEach((g) => {
            g.eventsToUnbind.push(Rt(g, "show", function() {
              this.navigatorSeries && this.navigatorSeries.setVisible(!0, !1);
            })), g.eventsToUnbind.push(Rt(g, "hide", function() {
              this.navigatorSeries && this.navigatorSeries.setVisible(!1, !1);
            })), this.navigatorOptions.adaptToUpdatedData !== !1 && g.xAxis && g.eventsToUnbind.push(Rt(g, "updatedData", this.updatedDataHandler)), g.eventsToUnbind.push(Rt(g, "remove", function() {
              p && Ge(p, g), this.navigatorSeries && a.series && (Ge(a.series, this.navigatorSeries), ai(this.navigatorSeries.options) && this.navigatorSeries.remove(!1), delete this.navigatorSeries);
            }));
          });
        }
        getBaseSeriesMin(a) {
          return this.baseSeries.reduce(function(p, g) {
            return Math.min(p, g.getColumn("x")[0] ?? p);
          }, a);
        }
        modifyNavigatorAxisExtremes() {
          let a = this.xAxis;
          if (a.getExtremes !== void 0) {
            let p = this.getUnionExtremes(!0);
            p && (p.dataMin !== a.min || p.dataMax !== a.max) && (a.min = p.dataMin, a.max = p.dataMax);
          }
        }
        modifyBaseAxisExtremes() {
          let a, p, g = this.chart.navigator, y = this.getExtremes(), A = y.min, w = y.max, T = y.dataMin, E = y.dataMax, P = w - A, B = g.stickToMin, z = g.stickToMax, R = Nt(this.ordinal?.convertOverscroll(this.options.overscroll), 0), F = g.series && g.series[0], G = !!this.setExtremes;
          !(this.eventArgs && this.eventArgs.trigger === "rangeSelectorButton") && (B && (a = (p = T) + P), z && (a = E + R, B || (p = Math.max(T, a - P, g.getBaseSeriesMin(F && F.xData ? F.xData[0] : -Number.MAX_VALUE)))), G && (B || z) && le(p) && (this.min = this.userMin = p, this.max = this.userMax = a)), g.stickToMin = g.stickToMax = null;
        }
        updatedDataHandler() {
          let a = this.chart.navigator, p = this.navigatorSeries, g = a.reversedExtremes ? Math.round(a.zoomedMin) === 0 : Math.round(a.zoomedMax) >= Math.round(a.size);
          a.stickToMax = Nt(this.chart.options.navigator && this.chart.options.navigator.stickToMax, g), a.stickToMin = a.shouldStickToMin(this, a), p && !a.hasNavigatorData && (p.options.pointStart = this.getColumn("x")[0], p.setData(this.options.data, !1, null, !1));
        }
        shouldStickToMin(a, p) {
          let g = p.getBaseSeriesMin(a.getColumn("x")[0]), y = a.xAxis, A = y.max, w = y.min, T = y.options.range;
          return !!(le(A) && le(w)) && (T && A - g > 0 ? A - g < T : w <= g);
        }
        addChartEvents() {
          this.eventsToUnbind || (this.eventsToUnbind = []), this.eventsToUnbind.push(Rt(this.chart, "redraw", function() {
            let a = this.navigator, p = a && (a.baseSeries && a.baseSeries[0] && a.baseSeries[0].xAxis || this.xAxis[0]);
            p && a.render(p.min, p.max);
          }), Rt(this.chart, "getMargins", function() {
            let a = this.navigator, p = a.opposite ? "plotTop" : "marginBottom";
            this.inverted && (p = a.opposite ? "marginRight" : "plotLeft"), this[p] = (this[p] || 0) + (a.navigatorEnabled || !this.inverted ? a.height + (this.scrollbar?.options.margin || 0) + a.scrollbarHeight : 0) + (a.navigatorOptions.margin || 0);
          }), Rt(ue, "setRange", function(a) {
            this.chart.xAxis[0].setExtremes(a.min, a.max, a.redraw, a.animation, a.eventArguments);
          }));
        }
        destroy() {
          this.removeEvents(), this.xAxis && (Ge(this.chart.xAxis, this.xAxis), Ge(this.chart.axes, this.xAxis)), this.yAxis && (Ge(this.chart.yAxis, this.yAxis), Ge(this.chart.axes, this.yAxis)), (this.series || []).forEach((a) => {
            a.destroy && a.destroy();
          }), ["series", "xAxis", "yAxis", "shades", "outline", "scrollbarTrack", "scrollbarRifles", "scrollbarGroup", "scrollbar", "navigatorGroup", "rendered"].forEach((a) => {
            this[a] && this[a].destroy && this[a].destroy(), this[a] = null;
          }), [this.handles].forEach((a) => {
            Ma(a);
          }), this.baseSeries.forEach((a) => {
            a.navigatorSeries = void 0;
          }), this.navigatorEnabled = !1;
        }
      }
      let { animObject: Wi } = K(), { format: wr } = be(), { clamp: kr, pick: Mr, syncTimeout: Aa } = K(), { getFakeMouseEvent: Ta } = Ot, { getAxisRangeDescription: Sa, fireEventOnWrappedOrUnwrappedElement: bs } = Xt, Ca = class extends ce {
        init() {
          let u = this.chart, a = this;
          this.announcer = new At(u, "polite"), this.addEvent(ue, "afterRender", function() {
            this.chart === a.chart && this.chart.renderer && Aa(() => {
              a.proxyProvider.updateGroupProxyElementPositions("navigator"), a.updateHandleValues();
            }, Wi(Mr(this.chart.renderer.globalAnimation, !0)).duration);
          });
        }
        onChartUpdate() {
          let u = this.chart, a = u.options, p = a.navigator;
          if (p.enabled && p.accessibility?.enabled) {
            let g = a.accessibility.landmarkVerbosity, y = a.lang.accessibility?.navigator.groupLabel;
            this.proxyProvider.removeGroup("navigator"), this.proxyProvider.addGroup("navigator", "div", { role: g === "all" ? "region" : "group", "aria-label": wr(y, { chart: u }, u) });
            let A = a.lang.accessibility?.navigator.handleLabel;
            [0, 1].forEach((w) => {
              let T = this.getHandleByIx(w);
              if (T) {
                let E = this.proxyProvider.addProxyElement("navigator", { click: T }, "input", { type: "range", "aria-label": wr(A, { handleIx: w, chart: u }, u) });
                this[w ? "maxHandleProxy" : "minHandleProxy"] = E.innerElement, E.innerElement.style.pointerEvents = "none", E.innerElement.oninput = () => this.updateNavigator();
              }
            }), this.updateHandleValues();
          } else this.proxyProvider.removeGroup("navigator");
        }
        getNavigatorHandleNavigation(u) {
          let a = this, p = this.chart, g = u ? this.maxHandleProxy : this.minHandleProxy, y = this.keyCodes;
          return new te(p, { keyCodeMap: [[[y.left, y.right, y.up, y.down], function(A) {
            if (g) {
              let w = A === y.left || A === y.up ? -1 : 1;
              g.value = "" + kr(parseFloat(g.value) + w, 0, 100), a.updateNavigator(() => {
                let T = a.getHandleByIx(u);
                T && p.setFocusToElement(T, g);
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
            let a = u.size;
            this.minHandleProxy.value = "" + Math.round(u.zoomedMin / a * 100), this.maxHandleProxy.value = "" + Math.round(u.zoomedMax / a * 100);
          }
        }
        getHandleByIx(u) {
          let a = this.chart.navigator;
          return a && a.handles && a.handles[u];
        }
        updateNavigator(u) {
          this.updateNavigatorThrottleTimer && clearTimeout(this.updateNavigatorThrottleTimer), this.updateNavigatorThrottleTimer = setTimeout(((a) => {
            let p = this.chart, { navigator: g, pointer: y } = p, A = this.chart.accessibility?.keyboardNavigation;
            if (g && y && this.minHandleProxy && this.maxHandleProxy) {
              let w = y.getChartPosition(), T = parseFloat(this.minHandleProxy.value) / 100 * g.size, E = parseFloat(this.maxHandleProxy.value) / 100 * g.size;
              [[0, "mousedown", g.zoomedMin], [0, "mousemove", T], [0, "mouseup", T], [1, "mousedown", g.zoomedMax], [1, "mousemove", E], [1, "mouseup", E]].forEach(([z, R, F]) => {
                let G = this.getHandleByIx(z)?.element;
                G && bs(G, Ta(R, { x: w.left + g.left + F, y: w.top + g.top }, G));
              }), A && (A.keyboardReset = !1), a && a();
              let P = p.options.lang.accessibility?.navigator.changeAnnouncement, B = Sa(p.xAxis[0]);
              this.announcer.announce(wr(P, { axisRangeDescription: B, chart: p }, p));
            }
          }).bind(this, u), 20);
        }
      }, { getPointAnnotationTexts: Ea } = qt, { getAxisDescription: Pa, getSeriesFirstPointElement: je, getSeriesA11yElement: Oa, unhideChartElementFromAT: Yo } = Xt, { format: vs, numberFormat: La } = be(), { reverseChildNodes: ws, stripHTMLTagsFromString: jo } = Ot, { find: Da, isNumber: Uo, isString: Vo, pick: ee, defined: ge } = K();
      function qo(u) {
        let a = u.chart.options.accessibility.series.pointDescriptionEnabledThreshold;
        return !!(a !== !1 && u.points && u.points.length >= +a);
      }
      function Ko(u, a) {
        let p = u.series, g = p.chart, y = g.options.accessibility.point || {}, A = p.options.accessibility && p.options.accessibility.point || {}, w = p.tooltipOptions || {}, T = g.options.lang;
        return Uo(a) ? La(a, A.valueDecimals || y.valueDecimals || w.valueDecimals || -1, T.decimalPoint, T.accessibility.thousandsSep || T.thousandsSep) : a;
      }
      function $o(u, a) {
        let p = u[a];
        return u.chart.langFormat("accessibility.series." + a + "Description", { name: Pa(p), series: u });
      }
      function Zo(u) {
        let a = u.series, p = a.chart.series.length > 1 || a.options.name, g = (function(T) {
          let E = T.series, P = E.chart, B = E.options.accessibility, z = B && B.point && B.point.valueDescriptionFormat || P.options.accessibility.point.valueDescriptionFormat, R = ee(E.xAxis && E.xAxis.options.accessibility && E.xAxis.options.accessibility.enabled, !P.angular && E.type !== "flowmap"), F = R ? (function(G) {
            let U = (function(lt) {
              let tt = lt.series, et = tt.chart, ft = tt.options.accessibility && tt.options.accessibility.point || {}, xt = et.options.accessibility.point || {}, zt = tt.xAxis && tt.xAxis.dateTime;
              if (zt) {
                let St = zt.getXDateFormat(lt.x || 0, et.options.tooltip.dateTimeLabelFormats), Lt = ft.dateFormatter && ft.dateFormatter(lt) || xt.dateFormatter && xt.dateFormatter(lt) || ft.dateFormat || xt.dateFormat || St;
                return et.time.dateFormat(Lt, lt.x || 0, void 0);
              }
            })(G), ct = (G.series.xAxis || {}).categories && ge(G.category) && ("" + G.category).replace("<br/>", " "), nt = ge(G.id) && 0 > ("" + G.id).indexOf("highcharts-"), rt = "x, " + G.x;
            return G.name || U || ct || (nt ? G.id : rt);
          })(T) : "";
          return vs(z, { point: T, index: ge(T.index) ? T.index + 1 : "", xDescription: F, value: (function(G) {
            let U = G.series, ct = U.chart.options.accessibility.point || {}, nt = U.chart.options.accessibility && U.chart.options.accessibility.point || {}, rt = U.tooltipOptions || {}, lt = nt.valuePrefix || ct.valuePrefix || rt.valuePrefix || "", tt = nt.valueSuffix || ct.valueSuffix || rt.valueSuffix || "", et = G.value !== void 0 ? "value" : "y", ft = Ko(G, G[et]);
            if (G.isNull) return U.chart.langFormat("accessibility.series.nullPointValue", { point: G });
            if (U.pointArrayMap) {
              let xt = lt || "", zt = tt || "", St = function(Lt) {
                let Ee = Ko(G, ee(G[Lt], G.options[Lt]));
                return Ee !== void 0 ? Lt + ": " + xt + Ee + zt : Ee;
              };
              return G.series.pointArrayMap.reduce(function(Lt, Ee) {
                let Ls = St(Ee);
                return Ls ? Lt + (Lt.length ? ", " : "") + Ls : Lt;
              }, "");
            }
            return lt + ft + tt;
          })(T), separator: R ? ", " : "" }, P);
        })(u), y = u.options && u.options.accessibility && u.options.accessibility.description, A = p ? " " + a.name + "." : "", w = (function(T) {
          let E = T.series.chart, P = Ea(T);
          return P.length ? E.langFormat("accessibility.series.pointAnnotationsDescription", { point: T, annotations: P }) : "";
        })(u);
        return u.accessibility = u.accessibility || {}, u.accessibility.valueDescription = g, g + (y ? " " + y : "") + A + (w ? " " + w : "");
      }
      function _o(u) {
        let a = u.chart, p = a.types || [], g = (function(R) {
          let F = (R.options.accessibility || {}).description;
          return F && R.chart.langFormat("accessibility.series.description", { description: F, series: R }) || "";
        })(u), y = function(R) {
          return a[R] && a[R].length > 1 && u[R];
        }, A = u.index + 1, w = $o(u, "xAxis"), T = $o(u, "yAxis"), E = { seriesNumber: A, series: u, chart: a }, P = p.length > 1 ? "Combination" : "", B = a.langFormat("accessibility.series.summary." + u.type + P, E) || a.langFormat("accessibility.series.summary.default" + P, E), z = (y("yAxis") ? " " + T + "." : "") + (y("xAxis") ? " " + w + "." : "");
        return vs(ee(u.options.accessibility && u.options.accessibility.descriptionFormat, a.options.accessibility.series.descriptionFormat, ""), { seriesDescription: B, authorDescription: g ? " " + g : "", axisDescription: z, series: u, chart: a, seriesNumber: A }, void 0);
      }
      let hi = { defaultPointDescriptionFormatter: Zo, defaultSeriesDescriptionFormatter: _o, describeSeries: function(u) {
        let a = u.chart, p = je(u), g = Oa(u), y = a.is3d && a.is3d();
        if (g) {
          g.lastChild !== p || y || ws(g);
          let A = (function(E) {
            let P = E.options.accessibility || {};
            return !qo(E) && !P.exposeAsGroupOnly;
          })(u), w = (function(E) {
            let P = E.chart.options.accessibility.keyboardNavigation.seriesNavigation;
            return !!(E.points && (E.points.length < +P.pointNavigationEnabledThreshold || P.pointNavigationEnabledThreshold === !1));
          })(u), T = u.chart.options.accessibility.point.describeNull;
          if ((A || w) && u.points.forEach((E) => {
            let P = E.graphic && E.graphic.element || (function(z) {
              let R = z.series, F = R && R.chart, G = R && R.is("sunburst"), U = z.isNull, ct = F && F.options.accessibility.point.describeNull;
              return U && !G && ct;
            })(E) && (function(z) {
              let R = z.series, F = (function(rt) {
                let lt = rt.index;
                if (!rt.series || !rt.series.data || !ge(lt)) return null;
                let tt = rt.series.options?.nullInteraction;
                return Da(rt.series.data, function(et) {
                  return !!(et && et.index !== void 0 && (tt || et.index > lt) && et.graphic && et.graphic.element);
                }) || null;
              })(z), G = F && F.graphic, U = G ? G.parentGroup : R.graph || R.group, ct = F ? { x: ee(z.plotX, F.plotX, 0), y: ee(z.plotY, F.plotY, 0) } : { x: ee(z.plotX, 0), y: ee(z.plotY, 0) }, nt = (function(rt, lt) {
                let tt = rt.series.chart.renderer.rect(lt.x, lt.y, 1, 1);
                return tt.attr({ class: "highcharts-a11y-mock-point", fill: "none", opacity: 0, "fill-opacity": 0, "stroke-opacity": 0 }), tt;
              })(z, ct);
              if (U && U.element) return z.graphic = nt, z.hasMockGraphic = !0, nt.add(U), U.element.insertBefore(nt.element, G ? G.element : null), nt.element;
            })(E), B = E.options && E.options.accessibility && E.options.accessibility.enabled === !1;
            if (P) {
              if (E.isNull && !T) return void P.setAttribute("aria-hidden", !0);
              if (P.setAttribute("tabindex", "-1"), u.chart.styledMode || (P.style.outline = "none"), A && !B) {
                let z = E.series, R = z.options.accessibility?.point || {}, F = z.chart.options.accessibility.point || {}, G = jo(Vo(R.descriptionFormat) && vs(R.descriptionFormat, E, z.chart) || R.descriptionFormatter?.(E) || Vo(F.descriptionFormat) && vs(F.descriptionFormat, E, z.chart) || F.descriptionFormatter?.(E) || Zo(E), z.chart.renderer.forExport);
                P.setAttribute("role", "img"), P.setAttribute("aria-label", G);
              } else P.setAttribute("aria-hidden", !0);
            }
          }), Yo(a, g), (function(E) {
            let P = E.chart, B = P.options.chart, z = B.options3d && B.options3d.enabled, R = P.series.length > 1, F = P.options.accessibility.series.describeSingleSeries, G = (E.options.accessibility || {}).exposeAsGroupOnly;
            return !(z && R) && (R || F || G || qo(E));
          })(u)) {
            let E = u.options.accessibility || {}, P = u.chart.options.accessibility, B = P.landmarkVerbosity;
            E.exposeAsGroupOnly ? g.setAttribute("role", "img") : B === "all" ? g.setAttribute("role", "region") : g.setAttribute("role", "group"), g.setAttribute("tabindex", "-1"), u.chart.styledMode || (g.style.outline = "none"), g.setAttribute("aria-label", jo(P.series.descriptionFormatter && P.series.descriptionFormatter(u) || _o(u), u.chart.renderer.forExport));
          } else g.removeAttribute("aria-label");
        }
      } }, { composed: Ar } = K(), { addEvent: Jo, defined: Xi, pushUnique: Tr } = K(), { getChartTitle: Ia } = Xt, { defaultPointDescriptionFormatter: Qo, defaultSeriesDescriptionFormatter: Gi } = hi;
      function Sr(u) {
        return !!u.options.accessibility.announceNewData.enabled;
      }
      class di {
        constructor(a) {
          this.dirty = { allSeries: {} }, this.lastAnnouncementTime = 0, this.chart = a;
        }
        init() {
          let a = this.chart, p = a.options.accessibility.announceNewData.interruptUser ? "assertive" : "polite";
          this.lastAnnouncementTime = 0, this.dirty = { allSeries: {} }, this.eventProvider = new $(), this.announcer = new At(a, p), this.addEventListeners();
        }
        destroy() {
          this.eventProvider.removeAddedEvents(), this.announcer.destroy();
        }
        addEventListeners() {
          let a = this, p = this.chart, g = this.eventProvider;
          g.addEvent(p, "afterApplyDrilldown", function() {
            a.lastAnnouncementTime = 0;
          }), g.addEvent(p, "afterAddSeries", function(y) {
            a.onSeriesAdded(y.series);
          }), g.addEvent(p, "redraw", function() {
            a.announceDirtyData();
          });
        }
        onSeriesAdded(a) {
          Sr(this.chart) && (this.dirty.hasDirty = !0, this.dirty.allSeries[a.name + a.index] = a, this.dirty.newSeries = Xi(this.dirty.newSeries) ? void 0 : a);
        }
        announceDirtyData() {
          let a = this.chart, p = this;
          if (a.options.accessibility.announceNewData && this.dirty.hasDirty) {
            let g = this.dirty.newPoint;
            g && (g = (function(y) {
              let A = y.series.data.filter((w) => y.x === w.x && y.y === w.y);
              return A.length === 1 ? A[0] : y;
            })(g)), this.queueAnnouncement(Object.keys(this.dirty.allSeries).map((y) => p.dirty.allSeries[y]), this.dirty.newSeries, g), this.dirty = { allSeries: {} };
          }
        }
        queueAnnouncement(a, p, g) {
          let y = this.chart.options.accessibility.announceNewData;
          if (y.enabled) {
            let A = +/* @__PURE__ */ new Date(), w = A - this.lastAnnouncementTime, T = Math.max(0, y.minAnnounceInterval - w), E = (function(B, z) {
              let R = (B || []).concat(z || []).reduce((F, G) => (F[G.name + G.index] = G, F), {});
              return Object.keys(R).map((F) => R[F]);
            })(this.queuedAnnouncement && this.queuedAnnouncement.series, a), P = this.buildAnnouncementMessage(E, p, g);
            P && (this.queuedAnnouncement && clearTimeout(this.queuedAnnouncementTimer), this.queuedAnnouncement = { time: A, message: P, series: E }, this.queuedAnnouncementTimer = setTimeout(() => {
              this && this.announcer && (this.lastAnnouncementTime = +/* @__PURE__ */ new Date(), this.announcer.announce(this.queuedAnnouncement.message), delete this.queuedAnnouncement, delete this.queuedAnnouncementTimer);
            }, T));
          }
        }
        buildAnnouncementMessage(a, p, g) {
          let y = this.chart, A = y.options.accessibility.announceNewData;
          if (A.announcementFormatter) {
            let P = A.announcementFormatter(a, p, g);
            if (P !== !1) return P.length ? P : null;
          }
          let w = K().charts && K().charts.length > 1 ? "Multiple" : "Single", T = p ? "newSeriesAnnounce" + w : g ? "newPointAnnounce" + w : "newDataAnnounce", E = Ia(y);
          return y.langFormat("accessibility.announceNewData." + T, { chartTitle: E, seriesDesc: p ? Gi(p) : null, pointDesc: g ? Qo(g) : null, point: g, series: p });
        }
      }
      (function(u) {
        function a(g) {
          let y = this.chart, A = y.accessibility?.components.series.newDataAnnouncer;
          A && A.chart === y && Sr(y) && (A.dirty.newPoint = Xi(A.dirty.newPoint) ? void 0 : g.point);
        }
        function p() {
          let g = this.chart, y = g.accessibility?.components.series.newDataAnnouncer;
          y && y.chart === g && Sr(g) && (y.dirty.hasDirty = !0, y.dirty.allSeries[this.name + this.index] = this);
        }
        u.compose = function(g) {
          Tr(Ar, "A11y.NDA") && (Jo(g, "addPoint", a), Jo(g, "updatedData", p));
        };
      })(di || (di = {}));
      let Cr = di, { doc: Er, win: me } = K(), { attr: ci, css: tn, merge: en } = K(), { fireEventOnWrappedOrUnwrappedElement: sn } = Xt, { cloneMouseEvent: Pr, cloneTouchEvent: Ba, getFakeMouseEvent: Na, removeElement: rn } = Ot, Ra = class {
        constructor(u, a, p = "button", g, y) {
          this.chart = u, this.target = a, this.eventProvider = new $();
          let A = this.innerElement = Er.createElement(p), w = this.element = g ? Er.createElement(g) : A;
          u.styledMode || this.hideElementVisually(A), g && (g !== "li" || u.styledMode || (w.style.listStyle = "none"), w.appendChild(A), this.element = w), this.updateTarget(a, y);
        }
        click() {
          let u = this.getTargetPosition();
          u.x += u.width / 2, u.y += u.height / 2;
          let a = Na("click", u);
          sn(this.target.click, a);
        }
        updateTarget(u, a) {
          this.target = u, this.updateCSSClassName();
          let p = a || {};
          Object.keys(p).forEach((y) => {
            p[y] === null && delete p[y];
          });
          let g = this.getTargetAttr(u.click, "aria-label");
          ci(this.innerElement, en(g ? { "aria-label": g } : {}, p)), this.eventProvider.removeAddedEvents(), this.addProxyEventsToElement(this.innerElement, u.click), this.refreshPosition();
        }
        refreshPosition() {
          let u = this.getTargetPosition();
          tn(this.innerElement, { width: (u.width || 1) + "px", height: (u.height || 1) + "px", left: (Math.round(u.x) || 0) + "px", top: (Math.round(u.y) || 0) + "px" });
        }
        remove() {
          this.eventProvider.removeAddedEvents(), rn(this.element);
        }
        updateCSSClassName() {
          let u = (A) => A.indexOf("highcharts-no-tooltip") > -1, a = this.chart.legend, p = a.group && a.group.div, g = u(p && p.className || ""), y = u(this.getTargetAttr(this.target.click, "class") || "");
          this.innerElement.className = g || y ? "highcharts-a11y-proxy-element highcharts-no-tooltip" : "highcharts-a11y-proxy-element";
        }
        addProxyEventsToElement(u, a) {
          ["click", "touchstart", "touchend", "touchcancel", "touchmove", "mouseover", "mouseenter", "mouseleave", "mouseout"].forEach((p) => {
            let g = p.indexOf("touch") === 0;
            this.eventProvider.addEvent(u, p, (y) => {
              let A = g ? Ba(y) : Pr(y);
              a && sn(a, A), y.stopPropagation(), g || y.preventDefault();
            }, { passive: !1 });
          });
        }
        hideElementVisually(u) {
          tn(u, { borderWidth: 0, backgroundColor: "transparent", cursor: "pointer", outline: "none", opacity: 1e-3, filter: "alpha(opacity=1)", zIndex: 999, overflow: "hidden", padding: 0, margin: 0, display: "block", position: "absolute", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)" });
        }
        getTargetPosition() {
          let u = this.target.click, a = u.element ? u.element : u, p = this.target.visual || a, g = this.chart.renderTo, y = this.chart.pointer;
          if (g && p?.getBoundingClientRect && y) {
            let A = me.scrollY || Er.documentElement.scrollTop, w = p.getBoundingClientRect(), T = y.getChartPosition();
            return { x: (w.left - T.left) / T.scaleX, y: (w.top + A - T.top) / T.scaleY, width: w.right / T.scaleX - w.left / T.scaleX, height: w.bottom / T.scaleY - w.top / T.scaleY };
          }
          return { x: 0, y: 0, width: 1, height: 1 };
        }
        getTargetAttr(u, a) {
          return u.element ? u.element.getAttribute(a) : u.getAttribute(a);
        }
      }, { doc: Or } = K(), { attr: Ut, css: yt } = K(), { unhideChartElementFromAT: on } = Xt, { removeChildNodes: Lr } = Ot, Dr = class {
        constructor(u) {
          this.chart = u, this.domElementProvider = new ss(), this.groups = {}, this.groupOrder = [], this.beforeChartProxyPosContainer = this.createProxyPosContainer("before"), this.afterChartProxyPosContainer = this.createProxyPosContainer("after"), this.update();
        }
        addProxyElement(u, a, p = "button", g) {
          let y = this.groups[u];
          if (!y) throw Error("ProxyProvider.addProxyElement: Invalid group key " + u);
          let A = y.type === "ul" || y.type === "ol" ? "li" : void 0, w = new Ra(this.chart, a, p, A, g);
          return y.proxyContainerElement.appendChild(w.element), y.proxyElements.push(w), w;
        }
        addGroup(u, a = "div", p) {
          let g, y = this.groups[u];
          if (y) return y.groupElement;
          let A = this.domElementProvider.createElement(a);
          return p && p.role && a !== "div" ? (g = this.domElementProvider.createElement("div")).appendChild(A) : g = A, g.className = "highcharts-a11y-proxy-group highcharts-a11y-proxy-group-" + u.replace(/\W/g, "-"), this.groups[u] = { proxyContainerElement: A, groupElement: g, type: a, proxyElements: [] }, Ut(g, p || {}), a === "ul" && A.setAttribute("role", "list"), this.afterChartProxyPosContainer.appendChild(g), this.updateGroupOrder(this.groupOrder), g;
        }
        updateGroupAttrs(u, a) {
          let p = this.groups[u];
          if (!p) throw Error("ProxyProvider.updateGroupAttrs: Invalid group key " + u);
          Ut(p.groupElement, a);
        }
        updateGroupOrder(u) {
          if (this.groupOrder = u.slice(), this.isDOMOrderGroupOrder()) return;
          let a = u.indexOf("series"), p = a > -1 ? u.slice(0, a) : u, g = a > -1 ? u.slice(a + 1) : [], y = Or.activeElement;
          ["before", "after"].forEach((A) => {
            let w = this[A === "before" ? "beforeChartProxyPosContainer" : "afterChartProxyPosContainer"];
            Lr(w), (A === "before" ? p : g).forEach((T) => {
              let E = this.groups[T];
              E && w.appendChild(E.groupElement);
            });
          }), (this.beforeChartProxyPosContainer.contains(y) || this.afterChartProxyPosContainer.contains(y)) && y && y.focus && y.focus();
        }
        clearGroup(u) {
          let a = this.groups[u];
          if (!a) throw Error("ProxyProvider.clearGroup: Invalid group key " + u);
          Lr(a.proxyContainerElement);
        }
        removeGroup(u) {
          let a = this.groups[u];
          a && (this.domElementProvider.removeElement(a.groupElement), a.groupElement !== a.proxyContainerElement && this.domElementProvider.removeElement(a.proxyContainerElement), delete this.groups[u]);
        }
        update() {
          this.updatePosContainerPositions(), this.updateGroupOrder(this.groupOrder), this.updateProxyElementPositions();
        }
        updateProxyElementPositions() {
          Object.keys(this.groups).forEach(this.updateGroupProxyElementPositions.bind(this));
        }
        updateGroupProxyElementPositions(u) {
          let a = this.groups[u];
          a && a.proxyElements.forEach((p) => p.refreshPosition());
        }
        destroy() {
          this.domElementProvider.destroyCreatedElements();
        }
        createProxyPosContainer(u) {
          let a = this.domElementProvider.createElement("div");
          return a.setAttribute("aria-hidden", "false"), a.className = "highcharts-a11y-proxy-container" + (u ? "-" + u : ""), yt(a, { top: "0", left: "0" }), this.chart.styledMode || (a.style.whiteSpace = "nowrap", a.style.position = "absolute"), a;
        }
        getCurrentGroupOrderInDOM() {
          let u = (y) => {
            let A = Object.keys(this.groups), w = A.length;
            for (; w--; ) {
              let T = A[w], E = this.groups[T];
              if (E && y === E.groupElement) return T;
            }
          }, a = (y) => {
            let A = [], w = y.children;
            for (let T = 0; T < w.length; ++T) {
              let E = u(w[T]);
              E && A.push(E);
            }
            return A;
          }, p = a(this.beforeChartProxyPosContainer), g = a(this.afterChartProxyPosContainer);
          return p.push("series"), p.concat(g);
        }
        isDOMOrderGroupOrder() {
          let u = this.getCurrentGroupOrderInDOM(), a = this.groupOrder.filter((g) => g === "series" || !!this.groups[g]), p = u.length;
          if (p !== a.length) return !1;
          for (; p--; ) if (u[p] !== a[p]) return !1;
          return !0;
        }
        updatePosContainerPositions() {
          let u = this.chart;
          if (u.renderer.forExport) return;
          let a = u.renderer.box;
          u.container.insertBefore(this.afterChartProxyPosContainer, a.nextSibling), u.container.insertBefore(this.beforeChartProxyPosContainer, a), on(this.chart, this.afterChartProxyPosContainer), on(this.chart, this.beforeChartProxyPosContainer);
        }
      }, { unhideChartElementFromAT: pi, getAxisRangeDescription: Tt } = Xt, { addEvent: Yi, attr: nn } = K();
      class ks extends ce {
        init() {
          let a = this.chart;
          this.announcer = new At(a, "polite");
        }
        onChartUpdate() {
          let a = this.chart, p = this, g = a.rangeSelector;
          g && (this.updateSelectorVisibility(), this.setDropdownAttrs(), g.buttons && g.buttons.length && g.buttons.forEach((y) => {
            p.setRangeButtonAttrs(y);
          }), g.maxInput && g.minInput && ["minInput", "maxInput"].forEach(function(y, A) {
            let w = g[y];
            w && (pi(a, w), p.setRangeInputAttrs(w, "accessibility.rangeSelector." + (A ? "max" : "min") + "InputLabel"));
          }));
        }
        updateSelectorVisibility() {
          let a = this.chart, p = a.rangeSelector, g = p && p.dropdown, y = p && p.buttons || [], A = (w) => w.setAttribute("aria-hidden", !0);
          p && p.hasVisibleDropdown && g ? (pi(a, g), y.forEach((w) => A(w.element))) : (g && A(g), y.forEach((w) => pi(a, w.element)));
        }
        setDropdownAttrs() {
          let a = this.chart, p = a.rangeSelector && a.rangeSelector.dropdown;
          if (p) {
            let g = a.langFormat("accessibility.rangeSelector.dropdownLabel", { rangeTitle: a.options.lang.rangeSelectorZoom });
            p.setAttribute("aria-label", g), p.setAttribute("tabindex", -1);
          }
        }
        setRangeButtonAttrs(a) {
          nn(a.element, { tabindex: -1, role: "button" });
        }
        setRangeInputAttrs(a, p) {
          let g = this.chart;
          nn(a, { tabindex: -1, "aria-label": g.langFormat(p, { chart: g }) });
        }
        onButtonNavKbdArrowKey(a, p) {
          let g = a.response, y = this.keyCodes, A = this.chart, w = A.options.accessibility.keyboardNavigation.wrapAround, T = p === y.left || p === y.up ? -1 : 1;
          return A.highlightRangeSelectorButton(A.highlightedRangeSelectorItemIx + T) ? g.success : w ? (a.init(T), g.success) : g[T > 0 ? "next" : "prev"];
        }
        onButtonNavKbdClick(a) {
          let p = a.response, g = this.chart;
          return g.oldRangeSelectorItemState !== 3 && this.fakeClickEvent(g.rangeSelector.buttons[g.highlightedRangeSelectorItemIx].element), p.success;
        }
        onAfterBtnClick() {
          let a = this.chart, p = Tt(a.xAxis[0]), g = a.langFormat("accessibility.rangeSelector.clickButtonAnnouncement", { chart: a, axisRangeDescription: p });
          g && this.announcer.announce(g);
        }
        onInputKbdMove(a) {
          let p = this.chart, g = p.rangeSelector, y = p.highlightedInputRangeIx = (p.highlightedInputRangeIx || 0) + a;
          if (y > 1 || y < 0) {
            if (p.accessibility) return p.accessibility.keyboardNavigation.exiting = !0, p.accessibility.keyboardNavigation.tabindexContainer.focus(), p.accessibility.keyboardNavigation.move(a);
          } else if (g) {
            let A = g[y ? "maxDateBox" : "minDateBox"], w = g[y ? "maxInput" : "minInput"];
            A && w && p.setFocusToElement(A, w);
          }
          return !0;
        }
        onInputNavInit(a) {
          let p = this, g = this.chart, y = a > 0 ? 0 : 1, A = g.rangeSelector, w = A && A[y ? "maxDateBox" : "minDateBox"], T = A && A.minInput, E = A && A.maxInput;
          if (g.highlightedInputRangeIx = y, w && T && E) {
            g.setFocusToElement(w, y ? E : T), this.removeInputKeydownHandler && this.removeInputKeydownHandler();
            let P = (R) => {
              (R.which || R.keyCode) === this.keyCodes.tab && p.onInputKbdMove(R.shiftKey ? -1 : 1) && (R.preventDefault(), R.stopPropagation());
            }, B = Yi(T, "keydown", P), z = Yi(E, "keydown", P);
            this.removeInputKeydownHandler = () => {
              B(), z();
            };
          }
        }
        onInputNavTerminate() {
          let a = this.chart.rangeSelector || {};
          a.maxInput && a.hideInput("max"), a.minInput && a.hideInput("min"), this.removeInputKeydownHandler && (this.removeInputKeydownHandler(), delete this.removeInputKeydownHandler);
        }
        initDropdownNav() {
          let a = this.chart, p = a.rangeSelector, g = p && p.dropdown;
          p && g && (a.setFocusToElement(p.buttonGroup, g), this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeDropdownKeydownHandler = Yi(g, "keydown", (y) => {
            let A = (y.which || y.keyCode) === this.keyCodes.tab, w = a.accessibility;
            A && (y.preventDefault(), y.stopPropagation(), w && w.keyboardNavigation.move(y.shiftKey ? -1 : 1));
          }));
        }
        getRangeSelectorButtonNavigation() {
          let a = this.chart, p = this.keyCodes, g = this;
          return new te(a, { keyCodeMap: [[[p.left, p.right, p.up, p.down], function(y) {
            return g.onButtonNavKbdArrowKey(this, y);
          }], [[p.enter, p.space], function() {
            return g.onButtonNavKbdClick(this);
          }]], validate: function() {
            return !!(a.rangeSelector && a.rangeSelector.buttons && a.rangeSelector.buttons.length);
          }, init: function(y) {
            let A = a.rangeSelector;
            if (A && A.hasVisibleDropdown) g.initDropdownNav();
            else if (A) {
              let w = A.buttons.length - 1;
              a.highlightRangeSelectorButton(y > 0 ? 0 : w);
            }
          }, terminate: function() {
            g.removeDropdownKeydownHandler && (g.removeDropdownKeydownHandler(), delete g.removeDropdownKeydownHandler);
          } });
        }
        getRangeSelectorInputNavigation() {
          let a = this.chart, p = this;
          return new te(a, { keyCodeMap: [], validate: function() {
            return !!(a.rangeSelector && a.rangeSelector.inputGroup && a.rangeSelector.inputGroup.element.style.visibility !== "hidden" && a.options.rangeSelector.inputEnabled !== !1 && a.rangeSelector.minInput && a.rangeSelector.maxInput);
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
        function a(g) {
          let y = this.rangeSelector && this.rangeSelector.buttons || [], A = this.highlightedRangeSelectorItemIx, w = this.rangeSelector && this.rangeSelector.selected;
          return A !== void 0 && y[A] && A !== w && y[A].setState(this.oldRangeSelectorItemState || 0), this.highlightedRangeSelectorItemIx = g, !!y[g] && (this.setFocusToElement(y[g].box, y[g].element), g !== w && (this.oldRangeSelectorItemState = y[g].state, y[g].setState(1)), !0);
        }
        function p() {
          let g = this.chart.accessibility;
          if (g && g.components.rangeSelector) return g.components.rangeSelector.onAfterBtnClick();
        }
        u.compose = function(g, y) {
          let A = g.prototype;
          A.highlightRangeSelectorButton || (A.highlightRangeSelectorButton = a, Yi(y, "afterBtnClick", p));
        };
      })(ks || (ks = {}));
      let Q = ks, { composed: an } = K(), { addEvent: Je, merge: Ms, pushUnique: As } = K();
      (function(u) {
        function a(E) {
          Ms(!0, E, { marker: { enabled: !0, states: { normal: { opacity: 0 } } } });
        }
        function p(E) {
          return E.marker.states && E.marker.states.normal && E.marker.states.normal.opacity;
        }
        function g(E) {
          return !!(E._hasPointMarkers && E.points && E.points.length);
        }
        function y() {
          this.chart.styledMode && (this.markerGroup && this.markerGroup[this.a11yMarkersForced ? "addClass" : "removeClass"]("highcharts-a11y-markers-hidden"), g(this) && this.points.forEach((E) => {
            E.graphic && (E.graphic[E.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-hidden"), E.graphic[E.hasForcedA11yMarker === !1 ? "addClass" : "removeClass"]("highcharts-a11y-marker-visible"));
          }));
        }
        function A(E) {
          this.resetA11yMarkerOptions = Ms(E.options.marker || {}, this.userOptions.marker || {});
        }
        function w() {
          let E = this.options;
          (function(P) {
            let B = P.chart.options.accessibility.enabled, z = (P.options.accessibility && P.options.accessibility.enabled) !== !1;
            return B && z && (function(R) {
              let F = R.chart.options.accessibility;
              return R.points.length < F.series.pointDescriptionEnabledThreshold || F.series.pointDescriptionEnabledThreshold === !1;
            })(P);
          })(this) ? (E.marker && E.marker.enabled === !1 && (this.a11yMarkersForced = !0, a(this.options)), g(this) && (function(P) {
            let B = P.points.length;
            for (; B--; ) {
              let R = P.points[B], F = R.options, G = R.hasForcedA11yMarker;
              if (delete R.hasForcedA11yMarker, F.marker) {
                var z;
                let U = G && p(F) === 0;
                F.marker.enabled && !U ? (Ms(!0, (z = F).marker, { states: { normal: { opacity: p(z) || 1 } } }), R.hasForcedA11yMarker = !1) : F.marker.enabled === !1 && (a(F), R.hasForcedA11yMarker = !0);
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
        function T() {
          this.boosted && this.a11yMarkersForced && (Ms(!0, this.options, { marker: { enabled: !1 } }), delete this.a11yMarkersForced);
        }
        u.compose = function(E) {
          As(an, "A11y.FM") && (Je(E, "afterSetOptions", A), Je(E, "render", w), Je(E, "afterRender", y), Je(E, "renderCanvas", T));
        };
      })(Ci || (Ci = {}));
      let ot = Ci;
      var Ts = gt(260), za = gt.n(Ts), Fa = gt(820), Ha = gt.n(Fa);
      let { seriesTypes: Ir } = Lo(), { doc: ui } = K(), { defined: Ce, fireEvent: Wa } = K(), { getPointFromXY: Xa, getSeriesFromName: Ss, scrollAxisToPoint: Ga } = Xt;
      function Br(u) {
        let a = u.index, p = u.series.points, g = p.length;
        if (p[a] === u) return a;
        for (; g--; ) if (p[g] === u) return g;
      }
      function ji(u) {
        let a = u.chart.options.accessibility.keyboardNavigation.seriesNavigation, p = u.options.accessibility || {}, g = p.keyboardNavigation;
        return g && g.enabled === !1 || p.enabled === !1 || u.options.enableMouseTracking === !1 || !u.visible || a.pointNavigationEnabledThreshold && +a.pointNavigationEnabledThreshold <= u.points.length;
      }
      function Ui(u) {
        let a = u.series, p = a.options.nullInteraction, g = u.options.accessibility, y = a.chart.options.accessibility, A = g?.enabled === !1;
        return y.keyboardNavigation.seriesNavigation.skipNullPoints ?? (!(!u.isNull || p) && u.visible === !1 || u.isInside === !1 || A || ji(a));
      }
      function Cs(u) {
        let a = u.series || [], p = a.length;
        for (let g = 0; g < p; ++g) if (!ji(a[g])) {
          let y = (function(A) {
            let w = A.points || [], T = w.length;
            for (let E = 0; E < T; ++E) if (!Ui(w[E])) return w[E];
            return null;
          })(a[g]);
          if (y) return y;
        }
        return null;
      }
      function ln(u) {
        let a = u.series.length, p = !1;
        for (; a-- && (u.highlightedPoint = u.series[a].points[u.series[a].points.length - 1], !(p = u.series[a].highlightNextValidPoint())); ) ;
        return p;
      }
      function Nr(u) {
        delete u.highlightedPoint;
        let a = Cs(u);
        return !!a && a.highlight();
      }
      class Es {
        constructor(a, p) {
          this.keyCodes = p, this.chart = a;
        }
        init() {
          let a = this, p = this.chart, g = this.eventProvider = new $();
          g.addEvent(Ha(), "destroy", function() {
            return a.onSeriesDestroy(this);
          }), g.addEvent(p, "afterApplyDrilldown", function() {
            let y = Cs(this);
            y && y.highlight(!1);
          }), g.addEvent(p, "drilldown", function(y) {
            let A = y.point, w = A.series;
            a.lastDrilledDownPoint = { x: A.x, y: A.y, seriesName: w ? w.name : "" };
          }), g.addEvent(p, "drillupall", function() {
            setTimeout(function() {
              a.onDrillupAll();
            }, 10);
          }), g.addEvent(za(), "afterSetState", function() {
            let y = this.graphic && this.graphic.element, A = ui.activeElement, w = A && A.getAttribute("class"), T = w && w.indexOf("highcharts-a11y-proxy-element") > -1;
            p.highlightedPoint === this && A !== y && !T && y && y.focus && y.focus();
          });
        }
        onDrillupAll() {
          let a, p = this.lastDrilledDownPoint, g = this.chart, y = p && Ss(g, p.seriesName);
          p && y && Ce(p.x) && Ce(p.y) && (a = Xa(y, p.x, p.y)), a = a || Cs(g), g.container && g.container.focus(), a && a.highlight && a.highlight(!1);
        }
        getKeyboardNavigationHandler() {
          let a = this, p = this.keyCodes, g = this.chart, y = g.inverted;
          return new te(g, { keyCodeMap: [[y ? [p.up, p.down] : [p.left, p.right], function(A) {
            return a.onKbdSideways(this, A);
          }], [y ? [p.left, p.right] : [p.up, p.down], function(A) {
            return a.onKbdVertical(this, A);
          }], [[p.enter, p.space], function(A, w) {
            let T = g.highlightedPoint;
            if (T) {
              let { plotLeft: E, plotTop: P } = this.chart, { plotX: B = 0, plotY: z = 0 } = T;
              w = { ...w, chartX: E + B, chartY: P + z, point: T, target: T.graphic?.element || w.target }, Wa(T.series, "click", w), T.firePointEvent("click", w);
            }
            return this.response.success;
          }], [[p.home], function() {
            return Nr(g), this.response.success;
          }], [[p.end], function() {
            return ln(g), this.response.success;
          }], [[p.pageDown, p.pageUp], function(A) {
            return g.highlightAdjacentSeries(A === p.pageDown), this.response.success;
          }]], init: function() {
            return a.onHandlerInit(this);
          }, validate: function() {
            return !!Cs(g);
          }, terminate: function() {
            return a.onHandlerTerminate();
          } });
        }
        onKbdSideways(a, p) {
          let g = this.keyCodes, y = p === g.right || p === g.down;
          return this.attemptHighlightAdjacentPoint(a, y);
        }
        onHandlerInit(a) {
          let p = this.chart;
          return p.options.accessibility.keyboardNavigation.seriesNavigation.rememberPointFocus && p.highlightedPoint ? p.highlightedPoint.highlight() : Nr(p), a.response.success;
        }
        onKbdVertical(a, p) {
          let g = this.chart, y = this.keyCodes, A = p === y.down || p === y.right, w = g.options.accessibility.keyboardNavigation.seriesNavigation;
          if (w.mode && w.mode === "serialize") return this.attemptHighlightAdjacentPoint(a, A);
          let T = g.highlightedPoint && g.highlightedPoint.series.keyboardMoveVertical ? "highlightAdjacentPointVertical" : "highlightAdjacentSeries";
          return g[T](A), a.response.success;
        }
        onHandlerTerminate() {
          let a = this.chart, p = a.options.accessibility.keyboardNavigation;
          a.tooltip && a.tooltip.hide(0);
          let g = a.highlightedPoint && a.highlightedPoint.series;
          g && g.onMouseOut && g.onMouseOut(), a.highlightedPoint && a.highlightedPoint.onMouseOut && a.highlightedPoint.onMouseOut(), p.seriesNavigation.rememberPointFocus || delete a.highlightedPoint;
        }
        attemptHighlightAdjacentPoint(a, p) {
          let g = this.chart, y = g.options.accessibility.keyboardNavigation.wrapAround;
          return g.highlightAdjacentPoint(p) || y && (p ? Nr(g) : ln(g)) ? a.response.success : a.response[p ? "next" : "prev"];
        }
        onSeriesDestroy(a) {
          let p = this.chart;
          p.highlightedPoint && p.highlightedPoint.series === a && (delete p.highlightedPoint, p.focusElement && p.focusElement.removeFocusBorder());
        }
        destroy() {
          this.eventProvider.removeAddedEvents();
        }
      }
      (function(u) {
        function a(w) {
          let T, E, P = this.series, B = this.highlightedPoint, z = B && Br(B) || 0, R = B && B.series.points || [], F = this.series && this.series[this.series.length - 1], G = F && F.points && F.points[F.points.length - 1];
          if (!P[0] || !P[0].points) return !1;
          if (B) {
            if (T = P[B.series.index + (w ? 1 : -1)], (E = R[z + (w ? 1 : -1)]) || !T || (E = T.points[w ? 0 : T.points.length - 1]), !E) return !1;
          } else E = w ? P[0].points[0] : G;
          return Ui(E) ? (ji(T = E.series) ? this.highlightedPoint = w ? T.points[T.points.length - 1] : T.points[0] : this.highlightedPoint = E, this.highlightAdjacentPoint(w)) : E.highlight();
        }
        function p(w) {
          let T = this.highlightedPoint, E = 1 / 0, P;
          return !!Ce(T.plotX) && !!Ce(T.plotY) && (this.series.forEach((B) => {
            ji(B) || B.points.forEach((z) => {
              if (!Ce(z.plotY) || !Ce(z.plotX) || z === T) return;
              let R = z.plotY - T.plotY, F = Math.abs(z.plotX - T.plotX), G = Math.abs(R) * Math.abs(R) + F * F * 4;
              B.yAxis && B.yAxis.reversed && (R *= -1), !(R <= 0 && w || R >= 0 && !w || G < 5 || Ui(z)) && G < E && (E = G, P = z);
            });
          }), !!P && P.highlight());
        }
        function g(w) {
          let T, E, P, B = this.highlightedPoint, z = this.series && this.series[this.series.length - 1], R = z && z.points && z.points[z.points.length - 1];
          return this.highlightedPoint ? !!(T = this.series[B.series.index + (w ? -1 : 1)]) && !!(E = (function(F, G, U, ct) {
            let nt = 1 / 0, rt, lt, tt, et = G.points.length, ft = (xt) => !(Ce(xt.plotX) && Ce(xt.plotY));
            if (!ft(F)) {
              for (; et--; ) !ft(rt = G.points[et]) && (tt = (F.plotX - rt.plotX) * (F.plotX - rt.plotX) * 4 + (F.plotY - rt.plotY) * (F.plotY - rt.plotY) * 1) < nt && (nt = tt, lt = et);
              return Ce(lt) ? G.points[lt] : void 0;
            }
          })(B, T)) && (ji(T) ? (E.highlight(), (P = this.highlightAdjacentSeries(w)) ? P : (B.highlight(), !1)) : (E.highlight(), E.series.highlightNextValidPoint())) : (T = w ? this.series && this.series[0] : z, !!(E = w ? T && T.points && T.points[0] : R) && E.highlight());
        }
        function y(w = !0) {
          let T = this.series.chart, E = T.tooltip?.label?.element;
          (!this.isNull || this.series.options?.nullInteraction) && w ? this.onMouseOver() : T.tooltip && T.tooltip.hide(0), Ga(this), this.graphic && (T.setFocusToElement(this.graphic), !w && T.focusElement && T.focusElement.removeFocusBorder()), T.highlightedPoint = this;
          let P = E?.getBoundingClientRect().top;
          if (E && P && P < 0) {
            let B = window.scrollY;
            window.scrollTo({ behavior: "smooth", top: B + P });
          }
          return this;
        }
        function A() {
          let w = this.chart.highlightedPoint, T = (w && w.series) === this ? Br(w) : 0, E = this.points, P = E.length;
          if (E && P) {
            for (let B = T; B < P; ++B) if (!Ui(E[B])) return E[B].highlight();
            for (let B = T; B >= 0; --B) if (!Ui(E[B])) return E[B].highlight();
          }
          return !1;
        }
        u.compose = function(w, T, E) {
          let P = w.prototype, B = T.prototype, z = E.prototype;
          P.highlightAdjacentPoint || (P.highlightAdjacentPoint = a, P.highlightAdjacentPointVertical = p, P.highlightAdjacentSeries = g, B.highlight = y, z.keyboardMoveVertical = !0, ["column", "gantt", "pie"].forEach((R) => {
            Ir[R] && (Ir[R].prototype.keyboardMoveVertical = !1);
          }), z.highlightNextValidPoint = A);
        };
      })(Es || (Es = {}));
      let hn = Es, { hideSeriesFromAT: Ya } = Xt, { describeSeries: dn } = hi, Rr = class extends ce {
        static compose(u, a, p) {
          Cr.compose(p), ot.compose(p), hn.compose(u, a, p);
        }
        init() {
          this.newDataAnnouncer = new Cr(this.chart), this.newDataAnnouncer.init(), this.keyboardNavigation = new hn(this.chart, this.keyCodes), this.keyboardNavigation.init(), this.hideTooltipFromATWhenShown(), this.hideSeriesLabelsFromATWhenShown();
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
            (u.options.accessibility && u.options.accessibility.enabled) !== !1 && u.visible && u.getPointsCollection().length !== 0 ? dn(u) : Ya(u);
          });
        }
        getKeyboardNavigation() {
          return this.keyboardNavigation.getKeyboardNavigationHandler();
        }
        destroy() {
          this.newDataAnnouncer.destroy(), this.keyboardNavigation.destroy();
        }
      }, { unhideChartElementFromAT: fe } = Xt, { getFakeMouseEvent: zr } = Ot, { attr: ja, pick: Ua } = K(), cn = class extends ce {
        constructor() {
          super(...arguments), this.focusedMapNavButtonIx = -1;
        }
        init() {
          let u = this, a = this.chart;
          this.proxyProvider.addGroup("zoom", "div"), ["afterShowResetZoom", "afterApplyDrilldown", "drillupall"].forEach((p) => {
            u.addEvent(a, p, function() {
              u.updateProxyOverlays();
            });
          });
        }
        onChartUpdate() {
          let u = this.chart, a = this;
          u.mapNavigation && u.mapNavigation.navButtons.forEach((p, g) => {
            fe(u, p.element), a.setMapNavButtonAttrs(p.element, "accessibility.zoom.mapZoom" + (g ? "Out" : "In"));
          });
        }
        setMapNavButtonAttrs(u, a) {
          let p = this.chart;
          ja(u, { tabindex: -1, role: "button", "aria-label": p.langFormat(a, { chart: p }) });
        }
        onChartRender() {
          this.updateProxyOverlays();
        }
        updateProxyOverlays() {
          let u = this.chart;
          if (this.proxyProvider.clearGroup("zoom"), u.resetZoomButton && this.createZoomProxyButton(u.resetZoomButton, "resetZoomProxyButton", u.langFormat("accessibility.zoom.resetZoomButton", { chart: u })), u.drillUpButton && u.breadcrumbs && u.breadcrumbs.list) {
            let a = u.breadcrumbs.list[u.breadcrumbs.list.length - 1];
            this.createZoomProxyButton(u.drillUpButton, "drillUpProxyButton", u.langFormat("accessibility.drillUpButton", { chart: u, buttonText: u.breadcrumbs.getButtonText(a) }));
          }
        }
        createZoomProxyButton(u, a, p) {
          this[a] = this.proxyProvider.addProxyElement("zoom", { click: u }, "button", { "aria-label": p, tabindex: -1 });
        }
        getMapZoomNavigation() {
          let u = this.keyCodes, a = this.chart, p = this;
          return new te(a, { keyCodeMap: [[[u.up, u.down, u.left, u.right], function(g) {
            return p.onMapKbdArrow(this, g);
          }], [[u.tab], function(g, y) {
            return p.onMapKbdTab(this, y);
          }], [[u.space, u.enter], function() {
            return p.onMapKbdClick(this);
          }]], validate: function() {
            return !!(a.mapView && a.mapNavigation && a.mapNavigation.navButtons.length);
          }, init: function(g) {
            return p.onMapNavInit(g);
          } });
        }
        onMapKbdArrow(u, a) {
          let p = this.chart, g = this.keyCodes, y = p.container, A = a === g.up || a === g.down, w = a === g.left || a === g.up ? 1 : -1, T = (A ? p.plotHeight : p.plotWidth) / 10 * w, E = 10 * Math.random(), P = { x: y.offsetLeft + p.plotLeft + p.plotWidth / 2 + E, y: y.offsetTop + p.plotTop + p.plotHeight / 2 + E }, B = A ? { x: P.x, y: P.y + T } : { x: P.x + T, y: P.y };
          return [zr("mousedown", P), zr("mousemove", B), zr("mouseup", B)].forEach((z) => y.dispatchEvent(z)), u.response.success;
        }
        onMapKbdTab(u, a) {
          let p = this.chart, g = u.response, y = a.shiftKey, A = y && !this.focusedMapNavButtonIx || !y && this.focusedMapNavButtonIx;
          if (p.mapNavigation.navButtons[this.focusedMapNavButtonIx].setState(0), A) return p.mapView && p.mapView.zoomBy(), g[y ? "prev" : "next"];
          this.focusedMapNavButtonIx += y ? -1 : 1;
          let w = p.mapNavigation.navButtons[this.focusedMapNavButtonIx];
          return p.setFocusToElement(w.box, w.element), w.setState(2), g.success;
        }
        onMapKbdClick(u) {
          let a = this.chart.mapNavigation.navButtons[this.focusedMapNavButtonIx].element;
          return this.fakeClickEvent(a), u.response.success;
        }
        onMapNavInit(u) {
          let a = this.chart, p = a.mapNavigation.navButtons[0], g = a.mapNavigation.navButtons[1], y = u > 0 ? p : g;
          a.setFocusToElement(y.box, y.element), y.setState(2), this.focusedMapNavButtonIx = u > 0 ? 0 : 1;
        }
        simpleButtonNavigation(u, a, p) {
          let g = this.keyCodes, y = this, A = this.chart;
          return new te(A, { keyCodeMap: [[[g.tab, g.up, g.down, g.left, g.right], function(w, T) {
            let E = w === g.tab && T.shiftKey || w === g.left || w === g.up;
            return this.response[E ? "prev" : "next"];
          }], [[g.space, g.enter], function() {
            return Ua(p(this, A), this.response.success);
          }]], validate: function() {
            return A[u] && A[u].box && y[a].innerElement;
          }, init: function() {
            A.setFocusToElement(A[u].box, y[a].innerElement);
          } });
        }
        getKeyboardNavigation() {
          return [this.simpleButtonNavigation("resetZoomButton", "resetZoomProxyButton", function(u, a) {
            a.zoomOut();
          }), this.simpleButtonNavigation("drillUpButton", "drillUpProxyButton", function(u, a) {
            return a.drillUp(), u.response.prev;
          }), this.getMapZoomNavigation()];
        }
      }, { doc: Fr, isMS: Va, win: Qe } = K(), pn = { isHighContrastModeActive: function() {
        if (Va && Qe.getComputedStyle) {
          let u = Fr.createElement("div");
          u.style.backgroundImage = "url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)", Fr.body.appendChild(u);
          let a = (u.currentStyle || Qe.getComputedStyle(u)).backgroundImage;
          return Fr.body.removeChild(u), a === "none";
        }
        return Qe.matchMedia && Qe.matchMedia("(forced-colors: active)").matches;
      }, setHighContrastTheme: function(u) {
        u.highContrastModeActive = !0;
        let a = u.options.accessibility.highContrastTheme;
        u.update(a, !1);
        let p = a.colors?.length > 1;
        u.series.forEach(function(g) {
          let y = a.plotOptions[g.type] || {}, A = p && g.colorIndex !== void 0 ? a.colors[g.colorIndex] : y.color || "window", w = { color: y.color || "windowText", colors: p ? a.colors : [y.color || "windowText"], borderColor: y.borderColor || "window", fillColor: A };
          g.update(w, !1), g.points && g.points.forEach(function(T) {
            T.options && T.options.color && T.update({ color: y.color || "windowText", borderColor: y.borderColor || "window" }, !1);
          });
        }), u.redraw();
      } }, un = { chart: { backgroundColor: "window" }, title: { style: { color: "windowText" } }, subtitle: { style: { color: "windowText" } }, colorAxis: { minColor: "windowText", maxColor: "windowText", stops: [], dataClasses: [] }, colors: ["windowText"], xAxis: { gridLineColor: "windowText", labels: { style: { color: "windowText" } }, lineColor: "windowText", minorGridLineColor: "windowText", tickColor: "windowText", title: { style: { color: "windowText" } } }, yAxis: { gridLineColor: "windowText", labels: { style: { color: "windowText" } }, lineColor: "windowText", minorGridLineColor: "windowText", tickColor: "windowText", title: { style: { color: "windowText" } } }, tooltip: { backgroundColor: "window", borderColor: "windowText", style: { color: "windowText" } }, plotOptions: { series: { lineColor: "windowText", fillColor: "window", borderColor: "windowText", edgeColor: "windowText", borderWidth: 1, dataLabels: { connectorColor: "windowText", color: "windowText", style: { color: "windowText", textOutline: "none" } }, marker: { lineColor: "windowText", fillColor: "windowText" } }, pie: { color: "window", colors: ["window"], borderColor: "windowText", borderWidth: 1 }, boxplot: { fillColor: "window" }, candlestick: { lineColor: "windowText", fillColor: "window" }, errorbar: { fillColor: "window" } }, legend: { backgroundColor: "window", itemStyle: { color: "windowText" }, itemHoverStyle: { color: "windowText" }, itemHiddenStyle: { color: "#555" }, title: { style: { color: "windowText" } } }, credits: { style: { color: "windowText" } }, drilldown: { activeAxisLabelStyle: { color: "windowText" }, activeDataLabelStyle: { color: "windowText" } }, navigation: { buttonOptions: { symbolStroke: "windowText", theme: { fill: "window" } } }, rangeSelector: { buttonTheme: { fill: "window", stroke: "windowText", style: { color: "windowText" }, states: { hover: { fill: "window", stroke: "windowText", style: { color: "windowText" } }, select: { fill: "#444", stroke: "windowText", style: { color: "windowText" } } } }, inputBoxBorderColor: "windowText", inputStyle: { backgroundColor: "window", color: "windowText" }, labelStyle: { color: "windowText" } }, navigator: { handles: { backgroundColor: "window", borderColor: "windowText" }, outlineColor: "windowText", maskFill: "transparent", series: { color: "windowText", lineColor: "windowText" }, xAxis: { gridLineColor: "windowText" } }, scrollbar: { barBackgroundColor: "#444", barBorderColor: "windowText", buttonArrowColor: "windowText", buttonBackgroundColor: "window", buttonBorderColor: "windowText", rifleColor: "windowText", trackBackgroundColor: "window", trackBorderColor: "windowText" } }, { error: Ps, pick: qa } = K();
      function Hr(u, a, p) {
        let g = u, y, A = 0;
        for (; A < a.length - 1; ++A) g = g[y = a[A]] = qa(g[y], {});
        g[a[a.length - 1]] = p;
      }
      function Wr(u, a, p, g) {
        function y(T, E) {
          return E.reduce(function(P, B) {
            return P[B];
          }, T);
        }
        let A = y(u.options, a), w = y(u.options, p);
        Object.keys(g).forEach(function(T) {
          let E = A[T];
          E !== void 0 && (Hr(w, g[T], E), Ps(32, !1, u, { [a.join(".") + "." + T]: p.join(".") + "." + g[T].join(".") }));
        });
      }
      let Ka = function(u) {
        let a = u.options.chart, p = u.options.accessibility || {};
        ["description", "typeDescription"].forEach(function(g) {
          a[g] && (p[g] = a[g], Ps(32, !1, u, { [`chart.${g}`]: `use accessibility.${g}` }));
        }), u.axes.forEach(function(g) {
          let y = g.options;
          y && y.description && (y.accessibility = y.accessibility || {}, y.accessibility.description = y.description, Ps(32, !1, u, { "axis.description": "use axis.accessibility.description" }));
        }), u.series && (function(g) {
          let y = { description: ["accessibility", "description"], exposeElementToA11y: ["accessibility", "exposeAsGroupOnly"], pointDescriptionFormatter: ["accessibility", "point", "descriptionFormatter"], skipKeyboardNavigation: ["accessibility", "keyboardNavigation", "enabled"], "accessibility.pointDescriptionFormatter": ["accessibility", "point", "descriptionFormatter"] };
          g.series.forEach(function(A) {
            Object.keys(y).forEach(function(w) {
              let T = A.options[w];
              w === "accessibility.pointDescriptionFormatter" && (T = A.options.accessibility && A.options.accessibility.pointDescriptionFormatter), T !== void 0 && (Hr(A.options, y[w], w === "skipKeyboardNavigation" ? !T : T), Ps(32, !1, g, { [`series.${w}`]: "series." + y[w].join(".") }));
            });
          });
        })(u), Wr(u, ["accessibility"], ["accessibility"], { pointDateFormat: ["point", "dateFormat"], pointDateFormatter: ["point", "dateFormatter"], pointDescriptionFormatter: ["point", "descriptionFormatter"], pointDescriptionThreshold: ["series", "pointDescriptionEnabledThreshold"], pointNavigationThreshold: ["keyboardNavigation", "seriesNavigation", "pointNavigationEnabledThreshold"], pointValueDecimals: ["point", "valueDecimals"], pointValuePrefix: ["point", "valuePrefix"], pointValueSuffix: ["point", "valueSuffix"], screenReaderSectionFormatter: ["screenReaderSection", "beforeChartFormatter"], describeSingleSeries: ["series", "describeSingleSeries"], seriesDescriptionFormatter: ["series", "descriptionFormatter"], onTableAnchorClick: ["screenReaderSection", "onViewDataTableClick"], axisRangeDateFormat: ["screenReaderSection", "axisRangeDateFormat"] }), Wr(u, ["accessibility", "keyboardNavigation"], ["accessibility", "keyboardNavigation", "seriesNavigation"], { skipNullPoints: ["skipNullPoints"], mode: ["mode"] }), Wr(u, ["lang", "accessibility"], ["lang", "accessibility"], { legendItem: ["legend", "legendItem"], legendLabel: ["legend", "legendLabel"], mapZoomIn: ["zoom", "mapZoomIn"], mapZoomOut: ["zoom", "mapZoomOut"], resetZoomButton: ["zoom", "resetZoomButton"], screenReaderRegionLabel: ["screenReaderSection", "beforeRegionLabel"], rangeSelectorButton: ["rangeSelector", "buttonText"], rangeSelectorMaxInput: ["rangeSelector", "maxInputLabel"], rangeSelectorMinInput: ["rangeSelector", "minInputLabel"], svgContainerEnd: ["screenReaderSection", "endOfChartMarker"], viewAsDataTable: ["table", "viewAsDataTableButtonText"], tableSummary: ["table", "tableSummary"] });
      }, { defaultOptions: $a } = K(), { doc: gi } = K(), { addEvent: Ue, extend: Za, fireEvent: Xr, merge: Os } = K(), { removeElement: gn } = Ot;
      class Gr {
        constructor(a) {
          this.init(a);
        }
        init(a) {
          if (this.chart = a, !gi?.addEventListener) {
            this.zombie = !0, this.components = {}, a.renderTo.setAttribute("aria-hidden", !0);
            return;
          }
          Ka(a), this.proxyProvider = new Dr(this.chart), this.initComponents(), this.keyboardNavigation = new tr(a, this.components);
        }
        initComponents() {
          let a = this.chart, p = this.proxyProvider, g = a.options.accessibility;
          this.components = { container: new Wn(), infoRegions: new $n(), legend: new Ao(), chartMenu: new hs(), rangeSelector: new Q(), series: new Rr(), zoom: new cn(), navigator: new Ca() }, g.customComponents && Za(this.components, g.customComponents);
          let y = this.components;
          this.getComponentOrder().forEach(function(A) {
            y[A].initBase(a, p), y[A].init();
          });
        }
        getComponentOrder() {
          return this.components ? this.components.series ? ["series"].concat(Object.keys(this.components).filter((a) => a !== "series")) : Object.keys(this.components) : [];
        }
        update() {
          let a = this.components, p = this.chart, g = p.options.accessibility;
          Xr(p, "beforeA11yUpdate"), p.types = this.getChartTypes();
          let y = g.keyboardNavigation.order;
          this.proxyProvider.updateGroupOrder(y), this.getComponentOrder().forEach(function(A) {
            a[A].onChartUpdate(), Xr(p, "afterA11yComponentUpdate", { name: A, component: a[A] });
          }), this.keyboardNavigation.update(y), !p.highContrastModeActive && g.highContrastMode !== !1 && (pn.isHighContrastModeActive() || g.highContrastMode === !0) && pn.setHighContrastTheme(p), Xr(p, "afterA11yUpdate", { accessibility: this });
        }
        destroy() {
          let a = this.chart || {}, p = this.components;
          Object.keys(p).forEach(function(g) {
            p[g].destroy(), p[g].destroyBase();
          }), this.proxyProvider && this.proxyProvider.destroy(), a.announcerContainer && gn(a.announcerContainer), this.keyboardNavigation && this.keyboardNavigation.destroy(), a.renderTo && a.renderTo.setAttribute("aria-hidden", !0), a.focusElement && a.focusElement.removeFocusBorder();
        }
        getChartTypes() {
          let a = {};
          return this.chart.series.forEach(function(p) {
            a[p.type] = 1;
          }), Object.keys(a);
        }
      }
      (function(u) {
        function a() {
          this.accessibility && this.accessibility.destroy();
        }
        function p() {
          this.a11yDirty && this.renderTo && (delete this.a11yDirty, this.updateA11yEnabled());
          let w = this.accessibility;
          w && !w.zombie && (w.proxyProvider.updateProxyElementPositions(), w.getComponentOrder().forEach(function(T) {
            w.components[T].onChartRender();
          }));
        }
        function g(w) {
          let T = w.options.accessibility;
          T && (T.customComponents && (this.options.accessibility.customComponents = T.customComponents, delete T.customComponents), Os(!0, this.options.accessibility, T), this.accessibility && this.accessibility.destroy && (this.accessibility.destroy(), delete this.accessibility)), this.a11yDirty = !0;
        }
        function y() {
          let w = this.accessibility, T = this.options.accessibility, E = this.renderer.boxWrapper.element, P = this.title;
          if (T && T.enabled) w && !w.zombie ? w.update() : (this.accessibility = w = new u(this), w && !w.zombie && w.update(), E.getAttribute("role") === "img" && E.removeAttribute("role"));
          else if (w) w.destroy && w.destroy(), delete this.accessibility;
          else {
            this.renderTo.setAttribute("role", "img"), this.renderTo.setAttribute("aria-hidden", !1), this.renderTo.setAttribute("aria-label", (P && P.element.textContent || "").replace(/</g, "&lt;")), E.setAttribute("aria-hidden", !0);
            let B = document.getElementsByClassName("highcharts-description")[0];
            B && (B.setAttribute("aria-hidden", !1), B.classList.remove("highcharts-linked-description"));
          }
        }
        function A() {
          this.series.chart.accessibility && (this.series.chart.a11yDirty = !0);
        }
        u.i18nFormat = ve.i18nFormat, u.compose = function(w, T, E, P, B, z) {
          tr.compose(w), Cr.compose(P), Ao.compose(w, T), hs.compose(w), Rr.compose(w, E, P), ve.compose(w), Vs.compose(w, B), z && Q.compose(w, z);
          let R = w.prototype;
          R.updateA11yEnabled || (R.updateA11yEnabled = y, Ue(w, "destroy", a), Ue(w, "render", p), Ue(w, "update", g), ["addSeries", "init"].forEach((F) => {
            Ue(w, F, function() {
              this.a11yDirty = !0;
            });
          }), ["afterApplyDrilldown", "drillupall"].forEach((F) => {
            Ue(w, F, function() {
              let G = this.accessibility;
              G && !G.zombie && G.update();
            });
          }), Ue(E, "update", A), ["update", "updatedData", "remove"].forEach((F) => {
            Ue(P, F, function() {
              this.chart.accessibility && (this.chart.a11yDirty = !0);
            });
          }));
        };
      })(Gr || (Gr = {})), Os(!0, $a, { accessibility: { enabled: !0, screenReaderSection: { beforeChartFormat: "<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{playAsSoundButton}</div><div>{viewTableButton}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div><div>{annotationsTitle}{annotationsList}</div>", afterChartFormat: "{endOfChartMarker}", axisRangeDateFormat: "%Y-%m-%d %H:%M:%S" }, series: { descriptionFormat: "{seriesDescription}{authorDescription}{axisDescription}", describeSingleSeries: !1, pointDescriptionEnabledThreshold: 200 }, point: { valueDescriptionFormat: "{xDescription}{separator}{value}.", describeNull: !0 }, landmarkVerbosity: "all", linkedDescription: '*[data-highcharts-chart="{index}"] + .highcharts-description', highContrastMode: "auto", keyboardNavigation: { enabled: !0, focusBorder: { enabled: !0, hideBrowserFocusOutline: !0, style: { color: "#334eff", lineWidth: 2, borderRadius: 3 }, margin: 2 }, order: ["series", "zoom", "rangeSelector", "navigator", "legend", "chartMenu"], wrapAround: !0, seriesNavigation: { skipNullPoints: void 0, pointNavigationEnabledThreshold: !1, rememberPointFocus: !1 } }, announceNewData: { enabled: !1, minAnnounceInterval: 5e3, interruptUser: !1 } }, legend: { accessibility: { enabled: !0, keyboardNavigation: { enabled: !0 } } }, exporting: { accessibility: { enabled: !0 } }, navigator: { accessibility: { enabled: !0 } } }, { accessibility: { highContrastTheme: un }, lang: { accessibility: { defaultChartTitle: "Chart", chartContainerLabel: "{title}. Highcharts interactive chart.", svgContainerLabel: "Interactive chart", drillUpButton: "{buttonText}", credits: "Chart credits: {creditsStr}", thousandsSep: ",", svgContainerTitle: "", graphicContainerLabel: "", screenReaderSection: { beforeRegionLabel: "", afterRegionLabel: "", annotations: { heading: "Chart annotations summary", descriptionSinglePoint: "{annotationText}. Related to {annotationPoint}", descriptionMultiplePoints: "{annotationText}. Related to {annotationPoint}{#each additionalAnnotationPoints}, also related to {this}{/each}", descriptionNoPoints: "{annotationText}" }, endOfChartMarker: "End of interactive chart." }, sonification: { playAsSoundButtonText: "Play as sound, {chartTitle}", playAsSoundClickAnnouncement: "Play" }, legend: { legendLabelNoTitle: "Toggle series visibility, {chartTitle}", legendLabel: "Chart legend: {legendTitle}", legendItem: "Show {itemName}" }, zoom: { mapZoomIn: "Zoom chart", mapZoomOut: "Zoom out chart", resetZoomButton: "Reset zoom" }, rangeSelector: { dropdownLabel: "{rangeTitle}", minInputLabel: "Select start date.", maxInputLabel: "Select end date.", clickButtonAnnouncement: "Viewing {axisRangeDescription}" }, navigator: { handleLabel: "{#eq handleIx 0}Start, percent{else}End, percent{/eq}", groupLabel: "Axis zoom", changeAnnouncement: "{axisRangeDescription}" }, table: { viewAsDataTableButtonText: "View as data table, {chartTitle}", tableSummary: "Table representation of chart." }, announceNewData: { newDataAnnounce: "Updated data for chart {chartTitle}", newSeriesAnnounceSingle: "New data series: {seriesDesc}", newPointAnnounceSingle: "New data point: {pointDesc}", newSeriesAnnounceMultiple: "New data series in chart {chartTitle}: {seriesDesc}", newPointAnnounceMultiple: "New data point in chart {chartTitle}: {pointDesc}" }, seriesTypeDescriptions: { boxplot: "Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.", arearange: "Arearange charts are line charts displaying a range between a lower and higher value for each point.", areasplinerange: "These charts are line charts displaying a range between a lower and higher value for each point.", bubble: "Bubble charts are scatter charts where each data point also has a size value.", columnrange: "Columnrange charts are column charts displaying a range between a lower and higher value for each point.", errorbar: "Errorbar series are used to display the variability of the data.", funnel: "Funnel charts are used to display reduction of data in stages.", pyramid: "Pyramid charts consist of a single pyramid with item heights corresponding to each point value.", waterfall: "A waterfall chart is a column chart where each column contributes towards a total end value." }, chartTypes: { emptyChart: "Empty chart", mapTypeDescription: "Map of {mapTitle} with {numSeries} data series.", unknownMap: "Map of unspecified region with {numSeries} data series.", combinationChart: "Combination chart with {numSeries} data series.", defaultSingle: "Chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.", defaultMultiple: "Chart with {numSeries} data series.", splineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.", splineMultiple: "Line chart with {numSeries} lines.", lineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.", lineMultiple: "Line chart with {numSeries} lines.", columnSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.", columnMultiple: "Bar chart with {numSeries} data series.", barSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.", barMultiple: "Bar chart with {numSeries} data series.", pieSingle: "Pie chart with {numPoints} {#eq numPoints 1}slice{else}slices{/eq}.", pieMultiple: "Pie chart with {numSeries} pies.", scatterSingle: "Scatter chart with {numPoints} {#eq numPoints 1}point{else}points{/eq}.", scatterMultiple: "Scatter chart with {numSeries} data series.", boxplotSingle: "Boxplot with {numPoints} {#eq numPoints 1}box{else}boxes{/eq}.", boxplotMultiple: "Boxplot with {numSeries} data series.", bubbleSingle: "Bubble chart with {numPoints} {#eq numPoints 1}bubbles{else}bubble{/eq}.", bubbleMultiple: "Bubble chart with {numSeries} data series." }, axis: { xAxisDescriptionSingular: "The chart has 1 X axis displaying {names[0]}. {ranges[0]}", xAxisDescriptionPlural: "The chart has {numAxes} X axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.", yAxisDescriptionSingular: "The chart has 1 Y axis displaying {names[0]}. {ranges[0]}", yAxisDescriptionPlural: "The chart has {numAxes} Y axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.", timeRangeDays: "Data range: {range} days.", timeRangeHours: "Data range: {range} hours.", timeRangeMinutes: "Data range: {range} minutes.", timeRangeSeconds: "Data range: {range} seconds.", rangeFromTo: "Data ranges from {rangeFrom} to {rangeTo}.", rangeCategories: "Data range: {numCategories} categories." }, exporting: { chartMenuLabel: "Chart menu", menuButtonLabel: "View chart menu, {chartTitle}" }, series: { summary: { default: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", defaultCombination: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", line: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", lineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", spline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", splineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", column: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", columnCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", bar: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", barCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", pie: "{series.name}, pie {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.", pieCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Pie with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.", scatter: "{series.name}, scatter plot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.", scatterCombination: "{series.name}, series {seriesNumber} of {chart.series.length}, scatter plot with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.", boxplot: "{series.name}, boxplot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.", boxplotCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Boxplot with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.", bubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.", bubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.", map: "{series.name}, map {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.", mapCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Map with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.", mapline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", maplineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", mapbubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.", mapbubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}." }, description: "{description}", xAxisDescription: "X axis, {name}", yAxisDescription: "Y axis, {name}", nullPointValue: "No value", pointAnnotationsDescription: "{#each annotations}Annotation: {this}{/each}" } } } });
      let mn = Gr, ie = K();
      ie.i18nFormat = mn.i18nFormat, ie.A11yChartUtilities = Xt, ie.A11yHTMLUtilities = Ot, ie.AccessibilityComponent = ce, ie.KeyboardNavigationHandler = te, ie.SeriesAccessibilityDescriber = hi, mn.compose(ie.Chart, ie.Legend, ie.Point, ie.Series, ie.SVGElement, ie.RangeSelector);
      let Yr = K();
      return Ji.default;
    })());
  })(zn)), zn.exports;
}
Dp();
const Bl = "highcharts";
let _h = !1;
class Ip {
  constructor() {
  }
  // Operations - Render cartesian chart.
  async renderCartesianChart(he, dt, Vt, ye) {
    const Jt = [];
    for (const Qt of dt.data.measures)
      Jt.push({ type: he.options.highchartsType, name: Qt.name, data: Qt.data });
    const de = {
      chart: { type: he.options.highchartsType },
      plotOptions: { series: { borderColor: "#333" } },
      series: Jt,
      title: { text: dt.title.text },
      xAxis: { categories: dt.data.categoryLabels },
      yAxis: { title: { text: dt.data.name } }
    }, oe = Il.chart(Vt, de, ye);
    return { chart: oe, resize: () => oe.reflow(), vendorId: Bl };
  }
  // Operations - Render polar chart.
  async renderPolarChart(he, dt, Vt, ye) {
    await Promise.all([this.loadHighchartsMoreModule()]);
    const Jt = [];
    for (const Qt of dt.data.measures)
      Jt.push({ type: he.options.highchartsType, name: Qt.name, data: Qt.data });
    const de = {
      chart: { polar: !0 },
      plotOptions: { series: { borderColor: "#333" } },
      series: Jt,
      title: { text: dt.title.text },
      xAxis: { categories: dt.data.categoryLabels },
      yAxis: { title: { text: dt.data.name } }
    }, oe = Il.chart(Vt, de, ye);
    return { chart: oe, resize: () => oe.reflow(), vendorId: Bl };
  }
  // Operations - Render range chart.
  async renderRangeChart(he, dt, Vt, ye) {
    await Promise.all([this.loadHighchartsMoreModule()]);
    const Jt = [], de = [];
    for (let Ne = 0; Ne < dt.data.measures[0].data.length; Ne++)
      de.push([dt.data.measures[0].data[Ne][0], dt.data.measures[1].data[Ne][0]]);
    Jt.push({ type: he.options.highchartsType, name: "Unknown", data: de });
    const oe = {
      chart: { type: he.options.highchartsType, inverted: he.options.inverted },
      plotOptions: { series: { borderColor: "#333" } },
      series: Jt,
      title: { text: dt.title.text },
      xAxis: { categories: dt.data.categoryLabels },
      yAxis: { title: { text: dt.data.name } }
    }, Qt = Il.chart(Vt, oe, ye);
    return { chart: Qt, resize: () => Qt.reflow(), vendorId: Bl };
  }
  // Utilities - Load Highcharts more module.
  async loadHighchartsMoreModule() {
    _h || (await import("./highcharts-more-DGRrl1r3.js").then((he) => he.h), _h = !0);
  }
}
export {
  Ip as HighchartsTool
};
