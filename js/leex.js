(function () {
  var e, t;
  (window.jdgmLeex = window.jdgmLeex || {}),
    (window.jdgmTheme = window.jdgmTheme || window.jdgmLeex),
    (jdgmLeex._enqueuedFunctions = []),
    (jdgmLeex.enque = function (t) {
      return (
        jdgmLeex._enqueuedFunctions.push(t),
        window.jdgm && window.jdgm._doneSetup ? e(jdgm.$) : void 0
      );
    }),
    document.addEventListener(
      "jdgm.doneSetup",
      function () {
        return e(jdgm.$);
      },
      !1
    ),
    (e = function (e) {
      return (jdgmLeex._enqueuedFunctions = e.grep(
        jdgmLeex._enqueuedFunctions,
        function (n) {
          return t(e, n), !1;
        }
      ));
    }),
    (t = function (e, t) {
      var n;
      try {
        return t(e);
      } catch (r) {
        return (n = r), console.error(n);
      }
    });
}).call(this),
  jdgmTheme.enque(function (e) {
    var t = e,
      n = void 0;
    !(function (t, r) {
      "function" == typeof n && n.amd
        ? n("jquery-bridget/jquery-bridget", ["jquery"], function (e) {
            return r(t, e);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = r(t, require("jquery")))
        : (t.jQueryBridget = r(t, e));
    })(window, function (e, t) {
      "use strict";
      function n(e, n, o) {
        function s(t, n, r) {
          var i,
            s = "$()." + e + '("' + n + '")';
          return (
            t.each(function (t, l) {
              var c = o.data(l, e);
              if (!c)
                return void a(
                  e + " not initialized. Cannot call methods, i.e. " + s
                );
              var u = c[n];
              if (!u || "_" == n.charAt(0))
                return void a(s + " is not a valid method");
              var d = u.apply(c, r);
              i = void 0 === i ? d : i;
            }),
            void 0 !== i ? i : t
          );
        }
        function l(t, r) {
          t.each(function (t, i) {
            var a = o.data(i, e);
            a ? (a.option(r), a._init()) : ((a = new n(i, r)), o.data(i, e, a));
          });
        }
        (o = o || t),
          o &&
            (n.prototype.option ||
              (n.prototype.option = function (e) {
                o.isPlainObject(e) &&
                  (this.options = o.extend(!0, this.options, e));
              }),
            (o.fn[e] = function (e) {
              if ("string" == typeof e) {
                var t = i.call(arguments, 1);
                return s(this, e, t);
              }
              return l(this, e), this;
            }),
            r(o));
      }
      function r(e) {
        !e || (e && e.bridget) || (e.bridget = n);
      }
      var i = Array.prototype.slice,
        o = e.console,
        a =
          "undefined" == typeof o
            ? function () {}
            : function (e) {
                o.error(e);
              };
      return r(t), n;
    }),
      (function (e, t) {
        "function" == typeof n && n.amd
          ? n("ev-emitter/ev-emitter", t)
          : "object" == typeof module && module.exports
          ? (module.exports = t())
          : (e.EvEmitter = t());
      })("undefined" != typeof window ? window : this, function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.on = function (e, t) {
            if (e && t) {
              var n = (this._events = this._events || {}),
                r = (n[e] = n[e] || []);
              return -1 == r.indexOf(t) && r.push(t), this;
            }
          }),
          (t.once = function (e, t) {
            if (e && t) {
              this.on(e, t);
              var n = (this._onceEvents = this._onceEvents || {}),
                r = (n[e] = n[e] || {});
              return (r[t] = !0), this;
            }
          }),
          (t.off = function (e, t) {
            var n = this._events && this._events[e];
            if (n && n.length) {
              var r = n.indexOf(t);
              return -1 != r && n.splice(r, 1), this;
            }
          }),
          (t.emitEvent = function (e, t) {
            var n = this._events && this._events[e];
            if (n && n.length) {
              var r = 0,
                i = n[r];
              t = t || [];
              for (var o = this._onceEvents && this._onceEvents[e]; i; ) {
                var a = o && o[i];
                a && (this.off(e, i), delete o[i]),
                  i.apply(this, t),
                  (r += a ? 0 : 1),
                  (i = n[r]);
              }
              return this;
            }
          }),
          e
        );
      }),
      (function (e, t) {
        "use strict";
        "function" == typeof n && n.amd
          ? n("get-size/get-size", [], function () {
              return t();
            })
          : "object" == typeof module && module.exports
          ? (module.exports = t())
          : (e.getSize = t());
      })(window, function () {
        "use strict";
        function e(e) {
          var t = parseFloat(e),
            n = -1 == e.indexOf("%") && !isNaN(t);
          return n && t;
        }
        function t() {}
        function n() {
          for (
            var e = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0,
              },
              t = 0;
            c > t;
            t++
          ) {
            var n = l[t];
            e[n] = 0;
          }
          return e;
        }
        function r(e) {
          var t = getComputedStyle(e);
          return (
            t ||
              s(
                "Style returned " +
                  t +
                  ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
              ),
            t
          );
        }
        function i() {
          if (!u) {
            u = !0;
            var t = document.createElement("div");
            (t.style.width = "200px"),
              (t.style.padding = "1px 2px 3px 4px"),
              (t.style.borderStyle = "solid"),
              (t.style.borderWidth = "1px 2px 3px 4px"),
              (t.style.boxSizing = "border-box");
            var n = document.body || document.documentElement;
            n.appendChild(t);
            var i = r(t);
            (o.isBoxSizeOuter = a = 200 == e(i.width)), n.removeChild(t);
          }
        }
        function o(t) {
          if (
            (i(),
            "string" == typeof t && (t = document.querySelector(t)),
            t && "object" == typeof t && t.nodeType)
          ) {
            var o = r(t);
            if ("none" == o.display) return n();
            var s = {};
            (s.width = t.offsetWidth), (s.height = t.offsetHeight);
            for (
              var u = (s.isBorderBox = "border-box" == o.boxSizing), d = 0;
              c > d;
              d++
            ) {
              var p = l[d],
                h = o[p],
                f = parseFloat(h);
              s[p] = isNaN(f) ? 0 : f;
            }
            var m = s.paddingLeft + s.paddingRight,
              g = s.paddingTop + s.paddingBottom,
              v = s.marginLeft + s.marginRight,
              _ = s.marginTop + s.marginBottom,
              b = s.borderLeftWidth + s.borderRightWidth,
              y = s.borderTopWidth + s.borderBottomWidth,
              w = u && a,
              x = e(o.width);
            x !== !1 && (s.width = x + (w ? 0 : m + b));
            var k = e(o.height);
            return (
              k !== !1 && (s.height = k + (w ? 0 : g + y)),
              (s.innerWidth = s.width - (m + b)),
              (s.innerHeight = s.height - (g + y)),
              (s.outerWidth = s.width + v),
              (s.outerHeight = s.height + _),
              s
            );
          }
        }
        var a,
          s =
            "undefined" == typeof console
              ? t
              : function (e) {
                  console.error(e);
                },
          l = [
            "paddingLeft",
            "paddingRight",
            "paddingTop",
            "paddingBottom",
            "marginLeft",
            "marginRight",
            "marginTop",
            "marginBottom",
            "borderLeftWidth",
            "borderRightWidth",
            "borderTopWidth",
            "borderBottomWidth",
          ],
          c = l.length,
          u = !1;
        return o;
      }),
      (function (e, t) {
        "use strict";
        "function" == typeof n && n.amd
          ? n("desandro-matches-selector/matches-selector", t)
          : "object" == typeof module && module.exports
          ? (module.exports = t())
          : (e.matchesSelector = t());
      })(window, function () {
        "use strict";
        var e = (function () {
          var e = window.Element.prototype;
          if (e.matches) return "matches";
          if (e.matchesSelector) return "matchesSelector";
          for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
            var r = t[n],
              i = r + "MatchesSelector";
            if (e[i]) return i;
          }
        })();
        return function (t, n) {
          return t[e](n);
        };
      }),
      (function (e, t) {
        "function" == typeof n && n.amd
          ? n(
              "fizzy-ui-utils/utils",
              ["desandro-matches-selector/matches-selector"],
              function (n) {
                return t(e, n);
              }
            )
          : "object" == typeof module && module.exports
          ? (module.exports = t(e, require("desandro-matches-selector")))
          : (e.fizzyUIUtils = t(e, e.matchesSelector));
      })(window, function (e, n) {
        var r = {};
        (r.extend = function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }),
          (r.modulo = function (e, t) {
            return ((e % t) + t) % t;
          }),
          (r.makeArray = function (e) {
            var t = [];
            if (Array.isArray(e)) t = e;
            else if (e && "object" == typeof e && "number" == typeof e.length)
              for (var n = 0; n < e.length; n++) t.push(e[n]);
            else t.push(e);
            return t;
          }),
          (r.removeFrom = function (e, t) {
            var n = e.indexOf(t);
            -1 != n && e.splice(n, 1);
          }),
          (r.getParent = function (e, t) {
            for (; e != document.body; )
              if (((e = e.parentNode), n(e, t))) return e;
          }),
          (r.getQueryElement = function (e) {
            return "string" == typeof e ? document.querySelector(e) : e;
          }),
          (r.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e);
          }),
          (r.filterFindElements = function (e, t) {
            e = r.makeArray(e);
            var i = [];
            return (
              e.forEach(function (e) {
                if (e instanceof HTMLElement) {
                  if (!t) return void i.push(e);
                  n(e, t) && i.push(e);
                  for (var r = e.querySelectorAll(t), o = 0; o < r.length; o++)
                    i.push(r[o]);
                }
              }),
              i
            );
          }),
          (r.debounceMethod = function (e, t, n) {
            var r = e.prototype[t],
              i = t + "Timeout";
            e.prototype[t] = function () {
              var e = this[i];
              e && clearTimeout(e);
              var t = arguments,
                o = this;
              this[i] = setTimeout(function () {
                r.apply(o, t), delete o[i];
              }, n || 100);
            };
          }),
          (r.docReady = function (e) {
            var t = document.readyState;
            "complete" == t || "interactive" == t
              ? setTimeout(e)
              : document.addEventListener("DOMContentLoaded", e);
          }),
          (r.toDashed = function (e) {
            return e
              .replace(/(.)([A-Z])/g, function (e, t, n) {
                return t + "-" + n;
              })
              .toLowerCase();
          });
        var i = e.console;
        return (
          (r.htmlInit = function (e, n) {
            r.docReady(function () {
              var o = r.toDashed(n),
                a = "data-" + o,
                s = document.querySelectorAll("[" + a + "]"),
                l = document.querySelectorAll(".js-" + o),
                c = r.makeArray(s).concat(r.makeArray(l)),
                u = a + "-options";
              c.forEach(function (r) {
                var o,
                  s = r.getAttribute(a) || r.getAttribute(u);
                try {
                  o = s && JSON.parse(s);
                } catch (l) {
                  return void (
                    i &&
                    i.error(
                      "Error parsing " + a + " on " + r.className + ": " + l
                    )
                  );
                }
                var c = new e(r, o);
                t && t.data(r, n, c);
              });
            });
          }),
          r
        );
      }),
      (function (e, t) {
        "function" == typeof n && n.amd
          ? n(
              "outlayer/item",
              ["ev-emitter/ev-emitter", "get-size/get-size"],
              t
            )
          : "object" == typeof module && module.exports
          ? (module.exports = t(require("ev-emitter"), require("get-size")))
          : ((e.Outlayer = {}), (e.Outlayer.Item = t(e.EvEmitter, e.getSize)));
      })(window, function (e, t) {
        "use strict";
        function n(e) {
          for (var t in e) return !1;
          return (t = null), !0;
        }
        function r(e, t) {
          e &&
            ((this.element = e),
            (this.layout = t),
            (this.position = { x: 0, y: 0 }),
            this._create());
        }
        function i(e) {
          return e.replace(/([A-Z])/g, function (e) {
            return "-" + e.toLowerCase();
          });
        }
        var o = document.documentElement.style,
          a =
            "string" == typeof o.transition ? "transition" : "WebkitTransition",
          s = "string" == typeof o.transform ? "transform" : "WebkitTransform",
          l = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend",
          }[a],
          c = {
            transform: s,
            transition: a,
            transitionDuration: a + "Duration",
            transitionProperty: a + "Property",
            transitionDelay: a + "Delay",
          },
          u = (r.prototype = Object.create(e.prototype));
        (u.constructor = r),
          (u._create = function () {
            (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
              this.css({ position: "absolute" });
          }),
          (u.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e);
          }),
          (u.getSize = function () {
            this.size = t(this.element);
          }),
          (u.css = function (e) {
            var t = this.element.style;
            for (var n in e) {
              var r = c[n] || n;
              t[r] = e[n];
            }
          }),
          (u.getPosition = function () {
            var e = getComputedStyle(this.element),
              t = this.layout._getOption("originLeft"),
              n = this.layout._getOption("originTop"),
              r = e[t ? "left" : "right"],
              i = e[n ? "top" : "bottom"],
              o = this.layout.size,
              a =
                -1 != r.indexOf("%")
                  ? (parseFloat(r) / 100) * o.width
                  : parseInt(r, 10),
              s =
                -1 != i.indexOf("%")
                  ? (parseFloat(i) / 100) * o.height
                  : parseInt(i, 10);
            (a = isNaN(a) ? 0 : a),
              (s = isNaN(s) ? 0 : s),
              (a -= t ? o.paddingLeft : o.paddingRight),
              (s -= n ? o.paddingTop : o.paddingBottom),
              (this.position.x = a),
              (this.position.y = s);
          }),
          (u.layoutPosition = function () {
            var e = this.layout.size,
              t = {},
              n = this.layout._getOption("originLeft"),
              r = this.layout._getOption("originTop"),
              i = n ? "paddingLeft" : "paddingRight",
              o = n ? "left" : "right",
              a = n ? "right" : "left",
              s = this.position.x + e[i];
            (t[o] = this.getXValue(s)), (t[a] = "");
            var l = r ? "paddingTop" : "paddingBottom",
              c = r ? "top" : "bottom",
              u = r ? "bottom" : "top",
              d = this.position.y + e[l];
            (t[c] = this.getYValue(d)),
              (t[u] = ""),
              this.css(t),
              this.emitEvent("layout", [this]);
          }),
          (u.getXValue = function (e) {
            var t = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !t
              ? (e / this.layout.size.width) * 100 + "%"
              : e + "px";
          }),
          (u.getYValue = function (e) {
            var t = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && t
              ? (e / this.layout.size.height) * 100 + "%"
              : e + "px";
          }),
          (u._transitionTo = function (e, t) {
            this.getPosition();
            var n = this.position.x,
              r = this.position.y,
              i = parseInt(e, 10),
              o = parseInt(t, 10),
              a = i === this.position.x && o === this.position.y;
            if ((this.setPosition(e, t), a && !this.isTransitioning))
              return void this.layoutPosition();
            var s = e - n,
              l = t - r,
              c = {};
            (c.transform = this.getTranslate(s, l)),
              this.transition({
                to: c,
                onTransitionEnd: { transform: this.layoutPosition },
                isCleaning: !0,
              });
          }),
          (u.getTranslate = function (e, t) {
            var n = this.layout._getOption("originLeft"),
              r = this.layout._getOption("originTop");
            return (
              (e = n ? e : -e),
              (t = r ? t : -t),
              "translate3d(" + e + "px, " + t + "px, 0)"
            );
          }),
          (u.goTo = function (e, t) {
            this.setPosition(e, t), this.layoutPosition();
          }),
          (u.moveTo = u._transitionTo),
          (u.setPosition = function (e, t) {
            (this.position.x = parseInt(e, 10)),
              (this.position.y = parseInt(t, 10));
          }),
          (u._nonTransition = function (e) {
            this.css(e.to), e.isCleaning && this._removeStyles(e.to);
            for (var t in e.onTransitionEnd) e.onTransitionEnd[t].call(this);
          }),
          (u.transition = function (e) {
            if (!parseFloat(this.layout.options.transitionDuration))
              return void this._nonTransition(e);
            var t = this._transn;
            for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
            for (n in e.to)
              (t.ingProperties[n] = !0), e.isCleaning && (t.clean[n] = !0);
            if (e.from) {
              this.css(e.from);
              var r = this.element.offsetHeight;
              r = null;
            }
            this.enableTransition(e.to),
              this.css(e.to),
              (this.isTransitioning = !0);
          });
        var d = "opacity," + i(s);
        (u.enableTransition = function () {
          if (!this.isTransitioning) {
            var e = this.layout.options.transitionDuration;
            (e = "number" == typeof e ? e + "ms" : e),
              this.css({
                transitionProperty: d,
                transitionDuration: e,
                transitionDelay: this.staggerDelay || 0,
              }),
              this.element.addEventListener(l, this, !1);
          }
        }),
          (u.onwebkitTransitionEnd = function (e) {
            this.ontransitionend(e);
          }),
          (u.onotransitionend = function (e) {
            this.ontransitionend(e);
          });
        var p = { "-webkit-transform": "transform" };
        (u.ontransitionend = function (e) {
          if (e.target === this.element) {
            var t = this._transn,
              r = p[e.propertyName] || e.propertyName;
            if (
              (delete t.ingProperties[r],
              n(t.ingProperties) && this.disableTransition(),
              r in t.clean &&
                ((this.element.style[e.propertyName] = ""), delete t.clean[r]),
              r in t.onEnd)
            ) {
              var i = t.onEnd[r];
              i.call(this), delete t.onEnd[r];
            }
            this.emitEvent("transitionEnd", [this]);
          }
        }),
          (u.disableTransition = function () {
            this.removeTransitionStyles(),
              this.element.removeEventListener(l, this, !1),
              (this.isTransitioning = !1);
          }),
          (u._removeStyles = function (e) {
            var t = {};
            for (var n in e) t[n] = "";
            this.css(t);
          });
        var h = {
          transitionProperty: "",
          transitionDuration: "",
          transitionDelay: "",
        };
        return (
          (u.removeTransitionStyles = function () {
            this.css(h);
          }),
          (u.stagger = function (e) {
            (e = isNaN(e) ? 0 : e), (this.staggerDelay = e + "ms");
          }),
          (u.removeElem = function () {
            this.element.parentNode.removeChild(this.element),
              this.css({ display: "" }),
              this.emitEvent("remove", [this]);
          }),
          (u.remove = function () {
            return a && parseFloat(this.layout.options.transitionDuration)
              ? (this.once("transitionEnd", function () {
                  this.removeElem();
                }),
                void this.hide())
              : void this.removeElem();
          }),
          (u.reveal = function () {
            delete this.isHidden, this.css({ display: "" });
            var e = this.layout.options,
              t = {},
              n = this.getHideRevealTransitionEndProperty("visibleStyle");
            (t[n] = this.onRevealTransitionEnd),
              this.transition({
                from: e.hiddenStyle,
                to: e.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: t,
              });
          }),
          (u.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal");
          }),
          (u.getHideRevealTransitionEndProperty = function (e) {
            var t = this.layout.options[e];
            if (t.opacity) return "opacity";
            for (var n in t) return n;
          }),
          (u.hide = function () {
            (this.isHidden = !0), this.css({ display: "" });
            var e = this.layout.options,
              t = {},
              n = this.getHideRevealTransitionEndProperty("hiddenStyle");
            (t[n] = this.onHideTransitionEnd),
              this.transition({
                from: e.visibleStyle,
                to: e.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: t,
              });
          }),
          (u.onHideTransitionEnd = function () {
            this.isHidden &&
              (this.css({ display: "none" }), this.emitEvent("hide"));
          }),
          (u.destroy = function () {
            this.css({
              position: "",
              left: "",
              right: "",
              top: "",
              bottom: "",
              transition: "",
              transform: "",
            });
          }),
          r
        );
      }),
      (function (e, t) {
        "use strict";
        "function" == typeof n && n.amd
          ? n(
              "outlayer/outlayer",
              [
                "ev-emitter/ev-emitter",
                "get-size/get-size",
                "fizzy-ui-utils/utils",
                "./item",
              ],
              function (n, r, i, o) {
                return t(e, n, r, i, o);
              }
            )
          : "object" == typeof module && module.exports
          ? (module.exports = t(
              e,
              require("ev-emitter"),
              require("get-size"),
              require("fizzy-ui-utils"),
              require("./item")
            ))
          : (e.Outlayer = t(
              e,
              e.EvEmitter,
              e.getSize,
              e.fizzyUIUtils,
              e.Outlayer.Item
            ));
      })(window, function (e, n, r, i, o) {
        "use strict";
        function a(e, n) {
          var r = i.getQueryElement(e);
          if (!r)
            return void (
              c &&
              c.error(
                "Bad element for " +
                  this.constructor.namespace +
                  ": " +
                  (r || e)
              )
            );
          (this.element = r),
            t && (this.$element = t(this.element)),
            (this.options = i.extend({}, this.constructor.defaults)),
            this.option(n);
          var o = ++d;
          (this.element.outlayerGUID = o), (p[o] = this), this._create();
          var a = this._getOption("initLayout");
          a && this.layout();
        }
        function s(e) {
          function t() {
            e.apply(this, arguments);
          }
          return (
            (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            t
          );
        }
        function l(e) {
          if ("number" == typeof e) return e;
          var t = e.match(/(^\d*\.?\d*)(\w*)/),
            n = t && t[1],
            r = t && t[2];
          if (!n.length) return 0;
          n = parseFloat(n);
          var i = f[r] || 1;
          return n * i;
        }
        var c = e.console,
          u = function () {},
          d = 0,
          p = {};
        (a.namespace = "outlayer"),
          (a.Item = o),
          (a.defaults = {
            containerStyle: { position: "relative" },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
            visibleStyle: { opacity: 1, transform: "scale(1)" },
          });
        var h = a.prototype;
        i.extend(h, n.prototype),
          (h.option = function (e) {
            i.extend(this.options, e);
          }),
          (h._getOption = function (e) {
            var t = this.constructor.compatOptions[e];
            return t && void 0 !== this.options[t]
              ? this.options[t]
              : this.options[e];
          }),
          (a.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer",
          }),
          (h._create = function () {
            this.reloadItems(),
              (this.stamps = []),
              this.stamp(this.options.stamp),
              i.extend(this.element.style, this.options.containerStyle);
            var e = this._getOption("resize");
            e && this.bindResize();
          }),
          (h.reloadItems = function () {
            this.items = this._itemize(this.element.children);
          }),
          (h._itemize = function (e) {
            for (
              var t = this._filterFindItemElements(e),
                n = this.constructor.Item,
                r = [],
                i = 0;
              i < t.length;
              i++
            ) {
              var o = t[i],
                a = new n(o, this);
              r.push(a);
            }
            return r;
          }),
          (h._filterFindItemElements = function (e) {
            return i.filterFindElements(e, this.options.itemSelector);
          }),
          (h.getItemElements = function () {
            return this.items.map(function (e) {
              return e.element;
            });
          }),
          (h.layout = function () {
            this._resetLayout(), this._manageStamps();
            var e = this._getOption("layoutInstant"),
              t = void 0 !== e ? e : !this._isLayoutInited;
            this.layoutItems(this.items, t), (this._isLayoutInited = !0);
          }),
          (h._init = h.layout),
          (h._resetLayout = function () {
            this.getSize();
          }),
          (h.getSize = function () {
            this.size = r(this.element);
          }),
          (h._getMeasurement = function (e, t) {
            var n,
              i = this.options[e];
            i
              ? ("string" == typeof i
                  ? (n = this.element.querySelector(i))
                  : i instanceof HTMLElement && (n = i),
                (this[e] = n ? r(n)[t] : i))
              : (this[e] = 0);
          }),
          (h.layoutItems = function (e, t) {
            (e = this._getItemsForLayout(e)),
              this._layoutItems(e, t),
              this._postLayout();
          }),
          (h._getItemsForLayout = function (e) {
            return e.filter(function (e) {
              return !e.isIgnored;
            });
          }),
          (h._layoutItems = function (e, t) {
            if ((this._emitCompleteOnItems("layout", e), e && e.length)) {
              var n = [];
              e.forEach(function (e) {
                var r = this._getItemLayoutPosition(e);
                (r.item = e), (r.isInstant = t || e.isLayoutInstant), n.push(r);
              }, this),
                this._processLayoutQueue(n);
            }
          }),
          (h._getItemLayoutPosition = function () {
            return { x: 0, y: 0 };
          }),
          (h._processLayoutQueue = function (e) {
            this.updateStagger(),
              e.forEach(function (e, t) {
                this._positionItem(e.item, e.x, e.y, e.isInstant, t);
              }, this);
          }),
          (h.updateStagger = function () {
            var e = this.options.stagger;
            return null === e || void 0 === e
              ? void (this.stagger = 0)
              : ((this.stagger = l(e)), this.stagger);
          }),
          (h._positionItem = function (e, t, n, r, i) {
            r ? e.goTo(t, n) : (e.stagger(i * this.stagger), e.moveTo(t, n));
          }),
          (h._postLayout = function () {
            this.resizeContainer();
          }),
          (h.resizeContainer = function () {
            var e = this._getOption("resizeContainer");
            if (e) {
              var t = this._getContainerSize();
              t &&
                (this._setContainerMeasure(t.width, !0),
                this._setContainerMeasure(t.height, !1));
            }
          }),
          (h._getContainerSize = u),
          (h._setContainerMeasure = function (e, t) {
            if (void 0 !== e) {
              var n = this.size;
              n.isBorderBox &&
                (e += t
                  ? n.paddingLeft +
                    n.paddingRight +
                    n.borderLeftWidth +
                    n.borderRightWidth
                  : n.paddingBottom +
                    n.paddingTop +
                    n.borderTopWidth +
                    n.borderBottomWidth),
                (e = Math.max(e, 0)),
                (this.element.style[t ? "width" : "height"] = e + "px");
            }
          }),
          (h._emitCompleteOnItems = function (e, t) {
            function n() {
              i.dispatchEvent(e + "Complete", null, [t]);
            }
            function r() {
              a++, a == o && n();
            }
            var i = this,
              o = t.length;
            if (!t || !o) return void n();
            var a = 0;
            t.forEach(function (t) {
              t.once(e, r);
            });
          }),
          (h.dispatchEvent = function (e, n, r) {
            var i = n ? [n].concat(r) : r;
            if ((this.emitEvent(e, i), t))
              if (((this.$element = this.$element || t(this.element)), n)) {
                var o = t.Event(n);
                (o.type = e), this.$element.trigger(o, r);
              } else this.$element.trigger(e, r);
          }),
          (h.ignore = function (e) {
            var t = this.getItem(e);
            t && (t.isIgnored = !0);
          }),
          (h.unignore = function (e) {
            var t = this.getItem(e);
            t && delete t.isIgnored;
          }),
          (h.stamp = function (e) {
            (e = this._find(e)),
              e &&
                ((this.stamps = this.stamps.concat(e)),
                e.forEach(this.ignore, this));
          }),
          (h.unstamp = function (e) {
            (e = this._find(e)),
              e &&
                e.forEach(function (e) {
                  i.removeFrom(this.stamps, e), this.unignore(e);
                }, this);
          }),
          (h._find = function (e) {
            return e
              ? ("string" == typeof e && (e = this.element.querySelectorAll(e)),
                (e = i.makeArray(e)))
              : void 0;
          }),
          (h._manageStamps = function () {
            this.stamps &&
              this.stamps.length &&
              (this._getBoundingRect(),
              this.stamps.forEach(this._manageStamp, this));
          }),
          (h._getBoundingRect = function () {
            var e = this.element.getBoundingClientRect(),
              t = this.size;
            this._boundingRect = {
              left: e.left + t.paddingLeft + t.borderLeftWidth,
              top: e.top + t.paddingTop + t.borderTopWidth,
              right: e.right - (t.paddingRight + t.borderRightWidth),
              bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth),
            };
          }),
          (h._manageStamp = u),
          (h._getElementOffset = function (e) {
            var t = e.getBoundingClientRect(),
              n = this._boundingRect,
              i = r(e),
              o = {
                left: t.left - n.left - i.marginLeft,
                top: t.top - n.top - i.marginTop,
                right: n.right - t.right - i.marginRight,
                bottom: n.bottom - t.bottom - i.marginBottom,
              };
            return o;
          }),
          (h.handleEvent = i.handleEvent),
          (h.bindResize = function () {
            e.addEventListener("resize", this), (this.isResizeBound = !0);
          }),
          (h.unbindResize = function () {
            e.removeEventListener("resize", this), (this.isResizeBound = !1);
          }),
          (h.onresize = function () {
            this.resize();
          }),
          i.debounceMethod(a, "onresize", 100),
          (h.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout();
          }),
          (h.needsResizeLayout = function () {
            var e = r(this.element),
              t = this.size && e;
            return t && e.innerWidth !== this.size.innerWidth;
          }),
          (h.addItems = function (e) {
            var t = this._itemize(e);
            return t.length && (this.items = this.items.concat(t)), t;
          }),
          (h.appended = function (e) {
            var t = this.addItems(e);
            t.length && (this.layoutItems(t, !0), this.reveal(t));
          }),
          (h.prepended = function (e) {
            var t = this._itemize(e);
            if (t.length) {
              var n = this.items.slice(0);
              (this.items = t.concat(n)),
                this._resetLayout(),
                this._manageStamps(),
                this.layoutItems(t, !0),
                this.reveal(t),
                this.layoutItems(n);
            }
          }),
          (h.reveal = function (e) {
            if ((this._emitCompleteOnItems("reveal", e), e && e.length)) {
              var t = this.updateStagger();
              e.forEach(function (e, n) {
                e.stagger(n * t), e.reveal();
              });
            }
          }),
          (h.hide = function (e) {
            if ((this._emitCompleteOnItems("hide", e), e && e.length)) {
              var t = this.updateStagger();
              e.forEach(function (e, n) {
                e.stagger(n * t), e.hide();
              });
            }
          }),
          (h.revealItemElements = function (e) {
            var t = this.getItems(e);
            this.reveal(t);
          }),
          (h.hideItemElements = function (e) {
            var t = this.getItems(e);
            this.hide(t);
          }),
          (h.getItem = function (e) {
            for (var t = 0; t < this.items.length; t++) {
              var n = this.items[t];
              if (n.element == e) return n;
            }
          }),
          (h.getItems = function (e) {
            e = i.makeArray(e);
            var t = [];
            return (
              e.forEach(function (e) {
                var n = this.getItem(e);
                n && t.push(n);
              }, this),
              t
            );
          }),
          (h.remove = function (e) {
            var t = this.getItems(e);
            this._emitCompleteOnItems("remove", t),
              t &&
                t.length &&
                t.forEach(function (e) {
                  e.remove(), i.removeFrom(this.items, e);
                }, this);
          }),
          (h.destroy = function () {
            var e = this.element.style;
            (e.height = ""),
              (e.position = ""),
              (e.width = ""),
              this.items.forEach(function (e) {
                e.destroy();
              }),
              this.unbindResize();
            var n = this.element.outlayerGUID;
            delete p[n],
              delete this.element.outlayerGUID,
              t && t.removeData(this.element, this.constructor.namespace);
          }),
          (a.data = function (e) {
            e = i.getQueryElement(e);
            var t = e && e.outlayerGUID;
            return t && p[t];
          }),
          (a.create = function (e, n) {
            var r = s(a);
            return (
              (r.defaults = i.extend({}, a.defaults)),
              i.extend(r.defaults, n),
              (r.compatOptions = i.extend({}, a.compatOptions)),
              (r.namespace = e),
              (r.data = a.data),
              (r.Item = s(o)),
              i.htmlInit(r, e),
              t && t.bridget && t.bridget(e, r),
              r
            );
          });
        var f = { ms: 1, s: 1e3 };
        return (a.Item = o), a;
      }),
      (function (e, t) {
        "function" == typeof n && n.amd
          ? n(["outlayer/outlayer", "get-size/get-size"], t)
          : "object" == typeof module && module.exports
          ? (module.exports = t(require("outlayer"), require("get-size")))
          : (e.Masonry = t(e.Outlayer, e.getSize));
      })(window, function (e, t) {
        var n = e.create("masonry");
        n.compatOptions.fitWidth = "isFitWidth";
        var r = n.prototype;
        return (
          (r._resetLayout = function () {
            this.getSize(),
              this._getMeasurement("columnWidth", "outerWidth"),
              this._getMeasurement("gutter", "outerWidth"),
              this.measureColumns(),
              (this.colYs = []);
            for (var e = 0; e < this.cols; e++) this.colYs.push(0);
            (this.maxY = 0), (this.horizontalColIndex = 0);
          }),
          (r.measureColumns = function () {
            if ((this.getContainerWidth(), !this.columnWidth)) {
              var e = this.items[0],
                n = e && e.element;
              this.columnWidth = (n && t(n).outerWidth) || this.containerWidth;
            }
            var r = (this.columnWidth += this.gutter),
              i = this.containerWidth + this.gutter,
              o = i / r,
              a = r - (i % r),
              s = a && 1 > a ? "round" : "floor";
            (o = Math[s](o)), (this.cols = Math.max(o, 1));
          }),
          (r.getContainerWidth = function () {
            var e = this._getOption("fitWidth"),
              n = e ? this.element.parentNode : this.element,
              r = t(n);
            this.containerWidth = r && r.innerWidth;
          }),
          (r._getItemLayoutPosition = function (e) {
            e.getSize();
            var t = e.size.outerWidth % this.columnWidth,
              n = t && 1 > t ? "round" : "ceil",
              r = Math[n](e.size.outerWidth / this.columnWidth);
            r = Math.min(r, this.cols);
            for (
              var i = this.options.horizontalOrder
                  ? "_getHorizontalColPosition"
                  : "_getTopColPosition",
                o = this[i](r, e),
                a = { x: this.columnWidth * o.col, y: o.y },
                s = o.y + e.size.outerHeight,
                l = r + o.col,
                c = o.col;
              l > c;
              c++
            )
              this.colYs[c] = s;
            return a;
          }),
          (r._getTopColPosition = function (e) {
            var t = this._getTopColGroup(e),
              n = Math.min.apply(Math, t);
            return { col: t.indexOf(n), y: n };
          }),
          (r._getTopColGroup = function (e) {
            if (2 > e) return this.colYs;
            for (var t = [], n = this.cols + 1 - e, r = 0; n > r; r++)
              t[r] = this._getColGroupY(r, e);
            return t;
          }),
          (r._getColGroupY = function (e, t) {
            if (2 > t) return this.colYs[e];
            var n = this.colYs.slice(e, e + t);
            return Math.max.apply(Math, n);
          }),
          (r._getHorizontalColPosition = function (e, t) {
            var n = this.horizontalColIndex % this.cols,
              r = e > 1 && n + e > this.cols;
            n = r ? 0 : n;
            var i = t.size.outerWidth && t.size.outerHeight;
            return (
              (this.horizontalColIndex = i ? n + e : this.horizontalColIndex),
              { col: n, y: this._getColGroupY(n, e) }
            );
          }),
          (r._manageStamp = function (e) {
            var n = t(e),
              r = this._getElementOffset(e),
              i = this._getOption("originLeft"),
              o = i ? r.left : r.right,
              a = o + n.outerWidth,
              s = Math.floor(o / this.columnWidth);
            s = Math.max(0, s);
            var l = Math.floor(a / this.columnWidth);
            (l -= a % this.columnWidth ? 0 : 1),
              (l = Math.min(this.cols - 1, l));
            for (
              var c = this._getOption("originTop"),
                u = (c ? r.top : r.bottom) + n.outerHeight,
                d = s;
              l >= d;
              d++
            )
              this.colYs[d] = Math.max(u, this.colYs[d]);
          }),
          (r._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var e = { height: this.maxY };
            return (
              this._getOption("fitWidth") &&
                (e.width = this._getContainerFitWidth()),
              e
            );
          }),
          (r._getContainerFitWidth = function () {
            for (var e = 0, t = this.cols; --t && 0 === this.colYs[t]; ) e++;
            return (this.cols - e) * this.columnWidth - this.gutter;
          }),
          (r.needsResizeLayout = function () {
            var e = this.containerWidth;
            return this.getContainerWidth(), e != this.containerWidth;
          }),
          n
        );
      });
  }),
  jdgmTheme.enque(function (e) {
    var t = void 0;
    !(function (e, n) {
      "function" == typeof t && t.amd
        ? t("ev-emitter/ev-emitter", n)
        : "object" == typeof module && module.exports
        ? (module.exports = n())
        : (e.EvEmitter = n());
    })(this, function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.on = function (e, t) {
          if (e && t) {
            var n = (this._events = this._events || {}),
              r = (n[e] = n[e] || []);
            return -1 == r.indexOf(t) && r.push(t), this;
          }
        }),
        (t.once = function (e, t) {
          if (e && t) {
            this.on(e, t);
            var n = (this._onceEvents = this._onceEvents || {}),
              r = (n[e] = n[e] || []);
            return (r[t] = !0), this;
          }
        }),
        (t.off = function (e, t) {
          var n = this._events && this._events[e];
          if (n && n.length) {
            var r = n.indexOf(t);
            return -1 != r && n.splice(r, 1), this;
          }
        }),
        (t.emitEvent = function (e, t) {
          var n = this._events && this._events[e];
          if (n && n.length) {
            var r = 0,
              i = n[r];
            t = t || [];
            for (var o = this._onceEvents && this._onceEvents[e]; i; ) {
              var a = o && o[i];
              a && (this.off(e, i), delete o[i]),
                i.apply(this, t),
                (r += a ? 0 : 1),
                (i = n[r]);
            }
            return this;
          }
        }),
        e
      );
    }),
      (function (e, n) {
        "use strict";
        "function" == typeof t && t.amd
          ? t(["ev-emitter/ev-emitter"], function (t) {
              return n(e, t);
            })
          : "object" == typeof module && module.exports
          ? (module.exports = n(e, require("ev-emitter")))
          : (e.imagesLoaded = n(e, e.EvEmitter));
      })(window, function (t, n) {
        function r(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function i(e) {
          var t = [];
          if (Array.isArray(e)) t = e;
          else if ("number" == typeof e.length)
            for (var n = 0; n < e.length; n++) t.push(e[n]);
          else t.push(e);
          return t;
        }
        function o(t, n, a) {
          return this instanceof o
            ? ("string" == typeof t && (t = document.querySelectorAll(t)),
              (this.elements = i(t)),
              (this.options = r({}, this.options)),
              "function" == typeof n ? (a = n) : r(this.options, n),
              a && this.on("always", a),
              this.getImages(),
              e && (this.jqDeferred = new e.Deferred()),
              void setTimeout(
                function () {
                  this.check();
                }.bind(this)
              ))
            : new o(t, n, a);
        }
        function a(e) {
          this.img = e;
        }
        function s(e, t) {
          (this.url = e), (this.element = t), (this.img = new Image());
        }
        var l = t.console;
        (o.prototype = Object.create(n.prototype)),
          (o.prototype.options = {}),
          (o.prototype.getImages = function () {
            (this.images = []),
              this.elements.forEach(this.addElementImages, this);
          }),
          (o.prototype.addElementImages = function (e) {
            "IMG" == e.nodeName && this.addImage(e),
              this.options.background === !0 &&
                this.addElementBackgroundImages(e);
            var t = e.nodeType;
            if (t && c[t]) {
              for (
                var n = e.querySelectorAll("img"), r = 0;
                r < n.length;
                r++
              ) {
                var i = n[r];
                this.addImage(i);
              }
              if ("string" == typeof this.options.background) {
                var o = e.querySelectorAll(this.options.background);
                for (r = 0; r < o.length; r++) {
                  var a = o[r];
                  this.addElementBackgroundImages(a);
                }
              }
            }
          });
        var c = { 1: !0, 9: !0, 11: !0 };
        return (
          (o.prototype.addElementBackgroundImages = function (e) {
            var t = getComputedStyle(e);
            if (t)
              for (
                var n = /url\((['"])?(.*?)\1\)/gi,
                  r = n.exec(t.backgroundImage);
                null !== r;

              ) {
                var i = r && r[2];
                i && this.addBackground(i, e), (r = n.exec(t.backgroundImage));
              }
          }),
          (o.prototype.addImage = function (e) {
            var t = new a(e);
            this.images.push(t);
          }),
          (o.prototype.addBackground = function (e, t) {
            var n = new s(e, t);
            this.images.push(n);
          }),
          (o.prototype.check = function () {
            function e(e, n, r) {
              setTimeout(function () {
                t.progress(e, n, r);
              });
            }
            var t = this;
            return (
              (this.progressedCount = 0),
              (this.hasAnyBroken = !1),
              this.images.length
                ? void this.images.forEach(function (t) {
                    t.once("progress", e), t.check();
                  })
                : void this.complete()
            );
          }),
          (o.prototype.progress = function (e, t, n) {
            this.progressedCount++,
              (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
              this.emitEvent("progress", [this, e, t]),
              this.jqDeferred &&
                this.jqDeferred.notify &&
                this.jqDeferred.notify(this, e),
              this.progressedCount == this.images.length && this.complete(),
              this.options.debug && l && l.log("progress: " + n, e, t);
          }),
          (o.prototype.complete = function () {
            var e = this.hasAnyBroken ? "fail" : "done";
            if (
              ((this.isComplete = !0),
              this.emitEvent(e, [this]),
              this.emitEvent("always", [this]),
              this.jqDeferred)
            ) {
              var t = this.hasAnyBroken ? "reject" : "resolve";
              this.jqDeferred[t](this);
            }
          }),
          (a.prototype = Object.create(n.prototype)),
          (a.prototype.check = function () {
            var e = this.getIsImageComplete();
            return e
              ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
              : ((this.proxyImage = new Image()),
                this.proxyImage.addEventListener("load", this),
                this.proxyImage.addEventListener("error", this),
                this.img.addEventListener("load", this),
                this.img.addEventListener("error", this),
                void (this.proxyImage.src = this.img.src));
          }),
          (a.prototype.getIsImageComplete = function () {
            return this.img.complete && void 0 !== this.img.naturalWidth;
          }),
          (a.prototype.confirm = function (e, t) {
            (this.isLoaded = e),
              this.emitEvent("progress", [this, this.img, t]);
          }),
          (a.prototype.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e);
          }),
          (a.prototype.onload = function () {
            this.confirm(!0, "onload"), this.unbindEvents();
          }),
          (a.prototype.onerror = function () {
            this.confirm(!1, "onerror"), this.unbindEvents();
          }),
          (a.prototype.unbindEvents = function () {
            this.proxyImage.removeEventListener("load", this),
              this.proxyImage.removeEventListener("error", this),
              this.img.removeEventListener("load", this),
              this.img.removeEventListener("error", this);
          }),
          (s.prototype = Object.create(a.prototype)),
          (s.prototype.check = function () {
            this.img.addEventListener("load", this),
              this.img.addEventListener("error", this),
              (this.img.src = this.url);
            var e = this.getIsImageComplete();
            e &&
              (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
              this.unbindEvents());
          }),
          (s.prototype.unbindEvents = function () {
            this.img.removeEventListener("load", this),
              this.img.removeEventListener("error", this);
          }),
          (s.prototype.confirm = function (e, t) {
            (this.isLoaded = e),
              this.emitEvent("progress", [this, this.element, t]);
          }),
          (o.makeJQueryPlugin = function (t) {
            t &&
              ((e = t),
              (e.fn.imagesLoaded = function (t, n) {
                var r = new o(this, t, n);
                return r.jqDeferred.promise(e(this));
              }));
          }),
          o.makeJQueryPlugin(e),
          o
        );
      });
  }),
  function () {
    jdgmTheme.enque(function (e) {
      var t, n, r, i;
      return (
        (i = jdgm._safeRun),
        (r = function () {
          return {};
        }),
        (n = document.createElement("div")),
        (t = e(n)),
        e(".jdgm-rev").length > 0
          ? void 0
          : (i(function () {
              var e;
              return (
                getSize(t),
                (e = new Outlayer(n)),
                e.getItems(),
                e._getBoundingRect(),
                e.destroy()
              );
            }),
            i(function () {
              return t.masonry(), t.masonry("measureColumns");
            }))
      );
    });
  }.call(this),
  function () {
    jdgmTheme.enque(function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        l,
        c,
        u,
        d,
        p,
        h,
        f,
        m,
        g,
        v,
        _,
        b,
        y,
        w,
        x,
        k,
        S,
        T;
      return (
        (n = "jdgm--leex-done-setup"),
        (o =
          ".jdgm-rev-widg__reviews, .jdgm-all-reviews__body, .jdgm-revs-tab__reviews, .jdgm-shop-reviews__body"),
        (t = ".jdgm-all-reviews__body, .jdgm-shop-reviews__body"),
        (i = "layout-timeout"),
        (a = 1500),
        (s = 10),
        (r = "judgeme.imgix.net"),
        (u = !1),
        (c = !1),
        (jdgmLeex.customizeReviews = function (e) {
          var t;
          return (
            jdgmSettings.lazyloadCardImages && !u
              ? (y(e),
                (t = function () {
                  return c ? void 0 : ((c = !0), p(e));
                }),
                jdgm.ScrollEvent.attach(t, "LeexThemeLazyLoadScroll"))
              : p(e),
            (u = !0)
          );
        }),
        (p = function (t) {
          return (
            jdgm.asyncEach(t, function (t) {
              var r;
              return (
                (r = e(t)),
                r.hasClass(n)
                  ? void 0
                  : (jdgm.isVersion3 ? d(r) : (m(r), h(r), _(r), b(r), v(r)),
                    g(r),
                    r.addClass(n))
              );
            }),
            k(t.closest(o))
          );
        }),
        (y = function (e) {
          var n;
          if (!(e.closest(t).length <= 0))
            return (
              (n =
                (window.innerWidth > 767 && jdgmSettings.leexDesktopPreload) ||
                jdgmSettings.leexMobilePreload),
              p(e.slice(0, n))
            );
        }),
        (d = function (e) {
          var t;
          return (
            (t = e.find(".jdgm-rev__pics")),
            t.length > 0
              ? t.detach().insertAfter(e.find(".jdgm-rev__header"))
              : e
                  .find(".jdgm-rev__vids")
                  .detach()
                  .insertAfter(e.find(".jdgm-rev__header"))
          );
        }),
        (m = function (e) {
          var t;
          return (
            (t = e.find(".jdgm-rev__pics")),
            t.detach().insertBefore(e.find(".jdgm-rev__header"))
          );
        }),
        (g = function (e) {
          var t, n, r;
          return (
            e.find(".jdgm-rev__pic-link").removeClass("jdgm--loading"),
            (t = e.find(".jdgm-rev__pic-img").first()),
            (n = t.attr("data-src") || t.attr("src")),
            n
              ? ((n = n.replace("__compact.", "__huge.")),
                (r = Math.min(
                  jdgmSettings.leexPicWidth,
                  e.innerWidth(),
                  e.parent().innerWidth()
                )),
                (n = f(n, r)),
                t.attr("src", n),
                t.attr("data-src", n))
              : void 0
          );
        }),
        (f = function (t, n) {
          var i, o;
          return t.indexOf(r) < 0
            ? t
            : ((i = (t.indexOf("?") < 0 && "?") || "&"),
              (o = e.param({
                dpr: window.devicePixelRatio || 1,
                w: (n > 0 && n) || jdgmSettings.leexPicWidth,
              })),
              t + i + o);
        }),
        (h = function (e) {
          var t;
          return (
            (t = e.find(".jdgm-rev__author-wrapper")),
            t.insertBefore(e.find(".jdgm-rev__icon"))
          );
        }),
        (_ = function (e) {
          var t;
          return (
            (t = e.find(".jdgm-rev__rating")),
            t.insertAfter(e.find(".jdgm-rev__timestamp"))
          );
        }),
        (b = function (e) {
          var t;
          return (
            (t = e.find(".jdgm-rev__buyer-badge-wrapper")),
            e.find(".jdgm-rev__author-wrapper").append(t)
          );
        }),
        (v = function (e) {
          var t;
          return (t = e.find(".jdgm-rev__prod-info-wrapper")), e.append(t);
        }),
        (x = function (e) {
          var t;
          if (!e.data(i))
            return (
              (t = setTimeout(function () {
                return e.masonry("layout"), e.data(i, null);
              }, a)),
              e.data(i, t)
            );
        }),
        (w = function (e) {
          return e.find(".jdgm-rev").length > s ? x(e) : e.masonry("layout");
        }),
        (T = function (e) {
          return e.length <= 0
            ? void 0
            : (e.masonry({
                itemSelector: ".jdgm-rev",
                columnWidth: ".jdgm-rev",
                gutter: 16,
                transitionDuration: "0.25s",
              }),
              e.imagesLoaded().progress(function (t, n) {
                return w(e);
              }),
              jdgm.triggerVanillaEvent("doneSetupGrid"));
        }),
        (k = function (t) {
          return (
            jdgmSettings.widget_review_max_height &&
              jdgm.triggerEvent("beforeReLayoutGrids", { $reviewWrappers: t }),
            setTimeout(function () {
              return jdgm.asyncEach(t, function (t) {
                return T(e(t));
              });
            })
          );
        }),
        (S = function () {
          return e(".jdgm-rev").hasClass(jdgm.DONE_SETUP_CLASS);
        }),
        (l = function () {
          return S() ? jdgmLeex.customizeReviews(e(".jdgm-rev")) : void 0;
        }),
        e(document).on(
          "jdgm.doneCustomizeReviews jdgm.doneSetupVideos",
          function (e, t) {
            return jdgmLeex.customizeReviews(t.$reviews);
          }
        ),
        e(document).on(
          "jdgm.doneAppendMoreReviewsInAllReviewsPage",
          function (e, t) {
            var n;
            return (
              (n = t.$reviews.closest(
                ".jdgm-all-reviews__body, .jdgm-shop-reviews__body"
              )),
              n.data("masonry") ? n.masonry("appended", t.$reviews) : void 0
            );
          }
        ),
        e(document).on("jdgm.doneAppendMoreReviews", function (e, t) {
          var n;
          return (n = t.$widget.find(o)), n.masonry("appended", t.$reviews);
        }),
        e(document).on("jdgm.openedTabInAllReviewsPage", function (e, t) {
          return t.$reviewsList.data("masonry")
            ? t.$reviewsList.masonry("layout")
            : void 0;
        }),
        e(document).on("jdgm.filteredInAllReviewsPage", function (e, t) {
          return t.$reviewsList.data("masonry")
            ? t.$reviewsList.masonry("layout")
            : void 0;
        }),
        e(document).on("jdgm.doneShowReviewsTab", function (e, t) {
          return (
            jdgm.ScrollEvent.trigger("LeexThemeLazyLoadScroll"),
            setTimeout(function () {
              return t.$tabModal
                .find(".jdgm-revs-tab__reviews")
                .masonry("layout");
            }, 0)
          );
        }),
        e(document).on("jdgm.doneDestroyDot", function (e, t) {
          return t.$reviewBody.closest(o).masonry("layout");
        }),
        e(document).on("jdgm.addSubmitedReview", function (e, t) {
          var n;
          return (
            (n = t.$review.closest(".jdgm-rev-widg__reviews")),
            n.data("masonry")
              ? n.masonry("prepended", n.find(".jdgm-rev--pending"))
              : void 0
          );
        }),
        e("body").addClass("jdgm--leex-script-loaded"),
        l(),
        document.addEventListener("jdgm.doneLoadingCss", l, !1)
      );
    });
  }.call(this);