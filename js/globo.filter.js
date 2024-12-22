var globoFilter;
(() => {
  var e,
    t,
    o,
    r,
    i = {},
    l = {};
  function n(e) {
    var t = l[e];
    if (void 0 !== t) return t.exports;
    var o = (l[e] = { exports: {} });
    return i[e].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = i),
    (n.amdO = {}),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (n.t = function (o, r) {
      if ((1 & r && (o = this(o)), 8 & r)) return o;
      if ("object" == typeof o && o) {
        if (4 & r && o.__esModule) return o;
        if (16 & r && "function" == typeof o.then) return o;
      }
      var i = Object.create(null);
      n.r(i);
      var l = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var d = 2 & r && o; "object" == typeof d && !~e.indexOf(d); d = t(d))
        Object.getOwnPropertyNames(d).forEach((e) => (l[e] = () => o[e]));
      return (l.default = () => o), n.d(i, l), i;
    }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, o) => (n.f[o](e, t), t), []))),
    (n.u = (e) =>
      "globo.filter." +
      ({
        57: "index",
        181: "filter",
        187: "search",
        374: "recommedation",
        399: "quickview",
        582: "analytic",
        687: "autocomplete",
        803: "nouislider",
        897: "carousel",
        964: "product",
      }[e] || e) +
      ".min.js"),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o = {}),
    (r = "globoFilter:"),
    (n.l = (e, t, i, l) => {
      if (o[e]) o[e].push(t);
      else {
        var d, a;
        if (void 0 !== i)
          for (
            var f = document.getElementsByTagName("script"), c = 0;
            c < f.length;
            c++
          ) {
            var s = f[c];
            if (
              s.getAttribute("src") == e ||
              s.getAttribute("data-webpack") == r + i
            ) {
              d = s;
              break;
            }
          }
        d ||
          ((a = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          n.nc && d.setAttribute("nonce", n.nc),
          d.setAttribute("data-webpack", r + i),
          (d.src = e)),
          (o[e] = [t]);
        var g = (t, r) => {
            (d.onerror = d.onload = null), clearTimeout(b);
            var i = o[e];
            if (
              (delete o[e],
              d.parentNode && d.parentNode.removeChild(d),
              i && i.forEach((e) => e(r)),
              t)
            )
              return t(r);
          },
          b = setTimeout(
            g.bind(null, void 0, { type: "timeout", target: d }),
            12e4
          );
        (d.onerror = g.bind(null, d.onerror)),
          (d.onload = g.bind(null, d.onload)),
          a && document.head.appendChild(d);
      }
    }),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var o = t.getElementsByTagName("script");
        if (o.length)
          for (var r = o.length - 1; r > -1 && (!e || !/^http(s?):/.test(e)); )
            e = o[r--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (() => {
      var e = { 240: 0 };
      n.f.j = (t, o) => {
        var r = n.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) o.push(r[2]);
          else {
            var i = new Promise((o, i) => (r = e[t] = [o, i]));
            o.push((r[2] = i));
            var l = n.p + n.u(t),
              d = new Error();
            n.l(
              l,
              (o) => {
                if (n.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var i = o && ("load" === o.type ? "missing" : o.type),
                    l = o && o.target && o.target.src;
                  (d.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + l + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = i),
                    (d.request = l),
                    r[1](d);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, o) => {
          var r,
            i,
            [l, d, a] = o,
            f = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (r in d) n.o(d, r) && (n.m[r] = d[r]);
            if (a) a(n);
          }
          for (t && t(o); f < l.length; f++)
            (i = l[f]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        o = (self.webpackChunkgloboFilter = self.webpackChunkgloboFilter || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var d;
  if (
    ((n.p = window.globoEmbedFilterAssetsUrl),
    (window.globofilter =
      (((d = window.globofilter || {}).initFiles = function (e) {
        try {
          Promise.all([n.e(432), n.e(57)])
            .then(n.bind(n, 915))
            .then((t) => {
              d.init(window.GloboEmbedFilterConfig, e);
            })
            .catch(function (e) {
              console.error(e), d.revertFilterInit();
            });
        } catch (e) {
          console.error(e), window.globofilter.revertFilterInit();
        }
      }),
      (d.revertFilterInit = function () {
        const e = document.getElementById("gf-products"),
          t = document.querySelector("[data-globo-filter-items]");
        e &&
          (e.getAttribute("old-id")
            ? (e.id = e.getAttribute("old-id"))
            : e.removeAttribute("id")),
          document.getElementById("gf-grid") &&
            document.getElementById("gf-grid").removeAttribute("id"),
          document.getElementById("gf_pagination_wrap") &&
            document.getElementById("gf_pagination_wrap").removeAttribute("id"),
          document.getElementById("gf-tree") &&
            document.getElementById("gf-tree").remove(),
          document.getElementById("gf-controls-container") &&
            document.getElementById("gf-controls-container").remove(),
          document
            .getElementsByTagName("html")[0]
            .classList.remove("spf-filter-loading"),
          t && t.removeAttribute("data-globo-filter-items");
      }),
      d)),
    "undefined" != typeof GloboFilterConfig)
  )
    try {
      (GloboFilterConfig.api = GloboEmbedFilterConfig.api),
        (GloboFilterConfig.filter.id = GloboEmbedFilterConfig.filter.id);
    } catch (e) {
      console.log(e);
    }
  if (
    window.enabledEmbedFilter &&
    "undefined" == typeof GloboFilterConfig &&
    GloboEmbedFilterConfig &&
    GloboEmbedFilterConfig.api &&
    "/filter" != GloboEmbedFilterConfig.api.filterUrl
  ) {
    const e =
        GloboEmbedFilterConfig.search.enable &&
        "password" != GloboEmbedFilterConfig.shop.page,
      t =
        GloboEmbedFilterConfig.shop.enableRecommendation &&
        "password" != GloboEmbedFilterConfig.shop.page,
      o =
        GloboEmbedFilterConfig.filter.id &&
        "password" != GloboEmbedFilterConfig.shop.page &&
        ("collection" == GloboEmbedFilterConfig.shop.page ||
          ("search" == GloboEmbedFilterConfig.shop.page &&
            GloboEmbedFilterConfig.filter.filter_on_search_page) ||
          ("index" == GloboEmbedFilterConfig.shop.page &&
            document.getElementById("gf-products") &&
            GloboEmbedFilterConfig.shop.hasOwnProperty("home_filter") &&
            GloboEmbedFilterConfig.shop.home_filter)),
      r =
        GloboEmbedFilterConfig.year_make_model.id &&
        "password" != GloboEmbedFilterConfig.shop.page &&
        (null != document.getElementById("gf-form") ||
          document.getElementsByClassName("gf-YMM-forms").length > 0);
    if (e || o || r || t) {
      const t = document.querySelector("[data-globo-filter-items]");
      t && (t.id && t.setAttribute("old-id", t.id), (t.id = "gf-products")),
        window.globofilter.initFiles({
          hasSearch: e,
          hasFilter: o,
          hasForm: r,
          hasAnalytic: !0,
        });
    } else window.globofilter.revertFilterInit();
  } else
    "undefined" == typeof GloboFilterConfig &&
      window.globofilter.revertFilterInit();
  globoFilter = {};
})();