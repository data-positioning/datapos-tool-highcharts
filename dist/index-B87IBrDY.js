function Lu(fe) {
  return fe && fe.__esModule && Object.prototype.hasOwnProperty.call(fe, "default") ? fe.default : fe;
}
var Na = { exports: {} }, Du = Na.exports, Zh;
function Iu() {
  return Zh || (Zh = 1, (function(fe, Yt) {
    /**
    * Highcharts JS v12.4.0 (2025-09-04)
    * @module highcharts/highcharts
    *
    * (c) 2009-2025 Highsoft AS
    *
    * License: www.highcharts.com/license
    */
    (function(at, zt) {
      at._Highcharts = zt(), fe.exports = at._Highcharts;
    })(typeof window > "u" ? Du : window, () => (() => {
      let at, zt;
      var ue, Vt, Dt, Zt, _t, oe, Oi, Li, ni, Qe, He, ti, Mt, Et, ae, es, gt, is, Di = {};
      Di.d = (h, t) => {
        for (var e in t) Di.o(t, e) && !Di.o(h, e) && Object.defineProperty(h, e, { enumerable: !0, get: t[e] });
      }, Di.o = (h, t) => Object.prototype.hasOwnProperty.call(h, t);
      var K = {};
      Di.d(K, { default: () => Ou }), (function(h) {
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
      })(ue || (ue = {}));
      let X = ue, { charts: pe, doc: ss, win: We } = X;
      function li(h, t, e, i) {
        let s = t ? "Highcharts error" : "Highcharts warning";
        h === 32 && (h = `${s}: Deprecated member`);
        let r = Ii(h), o = r ? `${s} #${h}: www.highcharts.com/errors/${h}/` : h.toString();
        if (i !== void 0) {
          let a = "";
          r && (o += "?"), Xe(i, function(l, c) {
            a += `
 - ${c}: ${l}`, r && (o += encodeURI(c) + "=" + encodeURI(l));
          }), o += a;
        }
        ns(X, "displayError", { chart: e, code: h, message: o, params: i }, function() {
          if (t) throw Error(o);
          We.console && li.messages.indexOf(o) === -1 && console.warn(o);
        }), li.messages.push(o);
      }
      function Ws(h, t) {
        return parseInt(h, t || 10);
      }
      function It(h) {
        return typeof h == "string";
      }
      function rs(h) {
        let t = Object.prototype.toString.call(h);
        return t === "[object Array]" || t === "[object Array Iterator]";
      }
      function Ce(h, t) {
        return !!h && typeof h == "object" && (!t || !rs(h));
      }
      function Xs(h) {
        return Ce(h) && typeof h.nodeType == "number";
      }
      function os(h) {
        let t = h?.constructor;
        return !!(Ce(h, !0) && !Xs(h) && t?.name && t.name !== "Object");
      }
      function Ii(h) {
        return typeof h == "number" && !isNaN(h) && h < 1 / 0 && h > -1 / 0;
      }
      function Ae(h) {
        return h != null;
      }
      function Gs(h, t, e) {
        let i, s = It(t) && !Ae(e), r = (o, a) => {
          Ae(o) ? h.setAttribute(a, o) : s ? (i = h.getAttribute(a)) || a !== "class" || (i = h.getAttribute(a + "Name")) : h.removeAttribute(a);
        };
        return It(t) ? r(e, t) : Xe(t, r), i;
      }
      function io(h) {
        return rs(h) ? h : [h];
      }
      function Te(h, t) {
        let e;
        for (e in h || (h = {}), t) h[e] = t[e];
        return h;
      }
      function hi() {
        let h = arguments, t = h.length;
        for (let e = 0; e < t; e++) {
          let i = h[e];
          if (i != null) return i;
        }
      }
      function as(h, t) {
        Te(h.style, t);
      }
      function Ys(h) {
        return Math.pow(10, Math.floor(Math.log(h) / Math.LN10));
      }
      function js(h, t) {
        return h > 1e14 ? h : parseFloat(h.toPrecision(t || 14));
      }
      (li || (li = {})).messages = [], Math.easeInOutSine = function(h) {
        return -0.5 * (Math.cos(Math.PI * h) - 1);
      };
      let qt = Array.prototype.find ? function(h, t) {
        return h.find(t);
      } : function(h, t) {
        let e, i = h.length;
        for (e = 0; e < i; e++) if (t(h[e], e)) return h[e];
      };
      function Xe(h, t, e) {
        for (let i in h) Object.hasOwnProperty.call(h, i) && t.call(e || h[i], h[i], i, h);
      }
      function Us(h, t, e) {
        function i(o, a) {
          let l = h.removeEventListener;
          l && l.call(h, o, a, !1);
        }
        function s(o) {
          let a, l;
          h.nodeName && (t ? (a = {})[t] = !0 : a = o, Xe(a, function(c, m) {
            if (o[m]) for (l = o[m].length; l--; ) i(m, o[m][l].fn);
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
      function ns(h, t, e, i) {
        if (e = e || {}, ss?.createEvent && (h.dispatchEvent || h.fireEvent && h !== X)) {
          let s = ss.createEvent("Events");
          s.initEvent(t, !0, !0), e = Te(s, e), h.dispatchEvent ? h.dispatchEvent(e) : h.fireEvent(t, e);
        } else if (h.hcEvents) {
          e.target || Te(e, { preventDefault: function() {
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
      let Fa = (function() {
        let h = Math.random().toString(36).substring(2, 9) + "-", t = 0;
        return function() {
          return "highcharts-" + (at ? "" : h) + t++;
        };
      })();
      We.jQuery && (We.jQuery.fn.highcharts = function() {
        let h = [].slice.call(arguments);
        if (this[0]) return h[0] ? (new X[It(h[0]) ? h.shift() : "Chart"](this[0], h[0], h[1]), this) : pe[Gs(this[0], "data-highcharts-chart")];
      });
      let $ = { addEvent: function(h, t, e, i = {}) {
        let s = typeof h == "function" && h.prototype || h;
        Object.hasOwnProperty.call(s, "hcEvents") || (s.hcEvents = {});
        let r = s.hcEvents;
        X.Point && h instanceof X.Point && h.series && h.series.chart && (h.series.chart.runTrackerClick = !0);
        let o = h.addEventListener;
        o && o.call(h, t, e, !!X.supportsPassiveEvents && { passive: i.passive === void 0 ? t.indexOf("touch") !== -1 : i.passive, capture: !1 }), r[t] || (r[t] = []);
        let a = { fn: e, order: typeof i.order == "number" ? i.order : 1 / 0 };
        return r[t].push(a), r[t].sort((l, c) => l.order - c.order), function() {
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
        Ae(h) && clearTimeout(h);
      }, correctFloat: js, createElement: function(h, t, e, i, s) {
        let r = ss.createElement(h);
        return t && Te(r, t), s && as(r, { padding: "0", border: "none", margin: "0" }), e && as(r, e), i && i.appendChild(r), r;
      }, crisp: function(h, t = 0, e) {
        let i = t % 2 / 2, s = e ? -1 : 1;
        return (Math.round(h * s - i) + i) * s;
      }, css: as, defined: Ae, destroyObjectProperties: function(h, t, e) {
        Xe(h, function(i, s) {
          i !== t && i?.destroy && i.destroy(), (i?.destroy || !e) && delete h[s];
        });
      }, diffObjects: function(h, t, e, i) {
        let s = {};
        return (function r(o, a, l, c) {
          let m = e ? a : o;
          Xe(o, function(d, f) {
            if (!c && i && i.indexOf(f) > -1 && a[f]) {
              d = io(d), l[f] = [];
              for (let x = 0; x < Math.max(d.length, a[f].length); x++) a[f][x] && (d[x] === void 0 ? l[f][x] = a[f][x] : (l[f][x] = {}, r(d[x], a[f][x], l[f][x], c + 1)));
            } else Ce(d, !0) && !d.nodeType ? (l[f] = rs(d) ? [] : {}, r(d, a[f] || {}, l[f], c + 1), Object.keys(l[f]).length === 0 && (f !== "colorAxis" || c !== 0) && delete l[f]) : (o[f] !== a[f] || f in o && !(f in a)) && f !== "__proto__" && f !== "constructor" && (l[f] = m[f]);
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
      }, error: li, extend: Te, extendClass: function(h, t) {
        let e = function() {
        };
        return e.prototype = new h(), Te(e.prototype, t), e;
      }, find: qt, fireEvent: ns, getAlignFactor: (h = "") => ({ center: 0.5, right: 1, middle: 0.5, bottom: 1 })[h] || 0, getClosestDistance: function(h, t) {
        let e, i, s, r = !t;
        return h.forEach((o) => {
          if (o.length > 1) for (s = o.length - 1; s > 0; s--) (i = o[s] - o[s - 1]) < 0 && !r ? (t?.(), t = void 0) : i && (e === void 0 || i < e) && (e = i);
        }), e;
      }, getMagnitude: Ys, getNestedProperty: function(h, t) {
        let e = h.split(".");
        for (; e.length && Ae(t); ) {
          let i = e.shift();
          if (i === void 0 || i === "__proto__") return;
          if (i === "this") {
            let r;
            return Ce(t) && (r = t["@this"]), r ?? t;
          }
          let s = t[i.replace(/[\\'"]/g, "")];
          if (!Ae(s) || typeof s == "function" || typeof s.nodeType == "number" || s === We) return;
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
        let r = We.getComputedStyle(t, void 0);
        return r && (s = r.getPropertyValue(e), hi(i, e !== "opacity") && (s = Ws(s))), s;
      }, insertItem: function(h, t) {
        let e, i = h.options.index, s = t.length;
        for (e = h.options.isInternal ? s : 0; e < s + 1; e++) if (!t[e] || Ii(i) && i < hi(t[e].options.index, t[e]._i) || t[e].options.isInternal) {
          t.splice(e, 0, h);
          break;
        }
        return e;
      }, isArray: rs, isClass: os, isDOMElement: Xs, isFunction: function(h) {
        return typeof h == "function";
      }, isNumber: Ii, isObject: Ce, isString: It, merge: function(h, ...t) {
        let e, i = [h, ...t], s = {}, r = function(a, l) {
          return typeof a != "object" && (a = {}), Xe(l, function(c, m) {
            m !== "__proto__" && m !== "constructor" && (!Ce(c, !0) || os(c) || Xs(c) ? a[m] = l[m] : a[m] = r(a[m] || {}, c));
          }), a;
        };
        h === !0 && (s = i[1], i = Array.prototype.slice.call(i, 2));
        let o = i.length;
        for (e = 0; e < o; e++) s = r(s, i[e]);
        return s;
      }, normalizeTickInterval: function(h, t, e, i, s) {
        let r, o = h;
        e = hi(e, Ys(h));
        let a = h / e;
        for (!t && (t = s ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], i === !1 && (e === 1 ? t = t.filter(function(l) {
          return l % 1 == 0;
        }) : e <= 0.1 && (t = [1 / e]))), r = 0; r < t.length && (o = t[r], (!s || !(o * e >= h)) && (s || !(a <= (t[r] + (t[r + 1] || t[r])) / 2))); r++) ;
        return js(o * e, -Math.round(Math.log(1e-3) / Math.LN10));
      }, objectEach: Xe, offset: function(h) {
        let t = ss.documentElement, e = h.parentElement || h.parentNode ? h.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 };
        return { top: e.top + (We.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: e.left + (We.pageXOffset || t.scrollLeft) - (t.clientLeft || 0), width: e.width, height: e.height };
      }, pad: function(h, t, e) {
        return Array((t || 2) + 1 - String(h).replace("-", "").length).join(e || "0") + h;
      }, pick: hi, pInt: Ws, pushUnique: function(h, t) {
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
        return It(h) ? h.substring(0, 1).toUpperCase() + h.substring(1) : String(h);
      }, uniqueKey: Fa, useSerialIds: function(h) {
        return at = hi(h, at);
      }, wrap: function(h, t, e) {
        let i = h[t];
        h[t] = function() {
          let s = arguments, r = this;
          return e.apply(this, [function() {
            return i.apply(r, arguments.length ? arguments : s);
          }].concat([].slice.call(arguments)));
        };
      } }, { pageLang: Ha, win: ls } = X, { defined: xe, error: so, extend: ne, isNumber: ro, isObject: ci, isString: Bi, merge: oo, objectEach: Wa, pad: Se, splat: Xa, timeUnits: Vs, ucfirst: Ga } = $, qs = X.isSafari && ls.Intl && !ls.Intl.DateTimeFormat.prototype.formatRange, Ya = (h) => h.main === void 0, ja = class {
        constructor(h, t) {
          this.options = { timezone: "UTC" }, this.variableTimezone = !1, this.Date = ls.Date, this.update(h), this.lang = t;
        }
        update(h = {}) {
          this.dTLCache = {}, this.options = h = oo(!0, this.options, h);
          let { timezoneOffset: t, useUTC: e, locale: i } = h;
          this.Date = h.Date || ls.Date || Date;
          let s = h.timezone;
          xe(e) && (s = e ? "UTC" : void 0), t && t % 60 == 0 && (s = "Etc/GMT" + (t > 0 ? "+" : "") + t / 60), this.variableTimezone = s !== "UTC" && s?.indexOf("Etc/GMT") !== 0, this.timezone = s, this.lang && i && (this.lang.locale = i), ["months", "shortMonths", "weekdays", "shortWeekdays"].forEach((r) => {
            let o = /months/i.test(r), a = /short/.test(r), l = { timeZone: "UTC" };
            l[o ? "month" : "weekday"] = a ? "short" : "long", this[r] = (o ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : [3, 4, 5, 6, 7, 8, 9]).map((c) => this.dateFormat(l, (o ? 31 : 1) * 24 * 36e5 * c));
          });
        }
        toParts(h) {
          let [t, e, i, s, r, o, a] = this.dateTimeFormat({ weekday: "narrow", day: "numeric", month: "numeric", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }, h, "es").split(/(?:, | |\/|:)/g);
          return [s, i - 1, e, r, o, a, Math.floor(Number(h) || 0) % 1e3, "DLMXJVS".indexOf(t)].map(Number);
        }
        dateTimeFormat(h, t, e = this.options.locale || Ha) {
          let i = JSON.stringify(h) + e;
          Bi(h) && (h = this.str2dtf(h));
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
            h.indexOf(i) !== -1 && ne(t, e[i]);
          }), t;
        }
        makeTime(h, t, e = 1, i = 0, s, r, o) {
          let a = this.Date.UTC(h, t, e, i, s || 0, r || 0, o || 0);
          if (this.timezone !== "UTC") {
            let l = this.getTimezoneOffset(a);
            if (a += l, [2, 3, 8, 9, 10, 11].indexOf(t) !== -1 && (i < 5 || i > 20)) {
              let c = this.getTimezoneOffset(a);
              l !== c ? a += c - l : l - 36e5 !== this.getTimezoneOffset(a - 36e5) || qs || (a -= 36e5);
            }
          }
          return a;
        }
        parse(h) {
          if (!Bi(h)) return h ?? void 0;
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
          if (!xe(t) || isNaN(t)) return i?.invalidDate || "";
          if (Bi(h = h ?? "%Y-%m-%d %H:%M:%S")) {
            let s, r = /%\[([a-zA-Z]+)\]/g;
            for (; s = r.exec(h); ) h = h.replace(s[0], this.dateTimeFormat(s[1], t, i?.locale));
          }
          if (Bi(h) && h.indexOf("%") !== -1) {
            let s = this, [r, o, a, l, c, m, d, f] = this.toParts(t), x = i?.weekdays || this.weekdays, y = i?.shortWeekdays || this.shortWeekdays, M = i?.months || this.months, w = i?.shortMonths || this.shortMonths;
            Wa(ne({ a: y ? y[f] : x[f].substr(0, 3), A: x[f], d: Se(a), e: Se(a, 2, " "), w: f, v: i?.weekFrom ?? "", b: w[o], B: M[o], m: Se(o + 1), o: o + 1, y: r.toString().substr(2, 2), Y: r, H: Se(l), k: l, I: Se(l % 12 || 12), l: l % 12 || 12, M: Se(c), p: l < 12 ? "AM" : "PM", P: l < 12 ? "am" : "pm", S: Se(m), L: Se(d, 3) }, X.dateFormats), function(v, T) {
              if (Bi(h)) for (; h.indexOf("%" + T) !== -1; ) h = h.replace("%" + T, typeof v == "function" ? v.call(s, t) : v);
            });
          } else if (ci(h)) {
            let s = (this.getTimezoneOffset(t) || 0) / 36e5, r = this.timezone || "Etc/GMT" + (s >= 0 ? "+" : "") + s, { prefix: o = "", suffix: a = "" } = h;
            h = o + this.dateTimeFormat(ne({ timeZone: r }, h), t) + a;
          }
          return e ? Ga(h) : h;
        }
        resolveDTLFormat(h) {
          return ci(h, !0) ? ci(h, !0) && Ya(h) ? { main: h } : h : { main: (h = Xa(h))[0], from: h[1], to: h[2] };
        }
        getDateFormat(h, t, e, i) {
          let s = this.dateFormat("%m-%d %H:%M:%S.%L", t), r = "01-01 00:00:00.000", o = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, a = "millisecond", l = a;
          for (a in Vs) {
            if (h && h === Vs.week && +this.dateFormat("%w", t) === e && s.substr(6) === r.substr(6)) {
              a = "week";
              break;
            }
            if (h && Vs[a] > h) {
              a = l;
              break;
            }
            if (o[a] && s.substr(o[a]) !== r.substr(o[a])) break;
            a !== "week" && (l = a);
          }
          return this.resolveDTLFormat(i[a]).main;
        }
      }, { defined: ao, extend: no, timeUnits: At } = $, Ks = class extends ja {
        getTimeTicks(h, t, e, i) {
          let s = this, r = [], o = {}, { count: a = 1, unitRange: l } = h, [c, m, d, f, x, y] = s.toParts(t), M = (t || 0) % 1e3, w;
          if (i ?? (i = 1), ao(t)) {
            if (M = l >= At.second ? 0 : a * Math.floor(M / a), l >= At.second && (y = l >= At.minute ? 0 : a * Math.floor(y / a)), l >= At.minute && (x = l >= At.hour ? 0 : a * Math.floor(x / a)), l >= At.hour && (f = l >= At.day ? 0 : a * Math.floor(f / a)), l >= At.day && (d = l >= At.month ? 1 : Math.max(1, a * Math.floor(d / a))), l >= At.month && (m = l >= At.year ? 0 : a * Math.floor(m / a)), l >= At.year && (c -= c % a), l === At.week) {
              a && (t = s.makeTime(c, m, d, f, x, y, M));
              let S = this.dateTimeFormat({ timeZone: this.timezone, weekday: "narrow" }, t, "es"), O = "DLMXJVS".indexOf(S);
              d += -O + i + (O < i ? -7 : 0);
            }
            t = s.makeTime(c, m, d, f, x, y, M), s.variableTimezone && ao(e) && (w = e - t > 4 * At.month || s.getTimezoneOffset(t) !== s.getTimezoneOffset(e));
            let v = t, T = 1;
            for (; v < e; ) r.push(v), l === At.year ? v = s.makeTime(c + T * a, 0) : l === At.month ? v = s.makeTime(c, m + T * a) : w && (l === At.day || l === At.week) ? v = s.makeTime(c, m, d + T * a * (l === At.day ? 1 : 7)) : w && l === At.hour && a > 1 ? v = s.makeTime(c, m, d, f + T * a) : v += l * a, T++;
            r.push(v), l <= At.hour && r.length < 1e4 && r.forEach((S) => {
              S % 18e5 == 0 && s.dateFormat("%H%M%S%L", S) === "000000000" && (o[S] = "day");
            });
          }
          return r.info = no(h, { higherRanks: o, totalRange: l * a }), r;
        }
      }, { isTouchDevice: Ua } = X, { fireEvent: lo, merge: ho } = $, Ee = { colors: ["#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1"], symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { weekFrom: "week from", chartTitle: "Chart title", locale: void 0, loading: "Loading...", months: void 0, seriesName: "Series {add index 1}", shortMonths: void 0, weekdays: void 0, numericSymbols: ["k", "M", "G", "T", "P", "E"], pieSliceName: "Slice", resetZoom: "Reset zoom", yAxisTitle: "Values", resetZoomTitle: "Reset zoom level 1:1" }, global: { buttonTheme: { fill: "#f7f7f7", padding: 8, r: 2, stroke: "#cccccc", "stroke-width": 1, style: { color: "#333333", cursor: "pointer", fontSize: "0.8em", fontWeight: "normal" }, states: { hover: { fill: "#e6e6e6" }, select: { fill: "#e6e9ff", style: { color: "#000000", fontWeight: "bold" } }, disabled: { style: { color: "#cccccc" } } } } }, time: { Date: void 0, timezone: "UTC", timezoneOffset: 0, useUTC: void 0 }, chart: { alignThresholds: !1, panning: { enabled: !1, type: "x" }, styledMode: !1, borderRadius: 0, colorCount: 10, allowMutatingData: !0, ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: {}, position: {} }, reflow: !0, type: "line", zooming: { singleTouch: !1, resetButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } } }, width: null, height: null, borderColor: "#334eff", backgroundColor: "#ffffff", plotBorderColor: "#cccccc" }, title: { style: { color: "#333333", fontWeight: "bold" }, text: "Chart title", margin: 15, minScale: 0.67 }, subtitle: { style: { color: "#666666", fontSize: "0.8em" }, text: "" }, caption: { margin: 15, style: { color: "#666666", fontSize: "0.8em" }, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {}, legend: { enabled: !0, align: "center", alignColumns: !0, className: "highcharts-no-tooltip", events: {}, layout: "horizontal", itemMarginBottom: 2, itemMarginTop: 2, labelFormatter: function() {
        return this.name;
      }, borderColor: "#999999", borderRadius: 0, navigation: { style: { fontSize: "0.8em" }, activeColor: "#0022ff", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "0.8em", textDecoration: "none", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#666666", textDecoration: "line-through" }, shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { color: "#333333", fontSize: "0.8em", fontWeight: "bold" } } }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: 0.5, textAlign: "center" } }, tooltip: { enabled: !0, animation: { duration: 300, easing: (h) => Math.sqrt(1 - Math.pow(h - 1, 2)) }, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%[AebHMSL]", second: "%[AebHMS]", minute: "%[AebHM]", hour: "%[AebHM]", day: "%[AebY]", week: "%v %[AebY]", month: "%[BY]", year: "%Y" }, footerFormat: "", headerShape: "callout", hideDelay: 500, padding: 8, position: { x: 0, y: 3 }, shared: !1, snap: Ua ? 25 : 10, headerFormat: '<span style="font-size: 0.8em">{ucfirst point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: "#ffffff", borderWidth: void 0, stickOnContact: !1, style: { color: "#333333", cursor: "default", fontSize: "0.8em" }, useHTML: !1 }, credits: { enabled: !0, href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "0.6em" }, text: "Highcharts.com" } }, $s = new Ks(Ee.time, Ee.lang), te = { defaultOptions: Ee, defaultTime: $s, getOptions: function() {
        return Ee;
      }, setOptions: function(h) {
        return lo(X, "setOptions", { options: h }), ho(!0, Ee, h), h.time && $s.update(Ee.time), h.lang && "locale" in h.lang && $s.update({ locale: h.lang.locale }), h.lang?.chartTitle && (Ee.title = { ...Ee.title, text: h.lang.chartTitle }), Ee;
      } }, { win: Va } = X, { isNumber: Ni, isString: qa, merge: hs, pInt: Kt, defined: co } = $, uo = (h, t, e) => `color-mix(in srgb,${h},${t} ${100 * e}%)`, cs = (h) => qa(h) && !!h && h !== "none";
      class yt {
        static parse(t) {
          return t ? new yt(t) : yt.None;
        }
        constructor(t) {
          let e, i, s, r;
          this.rgba = [NaN, NaN, NaN, NaN], this.input = t;
          let o = X.Color;
          if (o && o !== yt) return new o(t);
          if (typeof t == "object" && t.stops !== void 0) this.stops = t.stops.map((a) => new yt(a[1]));
          else if (typeof t == "string") for (this.input = t = yt.names[t.toLowerCase()] || t, s = yt.parsers.length; s-- && !i; ) (e = (r = yt.parsers[s]).regex.exec(t)) && (i = r.parse(e));
          i && (this.rgba = i);
        }
        get(t) {
          let e = this.input, i = this.rgba;
          if (this.output) return this.output;
          if (typeof e == "object" && this.stops !== void 0) {
            let s = hs(e);
            return s.stops = [].slice.call(s.stops), this.stops.forEach((r, o) => {
              s.stops[o] = [s.stops[o][0], r.get(t)];
            }), s;
          }
          return i && Ni(i[0]) ? t !== "rgb" && (t || i[3] !== 1) ? t === "a" ? `${i[3]}` : "rgba(" + i.join(",") + ")" : "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")" : e;
        }
        brighten(t) {
          let e = this.rgba;
          if (this.stops) this.stops.forEach(function(i) {
            i.brighten(t);
          });
          else if (Ni(t) && t !== 0) if (Ni(e[0])) for (let i = 0; i < 3; i++) e[i] += Kt(255 * t), e[i] < 0 && (e[i] = 0), e[i] > 255 && (e[i] = 255);
          else yt.useColorMix && cs(this.input) && (this.output = uo(this.input, t > 0 ? "white" : "black", Math.abs(t)));
          return this;
        }
        setOpacity(t) {
          return this.rgba[3] = t, this;
        }
        tweenTo(t, e) {
          let i = this.rgba, s = t.rgba;
          if (!Ni(i[0]) || !Ni(s[0])) return yt.useColorMix && cs(this.input) && cs(t.input) && e < 0.99 ? uo(this.input, t.input, e) : t.input || "none";
          let r = s[3] !== 1 || i[3] !== 1, o = (l, c) => l + (i[c] - l) * (1 - e), a = s.slice(0, 3).map(o).map(Math.round);
          return r && a.push(o(s[3], 3)), (r ? "rgba(" : "rgb(") + a.join(",") + ")";
        }
      }
      yt.names = { white: "#ffffff", black: "#000000" }, yt.parsers = [{ regex: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?(?:\.\d+)?)\s*\)/, parse: function(h) {
        return [Kt(h[1]), Kt(h[2]), Kt(h[3]), parseFloat(h[4], 10)];
      } }, { regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/, parse: function(h) {
        return [Kt(h[1]), Kt(h[2]), Kt(h[3]), 1];
      } }, { regex: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?$/i, parse: function(h) {
        return [Kt(h[1] + h[1], 16), Kt(h[2] + h[2], 16), Kt(h[3] + h[3], 16), co(h[4]) ? Kt(h[4] + h[4], 16) / 255 : 1];
      } }, { regex: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?$/i, parse: function(h) {
        return [Kt(h[1], 16), Kt(h[2], 16), Kt(h[3], 16), co(h[4]) ? Kt(h[4], 16) / 255 : 1];
      } }], yt.useColorMix = Va.CSS?.supports("color", "color-mix(in srgb,red,blue 9%)"), yt.None = new yt("");
      let { parse: po } = yt, { win: go } = X, { isNumber: Zs, objectEach: mo } = $;
      class $t {
        constructor(t, e, i) {
          this.pos = NaN, this.options = e, this.elem = t, this.prop = i;
        }
        dSetter() {
          let t = this.paths, e = t?.[0], i = t?.[1], s = this.now || 0, r = [];
          if (s !== 1 && e && i) if (e.length === i.length && s < 1) for (let o = 0; o < i.length; o++) {
            let a = e[o], l = i[o], c = [];
            for (let m = 0; m < l.length; m++) {
              let d = a[m], f = l[m];
              Zs(d) && Zs(f) && (l[0] !== "A" || m !== 4 && m !== 5) ? c[m] = d + s * (f - d) : c[m] = f;
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
            for (let c = 0; c < $t.timers.length; c++) $t.timers[c]() || $t.timers.splice(c--, 1);
            $t.timers.length && a(l);
          };
          t !== e || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = t, this.end = e, this.unit = i, this.now = this.start, this.pos = 0, o.elem = this.elem, o.prop = this.prop, o() && $t.timers.push(o) === 1 && a(l)) : (delete r.curAnim[this.prop], r.complete && Object.keys(r.curAnim).length === 0 && r.complete.call(this.elem));
        }
        step(t) {
          let e, i, s = +/* @__PURE__ */ new Date(), r = this.options, o = this.elem, a = r.complete, l = r.duration, c = r.curAnim;
          return o.attr && !o.element ? e = !1 : t || s >= l + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), c[this.prop] = !0, i = !0, mo(c, function(m) {
            m !== !0 && (i = !1);
          }), i && a && a.call(o), e = !1) : (this.pos = r.easing((s - this.startTime) / l), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0), e;
        }
        initPath(t, e, i) {
          let s = t.startX, r = t.endX, o = i.slice(), a = t.isArea, l = a ? 2 : 1, c = e && i.length > e.length && i.hasStackedCliffs, m, d, f, x, y = e?.slice();
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
            m === void 0 && (y = []);
          }
          return y.length && Zs(m) && (d = o.length + m * l, x ? (M(y, o), w(o)) : (M(o, y), w(y))), [y, o];
        }
        fillSetter() {
          $t.prototype.strokeSetter.apply(this, arguments);
        }
        strokeSetter() {
          this.elem.attr(this.prop, po(this.start).tweenTo(po(this.end), this.pos), void 0, !0);
        }
      }
      $t.timers = [];
      let { defined: Ka, getStyle: fo, isArray: $a, isNumber: Za, isObject: _s, merge: xo, objectEach: ds, pick: us } = $;
      function Ri(h) {
        return _s(h) ? xo({ duration: 500, defer: 0 }, h) : { duration: 500 * !!h, defer: 0 };
      }
      function ps(h, t) {
        let e = $t.timers.length;
        for (; e--; ) $t.timers[e].elem !== h || t && t !== $t.timers[e].prop || ($t.timers[e].stopped = !0);
      }
      let Rt = { animate: function(h, t, e) {
        let i, s = "", r, o, a;
        _s(e) || (a = arguments, e = { duration: a[2], easing: a[3], complete: a[4] }), Za(e.duration) || (e.duration = 400), e.easing = typeof e.easing == "function" ? e.easing : Math[e.easing] || Math.easeInOutSine, e.curAnim = xo(t), ds(t, function(l, c) {
          ps(h, c), o = new $t(h, e, c), r = void 0, c === "d" && $a(t.d) ? (o.paths = o.initPath(h, h.pathArray, t.d), o.toD = t.d, i = 0, r = 1) : h.attr ? i = h.attr(c) : (i = parseFloat(fo(h, c)) || 0, c !== "opacity" && (s = "px")), r || (r = l), typeof r == "string" && r.match("px") && (r = r.replace(/px/g, "")), o.run(i, r, s);
        });
      }, animObject: Ri, getDeferredAnimation: function(h, t, e) {
        let i = Ri(t), s = e ? [e] : h.series, r = 0, o = 0;
        return s.forEach((a) => {
          let l = Ri(a.options.animation);
          r = _s(t) && Ka(t.defer) ? i.defer : Math.max(r, l.duration + l.defer), o = Math.min(i.duration, l.duration);
        }), h.renderer.forExport && (r = 0), { defer: Math.max(0, r - o), duration: Math.min(r, o) };
      }, setAnimation: function(h, t) {
        t.renderer.globalAnimation = us(h, t.options.chart.animation, !0);
      }, stop: ps }, { SVG_NS: Js, win: _a } = X, { attr: Ja, createElement: Qa, css: tn, error: bo, isFunction: Qs, isString: tr, objectEach: yo, splat: er } = $, { trustedTypes: ir } = _a, gs = ir && Qs(ir.createPolicy) && ir.createPolicy("highcharts", { createHTML: (h) => h }), en = gs ? gs.createHTML("") : "";
      class Ct {
        static filterUserAttributes(t) {
          return yo(t, (e, i) => {
            let s = !0;
            Ct.allowedAttributes.indexOf(i) === -1 && (s = !1), ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(i) !== -1 && (s = tr(e) && Ct.allowedReferences.some((r) => e.indexOf(r) === 0)), s || (bo(33, !1, void 0, { "Invalid attribute in config": `${i}` }), delete t[i]), tr(e) && t[i] && (t[i] = e.replace(/</g, "&lt;"));
          }), t;
        }
        static parseStyle(t) {
          return t.split(";").reduce((e, i) => {
            let s = i.split(":").map((o) => o.trim()), r = s.shift();
            return r && s.length && (e[r.replace(/-([a-z])/g, (o) => o[1].toUpperCase())] = s.join(":")), e;
          }, {});
        }
        static setElementHTML(t, e) {
          t.innerHTML = Ct.emptyHTML, e && new Ct(e).addToDOM(t);
        }
        constructor(t) {
          this.nodes = typeof t == "string" ? this.parseMarkup(t) : t;
        }
        addToDOM(t) {
          return (function e(i, s) {
            let r;
            return er(i).forEach(function(o) {
              let a, l = o.tagName, c = o.textContent ? X.doc.createTextNode(o.textContent) : void 0, m = Ct.bypassHTMLFiltering;
              if (l) if (l === "#text") a = c;
              else if (Ct.allowedTags.indexOf(l) !== -1 || m) {
                let d = l === "svg" ? Js : s.namespaceURI || Js, f = X.doc.createElementNS(d, l), x = o.attributes || {};
                yo(o, function(y, M) {
                  M !== "tagName" && M !== "attributes" && M !== "children" && M !== "style" && M !== "textContent" && (x[M] = y);
                }), Ja(f, m ? x : Ct.filterUserAttributes(x)), o.style && tn(f, o.style), c && f.appendChild(c), e(o.children || [], f), a = f;
              } else bo(33, !1, void 0, { "Invalid tagName in config": l });
              a && s.appendChild(a), r = a;
            }), r;
          })(this.nodes, t);
        }
        parseMarkup(t) {
          let e, i = [];
          t = t.trim().replace(/ style=(["'])/g, " data-style=$1");
          try {
            e = new DOMParser().parseFromString(gs ? gs.createHTML(t) : t, "text/html");
          } catch {
          }
          if (!e) {
            let r = Qa("div");
            r.innerHTML = t, e = { body: r };
          }
          let s = (r, o) => {
            let a = r.nodeName.toLowerCase(), l = { tagName: a };
            a === "#text" && (l.textContent = r.textContent || "");
            let c = r.attributes;
            if (c) {
              let m = {};
              [].forEach.call(c, (d) => {
                d.name === "data-style" ? l.style = Ct.parseStyle(d.value) : m[d.name] = d.value;
              }), l.attributes = m;
            }
            if (r.childNodes.length) {
              let m = [];
              [].forEach.call(r.childNodes, (d) => {
                s(d, m);
              }), m.length && (l.children = m);
            }
            o.push(l);
          };
          return [].forEach.call(e.body.childNodes, (r) => s(r, i)), i;
        }
      }
      Ct.allowedAttributes = ["alt", "aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-pressed", "aria-readonly", "aria-roledescription", "aria-selected", "class", "clip-path", "color", "colspan", "cx", "cy", "d", "disabled", "dx", "dy", "fill", "filterUnits", "flood-color", "flood-opacity", "height", "href", "id", "in", "in2", "markerHeight", "markerWidth", "offset", "opacity", "operator", "orient", "padding", "paddingLeft", "paddingRight", "patternUnits", "r", "radius", "refX", "refY", "result", "role", "rowspan", "scope", "slope", "src", "startOffset", "stdDeviation", "stroke-linecap", "stroke-width", "stroke", "style", "summary", "tabindex", "tableValues", "target", "text-align", "text-anchor", "textAnchor", "textLength", "title", "type", "valign", "width", "x", "x1", "x2", "xlink:href", "y", "y1", "y2", "zIndex"], Ct.allowedReferences = ["https://", "http://", "mailto:", "/", "../", "./", "#"], Ct.allowedTags = ["#text", "a", "abbr", "b", "br", "button", "caption", "circle", "clipPath", "code", "dd", "defs", "div", "dl", "dt", "em", "feComponentTransfer", "feComposite", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "filter", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "li", "linearGradient", "marker", "ol", "p", "path", "pattern", "pre", "rect", "small", "span", "stop", "strong", "style", "sub", "sup", "svg", "table", "tbody", "td", "text", "textPath", "th", "thead", "title", "tr", "tspan", "u", "ul"], Ct.emptyHTML = en, Ct.bypassHTMLFiltering = !1;
      let { defaultOptions: vo, defaultTime: ko } = te, { pageLang: sn } = X, { extend: rn, getNestedProperty: wo, isArray: on, isNumber: Mo, isObject: sr, isString: rr, pick: or, ucfirst: Co } = $, ms = { add: (h, t) => h + t, divide: (h, t) => t !== 0 ? h / t : "", eq: (h, t) => h == t, each: function(h) {
        let t = arguments[arguments.length - 1];
        return !!on(h) && h.map((e, i) => Pe(t.body, rn(sr(e) ? e : { "@this": e }, { "@index": i, "@first": i === 0, "@last": i === h.length - 1 }))).join("");
      }, ge: (h, t) => h >= t, gt: (h, t) => h > t, if: (h) => !!h, le: (h, t) => h <= t, lt: (h, t) => h < t, multiply: (h, t) => h * t, ne: (h, t) => h != t, subtract: (h, t) => h - t, ucfirst: Co, unless: (h) => !h }, ar = {}, nr = (h) => /^["'].+["']$/.test(h);
      function Pe(h = "", t, e) {
        let i = /\{([a-zA-Z\u00C0-\u017F\d:\.,;\-\/<>\[\]%_@+"'’= #\(\)]+)\}/g, s = /\(([a-zA-Z\u00C0-\u017F\d:\.,;\-\/<>\[\]%_@+"'= ]+)\)/g, r = [], o = /f$/, a = /\.(\d)/, l = e?.options?.lang || vo.lang, c = e?.time || ko, m = e?.numberFormatter || lr.bind(e), d = (w = "") => {
          let v;
          return w === "true" || w !== "false" && ((v = Number(w)).toString() === w ? v : nr(w) ? w.slice(1, -1) : wo(w, t));
        }, f, x, y = 0, M;
        for (; (f = i.exec(h)) !== null; ) {
          let w = f, v = s.exec(f[1]);
          v && (f = v, M = !0), x?.isBlock || (x = { ctx: t, expression: f[1], find: f[0], isBlock: f[1].charAt(0) === "#", start: f.index, startInner: f.index + f[0].length, length: f[0].length });
          let T = (x.isBlock ? w : f)[1].split(" ")[0].replace("#", "");
          ms[T] && (x.isBlock && T === x.fn && y++, x.fn || (x.fn = T));
          let S = f[1] === "else";
          if (x.isBlock && x.fn && (f[1] === `/${x.fn}` || S)) if (y) !S && y--;
          else {
            let O = x.startInner, L = h.substr(O, f.index - O);
            x.body === void 0 ? (x.body = L, x.startInner = f.index + f[0].length) : x.elseBody = L, x.find += L + f[0], S || (r.push(x), x = void 0);
          }
          else x.isBlock || r.push(x);
          if (v && !x?.isBlock) break;
        }
        return r.forEach((w) => {
          let v, T, { body: S, elseBody: O, expression: L, fn: D } = w;
          if (D) {
            let N = [w], I = [], W = L.length, Y = 0, H;
            for (T = 0; T <= W; T++) {
              let V = L.charAt(T);
              H || V !== '"' && V !== "'" ? H === V && (H = "") : H = V, H || V !== " " && T !== W || (I.push(L.substr(Y, T - Y)), Y = T + 1);
            }
            for (T = ms[D].length; T--; ) N.unshift(d(I[T + 1]));
            v = ms[D].apply(t, N), w.isBlock && typeof v == "boolean" && (v = Pe(v ? S : O, t, e));
          } else {
            let N = nr(L) ? [L] : L.split(":"), I = (v = d(N.shift() || "")) % 1 != 0;
            if (typeof v == "number" && (N.length || I)) {
              let W = N.join(":");
              if (o.test(W) || I) {
                let Y = parseInt((W.match(a) || ["", "-1"])[1], 10);
                v !== null && (v = m(v, Y, l.decimalPoint, W.indexOf(",") > -1 ? l.thousandsSep : ""));
              } else v = c.dateFormat(W, v);
            }
            s.lastIndex = 0, s.test(w.find) && rr(v) && (v = `"${v}"`);
          }
          h = h.replace(w.find, or(v, ""));
        }), M ? Pe(h, t, e) : h;
      }
      function lr(h, t, e, i) {
        t *= 1;
        let s, r, [o, a] = (h = +h || 0).toString().split("e").map(Number), l = this?.options?.lang || vo.lang, c = (h.toString().split(".")[1] || "").split("e")[0].length, m = t, d = {};
        e ?? (e = l.decimalPoint), i ?? (i = l.thousandsSep), t === -1 ? t = Math.min(c, 20) : Mo(t) ? t && a < 0 && ((r = t + a) >= 0 ? (o = +o.toExponential(r).split("e")[0], t = r) : (o = Math.floor(o), h = t < 20 ? +(o * Math.pow(10, a)).toFixed(t) : 0, a = 0)) : t = 2, a && (t ?? (t = 2), h = o), Mo(t) && t >= 0 && (d.minimumFractionDigits = t, d.maximumFractionDigits = t), i === "" && (d.useGrouping = !1);
        let f = i || e, x = f ? "en" : this?.locale || l.locale || sn, y = JSON.stringify(d) + x;
        return s = (ar[y] ?? (ar[y] = new Intl.NumberFormat(x, d))).format(h), f && (s = s.replace(/([,\.])/g, "_$1").replace(/_\,/g, i ?? ",").replace("_.", e ?? ".")), (t || +s != 0) && (!(a < 0) || m) || (s = "0"), a && +s != 0 && (s += "e" + (a < 0 ? "" : "+") + a), s;
      }
      let Jt = { dateFormat: function(h, t, e) {
        return ko.dateFormat(h, t, e);
      }, format: Pe, helpers: ms, numberFormat: lr };
      (function(h) {
        let t;
        h.rendererTypes = {}, h.getRendererType = function(e = t) {
          return h.rendererTypes[e] || h.rendererTypes[t];
        }, h.registerRendererType = function(e, i, s) {
          h.rendererTypes[e] = i, (!t || s) && (t = e, X.Renderer = i);
        };
      })(Vt || (Vt = {}));
      let zi = Vt, { clamp: an, pick: nn, pushUnique: ln, stableSort: hr } = $;
      (Dt || (Dt = {})).distribute = function h(t, e, i) {
        let s = t, r = s.reducedLen || e, o = (S, O) => S.target - O.target, a = [], l = t.length, c = [], m = a.push, d, f, x, y = !0, M, w, v = 0, T;
        for (d = l; d--; ) v += t[d].size;
        if (v > r) {
          for (hr(t, (S, O) => (O.rank || 0) - (S.rank || 0)), x = (T = t[0].rank === t[t.length - 1].rank) ? l / 2 : -1, f = T ? x : l - 1; x && v > r; ) M = t[d = Math.floor(f)], ln(c, d) && (v -= M.size), f += x, T && f >= t.length && (x /= 2, f = x);
          c.sort((S, O) => O - S).forEach((S) => m.apply(a, t.splice(S, 1)));
        }
        for (hr(t, o), t = t.map((S) => ({ size: S.size, targets: [S.target], align: nn(S.align, 0.5) })); y; ) {
          for (d = t.length; d--; ) M = t[d], w = (Math.min.apply(0, M.targets) + Math.max.apply(0, M.targets)) / 2, M.pos = an(w - M.size * M.align, 0, e - M.size);
          for (d = t.length, y = !1; d--; ) d > 0 && t[d - 1].pos + t[d - 1].size > t[d].pos && (t[d - 1].size += t[d].size, t[d - 1].targets = t[d - 1].targets.concat(t[d].targets), t[d - 1].align = 0.5, t[d - 1].pos + t[d - 1].size > e && (t[d - 1].pos = e - t[d - 1].size), t.splice(d, 1), y = !0);
        }
        return m.apply(s, a), d = 0, t.some((S) => {
          let O = 0;
          return (S.targets || []).some(() => (s[d].pos = S.pos + O, i !== void 0 && Math.abs(s[d].pos - s[d].target) > i ? (s.slice(0, d + 1).forEach((L) => delete L.pos), s.reducedLen = (s.reducedLen || e) - 0.1 * e, s.reducedLen > 0.1 * e && h(s, e, i), !0) : (O += s[d].size, d++, !1)));
        }), hr(s, o), s;
      };
      let fs = Dt, { animate: hn, animObject: cn, stop: Ao } = Rt, { deg2rad: To, doc: ei, svg: So, SVG_NS: di, win: Eo, isFirefox: Po } = X, { addEvent: dn, attr: cr, createElement: dr, crisp: xs, css: Oo, defined: be, erase: Lo, extend: Fi, fireEvent: ur, getAlignFactor: pr, isArray: un, isFunction: pn, isNumber: Rl, isObject: gn, isString: Do, merge: gr, objectEach: ui, pick: Oe, pInt: Hi, pushUnique: mn, replaceNested: fn, syncTimeout: xn, uniqueKey: Io } = $;
      class Ft {
        _defaultGetter(t) {
          let e = Oe(this[t + "Value"], this[t], this.element ? this.element.getAttribute(t) : null, 0);
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
          l && (a && mn(o, this), i = void 0);
          let c = Oe(i, r[l], r), m = (c.x || 0) + (t.x || 0) + ((c.width || 0) - (t.width || 0)) * pr(t.align), d = (c.y || 0) + (t.y || 0) + ((c.height || 0) - (t.height || 0)) * pr(t.verticalAlign), f = { "text-align": t?.align };
          return f[e ? "translateX" : "x"] = Math.round(m), f[e ? "translateY" : "y"] = Math.round(d), s && (this[this.placed ? "animate" : "attr"](f), this.placed = !0), this.alignAttr = f, this;
        }
        alignSetter(t) {
          let e = { left: "start", center: "middle", right: "end" };
          e[t] && (this.alignValue = t, this.element.setAttribute("text-anchor", e[t]));
        }
        animate(t, e, i) {
          let s = cn(Oe(e, this.renderer.globalAnimation, !0)), r = s.defer;
          return ei.hidden && (s.duration = 0), s.duration !== 0 ? (i && (s.complete = i), xn(() => {
            this.element && hn(this, t, s);
          }, r)) : (this.attr(t, void 0, i || s.complete), ui(t, function(o, a) {
            s.step && s.step.call(this, o, { prop: a, pos: 1, elem: this });
          }, this)), this;
        }
        applyTextOutline(t) {
          let e = this.element;
          t.indexOf("contrast") !== -1 && (t = t.replace(/contrast/g, this.renderer.getContrast(e.style.fill)));
          let i = t.indexOf(" "), s = t.substring(i + 1), r = t.substring(0, i);
          if (r && r !== "none" && X.svg) {
            this.fakeTS = !0, r = r.replace(/(^[\d\.]+)(.*?)$/g, function(m, d, f) {
              return 2 * Number(d) + f;
            }), this.removeTextOutline();
            let o = ei.createElementNS(di, "tspan");
            cr(o, { class: "highcharts-text-outline", fill: s, stroke: s, "stroke-width": r, "stroke-linejoin": "round" });
            let a = e.querySelector("textPath") || e;
            [].forEach.call(a.childNodes, (m) => {
              let d = m.cloneNode(!0);
              d.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((f) => d.removeAttribute(f)), o.appendChild(d);
            });
            let l = 0;
            [].forEach.call(a.querySelectorAll("text tspan"), (m) => {
              l += Number(m.getAttribute("dy"));
            });
            let c = ei.createElementNS(di, "tspan");
            c.textContent = "​", cr(c, { x: Number(e.getAttribute("x")), dy: -l }), o.appendChild(c), a.insertBefore(o, a.firstChild);
          }
        }
        attr(t, e, i, s) {
          let { element: r } = this, o = Ft.symbolCustomAttribs, a, l, c = this, m;
          return typeof t == "string" && e !== void 0 && (a = t, (t = {})[a] = e), typeof t == "string" ? c = (this[t + "Getter"] || this._defaultGetter).call(this, t, r) : (ui(t, function(d, f) {
            m = !1, s || Ao(this, f), this.symbolName && o.indexOf(f) !== -1 && (l || (this.symbolAttr(t), l = !0), m = !0), this.rotation && (f === "x" || f === "y") && (this.doTransform = !0), m || (this[f + "Setter"] || this._defaultSetter).call(this, d, f, r);
          }, this), this.afterSetters()), i && i.call(this), c;
        }
        clip(t) {
          if (t && !t.clipPath) {
            let e = Io() + "-", i = this.renderer.createElement("clipPath").attr({ id: e }).add(this.renderer.defs);
            Fi(t, { clipPath: i, id: e, count: 0 }), t.add(i);
          }
          return this.attr("clip-path", t ? `url(${this.renderer.url}#${t.id})` : "none");
        }
        crisp(t, e) {
          e = Math.round(e || t.strokeWidth || 0);
          let i = t.x || this.x || 0, s = t.y || this.y || 0, r = (t.width || this.width || 0) + i, o = (t.height || this.height || 0) + s, a = xs(i, e), l = xs(s, e);
          return Fi(t, { x: a, y: l, width: xs(r, e) - a, height: xs(o, e) - l }), be(t.strokeWidth) && (t.strokeWidth = e), t;
        }
        complexColor(t, e, i) {
          let s = this.renderer, r, o, a, l, c, m, d, f, x, y, M = [], w;
          ur(this.renderer, "complexColor", { args: arguments }, function() {
            if (t.radialGradient ? o = "radialGradient" : t.linearGradient && (o = "linearGradient"), o) {
              if (a = t[o], c = s.gradients, m = t.stops, x = i.radialReference, un(a) && (t[o] = a = { x1: a[0], y1: a[1], x2: a[2], y2: a[3], gradientUnits: "userSpaceOnUse" }), o === "radialGradient" && x && !be(a.gradientUnits) && (l = a, a = gr(a, s.getRadialAttr(x, l), { gradientUnits: "userSpaceOnUse" })), ui(a, function(v, T) {
                T !== "id" && M.push(T, v);
              }), ui(m, function(v) {
                M.push(v);
              }), c[M = M.join(",")]) y = c[M].attr("id");
              else {
                a.id = y = Io();
                let v = c[M] = s.createElement(o).attr(a).add(s.defs);
                v.radAttr = l, v.stops = [], m.forEach(function(T) {
                  T[1].indexOf("rgba") === 0 ? (d = (r = yt.parse(T[1])).get("rgb"), f = r.get("a")) : (d = T[1], f = 1);
                  let S = s.createElement("stop").attr({ offset: T[0], "stop-color": d, "stop-opacity": f }).add(v);
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
          if (e && ui(t, function(a, l) {
            e && e[l] !== a && (i[l] = a, o = !0);
          }), o) {
            e && (t = Fi(e, i)), t.width === null || t.width === "auto" ? delete this.textWidth : s.nodeName.toLowerCase() === "text" && t.width && (r = this.textWidth = Hi(t.width)), Fi(this.styles, t), r && !So && this.renderer.forExport && delete t.width;
            let a = Po && t.fontSize || null;
            a && (Rl(a) || /^\d+$/.test(a)) && (t.fontSize += "px");
            let l = gr(t);
            s.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "whiteSpace", "width"].forEach((c) => l && delete l[c]), l.color && (l.fill = l.color, delete l.color)), Oo(s, l);
          }
          return this.added && (this.element.nodeName === "text" && this.renderer.buildText(this), t.textOutline && this.applyTextOutline(t.textOutline)), this;
        }
        dashstyleSetter(t) {
          let e, i = this["stroke-width"];
          if (i === "inherit" && (i = 1), t) {
            let s = (t = t.toLowerCase()).replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
            for (e = s.length; e--; ) s[e] = "" + Hi(s[e]) * Oe(i, NaN);
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
          t.alignOptions && Lo(i.alignedObjects, t), ui(t, (l, c) => {
            (t[c]?.parentGroup === t || ["connector", "foreignObject"].indexOf(c) !== -1) && t[c]?.destroy?.(), delete t[c];
          });
        }
        dSetter(t, e, i) {
          un(t) && (typeof t[0] == "string" && (t = this.renderer.pathToSegments(t)), this.pathArray = t, t = t.reduce((s, r, o) => r?.join ? (o ? s + " " : "") + r.join(" ") : (r || "").toString(), "")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t);
        }
        fillSetter(t, e, i) {
          typeof t == "string" ? i.setAttribute(e, t) : t && this.complexColor(t, e, i);
        }
        hrefSetter(t, e, i) {
          i.setAttributeNS("http://www.w3.org/1999/xlink", e, t);
        }
        getBBox(t, e) {
          let i, s, r, o, { alignValue: a, element: l, renderer: c, styles: m, textStr: d } = this, { cache: f, cacheKeys: x } = c, y = l.namespaceURI === this.SVG_NS, M = Oe(e, this.rotation, 0), w = c.styledMode ? l && Ft.prototype.getStyle.call(l, "font-size") : m.fontSize;
          if (be(d) && ((o = d.toString()).indexOf("<") === -1 && (o = o.replace(/\d/g, "0")), o += ["", c.rootFontSize, w, M, this.textWidth, a, m.lineClamp, m.textOverflow, m.fontWeight].join(",")), o && !t && (i = f[o]), !i || i.polygon) {
            if (y || c.forExport) {
              try {
                r = this.fakeTS && function(T) {
                  let S = l.querySelector(".highcharts-text-outline");
                  S && Oo(S, { display: T });
                }, pn(r) && r("none"), i = l.getBBox ? Fi({}, l.getBBox()) : { width: l.offsetWidth, height: l.offsetHeight, x: 0, y: 0 }, pn(r) && r("");
              } catch {
              }
              (!i || i.width < 0) && (i = { x: 0, y: 0, width: 0, height: 0 });
            } else i = this.htmlGetBBox();
            s = i.height, y && (i.height = s = { "11px,17": 14, "13px,20": 16 }[`${w || ""},${Math.round(s)}`] || s), M && (i = this.getRotatedBox(i, M));
            let v = { bBox: i };
            ur(this, "afterGetBBox", v), i = v.bBox;
          }
          if (o && (d === "" || i.height > 0)) {
            for (; x.length > 250; ) delete f[x.shift()];
            f[o] || x.push(o), f[o] = i;
          }
          return i;
        }
        getRotatedBox(t, e) {
          let { x: i, y: s, width: r, height: o } = t, { alignValue: a, translateY: l, rotationOriginX: c = 0, rotationOriginY: m = 0 } = this, d = pr(a), f = Number(this.element.getAttribute("y") || 0) - (l ? 0 : s), x = e * To, y = (e - 90) * To, M = Math.cos(x), w = Math.sin(x), v = r * M, T = r * w, S = Math.cos(y), O = Math.sin(y), [[L, D], [N, I]] = [c, m].map((st) => [st - st * M, st * w]), W = i + d * (r - v) + L + I + f * S, Y = W + v, H = Y - o * S, V = H - v, Z = s + f - d * T - D + N + f * O, J = Z + T, j = J - o * O, q = j - T, _ = Math.min(W, Y, H, V), vt = Math.min(Z, J, j, q), ct = Math.max(W, Y, H, V) - _, ie = Math.max(Z, J, j, q) - vt;
          return { x: _, y: vt, width: ct, height: ie, polygon: [[W, Z], [Y, J], [H, j], [V, q]] };
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
          this.onEvents = {}, this.opacity = 1, this.SVG_NS = di, this.element = e === "span" || e === "body" ? dr(e) : ei.createElementNS(this.SVG_NS, e), this.renderer = t, this.styles = {}, ur(this, "afterInit");
        }
        on(t, e) {
          let { onEvents: i } = this;
          return i[t] && i[t](), i[t] = dn(this.element, t, e), this;
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
          let { renderer: e } = this, i = gr(this.parentGroup?.rotation === 90 ? { offsetX: -1, offsetY: -1 } : {}, gn(t) ? t : {}), s = e.shadowDefinition(i);
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
          return /px$/.test(t) ? e = Hi(t) : t !== "" && (cr(i = ei.createElementNS(di, "rect"), { width: t, "stroke-width": 0 }), this.element.parentNode.appendChild(i), e = i.getBBox().width, i.parentNode.removeChild(i)), e;
        }
        symbolAttr(t) {
          let e = this;
          Ft.symbolCustomAttribs.forEach(function(i) {
            e[i] = Oe(t[i], e[i]);
          }), e.attr({ d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e) });
        }
        textSetter(t) {
          t !== this.textStr && (delete this.textPxLength, this.textStr = t, this.added && this.renderer.buildText(this), this.reAlign());
        }
        titleSetter(t) {
          let e = this.element, i = e.getElementsByTagName("title")[0] || ei.createElementNS(this.SVG_NS, "title");
          e.insertBefore ? e.insertBefore(i, e.firstChild) : e.appendChild(i), i.textContent = fn(Oe(t, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        }
        toFront() {
          let t = this.element;
          return t.parentNode.appendChild(t), this;
        }
        translate(t, e) {
          return this.attr({ translateX: t, translateY: e });
        }
        updateTransform(t = "transform") {
          let { element: e, foreignObject: i, matrix: s, padding: r, rotation: o = 0, rotationOriginX: a, rotationOriginY: l, scaleX: c, scaleY: m, text: d, translateX: f = 0, translateY: x = 0 } = this, y = ["translate(" + f + "," + x + ")"];
          be(s) && y.push("matrix(" + s.join(",") + ")"), o && (y.push("rotate(" + o + " " + (a ?? e.getAttribute("x") ?? this.x ?? 0) + " " + (l ?? e.getAttribute("y") ?? this.y ?? 0) + ")"), d?.element.tagName !== "SPAN" || d?.foreignObject || d.attr({ rotation: o, rotationOriginX: (a || 0) - r, rotationOriginY: (l || 0) - r })), (be(c) || be(m)) && y.push("scale(" + Oe(c, 1) + " " + Oe(m, 1) + ")"), y.length && !(d || this).textPath && (i?.element || e).setAttribute(t, y.join(" "));
        }
        visibilitySetter(t, e, i) {
          t === "inherit" ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t;
        }
        xGetter(t) {
          return this.element.nodeName === "circle" && (t === "x" ? t = "cx" : t === "y" && (t = "cy")), this._defaultGetter(t);
        }
        zIndexSetter(t, e) {
          let i = this.renderer, s = this.parentGroup, r = (s || i).element || i.box, o = this.element, a = r === i.box, l, c, m, d = !1, f, x = this.added, y;
          if (be(t) ? (o.setAttribute("data-z-index", t), t *= 1, this[e] === t && (x = !1)) : be(this[e]) && o.removeAttribute("data-z-index"), this[e] = t, x) {
            for ((t = this.zIndex) && s && (s.handleZ = !0), y = (l = r.childNodes).length - 1; y >= 0 && !d; y--) f = !be(m = (c = l[y]).getAttribute("data-z-index")), c !== o && (t < 0 && f && !a && !y ? (r.insertBefore(o, l[y]), d = !0) : (Hi(m) <= t || f && (!be(t) || t >= 0)) && (r.insertBefore(o, l[y + 1]), d = !0));
            d || (r.insertBefore(o, l[3 * !!a]), d = !0);
          }
          return d;
        }
      }
      Ft.symbolCustomAttribs = ["anchorX", "anchorY", "clockwise", "end", "height", "innerR", "r", "start", "width", "x", "y"], Ft.prototype.strokeSetter = Ft.prototype.fillSetter, Ft.prototype.yGetter = Ft.prototype.xGetter, Ft.prototype.matrixSetter = Ft.prototype.rotationOriginXSetter = Ft.prototype.rotationOriginYSetter = Ft.prototype.rotationSetter = Ft.prototype.scaleXSetter = Ft.prototype.scaleYSetter = Ft.prototype.translateXSetter = Ft.prototype.translateYSetter = Ft.prototype.verticalAlignSetter = function(h, t) {
        this[t] = h, this.doTransform = !0;
      };
      let ge = Ft, { defined: Bo, extend: bn, getAlignFactor: No, isNumber: Wi, merge: bs, pick: Xi, removeEvent: Ge } = $;
      class Ye extends ge {
        constructor(t, e, i, s, r, o, a, l, c, m) {
          let d;
          super(t, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.doUpdate = !1, this.textStr = e, this.x = i, this.y = s, this.anchorX = o, this.anchorY = a, this.baseline = c, this.className = m, this.addClass(m === "button" ? "highcharts-no-tooltip" : "highcharts-label"), m && this.addClass("highcharts-" + m), this.text = t.text(void 0, 0, 0, l).attr({ zIndex: 1 }), typeof r == "string" && ((d = /^url\((.*?)\)$/.test(r)) || this.renderer.symbols[r]) && (this.symbolKey = r), this.bBox = Ye.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t.styledMode || d, this.deferredAttr = {}, this.alignFactor = 0;
        }
        alignSetter(t) {
          let e = No(t);
          this.textAlign = t, e !== this.alignFactor && (this.alignFactor = e, this.bBox && Wi(this.xSetting) && this.attr({ x: this.xSetting }));
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
            t = bs(t), Ye.textProps.forEach((i) => {
              t[i] !== void 0 && (e[i] = t[i], delete t[i]);
            }), this.text.css(e), "fontSize" in e || "fontWeight" in e ? this.updateTextPadding() : ("width" in e || "textOverflow" in e) && this.updateBoxSize();
          }
          return ge.prototype.css.call(this, t);
        }
        destroy() {
          Ge(this.element, "mouseenter"), Ge(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), ge.prototype.destroy.call(this);
        }
        fillSetter(t, e) {
          t && (this.needsBox = !0), this.fill = t, this.boxAttr(e, t);
        }
        getBBox(t, e) {
          this.textStr && this.bBox.width === 0 && this.bBox.height === 0 && this.updateBoxSize();
          let { padding: i, height: s = 0, translateX: r = 0, translateY: o = 0, width: a = 0 } = this, l = Xi(this.paddingLeft, i), c = e ?? (this.rotation || 0), m = { width: a, height: s, x: r + this.bBox.x - l, y: o + this.bBox.y - i + this.baselineOffset };
          return c && (m = this.getRotatedBox(m, c)), m;
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
          this.text.add(this), this.attr({ text: Xi(this.textStr, ""), x: this.x || 0, y: this.y || 0 }), this.box && Bo(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
        }
        paddingSetter(t, e) {
          Wi(t) ? t !== this[e] && (this[e] = t, this.updateTextPadding()) : this[e] = void 0;
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
          let t, e = this.text, i = {}, s = this.padding, r = this.bBox = (!Wi(this.widthSetting) || !Wi(this.heightSetting) || this.textAlign) && Bo(e.textStr) ? e.getBBox(void 0, 0) : Ye.emptyBBox;
          this.width = this.getPaddedWidth(), this.height = (this.heightSetting || r.height || 0) + 2 * s;
          let o = this.renderer.fontMetrics(e);
          if (this.baselineOffset = s + Math.min((this.text.firstLineMetrics || o).b, r.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - o.h) / 2), this.needsBox && !e.textPath) {
            if (!this.box) {
              let a = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
              a.addClass((this.className === "button" ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), a.add(this);
            }
            i.x = t = this.getCrispAdjust(), i.y = (this.baseline ? -this.baselineOffset : 0) + t, i.width = Math.round(this.width), i.height = Math.round(this.height), this.box.attr(bn(i, this.deferredAttr)), this.deferredAttr = {};
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
          this.widthSetting = Wi(t) ? t : void 0, this.doUpdate = !0;
        }
        getPaddedWidth() {
          let t = this.padding, e = Xi(this.paddingLeft, t), i = Xi(this.paddingRight, t);
          return (this.widthSetting || this.bBox.width || 0) + e + i;
        }
        xSetter(t) {
          this.x = t, this.alignFactor && (t -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.anchorX && (this["forceAnimate:anchorX"] = !0), this.xSetting = Math.round(t), this.attr("translateX", this.xSetting);
        }
        ySetter(t) {
          this.anchorY && (this["forceAnimate:anchorY"] = !0), this.ySetting = this.y = Math.round(t), this.attr("translateY", this.ySetting);
        }
      }
      Ye.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }, Ye.textProps = ["color", "direction", "fontFamily", "fontSize", "fontStyle", "fontWeight", "lineClamp", "lineHeight", "textAlign", "textDecoration", "textOutline", "textOverflow", "whiteSpace", "width"];
      let { defined: Ro, isNumber: yn, pick: ii } = $;
      function mr(h, t, e, i, s) {
        let r = [];
        if (s) {
          let o = s.start || 0, a = s.end || 0, l = ii(s.r, e), c = ii(s.r, i || e), m = 2e-4 / (s.borderRadius ? 1 : Math.max(l, 1)), d = Math.abs(a - o - 2 * Math.PI) < m;
          d && (o = Math.PI / 2, a = 2.5 * Math.PI - m);
          let f = s.innerR, x = ii(s.open, d), y = Math.cos(o), M = Math.sin(o), w = Math.cos(a), v = Math.sin(a), T = ii(s.longArc, a - o - Math.PI < m ? 0 : 1), S = ["A", l, c, 0, T, ii(s.clockwise, 1), h + l * w, t + c * v];
          S.params = { start: o, end: a, cx: h, cy: t }, r.push(["M", h + l * y, t + c * M], S), Ro(f) && ((S = ["A", f, f, 0, T, Ro(s.clockwise) ? 1 - s.clockwise : 0, h + f * y, t + f * M]).params = { start: a, end: o, cx: h, cy: t }, r.push(x ? ["M", h + f * w, t + f * v] : ["L", h + f * w, t + f * v], S)), x || r.push(["Z"]);
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
      let je = { arc: mr, callout: function(h, t, e, i, s) {
        let r = Math.min(s?.r || 0, e, i), o = r + 6, a = s?.anchorX, l = s?.anchorY || 0, c = fr(h, t, e, i, { r });
        if (!yn(a) || a < e && a > 0 && l < i && l > 0) return c;
        if (h + a > e - o) if (l > t + o && l < t + i - o) c.splice(3, 1, ["L", h + e, l - 6], ["L", h + e + 6, l], ["L", h + e, l + 6], ["L", h + e, t + i - r]);
        else if (a < e) {
          let m = l < t + o, d = m ? t : t + i;
          c.splice(m ? 2 : 5, 0, ["L", a, l], ["L", h + e - r, d]);
        } else c.splice(3, 1, ["L", h + e, i / 2], ["L", a, l], ["L", h + e, i / 2], ["L", h + e, t + i - r]);
        else if (h + a < o) if (l > t + o && l < t + i - o) c.splice(7, 1, ["L", h, l + 6], ["L", h - 6, l], ["L", h, l - 6], ["L", h, t + r]);
        else if (a > 0) {
          let m = l < t + o, d = m ? t : t + i;
          c.splice(m ? 1 : 6, 0, ["L", a, l], ["L", h + r, d]);
        } else c.splice(7, 1, ["L", h, i / 2], ["L", a, l], ["L", h, i / 2], ["L", h, t + r]);
        else l > i && a < e - o ? c.splice(5, 1, ["L", a + 6, t + i], ["L", a, t + i + 6], ["L", a - 6, t + i], ["L", h + r, t + i]) : l < 0 && a > o && c.splice(1, 1, ["L", a - 6, t], ["L", a, t - 6], ["L", a + 6, t], ["L", e - r, t]);
        return c;
      }, circle: function(h, t, e, i) {
        return mr(h + e / 2, t + i / 2, e / 2, i / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: !1 });
      }, diamond: function(h, t, e, i) {
        return [["M", h + e / 2, t], ["L", h + e, t + i / 2], ["L", h + e / 2, t + i], ["L", h, t + i / 2], ["Z"]];
      }, rect: zo, roundedRect: fr, square: zo, triangle: function(h, t, e, i) {
        return [["M", h + e / 2, t], ["L", h + e, t + i], ["L", h, t + i], ["Z"]];
      }, "triangle-down": function(h, t, e, i) {
        return [["M", h, t], ["L", h + e, t], ["L", h + e / 2, t + i], ["Z"]];
      } }, { doc: pi, SVG_NS: Fo, win: Ho } = X, { attr: xr, extend: Gi, fireEvent: Wo, isString: Yi, objectEach: vn, pick: kn } = $, Ue = (h, t) => h.substring(0, t) + "…", wn = class {
        constructor(h) {
          let t = h.styles;
          this.renderer = h.renderer, this.svgElement = h, this.width = h.textWidth, this.textLineHeight = t?.lineHeight, this.textOutline = t?.textOutline, this.ellipsis = t?.textOverflow === "ellipsis", this.lineClamp = t?.lineClamp, this.noWrap = t?.whiteSpace === "nowrap";
        }
        buildSVG() {
          let h = this.svgElement, t = h.element, e = h.renderer, i = kn(h.textStr, "").toString(), s = i.indexOf("<") !== -1, r = t.childNodes, o = !h.added && e.box, a = [i, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, h.getStyle("font-size"), h.styles.lineClamp, this.width].join(",");
          if (a !== h.textCache) {
            h.textCache = a, delete h.actualWidth;
            for (let l = r.length; l--; ) t.removeChild(r[l]);
            if (s || this.ellipsis || this.width || h.textPath || i.indexOf(" ") !== -1 && (!this.noWrap || /<br.*?>/g.test(i))) {
              if (i !== "") {
                o && o.appendChild(t);
                let l = new Ct(i);
                this.modifyTree(l.nodes), l.addToDOM(t), this.modifyDOM(), this.ellipsis && (t.textContent || "").indexOf("…") !== -1 && h.attr("title", this.unescapeEntities(h.textStr || "", ["&lt;", "&gt;"])), o && o.removeChild(t);
              }
            } else t.appendChild(pi.createTextNode(this.unescapeEntities(i)));
            Yi(this.textOutline) && h.applyTextOutline && h.applyTextOutline(this.textOutline);
          }
        }
        modifyDOM() {
          let h, t = this.svgElement, e = xr(t.element, "x");
          for (t.firstLineMetrics = void 0; (h = t.element.firstChild) && /^[\s\u200B]*$/.test(h.textContent || " "); ) t.element.removeChild(h);
          [].forEach.call(t.element.querySelectorAll("tspan.highcharts-br"), (o, a) => {
            o.nextSibling && o.previousSibling && (a === 0 && o.previousSibling.nodeType === 1 && (t.firstLineMetrics = t.renderer.fontMetrics(o.previousSibling)), xr(o, { dy: this.getLineHeight(o.nextSibling), x: e }));
          });
          let i = this.width || 0;
          if (!i) return;
          let s = (o, a) => {
            let l = o.textContent || "", c = l.replace(/([^\^])-/g, "$1- ").split(" "), m = !this.noWrap && (c.length > 1 || t.element.childNodes.length > 1), d = this.getLineHeight(a), f = Math.max(0, i - 0.8 * d), x = 0, y = t.actualWidth;
            if (m) {
              let M = [], w = [];
              for (; a.firstChild && a.firstChild !== o; ) w.push(a.firstChild), a.removeChild(a.firstChild);
              for (; c.length; ) if (c.length && !this.noWrap && x > 0 && (M.push(o.textContent || ""), o.textContent = c.join(" ").replace(/- /g, "-")), this.truncate(o, void 0, c, x === 0 && y || 0, i, f, (v, T) => c.slice(0, T).join(" ").replace(/- /g, "-")), y = t.actualWidth, x++, this.lineClamp && x >= this.lineClamp) {
                c.length && (this.truncate(o, o.textContent || "", void 0, 0, i, f, Ue), o.textContent = o.textContent?.replace("…", "") + "…");
                break;
              }
              w.forEach((v) => {
                a.insertBefore(v, o);
              }), M.forEach((v) => {
                a.insertBefore(pi.createTextNode(v), o);
                let T = pi.createElementNS(Fo, "tspan");
                T.textContent = "​", xr(T, { dy: d, x: e }), a.insertBefore(T, o);
              });
            } else this.ellipsis && l && this.truncate(o, l, void 0, 0, i, f, Ue);
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
            a !== "#text" && a !== "a" && (e.tagName = "tspan"), Gi(e, { attributes: s, style: o }), r && r.filter((c) => c.tagName !== "#text").forEach(t);
          };
          h.forEach(t), Wo(this.svgElement, "afterModifyTree", { nodes: h });
        }
        truncate(h, t, e, i, s, r, o) {
          let a, l, c = this.svgElement, { rotation: m } = c, d = [], f = e && !i ? 1 : 0, x = (t || e || "").length, y = x;
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
            for (; f <= x; ) y = Math.ceil((f + x) / 2), e && (a = o(e, y)), l = M(y, a && a.length - 1), f === x ? f = x + 1 : l > s ? x = y - 1 : f = y;
            x === 0 ? h.textContent = "" : t && x === t.length - 1 || (h.textContent = a || o(t || e, y)), this.ellipsis && l > s && this.truncate(h, h.textContent || "", void 0, 0, s, r, Ue);
          }
          e && e.splice(0, y), c.actualWidth = l, c.rotation = m;
        }
        unescapeEntities(h, t) {
          return vn(this.renderer.escapes, function(e, i) {
            t && t.indexOf(e) !== -1 || (h = h.toString().replace(RegExp(e, "g"), i));
          }), h;
        }
      }, { defaultOptions: Mn } = te, { charts: br, deg2rad: Xo, doc: si, isFirefox: Wt, isMS: yr, isWebKit: ys, noop: gi, SVG_NS: Cn, symbolSizes: Ve, win: vr } = X, { addEvent: vs, attr: mi, createElement: Go, crisp: me, css: Le, defined: Ht, destroyObjectProperties: ks, extend: qe, isArray: ws, isNumber: ye, isObject: ji, isString: kr, merge: wr, pick: Mr, pInt: An, replaceNested: Tn, uniqueKey: Sn } = $;
      class Ms {
        constructor(t, e, i, s, r, o, a) {
          let l, c;
          this.x = 0, this.y = 0;
          let m = this.createElement("svg").attr({ version: "1.1", class: "highcharts-root" }), d = m.element;
          a || m.css(this.getStyle(s || {})), t.appendChild(d), mi(t, "dir", "ltr"), t.innerHTML.indexOf("xmlns") === -1 && mi(d, "xmlns", this.SVG_NS), this.box = d, this.boxWrapper = m, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(si.createTextNode("Created with Highcharts 12.4.0")), this.defs = this.createElement("defs").add(), this.allowHTML = o, this.forExport = r, this.styledMode = a, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = m.getStyle("font-size"), this.setSize(e, i, !1), Wt && t.getBoundingClientRect && ((l = function() {
            Le(t, { left: 0, top: 0 }), c = t.getBoundingClientRect(), Le(t, { left: Math.ceil(c.left) - c.left + "px", top: Math.ceil(c.top) - c.top + "px" });
          })(), this.unSubPixelFix = vs(vr, "resize", l));
        }
        definition(t) {
          return new Ct([t]).addToDOM(this.defs.element);
        }
        getReferenceURL() {
          if ((Wt || ys) && si.getElementsByTagName("base").length) {
            if (!Ht(zt)) {
              let t = Sn(), e = new Ct([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: t }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": `url(#${t})`, fill: "rgba(0,0,0,0.001)" } }] }]).addToDOM(si.body);
              Le(e, { position: "fixed", top: 0, left: 0, zIndex: 9e5 }), zt = si.elementFromPoint(6, 6)?.id === "hitme", si.body.removeChild(e);
            }
            if (zt) return Tn(vr.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"]);
          }
          return "";
        }
        getStyle(t) {
          return this.style = qe({ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif', fontSize: "1rem" }, t), this.style;
        }
        setStyle(t) {
          this.boxWrapper.css(this.getStyle(t));
        }
        isHidden() {
          return !this.boxWrapper.getBBox().width;
        }
        destroy() {
          let t = this.defs;
          return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), ks(this.gradients || {}), this.gradients = null, this.defs = t.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null, null;
        }
        createElement(t) {
          return new this.Element(this, t);
        }
        getRadialAttr(t, e) {
          return { cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2], cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2], r: (e.r || 0) * t[2] };
        }
        shadowDefinition(t) {
          let e = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(t).map((s) => `${s}-${t[s]}`)].join("-").toLowerCase().replace(/[^a-z\d\-]/g, ""), i = wr({ color: "#000000", offsetX: 1, offsetY: 1, opacity: 0.15, width: 5 }, t);
          return this.defs.element.querySelector(`#${e}`) || this.definition({ tagName: "filter", attributes: { id: e, filterUnits: i.filterUnits }, children: this.getShadowFilterContent(i) }), e;
        }
        getShadowFilterContent(t) {
          return [{ tagName: "feDropShadow", attributes: { dx: t.offsetX, dy: t.offsetY, "flood-color": t.color, "flood-opacity": Math.min(5 * t.opacity, 1), stdDeviation: t.width / 2 } }];
        }
        buildText(t) {
          new wn(t).buildSVG();
        }
        getContrast(t) {
          if (t === "transparent") return "#000000";
          let e = yt.parse(t).rgba, i = " clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1)";
          if (ye(e[0]) || !yt.useColorMix) {
            let s = e.map((o) => {
              let a = o / 255;
              return a <= 0.04 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
            }), r = 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2];
            return 1.05 / (r + 0.05) > (r + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
          }
          return "color(from " + t + " srgb" + i + i + i + ")";
        }
        button(t, e, i, s, r = {}, o, a, l, c, m) {
          let d = this.label(t, e, i, c, void 0, void 0, m, void 0, "button"), f = this.styledMode, x = arguments, y = 0;
          r = wr(Mn.global.buttonTheme, r), f && (delete r.fill, delete r.stroke, delete r["stroke-width"]);
          let M = r.states || {}, w = r.style || {};
          delete r.states, delete r.style;
          let v = [Ct.filterUserAttributes(r)], T = [w];
          return f || ["hover", "select", "disabled"].forEach((S, O) => {
            v.push(wr(v[0], Ct.filterUserAttributes(x[O + 5] || M[S] || {}))), T.push(v[O + 1].style), delete v[O + 1].style;
          }), vs(d.element, yr ? "mouseover" : "mouseenter", function() {
            y !== 3 && d.setState(1);
          }), vs(d.element, yr ? "mouseout" : "mouseleave", function() {
            y !== 3 && d.setState(y);
          }), d.setState = (S = 0) => {
            if (S !== 1 && (d.state = y = S), d.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][S]), !f) {
              d.attr(v[S]);
              let O = T[S];
              ji(O) && d.css(O);
            }
          }, d.attr(v[0]), !f && (d.css(qe({ cursor: "default" }, w)), m && d.text.css({ pointerEvents: "none" })), d.on("touchstart", (S) => S.stopPropagation()).on("click", function(S) {
            y !== 3 && s?.call(d, S);
          });
        }
        crispLine(t, e) {
          let [i, s] = t;
          return Ht(i[1]) && i[1] === s[1] && (i[1] = s[1] = me(i[1], e)), Ht(i[2]) && i[2] === s[2] && (i[2] = s[2] = me(i[2], e)), t;
        }
        path(t) {
          let e = this.styledMode ? {} : { fill: "none" };
          return ws(t) ? e.d = t : ji(t) && qe(e, t), this.createElement("path").attr(e);
        }
        circle(t, e, i) {
          let s = ji(t) ? t : t === void 0 ? {} : { x: t, y: e, r: i }, r = this.createElement("circle");
          return r.xSetter = r.ySetter = function(o, a, l) {
            l.setAttribute("c" + a, o);
          }, r.attr(s);
        }
        arc(t, e, i, s, r, o) {
          let a;
          ji(t) ? (e = (a = t).y, i = a.r, s = a.innerR, r = a.start, o = a.end, t = a.x) : a = { innerR: s, start: r, end: o };
          let l = this.symbol("arc", t, e, i, i, a);
          return l.r = i, l;
        }
        rect(t, e, i, s, r, o) {
          let a = ji(t) ? t : t === void 0 ? {} : { x: t, y: e, r, width: Math.max(i || 0, 0), height: Math.max(s || 0, 0) }, l = this.createElement("rect");
          return this.styledMode || (o !== void 0 && (a["stroke-width"] = o, qe(a, l.crisp(a))), a.fill = "none"), l.rSetter = function(c, m, d) {
            l.r = c, mi(d, { rx: c, ry: c });
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
          }, duration: Mr(i, !0) ? void 0 : 0 }), this.alignElements();
        }
        g(t) {
          let e = this.createElement("g");
          return t ? e.attr({ class: "highcharts-" + t }) : e;
        }
        image(t, e, i, s, r, o) {
          let a = { preserveAspectRatio: "none" };
          ye(e) && (a.x = e), ye(i) && (a.y = i), ye(s) && (a.width = s), ye(r) && (a.height = r);
          let l = this.createElement("image").attr(a), c = function(m) {
            l.attr({ href: t }), o.call(l, m);
          };
          if (o) {
            l.attr({ href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" });
            let m = new vr.Image();
            vs(m, "load", c), m.src = t, m.complete && c({});
          } else l.attr({ href: t });
          return l;
        }
        symbol(t, e, i, s, r, o) {
          let a, l, c, m, d = this, f = /^url\((.*?)\)$/, x = f.test(t), y = !x && (this.symbols[t] ? t : "circle"), M = y && this.symbols[y];
          if (M) typeof e == "number" && (l = M.call(this.symbols, e || 0, i || 0, s || 0, r || 0, o)), a = this.path(l), d.styledMode || a.attr("fill", "none"), qe(a, { symbolName: y || void 0, x: e, y: i, width: s, height: r }), o && qe(a, o);
          else if (x) {
            c = t.match(f)[1];
            let w = a = this.image(c);
            w.imgwidth = Mr(o?.width, Ve[c]?.width), w.imgheight = Mr(o?.height, Ve[c]?.height), m = (v) => v.attr({ width: v.width, height: v.height }), ["width", "height"].forEach((v) => {
              w[`${v}Setter`] = function(T, S) {
                this[S] = T;
                let { alignByTranslate: O, element: L, width: D, height: N, imgwidth: I, imgheight: W } = this, Y = S === "width" ? I : W, H = 1;
                o && o.backgroundSize === "within" && D && N && I && W ? (H = Math.min(D / I, N / W), mi(L, { width: Math.round(I * H), height: Math.round(W * H) })) : L && Y && L.setAttribute(S, Y), !O && I && W && this.translate(((D || 0) - I * H) / 2, ((N || 0) - W * H) / 2);
              };
            }), Ht(e) && w.attr({ x: e, y: i }), w.isImg = !0, w.symbolUrl = t, Ht(w.imgwidth) && Ht(w.imgheight) ? m(w) : (w.attr({ width: 0, height: 0 }), Go("img", { onload: function() {
              let v = br[d.chartIndex];
              this.width === 0 && (Le(this, { position: "absolute", top: "-999em" }), si.body.appendChild(this)), Ve[c] = { width: this.width, height: this.height }, w.imgwidth = this.width, w.imgheight = this.height, w.element && m(w), this.parentNode && this.parentNode.removeChild(this), d.imgCount--, d.imgCount || !v || v.hasLoaded || v.onload();
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
          r.x = Math.round(e || 0), i && (r.y = Math.round(i)), Ht(t) && (r.text = t);
          let o = this.createElement("text").attr(r);
          return s && (!this.forExport || this.allowHTML) || (o.xSetter = function(a, l, c) {
            let m = c.getElementsByTagName("tspan"), d = c.getAttribute(l);
            for (let f = 0, x; f < m.length; f++) (x = m[f]).getAttribute(l) === d && x.setAttribute(l, a);
            c.setAttribute(l, a);
          }), o;
        }
        fontMetrics(t) {
          let e = ye(t) ? t : An(ge.prototype.getStyle.call(t, "font-size") || 0), i = e < 24 ? e + 3 : Math.round(1.2 * e), s = Math.round(0.8 * i);
          return { h: i, b: s, f: e };
        }
        rotCorr(t, e, i) {
          let s = t;
          return e && i && (s = Math.max(s * Math.cos(e * Xo), 4)), { x: -t / 3 * Math.sin(e * Xo), y: s };
        }
        pathToSegments(t) {
          let e = [], i = [], s = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 };
          for (let r = 0; r < t.length; r++) kr(i[0]) && ye(t[r]) && i.length === s[i[0].toUpperCase()] && t.splice(r, 0, i[0].replace("M", "L").replace("m", "l")), typeof t[r] == "string" && (i.length && e.push(i.slice(0)), i.length = 0), i.push(t[r]);
          return e.push(i.slice(0)), e;
        }
        label(t, e, i, s, r, o, a, l, c) {
          return new Ye(this, t, e, i, s, r, o, a, l, c);
        }
        alignElements() {
          this.alignedObjects.forEach((t) => t.align());
        }
      }
      qe(Ms.prototype, { Element: ge, SVG_NS: Cn, escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, symbols: je, draw: gi }), zi.registerRendererType("svg", Ms, !0);
      let { composed: En, isFirefox: Pn } = X, { attr: On, css: Ke, createElement: Ln, defined: Yo, extend: Cs, getAlignFactor: Dn, isNumber: As, pInt: jo, pushUnique: In } = $;
      function Uo(h, t, e) {
        let i = this.div?.style;
        ge.prototype[`${t}Setter`].call(this, h, t, e), i && (e.style[t] = i[t] = h);
      }
      let Vo = (h, t) => {
        if (!h.div) {
          let e = On(h.element, "class"), i = h.css, s = Ln("div", e ? { className: e } : void 0, { position: "absolute", left: `${h.translateX || 0}px`, top: `${h.translateY || 0}px`, ...h.styles, display: h.display, opacity: h.opacity, visibility: h.visibility }, h.parentGroup?.div || t);
          h.classSetter = (r, o, a) => {
            a.setAttribute("class", r), s.className = r;
          }, h.translateXSetter = h.translateYSetter = (r, o) => {
            h[o] = r, s.style[o === "translateX" ? "left" : "top"] = `${r}px`, h.doTransform = !0;
          }, h.scaleXSetter = h.scaleYSetter = (r, o) => {
            h[o] = r, h.doTransform = !0;
          }, h.opacitySetter = h.visibilitySetter = Uo, h.css = (r) => (i.call(h, r), r.cursor && (s.style.cursor = r.cursor), r.pointerEvents && (s.style.pointerEvents = r.pointerEvents), h), h.on = function() {
            return ge.prototype.on.apply({ element: s, onEvents: h.onEvents }, arguments), h;
          }, h.div = s;
        }
        return h.div;
      };
      class le extends ge {
        static compose(t) {
          In(En, this.compose) && (t.prototype.html = function(e, i, s) {
            return new le(this, "span").attr({ text: e, x: Math.round(i), y: Math.round(s) });
          });
        }
        constructor(t, e) {
          super(t, e), le.useForeignObject ? this.foreignObject = t.createElement("foreignObject").attr({ zIndex: 2 }) : this.css({ position: "absolute", ...t.styledMode ? {} : { fontFamily: t.style.fontFamily, fontSize: t.style.fontSize } }), this.element.style.whiteSpace = "nowrap";
        }
        getSpanCorrection(t, e, i) {
          this.xCorr = -t * i, this.yCorr = -e;
        }
        css(t) {
          let e, { element: i } = this, s = i.tagName === "SPAN" && t && "width" in t, r = s && t.width;
          return s && (delete t.width, this.textWidth = jo(r) || void 0, e = !0), t?.textOverflow === "ellipsis" && (t.overflow = "hidden", t.whiteSpace = "nowrap"), t?.lineClamp && (t.display = "-webkit-box", t.WebkitLineClamp = t.lineClamp, t.WebkitBoxOrient = "vertical", t.overflow = "hidden"), As(Number(t?.fontSize)) && (t.fontSize += "px"), Cs(this.styles, t), Ke(i, t), e && this.updateTransform(), this;
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
          let { element: t, foreignObject: e, oldTextWidth: i, renderer: s, rotation: r, rotationOriginX: o, rotationOriginY: a, scaleX: l, scaleY: c, styles: { display: m = "inline-block", whiteSpace: d }, textAlign: f = "left", textWidth: x, translateX: y = 0, translateY: M = 0, x: w = 0, y: v = 0 } = this;
          if (e || Ke(t, { marginLeft: `${y}px`, marginTop: `${M}px` }), t.tagName === "SPAN") {
            let T, S = [r, f, t.innerHTML, x, this.textAlign].join(","), O = -(this.parentGroup?.padding * 1) || 0;
            if (x !== i) {
              let I = this.textPxLength ? this.textPxLength : (Ke(t, { width: "", whiteSpace: d || "nowrap" }), t.offsetWidth), W = x || 0, Y = !s.styledMode && t.style.textOverflow === "" && t.style.webkitLineClamp;
              (W > i || I > W || Y) && (/[\-\s\u00AD]/.test(t.textContent || t.innerText) || t.style.textOverflow === "ellipsis") && (Ke(t, { width: (r || l || I > W || Y) && As(x) ? x + "px" : "auto", display: m, whiteSpace: d || "normal" }), this.oldTextWidth = x);
            }
            e && (Ke(t, { display: "inline-block", verticalAlign: "top" }), e.attr({ width: s.width, height: s.height })), S !== this.cTT && (T = s.fontMetrics(t).b, Yo(r) && !e && (r !== (this.oldRotation || 0) || f !== this.oldAlign) && Ke(t, { transform: `rotate(${r}deg)`, transformOrigin: `${O}% ${O}px` }), this.getSpanCorrection(!Yo(r) && !this.textWidth && this.textPxLength || t.offsetWidth, T, Dn(f)));
            let { xCorr: L = 0, yCorr: D = 0 } = this, N = { left: `${w + L}px`, top: `${v + D}px`, textAlign: f, transformOrigin: `${(o ?? w) - L - w - O}px ${(a ?? v) - D - v - O}px` };
            (l || c) && (N.transform = `scale(${l ?? 1},${c ?? 1})`), e ? (super.updateTransform(), As(w) && As(v) ? (e.attr({ x: w + L, y: v + D, width: t.offsetWidth + 3, height: t.offsetHeight, "transform-origin": t.getAttribute("transform-origin") || "0 0" }), Ke(t, { display: m, textAlign: f })) : Pn && e.attr({ width: 0, height: 0 })) : Ke(t, N), this.cTT = S, this.oldRotation = r, this.oldAlign = f;
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
          t !== this.textStr && (delete this.bBox, delete this.oldTextWidth, Ct.setElementHTML(this.element, t ?? ""), this.textStr = t, this.doTransform = !0);
        }
        alignSetter(t) {
          this.alignValue = this.textAlign = t, this.doTransform = !0;
        }
        xSetter(t, e) {
          this[e] = t, this.doTransform = !0;
        }
      }
      let ve = le.prototype;
      ve.visibilitySetter = ve.opacitySetter = Uo, ve.ySetter = ve.rotationSetter = ve.rotationOriginXSetter = ve.rotationOriginYSetter = ve.xSetter, (function(h) {
        h.xAxis = { alignTicks: !0, allowDecimals: void 0, panningEnabled: !0, zIndex: 2, zoomEnabled: !0, dateTimeLabelFormats: { millisecond: { main: "%[HMSL]", range: !1 }, second: { main: "%[HMS]", range: !1 }, minute: { main: "%[HM]", range: !1 }, hour: { main: "%[HM]", range: !1 }, day: { main: "%[eb]" }, week: { main: "%[eb]" }, month: { main: "%[bY]" }, year: { main: "%Y" } }, endOnTick: !1, gridLineDashStyle: "Solid", gridZIndex: 1, labels: { autoRotationLimit: 80, distance: 15, enabled: !0, indentation: 10, overflow: "justify", reserveSpace: void 0, rotation: void 0, staggerLines: 0, step: 0, useHTML: !1, zIndex: 7, style: { color: "#333333", cursor: "default", fontSize: "0.8em", textOverflow: "ellipsis" } }, maxPadding: 0.01, minorGridLineDashStyle: "Solid", minorTickLength: 2, minorTickPosition: "outside", minorTicksPerMajor: 5, minPadding: 0.01, offset: void 0, reversed: void 0, reversedStacks: !1, showEmpty: !0, showFirstLabel: !0, showLastLabel: !0, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", useHTML: !1, x: 0, y: 0, style: { color: "#666666", fontSize: "0.8em" } }, visible: !0, minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#333333", lineWidth: 1, gridLineColor: "#e6e6e6", gridLineWidth: void 0, tickColor: "#333333" }, h.yAxis = { reversedStacks: !0, endOnTick: !0, maxPadding: 0.05, minPadding: 0.05, tickPixelInterval: 72, showLastLabel: !0, labels: { x: void 0 }, startOnTick: !0, title: {}, stackLabels: { animation: {}, allowOverlap: !1, enabled: !1, crop: !0, overflow: "justify", formatter: function() {
          let { numberFormatter: t } = this.axis.chart;
          return t(this.total || 0, -1);
        }, style: { color: "#000000", fontSize: "0.7em", fontWeight: "bold", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 };
      })(Zt || (Zt = {}));
      let qo = Zt, { addEvent: Ko, isFunction: $o, objectEach: Zo, removeEvent: _o } = $;
      (_t || (_t = {})).registerEventOptions = function(h, t) {
        h.eventOptions = h.eventOptions || {}, Zo(t.events, function(e, i) {
          h.eventOptions[i] !== e && (h.eventOptions[i] && (_o(h, i, h.eventOptions[i]), delete h.eventOptions[i]), $o(e) && (h.eventOptions[i] = e, Ko(h, i, e, { order: 0 })));
        });
      };
      let fi = _t, { deg2rad: Cr } = X, { clamp: Jo, correctFloat: Ui, defined: Ar, destroyObjectProperties: Bn, extend: Qo, fireEvent: Vi, getAlignFactor: Tr, isNumber: xi, merge: Sr, objectEach: Er, pick: ke } = $, bi = class {
        constructor(h, t, e, i, s) {
          this.isNew = !0, this.isNewLabel = !0, this.axis = h, this.pos = t, this.type = e || "", this.parameters = s || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, Vi(this, "init"), e || i || this.addLabel();
        }
        addLabel() {
          let h = this, t = h.axis, e = t.options, i = t.chart, s = t.categories, r = t.logarithmic, o = t.names, a = h.pos, l = ke(h.options?.labels, e.labels), c = t.tickPositions, m = a === c[0], d = a === c[c.length - 1], f = (!l.step || l.step === 1) && t.tickInterval === 1, x = c.info, y = h.label, M, w, v, T = this.parameters.category || (s ? ke(s[a], o[a], a) : a);
          r && xi(T) && (T = Ui(r.lin2log(T))), t.dateTime && (x ? M = (w = i.time.resolveDTLFormat(e.dateTimeLabelFormats[!e.grid?.enabled && x.higherRanks[a] || x.unitName])).main : xi(T) && (M = t.dateTime.getXDateFormat(T, e.dateTimeLabelFormats || {}))), h.isFirst = m, h.isLast = d;
          let S = { axis: t, chart: i, dateTimeLabelFormat: M, isFirst: m, isLast: d, pos: a, tick: h, tickPositionInfo: x, value: T };
          Vi(this, "labelFormat", S);
          let O = (N) => l.formatter ? l.formatter.call(N, N) : l.format ? (N.text = t.defaultLabelFormatter.call(N), Jt.format(l.format, N, i)) : t.defaultLabelFormatter.call(N), L = O.call(S, S), D = w?.list;
          D ? h.shortenLabel = function() {
            for (v = 0; v < D.length; v++) if (Qo(S, { dateTimeLabelFormat: D[v] }), y.attr({ text: O.call(S, S) }), y.getBBox().width < t.getSlotWidth(h) - 2 * (l.padding || 0)) return;
            y.attr({ text: "" });
          } : h.shortenLabel = void 0, f && t._addedPlotLB && h.moveLabel(L, l), Ar(y) || h.movedLabel ? y && y.textStr !== L && !f && (!y.textWidth || l.style.width || y.styles.width || y.css({ width: null }), y.attr({ text: L }), y.textPxLength = y.getBBox().width) : (h.label = y = h.createLabel(L, l), h.rotation = 0);
        }
        createLabel(h, t, e) {
          let i = this.axis, { renderer: s, styledMode: r } = i.chart, o = t.style.whiteSpace, a = Ar(h) && t.enabled ? s.text(h, e?.x, e?.y, t.useHTML).add(i.labelGroup) : void 0;
          return a && (r || a.css(Sr(t.style)), a.textPxLength = a.getBBox().width, !r && o && a.css({ whiteSpace: o })), a;
        }
        destroy() {
          Bn(this, this.axis);
        }
        getPosition(h, t, e, i) {
          let s = this.axis, r = s.chart, o = i && r.oldChartHeight || r.chartHeight, a = { x: h ? Ui(s.translate(t + e, void 0, void 0, i) + s.transB) : s.left + s.offset + (s.opposite ? (i && r.oldChartWidth || r.chartWidth) - s.right - s.left : 0), y: h ? o - s.bottom + s.offset - (s.opposite ? s.height : 0) : Ui(o - s.translate(t + e, void 0, void 0, i) - s.transB) };
          return a.y = Jo(a.y, -1e9, 1e9), Vi(this, "afterGetPosition", { pos: a }), a;
        }
        getLabelPosition(h, t, e, i, s, r, o, a) {
          let l, c, m = this.axis, d = m.transA, f = m.isLinked && m.linkedParent ? m.linkedParent.reversed : m.reversed, x = m.staggerLines, y = m.tickRotCorr || { x: 0, y: 0 }, M = i || m.reserveSpaceDefault ? 0 : -m.labelOffset * (m.labelAlign === "center" ? 0.5 : 1), w = s.distance, v = {};
          return l = m.side === 0 ? e.rotation ? -w : -e.getBBox().height : m.side === 2 ? y.y + w : Math.cos(e.rotation * Cr) * (y.y - e.getBBox(!1, 0).height / 2), Ar(s.y) && (l = m.side === 0 && m.horiz ? s.y + l : s.y), h = h + ke(s.x, [0, 1, 0, -1][m.side] * w) + M + y.x - (r && i ? r * d * (f ? -1 : 1) : 0), t = t + l - (r && !i ? r * d * (f ? 1 : -1) : 0), x && (c = o / (a || 1) % x, m.opposite && (c = x - c - 1), t += c * (m.labelOffset / x)), v.x = h, v.y = Math.round(t), Vi(this, "afterGetLabelPosition", { pos: v, tickmarkOffset: r, index: o }), v;
        }
        getLabelSize() {
          return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
        }
        getMarkPath(h, t, e, i, s = !1, r) {
          return r.crispLine([["M", h, t], ["L", h + (s ? 0 : -e), t + (s ? e : 0)]], i);
        }
        handleOverflow(h) {
          let t = this.axis, e = t.options.labels, i = h.x, s = t.chart.chartWidth, r = t.chart.spacing, o = ke(t.labelLeft, Math.min(t.pos, r[3])), a = ke(t.labelRight, Math.max(t.isRadial ? 0 : t.pos + t.len, s - r[1])), l = this.label, c = this.rotation, m = Tr(t.labelAlign || l.attr("align")), d = l.getBBox().width, f = t.getSlotWidth(this), x = f, y = 1, M;
          c || e.overflow !== "justify" ? c < 0 && i - m * d < o ? M = Math.round(i / Math.cos(c * Cr) - o) : c > 0 && i + m * d > a && (M = Math.round((s - i) / Math.cos(c * Cr))) : (i - m * d < o ? x = h.x + x * (1 - m) - o : i + (1 - m) * d > a && (x = a - h.x + x * m, y = -1), (x = Math.min(f, x)) < f && t.labelAlign === "center" && (h.x += y * (f - x - m * (f - Math.min(d, x)))), (d > x || t.autoRotation && l?.styles?.width) && (M = x)), M && l && (this.shortenLabel ? this.shortenLabel() : l.css(Qo({}, { width: Math.floor(M) + "px", lineClamp: +!t.isRadial })));
        }
        moveLabel(h, t) {
          let e = this, i = e.label, s = e.axis, r = !1, o;
          i && i.textStr === h ? (e.movedLabel = i, r = !0, delete e.label) : Er(s.ticks, function(a) {
            r || a.isNew || a === e || !a.label || a.label.textStr !== h || (e.movedLabel = a.label, r = !0, a.labelPos = e.movedLabel.xy, delete a.label);
          }), !r && (e.labelPos || i) && (o = e.labelPos || i.xy, e.movedLabel = e.createLabel(h, t, o), e.movedLabel && e.movedLabel.attr({ opacity: 0 }));
        }
        render(h, t, e) {
          let i = this.axis, s = i.horiz, r = this.pos, o = ke(this.tickmarkOffset, i.tickmarkOffset), a = this.getPosition(s, r, o, t), l = a.x, c = a.y, m = i.pos, d = m + i.len, f = s ? l : c, x = ke(e, this.label?.newOpacity, 1);
          !i.chart.polar && (Ui(f) < m || f > d) && (e = 0), e ?? (e = 1), this.isActive = !0, this.renderGridLine(t, e), this.renderMark(a, e), this.renderLabel(a, t, x, h), this.isNew = !1, Vi(this, "afterRender");
        }
        renderGridLine(h, t) {
          let e = this.axis, i = e.options, s = {}, r = this.pos, o = this.type, a = ke(this.tickmarkOffset, e.tickmarkOffset), l = e.chart.renderer, c = this.gridLine, m, d = i.gridLineWidth, f = i.gridLineColor, x = i.gridLineDashStyle;
          this.type === "minor" && (d = i.minorGridLineWidth, f = i.minorGridLineColor, x = i.minorGridLineDashStyle), c || (e.chart.styledMode || (s.stroke = f, s["stroke-width"] = d || 0, s.dashstyle = x), o || (s.zIndex = 1), h && (t = 0), this.gridLine = c = l.path().attr(s).addClass("highcharts-" + (o ? o + "-" : "") + "grid-line").add(e.gridGroup)), c && (m = e.getPlotLinePath({ value: r + a, lineWidth: c.strokeWidth(), force: "pass", old: h, acrossPanes: !1 })) && c[h || this.isNew ? "attr" : "animate"]({ d: m, opacity: t });
        }
        renderMark(h, t) {
          let e = this.axis, i = e.options, s = e.chart.renderer, r = this.type, o = e.tickSize(r ? r + "Tick" : "tick"), a = h.x, l = h.y, c = ke(i[r !== "minor" ? "tickWidth" : "minorTickWidth"], !r && e.isXAxis ? 1 : 0), m = i[r !== "minor" ? "tickColor" : "minorTickColor"], d = this.mark, f = !d;
          o && (e.opposite && (o[0] = -o[0]), !d && (this.mark = d = s.path().addClass("highcharts-" + (r ? r + "-" : "") + "tick").add(e.axisGroup), e.chart.styledMode || d.attr({ stroke: m, "stroke-width": c })), d[f ? "attr" : "animate"]({ d: this.getMarkPath(a, l, o[0], d.strokeWidth(), e.horiz, s), opacity: t }));
        }
        renderLabel(h, t, e, i) {
          let s = this.axis, r = s.horiz, o = s.options, a = this.label, l = o.labels, c = l.step, m = ke(this.tickmarkOffset, s.tickmarkOffset), d = h.x, f = h.y, x = !0;
          a && xi(d) && (a.xy = h = this.getLabelPosition(d, f, a, r, l, m, i, c), (!this.isFirst || this.isLast || o.showFirstLabel) && (!this.isLast || this.isFirst || o.showLastLabel) ? !r || l.step || l.rotation || t || e === 0 || this.handleOverflow(h) : x = !1, c && i % c && (x = !1), x && xi(h.y) ? (h.opacity = e, a[this.isNewLabel ? "attr" : "animate"](h).show(!0), this.isNewLabel = !1) : (a.hide(), this.isNewLabel = !0));
        }
        replaceMovedLabel() {
          let h = this.label, t = this.axis;
          h && !this.isNew && (h.animate({ opacity: 0 }, void 0, h.destroy), delete this.label), t.isDirty = !0, this.label = this.movedLabel, delete this.movedLabel;
        }
      }, { animObject: ta } = Rt, { xAxis: ea, yAxis: ia } = qo, { defaultOptions: Pr } = te, { registerEventOptions: Nn } = fi, { deg2rad: Rn } = X, { arrayMax: sa, arrayMin: zn, clamp: Or, correctFloat: Qt, defined: bt, destroyObjectProperties: ra, erase: Lr, error: Dr, extend: yi, fireEvent: Tt, getClosestDistance: qi, insertItem: oa, isArray: Ts, isNumber: Q, isString: aa, merge: ri, normalizeTickInterval: Ss, objectEach: Es, pick: ot, relativeLength: Ps, removeEvent: Fn, splat: Hn, syncTimeout: Wn } = $, Ir = (h, t) => Ss(t, void 0, void 0, ot(h.options.allowDecimals, t < 0.5 || h.tickAmount !== void 0), !!h.tickAmount);
      yi(Pr, { xAxis: ea, yAxis: ri(ea, ia) });
      class vi {
        constructor(t, e, i) {
          this.init(t, e, i);
        }
        init(t, e, i = this.coll) {
          let s = i === "xAxis", r = this.isZAxis || (t.inverted ? !s : s);
          this.chart = t, this.horiz = r, this.isXAxis = s, this.coll = i, Tt(this, "init", { userOptions: e }), this.opposite = ot(e.opposite, this.opposite), this.side = ot(e.side, this.side, r ? 2 * !this.opposite : this.opposite ? 1 : 3), this.setOptions(e);
          let o = this.options, a = o.labels;
          this.type ?? (this.type = o.type || "linear"), this.uniqueNames ?? (this.uniqueNames = o.uniqueNames ?? !0), Tt(this, "afterSetType"), this.userOptions = e, this.minPixelPadding = 0, this.reversed = ot(o.reversed, this.reversed), this.visible = o.visible, this.zoomEnabled = o.zoomEnabled, this.hasNames = this.type === "category" || o.categories === !0, this.categories = Ts(o.categories) && o.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = bt(o.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len ?? (this.len = 0), this.minRange = this.userMinRange = o.minRange || o.maxZoom, this.range = o.range, this.offset = o.offset || 0, this.max = void 0, this.min = void 0;
          let l = ot(o.crosshair, Hn(t.options.tooltip.crosshairs)[+!s]);
          this.crosshair = l === !0 ? {} : l, t.axes.indexOf(this) === -1 && (s ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this), oa(this, t[this.coll])), t.orderItems(this.coll), this.series = this.series || [], t.inverted && !this.isZAxis && s && !bt(this.reversed) && (this.reversed = !0), this.labelRotation = Q(a.rotation) ? a.rotation : void 0, Nn(this, o), Tt(this, "afterInit");
        }
        setOptions(t) {
          let e = this.horiz ? { labels: { autoRotation: [-45], padding: 3 }, margin: 15 } : { labels: { padding: 1 }, title: { rotation: 90 * this.side } };
          this.options = ri(e, this.coll === "yAxis" ? { title: { text: this.chart.options.lang.yAxisTitle } } : {}, Pr[this.coll], t), Tt(this, "afterSetOptions", { userOptions: t });
        }
        defaultLabelFormatter() {
          let t = this.axis, { numberFormatter: e } = this.chart, i = Q(this.value) ? this.value : NaN, s = t.chart.time, r = t.categories, o = this.dateTimeLabelFormat, a = Pr.lang, l = a.numericSymbols, c = a.numericSymbolMagnitude || 1e3, m = t.logarithmic ? Math.abs(i) : t.tickInterval, d = l?.length, f, x;
          if (r) x = `${this.value}`;
          else if (o) x = s.dateFormat(o, i, !0);
          else if (d && l && m >= 1e3) for (; d-- && x === void 0; ) m >= (f = Math.pow(c, d + 1)) && 10 * i % f == 0 && l[d] !== null && i !== 0 && (x = e(i / f, -1) + l[d]);
          return x === void 0 && (x = Math.abs(i) >= 1e4 ? e(i, -1) : e(i, -1, void 0, "")), x;
        }
        getSeriesExtremes() {
          let t, e = this;
          Tt(this, "getSeriesExtremes", null, function() {
            e.hasVisibleSeries = !1, e.dataMin = e.dataMax = e.threshold = void 0, e.softThreshold = !e.isXAxis, e.series.forEach((i) => {
              if (i.reserveSpace()) {
                let s = i.options, r, o = s.threshold, a, l;
                if (e.hasVisibleSeries = !0, e.positiveValuesOnly && 0 >= (o || 0) && (o = void 0), e.isXAxis) (r = i.getColumn("x")).length && (r = e.logarithmic ? r.filter((c) => c > 0) : r, a = (t = i.getXExtremes(r)).min, l = t.max, Q(a) || a instanceof Date || (r = r.filter(Q), a = (t = i.getXExtremes(r)).min, l = t.max), r.length && (e.dataMin = Math.min(ot(e.dataMin, a), a), e.dataMax = Math.max(ot(e.dataMax, l), l)));
                else {
                  let c = i.applyExtremes();
                  Q(c.dataMin) && (a = c.dataMin, e.dataMin = Math.min(ot(e.dataMin, a), a)), Q(c.dataMax) && (l = c.dataMax, e.dataMax = Math.max(ot(e.dataMax, l), l)), bt(o) && (e.threshold = o), (!s.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1);
                }
              }
            });
          }), Tt(this, "afterGetSeriesExtremes");
        }
        translate(t, e, i, s, r, o) {
          let a = this.linkedParent || this, l = s && a.old ? a.old.min : a.min;
          if (!Q(l)) return NaN;
          let c = a.minPixelPadding, m = (a.isOrdinal || a.brokenAxis?.hasBreaks || a.logarithmic && r) && !!a.lin2val, d = 1, f = 0, x = s && a.old ? a.old.transA : a.transA, y = 0;
          return x || (x = a.transA), i && (d *= -1, f = a.len), a.reversed && (d *= -1, f -= d * (a.sector || a.len)), e ? (y = (t = t * d + f - c) / x + l, m && (y = a.lin2val(y))) : (m && (t = a.val2lin(t)), y = d * (t - l) * x + f + d * c + (Q(o) ? x * o : 0), a.isRadial || (y = Qt(y))), y;
        }
        toPixels(t, e) {
          return this.translate(this.chart?.time.parse(t) ?? NaN, !1, !this.horiz, void 0, !0) + (e ? 0 : this.pos);
        }
        toValue(t, e) {
          return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, void 0, !0);
        }
        getPlotLinePath(t) {
          let e = this, i = e.chart, s = e.left, r = e.top, o = t.old, a = t.value, l = t.lineWidth, c = o && i.oldChartHeight || i.chartHeight, m = o && i.oldChartWidth || i.chartWidth, d = e.transB, f = t.translatedValue, x = t.force, y, M, w, v, T;
          function S(L, D, N) {
            return x !== "pass" && (L < D || L > N) && (x ? L = Or(L, D, N) : T = !0), L;
          }
          let O = { value: a, lineWidth: l, old: o, force: x, acrossPanes: t.acrossPanes, translatedValue: f };
          return Tt(this, "getPlotLinePath", O, function(L) {
            y = w = (f = Or(f = ot(f, e.translate(a, void 0, void 0, o)), -1e9, 1e9)) + d, M = v = c - f - d, Q(f) ? e.horiz ? (M = r, v = c - e.bottom + (e.options.isInternal ? 0 : i.scrollablePixelsY || 0), y = w = S(y, s, s + e.width)) : (y = s, w = m - e.right + (i.scrollablePixelsX || 0), M = v = S(M, r, r + e.height)) : (T = !0, x = !1), L.path = T && !x ? void 0 : i.renderer.crispLine([["M", y, M], ["L", w, v]], l || 1);
          }), O.path;
        }
        getLinearTickPositions(t, e, i) {
          let s, r, o, a = Qt(Math.floor(e / t) * t), l = Qt(Math.ceil(i / t) * t), c = [];
          if (Qt(a + t) === a && (o = 20), this.single) return [e];
          for (s = a; s <= l && (c.push(s), (s = Qt(s + t, o)) !== r); ) r = s;
          return c;
        }
        getMinorTickInterval() {
          let { minorTicks: t, minorTickInterval: e } = this.options;
          return t === !0 ? ot(e, "auto") : t !== !1 ? e : void 0;
        }
        getMinorTickPositions() {
          let t = this.options, e = this.tickPositions, i = this.minorTickInterval, s = this.pointRangePadding || 0, r = (this.min || 0) - s, o = (this.max || 0) + s, a = this.brokenAxis?.hasBreaks ? this.brokenAxis.unitLength : o - r, l = [], c;
          if (a && a / i < this.len / 3) {
            let m = this.logarithmic;
            if (m) this.paddedTicks.forEach(function(d, f, x) {
              f && l.push.apply(l, m.getLogTickPositions(i, x[f - 1], x[f], !0));
            });
            else if (this.dateTime && this.getMinorTickInterval() === "auto") l = l.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(i), r, o, t.startOfWeek));
            else for (c = r + (e[0] - r) % i; c <= o && c !== l[0]; c += i) l.push(c);
          }
          return l.length !== 0 && this.trimTicks(l), l;
        }
        adjustForMinRange() {
          let t = this.options, e = this.logarithmic, i = this.chart.time, { max: s, min: r, minRange: o } = this, a, l, c, m;
          this.isXAxis && o === void 0 && !e && (o = bt(t.min) || bt(t.max) || bt(t.floor) || bt(t.ceiling) ? null : Math.min(5 * (qi(this.series.map((d) => {
            let f = d.getColumn("x");
            return d.xIncrement ? f.slice(0, 2) : f;
          })) || 0), this.dataMax - this.dataMin)), Q(s) && Q(r) && Q(o) && s - r < o && (l = this.dataMax - this.dataMin >= o, a = (o - s + r) / 2, c = [r - a, i.parse(t.min) ?? r - a], l && (c[2] = e ? e.log2lin(this.dataMin) : this.dataMin), m = [(r = sa(c)) + o, i.parse(t.max) ?? r + o], l && (m[2] = e ? e.log2lin(this.dataMax) : this.dataMax), (s = zn(m)) - r < o && (c[0] = s - o, c[1] = i.parse(t.min) ?? s - o, r = sa(c))), this.minRange = o, this.min = r, this.max = s;
        }
        getClosest() {
          let t, e;
          if (this.categories) e = 1;
          else {
            let i = [];
            this.series.forEach(function(s) {
              let r = s.closestPointRange, o = s.getColumn("x");
              o.length === 1 ? i.push(o[0]) : s.sorted && bt(r) && s.reserveSpace() && (e = bt(e) ? Math.min(e, r) : r);
            }), i.length && (i.sort((s, r) => s - r), t = qi([i]));
          }
          return t && e ? Math.min(t, e) : t || e;
        }
        nameToX(t) {
          let e = Ts(this.options.categories), i = e ? this.categories : this.names, s = t.options.x, r;
          return t.series.requireSorting = !1, bt(s) || (s = this.uniqueNames && i ? e ? i.indexOf(t.name) : ot(i.keys[t.name], -1) : t.series.autoIncrement()), s === -1 ? !e && i && (r = i.length) : Q(s) && (r = s), r !== void 0 ? (this.names[r] = t.name, this.names.keys[t.name] = r) : t.x && (r = t.x), r;
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
          let t = this, e = t.max - t.min, i = t.linkedParent, s = !!t.categories, r = t.isXAxis, o = t.axisPointRange || 0, a, l = 0, c = 0, m, d = t.transA;
          (r || s || o) && (a = t.getClosest(), i ? (l = i.minPointOffset, c = i.pointRangePadding) : t.series.forEach(function(f) {
            let x = s ? 1 : r ? ot(f.options.pointRange, a, 0) : t.axisPointRange || 0, y = f.options.pointPlacement;
            if (o = Math.max(o, x), !t.single || s) {
              let M = f.is("xrange") ? !r : r;
              l = Math.max(l, M && aa(y) ? 0 : x / 2), c = Math.max(c, M && y === "on" ? 0 : x);
            }
          }), m = t.ordinal?.slope && a ? t.ordinal.slope / a : 1, t.minPointOffset = l *= m, t.pointRangePadding = c *= m, t.pointRange = Math.min(o, t.single && s ? 1 : e), r && (t.closestPointRange = a)), t.translationSlope = t.transA = d = t.staticScale || t.len / (e + c || 1), t.transB = t.horiz ? t.left : t.bottom, t.minPixelPadding = d * l, Tt(this, "afterSetAxisTranslation");
        }
        minFromRange() {
          let { max: t, min: e } = this;
          return Q(t) && Q(e) && t - e || void 0;
        }
        setTickInterval(t) {
          let { categories: e, chart: i, dataMax: s, dataMin: r, dateTime: o, isXAxis: a, logarithmic: l, options: c, softThreshold: m } = this, d = i.time, f = Q(this.threshold) ? this.threshold : void 0, x = this.minRange || 0, { ceiling: y, floor: M, linkedTo: w, softMax: v, softMin: T } = c, S = Q(w) && i[this.coll]?.[w], O = c.tickPixelInterval, L = c.maxPadding, D = c.minPadding, N = 0, I, W = Q(c.tickInterval) && c.tickInterval >= 0 ? c.tickInterval : void 0, Y, H, V, Z;
          if (o || e || S || this.getTickAmount(), V = ot(this.userMin, d.parse(c.min)), Z = ot(this.userMax, d.parse(c.max)), S ? (this.linkedParent = S, I = S.getExtremes(), this.min = ot(I.min, I.dataMin), this.max = ot(I.max, I.dataMax), this.type !== S.type && Dr(11, !0, i)) : (m && bt(f) && Q(s) && Q(r) && (r >= f ? (Y = f, D = 0) : s <= f && (H = f, L = 0)), this.min = ot(V, Y, r), this.max = ot(Z, H, s)), Q(this.max) && Q(this.min) && (l && (this.positiveValuesOnly && !t && 0 >= Math.min(this.min, ot(r, this.min)) && Dr(10, !0, i), this.min = Qt(l.log2lin(this.min), 16), this.max = Qt(l.log2lin(this.max), 16)), this.range && Q(r) && (this.userMin = this.min = V = Math.max(r, this.minFromRange() || 0), this.userMax = Z = this.max, this.range = void 0)), Tt(this, "foundExtremes"), this.adjustForMinRange(), Q(this.min) && Q(this.max)) {
            if (!Q(this.userMin) && Q(T) && T < this.min && (this.min = V = T), !Q(this.userMax) && Q(v) && v > this.max && (this.max = Z = v), e || this.axisPointRange || this.stacking?.usePercentage || S || (N = this.max - this.min) && (!bt(V) && D && (this.min -= N * D), !bt(Z) && L && (this.max += N * L)), !Q(this.userMin) && Q(M) && (this.min = Math.max(this.min, M)), !Q(this.userMax) && Q(y) && (this.max = Math.min(this.max, y)), m && Q(r) && Q(s)) {
              let j = f || 0;
              !bt(V) && this.min < j && r >= j ? this.min = c.minRange ? Math.min(j, this.max - x) : j : !bt(Z) && this.max > j && s <= j && (this.max = c.minRange ? Math.max(j, this.min + x) : j);
            }
            !i.polar && this.min > this.max && (bt(c.min) ? this.max = this.min : bt(c.max) && (this.min = this.max)), N = this.max - this.min;
          }
          if (this.min !== this.max && Q(this.min) && Q(this.max) ? S && !W && O === S.options.tickPixelInterval ? this.tickInterval = W = S.tickInterval : this.tickInterval = ot(W, this.tickAmount ? N / Math.max(this.tickAmount - 1, 1) : void 0, e ? 1 : N * O / Math.max(this.len, O)) : this.tickInterval = 1, a && !t) {
            let j = this.min !== this.old?.min || this.max !== this.old?.max;
            this.series.forEach(function(q) {
              q.forceCrop = q.forceCropping?.(), q.processData(j);
            }), Tt(this, "postProcessData", { hasExtremesChanged: j });
          }
          this.setAxisTranslation(), Tt(this, "initialAxisTranslation"), this.pointRange && !W && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
          let J = ot(c.minTickInterval, o && !this.series.some((j) => !j.sorted) ? this.closestPointRange : 0);
          !W && J && this.tickInterval < J && (this.tickInterval = J), o || l || W || (this.tickInterval = Ir(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions();
        }
        setTickPositions() {
          let t = this.options, e = t.tickPositions, i = t.tickPositioner, s = this.getMinorTickInterval(), r = !this.isPanning, o = r && t.startOnTick, a = r && t.endOnTick, l = [], c;
          if (this.tickmarkOffset = this.categories && t.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0, this.single = this.min === this.max && bt(this.min) && !this.tickAmount && (this.min % 1 == 0 || t.allowDecimals !== !1), e) l = e.slice();
          else if (Q(this.min) && Q(this.max)) {
            if (!this.ordinal?.positions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) l = [this.min, this.max], Dr(19, !1, this.chart);
            else if (this.dateTime) l = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, t.units), this.min, this.max, t.startOfWeek, this.ordinal?.positions, this.closestPointRange, !0);
            else if (this.logarithmic) l = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
            else {
              let m = this.tickInterval, d = m;
              for (; d <= 2 * m && (l = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && l.length > this.tickAmount); ) this.tickInterval = Ir(this, d *= 1.1);
            }
            l.length > this.len && (l = [l[0], l[l.length - 1]])[0] === l[1] && (l.length = 1), i && (this.tickPositions = l, (c = i.apply(this, [this.min, this.max])) && (l = c));
          }
          this.tickPositions = l, this.minorTickInterval = s === "auto" && this.tickInterval ? this.tickInterval / t.minorTicksPerMajor : s, this.paddedTicks = l.slice(0), this.trimTicks(l, o, a), !this.isLinked && Q(this.min) && Q(this.max) && (this.single && l.length < 2 && !this.categories && !this.series.some((m) => m.is("heatmap") && m.options.pointPlacement === "between") && (this.min -= 0.5, this.max += 0.5), e || c || this.adjustTickAmount()), Tt(this, "afterSetTickPositions");
        }
        trimTicks(t, e, i) {
          let s = t[0], r = t[t.length - 1], o = !this.isOrdinal && this.minPointOffset || 0;
          if (Tt(this, "trimTicks"), !this.isLinked || !this.grid) {
            if (e && s !== -1 / 0) this.min = s;
            else for (; this.min - o > t[0]; ) t.shift();
            if (i) this.max = r;
            else for (; this.max + o < t[t.length - 1]; ) t.pop();
            t.length === 0 && bt(s) && !this.options.tickPositions && t.push((r + s) / 2);
          }
        }
        alignToOthers() {
          let t, e = this, i = e.chart, s = [this], r = e.options, o = i.options.chart, a = this.coll === "yAxis" && o.alignThresholds, l = [];
          if (e.thresholdAlignment = void 0, (o.alignTicks !== !1 && r.alignTicks || a) && r.startOnTick !== !1 && r.endOnTick !== !1 && !e.logarithmic) {
            let c = (d) => {
              let { horiz: f, options: x } = d;
              return [f ? x.left : x.top, x.width, x.height, x.pane].join(",");
            }, m = c(this);
            i[this.coll].forEach(function(d) {
              let { series: f } = d;
              f.length && f.some((x) => x.visible) && d !== e && c(d) === m && (t = !0, s.push(d));
            });
          }
          if (t && a) {
            s.forEach((m) => {
              let d = m.getThresholdAlignment(e);
              Q(d) && l.push(d);
            });
            let c = l.length > 1 ? l.reduce((m, d) => m += d, 0) / l.length : void 0;
            s.forEach((m) => {
              m.thresholdAlignment = c;
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
          bt(t.tickInterval) || i || !(this.len < e) || this.isRadial || this.logarithmic || !t.startOnTick || !t.endOnTick || (i = 2), !i && this.alignToOthers() && (i = Math.ceil(this.len / e) + 1), i < 4 && (this.finalTickAmt = i, i = 5), this.tickAmount = i;
        }
        adjustTickAmount() {
          let t = this, { finalTickAmt: e, max: i, min: s, options: r, tickPositions: o, tickAmount: a, thresholdAlignment: l } = t, c = o?.length, m = ot(t.threshold, t.softThreshold ? 0 : null), d, f, x = t.tickInterval, y, M = () => o.push(Qt(o[o.length - 1] + x)), w = () => o.unshift(Qt(o[0] - x));
          if (Q(l) && (y = l < 0.5 ? Math.ceil(l * (a - 1)) : Math.floor(l * (a - 1)), r.reversed && (y = a - 1 - y)), t.hasData() && Q(s) && Q(i)) {
            let v = () => {
              t.transA *= (c - 1) / (a - 1), t.min = r.startOnTick ? o[0] : Math.min(s, o[0]), t.max = r.endOnTick ? o[o.length - 1] : Math.max(i, o[o.length - 1]);
            };
            if (Q(y) && Q(t.threshold)) {
              for (; o[y] !== m || o.length !== a || o[0] > s || o[o.length - 1] < i; ) {
                for (o.length = 0, o.push(t.threshold); o.length < a; ) o[y] === void 0 || o[y] > t.threshold ? w() : M();
                if (x > 8 * t.tickInterval) break;
                x *= 2;
              }
              v();
            } else if (c < a) {
              for (; o.length < a; ) o.length % 2 || s === m ? M() : w();
              v();
            }
            if (bt(e)) {
              for (f = d = o.length; f--; ) (e === 3 && f % 2 == 1 || e <= 2 && f > 0 && f < d - 1) && o.splice(f, 1);
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
          this.series.forEach((a) => {
            delete a.kdTree;
          }), t = o.time.parse(t), e = o.time.parse(e), Tt(this, "setExtremes", r = yi(r, { min: t, max: e }), (a) => {
            this.userMin = a.min, this.userMax = a.max, this.eventArgs = a, i && o.redraw(s);
          });
        }
        setAxisSize() {
          let t = this.chart, e = this.options, i = e.offsets || [0, 0, 0, 0], s = this.horiz, r = this.width = Math.round(Ps(ot(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)), o = this.height = Math.round(Ps(ot(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)), a = this.top = Math.round(Ps(ot(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)), l = this.left = Math.round(Ps(ot(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft));
          this.bottom = t.chartHeight - o - a, this.right = t.chartWidth - r - l, this.len = Math.max(s ? r : o, 0), this.pos = s ? l : a;
        }
        getExtremes() {
          let t = this.logarithmic;
          return { min: t ? Qt(t.lin2log(this.min)) : this.min, max: t ? Qt(t.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
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
          let t = this.options.labels, e = t.padding || 0, i = this.horiz, s = this.tickInterval, r = this.len / ((+!!this.categories + this.max - this.min) / s), o = t.rotation, a = Qt(0.8 * this.labelMetrics().h), l = Math.max(this.max - this.min, 0), c = function(y) {
            let M = (y + 2 * e) / (r || 1);
            return (M = M > 1 ? Math.ceil(M) : 1) * s > l && y !== 1 / 0 && r !== 1 / 0 && l && (M = Math.ceil(l / s)), Qt(M * s);
          }, m = s, d, f = Number.MAX_VALUE, x;
          if (i) {
            if (!t.staggerLines && (Q(o) ? x = [o] : r < t.autoRotationLimit && (x = t.autoRotation)), x) {
              let y, M;
              for (let w of x) (w === o || w && w >= -90 && w <= 90) && (M = (y = c(Math.abs(a / Math.sin(Rn * w)))) + Math.abs(w / 360)) < f && (f = M, d = w, m = y);
            }
          } else m = c(0.75 * a);
          return this.autoRotation = x, this.labelRotation = ot(d, Q(o) ? o : 0), t.step ? s : m;
        }
        getSlotWidth(t) {
          let e = this.chart, i = this.horiz, s = this.options.labels, r = Math.max(this.tickPositions.length - !this.categories, 1), o = e.margin[3];
          if (t && Q(t.slotWidth)) return t.slotWidth;
          if (i && s.step < 2 && !this.isRadial) return s.rotation ? 0 : (this.staggerLines || 1) * this.len / r;
          if (!i) {
            let a = s.style.width;
            if (a !== void 0) return parseInt(String(a), 10);
            if (!this.opposite && o) return o - e.spacing[3];
          }
          return 0.33 * e.chartWidth;
        }
        renderUnsquish() {
          let t = this.chart, e = t.renderer, i = this.tickPositions, s = this.ticks, r = this.options.labels, o = r.style, a = this.horiz, l = this.getSlotWidth(), c = Math.max(1, Math.round(l - (a ? 2 * (r.padding || 0) : r.distance || 0))), m = {}, d = this.labelMetrics(), f = o.lineClamp, x, y = f ?? (Math.floor(this.len / (i.length * d.h)) || 1), M = 0;
          aa(r.rotation) || (m.rotation = r.rotation || 0), i.forEach(function(w) {
            let v = s[w];
            v.movedLabel && v.replaceMovedLabel();
            let T = v.label?.textPxLength || 0;
            T > M && (M = T);
          }), this.maxLabelLength = M, this.autoRotation ? M > c && M > d.h ? m.rotation = this.labelRotation : this.labelRotation = 0 : l && (x = c), m.rotation && (x = M > 0.5 * t.chartHeight ? 0.33 * t.chartHeight : M, f || (y = 1)), this.labelAlign = r.align || this.autoLabelAlign(this.labelRotation), this.labelAlign && (m.align = this.labelAlign), i.forEach(function(w) {
            let v = s[w], T = v?.label, S = o.width, O = {};
            T && (T.attr(m), v.shortenLabel ? v.shortenLabel() : x && !S && o.whiteSpace !== "nowrap" && (x < (T.textPxLength || 0) || T.element.tagName === "SPAN") ? T.css(yi(O, { width: `${x}px`, lineClamp: y })) : !T.styles.width || O.width || S || T.css({ width: "auto" }), v.rotation = m.rotation);
          }, this), this.tickRotCorr = e.rotCorr(d.b, this.labelRotation || 0, this.side !== 0);
        }
        hasData() {
          return this.series.some(function(t) {
            return t.hasData();
          }) || this.options.showEmpty && bt(this.min) && bt(this.max);
        }
        addTitle(t) {
          let e, i = this.chart.renderer, s = this.horiz, r = this.opposite, o = this.options.title, a = this.chart.styledMode;
          this.axisTitle || ((e = o.textAlign) || (e = (s ? { low: "left", middle: "center", high: "right" } : { low: r ? "right" : "left", middle: "center", high: r ? "left" : "right" })[o.align]), this.axisTitle = i.text(o.text || "", 0, 0, o.useHTML).attr({ zIndex: 7, rotation: o.rotation || 0, align: e }).addClass("highcharts-axis-title"), a || this.axisTitle.css(ri(o.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), a || o.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }), this.axisTitle[t ? "show" : "hide"](t);
        }
        generateTick(t) {
          let e = this.ticks;
          e[t] ? e[t].addLabel() : e[t] = new bi(this, t);
        }
        createGroups() {
          let { axisParent: t, chart: e, coll: i, options: s } = this, r = e.renderer, o = (a, l, c) => r.g(a).attr({ zIndex: c }).addClass(`highcharts-${i.toLowerCase()}${l} ` + (this.isRadial ? `highcharts-radial-axis${l} ` : "") + (s.className || "")).add(t);
          this.axisGroup || (this.gridGroup = o("grid", "-grid", s.gridZIndex), this.axisGroup = o("axis", "", s.zIndex), this.labelGroup = o("axis-labels", "-labels", s.labels.zIndex));
        }
        getOffset() {
          let t = this, { chart: e, horiz: i, options: s, side: r, ticks: o, tickPositions: a, coll: l } = t, c = e.inverted && !t.isZAxis ? [1, 0, 3, 2][r] : r, m = t.hasData(), d = s.title, f = s.labels, x = Q(s.crossing), y = e.axisOffset, M = e.clipOffset, w = [-1, 1, 1, -1][r], v, T = 0, S, O = 0, L = 0, D, N;
          if (t.showAxis = v = m || s.showEmpty, t.staggerLines = t.horiz && f.staggerLines || void 0, t.createGroups(), m || t.isLinked ? (a.forEach(function(I) {
            t.generateTick(I);
          }), t.renderUnsquish(), t.reserveSpaceDefault = r === 0 || r === 2 || { 1: "left", 3: "right" }[r] === t.labelAlign, ot(f.reserveSpace, !x && null, t.labelAlign === "center" || null, t.reserveSpaceDefault) && a.forEach(function(I) {
            L = Math.max(o[I].getLabelSize(), L);
          }), t.staggerLines && (L *= t.staggerLines), t.labelOffset = L * (t.opposite ? -1 : 1)) : Es(o, function(I, W) {
            I.destroy(), delete o[W];
          }), d?.text && d.enabled !== !1 && (t.addTitle(v), v && !x && d.reserveSpace !== !1 && (t.titleOffset = T = t.axisTitle.getBBox()[i ? "height" : "width"], O = bt(S = d.offset) ? 0 : ot(d.margin, i ? 5 : 10))), t.renderLine(), t.offset = w * ot(s.offset, y[r] ? y[r] + (s.margin || 0) : 0), t.tickRotCorr = t.tickRotCorr || { x: 0, y: 0 }, N = r === 0 ? -t.labelMetrics().h : r === 2 ? t.tickRotCorr.y : 0, D = Math.abs(L) + O, L && (D -= N, D += w * (i ? ot(f.y, t.tickRotCorr.y + w * f.distance) : ot(f.x, w * f.distance))), t.axisTitleMargin = ot(S, D), t.getMaxLabelDimensions && (t.maxLabelDimensions = t.getMaxLabelDimensions(o, a)), l !== "colorAxis" && M) {
            let I = this.tickSize("tick");
            y[r] = Math.max(y[r], (t.axisTitleMargin || 0) + T + w * t.offset, D, a?.length && I ? I[0] + w * t.offset : 0);
            let W = !t.axisLine || s.offset ? 0 : t.axisLine.strokeWidth() / 2;
            M[c] = Math.max(M[c], W);
          }
          Tt(this, "afterGetOffset");
        }
        getLinePath(t) {
          let e = this.chart, i = this.opposite, s = this.offset, r = this.horiz, o = this.left + (i ? this.width : 0) + s, a = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
          return i && (t *= -1), e.renderer.crispLine([["M", r ? this.left : o, r ? a : this.top], ["L", r ? e.chartWidth - this.right : o, r ? a : e.chartHeight - this.bottom]], t);
        }
        renderLine() {
          !this.axisLine && (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
        }
        getTitlePosition(t) {
          let e = this.horiz, i = this.left, s = this.top, r = this.len, o = this.options.title, a = e ? i : s, l = this.opposite, c = this.offset, m = o.x, d = o.y, f = this.chart.renderer.fontMetrics(t), x = t ? Math.max(t.getBBox(!1, 0).height - f.h - 1, 0) : 0, y = { low: a + (e ? 0 : r), middle: a + r / 2, high: a + (e ? r : 0) }[o.align], M = (e ? s + this.height : i) + (e ? 1 : -1) * (l ? -1 : 1) * (this.axisTitleMargin || 0) + [-x, x, f.f, -x][this.side], w = { x: e ? y + m : M + (l ? this.width : 0) + c + m, y: e ? M + d - (l ? this.height : 0) + c : y + d };
          return Tt(this, "afterGetTitlePosition", { titlePosition: w }), w;
        }
        renderMinorTick(t, e) {
          let i = this.minorTicks;
          i[t] || (i[t] = new bi(this, t, "minor")), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1);
        }
        renderTick(t, e, i) {
          let s = this.isLinked, r = this.ticks;
          (!s || t >= this.min && t <= this.max || this.grid?.isColumn) && (r[t] || (r[t] = new bi(this, t)), i && r[t].isNew && r[t].render(e, !0, -1), r[t].render(e));
        }
        render() {
          let t, e, i = this, s = i.chart, r = i.logarithmic, o = s.renderer, a = i.options, l = i.isLinked, c = i.tickPositions, m = i.axisTitle, d = i.ticks, f = i.minorTicks, x = i.alternateBands, y = a.stackLabels, M = a.alternateGridColor, w = a.crossing, v = i.tickmarkOffset, T = i.axisLine, S = i.showAxis, O = ta(o.globalAnimation);
          if (i.labelEdge.length = 0, i.overlap = !1, [d, f, x].forEach(function(L) {
            Es(L, function(D) {
              D.isActive = !1;
            });
          }), Q(w)) {
            let L = this.isXAxis ? s.yAxis[0] : s.xAxis[0], D = [1, -1, -1, 1][this.side];
            if (L) {
              let N = L.toPixels(w, !0);
              i.horiz && (N = L.len - N), i.offset = D * N;
            }
          }
          if (i.hasData() || l) {
            let L = i.chart.hasRendered && i.old && Q(i.old.min);
            i.minorTickInterval && !i.categories && i.getMinorTickPositions().forEach(function(D) {
              i.renderMinorTick(D, L);
            }), c.length && (c.forEach(function(D, N) {
              i.renderTick(D, N, L);
            }), v && (i.min === 0 || i.single) && (d[-1] || (d[-1] = new bi(i, -1, null, !0)), d[-1].render(-1))), M && c.forEach(function(D, N) {
              e = c[N + 1] !== void 0 ? c[N + 1] + v : i.max - v, N % 2 == 0 && D < i.max && e <= i.max + (s.polar ? -v : v) && (x[D] || (x[D] = new X.PlotLineOrBand(i, {})), t = D + v, x[D].options = { from: r ? r.lin2log(t) : t, to: r ? r.lin2log(e) : e, color: M, className: "highcharts-alternate-grid" }, x[D].render(), x[D].isActive = !0);
            }), i._addedPlotLB || (i._addedPlotLB = !0, (a.plotLines || []).concat(a.plotBands || []).forEach(function(D) {
              i.addPlotBandOrLine(D);
            }));
          }
          [d, f, x].forEach(function(L) {
            let D = [], N = O.duration;
            Es(L, function(I, W) {
              I.isActive || (I.render(W, !1, 0), I.isActive = !1, D.push(W));
            }), Wn(function() {
              let I = D.length;
              for (; I--; ) L[D[I]] && !L[D[I]].isActive && (L[D[I]].destroy(), delete L[D[I]]);
            }, L !== x && s.hasRendered && N ? N : 0);
          }), T && (T[T.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(T.strokeWidth()) }), T.isPlaced = !0, T[S ? "show" : "hide"](S)), m && S && (m[m.isNew ? "attr" : "animate"](i.getTitlePosition(m)), m.isNew = !1), y?.enabled && i.stacking && i.stacking.renderStackTotals(), i.old = { len: i.len, max: i.max, min: i.min, transA: i.transA, userMax: i.userMax, userMin: i.userMin }, i.isDirty = !1, Tt(this, "afterRender");
        }
        redraw() {
          this.visible && (this.render(), this.plotLinesAndBands.forEach(function(t) {
            t.render();
          })), this.series.forEach(function(t) {
            t.isDirty = !0;
          });
        }
        getKeepProps() {
          return this.keepProps || vi.keepProps;
        }
        destroy(t) {
          let e = this, i = e.plotLinesAndBands, s = this.eventOptions;
          if (Tt(this, "destroy", { keepEvents: t }), t || Fn(e), [e.ticks, e.minorTicks, e.alternateBands].forEach(function(r) {
            ra(r);
          }), i) {
            let r = i.length;
            for (; r--; ) i[r].destroy();
          }
          for (let r in ["axisLine", "axisTitle", "axisGroup", "gridGroup", "labelGroup", "cross", "scrollbar"].forEach(function(o) {
            e[o] && (e[o] = e[o].destroy());
          }), e.plotLinesAndBandsGroups) e.plotLinesAndBandsGroups[r] = e.plotLinesAndBandsGroups[r].destroy();
          Es(e, function(r, o) {
            e.getKeepProps().indexOf(o) === -1 && delete e[o];
          }), this.eventOptions = s;
        }
        drawCrosshair(t, e) {
          let i = this.crosshair, s = i?.snap ?? !0, r = this.chart, o, a, l, c = this.cross, m;
          if (Tt(this, "drawCrosshair", { e: t, point: e }), t || (t = this.cross?.e), i && (bt(e) || !s) !== !1) {
            if (s ? bt(e) && (a = ot(this.coll !== "colorAxis" ? e.crosshairPos : null, this.isXAxis ? e.plotX : this.len - e.plotY)) : a = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), bt(a) && (m = { value: e && (this.isXAxis ? e.x : ot(e.stackY, e.y)), translatedValue: a }, r.polar && yi(m, { isCrosshair: !0, chartX: t?.chartX, chartY: t?.chartY, point: e }), o = this.getPlotLinePath(m) || null), !bt(o)) return void this.hideCrosshair();
            l = this.categories && !this.isRadial, c || (this.cross = c = r.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (l ? "category " : "thin ") + (i.className || "")).attr({ zIndex: ot(i.zIndex, 2) }).add(), !r.styledMode && (c.attr({ stroke: i.color || (l ? yt.parse("#ccd3ff").setOpacity(0.25).get() : "#cccccc"), "stroke-width": ot(i.width, 1) }).css({ "pointer-events": "none" }), i.dashStyle && c.attr({ dashstyle: i.dashStyle }))), c.show().attr({ d: o }), l && !i.width && c.attr({ "stroke-width": this.transA }), this.cross.e = t;
          } else this.hideCrosshair();
          Tt(this, "afterDrawCrosshair", { e: t, point: e });
        }
        hideCrosshair() {
          this.cross && this.cross.hide(), Tt(this, "afterHideCrosshair");
        }
        update(t, e) {
          let i = this.chart;
          t = ri(this.userOptions, t), this.destroy(!0), this.init(i, t), i.isDirtyBox = !0, ot(e, !0) && i.redraw();
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
      vi.keepProps = ["coll", "extKey", "hcEvents", "len", "names", "series", "userMax", "userMin"];
      let { addEvent: De, getMagnitude: Xn, normalizeTickInterval: Gn, timeUnits: Os } = $;
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
          return s.keepProps.includes("dateTime") || (s.keepProps.push("dateTime"), s.prototype.getTimeTicks = t, De(s, "afterSetType", e)), s;
        };
        class i {
          constructor(r) {
            this.axis = r;
          }
          normalizeTimeTickInterval(r, o) {
            let a = o || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], l = a[a.length - 1], c = Os[l[0]], m = l[1], d;
            for (d = 0; d < a.length && (c = Os[(l = a[d])[0]], m = l[1], !a[d + 1] || !(r <= (c * m[m.length - 1] + Os[a[d + 1][0]]) / 2)); d++) ;
            c === Os.year && r < 5 * c && (m = [1, 2, 5]);
            let f = Gn(r / c, m, l[0] === "year" ? Math.max(Xn(r / c), 1) : 1);
            return { unitRange: c, count: f, unitName: l[0] };
          }
          getXDateFormat(r, o) {
            let { axis: a } = this, l = a.chart.time;
            return a.closestPointRange ? l.getDateFormat(a.closestPointRange, r, a.options.startOfWeek, o) || l.resolveDTLFormat(o.year).main : l.resolveDTLFormat(o.day).main;
          }
        }
        h.Additions = i;
      })(oe || (oe = {}));
      let Yn = oe, { addEvent: Br, normalizeTickInterval: Ki, pick: $i } = $;
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
          getLogTickPositions(r, o, a, l) {
            let c = this.axis, m = c.len, d = c.options, f = [];
            if (l || (this.minorAutoInterval = void 0), r >= 0.5) r = Math.round(r), f = c.getLinearTickPositions(r, o, a);
            else if (r >= 0.08) {
              let x, y, M, w, v, T, S, O = Math.floor(o);
              for (x = r > 0.3 ? [1, 2, 4] : r > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], y = O; y < a + 1 && !S; y++) for (M = 0, w = x.length; M < w && !S; M++) (v = this.log2lin(this.lin2log(y) * x[M])) > o && (!l || T <= a) && T !== void 0 && f.push(T), T > a && (S = !0), T = v;
            } else {
              let x = this.lin2log(o), y = this.lin2log(a), M = l ? c.getMinorTickInterval() : d.tickInterval, w = d.tickPixelInterval / (l ? 5 : 1), v = l ? m / c.tickPositions.length : m;
              r = Ki(r = $i(M === "auto" ? null : M, this.minorAutoInterval, (y - x) * w / (v || 1))), f = c.getLinearTickPositions(r, x, y).map(this.log2lin), l || (this.minorAutoInterval = r / 5);
            }
            return l || (c.tickInterval = r), f;
          }
          lin2log(r) {
            return Math.pow(10, r);
          }
          log2lin(r) {
            return Math.log(r) / Math.LN10;
          }
        }
        h.Additions = i;
      })(Oi || (Oi = {}));
      let Ls = Oi, { erase: na, extend: Nr, isNumber: Ds } = $;
      (function(h) {
        let t;
        function e(c) {
          return this.addPlotBandOrLine(c, "plotBands");
        }
        function i(c, m) {
          let d = this.userOptions, f = new t(this, c);
          if (this.visible && (f = f.render()), f) {
            if (this._addedPlotLB || (this._addedPlotLB = !0, (d.plotLines || []).concat(d.plotBands || []).forEach((x) => {
              this.addPlotBandOrLine(x);
            })), m) {
              let x = d[m] || [];
              x.push(c), d[m] = x;
            }
            this.plotLinesAndBands.push(f);
          }
          return f;
        }
        function s(c) {
          return this.addPlotBandOrLine(c, "plotLines");
        }
        function r(c, m, d) {
          d = d || this.options;
          let f = this.getPlotLinePath({ value: m, force: !0, acrossPanes: d.acrossPanes }), x = [], y = this.horiz, M = !Ds(this.min) || !Ds(this.max) || c < this.min && m < this.min || c > this.max && m > this.max, w = this.getPlotLinePath({ value: c, force: !0, acrossPanes: d.acrossPanes }), v, T = 1, S;
          if (w && f) for (M && (S = w.toString() === f.toString(), T = 0), v = 0; v < w.length; v += 2) {
            let O = w[v], L = w[v + 1], D = f[v], N = f[v + 1];
            (O[0] === "M" || O[0] === "L") && (L[0] === "M" || L[0] === "L") && (D[0] === "M" || D[0] === "L") && (N[0] === "M" || N[0] === "L") && (y && D[1] === O[1] ? (D[1] += T, N[1] += T) : y || D[2] !== O[2] || (D[2] += T, N[2] += T), x.push(["M", O[1], O[2]], ["L", L[1], L[2]], ["L", N[1], N[2]], ["L", D[1], D[2]], ["Z"])), x.isFlat = S;
          }
          return x;
        }
        function o(c) {
          this.removePlotBandOrLine(c);
        }
        function a(c) {
          let m = this.plotLinesAndBands, d = this.options, f = this.userOptions;
          if (m) {
            let x = m.length;
            for (; x--; ) m[x].id === c && m[x].destroy();
            [d.plotLines || [], f.plotLines || [], d.plotBands || [], f.plotBands || []].forEach(function(y) {
              for (x = y.length; x--; ) y[x]?.id === c && na(y, y[x]);
            });
          }
        }
        function l(c) {
          this.removePlotBandOrLine(c);
        }
        h.compose = function(c, m) {
          let d = m.prototype;
          return d.addPlotBand || (t = c, Nr(d, { addPlotBand: e, addPlotLine: s, addPlotBandOrLine: i, getPlotBandPath: r, removePlotBand: o, removePlotLine: l, removePlotBandOrLine: a })), m;
        };
      })(Li || (Li = {}));
      let la = Li, { addEvent: jn, arrayMax: ha, arrayMin: Rr, defined: we, destroyObjectProperties: zr, erase: Un, fireEvent: Vn, merge: ca, objectEach: Fr, pick: qn } = $;
      class oi {
        static compose(t, e) {
          return jn(t, "afterInit", function() {
            this.labelCollectors.push(() => {
              let i = [];
              for (let s of this.axes) for (let { label: r, options: o } of s.plotLinesAndBands) r && !o?.label?.allowOverlap && i.push(r);
              return i;
            });
          }), la.compose(oi, e);
        }
        constructor(t, e) {
          this.axis = t, this.options = e, this.id = e.id;
        }
        render() {
          Vn(this, "render");
          let { axis: t, options: e } = this, { horiz: i, logarithmic: s } = t, { color: r, events: o, zIndex: a = 0 } = e, { renderer: l, time: c } = t.chart, m = {}, d = c.parse(e.to), f = c.parse(e.from), x = c.parse(e.value), y = e.borderWidth, M = e.label, { label: w, svgElem: v } = this, T = [], S, O = we(f) && we(d), L = we(x), D = !v, N = { class: "highcharts-plot-" + (O ? "band " : "line ") + (e.className || "") }, I = O ? "bands" : "lines";
          if (!t.chart.styledMode && (L ? (N.stroke = r || "#999999", N["stroke-width"] = qn(e.width, 1), e.dashStyle && (N.dashstyle = e.dashStyle)) : O && (N.fill = r || "#e6e9ff", y && (N.stroke = e.borderColor, N["stroke-width"] = y))), m.zIndex = a, I += "-" + a, (S = t.plotLinesAndBandsGroups[I]) || (t.plotLinesAndBandsGroups[I] = S = l.g("plot-" + I).attr(m).add()), v || (this.svgElem = v = l.path().attr(N).add(S)), we(x)) T = t.getPlotLinePath({ value: s?.log2lin(x) ?? x, lineWidth: v.strokeWidth(), acrossPanes: e.acrossPanes });
          else {
            if (!(we(f) && we(d))) return;
            T = t.getPlotBandPath(s?.log2lin(f) ?? f, s?.log2lin(d) ?? d, e);
          }
          return !this.eventsAdded && o && (Fr(o, (W, Y) => {
            v?.on(Y, (H) => {
              o[Y].apply(this, [H]);
            });
          }), this.eventsAdded = !0), (D || !v.d) && T?.length ? v.attr({ d: T }) : v && (T ? (v.show(), v.animate({ d: T })) : v.d && (v.hide(), w && (this.label = w = w.destroy()))), M && (we(M.text) || we(M.formatter)) && T?.length && t.width > 0 && t.height > 0 && !T.isFlat ? (M = ca({ align: i && O ? "center" : void 0, x: i ? !O && 4 : 10, verticalAlign: !i && O ? "middle" : void 0, y: i ? O ? 16 : 10 : O ? 6 : -4, rotation: i && !O ? 90 : 0, ...O ? { inside: !0 } : {} }, M), this.renderLabel(M, T, O, a)) : w && w.hide(), this;
        }
        renderLabel(t, e, i, s) {
          let r = this.axis, o = r.chart.renderer, a = t.inside, l = this.label;
          l || (this.label = l = o.text(this.getLabelText(t), 0, 0, t.useHTML).attr({ align: t.textAlign || t.align, rotation: t.rotation, class: "highcharts-plot-" + (i ? "band" : "line") + "-label " + (t.className || ""), zIndex: s }), r.chart.styledMode || l.css(ca({ color: r.chart.options.title?.style?.color, fontSize: "0.8em", textOverflow: i && !a ? "" : "ellipsis" }, t.style)), l.add());
          let c = e.xBounds || [e[0][1], e[1][1], i ? e[2][1] : e[0][1]], m = e.yBounds || [e[0][2], e[1][2], i ? e[2][2] : e[0][2]], d = Rr(c), f = Rr(m), x = ha(c) - d;
          l.align(t, !1, { x: d, y: f, width: x, height: ha(m) - f }), l.alignAttr.y -= o.fontMetrics(l).b, (!l.alignValue || l.alignValue === "left" || we(a)) && l.css({ width: (t.style?.width || (i && a ? x : l.rotation === 90 ? r.height - (l.alignAttr.y - r.top) : (t.clip ? r.width : r.chart.chartWidth) - (l.alignAttr.x - r.left))) + "px" }), l.show(!0);
        }
        getLabelText(t) {
          return we(t.formatter) ? t.formatter.call(this) : t.text;
        }
        destroy() {
          Un(this.axis.plotLinesAndBands, this), delete this.axis, zr(this);
        }
      }
      let { animObject: da } = Rt, { format: ua } = Jt, { composed: Is, dateFormats: Kn, doc: Hr, isSafari: Wr } = X, { distribute: $n } = fs, { addEvent: Zn, clamp: ki, css: $e, discardElement: _n, extend: Xr, fireEvent: Bs, getAlignFactor: pa, isArray: Gr, isNumber: ga, isObject: he, isString: Yr, merge: p, pick: n, pushUnique: u, splat: g, syncTimeout: b } = $;
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
          this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(!0), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), _n(this.container)), $.clearTimeout(this.hideTimer);
        }
        getAnchor(t, e) {
          let i, { chart: s, pointer: r } = this, o = s.inverted, a = s.plotTop, l = s.plotLeft;
          if (t = g(t), t[0].series?.yAxis && !t[0].series.yAxis.options.reversedStacks && (t = t.slice().reverse()), this.followPointer && e) e.chartX === void 0 && (e = r.normalize(e)), i = [e.chartX - l, e.chartY - a];
          else if (t[0].tooltipPos) i = t[0].tooltipPos;
          else {
            let m = 0, d = 0;
            t.forEach(function(f) {
              let x = f.pos(!0);
              x && (m += x[0], d += x[1]);
            }), m /= t.length, d /= t.length, this.shared && t.length > 1 && e && (o ? m = e.chartX : d = e.chartY), i = [m - l, d - a];
          }
          let c = { point: t[0], ret: i };
          return Bs(this, "getAnchor", c), c.ret.map(Math.round);
        }
        getClassName(t, e, i) {
          let s = this.options, r = t.series, o = r.options;
          return [s.className, "highcharts-label", i && "highcharts-tooltip-header", e ? "highcharts-tooltip-box" : "highcharts-tooltip", !i && "highcharts-color-" + n(t.colorIndex, r.colorIndex), o?.className].filter(Yr).join(" ");
        }
        getLabel({ anchorX: t, anchorY: e } = { anchorX: 0, anchorY: 0 }) {
          let i = this, s = this.chart.styledMode, r = this.options, o = this.split && this.allowShared, a = this.container, l = this.chart.renderer;
          if (this.label) {
            let c = !this.label.hasClass("highcharts-label");
            (!o && c || o && !c) && this.destroy();
          }
          if (!this.label) {
            if (this.outside) {
              let c = this.chart, m = c.options.chart.style, d = zi.getRendererType();
              this.container = a = X.doc.createElement("div"), a.className = "highcharts-tooltip-container " + (c.renderTo.className.match(/(highcharts[a-zA-Z0-9-]+)\s?/gm) || ""), $e(a, { position: "absolute", top: "1px", pointerEvents: "none", zIndex: Math.max(this.options.style.zIndex || 0, (m?.zIndex || 0) + 3) }), this.renderer = l = new d(a, 0, 0, m, void 0, void 0, l.styledMode);
            }
            if (o ? this.label = l.g("tooltip") : (this.label = l.label("", t, e, r.shape || "callout", void 0, void 0, r.useHTML, void 0, "tooltip").attr({ padding: r.padding, r: r.borderRadius }), s || this.label.attr({ fill: r.backgroundColor, "stroke-width": r.borderWidth || 0 }).css(r.style).css({ pointerEvents: r.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none") })), i.outside) {
              let c = this.label;
              [c.xSetter, c.ySetter].forEach((m, d) => {
                c[d ? "ySetter" : "xSetter"] = (f) => {
                  m.call(c, i.distance), c[d ? "y" : "x"] = f, a && (a.style[d ? "top" : "left"] = `${f}px`);
                };
              });
            }
            this.label.attr({ zIndex: 8 }).shadow(r.shadow ?? !r.fixed).add();
          }
          return a && !a.parentElement && X.doc.body.appendChild(a), this.label;
        }
        getPlayingField() {
          let { body: t, documentElement: e } = Hr, { chart: i, distance: s, outside: r } = this;
          return { width: r ? Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth) - 2 * s - 2 : i.chartWidth, height: r ? Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight) : i.chartHeight };
        }
        getPosition(t, e, i) {
          let { distance: s, chart: r, outside: o, pointer: a } = this, { inverted: l, plotLeft: c, plotTop: m, polar: d } = r, { plotX: f = 0, plotY: x = 0 } = i, y = {}, M = l && i.h || 0, { height: w, width: v } = this.getPlayingField(), T = a.getChartPosition(), S = (j) => j * T.scaleX, O = (j) => j * T.scaleY, L = (j) => {
            let q = j === "x";
            return [j, q ? v : w, q ? t : e].concat(o ? [q ? S(t) : O(e), q ? T.left - s + S(f + c) : T.top - s + O(x + m), 0, q ? v : w] : [q ? t : e, q ? f + c : x + m, q ? c : m, q ? c + r.plotWidth : m + r.plotHeight]);
          }, D = L("y"), N = L("x"), I, W = !!i.negative;
          !d && r.hoverSeries?.yAxis?.reversed && (W = !W);
          let Y = !this.followPointer && n(i.ttBelow, !d && !l === W), H = function(j, q, _, vt, ct, ie, st) {
            let it = o ? j === "y" ? O(s) : S(s) : s, pt = (_ - vt) / 2, lt = vt < ct - s, kt = ct + s + vt < q, wt = ct - it - _ + pt, mt = ct + it - pt;
            if (Y && kt) y[j] = mt;
            else if (!Y && lt) y[j] = wt;
            else if (lt) y[j] = Math.min(st - vt, wt - M < 0 ? wt : wt - M);
            else {
              if (!kt) return y[j] = 0, !1;
              y[j] = Math.max(ie, mt + M + _ > q ? mt : mt + M);
            }
          }, V = function(j, q, _, vt, ct) {
            if (ct < s || ct > q - s) return !1;
            ct < _ / 2 ? y[j] = 1 : ct > q - vt / 2 ? y[j] = q - vt - 2 : y[j] = ct - _ / 2;
          }, Z = function(j) {
            [D, N] = [N, D], I = j;
          }, J = () => {
            H.apply(0, D) !== !1 ? V.apply(0, N) !== !1 || I || (Z(!0), J()) : I ? y.x = y.y = 0 : (Z(!0), J());
          };
          return (l && !d || this.len > 1) && Z(), J(), y;
        }
        getFixedPosition(t, e, i) {
          let s = i.series, { chart: r, options: o, split: a } = this, l = o.position, c = l.relativeTo, m = o.shared || s?.yAxis?.isRadial && (c === "pane" || !c) ? "plotBox" : c, d = m === "chart" ? r.renderer : r[m] || r.getClipBox(s, !0);
          return { x: d.x + (d.width - t) * pa(l.align) + l.x, y: d.y + (d.height - e) * pa(l.verticalAlign) + (!a && l.y || 0) };
        }
        hide(t) {
          let e = this;
          $.clearTimeout(this.hideTimer), t = n(t, this.options.hideDelay), this.isHidden || (this.hideTimer = b(function() {
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
          let { chart: i, options: s, pointer: r, shared: o } = this, a = g(t), l = a[0], c = s.format, m = s.formatter || this.defaultFormatter, d = i.styledMode, f = this.allowShared;
          if (!s.enabled || !l.series) return;
          $.clearTimeout(this.hideTimer), this.allowShared = !(!Gr(t) && t.series && t.series.noSharedTooltip), f = f && !this.allowShared, this.followPointer = !this.split && l.series.tooltipOptions.followPointer;
          let x = this.getAnchor(t, e), y = x[0], M = x[1];
          o && this.allowShared && (r.applyInactiveState(a), a.forEach((T) => T.setState("hover")), l.points = a), this.len = a.length;
          let w = Yr(c) ? ua(c, l, i) : m.call(l, this);
          l.points = void 0;
          let v = l.series;
          if (this.distance = n(v.tooltipOptions.distance, 16), w === !1) this.hide();
          else {
            if (this.split && this.allowShared) this.renderSplit(w, a);
            else {
              let T = y, S = M;
              if (e && r.isDirectTouch && (T = e.chartX - i.plotLeft, S = e.chartY - i.plotTop), !(i.polar || v.options.clip === !1 || a.some((O) => r.isDirectTouch || O.series.shouldShowTooltip(T, S)))) return void this.hide();
              {
                let O = this.getLabel(f && this.tt || {});
                (!s.style.width || d) && O.css({ width: (this.outside ? this.getPlayingField() : i.spacingBox).width + "px" }), O.attr({ class: this.getClassName(l), text: w && w.join ? w.join("") : w }), this.outside && O.attr({ x: ki(O.x || 0, 0, this.getPlayingField().width - (O.width || 0) - 1) }), d || O.attr({ stroke: s.borderColor || l.color || v.color || "#666666" }), this.updatePosition({ plotX: y, plotY: M, negative: l.negative, ttBelow: l.ttBelow, series: v, h: x[2] || 0 });
              }
            }
            this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(), this.isHidden = !1;
          }
          Bs(this, "refresh");
        }
        renderSplit(t, e) {
          let i = this, { chart: s, chart: { chartWidth: r, chartHeight: o, plotHeight: a, plotLeft: l, plotTop: c, scrollablePixelsY: m = 0, scrollablePixelsX: d, styledMode: f }, distance: x, options: y, options: { fixed: M, position: w, positioner: v }, pointer: T } = i, { scrollLeft: S = 0, scrollTop: O = 0 } = s.scrollablePlotArea?.scrollingContainer || {}, L = i.outside && typeof d != "number" ? Hr.documentElement.getBoundingClientRect() : { left: S, right: S + r }, D = i.getLabel(), N = this.renderer || s.renderer, I = !!s.xAxis[0]?.opposite, { left: W, top: Y } = T.getChartPosition(), H = v || M, V = c + O, Z = 0, J = a - m, j = function(st, it, pt, lt = [0, 0], kt = !0) {
            let wt, mt;
            if (pt.isHeader) mt = I ? 0 : J, wt = ki(lt[0] - st / 2, L.left, L.right - st - (i.outside ? W : 0));
            else if (M && pt) {
              let Lt = i.getFixedPosition(st, it, pt);
              wt = Lt.x, mt = Lt.y - V;
            } else mt = lt[1] - V, wt = ki(wt = kt ? lt[0] - st - x : lt[0] + x, kt ? wt : L.left, L.right);
            return { x: wt, y: mt };
          };
          Yr(t) && (t = [!1, t]);
          let q = t.slice(0, e.length + 1).reduce(function(st, it, pt) {
            if (it !== !1 && it !== "") {
              let lt = e[pt - 1] || { isHeader: !0, plotX: e[0].plotX, plotY: a, series: {} }, kt = lt.isHeader, wt = kt ? i : lt.series, mt = wt.tt = (function(ze, re, Je) {
                let Pi = ze, { isHeader: ts, series: eo } = re, Fe = eo.tooltipOptions || y;
                if (!Pi) {
                  let Hs = { padding: Fe.padding, r: Fe.borderRadius };
                  f || (Hs.fill = Fe.backgroundColor, Hs["stroke-width"] = Fe.borderWidth ?? (M && !ts ? 0 : 1)), Pi = N.label("", 0, 0, Fe[ts ? "headerShape" : "shape"] || (M && !ts ? "rect" : "callout"), void 0, void 0, Fe.useHTML).addClass(i.getClassName(re, !0, ts)).attr(Hs).add(D);
                }
                return Pi.isActive = !0, Pi.attr({ text: Je }), f || Pi.css(Fe.style).attr({ stroke: Fe.borderColor || re.color || eo.color || "#333333" }), Pi;
              })(wt.tt, lt, it.toString()), Lt = mt.getBBox(), se = Lt.width + mt.strokeWidth();
              kt && (Z = Lt.height, J += Z, I && (V -= Z));
              let { anchorX: de, anchorY: Ei } = (function(ze) {
                let re, Je, { isHeader: Pi, plotX: ts = 0, plotY: eo = 0, series: Fe } = ze;
                if (Pi) re = Math.max(l + ts, l), Je = c + a / 2;
                else {
                  let { xAxis: Hs, yAxis: $h } = Fe;
                  re = Hs.pos + ki(ts, -x, Hs.len + x), Fe.shouldShowTooltip(0, $h.pos - c + eo, { ignoreX: !0 }) && (Je = $h.pos + eo);
                }
                return { anchorX: re = ki(re, L.left - x, L.right + x), anchorY: Je };
              })(lt);
              if (typeof Ei == "number") {
                let ze = Lt.height + 1, re = (v || j).call(i, se, ze, lt, [de, Ei]);
                st.push({ align: H ? 0 : void 0, anchorX: de, anchorY: Ei, boxWidth: se, point: lt, rank: n(re.rank, +!!kt), size: ze, target: re.y, tt: mt, x: re.x });
              } else mt.isActive = !1;
            }
            return st;
          }, []);
          !H && q.some((st) => {
            let { outside: it } = i, pt = (it ? W : 0) + st.anchorX;
            return pt < L.left && pt + st.boxWidth < L.right || pt < W - L.left + st.boxWidth && L.right - pt > pt;
          }) && (q = q.map((st) => {
            let { x: it, y: pt } = j.call(this, st.boxWidth, st.size, st.point, [st.anchorX, st.anchorY], !1);
            return Xr(st, { target: pt, x: it });
          })), i.cleanSplit(), $n(q, J);
          let _ = { left: W, right: W };
          q.forEach(function(st) {
            let { x: it, boxWidth: pt, isHeader: lt } = st;
            !lt && (i.outside && W + it < _.left && (_.left = W + it), !lt && i.outside && _.left + pt > _.right && (_.right = W + it));
          }), q.forEach(function(st) {
            let { x: it, anchorX: pt, anchorY: lt, pos: kt, point: { isHeader: wt } } = st, mt = { visibility: kt === void 0 ? "hidden" : "inherit", x: it, y: (kt || 0) + V + (M && w.y || 0), anchorX: pt, anchorY: lt };
            if (i.outside && it < pt) {
              let Lt = W - _.left;
              Lt > 0 && (wt || (mt.x = it + Lt, mt.anchorX = pt + Lt), wt && (mt.x = (_.right - _.left) / 2, mt.anchorX = pt + Lt));
            }
            st.tt.attr(mt);
          });
          let { container: vt, outside: ct, renderer: ie } = i;
          if (ct && vt && ie) {
            let { width: st, height: it, x: pt, y: lt } = D.getBBox();
            ie.setSize(st + pt, it + lt, !1), vt.style.left = _.left + "px", vt.style.top = Y + "px";
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
          let i = t.series, s = i.tooltipOptions, r = i.xAxis, o = r?.dateTime, a = { isFooter: e, point: t }, l = s.xDateFormat || "", c = s[e ? "footerFormat" : "headerFormat"];
          return Bs(this, "headerFormatter", a, function(m) {
            if (o && !l && ga(t.key) && (l = o.getXDateFormat(t.key, s.dateTimeLabelFormats)), o && l) {
              if (he(l)) {
                let d = l;
                Kn[0] = (f) => i.chart.time.dateFormat(d, f), l = "%0";
              }
              (t.tooltipDateKeys || ["key"]).forEach((d) => {
                c = c.replace(RegExp("point\\." + d + "([ \\)}])"), `(point.${d}:${l})$1`);
              });
            }
            i.chart.styledMode && (c = this.styledModeFormat(c)), m.text = ua(c, t, this.chart);
          }), a.text || "";
        }
        update(t) {
          this.destroy(), this.init(this.chart, p(!0, this.options, t));
        }
        updatePosition(t) {
          let { chart: e, container: i, distance: s, options: r, pointer: o, renderer: a } = this, { height: l = 0, width: c = 0 } = this.getLabel(), { fixed: m, positioner: d } = r, { left: f, top: x, scaleX: y, scaleY: M } = o.getChartPosition(), w = (d || m && this.getFixedPosition || this.getPosition).call(this, c, l, t), v = X.doc, T = (t.plotX || 0) + e.plotLeft, S = (t.plotY || 0) + e.plotTop, O;
          if (a && i) {
            if (d || m) {
              let { scrollLeft: L = 0, scrollTop: D = 0 } = e.scrollablePlotArea?.scrollingContainer || {};
              w.x += L + f - s, w.y += D + x - s;
            }
            O = (r.borderWidth || 0) + 2 * s + 2, a.setSize(ki(c + O, 0, v.documentElement.clientWidth) - 1, l + O, !1), (y !== 1 || M !== 1) && ($e(i, { transform: `scale(${y}, ${M})` }), T *= y, S *= M), T += f - w.x, S += x - w.y;
          }
          this.move(Math.round(w.x), Math.round(w.y || 0), T, S);
        }
      }
      (function(h) {
        h.compose = function(t) {
          u(Is, "Core.Tooltip") && Zn(t, "afterInit", function() {
            let e = this.chart;
            e.options.tooltip && (e.tooltip = new h(e, e.options.tooltip, this));
          });
        };
      })(C || (C = {}));
      let k = C, { animObject: A } = Rt, { defaultOptions: E } = te, { format: P } = Jt, { addEvent: B, crisp: z, erase: R, extend: F, fireEvent: G, getNestedProperty: U, isArray: dt, isFunction: nt, isNumber: rt, isObject: ht, merge: tt, pick: et, syncTimeout: ft, removeEvent: xt, uniqueKey: Xt } = $;
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
            let t = this, e = t.series, i = e.chart, s = e.options.dataSorting, r = i.hoverPoints, o = A(t.series.chart.renderer.globalAnimation), a = () => {
              for (let l in (t.graphic || t.graphics || t.dataLabel || t.dataLabels) && (xt(t), t.destroyElements()), t) delete t[l];
            };
            t.legendItem && i.legend.destroyItem(t), r && (t.setState(), R(r, t), r.length || (i.hoverPoints = null)), t === i.hoverPoint && t.onMouseOut(), s?.enabled ? (this.animateBeforeDestroy(), ft(a, o.duration)) : a(), i.pointCount--;
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
          this.formatPrefix = "point", this.visible = !0, this.point = this, this.series = t, this.applyOptions(e, i), this.id ?? (this.id = Xt()), this.resolveColor(), this.dataLabelOnNull ?? (this.dataLabelOnNull = t.options.nullInteraction), t.chart.pointCount++, G(this, "afterInit");
        }
        isValid() {
          return (rt(this.x) || this.x instanceof Date) && rt(this.y);
        }
        optionsToObject(t) {
          let e = this.series, i = e.options.keys, s = i || e.pointArrayMap || ["y"], r = s.length, o = {}, a, l = 0, c = 0;
          if (rt(t) || t === null) o[s[0]] = t;
          else if (dt(t)) for (!i && t.length > r && ((a = typeof t[0]) == "string" ? e.xAxis?.dateTime ? o.x = e.chart.time.parse(t[0]) : o.name = t[0] : a === "number" && (o.x = t[0]), l++); c < r; ) i && t[l] === void 0 || (s[c].indexOf(".") > 0 ? St.prototype.setNestedProperty(o, t[l], s[c]) : o[s[c]] = t[l]), l++, c++;
          else typeof t == "object" && (o = t, t.dataLabels && (e.hasDataLabels = () => !0), t.marker && (e._hasPointMarkers = !0));
          return o;
        }
        pos(t, e = this.plotY) {
          if (!this.destroyed) {
            let { plotX: i, series: s } = this, { chart: r, xAxis: o, yAxis: a } = s, l = 0, c = 0;
            if (rt(i) && rt(e)) return t && (l = o ? o.pos : r.plotLeft, c = a ? a.pos : r.plotTop), r.inverted && o && a ? [a.len - e + c, o.len - i + l] : [i + l, e + c];
          }
        }
        resolveColor() {
          let t = this.series, e = t.chart.options.chart, i = t.chart.styledMode, s, r, o = e.colorCount, a;
          delete this.nonZonedColor, t.options.colorByPoint ? (i || (s = (r = t.options.colors || t.chart.options.colors)[t.colorCounter], o = r.length), a = t.colorCounter, t.colorCounter++, t.colorCounter === o && (t.colorCounter = 0)) : (i || (s = t.color), a = t.colorIndex), this.colorIndex = et(this.options.colorIndex, a), this.color = et(this.options.color, s);
        }
        setNestedProperty(t, e, i) {
          return i.split(".").reduce(function(s, r, o, a) {
            let l = a.length - 1 === o;
            return s[r] = l ? e : ht(s[r], !0) ? s[r] : {}, s[r];
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
          let r, o = this, a = o.series, l = o.graphic, c = a.chart, m = a.options;
          function d() {
            o.applyOptions(t);
            let f = l && o.hasMockGraphic, x = o.y === null ? !f : f;
            l && x && (o.graphic = l.destroy(), delete o.hasMockGraphic), ht(t, !0) && (l?.element && t && t.marker && t.marker.symbol !== void 0 && (o.graphic = l.destroy()), t?.dataLabels && o.dataLabel && (o.dataLabel = o.dataLabel.destroy())), r = o.index;
            let y = {};
            for (let M of a.dataColumnKeys()) y[M] = o[M];
            a.dataTable.setRow(y, r), m.data[r] = ht(m.data[r], !0) || ht(t, !0) ? o.options : et(t, m.data[r]), a.isDirty = a.isDirtyData = !0, !a.fixedBox && a.hasCartesianSeries && (c.isDirtyBox = !0), m.legendType === "point" && (c.isDirtyLegend = !0), e && c.redraw(i);
          }
          e = et(e, !0), s === !1 ? d() : o.firePointEvent("update", { options: t }, d);
        }
        remove(t, e) {
          this.series.removePoint(this.series.data.indexOf(this), t, e);
        }
        select(t, e) {
          let i = this, s = i.series, r = s.chart;
          t = et(t, !i.selected), this.selectedStaging = t, i.firePointEvent(t ? "select" : "unselect", { accumulate: e }, function() {
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
          let e = tt(this.series.options.point, this.options), i = e.events?.[t];
          nt(i) && (!this.hcEvents?.[t] || this.hcEvents?.[t]?.map((s) => s.fn).indexOf(i) === -1) ? (this.importedUserEvent?.(), this.importedUserEvent = B(this, t, i), this.hcEvents && (this.hcEvents[t].userEvent = !0)) : this.importedUserEvent && !i && this.hcEvents?.[t] && this.hcEvents?.[t].userEvent && (xt(this, t), delete this.hcEvents[t], Object.keys(this.hcEvents) || delete this.importedUserEvent);
        }
        setState(t, e) {
          let i = this.series, s = this.state, r = i.options.states[t || "normal"] || {}, o = E.plotOptions[i.type].marker && i.options.marker, a = o && o.enabled === !1, l = o?.states?.[t || "normal"] || {}, c = l.enabled === !1, m = this.marker || {}, d = i.chart, f = o && i.markerAttribs, x = i.halo, y, M, w, v = i.stateMarkerGraphic, T;
          if ((t = t || "") === this.state && !e || this.selected && t !== "select" || r.enabled === !1 || t && (c || a && l.enabled === !1) || t && m.states && m.states[t] && m.states[t].enabled === !1) return;
          if (this.state = t, f && (y = i.markerAttribs(this, t)), this.graphic && !this.hasMockGraphic) {
            if (s && this.graphic.removeClass("highcharts-point-" + s), t && this.graphic.addClass("highcharts-point-" + t), !d.styledMode) {
              M = i.pointAttribs(this, t), w = et(d.options.chart.animation, r.animation);
              let D = M.opacity;
              i.options.inactiveOtherPoints && rt(D) && (this.dataLabels || []).forEach(function(N) {
                N && !N.hasClass("highcharts-data-label-hidden") && (N.animate({ opacity: D }, w), N.connector && N.connector.animate({ opacity: D }, w));
              }), this.graphic.animate(M, w);
            }
            y && this.graphic.animate(y, et(d.options.chart.animation, l.animation, o.animation)), v && v.hide();
          } else t && l && (T = m.symbol || i.symbol, v && v.currentSymbol !== T && (v = v.destroy()), y && (v ? v[e ? "animate" : "attr"]({ x: y.x, y: y.y }) : T && (i.stateMarkerGraphic = v = d.renderer.symbol(T, y.x, y.y, y.width, y.height, tt(o, l)).add(i.markerGroup), v.currentSymbol = T)), !d.styledMode && v && this.state !== "inactive" && v.attr(i.pointAttribs(this, t))), v && (v[t && this.isInside ? "show" : "hide"](), v.element.point = this, v.addClass(this.getClassName(), !0));
          let S = r.halo, O = this.graphic || v, L = O?.visibility || "inherit";
          S?.size && O && L !== "hidden" && !this.isCluster ? (x || (i.halo = x = d.renderer.path().add(O.parentGroup)), x.show()[e ? "animate" : "attr"]({ d: this.haloPath(S.size) }), x.attr({ class: "highcharts-halo highcharts-color-" + et(this.colorIndex, i.colorIndex) + (this.className ? " " + this.className : ""), visibility: L, zIndex: -1 }), x.point = this, d.styledMode || x.attr(F({ fill: this.color || i.color, "fill-opacity": S.opacity }, Ct.filterUserAttributes(S.attributes || {})))) : x?.point?.haloPath && !x.point.destroyed && x.animate({ d: x.point.haloPath(0) }, null, x.hide), G(this, "afterSetState", { state: t });
        }
        haloPath(t) {
          let e = this.pos();
          return e ? this.series.chart.renderer.symbols.circle(z(e[0], 1) - t, e[1] - t, 2 * t, 2 * t) : [];
        }
      }
      let Bt = St, { parse: Ie } = yt, { charts: Ns, composed: ic, isTouchDevice: sc } = X, { addEvent: Me, attr: rc, css: Jn, extend: Qn, find: zl, fireEvent: wi, isNumber: ma, isObject: fa, objectEach: oc, offset: ac, pick: Ze, pushUnique: nc, splat: Fl } = $;
      class jt {
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
          this.eventsToUnbind.forEach((e) => e()), this.eventsToUnbind = [], !X.chartCount && (jt.unbindDocumentMouseUp.forEach((e) => e.unbind()), jt.unbindDocumentMouseUp.length = 0, jt.unbindDocumentTouchEnd && (jt.unbindDocumentTouchEnd = jt.unbindDocumentTouchEnd())), clearInterval(t.tooltipTimeout), oc(t, function(e, i) {
            t[i] = void 0;
          });
        }
        getSelectionMarkerAttrs(t, e) {
          let i = { args: { chartX: t, chartY: e }, attrs: {}, shapeType: "rect" };
          return wi(this, "getSelectionMarkerAttrs", i, (s) => {
            let r, { chart: o, zoomHor: a, zoomVert: l } = this, { mouseDownX: c = 0, mouseDownY: m = 0 } = o, d = s.attrs;
            d.x = o.plotLeft, d.y = o.plotTop, d.width = a ? 1 : o.plotWidth, d.height = l ? 1 : o.plotHeight, a && (d.width = Math.max(1, Math.abs(r = t - c)), d.x = (r > 0 ? 0 : r) + c), l && (d.height = Math.max(1, Math.abs(r = e - m)), d.y = (r > 0 ? 0 : r) + m);
          }), i;
        }
        drag(t) {
          let { chart: e } = this, { mouseDownX: i = 0, mouseDownY: s = 0 } = e, { panning: r, panKey: o, selectionMarkerFill: a } = e.options.chart, l = e.plotLeft, c = e.plotTop, m = e.plotWidth, d = e.plotHeight, f = fa(r) ? r.enabled : r, x = o && t[`${o}Key`], y = t.chartX, M = t.chartY, w, v = this.selectionMarker;
          if ((!v || !v.touch) && (y < l ? y = l : y > l + m && (y = l + m), M < c ? M = c : M > c + d && (M = c + d), this.hasDragged = Math.sqrt(Math.pow(i - y, 2) + Math.pow(s - M, 2)), this.hasDragged > 10)) {
            w = e.isInsidePlot(i - l, s - c, { visiblePlotOnly: !0 });
            let { shapeType: T, attrs: S } = this.getSelectionMarkerAttrs(y, M);
            this.hasZoom && w && !x && !v && (this.selectionMarker = v = e.renderer[T](), v.attr({ class: "highcharts-selection-marker", zIndex: 7 }).add(), e.styledMode || v.attr({ fill: a || Ie("#334eff").setOpacity(0.25).get() })), v && v.attr(S), w && !v && f && e.pan(t, r);
          }
        }
        dragStart(t) {
          let e = this.chart;
          e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = t.chartX, e.mouseDownY = t.chartY;
        }
        getSelectionBox(t) {
          let e = { args: { marker: t }, result: t.getBBox() };
          return wi(this, "getSelectionBox", e), e.result;
        }
        drop(t) {
          let e, { chart: i, selectionMarker: s } = this;
          for (let r of i.axes) r.isPanning && (r.isPanning = !1, (r.options.startOnTick || r.options.endOnTick || r.series.some((o) => o.boosted)) && (r.forceRedraw = !0, r.setExtremes(r.userMin, r.userMax, !1), e = !0));
          if (e && i.redraw(), s && t) {
            if (this.hasDragged) {
              let r = this.getSelectionBox(s);
              i.transform({ axes: i.axes.filter((o) => o.zoomEnabled && (o.coll === "xAxis" && this.zoomX || o.coll === "yAxis" && this.zoomY)), selection: { originalEvent: t, xAxis: [], yAxis: [], ...r }, from: r });
            }
            ma(i.index) && (this.selectionMarker = s.destroy());
          }
          i && ma(i.index) && (Jn(i.container, { cursor: i._cursor }), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = !1, this.hasDragged = 0, this.pinchDown = [], this.hasPinchMoved = !1);
        }
        findNearestKDPoint(t, e, i) {
          let s;
          return t.forEach(function(r) {
            let o = !(r.noSharedTooltip && e) && 0 > r.options.findNearestPointBy.indexOf("y"), a = r.searchPoint(i, o);
            fa(a, !0) && a.series && (!fa(s, !0) || (function(l, c) {
              let m = l.distX - c.distX, d = l.dist - c.dist, f = c.series.group?.zIndex - l.series.group?.zIndex;
              return m !== 0 && e ? m : d !== 0 ? d : f !== 0 ? f : l.series.index > c.series.index ? -1 : 1;
            })(s, a) > 0) && (s = a);
          }), s;
        }
        getChartCoordinatesFromPoint(t, e) {
          let { xAxis: i, yAxis: s } = t.series, r = t.shapeArgs;
          if (i && s) {
            let o = t.clientX ?? t.plotX ?? 0, a = t.plotY || 0;
            return t.isNode && r && ma(r.x) && ma(r.y) && (o = r.x, a = r.y), e ? { chartX: s.len + s.pos - a, chartY: i.len + i.pos - o } : { chartX: o + i.pos, chartY: a + s.pos };
          }
          if (r?.x && r.y) return { chartX: r.x, chartY: r.y };
        }
        getChartPosition() {
          if (this.chartPosition) return this.chartPosition;
          let { container: t } = this.chart, e = ac(t);
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
            return x.visible && !(!r && x.directTouch) && Ze(x.options.enableMouseTracking, !0);
          }, c = e, m, d = { chartX: o ? o.chartX : void 0, chartY: o ? o.chartY : void 0, shared: r };
          wi(this, "beforeGetHoverData", d), m = c && !c.stickyTracking ? [c] : i.filter((x) => x.stickyTracking && (d.filter || l)(x));
          let f = s && t || !o ? t : this.findNearestKDPoint(m, r, o);
          return c = f?.series, f && (r && !c.noSharedTooltip ? (m = i.filter(function(x) {
            return d.filter ? d.filter(x) : l(x) && !x.noSharedTooltip;
          })).forEach(function(x) {
            let y = x.options?.nullInteraction, M = zl(x.points, function(w) {
              return w.x === f.x && (!w.isNull || !!y);
            });
            fa(M) && (x.boosted && x.boost && (M = x.boost.getPoint(M)), a.push(M));
          }) : a.push(f)), wi(this, "afterGetHoverData", d = { hoverPoint: f }), { hoverPoint: d.hoverPoint, hoverSeries: c, hoverPoints: a };
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
            if (s = rc(i, "class")) {
              if (s.indexOf(e) !== -1) return !0;
              if (s.indexOf("highcharts-container") !== -1) return !1;
            }
            i = i.parentElement;
          }
        }
        constructor(t, e) {
          this.hasDragged = 0, this.pointerCaptureEventsToUnbind = [], this.eventsToUnbind = [], this.options = e, this.chart = t, this.runChartClick = !!e.chart.events?.click, this.pinchDown = [], this.setDOMEvents(), wi(this, "afterInit");
        }
        normalize(t, e) {
          let i = t.touches, s = i ? i.length ? i.item(0) : Ze(i.changedTouches, t.changedTouches)[0] : t;
          e || (e = this.getChartPosition());
          let r = s.pageX - e.left, o = s.pageY - e.top;
          return Qn(t, { chartX: Math.round(r /= e.scaleX), chartY: Math.round(o /= e.scaleY) });
        }
        onContainerClick(t) {
          let e = this.chart, i = e.hoverPoint, s = this.normalize(t), r = e.plotLeft, o = e.plotTop;
          !e.cancelClick && (i && this.inClass(s.target, "highcharts-tracker") ? (wi(i.series, "click", Qn(s, { point: i })), e.hoverPoint && i.firePointEvent("click", s)) : (Qn(s, this.getCoordinates(s)), e.isInsidePlot(s.chartX - r, s.chartY - o, { visiblePlotOnly: !0 }) && wi(e, "click", s)));
        }
        onContainerMouseDown(t) {
          let e = (1 & (t.buttons || t.button)) == 1;
          t = this.normalize(t), X.isFirefox && t.button !== 0 && this.onContainerMouseMove(t), (t.button === void 0 || e) && (this.zoomOption(t), e && t.preventDefault?.(), this.dragStart(t));
        }
        onContainerMouseLeave(t) {
          let { pointer: e } = Ns[Ze(jt.hoverChartIndex, -1)] || {};
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
          t?.touches && this.hasPinchMoved && t?.preventDefault?.(), Ns[Ze(jt.hoverChartIndex, -1)]?.pointer?.drop(t);
        }
        pinch(t) {
          let e = this, { chart: i, hasZoom: s, lastTouches: r } = e, o = [].map.call(t.touches || [], (d) => e.normalize(d)), a = o.length, l = a === 1 && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick), c = i.tooltip, m = a === 1 && Ze(c?.options.followTouchMove, !0);
          a > 1 ? e.initiated = !0 : m && (e.initiated = !1), s && e.initiated && !l && t.cancelable !== !1 && t.preventDefault(), t.type === "touchstart" ? (e.pinchDown = o, e.res = !0, i.mouseDownX = t.chartX) : m ? this.runPointActions(e.normalize(t)) : r && (wi(i, "touchpan", { originalEvent: t, touches: o }, () => {
            let d = (f) => {
              let x = f[0], y = f[1] || x;
              return { x: x.chartX, y: x.chartY, width: y.chartX - x.chartX, height: y.chartY - x.chartY };
            };
            i.transform({ axes: i.axes.filter((f) => f.zoomEnabled && (this.zoomHor && f.horiz || this.zoomVert && !f.horiz)), to: d(o), from: d(r), trigger: t.type });
          }), e.res && (e.res = !1, this.reset(!1, 0))), e.lastTouches = o;
        }
        reset(t, e) {
          let i = this.chart, s = i.hoverSeries, r = i.hoverPoint, o = i.hoverPoints, a = i.tooltip, l = a?.shared ? o : r;
          t && l && Fl(l).forEach(function(c) {
            c.series.isCartesian && c.plotX === void 0 && (t = !1);
          }), t ? a && l && Fl(l).length && (a.refresh(l), a.shared && o ? o.forEach(function(c) {
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
          let s = this.chart, r = s.series, o = s.tooltip?.options.enabled ? s.tooltip : void 0, a = !!o && o.shared, l = e || s.hoverPoint, c = l?.series || s.hoverSeries, m = (!t || t.type !== "touchmove") && (!!e || c?.directTouch && this.isDirectTouch), d = this.getHoverData(l, c, r, m, a, t);
          l = d.hoverPoint, c = d.hoverSeries;
          let f = d.hoverPoints, x = c?.tooltipOptions.followPointer && !c.tooltipOptions.split, y = a && c && !c.noSharedTooltip;
          if (l && (i || l !== s.hoverPoint || o?.isHidden)) {
            if ((s.hoverPoints || []).forEach(function(M) {
              f.indexOf(M) === -1 && M.setState();
            }), s.hoverSeries !== c && c.onMouseOver(), this.applyInactiveState(f), (f || []).forEach(function(M) {
              M.setState("hover");
            }), s.hoverPoint && s.hoverPoint.firePointEvent("mouseOut"), !l.series) return;
            s.hoverPoints = f, s.hoverPoint = l, l.firePointEvent("mouseOver", void 0, () => {
              o && l && o.refresh(y ? f : l, t);
            });
          } else if (x && o && !o.isHidden) {
            let M = o.getAnchor([{}], t);
            s.isInsidePlot(M[0], M[1], { visiblePlotOnly: !0 }) && o.updatePosition({ plotX: M[0], plotY: M[1] });
          }
          this.unDocMouseMove || (this.unDocMouseMove = Me(s.container.ownerDocument, "mousemove", (M) => Ns[jt.hoverChartIndex ?? -1]?.pointer?.onDocumentMouseMove(M)), this.eventsToUnbind.push(this.unDocMouseMove)), s.axes.forEach(function(M) {
            let w, v = M.crosshair?.snap ?? !0;
            v && ((w = s.hoverPoint) && w.series[M.coll] === M || (w = zl(f, (T) => T.series?.[M.coll] === M))), w || !v ? M.drawCrosshair(t, w) : M.hideCrosshair();
          });
        }
        setDOMEvents() {
          let t = this.chart.container, e = t.ownerDocument;
          t.onmousedown = this.onContainerMouseDown.bind(this), t.onmousemove = this.onContainerMouseMove.bind(this), t.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(Me(t, "mouseenter", this.onContainerMouseEnter.bind(this)), Me(t, "mouseleave", this.onContainerMouseLeave.bind(this))), jt.unbindDocumentMouseUp.some((s) => s.doc === e) || jt.unbindDocumentMouseUp.push({ doc: e, unbind: Me(e, "mouseup", this.onDocumentMouseUp.bind(this)) });
          let i = this.chart.renderTo.parentElement;
          for (; i && i.tagName !== "BODY"; ) this.eventsToUnbind.push(Me(i, "scroll", () => {
            delete this.chartPosition;
          })), i = i.parentElement;
          this.eventsToUnbind.push(Me(t, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 }), Me(t, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })), jt.unbindDocumentTouchEnd || (jt.unbindDocumentTouchEnd = Me(e, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 })), this.setPointerCapture(), Me(this.chart, "redraw", this.setPointerCapture.bind(this));
        }
        setPointerCapture() {
          if (!sc) return;
          let t = this.pointerCaptureEventsToUnbind, e = this.chart, i = e.container, s = Ze(e.options.tooltip?.followTouchMove, !0) && e.series.some((r) => r.options.findNearestPointBy.indexOf("y") > -1);
          !this.hasPointerCapture && s ? (t.push(Me(i, "pointerdown", (r) => {
            r.target?.hasPointerCapture(r.pointerId) && r.target?.releasePointerCapture(r.pointerId);
          }), Me(i, "pointermove", (r) => {
            e.pointer?.getPointFromEvent(r)?.onMouseOver(r);
          })), e.styledMode || Jn(i, { "touch-action": "none" }), i.className += " highcharts-no-touch-action", this.hasPointerCapture = !0) : this.hasPointerCapture && !s && (t.forEach((r) => r()), t.length = 0, e.styledMode || Jn(i, { "touch-action": Ze(e.options.chart.style?.["touch-action"], "manipulation") }), i.className = i.className.replace(" highcharts-no-touch-action", ""), this.hasPointerCapture = !1);
        }
        setHoverChartIndex(t) {
          let e = this.chart, i = X.charts[Ze(jt.hoverChartIndex, -1)];
          if (i && i !== e) {
            let s = { relatedTarget: e.container };
            t && !t?.relatedTarget && Object.assign({}, t, s), i.pointer?.onContainerMouseLeave(t || s);
          }
          i?.mouseIsDown || (jt.hoverChartIndex = e.index);
        }
        touch(t, e) {
          let i, { chart: s, pinchDown: r = [] } = this;
          this.setHoverChartIndex(), (t = this.normalize(t)).touches.length === 1 ? s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop, { visiblePlotOnly: !0 }) && !s.exporting?.openMenu ? (e && this.runPointActions(t), t.type === "touchmove" && (this.hasPinchMoved = i = !!r[0] && Math.pow(r[0].chartX - t.chartX, 2) + Math.pow(r[0].chartY - t.chartY, 2) >= 16), Ze(i, !0) && this.pinch(t)) : e && this.reset() : t.touches.length === 2 && this.pinch(t);
        }
        touchSelect(t) {
          return !!(this.chart.zooming.singleTouch && t.touches && t.touches.length === 1);
        }
        zoomOption(t) {
          let e = this.chart, i = e.inverted, s = e.zooming.type || "", r, o;
          /touch/.test(t.type) && (s = Ze(e.zooming.pinchType, s)), this.zoomX = r = /x/.test(s), this.zoomY = o = /y/.test(s), this.zoomHor = r && !i || o && i, this.zoomVert = o && !i || r && i, this.hasZoom = r || o;
        }
      }
      jt.unbindDocumentMouseUp = [], (function(h) {
        h.compose = function(t) {
          nc(ic, "Core.Pointer") && Me(t, "beforeRender", function() {
            this.pointer = new h(this, this.options);
          });
        };
      })(jt || (jt = {}));
      let Hl = jt;
      (function(h) {
        h.setLength = function(t, e, i) {
          return Array.isArray(t) ? (t.length = e, t) : t[i ? "subarray" : "slice"](0, e);
        }, h.splice = function(t, e, i, s, r = []) {
          if (Array.isArray(t)) return Array.isArray(r) || (r = Array.from(r)), { removed: t.splice(e, i, ...r), array: t };
          let o = Object.getPrototypeOf(t).constructor, a = t[s ? "subarray" : "slice"](e, e + i), l = new o(t.length - i + r.length);
          return l.set(t.subarray(0, e), 0), l.set(r, e), l.set(t.subarray(e + i), e + r.length), { removed: a, array: l };
        };
      })(ni || (ni = {}));
      let { setLength: lc, splice: Wl } = ni, { fireEvent: tl, objectEach: jr, uniqueKey: Ur } = $, xa = class {
        constructor(h = {}) {
          this.autoId = !h.id, this.columns = {}, this.id = h.id || Ur(), this.modified = this, this.rowCount = 0, this.versionTag = Ur();
          let t = 0;
          jr(h.columns || {}, (e, i) => {
            this.columns[i] = e.slice(), t = Math.max(t, e.length);
          }), this.applyRowCount(t);
        }
        applyRowCount(h) {
          this.rowCount = h, jr(this.columns, (t, e) => {
            t.length !== h && (this.columns[e] = lc(t, h));
          });
        }
        deleteRows(h, t = 1) {
          if (t > 0 && h < this.rowCount) {
            let e = 0;
            jr(this.columns, (i, s) => {
              this.columns[s] = Wl(i, h, t).array, e = i.length;
            }), this.rowCount = e;
          }
          tl(this, "afterDeleteRows", { rowIndex: h, rowCount: t }), this.versionTag = Ur();
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
          }), this.applyRowCount(i), e?.silent || (tl(this, "afterSetColumns"), this.versionTag = Ur());
        }
        setRow(h, t = this.rowCount, e, i) {
          let { columns: s } = this, r = e ? this.rowCount + 1 : t + 1;
          jr(h, (o, a) => {
            let l = s[a] || i?.addColumns !== !1 && Array(r);
            l && (e ? l = Wl(l, t, 0, !0, [o]).array : l[t] = o, s[a] = l);
          }), r > this.rowCount && this.applyRowCount(r), i?.silent || (tl(this, "afterSetRows"), this.versionTag = Ur());
        }
      }, { extend: hc, merge: cc, pick: Xl } = $;
      (function(h) {
        function t(e, i, s) {
          let r = this.legendItem = this.legendItem || {}, { chart: o, options: a } = this, { baseline: l = 0, symbolWidth: c, symbolHeight: m } = e, d = this.symbol || "circle", f = m / 2, x = o.renderer, y = r.group, M = l - Math.round((e.fontMetrics?.b || m) * (s ? 0.4 : 0.3)), w = {}, v, T = a.marker, S = 0;
          if (o.styledMode || (w["stroke-width"] = Math.min(a.lineWidth || 0, 24), a.dashStyle ? w.dashstyle = a.dashStyle : a.linecap !== "square" && (w["stroke-linecap"] = "round")), r.line = x.path().addClass("highcharts-graph").attr(w).add(y), s && (r.area = x.path().addClass("highcharts-area").add(y)), w["stroke-linecap"] && (S = Math.min(r.line.strokeWidth(), c) / 2), c) {
            let O = [["M", S, M], ["L", c - S, M]];
            r.line.attr({ d: O }), r.area?.attr({ d: [...O, ["L", c - S, l], ["L", S, l]] });
          }
          if (T && T.enabled !== !1 && c) {
            let O = Math.min(Xl(T.radius, f), f);
            d.indexOf("url") === 0 && (T = cc(T, { width: m, height: m }), O = 0), r.symbol = v = x.symbol(d, c / 2 - O, M - O, 2 * O, 2 * O, hc({ context: "legend" }, T)).addClass("highcharts-point").add(y), v.isMarker = !0;
          }
        }
        h.areaMarker = function(e, i) {
          t.call(this, e, i, !0);
        }, h.lineMarker = t, h.rectangle = function(e, i) {
          let s = i.legendItem || {}, r = e.options, o = e.symbolHeight, a = r.squareSymbol, l = a ? o : e.symbolWidth;
          s.symbol = this.chart.renderer.rect(a ? (e.symbolWidth - o) / 2 : 0, e.baseline - o + 1, l, o, Xl(e.options.symbolRadius, o / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(s.group);
        };
      })(Qe || (Qe = {}));
      let Gl = Qe, { defaultOptions: Yl } = te, { extend: dc, extendClass: uc, merge: pc } = $;
      (function(h) {
        function t(e, i) {
          let s = Yl.plotOptions || {}, r = i.defaultOptions, o = i.prototype;
          return o.type = e, o.pointClass || (o.pointClass = Bt), !h.seriesTypes[e] && (r && (s[e] = r), h.seriesTypes[e] = i, !0);
        }
        h.seriesTypes = X.seriesTypes, h.registerSeriesType = t, h.seriesType = function(e, i, s, r, o) {
          let a = Yl.plotOptions || {};
          if (i = i || "", a[e] = pc(a[i], s), delete h.seriesTypes[e], t(e, uc(h.seriesTypes[i] || ce, r)), h.seriesTypes[e].prototype.type = e, o) {
            class l extends Bt {
            }
            dc(l.prototype, o), h.seriesTypes[e].prototype.pointClass = l;
          }
          return h.seriesTypes[e];
        };
      })(He || (He = {}));
      let Nt = He, { animObject: jl, setAnimation: gc } = Rt, { defaultOptions: ba } = te, { registerEventOptions: mc } = fi, { svg: fc, win: xc } = X, { seriesTypes: Rs } = Nt, { format: bc } = Jt, { arrayMax: el, arrayMin: Ul, clamp: Vl, correctFloat: ql, crisp: yc, defined: Gt, destroyObjectProperties: vc, diffObjects: kc, erase: Kl, error: ya, extend: zs, find: wc, fireEvent: Pt, getClosestDistance: Mc, getNestedProperty: $l, insertItem: Zl, isArray: _l, isNumber: Ut, isString: Cc, merge: Vr, objectEach: il, pick: Ot, removeEvent: Ac, syncTimeout: Jl } = $;
      class Be {
        constructor() {
          this.zoneAxis = "y";
        }
        init(t, e) {
          let i;
          Pt(this, "init", { options: e }), this.dataTable ?? (this.dataTable = new xa());
          let s = t.series;
          this.eventsToUnbind = [], this.chart = t, this.options = this.setOptions(e);
          let r = this.options, o = r.visible !== !1;
          this.linkedSeries = [], this.bindAxes(), zs(this, { name: r.name, state: "", visible: o, selected: r.selected === !0 }), mc(this, r), (r.events?.click || r.point?.events?.click || r.allowPointSelect) && (t.runTrackerClick = !0), this.getColor(), this.getSymbol(), this.isCartesian && (t.hasCartesianSeries = !0), s.length && (i = s[s.length - 1]), this._i = Ot(i?._i, -1) + 1, this.opacity = this.options.opacity, t.orderItems("series", Zl(this, s)), r.dataSorting?.enabled ? this.setDataSortingOptions() : this.points || this.data || this.setData(r.data, !1), Pt(this, "afterInit");
        }
        is(t) {
          return Rs[t] && this instanceof Rs[t];
        }
        bindAxes() {
          let t, e = this, i = e.options, s = e.chart;
          Pt(this, "bindAxes", null, function() {
            (e.axisTypes || []).forEach(function(r) {
              (s[r] || []).forEach(function(o) {
                t = o.options, (Ot(i[r], 0) === o.index || i[r] !== void 0 && i[r] === t.id) && (Zl(e, o.series), e[r] = o, o.isDirty = !0);
              }), e[r] || e.optionalAxis === r || ya(18, !0, s);
            });
          }), Pt(this, "afterBindAxes");
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
          if (this.pointInterval = e = Ot(this.pointInterval, i.pointInterval, 1), r && Ut(t) && (e *= t), s) {
            let l = o.toParts(a);
            s === "day" ? l[2] += e : s === "month" ? l[1] += e : s === "year" && (l[0] += e), e = o.makeTime.apply(o, l) - a;
          }
          return r && Ut(t) ? a + e : (this.xIncrement = a + e, a);
        }
        setDataSortingOptions() {
          let t = this.options;
          zs(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }), Gt(t.pointRange) || (t.pointRange = 1);
        }
        setOptions(t) {
          let e, i = this.chart, s = i.options.plotOptions, r = i.userOptions || {}, o = Vr(t), a = i.styledMode, l = { plotOptions: s, userOptions: o };
          Pt(this, "setOptions", l);
          let c = l.plotOptions[this.type], m = r.plotOptions || {}, d = m.series || {}, f = ba.plotOptions[this.type] || {}, x = m[this.type] || {};
          c.dataLabels = this.mergeArrays(f.dataLabels, c.dataLabels), this.userOptions = l.userOptions;
          let y = Vr(c, s.series, x, o);
          this.tooltipOptions = Vr(ba.tooltip, ba.plotOptions.series?.tooltip, f?.tooltip, i.userOptions.tooltip, m.series?.tooltip, x.tooltip, o.tooltip), this.stickyTracking = Ot(o.stickyTracking, x.stickyTracking, d.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || y.stickyTracking), c.marker === null && delete y.marker, this.zoneAxis = y.zoneAxis || "y";
          let M = this.zones = (y.zones || []).map((w) => ({ ...w }));
          return (y.negativeColor || y.negativeFillColor) && !y.zones && (e = { value: y[this.zoneAxis + "Threshold"] || y.threshold || 0, className: "highcharts-negative" }, a || (e.color = y.negativeColor, e.fillColor = y.negativeFillColor), M.push(e)), M.length && Gt(M[M.length - 1].value) && M.push(a ? {} : { color: this.color, fillColor: this.fillColor }), Pt(this, "afterSetOptions", { options: y }), y;
        }
        getName() {
          return this.options.name ?? bc(this.chart.options.lang.seriesName, this, this.chart);
        }
        getCyclic(t, e, i) {
          let s, r, o = this.chart, a = `${t}Index`, l = `${t}Counter`, c = i?.length || o.options.chart.colorCount;
          !e && (Gt(r = Ot(t === "color" ? this.options.colorIndex : void 0, this[a])) ? s = r : (o.series.length || (o[l] = 0), s = o[l] % c, o[l] += 1), i && (e = i[s])), s !== void 0 && (this[a] = s), this[t] = e;
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
          let i, s, r, { id: o, x: a } = t, l = this.points, c = this.options.dataSorting, m = this.cropStart || 0;
          if (o) {
            let d = this.chart.get(o);
            d instanceof Bt && (i = d);
          } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
            let d = (f) => !f.touched && f.index === t.index;
            if (c?.matchByName ? d = (f) => !f.touched && f.name === t.name : this.options.relativeXValue && (d = (f) => !f.touched && f.options.x === t.x), !(i = wc(l, d))) return;
          }
          return i && (r = i?.index) !== void 0 && (s = !0), r === void 0 && Ut(a) && (r = this.getColumn("x").indexOf(a, e)), r !== -1 && r !== void 0 && this.cropped && (r = r >= m ? r - m : r), !s && Ut(r) && l[r]?.touched && (r = void 0), r;
        }
        updateData(t, e) {
          let { options: i, requireSorting: s } = this, r = i.dataSorting, o = this.points, a = [], l = t.length === o.length, c, m, d, f, x = !0;
          if (this.xIncrement = null, t.forEach((M, w) => {
            let v, T = Gt(M) && this.pointClass.prototype.optionsToObject.call({ series: this }, M) || {}, { id: S, x: O } = T;
            S || Ut(O) ? ((v = this.findPointIndex(T, f)) === -1 || v === void 0 ? a.push(M) : o[v] && M !== i.data?.[v] ? (o[v].update(M, !1, void 0, !1), o[v].touched = !0, s && (f = v + 1)) : o[v] && (o[v].touched = !0), (!l || w !== v || r?.enabled || this.hasDerivedData) && (c = !0)) : a.push(M);
          }, this), c) for (m = o.length; m--; ) (d = o[m]) && !d.touched && d.remove?.(!1, e);
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
          return this.xIncrement === null && y.length && (this.xIncrement = el(y), this.autoIncrement()), !0;
        }
        dataColumnKeys() {
          return ["x", ...this.pointArrayMap || ["y"]];
        }
        setData(t, e = !0, i, s) {
          let r = this.points, o = r?.length || 0, a = this.options, l = this.chart, c = a.dataSorting, m = this.xAxis, d = a.turboThreshold, f = this.dataTable, x = this.dataColumnKeys(), y = this.pointValKey || "y", M = (this.pointArrayMap || []).length, w = a.keys, v, T, S = 0, O = 1, L;
          l.options.chart.allowMutatingData || (a.data && delete this.options.data, this.userOptions.data && delete this.userOptions.data, L = Vr(!0, t));
          let D = (t = L || t || []).length;
          if (c?.enabled && (t = this.sortData(t)), l.options.chart.allowMutatingData && s !== !1 && D && o && !this.cropped && !this.hasGroupedData && this.visible && !this.boosted && (T = this.updateData(t, i)), !T) {
            this.xIncrement = null, this.colorCounter = 0;
            let N = d && !a.relativeXValue && D > d;
            if (N) {
              let I = this.getFirstValidPoint(t), W = this.getFirstValidPoint(t, D - 1, -1), Y = (H) => !!(_l(H) && (w || Ut(H[0])));
              if (Ut(I) && Ut(W)) {
                let H = [], V = [];
                for (let Z of t) H.push(this.autoIncrement()), V.push(Z);
                f.setColumns({ x: H, [y]: V });
              } else if (Y(I) && Y(W)) if (M) {
                let H = +(I.length === M), V = Array(x.length).fill(0).map(() => []);
                for (let Z of t) {
                  H && V[0].push(this.autoIncrement());
                  for (let J = H; J <= M; J++) V[J]?.push(Z[J - H]);
                }
                f.setColumns(x.reduce((Z, J, j) => (Z[J] = V[j], Z), {}));
              } else {
                w && (S = w.indexOf("x"), O = w.indexOf("y"), S = S >= 0 ? S : 0, O = O >= 0 ? O : 1), I.length === 1 && (O = 0);
                let H = [], V = [];
                if (S === O) for (let Z of t) H.push(this.autoIncrement()), V.push(Z[O]);
                else for (let Z of t) H.push(Z[S]), V.push(Z[O]);
                f.setColumns({ x: H, [y]: V });
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
            for (Cc(this.getColumn("y")[0]) && ya(14, !0, l), this.data = [], this.options.data = this.userOptions.data = t, v = o; v--; ) r[v]?.destroy();
            m && (m.minRange = m.userMinRange), this.isDirty = l.isDirtyBox = !0, this.isDirtyData = !!r, i = !1;
          }
          a.legendType === "point" && (this.processData(), this.generatePoints()), e && l.redraw(i);
        }
        sortData(t) {
          let e = this, i = e.options.dataSorting.sortKey || "y", s = function(r, o) {
            return Gt(o) && r.pointClass.prototype.optionsToObject.call({ series: r }, o) || {};
          };
          return t.forEach(function(r, o) {
            t[o] = s(e, r), t[o].index = o;
          }, this), t.concat().sort((r, o) => {
            let a = $l(i, r), l = $l(i, o);
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
          let e = this, { dataTable: i, isCartesian: s, options: r, xAxis: o } = e, a = r.cropThreshold, l = t || e.getExtremesFromAll, c = o?.logarithmic, m = i.rowCount, d, f, x = 0, y, M, w, v = e.getColumn("x"), T = i, S = !1;
          return o && (M = (y = o.getExtremes()).min, w = y.max, S = !!(o.categories && !o.names.length), s && e.sorted && !l && (!a || m > a || e.forceCrop) && (v[m - 1] < M || v[0] > w ? T = new xa() : e.getColumn(e.pointValKey || "y").length && (v[0] < M || v[m - 1] > w) && (T = (d = this.cropData(i, M, w)).modified, x = d.start, f = !0))), v = T.getColumn("x") || [], { modified: T, cropped: f, cropStart: x, closestPointRange: Mc([c ? v.map(c.log2lin) : v], () => e.requireSorting && !S && ya(15, !1, e.chart)) };
        }
        processData(t) {
          let e = this.xAxis, i = this.dataTable;
          if (this.isCartesian && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !t) return !1;
          let s = this.getProcessedData();
          i.modified = s.modified, this.cropped = s.cropped, this.cropStart = s.cropStart, this.closestPointRange = this.basePointRange = s.closestPointRange, Pt(this, "afterProcessData");
        }
        cropData(t, e, i) {
          let s = t.getColumn("x", !0) || [], r = s.length, o = {}, a, l, c = 0, m = r;
          for (a = 0; a < r; a++) if (s[a] >= e) {
            c = Math.max(0, a - 1);
            break;
          }
          for (l = a; l < r; l++) if (s[l] > i) {
            m = l + 1;
            break;
          }
          for (let d of this.dataColumnKeys()) {
            let f = t.getColumn(d, !0);
            f && (o[d] = f.slice(c, m));
          }
          return { modified: new xa({ columns: o }), start: c, end: m };
        }
        generatePoints() {
          let t = this.options, e = this.processedData || t.data, i = this.dataTable.modified, s = this.getColumn("x", !0), r = this.pointClass, o = i.rowCount, a = this.cropStart || 0, l = this.hasGroupedData, c = t.keys, m = [], d = t.dataGrouping?.groupAll ? a : 0, f = this.xAxis?.categories, x = this.pointArrayMap || ["y"], y = this.dataColumnKeys(), M, w, v, T, S = this.data, O;
          if (!S && !l) {
            let L = [];
            L.length = e?.length || 0, S = this.data = L;
          }
          for (c && l && (this.options.keys = !1), T = 0; T < o; T++) w = a + T, l ? ((v = new r(this, i.getRow(T, y) || [])).dataGroup = this.groupMap[d + T], v.dataGroup?.options && (v.options = v.dataGroup.options, zs(v, v.dataGroup.options), delete v.dataLabels)) : (v = S[w], O = e ? e[w] : i.getRow(T, x), v || O === void 0 || (S[w] = v = new r(this, O, s[T]))), v && (v.index = l ? d + T : w, m[T] = v, v.category = f?.[v.x] ?? v.x, v.key = v.name ?? v.category);
          if (this.options.keys = c, S && (o !== (M = S.length) || l)) for (T = 0; T < M; T++) T !== a || l || (T += o), S[T] && (S[T].destroyElements(), S[T].plotX = void 0);
          this.data = S, this.points = m, Pt(this, "afterGeneratePoints");
        }
        getXExtremes(t) {
          return { min: Ul(t), max: el(t) };
        }
        getExtremes(t, e) {
          let { xAxis: i, yAxis: s } = this, r = e || this.getExtremesFromAll || this.options.getExtremesFromAll, o = r && this.cropped ? this.dataTable : this.dataTable.modified, a = o.rowCount, l = t || this.stackedYData, c = l ? [l] : (this.keysAffectYAxis || this.pointArrayMap || ["y"])?.map((L) => o.getColumn(L, !0) || []) || [], m = this.getColumn("x", !0), d = [], f = this.requireSorting && !this.is("column") ? 1 : 0, x = !!s && s.positiveValuesOnly, y = r || this.cropped || !i, M, w, v, T = 0, S = 0;
          for (i && (T = (M = i.getExtremes()).min, S = M.max), v = 0; v < a; v++) if (w = m[v], y || (m[v + f] || w) >= T && (m[v - f] || w) <= S) for (let L of c) {
            let D = L[v];
            Ut(D) && (D > 0 || !x) && d.push(D);
          }
          let O = { activeYData: d, dataMin: Ul(d), dataMax: el(d) };
          return Pt(this, "afterGetExtremes", { dataExtremes: O }), O;
        }
        applyExtremes() {
          let t = this.getExtremes();
          return this.dataMin = t.dataMin, this.dataMax = t.dataMax, t;
        }
        getFirstValidPoint(t, e = 0, i = 1) {
          let s = t.length, r = e;
          for (; r >= 0 && r < s; ) {
            if (Gt(t[r])) return t[r];
            r += i;
          }
        }
        translate() {
          this.generatePoints();
          let t = this.options, e = t.stacking, i = this.xAxis, s = this.enabledDataSorting, r = this.yAxis, o = this.points, a = o.length, l = this.pointPlacementToXValue(), c = !!l, m = t.threshold, d = t.startFromThreshold ? m : 0, f = t?.nullInteraction && r.len, x, y, M, w, v = Number.MAX_VALUE;
          function T(S) {
            return Vl(S, -1e9, 1e9);
          }
          for (x = 0; x < a; x++) {
            let S, O = o[x], L = O.x, D, N, I = O.y, W = O.low, Y = e && r.stacking?.stacks[(this.negStacks && I < (d ? 0 : m) ? "-" : "") + this.stackKey];
            O.plotX = Ut(y = i.translate(L, !1, !1, !1, !0, l)) ? ql(T(y)) : void 0, e && this.visible && Y && Y[L] && (w = this.getStackIndicator(w, L, this.index), !O.isNull && w.key && (N = (D = Y[L]).points[w.key]), D && _l(N) && (W = N[0], I = N[1], W === d && w.key === Y[L].base && (W = Ot(Ut(m) ? m : r.min)), r.positiveValuesOnly && Gt(W) && W <= 0 && (W = void 0), O.total = O.stackTotal = Ot(D.total), O.percentage = Gt(O.y) && D.total ? O.y / D.total * 100 : void 0, O.stackY = I, this.irregularWidths || D.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), O.yBottom = Gt(W) ? T(r.translate(W, !1, !0, !1, !0)) : void 0, this.dataModify && (I = this.dataModify.modifyValue(I, x)), Ut(I) && O.plotX !== void 0 ? S = Ut(S = r.translate(I, !1, !0, !1, !0)) ? T(S) : void 0 : !Ut(I) && f && (S = f), O.plotY = S, O.isInside = this.isPointInside(O), O.clientX = c ? ql(i.translate(L, !1, !1, !1, !0, l)) : y, O.negative = (O.y || 0) < (m || 0), O.isNull || O.visible === !1 || (M !== void 0 && (v = Math.min(v, Math.abs(y - M))), M = y), O.zone = this.zones.length ? O.getZone() : void 0, !O.graphic && this.group && s && (O.isNew = !0);
          }
          this.closestPointRangePx = v, Pt(this, "afterTranslate");
        }
        getValidPoints(t, e, i) {
          let s = this.chart;
          return (t || this.points || []).filter(function(r) {
            let { plotX: o, plotY: a } = r;
            return (!!i || !r.isNull && !!Ut(a)) && (!e || !!s.isInsidePlot(o, a, { inverted: s.inverted })) && r.visible !== !1;
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
          let { chart: e, group: i, markerGroup: s } = this, r = e.inverted, o = jl(this.options.animation), a = [this.getSharedClipKey(), o.duration, o.easing, o.defer].join(","), l = e.sharedClips[a], c = e.sharedClips[a + "m"];
          if (t && i) {
            let m = e.getClipBox(this);
            if (l) l.attr("height", m.height);
            else {
              m.width = 0, r && (m.x = e.plotHeight), l = e.renderer.clipRect(m), e.sharedClips[a] = l;
              let d = { x: -99, y: -99, width: r ? e.plotWidth + 199 : 99, height: r ? 99 : e.plotHeight + 199 };
              c = e.renderer.clipRect(d), e.sharedClips[a + "m"] = c;
            }
            i.clip(l), s?.clip(c);
          } else if (l && !l.hasClass("highcharts-animating")) {
            let m = e.getClipBox(this), d = o.step;
            (s?.element.childNodes.length || e.series.length > 1) && (o.step = function(f, x) {
              d && d.apply(x, arguments), x.prop === "width" && c?.element && c.attr(r ? "height" : "width", f + 99);
            }), l.addClass("highcharts-animating").animate(m, o);
          }
        }
        afterAnimate() {
          this.setClip(), il(this.chart.sharedClips, (t, e, i) => {
            t && !this.chart.container.querySelector(`[clip-path="url(#${t.id})"]`) && (t.destroy(), delete i[e]);
          }), this.finishedAnimating = !0, Pt(this, "afterAnimate");
        }
        drawPoints(t = this.points) {
          let e, i, s, r, o, a, l, c = this.chart, m = c.styledMode, { colorAxis: d, options: f } = this, x = f.marker, y = f.nullInteraction, M = this[this.specialGroup || "markerGroup"], w = this.xAxis, v = Ot(x.enabled, !w || !!w.isRadial || null, this.closestPointRangePx >= x.enabledThreshold * x.radius);
          if (x.enabled !== !1 || this._hasPointMarkers) for (e = 0; e < t.length; e++) {
            r = (s = (i = t[e]).graphic) ? "animate" : "attr", o = i.marker || {}, a = !!i.marker;
            let T = i.isNull;
            if ((v && !Gt(o.enabled) || o.enabled) && (!T || y) && i.visible !== !1) {
              let S = Ot(o.symbol, this.symbol, "rect");
              l = this.markerAttribs(i, i.selected && "select"), this.enabledDataSorting && (i.startXPos = w.reversed ? -(l.width || 0) : w.width);
              let O = i.isInside !== !1;
              if (!s && O && ((l.width || 0) > 0 || i.hasImage) && (i.graphic = s = c.renderer.symbol(S, l.x, l.y, l.width, l.height, a ? o : x).add(M), this.enabledDataSorting && c.hasRendered && (s.attr({ x: i.startXPos }), r = "animate")), s && r === "animate" && s[O ? "show" : "hide"](O).animate(l), s) {
                let L = this.pointAttribs(i, m || !i.selected ? void 0 : "select");
                m ? d && s.css({ fill: L.fill }) : s[r](L);
              }
              s && s.addClass(i.getClassName(), !0);
            } else s && (i.graphic = s.destroy());
          }
        }
        markerAttribs(t, e) {
          let i = this.options, s = i.marker, r = t.marker || {}, o = r.symbol || s.symbol, a = {}, l, c, m = Ot(r.radius, s?.radius);
          e && (l = s.states[e], c = r.states && r.states[e], m = Ot(c?.radius, l?.radius, m && m + (l?.radiusPlus || 0))), t.hasImage = o && o.indexOf("url") === 0, t.hasImage && (m = 0);
          let d = t.pos();
          return Ut(m) && d && (i.crisp && (d[0] = yc(d[0], t.hasImage ? 0 : o === "rect" ? s?.lineWidth || 0 : 1)), a.x = d[0] - m, a.y = d[1] - m), m && (a.width = a.height = 2 * m), a;
        }
        pointAttribs(t, e) {
          let i = this.options, s = i.marker, r = t?.options, o = r?.marker || {}, a = r?.color, l = t?.color, c = t?.zone?.color, m, d, f = this.color, x, y, M = Ot(o.lineWidth, s.lineWidth), w = t?.isNull && i.nullInteraction ? 0 : 1;
          return f = a || c || l || f, x = o.fillColor || s.fillColor || f, y = o.lineColor || s.lineColor || f, e = e || "normal", m = s.states[e] || {}, M = Ot((d = o.states && o.states[e] || {}).lineWidth, m.lineWidth, M + Ot(d.lineWidthPlus, m.lineWidthPlus, 0)), x = d.fillColor || m.fillColor || x, y = d.lineColor || m.lineColor || y, { stroke: y, "stroke-width": M, fill: x, opacity: w = Ot(d.opacity, m.opacity, w) };
        }
        destroy(t) {
          let e, i, s = this, r = s.chart, o = /AppleWebKit\/533/.test(xc.navigator.userAgent), a = s.data || [];
          for (Pt(s, "destroy", { keepEventsForUpdate: t }), this.removeEvents(t), (s.axisTypes || []).forEach(function(l) {
            i = s[l], i?.series && (Kl(i.series, s), i.isDirty = i.forceRedraw = !0);
          }), s.legendItem && s.chart.legend.destroyItem(s), e = a.length; e--; ) a[e]?.destroy?.();
          for (let l of s.zones) vc(l, void 0, !0);
          $.clearTimeout(s.animationTimeout), il(s, function(l, c) {
            l instanceof ge && !l.survive && l[o && c === "group" ? "hide" : "destroy"]();
          }), r.hoverSeries === s && (r.hoverSeries = void 0), Kl(r.series, s), r.orderItems("series"), il(s, function(l, c) {
            t && c === "hcEvents" || delete s[c];
          });
        }
        applyZones() {
          let { area: t, chart: e, graph: i, zones: s, points: r, xAxis: o, yAxis: a, zoneAxis: l } = this, { inverted: c, renderer: m } = e, d = this[`${l}Axis`], { isXAxis: f, len: x = 0, minPointOffset: y = 0 } = d || {}, M = (i?.strokeWidth() || 0) / 2 + 1, w = (v, T = 0, S = 0) => {
            c && (S = x - S);
            let { translated: O = 0, lineClip: L } = v, D = S - O;
            L?.push(["L", T, Math.abs(D) < M ? S - M * (D <= 0 ? -1 : 1) : O]);
          };
          if (s.length && (i || t) && d && Ut(d.min)) {
            let v = d.getExtremes().max + y, T = (L) => {
              L.forEach((D, N) => {
                (D[0] === "M" || D[0] === "L") && (L[N] = [D[0], f ? x - D[1] : D[1], f ? D[2] : x - D[2]]);
              });
            };
            if (s.forEach((L) => {
              L.lineClip = [], L.translated = Vl(d.toPixels(Ot(L.value, v), !0) || 0, 0, x);
            }), i && !this.showLine && i.hide(), t && t.hide(), l === "y" && r.length < o.len) for (let L of r) {
              let { plotX: D, plotY: N, zone: I } = L, W = I && s[s.indexOf(I) - 1];
              I && w(I, D, N), W && w(W, D, N);
            }
            let S = [], O = d.toPixels(d.getExtremes().min - y, !0);
            s.forEach((L) => {
              let D = L.lineClip || [], N = Math.round(L.translated || 0);
              o.reversed && D.reverse();
              let { clip: I, simpleClip: W } = L, Y = 0, H = 0, V = o.len, Z = a.len;
              f ? (Y = N, V = O) : (H = N, Z = O);
              let J = [["M", Y, H], ["L", V, H], ["L", V, Z], ["L", Y, Z], ["Z"]], j = [J[0], ...D, J[1], J[2], ...S, J[3], J[4]];
              S = D.reverse(), O = N, c && (T(j), t && T(J)), I ? (I.animate({ d: j }), W?.animate({ d: J })) : (I = L.clip = m.path(j), t && (W = L.simpleClip = m.path(J))), i && L.graph?.clip(I), t && L.area?.clip(W);
            });
          } else this.visible && (i && i.show(), t && t.show());
        }
        plotGroup(t, e, i, s, r) {
          let o = this[t], a = !o, l = { visibility: i, zIndex: s || 0.1 };
          return Gt(this.opacity) && !this.chart.styledMode && this.state !== "inactive" && (l.opacity = this.opacity), o || (this[t] = o = this.chart.renderer.g().add(r)), o.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (Gt(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (o.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), o.attr(l)[a ? "attr" : "animate"](this.getPlotBox(e)), o;
        }
        getPlotBox(t) {
          let e = this.xAxis, i = this.yAxis, s = this.chart, r = s.inverted && !s.polar && e && this.invertible && t === "series";
          s.inverted && (e = i, i = this.xAxis);
          let o = { scale: 1, translateX: e ? e.left : s.plotLeft, translateY: i ? i.top : s.plotTop, name: t };
          Pt(this, "getPlotBox", o);
          let { scale: a, translateX: l, translateY: c } = o;
          return { translateX: l, translateY: c, rotation: 90 * !!r, rotationOriginX: r ? a * (e.len - i.len) / 2 : 0, rotationOriginY: r ? a * (e.len + i.len) / 2 : 0, scaleX: r ? -a : a, scaleY: a };
        }
        removeEvents(t) {
          let { eventsToUnbind: e } = this;
          t || Ac(this), e.length && (e.forEach((i) => {
            i();
          }), e.length = 0);
        }
        render() {
          let t = this, { chart: e, options: i, hasRendered: s } = t, r = jl(i.animation), o = t.visible ? "inherit" : "hidden", a = i.zIndex, l = e.seriesGroup, c = t.finishedAnimating ? 0 : r.duration;
          Pt(this, "render"), t.plotGroup("group", "series", o, a, l), t.markerGroup = t.plotGroup("markerGroup", "markers", o, a, l), i.clip !== !1 && t.setClip(), c && t.animate?.(!0), t.drawGraph && (t.drawGraph(), t.applyZones()), t.visible && t.drawPoints(), t.drawDataLabels?.(), t.redrawPoints?.(), i.enableMouseTracking && t.drawTracker?.(), c && t.animate?.(), s || (c && r.defer && (c += r.defer), t.animationTimeout = Jl(() => {
            t.afterAnimate();
          }, c || 0)), t.isDirty = !1, t.hasRendered = !0, Pt(t, "afterRender");
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
          delete e.kdTree, Jl(function() {
            e.kdTree = (function r(o, a, l) {
              let c, m, d = o?.length;
              if (d) return c = e.kdAxisArray[a % l], o.sort((f, x) => (f[c] || 0) - (x[c] || 0)), { point: o[m = Math.floor(d / 2)], left: r(o.slice(0, m), a + 1, l), right: r(o.slice(m + 1), a + 1, l) };
            })(e.getValidPoints(void 0, !e.directTouch, i?.nullInteraction), s, s), e.buildingKdTree = !1;
          }, i.kdNow || t?.type === "touchstart" ? 0 : 1);
        }
        searchKDTree(t, e, i, s, r) {
          let o = this, [a, l] = this.kdAxisArray, c = e ? "distX" : "dist", m = (o.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1, d = !!o.isBubble, f = s || ((y, M, w) => {
            let v = y[w] || 0, T = M[w] || 0;
            return [v === T && y.index > M.index || v < T ? y : M, !1];
          }), x = r || ((y, M) => y < M);
          if (this.kdTree || this.buildingKdTree || this.buildKDTree(i), this.kdTree) return (function y(M, w, v, T) {
            let S = w.point, O = o.kdAxisArray[v % T], L = S, D = !1;
            (function(Y, H) {
              let V = Y[a], Z = H[a], J = Gt(V) && Gt(Z) ? V - Z : null, j = Y[l], q = H[l], _ = Gt(j) && Gt(q) ? j - q : 0, vt = d && H.marker?.radius || 0;
              H.dist = Math.sqrt((J && J * J || 0) + _ * _) - vt, H.distX = Gt(J) ? Math.abs(J) - vt : Number.MAX_VALUE;
            })(M, S);
            let N = (M[O] || 0) - (S[O] || 0) + (d && S.marker?.radius || 0), I = N < 0 ? "left" : "right", W = N < 0 ? "right" : "left";
            return w[I] && ([L, D] = f(S, y(M, w[I], v + 1, T), c)), w[W] && x(Math.sqrt(N * N), L[c], D) && (L = f(L, y(M, w[W], v + 1, T), c)[0]), L;
          })(t, this.kdTree, m, m);
        }
        pointPlacementToXValue() {
          let { options: t, xAxis: e } = this, i = t.pointPlacement;
          return i === "between" && (i = e.reversed ? -0.5 : 0.5), Ut(i) ? i * (t.pointRange || e.pointRange) : 0;
        }
        isPointInside(t) {
          let { chart: e, xAxis: i, yAxis: s } = this, { plotX: r = -1, plotY: o = -1 } = t;
          return o >= 0 && o <= (s ? s.len : e.plotHeight) && r >= 0 && r <= (i ? i.len : e.plotWidth);
        }
        drawTracker() {
          let t = this, e = t.options, i = e.trackByArea, s = [].concat((i ? t.areaPath : t.graphPath) || []), r = t.chart, o = r.pointer, a = r.renderer, l = r.options.tooltip?.snap || 0, c = () => {
            e.enableMouseTracking && r.hoverSeries !== t && t.onMouseOver();
          }, m = "rgba(192,192,192," + (fc ? 1e-4 : 2e-3) + ")", d = t.tracker;
          d ? d.attr({ d: s }) : t.graph && (t.tracker = d = a.path(s).attr({ visibility: t.visible ? "inherit" : "hidden", zIndex: 2 }).addClass(i ? "highcharts-tracker-area" : "highcharts-tracker-line").add(t.group), r.styledMode || d.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: m, fill: i ? m : "none", "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * l) }), [t.tracker, t.markerGroup, t.dataLabelsGroup].forEach((f) => {
            f && (f.addClass("highcharts-tracker").on("mouseover", c).on("mouseout", (x) => {
              o?.onTrackerMouseOut(x);
            }), e.cursor && !r.styledMode && f.css({ cursor: e.cursor }), f.on("touchstart", c));
          })), Pt(this, "afterDrawTracker");
        }
        addPoint(t, e, i, s, r) {
          let o, a, l = this.options, { chart: c, data: m, dataTable: d, xAxis: f } = this, x = f?.hasNames && f.names, y = l.data, M = this.getColumn("x");
          e = Ot(e, !0);
          let w = { series: this };
          this.pointClass.prototype.applyOptions.apply(w, [t]);
          let v = w.x;
          if (a = M.length, this.requireSorting && v < M[a - 1]) for (o = !0; a && M[a - 1] > v; ) a--;
          d.setRow(w, a, !0, { addColumns: !1 }), x && w.name && (x[v] = w.name), y?.splice(a, 0, t), (o || this.processedData) && (this.data.splice(a, 0, null), this.processData()), l.legendType === "point" && this.generatePoints(), i && (m[0] && m[0].remove ? m[0].remove(!1) : ([m, y].filter(Gt).forEach((T) => {
            T.shift();
          }), d.deleteRows(0))), r !== !1 && Pt(this, "addPoint", { point: w }), this.isDirty = !0, this.isDirtyData = !0, e && c.redraw(s);
        }
        removePoint(t, e, i) {
          let s = this, { chart: r, data: o, points: a, dataTable: l } = s, c = o[t], m = function() {
            [a?.length === o.length ? a : void 0, o, s.options.data].filter(Gt).forEach((d) => {
              d.splice(t, 1);
            }), l.deleteRows(t), c?.destroy(), s.isDirty = !0, s.isDirtyData = !0, e && r.redraw();
          };
          gc(i, r), e = Ot(e, !0), c ? c.firePointEvent("remove", null, m) : m();
        }
        remove(t, e, i, s) {
          let r = this, o = r.chart;
          function a() {
            r.destroy(s), o.isDirtyLegend = o.isDirtyBox = !0, o.linkSeries(s), Ot(t, !0) && o.redraw(e);
          }
          i !== !1 ? Pt(r, "remove", null, a) : a();
        }
        update(t, e) {
          Pt(this, "update", { options: t = kc(t, this.userOptions) });
          let i = this, s = i.chart, r = i.userOptions, o = i.initialType || i.type, a = s.options.plotOptions, l = Rs[o].prototype, c = i.finishedAnimating && { animation: !1 }, m = {}, d, f, x = Be.keepProps.slice(), y = t.type || r.type || s.options.chart.type, M = !(this.hasDerivedData || y && y !== this.type || t.keys !== void 0 || t.pointStart !== void 0 || t.pointInterval !== void 0 || t.relativeXValue !== void 0 || t.joinBy || t.mapData || ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some((v) => i.hasOptionChanged(v)));
          y = y || o, M ? (x.push.apply(x, Be.keepPropsForPoints), t.visible !== !1 && x.push("area", "graph"), i.parallelArrays.forEach(function(v) {
            x.push(v + "Data");
          }), t.data && (t.dataSorting && zs(i.options.dataSorting, t.dataSorting), this.setData(t.data, !1))) : this.dataTable.modified = this.dataTable, t = Vr(r, { index: r.index === void 0 ? i.index : r.index, pointStart: a?.series?.pointStart ?? r.pointStart ?? i.getColumn("x")[0] }, !M && { data: i.options.data }, t, c), M && t.data && (t.data = i.options.data), (x = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(x)).forEach(function(v) {
            x[v] = i[v], delete i[v];
          });
          let w = !1;
          if (Rs[y]) {
            if (w = y !== i.type, i.remove(!1, !1, !1, !0), w) if (s.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(i, Rs[y].prototype);
            else {
              let v = Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents;
              for (f in l) i[f] = void 0;
              zs(i, Rs[y].prototype), v ? i.hcEvents = v : delete i.hcEvents;
            }
          } else ya(17, !0, s, { missingModuleFor: y });
          if (x.forEach(function(v) {
            i[v] = x[v];
          }), i.init(s, t), M && this.points) for (let v of ((d = i.options).visible === !1 ? (m.graphic = 1, m.dataLabel = 1) : (this.hasMarkerChanged(d, r) && (m.graphic = 1), i.hasDataLabels?.() || (m.dataLabel = 1)), this.points)) v?.series && (v.resolveColor(), Object.keys(m).length && v.destroyElements(m), d.showInLegend === !1 && v.legendItem && s.legend.destroyItem(v));
          i.initialType = o, s.linkSeries(), s.setSortedData(), w && i.linkedSeries.length && (i.isDirtyData = !0), Pt(this, "afterUpdate"), Ot(e, !0) && s.redraw(!!M && void 0);
        }
        setName(t) {
          this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0;
        }
        hasOptionChanged(t) {
          let e = this.chart, i = this.options[t], s = e.options.plotOptions, r = this.userOptions[t], o = Ot(s?.[this.type]?.[t], s?.series?.[t]);
          return r && !Gt(o) ? i !== r : i !== Ot(o, i);
        }
        onMouseOver() {
          let t = this.chart, e = t.hoverSeries;
          t.pointer?.setHoverChartIndex(), e && e !== this && e.onMouseOut(), this.options.events.mouseOver && Pt(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this;
        }
        onMouseOut() {
          let t = this.options, e = this.chart, i = e.tooltip, s = e.hoverPoint;
          e.hoverSeries = null, s && s.onMouseOut(), this && t.events.mouseOut && Pt(this, "mouseOut"), i && !this.stickyTracking && (!i.shared || this.noSharedTooltip) && i.hide(), e.series.forEach(function(r) {
            r.setState("", !0);
          });
        }
        setState(t, e) {
          let i = this, s = i.options, r = i.graph, o = s.inactiveOtherPoints, a = s.states, l = Ot(a[t || "normal"] && a[t || "normal"].animation, i.chart.options.chart.animation), c = s.lineWidth, m = s.opacity;
          if (t = t || "", i.state !== t && ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(function(d) {
            d && (i.state && d.removeClass("highcharts-series-" + i.state), t && d.addClass("highcharts-series-" + t));
          }), i.state = t, !i.chart.styledMode)) {
            if (a[t] && a[t].enabled === !1) return;
            if (t && (c = a[t].lineWidth || c + (a[t].lineWidthPlus || 0), m = Ot(a[t].opacity, m)), r && !r.dashstyle && Ut(c)) for (let d of [r, ...this.zones.map((f) => f.graph)]) d?.animate({ "stroke-width": c }, l);
            o || [i.group, i.markerGroup, i.dataLabelsGroup, i.labelBySeries].forEach(function(d) {
              d && d.animate({ opacity: m }, l);
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
          }), r && (s.isDirtyBox = !0), Pt(i, a), e !== !1 && s.redraw();
        }
        show() {
          this.setVisible(!0);
        }
        hide() {
          this.setVisible(!1);
        }
        select(t) {
          this.selected = t = this.options.selected = t === void 0 ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), Pt(this, t ? "select" : "unselect");
        }
        shouldShowTooltip(t, e, i = {}) {
          return i.series = this, i.visiblePlotOnly = !0, this.chart.isInsidePlot(t, e, i);
        }
        drawLegendSymbol(t, e) {
          Gl[this.options.legendSymbol || "rectangle"]?.call(this, t, e);
        }
      }
      Be.defaultOptions = { lineWidth: 2, allowPointSelect: !1, crisp: !0, showCheckbox: !1, animation: { duration: 1e3 }, enableMouseTracking: !0, events: {}, marker: { enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: { normal: { animation: !0 }, hover: { animation: { duration: 150 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: { animation: {}, align: "center", borderWidth: 0, defer: !0, formatter: function() {
        let { numberFormatter: h } = this.series.chart;
        return typeof this.y != "number" ? "" : h(this.y, -1);
      }, padding: 5, style: { fontSize: "0.7em", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: !0, states: { normal: { animation: !0 }, hover: { animation: { duration: 150 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: 0.25 } }, select: { animation: { duration: 0 } }, inactive: { animation: { duration: 150 }, opacity: 0.2 } }, stickyTracking: !0, turboThreshold: 1e3, findNearestPointBy: "x" }, Be.types = Nt.seriesTypes, Be.registerType = Nt.registerSeriesType, Be.keepProps = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"], Be.keepPropsForPoints = ["data", "isDirtyData", "isDirtyCanvas", "points", "dataTable", "processedData", "xIncrement", "cropped", "_hasPointMarkers", "hasDataLabels", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX", "transformGroups"], zs(Be.prototype, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, directTouch: !1, invertible: !0, isCartesian: !0, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: Bt, requireSorting: !0, sorted: !0 }), Nt.series = Be;
      let ce = Be, { animObject: Tc, setAnimation: Sc } = Rt, { registerEventOptions: Ql } = fi, { composed: Ec, marginNames: th } = X, { distribute: Pc } = fs, { format: Oc } = Jt, { addEvent: va, createElement: Lc, css: Dc, defined: sl, discardElement: Ic, find: Bc, fireEvent: ai, isNumber: eh, merge: Zi, pick: Ne, pushUnique: Nc, relativeLength: Rc, stableSort: zc, syncTimeout: Fc } = $;
      class rl {
        constructor(t, e) {
          this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = t, this.setOptions(e), e.enabled && (this.render(), Ql(this, e), va(this.chart, "endResize", function() {
            this.legend.positionCheckboxes();
          })), va(this.chart, "render", () => {
            this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems());
          });
        }
        setOptions(t) {
          let e = Ne(t.padding, 8);
          this.options = t, this.chart.styledMode || (this.itemStyle = t.itemStyle, this.itemHiddenStyle = Zi(this.itemStyle, t.itemHiddenStyle)), this.itemMarginTop = t.itemMarginTop, this.itemMarginBottom = t.itemMarginBottom, this.padding = e, this.initialItemY = e - 5, this.symbolWidth = Ne(t.symbolWidth, 16), this.pages = [], this.proximate = t.layout === "proximate" && !this.chart.inverted, this.baseline = void 0;
        }
        update(t, e) {
          let i = this.chart;
          this.setOptions(Zi(!0, this.options, t)), "events" in this.options && Ql(this, this.options), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, Ne(e, !0) && i.redraw(), ai(this, "afterUpdate", { redraw: e });
        }
        colorizeItem(t, e) {
          let i = t.color, { area: s, group: r, label: o, line: a, symbol: l } = t.legendItem || {};
          if ((t instanceof ce || t instanceof Bt) && (t.color = t.options?.legendSymbolColor || i), r?.[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
            let { itemHiddenStyle: c = {} } = this, m = c.color, { fillColor: d, fillOpacity: f, lineColor: x, marker: y } = t.options, M = (w) => (!e && (w.fill && (w.fill = m), w.stroke && (w.stroke = m)), w);
            o?.css(Zi(e ? this.itemStyle : c)), a?.attr(M({ stroke: x || t.color })), l && l.attr(M(y && l.isMarker ? t.pointAttribs() : { fill: t.color })), s?.attr(M({ fill: d || t.color, "fill-opacity": d ? 1 : f ?? 0.75 }));
          }
          t.color = i, ai(this, "afterColorizeItem", { item: t, visible: e });
        }
        positionItems() {
          this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
        }
        positionItem(t) {
          let { group: e, x: i = 0, y: s = 0 } = t.legendItem || {}, r = this.options, o = r.symbolPadding, a = !r.rtl, l = t.checkbox;
          if (e?.element) {
            let c = { translateX: a ? i : this.legendWidth - i - 2 * o - 4, translateY: s };
            e[sl(e.translateY) ? "animate" : "attr"](c, void 0, () => {
              ai(this, "afterPositionItem", { item: t });
            });
          }
          l && (l.x = i, l.y = s);
        }
        destroyItem(t) {
          let e = t.legendItem || {};
          for (let i of ["group", "label", "line", "symbol"]) e[i] && (e[i] = e[i].destroy());
          t.checkbox = Ic(t.checkbox), t.legendItem = void 0;
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
            a && (o = t + s + a.y + (this.scrollOffset || 0) + 3, Dc(a, { left: e.translateX + r.checkboxOffset + a.x - 20 + "px", top: o + "px", display: this.proximate || o > t - 6 && o < t + i - 6 ? "" : "none" }));
          }, this));
        }
        renderTitle() {
          let t = this.options, e = this.padding, i = t.title, s, r = 0;
          i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, void 0, void 0, void 0, t.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(i.style), this.title.add(this.group)), i.width || this.title.css({ width: this.maxLegendWidth + "px" }), r = (s = this.title.getBBox()).height, this.offsetWidth = s.width, this.contentGroup.attr({ translateY: r })), this.titleHeight = r;
        }
        setText(t) {
          let e = this.options;
          t.legendItem.label.attr({ text: e.labelFormat ? Oc(e.labelFormat, t, this.chart) : e.labelFormatter.call(t) });
        }
        renderItem(t) {
          let e = t.legendItem = t.legendItem || {}, i = this.chart, s = i.renderer, r = this.options, o = r.layout === "horizontal", a = this.symbolWidth, l = r.symbolPadding || 0, c = this.itemStyle, m = this.itemHiddenStyle, d = o ? Ne(r.itemDistance, 20) : 0, f = !r.rtl, x = !t.series, y = !x && t.series.drawLegendSymbol ? t.series : t, M = y.options, w = !!this.createCheckboxForItem && M && M.showCheckbox, v = r.useHTML, T = t.options.className, S = e.label, O = a + l + d + 20 * !!w;
          !S && (e.group = s.g("legend-item").addClass("highcharts-" + y.type + "-series highcharts-color-" + t.colorIndex + (T ? " " + T : "") + (x ? " highcharts-series-" + t.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), e.label = S = s.text("", f ? a + l : -l, this.baseline || 0, v), i.styledMode || S.css(Zi(t.visible ? c : m)), S.attr({ align: f ? "left" : "right", zIndex: 2 }).add(e.group), !this.baseline && (this.fontMetrics = s.fontMetrics(S), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, S.attr("y", this.baseline), this.symbolHeight = Ne(r.symbolHeight, this.fontMetrics.f), r.squareSymbol && (this.symbolWidth = Ne(r.symbolWidth, Math.max(this.symbolHeight, 16)), O = this.symbolWidth + l + d + 20 * !!w, f && S.attr("x", this.symbolWidth + l))), y.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, S, v)), w && !t.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t), this.colorizeItem(t, t.visible), (i.styledMode || !c.width) && S.css({ width: (r.itemWidth || this.widthOption || i.spacingBox.width) - O + "px" }), this.setText(t);
          let L = S.getBBox(), D = this.fontMetrics?.h || 0;
          t.itemWidth = t.checkboxOffset = r.itemWidth || e.labelWidth || L.width + O, this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth), this.totalItemWidth += t.itemWidth, this.itemHeight = t.itemHeight = Math.round(e.labelHeight || (L.height > 1.5 * D ? L.height : D));
        }
        layoutItem(t) {
          let e = this.options, i = this.padding, s = e.layout === "horizontal", r = t.itemHeight, o = this.itemMarginBottom, a = this.itemMarginTop, l = s ? Ne(e.itemDistance, 20) : 0, c = this.maxLegendWidth, m = e.alignColumns && this.totalItemWidth > c ? this.maxItemWidth : t.itemWidth, d = t.legendItem || {};
          s && this.itemX - i + m > c && (this.itemX = i, this.lastLineHeight && (this.itemY += a + this.lastLineHeight + o), this.lastLineHeight = 0), this.lastItemY = a + this.itemY + o, this.lastLineHeight = Math.max(r, this.lastLineHeight), d.x = this.itemX, d.y = this.itemY, s ? this.itemX += m : (this.itemY += a + r + o, this.lastLineHeight = r), this.offsetWidth = this.widthOption || Math.max((s ? this.itemX - i - (t.checkbox ? 0 : l) : m) + i, this.offsetWidth);
        }
        getAllItems() {
          let t = [];
          return this.chart.series.forEach(function(e) {
            let i = e?.options;
            e && Ne(i.showInLegend, !sl(i.linkedTo) && void 0, !0) && (t = t.concat(e.legendItem?.labels || (i.legendType === "point" ? e.data : e)));
          }), ai(this, "afterGetAllItems", { allItems: t }), t;
        }
        getAlignment() {
          let t = this.options;
          return this.proximate ? t.align.charAt(0) + "tv" : t.floating ? "" : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0);
        }
        adjustMargins(t, e) {
          let i = this.chart, s = this.options, r = this.getAlignment();
          r && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach((o, a) => {
            o.test(r) && !sl(t[a]) && (i[th[a]] = Math.max(i[th[a]], i.legend[(a + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][a] * s[a % 2 ? "x" : "y"] + (s.margin ?? 12) + e[a] + (i.titleOffset[a] || 0)));
          });
        }
        proximatePositions() {
          let t, e = this.chart, i = [], s = this.options.align === "left";
          for (let r of (this.allItems.forEach(function(o) {
            let a, l, c = s, m, d;
            o.yAxis && (o.xAxis.options.reversed && (c = !c), o.points && (a = Bc(c ? o.points : o.points.slice(0).reverse(), function(f) {
              return eh(f.plotY);
            })), l = this.itemMarginTop + o.legendItem.label.getBBox().height + this.itemMarginBottom, d = o.yAxis.top - e.plotTop, m = o.visible ? (a ? a.plotY : o.yAxis.height) + (d - 0.3 * l) : d + o.yAxis.height, i.push({ target: m, size: l, item: o }));
          }, this), Pc(i, e.plotHeight))) t = r.item.legendItem || {}, eh(r.pos) && (t.y = e.plotTop - e.spacing[0] + r.pos);
        }
        render() {
          let t = this.chart, e = t.renderer, i = this.options, s = this.padding, r = this.getAllItems(), o, a, l, c = this.group, m, d = this.box;
          this.itemX = s, this.itemY = this.initialItemY, this.offsetWidth = 0, this.lastItemY = 0, this.widthOption = Rc(i.width, t.spacingBox.width - s), m = t.spacingBox.width - 2 * s - i.x, ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (m /= 2), this.maxLegendWidth = this.widthOption || m, c || (this.group = c = e.g("legend").addClass(i.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = e.g().attr({ zIndex: 1 }).add(c), this.scrollGroup = e.g().add(this.contentGroup)), this.renderTitle(), zc(r, (f, x) => (f.options?.legendIndex || 0) - (x.options?.legendIndex || 0)), i.reversed && r.reverse(), this.allItems = r, this.display = o = !!r.length, this.lastLineHeight = 0, this.maxItemWidth = 0, this.totalItemWidth = 0, this.itemHeight = 0, r.forEach(this.renderItem, this), r.forEach(this.layoutItem, this), a = (this.widthOption || this.offsetWidth) + s, l = this.lastItemY + this.lastLineHeight + this.titleHeight, l = this.handleOverflow(l) + s, d || (this.box = d = e.rect().addClass("highcharts-legend-box").attr({ r: i.borderRadius }).add(c)), t.styledMode || d.attr({ stroke: i.borderColor, "stroke-width": i.borderWidth || 0, fill: i.backgroundColor || "none" }).shadow(i.shadow), a > 0 && l > 0 && d[d.placed ? "animate" : "attr"](d.crisp.call({}, { x: 0, y: 0, width: a, height: l }, d.strokeWidth())), c[o ? "show" : "hide"](), t.styledMode && c.getStyle("display") === "none" && (a = l = 0), this.legendWidth = a, this.legendHeight = l, o && this.align(), this.proximate || this.positionItems(), ai(this, "afterRender");
        }
        align(t = this.chart.spacingBox) {
          let e = this.chart, i = this.options, s = t.y;
          /(lth|ct|rth)/.test(this.getAlignment()) && e.titleOffset[0] > 0 ? s += e.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && e.titleOffset[2] > 0 && (s -= e.titleOffset[2]), s !== t.y && (t = Zi(t, { y: s })), e.hasRendered || (this.group.placed = !1), this.group.align(Zi(i, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : i.verticalAlign }), !0, t);
        }
        handleOverflow(t) {
          let e = this, i = this.chart, s = i.renderer, r = this.options, o = r.y, a = r.verticalAlign === "top", l = this.padding, c = r.maxHeight, m = r.navigation, d = Ne(m.animation, !0), f = m.arrowSize || 12, x = this.pages, y = this.allItems, M = function(I) {
            typeof I == "number" ? N.attr({ height: I }) : N && (e.clipRect = N.destroy(), e.contentGroup.clip()), e.contentGroup.div && (e.contentGroup.div.style.clip = I ? "rect(" + l + "px,9999px," + (l + I) + "px,0)" : "auto");
          }, w = function(I) {
            return e[I] = s.circle(0, 0, 1.3 * f).translate(f / 2, f / 2).add(D), i.styledMode || e[I].attr("fill", "rgba(0,0,0,0.0001)"), e[I];
          }, v, T, S, O, L = i.spacingBox.height + (a ? -o : o) - l, D = this.nav, N = this.clipRect;
          return r.layout !== "horizontal" || r.verticalAlign === "middle" || r.floating || (L /= 2), c && (L = Math.min(L, c)), x.length = 0, t && L > 0 && t > L && m.enabled !== !1 ? (this.clipHeight = v = Math.max(L - 20 - this.titleHeight - l, 0), this.currentPage = Ne(this.currentPage, 1), this.fullHeight = t, y.forEach((I, W) => {
            let Y = (S = I.legendItem || {}).y || 0, H = Math.round(S.label.getBBox().height), V = x.length;
            (!V || Y - x[V - 1] > v && (T || Y) !== x[V - 1]) && (x.push(T || Y), V++), S.pageIx = V - 1, T && O && (O.pageIx = V - 1), W === y.length - 1 && Y + H - x[V - 1] > v && Y > x[V - 1] && (x.push(Y), S.pageIx = V), Y !== T && (T = Y), O = S;
          }), N || (N = e.clipRect = s.clipRect(0, l - 2, 9999, 0), e.contentGroup.clip(N)), M(v), D || (this.nav = D = s.g().attr({ zIndex: 1 }).add(this.group), this.up = s.symbol("triangle", 0, 0, f, f).add(D), w("upTracker").on("click", function() {
            e.scroll(-1, d);
          }), this.pager = s.text("", 15, 10).addClass("highcharts-legend-navigation"), !i.styledMode && m.style && this.pager.css(m.style), this.pager.add(D), this.down = s.symbol("triangle-down", 0, 0, f, f).add(D), w("downTracker").on("click", function() {
            e.scroll(1, d);
          })), e.scroll(0), t = L) : D && (M(), this.nav = D.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0), t;
        }
        scroll(t, e) {
          let i = this.chart, s = this.pages, r = s.length, o = this.clipHeight, a = this.options.navigation, l = this.pager, c = this.padding, m = this.currentPage + t;
          m > r && (m = r), m > 0 && (e !== void 0 && Sc(e, i), this.nav.attr({ translateX: c, translateY: o + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function(d) {
            d.attr({ class: m === 1 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
          }), l.attr({ text: m + "/" + r }), [this.down, this.downTracker].forEach(function(d) {
            d.attr({ x: 18 + this.pager.getBBox().width, class: m === r ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
          }, this), i.styledMode || (this.up.attr({ fill: m === 1 ? a.inactiveColor : a.activeColor }), this.upTracker.css({ cursor: m === 1 ? "default" : "pointer" }), this.down.attr({ fill: m === r ? a.inactiveColor : a.activeColor }), this.downTracker.css({ cursor: m === r ? "default" : "pointer" })), this.scrollOffset = -s[m - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = m, this.positionCheckboxes(), Fc(() => {
            ai(this, "afterScroll", { currentPage: m });
          }, Tc(Ne(e, i.renderer.globalAnimation, !0)).duration));
        }
        setItemEvents(t, e, i) {
          let s = this, r = t.legendItem || {}, o = s.chart.renderer.boxWrapper, a = t instanceof Bt, l = t instanceof ce, c = "highcharts-legend-" + (a ? "point" : "series") + "-active", m = s.chart.styledMode, d = i ? [e, r.symbol] : [r.group], f = (x) => {
            s.allItems.forEach((y) => {
              t !== y && [y].concat(y.linkedSeries || []).forEach((M) => {
                M.setState(x, !a);
              });
            });
          };
          for (let x of d) x && x.on("mouseover", function() {
            t.visible && f("inactive"), t.setState("hover"), t.visible && o.addClass(c), m || e.css(s.options.itemHoverStyle);
          }).on("mouseout", function() {
            s.chart.styledMode || e.css(Zi(t.visible ? s.itemStyle : s.itemHiddenStyle)), f(""), o.removeClass(c), t.setState();
          }).on("click", function(y) {
            let M = function() {
              t.setVisible && t.setVisible(), f(t.visible ? "inactive" : "");
            };
            o.removeClass(c), ai(s, "itemClick", { browserEvent: y, legendItem: t }, M), a ? t.firePointEvent("legendItemClick", { browserEvent: y }) : l && ai(t, "legendItemClick", { browserEvent: y });
          });
        }
        createCheckboxForItem(t) {
          t.checkbox = Lc("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: t.selected, defaultChecked: t.selected }, this.options.itemCheckboxStyle, this.chart.container), va(t.checkbox, "click", function(e) {
            let i = e.target;
            ai(t.series || t, "checkboxClick", { checked: i.checked, item: t }, function() {
              t.select();
            });
          });
        }
      }
      (function(h) {
        h.compose = function(t) {
          Nc(Ec, "Core.Legend") && va(t, "beforeMargins", function() {
            this.legend = new h(this, this.options.legend);
          });
        };
      })(rl || (rl = {}));
      let ih = rl, { animate: ol, animObject: Hc, setAnimation: al } = Rt, { defaultOptions: nl } = te, { numberFormat: Wc } = Jt, { registerEventOptions: sh } = fi, { charts: _i, doc: qr, marginNames: rh, svg: Xc, win: oh } = X, { seriesTypes: ll } = Nt, { addEvent: hl, attr: ah, createElement: cl, css: Re, defined: Mi, diffObjects: nh, discardElement: Gc, erase: Yc, error: dl, extend: Ci, find: ul, fireEvent: ut, getAlignFactor: jc, getStyle: pl, isArray: Uc, isNumber: Fs, isObject: Vc, isString: ka, merge: _e, objectEach: gl, pick: ee, pInt: qc, relativeLength: lh, removeEvent: hh, splat: wa, syncTimeout: Kc, uniqueKey: $c } = $;
      class Ai {
        static chart(t, e, i) {
          return new Ai(t, e, i);
        }
        constructor(t, e, i) {
          this.sharedClips = {};
          let s = [...arguments];
          (ka(t) || t.nodeName) && (this.renderTo = s.shift()), this.init(s[0], s[1]);
        }
        setZoomOptions() {
          let t = this.options.chart, e = t.zooming;
          this.zooming = { ...e, type: ee(t.zoomType, e.type), key: ee(t.zoomKey, e.key), pinchType: ee(t.pinchType, e.pinchType), singleTouch: ee(t.zoomBySingleTouch, e.singleTouch, !1), resetButton: _e(e.resetButton, t.resetZoomButton) };
        }
        init(t, e) {
          ut(this, "init", { args: arguments }, function() {
            let i = _e(nl, t), s = i.chart, r = this.renderTo || s.renderTo;
            this.userOptions = Ci({}, t), (this.renderTo = ka(r) ? qr.getElementById(r) : r) || dl(13, !0, this), this.margin = [], this.spacing = [], this.labelCollectors = [], this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.locale = i.lang.locale ?? this.renderTo.closest("[lang]")?.lang, this.time = new Ks(Ci(i.time || {}, { locale: this.locale }), i.lang), i.time = this.time.options, this.numberFormatter = (s.numberFormatter || Wc).bind(this), this.styledMode = s.styledMode, this.hasCartesianSeries = s.showAxes, this.index = _i.length, _i.push(this), X.chartCount++, sh(this, s), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), ut(this, "afterInit"), this.firstRender();
          });
        }
        initSeries(t) {
          let e = this.options.chart, i = t.type || e.type, s = ll[i];
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
          let i = this[t], s = this.options[t] = wa(this.options[t]).slice(), r = this.userOptions[t] = this.userOptions[t] ? wa(this.userOptions[t]).slice() : [];
          if (this.hasRendered && (s.splice(e), r.splice(e)), i) for (let o = e, a = i.length; o < a; ++o) {
            let l = i[o];
            l && (l.index = o, l instanceof ce && (l.name = l.getName()), l.options.isInternal || (s[o] = l.options, r[o] = l.userOptions));
          }
        }
        getClipBox(t, e) {
          let i = this.inverted, { xAxis: s, yAxis: r } = t || {}, { x: o, y: a, width: l, height: c } = _e(this.clipBox);
          return t && (s && s.len !== this.plotSizeX && (l = s.len), r && r.len !== this.plotSizeY && (c = r.len), i && !t.invertible && ([l, c] = [c, l])), e && (o += (i ? r : s)?.pos ?? this.plotLeft, a += (i ? s : r)?.pos ?? this.plotTop), { x: o, y: a, width: l, height: c };
        }
        isInsidePlot(t, e, i = {}) {
          let { inverted: s, plotBox: r, plotLeft: o, plotTop: a, scrollablePlotBox: l } = this, { scrollLeft: c = 0, scrollTop: m = 0 } = i.visiblePlotOnly && this.scrollablePlotArea?.scrollingContainer || {}, d = i.series, f = i.visiblePlotOnly && l || r, x = i.inverted ? e : t, y = i.inverted ? t : e, M = { x, y, isInsidePlot: !0, options: i };
          if (!i.ignoreX) {
            let w = d && (s && !this.polar ? d.yAxis : d.xAxis) || { pos: o, len: 1 / 0 }, v = i.paneCoordinates ? w.pos + x : o + x;
            v >= Math.max(c + o, w.pos) && v <= Math.min(c + o + f.width, w.pos + w.len) || (M.isInsidePlot = !1);
          }
          if (!i.ignoreY && M.isInsidePlot) {
            let w = !s && i.axis && !i.axis.isXAxis && i.axis || d && (s ? d.xAxis : d.yAxis) || { pos: a, len: 1 / 0 }, v = i.paneCoordinates ? w.pos + y : a + y;
            v >= Math.max(m + a, w.pos) && v <= Math.min(m + a + f.height, w.pos + w.len) || (M.isInsidePlot = !1);
          }
          return ut(this, "afterIsInsidePlot", M), M.isInsidePlot;
        }
        redraw(t) {
          ut(this, "beforeRedraw");
          let e = this.hasCartesianSeries ? this.axes : this.colorAxis || [], i = this.series, s = this.pointer, r = this.legend, o = this.userOptions.legend, a = this.renderer, l = a.isHidden(), c = [], m, d, f, x = this.isDirtyBox, y = this.isDirtyLegend, M;
          for (a.rootFontSize = a.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(!1), al(!!this.hasRendered && t, this), l && this.temporaryDisplay(), this.layOutTitles(!1), f = i.length; f--; ) if (((M = i[f]).options.stacking || M.options.centerInCategory) && (d = !0, M.isDirty)) {
            m = !0;
            break;
          }
          if (m) for (f = i.length; f--; ) (M = i[f]).options.stacking && (M.isDirty = !0);
          i.forEach(function(w) {
            w.isDirty && (w.options.legendType === "point" ? (typeof w.updateTotals == "function" && w.updateTotals(), y = !0) : o && (o.labelFormatter || o.labelFormat) && (y = !0)), w.isDirtyData && ut(w, "updatedData");
          }), y && r && r.options.enabled && (r.render(), this.isDirtyLegend = !1), d && this.getStacks(), e.forEach(function(w) {
            w.updateNames(), w.setScale();
          }), this.getMargins(), e.forEach(function(w) {
            w.isDirty && (x = !0);
          }), e.forEach(function(w) {
            let v = w.min + "," + w.max;
            w.extKey !== v && (w.extKey = v, c.push(function() {
              ut(w, "afterSetExtremes", Ci(w.eventArgs, w.getExtremes())), delete w.eventArgs;
            })), (x || d) && w.redraw();
          }), x && this.drawChartBox(), ut(this, "predraw"), i.forEach(function(w) {
            (x || w.isDirty) && w.visible && w.redraw(), w.isDirtyData = !1;
          }), s && s.reset(!0), a.draw(), ut(this, "redraw"), ut(this, "render"), l && this.temporaryDisplay(!0), c.forEach(function(w) {
            w.call();
          });
        }
        get(t) {
          let e = this.series;
          function i(r) {
            return r.id === t || r.options && r.options.id === t;
          }
          let s = ul(this.axes, i) || ul(this.series, i);
          for (let r = 0; !s && r < e.length; r++) s = ul(e[r].points || [], i);
          return s;
        }
        createAxes() {
          let t = this.userOptions;
          for (let e of (ut(this, "createAxes"), ["xAxis", "yAxis"])) for (let i of t[e] = wa(t[e] || {})) new vi(this, i, e);
          ut(this, "afterCreateAxes");
        }
        getSelectedPoints() {
          return this.series.reduce((t, e) => (e.getPointsCollection().forEach((i) => {
            ee(i.selectedStaging, i.selected) && t.push(i);
          }), t), []);
        }
        getSelectedSeries() {
          return this.series.filter((t) => t.selected);
        }
        setTitle(t, e, i) {
          this.applyDescription("title", t), this.applyDescription("subtitle", e), this.applyDescription("caption", void 0), this.layOutTitles(i);
        }
        applyDescription(t, e) {
          let i = this, s = this.options[t] = _e(this.options[t], e), r = this[t];
          r && e && (this[t] = r = r.destroy()), s && !r && ((r = this.renderer.text(s.text, 0, 0, s.useHTML).attr({ align: s.align, class: "highcharts-" + t, zIndex: s.zIndex || 4 }).css({ textOverflow: "ellipsis", whiteSpace: "nowrap" }).add()).update = function(o, a) {
            i.applyDescription(t, o), i.layOutTitles(a);
          }, this.styledMode || r.css(Ci(t === "title" ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {}, s.style)), r.textPxLength = r.getBBox().width, r.css({ whiteSpace: s.style?.whiteSpace }), this[t] = r);
        }
        layOutTitles(t = !0) {
          let e = [0, 0, 0], { options: i, renderer: s, spacingBox: r } = this;
          ["title", "subtitle", "caption"].forEach((a) => {
            let l = this[a], c = this.options[a], m = _e(r), d = l?.textPxLength || 0;
            if (l && c) {
              ut(this, "layOutTitle", { alignTo: m, key: a, textPxLength: d });
              let f = s.fontMetrics(l), x = f.b, y = f.h, M = c.verticalAlign || "top", w = M === "top", v = w && c.minScale || 1, T = a === "title" ? w ? -3 : 0 : w ? e[0] + 2 : 0, S = Math.min(m.width / d, 1), O = Math.max(v, S), L = _e({ y: M === "bottom" ? x : T + x }, { align: a === "title" ? S < v ? "left" : "center" : this.title?.alignValue }, c), D = (c.width || (S > v ? this.chartWidth : m.width) / O) + "px";
              l.alignValue !== L.align && (l.placed = !1);
              let N = Math.round(l.css({ width: D }).getBBox(c.useHTML).height);
              if (L.height = N, l.align(L, !1, m).attr({ align: L.align, scaleX: O, scaleY: O, "transform-origin": `${m.x + d * O * jc(L.align)} ${y}` }), !c.floating) {
                let I = N * (N < 1.2 * y ? 1 : O);
                M === "top" ? e[0] = Math.ceil(e[0] + I) : M === "bottom" && (e[2] = Math.ceil(e[2] + I));
              }
            }
          }, this), e[0] && (i.title?.verticalAlign || "top") === "top" && (e[0] += i.title?.margin || 0), e[2] && i.caption?.verticalAlign === "bottom" && (e[2] += i.caption?.margin || 0);
          let o = !this.titleOffset || this.titleOffset.join(",") !== e.join(",");
          this.titleOffset = e, ut(this, "afterLayOutTitles"), !this.isDirtyBox && o && (this.isDirtyBox = this.isDirtyLegend = o, this.hasRendered && t && this.isDirtyBox && this.redraw());
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
          this.chartWidth = Math.max(0, e || s.width || 600), this.chartHeight = Math.max(0, lh(i, this.chartWidth) || (r ? 400 : s.height)), this.containerBox = s;
        }
        temporaryDisplay(t) {
          let e = this.renderTo, i;
          if (t) for (; e?.style; ) e.hcOrigStyle && (Re(e, e.hcOrigStyle), delete e.hcOrigStyle), e.hcOrigDetached && (qr.body.removeChild(e), e.hcOrigDetached = !1), e = e.parentNode;
          else for (; e?.style && (qr.body.contains(e) || e.parentNode || (e.hcOrigDetached = !0, qr.body.appendChild(e)), (pl(e, "display", !1) === "none" || e.hcOricDetached) && (e.hcOrigStyle = { display: e.style.display, height: e.style.height, overflow: e.style.overflow }, i = { display: "block", overflow: "hidden" }, e !== this.renderTo && (i.height = 0), Re(e, i), e.offsetWidth || e.style.setProperty("display", "block", "important")), (e = e.parentNode) !== qr.body); ) ;
        }
        setClassName(t) {
          this.container.className = "highcharts-container " + (t || "");
        }
        getContainer() {
          let t, e = this.options, i = e.chart, s = "data-highcharts-chart", r = $c(), o = this.renderTo, a = qc(ah(o, s));
          Fs(a) && _i[a] && _i[a].hasRendered && _i[a].destroy(), ah(o, s, this.index), o.innerHTML = Ct.emptyHTML, i.skipClone || o.offsetWidth || this.temporaryDisplay(), this.getChartSize();
          let l = this.chartHeight, c = this.chartWidth;
          Re(o, { overflow: "hidden" }), this.styledMode || (t = Ci({ position: "relative", overflow: "hidden", width: c + "px", height: l + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none", padding: "0px" }, i.style || {}));
          let m = cl("div", { id: r }, t, o);
          this.container = m, this.getChartSize(), c !== this.chartWidth && (c = this.chartWidth, this.styledMode || Re(m, { width: ee(i.style?.width, c + "px") })), this.containerBox = this.getContainerBox(), this._cursor = m.style.cursor;
          let d = i.renderer || !Xc ? zi.getRendererType(i.renderer) : Ms;
          if (this.renderer = new d(m, c, l, void 0, i.forExport, e.exporting?.allowHTML, this.styledMode), al(void 0, this), this.setClassName(i.className), this.styledMode) for (let f in e.defs) this.renderer.definition(e.defs[f]);
          else this.renderer.setStyle(i.style);
          this.renderer.chartIndex = this.index, ut(this, "afterGetContainer");
        }
        getMargins(t) {
          let { spacing: e, margin: i, titleOffset: s } = this;
          this.resetMargins(), s[0] && !Mi(i[0]) && (this.plotTop = Math.max(this.plotTop, s[0] + e[0])), s[2] && !Mi(i[2]) && (this.marginBottom = Math.max(this.marginBottom, s[2] + e[2])), this.legend?.display && this.legend.adjustMargins(i, e), ut(this, "getMargins"), t || this.getAxisMargins();
        }
        getAxisMargins() {
          let t = this, e = t.axisOffset = [0, 0, 0, 0], i = t.colorAxis, s = t.margin, r = (o) => {
            o.forEach((a) => {
              a.visible && a.getOffset();
            });
          };
          t.hasCartesianSeries ? r(t.axes) : i?.length && r(i), rh.forEach((o, a) => {
            Mi(s[a]) || (t[o] += e[a]);
          }), t.setChartSize();
        }
        getOptions() {
          return nh(this.userOptions, nl);
        }
        reflow(t) {
          let e = this, i = e.containerBox, s = e.getContainerBox();
          delete e.pointer?.chartPosition, !e.exporting?.isPrinting && !e.isResizing && i && s.width && ((s.width !== i.width || s.height !== i.height) && ($.clearTimeout(e.reflowTimeout), e.reflowTimeout = Kc(function() {
            e.container && e.setSize(void 0, void 0, !1);
          }, 100 * !!t)), e.containerBox = s);
        }
        setReflow() {
          let t = this, e = (i) => {
            t.options?.chart.reflow && t.hasLoaded && t.reflow(i);
          };
          if (typeof ResizeObserver == "function") new ResizeObserver(e).observe(t.renderTo);
          else {
            let i = hl(oh, "resize", e);
            hl(this, "destroy", i);
          }
        }
        setSize(t, e, i) {
          let s = this, r = s.renderer;
          s.isResizing += 1, al(i, s);
          let o = r.globalAnimation;
          s.oldChartHeight = s.chartHeight, s.oldChartWidth = s.chartWidth, t !== void 0 && (s.options.chart.width = t), e !== void 0 && (s.options.chart.height = e), s.getChartSize();
          let { chartWidth: a, chartHeight: l, scrollablePixelsX: c = 0, scrollablePixelsY: m = 0 } = s;
          (s.isDirtyBox || a !== s.oldChartWidth || l !== s.oldChartHeight) && (s.styledMode || (o ? ol : Re)(s.container, { width: `${a + c}px`, height: `${l + m}px` }, o), s.setChartSize(!0), r.setSize(a, l, o), s.axes.forEach(function(d) {
            d.isDirty = !0, d.setScale();
          }), s.isDirtyLegend = !0, s.isDirtyBox = !0, s.layOutTitles(), s.getMargins(), s.redraw(o), s.oldChartHeight = void 0, ut(s, "resize"), setTimeout(() => {
            s && ut(s, "endResize");
          }, Hc(o).duration)), s.isResizing -= 1;
        }
        setChartSize(t) {
          let e, i, s, r, { chartHeight: o, chartWidth: a, inverted: l, spacing: c, renderer: m } = this, d = this.clipOffset, f = Math[l ? "floor" : "round"];
          this.plotLeft = e = Math.round(this.plotLeft), this.plotTop = i = Math.round(this.plotTop), this.plotWidth = s = Math.max(0, Math.round(a - e - (this.marginRight ?? 0))), this.plotHeight = r = Math.max(0, Math.round(o - i - (this.marginBottom ?? 0))), this.plotSizeX = l ? r : s, this.plotSizeY = l ? s : r, this.spacingBox = m.spacingBox = { x: c[3], y: c[0], width: a - c[3] - c[1], height: o - c[0] - c[2] }, this.plotBox = m.plotBox = { x: e, y: i, width: s, height: r }, d && (this.clipBox = { x: f(d[3]), y: f(d[0]), width: f(this.plotSizeX - d[1] - d[3]), height: f(this.plotSizeY - d[0] - d[2]) }), t || (this.axes.forEach(function(x) {
            x.setAxisSize(), x.setAxisTranslation();
          }), m.alignElements()), ut(this, "afterSetChartSize", { skipAxes: t });
        }
        resetMargins() {
          ut(this, "resetMargins");
          let t = this, e = t.options.chart, i = e.plotBorderWidth || 0, s = Math.round(i) / 2;
          ["margin", "spacing"].forEach((r) => {
            let o = e[r], a = Vc(o) ? o : [o, o, o, o];
            ["Top", "Right", "Bottom", "Left"].forEach((l, c) => {
              t[r][c] = e[`${r}${l}`] ?? a[c];
            });
          }), rh.forEach((r, o) => {
            t[r] = t.margin[o] ?? t.spacing[o];
          }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [s, s, s, s], t.plotBorderWidth = i;
        }
        drawChartBox() {
          let t = this.options.chart, e = this.renderer, i = this.chartWidth, s = this.chartHeight, r = this.styledMode, o = this.plotBGImage, a = t.backgroundColor, l = t.plotBackgroundColor, c = t.plotBackgroundImage, m = this.plotLeft, d = this.plotTop, f = this.plotWidth, x = this.plotHeight, y = this.plotBox, M = this.clipRect, w = this.clipBox, v = this.chartBackground, T = this.plotBackground, S = this.plotBorder, O, L, D, N = "animate";
          v || (this.chartBackground = v = e.rect().addClass("highcharts-background").add(), N = "attr"), r ? O = L = v.strokeWidth() : (L = (O = t.borderWidth || 0) + 8 * !!t.shadow, D = { fill: a || "none" }, (O || v["stroke-width"]) && (D.stroke = t.borderColor, D["stroke-width"] = O), v.attr(D).shadow(t.shadow)), v[N]({ x: L / 2, y: L / 2, width: i - L - O % 2, height: s - L - O % 2, r: t.borderRadius }), N = "animate", T || (N = "attr", this.plotBackground = T = e.rect().addClass("highcharts-plot-background").add()), T[N](y), !r && (T.attr({ fill: l || "none" }).shadow(t.plotShadow), c && (o ? (c !== o.attr("href") && o.attr("href", c), o.animate(y)) : this.plotBGImage = e.image(c, m, d, f, x).add())), M ? M.animate({ width: w.width, height: w.height }) : this.clipRect = e.clipRect(w), N = "animate", S || (N = "attr", this.plotBorder = S = e.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()), r || S.attr({ stroke: t.plotBorderColor, "stroke-width": t.plotBorderWidth || 0, fill: "none" }), S[N](S.crisp(y, -S.strokeWidth())), this.isDirtyBox = !1, ut(this, "afterDrawChartBox");
        }
        propFromSeries() {
          let t, e, i, s = this, r = s.options.chart, o = s.options.series;
          ["inverted", "angular", "polar"].forEach(function(a) {
            for (e = ll[r.type], i = r[a] || e && e.prototype[a], t = o?.length; !i && t--; ) (e = ll[o[t].type]) && e.prototype[a] && (i = !0);
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
              (o = r === ":previous" ? e.series[s.index - 1] : e.get(r)) && o.linkedParent !== s && (o.linkedSeries.push(s), s.linkedParent = o, o.enabledDataSorting && s.setDataSortingOptions(), s.visible = ee(s.options.visible, o.options.visible, s.visible));
            }
          }), ut(this, "afterLinkSeries", { isUpdating: t });
        }
        renderSeries() {
          this.series.forEach(function(t) {
            t.translate(), t.render();
          });
        }
        render() {
          let t = this.axes, e = this.colorAxis, i = this.renderer, s = this.options.chart.axisLayoutRuns || 2, r = (m) => {
            m.forEach((d) => {
              d.visible && d.render();
            });
          }, o = 0, a = !0, l, c = 0;
          for (let m of (this.setTitle(), ut(this, "beforeMargins"), this.getStacks?.(), this.getMargins(!0), this.setChartSize(), t)) {
            let { options: d } = m, { labels: f } = d;
            if (this.hasCartesianSeries && m.horiz && m.visible && f.enabled && m.series.length && m.coll !== "colorAxis" && !this.polar) {
              o = d.tickLength, m.createGroups();
              let x = new bi(m, 0, "", !0), y = x.createLabel("x", f);
              if (x.destroy(), y && ee(f.reserveSpace, !Fs(d.crossing)) && (o = y.getBBox().height + f.distance + Math.max(d.offset || 0, 0)), o) {
                y?.destroy();
                break;
              }
            }
          }
          for (this.plotHeight = Math.max(this.plotHeight - o, 0); (a || l || s > 1) && c < s; ) {
            let m = this.plotWidth, d = this.plotHeight;
            for (let f of t) c === 0 ? f.setScale() : (f.horiz && a || !f.horiz && l) && f.setTickInterval(!0);
            c === 0 ? this.getAxisMargins() : this.getMargins(), a = m / this.plotWidth > (c ? 1 : 1.1), l = d / this.plotHeight > (c ? 1 : 1.05), c++;
          }
          this.drawChartBox(), this.hasCartesianSeries ? r(t) : e?.length && r(e), this.seriesGroup || (this.seriesGroup = i.g("series-group").attr({ zIndex: 3 }).shadow(this.options.chart.seriesGroupShadow).add()), this.dataLabelsGroup || (this.dataLabelsGroup = i.g("datalabels-group").attr({ zIndex: 6 }).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0;
        }
        addCredits(t) {
          let e = this, i = _e(!0, this.options.credits, t);
          i.enabled && !this.credits && (this.credits = this.renderer.text(i.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
            i.href && (oh.location.href = i.href);
          }).attr({ align: i.position.align, zIndex: 8 }), e.styledMode || this.credits.css(i.style), this.credits.add().align(i.position), this.credits.update = function(s) {
            e.credits = e.credits.destroy(), e.addCredits(s);
          });
        }
        destroy() {
          let t, e = this, i = e.axes, s = e.series, r = e.container, o = r?.parentNode;
          for (ut(e, "destroy"), e.renderer.forExport ? Yc(_i, e) : _i[e.index] = void 0, X.chartCount--, e.renderTo.removeAttribute("data-highcharts-chart"), hh(e), t = i.length; t--; ) i[t] = i[t].destroy();
          for (this.scroller?.destroy?.(), t = s.length; t--; ) s[t] = s[t].destroy();
          ["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"].forEach((a) => {
            e[a] = e[a]?.destroy?.();
          }), r && (r.innerHTML = Ct.emptyHTML, hh(r), o && Gc(r)), gl(e, function(a, l) {
            delete e[l];
          });
        }
        firstRender() {
          let t = this, e = t.options;
          t.getContainer(), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.createAxes();
          let i = Uc(e.series) ? e.series : [];
          e.series = [], i.forEach(function(s) {
            t.initSeries(s);
          }), t.linkSeries(), t.setSortedData(), ut(t, "beforeRender"), t.render(), t.pointer?.getChartPosition(), t.renderer.imgCount || t.hasLoaded || t.onload(), t.temporaryDisplay(!0);
        }
        onload() {
          this.callbacks.concat([this.callback]).forEach(function(t) {
            t && this.index !== void 0 && t.apply(this, [this]);
          }, this), ut(this, "load"), ut(this, "render"), Mi(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = !0;
        }
        warnIfA11yModuleNotLoaded() {
          let { options: t, title: e } = this;
          t && !this.accessibility && (this.renderer.boxWrapper.attr({ role: "img", "aria-label": (e?.element.textContent || "").replace(/</g, "&lt;") }), t.accessibility && t.accessibility.enabled === !1 || dl('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', !1, this));
        }
        addSeries(t, e, i) {
          let s, r = this;
          return t && (e = ee(e, !0), ut(r, "addSeries", { options: t }, function() {
            s = r.initSeries(t), r.isDirtyLegend = !0, r.linkSeries(), s.enabledDataSorting && s.setData(t.data, !1), ut(r, "afterAddSeries", { series: s }), e && r.redraw(i);
          })), s;
        }
        addAxis(t, e, i, s) {
          return this.createAxis(e ? "xAxis" : "yAxis", { axis: t, redraw: i, animation: s });
        }
        addColorAxis(t, e, i) {
          return this.createAxis("colorAxis", { axis: t, redraw: e, animation: i });
        }
        createAxis(t, e) {
          let i = new vi(this, e.axis, t);
          return ee(e.redraw, !0) && this.redraw(e.animation), i;
        }
        showLoading(t) {
          let e = this, i = e.options, s = i.loading, r = function() {
            o && Re(o, { left: e.plotLeft + "px", top: e.plotTop + "px", width: e.plotWidth + "px", height: e.plotHeight + "px" });
          }, o = e.loadingDiv, a = e.loadingSpan;
          o || (e.loadingDiv = o = cl("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, e.container)), a || (e.loadingSpan = a = cl("span", { className: "highcharts-loading-inner" }, null, o), hl(e, "redraw", r)), o.className = "highcharts-loading", Ct.setElementHTML(a, ee(t, i.lang.loading, "")), !e.styledMode && (Re(o, Ci(s.style, { zIndex: 10 })), Re(a, s.labelStyle), e.loadingShown || (Re(o, { opacity: 0, display: "" }), ol(o, { opacity: s.style.opacity || 0.5 }, { duration: s.showDuration || 0 }))), e.loadingShown = !0, r();
        }
        hideLoading() {
          let t = this.options, e = this.loadingDiv;
          e && (e.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || ol(e, { opacity: 0 }, { duration: t.loading.hideDuration || 100, complete: function() {
            Re(e, { display: "none" });
          } })), this.loadingShown = !1;
        }
        update(t, e, i, s) {
          let r, o, a, l = this, c = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, m = t.isResponsiveOptions, d = [];
          ut(l, "update", { options: t }), m || l.setResponsive(!1, !0), t = nh(t, l.options), l.userOptions = _e(l.userOptions, t);
          let f = t.chart;
          f && (_e(!0, l.options.chart, f), this.setZoomOptions(), "className" in f && l.setClassName(f.className), ("inverted" in f || "polar" in f || "type" in f) && (l.propFromSeries(), r = !0), "alignTicks" in f && (r = !0), "events" in f && sh(this, f), gl(f, function(M, w) {
            l.propsRequireUpdateSeries.indexOf("chart." + w) !== -1 && (o = !0), l.propsRequireDirtyBox.indexOf(w) !== -1 && (l.isDirtyBox = !0), l.propsRequireReflow.indexOf(w) !== -1 && (l.isDirtyBox = !0, m || (a = !0));
          }), !l.styledMode && f.style && l.renderer.setStyle(l.options.chart.style || {})), !l.styledMode && t.colors && (this.options.colors = t.colors), gl(t, function(M, w) {
            l[w] && typeof l[w].update == "function" ? l[w].update(M, !1) : typeof l[c[w]] == "function" ? l[c[w]](M) : w !== "colors" && l.collectionsWithUpdate.indexOf(w) === -1 && _e(!0, l.options[w], t[w]), w !== "chart" && l.propsRequireUpdateSeries.indexOf(w) !== -1 && (o = !0);
          }), this.collectionsWithUpdate.forEach(function(M) {
            t[M] && (wa(t[M]).forEach(function(w, v) {
              let T, S = Mi(w.id);
              S && (T = l.get(w.id)), !T && l[M] && (T = l[M][ee(w.index, v)]) && (S && Mi(T.options.id) || T.options.isInternal) && (T = void 0), T && T.coll === M && (T.update(w, !1), i && (T.touched = !0)), !T && i && l.collectionsWithInit[M] && (l.collectionsWithInit[M][0].apply(l, [w].concat(l.collectionsWithInit[M][1] || []).concat([!1])).touched = !0);
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
          let x = f?.width, y = f && (ka(f.height) ? lh(f.height, x || l.chartWidth) : f.height);
          a || Fs(x) && x !== l.chartWidth || Fs(y) && y !== l.chartHeight ? l.setSize(x, y, s) : ee(e, !0) && l.redraw(s), ut(l, "afterUpdate", { options: t, redraw: e, animation: s });
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
          ut(this, "beforeShowResetZoom", null, function() {
            t.resetZoomButton = t.renderer.button(e.resetZoom, null, null, o, s).attr({ align: i.position.align, title: e.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(i.position, !1, r);
          }), ut(this, "afterShowResetZoom");
        }
        zoomOut() {
          ut(this, "selection", { resetSelection: !0 }, () => this.transform({ reset: !0, trigger: "zoom" }));
        }
        pan(t, e) {
          let i = this, s = typeof e == "object" ? e : { enabled: e, type: "x" }, r = s.type, o = r && i[{ x: "xAxis", xy: "axes", y: "yAxis" }[r]].filter((l) => l.options.panningEnabled && !l.options.isInternal), a = i.options.chart;
          a?.panning && (a.panning = s), ut(this, "pan", { originalEvent: t }, () => {
            i.transform({ axes: o, event: t, to: { x: t.chartX - (i.mouseDownX || 0), y: t.chartY - (i.mouseDownY || 0) }, trigger: "pan" }), Re(i.container, { cursor: "move" });
          });
        }
        transform(t) {
          let { axes: e = this.axes, event: i, from: s = {}, reset: r, selection: o, to: a = {}, trigger: l } = t, { inverted: c, time: m } = this;
          this.hoverPoints?.forEach((y) => y.setState()), ut(this, "transform", t);
          let d = t.hasZoomed || !1, f, x;
          for (let y of e) {
            let { horiz: M, len: w, minPointOffset: v = 0, options: T, reversed: S } = y, O = M ? "width" : "height", L = M ? "x" : "y", D = ee(a[O], y.len), N = ee(s[O], y.len), I = 10 > Math.abs(D) ? 1 : D / N, W = (s[L] || 0) + N / 2 - y.pos, Y = W - ((a[L] ?? y.pos) + D / 2 - y.pos) / I, H = S && !c || !S && c ? -1 : 1;
            if (!r && (W < 0 || W > y.len)) continue;
            let V = y.chart.polar || y.isOrdinal ? 0 : v * H || 0, Z = y.toValue(Y, !0), J = y.toValue(Y + w / I, !0), j = Z + V, q = J - V, _ = y.allExtremes;
            if (o && o[y.coll].push({ axis: y, min: Math.min(Z, J), max: Math.max(Z, J) }), j > q && ([j, q] = [q, j]), I === 1 && !r && y.coll === "yAxis" && !_) {
              for (let re of y.series) {
                let Je = re.getExtremes(re.getProcessedData(!0).modified.getColumn("y") || [], !0);
                _ ?? (_ = { dataMin: Number.MAX_VALUE, dataMax: -Number.MAX_VALUE }), Fs(Je.dataMin) && Fs(Je.dataMax) && (_.dataMin = Math.min(Je.dataMin, _.dataMin), _.dataMax = Math.max(Je.dataMax, _.dataMax));
              }
              y.allExtremes = _;
            }
            let { dataMin: vt, dataMax: ct, min: ie, max: st } = Ci(y.getExtremes(), _ || {}), it = m.parse(T.min), pt = m.parse(T.max), lt = vt ?? it, kt = ct ?? pt, wt = q - j, mt = y.categories ? 0 : Math.min(wt, kt - lt), Lt = lt - mt * (Mi(it) ? 0 : T.minPadding), se = kt + mt * (Mi(pt) ? 0 : T.maxPadding), de = y.allowZoomOutside || I === 1 || l !== "zoom" && I > 1, Ei = Math.min(it ?? Lt, Lt, de ? ie : Lt), ze = Math.max(pt ?? se, se, de ? st : se);
            (!y.isOrdinal || I !== 1 || r) && (j < Ei && (j = Ei, I >= 1 && (q = j + wt)), q > ze && (q = ze, I >= 1 && (j = q - wt)), (r || y.series.length && (j !== ie || q !== st) && j >= Ei && q <= ze) && (o ? o[y.coll].push({ axis: y, min: j, max: q }) : (y.isPanning = l !== "zoom", y.isPanning && (x = !0), y.setExtremes(r ? void 0 : j, r ? void 0 : q, !1, !1, { move: Y, trigger: l, scale: I }), !r && (j > Ei || q < ze) && l !== "mousewheel" && (f = !0)), d = !0), this.hasCartesianSeries || r || l === "mousewheel" || (f = !0), i && (this[M ? "mouseDownX" : "mouseDownY"] = i[M ? "chartX" : "chartY"]));
          }
          return d && (o ? ut(this, "selection", o, () => {
            delete t.selection, t.trigger = "zoom", this.transform(t);
          }) : (!f || x || this.resetZoomButton ? !f && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()) : this.showResetZoom(), this.redraw(l === "zoom" && (this.options.chart.animation ?? this.pointCount < 100)))), d;
        }
      }
      Ci(Ai.prototype, { callbacks: [], collectionsWithInit: { xAxis: [Ai.prototype.addAxis, [!0]], yAxis: [Ai.prototype.addAxis, [!1]], series: [Ai.prototype.addSeries] }, collectionsWithUpdate: ["xAxis", "yAxis", "series"], propsRequireDirtyBox: ["backgroundColor", "borderColor", "borderWidth", "borderRadius", "plotBackgroundColor", "plotBackgroundImage", "plotBorderColor", "plotBorderWidth", "plotShadow", "shadow"], propsRequireReflow: ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "spacing", "spacingTop", "spacingRight", "spacingBottom", "spacingLeft"], propsRequireUpdateSeries: ["chart.inverted", "chart.polar", "chart.ignoreHiddenSeries", "chart.type", "colors", "plotOptions", "time", "tooltip"] });
      let { stop: Zc } = Rt, { composed: _c } = X, { addEvent: Ti, createElement: Ma, css: ml, defined: fl, erase: Jc, merge: ch, pushUnique: dh } = $;
      function Qc() {
        let h = this.scrollablePlotArea;
        (this.scrollablePixelsX || this.scrollablePixelsY) && !h && (this.scrollablePlotArea = h = new Kr(this)), h?.applyFixed();
      }
      function uh() {
        this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0);
      }
      class Kr {
        static compose(t, e, i) {
          dh(_c, this.compose) && (Ti(t, "afterInit", uh), Ti(e, "afterSetChartSize", (s) => this.afterSetSize(s.target, s)), Ti(e, "render", Qc), Ti(i, "show", uh));
        }
        static afterSetSize(t, e) {
          let i, s, r, { minWidth: o, minHeight: a } = t.options.chart.scrollablePlotArea || {}, { clipBox: l, plotBox: c, inverted: m, renderer: d } = t;
          if (!d.forExport) if (o ? (t.scrollablePixelsX = i = Math.max(0, o - t.chartWidth), i && (t.scrollablePlotBox = ch(t.plotBox), c.width = t.plotWidth += i, l[m ? "height" : "width"] += i, r = !0)) : a && (t.scrollablePixelsY = s = Math.max(0, a - t.chartHeight), fl(s) && (t.scrollablePlotBox = ch(t.plotBox), c.height = t.plotHeight += s, l[m ? "width" : "height"] += s, r = !1)), fl(r)) {
            if (!e.skipAxes) for (let f of t.axes) (f.horiz === r || t.hasParallelCoordinates && f.coll === "yAxis") && (f.setAxisSize(), f.setAxisTranslation());
          } else delete t.scrollablePlotBox;
        }
        constructor(t) {
          let e, i = t.options.chart, s = zi.getRendererType(), r = i.scrollablePlotArea || {}, o = this.moveFixedElements.bind(this), a = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
          t.scrollablePixelsX && (a.overflowX = "auto"), t.scrollablePixelsY && (a.overflowY = "auto"), this.chart = t;
          let l = this.parentDiv = Ma("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, t.renderTo), c = this.scrollingContainer = Ma("div", { className: "highcharts-scrolling" }, a, l), m = this.innerContainer = Ma("div", { className: "highcharts-inner-container" }, void 0, c), d = this.fixedDiv = Ma("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (i.style?.zIndex || 0) + 2, top: 0 }, void 0, !0), f = this.fixedRenderer = new s(d, t.chartWidth, t.chartHeight, i.style);
          this.mask = f.path().attr({ fill: i.backgroundColor || "#fff", "fill-opacity": r.opacity ?? 0.85, zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), c.parentNode.insertBefore(d, c), ml(t.renderTo, { overflow: "visible" }), Ti(t, "afterShowResetZoom", o), Ti(t, "afterApplyDrilldown", o), Ti(t, "afterLayOutTitles", o), Ti(c, "scroll", () => {
            let { pointer: x, hoverPoint: y } = t;
            x && (delete x.chartPosition, y && (e = y), x.runPointActions(void 0, e, !0));
          }), m.appendChild(t.container);
        }
        applyFixed() {
          let { chart: t, fixedRenderer: e, isDirty: i, scrollingContainer: s } = this, { axisOffset: r, chartWidth: o, chartHeight: a, container: l, plotHeight: c, plotLeft: m, plotTop: d, plotWidth: f, scrollablePixelsX: x = 0, scrollablePixelsY: y = 0 } = t, { scrollPositionX: M = 0, scrollPositionY: w = 0 } = t.options.chart.scrollablePlotArea || {}, v = o + x, T = a + y;
          e.setSize(o, a), (i ?? !0) && (this.isDirty = !1, this.moveFixedElements()), Zc(t.container), ml(l, { width: `${v}px`, height: `${T}px` }), t.renderer.boxWrapper.attr({ width: v, height: T, viewBox: [0, 0, v, T].join(" ") }), t.chartBackground?.attr({ width: v, height: T }), ml(s, { width: `${o}px`, height: `${a}px` }), fl(i) || (s.scrollLeft = x * M, s.scrollTop = y * w);
          let S = d - r[0] - 1, O = m - r[3] - 1, L = d + c + r[2] + 1, D = m + f + r[1] + 1, N = m + f - x, I = d + c - y, W = [["M", 0, 0]];
          x ? W = [["M", 0, S], ["L", m - 1, S], ["L", m - 1, L], ["L", 0, L], ["Z"], ["M", N, S], ["L", o, S], ["L", o, L], ["L", N, L], ["Z"]] : y && (W = [["M", O, 0], ["L", O, d - 1], ["L", D, d - 1], ["L", D, 0], ["Z"], ["M", O, I], ["L", O, a], ["L", D, a], ["L", D, I], ["Z"]]), t.redrawTrigger !== "adjustHeight" && this.mask.attr({ d: W });
        }
        moveFixedElements() {
          let t, { container: e, inverted: i, scrollablePixelsX: s, scrollablePixelsY: r } = this.chart, o = this.fixedRenderer, a = Kr.fixedSelectors;
          if (s && !i ? t = ".highcharts-yaxis" : s && i || r && !i ? t = ".highcharts-xaxis" : r && i && (t = ".highcharts-yaxis"), t && !(this.chart.hasParallelCoordinates && t === ".highcharts-yaxis")) for (let l of [`${t}:not(.highcharts-radial-axis)`, `${t}-labels:not(.highcharts-radial-axis-labels)`]) dh(a, l);
          else for (let l of [".highcharts-xaxis", ".highcharts-yaxis"]) for (let c of [`${l}:not(.highcharts-radial-axis)`, `${l}-labels:not(.highcharts-radial-axis-labels)`]) Jc(a, c);
          for (let l of a) [].forEach.call(e.querySelectorAll(l), (c) => {
            (c.namespaceURI === o.SVG_NS ? o.box : o.box.parentNode).appendChild(c), c.style.pointerEvents = "auto";
          });
        }
      }
      Kr.fixedSelectors = [".highcharts-breadcrumbs-group", ".highcharts-contextbutton", ".highcharts-caption", ".highcharts-credits", ".highcharts-drillup-button", ".highcharts-legend", ".highcharts-legend-checkbox", ".highcharts-navigator-series", ".highcharts-navigator-xaxis", ".highcharts-navigator-yaxis", ".highcharts-navigator", ".highcharts-range-selector-group", ".highcharts-reset-zoom", ".highcharts-scrollbar", ".highcharts-subtitle", ".highcharts-title"];
      let { format: td } = Jt, { series: ed } = Nt, { destroyObjectProperties: id, fireEvent: ph, getAlignFactor: xl, isNumber: bl, pick: $r } = $, gh = class {
        constructor(h, t, e, i, s) {
          let r = h.chart.inverted, o = h.reversed;
          this.axis = h;
          let a = this.isNegative = !!e != !!o;
          this.options = t = t || {}, this.x = i, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = !1, this.stack = s, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = { align: t.align || (r ? a ? "left" : "right" : "center"), verticalAlign: t.verticalAlign || (r ? "middle" : a ? "bottom" : "top"), y: t.y, x: t.x }, this.textAlign = t.textAlign || (r ? a ? "right" : "left" : "center");
        }
        destroy() {
          id(this, this.axis);
        }
        render(h) {
          let t = this.axis.chart, e = this.options, i = e.format, s = i ? td(i, this, t) : e.formatter.call(this);
          if (this.label) this.label.attr({ text: s, visibility: "hidden" });
          else {
            this.label = t.renderer.label(s, null, void 0, e.shape, void 0, void 0, e.useHTML, !1, "stack-labels");
            let r = { r: e.borderRadius || 0, text: s, padding: $r(e.padding, 5), visibility: "hidden" };
            t.styledMode || (r.fill = e.backgroundColor, r.stroke = e.borderColor, r["stroke-width"] = e.borderWidth, this.label.css(e.style || {})), this.label.attr(r), this.label.added || this.label.add(h);
          }
          this.label.labelrank = t.plotSizeY, ph(this, "afterRender");
        }
        setOffset(h, t, e, i, s, r) {
          let { alignOptions: o, axis: a, label: l, options: c, textAlign: m } = this, d = a.chart, f = this.getStackBox({ xOffset: h, width: t, boxBottom: e, boxTop: i, defaultX: s, xAxis: r }), { verticalAlign: x } = o;
          if (l && f) {
            let y = l.getBBox(void 0, 0), M = l.padding, w = $r(c.overflow, "justify") === "justify", v;
            o.x = c.x || 0, o.y = c.y || 0;
            let { x: T, y: S } = this.adjustStackPosition({ labelBox: y, verticalAlign: x, textAlign: m });
            f.x -= T, f.y -= S, l.align(o, !1, f), (v = d.isInsidePlot(l.alignAttr.x + o.x + T, l.alignAttr.y + o.y + S)) || (w = !1), w && ed.prototype.justifyDataLabel.call(a, l, o, l.alignAttr, y, f), l.attr({ x: l.alignAttr.x, y: l.alignAttr.y, rotation: c.rotation, rotationOriginX: y.width * xl(c.textAlign || "center"), rotationOriginY: y.height / 2 }), $r(!w && c.crop, !0) && (v = bl(l.x) && bl(l.y) && d.isInsidePlot(l.x - M + (l.width || 0), l.y) && d.isInsidePlot(l.x + M, l.y)), l[v ? "show" : "hide"]();
          }
          ph(this, "afterSetOffset", { xOffset: h, width: t });
        }
        adjustStackPosition({ labelBox: h, verticalAlign: t, textAlign: e }) {
          return { x: h.width / 2 + h.width / 2 * (2 * xl(e) - 1), y: h.height / 2 * 2 * (1 - xl(t)) };
        }
        getStackBox(h) {
          let t = this.axis, e = t.chart, { boxTop: i, defaultX: s, xOffset: r, width: o, boxBottom: a } = h, l = t.stacking.usePercentage ? 100 : $r(i, this.total, 0), c = t.toPixels(l), m = h.xAxis || e.xAxis[0], d = $r(s, m.translate(this.x)) + r, f = Math.abs(c - t.toPixels(a || bl(t.min) && t.logarithmic && t.logarithmic.lin2log(t.min) || 0)), x = e.inverted, y = this.isNegative;
          return x ? { x: (y ? c : c - f) - e.plotLeft, y: m.height - d - o + m.top - e.plotTop, width: f, height: o } : { x: d + m.transB - e.plotLeft, y: (y ? c - f : c) - e.plotTop, width: o, height: f };
        }
      }, { getDeferredAnimation: sd } = Rt, { series: { prototype: rd } } = Nt, { addEvent: mh, correctFloat: Zr, defined: fh, destroyObjectProperties: od, fireEvent: ad, isNumber: yl, objectEach: Ji, pick: vl } = $;
      function nd() {
        let h = this.inverted;
        this.axes.forEach((t) => {
          t.stacking?.stacks && t.hasVisibleSeries && (t.stacking.oldStacks = t.stacking.stacks);
        }), this.series.forEach((t) => {
          let e = t.xAxis?.options || {};
          t.options.stacking && t.reserveSpace() && (t.stackKey = [t.type, vl(t.options.stack, ""), h ? e.top : e.left, h ? e.height : e.width].join(","));
        });
      }
      function ld() {
        let h = this.stacking;
        if (h) {
          let t = h.stacks;
          Ji(t, (e, i) => {
            od(e), delete t[i];
          }), h.stackTotalGroup?.destroy();
        }
      }
      function hd() {
        this.stacking || (this.stacking = new md(this));
      }
      function cd(h, t, e, i) {
        return !fh(h) || h.x !== t || i && h.stackKey !== i ? h = { x: t, index: 0, key: i, stackKey: i } : h.index++, h.key = [e, t, h.index].join(","), h;
      }
      function dd() {
        let h, t = this, e = t.yAxis, i = t.stackKey || "", s = e.stacking.stacks, r = t.getColumn("x", !0), o = t.options.stacking, a = t[o + "Stacker"];
        a && [i, "-" + i].forEach((l) => {
          let c = r.length, m, d, f;
          for (; c--; ) m = r[c], h = t.getStackIndicator(h, m, t.index, l), d = s[l]?.[m], (f = d?.points[h.key || ""]) && a.call(t, f, d, c);
        });
      }
      function ud(h, t, e) {
        let i = t.total ? 100 / t.total : 0;
        h[0] = Zr(h[0] * i), h[1] = Zr(h[1] * i), this.stackedYData[e] = h[1];
      }
      function pd(h) {
        (this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && this.chart.series.length > 1 ? rd.setStackedPoints.call(this, h, "group") : h.stacking.resetStacks());
      }
      function gd(h, t) {
        let e, i, s, r, o, a, l, c = t || this.options.stacking;
        if (!c || !this.reserveSpace() || ({ group: "xAxis" }[c] || "yAxis") !== h.coll) return;
        let m = this.getColumn("x", !0), d = this.getColumn(this.pointValKey || "y", !0), f = [], x = d.length, y = this.options, M = y.threshold || 0, w = y.startFromThreshold ? M : 0, v = y.stack, T = t ? `${this.type},${c}` : this.stackKey || "", S = "-" + T, O = this.negStacks, L = h.stacking, D = L.stacks, N = L.oldStacks;
        for (L.stacksTouched += 1, l = 0; l < x; l++) {
          let I = m[l] || 0, W = d[l], Y = yl(W) && W || 0;
          a = (e = this.getStackIndicator(e, I, this.index)).key || "", D[o = (i = O && Y < (w ? 0 : M)) ? S : T] || (D[o] = {}), D[o][I] || (N[o]?.[I] ? (D[o][I] = N[o][I], D[o][I].total = null) : D[o][I] = new gh(h, h.options.stackLabels, !!i, I, v)), s = D[o][I], W !== null ? (s.points[a] = s.points[this.index] = [vl(s.cumulative, w)], fh(s.cumulative) || (s.base = a), s.touched = L.stacksTouched, e.index > 0 && this.singleStacks === !1 && (s.points[a][0] = s.points[this.index + "," + I + ",0"][0])) : (delete s.points[a], delete s.points[this.index]);
          let H = s.total || 0;
          c === "percent" ? (r = i ? T : S, H = O && D[r]?.[I] ? (r = D[r][I]).total = Math.max(r.total || 0, H) + Math.abs(Y) : Zr(H + Math.abs(Y))) : c === "group" ? yl(W) && H++ : H = Zr(H + Y), c === "group" ? s.cumulative = (H || 1) - 1 : s.cumulative = Zr(vl(s.cumulative, w) + Y), s.total = H, W !== null && (s.points[a].push(s.cumulative), f[l] = s.cumulative, s.hasValidPoints = !0);
        }
        c === "percent" && (L.usePercentage = !0), c !== "group" && (this.stackedYData = f), L.oldStacks = {};
      }
      class md {
        constructor(t) {
          this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = t;
        }
        buildStacks() {
          let t, e, i = this.axis, s = i.series, r = i.coll === "xAxis", o = i.options.reversedStacks, a = s.length;
          for (this.resetStacks(), this.usePercentage = !1, e = a; e--; ) t = s[o ? e : a - e - 1], r && t.setGroupedPoints(i), t.setStackedPoints(i);
          if (!r) for (e = 0; e < a; e++) s[e].modifyStacks();
          ad(i, "afterBuildStacks");
        }
        cleanStacks() {
          this.oldStacks && (this.stacks = this.oldStacks, Ji(this.stacks, (t) => {
            Ji(t, (e) => {
              e.cumulative = e.total;
            });
          }));
        }
        resetStacks() {
          Ji(this.stacks, (t) => {
            Ji(t, (e, i) => {
              yl(e.touched) && e.touched < this.stacksTouched ? (e.destroy(), delete t[i]) : (e.total = null, e.cumulative = null);
            });
          });
        }
        renderStackTotals() {
          let t = this.axis, e = t.chart, i = e.renderer, s = this.stacks, r = sd(e, t.options.stackLabels?.animation || !1), o = this.stackTotalGroup = this.stackTotalGroup || i.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add();
          o.translate(e.plotLeft, e.plotTop), Ji(s, (a) => {
            Ji(a, (l) => {
              l.render(o);
            });
          }), o.animate({ opacity: 1 }, r);
        }
      }
      (ti || (ti = {})).compose = function(h, t, e) {
        let i = t.prototype, s = e.prototype;
        i.getStacks || (mh(h, "init", hd), mh(h, "destroy", ld), i.getStacks = nd, s.getStackIndicator = cd, s.modifyStacks = dd, s.percentStacker = ud, s.setGroupedPoints = pd, s.setStackedPoints = gd);
      };
      let fd = ti, { defined: xd, merge: xh, isObject: bd } = $;
      class bh extends ce {
        drawGraph() {
          let t = this.options, e = (this.gappedPath || this.getGraphPath).call(this), i = this.chart.styledMode;
          [this, ...this.zones].forEach((s, r) => {
            let o, a = s.graph, l = a ? "animate" : "attr", c = s.dashStyle || t.dashStyle;
            a ? (a.endX = this.preventGraphAnimation ? null : e.xMap, a.animate({ d: e })) : e.length && (s.graph = a = this.chart.renderer.path(e).addClass("highcharts-graph" + (r ? ` highcharts-zone-graph-${r - 1} ` : " ") + (r && s.className || "")).attr({ zIndex: 1 }).add(this.group)), a && !i && (o = { stroke: !r && t.lineColor || s.color || this.color || "#cccccc", "stroke-width": t.lineWidth || 0, fill: this.fillGraph && this.color || "none" }, c ? o.dashstyle = c : t.linecap !== "square" && (o["stroke-linecap"] = o["stroke-linejoin"] = "round"), a[l](o).shadow(t.shadow && xh({ filterUnits: "userSpaceOnUse" }, bd(t.shadow) ? t.shadow : {}))), a && (a.startX = e.xMap, a.isArea = e.isArea);
          });
        }
        getGraphPath(t, e, i) {
          let s = this, r = s.options, o = [], a = [], l, c = r.step, m = (t = t || s.points).reversed;
          return m && t.reverse(), (c = { right: 1, center: 2 }[c] || c && 3) && m && (c = 4 - c), (t = this.getValidPoints(t, !1, r.nullInteraction || !(r.connectNulls && !e && !i))).forEach(function(d, f) {
            let x, y = d.plotX, M = d.plotY, w = t[f - 1], v = d.isNull || typeof M != "number";
            (d.leftCliff || w?.rightCliff) && !i && (l = !0), v && !xd(e) && f > 0 ? l = !r.connectNulls : v && !e ? l = !0 : (f === 0 || l ? x = [["M", d.plotX, d.plotY]] : s.getPointSpline ? x = [s.getPointSpline(t, d, f)] : c ? (x = c === 1 ? [["L", w.plotX, M]] : c === 2 ? [["L", (w.plotX + y) / 2, w.plotY], ["L", (w.plotX + y) / 2, M]] : [["L", y, w.plotY]]).push(["L", y, M]) : x = [["L", y, M]], a.push(d.x), c && (a.push(d.x), c === 2 && a.push(d.x)), o.push.apply(o, x), l = !1);
          }), o.xMap = a, s.graphPath = o, o;
        }
      }
      bh.defaultOptions = xh(ce.defaultOptions, { legendSymbol: "lineMarker" }), Nt.registerSeriesType("line", bh);
      let { seriesTypes: { line: kl } } = Nt, { extend: yd, merge: vd, objectEach: kd, pick: Ca } = $;
      class wl extends kl {
        drawGraph() {
          this.areaPath = [], super.drawGraph.apply(this);
          let { areaPath: t, options: e } = this;
          [this, ...this.zones].forEach((i, s) => {
            let r = {}, o = i.fillColor || e.fillColor, a = i.area, l = a ? "animate" : "attr";
            a ? (a.endX = this.preventGraphAnimation ? null : t.xMap, a.animate({ d: t })) : (r.zIndex = 0, (a = i.area = this.chart.renderer.path(t).addClass("highcharts-area" + (s ? ` highcharts-zone-area-${s - 1} ` : " ") + (s && i.className || "")).add(this.group)).isArea = !0), this.chart.styledMode || (r.fill = o || i.color || this.color, r["fill-opacity"] = o ? 1 : e.fillOpacity ?? 0.75, a.css({ pointerEvents: this.stickyTracking ? "none" : "auto" })), a[l](r), a.startX = t.xMap, a.shiftUnit = e.step ? 2 : 1;
          });
        }
        getGraphPath(t) {
          let e, i, s, r = kl.prototype.getGraphPath, o = this.options, a = o.stacking, l = this.yAxis, c = [], m = [], d = this.index, f = l.stacking.stacks[this.stackKey], x = o.threshold, y = Math.round(l.getThreshold(o.threshold)), M = Ca(o.connectNulls, a === "percent"), w = function(D, N, I) {
            let W = t[D], Y = a && f[W.x].points[d], H = W[I + "Null"] || 0, V = W[I + "Cliff"] || 0, Z, J, j = !0;
            V || H ? (Z = (H ? Y[0] : Y[1]) + V, J = Y[0] + V, j = !!H) : !a && t[N] && t[N].isNull && (Z = J = x), Z !== void 0 && (m.push({ plotX: e, plotY: Z === null ? y : l.getThreshold(Z), isNull: j, isCliff: !0 }), c.push({ plotX: e, plotY: J === null ? y : l.getThreshold(J), doCurve: !1 }));
          };
          t = t || this.points, a && (t = this.getStackPoints(t));
          for (let D = 0, N = t.length; D < N; ++D) a || (t[D].leftCliff = t[D].rightCliff = t[D].leftNull = t[D].rightNull = void 0), i = t[D].isNull, e = Ca(t[D].rectPlotX, t[D].plotX), s = a ? Ca(t[D].yBottom, y) : y, (!i || M) && (M || w(D, D - 1, "left"), i && !a && M || (m.push(t[D]), c.push({ x: D, plotX: e, plotY: s })), M || w(D, D + 1, "right"));
          let v = r.call(this, m, !0, !0);
          c.reversed = !0;
          let T = r.call(this, c, !0, !0), S = T[0];
          S && S[0] === "M" && (T[0] = ["L", S[1], S[2]]);
          let O = v.concat(T);
          O.length && O.push(["Z"]);
          let L = r.call(this, m, !1, M);
          return this.chart.series.length > 1 && a && m.some((D) => D.isCliff) && (O.hasStackedCliffs = L.hasStackedCliffs = !0), O.xMap = v.xMap, this.areaPath = O, L;
        }
        getStackPoints(t) {
          let e = this, i = [], s = [], r = this.xAxis, o = this.yAxis, a = o.stacking.stacks[this.stackKey], l = {}, c = o.series, m = c.length, d = o.options.reversedStacks ? 1 : -1, f = c.indexOf(e);
          if (t = t || this.points, this.options.stacking) {
            for (let y = 0; y < t.length; y++) t[y].leftNull = t[y].rightNull = void 0, l[t[y].x] = t[y];
            kd(a, function(y, M) {
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
                  let N = f;
                  for (; N >= 0 && N < m; ) {
                    let I = c[N].index;
                    !(v = L.points[I]) && (I === e.index ? l[y][O] = !0 : x[N] && (T = a[y].points[I]) && (D -= T[1] - T[0])), N += d;
                  }
                }
                l[y][S === 1 ? "rightCliff" : "leftCliff"] = D;
              });
              else {
                let S = f;
                for (; S >= 0 && S < m; ) {
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
      wl.defaultOptions = vd(kl.defaultOptions, { threshold: 0, legendSymbol: "areaMarker" }), yd(wl.prototype, { singleStacks: !1 }), Nt.registerSeriesType("area", wl);
      let { line: yh } = Nt.seriesTypes, { merge: wd, pick: Aa } = $;
      class Ml extends yh {
        getPointSpline(t, e, i) {
          let s, r, o, a, l = e.plotX || 0, c = e.plotY || 0, m = t[i - 1], d = t[i + 1];
          function f(y) {
            return y && !y.isNull && y.doCurve !== !1 && !e.isCliff;
          }
          if (f(m) && f(d)) {
            let y = m.plotX || 0, M = m.plotY || 0, w = d.plotX || 0, v = d.plotY || 0, T = 0;
            s = (1.5 * l + y) / 2.5, r = (1.5 * c + M) / 2.5, o = (1.5 * l + w) / 2.5, a = (1.5 * c + v) / 2.5, o !== s && (T = (a - r) * (o - l) / (o - s) + c - a), r += T, a += T, r > M && r > c ? (r = Math.max(M, c), a = 2 * c - r) : r < M && r < c && (r = Math.min(M, c), a = 2 * c - r), a > v && a > c ? (a = Math.max(v, c), r = 2 * c - a) : a < v && a < c && (a = Math.min(v, c), r = 2 * c - a), e.rightContX = o, e.rightContY = a, e.controlPoints = { low: [s, r], high: [o, a] };
          }
          let x = ["C", Aa(m.rightContX, m.plotX, 0), Aa(m.rightContY, m.plotY, 0), Aa(s, l, 0), Aa(r, c, 0), l, c];
          return m.rightContX = m.rightContY = void 0, x;
        }
      }
      Ml.defaultOptions = wd(yh.defaultOptions), Nt.registerSeriesType("spline", Ml);
      let vh = Ml, { area: Md, area: { prototype: Cl } } = Nt.seriesTypes, { extend: Cd, merge: Ad } = $;
      class Al extends vh {
      }
      Al.defaultOptions = Ad(vh.defaultOptions, Md.defaultOptions), Cd(Al.prototype, { getGraphPath: Cl.getGraphPath, getStackPoints: Cl.getStackPoints, drawGraph: Cl.drawGraph }), Nt.registerSeriesType("areaspline", Al);
      let { animObject: Td } = Rt, { parse: Sd } = yt, { noop: Ed } = X, { clamp: Ta, crisp: Sa, defined: kh, extend: wh, fireEvent: Mh, isArray: Ch, isNumber: Ea, merge: Tl, pick: _r, objectEach: Pd } = $;
      class Pa extends ce {
        animate(t) {
          let e, i, s = this, r = this.yAxis, o = r.pos, a = r.reversed, l = s.options, { clipOffset: c, inverted: m } = this.chart, d = {}, f = m ? "translateX" : "translateY";
          t && c ? (d.scaleY = 1e-3, i = Ta(r.toPixels(l.threshold || 0), o, o + r.len), m ? d.translateX = (i += a ? -Math.floor(c[0]) : Math.ceil(c[2])) - r.len : d.translateY = i += a ? Math.ceil(c[0]) : -Math.floor(c[2]), s.clipBox && s.setClip(), s.group.attr(d)) : (e = Number(s.group.attr(f)), s.group.animate({ scaleY: 1 }, wh(Td(s.options.animation), { step: function(x, y) {
            s.group && (d[f] = e + y.pos * (o - e), s.group.attr(d));
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
          let m = Math.min(Math.abs(i.transA) * (!i.brokenAxis?.hasBreaks && i.ordinal?.slope || e.pointRange || i.closestPointRange || i.tickInterval || 1), i.len), d = m * e.groupPadding, f = (m - 2 * d) / (c || 1), x = Math.min(e.maxPointWidth || i.len, _r(e.pointWidth, f * (1 - 2 * e.pointPadding))), y = (t.columnIndex || 0) + +!!o;
          return t.columnMetrics = { width: x, offset: (f - x) / 2 + (d + y * f - m / 2) * (o ? -1 : 1), paddedWidth: f, columnCount: c }, t.columnMetrics;
        }
        crispCol(t, e, i, s) {
          let r = this.borderWidth, o = this.chart.inverted;
          return s = Sa(e + s, r, o) - (e = Sa(e, r, o)), this.options.crisp && (i = Sa(t + i, r) - (t = Sa(t, r))), { x: t, y: e, width: i, height: s };
        }
        adjustForMissingColumns(t, e, i, s) {
          if (!i.isNull && s.columnCount > 1) {
            let r = this.xAxis.series.filter((c) => c.visible).map((c) => c.index), o = 0, a = 0;
            Pd(this.xAxis.stacking?.stacks, (c) => {
              let m = typeof i.x == "number" ? c[i.x.toString()]?.points : void 0, d = m?.[this.index], f = {};
              if (m && Ch(d)) {
                let x = this.index, y = Object.keys(m).filter((M) => !M.match(",") && m[M] && m[M].length > 1).map(parseFloat).filter((M) => r.indexOf(M) !== -1).filter((M) => {
                  let w = this.chart.series[M].options, v = w.stacking && w.stack;
                  if (kh(v)) {
                    if (Ea(f[v])) return x === M && (x = f[v]), !1;
                    f[v] = M;
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
          let t = this, e = t.chart, i = t.options, s = t.dense = t.closestPointRange * t.xAxis.transA < 2, r = t.borderWidth = _r(i.borderWidth, +!s), o = t.xAxis, a = t.yAxis, l = i.threshold, c = _r(i.minPointLength, 5), m = t.getColumnMetrics(), d = m.width, f = t.pointXOffset = m.offset, x = t.dataMin, y = t.dataMax, M = t.translatedThreshold = a.getThreshold(l), w = t.barW = Math.max(d, 1 + 2 * r);
          i.pointPadding && i.crisp && (w = Math.ceil(w)), ce.prototype.translate.apply(t), t.points.forEach(function(v) {
            let T = _r(v.yBottom, M), S = 999 + Math.abs(T), O = v.plotX || 0, L = Ta(v.plotY, -S, a.len + S), D, N = Math.min(L, T), I = Math.max(L, T) - N, W = d, Y = O + f, H = w;
            c && Math.abs(I) < c && (I = c, D = !a.reversed && !v.negative || a.reversed && v.negative, Ea(l) && Ea(y) && v.y === l && y <= l && (a.min || 0) < l && (x !== y || (a.max || 0) <= l) && (D = !D, v.negative = !v.negative), N = Math.abs(N - M) > c ? T - c : M - (D ? c : 0)), kh(v.options.pointWidth) && (Y -= Math.round(((W = H = Math.ceil(v.options.pointWidth)) - d) / 2)), i.centerInCategory && (Y = t.adjustForMissingColumns(Y, W, v, m)), v.barX = Y, v.pointWidth = W, v.tooltipPos = e.inverted ? [Ta(a.len + a.pos - e.plotLeft - L, a.pos - e.plotLeft, a.len + a.pos - e.plotLeft), o.len + o.pos - e.plotTop - Y - H / 2, I] : [o.left - e.plotLeft + Y + H / 2, Ta(L + a.pos - e.plotTop, a.pos - e.plotTop, a.len + a.pos - e.plotTop), I], v.shapeType = t.pointClass.prototype.shapeType || "roundedRect", v.shapeArgs = t.crispCol(Y, N, H, v.isNull ? 0 : I);
          }), Mh(this, "afterColumnTranslate");
        }
        drawGraph() {
          this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
        }
        pointAttribs(t, e) {
          let i = this.options, s = this.pointAttrToOptions || {}, r = s.stroke || "borderColor", o = s["stroke-width"] || "borderWidth", a, l, c, m = t && t.color || this.color, d = t && t[r] || i[r] || m, f = t && t.options.dashStyle || i.dashStyle, x = t && t[o] || i[o] || this[o] || 0, y = t?.isNull && i.nullInteraction ? 0 : t?.opacity ?? i.opacity ?? 1;
          t && this.zones.length && (l = t.getZone(), m = t.options.color || l && (l.color || t.nonZonedColor) || this.color, l && (d = l.borderColor || d, f = l.dashStyle || f, x = l.borderWidth || x)), e && t && (c = (a = Tl(i.states[e], t.options.states && t.options.states[e] || {})).brightness, m = a.color || c !== void 0 && Sd(m).brighten(a.brightness).get() || m, d = a[r] || d, x = a[o] || x, f = a.dashStyle || f, y = _r(a.opacity, y));
          let M = { fill: m, stroke: d, "stroke-width": x, opacity: y };
          return f && (M.dashstyle = f), M;
        }
        drawPoints(t = this.points) {
          let e, i = this, s = this.chart, r = i.options, o = r.nullInteraction, a = s.renderer, l = r.animationLimit || 250;
          t.forEach(function(c) {
            let m = c.plotY, d = c.graphic, f = !!d, x = d && s.pointCount < l ? "animate" : "attr";
            Ea(m) && (c.y !== null || o) ? (e = c.shapeArgs, d && c.hasNewShapeType() && (d = d.destroy()), i.enabledDataSorting && (c.startXPos = i.xAxis.reversed ? -(e && e.width || 0) : i.xAxis.width), !d && (c.graphic = d = a[c.shapeType](e).add(c.group || i.group), d && i.enabledDataSorting && s.hasRendered && s.pointCount < l && (d.attr({ x: c.startXPos }), f = !0, x = "animate")), d && f && d[x](Tl(e)), s.styledMode || d[x](i.pointAttribs(c, c.selected && "select")).shadow(c.allowShadow !== !1 && r.shadow), d && (d.addClass(c.getClassName(), !0), d.attr({ visibility: c.visible ? "inherit" : "hidden" }))) : d && (c.graphic = d.destroy());
          });
        }
        drawTracker(t = this.points) {
          let e, i = this, s = i.chart, r = s.pointer, o = function(a) {
            r?.normalize(a);
            let l = r?.getPointFromEvent(a);
            r && l && i.options.enableMouseTracking && (s.isInsidePlot(a.chartX - s.plotLeft, a.chartY - s.plotTop, { visiblePlotOnly: !0 }) || r?.inClass(a.target, "highcharts-data-label")) && (r.isDirectTouch = !0, l.onMouseOver(a));
          };
          t.forEach(function(a) {
            e = Ch(a.dataLabels) ? a.dataLabels : a.dataLabel ? [a.dataLabel] : [], a.graphic && (a.graphic.element.point = a), e.forEach(function(l) {
              (l.div || l.element).point = a;
            });
          }), i._hasTracking || (i.trackerGroups.forEach(function(a) {
            i[a] && (i[a].addClass("highcharts-tracker").on("mouseover", o).on("mouseout", function(l) {
              r?.onTrackerMouseOut(l);
            }).on("touchstart", o), !s.styledMode && i.options.cursor && i[a].css({ cursor: i.options.cursor }));
          }), i._hasTracking = !0), Mh(this, "afterDrawTracker");
        }
        remove() {
          let t = this, e = t.chart;
          e.hasRendered && e.series.forEach(function(i) {
            i.type === t.type && (i.isDirty = !0);
          }), ce.prototype.remove.apply(t, arguments);
        }
      }
      Pa.defaultOptions = Tl(ce.defaultOptions, { borderRadius: 3, centerInCategory: !1, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: 0.1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" }), wh(Pa.prototype, { directTouch: !0, getSymbol: Ed, negStacks: !0, trackerGroups: ["group", "dataLabelsGroup"] }), Nt.registerSeriesType("column", Pa);
      let Oa = Pa, { getDeferredAnimation: Od } = Rt, { format: Ld } = Jt, { defined: Qi, extend: Ah, fireEvent: Sl, getAlignFactor: Th, isArray: Si, isString: Jr, merge: Qr, objectEach: Dd, pick: to, pInt: Id, splat: Sh } = $;
      (function(h) {
        function t() {
          return l(this).some((m) => m?.enabled);
        }
        function e(m, d, f, x, y) {
          let { chart: M, enabledDataSorting: w } = this, v = this.isCartesian && M.inverted, T = m.plotX, S = m.plotY, O = f.rotation || 0, L = Qi(T) && Qi(S) && M.isInsidePlot(T, Math.round(S), { inverted: v, paneCoordinates: !0, series: this }), D = O === 0 && to(f.overflow, w ? "none" : "justify") === "justify", N = this.visible && m.visible !== !1 && Qi(T) && (m.series.forceDL || w && !D || L || to(f.inside, !!this.options.stacking) && x && M.isInsidePlot(T, v ? x.x + 1 : x.y + x.height - 1, { inverted: v, paneCoordinates: !0, series: this })), I = m.pos();
          if (N && I) {
            var W;
            let Y = d.getBBox(), H = d.getBBox(void 0, 0);
            if (x = Ah({ x: I[0], y: Math.round(I[1]), width: 0, height: 0 }, x || {}), f.alignTo === "plotEdges" && this.isCartesian && (x[v ? "x" : "y"] = 0, x[v ? "width" : "height"] = this.yAxis?.len || 0), Ah(f, { width: Y.width, height: Y.height }), W = x, w && this.xAxis && !D && this.setDataLabelStartPos(m, d, y, L, W), d.align(Qr(f, { width: H.width, height: H.height }), !1, x, !1), d.alignAttr.x += Th(f.align) * (H.width - Y.width), d.alignAttr.y += Th(f.verticalAlign) * (H.height - Y.height), d[d.placed ? "animate" : "attr"]({ "text-align": d.alignAttr["text-align"] || "center", x: d.alignAttr.x + (Y.width - H.width) / 2, y: d.alignAttr.y + (Y.height - H.height) / 2, rotationOriginX: (d.width || 0) / 2, rotationOriginY: (d.height || 0) / 2 }), D && x.height >= 0) this.justifyDataLabel(d, f, d.alignAttr, Y, x, y);
            else if (to(f.crop, !0)) {
              let { x: V, y: Z } = d.alignAttr;
              N = M.isInsidePlot(V, Z, { paneCoordinates: !0, series: this }) && M.isInsidePlot(V + Y.width - 1, Z + Y.height - 1, { paneCoordinates: !0, series: this });
            }
            f.shape && !O && d[y ? "attr" : "animate"]({ anchorX: I[0], anchorY: I[1] });
          }
          y && w && (d.placed = !1), N || w && !D ? (d.show(), d.placed = !0) : (d.hide(), d.placed = !1);
        }
        function i() {
          return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6, this.chart.dataLabelsGroup);
        }
        function s(m) {
          let d = this.hasRendered || 0, f = this.initDataLabelsGroup().attr({ opacity: +d });
          return !d && f && (this.visible && f.show(), this.options.animation ? f.animate({ opacity: 1 }, m) : f.attr({ opacity: 1 })), f;
        }
        function r(m) {
          let d;
          m = m || this.points;
          let f = this, x = f.chart, y = f.options, M = x.renderer, { backgroundColor: w, plotBackgroundColor: v } = x.options.chart, T = M.getContrast(Jr(v) && v || Jr(w) && w || "#000000"), S = l(f), { animation: O, defer: L } = S[0], D = L ? Od(x, O, f) : { defer: 0, duration: 0 };
          Sl(this, "drawDataLabels"), f.hasDataLabels?.() && (d = this.initDataLabels(D), m.forEach((N) => {
            let I = N.dataLabels || [], W = N.color || f.color;
            Sh(a(S, N.dlOptions || N.options?.dataLabels)).forEach((H, V) => {
              let Z = H.enabled && (N.visible || N.dataLabelOnHidden) && (!N.isNull || N.dataLabelOnNull) && (function(kt, wt) {
                let mt = wt.filter;
                if (mt) {
                  let Lt = mt.operator, se = kt[mt.property], de = mt.value;
                  return Lt === ">" && se > de || Lt === "<" && se < de || Lt === ">=" && se >= de || Lt === "<=" && se <= de || Lt === "==" && se == de || Lt === "===" && se === de || Lt === "!=" && se != de || Lt === "!==" && se !== de || !1;
                }
                return !0;
              })(N, H), { backgroundColor: J, borderColor: j, distance: q, style: _ = {} } = H, vt, ct, ie, st = {}, it = I[V], pt = !it, lt;
              Z && (ct = Qi(vt = to(H[N.formatPrefix + "Format"], H.format)) ? Ld(vt, N, x) : (H[N.formatPrefix + "Formatter"] || H.formatter).call(N, H), ie = H.rotation, !x.styledMode && (_.color = to(H.color, _.color, Jr(f.color) ? f.color : void 0, "#000000"), _.color === "contrast" ? (J !== "none" && (lt = J), N.contrastColor = M.getContrast(lt !== "auto" && Jr(lt) && lt || (Jr(W) ? W : "")), _.color = lt || !Qi(q) && H.inside || 0 > Id(q || 0) || y.stacking ? N.contrastColor : T) : delete N.contrastColor, y.cursor && (_.cursor = y.cursor)), st = { r: H.borderRadius || 0, rotation: ie, padding: H.padding, zIndex: 1 }, x.styledMode || (st.fill = J === "auto" ? N.color : J, st.stroke = j === "auto" ? N.color : j, st["stroke-width"] = H.borderWidth), Dd(st, (kt, wt) => {
                kt === void 0 && delete st[wt];
              })), !it || Z && Qi(ct) && !!(it.div || it.text?.foreignObject) == !!H.useHTML && (it.rotation && H.rotation || it.rotation === H.rotation) || (it = void 0, pt = !0), Z && Qi(ct) && ct !== "" && (it ? st.text = ct : (it = M.label(ct, 0, 0, H.shape, void 0, void 0, H.useHTML, void 0, "data-label")).addClass(" highcharts-data-label-color-" + N.colorIndex + " " + (H.className || "") + (H.useHTML ? " highcharts-tracker" : "")), it && (it.options = H, it.attr(st), x.styledMode ? _.width && it.css({ width: _.width, textOverflow: _.textOverflow, whiteSpace: _.whiteSpace }) : it.css(_).shadow(H.shadow), Sl(it, "beforeAddingDataLabel", { labelOptions: H, point: N }), it.added || it.add(d), f.alignDataLabel(N, it, H, void 0, pt), it.isActive = !0, I[V] && I[V] !== it && I[V].destroy(), I[V] = it));
            });
            let Y = I.length;
            for (; Y--; ) I[Y]?.isActive ? I[Y].isActive = !1 : (I[Y]?.destroy(), I.splice(Y, 1));
            N.dataLabel = I[0], N.dataLabels = I;
          })), Sl(this, "afterDrawDataLabels");
        }
        function o(m, d, f, x, y, M) {
          let w = this.chart, v = d.align, T = d.verticalAlign, S = m.box ? 0 : m.padding || 0, O = w.inverted ? this.yAxis : this.xAxis, L = O ? O.left - w.plotLeft : 0, D = w.inverted ? this.xAxis : this.yAxis, N = D ? D.top - w.plotTop : 0, { x: I = 0, y: W = 0 } = d, Y, H;
          return (Y = (f.x || 0) + S + L) < 0 && (v === "right" && I >= 0 ? (d.align = "left", d.inside = !0) : I -= Y, H = !0), (Y = (f.x || 0) + x.width - S + L) > w.plotWidth && (v === "left" && I <= 0 ? (d.align = "right", d.inside = !0) : I += w.plotWidth - Y, H = !0), (Y = f.y + S + N) < 0 && (T === "bottom" && W >= 0 ? (d.verticalAlign = "top", d.inside = !0) : W -= Y, H = !0), (Y = (f.y || 0) + x.height - S + N) > w.plotHeight && (T === "top" && W <= 0 ? (d.verticalAlign = "bottom", d.inside = !0) : W += w.plotHeight - Y, H = !0), H && (d.x = I, d.y = W, m.placed = !M, m.align(d, void 0, y)), H;
        }
        function a(m, d) {
          let f = [], x;
          if (Si(m) && !Si(d)) f = m.map(function(y) {
            return Qr(y, d);
          });
          else if (Si(d) && !Si(m)) f = d.map(function(y) {
            return Qr(m, y);
          });
          else if (Si(m) || Si(d)) {
            if (Si(m) && Si(d)) for (x = Math.max(m.length, d.length); x--; ) f[x] = Qr(m[x], d[x]);
          } else f = Qr(m, d);
          return f;
        }
        function l(m) {
          let d = m.chart.options.plotOptions;
          return Sh(a(a(d?.series?.dataLabels, d?.[m.type]?.dataLabels), m.options.dataLabels));
        }
        function c(m, d, f, x, y) {
          let M = this.chart, w = M.inverted, v = this.xAxis, T = v.reversed, S = ((w ? d.height : d.width) || 0) / 2, O = m.pointWidth, L = O ? O / 2 : 0;
          d.startXPos = w ? y.x : T ? -S - L : v.width - S + L, d.startYPos = w ? T ? this.yAxis.height - S + L : -S - L : y.y, x ? d.visibility === "hidden" && (d.show(), d.attr({ opacity: 0 }).animate({ opacity: 1 })) : d.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, d.hide), M.hasRendered && (f && d.attr({ x: d.startXPos, y: d.startYPos }), d.placed = !0);
        }
        h.compose = function(m) {
          let d = m.prototype;
          d.initDataLabels || (d.initDataLabels = s, d.initDataLabelsGroup = i, d.alignDataLabel = e, d.drawDataLabels = r, d.justifyDataLabel = o, d.mergeArrays = a, d.setDataLabelStartPos = c, d.hasDataLabels = t);
        };
      })(Mt || (Mt = {}));
      let La = Mt, { composed: Bd } = X, { series: Eh } = Nt, { merge: Nd, pushUnique: Rd } = $;
      (function(h) {
        function t(e, i, s, r, o) {
          let { chart: a, options: l } = this, c = a.inverted, m = this.xAxis?.len || a.plotSizeX || 0, d = this.yAxis?.len || a.plotSizeY || 0, f = e.dlBox || e.shapeArgs, x = e.below ?? (e.plotY || 0) > (this.translatedThreshold ?? d), y = s.inside ?? !!l.stacking;
          if (f) {
            if (r = Nd(f), s.overflow !== "allow" || s.crop !== !1 || l.clip !== !1) {
              r.y < 0 && (r.height += r.y, r.y = 0);
              let M = r.y + r.height - d;
              M > 0 && M < r.height - 1 && (r.height -= M);
            }
            c && (r = { x: d - r.y - r.height, y: m - r.x - r.width, width: r.height, height: r.width }), y || (c ? (r.x += x ? 0 : r.width, r.width = 0) : (r.y += x ? r.height : 0, r.height = 0));
          }
          s.align ?? (s.align = !c || y ? "center" : x ? "right" : "left"), s.verticalAlign ?? (s.verticalAlign = c || y ? "middle" : x ? "top" : "bottom"), Eh.prototype.alignDataLabel.call(this, e, i, s, r, o), s.inside && e.contrastColor && i.css({ color: e.contrastColor });
        }
        h.compose = function(e) {
          La.compose(Eh), Rd(Bd, "ColumnDataLabel") && (e.prototype.alignDataLabel = t);
        };
      })(Et || (Et = {}));
      let zd = Et, { extend: Fd, merge: Hd } = $;
      class El extends Oa {
      }
      El.defaultOptions = Hd(Oa.defaultOptions, {}), Fd(El.prototype, { inverted: !0 }), Nt.registerSeriesType("bar", El);
      let { column: Wd, line: Ph } = Nt.seriesTypes, { addEvent: Xd, extend: Gd, merge: Yd } = $;
      class Da extends Ph {
        applyJitter() {
          let t = this, e = this.options.jitter, i = this.points.length;
          e && this.points.forEach(function(s, r) {
            ["x", "y"].forEach(function(o, a) {
              if (e[o] && !s.isNull) {
                let l = `plot${o.toUpperCase()}`, c = t[`${o}Axis`], m = e[o] * c.transA;
                if (c && !c.logarithmic) {
                  let d = Math.max(0, (s[l] || 0) - m), f = Math.min(c.len, (s[l] || 0) + m);
                  s[l] = d + (f - d) * (function(x) {
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
      Da.defaultOptions = Yd(Ph.defaultOptions, { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: { headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } }), Gd(Da.prototype, { drawTracker: Wd.prototype.drawTracker, sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"] }), Xd(Da, "afterTranslate", function() {
        this.applyJitter();
      }), Nt.registerSeriesType("scatter", Da);
      let { deg2rad: Oh } = X, { fireEvent: jd, isNumber: Pl, pick: Ia, relativeLength: Ud } = $;
      (function(h) {
        h.getCenter = function() {
          let t = this.options, e = this.chart, i = 2 * (t.slicedOffset || 0), s = e.plotWidth - 2 * i, r = e.plotHeight - 2 * i, o = t.center, a = Math.min(s, r), l = t.thickness, c, m = t.size, d = t.innerSize || 0, f, x;
          typeof m == "string" && (m = parseFloat(m)), typeof d == "string" && (d = parseFloat(d));
          let y = [Ia(o?.[0], "50%"), Ia(o?.[1], "50%"), Ia(m && m < 0 ? void 0 : t.size, "100%"), Ia(d && d < 0 ? void 0 : t.innerSize || 0, "0%")];
          for (!e.angular || this instanceof ce || (y[3] = 0), f = 0; f < 4; ++f) x = y[f], c = f < 2 || f === 2 && /%$/.test(x), y[f] = Ud(x, [s, r, a, y[2]][f]) + (c ? i : 0);
          return y[3] > y[2] && (y[3] = y[2]), Pl(l) && 2 * l < y[2] && l > 0 && (y[3] = y[2] - 2 * l), jd(this, "afterGetCenter", { positions: y }), y;
        }, h.getStartAndEndRadians = function(t, e) {
          let i = Pl(t) ? t : 0, s = Pl(e) && e > i && e - i < 360 ? e : i + 360;
          return { start: Oh * (i + -90), end: Oh * (s + -90) };
        };
      })(ae || (ae = {}));
      let Lh = ae, { setAnimation: Vd } = Rt, { addEvent: Dh, defined: qd, extend: Kd, isNumber: $d, pick: Zd, relativeLength: _d } = $;
      class Ih extends Bt {
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
          Dh(this, "select", s), Dh(this, "unselect", s);
        }
        isValid() {
          return $d(this.y) && this.y >= 0;
        }
        setVisible(t, e = !0) {
          t !== this.visible && this.update({ visible: t ?? !this.visible }, e, void 0, !1);
        }
        slice(t, e, i) {
          let s = this.series;
          Vd(i, s.chart), e = Zd(e, !0), this.sliced = this.options.sliced = t = qd(t) ? t : !this.sliced, s.options.data[s.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate());
        }
      }
      Kd(Ih.prototype, { connectorShapes: { fixedOffset: function(h, t, e) {
        let i = t.breakAt, s = t.touchingSliceAt, r = e.softConnector ? ["C", h.x + (h.alignment === "left" ? -5 : 5), h.y, 2 * i.x - s.x, 2 * i.y - s.y, i.x, i.y] : ["L", i.x, i.y];
        return [["M", h.x, h.y], r, ["L", s.x, s.y]];
      }, straight: function(h, t) {
        let e = t.touchingSliceAt;
        return [["M", h.x, h.y], ["L", e.x, e.y]];
      }, crookedLine: function(h, t, e) {
        let { angle: i = this.angle || 0, breakAt: s, touchingSliceAt: r } = t, { series: o } = this, [a, l, c] = o.center, m = c / 2, { plotLeft: d, plotWidth: f } = o.chart, x = h.alignment === "left", { x: y, y: M } = h, w = s.x;
        if (e.crookDistance) {
          let T = _d(e.crookDistance, 1);
          w = x ? a + m + (f + d - a - m) * (1 - T) : d + (a - m) * T;
        } else w = a + (l - M) * Math.tan(i - Math.PI / 2);
        let v = [["M", y, M]];
        return (x ? w <= y && w >= s.x : w >= y && w <= s.x) && v.push(["L", w, M]), v.push(["L", s.x, s.y], ["L", r.x, r.y]), v;
      } } });
      let { getStartAndEndRadians: Jd } = Lh, { noop: Bh } = X, { clamp: Qd, extend: tu, fireEvent: Nh, merge: Ol, pick: eu } = $;
      class Ll extends ce {
        animate(t) {
          let e = this, i = e.points, s = e.startAngleRad;
          t || i.forEach(function(r) {
            let o = r.graphic, a = r.shapeArgs;
            o && a && (o.attr({ r: eu(r.startR, e.center && e.center[3] / 2), start: s, end: s }), o.animate({ r: a.r, start: a.start, end: a.end }, e.options.animation));
          });
        }
        drawEmpty() {
          let t, e, i = this.startAngleRad, s = this.endAngleRad, r = this.options;
          this.total === 0 && this.center ? (t = this.center[0], e = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(t, e, this.center[1] / 2, 0, i, s).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({ d: je.arc(t, e, this.center[2] / 2, 0, { start: i, end: s, innerR: this.center[3] / 2 }) }), this.chart.styledMode || this.graph.attr({ "stroke-width": r.borderWidth, fill: r.fillColor || "none", stroke: r.color || "#cccccc" })) : this.graph && (this.graph = this.graph.destroy());
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
          let r = this.center, o = this.radii ? this.radii[i.index] || 0 : r[2] / 2, a = s.dataLabelPosition, l = a?.distance || 0, c = Math.asin(Qd((t - r[1]) / (o + l), -1, 1));
          return r[0] + Math.cos(c) * (o + l) * (e ? -1 : 1) + (l > 0 ? (e ? -1 : 1) * (s.padding || 0) : 0);
        }
        hasData() {
          return this.points.some((t) => t.visible);
        }
        redrawPoints() {
          let t, e, i, s, r = this, o = r.chart;
          this.drawEmpty(), r.group && !o.styledMode && r.group.shadow(r.options.shadow), r.points.forEach(function(a) {
            let l = {};
            e = a.graphic, !a.isNull && e ? (s = a.shapeArgs, t = a.getTranslate(), o.styledMode || (i = r.pointAttribs(a, a.selected && "select")), a.delayedRendering ? (e.setRadialReference(r.center).attr(s).attr(t), o.styledMode || e.attr(i).attr({ "stroke-linejoin": "round" }), a.delayedRendering = !1) : (e.setRadialReference(r.center), o.styledMode || Ol(!0, l, i), Ol(!0, l, s, t), e.animate(l)), e.attr({ visibility: a.visible ? "inherit" : "hidden" }), e.addClass(a.getClassName(), !0)) : e && (a.graphic = e.destroy());
          });
        }
        sortByAngle(t, e) {
          t.sort(function(i, s) {
            return i.angle !== void 0 && (s.angle - i.angle) * e;
          });
        }
        translate(t) {
          Nh(this, "translate"), this.generatePoints();
          let e = this.options, i = e.slicedOffset, s = Jd(e.startAngle, e.endAngle), r = this.startAngleRad = s.start, o = (this.endAngleRad = s.end) - r, a = this.points, l = e.ignoreHiddenPoint, c = a.length, m, d, f, x, y, M, w, v = 0;
          for (t || (this.center = t = this.getCenter()), M = 0; M < c; M++) {
            w = a[M], m = r + v * o, w.isValid() && (!l || w.visible) && (v += w.percentage / 100), d = r + v * o;
            let T = { x: t[0], y: t[1], r: t[2] / 2, innerR: t[3] / 2, start: Math.round(1e3 * m) / 1e3, end: Math.round(1e3 * d) / 1e3 };
            w.shapeType = "arc", w.shapeArgs = T, (f = (d + m) / 2) > 1.5 * Math.PI ? f -= 2 * Math.PI : f < -Math.PI / 2 && (f += 2 * Math.PI), w.slicedTranslation = { translateX: Math.round(Math.cos(f) * i), translateY: Math.round(Math.sin(f) * i) }, x = Math.cos(f) * t[2] / 2, y = Math.sin(f) * t[2] / 2, w.tooltipPos = [t[0] + 0.7 * x, t[1] + 0.7 * y], w.half = +(f < -Math.PI / 2 || f > Math.PI / 2), w.angle = f;
          }
          Nh(this, "afterTranslate");
        }
        updateTotals() {
          let t = this.points, e = t.length, i = this.options.ignoreHiddenPoint, s, r, o = 0;
          for (s = 0; s < e; s++) (r = t[s]).isValid() && (!i || r.visible) && (o += r.y);
          for (s = 0, this.total = o; s < e; s++) (r = t[s]).percentage = o > 0 && (r.visible || !i) ? r.y / o * 100 : 0, r.total = o;
        }
      }
      Ll.defaultOptions = Ol(ce.defaultOptions, { borderRadius: 3, center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { connectorPadding: 5, connectorShape: "crookedLine", crookDistance: void 0, distance: 30, enabled: !0, formatter: function() {
        return this.isNull ? void 0 : this.name;
      }, softConnector: !0, x: 0 }, fillColor: void 0, ignoreHiddenPoint: !0, inactiveOtherPoints: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: 0.1 } } }), tu(Ll.prototype, { axisTypes: [], directTouch: !0, drawGraph: void 0, drawTracker: Oa.prototype.drawTracker, getCenter: Lh.getCenter, getSymbol: Bh, invertible: !1, isCartesian: !1, noSharedTooltip: !0, pointAttribs: Oa.prototype.pointAttribs, pointClass: Ih, requireSorting: !1, searchPoint: Bh, trackerGroups: ["group", "dataLabelsGroup"] }), Nt.registerSeriesType("pie", Ll);
      let { composed: iu, noop: su } = X, { distribute: ru } = fs, { series: Rh } = Nt, { arrayMax: ou, clamp: zh, defined: Fh, isNumber: au, pick: nu, pushUnique: lu, relativeLength: Hh } = $;
      (function(h) {
        let t = { radialDistributionY: function(o, a) {
          return (a.dataLabelPosition?.top || 0) + o.distributeBox.pos;
        }, radialDistributionX: function(o, a, l, c, m) {
          let d = m.dataLabelPosition;
          return o.getX(l < (d?.top || 0) + 2 || l > (d?.bottom || 0) - 2 ? c : l, a.half, a, m);
        }, justify: function(o, a, l, c) {
          return c[0] + (o.half ? -1 : 1) * (l + (a.dataLabelPosition?.distance || 0));
        }, alignToPlotEdges: function(o, a, l, c) {
          let m = o.getBBox().width;
          return a ? m + c : l - m - c;
        }, alignToConnectors: function(o, a, l, c) {
          let m = 0, d;
          return o.forEach(function(f) {
            (d = f.dataLabel.getBBox().width) > m && (m = d);
          }), a ? m + c : l - m - c;
        } };
        function e(o, a) {
          let l = Math.PI / 2, { start: c = 0, end: m = 0 } = o.shapeArgs || {}, d = o.angle || 0;
          a > 0 && c < l && m > l && d > l / 2 && d < 1.5 * l && (d = d <= l ? Math.max(l / 2, (c + l) / 2) : Math.min(1.5 * l, (l + m) / 2));
          let { center: f, options: x } = this, y = f[2] / 2, M = Math.cos(d), w = Math.sin(d), v = f[0] + M * y, T = f[1] + w * y, S = Math.min((x.slicedOffset || 0) + (x.borderWidth || 0), a / 5);
          return { natural: { x: v + M * a, y: T + w * a }, computed: {}, alignment: a < 0 ? "center" : o.half ? "right" : "left", connectorPosition: { angle: d, breakAt: { x: v + M * S, y: T + w * S }, touchingSliceAt: { x: v, y: T } }, distance: a };
        }
        function i() {
          let o = this, a = o.points, l = o.chart, c = l.plotWidth, m = l.plotHeight, d = l.plotLeft, f = Math.round(l.chartWidth / 3), x = o.center, y = x[2] / 2, M = x[1], w = [[], []], v = [0, 0, 0, 0], T = o.dataLabelPositioners, S, O, L, D = 0;
          o.visible && o.hasDataLabels?.() && (a.forEach((N) => {
            (N.dataLabels || []).forEach((I) => {
              I.shortened && (I.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), I.shortened = !1);
            });
          }), Rh.prototype.drawDataLabels.apply(o), a.forEach((N) => {
            (N.dataLabels || []).forEach((I, W) => {
              let Y = x[2] / 2, H = I.options, V = Hh(H?.distance || 0, Y);
              W === 0 && w[N.half].push(N), !Fh(H?.style?.width) && I.getBBox().width > f && (I.css({ width: Math.round(0.7 * f) + "px" }), I.shortened = !0), I.dataLabelPosition = this.getDataLabelPosition(N, V), D = Math.max(D, V);
            });
          }), w.forEach((N, I) => {
            let W = N.length, Y = [], H, V, Z = 0, J;
            W && (o.sortByAngle(N, I - 0.5), D > 0 && (H = Math.max(0, M - y - D), V = Math.min(M + y + D, l.plotHeight), N.forEach((j) => {
              (j.dataLabels || []).forEach((q) => {
                let _ = q.dataLabelPosition;
                _ && _.distance > 0 && (_.top = Math.max(0, M - y - _.distance), _.bottom = Math.min(M + y + _.distance, l.plotHeight), Z = q.getBBox().height || 21, q.lineHeight = l.renderer.fontMetrics(q.text || q).h + 2 * q.padding, j.distributeBox = { target: (q.dataLabelPosition?.natural.y || 0) - _.top + q.lineHeight / 2, size: Z, rank: j.y }, Y.push(j.distributeBox));
              });
            }), ru(Y, J = V + Z - H, J / 5)), N.forEach((j) => {
              (j.dataLabels || []).forEach((q) => {
                let _ = q.options || {}, vt = j.distributeBox, ct = q.dataLabelPosition, ie = ct?.natural.y || 0, st = _.connectorPadding || 0, it = q.lineHeight || 21, pt = (it - q.getBBox().height) / 2, lt = 0, kt = ie, wt = "inherit";
                if (ct) {
                  if (Y && Fh(vt) && ct.distance > 0 && (vt.pos === void 0 ? wt = "hidden" : (L = vt.size, kt = T.radialDistributionY(j, q))), _.justify) lt = T.justify(j, q, y, x);
                  else switch (_.alignTo) {
                    case "connectors":
                      lt = T.alignToConnectors(N, I, c, d);
                      break;
                    case "plotEdges":
                      lt = T.alignToPlotEdges(q, I, c, d);
                      break;
                    default:
                      lt = T.radialDistributionX(o, j, kt - pt, ie, q);
                  }
                  if (ct.attribs = { visibility: wt, align: ct.alignment }, ct.posAttribs = { x: lt + (_.x || 0) + ({ left: st, right: -st }[ct.alignment] || 0), y: kt + (_.y || 0) - it / 2 }, ct.computed.x = lt, ct.computed.y = kt - pt, nu(_.crop, !0)) {
                    let mt;
                    lt - (O = q.getBBox().width) < st && I === 1 ? (mt = Math.round(O - lt + st), v[3] = Math.max(mt, v[3])) : lt + O > c - st && I === 0 && (mt = Math.round(lt + O - c + st), v[1] = Math.max(mt, v[1])), kt - L / 2 < 0 ? v[0] = Math.max(Math.round(-kt + L / 2), v[0]) : kt + L / 2 > m && (v[2] = Math.max(Math.round(kt + L / 2 - m), v[2])), ct.sideOverflow = mt;
                  }
                }
              });
            }));
          }), (ou(v) === 0 || this.verifyDataLabelOverflow(v)) && (this.placeDataLabels(), this.points.forEach((N) => {
            (N.dataLabels || []).forEach((I) => {
              let { connectorColor: W, connectorWidth: Y = 1 } = I.options || {}, H = I.dataLabelPosition;
              if (au(Y)) {
                let V;
                S = I.connector, H && H.distance > 0 ? (V = !S, S || (I.connector = S = l.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + N.colorIndex + (N.className ? " " + N.className : "")).add(o.dataLabelsGroup)), l.styledMode || S.attr({ "stroke-width": Y, stroke: W || N.color || "#666666" }), S[V ? "attr" : "animate"]({ d: N.getConnectorPath(I) }), S.attr({ visibility: H.attribs?.visibility })) : S && (I.connector = S.destroy());
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
          let a = this.center, l = this.options, c = l.center, m = l.minSize || 80, d = m, f = l.size !== null;
          return !f && (c[0] !== null ? d = Math.max(a[2] - Math.max(o[1], o[3]), m) : (d = Math.max(a[2] - o[1] - o[3], m), a[0] += (o[3] - o[1]) / 2), c[1] !== null ? d = zh(d, m, a[2] - Math.max(o[0], o[2])) : (d = zh(d, m, a[2] - o[0] - o[2]), a[1] += (o[0] - o[2]) / 2), d < a[2] ? (a[2] = d, a[3] = Math.min(l.thickness ? Math.max(0, d - 2 * l.thickness) : Math.max(0, Hh(l.innerSize || 0, d)), d), this.translate(a), this.drawDataLabels && this.drawDataLabels()) : f = !0), f;
        }
        h.compose = function(o) {
          if (La.compose(Rh), lu(iu, "PieDataLabel")) {
            let a = o.prototype;
            a.dataLabelPositioners = t, a.alignDataLabel = su, a.drawDataLabels = i, a.getDataLabelPosition = e, a.placeDataLabels = s, a.verifyDataLabelOverflow = r;
          }
        };
      })(es || (es = {}));
      let hu = es;
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
            let [l, c] = i[r], [m, d] = i[o];
            c > e != d > e && t < (m - l) * (e - c) / (d - c) + l && (a = !a);
          }
          return a;
        };
      })(gt || (gt = {}));
      let { pointInPolygon: cu } = gt, { addEvent: du, getAlignFactor: uu, fireEvent: Wh, objectEach: Xh, pick: pu } = $;
      function gu(h) {
        let t = h.length, e = (m, d) => !(d.x >= m.x + m.width || d.x + d.width <= m.x || d.y >= m.y + m.height || d.y + d.height <= m.y), i = (m, d) => {
          for (let f of m) if (cu({ x: f[0], y: f[1] }, d)) return !0;
          return !1;
        }, s, r, o, a, l, c = !1;
        for (let m = 0; m < t; m++) (s = h[m]) && (s.oldOpacity = s.opacity, s.newOpacity = 1, s.absoluteBox = (function(d) {
          if (d && (!d.alignAttr || d.placed)) {
            let f = d.box ? 0 : d.padding || 0, x = d.alignAttr || { x: d.attr("x"), y: d.attr("y") }, { height: y, polygon: M, width: w } = d.getBBox(), v = uu(d.alignValue) * w;
            return d.width = w, d.height = y, { x: x.x + (d.parentGroup?.translateX || 0) + f - v, y: x.y + (d.parentGroup?.translateY || 0) + f, width: w - 2 * f, height: y - 2 * f, polygon: M };
          }
        })(s));
        h.sort((m, d) => (d.labelrank || 0) - (m.labelrank || 0));
        for (let m = 0; m < t; ++m) {
          a = (r = h[m]) && r.absoluteBox;
          let d = a?.polygon;
          for (let f = m + 1; f < t; ++f) {
            l = (o = h[f]) && o.absoluteBox;
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
        for (let m of h) Gh(m, this) && (c = !0);
        c && Wh(this, "afterHideAllOverlappingLabels");
      }
      function Gh(h, t) {
        let e, i = !1;
        return h && (e = h.newOpacity, h.oldOpacity !== e && (h.hasClass("highcharts-data-label") ? (h[e ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), i = !0, h[h.isOld ? "animate" : "attr"]({ opacity: e }, void 0, function() {
          t.styledMode || h.css({ pointerEvents: e ? "auto" : "none" });
        }), Wh(t, "afterHideOverlappingLabel")) : h.attr({ opacity: e })), h.isOld = !0), i;
      }
      function mu() {
        let h = this, t = [];
        for (let e of h.labelCollectors || []) t = t.concat(e());
        for (let e of h.yAxis || []) e.stacking && e.options.stackLabels && !e.options.stackLabels.allowOverlap && Xh(e.stacking.stacks, (i) => {
          Xh(i, (s) => {
            s.label && t.push(s.label);
          });
        });
        for (let e of h.series || []) if (e.visible && e.hasDataLabels?.()) {
          let i = (s) => {
            for (let r of s) r.visible && (r.dataLabels || []).forEach((o) => {
              let a = o.options || {};
              o.labelrank = pu(a.labelrank, r.labelrank, r.shapeArgs?.height), a.allowOverlap ?? Number(a.distance) > 0 ? (o.oldOpacity = o.opacity, o.newOpacity = 1, Gh(o, h)) : t.push(o);
            });
          };
          i(e.nodes || []), i(e.points);
        }
        this.hideOverlappingLabels(t);
      }
      let Yh = { compose: function(h) {
        let t = h.prototype;
        t.hideOverlappingLabels || (t.hideOverlappingLabels = gu, du(h, "render", mu));
      } }, { defaultOptions: fu } = te, { noop: jh } = X, { addEvent: Uh, extend: xu, isObject: Vh, merge: bu, relativeLength: Dl } = $, yu = { radius: 0, scope: "stack", where: void 0 }, qh = jh, Kh = jh;
      function vu(h, t, e, i, s = {}) {
        let r = qh(h, t, e, i, s), { brStart: o = !0, brEnd: a = !0, innerR: l = 0, r: c = e, start: m = 0, end: d = 0 } = s;
        if (s.open || !s.borderRadius) return r;
        let f = d - m, x = Math.sin(f / 2), y = Math.max(Math.min(Dl(s.borderRadius || 0, c - l), (c - l) / 2, c * x / (1 + x)), 0), M = Math.min(y, f / Math.PI * 2 * l), w = r.length - 1;
        for (; w--; ) (o || w !== 0 && w !== 3) && (a || w !== 1 && w !== 2) && (function(v, T, S) {
          let O, L, D, N = v[T], I = v[T + 1];
          if (I[0] === "Z" && (I = v[0]), (N[0] === "M" || N[0] === "L") && I[0] === "A" ? (O = N, L = I, D = !0) : N[0] === "A" && (I[0] === "M" || I[0] === "L") && (O = I, L = N), O && L && L.params) {
            let W = L[1], Y = L[5], H = L.params, { start: V, end: Z, cx: J, cy: j } = H, q = Y ? W - S : W + S, _ = q ? Math.asin(S / q) : 0, vt = Y ? _ : -_, ct = Math.cos(_) * q;
            D ? (H.start = V + vt, O[1] = J + ct * Math.cos(V), O[2] = j + ct * Math.sin(V), v.splice(T + 1, 0, ["A", S, S, 0, 0, 1, J + W * Math.cos(H.start), j + W * Math.sin(H.start)])) : (H.end = Z - vt, L[6] = J + W * Math.cos(H.end), L[7] = j + W * Math.sin(H.end), v.splice(T + 1, 0, ["A", S, S, 0, 0, 1, J + ct * Math.cos(Z), j + ct * Math.sin(Z)])), L[4] = Math.abs(H.end - H.start) < Math.PI ? 0 : 1;
          }
        })(r, w, w > 1 ? M : y);
        return r;
      }
      function ku() {
        if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
          let { options: h, yAxis: t } = this, e = h.stacking === "percent", i = fu.plotOptions?.[this.type]?.borderRadius, s = Il(h.borderRadius, Vh(i) ? i : {}), r = t.options.reversed;
          for (let o of this.points) {
            let { shapeArgs: a } = o;
            if (o.shapeType === "roundedRect" && a) {
              let { width: l = 0, height: c = 0, y: m = 0 } = a, d = m, f = c;
              if (s.scope === "stack" && o.stackTotal) {
                let w = t.translate(e ? 100 : o.stackTotal, !1, !0, !1, !0), v = t.translate(h.threshold || 0, !1, !0, !1, !0), T = this.crispCol(0, Math.min(w, v), 0, Math.abs(w - v));
                d = T.y, f = T.height;
              }
              let x = (o.negative ? -1 : 1) * (r ? -1 : 1) == -1, y = s.where;
              !y && this.is("waterfall") && Math.abs((o.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (y = "all"), y || (y = "end");
              let M = Math.min(Dl(s.radius, l), l / 2, y === "all" ? c / 2 : 1 / 0) || 0;
              y === "end" && (x && (d -= M), f += M), xu(a, { brBoxHeight: f, brBoxY: d, r: M });
            }
          }
        }
      }
      function Il(h, t) {
        return Vh(h) || (h = { radius: h || 0 }), bu(yu, t, h);
      }
      function wu() {
        let h = Il(this.options.borderRadius);
        for (let t of this.points) {
          let e = t.shapeArgs;
          e && (e.borderRadius = Dl(h.radius, (e.r || 0) - (e.innerR || 0)));
        }
      }
      function Mu(h, t, e, i, s = {}) {
        let r = Kh(h, t, e, i, s), { r: o = 0, brBoxHeight: a = i, brBoxY: l = t } = s, c = t - l, m = l + a - (t + i), d = c - o > -0.1 ? 0 : o, f = m - o > -0.1 ? 0 : o, x = Math.max(d && c, 0), y = Math.max(f && m, 0), M = [h + d, t], w = [h + e - d, t], v = [h + e, t + d], T = [h + e, t + i - f], S = [h + e - f, t + i], O = [h + f, t + i], L = [h, t + i - f], D = [h, t + d], N = (I, W) => Math.sqrt(Math.pow(I, 2) - Math.pow(W, 2));
        if (x) {
          let I = N(d, d - x);
          M[0] -= I, w[0] += I, v[1] = D[1] = t + d - x;
        }
        if (i < d - x) {
          let I = N(d, d - x - i);
          v[0] = T[0] = h + e - d + I, S[0] = Math.min(v[0], S[0]), O[0] = Math.max(T[0], O[0]), L[0] = D[0] = h + d - I, v[1] = D[1] = t + i;
        }
        if (y) {
          let I = N(f, f - y);
          S[0] += I, O[0] -= I, T[1] = L[1] = t + i - f + y;
        }
        if (i < f - y) {
          let I = N(f, f - y - i);
          v[0] = T[0] = h + e - f + I, w[0] = Math.min(v[0], w[0]), M[0] = Math.max(T[0], M[0]), L[0] = D[0] = h + f - I, T[1] = L[1] = t;
        }
        return r.length = 0, r.push(["M", ...M], ["L", ...w], ["A", d, d, 0, 0, 1, ...v], ["L", ...T], ["A", f, f, 0, 0, 1, ...S], ["L", ...O], ["A", f, f, 0, 0, 1, ...L], ["L", ...D], ["A", d, d, 0, 0, 1, ...M], ["Z"]), r;
      }
      let { diffObjects: Cu, extend: Au, find: Tu, merge: Su, pick: Ba, uniqueKey: Eu } = $;
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
            d._id === void 0 && (d._id = Eu()), this.matchResponsiveRule(d, a);
          }, this);
          let c = Su(...a.map((d) => Tu(r?.rules || [], (f) => f._id === d)).map((d) => d?.chartOptions));
          c.isResponsiveOptions = !0, a = a.toString() || void 0;
          let m = o?.ruleIds;
          a !== m && (o && (this.currentResponsive = void 0, this.updatingResponsive = !0, this.update(o.undoOptions, i, !0), this.updatingResponsive = !1), a ? ((l = Cu(c, this.options, !0, this.collectionsWithUpdate)).isResponsiveOptions = !0, this.currentResponsive = { ruleIds: a, mergedOptions: c, undoOptions: l }, this.updatingResponsive || this.update(c, i, !0)) : this.currentResponsive = void 0);
        }
        h.compose = function(i) {
          let s = i.prototype;
          return s.matchResponsiveRule || Au(s, { matchResponsiveRule: t, setResponsive: e }), i;
        };
      })(is || (is = {}));
      let Pu = is;
      X.AST = Ct, X.Axis = vi, X.Chart = Ai, X.Color = yt, X.DataLabel = La, X.DataTableCore = xa, X.Fx = $t, X.HTMLElement = le, X.Legend = ih, X.LegendSymbol = Gl, X.OverlappingDataLabels = X.OverlappingDataLabels || Yh, X.PlotLineOrBand = oi, X.Point = Bt, X.Pointer = Hl, X.RendererRegistry = zi, X.Series = ce, X.SeriesRegistry = Nt, X.StackItem = gh, X.SVGElement = ge, X.SVGRenderer = Ms, X.Templating = Jt, X.Tick = bi, X.Time = Ks, X.Tooltip = k, X.animate = Rt.animate, X.animObject = Rt.animObject, X.chart = Ai.chart, X.color = yt.parse, X.dateFormat = Jt.dateFormat, X.defaultOptions = te.defaultOptions, X.distribute = fs.distribute, X.format = Jt.format, X.getDeferredAnimation = Rt.getDeferredAnimation, X.getOptions = te.getOptions, X.numberFormat = Jt.numberFormat, X.seriesType = Nt.seriesType, X.setAnimation = Rt.setAnimation, X.setOptions = te.setOptions, X.stop = Rt.stop, X.time = te.defaultTime, X.timers = $t.timers, { compose: function(h, t, e) {
        let i = h.types.pie;
        if (!t.symbolCustomAttribs.includes("borderRadius")) {
          let s = e.prototype.symbols;
          Uh(h, "afterColumnTranslate", ku, { order: 9 }), Uh(i, "afterTranslate", wu), t.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY", "brEnd", "brStart"), qh = s.arc, Kh = s.roundedRect, s.arc = vu, s.roundedRect = Mu;
        }
      }, optionsToObject: Il }.compose(X.Series, X.SVGElement, X.SVGRenderer), zd.compose(X.Series.types.column), La.compose(X.Series), Yn.compose(X.Axis), le.compose(X.SVGRenderer), ih.compose(X.Chart), Ls.compose(X.Axis), Yh.compose(X.Chart), hu.compose(X.Series.types.pie), oi.compose(X.Chart, X.Axis), Hl.compose(X.Chart), Pu.compose(X.Chart), Kr.compose(X.Axis, X.Chart, X.Series), fd.compose(X.Axis, X.Chart, X.Series), k.compose(X.Pointer), $.extend(X, $);
      let Ou = X;
      return K.default;
    })());
  })(Na)), Na.exports;
}
var Bu = Iu();
const Bl = /* @__PURE__ */ Lu(Bu);
var Ra = { exports: {} }, Nu = Ra.exports, _h;
function Ru() {
  return _h || (_h = 1, (function(fe, Yt) {
    /**
    * Highcharts JS v12.4.0 (2025-09-04)
    * @module highcharts/themes/adaptive
    * @requires highcharts
    *
    * (c) 2009-2025 Torstein Honsi
    *
    * License: www.highcharts.com/license
    */
    (function(at, zt) {
      fe.exports = zt(at._Highcharts);
    })(typeof window > "u" ? Nu : window, (at) => (() => {
      var zt, ue = { 944: (Mt) => {
        Mt.exports = at;
      } }, Vt = {};
      function Dt(Mt) {
        var Et = Vt[Mt];
        if (Et !== void 0) return Et.exports;
        var ae = Vt[Mt] = { exports: {} };
        return ue[Mt](ae, ae.exports, Dt), ae.exports;
      }
      Dt.n = (Mt) => {
        var Et = Mt && Mt.__esModule ? () => Mt.default : () => Mt;
        return Dt.d(Et, { a: Et }), Et;
      }, Dt.d = (Mt, Et) => {
        for (var ae in Et) Dt.o(Et, ae) && !Dt.o(Mt, ae) && Object.defineProperty(Mt, ae, { enumerable: !0, get: Et[ae] });
      }, Dt.o = (Mt, Et) => Object.prototype.hasOwnProperty.call(Mt, Et);
      var Zt = {};
      Dt.d(Zt, { default: () => ti });
      var _t = Dt(944), oe = Dt.n(_t);
      let { setOptions: Oi } = oe(), Li = `
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
`, ni = `
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
`, Qe = `
:root,
.highcharts-light {
    ${Li}
}

@media (prefers-color-scheme: dark) {
    :root {
        ${ni}
    }
}

.highcharts-dark {
    ${ni}
}
`;
      (function(Mt) {
        Mt.options = { colors: ["var(--highcharts-color-0)", "var(--highcharts-color-1)", "var(--highcharts-color-2)", "var(--highcharts-color-3)", "var(--highcharts-color-4)", "var(--highcharts-color-5)", "var(--highcharts-color-6)", "var(--highcharts-color-7)", "var(--highcharts-color-8)", "var(--highcharts-color-9)"], global: { buttonTheme: { fill: "var(--highcharts-neutral-color-3)", stroke: "var(--highcharts-neutral-color-20)", style: { color: "var(--highcharts-neutral-color-80)" }, states: { hover: { fill: "var(--highcharts-neutral-color-10)" }, select: { fill: "var(--highcharts-highlight-color-10)", style: { color: "var(--highcharts-neutral-color-100)" } }, disabled: { style: { color: "var(--highcharts-neutral-color-20)" } } } } }, chart: { borderColor: "var(--highcharts-highlight-color-80)", backgroundColor: "var(--highcharts-background-color)", plotBorderColor: "var(--highcharts-neutral-color-20)" }, title: { style: { color: "var(--highcharts-neutral-color-80)" } }, subtitle: { style: { color: "var(--highcharts-neutral-color-60)" } }, caption: { style: { color: "var(--highcharts-neutral-color-60)" } }, plotOptions: { line: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, area: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, spline: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, areaspline: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, column: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, bar: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, scatter: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, pie: { borderColor: "var(--highcharts-background-color)" }, hlc: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, ohlc: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, candlestick: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)", lineColor: "var(--highcharts-neutral-color-100)", upColor: "var(--highcharts-background-color)" }, flags: { states: { hover: { lineColor: "var(--highcharts-neutral-color-100)", fillColor: "var(--highcharts-highlight-color-20)" }, select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)", fillColor: "var(--highcharts-background-color)", style: { color: "var(--highcharts-neutral-color-100)" } }, arearange: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, areasplinerange: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, boxplot: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)", fillColor: "var(--highcharts-background-color)" }, bubble: { marker: { states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, columnrange: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, columnpyramid: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, errorbar: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)", fillColor: "var(--highcharts-background-color)", color: "var(--highcharts-neutral-color-100)" }, gauge: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } }, dataLabels: { borderColor: "var(--highcharts-neutral-color-20)" }, dial: { backgroundColor: "var(--highcharts-neutral-color-100)", borderColor: "var(--highcharts-neutral-color-20)" }, pivot: { borderColor: "var(--highcharts-neutral-color-20)", backgroundColor: "var(--highcharts-neutral-color-100)" } }, packedbubble: { marker: { states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, polygon: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, waterfall: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-neutral-color-80)", lineColor: "var(--highcharts-neutral-color-80)" }, scatter3d: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, map: { states: { hover: { borderColor: "var(--highcharts-neutral-color-60)" }, select: { color: "var(--highcharts-neutral-color-20)" } }, nullColor: "var(--highcharts-neutral-color-3)", borderColor: "var(--highcharts-neutral-color-10)" }, mapline: { states: { hover: { borderColor: "var(--highcharts-neutral-color-60)" }, select: { color: "var(--highcharts-neutral-color-20)" } }, nullColor: "var(--highcharts-neutral-color-3)", borderColor: "var(--highcharts-neutral-color-10)" }, mappoint: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } }, dataLabels: { style: { color: "var(--highcharts-neutral-color-100)" } } }, mapbubble: { marker: { states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, heatmap: { marker: { states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } }, nullColor: "var(--highcharts-neutral-color-3)" }, xrange: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, gantt: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, sankey: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, dependencywheel: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, funnel: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, pyramid: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, histogram: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-background-color)" }, bellcurve: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } } }, item: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } }, borderColor: "var(--highcharts-background-color)" }, organization: { states: { select: { color: "var(--highcharts-neutral-color-20)", borderColor: "var(--highcharts-neutral-color-100)" } }, borderColor: "var(--highcharts-neutral-color-60)", link: { color: "var(--highcharts-neutral-color-60)" } }, solidgauge: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } }, dataLabels: { borderColor: "var(--highcharts-neutral-color-20)" }, dial: { backgroundColor: "var(--highcharts-neutral-color-100)", borderColor: "var(--highcharts-neutral-color-20)" }, pivot: { borderColor: "var(--highcharts-neutral-color-20)", backgroundColor: "var(--highcharts-neutral-color-100)" } }, timeline: { marker: { lineColor: "var(--highcharts-background-color)", states: { select: { fillColor: "var(--highcharts-neutral-color-20)", lineColor: "var(--highcharts-neutral-color-100)" } } }, dataLabels: { backgroundColor: "var(--highcharts-background-color)", borderColor: "var(--highcharts-neutral-color-40)", color: "var(--highcharts-neutral-color-80)" } }, treemap: { states: { hover: { borderColor: "var(--highcharts-neutral-color-40)" } }, borderColor: "var(--highcharts-neutral-color-10)" }, sunburst: { states: { hover: { borderColor: "var(--highcharts-neutral-color-40)" } }, borderColor: "var(--highcharts-neutral-color-10)" }, treegraph: { states: { hover: { borderColor: "var(--highcharts-neutral-color-40)" } }, borderColor: "var(--highcharts-neutral-color-10)", link: { color: "var(--highcharts-neutral-color-60)" } } }, legend: { borderColor: "var(--highcharts-neutral-color-40)", navigation: { activeColor: "var(--highcharts-highlight-color-100)", inactiveColor: "var(--highcharts-neutral-color-20)" }, itemStyle: { color: "var(--highcharts-neutral-color-80)" }, itemHoverStyle: { color: "var(--highcharts-neutral-color-100)" }, itemHiddenStyle: { color: "var(--highcharts-neutral-color-60)" }, title: { style: { color: "var(--highcharts-neutral-color-80)" } }, bubbleLegend: { labels: { style: { color: "var(--highcharts-neutral-color-100)" } } } }, loading: { style: { backgroundColor: "var(--highcharts-background-color)" } }, tooltip: { backgroundColor: "var(--highcharts-background-color)", style: { color: "var(--highcharts-neutral-color-80)" } }, credits: { style: { color: "var(--highcharts-neutral-color-40)" } }, xAxis: { labels: { style: { color: "var(--highcharts-neutral-color-80)" } }, title: { style: { color: "var(--highcharts-neutral-color-60)" } }, minorGridLineColor: "var(--highcharts-neutral-color-5)", minorTickColor: "var(--highcharts-neutral-color-40)", lineColor: "var(--highcharts-neutral-color-80)", gridLineColor: "var(--highcharts-neutral-color-10)", tickColor: "var(--highcharts-neutral-color-80)", grid: { borderColor: "var(--highcharts-neutral-color-20)" } }, yAxis: { labels: { style: { color: "var(--highcharts-neutral-color-80)" } }, title: { style: { color: "var(--highcharts-neutral-color-60)" } }, minorGridLineColor: "var(--highcharts-neutral-color-5)", minorTickColor: "var(--highcharts-neutral-color-40)", lineColor: "var(--highcharts-neutral-color-80)", gridLineColor: "var(--highcharts-neutral-color-10)", tickColor: "var(--highcharts-neutral-color-80)", stackLabels: { style: { color: "var(--highcharts-neutral-color-100)" } }, grid: { borderColor: "var(--highcharts-neutral-color-20)" } }, navigator: { handles: { backgroundColor: "var(--highcharts-neutral-color-5)", borderColor: "var(--highcharts-neutral-color-40)" }, outlineColor: "var(--highcharts-neutral-color-40)", xAxis: { gridLineColor: "var(--highcharts-neutral-color-10)", labels: { style: { color: "var(--highcharts-neutral-color-100)" } } } }, rangeSelector: { inputStyle: { color: "var(--highcharts-highlight-color-80)" }, labelStyle: { color: "var(--highcharts-neutral-color-60)" } }, scrollbar: { barBackgroundColor: "var(--highcharts-neutral-color-20)", barBorderColor: "var(--highcharts-neutral-color-20)", buttonArrowColor: "var(--highcharts-neutral-color-80)", buttonBackgroundColor: "var(--highcharts-neutral-color-10)", buttonBorderColor: "var(--highcharts-neutral-color-20)", trackBorderColor: "var(--highcharts-neutral-color-20)" }, pane: { background: { borderColor: "var(--highcharts-neutral-color-20)", backgroundColor: { stops: [[0, "var(--highcharts-background-color)"], [1, "var(--highcharts-neutral-color-10)"]] } } }, zAxis: { labels: { style: { color: "var(--highcharts-neutral-color-80)" } }, title: { style: { color: "var(--highcharts-neutral-color-60)" } }, minorGridLineColor: "var(--highcharts-neutral-color-5)", minorTickColor: "var(--highcharts-neutral-color-40)", lineColor: "var(--highcharts-neutral-color-80)", gridLineColor: "var(--highcharts-neutral-color-10)", tickColor: "var(--highcharts-neutral-color-80)" }, colorAxis: { labels: { style: { color: "var(--highcharts-neutral-color-80)" } }, title: { style: { color: "var(--highcharts-neutral-color-60)" } }, minorGridLineColor: "var(--highcharts-neutral-color-5)", minorTickColor: "var(--highcharts-neutral-color-40)", lineColor: "var(--highcharts-neutral-color-80)", gridLineColor: "var(--highcharts-background-color)", tickColor: "var(--highcharts-neutral-color-80)", marker: { color: "var(--highcharts-neutral-color-40)" }, minColor: "var(--highcharts-highlight-color-10)", maxColor: "var(--highcharts-highlight-color-100)" }, mapNavigation: { buttonOptions: { style: { color: "var(--highcharts-neutral-color-60)" }, theme: { fill: "var(--highcharts-background-color)", stroke: "var(--highcharts-neutral-color-10)" } } }, accessibility: { keyboardNavigation: { focusBorder: { style: { color: "var(--highcharts-highlight-color-80)" } } } }, drilldown: { activeAxisLabelStyle: { color: "var(--highcharts-highlight-color-100)" }, activeDataLabelStyle: { color: "var(--highcharts-highlight-color-100)" } }, annotations: { labelOptions: { borderColor: "var(--highcharts-neutral-color-100)", backgroundColor: "color-mix(in srgb, var(--highcharts-neutral-color-100) 75%, transparent)" }, controlPointOptions: { style: { fill: "var(--highcharts-background-color)", stroke: "var(--highcharts-neutral-color-100)" } }, types: { elliottWave: { labelOptions: { style: { color: "var(--highcharts-neutral-color-60)" } } }, fibonacci: { typeOptions: { lineColor: "var(--highcharts-neutral-color-40)" }, labelOptions: { style: { color: "var(--highcharts-neutral-color-60)" } } }, fibonacciTimeZones: { typeOptions: { line: { stroke: "var(--highcharts-neutral-color-80)" } } }, verticalLine: { labelOptions: { style: { color: "var(--highcharts-neutral-color-60)" } } }, measure: { typeOptions: { label: { style: { color: "var(--highcharts-neutral-color-60)" } } } } }, shapeOptions: { fill: "color-mix(in srgb, var(--highcharts-neutral-color-100) 75%, transparent)", stroke: "color-mix(in srgb, var(--highcharts-neutral-color-100) 75%, transparent)" } }, navigation: { buttonOptions: { symbolFill: "var(--highcharts-neutral-color-60)", symbolStroke: "var(--highcharts-neutral-color-60)", theme: { fill: "var(--highcharts-background-color)" } }, menuStyle: { background: "var(--highcharts-background-color)" }, menuItemStyle: { color: "var(--highcharts-neutral-color-80)" }, menuItemHoverStyle: { background: "var(--highcharts-neutral-color-5)" } } }, Mt.apply = function() {
          let Et = document.createElement("style");
          Et.nonce = "highcharts", Et.innerText = Qe, document.getElementsByTagName("head")[0].appendChild(Et), Oi(Mt.options);
        };
      })(zt || (zt = {}));
      let He = zt;
      oe().theme = He.options, He.apply();
      let ti = oe();
      return Zt.default;
    })());
  })(Ra)), Ra.exports;
}
Ru();
var za = { exports: {} }, zu = za.exports, Jh;
function Fu() {
  return Jh || (Jh = 1, (function(fe, Yt) {
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
    (function(at, zt) {
      fe.exports = zt(at._Highcharts, at._Highcharts.Templating, at._Highcharts.AST, at._Highcharts.Legend, at._Highcharts.Axis, at._Highcharts.Color, at._Highcharts.SeriesRegistry, at._Highcharts.RendererRegistry, at._Highcharts.SVGRenderer, at._Highcharts.Point, at._Highcharts.Series);
    })(typeof window > "u" ? zu : window, (at, zt, ue, Vt, Dt, Zt, _t, oe, Oi, Li, ni) => (() => {
      let Qe;
      var He, ti, Mt, Et, ae = { 260: (p) => {
        p.exports = Li;
      }, 512: (p) => {
        p.exports = _t;
      }, 532: (p) => {
        p.exports = Dt;
      }, 540: (p) => {
        p.exports = Oi;
      }, 608: (p) => {
        p.exports = oe;
      }, 620: (p) => {
        p.exports = Zt;
      }, 632: (p) => {
        p.exports = Vt;
      }, 660: (p) => {
        p.exports = ue;
      }, 820: (p) => {
        p.exports = ni;
      }, 944: (p) => {
        p.exports = at;
      }, 984: (p) => {
        p.exports = zt;
      } }, es = {};
      function gt(p) {
        var n = es[p];
        if (n !== void 0) return n.exports;
        var u = es[p] = { exports: {} };
        return ae[p](u, u.exports, gt), u.exports;
      }
      gt.n = (p) => {
        var n = p && p.__esModule ? () => p.default : () => p;
        return gt.d(n, { a: n }), n;
      }, gt.d = (p, n) => {
        for (var u in n) gt.o(n, u) && !gt.o(p, u) && Object.defineProperty(p, u, { enumerable: !0, get: n[u] });
      }, gt.o = (p, n) => Object.prototype.hasOwnProperty.call(p, n);
      var is = {};
      gt.d(is, { default: () => Yr });
      var Di = gt(944), K = gt.n(Di);
      let { doc: X, win: pe } = K(), { css: ss } = K(), We = pe.EventTarget && new pe.EventTarget() || "none";
      function li(p) {
        if (typeof pe.MouseEvent == "function") return new pe.MouseEvent(p.type, p);
        if (X?.createEvent) {
          let n = X.createEvent("MouseEvent");
          if (n.initMouseEvent) return n.initMouseEvent(p.type, p.bubbles, p.cancelable, p.view || pe, p.detail, p.screenX, p.screenY, p.clientX, p.clientY, p.ctrlKey, p.altKey, p.shiftKey, p.metaKey, p.button, p.relatedTarget), n;
        }
        return Ws(p.type);
      }
      function Ws(p, n, u) {
        let g = n || { x: 0, y: 0 };
        if (typeof pe.MouseEvent == "function") return new pe.MouseEvent(p, { bubbles: !0, cancelable: !0, composed: !0, button: 0, buttons: 1, relatedTarget: u || We, view: pe, detail: +(p === "click"), screenX: g.x, screenY: g.y, clientX: g.x, clientY: g.y });
        if (X?.createEvent) {
          let b = X.createEvent("MouseEvent");
          if (b.initMouseEvent) return b.initMouseEvent(p, !0, !0, pe, +(p === "click"), g.x, g.y, g.x, g.y, !1, !1, !1, !1, 0, null), b;
        }
        return { type: p };
      }
      let It = { addClass: function(p, n) {
        p.classList ? p.classList.add(n) : 0 > p.className.indexOf(n) && (p.className += " " + n);
      }, cloneMouseEvent: li, cloneTouchEvent: function(p) {
        let n = (g) => {
          let b = [];
          for (let C = 0; C < g.length; ++C) {
            let k = g.item(C);
            k && b.push(k);
          }
          return b;
        };
        if (typeof pe.TouchEvent == "function") {
          let g = new pe.TouchEvent(p.type, { touches: n(p.touches), targetTouches: n(p.targetTouches), changedTouches: n(p.changedTouches), ctrlKey: p.ctrlKey, shiftKey: p.shiftKey, altKey: p.altKey, metaKey: p.metaKey, bubbles: p.bubbles, cancelable: p.cancelable, composed: p.composed, detail: p.detail, view: p.view });
          return p.defaultPrevented && g.preventDefault(), g;
        }
        let u = li(p);
        return u.touches = p.touches, u.changedTouches = p.changedTouches, u.targetTouches = p.targetTouches, u;
      }, escapeStringForHTML: function(p) {
        return p.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
      }, getElement: function(p) {
        return X.getElementById(p);
      }, getFakeMouseEvent: Ws, getHeadingTagNameForElement: function(p) {
        let n = (C) => "h" + Math.min(6, parseInt(C.slice(1), 10) + 1), u = (C) => /^H[1-6]$/i.test(C), g = (C) => {
          let k = C;
          for (; k = k.previousSibling; ) {
            let A = k.tagName || "";
            if (u(A)) return A;
          }
          return "";
        }, b = (C) => {
          let k = g(C);
          if (k) return n(k);
          let A = C.parentElement;
          if (!A) return "h6";
          let E = A.tagName;
          return u(E) ? n(E) : b(A);
        };
        return b(p);
      }, removeChildNodes: function(p) {
        for (; p.lastChild; ) p.removeChild(p.lastChild);
      }, removeClass: function(p, n) {
        p.classList ? p.classList.remove(n) : p.className = p.className.replace(RegExp(n, "g"), "");
      }, removeElement: function(p) {
        p && p.parentNode && p.parentNode.removeChild(p);
      }, reverseChildNodes: function(p) {
        let n = p.childNodes.length;
        for (; n--; ) p.appendChild(p.childNodes[n]);
      }, simulatedEventTarget: We, stripHTMLTagsFromString: function(p, n = !1) {
        return typeof p == "string" ? n ? p.replace(/<\/?[^>]+(>|$)/g, "") : p.replace(/<\/?(?!\s)[^>]+(>|$)/g, "") : p;
      }, visuallyHideElement: function(p) {
        ss(p, { position: "absolute", width: "1px", height: "1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(1px, 1px, 1px, 1px)", marginTop: "-3px", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)", filter: "alpha(opacity=1)", opacity: 0.01 });
      } };
      var rs = gt(984), Ce = gt.n(rs);
      let { format: Xs } = Ce(), { getNestedProperty: os, pick: Ii } = K();
      (function(p) {
        function n(g, b, C) {
          let k = (z, R) => {
            let F = z.slice(R || 0), G = F.indexOf("{"), U = F.indexOf("}");
            if (G > -1 && U > G) return { statement: F.substring(G + 1, U), begin: R + G + 1, end: R + U };
          }, A = [], E, P, B = 0;
          do
            E = k(g, B), (P = g.substring(B, E && E.begin - 1)).length && A.push({ value: P, type: "constant" }), E && A.push({ value: E.statement, type: "statement" }), B = E ? E.end + 1 : B + 1;
          while (E);
          return A.forEach((z) => {
            z.type === "statement" && (z.value = (function(R, F) {
              let G, U, dt = R.indexOf("#each("), nt = R.indexOf("#plural("), rt = R.indexOf("["), ht = R.indexOf("]");
              if (dt > -1) {
                let et = R.slice(dt).indexOf(")") + dt, ft = R.substring(0, dt), xt = R.substring(et + 1), Xt = R.substring(dt + 6, et).split(","), St = Number(Xt[1]), Bt;
                if (U = "", G = os(Xt[0], F)) {
                  Bt = (St = isNaN(St) ? G.length : St) < 0 ? G.length + St : Math.min(St, G.length);
                  for (let Ie = 0; Ie < Bt; ++Ie) U += ft + G[Ie] + xt;
                }
                return U.length ? U : "";
              }
              if (nt > -1) {
                var tt;
                let et = R.slice(nt).indexOf(")") + nt, ft = R.substring(nt + 8, et).split(",");
                switch (Number(os(ft[0], F))) {
                  case 0:
                    U = Ii(ft[4], ft[1]);
                    break;
                  case 1:
                    U = Ii(ft[2], ft[1]);
                    break;
                  case 2:
                    U = Ii(ft[3], ft[1]);
                    break;
                  default:
                    U = ft[1];
                }
                return U ? (tt = U).trim && tt.trim() || tt.replace(/^\s+|\s+$/g, "") : "";
              }
              if (rt > -1) {
                let et, ft = R.substring(0, rt), xt = Number(R.substring(rt + 1, ht));
                return G = os(ft, F), !isNaN(xt) && G && (xt < 0 ? (et = G[G.length + xt]) === void 0 && (et = G[0]) : (et = G[xt]) === void 0 && (et = G[G.length - 1])), et !== void 0 ? et : "";
              }
              return "{" + R + "}";
            })(z.value, b));
          }), Xs(A.reduce((z, R) => z + R.value, ""), b, C);
        }
        function u(g, b) {
          let C = g.split("."), k = this.options.lang, A = 0;
          for (; A < C.length; ++A) k = k && k[C[A]];
          return typeof k == "string" ? n(k, b, this) : "";
        }
        p.compose = function(g) {
          let b = g.prototype;
          b.langFormat || (b.langFormat = u);
        }, p.i18nFormat = n;
      })(He || (He = {}));
      let Ae = He, { doc: Gs } = K(), { stripHTMLTagsFromString: io } = It, { defined: Te, find: hi, fireEvent: as } = K();
      function Ys(p) {
        if (p.points && p.points.length) {
          let n = hi(p.points, (u) => !!u.graphic);
          return n && n.graphic && n.graphic.element;
        }
      }
      function js(p) {
        let n = Ys(p);
        return n && n.parentNode || p.graph && p.graph.element || p.group && p.group.element;
      }
      let qt = { fireEventOnWrappedOrUnwrappedElement: function p(n, u) {
        let g = u.type, b = n.hcEvents;
        Gs?.createEvent && (n.dispatchEvent || n.fireEvent) ? n.dispatchEvent ? n.dispatchEvent(u) : n.fireEvent(g, u) : b && b[g] ? as(n, g, u) : n.element && p(n.element, u);
      }, getChartTitle: function(p) {
        return io(p.options.title.text || p.langFormat("accessibility.defaultChartTitle", { chart: p }), p.renderer.forExport);
      }, getAxisDescription: function(p) {
        return p && (p.options.accessibility?.description || p.axisTitle?.textStr || p.options.id || p.categories && "categories" || p.dateTime && "Time" || "values");
      }, getAxisRangeDescription: function(p) {
        let n = p.options || {};
        return n.accessibility && n.accessibility.rangeDescription !== void 0 ? n.accessibility.rangeDescription : p.categories ? (function(u) {
          let g = u.chart;
          return u.dataMax && u.dataMin ? g.langFormat("accessibility.axis.rangeCategories", { chart: g, axis: u, numCategories: u.dataMax - u.dataMin + 1 }) : "";
        })(p) : p.dateTime && (p.min === 0 || p.dataMin === 0) ? (function(u) {
          let g = u.chart, b = {}, C = u.dataMin || u.min || 0, k = u.dataMax || u.max || 0, A = "Seconds";
          b.Seconds = (k - C) / 1e3, b.Minutes = b.Seconds / 60, b.Hours = b.Minutes / 60, b.Days = b.Hours / 24, ["Minutes", "Hours", "Days"].forEach(function(P) {
            b[P] > 2 && (A = P);
          });
          let E = b[A].toFixed(+(A !== "Seconds" && A !== "Minutes"));
          return g.langFormat("accessibility.axis.timeRange" + A, { chart: g, axis: u, range: E.replace(".0", "") });
        })(p) : (function(u) {
          let g = u.chart, b = g.options, C = b && b.accessibility && b.accessibility.screenReaderSection.axisRangeDateFormat || "", k = { min: u.dataMin || u.min || 0, max: u.dataMax || u.max || 0 }, A = function(E) {
            return u.dateTime ? g.time.dateFormat(C, k[E]) : k[E].toString();
          };
          return g.langFormat("accessibility.axis.rangeFromTo", { chart: g, axis: u, rangeFrom: A("min"), rangeTo: A("max") });
        })(p);
      }, getPointFromXY: function(p, n, u) {
        let g = p.length, b;
        for (; g--; ) if (b = hi(p[g].points || [], function(C) {
          return C.x === n && C.y === u;
        })) return b;
      }, getSeriesFirstPointElement: Ys, getSeriesFromName: function(p, n) {
        return n ? (p.series || []).filter(function(u) {
          return u.name === n;
        }) : p.series;
      }, getSeriesA11yElement: js, unhideChartElementFromAT: function p(n, u) {
        u.setAttribute("aria-hidden", !1), u !== n.renderTo && u.parentNode && u.parentNode !== Gs.body && (Array.prototype.forEach.call(u.parentNode.childNodes, function(g) {
          g.hasAttribute("aria-hidden") || g.setAttribute("aria-hidden", !0);
        }), p(n, u.parentNode));
      }, hideSeriesFromAT: function(p) {
        let n = js(p);
        n && n.setAttribute("aria-hidden", !0);
      }, scrollAxisToPoint: function(p) {
        let n = p.series.xAxis, u = p.series.yAxis, g = n && n.scrollbar ? n : u, b = g && g.scrollbar;
        if (b && Te(b.to) && Te(b.from)) {
          let C = b.to - b.from, k = (function(A, E) {
            if (!Te(A.dataMin) || !Te(A.dataMax)) return 0;
            let P = A.toPixels(A.dataMin), B = A.toPixels(A.dataMax), z = A.coll === "xAxis" ? "x" : "y";
            return (A.toPixels(E[z] || 0) - P) / (B - P);
          })(g, p);
          b.updatePosition(k - C / 2, k + C / 2), as(b, "changed", { from: b.from, to: b.to, trigger: "scrollbar", DOMEvent: null });
        }
      } }, { doc: Xe } = K(), { removeElement: Us } = It, ns = class {
        constructor() {
          this.elements = [];
        }
        createElement() {
          let p = Xe.createElement.apply(Xe, arguments);
          return this.elements.push(p), p;
        }
        removeElement(p) {
          Us(p), this.elements.splice(this.elements.indexOf(p), 1);
        }
        destroyCreatedElements() {
          this.elements.forEach(function(p) {
            Us(p);
          }), this.elements = [];
        }
      }, { addEvent: Fa } = K(), $ = class {
        constructor() {
          this.eventRemovers = [];
        }
        addEvent() {
          let p = Fa.apply(K(), arguments);
          return this.eventRemovers.push({ element: arguments[0], remover: p }), p;
        }
        removeEvent(p) {
          let n = this.eventRemovers.map((u) => u.remover).indexOf(p);
          this.eventRemovers[n].remover(), this.eventRemovers.splice(n, 1);
        }
        removeAddedEvents() {
          this.eventRemovers.map((p) => p.remover).forEach((p) => p()), this.eventRemovers = [];
        }
      }, { fireEventOnWrappedOrUnwrappedElement: Ha } = qt, { getFakeMouseEvent: ls } = It, xe = class {
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
        initBase(p, n) {
          this.chart = p, this.eventProvider = new $(), this.domElementProvider = new ns(), this.proxyProvider = n, this.keyCodes = { left: 37, right: 39, up: 38, down: 40, enter: 13, space: 32, esc: 27, tab: 9, pageUp: 33, pageDown: 34, end: 35, home: 36 };
        }
        addEvent(p, n, u, g) {
          return this.eventProvider.addEvent(p, n, u, g);
        }
        createElement(p, n) {
          return this.domElementProvider.createElement(p, n);
        }
        fakeClickEvent(p) {
          Ha(p, ls("click"));
        }
        destroyBase() {
          this.domElementProvider.destroyCreatedElements(), this.eventProvider.removeAddedEvents();
        }
      }, { find: so } = K(), ne = class {
        constructor(p, n) {
          this.chart = p, this.keyCodeMap = n.keyCodeMap || [], this.validate = n.validate, this.init = n.init, this.terminate = n.terminate, this.response = { success: 1, prev: 2, next: 3, noHandler: 4, fail: 5 };
        }
        run(p) {
          let n = p.which || p.keyCode, u = this.response.noHandler, g = so(this.keyCodeMap, function(b) {
            return b[0].indexOf(n) > -1;
          });
          return g ? u = g[1].call(this, n, p) : n === 9 && (u = this.response[p.shiftKey ? "prev" : "next"]), u;
        }
      }, { unhideChartElementFromAT: ro, getChartTitle: ci } = qt, { doc: Bi } = K(), { stripHTMLTagsFromString: oo } = It, Wa = class extends xe {
        onChartUpdate() {
          this.handleSVGTitleElement(), this.setSVGContainerLabel(), this.setGraphicContainerAttrs(), this.setRenderToAttrs(), this.makeCreditsAccessible();
        }
        handleSVGTitleElement() {
          let p = this.chart, n = "highcharts-title-" + p.index, u = oo(p.langFormat("accessibility.svgContainerTitle", { chartTitle: ci(p) }));
          if (u.length) {
            let g = this.svgTitleElement = this.svgTitleElement || Bi.createElementNS("http://www.w3.org/2000/svg", "title");
            g.textContent = u, g.id = n, p.renderTo.insertBefore(g, p.renderTo.firstChild);
          }
        }
        setSVGContainerLabel() {
          let p = this.chart, n = p.langFormat("accessibility.svgContainerLabel", { chartTitle: ci(p) });
          p.renderer.box && n.length && p.renderer.box.setAttribute("aria-label", n);
        }
        setGraphicContainerAttrs() {
          let p = this.chart, n = p.langFormat("accessibility.graphicContainerLabel", { chartTitle: ci(p) });
          n.length && p.container.setAttribute("aria-label", n);
        }
        setRenderToAttrs() {
          let p = this.chart, n = p.options.accessibility.landmarkVerbosity !== "disabled", u = p.langFormat("accessibility.chartContainerLabel", { title: ci(p), chart: p });
          u && (p.renderTo.setAttribute("role", n ? "region" : "group"), p.renderTo.setAttribute("aria-label", u));
        }
        makeCreditsAccessible() {
          let p = this.chart, n = p.credits;
          n && (n.textStr && n.element.setAttribute("aria-label", p.langFormat("accessibility.credits", { creditsStr: oo(n.textStr, p.renderer.forExport) })), ro(p, n.element));
        }
        getKeyboardNavigation() {
          let p = this.chart;
          return new ne(p, { keyCodeMap: [], validate: function() {
            return !0;
          }, init: function() {
            let n = p.accessibility;
            n && n.keyboardNavigation.tabindexContainer.focus();
          } });
        }
        destroy() {
          this.chart.renderTo.setAttribute("aria-hidden", !0);
        }
      }, { addEvent: Se, pick: Xa } = K();
      (function(p) {
        let n = ["x", "y", "transform", "width", "height", "r", "d", "stroke-width"];
        function u() {
          let k = this.focusElement, A = this.options.accessibility.keyboardNavigation.focusBorder;
          k && (k.removeFocusBorder(), A.enabled && k.addFocusBorder(A.margin, { stroke: A.style.color, strokeWidth: A.style.lineWidth, r: A.style.borderRadius }));
        }
        function g(k, A) {
          let E = this.options.accessibility.keyboardNavigation.focusBorder, P = A || k.element;
          P && P.focus && (P.hcEvents && P.hcEvents.focusin || Se(P, "focusin", function() {
          }), P.focus(), E.hideBrowserFocusOutline && (P.style.outline = "none")), this.focusElement && this.focusElement.removeFocusBorder(), this.focusElement = k, Se(this, "endResize", function() {
            this.renderFocusBorder();
          }), this.renderFocusBorder();
        }
        function b(k, A) {
          this.focusBorder && this.removeFocusBorder();
          let E = this.getBBox(), P = Xa(k, 3), B = this.parentGroup, z = this.scaleX || B && B.scaleX, R = this.scaleY || B && B.scaleY, F = (z ? !R : R) ? Math.abs(z || R || 1) : (Math.abs(z || 1) + Math.abs(R || 1)) / 2, G = this.renderer.fontMetrics(this).h;
          E.x += this.translateX ? this.translateX : 0, E.y += this.translateY ? this.translateY : 0;
          let U = E.x - P, dt = E.y - P, nt = E.width + 2 * P, rt = E.height + 2 * P, ht = !!this.text;
          if (this.element.nodeName === "text" || ht) {
            let tt, et, ft = !!this.rotation, xt = ht ? { x: +!!ft, y: 0 } : (tt = 0, et = 0, this.attr("text-anchor") === "middle" ? tt = et = 0.5 : this.rotation ? tt = 0.25 : et = 0.75, { x: tt, y: et }), Xt = +this.attr("x"), St = +this.attr("y");
            if (isNaN(Xt) || (U = Xt - E.width * xt.x - P), isNaN(St) || (dt = St - (this.attr("text-anchor") === "start" ? G : E.height) * xt.y - P), ht && ft) {
              let Bt = nt;
              nt = rt, rt = Bt, isNaN(Xt) || (U = Xt - E.height * xt.x - P), isNaN(St) || (dt = St - E.width * xt.y - P);
            }
          }
          this.focusBorder = this.renderer.rect(U, dt, nt, rt, parseInt((A && A.r || 0).toString(), 10) / F).addClass("highcharts-focus-border").attr({ zIndex: 99 }).add(B), this.renderer.styledMode || this.focusBorder.attr({ stroke: A && A.stroke, "stroke-width": (A && A.strokeWidth || 0) / F }), (function(tt, ...et) {
            tt.focusBorderUpdateHooks || (tt.focusBorderUpdateHooks = {}, n.forEach((ft) => {
              let xt = ft + "Setter", Xt = tt[xt] || tt._defaultSetter;
              tt.focusBorderUpdateHooks[xt] = Xt, tt[xt] = function() {
                let St = Xt.apply(tt, arguments);
                return tt.addFocusBorder.apply(tt, et), St;
              };
            }));
          })(this, k, A), (function(tt) {
            if (tt.focusBorderDestroyHook) return;
            let et = tt.destroy;
            tt.destroy = function() {
              return tt.focusBorder && tt.focusBorder.destroy && tt.focusBorder.destroy(), et.apply(tt, arguments);
            }, tt.focusBorderDestroyHook = et;
          })(this);
        }
        function C() {
          var k;
          k = this, k.focusBorderUpdateHooks && (Object.keys(k.focusBorderUpdateHooks).forEach((A) => {
            let E = k.focusBorderUpdateHooks[A];
            E === k._defaultSetter ? delete k[A] : k[A] = E;
          }), delete k.focusBorderUpdateHooks), this.focusBorderDestroyHook && (this.destroy = this.focusBorderDestroyHook, delete this.focusBorderDestroyHook), this.focusBorder && (this.focusBorder.destroy(), delete this.focusBorder);
        }
        p.compose = function(k, A) {
          let E = k.prototype, P = A.prototype;
          E.renderFocusBorder || (E.renderFocusBorder = u, E.setFocusToElement = g), P.addFocusBorder || (P.addFocusBorder = b, P.removeFocusBorder = C);
        };
      })(ti || (ti = {}));
      let Vs = ti;
      var Ga = gt(660), qs = gt.n(Ga);
      let { doc: Ya } = K(), { addClass: ja, visuallyHideElement: ao } = It, { attr: no } = K(), At = class {
        constructor(p, n) {
          this.chart = p, this.domElementProvider = new ns(), this.announceRegion = this.addAnnounceRegion(n);
        }
        destroy() {
          this.domElementProvider.destroyCreatedElements();
        }
        announce(p) {
          qs().setElementHTML(this.announceRegion, p), this.clearAnnouncementRegionTimer && clearTimeout(this.clearAnnouncementRegionTimer), this.clearAnnouncementRegionTimer = setTimeout(() => {
            this.announceRegion.innerHTML = qs().emptyHTML, delete this.clearAnnouncementRegionTimer;
          }, 3e3);
        }
        addAnnounceRegion(p) {
          let n = this.chart.announcerContainer || this.createAnnouncerContainer(), u = this.domElementProvider.createElement("div");
          return no(u, { "aria-hidden": !1, "aria-live": p, "aria-atomic": !0 }), this.chart.styledMode ? ja(u, "highcharts-visually-hidden") : ao(u), n.appendChild(u), u;
        }
        createAnnouncerContainer() {
          let p = this.chart, n = Ya.createElement("div");
          return no(n, { "aria-hidden": !1, class: "highcharts-announcer-container" }), n.style.position = "relative", p.renderTo.insertBefore(n, p.renderTo.firstChild), p.announcerContainer = n, n;
        }
      }, { escapeStringForHTML: Ks, stripHTMLTagsFromString: Ua } = It;
      function lo(p) {
        return (p.annotations || []).reduce((n, u) => (u.options && u.options.visible !== !1 && (n = n.concat(u.labels)), n), []);
      }
      function ho(p) {
        return p.options && p.options.accessibility && p.options.accessibility.description || p.graphic && p.graphic.text && p.graphic.text.textStr || "";
      }
      function Ee(p) {
        let n = p.options && p.options.accessibility && p.options.accessibility.description;
        if (n) return n;
        let u = p.chart, g = ho(p), b = p.points, C = (B) => B.graphic && B.graphic.element && B.graphic.element.getAttribute("aria-label") || "", k = b.filter((B) => !!B.graphic).map((B) => {
          let z = B.accessibility && B.accessibility.valueDescription || C(B), R = B && B.series.name || "";
          return (R ? R + ", " : "") + "data point " + z;
        }).filter((B) => !!B), A = k.length, E = A > 1 ? "MultiplePoints" : A ? "SinglePoint" : "NoPoints", P = { annotationText: g, annotation: p, numPoints: A, annotationPoint: k[0], additionalAnnotationPoints: k.slice(1) };
        return u.langFormat("accessibility.screenReaderSection.annotations.description" + E, P);
      }
      function $s(p) {
        return lo(p).map((n) => {
          let u = Ks(Ua(Ee(n), p.renderer.forExport));
          return u ? `<li>${u}</li>` : "";
        });
      }
      let te = { getAnnotationsInfoHTML: function(p) {
        let n = p.annotations;
        return n && n.length ? `<ul style="list-style-type: none">${$s(p).join(" ")}</ul>` : "";
      }, getPointAnnotationTexts: function(p) {
        let n = lo(p.series.chart).filter((u) => u.points.indexOf(p) > -1);
        return n.length ? n.map((u) => `${ho(u)}`) : [];
      } }, { getAnnotationsInfoHTML: Va } = te, { getAxisDescription: Ni, getAxisRangeDescription: qa, getChartTitle: hs, unhideChartElementFromAT: Kt } = qt, { format: co } = Ce(), { doc: uo } = K(), { addClass: cs, getElement: yt, getHeadingTagNameForElement: po, stripHTMLTagsFromString: go, visuallyHideElement: Zs } = It, { attr: mo, pick: $t, replaceNested: Ka } = K();
      function fo(p) {
        return Ka(p, [/<([\w\-.:!]+)\b[^<>]*>\s*<\/\1>/g, ""]);
      }
      let $a = class extends xe {
        constructor() {
          super(...arguments), this.screenReaderSections = {};
        }
        init() {
          let p = this.chart, n = this;
          this.initRegionsDefinitions(), this.addEvent(p, "afterGetTableAST", function(u) {
            n.onDataTableCreated(u);
          }), this.addEvent(p, "afterViewData", function(u) {
            u.wasHidden && (n.dataTableDiv = u.element, setTimeout(function() {
              n.focusDataTable();
            }, 300));
          }), this.addEvent(p, "afterHideData", function() {
            n.viewDataTableButton && n.viewDataTableButton.setAttribute("aria-expanded", "false");
          }), p.exporting && this.addEvent(p, "afterPrint", function() {
            n.updateAllScreenReaderSections();
          }), this.announcer = new At(p, "assertive");
        }
        initRegionsDefinitions() {
          let p = this, n = this.chart.options.accessibility;
          this.screenReaderSections = { before: { element: null, buildContent: function(u) {
            let g = n.screenReaderSection.beforeChartFormatter;
            return g ? g(u) : p.defaultBeforeChartFormatter(u);
          }, insertIntoDOM: function(u, g) {
            g.renderTo.insertBefore(u, g.renderTo.firstChild);
          }, afterInserted: function() {
            p.sonifyButtonId !== void 0 && p.initSonifyButton(p.sonifyButtonId), p.dataTableButtonId !== void 0 && p.initDataTableButton(p.dataTableButtonId);
          } }, after: { element: null, buildContent: function(u) {
            let g = n.screenReaderSection.afterChartFormatter;
            return g ? g(u) : p.defaultAfterChartFormatter();
          }, insertIntoDOM: function(u, g) {
            g.renderTo.insertBefore(u, g.container.nextSibling);
          }, afterInserted: function() {
            p.chart.accessibility && n.keyboardNavigation.enabled && p.chart.accessibility.keyboardNavigation.updateExitAnchor();
          } } };
        }
        onChartRender() {
          this.linkedDescriptionElement = this.getLinkedDescriptionElement(), this.setLinkedDescriptionAttrs(), this.updateAllScreenReaderSections();
        }
        updateAllScreenReaderSections() {
          let p = this;
          Object.keys(this.screenReaderSections).forEach(function(n) {
            p.updateScreenReaderSection(n);
          });
        }
        getLinkedDescriptionElement() {
          let p = this.chart.options.accessibility.linkedDescription;
          if (!p) return;
          if (typeof p != "string") return p;
          let n = co(p, this.chart), u = uo.querySelectorAll(n);
          if (u.length === 1) return u[0];
        }
        setLinkedDescriptionAttrs() {
          let p = this.linkedDescriptionElement;
          p && (p.setAttribute("aria-hidden", "true"), cs(p, "highcharts-linked-description"));
        }
        updateScreenReaderSection(p) {
          let n = this.chart, u = this.screenReaderSections[p], g = u.buildContent(n), b = u.element = u.element || this.createElement("div"), C = b.firstChild || this.createElement("div");
          g ? (this.setScreenReaderSectionAttribs(b, p), qs().setElementHTML(C, g), b.appendChild(C), u.insertIntoDOM(b, n), n.styledMode ? cs(C, "highcharts-visually-hidden") : Zs(C), Kt(n, C), u.afterInserted && u.afterInserted()) : (b.parentNode && b.parentNode.removeChild(b), u.element = null);
        }
        setScreenReaderSectionAttribs(p, n) {
          let u = this.chart, g = u.langFormat("accessibility.screenReaderSection." + n + "RegionLabel", { chart: u, chartTitle: hs(u) });
          mo(p, { id: `highcharts-screen-reader-region-${n}-${u.index}`, "aria-label": g || void 0 }), p.style.position = "relative", g && p.setAttribute("role", u.options.accessibility.landmarkVerbosity === "all" ? "region" : "group");
        }
        defaultBeforeChartFormatter() {
          let p = this.chart, n = p.options.accessibility.screenReaderSection.beforeChartFormat;
          if (!n) return "";
          let u = this.getAxesDescription(), g = p.sonify && p.options.sonification && p.options.sonification.enabled, b = "highcharts-a11y-sonify-data-btn-" + p.index, C = "hc-linkto-highcharts-data-table-" + p.index, k = Va(p), A = p.langFormat("accessibility.screenReaderSection.annotations.heading", { chart: p }), E = { headingTagName: po(p.renderTo), chartTitle: hs(p), typeDescription: this.getTypeDescriptionText(), chartSubtitle: this.getSubtitleText(), chartLongdesc: this.getLongdescText(), xAxisDescription: u.xAxis, yAxisDescription: u.yAxis, playAsSoundButton: g ? this.getSonifyButtonText(b) : "", viewTableButton: p.exporting?.getCSV ? this.getDataTableButtonText(C) : "", annotationsTitle: k ? A : "", annotationsList: k }, P = Ae.i18nFormat(n, E, p);
          return this.dataTableButtonId = C, this.sonifyButtonId = b, fo(P);
        }
        defaultAfterChartFormatter() {
          let p = this.chart, n = p.options.accessibility.screenReaderSection.afterChartFormat;
          if (!n) return "";
          let u = { endOfChartMarker: this.getEndOfChartMarkerText() };
          return fo(Ae.i18nFormat(n, u, p));
        }
        getLinkedDescription() {
          let p = this.linkedDescriptionElement;
          return go(p && p.innerHTML || "", this.chart.renderer.forExport);
        }
        getLongdescText() {
          let p = this.chart.options, n = p.caption, u = n && n.text, g = this.getLinkedDescription();
          return p.accessibility.description || g || u || "";
        }
        getTypeDescriptionText() {
          let p = this.chart;
          return p.types ? p.options.accessibility.typeDescription || (function(n, u) {
            let g = u[0], b = n.series && n.series[0] || {}, C = n.mapView && n.mapView.geoMap && n.mapView.geoMap.title, k = { numSeries: n.series.length, numPoints: b.points && b.points.length, chart: n, mapTitle: C };
            if (!g) return n.langFormat("accessibility.chartTypes.emptyChart", k);
            if (g === "map" || g === "tiledwebmap") return k.mapTitle ? n.langFormat("accessibility.chartTypes.mapTypeDescription", k) : n.langFormat("accessibility.chartTypes.unknownMap", k);
            if (n.types.length > 1) return n.langFormat("accessibility.chartTypes.combinationChart", k);
            let A = u[0], E = n.langFormat("accessibility.seriesTypeDescriptions." + A, k), P = n.series && n.series.length < 2 ? "Single" : "Multiple";
            return (n.langFormat("accessibility.chartTypes." + A + P, k) || n.langFormat("accessibility.chartTypes.default" + P, k)) + (E ? " " + E : "");
          })(p, p.types) : "";
        }
        getDataTableButtonText(p) {
          let n = this.chart;
          return '<button id="' + p + '">' + n.langFormat("accessibility.table.viewAsDataTableButtonText", { chart: n, chartTitle: hs(n) }) + "</button>";
        }
        getSonifyButtonText(p) {
          let n = this.chart;
          return n.options.sonification && n.options.sonification.enabled === !1 ? "" : '<button id="' + p + '">' + n.langFormat("accessibility.sonification.playAsSoundButtonText", { chart: n, chartTitle: hs(n) }) + "</button>";
        }
        getSubtitleText() {
          let p = this.chart.options.subtitle;
          return go(p && p.text || "", this.chart.renderer.forExport);
        }
        getEndOfChartMarkerText() {
          let p = yt(`highcharts-end-of-chart-marker-${this.chart.index}`);
          if (p) return p.outerHTML;
          let n = this.chart, u = n.langFormat("accessibility.screenReaderSection.endOfChartMarker", { chart: n });
          return '<div id="highcharts-end-of-chart-marker-' + n.index + '">' + u + "</div>";
        }
        onDataTableCreated(p) {
          let n = this.chart;
          if (n.options.accessibility.enabled) {
            this.viewDataTableButton && this.viewDataTableButton.setAttribute("aria-expanded", "true");
            let u = p.tree.attributes || {};
            u.tabindex = -1, u.summary = n.langFormat("accessibility.table.tableSummary", { chart: n }), p.tree.attributes = u;
          }
        }
        focusDataTable() {
          let p = this.dataTableDiv, n = p && p.getElementsByTagName("table")[0];
          n && n.focus && n.focus();
        }
        initSonifyButton(p) {
          let n = this.sonifyButton = yt(p), u = this.chart, g = (b) => {
            n && (n.setAttribute("aria-hidden", "true"), n.setAttribute("aria-label", "")), b.preventDefault(), b.stopPropagation();
            let C = u.langFormat("accessibility.sonification.playAsSoundClickAnnouncement", { chart: u });
            this.announcer.announce(C), setTimeout(() => {
              n && (n.removeAttribute("aria-hidden"), n.removeAttribute("aria-label")), u.sonify && u.sonify();
            }, 1e3);
          };
          n && u && (n.setAttribute("tabindex", -1), n.onclick = function(b) {
            (u.options.accessibility && u.options.accessibility.screenReaderSection.onPlayAsSoundClick || g).call(this, b, u);
          });
        }
        initDataTableButton(p) {
          let n = this.viewDataTableButton = yt(p), u = this.chart, g = p.replace("hc-linkto-", "");
          n && (mo(n, { tabindex: -1, "aria-expanded": !!yt(g) }), n.onclick = u.options.accessibility.screenReaderSection.onViewDataTableClick || function() {
            u.exporting?.viewData();
          });
        }
        getAxesDescription() {
          let p = this.chart, n = function(A, E) {
            let P = p[A];
            return P.length > 1 || P[0] && $t(P[0].options.accessibility && P[0].options.accessibility.enabled, E);
          }, u = !!p.types && 0 > p.types.indexOf("map") && 0 > p.types.indexOf("treemap") && 0 > p.types.indexOf("tilemap"), g = !!p.hasCartesianSeries, b = n("xAxis", !p.angular && g && u), C = n("yAxis", g && u), k = {};
          return b && (k.xAxis = this.getAxisDescriptionText("xAxis")), C && (k.yAxis = this.getAxisDescriptionText("yAxis")), k;
        }
        getAxisDescriptionText(p) {
          let n = this.chart, u = n[p];
          return n.langFormat("accessibility.axis." + p + "Description" + (u.length > 1 ? "Plural" : "Singular"), { chart: n, names: u.map(function(g) {
            return Ni(g);
          }), ranges: u.map(function(g) {
            return qa(g);
          }), numAxes: u.length });
        }
        destroy() {
          this.announcer && this.announcer.destroy();
        }
      }, { attr: Za } = K(), { getChartTitle: _s, unhideChartElementFromAT: xo } = qt, { getFakeMouseEvent: ds } = It;
      function us(p) {
        return p.exporting?.svgElements?.[0];
      }
      class Ri extends xe {
        init() {
          let n = this.chart, u = this;
          this.addEvent(n, "exportMenuShown", function() {
            u.onMenuShown();
          }), this.addEvent(n, "exportMenuHidden", function() {
            u.onMenuHidden();
          }), this.createProxyGroup();
        }
        onMenuHidden() {
          let n = this.chart.exporting?.contextMenuEl;
          n && n.setAttribute("aria-hidden", "true"), this.setExportButtonExpandedState("false");
        }
        onMenuShown() {
          let n = this.chart, u = n.exporting?.contextMenuEl;
          u && (this.addAccessibleContextMenuAttribs(), xo(n, u)), this.setExportButtonExpandedState("true");
        }
        setExportButtonExpandedState(n) {
          this.exportButtonProxy && this.exportButtonProxy.innerElement.setAttribute("aria-expanded", n);
        }
        onChartRender() {
          let n = this.chart, u = n.focusElement, g = n.accessibility;
          this.proxyProvider.clearGroup("chartMenu"), this.proxyMenuButton(), this.exportButtonProxy && u && u === n.exporting?.group && (u.focusBorder ? n.setFocusToElement(u, this.exportButtonProxy.innerElement) : g && g.keyboardNavigation.tabindexContainer.focus());
        }
        proxyMenuButton() {
          let n = this.chart, u = this.proxyProvider, g = us(n);
          (function(b) {
            let C = b.options.exporting, k = us(b);
            return !!(C && C.enabled !== !1 && C.accessibility && C.accessibility.enabled && k && k.element);
          })(n) && g && (this.exportButtonProxy = u.addProxyElement("chartMenu", { click: g }, "button", { "aria-label": n.langFormat("accessibility.exporting.menuButtonLabel", { chart: n, chartTitle: _s(n) }), "aria-expanded": !1, title: n.options.lang.contextButtonTitle || null }));
        }
        createProxyGroup() {
          this.chart && this.proxyProvider && this.proxyProvider.addGroup("chartMenu");
        }
        addAccessibleContextMenuAttribs() {
          let n = this.chart, u = n.exporting?.divElements;
          if (u && u.length) {
            u.forEach((b) => {
              b && (b.tagName !== "LI" || b.children && b.children.length ? b.setAttribute("aria-hidden", "true") : b.setAttribute("tabindex", -1));
            });
            let g = u[0] && u[0].parentNode;
            g && Za(g, { "aria-hidden": void 0, "aria-label": n.langFormat("accessibility.exporting.chartMenuLabel", { chart: n }), role: "list" });
          }
        }
        getKeyboardNavigation() {
          let n = this.keyCodes, u = this.chart, g = this;
          return new ne(u, { keyCodeMap: [[[n.left, n.up], function() {
            return g.onKbdPrevious(this);
          }], [[n.right, n.down], function() {
            return g.onKbdNext(this);
          }], [[n.enter, n.space], function() {
            return g.onKbdClick(this);
          }]], validate: function() {
            return !!u.exporting && u.options.exporting?.buttons?.contextButton.enabled !== !1 && u.options.exporting.enabled !== !1 && (u.options.exporting.accessibility?.enabled || !1) !== !1;
          }, init: function() {
            let b = g.exportButtonProxy, C = g.chart.exporting?.group;
            b && C && u.setFocusToElement(C, b.innerElement);
          }, terminate: function() {
            u.hideExportMenu();
          } });
        }
        onKbdPrevious(n) {
          let u = this.chart, g = u.options.accessibility, b = n.response, C = u.highlightedExportItemIx || 0;
          for (; C--; ) if (u.highlightExportItem(C)) return b.success;
          return g.keyboardNavigation.wrapAround ? (u.highlightLastExportItem(), b.success) : b.prev;
        }
        onKbdNext(n) {
          let u = this.chart, g = u.options.accessibility, b = n.response;
          for (let C = (u.highlightedExportItemIx || 0) + 1; C < (u.exporting?.divElements?.length || 0); ++C) if (u.highlightExportItem(C)) return b.success;
          return g.keyboardNavigation.wrapAround ? (u.highlightExportItem(0), b.success) : b.next;
        }
        onKbdClick(n) {
          let u = this.chart, g = u.highlightedExportItemIx !== void 0 && u.exporting?.divElements?.[u.highlightedExportItemIx], b = us(u)?.element;
          return u.exporting?.openMenu ? g && this.fakeClickEvent(g) : (b && this.fakeClickEvent(b), u.highlightExportItem(0)), n.response.success;
        }
      }
      (function(p) {
        function n() {
          let C = us(this);
          if (C) {
            let k = C.element;
            k.onclick && (k.onclick = function() {
              ds("click");
            });
          }
        }
        function u() {
          let C = this.exporting?.divElements;
          C && this.exporting?.contextMenuEl && this.exporting?.openMenu && (C.forEach((k) => {
            k && k.className === "highcharts-menu-item" && k.onmouseout && k.onmouseout(ds("mouseout"));
          }), this.highlightedExportItemIx = 0, this.exporting.contextMenuEl.hideMenu(), this.container.focus());
        }
        function g(C) {
          let k = this.exporting?.divElements?.[C], A = this.highlightedExportItemIx !== void 0 && this.exporting?.divElements?.[this.highlightedExportItemIx];
          if (k && k.tagName === "LI" && !(k.children && k.children.length)) {
            let E = !!(this.renderTo.getElementsByTagName("g")[0] || {}).focus;
            return k.focus && E && k.focus(), A && A.onmouseout && A.onmouseout(ds("mouseout")), k.onmouseover && k.onmouseover(ds("mouseover")), this.highlightedExportItemIx = C, !0;
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
        p.compose = function(C) {
          let k = C.prototype;
          k.hideExportMenu || (k.hideExportMenu = u, k.highlightExportItem = g, k.highlightLastExportItem = b, k.showExportMenu = n);
        };
      })(Ri || (Ri = {}));
      let ps = Ri, { doc: Rt, win: Js } = K(), { addEvent: _a, defined: Ja, fireEvent: Qa } = K(), { getElement: tn, simulatedEventTarget: bo } = It;
      class Qs {
        constructor(n, u) {
          this.currentModuleIx = NaN, this.modules = [], this.init(n, u);
        }
        init(n, u) {
          let g = this.eventProvider = new $();
          this.chart = n, this.components = u, this.modules = [], this.currentModuleIx = 0, this.update(), g.addEvent(this.tabindexContainer, "keydown", (b) => this.onKeydown(b)), g.addEvent(this.tabindexContainer, "focus", (b) => this.onFocus(b)), ["mouseup", "touchend"].forEach((b) => g.addEvent(Rt, b, (C) => this.onMouseUp(C))), ["mousedown", "touchstart"].forEach((b) => g.addEvent(n.renderTo, b, () => {
            this.isClickingChart = !0;
          }));
        }
        update(n) {
          let u = this.chart.options.accessibility, g = u && u.keyboardNavigation, b = this.components;
          this.updateContainerTabindex(), g && g.enabled && n && n.length ? (this.modules = n.reduce(function(C, k) {
            let A = b[k].getKeyboardNavigation();
            return C.concat(A);
          }, []), this.updateExitAnchor()) : (this.modules = [], this.currentModuleIx = 0, this.removeExitAnchor());
        }
        updateExitAnchor() {
          let n = tn(`highcharts-end-of-chart-marker-${this.chart.index}`);
          this.removeExitAnchor(), n ? (this.makeElementAnExitAnchor(n), this.exitAnchor = n) : this.createExitAnchor();
        }
        move(n) {
          let u = this.modules && this.modules[this.currentModuleIx];
          u && u.terminate && u.terminate(n), this.chart.focusElement && this.chart.focusElement.removeFocusBorder(), this.currentModuleIx += n;
          let g = this.modules && this.modules[this.currentModuleIx];
          if (g) {
            if (g.validate && !g.validate()) return this.move(n);
            if (g.init) return g.init(n), !0;
          }
          return this.currentModuleIx = 0, this.exiting = !0, n > 0 ? this.exitAnchor && this.exitAnchor.focus() : this.tabindexContainer.focus(), !1;
        }
        onFocus(n) {
          let u = this.chart, g = n.relatedTarget && u.container.contains(n.relatedTarget), b = u.options.accessibility, C = b && b.keyboardNavigation;
          if (C && C.enabled && !this.exiting && !this.tabbingInBackwards && !this.isClickingChart && !g) {
            let k = this.getFirstValidModuleIx();
            k !== null && (this.currentModuleIx = k, this.modules[k].init(1));
          }
          this.keyboardReset = !1, this.exiting = !1;
        }
        onMouseUp(n) {
          if (delete this.isClickingChart, !this.keyboardReset && n.relatedTarget !== bo) {
            let u = this.chart;
            if (!n.target || !u.container.contains(n.target)) {
              let g = this.modules && this.modules[this.currentModuleIx || 0];
              g && g.terminate && g.terminate(), this.currentModuleIx = 0;
            }
            u.focusElement && (u.focusElement.removeFocusBorder(), delete u.focusElement), this.keyboardReset = !0;
          }
        }
        onKeydown(n) {
          let u, g = n || Js.event, b = this.modules && this.modules.length && this.modules[this.currentModuleIx], C = g.target;
          if ((!C || C.nodeName !== "INPUT" || C.classList.contains("highcharts-a11y-proxy-element")) && (this.keyboardReset = !1, this.exiting = !1, b)) {
            let k = b.run(g);
            k === b.response.success ? u = !0 : k === b.response.prev ? u = this.move(-1) : k === b.response.next && (u = this.move(1)), u && (g.preventDefault(), g.stopPropagation());
          }
        }
        updateContainerTabindex() {
          let n, u = this.chart.options.accessibility, g = u && u.keyboardNavigation, b = !(g && g.enabled === !1), C = this.chart, k = C.container;
          C.renderTo.hasAttribute("tabindex") ? (k.removeAttribute("tabindex"), n = C.renderTo) : n = k, this.tabindexContainer = n;
          let A = n.getAttribute("tabindex");
          b && !A ? n.setAttribute("tabindex", "0") : b || C.container.removeAttribute("tabindex");
        }
        createExitAnchor() {
          let n = this.chart, u = this.exitAnchor = Rt.createElement("div");
          n.renderTo.appendChild(u), this.makeElementAnExitAnchor(u);
        }
        makeElementAnExitAnchor(n) {
          let u = this.tabindexContainer.getAttribute("tabindex") || 0;
          n.setAttribute("class", "highcharts-exit-anchor"), n.setAttribute("tabindex", u), n.setAttribute("aria-hidden", !1), this.addExitAnchorEventsToEl(n);
        }
        removeExitAnchor() {
          if (this.exitAnchor) {
            let n = this.eventProvider.eventRemovers.find((u) => u.element === this.exitAnchor);
            n && Ja(n.remover) && this.eventProvider.removeEvent(n.remover), this.exitAnchor.parentNode && this.exitAnchor.parentNode.removeChild(this.exitAnchor), delete this.exitAnchor;
          }
        }
        addExitAnchorEventsToEl(n) {
          let u = this.chart, g = this;
          this.eventProvider.addEvent(n, "focus", function(b) {
            let C = b || Js.event, k = !(C.relatedTarget && u.container.contains(C.relatedTarget) || g.exiting);
            if (u.focusElement && delete u.focusElement, k) {
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
          for (let u = 0; u < n; ++u) {
            let g = this.modules[u];
            if (!g.validate || g.validate()) return u;
          }
          return null;
        }
        destroy() {
          this.removeExitAnchor(), this.eventProvider.removeAddedEvents(), this.chart.container.removeAttribute("tabindex");
        }
      }
      (function(p) {
        function n() {
          let g = this;
          Qa(this, "dismissPopupContent", {}, function() {
            g.tooltip && g.tooltip.hide(0), g.hideExportMenu();
          });
        }
        function u(g) {
          (g.which || g.keyCode) === 27 && K().charts && K().charts.forEach((b) => {
            b && b.dismissPopupContent && b.dismissPopupContent();
          });
        }
        p.compose = function(g) {
          ps.compose(g);
          let b = g.prototype;
          return !b.dismissPopupContent && (b.dismissPopupContent = n, Rt && _a(Rt, "keydown", u)), g;
        };
      })(Qs || (Qs = {}));
      let tr = Qs;
      var yo = gt(632), er = gt.n(yo);
      let { animObject: ir } = K(), { doc: gs } = K(), { addEvent: en, fireEvent: Ct, isNumber: vo, pick: ko, syncTimeout: sn } = K(), { getChartTitle: rn } = qt, { stripHTMLTagsFromString: wo, addClass: on, removeClass: Mo } = It;
      function sr(p) {
        let n = p.legend && p.legend.allItems, u = p.options.legend.accessibility || {}, g = p.colorAxis && p.colorAxis.some((b) => !b.dataClasses || !b.dataClasses.length);
        return !!(n && n.length && !g && u.enabled !== !1);
      }
      function rr(p, n) {
        let u = n.legendItem || {};
        for (let g of (n.setState(p ? "hover" : "", !0), ["group", "label", "symbol"])) {
          let b = u[g], C = b && b.element || b;
          C && Ct(C, p ? "mouseover" : "mouseout");
        }
      }
      class or extends xe {
        constructor() {
          super(...arguments), this.highlightedLegendItemIx = NaN, this.proxyGroup = null;
        }
        init() {
          let n = this;
          this.recreateProxies(), this.addEvent(er(), "afterScroll", function() {
            this.chart === n.chart && (n.proxyProvider.updateGroupProxyElementPositions("legend"), n.updateLegendItemProxyVisibility(), n.highlightedLegendItemIx > -1 && this.chart.highlightLegendItem(n.highlightedLegendItemIx));
          }), this.addEvent(er(), "afterPositionItem", function(u) {
            this.chart === n.chart && this.chart.renderer && n.updateProxyPositionForItem(u.item);
          }), this.addEvent(er(), "afterRender", function() {
            this.chart === n.chart && this.chart.renderer && n.recreateProxies() && sn(() => n.proxyProvider.updateGroupProxyElementPositions("legend"), ir(ko(this.chart.renderer.globalAnimation, !0)).duration);
          });
        }
        updateLegendItemProxyVisibility() {
          let n, u = this.chart, g = u.legend, b = g.allItems || [], C = g.currentPage || 1, k = g.clipHeight || 0;
          b.forEach((A) => {
            if (A.a11yProxyElement) {
              let E = g.pages && g.pages.length, P = A.a11yProxyElement.element, B = !1;
              if (n = A.legendItem || {}, E) {
                let z = n.pageIx || 0;
                B = (n.y || 0) + (n.label ? Math.round(n.label.getBBox().height) : 0) - g.pages[z] > k || z !== C - 1;
              }
              B ? u.styledMode ? on(P, "highcharts-a11y-invisible") : P.style.visibility = "hidden" : (Mo(P, "highcharts-a11y-invisible"), P.style.visibility = "");
            }
          });
        }
        onChartRender() {
          sr(this.chart) || this.removeProxies();
        }
        highlightAdjacentLegendPage(n) {
          let u = this.chart, g = u.legend, b = (g.currentPage || 1) + n, C = g.pages || [];
          if (b > 0 && b <= C.length) {
            let k = 0;
            for (let A of g.allItems) ((A.legendItem || {}).pageIx || 0) + 1 === b && u.highlightLegendItem(k) && (this.highlightedLegendItemIx = k), ++k;
          }
        }
        updateProxyPositionForItem(n) {
          n.a11yProxyElement && n.a11yProxyElement.refreshPosition();
        }
        recreateProxies() {
          let n = gs.activeElement, u = this.proxyGroup, g = n && u && u.contains(n);
          return this.removeProxies(), !!sr(this.chart) && (this.addLegendProxyGroup(), this.proxyLegendItems(), this.updateLegendItemProxyVisibility(), this.updateLegendTitle(), g && this.chart.highlightLegendItem(this.highlightedLegendItemIx), !0);
        }
        removeProxies() {
          this.proxyProvider.removeGroup("legend");
        }
        updateLegendTitle() {
          let n = this.chart, u = wo((n.legend && n.legend.options.title && n.legend.options.title.text || "").replace(/<br ?\/?>/g, " "), n.renderer.forExport), g = n.langFormat("accessibility.legend.legendLabel" + (u ? "" : "NoTitle"), { chart: n, legendTitle: u, chartTitle: rn(n) });
          this.proxyProvider.updateGroupAttrs("legend", { "aria-label": g });
        }
        addLegendProxyGroup() {
          let n = this.chart.options.accessibility.landmarkVerbosity === "all" ? "region" : null;
          this.proxyGroup = this.proxyProvider.addGroup("legend", "ul", { "aria-label": "_placeholder_", role: n });
        }
        proxyLegendItems() {
          let n, u = this;
          ((this.chart.legend || {}).allItems || []).forEach((g) => {
            (n = g.legendItem || {}).label && n.label.element && u.proxyLegendItem(g);
          });
        }
        proxyLegendItem(n) {
          let u = n.legendItem || {}, g = n.legendItem?.label, b = g?.element, C = u.label?.styles?.textOverflow === "ellipsis";
          if (!u.label || !u.group) return;
          let k = this.chart.langFormat("accessibility.legend.legendItem", { chart: this.chart, itemName: wo(n.name, this.chart.renderer.forExport), item: n }), A = { tabindex: -1, "aria-pressed": n.visible, "aria-label": k, title: "" };
          C && (b.textContent || "").indexOf("…") !== -1 && (A.title = g?.textStr);
          let E = u.group.div ? u.label : u.group;
          n.a11yProxyElement = this.proxyProvider.addProxyElement("legend", { click: u.label, visual: E.element }, "button", A);
        }
        getKeyboardNavigation() {
          let n = this.keyCodes, u = this, g = this.chart;
          return new ne(g, { keyCodeMap: [[[n.left, n.right, n.up, n.down], function(b) {
            return u.onKbdArrowKey(this, b);
          }], [[n.enter, n.space], function() {
            return u.onKbdClick(this);
          }], [[n.pageDown, n.pageUp], function(b) {
            let C = b === n.pageDown ? 1 : -1;
            return u.highlightAdjacentLegendPage(C), this.response.success;
          }]], validate: function() {
            return u.shouldHaveLegendNavigation();
          }, init: function() {
            g.highlightLegendItem(0), u.highlightedLegendItemIx = 0;
          }, terminate: function() {
            u.highlightedLegendItemIx = -1, g.legend.allItems.forEach((b) => rr(!1, b));
          } });
        }
        onKbdArrowKey(n, u) {
          let { keyCodes: { left: g, up: b }, highlightedLegendItemIx: C, chart: k } = this, A = k.legend.allItems.length, E = k.options.accessibility.keyboardNavigation.wrapAround, P = u === g || u === b ? -1 : 1;
          return k.highlightLegendItem(C + P) ? this.highlightedLegendItemIx += P : E && A > 1 && (this.highlightedLegendItemIx = P > 0 ? 0 : A - 1, k.highlightLegendItem(this.highlightedLegendItemIx)), n.response.success;
        }
        onKbdClick(n) {
          let u = this.chart.legend.allItems[this.highlightedLegendItemIx];
          return u && u.a11yProxyElement && u.a11yProxyElement.click(), n.response.success;
        }
        shouldHaveLegendNavigation() {
          if (!sr(this.chart)) return !1;
          let n = this.chart, u = (n.options.legend || {}).accessibility || {};
          return !!(n.legend.display && u.keyboardNavigation && u.keyboardNavigation.enabled);
        }
        destroy() {
          this.removeProxies();
        }
      }
      (function(p) {
        function n(g) {
          let b = this.legend.allItems, C = this.accessibility && this.accessibility.components.legend.highlightedLegendItemIx, k = b[g], A = k?.legendItem || {};
          if (k) {
            vo(C) && b[C] && rr(!1, b[C]);
            var E = this.legend;
            let P = (E.allItems[g].legendItem || {}).pageIx, B = E.currentPage;
            P !== void 0 && P + 1 !== B && E.scroll(1 + P - B);
            let z = A.label, R = k.a11yProxyElement && k.a11yProxyElement.innerElement;
            return z && z.element && R && this.setFocusToElement(z, R), rr(!0, k), !0;
          }
          return !1;
        }
        function u(g) {
          let b = this.chart.options.accessibility, C = g.item;
          b.enabled && C && C.a11yProxyElement && C.a11yProxyElement.innerElement.setAttribute("aria-pressed", g.visible ? "true" : "false");
        }
        p.compose = function(g, b) {
          let C = g.prototype;
          C.highlightLegendItem || (C.highlightLegendItem = n, en(b, "afterColorizeItem", u));
        };
      })(or || (or = {}));
      let Co = or;
      var ms = gt(532), ar = gt.n(ms);
      let { isTouchDevice: nr } = K(), { addEvent: Pe, merge: lr, pick: Jt } = K(), zi = [];
      function an() {
        this.navigator && this.navigator.setBaseSeries(null, !1);
      }
      function nn() {
        let p, n, u, g = this.legend, b = this.navigator;
        if (b) {
          p = g && g.options, n = b.xAxis, u = b.yAxis;
          let { scrollbarHeight: C, scrollButtonSize: k } = b;
          this.inverted ? (b.left = b.opposite ? this.chartWidth - C - b.height : this.spacing[3] + C, b.top = this.plotTop + k) : (b.left = Jt(n.left, this.plotLeft + k), b.top = b.navigatorOptions.top || this.chartHeight - b.height - C - (this.scrollbar?.options.margin || 0) - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (p && p.verticalAlign === "bottom" && p.layout !== "proximate" && p.enabled && !p.floating ? g.legendHeight + Jt(p.margin, 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0)), n && u && (this.inverted ? n.options.left = u.options.left = b.left : n.options.top = u.options.top = b.top, n.setAxisSize(), u.setAxisSize());
        }
      }
      function ln(p) {
        !this.navigator && !this.scroller && (this.options.navigator.enabled || this.options.scrollbar.enabled) && (this.scroller = this.navigator = new Qe(this), Jt(p.redraw, !0) && this.redraw(p.animation));
      }
      function hr() {
        let p = this.options;
        (p.navigator.enabled || p.scrollbar.enabled) && (this.scroller = this.navigator = new Qe(this));
      }
      function fs() {
        let p = this.options, n = p.navigator, u = p.rangeSelector;
        if ((n && n.enabled || u && u.enabled) && (!nr && this.zooming.type === "x" || nr && this.zooming.pinchType === "x")) return !1;
      }
      function hn(p) {
        let n = p.navigator;
        if (n && p.xAxis[0]) {
          let u = p.xAxis[0].getExtremes();
          n.render(u.min, u.max);
        }
      }
      function cn(p) {
        let n = p.options.navigator || {}, u = p.options.scrollbar || {};
        !this.navigator && !this.scroller && (n.enabled || u.enabled) && (lr(!0, this.options.navigator, n), lr(!0, this.options.scrollbar, u), delete p.options.navigator, delete p.options.scrollbar);
      }
      let Ao = { compose: function(p, n) {
        if (K().pushUnique(zi, p)) {
          let u = p.prototype;
          Qe = n, u.callbacks.push(hn), Pe(p, "afterAddSeries", an), Pe(p, "afterSetChartSize", nn), Pe(p, "afterUpdate", ln), Pe(p, "beforeRender", hr), Pe(p, "beforeShowResetZoom", fs), Pe(p, "update", cn);
        }
      } }, { isTouchDevice: To } = K(), { addEvent: ei, correctFloat: So, defined: di, isNumber: Eo, pick: Po } = K();
      function dn() {
        this.navigatorAxis || (this.navigatorAxis = new dr(this));
      }
      function cr(p) {
        let n, u = this.chart, g = u.options, b = g.navigator, C = this.navigatorAxis, k = u.zooming.pinchType, A = g.rangeSelector, E = u.zooming.type;
        if (this.isXAxis && (b?.enabled || A?.enabled)) {
          if (E === "y" && p.trigger === "zoom") n = !1;
          else if ((p.trigger === "zoom" && E === "xy" || To && k === "xy") && this.options.range) {
            let P = C.previousZoom;
            di(p.min) ? C.previousZoom = [this.min, this.max] : P && (p.min = P[0], p.max = P[1], C.previousZoom = void 0);
          }
        }
        n !== void 0 && p.preventDefault();
      }
      class dr {
        static compose(n) {
          n.keepProps.includes("navigatorAxis") || (n.keepProps.push("navigatorAxis"), ei(n, "init", dn), ei(n, "setExtremes", cr));
        }
        constructor(n) {
          this.axis = n;
        }
        destroy() {
          this.axis = void 0;
        }
        toFixedRange(n, u, g, b) {
          let C = this.axis, k = (C.pointRange || 0) / 2, A = Po(g, C.translate(n, !0, !C.horiz)), E = Po(b, C.translate(u, !0, !C.horiz));
          return di(g) || (A = So(A + k)), di(b) || (E = So(E - k)), Eo(A) && Eo(E) || (A = E = void 0), { min: A, max: E };
        }
      }
      var xs = gt(620), Oo = gt.n(xs), be = gt(512), Lo = gt.n(be);
      let { parse: Fi } = Oo(), { seriesTypes: ur } = Lo(), pr = { height: 40, margin: 22, maskInside: !0, handles: { width: 7, borderRadius: 0, height: 15, symbols: ["navigator-handle", "navigator-handle"], enabled: !0, lineWidth: 1, backgroundColor: "#f2f2f2", borderColor: "#999999" }, maskFill: Fi("#667aff").setOpacity(0.3).get(), outlineColor: "#999999", outlineWidth: 1, series: { type: ur.areaspline === void 0 ? "line" : "areaspline", fillOpacity: 0.05, lineWidth: 1, compare: null, sonification: { enabled: !1 }, dataGrouping: { approximation: "average", enabled: !0, groupPixelWidth: 2, firstAnchor: "firstPoint", anchor: "middle", lastAnchor: "lastPoint", units: [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2, 3, 4]], ["week", [1, 2, 3]], ["month", [1, 3, 6]], ["year", null]] }, dataLabels: { enabled: !1, zIndex: 2 }, id: "highcharts-navigator-series", className: "highcharts-navigator-series", lineColor: null, marker: { enabled: !1 }, threshold: null }, xAxis: { className: "highcharts-navigator-xaxis", tickLength: 0, lineWidth: 0, gridLineColor: "#e6e6e6", id: "navigator-x-axis", gridLineWidth: 1, tickPixelInterval: 200, labels: { align: "left", style: { color: "#000000", fontSize: "0.7em", opacity: 0.6, textOutline: "2px contrast" }, x: 3, y: -4 }, crosshair: !1 }, yAxis: { className: "highcharts-navigator-yaxis", gridLineWidth: 0, startOnTick: !1, endOnTick: !1, minPadding: 0.1, id: "navigator-y-axis", maxPadding: 0.1, labels: { enabled: !1 }, crosshair: !1, title: { text: void 0 }, tickLength: 0, tickWidth: 0 } }, { defined: un, isNumber: pn, pick: Rl } = K(), gn = { rect: function(p, n, u, g, b) {
        return b?.r ? (function(C, k, A, E, P) {
          let B = P?.r || 0;
          return [["M", C + B, k], ["L", C + A - B, k], ["A", B, B, 0, 0, 1, C + A, k + B], ["L", C + A, k + E - B], ["A", B, B, 0, 0, 1, C + A - B, k + E], ["L", C + B, k + E], ["A", B, B, 0, 0, 1, C, k + E - B], ["L", C, k + B], ["A", B, B, 0, 0, 1, C + B, k], ["Z"]];
        })(p, n, u, g, b) : [["M", p, n], ["L", p + u, n], ["L", p + u, n + g], ["L", p, n + g], ["Z"]];
      } }, { relativeLength: Do } = K(), gr = { "navigator-handle": function(p, n, u, g, b = {}) {
        let C = b.width ? b.width / 2 : u, k = Do(b.borderRadius || 0, Math.min(2 * C, g));
        return [["M", -1.5, (g = b.height || g) / 2 - 3.5], ["L", -1.5, g / 2 + 4.5], ["M", 0.5, g / 2 - 3.5], ["L", 0.5, g / 2 + 4.5], ...gn.rect(-C - 1, 0.5, 2 * C + 1, g, { r: k })];
      } };
      var ui = gt(608), Oe = gt.n(ui);
      let { defined: Hi } = K(), { defaultOptions: mn } = K(), { composed: fn } = K(), { getRendererType: xn } = Oe(), { setFixedRange: Io } = { setFixedRange: function(p) {
        let n = this.xAxis[0];
        Hi(n.dataMax) && Hi(n.dataMin) && p ? this.fixedRange = Math.min(p, n.dataMax - n.dataMin) : this.fixedRange = p;
      } }, { addEvent: Ft, extend: ge, pushUnique: Bo } = K();
      function bn() {
        this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, !1);
      }
      let No = { compose: function(p, n, u) {
        dr.compose(n), Bo(fn, "Navigator") && (p.prototype.setFixedRange = Io, ge(xn().prototype.symbols, gr), ge(mn, { navigator: pr }), Ft(u, "afterUpdate", bn));
      } }, { composed: Wi } = K(), { addEvent: bs, correctFloat: Xi, defined: Ge, pick: Ye, pushUnique: Ro } = K();
      (function(p) {
        let n;
        function u(k) {
          let A = Ye(k.options?.min, k.min), E = Ye(k.options?.max, k.max);
          return { axisMin: A, axisMax: E, scrollMin: Ge(k.dataMin) ? Math.min(A, k.min ?? 1 / 0, k.dataMin, k.threshold ?? 1 / 0) : A, scrollMax: k.treeGrid?.adjustedMax ?? (Ge(k.dataMax) ? Math.max(E, k.max ?? -1 / 0, k.dataMax, k.threshold ?? -1 / 0) : E) };
        }
        function g() {
          let k = this.scrollbar, A = k && !k.options.opposite, E = this.horiz ? 2 : A ? 3 : 1;
          k && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[E] += k.size + (k.options.margin || 0));
        }
        function b() {
          let k = this;
          k.options?.scrollbar?.enabled && (k.options.scrollbar.vertical = !k.horiz, k.options.startOnTick = k.options.endOnTick = !1, k.scrollbar = new n(k.chart.renderer, k.options.scrollbar, k.chart), bs(k.scrollbar, "changed", function(A) {
            let E, P, { axisMin: B, axisMax: z, scrollMin: R, scrollMax: F } = u(k), G = k.toPixels(R), U = k.toPixels(F) - G;
            if (Ge(B) && Ge(z)) if (k.horiz && !k.reversed || !k.horiz && k.reversed ? (E = Math.min(F, k.toValue(G + U * this.to)), P = Math.max(R, k.toValue(G + U * this.from))) : (E = Math.min(F, k.toValue(G + U * (1 - this.from))), P = Math.max(R, k.toValue(G + U * (1 - this.to)))), this.shouldUpdateExtremes(A.DOMType)) {
              let dt = A.DOMType !== "mousemove" && A.DOMType !== "touchmove" && void 0;
              k.setExtremes(Xi(P), Xi(E), !0, dt, A);
            } else this.setRange(this.from, this.to);
          }));
        }
        function C() {
          let k, A, E, { scrollMin: P, scrollMax: B } = u(this), z = this.scrollbar, R = (this.axisTitleMargin || 0) + (this.titleOffset || 0), F = this.chart.scrollbarsOffsets, G = this.options.margin || 0;
          if (z && F) {
            if (this.horiz) this.opposite || (F[1] += R), z.position(this.left, this.top + this.height + 2 + F[1] - (this.opposite ? G : 0), this.width, this.height), this.opposite || (F[1] += G), k = 1;
            else {
              let U;
              this.opposite && (F[0] += R), U = z.options.opposite ? this.left + this.width + 2 + F[0] - (this.opposite ? 0 : G) : this.opposite ? 0 : G, z.position(U, this.top, this.width, this.height), this.opposite && (F[0] += G), k = 0;
            }
            if (F[k] += z.size + (z.options.margin || 0), isNaN(P) || isNaN(B) || !Ge(this.min) || !Ge(this.max) || Ge(this.dataMin) && this.dataMin === this.dataMax) z.setRange(0, 1);
            else if (this.min === this.max) {
              let U = this.pointRange / (this.dataMax + 1);
              A = U * this.min, E = U * (this.max + 1), z.setRange(A, E);
            } else A = (this.toPixels(this.min) - this.toPixels(P)) / (this.toPixels(B) - this.toPixels(P)), E = (this.toPixels(this.max) - this.toPixels(P)) / (this.toPixels(B) - this.toPixels(P)), this.horiz && !this.reversed || !this.horiz && this.reversed ? z.setRange(A, E) : z.setRange(1 - E, 1 - A);
          }
        }
        p.compose = function(k, A) {
          Ro(Wi, "Axis.Scrollbar") && (n = A, bs(k, "afterGetOffset", g), bs(k, "afterInit", b), bs(k, "afterRender", C));
        };
      })(Mt || (Mt = {}));
      let yn = Mt, ii = { height: 10, barBorderRadius: 5, buttonBorderRadius: 0, buttonsEnabled: !1, liveRedraw: void 0, margin: void 0, minWidth: 6, opposite: !0, step: 0.2, zIndex: 3, barBackgroundColor: "#cccccc", barBorderWidth: 0, barBorderColor: "#cccccc", buttonArrowColor: "#333333", buttonBackgroundColor: "#e6e6e6", buttonBorderColor: "#cccccc", buttonBorderWidth: 1, rifleColor: "none", trackBackgroundColor: "rgba(255, 255, 255, 0.001)", trackBorderColor: "#cccccc", trackBorderRadius: 5, trackBorderWidth: 1 }, { defaultOptions: mr } = K(), { composed: zo } = K(), { addEvent: fr, correctFloat: je, crisp: pi, defined: Fo, destroyObjectProperties: Ho, extend: xr, fireEvent: Gi, merge: Wo, pick: Yi, pushUnique: vn, removeEvent: kn } = K();
      class Ue {
        static compose(n) {
          yn.compose(n, Ue), vn(zo, "Scrollbar") && xr(mr, { scrollbar: ii });
        }
        static swapXY(n, u) {
          return u && n.forEach((g) => {
            let b, C = g.length;
            for (let k = 0; k < C; k += 2) typeof (b = g[k + 1]) == "number" && (g[k + 1] = g[k + 2], g[k + 2] = b);
          }), n;
        }
        constructor(n, u, g) {
          this._events = [], this.chartX = 0, this.chartY = 0, this.from = 0, this.scrollbarButtons = [], this.scrollbarLeft = 0, this.scrollbarStrokeWidth = 1, this.scrollbarTop = 0, this.size = 0, this.to = 0, this.trackBorderWidth = 1, this.x = 0, this.y = 0, this.init(n, u, g);
        }
        addEvents() {
          let n = this.options.inverted ? [1, 0] : [0, 1], u = this.scrollbarButtons, g = this.scrollbarGroup.element, b = this.track.element, C = this.mouseDownHandler.bind(this), k = this.mouseMoveHandler.bind(this), A = this.mouseUpHandler.bind(this), E = [[u[n[0]].element, "click", this.buttonToMinClick.bind(this)], [u[n[1]].element, "click", this.buttonToMaxClick.bind(this)], [b, "click", this.trackClick.bind(this)], [g, "mousedown", C], [g.ownerDocument, "mousemove", k], [g.ownerDocument, "mouseup", A], [g, "touchstart", C], [g.ownerDocument, "touchmove", k], [g.ownerDocument, "touchend", A]];
          E.forEach(function(P) {
            fr.apply(null, P);
          }), this._events = E;
        }
        buttonToMaxClick(n) {
          let u = (this.to - this.from) * Yi(this.options.step, 0.2);
          this.updatePosition(this.from + u, this.to + u), Gi(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: n });
        }
        buttonToMinClick(n) {
          let u = je(this.to - this.from) * Yi(this.options.step, 0.2);
          this.updatePosition(je(this.from - u), je(this.to - u)), Gi(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: n });
        }
        cursorToScrollbarPosition(n) {
          let u = this.options, g = u.minWidth > this.calculatedWidth ? u.minWidth : 0;
          return { chartX: (n.chartX - this.x - this.xOffset) / (this.barWidth - g), chartY: (n.chartY - this.y - this.yOffset) / (this.barWidth - g) };
        }
        destroy() {
          let n = this, u = n.chart.scroller;
          n.removeEvents(), ["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"].forEach(function(g) {
            n[g] && n[g].destroy && (n[g] = n[g].destroy());
          }), u && n === u.scrollbar && (u.scrollbar = null, Ho(u.scrollbarButtons));
        }
        drawScrollbarButton(n) {
          let u = this.renderer, g = this.scrollbarButtons, b = this.options, C = this.size, k = u.g().add(this.group);
          if (g.push(k), b.buttonsEnabled) {
            let A = u.rect().addClass("highcharts-scrollbar-button").add(k);
            this.chart.styledMode || A.attr({ stroke: b.buttonBorderColor, "stroke-width": b.buttonBorderWidth, fill: b.buttonBackgroundColor }), A.attr(A.crisp({ x: -0.5, y: -0.5, width: C, height: C, r: b.buttonBorderRadius }, A.strokeWidth()));
            let E = u.path(Ue.swapXY([["M", C / 2 + (n ? -1 : 1), C / 2 - 3], ["L", C / 2 + (n ? -1 : 1), C / 2 + 3], ["L", C / 2 + (n ? 2 : -2), C / 2]], b.vertical)).addClass("highcharts-scrollbar-arrow").add(g[n]);
            this.chart.styledMode || E.attr({ fill: b.buttonArrowColor });
          }
        }
        init(n, u, g) {
          this.scrollbarButtons = [], this.renderer = n, this.userOptions = u, this.options = Wo(ii, mr.scrollbar, u), this.options.margin = Yi(this.options.margin, 10), this.chart = g, this.size = Yi(this.options.size, this.options.height), u.enabled && (this.render(), this.addEvents());
        }
        mouseDownHandler(n) {
          let u = this.chart.pointer?.normalize(n) || n, g = this.cursorToScrollbarPosition(u);
          this.chartX = g.chartX, this.chartY = g.chartY, this.initPositions = [this.from, this.to], this.grabbedCenter = !0;
        }
        mouseMoveHandler(n) {
          let u, g = this.chart.pointer?.normalize(n) || n, b = this.options.vertical ? "chartY" : "chartX", C = this.initPositions || [];
          this.grabbedCenter && (!n.touches || n.touches[0][b] !== 0) && (u = this.cursorToScrollbarPosition(g)[b] - this[b], this.hasDragged = !0, this.updatePosition(C[0] + u, C[1] + u), this.hasDragged && Gi(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMType: n.type, DOMEvent: n }));
        }
        mouseUpHandler(n) {
          this.hasDragged && Gi(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMType: n.type, DOMEvent: n }), this.grabbedCenter = this.hasDragged = this.chartX = this.chartY = null;
        }
        position(n, u, g, b) {
          let { buttonsEnabled: C, margin: k = 0, vertical: A } = this.options, E = this.rendered ? "animate" : "attr", P = b, B = 0;
          this.group.show(), this.x = n, this.y = u + this.trackBorderWidth, this.width = g, this.height = b, this.xOffset = P, this.yOffset = B, A ? (this.width = this.yOffset = g = B = this.size, this.xOffset = P = 0, this.yOffset = B = C ? this.size : 0, this.barWidth = b - (C ? 2 * g : 0), this.x = n += k) : (this.height = b = this.size, this.xOffset = P = C ? this.size : 0, this.barWidth = g - (C ? 2 * b : 0), this.y = this.y + k), this.group[E]({ translateX: n, translateY: this.y }), this.track[E]({ width: g, height: b }), this.scrollbarButtons[1][E]({ translateX: A ? 0 : g - P, translateY: A ? b - B : 0 });
        }
        removeEvents() {
          this._events.forEach(function(n) {
            kn.apply(null, n);
          }), this._events.length = 0;
        }
        render() {
          let n = this.renderer, u = this.options, g = this.size, b = this.chart.styledMode, C = n.g("scrollbar").attr({ zIndex: u.zIndex }).hide().add();
          this.group = C, this.track = n.rect().addClass("highcharts-scrollbar-track").attr({ r: u.trackBorderRadius || 0, height: g, width: g }).add(C), b || this.track.attr({ fill: u.trackBackgroundColor, stroke: u.trackBorderColor, "stroke-width": u.trackBorderWidth });
          let k = this.trackBorderWidth = this.track.strokeWidth();
          this.track.attr({ x: -pi(0, k), y: -pi(0, k) }), this.scrollbarGroup = n.g().add(C), this.scrollbar = n.rect().addClass("highcharts-scrollbar-thumb").attr({ height: g - k, width: g - k, r: u.barBorderRadius || 0 }).add(this.scrollbarGroup), this.scrollbarRifles = n.path(Ue.swapXY([["M", -3, g / 4], ["L", -3, 2 * g / 3], ["M", 0, g / 4], ["L", 0, 2 * g / 3], ["M", 3, g / 4], ["L", 3, 2 * g / 3]], u.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup), b || (this.scrollbar.attr({ fill: u.barBackgroundColor, stroke: u.barBorderColor, "stroke-width": u.barBorderWidth }), this.scrollbarRifles.attr({ stroke: u.rifleColor, "stroke-width": 1 })), this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(), this.scrollbarGroup.translate(-pi(0, this.scrollbarStrokeWidth), -pi(0, this.scrollbarStrokeWidth)), this.drawScrollbarButton(0), this.drawScrollbarButton(1);
        }
        setRange(n, u) {
          let g, b, C = this.options, k = C.vertical, A = C.minWidth, E = this.barWidth, P = !this.rendered || this.hasDragged || this.chart.navigator && this.chart.navigator.hasDragged ? "attr" : "animate";
          if (!Fo(E)) return;
          let B = E * Math.min(u, 1);
          g = Math.ceil(E * (n = Math.max(n, 0))), this.calculatedWidth = b = je(B - g), b < A && (g = (E - A + b) * n, b = A);
          let z = Math.floor(g + this.xOffset + this.yOffset), R = b / 2 - 0.5;
          this.from = n, this.to = u, k ? (this.scrollbarGroup[P]({ translateY: z }), this.scrollbar[P]({ height: b }), this.scrollbarRifles[P]({ translateY: R }), this.scrollbarTop = z, this.scrollbarLeft = 0) : (this.scrollbarGroup[P]({ translateX: z }), this.scrollbar[P]({ width: b }), this.scrollbarRifles[P]({ translateX: R }), this.scrollbarLeft = z, this.scrollbarTop = 0), b <= 12 ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(), C.showFull === !1 && (n <= 0 && u >= 1 ? this.group.hide() : this.group.show()), this.rendered = !0;
        }
        shouldUpdateExtremes(n) {
          return Yi(this.options.liveRedraw, K().svg && !K().isTouchDevice && !this.chart.boosted) || n === "mouseup" || n === "touchend" || !Fo(n);
        }
        trackClick(n) {
          let u = this.chart.pointer?.normalize(n) || n, g = this.to - this.from, b = this.y + this.scrollbarTop, C = this.x + this.scrollbarLeft;
          this.options.vertical && u.chartY > b || !this.options.vertical && u.chartX > C ? this.updatePosition(this.from + g, this.to + g) : this.updatePosition(this.from - g, this.to - g), Gi(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: n });
        }
        update(n) {
          this.destroy(), this.init(this.chart.renderer, Wo(!0, this.options, n), this.chart);
        }
        updatePosition(n, u) {
          u > 1 && (n = je(1 - je(u - n)), u = 1), n < 0 && (u = je(u - n), n = 0), this.from = n, this.to = u;
        }
      }
      Ue.defaultOptions = ii;
      var wn = gt(540), Mn = gt.n(wn);
      let { defaultOptions: br } = K(), { isTouchDevice: Xo } = K(), { prototype: { symbols: si } } = Mn(), { addEvent: Wt, clamp: yr, correctFloat: ys, defined: gi, destroyObjectProperties: Cn, erase: Ve, extend: vr, find: vs, fireEvent: mi, isArray: Go, isNumber: me, merge: Le, pick: Ht, removeEvent: ks, splat: qe } = K();
      function ws(p, ...n) {
        let u = [].filter.call(n, me);
        if (u.length) return Math[p].apply(0, u);
      }
      class ye {
        static compose(n, u, g) {
          Ao.compose(n, ye), No.compose(n, u, g);
        }
        constructor(n) {
          this.isDirty = !1, this.scrollbarHeight = 0, this.init(n);
        }
        drawHandle(n, u, g, b) {
          let C = this.navigatorOptions.handles.height;
          this.handles[u][b](g ? { translateX: Math.round(this.left + this.height / 2), translateY: Math.round(this.top + parseInt(n, 10) + 0.5 - C) } : { translateX: Math.round(this.left + parseInt(n, 10)), translateY: Math.round(this.top + this.height / 2 - C / 2 - 1) });
        }
        drawOutline(n, u, g, b) {
          let C = this.navigatorOptions.maskInside, k = this.outline.strokeWidth(), A = k / 2, E = k % 2 / 2, P = this.scrollButtonSize, B = this.size, z = this.top, R = this.height, F = z - A, G = z + R, U = this.left, dt, nt;
          g ? (dt = z + u + E, u = z + n + E, nt = [["M", U + R, z - P - E], ["L", U + R, dt], ["L", U, dt], ["M", U, u], ["L", U + R, u], ["L", U + R, z + B + P]], C && nt.push(["M", U + R, dt - A], ["L", U + R, u + A])) : (U -= P, n += U + P - E, u += U + P - E, nt = [["M", U, F], ["L", n, F], ["L", n, G], ["M", u, G], ["L", u, F], ["L", U + B + 2 * P, F]], C && nt.push(["M", n - A, F], ["L", u + A, F])), this.outline[b]({ d: nt });
        }
        drawMasks(n, u, g, b) {
          let C, k, A, E, P = this.left, B = this.top, z = this.height;
          g ? (A = [P, P, P], E = [B, B + n, B + u], k = [z, z, z], C = [n, u - n, this.size - u]) : (A = [P, P + n, P + u], E = [B, B, B], k = [n, u - n, this.size - u], C = [z, z, z]), this.shades.forEach((R, F) => {
            R[b]({ x: A[F], y: E[F], width: k[F], height: C[F] });
          });
        }
        renderElements() {
          let n = this, u = n.navigatorOptions, g = u.maskInside, b = n.chart, C = b.inverted, k = b.renderer, A = { cursor: C ? "ns-resize" : "ew-resize" }, E = n.navigatorGroup ?? (n.navigatorGroup = k.g("navigator").attr({ zIndex: 8, visibility: "hidden" }).add());
          if ([!g, g, !g].forEach((P, B) => {
            let z = n.shades[B] ?? (n.shades[B] = k.rect().addClass("highcharts-navigator-mask" + (B === 1 ? "-inside" : "-outside")).add(E));
            b.styledMode || (z.attr({ fill: P ? u.maskFill : "rgba(0,0,0,0)" }), B === 1 && z.css(A));
          }), n.outline || (n.outline = k.path().addClass("highcharts-navigator-outline").add(E)), b.styledMode || n.outline.attr({ "stroke-width": u.outlineWidth, stroke: u.outlineColor }), u.handles?.enabled) {
            let P = u.handles, { height: B, width: z } = P;
            [0, 1].forEach((R) => {
              let F = P.symbols[R];
              if (n.handles[R] && n.handles[R].symbolUrl === F) {
                if (!n.handles[R].isImg && n.handles[R].symbolName !== F) {
                  let G = si[F].call(si, -z / 2 - 1, 0, z, B);
                  n.handles[R].attr({ d: G }), n.handles[R].symbolName = F;
                }
              } else n.handles[R]?.destroy(), n.handles[R] = k.symbol(F, -z / 2 - 1, 0, z, B, P), n.handles[R].attr({ zIndex: 7 - R }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][R]).add(E), n.addMouseEvents();
              b.inverted && n.handles[R].attr({ rotation: 90, rotationOriginX: Math.floor(-z / 2), rotationOriginY: (B + z) / 2 }), b.styledMode || n.handles[R].attr({ fill: P.backgroundColor, stroke: P.borderColor, "stroke-width": P.lineWidth, width: P.width, height: P.height, x: -z / 2 - 1, y: 0 }).css(A);
            });
          }
        }
        update(n, u = !1) {
          let g = this.chart, b = g.options.chart.inverted !== g.scrollbar?.options.vertical;
          if (Le(!0, g.options.navigator, n), this.navigatorOptions = g.options.navigator || {}, this.setOpposite(), gi(n.enabled) || b) return this.destroy(), this.navigatorEnabled = n.enabled || this.navigatorEnabled, this.init(g);
          if (this.navigatorEnabled && (this.isDirty = !0, n.adaptToUpdatedData === !1 && this.baseSeries.forEach((C) => {
            ks(C, "updatedData", this.updatedDataHandler);
          }, this), n.adaptToUpdatedData && this.baseSeries.forEach((C) => {
            C.eventsToUnbind.push(Wt(C, "updatedData", this.updatedDataHandler));
          }, this), (n.series || n.baseSeries) && this.setBaseSeries(void 0, !1), n.height || n.xAxis || n.yAxis)) {
            this.height = n.height ?? this.height;
            let C = this.getXAxisOffsets();
            this.xAxis.update({ ...n.xAxis, offsets: C, [g.inverted ? "width" : "height"]: this.height, [g.inverted ? "height" : "width"]: void 0 }, !1), this.yAxis.update({ ...n.yAxis, [g.inverted ? "width" : "height"]: this.height }, !1);
          }
          u && g.redraw();
        }
        render(n, u, g, b) {
          let C = this.chart, k = this.xAxis, A = k.pointRange || 0, E = k.navigatorAxis.fake ? C.xAxis[0] : k, P = this.navigatorEnabled, B = this.rendered, z = C.inverted, R = C.xAxis[0].minRange, F = C.xAxis[0].options.maxRange, G = this.scrollButtonSize, U, dt, nt, rt = this.scrollbarHeight, ht, tt;
          if (this.hasDragged && !gi(g)) return;
          if (this.isDirty && this.renderElements(), n = ys(n - A / 2), u = ys(u + A / 2), !me(n) || !me(u)) if (B) g = 0, b = Ht(k.width, E.width);
          else return;
          this.left = Ht(k.left, C.plotLeft + G + (z ? C.plotWidth : 0));
          let et = this.size = ht = Ht(k.len, (z ? C.plotHeight : C.plotWidth) - 2 * G);
          U = z ? rt : ht + 2 * G, g = Ht(g, k.toPixels(n, !0)), b = Ht(b, k.toPixels(u, !0)), me(g) && Math.abs(g) !== 1 / 0 || (g = 0, b = U);
          let ft = k.toValue(g, !0), xt = k.toValue(b, !0), Xt = Math.abs(ys(xt - ft));
          Xt < R ? this.grabbedLeft ? g = k.toPixels(xt - R - A, !0) : this.grabbedRight && (b = k.toPixels(ft + R + A, !0)) : gi(F) && ys(Xt - A) > F && (this.grabbedLeft ? g = k.toPixels(xt - F - A, !0) : this.grabbedRight && (b = k.toPixels(ft + F + A, !0))), this.zoomedMax = yr(Math.max(g, b), 0, et), this.zoomedMin = yr(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(g, b), 0, et), this.range = this.zoomedMax - this.zoomedMin, et = Math.round(this.zoomedMax);
          let St = Math.round(this.zoomedMin);
          P && (this.navigatorGroup.attr({ visibility: "inherit" }), tt = B && !this.hasDragged ? "animate" : "attr", this.drawMasks(St, et, z, tt), this.drawOutline(St, et, z, tt), this.navigatorOptions.handles.enabled && (this.drawHandle(St, 0, z, tt), this.drawHandle(et, 1, z, tt))), this.scrollbar && (z ? (nt = this.top - G, dt = this.left - rt + (P || !E.opposite ? 0 : (E.titleOffset || 0) + E.axisTitleMargin), rt = ht + 2 * G) : (nt = this.top + (P ? this.height : -rt), dt = this.left - G), this.scrollbar.position(dt, nt, U, rt), this.scrollbar.setRange(this.zoomedMin / (ht || 1), this.zoomedMax / (ht || 1))), this.rendered = !0, this.isDirty = !1, mi(this, "afterRender");
        }
        addMouseEvents() {
          let n = this, u = n.chart, g = u.container, b = [], C, k;
          n.mouseMoveHandler = C = function(A) {
            n.onMouseMove(A);
          }, n.mouseUpHandler = k = function(A) {
            n.onMouseUp(A);
          }, (b = n.getPartsEvents("mousedown")).push(Wt(u.renderTo, "mousemove", C), Wt(g.ownerDocument, "mouseup", k), Wt(u.renderTo, "touchmove", C), Wt(g.ownerDocument, "touchend", k)), b.concat(n.getPartsEvents("touchstart")), n.eventsToUnbind = b, n.series && n.series[0] && b.push(Wt(n.series[0].xAxis, "foundExtremes", function() {
            u.navigator.modifyNavigatorAxisExtremes();
          }));
        }
        getPartsEvents(n) {
          let u = this, g = [];
          return ["shades", "handles"].forEach(function(b) {
            u[b].forEach(function(C, k) {
              g.push(Wt(C.element, n, function(A) {
                u[b + "Mousedown"](A, k);
              }));
            });
          }), g;
        }
        shadesMousedown(n, u) {
          n = this.chart.pointer?.normalize(n) || n;
          let g = this.chart, b = this.xAxis, C = this.zoomedMin, k = this.size, A = this.range, E = this.left, P = n.chartX, B, z, R, F;
          g.inverted && (P = n.chartY, E = this.top), u === 1 ? (this.grabbedCenter = P, this.fixedWidth = A, this.dragOffset = P - C) : (F = P - E - A / 2, u === 0 ? F = Math.max(0, F) : u === 2 && F + A >= k && (F = k - A, this.reversedExtremes ? (F -= A, z = this.getUnionExtremes().dataMin) : B = this.getUnionExtremes().dataMax), F !== C && (this.fixedWidth = A, gi((R = b.navigatorAxis.toFixedRange(F, F + A, z, B)).min) && mi(this, "setRange", { min: Math.min(R.min, R.max), max: Math.max(R.min, R.max), redraw: !0, eventArguments: { trigger: "navigator" } })));
        }
        handlesMousedown(n, u) {
          n = this.chart.pointer?.normalize(n) || n;
          let g = this.chart, b = g.xAxis[0], C = this.reversedExtremes;
          u === 0 ? (this.grabbedLeft = !0, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = C ? b.min : b.max) : (this.grabbedRight = !0, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = C ? b.max : b.min), g.setFixedRange(void 0);
        }
        onMouseMove(n) {
          let u = this, g = u.chart, b = u.navigatorSize, C = u.range, k = u.dragOffset, A = g.inverted, E = u.left, P;
          (!n.touches || n.touches[0].pageX !== 0) && (P = (n = g.pointer?.normalize(n) || n).chartX, A && (E = u.top, P = n.chartY), u.grabbedLeft ? (u.hasDragged = !0, u.render(0, 0, P - E, u.otherHandlePos)) : u.grabbedRight ? (u.hasDragged = !0, u.render(0, 0, u.otherHandlePos, P - E)) : u.grabbedCenter && (u.hasDragged = !0, P < k ? P = k : P > b + k - C && (P = b + k - C), u.render(0, 0, P - k, P - k + C)), u.hasDragged && u.scrollbar && Ht(u.scrollbar.options.liveRedraw, !Xo && !this.chart.boosted) && (n.DOMType = n.type, setTimeout(function() {
            u.onMouseUp(n);
          }, 0)));
        }
        onMouseUp(n) {
          let u, g, b, C, k, A, E = this.chart, P = this.xAxis, B = this.scrollbar, z = n.DOMEvent || n, R = E.inverted, F = this.rendered && !this.hasDragged ? "animate" : "attr";
          (this.hasDragged && (!B || !B.hasDragged) || n.trigger === "scrollbar") && (b = this.getUnionExtremes(), this.zoomedMin === this.otherHandlePos ? C = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (k = this.fixedExtreme), this.zoomedMax === this.size && (k = this.reversedExtremes ? b.dataMin : b.dataMax), this.zoomedMin === 0 && (C = this.reversedExtremes ? b.dataMax : b.dataMin), gi((A = P.navigatorAxis.toFixedRange(this.zoomedMin, this.zoomedMax, C, k)).min) && mi(this, "setRange", { min: Math.min(A.min, A.max), max: Math.max(A.min, A.max), redraw: !0, animation: !this.hasDragged && null, eventArguments: { trigger: "navigator", triggerOp: "navigator-drag", DOMEvent: z } })), n.DOMType !== "mousemove" && n.DOMType !== "touchmove" && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null), this.navigatorEnabled && me(this.zoomedMin) && me(this.zoomedMax) && (g = Math.round(this.zoomedMin), u = Math.round(this.zoomedMax), this.shades && this.drawMasks(g, u, R, F), this.outline && this.drawOutline(g, u, R, F), this.navigatorOptions.handles.enabled && Object.keys(this.handles).length === this.handles.length && (this.drawHandle(g, 0, R, F), this.drawHandle(u, 1, R, F)));
        }
        removeEvents() {
          this.eventsToUnbind && (this.eventsToUnbind.forEach(function(n) {
            n();
          }), this.eventsToUnbind = void 0), this.removeBaseSeriesEvents();
        }
        removeBaseSeriesEvents() {
          let n = this.baseSeries || [];
          this.navigatorEnabled && n[0] && (this.navigatorOptions.adaptToUpdatedData !== !1 && n.forEach(function(u) {
            ks(u, "updatedData", this.updatedDataHandler);
          }, this), n[0].xAxis && ks(n[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
        }
        getXAxisOffsets() {
          return this.chart.inverted ? [this.scrollButtonSize, 0, -this.scrollButtonSize, 0] : [0, -this.scrollButtonSize, 0, this.scrollButtonSize];
        }
        init(n) {
          let u = n.options, g = u.navigator || {}, b = g.enabled, C = u.scrollbar || {}, k = C.enabled, A = b && g.height || 0, E = k && C.height || 0, P = C.buttonsEnabled && E || 0;
          this.handles = [], this.shades = [], this.chart = n, this.setBaseSeries(), this.height = A, this.scrollbarHeight = E, this.scrollButtonSize = P, this.scrollbarEnabled = k, this.navigatorEnabled = b, this.navigatorOptions = g, this.scrollbarOptions = C, this.setOpposite();
          let B = this, z = B.baseSeries, R = n.xAxis.length, F = n.yAxis.length, G = z && z[0] && z[0].xAxis || n.xAxis[0] || { options: {} };
          if (n.isDirtyBox = !0, B.navigatorEnabled) {
            let U = this.getXAxisOffsets();
            B.xAxis = new (ar())(n, Le({ breaks: G.options.breaks, ordinal: G.options.ordinal, overscroll: G.options.overscroll }, g.xAxis, { type: "datetime", yAxis: g.yAxis?.id, index: R, isInternal: !0, offset: 0, keepOrdinalPadding: !0, startOnTick: !1, endOnTick: !1, minPadding: G.options.ordinal ? 0 : G.options.minPadding, maxPadding: G.options.ordinal ? 0 : G.options.maxPadding, zoomEnabled: !1 }, n.inverted ? { offsets: U, width: A } : { offsets: U, height: A }), "xAxis"), B.yAxis = new (ar())(n, Le(g.yAxis, { alignTicks: !1, offset: 0, index: F, isInternal: !0, reversed: Ht(g.yAxis && g.yAxis.reversed, n.yAxis[0] && n.yAxis[0].reversed, !1), zoomEnabled: !1 }, n.inverted ? { width: A } : { height: A }), "yAxis"), z || g.series.data ? B.updateNavigatorSeries(!1) : n.series.length === 0 && (B.unbindRedraw = Wt(n, "beforeRedraw", function() {
              n.series.length > 0 && !B.series && (B.setBaseSeries(), B.unbindRedraw());
            })), B.reversedExtremes = n.inverted && !B.xAxis.reversed || !n.inverted && B.xAxis.reversed, B.renderElements(), B.addMouseEvents();
          } else B.xAxis = { chart: n, navigatorAxis: { fake: !0 }, translate: function(U, dt) {
            let nt = n.xAxis[0], rt = nt.getExtremes(), ht = nt.len - 2 * P, tt = ws("min", nt.options.min, rt.dataMin), et = ws("max", nt.options.max, rt.dataMax) - tt;
            return dt ? U * et / ht + tt : ht * (U - tt) / et;
          }, toPixels: function(U) {
            return this.translate(U);
          }, toValue: function(U) {
            return this.translate(U, !0);
          } }, B.xAxis.navigatorAxis.axis = B.xAxis, B.xAxis.navigatorAxis.toFixedRange = dr.prototype.toFixedRange.bind(B.xAxis.navigatorAxis);
          if (n.options.scrollbar?.enabled) {
            let U = Le(n.options.scrollbar, { vertical: n.inverted });
            me(U.margin) || (U.margin = n.inverted ? -3 : 3), n.scrollbar = B.scrollbar = new Ue(n.renderer, U, n), Wt(B.scrollbar, "changed", function(dt) {
              let nt = B.size, rt = nt * this.to, ht = nt * this.from;
              B.hasDragged = B.scrollbar.hasDragged, B.render(0, 0, ht, rt), this.shouldUpdateExtremes(dt.DOMType) && setTimeout(function() {
                B.onMouseUp(dt);
              });
            });
          }
          B.addBaseSeriesEvents(), B.addChartEvents();
        }
        setOpposite() {
          let n = this.navigatorOptions, u = this.navigatorEnabled, g = this.chart;
          this.opposite = Ht(n.opposite, !!(!u && g.inverted));
        }
        getUnionExtremes(n) {
          let u, g = this.chart.xAxis[0], b = this.chart.time, C = this.xAxis, k = C.options, A = g.options;
          return n && g.dataMin === null || (u = { dataMin: Ht(b.parse(k?.min), ws("min", b.parse(A.min), g.dataMin, C.dataMin, C.min)), dataMax: Ht(b.parse(k?.max), ws("max", b.parse(A.max), g.dataMax, C.dataMax, C.max)) }), u;
        }
        setBaseSeries(n, u) {
          let g = this.chart, b = this.baseSeries = [];
          n = n || g.options && g.options.navigator.baseSeries || (g.series.length ? vs(g.series, (C) => !C.options.isInternal).index : 0), (g.series || []).forEach((C, k) => {
            !C.options.isInternal && (C.options.showInNavigator || (k === n || C.options.id === n) && C.options.showInNavigator !== !1) && b.push(C);
          }), this.xAxis && !this.xAxis.navigatorAxis.fake && this.updateNavigatorSeries(!0, u);
        }
        updateNavigatorSeries(n, u) {
          let g = this, b = g.chart, C = g.baseSeries, k = { enableMouseTracking: !1, index: null, linkedTo: null, group: "nav", padXAxis: !1, xAxis: this.navigatorOptions.xAxis?.id, yAxis: this.navigatorOptions.yAxis?.id, showInLegend: !1, stacking: void 0, isInternal: !0, states: { inactive: { opacity: 1 } } }, A = g.series = (g.series || []).filter((R) => {
            let F = R.baseSeries;
            return !(0 > C.indexOf(F)) || (F && (ks(F, "updatedData", g.updatedDataHandler), delete F.navigatorSeries), R.chart && R.destroy(), !1);
          }), E, P, B = g.navigatorOptions.series, z;
          C && C.length && C.forEach((R) => {
            let F = R.navigatorSeries, G = vr({ color: R.color, visible: R.visible }, Go(B) ? br.navigator.series : B);
            if (F && g.navigatorOptions.adaptToUpdatedData === !1) return;
            k.name = "Navigator " + C.length, z = (E = R.options || {}).navigatorOptions || {}, G.dataLabels = qe(G.dataLabels), (P = Le(E, k, G, z)).pointRange = Ht(G.pointRange, z.pointRange, br.plotOptions[P.type || "line"].pointRange);
            let U = z.data || G.data;
            g.hasNavigatorData = g.hasNavigatorData || !!U, P.data = U || E.data?.slice(0), F && F.options ? F.update(P, u) : (R.navigatorSeries = b.initSeries(P), b.setSortedData(), R.navigatorSeries.baseSeries = R, A.push(R.navigatorSeries));
          }), (B.data && !(C && C.length) || Go(B)) && (g.hasNavigatorData = !1, (B = qe(B)).forEach((R, F) => {
            k.name = "Navigator " + (A.length + 1), (P = Le(br.navigator.series, { color: b.series[F] && !b.series[F].options.isInternal && b.series[F].color || b.options.colors[F] || b.options.colors[0] }, k, R)).data = R.data, P.data && (g.hasNavigatorData = !0, A.push(b.initSeries(P)));
          })), n && this.addBaseSeriesEvents();
        }
        addBaseSeriesEvents() {
          let n = this, u = n.baseSeries || [];
          u[0] && u[0].xAxis && u[0].eventsToUnbind.push(Wt(u[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes)), u.forEach((g) => {
            g.eventsToUnbind.push(Wt(g, "show", function() {
              this.navigatorSeries && this.navigatorSeries.setVisible(!0, !1);
            })), g.eventsToUnbind.push(Wt(g, "hide", function() {
              this.navigatorSeries && this.navigatorSeries.setVisible(!1, !1);
            })), this.navigatorOptions.adaptToUpdatedData !== !1 && g.xAxis && g.eventsToUnbind.push(Wt(g, "updatedData", this.updatedDataHandler)), g.eventsToUnbind.push(Wt(g, "remove", function() {
              u && Ve(u, g), this.navigatorSeries && n.series && (Ve(n.series, this.navigatorSeries), gi(this.navigatorSeries.options) && this.navigatorSeries.remove(!1), delete this.navigatorSeries);
            }));
          });
        }
        getBaseSeriesMin(n) {
          return this.baseSeries.reduce(function(u, g) {
            return Math.min(u, g.getColumn("x")[0] ?? u);
          }, n);
        }
        modifyNavigatorAxisExtremes() {
          let n = this.xAxis;
          if (n.getExtremes !== void 0) {
            let u = this.getUnionExtremes(!0);
            u && (u.dataMin !== n.min || u.dataMax !== n.max) && (n.min = u.dataMin, n.max = u.dataMax);
          }
        }
        modifyBaseAxisExtremes() {
          let n, u, g = this.chart.navigator, b = this.getExtremes(), C = b.min, k = b.max, A = b.dataMin, E = b.dataMax, P = k - C, B = g.stickToMin, z = g.stickToMax, R = Ht(this.ordinal?.convertOverscroll(this.options.overscroll), 0), F = g.series && g.series[0], G = !!this.setExtremes;
          !(this.eventArgs && this.eventArgs.trigger === "rangeSelectorButton") && (B && (n = (u = A) + P), z && (n = E + R, B || (u = Math.max(A, n - P, g.getBaseSeriesMin(F && F.xData ? F.xData[0] : -Number.MAX_VALUE)))), G && (B || z) && me(u) && (this.min = this.userMin = u, this.max = this.userMax = n)), g.stickToMin = g.stickToMax = null;
        }
        updatedDataHandler() {
          let n = this.chart.navigator, u = this.navigatorSeries, g = n.reversedExtremes ? Math.round(n.zoomedMin) === 0 : Math.round(n.zoomedMax) >= Math.round(n.size);
          n.stickToMax = Ht(this.chart.options.navigator && this.chart.options.navigator.stickToMax, g), n.stickToMin = n.shouldStickToMin(this, n), u && !n.hasNavigatorData && (u.options.pointStart = this.getColumn("x")[0], u.setData(this.options.data, !1, null, !1));
        }
        shouldStickToMin(n, u) {
          let g = u.getBaseSeriesMin(n.getColumn("x")[0]), b = n.xAxis, C = b.max, k = b.min, A = b.options.range;
          return !!(me(C) && me(k)) && (A && C - g > 0 ? C - g < A : k <= g);
        }
        addChartEvents() {
          this.eventsToUnbind || (this.eventsToUnbind = []), this.eventsToUnbind.push(Wt(this.chart, "redraw", function() {
            let n = this.navigator, u = n && (n.baseSeries && n.baseSeries[0] && n.baseSeries[0].xAxis || this.xAxis[0]);
            u && n.render(u.min, u.max);
          }), Wt(this.chart, "getMargins", function() {
            let n = this.navigator, u = n.opposite ? "plotTop" : "marginBottom";
            this.inverted && (u = n.opposite ? "marginRight" : "plotLeft"), this[u] = (this[u] || 0) + (n.navigatorEnabled || !this.inverted ? n.height + (this.scrollbar?.options.margin || 0) + n.scrollbarHeight : 0) + (n.navigatorOptions.margin || 0);
          }), Wt(ye, "setRange", function(n) {
            this.chart.xAxis[0].setExtremes(n.min, n.max, n.redraw, n.animation, n.eventArguments);
          }));
        }
        destroy() {
          this.removeEvents(), this.xAxis && (Ve(this.chart.xAxis, this.xAxis), Ve(this.chart.axes, this.xAxis)), this.yAxis && (Ve(this.chart.yAxis, this.yAxis), Ve(this.chart.axes, this.yAxis)), (this.series || []).forEach((n) => {
            n.destroy && n.destroy();
          }), ["series", "xAxis", "yAxis", "shades", "outline", "scrollbarTrack", "scrollbarRifles", "scrollbarGroup", "scrollbar", "navigatorGroup", "rendered"].forEach((n) => {
            this[n] && this[n].destroy && this[n].destroy(), this[n] = null;
          }), [this.handles].forEach((n) => {
            Cn(n);
          }), this.baseSeries.forEach((n) => {
            n.navigatorSeries = void 0;
          }), this.navigatorEnabled = !1;
        }
      }
      let { animObject: ji } = K(), { format: kr } = Ce(), { clamp: wr, pick: Mr, syncTimeout: An } = K(), { getFakeMouseEvent: Tn } = It, { getAxisRangeDescription: Sn, fireEventOnWrappedOrUnwrappedElement: Ms } = qt, En = class extends xe {
        init() {
          let p = this.chart, n = this;
          this.announcer = new At(p, "polite"), this.addEvent(ye, "afterRender", function() {
            this.chart === n.chart && this.chart.renderer && An(() => {
              n.proxyProvider.updateGroupProxyElementPositions("navigator"), n.updateHandleValues();
            }, ji(Mr(this.chart.renderer.globalAnimation, !0)).duration);
          });
        }
        onChartUpdate() {
          let p = this.chart, n = p.options, u = n.navigator;
          if (u.enabled && u.accessibility?.enabled) {
            let g = n.accessibility.landmarkVerbosity, b = n.lang.accessibility?.navigator.groupLabel;
            this.proxyProvider.removeGroup("navigator"), this.proxyProvider.addGroup("navigator", "div", { role: g === "all" ? "region" : "group", "aria-label": kr(b, { chart: p }, p) });
            let C = n.lang.accessibility?.navigator.handleLabel;
            [0, 1].forEach((k) => {
              let A = this.getHandleByIx(k);
              if (A) {
                let E = this.proxyProvider.addProxyElement("navigator", { click: A }, "input", { type: "range", "aria-label": kr(C, { handleIx: k, chart: p }, p) });
                this[k ? "maxHandleProxy" : "minHandleProxy"] = E.innerElement, E.innerElement.style.pointerEvents = "none", E.innerElement.oninput = () => this.updateNavigator();
              }
            }), this.updateHandleValues();
          } else this.proxyProvider.removeGroup("navigator");
        }
        getNavigatorHandleNavigation(p) {
          let n = this, u = this.chart, g = p ? this.maxHandleProxy : this.minHandleProxy, b = this.keyCodes;
          return new ne(u, { keyCodeMap: [[[b.left, b.right, b.up, b.down], function(C) {
            if (g) {
              let k = C === b.left || C === b.up ? -1 : 1;
              g.value = "" + wr(parseFloat(g.value) + k, 0, 100), n.updateNavigator(() => {
                let A = n.getHandleByIx(p);
                A && u.setFocusToElement(A, g);
              });
            }
            return this.response.success;
          }]], init: () => {
            u.setFocusToElement(this.getHandleByIx(p), g);
          }, validate: () => !!(this.getHandleByIx(p) && g && u.options.navigator.accessibility?.enabled) });
        }
        getKeyboardNavigation() {
          return [this.getNavigatorHandleNavigation(0), this.getNavigatorHandleNavigation(1)];
        }
        destroy() {
          this.updateNavigatorThrottleTimer && clearTimeout(this.updateNavigatorThrottleTimer), this.proxyProvider.removeGroup("navigator"), this.announcer && this.announcer.destroy();
        }
        updateHandleValues() {
          let p = this.chart.navigator;
          if (p && this.minHandleProxy && this.maxHandleProxy) {
            let n = p.size;
            this.minHandleProxy.value = "" + Math.round(p.zoomedMin / n * 100), this.maxHandleProxy.value = "" + Math.round(p.zoomedMax / n * 100);
          }
        }
        getHandleByIx(p) {
          let n = this.chart.navigator;
          return n && n.handles && n.handles[p];
        }
        updateNavigator(p) {
          this.updateNavigatorThrottleTimer && clearTimeout(this.updateNavigatorThrottleTimer), this.updateNavigatorThrottleTimer = setTimeout(((n) => {
            let u = this.chart, { navigator: g, pointer: b } = u, C = this.chart.accessibility?.keyboardNavigation;
            if (g && b && this.minHandleProxy && this.maxHandleProxy) {
              let k = b.getChartPosition(), A = parseFloat(this.minHandleProxy.value) / 100 * g.size, E = parseFloat(this.maxHandleProxy.value) / 100 * g.size;
              [[0, "mousedown", g.zoomedMin], [0, "mousemove", A], [0, "mouseup", A], [1, "mousedown", g.zoomedMax], [1, "mousemove", E], [1, "mouseup", E]].forEach(([z, R, F]) => {
                let G = this.getHandleByIx(z)?.element;
                G && Ms(G, Tn(R, { x: k.left + g.left + F, y: k.top + g.top }, G));
              }), C && (C.keyboardReset = !1), n && n();
              let P = u.options.lang.accessibility?.navigator.changeAnnouncement, B = Sn(u.xAxis[0]);
              this.announcer.announce(kr(P, { axisRangeDescription: B, chart: u }, u));
            }
          }).bind(this, p), 20);
        }
      }, { getPointAnnotationTexts: Pn } = te, { getAxisDescription: On, getSeriesFirstPointElement: Ke, getSeriesA11yElement: Ln, unhideChartElementFromAT: Yo } = qt, { format: Cs, numberFormat: Dn } = Ce(), { reverseChildNodes: As, stripHTMLTagsFromString: jo } = It, { find: In, isNumber: Uo, isString: Vo, pick: le, defined: ve } = K();
      function qo(p) {
        let n = p.chart.options.accessibility.series.pointDescriptionEnabledThreshold;
        return !!(n !== !1 && p.points && p.points.length >= +n);
      }
      function Ko(p, n) {
        let u = p.series, g = u.chart, b = g.options.accessibility.point || {}, C = u.options.accessibility && u.options.accessibility.point || {}, k = u.tooltipOptions || {}, A = g.options.lang;
        return Uo(n) ? Dn(n, C.valueDecimals || b.valueDecimals || k.valueDecimals || -1, A.decimalPoint, A.accessibility.thousandsSep || A.thousandsSep) : n;
      }
      function $o(p, n) {
        let u = p[n];
        return p.chart.langFormat("accessibility.series." + n + "Description", { name: On(u), series: p });
      }
      function Zo(p) {
        let n = p.series, u = n.chart.series.length > 1 || n.options.name, g = (function(A) {
          let E = A.series, P = E.chart, B = E.options.accessibility, z = B && B.point && B.point.valueDescriptionFormat || P.options.accessibility.point.valueDescriptionFormat, R = le(E.xAxis && E.xAxis.options.accessibility && E.xAxis.options.accessibility.enabled, !P.angular && E.type !== "flowmap"), F = R ? (function(G) {
            let U = (function(ht) {
              let tt = ht.series, et = tt.chart, ft = tt.options.accessibility && tt.options.accessibility.point || {}, xt = et.options.accessibility.point || {}, Xt = tt.xAxis && tt.xAxis.dateTime;
              if (Xt) {
                let St = Xt.getXDateFormat(ht.x || 0, et.options.tooltip.dateTimeLabelFormats), Bt = ft.dateFormatter && ft.dateFormatter(ht) || xt.dateFormatter && xt.dateFormatter(ht) || ft.dateFormat || xt.dateFormat || St;
                return et.time.dateFormat(Bt, ht.x || 0, void 0);
              }
            })(G), dt = (G.series.xAxis || {}).categories && ve(G.category) && ("" + G.category).replace("<br/>", " "), nt = ve(G.id) && 0 > ("" + G.id).indexOf("highcharts-"), rt = "x, " + G.x;
            return G.name || U || dt || (nt ? G.id : rt);
          })(A) : "";
          return Cs(z, { point: A, index: ve(A.index) ? A.index + 1 : "", xDescription: F, value: (function(G) {
            let U = G.series, dt = U.chart.options.accessibility.point || {}, nt = U.chart.options.accessibility && U.chart.options.accessibility.point || {}, rt = U.tooltipOptions || {}, ht = nt.valuePrefix || dt.valuePrefix || rt.valuePrefix || "", tt = nt.valueSuffix || dt.valueSuffix || rt.valueSuffix || "", et = G.value !== void 0 ? "value" : "y", ft = Ko(G, G[et]);
            if (G.isNull) return U.chart.langFormat("accessibility.series.nullPointValue", { point: G });
            if (U.pointArrayMap) {
              let xt = ht || "", Xt = tt || "", St = function(Bt) {
                let Ie = Ko(G, le(G[Bt], G.options[Bt]));
                return Ie !== void 0 ? Bt + ": " + xt + Ie + Xt : Ie;
              };
              return G.series.pointArrayMap.reduce(function(Bt, Ie) {
                let Ns = St(Ie);
                return Ns ? Bt + (Bt.length ? ", " : "") + Ns : Bt;
              }, "");
            }
            return ht + ft + tt;
          })(A), separator: R ? ", " : "" }, P);
        })(p), b = p.options && p.options.accessibility && p.options.accessibility.description, C = u ? " " + n.name + "." : "", k = (function(A) {
          let E = A.series.chart, P = Pn(A);
          return P.length ? E.langFormat("accessibility.series.pointAnnotationsDescription", { point: A, annotations: P }) : "";
        })(p);
        return p.accessibility = p.accessibility || {}, p.accessibility.valueDescription = g, g + (b ? " " + b : "") + C + (k ? " " + k : "");
      }
      function _o(p) {
        let n = p.chart, u = n.types || [], g = (function(R) {
          let F = (R.options.accessibility || {}).description;
          return F && R.chart.langFormat("accessibility.series.description", { description: F, series: R }) || "";
        })(p), b = function(R) {
          return n[R] && n[R].length > 1 && p[R];
        }, C = p.index + 1, k = $o(p, "xAxis"), A = $o(p, "yAxis"), E = { seriesNumber: C, series: p, chart: n }, P = u.length > 1 ? "Combination" : "", B = n.langFormat("accessibility.series.summary." + p.type + P, E) || n.langFormat("accessibility.series.summary.default" + P, E), z = (b("yAxis") ? " " + A + "." : "") + (b("xAxis") ? " " + k + "." : "");
        return Cs(le(p.options.accessibility && p.options.accessibility.descriptionFormat, n.options.accessibility.series.descriptionFormat, ""), { seriesDescription: B, authorDescription: g ? " " + g : "", axisDescription: z, series: p, chart: n, seriesNumber: C }, void 0);
      }
      let fi = { defaultPointDescriptionFormatter: Zo, defaultSeriesDescriptionFormatter: _o, describeSeries: function(p) {
        let n = p.chart, u = Ke(p), g = Ln(p), b = n.is3d && n.is3d();
        if (g) {
          g.lastChild !== u || b || As(g);
          let C = (function(E) {
            let P = E.options.accessibility || {};
            return !qo(E) && !P.exposeAsGroupOnly;
          })(p), k = (function(E) {
            let P = E.chart.options.accessibility.keyboardNavigation.seriesNavigation;
            return !!(E.points && (E.points.length < +P.pointNavigationEnabledThreshold || P.pointNavigationEnabledThreshold === !1));
          })(p), A = p.chart.options.accessibility.point.describeNull;
          if ((C || k) && p.points.forEach((E) => {
            let P = E.graphic && E.graphic.element || (function(z) {
              let R = z.series, F = R && R.chart, G = R && R.is("sunburst"), U = z.isNull, dt = F && F.options.accessibility.point.describeNull;
              return U && !G && dt;
            })(E) && (function(z) {
              let R = z.series, F = (function(rt) {
                let ht = rt.index;
                if (!rt.series || !rt.series.data || !ve(ht)) return null;
                let tt = rt.series.options?.nullInteraction;
                return In(rt.series.data, function(et) {
                  return !!(et && et.index !== void 0 && (tt || et.index > ht) && et.graphic && et.graphic.element);
                }) || null;
              })(z), G = F && F.graphic, U = G ? G.parentGroup : R.graph || R.group, dt = F ? { x: le(z.plotX, F.plotX, 0), y: le(z.plotY, F.plotY, 0) } : { x: le(z.plotX, 0), y: le(z.plotY, 0) }, nt = (function(rt, ht) {
                let tt = rt.series.chart.renderer.rect(ht.x, ht.y, 1, 1);
                return tt.attr({ class: "highcharts-a11y-mock-point", fill: "none", opacity: 0, "fill-opacity": 0, "stroke-opacity": 0 }), tt;
              })(z, dt);
              if (U && U.element) return z.graphic = nt, z.hasMockGraphic = !0, nt.add(U), U.element.insertBefore(nt.element, G ? G.element : null), nt.element;
            })(E), B = E.options && E.options.accessibility && E.options.accessibility.enabled === !1;
            if (P) {
              if (E.isNull && !A) return void P.setAttribute("aria-hidden", !0);
              if (P.setAttribute("tabindex", "-1"), p.chart.styledMode || (P.style.outline = "none"), C && !B) {
                let z = E.series, R = z.options.accessibility?.point || {}, F = z.chart.options.accessibility.point || {}, G = jo(Vo(R.descriptionFormat) && Cs(R.descriptionFormat, E, z.chart) || R.descriptionFormatter?.(E) || Vo(F.descriptionFormat) && Cs(F.descriptionFormat, E, z.chart) || F.descriptionFormatter?.(E) || Zo(E), z.chart.renderer.forExport);
                P.setAttribute("role", "img"), P.setAttribute("aria-label", G);
              } else P.setAttribute("aria-hidden", !0);
            }
          }), Yo(n, g), (function(E) {
            let P = E.chart, B = P.options.chart, z = B.options3d && B.options3d.enabled, R = P.series.length > 1, F = P.options.accessibility.series.describeSingleSeries, G = (E.options.accessibility || {}).exposeAsGroupOnly;
            return !(z && R) && (R || F || G || qo(E));
          })(p)) {
            let E = p.options.accessibility || {}, P = p.chart.options.accessibility, B = P.landmarkVerbosity;
            E.exposeAsGroupOnly ? g.setAttribute("role", "img") : B === "all" ? g.setAttribute("role", "region") : g.setAttribute("role", "group"), g.setAttribute("tabindex", "-1"), p.chart.styledMode || (g.style.outline = "none"), g.setAttribute("aria-label", jo(P.series.descriptionFormatter && P.series.descriptionFormatter(p) || _o(p), p.chart.renderer.forExport));
          } else g.removeAttribute("aria-label");
        }
      } }, { composed: Cr } = K(), { addEvent: Jo, defined: Ui, pushUnique: Ar } = K(), { getChartTitle: Bn } = qt, { defaultPointDescriptionFormatter: Qo, defaultSeriesDescriptionFormatter: Vi } = fi;
      function Tr(p) {
        return !!p.options.accessibility.announceNewData.enabled;
      }
      class xi {
        constructor(n) {
          this.dirty = { allSeries: {} }, this.lastAnnouncementTime = 0, this.chart = n;
        }
        init() {
          let n = this.chart, u = n.options.accessibility.announceNewData.interruptUser ? "assertive" : "polite";
          this.lastAnnouncementTime = 0, this.dirty = { allSeries: {} }, this.eventProvider = new $(), this.announcer = new At(n, u), this.addEventListeners();
        }
        destroy() {
          this.eventProvider.removeAddedEvents(), this.announcer.destroy();
        }
        addEventListeners() {
          let n = this, u = this.chart, g = this.eventProvider;
          g.addEvent(u, "afterApplyDrilldown", function() {
            n.lastAnnouncementTime = 0;
          }), g.addEvent(u, "afterAddSeries", function(b) {
            n.onSeriesAdded(b.series);
          }), g.addEvent(u, "redraw", function() {
            n.announceDirtyData();
          });
        }
        onSeriesAdded(n) {
          Tr(this.chart) && (this.dirty.hasDirty = !0, this.dirty.allSeries[n.name + n.index] = n, this.dirty.newSeries = Ui(this.dirty.newSeries) ? void 0 : n);
        }
        announceDirtyData() {
          let n = this.chart, u = this;
          if (n.options.accessibility.announceNewData && this.dirty.hasDirty) {
            let g = this.dirty.newPoint;
            g && (g = (function(b) {
              let C = b.series.data.filter((k) => b.x === k.x && b.y === k.y);
              return C.length === 1 ? C[0] : b;
            })(g)), this.queueAnnouncement(Object.keys(this.dirty.allSeries).map((b) => u.dirty.allSeries[b]), this.dirty.newSeries, g), this.dirty = { allSeries: {} };
          }
        }
        queueAnnouncement(n, u, g) {
          let b = this.chart.options.accessibility.announceNewData;
          if (b.enabled) {
            let C = +/* @__PURE__ */ new Date(), k = C - this.lastAnnouncementTime, A = Math.max(0, b.minAnnounceInterval - k), E = (function(B, z) {
              let R = (B || []).concat(z || []).reduce((F, G) => (F[G.name + G.index] = G, F), {});
              return Object.keys(R).map((F) => R[F]);
            })(this.queuedAnnouncement && this.queuedAnnouncement.series, n), P = this.buildAnnouncementMessage(E, u, g);
            P && (this.queuedAnnouncement && clearTimeout(this.queuedAnnouncementTimer), this.queuedAnnouncement = { time: C, message: P, series: E }, this.queuedAnnouncementTimer = setTimeout(() => {
              this && this.announcer && (this.lastAnnouncementTime = +/* @__PURE__ */ new Date(), this.announcer.announce(this.queuedAnnouncement.message), delete this.queuedAnnouncement, delete this.queuedAnnouncementTimer);
            }, A));
          }
        }
        buildAnnouncementMessage(n, u, g) {
          let b = this.chart, C = b.options.accessibility.announceNewData;
          if (C.announcementFormatter) {
            let P = C.announcementFormatter(n, u, g);
            if (P !== !1) return P.length ? P : null;
          }
          let k = K().charts && K().charts.length > 1 ? "Multiple" : "Single", A = u ? "newSeriesAnnounce" + k : g ? "newPointAnnounce" + k : "newDataAnnounce", E = Bn(b);
          return b.langFormat("accessibility.announceNewData." + A, { chartTitle: E, seriesDesc: u ? Vi(u) : null, pointDesc: g ? Qo(g) : null, point: g, series: u });
        }
      }
      (function(p) {
        function n(g) {
          let b = this.chart, C = b.accessibility?.components.series.newDataAnnouncer;
          C && C.chart === b && Tr(b) && (C.dirty.newPoint = Ui(C.dirty.newPoint) ? void 0 : g.point);
        }
        function u() {
          let g = this.chart, b = g.accessibility?.components.series.newDataAnnouncer;
          b && b.chart === g && Tr(g) && (b.dirty.hasDirty = !0, b.dirty.allSeries[this.name + this.index] = this);
        }
        p.compose = function(g) {
          Ar(Cr, "A11y.NDA") && (Jo(g, "addPoint", n), Jo(g, "updatedData", u));
        };
      })(xi || (xi = {}));
      let Sr = xi, { doc: Er, win: ke } = K(), { attr: bi, css: ta, merge: ea } = K(), { fireEventOnWrappedOrUnwrappedElement: ia } = qt, { cloneMouseEvent: Pr, cloneTouchEvent: Nn, getFakeMouseEvent: Rn, removeElement: sa } = It, zn = class {
        constructor(p, n, u = "button", g, b) {
          this.chart = p, this.target = n, this.eventProvider = new $();
          let C = this.innerElement = Er.createElement(u), k = this.element = g ? Er.createElement(g) : C;
          p.styledMode || this.hideElementVisually(C), g && (g !== "li" || p.styledMode || (k.style.listStyle = "none"), k.appendChild(C), this.element = k), this.updateTarget(n, b);
        }
        click() {
          let p = this.getTargetPosition();
          p.x += p.width / 2, p.y += p.height / 2;
          let n = Rn("click", p);
          ia(this.target.click, n);
        }
        updateTarget(p, n) {
          this.target = p, this.updateCSSClassName();
          let u = n || {};
          Object.keys(u).forEach((b) => {
            u[b] === null && delete u[b];
          });
          let g = this.getTargetAttr(p.click, "aria-label");
          bi(this.innerElement, ea(g ? { "aria-label": g } : {}, u)), this.eventProvider.removeAddedEvents(), this.addProxyEventsToElement(this.innerElement, p.click), this.refreshPosition();
        }
        refreshPosition() {
          let p = this.getTargetPosition();
          ta(this.innerElement, { width: (p.width || 1) + "px", height: (p.height || 1) + "px", left: (Math.round(p.x) || 0) + "px", top: (Math.round(p.y) || 0) + "px" });
        }
        remove() {
          this.eventProvider.removeAddedEvents(), sa(this.element);
        }
        updateCSSClassName() {
          let p = (C) => C.indexOf("highcharts-no-tooltip") > -1, n = this.chart.legend, u = n.group && n.group.div, g = p(u && u.className || ""), b = p(this.getTargetAttr(this.target.click, "class") || "");
          this.innerElement.className = g || b ? "highcharts-a11y-proxy-element highcharts-no-tooltip" : "highcharts-a11y-proxy-element";
        }
        addProxyEventsToElement(p, n) {
          ["click", "touchstart", "touchend", "touchcancel", "touchmove", "mouseover", "mouseenter", "mouseleave", "mouseout"].forEach((u) => {
            let g = u.indexOf("touch") === 0;
            this.eventProvider.addEvent(p, u, (b) => {
              let C = g ? Nn(b) : Pr(b);
              n && ia(n, C), b.stopPropagation(), g || b.preventDefault();
            }, { passive: !1 });
          });
        }
        hideElementVisually(p) {
          ta(p, { borderWidth: 0, backgroundColor: "transparent", cursor: "pointer", outline: "none", opacity: 1e-3, filter: "alpha(opacity=1)", zIndex: 999, overflow: "hidden", padding: 0, margin: 0, display: "block", position: "absolute", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)" });
        }
        getTargetPosition() {
          let p = this.target.click, n = p.element ? p.element : p, u = this.target.visual || n, g = this.chart.renderTo, b = this.chart.pointer;
          if (g && u?.getBoundingClientRect && b) {
            let C = ke.scrollY || Er.documentElement.scrollTop, k = u.getBoundingClientRect(), A = b.getChartPosition();
            return { x: (k.left - A.left) / A.scaleX, y: (k.top + C - A.top) / A.scaleY, width: k.right / A.scaleX - k.left / A.scaleX, height: k.bottom / A.scaleY - k.top / A.scaleY };
          }
          return { x: 0, y: 0, width: 1, height: 1 };
        }
        getTargetAttr(p, n) {
          return p.element ? p.element.getAttribute(n) : p.getAttribute(n);
        }
      }, { doc: Or } = K(), { attr: Qt, css: bt } = K(), { unhideChartElementFromAT: ra } = qt, { removeChildNodes: Lr } = It, Dr = class {
        constructor(p) {
          this.chart = p, this.domElementProvider = new ns(), this.groups = {}, this.groupOrder = [], this.beforeChartProxyPosContainer = this.createProxyPosContainer("before"), this.afterChartProxyPosContainer = this.createProxyPosContainer("after"), this.update();
        }
        addProxyElement(p, n, u = "button", g) {
          let b = this.groups[p];
          if (!b) throw Error("ProxyProvider.addProxyElement: Invalid group key " + p);
          let C = b.type === "ul" || b.type === "ol" ? "li" : void 0, k = new zn(this.chart, n, u, C, g);
          return b.proxyContainerElement.appendChild(k.element), b.proxyElements.push(k), k;
        }
        addGroup(p, n = "div", u) {
          let g, b = this.groups[p];
          if (b) return b.groupElement;
          let C = this.domElementProvider.createElement(n);
          return u && u.role && n !== "div" ? (g = this.domElementProvider.createElement("div")).appendChild(C) : g = C, g.className = "highcharts-a11y-proxy-group highcharts-a11y-proxy-group-" + p.replace(/\W/g, "-"), this.groups[p] = { proxyContainerElement: C, groupElement: g, type: n, proxyElements: [] }, Qt(g, u || {}), n === "ul" && C.setAttribute("role", "list"), this.afterChartProxyPosContainer.appendChild(g), this.updateGroupOrder(this.groupOrder), g;
        }
        updateGroupAttrs(p, n) {
          let u = this.groups[p];
          if (!u) throw Error("ProxyProvider.updateGroupAttrs: Invalid group key " + p);
          Qt(u.groupElement, n);
        }
        updateGroupOrder(p) {
          if (this.groupOrder = p.slice(), this.isDOMOrderGroupOrder()) return;
          let n = p.indexOf("series"), u = n > -1 ? p.slice(0, n) : p, g = n > -1 ? p.slice(n + 1) : [], b = Or.activeElement;
          ["before", "after"].forEach((C) => {
            let k = this[C === "before" ? "beforeChartProxyPosContainer" : "afterChartProxyPosContainer"];
            Lr(k), (C === "before" ? u : g).forEach((A) => {
              let E = this.groups[A];
              E && k.appendChild(E.groupElement);
            });
          }), (this.beforeChartProxyPosContainer.contains(b) || this.afterChartProxyPosContainer.contains(b)) && b && b.focus && b.focus();
        }
        clearGroup(p) {
          let n = this.groups[p];
          if (!n) throw Error("ProxyProvider.clearGroup: Invalid group key " + p);
          Lr(n.proxyContainerElement);
        }
        removeGroup(p) {
          let n = this.groups[p];
          n && (this.domElementProvider.removeElement(n.groupElement), n.groupElement !== n.proxyContainerElement && this.domElementProvider.removeElement(n.proxyContainerElement), delete this.groups[p]);
        }
        update() {
          this.updatePosContainerPositions(), this.updateGroupOrder(this.groupOrder), this.updateProxyElementPositions();
        }
        updateProxyElementPositions() {
          Object.keys(this.groups).forEach(this.updateGroupProxyElementPositions.bind(this));
        }
        updateGroupProxyElementPositions(p) {
          let n = this.groups[p];
          n && n.proxyElements.forEach((u) => u.refreshPosition());
        }
        destroy() {
          this.domElementProvider.destroyCreatedElements();
        }
        createProxyPosContainer(p) {
          let n = this.domElementProvider.createElement("div");
          return n.setAttribute("aria-hidden", "false"), n.className = "highcharts-a11y-proxy-container" + (p ? "-" + p : ""), bt(n, { top: "0", left: "0" }), this.chart.styledMode || (n.style.whiteSpace = "nowrap", n.style.position = "absolute"), n;
        }
        getCurrentGroupOrderInDOM() {
          let p = (b) => {
            let C = Object.keys(this.groups), k = C.length;
            for (; k--; ) {
              let A = C[k], E = this.groups[A];
              if (E && b === E.groupElement) return A;
            }
          }, n = (b) => {
            let C = [], k = b.children;
            for (let A = 0; A < k.length; ++A) {
              let E = p(k[A]);
              E && C.push(E);
            }
            return C;
          }, u = n(this.beforeChartProxyPosContainer), g = n(this.afterChartProxyPosContainer);
          return u.push("series"), u.concat(g);
        }
        isDOMOrderGroupOrder() {
          let p = this.getCurrentGroupOrderInDOM(), n = this.groupOrder.filter((g) => g === "series" || !!this.groups[g]), u = p.length;
          if (u !== n.length) return !1;
          for (; u--; ) if (p[u] !== n[u]) return !1;
          return !0;
        }
        updatePosContainerPositions() {
          let p = this.chart;
          if (p.renderer.forExport) return;
          let n = p.renderer.box;
          p.container.insertBefore(this.afterChartProxyPosContainer, n.nextSibling), p.container.insertBefore(this.beforeChartProxyPosContainer, n), ra(this.chart, this.afterChartProxyPosContainer), ra(this.chart, this.beforeChartProxyPosContainer);
        }
      }, { unhideChartElementFromAT: yi, getAxisRangeDescription: Tt } = qt, { addEvent: qi, attr: oa } = K();
      class Ts extends xe {
        init() {
          let n = this.chart;
          this.announcer = new At(n, "polite");
        }
        onChartUpdate() {
          let n = this.chart, u = this, g = n.rangeSelector;
          g && (this.updateSelectorVisibility(), this.setDropdownAttrs(), g.buttons && g.buttons.length && g.buttons.forEach((b) => {
            u.setRangeButtonAttrs(b);
          }), g.maxInput && g.minInput && ["minInput", "maxInput"].forEach(function(b, C) {
            let k = g[b];
            k && (yi(n, k), u.setRangeInputAttrs(k, "accessibility.rangeSelector." + (C ? "max" : "min") + "InputLabel"));
          }));
        }
        updateSelectorVisibility() {
          let n = this.chart, u = n.rangeSelector, g = u && u.dropdown, b = u && u.buttons || [], C = (k) => k.setAttribute("aria-hidden", !0);
          u && u.hasVisibleDropdown && g ? (yi(n, g), b.forEach((k) => C(k.element))) : (g && C(g), b.forEach((k) => yi(n, k.element)));
        }
        setDropdownAttrs() {
          let n = this.chart, u = n.rangeSelector && n.rangeSelector.dropdown;
          if (u) {
            let g = n.langFormat("accessibility.rangeSelector.dropdownLabel", { rangeTitle: n.options.lang.rangeSelectorZoom });
            u.setAttribute("aria-label", g), u.setAttribute("tabindex", -1);
          }
        }
        setRangeButtonAttrs(n) {
          oa(n.element, { tabindex: -1, role: "button" });
        }
        setRangeInputAttrs(n, u) {
          let g = this.chart;
          oa(n, { tabindex: -1, "aria-label": g.langFormat(u, { chart: g }) });
        }
        onButtonNavKbdArrowKey(n, u) {
          let g = n.response, b = this.keyCodes, C = this.chart, k = C.options.accessibility.keyboardNavigation.wrapAround, A = u === b.left || u === b.up ? -1 : 1;
          return C.highlightRangeSelectorButton(C.highlightedRangeSelectorItemIx + A) ? g.success : k ? (n.init(A), g.success) : g[A > 0 ? "next" : "prev"];
        }
        onButtonNavKbdClick(n) {
          let u = n.response, g = this.chart;
          return g.oldRangeSelectorItemState !== 3 && this.fakeClickEvent(g.rangeSelector.buttons[g.highlightedRangeSelectorItemIx].element), u.success;
        }
        onAfterBtnClick() {
          let n = this.chart, u = Tt(n.xAxis[0]), g = n.langFormat("accessibility.rangeSelector.clickButtonAnnouncement", { chart: n, axisRangeDescription: u });
          g && this.announcer.announce(g);
        }
        onInputKbdMove(n) {
          let u = this.chart, g = u.rangeSelector, b = u.highlightedInputRangeIx = (u.highlightedInputRangeIx || 0) + n;
          if (b > 1 || b < 0) {
            if (u.accessibility) return u.accessibility.keyboardNavigation.exiting = !0, u.accessibility.keyboardNavigation.tabindexContainer.focus(), u.accessibility.keyboardNavigation.move(n);
          } else if (g) {
            let C = g[b ? "maxDateBox" : "minDateBox"], k = g[b ? "maxInput" : "minInput"];
            C && k && u.setFocusToElement(C, k);
          }
          return !0;
        }
        onInputNavInit(n) {
          let u = this, g = this.chart, b = n > 0 ? 0 : 1, C = g.rangeSelector, k = C && C[b ? "maxDateBox" : "minDateBox"], A = C && C.minInput, E = C && C.maxInput;
          if (g.highlightedInputRangeIx = b, k && A && E) {
            g.setFocusToElement(k, b ? E : A), this.removeInputKeydownHandler && this.removeInputKeydownHandler();
            let P = (R) => {
              (R.which || R.keyCode) === this.keyCodes.tab && u.onInputKbdMove(R.shiftKey ? -1 : 1) && (R.preventDefault(), R.stopPropagation());
            }, B = qi(A, "keydown", P), z = qi(E, "keydown", P);
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
          let n = this.chart, u = n.rangeSelector, g = u && u.dropdown;
          u && g && (n.setFocusToElement(u.buttonGroup, g), this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeDropdownKeydownHandler = qi(g, "keydown", (b) => {
            let C = (b.which || b.keyCode) === this.keyCodes.tab, k = n.accessibility;
            C && (b.preventDefault(), b.stopPropagation(), k && k.keyboardNavigation.move(b.shiftKey ? -1 : 1));
          }));
        }
        getRangeSelectorButtonNavigation() {
          let n = this.chart, u = this.keyCodes, g = this;
          return new ne(n, { keyCodeMap: [[[u.left, u.right, u.up, u.down], function(b) {
            return g.onButtonNavKbdArrowKey(this, b);
          }], [[u.enter, u.space], function() {
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
          let n = this.chart, u = this;
          return new ne(n, { keyCodeMap: [], validate: function() {
            return !!(n.rangeSelector && n.rangeSelector.inputGroup && n.rangeSelector.inputGroup.element.style.visibility !== "hidden" && n.options.rangeSelector.inputEnabled !== !1 && n.rangeSelector.minInput && n.rangeSelector.maxInput);
          }, init: function(g) {
            u.onInputNavInit(g);
          }, terminate: function() {
            u.onInputNavTerminate();
          } });
        }
        getKeyboardNavigation() {
          return [this.getRangeSelectorButtonNavigation(), this.getRangeSelectorInputNavigation()];
        }
        destroy() {
          this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeInputKeydownHandler && this.removeInputKeydownHandler(), this.announcer && this.announcer.destroy();
        }
      }
      (function(p) {
        function n(g) {
          let b = this.rangeSelector && this.rangeSelector.buttons || [], C = this.highlightedRangeSelectorItemIx, k = this.rangeSelector && this.rangeSelector.selected;
          return C !== void 0 && b[C] && C !== k && b[C].setState(this.oldRangeSelectorItemState || 0), this.highlightedRangeSelectorItemIx = g, !!b[g] && (this.setFocusToElement(b[g].box, b[g].element), g !== k && (this.oldRangeSelectorItemState = b[g].state, b[g].setState(1)), !0);
        }
        function u() {
          let g = this.chart.accessibility;
          if (g && g.components.rangeSelector) return g.components.rangeSelector.onAfterBtnClick();
        }
        p.compose = function(g, b) {
          let C = g.prototype;
          C.highlightRangeSelectorButton || (C.highlightRangeSelectorButton = n, qi(b, "afterBtnClick", u));
        };
      })(Ts || (Ts = {}));
      let Q = Ts, { composed: aa } = K(), { addEvent: ri, merge: Ss, pushUnique: Es } = K();
      (function(p) {
        function n(E) {
          Ss(!0, E, { marker: { enabled: !0, states: { normal: { opacity: 0 } } } });
        }
        function u(E) {
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
          this.resetA11yMarkerOptions = Ss(E.options.marker || {}, this.userOptions.marker || {});
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
                let U = G && u(F) === 0;
                F.marker.enabled && !U ? (Ss(!0, (z = F).marker, { states: { normal: { opacity: u(z) || 1 } } }), R.hasForcedA11yMarker = !1) : F.marker.enabled === !1 && (n(F), R.hasForcedA11yMarker = !0);
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
          this.boosted && this.a11yMarkersForced && (Ss(!0, this.options, { marker: { enabled: !1 } }), delete this.a11yMarkersForced);
        }
        p.compose = function(E) {
          Es(aa, "A11y.FM") && (ri(E, "afterSetOptions", C), ri(E, "render", k), ri(E, "afterRender", b), ri(E, "renderCanvas", A));
        };
      })(Et || (Et = {}));
      let ot = Et;
      var Ps = gt(260), Fn = gt.n(Ps), Hn = gt(820), Wn = gt.n(Hn);
      let { seriesTypes: Ir } = Lo(), { doc: vi } = K(), { defined: De, fireEvent: Xn } = K(), { getPointFromXY: Gn, getSeriesFromName: Os, scrollAxisToPoint: Yn } = qt;
      function Br(p) {
        let n = p.index, u = p.series.points, g = u.length;
        if (u[n] === p) return n;
        for (; g--; ) if (u[g] === p) return g;
      }
      function Ki(p) {
        let n = p.chart.options.accessibility.keyboardNavigation.seriesNavigation, u = p.options.accessibility || {}, g = u.keyboardNavigation;
        return g && g.enabled === !1 || u.enabled === !1 || p.options.enableMouseTracking === !1 || !p.visible || n.pointNavigationEnabledThreshold && +n.pointNavigationEnabledThreshold <= p.points.length;
      }
      function $i(p) {
        let n = p.series, u = n.options.nullInteraction, g = p.options.accessibility, b = n.chart.options.accessibility, C = g?.enabled === !1;
        return b.keyboardNavigation.seriesNavigation.skipNullPoints ?? (!(!p.isNull || u) && p.visible === !1 || p.isInside === !1 || C || Ki(n));
      }
      function Ls(p) {
        let n = p.series || [], u = n.length;
        for (let g = 0; g < u; ++g) if (!Ki(n[g])) {
          let b = (function(C) {
            let k = C.points || [], A = k.length;
            for (let E = 0; E < A; ++E) if (!$i(k[E])) return k[E];
            return null;
          })(n[g]);
          if (b) return b;
        }
        return null;
      }
      function na(p) {
        let n = p.series.length, u = !1;
        for (; n-- && (p.highlightedPoint = p.series[n].points[p.series[n].points.length - 1], !(u = p.series[n].highlightNextValidPoint())); ) ;
        return u;
      }
      function Nr(p) {
        delete p.highlightedPoint;
        let n = Ls(p);
        return !!n && n.highlight();
      }
      class Ds {
        constructor(n, u) {
          this.keyCodes = u, this.chart = n;
        }
        init() {
          let n = this, u = this.chart, g = this.eventProvider = new $();
          g.addEvent(Wn(), "destroy", function() {
            return n.onSeriesDestroy(this);
          }), g.addEvent(u, "afterApplyDrilldown", function() {
            let b = Ls(this);
            b && b.highlight(!1);
          }), g.addEvent(u, "drilldown", function(b) {
            let C = b.point, k = C.series;
            n.lastDrilledDownPoint = { x: C.x, y: C.y, seriesName: k ? k.name : "" };
          }), g.addEvent(u, "drillupall", function() {
            setTimeout(function() {
              n.onDrillupAll();
            }, 10);
          }), g.addEvent(Fn(), "afterSetState", function() {
            let b = this.graphic && this.graphic.element, C = vi.activeElement, k = C && C.getAttribute("class"), A = k && k.indexOf("highcharts-a11y-proxy-element") > -1;
            u.highlightedPoint === this && C !== b && !A && b && b.focus && b.focus();
          });
        }
        onDrillupAll() {
          let n, u = this.lastDrilledDownPoint, g = this.chart, b = u && Os(g, u.seriesName);
          u && b && De(u.x) && De(u.y) && (n = Gn(b, u.x, u.y)), n = n || Ls(g), g.container && g.container.focus(), n && n.highlight && n.highlight(!1);
        }
        getKeyboardNavigationHandler() {
          let n = this, u = this.keyCodes, g = this.chart, b = g.inverted;
          return new ne(g, { keyCodeMap: [[b ? [u.up, u.down] : [u.left, u.right], function(C) {
            return n.onKbdSideways(this, C);
          }], [b ? [u.left, u.right] : [u.up, u.down], function(C) {
            return n.onKbdVertical(this, C);
          }], [[u.enter, u.space], function(C, k) {
            let A = g.highlightedPoint;
            if (A) {
              let { plotLeft: E, plotTop: P } = this.chart, { plotX: B = 0, plotY: z = 0 } = A;
              k = { ...k, chartX: E + B, chartY: P + z, point: A, target: A.graphic?.element || k.target }, Xn(A.series, "click", k), A.firePointEvent("click", k);
            }
            return this.response.success;
          }], [[u.home], function() {
            return Nr(g), this.response.success;
          }], [[u.end], function() {
            return na(g), this.response.success;
          }], [[u.pageDown, u.pageUp], function(C) {
            return g.highlightAdjacentSeries(C === u.pageDown), this.response.success;
          }]], init: function() {
            return n.onHandlerInit(this);
          }, validate: function() {
            return !!Ls(g);
          }, terminate: function() {
            return n.onHandlerTerminate();
          } });
        }
        onKbdSideways(n, u) {
          let g = this.keyCodes, b = u === g.right || u === g.down;
          return this.attemptHighlightAdjacentPoint(n, b);
        }
        onHandlerInit(n) {
          let u = this.chart;
          return u.options.accessibility.keyboardNavigation.seriesNavigation.rememberPointFocus && u.highlightedPoint ? u.highlightedPoint.highlight() : Nr(u), n.response.success;
        }
        onKbdVertical(n, u) {
          let g = this.chart, b = this.keyCodes, C = u === b.down || u === b.right, k = g.options.accessibility.keyboardNavigation.seriesNavigation;
          if (k.mode && k.mode === "serialize") return this.attemptHighlightAdjacentPoint(n, C);
          let A = g.highlightedPoint && g.highlightedPoint.series.keyboardMoveVertical ? "highlightAdjacentPointVertical" : "highlightAdjacentSeries";
          return g[A](C), n.response.success;
        }
        onHandlerTerminate() {
          let n = this.chart, u = n.options.accessibility.keyboardNavigation;
          n.tooltip && n.tooltip.hide(0);
          let g = n.highlightedPoint && n.highlightedPoint.series;
          g && g.onMouseOut && g.onMouseOut(), n.highlightedPoint && n.highlightedPoint.onMouseOut && n.highlightedPoint.onMouseOut(), u.seriesNavigation.rememberPointFocus || delete n.highlightedPoint;
        }
        attemptHighlightAdjacentPoint(n, u) {
          let g = this.chart, b = g.options.accessibility.keyboardNavigation.wrapAround;
          return g.highlightAdjacentPoint(u) || b && (u ? Nr(g) : na(g)) ? n.response.success : n.response[u ? "next" : "prev"];
        }
        onSeriesDestroy(n) {
          let u = this.chart;
          u.highlightedPoint && u.highlightedPoint.series === n && (delete u.highlightedPoint, u.focusElement && u.focusElement.removeFocusBorder());
        }
        destroy() {
          this.eventProvider.removeAddedEvents();
        }
      }
      (function(p) {
        function n(k) {
          let A, E, P = this.series, B = this.highlightedPoint, z = B && Br(B) || 0, R = B && B.series.points || [], F = this.series && this.series[this.series.length - 1], G = F && F.points && F.points[F.points.length - 1];
          if (!P[0] || !P[0].points) return !1;
          if (B) {
            if (A = P[B.series.index + (k ? 1 : -1)], (E = R[z + (k ? 1 : -1)]) || !A || (E = A.points[k ? 0 : A.points.length - 1]), !E) return !1;
          } else E = k ? P[0].points[0] : G;
          return $i(E) ? (Ki(A = E.series) ? this.highlightedPoint = k ? A.points[A.points.length - 1] : A.points[0] : this.highlightedPoint = E, this.highlightAdjacentPoint(k)) : E.highlight();
        }
        function u(k) {
          let A = this.highlightedPoint, E = 1 / 0, P;
          return !!De(A.plotX) && !!De(A.plotY) && (this.series.forEach((B) => {
            Ki(B) || B.points.forEach((z) => {
              if (!De(z.plotY) || !De(z.plotX) || z === A) return;
              let R = z.plotY - A.plotY, F = Math.abs(z.plotX - A.plotX), G = Math.abs(R) * Math.abs(R) + F * F * 4;
              B.yAxis && B.yAxis.reversed && (R *= -1), !(R <= 0 && k || R >= 0 && !k || G < 5 || $i(z)) && G < E && (E = G, P = z);
            });
          }), !!P && P.highlight());
        }
        function g(k) {
          let A, E, P, B = this.highlightedPoint, z = this.series && this.series[this.series.length - 1], R = z && z.points && z.points[z.points.length - 1];
          return this.highlightedPoint ? !!(A = this.series[B.series.index + (k ? -1 : 1)]) && !!(E = (function(F, G, U, dt) {
            let nt = 1 / 0, rt, ht, tt, et = G.points.length, ft = (xt) => !(De(xt.plotX) && De(xt.plotY));
            if (!ft(F)) {
              for (; et--; ) !ft(rt = G.points[et]) && (tt = (F.plotX - rt.plotX) * (F.plotX - rt.plotX) * 4 + (F.plotY - rt.plotY) * (F.plotY - rt.plotY) * 1) < nt && (nt = tt, ht = et);
              return De(ht) ? G.points[ht] : void 0;
            }
          })(B, A)) && (Ki(A) ? (E.highlight(), (P = this.highlightAdjacentSeries(k)) ? P : (B.highlight(), !1)) : (E.highlight(), E.series.highlightNextValidPoint())) : (A = k ? this.series && this.series[0] : z, !!(E = k ? A && A.points && A.points[0] : R) && E.highlight());
        }
        function b(k = !0) {
          let A = this.series.chart, E = A.tooltip?.label?.element;
          (!this.isNull || this.series.options?.nullInteraction) && k ? this.onMouseOver() : A.tooltip && A.tooltip.hide(0), Yn(this), this.graphic && (A.setFocusToElement(this.graphic), !k && A.focusElement && A.focusElement.removeFocusBorder()), A.highlightedPoint = this;
          let P = E?.getBoundingClientRect().top;
          if (E && P && P < 0) {
            let B = window.scrollY;
            window.scrollTo({ behavior: "smooth", top: B + P });
          }
          return this;
        }
        function C() {
          let k = this.chart.highlightedPoint, A = (k && k.series) === this ? Br(k) : 0, E = this.points, P = E.length;
          if (E && P) {
            for (let B = A; B < P; ++B) if (!$i(E[B])) return E[B].highlight();
            for (let B = A; B >= 0; --B) if (!$i(E[B])) return E[B].highlight();
          }
          return !1;
        }
        p.compose = function(k, A, E) {
          let P = k.prototype, B = A.prototype, z = E.prototype;
          P.highlightAdjacentPoint || (P.highlightAdjacentPoint = n, P.highlightAdjacentPointVertical = u, P.highlightAdjacentSeries = g, B.highlight = b, z.keyboardMoveVertical = !0, ["column", "gantt", "pie"].forEach((R) => {
            Ir[R] && (Ir[R].prototype.keyboardMoveVertical = !1);
          }), z.highlightNextValidPoint = C);
        };
      })(Ds || (Ds = {}));
      let la = Ds, { hideSeriesFromAT: jn } = qt, { describeSeries: ha } = fi, Rr = class extends xe {
        static compose(p, n, u) {
          Sr.compose(u), ot.compose(u), la.compose(p, n, u);
        }
        init() {
          this.newDataAnnouncer = new Sr(this.chart), this.newDataAnnouncer.init(), this.keyboardNavigation = new la(this.chart, this.keyCodes), this.keyboardNavigation.init(), this.hideTooltipFromATWhenShown(), this.hideSeriesLabelsFromATWhenShown();
        }
        hideTooltipFromATWhenShown() {
          let p = this;
          this.chart.tooltip && this.addEvent(this.chart.tooltip.constructor, "refresh", function() {
            this.chart === p.chart && this.label && this.label.element && this.label.element.setAttribute("aria-hidden", !0);
          });
        }
        hideSeriesLabelsFromATWhenShown() {
          this.addEvent(this.chart, "afterDrawSeriesLabels", function() {
            this.series.forEach(function(p) {
              p.labelBySeries && p.labelBySeries.attr("aria-hidden", !0);
            });
          });
        }
        onChartRender() {
          this.chart.series.forEach(function(p) {
            (p.options.accessibility && p.options.accessibility.enabled) !== !1 && p.visible && p.getPointsCollection().length !== 0 ? ha(p) : jn(p);
          });
        }
        getKeyboardNavigation() {
          return this.keyboardNavigation.getKeyboardNavigationHandler();
        }
        destroy() {
          this.newDataAnnouncer.destroy(), this.keyboardNavigation.destroy();
        }
      }, { unhideChartElementFromAT: we } = qt, { getFakeMouseEvent: zr } = It, { attr: Un, pick: Vn } = K(), ca = class extends xe {
        constructor() {
          super(...arguments), this.focusedMapNavButtonIx = -1;
        }
        init() {
          let p = this, n = this.chart;
          this.proxyProvider.addGroup("zoom", "div"), ["afterShowResetZoom", "afterApplyDrilldown", "drillupall"].forEach((u) => {
            p.addEvent(n, u, function() {
              p.updateProxyOverlays();
            });
          });
        }
        onChartUpdate() {
          let p = this.chart, n = this;
          p.mapNavigation && p.mapNavigation.navButtons.forEach((u, g) => {
            we(p, u.element), n.setMapNavButtonAttrs(u.element, "accessibility.zoom.mapZoom" + (g ? "Out" : "In"));
          });
        }
        setMapNavButtonAttrs(p, n) {
          let u = this.chart;
          Un(p, { tabindex: -1, role: "button", "aria-label": u.langFormat(n, { chart: u }) });
        }
        onChartRender() {
          this.updateProxyOverlays();
        }
        updateProxyOverlays() {
          let p = this.chart;
          if (this.proxyProvider.clearGroup("zoom"), p.resetZoomButton && this.createZoomProxyButton(p.resetZoomButton, "resetZoomProxyButton", p.langFormat("accessibility.zoom.resetZoomButton", { chart: p })), p.drillUpButton && p.breadcrumbs && p.breadcrumbs.list) {
            let n = p.breadcrumbs.list[p.breadcrumbs.list.length - 1];
            this.createZoomProxyButton(p.drillUpButton, "drillUpProxyButton", p.langFormat("accessibility.drillUpButton", { chart: p, buttonText: p.breadcrumbs.getButtonText(n) }));
          }
        }
        createZoomProxyButton(p, n, u) {
          this[n] = this.proxyProvider.addProxyElement("zoom", { click: p }, "button", { "aria-label": u, tabindex: -1 });
        }
        getMapZoomNavigation() {
          let p = this.keyCodes, n = this.chart, u = this;
          return new ne(n, { keyCodeMap: [[[p.up, p.down, p.left, p.right], function(g) {
            return u.onMapKbdArrow(this, g);
          }], [[p.tab], function(g, b) {
            return u.onMapKbdTab(this, b);
          }], [[p.space, p.enter], function() {
            return u.onMapKbdClick(this);
          }]], validate: function() {
            return !!(n.mapView && n.mapNavigation && n.mapNavigation.navButtons.length);
          }, init: function(g) {
            return u.onMapNavInit(g);
          } });
        }
        onMapKbdArrow(p, n) {
          let u = this.chart, g = this.keyCodes, b = u.container, C = n === g.up || n === g.down, k = n === g.left || n === g.up ? 1 : -1, A = (C ? u.plotHeight : u.plotWidth) / 10 * k, E = 10 * Math.random(), P = { x: b.offsetLeft + u.plotLeft + u.plotWidth / 2 + E, y: b.offsetTop + u.plotTop + u.plotHeight / 2 + E }, B = C ? { x: P.x, y: P.y + A } : { x: P.x + A, y: P.y };
          return [zr("mousedown", P), zr("mousemove", B), zr("mouseup", B)].forEach((z) => b.dispatchEvent(z)), p.response.success;
        }
        onMapKbdTab(p, n) {
          let u = this.chart, g = p.response, b = n.shiftKey, C = b && !this.focusedMapNavButtonIx || !b && this.focusedMapNavButtonIx;
          if (u.mapNavigation.navButtons[this.focusedMapNavButtonIx].setState(0), C) return u.mapView && u.mapView.zoomBy(), g[b ? "prev" : "next"];
          this.focusedMapNavButtonIx += b ? -1 : 1;
          let k = u.mapNavigation.navButtons[this.focusedMapNavButtonIx];
          return u.setFocusToElement(k.box, k.element), k.setState(2), g.success;
        }
        onMapKbdClick(p) {
          let n = this.chart.mapNavigation.navButtons[this.focusedMapNavButtonIx].element;
          return this.fakeClickEvent(n), p.response.success;
        }
        onMapNavInit(p) {
          let n = this.chart, u = n.mapNavigation.navButtons[0], g = n.mapNavigation.navButtons[1], b = p > 0 ? u : g;
          n.setFocusToElement(b.box, b.element), b.setState(2), this.focusedMapNavButtonIx = p > 0 ? 0 : 1;
        }
        simpleButtonNavigation(p, n, u) {
          let g = this.keyCodes, b = this, C = this.chart;
          return new ne(C, { keyCodeMap: [[[g.tab, g.up, g.down, g.left, g.right], function(k, A) {
            let E = k === g.tab && A.shiftKey || k === g.left || k === g.up;
            return this.response[E ? "prev" : "next"];
          }], [[g.space, g.enter], function() {
            return Vn(u(this, C), this.response.success);
          }]], validate: function() {
            return C[p] && C[p].box && b[n].innerElement;
          }, init: function() {
            C.setFocusToElement(C[p].box, b[n].innerElement);
          } });
        }
        getKeyboardNavigation() {
          return [this.simpleButtonNavigation("resetZoomButton", "resetZoomProxyButton", function(p, n) {
            n.zoomOut();
          }), this.simpleButtonNavigation("drillUpButton", "drillUpProxyButton", function(p, n) {
            return n.drillUp(), p.response.prev;
          }), this.getMapZoomNavigation()];
        }
      }, { doc: Fr, isMS: qn, win: oi } = K(), da = { isHighContrastModeActive: function() {
        if (qn && oi.getComputedStyle) {
          let p = Fr.createElement("div");
          p.style.backgroundImage = "url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)", Fr.body.appendChild(p);
          let n = (p.currentStyle || oi.getComputedStyle(p)).backgroundImage;
          return Fr.body.removeChild(p), n === "none";
        }
        return oi.matchMedia && oi.matchMedia("(forced-colors: active)").matches;
      }, setHighContrastTheme: function(p) {
        p.highContrastModeActive = !0;
        let n = p.options.accessibility.highContrastTheme;
        p.update(n, !1);
        let u = n.colors?.length > 1;
        p.series.forEach(function(g) {
          let b = n.plotOptions[g.type] || {}, C = u && g.colorIndex !== void 0 ? n.colors[g.colorIndex] : b.color || "window", k = { color: b.color || "windowText", colors: u ? n.colors : [b.color || "windowText"], borderColor: b.borderColor || "window", fillColor: C };
          g.update(k, !1), g.points && g.points.forEach(function(A) {
            A.options && A.options.color && A.update({ color: b.color || "windowText", borderColor: b.borderColor || "window" }, !1);
          });
        }), p.redraw();
      } }, ua = { chart: { backgroundColor: "window" }, title: { style: { color: "windowText" } }, subtitle: { style: { color: "windowText" } }, colorAxis: { minColor: "windowText", maxColor: "windowText", stops: [], dataClasses: [] }, colors: ["windowText"], xAxis: { gridLineColor: "windowText", labels: { style: { color: "windowText" } }, lineColor: "windowText", minorGridLineColor: "windowText", tickColor: "windowText", title: { style: { color: "windowText" } } }, yAxis: { gridLineColor: "windowText", labels: { style: { color: "windowText" } }, lineColor: "windowText", minorGridLineColor: "windowText", tickColor: "windowText", title: { style: { color: "windowText" } } }, tooltip: { backgroundColor: "window", borderColor: "windowText", style: { color: "windowText" } }, plotOptions: { series: { lineColor: "windowText", fillColor: "window", borderColor: "windowText", edgeColor: "windowText", borderWidth: 1, dataLabels: { connectorColor: "windowText", color: "windowText", style: { color: "windowText", textOutline: "none" } }, marker: { lineColor: "windowText", fillColor: "windowText" } }, pie: { color: "window", colors: ["window"], borderColor: "windowText", borderWidth: 1 }, boxplot: { fillColor: "window" }, candlestick: { lineColor: "windowText", fillColor: "window" }, errorbar: { fillColor: "window" } }, legend: { backgroundColor: "window", itemStyle: { color: "windowText" }, itemHoverStyle: { color: "windowText" }, itemHiddenStyle: { color: "#555" }, title: { style: { color: "windowText" } } }, credits: { style: { color: "windowText" } }, drilldown: { activeAxisLabelStyle: { color: "windowText" }, activeDataLabelStyle: { color: "windowText" } }, navigation: { buttonOptions: { symbolStroke: "windowText", theme: { fill: "window" } } }, rangeSelector: { buttonTheme: { fill: "window", stroke: "windowText", style: { color: "windowText" }, states: { hover: { fill: "window", stroke: "windowText", style: { color: "windowText" } }, select: { fill: "#444", stroke: "windowText", style: { color: "windowText" } } } }, inputBoxBorderColor: "windowText", inputStyle: { backgroundColor: "window", color: "windowText" }, labelStyle: { color: "windowText" } }, navigator: { handles: { backgroundColor: "window", borderColor: "windowText" }, outlineColor: "windowText", maskFill: "transparent", series: { color: "windowText", lineColor: "windowText" }, xAxis: { gridLineColor: "windowText" } }, scrollbar: { barBackgroundColor: "#444", barBorderColor: "windowText", buttonArrowColor: "windowText", buttonBackgroundColor: "window", buttonBorderColor: "windowText", rifleColor: "windowText", trackBackgroundColor: "window", trackBorderColor: "windowText" } }, { error: Is, pick: Kn } = K();
      function Hr(p, n, u) {
        let g = p, b, C = 0;
        for (; C < n.length - 1; ++C) g = g[b = n[C]] = Kn(g[b], {});
        g[n[n.length - 1]] = u;
      }
      function Wr(p, n, u, g) {
        function b(A, E) {
          return E.reduce(function(P, B) {
            return P[B];
          }, A);
        }
        let C = b(p.options, n), k = b(p.options, u);
        Object.keys(g).forEach(function(A) {
          let E = C[A];
          E !== void 0 && (Hr(k, g[A], E), Is(32, !1, p, { [n.join(".") + "." + A]: u.join(".") + "." + g[A].join(".") }));
        });
      }
      let $n = function(p) {
        let n = p.options.chart, u = p.options.accessibility || {};
        ["description", "typeDescription"].forEach(function(g) {
          n[g] && (u[g] = n[g], Is(32, !1, p, { [`chart.${g}`]: `use accessibility.${g}` }));
        }), p.axes.forEach(function(g) {
          let b = g.options;
          b && b.description && (b.accessibility = b.accessibility || {}, b.accessibility.description = b.description, Is(32, !1, p, { "axis.description": "use axis.accessibility.description" }));
        }), p.series && (function(g) {
          let b = { description: ["accessibility", "description"], exposeElementToA11y: ["accessibility", "exposeAsGroupOnly"], pointDescriptionFormatter: ["accessibility", "point", "descriptionFormatter"], skipKeyboardNavigation: ["accessibility", "keyboardNavigation", "enabled"], "accessibility.pointDescriptionFormatter": ["accessibility", "point", "descriptionFormatter"] };
          g.series.forEach(function(C) {
            Object.keys(b).forEach(function(k) {
              let A = C.options[k];
              k === "accessibility.pointDescriptionFormatter" && (A = C.options.accessibility && C.options.accessibility.pointDescriptionFormatter), A !== void 0 && (Hr(C.options, b[k], k === "skipKeyboardNavigation" ? !A : A), Is(32, !1, g, { [`series.${k}`]: "series." + b[k].join(".") }));
            });
          });
        })(p), Wr(p, ["accessibility"], ["accessibility"], { pointDateFormat: ["point", "dateFormat"], pointDateFormatter: ["point", "dateFormatter"], pointDescriptionFormatter: ["point", "descriptionFormatter"], pointDescriptionThreshold: ["series", "pointDescriptionEnabledThreshold"], pointNavigationThreshold: ["keyboardNavigation", "seriesNavigation", "pointNavigationEnabledThreshold"], pointValueDecimals: ["point", "valueDecimals"], pointValuePrefix: ["point", "valuePrefix"], pointValueSuffix: ["point", "valueSuffix"], screenReaderSectionFormatter: ["screenReaderSection", "beforeChartFormatter"], describeSingleSeries: ["series", "describeSingleSeries"], seriesDescriptionFormatter: ["series", "descriptionFormatter"], onTableAnchorClick: ["screenReaderSection", "onViewDataTableClick"], axisRangeDateFormat: ["screenReaderSection", "axisRangeDateFormat"] }), Wr(p, ["accessibility", "keyboardNavigation"], ["accessibility", "keyboardNavigation", "seriesNavigation"], { skipNullPoints: ["skipNullPoints"], mode: ["mode"] }), Wr(p, ["lang", "accessibility"], ["lang", "accessibility"], { legendItem: ["legend", "legendItem"], legendLabel: ["legend", "legendLabel"], mapZoomIn: ["zoom", "mapZoomIn"], mapZoomOut: ["zoom", "mapZoomOut"], resetZoomButton: ["zoom", "resetZoomButton"], screenReaderRegionLabel: ["screenReaderSection", "beforeRegionLabel"], rangeSelectorButton: ["rangeSelector", "buttonText"], rangeSelectorMaxInput: ["rangeSelector", "maxInputLabel"], rangeSelectorMinInput: ["rangeSelector", "minInputLabel"], svgContainerEnd: ["screenReaderSection", "endOfChartMarker"], viewAsDataTable: ["table", "viewAsDataTableButtonText"], tableSummary: ["table", "tableSummary"] });
      }, { defaultOptions: Zn } = K(), { doc: ki } = K(), { addEvent: $e, extend: _n, fireEvent: Xr, merge: Bs } = K(), { removeElement: pa } = It;
      class Gr {
        constructor(n) {
          this.init(n);
        }
        init(n) {
          if (this.chart = n, !ki?.addEventListener) {
            this.zombie = !0, this.components = {}, n.renderTo.setAttribute("aria-hidden", !0);
            return;
          }
          $n(n), this.proxyProvider = new Dr(this.chart), this.initComponents(), this.keyboardNavigation = new tr(n, this.components);
        }
        initComponents() {
          let n = this.chart, u = this.proxyProvider, g = n.options.accessibility;
          this.components = { container: new Wa(), infoRegions: new $a(), legend: new Co(), chartMenu: new ps(), rangeSelector: new Q(), series: new Rr(), zoom: new ca(), navigator: new En() }, g.customComponents && _n(this.components, g.customComponents);
          let b = this.components;
          this.getComponentOrder().forEach(function(C) {
            b[C].initBase(n, u), b[C].init();
          });
        }
        getComponentOrder() {
          return this.components ? this.components.series ? ["series"].concat(Object.keys(this.components).filter((n) => n !== "series")) : Object.keys(this.components) : [];
        }
        update() {
          let n = this.components, u = this.chart, g = u.options.accessibility;
          Xr(u, "beforeA11yUpdate"), u.types = this.getChartTypes();
          let b = g.keyboardNavigation.order;
          this.proxyProvider.updateGroupOrder(b), this.getComponentOrder().forEach(function(C) {
            n[C].onChartUpdate(), Xr(u, "afterA11yComponentUpdate", { name: C, component: n[C] });
          }), this.keyboardNavigation.update(b), !u.highContrastModeActive && g.highContrastMode !== !1 && (da.isHighContrastModeActive() || g.highContrastMode === !0) && da.setHighContrastTheme(u), Xr(u, "afterA11yUpdate", { accessibility: this });
        }
        destroy() {
          let n = this.chart || {}, u = this.components;
          Object.keys(u).forEach(function(g) {
            u[g].destroy(), u[g].destroyBase();
          }), this.proxyProvider && this.proxyProvider.destroy(), n.announcerContainer && pa(n.announcerContainer), this.keyboardNavigation && this.keyboardNavigation.destroy(), n.renderTo && n.renderTo.setAttribute("aria-hidden", !0), n.focusElement && n.focusElement.removeFocusBorder();
        }
        getChartTypes() {
          let n = {};
          return this.chart.series.forEach(function(u) {
            n[u.type] = 1;
          }), Object.keys(n);
        }
      }
      (function(p) {
        function n() {
          this.accessibility && this.accessibility.destroy();
        }
        function u() {
          this.a11yDirty && this.renderTo && (delete this.a11yDirty, this.updateA11yEnabled());
          let k = this.accessibility;
          k && !k.zombie && (k.proxyProvider.updateProxyElementPositions(), k.getComponentOrder().forEach(function(A) {
            k.components[A].onChartRender();
          }));
        }
        function g(k) {
          let A = k.options.accessibility;
          A && (A.customComponents && (this.options.accessibility.customComponents = A.customComponents, delete A.customComponents), Bs(!0, this.options.accessibility, A), this.accessibility && this.accessibility.destroy && (this.accessibility.destroy(), delete this.accessibility)), this.a11yDirty = !0;
        }
        function b() {
          let k = this.accessibility, A = this.options.accessibility, E = this.renderer.boxWrapper.element, P = this.title;
          if (A && A.enabled) k && !k.zombie ? k.update() : (this.accessibility = k = new p(this), k && !k.zombie && k.update(), E.getAttribute("role") === "img" && E.removeAttribute("role"));
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
        p.i18nFormat = Ae.i18nFormat, p.compose = function(k, A, E, P, B, z) {
          tr.compose(k), Sr.compose(P), Co.compose(k, A), ps.compose(k), Rr.compose(k, E, P), Ae.compose(k), Vs.compose(k, B), z && Q.compose(k, z);
          let R = k.prototype;
          R.updateA11yEnabled || (R.updateA11yEnabled = b, $e(k, "destroy", n), $e(k, "render", u), $e(k, "update", g), ["addSeries", "init"].forEach((F) => {
            $e(k, F, function() {
              this.a11yDirty = !0;
            });
          }), ["afterApplyDrilldown", "drillupall"].forEach((F) => {
            $e(k, F, function() {
              let G = this.accessibility;
              G && !G.zombie && G.update();
            });
          }), $e(E, "update", C), ["update", "updatedData", "remove"].forEach((F) => {
            $e(P, F, function() {
              this.chart.accessibility && (this.chart.a11yDirty = !0);
            });
          }));
        };
      })(Gr || (Gr = {})), Bs(!0, Zn, { accessibility: { enabled: !0, screenReaderSection: { beforeChartFormat: "<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{playAsSoundButton}</div><div>{viewTableButton}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div><div>{annotationsTitle}{annotationsList}</div>", afterChartFormat: "{endOfChartMarker}", axisRangeDateFormat: "%Y-%m-%d %H:%M:%S" }, series: { descriptionFormat: "{seriesDescription}{authorDescription}{axisDescription}", describeSingleSeries: !1, pointDescriptionEnabledThreshold: 200 }, point: { valueDescriptionFormat: "{xDescription}{separator}{value}.", describeNull: !0 }, landmarkVerbosity: "all", linkedDescription: '*[data-highcharts-chart="{index}"] + .highcharts-description', highContrastMode: "auto", keyboardNavigation: { enabled: !0, focusBorder: { enabled: !0, hideBrowserFocusOutline: !0, style: { color: "#334eff", lineWidth: 2, borderRadius: 3 }, margin: 2 }, order: ["series", "zoom", "rangeSelector", "navigator", "legend", "chartMenu"], wrapAround: !0, seriesNavigation: { skipNullPoints: void 0, pointNavigationEnabledThreshold: !1, rememberPointFocus: !1 } }, announceNewData: { enabled: !1, minAnnounceInterval: 5e3, interruptUser: !1 } }, legend: { accessibility: { enabled: !0, keyboardNavigation: { enabled: !0 } } }, exporting: { accessibility: { enabled: !0 } }, navigator: { accessibility: { enabled: !0 } } }, { accessibility: { highContrastTheme: ua }, lang: { accessibility: { defaultChartTitle: "Chart", chartContainerLabel: "{title}. Highcharts interactive chart.", svgContainerLabel: "Interactive chart", drillUpButton: "{buttonText}", credits: "Chart credits: {creditsStr}", thousandsSep: ",", svgContainerTitle: "", graphicContainerLabel: "", screenReaderSection: { beforeRegionLabel: "", afterRegionLabel: "", annotations: { heading: "Chart annotations summary", descriptionSinglePoint: "{annotationText}. Related to {annotationPoint}", descriptionMultiplePoints: "{annotationText}. Related to {annotationPoint}{#each additionalAnnotationPoints}, also related to {this}{/each}", descriptionNoPoints: "{annotationText}" }, endOfChartMarker: "End of interactive chart." }, sonification: { playAsSoundButtonText: "Play as sound, {chartTitle}", playAsSoundClickAnnouncement: "Play" }, legend: { legendLabelNoTitle: "Toggle series visibility, {chartTitle}", legendLabel: "Chart legend: {legendTitle}", legendItem: "Show {itemName}" }, zoom: { mapZoomIn: "Zoom chart", mapZoomOut: "Zoom out chart", resetZoomButton: "Reset zoom" }, rangeSelector: { dropdownLabel: "{rangeTitle}", minInputLabel: "Select start date.", maxInputLabel: "Select end date.", clickButtonAnnouncement: "Viewing {axisRangeDescription}" }, navigator: { handleLabel: "{#eq handleIx 0}Start, percent{else}End, percent{/eq}", groupLabel: "Axis zoom", changeAnnouncement: "{axisRangeDescription}" }, table: { viewAsDataTableButtonText: "View as data table, {chartTitle}", tableSummary: "Table representation of chart." }, announceNewData: { newDataAnnounce: "Updated data for chart {chartTitle}", newSeriesAnnounceSingle: "New data series: {seriesDesc}", newPointAnnounceSingle: "New data point: {pointDesc}", newSeriesAnnounceMultiple: "New data series in chart {chartTitle}: {seriesDesc}", newPointAnnounceMultiple: "New data point in chart {chartTitle}: {pointDesc}" }, seriesTypeDescriptions: { boxplot: "Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.", arearange: "Arearange charts are line charts displaying a range between a lower and higher value for each point.", areasplinerange: "These charts are line charts displaying a range between a lower and higher value for each point.", bubble: "Bubble charts are scatter charts where each data point also has a size value.", columnrange: "Columnrange charts are column charts displaying a range between a lower and higher value for each point.", errorbar: "Errorbar series are used to display the variability of the data.", funnel: "Funnel charts are used to display reduction of data in stages.", pyramid: "Pyramid charts consist of a single pyramid with item heights corresponding to each point value.", waterfall: "A waterfall chart is a column chart where each column contributes towards a total end value." }, chartTypes: { emptyChart: "Empty chart", mapTypeDescription: "Map of {mapTitle} with {numSeries} data series.", unknownMap: "Map of unspecified region with {numSeries} data series.", combinationChart: "Combination chart with {numSeries} data series.", defaultSingle: "Chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.", defaultMultiple: "Chart with {numSeries} data series.", splineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.", splineMultiple: "Line chart with {numSeries} lines.", lineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.", lineMultiple: "Line chart with {numSeries} lines.", columnSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.", columnMultiple: "Bar chart with {numSeries} data series.", barSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.", barMultiple: "Bar chart with {numSeries} data series.", pieSingle: "Pie chart with {numPoints} {#eq numPoints 1}slice{else}slices{/eq}.", pieMultiple: "Pie chart with {numSeries} pies.", scatterSingle: "Scatter chart with {numPoints} {#eq numPoints 1}point{else}points{/eq}.", scatterMultiple: "Scatter chart with {numSeries} data series.", boxplotSingle: "Boxplot with {numPoints} {#eq numPoints 1}box{else}boxes{/eq}.", boxplotMultiple: "Boxplot with {numSeries} data series.", bubbleSingle: "Bubble chart with {numPoints} {#eq numPoints 1}bubbles{else}bubble{/eq}.", bubbleMultiple: "Bubble chart with {numSeries} data series." }, axis: { xAxisDescriptionSingular: "The chart has 1 X axis displaying {names[0]}. {ranges[0]}", xAxisDescriptionPlural: "The chart has {numAxes} X axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.", yAxisDescriptionSingular: "The chart has 1 Y axis displaying {names[0]}. {ranges[0]}", yAxisDescriptionPlural: "The chart has {numAxes} Y axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.", timeRangeDays: "Data range: {range} days.", timeRangeHours: "Data range: {range} hours.", timeRangeMinutes: "Data range: {range} minutes.", timeRangeSeconds: "Data range: {range} seconds.", rangeFromTo: "Data ranges from {rangeFrom} to {rangeTo}.", rangeCategories: "Data range: {numCategories} categories." }, exporting: { chartMenuLabel: "Chart menu", menuButtonLabel: "View chart menu, {chartTitle}" }, series: { summary: { default: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", defaultCombination: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", line: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", lineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", spline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", splineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", column: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", columnCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", bar: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", barCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", pie: "{series.name}, pie {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.", pieCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Pie with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.", scatter: "{series.name}, scatter plot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.", scatterCombination: "{series.name}, series {seriesNumber} of {chart.series.length}, scatter plot with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.", boxplot: "{series.name}, boxplot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.", boxplotCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Boxplot with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.", bubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.", bubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.", map: "{series.name}, map {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.", mapCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Map with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.", mapline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", maplineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", mapbubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.", mapbubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}." }, description: "{description}", xAxisDescription: "X axis, {name}", yAxisDescription: "Y axis, {name}", nullPointValue: "No value", pointAnnotationsDescription: "{#each annotations}Annotation: {this}{/each}" } } } });
      let ga = Gr, he = K();
      he.i18nFormat = ga.i18nFormat, he.A11yChartUtilities = qt, he.A11yHTMLUtilities = It, he.AccessibilityComponent = xe, he.KeyboardNavigationHandler = ne, he.SeriesAccessibilityDescriber = fi, ga.compose(he.Chart, he.Legend, he.Point, he.Series, he.SVGElement, he.RangeSelector);
      let Yr = K();
      return is.default;
    })());
  })(za)), za.exports;
}
Fu();
const Nl = "highcharts";
let Qh = !1, tc = !1, ec = !1;
class Hu {
  constructor() {
  }
  // Operations - Render cartesian chart.
  async renderCartesianChart(Yt, at, zt, ue) {
    const Vt = [];
    for (const _t of at.data.measures)
      Vt.push({ type: Yt.options.highchartsType, name: _t.name, data: _t.data });
    const Dt = {
      chart: { type: Yt.options.highchartsType },
      plotOptions: { series: { borderColor: "#333" } },
      series: Vt,
      title: { text: at.title.text },
      xAxis: { categories: at.data.categoryLabels },
      yAxis: { title: { text: at.data.name } }
    }, Zt = Bl.chart(zt, Dt, ue);
    return { chart: Zt, resize: () => Zt.reflow(), vendorId: Nl };
  }
  // Operations - Render polar chart.
  async renderPolarChart(Yt, at, zt, ue) {
    await Promise.all([this.loadHighchartsMore()]);
    const Vt = [];
    for (const _t of at.data.measures)
      Vt.push({ type: Yt.options.highchartsType, name: _t.name, data: _t.data });
    const Dt = {
      chart: { polar: !0 },
      plotOptions: { series: { borderColor: "#333" } },
      series: Vt,
      title: { text: at.title.text },
      xAxis: { categories: at.data.categoryLabels },
      yAxis: { title: { text: at.data.name } }
    }, Zt = Bl.chart(zt, Dt, ue);
    return { chart: Zt, resize: () => Zt.reflow(), vendorId: Nl };
  }
  // Operations - Render range chart.
  async renderRangeChart(Yt, at, zt, ue) {
    await Promise.all([this.loadHighchartsMore()]);
    const Vt = [], Dt = [];
    for (let oe = 0; oe < at.data.measures[0].data.length; oe++)
      Dt.push([at.data.measures[0].data[oe][0], at.data.measures[1].data[oe][0]]);
    Vt.push({ type: Yt.options.highchartsType, name: "Unknown", data: Dt });
    const Zt = {
      chart: { type: Yt.options.highchartsType, inverted: Yt.options.inverted },
      plotOptions: { series: { borderColor: "#333" } },
      series: Vt,
      title: { text: at.title.text },
      xAxis: { categories: at.data.categoryLabels },
      yAxis: { title: { text: at.data.name } }
    }, _t = Bl.chart(zt, Zt, ue);
    return { chart: _t, resize: () => _t.reflow(), vendorId: Nl };
  }
  // Utilities - Load dependency wheel and sankey modules.
  async loadDependencyWheelAndSankeyModules() {
    Qh || (await Promise.all([import("./dependency-wheel-Q_QgS0dQ.js").then((Yt) => Yt.d), import("./sankey-CzXq_A30.js").then((Yt) => Yt.s)]), Qh = !0);
  }
  // Utilities - Load Highcharts more.
  async loadHighchartsMore() {
    tc || (await import("./highcharts-more-DGRrl1r3.js").then((Yt) => Yt.h), tc = !0);
  }
  // Utilities - Load streamgraph module.
  async loadStreamgraphModule() {
    ec || (await import("./streamgraph-B3O7m-_M.js").then((Yt) => Yt.s), ec = !0);
  }
}
export {
  Hu as H,
  Lu as g
};
