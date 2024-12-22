!(function () {
  var e = function (e) {
      var t = { exports: {} };
      return e.call(t.exports, t, t.exports), t.exports;
    },
    t = (function () {
      function e(e, t) {
        var r = [],
          o = !0,
          a = !1,
          n = void 0;
        try {
          for (
            var i, s = e[Symbol.iterator]();
            !(o = (i = s.next()).done) &&
            (r.push(i.value), !t || r.length !== t);
            o = !0
          );
        } catch (e) {
          (a = !0), (n = e);
        } finally {
          try {
            !o && s.return && s.return();
          } finally {
            if (a) throw n;
          }
        }
        return r;
      }
      return function (t, r) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, r);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      };
    })(),
    r = function (e) {
      return e && e.__esModule ? e : { default: e };
    },
    o = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
      }
      return Array.from(e);
    },
    a = e(function (e, t) {
      "use strict";
      function r(e) {
        "loading" !== document.readyState
          ? e()
          : document.addEventListener
          ? document.addEventListener("DOMContentLoaded", e)
          : document.attachEvent("onreadystatechange", function () {
              "loading" !== document.readyState && e();
            });
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
    }),
    n = e(function (e, t) {
      "use strict";
      function r(e) {
        return new Error(
          'The feature { name: "' +
            e.name +
            '", version: "' +
            e.version +
            '"} does not exist'
        );
      }
      function o(e) {
        return new Error("Could not create registry entry " + e);
      }
      function a() {
        return new Error(
          "Cannot register a feature with the same selector twice"
        );
      }
      function n(e) {
        return new Error(
          "Features should be an Array. Received: " + JSON.stringify(e)
        );
      }
      function i(e) {
        return new Error(
          'Features should be defined as `{ name: "name", version: "version" }`. Received: ' +
            JSON.stringify(e)
        );
      }
      function s(e, t) {
        return new Error(e + " has already been loaded at version " + t);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.featureNotFound = r),
        (t.couldNotCreateEntry = o),
        (t.couldNotAddToQuerySelectors = a),
        (t.invalidFeaturesArray = n),
        (t.invalidFeature = i),
        (t.alreadyLoaded = s);
    }),
    i = e(function (e, t) {
      "use strict";
      function r() {
        if (n) return n;
        var e = document.getElementById("shopify-features");
        if (e)
          try {
            n = JSON.parse(e.textContent);
          } catch (e) {}
        else n = {};
        return n;
      }
      function o() {
        var e = r();
        if (e)
          try {
            return e.betas.reduce(function (e, t) {
              return (e[t] = !0), e;
            }, {});
          } catch (e) {}
        return {};
      }
      function a() {
        return r().locale || "en";
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getBetas = o),
        (t.getLocale = a);
      var n = void 0;
    }),
    s = e(function (e, t) {
      "use strict";
      function r() {}
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
    }),
    u = e(function (e, t) {
      "use strict";
      function r() {
        function e(e, t) {
          r[e] = r[e] || [];
          for (var o = r[e], a = 0; a < o.length; a++) {
            var i = o[a],
              s = i.name,
              u = i.version;
            if (t.name === s) {
              if (t.version !== u) throw (0, n.couldNotAddToQuerySelectors)(e);
              return;
            }
          }
          o.push(t);
        }
        function t() {
          return Object.keys(r).reduce(function (e, t) {
            if (!document.querySelector(t)) return e;
            var o = r[t];
            return delete r[t], e.concat(o);
          }, []);
        }
        var r = {};
        return { add: e, getFeatures: t };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
    }),
    l = e(function (e, t) {
      "use strict";
      function r(e) {
        var t = e.name,
          r = e.baseName,
          o = e.version,
          a = e.betaFlag,
          s = e.fileName,
          l = e.fileNames,
          c = e.legacy,
          d = e.localized,
          f = e.localesSupported,
          p = e.autoLoadSelector,
          y = e.props,
          v = void 0 === y ? {} : y,
          m = t + "@" + (o || "latest");
        if (u[m]) throw (0, n.couldNotCreateEntry)(m);
        p &&
          (Array.isArray(p) ? p : [p]).forEach(function (e) {
            h.lookup.add(e, { name: t, version: o });
          });
        u[m] = {
          props: v,
          betaFlag: a,
          scriptId: m,
          name: t,
          baseName: r,
          version: o,
          locale: (0, i.getLocale)(),
          localized: d,
          localesSupported: f,
          legacy: c,
          fileName: s,
          fileNames: l,
        };
      }
      function o() {
        l = {};
      }
      function a(e) {
        window.Shopify.modules
          ? ((e.legacy = !1), (e.props = { type: "module" }), r(e))
          : e.hasLegacy &&
            ((e.legacy = !0), (e.props = { nomodule: "" }), r(e));
      }
      function s(e) {
        var t = e.name + "@" + (e.version || "latest"),
          r = u[t];
        if (!r) throw (0, n.featureNotFound)(e);
        var o = r.name,
          a = r.baseName,
          i = r.version,
          s = r.localized && r.locale,
          c = r.legacy,
          d = r.localesSupported;
        if (l[o] && l[o] !== i) throw (0, n.alreadyLoaded)(t, l[o]);
        l[o] = i;
        var f = [];
        return (
          (r.fileNames || [r.fileName]).forEach(function (e) {
            f.push(
              (0, p.urlForFeature)({
                name: o,
                baseName: a,
                version: i,
                legacy: c,
                locale: s,
                localesSupported: d,
                fileName: e,
              })
            );
          }),
          1 === f.length ? (r.src = f[0]) : f.length > 1 && (r.srcs = f),
          r
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.reset = o),
        (t.register = a),
        (t.getEntry = s);
      var u = {},
        l = {};
    }),
    c = e(function (e, t) {
      "use strict";
      function r() {
        a = null;
      }
      function o(e) {
        return a ? a[e] : ((a = (0, i.getBetas)()), o(e));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resetBetas = r),
        (t.default = o);
      var a = null;
    }),
    d = e(function (e, t) {
      "use strict";
      function r(e) {
        return n.indexOf(e) > -1;
      }
      function o(e) {
        return i.indexOf(e) > -1;
      }
      function a(e, t, a) {
        function s() {
          n.push(d), c(), a(null, d);
        }
        function u() {
          i.push(d), c(), a(new Error("load error: " + e));
        }
        function l() {
          d.addEventListener("load", s), d.addEventListener("error", u);
        }
        function c() {
          d.removeEventListener("load", s), d.removeEventListener("error", u);
        }
        var d = document.querySelector('script[src="' + e + '"]');
        d && r(d)
          ? s()
          : d && o(d)
          ? u()
          : d
          ? l()
          : ((d = document.createElement("script")),
            Object.keys(t).forEach(function (e) {
              d.setAttribute(e, t[e]);
            }),
            null === d.getAttribute("defer") && d.setAttribute("defer", ""),
            (d.src = e),
            (d.crossorigin = "anonymous"),
            l(),
            document.head.appendChild(d));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = a);
      var n = [],
        i = [];
    }),
    f = e(function (e, o) {
      "use strict";
      function a(e, t, r) {
        return e.reduce(function (e, o) {
          var a = o.onLoad || y.default;
          try {
            var i = (0, l.getEntry)(o),
              s = i.betaFlag,
              u = !s || (0, p.default)(s);
            if (r && !u) throw (0, n.featureNotFound)(o);
            u && e.push([i, o]);
          } catch (e) {
            a(e), t.push(e);
          }
          return e;
        }, []);
      }
      function i(e, r, o) {
        var a = e.reduce(function (e, r) {
          var o = t(r, 1)[0];
          return e + (o.srcs ? o.srcs.length : 1);
        }, 0);
        0 !== a
          ? e.forEach(function (e) {
              var n = t(e, 2),
                i = n[0],
                s = n[1].onLoad || y.default,
                u = i.srcs || [i.src],
                l = u.length,
                c = [];
              u.forEach(function (e) {
                (0, v.default)(e, i.props, function (e) {
                  e && (r.push(e), c.push(e)),
                    0 === --l &&
                      (0 === c.length
                        ? s(null)
                        : 1 === c.length
                        ? s(c[0])
                        : s(c)),
                    0 === --a && o(r);
                });
              });
            })
          : o(r);
      }
      function u(e, t, r) {
        var o = [];
        i(a(e, o, t), o, function (e) {
          var t = 0 === e.length ? null : e;
          r(t);
        });
      }
      function f(e, t) {
        u(e, !0, t);
      }
      function h(e, t) {
        u(e, !1, t);
      }
      Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.loadMultiple = u),
        (o.loadMultipleErrorIfNotInBeta = f),
        (o.loadMultipleSilentIfNotInBeta = h);
      var p = r(c),
        y = r(s),
        v = r(d);
    }),
    h = e(function (e, t) {
      "use strict";
      function o(e) {
        var t = e || a.default;
        (0, f.loadMultipleSilentIfNotInBeta)(n.getFeatures(), t);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.lookup = void 0),
        (t.default = o);
      var a = r(s),
        n = (0, r(u).default)();
      t.lookup = n;
    }),
    p = e(function (e, t) {
      "use strict";
      function r(e) {
        var t = e.name,
          r = e.version,
          o = e.legacy,
          a = e.baseName,
          n = void 0 === a ? null : a,
          i = e.locale,
          s = void 0 === i ? null : i,
          u = e.localesSupported,
          l = void 0 === u ? [] : u,
          c = e.fileName,
          d = n || t,
          f = (void 0 === c ? null : c) || d;
        if (
          (f.endsWith(".js") && (f = f.slice(0, -3)),
          o && (f += "-legacy"),
          s && (f = f + "." + (s = 0 === l.length || l.includes(s) ? s : "en")),
          ("shop-js" === t || t.startsWith("shop-js/")) &&
            window.Shopify.spinShopJsUrl)
        )
          return "https://" + window.Shopify.spinShopJsUrl + "/" + f + ".js";
        var h = [
          (window.Shopify && window.Shopify.cdnHost) || "cdn.shopify.com",
          "shopifycloud",
          d,
        ];
        return (
          void 0 !== r && h.push("v" + r),
          h.push(f + ".js"),
          "https://" + h.join("/")
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.urlForFeature = r);
    }),
    y = e(function (e, t) {
      "use strict";
      function r(e) {
        if (!e || "string" != typeof e.name || "string" != typeof e.version)
          throw (0, n.invalidFeature)(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
    }),
    v = e(function (e, t) {
      "use strict";
      function o(e, t) {
        var r = t || i.default;
        if (Array.isArray(e))
          return (
            e.forEach(a.default), void (0, f.loadMultipleErrorIfNotInBeta)(e, r)
          );
        throw (0, n.invalidFeaturesArray)(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o);
      var a = r(y),
        i = r(s);
    }),
    m = e(function (e, t) {
      "use strict";
      function r(e) {
        var t = null;
        return {
          get isObserving() {
            return Boolean(t);
          },
          enable: function () {
            this.isObserving ||
              (t = new MutationObserver(function (t) {
                for (var r = !1, o = 0; o < t.length; o++)
                  if (t[o].addedNodes.length) {
                    r = !0;
                    break;
                  }
                r && e();
              })).observe(document.body, { childList: !0, subtree: !0 });
          },
          disable: function () {
            this.isObserving && (t.disconnect(), (t = null));
          },
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
    }),
    g = e(function (e, t) {
      "use strict";
      function r(e, t) {
        var r = window.Shopify[e] && window.Shopify[e].q;
        r &&
          Array.isArray(r) &&
          r.forEach(function (e) {
            t.apply(void 0, o(e));
          }),
          (window.Shopify[e] = t);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
    });
  e(function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.resetRegistry = t.resetBetas = t.register = void 0);
    var o = r(a),
      n = r(v),
      i = r(h),
      s = r(m),
      u = r(g);
    (t.register = l.register),
      (t.resetBetas = c.resetBetas),
      (t.resetRegistry = l.reset),
      (window.Shopify = window.Shopify || {}),
      (window.Shopify.featureAssets = window.Shopify.featureAssets || {}),
      (window.Shopify.featureAssets["shop-js"] =
        window.Shopify.featureAssets["shop-js"] || {}),
      (0, l.register)({
        name: "model-viewer",
        version: "0.6",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="0.6"]',
      }),
      (0, l.register)({
        name: "model-viewer",
        version: "0.7",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="0.7"]',
      }),
      (0, l.register)({
        name: "model-viewer",
        version: "0.8",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="0.8"]',
      }),
      (0, l.register)({
        name: "model-viewer",
        version: "1.2",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="1.2"]',
      }),
      (0, l.register)({
        name: "model-viewer",
        version: "1.7",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="1.7"]',
      }),
      (0, l.register)({
        name: "model-viewer",
        version: "1.9",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="1.9"]',
      }),
      (0, l.register)({
        name: "model-viewer",
        version: "1.10",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="1.10"]',
      }),
      (0, l.register)({
        name: "model-viewer",
        version: "1.11",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="1.11"]',
      }),
      (0, l.register)({
        name: "model-viewer",
        version: "1.12",
        hasLegacy: !0,
        autoLoadSelector: 'model-viewer[data-shopify-feature="1.12"]',
      }),
      (0, l.register)({
        name: "shop-js/shopify-payment-terms",
        baseName: "shop-js",
        hasLegacy: !1,
        localized: !1,
        fileNames: Shopify.featureAssets["shop-js"]["shopify-payment-terms"] ||
          Shopify.featureAssets["shop-js"]["payment-terms"] || ["client"],
        autoLoadSelector: ["shopify-payment-terms"],
      }),
      (0, l.register)({
        name: "shop-js/shop-login-button",
        baseName: "shop-js",
        hasLegacy: !1,
        localized: !1,
        fileNames: Shopify.featureAssets["shop-js"]["login-button"] ||
          Shopify.featureAssets["shop-js"]["shop-login-button"] || ["client"],
        autoLoadSelector: ["shop-login-button"],
      }),
      (0, l.register)({
        name: "shop-js/shop-pay-checkout-sheet",
        baseName: "shop-js",
        hasLegacy: !1,
        localized: !1,
        fileNames: Shopify.featureAssets["shop-js"][
          "shop-pay-checkout-sheet"
        ] || ["client"],
        autoLoadSelector: ["shop-pay-checkout-sheet"],
      }),
      (0, l.register)({
        name: "shop-js/shop-toast-manager",
        baseName: "shop-js",
        hasLegacy: !1,
        localized: !1,
        fileNames: Shopify.featureAssets["shop-js"]["shop-toast-manager"] || [
          "client",
        ],
        autoLoadSelector: ["shop-toast-manager"],
      }),
      (0, l.register)({
        name: "shop-js/avatar",
        baseName: "shop-js",
        hasLegacy: !1,
        localized: !1,
        fileNames: Shopify.featureAssets["shop-js"].avatar || ["client"],
        autoLoadSelector: ["shop-user-avatar"],
      }),
      (0, l.register)({
        name: "model-viewer-ui",
        version: "1.0",
        hasLegacy: !0,
        localized: !0,
        localesSupported: [
          "bg-BG",
          "cs",
          "da",
          "de",
          "el",
          "es",
          "fi",
          "fr",
          "hi",
          "hr-HR",
          "hu",
          "id",
          "it",
          "ja",
          "ko",
          "lt-LT",
          "ms",
          "nb",
          "nl",
          "pl",
          "pt-BR",
          "pt-PT",
          "ro-RO",
          "ru",
          "sk-SK",
          "sl-SI",
          "sv",
          "th",
          "tr",
          "vi",
          "zh-CN",
          "zh-TW",
        ],
      }),
      (0, l.register)({
        name: "shopify-xr",
        version: "1.0",
        baseName: "shopify-xr-js",
        fileName: "shopify-xr",
        localized: !0,
        localesSupported: [
          "bg-BG",
          "cs",
          "da",
          "de",
          "el",
          "es",
          "fi",
          "fr",
          "hi",
          "hr-HR",
          "hu",
          "id",
          "it",
          "ja",
          "ko",
          "lt-LT",
          "ms",
          "nb",
          "nl",
          "pl",
          "pt-BR",
          "pt-PT",
          "ro-RO",
          "ru",
          "sk-SK",
          "sl-SI",
          "sv",
          "th",
          "tr",
          "vi",
          "zh-CN",
          "zh-TW",
        ],
      }),
      (0, l.register)({
        name: "video-ui",
        baseName: "shopify-plyr",
        version: "1.0",
        hasLegacy: !0,
        localized: !0,
        localesSupported: [
          "cs",
          "da",
          "de",
          "es",
          "fi",
          "fr",
          "hi",
          "it",
          "ja",
          "ko",
          "ms",
          "nb",
          "nl",
          "pl",
          "pt-BR",
          "pt-PT",
          "sv",
          "th",
          "tr",
          "zh-CN",
          "zh-TW",
        ],
      }),
      (0, l.register)({
        name: "video-ui",
        baseName: "shopify-plyr",
        version: "1.1",
        hasLegacy: !0,
        localized: !0,
        localesSupported: [
          "cs",
          "da",
          "de",
          "es",
          "fi",
          "fr",
          "hi",
          "it",
          "ja",
          "ko",
          "ms",
          "nb",
          "nl",
          "pl",
          "pt-BR",
          "pt-PT",
          "sv",
          "th",
          "tr",
          "zh-CN",
          "zh-TW",
        ],
      }),
      (0, l.register)({
        name: "video-ui",
        baseName: "plyr",
        version: "2.0",
        hasLegacy: !0,
        localized: !0,
        localesSupported: [
          "bg-BG",
          "cs",
          "da",
          "de",
          "el",
          "es",
          "fi",
          "fr",
          "hi",
          "hr-HR",
          "hu",
          "id",
          "it",
          "ja",
          "ko",
          "lt-LT",
          "ms",
          "nb",
          "nl",
          "pl",
          "pt-BR",
          "pt-PT",
          "ro-RO",
          "ru",
          "sk-SK",
          "sl-SI",
          "sv",
          "th",
          "tr",
          "vi",
          "zh-CN",
          "zh-TW",
        ],
        fileName: "shopify-plyr",
      }),
      (0, l.register)({
        name: "media-analytics",
        version: "0.1",
        hasLegacy: !0,
        fileName: "analytics",
        betaFlag: "rich-media-storefront-analytics",
        autoLoadSelector: [
          "video",
          "model-viewer",
          'a[rel="ar"]',
          'a[href*="package=com.google.ar.core;action=android.intent.action.VIEW;"]',
          "[data-shopify-xr]",
          'iframe[src^="https://www.youtube.com/embed/"]',
          'iframe[src^="https://player.vimeo.com/video/"]',
        ],
      }),
      (0, l.register)({
        name: "consent-tracking-api",
        version: "0.1",
        hasLegacy: !0,
      }),
      (0, l.register)({
        name: "consent-tracking-api",
        version: "0.2",
        hasLegacy: !0,
      }),
      (0, o.default)(function () {
        function e() {
          (0, i.default)(function (e) {
            if (e) throw e[0];
          });
        }
        (0, u.default)("loadFeatures", n.default),
          (0, u.default)("autoloadFeatures", i.default),
          e(),
          (0, s.default)(e).enable();
      });
  });
})(
  "undefined" != typeof global ? global : "undefined" != typeof window && window
);
