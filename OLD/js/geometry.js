require = (function (r, e, n) {
  function t(n, o) {
    function i(r) {
      return t(i.resolve(r));
    }

    function f(e) {
      return r[n][1][e] || e;
    }
    if (!e[n]) {
      if (!r[n]) {
        var c = "function" == typeof require && require;
        if (!o && c) return c(n, !0);
        if (u) return u(n, !0);
        var l = new Error("Cannot find module '" + n + "'");
        throw ((l.code = "MODULE_NOT_FOUND"), l);
      }
      i.resolve = f;
      var s = (e[n] = new t.Module(n));
      r[n][0].call(s.exports, i, s, s.exports);
    }
    return e[n].exports;
  }

  function o(r) {
    (this.id = r), (this.bundle = t), (this.exports = {});
  }
  var u = "function" == typeof require && require;
  (t.isParcelRequire = !0),
    (t.Module = o),
    (t.modules = r),
    (t.cache = e),
    (t.parent = u);
  for (var i = 0; i < n.length; i++) t(n[i]);
  return t;
})(
  {
    6: [function (require, module, exports) {}, {}],
    14: [
      function (require, module, exports) {
        var global = (1, eval)("this");
        var t = (0, eval)("this"),
          e = { scope: {} };
        (e.defineProperty =
          "function" == typeof Object.defineProperties
            ? Object.defineProperty
            : function (t, e, r) {
                if (r.get || r.set)
                  throw new TypeError(
                    "ES3 does not support getters and setters."
                  );
                t != Array.prototype &&
                  t != Object.prototype &&
                  (t[e] = r.value);
              }),
          (e.getGlobal = function (e) {
            return "undefined" != typeof window && window === e
              ? e
              : void 0 !== t && null != t
              ? t
              : e;
          }),
          (e.global = e.getGlobal(this)),
          (e.SYMBOL_PREFIX = "jscomp_symbol_"),
          (e.initSymbol = function () {
            (e.initSymbol = function () {}),
              e.global.Symbol || (e.global.Symbol = e.Symbol);
          }),
          (e.symbolCounter_ = 0),
          (e.Symbol = function (t) {
            return e.SYMBOL_PREFIX + (t || "") + e.symbolCounter_++;
          }),
          (e.initSymbolIterator = function () {
            e.initSymbol();
            var t = e.global.Symbol.iterator;
            t || (t = e.global.Symbol.iterator = e.global.Symbol("iterator")),
              "function" != typeof Array.prototype[t] &&
                e.defineProperty(Array.prototype, t, {
                  configurable: !0,
                  writable: !0,
                  value: function () {
                    return e.arrayIterator(this);
                  },
                }),
              (e.initSymbolIterator = function () {});
          }),
          (e.arrayIterator = function (t) {
            var r = 0;
            return e.iteratorPrototype(function () {
              return r < t.length ? { done: !1, value: t[r++] } : { done: !0 };
            });
          }),
          (e.iteratorPrototype = function (t) {
            return (
              e.initSymbolIterator(),
              ((t = { next: t })[e.global.Symbol.iterator] = function () {
                return this;
              }),
              t
            );
          }),
          (e.array = e.array || {}),
          (e.iteratorFromArray = function (t, r) {
            e.initSymbolIterator(), t instanceof String && (t += "");
            var n = 0,
              o = {
                next: function () {
                  if (n < t.length) {
                    var e = n++;
                    return { value: r(e, t[e]), done: !1 };
                  }
                  return (
                    (o.next = function () {
                      return { done: !0, value: void 0 };
                    }),
                    o.next()
                  );
                },
              };
            return (
              (o[Symbol.iterator] = function () {
                return o;
              }),
              o
            );
          }),
          (e.polyfill = function (t, r, n, o) {
            if (r) {
              for (
                n = e.global, t = t.split("."), o = 0;
                o < t.length - 1;
                o++
              ) {
                var a = t[o];
                a in n || (n[a] = {}), (n = n[a]);
              }
              (r = r((o = n[(t = t[t.length - 1])]))) != o &&
                null != r &&
                e.defineProperty(n, t, {
                  configurable: !0,
                  writable: !0,
                  value: r,
                });
            }
          }),
          e.polyfill(
            "Array.prototype.keys",
            function (t) {
              return (
                t ||
                function () {
                  return e.iteratorFromArray(this, function (t) {
                    return t;
                  });
                }
              );
            },
            "es6-impl",
            "es3"
          );
        var r = this;
        !(function (t, e) {
          "function" == typeof define && define.amd
            ? define([], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e())
            : (t.anime = e());
        })(this, function () {
          function t(t) {
            if (!F.col(t))
              try {
                return document.querySelectorAll(t);
              } catch (t) {}
          }

          function e(t, e) {
            for (
              var r = t.length,
                n = 2 <= arguments.length ? arguments[1] : void 0,
                o = [],
                a = 0;
              a < r;
              a++
            )
              if (a in t) {
                var i = t[a];
                e.call(n, i, a, t) && o.push(i);
              }
            return o;
          }

          function n(t) {
            return t.reduce(function (t, e) {
              return t.concat(F.arr(e) ? n(e) : e);
            }, []);
          }

          function o(e) {
            return F.arr(e)
              ? e
              : (F.str(e) && (e = t(e) || e),
                e instanceof NodeList || e instanceof HTMLCollection
                  ? [].slice.call(e)
                  : [e]);
          }

          function a(t, e) {
            return t.some(function (t) {
              return t === e;
            });
          }

          function i(t) {
            var e,
              r = {};
            for (e in t) r[e] = t[e];
            return r;
          }

          function u(t, e) {
            var r,
              n = i(t);
            for (r in t) n[r] = e.hasOwnProperty(r) ? e[r] : t[r];
            return n;
          }

          function s(t, e) {
            var r,
              n = i(t);
            for (r in e) n[r] = F.und(t[r]) ? e[r] : t[r];
            return n;
          }

          function c(t) {
            if (
              (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
                t
              ))
            )
              return t[2];
          }

          function f(t, e) {
            return F.fnc(t) ? t(e.target, e.id, e.total) : t;
          }

          function l(t, e) {
            if (e in t.style)
              return (
                getComputedStyle(t).getPropertyValue(
                  e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                ) || "0"
              );
          }

          function d(t, e) {
            return F.dom(t) && a(k, e)
              ? "transform"
              : F.dom(t) && (t.getAttribute(e) || (F.svg(t) && t[e]))
              ? "attribute"
              : F.dom(t) && "transform" !== e && l(t, e)
              ? "css"
              : null != t[e]
              ? "object"
              : void 0;
          }

          function p(t, r) {
            switch (d(t, r)) {
              case "transform":
                return (function (t, r) {
                  var n = (function (t) {
                    return -1 < t.indexOf("translate") || "perspective" === t
                      ? "px"
                      : -1 < t.indexOf("rotate") || -1 < t.indexOf("skew")
                      ? "deg"
                      : void 0;
                  })(r);
                  if (
                    ((n = -1 < r.indexOf("scale") ? 1 : 0 + n),
                    !(t = t.style.transform))
                  )
                    return n;
                  for (
                    var o = [], a = [], i = [], u = /(\w+)\((.+?)\)/g;
                    (o = u.exec(t));

                  )
                    a.push(o[1]), i.push(o[2]);
                  return (t = e(i, function (t, e) {
                    return a[e] === r;
                  })).length
                    ? t[0]
                    : n;
                })(t, r);
              case "css":
                return l(t, r);
              case "attribute":
                return t.getAttribute(r);
            }
            return t[r] || 0;
          }

          function g(t, e) {
            var r = /^(\*=|\+=|-=)/.exec(t);
            if (!r) return t;
            var n = c(t) || 0;
            switch (
              ((e = parseFloat(e)),
              (t = parseFloat(t.replace(r[0], ""))),
              r[0][0])
            ) {
              case "+":
                return e + t + n;
              case "-":
                return e - t + n;
              case "*":
                return e * t + n;
            }
          }

          function m(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
          }

          function y(t) {
            t = t.points;
            for (var e, r = 0, n = 0; n < t.numberOfItems; n++) {
              var o = t.getItem(n);
              0 < n && (r += m(e, o)), (e = o);
            }
            return r;
          }

          function h(t) {
            if (t.getTotalLength) return t.getTotalLength();
            switch (t.tagName.toLowerCase()) {
              case "circle":
                return 2 * Math.PI * t.getAttribute("r");
              case "rect":
                return (
                  2 * t.getAttribute("width") + 2 * t.getAttribute("height")
                );
              case "line":
                return m(
                  { x: t.getAttribute("x1"), y: t.getAttribute("y1") },
                  { x: t.getAttribute("x2"), y: t.getAttribute("y2") }
                );
              case "polyline":
                return y(t);
              case "polygon":
                var e = t.points;
                return y(t) + m(e.getItem(e.numberOfItems - 1), e.getItem(0));
            }
          }

          function v(t, e) {
            function r(r) {
              return (
                (r = void 0 === r ? 0 : r),
                t.el.getPointAtLength(1 <= e + r ? e + r : 0)
              );
            }
            var n = r(),
              o = r(-1),
              a = r(1);
            switch (t.property) {
              case "x":
                return n.x;
              case "y":
                return n.y;
              case "angle":
                return (180 * Math.atan2(a.y - o.y, a.x - o.x)) / Math.PI;
            }
          }

          function b(t, e) {
            var r,
              n = /-?\d*\.?\d+/g;
            if (((r = F.pth(t) ? t.totalLength : t), F.col(r)))
              if (F.rgb(r)) {
                var o = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);
                r = o ? "rgba(" + o[1] + ",1)" : r;
              } else
                r = F.hex(r)
                  ? (function (t) {
                      t = t.replace(
                        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        function (t, e, r, n) {
                          return e + e + r + r + n + n;
                        }
                      );
                      var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                        t
                      );
                      return (
                        "rgba(" +
                        (t = parseInt(e[1], 16)) +
                        "," +
                        parseInt(e[2], 16) +
                        "," +
                        (e = parseInt(e[3], 16)) +
                        ",1)"
                      );
                    })(r)
                  : F.hsl(r)
                  ? (function (t) {
                      function e(t, e, r) {
                        return (
                          0 > r && (r += 1),
                          1 < r && --r,
                          r < 1 / 6
                            ? t + 6 * (e - t) * r
                            : 0.5 > r
                            ? e
                            : r < 2 / 3
                            ? t + (e - t) * (2 / 3 - r) * 6
                            : t
                        );
                      }
                      var r =
                        /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) ||
                        /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                          t
                        );
                      t = parseInt(r[1]) / 360;
                      var n = parseInt(r[2]) / 100,
                        o = parseInt(r[3]) / 100;
                      if (((r = r[4] || 1), 0 == n)) o = n = t = o;
                      else {
                        var a = 0.5 > o ? o * (1 + n) : o + n - o * n,
                          i = 2 * o - a;
                        (o = e(i, a, t + 1 / 3)),
                          (n = e(i, a, t)),
                          (t = e(i, a, t - 1 / 3));
                      }
                      return (
                        "rgba(" +
                        255 * o +
                        "," +
                        255 * n +
                        "," +
                        255 * t +
                        "," +
                        r +
                        ")"
                      );
                    })(r)
                  : void 0;
            else
              (o = (o = c(r)) ? r.substr(0, r.length - o.length) : r),
                (r = e && !/\s/g.test(r) ? o + e : o);
            return {
              original: (r += ""),
              numbers: r.match(n) ? r.match(n).map(Number) : [0],
              strings: F.str(t) || e ? r.split(n) : [],
            };
          }

          function x(t) {
            return e((t = t ? n(F.arr(t) ? t.map(o) : o(t)) : []), function (
              t,
              e,
              r
            ) {
              return r.indexOf(t) === e;
            });
          }

          function w(t, e) {
            var r = i(e);
            if (F.arr(t)) {
              var n = t.length;
              2 !== n || F.obj(t[0])
                ? F.fnc(e.duration) || (r.duration = e.duration / n)
                : (t = { value: t });
            }
            return o(t)
              .map(function (t, r) {
                return (
                  (r = r ? 0 : e.delay),
                  (t = F.obj(t) && !F.pth(t) ? t : { value: t }),
                  F.und(t.delay) && (t.delay = r),
                  t
                );
              })
              .map(function (t) {
                return s(t, r);
              });
          }

          function A(t, e) {
            var r;
            return t.tweens.map(function (n) {
              var o = (n = (function (t, e) {
                  var r,
                    n = {};
                  for (r in t) {
                    var o = f(t[r], e);
                    F.arr(o) &&
                      1 ===
                        (o = o.map(function (t) {
                          return f(t, e);
                        })).length &&
                      (o = o[0]),
                      (n[r] = o);
                  }
                  return (
                    (n.duration = parseFloat(n.duration)),
                    (n.delay = parseFloat(n.delay)),
                    n
                  );
                })(n, e)).value,
                a = p(e.target, t.name),
                i = r ? r.to.original : a,
                u = ((i = F.arr(o) ? o[0] : i), g(F.arr(o) ? o[1] : o, i));
              a = c(u) || c(i) || c(a);
              return (
                (n.from = b(i, a)),
                (n.to = b(u, a)),
                (n.start = r ? r.end : t.offset),
                (n.end = n.start + n.delay + n.duration),
                (n.easing = (function (t) {
                  return F.arr(t) ? L.apply(this, t) : C[t];
                })(n.easing)),
                (n.elasticity =
                  (1e3 - Math.min(Math.max(n.elasticity, 1), 999)) / 1e3),
                (n.isPath = F.pth(o)),
                (n.isColor = F.col(n.from.original)),
                n.isColor && (n.round = 1),
                (r = n)
              );
            });
          }

          function I(t, e, r, n) {
            var o = "delay" === t;
            return e.length
              ? (o ? Math.min : Math.max).apply(
                  Math,
                  e.map(function (e) {
                    return e[t];
                  })
                )
              : o
              ? n.delay
              : r.offset + n.delay + n.duration;
          }

          function M(t) {
            var r,
              o = u(P, t),
              a = u(j, t),
              i = (function (t) {
                var e = x(t);
                return e.map(function (t, r) {
                  return { target: t, id: r, total: e.length };
                });
              })(t.targets),
              c = [],
              f = s(o, a);
            for (r in t)
              f.hasOwnProperty(r) ||
                "targets" === r ||
                c.push({ name: r, offset: f.offset, tweens: w(t[r], a) });
            return (
              (t = (function (t, r) {
                return e(
                  n(
                    t.map(function (t) {
                      return r.map(function (e) {
                        var r = d(t.target, e.name);
                        if (r) {
                          var n = A(e, t);
                          e = {
                            type: r,
                            property: e.name,
                            animatable: t,
                            tweens: n,
                            duration: n[n.length - 1].end,
                            delay: n[0].delay,
                          };
                        } else e = void 0;
                        return e;
                      });
                    })
                  ),
                  function (t) {
                    return !F.und(t);
                  }
                );
              })(i, c)),
              s(o, {
                children: [],
                animatables: i,
                animations: t,
                duration: I("duration", t, o, a),
                delay: I("delay", t, o, a),
              })
            );
          }

          function S(t) {
            function r() {
              return (
                window.Promise &&
                new Promise(function (t) {
                  return (d = t);
                })
              );
            }

            function n(t) {
              return g.reversed ? g.duration - t : t;
            }

            function o(t) {
              for (var r = 0, n = {}, o = g.animations, a = o.length; r < a; ) {
                var i = o[r],
                  u = i.animatable,
                  s = (c = i.tweens)[(p = c.length - 1)];
                p &&
                  (s =
                    e(c, function (e) {
                      return t < e.end;
                    })[0] || s);
                for (
                  var c =
                      Math.min(Math.max(t - s.start - s.delay, 0), s.duration) /
                      s.duration,
                    f = isNaN(c) ? 1 : s.easing(c, s.elasticity),
                    d = ((c = s.to.strings), s.round),
                    p = [],
                    m = void 0,
                    y = ((m = s.to.numbers.length), 0);
                  y < m;
                  y++
                ) {
                  var h = void 0,
                    b = ((h = s.to.numbers[y]), s.from.numbers[y]);
                  h = s.isPath ? v(s.value, f * h) : b + f * (h - b);
                  d && ((s.isColor && 2 < y) || (h = Math.round(h * d) / d)),
                    p.push(h);
                }
                if ((s = c.length))
                  for (m = c[0], f = 0; f < s; f++)
                    (d = c[f + 1]),
                      (y = p[f]),
                      isNaN(y) || (m = d ? m + (y + d) : m + (y + " "));
                else m = p[0];
                E[i.type](u.target, i.property, m, n, u.id),
                  (i.currentValue = m),
                  r++;
              }
              if ((r = Object.keys(n).length))
                for (o = 0; o < r; o++)
                  O ||
                    (O = l(document.body, "transform")
                      ? "transform"
                      : "-webkit-transform"),
                    (g.animatables[o].target.style[O] = n[o].join(" "));
              (g.currentTime = t), (g.progress = (t / g.duration) * 100);
            }

            function a(t) {
              g[t] && g[t](g);
            }

            function i() {
              g.remaining && !0 !== g.remaining && g.remaining--;
            }

            function u(t) {
              var e = g.duration,
                u = g.offset,
                l = u + g.delay,
                m = g.currentTime,
                y = g.reversed,
                h = n(t);
              if (g.children.length) {
                var v = g.children,
                  b = v.length;
                if (h >= g.currentTime)
                  for (var x = 0; x < b; x++) v[x].seek(h);
                else for (; b--; ) v[b].seek(h);
              }
              (h >= l || !e) &&
                (g.began || ((g.began = !0), a("begin")), a("run")),
                h > u && h < e
                  ? o(h)
                  : (h <= u && 0 !== m && (o(0), y && i()),
                    ((h >= e && m !== e) || !e) && (o(e), y || i())),
                a("update"),
                t >= e &&
                  (g.remaining
                    ? ((c = s),
                      "alternate" === g.direction && (g.reversed = !g.reversed))
                    : (g.pause(),
                      g.completed ||
                        ((g.completed = !0),
                        a("complete"),
                        "Promise" in window && (d(), (p = r())))),
                  (f = 0));
            }
            t = void 0 === t ? {} : t;
            var s,
              c,
              f = 0,
              d = null,
              p = r(),
              g = M(t);
            return (
              (g.reset = function () {
                var t = g.direction,
                  e = g.loop;
                for (
                  g.currentTime = 0,
                    g.progress = 0,
                    g.paused = !0,
                    g.began = !1,
                    g.completed = !1,
                    g.reversed = "reverse" === t,
                    g.remaining = "alternate" === t && 1 === e ? 2 : e,
                    o(0),
                    t = g.children.length;
                  t--;

                )
                  g.children[t].reset();
              }),
              (g.tick = function (t) {
                (s = t), c || (c = s), u((f + s - c) * S.speed);
              }),
              (g.seek = function (t) {
                u(n(t));
              }),
              (g.pause = function () {
                var t = T.indexOf(g);
                -1 < t && T.splice(t, 1), (g.paused = !0);
              }),
              (g.play = function () {
                g.paused &&
                  ((g.paused = !1),
                  (c = 0),
                  (f = n(g.currentTime)),
                  T.push(g),
                  N || $());
              }),
              (g.reverse = function () {
                (g.reversed = !g.reversed), (c = 0), (f = n(g.currentTime));
              }),
              (g.restart = function () {
                g.pause(), g.reset(), g.play();
              }),
              (g.finished = p),
              g.reset(),
              g.autoplay && g.play(),
              g
            );
          }
          var O,
            P = {
              update: void 0,
              begin: void 0,
              run: void 0,
              complete: void 0,
              loop: 1,
              direction: "normal",
              autoplay: !0,
              offset: 0,
            },
            j = {
              duration: 1e3,
              delay: 0,
              easing: "easeOutElastic",
              elasticity: 500,
              round: 0,
            },
            k = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(
              " "
            ),
            F = {
              arr: function (t) {
                return Array.isArray(t);
              },
              obj: function (t) {
                return -1 < Object.prototype.toString.call(t).indexOf("Object");
              },
              pth: function (t) {
                return F.obj(t) && t.hasOwnProperty("totalLength");
              },
              svg: function (t) {
                return t instanceof SVGElement;
              },
              dom: function (t) {
                return t.nodeType || F.svg(t);
              },
              str: function (t) {
                return "string" == typeof t;
              },
              fnc: function (t) {
                return "function" == typeof t;
              },
              und: function (t) {
                return void 0 === t;
              },
              hex: function (t) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
              },
              rgb: function (t) {
                return /^rgb/.test(t);
              },
              hsl: function (t) {
                return /^hsl/.test(t);
              },
              col: function (t) {
                return F.hex(t) || F.rgb(t) || F.hsl(t);
              },
            },
            L = (function () {
              function t(t, e, r) {
                return (
                  (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t
                );
              }
              return function (e, r, n, o) {
                if (0 <= e && 1 >= e && 0 <= n && 1 >= n) {
                  var a = new Float32Array(11);
                  if (e !== r || n !== o)
                    for (var i = 0; 11 > i; ++i) a[i] = t(0.1 * i, e, n);
                  return function (i) {
                    if (e === r && n === o) return i;
                    if (0 === i) return 0;
                    if (1 === i) return 1;
                    for (var u = 0, s = 1; 10 !== s && a[s] <= i; ++s) u += 0.1;
                    s = u + ((i - a[--s]) / (a[s + 1] - a[s])) * 0.1;
                    var c =
                      3 * (1 - 3 * n + 3 * e) * s * s +
                      2 * (3 * n - 6 * e) * s +
                      3 * e;
                    if (0.001 <= c) {
                      for (
                        u = 0;
                        4 > u &&
                        0 !==
                          (c =
                            3 * (1 - 3 * n + 3 * e) * s * s +
                            2 * (3 * n - 6 * e) * s +
                            3 * e);
                        ++u
                      ) {
                        var f = t(s, e, n) - i;
                        s = s - f / c;
                      }
                      i = s;
                    } else if (0 === c) i = s;
                    else {
                      (s = u), (u = u + 0.1);
                      var l = 0;
                      do {
                        0 < (c = t((f = s + (u - s) / 2), e, n) - i)
                          ? (u = f)
                          : (s = f);
                      } while (1e-7 < Math.abs(c) && 10 > ++l);
                      i = f;
                    }
                    return t(i, r, o);
                  };
                }
              };
            })(),
            C = (function () {
              function t(t, e) {
                return 0 === t || 1 === t
                  ? t
                  : -Math.pow(2, 10 * (t - 1)) *
                      Math.sin(
                        (2 *
                          (t - 1 - (e / (2 * Math.PI)) * Math.asin(1)) *
                          Math.PI) /
                          e
                      );
              }
              var e,
                n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(
                  " "
                ),
                o = {
                  In: [
                    [0.55, 0.085, 0.68, 0.53],
                    [0.55, 0.055, 0.675, 0.19],
                    [0.895, 0.03, 0.685, 0.22],
                    [0.755, 0.05, 0.855, 0.06],
                    [0.47, 0, 0.745, 0.715],
                    [0.95, 0.05, 0.795, 0.035],
                    [0.6, 0.04, 0.98, 0.335],
                    [0.6, -0.28, 0.735, 0.045],
                    t,
                  ],
                  Out: [
                    [0.25, 0.46, 0.45, 0.94],
                    [0.215, 0.61, 0.355, 1],
                    [0.165, 0.84, 0.44, 1],
                    [0.23, 1, 0.32, 1],
                    [0.39, 0.575, 0.565, 1],
                    [0.19, 1, 0.22, 1],
                    [0.075, 0.82, 0.165, 1],
                    [0.175, 0.885, 0.32, 1.275],
                    function (e, r) {
                      return 1 - t(1 - e, r);
                    },
                  ],
                  InOut: [
                    [0.455, 0.03, 0.515, 0.955],
                    [0.645, 0.045, 0.355, 1],
                    [0.77, 0, 0.175, 1],
                    [0.86, 0, 0.07, 1],
                    [0.445, 0.05, 0.55, 0.95],
                    [1, 0, 0, 1],
                    [0.785, 0.135, 0.15, 0.86],
                    [0.68, -0.55, 0.265, 1.55],
                    function (e, r) {
                      return 0.5 > e
                        ? t(2 * e, r) / 2
                        : 1 - t(-2 * e + 2, r) / 2;
                    },
                  ],
                },
                a = { linear: L(0.25, 0.25, 0.75, 0.75) },
                i = {};
              for (e in o)
                (i.type = e),
                  o[i.type].forEach(
                    (function (t) {
                      return function (e, o) {
                        a["ease" + t.type + n[o]] = F.fnc(e)
                          ? e
                          : L.apply(r, e);
                      };
                    })(i)
                  ),
                  (i = { type: i.type });
              return a;
            })(),
            E = {
              css: function (t, e, r) {
                return (t.style[e] = r);
              },
              attribute: function (t, e, r) {
                return t.setAttribute(e, r);
              },
              object: function (t, e, r) {
                return (t[e] = r);
              },
              transform: function (t, e, r, n, o) {
                n[o] || (n[o] = []), n[o].push(e + "(" + r + ")");
              },
            },
            T = [],
            N = 0,
            $ = (function () {
              function t() {
                N = requestAnimationFrame(e);
              }

              function e(e) {
                var r = T.length;
                if (r) {
                  for (var n = 0; n < r; ) T[n] && T[n].tick(e), n++;
                  t();
                } else cancelAnimationFrame(N), (N = 0);
              }
              return t;
            })();
          return (
            (S.version = "2.2.0"),
            (S.speed = 1),
            (S.running = T),
            (S.remove = function (t) {
              t = x(t);
              for (var e = T.length; e--; )
                for (var r = T[e], n = r.animations, o = n.length; o--; )
                  a(t, n[o].animatable.target) &&
                    (n.splice(o, 1), n.length || r.pause());
            }),
            (S.getValue = p),
            (S.path = function (e, r) {
              var n = F.str(e) ? t(e)[0] : e,
                o = r || 100;
              return function (t) {
                return { el: n, property: t, totalLength: h(n) * (o / 100) };
              };
            }),
            (S.setDashoffset = function (t) {
              var e = h(t);
              return t.setAttribute("stroke-dasharray", e), e;
            }),
            (S.bezier = L),
            (S.easings = C),
            (S.timeline = function (t) {
              var e = S(t);
              return (
                e.pause(),
                (e.duration = 0),
                (e.add = function (r) {
                  return (
                    e.children.forEach(function (t) {
                      (t.began = !0), (t.completed = !0);
                    }),
                    o(r).forEach(function (r) {
                      var n = s(r, u(j, t || {}));
                      (n.targets = n.targets || t.targets), (r = e.duration);
                      var o = n.offset;
                      (n.autoplay = !1),
                        (n.direction = e.direction),
                        (n.offset = F.und(o) ? r : g(o, r)),
                        (e.began = !0),
                        (e.completed = !0),
                        e.seek(n.offset),
                        ((n = S(n)).began = !0),
                        (n.completed = !0),
                        n.duration > r && (e.duration = n.duration),
                        e.children.push(n);
                    }),
                    e.seek(0),
                    e.reset(),
                    e.autoplay && e.restart(),
                    e
                  );
                }),
                e
              );
            }),
            (S.random = function (t, e) {
              return Math.floor(Math.random() * (e - t + 1)) + t;
            }),
            S
          );
        });
      },
      {},
    ],
    12: [
      function (require, module, exports) {
        "use strict";

        function e(e, t, n) {
          var o;
          return function () {
            var r = this,
              u = arguments,
              a = n && !o;
            clearTimeout(o),
              (o = setTimeout(function () {
                (o = null), n || e.apply(r, u);
              }, t)),
              a && e.apply(r, u);
          };
        }

        function t(e, t, n) {
          return (
            void 0 === n && (n = 2),
            parseFloat(Math.min(e + Math.random() * (t - e), t).toFixed(n))
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.debounce = e),
          (exports.randomBetween = t);
      },
      {},
    ],
    7: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.effect = void 0);
        var t = require("animejs"),
          e = n(t),
          a = require("./js/utils");

        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var r = (exports.effect = {
          options: {
            shapesOnTop: !0,
            shapeColors: [
              "#FD74FF",
              "#3771FC",
              "#7C5CE4",
              "#542A95",
              "#ACC7FE",
            ],
            shapeTypes: ["rect", "polygon"],
            totalShapes: 1,
          },
          hide: {
            lettersAnimationOpts: {
              duration: function () {
                return e.default.random(800, 1e3);
              },
              delay: function () {
                return e.default.random(0, 80);
              },
              easing: "easeInOutExpo",
              opacity: 0,
              translateY: "300%",
              rotateZ: function () {
                return e.default.random(-50, 50);
              },
            },
            shapesAnimationOpts: {
              duration: 350,
              easing: "easeOutExpo",
              translateX: function (t) {
                return [t.dataset.tx, e.default.random(-25, 25)];
              },
              translateY: function (t) {
                return [t.dataset.ty, e.default.random(-25, 25)];
              },
              scale: 1,
              rotate: 0,
              opacity: { value: 0, duration: 200, easing: "linear" },
            },
          },
          show: {
            lettersAnimationOpts: {
              duration: 800,
              delay: function () {
                return e.default.random(0, 75);
              },
              easing: "easeInOutQuart",
              opacity: [0, 1],
              translateY: ["-300%", "0%"],
              rotate: function () {
                return [e.default.random(-50, 50), 0];
              },
            },
            shapesAnimationOpts: {
              duration: 3200,
              easing: "easeOutExpo",
              translateY: function (t) {
                var a = e.default.random(-300, 300);
                return (t.dataset.ty = a), [e.default.random(-25, 25), a];
              },
              scale: function (t) {
                var e = (0, a.randomBetween)(1.5, 2);
                return (t.dataset.s = e), [e, e];
              },
              rotate: function () {
                return e.default.random(-45, 45);
              },
              opacity: {
                value: [0, 0.9],
                duration: 600,
                delay: 300,
                easing: "linear",
              },
            },
          },
        });
      },
      { animejs: 14, "./js/utils": 12 },
    ],
    16: [
      function (require, module, exports) {
        module.exports = function (e, r) {
          (r = r || {}), e.normalize();
          var t = r.splitRegex,
            a = r.tagName || "span",
            n = null != r.classPrefix ? r.classPrefix : "char",
            o = 1;

          function i(e) {
            for (
              var r = e.parentNode,
                i = e.nodeValue,
                l = t ? i.split(t) : i,
                d = l.length,
                s = -1;
              ++s < d;

            ) {
              var c = document.createElement(a);
              n && ((c.className = n + o), o++),
                c.appendChild(document.createTextNode(l[s])),
                c.setAttribute("aria-hidden", "true"),
                r.insertBefore(c, e);
            }
            "" !== i.trim() && r.setAttribute("aria-label", i),
              r.removeChild(e);
          }
          !(function e(r) {
            if (r.nodeType === Node.TEXT_NODE) return i(r);
            var t = Array.prototype.slice.call(r.childNodes),
              a = t.length;
            if (1 === a && t[0].nodeType === Node.TEXT_NODE) return i(t[0]);
            for (var n = -1; ++n < a; ) e(t[n]);
          })(e);
        };
      },
      {},
    ],
    8: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Word = void 0);
        var t = (function () {
            function t(t, e) {
              for (var i = 0; i < e.length; i++) {
                var s = e[i];
                (s.enumerable = s.enumerable || !1),
                  (s.configurable = !0),
                  "value" in s && (s.writable = !0),
                  Object.defineProperty(t, s.key, s);
              }
            }
            return function (e, i, s) {
              return i && t(e.prototype, i), s && t(e, s), e;
            };
          })(),
          e = require("animejs"),
          i = r(e),
          s = require("charming"),
          n = r(s),
          h = require("./utils");

        function r(t) {
          return t && t.__esModule ? t : { default: t };
        }

        function o(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        var l = { width: window.innerWidth, height: window.innerHeight },
          a = (function () {
            function e(t, i, s) {
              o(this, e),
                (this.DOM = {}),
                (this.options = {
                  shapeTypes: ["circle", "rect", "polygon"],
                  shapeColors: [
                    "#e07272",
                    "#0805b5",
                    "#49c6ff",
                    "#8bc34a",
                    "#1e1e21",
                    "#e24e81",
                    "#e0cd24",
                  ],
                  shapeFill: !0,
                  shapeStrokeWidth: 1,
                }),
                Object.assign(this.options, s),
                (this.type = t || this.options.shapeTypes[0]),
                ("random" === this.type ||
                  this.options.types.includes(this.type)) &&
                  ("random" === this.type &&
                    (this.type = this.options.shapeTypes[
                      (0, h.randomBetween)(
                        0,
                        this.options.shapeTypes.length - 1,
                        0
                      )
                    ]),
                  (this.letterRect = i),
                  this.init());
            }
            return (
              t(e, [
                {
                  key: "init",
                  value: function () {
                    (this.DOM.el = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      this.type
                    )),
                      (this.DOM.el.style.opacity = 0),
                      this.configureShapeType(),
                      this.options.shapeFill
                        ? this.DOM.el.setAttribute(
                            "fill",
                            this.options.shapeColors[
                              (0, h.randomBetween)(
                                0,
                                this.options.shapeColors.length - 1,
                                0
                              )
                            ]
                          )
                        : (this.DOM.el.setAttribute("fill", "none"),
                          this.DOM.el.setAttribute(
                            "stroke-width",
                            this.options.shapeStrokeWidth
                          ),
                          this.DOM.el.setAttribute(
                            "stroke",
                            this.options.shapeColors[
                              (0, h.randomBetween)(
                                0,
                                this.options.shapeColors.length - 1,
                                0
                              )
                            ]
                          ));
                  },
                },
                {
                  key: "configureShapeType",
                  value: function () {
                    if (
                      ((this.DOM.el.style.transformOrigin =
                        this.letterRect.left +
                        this.letterRect.width / 2 +
                        "px " +
                        (this.letterRect.top + this.letterRect.height / 2) +
                        "px"),
                      "circle" === this.type)
                    ) {
                      var t = 0.5 * this.letterRect.width;
                      this.DOM.el.setAttribute("r", t),
                        this.DOM.el.setAttribute(
                          "cx",
                          this.letterRect.left + this.letterRect.width / 2
                        ),
                        this.DOM.el.setAttribute(
                          "cy",
                          this.letterRect.top + this.letterRect.height / 2
                        );
                    } else if ("rect" === this.type) {
                      var e =
                          (0, h.randomBetween)(0.05, 0.5, 3) *
                          this.letterRect.width,
                        i =
                          (0, h.randomBetween)(0.05, 0.5, 3) *
                          this.letterRect.height;
                      this.DOM.el.setAttribute("width", e),
                        this.DOM.el.setAttribute("height", i),
                        this.DOM.el.setAttribute(
                          "x",
                          this.letterRect.left + (this.letterRect.width - e) / 2
                        ),
                        this.DOM.el.setAttribute(
                          "y",
                          this.letterRect.top + (this.letterRect.height - i) / 2
                        );
                    } else
                      "polygon" === this.type &&
                        this.DOM.el.setAttribute(
                          "points",
                          this.letterRect.left +
                            " " +
                            (this.letterRect.top + this.letterRect.height) +
                            ", " +
                            (this.letterRect.left + this.letterRect.width / 2) +
                            " " +
                            (this.letterRect.bottom - this.letterRect.width) +
                            ", " +
                            (this.letterRect.left + this.letterRect.width) +
                            " " +
                            (this.letterRect.top + this.letterRect.height)
                        );
                  },
                },
                {
                  key: "onResize",
                  value: function (t) {
                    (this.letterRect = t), this.configureShapeType();
                  },
                },
              ]),
              e
            );
          })(),
          p = (function () {
            function e(t, i, s) {
              o(this, e),
                (this.DOM = {}),
                (this.DOM.el = t),
                (this.DOM.svg = i),
                (this.options = { totalShapes: 10 }),
                Object.assign(this.options, s),
                (this.rect = this.DOM.el.getBoundingClientRect()),
                (this.totalShapes = this.options.totalShapes),
                this.init(),
                this.initEvents();
            }
            return (
              t(e, [
                {
                  key: "init",
                  value: function () {
                    this.shapes = [];
                    for (var t = 0; t <= this.totalShapes - 1; ++t) {
                      var e = new a("random", this.rect, this.options);
                      this.shapes.push(e), this.DOM.svg.appendChild(e.DOM.el);
                    }
                  },
                },
                {
                  key: "initEvents",
                  value: function () {
                    var t = this;
                    window.addEventListener(
                      "resize",
                      (0, h.debounce)(function () {
                        t.rect = t.DOM.el.getBoundingClientRect();
                        for (var e = 0; e <= t.totalShapes - 1; ++e) {
                          t.shapes[e].onResize(t.rect);
                        }
                      }, 20)
                    );
                  },
                },
              ]),
              e
            );
          })(),
          c = (exports.Word = (function () {
            function e(t, i) {
              o(this, e),
                (this.DOM = {}),
                (this.DOM.el = t),
                (this.options = { shapesOnTop: !1 }),
                Object.assign(this.options, i),
                this.init(),
                this.initEvents();
            }
            return (
              t(e, [
                {
                  key: "init",
                  value: function () {
                    var t = this;
                    this.createSVG(),
                      (0, n.default)(this.DOM.el),
                      (this.letters = []),
                      Array.from(this.DOM.el.querySelectorAll("span")).forEach(
                        function (e) {
                          return t.letters.push(new p(e, t.DOM.svg, t.options));
                        }
                      );
                  },
                },
                {
                  key: "initEvents",
                  value: function () {
                    var t = this;
                    window.addEventListener(
                      "resize",
                      (0, h.debounce)(function () {
                        (l = {
                          width: window.innerWidth,
                          height: window.innerHeight,
                        }),
                          t.DOM.svg.setAttribute("width", l.width + "px"),
                          t.DOM.svg.setAttribute("height", l.height + "px"),
                          t.DOM.svg.setAttribute(
                            "viewbox",
                            "0 0 " + l.width + " " + l.height
                          );
                      }, 20)
                    );
                  },
                },
                {
                  key: "createSVG",
                  value: function () {
                    (this.DOM.svg = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "svg"
                    )),
                      this.DOM.svg.setAttribute("class", "shapes"),
                      this.DOM.svg.setAttribute("width", l.width + "px"),
                      this.DOM.svg.setAttribute("height", l.height + "px"),
                      this.DOM.svg.setAttribute(
                        "viewbox",
                        "0 0 " + l.width + " " + l.height
                      ),
                      this.options.shapesOnTop
                        ? this.DOM.el.parentNode.insertBefore(
                            this.DOM.svg,
                            this.DOM.el.nextSibling
                          )
                        : this.DOM.el.parentNode.insertBefore(
                            this.DOM.svg,
                            this.DOM.el
                          );
                  },
                },
                {
                  key: "show",
                  value: function (t) {
                    return this.toggle("show", t);
                  },
                },
                {
                  key: "hide",
                  value: function (t) {
                    return this.toggle("hide", t);
                  },
                },
                {
                  key: "toggle",
                  value: function () {
                    var t = this,
                      e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "show",
                      s = arguments[1];
                    return new Promise(function (n, h) {
                      var r = function () {
                        for (var i = 0, s = t.letters.length; i <= s - 1; ++i)
                          t.letters[i].DOM.el.style.opacity =
                            "show" === e ? 1 : 0;
                        n();
                      };
                      if (s && 0 !== Object.keys(s).length) {
                        if (s.shapesAnimationOpts)
                          for (
                            var o = 0, l = t.letters.length;
                            o <= l - 1;
                            ++o
                          ) {
                            var a = t.letters[o];
                            setTimeout(
                              (function (t) {
                                return function () {
                                  (s.shapesAnimationOpts.targets = t.shapes.map(
                                    function (t) {
                                      return t.DOM.el;
                                    }
                                  )),
                                    i.default.remove(
                                      s.shapesAnimationOpts.targets
                                    ),
                                    (0, i.default)(s.shapesAnimationOpts);
                                };
                              })(a),
                              s.lettersAnimationOpts &&
                                s.lettersAnimationOpts.delay
                                ? s.lettersAnimationOpts.delay(a.DOM.el, o)
                                : 0
                            );
                          }
                        s.lettersAnimationOpts
                          ? ((s.lettersAnimationOpts.targets = t.letters.map(
                              function (t) {
                                return t.DOM.el;
                              }
                            )),
                            (s.lettersAnimationOpts.complete = function () {
                              if ("hide" === e)
                                for (
                                  var t = 0,
                                    i = s.lettersAnimationOpts.targets.length;
                                  t <= i - 1;
                                  ++t
                                )
                                  s.lettersAnimationOpts.targets[
                                    t
                                  ].style.transform = "none";
                              n();
                            }),
                            (0, i.default)(s.lettersAnimationOpts))
                          : r();
                      } else r();
                    });
                  },
                },
              ]),
              e
            );
          })());
      },
      { animejs: 14, charming: 16, "./utils": 12 },
    ],
    4: [
      function (require, module, exports) {
        "use strict";
        require("./css/app.styl");
        var e = require("./config"),
          o = require("./js/word");
        window.onload = function () {
          var r = new o.Word(
              document.querySelector(".title"),
              e.effect.options
            ),
            t = !1;
          t ? r.hide(e.effect.hide) : r.show(e.effect.show), (t = !t);
        };
      },
      { "./css/app.styl": 6, "./config": 7, "./js/word": 8 },
    ],
  },
  {},
  [4]
);
