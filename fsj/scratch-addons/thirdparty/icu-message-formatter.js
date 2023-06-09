function r(r, n) {
    var t = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(r);
        n && (e = e.filter((function(n) {
            return Object.getOwnPropertyDescriptor(r, n).enumerable
        }
        ))),
        t.push.apply(t, e)
    }
    return t
}
function n(n) {
    for (var t = 1; t < arguments.length; t++) {
        var e = null != arguments[t] ? arguments[t] : {};
        t % 2 ? r(Object(e), !0).forEach((function(r) {
            o(n, r, e[r])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : r(Object(e)).forEach((function(r) {
            Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r))
        }
        ))
    }
    return n
}
function t(r, n) {
    if (!(r instanceof n))
        throw new TypeError("Cannot call a class as a function")
}
function e(r, n) {
    for (var t = 0; t < n.length; t++) {
        var e = n[t];
        e.enumerable = e.enumerable || !1,
        e.configurable = !0,
        "value"in e && (e.writable = !0),
        Object.defineProperty(r, e.key, e)
    }
}
function o(r, n, t) {
    return n in r ? Object.defineProperty(r, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[n] = t,
    r
}
function i(r, n) {
    return function(r) {
        if (Array.isArray(r))
            return r
    }(r) || function(r, n) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null == t)
            return;
        var e, o, i = [], a = !0, u = !1;
        try {
            for (t = t.call(r); !(a = (e = t.next()).done) && (i.push(e.value),
            !n || i.length !== n); a = !0)
                ;
        } catch (r) {
            u = !0,
            o = r
        } finally {
            try {
                a || null == t.return || t.return()
            } finally {
                if (u)
                    throw o
            }
        }
        return i
    }(r, n) || function(r, n) {
        if (!r)
            return;
        if ("string" == typeof r)
            return a(r, n);
        var t = Object.prototype.toString.call(r).slice(8, -1);
        "Object" === t && r.constructor && (t = r.constructor.name);
        if ("Map" === t || "Set" === t)
            return Array.from(r);
        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
            return a(r, n)
    }(r, n) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function a(r, n) {
    (null == n || n > r.length) && (n = r.length);
    for (var t = 0, e = new Array(n); t < n; t++)
        e[t] = r[t];
    return e
}
function u(r) {
    for (var n = function(r) {
        return /\s/.test(r)
    }, t = [], e = {}, o = 0, i = null, a = !1, u = 0; u < r.length; ) {
        if (a && (n(r[u]) || "{" === r[u]))
            a = !1,
            i = r.slice(o, u),
            "{" === r[u] && u--;
        else if (!a && !n(r[u])) {
            var c = "{" === r[u];
            if (i && c) {
                var s = l(r, u);
                if (-1 === s)
                    throw new Error('Unbalanced curly braces in string: "'.concat(r, '"'));
                e[i] = r.slice(u + 1, s),
                u = s,
                i = null
            } else
                i && (t.push(i),
                i = null),
                a = !0,
                o = u
        }
        u++
    }
    return a && (i = r.slice(o)),
    i && t.push(i),
    {
        args: t,
        cases: e
    }
}
function l(r, n) {
    for (var t = 0, e = n + 1; e < r.length; e++) {
        var o = r.charAt(e);
        if ("}" === o) {
            if (0 === t)
                return e;
            t--
        } else
            "{" === o && t++
    }
    return -1
}
function c(r) {
    return s(r.slice(1, -1), ",", 3)
}
function s(r, n, t) {
    var e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
    if (!r)
        return e;
    if (1 === t)
        return e.push(r),
        e;
    var o = r.indexOf(n);
    if (-1 === o)
        return e.push(r),
        e;
    var i = r.substring(0, o).trim()
      , a = r.substring(o + n.length + 1).trim();
    return e.push(i),
    s(a, n, t - 1, e)
}
function f(r) {
    return r.reduce((function(r, n) {
        return r.concat(Array.isArray(n) ? f(n) : n)
    }
    ), [])
}
function h(r) {
    var n = {};
    return function() {
        for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
            e[o] = arguments[o];
        var i = e.length ? e.map((function(r) {
            return null === r ? "null" : void 0 === r ? "undefined" : "function" == typeof r ? r.toString() : r instanceof Date ? r.toISOString() : JSON.stringify(r)
        }
        )).join("|") : "_(no-args)_";
        if (Object.prototype.hasOwnProperty.call(n, i))
            return n[i];
        var a = r.apply(void 0, e);
        return n[i] = a,
        a
    }
}
var v, p = function() {
    function r(n) {
        var e = this
          , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        t(this, r),
        o(this, "format", h((function(r) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return f(e.process(r, n)).join("")
        }
        ))),
        this.locale = n,
        this.typeHandlers = i
    }
    var n, a, u;
    return n = r,
    a = [{
        key: "process",
        value: function(r) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!r)
                return [];
            var t = r.indexOf("{");
            if (-1 !== t) {
                var e = l(r, t);
                if (-1 === e)
                    throw new Error('Unbalanced curly braces in string: "'.concat(r, '"'));
                var o = r.substring(t, e + 1);
                if (o) {
                    var a = []
                      , u = r.substring(0, t);
                    u && a.push(u);
                    var s = c(o)
                      , f = i(s, 3)
                      , h = f[0]
                      , v = f[1]
                      , p = f[2]
                      , g = n[h];
                    null == g && (g = "");
                    var y = v && this.typeHandlers[v];
                    a.push(y ? y(g, p, this.locale, n, this.process.bind(this)) : g);
                    var b = r.substring(e + 1);
                    return b && a.push(this.process(b, n)),
                    a
                }
            }
            return [r]
        }
    }],
    a && e(n.prototype, a),
    u && e(n, u),
    r
}(), g = 0;
function y(r, n) {
    for (var t = 0, e = "", o = 0, i = {}; t < r.length; ) {
        if ("#" !== r[t] || o)
            e += r[t];
        else {
            var a = "__hashToken".concat(g++);
            e += "{".concat(a, ", number}"),
            i[a] = n
        }
        "{" === r[t] ? o++ : "}" === r[t] && o--,
        t++
    }
    return {
        caseBody: e,
        numberValues: i
    }
}
function b(r) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
      , e = arguments.length > 2 ? arguments[2] : void 0
      , o = arguments.length > 3 ? arguments[3] : void 0
      , i = arguments.length > 4 ? arguments[4] : void 0
      , a = u(t)
      , l = a.args
      , c = a.cases
      , s = parseInt(r);
    l.forEach((function(r) {
        r.startsWith("offset:") && (s -= parseInt(r.slice("offset:".length)))
    }
    ));
    var f = [];
    if ("PluralRules"in Intl) {
        void 0 !== v && v.resolvedOptions().locale === e || (v = new Intl.PluralRules(e));
        var h = v.select(s);
        "other" !== h && f.push(h)
    }
    1 === s && f.push("one"),
    f.push("=".concat(s), "other");
    for (var p = 0; p < f.length; p++) {
        var g = f[p];
        if (g in c) {
            var b = y(c[g], s)
              , d = b.caseBody
              , O = b.numberValues;
            return i(d, n(n({}, o), O))
        }
    }
    return r
}
function d(r) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
      , t = arguments.length > 3 ? arguments[3] : void 0
      , e = arguments.length > 4 ? arguments[4] : void 0
      , o = u(n)
      , i = o.cases;
    return r in i ? e(i[r], t) : "other"in i ? e(i.other, t) : r
}
export {p as MessageFormatter, l as findClosingBracket, u as parseCases, b as pluralTypeHandler, d as selectTypeHandler, c as splitFormattedArgument};
//# sourceMappingURL=icu-message-formatter.es.min.js.map
