var Ei;
(function(c) {
  c.SVG_NS = "http://www.w3.org/2000/svg", c.product = "Highcharts", c.version = "12.4.0", c.win = typeof window < "u" ? window : {}, // eslint-disable-line node/no-unsupported-features/es-builtins
  c.doc = c.win.document, c.svg = !!c.doc?.createElementNS?.(c.SVG_NS, "svg")?.createSVGRect, c.pageLang = c.doc?.documentElement?.closest("[lang]")?.lang, c.userAgent = c.win.navigator?.userAgent || "", c.isChrome = c.win.chrome, c.isFirefox = c.userAgent.indexOf("Firefox") !== -1, c.isMS = /(edge|msie|trident)/i.test(c.userAgent) && !c.win.opera, c.isSafari = !c.isChrome && c.userAgent.indexOf("Safari") !== -1, c.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(c.userAgent), c.isWebKit = c.userAgent.indexOf("AppleWebKit") !== -1, c.deg2rad = Math.PI * 2 / 360, c.marginNames = [
    "plotTop",
    "marginRight",
    "marginBottom",
    "plotLeft"
  ], c.noop = function() {
  }, c.supportsPassiveEvents = (function() {
    let t = !1;
    if (!c.isMS) {
      const e = Object.defineProperty({}, "passive", {
        get: function() {
          t = !0;
        }
      });
      c.win.addEventListener && c.win.removeEventListener && (c.win.addEventListener("testPassive", c.noop, e), c.win.removeEventListener("testPassive", c.noop, e));
    }
    return t;
  })(), c.charts = [], c.composed = [], c.dateFormats = {}, c.seriesTypes = {}, c.symbolSizes = {}, c.chartCount = 0;
})(Ei || (Ei = {}));
const N = Ei, { charts: $r, doc: Fe, win: Lt } = N;
function ae(c, t, e, i) {
  const s = t ? "Highcharts error" : "Highcharts warning";
  c === 32 && (c = `${s}: Deprecated member`);
  const r = Ki(c);
  let n = r ? `${s} #${c}: www.highcharts.com/errors/${c}/` : c.toString();
  const o = function() {
    if (t)
      throw new Error(n);
    Lt.console && ae.messages.indexOf(n) === -1 && console.warn(n);
  };
  if (typeof i < "u") {
    let a = "";
    r && (n += "?"), Pt(i, function(l, h) {
      a += `
 - ${h}: ${l}`, r && (n += encodeURI(h) + "=" + encodeURI(l));
    }), n += a;
  }
  wr(N, "displayError", { chart: e, code: c, message: n, params: i }, o), ae.messages.push(n);
}
(function(c) {
  c.messages = [];
})(ae || (ae = {}));
function Ir(c, ...t) {
  let e, i = [c, ...t], s = {};
  const r = function(o, a) {
    return typeof o != "object" && (o = {}), Pt(a, function(l, h) {
      h === "__proto__" || h === "constructor" || (jt(l, !0) && !mr(l) && !Ui(l) ? o[h] = r(o[h] || {}, l) : o[h] = a[h]);
    }), o;
  };
  c === !0 && (s = i[1], i = Array.prototype.slice.call(i, 2));
  const n = i.length;
  for (e = 0; e < n; e++)
    s = r(s, i[e]);
  return s;
}
function Br(c, t, e) {
  return c > t ? c < e ? c : e : t;
}
function Nr(c, t = 0, e) {
  const i = t % 2 / 2, s = e ? -1 : 1;
  return (Math.round(c * s - i) + i) * s;
}
function Rr(c, t, e, i) {
  const s = {};
  function r(n, o, a, l) {
    const h = e ? o : n;
    Pt(n, function(f, d) {
      if (!l && i && i.indexOf(d) > -1 && o[d]) {
        f = yr(f), a[d] = [];
        for (let p = 0; p < Math.max(f.length, o[d].length); p++)
          o[d][p] && (f[p] === void 0 ? a[d][p] = o[d][p] : (a[d][p] = {}, r(f[p], o[d][p], a[d][p], l + 1)));
      } else jt(f, !0) && !f.nodeType ? (a[d] = Ge(f) ? [] : {}, r(f, o[d] || {}, a[d], l + 1), Object.keys(a[d]).length === 0 && // Except colorAxis which is a special case where the empty
      // object means it is enabled. Which is unfortunate and we
      // should try to find a better way.
      !(d === "colorAxis" && l === 0) && delete a[d]) : (n[d] !== o[d] || // If the newer key is explicitly undefined, keep it (#10525)
      d in n && !(d in o)) && d !== "__proto__" && d !== "constructor" && (a[d] = h[d]);
    });
  }
  return r(c, t, s, 0), s;
}
function gr(c, t) {
  return parseInt(c, t || 10);
}
function le(c) {
  return typeof c == "string";
}
function Ge(c) {
  const t = Object.prototype.toString.call(c);
  return t === "[object Array]" || t === "[object Array Iterator]";
}
function jt(c, t) {
  return !!c && typeof c == "object" && (!t || !Ge(c));
}
function Ui(c) {
  return jt(c) && typeof c.nodeType == "number";
}
function mr(c) {
  const t = c?.constructor;
  return !!(jt(c, !0) && !Ui(c) && t?.name && t.name !== "Object");
}
function Ki(c) {
  return typeof c == "number" && !isNaN(c) && c < 1 / 0 && c > -1 / 0;
}
function zr(c, t) {
  let e = c.length;
  for (; e--; )
    if (c[e] === t) {
      c.splice(e, 1);
      break;
    }
}
function Wr(c, t) {
  const e = c.options.index, i = t.length;
  let s;
  for (
    // Internal item (navigator) should always be pushed to the end
    s = c.options.isInternal ? i : 0;
    s < i + 1;
    s++
  )
    if (
      // No index option, reached the end of the collection,
      // equivalent to pushing
      !t[s] || // Handle index option, the element to insert has lower index
      Ki(e) && e < ce(t[s].options.index, t[s]._i) || // Insert the new item before other internal items
      // (navigator)
      t[s].options.isInternal
    ) {
      t.splice(s, 0, c);
      break;
    }
  return s;
}
function Fr(c, t) {
  return c.indexOf(t) < 0 && !!c.push(t);
}
function Wt(c) {
  return typeof c < "u" && c !== null;
}
function xr(c, t, e) {
  const i = le(t) && !Wt(e);
  let s;
  const r = (n, o) => {
    Wt(n) ? c.setAttribute(o, n) : i ? (s = c.getAttribute(o), !s && o === "class" && (s = c.getAttribute(o + "Name"))) : c.removeAttribute(o);
  };
  return le(t) ? r(e, t) : Pt(t, r), s;
}
function yr(c) {
  return Ge(c) ? c : [c];
}
function jr(c, t, e) {
  return t > 0 ? setTimeout(c, t, e) : (c.call(0, e), -1);
}
function Xr(c) {
  Wt(c) && clearTimeout(c);
}
function Ft(c, t) {
  let e;
  c || (c = {});
  for (e in t)
    c[e] = t[e];
  return c;
}
function ce() {
  const c = arguments, t = c.length;
  for (let e = 0; e < t; e++) {
    const i = c[e];
    if (typeof i < "u" && i !== null)
      return i;
  }
}
function Di(c, t) {
  Ft(c.style, t);
}
function Hr(c, t, e, i, s) {
  const r = Fe.createElement(c);
  return t && Ft(r, t), s && Di(r, { padding: "0", border: "none", margin: "0" }), e && Di(r, e), i && i.appendChild(r), r;
}
function Gr(c, t) {
  const e = (function() {
  });
  return e.prototype = new c(), Ft(e.prototype, t), e;
}
function Yr(c, t, e) {
  return new Array((t || 2) + 1 - String(c).replace("-", "").length).join(e || "0") + c;
}
function Vr(c, t, e) {
  return /%$/.test(c) ? t * parseFloat(c) / 100 + (e || 0) : parseFloat(c);
}
function Ur(c, ...t) {
  let e, i;
  do {
    e = c;
    for (i of t)
      c = c.replace(i[0], i[1]);
  } while (c !== e);
  return c;
}
function Kr(c, t, e) {
  const i = c[t];
  c[t] = function() {
    const s = arguments, r = this;
    return e.apply(this, [
      function() {
        return i.apply(r, arguments.length ? arguments : s);
      }
    ].concat([].slice.call(arguments)));
  };
}
function br(c) {
  return Math.pow(10, Math.floor(Math.log(c) / Math.LN10));
}
function qr(c, t, e, i, s) {
  let r, n = c;
  e = ce(e, br(c));
  const o = c / e;
  for (t || (t = s ? (
    // Finer grained ticks when the tick amount is hard set, including
    // when alignTicks is true on multiple axes (#4580).
    [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]
  ) : (
    // Else, let ticks fall on rounder numbers
    [1, 2, 2.5, 5, 10]
  ), i === !1 && (e === 1 ? t = t.filter(function(a) {
    return a % 1 === 0;
  }) : e <= 0.1 && (t = [1 / e]))), r = 0; r < t.length && (n = t[r], !(s && n * e >= c || !s && o <= (t[r] + (t[r + 1] || t[r])) / 2)); r++)
    ;
  return n = vr(n * e, -Math.round(Math.log(1e-3) / Math.LN10)), n;
}
function Zr(c, t) {
  const e = c.length;
  let i, s;
  for (s = 0; s < e; s++)
    c[s].safeI = s;
  for (c.sort(function(r, n) {
    return i = t(r, n), i === 0 ? r.safeI - n.safeI : i;
  }), s = 0; s < e; s++)
    delete c[s].safeI;
}
function _r(c) {
  let t = c.length, e = c[0];
  for (; t--; )
    c[t] < e && (e = c[t]);
  return e;
}
function Jr(c) {
  let t = c.length, e = c[0];
  for (; t--; )
    c[t] > e && (e = c[t]);
  return e;
}
function Qr(c, t, e) {
  Pt(c, function(i, s) {
    i !== t && i?.destroy && i.destroy(), (i?.destroy || !e) && delete c[s];
  });
}
function tn(c) {
  c?.parentElement?.removeChild(c);
}
function vr(c, t) {
  return c > 1e14 ? c : parseFloat(c.toPrecision(t || 14));
}
const en = {
  millisecond: 1,
  second: 1e3,
  minute: 6e4,
  hour: 36e5,
  day: 24 * 36e5,
  week: 168 * 36e5,
  month: 672 * 36e5,
  year: 364 * 24 * 36e5
};
Math.easeInOutSine = function(c) {
  return -0.5 * (Math.cos(Math.PI * c) - 1);
};
const sn = (c = "") => ({
  center: 0.5,
  right: 1,
  middle: 0.5,
  bottom: 1
})[c] || 0;
function rn(c, t) {
  const e = !t;
  let i, s, r, n;
  return c.forEach((o) => {
    if (o.length > 1)
      for (s = o.length - 1, n = s; n > 0; n--)
        r = o[n] - o[n - 1], r < 0 && !e ? (t?.(), t = void 0) : r && (typeof i > "u" || r < i) && (i = r);
  }), i;
}
function nn(c, t) {
  const e = c.split(".");
  for (; e.length && Wt(t); ) {
    const i = e.shift();
    if (typeof i > "u" || i === "__proto__")
      return;
    if (i === "this") {
      let r;
      return jt(t) && (r = t["@this"]), r ?? t;
    }
    const s = t[i.replace(/[\\'"]/g, "")];
    if (!Wt(s) || typeof s == "function" || typeof s.nodeType == "number" || s === Lt)
      return;
    t = s;
  }
  return t;
}
function ne(c, t, e) {
  let i;
  if (t === "width") {
    let r = Math.min(c.offsetWidth, c.scrollWidth);
    const n = c.getBoundingClientRect?.().width;
    return n < r && n >= r - 1 && (r = Math.floor(n)), Math.max(
      0,
      // #8377
      r - (ne(c, "padding-left", !0) || 0) - (ne(c, "padding-right", !0) || 0)
    );
  }
  if (t === "height")
    return Math.max(
      0,
      // #8377
      Math.min(c.offsetHeight, c.scrollHeight) - (ne(c, "padding-top", !0) || 0) - (ne(c, "padding-bottom", !0) || 0)
    );
  const s = Lt.getComputedStyle(c, void 0);
  return s && (i = s.getPropertyValue(t), ce(e, t !== "opacity") && (i = gr(i))), i;
}
const on = Array.prototype.find ? function(c, t) {
  return c.find(t);
} : (
  // Legacy implementation. PhantomJS, IE <= 11 etc. #7223.
  function(c, t) {
    let e;
    const i = c.length;
    for (e = 0; e < i; e++)
      if (t(c[e], e))
        return c[e];
  }
);
function an(c) {
  const t = Fe.documentElement, e = c.parentElement || c.parentNode ? c.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 };
  return {
    top: e.top + (Lt.pageYOffset || t.scrollTop) - (t.clientTop || 0),
    left: e.left + (Lt.pageXOffset || t.scrollLeft) - (t.clientLeft || 0),
    width: e.width,
    height: e.height
  };
}
function Pt(c, t, e) {
  for (const i in c)
    Object.hasOwnProperty.call(c, i) && t.call(e || c[i], c[i], i, c);
}
function ln(c, t, e, i = {}) {
  const s = typeof c == "function" && c.prototype || c;
  Object.hasOwnProperty.call(s, "hcEvents") || (s.hcEvents = {});
  const r = s.hcEvents;
  N.Point && // Without H a dependency loop occurs
  c instanceof N.Point && c.series && c.series.chart && (c.series.chart.runTrackerClick = !0);
  const n = c.addEventListener;
  n && n.call(c, t, e, N.supportsPassiveEvents ? {
    passive: i.passive === void 0 ? t.indexOf("touch") !== -1 : i.passive,
    capture: !1
  } : !1), r[t] || (r[t] = []);
  const o = {
    fn: e,
    order: typeof i.order == "number" ? i.order : 1 / 0
  };
  return r[t].push(o), r[t].sort((a, l) => a.order - l.order), function() {
    Sr(c, t, e);
  };
}
function Sr(c, t, e) {
  function i(n, o) {
    const a = c.removeEventListener;
    a && a.call(c, n, o, !1);
  }
  function s(n) {
    let o, a;
    c.nodeName && (t ? (o = {}, o[t] = !0) : o = n, Pt(o, function(l, h) {
      if (n[h])
        for (a = n[h].length; a--; )
          i(h, n[h][a].fn);
    }));
  }
  const r = typeof c == "function" && c.prototype || c;
  if (Object.hasOwnProperty.call(r, "hcEvents")) {
    const n = r.hcEvents;
    if (t) {
      const o = n[t] || [];
      e ? (n[t] = o.filter(function(a) {
        return e !== a.fn;
      }), i(t, e)) : (s(n), n[t] = []);
    } else
      s(n), delete r.hcEvents;
  }
}
function wr(c, t, e, i) {
  if (e = e || {}, Fe?.createEvent && (c.dispatchEvent || c.fireEvent && // Enable firing events on Highcharts instance.
  c !== N)) {
    const s = Fe.createEvent("Events");
    s.initEvent(t, !0, !0), e = Ft(s, e), c.dispatchEvent ? c.dispatchEvent(e) : c.fireEvent(t, e);
  } else if (c.hcEvents) {
    e.target || Ft(e, {
      // Attach a simple preventDefault function to skip
      // default handler if called. The built-in
      // defaultPrevented property is not overwritable (#5112)
      preventDefault: function() {
        e.defaultPrevented = !0;
      },
      // Setting target to native events fails with clicking
      // the zoom-out button in Chrome.
      target: c,
      // If the type is not set, we're running a custom event
      // (#2297). If it is set, we're running a browser event.
      type: t
    });
    const s = [];
    let r = c, n = !1;
    for (; r.hcEvents; )
      Object.hasOwnProperty.call(r, "hcEvents") && r.hcEvents[t] && (s.length && (n = !0), s.unshift.apply(s, r.hcEvents[t])), r = Object.getPrototypeOf(r);
    n && s.sort((o, a) => o.order - a.order), s.forEach((o) => {
      o.fn.call(c, e) === !1 && e.preventDefault();
    });
  }
  i && !e.defaultPrevented && i.call(c, e);
}
let $i;
const hn = (function() {
  const c = Math.random().toString(36).substring(2, 9) + "-";
  let t = 0;
  return function() {
    return "highcharts-" + ($i ? "" : c) + t++;
  };
})();
function cn(c) {
  return $i = ce(c, $i);
}
function dn(c) {
  return typeof c == "function";
}
function fn(c) {
  return le(c) ? c.substring(0, 1).toUpperCase() + c.substring(1) : String(c);
}
Lt.jQuery && (Lt.jQuery.fn.highcharts = function() {
  const c = [].slice.call(arguments);
  if (this[0])
    return c[0] ? (new N[
      // eslint-disable-line computed-property-spacing, no-new
      // Constructor defaults to Chart
      le(c[0]) ? c.shift() : "Chart"
    ](this[0], c[0], c[1]), this) : $r[xr(this[0], "data-highcharts-chart")];
});
const W = {
  addEvent: ln,
  arrayMax: Jr,
  arrayMin: _r,
  attr: xr,
  clamp: Br,
  clearTimeout: Xr,
  correctFloat: vr,
  createElement: Hr,
  crisp: Nr,
  css: Di,
  defined: Wt,
  destroyObjectProperties: Qr,
  diffObjects: Rr,
  discardElement: tn,
  erase: zr,
  error: ae,
  extend: Ft,
  extendClass: Gr,
  find: on,
  fireEvent: wr,
  getAlignFactor: sn,
  getClosestDistance: rn,
  getMagnitude: br,
  getNestedProperty: nn,
  getStyle: ne,
  insertItem: Wr,
  isArray: Ge,
  isClass: mr,
  isDOMElement: Ui,
  isFunction: dn,
  isNumber: Ki,
  isObject: jt,
  isString: le,
  merge: Ir,
  normalizeTickInterval: qr,
  objectEach: Pt,
  offset: an,
  pad: Yr,
  pick: ce,
  pInt: gr,
  pushUnique: Fr,
  relativeLength: Vr,
  removeEvent: Sr,
  replaceNested: Ur,
  splat: yr,
  stableSort: Zr,
  syncTimeout: jr,
  timeUnits: en,
  ucfirst: fn,
  uniqueKey: hn,
  useSerialIds: cn,
  wrap: Kr
}, { win: pn } = N, { isNumber: Gt, isString: un, merge: gn, pInt: tt, defined: is } = W, ss = (c, t, e) => `color-mix(in srgb,${c},${t} ${e * 100}%)`, Ue = (c) => un(c) && !!c && c !== "none";
class U {
  /* *
   *
   *  Static Functions
   *
   * */
  /**
   * Creates a color instance out of a color string or object.
   *
   * @function Highcharts.Color.parse
   *
   * @param {Highcharts.ColorType} [input]
   * The input color.
   *
   * @return {Highcharts.Color}
   * Color instance.
   */
  static parse(t) {
    return t ? new U(t) : U.None;
  }
  /* *
   *
   *  Constructor
   *
   * */
  constructor(t) {
    this.rgba = [NaN, NaN, NaN, NaN], this.input = t;
    const e = N.Color;
    if (e && e !== U)
      return new e(t);
    let i, s, r, n;
    if (typeof t == "object" && typeof t.stops < "u")
      this.stops = t.stops.map((o) => new U(o[1]));
    else if (typeof t == "string")
      for (this.input = t = U.names[t.toLowerCase()] || t, r = U.parsers.length; r-- && !s; )
        n = U.parsers[r], i = n.regex.exec(t), i && (s = n.parse(i));
    s && (this.rgba = s);
  }
  /* *
   *
   *  Functions
   *
   * */
  /**
   * Return the color or gradient stops in the specified format
   *
   * @function Highcharts.Color#get
   *
   * @param {string} [format]
   * Possible values are 'a', 'rgb', 'rgba' (default).
   *
   * @return {Highcharts.ColorType}
   * This color as a string or gradient stops.
   */
  get(t) {
    const e = this.input, i = this.rgba;
    if (this.output)
      return this.output;
    if (typeof e == "object" && typeof this.stops < "u") {
      const s = gn(e);
      return s.stops = [].slice.call(s.stops), this.stops.forEach((r, n) => {
        s.stops[n] = [
          s.stops[n][0],
          r.get(t)
        ];
      }), s;
    }
    return i && Gt(i[0]) ? t === "rgb" || !t && i[3] === 1 ? "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")" : t === "a" ? `${i[3]}` : "rgba(" + i.join(",") + ")" : e;
  }
  /**
   * Brighten the color instance.
   *
   * @function Highcharts.Color#brighten
   *
   * @param {number} alpha
   * The alpha value.
   *
   * @return {Highcharts.Color}
   * This color with modifications.
   */
  brighten(t) {
    const e = this.rgba;
    if (this.stops)
      this.stops.forEach(function(i) {
        i.brighten(t);
      });
    else if (Gt(t) && t !== 0)
      if (Gt(e[0]))
        for (let i = 0; i < 3; i++)
          e[i] += tt(t * 255), e[i] < 0 && (e[i] = 0), e[i] > 255 && (e[i] = 255);
      else U.useColorMix && Ue(this.input) && (this.output = ss(this.input, t > 0 ? "white" : "black", Math.abs(t)));
    return this;
  }
  /**
   * Set the color's opacity to a given alpha value.
   *
   * @function Highcharts.Color#setOpacity
   *
   * @param {number} alpha
   *        Opacity between 0 and 1.
   *
   * @return {Highcharts.Color}
   *         Color with modifications.
   */
  setOpacity(t) {
    return this.rgba[3] = t, this;
  }
  /**
   * Return an intermediate color between two colors.
   *
   * @function Highcharts.Color#tweenTo
   *
   * @param {Highcharts.Color} to
   * The color object to tween to.
   *
   * @param {number} pos
   * The intermediate position, where 0 is the from color (current color
   * item), and 1 is the `to` color.
   *
   * @return {Highcharts.ColorType}
   * The intermediate color in rgba notation, or unsupported type.
   */
  tweenTo(t, e) {
    const i = this.rgba, s = t.rgba;
    if (!Gt(i[0]) || !Gt(s[0]))
      return U.useColorMix && Ue(this.input) && Ue(t.input) && e < 0.99 ? ss(this.input, t.input, e) : t.input || "none";
    const r = s[3] !== 1 || i[3] !== 1, n = (a, l) => a + (i[l] - a) * (1 - e), o = s.slice(0, 3).map(n).map(Math.round);
    return r && o.push(n(s[3], 3)), (r ? "rgba(" : "rgb(") + o.join(",") + ")";
  }
}
U.names = {
  white: "#ffffff",
  black: "#000000"
};
U.parsers = [{
  // RGBA color
  // eslint-disable-next-line max-len
  regex: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?(?:\.\d+)?)\s*\)/,
  parse: function(c) {
    return [
      tt(c[1]),
      tt(c[2]),
      tt(c[3]),
      parseFloat(c[4], 10)
    ];
  }
}, {
  // RGB color
  regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/,
  parse: function(c) {
    return [tt(c[1]), tt(c[2]), tt(c[3]), 1];
  }
}, {
  // RGBA 3 & 4 digit hex color, e.g. #F0F, #F0FA
  regex: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?$/i,
  parse: function(c) {
    return [
      tt(c[1] + c[1], 16),
      tt(c[2] + c[2], 16),
      tt(c[3] + c[3], 16),
      is(c[4]) ? tt(c[4] + c[4], 16) / 255 : 1
    ];
  }
}, {
  // RGBA 6 & 8 digit hex color, e.g. #FFCC00, #FFCC00FF
  regex: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?$/i,
  parse: function(c) {
    return [
      tt(c[1], 16),
      tt(c[2], 16),
      tt(c[3], 16),
      is(c[4]) ? tt(c[4], 16) / 255 : 1
    ];
  }
}];
U.useColorMix = pn.CSS?.supports("color", "color-mix(in srgb,red,blue 9%)");
U.None = new U("");
const { parse: rs } = U, { win: mn } = N, { isNumber: Ke, objectEach: xn } = W;
class st {
  /* *
   *
   *  Constructors
   *
   * */
  constructor(t, e, i) {
    this.pos = NaN, this.options = e, this.elem = t, this.prop = i;
  }
  /* *
   *
   *  Functions
   *
   * */
  /**
   * Set the current step of a path definition on SVGElement.
   *
   * @function Highcharts.Fx#dSetter
   *
   */
  dSetter() {
    const t = this.paths, e = t?.[0], i = t?.[1], s = this.now || 0;
    let r = [];
    if (s === 1 || !e || !i)
      r = this.toD || [];
    else if (e.length === i.length && s < 1)
      for (let n = 0; n < i.length; n++) {
        const o = e[n], a = i[n], l = [];
        for (let h = 0; h < a.length; h++) {
          const f = o[h], d = a[h];
          Ke(f) && Ke(d) && // Arc boolean flags
          !(a[0] === "A" && (h === 4 || h === 5)) ? l[h] = f + s * (d - f) : l[h] = d;
        }
        r.push(l);
      }
    else
      r = i;
    this.elem.attr("d", r, void 0, !0);
  }
  /**
   * Update the element with the current animation step.
   *
   * @function Highcharts.Fx#update
   *
   */
  update() {
    const t = this.elem, e = this.prop, i = this.now, s = this.options.step;
    this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, s && s.call(t, i, this);
  }
  /**
   * Run an animation.
   *
   * @function Highcharts.Fx#run
   *
   * @param {number} from
   *        The current value, value to start from.
   *
   * @param {number} to
   *        The end value, value to land on.
   *
   * @param {string} unit
   *        The property unit, for example `px`.
   *
   */
  run(t, e, i) {
    const s = this, r = s.options, n = function(l) {
      return n.stopped ? !1 : s.step(l);
    }, o = mn.requestAnimationFrame || function(l) {
      setTimeout(l, 13);
    }, a = function() {
      for (let l = 0; l < st.timers.length; l++)
        st.timers[l]() || st.timers.splice(l--, 1);
      st.timers.length && o(a);
    };
    t === e && !this.elem["forceAnimate:" + this.prop] ? (delete r.curAnim[this.prop], r.complete && Object.keys(r.curAnim).length === 0 && r.complete.call(this.elem)) : (this.startTime = +/* @__PURE__ */ new Date(), this.start = t, this.end = e, this.unit = i, this.now = this.start, this.pos = 0, n.elem = this.elem, n.prop = this.prop, n() && st.timers.push(n) === 1 && o(a));
  }
  /**
   * Run a single step in the animation.
   *
   * @function Highcharts.Fx#step
   *
   * @param {boolean} [gotoEnd]
   *        Whether to go to the endpoint of the animation after abort.
   *
   * @return {boolean}
   *         Returns `true` if animation continues.
   */
  step(t) {
    const e = +/* @__PURE__ */ new Date(), i = this.options, s = this.elem, r = i.complete, n = i.duration, o = i.curAnim;
    let a, l;
    return s.attr && !s.element ? a = !1 : t || e >= n + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), o[this.prop] = !0, l = !0, xn(o, function(h) {
      h !== !0 && (l = !1);
    }), l && r && r.call(s), a = !1) : (this.pos = i.easing((e - this.startTime) / n), this.now = this.start + (this.end - this.start) * this.pos, this.update(), a = !0), a;
  }
  /**
   * Prepare start and end values so that the path can be animated one to one.
   *
   * @function Highcharts.Fx#initPath
   *
   * @param {Highcharts.SVGElement} elem
   *        The SVGElement item.
   *
   * @param {Highcharts.SVGPathArray|undefined} fromD
   *        Starting path definition.
   *
   * @param {Highcharts.SVGPathArray} toD
   *        Ending path definition.
   *
   * @return {Array<Highcharts.SVGPathArray,Highcharts.SVGPathArray>}
   *         An array containing start and end paths in array form so that
   *         they can be animated in parallel.
   */
  initPath(t, e, i) {
    const s = t.startX, r = t.endX, n = i.slice(), o = t.isArea, a = o ? 2 : 1, l = e && i.length > e.length && i.hasStackedCliffs;
    let h, f, d, p, u = e?.slice();
    if (!u || l)
      return [n, n];
    function g(m, y) {
      for (; m.length < f; ) {
        const b = m[0], v = y[f - m.length];
        if (v && b[0] === "M" && (v[0] === "C" ? m[0] = [
          "C",
          b[1],
          b[2],
          b[1],
          b[2],
          b[1],
          b[2]
        ] : m[0] = ["L", b[1], b[2]]), m.unshift(b), o) {
          const S = m.pop();
          m.push(m[m.length - 1], S);
        }
      }
    }
    function x(m) {
      for (; m.length < f; ) {
        const y = m[Math.floor(m.length / a) - 1].slice();
        if (y[0] === "C" && (y[1] = y[5], y[2] = y[6]), !o)
          m.push(y);
        else {
          const b = m[Math.floor(m.length / a)].slice();
          m.splice(m.length / 2, 0, y, b);
        }
      }
    }
    if (s && r && r.length) {
      for (d = 0; d < s.length; d++)
        if (s[d] === r[0]) {
          h = d;
          break;
        } else if (s[0] === r[r.length - s.length + d]) {
          h = d, p = !0;
          break;
        } else if (s[s.length - 1] === r[r.length - s.length + d]) {
          h = s.length - d;
          break;
        }
      typeof h > "u" && (u = []);
    }
    return u.length && Ke(h) && (f = n.length + h * a, p ? (g(u, n), x(n)) : (g(n, u), x(u))), [u, n];
  }
  /**
   * Handle animation of the color attributes directly.
   *
   * @function Highcharts.Fx#fillSetter
   *
   */
  fillSetter() {
    st.prototype.strokeSetter.apply(this, arguments);
  }
  /**
   * Handle animation of the color attributes directly.
   *
   * @function Highcharts.Fx#strokeSetter
   *
   */
  strokeSetter() {
    this.elem.attr(this.prop, rs(this.start).tweenTo(rs(this.end), this.pos), void 0, !0);
  }
}
st.timers = [];
const { defined: yn, getStyle: bn, isArray: vn, isNumber: Sn, isObject: qi, merge: Mr, objectEach: wn, pick: Mn } = W;
function kn(c, t) {
  t.renderer.globalAnimation = Mn(c, t.options.chart.animation, !0);
}
function Ii(c) {
  return qi(c) ? Mr({ duration: 500, defer: 0 }, c) : { duration: c ? 500 : 0, defer: 0 };
}
function An(c, t, e) {
  const i = Ii(t), s = e ? [e] : c.series;
  let r = 0, n = 0;
  return s.forEach((a) => {
    const l = Ii(a.options.animation);
    r = qi(t) && yn(t.defer) ? i.defer : Math.max(r, l.duration + l.defer), n = Math.min(i.duration, l.duration);
  }), c.renderer.forExport && (r = 0), {
    defer: Math.max(0, r - n),
    duration: Math.min(r, n)
  };
}
function Cn(c, t, e) {
  let i, s = "", r, n, o;
  qi(e) || (o = arguments, e = {
    duration: o[2],
    easing: o[3],
    complete: o[4]
  }), Sn(e.duration) || (e.duration = 400), e.easing = typeof e.easing == "function" ? e.easing : Math[e.easing] || Math.easeInOutSine, e.curAnim = Mr(t), wn(t, function(a, l) {
    kr(c, l), n = new st(c, e, l), r = void 0, l === "d" && vn(t.d) ? (n.paths = n.initPath(c, c.pathArray, t.d), n.toD = t.d, i = 0, r = 1) : c.attr ? i = c.attr(l) : (i = parseFloat(bn(c, l)) || 0, l !== "opacity" && (s = "px")), r || (r = a), typeof r == "string" && r.match("px") && (r = r.replace(/px/g, "")), n.run(i, r, s);
  });
}
function kr(c, t) {
  let e = st.timers.length;
  for (; e--; )
    st.timers[e].elem === c && (!t || t === st.timers[e].prop) && (st.timers[e].stopped = !0);
}
const Et = {
  animate: Cn,
  animObject: Ii,
  getDeferredAnimation: An,
  setAnimation: kn,
  stop: kr
};
var Bi;
(function(c) {
  c.xAxis = {
    /**
     * When using multiple axis, the ticks of two or more opposite axes
     * will automatically be aligned by adding ticks to the axis or axes
     * with the least ticks, as if `tickAmount` were specified.
     *
     * This can be prevented by setting `alignTicks` to false. If the grid
     * lines look messy, it's a good idea to hide them for the secondary
     * axis by setting `gridLineWidth` to 0.
     *
     * If `startOnTick` or `endOnTick` in an Axis options are set to false,
     * then the `alignTicks ` will be disabled for the Axis.
     *
     * Disabled for logarithmic axes.
     *
     * @product   highcharts highstock gantt
     */
    alignTicks: !0,
    /**
     * Whether to allow decimals in this axis' ticks. When counting
     * integers, like persons or hits on a web page, decimals should
     * be avoided in the labels. By default, decimals are allowed on small
     * scale axes.
     *
     * @see [minTickInterval](#xAxis.minTickInterval)
     *
     * @sample {highcharts|highstock} highcharts/yaxis/allowdecimals-true/
     *         True by default
     * @sample {highcharts|highstock} highcharts/yaxis/allowdecimals-false/
     *         False
     *
     * @type      {boolean|undefined}
     * @default   undefined
     * @since     2.0
     */
    allowDecimals: void 0,
    /**
     * When using an alternate grid color, a band is painted across the
     * plot area between every other grid line.
     *
     * @sample {highcharts} highcharts/yaxis/alternategridcolor/
     *         Alternate grid color on the Y axis
     * @sample {highstock} stock/xaxis/alternategridcolor/
     *         Alternate grid color on the Y axis
     *
     * @type      {Highcharts.ColorType}
     * @apioption xAxis.alternateGridColor
     */
    /**
     * An array defining breaks in the axis, the sections defined will be
     * left out and all the points shifted closer to each other.
     *
     * @productdesc {highcharts}
     * Requires that the broken-axis.js module is loaded.
     *
     * @sample {highcharts} highcharts/axisbreak/break-simple/
     *         Simple break
     * @sample {highcharts|highstock} highcharts/axisbreak/break-visualized/
     *         Advanced with callback
     * @sample {highstock} stock/demo/intraday-breaks/
     *         Break on nights and weekends
     *
     * @type      {Array<*>}
     * @since     4.1.0
     * @product   highcharts highstock gantt
     * @apioption xAxis.breaks
     */
    /**
     * A number indicating how much space should be left between the start
     * and the end of the break. The break size is given in axis units,
     * so for instance on a `datetime` axis, a break size of 3600000 would
     * indicate the equivalent of an hour.
     *
     * @type      {number}
     * @default   0
     * @since     4.1.0
     * @product   highcharts highstock gantt
     * @apioption xAxis.breaks.breakSize
     */
    /**
     * The axis value where the break starts. On datetime axes, this may be
     * a date string.
     *
     * @type      {number|string}
     * @since     4.1.0
     * @product   highcharts highstock gantt
     * @apioption xAxis.breaks.from
     */
    /**
     * Defines an interval after which the break appears again. By default
     * the breaks do not repeat.
     *
     * @type      {number}
     * @default   0
     * @since     4.1.0
     * @product   highcharts highstock gantt
     * @apioption xAxis.breaks.repeat
     */
    /**
     * The axis value where the break ends. On datetime axes, this may be
     * a date string.
     *
     * @type      {number|string}
     * @since     4.1.0
     * @product   highcharts highstock gantt
     * @apioption xAxis.breaks.to
     */
    /**
     * If categories are present for the xAxis, names are used instead of
     * numbers for that axis.
     *
     * Since Highcharts 3.0, categories can also
     * be extracted by giving each point a [name](#series.data) and setting
     * axis [type](#xAxis.type) to `category`. However, if you have multiple
     * series, best practice remains defining the `categories` array.
     *
     * Example: `categories: ['Apples', 'Bananas', 'Oranges']`
     *
     * @sample {highcharts} highcharts/demo/line-labels/
     *         With
     * @sample {highcharts} highcharts/xaxis/categories/
     *         Without
     *
     * @type      {Array<string>}
     * @product   highcharts gantt
     * @apioption xAxis.categories
     */
    /**
     * The highest allowed value for automatically computed axis extremes.
     *
     * @see [floor](#xAxis.floor)
     *
     * @sample {highcharts|highstock} highcharts/yaxis/floor-ceiling/
     *         Floor and ceiling
     *
     * @type       {number}
     * @since      4.0
     * @product    highcharts highstock gantt
     * @apioption  xAxis.ceiling
     */
    /**
     * A class name that opens for styling the axis by CSS, especially in
     * Highcharts styled mode. The class name is applied to group elements
     * for the grid, axis elements and labels.
     *
     * @sample {highcharts|highstock|highmaps} highcharts/css/axis/
     *         Multiple axes with separate styling
     *
     * @type      {string}
     * @since     5.0.0
     * @apioption xAxis.className
     */
    /**
     * Configure a crosshair that follows either the mouse pointer or the
     * hovered point.
     *
     * In styled mode, the crosshairs are styled in the
     * `.highcharts-crosshair`, `.highcharts-crosshair-thin` or
     * `.highcharts-xaxis-category` classes.
     *
     * @productdesc {highstock}
     * In Highcharts stock, by default, the crosshair is enabled on the
     * X axis and disabled on the Y axis.
     *
     * @sample {highcharts} highcharts/xaxis/crosshair-both/
     *         Crosshair on both axes
     * @sample {highstock} stock/xaxis/crosshairs-xy/
     *         Crosshair on both axes, with y axis label
     * @sample {highmaps} highcharts/xaxis/crosshair-both/
     *         Crosshair on both axes
     *
     * @declare   Highcharts.AxisCrosshairOptions
     * @type      {boolean|*}
     * @default   false
     * @since     4.1
     * @apioption xAxis.crosshair
     */
    /**
     * The value on a perpendicular axis where this axis should cross. This
     * is typically used on mathematical plots where the axes cross at 0.
     * When `crossing` is set, space will not be reserved at the sides of
     * the chart for axis labels and title, so those may be clipped. In this
     * case it is better to place the axes without the `crossing` option.
     *
     * @type      {number}
     * @sample    highcharts/xaxis/crossing
     *            Function plot with axes crossing at 0
     * @since 11.0.1
     * @apioption xAxis.crossing
     */
    /**
     * A class name for the crosshair, especially as a hook for styling.
     *
     * @type      {string}
     * @since     5.0.0
     * @apioption xAxis.crosshair.className
     */
    /**
     * The color of the crosshair. Defaults to `#cccccc` for numeric and
     * datetime axes, and `rgba(204,214,235,0.25)` for category axes, where
     * the crosshair by default highlights the whole category.
     *
     * @sample {highcharts|highstock|highmaps} highcharts/xaxis/crosshair-customized/
     *         Customized crosshairs
     *
     * @type      {Highcharts.ColorType}
     * @default   #cccccc
     * @since     4.1
     * @apioption xAxis.crosshair.color
     */
    /**
     * The dash style for the crosshair. See
     * [plotOptions.series.dashStyle](#plotOptions.series.dashStyle)
     * for possible values.
     *
     * @sample {highcharts|highmaps} highcharts/xaxis/crosshair-dotted/
     *         Dotted crosshair
     * @sample {highstock} stock/xaxis/crosshair-dashed/
     *         Dashed X axis crosshair
     *
     * @type      {Highcharts.DashStyleValue}
     * @default   Solid
     * @since     4.1
     * @apioption xAxis.crosshair.dashStyle
     */
    /**
     * A label on the axis next to the crosshair.
     *
     * In styled mode, the label is styled with the
     * `.highcharts-crosshair-label` class.
     *
     * @sample {highstock} stock/xaxis/crosshair-label/
     *         Crosshair labels
     * @sample {highstock} highcharts/css/crosshair-label/
     *         Style mode
     *
     * @declare   Highcharts.AxisCrosshairLabelOptions
     * @since     2.1
     * @product   highstock
     * @apioption xAxis.crosshair.label
     */
    /**
     * Alignment of the label compared to the axis. Defaults to `"left"` for
     * right-side axes, `"right"` for left-side axes and `"center"` for
     * horizontal axes.
     *
     * @type      {Highcharts.AlignValue}
     * @since     2.1
     * @product   highstock
     * @apioption xAxis.crosshair.label.align
     */
    /**
     * The background color for the label. Defaults to the related series
     * color, or `#666666` if that is not available.
     *
     * @type      {Highcharts.ColorType}
     * @since     2.1
     * @product   highstock
     * @apioption xAxis.crosshair.label.backgroundColor
     */
    /**
     * The border color for the crosshair label
     *
     * @type      {Highcharts.ColorType}
     * @since     2.1
     * @product   highstock
     * @apioption xAxis.crosshair.label.borderColor
     */
    /**
     * The border corner radius of the crosshair label.
     *
     * @type      {number}
     * @default   3
     * @since     2.1.10
     * @product   highstock
     * @apioption xAxis.crosshair.label.borderRadius
     */
    /**
     * The border width for the crosshair label.
     *
     * @type      {number}
     * @default   0
     * @since     2.1
     * @product   highstock
     * @apioption xAxis.crosshair.label.borderWidth
     */
    /**
     * Flag to enable crosshair's label.
     *
     * @sample {highstock} stock/xaxis/crosshairs-xy/
     *         Enabled label for yAxis' crosshair
     *
     * @type      {boolean}
     * @default   false
     * @since     2.1
     * @product   highstock
     * @apioption xAxis.crosshair.label.enabled
     */
    /**
     * A format string for the crosshair label. Defaults to `{value}` for
     * numeric axes and `{value:%b %d, %Y}` for datetime axes.
     *
     * @type      {string}
     * @since     2.1
     * @product   highstock
     * @apioption xAxis.crosshair.label.format
     */
    /**
     * Formatter function for the label text.
     *
     * @type      {Highcharts.XAxisCrosshairLabelFormatterCallbackFunction}
     * @since     2.1
     * @product   highstock
     * @apioption xAxis.crosshair.label.formatter
     */
    /**
     * Padding inside the crosshair label.
     *
     * @type      {number}
     * @default   8
     * @since     2.1
     * @product   highstock
     * @apioption xAxis.crosshair.label.padding
     */
    /**
     * The shape to use for the label box.
     *
     * @type      {string}
     * @default   callout
     * @since     2.1
     * @product   highstock
     * @apioption xAxis.crosshair.label.shape
     */
    /**
     * Text styles for the crosshair label.
     *
     * @type      {Highcharts.CSSObject}
     * @default   {"color": "white", "fontWeight": "normal", "fontSize": "11px", "textAlign": "center"}
     * @since     2.1
     * @product   highstock
     * @apioption xAxis.crosshair.label.style
     */
    /**
     * Whether the crosshair should snap to the point or follow the pointer
     * independent of points.
     *
     * @sample {highcharts|highstock} highcharts/xaxis/crosshair-snap-false/
     *         True by default
     * @sample {highmaps} maps/demo/latlon-advanced/
     *         Snap is false
     *
     * @type      {boolean}
     * @default   true
     * @since     4.1
     * @apioption xAxis.crosshair.snap
     */
    /**
     * The pixel width of the crosshair. Defaults to 1 for numeric or
     * datetime axes, and for one category width for category axes.
     *
     * @sample {highcharts} highcharts/xaxis/crosshair-customized/
     *         Customized crosshairs
     * @sample {highstock} highcharts/xaxis/crosshair-customized/
     *         Customized crosshairs
     * @sample {highmaps} highcharts/xaxis/crosshair-customized/
     *         Customized crosshairs
     *
     * @type      {number}
     * @default   1
     * @since     4.1
     * @apioption xAxis.crosshair.width
     */
    /**
     * The Z index of the crosshair. Higher Z indices allow drawing the
     * crosshair on top of the series or behind the grid lines.
     *
     * @type      {number}
     * @default   2
     * @since     4.1
     * @apioption xAxis.crosshair.zIndex
     */
    /**
     * Whether to pan axis. If `chart.panning` is enabled, the option
     * allows to disable panning on an individual axis.
     */
    panningEnabled: !0,
    /**
     * The Z index for the axis group.
     *
     * @see [axis.gridZIndex](#xAxis.gridZIndex)
     * @see [axis.labels.zIndex](#xAxis.labels.zIndex)
     */
    zIndex: 2,
    /**
     * Whether to zoom axis. If `chart.zoomType` is set, the option allows
     * to disable zooming on an individual axis.
     *
     * @sample {highcharts} highcharts/xaxis/zoomenabled/
     *         Zoom enabled is false
     */
    zoomEnabled: !0,
    /**
     * For a datetime axis, the scale will automatically adjust to the
     * appropriate unit. This member gives the default string
     * representations used for each unit. For intermediate values,
     * different units may be used, for example the `day` unit can be used
     * on midnight and `hour` unit be used for intermediate values on the
     * same axis.
     *
     * For an overview of the string or object configuration, see
     * [dateFormat](/class-reference/Highcharts.Time#dateFormat).
     *
     * Defaults to:
     * ```js
     * {
     *     millisecond: '%[HMSL]',
     *     second: '%[HMS]',
     *     minute: '%[HM]',
     *     hour: '%[HM]',
     *     day: '%[eb]',
     *     week: '%[eb]',
     *     month: '%[bY]',
     *     year: '%Y'
     * }
     * ```
     *
     * @sample {highcharts} highcharts/xaxis/datetimelabelformats-object/
     *         Object day format on X axis
     * @sample {highcharts} highcharts/xaxis/datetimelabelformats/
     *         String day format on X axis
     * @sample {highstock} stock/xaxis/datetimelabelformats/
     *         More information in x axis labels
     *
     * @declare Highcharts.AxisDateTimeLabelFormatsOptions
     * @product highcharts highstock gantt
     */
    dateTimeLabelFormats: {
      /**
       * @declare Highcharts.AxisDateTimeLabelFormatsOptionsObject
       * @type {string|*}
       */
      millisecond: {
        /**
         * @type {Array<string|Highcharts.DateTimeFormatOptions>}
         * @default undefined
         * @apioption xAxis.dateTimeLabelFormats.millisecond.list
         */
        /**
         * @type {string|Highcharts.DateTimeFormatOptions}
         * @apioption xAxis.dateTimeLabelFormats.millisecond.main
         */
        main: "%[HMSL]",
        range: !1
      },
      /**
       * @declare Highcharts.AxisDateTimeLabelFormatsOptionsObject
       * @type {string|*}
       */
      second: {
        /**
         * @type {Array<string|Highcharts.DateTimeFormatOptions>}
         * @default undefined
         * @apioption xAxis.dateTimeLabelFormats.second.list
         */
        /**
         * @type {string|Highcharts.DateTimeFormatOptions}
         * @apioption xAxis.dateTimeLabelFormats.second.main
         */
        main: "%[HMS]",
        range: !1
      },
      /**
       * @declare Highcharts.AxisDateTimeLabelFormatsOptionsObject
       * @type {string|*}
       */
      minute: {
        /**
         * @type {Array<string|Highcharts.DateTimeFormatOptions>}
         * @default undefined
         * @apioption xAxis.dateTimeLabelFormats.minute.list
         */
        /**
         * @type {string|Highcharts.DateTimeFormatOptions}
         * @apioption xAxis.dateTimeLabelFormats.minute.main
         */
        main: "%[HM]",
        range: !1
      },
      /**
       * @declare Highcharts.AxisDateTimeLabelFormatsOptionsObject
       * @type {string|*}
       */
      hour: {
        /**
         * @type {Array<string|Highcharts.DateTimeFormatOptions>}
         * @default undefined
         * @apioption xAxis.dateTimeLabelFormats.hour.list
         */
        /**
         * @type {string|Highcharts.DateTimeFormatOptions}
         * @apioption xAxis.dateTimeLabelFormats.hour.main
         */
        main: "%[HM]",
        range: !1
      },
      /**
       * @declare Highcharts.AxisDateTimeLabelFormatsOptionsObject
       * @type {string|*}
       */
      day: {
        /**
         * @type {Array<string|Highcharts.DateTimeFormatOptions>}
         * @default undefined
         * @apioption xAxis.dateTimeLabelFormats.day.list
         */
        /**
         * @type {string|Highcharts.DateTimeFormatOptions}
         * @apioption xAxis.dateTimeLabelFormats.day.main
         */
        main: "%[eb]"
      },
      /**
       * @declare Highcharts.AxisDateTimeLabelFormatsOptionsObject
       * @type {string|*}
       */
      week: {
        /**
         * @type {Array<string|Highcharts.DateTimeFormatOptions>}
         * @default undefined
         * @apioption xAxis.dateTimeLabelFormats.week.list
         */
        /**
         * @type {string|Highcharts.DateTimeFormatOptions}
         * @apioption xAxis.dateTimeLabelFormats.week.main
         */
        main: "%[eb]"
      },
      /**
       * @declare Highcharts.AxisDateTimeLabelFormatsOptionsObject
       * @type {string|*}
       */
      month: {
        /**
         * @type {Array<string|Highcharts.DateTimeFormatOptions>}
         * @default undefined
         * @apioption xAxis.dateTimeLabelFormats.month.list
         */
        /**
         * @type {string|Highcharts.DateTimeFormatOptions}
         * @apioption xAxis.dateTimeLabelFormats.month.main
         */
        main: "%[bY]"
      },
      /**
       * @declare Highcharts.AxisDateTimeLabelFormatsOptionsObject
       * @type {string|*}
       */
      year: {
        /**
         * @type {Array<string|Highcharts.DateTimeFormatOptions>}
         * @default undefined
         * @apioption xAxis.dateTimeLabelFormats.year.list
         */
        /**
         * @type {string|Highcharts.DateTimeFormatOptions}
         * @apioption xAxis.dateTimeLabelFormats.year.main
         */
        main: "%Y"
      }
    },
    /**
     * Whether to force the axis to end on a tick. Use this option with
     * the `maxPadding` option to control the axis end.
     *
     * @productdesc {highstock}
     * In Highcharts Stock, `endOnTick` is always `false` when the navigator
     * is enabled, to prevent jumpy scrolling. With disabled navigator
     * enabling `endOnTick` may lead to extending the xAxis to show the last
     * tick, therefore range selector buttons may not have an active state
     * if the axis gets extended.
     *
     * @sample {highcharts} highcharts/yaxis/endontick/
     *         True by default
     * @sample {highcharts} highcharts/yaxis/endontick-false/
     *         False
     * @sample {highstock} stock/demo/basic-line/
     *         True by default
     * @sample {highstock} stock/xaxis/endontick/
     *         False
     *
     * @since 1.2.0
     */
    endOnTick: !1,
    /**
     * Event handlers for the axis.
     *
     * @type      {*}
     * @apioption xAxis.events
     */
    /**
     * An event fired after the breaks have rendered.
     *
     * @see [breaks](#xAxis.breaks)
     *
     * @sample {highcharts} highcharts/axisbreak/break-event/
     *         AfterBreak Event
     *
     * @type      {Highcharts.AxisEventCallbackFunction}
     * @since     4.1.0
     * @product   highcharts gantt
     * @apioption xAxis.events.afterBreaks
     */
    /**
     * As opposed to the `setExtremes` event, this event fires after the
     * final min and max values are computed and corrected for `minRange`.
     *
     * Fires when the minimum and maximum is set for the axis, either by
     * calling the `.setExtremes()` method or by selecting an area in the
     * chart. One parameter, `event`, is passed to the function, containing
     * common event information.
     *
     * The new user set minimum and maximum values can be found by
     * `event.min` and `event.max`. These reflect the axis minimum and
     * maximum in axis values. The actual data extremes are found in
     * `event.dataMin` and `event.dataMax`.
     *
     * @type      {Highcharts.AxisSetExtremesEventCallbackFunction}
     * @since     2.3
     * @context   Highcharts.Axis
     * @apioption xAxis.events.afterSetExtremes
     */
    /**
     * An event fired when a break from this axis occurs on a point.
     *
     * @see [breaks](#xAxis.breaks)
     *
     * @sample {highcharts} highcharts/axisbreak/break-visualized/
     *         Visualization of a Break
     *
     * @type      {Highcharts.AxisPointBreakEventCallbackFunction}
     * @since     4.1.0
     * @product   highcharts gantt
     * @context   Highcharts.Axis
     * @apioption xAxis.events.pointBreak
     */
    /**
     * An event fired when a point falls inside a break from this axis.
     *
     * @type      {Highcharts.AxisPointBreakEventCallbackFunction}
     * @product   highcharts highstock gantt
     * @context   Highcharts.Axis
     * @apioption xAxis.events.pointInBreak
     */
    /**
     * Fires when the minimum and maximum is set for the axis, either by
     * calling the `.setExtremes()` method or by selecting an area in the
     * chart. One parameter, `event`, is passed to the function,
     * containing common event information.
     *
     * The new user set minimum and maximum values can be found by
     * `event.min` and `event.max`. These reflect the axis minimum and
     * maximum in data values. When an axis is zoomed all the way out from
     * the "Reset zoom" button, `event.min` and `event.max` are null, and
     * the new extremes are set based on `this.dataMin` and `this.dataMax`.
     *
     * @sample {highstock} stock/xaxis/events-setextremes/
     *         Log new extremes on x axis
     *
     * @type      {Highcharts.AxisSetExtremesEventCallbackFunction}
     * @since     1.2.0
     * @context   Highcharts.Axis
     * @apioption xAxis.events.setExtremes
     */
    /**
     * The lowest allowed value for automatically computed axis extremes.
     *
     * @see [ceiling](#yAxis.ceiling)
     *
     * @sample {highcharts} highcharts/yaxis/floor-ceiling/
     *         Floor and ceiling
     * @sample {highstock} stock/demo/lazy-loading/
     *         Prevent negative stock price on Y axis
     *
     * @type      {number}
     * @since     4.0
     * @product   highcharts highstock gantt
     * @apioption xAxis.floor
     */
    /**
     * The dash or dot style of the grid lines. For possible values, see
     * [this demonstration](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-dashstyle-all/).
     *
     * @sample {highcharts} highcharts/yaxis/gridlinedashstyle/
     *         Long dashes
     * @sample {highstock} stock/xaxis/gridlinedashstyle/
     *         Long dashes
     *
     * @type      {Highcharts.DashStyleValue}
     * @since     1.2
     */
    gridLineDashStyle: "Solid",
    /**
     * The Z index of the grid lines.
     *
     * @sample {highcharts|highstock} highcharts/xaxis/gridzindex/
     *         A Z index of 4 renders the grid above the graph
     *
     * @product   highcharts highstock gantt
     *
     * @see [axis.zIndex](#xAxis.zIndex)
     * @see [axis.labels.zIndex](#xAxis.labels.zIndex)
     */
    gridZIndex: 1,
    /**
     * An id for the axis. This can be used after render time to get
     * a pointer to the axis object through `chart.get()`.
     *
     * @sample {highcharts} highcharts/xaxis/id/
     *         Get the object
     * @sample {highstock} stock/xaxis/id/
     *         Get the object
     *
     * @type      {string}
     * @since     1.2.0
     * @apioption xAxis.id
     */
    /**
     * The axis labels show the number or category for each tick.
     *
     * Since v8.0.0: Labels are animated in categorized x-axis with
     * updating data if `tickInterval` and `step` is set to 1.
     *
     * @productdesc {highmaps}
     * X and Y axis labels are by default disabled in Highmaps, but the
     * functionality is inherited from Highcharts and used on `colorAxis`,
     * and can be enabled on X and Y axes too.
     */
    labels: {
      /**
       * What part of the string the given position is anchored to.
       * If `left`, the left side of the string is at the axis position.
       * Can be one of `"left"`, `"center"` or `"right"`. Defaults to
       * an intelligent guess based on which side of the chart the axis
       * is on and the rotation of the label.
       *
       * @see [reserveSpace](#xAxis.labels.reserveSpace)
       *
       * @sample {highcharts} highcharts/xaxis/labels-align-left/
       *         Left
       * @sample {highcharts} highcharts/xaxis/labels-align-right/
       *         Right
       * @sample {highcharts} highcharts/xaxis/labels-reservespace-true/
       *         Left-aligned labels on a vertical category axis
       *
       * @type      {Highcharts.AlignValue}
       * @apioption xAxis.labels.align
       */
      /**
       * Whether to allow the axis labels to overlap. When false,
       * overlapping labels are hidden.
       *
       * @sample {highcharts} highcharts/xaxis/labels-allowoverlap-true/
       *         X axis labels overlap enabled
       *
       * @type      {boolean}
       * @default   false
       * @apioption xAxis.labels.allowOverlap
       */
      /**
       * For horizontal axes, the allowed degrees of label rotation
       * to prevent overlapping labels. If there is enough space,
       * labels are not rotated. As the chart gets narrower, it
       * will start rotating the labels -45 degrees, then remove
       * every second label and try again with rotations 0 and -45 etc.
       * Set it to `undefined` to disable rotation, which will
       * cause the labels to word-wrap if possible. Defaults to `[-45]``
       * on bottom and top axes, `undefined` on left and right axes.
       *
       * @sample {highcharts|highstock} highcharts/xaxis/labels-autorotation-default/
       *         Default auto rotation of 0 or -45
       * @sample {highcharts|highstock} highcharts/xaxis/labels-autorotation-0-90/
       *         Custom graded auto rotation
       *
       * @type      {Array<number>}
       * @default   undefined
       * @since     4.1.0
       * @product   highcharts highstock gantt
       * @apioption xAxis.labels.autoRotation
       */
      /**
       * When each category width is more than this many pixels, we don't
       * apply auto rotation. Instead, we lay out the axis label with word
       * wrap. A lower limit makes sense when the label contains multiple
       * short words that don't extend the available horizontal space for
       * each label.
       *
       * @sample {highcharts} highcharts/xaxis/labels-autorotationlimit/
       *         Lower limit
       *
       * @since     4.1.5
       * @product   highcharts gantt
       */
      autoRotationLimit: 80,
      /**
       * The label's pixel distance from the perimeter of the plot area.
       * On cartesian charts, this is overridden if the `labels.y` setting
       * is set.
       *
       * @sample {highcharts} highcharts/yaxis/labels-distance/
       *         Polar chart, labels centered under the arc
       *
       * @type      {number}
       * @product   highcharts gantt
       */
      distance: 15,
      /**
       * Enable or disable the axis labels.
       *
       * @sample {highcharts} highcharts/xaxis/labels-enabled/
       *         X axis labels disabled
       * @sample {highstock} stock/xaxis/labels-enabled/
       *         X axis labels disabled
       *
       */
      enabled: !0,
      /**
       * A format string for the axis label. The context is available as
       * format string variables. For example, you can use `{text}` to
       * insert the default formatted text. The recommended way of adding
       * units for the label is using `text`, for example `{text} km`.
       *
       * To add custom numeric or datetime formatting, use `{value}` with
       * formatting, for example `{value:.1f}` or `{value:%Y-%m-%d}`.
       *
       * See
       * [format string](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting)
       * for more examples of formatting.
       *
       * The default value is not specified due to the dynamic
       * nature of the default implementation.
       *
       * @sample {highcharts|highstock} highcharts/yaxis/labels-format/
       *         Add units to Y axis label
       * @sample {highcharts} highcharts/xaxis/labels-format-linked/
       *         Linked category names
       * @sample {highcharts} highcharts/xaxis/labels-format-custom/
       *         Custom number format
       *
       * @type      {string}
       * @since     3.0
       * @apioption xAxis.labels.format
       */
      /**
       * Callback JavaScript function to format the label. The value
       * is given by `this.value`. Additional properties for `this` are
       * `axis`, `chart`, `isFirst`, `isLast` and `text` which holds the
       * value of the default formatter.
       *
       * Defaults to a built in function returning a formatted string
       * depending on whether the axis is `category`, `datetime`,
       * `numeric` or other.
       *
       * @sample {highcharts} highcharts/xaxis/labels-formatter-linked/
       *         Linked category names
       * @sample {highcharts} highcharts/xaxis/labels-formatter-extended/
       *         Modified numeric labels
       * @sample {highstock} stock/xaxis/labels-formatter/
       *         Added units on Y axis
       *
       * @type      {Highcharts.AxisLabelsFormatterCallbackFunction}
       * @apioption xAxis.labels.formatter
       */
      /**
       * The number of pixels to indent the labels per level in a treegrid
       * axis.
       *
       * @sample gantt/treegrid-axis/demo
       *         Indentation 10px by default.
       * @sample gantt/treegrid-axis/indentation-0px
       *         Indentation set to 0px.
       *
       * @product gantt
       */
      indentation: 10,
      /**
       * Horizontal axis only. When `staggerLines` is not set,
       * `maxStaggerLines` defines how many lines the axis is allowed to
       * add to automatically avoid overlapping X labels. Set to `1` to
       * disable overlap detection.
       *
       * @deprecated
       * @type      {number}
       * @default   5
       * @since     1.3.3
       * @apioption xAxis.labels.maxStaggerLines
       */
      /**
       * How to handle overflowing labels on horizontal axis. If set to
       * `"allow"`, it will not be aligned at all. By default it
       * `"justify"` labels inside the chart area. If there is room to
       * move it, it will be aligned to the edge, else it will be removed.
       *
       * @since      2.2.5
       * @validvalue ["allow", "justify"]
       */
      overflow: "justify",
      /**
       * The pixel padding for axis labels, to ensure white space between
       * them. Defaults to 4 for horizontal axes, 1 for vertical.
       *
       * @type      {number}
       * @default   undefined
       * @product   highcharts gantt
       * @apioption xAxis.labels.padding
       */
      /**
       * Whether to reserve space for the labels. By default, space is
       * reserved for the labels in these cases:
       *
       * * On all horizontal axes.
       * * On vertical axes if `label.align` is `right` on a left-side
       * axis or `left` on a right-side axis.
       * * On vertical axes if `label.align` is `center`.
       *
       * This can be turned off when for example the labels are rendered
       * inside the plot area instead of outside.
       *
       * @see [labels.align](#xAxis.labels.align)
       *
       * @sample {highcharts} highcharts/xaxis/labels-reservespace/
       *         No reserved space, labels inside plot
       * @sample {highcharts} highcharts/xaxis/labels-reservespace-true/
       *         Left-aligned labels on a vertical category axis
       *
       * @type      {boolean}
       * @since     4.1.10
       * @product   highcharts highstock gantt
       * @apioption xAxis.labels.reserveSpace
       */
      reserveSpace: void 0,
      /**
       * Rotation of the labels in degrees. When `undefined`, the
       * `autoRotation` option takes precedence.
       *
       * @sample {highcharts} highcharts/xaxis/labels-rotation/
       *         X axis labels rotated 90°
       *
       * @type      {number}
       * @default   0
       * @apioption xAxis.labels.rotation
       */
      rotation: void 0,
      /**
       * Horizontal axes only. The number of lines to spread the labels
       * over to make room or tighter labels. 0 disables staggering.
       *
       * @sample {highcharts} highcharts/xaxis/labels-staggerlines/
       *         Show labels over two lines
       * @sample {highstock} stock/xaxis/labels-staggerlines/
       *         Show labels over two lines
       *
       * @since     2.1
       */
      staggerLines: 0,
      /**
       * To show only every _n_'th label on the axis, set the step to _n_.
       * Setting the step to 2 shows every other label.
       *
       * By default, when 0, the step is calculated automatically to avoid
       * overlap. To prevent this, set it to 1\. This usually only
       * happens on a category axis, and is often a sign that you have
       * chosen the wrong axis type.
       *
       * Read more at
       * [Axis docs](https://www.highcharts.com/docs/chart-concepts/axes)
       * => What axis should I use?
       *
       * @sample {highcharts} highcharts/xaxis/labels-step/
       *         Showing only every other axis label on a categorized
       *         x-axis
       * @sample {highcharts} highcharts/xaxis/labels-step-auto/
       *         Auto steps on a category axis
       *
       * @since     2.1
       */
      step: 0,
      /**
       * Whether to [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
       * to render the labels.
       */
      useHTML: !1,
      /**
       * The x position offset of all labels relative to the tick
       * positions on the axis. Overrides the `labels.distance` option.
       *
       * @type      {number}
       * @apioption xAxis.labels.x
       */
      /**
       * The y position offset of all labels relative to the tick
       * positions on the axis. Overrides the `labels.distance` option.
       *
       * @sample {highcharts} highcharts/xaxis/labels-x/
       *         X axis labels placed on grid lines
       *
       * @type      {number}
       * @apioption xAxis.labels.y
       */
      /**
       * The Z index for the axis labels.
       *
       * @see [axis.zIndex](#xAxis.zIndex)
       * @see [axis.gridZIndex](#xAxis.gridZIndex)
       */
      zIndex: 7,
      /**
       * CSS styles for the label. Use `lineClamp` to control wrapping of
       * category labels. Use `textOverflow: 'none'` to prevent ellipsis
       * (dots).
       *
       * In styled mode, the labels are styled with the
       * `.highcharts-axis-labels` class.
       *
       * @sample {highcharts} highcharts/xaxis/labels-style/
       *         Red X axis labels
       *
       * @type      {Highcharts.CSSObject}
       */
      style: {
        /** @internal */
        color: "#333333",
        /** @internal */
        cursor: "default",
        /**
         * @type {number|string}
         */
        fontSize: "0.8em",
        /** @internal */
        textOverflow: "ellipsis"
      }
    },
    /**
     * The left position as the horizontal axis. If it's a number, it is
     * interpreted as pixel position relative to the chart.
     *
     * Since Highcharts v5.0.13: If it's a percentage string, it is
     * interpreted as percentages of the plot width, offset from plot area
     * left.
     *
     * @sample {highcharts} highcharts/xaxis/axis-position-properties
     *         Different axis position properties
     *
     * @type      {number|string}
     * @product   highcharts highstock
     * @apioption xAxis.left
     */
    /**
     * The top position as the vertical axis. If it's a number, it is
     * interpreted as pixel position relative to the chart.
     *
     * Since Highcharts 2: If it's a percentage string, it is interpreted
     * as percentages of the plot height, offset from plot area top.
     *
     * @sample {highcharts} highcharts/xaxis/axis-position-properties
     *         Different axis position properties
     *
     * @type      {number|string}
     * @product   highcharts highstock
     * @apioption xAxis.top
     */
    /**
     * Index of another axis that this axis is linked to. When an axis is
     * linked to a master axis, it will take the same extremes as
     * the master, but as assigned by min or max or by setExtremes.
     * It can be used to show additional info, or to ease reading the
     * chart by duplicating the scales.
     *
     * @sample {highcharts} highcharts/xaxis/linkedto/
     *         Different string formats of the same date
     * @sample {highcharts} highcharts/yaxis/linkedto/
     *         Y values on both sides
     *
     * @type      {number}
     * @since     2.0.2
     * @product   highcharts highstock gantt
     * @apioption xAxis.linkedTo
     */
    /**
     * The maximum value of the axis. If `undefined`, the max value is
     * automatically calculated.
     *
     * If a datetime string is passed, it is parsed into epoch time
     * according to the time zone given in [time.timezone](#time.timezone).
     *
     * If the [endOnTick](#yAxis.endOnTick) option is true, the `max` value
     * might be rounded up.
     *
     * If a [tickAmount](#yAxis.tickAmount) is set, the axis may be extended
     * beyond the set max in order to reach the given number of ticks. The
     * same may happen in a chart with multiple axes, determined by [chart.
     * alignTicks](#chart), where a `tickAmount` is applied internally.
     *
     * @sample {highcharts} highcharts/yaxis/max-200/
     *         Y axis max of 200
     * @sample {highcharts} highcharts/yaxis/max-logarithmic/
     *         Y axis max on logarithmic axis
     * @sample {highstock} stock/xaxis/min-max/
     *         Fixed min and max on X axis
     *
     * @type      {number|string|null}
     * @apioption xAxis.max
     */
    /**
     * Padding of the max value relative to the length of the axis. A
     * padding of 0.05 will make a 100px axis 5px longer. This is useful
     * when you don't want the highest data value to appear on the edge
     * of the plot area. When the axis' `max` option is set or a max extreme
     * is set using `axis.setExtremes()`, the maxPadding will be ignored.
     *
     * @productdesc {highstock}
     * For an [ordinal](#xAxis.ordinal) axis, `minPadding` and `maxPadding`
     * are ignored. Use [overscroll](#xAxis.overscroll) instead.
     *
     * @sample {highcharts} highcharts/yaxis/maxpadding/
     *         Max padding of 0.25 on y axis
     * @sample {highstock} stock/xaxis/minpadding-maxpadding/
     *         Greater min- and maxPadding
     * @sample {highmaps} maps/chart/plotbackgroundcolor-gradient/
     *         Add some padding
     *
     * @default   {highcharts} 0.01
     * @default   {highstock|highmaps} 0
     * @since     1.2.0
     */
    maxPadding: 0.01,
    /**
     * Deprecated. Use `minRange` instead.
     *
     * @deprecated
     * @type      {number}
     * @product   highcharts highstock
     * @apioption xAxis.maxZoom
     */
    /**
     * The minimum value of the axis. If `undefined`, the min value is
     * automatically calculated.
     *
     * If a datetime string is passed, it is parsed into epoch time
     * according to the time zone given in [time.timezone](#time.timezone).
     *
     * If the [startOnTick](#yAxis.startOnTick) option is true (default),
     * the `min` value might be rounded down.
     *
     * The automatically calculated minimum value is also affected by
     * [floor](#yAxis.floor), [softMin](#yAxis.softMin),
     * [minPadding](#yAxis.minPadding), [minRange](#yAxis.minRange)
     * as well as [series.threshold](#plotOptions.series.threshold)
     * and [series.softThreshold](#plotOptions.series.softThreshold).
     *
     * @sample {highcharts} highcharts/yaxis/min-startontick-false/
     *         -50 with startOnTick to false
     * @sample {highcharts} highcharts/yaxis/min-startontick-true/
     *         -50 with startOnTick true by default
     * @sample {highstock} stock/xaxis/min-max/
     *         Set min and max on X axis
     *
     * @type      {number|string|null}
     * @apioption xAxis.min
     */
    /**
     * The dash or dot style of the minor grid lines. For possible values,
     * see [this demonstration](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-dashstyle-all/).
     *
     * @sample {highcharts} highcharts/yaxis/minorgridlinedashstyle/
     *         Long dashes on minor grid lines
     * @sample {highstock} stock/xaxis/minorgridlinedashstyle/
     *         Long dashes on minor grid lines
     *
     * @type      {Highcharts.DashStyleValue}
     * @since     1.2
     */
    minorGridLineDashStyle: "Solid",
    /**
     * Specific tick interval in axis units for the minor ticks. On a linear
     * axis, if `"auto"`, the minor tick interval is calculated as a fifth
     * of the tickInterval. If `undefined`, minor ticks are not shown.
     *
     * On logarithmic axes, the unit is the power of the value. For example,
     * setting the minorTickInterval to 1 puts one tick on each of 0.1, 1,
     * 10, 100 etc. Setting the minorTickInterval to 0.1 produces 9 ticks
     * between 1 and 10, 10 and 100 etc.
     *
     * If user settings dictate minor ticks to become too dense, they don't
     * make sense, and will be ignored to prevent performance problems.
     *
     * @sample {highcharts} highcharts/yaxis/minortickinterval-null/
     *         Undefined by default
     * @sample {highcharts} highcharts/yaxis/minortickinterval-5/ 5 units
     * @sample {highcharts} highcharts/yaxis/minortickinterval-log-auto/
     *         "auto"
     * @sample {highcharts} highcharts/yaxis/minortickinterval-log/ 0.1
     * @sample {highstock} stock/demo/basic-line/ Null by default
     * @sample {highstock} stock/xaxis/minortickinterval-auto/ "auto"
     *
     * @type      {number|'auto'}
     * @apioption xAxis.minorTickInterval
     */
    /**
     * The pixel length of the minor tick marks.
     *
     * @sample {highcharts} highcharts/yaxis/minorticklength/
     *         10px on Y axis
     * @sample {highstock} stock/xaxis/minorticks/
     *         10px on Y axis
     */
    minorTickLength: 2,
    /**
     * The position of the minor tick marks relative to the axis line.
     *  Can be one of `inside` and `outside`.
     *
     * @sample {highcharts} highcharts/yaxis/minortickposition-outside/
     *         Outside by default
     * @sample {highcharts} highcharts/yaxis/minortickposition-inside/
     *         Inside
     * @sample {highstock} stock/xaxis/minorticks/
     *         Inside
     *
     * @validvalue ["inside", "outside"]
     */
    minorTickPosition: "outside",
    /**
     * Enable or disable minor ticks. The interval between the minor ticks
     * can be controlled either by the
     * [minorTicksPerMajor](#xAxis.minorTicksPerMajor) setting, or as an
     * absolute [minorTickInterval](#xAxis.minorTickInterval) value.
     *
     * On a logarithmic axis, minor ticks are laid out based on a best
     * guess, attempting to enter an approximate number of minor ticks
     * between each major tick based on
     * [minorTicksPerMajor](#xAxis.minorTicksPerMajor).
     *
     * Prior to v6.0.0, ticks were enabled in auto layout by setting
     * `minorTickInterval` to `"auto"`.
     *
     * @productdesc {highcharts} On axes using
     * [categories](#xAxis.categories), minor ticks are not supported.
     *
     * @sample {highcharts} highcharts/yaxis/minorticks-true/ Enabled on
     *         linear Y axis
     *
     * @type      {boolean}
     * @default   false
     * @since     6.0.0
     * @apioption xAxis.minorTicks
     */
    /**
     * The number of minor ticks per major tick. Works for `linear`,
     * `logarithmic` and `datetime` axes.
     *
     * @sample {highcharts} highcharts/yaxis/minortickspermajor/
     *         2 minor ticks per major tick on Y axis
     *
     * @since  11.0.0
     *
     * @type {number}
     */
    minorTicksPerMajor: 5,
    /**
     * The pixel width of the minor tick mark.
     *
     * @sample {highcharts} highcharts/yaxis/minortickwidth/
     *         3px width
     * @sample {highstock} stock/xaxis/minorticks/
     *         1px width
     *
     * @type      {number}
     * @default   0
     * @apioption xAxis.minorTickWidth
     */
    /**
     * Padding of the min value relative to the length of the axis. A
     * padding of 0.05 will make a 100px axis 5px longer. This is useful
     * when you don't want the lowest data value to appear on the edge
     * of the plot area. When the axis' `min` option is set or a min extreme
     * is set using `axis.setExtremes()`, the minPadding will be ignored.
     *
     * @productdesc {highstock}
     * For an [ordinal](#xAxis.ordinal) axis, `minPadding` and `maxPadding`
     * are ignored. Use [overscroll](#xAxis.overscroll) instead.
     *
     * @sample {highcharts} highcharts/yaxis/minpadding/
     *         Min padding of 0.2
     * @sample {highstock} stock/xaxis/minpadding-maxpadding/
     *         Greater min- and maxPadding
     * @sample {highmaps} maps/chart/plotbackgroundcolor-gradient/
     *         Add some padding
     *
     * @default    {highcharts} 0.01
     * @default    {highstock|highmaps} 0
     * @since      1.2.0
     * @product    highcharts highstock gantt
     */
    minPadding: 0.01,
    /**
     * The minimum range to display on this axis. The entire axis will not
     * be allowed to span over a smaller interval than this. For example,
     * for a datetime axis the main unit is milliseconds. If minRange is
     * set to 3600000, you can't zoom in more than to one hour.
     *
     * The default minRange for the x axis is five times the smallest
     * interval between any of the data points.
     *
     * On a logarithmic axis, the unit for the minimum range is the power.
     * So a minRange of 1 means that the axis can be zoomed to 10-100,
     * 100-1000, 1000-10000 etc.
     *
     * **Note**: The `minPadding`, `maxPadding`, `startOnTick` and
     * `endOnTick` settings also affect how the extremes of the axis
     * are computed.
     *
     * @sample {highcharts} highcharts/xaxis/minrange/
     *         Minimum range of 5
     * @sample {highstock} stock/xaxis/minrange/
     *         Max zoom of 6 months overrides user selections
     *
     * @type      {number}
     * @apioption xAxis.minRange
     */
    /**
     * The minimum tick interval allowed in axis values. For example on
     * zooming in on an axis with daily data, this can be used to prevent
     * the axis from showing hours. Defaults to the closest distance between
     * two points on the axis.
     *
     * @type      {number}
     * @since     2.3.0
     * @apioption xAxis.minTickInterval
     */
    /**
     * The distance in pixels from the plot area to the axis line.
     * A positive offset moves the axis with it's line, labels and ticks
     * away from the plot area. This is typically used when two or more
     * axes are displayed on the same side of the plot. With multiple
     * axes the offset is dynamically adjusted to avoid collision, this
     * can be overridden by setting offset explicitly.
     *
     * @sample {highcharts} highcharts/yaxis/offset/
     *         Y axis offset of 70
     * @sample {highcharts} highcharts/yaxis/offset-centered/
     *         Axes positioned in the center of the plot
     * @sample {highstock} stock/xaxis/offset/
     *         Y axis offset by 70 px
     *
     * @type {number}
     */
    offset: void 0,
    /**
     * Whether to display the axis on the opposite side of the normal. The
     * normal is on the left side for vertical axes and bottom for
     * horizontal, so the opposite sides will be right and top respectively.
     * This is typically used with dual or multiple axes.
     *
     * @sample {highcharts} highcharts/yaxis/opposite/
     *         Secondary Y axis opposite
     * @sample {highstock} stock/xaxis/opposite/
     *         Y axis on left side
     *
     * @default   {highcharts|highstock|highmaps} false
     * @default   {gantt} true
     * @type      Boolean
     * @apioption xAxis.opposite
     */
    /**
     * In an ordinal axis, the points are equally spaced in the chart
     * regardless of the actual time or x distance between them. This means
     * that missing data periods (e.g. nights or weekends for a stock chart)
     * will not take up space in the chart.
     * Having `ordinal: false` will show any gaps created by the `gapSize`
     * setting proportionate to their duration.
     *
     * In stock charts the X axis is ordinal by default, unless
     * the boost module is used and at least one of the series' data length
     * exceeds the [boostThreshold](#series.line.boostThreshold).
     *
     * For an ordinal axis, `minPadding` and `maxPadding` are ignored. Use
     * [overscroll](#xAxis.overscroll) instead.
     *
     * @sample {highstock} stock/xaxis/ordinal-true/
     *         True by default
     * @sample {highstock} stock/xaxis/ordinal-false/
     *         False
     *
     * @see [overscroll](#xAxis.overscroll)
     *
     * @type      {boolean}
     * @default   true
     * @since     1.1
     * @product   highstock
     * @apioption xAxis.ordinal
     */
    /**
     * Additional range on the right side of the xAxis. Works similar to
     * `xAxis.maxPadding`, but the value is set in terms of axis values,
     * percentage or pixels.
     *
     * If it's a number, it is interpreted as axis values, which in a
     * datetime axis equals milliseconds.
     *
     * If it's a percentage string, is interpreted as percentages of axis
     * length. An overscroll of 50% will make a 100px axis 50px longer.
     *
     * If it's a pixel string, it is interpreted as a fixed pixel value, but
     * limited to 90% of the axis length.
     *
     * @sample {highstock} stock/xaxis/overscroll/ One minute overscroll
     *         with live data
     * @sample {highstock} stock/xaxis/overscroll-percent/ Overscroll set in
     *         percentage
     * @sample {highstock} stock/xaxis/overscroll-pixel/ Overscroll set in
     *         pixels
     *
     * @type      {number | string}
     * @default   0
     * @since     6.0.0
     * @product   highstock
     * @apioption xAxis.overscroll
     */
    /**
     * Refers to the index in the [panes](#panes) array. Used for circular
     * gauges and polar charts. When the option is not set then first pane
     * will be used.
     *
     * @sample highcharts/demo/gauge-vu-meter
     *         Two gauges with different center
     *
     * @type      {number}
     * @product   highcharts
     * @apioption xAxis.pane
     */
    /**
     * The zoomed range to display when only defining one or none of `min`
     * or `max`. For example, to show the latest month, a range of one month
     * can be set.
     *
     * @sample {highstock} stock/xaxis/range/
     *         Setting a zoomed range when the rangeSelector is disabled
     *
     * @type      {number}
     * @product   highstock
     * @apioption xAxis.range
     */
    /**
     * Whether to reverse the axis so that the highest number is closest
     * to the origin. If the chart is inverted, the x axis is reversed by
     * default.
     *
     * @sample {highcharts} highcharts/yaxis/reversed/
     *         Reversed Y axis
     * @sample {highstock} stock/xaxis/reversed/
     *         Reversed Y axis
     *
     * @type      {boolean}
     * @default   undefined
     * @apioption xAxis.reversed
     */
    reversed: void 0,
    /**
     * This option determines how stacks should be ordered within a group.
     * For example reversed xAxis also reverses stacks, so first series
     * comes last in a group. To keep order like for non-reversed xAxis
     * enable this option.
     *
     * @sample {highcharts} highcharts/xaxis/reversedstacks/
     *         Reversed stacks comparison
     * @sample {highstock} highcharts/xaxis/reversedstacks/
     *         Reversed stacks comparison
     *
     * @since     6.1.1
     * @product   highcharts highstock
     */
    reversedStacks: !1,
    /**
     * An optional scrollbar to display on the X axis in response to
     * limiting the minimum and maximum of the axis values.
     *
     * In styled mode, all the presentational options for the scrollbar are
     * replaced by the classes `.highcharts-scrollbar-thumb`,
     * `.highcharts-scrollbar-arrow`, `.highcharts-scrollbar-button`,
     * `.highcharts-scrollbar-rifles` and `.highcharts-scrollbar-track`.
     *
     * @sample {highstock} stock/yaxis/heatmap-scrollbars/
     *         Heatmap with both scrollbars
     *
     * @extends   scrollbar
     * @since     4.2.6
     * @product   highstock
     * @apioption xAxis.scrollbar
     */
    /**
     * Whether to show the axis line and title when the axis has no data.
     *
     * @sample {highcharts} highcharts/yaxis/showempty/
     *         When clicking the legend to hide series, one axis preserves
     *         line and title, the other doesn't
     * @sample {highstock} highcharts/yaxis/showempty/
     *         When clicking the legend to hide series, one axis preserves
     *         line and title, the other doesn't
     *
     * @since     1.1
     */
    showEmpty: !0,
    /**
     * Whether to show the first tick label.
     *
     * @sample {highcharts} highcharts/xaxis/showfirstlabel-false/
     *         Set to false on X axis
     * @sample {highstock} stock/xaxis/showfirstlabel/
     *         Labels below plot lines on Y axis
     */
    showFirstLabel: !0,
    /**
     * Whether to show the last tick label. Defaults to `true` on cartesian
     * charts, and `false` on polar charts.
     *
     * @sample {highcharts} highcharts/xaxis/showlastlabel-true/
     *         Set to true on X axis
     * @sample {highstock} stock/xaxis/showfirstlabel/
     *         Labels below plot lines on Y axis
     *
     * @type    {boolean}
     * @default undefined
     * @product highcharts highstock gantt
     */
    showLastLabel: !0,
    /**
     * A soft maximum for the axis. If the series data maximum is less than
     * this, the axis will stay at this maximum, but if the series data
     * maximum is higher, the axis will flex to show all data.
     *
     * @sample highcharts/yaxis/softmin-softmax/
     *         Soft min and max
     *
     * @type      {number}
     * @since     5.0.1
     * @product   highcharts highstock gantt
     * @apioption xAxis.softMax
     */
    /**
     * A soft minimum for the axis. If the series data minimum is greater
     * than this, the axis will stay at this minimum, but if the series
     * data minimum is lower, the axis will flex to show all data.
     *
     * @sample highcharts/yaxis/softmin-softmax/
     *         Soft min and max
     *
     * @type      {number}
     * @since     5.0.1
     * @product   highcharts highstock gantt
     * @apioption xAxis.softMin
     */
    /**
     * For datetime axes, this decides where to put the tick between weeks.
     *  0 = Sunday, 1 = Monday.
     *
     * @sample {highcharts} highcharts/xaxis/startofweek-monday/
     *         Monday by default
     * @sample {highcharts} highcharts/xaxis/startofweek-sunday/
     *         Sunday
     * @sample {highstock} stock/xaxis/startofweek-1
     *         Monday by default
     * @sample {highstock} stock/xaxis/startofweek-0
     *         Sunday
     *
     * @product highcharts highstock gantt
     */
    startOfWeek: 1,
    /**
     * Whether to force the axis to start on a tick. Use this option with
     * the `minPadding` option to control the axis start.
     *
     * @productdesc {highstock}
     * In Highcharts Stock, `startOnTick` is always `false` when
     * the navigator is enabled, to prevent jumpy scrolling.
     *
     * @sample {highcharts} highcharts/xaxis/startontick-false/
     *         False by default
     * @sample {highcharts} highcharts/xaxis/startontick-true/
     *         True
     *
     * @since 1.2.0
     */
    startOnTick: !1,
    /**
     * The amount of ticks to draw on the axis. This opens up for aligning
     * the ticks of multiple charts or panes within a chart. This option
     * overrides the `tickPixelInterval` option.
     *
     * This option only has an effect on linear axes. Datetime, logarithmic
     * or category axes are not affected.
     *
     * @sample {highcharts} highcharts/yaxis/tickamount/
     *         8 ticks on Y axis
     * @sample {highstock} highcharts/yaxis/tickamount/
     *         8 ticks on Y axis
     *
     * @type      {number}
     * @since     4.1.0
     * @product   highcharts highstock gantt
     * @apioption xAxis.tickAmount
     */
    /**
     * The interval of the tick marks in axis units. When `undefined`, the
     * tick interval is computed to approximately follow the
     * [tickPixelInterval](#xAxis.tickPixelInterval) on linear and datetime
     * axes. On categorized axes, a `undefined` tickInterval will default to
     * 1, one category. Note that datetime axes are based on milliseconds,
     * so for example an interval of one day is expressed as
     * `24 * 3600 * 1000`.
     *
     * On logarithmic axes, the tickInterval is based on powers, so a
     * tickInterval of 1 means one tick on each of 0.1, 1, 10, 100 etc. A
     * tickInterval of 2 means a tick of 0.1, 10, 1000 etc. A tickInterval
     * of 0.2 puts a tick on 0.1, 0.2, 0.4, 0.6, 0.8, 1, 2, 4, 6, 8, 10, 20,
     * 40 etc.
     *
     *
     * If the tickInterval is too dense for labels to be drawn, Highcharts
     * may remove ticks.
     *
     * If the chart has multiple axes, the [alignTicks](#chart.alignTicks)
     * option may interfere with the `tickInterval` setting.
     *
     * @see [tickPixelInterval](#xAxis.tickPixelInterval)
     * @see [tickPositions](#xAxis.tickPositions)
     * @see [tickPositioner](#xAxis.tickPositioner)
     *
     * @sample {highcharts} highcharts/xaxis/tickinterval-5/
     *         Tick interval of 5 on a linear axis
     * @sample {highstock} stock/xaxis/tickinterval/
     *         Tick interval of 0.01 on Y axis
     *
     * @type      {number}
     * @apioption xAxis.tickInterval
     */
    /**
     * The pixel length of the main tick marks.
     *
     * @sample {highcharts} highcharts/xaxis/ticklength/
     *         20 px tick length on the X axis
     * @sample {highstock} stock/xaxis/ticks/
     *         Formatted ticks on X axis
     */
    tickLength: 10,
    /**
     * If tickInterval is `null` this option sets the approximate pixel
     * interval of the tick marks. Not applicable to categorized axis.
     *
     * The tick interval is also influenced by the [minTickInterval](
     * #xAxis.minTickInterval) option, that, by default prevents ticks from
     * being denser than the data points.
     *
     * @see [tickInterval](#xAxis.tickInterval)
     * @see [tickPositioner](#xAxis.tickPositioner)
     * @see [tickPositions](#xAxis.tickPositions)
     *
     * @sample {highcharts} highcharts/xaxis/tickpixelinterval-50/
     *         50 px on X axis
     * @sample {highstock} stock/xaxis/tickpixelinterval/
     *         200 px on X axis
     */
    tickPixelInterval: 100,
    /**
     * For categorized axes only. If `on` the tick mark is placed in the
     * center of the category, if `between` the tick mark is placed between
     * categories. The default is `between` if the `tickInterval` is 1, else
     * `on`. In order to render tick marks on a category axis it is necessary
     * to provide a [tickWidth](#xAxis.tickWidth).
     *
     * @sample {highcharts} highcharts/xaxis/tickmarkplacement-between/
     *         "between" by default
     * @sample {highcharts} highcharts/xaxis/tickmarkplacement-on/
     *         "on"
     *
     * @product    highcharts gantt
     * @validvalue ["on", "between"]
     */
    tickmarkPlacement: "between",
    /**
     * The position of the major tick marks relative to the axis line.
     * Can be one of `inside` and `outside`.
     *
     * @sample {highcharts} highcharts/xaxis/tickposition-outside/
     *         "outside" by default
     * @sample {highcharts} highcharts/xaxis/tickposition-inside/
     *         "inside"
     * @sample {highstock} stock/xaxis/ticks/
     *         Formatted ticks on X axis
     *
     * @validvalue ["inside", "outside"]
     */
    tickPosition: "outside",
    /**
     * A callback function returning array defining where the ticks are
     * laid out on the axis. This overrides the default behaviour of
     * [tickPixelInterval](#xAxis.tickPixelInterval) and [tickInterval](
     * #xAxis.tickInterval). The automatic tick positions are accessible
     * through `this.tickPositions` and can be modified by the callback.
     *
     * @see [tickPositions](#xAxis.tickPositions)
     *
     * @sample {highcharts} highcharts/xaxis/tickpositions-tickpositioner/
     *         Demo of tickPositions and tickPositioner
     * @sample {highstock} highcharts/xaxis/tickpositions-tickpositioner/
     *         Demo of tickPositions and tickPositioner
     *
     * @type      {Highcharts.AxisTickPositionerCallbackFunction}
     * @apioption xAxis.tickPositioner
     */
    /**
     * An array defining where the ticks are laid out on the axis. This
     * overrides the default behaviour of [tickPixelInterval](
     * #xAxis.tickPixelInterval) and [tickInterval](#xAxis.tickInterval).
     *
     * Note: When working with date-time axes, be aware of time zone
     * handling. See the [documentation on time options](https://www.highcharts.com/docs/chart-concepts/axes#datetime)
     * for best practices.
     *
     * @see [tickPositioner](#xAxis.tickPositioner)
     *
     * @sample {highcharts} highcharts/xaxis/tickpositions-tickpositioner/
     *         Demo of tickPositions and tickPositioner
     * @sample {highstock} highcharts/xaxis/tickpositions-tickpositioner/
     *         Demo of tickPositions and tickPositioner
     *
     * @type      {Array<number>}
     * @apioption xAxis.tickPositions
     */
    /**
     * The pixel width of the major tick marks. Defaults to 0 on category
     * axes, otherwise 1.
     *
     * In styled mode, the stroke width is given in the `.highcharts-tick`
     * class, but in order for the element to be generated on category axes,
     * the option must be explicitly set to 1.
     *
     * @sample {highcharts} highcharts/xaxis/tickwidth/
     *         10 px width
     * @sample {highcharts} highcharts/css/axis-grid/
     *         Styled mode
     * @sample {highstock} stock/xaxis/ticks/
     *         Formatted ticks on X axis
     * @sample {highstock} highcharts/css/axis-grid/
     *         Styled mode
     *
     * @type      {undefined|number}
     * @default   {highstock} 1
     * @default   {highmaps} 0
     * @apioption xAxis.tickWidth
     */
    /**
     * The axis title, showing next to the axis line.
     *
     * @productdesc {highmaps}
     * In Highmaps, the axis is hidden by default, but adding an axis title
     * is still possible. X axis and Y axis titles will appear at the bottom
     * and left by default.
     */
    title: {
      /**
       * Alignment of the title relative to the axis values. Possible
       * values are "low", "middle" or "high".
       *
       * @sample {highcharts} highcharts/xaxis/title-align-low/
       *         "low"
       * @sample {highcharts} highcharts/xaxis/title-align-center/
       *         "middle" by default
       * @sample {highcharts} highcharts/xaxis/title-align-high/
       *         "high"
       * @sample {highcharts} highcharts/yaxis/title-offset/
       *         Place the Y axis title on top of the axis
       * @sample {highstock} stock/xaxis/title-align/
       *         Aligned to "high" value
       *
       * @type {Highcharts.AxisTitleAlignValue}
       */
      align: "middle",
      /**
       * Deprecated. Set the `text` to `undefined` to disable the title.
       *
       * @deprecated
       * @type      {boolean}
       * @product   highcharts
       * @apioption xAxis.title.enabled
       */
      /**
       * The pixel distance between the axis labels or line and the title.
       * Defaults to 0 for horizontal axes, 10 for vertical
       *
       * @sample {highcharts} highcharts/xaxis/title-margin/
       *         Y axis title margin of 60
       *
       * @type      {number}
       * @apioption xAxis.title.margin
       */
      /**
       * The distance of the axis title from the axis line. By default,
       * this distance is computed from the offset width of the labels,
       * the labels' distance from the axis and the title's margin.
       * However when the offset option is set, it overrides all this.
       *
       * @sample {highcharts} highcharts/yaxis/title-offset/
       *         Place the axis title on top of the axis
       * @sample {highstock} highcharts/yaxis/title-offset/
       *         Place the axis title on top of the Y axis
       *
       * @type      {number}
       * @since     2.2.0
       * @apioption xAxis.title.offset
       */
      /**
       * Whether to reserve space for the title when laying out the axis.
       *
       * @type      {boolean}
       * @default   true
       * @since     5.0.11
       * @product   highcharts highstock gantt
       * @apioption xAxis.title.reserveSpace
       */
      /**
       * The rotation of the text in degrees. 0 is horizontal, 270 is
       * vertical reading from bottom to top. Defaults to 0 for horizontal
       * axes, 270 for left-side axes and 90 for right-side axes.
       *
       * @sample    {highcharts} highcharts/yaxis/title-offset/
       *            Horizontal
       *
       * @type      {number}
       * @default   undefined
       * @apioption xAxis.title.rotation
       */
      /**
       * The actual text of the axis title. It can contain basic HTML tags
       * like `b`, `i` and `span` with style.
       *
       * @sample {highcharts} highcharts/xaxis/title-text/
       *         Custom HTML
       * @sample {highstock} stock/xaxis/title-text/
       *         Titles for both axes
       *
       * @type      {string|null}
       * @apioption xAxis.title.text
       */
      /**
       * Alignment of the text, can be `"left"`, `"right"` or `"center"`.
       * Default alignment depends on the
       * [title.align](xAxis.title.align):
       *
       * Horizontal axes:
       * - for `align` = `"low"`, `textAlign` is set to `left`
       * - for `align` = `"middle"`, `textAlign` is set to `center`
       * - for `align` = `"high"`, `textAlign` is set to `right`
       *
       * Vertical axes:
       * - for `align` = `"low"` and `opposite` = `true`, `textAlign` is
       *   set to `right`
       * - for `align` = `"low"` and `opposite` = `false`, `textAlign` is
       *   set to `left`
       * - for `align` = `"middle"`, `textAlign` is set to `center`
       * - for `align` = `"high"` and `opposite` = `true` `textAlign` is
       *   set to `left`
       * - for `align` = `"high"` and `opposite` = `false` `textAlign` is
       *   set to `right`
       *
       * @type      {Highcharts.AlignValue}
       * @apioption xAxis.title.textAlign
       */
      /**
       * Whether to [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
       * to render the axis title.
       *
       * @product   highcharts highstock gantt
       */
      useHTML: !1,
      /**
       * Horizontal pixel offset of the title position.
       *
       * @since     4.1.6
       * @product   highcharts highstock gantt
       */
      x: 0,
      /**
       * Vertical pixel offset of the title position.
       *
       * @product   highcharts highstock gantt
       */
      y: 0,
      /**
       * CSS styles for the title. If the title text is longer than the
       * axis length, it will wrap to multiple lines by default. This can
       * be customized by setting the `lineClamp` property, by setting a
       * specific `width` or by setting `whiteSpace: 'nowrap'`.
       *
       * In styled mode, the stroke width is given in the
       * `.highcharts-axis-title` class.
       *
       * @sample {highcharts} highcharts/xaxis/title-style/
       *         Red
       * @sample {highcharts} highcharts/css/axis/
       *         Styled mode
       *
       * @type    {Highcharts.CSSObject}
       */
      style: {
        /** @internal */
        color: "#666666",
        /**
         * @type {number|string}
         */
        fontSize: "0.8em"
      }
    },
    /**
     * The type of axis. Can be one of `linear`, `logarithmic`, `datetime`
     * or `category`. In a datetime axis, the numbers are given in
     * milliseconds, and tick marks are placed on appropriate values like
     * full hours or days. In a category axis, the
     * [point names](#series.line.data.name) of the chart's series are used
     * for categories, if not a [categories](#xAxis.categories) array is
     * defined.
     *
     * @sample {highcharts} highcharts/xaxis/type-linear/
     *         Linear
     * @sample {highcharts} highcharts/yaxis/type-log/
     *         Logarithmic
     * @sample {highcharts} highcharts/yaxis/type-log-minorgrid/
     *         Logarithmic with minor grid lines
     * @sample {highcharts} highcharts/xaxis/type-log-both/
     *         Logarithmic on two axes
     * @sample {highcharts} highcharts/yaxis/type-log-negative/
     *         Logarithmic with extension to emulate negative values
     *
     * @type    {Highcharts.AxisTypeValue}
     * @default linear
     * @product highcharts gantt
     * @apioption xAxis.type
     */
    /**
     * If there are multiple axes on the same side of the chart, the pixel
     * margin between the axes. Defaults to 0 on vertical axes, 15 on
     * horizontal axes.
     *
     * @type      {number}
     * @since     7.0.3
     * @apioption xAxis.margin
     */
    /**
     * Applies only when the axis `type` is `category`. When `uniqueNames`
     * is true, points are placed on the X axis according to their names.
     * If the same point name is repeated in the same or another series,
     * the point is placed on the same X position as other points of the
     * same name. When `uniqueNames` is false, the points are laid out in
     * increasing X positions regardless of their names, and the X axis
     * category will take the name of the last point in each position.
     *
     * @sample {highcharts} highcharts/xaxis/uniquenames-true/
     *         True by default
     * @sample {highcharts} highcharts/xaxis/uniquenames-false/
     *         False
     *
     * @since     4.2.7
     * @product   highcharts gantt
     * @type      {boolean}
     * @default   true
     * @apioption xAxis.uniqueNames
     */
    /**
     * Datetime axis only. An array determining what time intervals the
     * ticks are allowed to fall on. Each array item is an array where the
     * first value is the time unit and the second value another array of
     * allowed multiples.
     *
     * Defaults to:
     * ```js
     * units: [[
     *     'millisecond', // unit name
     *     [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // allowed multiples
     * ], [
     *     'second',
     *     [1, 2, 5, 10, 15, 30]
     * ], [
     *     'minute',
     *     [1, 2, 5, 10, 15, 30]
     * ], [
     *     'hour',
     *     [1, 2, 3, 4, 6, 8, 12]
     * ], [
     *     'day',
     *     [1, 2]
     * ], [
     *     'week',
     *     [1, 2]
     * ], [
     *     'month',
     *     [1, 2, 3, 4, 6]
     * ], [
     *     'year',
     *     null
     * ]]
     * ```
     *
     * @sample {highcharts} highcharts/xaxis/units/
     *         Axis units demonstrated
     *
     * @type      {Array<Array<string,(Array<number>|null)>>}
     * @product   highcharts highstock gantt
     * @apioption xAxis.units
     */
    /**
     * Whether axis, including axis title, line, ticks and labels, should
     * be visible.
     *
     * @since     4.1.9
     * @product   highcharts highstock gantt
     */
    visible: !0,
    /**
     * Color of the minor, secondary grid lines.
     *
     * In styled mode, the stroke width is given in the
     * `.highcharts-minor-grid-line` class.
     *
     * @sample {highcharts} highcharts/yaxis/minorgridlinecolor/
     *         Bright grey lines from Y axis
     * @sample {highcharts|highstock} highcharts/css/axis-grid/
     *         Styled mode
     * @sample {highstock} stock/xaxis/minorgridlinecolor/
     *         Bright grey lines from Y axis
     *
     * @type    {Highcharts.ColorType}
     * @default #f2f2f2
     */
    minorGridLineColor: "#f2f2f2",
    /**
     * Width of the minor, secondary grid lines.
     *
     * In styled mode, the stroke width is given in the
     * `.highcharts-grid-line` class.
     *
     * @sample {highcharts} highcharts/yaxis/minorgridlinewidth/
     *         2px lines from Y axis
     * @sample {highcharts|highstock} highcharts/css/axis-grid/
     *         Styled mode
     * @sample {highstock} stock/xaxis/minorgridlinewidth/
     *         2px lines from Y axis
     */
    minorGridLineWidth: 1,
    /**
     * Color for the minor tick marks.
     *
     * @sample {highcharts} highcharts/yaxis/minortickcolor/
     *         Black tick marks on Y axis
     * @sample {highstock} stock/xaxis/minorticks/
     *         Black tick marks on Y axis
     *
     * @type    {Highcharts.ColorType}
     * @default #999999
     */
    minorTickColor: "#999999",
    /**
     * The color of the line marking the axis itself.
     *
     * In styled mode, the line stroke is given in the
     * `.highcharts-axis-line` or `.highcharts-xaxis-line` class.
     *
     * @sample {highcharts} highcharts/yaxis/linecolor/
     *         A red line on Y axis
     * @sample {highcharts|highstock} highcharts/css/axis/
     *         Axes in styled mode
     * @sample {highstock} stock/xaxis/linecolor/
     *         A red line on X axis
     *
     * @type    {Highcharts.ColorType}
     */
    lineColor: "#333333",
    /**
     * The width of the line marking the axis itself.
     *
     * In styled mode, the stroke width is given in the
     * `.highcharts-axis-line` or `.highcharts-xaxis-line` class.
     *
     * @sample {highcharts} highcharts/yaxis/linecolor/
     *         A 1px line on Y axis
     * @sample {highcharts|highstock} highcharts/css/axis/
     *         Axes in styled mode
     * @sample {highstock} stock/xaxis/linewidth/
     *         A 2px line on X axis
     *
     * @default {highcharts|highstock} 1
     * @default {highmaps} 0
     */
    lineWidth: 1,
    /**
     * Color of the grid lines extending the ticks across the plot area.
     *
     * In styled mode, the stroke is given in the `.highcharts-grid-line`
     * class.
     *
     * @productdesc {highmaps}
     * In Highmaps, the grid lines are hidden by default.
     *
     * @sample {highcharts} highcharts/yaxis/gridlinecolor/
     *         Green lines
     * @sample {highcharts|highstock} highcharts/css/axis-grid/
     *         Styled mode
     * @sample {highstock} stock/xaxis/gridlinecolor/
     *         Green lines
     *
     * @type    {Highcharts.ColorType}
     * @default #e6e6e6
     */
    gridLineColor: "#e6e6e6",
    /**
     * The width of the grid lines extending the ticks across the plot area.
     * Defaults to 1 on the Y axis and 0 on the X axis, except for 3d
     * charts.
     *
     * In styled mode, the stroke width is given in the
     * `.highcharts-grid-line` class.
     *
     * @sample {highcharts} highcharts/yaxis/gridlinewidth/
     *         2px lines
     * @sample {highcharts|highstock} highcharts/css/axis-grid/
     *         Styled mode
     * @sample {highstock} stock/xaxis/gridlinewidth/
     *         2px lines
     *
     * @type      {number}
     * @apioption xAxis.gridLineWidth
     */
    gridLineWidth: void 0,
    /**
     * The height as the vertical axis. If it's a number, it is
     * interpreted as pixels.
     *
     * Since Highcharts 2: If it's a percentage string, it is interpreted
     * as percentages of the total plot height.
     *
     * @sample {highcharts} highcharts/xaxis/axis-position-properties
     *         Different axis position properties
     *
     * @type      {number|string}
     * @product   highcharts highstock
     * @apioption xAxis.height
     */
    /**
     * The width as the horizontal axis. If it's a number, it is interpreted
     * as pixels.
     *
     * Since Highcharts v5.0.13: If it's a percentage string, it is
     * interpreted as percentages of the total plot width.
     *
     * @sample {highcharts} highcharts/xaxis/axis-position-properties
     *         Different axis position properties
     *
     * @type      {number|string}
     * @product   highcharts highstock
     * @apioption xAxis.width
     */
    /**
     * Color for the main tick marks.
     *
     * In styled mode, the stroke is given in the `.highcharts-tick`
     * class.
     *
     * @sample {highcharts} highcharts/xaxis/tickcolor/
     *         Red ticks on X axis
     * @sample {highcharts|highstock} highcharts/css/axis-grid/
     *         Styled mode
     * @sample {highstock} stock/xaxis/ticks/
     *         Formatted ticks on X axis
     *
     * @type    {Highcharts.ColorType}
     */
    tickColor: "#333333"
    /* Palette.neutralColor80 */
    // `tickWidth: 1`
  }, c.yAxis = {
    /**
     * The type of axis. Can be one of `linear`, `logarithmic`, `datetime`,
     * `category` or `treegrid`. Defaults to `treegrid` for Gantt charts,
     * `linear` for other chart types.
     *
     * In a datetime axis, the numbers are given in milliseconds, and tick
     * marks are placed on appropriate values, like full hours or days. In a
     * category or treegrid axis, the [point names](#series.line.data.name)
     * of the chart's series are used for categories, if a
     * [categories](#xAxis.categories) array is not defined.
     *
     * @sample {highcharts} highcharts/yaxis/type-log-minorgrid/
     *         Logarithmic with minor grid lines
     * @sample {highcharts} highcharts/yaxis/type-log-negative/
     *         Logarithmic with extension to emulate negative values
     * @sample {gantt} gantt/treegrid-axis/demo
     *         Treegrid axis
     *
     * @type      {Highcharts.AxisTypeValue}
     * @default   {highcharts} linear
     * @default   {gantt} treegrid
     * @product   highcharts gantt
     * @apioption yAxis.type
     */
    /**
     * The height of the Y axis. If it's a number, it is interpreted as
     * pixels.
     *
     * Since Highcharts 2: If it's a percentage string, it is interpreted as
     * percentages of the total plot height.
     *
     * @see [yAxis.top](#yAxis.top)
     *
     * @sample {highstock} stock/demo/candlestick-and-volume/
     *         Percentage height panes
     *
     * @type      {number|string}
     * @product   highcharts highstock
     * @apioption yAxis.height
     */
    /**
     * Solid gauge only. Unless [stops](#yAxis.stops) are set, the color
     * to represent the maximum value of the Y axis.
     *
     * @sample {highcharts} highcharts/yaxis/mincolor-maxcolor/
     *         Min and max colors
     *
     * @type      {Highcharts.ColorType}
     * @default   #003399
     * @since     4.0
     * @product   highcharts
     * @apioption yAxis.maxColor
     */
    /**
     * Solid gauge only. Unless [stops](#yAxis.stops) are set, the color
     * to represent the minimum value of the Y axis.
     *
     * @sample {highcharts} highcharts/yaxis/mincolor-maxcolor/
     *         Min and max color
     *
     * @type      {Highcharts.ColorType}
     * @default   #e6ebf5
     * @since     4.0
     * @product   highcharts
     * @apioption yAxis.minColor
     */
    /**
     * Whether to reverse the axis so that the highest number is closest
     * to the origin.
     *
     * @sample {highcharts} highcharts/yaxis/reversed/
     *         Reversed Y axis
     * @sample {highstock} stock/xaxis/reversed/
     *         Reversed Y axis
     *
     * @type      {boolean}
     * @default   {highcharts} false
     * @default   {highstock} false
     * @default   {highmaps} true
     * @default   {gantt} true
     * @apioption yAxis.reversed
     */
    /**
     * If `true`, the first series in a stack will be drawn on top in a
     * positive, non-reversed Y axis. If `false`, the first series is in
     * the base of the stack.
     *
     * @sample {highcharts} highcharts/yaxis/reversedstacks-false/
     *         Non-reversed stacks
     * @sample {highstock} highcharts/yaxis/reversedstacks-false/
     *         Non-reversed stacks
     *
     * @type      {boolean}
     * @default   true
     * @since     3.0.10
     * @product   highcharts highstock
     * @apioption yAxis.reversedStacks
     */
    reversedStacks: !0,
    /**
     * Solid gauge series only. Color stops for the solid gauge. Use this
     * in cases where a linear gradient between a `minColor` and `maxColor`
     * is not sufficient. The stops is an array of tuples, where the first
     * item is a float between 0 and 1 assigning the relative position in
     * the gradient, and the second item is the color.
     *
     * For solid gauges, the Y axis also inherits the concept of
     * [data classes](https://api.highcharts.com/highmaps#colorAxis.dataClasses)
     * from the Highmaps color axis.
     *
     * @sample {highcharts} highcharts/demo/gauge-solid/
     *         Gauge with stops
     *
     * @see [minColor](#yAxis.minColor)
     * @see [maxColor](#yAxis.maxColor)
     *
     * @type      {Array<Array<number,Highcharts.ColorType>>}
     * @since     4.0
     * @product   highcharts
     * @apioption yAxis.stops
     */
    /**
     * The pixel width of the major tick marks.
     *
     * @sample {highcharts} highcharts/xaxis/tickwidth/ 10 px width
     * @sample {highstock} stock/xaxis/ticks/ Formatted ticks on X axis
     *
     * @type      {number}
     * @default   0
     * @product   highcharts highstock gantt
     * @apioption yAxis.tickWidth
     */
    /**
     * Whether to force the axis to end on a tick. Use this option with
     * the `maxPadding` option to control the axis end.
     *
     * This option is always disabled, when panning type is
     * either `y` or `xy`.
     *
     * @see [type](#chart.panning.type)
     *
     *
     * @sample {highcharts} highcharts/yaxis/endontick/
     *         True by default
     * @sample {highcharts} highcharts/yaxis/endontick-false/
     *         False
     * @sample {highstock} stock/demo/basic-line/
     *         True by default
     * @sample {highstock} stock/xaxis/endontick/
     *         False for Y axis
     *
     * @since 1.2.0
     */
    endOnTick: !0,
    /**
     * Padding of the max value relative to the length of the axis. A
     * padding of 0.05 will make a 100px axis 5px longer. This is useful
     * when you don't want the highest data value to appear on the edge
     * of the plot area. When the axis' `max` option is set or a max extreme
     * is set using `axis.setExtremes()`, the maxPadding will be ignored.
     *
     * Also the `softThreshold` option takes precedence over `maxPadding`,
     * so if the data is tangent to the threshold, `maxPadding` may not
     * apply unless `softThreshold` is set to false.
     *
     * @sample {highcharts} highcharts/yaxis/maxpadding-02/
     *         Max padding of 0.2
     * @sample {highstock} stock/xaxis/minpadding-maxpadding/
     *         Greater min- and maxPadding
     *
     * @since   1.2.0
     * @product highcharts highstock gantt
     */
    maxPadding: 0.05,
    /**
     * Padding of the min value relative to the length of the axis. A
     * padding of 0.05 will make a 100px axis 5px longer. This is useful
     * when you don't want the lowest data value to appear on the edge
     * of the plot area. When the axis' `min` option is set or a max extreme
     * is set using `axis.setExtremes()`, the maxPadding will be ignored.
     *
     * Also the `softThreshold` option takes precedence over `minPadding`,
     * so if the data is tangent to the threshold, `minPadding` may not
     * apply unless `softThreshold` is set to false.
     *
     * @sample {highcharts} highcharts/yaxis/minpadding/
     *         Min padding of 0.2
     * @sample {highstock} stock/xaxis/minpadding-maxpadding/
     *         Greater min- and maxPadding
     *
     * @since   1.2.0
     * @product highcharts highstock gantt
     */
    minPadding: 0.05,
    /**
     * @productdesc {highstock}
     * In Highcharts Stock 1.x, the Y axis was placed
     * on the left side by default.
     *
     * @sample {highcharts} highcharts/yaxis/opposite/
     *         Secondary Y axis opposite
     * @sample {highstock} stock/xaxis/opposite/
     *         Y axis on left side
     *
     * @type      {boolean}
     * @default   {highstock} true
     * @default   {highcharts} false
     * @product   highstock highcharts gantt
     * @apioption yAxis.opposite
     */
    /**
     * @see [tickInterval](#xAxis.tickInterval)
     * @see [tickPositioner](#xAxis.tickPositioner)
     * @see [tickPositions](#xAxis.tickPositions)
     */
    tickPixelInterval: 72,
    /**
     * Whether to show the last tick label.
     *
     * @productdesc {highcharts|gantt}
     * Defaults to `true` on cartesian charts, and `false` on polar charts.
     *
     * @productdesc {highstock}
     * Defaults to `true` for categorized yAxis and `false` for other types
     * of yAxis.
     *
     * @default undefined
     */
    showLastLabel: !0,
    /**
     * @extends xAxis.labels
     */
    labels: {
      /**
       * The label's pixel distance from the perimeter of the plot area.
       * On cartesian charts, this is overridden if the `labels.y` setting
       * is set.
       *
       * On polar charts, if it's a percentage string, it is interpreted
       * the same as [series.radius](#plotOptions.gauge.radius), so the
       * label can be aligned under the gauge's shape.
       *
       * @sample {highcharts} highcharts/yaxis/labels-distance/
       *         Polar chart, labels centered under the arc
       *
       * @type      {number|string}
       * @product   highcharts
       * @apioption yAxis.labels.distance
       */
      /**
       * The y position offset of all labels relative to the tick
       * positions on the axis. For polar and radial axis consider the use
       * of the [distance](#yAxis.labels.distance) option.
       *
       * @sample {highcharts} highcharts/xaxis/labels-x/
       *         Y axis labels placed on grid lines
       *
       * @type      {number}
       * @default   {highcharts} 3
       * @default   {highstock} -2
       * @default   {highmaps} 3
       * @apioption yAxis.labels.y
       */
      /**
       * What part of the string the given position is anchored to. Can
       * be one of `"left"`, `"center"` or `"right"`. The exact position
       * also depends on the `labels.x` setting.
       *
       * Angular gauges and solid gauges defaults to `"center"`.
       * Solid gauges with two labels have additional option `"auto"`
       * for automatic horizontal and vertical alignment.
       *
       * @sample {highcharts} highcharts/yaxis/labels-align-left/
       *         Left
       * @sample {highcharts} highcharts/series-solidgauge/labels-auto-aligned/
       *         Solid gauge labels auto aligned
       *
       * @type       {Highcharts.AlignValue}
       * @default    {highstock} right
       * @apioption  yAxis.labels.align
       */
      /**
       * The x position offset of all labels relative to the tick
       * positions on the axis. Defaults to -15 for left axis, 15 for
       * right axis.
       *
       * @sample {highcharts} highcharts/xaxis/labels-x/
       *         Y axis labels placed on grid lines
       *
       * @type {number}
       */
      x: void 0
    },
    /**
     * @sample {highcharts} highcharts/yaxis/max-200/
     *         Y axis max of 200
     * @sample {highcharts} highcharts/yaxis/max-logarithmic/
     *         Y axis max on logarithmic axis
     * @sample {highstock} stock/yaxis/min-max/
     *         Fixed min and max on Y axis
     *
     * @apioption yAxis.max
     */
    /**
     * @sample {highcharts} highcharts/yaxis/min-startontick-false/
     *         -50 with startOnTick to false
     * @sample {highcharts} highcharts/yaxis/min-startontick-true/
     *         -50 with startOnTick true by default
     * @sample {highstock} stock/yaxis/min-max/
     *         Fixed min and max on Y axis
     *
     * @apioption yAxis.min
     */
    /**
     * An optional scrollbar to display on the Y axis in response to
     * limiting the minimum an maximum of the axis values.
     *
     * In styled mode, all the presentational options for the scrollbar
     * are replaced by the classes `.highcharts-scrollbar-thumb`,
     * `.highcharts-scrollbar-arrow`, `.highcharts-scrollbar-button`,
     * `.highcharts-scrollbar-rifles` and `.highcharts-scrollbar-track`.
     *
     * @sample {highstock} stock/yaxis/scrollbar/
     *         Scrollbar on the Y axis
     *
     * @extends   scrollbar
     * @since     4.2.6
     * @product   highstock
     * @excluding height
     * @apioption yAxis.scrollbar
     */
    /**
     * Enable the scrollbar on the Y axis.
     *
     * @sample {highstock} stock/yaxis/scrollbar/
     *         Enabled on Y axis
     *
     * @type      {boolean}
     * @default   false
     * @since     4.2.6
     * @product   highstock
     * @apioption yAxis.scrollbar.enabled
     */
    /**
     * Pixel margin between the scrollbar and the axis elements.
     *
     * @type      {number}
     * @default   10
     * @since     4.2.6
     * @product   highstock
     * @apioption yAxis.scrollbar.margin
     */
    /* eslint-disable @highcharts/highcharts/doclet-apioption-last */
    /**
     * Defines the position of the scrollbar. By default, it is positioned
     * on the opposite of the main axis (right side of the chart).
     * However, in the case of RTL languages could be set to `false`
     * which positions the scrollbar on the left.
     *
     * Works only for vertical axes.
     * This means yAxis in a non-inverted chart and xAxis in the inverted.
     *
     * @sample stock/yaxis/scrollbar-opposite/
     *         A scrollbar not on the opposite side
     *
     * @type      {boolean}
     * @default   true
     * @since 9.3.0
     *
     * @apioption yAxis.scrollbar.opposite
     * @apioption xAxis.scrollbar.opposite
     *
     */
    /* eslint-enable @highcharts/highcharts/doclet-apioption-last */
    /**
     * Whether to show the scrollbar when it is fully zoomed out at max
     * range. Setting it to `false` on the Y axis makes the scrollbar stay
     * hidden until the user zooms in, like common in browsers.
     *
     * @type      {boolean}
     * @default   true
     * @since     4.2.6
     * @product   highstock
     * @apioption yAxis.scrollbar.showFull
     */
    /**
     * The width of a vertical scrollbar or height of a horizontal
     * scrollbar. Defaults to 20 on touch devices.
     *
     * @type      {number}
     * @default   14
     * @since     4.2.6
     * @product   highstock
     * @apioption yAxis.scrollbar.size
     */
    /**
     * Z index of the scrollbar elements.
     *
     * @type      {number}
     * @default   3
     * @since     4.2.6
     * @product   highstock
     * @apioption yAxis.scrollbar.zIndex
     */
    /**
     * A soft maximum for the axis. If the series data maximum is less
     * than this, the axis will stay at this maximum, but if the series
     * data maximum is higher, the axis will flex to show all data.
     *
     * **Note**: The [series.softThreshold](
     * #plotOptions.series.softThreshold) option takes precedence over this
     * option.
     *
     * @sample highcharts/yaxis/softmin-softmax/
     *         Soft min and max
     *
     * @type      {number}
     * @since     5.0.1
     * @product   highcharts highstock gantt
     * @apioption yAxis.softMax
     */
    /**
     * A soft minimum for the axis. If the series data minimum is greater
     * than this, the axis will stay at this minimum, but if the series
     * data minimum is lower, the axis will flex to show all data.
     *
     * **Note**: The [series.softThreshold](
     * #plotOptions.series.softThreshold) option takes precedence over this
     * option.
     *
     * @sample highcharts/yaxis/softmin-softmax/
     *         Soft min and max
     *
     * @type      {number}
     * @since     5.0.1
     * @product   highcharts highstock gantt
     * @apioption yAxis.softMin
     */
    /**
     * Defines the horizontal alignment of the stack total label. Can be one
     * of `"left"`, `"center"` or `"right"`. The default value is calculated
     * at runtime and depends on orientation and whether the stack is
     * positive or negative.
     *
     * @sample {highcharts} highcharts/yaxis/stacklabels-align-left/
     *         Aligned to the left
     * @sample {highcharts} highcharts/yaxis/stacklabels-align-center/
     *         Aligned in center
     * @sample {highcharts} highcharts/yaxis/stacklabels-align-right/
     *         Aligned to the right
     *
     * @type      {Highcharts.AlignValue}
     * @since     2.1.5
     * @product   highcharts
     * @apioption yAxis.stackLabels.align
     */
    /**
     * A format string for the data label. Available variables are the same
     * as for `formatter`.
     *
     * @type      {string}
     * @default   {total}
     * @since     3.0.2
     * @product   highcharts highstock
     * @apioption yAxis.stackLabels.format
     */
    /**
     * Rotation of the labels in degrees.
     *
     * @sample {highcharts} highcharts/yaxis/stacklabels-rotation/
     *         Labels rotated 45°
     *
     * @type      {number}
     * @default   0
     * @since     2.1.5
     * @product   highcharts
     * @apioption yAxis.stackLabels.rotation
     */
    /**
     * The text alignment for the label. While `align` determines where the
     * texts anchor point is placed with regards to the stack, `textAlign`
     * determines how the text is aligned against its anchor point. Possible
     * values are `"left"`, `"center"` and `"right"`. The default value is
     * calculated at runtime and depends on orientation and whether the
     * stack is positive or negative.
     *
     * @sample {highcharts} highcharts/yaxis/stacklabels-textalign-left/
     *         Label in center position but text-aligned left
     *
     * @type      {Highcharts.AlignValue}
     * @since     2.1.5
     * @product   highcharts
     * @apioption yAxis.stackLabels.textAlign
     */
    /**
     * Whether to [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
     * to render the labels.
     *
     * @type      {boolean}
     * @default   false
     * @since     3.0
     * @product   highcharts highstock
     * @apioption yAxis.stackLabels.useHTML
     */
    /**
     * Defines the vertical alignment of the stack total label. Can be one
     * of `"top"`, `"middle"` or `"bottom"`. The default value is calculated
     * at runtime and depends on orientation and whether the stack is
     * positive or negative.
     *
     * @sample {highcharts} highcharts/yaxis/stacklabels-verticalalign-top/
     *         Vertically aligned top
     * @sample {highcharts} highcharts/yaxis/stacklabels-verticalalign-middle/
     *         Vertically aligned middle
     * @sample {highcharts} highcharts/yaxis/stacklabels-verticalalign-bottom/
     *         Vertically aligned bottom
     *
     * @type      {Highcharts.VerticalAlignValue}
     * @since     2.1.5
     * @product   highcharts
     * @apioption yAxis.stackLabels.verticalAlign
     */
    /**
     * The x position offset of the label relative to the left of the
     * stacked bar. The default value is calculated at runtime and depends
     * on orientation and whether the stack is positive or negative.
     *
     * @sample {highcharts} highcharts/yaxis/stacklabels-x/
     *         Stack total labels with x offset
     *
     * @type      {number}
     * @since     2.1.5
     * @product   highcharts
     * @apioption yAxis.stackLabels.x
     */
    /**
     * The y position offset of the label relative to the tick position
     * on the axis. The default value is calculated at runtime and depends
     * on orientation and whether the stack is positive or negative.
     *
     * @sample {highcharts} highcharts/yaxis/stacklabels-y/
     *         Stack total labels with y offset
     *
     * @type      {number}
     * @since     2.1.5
     * @product   highcharts
     * @apioption yAxis.stackLabels.y
     */
    /**
     * Whether to force the axis to start on a tick. Use this option with
     * the `maxPadding` option to control the axis start.
     *
     * This option is always disabled, when panning type is
     * either `y` or `xy`.
     *
     * @see [type](#chart.panning.type)
     *
     * @sample {highcharts} highcharts/xaxis/startontick-false/
     *         False by default
     * @sample {highcharts} highcharts/xaxis/startontick-true/
     *         True
     * @sample {highstock} stock/xaxis/endontick/
     *         False for Y axis
     *
     * @since   1.2.0
     * @product highcharts highstock gantt
     */
    startOnTick: !0,
    title: {
      /**
       * The pixel distance between the axis labels and the title.
       * Positive values are outside the axis line, negative are inside.
       *
       * @sample {highcharts} highcharts/xaxis/title-margin/
       *         Y axis title margin of 60
       *
       * @type      {number}
       * @default   40
       * @apioption yAxis.title.margin
       */
      /**
       * The actual text of the axis title. Horizontal texts can contain
       * HTML, but rotated texts are painted using vector techniques and
       * must be clean text. The Y axis title is disabled by setting the
       * `text` option to `undefined`. The default value is overriden by
       * the `lang.yAxisTitle` language option.
       *
       * @sample {highcharts} highcharts/xaxis/title-text/
       *         Custom HTML
       *
       * @type    {string|undefined}
       * @default {highcharts} Values
       * @default {highstock} undefined
       * @product highcharts highstock gantt
       * @apioption yAxis.title.text
       */
    },
    /**
     * The top position of the Y axis. If it's a number, it is interpreted
     * as pixel position relative to the chart.
     *
     * Since Highcharts 2: If it's a percentage string, it is interpreted as
     * percentages of the plot height, offset from plot area top.
     *
     * @see [yAxis.height](#yAxis.height)
     *
     * @sample {highstock} stock/demo/candlestick-and-volume/
     *         Percentage height panes
     *
     * @type      {number|string}
     * @product   highcharts highstock
     * @apioption yAxis.top
     */
    /**
     * The stack labels show the total value for each bar in a stacked
     * column or bar chart. The label will be placed on top of positive
     * columns and below negative columns. In case of an inverted column
     * chart or a bar chart the label is placed to the right of positive
     * bars and to the left of negative bars.
     *
     * @product highcharts
     */
    stackLabels: {
      /**
       * Enable or disable the initial animation when a series is
       * displayed for the `stackLabels`. The animation can also be set as
       * a configuration object. Please note that this option only
       * applies to the initial animation.
       * For other animations, see [chart.animation](#chart.animation)
       * and the animation parameter under the API methods.
       * The following properties are supported:
       *
       * - `defer`: The animation delay time in milliseconds.
       *
       * @sample {highcharts} highcharts/plotoptions/animation-defer/
       *          Animation defer settings
       * @type {boolean|Partial<Highcharts.AnimationOptionsObject>}
       * @since 8.2.0
       * @apioption yAxis.stackLabels.animation
       */
      animation: {},
      /**
       * The animation delay time in milliseconds.
       * Set to `0` renders stackLabel immediately.
       * As `undefined` inherits defer time from the [series.animation.defer](#plotOptions.series.animation.defer).
       *
       * @type      {number}
       * @since 8.2.0
       * @apioption yAxis.stackLabels.animation.defer
       */
      /**
       * Allow the stack labels to overlap.
       *
       * @sample {highcharts} highcharts/yaxis/stacklabels-allowoverlap-false/
       *         Default false
       *
       * @since   5.0.13
       * @product highcharts
       */
      allowOverlap: !1,
      /**
       * The background color or gradient for the stack label.
       *
       * @sample {highcharts} highcharts/yaxis/stacklabels-box/
       *          Stack labels box options
       * @type      {Highcharts.ColorType}
       * @since 8.1.0
       * @apioption yAxis.stackLabels.backgroundColor
       */
      /**
       * The border color for the stack label. Defaults to `undefined`.
       *
       * @sample {highcharts} highcharts/yaxis/stacklabels-box/
       *          Stack labels box options
       * @type      {Highcharts.ColorType}
       * @since 8.1.0
       * @apioption yAxis.stackLabels.borderColor
       */
      /**
       * The border radius in pixels for the stack label.
       *
       * @sample {highcharts} highcharts/yaxis/stacklabels-box/
       *          Stack labels box options
       * @type      {number}
       * @default   0
       * @since 8.1.0
       * @apioption yAxis.stackLabels.borderRadius
       */
      /**
       * The border width in pixels for the stack label.
       *
       * @sample {highcharts} highcharts/yaxis/stacklabels-box/
       *          Stack labels box options
       * @type      {number}
       * @default   0
       * @since 8.1.0
       * @apioption yAxis.stackLabels.borderWidth
       */
      /**
       * Enable or disable the stack total labels.
       *
       * @sample {highcharts} highcharts/yaxis/stacklabels-enabled/
       *         Enabled stack total labels
       * @sample {highcharts} highcharts/yaxis/stacklabels-enabled-waterfall/
       *         Enabled stack labels in waterfall chart
       *
       * @since   2.1.5
       * @product highcharts
       */
      enabled: !1,
      /**
       * Whether to hide stack labels that are outside the plot area.
       * By default, the stack label is moved
       * inside the plot area according to the
       * [overflow](/highcharts/#yAxis/stackLabels/overflow)
       * option.
       *
       * @type  {boolean}
       * @since 7.1.3
       */
      crop: !0,
      /**
       * How to handle stack total labels that flow outside the plot area.
       * The default is set to `"justify"`,
       * which aligns them inside the plot area.
       * For columns and bars, this means it will be moved inside the bar.
       * To display stack labels outside the plot area,
       * set `crop` to `false` and `overflow` to `"allow"`.
       *
       * @sample highcharts/yaxis/stacklabels-overflow/
       *         Stack labels flows outside the plot area.
       *
       * @type  {Highcharts.DataLabelsOverflowValue}
       * @since 7.1.3
       */
      overflow: "justify",
      /* eslint-disable valid-jsdoc */
      /**
       * Callback JavaScript function to format the label. The value is
       * given by `this.total`.
       *
       * @sample {highcharts} highcharts/yaxis/stacklabels-formatter/
       *         Added units to stack total value
       *
       * @type    {Highcharts.FormatterCallbackFunction<Highcharts.StackItemObject>}
       * @since   2.1.5
       * @product highcharts
       */
      formatter: function() {
        const { numberFormatter: t } = this.axis.chart;
        return t(this.total || 0, -1);
      },
      /**
       * CSS styles for the label.
       *
       * In styled mode, the styles are set in the
       * `.highcharts-stack-label` class.
       *
       * @sample {highcharts} highcharts/yaxis/stacklabels-style/
       *         Red stack total labels
       *
       * @type    {Highcharts.CSSObject}
       * @since   2.1.5
       * @product highcharts
       */
      style: {
        /** @internal */
        color: "#000000",
        /**
         * @type {number|string}
         */
        fontSize: "0.7em",
        /** @internal */
        fontWeight: "bold",
        /** @internal */
        textOutline: "1px contrast"
      }
    },
    gridLineWidth: 1,
    lineWidth: 0
  };
})(Bi || (Bi = {}));
const Tn = Bi, On = {
  /**
   * Default `mapData` for all series, in terms of a GeoJSON or TopoJSON
   * object. If set to a string, it functions as an index into the
   * `Highcharts.maps` array.
   *
   * For picking out individual shapes and geometries to use for each series
   * of the map, see [series.mapData](#series.map.mapData).
   *
   * @sample    maps/demo/geojson
   *            Loading GeoJSON data
   * @sample    maps/chart/topojson
   *            Loading TopoJSON data
   *
   * @type      {string|Array<*>|Highcharts.GeoJSON|Highcharts.TopoJSON}
   * @since     5.0.0
   * @product   highmaps
   * @apioption chart.map
   */
  /**
   * Set lat/lon transformation definitions for the chart. If not defined,
   * these are extracted from the map data.
   *
   * @type      {*}
   * @since     5.0.0
   * @product   highmaps
   * @apioption chart.mapTransforms
   */
  /**
   * When using multiple axes, the ticks of two or more opposite axes
   * will automatically be aligned by adding ticks to the axis or axes
   * with the least ticks, as if `tickAmount` were specified.
   *
   * This can be prevented by setting `alignTicks` to false. If the grid
   * lines look messy, it's a good idea to hide them for the secondary
   * axis by setting `gridLineWidth` to 0.
   *
   * If `startOnTick` or `endOnTick` in the axis options are set to false,
   * then the `alignTicks ` will be disabled for the axis.
   *
   * Disabled for logarithmic axes.
   *
   * @sample {highcharts} highcharts/chart/alignticks-true/
   *         True by default
   * @sample {highcharts} highcharts/chart/alignticks-false/
   *         False
   * @sample {highstock} stock/chart/alignticks-true/
   *         True by default
   * @sample {highstock} stock/chart/alignticks-false/
   *         False
   *
   * @type      {boolean}
   * @default   true
   * @product   highcharts highstock gantt
   * @apioption chart.alignTicks
   */
  /**
   * When using multiple axes, align the thresholds. When this is true, other
   * ticks will also be aligned.
   *
   * Note that for line series and some other series types, the `threshold`
   * option is set to `null` by default. This will in turn cause their y-axis
   * to not have a threshold. In order to avoid that, set the series
   * `threshold` to 0 or another number.
   *
   * If `startOnTick` or `endOnTick` in the axis options are set to false, or
   * if the axis is logarithmic, the threshold will not be aligned.
   *
   * @sample {highcharts} highcharts/chart/alignthresholds/ Set to true
   *
   * @since 10.0.0
   * @product   highcharts highstock gantt
   * @apioption chart.alignThresholds
   */
  alignThresholds: !1,
  /**
   * Set the overall animation for all chart updating. Animation can be
   * disabled throughout the chart by setting it to false here. It can
   * be overridden for each individual API method as a function parameter.
   * The only animation not affected by this option is the initial series
   * animation, see [plotOptions.series.animation](
   * #plotOptions.series.animation).
   *
   * The animation can either be set as a boolean or a configuration
   * object. If `true`, it will use the 'swing' jQuery easing and a
   * duration of 500 ms. If used as a configuration object, the following
   * properties are supported:
   *
   * - `defer`: The animation delay time in milliseconds.
   *
   * - `duration`: The duration of the animation in milliseconds.
   *
   * - `easing`: A string reference to an easing function set on the
   *   `Math` object. See
   *   [the easing demo](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-animation-easing/).
   *
   * When zooming on a series with less than 100 points, the chart redraw
   * will be done with animation, but in case of more data points, it is
   * necessary to set this option to ensure animation on zoom.
   *
   * @sample {highcharts} highcharts/chart/animation-none/
   *         Updating with no animation
   * @sample {highcharts} highcharts/chart/animation-duration/
   *         With a longer duration
   * @sample {highcharts} highcharts/chart/animation-easing/
   *         With a jQuery UI easing
   * @sample {highmaps} maps/chart/animation-none/
   *         Updating with no animation
   * @sample {highmaps} maps/chart/animation-duration/
   *         With a longer duration
   *
   * @type      {boolean|Partial<Highcharts.AnimationOptionsObject>}
   * @default   true
   * @apioption chart.animation
   */
  /**
   * A CSS class name to apply to the charts container `div`, allowing
   * unique CSS styling for each chart.
   *
   * @type      {string}
   * @apioption chart.className
   */
  /**
   * Event listeners for the chart.
   *
   * @apioption chart.events
   */
  /**
   * Fires when a series is added to the chart after load time, using the
   * `addSeries` method. One parameter, `event`, is passed to the
   * function, containing common event information. Through
   * `event.options` you can access the series options that were passed to
   * the `addSeries` method. Returning false prevents the series from
   * being added.
   *
   * @sample {highcharts} highcharts/chart/events-addseries/
   *         Alert on add series
   * @sample {highstock} stock/chart/events-addseries/
   *         Alert on add series
   *
   * @type      {Highcharts.ChartAddSeriesCallbackFunction}
   * @since     1.2.0
   * @context   Highcharts.Chart
   * @apioption chart.events.addSeries
   */
  /**
   * Fires when clicking on the plot background. One parameter, `event`,
   * is passed to the function, containing common event information.
   *
   * Information on the clicked spot can be found through `event.xAxis`
   * and `event.yAxis`, which are arrays containing the axes of each
   * dimension and each axis' value at the clicked spot. The primary axes
   * are `event.xAxis[0]` and `event.yAxis[0]`. Remember the unit of a
   * datetime axis is milliseconds since 1970-01-01 00:00:00.
   *
   * ```js
   * click: function(e) {
   *     console.log(
   *         Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', e.xAxis[0].value),
   *         e.yAxis[0].value
   *     )
   * }
   * ```
   *
   * @sample {highcharts} highcharts/chart/events-click/
   *         Alert coordinates on click
   * @sample {highcharts} highcharts/chart/events-container/
   *         Alternatively, attach event to container
   * @sample {highstock} stock/chart/events-click/
   *         Alert coordinates on click
   * @sample {highstock} highcharts/chart/events-container/
   *         Alternatively, attach event to container
   * @sample {highmaps} maps/chart/events-click/
   *         Record coordinates on click
   * @sample {highmaps} highcharts/chart/events-container/
   *         Alternatively, attach event to container
   *
   * @type      {Highcharts.ChartClickCallbackFunction}
   * @since     1.2.0
   * @context   Highcharts.Chart
   * @apioption chart.events.click
   */
  /**
   * Fires when the chart is finished loading. Since v4.2.2, it also waits
   * for images to be loaded, for example from point markers. One
   * parameter, `event`, is passed to the function, containing common
   * event information.
   *
   * There is also a second parameter to the chart constructor where a
   * callback function can be passed to be executed on chart.load.
   *
   * @sample {highcharts} highcharts/chart/events-load/
   *         Alert on chart load
   * @sample {highcharts} highcharts/chart/events-render/
   *         Load vs Redraw vs Render
   * @sample {highstock} stock/chart/events-load/
   *         Alert on chart load
   * @sample {highmaps} maps/chart/events-load/
   *         Add series on chart load
   *
   * @type      {Highcharts.ChartLoadCallbackFunction}
   * @context   Highcharts.Chart
   * @apioption chart.events.load
   */
  /**
   * Fires when the chart is redrawn, either after a call to
   * `chart.redraw()` or after an axis, series or point is modified with
   * the `redraw` option set to `true`. One parameter, `event`, is passed
   * to the function, containing common event information.
   *
   * @sample {highcharts} highcharts/chart/events-redraw/
   *         Alert on chart redraw
   * @sample {highcharts} highcharts/chart/events-render/
   *         Load vs Redraw vs Render
   * @sample {highstock} stock/chart/events-redraw/
   *         Alert on chart redraw when adding a series or moving the
   *         zoomed range
   * @sample {highmaps} maps/chart/events-redraw/
   *         Set subtitle on chart redraw
   *
   * @type      {Highcharts.ChartRedrawCallbackFunction}
   * @since     1.2.0
   * @context   Highcharts.Chart
   * @apioption chart.events.redraw
   */
  /**
   * Fires after initial load of the chart (directly after the `load`
   * event), and after each redraw (directly after the `redraw` event).
   *
   * @sample {highcharts} highcharts/chart/events-render/
   *         Load vs Redraw vs Render
   *
   * @type      {Highcharts.ChartRenderCallbackFunction}
   * @since     5.0.7
   * @context   Highcharts.Chart
   * @apioption chart.events.render
   */
  /**
   * Fires when an area of the chart has been selected. Selection is
   * enabled by setting the chart's zoomType. One parameter, `event`, is
   * passed to the function, containing common event information. The
   * default action for the selection event is to zoom the chart to the
   * selected area. It can be prevented by calling
   * `event.preventDefault()` or return false.
   *
   * Information on the selected area can be found through `event.xAxis`
   * and `event.yAxis`, which are arrays containing the axes of each
   * dimension and each axis' min and max values. The primary axes are
   * `event.xAxis[0]` and `event.yAxis[0]`. Remember the unit of a
   * datetime axis is milliseconds since 1970-01-01 00:00:00.
   *
   * ```js
   * selection: function(event) {
   *     // log the min and max of the primary, datetime x-axis
   *     console.log(
   *         Highcharts.dateFormat(
   *             '%Y-%m-%d %H:%M:%S',
   *             event.xAxis[0].min
   *         ),
   *         Highcharts.dateFormat(
   *             '%Y-%m-%d %H:%M:%S',
   *             event.xAxis[0].max
   *         )
   *     );
   *     // log the min and max of the y axis
   *     console.log(event.yAxis[0].min, event.yAxis[0].max);
   * }
   * ```
   *
   * @sample {highcharts} highcharts/chart/events-selection/
   *         Report on selection and reset
   * @sample {highcharts} highcharts/chart/events-selection-points/
   *         Select a range of points through a drag selection
   * @sample {highstock} stock/chart/events-selection/
   *         Report on selection and reset
   * @sample {highstock} highcharts/chart/events-selection-points/
   *         Select a range of points through a drag selection
   *         (Highcharts)
   *
   * @type      {Highcharts.ChartSelectionCallbackFunction}
   * @apioption chart.events.selection
   */
  /**
   * The margin between the outer edge of the chart and the plot area.
   * The numbers in the array designate top, right, bottom and left
   * respectively. Use the options `marginTop`, `marginRight`,
   * `marginBottom` and `marginLeft` for shorthand setting of one option.
   *
   * By default there is no margin. The actual space is dynamically
   * calculated from the offset of axis labels, axis title, title,
   * subtitle and legend in addition to the `spacingTop`, `spacingRight`,
   * `spacingBottom` and `spacingLeft` options.
   *
   * @sample {highcharts} highcharts/chart/margins-zero/
   *         Zero margins
   * @sample {highstock} stock/chart/margin-zero/
   *         Zero margins
   *
   * @type      {number|Array<number>}
   * @apioption chart.margin
   */
  /**
   * The margin between the bottom outer edge of the chart and the plot
   * area. Use this to set a fixed pixel value for the margin as opposed
   * to the default dynamic margin. See also `spacingBottom`.
   *
   * @sample {highcharts} highcharts/chart/marginbottom/
   *         100px bottom margin
   * @sample {highstock} stock/chart/marginbottom/
   *         100px bottom margin
   * @sample {highmaps} maps/chart/margin/
   *         100px margins
   *
   * @type      {number}
   * @since     2.0
   * @apioption chart.marginBottom
   */
  /**
   * The margin between the left outer edge of the chart and the plot
   * area. Use this to set a fixed pixel value for the margin as opposed
   * to the default dynamic margin. See also `spacingLeft`.
   *
   * @sample {highcharts} highcharts/chart/marginleft/
   *         150px left margin
   * @sample {highstock} stock/chart/marginleft/
   *         150px left margin
   * @sample {highmaps} maps/chart/margin/
   *         100px margins
   *
   * @type      {number}
   * @since     2.0
   * @apioption chart.marginLeft
   */
  /**
   * The margin between the right outer edge of the chart and the plot
   * area. Use this to set a fixed pixel value for the margin as opposed
   * to the default dynamic margin. See also `spacingRight`.
   *
   * @sample {highcharts} highcharts/chart/marginright/
   *         100px right margin
   * @sample {highstock} stock/chart/marginright/
   *         100px right margin
   * @sample {highmaps} maps/chart/margin/
   *         100px margins
   *
   * @type      {number}
   * @since     2.0
   * @apioption chart.marginRight
   */
  /**
   * The margin between the top outer edge of the chart and the plot area.
   * Use this to set a fixed pixel value for the margin as opposed to
   * the default dynamic margin. See also `spacingTop`.
   *
   * @sample {highcharts} highcharts/chart/margintop/ 100px top margin
   * @sample {highstock} stock/chart/margintop/
   *         100px top margin
   * @sample {highmaps} maps/chart/margin/
   *         100px margins
   *
   * @type      {number}
   * @since     2.0
   * @apioption chart.marginTop
   */
  /**
   * Callback function to override the default function that formats all
   * the numbers in the chart. Returns a string with the formatted number.
   *
   * @sample highcharts/members/highcharts-numberformat
   *      Arabic digits in Highcharts
   * @type {Highcharts.NumberFormatterCallbackFunction}
   * @since 8.0.0
   * @apioption chart.numberFormatter
   */
  /**
   * When a chart with an x and a y-axis is rendered, we first pre-render the
   * labels of both in order to measure them. Then, if either of the axis
   * labels take up so much space that it significantly affects the length of
   * the other axis, we repeat the process.
   *
   * By default we stop at two axis layout runs, but it may be that the second
   * run also alter the space required by either axis, for example if it
   * causes the labels to rotate. In this situation, a subsequent redraw of
   * the chart may cause the tick and label placement to change for apparently
   * no reason.
   *
   * Use the `axisLayoutRuns` option to set the maximum allowed number of
   * repetitions. But keep in mind that the default value of 2 is set because
   * every run costs performance time.
   *
   * **Note:** Changing that option to higher than the default might decrease
   * performance significantly, especially with bigger sets of data.
   *
   * @type      {number}
   * @default   2
   * @since     11.3.0
   * @apioption chart.axisLayoutRuns
   */
  /**
   * Allows setting a key to switch between zooming and panning. Can be
   * one of `alt`, `ctrl`, `meta` (the command key on Mac and Windows
   * key on Windows) or `shift`. The keys are mapped directly to the key
   * properties of the click event argument (`event.altKey`,
   * `event.ctrlKey`, `event.metaKey` and `event.shiftKey`).
   *
   * @type       {string}
   * @since      4.0.3
   * @product    highcharts gantt
   * @validvalue ["alt", "ctrl", "meta", "shift"]
   * @apioption  chart.panKey
   */
  /**
   * Allow panning in a chart. Best used with [panKey](#chart.panKey)
   * to combine zooming and panning.
   *
   * On touch devices, when the [tooltip.followTouchMove](
   * #tooltip.followTouchMove) option is `true` (default), panning
   * requires two fingers. To allow panning with one finger, set
   * `followTouchMove` to `false`.
   *
   * @sample  {highcharts} highcharts/chart/pankey/ Zooming and panning
   * @sample  {highstock} stock/chart/panning/ Zooming and xy panning
   */
  panning: {
    /**
     * Enable or disable chart panning.
     *
     * @type      {boolean}
     * @default   {highcharts} false
     * @default   {highstock|highmaps} true
     */
    enabled: !1,
    /**
     * Decides in what dimensions the user can pan the chart. Can be
     * one of `x`, `y`, or `xy`.
     *
     * During panning, all axes will behave as if
     * [`startOnTick`](#yAxis.startOnTick) and
     * [`endOnTick`](#yAxis.endOnTick) were set to `false`. After the
     * panning action is finished, the axes will adjust to their actual
     * settings.
     *
     * **Note:** For non-cartesian series, the only supported panning type
     * is `xy`, as zooming in a single direction is not applicable due to
     * the radial nature of the coordinate system.
     *
     * @sample {highcharts} highcharts/chart/panning-type
     *         Zooming and xy panning
     *
     * @declare    Highcharts.OptionsChartPanningTypeValue
     * @type       {string}
     * @validvalue ["x", "y", "xy"]
     * @product    highcharts highstock gantt
     */
    type: "x"
  },
  /**
   * Equivalent to [zoomType](#chart.zoomType), but for multitouch
   * gestures only. By default, the `pinchType` is the same as the
   * `zoomType` setting. However, pinching can be enabled separately in
   * some cases, for example in stock charts where a mouse drag pans the
   * chart, while pinching is enabled. When [tooltip.followTouchMove](
   * #tooltip.followTouchMove) is true, pinchType only applies to
   * two-finger touches.
   *
   * @type       {string}
   * @default    {highcharts} undefined
   * @default    {highstock} undefined
   * @since      3.0
   * @product    highcharts highstock gantt
   * @deprecated
   * @validvalue ["x", "y", "xy"]
   * @apioption  chart.pinchType
   */
  /**
   * Whether to apply styled mode. When in styled mode, no presentational
   * attributes or CSS are applied to the chart SVG. Instead, CSS rules
   * are required to style the chart. The default style sheet is
   * available from `https://code.highcharts.com/css/highcharts.css`.
   *
   * [Read more in the docs](https://www.highcharts.com/docs/chart-design-and-style/style-by-css)
   * on what classes and variables are available.
   *
   * @sample highcharts/css/colors
   *         Color theming with CSS
   * @sample highcharts/css/prefers-color-scheme
   *         Dynamic theme based on system settings
   * @type       {boolean}
   * @default    false
   * @since      7.0
   * @apioption  chart.styledMode
   */
  styledMode: !1,
  /**
   * The corner radius of the outer chart border.
   *
   * @sample {highcharts} highcharts/chart/borderradius/
   *         20px radius
   * @sample {highstock} stock/chart/border/
   *         10px radius
   * @sample {highmaps} maps/chart/border/
   *         Border options
   *
   */
  borderRadius: 0,
  /**
   * In styled mode, this sets how many colors the class names
   * should rotate between. With ten colors, series (or points) are
   * given class names like `highcharts-color-0`, `highcharts-color-1`
   * [...] `highcharts-color-9`. The equivalent in non-styled mode
   * is to set colors using the [colors](#colors) setting.
   *
   * @since      5.0.0
   */
  colorCount: 10,
  /**
   * By default, (because of memory and performance reasons) the chart does
   * not copy the data but keeps it as a reference. In some cases, this might
   * result in mutating the original data source. In order to prevent that,
   * set that property to false. Please note that changing that might decrease
   * performance, especially with bigger sets of data.
   *
   * @type       {boolean}
   * @since 10.1.0
   */
  allowMutatingData: !0,
  /**
   * If true, the axes will scale to the remaining visible series once
   * one series is hidden. If false, hiding and showing a series will
   * not affect the axes or the other series. For stacks, once one series
   * within the stack is hidden, the rest of the stack will close in
   * around it even if the axis is not affected.
   *
   * @sample {highcharts} highcharts/chart/ignorehiddenseries-true/
   *         True by default
   * @sample {highcharts} highcharts/chart/ignorehiddenseries-false/
   *         False
   * @sample {highcharts} highcharts/chart/ignorehiddenseries-true-stacked/
   *         True with stack
   * @sample {highstock} stock/chart/ignorehiddenseries-true/
   *         True by default
   * @sample {highstock} stock/chart/ignorehiddenseries-false/
   *         False
   *
   * @since   1.2.0
   * @product highcharts highstock gantt
   */
  ignoreHiddenSeries: !0,
  /**
   * Whether to invert the axes so that the x axis is vertical and y axis
   * is horizontal. When `true`, the x axis is [reversed](#xAxis.reversed)
   * by default.
   *
   * @productdesc {highcharts}
   * If a bar series is present in the chart, it will be inverted
   * automatically. Inverting the chart doesn't have an effect if there
   * are no cartesian series in the chart.
   *
   * @sample {highcharts} highcharts/chart/inverted/
   *         Inverted line
   * @sample {highstock} stock/navigator/inverted/
   *         Inverted stock chart
   *
   * @type      {boolean}
   * @default   false
   * @product   highcharts highstock gantt
   * @apioption chart.inverted
   */
  /**
   * The distance between the outer edge of the chart and the content,
   * like title or legend, or axis title and labels if present. The
   * numbers in the array designate top, right, bottom and left
   * respectively. Use the options spacingTop, spacingRight, spacingBottom
   * and spacingLeft options for shorthand setting of one option.
   *
   * @type    {Array<number>}
   * @see     [chart.margin](#chart.margin)
   * @default [10, 10, 15, 10]
   * @since   3.0.6
   */
  spacing: [10, 10, 15, 10],
  /**
   * The button that appears after a selection zoom, allowing the user
   * to reset zoom. This option is deprecated in favor of
   * [zooming](#chart.zooming).
   *
   * @since      2.2
   * @deprecated 10.2.1
   */
  resetZoomButton: {
    /**
     * What frame the button placement should be related to. Can be
     * either `plotBox` or `spacingBox`.
     *
     * @sample {highcharts} highcharts/chart/resetzoombutton-relativeto/
     *         Relative to the chart
     * @sample {highstock} highcharts/chart/resetzoombutton-relativeto/
     *         Relative to the chart
     *
     * @type      {Highcharts.ButtonRelativeToValue}
     * @apioption chart.resetZoomButton.relativeTo
     */
    /**
     * A collection of attributes for the button. The object takes SVG
     * attributes like `fill`, `stroke`, `stroke-width` or `r`, the
     * border radius. The theme also supports `style`, a collection of
     * CSS properties for the text. Equivalent attributes for the hover
     * state are given in `theme.states.hover`.
     *
     * @sample {highcharts} highcharts/chart/resetzoombutton-theme/
     *         Theming the button
     * @sample {highstock} highcharts/chart/resetzoombutton-theme/
     *         Theming the button
     *
     * @type {Highcharts.SVGAttributes}
     */
    theme: {
      /**
       * The z-index of the button.
       *
       * @type {number}
       * @apioption chart.resetZoomButton.theme.zIndex
       */
    },
    /**
     * The position of the button.
     *
     * @sample {highcharts} highcharts/chart/resetzoombutton-position/
     *         Above the plot area
     * @sample {highstock} highcharts/chart/resetzoombutton-position/
     *         Above the plot area
     * @sample {highmaps} highcharts/chart/resetzoombutton-position/
     *         Above the plot area
     *
     * @type {Highcharts.AlignObject}
     */
    position: {
      /**
       * The horizontal alignment of the button.
       *
       * @type {number}
       * @apioption chart.resetZoomButton.position.align
       */
      /**
       * The horizontal offset of the button.
       *
       * @type {number}
       * @apioption chart.resetZoomButton.position.x
       */
      /**
       * The vertical alignment of the button.
       *
       * @type      {Highcharts.VerticalAlignValue}
       * @apioption chart.resetZoomButton.position.verticalAlign
       */
      /**
       * The vertical offset of the button.
       *
       * @type {number}
       * @apioption chart.resetZoomButton.position.y
       */
    }
  },
  /**
   * The pixel width of the plot area border.
   *
   * @sample {highcharts} highcharts/chart/plotborderwidth/
   *         1px border
   * @sample {highstock} stock/chart/plotborder/
   *         2px border
   * @sample {highmaps} maps/chart/plotborder/
   *         Plot border options
   *
   * @type      {number}
   * @default   0
   * @apioption chart.plotBorderWidth
   */
  /**
   * Whether to apply a drop shadow to the plot area. Requires that
   * plotBackgroundColor be set. The shadow can be an object configuration
   * containing `color`, `offsetX`, `offsetY`, `opacity` and `width`.
   *
   * @sample {highcharts} highcharts/chart/plotshadow/
   *         Plot shadow
   * @sample {highstock} stock/chart/plotshadow/
   *         Plot shadow
   * @sample {highmaps} maps/chart/plotborder/
   *         Plot border options
   *
   * @type      {boolean|Highcharts.ShadowOptionsObject}
   * @default   false
   * @apioption chart.plotShadow
   */
  /**
   * When true, cartesian charts like line, spline, area and column are
   * transformed into the polar coordinate system. This produces _polar
   * charts_, also known as _radar charts_.
   *
   * @sample {highcharts} highcharts/demo/polar/
   *         Polar chart
   * @sample {highcharts} highcharts/demo/polar-wind-rose/
   *         Wind rose, stacked polar column chart
   * @sample {highcharts} highcharts/demo/polar-spider/
   *         Spider web chart
   * @sample {highcharts} highcharts/parallel-coordinates/polar/
   *         Star plot, multivariate data in a polar chart
   *
   * @type      {boolean}
   * @default   false
   * @since     2.3.0
   * @product   highcharts
   * @requires  highcharts-more
   * @apioption chart.polar
   */
  /**
   * Whether to reflow the chart to fit the width of the container div
   * on resizing the window.
   *
   * @sample {highcharts} highcharts/chart/reflow-true/
   *         True by default
   * @sample {highcharts} highcharts/chart/reflow-false/
   *         False
   * @sample {highstock} stock/chart/reflow-true/
   *         True by default
   * @sample {highstock} stock/chart/reflow-false/
   *         False
   * @sample {highmaps} maps/chart/reflow-true/
   *         True by default
   * @sample {highmaps} maps/chart/reflow-false/
   *         False
   *
   * @since     2.1
   */
  reflow: !0,
  /**
   * The HTML element where the chart will be rendered. If it is a string,
   * the element by that id is used. The HTML element can also be passed
   * by direct reference, or as the first argument of the chart
   * constructor, in which case the option is not needed.
   *
   * @sample {highcharts} highcharts/chart/reflow-true/
   *         String
   * @sample {highcharts} highcharts/chart/renderto-object/
   *         Object reference
   * @sample {highstock} stock/chart/renderto-string/
   *         String
   * @sample {highstock} stock/chart/renderto-object/
   *         Object reference
   *
   * @type      {string|Highcharts.HTMLDOMElement}
   * @apioption chart.renderTo
   */
  /**
   * The background color of the marker square when selecting (zooming
   * in on) an area of the chart.
   *
   * @see In styled mode, the selection marker fill is set with the
   *      `.highcharts-selection-marker` class.
   *
   * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
   * @default   rgba(51,92,173,0.25)
   * @since     2.1.7
   * @apioption chart.selectionMarkerFill
   */
  /**
   * Whether to apply a drop shadow to the global series group. This causes
   * all the series to have the same shadow. Contrary to the `series.shadow`
   * option, this prevents items from casting shadows on each other, like for
   * others series in a stack. The shadow can be an object configuration
   * containing `color`, `offsetX`, `offsetY`, `opacity` and `width`.
   *
   * @sample highcharts/chart/seriesgroupshadow/
   *         Shadow
   *
   * @type      {boolean|Highcharts.ShadowOptionsObject}
   * @default   false
   * @apioption chart.seriesGroupShadow
   */
  /**
   * Whether to apply a drop shadow to the outer chart area. Requires
   * that backgroundColor be set. The shadow can be an object
   * configuration containing `color`, `offsetX`, `offsetY`, `opacity` and
   * `width`.
   *
   * @sample {highcharts} highcharts/chart/shadow/
   *         Shadow
   * @sample {highstock} stock/chart/shadow/
   *         Shadow
   * @sample {highmaps} maps/chart/border/
   *         Chart border and shadow
   *
   * @type      {boolean|Highcharts.ShadowOptionsObject}
   * @default   false
   * @apioption chart.shadow
   */
  /**
   * Whether to show the axes initially. This only applies to empty charts
   * where series are added dynamically, as axes are automatically added
   * to cartesian series.
   *
   * @sample {highcharts} highcharts/chart/showaxes-false/
   *         False by default
   * @sample {highcharts} highcharts/chart/showaxes-true/
   *         True
   *
   * @type      {boolean}
   * @since     1.2.5
   * @product   highcharts gantt
   * @apioption chart.showAxes
   */
  /**
   * The space between the bottom edge of the chart and the content (plot
   * area, axis title and labels, title, subtitle or legend in top
   * position).
   *
   * @sample {highcharts} highcharts/chart/spacingbottom/
   *         Spacing bottom set to 100
   * @sample {highstock} stock/chart/spacingbottom/
   *         Spacing bottom set to 100
   * @sample {highmaps} maps/chart/spacing/
   *         Spacing 100 all around
   *
   * @type      {number}
   * @default   15
   * @since     2.1
   * @apioption chart.spacingBottom
   */
  /**
   * The space between the left edge of the chart and the content (plot
   * area, axis title and labels, title, subtitle or legend in top
   * position).
   *
   * @sample {highcharts} highcharts/chart/spacingleft/
   *         Spacing left set to 100
   * @sample {highstock} stock/chart/spacingleft/
   *         Spacing left set to 100
   * @sample {highmaps} maps/chart/spacing/
   *         Spacing 100 all around
   *
   * @type      {number}
   * @default   10
   * @since     2.1
   * @apioption chart.spacingLeft
   */
  /**
   * The space between the right edge of the chart and the content (plot
   * area, axis title and labels, title, subtitle or legend in top
   * position).
   *
   * @sample {highcharts} highcharts/chart/spacingright-100/
   *         Spacing set to 100
   * @sample {highcharts} highcharts/chart/spacingright-legend/
   *         Legend in right position with default spacing
   * @sample {highstock} stock/chart/spacingright/
   *         Spacing set to 100
   * @sample {highmaps} maps/chart/spacing/
   *         Spacing 100 all around
   *
   * @type      {number}
   * @default   10
   * @since     2.1
   * @apioption chart.spacingRight
   */
  /**
   * The space between the top edge of the chart and the content (plot
   * area, axis title and labels, title, subtitle or legend in top
   * position).
   *
   * @sample {highcharts} highcharts/chart/spacingtop-100/
   *         A top spacing of 100
   * @sample {highcharts} highcharts/chart/spacingtop-10/
   *         Floating chart title makes the plot area align to the default
   *         spacingTop of 10.
   * @sample {highstock} stock/chart/spacingtop/
   *         A top spacing of 100
   * @sample {highmaps} maps/chart/spacing/
   *         Spacing 100 all around
   *
   * @type      {number}
   * @default   10
   * @since     2.1
   * @apioption chart.spacingTop
   */
  /**
   * Additional CSS styles to apply inline to the container `div` and the root
   * SVG.
   *
   * According to the CSS syntax documentation, it is recommended to quote
   * font family names that contain white space, digits, or punctuation
   * characters other than hyphens. In such cases, wrap the fontFamily
   * name as follows: `fontFamily: '"Font name"'`.
   *
   * Since v11, the root font size is 1rem by default, and all child element
   * are given a relative `em` font size by default. This allows implementers
   * to control all the chart's font sizes by only setting the root level.
   *
   * @see    In styled mode, general chart styles can be set with the
   *         `.highcharts-root` class.
   * @sample {highcharts} highcharts/chart/style-serif-font/
   *         Using a serif type font
   * @sample {highcharts} highcharts/chart/style-special-font/
   *         Using a font with special character in name
   * @sample {highcharts} highcharts/members/relative-font-size/
   *         Relative font sizes
   * @sample {highcharts} highcharts/css/em/
   *         Styled mode with relative font sizes
   * @sample {highstock} stock/chart/style/
   *         Using a serif type font
   * @sample {highmaps} maps/chart/style-serif-font/
   *         Using a serif type font
   *
   * @type      {Highcharts.CSSObject}
   * @default   {"fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif", "fontSize":"1rem"}
   * @apioption chart.style
   */
  /**
   * The default series type for the chart. Can be any of the chart types
   * listed under [plotOptions](#plotOptions) and [series](#series) or can
   * be a series provided by an additional module.
   *
   * In TypeScript this option has no effect in sense of typing and
   * instead the `type` option must always be set in the series.
   *
   * @sample {highcharts} highcharts/chart/type-bar/
   *         Bar
   * @sample {highstock} stock/chart/type/
   *         Areaspline
   * @sample {highmaps} maps/chart/type-mapline/
   *         Mapline
   *
   * @type       {string}
   * @default    {highcharts} line
   * @default    {highstock} line
   * @default    {highmaps} map
   * @since      2.1.0
   * @apioption  chart.type
   */
  type: "line",
  /**
   * Decides in what dimensions the user can zoom by dragging the mouse.
   * Can be one of `x`, `y` or `xy`.
   *
   * @see [panKey](#chart.panKey)
   *
   * @sample {highcharts} highcharts/chart/zoomtype-none/
   *         None by default
   * @sample {highcharts} highcharts/chart/zoomtype-x/
   *         X
   * @sample {highcharts} highcharts/chart/zoomtype-y/
   *         Y
   * @sample {highcharts} highcharts/chart/zoomtype-xy/
   *         Xy
   * @sample {highcharts} highcharts/chart/zoomtype-polar/
   *         Zoom on polar chart
   * @sample {highstock} stock/demo/basic-line/
   *         None by default
   * @sample {highstock} stock/chart/zoomtype-x/
   *         X
   * @sample {highstock} stock/chart/zoomtype-y/
   *         Y
   * @sample {highstock} stock/chart/zoomtype-xy/
   *         Xy
   * @sample {highmaps} maps/chart/zoomtype-xy/
   *         Map with selection zoom
   *
   * @type       {string}
   * @validvalue ["x", "y", "xy"]
   * @deprecated
   * @apioption  chart.zoomType
   */
  /**
   * Enables zooming by a single touch, in combination with
   * [chart.zoomType](#chart.zoomType). When enabled, two-finger pinch
   * will still work as set up by [chart.pinchType](#chart.pinchType).
   * However, `zoomBySingleTouch` will interfere with touch-dragging the
   * chart to read the tooltip. And especially when vertical zooming is
   * enabled, it will make it hard to scroll vertically on the page.
   * @since      9.0.0
   * @sample     highcharts/chart/zoombysingletouch
   *             Zoom by single touch enabled, with buttons to toggle
   * @product    highcharts highstock gantt
   * @deprecated
   */
  /**
   * Chart zooming options.
   * @since 10.2.1
   *
   * @sample     highcharts/plotoptions/sankey-node-color
   *             Zooming in sankey series
   * @sample     highcharts/series-treegraph/link-types
   *             Zooming in treegraph series
   */
  zooming: {
    /**
     * Equivalent to [type](#chart.zooming.type), but for multitouch
     * gestures only. By default, the `pinchType` is the same as the
     * `type` setting. However, pinching can be enabled separately in
     * some cases, for example in stock charts where a mouse drag pans the
     * chart, while pinching is enabled. When [tooltip.followTouchMove](
     * #tooltip.followTouchMove) is true, pinchType only applies to
     * two-finger touches.
     *
     * @type       {string}
     * @default    {highcharts} undefined
     * @default    {highstock} x
     * @product    highcharts highstock gantt
     * @validvalue ["x", "y", "xy"]
     * @apioption  chart.zooming.pinchType
     */
    /**
     * Decides in what dimensions the user can zoom by dragging the mouse.
     * Can be one of `x`, `y` or `xy`.
     *
     * **Note:** For non-cartesian series, the only supported zooming type
     * is `xy`, as zooming in a single direction is not applicable due to
     * the radial nature of the coordinate system.
     *
     * @declare    Highcharts.OptionsChartZoomingTypeValue
     * @type       {string}
     * @default    {highcharts} undefined
     * @product    highcharts highstock gantt
     * @validvalue ["x", "y", "xy"]
     * @apioption  chart.zooming.type
     */
    /**
     * Set a key to hold when dragging to zoom the chart. This is useful to
     * avoid zooming while moving points. Should be set different than
     * [chart.panKey](#chart.panKey).
     *
     * @type       {string}
     * @default    {highcharts} undefined
     * @validvalue ["alt", "ctrl", "meta", "shift"]
     * @requires   modules/draggable-points
     * @apioption  chart.zooming.key
     */
    /**
     * Enables zooming by a single touch, in combination with
     * [chart.zooming.type](#chart.zooming.type). When enabled, two-finger
     * pinch will still work as set up by [chart.zooming.pinchType]
     * (#chart.zooming.pinchType). However, `singleTouch` will interfere
     * with touch-dragging the chart to read the tooltip. And especially
     * when vertical zooming is enabled, it will make it hard to scroll
     * vertically on the page.
     *
     * @sample  highcharts/chart/zoombysingletouch
     *          Zoom by single touch enabled, with buttons to toggle
     *
     * @product highcharts highstock gantt
     */
    singleTouch: !1,
    /**
     * The button that appears after a selection zoom, allowing the user
     * to reset zoom.
     */
    resetButton: {
      /**
       * What frame the button placement should be related to. Can be
       * either `plotBox` or `spacingBox`.
       *
       * @sample {highcharts} highcharts/chart/resetzoombutton-relativeto/
       *         Relative to the chart
       * @sample {highstock} highcharts/chart/resetzoombutton-relativeto/
       *         Relative to the chart
       *
       * @type      {Highcharts.ButtonRelativeToValue}
       * @default   plot
       * @apioption chart.zooming.resetButton.relativeTo
       */
      /**
       * A collection of attributes for the button. The object takes SVG
       * attributes like `fill`, `stroke`, `stroke-width` or `r`, the
       * border radius. The theme also supports `style`, a collection of
       * CSS properties for the text. Equivalent attributes for the hover
       * state are given in `theme.states.hover`.
       *
       * @sample {highcharts} highcharts/chart/resetzoombutton-theme/
       *         Theming the button
       * @sample {highstock} highcharts/chart/resetzoombutton-theme/
       *         Theming the button
       *
       * @type  {Highcharts.SVGAttributes}
       * @since 10.2.1
       */
      theme: {
        /** @internal */
        zIndex: 6
      },
      /**
       * The position of the button.
       *
       * Note: Adjusting position values might cause overlap with chart
       * elements. Ensure coordinates do not obstruct other components or
       * data visibility.
       *
       * @sample {highcharts} highcharts/chart/resetzoombutton-position/
       *         Above the plot area
       * @sample {highstock} highcharts/chart/resetzoombutton-position/
       *         Above the plot area
       * @sample {highmaps} highcharts/chart/resetzoombutton-position/
       *         Above the plot area
       *
       * @type  {Highcharts.AlignObject}
       * @since 10.2.1
       */
      position: {
        /**
         * The horizontal alignment of the button.
         */
        align: "right",
        /**
         * The horizontal offset of the button.
         */
        x: -10,
        /**
         * The vertical alignment of the button.
         *
         * @type       {Highcharts.VerticalAlignValue}
         * @default    top
         * @apioption  chart.zooming.resetButton.position.verticalAlign
         */
        /**
         * The vertical offset of the button.
         */
        y: 10
      }
    }
  },
  /**
   * An explicit width for the chart. By default (when `null`) the width
   * is calculated from the offset width of the containing element.
   *
   * @sample {highcharts} highcharts/chart/width/
   *         800px wide
   * @sample {highstock} stock/chart/width/
   *         800px wide
   * @sample {highmaps} maps/chart/size/
   *         Chart with explicit size
   *
   * @type {null|number|string}
   */
  width: null,
  /**
   * An explicit height for the chart. If a _number_, the height is
   * given in pixels. If given a _percentage string_ (for example
   * `'56%'`), the height is given as the percentage of the actual chart
   * width. This allows for preserving the aspect ratio across responsive
   * sizes.
   *
   * By default (when `null`) the height is calculated from the offset
   * height of the containing element, or 400 pixels if the containing
   * element's height is 0.
   *
   * @sample {highcharts} highcharts/chart/height/
   *         Forced 200px height
   * @sample {highstock} stock/chart/height/
   *         300px height
   * @sample {highmaps} maps/chart/size/
   *         Chart with explicit size
   * @sample highcharts/chart/height-percent/
   *         Highcharts with percentage height
   * @sample highcharts/chart/height-inherited/
   *         Chart with inherited height
   *
   * @type {null|number|string}
   */
  height: null,
  /**
   * The color of the outer chart border.
   *
   * @see In styled mode, the stroke is set with the
   *      `.highcharts-background` class.
   *
   * @sample {highcharts} highcharts/chart/bordercolor/
   *         Brown border
   * @sample {highstock} stock/chart/border/
   *         Brown border
   * @sample {highmaps} maps/chart/border/
   *         Border options
   *
   * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
   */
  borderColor: "#334eff",
  /**
   * The pixel width of the outer chart border.
   *
   * @see In styled mode, the stroke is set with the
   *      `.highcharts-background` class.
   *
   * @sample {highcharts} highcharts/chart/borderwidth/
   *         5px border
   * @sample {highstock} stock/chart/border/
   *         2px border
   * @sample {highmaps} maps/chart/border/
   *         Border options
   *
   * @type      {number}
   * @default   0
   * @apioption chart.borderWidth
   */
  /**
   * The background color or gradient for the outer chart area.
   *
   * @see In styled mode, the background is set with the
   *      `.highcharts-background` class.
   *
   * @sample {highcharts} highcharts/chart/backgroundcolor-color/
   *         Color
   * @sample {highcharts} highcharts/chart/backgroundcolor-gradient/
   *         Gradient
   * @sample {highstock} stock/chart/backgroundcolor-color/
   *         Color
   * @sample {highstock} stock/chart/backgroundcolor-gradient/
   *         Gradient
   * @sample {highmaps} maps/chart/backgroundcolor-color/
   *         Color
   * @sample {highmaps} maps/chart/backgroundcolor-gradient/
   *         Gradient
   *
   * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
   */
  backgroundColor: "#ffffff",
  /**
   * The background color or gradient for the plot area.
   *
   * @see In styled mode, the plot background is set with the
   *      `.highcharts-plot-background` class.
   *
   * @sample {highcharts} highcharts/chart/plotbackgroundcolor-color/
   *         Color
   * @sample {highcharts} highcharts/chart/plotbackgroundcolor-gradient/
   *         Gradient
   * @sample {highstock} stock/chart/plotbackgroundcolor-color/
   *         Color
   * @sample {highstock} stock/chart/plotbackgroundcolor-gradient/
   *         Gradient
   * @sample {highmaps} maps/chart/plotbackgroundcolor-color/
   *         Color
   * @sample {highmaps} maps/chart/plotbackgroundcolor-gradient/
   *         Gradient
   *
   * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
   * @apioption chart.plotBackgroundColor
   */
  /**
   * The URL for an image to use as the plot background. To set an image
   * as the background for the entire chart, set a CSS background image
   * to the container element. Note that for the image to be applied to
   * exported charts, its URL needs to be accessible by the export server.
   *
   * @see In styled mode, a plot background image can be set with the
   *      `.highcharts-plot-background` class and a [custom pattern](
   *      https://www.highcharts.com/docs/chart-design-and-style/gradients-shadows-and-patterns).
   *
   * @sample {highcharts} highcharts/chart/plotbackgroundimage/
   *         Skies
   * @sample {highstock} stock/chart/plotbackgroundimage/
   *         Skies
   *
   * @type      {string}
   * @apioption chart.plotBackgroundImage
   */
  /**
   * The color of the inner chart or plot area border.
   *
   * @see In styled mode, a plot border stroke can be set with the
   *      `.highcharts-plot-border` class.
   *
   * @sample {highcharts} highcharts/chart/plotbordercolor/
   *         Blue border
   * @sample {highstock} stock/chart/plotborder/
   *         Blue border
   * @sample {highmaps} maps/chart/plotborder/
   *         Plot border options
   *
   * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
   */
  plotBorderColor: "#cccccc"
  /* Palette.neutralColor20 */
}, Ln = {
  /**
   * Colors for data series and points
   */
  colors: [
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
  ]
}, { pageLang: Pn, win: je } = N, { defined: ns, error: os, extend: qe, isNumber: as, isObject: Ze, isString: Yt, merge: En, objectEach: Dn, pad: ut, splat: $n, timeUnits: _e, ucfirst: In } = W, Bn = N.isSafari && je.Intl && !je.Intl.DateTimeFormat.prototype.formatRange, Nn = (c) => c.main === void 0;
class Rn {
  /* *
   *
   *  Constructors
   *
   * */
  constructor(t, e) {
    this.options = {
      timezone: "UTC"
    }, this.variableTimezone = !1, this.Date = je.Date, this.update(t), this.lang = e;
  }
  /* *
   *
   *  Functions
   *
   * */
  /**
   * Update the Time object with current options. It is called internally on
   * initializing Highcharts, after running `Highcharts.setOptions` and on
   * `Chart.update`.
   *
   * @private
   * @function Highcharts.Time#update
   *
   * @param {Highcharts.TimeOptions} [options]
   *
   */
  update(t = {}) {
    this.dTLCache = {}, this.options = t = En(!0, this.options, t);
    const { timezoneOffset: e, useUTC: i, locale: s } = t;
    this.Date = t.Date || je.Date || Date;
    let r = t.timezone;
    ns(i) && (r = i ? "UTC" : void 0), e && e % 60 === 0 && (r = "Etc/GMT" + (e > 0 ? "+" : "") + e / 60), this.variableTimezone = r !== "UTC" && r?.indexOf("Etc/GMT") !== 0, this.timezone = r, this.lang && s && (this.lang.locale = s), ["months", "shortMonths", "weekdays", "shortWeekdays"].forEach((n) => {
      const o = /months/i.test(n), a = /short/.test(n), l = {
        timeZone: "UTC"
      };
      l[o ? "month" : "weekday"] = a ? "short" : "long", this[n] = (o ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : [3, 4, 5, 6, 7, 8, 9]).map((h) => this.dateFormat(l, (o ? 31 : 1) * 24 * 36e5 * h));
    });
  }
  /**
   * Get a date in terms of numbers (year, month, day etc) for further
   * processing. Takes the current `timezone` setting into account. Inverse of
   * `makeTime` and the native `Date` constructor and `Date.UTC`.
   *
   * The date is returned in array format with the following indices:
   *
   * 0: year,
   * 1: month (zero based),
   * 2: day,
   * 3: hours,
   * 4: minutes,
   * 5: seconds,
   * 6: milliseconds,
   * 7: weekday (Sunday as 0)
   *
   * @function Highcharts.Time#toParts
   *
   * @param {number|Date} [timestamp]
   *                 The timestamp in milliseconds since January 1st 1970.
   *                 A Date object is also accepted.
   *
   * @return {Array<number>} The date parts in array format.
   */
  toParts(t) {
    const [e, i, s, r, n, o, a] = this.dateTimeFormat({
      weekday: "narrow",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    }, t, "es").split(/(?:, | |\/|:)/g);
    return [
      r,
      +s - 1,
      i,
      n,
      o,
      a,
      // Milliseconds
      Math.floor(Number(t) || 0) % 1e3,
      // Spanish weekday index
      "DLMXJVS".indexOf(e)
    ].map(Number);
  }
  /**
   * Shorthand to get a cached `Intl.DateTimeFormat` instance.
   */
  dateTimeFormat(t, e, i = this.options.locale || Pn) {
    const s = JSON.stringify(t) + i;
    Yt(t) && (t = this.str2dtf(t));
    let r = this.dTLCache[s];
    if (!r) {
      t.timeZone ?? (t.timeZone = this.timezone);
      try {
        r = new Intl.DateTimeFormat(i, t);
      } catch (n) {
        /Invalid time zone/i.test(n.message) ? (os(34), t.timeZone = "UTC", r = new Intl.DateTimeFormat(i, t)) : os(n.message, !1);
      }
    }
    return this.dTLCache[s] = r, r?.format(e) || "";
  }
  /**
   * Take a locale-aware string format and return a full DateTimeFormat in
   * object form.
   */
  str2dtf(t, e = {}) {
    const i = {
      L: { fractionalSecondDigits: 3 },
      S: { second: "2-digit" },
      M: { minute: "numeric" },
      H: { hour: "2-digit" },
      k: { hour: "numeric" },
      E: { weekday: "narrow" },
      a: { weekday: "short" },
      A: { weekday: "long" },
      d: { day: "2-digit" },
      e: { day: "numeric" },
      b: { month: "short" },
      B: { month: "long" },
      m: { month: "2-digit" },
      o: { month: "numeric" },
      y: { year: "2-digit" },
      Y: { year: "numeric" }
    };
    return Object.keys(i).forEach((s) => {
      t.indexOf(s) !== -1 && qe(e, i[s]);
    }), e;
  }
  /**
   * Make a time and returns milliseconds. Similar to `Date.UTC`, but takes
   * the current `timezone` setting into account.
   *
   * @function Highcharts.Time#makeTime
   *
   * @param {number} year
   *        The year
   *
   * @param {number} month
   *        The month. Zero-based, so January is 0.
   *
   * @param {number} [date=1]
   *        The day of the month
   *
   * @param {number} [hours=0]
   *        The hour of the day, 0-23.
   *
   * @param {number} [minutes=0]
   *        The minutes
   *
   * @param {number} [seconds=0]
   *        The seconds
   *
   * @return {number}
   *         The time in milliseconds since January 1st 1970.
   */
  makeTime(t, e, i = 1, s = 0, r, n, o) {
    let a = this.Date.UTC(t, e, i, s, r || 0, n || 0, o || 0);
    if (this.timezone !== "UTC") {
      const l = this.getTimezoneOffset(a);
      if (a += l, // Optimize for speed by limiting the number of calls to
      // `getTimezoneOffset`. According to
      // https://en.wikipedia.org/wiki/Daylight_saving_time_by_country,
      // DST change may only occur in these months.
      [2, 3, 8, 9, 10, 11].indexOf(e) !== -1 && // DST transitions occur only in the night-time
      (s < 5 || s > 20)) {
        const h = this.getTimezoneOffset(a);
        l !== h ? a += h - l : l - 36e5 === this.getTimezoneOffset(a - 36e5) && !Bn && (a -= 36e5);
      }
    }
    return a;
  }
  /**
   * Parse a datetime string. Unless the string contains time zone
   * information, apply the current `timezone` from options. If the argument
   * is a number, return it.
   *
   * @function Highcharts.Time#parse
   * @param    {string|number|undefined} s The datetime string to parse
   * @return   {number|undefined}          Parsed JavaScript timestamp
   */
  parse(t) {
    if (!Yt(t))
      return t ?? void 0;
    t = t.replace(/\//g, "-").replace(/(GMT|UTC)/, "");
    const e = t.indexOf("Z") > -1 || /([+-][0-9]{2}):?[0-9]{2}$/.test(t), i = /^[0-9]{4}-[0-9]{2}(-[0-9]{2}|)$/.test(t);
    !e && !i && (t += "Z");
    const s = Date.parse(t);
    if (as(s))
      return s + (!e || i ? this.getTimezoneOffset(s) : 0);
  }
  /**
   * Get the time zone offset based on the current timezone information as
   * set in the global options.
   *
   * @function Highcharts.Time#getTimezoneOffset
   *
   * @param {number} timestamp
   *        The JavaScript timestamp to inspect.
   *
   * @return {number}
   *         The timezone offset in minutes compared to UTC.
   */
  getTimezoneOffset(t) {
    if (this.timezone !== "UTC") {
      const [e, i, s, r, n = 0] = this.dateTimeFormat({ timeZoneName: "shortOffset" }, t, "en").split(/(GMT|:)/).map(Number), o = -(s + n / 60) * 60 * 6e4;
      if (as(o))
        return o;
    }
    return 0;
  }
  /**
   * Formats a JavaScript date timestamp (milliseconds since January 1 1970)
   * into a human readable date string.
   *
   * The `format` parameter accepts two types of values:
   * - An object containing settings that are passed directly on to
   *   [Intl.DateTimeFormat.prototype.format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format).
   * - A format string containing either individual or locale-aware format
   *   keys. **Individual keys**, for example `%Y-%m-%d`, are listed below.
   *   **Locale-aware keys** are grouped by square brackets, for example
   *   `%[Ymd]`. The order of keys within the square bracket doesn't affect
   *   the output, which is determined by the locale. See example below.
   *   Internally, the locale-aware format keys are just a shorthand for the
   *   full object formats, but are particularly practical in
   *   [templating](https://www.highcharts.com/docs/chart-concepts/templating)
   *   where full object definitions are not an option.
   *
   * The available string format keys are listed below. Additional formats can
   * be given in the {@link Highcharts.dateFormats} hook.
   *
   * Supported format keys:
   * | Key  | Description                     | Notes on locale-aware format |
   * -------|----------------------------------------------|-------|
   * | `%A` | Long weekday, like 'Monday'                  |       |
   * | `%a` | Short weekday, like 'Mon'                    |       |
   * | `%E` | Narrow weekday, single character             |       |
   * | `%d` | Two digit day of the month, 01 to 31         |       |
   * | `%e` | Day of the month, 1 through 31               |       |
   * | `%w` | Day of the week, 0 through 6                 | N/A   |
   * | `%v` | The prefix "week from", read from `lang.weekFrom` | N/A |
   * | `%b` | Short month, like 'Jan'                      |       |
   * | `%B` | Long month, like 'January'                   |       |
   * | `%m` | Two digit month number, 01 through 12        |       |
   * | `%o` | Month number, 1 through 12                   |       |
   * | `%y` | Two digits year, like 24 for 2024            |       |
   * | `%Y` | Four digits year, like 2024                  |       |
   * | `%H` | Two digits hours in 24h format, 00 through 23 | Depending on the locale, 12h format may be instered. |
   * | `%k` | Hours in 24h format, 0 through 23            | Depending on the locale, 12h format may be instered. |
   * | `%I` | Two digits hours in 12h format, 00 through 11 | N/A. The locale determines the hour format. |
   * | `%l` | Hours in 12h format, 1 through 12            | N/A. The locale determines the hour format. |
   * | `%M` | Two digits minutes, 00 through 59            |       |
   * | `%p` | Upper case AM or PM                          | N/A. The locale determines whether to add AM and PM. |
   * | `%P` | Lower case AM or PM                          | N/A. The locale determines whether to add AM and PM. |
   * | `%S` | Two digits seconds, 00 through 59            |       |
   * | `%L` | Milliseconds (naming from Ruby)              |       |
   *
   * @example
   * // Object format, US English
   * const time1 = new Highcharts.Time({ locale: 'en-US' });
   * console.log(
   *     time1.dateFormat({
   *         day: 'numeric',
   *         month: 'short',
   *         year: 'numeric',
   *         hour: 'numeric',
   *         minute: 'numeric'
   *     }, Date.UTC(2024, 11, 31))
   * ); // => Dec 31, 2024, 12:00 AM
   *
   * // Object format, British English
   * const time2 = new Highcharts.Time({ locale: 'en-GB' });
   * console.log(
   *     time2.dateFormat({
   *         day: 'numeric',
   *         month: 'short',
   *         year: 'numeric',
   *         hour: 'numeric',
   *         minute: 'numeric'
   *     }, Date.UTC(2024, 11, 31))
   * ); // => 31 Dec 2024, 00:00
   *
   * // Individual key string replacement
   * const time3 = new Highcharts.Time();
   * console.log(
   *     time3.dateFormat('%Y-%m-%d %H:%M:%S', Date.UTC(2024, 11, 31))
   * ); // => 2024-12-31 00:00:00
   *
   * // Locale-aware keys, US English
   * const time4 = new Highcharts.Time({ locale: 'en-US' });
   * console.log(
   *     time4.dateFormat('%[YebHM]', Date.UTC(2024, 11, 31))
   * ); // => Dec 31, 2024, 12:00 AM
   *
   * // Locale-aware keys, British English
   * const time5 = new Highcharts.Time({ locale: 'en-GB' });
   * console.log(
   *     time5.dateFormat('%[YebHM]', Date.UTC(2024, 11, 31))
   * ); // => 31 Dec 2024, 00:00
   *
   * // Mixed locale-aware and individual keys
   * console.log(
   *     time5.dateFormat('%[Yeb], %H:%M', Date.UTC(2024, 11, 31))
   * ); // => 31 Dec 2024, 00:00
   *
   * @function Highcharts.Time#dateFormat
   *
   * @param {string|Highcharts.DateTimeFormatOptions} format
   *        The desired string format where various time representations are
   *        prefixed with %, or an object representing the locale-aware format
   *        options.
   *
   * @param {number} [timestamp]
   *        The JavaScript timestamp.
   *
   * @param {boolean} [upperCaseFirst=false]
   *        Upper case first letter in the return.
   *
   * @return {string}
   *         The formatted date.
   */
  dateFormat(t, e, i) {
    const s = this.lang;
    if (!ns(e) || isNaN(e))
      return s?.invalidDate || "";
    if (t = t ?? "%Y-%m-%d %H:%M:%S", Yt(t)) {
      const r = /%\[([a-zA-Z]+)\]/g;
      let n;
      for (; n = r.exec(t); )
        t = t.replace(n[0], this.dateTimeFormat(n[1], e, s?.locale));
    }
    if (Yt(t) && t.indexOf("%") !== -1) {
      const r = this, [n, o, a, l, h, f, d, p] = this.toParts(e), u = s?.weekdays || this.weekdays, g = s?.shortWeekdays || this.shortWeekdays, x = s?.months || this.months, m = s?.shortMonths || this.shortMonths, y = qe({
        // Day
        // Short weekday, like 'Mon'
        a: g ? g[p] : u[p].substr(0, 3),
        // Long weekday, like 'Monday'
        A: u[p],
        // Two digit day of the month, 01 to 31
        d: ut(a),
        // Day of the month, 1 through 31
        e: ut(a, 2, " "),
        // Day of the week, 0 through 6
        w: p,
        // Week (none implemented)
        // 'W': weekNumber(),
        v: s?.weekFrom ?? "",
        // Month
        // Short month, like 'Jan'
        b: m[o],
        // Long month, like 'January'
        B: x[o],
        // Two digit month number, 01 through 12
        m: ut(o + 1),
        // Month number, 1 through 12 (#8150)
        o: o + 1,
        // Year
        // Two digits year, like 09 for 2009
        y: n.toString().substr(2, 2),
        // Four digits year, like 2009
        Y: n,
        // Time
        // Two digits hours in 24h format, 00 through 23
        H: ut(l),
        // Hours in 24h format, 0 through 23
        k: l,
        // Two digits hours in 12h format, 00 through 11
        I: ut(l % 12 || 12),
        // Hours in 12h format, 1 through 12
        l: l % 12 || 12,
        // Two digits minutes, 00 through 59
        M: ut(h),
        // Upper case AM or PM
        p: l < 12 ? "AM" : "PM",
        // Lower case AM or PM
        P: l < 12 ? "am" : "pm",
        // Two digits seconds, 00 through 59
        S: ut(f),
        // Milliseconds (naming from Ruby)
        L: ut(d, 3)
      }, N.dateFormats);
      Dn(y, function(b, v) {
        if (Yt(t))
          for (; t.indexOf("%" + v) !== -1; )
            t = t.replace("%" + v, typeof b == "function" ? b.call(r, e) : b);
      });
    } else if (Ze(t)) {
      const r = (this.getTimezoneOffset(e) || 0) / 36e5, n = this.timezone || "Etc/GMT" + (r >= 0 ? "+" : "") + r, { prefix: o = "", suffix: a = "" } = t;
      t = o + this.dateTimeFormat(qe({ timeZone: n }, t), e) + a;
    }
    return i ? In(t) : t;
  }
  /**
   * Resolve legacy formats of dateTimeLabelFormats (strings and arrays) into
   * an object.
   * @private
   * @param {string|Array<T>|Highcharts.Dictionary<T>} f
   * General format description
   * @return {Highcharts.Dictionary<T>}
   * The object definition
   */
  resolveDTLFormat(t) {
    return Ze(t, !0) ? Ze(t, !0) && Nn(t) ? { main: t } : t : (t = $n(t), {
      main: t[0],
      from: t[1],
      to: t[2]
    });
  }
  /**
   * Get the optimal date format for a point, based on a range.
   *
   * @private
   * @function Highcharts.Time#getDateFormat
   *
   * @param {number} range
   *        The time range
   *
   * @param {number} timestamp
   *        The timestamp of the date
   *
   * @param {number} startOfWeek
   *        An integer representing the first day of the week, where 0 is
   *        Sunday.
   *
   * @param {Highcharts.Dictionary<string>} dateTimeLabelFormats
   *        A map of time units to formats.
   *
   * @return {string}
   *         The optimal date format for a point.
   */
  getDateFormat(t, e, i, s) {
    const r = this.dateFormat("%m-%d %H:%M:%S.%L", e), n = "01-01 00:00:00.000", o = {
      millisecond: 15,
      second: 12,
      minute: 9,
      hour: 6,
      day: 3
    };
    let a = "millisecond", l = a;
    for (a in _e) {
      if (t && t === _e.week && +this.dateFormat("%w", e) === i && r.substr(6) === n.substr(6)) {
        a = "week";
        break;
      }
      if (t && _e[a] > t) {
        a = l;
        break;
      }
      if (o[a] && r.substr(o[a]) !== n.substr(o[a]))
        break;
      a !== "week" && (l = a);
    }
    return this.resolveDTLFormat(s[a]).main;
  }
}
const { defined: ls, extend: zn, timeUnits: V } = W;
class Ar extends Rn {
  /**
   * Return an array with time positions distributed on round time values
   * right and right after min and max. Used in datetime axes as well as for
   * grouping data on a datetime axis.
   *
   * @function Highcharts.Time#getTimeTicks
   *
   * @param {Highcharts.TimeNormalizedObject} normalizedInterval
   *        The interval in axis values (ms) and the count
   *
   * @param {number} [min]
   *        The minimum in axis values
   *
   * @param {number} [max]
   *        The maximum in axis values
   *
   * @param {number} [startOfWeek=1]
   *
   * @return {Highcharts.AxisTickPositionsArray}
   * Time positions
   */
  getTimeTicks(t, e, i, s) {
    const r = this, n = [], o = {}, { count: a = 1, unitRange: l } = t;
    let [h, f, d, p, u, g] = r.toParts(e), x = (e || 0) % 1e3, m;
    if (s ?? (s = 1), ls(e)) {
      if (x = l >= V.second ? 0 : (
        // #3935
        a * Math.floor(x / a)
      ), l >= V.second && (g = l >= V.minute ? 0 : (
        // #3935
        a * Math.floor(g / a)
      )), l >= V.minute && (u = l >= V.hour ? 0 : a * Math.floor(u / a)), l >= V.hour && (p = l >= V.day ? 0 : a * Math.floor(p / a)), l >= V.day && (d = l >= V.month ? 1 : Math.max(1, a * Math.floor(d / a))), l >= V.month && (f = l >= V.year ? 0 : a * Math.floor(f / a)), l >= V.year && (h -= h % a), l === V.week) {
        a && (e = r.makeTime(h, f, d, p, u, g, x));
        const v = this.dateTimeFormat({
          timeZone: this.timezone,
          weekday: "narrow"
        }, e, "es"), S = "DLMXJVS".indexOf(v);
        d += -S + s + // We don't want to skip days that are before
        // startOfWeek (#7051)
        (S < s ? -7 : 0);
      }
      e = r.makeTime(h, f, d, p, u, g, x), r.variableTimezone && ls(i) && (m = // Long range, assume we're crossing over.
      i - e > 4 * V.month || // Short range, check if min and max are in different time
      // zones.
      r.getTimezoneOffset(e) !== r.getTimezoneOffset(i));
      let y = e, b = 1;
      for (; y < i; )
        n.push(y), l === V.year ? y = r.makeTime(h + b * a, 0) : l === V.month ? y = r.makeTime(h, f + b * a) : m && (l === V.day || l === V.week) ? y = r.makeTime(h, f, d + b * a * (l === V.day ? 1 : 7)) : m && l === V.hour && a > 1 ? y = r.makeTime(h, f, d, p + b * a) : y += l * a, b++;
      n.push(y), l <= V.hour && n.length < 1e4 && n.forEach((v) => {
        // Speed optimization, no need to run dateFormat unless
        // we're on a full or half hour
        v % 18e5 === 0 && // Check for local or global midnight
        r.dateFormat("%H%M%S%L", v) === "000000000" && (o[v] = "day");
      });
    }
    return n.info = zn(t, {
      higherRanks: o,
      totalRange: l * a
    }), n;
  }
}
const { isTouchDevice: Wn } = N, Ni = {
  /**
   * An array containing the default colors for the chart's series. When
   * all colors are used, new colors are pulled from the start again.
   *
   * Default colors can also be set on a series or series.type basis,
   * see [column.colors](#plotOptions.column.colors),
   * [pie.colors](#plotOptions.pie.colors).
   *
   * In styled mode, the colors option doesn't exist. Instead, colors
   * are defined in CSS and applied either through series or point class
   * names, or through the [chart.colorCount](#chart.colorCount) option.
   *
   * @sample {highcharts} highcharts/chart/colors/
   *         Assign a global color theme
   * @sample highcharts/members/theme-v10/
   *         Latest release styled like version 10
   *
   * @type    {Array<(Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject)>}
   * @default [
   *     "#2caffe",
   *     "#544fc5",
   *     "#00e272",
   *     "#fe6a35",
   *     "#6b8abc",
   *     "#d568fb",
   *     "#2ee0ca",
   *     "#fa4b42",
   *     "#feb56a",
   *     "#91e8e1"
   * ]
   */
  colors: Ln.colors,
  /**
   * Styled mode only. Configuration object for adding SVG definitions for
   * reusable elements. See [gradients, shadows and
   * patterns](https://www.highcharts.com/docs/chart-design-and-style/gradients-shadows-and-patterns)
   * for more information and code examples.
   *
   * @type      {*}
   * @since     5.0.0
   * @apioption defs
   */
  /**
   * @ignore-option
   */
  symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
  /**
   * An object containing language-related strings and settings. A typical
   * setup uses `Highcharts.setOptions` to make the options apply to all
   * charts in the same page.
   *
   * Some language options, like `months` and `weekdays`, are only used
   * with non-locale-aware date formats.
   *
   * ```js
   * Highcharts.setOptions({
   *     lang: {
   *         locale: 'fr'
   *     }
   * });
   * ```
   *
   * @optionparent lang
   */
  lang: {
    weekFrom: "week from",
    /**
     * The default chart title.
     *
     * @since 12.2.0
     */
    chartTitle: "Chart title",
    /**
     * The browser locale to use for date and number formatting. The actual
     * locale used for each chart is determined in three steps:
     * 1. If this `lang.locale` option is specified, it is used.
     * 2. Else, look for the closest ancestor HTML element with a `lang`
     *    attribute, typically the `<html>` element.
     * 3. If no 'lang' attribute is found, use the default browser locale.
     *
     * Use `en-GB`, British English, for approximate consistency with
     * Highcharts v < 12.
     *
     * @sample highcharts/lang/locale/
     *         Set the locale using the `lang.locale` option
     * @sample highcharts/lang/locale-attribute/
     *         Pick up the locale from the HTML `lang` attribute
     * @sample highcharts/members/highcharts-numberformat
     *         Arabic locale with digits and dates         *
     *
     * @since 12.0.0
     * @type {string|Array<string>}
     */
    locale: void 0,
    /**
     * The loading text that appears when the chart is set into the loading
     * state following a call to `chart.showLoading`.
     */
    loading: "Loading...",
    /**
     * An array containing the months names. Corresponds to the `%B` format
     * in `Highcharts.dateFormat()`. Defaults to 'undefined',
     * meaning the default month names are used according to the
     * `lang.locale` or browser settings.
     *
     * @type    {Array<string>}
     */
    months: void 0,
    /**
     * [Format string](https://www.highcharts.com/docs/chart-concepts/templating) for the default series name.
     *
     * @since 12.2.0
     */
    seriesName: "Series {add index 1}",
    /**
     * An array containing the months names in abbreviated form. Corresponds
     * to the `%b` format in `Highcharts.dateFormat()`. Defaults to
     * 'undefined', meaning the default short month names are used according
     * to the `lang.locale` or browser settings.
     *
     * @type    {Array<string>}
     */
    shortMonths: void 0,
    /**
     * An array containing the weekday names. Corresponds
     * to the `%A` format in `Highcharts.dateFormat()`. Defaults to
     * 'undefined', meaning the default weekday names are used according to
     * the `lang.locale` or browser settings.
     *
     * @type    {Array<string>}
     */
    weekdays: void 0,
    /**
     * Short week days, starting Sunday. Corresponds to the `%a` format in
     * `Highcharts.dateFormat()`. Defaults to 'undefined', meaning
     * the default short weekday names are used according to the
     * `lang.locale` or browser settings.
     *
     * @sample highcharts/lang/shortweekdays/
     *         Finnish two-letter abbreviations
     *
     * @type      {Array<string>}
     * @since     4.2.4
     * @apioption lang.shortWeekdays
     */
    /**
     * What to show in a date field for invalid dates. Defaults to an empty
     * string.
     *
     * @type      {string}
     * @since     4.1.8
     * @product   highcharts highstock
     * @apioption lang.invalidDate
     */
    /**
     * The title appearing on hovering the zoom in button. The text itself
     * defaults to "+" and can be changed in the button options.
     *
     * @type      {string}
     * @default   Zoom in
     * @product   highmaps
     * @apioption lang.zoomIn
     */
    /**
     * The title appearing on hovering the zoom out button. The text itself
     * defaults to "-" and can be changed in the button options.
     *
     * @type      {string}
     * @default   Zoom out
     * @product   highmaps
     * @apioption lang.zoomOut
     */
    /**
     * The default decimal point used in the `Highcharts.numberFormat`
     * method unless otherwise specified in the function arguments. Defaults
     * to the locale decimal point as determined by `lang.locale`.
     *
     * @type      {string}
     * @default   undefined
     * @since     1.2.2
     * @apioption lang.decimalPoint
     */
    /**
     * [Metric prefixes](https://en.wikipedia.org/wiki/Metric_prefix) used
     * to shorten high numbers in axis labels. Replacing any of the
     * positions with `null` causes the full number to be written. Setting
     * `numericSymbols` to `undefined` disables shortening altogether.
     *
     * @sample {highcharts} highcharts/lang/numericsymbols/
     *         Replacing the symbols with text
     * @sample {highstock} highcharts/lang/numericsymbols/
     *         Replacing the symbols with text
     *
     * @type    {Array<string>}
     * @default ["k", "M", "G", "T", "P", "E"]
     * @since   2.3.0
     */
    numericSymbols: ["k", "M", "G", "T", "P", "E"],
    /**
     * The default name for a pie slice (point).
     * @since 12.2.0
     */
    pieSliceName: "Slice",
    /**
     * The magnitude of [numericSymbols](#lang.numericSymbol) replacements.
     * Use 10000 for Japanese, Korean and various Chinese locales, which
     * use symbols for 10^4, 10^8 and 10^12.
     *
     * @sample highcharts/lang/numericsymbolmagnitude/
     *         10000 magnitude for Japanese
     *
     * @type      {number}
     * @default   1000
     * @since     5.0.3
     * @apioption lang.numericSymbolMagnitude
     */
    /**
     * The default thousands separator used in the `Highcharts.numberFormat`
     * method unless otherwise specified in the function arguments. Defaults
     * to the locale thousands separator as determined by `lang.locale`.
     *
     * @type      {string}
     * @default   undefined
     * @since     1.2.2
     * @apioption lang.thousandsSep
     */
    /**
     * The text for the label appearing when a chart is zoomed.
     *
     * @since 1.2.4
     */
    resetZoom: "Reset zoom",
    /**
     * The tooltip title for the label appearing when a chart is zoomed.
     *
     * @since 1.2.4
     */
    /**
     * The default title of the Y axis
     *
     * @since 12.2.0
     */
    yAxisTitle: "Values",
    resetZoomTitle: "Reset zoom level 1:1"
  },
  /**
   * Global options that don't apply to each chart. These options must be set
   * using the `Highcharts.setOptions` method.
   *
   * ```js
   * Highcharts.setOptions({
   *     global: {
   *         buttonTheme: {
   *             fill: '#d0d0d0'
   *         }
   *     }
   * });
   * ```
   */
  global: {
    /**
     * General theme for buttons. This applies to the zoom button, exporting
     * context menu, map navigation, range selector buttons and custom
     * buttons generated using the `SVGRenderer.button` function. However,
     * each of these may be overridden with more specific options.
     *
     * @sample highcharts/global/buttontheme
     *         General button theme
     * @since 11.4.2
     */
    buttonTheme: {
      /**
       * The fill color for buttons
       */
      fill: "#f7f7f7",
      /**
       * The padding of buttons
       */
      padding: 8,
      /**
       * The border radius for buttons
       */
      r: 2,
      /**
       * The stroke color for buttons
       */
      stroke: "#cccccc",
      /**
       * The stroke width for buttons
       */
      "stroke-width": 1,
      /**
       * CSS styling for the buttons' text
       */
      style: {
        color: "#333333",
        cursor: "pointer",
        fontSize: "0.8em",
        fontWeight: "normal"
      },
      /**
       * State overrides for the buttons
       */
      states: {
        /**
         * Hover state overrides for the buttons are applied in addition
         * to the normal state options
         */
        hover: {
          fill: "#e6e6e6"
          /* Palette.neutralColor10 */
        },
        /**
         * Select state overrides for the buttons are applied in
         * addition to the normal state options
         */
        select: {
          fill: "#e6e9ff",
          style: {
            color: "#000000",
            fontWeight: "bold"
          }
        },
        /**
         * Disabled state overrides for the buttons are applied in
         * addition to the normal state options
         */
        disabled: {
          /**
           * Disabled state CSS style overrides for the buttons' text
           */
          style: {
            color: "#cccccc"
            /* Palette.neutralColor20 */
          }
        }
      }
    }
  },
  /**
   * Time options that can apply globally or to individual charts. These
   * settings affect how `datetime` axes are laid out, how tooltips are
   * formatted, how series
   * [pointIntervalUnit](#plotOptions.series.pointIntervalUnit) works and how
   * the Highcharts Stock range selector handles time.
   *
   * The common use case is that all charts in the same Highcharts object
   * share the same time settings, in which case the global settings are set
   * using `setOptions`.
   *
   * ```js
   * // Apply time settings globally
   * Highcharts.setOptions({
   *     time: {
   *         timezone: 'Europe/London'
   *     }
   * });
   * // Apply time settings by instance
   * const chart = Highcharts.chart('container', {
   *     time: {
   *         timezone: 'America/New_York'
   *     },
   *     series: [{
   *         data: [1, 4, 3, 5]
   *     }]
   * });
   *
   * // Use the Time object
   * console.log(
   *        'Current time in New York',
   *        chart.time.dateFormat('%Y-%m-%d %H:%M:%S', Date.now())
   * );
   * ```
   *
   * Since v6.0.5, the time options were moved from the `global` object to the
   * `time` object, and time options can be set on each individual chart.
   *
   * @sample {highcharts|highstock}
   *         highcharts/time/timezone/
   *         Set the timezone globally
   * @sample {highcharts}
   *         highcharts/time/individual/
   *         Set the timezone per chart instance
   * @sample {highstock}
   *         stock/time/individual/
   *         Set the timezone per chart instance
   *
   * @since     6.0.5
   * @optionparent time
   */
  time: {
    /**
     * A custom `Date` class for advanced date handling. For example,
     * [JDate](https://github.com/tahajahangir/jdate) can be hooked in to
     * handle Jalali dates.
     *
     * @type      {*}
     * @since     4.0.4
     * @product   highcharts highstock gantt
     */
    Date: void 0,
    /**
     * A named time zone. Supported time zone names rely on the browser
     * implementations, as described in the [mdn
     * docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#timezone).
     * If the given time zone is not recognized by the browser, Highcharts
     * provides a warning and falls back to returning a 0 offset,
     * corresponding to the UTC time zone.
     *
     * The time zone affects axis scaling, tickmark placement and
     * time display in `Highcharts.dateFormat`.
     *
     * Setting `timezone` to `undefined` falls back to the default browser
     * timezone setting.
     *
     * Until v11.2.0, this option depended on moment.js.
     *
     * @sample {highcharts|highstock} highcharts/time/timezone/ Europe/Oslo
     *
     * @type      {string}
     * @since     5.0.7
     * @product   highcharts highstock gantt
     */
    timezone: "UTC",
    /**
     * The timezone offset in minutes. Positive values are west, negative
     * values are east of UTC, as in the ECMAScript
     * [getTimezoneOffset](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)
     * method. Use this to display UTC based data in a predefined time zone.
     *
     * This option is deprecated as of v11.4.1 and will be removed in a
     * future release. Use the [time.timezone](#time.timezone) option
     * instead.
     *
     * @see [time.getTimezoneOffset](#time.getTimezoneOffset)
     *
     * @sample {highcharts|highstock} highcharts/time/timezoneoffset/
     *         Timezone offset
     *
     * @since     3.0.8
     * @deprecated 11.4.2
     * @product   highcharts highstock gantt
     */
    timezoneOffset: 0,
    /**
     * Whether to use UTC time for axis scaling, tickmark placement and
     * time display in `Highcharts.dateFormat`. Advantages of using UTC
     * is that the time displays equally regardless of the user agent's
     * time zone settings. Local time can be used when the data is loaded
     * in real time or when correct Daylight Saving Time transitions are
     * required.
     *
     * Setting `useUTC` to true is equivalent to setting `time.timezone` to
     * `"UTC"`. Setting `useUTC` to false is equivalent to setting
     * `time.timezone` to `undefined`.
     *
     * @see [time.timezone](#timezone)
     *
     * @sample {highcharts} highcharts/time/useutc-true/
     *         True by default
     * @sample {highcharts} highcharts/time/useutc-false/
     *         False
     *
     * @deprecated
     */
    useUTC: void 0
  },
  chart: On,
  /**
   * The chart's main title.
   *
   * @sample {highmaps} maps/title/title/
   *         Title options demonstrated
   * @sample {highcharts} highcharts/title/align-auto/
   *         Default title alignment
   */
  title: {
    /**
     * When the title is floating, the plot area will not move to make space
     * for it.
     *
     * @sample {highcharts} highcharts/chart/zoomtype-none/
     *         False by default
     * @sample {highcharts} highcharts/title/floating/
     *         True - title on top of the plot area
     * @sample {highstock} stock/chart/title-floating/
     *         True - title on top of the plot area
     *
     * @type      {boolean}
     * @default   false
     * @since     2.1
     * @apioption title.floating
     */
    /**
     * Whether to
     * [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
     * to render the text.
     *
     * @type      {boolean}
     * @default   false
     * @apioption title.useHTML
     */
    /**
     * The vertical alignment of the title. Can be one of `"top"`,
     * `"middle"` and `"bottom"`. When a value is given, the title behaves
     * as if [floating](#title.floating) were `true`.
     *
     * @sample {highcharts} highcharts/title/verticalalign/
     *         Chart title in bottom right corner
     * @sample {highstock} stock/chart/title-verticalalign/
     *         Chart title in bottom right corner
     *
     * @type      {Highcharts.VerticalAlignValue}
     * @since     2.1
     * @apioption title.verticalAlign
     */
    /**
     * The x position of the title relative to the alignment within
     * `chart.spacingLeft` and `chart.spacingRight`.
     *
     * @sample {highcharts} highcharts/title/align/
     *         Aligned to the plot area (x = 70px = margin left - spacing
     *         left)
     * @sample {highstock} stock/chart/title-align/
     *         Aligned to the plot area (x = 50px = margin left - spacing
     *         left)
     *
     * @type      {number}
     * @default   0
     * @since     2.0
     * @apioption title.x
     */
    /**
     * The y position of the title relative to the alignment within
     * [chart.spacingTop](#chart.spacingTop) and [chart.spacingBottom](
     * #chart.spacingBottom). By default it depends on the font size.
     *
     * @sample {highcharts} highcharts/title/y/
     *         Title inside the plot area
     * @sample {highstock} stock/chart/title-verticalalign/
     *         Chart title in bottom right corner
     *
     * @type      {number}
     * @since     2.0
     * @apioption title.y
     */
    /**
     * CSS styles for the title. Use this for font styling, but use `align`,
     * `x` and `y` for text alignment.
     *
     * Note that the default [title.minScale](#title.minScale) option also
     * affects the rendered font size. In order to keep the font size fixed
     * regardless of title length, set `minScale` to 1.
     *
     * In styled mode, the title style is given in the `.highcharts-title`
     * class.
     *
     * @sample {highcharts} highcharts/title/style/
     *         Custom color and weight
     * @sample {highstock} stock/chart/title-style/
     *         Custom color and weight
     * @sample highcharts/css/titles/
     *         Styled mode
     *
     * @type      {Highcharts.CSSObject}
     * @default   {highcharts|highmaps} { "color": "#333333", "fontSize": "18px" }
     * @default   {highstock} { "color": "#333333", "fontSize": "16px" }
     */
    style: {
      color: "#333333",
      fontWeight: "bold"
    },
    /**
     * The title of the chart. To disable the title, set the `text` to
     * `undefined`.
     *
     * @sample {highcharts} highcharts/title/text/
     *         Custom title
     * @sample {highstock} stock/chart/title-text/
     *         Custom title
     *
     * @default {highcharts|highmaps} Chart title
     * @default {highstock} undefined
     */
    text: "Chart title",
    /**
     * The horizontal alignment of the title. Can be one of "left", "center"
     * and "right".
     *
     * Since v12 it defaults to `undefined`, meaning the alignment is
     * computed for best fit. If the text fits in one line, it aligned to
     * the center, but if it is wrapped into multiple lines, it is aligned
     * to the left.
     *
     * @sample {highcharts} highcharts/title/align-auto/
     *         Default alignment, dynamic
     * @sample {highcharts} highcharts/title/align/
     *         Aligned to the plot area (x = 70px = margin left - spacing
     *         left)
     * @sample {highstock} stock/chart/title-align/
     *         Aligned to the plot area (x = 50px = margin left - spacing
     *         left)
     *
     * @type      {Highcharts.AlignValue}
     * @default   undefined
     * @since     2.0
     * @apioption title.align
     */
    /**
     * The margin between the title and the plot area, or if a subtitle
     * is present, the margin between the subtitle and the plot area.
     *
     * @sample {highcharts} highcharts/title/margin-50/
     *         A chart title margin of 50
     * @sample {highcharts} highcharts/title/margin-subtitle/
     *         The same margin applied with a subtitle
     * @sample {highstock} stock/chart/title-margin/
     *         A chart title margin of 50
     *
     * @since 2.1
     */
    margin: 15,
    /**
     * When the title is too wide to fit in the chart, the default behavior
     * is to scale it down to fit, or apply word wrap if it is scaled down
     * to `minScale` and still doesn't fit.
     *
     * The default value reflects the scale, when using default font sizes,
     * when the title font size matches that of the subtitle. The title
     * still stands out as it is bold by default.
     *
     * Set `minScale` to 1 to avoid downscaling.
     *
     * @sample {highcharts} highcharts/title/align-auto/
     *         Downscaling demonstrated
     *
     * @since 12.0.0
     */
    minScale: 0.67
  },
  /**
   * The chart's subtitle. This can be used both to display a subtitle below
   * the main title, and to display random text anywhere in the chart. The
   * subtitle can be updated after chart initialization through the
   * `Chart.setTitle` method.
   *
   * @sample {highcharts} highcharts/title/align-auto/
   *         Default title alignment
   * @sample {highmaps} maps/title/subtitle/
   *         Subtitle options demonstrated
   */
  subtitle: {
    /**
     * The horizontal alignment of the subtitle. Can be one of "left",
     * "center" and "right". Since v12, it defaults to `undefined`, meaning
     * the actual alignment is inherited from the alignment of the main
     * title.
     *
     * @sample {highcharts} highcharts/title/align-auto/
     *         Default title and subtitle alignment, dynamic
     * @sample {highcharts} highcharts/subtitle/align/
     *         Footnote at right of plot area
     * @sample {highstock} stock/chart/subtitle-footnote
     *         Footnote at bottom right of plot area
     *
     * @type  {Highcharts.AlignValue}
     * @default undefined
     * @since 2.0
     * @apioption subtitle.align
     */
    /**
     * When the subtitle is floating, the plot area will not move to make
     * space for it.
     *
     * @sample {highcharts} highcharts/subtitle/floating/
     *         Floating title and subtitle
     * @sample {highstock} stock/chart/subtitle-footnote
     *         Footnote floating at bottom right of plot area
     *
     * @type      {boolean}
     * @default   false
     * @since     2.1
     * @apioption subtitle.floating
     */
    /**
     * CSS styles for the title.
     *
     * In styled mode, the subtitle style is given in the
     * `.highcharts-subtitle` class.
     *
     * @sample {highcharts} highcharts/subtitle/style/
     *         Custom color and weight
     * @sample {highcharts} highcharts/css/titles/
     *         Styled mode
     * @sample {highstock} stock/chart/subtitle-style
     *         Custom color and weight
     * @sample {highstock} highcharts/css/titles/
     *         Styled mode
     * @sample {highmaps} highcharts/css/titles/
     *         Styled mode
     *
     * @type      {Highcharts.CSSObject}
     * @default   {"color": "#666666"}
     * @apioption subtitle.style
     */
    /**
     * Whether to
     * [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
     * to render the text.
     *
     * @type      {boolean}
     * @default   false
     * @apioption subtitle.useHTML
     */
    /**
     * The vertical alignment of the title. Can be one of `"top"`,
     * `"middle"` and `"bottom"`. When middle, the subtitle behaves as
     * floating.
     *
     * @sample {highcharts} highcharts/subtitle/verticalalign/
     *         Footnote at the bottom right of plot area
     * @sample {highstock} stock/chart/subtitle-footnote
     *         Footnote at the bottom right of plot area
     *
     * @type      {Highcharts.VerticalAlignValue}
     * @since     2.1
     * @apioption subtitle.verticalAlign
     */
    /**
     * The x position of the subtitle relative to the alignment within
     * `chart.spacingLeft` and `chart.spacingRight`.
     *
     * @sample {highcharts} highcharts/subtitle/align/
     *         Footnote at right of plot area
     * @sample {highstock} stock/chart/subtitle-footnote
     *         Footnote at the bottom right of plot area
     *
     * @type      {number}
     * @default   0
     * @since     2.0
     * @apioption subtitle.x
     */
    /**
     * The y position of the subtitle relative to the alignment within
     * `chart.spacingTop` and `chart.spacingBottom`. By default the subtitle
     * is laid out below the title unless the title is floating.
     *
     * @sample {highcharts} highcharts/subtitle/verticalalign/
     *         Footnote at the bottom right of plot area
     * @sample {highstock} stock/chart/subtitle-footnote
     *         Footnote at the bottom right of plot area
     *
     * @type      {number}
     * @since     2.0
     * @apioption subtitle.y
     */
    /**
     * CSS styles for the title.
     *
     * In styled mode, the subtitle style is given in the
     * `.highcharts-subtitle` class.
     *
     * @sample {highcharts} highcharts/subtitle/style/
     *         Custom color and weight
     * @sample {highcharts} highcharts/css/titles/
     *         Styled mode
     * @sample {highstock} stock/chart/subtitle-style
     *         Custom color and weight
     * @sample {highstock} highcharts/css/titles/
     *         Styled mode
     * @sample {highmaps} highcharts/css/titles/
     *         Styled mode
     *
     * @type      {Highcharts.CSSObject}
     * @default   {"color": "#666666"}
     */
    style: {
      color: "#666666",
      /**
       * @type {number|string}
       */
      fontSize: "0.8em"
    },
    /**
     * The subtitle of the chart.
     *
     * @sample {highcharts|highstock} highcharts/subtitle/text/
     *         Custom subtitle
     * @sample {highcharts|highstock} highcharts/subtitle/text-formatted/
     *         Formatted and linked text.
     */
    text: ""
  },
  /**
   * The chart's caption, which will render below the chart and will be part
   * of exported charts. The caption can be updated after chart initialization
   * through the `Chart.update` or `Chart.caption.update` methods.
   *
   * @sample highcharts/caption/text/
   *         A chart with a caption
   * @since  7.2.0
   */
  caption: {
    /**
     * When the caption is floating, the plot area will not move to make
     * space for it.
     *
     * @type      {boolean}
     * @default   false
     * @apioption caption.floating
     */
    /**
     * The margin between the caption and the plot area.
     */
    margin: 15,
    /**
     * Whether to
     * [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
     * to render the text.
     *
     * @type      {boolean}
     * @default   false
     * @apioption caption.useHTML
     */
    /**
     * The x position of the caption relative to the alignment within
     * `chart.spacingLeft` and `chart.spacingRight`.
     *
     * @type      {number}
     * @default   0
     * @apioption caption.x
     */
    /**
     * The y position of the caption relative to the alignment within
     * `chart.spacingTop` and `chart.spacingBottom`.
     *
     * @type      {number}
     * @apioption caption.y
     */
    /**
     * CSS styles for the caption.
     *
     * In styled mode, the caption style is given in the
     * `.highcharts-caption` class.
     *
     * @sample {highcharts} highcharts/css/titles/
     *         Styled mode
     *
     * @type      {Highcharts.CSSObject}
     * @default   {"color": "#666666"}
     */
    style: {
      color: "#666666",
      /**
       * @type {number|string}
       */
      fontSize: "0.8em"
    },
    /**
     * The caption text of the chart.
     *
     * @sample {highcharts} highcharts/caption/text/
     *         Custom caption
     */
    text: "",
    /**
     * The horizontal alignment of the caption. Can be one of "left",
     *  "center" and "right".
     *
     * @type  {Highcharts.AlignValue}
     */
    align: "left",
    /**
     * The vertical alignment of the caption. Can be one of `"top"`,
     * `"middle"` and `"bottom"`. When middle, the caption behaves as
     * floating.
     *
     * @type      {Highcharts.VerticalAlignValue}
     */
    verticalAlign: "bottom"
  },
  /**
   * The plotOptions is a wrapper object for config objects for each series
   * type. The config objects for each series can also be overridden for
   * each series item as given in the series array.
   *
   * Configuration options for the series are given in three levels. Options
   * for all series in a chart are given in the [plotOptions.series](
   * #plotOptions.series) object. Then options for all series of a specific
   * type are given in the plotOptions of that type, for example
   * `plotOptions.line`. Next, options for one single series are given in
   * [the series array](#series).
   */
  plotOptions: {},
  /**
   * The legend is a box containing a symbol and name for each series
   * item or point item in the chart. Each series (or points in case
   * of pie charts) is represented by a symbol and its name in the legend.
   *
   * It is possible to override the symbol creator function and create
   * [custom legend symbols](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/studies/legend-custom-symbol/).
   *
   * @productdesc {highmaps}
   * A Highmaps legend by default contains one legend item per series, but if
   * a `colorAxis` is defined, the axis will be displayed in the legend.
   * Either as a gradient, or as multiple legend items for `dataClasses`.
   */
  legend: {
    /**
     * The background color of the legend.
     *
     * @see In styled mode, the legend background fill can be applied with
     *      the `.highcharts-legend-box` class.
     *
     * @sample {highcharts} highcharts/legend/backgroundcolor/
     *         Yellowish background
     * @sample {highstock} stock/legend/align/
     *         Various legend options
     * @sample {highmaps} maps/legend/border-background/
     *         Border and background options
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @apioption legend.backgroundColor
     */
    /**
     * The width of the drawn border around the legend.
     *
     * @see In styled mode, the legend border stroke width can be applied
     *      with the `.highcharts-legend-box` class.
     *
     * @sample {highcharts} highcharts/legend/borderwidth/
     *         2px border width
     * @sample {highstock} stock/legend/align/
     *         Various legend options
     * @sample {highmaps} maps/legend/border-background/
     *         Border and background options
     *
     * @type      {number}
     * @default   0
     * @apioption legend.borderWidth
     */
    /**
     * Enable or disable the legend. There is also a series-specific option,
     * [showInLegend](#plotOptions.series.showInLegend), that can hide the
     * series from the legend. In some series types this is `false` by
     * default, so it must set to `true` in order to show the legend for the
     * series.
     *
     * @sample {highcharts} highcharts/legend/enabled-false/ Legend disabled
     * @sample {highstock} stock/legend/align/ Various legend options
     * @sample {highmaps} maps/legend/enabled-false/ Legend disabled
     *
     * @default {highstock} false
     * @default {highmaps} true
     * @default {gantt} false
     */
    enabled: !0,
    /**
     * The horizontal alignment of the legend box within the chart area.
     * Valid values are `left`, `center` and `right`.
     *
     * In the case that the legend is aligned in a corner position, the
     * `layout` option will determine whether to place it above/below
     * or on the side of the plot area.
     *
     * @sample {highcharts} highcharts/legend/align/
     *         Legend at the right of the chart
     * @sample {highstock} stock/legend/align/
     *         Various legend options
     * @sample {highmaps} maps/legend/alignment/
     *         Legend alignment
     *
     * @type  {Highcharts.AlignValue}
     * @since 2.0
     */
    align: "center",
    /**
     * If the [layout](legend.layout) is `horizontal` and the legend items
     * span over two lines or more, whether to align the items into vertical
     * columns. Setting this to `false` makes room for more items, but will
     * look more messy.
     *
     * @since 6.1.0
     */
    alignColumns: !0,
    /**
     * A CSS class name to apply to the legend group.
     */
    className: "highcharts-no-tooltip",
    /**
     * General event handlers for the legend. These event hooks can
     * also be attached to the legend at run time using the
     * `Highcharts.addEvent` function.
     *
     * @declare Highcharts.LegendEventsOptionsObject
     *
     * @private
     */
    events: {},
    /**
     * Fires when the legend item belonging to the series is clicked. One
     * parameter, `event`, is passed to the function. The default action
     * is to toggle the visibility of the series, point or data class. This
     * can be prevented by returning `false` or calling
     * `event.preventDefault()`.
     *
     * @sample {highcharts} highcharts/legend/itemclick/
     *         Confirm hiding and showing
     * @sample {highcharts} highcharts/legend/pie-legend-itemclick/
     *         Confirm toggle visibility of pie slices
     *
     * @type      {Highcharts.LegendItemClickCallbackFunction}
     * @context   Highcharts.Legend
     * @apioption legend.events.itemClick
     */
    /**
     * When the legend is floating, the plot area ignores it and is allowed
     * to be placed below it.
     *
     * @sample {highcharts} highcharts/legend/floating-false/
     *         False by default
     * @sample {highcharts} highcharts/legend/floating-true/
     *         True
     * @sample {highmaps} maps/legend/alignment/
     *         Floating legend
     *
     * @type      {boolean}
     * @default   false
     * @since     2.1
     * @apioption legend.floating
     */
    /**
     * The layout of the legend items. Can be one of `horizontal` or
     * `vertical` or `proximate`. When `proximate`, the legend items will be
     * placed as close as possible to the graphs they're representing,
     * except in inverted charts or when the legend position doesn't allow
     * it.
     *
     * @sample {highcharts} highcharts/legend/layout-horizontal/
     *         Horizontal by default
     * @sample {highcharts} highcharts/legend/layout-vertical/
     *         Vertical
     * @sample highcharts/legend/layout-proximate
     *         Labels proximate to the data
     * @sample {highstock} stock/legend/layout-horizontal/
     *         Horizontal by default
     * @sample {highmaps} maps/legend/padding-itemmargin/
     *         Vertical with data classes
     * @sample {highmaps} maps/legend/layout-vertical/
     *         Vertical with color axis gradient
     *
     * @validvalue ["horizontal", "vertical", "proximate"]
     */
    layout: "horizontal",
    /**
     * In a legend with horizontal layout, the itemDistance defines the
     * pixel distance between each item.
     *
     * @sample {highcharts} highcharts/legend/layout-horizontal/
     *         50px item distance
     * @sample {highstock} highcharts/legend/layout-horizontal/
     *         50px item distance
     *
     * @type      {number}
     * @default   {highcharts} 20
     * @default   {highstock} 20
     * @default   {highmaps} 8
     * @since     3.0.3
     * @apioption legend.itemDistance
     */
    /**
     * The pixel bottom margin for each legend item.
     *
     * @sample {highcharts|highstock} highcharts/legend/padding-itemmargin/
     *         Padding and item margins demonstrated
     * @sample {highmaps} maps/legend/padding-itemmargin/
     *         Padding and item margins demonstrated
     *
     * @since     2.2.0
     */
    itemMarginBottom: 2,
    /**
     * The pixel top margin for each legend item.
     *
     * @sample {highcharts|highstock} highcharts/legend/padding-itemmargin/
     *         Padding and item margins demonstrated
     * @sample {highmaps} maps/legend/padding-itemmargin/
     *         Padding and item margins demonstrated
     *
     * @since     2.2.0
     */
    itemMarginTop: 2,
    /**
     * The width for each legend item. By default the items are laid out
     * successively. In a [horizontal layout](legend.layout), if the items
     * are laid out across two rows or more, they will be vertically aligned
     * depending on the [legend.alignColumns](legend.alignColumns) option.
     *
     * @sample {highcharts} highcharts/legend/itemwidth-default/
     *         Undefined by default
     * @sample {highcharts} highcharts/legend/itemwidth-80/
     *         80 for aligned legend items
     *
     * @type      {number}
     * @since     2.0
     * @apioption legend.itemWidth
     */
    /**
     * A [format string](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting)
     * for each legend label. Available variables relates to properties on
     * the series, or the point in case of pies.
     *
     * @type      {string}
     * @default   {name}
     * @since     1.3
     * @apioption legend.labelFormat
     */
    /* eslint-disable valid-jsdoc */
    /**
     * Callback function to format each of the series' labels. The `this`
     * keyword refers to the series object, or the point object in case of
     * pie charts. By default the series or point name is printed.
     *
     * @productdesc {highmaps}
     * In Highmaps the context can also be a data class in case of a
     * `colorAxis`.
     *
     * @sample {highcharts} highcharts/legend/labelformatter/
     *         Add text
     * @sample {highmaps} maps/legend/labelformatter/
     *         Data classes with label formatter
     *
     * @type {Highcharts.FormatterCallbackFunction<Point|Series>}
     */
    labelFormatter: function() {
      return this.name;
    },
    /**
     * Line height for the legend items. Deprecated as of 2.1\. Instead,
     * the line height for each item can be set using
     * `itemStyle.lineHeight`, and the padding between items using
     * `itemMarginTop` and `itemMarginBottom`.
     *
     * @sample {highcharts} highcharts/legend/lineheight/
     *         Setting padding
     *
     * @deprecated
     *
     * @type      {number}
     * @default   16
     * @since     2.0
     * @product   highcharts gantt
     * @apioption legend.lineHeight
     */
    /**
     * If the plot area sized is calculated automatically and the legend is
     * not floating, the legend margin is the space between the legend and
     * the axis labels or plot area.
     *
     * @sample {highcharts} highcharts/legend/margin-default/
     *         12 pixels by default
     * @sample {highcharts} highcharts/legend/margin-30/
     *         30 pixels
     *
     * @type      {number}
     * @default   12
     * @since     2.1
     * @apioption legend.margin
     */
    /**
     * Maximum pixel height for the legend. When the maximum height is
     * extended, navigation will show.
     *
     * @type      {number}
     * @since     2.3.0
     * @apioption legend.maxHeight
     */
    /**
     * The color of the drawn border around the legend.
     *
     * @see In styled mode, the legend border stroke can be applied with the
     *      `.highcharts-legend-box` class.
     *
     * @sample {highcharts} highcharts/legend/bordercolor/
     *         Brown border
     * @sample {highstock} stock/legend/align/
     *         Various legend options
     * @sample {highmaps} maps/legend/border-background/
     *         Border and background options
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    borderColor: "#999999",
    /**
     * The border corner radius of the legend.
     *
     * @sample {highcharts} highcharts/legend/borderradius-default/
     *         Square by default
     * @sample {highcharts} highcharts/legend/borderradius-round/
     *         5px rounded
     * @sample {highmaps} maps/legend/border-background/
     *         Border and background options
     */
    borderRadius: 0,
    /**
     * Options for the paging or navigation appearing when the legend is
     * overflown. Navigation works well on screen, but not in static
     * exported images. One way of working around that is to
     * [increase the chart height in
     * export](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/legend/navigation-enabled-false/).
     *
     * @sample highcharts/legend/scrollable-vertical/
     *         Legend with vertical scrollable extension
     * @sample highcharts/legend/scrollable-horizontal/
     *         Legend with horizontal scrollable extension
     *
     */
    navigation: {
      /**
       * How to animate the pages when navigating up or down. A value of
       * `true` applies the default navigation given in the
       * `chart.animation` option. Additional options can be given as an
       * object containing values for easing and duration.
       *
       * @sample {highcharts} highcharts/legend/navigation/
       *         Legend page navigation demonstrated
       * @sample {highstock} highcharts/legend/navigation/
       *         Legend page navigation demonstrated
       *
       * @type      {boolean|Partial<Highcharts.AnimationOptionsObject>}
       * @default   true
       * @since     2.2.4
       * @apioption legend.navigation.animation
       */
      /**
       * The pixel size of the up and down arrows in the legend paging
       * navigation.
       *
       * @sample {highcharts} highcharts/legend/navigation/
       *         Legend page navigation demonstrated
       * @sample {highstock} highcharts/legend/navigation/
       *         Legend page navigation demonstrated
       *
       * @type      {number}
       * @default   12
       * @since     2.2.4
       * @apioption legend.navigation.arrowSize
       */
      /**
       * Whether to enable the legend navigation. In most cases, disabling
       * the navigation results in an unwanted overflow.
       *
       * See also the
       * [adapt chart to legend](https://github.com/highcharts/adapt-chart-to-legend)
       * plugin for a solution to extend the chart height to make room for
       * the legend, optionally in exported charts only.
       *
       * @type      {boolean}
       * @default   true
       * @since     4.2.4
       * @apioption legend.navigation.enabled
       */
      /**
       * Text styles for the legend page navigation.
       *
       * @see In styled mode, the navigation items are styled with the
       *      `.highcharts-legend-navigation` class.
       *
       * @sample {highcharts} highcharts/legend/navigation/
       *         Legend page navigation demonstrated
       * @sample {highstock} highcharts/legend/navigation/
       *         Legend page navigation demonstrated
       *
       * @type      {Highcharts.CSSObject}
       * @since     2.2.4
       * @apioption legend.navigation.style
       */
      style: {
        /**
         * @type {number|string}
         */
        fontSize: "0.8em"
      },
      /**
       * The color for the active up or down arrow in the legend page
       * navigation.
       *
       * @see In styled mode, the active arrow be styled with the
       *      `.highcharts-legend-nav-active` class.
       *
       * @sample  {highcharts} highcharts/legend/navigation/
       *          Legend page navigation demonstrated
       * @sample  {highstock} highcharts/legend/navigation/
       *          Legend page navigation demonstrated
       *
       * @type  {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
       * @since 2.2.4
       */
      activeColor: "#0022ff",
      /**
       * The color of the inactive up or down arrow in the legend page
       * navigation. .
       *
       * @see In styled mode, the inactive arrow be styled with the
       *      `.highcharts-legend-nav-inactive` class.
       *
       * @sample {highcharts} highcharts/legend/navigation/
       *         Legend page navigation demonstrated
       * @sample {highstock} highcharts/legend/navigation/
       *         Legend page navigation demonstrated
       *
       * @type  {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
       * @since 2.2.4
       */
      inactiveColor: "#cccccc"
      /* Palette.neutralColor20 */
    },
    /**
     * The inner padding of the legend box.
     *
     * @sample {highcharts|highstock} highcharts/legend/padding-itemmargin/
     *         Padding and item margins demonstrated
     * @sample {highmaps} maps/legend/padding-itemmargin/
     *         Padding and item margins demonstrated
     *
     * @type      {number}
     * @default   8
     * @since     2.2.0
     * @apioption legend.padding
     */
    /**
     * Whether to reverse the order of the legend items compared to the
     * order of the series or points as defined in the configuration object.
     *
     * @see [yAxis.reversedStacks](#yAxis.reversedStacks),
     *      [series.legendIndex](#series.legendIndex)
     *
     * @sample {highcharts} highcharts/legend/reversed/
     *         Stacked bar with reversed legend
     *
     * @type      {boolean}
     * @default   false
     * @since     1.2.5
     * @apioption legend.reversed
     */
    /**
     * Whether to show the symbol on the right side of the text rather than
     * the left side. This is common in Arabic and Hebrew.
     *
     * @sample {highcharts} highcharts/legend/rtl/
     *         Symbol to the right
     *
     * @type      {boolean}
     * @default   false
     * @since     2.2
     * @apioption legend.rtl
     */
    /**
     * CSS styles for the legend area. In the 1.x versions the position
     * of the legend area was determined by CSS. In 2.x, the position is
     * determined by properties like `align`, `verticalAlign`, `x` and `y`,
     * but the styles are still parsed for backwards compatibility.
     *
     * @deprecated
     *
     * @type      {Highcharts.CSSObject}
     * @product   highcharts highstock
     * @apioption legend.style
     */
    /**
     * CSS styles for each legend item. Only a subset of CSS is supported,
     * notably those options related to text. The default `textOverflow`
     * property makes long texts truncate. Set it to `undefined` to wrap
     * text instead. A `width` property can be added to control the text
     * width.
     *
     * @see In styled mode, the legend items can be styled with the
     *      `.highcharts-legend-item` class.
     *
     * @sample {highcharts} highcharts/legend/itemstyle/
     *         Bold black text
     * @sample {highmaps} maps/legend/itemstyle/
     *         Item text styles
     *
     * @type    {Highcharts.CSSObject}
     * @default {"color": "#333333", "cursor": "pointer", "fontSize": "0.8em", "fontWeight": "bold", "textOverflow": "ellipsis"}
     */
    itemStyle: {
      /**
       * @ignore
       */
      color: "#333333",
      /**
       * @ignore
       */
      cursor: "pointer",
      /**
       * @ignore
       */
      fontSize: "0.8em",
      /**
       * @ignore
       */
      textDecoration: "none",
      /**
       * @ignore
       */
      textOverflow: "ellipsis"
    },
    /**
     * CSS styles for each legend item in hover mode. Only a subset of
     * CSS is supported, notably those options related to text. Properties
     * are inherited from `style` unless overridden here.
     *
     * @see In styled mode, the hovered legend items can be styled with
     *      the `.highcharts-legend-item:hover` pseudo-class.
     *
     * @sample {highcharts} highcharts/legend/itemhoverstyle/
     *         Red on hover
     * @sample {highmaps} maps/legend/itemstyle/
     *         Item text styles
     *
     * @type    {Highcharts.CSSObject}
     * @default {"color": "#000000"}
     */
    itemHoverStyle: {
      /**
       * @ignore
       */
      color: "#000000"
      /* Palette.neutralColor100 */
    },
    /**
     * CSS styles for each legend item when the corresponding series or
     * point is hidden. Only a subset of CSS is supported, notably those
     * options related to text. Properties are inherited from `style`
     * unless overridden here.
     *
     * @see In styled mode, the hidden legend items can be styled with
     *      the `.highcharts-legend-item-hidden` class.
     *
     * @sample {highcharts} highcharts/legend/itemhiddenstyle/
     *         Darker gray color
     *
     * @type    {Highcharts.CSSObject}
     * @default {"color": "#cccccc"}
     */
    itemHiddenStyle: {
      /**
       * @ignore
       */
      color: "#666666",
      /**
       * @ignore
       */
      textDecoration: "line-through"
    },
    /**
     * Whether to apply a drop shadow to the legend. A `backgroundColor`
     * also needs to be applied for this to take effect. The shadow can be
     * an object configuration containing `color`, `offsetX`, `offsetY`,
     * `opacity` and `width`.
     *
     * @sample {highcharts} highcharts/legend/shadow/
     *         White background and drop shadow
     * @sample {highstock} stock/legend/align/
     *         Various legend options
     * @sample {highmaps} maps/legend/border-background/
     *         Border and background options
     *
     * @type {boolean|Highcharts.CSSObject}
     */
    shadow: !1,
    /**
     * Default styling for the checkbox next to a legend item when
     * `showCheckbox` is true.
     *
     * @type {Highcharts.CSSObject}
     * @default {"width": "13px", "height": "13px", "position":"absolute"}
     */
    itemCheckboxStyle: {
      /**
       * @ignore
       */
      position: "absolute",
      /**
       * @ignore
       */
      width: "13px",
      // For IE precision
      /**
       * @ignore
       */
      height: "13px"
    },
    /// itemWidth: undefined,
    /**
     * When this is true, the legend symbol width will be the same as
     * the symbol height, which in turn defaults to the font size of the
     * legend items.
     *
     * @since 5.0.0
     */
    squareSymbol: !0,
    /**
     * The pixel height of the symbol for series types that use a rectangle
     * in the legend. Defaults to the font size of legend items.
     *
     * Note: This option is a default source of color axis height, if the
     * [colorAxis.height](https://api.highcharts.com/highcharts/colorAxis.height)
     * option is not set.
     *
     * @productdesc {highmaps}
     * In Highmaps, when the symbol is the gradient of a vertical color
     * axis, the height defaults to 200.
     *
     * @sample {highmaps} maps/legend/layout-vertical-sized/
     *         Sized vertical gradient
     * @sample {highmaps} maps/legend/padding-itemmargin/
     *         No distance between data classes
     *
     * @type      {number}
     * @since     3.0.8
     * @apioption legend.symbolHeight
     */
    /**
     * The border radius of the symbol for series types that use a rectangle
     * in the legend. Defaults to half the `symbolHeight`, effectively
     * creating a circle.
     *
     * For color axis scales, it defaults to 3.
     *
     * @sample {highcharts} highcharts/legend/symbolradius/
     *         Round symbols
     * @sample {highstock} highcharts/legend/symbolradius/
     *         Round symbols
     * @sample {highmaps} highcharts/legend/symbolradius/
     *         Round symbols
     *
     * @type      {number}
     * @since     3.0.8
     * @apioption legend.symbolRadius
     */
    /**
     * The pixel width of the legend item symbol. When the `squareSymbol`
     * option is set, this defaults to the `symbolHeight`, otherwise 16.
     *
     * Note: This option is a default source of color axis width, if the
     * [colorAxis.width](https://api.highcharts.com/highcharts/colorAxis.width)
     * option is not set.
     *
     * @productdesc {highmaps}
     * In Highmaps, when the symbol is the gradient of a horizontal color
     * axis, the width defaults to 200.
     *
     * @sample {highcharts} highcharts/legend/symbolwidth/
     *         Greater symbol width and padding
     * @sample {highmaps} maps/legend/padding-itemmargin/
     *         Padding and item margins demonstrated
     * @sample {highmaps} maps/legend/layout-vertical-sized/
     *         Sized vertical gradient
     *
     * @type      {number}
     * @apioption legend.symbolWidth
     */
    /**
     * Whether to [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
     * to render the legend item texts.
     *
     * Prior to 4.1.7, when using HTML, [legend.navigation](
     * #legend.navigation) was disabled.
     *
     * @sample highcharts/legend/scrollable-vertical/
     *         Legend with vertical scrollable extension
     * @sample highcharts/legend/scrollable-horizontal/
     *         Legend with horizontal scrollable extension
     *
     * @type      {boolean}
     * @default   false
     * @apioption legend.useHTML
     */
    /**
     * For a color axis with data classes, how many decimals to render in
     * the legend. The default preserves the decimals of the range numbers.
     *
     * @type      {number}
     * @default   -1
     * @product   highcharts highmaps
     * @apioption legend.valueDecimals
     */
    /**
     * For a color axis with data classes, a suffix for the range numbers in
     * the legend.
     *
     * @type      {string}
     * @default   ''
     * @product   highcharts highmaps
     * @apioption legend.valueSuffix
     */
    /**
     * The width of the legend box. If a number is set, it translates to
     * pixels. Since v7.0.2 it allows setting a percent string of the full
     * chart width, for example `40%`.
     *
     * Defaults to the full chart width for legends below or above the
     * chart, half the chart width for legends to the left and right.
     *
     * @sample {highcharts} highcharts/legend/width/
     *         Aligned to the plot area
     * @sample {highcharts} highcharts/legend/width-percent/
     *         A percent of the chart width
     *
     * @type      {number|string}
     * @since     2.0
     * @apioption legend.width
     */
    /**
     * The pixel padding between the legend item symbol and the legend
     * item text.
     *
     * @sample {highcharts} highcharts/legend/symbolpadding/
     *         Greater symbol width and padding
     */
    symbolPadding: 5,
    /**
     * The vertical alignment of the legend box. Can be one of `top`,
     * `middle` or `bottom`. Vertical position can be further determined
     * by the `y` option.
     *
     * In the case that the legend is aligned in a corner position, the
     * `layout` option will determine whether to place it above/below
     * or on the side of the plot area.
     *
     * When the [layout](#legend.layout) option is `proximate`, the
     * `verticalAlign` option doesn't apply.
     *
     * @sample {highcharts} highcharts/legend/verticalalign/
     *         Legend 100px from the top of the chart
     * @sample {highstock} stock/legend/align/
     *         Various legend options
     * @sample {highmaps} maps/legend/alignment/
     *         Legend alignment
     *
     * @type  {Highcharts.VerticalAlignValue}
     * @since 2.0
     */
    verticalAlign: "bottom",
    // Width: undefined,
    /**
     * The x offset of the legend relative to its horizontal alignment
     * `align` within chart.spacingLeft and chart.spacingRight. Negative
     * x moves it to the left, positive x moves it to the right.
     *
     * @sample {highcharts} highcharts/legend/width/
     *         Aligned to the plot area
     *
     * @since 2.0
     */
    x: 0,
    /**
     * The vertical offset of the legend relative to it's vertical alignment
     * `verticalAlign` within chart.spacingTop and chart.spacingBottom.
     *  Negative y moves it up, positive y moves it down.
     *
     * @sample {highcharts} highcharts/legend/verticalalign/
     *         Legend 100px from the top of the chart
     * @sample {highstock} stock/legend/align/
     *         Various legend options
     * @sample {highmaps} maps/legend/alignment/
     *         Legend alignment
     *
     * @since 2.0
     */
    y: 0,
    /**
     * A title to be added on top of the legend.
     *
     * @sample {highcharts} highcharts/legend/title/
     *         Legend title
     * @sample {highmaps} maps/legend/alignment/
     *         Legend with title
     *
     * @since 3.0
     */
    title: {
      /**
       * A text or HTML string for the title.
       *
       * @type      {string}
       * @since     3.0
       * @apioption legend.title.text
       */
      /**
       * Generic CSS styles for the legend title.
       *
       * @see In styled mode, the legend title is styled with the
       *      `.highcharts-legend-title` class.
       *
       * @type    {Highcharts.CSSObject}
       * @default {"fontSize": "0.8em", "fontWeight": "bold"}
       * @since   3.0
       */
      style: {
        /**
         * @ignore
         */
        color: "#333333",
        /**
         * @ignore
         */
        fontSize: "0.8em",
        /**
         * @ignore
         */
        fontWeight: "bold"
      }
    }
  },
  /**
   * The loading options control the appearance of the loading screen
   * that covers the plot area on chart operations. This screen only
   * appears after an explicit call to `chart.showLoading()`. It is a
   * utility for developers to communicate to the end user that something
   * is going on, for example while retrieving new data via an XHR connection.
   * The "Loading..." text itself is not part of this configuration
   * object, but part of the `lang` object.
   */
  loading: {
    /**
     * The duration in milliseconds of the fade out effect.
     *
     * @sample highcharts/loading/hideduration/
     *         Fade in and out over a second
     *
     * @type      {number}
     * @default   100
     * @since     1.2.0
     * @apioption loading.hideDuration
     */
    /**
     * The duration in milliseconds of the fade in effect.
     *
     * @sample highcharts/loading/hideduration/
     *         Fade in and out over a second
     *
     * @type      {number}
     * @default   100
     * @since     1.2.0
     * @apioption loading.showDuration
     */
    /**
     * CSS styles for the loading label `span`.
     *
     * @see In styled mode, the loading label is styled with the
     *      `.highcharts-loading-inner` class.
     *
     * @sample {highcharts|highmaps} highcharts/loading/labelstyle/
     *         Vertically centered
     * @sample {highstock} stock/loading/general/
     *         Label styles
     *
     * @type    {Highcharts.CSSObject}
     * @default {"fontWeight": "bold", "position": "relative", "top": "45%"}
     * @since   1.2.0
     */
    labelStyle: {
      /**
       * @ignore
       */
      fontWeight: "bold",
      /**
       * @ignore
       */
      position: "relative",
      /**
       * @ignore
       */
      top: "45%"
    },
    /**
     * CSS styles for the loading screen that covers the plot area.
     *
     * In styled mode, the loading label is styled with the
     * `.highcharts-loading` class.
     *
     * @sample  {highcharts|highmaps} highcharts/loading/style/
     *          Gray plot area, white text
     * @sample  {highstock} stock/loading/general/
     *          Gray plot area, white text
     *
     * @type    {Highcharts.CSSObject}
     * @default {"position": "absolute", "backgroundColor": "#ffffff", "opacity": 0.5, "textAlign": "center"}
     * @since   1.2.0
     */
    style: {
      /**
       * @ignore
       */
      position: "absolute",
      /**
       * @ignore
       */
      backgroundColor: "#ffffff",
      /**
       * @ignore
       */
      opacity: 0.5,
      /**
       * @ignore
       */
      textAlign: "center"
    }
  },
  /**
   * Options for the tooltip that appears when the user hovers over a
   * series or point.
   *
   * @declare Highcharts.TooltipOptions
   */
  tooltip: {
    /**
     * The color of the tooltip border. When `undefined`, the border takes
     * the color of the corresponding series or point.
     *
     * Note that the [borderWidth](#tooltip.borderWidth) is usually 0 by
     * default, so the border color may not be visible until a border width
     * is set.
     *
     * @sample {highcharts} highcharts/tooltip/bordercolor-default/ Follow
     *         series by default
     * @sample {highcharts} highcharts/tooltip/bordercolor-black/ Black
     *         border
     * @sample {highstock} stock/tooltip/general/ Styled tooltip
     * @sample {highmaps} maps/tooltip/background-border/ Background and
     *         border demo
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @apioption tooltip.borderColor
     */
    /**
     * A CSS class name to apply to the tooltip's container div,
     * allowing unique CSS styling for each chart.
     *
     * @type      {string}
     * @apioption tooltip.className
     */
    /**
     * Since 4.1, the crosshair definitions are moved to the Axis object
     * in order for a better separation from the tooltip. See
     * [xAxis.crosshair](#xAxis.crosshair).
     *
     * @sample {highcharts} highcharts/tooltip/crosshairs-x/
     *         Enable a crosshair for the x value
     *
     * @deprecated
     *
     * @type      {*}
     * @default   true
     * @apioption tooltip.crosshairs
     */
    /**
     * Distance from point to tooltip in pixels.
     *
     * @type      {number}
     * @default   16
     * @apioption tooltip.distance
     */
    /**
     * Whether the tooltip should be fixed to one position in the chart, or
     * located next to the point or mouse. When the tooltip is fixed, the
     * position can be further specified with the
     * [tooltip.position](#tooltip.position) options set.
     *
     * @sample    highcharts/tooltip/fixed/
     *            Fixed tooltip and position options
     * @sample    {highstock} stock/tooltip/fixed/
     *            Stock chart with fixed tooltip
     * @sample    {highmaps} maps/tooltip/fixed/
     *            Map with fixed tooltip
     *
     * @type      {boolean}
     * @default   false
     * @since 12.2.0
     * @apioption tooltip.fixed
     */
    /**
     * Whether the tooltip should follow the mouse as it moves across
     * columns, pie slices and other point types with an extent.
     * By default it behaves this way for pie, polygon, map, sankey
     * and wordcloud series by override in the `plotOptions`
     * for those series types.
     *
     * Does not apply if [split](#tooltip.split) is `true`.
     *
     * For touch moves to behave the same way, [followTouchMove](
     * #tooltip.followTouchMove) must be `true` also.
     *
     * @sample highcharts/tooltip/followpointer/
     *         Tooltip follow pointer comparison
     *
     * @type      {boolean}
     * @default   {highcharts} false
     * @default   {highstock} false
     * @default   {highmaps} true
     * @since     3.0
     * @apioption tooltip.followPointer
     */
    /**
     * Whether the tooltip should update as the finger moves on a touch
     * device. If this is `true` and [chart.panning](#chart.panning) is
     * set,`followTouchMove` will take over one-finger touches, so the user
     * needs to use two fingers for zooming and panning.
     *
     * Note the difference to [followPointer](#tooltip.followPointer) that
     * only defines the _position_ of the tooltip. If `followPointer` is
     * false in for example a column series, the tooltip will show above or
     * below the column, but as `followTouchMove` is true, the tooltip will
     * jump from column to column as the user swipes across the plot area.
     *
     * @type      {boolean}
     * @default   {highcharts} true
     * @default   {highstock} true
     * @default   {highmaps} false
     * @since     3.0.1
     * @apioption tooltip.followTouchMove
     */
    /**
     * A [format string](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting)
     * for the whole shared tooltip. When format strings are a requirement,
     * it is usually more convenient to use `headerFormat`, `pointFormat`
     * and `footerFormat`, but the `format` option allows combining them
     * into one setting.
     *
     * The context of the format string is the same as that of the
     * `tooltip.formatter` callback.
     *
     * @sample {highcharts} highcharts/tooltip/format-shared/
     *         Format for shared tooltip
     *
     * @type      {string}
     * @default   undefined
     * @since     11.1.0
     * @apioption tooltip.format
     */
    /**
     * Callback function to format the text of the tooltip from scratch. In
     * case of single or [shared](#tooltip.shared) tooltips, a string should
     * be returned. In case of [split](#tooltip.split) tooltips, it should
     * return an array where the first item is the header, and subsequent
     * items are mapped to the points. Return `false` to disable tooltip for
     * a specific point on series.
     *
     * A subset of HTML is supported. Unless `useHTML` is true, the HTML of
     * the tooltip is parsed and converted to SVG, therefore this isn't a
     * complete HTML renderer. The following HTML tags are supported: `b`,
     * `br`, `em`, `i`, `span`, `strong`. Spans can be styled with a `style`
     * attribute, but only text-related CSS, that is shared with SVG, is
     * handled.
     *
     * The context of the formatter (since v12) is the
     * [Point](https://api.highcharts.com/class-reference/Highcharts.Point)
     * instance. If the tooltip is shared or split, an array `this.points`
     * contains all points of the hovered x-value.
     *
     * Common properties from the Point to use in the formatter include:
     *
     * - **Point.percentage**:
     *   Stacked series and pies only. The point's percentage of the total.
     *
     * - **Point.points**:
     *   In a shared or split tooltip, this is an array containing all the
     *   hovered points.
     *
     * - **this.series**:
     *   The series object. The series name is available through
     *   `this.series.name`.
     *
     * - **this.total**:
     *   The total value at this point's x value in a stacked series, or the
     *   sum of all slices in a pie series.
     *
     * - **this.x**:
     *   The x value.
     *
     * - **this.y**:
     *   The y value.
     *
     * @sample {highcharts} highcharts/tooltip/formatter-simple/
     *         Simple string formatting
     * @sample {highcharts} highcharts/tooltip/formatter-shared/
     *         Formatting with shared tooltip
     * @sample {highcharts|highstock} highcharts/tooltip/formatter-split/
     *         Formatting with split tooltip
     * @sample highcharts/tooltip/formatter-conditional-default/
     *         Extending default formatter
     * @sample {highstock} stock/tooltip/formatter/
     *         Formatting with shared tooltip
     * @sample {highmaps} maps/tooltip/formatter/
     *         String formatting
     *
     * @type      {Highcharts.TooltipFormatterCallbackFunction}
     * @apioption tooltip.formatter
     */
    /**
     * Callback function to format the text of the tooltip for
     * visible null points.
     * Works analogously to [formatter](#tooltip.formatter).
     *
     * @sample highcharts/plotoptions/series-nullformat
     *         Format data label and tooltip for null point.
     *
     * @type      {Highcharts.TooltipFormatterCallbackFunction}
     * @apioption tooltip.nullFormatter
     */
    /**
     * Whether to allow the tooltip to render outside the chart's SVG
     * element box. By default (`false`), the tooltip is rendered within the
     * chart's SVG element, which results in the tooltip being aligned
     * inside the chart area. For small charts, this may result in clipping
     * or overlapping. When `true`, a separate SVG element is created and
     * overlaid on the page, allowing the tooltip to be aligned inside the
     * page itself. Beware that with this option active, CSS classes on the
     * chart's target container, with classnames matching the pattern
     * 'highcharts-*', will be set on the tooltip as well. This is done to
     * support theming for tooltips with this option.
     *
     * Defaults to `true` if `chart.scrollablePlotArea` is activated,
     * otherwise `false`.
     *
     * @sample highcharts/tooltip/outside
     *         Small charts with tooltips outside
     *
     * @type      {boolean|undefined}
     * @default   undefined
     * @since     6.1.1
     * @apioption tooltip.outside
     */
    /**
     * A callback function for formatting the HTML output for a single point
     * in the tooltip. Like the `pointFormat` string, but with more
     * flexibility.
     *
     * @type      {Highcharts.FormatterCallbackFunction<Highcharts.Point>}
     * @since     4.1.0
     * @context   Highcharts.Point
     * @apioption tooltip.pointFormatter
     */
    /**
     * A callback function to place the tooltip in a custom position. The
     * callback receives three parameters: `labelWidth`, `labelHeight` and
     * `point`, where point contains values for `plotX` and `plotY` telling
     * where the reference point is in the plot area. Add `chart.plotLeft`
     * and `chart.plotTop` to get the full coordinates.
     *
     * To find the actual hovered `Point` instance, use
     * `this.chart.hoverPoint`. For shared or split tooltips, all the hover
     * points are available in `this.chart.hoverPoints`.
     *
     * Since v7, when [tooltip.split](#tooltip.split) option is enabled,
     * positioner is called for each of the boxes separately, including
     * xAxis header. xAxis header is not a point, instead `point` argument
     * contains info: `{ plotX: Number, plotY: Number, isHeader: Boolean }`
     *
     * Since v12.2, the [tooltip.fixed](#tooltip.fixed) option combined with
     * [tooltip.position](#tooltip.position) covers most of the use cases
     * for custom tooltip positioning.
     *
     * The return should be an object containing x and y values, for example
     * `{ x: 100, y: 100 }`.
     *
     * @sample {highcharts} highcharts/tooltip/positioner/
     *         A fixed tooltip position
     * @sample {highstock} stock/tooltip/positioner/
     *         A fixed tooltip position on top of the chart
     * @sample {highmaps} maps/tooltip/positioner/
     *         A fixed tooltip position
     * @sample {highstock} stock/tooltip/split-positioner/
     *         Split tooltip with fixed positions
     * @sample {highstock} stock/tooltip/positioner-scrollable-plotarea/
     *         Scrollable plot area combined with tooltip positioner
     *
     * @see [position](#tooltip.position)
     *
     * @type      {Highcharts.TooltipPositionerCallbackFunction}
     * @since     2.2.4
     * @apioption tooltip.positioner
     */
    /**
     * Shows tooltip for all points with the same X value. Splits the
     * tooltip into one label per series, with the header close to the axis.
     * This is recommended over [shared](#tooltip.shared)
     * tooltips for charts with multiple line series, generally making them
     * easier to read. This option takes precedence over `tooltip.shared`.
     *
     * Not supported for [polar](#chart.polar) and [inverted](#chart.inverted) charts.
     *
     * @productdesc {highstock} In Highcharts Stock, tooltips are split
     * by default since v6.0.0. Stock charts typically contain
     * multi-dimension points and multiple panes, making split tooltips
     * the preferred layout over
     * the previous `shared` tooltip.
     *
     * @sample highcharts/tooltip/split/
     *         Split tooltip
     * @sample {highcharts|highstock} highcharts/tooltip/formatter-split/
     *         Split tooltip and custom formatter callback
     *
     * @type      {boolean}
     * @default   {highcharts} false
     * @default   {highstock} true
     * @since     5.0.0
     * @product   highcharts highstock
     * @apioption tooltip.split
     */
    /**
     * Prevents the tooltip from switching or closing, when touched or
     * pointed.
     *
     * @sample highcharts/tooltip/stickoncontact/
     *         Tooltip sticks on pointer contact
     *
     * @type      {boolean}
     * @since     8.0.1
     * @apioption tooltip.stickOnContact
     */
    /**
     * Use HTML to render the contents of the tooltip instead of SVG. Using
     * HTML allows advanced formatting like tables and images in the
     * tooltip. It is also recommended for rtl languages as it works around
     * rtl bugs in early Firefox.
     *
     * @sample {highcharts|highstock} highcharts/tooltip/footerformat/
     *         A table for value alignment
     * @sample {highcharts|highstock} highcharts/tooltip/fullhtml/
     *         Full HTML tooltip
     * @sample {highmaps} maps/tooltip/usehtml/
     *         Pure HTML tooltip
     *
     * @type      {boolean}
     * @default   false
     * @since     2.2
     * @apioption tooltip.useHTML
     */
    /**
     * How many decimals to show in each series' y value. This is
     * overridable in each series' tooltip options object. The default is to
     * preserve all decimals.
     *
     * @sample {highcharts|highstock} highcharts/tooltip/valuedecimals/
     *         Set decimals, prefix and suffix for the value
     * @sample {highmaps} maps/tooltip/valuedecimals/
     *         Set decimals, prefix and suffix for the value
     *
     * @type      {number|undefined}
     * @since     2.2
     * @apioption tooltip.valueDecimals
     */
    /**
     * A string to prepend to each series' y value. Overridable in each
     * series' tooltip options object.
     *
     * @sample {highcharts|highstock} highcharts/tooltip/valuedecimals/
     *         Set decimals, prefix and suffix for the value
     * @sample {highmaps} maps/tooltip/valuedecimals/
     *         Set decimals, prefix and suffix for the value
     *
     * @type      {string}
     * @since     2.2
     * @apioption tooltip.valuePrefix
     */
    /**
     * A string to append to each series' y value. Overridable in each
     * series' tooltip options object.
     *
     * @sample {highcharts|highstock} highcharts/tooltip/valuedecimals/
     *         Set decimals, prefix and suffix for the value
     * @sample {highmaps} maps/tooltip/valuedecimals/
     *         Set decimals, prefix and suffix for the value
     *
     * @type      {string}
     * @since     2.2
     * @apioption tooltip.valueSuffix
     */
    /**
     * The format for the date in the tooltip header if the X axis is a
     * datetime axis. The default is a best guess based on the smallest
     * distance between points in the chart.
     *
     * @sample {highcharts} highcharts/tooltip/xdateformat/
     *         A different format
     *
     * @type      {string|Highcharts.DateTimeFormatOptions}
     * @product   highcharts highstock gantt
     * @apioption tooltip.xDateFormat
     */
    /**
     * How many decimals to show for the `point.change`
     * or the `point.cumulativeSum` value when the `series.compare`
     * or the `series.cumulative` option is set.
     * This is overridable in each series' tooltip options object.
     *
     * @type      {number}
     * @default   2
     * @since     1.0.1
     * @product   highstock
     * @apioption tooltip.changeDecimals
     */
    /**
     * Enable or disable the tooltip.
     *
     * @sample {highcharts} highcharts/tooltip/enabled/
     *         Disabled
     * @sample {highcharts} highcharts/plotoptions/series-point-events-mouseover/
     *         Disable tooltip and show values on chart instead
     */
    enabled: !0,
    /**
     * Enable or disable animation of the tooltip.
     *
     * @type       {boolean|Partial<Highcharts.AnimationOptionsObject>}
     * @since      2.3.0
     */
    animation: {
      duration: 300,
      // EaseOutCirc
      easing: (c) => Math.sqrt(1 - Math.pow(c - 1, 2))
    },
    /**
     * The radius of the rounded border corners.
     *
     * @sample {highcharts} highcharts/tooltip/bordercolor-default/
     *         Default border radius
     * @sample {highcharts} highcharts/tooltip/borderradius-0/
     *         Square borders
     * @sample {highmaps} maps/tooltip/background-border/
     *         Background and border demo
     */
    borderRadius: 3,
    /**
     * For series on datetime axes, the date format in the tooltip's
     * header will by default be guessed based on the closest data points.
     * This member gives the default string representations used for
     * each unit. For an overview of the string or object configuration, see
     * [dateFormat](/class-reference/Highcharts.Time#dateFormat).
     *
     * @see [xAxis.dateTimeLabelFormats](#xAxis.dateTimeLabelFormats)
     *
     * @type    {Highcharts.Dictionary<string|Highcharts.DateTimeFormatOptions>}
     * @product highcharts highstock gantt
     */
    dateTimeLabelFormats: {
      /** @internal */
      millisecond: "%[AebHMSL]",
      /** @internal */
      second: "%[AebHMS]",
      /** @internal */
      minute: "%[AebHM]",
      /** @internal */
      hour: "%[AebHM]",
      /** @internal */
      day: "%[AebY]",
      /** @internal */
      week: "%v %[AebY]",
      /** @internal */
      month: "%[BY]",
      /** @internal */
      year: "%Y"
    },
    /**
     * A string to append to the tooltip format.
     *
     * @sample {highcharts} highcharts/tooltip/footerformat/
     *         A table for value alignment
     * @sample {highmaps} maps/tooltip/format/
     *         Format demo
     *
     * @since 2.2
     */
    footerFormat: "",
    /**
     * The name of a symbol to use for the border around the tooltip
     * header. Applies only when [tooltip.split](#tooltip.split) is
     * enabled.
     *
     * Custom callbacks for symbol path generation can also be added to
     * `Highcharts.SVGRenderer.prototype.symbols` the same way as for
     * [series.marker.symbol](plotOptions.line.marker.symbol).
     *
     * @see [tooltip.shape](#tooltip.shape)
     *
     * @sample {highstock} stock/tooltip/split-positioner/
     *         Different shapes for header and split boxes
     *
     * @type       {Highcharts.TooltipShapeValue}
     * @validvalue ["callout", "rect"]
     * @since      7.0
     */
    headerShape: "callout",
    /**
     * The number of milliseconds to wait until the tooltip is hidden when
     * mouse out from a point or chart.
     *
     * @since 3.0
     */
    hideDelay: 500,
    /**
     * Padding inside the tooltip, in pixels.
     *
     * @since 5.0.0
     */
    padding: 8,
    /**
     * Positioning options for fixed tooltip, taking effect only when
     * [tooltip.fixed](#tooltip.fixed) is `true`.
     *
     * @sample {highcharts} highcharts/tooltip/fixed/
     *         Fixed tooltip and position options
     * @sample {highstock} stock/tooltip/fixed/
     *         Stock chart with fixed tooltip
     * @sample {highmaps} maps/tooltip/fixed/
     *         Map with fixed tooltip
     *
     * @since 12.2.0
     */
    position: {
      /**
       * The horizontal alignment of the fixed tooltip.
       *
       * @sample highcharts/tooltip/fixed/
       *         Fixed tooltip
       * @sample {highstock} stock/tooltip/fixed/
       *         Stock chart with fixed tooltip
       *
       * @type {Highcharts.AlignValue}
       * @default left
       * @apioption tooltip.position.align
       */
      /**
       * The vertical alignment of the fixed tooltip.
       *
       * @sample highcharts/tooltip/fixed/
       *         Fixed tooltip
       * @sample {highstock} stock/tooltip/fixed/
       *         Stock chart with fixed tooltip
       *
       * @type {Highcharts.VerticalAlignValue}
       * @default top
       * @apioption tooltip.position.verticalAlign
       */
      /**
       * What the fixed tooltip alignment should be relative to.
       *
       * The default, `pane`, means that it is aligned within the plot
       * area for that given series. If the tooltip is split (as default
       * in Stock charts), each partial tooltip is aligned within the
       * series' pane.
       *
       * @sample highcharts/tooltip/fixed/
       *         Fixed tooltip
       * @sample {highstock} stock/tooltip/fixed/
       *         Stock chart with fixed tooltip
       *
       * @type {string}
       * @default pane
       * @validvalue ["pane", "chart", "plotBox", "spacingBox"]
       * @apioption tooltip.position.relativeTo
       */
      /**
       * X pixel offset from the given position. Can be used to shy away
       * from axis lines, grid lines etc to avoid the tooltip overlapping
       * other elements.
       *
       * @sample highcharts/tooltip/fixed/
       *         Fixed tooltip
       * @sample {highstock} stock/tooltip/fixed/
       *         Stock chart with fixed tooltip
       */
      x: 0,
      /**
       * Y pixel offset from the given position. Can be used to shy away
       * from axis lines, grid lines etc to avoid the tooltip overlapping
       * other elements.
       *
       * @sample highcharts/tooltip/fixed/
       *         Fixed tooltip
       * @sample {highstock} stock/tooltip/fixed/
       *         Stock chart with fixed tooltip
       */
      y: 3
    },
    /**
     * The name of a symbol to use for the border around the tooltip. Can
     * be one of: `"callout"`, `"circle"` or `"rect"`. When
     * [tooltip.split](#tooltip.split)
     * option is enabled, shape is applied to all boxes except header, which
     * is controlled by
     * [tooltip.headerShape](#tooltip.headerShape).
     *
     * Custom callbacks for symbol path generation can also be added to
     * `Highcharts.SVGRenderer.prototype.symbols` the same way as for
     * [series.marker.symbol](plotOptions.line.marker.symbol).
     *
     * Defaults to `callout` for floating tooltip, `rect` for
     * [fixed](#tooltip.fixed) tooltip.
     *
     * @type  {Highcharts.TooltipShapeValue}
     * @since 4.0
     * @default undefined
     * @apioption tooltip.shape
     */
    /**
     * Shows information in the tooltip for all points with the same X
     * value. When the tooltip is shared, the entire plot area will capture
     * mouse movement or touch events. Tooltip texts for series types with
     * ordered data (not pie, scatter, flags etc) will be shown in a single
     * bubble. This is recommended for single series charts and for
     * tablet/mobile optimized charts.
     *
     * See also [tooltip.split](#tooltip.split), that is better suited for
     * charts with many series, especially line-type series. The
     * `tooltip.split` option takes precedence over `tooltip.shared`.
     *
     * @sample {highcharts} highcharts/tooltip/shared-false/
     *         False by default
     * @sample {highcharts} highcharts/tooltip/shared-true/
     *         True
     * @sample {highcharts} highcharts/tooltip/shared-x-crosshair/
     *         True with x axis crosshair
     * @sample {highcharts} highcharts/tooltip/shared-true-mixed-types/
     *         True with mixed series types
     *
     * @since   2.1
     * @product highcharts highstock
     */
    shared: !1,
    /**
     * Proximity snap for graphs or single points. It defaults to 10 for
     * mouse-powered devices and 25 for touch devices.
     *
     * Note that in most cases the whole plot area captures the mouse
     * movement, and in these cases `tooltip.snap` doesn't make sense. This
     * applies when [stickyTracking](#plotOptions.series.stickyTracking)
     * is `true` (default) and when the tooltip is [shared](#tooltip.shared)
     * or [split](#tooltip.split).
     *
     * @sample {highcharts} highcharts/tooltip/bordercolor-default/
     *         10 px by default
     * @sample {highcharts} highcharts/tooltip/snap-50/
     *         50 px on graph
     *
     * @type    {number}
     * @default 10/25
     * @since   1.2.0
     * @product highcharts highstock
     */
    snap: Wn ? 25 : 10,
    /**
     * The HTML of the tooltip header line. The context is the
     * [Point class](https://api.highcharts.com/class-reference/Highcharts.Point).
     * Variables are enclosed in curly brackets. Examples of common
     * variables to include are `x`, `y`, `series.name` and `series.color`
     * and other properties on the same form. The `point.key` variable
     * contains the category name, x value or datetime string depending on
     * the type of axis. For datetime axes, the `point.key` date format can
     * be set using `tooltip.xDateFormat`.
     *
     * @sample {highcharts} highcharts/tooltip/footerformat/
     *         An HTML table in the tooltip
     * @sample {highstock} highcharts/tooltip/footerformat/
     *         An HTML table in the tooltip
     * @sample {highmaps} maps/tooltip/format/
     *         Format demo
     *
     * @type      {string}
     * @apioption tooltip.headerFormat
     */
    headerFormat: '<span style="font-size: 0.8em">{ucfirst point.key}</span><br/>',
    /**
     * The HTML of the null point's line in the tooltip. Works analogously
     * to [pointFormat](#tooltip.pointFormat).
     *
     * @sample {highcharts} highcharts/series/null-interaction
     *         Line chart with null interaction
     * @sample {highcharts} highcharts/plotoptions/series-nullformat
     *         Heatmap with null interaction
     *
     * @type      {string}
     * @apioption tooltip.nullFormat
     */
    /**
     * The HTML of the point's line in the tooltip. The context is the
     * [Point class](https://api.highcharts.com/class-reference/Highcharts.Point).
     * Variables are enclosed in curly brackets. Examples of common
     * variables to include are `x`, `y`, `series.name` and `series.color`
     * and other properties on the same form. Furthermore, `y` can be
     * extended by the `tooltip.valuePrefix` and `tooltip.valueSuffix`
     * variables. This can also be overridden for each series, which makes
     * it a good hook for displaying units.
     *
     * In styled mode, the dot is colored by a class name rather than the
     * point color.
     *
     * @sample {highcharts} highcharts/tooltip/pointformat/
     *         A different point format with value suffix
     * @sample {highcharts|highstock} highcharts/tooltip/pointformat-extra-information/
     *         Show extra information about points in the tooltip
     * @sample {highmaps} maps/tooltip/format/
     *         Format demo
     *
     * @type       {string}
     * @since      2.2
     * @apioption  tooltip.pointFormat
     */
    pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
    /**
     * The background color or gradient for the tooltip.
     *
     * In styled mode, the stroke width is set in the
     * `.highcharts-tooltip-box` class.
     *
     * @sample {highcharts} highcharts/tooltip/backgroundcolor-solid/
     *         Yellowish background
     * @sample {highcharts} highcharts/tooltip/backgroundcolor-gradient/
     *         Gradient
     * @sample {highcharts} highcharts/css/tooltip-border-background/
     *         Tooltip in styled mode
     * @sample {highstock} stock/tooltip/general/
     *         Custom tooltip
     * @sample {highstock} highcharts/css/tooltip-border-background/
     *         Tooltip in styled mode
     * @sample {highmaps} maps/tooltip/background-border/
     *         Background and border demo
     * @sample {highmaps} highcharts/css/tooltip-border-background/
     *         Tooltip in styled mode
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    backgroundColor: "#ffffff",
    /**
     * The pixel width of the tooltip border. Defaults to 0 for single
     * tooltips and fixed tooltips, otherwise 1 for split tooltips.
     *
     * In styled mode, the stroke width is set in the
     * `.highcharts-tooltip-box` class.
     *
     * @sample {highcharts} highcharts/tooltip/bordercolor-default/
     *         2 pixels
     * @sample {highcharts} highcharts/tooltip/borderwidth/
     *         No border (shadow only)
     * @sample {highcharts} highcharts/css/tooltip-border-background/
     *         Tooltip in styled mode
     * @sample {highstock} stock/tooltip/general/
     *         Custom tooltip
     * @sample {highstock} highcharts/css/tooltip-border-background/
     *         Tooltip in styled mode
     * @sample {highmaps} maps/tooltip/background-border/
     *         Background and border demo
     * @sample {highmaps} highcharts/css/tooltip-border-background/
     *         Tooltip in styled mode
     *
     * @type {number}
     */
    borderWidth: void 0,
    /**
     * Whether to apply a drop shadow to the tooltip. Defaults to true,
     * unless the tooltip is [fixed](#tooltip.fixed).
     *
     * @sample {highcharts} highcharts/tooltip/bordercolor-default/
     *         True by default
     * @sample {highcharts} highcharts/tooltip/shadow/
     *         False
     * @sample {highmaps} maps/tooltip/positioner/
     *         Fixed tooltip position, border and shadow disabled
     *
     * @type {boolean|Highcharts.ShadowOptionsObject}
     * @default undefined
     * @apioption tooltip.shadow
     */
    /**
     * Prevents the tooltip from switching or closing when touched or
     * pointed.
     *
     * @sample highcharts/tooltip/stickoncontact/
     *         Tooltip sticks on pointer contact
     *
     * @since 8.0.1
     */
    stickOnContact: !1,
    /**
     * CSS styles for the tooltip. The tooltip can also be styled through
     * the CSS class `.highcharts-tooltip`.
     *
     * Note that the default `pointerEvents` style makes the tooltip ignore
     * mouse events, so in order to use clickable tooltips, this value must
     * be set to `auto`.
     *
     * @sample {highcharts} highcharts/tooltip/style/
     *         Greater padding, bold text
     *
     * @type {Highcharts.CSSObject}
     */
    style: {
      /** @internal */
      color: "#333333",
      /** @internal */
      cursor: "default",
      /**
       * @type {number|string}
       */
      fontSize: "0.8em"
    },
    /**
     * Use HTML to render the contents of the tooltip instead of SVG. Using
     * HTML allows advanced formatting like tables and images in the
     * tooltip. It is also recommended for rtl languages as it works around
     * rtl bugs in early Firefox.
     *
     * @sample {highcharts|highstock} highcharts/tooltip/footerformat/
     *         A table for value alignment
     * @sample {highcharts|highstock} highcharts/tooltip/fullhtml/
     *         Full HTML tooltip
     * @sample {highmaps} maps/tooltip/usehtml/
     *         Pure HTML tooltip
     *
     * @since 2.2
     */
    useHTML: !1
  },
  /**
   * Highchart by default puts a credits label in the lower right corner
   * of the chart. This can be changed using these options.
   */
  credits: {
    /**
     * Credits for map source to be concatenated with conventional credit
     * text. By default this is a format string that collects copyright
     * information from the map if available.
     *
     * @see [mapTextFull](#credits.mapTextFull)
     * @see [text](#credits.text)
     *
     * @type      {string}
     * @default   \u00a9 <a href="{geojson.copyrightUrl}">{geojson.copyrightShort}</a>
     * @since     4.2.2
     * @product   highmaps
     * @apioption credits.mapText
     */
    /**
     * Detailed credits for map source to be displayed on hover of credits
     * text. By default this is a format string that collects copyright
     * information from the map if available.
     *
     * @see [mapText](#credits.mapText)
     * @see [text](#credits.text)
     *
     * @type      {string}
     * @default   {geojson.copyright}
     * @since     4.2.2
     * @product   highmaps
     * @apioption credits.mapTextFull
     */
    /**
     * Whether to show the credits text.
     *
     * @sample {highcharts} highcharts/credits/enabled-false/
     *         Credits disabled
     * @sample {highstock} stock/credits/enabled/
     *         Credits disabled
     * @sample {highmaps} maps/credits/enabled-false/
     *         Credits disabled
     */
    enabled: !0,
    /**
     * The URL for the credits label.
     *
     * @sample {highcharts} highcharts/credits/href/
     *         Custom URL and text
     * @sample {highmaps} maps/credits/customized/
     *         Custom URL and text
     */
    href: "https://www.highcharts.com?credits",
    /**
     * Position configuration for the credits label.
     *
     * @sample {highcharts} highcharts/credits/position-left/
     *         Left aligned
     * @sample {highcharts} highcharts/credits/position-left/
     *         Left aligned
     * @sample {highmaps} maps/credits/customized/
     *         Left aligned
     * @sample {highmaps} maps/credits/customized/
     *         Left aligned
     *
     * @type    {Highcharts.AlignObject}
     * @since   2.1
     */
    position: {
      /** @internal */
      align: "right",
      /** @internal */
      x: -10,
      /** @internal */
      verticalAlign: "bottom",
      /** @internal */
      y: -5
    },
    /**
     * CSS styles for the credits label.
     *
     * @see In styled mode, credits styles can be set with the
     *      `.highcharts-credits` class.
     *
     * @type {Highcharts.CSSObject}
     */
    style: {
      /** @internal */
      cursor: "pointer",
      /** @internal */
      color: "#999999",
      /**
       * @type {number|string}
       */
      fontSize: "0.6em"
    },
    /**
     * The text for the credits label.
     *
     * @productdesc {highmaps}
     * If a map is loaded as GeoJSON, the text defaults to
     * `Highcharts @ {map-credits}`. Otherwise, it defaults to
     * `Highcharts.com`.
     *
     * @sample {highcharts} highcharts/credits/href/
     *         Custom URL and text
     * @sample {highmaps} maps/credits/customized/
     *         Custom URL and text
     */
    text: "Highcharts.com"
  }
}, Fn = new Ar(Ni.time, Ni.lang), Dt = {
  defaultOptions: Ni,
  defaultTime: Fn
}, { addEvent: jn, isFunction: Xn, objectEach: Hn, removeEvent: Gn } = W;
var Ri;
(function(c) {
  function t(e, i) {
    e.eventOptions = e.eventOptions || {}, Hn(i.events, function(s, r) {
      e.eventOptions[r] !== s && (e.eventOptions[r] && (Gn(e, r, e.eventOptions[r]), delete e.eventOptions[r]), Xn(s) && (e.eventOptions[r] = s, jn(e, r, s, {
        order: 0
        // #14080 fire those events as firsts
      })));
    });
  }
  c.registerEventOptions = t;
})(Ri || (Ri = {}));
const Zi = Ri, { defaultOptions: Cr, defaultTime: Tr } = Dt, { pageLang: Yn } = N, { extend: Vn, getNestedProperty: Un, isArray: Kn, isNumber: hs, isObject: qn, isString: Zn, pick: _n, ucfirst: Jn } = W, Re = {
  // Built-in helpers
  add: (c, t) => c + t,
  divide: (c, t) => t !== 0 ? c / t : "",
  // eslint-disable-next-line eqeqeq
  eq: (c, t) => c == t,
  each: function(c) {
    const t = arguments[arguments.length - 1];
    return Kn(c) ? c.map((e, i) => Xe(t.body, Vn(qn(e) ? e : { "@this": e }, {
      "@index": i,
      "@first": i === 0,
      "@last": i === c.length - 1
    }))).join("") : !1;
  },
  ge: (c, t) => c >= t,
  gt: (c, t) => c > t,
  if: (c) => !!c,
  le: (c, t) => c <= t,
  lt: (c, t) => c < t,
  multiply: (c, t) => c * t,
  // eslint-disable-next-line eqeqeq
  ne: (c, t) => c != t,
  subtract: (c, t) => c - t,
  ucfirst: Jn,
  unless: (c) => !c
}, cs = {}, ds = (c) => /^["'].+["']$/.test(c);
function Qn(c, t, e) {
  return Tr.dateFormat(c, t, e);
}
function Xe(c = "", t, e) {
  const i = /\{([a-zA-Z\u00C0-\u017F\d:\.,;\-\/<>\[\]%_@+"'’= #\(\)]+)\}/g, s = /\(([a-zA-Z\u00C0-\u017F\d:\.,;\-\/<>\[\]%_@+"'= ]+)\)/g, r = [], n = /f$/, o = /\.(\d)/, a = e?.options?.lang || Cr.lang, l = e?.time || Tr, h = e?.numberFormatter || Or.bind(e), f = (x = "") => {
    let m;
    return x === "true" ? !0 : x === "false" ? !1 : (m = Number(x)).toString() === x ? m : ds(x) ? x.slice(1, -1) : Un(x, t);
  };
  let d, p, u = 0, g;
  for (; (d = i.exec(c)) !== null; ) {
    const x = d, m = s.exec(d[1]);
    m && (d = m, g = !0), p?.isBlock || (p = {
      ctx: t,
      expression: d[1],
      find: d[0],
      isBlock: d[1].charAt(0) === "#",
      start: d.index,
      startInner: d.index + d[0].length,
      length: d[0].length
    });
    const y = (p.isBlock ? x : d)[1].split(" ")[0].replace("#", "");
    Re[y] && (p.isBlock && y === p.fn && u++, p.fn || (p.fn = y));
    const b = d[1] === "else";
    if (p.isBlock && p.fn && (d[1] === `/${p.fn}` || b))
      if (u)
        b || u--;
      else {
        const v = p.startInner, S = c.substr(v, d.index - v);
        p.body === void 0 ? (p.body = S, p.startInner = d.index + d[0].length) : p.elseBody = S, p.find += S + d[0], b || (r.push(p), p = void 0);
      }
    else p.isBlock || r.push(p);
    if (m && !p?.isBlock)
      break;
  }
  return r.forEach((x) => {
    const { body: m, elseBody: y, expression: b, fn: v } = x;
    let S, w;
    if (v) {
      const k = [x], M = [], C = b.length;
      let A = 0, T;
      for (w = 0; w <= C; w++) {
        const E = b.charAt(w);
        !T && (E === '"' || E === "'") ? T = E : T === E && (T = ""), !T && (E === " " || w === C) && (M.push(b.substr(A, w - A)), A = w + 1);
      }
      for (w = Re[v].length; w--; )
        k.unshift(f(M[w + 1]));
      S = Re[v].apply(t, k), x.isBlock && typeof S == "boolean" && (S = Xe(S ? m : y, t, e));
    } else {
      const k = ds(b) ? [b] : b.split(":");
      S = f(k.shift() || "");
      const M = S % 1 !== 0;
      if (typeof S == "number" && (k.length || M)) {
        const C = k.join(":");
        if (n.test(C) || M) {
          const A = parseInt((C.match(o) || ["", "-1"])[1], 10);
          S !== null && (S = h(S, A, a.decimalPoint, C.indexOf(",") > -1 ? a.thousandsSep : ""));
        } else
          S = l.dateFormat(C, S);
      }
      s.lastIndex = 0, s.test(x.find) && Zn(S) && (S = `"${S}"`);
    }
    c = c.replace(x.find, _n(S, ""));
  }), g ? Xe(c, t, e) : c;
}
function Or(c, t, e, i) {
  c = +c || 0, t = +t;
  let s, r, [n, o] = c.toString().split("e").map(Number);
  const a = this?.options?.lang || Cr.lang, l = (c.toString().split(".")[1] || "").split("e")[0].length, h = t, f = {};
  e ?? (e = a.decimalPoint), i ?? (i = a.thousandsSep), t === -1 ? t = Math.min(l, 20) : hs(t) ? t && o < 0 && (r = t + o, r >= 0 ? (n = +n.toExponential(r).split("e")[0], t = r) : (n = Math.floor(n), t < 20 ? c = +(n * Math.pow(10, o)).toFixed(t) : c = 0, o = 0)) : t = 2, o && (t ?? (t = 2), c = n), hs(t) && t >= 0 && (f.minimumFractionDigits = t, f.maximumFractionDigits = t), i === "" && (f.useGrouping = !1);
  const d = i || e, p = d ? "en" : this?.locale || a.locale || Yn, u = JSON.stringify(f) + p;
  return s = (cs[u] ?? (cs[u] = new Intl.NumberFormat(p, f))).format(c), d && (s = s.replace(/([,\.])/g, "_$1").replace(/_\,/g, i ?? ",").replace("_.", e ?? ".")), // Remove signed zero (#20564)
  (!t && +s == 0 || // Small numbers, no decimals (#14023)
  o < 0 && !h) && (s = "0"), o && +s != 0 && (s += "e" + (o < 0 ? "" : "+") + o), s;
}
const de = {
  dateFormat: Qn,
  format: Xe,
  helpers: Re,
  numberFormat: Or
}, { deg2rad: Je } = N, { clamp: to, correctFloat: xe, defined: Qe, destroyObjectProperties: eo, extend: fs, fireEvent: Vt, getAlignFactor: io, isNumber: ye, merge: so, objectEach: ro, pick: at } = W;
class oe {
  /* *
   *
   *  Constructors
   *
   * */
  constructor(t, e, i, s, r) {
    this.isNew = !0, this.isNewLabel = !0, this.axis = t, this.pos = e, this.type = i || "", this.parameters = r || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, Vt(this, "init"), !i && !s && this.addLabel();
  }
  /* *
   *
   *  Functions
   *
   * */
  /**
   * Write the tick label.
   *
   * @private
   * @function Highcharts.Tick#addLabel
   */
  addLabel() {
    const t = this, e = t.axis, i = e.options, s = e.chart, r = e.categories, n = e.logarithmic, o = e.names, a = t.pos, l = at(t.options?.labels, i.labels), h = e.tickPositions, f = a === h[0], d = a === h[h.length - 1], p = (!l.step || l.step === 1) && e.tickInterval === 1, u = h.info;
    let g = t.label, x, m, y, b = this.parameters.category || (r ? at(r[a], o[a], a) : a);
    n && ye(b) && (b = xe(n.lin2log(b))), e.dateTime && (u ? (m = s.time.resolveDTLFormat(i.dateTimeLabelFormats[!i.grid?.enabled && u.higherRanks[a] || u.unitName]), x = m.main) : ye(b) && (x = e.dateTime.getXDateFormat(b, i.dateTimeLabelFormats || {}))), t.isFirst = f, t.isLast = d;
    const v = {
      axis: e,
      chart: s,
      dateTimeLabelFormat: x,
      isFirst: f,
      isLast: d,
      pos: a,
      tick: t,
      tickPositionInfo: u,
      value: b
    };
    Vt(this, "labelFormat", v);
    const S = (M) => l.formatter ? l.formatter.call(M, M) : l.format ? (M.text = e.defaultLabelFormatter.call(M), de.format(l.format, M, s)) : e.defaultLabelFormatter.call(M), w = S.call(v, v), k = m?.list;
    k ? t.shortenLabel = function() {
      for (y = 0; y < k.length; y++)
        if (fs(v, { dateTimeLabelFormat: k[y] }), g.attr({
          text: S.call(v, v)
        }), g.getBBox().width < e.getSlotWidth(t) - 2 * (l.padding || 0))
          return;
      g.attr({
        text: ""
      });
    } : t.shortenLabel = void 0, p && e._addedPlotLB && t.moveLabel(w, l), !Qe(g) && !t.movedLabel ? (t.label = g = t.createLabel(w, l), t.rotation = 0) : g && g.textStr !== w && !p && (g.textWidth && !l.style.width && !g.styles.width && g.css({ width: null }), g.attr({ text: w }), g.textPxLength = g.getBBox().width);
  }
  /**
   * Render and return the label of the tick.
   *
   * @private
   * @function Highcharts.Tick#createLabel
   */
  createLabel(t, e, i) {
    const s = this.axis, { renderer: r, styledMode: n } = s.chart, o = e.style.whiteSpace, a = Qe(t) && e.enabled ? r.text(t, i?.x, i?.y, e.useHTML).add(s.labelGroup) : void 0;
    return a && (n || a.css(so(e.style)), a.textPxLength = a.getBBox().width, !n && o && a.css({ whiteSpace: o })), a;
  }
  /**
   * Destructor for the tick prototype
   *
   * @private
   * @function Highcharts.Tick#destroy
   */
  destroy() {
    eo(this, this.axis);
  }
  /**
   * Gets the x and y positions for ticks in terms of pixels.
   *
   * @private
   * @function Highcharts.Tick#getPosition
   *
   * @param {boolean} horiz
   * Whether the tick is on an horizontal axis or not.
   *
   * @param {number} tickPos
   * Position of the tick.
   *
   * @param {number} tickmarkOffset
   * Tickmark offset for all ticks.
   *
   * @param {boolean} [old]
   * Whether the axis has changed or not.
   *
   * @return {Highcharts.PositionObject}
   * The tick position.
   *
   * @emits Highcharts.Tick#event:afterGetPosition
   */
  getPosition(t, e, i, s) {
    const r = this.axis, n = r.chart, o = s && n.oldChartHeight || n.chartHeight, a = {
      x: t ? xe(r.translate(e + i, void 0, void 0, s) + r.transB) : r.left + r.offset + (r.opposite ? (s && n.oldChartWidth || n.chartWidth) - r.right - r.left : 0),
      y: t ? o - r.bottom + r.offset - (r.opposite ? r.height : 0) : xe(o - r.translate(e + i, void 0, void 0, s) - r.transB)
    };
    return a.y = to(a.y, -1e9, 1e9), Vt(this, "afterGetPosition", { pos: a }), a;
  }
  /**
   * Get the x, y position of the tick label
   * @private
   */
  getLabelPosition(t, e, i, s, r, n, o, a) {
    const l = this.axis, h = l.transA, f = (
      // #7911
      l.isLinked && l.linkedParent ? l.linkedParent.reversed : l.reversed
    ), d = l.staggerLines, p = l.tickRotCorr || { x: 0, y: 0 }, u = !s && !l.reserveSpaceDefault ? -l.labelOffset * (l.labelAlign === "center" ? 0.5 : 1) : 0, g = r.distance, x = {};
    let m, y;
    return l.side === 0 ? m = i.rotation ? -g : -i.getBBox().height : l.side === 2 ? m = p.y + g : m = Math.cos(i.rotation * Je) * (p.y - i.getBBox(!1, 0).height / 2), Qe(r.y) && (m = l.side === 0 && l.horiz ? r.y + m : r.y), t = t + at(r.x, [0, 1, 0, -1][l.side] * g) + u + p.x - (n && s ? n * h * (f ? -1 : 1) : 0), e = e + m - (n && !s ? n * h * (f ? 1 : -1) : 0), d && (y = o / (a || 1) % d, l.opposite && (y = d - y - 1), e += y * (l.labelOffset / d)), x.x = t, x.y = Math.round(e), Vt(this, "afterGetLabelPosition", { pos: x, tickmarkOffset: n, index: o }), x;
  }
  /**
   * Get the offset height or width of the label
   *
   * @private
   * @function Highcharts.Tick#getLabelSize
   */
  getLabelSize() {
    return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
  }
  /**
   * Extendible method to return the path of the marker
   * @private
   */
  getMarkPath(t, e, i, s, r = !1, n) {
    return n.crispLine([[
      "M",
      t,
      e
    ], [
      "L",
      t + (r ? 0 : -i),
      e + (r ? i : 0)
    ]], s);
  }
  /**
   * Handle the label overflow by adjusting the labels to the left and right
   * edge, or hide them if they collide into the neighbour label.
   *
   * @private
   * @function Highcharts.Tick#handleOverflow
   */
  handleOverflow(t) {
    const e = this, i = this.axis, s = i.options.labels, r = t.x, n = i.chart.chartWidth, o = i.chart.spacing, a = at(i.labelLeft, Math.min(i.pos, o[3])), l = at(i.labelRight, Math.max(i.isRadial ? 0 : i.pos + i.len, n - o[1])), h = this.label, f = this.rotation, d = io(i.labelAlign || h.attr("align")), p = h.getBBox().width, u = i.getSlotWidth(e), g = d, x = {};
    let m = u, y = 1, b, v, S;
    !f && s.overflow === "justify" ? (b = r - d * p, v = r + (1 - d) * p, b < a ? m = t.x + m * (1 - d) - a : v > l && (m = l - t.x + m * d, y = -1), m = Math.min(u, m), m < u && i.labelAlign === "center" && (t.x += y * (u - m - g * (u - Math.min(p, m)))), (p > m || i.autoRotation && h?.styles?.width) && (S = m)) : f < 0 && r - d * p < a ? S = Math.round(r / Math.cos(f * Je) - a) : f > 0 && r + d * p > l && (S = Math.round((n - r) / Math.cos(f * Je))), S && h && (e.shortenLabel ? e.shortenLabel() : h.css(fs(x, {
      width: Math.floor(S) + "px",
      lineClamp: i.isRadial ? 0 : 1
    })));
  }
  /**
   * Try to replace the label if the same one already exists.
   *
   * @private
   * @function Highcharts.Tick#moveLabel
   */
  moveLabel(t, e) {
    const i = this, s = i.label, r = i.axis;
    let n = !1, o;
    s && s.textStr === t ? (i.movedLabel = s, n = !0, delete i.label) : ro(r.ticks, function(a) {
      !n && !a.isNew && a !== i && a.label && a.label.textStr === t && (i.movedLabel = a.label, n = !0, a.labelPos = i.movedLabel.xy, delete a.label);
    }), !n && (i.labelPos || s) && (o = i.labelPos || s.xy, i.movedLabel = i.createLabel(t, e, o), i.movedLabel && i.movedLabel.attr({ opacity: 0 }));
  }
  /**
   * Put everything in place
   *
   * @private
   * @param {number} index
   *
   * @param {boolean} [old]
   * Use old coordinates to prepare an animation into new position
   *
   * @param {number} [opacity]
   */
  render(t, e, i) {
    const s = this, r = s.axis, n = r.horiz, o = s.pos, a = at(s.tickmarkOffset, r.tickmarkOffset), l = s.getPosition(n, o, a, e), h = l.x, f = l.y, d = r.pos, p = d + r.len, u = n ? h : f, g = at(
      i,
      s.label?.newOpacity,
      // #15528
      1
    );
    !r.chart.polar && (xe(u) < d || u > p) && (i = 0), i ?? (i = 1), this.isActive = !0, this.renderGridLine(e, i), this.renderMark(l, i), this.renderLabel(l, e, g, t), s.isNew = !1, Vt(this, "afterRender");
  }
  /**
   * Renders the gridLine.
   *
   * @private
   * @function Highcharts.Tick#renderGridLine
   * @param {boolean} old  Whether or not the tick is old
   * @param {number} opacity  The opacity of the grid line
   */
  renderGridLine(t, e) {
    const i = this, s = i.axis, r = s.options, n = {}, o = i.pos, a = i.type, l = at(i.tickmarkOffset, s.tickmarkOffset), h = s.chart.renderer;
    let f = i.gridLine, d, p = r.gridLineWidth, u = r.gridLineColor, g = r.gridLineDashStyle;
    i.type === "minor" && (p = r.minorGridLineWidth, u = r.minorGridLineColor, g = r.minorGridLineDashStyle), f || (s.chart.styledMode || (n.stroke = u, n["stroke-width"] = p || 0, n.dashstyle = g), a || (n.zIndex = 1), t && (e = 0), i.gridLine = f = h.path().attr(n).addClass("highcharts-" + (a ? a + "-" : "") + "grid-line").add(s.gridGroup)), f && (d = s.getPlotLinePath({
      value: o + l,
      lineWidth: f.strokeWidth(),
      force: "pass",
      old: t,
      acrossPanes: !1
      // #18025
    }), d && f[t || i.isNew ? "attr" : "animate"]({
      d,
      opacity: e
    }));
  }
  /**
   * Renders the tick mark.
   *
   * @private
   * @function Highcharts.Tick#renderMark
   * @param {Highcharts.PositionObject} xy  The position vector of the mark
   * @param {number} opacity  The opacity of the mark
   */
  renderMark(t, e) {
    const i = this, s = i.axis, r = s.options, n = s.chart.renderer, o = i.type, a = s.tickSize(o ? o + "Tick" : "tick"), l = t.x, h = t.y, f = at(r[o !== "minor" ? "tickWidth" : "minorTickWidth"], !o && s.isXAxis ? 1 : 0), d = r[o !== "minor" ? "tickColor" : "minorTickColor"];
    let p = i.mark;
    const u = !p;
    a && (s.opposite && (a[0] = -a[0]), p || (i.mark = p = n.path().addClass("highcharts-" + (o ? o + "-" : "") + "tick").add(s.axisGroup), s.chart.styledMode || p.attr({
      stroke: d,
      "stroke-width": f
    })), p[u ? "attr" : "animate"]({
      d: i.getMarkPath(l, h, a[0], p.strokeWidth(), s.horiz, n),
      opacity: e
    }));
  }
  /**
   * Renders the tick label.
   * Note: The label should already be created in init(), so it should only
   * have to be moved into place.
   *
   * @private
   * @function Highcharts.Tick#renderLabel
   * @param {Highcharts.PositionObject} xy  The position vector of the label
   * @param {boolean} old  Whether or not the tick is old
   * @param {number} opacity  The opacity of the label
   * @param {number} index  The index of the tick
   */
  renderLabel(t, e, i, s) {
    const r = this, n = r.axis, o = n.horiz, a = n.options, l = r.label, h = a.labels, f = h.step, d = at(r.tickmarkOffset, n.tickmarkOffset), p = t.x, u = t.y;
    let g = !0;
    l && ye(p) && (l.xy = t = r.getLabelPosition(p, u, l, o, h, d, s, f), r.isFirst && !r.isLast && !a.showFirstLabel || r.isLast && !r.isFirst && !a.showLastLabel ? g = !1 : o && !h.step && !h.rotation && !e && i !== 0 && r.handleOverflow(t), f && s % f && (g = !1), g && ye(t.y) ? (t.opacity = i, l[r.isNewLabel ? "attr" : "animate"](t).show(!0), r.isNewLabel = !1) : (l.hide(), r.isNewLabel = !0));
  }
  /**
   * Replace labels with the moved ones to perform animation. Additionally
   * destroy unused labels.
   *
   * @private
   * @function Highcharts.Tick#replaceMovedLabel
   */
  replaceMovedLabel() {
    const t = this, e = t.label, i = t.axis;
    e && !t.isNew && (e.animate({ opacity: 0 }, void 0, e.destroy), delete t.label), i.isDirty = !0, t.label = t.movedLabel, delete t.movedLabel;
  }
}
const { animObject: no } = Et, { xAxis: ps, yAxis: oo } = Tn, { defaultOptions: zi } = Dt, { registerEventOptions: ao } = Zi, { deg2rad: lo } = N, { arrayMax: us, arrayMin: ho, clamp: ti, correctFloat: it, defined: z, destroyObjectProperties: co, erase: gs, error: ei, extend: ze, fireEvent: j, getClosestDistance: ms, insertItem: fo, isArray: xs, isNumber: P, isString: ys, merge: We, normalizeTickInterval: po, objectEach: be, pick: $, relativeLength: ve, removeEvent: uo, splat: go, syncTimeout: mo } = W, bs = (c, t) => po(t, void 0, void 0, $(
  c.options.allowDecimals,
  // If the tick interval is greater than 0.5, avoid decimals, as
  // linear axes are often used to render discrete values (#3363). If
  // a tick amount is set, allow decimals by default, as it increases
  // the chances for a good fit.
  t < 0.5 || c.tickAmount !== void 0
), !!c.tickAmount);
ze(zi, { xAxis: ps, yAxis: We(ps, oo) });
class he {
  /* *
   *
   *  Constructors
   *
   * */
  constructor(t, e, i) {
    this.init(t, e, i);
  }
  /* *
   *
   *  Functions
   *
   * */
  /**
   * Overrideable function to initialize the axis.
   *
   * @see {@link Axis}
   *
   * @function Highcharts.Axis#init
   *
   * @param {Highcharts.Chart} chart
   * The Chart instance to apply the axis on.
   *
   * @param {AxisOptions} userOptions
   * Axis options.
   *
   * @emits Highcharts.Axis#event:afterInit
   * @emits Highcharts.Axis#event:init
   */
  init(t, e, i = this.coll) {
    const s = i === "xAxis", r = this, n = r.isZAxis || (t.inverted ? !s : s);
    r.chart = t, r.horiz = n, r.isXAxis = s, r.coll = i, j(this, "init", { userOptions: e }), r.opposite = $(e.opposite, r.opposite), r.side = $(
      e.side,
      r.side,
      n ? r.opposite ? 0 : 2 : (
        // Top : bottom
        r.opposite ? 1 : 3
      )
      // Right : left
    ), r.setOptions(e);
    const o = r.options, a = o.labels;
    r.type ?? (r.type = o.type || "linear"), r.uniqueNames ?? (r.uniqueNames = o.uniqueNames ?? !0), j(r, "afterSetType"), r.userOptions = e, r.minPixelPadding = 0, r.reversed = $(o.reversed, r.reversed), r.visible = o.visible, r.zoomEnabled = o.zoomEnabled, r.hasNames = this.type === "category" || o.categories === !0, r.categories = xs(o.categories) && o.categories || (r.hasNames ? [] : void 0), r.names || (r.names = [], r.names.keys = {}), r.plotLinesAndBandsGroups = {}, r.positiveValuesOnly = !!r.logarithmic, r.isLinked = z(o.linkedTo), r.ticks = {}, r.labelEdge = [], r.minorTicks = {}, r.plotLinesAndBands = [], r.alternateBands = {}, r.len ?? (r.len = 0), r.minRange = r.userMinRange = o.minRange || o.maxZoom, r.range = o.range, r.offset = o.offset || 0, r.max = void 0, r.min = void 0;
    const l = $(o.crosshair, go(t.options.tooltip.crosshairs)[s ? 0 : 1]);
    r.crosshair = l === !0 ? {} : l, t.axes.indexOf(r) === -1 && (s ? t.axes.splice(t.xAxis.length, 0, r) : t.axes.push(r), fo(this, t[this.coll])), t.orderItems(r.coll), r.series = r.series || [], t.inverted && !r.isZAxis && s && !z(r.reversed) && (r.reversed = !0), r.labelRotation = P(a.rotation) ? a.rotation : void 0, ao(r, o), j(this, "afterInit");
  }
  /**
   * Merge and set options.
   *
   * @private
   * @function Highcharts.Axis#setOptions
   *
   * @param {Highcharts.AxisOptions} userOptions
   * Axis options.
   *
   * @emits Highcharts.Axis#event:afterSetOptions
   */
  setOptions(t) {
    const e = this.horiz ? (
      // Top and bottom axis defaults
      {
        labels: {
          autoRotation: [-45],
          padding: 3
        },
        margin: 15
      }
    ) : (
      // Left and right axis, title rotated 90 or 270 degrees
      // respectively
      {
        labels: {
          padding: 1
        },
        title: {
          rotation: 90 * this.side
        }
      }
    );
    this.options = We(
      e,
      // Merge in the default title for y-axis, which changes with
      // language settings
      this.coll === "yAxis" ? {
        title: {
          text: this.chart.options.lang.yAxisTitle
        }
      } : {},
      zi[this.coll],
      t
    ), j(this, "afterSetOptions", { userOptions: t });
  }
  /**
   * The default label formatter. The context is a special config object for
   * the label. In apps, use the
   * [labels.formatter](https://api.highcharts.com/highcharts/xAxis.labels.formatter)
   * instead, except when a modification is needed.
   *
   * @function Highcharts.Axis#defaultLabelFormatter
   *
   * @param {Highcharts.AxisLabelsFormatterContextObject} this
   * Formatter context of axis label.
   *
   * @param {Highcharts.AxisLabelsFormatterContextObject} [ctx]
   * Formatter context of axis label.
   *
   * @return {string}
   * The formatted label content.
   */
  defaultLabelFormatter() {
    const t = this.axis, e = this.chart, { numberFormatter: i } = e, s = P(this.value) ? this.value : NaN, r = t.chart.time, n = t.categories, o = this.dateTimeLabelFormat, a = zi.lang, l = a.numericSymbols, h = a.numericSymbolMagnitude || 1e3, f = t.logarithmic ? Math.abs(s) : t.tickInterval;
    let d = l?.length, p, u;
    if (n)
      u = `${this.value}`;
    else if (o)
      u = r.dateFormat(o, s, !0);
    else if (d && l && f >= 1e3)
      for (; d-- && typeof u > "u"; )
        p = Math.pow(h, d + 1), // Only accept a numeric symbol when the distance is more
        // than a full unit. So for example if the symbol is k, we
        // don't accept numbers like 0.5k.
        f >= p && // Accept one decimal before the symbol. Accepts 0.5k but
        // not 0.25k. How does this work with the previous?
        s * 10 % p === 0 && l[d] !== null && s !== 0 && (u = i(s / p, -1) + l[d]);
    return typeof u > "u" && (Math.abs(s) >= 1e4 ? u = i(s, -1) : u = i(s, -1, void 0, "")), u;
  }
  /**
   * Get the minimum and maximum for the series of each axis. The function
   * analyzes the axis series and updates `this.dataMin` and `this.dataMax`.
   *
   * @private
   * @function Highcharts.Axis#getSeriesExtremes
   *
   * @emits Highcharts.Axis#event:afterGetSeriesExtremes
   * @emits Highcharts.Axis#event:getSeriesExtremes
   */
  getSeriesExtremes() {
    const t = this;
    let e;
    j(this, "getSeriesExtremes", null, function() {
      t.hasVisibleSeries = !1, t.dataMin = t.dataMax = t.threshold = void 0, t.softThreshold = !t.isXAxis, t.series.forEach((i) => {
        if (i.reserveSpace()) {
          const s = i.options;
          let r, n = s.threshold, o, a;
          if (t.hasVisibleSeries = !0, t.positiveValuesOnly && (n || 0) <= 0 && (n = void 0), t.isXAxis)
            r = i.getColumn("x"), r.length && (r = t.logarithmic ? r.filter((l) => l > 0) : r, e = i.getXExtremes(r), o = e.min, a = e.max, !P(o) && // #5010:
            !(o instanceof Date) && (r = r.filter(P), e = i.getXExtremes(r), o = e.min, a = e.max), r.length && (t.dataMin = Math.min($(t.dataMin, o), o), t.dataMax = Math.max($(t.dataMax, a), a)));
          else {
            const l = i.applyExtremes();
            P(l.dataMin) && (o = l.dataMin, t.dataMin = Math.min($(t.dataMin, o), o)), P(l.dataMax) && (a = l.dataMax, t.dataMax = Math.max($(t.dataMax, a), a)), z(n) && (t.threshold = n), (!s.softThreshold || t.positiveValuesOnly) && (t.softThreshold = !1);
          }
        }
      });
    }), j(this, "afterGetSeriesExtremes");
  }
  /**
   * Translate from axis value to pixel position on the chart, or back. Use
   * the `toPixels` and `toValue` functions in applications.
   *
   * @private
   * @function Highcharts.Axis#translate
   */
  translate(t, e, i, s, r, n) {
    const o = this.linkedParent || this, a = s && o.old ? o.old.min : o.min;
    if (!P(a))
      return NaN;
    const l = o.minPixelPadding, h = (o.isOrdinal || o.brokenAxis?.hasBreaks || o.logarithmic && r) && !!o.lin2val;
    let f = 1, d = 0, p = s && o.old ? o.old.transA : o.transA, u = 0;
    return p || (p = o.transA), i && (f *= -1, d = o.len), o.reversed && (f *= -1, d -= f * (o.sector || o.len)), e ? (t = t * f + d, t -= l, u = t / p + a, h && (u = o.lin2val(u))) : (h && (t = o.val2lin(t)), u = f * (t - a) * p + d + f * l + (P(n) ? p * n : 0), o.isRadial || (u = it(u))), u;
  }
  /**
   * Translate a value in terms of axis units into pixels within the chart.
   *
   * @function Highcharts.Axis#toPixels
   *
   * @param {number|string} value
   * A value in terms of axis units. For datetime axes, a timestamp or
   * date/time string is accepted.
   *
   * @param {boolean} [paneCoordinates=false]
   * Whether to return the pixel coordinate relative to the chart or just the
   * axis/pane itself.
   *
   * @return {number}
   * Pixel position of the value on the chart or axis.
   */
  toPixels(t, e) {
    return this.translate(this.chart?.time.parse(t) ?? NaN, !1, !this.horiz, void 0, !0) + (e ? 0 : this.pos);
  }
  /**
   * Translate a pixel position along the axis to a value in terms of axis
   * units.
   *
   * @function Highcharts.Axis#toValue
   *
   * @param {number} pixel
   * The pixel value coordinate.
   *
   * @param {boolean} [paneCoordinates=false]
   * Whether the input pixel is relative to the chart or just the axis/pane
   * itself.
   *
   * @return {number}
   * The axis value.
   */
  toValue(t, e) {
    return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, void 0, !0);
  }
  /**
   * Create the path for a plot line that goes from the given value on
   * this axis, across the plot to the opposite side. Also used internally for
   * grid lines and crosshairs.
   *
   * @function Highcharts.Axis#getPlotLinePath
   *
   * @param {Highcharts.AxisPlotLinePathOptionsObject} options
   * Options for the path.
   *
   * @return {Highcharts.SVGPathArray|null}
   * The SVG path definition for the plot line.
   */
  getPlotLinePath(t) {
    const e = this, i = e.chart, s = e.left, r = e.top, n = t.old, o = t.value, a = t.lineWidth, l = n && i.oldChartHeight || i.chartHeight, h = n && i.oldChartWidth || i.chartWidth, f = e.transB;
    let d = t.translatedValue, p = t.force, u, g, x, m, y;
    function b(S, w, k) {
      return p !== "pass" && (S < w || S > k) && (p ? S = ti(S, w, k) : y = !0), S;
    }
    const v = {
      value: o,
      lineWidth: a,
      old: n,
      force: p,
      acrossPanes: t.acrossPanes,
      translatedValue: d
    };
    return j(this, "getPlotLinePath", v, function(S) {
      d = $(d, e.translate(o, void 0, void 0, n)), d = ti(d, -1e9, 1e9), u = x = d + f, g = m = l - d - f, P(d) ? e.horiz ? (g = r, m = l - e.bottom + (e.options.isInternal ? 0 : i.scrollablePixelsY || 0), u = x = b(u, s, s + e.width)) : (u = s, x = h - e.right + (i.scrollablePixelsX || 0), g = m = b(g, r, r + e.height)) : (y = !0, p = !1), S.path = y && !p ? void 0 : i.renderer.crispLine([["M", u, g], ["L", x, m]], a || 1);
    }), v.path;
  }
  /**
   * Internal function to get the tick positions of a linear axis to round
   * values like whole tens or every five.
   *
   * @function Highcharts.Axis#getLinearTickPositions
   *
   * @param {number} tickInterval
   * The normalized tick interval.
   *
   * @param {number} min
   * Axis minimum.
   *
   * @param {number} max
   * Axis maximum.
   *
   * @return {Array<number>}
   * An array of axis values where ticks should be placed.
   */
  getLinearTickPositions(t, e, i) {
    const s = it(Math.floor(e / t) * t), r = it(Math.ceil(i / t) * t), n = [];
    let o, a, l;
    if (it(s + t) === s && (l = 20), this.single)
      return [e];
    for (o = s; o <= r && (n.push(o), o = it(o + t, l), o !== a); )
      a = o;
    return n;
  }
  /**
   * Resolve the new minorTicks/minorTickInterval options into the legacy
   * loosely typed minorTickInterval option.
   *
   * @function Highcharts.Axis#getMinorTickInterval
   *
   * @return {number|"auto"|null}
   * Legacy option
   */
  getMinorTickInterval() {
    const { minorTicks: t, minorTickInterval: e } = this.options;
    if (t === !0)
      return $(e, "auto");
    if (t !== !1)
      return e;
  }
  /**
   * Internal function to return the minor tick positions. For logarithmic
   * axes, the same logic as for major ticks is reused.
   *
   * @function Highcharts.Axis#getMinorTickPositions
   *
   * @return {Array<number>}
   * An array of axis values where ticks should be placed.
   */
  getMinorTickPositions() {
    const t = this, e = t.options, i = t.tickPositions, s = t.minorTickInterval, r = t.pointRangePadding || 0, n = (t.min || 0) - r, o = (t.max || 0) + r, a = t.brokenAxis?.hasBreaks ? t.brokenAxis.unitLength : o - n;
    let l = [], h;
    if (a && a / s < t.len / 3) {
      const f = t.logarithmic;
      if (f)
        this.paddedTicks.forEach(function(d, p, u) {
          p && l.push.apply(l, f.getLogTickPositions(s, u[p - 1], u[p], !0));
        });
      else if (t.dateTime && this.getMinorTickInterval() === "auto")
        l = l.concat(t.getTimeTicks(t.dateTime.normalizeTimeTickInterval(s), n, o, e.startOfWeek));
      else
        for (h = n + (i[0] - n) % s; h <= o && h !== l[0]; h += s)
          l.push(h);
    }
    return l.length !== 0 && t.trimTicks(l), l;
  }
  /**
   * Adjust the min and max for the minimum range. Keep in mind that the
   * series data is not yet processed, so we don't have information on data
   * cropping and grouping, or updated `axis.pointRange` or
   * `series.pointRange`. The data can't be processed until we have finally
   * established min and max.
   *
   * @private
   * @function Highcharts.Axis#adjustForMinRange
   */
  adjustForMinRange() {
    const t = this, e = t.options, i = t.logarithmic, s = t.chart.time;
    let { max: r, min: n, minRange: o } = t, a, l, h, f, d;
    t.isXAxis && typeof o > "u" && !i && (z(e.min) || z(e.max) || z(e.floor) || z(e.ceiling) ? o = null : (h = ms(t.series.map((p) => {
      const u = p.getColumn("x");
      return p.xIncrement ? u.slice(0, 2) : u;
    })) || 0, o = Math.min(h * 5, t.dataMax - t.dataMin))), P(r) && P(n) && P(o) && r - n < o && (l = t.dataMax - t.dataMin >= o, a = (o - r + n) / 2, f = [
      n - a,
      s.parse(e.min) ?? n - a
    ], l && (f[2] = i ? i.log2lin(t.dataMin) : t.dataMin), n = us(f), d = [
      n + o,
      s.parse(e.max) ?? n + o
    ], l && (d[2] = i ? i.log2lin(t.dataMax) : t.dataMax), r = ho(d), r - n < o && (f[0] = r - o, f[1] = s.parse(e.min) ?? r - o, n = us(f))), t.minRange = o, t.min = n, t.max = r;
  }
  /**
   * Find the closestPointRange across all series, including the single data
   * series.
   *
   * @private
   * @function Highcharts.Axis#getClosest
   */
  getClosest() {
    let t, e;
    if (this.categories)
      e = 1;
    else {
      const i = [];
      this.series.forEach(function(s) {
        const r = s.closestPointRange, n = s.getColumn("x");
        n.length === 1 ? i.push(n[0]) : s.sorted && z(r) && s.reserveSpace() && (e = z(e) ? Math.min(e, r) : r);
      }), i.length && (i.sort((s, r) => s - r), t = ms([i]));
    }
    return t && e ? Math.min(t, e) : t || e;
  }
  /**
   * When a point name is given and no x, search for the name in the existing
   * categories, or if categories aren't provided, search names or create a
   * new category (#2522).
   *
   * @private
   * @function Highcharts.Axis#nameToX
   *
   * @param {Highcharts.Point} point
   * The point to inspect.
   *
   * @return {number}
   * The X value that the point is given.
   */
  nameToX(t) {
    const e = xs(this.options.categories), i = e ? this.categories : this.names;
    let s = t.options.x, r;
    return t.series.requireSorting = !1, z(s) || (s = this.uniqueNames && i ? e ? i.indexOf(t.name) : $(i.keys[t.name], -1) : t.series.autoIncrement()), s === -1 ? !e && i && (r = i.length) : P(s) && (r = s), typeof r < "u" ? (this.names[r] = t.name, this.names.keys[t.name] = r) : t.x && (r = t.x), r;
  }
  /**
   * When changes have been done to series data, update the axis.names.
   *
   * @private
   * @function Highcharts.Axis#updateNames
   */
  updateNames() {
    const t = this, e = this.names;
    e.length > 0 && (Object.keys(e.keys).forEach(function(s) {
      delete e.keys[s];
    }), e.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach((s) => {
      s.xIncrement = null, (!s.points || s.isDirtyData) && (t.max = Math.max(t.max || 0, s.dataTable.rowCount - 1), s.processData(), s.generatePoints());
      const r = s.getColumn("x").slice();
      s.data.forEach((n, o) => {
        let a = r[o];
        n?.options && typeof n.name < "u" && (a = t.nameToX(n), typeof a < "u" && a !== n.x && (r[o] = n.x = a));
      }), s.dataTable.setColumn("x", r);
    }));
  }
  /**
   * Update translation information.
   *
   * @private
   * @function Highcharts.Axis#setAxisTranslation
   *
   * @emits Highcharts.Axis#event:afterSetAxisTranslation
   */
  setAxisTranslation() {
    const t = this, e = t.max - t.min, i = t.linkedParent, s = !!t.categories, r = t.isXAxis;
    let n = t.axisPointRange || 0, o, a = 0, l = 0, h, f = t.transA;
    (r || s || n) && (o = t.getClosest(), i ? (a = i.minPointOffset, l = i.pointRangePadding) : t.series.forEach(function(d) {
      const p = s ? 1 : r ? $(d.options.pointRange, o, 0) : t.axisPointRange || 0, u = d.options.pointPlacement;
      if (n = Math.max(n, p), !t.single || s) {
        const g = d.is("xrange") ? !r : r;
        a = Math.max(a, g && ys(u) ? 0 : p / 2), l = Math.max(l, g && u === "on" ? 0 : p);
      }
    }), h = t.ordinal?.slope && o ? t.ordinal.slope / o : 1, t.minPointOffset = a = a * h, t.pointRangePadding = l = l * h, t.pointRange = Math.min(n, t.single && s ? 1 : e), r && (t.closestPointRange = o)), t.translationSlope = t.transA = f = t.staticScale || t.len / (e + l || 1), t.transB = t.horiz ? t.left : t.bottom, t.minPixelPadding = f * a, j(this, "afterSetAxisTranslation");
  }
  /**
   * @private
   * @function Highcharts.Axis#minFromRange
   */
  minFromRange() {
    const { max: t, min: e } = this;
    return P(t) && P(e) && t - e || void 0;
  }
  /**
   * Set the tick positions to round values and optionally extend the extremes
   * to the nearest tick.
   *
   * @private
   * @function Highcharts.Axis#setTickInterval
   *
   * @param {boolean} secondPass
   * TO-DO: parameter description
   *
   * @emits Highcharts.Axis#event:foundExtremes
   */
  setTickInterval(t) {
    const e = this, { categories: i, chart: s, dataMax: r, dataMin: n, dateTime: o, isXAxis: a, logarithmic: l, options: h, softThreshold: f } = e, d = s.time, p = P(e.threshold) ? e.threshold : void 0, u = e.minRange || 0, { ceiling: g, floor: x, linkedTo: m, softMax: y, softMin: b } = h, v = P(m) && s[e.coll]?.[m], S = h.tickPixelInterval;
    let w = h.maxPadding, k = h.minPadding, M = 0, C, A = P(h.tickInterval) && h.tickInterval >= 0 ? h.tickInterval : void 0, T, E, L, O;
    if (!o && !i && !v && this.getTickAmount(), L = $(e.userMin, d.parse(h.min)), O = $(e.userMax, d.parse(h.max)), v ? (e.linkedParent = v, C = v.getExtremes(), e.min = $(C.min, C.dataMin), e.max = $(C.max, C.dataMax), this.type !== v.type && ei(11, !0, s)) : (f && z(p) && P(r) && P(n) && (n >= p ? (T = p, k = 0) : r <= p && (E = p, w = 0)), e.min = $(L, T, n), e.max = $(O, E, r)), P(e.max) && P(e.min) && (l && (e.positiveValuesOnly && !t && Math.min(e.min, $(n, e.min)) <= 0 && ei(10, !0, s), e.min = it(l.log2lin(e.min), 16), e.max = it(l.log2lin(e.max), 16)), e.range && P(n) && (e.userMin = e.min = L = Math.max(n, e.minFromRange() || 0), e.userMax = O = e.max, e.range = void 0)), j(e, "foundExtremes"), e.adjustForMinRange(), P(e.min) && P(e.max)) {
      if (!P(e.userMin) && P(b) && b < e.min && (e.min = L = b), !P(e.userMax) && P(y) && y > e.max && (e.max = O = y), !i && !e.axisPointRange && !e.stacking?.usePercentage && !v && (M = e.max - e.min, M && (!z(L) && k && (e.min -= M * k), !z(O) && w && (e.max += M * w))), !P(e.userMin) && P(x) && (e.min = Math.max(e.min, x)), !P(e.userMax) && P(g) && (e.max = Math.min(e.max, g)), f && P(n) && P(r)) {
        const I = p || 0;
        !z(L) && e.min < I && n >= I ? e.min = h.minRange ? Math.min(I, e.max - u) : I : !z(O) && e.max > I && r <= I && (e.max = h.minRange ? Math.max(I, e.min + u) : I);
      }
      !s.polar && e.min > e.max && (z(h.min) ? e.max = e.min : z(h.max) && (e.min = e.max)), M = e.max - e.min;
    }
    if (e.min === e.max || !P(e.min) || !P(e.max) ? e.tickInterval = 1 : v && !A && S === v.options.tickPixelInterval ? e.tickInterval = A = v.tickInterval : e.tickInterval = $(
      A,
      this.tickAmount ? M / Math.max(this.tickAmount - 1, 1) : void 0,
      // For categorized axis, 1 is default, for linear axis use
      // tickPix
      i ? 1 : (
        // Don't let it be more than the data range
        M * S / Math.max(e.len, S)
      )
    ), a && !t) {
      const I = e.min !== e.old?.min || e.max !== e.old?.max;
      e.series.forEach(function(R) {
        R.forceCrop = R.forceCropping?.(), R.processData(I);
      }), j(this, "postProcessData", { hasExtremesChanged: I });
    }
    e.setAxisTranslation(), j(this, "initialAxisTranslation"), e.pointRange && !A && (e.tickInterval = Math.max(e.pointRange, e.tickInterval));
    const D = $(
      h.minTickInterval,
      // In datetime axes, don't go below the data interval, except when
      // there are scatter-like series involved (#13369).
      o && !e.series.some((I) => !I.sorted) ? e.closestPointRange : 0
    );
    !A && D && e.tickInterval < D && (e.tickInterval = D), !o && !l && !A && (e.tickInterval = bs(e, e.tickInterval)), this.tickAmount || (e.tickInterval = e.unsquish()), this.setTickPositions();
  }
  /**
   * Now we have computed the normalized tickInterval, get the tick positions.
   *
   * @private
   * @function Highcharts.Axis#setTickPositions
   *
   * @emits Highcharts.Axis#event:afterSetTickPositions
   */
  setTickPositions() {
    const t = this, e = this.options, i = e.tickPositions, s = e.tickPositioner, r = this.getMinorTickInterval(), n = !this.isPanning, o = n && e.startOnTick, a = n && e.endOnTick;
    let l = [], h;
    if (this.tickmarkOffset = this.categories && e.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0, this.single = this.min === this.max && z(this.min) && !this.tickAmount && // Data is on integer (#6563)
    (this.min % 1 === 0 || // Between integers and decimals are not allowed (#6274)
    e.allowDecimals !== !1), i)
      l = i.slice();
    else if (P(this.min) && P(this.max)) {
      if (!t.ordinal?.positions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200))
        l = [this.min, this.max], ei(19, !1, this.chart);
      else if (t.dateTime)
        l = t.getTimeTicks(t.dateTime.normalizeTimeTickInterval(this.tickInterval, e.units), this.min, this.max, e.startOfWeek, t.ordinal?.positions, this.closestPointRange, !0);
      else if (t.logarithmic)
        l = t.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
      else {
        const f = this.tickInterval;
        let d = f;
        for (; d <= f * 2 && (l = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && l.length > this.tickAmount); )
          this.tickInterval = bs(this, d *= 1.1);
      }
      l.length > this.len && (l = [
        l[0],
        l[l.length - 1]
      ], l[0] === l[1] && (l.length = 1)), s && (this.tickPositions = l, h = s.apply(t, [this.min, this.max]), h && (l = h));
    }
    this.tickPositions = l, this.minorTickInterval = r === "auto" && this.tickInterval ? this.tickInterval / e.minorTicksPerMajor : r, this.paddedTicks = l.slice(0), this.trimTicks(l, o, a), !this.isLinked && P(this.min) && P(this.max) && (this.single && l.length < 2 && !this.categories && !this.series.some((f) => f.is("heatmap") && f.options.pointPlacement === "between") && (this.min -= 0.5, this.max += 0.5), !i && !h && this.adjustTickAmount()), j(this, "afterSetTickPositions");
  }
  /**
   * Handle startOnTick and endOnTick by either adapting to padding min/max or
   * rounded min/max. Also handle single data points.
   *
   * @private
   * @function Highcharts.Axis#trimTicks
   *
   * @param {Array<number>} tickPositions
   * TO-DO: parameter description
   *
   * @param {boolean} [startOnTick]
   * TO-DO: parameter description
   *
   * @param {boolean} [endOnTick]
   * TO-DO: parameter description
   */
  trimTicks(t, e, i) {
    const s = t[0], r = t[t.length - 1], n = !this.isOrdinal && this.minPointOffset || 0;
    if (j(this, "trimTicks"), !this.isLinked || // Linked non-grid axes should trim ticks, #21743.
    // Grid axis has custom handling of ticks.
    !this.grid) {
      if (e && s !== -1 / 0)
        this.min = s;
      else
        for (; this.min - n > t[0]; )
          t.shift();
      if (i)
        this.max = r;
      else
        for (; this.max + n < t[t.length - 1]; )
          t.pop();
      t.length === 0 && z(s) && !this.options.tickPositions && t.push((r + s) / 2);
    }
  }
  /**
   * Check if there are multiple axes in the same pane.
   *
   * @private
   * @function Highcharts.Axis#alignToOthers
   *
   * @return {boolean|undefined}
   * True if there are other axes.
   */
  alignToOthers() {
    const t = this, e = t.chart, i = [this], s = t.options, r = e.options.chart, n = this.coll === "yAxis" && r.alignThresholds, o = [];
    let a;
    if (t.thresholdAlignment = void 0, // Only if alignTicks or alignThresholds is true
    (r.alignTicks !== !1 && s.alignTicks || n) && // Disabled when startOnTick or endOnTick are false (#7604)
    s.startOnTick !== !1 && s.endOnTick !== !1 && // Don't try to align ticks on a log axis, they are not evenly
    // spaced (#6021)
    !t.logarithmic) {
      const l = (f) => {
        const { horiz: d, options: p } = f;
        return [
          d ? p.left : p.top,
          p.width,
          p.height,
          p.pane
        ].join(",");
      }, h = l(this);
      e[this.coll].forEach(function(f) {
        const { series: d } = f;
        // #4442
        d.length && d.some((p) => p.visible) && f !== t && l(f) === h && (a = !0, i.push(f));
      });
    }
    if (a && n) {
      i.forEach((h) => {
        const f = h.getThresholdAlignment(t);
        P(f) && o.push(f);
      });
      const l = o.length > 1 ? o.reduce((h, f) => h += f, 0) / o.length : void 0;
      i.forEach((h) => {
        h.thresholdAlignment = l;
      });
    }
    return a;
  }
  /**
   * Where the axis wants its threshold, from 0 which is on `axis.min`, to 1 which
   * is on `axis.max`.
   *
   * @private
   * @function Highcharts.Axis#getThresholdAlignment
   */
  getThresholdAlignment(t) {
    if ((!P(this.dataMin) || this !== t && this.series.some((e) => e.isDirty || e.isDirtyData)) && this.getSeriesExtremes(), P(this.threshold)) {
      let e = ti((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
      return this.options.reversed && (e = 1 - e), e;
    }
  }
  /**
   * Find the max ticks of either the x and y axis collection, and record it
   * in `this.tickAmount`.
   *
   * @private
   * @function Highcharts.Axis#getTickAmount
   */
  getTickAmount() {
    const t = this, e = this.options, i = e.tickPixelInterval;
    let s = e.tickAmount;
    !z(e.tickInterval) && !s && this.len < i && !this.isRadial && !t.logarithmic && e.startOnTick && e.endOnTick && (s = 2), !s && this.alignToOthers() && (s = Math.ceil(this.len / i) + 1), s < 4 && (this.finalTickAmt = s, s = 5), this.tickAmount = s;
  }
  /**
   * When using multiple axes, adjust the number of ticks to match the highest
   * number of ticks in that group.
   *
   * @private
   * @function Highcharts.Axis#adjustTickAmount
   */
  adjustTickAmount() {
    const t = this, { finalTickAmt: e, max: i, min: s, options: r, tickPositions: n, tickAmount: o, thresholdAlignment: a } = t, l = n?.length, h = $(t.threshold, t.softThreshold ? 0 : null);
    let f, d, p = t.tickInterval, u;
    const g = () => n.push(it(n[n.length - 1] + p)), x = () => n.unshift(it(n[0] - p));
    if (P(a) && (u = a < 0.5 ? Math.ceil(a * (o - 1)) : Math.floor(a * (o - 1)), r.reversed && (u = o - 1 - u)), t.hasData() && P(s) && P(i)) {
      const m = () => {
        t.transA *= (l - 1) / (o - 1), t.min = r.startOnTick ? n[0] : Math.min(s, n[0]), t.max = r.endOnTick ? n[n.length - 1] : Math.max(i, n[n.length - 1]);
      };
      if (P(u) && P(t.threshold)) {
        for (; n[u] !== h || n.length !== o || n[0] > s || n[n.length - 1] < i; ) {
          for (n.length = 0, n.push(t.threshold); n.length < o; )
            // Start by prepending positions until the threshold
            // is at the required index...
            n[u] === void 0 || n[u] > t.threshold ? x() : g();
          if (p > t.tickInterval * 8)
            break;
          p *= 2;
        }
        m();
      } else if (l < o) {
        for (; n.length < o; )
          n.length % 2 || s === h ? g() : x();
        m();
      }
      if (z(e)) {
        for (d = f = n.length; d--; )
          // Remove every other tick
          (e === 3 && d % 2 === 1 || // Remove all but first and last
          e <= 2 && d > 0 && d < f - 1) && n.splice(d, 1);
        t.finalTickAmt = void 0;
      }
    }
  }
  /**
   * Set the scale based on data min and max, user set min and max or options.
   *
   * @private
   * @function Highcharts.Axis#setScale
   *
   * @emits Highcharts.Axis#event:afterSetScale
   */
  setScale() {
    const t = this, { coll: e, stacking: i } = t;
    let s = !1, r = !1;
    t.series.forEach((o) => {
      s = s || o.isDirtyData || o.isDirty, r = r || o.xAxis?.isDirty || !1;
    }), t.setAxisSize();
    const n = t.len !== t.old?.len;
    n || s || r || t.isLinked || t.forceRedraw || t.userMin !== t.old?.userMin || t.userMax !== t.old?.userMax || t.alignToOthers() ? (i && e === "yAxis" && i.buildStacks(), t.forceRedraw = !1, t.userMinRange || (t.minRange = void 0), t.getSeriesExtremes(), t.setTickInterval(), i && e === "xAxis" && i.buildStacks(), t.isDirty || (t.isDirty = n || t.min !== t.old?.min || t.max !== t.old?.max)) : i && i.cleanStacks(), s && delete t.allExtremes, j(this, "afterSetScale");
  }
  /**
   * Set the minimum and maximum of the axes after render time. If the
   * `startOnTick` and `endOnTick` options are true, the minimum and maximum
   * values are rounded off to the nearest tick. To prevent this, these
   * options can be set to false before calling setExtremes. Also, setExtremes
   * will not allow a range lower than the `minRange` option, which by default
   * is the range of five points.
   *
   * @sample highcharts/members/axis-setextremes/
   *         Set extremes from a button
   * @sample highcharts/members/axis-setextremes-datetime/
   *         Set extremes on a datetime axis
   * @sample highcharts/members/axis-setextremes-off-ticks/
   *         Set extremes off ticks
   * @sample stock/members/axis-setextremes/
   *         Set extremes in Highcharts Stock
   *
   * @function Highcharts.Axis#setExtremes
   *
   * @param {number|string} [newMin]
   * The new minimum value. For datetime axes, date strings are accepted.
   *
   * @param {number|string} [newMax]
   * The new maximum value. For datetime axes, date strings are accepted.
   *
   * @param {boolean} [redraw=true]
   * Whether to redraw the chart or wait for an explicit call to
   * {@link Highcharts.Chart#redraw}
   *
   * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation=true]
   * Enable or modify animations.
   *
   * @param {*} [eventArguments]
   * Arguments to be accessed in event handler.
   *
   * @emits Highcharts.Axis#event:setExtremes
   */
  setExtremes(t, e, i = !0, s, r) {
    const n = this.chart;
    this.series.forEach((o) => {
      delete o.kdTree;
    }), t = n.time.parse(t), e = n.time.parse(e), r = ze(r, { min: t, max: e }), j(this, "setExtremes", r, (o) => {
      this.userMin = o.min, this.userMax = o.max, this.eventArgs = o, i && n.redraw(s);
    });
  }
  /**
   * Update the axis metrics.
   *
   * @private
   * @function Highcharts.Axis#setAxisSize
   */
  setAxisSize() {
    const t = this.chart, e = this.options, i = e.offsets || [0, 0, 0, 0], s = this.horiz, r = this.width = Math.round(ve($(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)), n = this.height = Math.round(ve($(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)), o = this.top = Math.round(ve($(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)), a = this.left = Math.round(ve($(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft));
    this.bottom = t.chartHeight - n - o, this.right = t.chartWidth - r - a, this.len = Math.max(s ? r : n, 0), this.pos = s ? a : o;
  }
  /**
   * Get the current extremes for the axis.
   *
   * @sample highcharts/members/axis-getextremes/
   *         Report extremes by click on a button
   *
   * @function Highcharts.Axis#getExtremes
   *
   * @return {Highcharts.ExtremesObject}
   * An object containing extremes information.
   */
  getExtremes() {
    const t = this, e = t.logarithmic;
    return {
      min: e ? it(e.lin2log(t.min)) : t.min,
      max: e ? it(e.lin2log(t.max)) : t.max,
      dataMin: t.dataMin,
      dataMax: t.dataMax,
      userMin: t.userMin,
      userMax: t.userMax
    };
  }
  /**
   * Get the zero plane either based on zero or on the min or max value.
   * Used in bar and area plots.
   *
   * @function Highcharts.Axis#getThreshold
   *
   * @param {number} threshold
   * The threshold in axis values.
   *
   * @return {number}
   * The translated threshold position in terms of pixels, and corrected to
   * stay within the axis bounds.
   */
  getThreshold(t) {
    const e = this, i = e.logarithmic, s = i ? i.lin2log(e.min) : e.min, r = i ? i.lin2log(e.max) : e.max;
    return t === null || t === -1 / 0 ? t = s : t === 1 / 0 ? t = r : s > t ? t = s : r < t && (t = r), e.translate(t, 0, 1, 0, 1);
  }
  /**
   * Compute auto alignment for the axis label based on which side the axis is
   * on and the given rotation for the label.
   *
   * @private
   * @function Highcharts.Axis#autoLabelAlign
   *
   * @param {number} rotation
   * The rotation in degrees as set by either the `rotation` or `autoRotation`
   * options.
   *
   * @return {Highcharts.AlignValue}
   * Can be `"center"`, `"left"` or `"right"`.
   */
  autoLabelAlign(t) {
    const e = ($(t, 0) - this.side * 90 + 720) % 360, i = { align: "center" };
    return j(this, "autoLabelAlign", i, function(s) {
      e > 15 && e < 165 ? s.align = "right" : e > 195 && e < 345 && (s.align = "left");
    }), i.align;
  }
  /**
   * Get the tick length and width for the axis based on axis options.
   *
   * @private
   * @function Highcharts.Axis#tickSize
   *
   * @param {string} [prefix]
   * 'tick' or 'minorTick'
   *
   * @return {Array<number,number>|undefined}
   * An array of tickLength and tickWidth
   */
  tickSize(t) {
    const e = this.options, i = $(
      e[t === "tick" ? "tickWidth" : "minorTickWidth"],
      // Default to 1 on linear and datetime X axes
      t === "tick" && this.isXAxis && !this.categories ? 1 : 0
    );
    let s = e[t === "tick" ? "tickLength" : "minorTickLength"], r;
    i && s && (e[t + "Position"] === "inside" && (s = -s), r = [s, i]);
    const n = { tickSize: r };
    return j(this, "afterTickSize", n), n.tickSize;
  }
  /**
   * Return the size of the labels.
   *
   * @private
   * @function Highcharts.Axis#labelMetrics
   */
  labelMetrics() {
    const t = this.chart.renderer, e = this.ticks, i = e[Object.keys(e)[0]] || {};
    return this.chart.renderer.fontMetrics(i.label || i.movedLabel || t.box);
  }
  /**
   * Prevent the ticks from getting so close we can't draw the labels. On a
   * horizontal axis, this is handled by rotating the labels, removing ticks
   * and adding ellipsis. On a vertical axis remove ticks and add ellipsis.
   *
   * @private
   * @function Highcharts.Axis#unsquish
   */
  unsquish() {
    const t = this.options.labels, e = t.padding || 0, i = this.horiz, s = this.tickInterval, r = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / s), n = t.rotation, o = it(this.labelMetrics().h * 0.8), a = Math.max(this.max - this.min, 0), l = function(u) {
      let g = (u + 2 * e) / (r || 1);
      return g = g > 1 ? Math.ceil(g) : 1, g * s > a && u !== 1 / 0 && r !== 1 / 0 && a && (g = Math.ceil(a / s)), it(g * s);
    };
    let h = s, f, d = Number.MAX_VALUE, p;
    if (i) {
      if (t.staggerLines || (P(n) ? p = [n] : r < t.autoRotationLimit && (p = t.autoRotation)), p) {
        let u, g;
        for (const x of p)
          (x === n || x && x >= -90 && x <= 90) && (u = l(Math.abs(o / Math.sin(lo * x))), g = u + Math.abs(x / 360), g < d && (d = g, f = x, h = u));
      }
    } else
      h = l(o * 0.75);
    return this.autoRotation = p, this.labelRotation = $(f, P(n) ? n : 0), t.step ? s : h;
  }
  /**
   * Get the general slot width for labels/categories on this axis. This may
   * change between the pre-render (from Axis.getOffset) and the final tick
   * rendering and placement.
   *
   * @private
   * @function Highcharts.Axis#getSlotWidth
   *
   * @param {Highcharts.Tick} [tick] Optionally, calculate the slot width
   * basing on tick label. It is used in highcharts-3d module, where the slots
   * has different widths depending on perspective angles.
   *
   * @return {number}
   * The pixel width allocated to each axis label.
   */
  getSlotWidth(t) {
    const e = this.chart, i = this.horiz, s = this.options.labels, r = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), n = e.margin[3];
    if (t && P(t.slotWidth))
      return t.slotWidth;
    if (i && s.step < 2 && !this.isRadial)
      return s.rotation ? 0 : (this.staggerLines || 1) * this.len / r;
    if (!i) {
      const o = s.style.width;
      if (o !== void 0)
        return parseInt(String(o), 10);
      if (!this.opposite && n)
        return n - e.spacing[3];
    }
    return e.chartWidth * 0.33;
  }
  /**
   * Render the axis labels and determine whether ellipsis or rotation need to
   * be applied.
   *
   * @private
   * @function Highcharts.Axis#renderUnsquish
   */
  renderUnsquish() {
    const t = this.chart, e = t.renderer, i = this.tickPositions, s = this.ticks, r = this.options.labels, n = r.style, o = this.horiz, a = this.getSlotWidth(), l = Math.max(1, Math.round(a - (o ? 2 * (r.padding || 0) : r.distance || 0))), h = {}, f = this.labelMetrics(), d = n.lineClamp;
    let p, u = d ?? (Math.floor(this.len / (i.length * f.h)) || 1), g = 0;
    ys(r.rotation) || (h.rotation = r.rotation || 0), i.forEach(function(x) {
      const m = s[x];
      m.movedLabel && m.replaceMovedLabel();
      const y = m.label?.textPxLength || 0;
      y > g && (g = y);
    }), this.maxLabelLength = g, this.autoRotation ? g > l && g > f.h ? h.rotation = this.labelRotation : this.labelRotation = 0 : a && (p = l), h.rotation && (p = g > t.chartHeight * 0.5 ? t.chartHeight * 0.33 : g, d || (u = 1)), this.labelAlign = r.align || this.autoLabelAlign(this.labelRotation), this.labelAlign && (h.align = this.labelAlign), i.forEach(function(x) {
      const m = s[x], y = m?.label, b = n.width, v = {};
      y && (y.attr(h), m.shortenLabel ? m.shortenLabel() : p && !b && // Setting width in this case messes with the bounding box
      // (#7975)
      n.whiteSpace !== "nowrap" && // Speed optimizing, #7656
      (p < (y.textPxLength || 0) || // Resetting CSS, #4928
      y.element.tagName === "SPAN") ? y.css(ze(v, {
        width: `${p}px`,
        lineClamp: u
      })) : y.styles.width && !v.width && !b && y.css({ width: "auto" }), m.rotation = h.rotation);
    }, this), this.tickRotCorr = e.rotCorr(f.b, this.labelRotation || 0, this.side !== 0);
  }
  /**
   * Return true if the axis has associated data.
   *
   * @function Highcharts.Axis#hasData
   *
   * @return {boolean}
   * True if the axis has associated visible series and those series have
   * either valid data points or explicit `min` and `max` settings.
   */
  hasData() {
    return this.series.some(function(t) {
      return t.hasData();
    }) || this.options.showEmpty && z(this.min) && z(this.max);
  }
  /**
   * Adds the title defined in axis.options.title.
   *
   * @function Highcharts.Axis#addTitle
   *
   * @param {boolean} [display]
   * Whether or not to display the title.
   */
  addTitle(t) {
    const e = this, i = e.chart.renderer, s = e.horiz, r = e.opposite, n = e.options, o = n.title, a = e.chart.styledMode;
    let l;
    e.axisTitle || (l = o.textAlign, l || (l = (s ? {
      low: "left",
      middle: "center",
      high: "right"
    } : {
      low: r ? "right" : "left",
      middle: "center",
      high: r ? "left" : "right"
    })[o.align]), e.axisTitle = i.text(o.text || "", 0, 0, o.useHTML).attr({
      zIndex: 7,
      rotation: o.rotation || 0,
      align: l
    }).addClass("highcharts-axis-title"), a || e.axisTitle.css(We(o.style)), e.axisTitle.add(e.axisGroup), e.axisTitle.isNew = !0), !a && !o.style.width && !e.isRadial && e.axisTitle.css({
      width: e.len + "px"
    }), e.axisTitle[t ? "show" : "hide"](t);
  }
  /**
   * Generates a tick for initial positioning.
   *
   * @private
   * @function Highcharts.Axis#generateTick
   *
   * @param {number} pos
   * The tick position in axis values.
   *
   * @param {number} [i]
   * The index of the tick in {@link Axis.tickPositions}.
   */
  generateTick(t) {
    const e = this, i = e.ticks;
    i[t] ? i[t].addLabel() : i[t] = new oe(e, t);
  }
  /**
   * Create the axisGroup and gridGroup elements on first iteration.
   *
   * @private
   * @function Highcharts.Axis#getOffset
   *
   * @emits Highcharts.Axis#event:afterGetOffset
   */
  createGroups() {
    const {
      axisParent: t,
      // Used in color axis
      chart: e,
      coll: i,
      options: s
    } = this, r = e.renderer, n = (o, a, l) => r.g(o).attr({ zIndex: l }).addClass(`highcharts-${i.toLowerCase()}${a} ` + (this.isRadial ? `highcharts-radial-axis${a} ` : "") + (s.className || "")).add(t);
    this.axisGroup || (this.gridGroup = n("grid", "-grid", s.gridZIndex), this.axisGroup = n("axis", "", s.zIndex), this.labelGroup = n("axis-labels", "-labels", s.labels.zIndex));
  }
  /**
   * Render the tick labels to a preliminary position to get their sizes
   *
   * @private
   * @function Highcharts.Axis#getOffset
   *
   * @emits Highcharts.Axis#event:afterGetOffset
   */
  getOffset() {
    const t = this, { chart: e, horiz: i, options: s, side: r, ticks: n, tickPositions: o, coll: a } = t, l = e.inverted && !t.isZAxis ? [1, 0, 3, 2][r] : r, h = t.hasData(), f = s.title, d = s.labels, p = P(s.crossing), u = e.axisOffset, g = e.clipOffset, x = [-1, 1, 1, -1][r];
    let m, y = 0, b, v = 0, S = 0, w, k;
    if (t.showAxis = m = h || s.showEmpty, t.staggerLines = t.horiz && d.staggerLines || void 0, t.createGroups(), h || t.isLinked ? (o.forEach(function(M) {
      t.generateTick(M);
    }), t.renderUnsquish(), t.reserveSpaceDefault = r === 0 || r === 2 || { 1: "left", 3: "right" }[r] === t.labelAlign, $(d.reserveSpace, p ? !1 : null, t.labelAlign === "center" ? !0 : null, t.reserveSpaceDefault) && o.forEach(function(M) {
      S = Math.max(n[M].getLabelSize(), S);
    }), t.staggerLines && (S *= t.staggerLines), t.labelOffset = S * (t.opposite ? -1 : 1)) : be(n, function(M, C) {
      M.destroy(), delete n[C];
    }), f?.text && f.enabled !== !1 && (t.addTitle(m), m && !p && f.reserveSpace !== !1 && (t.titleOffset = y = t.axisTitle.getBBox()[i ? "height" : "width"], b = f.offset, v = z(b) ? 0 : $(f.margin, i ? 5 : 10))), t.renderLine(), t.offset = x * $(s.offset, u[r] ? u[r] + (s.margin || 0) : 0), t.tickRotCorr = t.tickRotCorr || { x: 0, y: 0 }, r === 0 ? k = -t.labelMetrics().h : r === 2 ? k = t.tickRotCorr.y : k = 0, w = Math.abs(S) + v, S && (w -= k, w += x * (i ? $(d.y, t.tickRotCorr.y + x * d.distance) : $(d.x, x * d.distance))), t.axisTitleMargin = $(b, w), t.getMaxLabelDimensions && (t.maxLabelDimensions = t.getMaxLabelDimensions(n, o)), a !== "colorAxis" && g) {
      const M = this.tickSize("tick");
      u[r] = Math.max(
        u[r],
        (t.axisTitleMargin || 0) + y + x * t.offset,
        w,
        // #3027
        o?.length && M ? M[0] + x * t.offset : 0
        // #4866
      );
      const C = !t.axisLine || s.offset ? 0 : (
        // #4308, #4371
        t.axisLine.strokeWidth() / 2
      );
      g[l] = Math.max(g[l], C);
    }
    j(this, "afterGetOffset");
  }
  /**
   * Internal function to get the path for the axis line. Extended for polar
   * charts.
   *
   * @function Highcharts.Axis#getLinePath
   *
   * @param {number} lineWidth
   * The line width in pixels.
   *
   * @return {Highcharts.SVGPathArray}
   * The SVG path definition in array form.
   */
  getLinePath(t) {
    const e = this.chart, i = this.opposite, s = this.offset, r = this.horiz, n = this.left + (i ? this.width : 0) + s, o = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
    return i && (t *= -1), e.renderer.crispLine([
      [
        "M",
        r ? this.left : n,
        r ? o : this.top
      ],
      [
        "L",
        r ? e.chartWidth - this.right : n,
        r ? o : e.chartHeight - this.bottom
      ]
    ], t);
  }
  /**
   * Render the axis line. Called internally when rendering and redrawing the
   * axis.
   *
   * @function Highcharts.Axis#renderLine
   */
  renderLine() {
    this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
      stroke: this.options.lineColor,
      "stroke-width": this.options.lineWidth,
      zIndex: 7
    }));
  }
  /**
   * Position the axis title.
   *
   * @private
   * @function Highcharts.Axis#getTitlePosition
   *
   * @return {Highcharts.PositionObject}
   * X and Y positions for the title.
   */
  getTitlePosition(t) {
    const e = this.horiz, i = this.left, s = this.top, r = this.len, n = this.options.title, o = e ? i : s, a = this.opposite, l = this.offset, h = n.x, f = n.y, d = this.chart.renderer.fontMetrics(t), p = t ? Math.max(t.getBBox(!1, 0).height - d.h - 1, 0) : 0, u = {
      low: o + (e ? 0 : r),
      middle: o + r / 2,
      high: o + (e ? r : 0)
    }[n.align], g = (e ? s + this.height : i) + (e ? 1 : -1) * // Horizontal axis reverses the margin
    (a ? -1 : 1) * // So does opposite axes
    (this.axisTitleMargin || 0) + [
      -p,
      // Top
      p,
      // Right
      d.f,
      // Bottom
      -p
      // Left
    ][this.side], x = {
      x: e ? u + h : g + (a ? this.width : 0) + l + h,
      y: e ? g + f - (a ? this.height : 0) + l : u + f
    };
    return j(this, "afterGetTitlePosition", { titlePosition: x }), x;
  }
  /**
   * Render a minor tick into the given position. If a minor tick already
   * exists in this position, move it.
   *
   * @function Highcharts.Axis#renderMinorTick
   *
   * @param {number} pos
   * The position in axis values.
   *
   * @param {boolean} slideIn
   * Whether the tick should animate in from last computed position
   */
  renderMinorTick(t, e) {
    const i = this, s = i.minorTicks;
    s[t] || (s[t] = new oe(i, t, "minor")), e && s[t].isNew && s[t].render(null, !0), s[t].render(null, !1, 1);
  }
  /**
   * Render a major tick into the given position. If a tick already exists
   * in this position, move it.
   *
   * @function Highcharts.Axis#renderTick
   *
   * @param {number} pos
   * The position in axis values.
   *
   * @param {number} i
   * The tick index.
   *
   * @param {boolean} slideIn
   * Whether the tick should animate in from last computed position
   */
  renderTick(t, e, i) {
    const s = this, r = s.isLinked, n = s.ticks;
    (!r || t >= s.min && t <= s.max || s.grid?.isColumn) && (n[t] || (n[t] = new oe(s, t)), i && n[t].isNew && n[t].render(e, !0, -1), n[t].render(e));
  }
  /**
   * Render the axis.
   *
   * @private
   * @function Highcharts.Axis#render
   *
   * @emits Highcharts.Axis#event:afterRender
   */
  render() {
    const t = this, e = t.chart, i = t.logarithmic, s = e.renderer, r = t.options, n = t.isLinked, o = t.tickPositions, a = t.axisTitle, l = t.ticks, h = t.minorTicks, f = t.alternateBands, d = r.stackLabels, p = r.alternateGridColor, u = r.crossing, g = t.tickmarkOffset, x = t.axisLine, m = t.showAxis, y = no(s.globalAnimation);
    let b, v;
    if (t.labelEdge.length = 0, t.overlap = !1, [l, h, f].forEach(function(S) {
      be(S, function(w) {
        w.isActive = !1;
      });
    }), P(u)) {
      const S = this.isXAxis ? e.yAxis[0] : e.xAxis[0], w = [1, -1, -1, 1][this.side];
      if (S) {
        let k = S.toPixels(u, !0);
        t.horiz && (k = S.len - k), t.offset = w * k;
      }
    }
    if (t.hasData() || n) {
      const S = t.chart.hasRendered && t.old && P(t.old.min);
      t.minorTickInterval && !t.categories && t.getMinorTickPositions().forEach(function(w) {
        t.renderMinorTick(w, S);
      }), o.length && (o.forEach(function(w, k) {
        t.renderTick(w, k, S);
      }), g && (t.min === 0 || t.single) && (l[-1] || (l[-1] = new oe(t, -1, null, !0)), l[-1].render(-1))), p && o.forEach(function(w, k) {
        v = typeof o[k + 1] < "u" ? o[k + 1] + g : t.max - g, k % 2 === 0 && w < t.max && v <= t.max + (e.polar ? -g : g) && (f[w] || (f[w] = new N.PlotLineOrBand(t, {})), b = w + g, f[w].options = {
          from: i ? i.lin2log(b) : b,
          to: i ? i.lin2log(v) : v,
          color: p,
          className: "highcharts-alternate-grid"
        }, f[w].render(), f[w].isActive = !0);
      }), t._addedPlotLB || (t._addedPlotLB = !0, (r.plotLines || []).concat(r.plotBands || []).forEach(function(w) {
        t.addPlotBandOrLine(w);
      }));
    }
    [l, h, f].forEach(function(S) {
      const w = [], k = y.duration, M = function() {
        let C = w.length;
        for (; C--; )
          S[w[C]] && !S[w[C]].isActive && (S[w[C]].destroy(), delete S[w[C]]);
      };
      be(S, function(C, A) {
        C.isActive || (C.render(A, !1, 0), C.isActive = !1, w.push(A));
      }), mo(M, S === f || !e.hasRendered || !k ? 0 : k);
    }), x && (x[x.isPlaced ? "animate" : "attr"]({
      d: this.getLinePath(x.strokeWidth())
    }), x.isPlaced = !0, x[m ? "show" : "hide"](m)), a && m && (a[a.isNew ? "attr" : "animate"](t.getTitlePosition(a)), a.isNew = !1), d?.enabled && t.stacking && t.stacking.renderStackTotals(), t.old = {
      len: t.len,
      max: t.max,
      min: t.min,
      transA: t.transA,
      userMax: t.userMax,
      userMin: t.userMin
    }, t.isDirty = !1, j(this, "afterRender");
  }
  /**
   * Redraw the axis to reflect changes in the data or axis extremes. Called
   * internally from Highcharts.Chart#redraw.
   *
   * @private
   * @function Highcharts.Axis#redraw
   */
  redraw() {
    this.visible && (this.render(), this.plotLinesAndBands.forEach(function(t) {
      t.render();
    })), this.series.forEach(function(t) {
      t.isDirty = !0;
    });
  }
  /**
   * Returns an array of axis properties, that should be untouched during
   * reinitialization.
   *
   * @private
   * @function Highcharts.Axis#getKeepProps
   */
  getKeepProps() {
    return this.keepProps || he.keepProps;
  }
  /**
   * Destroys an Axis instance. See {@link Axis#remove} for the API endpoint
   * to fully remove the axis.
   *
   * @private
   * @function Highcharts.Axis#destroy
   *
   * @param {boolean} [keepEvents]
   * Whether to preserve events, used internally in Axis.update.
   */
  destroy(t) {
    const e = this, i = e.plotLinesAndBands, s = this.eventOptions;
    if (j(this, "destroy", { keepEvents: t }), t || uo(e), [e.ticks, e.minorTicks, e.alternateBands].forEach(function(r) {
      co(r);
    }), i) {
      let r = i.length;
      for (; r--; )
        i[r].destroy();
    }
    [
      "axisLine",
      "axisTitle",
      "axisGroup",
      "gridGroup",
      "labelGroup",
      "cross",
      "scrollbar"
    ].forEach(function(r) {
      e[r] && (e[r] = e[r].destroy());
    });
    for (const r in e.plotLinesAndBandsGroups)
      e.plotLinesAndBandsGroups[r] = e.plotLinesAndBandsGroups[r].destroy();
    be(e, function(r, n) {
      e.getKeepProps().indexOf(n) === -1 && delete e[n];
    }), this.eventOptions = s;
  }
  /**
   * Internal function to draw a crosshair.
   *
   * @function Highcharts.Axis#drawCrosshair
   *
   * @param {Highcharts.PointerEventObject} [e]
   * The event arguments from the modified pointer event, extended with
   * `chartX` and `chartY`
   *
   * @param {Highcharts.Point} [point]
   * The Point object if the crosshair snaps to points.
   *
   * @emits Highcharts.Axis#event:afterDrawCrosshair
   * @emits Highcharts.Axis#event:drawCrosshair
   */
  drawCrosshair(t, e) {
    const i = this.crosshair, s = i?.snap ?? !0, r = this.chart;
    let n, o, a, l = this.cross, h;
    if (j(this, "drawCrosshair", { e: t, point: e }), t || (t = this.cross?.e), // Disabled in options
    !i || // Snap
    (z(e) || !s) === !1)
      this.hideCrosshair();
    else {
      if (s ? z(e) && (o = $(this.coll !== "colorAxis" ? e.crosshairPos : (
        // 3D axis extension
        null
      ), this.isXAxis ? e.plotX : this.len - e.plotY)) : o = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), z(o) && (h = {
        // Value, only used on radial
        value: e && (this.isXAxis ? e.x : $(e.stackY, e.y)),
        translatedValue: o
      }, r.polar && ze(h, {
        isCrosshair: !0,
        chartX: t?.chartX,
        chartY: t?.chartY,
        point: e
      }), n = this.getPlotLinePath(h) || null), !z(n)) {
        this.hideCrosshair();
        return;
      }
      a = this.categories && !this.isRadial, l || (this.cross = l = r.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (a ? "category " : "thin ") + (i.className || "")).attr({
        zIndex: $(i.zIndex, 2)
      }).add(), r.styledMode || (l.attr({
        stroke: i.color || (a ? U.parse(
          "#ccd3ff"
          /* Palette.highlightColor20 */
        ).setOpacity(0.25).get() : "#cccccc"),
        "stroke-width": $(i.width, 1)
      }).css({
        "pointer-events": "none"
      }), i.dashStyle && l.attr({
        dashstyle: i.dashStyle
      }))), l.show().attr({
        d: n
      }), a && !i.width && l.attr({
        "stroke-width": this.transA
      }), this.cross.e = t;
    }
    j(this, "afterDrawCrosshair", { e: t, point: e });
  }
  /**
   * Hide the crosshair if visible.
   *
   * @function Highcharts.Axis#hideCrosshair
   */
  hideCrosshair() {
    this.cross && this.cross.hide(), j(this, "afterHideCrosshair");
  }
  /**
   * Update an axis object with a new set of options. The options are merged
   * with the existing options, so only new or altered options need to be
   * specified.
   *
   * @sample highcharts/members/axis-update/
   *         Axis update demo
   *
   * @function Highcharts.Axis#update
   *
   * @param {Highcharts.AxisOptions} options
   * The new options that will be merged in with existing options on the axis.
   *
   * @param {boolean} [redraw=true]
   * Whether to redraw the chart after the axis is altered. If doing more
   * operations on the chart, it is a good idea to set redraw to false and
   * call {@link Chart#redraw} after.
   */
  update(t, e) {
    const i = this.chart;
    t = We(this.userOptions, t), this.destroy(!0), this.init(i, t), i.isDirtyBox = !0, $(e, !0) && i.redraw();
  }
  /**
   * Remove the axis from the chart.
   *
   * @sample highcharts/members/chart-addaxis/
   *         Add and remove axes
   *
   * @function Highcharts.Axis#remove
   *
   * @param {boolean} [redraw=true]
   * Whether to redraw the chart following the remove.
   */
  remove(t) {
    const e = this.chart, i = this.coll, s = this.series;
    let r = s.length;
    for (; r--; )
      s[r] && s[r].remove(!1);
    gs(e.axes, this), gs(e[i] || [], this), e.orderItems(i), this.destroy(), e.isDirtyBox = !0, $(t, !0) && e.redraw();
  }
  /**
   * Update the axis title by options after render time.
   *
   * @sample highcharts/members/axis-settitle/
   *         Set a new Y axis title
   *
   * @function Highcharts.Axis#setTitle
   *
   * @param {Highcharts.AxisTitleOptions} titleOptions
   * The additional title options.
   *
   * @param {boolean} [redraw=true]
   * Whether to redraw the chart after setting the title.
   */
  setTitle(t, e) {
    this.update({ title: t }, e);
  }
  /**
   * Set new axis categories and optionally redraw.
   *
   * @sample highcharts/members/axis-setcategories/
   *         Set categories by click on a button
   *
   * @function Highcharts.Axis#setCategories
   *
   * @param {Array<string>} categories
   * The new categories.
   *
   * @param {boolean} [redraw=true]
   * Whether to redraw the chart.
   */
  setCategories(t, e) {
    this.update({ categories: t }, e);
  }
}
he.keepProps = [
  "coll",
  "extKey",
  "hcEvents",
  "len",
  "names",
  "series",
  "userMax",
  "userMin"
];
var Wi;
(function(c) {
  c.rendererTypes = {};
  let t;
  function e(s = t) {
    return c.rendererTypes[s] || c.rendererTypes[t];
  }
  c.getRendererType = e;
  function i(s, r, n) {
    c.rendererTypes[s] = r, (!t || n) && (t = s, N.Renderer = r);
  }
  c.registerRendererType = i;
})(Wi || (Wi = {}));
const Lr = Wi;
var Fi;
(function(c) {
  function t(i, s, r) {
    return Array.isArray(i) ? (i.length = s, i) : i[r ? "subarray" : "slice"](0, s);
  }
  c.setLength = t;
  function e(i, s, r, n, o = []) {
    if (Array.isArray(i))
      return Array.isArray(o) || (o = Array.from(o)), {
        removed: i.splice(s, r, ...o),
        array: i
      };
    const a = Object.getPrototypeOf(i).constructor, l = i[n ? "subarray" : "slice"](s, s + r), h = i.length - r + o.length, f = new a(h);
    return f.set(i.subarray(0, s), 0), f.set(o, s), f.set(i.subarray(s + r), s + o.length), {
      removed: l,
      array: f
    };
  }
  c.splice = e;
})(Fi || (Fi = {}));
const xo = Fi, { setLength: yo, splice: vs } = xo, { fireEvent: ii, objectEach: Ut, uniqueKey: Kt } = W;
class si {
  /**
       * Constructs an instance of the DataTable class.
       *
       * @example
       * const dataTable = new Highcharts.DataTableCore({
       *   columns: {
       *     year: [2020, 2021, 2022, 2023],
       *     cost: [11, 13, 12, 14],
       *     revenue: [12, 15, 14, 18]
       *   }
       * });
  
       *
       * @param {Highcharts.DataTableOptions} [options]
       * Options to initialize the new DataTable instance.
       */
  constructor(t = {}) {
    this.autoId = !t.id, this.columns = {}, this.id = t.id || Kt(), this.modified = this, this.rowCount = 0, this.versionTag = Kt();
    let e = 0;
    Ut(t.columns || {}, (i, s) => {
      this.columns[s] = i.slice(), e = Math.max(e, i.length);
    }), this.applyRowCount(e);
  }
  /* *
   *
   *  Functions
   *
   * */
  /**
   * Applies a row count to the table by setting the `rowCount` property and
   * adjusting the length of all columns.
   *
   * @private
   * @param {number} rowCount The new row count.
   */
  applyRowCount(t) {
    this.rowCount = t, Ut(this.columns, (e, i) => {
      e.length !== t && (this.columns[i] = yo(e, t));
    });
  }
  /**
   * Delete rows. Simplified version of the full
   * `DataTable.deleteRows` method.
   *
   * @param {number} rowIndex
   * The start row index
   *
   * @param {number} [rowCount=1]
   * The number of rows to delete
   *
   * @return {void}
   *
   * @emits #afterDeleteRows
   */
  deleteRows(t, e = 1) {
    if (e > 0 && t < this.rowCount) {
      let i = 0;
      Ut(this.columns, (s, r) => {
        this.columns[r] = vs(s, t, e).array, i = s.length;
      }), this.rowCount = i;
    }
    ii(this, "afterDeleteRows", { rowIndex: t, rowCount: e }), this.versionTag = Kt();
  }
  /**
   * Fetches the given column by the canonical column name. Simplified version
   * of the full `DataTable.getRow` method, always returning by reference.
   *
   * @param {string} columnName
   * Name of the column to get.
   *
   * @return {Highcharts.DataTableColumn|undefined}
   * A copy of the column, or `undefined` if not found.
   */
  getColumn(t, e) {
    return this.columns[t];
  }
  /**
   * Retrieves all or the given columns. Simplified version of the full
   * `DataTable.getColumns` method, always returning by reference.
   *
   * @param {Array<string>} [columnNames]
   * Column names to retrieve.
   *
   * @return {Highcharts.DataTableColumnCollection}
   * Collection of columns. If a requested column was not found, it is
   * `undefined`.
   */
  getColumns(t, e) {
    return (t || Object.keys(this.columns)).reduce((i, s) => (i[s] = this.columns[s], i), {});
  }
  /**
   * Retrieves the row at a given index.
   *
   * @param {number} rowIndex
   * Row index to retrieve. First row has index 0.
   *
   * @param {Array<string>} [columnNames]
   * Column names to retrieve.
   *
   * @return {Record<string, number|string|undefined>|undefined}
   * Returns the row values, or `undefined` if not found.
   */
  getRow(t, e) {
    return (e || Object.keys(this.columns)).map((i) => this.columns[i]?.[t]);
  }
  /**
   * Sets cell values for a column. Will insert a new column, if not found.
   *
   * @param {string} columnName
   * Column name to set.
   *
   * @param {Highcharts.DataTableColumn} [column]
   * Values to set in the column.
   *
   * @param {number} [rowIndex]
   * Index of the first row to change. (Default: 0)
   *
   * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
   * Custom information for pending events.
   *
   * @emits #setColumns
   * @emits #afterSetColumns
   */
  setColumn(t, e = [], i = 0, s) {
    this.setColumns({ [t]: e }, i, s);
  }
  /**
   * Sets cell values for multiple columns. Will insert new columns, if not
   * found. Simplified version of the full `DataTableCore.setColumns`, limited
   * to full replacement of the columns (undefined `rowIndex`).
   *
   * @param {Highcharts.DataTableColumnCollection} columns
   * Columns as a collection, where the keys are the column names.
   *
   * @param {number} [rowIndex]
   * Index of the first row to change. Ignored in the `DataTableCore`, as it
   * always replaces the full column.
   *
   * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
   * Custom information for pending events.
   *
   * @emits #setColumns
   * @emits #afterSetColumns
   */
  setColumns(t, e, i) {
    let s = this.rowCount;
    Ut(t, (r, n) => {
      this.columns[n] = r.slice(), s = r.length;
    }), this.applyRowCount(s), i?.silent || (ii(this, "afterSetColumns"), this.versionTag = Kt());
  }
  /**
   * Sets cell values of a row. Will insert a new row if no index was
   * provided, or if the index is higher than the total number of table rows.
   * A simplified version of the full `DateTable.setRow`, limited to objects.
   *
   * @param {Record<string, number|string|undefined>} row
   * Cell values to set.
   *
   * @param {number} [rowIndex]
   * Index of the row to set. Leave `undefined` to add as a new row.
   *
   * @param {boolean} [insert]
   * Whether to insert the row at the given index, or to overwrite the row.
   *
   * @param {Record<string, (boolean|number|string|null|undefined)>} [eventDetail]
   * Custom information for pending events.
   *
   * @emits #afterSetRows
   */
  setRow(t, e = this.rowCount, i, s) {
    const { columns: r } = this, n = i ? this.rowCount + 1 : e + 1;
    Ut(t, (o, a) => {
      let l = r[a] || s?.addColumns !== !1 && new Array(n);
      l && (i ? l = vs(l, e, 0, !0, [o]).array : l[e] = o, r[a] = l);
    }), n > this.rowCount && this.applyRowCount(n), s?.silent || (ii(this, "afterSetRows"), this.versionTag = Kt());
  }
}
const { extend: bo, merge: vo, pick: Ss } = W;
var ji;
(function(c) {
  function t(s, r) {
    e.call(this, s, r, !0);
  }
  c.areaMarker = t;
  function e(s, r, n) {
    const o = this.legendItem = this.legendItem || {}, { chart: a, options: l } = this, { baseline: h = 0, symbolWidth: f, symbolHeight: d } = s, p = this.symbol || "circle", u = d / 2, g = a.renderer, x = o.group, m = h - Math.round((s.fontMetrics?.b || d) * // Render line and marker slightly higher to make room for the
    // area
    (n ? 0.4 : 0.3)), y = {};
    let b, v = l.marker, S = 0;
    if (a.styledMode || (y["stroke-width"] = Math.min(l.lineWidth || 0, 24), l.dashStyle ? y.dashstyle = l.dashStyle : l.linecap !== "square" && (y["stroke-linecap"] = "round")), o.line = g.path().addClass("highcharts-graph").attr(y).add(x), n && (o.area = g.path().addClass("highcharts-area").add(x)), y["stroke-linecap"] && (S = Math.min(o.line.strokeWidth(), f) / 2), f) {
      const w = [
        ["M", S, m],
        ["L", f - S, m]
      ];
      o.line.attr({ d: w }), o.area?.attr({
        d: [
          ...w,
          ["L", f - S, h],
          ["L", S, h]
        ]
      });
    }
    if (v && v.enabled !== !1 && f) {
      let w = Math.min(Ss(v.radius, u), u);
      p.indexOf("url") === 0 && (v = vo(v, {
        width: d,
        height: d
      }), w = 0), o.symbol = b = g.symbol(p, f / 2 - w, m - w, 2 * w, 2 * w, bo({ context: "legend" }, v)).addClass("highcharts-point").add(x), b.isMarker = !0;
    }
  }
  c.lineMarker = e;
  function i(s, r) {
    const n = r.legendItem || {}, o = s.options, a = s.symbolHeight, l = o.squareSymbol, h = l ? a : s.symbolWidth;
    n.symbol = this.chart.renderer.rect(
      l ? (s.symbolWidth - a) / 2 : 0,
      s.baseline - a + 1,
      // #3988
      h,
      a,
      Ss(s.options.symbolRadius, a / 2)
    ).addClass("highcharts-point").attr({
      zIndex: 3
    }).add(n.group);
  }
  c.rectangle = i;
})(ji || (ji = {}));
const So = ji, { SVG_NS: ws, win: wo } = N, { attr: Mo, createElement: ko, css: Ao, error: Ms, isFunction: Co, isString: ks, objectEach: As, splat: To } = W, { trustedTypes: ri } = wo, He = ri && Co(ri.createPolicy) && ri.createPolicy("highcharts", {
  createHTML: (c) => c
}), Oo = He ? He.createHTML("") : "";
class Y {
  /* *
   *
   *  Static Functions
   *
   * */
  /**
   * Filter an object of SVG or HTML attributes against the allow list.
   *
   * @static
   *
   * @function Highcharts.AST#filterUserAttributes
   *
   * @param {Highcharts.SVGAttributes} attributes The attributes to filter
   *
   * @return {Highcharts.SVGAttributes}
   * The filtered attributes
   */
  static filterUserAttributes(t) {
    return As(t, (e, i) => {
      let s = !0;
      Y.allowedAttributes.indexOf(i) === -1 && (s = !1), ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(i) !== -1 && (s = ks(e) && Y.allowedReferences.some((r) => e.indexOf(r) === 0)), s || (Ms(33, !1, void 0, {
        "Invalid attribute in config": `${i}`
      }), delete t[i]), ks(e) && t[i] && (t[i] = e.replace(/</g, "&lt;"));
    }), t;
  }
  static parseStyle(t) {
    return t.split(";").reduce((e, i) => {
      const s = i.split(":").map((n) => n.trim()), r = s.shift();
      return r && s.length && (e[r.replace(/-([a-z])/g, (n) => n[1].toUpperCase())] = s.join(":")), e;
    }, {});
  }
  /**
   * Utility function to set html content for an element by passing in a
   * markup string. The markup is safely parsed by the AST class to avoid
   * XSS vulnerabilities. This function should be used instead of setting
   * `innerHTML` in all cases where the content is not fully trusted.
   *
   * @static
   * @function Highcharts.AST#setElementHTML
   *
   * @param {SVGDOMElement|HTMLDOMElement} el
   * Node to set content of.
   *
   * @param {string} html
   * Markup string
   */
  static setElementHTML(t, e) {
    t.innerHTML = Y.emptyHTML, e && new Y(e).addToDOM(t);
  }
  /* *
   *
   *  Constructor
   *
   * */
  // Construct an AST from HTML markup, or wrap an array of existing AST nodes
  constructor(t) {
    this.nodes = typeof t == "string" ? this.parseMarkup(t) : t;
  }
  /* *
   *
   *  Functions
   *
   * */
  /**
   * Add the tree defined as a hierarchical JS structure to the DOM
   *
   * @function Highcharts.AST#addToDOM
   *
   * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} parent
   * The node where it should be added
   *
   * @return {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement}
   * The inserted node.
   */
  addToDOM(t) {
    function e(i, s) {
      let r;
      return To(i).forEach(function(n) {
        const o = n.tagName, a = n.textContent ? N.doc.createTextNode(n.textContent) : void 0, l = Y.bypassHTMLFiltering;
        let h;
        if (o)
          if (o === "#text")
            h = a;
          else if (Y.allowedTags.indexOf(o) !== -1 || l) {
            const f = o === "svg" ? ws : s.namespaceURI || ws, d = N.doc.createElementNS(f, o), p = n.attributes || {};
            As(n, function(u, g) {
              g !== "tagName" && g !== "attributes" && g !== "children" && g !== "style" && g !== "textContent" && (p[g] = u);
            }), Mo(d, l ? p : Y.filterUserAttributes(p)), n.style && Ao(d, n.style), a && d.appendChild(a), e(n.children || [], d), h = d;
          } else
            Ms(33, !1, void 0, {
              "Invalid tagName in config": o
            });
        h && s.appendChild(h), r = h;
      }), r;
    }
    return e(this.nodes, t);
  }
  /**
   * Parse HTML/SVG markup into AST Node objects. Used internally from the
   * constructor.
   *
   * @private
   *
   * @function Highcharts.AST#getNodesFromMarkup
   *
   * @param {string} markup The markup string.
   *
   * @return {Array<Highcharts.ASTNode>} The parsed nodes.
   */
  parseMarkup(t) {
    const e = [];
    t = t.trim().replace(/ style=(["'])/g, " data-style=$1");
    let i;
    try {
      i = new DOMParser().parseFromString(He ? He.createHTML(t) : t, "text/html");
    } catch {
    }
    if (!i) {
      const r = ko("div");
      r.innerHTML = t, i = { body: r };
    }
    const s = (r, n) => {
      const o = r.nodeName.toLowerCase(), a = {
        tagName: o
      };
      o === "#text" && (a.textContent = r.textContent || "");
      const l = r.attributes;
      if (l) {
        const h = {};
        [].forEach.call(l, (f) => {
          f.name === "data-style" ? a.style = Y.parseStyle(f.value) : h[f.name] = f.value;
        }), a.attributes = h;
      }
      if (r.childNodes.length) {
        const h = [];
        [].forEach.call(r.childNodes, (f) => {
          s(f, h);
        }), h.length && (a.children = h);
      }
      n.push(a);
    };
    return [].forEach.call(i.body.childNodes, (r) => s(r, e)), e;
  }
}
Y.allowedAttributes = [
  "alt",
  "aria-controls",
  "aria-describedby",
  "aria-expanded",
  "aria-haspopup",
  "aria-hidden",
  "aria-label",
  "aria-labelledby",
  "aria-live",
  "aria-pressed",
  "aria-readonly",
  "aria-roledescription",
  "aria-selected",
  "class",
  "clip-path",
  "color",
  "colspan",
  "cx",
  "cy",
  "d",
  "disabled",
  "dx",
  "dy",
  "fill",
  "filterUnits",
  "flood-color",
  "flood-opacity",
  "height",
  "href",
  "id",
  "in",
  "in2",
  "markerHeight",
  "markerWidth",
  "offset",
  "opacity",
  "operator",
  "orient",
  "padding",
  "paddingLeft",
  "paddingRight",
  "patternUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "result",
  "role",
  "rowspan",
  "scope",
  "slope",
  "src",
  "startOffset",
  "stdDeviation",
  "stroke-linecap",
  "stroke-width",
  "stroke",
  "style",
  "summary",
  "tabindex",
  "tableValues",
  "target",
  "text-align",
  "text-anchor",
  "textAnchor",
  "textLength",
  "title",
  "type",
  "valign",
  "width",
  "x",
  "x1",
  "x2",
  "xlink:href",
  "y",
  "y1",
  "y2",
  "zIndex"
];
Y.allowedReferences = [
  "https://",
  "http://",
  "mailto:",
  "/",
  "../",
  "./",
  "#"
];
Y.allowedTags = [
  "#text",
  "a",
  "abbr",
  "b",
  "br",
  "button",
  "caption",
  "circle",
  "clipPath",
  "code",
  "dd",
  "defs",
  "div",
  "dl",
  "dt",
  "em",
  "feComponentTransfer",
  "feComposite",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "filter",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "i",
  "img",
  "li",
  "linearGradient",
  "marker",
  "ol",
  "p",
  "path",
  "pattern",
  "pre",
  "rect",
  "small",
  "span",
  "stop",
  "strong",
  "style",
  "sub",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "text",
  "textPath",
  "th",
  "thead",
  "title",
  "tr",
  "tspan",
  "u",
  "ul"
];
Y.emptyHTML = Oo;
Y.bypassHTMLFiltering = !1;
const { animObject: Lo } = Et, { defaultOptions: Po } = Dt, { format: Eo } = de, { addEvent: Do, crisp: $o, erase: Io, extend: Se, fireEvent: ni, getNestedProperty: Bo, isArray: No, isFunction: Ro, isNumber: gt, isObject: we, merge: Cs, pick: mt, syncTimeout: zo, removeEvent: Ts, uniqueKey: Wo } = W;
class vt {
  /**
   * For categorized axes this property holds the category name for the
   * point. For other axes it holds the X value.
   *
   * @name Highcharts.Point#category
   * @type {number|string}
   */
  /**
   * The name of the point. The name can be given as the first position of the
   * point configuration array, or as a `name` property in the configuration:
   *
   * @example
   * // Array config
   * data: [
   *     ['John', 1],
   *     ['Jane', 2]
   * ]
   *
   * // Object config
   * data: [{
   *        name: 'John',
   *        y: 1
   * }, {
   *     name: 'Jane',
   *     y: 2
   * }]
   *
   * @name Highcharts.Point#name
   * @type {string}
   */
  /**
   * The point's name if it is defined, or its category in case of a category,
   * otherwise the x value. Convenient for tooltip and data label formatting.
   *
   * @name Highcharts.Point#key
   * @type {number|string}
   */
  /**
   * The point's options as applied in the initial configuration, or
   * extended through `Point.update`.
   *
   * In TypeScript you have to extend `PointOptionsObject` via an
   * additional interface to allow custom data options:
   *
   * ```
   * declare interface PointOptionsObject {
   *     customProperty: string;
   * }
   * ```
   *
   * @name Highcharts.Point#options
   * @type {Highcharts.PointOptionsObject}
   */
  /**
   * The percentage for points in a stacked series, pies or gauges.
   *
   * @name Highcharts.Point#percentage
   * @type {number|undefined}
   */
  /**
   * Array of all hovered points when using shared tooltips.
   *
   * @name Highcharts.Point#points
   * @type {Array<Highcharts.Point>|undefined}
   */
  /**
   * The series object associated with the point.
   *
   * @name Highcharts.Point#series
   * @type {Highcharts.Series}
   */
  /**
   * The attributes of the rendered SVG shape like in `column` or `pie`
   * series.
   *
   * @readonly
   * @name Highcharts.Point#shapeArgs
   * @type {Readonly<Highcharts.SVGAttributes>|undefined}
   */
  /**
   * Defines the tooltip's position for a data point in a chart. It is an
   * array of numbers representing the coordinates for the tooltip's
   * placement, allowing for precise control over its location.
   *
   * @readonly
   * @name Highcharts.Point#tooltipPos
   * @type {Readonly<Array<number>>|undefined}
   */
  /**
   * The total of values in either a stack for stacked series, or a pie in a
   * pie series.
   *
   * @name Highcharts.Point#total
   * @type {number|undefined}
   */
  /**
   * For certain series types, like pie charts, where individual points can
   * be shown or hidden.
   *
   * @name Highcharts.Point#visible
   * @type {boolean}
   * @default true
   */
  /* *
   *
   *  Functions
   *
   * */
  /**
   * Animate SVG elements associated with the point.
   *
   * @private
   * @function Highcharts.Point#animateBeforeDestroy
   */
  animateBeforeDestroy() {
    const t = this, e = { x: t.startXPos, opacity: 0 }, i = t.getGraphicalProps();
    i.singular.forEach(function(s) {
      const r = s === "dataLabel";
      t[s] = t[s].animate(r ? {
        x: t[s].startXPos,
        y: t[s].startYPos,
        opacity: 0
      } : e);
    }), i.plural.forEach(function(s) {
      t[s].forEach(function(r) {
        r.element && r.animate(Se({ x: t.startXPos }, r.startYPos ? {
          x: r.startXPos,
          y: r.startYPos
        } : {}));
      });
    });
  }
  /**
   * Apply the options containing the x and y data and possible some extra
   * properties. Called on point init or from point.update.
   *
   * @private
   * @function Highcharts.Point#applyOptions
   *
   * @param {Highcharts.PointOptionsType} options
   *        The point options as defined in series.data.
   *
   * @param {number} [x]
   *        Optionally, the x value.
   *
   * @return {Highcharts.Point}
   *         The Point instance.
   */
  applyOptions(t, e) {
    const i = this, s = i.series, r = s.options.pointValKey || s.pointValKey;
    return t = vt.prototype.optionsToObject.call(this, t), Se(i, t), i.options = i.options ? Se(i.options, t) : t, t.group && delete i.group, t.dataLabels && delete i.dataLabels, r && (i.y = vt.prototype.getNestedProperty.call(i, r)), i.selected && (i.state = "select"), "name" in i && typeof e > "u" && s.xAxis && s.xAxis.hasNames && (i.x = s.xAxis.nameToX(i)), typeof i.x > "u" && s ? i.x = e ?? s.autoIncrement() : gt(t.x) && s.options.relativeXValue ? i.x = s.autoIncrement(t.x) : typeof i.x == "string" && (e ?? (e = s.chart.time.parse(i.x)), gt(e) && (i.x = e)), i.isNull = this.isValid && !this.isValid(), i.formatPrefix = i.isNull ? "null" : "point", i;
  }
  /**
   * Destroy a point to clear memory. Its reference still stays in
   * `series.data`.
   *
   * @private
   * @function Highcharts.Point#destroy
   */
  destroy() {
    if (!this.destroyed) {
      const t = this, e = t.series, i = e.chart, s = e.options.dataSorting, r = i.hoverPoints, n = t.series.chart.renderer.globalAnimation, o = Lo(n), a = () => {
        (t.graphic || t.graphics || t.dataLabel || t.dataLabels) && (Ts(t), t.destroyElements());
        for (const l in t)
          delete t[l];
      };
      t.legendItem && i.legend.destroyItem(t), r && (t.setState(), Io(r, t), r.length || (i.hoverPoints = null)), t === i.hoverPoint && t.onMouseOut(), s?.enabled ? (this.animateBeforeDestroy(), zo(a, o.duration)) : a(), i.pointCount--;
    }
    this.destroyed = !0;
  }
  /**
   * Destroy SVG elements associated with the point.
   *
   * @private
   * @function Highcharts.Point#destroyElements
   * @param {Highcharts.Dictionary<number>} [kinds]
   */
  destroyElements(t) {
    const e = this, i = e.getGraphicalProps(t);
    i.singular.forEach(function(s) {
      e[s] = e[s].destroy();
    }), i.plural.forEach(function(s) {
      e[s].forEach(function(r) {
        r?.element && r.destroy();
      }), delete e[s];
    });
  }
  /**
   * Fire an event on the Point object.
   *
   * @private
   * @function Highcharts.Point#firePointEvent
   *
   * @param {string} eventType
   *        Type of the event.
   *
   * @param {Highcharts.Dictionary<any>|Event} [eventArgs]
   *        Additional event arguments.
   *
   * @param {Highcharts.EventCallbackFunction<Highcharts.Point>|Function} [defaultFunction]
   *        Default event handler.
   *
   * @emits Highcharts.Point#event:*
   */
  firePointEvent(t, e, i) {
    const s = this, r = this.series, n = r.options;
    s.manageEvent(t), t === "click" && n.allowPointSelect && (i = function(o) {
      !s.destroyed && s.select && s.select(null, o.ctrlKey || o.metaKey || o.shiftKey);
    }), ni(s, t, e, i);
  }
  /**
   * Get the CSS class names for individual points. Used internally where the
   * returned value is set on every point.
   *
   * @function Highcharts.Point#getClassName
   *
   * @return {string}
   *         The class names.
   */
  getClassName() {
    const t = this;
    return "highcharts-point" + (t.selected ? " highcharts-point-select" : "") + (t.negative ? " highcharts-negative" : "") + (t.isNull ? " highcharts-null-point" : "") + (typeof t.colorIndex < "u" ? " highcharts-color-" + t.colorIndex : "") + (t.options.className ? " " + t.options.className : "") + (t.zone?.className ? " " + t.zone.className.replace("highcharts-negative", "") : "");
  }
  /**
   * Get props of all existing graphical point elements.
   *
   * @private
   * @function Highcharts.Point#getGraphicalProps
   */
  getGraphicalProps(t) {
    const e = this, i = [], s = { singular: [], plural: [] };
    let r, n;
    for (t = t || { graphic: 1, dataLabel: 1 }, t.graphic && i.push(
      "graphic",
      "connector"
      // Used by dumbbell
    ), t.dataLabel && i.push("dataLabel", "dataLabelPath", "dataLabelUpper"), n = i.length; n--; )
      r = i[n], e[r] && s.singular.push(r);
    return [
      "graphic",
      "dataLabel"
    ].forEach(function(o) {
      const a = o + "s";
      t[o] && e[a] && s.plural.push(a);
    }), s;
  }
  /**
   * Returns the value of the point property for a given value.
   * @private
   */
  getNestedProperty(t) {
    if (t)
      return t.indexOf("custom.") === 0 ? Bo(t, this.options) : this[t];
  }
  /**
   * In a series with `zones`, return the zone that the point belongs to.
   *
   * @function Highcharts.Point#getZone
   *
   * @return {Highcharts.SeriesZonesOptionsObject}
   *         The zone item.
   */
  getZone() {
    const t = this.series, e = t.zones, i = t.zoneAxis || "y";
    let s, r = 0;
    for (s = e[r]; this[i] >= s.value; )
      s = e[++r];
    return this.nonZonedColor || (this.nonZonedColor = this.color), s?.color && !this.options.color ? this.color = s.color : this.color = this.nonZonedColor, s;
  }
  /**
   * Utility to check if point has new shape type. Used in column series and
   * all others that are based on column series.
   * @private
   */
  hasNewShapeType() {
    const t = this;
    return (t.graphic && (t.graphic.symbolName || t.graphic.element.nodeName)) !== this.shapeType;
  }
  /**
   * Initialize the point. Called internally based on the `series.data`
   * option.
   *
   * @function Highcharts.Point#init
   *
   * @param {Highcharts.Series} series
   *        The series object containing this point.
   *
   * @param {Highcharts.PointOptionsType} options
   *        The data in either number, array or object format.
   *
   * @param {number} [x]
   *        Optionally, the X value of the point.
   *
   * @return {Highcharts.Point}
   *         The Point instance.
   *
   * @emits Highcharts.Point#event:afterInit
   */
  constructor(t, e, i) {
    this.formatPrefix = "point", this.visible = !0, this.point = this, this.series = t, this.applyOptions(e, i), this.id ?? (this.id = Wo()), this.resolveColor(), this.dataLabelOnNull ?? (this.dataLabelOnNull = t.options.nullInteraction), t.chart.pointCount++, ni(this, "afterInit");
  }
  /**
   * Determine if point is valid.
   * @private
   * @function Highcharts.Point#isValid
   */
  isValid() {
    return (gt(this.x) || this.x instanceof Date) && gt(this.y);
  }
  /**
   * Transform number or array configs into objects. Also called for object
   * configs. Used internally to unify the different configuration formats for
   * points. For example, a simple number `10` in a line series will be
   * transformed to `{ y: 10 }`, and an array config like `[1, 10]` in a
   * scatter series will be transformed to `{ x: 1, y: 10 }`.
   *
   * @function Highcharts.Point#optionsToObject
   *
   * @param {Highcharts.PointOptionsType} options
   * Series data options.
   *
   * @return {Highcharts.Dictionary<*>}
   * Transformed point options.
   */
  optionsToObject(t) {
    const e = this.series, i = e.options.keys, s = i || e.pointArrayMap || ["y"], r = s.length;
    let n = {}, o, a = 0, l = 0;
    if (gt(t) || t === null)
      n[s[0]] = t;
    else if (No(t))
      for (!i && t.length > r && (o = typeof t[0], o === "string" ? e.xAxis?.dateTime ? n.x = e.chart.time.parse(t[0]) : n.name = t[0] : o === "number" && (n.x = t[0]), a++); l < r; )
        (!i || typeof t[a] < "u") && (s[l].indexOf(".") > 0 ? vt.prototype.setNestedProperty(n, t[a], s[l]) : n[s[l]] = t[a]), a++, l++;
    else typeof t == "object" && (n = t, t.dataLabels && (e.hasDataLabels = () => !0), t.marker && (e._hasPointMarkers = !0));
    return n;
  }
  /**
   * Get the pixel position of the point relative to the plot area.
   * @function Highcharts.Point#pos
   *
   * @sample highcharts/point/position
   *         Get point's position in pixels.
   *
   * @param {boolean} chartCoordinates
   * If true, the returned position is relative to the full chart area.
   * If false, it is relative to the plot area determined by the axes.
   *
   * @param {number|undefined} plotY
   * A custom plot y position to be computed. Used internally for some
   * series types that have multiple `y` positions, like area range (low
   * and high values).
   *
   * @return {Array<number>|undefined}
   * Coordinates of the point if the point exists.
   */
  pos(t, e = this.plotY) {
    if (!this.destroyed) {
      const { plotX: i, series: s } = this, { chart: r, xAxis: n, yAxis: o } = s;
      let a = 0, l = 0;
      if (gt(i) && gt(e))
        return t && (a = n ? n.pos : r.plotLeft, l = o ? o.pos : r.plotTop), r.inverted && n && o ? [o.len - e + l, n.len - i + a] : [i + a, e + l];
    }
  }
  /**
   * @private
   * @function Highcharts.Point#resolveColor
   */
  resolveColor() {
    const t = this.series, e = t.chart.options.chart, i = t.chart.styledMode;
    let s, r, n = e.colorCount, o;
    delete this.nonZonedColor, t.options.colorByPoint ? (i || (r = t.options.colors || t.chart.options.colors, s = r[t.colorCounter], n = r.length), o = t.colorCounter, t.colorCounter++, t.colorCounter === n && (t.colorCounter = 0)) : (i || (s = t.color), o = t.colorIndex), this.colorIndex = mt(this.options.colorIndex, o), this.color = mt(this.options.color, s);
  }
  /**
   * Set a value in an object, on the property defined by key. The key
   * supports nested properties using dot notation. The function modifies the
   * input object and does not make a copy.
   *
   * @function Highcharts.Point#setNestedProperty<T>
   *
   * @param {T} object
   *        The object to set the value on.
   *
   * @param {*} value
   *        The value to set.
   *
   * @param {string} key
   *        Key to the property to set.
   *
   * @return {T}
   *         The modified object.
   */
  setNestedProperty(t, e, i) {
    return i.split(".").reduce(function(r, n, o, a) {
      const l = a.length - 1 === o;
      return r[n] = l ? e : we(r[n], !0) ? r[n] : {}, r[n];
    }, t), t;
  }
  shouldDraw() {
    return !this.isNull;
  }
  /**
   * Extendable method for formatting each point's tooltip line.
   *
   * @function Highcharts.Point#tooltipFormatter
   *
   * @param {string} pointFormat
   *        The point format.
   *
   * @return {string}
   *         A string to be concatenated in to the common tooltip text.
   */
  tooltipFormatter(t) {
    const { chart: e, pointArrayMap: i = ["y"], tooltipOptions: s } = this.series, { valueDecimals: r = "", valuePrefix: n = "", valueSuffix: o = "" } = s;
    return e.styledMode && (t = e.tooltip?.styledModeFormat(t) || t), i.forEach((a) => {
      a = "{point." + a, (n || o) && (t = t.replace(RegExp(a + "}", "g"), n + a + "}" + o)), t = t.replace(RegExp(a + "}", "g"), a + ":,." + r + "f}");
    }), Eo(t, this, e);
  }
  /**
   * Update point with new options (typically x/y data) and optionally redraw
   * the series.
   *
   * @sample highcharts/members/point-update-column/
   *         Update column value
   * @sample highcharts/members/point-update-pie/
   *         Update pie slice
   * @sample maps/members/point-update/
   *         Update map area value in Highmaps
   *
   * @function Highcharts.Point#update
   *
   * @param {Highcharts.PointOptionsType} options
   *        The point options. Point options are handled as described under
   *        the `series.type.data` item for each series type. For example
   *        for a line series, if options is a single number, the point will
   *        be given that number as the marin y value. If it is an array, it
   *        will be interpreted as x and y values respectively. If it is an
   *        object, advanced options are applied.
   *
   * @param {boolean} [redraw=true]
   *        Whether to redraw the chart after the point is updated. If doing
   *        more operations on the chart, it is best practice to set
   *        `redraw` to false and call `chart.redraw()` after.
   *
   * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation=true]
   *        Whether to apply animation, and optionally animation
   *        configuration.
   *
   * @emits Highcharts.Point#event:update
   */
  update(t, e, i, s) {
    const r = this, n = r.series, o = r.graphic, a = n.chart, l = n.options;
    let h;
    e = mt(e, !0);
    function f() {
      r.applyOptions(t);
      const d = o && r.hasMockGraphic, p = r.y === null ? !d : d;
      o && p && (r.graphic = o.destroy(), delete r.hasMockGraphic), we(t, !0) && (o?.element && t && t.marker && typeof t.marker.symbol < "u" && (r.graphic = o.destroy()), t?.dataLabels && r.dataLabel && (r.dataLabel = r.dataLabel.destroy())), h = r.index;
      const u = {};
      for (const g of n.dataColumnKeys())
        u[g] = r[g];
      n.dataTable.setRow(u, h), l.data[h] = we(l.data[h], !0) || we(t, !0) ? r.options : mt(t, l.data[h]), n.isDirty = n.isDirtyData = !0, !n.fixedBox && n.hasCartesianSeries && (a.isDirtyBox = !0), l.legendType === "point" && (a.isDirtyLegend = !0), e && a.redraw(i);
    }
    s === !1 ? f() : r.firePointEvent("update", { options: t }, f);
  }
  /**
   * Remove a point and optionally redraw the series and if necessary the axes
   *
   * @sample highcharts/plotoptions/series-point-events-remove/
   *         Remove point and confirm
   * @sample highcharts/members/point-remove/
   *         Remove pie slice
   * @sample maps/members/point-remove/
   *         Remove selected points in Highmaps
   *
   * @function Highcharts.Point#remove
   *
   * @param {boolean} [redraw=true]
   *        Whether to redraw the chart or wait for an explicit call. When
   *        doing more operations on the chart, for example running
   *        `point.remove()` in a loop, it is best practice to set `redraw`
   *        to false and call `chart.redraw()` after.
   *
   * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation=false]
   *        Whether to apply animation, and optionally animation
   *        configuration.
   */
  remove(t, e) {
    this.series.removePoint(this.series.data.indexOf(this), t, e);
  }
  /**
   * Toggle the selection status of a point.
   *
   * @see Highcharts.Chart#getSelectedPoints
   *
   * @sample highcharts/members/point-select/
   *         Select a point from a button
   * @sample highcharts/members/point-select-lasso/
   *         Lasso selection
   * @sample highcharts/chart/events-selection-points/
   *         Rectangle selection
   * @sample maps/series/data-id/
   *         Select a point in Highmaps
   *
   * @function Highcharts.Point#select
   *
   * @param {boolean} [selected]
   * When `true`, the point is selected. When `false`, the point is
   * unselected. When `null` or `undefined`, the selection state is toggled.
   *
   * @param {boolean} [accumulate=false]
   * When `true`, the selection is added to other selected points.
   * When `false`, other selected points are deselected. Internally in
   * Highcharts, when
   * [allowPointSelect](https://api.highcharts.com/highcharts/plotOptions.series.allowPointSelect)
   * is `true`, selected points are accumulated on Control, Shift or Cmd
   * clicking the point.
   *
   * @emits Highcharts.Point#event:select
   * @emits Highcharts.Point#event:unselect
   */
  select(t, e) {
    const i = this, s = i.series, r = s.chart;
    t = mt(t, !i.selected), this.selectedStaging = t, i.firePointEvent(t ? "select" : "unselect", { accumulate: e }, function() {
      i.selected = i.options.selected = t, s.options.data[s.data.indexOf(i)] = i.options, i.setState(t && "select"), e || r.getSelectedPoints().forEach(function(n) {
        const o = n.series;
        n.selected && n !== i && (n.selected = n.options.selected = !1, o.options.data[o.data.indexOf(n)] = n.options, n.setState(r.hoverPoints && o.options.inactiveOtherPoints ? "inactive" : ""), n.firePointEvent("unselect"));
      });
    }), delete this.selectedStaging;
  }
  /**
   * Runs on mouse over the point. Called internally from mouse and touch
   * events.
   *
   * @function Highcharts.Point#onMouseOver
   *
   * @param {Highcharts.PointerEventObject} [e]
   *        The event arguments.
   */
  onMouseOver(t) {
    const e = this, i = e.series, { inverted: s, pointer: r } = i.chart;
    r && (t = t ? r.normalize(t) : (
      // In cases where onMouseOver is called directly without an
      // event
      r.getChartCoordinatesFromPoint(e, s)
    ), r.runPointActions(t, e));
  }
  /**
   * Runs on mouse out from the point. Called internally from mouse and touch
   * events.
   *
   * @function Highcharts.Point#onMouseOut
   * @emits Highcharts.Point#event:mouseOut
   */
  onMouseOut() {
    const t = this, e = t.series.chart;
    t.firePointEvent("mouseOut"), t.series.options.inactiveOtherPoints || (e.hoverPoints || []).forEach(function(i) {
      i.setState();
    }), e.hoverPoints = e.hoverPoint = null;
  }
  /**
   * Manage specific event from the series' and point's options. Only do it on
   * demand, to save processing time on hovering.
   *
   * @private
   * @function Highcharts.Point#importEvents
   */
  manageEvent(t) {
    const e = this, i = Cs(e.series.options.point, e.options), s = i.events?.[t];
    Ro(s) && (!e.hcEvents?.[t] || // Some HC modules, like marker-clusters, draggable-poins etc.
    // use events in their logic, so we need to be sure, that
    // callback function is different
    e.hcEvents?.[t]?.map((r) => r.fn).indexOf(s) === -1) ? (e.importedUserEvent?.(), e.importedUserEvent = Do(e, t, s), e.hcEvents && (e.hcEvents[t].userEvent = !0)) : e.importedUserEvent && !s && e.hcEvents?.[t] && e.hcEvents?.[t].userEvent && (Ts(e, t), delete e.hcEvents[t], Object.keys(e.hcEvents) || delete e.importedUserEvent);
  }
  /**
   * Set the point's state.
   *
   * @function Highcharts.Point#setState
   *
   * @param {Highcharts.PointStateValue|""} [state]
   *        The new state, can be one of `'hover'`, `'select'`, `'inactive'`,
   *        or `''` (an empty string), `'normal'` or `undefined` to set to
   *        normal state.
   * @param {boolean} [move]
   *        State for animation.
   *
   * @emits Highcharts.Point#event:afterSetState
   */
  setState(t, e) {
    const i = this, s = i.series, r = i.state, n = s.options.states[t || "normal"] || {}, o = Po.plotOptions[s.type].marker && s.options.marker, a = o && o.enabled === !1, l = o?.states?.[t || "normal"] || {}, h = l.enabled === !1, f = i.marker || {}, d = s.chart, p = o && s.markerAttribs;
    let u = s.halo, g, x, m, y = s.stateMarkerGraphic, b;
    if (t = t || "", // Already has this state
    t === i.state && !e || // Selected points don't respond to hover
    i.selected && t !== "select" || // Series' state options is disabled
    n.enabled === !1 || // General point marker's state options is disabled
    t && (h || a && l.enabled === !1) || // Individual point marker's state options is disabled
    t && f.states && f.states[t] && f.states[t].enabled === !1)
      return;
    if (i.state = t, p && (g = s.markerAttribs(i, t)), i.graphic && !i.hasMockGraphic) {
      if (r && i.graphic.removeClass("highcharts-point-" + r), t && i.graphic.addClass("highcharts-point-" + t), !d.styledMode) {
        x = s.pointAttribs(i, t), m = mt(d.options.chart.animation, n.animation);
        const k = x.opacity;
        s.options.inactiveOtherPoints && gt(k) && (i.dataLabels || []).forEach(function(M) {
          M && !M.hasClass("highcharts-data-label-hidden") && (M.animate({ opacity: k }, m), M.connector && M.connector.animate({ opacity: k }, m));
        }), i.graphic.animate(x, m);
      }
      g && i.graphic.animate(g, mt(
        // Turn off globally:
        d.options.chart.animation,
        l.animation,
        o.animation
      )), y && y.hide();
    } else
      t && l && (b = f.symbol || s.symbol, y && y.currentSymbol !== b && (y = y.destroy()), g && (y ? y[e ? "animate" : "attr"]({
        x: g.x,
        y: g.y
      }) : b && (s.stateMarkerGraphic = y = d.renderer.symbol(b, g.x, g.y, g.width, g.height, Cs(o, l)).add(s.markerGroup), y.currentSymbol = b)), !d.styledMode && y && i.state !== "inactive" && y.attr(s.pointAttribs(i, t))), y && (y[t && i.isInside ? "show" : "hide"](), y.element.point = i, y.addClass(i.getClassName(), !0));
    const v = n.halo, S = i.graphic || y, w = S?.visibility || "inherit";
    v?.size && S && w !== "hidden" && !i.isCluster ? (u || (s.halo = u = d.renderer.path().add(S.parentGroup)), u.show()[e ? "animate" : "attr"]({
      d: i.haloPath(v.size)
    }), u.attr({
      class: "highcharts-halo highcharts-color-" + mt(i.colorIndex, s.colorIndex) + (i.className ? " " + i.className : ""),
      visibility: w,
      zIndex: -1
      // #4929, #8276
    }), u.point = i, d.styledMode || u.attr(Se({
      fill: i.color || s.color,
      "fill-opacity": v.opacity
    }, Y.filterUserAttributes(v.attributes || {})))) : u?.point?.haloPath && !u.point.destroyed && u.animate(
      { d: u.point.haloPath(0) },
      null,
      // Hide after unhovering. The `complete` callback runs in the
      // halo's context (#7681).
      u.hide
    ), ni(i, "afterSetState", { state: t });
  }
  /**
   * Get the path definition for the halo, which is usually a shadow-like
   * circle around the currently hovered point.
   *
   * @function Highcharts.Point#haloPath
   *
   * @param {number} size
   *        The radius of the circular halo.
   *
   * @return {Highcharts.SVGPathArray}
   *         The path definition.
   */
  haloPath(t) {
    const e = this.pos();
    return e ? this.series.chart.renderer.symbols.circle($o(e[0], 1) - t, e[1] - t, t * 2, t * 2) : [];
  }
}
const Fo = {
  // Base series options
  /**
   * The SVG value used for the `stroke-linecap` and `stroke-linejoin`
   * of a line graph. Round means that lines are rounded in the ends and
   * bends.
   *
   * @type       {Highcharts.SeriesLinecapValue}
   * @default    round
   * @since      3.0.7
   * @apioption  plotOptions.line.linecap
   */
  /**
   * Pixel width of the graph line.
   *
   * @see In styled mode, the line stroke-width can be set with the
   *      `.highcharts-graph` class name.
   *
   * @sample {highcharts} highcharts/plotoptions/series-linewidth-general/
   *         On all series
   * @sample {highcharts} highcharts/plotoptions/series-linewidth-specific/
   *         On one single series
   *
   * @product highcharts highstock
   */
  lineWidth: 2,
  /**
   * For some series, there is a limit that shuts down animation
   * by default when the total number of points in the chart is too high.
   * For example, for a column chart and its derivatives, animation does
   * not run if there is more than 250 points totally. To disable this
   * cap, set `animationLimit` to `Infinity`. This option works if animation
   * is fired on individual points, not on a group of points like e.g. during
   * the initial animation.
   *
   * @sample {highcharts} highcharts/plotoptions/series-animationlimit/
   *         Animation limit on updating individual points
   *
   * @type      {number}
   * @apioption plotOptions.series.animationLimit
   */
  /**
   * Allow this series' points to be selected by clicking on the graphic
   * (columns, point markers, pie slices, map areas etc).
   *
   * The selected points can be handled by point select and unselect
   * events, or collectively by the [getSelectedPoints
   * ](/class-reference/Highcharts.Chart#getSelectedPoints) function.
   *
   * And alternative way of selecting points is through dragging.
   *
   * @sample {highcharts} highcharts/plotoptions/series-allowpointselect-line/
   *         Line
   * @sample {highcharts} highcharts/plotoptions/series-allowpointselect-column/
   *         Column
   * @sample {highcharts} highcharts/plotoptions/series-allowpointselect-pie/
   *         Pie
   * @sample {highcharts} highcharts/chart/events-selection-points/
   *         Select a range of points through a drag selection
   * @sample {highmaps} maps/plotoptions/series-allowpointselect/
   *         Map area
   * @sample {highmaps} maps/plotoptions/mapbubble-allowpointselect/
   *         Map bubble
   *
   * @since 1.2.0
   *
   * @private
   */
  allowPointSelect: !1,
  /**
   * When true, each point or column edge is rounded to its nearest pixel
   * in order to render sharp on screen. In some cases, when there are a
   * lot of densely packed columns, this leads to visible difference
   * in column widths or distance between columns. In these cases,
   * setting `crisp` to `false` may look better, even though each column
   * is rendered blurry.
   *
   * @sample {highcharts} highcharts/plotoptions/column-crisp-false/
   *         Crisp is false
   *
   * @since   5.0.10
   * @product highcharts highstock gantt
   *
   * @private
   */
  crisp: !0,
  /**
   * If true, a checkbox is displayed next to the legend item to allow
   * selecting the series. The state of the checkbox is determined by
   * the `selected` option.
   *
   * @productdesc {highmaps}
   * Note that if a `colorAxis` is defined, the color axis is represented
   * in the legend, not the series.
   *
   * @sample {highcharts} highcharts/plotoptions/series-showcheckbox-true/
   *         Show select box
   *
   * @since 1.2.0
   *
   * @private
   */
  showCheckbox: !1,
  /**
   * Enable or disable the initial animation when a series is displayed.
   * The animation can also be set as a configuration object. Please
   * note that this option only applies to the initial animation of the
   * series itself. For other animations, see [chart.animation](
   * #chart.animation) and the animation parameter under the API methods.
   * The following properties are supported:
   *
   * - `defer`: The animation delay time in milliseconds.
   *
   * - `duration`: The duration of the animation in milliseconds. (Defaults to
   *   `1000`)
   *
   * - `easing`: Can be a string reference to an easing function set on
   *   the `Math` object or a function. See the _Custom easing function_
   *   demo below. (Defaults to `easeInOutSine`)
   *
   * Due to poor performance, animation is disabled in old IE browsers
   * for several chart types.
   *
   * @sample {highcharts} highcharts/plotoptions/series-animation-disabled/
   *         Animation disabled
   * @sample {highcharts} highcharts/plotoptions/series-animation-slower/
   *         Slower animation
   * @sample {highcharts} highcharts/plotoptions/series-animation-easing/
   *         Custom easing function
   * @sample {highstock} stock/plotoptions/animation-slower/
   *         Slower animation
   * @sample {highstock} stock/plotoptions/animation-easing/
   *         Custom easing function
   * @sample {highmaps} maps/plotoptions/series-animation-true/
   *         Animation enabled on map series
   * @sample {highmaps} maps/plotoptions/mapbubble-animation-false/
   *         Disabled on mapbubble series
   *
   * @type    {boolean|Highcharts.AnimationOptionsObject}
   * @default {highcharts} true
   * @default {highstock} true
   * @default {highmaps} false
   *
   * @private
   */
  animation: {
    /** @ignore-option */
    duration: 1e3
  },
  /**
   * An additional class name to apply to the series' graphical elements.
   * This option does not replace default class names of the graphical
   * element. Changes to the series' color will also be reflected in a
   * chart's legend and tooltip.
   *
   * @sample {highcharts} highcharts/css/point-series-classname
   *         Series and point class name
   *
   * @type      {string}
   * @since     5.0.0
   * @apioption plotOptions.series.className
   */
  /**
   * Disable this option to allow series rendering in the whole plotting
   * area.
   *
   * **Note:** Clipping should be always enabled when
   * [chart.zoomType](#chart.zoomType) is set
   *
   * @sample {highcharts} highcharts/plotoptions/series-clip/
   *         Disabled clipping
   *
   * @default   true
   * @type      {boolean}
   * @since     3.0.0
   * @apioption plotOptions.series.clip
   */
  /**
   * The main color of the series. In line type series it applies to the
   * line and the point markers unless otherwise specified. In bar type
   * series it applies to the bars unless a color is specified per point.
   * The default value is pulled from the `options.colors` array.
   *
   * In styled mode, the color can be defined by the
   * [colorIndex](#plotOptions.series.colorIndex) option. Also, the series
   * color can be set with the `.highcharts-series`,
   * `.highcharts-color-{n}`, `.highcharts-{type}-series` or
   * `.highcharts-series-{n}` class, or individual classes given by the
   * `className` option.
   *
   * @productdesc {highmaps}
   * In maps, the series color is rarely used, as most choropleth maps use
   * the color to denote the value of each point. The series color can
   * however be used in a map with multiple series holding categorized
   * data.
   *
   * @sample {highcharts} highcharts/plotoptions/series-color-general/
   *         General plot option
   * @sample {highcharts} highcharts/plotoptions/series-color-specific/
   *         One specific series
   * @sample {highcharts} highcharts/plotoptions/series-color-area/
   *         Area color
   * @sample {highcharts} highcharts/series/infographic/
   *         Pattern fill
   * @sample {highmaps} maps/demo/category-map/
   *         Category map by multiple series
   *
   * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
   * @apioption plotOptions.series.color
   */
  /**
   * Styled mode only. A specific color index to use for the series, so its
   * graphic representations are given the class name `highcharts-color-{n}`.
   *
   * Since v11, CSS variables on the form `--highcharts-color-{n}` make
   * changing the color scheme very convenient.
   *
   * @sample    {highcharts} highcharts/css/colorindex/ Series and point color
   *            index
   *
   * @type      {number}
   * @since     5.0.0
   * @apioption plotOptions.series.colorIndex
   */
  /**
   * Whether to connect a graph line across null points, or render a gap
   * between the two points on either side of the null.
   *
   * In stacked area chart, if `connectNulls` is set to true,
   * null points are interpreted as 0.
   *
   * @sample {highcharts} highcharts/plotoptions/series-connectnulls-false/
   *         False by default
   * @sample {highcharts} highcharts/plotoptions/series-connectnulls-true/
   *         True
   *
   * @type      {boolean}
   * @default   false
   * @product   highcharts highstock
   * @apioption plotOptions.series.connectNulls
   */
  /**
   * You can set the cursor to "pointer" if you have click events attached
   * to the series, to signal to the user that the points and lines can
   * be clicked.
   *
   * In styled mode, the series cursor can be set with the same classes
   * as listed under [series.color](#plotOptions.series.color).
   *
   * @sample {highcharts} highcharts/plotoptions/series-cursor-line/
   *         On line graph
   * @sample {highcharts} highcharts/plotoptions/series-cursor-column/
   *         On columns
   * @sample {highcharts} highcharts/plotoptions/series-cursor-scatter/
   *         On scatter markers
   * @sample {highstock} stock/plotoptions/cursor/
   *         Pointer on a line graph
   * @sample {highmaps} maps/plotoptions/series-allowpointselect/
   *         Map area
   * @sample {highmaps} maps/plotoptions/mapbubble-allowpointselect/
   *         Map bubble
   *
   * @type      {string|Highcharts.CursorValue}
   * @apioption plotOptions.series.cursor
   */
  /**
   * A reserved subspace to store options and values for customized
   * functionality. Here you can add additional data for your own event
   * callbacks and formatter callbacks.
   *
   * @sample {highcharts} highcharts/point/custom/
   *         Point and series with custom data
   *
   * @type      {Highcharts.Dictionary<*>}
   * @apioption plotOptions.series.custom
   */
  /**
   * Name of the dash style to use for the graph, or for some series types
   * the outline of each shape.
   *
   * In styled mode, the
   * [stroke dash-array](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/series-dashstyle/)
   * can be set with the same classes as listed under
   * [series.color](#plotOptions.series.color).
   *
   * @sample {highcharts} highcharts/plotoptions/series-dashstyle-all/
   *         Possible values demonstrated
   * @sample {highcharts} highcharts/plotoptions/series-dashstyle/
   *         Chart suitable for printing in black and white
   * @sample {highstock} highcharts/plotoptions/series-dashstyle-all/
   *         Possible values demonstrated
   * @sample {highmaps} highcharts/plotoptions/series-dashstyle-all/
   *         Possible values demonstrated
   * @sample {highmaps} maps/plotoptions/series-dashstyle/
   *         Dotted borders on a map
   *
   * @type      {Highcharts.DashStyleValue}
   * @default   Solid
   * @since     2.1
   * @apioption plotOptions.series.dashStyle
   */
  /**
   * A description of the series to add to the screen reader information
   * about the series.
   *
   * @type      {string}
   * @since     5.0.0
   * @requires  modules/accessibility
   * @apioption plotOptions.series.description
   */
  /**
   * Options for the series data sorting.
   *
   * @type      {Highcharts.DataSortingOptionsObject}
   * @since     8.0.0
   * @product   highcharts highstock
   * @apioption plotOptions.series.dataSorting
   */
  /**
   * Enable or disable data sorting for the series. Use [xAxis.reversed](
   * #xAxis.reversed) to change the sorting order.
   *
   * @sample {highcharts} highcharts/datasorting/animation/
   *         Data sorting in scatter-3d
   * @sample {highcharts} highcharts/datasorting/labels-animation/
   *         Axis labels animation
   * @sample {highcharts} highcharts/datasorting/dependent-sorting/
   *         Dependent series sorting
   * @sample {highcharts} highcharts/datasorting/independent-sorting/
   *         Independent series sorting
   *
   * @type      {boolean}
   * @since     8.0.0
   * @apioption plotOptions.series.dataSorting.enabled
   */
  /**
   * Whether to allow matching points by name in an update. If this option
   * is disabled, points will be matched by order.
   *
   * @sample {highcharts} highcharts/datasorting/match-by-name/
   *         Enabled match by name
   *
   * @type      {boolean}
   * @since     8.0.0
   * @apioption plotOptions.series.dataSorting.matchByName
   */
  /**
   * Determines what data value should be used to sort by.
   *
   * @sample {highcharts} highcharts/datasorting/sort-key/
   *         Sort key as `z` value
   *
   * @type      {string}
   * @since     8.0.0
   * @default   y
   * @apioption plotOptions.series.dataSorting.sortKey
   */
  /**
   * Enable or disable the mouse tracking for a specific series. This
   * includes point tooltips and click events on graphs and points. For
   * large datasets it improves performance.
   *
   * @sample {highcharts} highcharts/plotoptions/series-enablemousetracking-false/
   *         No mouse tracking
   * @sample {highmaps} maps/plotoptions/series-enablemousetracking-false/
   *         No mouse tracking
   *
   * @type      {boolean}
   * @default   true
   * @apioption plotOptions.series.enableMouseTracking
   */
  enableMouseTracking: !0,
  /**
   * Whether to use the Y extremes of the total chart width or only the
   * zoomed area when zooming in on parts of the X axis. By default, the
   * Y axis adjusts to the min and max of the visible data. Cartesian
   * series only.
   *
   * @type      {boolean}
   * @default   false
   * @since     4.1.6
   * @product   highcharts highstock gantt
   * @apioption plotOptions.series.getExtremesFromAll
   */
  /**
   * Highlight only the hovered point and fade the remaining points.
   *
   * Scatter-type series require enabling the 'inactive' marker state and
   * adjusting opacity. Note that this approach could affect performance
   * with large datasets.
   *
   * @sample {highcharts} highcharts/plotoptions/series-inactiveotherpoints-enabled/
   *         Chart with inactiveOtherPoints option enabled.
   *
   * @type      {boolean}
   * @default   false
   * @apioption plotOptions.series.inactiveOtherPoints
   */
  /**
   * An array specifying which option maps to which key in the data point
   * array. This makes it convenient to work with unstructured data arrays
   * from different sources.
   *
   * @see [series.data](#series.line.data)
   *
   * @sample {highcharts|highstock} highcharts/series/data-keys/
   *         An extended data array with keys
   * @sample {highcharts|highstock} highcharts/series/data-nested-keys/
   *         Nested keys used to access object properties
   *
   * @type      {Array<string>}
   * @since     4.1.6
   * @apioption plotOptions.series.keys
   */
  /**
   * The line cap used for line ends and line joins on the graph.
   *
   * @sample highcharts/series-line/linecap/
   *         Line cap comparison
   *
   * @type       {Highcharts.SeriesLinecapValue}
   * @default    round
   * @product    highcharts highstock
   * @apioption  plotOptions.series.linecap
   */
  /**
   * The [id](#series.id) of another series to link to. Additionally,
   * the value can be ":previous" to link to the previous series. When
   * two series are linked, only the first one appears in the legend.
   * Toggling the visibility of this also toggles the linked series.
   *
   * If master series uses data sorting and linked series does not have
   * its own sorting definition, the linked series will be sorted in the
   * same order as the master one.
   *
   * @sample {highcharts|highstock} highcharts/demo/arearange-line/
   *         Linked series
   *
   * @type      {string}
   * @since     3.0
   * @product   highcharts highstock gantt
   * @apioption plotOptions.series.linkedTo
   */
  /**
   * Options for the corresponding navigator series if `showInNavigator`
   * is `true` for this series. Available options are the same as any
   * series, documented at [plotOptions](#plotOptions.series) and
   * [series](#series).
   *
   * These options are merged with options in [navigator.series](
   * #navigator.series), and will take precedence if the same option is
   * defined both places.
   *
   * @see [navigator.series](#navigator.series)
   *
   * @type      {Highcharts.PlotSeriesOptions}
   * @since     5.0.0
   * @product   highstock
   * @apioption plotOptions.series.navigatorOptions
   */
  /**
   * The color for the parts of the graph or points that are below the
   * [threshold](#plotOptions.series.threshold). Note that `zones` takes
   * precedence over the negative color. Using `negativeColor` is
   * equivalent to applying a zone with value of 0.
   *
   * @see In styled mode, a negative color is applied by setting this option
   *      to `true` combined with the `.highcharts-negative` class name.
   *
   * @sample {highcharts} highcharts/plotoptions/series-negative-color/
   *         Spline, area and column
   * @sample {highcharts} highcharts/plotoptions/arearange-negativecolor/
   *         Arearange
   * @sample {highcharts} highcharts/css/series-negative-color/
   *         Styled mode
   * @sample {highstock} highcharts/plotoptions/series-negative-color/
   *         Spline, area and column
   * @sample {highstock} highcharts/plotoptions/arearange-negativecolor/
   *         Arearange
   * @sample {highmaps} highcharts/plotoptions/series-negative-color/
   *         Spline, area and column
   * @sample {highmaps} highcharts/plotoptions/arearange-negativecolor/
   *         Arearange
   *
   * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
   * @since     3.0
   * @apioption plotOptions.series.negativeColor
   */
  /**
   * Whether or not data-points with the value of `null` should be interactive.
   * When this is set to `true`, tooltips may highlight these points, and this
   * option also enables keyboard navigation for such points. Format options
   * for such points include [`nullFormat`](#tooltip.nullFormat) and [`nullFormater`](#tooltip.nullFormatter).
   * Works for these series: `line`, `spline`, `area`, `area-spline`,
   * `column`, `bar`, and* `timeline`.
   *
   * @sample {highcharts} highcharts/series/null-interaction/
   *         Chart with interactive `null` points
   *
   * @sample {highcharts} highcharts/series-timeline/null-interaction/
   *         Timeline series with `null` points
   *
   * @type      {boolean|undefined}
   * @product   highcharts highstock
   * @apioption plotOptions.series.nullInteraction
   */
  /**
   * Same as
   * [accessibility.point.descriptionFormat](#accessibility.point.descriptionFormat),
   * but for an individual series. Overrides the chart wide configuration.
   *
   * @type      {Function}
   * @since 11.1.0
   * @apioption plotOptions.series.pointDescriptionFormat
   */
  /**
   * Same as
   * [accessibility.series.descriptionFormatter](#accessibility.series.descriptionFormatter),
   * but for an individual series. Overrides the chart wide configuration.
   *
   * @type      {Function}
   * @since     5.0.12
   * @apioption plotOptions.series.pointDescriptionFormatter
   */
  /**
   * If no x values are given for the points in a series, `pointInterval`
   * defines the interval of the x values. For example, if a series
   * contains one value every decade starting from year 0, set
   * `pointInterval` to `10`. In true `datetime` axes, the `pointInterval`
   * is set in milliseconds.
   *
   * It can be also be combined with `pointIntervalUnit` to draw irregular
   * time intervals.
   *
   * If combined with `relativeXValue`, an x value can be set on each
   * point, and the `pointInterval` is added x times to the `pointStart`
   * setting.
   *
   * Please note that this options applies to the _series data_, not the
   * interval of the axis ticks, which is independent.
   *
   * @sample {highcharts} highcharts/plotoptions/series-pointstart-datetime/
   *         Datetime X axis
   * @sample {highcharts} highcharts/plotoptions/series-relativexvalue/
   *         Relative x value
   * @sample {highstock} stock/plotoptions/pointinterval-pointstart/
   *         Using pointStart and pointInterval
   * @sample {highstock} stock/plotoptions/relativexvalue/
   *         Relative x value
   *
   * @type      {number}
   * @default   1
   * @product   highcharts highstock gantt
   * @apioption plotOptions.series.pointInterval
   */
  /**
   * On datetime series, this allows for setting the
   * [pointInterval](#plotOptions.series.pointInterval) to irregular time
   * units, `day`, `month` and `year`. A day is usually the same as 24
   * hours, but `pointIntervalUnit` also takes the DST crossover into
   * consideration when dealing with local time. Combine this option with
   * `pointInterval` to draw weeks, quarters, 6 months, 10 years etc.
   *
   * Please note that this options applies to the _series data_, not the
   * interval of the axis ticks, which is independent.
   *
   * @sample {highcharts} highcharts/plotoptions/series-pointintervalunit/
   *         One point a month
   * @sample {highstock} highcharts/plotoptions/series-pointintervalunit/
   *         One point a month
   *
   * @type       {string}
   * @since      4.1.0
   * @product    highcharts highstock gantt
   * @validvalue ["day", "month", "year"]
   * @apioption  plotOptions.series.pointIntervalUnit
   */
  /**
   * Possible values: `"on"`, `"between"`, `number`.
   *
   * In a column chart, when pointPlacement is `"on"`, the point will not
   * create any padding of the X axis. In a polar column chart this means
   * that the first column points directly north. If the pointPlacement is
   * `"between"`, the columns will be laid out between ticks. This is
   * useful for example for visualising an amount between two points in
   * time or in a certain sector of a polar chart.
   *
   * Since Highcharts 3.0.2, the point placement can also be numeric,
   * where 0 is on the axis value, -0.5 is between this value and the
   * previous, and 0.5 is between this value and the next. Unlike the
   * textual options, numeric point placement options won't affect axis
   * padding.
   *
   * Note that pointPlacement needs a [pointRange](
   * #plotOptions.series.pointRange) to work. For column series this is
   * computed, but for line-type series it needs to be set.
   *
   * For the `xrange` series type and gantt charts, if the Y axis is a
   * category axis, the `pointPlacement` applies to the Y axis rather than
   * the (typically datetime) X axis.
   *
   * Defaults to `undefined` in cartesian charts, `"between"` in polar
   * charts.
   *
   * @see [xAxis.tickmarkPlacement](#xAxis.tickmarkPlacement)
   *
   * @sample {highcharts|highstock} highcharts/plotoptions/series-pointplacement-between/
   *         Between in a column chart
   * @sample {highcharts|highstock} highcharts/plotoptions/series-pointplacement-numeric/
   *         Numeric placement for custom layout
   * @sample {highcharts|highstock} maps/plotoptions/heatmap-pointplacement/
   *         Placement in heatmap
   *
   * @type      {string|number}
   * @since     2.3.0
   * @product   highcharts highstock gantt
   * @apioption plotOptions.series.pointPlacement
   */
  /**
   * If no x values are given for the points in a series, `pointStart`
   * defines on what value to start. For example, if a series contains one
   * yearly value starting from 1945, set `pointStart` to 1945.
   *
   * The `pointStart` setting can be a number, or a datetime string that is
   * parsed according to the `time.timezone` setting.
   *
   * If combined with `relativeXValue`, an x value can be set on each
   * point. The x value from the point options is multiplied by
   * `pointInterval` and added to `pointStart` to produce a modified x
   * value.
   *
   * @sample {highcharts} highcharts/plotoptions/series-pointstart-linear/
   *         Linear
   * @sample {highcharts} highcharts/plotoptions/series-pointstart-datetime/
   *         Datetime
   * @sample {highcharts} highcharts/plotoptions/series-relativexvalue/
   *         Relative x value
   * @sample {highstock} stock/plotoptions/pointinterval-pointstart/
   *         Using pointStart and pointInterval
   * @sample {highstock} stock/plotoptions/relativexvalue/
   *         Relative x value
   *
   * @type      {number|string}
   * @default   0
   * @product   highcharts highstock gantt
   * @apioption plotOptions.series.pointStart
   */
  /**
   * When true, X values in the data set are relative to the current
   * `pointStart`, `pointInterval` and `pointIntervalUnit` settings. This
   * allows compression of the data for datasets with irregular X values.
   *
   * The real X values are computed on the formula `f(x) = ax + b`, where
   * `a` is the `pointInterval` (optionally with a time unit given by
   * `pointIntervalUnit`), and `b` is the `pointStart`.
   *
   * @sample {highcharts} highcharts/plotoptions/series-relativexvalue/
   *         Relative X value
   * @sample {highstock} stock/plotoptions/relativexvalue/
   *         Relative X value
   *
   * @type      {boolean}
   * @default   false
   * @product   highcharts highstock
   * @apioption plotOptions.series.relativeXValue
   */
  /**
   * Whether to select the series initially. If `showCheckbox` is true,
   * the checkbox next to the series name in the legend will be checked
   * for a selected series.
   *
   * @sample {highcharts} highcharts/plotoptions/series-selected/
   *         One out of two series selected
   *
   * @type      {boolean}
   * @default   false
   * @since     1.2.0
   * @apioption plotOptions.series.selected
   */
  /**
   * Whether to apply a drop shadow to the graph line. Since 2.3 the
   * shadow can be an object configuration containing `color`, `offsetX`,
   * `offsetY`, `opacity` and `width`.
   *
   * Note that in some cases, like stacked columns or other dense layouts, the
   * series may cast shadows on each other. In that case, the
   * `chart.seriesGroupShadow` allows applying a common drop shadow to the
   * whole series group.
   *
   * @sample {highcharts} highcharts/plotoptions/series-shadow/
   *         Shadow enabled
   *
   * @type      {boolean|Highcharts.ShadowOptionsObject}
   * @default   false
   * @apioption plotOptions.series.shadow
   */
  /**
   * Whether to display this particular series or series type in the
   * legend. Standalone series are shown in legend by default, and linked
   * series are not. Since v7.2.0 it is possible to show series that use
   * colorAxis by setting this option to `true`.
   *
   * @sample {highcharts} highcharts/plotoptions/series-showinlegend/
   *         One series in the legend, one hidden
   *
   * @type      {boolean}
   * @apioption plotOptions.series.showInLegend
   */
  /**
   * Whether or not to show the series in the navigator. Takes precedence
   * over [navigator.baseSeries](#navigator.baseSeries) if defined.
   *
   * @type      {boolean}
   * @since     5.0.0
   * @product   highstock
   * @apioption plotOptions.series.showInNavigator
   */
  /**
   * If set to `true`, the accessibility module will skip past the points
   * in this series for keyboard navigation.
   *
   * @type      {boolean}
   * @since     5.0.12
   * @apioption plotOptions.series.skipKeyboardNavigation
   */
  /**
   * Whether to stack the values of each series on top of each other.
   * Possible values are `undefined` to disable, `"normal"` to stack by
   * value or `"percent"`.
   *
   * When stacking is enabled, data must be sorted
   * in ascending X order.
   *
   * Some stacking options are related to specific series types. In the
   * streamgraph series type, the stacking option is set to `"stream"`.
   * The second one is `"overlap"`, which only applies to waterfall
   * series.
   *
   * @see [yAxis.reversedStacks](#yAxis.reversedStacks)
   *
   * @sample {highcharts} highcharts/plotoptions/series-stacking-line/
   *         Line
   * @sample {highcharts} highcharts/plotoptions/series-stacking-column/
   *         Column
   * @sample {highcharts} highcharts/plotoptions/series-stacking-bar/
   *         Bar
   * @sample {highcharts} highcharts/plotoptions/series-stacking-area/
   *         Area
   * @sample {highcharts} highcharts/plotoptions/series-stacking-percent-line/
   *         Line
   * @sample {highcharts} highcharts/plotoptions/series-stacking-percent-column/
   *         Column
   * @sample {highcharts} highcharts/plotoptions/series-stacking-percent-bar/
   *         Bar
   * @sample {highcharts} highcharts/plotoptions/series-stacking-percent-area/
   *         Area
   * @sample {highcharts} highcharts/plotoptions/series-waterfall-with-normal-stacking
   *         Waterfall with normal stacking
   * @sample {highcharts} highcharts/plotoptions/series-waterfall-with-overlap-stacking
   *         Waterfall with overlap stacking
   * @sample {highstock} stock/plotoptions/stacking/
   *         Area
   *
   * @type       {string}
   * @product    highcharts highstock
   * @validvalue ["normal", "overlap", "percent", "stream"]
   * @apioption  plotOptions.series.stacking
   */
  /**
   * Whether to apply steps to the line. Possible values are `left`,
   * `center` and `right`.
   *
   * @sample {highcharts} highcharts/plotoptions/line-step/
   *         Different step line options
   * @sample {highcharts} highcharts/plotoptions/area-step/
   *         Stepped, stacked area
   * @sample {highstock} stock/plotoptions/line-step/
   *         Step line
   *
   * @type       {string}
   * @since      1.2.5
   * @product    highcharts highstock
   * @validvalue ["left", "center", "right"]
   * @apioption  plotOptions.series.step
   */
  /**
   * The threshold, also called zero level or base level. For line type
   * series this is only used in conjunction with
   * [negativeColor](#plotOptions.series.negativeColor).
   *
   * @see [softThreshold](#plotOptions.series.softThreshold).
   *
   * @type      {number|null}
   * @default   0
   * @since     3.0
   * @product   highcharts highstock
   * @apioption plotOptions.series.threshold
   */
  /**
   * Set the initial visibility of the series.
   *
   * @sample {highcharts} highcharts/plotoptions/series-visible/
   *         Two series, one hidden and one visible
   * @sample {highstock} stock/plotoptions/series-visibility/
   *         Hidden series
   *
   * @type      {boolean}
   * @default   true
   * @apioption plotOptions.series.visible
   */
  /**
   * Defines the Axis on which the zones are applied.
   *
   * @see [zones](#plotOptions.series.zones)
   *
   * @sample {highcharts} highcharts/series/color-zones-zoneaxis-x/
   *         Zones on the X-Axis
   * @sample {highstock} highcharts/series/color-zones-zoneaxis-x/
   *         Zones on the X-Axis
   *
   * @type      {string}
   * @default   y
   * @since     4.1.0
   * @product   highcharts highstock
   * @apioption plotOptions.series.zoneAxis
   */
  /**
   * General event handlers for the series items. These event hooks can
   * also be attached to the series at run time using the
   * `Highcharts.addEvent` function.
   *
   * @declare Highcharts.SeriesEventsOptionsObject
   *
   * @private
   */
  events: {},
  /**
   * Fires after the series has finished its initial animation, or in case
   * animation is disabled, immediately as the series is displayed.
   *
   * @sample {highcharts} highcharts/plotoptions/series-events-afteranimate/
   *         Show label after animate
   * @sample {highstock} highcharts/plotoptions/series-events-afteranimate/
   *         Show label after animate
   *
   * @type      {Highcharts.SeriesAfterAnimateCallbackFunction}
   * @since     4.0
   * @product   highcharts highstock gantt
   * @context   Highcharts.Series
   * @apioption plotOptions.series.events.afterAnimate
   */
  /**
   * Fires when the checkbox next to the series' name in the legend is
   * clicked. One parameter, `event`, is passed to the function. The state
   * of the checkbox is found by `event.checked`. The checked item is
   * found by `event.item`. Return `false` to prevent the default action
   * which is to toggle the select state of the series.
   *
   * @sample {highcharts} highcharts/plotoptions/series-events-checkboxclick/
   *         Alert checkbox status
   *
   * @type      {Highcharts.SeriesCheckboxClickCallbackFunction}
   * @since     1.2.0
   * @context   Highcharts.Series
   * @apioption plotOptions.series.events.checkboxClick
   */
  /**
   * Fires when the series is clicked. One parameter, `event`, is passed
   * to the function, containing common event information. Additionally,
   * `event.point` holds a pointer to the nearest point on the graph.
   *
   * @sample {highcharts} highcharts/plotoptions/series-events-click/
   *         Alert click info
   * @sample {highstock} stock/plotoptions/series-events-click/
   *         Alert click info
   * @sample {highmaps} maps/plotoptions/series-events-click/
   *         Display click info in subtitle
   *
   * @type      {Highcharts.SeriesClickCallbackFunction}
   * @context   Highcharts.Series
   * @apioption plotOptions.series.events.click
   */
  /**
   * Fires when the series is hidden after chart generation time, either
   * by clicking the legend item or by calling `.hide()`.
   *
   * @sample {highcharts} highcharts/plotoptions/series-events-hide/
   *         Alert when the series is hidden by clicking the legend item
   *
   * @type      {Highcharts.SeriesHideCallbackFunction}
   * @since     1.2.0
   * @context   Highcharts.Series
   * @apioption plotOptions.series.events.hide
   */
  /**
   * Fires when the legend item belonging to the series is clicked. One
   * parameter, `event`, is passed to the function. The default action
   * is to toggle the visibility of the series. This can be prevented
   * by returning `false` or calling `event.preventDefault()`.
   *
   * **Note:** This option is deprecated in favor of
   * [legend.events.itemClick](#legend.events.itemClick).
   *
   * @type       {Highcharts.SeriesLegendItemClickCallbackFunction}
   * @deprecated 11.4.4
   * @context    Highcharts.Series
   * @apioption  plotOptions.series.events.legendItemClick
   */
  /**
   * Fires when the mouse leaves the graph. One parameter, `event`, is
   * passed to the function, containing common event information. If the
   * [stickyTracking](#plotOptions.series) option is true, `mouseOut`
   * doesn't happen before the mouse enters another graph or leaves the
   * plot area.
   *
   * @sample {highcharts} highcharts/plotoptions/series-events-mouseover-sticky/
   *         With sticky tracking by default
   * @sample {highcharts} highcharts/plotoptions/series-events-mouseover-no-sticky/
   *         Without sticky tracking
   *
   * @type      {Highcharts.SeriesMouseOutCallbackFunction}
   * @context   Highcharts.Series
   * @apioption plotOptions.series.events.mouseOut
   */
  /**
   * Fires when the mouse enters the graph. One parameter, `event`, is
   * passed to the function, containing common event information.
   *
   * @sample {highcharts} highcharts/plotoptions/series-events-mouseover-sticky/
   *         With sticky tracking by default
   * @sample {highcharts} highcharts/plotoptions/series-events-mouseover-no-sticky/
   *         Without sticky tracking
   *
   * @type      {Highcharts.SeriesMouseOverCallbackFunction}
   * @context   Highcharts.Series
   * @apioption plotOptions.series.events.mouseOver
   */
  /**
   * Fires when the series is shown after chart generation time, either
   * by clicking the legend item or by calling `.show()`.
   *
   * @sample {highcharts} highcharts/plotoptions/series-events-show/
   *         Alert when the series is shown by clicking the legend item.
   *
   * @type      {Highcharts.SeriesShowCallbackFunction}
   * @since     1.2.0
   * @context   Highcharts.Series
   * @apioption plotOptions.series.events.show
   */
  /**
   * Options for the point markers of line and scatter-like series. Properties
   * like `fillColor`, `lineColor` and `lineWidth` define the visual
   * appearance of the markers. The `symbol` option defines the shape. Other
   * series types, like column series, don't have markers, but have visual
   * options on the series level instead.
   *
   * In styled mode, the markers can be styled with the `.highcharts-point`,
   * `.highcharts-point-hover` and `.highcharts-point-select` class names.
   *
   * @declare Highcharts.PointMarkerOptionsObject
   *
   * @sample {highmaps} maps/demo/mappoint-mapmarker
   *         Using the mapmarker symbol for points
   *
   * @private
   */
  marker: {
    /**
     * Enable or disable the point marker. If `undefined`, the markers
     * are hidden when the data is dense, and shown for more widespread
     * data points.
     *
     * @sample {highcharts} highcharts/plotoptions/series-marker-enabled/
     *         Disabled markers
     * @sample {highcharts} highcharts/plotoptions/series-marker-enabled-false/
     *         Disabled in normal state but enabled on hover
     * @sample {highstock} stock/plotoptions/series-marker/
     *         Enabled markers
     *
     * @type      {boolean}
     * @default   {highcharts} undefined
     * @default   {highstock} false
     * @apioption plotOptions.series.marker.enabled
     */
    /**
     * The threshold for how dense the point markers should be before
     * they are hidden, given that `enabled` is not defined. The number
     * indicates the horizontal distance between the two closest points
     * in the series, as multiples of the `marker.radius`. In other
     * words, the default value of 2 means points are hidden if
     * overlapping horizontally.
     *
     * @sample highcharts/plotoptions/series-marker-enabledthreshold
     *         A higher threshold
     *
     * @since 6.0.5
     */
    enabledThreshold: 2,
    /**
     * The fill color of the point marker. When `undefined`, the series'
     * or point's color is used.
     *
     * @sample {highcharts} highcharts/plotoptions/series-marker-fillcolor/
     *         White fill
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @apioption plotOptions.series.marker.fillColor
     */
    /**
     * Image markers only. Set the image width explicitly. When using
     * this option, a `width` must also be set.
     *
     * @sample {highcharts} highcharts/plotoptions/series-marker-width-height/
     *         Fixed width and height
     * @sample {highstock} highcharts/plotoptions/series-marker-width-height/
     *         Fixed width and height
     *
     * @type      {number}
     * @since     4.0.4
     * @apioption plotOptions.series.marker.height
     */
    /**
     * The color of the point marker's outline. When `undefined`, the
     * series' or point's color is used.
     *
     * @sample {highcharts} highcharts/plotoptions/series-marker-fillcolor/
     *         Inherit from series color (undefined)
     *
     * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     */
    lineColor: "#ffffff",
    /**
     * The width of the point marker's outline.
     *
     * @sample {highcharts} highcharts/plotoptions/series-marker-fillcolor/
     *         2px blue marker
     */
    lineWidth: 0,
    /**
     * The radius of the point marker.
     *
     * @sample {highcharts} highcharts/plotoptions/series-marker-radius/
     *         Bigger markers
     *
     * @default {highstock} 2
     * @default {highcharts} 4
     *
     */
    radius: 4,
    /**
     * A predefined shape or symbol for the marker. When undefined, the
     * symbol is pulled from options.symbols. Other possible values are
     * `'circle'`, `'square'`,`'diamond'`, `'triangle'` and
     * `'triangle-down'`.
     *
     * Additionally, the URL to a graphic can be given on this form:
     * `'url(graphic.png)'`. Note that for the image to be applied to
     * exported charts, its URL needs to be accessible by the export
     * server.
     *
     * Custom callbacks for symbol path generation can also be added to
     * `Highcharts.SVGRenderer.prototype.symbols`. The callback is then
     * used by its method name, as shown in the demo.
     *
     * @sample {highcharts} highcharts/plotoptions/series-marker-symbol/
     *         Predefined, graphic and custom markers
     * @sample {highstock} highcharts/plotoptions/series-marker-symbol/
     *         Predefined, graphic and custom markers
     * @sample {highmaps} maps/demo/mappoint-mapmarker
     *         Using the mapmarker symbol for points
     *
     * @type      {string}
     * @apioption plotOptions.series.marker.symbol
     */
    /**
     * Image markers only. Set the image width explicitly. When using
     * this option, a `height` must also be set.
     *
     * @sample {highcharts} highcharts/plotoptions/series-marker-width-height/
     *         Fixed width and height
     * @sample {highstock} highcharts/plotoptions/series-marker-width-height/
     *         Fixed width and height
     *
     * @type      {number}
     * @since     4.0.4
     * @apioption plotOptions.series.marker.width
     */
    /**
     * States for a single point marker.
     *
     * @declare Highcharts.PointStatesOptionsObject
     */
    states: {
      /**
       * The normal state of a single point marker. Currently only
       * used for setting animation when returning to normal state
       * from hover.
       *
       * @declare Highcharts.PointStatesNormalOptionsObject
       */
      normal: {
        /**
         * Animation when returning to normal state after hovering.
         *
         * @type {boolean|Partial<Highcharts.AnimationOptionsObject>}
         */
        animation: !0
      },
      /**
       * The hover state for a single point marker.
       *
       * @declare Highcharts.PointStatesHoverOptionsObject
       */
      hover: {
        /**
         * Animation when hovering over the marker.
         *
         * @type {boolean|Partial<Highcharts.AnimationOptionsObject>}
         */
        animation: {
          /** @internal */
          duration: 150
        },
        /**
         * Enable or disable the point marker.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-states-hover-enabled/
         *         Disabled hover state
         */
        enabled: !0,
        /**
         * The fill color of the marker in hover state. When
         * `undefined`, the series' or point's fillColor for normal
         * state is used.
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @apioption plotOptions.series.marker.states.hover.fillColor
         */
        /**
         * The color of the point marker's outline. When
         * `undefined`, the series' or point's lineColor for normal
         * state is used.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-states-hover-linecolor/
         *         White fill color, black line color
         *
         * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         * @apioption plotOptions.series.marker.states.hover.lineColor
         */
        /**
         * The width of the point marker's outline. When
         * `undefined`, the series' or point's lineWidth for normal
         * state is used.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-states-hover-linewidth/
         *         3px line width
         *
         * @type      {number}
         * @apioption plotOptions.series.marker.states.hover.lineWidth
         */
        /**
         * The radius of the point marker. In hover state, it
         * defaults to the normal state's radius + 2 as per the
         * [radiusPlus](#plotOptions.series.marker.states.hover.radiusPlus)
         * option.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-states-hover-radius/
         *         10px radius
         *
         * @type      {number}
         * @apioption plotOptions.series.marker.states.hover.radius
         */
        /**
         * The number of pixels to increase the radius of the
         * hovered point.
         *
         * @sample {highcharts} highcharts/plotoptions/series-states-hover-linewidthplus/
         *         5 pixels greater radius on hover
         * @sample {highstock} highcharts/plotoptions/series-states-hover-linewidthplus/
         *         5 pixels greater radius on hover
         *
         * @since 4.0.3
         */
        radiusPlus: 2,
        /**
         * The additional line width for a hovered point.
         *
         * @sample {highcharts} highcharts/plotoptions/series-states-hover-linewidthplus/
         *         2 pixels wider on hover
         * @sample {highstock} highcharts/plotoptions/series-states-hover-linewidthplus/
         *         2 pixels wider on hover
         *
         * @since 4.0.3
         */
        lineWidthPlus: 1
      },
      /**
       * The appearance of the point marker when selected. In order to
       * allow a point to be selected, set the
       * `series.allowPointSelect` option to true.
       *
       * @declare Highcharts.PointStatesSelectOptionsObject
       */
      select: {
        /**
         * Enable or disable visible feedback for selection.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-states-select-enabled/
         *         Disabled select state
         *
         * @type      {boolean}
         * @default   true
         * @apioption plotOptions.series.marker.states.select.enabled
         */
        /**
         * The radius of the point marker. In hover state, it
         * defaults to the normal state's radius + 2.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-states-select-radius/
         *         10px radius for selected points
         *
         * @type      {number}
         * @apioption plotOptions.series.marker.states.select.radius
         */
        /**
         * The fill color of the point marker.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-states-select-fillcolor/
         *         Solid red discs for selected points
         *
         * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        fillColor: "#cccccc",
        /**
         * The color of the point marker's outline. When
         * `undefined`, the series' or point's color is used.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-states-select-linecolor/
         *         Red line color for selected points
         *
         * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
         */
        lineColor: "#000000",
        /**
         * The width of the point marker's outline.
         *
         * @sample {highcharts} highcharts/plotoptions/series-marker-states-select-linewidth/
         *         3px line width for selected points
         */
        lineWidth: 2
      }
    }
  },
  /**
   * Properties for each single point.
   *
   * @declare Highcharts.PlotSeriesPointOptions
   *
   * @private
   */
  point: {
    /**
     * Fires when a point is clicked. One parameter, `event`, is passed
     * to the function, containing common event information.
     *
     * If the `series.allowPointSelect` option is true, the default
     * action for the point's click event is to toggle the point's
     * select state. Returning `false` cancels this action.
     *
     * @sample {highcharts} highcharts/plotoptions/series-point-events-click/
     *         Click marker to alert values
     * @sample {highcharts} highcharts/plotoptions/series-point-events-click-column/
     *         Click column
     * @sample {highcharts} highcharts/plotoptions/series-point-events-click-url/
     *         Go to URL
     * @sample {highmaps} maps/plotoptions/series-point-events-click/
     *         Click marker to display values
     * @sample {highmaps} maps/plotoptions/series-point-events-click-url/
     *         Go to URL
     *
     * @type      {Highcharts.PointClickCallbackFunction}
     * @context   Highcharts.Point
     * @apioption plotOptions.series.point.events.click
     */
    /**
     * Fires when the mouse leaves the area close to the point. One
     * parameter, `event`, is passed to the function, containing common
     * event information.
     *
     * @sample {highcharts} highcharts/plotoptions/series-point-events-mouseover/
     *         Show values in the chart's corner on mouse over
     *
     * @type      {Highcharts.PointMouseOutCallbackFunction}
     * @context   Highcharts.Point
     * @apioption plotOptions.series.point.events.mouseOut
     */
    /**
     * Fires when the mouse enters the area close to the point. One
     * parameter, `event`, is passed to the function, containing common
     * event information.
     *
     * Returning `false` cancels the default behavior, which is to show a
     * tooltip for the point.
     *
     * @sample {highcharts} highcharts/plotoptions/series-point-events-mouseover/
     *         Show values in the chart's corner on mouse over
     *
     * @type      {Highcharts.PointMouseOverCallbackFunction}
     * @context   Highcharts.Point
     * @apioption plotOptions.series.point.events.mouseOver
     */
    /**
     * Fires when the point is removed using the `.remove()` method. One
     * parameter, `event`, is passed to the function. Returning `false`
     * cancels the operation.
     *
     * @sample {highcharts} highcharts/plotoptions/series-point-events-remove/
     *         Remove point and confirm
     *
     * @type      {Highcharts.PointRemoveCallbackFunction}
     * @since     1.2.0
     * @context   Highcharts.Point
     * @apioption plotOptions.series.point.events.remove
     */
    /**
     * Fires when the point is selected either programmatically or
     * following a click on the point. One parameter, `event`, is passed
     * to the function. Returning `false` cancels the operation.
     *
     * @sample {highcharts} highcharts/plotoptions/series-point-events-select/
     *         Report the last selected point
     * @sample {highmaps} maps/plotoptions/series-allowpointselect/
     *         Report select and unselect
     *
     * @type      {Highcharts.PointSelectCallbackFunction}
     * @since     1.2.0
     * @context   Highcharts.Point
     * @apioption plotOptions.series.point.events.select
     */
    /**
     * Fires when the point is unselected either programmatically or
     * following a click on the point. One parameter, `event`, is passed
     * to the function.
     *  Returning `false` cancels the operation.
     *
     * @sample {highcharts} highcharts/plotoptions/series-point-events-unselect/
     *         Report the last unselected point
     * @sample {highmaps} maps/plotoptions/series-allowpointselect/
     *         Report select and unselect
     *
     * @type      {Highcharts.PointUnselectCallbackFunction}
     * @since     1.2.0
     * @context   Highcharts.Point
     * @apioption plotOptions.series.point.events.unselect
     */
    /**
     * Fires when the point is updated programmatically through the
     * `.update()` method. One parameter, `event`, is passed to the
     * function. The new point options can be accessed through
     * `event.options`. Returning `false` cancels the operation.
     *
     * @sample {highcharts} highcharts/plotoptions/series-point-events-update/
     *         Confirm point updating
     *
     * @type      {Highcharts.PointUpdateCallbackFunction}
     * @since     1.2.0
     * @context   Highcharts.Point
     * @apioption plotOptions.series.point.events.update
     */
    /**
     * Events for each single point.
     *
     * @declare Highcharts.PointEventsOptionsObject
     */
    events: {}
  },
  /**
   * Options for the series data labels, appearing next to each data
   * point.
   *
   * Since v6.2.0, multiple data labels can be applied to each single
   * point by defining them as an array of configs.
   *
   * In styled mode, the data labels can be styled with the
   * `.highcharts-data-label-box` and `.highcharts-data-label` class names
   * ([see example](https://www.highcharts.com/samples/highcharts/css/series-datalabels)).
   *
   * @sample {highcharts} highcharts/plotoptions/series-datalabels-enabled
   *         Data labels enabled
   * @sample {highcharts} highcharts/plotoptions/series-datalabels-multiple
   *         Multiple data labels on a bar series
   * @sample {highcharts} highcharts/css/series-datalabels
   *         Styled mode example
   * @sample {highmaps} maps/demo/color-axis
   *         Choropleth map with data labels
   * @sample {highmaps} maps/demo/mappoint-datalabels-mapmarker
   *         Using data labels as map markers
   *
   * @type    {*|Array<*>}
   * @product highcharts highstock highmaps gantt
   *
   * @private
   */
  dataLabels: {
    /**
     * Enable or disable the initial animation when a series is displayed
     * for the `dataLabels`. The animation can also be set as a
     * configuration object. Please note that this option only applies to
     * the initial animation.
     *
     * For other animations, see [chart.animation](#chart.animation) and the
     * animation parameter under the API methods. The following properties
     * are supported:
     *
     * - `defer`: The animation delay time in milliseconds.
     *
     * @sample {highcharts} highcharts/plotoptions/animation-defer/
     *          Animation defer settings
     *
     * @type      {boolean|Partial<Highcharts.AnimationOptionsObject>}
     * @since     8.2.0
     * @apioption plotOptions.series.dataLabels.animation
     */
    animation: {},
    /**
     * The animation delay time in milliseconds. Set to `0` to render the
     * data labels immediately. As `undefined` inherits defer time from the
     * [series.animation.defer](#plotOptions.series.animation.defer).
     *
     * @type      {number}
     * @since     8.2.0
     * @apioption plotOptions.series.dataLabels.animation.defer
     */
    /**
     * The alignment of the data label compared to the point. If `right`,
     * the right side of the label should be touching the point. For points
     * with an extent, like columns, the alignments also dictates how to
     * align it inside the box, as given with the
     * [inside](#plotOptions.column.dataLabels.inside) option. Can be one of
     * `left`, `center` or `right`.
     *
     * @sample {highcharts}
     *         highcharts/plotoptions/series-datalabels-align-left/ Left
     *         aligned
     * @sample {highcharts}
     *         highcharts/plotoptions/bar-datalabels-align-inside-bar/ Data
     *         labels inside the bar
     *
     * @type {Highcharts.AlignValue|null}
     */
    align: "center",
    /**
     * Alignment method for data labels. If set to `plotEdges`, the labels
     * are aligned within the plot area in the direction of the y-axis. So
     * in a regular column chart, the labels are aligned vertically
     * according to the `verticalAlign` setting. In a bar chart, which is
     * inverted, the labels are aligned horizontally according to the
     * `align` setting. Applies to cartesian series only.
     *
     * @sample {highcharts} highcharts/series-bar/datalabels-alignto/
     *         Align to plot edges
     *
     * @type      {string}
     * @since 11.4.2
     * @apioption plotOptions.series.dataLabels.alignTo
     */
    /**
     * Whether to allow data labels to overlap. To make the labels less
     * sensitive for overlapping, the
     * [dataLabels.padding](#plotOptions.series.dataLabels.padding)
     * can be set to 0.
     *
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-allowoverlap-false/
     *         Don't allow overlap
     *
     * @type      {boolean}
     * @default   false
     * @since     4.1.0
     * @apioption plotOptions.series.dataLabels.allowOverlap
     */
    /**
     * The background color or gradient for the data label. Setting it to
     * `auto` will use the point's color.
     *
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-box/
     *         Data labels box options
     * @sample {highmaps} maps/plotoptions/series-datalabels-box/
     *         Data labels box options
     * @sample {highmaps} maps/demo/mappoint-datalabels-mapmarker
     *         Data labels as map markers
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @since     2.2.1
     * @apioption plotOptions.series.dataLabels.backgroundColor
     */
    /**
     * The border color for the data label. Setting it to `auto` will use
     * the point's color. Defaults to `undefined`.
     *
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-box/
     *         Data labels box options
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @since     2.2.1
     * @apioption plotOptions.series.dataLabels.borderColor
     */
    /**
     * The border radius in pixels for the data label.
     *
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-box/
     *         Data labels box options
     * @sample {highmaps} maps/plotoptions/series-datalabels-box/
     *         Data labels box options
     *
     * @type      {number}
     * @default   0
     * @since     2.2.1
     * @apioption plotOptions.series.dataLabels.borderRadius
     */
    /**
     * The border width in pixels for the data label.
     *
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-box/
     *         Data labels box options
     *
     * @type      {number}
     * @default   0
     * @since     2.2.1
     * @apioption plotOptions.series.dataLabels.borderWidth
     */
    borderWidth: 0,
    /**
     * A class name for the data label. Particularly in styled mode,
     * this can be used to give each series' or point's data label
     * unique styling. In addition to this option, a default color class
     * name is added so that we can give the labels a contrast text
     * shadow.
     *
     * @sample {highcharts} highcharts/css/data-label-contrast/
     *         Contrast text shadow
     * @sample {highcharts} highcharts/css/series-datalabels/
     *         Styling by CSS
     *
     * @type      {string}
     * @since     5.0.0
     * @apioption plotOptions.series.dataLabels.className
     */
    /**
     * This options is deprecated.
     * Use [style.color](#plotOptions.series.dataLabels.style) instead.
     *
     * The text color for the data labels. Defaults to `undefined`. For
     * certain series types, like column or map, the data labels can be
     * drawn inside the points. In this case the data label will be
     * drawn with maximum contrast by default. Additionally, it will be
     * given a `text-outline` style with the opposite color, to further
     * increase the contrast. This can be overridden by setting the
     * `text-outline` style to `none` in the `dataLabels.style` option.
     *
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-color/
     *         Red data labels
     * @sample {highmaps} maps/demo/color-axis/
     *         White data labels
     *
     * @see [style.color](#plotOptions.series.dataLabels.style)
     *
     * @type       {Highcharts.ColorType}
     * @deprecated 10.3
     * @apioption  plotOptions.series.dataLabels.color
     */
    /**
     * Whether to hide data labels that are outside the plot area. By
     * default, the data label is moved inside the plot area according
     * to the
     * [overflow](#plotOptions.series.dataLabels.overflow)
     * option.
     *
     * @type      {boolean}
     * @default   true
     * @since     2.3.3
     * @apioption plotOptions.series.dataLabels.crop
     */
    /**
     * Whether to defer displaying the data labels until the initial
     * series animation has finished. Setting to `false` renders the
     * data label immediately. If set to `true` inherits the defer
     * time set in [plotOptions.series.animation](#plotOptions.series.animation).
     *
     * @since     4.0.0
     * @type      {boolean}
     * @product   highcharts highstock gantt
     */
    defer: !0,
    /**
     * Enable or disable the data labels.
     *
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-enabled/
     *         Data labels enabled
     * @sample {highmaps} maps/demo/color-axis/
     *         Data labels enabled
     *
     * @type      {boolean}
     * @default   false
     * @apioption plotOptions.series.dataLabels.enabled
     */
    /**
     * A declarative filter to control of which data labels to display.
     * The declarative filter is designed for use when callback
     * functions are not available, like when the chart options require
     * a pure JSON structure or for use with graphical editors. For
     * programmatic control, use the `formatter` instead, and return
     * `undefined` to disable a single data label.
     *
     * @example
     * filter: {
     *     property: 'percentage',
     *     operator: '>',
     *     value: 4
     * }
     *
     * @sample {highcharts} highcharts/demo/pie-monochrome
     *         Data labels filtered by percentage
     *
     * @declare   Highcharts.DataLabelsFilterOptionsObject
     * @since     6.0.3
     * @apioption plotOptions.series.dataLabels.filter
     */
    /**
     * The operator to compare by. Can be one of `>`, `<`, `>=`, `<=`,
     * `==`, `===`, `!=` and `!==`.
     *
     * @type       {string}
     * @validvalue [">", "<", ">=", "<=", "==", "===", "!=", "!=="]
     * @apioption  plotOptions.series.dataLabels.filter.operator
     */
    /**
     * The point property to filter by. Point options are passed
     * directly to properties, additionally there are `y` value,
     * `percentage` and others listed under {@link Highcharts.Point}
     * members.
     *
     * @type      {string}
     * @apioption plotOptions.series.dataLabels.filter.property
     */
    /**
     * The value to compare against.
     *
     * @type      {number}
     * @apioption plotOptions.series.dataLabels.filter.value
     */
    /**
     * A
     * [format string](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting)
     * for the data label. Available variables are the same as for
     * `formatter`.
     *
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-format/
     *         Add a unit
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-format-subexpression/
     *         Complex logic in the format string
     * @sample {highmaps} maps/plotoptions/series-datalabels-format/
     *         Formatted value in the data label
     *
     * @type      {string}
     * @default   y
     * @default   point.value
     * @since     3.0
     * @apioption plotOptions.series.dataLabels.format
     */
    // eslint-disable-next-line valid-jsdoc
    /**
     * Callback JavaScript function to format the data label. Note that if a
     * `format` is defined, the format takes precedence and the formatter is
     * ignored.
     *
     * @sample {highmaps} maps/plotoptions/series-datalabels-format/
     *         Formatted value
     *
     * @type {Highcharts.DataLabelsFormatterCallbackFunction}
     */
    formatter: function() {
      const { numberFormatter: c } = this.series.chart;
      return typeof this.y != "number" ? "" : c(this.y, -1);
    },
    /**
     * For points with an extent, like columns or map areas, whether to
     * align the data label inside the box or to the actual value point.
     * Defaults to `false` in most cases, `true` in stacked columns.
     *
     * @type      {boolean}
     * @since     3.0
     * @apioption plotOptions.series.dataLabels.inside
     */
    /**
     * Format for points with the value of null. Works analogously to
     * [format](#plotOptions.series.dataLabels.format). `nullFormat` can
     * be applied only to series which support displaying null points.
     * `heatmap` and `tilemap` supports `nullFormat` by default while the
     * following series requires [#series.nullInteraction] set to `true`:
     * `line`, `spline`, `area`, `area-spline`, `column`, `bar`, and
     * `timeline`. Does not work with series that don't display null
     * points, like `pie`.
     *
     * @sample {highcharts} highcharts/series/null-interaction/
     *         Line chart with null interaction
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-nullformat/
     *         Heatmap with null interaction
     *
     * @type      {boolean|string}
     * @since     7.1.0
     * @apioption plotOptions.series.dataLabels.nullFormat
     */
    /**
             * Callback JavaScript function that defines formatting for points
             * with the value of null. Works analogously to [formatter](#plotOptions.series.dataLabels.formatter).
             * `nullFormatter` can be applied only to series which support
             * displaying null points. `heatmap` and `tilemap` supports
             * `nullFormatter` by default while the following series requires [#series.nullInteraction]
             * set to `true`: `line`, `spline`, `area`, `area-spline`, `column`,
             * `bar`, and `timeline`. Does not work with series that don't display
             * null points, like `pie`.
    
             * @sample {highcharts} highcharts/plotoptions/series-datalabels-nullformat/
             *         Format data label for null points in heat map
             *
             * @type      {Highcharts.DataLabelsFormatterCallbackFunction}
             * @since     7.1.0
             * @apioption plotOptions.series.dataLabels.nullFormatter
             */
    /**
     * How to handle data labels that flow outside the plot area. The
     * default is `"justify"`, which aligns them inside the plot area.
     * For columns and bars, this means it will be moved inside the bar.
     * To display data labels outside the plot area, set `crop` to
     * `false` and `overflow` to `"allow"`.
     *
     * @type       {Highcharts.DataLabelsOverflowValue}
     * @default    justify
     * @since      3.0.6
     * @apioption  plotOptions.series.dataLabels.overflow
     */
    /**
     * When either the `borderWidth` or the `backgroundColor` is set,
     * this is the padding within the box.
     *
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-box/
     *         Data labels box options
     * @sample {highmaps} maps/plotoptions/series-datalabels-box/
     *         Data labels box options
     *
     * @since 2.2.1
     */
    padding: 5,
    /**
     * Aligns data labels relative to points. If `center` alignment is
     * not possible, it defaults to `right`.
     *
     * @type      {Highcharts.AlignValue}
     * @default   center
     * @apioption plotOptions.series.dataLabels.position
     */
    /**
     * Text rotation in degrees. Note that due to a more complex
     * structure, backgrounds, borders and padding will be lost on a
     * rotated data label.
     *
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-rotation/
     *         Vertical labels
     *
     * @type      {number}
     * @default   0
     * @apioption plotOptions.series.dataLabels.rotation
     */
    /**
     * The shadow of the box. Works best with `borderWidth` or
     * `backgroundColor`. Since 2.3 the shadow can be an object
     * configuration containing `color`, `offsetX`, `offsetY`, `opacity`
     * and `width`.
     *
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-box/
     *         Data labels box options
     *
     * @type      {boolean|Highcharts.ShadowOptionsObject}
     * @default   false
     * @since     2.2.1
     * @apioption plotOptions.series.dataLabels.shadow
     */
    /**
     * The name of a symbol to use for the border around the label.
     * Symbols are predefined functions on the Renderer object.
     *
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-shape/
     *         A callout for annotations
     *
     * @type      {string}
     * @default   square
     * @since     4.1.2
     * @apioption plotOptions.series.dataLabels.shape
     */
    /**
     * Styles for the label. The default `color` setting is
     * `"contrast"`, which is a pseudo color that Highcharts picks up
     * and applies the maximum contrast to the underlying point item,
     * for example the bar in a bar chart.
     *
     * The `textOutline` is a pseudo property that applies an outline of
     * the given width with the given color, which by default is the
     * maximum contrast to the text. So a bright text color will result
     * in a black text outline for maximum readability on a mixed
     * background. In some cases, especially with grayscale text, the
     * text outline doesn't work well, in which cases it can be disabled
     * by setting it to `"none"`. When `useHTML` is true, the
     * `textOutline` will not be picked up. In this, case, the same
     * effect can be acheived through the `text-shadow` CSS property.
     *
     * For some series types, where each point has an extent, like for
     * example tree maps, the data label may overflow the point. There
     * are two strategies for handling overflow. By default, the text
     * will wrap to multiple lines. The other strategy is to set
     * `style.textOverflow` to `ellipsis`, which will keep the text on
     * one line plus it will break inside long words.
     *
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-style/
     *         Bold labels
     * @sample {highcharts} highcharts/plotoptions/pie-datalabels-overflow/
     *         Long labels truncated with an ellipsis in a pie
     * @sample {highcharts} highcharts/plotoptions/pie-datalabels-overflow-wrap/
     *         Long labels are wrapped in a pie
     * @sample {highmaps} maps/demo/color-axis/
     *         Bold labels
     *
     * @type      {Highcharts.CSSObject}
     * @since     4.1.0
     * @apioption plotOptions.series.dataLabels.style
     */
    style: {
      /** @internal */
      fontSize: "0.7em",
      /** @internal */
      fontWeight: "bold",
      /** @internal */
      color: "contrast",
      /** @internal */
      textOutline: "1px contrast"
    },
    /**
     * Options for a label text which should follow marker's shape.
     * Border and background are disabled for a label that follows a
     * path.
     *
     * **Note:** Only SVG-based renderer supports this option. Setting
     * `useHTML` to true will disable this option.
     *
     * @declare   Highcharts.DataLabelsTextPathOptionsObject
     * @since     7.1.0
     * @apioption plotOptions.series.dataLabels.textPath
     */
    /**
     * Presentation attributes for the text path.
     *
     * @type      {Highcharts.SVGAttributes}
     * @since     7.1.0
     * @apioption plotOptions.series.dataLabels.textPath.attributes
     */
    /**
     * Enable or disable `textPath` option for link's or marker's data
     * labels.
     *
     * @type      {boolean}
     * @since     7.1.0
     * @apioption plotOptions.series.dataLabels.textPath.enabled
     */
    /**
     * Whether to
     * [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)
     * to render the labels.
     *
     * @type      {boolean}
     * @default   false
     * @apioption plotOptions.series.dataLabels.useHTML
     */
    /**
     * The vertical alignment of a data label. Can be one of `top`,
     * `middle` or `bottom`. The default value depends on the data, for
     * instance in a column chart, the label is above positive values
     * and below negative values.
     *
     * @type  {Highcharts.VerticalAlignValue|null}
     * @since 2.3.3
     */
    verticalAlign: "bottom",
    /**
     * The x position offset of the label relative to the point in
     * pixels.
     *
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-rotation/
     *         Vertical and positioned
     * @sample {highcharts} highcharts/plotoptions/bar-datalabels-align-inside-bar/
     *         Data labels inside the bar
     */
    x: 0,
    /**
     * The z index of the data labels. Use a `zIndex` of 6 to display it above
     * the series, or use a `zIndex` of 2 to display it behind the series.
     *
     * @type      {number}
     * @default   6
     * @since     2.3.5
     * @apioption plotOptions.series.dataLabels.zIndex
     */
    /**
     * The y position offset of the label relative to the point in
     * pixels.
     *
     * @sample {highcharts} highcharts/plotoptions/series-datalabels-rotation/
     *         Vertical and positioned
     */
    y: 0
  },
  /**
   * When the series contains less points than the crop threshold, all
   * points are drawn, even if the points fall outside the visible plot
   * area at the current zoom. The advantage of drawing all points
   * (including markers and columns), is that animation is performed on
   * updates. On the other hand, when the series contains more points than
   * the crop threshold, the series data is cropped to only contain points
   * that fall within the plot area. The advantage of cropping away
   * invisible points is to increase performance on large series.
   *
   * @since   2.2
   * @product highcharts highstock
   *
   * @private
   */
  cropThreshold: 300,
  /**
   * Opacity of a series parts: line, fill (e.g. area) and dataLabels.
   *
   * @see [states.inactive.opacity](#plotOptions.series.states.inactive.opacity)
   *
   * @since 7.1.0
   *
   * @private
   */
  opacity: 1,
  /**
   * The width of each point on the x axis. For example in a column chart
   * with one value each day, the pointRange would be 1 day (= 24 * 3600
   * * 1000 milliseconds). This is normally computed automatically, but
   * this option can be used to override the automatic value.
   *
   * @product highstock
   *
   * @private
   */
  pointRange: 0,
  /**
   * When this is true, the series will not cause the Y axis to cross
   * the zero plane (or [threshold](#plotOptions.series.threshold) option)
   * unless the data actually crosses the plane.
   *
   * For example, if `softThreshold` is `false`, a series of 0, 1, 2,
   * 3 will make the Y axis show negative values according to the
   * `minPadding` option. If `softThreshold` is `true`, the Y axis starts
   * at 0.
   *
   * @since   4.1.9
   * @product highcharts highstock
   *
   * @private
   */
  softThreshold: !0,
  /**
   * @declare Highcharts.SeriesStatesOptionsObject
   *
   * @private
   */
  states: {
    /**
     * The normal state of a series, or for point items in column, pie
     * and similar series. Currently only used for setting animation
     * when returning to normal state from hover.
     *
     * @declare Highcharts.SeriesStatesNormalOptionsObject
     */
    normal: {
      /**
       * Animation when returning to normal state after hovering.
       *
           * @type {boolean|Partial<Highcharts.AnimationOptionsObject>}
       */
      animation: !0
    },
    /**
     * Options for the hovered series. These settings override the
     * normal state options when a series is moused over or touched.
     *
     * @declare Highcharts.SeriesStatesHoverOptionsObject
     */
    hover: {
      /**
       * Enable separate styles for the hovered series to visualize
       * that the user hovers either the series itself or the legend.
       *
       * @sample {highcharts} highcharts/plotoptions/series-states-hover-enabled/
       *         Line
       * @sample {highcharts} highcharts/plotoptions/series-states-hover-enabled-column/
       *         Column
       * @sample {highcharts} highcharts/plotoptions/series-states-hover-enabled-pie/
       *         Pie
       *
       * @type      {boolean}
       * @default   true
       * @since     1.2
       * @apioption plotOptions.series.states.hover.enabled
       */
      /**
       * Animation setting for hovering the graph in line-type series.
       *
       * @type {boolean|Partial<Highcharts.AnimationOptionsObject>}
       * @since   5.0.8
       * @product highcharts highstock
       */
      animation: {
        /**
         * The duration of the hover animation in milliseconds. By
         * default the hover state animates quickly in, and slowly
         * back to normal.
         *
         * @internal
         */
        duration: 150
      },
      /**
       * Pixel width of the graph line. By default this property is
       * undefined, and the `lineWidthPlus` property dictates how much
       * to increase the linewidth from normal state.
       *
       * @sample {highcharts} highcharts/plotoptions/series-states-hover-linewidth/
       *         5px line on hover
       *
       * @type      {number}
       * @product   highcharts highstock
       * @apioption plotOptions.series.states.hover.lineWidth
       */
      /**
       * The additional line width for the graph of a hovered series.
       *
       * @sample {highcharts} highcharts/plotoptions/series-states-hover-linewidthplus/
       *         5 pixels wider
       * @sample {highstock} highcharts/plotoptions/series-states-hover-linewidthplus/
       *         5 pixels wider
       *
       * @since   4.0.3
       * @product highcharts highstock
       */
      lineWidthPlus: 1,
      /**
       * In Highcharts 1.0, the appearance of all markers belonging
       * to the hovered series. For settings on the hover state of the
       * individual point, see
       * [marker.states.hover](#plotOptions.series.marker.states.hover).
       *
       * @deprecated
       *
       * @extends   plotOptions.series.marker
       * @excluding states, symbol
       * @product   highcharts highstock
       */
      marker: {
        // `lineWidth: base + 1`,
        // `radius: base + 1`
      },
      /**
       * Options for the halo appearing around the hovered point in
       * line-type series as well as outside the hovered slice in pie
       * charts. By default the halo is filled by the current point or
       * series color with an opacity of 0.25\. The halo can be
       * disabled by setting the `halo` option to `null`.
       *
       * In styled mode, the halo is styled with the
       * `.highcharts-halo` class, with colors inherited from
       * `.highcharts-color-{n}`.
       *
       * @sample {highcharts} highcharts/plotoptions/halo/
       *         Halo options
       * @sample {highstock} highcharts/plotoptions/halo/
       *         Halo options
       *
       * @declare Highcharts.SeriesStatesHoverHaloOptionsObject
       * @type    {null|*}
       * @since   4.0
       * @product highcharts highstock
       */
      halo: {
        /**
         * A collection of SVG attributes to override the appearance
         * of the halo, for example `fill`, `stroke` and
         * `stroke-width`.
         *
         * @type      {Highcharts.SVGAttributes}
         * @since     4.0
         * @product   highcharts highstock
         * @apioption plotOptions.series.states.hover.halo.attributes
         */
        /**
         * The pixel size of the halo. For point markers this is the
         * radius of the halo. For pie slices it is the width of the
         * halo outside the slice. For bubbles it defaults to 5 and
         * is the width of the halo outside the bubble.
         *
         * @since   4.0
         * @product highcharts highstock
         */
        size: 10,
        /**
         * Opacity for the halo unless a specific fill is overridden
         * using the `attributes` setting.
         *
         * @since   4.0
         * @product highcharts highstock
         */
        opacity: 0.25
      }
    },
    /**
     * Specific options for point in selected states, after being
     * selected by
     * [allowPointSelect](#plotOptions.series.allowPointSelect)
     * or programmatically.
     *
     * @sample maps/plotoptions/series-allowpointselect/
     *         Allow point select demo
     *
     * @declare   Highcharts.SeriesStatesSelectOptionsObject
     * @extends   plotOptions.series.states.hover
     * @excluding brightness
     */
    select: {
      animation: {
        /** @internal */
        duration: 0
      }
    },
    /**
     * The opposite state of a hover for series.
     *
     * @sample highcharts/plotoptions/series-states-inactive-disabled
     *         Disabled inactive state
     *
     * @declare Highcharts.SeriesStatesInactiveOptionsObject
     */
    inactive: {
      /**
       * Enable or disable the inactive state for a series
       *
       * @sample highcharts/plotoptions/series-states-inactive-disabled
       *         Disabled inactive state
       *
       * @type {boolean}
       * @default true
       * @apioption plotOptions.series.states.inactive.enabled
       */
      /**
       * The animation for entering the inactive state.
       *
       * @type {boolean|Partial<Highcharts.AnimationOptionsObject>}
       */
      animation: {
        /** @internal */
        duration: 150
      },
      /**
       * Opacity of series elements (dataLabels, line, area).
       *
       * @type {number}
       */
      opacity: 0.2
    }
  },
  /**
   * Sticky tracking of mouse events. When true, the `mouseOut` event on a
   * series isn't triggered until the mouse moves over another series, or
   * out of the plot area. When false, the `mouseOut` event on a series is
   * triggered when the mouse leaves the area around the series' graph or
   * markers. This also implies the tooltip when not shared. When
   * `stickyTracking` is false and `tooltip.shared` is false, the tooltip
   * will be hidden when moving the mouse between series. Defaults to true
   * for line and area type series, but to false for columns, pies etc.
   *
   * **Note:** The boost module will force this option because of
   * technical limitations.
   *
   * @sample {highcharts} highcharts/plotoptions/series-stickytracking-true/
   *         True by default
   * @sample {highcharts} highcharts/plotoptions/series-stickytracking-false/
   *         False
   *
   * @default {highcharts} true
   * @default {highstock} true
   * @default {highmaps} false
   * @since   2.0
   *
   * @private
   */
  stickyTracking: !0,
  /**
   * A configuration object for the tooltip rendering of each single
   * series. Properties are inherited from [tooltip](#tooltip), but only
   * the following properties can be defined on a series level.
   *
   * @declare   Highcharts.SeriesTooltipOptionsObject
   * @since     2.3
   * @extends   tooltip
   * @excluding animation, backgroundColor, borderColor, borderRadius,
   *            borderWidth, className, crosshairs, enabled, fixed, formatter,
   *            headerShape, hideDelay, outside, padding, positioner,
   *            shadow, shape, shared, snap, split, stickOnContact,
   *            style, useHTML
   * @apioption plotOptions.series.tooltip
   */
  /**
   * When a series contains a `data` array that is longer than this, the
   * Series class looks for data configurations of plain numbers or arrays of
   * numbers. The first and last valid points are checked. If found, the rest
   * of the data is assumed to be the same. This saves expensive data checking
   * and indexing in long series, and makes data-heavy charts render faster.
   *
   * Set it to `0` disable.
   *
   * Note:
   * - In boost mode turbo threshold is forced. Only array of numbers or two
   *   dimensional arrays are allowed.
   * - In version 11.4.3 and earlier, if object configurations were passed
   *   beyond the turbo threshold, a warning was logged in the console and the
   *   data series didn't render.
   *
   * @since   2.2
   * @product highcharts highstock gantt
   *
   * @private
   */
  turboThreshold: 1e3,
  /**
   * An array defining zones within a series. Zones can be applied to the
   * X axis, Y axis or Z axis for bubbles, according to the `zoneAxis`
   * option. The zone definitions have to be in ascending order regarding
   * to the value.
   *
   * In styled mode, the color zones are styled with the
   * `.highcharts-zone-{n}` class, or custom classed from the `className`
   * option
   * ([view live demo](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/color-zones/)).
   *
   * @see [zoneAxis](#plotOptions.series.zoneAxis)
   *
   * @sample {highcharts} highcharts/series/color-zones-simple/
   *         Color zones
   * @sample {highstock} highcharts/series/color-zones-simple/
   *         Color zones
   *
   * @declare   Highcharts.SeriesZonesOptionsObject
   * @type      {Array<*>}
   * @since     4.1.0
   * @product   highcharts highstock
   * @apioption plotOptions.series.zones
   */
  /**
   * Styled mode only. A custom class name for the zone.
   *
   * @sample highcharts/css/color-zones/
   *         Zones styled by class name
   *
   * @type      {string}
   * @since     5.0.0
   * @apioption plotOptions.series.zones.className
   */
  /**
   * Defines the color of the series.
   *
   * @see [series color](#plotOptions.series.color)
   *
   * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
   * @since     4.1.0
   * @product   highcharts highstock
   * @apioption plotOptions.series.zones.color
   */
  /**
   * A name for the dash style to use for the graph.
   *
   * @see [plotOptions.series.dashStyle](#plotOptions.series.dashStyle)
   *
   * @sample {highcharts|highstock} highcharts/series/color-zones-dashstyle-dot/
   *         Dashed line indicates prognosis
   *
   * @type      {Highcharts.DashStyleValue}
   * @since     4.1.0
   * @product   highcharts highstock
   * @apioption plotOptions.series.zones.dashStyle
   */
  /**
   * Defines the fill color for the series (in area type series)
   *
   * @see [fillColor](#plotOptions.area.fillColor)
   *
   * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
   * @since     4.1.0
   * @product   highcharts highstock
   * @apioption plotOptions.series.zones.fillColor
   */
  /**
   * The value up to where the zone extends, if undefined the zones
   * stretches to the last value in the series.
   *
   * @type      {number}
   * @since     4.1.0
   * @product   highcharts highstock
   * @apioption plotOptions.series.zones.value
   */
  /**
   * When using dual or multiple color axes, this number defines which
   * colorAxis the particular series is connected to. It refers to
   * either the
   * {@link #colorAxis.id|axis id}
   * or the index of the axis in the colorAxis array, with 0 being the
   * first. Set this option to false to prevent a series from connecting
   * to the default color axis.
   *
   * Since v7.2.0 the option can also be an axis id or an axis index
   * instead of a boolean flag.
   *
   * @sample highcharts/coloraxis/coloraxis-with-pie/
   *         Color axis with pie series
   * @sample highcharts/coloraxis/multiple-coloraxis/
   *         Multiple color axis
   *
   * @type      {number|string|boolean}
   * @default   0
   * @product   highcharts highstock highmaps
   * @apioption plotOptions.series.colorAxis
   */
  /**
   * Determines what data value should be used to calculate point color
   * if `colorAxis` is used. Requires to set `min` and `max` if some
   * custom point property is used or if approximation for data grouping
   * is set to `'sum'`.
   *
   * @sample highcharts/coloraxis/custom-color-key/
   *         Custom color key
   * @sample highcharts/coloraxis/color-key-with-stops/
   *         Custom colorKey with color axis stops
   * @sample highcharts/coloraxis/changed-default-color-key/
   *         Changed default color key
   *
   * @type      {string}
   * @default   y
   * @since     7.2.0
   * @product   highcharts highstock highmaps
   * @apioption plotOptions.series.colorKey
   */
  /**
   * What type of legend symbol to render for this series. Can be one of
   * `areaMarker`, `lineMarker` or `rectangle`.
   *
   * @validvalue ["areaMarker", "lineMarker", "rectangle"]
   *
   * @sample {highcharts} highcharts/series/legend-symbol/
   *         Change the legend symbol
   *
   * @type      {string}
   * @default   rectangle
   * @since     11.0.1
   * @apioption plotOptions.series.legendSymbol
   */
  /**
   * Defines the color of the legend symbol for this series. Defaults to
   * undefined, in which case the series color is used. Does not work with
   * styled mode.
   *
   * @sample {highcharts|highstock} highcharts/series/legend-symbol-color/
   *         Change the legend symbol color
   *
   * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
   * @default   undefined
   * @since 12.0.0
   * @product   highcharts highstock highmaps
   * @apioption plotOptions.series.legendSymbolColor
   */
  /**
   * Determines whether the series should look for the nearest point
   * in both dimensions or just the x-dimension when hovering the series.
   * Defaults to `'xy'` for scatter series and `'x'` for most other
   * series. If the data has duplicate x-values, it is recommended to
   * set this to `'xy'` to allow hovering over all points.
   *
   * Applies only to series types using nearest neighbor search (not
   * direct hover) for tooltip.
   *
   * @sample {highcharts} highcharts/series/findnearestpointby/
   *         Different hover behaviors
   * @sample {highstock} highcharts/series/findnearestpointby/
   *         Different hover behaviors
   * @sample {highmaps} highcharts/series/findnearestpointby/
   *         Different hover behaviors
   *
   * @since      5.0.10
   * @validvalue ["x", "xy"]
   *
   * @private
   */
  findNearestPointBy: "x"
}, { defaultOptions: Os } = Dt, { extend: jo, extendClass: Xo, merge: Ho } = W;
var Xi;
(function(c) {
  c.seriesTypes = N.seriesTypes;
  function t(i, s) {
    const r = Os.plotOptions || {}, n = s.defaultOptions, o = s.prototype;
    return o.type = i, o.pointClass || (o.pointClass = vt), c.seriesTypes[i] ? !1 : (n && (r[i] = n), c.seriesTypes[i] = s, !0);
  }
  c.registerSeriesType = t;
  function e(i, s, r, n, o) {
    const a = Os.plotOptions || {};
    s = s || "", a[i] = Ho(a[s], r), delete c.seriesTypes[i];
    const l = c.seriesTypes[s] || et, h = Xo(l, n);
    if (t(i, h), c.seriesTypes[i].prototype.type = i, o) {
      class f extends vt {
      }
      jo(f.prototype, o), c.seriesTypes[i].prototype.pointClass = f;
    }
    return c.seriesTypes[i];
  }
  c.seriesType = e;
})(Xi || (Xi = {}));
const St = Xi, { animate: Go, animObject: Yo, stop: Ls } = Et, { deg2rad: Ps, doc: $t, svg: Vo, SVG_NS: Me, win: Uo, isFirefox: Ko } = N, { addEvent: qo, attr: oi, createElement: Zo, crisp: ke, css: Es, defined: lt, erase: _o, extend: qt, fireEvent: ai, getAlignFactor: li, isArray: Ds, isFunction: $s, isNumber: Jo, isObject: Qo, isString: Is, merge: hi, objectEach: It, pick: dt, pInt: Ae, pushUnique: ta, replaceNested: ea, syncTimeout: ia, uniqueKey: Bs } = W;
class G {
  // @todo public zIndex?: number;
  /* *
   *
   *  Functions
   *
   * */
  /**
   * Get the current value of an attribute or pseudo attribute,
   * used mainly for animation. Called internally from
   * the {@link Highcharts.SVGRenderer#attr} function.
   *
   * @private
   * @function Highcharts.SVGElement#_defaultGetter
   *
   * @param {string} key
   *        Property key.
   *
   * @return {number|string}
   *         Property value.
   */
  _defaultGetter(t) {
    let e = dt(
      this[t + "Value"],
      // Align getter
      this[t],
      this.element ? this.element.getAttribute(t) : null,
      0
    );
    return /^-?[\d\.]+$/.test(e) && (e = parseFloat(e)), e;
  }
  /**
   * @private
   * @function Highcharts.SVGElement#_defaultSetter
   *
   * @param {string} value
   *
   * @param {string} key
   *
   * @param {Highcharts.SVGDOMElement} element
   *
   */
  _defaultSetter(t, e, i) {
    i.setAttribute(e, t);
  }
  /**
   * Add the element to the DOM. All elements must be added this way.
   *
   * @sample highcharts/members/renderer-g
   *         Elements added to a group
   *
   * @function Highcharts.SVGElement#add
   *
   * @param {Highcharts.SVGElement} [parent]
   *        The parent item to add it to. If undefined, the element is added
   *        to the {@link Highcharts.SVGRenderer.box}.
   *
   * @return {Highcharts.SVGElement}
   *         Returns the SVGElement for chaining.
   */
  add(t) {
    const e = this.renderer, i = this.element;
    let s;
    return t && (this.parentGroup = t), typeof this.textStr < "u" && this.element.nodeName === "text" && e.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (s = this.zIndexSetter()), s || (t ? t.element : e.box).appendChild(i), this.onAdd && this.onAdd(), this;
  }
  /**
   * Add a class name to an element.
   *
   * @function Highcharts.SVGElement#addClass
   *
   * @param {string} className
   * The new class name to add.
   *
   * @param {boolean} [replace=false]
   * When true, the existing class name(s) will be overwritten with the new
   * one. When false, the new one is added.
   *
   * @return {Highcharts.SVGElement}
   * Return the SVG element for chainability.
   */
  addClass(t, e) {
    const i = e ? "" : this.attr("class") || "";
    return t = (t || "").split(/ /g).reduce(function(s, r) {
      return i.indexOf(r) === -1 && s.push(r), s;
    }, i ? [i] : []).join(" "), t !== i && this.attr("class", t), this;
  }
  /**
   * This method is executed in the end of `attr()`, after setting all
   * attributes in the hash. In can be used to efficiently consolidate
   * multiple attributes in one SVG property -- e.g., translate, rotate and
   * scale are merged in one "transform" attribute in the SVG node.
   *
   * @private
   * @function Highcharts.SVGElement#afterSetters
   */
  afterSetters() {
    this.doTransform && (this.updateTransform(), this.doTransform = !1);
  }
  /**
   * Align the element relative to the chart or another box.
   *
   * @function Highcharts.SVGElement#align
   *
   * @param {Highcharts.AlignObject} [alignOptions]
   *        The alignment options. The function can be called without this
   *        parameter in order to re-align an element after the box has been
   *        updated.
   *
   * @param {boolean} [alignByTranslate]
   *        Align element by translation.
   *
   * @param {string|Highcharts.BBoxObject} [alignTo]
   *        The box to align to, needs a width and height. When the box is a
   *        string, it refers to an object in the Renderer. For example, when
   *        box is `spacingBox`, it refers to `Renderer.spacingBox` which
   *        holds `width`, `height`, `x` and `y` properties.
   *
   * @param {boolean} [redraw]
   *        Decide if SVGElement should be redrawn with new alignment or
   *        just change its attributes.
   *
   * @return {Highcharts.SVGElement} Returns the SVGElement for chaining.
   */
  align(t, e, i, s = !0) {
    const r = this.renderer, n = r.alignedObjects, o = !!t;
    t ? (this.alignOptions = t, this.alignByTranslate = e, this.alignTo = i) : (t = this.alignOptions || {}, e = this.alignByTranslate, i = this.alignTo);
    const a = !i || Is(i) ? i || "renderer" : void 0;
    a && (o && ta(n, this), i = void 0);
    const l = dt(i, r[a], r), h = (l.x || 0) + (t.x || 0) + ((l.width || 0) - (t.width || 0)) * li(t.align), f = (l.y || 0) + (t.y || 0) + ((l.height || 0) - (t.height || 0)) * li(t.verticalAlign), d = {
      "text-align": t?.align
    };
    return d[e ? "translateX" : "x"] = Math.round(h), d[e ? "translateY" : "y"] = Math.round(f), s && (this[this.placed ? "animate" : "attr"](d), this.placed = !0), this.alignAttr = d, this;
  }
  /**
   * @private
   * @function Highcharts.SVGElement#alignSetter
   * @param {"left"|"center"|"right"} value
   */
  alignSetter(t) {
    const e = {
      left: "start",
      center: "middle",
      right: "end"
    };
    e[t] && (this.alignValue = t, this.element.setAttribute("text-anchor", e[t]));
  }
  /**
   * Animate to given attributes or CSS properties.
   *
   * @sample highcharts/members/element-on/
   *         Setting some attributes by animation
   *
   * @function Highcharts.SVGElement#animate
   *
   * @param {Highcharts.SVGAttributes} params
   *        SVG attributes or CSS to animate.
   *
   * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [options]
   *        Animation options.
   *
   * @param {Function} [complete]
   *        Function to perform at the end of animation.
   *
   * @return {Highcharts.SVGElement}
   *         Returns the SVGElement for chaining.
   */
  animate(t, e, i) {
    const s = Yo(dt(e, this.renderer.globalAnimation, !0)), r = s.defer;
    return $t.hidden && (s.duration = 0), s.duration !== 0 ? (i && (s.complete = i), ia(() => {
      this.element && Go(this, t, s);
    }, r)) : (this.attr(t, void 0, i || s.complete), It(t, function(n, o) {
      s.step && s.step.call(this, n, { prop: o, pos: 1, elem: this });
    }, this)), this;
  }
  /**
   * Apply a text outline through a custom CSS property, by copying the text
   * element and apply stroke to the copy. Used internally. Contrast checks at
   * [example](https://jsfiddle.net/highcharts/43soe9m1/2/).
   *
   * @example
   * // Specific color
   * text.css({
   *    textOutline: '1px black'
   * });
   * // Automatic contrast
   * text.css({
   *    color: '#000000', // black text
   *    textOutline: '1px contrast' // => white outline
   * });
   *
   * @private
   * @function Highcharts.SVGElement#applyTextOutline
   *
   * @param {string} textOutline
   *        A custom CSS `text-outline` setting, defined by `width color`.
   */
  applyTextOutline(t) {
    const e = this.element;
    t.indexOf("contrast") !== -1 && (t = t.replace(/contrast/g, this.renderer.getContrast(e.style.fill)));
    const s = t.indexOf(" "), r = t.substring(s + 1);
    let n = t.substring(0, s);
    if (n && n !== "none" && N.svg) {
      this.fakeTS = !0, n = n.replace(/(^[\d\.]+)(.*?)$/g, function(f, d, p) {
        return 2 * Number(d) + p;
      }), this.removeTextOutline();
      const o = $t.createElementNS(Me, "tspan");
      oi(o, {
        class: "highcharts-text-outline",
        fill: r,
        stroke: r,
        "stroke-width": n,
        "stroke-linejoin": "round"
      });
      const a = e.querySelector("textPath") || e;
      [].forEach.call(a.childNodes, (f) => {
        const d = f.cloneNode(!0);
        d.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((p) => d.removeAttribute(p)), o.appendChild(d);
      });
      let l = 0;
      [].forEach.call(a.querySelectorAll("text tspan"), (f) => {
        l += Number(f.getAttribute("dy"));
      });
      const h = $t.createElementNS(Me, "tspan");
      h.textContent = "​", oi(h, {
        x: Number(e.getAttribute("x")),
        dy: -l
      }), o.appendChild(h), a.insertBefore(o, a.firstChild);
    }
  }
  /**
   * @function Highcharts.SVGElement#attr
   * @param {string} key
   * @return {number|string}
   */
  /**
  * Apply native and custom attributes to the SVG elements.
  *
  * In order to set the rotation center for rotation, set x and y to 0 and
  * use `translateX` and `translateY` attributes to position the element
  * instead.
  *
  * Attributes frequently used in Highcharts are `fill`, `stroke`,
  * `stroke-width`.
  *
  * @sample highcharts/members/renderer-rect/
  *         Setting some attributes
  *
  * @example
  * // Set multiple attributes
  * element.attr({
  *     stroke: 'red',
  *     fill: 'blue',
  *     x: 10,
  *     y: 10
  * });
  *
  * // Set a single attribute
  * element.attr('stroke', 'red');
  *
  * // Get an attribute
  * element.attr('stroke'); // => 'red'
  *
  * @function Highcharts.SVGElement#attr
  *
  * @param {string|Highcharts.SVGAttributes} [hash]
  *        The native and custom SVG attributes.
  *
  * @param {number|string|Highcharts.SVGPathArray} [val]
  *        If the type of the first argument is `string`, the second can be a
  *        value, which will serve as a single attribute setter. If the first
  *        argument is a string and the second is undefined, the function
  *        serves as a getter and the current value of the property is
  *        returned.
  *
  * @param {Function} [complete]
  *        A callback function to execute after setting the attributes. This
  *        makes the function compliant and interchangeable with the
  *        {@link SVGElement#animate} function.
  *
  * @param {boolean} [continueAnimation=true]
  *        Used internally when `.attr` is called as part of an animation
  *        step. Otherwise, calling `.attr` for an attribute will stop
  *        animation for that attribute.
  *
  * @return {Highcharts.SVGElement}
  *         If used as a setter, it returns the current
  *         {@link Highcharts.SVGElement} so the calls can be chained. If
  *         used as a getter, the current value of the attribute is returned.
  */
  attr(t, e, i, s) {
    const { element: r } = this, n = G.symbolCustomAttribs;
    let o, a, l = this, h, f;
    return typeof t == "string" && typeof e < "u" && (o = t, t = {}, t[o] = e), typeof t == "string" ? l = (this[t + "Getter"] || this._defaultGetter).call(this, t, r) : (It(t, function(p, u) {
      h = !1, s || Ls(this, u), this.symbolName && n.indexOf(u) !== -1 && (a || (this.symbolAttr(t), a = !0), h = !0), this.rotation && (u === "x" || u === "y") && (this.doTransform = !0), h || (f = this[u + "Setter"] || this._defaultSetter, f.call(this, p, u, r));
    }, this), this.afterSetters()), i && i.call(this), l;
  }
  /**
   * Apply a clipping shape to this element.
   *
   * @function Highcharts.SVGElement#clip
   *
   * @param {SVGElement} [clipElem]
   *        The clipping shape. If skipped, the current clip is removed.
   *
   * @return {Highcharts.SVGElement}
   *         Returns the SVG element to allow chaining.
   */
  clip(t) {
    if (t && !t.clipPath) {
      const e = Bs() + "-", i = this.renderer.createElement("clipPath").attr({ id: e }).add(this.renderer.defs);
      qt(t, { clipPath: i, id: e, count: 0 }), t.add(i);
    }
    return this.attr("clip-path", t ? `url(${this.renderer.url}#${t.id})` : "none");
  }
  /**
   * Calculate the coordinates needed for drawing a rectangle crisply and
   * return the calculated attributes.
   *
   * @function Highcharts.SVGElement#crisp
   *
   * @param {Highcharts.RectangleObject} rect
   * Rectangle to crisp.
   *
   * @param {number} [strokeWidth]
   * The stroke width to consider when computing crisp positioning. It can
   * also be set directly on the rect parameter.
   *
   * @return {Highcharts.RectangleObject}
   * The modified rectangle arguments.
   */
  crisp(t, e) {
    e = Math.round(e || t.strokeWidth || 0);
    const i = t.x || this.x || 0, s = t.y || this.y || 0, r = (t.width || this.width || 0) + i, n = (t.height || this.height || 0) + s, o = ke(i, e), a = ke(s, e), l = ke(r, e), h = ke(n, e);
    return qt(t, {
      x: o,
      y: a,
      width: l - o,
      height: h - a
    }), lt(t.strokeWidth) && (t.strokeWidth = e), t;
  }
  /**
   * Build and apply an SVG gradient out of a common JavaScript configuration
   * object. This function is called from the attribute setters. An event
   * hook is added for supporting other complex color types.
   *
   * @private
   * @function Highcharts.SVGElement#complexColor
   *
   * @param {Highcharts.GradientColorObject|Highcharts.PatternObject} colorOptions
   * The gradient or pattern options structure.
   *
   * @param {string} prop
   * The property to apply, can either be `fill` or `stroke`.
   *
   * @param {Highcharts.SVGDOMElement} elem
   * SVG element to apply the gradient on.
   */
  complexColor(t, e, i) {
    const s = this.renderer;
    let r, n, o, a, l, h, f, d, p, u, g = [], x;
    ai(this.renderer, "complexColor", {
      args: arguments
    }, function() {
      if (t.radialGradient ? n = "radialGradient" : t.linearGradient && (n = "linearGradient"), n) {
        if (o = t[n], l = s.gradients, h = t.stops, p = i.radialReference, Ds(o) && (t[n] = o = {
          x1: o[0],
          y1: o[1],
          x2: o[2],
          y2: o[3],
          gradientUnits: "userSpaceOnUse"
        }), n === "radialGradient" && p && !lt(o.gradientUnits) && (a = o, o = hi(o, s.getRadialAttr(p, a), { gradientUnits: "userSpaceOnUse" })), It(o, function(m, y) {
          y !== "id" && g.push(y, m);
        }), It(h, function(m) {
          g.push(m);
        }), g = g.join(","), l[g])
          u = l[g].attr("id");
        else {
          o.id = u = Bs();
          const m = l[g] = s.createElement(n).attr(o).add(s.defs);
          m.radAttr = a, m.stops = [], h.forEach(function(y) {
            y[1].indexOf("rgba") === 0 ? (r = U.parse(y[1]), f = r.get("rgb"), d = r.get("a")) : (f = y[1], d = 1);
            const b = s.createElement("stop").attr({
              offset: y[0],
              "stop-color": f,
              "stop-opacity": d
            }).add(m);
            m.stops.push(b);
          });
        }
        x = "url(" + s.url + "#" + u + ")", i.setAttribute(e, x), i.gradient = g, t.toString = function() {
          return x;
        };
      }
    });
  }
  /**
   * Set styles for the element. In addition to CSS styles supported by
   * native SVG and HTML elements, there are also some custom made for
   * Highcharts, like `width`, `ellipsis` and `textOverflow` for SVG text
   * elements.
   *
   * @sample highcharts/members/renderer-text-on-chart/
   *         Styled text
   *
   * @function Highcharts.SVGElement#css
   *
   * @param {Highcharts.CSSObject} styles
   *        The new CSS styles.
   *
   * @return {Highcharts.SVGElement}
   *         Return the SVG element for chaining.
   */
  css(t) {
    const e = this.styles, i = {}, s = this.element;
    let r, n = !e;
    if (e && It(t, function(o, a) {
      e && e[a] !== o && (i[a] = o, n = !0);
    }), n) {
      e && (t = qt(e, i)), t.width === null || t.width === "auto" ? delete this.textWidth : s.nodeName.toLowerCase() === "text" && t.width && (r = this.textWidth = Ae(t.width)), qt(this.styles, t), r && !Vo && this.renderer.forExport && delete t.width;
      const o = Ko && t.fontSize || null;
      o && (Jo(o) || /^\d+$/.test(o)) && (t.fontSize += "px");
      const a = hi(t);
      s.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "whiteSpace", "width"].forEach((l) => a && delete a[l]), a.color && (a.fill = a.color, delete a.color)), Es(s, a);
    }
    return this.added && (this.element.nodeName === "text" && this.renderer.buildText(this), t.textOutline && this.applyTextOutline(t.textOutline)), this;
  }
  /**
   * @private
   * @function Highcharts.SVGElement#dashstyleSetter
   * @param {string} value
   */
  dashstyleSetter(t) {
    let e, i = this["stroke-width"];
    if (i === "inherit" && (i = 1), t) {
      t = t.toLowerCase();
      const s = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
      for (e = s.length; e--; )
        s[e] = "" + Ae(s[e]) * dt(i, NaN);
      t = s.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t);
    }
  }
  /**
   * Destroy the element and element wrapper and clear up the DOM and event
   * hooks.
   *
   * @function Highcharts.SVGElement#destroy
   */
  destroy() {
    const t = this, e = t.element || {}, i = t.renderer, s = e.ownerSVGElement;
    let r = e.nodeName === "SPAN" && t.parentGroup || void 0, n, o;
    if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, Ls(t), t.clipPath && s) {
      const a = t.clipPath;
      [].forEach.call(s.querySelectorAll("[clip-path],[CLIP-PATH]"), function(l) {
        l.getAttribute("clip-path").indexOf(a.element.id) > -1 && l.removeAttribute("clip-path");
      }), t.clipPath = a.destroy();
    }
    if (t.stops) {
      for (o = 0; o < t.stops.length; o++)
        t.stops[o].destroy();
      t.stops.length = 0, t.stops = void 0;
    }
    for (t.safeRemoveChild(e); r?.div && r.div.childNodes.length === 0; )
      n = r.parentGroup, t.safeRemoveChild(r.div), delete r.div, r = n;
    t.alignOptions && _o(i.alignedObjects, t), It(t, (a, l) => {
      // Destroy child elements of a group
      (t[l]?.parentGroup === t || // Destroy own elements
      ["connector", "foreignObject"].indexOf(l) !== -1) && t[l]?.destroy?.(), delete t[l];
    });
  }
  /**
   * @private
   * @function Highcharts.SVGElement#dSettter
   * @param {number|string|Highcharts.SVGPathArray} value
   * @param {string} key
   * @param {Highcharts.SVGDOMElement} element
   */
  dSetter(t, e, i) {
    Ds(t) && (typeof t[0] == "string" && (t = this.renderer.pathToSegments(t)), this.pathArray = t, t = t.reduce((s, r, n) => r?.join ? (n ? s + " " : "") + r.join(" ") : (r || "").toString(), "")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t);
  }
  /**
   * @private
   * @function Highcharts.SVGElement#fillSetter
   * @param {Highcharts.ColorType} value
   * @param {string} key
   * @param {Highcharts.SVGDOMElement} element
   */
  fillSetter(t, e, i) {
    typeof t == "string" ? i.setAttribute(e, t) : t && this.complexColor(t, e, i);
  }
  /**
   * @private
   * @function Highcharts.SVGElement#hrefSetter
   * @param {Highcharts.ColorType} value
   * @param {string} key
   * @param {Highcharts.SVGDOMElement} element
   */
  hrefSetter(t, e, i) {
    i.setAttributeNS("http://www.w3.org/1999/xlink", e, t);
  }
  /**
   * Get the bounding box (width, height, x and y) for the element. Generally
   * used to get rendered text size. Since this is called a lot in charts,
   * the results are cached based on text properties, in order to save DOM
   * traffic. The returned bounding box includes the rotation, so for example
   * a single text line of rotation 90 will report a greater height, and a
   * width corresponding to the line-height.
   *
   * @sample highcharts/members/renderer-on-chart/
   *         Draw a rectangle based on a text's bounding box
   *
   * @function Highcharts.SVGElement#getBBox
   *
   * @param {boolean} [reload]
   *        Skip the cache and get the updated DOM bounding box.
   *
   * @param {number} [rot]
   *        Override the element's rotation. This is internally used on axis
   *        labels with a value of 0 to find out what the bounding box would
   *        be have been if it were not rotated.
   *
   * @return {Highcharts.BBoxObject}
   *         The bounding box with `x`, `y`, `width` and `height` properties.
   */
  getBBox(t, e) {
    const i = this, { alignValue: s, element: r, renderer: n, styles: o, textStr: a } = i, { cache: l, cacheKeys: h } = n, f = r.namespaceURI === i.SVG_NS, d = dt(e, i.rotation, 0), p = n.styledMode ? r && G.prototype.getStyle.call(r, "font-size") : o.fontSize;
    let u, g, x, m;
    if (lt(a) && (m = a.toString(), m.indexOf("<") === -1 && (m = m.replace(/\d/g, "0")), m += [
      "",
      n.rootFontSize,
      p,
      d,
      i.textWidth,
      // #7874, also useHTML
      s,
      o.lineClamp,
      o.textOverflow,
      // #5968
      o.fontWeight
      // #12163
    ].join(",")), m && !t && (u = l[m]), !u || u.polygon) {
      if (f || n.forExport) {
        try {
          x = this.fakeTS && function(b) {
            const v = r.querySelector(".highcharts-text-outline");
            v && Es(v, { display: b });
          }, $s(x) && x("none"), u = r.getBBox ? (
            // SVG: use extend because IE9 is not allowed to change
            // width and height in case of rotation (below)
            qt({}, r.getBBox())
          ) : {
            // HTML elements with `exporting.allowHTML` and
            // legacy IE in export mode
            width: r.offsetWidth,
            height: r.offsetHeight,
            x: 0,
            y: 0
          }, $s(x) && x("");
        } catch {
        }
        (!u || u.width < 0) && (u = { x: 0, y: 0, width: 0, height: 0 });
      } else
        u = i.htmlGetBBox();
      g = u.height, f && (u.height = g = {
        "11px,17": 14,
        "13px,20": 16
      }[`${p || ""},${Math.round(g)}`] || g), d && (u = this.getRotatedBox(u, d));
      const y = { bBox: u };
      ai(this, "afterGetBBox", y), u = y.bBox;
    }
    if (m && (a === "" || u.height > 0)) {
      for (; h.length > 250; )
        delete l[h.shift()];
      l[m] || h.push(m), l[m] = u;
    }
    return u;
  }
  /**
   * Get the rotated box.
   * @private
   */
  getRotatedBox(t, e) {
    const { x: i, y: s, width: r, height: n } = t, { alignValue: o, translateY: a, rotationOriginX: l = 0, rotationOriginY: h = 0 } = this, f = li(o), d = Number(this.element.getAttribute("y") || 0) - (a ? 0 : s), p = e * Ps, u = (e - 90) * Ps, g = Math.cos(p), x = Math.sin(p), m = r * g, y = r * x, b = Math.cos(u), v = Math.sin(u), [[S, w], [k, M]] = [
      l,
      h
    ].map((ct) => [
      ct - ct * g,
      ct * x
    ]), C = i + f * (r - m) + S + M, A = s + d - f * y - w + k, T = C + d * b, E = T + m, L = E - n * b, O = L - m, D = A + d * v, I = D + y, R = I - n * v, K = R - y, _ = Math.min(T, E, L, O), J = Math.min(D, I, R, K), wt = Math.max(T, E, L, O) - _, nt = Math.max(D, I, R, K) - J;
    return {
      x: _,
      y: J,
      width: wt,
      height: nt,
      polygon: [
        [T, D],
        [E, I],
        [L, R],
        [O, K]
      ]
    };
  }
  /**
   * Get the computed style. Only in styled mode.
   *
   * @example
   * chart.series[0].points[0].graphic.getStyle('stroke-width'); // => '1px'
   *
   * @function Highcharts.SVGElement#getStyle
   *
   * @param {string} prop
   *        The property name to check for.
   *
   * @return {string}
   *         The current computed value.
   */
  getStyle(t) {
    return Uo.getComputedStyle(this.element || this, "").getPropertyValue(t);
  }
  /**
   * Check if an element has the given class name.
   *
   * @function Highcharts.SVGElement#hasClass
   *
   * @param {string} className
   * The class name to check for.
   *
   * @return {boolean}
   * Whether the class name is found.
   */
  hasClass(t) {
    return ("" + this.attr("class")).split(" ").indexOf(t) !== -1;
  }
  /**
   * Hide the element, similar to setting the `visibility` attribute to
   * `hidden`.
   *
   * @function Highcharts.SVGElement#hide
   *
   * @return {Highcharts.SVGElement}
   *         Returns the SVGElement for chaining.
   */
  hide() {
    return this.attr({ visibility: "hidden" });
  }
  /**
   * @private
   */
  htmlGetBBox() {
    return { height: 0, width: 0, x: 0, y: 0 };
  }
  /**
   * Initialize the SVG element. This function only exists to make the
   * initialization process overridable. It should not be called directly.
   *
   * @function Highcharts.SVGElement#init
   *
   * @param {Highcharts.SVGRenderer} renderer
   * The SVGRenderer instance to initialize to.
   *
   * @param {string} nodeName
   * The SVG node name.
   */
  constructor(t, e) {
    this.onEvents = {}, this.opacity = 1, this.SVG_NS = Me, this.element = e === "span" || e === "body" ? Zo(e) : $t.createElementNS(this.SVG_NS, e), this.renderer = t, this.styles = {}, ai(this, "afterInit");
  }
  /**
   * Add an event listener. This is a simple setter that replaces the
   * previous event of the same type added by this function, as opposed to
   * the {@link Highcharts#addEvent} function.
   *
   * @sample highcharts/members/element-on/
   *         A clickable rectangle
   *
   * @function Highcharts.SVGElement#on
   *
   * @param {string} eventType
   * The event type.
   *
   * @param {Function} handler
   * The handler callback.
   *
   * @return {Highcharts.SVGElement}
   * The SVGElement for chaining.
   */
  on(t, e) {
    const { onEvents: i } = this;
    return i[t] && i[t](), i[t] = qo(this.element, t, e), this;
  }
  /**
   * @private
   * @function Highcharts.SVGElement#opacitySetter
   * @param {string} value
   * @param {string} key
   * @param {Highcharts.SVGDOMElement} element
   */
  opacitySetter(t, e, i) {
    const s = Number(Number(t).toFixed(3));
    this.opacity = s, i.setAttribute(e, s);
  }
  /**
   * Re-align an aligned text or label after setting the text.
   *
   * @private
   * @function Highcharts.SVGElement#reAlign
   *
   */
  reAlign() {
    this.alignOptions?.width && this.alignOptions.align !== "left" && (this.alignOptions.width = this.getBBox().width, this.placed = !1, this.align());
  }
  /**
   * Remove a class name from the element.
   *
   * @function Highcharts.SVGElement#removeClass
   *
   * @param {string|RegExp} className
   *        The class name to remove.
   *
   * @return {Highcharts.SVGElement} Returns the SVG element for chainability.
   */
  removeClass(t) {
    return this.attr("class", ("" + this.attr("class")).replace(Is(t) ? new RegExp(`(^| )${t}( |$)`) : (
      // #12064, #13590
      t
    ), " ").replace(/ +/g, " ").trim());
  }
  /**
   *
   * @private
   */
  removeTextOutline() {
    const t = this.element.querySelector("tspan.highcharts-text-outline");
    t && this.safeRemoveChild(t);
  }
  /**
   * Removes an element from the DOM.
   *
   * @private
   * @function Highcharts.SVGElement#safeRemoveChild
   *
   * @param {Highcharts.SVGDOMElement|Highcharts.HTMLDOMElement} element
   * The DOM node to remove.
   */
  safeRemoveChild(t) {
    const e = t.parentNode;
    e && e.removeChild(t);
  }
  /**
   * Set the coordinates needed to draw a consistent radial gradient across
   * a shape regardless of positioning inside the chart. Used on pie slices
   * to make all the slices have the same radial reference point.
   *
   * @function Highcharts.SVGElement#setRadialReference
   *
   * @param {Array<number>} coordinates
   * The center reference. The format is `[centerX, centerY, diameter]` in
   * pixels.
   *
   * @return {Highcharts.SVGElement}
   * Returns the SVGElement for chaining.
   */
  setRadialReference(t) {
    const e = this.element.gradient && this.renderer.gradients[this.element.gradient] || void 0;
    return this.element.radialReference = t, e?.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this;
  }
  /**
   * Add a shadow to the element. In styled mode, this method is not used,
   * instead use `defs` and filters.
   *
   * @example
   * renderer.rect(10, 100, 100, 100)
   *     .attr({ fill: 'red' })
   *     .shadow(true);
   *
   * @function Highcharts.SVGElement#shadow
   *
   * @param {boolean|Highcharts.ShadowOptionsObject} [shadowOptions] The
   *        shadow options. If `true`, the default options are applied. If
   *        `false`, the current shadow will be removed.
   *
   * @return {Highcharts.SVGElement} Returns the SVGElement for chaining.
   */
  shadow(t) {
    const { renderer: e } = this, i = hi(this.parentGroup?.rotation === 90 ? {
      offsetX: -1,
      offsetY: -1
    } : {}, Qo(t) ? t : {}), s = e.shadowDefinition(i);
    return this.attr({
      filter: t ? `url(${e.url}#${s})` : "none"
    });
  }
  /**
   * Show the element after it has been hidden.
   *
   * @function Highcharts.SVGElement#show
   *
   * @param {boolean} [inherit=true]
   *        Set the visibility attribute to `inherit` rather than `visible`.
   *        The difference is that an element with `visibility="visible"`
   *        will be visible even if the parent is hidden.
   *
   * @return {Highcharts.SVGElement}
   *         Returns the SVGElement for chaining.
   */
  show(t = !0) {
    return this.attr({ visibility: t ? "inherit" : "visible" });
  }
  /**
   * Set the stroke-width and record it on the SVGElement
   *
   * @private
   * @function Highcharts.SVGElement#strokeSetter
   * @param {number|string|ColorType} value
   * @param {string} key
   * @param {Highcharts.SVGDOMElement} element
   */
  "stroke-widthSetter"(t, e, i) {
    this[e] = t, i.setAttribute(e, t);
  }
  /**
   * Get the computed stroke width in pixel values. This is used extensively
   * when drawing shapes to ensure the shapes are rendered crisp and
   * positioned correctly relative to each other. Using
   * `shape-rendering: crispEdges` leaves us less control over positioning,
   * for example when we want to stack columns next to each other, or position
   * things pixel-perfectly within the plot box.
   *
   * The common pattern when placing a shape is:
   * - Create the SVGElement and add it to the DOM. In styled mode, it will
   *   now receive a stroke width from the style sheet. In classic mode we
   *   will add the `stroke-width` attribute.
   * - Read the computed `elem.strokeWidth()`.
   * - Place it based on the stroke width.
   *
   * @function Highcharts.SVGElement#strokeWidth
   *
   * @return {number}
   * The stroke width in pixels. Even if the given stroke width (in CSS or by
   * attributes) is based on `em` or other units, the pixel size is returned.
   */
  strokeWidth() {
    if (!this.renderer.styledMode)
      return this["stroke-width"] || 0;
    const t = this.getStyle("stroke-width");
    let e = 0, i;
    return /px$/.test(t) ? e = Ae(t) : t !== "" && (i = $t.createElementNS(Me, "rect"), oi(i, {
      width: t,
      "stroke-width": 0
    }), this.element.parentNode.appendChild(i), e = i.getBBox().width, i.parentNode.removeChild(i)), e;
  }
  /**
   * If one of the symbol size affecting parameters are changed,
   * check all the others only once for each call to an element's
   * .attr() method
   *
   * @private
   * @function Highcharts.SVGElement#symbolAttr
   *
   * @param {Highcharts.SVGAttributes} hash
   * The attributes to set.
   */
  symbolAttr(t) {
    const e = this;
    G.symbolCustomAttribs.forEach(function(i) {
      e[i] = dt(t[i], e[i]);
    }), e.attr({
      d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
    });
  }
  /**
   * @private
   * @function Highcharts.SVGElement#textSetter
   * @param {string} value
   */
  textSetter(t) {
    t !== this.textStr && (delete this.textPxLength, this.textStr = t, this.added && this.renderer.buildText(this), this.reAlign());
  }
  /**
   * @private
   * @function Highcharts.SVGElement#titleSetter
   * @param {string} value
   */
  titleSetter(t) {
    const e = this.element, i = e.getElementsByTagName("title")[0] || $t.createElementNS(this.SVG_NS, "title");
    e.insertBefore ? e.insertBefore(i, e.firstChild) : e.appendChild(i), i.textContent = ea(
      // Scan #[73]
      dt(t, ""),
      // #3276, #3895
      [/<[^>]*>/g, ""]
    ).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  }
  /**
   * Bring the element to the front. Alternatively, a new zIndex can be set.
   *
   * @sample highcharts/members/element-tofront/
   *         Click an element to bring it to front
   *
   * @function Highcharts.SVGElement#toFront
   *
   * @return {Highcharts.SVGElement}
   * Returns the SVGElement for chaining.
   */
  toFront() {
    const t = this.element;
    return t.parentNode.appendChild(t), this;
  }
  /**
   * Move an object and its children by x and y values.
   *
   * @function Highcharts.SVGElement#translate
   *
   * @param {number} x
   * The x value.
   *
   * @param {number} y
   * The y value.
   *
   * @return {Highcharts.SVGElement}
   * Translated element.
   */
  translate(t, e) {
    return this.attr({
      translateX: t,
      translateY: e
    });
  }
  /**
   * Update the transform attribute based on internal properties. Deals with
   * the custom `translateX`, `translateY`, `rotation`, `scaleX` and `scaleY`
   * attributes and updates the SVG `transform` attribute.
   *
   * @private
   * @function Highcharts.SVGElement#updateTransform
   */
  updateTransform(t = "transform") {
    const { element: e, foreignObject: i, matrix: s, padding: r, rotation: n = 0, rotationOriginX: o, rotationOriginY: a, scaleX: l, scaleY: h, text: f, translateX: d = 0, translateY: p = 0 } = this, u = ["translate(" + d + "," + p + ")"];
    lt(s) && u.push("matrix(" + s.join(",") + ")"), n && (u.push("rotate(" + n + " " + (o ?? e.getAttribute("x") ?? this.x ?? 0) + " " + (a ?? e.getAttribute("y") ?? this.y ?? 0) + ")"), f?.element.tagName === "SPAN" && !f?.foreignObject && f.attr({
      rotation: n,
      rotationOriginX: (o || 0) - r,
      rotationOriginY: (a || 0) - r
    })), (lt(l) || lt(h)) && u.push("scale(" + dt(l, 1) + " " + dt(h, 1) + ")"), u.length && !(f || this).textPath && (i?.element || e).setAttribute(t, u.join(" "));
  }
  /**
   * @private
   * @function Highcharts.SVGElement#visibilitySetter
   *
   * @param {string} value
   *
   * @param {string} key
   *
   * @param {Highcharts.SVGDOMElement} element
   *
   */
  visibilitySetter(t, e, i) {
    t === "inherit" ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t;
  }
  /**
   * @private
   * @function Highcharts.SVGElement#xGetter
   */
  xGetter(t) {
    return this.element.nodeName === "circle" && (t === "x" ? t = "cx" : t === "y" && (t = "cy")), this._defaultGetter(t);
  }
  /**
   * @private
   * @function Highcharts.SVGElement#zIndexSetter
   */
  zIndexSetter(t, e) {
    const i = this.renderer, s = this.parentGroup, r = s || i, n = r.element || i.box, o = this.element, a = n === i.box;
    let l, h, f, d = !1, p, u = this.added, g;
    if (lt(t) ? (o.setAttribute("data-z-index", t), t = +t, this[e] === t && (u = !1)) : lt(this[e]) && o.removeAttribute("data-z-index"), this[e] = t, u) {
      for (t = this.zIndex, t && s && (s.handleZ = !0), l = n.childNodes, g = l.length - 1; g >= 0 && !d; g--)
        h = l[g], f = h.getAttribute("data-z-index"), p = !lt(f), h !== o && (// Negative zIndex versus no zIndex:
        // On all levels except the highest. If the parent is
        // <svg>, then we don't want to put items before <desc>
        // or <defs>
        t < 0 && p && !a && !g ? (n.insertBefore(o, l[g]), d = !0) : (
          // Insert after the first element with a lower zIndex
          (Ae(f) <= t || // If negative zIndex, add this before first undefined
          // zIndex element
          p && (!lt(t) || t >= 0)) && (n.insertBefore(o, l[g + 1]), d = !0)
        ));
      d || (n.insertBefore(o, l[a ? 3 : 0]), d = !0);
    }
    return d;
  }
}
G.symbolCustomAttribs = [
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
];
G.prototype.strokeSetter = G.prototype.fillSetter;
G.prototype.yGetter = G.prototype.xGetter;
G.prototype.matrixSetter = G.prototype.rotationOriginXSetter = G.prototype.rotationOriginYSetter = G.prototype.rotationSetter = G.prototype.scaleXSetter = G.prototype.scaleYSetter = G.prototype.translateXSetter = G.prototype.translateYSetter = G.prototype.verticalAlignSetter = function(c, t) {
  this[t] = c, this.doTransform = !0;
};
const { animObject: Ns, setAnimation: sa } = Et, { defaultOptions: Ce } = Dt, { registerEventOptions: ra } = Zi, { svg: na, win: oa } = N, { seriesTypes: Bt } = St, { format: aa } = de, { arrayMax: ci, arrayMin: Rs, clamp: zs, correctFloat: Ws, crisp: la, defined: q, destroyObjectProperties: ha, diffObjects: ca, erase: Fs, error: Te, extend: zt, find: da, fireEvent: X, getClosestDistance: fa, getNestedProperty: js, insertItem: Xs, isArray: Hs, isNumber: Z, isString: pa, merge: Zt, objectEach: di, pick: H, removeEvent: ua, syncTimeout: Gs } = W;
let et = class Hi {
  constructor() {
    this.zoneAxis = "y";
  }
  /* *
   *
   *  Functions
   *
   * */
  /* eslint-disable valid-jsdoc */
  init(t, e) {
    X(this, "init", { options: e }), this.dataTable ?? (this.dataTable = new si());
    const i = this, s = t.series;
    this.eventsToUnbind = [], i.chart = t, i.options = i.setOptions(e);
    const r = i.options, n = r.visible !== !1;
    i.linkedSeries = [], i.bindAxes(), zt(i, {
      /**
       * The series name as given in the options. Defaults to
       * "Series {n}".
       *
       * @name Highcharts.Series#name
       * @type {string}
       */
      name: r.name,
      state: "",
      /**
       * Read only. The series' visibility state as set by {@link
       * Series#show}, {@link Series#hide}, or in the initial
       * configuration.
       *
       * @name Highcharts.Series#visible
       * @type {boolean}
       */
      visible: n,
      // True by default
      /**
       * Read only. The series' selected state as set by {@link
       * Highcharts.Series#select}.
       *
       * @name Highcharts.Series#selected
       * @type {boolean}
       */
      selected: r.selected === !0
      // False by default
    }), ra(this, r), (r.events?.click || r.point?.events?.click || r.allowPointSelect) && (t.runTrackerClick = !0), i.getColor(), i.getSymbol(), i.isCartesian && (t.hasCartesianSeries = !0);
    let a;
    s.length && (a = s[s.length - 1]), i._i = H(a?._i, -1) + 1, i.opacity = i.options.opacity, t.orderItems("series", Xs(this, s)), r.dataSorting?.enabled ? i.setDataSortingOptions() : !i.points && !i.data && i.setData(r.data, !1), X(this, "afterInit");
  }
  /**
   * Check whether the series item is itself or inherits from a certain
   * series type.
   *
   * @function Highcharts.Series#is
   * @param {string} type The type of series to check for, can be either
   *        featured or custom series types. For example `column`, `pie`,
   *        `ohlc` etc.
   *
   * @return {boolean}
   *        True if this item is or inherits from the given type.
   */
  is(t) {
    return Bt[t] && this instanceof Bt[t];
  }
  /**
   * Set the xAxis and yAxis properties of cartesian series, and register
   * the series in the `axis.series` array.
   *
   * @private
   * @function Highcharts.Series#bindAxes
   */
  bindAxes() {
    const t = this, e = t.options, i = t.chart;
    let s;
    X(this, "bindAxes", null, function() {
      (t.axisTypes || []).forEach(function(r) {
        (i[r] || []).forEach(function(n) {
          s = n.options, (H(e[r], 0) === n.index || typeof e[r] < "u" && e[r] === s.id) && (Xs(t, n.series), t[r] = n, n.isDirty = !0);
        }), !t[r] && t.optionalAxis !== r && Te(18, !0, i);
      });
    }), X(this, "afterBindAxes");
  }
  /**
   * Define hasData functions for series. These return true if there
   * are data points on this series within the plot area.
   *
   * @private
   * @function Highcharts.Series#hasData
   */
  hasData() {
    return this.visible && typeof this.dataMax < "u" && typeof this.dataMin < "u" || // #3703
    this.visible && this.dataTable.rowCount > 0;
  }
  /**
   * Determine whether the marker in a series has changed.
   *
   * @private
   * @function Highcharts.Series#hasMarkerChanged
   */
  hasMarkerChanged(t, e) {
    const i = t.marker, s = e.marker || {};
    return i && (s.enabled && !i.enabled || s.symbol !== i.symbol || // #10870, #15946
    s.height !== i.height || // #16274
    s.width !== i.width);
  }
  /**
   * Return an auto incremented x value based on the pointStart and
   * pointInterval options. This is only used if an x value is not given
   * for the point that calls autoIncrement.
   *
   * @private
   * @function Highcharts.Series#autoIncrement
   */
  autoIncrement(t) {
    const e = this.options, { pointIntervalUnit: i, relativeXValue: s } = this.options, r = this.chart.time, n = this.xIncrement ?? r.parse(e.pointStart) ?? 0;
    let o;
    if (this.pointInterval = o = H(this.pointInterval, e.pointInterval, 1), s && Z(t) && (o *= t), i) {
      const a = r.toParts(n);
      i === "day" ? a[2] += o : i === "month" ? a[1] += o : i === "year" && (a[0] += o), o = r.makeTime.apply(r, a) - n;
    }
    return s && Z(t) ? n + o : (this.xIncrement = n + o, n);
  }
  /**
   * Internal function to set properties for series if data sorting is
   * enabled.
   *
   * @private
   * @function Highcharts.Series#setDataSortingOptions
   */
  setDataSortingOptions() {
    const t = this.options;
    zt(this, {
      requireSorting: !1,
      sorted: !1,
      enabledDataSorting: !0,
      allowDG: !1
    }), q(t.pointRange) || (t.pointRange = 1);
  }
  /**
   * Set the series options by merging from the options tree. Called
   * internally on initializing and updating series. This function will
   * not redraw the series. For API usage, use {@link Series#update}.
   * @private
   * @function Highcharts.Series#setOptions
   * @param {Highcharts.SeriesOptionsType} itemOptions
   * The series options.
   * @emits Highcharts.Series#event:afterSetOptions
   */
  setOptions(t) {
    const e = this.chart, i = e.options, s = i.plotOptions, r = e.userOptions || {}, n = Zt(t), o = e.styledMode, a = {
      plotOptions: s,
      userOptions: n
    };
    let l;
    X(this, "setOptions", a);
    const h = a.plotOptions[this.type], f = r.plotOptions || {}, d = f.series || {}, p = Ce.plotOptions[this.type] || {}, u = f[this.type] || {};
    h.dataLabels = this.mergeArrays(p.dataLabels, h.dataLabels), this.userOptions = a.userOptions;
    const g = Zt(
      h,
      s.series,
      // #3881, chart instance plotOptions[type] should trump
      // plotOptions.series
      u,
      n
    );
    this.tooltipOptions = Zt(
      Ce.tooltip,
      // 1
      Ce.plotOptions.series?.tooltip,
      // 2
      p?.tooltip,
      // 3
      e.userOptions.tooltip,
      // 4
      f.series?.tooltip,
      // 5
      u.tooltip,
      // 6
      n.tooltip
      // 7
    ), this.stickyTracking = H(n.stickyTracking, u.stickyTracking, d.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : g.stickyTracking), h.marker === null && delete g.marker, this.zoneAxis = g.zoneAxis || "y";
    const x = this.zones = // #20440, create deep copy of zones options
    (g.zones || []).map((m) => ({ ...m }));
    return (g.negativeColor || g.negativeFillColor) && !g.zones && (l = {
      value: g[this.zoneAxis + "Threshold"] || g.threshold || 0,
      className: "highcharts-negative"
    }, o || (l.color = g.negativeColor, l.fillColor = g.negativeFillColor), x.push(l)), x.length && q(x[x.length - 1].value) && x.push(o ? {} : {
      color: this.color,
      fillColor: this.fillColor
    }), X(this, "afterSetOptions", { options: g }), g;
  }
  /**
   * Return series name in "Series {Number}" format or the one defined by
   * a user. This method can be simply overridden as series name format
   * can vary (e.g. technical indicators).
   *
   * @function Highcharts.Series#getName
   *
   * @return {string}
   * The series name.
   */
  getName() {
    return this.options.name ?? aa(this.chart.options.lang.seriesName, this, this.chart);
  }
  /**
   * @private
   * @function Highcharts.Series#getCyclic
   */
  getCyclic(t, e, i) {
    const s = this.chart, r = `${t}Index`, n = `${t}Counter`, o = (
      // Symbol count
      i?.length || // Color count
      s.options.chart.colorCount
    );
    let a, l;
    e || (l = H(t === "color" ? this.options.colorIndex : void 0, this[r]), q(l) ? a = l : (s.series.length || (s[n] = 0), a = s[n] % o, s[n] += 1), i && (e = i[a])), typeof a < "u" && (this[r] = a), this[t] = e;
  }
  /**
   * Get the series' color based on either the options or pulled from
   * global options.
   *
   * @private
   * @function Highcharts.Series#getColor
   */
  getColor() {
    this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || Ce.plotOptions[this.type].color, this.chart.options.colors);
  }
  /**
   * Get all points' instances created for this series.
   *
   * @private
   * @function Highcharts.Series#getPointsCollection
   */
  getPointsCollection() {
    return (this.hasGroupedData ? this.points : this.data) || [];
  }
  /**
   * Get the series' symbol based on either the options or pulled from
   * global options.
   *
   * @private
   * @function Highcharts.Series#getSymbol
   */
  getSymbol() {
    const t = this.options.marker;
    this.getCyclic("symbol", t.symbol, this.chart.options.symbols);
  }
  /**
   * Shorthand to get one of the series' data columns from `Series.dataTable`.
   *
   * @private
   * @function Highcharts.Series#getColumn
   */
  getColumn(t, e) {
    return (e ? this.dataTable.modified : this.dataTable).getColumn(t, !0) || [];
  }
  /**
   * Finds the index of an existing point that matches the given point
   * options.
   *
   * @private
   * @function Highcharts.Series#findPointIndex
   * @param {Highcharts.PointOptionsObject} optionsObject
   * The options of the point.
   * @param {number} fromIndex
   * The index to start searching from, used for optimizing series with
   * required sorting.
   * @return {number|undefined}
   * Returns the index of a matching point, or undefined if no match is found.
   */
  findPointIndex(t, e) {
    const { id: i, x: s } = t, r = this.points, n = this.options.dataSorting, o = this.cropStart || 0;
    let a, l, h;
    if (i) {
      const f = this.chart.get(i);
      f instanceof vt && (a = f);
    } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
      let f = (d) => !d.touched && d.index === t.index;
      if (n?.matchByName ? f = (d) => !d.touched && d.name === t.name : this.options.relativeXValue && (f = (d) => !d.touched && d.options.x === t.x), a = da(r, f), !a)
        return;
    }
    return a && (h = a?.index, typeof h < "u" && (l = !0)), typeof h > "u" && Z(s) && (h = this.getColumn("x").indexOf(s, e)), h !== -1 && typeof h < "u" && this.cropped && (h = h >= o ? h - o : h), !l && Z(h) && r[h]?.touched && (h = void 0), h;
  }
  /**
   * Internal function called from setData. If the point count is the same
   * as it was, or if there are overlapping X values, just run
   * Point.update which is cheaper, allows animation, and keeps references
   * to points. This also allows adding or removing points if the X-es
   * don't match.
   *
   * @private
   * @function Highcharts.Series#updateData
   */
  updateData(t, e) {
    const { options: i, requireSorting: s } = this, r = i.dataSorting, n = this.points, o = [], a = t.length === n.length;
    let l, h, f, d, p = !0;
    if (this.xIncrement = null, t.forEach((g, x) => {
      const m = q(g) && this.pointClass.prototype.optionsToObject.call({ series: this }, g) || {}, { id: y, x: b } = m;
      let v;
      y || Z(b) ? (v = this.findPointIndex(m, d), v === -1 || typeof v > "u" ? o.push(g) : n[v] && g !== i.data?.[v] ? (n[v].update(g, !1, void 0, !1), n[v].touched = !0, s && (d = v + 1)) : n[v] && (n[v].touched = !0), (!a || x !== v || r?.enabled || this.hasDerivedData) && (l = !0)) : o.push(g);
    }, this), l)
      for (h = n.length; h--; )
        f = n[h], f && !f.touched && f.remove?.(!1, e);
    else a && !r?.enabled ? (t.forEach((g, x) => {
      g !== n[x].y && !n[x].destroyed && n[x].update(g, !1, void 0, !1);
    }), o.length = 0) : p = !1;
    if (n.forEach((g) => {
      g && (g.touched = !1);
    }), !p)
      return !1;
    o.forEach((g) => {
      this.addPoint(g, !1, void 0, void 0, !1);
    }, this);
    const u = this.getColumn("x");
    return this.xIncrement === null && u.length && (this.xIncrement = ci(u), this.autoIncrement()), !0;
  }
  dataColumnKeys() {
    return ["x", ...this.pointArrayMap || ["y"]];
  }
  /**
   * Apply a new set of data to the series and optionally redraw it. The
   * new data array is passed by reference (except in case of
   * `updatePoints`), and may later be mutated when updating the chart
   * data.
   *
   * Note the difference in behaviour when setting the same amount of
   * points, or a different amount of points, as handled by the
   * `updatePoints` parameter.
   *
   * @sample highcharts/members/series-setdata/
   *         Set new data from a button
   * @sample highcharts/members/series-setdata-pie/
   *         Set data in a pie
   * @sample stock/members/series-setdata/
   *         Set new data in Highcharts Stock
   * @sample maps/members/series-setdata/
   *         Set new data in Highmaps
   *
   * @function Highcharts.Series#setData
   *
   * @param {Array<Highcharts.PointOptionsType>} data
   *        Takes an array of data in the same format as described under
   *        `series.{type}.data` for the given series type, for example a
   *        line series would take data in the form described under
   *        [series.line.data](https://api.highcharts.com/highcharts/series.line.data).
   *
   * @param {boolean} [redraw=true]
   *        Whether to redraw the chart after the series is altered. If
   *        doing more operations on the chart, it is a good idea to set
   *        redraw to false and call {@link Chart#redraw} after.
   *
   * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
   *        When the updated data is the same length as the existing data,
   *        points will be updated by default, and animation visualizes
   *        how the points are changed. Set false to disable animation, or
   *        a configuration object to set duration or easing.
   *
   * @param {boolean} [updatePoints=true]
   *        When this is true, points will be updated instead of replaced
   *        whenever possible. This occurs a) when the updated data is the
   *        same length as the existing data, b) when points are matched
   *        by their id's, or c) when points can be matched by X values.
   *        This allows updating with animation and performs better. In
   *        this case, the original array is not passed by reference. Set
   *        `false` to prevent.
   */
  setData(t, e = !0, i, s) {
    const r = this, n = r.points, o = n?.length || 0, a = r.options, l = r.chart, h = a.dataSorting, f = r.xAxis, d = a.turboThreshold, p = this.dataTable, u = this.dataColumnKeys(), g = r.pointValKey || "y", x = r.pointArrayMap || [], m = x.length, y = a.keys;
    let b, v, S = 0, w = 1, k;
    l.options.chart.allowMutatingData || (a.data && delete r.options.data, r.userOptions.data && delete r.userOptions.data, k = Zt(!0, t)), t = k || t || [];
    const M = t.length;
    if (h?.enabled && (t = this.sortData(t)), l.options.chart.allowMutatingData && s !== !1 && M && o && !r.cropped && !r.hasGroupedData && r.visible && // Soft updating has no benefit in boost, and causes JS error
    // (#8355)
    !r.boosted && (v = this.updateData(t, i)), !v) {
      r.xIncrement = null, r.colorCounter = 0;
      let C = d && !a.relativeXValue && M > d;
      if (C) {
        const A = r.getFirstValidPoint(t), T = r.getFirstValidPoint(t, M - 1, -1), E = (L) => !!(Hs(L) && (y || Z(L[0])));
        if (Z(A) && Z(T)) {
          const L = [], O = [];
          for (const D of t)
            L.push(this.autoIncrement()), O.push(D);
          p.setColumns({
            x: L,
            [g]: O
          });
        } else if (E(A) && E(T))
          if (m) {
            const L = A.length === m ? 1 : 0, O = new Array(u.length).fill(0).map(() => []);
            for (const D of t) {
              L && O[0].push(this.autoIncrement());
              for (let I = L; I <= m; I++)
                O[I]?.push(D[I - L]);
            }
            p.setColumns(u.reduce((D, I, R) => (D[I] = O[R], D), {}));
          } else {
            y && (S = y.indexOf("x"), w = y.indexOf("y"), S = S >= 0 ? S : 0, w = w >= 0 ? w : 1), A.length === 1 && (w = 0);
            const L = [], O = [];
            if (S === w)
              for (const D of t)
                L.push(this.autoIncrement()), O.push(D[w]);
            else
              for (const D of t)
                L.push(D[S]), O.push(D[w]);
            p.setColumns({
              x: L,
              [g]: O
            });
          }
        else
          C = !1;
      }
      if (!C) {
        const A = u.reduce((T, E) => (T[E] = [], T), {});
        for (b = 0; b < M; b++) {
          const T = r.pointClass.prototype.applyOptions.apply({ series: r }, [t[b]]);
          for (const E of u)
            A[E][b] = T[E];
        }
        p.setColumns(A);
      }
      for (pa(this.getColumn("y")[0]) && Te(14, !0, l), r.data = [], r.options.data = r.userOptions.data = t, b = o; b--; )
        n[b]?.destroy();
      f && (f.minRange = f.userMinRange), r.isDirty = l.isDirtyBox = !0, r.isDirtyData = !!n, i = !1;
    }
    a.legendType === "point" && (this.processData(), this.generatePoints()), e && l.redraw(i);
  }
  /**
   * Internal function to sort series data
   *
   * @private
   * @function Highcharts.Series#sortData
   * @param {Array<Highcharts.PointOptionsType>} data
   * Force data grouping.
   */
  sortData(t) {
    const e = this, i = e.options, s = i.dataSorting, r = s.sortKey || "y", n = function(a, l) {
      return q(l) && a.pointClass.prototype.optionsToObject.call({
        series: a
      }, l) || {};
    };
    return t.forEach(function(a, l) {
      t[l] = n(e, a), t[l].index = l;
    }, this), t.concat().sort((a, l) => {
      const h = js(r, a), f = js(r, l);
      return f < h ? -1 : f > h ? 1 : 0;
    }).forEach(function(a, l) {
      a.x = l;
    }, this), e.linkedSeries && e.linkedSeries.forEach(function(a) {
      const l = a.options, h = l.data;
      !l.dataSorting?.enabled && h && (h.forEach(function(f, d) {
        h[d] = n(a, f), t[d] && (h[d].x = t[d].x, h[d].index = d);
      }), a.setData(h, !1));
    }), t;
  }
  /**
   * Internal function to process the data by cropping away unused data
   * points if the series is longer than the crop threshold. This saves
   * computing time for large series.
   *
   * @private
   * @function Highcharts.Series#getProcessedData
   * @param {boolean} [forceExtremesFromAll]
   * Force getting extremes of a total series data range.
   */
  getProcessedData(t) {
    const e = this, { dataTable: i, isCartesian: s, options: r, xAxis: n } = e, o = r.cropThreshold, a = t || // X-range series etc, #21003
    e.getExtremesFromAll, l = n?.logarithmic, h = i.rowCount;
    let f, d, p = 0, u, g, x, m = e.getColumn("x"), y = i, b = !1;
    n && (u = n.getExtremes(), g = u.min, x = u.max, b = !!(n.categories && !n.names.length), s && e.sorted && !a && (!o || h > o || e.forceCrop) && (m[h - 1] < g || m[0] > x ? y = new si() : (
      // Don't understand why this condition is needed
      e.getColumn(e.pointValKey || "y").length && (m[0] < g || m[h - 1] > x) && (f = this.cropData(i, g, x), y = f.modified, p = f.start, d = !0)
    ))), m = y.getColumn("x") || [];
    const v = fa(
      [
        l ? m.map(l.log2lin) : m
      ],
      // Unsorted data is not supported by the line tooltip, as well as
      // data grouping and navigation in Stock charts (#725) and width
      // calculation of columns (#1900). Avoid warning during the
      // premature processing pass in updateNames (#16104).
      () => e.requireSorting && !b && Te(15, !1, e.chart)
    );
    return {
      modified: y,
      cropped: d,
      cropStart: p,
      closestPointRange: v
    };
  }
  /**
   * Internal function to apply processed data.
   * In Highcharts Stock, this function is extended to provide data grouping.
   *
   * @private
   * @function Highcharts.Series#processData
   * @param {boolean} [force]
   * Force data grouping.
   */
  processData(t) {
    const e = this, i = e.xAxis, s = e.dataTable;
    if (e.isCartesian && !e.isDirty && !i.isDirty && !e.yAxis.isDirty && !t)
      return !1;
    const r = e.getProcessedData();
    s.modified = r.modified, e.cropped = r.cropped, e.cropStart = r.cropStart, e.closestPointRange = e.basePointRange = r.closestPointRange, X(e, "afterProcessData");
  }
  /**
   * Iterate over xData and crop values between min and max. Returns
   * object containing crop start/end cropped xData with corresponding
   * part of yData, dataMin and dataMax within the cropped range.
   *
   * @private
   * @function Highcharts.Series#cropData
   */
  cropData(t, e, i) {
    const s = t.getColumn("x", !0) || [], r = s.length, n = {};
    let o, a, l = 0, h = r;
    for (o = 0; o < r; o++)
      if (s[o] >= e) {
        l = Math.max(0, o - 1);
        break;
      }
    for (a = o; a < r; a++)
      if (s[a] > i) {
        h = a + 1;
        break;
      }
    for (const f of this.dataColumnKeys()) {
      const d = t.getColumn(f, !0);
      d && (n[f] = d.slice(l, h));
    }
    return {
      modified: new si({ columns: n }),
      start: l,
      end: h
    };
  }
  /**
   * Generate the data point after the data has been processed by cropping
   * away unused points and optionally grouped in Highcharts Stock.
   *
   * @private
   * @function Highcharts.Series#generatePoints
   */
  generatePoints() {
    const t = this, e = t.options, i = t.processedData || e.data, s = t.dataTable.modified, r = t.getColumn("x", !0), n = t.pointClass, o = s.rowCount, a = t.cropStart || 0, l = t.hasGroupedData, h = e.keys, f = [], d = e.dataGrouping?.groupAll ? a : 0, p = t.xAxis?.categories, u = t.pointArrayMap || ["y"], g = this.dataColumnKeys();
    let x, m, y, b, v = t.data, S;
    if (!v && !l) {
      const w = [];
      w.length = i?.length || 0, v = t.data = w;
    }
    for (h && l && (t.options.keys = !1), b = 0; b < o; b++)
      m = a + b, l ? (y = new n(t, s.getRow(b, g) || []), y.dataGroup = t.groupMap[d + b], y.dataGroup?.options && (y.options = y.dataGroup.options, zt(y, y.dataGroup.options), delete y.dataLabels)) : (y = v[m], S = i ? i[m] : s.getRow(b, u), !y && S !== void 0 && (v[m] = y = new n(t, S, r[b]))), y && (y.index = l ? d + b : m, f[b] = y, y.category = p?.[y.x] ?? y.x, y.key = y.name ?? y.category);
    if (t.options.keys = h, v && (o !== (x = v.length) || l))
      for (b = 0; b < x; b++)
        b === a && !l && (b += o), v[b] && (v[b].destroyElements(), v[b].plotX = void 0);
    t.data = v, t.points = f, X(this, "afterGeneratePoints");
  }
  /**
   * Get current X extremes for the visible data.
   *
   * @private
   * @function Highcharts.Series#getXExtremes
   * @param {Array<number>} xData
   * The data to inspect. Defaults to the current data within the visible
   * range.
   */
  getXExtremes(t) {
    return {
      min: Rs(t),
      max: ci(t)
    };
  }
  /**
   * Calculate Y extremes for the visible data. The result is returned
   * as an object with `dataMin` and `dataMax` properties.
   *
   * @private
   * @function Highcharts.Series#getExtremes
   * @param {Array<number>} [yData]
   * The data to inspect. Defaults to the current data within the visible
   * range.
   * @param {boolean} [forceExtremesFromAll]
   * Force getting extremes of a total series data range.
   */
  getExtremes(t, e) {
    const { xAxis: i, yAxis: s } = this, r = e || this.getExtremesFromAll || this.options.getExtremesFromAll, n = r && this.cropped ? this.dataTable : this.dataTable.modified, o = n.rowCount, a = t || this.stackedYData, l = a ? [a] : (this.keysAffectYAxis || this.pointArrayMap || ["y"])?.map((S) => n.getColumn(S, !0) || []) || [], h = this.getColumn("x", !0), f = [], d = this.requireSorting && !this.is("column") ? 1 : 0, p = s ? s.positiveValuesOnly : !1, u = r || this.cropped || !i;
    let g, x, m, y = 0, b = 0;
    for (i && (g = i.getExtremes(), y = g.min, b = g.max), m = 0; m < o; m++)
      if (x = h[m], u || (h[m + d] || x) >= y && (h[m - d] || x) <= b)
        for (const S of l) {
          const w = S[m];
          Z(w) && (w > 0 || !p) && f.push(w);
        }
    const v = {
      activeYData: f,
      // Needed for Stock Cumulative Sum
      dataMin: Rs(f),
      dataMax: ci(f)
    };
    return X(this, "afterGetExtremes", { dataExtremes: v }), v;
  }
  /**
   * Set the current data extremes as `dataMin` and `dataMax` on the
   * Series item. Use this only when the series properties should be
   * updated.
   *
   * @private
   * @function Highcharts.Series#applyExtremes
   */
  applyExtremes() {
    const t = this.getExtremes();
    return this.dataMin = t.dataMin, this.dataMax = t.dataMax, t;
  }
  /**
   * Find and return the first non nullish point in the data
   *
   * @private
   * @function Highcharts.Series.getFirstValidPoint
   * @param {Array<Highcharts.PointOptionsType>} data
   *        Array of options for points
   * @param {number} [start=0]
   *        Index to start searching from
   * @param {number} [increment=1]
   *        Index increment, set -1 to search backwards
   */
  getFirstValidPoint(t, e = 0, i = 1) {
    const s = t.length;
    let r = e;
    for (; r >= 0 && r < s; ) {
      if (q(t[r]))
        return t[r];
      r += i;
    }
  }
  /**
   * Translate data points from raw data values to chart specific
   * positioning data needed later in the `drawPoints` and `drawGraph`
   * functions. This function can be overridden in plugins and custom
   * series type implementations.
   *
   * @function Highcharts.Series#translate
   *
   * @emits Highcharts.Series#events:translate
   */
  translate() {
    this.generatePoints();
    const t = this, e = t.options, i = e.stacking, s = t.xAxis, r = t.enabledDataSorting, n = t.yAxis, o = t.points, a = o.length, l = t.pointPlacementToXValue(), h = !!l, f = e.threshold, d = e.startFromThreshold ? f : 0, p = e?.nullInteraction && n.len;
    let u, g, x, m, y = Number.MAX_VALUE;
    function b(v) {
      return zs(v, -1e9, 1e9);
    }
    for (u = 0; u < a; u++) {
      const v = o[u], S = v.x;
      let w, k, M = v.y, C = v.low;
      const A = i && n.stacking?.stacks[(t.negStacks && M < (d ? 0 : f) ? "-" : "") + t.stackKey];
      g = s.translate(
        // #3923
        S,
        !1,
        !1,
        !1,
        !0,
        l
      ), v.plotX = Z(g) ? Ws(
        // #5236
        b(g)
        // #3923
      ) : void 0, i && t.visible && A && A[S] && (m = t.getStackIndicator(m, S, t.index), !v.isNull && m.key && (w = A[S], k = w.points[m.key]), w && Hs(k) && (C = k[0], M = k[1], C === d && m.key === A[S].base && (C = H(Z(f) ? f : n.min)), n.positiveValuesOnly && q(C) && C <= 0 && (C = void 0), v.total = v.stackTotal = H(w.total), v.percentage = q(v.y) && w.total ? v.y / w.total * 100 : void 0, v.stackY = M, t.irregularWidths || w.setOffset(t.pointXOffset || 0, t.barW || 0, void 0, void 0, void 0, t.xAxis))), v.yBottom = q(C) ? b(n.translate(C, !1, !0, !1, !0)) : void 0, t.dataModify && (M = t.dataModify.modifyValue(M, u));
      let T;
      Z(M) && v.plotX !== void 0 ? (T = n.translate(M, !1, !0, !1, !0), T = Z(T) ? b(T) : void 0) : !Z(M) && p && (T = p), v.plotY = T, v.isInside = this.isPointInside(v), v.clientX = h ? Ws(s.translate(S, !1, !1, !1, !0, l)) : g, v.negative = (v.y || 0) < (f || 0), !v.isNull && v.visible !== !1 && (typeof x < "u" && (y = Math.min(y, Math.abs(g - x))), x = g), v.zone = this.zones.length ? v.getZone() : void 0, !v.graphic && t.group && r && (v.isNew = !0);
    }
    t.closestPointRangePx = y, X(this, "afterTranslate");
  }
  /**
   * Return the series points with null points filtered out.
   *
   * @function Highcharts.Series#getValidPoints
   *
   * @param {Array<Highcharts.Point>} [points]
   * The points to inspect, defaults to {@link Series.points}.
   *
   * @param {boolean} [insideOnly=false]
   * Whether to inspect only the points that are inside the visible view.
   *
   * @param {boolean} [allowNull=false]
   * Whether to allow null points to pass as valid points.
   *
   * @return {Array<Highcharts.Point>}
   * The valid points.
   */
  getValidPoints(t, e, i) {
    const s = this.chart;
    return (t || this.points || []).filter(function(r) {
      const { plotX: n, plotY: o } = r;
      return !i && (r.isNull || !Z(o)) || e && !s.isInsidePlot(n, o, { inverted: s.inverted }) ? !1 : r.visible !== !1;
    });
  }
  /**
   * Get the shared clip key, creating it if it doesn't exist.
   *
   * @private
   * @function Highcharts.Series#getSharedClipKey
   */
  getSharedClipKey() {
    return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey;
  }
  /**
   * Set the clipping for the series. For animated series the clip is later
   * modified.
   *
   * @private
   * @function Highcharts.Series#setClip
   */
  setClip() {
    const { chart: t, group: e, markerGroup: i } = this, s = t.sharedClips, r = t.renderer, n = t.getClipBox(this), o = this.getSharedClipKey();
    let a = s[o];
    a ? a.animate(n) : s[o] = a = r.clipRect(n), e && e.clip(this.options.clip === !1 ? void 0 : a), i && i.clip();
  }
  /**
   * Animate in the series. Called internally twice. First with the `init`
   * parameter set to true, which sets up the initial state of the
   * animation. Then when ready, it is called with the `init` parameter
   * undefined, in order to perform the actual animation.
   *
   * @function Highcharts.Series#animate
   *
   * @param {boolean} [init]
   * Initialize the animation.
   */
  animate(t) {
    const { chart: e, group: i, markerGroup: s } = this, r = e.inverted, n = Ns(this.options.animation), o = [
      this.getSharedClipKey(),
      n.duration,
      n.easing,
      n.defer
    ].join(",");
    let a = e.sharedClips[o], l = e.sharedClips[o + "m"];
    if (t && i) {
      const h = e.getClipBox(this);
      if (a)
        a.attr("height", h.height);
      else {
        h.width = 0, r && (h.x = e.plotHeight), a = e.renderer.clipRect(h), e.sharedClips[o] = a;
        const f = {
          x: -99,
          y: -99,
          width: r ? e.plotWidth + 199 : 99,
          height: r ? 99 : e.plotHeight + 199
        };
        l = e.renderer.clipRect(f), e.sharedClips[o + "m"] = l;
      }
      i.clip(a), s?.clip(l);
    } else if (a && // Only first series in this pane
    !a.hasClass("highcharts-animating")) {
      const h = e.getClipBox(this), f = n.step;
      (s?.element.childNodes.length || e.series.length > 1) && (n.step = function(d, p) {
        f && f.apply(p, arguments), p.prop === "width" && l?.element && l.attr(r ? "height" : "width", d + 99);
      }), a.addClass("highcharts-animating").animate(h, n);
    }
  }
  /**
   * This runs after animation to land on the final plot clipping.
   *
   * @private
   * @function Highcharts.Series#afterAnimate
   *
   * @emits Highcharts.Series#event:afterAnimate
   */
  afterAnimate() {
    this.setClip(), di(this.chart.sharedClips, (t, e, i) => {
      t && !this.chart.container.querySelector(`[clip-path="url(#${t.id})"]`) && (t.destroy(), delete i[e]);
    }), this.finishedAnimating = !0, X(this, "afterAnimate");
  }
  /**
   * Draw the markers for line-like series types, and columns or other
   * graphical representation for {@link Point} objects for other series
   * types. The resulting element is typically stored as
   * {@link Point.graphic}, and is created on the first call and updated
   * and moved on subsequent calls.
   *
   * @function Highcharts.Series#drawPoints
   */
  drawPoints(t = this.points) {
    const e = this, i = e.chart, s = i.styledMode, { colorAxis: r, options: n } = e, o = n.marker, a = n.nullInteraction, l = e[e.specialGroup || "markerGroup"], h = e.xAxis, f = H(
      o.enabled,
      !h || h.isRadial ? !0 : null,
      // Use larger or equal as radius is null in bubbles (#6321)
      e.closestPointRangePx >= o.enabledThreshold * o.radius
    );
    let d, p, u, g, x, m, y;
    if (o.enabled !== !1 || e._hasPointMarkers)
      for (d = 0; d < t.length; d++) {
        p = t[d], u = p.graphic, g = u ? "animate" : "attr", x = p.marker || {}, m = !!p.marker;
        const b = p.isNull;
        if ((f && !q(x.enabled) || x.enabled) && (!b || a) && p.visible !== !1) {
          const S = H(x.symbol, e.symbol, "rect");
          y = e.markerAttribs(p, p.selected && "select"), e.enabledDataSorting && (p.startXPos = h.reversed ? -(y.width || 0) : h.width);
          const w = p.isInside !== !1;
          if (!u && w && ((y.width || 0) > 0 || p.hasImage) && (p.graphic = u = i.renderer.symbol(S, y.x, y.y, y.width, y.height, m ? x : o).add(l), e.enabledDataSorting && i.hasRendered && (u.attr({
            x: p.startXPos
          }), g = "animate")), u && g === "animate" && u[w ? "show" : "hide"](w).animate(y), u) {
            const k = e.pointAttribs(p, s || !p.selected ? void 0 : "select");
            s ? r && u.css({
              fill: k.fill
            }) : u[g](k);
          }
          u && u.addClass(p.getClassName(), !0);
        } else u && (p.graphic = u.destroy());
      }
  }
  /**
   * Get non-presentational attributes for a point. Used internally for
   * both styled mode and classic. Can be overridden for different series
   * types.
   *
   * @see Series#pointAttribs
   *
   * @function Highcharts.Series#markerAttribs
   *
   * @param {Highcharts.Point} point
   * The Point to inspect.
   *
   * @param {string} [state]
   * The state, can be either `hover`, `select` or undefined.
   *
   * @return {Highcharts.SVGAttributes}
   * A hash containing those attributes that are not settable from CSS.
   */
  markerAttribs(t, e) {
    const i = this.options, s = i.marker, r = t.marker || {}, n = r.symbol || s.symbol, o = {};
    let a, l, h = H(r.radius, s?.radius);
    e && (a = s.states[e], l = r.states && r.states[e], h = H(l?.radius, a?.radius, h && h + (a?.radiusPlus || 0))), t.hasImage = n && n.indexOf("url") === 0, t.hasImage && (h = 0);
    const f = t.pos();
    return Z(h) && f && (i.crisp && (f[0] = la(f[0], t.hasImage ? 0 : n === "rect" ? (
      // Rectangle symbols need crisp edges, others don't
      s?.lineWidth || 0
    ) : 1)), o.x = f[0] - h, o.y = f[1] - h), h && (o.width = o.height = 2 * h), o;
  }
  /**
   * Internal function to get presentational attributes for each point.
   * Unlike {@link Series#markerAttribs}, this function should return
   * those attributes that can also be set in CSS. In styled mode,
   * `pointAttribs` won't be called.
   *
   * @private
   * @function Highcharts.Series#pointAttribs
   *
   * @param {Highcharts.Point} [point]
   * The point instance to inspect.
   *
   * @param {string} [state]
   * The point state, can be either `hover`, `select` or 'normal'. If
   * undefined, normal state is assumed.
   *
   * @return {Highcharts.SVGAttributes}
   * The presentational attributes to be set on the point.
   */
  pointAttribs(t, e) {
    const i = this.options, s = i.marker, r = t?.options, n = r?.marker || {}, o = r?.color, a = t?.color, l = t?.zone?.color;
    let h, f, d = this.color, p, u, g = H(n.lineWidth, s.lineWidth), x = t?.isNull && i.nullInteraction ? 0 : 1;
    return d = o || l || a || d, p = n.fillColor || s.fillColor || d, u = n.lineColor || s.lineColor || d, e = e || "normal", e && (h = s.states[e] || {}, f = n.states && n.states[e] || {}, g = H(f.lineWidth, h.lineWidth, g + H(f.lineWidthPlus, h.lineWidthPlus, 0)), p = f.fillColor || h.fillColor || p, u = f.lineColor || h.lineColor || u, x = H(f.opacity, h.opacity, x)), {
      stroke: u,
      "stroke-width": g,
      fill: p,
      opacity: x
    };
  }
  /**
   * Clear DOM objects and free up memory.
   *
   * @private
   * @function Highcharts.Series#destroy
   *
   * @emits Highcharts.Series#event:destroy
   */
  destroy(t) {
    const e = this, i = e.chart, s = /AppleWebKit\/533/.test(oa.navigator.userAgent), r = e.data || [];
    let n, o, a;
    for (X(e, "destroy", { keepEventsForUpdate: t }), this.removeEvents(t), (e.axisTypes || []).forEach(function(l) {
      a = e[l], a?.series && (Fs(a.series, e), a.isDirty = a.forceRedraw = !0);
    }), e.legendItem && e.chart.legend.destroyItem(e), o = r.length; o--; )
      r[o]?.destroy?.();
    for (const l of e.zones)
      ha(l, void 0, !0);
    W.clearTimeout(e.animationTimeout), di(e, function(l, h) {
      l instanceof G && !l.survive && (n = s && h === "group" ? "hide" : "destroy", l[n]());
    }), i.hoverSeries === e && (i.hoverSeries = void 0), Fs(i.series, e), i.orderItems("series"), di(e, function(l, h) {
      (!t || h !== "hcEvents") && delete e[h];
    });
  }
  /**
   * Clip the graphs into zones for colors and styling.
   *
   * @private
   * @function Highcharts.Series#applyZones
   */
  applyZones() {
    const t = this, { area: e, chart: i, graph: s, zones: r, points: n, xAxis: o, yAxis: a, zoneAxis: l } = t, { inverted: h, renderer: f } = i, d = this[`${l}Axis`], { isXAxis: p, len: u = 0, minPointOffset: g = 0 } = d || {}, x = (s?.strokeWidth() || 0) / 2 + 1, m = (y, b = 0, v = 0) => {
      h && (v = u - v);
      const { translated: S = 0, lineClip: w } = y, k = v - S;
      w?.push([
        "L",
        b,
        Math.abs(k) < x ? v - x * (k <= 0 ? -1 : 1) : S
      ]);
    };
    if (r.length && (s || e) && d && Z(d.min)) {
      const y = d.getExtremes().max + g, b = (w) => {
        w.forEach((k, M) => {
          (k[0] === "M" || k[0] === "L") && (w[M] = [
            k[0],
            p ? u - k[1] : k[1],
            p ? k[2] : u - k[2]
          ]);
        });
      };
      if (r.forEach((w) => {
        w.lineClip = [], w.translated = zs(d.toPixels(H(w.value, y), !0) || 0, 0, u);
      }), s && !this.showLine && s.hide(), e && e.hide(), l === "y" && // Overheat protection
      n.length < o.len)
        for (const w of n) {
          const { plotX: k, plotY: M, zone: C } = w, A = C && r[r.indexOf(C) - 1];
          C && m(C, k, M), A && m(A, k, M);
        }
      let v = [], S = d.toPixels(d.getExtremes().min - g, !0);
      r.forEach((w) => {
        const k = w.lineClip || [], M = Math.round(w.translated || 0);
        o.reversed && k.reverse();
        let { clip: C, simpleClip: A } = w, T = 0, E = 0, L = o.len, O = a.len;
        p ? (T = M, L = S) : (E = M, O = S);
        const D = [
          ["M", T, E],
          ["L", L, E],
          ["L", L, O],
          ["L", T, O],
          ["Z"]
        ], I = [
          D[0],
          ...k,
          D[1],
          D[2],
          ...v,
          D[3],
          D[4]
        ];
        v = k.reverse(), S = M, h && (b(I), e && b(D)), C ? (C.animate({ d: I }), A?.animate({ d: D })) : (C = w.clip = f.path(I), e && (A = w.simpleClip = f.path(D))), s && w.graph?.clip(C), e && w.area?.clip(A);
      });
    } else t.visible && (s && s.show(), e && e.show());
  }
  /**
   * General abstraction for creating plot groups like series.group,
   * series.dataLabelsGroup and series.markerGroup. On subsequent calls,
   * the group will only be adjusted to the updated plot size.
   *
   * @private
   * @function Highcharts.Series#plotGroup
   */
  plotGroup(t, e, i, s, r) {
    let n = this[t];
    const o = !n, a = {
      visibility: i,
      zIndex: s || 0.1
      // Pointer logic uses this
    };
    return q(this.opacity) && !this.chart.styledMode && this.state !== "inactive" && (a.opacity = this.opacity), n || (this[t] = n = this.chart.renderer.g().add(r)), n.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (q(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (n.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), n.attr(a)[o ? "attr" : "animate"](this.getPlotBox(e)), n;
  }
  /**
   * Get the translation and scale for the plot area of this series.
   *
   * @function Highcharts.Series#getPlotBox
   */
  getPlotBox(t) {
    let e = this.xAxis, i = this.yAxis;
    const s = this.chart, r = s.inverted && !s.polar && e && this.invertible && t === "series";
    s.inverted && (e = i, i = this.xAxis);
    const n = {
      scale: 1,
      translateX: e ? e.left : s.plotLeft,
      translateY: i ? i.top : s.plotTop,
      name: t
    };
    X(this, "getPlotBox", n);
    const { scale: o, translateX: a, translateY: l } = n;
    return {
      translateX: a,
      translateY: l,
      rotation: r ? 90 : 0,
      rotationOriginX: r ? o * (e.len - i.len) / 2 : 0,
      rotationOriginY: r ? o * (e.len + i.len) / 2 : 0,
      scaleX: r ? -o : o,
      // #1623
      scaleY: o
    };
  }
  /**
   * Removes the event handlers attached previously with addEvents.
   * @private
   * @function Highcharts.Series#removeEvents
   */
  removeEvents(t) {
    const { eventsToUnbind: e } = this;
    t || ua(this), e.length && (e.forEach((i) => {
      i();
    }), e.length = 0);
  }
  /**
   * Render the graph and markers. Called internally when first rendering
   * and later when redrawing the chart. This function can be extended in
   * plugins, but normally shouldn't be called directly.
   *
   * @function Highcharts.Series#render
   *
   * @emits Highcharts.Series#event:afterRender
   */
  render() {
    const t = this, { chart: e, options: i, hasRendered: s } = t, r = Ns(i.animation), n = t.visible ? "inherit" : "hidden", o = i.zIndex, a = e.seriesGroup;
    let l = t.finishedAnimating ? 0 : r.duration;
    X(this, "render"), t.plotGroup("group", "series", n, o, a), t.markerGroup = t.plotGroup("markerGroup", "markers", n, o, a), i.clip !== !1 && t.setClip(), l && t.animate?.(!0), t.drawGraph && (t.drawGraph(), t.applyZones()), t.visible && t.drawPoints(), t.drawDataLabels?.(), t.redrawPoints?.(), i.enableMouseTracking && t.drawTracker?.(), l && t.animate?.(), s || (l && r.defer && (l += r.defer), t.animationTimeout = Gs(() => {
      t.afterAnimate();
    }, l || 0)), t.isDirty = !1, t.hasRendered = !0, X(t, "afterRender");
  }
  /**
   * Redraw the series. This function is called internally from
   * `chart.redraw` and normally shouldn't be called directly.
   * @private
   * @function Highcharts.Series#redraw
   */
  redraw() {
    const t = this.isDirty || this.isDirtyData;
    this.translate(), this.render(), t && delete this.kdTree;
  }
  /**
   * Whether to reserve space for the series, either because it is visible or
   * because the `chart.ignoreHiddenSeries` option is false.
   *
   * @private
   */
  reserveSpace() {
    return this.visible || !this.chart.options.chart.ignoreHiddenSeries;
  }
  /**
   * Find the nearest point from a pointer event. This applies to series that
   * use k-d-trees to get the nearest point. Native pointer events must be
   * normalized using `Pointer.normalize`, that adds `chartX` and `chartY`
   * properties.
   *
   * @sample highcharts/demo/synchronized-charts
   *         Synchronized charts with tooltips
   *
   * @function Highcharts.Series#searchPoint
   *
   * @param {Highcharts.PointerEvent} e
   *        The normalized pointer event
   * @param {boolean} [compareX=false]
   *        Search only by the X value, not Y
   *
   * @return {Point|undefined}
   *        The closest point to the pointer event
   */
  searchPoint(t, e) {
    const { xAxis: i, yAxis: s } = this, r = this.chart.inverted;
    return this.searchKDTree({
      clientX: r ? i.len - t.chartY + i.pos : t.chartX - i.pos,
      plotY: r ? s.len - t.chartX + s.pos : t.chartY - s.pos
    }, e, t);
  }
  /**
   * Build the k-d-tree that is used by mouse and touch interaction to get
   * the closest point. Line-like series typically have a one-dimensional
   * tree where points are searched along the X axis, while scatter-like
   * series typically search in two dimensions, X and Y.
   *
   * @private
   * @function Highcharts.Series#buildKDTree
   */
  buildKDTree(t) {
    this.buildingKdTree = !0;
    const e = this, i = e.options, s = i.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
    function r(o, a, l) {
      const h = o?.length;
      let f, d;
      if (h)
        return f = e.kdAxisArray[a % l], o.sort((p, u) => (p[f] || 0) - (u[f] || 0)), d = Math.floor(h / 2), {
          point: o[d],
          left: r(o.slice(0, d), a + 1, l),
          right: r(o.slice(d + 1), a + 1, l)
        };
    }
    function n() {
      e.kdTree = r(e.getValidPoints(
        void 0,
        // For line-type series restrict to plot area, but
        // column-type series not (#3916, #4511)
        !e.directTouch,
        i?.nullInteraction
      ), s, s), e.buildingKdTree = !1;
    }
    delete e.kdTree, Gs(n, i.kdNow || t?.type === "touchstart" ? 0 : 1);
  }
  /**
   * @private
   * @function Highcharts.Series#searchKDTree
   */
  searchKDTree(t, e, i, s, r) {
    const n = this, [o, a] = this.kdAxisArray, l = e ? "distX" : "dist", h = (n.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1, f = !!n.isBubble, d = s || ((x, m, y) => {
      const b = x[y] || 0, v = m[y] || 0;
      return [
        b === v && x.index > m.index || b < v ? x : m,
        !1
      ];
    }), p = r || ((x, m) => x < m);
    function u(x, m) {
      const y = x[o], b = m[o], v = q(y) && q(b) ? y - b : null, S = x[a], w = m[a], k = q(S) && q(w) ? S - w : 0, M = f && m.marker?.radius || 0;
      m.dist = Math.sqrt((v && v * v || 0) + k * k) - M, m.distX = q(v) ? Math.abs(v) - M : Number.MAX_VALUE;
    }
    function g(x, m, y, b) {
      const v = m.point, S = n.kdAxisArray[y % b];
      let w = v, k = !1;
      u(x, v);
      const M = (x[S] || 0) - (v[S] || 0) + (f && v.marker?.radius || 0), C = M < 0 ? "left" : "right", A = M < 0 ? "right" : "left";
      if (m[C] && ([w, k] = d(v, g(x, m[C], y + 1, b), l)), m[A]) {
        const T = Math.sqrt(M * M), E = w[l];
        p(T, E, k) && (w = d(w, g(x, m[A], y + 1, b), l)[0]);
      }
      return w;
    }
    if (!this.kdTree && !this.buildingKdTree && this.buildKDTree(i), this.kdTree)
      return g(t, this.kdTree, h, h);
  }
  /**
   * @private
   * @function Highcharts.Series#pointPlacementToXValue
   */
  pointPlacementToXValue() {
    const { options: t, xAxis: e } = this;
    let i = t.pointPlacement;
    return i === "between" && (i = e.reversed ? -0.5 : 0.5), Z(i) ? i * (t.pointRange || e.pointRange) : 0;
  }
  /**
   * @private
   * @function Highcharts.Series#isPointInside
   */
  isPointInside(t) {
    const { chart: e, xAxis: i, yAxis: s } = this, { plotX: r = -1, plotY: n = -1 } = t;
    return n >= 0 && n <= (s ? s.len : e.plotHeight) && r >= 0 && r <= (i ? i.len : e.plotWidth);
  }
  /**
   * Draw the tracker object that sits above all data labels and markers to
   * track mouse events on the graph or points. For the line type charts
   * the tracker uses the same graphPath, but with a greater stroke width
   * for better control.
   * @private
   */
  drawTracker() {
    const t = this, e = t.options, i = e.trackByArea, s = [].concat((i ? t.areaPath : t.graphPath) || []), r = t.chart, n = r.pointer, o = r.renderer, a = r.options.tooltip?.snap || 0, l = () => {
      e.enableMouseTracking && r.hoverSeries !== t && t.onMouseOver();
    }, h = "rgba(192,192,192," + (na ? 1e-4 : 2e-3) + ")";
    let f = t.tracker;
    f ? f.attr({ d: s }) : t.graph && (t.tracker = f = o.path(s).attr({
      visibility: t.visible ? "inherit" : "hidden",
      zIndex: 2
    }).addClass(i ? "highcharts-tracker-area" : "highcharts-tracker-line").add(t.group), r.styledMode || f.attr({
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      // #1225
      stroke: h,
      fill: i ? h : "none",
      "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * a)
    }), [
      t.tracker,
      t.markerGroup,
      t.dataLabelsGroup
    ].forEach((d) => {
      d && (d.addClass("highcharts-tracker").on("mouseover", l).on("mouseout", (p) => {
        n?.onTrackerMouseOut(p);
      }), e.cursor && !r.styledMode && d.css({ cursor: e.cursor }), d.on("touchstart", l));
    })), X(this, "afterDrawTracker");
  }
  /**
   * Add a point to the series after render time. The point can be added at
   * the end, or by giving it an X value, to the start or in the middle of the
   * series.
   *
   * @sample highcharts/members/series-addpoint-append/
   *         Append point
   * @sample highcharts/members/series-addpoint-append-and-shift/
   *         Append and shift
   * @sample highcharts/members/series-addpoint-x-and-y/
   *         Both X and Y values given
   * @sample highcharts/members/series-addpoint-pie/
   *         Append pie slice
   * @sample stock/members/series-addpoint/
   *         Append 100 points in Highcharts Stock
   * @sample stock/members/series-addpoint-shift/
   *         Append and shift in Highcharts Stock
   * @sample maps/members/series-addpoint/
   *         Add a point in Highmaps
   *
   * @function Highcharts.Series#addPoint
   *
   * @param {Highcharts.PointOptionsType} options
   *        The point options. If options is a single number, a point with
   *        that y value is appended to the series. If it is an array, it will
   *        be interpreted as x and y values respectively. If it is an
   *        object, advanced options as outlined under `series.data` are
   *        applied.
   *
   * @param {boolean} [redraw=true]
   *        Whether to redraw the chart after the point is added. When adding
   *        more than one point, it is highly recommended that the redraw
   *        option be set to false, and instead {@link Chart#redraw} is
   *        explicitly called after the adding of points is finished.
   *        Otherwise, the chart will redraw after adding each point.
   *
   * @param {boolean} [shift=false]
   *        If true, a point is shifted off the start of the series as one is
   *        appended to the end.
   *
   * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
   *        Whether to apply animation, and optionally animation
   *        configuration.
   *
   * @param {boolean} [withEvent=true]
   *        Used internally, whether to fire the series `addPoint` event.
   *
   * @emits Highcharts.Series#event:addPoint
   */
  addPoint(t, e, i, s, r) {
    const n = this, o = n.options, { chart: a, data: l, dataTable: h, xAxis: f } = n, d = f?.hasNames && f.names, p = o.data, u = n.getColumn("x");
    let g, x;
    e = H(e, !0);
    const m = { series: n };
    n.pointClass.prototype.applyOptions.apply(m, [t]);
    const y = m.x;
    if (x = u.length, n.requireSorting && y < u[x - 1])
      for (g = !0; x && u[x - 1] > y; )
        x--;
    h.setRow(m, x, !0, { addColumns: !1 }), d && m.name && (d[y] = m.name), p?.splice(x, 0, t), (g || // When processedData is present we need to splice an empty slot
    // into series.data, otherwise generatePoints won't pick it up.
    n.processedData) && (n.data.splice(x, 0, null), n.processData()), o.legendType === "point" && n.generatePoints(), i && (l[0] && l[0].remove ? l[0].remove(!1) : ([
      l,
      p
    ].filter(q).forEach((b) => {
      b.shift();
    }), h.deleteRows(0))), r !== !1 && X(n, "addPoint", { point: m }), n.isDirty = !0, n.isDirtyData = !0, e && a.redraw(s);
  }
  /**
   * Remove a point from the series. Unlike the
   * {@link Highcharts.Point#remove} method, this can also be done on a point
   * that is not instantiated because it is outside the view or subject to
   * Highcharts Stock data grouping.
   *
   * @sample highcharts/members/series-removepoint/
   *         Remove cropped point
   *
   * @function Highcharts.Series#removePoint
   *
   * @param {number} i
   *        The index of the point in the {@link Highcharts.Series.data|data}
   *        array.
   *
   * @param {boolean} [redraw=true]
   *        Whether to redraw the chart after the point is added. When
   *        removing more than one point, it is highly recommended that the
   *        `redraw` option be set to `false`, and instead {@link
   *        Highcharts.Chart#redraw} is explicitly called after the adding of
   *        points is finished.
   *
   * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
   *        Whether and optionally how the series should be animated.
   *
   * @emits Highcharts.Point#event:remove
   */
  removePoint(t, e, i) {
    const s = this, { chart: r, data: n, points: o, dataTable: a } = s, l = n[t], h = function() {
      [
        // #4935
        o?.length === n.length ? o : void 0,
        n,
        s.options.data
      ].filter(q).forEach((f) => {
        f.splice(t, 1);
      }), a.deleteRows(t), l?.destroy(), s.isDirty = !0, s.isDirtyData = !0, e && r.redraw();
    };
    sa(i, r), e = H(e, !0), l ? l.firePointEvent("remove", null, h) : h();
  }
  /**
   * Remove a series and optionally redraw the chart.
   *
   * @sample highcharts/members/series-remove/
   *         Remove first series from a button
   *
   * @function Highcharts.Series#remove
   *
   * @param {boolean} [redraw=true]
   *        Whether to redraw the chart or wait for an explicit call to
   *        {@link Highcharts.Chart#redraw}.
   *
   * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
   *        Whether to apply animation, and optionally animation
   *        configuration.
   *
   * @param {boolean} [withEvent=true]
   *        Used internally, whether to fire the series `remove` event.
   *
   * @emits Highcharts.Series#event:remove
   */
  remove(t, e, i, s) {
    const r = this, n = r.chart;
    function o() {
      r.destroy(s), n.isDirtyLegend = n.isDirtyBox = !0, n.linkSeries(s), H(t, !0) && n.redraw(e);
    }
    i !== !1 ? X(r, "remove", null, o) : o();
  }
  /**
   * Update the series with a new set of options. For a clean and precise
   * handling of new options, all methods and elements from the series are
   * removed, and it is initialized from scratch. Therefore, this method is
   * more performance expensive than some other utility methods like {@link
   * Series#setData} or {@link Series#setVisible}.
   *
   * Note that `Series.update` may mutate the passed `data` options.
   *
   * @sample highcharts/members/series-update/
   *         Updating series options
   * @sample maps/members/series-update/
   *         Update series options in Highmaps
   *
   * @function Highcharts.Series#update
   *
   * @param {Highcharts.SeriesOptionsType} options
   *        New options that will be merged with the series' existing options.
   *
   * @param {boolean} [redraw=true]
   *        Whether to redraw the chart after the series is altered. If doing
   *        more operations on the chart, it is a good idea to set redraw to
   *        false and call {@link Chart#redraw} after.
   *
   * @emits Highcharts.Series#event:update
   * @emits Highcharts.Series#event:afterUpdate
   */
  update(t, e) {
    t = ca(t, this.userOptions), X(this, "update", { options: t });
    const i = this, s = i.chart, r = i.userOptions, n = i.initialType || i.type, o = s.options.plotOptions, a = Bt[n].prototype, l = [
      "group",
      "markerGroup",
      "dataLabelsGroup",
      "transformGroup"
    ], h = [
      "dataGrouping",
      "pointStart",
      "pointInterval",
      "pointIntervalUnit",
      "keys"
    ], f = i.finishedAnimating && { animation: !1 }, d = {};
    let p, u, g = Hi.keepProps.slice(), x = t.type || r.type || s.options.chart.type;
    const m = !// Indicators etc recalculate the data. It should be
    // possible to omit this.
    (this.hasDerivedData || // New type requires new point classes
    x && x !== this.type || // New options affecting how the data points are built
    typeof t.keys < "u" || typeof t.pointStart < "u" || typeof t.pointInterval < "u" || typeof t.relativeXValue < "u" || t.joinBy || t.mapData || // #11636
    // Changes to data grouping requires new points in new group
    h.some((b) => i.hasOptionChanged(b)));
    x = x || n, m ? (g.push.apply(g, Hi.keepPropsForPoints), t.visible !== !1 && g.push("area", "graph"), i.parallelArrays.forEach(function(b) {
      g.push(b + "Data");
    }), t.data && (t.dataSorting && zt(i.options.dataSorting, t.dataSorting), this.setData(t.data, !1))) : this.dataTable.modified = this.dataTable, t = Zt(r, {
      // When oldOptions.index is null it should't be cleared.
      // Otherwise navigator series will have wrong indexes (#10193).
      index: r.index === void 0 ? i.index : r.index,
      pointStart: (
        // When updating from blank (#7933)
        o?.series?.pointStart ?? r.pointStart ?? // When updating after addPoint
        i.getColumn("x")[0]
      )
    }, !m && { data: i.options.data }, t, f), m && t.data && (t.data = i.options.data), g = l.concat(g), g.forEach(function(b) {
      g[b] = i[b], delete i[b];
    });
    let y = !1;
    if (Bt[x]) {
      if (y = x !== i.type, i.remove(!1, !1, !1, !0), y)
        if (s.propFromSeries(), Object.setPrototypeOf)
          Object.setPrototypeOf(i, Bt[x].prototype);
        else {
          const b = Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents;
          for (u in a)
            i[u] = void 0;
          zt(i, Bt[x].prototype), b ? i.hcEvents = b : delete i.hcEvents;
        }
    } else
      Te(17, !0, s, { missingModuleFor: x });
    if (g.forEach(function(b) {
      i[b] = g[b];
    }), i.init(s, t), m && this.points) {
      p = i.options, p.visible === !1 ? (d.graphic = 1, d.dataLabel = 1) : (this.hasMarkerChanged(p, r) && (d.graphic = 1), i.hasDataLabels?.() || (d.dataLabel = 1));
      for (const b of this.points)
        b?.series && (b.resolveColor(), Object.keys(d).length && b.destroyElements(d), p.showInLegend === !1 && b.legendItem && s.legend.destroyItem(b));
    }
    i.initialType = n, s.linkSeries(), s.setSortedData(), y && i.linkedSeries.length && (i.isDirtyData = !0), X(this, "afterUpdate"), H(e, !0) && s.redraw(m ? void 0 : !1);
  }
  /**
   * Used from within series.update
   * @private
   */
  setName(t) {
    this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0;
  }
  /**
   * Check if the option has changed.
   * @private
   */
  hasOptionChanged(t) {
    const e = this.chart, i = this.options[t], s = e.options.plotOptions, r = this.userOptions[t], n = H(s?.[this.type]?.[t], s?.series?.[t]);
    return r && !q(n) ? i !== r : i !== H(n, i);
  }
  /**
   * Runs on mouse over the series graphical items.
   *
   * @function Highcharts.Series#onMouseOver
   * @emits Highcharts.Series#event:mouseOver
   */
  onMouseOver() {
    const t = this, e = t.chart, i = e.hoverSeries;
    e.pointer?.setHoverChartIndex(), i && i !== t && i.onMouseOut(), t.options.events.mouseOver && X(t, "mouseOver"), t.setState("hover"), e.hoverSeries = t;
  }
  /**
   * Runs on mouse out of the series graphical items.
   *
   * @function Highcharts.Series#onMouseOut
   *
   * @emits Highcharts.Series#event:mouseOut
   */
  onMouseOut() {
    const t = this, e = t.options, i = t.chart, s = i.tooltip, r = i.hoverPoint;
    i.hoverSeries = null, r && r.onMouseOut(), t && e.events.mouseOut && X(t, "mouseOut"), s && !t.stickyTracking && (!s.shared || t.noSharedTooltip) && s.hide(), i.series.forEach(function(n) {
      n.setState("", !0);
    });
  }
  /**
   * Set the state of the series. Called internally on mouse interaction
   * operations, but it can also be called directly to visually
   * highlight a series.
   *
   * @function Highcharts.Series#setState
   *
   * @param {Highcharts.SeriesStateValue|""} [state]
   *        The new state, can be either `'hover'`, `'inactive'`, `'select'`,
   *        or `''` (an empty string), `'normal'` or `undefined` to set to
   *        normal state.
   * @param {boolean} [inherit]
   *        Determines if state should be inherited by points too.
   */
  setState(t, e) {
    const i = this, s = i.options, r = i.graph, n = s.inactiveOtherPoints, o = s.states, a = H(o[t || "normal"] && o[t || "normal"].animation, i.chart.options.chart.animation);
    let l = s.lineWidth, h = s.opacity;
    if (t = t || "", i.state !== t && ([
      i.group,
      i.markerGroup,
      i.dataLabelsGroup
    ].forEach(function(f) {
      f && (i.state && f.removeClass("highcharts-series-" + i.state), t && f.addClass("highcharts-series-" + t));
    }), i.state = t, !i.chart.styledMode)) {
      if (o[t] && o[t].enabled === !1)
        return;
      if (t && (l = o[t].lineWidth || l + (o[t].lineWidthPlus || 0), h = H(o[t].opacity, h)), r && !r.dashstyle && Z(l))
        for (const f of [
          r,
          ...this.zones.map((d) => d.graph)
        ])
          f?.animate({
            "stroke-width": l
          }, a);
      n || [
        i.group,
        i.markerGroup,
        i.dataLabelsGroup,
        i.labelBySeries
      ].forEach(function(f) {
        f && f.animate({
          opacity: h
        }, a);
      });
    }
    e && n && i.points && i.setAllPointsToState(t || void 0);
  }
  /**
   * Set the state for all points in the series.
   *
   * @function Highcharts.Series#setAllPointsToState
   *
   * @private
   *
   * @param {string} [state]
   *        Can be either `hover` or undefined to set to normal state.
   */
  setAllPointsToState(t) {
    this.points.forEach(function(e) {
      e.setState && e.setState(t);
    });
  }
  /**
   * Show or hide the series.
   *
   * @function Highcharts.Series#setVisible
   *
   * @param {boolean} [visible]
   * True to show the series, false to hide. If undefined, the visibility is
   * toggled.
   *
   * @param {boolean} [redraw=true]
   * Whether to redraw the chart after the series is altered. If doing more
   * operations on the chart, it is a good idea to set redraw to false and
   * call {@link Chart#redraw|chart.redraw()} after.
   *
   * @emits Highcharts.Series#event:hide
   * @emits Highcharts.Series#event:show
   */
  setVisible(t, e) {
    const i = this, s = i.chart, r = s.options.chart.ignoreHiddenSeries, n = i.visible;
    i.visible = t = i.options.visible = i.userOptions.visible = typeof t > "u" ? !n : t;
    const o = t ? "show" : "hide";
    [
      "group",
      "dataLabelsGroup",
      "markerGroup",
      "tracker",
      "tt"
    ].forEach((a) => {
      i[a]?.[o]();
    }), (s.hoverSeries === i || s.hoverPoint?.series === i) && i.onMouseOut(), i.legendItem && s.legend.colorizeItem(i, t), i.isDirty = !0, i.options.stacking && s.series.forEach((a) => {
      a.options.stacking && a.visible && (a.isDirty = !0);
    }), i.linkedSeries.forEach((a) => {
      a.setVisible(t, !1);
    }), r && (s.isDirtyBox = !0), X(i, o), e !== !1 && s.redraw();
  }
  /**
   * Show the series if hidden.
   *
   * @sample highcharts/members/series-hide/
   *         Toggle visibility from a button
   *
   * @function Highcharts.Series#show
   * @emits Highcharts.Series#event:show
   */
  show() {
    this.setVisible(!0);
  }
  /**
   * Hide the series if visible. If the
   * [chart.ignoreHiddenSeries](https://api.highcharts.com/highcharts/chart.ignoreHiddenSeries)
   * option is true, the chart is redrawn without this series.
   *
   * @sample highcharts/members/series-hide/
   *         Toggle visibility from a button
   *
   * @function Highcharts.Series#hide
   * @emits Highcharts.Series#event:hide
   */
  hide() {
    this.setVisible(!1);
  }
  /**
   * Select or unselect the series. This means its
   * {@link Highcharts.Series.selected|selected}
   * property is set, the checkbox in the legend is toggled and when selected,
   * the series is returned by the {@link Highcharts.Chart#getSelectedSeries}
   * function.
   *
   * @sample highcharts/members/series-select/
   *         Select a series from a button
   *
   * @function Highcharts.Series#select
   *
   * @param {boolean} [selected]
   * True to select the series, false to unselect. If undefined, the selection
   * state is toggled.
   *
   * @emits Highcharts.Series#event:select
   * @emits Highcharts.Series#event:unselect
   */
  select(t) {
    const e = this;
    e.selected = t = this.options.selected = typeof t > "u" ? !e.selected : t, e.checkbox && (e.checkbox.checked = t), X(e, t ? "select" : "unselect");
  }
  /**
   * Checks if a tooltip should be shown for a given point.
   *
   * @private
   */
  shouldShowTooltip(t, e, i = {}) {
    return i.series = this, i.visiblePlotOnly = !0, this.chart.isInsidePlot(t, e, i);
  }
  /**
   * Draws the legend symbol based on the legendSymbol user option.
   *
   * @private
   */
  drawLegendSymbol(t, e) {
    So[this.options.legendSymbol || "rectangle"]?.call(this, t, e);
  }
};
et.defaultOptions = Fo;
et.types = St.seriesTypes;
et.registerType = St.registerSeriesType;
et.keepProps = [
  "colorIndex",
  "eventOptions",
  "navigatorSeries",
  "symbolIndex",
  "baseSeries"
];
et.keepPropsForPoints = [
  "data",
  "isDirtyData",
  // GeoHeatMap interpolation
  "isDirtyCanvas",
  "points",
  "dataTable",
  "processedData",
  // #17057
  "xIncrement",
  "cropped",
  "_hasPointMarkers",
  "hasDataLabels",
  // Networkgraph (#14397)
  "nodes",
  "layout",
  // Treemap
  "level",
  // Map specific, consider moving it to series-specific preserve-
  // properties (#10617)
  "mapMap",
  "mapData",
  "minY",
  "maxY",
  "minX",
  "maxX",
  "transformGroups"
  // #18857
];
zt(et.prototype, {
  axisTypes: ["xAxis", "yAxis"],
  coll: "series",
  colorCounter: 0,
  directTouch: !1,
  invertible: !0,
  isCartesian: !0,
  kdAxisArray: ["clientX", "plotY"],
  // Each point's x and y values are stored in this.xData and this.yData:
  parallelArrays: ["x", "y"],
  pointClass: vt,
  requireSorting: !0,
  // Requires the data to be sorted:
  sorted: !0
});
St.series = et;
const { defined: Ys, extend: ga, getAlignFactor: Vs, isNumber: _t, merge: ma, pick: Oe, removeEvent: Us } = W;
class Ot extends G {
  /* *
   *
   *  Constructor
   *
   * */
  constructor(t, e, i, s, r, n, o, a, l, h) {
    super(t, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.doUpdate = !1, this.textStr = e, this.x = i, this.y = s, this.anchorX = n, this.anchorY = o, this.baseline = l, this.className = h, this.addClass(h === "button" ? "highcharts-no-tooltip" : "highcharts-label"), h && this.addClass("highcharts-" + h), this.text = t.text(void 0, 0, 0, a).attr({ zIndex: 1 });
    let f;
    typeof r == "string" && (f = /^url\((.*?)\)$/.test(r), (f || this.renderer.symbols[r]) && (this.symbolKey = r)), this.bBox = Ot.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t.styledMode || f, this.deferredAttr = {}, this.alignFactor = 0;
  }
  /* *
   *
   *  Functions
   *
   * */
  alignSetter(t) {
    const e = Vs(t);
    this.textAlign = t, e !== this.alignFactor && (this.alignFactor = e, this.bBox && _t(this.xSetting) && this.attr({ x: this.xSetting }));
  }
  anchorXSetter(t, e) {
    this.anchorX = t, this.boxAttr(e, Math.round(t) - this.getCrispAdjust() - this.xSetting);
  }
  anchorYSetter(t, e) {
    this.anchorY = t, this.boxAttr(e, t - this.ySetting);
  }
  /*
   * Set a box attribute, or defer it if the box is not yet created
   */
  boxAttr(t, e) {
    this.box ? this.box.attr(t, e) : this.deferredAttr[t] = e;
  }
  /*
   * Pick up some properties and apply them to the text instead of the
   * wrapper.
   */
  css(t) {
    if (t) {
      const e = {};
      t = ma(t), Ot.textProps.forEach((i) => {
        typeof t[i] < "u" && (e[i] = t[i], delete t[i]);
      }), this.text.css(e), "fontSize" in e || "fontWeight" in e ? this.updateTextPadding() : ("width" in e || "textOverflow" in e) && this.updateBoxSize();
    }
    return G.prototype.css.call(this, t);
  }
  /*
   * Destroy and release memory.
   */
  destroy() {
    Us(this.element, "mouseenter"), Us(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), G.prototype.destroy.call(this);
  }
  fillSetter(t, e) {
    t && (this.needsBox = !0), this.fill = t, this.boxAttr(e, t);
  }
  /*
   * Return the bounding box of the box, not the group.
   */
  getBBox(t, e) {
    this.textStr && this.bBox.width === 0 && this.bBox.height === 0 && this.updateBoxSize();
    const { padding: i, height: s = 0, translateX: r = 0, translateY: n = 0, width: o = 0 } = this, a = Oe(this.paddingLeft, i), l = e ?? (this.rotation || 0);
    let h = {
      width: o,
      height: s,
      x: r + this.bBox.x - a,
      y: n + this.bBox.y - i + this.baselineOffset
    };
    return l && (h = this.getRotatedBox(h, l)), h;
  }
  getCrispAdjust() {
    return (this.renderer.styledMode && this.box ? this.box.strokeWidth() : this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
  }
  heightSetter(t) {
    this.heightSetting = t, this.doUpdate = !0;
  }
  /**
   * This method is executed in the end of `attr()`, after setting all
   * attributes in the hash. In can be used to efficiently consolidate
   * multiple attributes in one SVG property -- e.g., translate, rotate and
   * scale are merged in one "transform" attribute in the SVG node.
   * Also updating height or width should trigger update of the box size.
   *
   * @private
   * @function Highcharts.SVGLabel#afterSetters
   */
  afterSetters() {
    super.afterSetters(), this.doUpdate && (this.updateBoxSize(), this.doUpdate = !1);
  }
  /*
   * After the text element is added, get the desired size of the border
   * box and add it before the text in the DOM.
   */
  onAdd() {
    this.text.add(this), this.attr({
      // Alignment is available now  (#3295, 0 not rendered if given
      // as a value)
      text: Oe(this.textStr, ""),
      x: this.x || 0,
      y: this.y || 0
    }), this.box && Ys(this.anchorX) && this.attr({
      anchorX: this.anchorX,
      anchorY: this.anchorY
    });
  }
  paddingSetter(t, e) {
    _t(t) ? t !== this[e] && (this[e] = t, this.updateTextPadding()) : this[e] = void 0;
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
    typeof t < "u" && this.text.attr({ text: t }), this.updateTextPadding(), this.reAlign();
  }
  /*
   * This function runs after the label is added to the DOM (when the bounding
   * box is available), and after the text of the label is updated to detect
   * the new bounding box and reflect it in the border box.
   */
  updateBoxSize() {
    const t = this.text, e = {}, i = this.padding, s = this.bBox = (!_t(this.widthSetting) || !_t(this.heightSetting) || this.textAlign) && Ys(t.textStr) ? t.getBBox(void 0, 0) : Ot.emptyBBox;
    let r;
    this.width = this.getPaddedWidth(), this.height = (this.heightSetting || s.height || 0) + 2 * i;
    const n = this.renderer.fontMetrics(t);
    if (this.baselineOffset = i + Math.min(
      // When applicable, use the font size of the first line (#15707)
      (this.text.firstLineMetrics || n).b,
      // When the height is 0, there is no bBox, so go with the font
      // metrics. Highmaps CSS demos.
      s.height || 1 / 0
    ), this.heightSetting && (this.baselineOffset += (this.heightSetting - n.h) / 2), this.needsBox && !t.textPath) {
      if (!this.box) {
        const o = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
        o.addClass(
          // Don't use label className for buttons
          (this.className === "button" ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")
        ), o.add(this);
      }
      r = this.getCrispAdjust(), e.x = r, e.y = (this.baseline ? -this.baselineOffset : 0) + r, e.width = Math.round(this.width), e.height = Math.round(this.height), this.box.attr(ga(e, this.deferredAttr)), this.deferredAttr = {};
    }
  }
  /*
   * This function runs after setting text or padding, but only if padding
   * is changed.
   */
  updateTextPadding() {
    const t = this.text, e = t.styles.textAlign || this.textAlign;
    if (!t.textPath) {
      this.updateBoxSize();
      const i = this.baseline ? 0 : this.baselineOffset, s = (this.paddingLeft ?? this.padding) + // Compensate for alignment
      Vs(e) * (this.widthSetting ?? this.bBox.width);
      (s !== t.x || i !== t.y) && (t.attr({
        align: e,
        x: s
      }), typeof i < "u" && t.attr("y", i)), t.x = s, t.y = i;
    }
  }
  widthSetter(t) {
    this.widthSetting = _t(t) ? t : void 0, this.doUpdate = !0;
  }
  getPaddedWidth() {
    const t = this.padding, e = Oe(this.paddingLeft, t), i = Oe(this.paddingRight, t);
    return (this.widthSetting || this.bBox.width || 0) + e + i;
  }
  xSetter(t) {
    this.x = t, this.alignFactor && (t -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.anchorX && (this["forceAnimate:anchorX"] = !0), this.xSetting = Math.round(t), this.attr("translateX", this.xSetting);
  }
  ySetter(t) {
    this.anchorY && (this["forceAnimate:anchorY"] = !0), this.ySetting = this.y = Math.round(t), this.attr("translateY", this.ySetting);
  }
}
Ot.emptyBBox = {
  width: 0,
  height: 0,
  x: 0,
  y: 0
};
Ot.textProps = [
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
const { defined: Ks, isNumber: xa, pick: Jt } = W;
function Pr(c, t, e, i, s) {
  const r = [];
  if (s) {
    let n = s.start || 0, o = s.end || 0;
    const a = Jt(s.r, e), l = Jt(s.r, i || e), h = 2e-4 / (s.borderRadius ? 1 : Math.max(a, 1)), f = Math.abs(o - n - 2 * Math.PI) < h;
    f && (n = Math.PI / 2, o = Math.PI * 2.5 - h);
    const d = s.innerR, p = Jt(s.open, f), u = Math.cos(n), g = Math.sin(n), x = Math.cos(o), m = Math.sin(o), y = Jt(s.longArc, o - n - Math.PI < h ? 0 : 1);
    let b = [
      "A",
      // ArcTo
      a,
      // X radius
      l,
      // Y radius
      0,
      // Slanting
      y,
      // Long or short arc
      Jt(s.clockwise, 1),
      // Clockwise
      c + a * x,
      t + l * m
    ];
    b.params = { start: n, end: o, cx: c, cy: t }, r.push([
      "M",
      c + a * u,
      t + l * g
    ], b), Ks(d) && (b = [
      "A",
      // ArcTo
      d,
      // X radius
      d,
      // Y radius
      0,
      // Slanting
      y,
      // Long or short arc
      // Clockwise - opposite to the outer arc clockwise
      Ks(s.clockwise) ? 1 - s.clockwise : 0,
      c + d * u,
      t + d * g
    ], b.params = {
      start: o,
      end: n,
      cx: c,
      cy: t
    }, r.push(p ? [
      "M",
      c + d * x,
      t + d * m
    ] : [
      "L",
      c + d * x,
      t + d * m
    ], b)), p || r.push(["Z"]);
  }
  return r;
}
function ya(c, t, e, i, s) {
  const o = Math.min(s?.r || 0, e, i), a = o + 6, l = s?.anchorX, h = s?.anchorY || 0, f = _i(c, t, e, i, { r: o });
  if (!xa(l) || l < e && l > 0 && h < i && h > 0)
    return f;
  if (c + l > e - a)
    if (h > t + a && h < t + i - a)
      f.splice(3, 1, ["L", c + e, h - 6], ["L", c + e + 6, h], ["L", c + e, h + 6], ["L", c + e, t + i - o]);
    else if (l < e) {
      const d = h < t + a, p = d ? t : t + i, u = d ? 2 : 5;
      f.splice(u, 0, ["L", l, h], ["L", c + e - o, p]);
    } else
      f.splice(3, 1, ["L", c + e, i / 2], ["L", l, h], ["L", c + e, i / 2], ["L", c + e, t + i - o]);
  else if (c + l < a)
    if (h > t + a && h < t + i - a)
      f.splice(7, 1, ["L", c, h + 6], ["L", c - 6, h], ["L", c, h - 6], ["L", c, t + o]);
    else if (l > 0) {
      const d = h < t + a, p = d ? t : t + i, u = d ? 1 : 6;
      f.splice(u, 0, ["L", l, h], ["L", c + o, p]);
    } else
      f.splice(7, 1, ["L", c, i / 2], ["L", l, h], ["L", c, i / 2], ["L", c, t + o]);
  else // Replace bottom
  h > i && l < e - a ? f.splice(5, 1, ["L", l + 6, t + i], ["L", l, t + i + 6], ["L", l - 6, t + i], ["L", c + o, t + i]) : (
    // Replace top
    h < 0 && l > a && f.splice(1, 1, ["L", l - 6, t], ["L", l, t - 6], ["L", l + 6, t], ["L", e - o, t])
  );
  return f;
}
function ba(c, t, e, i) {
  return Pr(c + e / 2, t + i / 2, e / 2, i / 2, {
    start: Math.PI * 0.5,
    end: Math.PI * 2.5,
    open: !1
  });
}
function va(c, t, e, i) {
  return [
    ["M", c + e / 2, t],
    ["L", c + e, t + i / 2],
    ["L", c + e / 2, t + i],
    ["L", c, t + i / 2],
    ["Z"]
  ];
}
function qs(c, t, e, i, s) {
  return s?.r ? _i(c, t, e, i, s) : [
    ["M", c, t],
    ["L", c + e, t],
    ["L", c + e, t + i],
    ["L", c, t + i],
    ["Z"]
  ];
}
function _i(c, t, e, i, s) {
  const r = s?.r || 0;
  return [
    ["M", c + r, t],
    ["L", c + e - r, t],
    // Top side
    ["A", r, r, 0, 0, 1, c + e, t + r],
    // Top-right corner
    ["L", c + e, t + i - r],
    // Right side
    ["A", r, r, 0, 0, 1, c + e - r, t + i],
    // Bottom-right corner
    ["L", c + r, t + i],
    // Bottom side
    ["A", r, r, 0, 0, 1, c, t + i - r],
    // Bottom-left corner
    ["L", c, t + r],
    // Left side
    ["A", r, r, 0, 0, 1, c + r, t],
    ["Z"]
    // Top-left corner
  ];
}
function Sa(c, t, e, i) {
  return [
    ["M", c + e / 2, t],
    ["L", c + e, t + i],
    ["L", c, t + i],
    ["Z"]
  ];
}
function wa(c, t, e, i) {
  return [
    ["M", c, t],
    ["L", c + e, t],
    ["L", c + e / 2, t + i],
    ["Z"]
  ];
}
const Ma = {
  arc: Pr,
  callout: ya,
  circle: ba,
  diamond: va,
  rect: qs,
  roundedRect: _i,
  square: qs,
  triangle: Sa,
  "triangle-down": wa
}, { doc: fi, SVG_NS: ka, win: Zs } = N, { attr: pi, extend: Aa, fireEvent: Ca, isString: Ta, objectEach: Oa, pick: La } = W, ui = (c, t) => c.substring(0, t) + "…";
class Pa {
  constructor(t) {
    const e = t.styles;
    this.renderer = t.renderer, this.svgElement = t, this.width = t.textWidth, this.textLineHeight = e?.lineHeight, this.textOutline = e?.textOutline, this.ellipsis = e?.textOverflow === "ellipsis", this.lineClamp = e?.lineClamp, this.noWrap = e?.whiteSpace === "nowrap";
  }
  /**
   * Build an SVG representation of the pseudo HTML given in the object's
   * svgElement.
   *
   * @private
   *
   * @return {void}.
   */
  buildSVG() {
    const t = this.svgElement, e = t.element, i = t.renderer, s = La(t.textStr, "").toString(), r = s.indexOf("<") !== -1, n = e.childNodes, o = !t.added && i.box, a = /<br.*?>/g, l = [
      s,
      this.ellipsis,
      this.noWrap,
      this.textLineHeight,
      this.textOutline,
      t.getStyle("font-size"),
      t.styles.lineClamp,
      this.width
    ].join(",");
    if (l !== t.textCache) {
      t.textCache = l, delete t.actualWidth;
      for (let h = n.length; h--; )
        e.removeChild(n[h]);
      if (!r && !this.ellipsis && !this.width && !t.textPath && (s.indexOf(" ") === -1 || this.noWrap && !a.test(s)))
        e.appendChild(fi.createTextNode(this.unescapeEntities(s)));
      else if (s !== "") {
        o && o.appendChild(e);
        const h = new Y(s);
        this.modifyTree(h.nodes), h.addToDOM(e), this.modifyDOM(), this.ellipsis && (e.textContent || "").indexOf("…") !== -1 && t.attr(
          "title",
          this.unescapeEntities(t.textStr || "", ["&lt;", "&gt;"])
          // #7179
        ), o && o.removeChild(e);
      }
      Ta(this.textOutline) && t.applyTextOutline && t.applyTextOutline(this.textOutline);
    }
  }
  /**
   * Modify the DOM of the generated SVG structure. This function only does
   * operations that cannot be done until the elements are attached to the
   * DOM, like doing layout based on rendered metrics of the added elements.
   *
   * @private
   *
   */
  modifyDOM() {
    const t = this.svgElement, e = pi(t.element, "x");
    t.firstLineMetrics = void 0;
    let i;
    for (; (i = t.element.firstChild) && /^[\s\u200B]*$/.test(i.textContent || " "); )
      t.element.removeChild(i);
    [].forEach.call(t.element.querySelectorAll("tspan.highcharts-br"), (o, a) => {
      o.nextSibling && o.previousSibling && (a === 0 && o.previousSibling.nodeType === 1 && (t.firstLineMetrics = t.renderer.fontMetrics(o.previousSibling)), pi(o, {
        // Since the break is inserted in front of the next
        // line, we need to use the next sibling for the line
        // height
        dy: this.getLineHeight(o.nextSibling),
        x: e
      }));
    });
    const s = this.width || 0;
    if (!s)
      return;
    const r = (o, a) => {
      const l = o.textContent || "", h = l.replace(/([^\^])-/g, "$1- ").split(" "), f = !this.noWrap && (h.length > 1 || t.element.childNodes.length > 1), d = this.getLineHeight(a), p = Math.max(
        0,
        // Subtract the font face to make room for
        // the ellipsis itself
        s - 0.8 * d
      );
      let u = 0, g = t.actualWidth;
      if (f) {
        const x = [], m = [];
        for (; a.firstChild && a.firstChild !== o; )
          m.push(a.firstChild), a.removeChild(a.firstChild);
        for (; h.length; )
          if (h.length && !this.noWrap && u > 0 && (x.push(o.textContent || ""), o.textContent = h.join(" ").replace(/- /g, "-")), this.truncate(
            o,
            void 0,
            h,
            u === 0 && g || 0,
            s,
            p,
            // Build the text to test for
            (y, b) => h.slice(0, b).join(" ").replace(/- /g, "-")
          ), g = t.actualWidth, u++, this.lineClamp && u >= this.lineClamp) {
            h.length && (this.truncate(
              o,
              o.textContent || "",
              void 0,
              0,
              // Target width
              s,
              p,
              ui
            ), o.textContent = o.textContent?.replace("…", "") + "…");
            break;
          }
        m.forEach((y) => {
          a.insertBefore(y, o);
        }), x.forEach((y) => {
          a.insertBefore(fi.createTextNode(y), o);
          const b = fi.createElementNS(ka, "tspan");
          b.textContent = "​", pi(b, { dy: d, x: e }), a.insertBefore(b, o);
        });
      } else this.ellipsis && l && this.truncate(
        o,
        l,
        void 0,
        0,
        // Target width
        s,
        p,
        ui
      );
    }, n = ((o) => {
      [].slice.call(o.childNodes).forEach((l) => {
        l.nodeType === Zs.Node.TEXT_NODE ? r(l, o) : (l.className.baseVal.indexOf("highcharts-br") !== -1 && (t.actualWidth = 0), n(l));
      });
    });
    n(t.element);
  }
  /**
   * Get the rendered line height of a <text>, <tspan> or pure text node.
   * @private
   * @param {DOMElementType|Text} node The node to check for
   * @return {number} The rendered line height
   */
  getLineHeight(t) {
    const e = t.nodeType === Zs.Node.TEXT_NODE ? t.parentElement : t;
    return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(e || this.svgElement.element).h;
  }
  /**
   * Transform a pseudo HTML AST node tree into an SVG structure. We do as
   * much heavy lifting as we can here, before doing the final processing in
   * the modifyDOM function. The original data is mutated.
   *
   * @private
   *
   * @param {ASTNode[]} nodes The AST nodes
   *
   */
  modifyTree(t) {
    const e = (i, s) => {
      const { attributes: r = {}, children: n, style: o = {}, tagName: a } = i, l = this.renderer.styledMode;
      if (a === "b" || a === "strong" ? l ? r.class = "highcharts-strong" : o.fontWeight = "bold" : (a === "i" || a === "em") && (l ? r.class = "highcharts-emphasized" : o.fontStyle = "italic"), o?.color && (o.fill = o.color), a === "br") {
        r.class = "highcharts-br", i.textContent = "​";
        const h = t[s + 1];
        h?.textContent && (h.textContent = h.textContent.replace(/^ +/gm, ""));
      } else a === "a" && n && n.some((h) => h.tagName === "#text") && (i.children = [{ children: n, tagName: "tspan" }]);
      a !== "#text" && a !== "a" && (i.tagName = "tspan"), Aa(i, { attributes: r, style: o }), n && n.filter((h) => h.tagName !== "#text").forEach(e);
    };
    t.forEach(e), Ca(this.svgElement, "afterModifyTree", { nodes: t });
  }
  /*
   * Truncate the text node contents to a given length. Used when the css
   * width is set. If the `textOverflow` is `ellipsis`, the text is truncated
   * character by character to the given length. If not, the text is
   * word-wrapped line by line.
   */
  truncate(t, e, i, s, r, n, o) {
    const a = this.svgElement, { rotation: l } = a, h = [];
    let f = i && !s ? 1 : 0, d = (e || i || "").length, p = d, u, g;
    i || (r = n);
    const x = function(m, y) {
      const b = y || m, v = t.parentNode;
      if (v && typeof h[b] > "u" && v.getSubStringLength)
        try {
          h[b] = s + v.getSubStringLength(0, i ? b + 1 : b);
        } catch {
        }
      return h[b];
    };
    if (a.rotation = 0, g = x(t.textContent.length), s + g > r) {
      for (; f <= d; )
        p = Math.ceil((f + d) / 2), i && (u = o(i, p)), g = x(p, u && u.length - 1), f === d ? f = d + 1 : g > r ? d = p - 1 : f = p;
      d === 0 ? t.textContent = "" : e && d === e.length - 1 || (t.textContent = u || o(e || i, p)), this.ellipsis && g > r && this.truncate(t, t.textContent || "", void 0, 0, r, n, ui);
    }
    i && i.splice(0, p), a.actualWidth = g, a.rotation = l;
  }
  /*
   * Un-escape HTML entities based on the public `renderer.escapes` list
   *
   * @private
   *
   * @param {string} inputStr The string to unescape
   * @param {Array<string>} [except] Exceptions
   *
   * @return {string} The processed string
   */
  unescapeEntities(t, e) {
    return Oa(this.renderer.escapes, function(i, s) {
      (!e || e.indexOf(i) === -1) && (t = t.toString().replace(new RegExp(i, "g"), s));
    }), t;
  }
}
const { defaultOptions: Ea } = Dt, { charts: Da, deg2rad: _s, doc: Nt, isFirefox: Js, isMS: Qs, isWebKit: $a, noop: Ia, SVG_NS: Ba, symbolSizes: gi, win: mi } = N, { addEvent: Le, attr: Pe, createElement: Na, crisp: tr, css: Ee, defined: Mt, destroyObjectProperties: Ra, extend: Tt, isArray: za, isNumber: kt, isObject: Qt, isString: Wa, merge: xi, pick: yi, pInt: Fa, replaceNested: ja, uniqueKey: Xa } = W;
let bi;
class Ji {
  /**
   * The root `svg` node of the renderer.
   *
   * @name Highcharts.SVGRenderer#box
   * @type {Highcharts.SVGDOMElement}
   */
  /**
   * The wrapper for the root `svg` node of the renderer.
   *
   * @name Highcharts.SVGRenderer#boxWrapper
   * @type {Highcharts.SVGElement}
   */
  /**
   * A pointer to the `defs` node of the root SVG.
   *
   * @name Highcharts.SVGRenderer#defs
   * @type {Highcharts.SVGElement}
   */
  /**
   * Whether the rendered content is intended for export.
   *
   * @name Highcharts.SVGRenderer#forExport
   * @type {boolean | undefined}
   */
  /**
   * Page url used for internal references.
   *
   * @private
   * @name Highcharts.SVGRenderer#url
   * @type {string}
   */
  /**
   * Initialize the SVGRenderer. Overridable initializer function that takes
   * the same parameters as the constructor.
   *
   * @function Highcharts.SVGRenderer#init
   *
   * @param {Highcharts.HTMLDOMElement} container
   * Where to put the SVG in the web page.
   *
   * @param {number} width
   * The width of the SVG.
   *
   * @param {number} height
   * The height of the SVG.
   *
   * @param {Highcharts.CSSObject} [style]
   * The box style, if not in styleMode
   *
   * @param {boolean} [forExport=false]
   * Whether the rendered content is intended for export.
   *
   * @param {boolean} [allowHTML=true]
   * Whether the renderer is allowed to include HTML text, which will be
   * projected on top of the SVG.
   *
   * @param {boolean} [styledMode=false]
   * Whether the renderer belongs to a chart that is in styled mode. If it
   * does, it will avoid setting presentational attributes in some cases, but
   * not when set explicitly through `.attr` and `.css` etc.
   */
  constructor(t, e, i, s, r, n, o) {
    this.x = 0, this.y = 0;
    const a = this, l = a.createElement("svg").attr({
      version: "1.1",
      class: "highcharts-root"
    }), h = l.element;
    o || l.css(this.getStyle(s || {})), t.appendChild(h), Pe(t, "dir", "ltr"), t.innerHTML.indexOf("xmlns") === -1 && Pe(h, "xmlns", this.SVG_NS), this.box = h, this.boxWrapper = l, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(Nt.createTextNode("Created with Highcharts 12.4.0")), this.defs = this.createElement("defs").add(), this.allowHTML = n, this.forExport = r, this.styledMode = o, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = l.getStyle("font-size"), a.setSize(e, i, !1);
    let d, p;
    Js && t.getBoundingClientRect && (d = function() {
      Ee(t, { left: 0, top: 0 }), p = t.getBoundingClientRect(), Ee(t, {
        left: Math.ceil(p.left) - p.left + "px",
        top: Math.ceil(p.top) - p.top + "px"
      });
    }, d(), a.unSubPixelFix = Le(mi, "resize", d));
  }
  /* *
   *
   *  Functions
   *
   * */
  /**
   * General method for adding a definition to the SVG `defs` tag. Can be used
   * for gradients, fills, filters etc. Styled mode only. A hook for adding
   * general definitions to the SVG's defs tag. Definitions can be referenced
   * from the CSS by its `id`. Read more in
   * [gradients, shadows and patterns](https://www.highcharts.com/docs/chart-design-and-style/gradients-shadows-and-patterns).
   * Styled mode only.
   *
   * @function Highcharts.SVGRenderer#definition
   *
   * @param {Highcharts.ASTNode} def
   * A serialized form of an SVG definition, including children.
   *
   * @return {Highcharts.SVGElement}
   * The inserted node.
   */
  definition(t) {
    return new Y([t]).addToDOM(this.defs.element);
  }
  /**
   * Get the prefix needed for internal URL references to work in certain
   * cases. Some older browser versions had a bug where internal url
   * references in SVG attributes, on the form `url(#some-id)`, would fail if
   * a base tag was present in the page. There were also issues with
   * `history.pushState` related to this prefix.
   *
   * Related issues: #24, #672, #1070, #5244.
   *
   * The affected browsers are:
   * - Chrome <= 53 (May 2018)
   * - Firefox <= 51 (January 2017)
   * - Safari/Mac <= 12.1 (2018 or 2019)
   * - Safari/iOS <= 13
   *
   * @todo Remove this hack when time has passed. All the affected browsers
   * are evergreens, so it is increasingly unlikely that users are affected by
   * the bug.
   *
   * @return {string}
   * The prefix to use. An empty string for modern browsers.
   */
  getReferenceURL() {
    if ((Js || $a) && Nt.getElementsByTagName("base").length) {
      if (!Mt(bi)) {
        const t = Xa(), i = new Y([{
          tagName: "svg",
          attributes: {
            width: 8,
            height: 8
          },
          children: [{
            tagName: "defs",
            children: [{
              tagName: "clipPath",
              attributes: {
                id: t
              },
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
              "clip-path": `url(#${t})`,
              fill: "rgba(0,0,0,0.001)"
            }
          }]
        }]).addToDOM(Nt.body);
        Ee(i, {
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9e5
        }), bi = Nt.elementFromPoint(6, 6)?.id === "hitme", Nt.body.removeChild(i);
      }
      if (bi)
        return ja(
          mi.location.href.split("#")[0],
          // Remove hash
          [/<[^>]*>/g, ""],
          // Wing cut HTML
          [/([\('\)])/g, "\\$1"],
          // Escape parantheses and quotes
          [/ /g, "%20"]
          // Replace spaces (needed for Safari only)
        );
    }
    return "";
  }
  /**
   * Get the global style setting for the renderer.
   *
   * @private
   * @function Highcharts.SVGRenderer#getStyle
   *
   * @param {Highcharts.CSSObject} style
   * Style settings.
   *
   * @return {Highcharts.CSSObject}
   * The style settings mixed with defaults.
   */
  getStyle(t) {
    return this.style = Tt({
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
      fontSize: "1rem"
    }, t), this.style;
  }
  /**
   * Apply the global style on the renderer, mixed with the default styles.
   *
   * @function Highcharts.SVGRenderer#setStyle
   *
   * @param {Highcharts.CSSObject} style
   * CSS to apply.
   */
  setStyle(t) {
    this.boxWrapper.css(this.getStyle(t));
  }
  /**
   * Detect whether the renderer is hidden. This happens when one of the
   * parent elements has `display: none`. Used internally to detect when we
   * need to render preliminarily in another div to get the text bounding
   * boxes right.
   *
   * @function Highcharts.SVGRenderer#isHidden
   *
   * @return {boolean}
   * True if it is hidden.
   */
  isHidden() {
    return !this.boxWrapper.getBBox().width;
  }
  /**
   * Destroys the renderer and its allocated members.
   *
   * @function Highcharts.SVGRenderer#destroy
   *
   * @return {null}
   * Pass through value.
   */
  destroy() {
    const t = this, e = t.defs;
    return t.box = null, t.boxWrapper = t.boxWrapper.destroy(), Ra(t.gradients || {}), t.gradients = null, t.defs = e.destroy(), t.unSubPixelFix && t.unSubPixelFix(), t.alignedObjects = null, null;
  }
  /**
   * Create a wrapper for an SVG element. Serves as a factory for
   * {@link SVGElement}, but this function is itself mostly called from
   * primitive factories like {@link SVGRenderer#path}, {@link
   * SVGRenderer#rect} or {@link SVGRenderer#text}.
   *
   * @function Highcharts.SVGRenderer#createElement
   *
   * @param {string} nodeName
   * The node name, for example `rect`, `g` etc.
   *
   * @return {Highcharts.SVGElement}
   * The generated SVGElement.
   */
  createElement(t) {
    return new this.Element(this, t);
  }
  /**
   * Get converted radial gradient attributes according to the radial
   * reference. Used internally from the {@link SVGElement#colorGradient}
   * function.
   *
   * @private
   * @function Highcharts.SVGRenderer#getRadialAttr
   */
  getRadialAttr(t, e) {
    return {
      cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2],
      cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2],
      r: (e.r || 0) * t[2]
    };
  }
  /**
   * Create a drop shadow definition and return its id
   *
   * @private
   * @function Highcharts.SVGRenderer#shadowDefinition
   *
   * @param {boolean|Highcharts.ShadowOptionsObject} [shadowOptions] The
   *        shadow options. If `true`, the default options are applied
   */
  shadowDefinition(t) {
    const e = [
      `highcharts-drop-shadow-${this.chartIndex}`,
      ...Object.keys(t).map((s) => `${s}-${t[s]}`)
    ].join("-").toLowerCase().replace(/[^a-z\d\-]/g, ""), i = xi({
      color: "#000000",
      offsetX: 1,
      offsetY: 1,
      opacity: 0.15,
      width: 5
    }, t);
    return this.defs.element.querySelector(`#${e}`) || this.definition({
      tagName: "filter",
      attributes: {
        id: e,
        filterUnits: i.filterUnits
      },
      children: this.getShadowFilterContent(i)
    }), e;
  }
  /**
   * Get shadow filter content.
   * NOTE! Overridden in es5 module for IE11 compatibility.
   *
   * @private
   * @function Highcharts.SVGRenderer#getShadowFilterContent
   *
   * @param {ShadowOptionsObject} options
   * The shadow options.
   * @return {Array<AST.Node>}
   * The shadow filter content.
   */
  getShadowFilterContent(t) {
    return [{
      tagName: "feDropShadow",
      attributes: {
        dx: t.offsetX,
        dy: t.offsetY,
        "flood-color": t.color,
        // Tuned and modified to keep a preserve compatibility
        // with the old settings
        "flood-opacity": Math.min(t.opacity * 5, 1),
        stdDeviation: t.width / 2
      }
    }];
  }
  /**
   * Parse a simple HTML string into SVG tspans. Called internally when text
   * is set on an SVGElement. The function supports a subset of HTML tags, CSS
   * text features like `width`, `text-overflow`, `white-space`, and also
   * attributes like `href` and `style`.
   *
   * @private
   * @function Highcharts.SVGRenderer#buildText
   *
   * @param {Highcharts.SVGElement} wrapper
   * The parent SVGElement.
   */
  buildText(t) {
    new Pa(t).buildSVG();
  }
  /**
   * Returns white for dark colors and black for bright colors, based on W3C's
   * definition of [Relative luminance](
   * https://www.w3.org/WAI/GL/wiki/Relative_luminance).
   *
   * @function Highcharts.SVGRenderer#getContrast
   *
   * @param {Highcharts.ColorString} color
   * The color to get the contrast for.
   *
   * @return {Highcharts.ColorString}
   * The contrast color, either `#000000` or `#FFFFFF`.
   */
  getContrast(t) {
    if (t === "transparent")
      return "#000000";
    const e = U.parse(t).rgba, i = " clamp(0,calc(9e9*(0.5 - (0.2126*r + 0.7152*g + 0.0722*b))),1)";
    if (kt(e[0]) || !U.useColorMix) {
      const s = e.map((n) => {
        const o = n / 255;
        return o <= 0.04 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4);
      }), r = 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2];
      return 1.05 / (r + 0.05) > (r + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
    }
    return "color(from " + t + " srgb" + i + i + i + ")";
  }
  /**
   * Create a button with preset states. Styles for the button can either be
   * set as arguments, or a general theme for all buttons can be set by the
   * `global.buttonTheme` option.
   *
   * @function Highcharts.SVGRenderer#button
   *
   * @param {string} text
   * The text or HTML to draw.
   *
   * @param {number} x
   * The x position of the button's left side.
   *
   * @param {number} y
   * The y position of the button's top side.
   *
   * @param {Highcharts.EventCallbackFunction<Highcharts.SVGElement>} callback
   * The function to execute on button click or touch.
   *
   * @param {Highcharts.SVGAttributes} [theme]
   * SVG attributes for the normal state.
   *
   * @param {Highcharts.SVGAttributes} [hoverState]
   * SVG attributes for the hover state.
   *
   * @param {Highcharts.SVGAttributes} [selectState]
   * SVG attributes for the pressed state.
   *
   * @param {Highcharts.SVGAttributes} [disabledState]
   * SVG attributes for the disabled state.
   *
   * @param {Highcharts.SymbolKeyValue} [shape=rect]
   * The shape type.
   *
   * @param {boolean} [useHTML=false]
   * Whether to use HTML to render the label.
   *
   * @return {Highcharts.SVGElement}
   * The button element.
   */
  button(t, e, i, s, r = {}, n, o, a, l, h) {
    const f = this.label(t, e, i, l, void 0, void 0, h, void 0, "button"), d = this.styledMode, p = arguments;
    let u = 0;
    r = xi(Ea.global.buttonTheme, r), d && (delete r.fill, delete r.stroke, delete r["stroke-width"]);
    const g = r.states || {}, x = r.style || {};
    delete r.states, delete r.style;
    const m = [
      Y.filterUserAttributes(r)
    ], y = [x];
    return d || ["hover", "select", "disabled"].forEach((b, v) => {
      m.push(xi(m[0], Y.filterUserAttributes(p[v + 5] || g[b] || {}))), y.push(m[v + 1].style), delete m[v + 1].style;
    }), Le(f.element, Qs ? "mouseover" : "mouseenter", function() {
      u !== 3 && f.setState(1);
    }), Le(f.element, Qs ? "mouseout" : "mouseleave", function() {
      u !== 3 && f.setState(u);
    }), f.setState = (b = 0) => {
      if (b !== 1 && (f.state = u = b), f.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][b]), !d) {
        f.attr(m[b]);
        const v = y[b];
        Qt(v) && f.css(v);
      }
    }, f.attr(m[0]), d || (f.css(Tt({ cursor: "default" }, x)), h && f.text.css({ pointerEvents: "none" })), f.on("touchstart", (b) => b.stopPropagation()).on("click", function(b) {
      u !== 3 && s?.call(f, b);
    });
  }
  /**
   * Make a straight line crisper by not spilling out to neighbour pixels.
   *
   * @function Highcharts.SVGRenderer#crispLine
   *
   * @param {Highcharts.SVGPathArray} points
   *        The original points on the format `[['M', 0, 0], ['L', 100, 0]]`.
   *
   * @param {number} width
   *        The width of the line.
   *
   * @return {Highcharts.SVGPathArray}
   *         The original points array, but modified to render crisply.
   */
  crispLine(t, e) {
    const [i, s] = t;
    return Mt(i[1]) && i[1] === s[1] && (i[1] = s[1] = tr(i[1], e)), Mt(i[2]) && i[2] === s[2] && (i[2] = s[2] = tr(i[2], e)), t;
  }
  /**
   * Draw a path, wraps the SVG `path` element.
   *
   * @sample highcharts/members/renderer-path-on-chart/
   *         Draw a path in a chart
   * @sample highcharts/members/renderer-path/
   *         Draw a path independent from a chart
   *
   * @example
   * let path = renderer.path(['M', 10, 10, 'L', 30, 30, 'z'])
   *     .attr({ stroke: '#ff00ff' })
   *     .add();
   *
   * @function Highcharts.SVGRenderer#path
   *
   * @param {Highcharts.SVGPathArray} [path]
   * An SVG path definition in array form.
   *
   * @return {Highcharts.SVGElement}
   * The generated wrapper element.
   *
   */
  /**
  * Draw a path, wraps the SVG `path` element.
  *
  * @function Highcharts.SVGRenderer#path
  *
  * @param {Highcharts.SVGAttributes} [attribs]
  * The initial attributes.
  *
  * @return {Highcharts.SVGElement}
  * The generated wrapper element.
  */
  path(t) {
    const e = this.styledMode ? {} : {
      fill: "none"
    };
    return za(t) ? e.d = t : Qt(t) && Tt(e, t), this.createElement("path").attr(e);
  }
  /**
   * Draw a circle, wraps the SVG `circle` element.
   *
   * @sample highcharts/members/renderer-circle/
   *         Drawing a circle
   *
   * @function Highcharts.SVGRenderer#circle
   *
   * @param {number} [x]
   * The center x position.
   *
   * @param {number} [y]
   * The center y position.
   *
   * @param {number} [r]
   * The radius.
   *
   * @return {Highcharts.SVGElement}
   * The generated wrapper element.
   */
  /**
  * Draw a circle, wraps the SVG `circle` element.
  *
  * @function Highcharts.SVGRenderer#circle
  *
  * @param {Highcharts.SVGAttributes} [attribs]
  * The initial attributes.
  *
  * @return {Highcharts.SVGElement}
  * The generated wrapper element.
  */
  circle(t, e, i) {
    const s = Qt(t) ? t : typeof t > "u" ? {} : { x: t, y: e, r: i }, r = this.createElement("circle");
    return r.xSetter = r.ySetter = function(n, o, a) {
      a.setAttribute("c" + o, n);
    }, r.attr(s);
  }
  /**
   * Draw and return an arc.
   *
   * @sample highcharts/members/renderer-arc/
   *         Drawing an arc
   *
   * @function Highcharts.SVGRenderer#arc
   *
   * @param {number} [x=0]
   * Center X position.
   *
   * @param {number} [y=0]
   * Center Y position.
   *
   * @param {number} [r=0]
   * The outer radius' of the arc.
   *
   * @param {number} [innerR=0]
   * Inner radius like used in donut charts.
   *
   * @param {number} [start=0]
   * The starting angle of the arc in radians, where 0 is to the right and
   * `-Math.PI/2` is up.
   *
   * @param {number} [end=0]
   * The ending angle of the arc in radians, where 0 is to the right and
   * `-Math.PI/2` is up.
   *
   * @return {Highcharts.SVGElement}
   * The generated wrapper element.
   */
  /**
  * Draw and return an arc. Overloaded function that takes arguments object.
  *
  * @function Highcharts.SVGRenderer#arc
  *
  * @param {Highcharts.SVGAttributes} attribs
  * Initial SVG attributes.
  *
  * @return {Highcharts.SVGElement}
  * The generated wrapper element.
  */
  arc(t, e, i, s, r, n) {
    let o;
    Qt(t) ? (o = t, e = o.y, i = o.r, s = o.innerR, r = o.start, n = o.end, t = o.x) : o = { innerR: s, start: r, end: n };
    const a = this.symbol("arc", t, e, i, i, o);
    return a.r = i, a;
  }
  /**
   * Draw and return a rectangle.
   *
   * @function Highcharts.SVGRenderer#rect
   *
   * @param {number} [x]
   * Left position.
   *
   * @param {number} [y]
   * Top position.
   *
   * @param {number} [width]
   * Width of the rectangle.
   *
   * @param {number} [height]
   * Height of the rectangle.
   *
   * @param {number} [r]
   * Border corner radius.
   *
   * @param {number} [strokeWidth]
   * A stroke width can be supplied to allow crisp drawing.
   *
   * @return {Highcharts.SVGElement}
   * The generated wrapper element.
   */
  /**
  * Draw and return a rectangle.
  *
  * @sample highcharts/members/renderer-rect-on-chart/
  *         Draw a rectangle in a chart
  * @sample highcharts/members/renderer-rect/
  *         Draw a rectangle independent from a chart
  *
  * @function Highcharts.SVGRenderer#rect
  *
  * @param {Highcharts.SVGAttributes} [attributes]
  * General SVG attributes for the rectangle.
  *
  * @return {Highcharts.SVGElement}
  * The generated wrapper element.
  */
  rect(t, e, i, s, r, n) {
    const o = Qt(t) ? t : typeof t > "u" ? {} : {
      x: t,
      y: e,
      r,
      width: Math.max(i || 0, 0),
      height: Math.max(s || 0, 0)
    }, a = this.createElement("rect");
    return this.styledMode || (typeof n < "u" && (o["stroke-width"] = n, Tt(o, a.crisp(o))), o.fill = "none"), a.rSetter = function(l, h, f) {
      a.r = l, Pe(f, {
        rx: l,
        ry: l
      });
    }, a.rGetter = function() {
      return a.r || 0;
    }, a.attr(o);
  }
  /**
   * Draw and return a rectangle with advanced corner rounding options.
   *
   * @function Highcharts.SVGRenderer#roundedRect
   *
   * @param {Highcharts.SVGAttributes} attribs
   *      Attributes
   * @return {Highcharts.SVGElement}
   * The generated wrapper element.
   */
  roundedRect(t) {
    return this.symbol("roundedRect").attr(t);
  }
  /**
   * Resize the {@link SVGRenderer#box} and re-align all aligned child
   * elements.
   *
   * @sample highcharts/members/renderer-g/
   *         Show and hide grouped objects
   *
   * @function Highcharts.SVGRenderer#setSize
   *
   * @param {number} width
   * The new pixel width.
   *
   * @param {number} height
   * The new pixel height.
   *
   * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animate=true]
   * Whether and how to animate.
   */
  setSize(t, e, i) {
    const s = this;
    s.width = t, s.height = e, s.boxWrapper.animate({
      width: t,
      height: e
    }, {
      step: function() {
        this.attr({
          viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
        });
      },
      duration: yi(i, !0) ? void 0 : 0
    }), s.alignElements();
  }
  /**
   * Create and return an svg group element. Child
   * {@link Highcharts.SVGElement} objects are added to the group by using the
   * group as the first parameter in {@link Highcharts.SVGElement#add|add()}.
   *
   * @function Highcharts.SVGRenderer#g
   *
   * @param {string} [name]
   *        The group will be given a class name of `highcharts-{name}`. This
   *        can be used for styling and scripting.
   *
   * @return {Highcharts.SVGElement}
   *         The generated wrapper element.
   */
  g(t) {
    const e = this.createElement("g");
    return t ? e.attr({ class: "highcharts-" + t }) : e;
  }
  /**
   * Display an image.
   *
   * @sample highcharts/members/renderer-image-on-chart/
   *         Add an image in a chart
   * @sample highcharts/members/renderer-image/
   *         Add an image independent of a chart
   *
   * @function Highcharts.SVGRenderer#image
   *
   * @param {string} href
   *        The image source.
   *
   * @param {number} [x]
   *        The X position.
   *
   * @param {number} [y]
   *        The Y position.
   *
   * @param {number} [width]
   *        The image width. If omitted, it defaults to the image file width.
   *
   * @param {number} [height]
   *        The image height. If omitted it defaults to the image file
   *        height.
   *
   * @param {Function} [onload]
   *        Event handler for image load.
   *
   * @return {Highcharts.SVGElement}
   *         The generated wrapper element.
   */
  image(t, e, i, s, r, n) {
    const o = { preserveAspectRatio: "none" };
    kt(e) && (o.x = e), kt(i) && (o.y = i), kt(s) && (o.width = s), kt(r) && (o.height = r);
    const a = this.createElement("image").attr(o), l = function(h) {
      a.attr({ href: t }), n.call(a, h);
    };
    if (n) {
      a.attr({
        /* eslint-disable-next-line max-len */
        href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      });
      const h = new mi.Image();
      Le(h, "load", l), h.src = t, h.complete && l({});
    } else
      a.attr({ href: t });
    return a;
  }
  /**
   * Draw a symbol out of pre-defined shape paths from
   * {@link SVGRenderer#symbols}.
   * It is used in Highcharts for point makers, which cake a `symbol` option,
   * and label and button backgrounds like in the tooltip and stock flags.
   *
   * @function Highcharts.SVGRenderer#symbol
   *
   * @param {string} symbol
   * The symbol name.
   *
   * @param {number} [x]
   * The X coordinate for the top left position.
   *
   * @param {number} [y]
   * The Y coordinate for the top left position.
   *
   * @param {number} [width]
   * The pixel width.
   *
   * @param {number} [height]
   * The pixel height.
   *
   * @param {Highcharts.SymbolOptionsObject} [options]
   * Additional options, depending on the actual symbol drawn.
   *
   * @return {Highcharts.SVGElement}
   * SVG symbol.
   */
  symbol(t, e, i, s, r, n) {
    const o = this, a = /^url\((.*?)\)$/, l = a.test(t), h = !l && (this.symbols[t] ? t : "circle"), f = h && this.symbols[h];
    let d, p, u, g;
    if (f)
      typeof e == "number" && (p = f.call(this.symbols, e || 0, i || 0, s || 0, r || 0, n)), d = this.path(p), o.styledMode || d.attr("fill", "none"), Tt(d, {
        symbolName: h || void 0,
        x: e,
        y: i,
        width: s,
        height: r
      }), n && Tt(d, n);
    else if (l) {
      u = t.match(a)[1];
      const x = d = this.image(u);
      x.imgwidth = yi(n?.width, gi[u]?.width), x.imgheight = yi(n?.height, gi[u]?.height), g = (m) => m.attr({
        width: m.width,
        height: m.height
      }), ["width", "height"].forEach((m) => {
        x[`${m}Setter`] = function(y, b) {
          this[b] = y;
          const { alignByTranslate: v, element: S, width: w, height: k, imgwidth: M, imgheight: C } = this, A = b === "width" ? M : C;
          let T = 1;
          n && n.backgroundSize === "within" && w && k && M && C ? (T = Math.min(w / M, k / C), Pe(S, {
            width: Math.round(M * T),
            height: Math.round(C * T)
          })) : S && A && S.setAttribute(b, A), !v && M && C && this.translate(((w || 0) - M * T) / 2, ((k || 0) - C * T) / 2);
        };
      }), Mt(e) && x.attr({
        x: e,
        y: i
      }), x.isImg = !0, x.symbolUrl = t, Mt(x.imgwidth) && Mt(x.imgheight) ? g(x) : (x.attr({ width: 0, height: 0 }), Na("img", {
        onload: function() {
          const m = Da[o.chartIndex];
          this.width === 0 && (Ee(this, {
            position: "absolute",
            top: "-999em"
          }), Nt.body.appendChild(this)), gi[u] = {
            width: this.width,
            height: this.height
          }, x.imgwidth = this.width, x.imgheight = this.height, x.element && g(x), this.parentNode && this.parentNode.removeChild(this), o.imgCount--, !o.imgCount && m && !m.hasLoaded && m.onload();
        },
        src: u
      }), this.imgCount++);
    }
    return d;
  }
  /**
   * Define a clipping rectangle. The clipping rectangle is later applied
   * to {@link SVGElement} objects through the {@link SVGElement#clip}
   * function.
   *
   * This function is deprecated as of v11.2. Instead, use a regular shape
   * (`rect`, `path` etc), and the `SVGElement.clipTo` function.
   *
   * @example
   * let circle = renderer.circle(100, 100, 100)
   *     .attr({ fill: 'red' })
   *     .add();
   * let clipRect = renderer.clipRect(100, 100, 100, 100);
   *
   * // Leave only the lower right quarter visible
   * circle.clip(clipRect);
   *
   * @deprecated
   *
   * @function Highcharts.SVGRenderer#clipRect
   *
   * @param {number} [x]
   *
   * @param {number} [y]
   *
   * @param {number} [width]
   *
   * @param {number} [height]
   *
   * @return {Highcharts.ClipRectElement}
   *         A clipping rectangle.
   */
  clipRect(t, e, i, s) {
    return this.rect(t, e, i, s, 0);
  }
  /**
   * Draw text. The text can contain a subset of HTML, like spans and anchors
   * and some basic text styling of these. For more advanced features like
   * border and background, use {@link Highcharts.SVGRenderer#label} instead.
   * To update the text after render, run `text.attr({ text: 'New text' })`.
   *
   * @sample highcharts/members/renderer-text-on-chart/
   *         Annotate the chart freely
   * @sample highcharts/members/renderer-on-chart/
   *         Annotate with a border and in response to the data
   * @sample highcharts/members/renderer-text/
   *         Formatted text
   *
   * @function Highcharts.SVGRenderer#text
   *
   * @param {string} [str]
   * The text of (subset) HTML to draw.
   *
   * @param {number} [x]
   * The x position of the text's lower left corner.
   *
   * @param {number} [y]
   * The y position of the text's lower left corner.
   *
   * @param {boolean} [useHTML=false]
   * Use HTML to render the text.
   *
   * @return {Highcharts.SVGElement}
   * The text object.
   */
  text(t, e, i, s) {
    const r = this, n = {};
    if (s && (r.allowHTML || !r.forExport))
      return r.html(t, e, i);
    n.x = Math.round(e || 0), i && (n.y = Math.round(i)), Mt(t) && (n.text = t);
    const o = r.createElement("text").attr(n);
    return (!s || r.forExport && !r.allowHTML) && (o.xSetter = function(a, l, h) {
      const f = h.getElementsByTagName("tspan"), d = h.getAttribute(l);
      for (let p = 0, u; p < f.length; p++)
        u = f[p], u.getAttribute(l) === d && u.setAttribute(l, a);
      h.setAttribute(l, a);
    }), o;
  }
  /**
   * Utility to return the baseline offset and total line height from the font
   * size.
   *
   * @function Highcharts.SVGRenderer#fontMetrics
   *
   * @param {Highcharts.SVGElement|Highcharts.SVGDOMElement|number} ref
   * The element to inspect for a current font size. If a number is given,
   * it's used as a fall back for direct font size in pixels.
   *
   * @return {Highcharts.FontMetricsObject}
   * The font metrics.
   */
  fontMetrics(t) {
    const e = kt(t) ? t : Fa(G.prototype.getStyle.call(t, "font-size") || 0), i = e < 24 ? e + 3 : Math.round(e * 1.2), s = Math.round(i * 0.8);
    return {
      // Line height
      h: i,
      // Baseline
      b: s,
      // Font size
      f: e
    };
  }
  /**
   * Correct X and Y positioning of a label for rotation (#1764).
   *
   * @private
   * @function Highcharts.SVGRenderer#rotCorr
   */
  rotCorr(t, e, i) {
    let s = t;
    return e && i && (s = Math.max(s * Math.cos(e * _s), 4)), {
      x: -t / 3 * Math.sin(e * _s),
      y: s
    };
  }
  /**
   * Compatibility function to convert the legacy one-dimensional path array
   * into an array of segments.
   *
   * It is used in maps to parse the `path` option, and in SVGRenderer.dSetter
   * to support legacy paths from demos.
   *
   * @private
   * @function Highcharts.SVGRenderer#pathToSegments
   */
  pathToSegments(t) {
    const e = [], i = [], s = {
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
    for (let r = 0; r < t.length; r++)
      Wa(i[0]) && kt(t[r]) && i.length === s[i[0].toUpperCase()] && t.splice(r, 0, i[0].replace("M", "L").replace("m", "l")), typeof t[r] == "string" && (i.length && e.push(i.slice(0)), i.length = 0), i.push(t[r]);
    return e.push(i.slice(0)), e;
  }
  /**
   * Draw a label, which is an extended text element with support for border
   * and background. Highcharts creates a `g` element with a text and a `path`
   * or `rect` inside, to make it behave somewhat like a HTML div. Border and
   * background are set through `stroke`, `stroke-width` and `fill` attributes
   * using the {@link Highcharts.SVGElement#attr|attr} method. To update the
   * text after render, run `label.attr({ text: 'New text' })`.
   *
   * @sample highcharts/members/renderer-label-on-chart/
   *         A label on the chart
   *
   * @function Highcharts.SVGRenderer#label
   *
   * @param {string} str
   *        The initial text string or (subset) HTML to render.
   *
   * @param {number} x
   *        The x position of the label's left side.
   *
   * @param {number} [y]
   *        The y position of the label's top side or baseline, depending on
   *        the `baseline` parameter.
   *
   * @param {string} [shape='rect']
   *        The shape of the label's border/background, if any. Defaults to
   *        `rect`. Other possible values are `callout` or other shapes
   *        defined in {@link Highcharts.SVGRenderer#symbols}.
   *
   * @param {number} [anchorX]
   *        In case the `shape` has a pointer, like a flag, this is the
   *        coordinates it should be pinned to.
   *
   * @param {number} [anchorY]
   *        In case the `shape` has a pointer, like a flag, this is the
   *        coordinates it should be pinned to.
   *
   * @param {boolean} [useHTML=false]
   *        Whether to use HTML to render the label.
   *
   * @param {boolean} [baseline=false]
   *        Whether to position the label relative to the text baseline,
   *        like {@link Highcharts.SVGRenderer#text|renderer.text}, or to the
   *        upper border of the rectangle.
   *
   * @param {string} [className]
   *        Class name for the group.
   *
   * @return {Highcharts.SVGElement}
   *         The generated label.
   */
  label(t, e, i, s, r, n, o, a, l) {
    return new Ot(this, t, e, i, s, r, n, o, a, l);
  }
  /**
   * Re-align all aligned elements.
   *
   * @private
   * @function Highcharts.SVGRenderer#alignElements
   */
  alignElements() {
    this.alignedObjects.forEach((t) => t.align());
  }
}
Tt(Ji.prototype, {
  /**
   * A pointer to the renderer's associated Element class.
   *
   * @name Highcharts.SVGRenderer#Element
   * @type {Highcharts.SVGElement}
   */
  Element: G,
  SVG_NS: Ba,
  /**
   * A collection of characters mapped to HTML entities. When `useHTML` on an
   * element is true, these entities will be rendered correctly by HTML. In
   * the SVG pseudo-HTML, they need to be unescaped back to simple characters,
   * so for example `&lt;` will render as `<`.
   *
   * @example
   * // Add support for unescaping quotes
   * Highcharts.SVGRenderer.prototype.escapes['"'] = '&quot;';
   *
   * @name Highcharts.SVGRenderer#escapes
   * @type {Highcharts.Dictionary<string>}
   */
  escapes: {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    // eslint-disable-line quotes
    '"': "&quot;"
  },
  /**
   * An extendable collection of functions for defining symbol paths.
   *
   * @name Highcharts.SVGRenderer#symbols
   * @type {Highcharts.SymbolDictionary}
   */
  symbols: Ma,
  /**
   * Dummy function for plugins, called every time the renderer is updated.
   * Prior to Highcharts 5, this was used for the canvg renderer.
   *
   * @deprecated
   * @function Highcharts.SVGRenderer#draw
   */
  draw: Ia
});
Lr.registerRendererType("svg", Ji, !0);
const { animate: vi, animObject: Ha, setAnimation: Si } = Et, { defaultOptions: wi } = Dt, { numberFormat: Ga } = de, { registerEventOptions: er } = Zi, { charts: At, doc: te, marginNames: ir, svg: Ya, win: sr } = N, { seriesTypes: Mi } = St, { addEvent: ki, attr: rr, createElement: Ai, css: ot, defined: xt, diffObjects: nr, discardElement: Va, erase: Ua, error: Ci, extend: bt, find: Ti, fireEvent: B, getAlignFactor: Ka, getStyle: Oi, isArray: qa, isNumber: Rt, isObject: Za, isString: De, merge: ht, objectEach: Li, pick: Q, pInt: _a, relativeLength: or, removeEvent: ar, splat: $e, syncTimeout: Ja, uniqueKey: Qa } = W;
class ft {
  /**
   * Factory function for basic charts.
   *
   * @example
   * // Render a chart in to div#container
   * let chart = Highcharts.chart('container', {
   *     title: {
   *         text: 'My chart'
   *     },
   *     series: [{
   *         data: [1, 3, 2, 4]
   *     }]
   * });
   *
   * @function Highcharts.chart
   *
   * @param {string|Highcharts.HTMLDOMElement} [renderTo]
   * The DOM element to render to, or its id.
   *
   * @param {Highcharts.Options} options
   * The chart options structure.
   *
   * @param {Highcharts.ChartCallbackFunction} [callback]
   * Function to run when the chart has loaded and all external images are
   * loaded. Defining a
   * [chart.events.load](https://api.highcharts.com/highcharts/chart.events.load)
   * handler is equivalent.
   *
   * @return {Highcharts.Chart}
   * Returns the Chart object.
   */
  static chart(t, e, i) {
    return new ft(t, e, i);
  }
  // Implementation
  constructor(t, e, i) {
    this.sharedClips = {};
    const s = [
      // ES5 builds fail unless we cast it to an Array
      ...arguments
    ];
    (De(t) || t.nodeName) && (this.renderTo = s.shift()), this.init(s[0], s[1]);
  }
  /* *
   *
   *  Functions
   *
   * */
  /**
   * Function setting zoom options after chart init and after chart update.
   * Offers support for deprecated options.
   *
   * @private
   * @function Highcharts.Chart#setZoomOptions
   */
  setZoomOptions() {
    const t = this, e = t.options.chart, i = e.zooming;
    t.zooming = {
      ...i,
      type: Q(e.zoomType, i.type),
      key: Q(e.zoomKey, i.key),
      pinchType: Q(e.pinchType, i.pinchType),
      singleTouch: Q(e.zoomBySingleTouch, i.singleTouch, !1),
      resetButton: ht(i.resetButton, e.resetZoomButton)
    };
  }
  /**
   * Overridable function that initializes the chart. The constructor's
   * arguments are passed on directly.
   *
   * @function Highcharts.Chart#init
   *
   * @param {Highcharts.Options} userOptions
   *        Custom options.
   *
   * @param {Function} [callback]
   *        Function to run when the chart has loaded and all external
   *        images are loaded.
   *
   *
   * @emits Highcharts.Chart#event:init
   * @emits Highcharts.Chart#event:afterInit
   */
  init(t, e) {
    B(this, "init", { args: arguments }, function() {
      const i = ht(wi, t), s = i.chart, r = this.renderTo || s.renderTo;
      this.userOptions = bt({}, t), (this.renderTo = De(r) ? te.getElementById(r) : r) || Ci(13, !0, this), this.margin = [], this.spacing = [], this.labelCollectors = [], this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.locale = i.lang.locale ?? this.renderTo.closest("[lang]")?.lang, this.time = new Ar(bt(i.time || {}, {
        locale: this.locale
      }), i.lang), i.time = this.time.options, this.numberFormatter = (s.numberFormatter || Ga).bind(this), this.styledMode = s.styledMode, this.hasCartesianSeries = s.showAxes;
      const n = this;
      n.index = At.length, At.push(n), N.chartCount++, er(this, s), n.xAxis = [], n.yAxis = [], n.pointCount = n.colorCounter = n.symbolCounter = 0, this.setZoomOptions(), B(n, "afterInit"), n.firstRender();
    });
  }
  /**
   * Internal function to unitialize an individual series.
   *
   * @private
   * @function Highcharts.Chart#initSeries
   */
  initSeries(t) {
    const e = this, i = e.options.chart, s = t.type || i.type, r = Mi[s];
    r || Ci(17, !0, e, { missingModuleFor: s });
    const n = new r();
    return typeof n.init == "function" && n.init(e, t), n;
  }
  /**
   * Internal function to set data for all series with enabled sorting.
   *
   * @private
   * @function Highcharts.Chart#setSortedData
   */
  setSortedData() {
    this.getSeriesOrderByLinks().forEach(function(t) {
      !t.points && !t.data && t.enabledDataSorting && t.setData(t.options.data, !1);
    });
  }
  /**
   * Sort and return chart series in order depending on the number of linked
   * series.
   *
   * @private
   * @function Highcharts.Series#getSeriesOrderByLinks
   */
  getSeriesOrderByLinks() {
    return this.series.concat().sort(function(t, e) {
      return t.linkedSeries.length || e.linkedSeries.length ? e.linkedSeries.length - t.linkedSeries.length : 0;
    });
  }
  /**
   * Order all series or axes above a given index. When series or axes are
   * added and ordered by configuration, only the last series is handled
   * (#248, #1123, #2456, #6112). This function is called on series and axis
   * initialization and destroy.
   *
   * @private
   * @function Highcharts.Chart#orderItems
   * @param {string} coll The collection name
   * @param {number} [fromIndex=0]
   * If this is given, only the series above this index are handled.
   */
  orderItems(t, e = 0) {
    const i = this[t], s = this.options[t] = $e(this.options[t]).slice(), r = this.userOptions[t] = this.userOptions[t] ? $e(this.userOptions[t]).slice() : [];
    if (this.hasRendered && (s.splice(e), r.splice(e)), i)
      for (let n = e, o = i.length; n < o; ++n) {
        const a = i[n];
        a && (a.index = n, a instanceof et && (a.name = a.getName()), a.options.isInternal || (s[n] = a.options, r[n] = a.userOptions));
      }
  }
  /**
   * Get the clipping for a series. Could be called for a series to initialate
   * animating the clip or to set the final clip (only width and x).
   *
   * @private
   * @function Highcharts.Chart#getClipBox
   */
  getClipBox(t, e) {
    const i = this.inverted, { xAxis: s, yAxis: r } = t || {};
    let { x: n, y: o, width: a, height: l } = ht(this.clipBox);
    return t && (s && s.len !== this.plotSizeX && (a = s.len), r && r.len !== this.plotSizeY && (l = r.len), i && !t.invertible && ([a, l] = [l, a])), e && (n += (i ? r : s)?.pos ?? this.plotLeft, o += (i ? s : r)?.pos ?? this.plotTop), { x: n, y: o, width: a, height: l };
  }
  /**
   * Check whether a given point is within the plot area.
   *
   * @function Highcharts.Chart#isInsidePlot
   *
   * @param {number} plotX
   * Pixel x relative to the plot area.
   *
   * @param {number} plotY
   * Pixel y relative to the plot area.
   *
   * @param {Highcharts.ChartIsInsideOptionsObject} [options]
   * Options object.
   *
   * @return {boolean}
   * Returns true if the given point is inside the plot area.
   */
  isInsidePlot(t, e, i = {}) {
    const { inverted: s, plotBox: r, plotLeft: n, plotTop: o, scrollablePlotBox: a } = this, { scrollLeft: l = 0, scrollTop: h = 0 } = i.visiblePlotOnly && this.scrollablePlotArea?.scrollingContainer || {}, f = i.series, d = i.visiblePlotOnly && a || r, p = i.inverted ? e : t, u = i.inverted ? t : e, g = {
      x: p,
      y: u,
      isInsidePlot: !0,
      options: i
    };
    if (!i.ignoreX) {
      const x = f && (s && !this.polar ? f.yAxis : f.xAxis) || {
        pos: n,
        len: 1 / 0
      }, m = i.paneCoordinates ? x.pos + p : n + p;
      m >= Math.max(l + n, x.pos) && m <= Math.min(l + n + d.width, x.pos + x.len) || (g.isInsidePlot = !1);
    }
    if (!i.ignoreY && g.isInsidePlot) {
      const x = !s && i.axis && !i.axis.isXAxis && i.axis || f && (s ? f.xAxis : f.yAxis) || {
        pos: o,
        len: 1 / 0
      }, m = i.paneCoordinates ? x.pos + u : o + u;
      m >= Math.max(h + o, x.pos) && m <= Math.min(h + o + d.height, x.pos + x.len) || (g.isInsidePlot = !1);
    }
    return B(this, "afterIsInsidePlot", g), g.isInsidePlot;
  }
  /**
   * Redraw the chart after changes have been done to the data, axis extremes
   * chart size or chart elements. All methods for updating axes, series or
   * points have a parameter for redrawing the chart. This is `true` by
   * default. But in many cases you want to do more than one operation on the
   * chart before redrawing, for example add a number of points. In those
   * cases it is a waste of resources to redraw the chart for each new point
   * added. So you add the points and call `chart.redraw()` after.
   *
   * @function Highcharts.Chart#redraw
   *
   * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
   * If or how to apply animation to the redraw. When `undefined`, it applies
   * the animation that is set in the `chart.animation` option.
   *
   * @emits Highcharts.Chart#event:afterSetExtremes
   * @emits Highcharts.Chart#event:beforeRedraw
   * @emits Highcharts.Chart#event:predraw
   * @emits Highcharts.Chart#event:redraw
   * @emits Highcharts.Chart#event:render
   * @emits Highcharts.Chart#event:updatedData
   */
  redraw(t) {
    B(this, "beforeRedraw");
    const e = this, i = e.hasCartesianSeries ? e.axes : e.colorAxis || [], s = e.series, r = e.pointer, n = e.legend, o = e.userOptions.legend, a = e.renderer, l = a.isHidden(), h = [];
    let f, d, p, u = e.isDirtyBox, g = e.isDirtyLegend, x;
    for (a.rootFontSize = a.boxWrapper.getStyle("font-size"), e.setResponsive && e.setResponsive(!1), Si(e.hasRendered ? t : !1, e), l && e.temporaryDisplay(), e.layOutTitles(!1), p = s.length; p--; )
      if (x = s[p], (x.options.stacking || x.options.centerInCategory) && (d = !0, x.isDirty)) {
        f = !0;
        break;
      }
    if (f)
      for (p = s.length; p--; )
        x = s[p], x.options.stacking && (x.isDirty = !0);
    s.forEach(function(m) {
      m.isDirty && (m.options.legendType === "point" ? (typeof m.updateTotals == "function" && m.updateTotals(), g = !0) : o && (o.labelFormatter || o.labelFormat) && (g = !0)), m.isDirtyData && B(m, "updatedData");
    }), g && n && n.options.enabled && (n.render(), e.isDirtyLegend = !1), d && e.getStacks(), i.forEach(function(m) {
      m.updateNames(), m.setScale();
    }), e.getMargins(), i.forEach(function(m) {
      m.isDirty && (u = !0);
    }), i.forEach(function(m) {
      const y = m.min + "," + m.max;
      m.extKey !== y && (m.extKey = y, h.push(function() {
        B(m, "afterSetExtremes", bt(m.eventArgs, m.getExtremes())), delete m.eventArgs;
      })), (u || d) && m.redraw();
    }), u && e.drawChartBox(), B(e, "predraw"), s.forEach(function(m) {
      (u || m.isDirty) && m.visible && m.redraw(), m.isDirtyData = !1;
    }), r && r.reset(!0), a.draw(), B(e, "redraw"), B(e, "render"), l && e.temporaryDisplay(!0), h.forEach(function(m) {
      m.call();
    });
  }
  /**
   * Get an axis, series or point object by `id` as given in the configuration
   * options. Returns `undefined` if no item is found.
   *
   * @sample highcharts/plotoptions/series-id/
   *         Get series by id
   *
   * @function Highcharts.Chart#get
   *
   * @param {string} id
   * The id as given in the configuration options.
   *
   * @return {Highcharts.Axis|Highcharts.Series|Highcharts.Point|undefined}
   * The retrieved item.
   */
  get(t) {
    const e = this.series;
    function i(r) {
      return r.id === t || r.options && r.options.id === t;
    }
    let s = (
      // Search axes
      Ti(this.axes, i) || // Search series
      Ti(this.series, i)
    );
    for (let r = 0; !s && r < e.length; r++)
      s = Ti(e[r].points || [], i);
    return s;
  }
  /**
   * Create the Axis instances based on the config options.
   *
   * @private
   * @function Highcharts.Chart#createAxes
   * @emits Highcharts.Chart#event:afterCreateAxes
   * @emits Highcharts.Chart#event:createAxes
   */
  createAxes() {
    const t = this.userOptions;
    B(this, "createAxes");
    for (const e of ["xAxis", "yAxis"]) {
      const i = t[e] = $e(t[e] || {});
      for (const s of i)
        new he(this, s, e);
    }
    B(this, "afterCreateAxes");
  }
  /**
   * Returns an array of all currently selected points in the chart. Points
   * can be selected by clicking or programmatically by the
   * {@link Highcharts.Point#select}
   * function.
   *
   * @sample highcharts/plotoptions/series-allowpointselect-line/
   *         Get selected points
   * @sample highcharts/members/point-select-lasso/
   *         Lasso selection
   * @sample highcharts/chart/events-selection-points/
   *         Rectangle selection
   *
   * @function Highcharts.Chart#getSelectedPoints
   *
   * @return {Array<Highcharts.Point>}
   *         The currently selected points.
   */
  getSelectedPoints() {
    return this.series.reduce((t, e) => (e.getPointsCollection().forEach((i) => {
      Q(i.selectedStaging, i.selected) && t.push(i);
    }), t), []);
  }
  /**
   * Returns an array of all currently selected series in the chart. Series
   * can be selected either programmatically by the
   * {@link Highcharts.Series#select}
   * function or by checking the checkbox next to the legend item if
   * [series.showCheckBox](https://api.highcharts.com/highcharts/plotOptions.series.showCheckbox)
   * is true.
   *
   * @sample highcharts/members/chart-getselectedseries/
   *         Get selected series
   *
   * @function Highcharts.Chart#getSelectedSeries
   *
   * @return {Array<Highcharts.Series>}
   *         The currently selected series.
   */
  getSelectedSeries() {
    return this.series.filter((t) => t.selected);
  }
  /**
   * Set a new title or subtitle for the chart.
   *
   * @sample highcharts/members/chart-settitle/
   *         Set title text and styles
   *
   * @function Highcharts.Chart#setTitle
   *
   * @param {Highcharts.TitleOptions} [titleOptions]
   *        New title options. The title text itself is set by the
   *        `titleOptions.text` property.
   *
   * @param {Highcharts.SubtitleOptions} [subtitleOptions]
   *        New subtitle options. The subtitle text itself is set by the
   *        `subtitleOptions.text` property.
   *
   * @param {boolean} [redraw]
   *        Whether to redraw the chart or wait for a later call to
   *        `chart.redraw()`.
   */
  setTitle(t, e, i) {
    this.applyDescription("title", t), this.applyDescription("subtitle", e), this.applyDescription("caption", void 0), this.layOutTitles(i);
  }
  /**
   * Apply a title, subtitle or caption for the chart
   *
   * @private
   * @function Highcharts.Chart#applyDescription
   * @param key {string}
   * Either title, subtitle or caption
   * @param {Highcharts.TitleOptions|Highcharts.SubtitleOptions|Highcharts.CaptionOptions|undefined} explicitOptions
   * The options to set, will be merged with default options.
   */
  applyDescription(t, e) {
    const i = this, s = this.options[t] = ht(this.options[t], e);
    let r = this[t];
    r && e && (this[t] = r = r.destroy()), s && !r && (r = this.renderer.text(s.text, 0, 0, s.useHTML).attr({
      align: s.align,
      class: "highcharts-" + t,
      zIndex: s.zIndex || 4
    }).css({
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }).add(), r.update = function(n, o) {
      i.applyDescription(t, n), i.layOutTitles(o);
    }, this.styledMode || r.css(bt(t === "title" ? {
      // #2944
      fontSize: this.options.isStock ? "1em" : "1.2em"
    } : {}, s.style)), r.textPxLength = r.getBBox().width, r.css({ whiteSpace: s.style?.whiteSpace }), this[t] = r);
  }
  /**
   * Internal function to lay out the chart title, subtitle and caption, and
   * cache the full offset height for use in `getMargins`. The result is
   * stored in `this.titleOffset`.
   *
   * @private
   * @function Highcharts.Chart#layOutTitles
   *
   * @param {boolean} [redraw=true]
   * @emits Highcharts.Chart#event:afterLayOutTitles
   */
  layOutTitles(t = !0) {
    const e = [0, 0, 0], { options: i, renderer: s, spacingBox: r } = this;
    ["title", "subtitle", "caption"].forEach((o) => {
      const a = this[o], l = this.options[o], h = ht(r), f = a?.textPxLength || 0;
      if (a && l) {
        B(this, "layOutTitle", { alignTo: h, key: o, textPxLength: f });
        const d = s.fontMetrics(a), p = d.b, u = d.h, g = l.verticalAlign || "top", x = g === "top", m = x && l.minScale || 1, y = o === "title" ? x ? -3 : 0 : (
          // Floating subtitle (#6574)
          x ? e[0] + 2 : 0
        ), b = Math.min(h.width / f, 1), v = Math.max(m, b), S = ht({
          y: g === "bottom" ? p : y + p
        }, {
          align: o === "title" ? (
            // Title defaults to center for short titles,
            // left for word-wrapped titles
            b < m ? "left" : "center"
          ) : (
            // Subtitle defaults to the title.align
            this.title?.alignValue
          )
        }, l), w = (l.width || (b > m ? (
          // One line
          this.chartWidth
        ) : (
          // Allow word wrap
          h.width
        )) / v) + "px";
        a.alignValue !== S.align && (a.placed = !1);
        const k = Math.round(a.css({ width: w }).getBBox(l.useHTML).height);
        if (S.height = k, a.align(S, !1, h).attr({
          align: S.align,
          scaleX: v,
          scaleY: v,
          "transform-origin": `${h.x + f * v * Ka(S.align)} ${u}`
        }), !l.floating) {
          const M = k * // When scaling down the title, preserve the offset as
          // long as it's only one line, but scale down the offset
          // if the title wraps to multiple lines.
          (k < u * 1.2 ? 1 : v);
          g === "top" ? e[0] = Math.ceil(e[0] + M) : g === "bottom" && (e[2] = Math.ceil(e[2] + M));
        }
      }
    }, this), e[0] && (i.title?.verticalAlign || "top") === "top" && (e[0] += i.title?.margin || 0), e[2] && i.caption?.verticalAlign === "bottom" && (e[2] += i.caption?.margin || 0);
    const n = !this.titleOffset || this.titleOffset.join(",") !== e.join(",");
    this.titleOffset = e, B(this, "afterLayOutTitles"), !this.isDirtyBox && n && (this.isDirtyBox = this.isDirtyLegend = n, this.hasRendered && t && this.isDirtyBox && this.redraw());
  }
  /**
   * Internal function to get the available size of the container element
   *
   * @private
   * @function Highcharts.Chart#getContainerBox
   */
  getContainerBox() {
    const t = [].map.call(this.renderTo.children, (i) => {
      if (i !== this.container) {
        const s = i.style.display;
        return i.style.display = "none", [i, s];
      }
    }), e = {
      width: Oi(this.renderTo, "width", !0) || 0,
      height: Oi(this.renderTo, "height", !0) || 0
    };
    return t.filter(Boolean).forEach(([i, s]) => {
      i.style.display = s;
    }), e;
  }
  /**
   * Internal function to get the chart width and height according to options
   * and container size. Sets {@link Chart.chartWidth} and
   * {@link Chart.chartHeight}.
   *
   * @private
   * @function Highcharts.Chart#getChartSize
   */
  getChartSize() {
    const t = this, e = t.options.chart, i = e.width, s = e.height, r = t.getContainerBox(), n = r.height <= 1 || // #21510, prevent infinite reflow
    !t.renderTo.parentElement?.style.height && t.renderTo.style.height === "100%";
    t.chartWidth = Math.max(
      // #1393
      0,
      i || r.width || 600
      // #1460
    ), t.chartHeight = Math.max(0, or(s, t.chartWidth) || (n ? 400 : r.height)), t.containerBox = r;
  }
  /**
   * If the renderTo element has no offsetWidth, most likely one or more of
   * its parents are hidden. Loop up the DOM tree to temporarily display the
   * parents, then save the original display properties, and when the true
   * size is retrieved, reset them. Used on first render and on redraws.
   *
   * @private
   * @function Highcharts.Chart#temporaryDisplay
   *
   * @param {boolean} [revert]
   * Revert to the saved original styles.
   */
  temporaryDisplay(t) {
    let e = this.renderTo, i;
    if (t)
      for (; e?.style; )
        e.hcOrigStyle && (ot(e, e.hcOrigStyle), delete e.hcOrigStyle), e.hcOrigDetached && (te.body.removeChild(e), e.hcOrigDetached = !1), e = e.parentNode;
    else
      for (; e?.style && (!te.body.contains(e) && !e.parentNode && (e.hcOrigDetached = !0, te.body.appendChild(e)), (Oi(e, "display", !1) === "none" || e.hcOricDetached) && (e.hcOrigStyle = {
        display: e.style.display,
        height: e.style.height,
        overflow: e.style.overflow
      }, i = {
        display: "block",
        overflow: "hidden"
      }, e !== this.renderTo && (i.height = 0), ot(e, i), e.offsetWidth || e.style.setProperty("display", "block", "important")), e = e.parentNode, e !== te.body); )
        ;
  }
  /**
   * Set the {@link Chart.container|chart container's} class name, in
   * addition to `highcharts-container`.
   *
   * @function Highcharts.Chart#setClassName
   *
   * @param {string} [className]
   * The additional class name.
   */
  setClassName(t) {
    this.container.className = "highcharts-container " + (t || "");
  }
  /**
   * Get the containing element, determine the size and create the inner
   * container div to hold the chart.
   *
   * @private
   * @function Highcharts.Chart#afterGetContainer
   * @emits Highcharts.Chart#event:afterGetContainer
   */
  getContainer() {
    const t = this, e = t.options, i = e.chart, s = "data-highcharts-chart", r = Qa(), n = t.renderTo;
    let o;
    const a = _a(rr(n, s));
    Rt(a) && At[a] && At[a].hasRendered && At[a].destroy(), rr(n, s, t.index), n.innerHTML = Y.emptyHTML, !i.skipClone && !n.offsetWidth && t.temporaryDisplay(), t.getChartSize();
    const l = t.chartHeight;
    let h = t.chartWidth;
    ot(n, { overflow: "hidden" }), t.styledMode || (o = bt({
      position: "relative",
      // Needed for context menu (avoidscrollbars) and content
      // overflow in IE
      overflow: "hidden",
      width: h + "px",
      height: l + "px",
      textAlign: "left",
      lineHeight: "normal",
      // #427
      zIndex: 0,
      // #1072
      "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
      userSelect: "none",
      // #13503
      "touch-action": "manipulation",
      outline: "none",
      padding: "0px"
    }, i.style || {}));
    const f = Ai("div", {
      id: r
    }, o, n);
    t.container = f, t.getChartSize(), h !== t.chartWidth && (h = t.chartWidth, t.styledMode || ot(f, {
      width: Q(i.style?.width, h + "px")
    })), t.containerBox = t.getContainerBox(), t._cursor = f.style.cursor;
    const d = i.renderer || !Ya ? Lr.getRendererType(i.renderer) : Ji;
    if (t.renderer = new d(f, h, l, void 0, i.forExport, e.exporting?.allowHTML, t.styledMode), Si(void 0, t), t.setClassName(i.className), !t.styledMode)
      t.renderer.setStyle(i.style);
    else
      for (const p in e.defs)
        this.renderer.definition(e.defs[p]);
    t.renderer.chartIndex = t.index, B(this, "afterGetContainer");
  }
  /**
   * Calculate margins by rendering axis labels in a preliminary position.
   * Title, subtitle and legend have already been rendered at this stage, but
   * will be moved into their final positions.
   *
   * @private
   * @function Highcharts.Chart#getMargins
   * @emits Highcharts.Chart#event:getMargins
   */
  getMargins(t) {
    const { spacing: e, margin: i, titleOffset: s } = this;
    this.resetMargins(), s[0] && !xt(i[0]) && (this.plotTop = Math.max(this.plotTop, s[0] + e[0])), s[2] && !xt(i[2]) && (this.marginBottom = Math.max(this.marginBottom, s[2] + e[2])), this.legend?.display && this.legend.adjustMargins(i, e), B(this, "getMargins"), t || this.getAxisMargins();
  }
  /**
   * @private
   * @function Highcharts.Chart#getAxisMargins
   */
  getAxisMargins() {
    const t = this, e = t.axisOffset = [0, 0, 0, 0], i = t.colorAxis, s = t.margin, r = (n) => {
      n.forEach((o) => {
        o.visible && o.getOffset();
      });
    };
    t.hasCartesianSeries ? r(t.axes) : i?.length && r(i), ir.forEach((n, o) => {
      xt(s[o]) || (t[n] += e[o]);
    }), t.setChartSize();
  }
  /**
   * Return the current options of the chart, but only those that differ from
   * default options. Items that can be either an object or an array of
   * objects, like `series`, `xAxis` and `yAxis`, are always returned as
   * array.
   *
   * @sample highcharts/members/chart-getoptions
   *
   * @function Highcharts.Chart#getOptions
   *
   * @since 11.1.0
   */
  getOptions() {
    return nr(this.userOptions, wi);
  }
  /**
   * Reflows the chart to its container. By default, the Resize Observer is
   * attached to the chart's div which allows to reflows the chart
   * automatically to its container, as per the
   * [chart.reflow](https://api.highcharts.com/highcharts/chart.reflow)
   * option.
   *
   * @sample highcharts/chart/events-container/
   *         Pop up and reflow
   *
   * @function Highcharts.Chart#reflow
   *
   * @param {global.Event} [e]
   *        Event arguments. Used primarily when the function is called
   *        internally as a response to window resize.
   */
  reflow(t) {
    const e = this, i = e.containerBox, s = e.getContainerBox();
    delete e.pointer?.chartPosition, !e.exporting?.isPrinting && !e.isResizing && i && // When fired by resize observer inside hidden container
    s.width && ((s.width !== i.width || s.height !== i.height) && (W.clearTimeout(e.reflowTimeout), e.reflowTimeout = Ja(function() {
      e.container && e.setSize(void 0, void 0, !1);
    }, t ? 100 : 0)), e.containerBox = s);
  }
  /**
   * Toggle the event handlers necessary for auto resizing, depending on the
   * `chart.reflow` option.
   *
   * @private
   * @function Highcharts.Chart#setReflow
   */
  setReflow() {
    const t = this, e = (i) => {
      t.options?.chart.reflow && t.hasLoaded && t.reflow(i);
    };
    if (typeof ResizeObserver == "function")
      new ResizeObserver(e).observe(t.renderTo);
    else {
      const i = ki(sr, "resize", e);
      ki(this, "destroy", i);
    }
  }
  /**
   * Resize the chart to a given width and height. In order to set the width
   * only, the height argument may be skipped. To set the height only, pass
   * `undefined` for the width.
   *
   * @sample highcharts/members/chart-setsize-button/
   *         Test resizing from buttons
   * @sample highcharts/members/chart-setsize-jquery-resizable/
   *         Add a jQuery UI resizable
   * @sample stock/members/chart-setsize/
   *         Highcharts Stock with UI resizable
   *
   * @function Highcharts.Chart#setSize
   *
   * @param {number|null} [width]
   *        The new pixel width of the chart. Since v4.2.6, the argument can
   *        be `undefined` in order to preserve the current value (when
   *        setting height only), or `null` to adapt to the width of the
   *        containing element.
   *
   * @param {number|null} [height]
   *        The new pixel height of the chart. Since v4.2.6, the argument can
   *        be `undefined` in order to preserve the current value, or `null`
   *        in order to adapt to the height of the containing element.
   *
   * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
   *        Whether and how to apply animation. When `undefined`, it applies
   *        the animation that is set in the `chart.animation` option.
   *
   *
   * @emits Highcharts.Chart#event:endResize
   * @emits Highcharts.Chart#event:resize
   */
  setSize(t, e, i) {
    const s = this, r = s.renderer;
    s.isResizing += 1, Si(i, s);
    const n = r.globalAnimation;
    s.oldChartHeight = s.chartHeight, s.oldChartWidth = s.chartWidth, typeof t < "u" && (s.options.chart.width = t), typeof e < "u" && (s.options.chart.height = e), s.getChartSize();
    const { chartWidth: o, chartHeight: a, scrollablePixelsX: l = 0, scrollablePixelsY: h = 0 } = s;
    (s.isDirtyBox || o !== s.oldChartWidth || a !== s.oldChartHeight) && (s.styledMode || (n ? vi : ot)(s.container, {
      width: `${o + l}px`,
      height: `${a + h}px`
    }, n), s.setChartSize(!0), r.setSize(o, a, n), s.axes.forEach(function(f) {
      f.isDirty = !0, f.setScale();
    }), s.isDirtyLegend = !0, s.isDirtyBox = !0, s.layOutTitles(), s.getMargins(), s.redraw(n), s.oldChartHeight = void 0, B(s, "resize"), setTimeout(() => {
      s && B(s, "endResize");
    }, Ha(n).duration)), s.isResizing -= 1;
  }
  /**
   * Set the public chart properties. This is done before and after the
   * pre-render to determine margin sizes.
   *
   * @private
   * @function Highcharts.Chart#setChartSize
   * @emits Highcharts.Chart#event:afterSetChartSize
   */
  setChartSize(t) {
    const e = this, { chartHeight: i, chartWidth: s, inverted: r, spacing: n, renderer: o } = e, a = e.clipOffset, l = Math[r ? "floor" : "round"];
    let h, f, d, p;
    e.plotLeft = h = Math.round(e.plotLeft), e.plotTop = f = Math.round(e.plotTop), e.plotWidth = d = Math.max(0, Math.round(s - h - (e.marginRight ?? 0))), e.plotHeight = p = Math.max(0, Math.round(i - f - (e.marginBottom ?? 0))), e.plotSizeX = r ? p : d, e.plotSizeY = r ? d : p, e.spacingBox = o.spacingBox = {
      x: n[3],
      y: n[0],
      width: s - n[3] - n[1],
      height: i - n[0] - n[2]
    }, e.plotBox = o.plotBox = {
      x: h,
      y: f,
      width: d,
      height: p
    }, a && (e.clipBox = {
      x: l(a[3]),
      y: l(a[0]),
      width: l(e.plotSizeX - a[1] - a[3]),
      height: l(e.plotSizeY - a[0] - a[2])
    }), t || (e.axes.forEach(function(u) {
      u.setAxisSize(), u.setAxisTranslation();
    }), o.alignElements()), B(e, "afterSetChartSize", { skipAxes: t });
  }
  /**
   * Initial margins before auto size margins are applied.
   *
   * @private
   * @function Highcharts.Chart#resetMargins
   */
  resetMargins() {
    B(this, "resetMargins");
    const t = this, e = t.options.chart, i = e.plotBorderWidth || 0, s = Math.round(i) / 2;
    ["margin", "spacing"].forEach((r) => {
      const n = e[r], o = Za(n) ? n : [n, n, n, n];
      [
        "Top",
        "Right",
        "Bottom",
        "Left"
      ].forEach((a, l) => {
        t[r][l] = e[`${r}${a}`] ?? o[l];
      });
    }), ir.forEach((r, n) => {
      t[r] = t.margin[n] ?? t.spacing[n];
    }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [
      s,
      s,
      s,
      s
    ], t.plotBorderWidth = i;
  }
  /**
   * Internal function to draw or redraw the borders and backgrounds for chart
   * and plot area.
   *
   * @private
   * @function Highcharts.Chart#drawChartBox
   * @emits Highcharts.Chart#event:afterDrawChartBox
   */
  drawChartBox() {
    const t = this, e = t.options.chart, i = t.renderer, s = t.chartWidth, r = t.chartHeight, n = t.styledMode, o = t.plotBGImage, a = e.backgroundColor, l = e.plotBackgroundColor, h = e.plotBackgroundImage, f = t.plotLeft, d = t.plotTop, p = t.plotWidth, u = t.plotHeight, g = t.plotBox, x = t.clipRect, m = t.clipBox;
    let y = t.chartBackground, b = t.plotBackground, v = t.plotBorder, S, w, k, M = "animate";
    y || (t.chartBackground = y = i.rect().addClass("highcharts-background").add(), M = "attr"), n ? S = w = y.strokeWidth() : (S = e.borderWidth || 0, w = S + (e.shadow ? 8 : 0), k = {
      fill: a || "none"
    }, (S || y["stroke-width"]) && (k.stroke = e.borderColor, k["stroke-width"] = S), y.attr(k).shadow(e.shadow)), y[M]({
      x: w / 2,
      y: w / 2,
      width: s - w - S % 2,
      height: r - w - S % 2,
      r: e.borderRadius
    }), M = "animate", b || (M = "attr", t.plotBackground = b = i.rect().addClass("highcharts-plot-background").add()), b[M](g), n || (b.attr({
      fill: l || "none"
    }).shadow(e.plotShadow), h && (o ? (h !== o.attr("href") && o.attr("href", h), o.animate(g)) : t.plotBGImage = i.image(h, f, d, p, u).add())), x ? x.animate({
      width: m.width,
      height: m.height
    }) : t.clipRect = i.clipRect(m), M = "animate", v || (M = "attr", t.plotBorder = v = i.rect().addClass("highcharts-plot-border").attr({
      zIndex: 1
      // Above the grid
    }).add()), n || v.attr({
      stroke: e.plotBorderColor,
      "stroke-width": e.plotBorderWidth || 0,
      fill: "none"
    }), v[M](v.crisp(
      g,
      // #3282 plotBorder should be negative
      -v.strokeWidth()
    )), t.isDirtyBox = !1, B(this, "afterDrawChartBox");
  }
  /**
   * Detect whether a certain chart property is needed based on inspecting its
   * options and series. This mainly applies to the chart.inverted property,
   * and in extensions to the chart.angular and chart.polar properties.
   *
   * @private
   * @function Highcharts.Chart#propFromSeries
   */
  propFromSeries() {
    const t = this, e = t.options.chart, i = t.options.series;
    let s, r, n;
    ["inverted", "angular", "polar"].forEach(function(o) {
      for (r = Mi[e.type], n = // It is set in the options:
      e[o] || // The default series class:
      r && r.prototype[o], s = i?.length; !n && s--; )
        r = Mi[i[s].type], r && r.prototype[o] && (n = !0);
      t[o] = n;
    });
  }
  /**
   * Internal function to link two or more series together, based on the
   * `linkedTo` option. This is done from `Chart.render`, and after
   * `Chart.addSeries` and `Series.remove`.
   *
   * @private
   * @function Highcharts.Chart#linkSeries
   * @emits Highcharts.Chart#event:afterLinkSeries
   */
  linkSeries(t) {
    const e = this, i = e.series;
    i.forEach(function(s) {
      s.linkedSeries.length = 0;
    }), i.forEach(function(s) {
      const { linkedTo: r } = s.options;
      if (De(r)) {
        let n;
        r === ":previous" ? n = e.series[s.index - 1] : n = e.get(r), n && n.linkedParent !== s && (n.linkedSeries.push(s), s.linkedParent = n, n.enabledDataSorting && s.setDataSortingOptions(), s.visible = Q(s.options.visible, n.options.visible, s.visible));
      }
    }), B(this, "afterLinkSeries", { isUpdating: t });
  }
  /**
   * Render series for the chart.
   *
   * @private
   * @function Highcharts.Chart#renderSeries
   */
  renderSeries() {
    this.series.forEach(function(t) {
      t.translate(), t.render();
    });
  }
  /**
   * Render all graphics for the chart. Runs internally on initialization.
   *
   * @private
   * @function Highcharts.Chart#render
   */
  render() {
    const t = this, e = t.axes, i = t.colorAxis, s = t.renderer, r = t.options.chart.axisLayoutRuns || 2, n = (f) => {
      f.forEach((d) => {
        d.visible && d.render();
      });
    };
    let o = 0, a = !0, l, h = 0;
    t.setTitle(), B(t, "beforeMargins"), t.getStacks?.(), t.getMargins(!0), t.setChartSize();
    for (const f of e) {
      const { options: d } = f, { labels: p } = d;
      if (t.hasCartesianSeries && // #20948
      f.horiz && f.visible && p.enabled && f.series.length && f.coll !== "colorAxis" && !t.polar) {
        o = d.tickLength, f.createGroups();
        const u = new oe(f, 0, "", !0), g = u.createLabel("x", p);
        if (u.destroy(), g && Q(p.reserveSpace, !Rt(d.crossing)) && (o = g.getBBox().height + p.distance + Math.max(d.offset || 0, 0)), o) {
          g?.destroy();
          break;
        }
      }
    }
    for (t.plotHeight = Math.max(t.plotHeight - o, 0); (a || l || r > 1) && h < r; ) {
      const f = t.plotWidth, d = t.plotHeight;
      for (const p of e)
        h === 0 ? p.setScale() : (p.horiz && a || !p.horiz && l) && p.setTickInterval(!0);
      h === 0 ? t.getAxisMargins() : t.getMargins(), a = f / t.plotWidth > (h ? 1 : 1.1), l = d / t.plotHeight > (h ? 1 : 1.05), h++;
    }
    t.drawChartBox(), t.hasCartesianSeries ? n(e) : i?.length && n(i), t.seriesGroup || (t.seriesGroup = s.g("series-group").attr({ zIndex: 3 }).shadow(t.options.chart.seriesGroupShadow).add()), t.dataLabelsGroup || (t.dataLabelsGroup = s.g("datalabels-group").attr({ zIndex: 6 }).add()), t.renderSeries(), t.addCredits(), t.setResponsive && t.setResponsive(), t.hasRendered = !0;
  }
  /**
   * Set a new credits label for the chart.
   *
   * @sample highcharts/credits/credits-update/
   *         Add and update credits
   *
   * @function Highcharts.Chart#addCredits
   *
   * @param {Highcharts.CreditsOptions} [credits]
   * A configuration object for the new credits.
   */
  addCredits(t) {
    const e = this, i = ht(!0, this.options.credits, t);
    i.enabled && !this.credits && (this.credits = this.renderer.text(i.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
      i.href && (sr.location.href = i.href);
    }).attr({
      align: i.position.align,
      zIndex: 8
    }), e.styledMode || this.credits.css(i.style), this.credits.add().align(i.position), this.credits.update = function(s) {
      e.credits = e.credits.destroy(), e.addCredits(s);
    });
  }
  /**
   * Remove the chart and purge memory. This method is called internally
   * before adding a second chart into the same container, as well as on
   * window unload to prevent leaks.
   *
   * @sample highcharts/members/chart-destroy/
   *         Destroy the chart from a button
   * @sample stock/members/chart-destroy/
   *         Destroy with Highcharts Stock
   *
   * @function Highcharts.Chart#destroy
   *
   * @emits Highcharts.Chart#event:destroy
   */
  destroy() {
    const t = this, e = t.axes, i = t.series, s = t.container, r = s?.parentNode;
    let n;
    for (B(t, "destroy"), t.renderer.forExport ? Ua(At, t) : At[t.index] = void 0, N.chartCount--, t.renderTo.removeAttribute("data-highcharts-chart"), ar(t), n = e.length; n--; )
      e[n] = e[n].destroy();
    for (this.scroller?.destroy?.(), n = i.length; n--; )
      i[n] = i[n].destroy();
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
    ].forEach((o) => {
      t[o] = t[o]?.destroy?.();
    }), s && (s.innerHTML = Y.emptyHTML, ar(s), r && Va(s)), Li(t, function(o, a) {
      delete t[a];
    });
  }
  /**
   * Prepare for first rendering after all data are loaded.
   *
   * @private
   * @function Highcharts.Chart#firstRender
   * @emits Highcharts.Chart#event:beforeRender
   */
  firstRender() {
    const t = this, e = t.options;
    t.getContainer(), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.createAxes();
    const i = qa(e.series) ? e.series : [];
    e.series = [], i.forEach(
      // #9680
      function(s) {
        t.initSeries(s);
      }
    ), t.linkSeries(), t.setSortedData(), B(t, "beforeRender"), t.render(), t.pointer?.getChartPosition(), !t.renderer.imgCount && !t.hasLoaded && t.onload(), t.temporaryDisplay(!0);
  }
  /**
   * Internal function that runs on chart load, async if any images are loaded
   * in the chart. Runs the callbacks and triggers the `load` and `render`
   * events.
   *
   * @private
   * @function Highcharts.Chart#onload
   * @emits Highcharts.Chart#event:load
   * @emits Highcharts.Chart#event:render
   */
  onload() {
    this.callbacks.concat([this.callback]).forEach(function(t) {
      t && typeof this.index < "u" && t.apply(this, [this]);
    }, this), B(this, "load"), B(this, "render"), xt(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = !0;
  }
  /**
   * Emit console warning if the a11y module is not loaded.
   * @private
   */
  warnIfA11yModuleNotLoaded() {
    const { options: t, title: e } = this;
    t && !this.accessibility && (this.renderer.boxWrapper.attr({
      role: "img",
      "aria-label": (e?.element.textContent || "").replace(/</g, "&lt;")
    }), t.accessibility && t.accessibility.enabled === !1 || Ci('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', !1, this));
  }
  /**
   * Add a series to the chart after render time. Note that this method should
   * never be used when adding data synchronously at chart render time, as it
   * adds expense to the calculations and rendering. When adding data at the
   * same time as the chart is initialized, add the series as a configuration
   * option instead. With multiple axes, the `offset` is dynamically adjusted.
   *
   * @sample highcharts/members/chart-addseries/
   *         Add a series from a button
   * @sample stock/members/chart-addseries/
   *         Add a series in Highcharts Stock
   *
   * @function Highcharts.Chart#addSeries
   *
   * @param {Highcharts.SeriesOptionsType} options
   *        The config options for the series.
   *
   * @param {boolean} [redraw=true]
   *        Whether to redraw the chart after adding.
   *
   * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
   *        Whether to apply animation, and optionally animation
   *        configuration. When `undefined`, it applies the animation that is
   *        set in the `chart.animation` option.
   *
   * @return {Highcharts.Series}
   *         The newly created series object.
   *
   * @emits Highcharts.Chart#event:addSeries
   * @emits Highcharts.Chart#event:afterAddSeries
   */
  addSeries(t, e, i) {
    const s = this;
    let r;
    return t && (e = Q(e, !0), B(s, "addSeries", { options: t }, function() {
      r = s.initSeries(t), s.isDirtyLegend = !0, s.linkSeries(), r.enabledDataSorting && r.setData(t.data, !1), B(s, "afterAddSeries", { series: r }), e && s.redraw(i);
    })), r;
  }
  /**
   * Add an axis to the chart after render time. Note that this method should
   * never be used when adding data synchronously at chart render time, as it
   * adds expense to the calculations and rendering. When adding data at the
   * same time as the chart is initialized, add the axis as a configuration
   * option instead.
   *
   * @sample highcharts/members/chart-addaxis/
   *         Add and remove axes
   *
   * @function Highcharts.Chart#addAxis
   *
   * @param {Highcharts.AxisOptions} options
   *        The axis options.
   *
   * @param {boolean} [isX=false]
   *        Whether it is an X axis or a value axis.
   *
   * @param {boolean} [redraw=true]
   *        Whether to redraw the chart after adding.
   *
   * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
   *        Whether and how to apply animation in the redraw. When
   *        `undefined`, it applies the animation that is set in the
   *        `chart.animation` option.
   *
   * @return {Highcharts.Axis}
   *         The newly generated Axis object.
   */
  addAxis(t, e, i, s) {
    return this.createAxis(e ? "xAxis" : "yAxis", { axis: t, redraw: i, animation: s });
  }
  /**
   * Add a color axis to the chart after render time. Note that this method
   * should never be used when adding data synchronously at chart render time,
   * as it adds expense to the calculations and rendering. When adding data at
   * the same time as the chart is initialized, add the axis as a
   * configuration option instead.
   *
   * @sample highcharts/members/chart-addaxis/
   *         Add and remove axes
   *
   * @function Highcharts.Chart#addColorAxis
   *
   * @param {Highcharts.ColorAxisOptions} options
   *        The axis options.
   *
   * @param {boolean} [redraw=true]
   *        Whether to redraw the chart after adding.
   *
   * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
   *        Whether and how to apply animation in the redraw. When
   *        `undefined`, it applies the animation that is set in the
   *        `chart.animation` option.
   *
   * @return {Highcharts.Axis}
   *         The newly generated Axis object.
   */
  addColorAxis(t, e, i) {
    return this.createAxis("colorAxis", { axis: t, redraw: e, animation: i });
  }
  /**
   * Factory for creating different axis types.
   *
   * @private
   * @function Highcharts.Chart#createAxis
   *
   * @param {string} coll
   *        An axis type.
   *
   * @param {...Array<*>} arguments
   *        All arguments for the constructor.
   *
   * @return {Highcharts.Axis}
   *         The newly generated Axis object.
   */
  createAxis(t, e) {
    const i = new he(this, e.axis, t);
    return Q(e.redraw, !0) && this.redraw(e.animation), i;
  }
  /**
   * Dim the chart and show a loading text or symbol. Options for the loading
   * screen are defined in {@link
   * https://api.highcharts.com/highcharts/loading|the loading options}.
   *
   * @sample highcharts/members/chart-hideloading/
   *         Show and hide loading from a button
   * @sample highcharts/members/chart-showloading/
   *         Apply different text labels
   * @sample stock/members/chart-show-hide-loading/
   *         Toggle loading in Highcharts Stock
   *
   * @function Highcharts.Chart#showLoading
   *
   * @param {string} [str]
   *        An optional text to show in the loading label instead of the
   *        default one. The default text is set in
   *        [lang.loading](https://api.highcharts.com/highcharts/lang.loading).
   */
  showLoading(t) {
    const e = this, i = e.options, s = i.loading, r = function() {
      n && ot(n, {
        left: e.plotLeft + "px",
        top: e.plotTop + "px",
        width: e.plotWidth + "px",
        height: e.plotHeight + "px"
      });
    };
    let n = e.loadingDiv, o = e.loadingSpan;
    n || (e.loadingDiv = n = Ai("div", {
      className: "highcharts-loading highcharts-loading-hidden"
    }, null, e.container)), o || (e.loadingSpan = o = Ai("span", { className: "highcharts-loading-inner" }, null, n), ki(e, "redraw", r)), n.className = "highcharts-loading", Y.setElementHTML(o, Q(t, i.lang.loading, "")), e.styledMode || (ot(n, bt(s.style, {
      zIndex: 10
    })), ot(o, s.labelStyle), e.loadingShown || (ot(n, {
      opacity: 0,
      display: ""
    }), vi(n, {
      opacity: s.style.opacity || 0.5
    }, {
      duration: s.showDuration || 0
    }))), e.loadingShown = !0, r();
  }
  /**
   * Hide the loading layer.
   *
   * @see Highcharts.Chart#showLoading
   *
   * @sample highcharts/members/chart-hideloading/
   *         Show and hide loading from a button
   * @sample stock/members/chart-show-hide-loading/
   *         Toggle loading in Highcharts Stock
   *
   * @function Highcharts.Chart#hideLoading
   */
  hideLoading() {
    const t = this.options, e = this.loadingDiv;
    e && (e.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || vi(e, {
      opacity: 0
    }, {
      duration: t.loading.hideDuration || 100,
      complete: function() {
        ot(e, { display: "none" });
      }
    })), this.loadingShown = !1;
  }
  /**
   * A generic function to update any element of the chart. Elements can be
   * enabled and disabled, moved, re-styled, re-formatted etc.
   *
   * A special case is configuration objects that take arrays, for example
   * [xAxis](https://api.highcharts.com/highcharts/xAxis),
   * [yAxis](https://api.highcharts.com/highcharts/yAxis) or
   * [series](https://api.highcharts.com/highcharts/series). For these
   * collections, an `id` option is used to map the new option set to an
   * existing object. If an existing object of the same id is not found, the
   * corresponding item is updated. So for example, running `chart.update`
   * with a series item without an id, will cause the existing chart's series
   * with the same index in the series array to be updated. When the
   * `oneToOne` parameter is true, `chart.update` will also take care of
   * adding and removing items from the collection. Read more under the
   * parameter description below.
   *
   * Note that when changing series data, `chart.update` may mutate the passed
   * data options.
   *
   * See also the
   * [responsive option set](https://api.highcharts.com/highcharts/responsive).
   * Switching between `responsive.rules` basically runs `chart.update` under
   * the hood.
   *
   * @sample highcharts/members/chart-update/
   *         Update chart geometry
   *
   * @function Highcharts.Chart#update
   *
   * @param {Highcharts.Options} options
   *        A configuration object for the new chart options.
   *
   * @param {boolean} [redraw=true]
   *        Whether to redraw the chart.
   *
   * @param {boolean} [oneToOne=false]
   *        When `true`, the `series`, `xAxis`, `yAxis` and `annotations`
   *        collections will be updated one to one, and items will be either
   *        added or removed to match the new updated options. For example,
   *        if the chart has two series and we call `chart.update` with a
   *        configuration containing three series, one will be added. If we
   *        call `chart.update` with one series, one will be removed. Setting
   *        an empty `series` array will remove all series, but leaving out
   *        the`series` property will leave all series untouched. If the
   *        series have id's, the new series options will be matched by id,
   *        and the remaining ones removed.
   *
   * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
   *        Whether to apply animation, and optionally animation
   *        configuration. When `undefined`, it applies the animation that is
   *        set in the `chart.animation` option.
   *
   * @emits Highcharts.Chart#event:update
   * @emits Highcharts.Chart#event:afterUpdate
   */
  update(t, e, i, s) {
    const r = this, n = {
      credits: "addCredits",
      title: "setTitle",
      subtitle: "setSubtitle",
      caption: "setCaption"
    }, o = t.isResponsiveOptions, a = [];
    let l, h, f;
    B(r, "update", { options: t }), o || r.setResponsive(!1, !0), t = nr(t, r.options), r.userOptions = ht(r.userOptions, t);
    const d = t.chart;
    d && (ht(!0, r.options.chart, d), this.setZoomOptions(), "className" in d && r.setClassName(d.className), ("inverted" in d || "polar" in d || "type" in d) && (r.propFromSeries(), l = !0), "alignTicks" in d && (l = !0), "events" in d && er(this, d), Li(d, function(g, x) {
      r.propsRequireUpdateSeries.indexOf("chart." + x) !== -1 && (h = !0), r.propsRequireDirtyBox.indexOf(x) !== -1 && (r.isDirtyBox = !0), r.propsRequireReflow.indexOf(x) !== -1 && (r.isDirtyBox = !0, o || (f = !0));
    }), !r.styledMode && d.style && r.renderer.setStyle(r.options.chart.style || {})), !r.styledMode && t.colors && (this.options.colors = t.colors), Li(t, function(g, x) {
      r[x] && typeof r[x].update == "function" ? r[x].update(g, !1) : typeof r[n[x]] == "function" ? r[n[x]](g) : x !== "colors" && r.collectionsWithUpdate.indexOf(x) === -1 && ht(!0, r.options[x], t[x]), x !== "chart" && r.propsRequireUpdateSeries.indexOf(x) !== -1 && (h = !0);
    }), this.collectionsWithUpdate.forEach(function(g) {
      t[g] && ($e(t[g]).forEach(function(x, m) {
        const y = xt(x.id);
        let b;
        y && (b = r.get(x.id)), !b && r[g] && (b = r[g][Q(x.index, m)], b && (y && xt(b.options.id) || b.options.isInternal) && (b = void 0)), b && b.coll === g && (b.update(x, !1), i && (b.touched = !0)), !b && i && r.collectionsWithInit[g] && (r.collectionsWithInit[g][0].apply(
          r,
          // [newOptions, ...extraArguments, redraw=false]
          [
            x
          ].concat(
            // Not all initializers require extra args
            r.collectionsWithInit[g][1] || []
          ).concat([
            !1
          ])
        ).touched = !0);
      }), i && r[g].forEach(function(x) {
        !x.touched && !x.options.isInternal ? a.push(x) : delete x.touched;
      }));
    }), a.forEach(function(g) {
      g.chart && g.remove && g.remove(!1);
    }), l && r.axes.forEach(function(g) {
      g.update({}, !1);
    }), h && r.getSeriesOrderByLinks().forEach(function(g) {
      g.chart && g.update({}, !1);
    }, this);
    const p = d?.width, u = d && (De(d.height) ? or(d.height, p || r.chartWidth) : d.height);
    // In this case, run chart.setSize with newWidth and newHeight which
    // are undefined, only for reflowing chart elements because margin
    // or spacing has been set (#8190)
    f || // In this case, the size is actually set
    Rt(p) && p !== r.chartWidth || Rt(u) && u !== r.chartHeight ? r.setSize(p, u, s) : Q(e, !0) && r.redraw(s), B(r, "afterUpdate", {
      options: t,
      redraw: e,
      animation: s
    });
  }
  /**
   * Shortcut to set the subtitle options. This can also be done from {@link
   * Chart#update} or {@link Chart#setTitle}.
   *
   * @function Highcharts.Chart#setSubtitle
   *
   * @param {Highcharts.SubtitleOptions} options
   *        New subtitle options. The subtitle text itself is set by the
   *        `options.text` property.
   */
  setSubtitle(t, e) {
    this.applyDescription("subtitle", t), this.layOutTitles(e);
  }
  /**
   * Set the caption options. This can also be done from {@link
   * Chart#update}.
   *
   * @function Highcharts.Chart#setCaption
   *
   * @param {Highcharts.CaptionOptions} options
   *        New caption options. The caption text itself is set by the
   *        `options.text` property.
   */
  setCaption(t, e) {
    this.applyDescription("caption", t), this.layOutTitles(e);
  }
  /**
   * Display the zoom button, so users can reset zoom to the default view
   * settings.
   *
   * @function Highcharts.Chart#showResetZoom
   *
   * @emits Highcharts.Chart#event:afterShowResetZoom
   * @emits Highcharts.Chart#event:beforeShowResetZoom
   */
  showResetZoom() {
    const t = this, e = wi.lang, i = t.zooming.resetButton, s = i.theme, r = i.relativeTo === "chart" || i.relativeTo === "spacingBox" ? null : "plotBox";
    function n() {
      t.zoomOut();
    }
    B(this, "beforeShowResetZoom", null, function() {
      t.resetZoomButton = t.renderer.button(e.resetZoom, null, null, n, s).attr({
        align: i.position.align,
        title: e.resetZoomTitle
      }).addClass("highcharts-reset-zoom").add().align(i.position, !1, r);
    }), B(this, "afterShowResetZoom");
  }
  /**
   * Zoom the chart out after a user has zoomed in. See also
   * [Axis.setExtremes](/class-reference/Highcharts.Axis#setExtremes).
   *
   * @function Highcharts.Chart#zoomOut
   *
   * @emits Highcharts.Chart#event:selection
   */
  zoomOut() {
    B(this, "selection", { resetSelection: !0 }, () => this.transform({ reset: !0, trigger: "zoom" }));
  }
  /**
   * Pan the chart by dragging the mouse across the pane. This function is
   * called on mouse move, and the distance to pan is computed from chartX
   * compared to the first chartX position in the dragging operation.
   *
   * @private
   * @function Highcharts.Chart#pan
   * @param {Highcharts.PointerEventObject} event
   * @param {string} panning
   */
  pan(t, e) {
    const i = this, s = typeof e == "object" ? e : {
      enabled: e,
      type: "x"
    }, r = s.type, n = r && i[{
      x: "xAxis",
      xy: "axes",
      y: "yAxis"
    }[r]].filter((a) => a.options.panningEnabled && !a.options.isInternal), o = i.options.chart;
    o?.panning && (o.panning = s), B(this, "pan", { originalEvent: t }, () => {
      i.transform({
        axes: n,
        event: t,
        to: {
          x: t.chartX - (i.mouseDownX || 0),
          y: t.chartY - (i.mouseDownY || 0)
        },
        trigger: "pan"
      }), ot(i.container, { cursor: "move" });
    });
  }
  /**
   * Pan and scale the chart. Used internally by mouse-pan, touch-pan,
   * touch-zoom, and mousewheel zoom.
   *
   * The main positioning logic is created around two imaginary boxes. What is
   * currently within the `from` rectangle, should be transformed to fill up
   * the `to` rectangle.
   * - In a mouse zoom, the `from` rectangle is the selection, while the `to`
   *   rectangle is the full plot area.
   * - In a touch zoom, the `from` rectangle is made up of the last two-finger
   *   touch, while the `to`` rectangle is the current touch.
   * - In a mousewheel zoom, the `to` rectangle is a 10x10 px square,
   *   while the `to` rectangle reflects the scale around that.
   *
   * @private
   * @function Highcharts.Chart#transform
   */
  transform(t) {
    const { axes: e = this.axes, event: i, from: s = {}, reset: r, selection: n, to: o = {}, trigger: a } = t, { inverted: l, time: h } = this;
    this.hoverPoints?.forEach((u) => u.setState()), B(this, "transform", t);
    let f = t.hasZoomed || !1, d, p;
    for (const u of e) {
      const { horiz: g, len: x, minPointOffset: m = 0, options: y, reversed: b } = u, v = g ? "width" : "height", S = g ? "x" : "y", w = Q(o[v], u.len), k = Q(s[v], u.len), M = Math.abs(w) < 10 ? 1 : w / k, C = (s[S] || 0) + k / 2 - u.pos, A = (o[S] ?? u.pos) + w / 2 - u.pos, T = C - A / M, E = b && !l || !b && l ? -1 : 1, L = T;
      if (!r && (C < 0 || C > u.len))
        continue;
      const O = u.chart.polar || u.isOrdinal ? 0 : m * E || 0, D = u.toValue(L, !0), I = u.toValue(L + x / M, !0);
      let R = D + O, K = I - O, _ = u.allExtremes;
      if (n && n[u.coll].push({
        axis: u,
        min: Math.min(D, I),
        max: Math.max(D, I)
      }), R > K && ([R, K] = [K, R]), M === 1 && !r && u.coll === "yAxis" && !_) {
        for (const es of u.series) {
          const me = es.getExtremes(es.getProcessedData(!0).modified.getColumn("y") || [], !0);
          _ ?? (_ = {
            dataMin: Number.MAX_VALUE,
            dataMax: -Number.MAX_VALUE
          }), Rt(me.dataMin) && Rt(me.dataMax) && (_.dataMin = Math.min(me.dataMin, _.dataMin), _.dataMax = Math.max(me.dataMax, _.dataMax));
        }
        u.allExtremes = _;
      }
      const { dataMin: J, dataMax: wt, min: nt, max: ct } = bt(u.getExtremes(), _ || {}), rt = h.parse(y.min), F = h.parse(y.max), Xt = J ?? rt, pt = wt ?? F, Ht = K - R, pe = u.categories ? 0 : Math.min(Ht, pt - Xt), Ye = Xt - pe * (xt(rt) ? 0 : y.minPadding), Ve = pt + pe * (xt(F) ? 0 : y.maxPadding), ts = u.allowZoomOutside || M === 1 || a !== "zoom" && M > 1, ue = Math.min(rt ?? Ye, Ye, ts ? nt : Ye), ge = Math.max(F ?? Ve, Ve, ts ? ct : Ve);
      (!u.isOrdinal || M !== 1 || r) && (R < ue && (R = ue, M >= 1 && (K = R + Ht)), K > ge && (K = ge, M >= 1 && (R = K - Ht)), (r || u.series.length && (R !== nt || K !== ct) && R >= ue && K <= ge) && (n ? n[u.coll].push({
        axis: u,
        min: R,
        max: K
      }) : (u.isPanning = a !== "zoom", u.isPanning && (p = !0), u.setExtremes(r ? void 0 : R, r ? void 0 : K, !1, !1, { move: T, trigger: a, scale: M }), !r && (R > ue || K < ge) && a !== "mousewheel" && (d = !0)), f = !0), !this.hasCartesianSeries && !r && a !== "mousewheel" && (d = !0), i && (this[g ? "mouseDownX" : "mouseDownY"] = i[g ? "chartX" : "chartY"]));
    }
    return f && (n ? B(
      this,
      "selection",
      n,
      // Run transform again, this time without the selection data
      // so that the transform is applied.
      () => {
        delete t.selection, t.trigger = "zoom", this.transform(t);
      }
    ) : (d && !p && !this.resetZoomButton ? this.showResetZoom() : !d && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()), this.redraw(a === "zoom" && (this.options.chart.animation ?? this.pointCount < 100)))), f;
  }
}
bt(ft.prototype, {
  // Hook for adding callbacks in modules
  callbacks: [],
  /**
   * These collections (arrays) implement `Chart.addSomething` method used in
   * chart.update() to create new object in the collection. Equivalent for
   * deleting is resolved by simple `Something.remove()`.
   *
   * Note: We need to define these references after initializers are bound to
   * chart's prototype.
   *
   * @private
   */
  collectionsWithInit: {
    // CollectionName: [ initializingMethod, [extraArguments] ]
    xAxis: [ft.prototype.addAxis, [!0]],
    yAxis: [ft.prototype.addAxis, [!1]],
    series: [ft.prototype.addSeries]
  },
  /**
   * These collections (arrays) implement update() methods with support for
   * one-to-one option.
   * @private
   */
  collectionsWithUpdate: [
    "xAxis",
    "yAxis",
    "series"
  ],
  /**
   * These properties cause isDirtyBox to be set to true when updating. Can be
   * extended from plugins.
   * @private
   */
  propsRequireDirtyBox: [
    "backgroundColor",
    "borderColor",
    "borderWidth",
    "borderRadius",
    "plotBackgroundColor",
    "plotBackgroundImage",
    "plotBorderColor",
    "plotBorderWidth",
    "plotShadow",
    "shadow"
  ],
  /**
   * These properties require a full reflow of chart elements, best
   * implemented through running `Chart.setSize` internally (#8190).
   * @private
   */
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
  /**
   * These properties cause all series to be updated when updating. Can be
   * extended from plugins.
   * @private
   */
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
const tl = {
  /**
   * The corner radius of the border surrounding each column or bar. A number
   * signifies pixels. A percentage string, like for example `50%`, signifies
   * a relative size. For columns this is relative to the column width, for
   * pies it is relative to the radius and the inner radius.
   *
   * @sample  {highcharts} highcharts/plotoptions/column-borderradius/
   *          Rounded columns
   * @sample  highcharts/plotoptions/series-border-radius
   *          Column and pie with rounded border
   *
   * @type    {number|string|Highcharts.BorderRadiusOptionsObject}
   * @product highcharts highstock gantt
   */
  borderRadius: 3,
  /**
   * When using automatic point colors pulled from the global
   * [colors](colors) or series-specific
   * [plotOptions.column.colors](series.colors) collections, this option
   * determines whether the chart should receive one color per series or
   * one color per point.
   *
   * In styled mode, the `colors` or `series.colors` arrays are not
   * supported, and instead this option gives the points individual color
   * class names on the form `highcharts-color-{n}`.
   *
   * @see [series colors](#plotOptions.column.colors)
   *
   * @sample {highcharts} highcharts/plotoptions/column-colorbypoint-false/
   *         False by default
   * @sample {highcharts} highcharts/plotoptions/column-colorbypoint-true/
   *         True
   *
   * @type      {boolean}
   * @default   false
   * @since     2.0
   * @product   highcharts highstock gantt
   * @apioption plotOptions.column.colorByPoint
   */
  /**
   * A series specific or series type specific color set to apply instead
   * of the global [colors](#colors) when [colorByPoint](
   * #plotOptions.column.colorByPoint) is true.
   *
   * @type      {Array<Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject>}
   * @since     3.0
   * @product   highcharts highstock gantt
   * @apioption plotOptions.column.colors
   */
  /**
   * When `true`, the columns will center in the category, ignoring null
   * or missing points. When `false`, space will be reserved for null or
   * missing points.
   *
   * @sample {highcharts} highcharts/series-column/centerincategory/
   *         Center in category
   * @sample {highcharts} highcharts/series/stack-centerincategory/
   *         Center in category, stacked and grouped
   *
   * @since   8.0.1
   * @product highcharts highstock gantt
   */
  centerInCategory: !1,
  /**
   * Padding between each value groups, in x axis units.
   *
   * @sample {highcharts} highcharts/plotoptions/column-grouppadding-default/
   *         0.2 by default
   * @sample {highcharts} highcharts/plotoptions/column-grouppadding-none/
   *         No group padding - all columns are evenly spaced
   *
   * @product highcharts highstock gantt
   */
  groupPadding: 0.2,
  /**
   * Whether to group non-stacked columns or to let them render
   * independent of each other. Non-grouped columns will be laid out
   * individually and overlap each other.
   *
   * @sample {highcharts} highcharts/plotoptions/column-grouping-false/
   *         Grouping disabled
   * @sample {highstock} highcharts/plotoptions/column-grouping-false/
   *         Grouping disabled
   *
   * @type      {boolean}
   * @default   true
   * @since     2.3.0
   * @product   highcharts highstock gantt
   * @apioption plotOptions.column.grouping
   */
  /** @ignore-option */
  marker: null,
  // Point options are specified in the base options
  /**
   * The maximum allowed pixel width for a column, translated to the
   * height of a bar in a bar chart. This prevents the columns from
   * becoming too wide when there is a small number of points in the
   * chart.
   *
   * @see [pointWidth](#plotOptions.column.pointWidth)
   *
   * @sample {highcharts} highcharts/plotoptions/column-maxpointwidth-20/
   *         Limited to 50
   * @sample {highstock} highcharts/plotoptions/column-maxpointwidth-20/
   *         Limited to 50
   *
   * @type      {number}
   * @since     4.1.8
   * @product   highcharts highstock gantt
   * @apioption plotOptions.column.maxPointWidth
   */
  /**
   * Padding between each column or bar, in x axis units.
   *
   * @sample {highcharts} highcharts/plotoptions/column-pointpadding-default/
   *         0.1 by default
   * @sample {highcharts} highcharts/plotoptions/column-pointpadding-025/
   *          0.25
   * @sample {highcharts} highcharts/plotoptions/column-pointpadding-none/
   *         0 for tightly packed columns
   *
   * @product highcharts highstock gantt
   */
  pointPadding: 0.1,
  /**
   * A pixel value specifying a fixed width for each column or bar point.
   * When set to `undefined`, the width is calculated from the
   * `pointPadding` and `groupPadding`. The width effects the dimension
   * that is not based on the point value. For column series it is the
   * horizontal length and for bar series it is the vertical length.
   *
   * @see [maxPointWidth](#plotOptions.column.maxPointWidth)
   *
   * @sample {highcharts} highcharts/plotoptions/column-pointwidth-20/
   *         20px wide columns regardless of chart width or the amount of
   *         data points
   *
   * @type      {number}
   * @since     1.2.5
   * @product   highcharts highstock gantt
   * @apioption plotOptions.column.pointWidth
   */
  /**
   * A pixel value specifying a fixed width for the column or bar.
   * Overrides pointWidth on the series.
   *
   * @see [series.pointWidth](#plotOptions.column.pointWidth)
   *
   * @type      {number}
   * @default   undefined
   * @since     7.0.0
   * @product   highcharts highstock gantt
   * @apioption series.column.data.pointWidth
   */
  /**
   * The minimal height for a column or width for a bar. By default,
   * 0 values are not shown. To visualize a 0 (or close to zero) point,
   * set the minimal point length to a pixel value like 3\. In stacked
   * column charts, minPointLength might not be respected for tightly
   * packed values.
   *
   * @sample {highcharts} highcharts/plotoptions/column-minpointlength/
   *         Zero base value
   * @sample {highcharts} highcharts/plotoptions/column-minpointlength-pos-and-neg/
   *         Positive and negative close to zero values
   *
   * @product highcharts highstock gantt
   */
  minPointLength: 0,
  /**
   * When the series contains less points than the crop threshold, all
   * points are drawn, event if the points fall outside the visible plot
   * area at the current zoom. The advantage of drawing all points
   * (including markers and columns), is that animation is performed on
   * updates. On the other hand, when the series contains more points than
   * the crop threshold, the series data is cropped to only contain points
   * that fall within the plot area. The advantage of cropping away
   * invisible points is to increase performance on large series.
   *
   * @product highcharts highstock gantt
   */
  cropThreshold: 50,
  /**
   * The X axis range that each point is valid for. This determines the
   * width of the column. On a categorized axis, the range will be 1
   * by default (one category unit). On linear and datetime axes, the
   * range will be computed as the distance between the two closest data
   * points.
   *
   * The default `null` means it is computed automatically, but this
   * option can be used to override the automatic value.
   *
   * This option is set by default to 1 if data sorting is enabled.
   *
   * @sample {highcharts} highcharts/plotoptions/column-pointrange/
   *         Set the point range to one day on a data set with one week
   *         between the points
   *
   * @type    {number|null}
   * @since   2.3
   * @product highcharts highstock gantt
   */
  pointRange: null,
  states: {
    /**
     * Options for the hovered point. These settings override the normal
     * state options when a point is moused over or touched.
     *
     * @extends   plotOptions.series.states.hover
     * @excluding halo, lineWidth, lineWidthPlus, marker
     * @product   highcharts highstock gantt
     */
    hover: {
      /** @ignore-option */
      halo: !1,
      /**
       * A specific border color for the hovered point. Defaults to
       * inherit the normal state border color.
       *
       * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
       * @product   highcharts gantt
       * @apioption plotOptions.column.states.hover.borderColor
       */
      /**
       * A specific color for the hovered point.
       *
       * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
       * @product   highcharts gantt
       * @apioption plotOptions.column.states.hover.color
       */
      /**
       * How much to brighten the point on interaction.
       *
       * In styled mode, the hover brightening is by default replaced
       * with a fill-opacity set in the `.highcharts-point:hover`
       * rule.
       *
       * @sample {highcharts} highcharts/plotoptions/column-states-hover-brightness/
       *         Brighten by 0.5
       *
       * @product highcharts highstock gantt
       */
      brightness: 0.1
    },
    /**
     * Options for the selected point. These settings override the
     * normal state options when a point is selected.
     *
     * @extends   plotOptions.series.states.select
     * @excluding halo, lineWidth, lineWidthPlus, marker
     * @product   highcharts highstock gantt
     */
    select: {
      /**
       * A specific color for the selected point.
       *
       * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
       * @default #cccccc
       * @product highcharts highstock gantt
       */
      color: "#cccccc",
      /**
       * A specific border color for the selected point.
       *
       * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
       * @default #000000
       * @product highcharts highstock gantt
       */
      borderColor: "#000000"
      /* Palette.neutralColor100 */
    }
  },
  dataLabels: {
    align: void 0,
    verticalAlign: void 0,
    /**
     * The y position offset of the label relative to the point in
     * pixels.
     *
     * @type {number}
     */
    y: void 0
  },
  // False doesn't work well: https://jsfiddle.net/highcharts/hz8fopan/14/
  /** @ignore-option */
  startFromThreshold: !0,
  stickyTracking: !1,
  tooltip: {
    distance: 6
  },
  /**
   * The Y axis value to serve as the base for the columns, for
   * distinguishing between values above and below a threshold. If `null`,
   * the columns extend from the padding Y axis minimum.
   *
   * @type    {number|null}
   * @since   2.0
   * @product highcharts
   */
  threshold: 0,
  /**
   * The width of the border surrounding each column or bar. Defaults to
   * `1` when there is room for a border, but to `0` when the columns are
   * so dense that a border would cover the next column.
   *
   * In styled mode, the stroke width can be set with the
   * `.highcharts-point` rule.
   *
   * @sample {highcharts} highcharts/plotoptions/column-borderwidth/
   *         2px black border
   *
   * @type      {number}
   * @default   undefined
   * @product   highcharts highstock gantt
   * @apioption plotOptions.column.borderWidth
   */
  /**
   * The color of the border surrounding each column or bar.
   *
   * In styled mode, the border stroke can be set with the
   * `.highcharts-point` rule.
   *
   * @sample {highcharts} highcharts/plotoptions/column-bordercolor/
   *         Dark gray border
   *
   * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
   * @default   #ffffff
   * @product   highcharts highstock gantt
   */
  borderColor: "#ffffff"
  /* Palette.backgroundColor */
}, { animObject: el } = Et, { parse: il } = U, { noop: sl } = N, { clamp: Ie, crisp: Be, defined: lr, extend: Er, fireEvent: hr, isArray: cr, isNumber: Ne, merge: Gi, pick: ee, objectEach: rl } = W;
class fe extends et {
  /* *
   *
   *  Functions
   *
   * */
  /* eslint-disable valid-jsdoc */
  /**
   * Animate the column heights one by one from zero.
   *
   * @private
   * @function Highcharts.seriesTypes.column#animate
   *
   * @param {boolean} init
   *        Whether to initialize the animation or run it
   */
  animate(t) {
    const e = this, i = this.yAxis, s = i.pos, r = i.reversed, n = e.options, { clipOffset: o, inverted: a } = this.chart, l = {}, h = a ? "translateX" : "translateY";
    let f, d;
    t && o ? (l.scaleY = 1e-3, d = Ie(i.toPixels(n.threshold || 0), s, s + i.len), a ? (d += r ? -Math.floor(o[0]) : Math.ceil(o[2]), l.translateX = d - i.len) : (d += r ? Math.ceil(o[0]) : -Math.floor(o[2]), l.translateY = d), e.clipBox && e.setClip(), e.group.attr(l)) : (f = Number(e.group.attr(h)), e.group.animate({ scaleY: 1 }, Er(el(e.options.animation), {
      // Do the scale synchronously to ensure smooth
      // updating (#5030, #7228)
      step: function(p, u) {
        e.group && (l[h] = f + u.pos * (s - f), e.group.attr(l));
      }
    })));
  }
  /**
   * Initialize the series. Extends the basic Series.init method by
   * marking other series of the same type as dirty.
   *
   * @private
   * @function Highcharts.seriesTypes.column#init
   */
  init(t, e) {
    super.init.apply(this, arguments);
    const i = this;
    t = i.chart, t.hasRendered && t.series.forEach(function(s) {
      s.type === i.type && (s.isDirty = !0);
    });
  }
  /**
   * Return the width and x offset of the columns adjusted for grouping,
   * groupPadding, pointPadding, pointWidth etc.
   *
   * @private
   * @function Highcharts.seriesTypes.column#getColumnMetrics
   */
  getColumnMetrics() {
    const t = this, e = t.options, i = t.xAxis, s = t.yAxis, r = i.options.reversedStacks, n = i.reversed && !r || !i.reversed && r, o = {};
    let a, l = 0;
    e.grouping === !1 ? l = 1 : t.chart.series.forEach(function(y) {
      const b = y.yAxis, v = y.options;
      let S;
      y.type === t.type && y.reserveSpace() && s.len === b.len && s.pos === b.pos && (v.stacking && v.stacking !== "group" ? (a = y.stackKey, typeof o[a] > "u" && (o[a] = l++), S = o[a]) : v.grouping !== !1 && (S = l++), y.columnIndex = S);
    });
    const h = Math.min(
      Math.abs(i.transA) * (!i.brokenAxis?.hasBreaks && i.ordinal?.slope || e.pointRange || i.closestPointRange || i.tickInterval || 1),
      // #2610
      i.len
      // #1535
    ), f = h * e.groupPadding, d = h - 2 * f, p = d / (l || 1), u = Math.min(e.maxPointWidth || i.len, ee(e.pointWidth, p * (1 - 2 * e.pointPadding))), g = (p - u) / 2, x = (t.columnIndex || 0) + (n ? 1 : 0), m = g + (f + x * p - h / 2) * (n ? -1 : 1);
    return t.columnMetrics = {
      width: u,
      offset: m,
      paddedWidth: p,
      columnCount: l
    }, t.columnMetrics;
  }
  /**
   * Make the columns crisp. The edges are rounded to the nearest full
   * pixel.
   *
   * @private
   * @function Highcharts.seriesTypes.column#crispCol
   */
  crispCol(t, e, i, s) {
    const r = this.borderWidth, n = this.chart.inverted, o = Be(e + s, r, n);
    if (e = Be(e, r, n), s = o - e, this.options.crisp) {
      const a = Be(t + i, r);
      t = Be(t, r), i = a - t;
    }
    return { x: t, y: e, width: i, height: s };
  }
  /**
   * Adjust for missing columns, according to the `centerInCategory`
   * option. Missing columns are either single points or stacks where the
   * point or points are either missing or null.
   *
   * @private
   * @function Highcharts.seriesTypes.column#adjustForMissingColumns
   * @param {number} x
   * The x coordinate of the column, left side
   *
   * @param {number} pointWidth
   * The pointWidth, already computed upstream
   *
   * @param {Highcharts.ColumnPoint} point
   * The point instance
   *
   * @param {Highcharts.ColumnMetricsObject} metrics
   * The series-wide column metrics
   *
   * @return {number}
   * The adjusted x position, or the original if not adjusted
   */
  adjustForMissingColumns(t, e, i, s) {
    if (!i.isNull && s.columnCount > 1) {
      const r = this.xAxis.series.filter((l) => l.visible).map((l) => l.index);
      let n = 0, o = 0;
      rl(this.xAxis.stacking?.stacks, (l) => {
        const h = typeof i.x == "number" ? l[i.x.toString()]?.points : void 0, f = h?.[this.index], d = {};
        if (h && cr(f)) {
          let p = this.index;
          const u = Object.keys(h).filter((g) => (
            // Filter out duplicate X's
            !g.match(",") && // Filter out null points
            h[g] && h[g].length > 1
          )).map(parseFloat).filter((g) => r.indexOf(g) !== -1).filter((g) => {
            const x = this.chart.series[g].options, m = x.stacking && x.stack;
            if (lr(m)) {
              if (Ne(d[m]))
                return p === g && (p = d[m]), !1;
              d[m] = g;
            }
            return !0;
          }).sort((g, x) => x - g);
          n = u.indexOf(p), o = u.length;
        }
      }), n = this.xAxis.reversed ? o - 1 - n : n;
      const a = (o - 1) * s.paddedWidth + e;
      t = (i.plotX || 0) + a / 2 - e - n * s.paddedWidth;
    }
    return t;
  }
  /**
   * Translate each point to the plot area coordinate system and find
   * shape positions
   *
   * @private
   * @function Highcharts.seriesTypes.column#translate
   */
  translate() {
    const t = this, e = t.chart, i = t.options, s = t.dense = t.closestPointRange * t.xAxis.transA < 2, r = t.borderWidth = ee(
      i.borderWidth,
      s ? 0 : 1
      // #3635
    ), n = t.xAxis, o = t.yAxis, a = i.threshold, l = ee(i.minPointLength, 5), h = t.getColumnMetrics(), f = h.width, d = t.pointXOffset = h.offset, p = t.dataMin, u = t.dataMax, g = t.translatedThreshold = o.getThreshold(a);
    let x = t.barW = Math.max(f, 1 + 2 * r);
    i.pointPadding && i.crisp && (x = Math.ceil(x)), et.prototype.translate.apply(t), t.points.forEach(function(m) {
      const y = ee(m.yBottom, g), b = 999 + Math.abs(y), v = m.plotX || 0, S = Ie(m.plotY, -b, o.len + b);
      let w, k = Math.min(S, y), M = Math.max(S, y) - k, C = f, A = v + d, T = x;
      l && Math.abs(M) < l && (M = l, w = !o.reversed && !m.negative || o.reversed && m.negative, Ne(a) && Ne(u) && m.y === a && u <= a && // And if there's room for it (#7311)
      (o.min || 0) < a && // If all points are the same value (i.e zero) not draw
      // as negative points (#10646), but only if there's room
      // for it (#14876)
      (p !== u || (o.max || 0) <= a) && (w = !w, m.negative = !m.negative), k = Math.abs(k - g) > l ? (
        // ...keep position
        y - l
      ) : (
        // #1485, #4051
        g - (w ? l : 0)
      )), lr(m.options.pointWidth) && (C = T = Math.ceil(m.options.pointWidth), A -= Math.round((C - f) / 2)), i.centerInCategory && (A = t.adjustForMissingColumns(A, C, m, h)), m.barX = A, m.pointWidth = C, m.tooltipPos = e.inverted ? [
        Ie(o.len + o.pos - e.plotLeft - S, o.pos - e.plotLeft, o.len + o.pos - e.plotLeft),
        n.len + n.pos - e.plotTop - A - T / 2,
        M
      ] : [
        n.left - e.plotLeft + A + T / 2,
        Ie(S + o.pos - e.plotTop, o.pos - e.plotTop, o.len + o.pos - e.plotTop),
        M
      ], m.shapeType = t.pointClass.prototype.shapeType || "roundedRect", m.shapeArgs = t.crispCol(
        A,
        // #3169, drilldown from null must have a position to work from.
        // #6585, dataLabel should be placed on xAxis, not floating in
        // the middle of the chart.
        k,
        T,
        m.isNull ? 0 : M
      );
    }), hr(this, "afterColumnTranslate");
  }
  /**
   * Columns have no graph
   *
   * @private
   * @function Highcharts.seriesTypes.column#drawGraph
   */
  drawGraph() {
    this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
  }
  /**
   * Get presentational attributes
   *
   * @private
   * @function Highcharts.seriesTypes.column#pointAttribs
   */
  pointAttribs(t, e) {
    const i = this.options, s = this.pointAttrToOptions || {}, r = s.stroke || "borderColor", n = s["stroke-width"] || "borderWidth";
    let o, a, l, h = t && t.color || this.color, f = t && t[r] || i[r] || h, d = t && t.options.dashStyle || i.dashStyle, p = t && t[n] || i[n] || this[n] || 0, u = t?.isNull && i.nullInteraction ? 0 : t?.opacity ?? i.opacity ?? 1;
    t && this.zones.length && (a = t.getZone(), h = t.options.color || a && (a.color || t.nonZonedColor) || this.color, a && (f = a.borderColor || f, d = a.dashStyle || d, p = a.borderWidth || p)), e && t && (o = Gi(
      i.states[e],
      // #6401
      t.options.states && t.options.states[e] || {}
    ), l = o.brightness, h = o.color || typeof l < "u" && il(h).brighten(o.brightness).get() || h, f = o[r] || f, p = o[n] || p, d = o.dashStyle || d, u = ee(o.opacity, u));
    const g = {
      fill: h,
      stroke: f,
      "stroke-width": p,
      opacity: u
    };
    return d && (g.dashstyle = d), g;
  }
  /**
   * Draw the columns. For bars, the series.group is rotated, so the same
   * coordinates apply for columns and bars. This method is inherited by
   * scatter series.
   *
   * @private
   * @function Highcharts.seriesTypes.column#drawPoints
   */
  drawPoints(t = this.points) {
    const e = this, i = this.chart, s = e.options, r = s.nullInteraction, n = i.renderer, o = s.animationLimit || 250;
    let a;
    t.forEach(function(l) {
      const h = l.plotY;
      let f = l.graphic, d = !!f, p = f && i.pointCount < o ? "animate" : "attr";
      Ne(h) && (l.y !== null || r) ? (a = l.shapeArgs, f && l.hasNewShapeType() && (f = f.destroy()), e.enabledDataSorting && (l.startXPos = e.xAxis.reversed ? -(a && a.width || 0) : e.xAxis.width), f || (l.graphic = f = n[l.shapeType](a).add(l.group || e.group), f && e.enabledDataSorting && i.hasRendered && i.pointCount < o && (f.attr({
        x: l.startXPos
      }), d = !0, p = "animate")), f && d && f[p](Gi(a)), i.styledMode || f[p](e.pointAttribs(l, l.selected && "select")).shadow(l.allowShadow !== !1 && s.shadow), f && (f.addClass(l.getClassName(), !0), f.attr({
        visibility: l.visible ? "inherit" : "hidden"
      }))) : f && (l.graphic = f.destroy());
    });
  }
  /**
   * Draw the tracker for a point.
   * @private
   */
  drawTracker(t = this.points) {
    const e = this, i = e.chart, s = i.pointer, r = function(o) {
      s?.normalize(o);
      const a = s?.getPointFromEvent(o);
      s && a && e.options.enableMouseTracking && // Run point events only for points inside plot area, #21136
      (i.isInsidePlot(o.chartX - i.plotLeft, o.chartY - i.plotTop, {
        visiblePlotOnly: !0
      }) || s?.inClass(o.target, "highcharts-data-label")) && (s.isDirectTouch = !0, a.onMouseOver(o));
    };
    let n;
    t.forEach(function(o) {
      n = cr(o.dataLabels) ? o.dataLabels : o.dataLabel ? [o.dataLabel] : [], o.graphic && (o.graphic.element.point = o), n.forEach(function(a) {
        (a.div || a.element).point = o;
      });
    }), e._hasTracking || (e.trackerGroups.forEach(function(o) {
      e[o] && (e[o].addClass("highcharts-tracker").on("mouseover", r).on("mouseout", function(a) {
        s?.onTrackerMouseOut(a);
      }).on("touchstart", r), !i.styledMode && e.options.cursor && e[o].css({ cursor: e.options.cursor }));
    }), e._hasTracking = !0), hr(this, "afterDrawTracker");
  }
  /**
   * Remove this series from the chart
   *
   * @private
   * @function Highcharts.seriesTypes.column#remove
   */
  remove() {
    const t = this, e = t.chart;
    e.hasRendered && e.series.forEach(function(i) {
      i.type === t.type && (i.isDirty = !0);
    }), et.prototype.remove.apply(t, arguments);
  }
}
fe.defaultOptions = Gi(et.defaultOptions, tl);
Er(fe.prototype, {
  // When tooltip is not shared, this series (and derivatives) requires
  // direct touch/hover. KD-tree does not apply.
  directTouch: !0,
  getSymbol: sl,
  // Use separate negative stacks, unlike area stacks where a negative
  // point is subtracted from previous (#1910)
  negStacks: !0,
  trackerGroups: ["group", "dataLabelsGroup"]
});
St.registerSeriesType("column", fe);
const { getDeferredAnimation: nl } = Et, { format: ol } = de, { defined: Ct, extend: dr, fireEvent: Pi, getAlignFactor: fr, isArray: yt, isString: ie, merge: se, objectEach: al, pick: re, pInt: ll, splat: pr } = W;
var Yi;
(function(c) {
  function t() {
    return h(this).some((d) => d?.enabled);
  }
  function e(d, p, u, g, x) {
    const m = this, { chart: y, enabledDataSorting: b } = this, v = this.isCartesian && y.inverted, S = d.plotX, w = d.plotY, k = u.rotation || 0, M = Ct(S) && Ct(w) && y.isInsidePlot(S, Math.round(w), {
      inverted: v,
      paneCoordinates: !0,
      series: m
    }), C = (L) => {
      b && m.xAxis && !A && m.setDataLabelStartPos(d, p, x, M, L);
    }, A = k === 0 ? re(u.overflow, b ? "none" : "justify") === "justify" : !1;
    let T = this.visible && d.visible !== !1 && Ct(S) && (d.series.forceDL || b && !A || M || // If the data label is inside the align box, it is enough
    // that parts of the align box is inside the plot area
    // (#12370). When stacking, it is always inside regardless
    // of the option (#15148).
    re(u.inside, !!this.options.stacking) && g && y.isInsidePlot(S, v ? g.x + 1 : g.y + g.height - 1, {
      inverted: v,
      paneCoordinates: !0,
      series: m
    }));
    const E = d.pos();
    if (T && E) {
      const L = p.getBBox(), O = p.getBBox(void 0, 0);
      if (g = dr({
        x: E[0],
        y: Math.round(E[1]),
        width: 0,
        height: 0
      }, g || {}), u.alignTo === "plotEdges" && m.isCartesian && (g[v ? "x" : "y"] = 0, g[v ? "width" : "height"] = this.yAxis?.len || 0), dr(u, {
        width: L.width,
        height: L.height
      }), C(g), p.align(se(u, {
        width: O.width,
        height: O.height
      }), !1, g, !1), p.alignAttr.x += fr(u.align) * (O.width - L.width), p.alignAttr.y += fr(u.verticalAlign) * (O.height - L.height), p[p.placed ? "animate" : "attr"]({
        "text-align": p.alignAttr["text-align"] || "center",
        x: p.alignAttr.x + (L.width - O.width) / 2,
        y: p.alignAttr.y + (L.height - O.height) / 2,
        rotationOriginX: (p.width || 0) / 2,
        rotationOriginY: (p.height || 0) / 2
      }), A && g.height >= 0)
        this.justifyDataLabel(p, u, p.alignAttr, L, g, x);
      else if (re(u.crop, !0)) {
        const { x: D, y: I } = p.alignAttr, R = 1;
        T = y.isInsidePlot(D, I, {
          paneCoordinates: !0,
          series: m
        }) && y.isInsidePlot(D + L.width - R, I + L.height - R, {
          paneCoordinates: !0,
          series: m
        });
      }
      u.shape && !k && p[x ? "attr" : "animate"]({
        anchorX: E[0],
        anchorY: E[1]
      });
    }
    x && b && (p.placed = !1), !T && (!b || A) ? (p.hide(), p.placed = !1) : (p.show(), p.placed = !0);
  }
  function i(d, p) {
    const u = p.filter;
    if (u) {
      const g = u.operator, x = d[u.property], m = u.value;
      return g === ">" && x > m || g === "<" && x < m || g === ">=" && x >= m || g === "<=" && x <= m || g === "==" && x == m || // eslint-disable-line eqeqeq
      g === "===" && x === m || g === "!=" && x != m || // eslint-disable-line eqeqeq
      g === "!==" && x !== m;
    }
    return !0;
  }
  function s(d) {
    const p = d.prototype;
    p.initDataLabels || (p.initDataLabels = n, p.initDataLabelsGroup = r, p.alignDataLabel = e, p.drawDataLabels = o, p.justifyDataLabel = a, p.mergeArrays = l, p.setDataLabelStartPos = f, p.hasDataLabels = t);
  }
  c.compose = s;
  function r() {
    return this.plotGroup(
      "dataLabelsGroup",
      "data-labels",
      this.hasRendered ? "inherit" : "hidden",
      // #5133, #10220
      this.options.dataLabels.zIndex || 6,
      this.chart.dataLabelsGroup
    );
  }
  function n(d) {
    const p = this, u = p.hasRendered || 0, g = this.initDataLabelsGroup().attr({ opacity: +u });
    return !u && g && (p.visible && g.show(), p.options.animation ? g.animate({ opacity: 1 }, d) : g.attr({ opacity: 1 })), g;
  }
  function o(d) {
    d = d || this.points;
    const p = this, u = p.chart, g = p.options, x = u.renderer, { backgroundColor: m, plotBackgroundColor: y } = u.options.chart, b = x.getContrast(
      ie(y) && y || ie(m) && m || "#000000"
      /* Palette.neutralColor100 */
    ), v = h(p);
    let S, w;
    const { animation: k, defer: M } = v[0], C = M ? nl(u, k, p) : { defer: 0, duration: 0 };
    Pi(this, "drawDataLabels"), p.hasDataLabels?.() && (w = this.initDataLabels(C), d.forEach((A) => {
      const T = A.dataLabels || [], E = A.color || p.color;
      S = pr(l(
        v,
        // The dlOptions prop is used in treemaps
        A.dlOptions || A.options?.dataLabels
      )), S.forEach((O, D) => {
        const I = O.enabled && (A.visible || A.dataLabelOnHidden) && // #2282, #4641, #7112, #10049
        (!A.isNull || A.dataLabelOnNull) && i(A, O), { backgroundColor: R, borderColor: K, distance: _, style: J = {} } = O;
        let wt, nt, ct, rt = {}, F = T[D], Xt = !F, pt;
        I && (wt = re(O[A.formatPrefix + "Format"], O.format), nt = Ct(wt) ? ol(wt, A, u) : (O[A.formatPrefix + "Formatter"] || O.formatter).call(A, O), ct = O.rotation, u.styledMode || (J.color = re(
          O.color,
          J.color,
          ie(p.color) ? p.color : void 0,
          "#000000"
          /* Palette.neutralColor100 */
        ), J.color === "contrast" ? (R !== "none" && (pt = R), A.contrastColor = x.getContrast(pt !== "auto" && ie(pt) && pt || (ie(E) ? E : "")), J.color = pt || // #20007
        !Ct(_) && O.inside || ll(_ || 0) < 0 || g.stacking ? A.contrastColor : b) : delete A.contrastColor, g.cursor && (J.cursor = g.cursor)), rt = {
          r: O.borderRadius || 0,
          rotation: ct,
          padding: O.padding,
          zIndex: 1
        }, u.styledMode || (rt.fill = R === "auto" ? A.color : R, rt.stroke = K === "auto" ? A.color : K, rt["stroke-width"] = O.borderWidth), al(rt, (Ht, pe) => {
          typeof Ht > "u" && delete rt[pe];
        })), F && (!I || !Ct(nt) || // Changed useHTML value
        !!(F.div || F.text?.foreignObject) != !!O.useHTML || // Change from no rotation to rotation and
        // vice versa. Don't use defined() because
        // rotation = 0 means also rotation = undefined
        (!F.rotation || !O.rotation) && F.rotation !== O.rotation) && (F = void 0, Xt = !0), I && Ct(nt) && nt !== "" && (F ? rt.text = nt : (F = x.label(nt, 0, 0, O.shape, void 0, void 0, O.useHTML, void 0, "data-label"), F.addClass(" highcharts-data-label-color-" + A.colorIndex + " " + (O.className || "") + // #3398
        (O.useHTML ? " highcharts-tracker" : ""))), F && (F.options = O, F.attr(rt), u.styledMode ? J.width && F.css({
          width: J.width,
          textOverflow: J.textOverflow,
          whiteSpace: J.whiteSpace
        }) : F.css(J).shadow(O.shadow), Pi(F, "beforeAddingDataLabel", { labelOptions: O, point: A }), F.added || F.add(w), p.alignDataLabel(A, F, O, void 0, Xt), F.isActive = !0, T[D] && T[D] !== F && T[D].destroy(), T[D] = F));
      });
      let L = T.length;
      for (; L--; )
        T[L]?.isActive ? T[L].isActive = !1 : (T[L]?.destroy(), T.splice(L, 1));
      A.dataLabel = T[0], A.dataLabels = T;
    })), Pi(this, "afterDrawDataLabels");
  }
  function a(d, p, u, g, x, m) {
    const y = this.chart, b = p.align, v = p.verticalAlign, S = d.box ? 0 : d.padding || 0, w = y.inverted ? this.yAxis : this.xAxis, k = w ? w.left - y.plotLeft : 0, M = y.inverted ? this.xAxis : this.yAxis, C = M ? M.top - y.plotTop : 0;
    let { x: A = 0, y: T = 0 } = p, E, L;
    return E = (u.x || 0) + S + k, E < 0 && (b === "right" && A >= 0 ? (p.align = "left", p.inside = !0) : A -= E, L = !0), E = (u.x || 0) + g.width - S + k, E > y.plotWidth && (b === "left" && A <= 0 ? (p.align = "right", p.inside = !0) : A += y.plotWidth - E, L = !0), E = u.y + S + C, E < 0 && (v === "bottom" && T >= 0 ? (p.verticalAlign = "top", p.inside = !0) : T -= E, L = !0), E = (u.y || 0) + g.height - S + C, E > y.plotHeight && (v === "top" && T <= 0 ? (p.verticalAlign = "bottom", p.inside = !0) : T += y.plotHeight - E, L = !0), L && (p.x = A, p.y = T, d.placed = !m, d.align(p, void 0, x)), L;
  }
  function l(d, p) {
    let u = [], g;
    if (yt(d) && !yt(p))
      u = d.map(function(x) {
        return se(x, p);
      });
    else if (yt(p) && !yt(d))
      u = p.map(function(x) {
        return se(d, x);
      });
    else if (!yt(d) && !yt(p))
      u = se(d, p);
    else if (yt(d) && yt(p))
      for (g = Math.max(d.length, p.length); g--; )
        u[g] = se(d[g], p[g]);
    return u;
  }
  function h(d) {
    const p = d.chart.options.plotOptions;
    return pr(l(l(p?.series?.dataLabels, p?.[d.type]?.dataLabels), d.options.dataLabels));
  }
  function f(d, p, u, g, x) {
    const m = this.chart, y = m.inverted, b = this.xAxis, v = b.reversed, S = ((y ? p.height : p.width) || 0) / 2, w = d.pointWidth, k = w ? w / 2 : 0;
    p.startXPos = y ? x.x : v ? -S - k : b.width - S + k, p.startYPos = y ? v ? this.yAxis.height - S + k : -S - k : x.y, g ? p.visibility === "hidden" && (p.show(), p.attr({ opacity: 0 }).animate({ opacity: 1 })) : p.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, p.hide), m.hasRendered && (u && p.attr({ x: p.startXPos, y: p.startYPos }), p.placed = !0);
  }
})(Yi || (Yi = {}));
const hl = Yi, { composed: cl } = N, { series: ur } = St, { merge: dl, pushUnique: fl } = W;
var Vi;
(function(c) {
  function t(i, s, r, n, o) {
    const { chart: a, options: l } = this, h = a.inverted, f = this.xAxis?.len || a.plotSizeX || 0, d = this.yAxis?.len || a.plotSizeY || 0, p = i.dlBox || i.shapeArgs, u = i.below ?? // Range series
    (i.plotY || 0) > (this.translatedThreshold ?? d), g = r.inside ?? !!l.stacking;
    if (p) {
      if (n = dl(p), r.overflow !== "allow" || r.crop !== !1 || l.clip !== !1) {
        n.y < 0 && (n.height += n.y, n.y = 0);
        const x = n.y + n.height - d;
        x > 0 && x < n.height - 1 && (n.height -= x);
      }
      h && (n = {
        x: d - n.y - n.height,
        y: f - n.x - n.width,
        width: n.height,
        height: n.width
      }), g || (h ? (n.x += u ? 0 : n.width, n.width = 0) : (n.y += u ? n.height : 0, n.height = 0));
    }
    r.align ?? (r.align = !h || g ? "center" : u ? "right" : "left"), r.verticalAlign ?? (r.verticalAlign = h || g ? "middle" : u ? "top" : "bottom"), ur.prototype.alignDataLabel.call(this, i, s, r, n, o), r.inside && i.contrastColor && s.css({
      color: i.contrastColor
    });
  }
  function e(i) {
    hl.compose(ur), fl(cl, "ColumnDataLabel") && (i.prototype.alignDataLabel = t);
  }
  c.compose = e;
})(Vi || (Vi = {}));
const pl = Vi, { defined: ul, merge: Dr, isObject: gl } = W;
class Qi extends et {
  /* *
   *
   *  Functions
   *
   * */
  /**
   * Draw the graph. Called internally when rendering line-like series
   * types. The first time it generates the `series.graph` item and
   * optionally other series-wide items like `series.area` for area
   * charts. On subsequent calls these items are updated with new
   * positions and attributes.
   *
   * @function Highcharts.Series#drawGraph
   */
  drawGraph() {
    const t = this.options, e = (this.gappedPath || this.getGraphPath).call(this), i = this.chart.styledMode;
    [this, ...this.zones].forEach((s, r) => {
      let n, o = s.graph;
      const a = o ? "animate" : "attr", l = s.dashStyle || t.dashStyle;
      o ? (o.endX = this.preventGraphAnimation ? null : e.xMap, o.animate({ d: e })) : e.length && (s.graph = o = this.chart.renderer.path(e).addClass("highcharts-graph" + (r ? ` highcharts-zone-graph-${r - 1} ` : " ") + (r && s.className || "")).attr({ zIndex: 1 }).add(this.group)), o && !i && (n = {
        stroke: !r && t.lineColor || // Series only
        s.color || this.color || "#cccccc",
        "stroke-width": t.lineWidth || 0,
        // Polygon series use filled graph
        fill: this.fillGraph && this.color || "none"
      }, l ? n.dashstyle = l : t.linecap !== "square" && (n["stroke-linecap"] = n["stroke-linejoin"] = "round"), o[a](n).shadow(t.shadow && // If shadow is defined, call function with
      // `filterUnits: 'userSpaceOnUse'` to avoid known
      // SVG filter bug (#19093)
      Dr({ filterUnits: "userSpaceOnUse" }, gl(t.shadow) ? t.shadow : {}))), o && (o.startX = e.xMap, o.isArea = e.isArea);
    });
  }
  // eslint-disable-next-line valid-jsdoc
  /**
   * Get the graph path.
   *
   * @private
   */
  getGraphPath(t, e, i) {
    const s = this, r = s.options, n = [], o = [];
    let a, l = r.step;
    t = t || s.points;
    const h = t.reversed;
    return h && t.reverse(), l = {
      right: 1,
      center: 2
    }[l] || l && 3, l && h && (l = 4 - l), t = this.getValidPoints(t, !1, r.nullInteraction || !(r.connectNulls && !e && !i)), t.forEach(function(f, d) {
      const p = f.plotX, u = f.plotY, g = t[d - 1], x = f.isNull || typeof u != "number";
      let m;
      (f.leftCliff || g?.rightCliff) && !i && (a = !0), x && !ul(e) && d > 0 ? a = !r.connectNulls : x && !e ? a = !0 : (d === 0 || a ? m = [[
        "M",
        f.plotX,
        f.plotY
      ]] : s.getPointSpline ? m = [s.getPointSpline(t, f, d)] : l ? (l === 1 ? m = [[
        "L",
        g.plotX,
        u
      ]] : l === 2 ? m = [[
        "L",
        (g.plotX + p) / 2,
        g.plotY
      ], [
        "L",
        (g.plotX + p) / 2,
        u
      ]] : m = [[
        "L",
        p,
        g.plotY
      ]], m.push([
        "L",
        p,
        u
      ])) : m = [[
        "L",
        p,
        u
      ]], o.push(f.x), l && (o.push(f.x), l === 2 && o.push(f.x)), n.push.apply(n, m), a = !1);
    }), n.xMap = o, s.graphPath = n, n;
  }
}
Qi.defaultOptions = Dr(
  et.defaultOptions,
  /**
   * General options for all series types.
   *
   * @optionparent plotOptions.series
   */
  {
    legendSymbol: "lineMarker"
  }
);
St.registerSeriesType("line", Qi);
console.log("Chart", ft);
console.log("ColumnSeries", fe);
pl.compose(fe);
console.log("LineSeries", Qi);
class ml {
  constructor() {
  }
  // Operations - Render.
  render = (t) => {
    try {
      console.log("0000", ft);
      const e = new ft(t, {
        chart: { type: "column", reflow: !1 },
        // title: { text: 'Fruit Consumption' },
        // xAxis: { categories: ['Apples', 'Bananas', 'Oranges'] },
        // yAxis: { title: { text: 'Fruit eaten' } },
        series: [
          { type: "column", name: "Jane", data: [1, 0, 4] },
          { type: "column", name: "John", data: [15, 17, 13] }
        ]
      });
      console.log(1111, e);
    } catch (e) {
      console.log(2222, e);
    }
  };
}
export {
  ml as default
};
