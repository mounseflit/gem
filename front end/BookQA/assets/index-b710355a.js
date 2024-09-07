(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function Jr(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let o = 0; o < r.length; o++) n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const He = Object.freeze({}),
  qo = Object.freeze([]),
  Wt = () => {},
  d_ = () => !1,
  ms = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Wa = (e) => e.startsWith("onUpdate:"),
  Ge = Object.assign,
  Gf = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  L1 = Object.prototype.hasOwnProperty,
  Te = (e, t) => L1.call(e, t),
  ue = Array.isArray,
  mo = (e) => Ol(e) === "[object Map]",
  p_ = (e) => Ol(e) === "[object Set]",
  he = (e) => typeof e == "function",
  Ye = (e) => typeof e == "string",
  hs = (e) => typeof e == "symbol",
  Pe = (e) => e !== null && typeof e == "object",
  Yf = (e) => (Pe(e) || he(e)) && he(e.then) && he(e.catch),
  m_ = Object.prototype.toString,
  Ol = (e) => m_.call(e),
  Kf = (e) => Ol(e).slice(8, -1),
  h_ = (e) => Ol(e) === "[object Object]",
  qf = (e) =>
    Ye(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  zs = Jr(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  $1 = Jr(
    "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
  ),
  kl = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  D1 = /-(\w)/g,
  Mn = kl((e) => e.replace(D1, (t, n) => (n ? n.toUpperCase() : ""))),
  M1 = /\B([A-Z])/g,
  or = kl((e) => e.replace(M1, "-$1").toLowerCase()),
  bo = kl((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Or = kl((e) => (e ? `on${bo(e)}` : "")),
  Eo = (e, t) => !Object.is(e, t),
  jo = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Ga = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  mu = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  F1 = (e) => {
    const t = Ye(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let xp;
const Ya = () =>
  xp ||
  (xp =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Ii(e) {
  if (ue(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = Ye(r) ? z1(r) : Ii(r);
      if (o) for (const s in o) t[s] = o[s];
    }
    return t;
  } else if (Ye(e) || Pe(e)) return e;
}
const H1 = /;(?![^(]*\))/g,
  j1 = /:([^]+)/,
  U1 = /\/\*[^]*?\*\//g;
function z1(e) {
  const t = {};
  return (
    e
      .replace(U1, "")
      .split(H1)
      .forEach((n) => {
        if (n) {
          const r = n.split(j1);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function Mt(e) {
  let t = "";
  if (Ye(e)) t = e;
  else if (ue(e))
    for (let n = 0; n < e.length; n++) {
      const r = Mt(e[n]);
      r && (t += r + " ");
    }
  else if (Pe(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const B1 =
    "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",
  V1 =
    "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",
  W1 = Jr(B1),
  G1 = Jr(V1),
  Y1 =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  K1 = Jr(Y1);
function g_(e) {
  return !!e || e === "";
}
const Ot = (e) =>
    Ye(e)
      ? e
      : e == null
      ? ""
      : ue(e) || (Pe(e) && (e.toString === m_ || !he(e.toString)))
      ? JSON.stringify(e, __, 2)
      : String(e),
  __ = (e, t) =>
    t && t.__v_isRef
      ? __(e, t.value)
      : mo(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, o], s) => ((n[Ic(r, s) + " =>"] = o), n),
            {}
          ),
        }
      : p_(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ic(n)) }
      : hs(t)
      ? Ic(t)
      : Pe(t) && !ue(t) && !h_(t)
      ? String(t)
      : t,
  Ic = (e, t = "") => {
    var n;
    return hs(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
function Ka(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Yt;
class v_ {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Yt),
      !t && Yt && (this.index = (Yt.scopes || (Yt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Yt;
      try {
        return (Yt = this), t();
      } finally {
        Yt = n;
      }
    } else Ka("cannot run an inactive effect scope.");
  }
  on() {
    Yt = this;
  }
  off() {
    Yt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Xf(e) {
  return new v_(e);
}
function q1(e, t = Yt) {
  t && t.active && t.effects.push(e);
}
function y_() {
  return Yt;
}
function X1(e) {
  Yt
    ? Yt.cleanups.push(e)
    : Ka(
        "onScopeDispose() is called when there is no active effect scope to be associated with."
      );
}
const Jf = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  b_ = (e) => (e.w & Ur) > 0,
  E_ = (e) => (e.n & Ur) > 0,
  J1 = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ur;
  },
  Q1 = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        b_(o) && !E_(o) ? o.delete(e) : (t[n++] = o),
          (o.w &= ~Ur),
          (o.n &= ~Ur);
      }
      t.length = n;
    }
  },
  qa = new WeakMap();
let Ls = 0,
  Ur = 1;
const hu = 30;
let Ft;
const ho = Symbol("iterate"),
  gu = Symbol("Map key iterate");
class Qf {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      q1(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Ft,
      n = Dr;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Ft),
        (Ft = this),
        (Dr = !0),
        (Ur = 1 << ++Ls),
        Ls <= hu ? J1(this) : Ip(this),
        this.fn()
      );
    } finally {
      Ls <= hu && Q1(this),
        (Ur = 1 << --Ls),
        (Ft = this.parent),
        (Dr = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Ft === this
      ? (this.deferStop = !0)
      : this.active &&
        (Ip(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Ip(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Dr = !0;
const w_ = [];
function Po() {
  w_.push(Dr), (Dr = !1);
}
function Ro() {
  const e = w_.pop();
  Dr = e === void 0 ? !0 : e;
}
function At(e, t, n) {
  if (Dr && Ft) {
    let r = qa.get(e);
    r || qa.set(e, (r = new Map()));
    let o = r.get(n);
    o || r.set(n, (o = Jf())),
      T_(o, { effect: Ft, target: e, type: t, key: n });
  }
}
function T_(e, t) {
  let n = !1;
  Ls <= hu ? E_(e) || ((e.n |= Ur), (n = !b_(e))) : (n = !e.has(Ft)),
    n &&
      (e.add(Ft),
      Ft.deps.push(e),
      Ft.onTrack && Ft.onTrack(Ge({ effect: Ft }, t)));
}
function Nn(e, t, n, r, o, s) {
  const i = qa.get(e);
  if (!i) return;
  let a = [];
  if (t === "clear") a = [...i.values()];
  else if (n === "length" && ue(e)) {
    const c = Number(r);
    i.forEach((u, f) => {
      (f === "length" || (!hs(f) && f >= c)) && a.push(u);
    });
  } else
    switch ((n !== void 0 && a.push(i.get(n)), t)) {
      case "add":
        ue(e)
          ? qf(n) && a.push(i.get("length"))
          : (a.push(i.get(ho)), mo(e) && a.push(i.get(gu)));
        break;
      case "delete":
        ue(e) || (a.push(i.get(ho)), mo(e) && a.push(i.get(gu)));
        break;
      case "set":
        mo(e) && a.push(i.get(ho));
        break;
    }
  const l = {
    target: e,
    type: t,
    key: n,
    newValue: r,
    oldValue: o,
    oldTarget: s,
  };
  if (a.length === 1) a[0] && _u(a[0], l);
  else {
    const c = [];
    for (const u of a) u && c.push(...u);
    _u(Jf(c), l);
  }
}
function _u(e, t) {
  const n = ue(e) ? e : [...e];
  for (const r of n) r.computed && Ap(r, t);
  for (const r of n) r.computed || Ap(r, t);
}
function Ap(e, t) {
  (e !== Ft || e.allowRecurse) &&
    (e.onTrigger && e.onTrigger(Ge({ effect: e }, t)),
    e.scheduler ? e.scheduler() : e.run());
}
function Z1(e, t) {
  var n;
  return (n = qa.get(e)) == null ? void 0 : n.get(t);
}
const eE = Jr("__proto__,__v_isRef,__isVue"),
  S_ = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(hs)
  ),
  Pp = tE();
function tE() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = de(this);
        for (let s = 0, i = this.length; s < i; s++) At(r, "get", s + "");
        const o = r[t](...n);
        return o === -1 || o === !1 ? r[t](...n.map(de)) : o;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Po();
        const r = de(this)[t].apply(this, n);
        return Ro(), r;
      };
    }),
    e
  );
}
function nE(e) {
  const t = de(this);
  return At(t, "has", e), t.hasOwnProperty(e);
}
class C_ {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._shallow = n);
  }
  get(t, n, r) {
    const o = this._isReadonly,
      s = this._shallow;
    if (n === "__v_isReactive") return !o;
    if (n === "__v_isReadonly") return o;
    if (n === "__v_isShallow") return s;
    if (n === "__v_raw")
      return r === (o ? (s ? R_ : P_) : s ? A_ : I_).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = ue(t);
    if (!o) {
      if (i && Te(Pp, n)) return Reflect.get(Pp, n, r);
      if (n === "hasOwnProperty") return nE;
    }
    const a = Reflect.get(t, n, r);
    return (hs(n) ? S_.has(n) : eE(n)) || (o || At(t, "get", n), s)
      ? a
      : je(a)
      ? i && qf(n)
        ? a
        : a.value
      : Pe(a)
      ? o
        ? L_(a)
        : gs(a)
      : a;
  }
}
class O_ extends C_ {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (zr(s) && je(s) && !je(r)) return !1;
    if (
      !this._shallow &&
      (!Xa(r) && !zr(r) && ((s = de(s)), (r = de(r))),
      !ue(t) && je(s) && !je(r))
    )
      return (s.value = r), !0;
    const i = ue(t) && qf(n) ? Number(n) < t.length : Te(t, n),
      a = Reflect.set(t, n, r, o);
    return (
      t === de(o) &&
        (i ? Eo(r, s) && Nn(t, "set", n, r, s) : Nn(t, "add", n, r)),
      a
    );
  }
  deleteProperty(t, n) {
    const r = Te(t, n),
      o = t[n],
      s = Reflect.deleteProperty(t, n);
    return s && r && Nn(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!hs(n) || !S_.has(n)) && At(t, "has", n), r;
  }
  ownKeys(t) {
    return At(t, "iterate", ue(t) ? "length" : ho), Reflect.ownKeys(t);
  }
}
class k_ extends C_ {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return (
      Ka(`Set operation on key "${String(n)}" failed: target is readonly.`, t),
      !0
    );
  }
  deleteProperty(t, n) {
    return (
      Ka(
        `Delete operation on key "${String(n)}" failed: target is readonly.`,
        t
      ),
      !0
    );
  }
}
const rE = new O_(),
  oE = new k_(),
  sE = new O_(!0),
  iE = new k_(!0),
  Zf = (e) => e,
  xl = (e) => Reflect.getPrototypeOf(e);
function Yi(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = de(e),
    s = de(t);
  n || (Eo(t, s) && At(o, "get", t), At(o, "get", s));
  const { has: i } = xl(o),
    a = r ? Zf : n ? ed : ti;
  if (i.call(o, t)) return a(e.get(t));
  if (i.call(o, s)) return a(e.get(s));
  e !== o && e.get(t);
}
function Ki(e, t = !1) {
  const n = this.__v_raw,
    r = de(n),
    o = de(e);
  return (
    t || (Eo(e, o) && At(r, "has", e), At(r, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function qi(e, t = !1) {
  return (
    (e = e.__v_raw), !t && At(de(e), "iterate", ho), Reflect.get(e, "size", e)
  );
}
function Rp(e) {
  e = de(e);
  const t = de(this);
  return xl(t).has.call(t, e) || (t.add(e), Nn(t, "add", e, e)), this;
}
function Np(e, t) {
  t = de(t);
  const n = de(this),
    { has: r, get: o } = xl(n);
  let s = r.call(n, e);
  s ? x_(n, r, e) : ((e = de(e)), (s = r.call(n, e)));
  const i = o.call(n, e);
  return (
    n.set(e, t),
    s ? Eo(t, i) && Nn(n, "set", e, t, i) : Nn(n, "add", e, t),
    this
  );
}
function Lp(e) {
  const t = de(this),
    { has: n, get: r } = xl(t);
  let o = n.call(t, e);
  o ? x_(t, n, e) : ((e = de(e)), (o = n.call(t, e)));
  const s = r ? r.call(t, e) : void 0,
    i = t.delete(e);
  return o && Nn(t, "delete", e, void 0, s), i;
}
function $p() {
  const e = de(this),
    t = e.size !== 0,
    n = mo(e) ? new Map(e) : new Set(e),
    r = e.clear();
  return t && Nn(e, "clear", void 0, void 0, n), r;
}
function Xi(e, t) {
  return function (r, o) {
    const s = this,
      i = s.__v_raw,
      a = de(i),
      l = t ? Zf : e ? ed : ti;
    return (
      !e && At(a, "iterate", ho), i.forEach((c, u) => r.call(o, l(c), l(u), s))
    );
  };
}
function Ji(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      s = de(o),
      i = mo(s),
      a = e === "entries" || (e === Symbol.iterator && i),
      l = e === "keys" && i,
      c = o[e](...r),
      u = n ? Zf : t ? ed : ti;
    return (
      !t && At(s, "iterate", l ? gu : ho),
      {
        next() {
          const { value: f, done: d } = c.next();
          return d
            ? { value: f, done: d }
            : { value: a ? [u(f[0]), u(f[1])] : u(f), done: d };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function gr(e) {
  return function (...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${bo(e)} operation ${n}failed: target is readonly.`,
        de(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function aE() {
  const e = {
      get(s) {
        return Yi(this, s);
      },
      get size() {
        return qi(this);
      },
      has: Ki,
      add: Rp,
      set: Np,
      delete: Lp,
      clear: $p,
      forEach: Xi(!1, !1),
    },
    t = {
      get(s) {
        return Yi(this, s, !1, !0);
      },
      get size() {
        return qi(this);
      },
      has: Ki,
      add: Rp,
      set: Np,
      delete: Lp,
      clear: $p,
      forEach: Xi(!1, !0),
    },
    n = {
      get(s) {
        return Yi(this, s, !0);
      },
      get size() {
        return qi(this, !0);
      },
      has(s) {
        return Ki.call(this, s, !0);
      },
      add: gr("add"),
      set: gr("set"),
      delete: gr("delete"),
      clear: gr("clear"),
      forEach: Xi(!0, !1),
    },
    r = {
      get(s) {
        return Yi(this, s, !0, !0);
      },
      get size() {
        return qi(this, !0);
      },
      has(s) {
        return Ki.call(this, s, !0);
      },
      add: gr("add"),
      set: gr("set"),
      delete: gr("delete"),
      clear: gr("clear"),
      forEach: Xi(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      (e[s] = Ji(s, !1, !1)),
        (n[s] = Ji(s, !0, !1)),
        (t[s] = Ji(s, !1, !0)),
        (r[s] = Ji(s, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [lE, cE, uE, fE] = aE();
function Il(e, t) {
  const n = t ? (e ? fE : uE) : e ? cE : lE;
  return (r, o, s) =>
    o === "__v_isReactive"
      ? !e
      : o === "__v_isReadonly"
      ? e
      : o === "__v_raw"
      ? r
      : Reflect.get(Te(n, o) && o in r ? n : r, o, s);
}
const dE = { get: Il(!1, !1) },
  pE = { get: Il(!1, !0) },
  mE = { get: Il(!0, !1) },
  hE = { get: Il(!0, !0) };
function x_(e, t, n) {
  const r = de(n);
  if (r !== n && t.call(e, r)) {
    const o = Kf(e);
    console.warn(
      `Reactive ${o} contains both the raw and reactive versions of the same object${
        o === "Map" ? " as keys" : ""
      }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const I_ = new WeakMap(),
  A_ = new WeakMap(),
  P_ = new WeakMap(),
  R_ = new WeakMap();
function gE(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function _E(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gE(Kf(e));
}
function gs(e) {
  return zr(e) ? e : Al(e, !1, rE, dE, I_);
}
function N_(e) {
  return Al(e, !1, sE, pE, A_);
}
function L_(e) {
  return Al(e, !0, oE, mE, P_);
}
function $s(e) {
  return Al(e, !0, iE, hE, R_);
}
function Al(e, t, n, r, o) {
  if (!Pe(e))
    return console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive)) return e;
  const s = o.get(e);
  if (s) return s;
  const i = _E(e);
  if (i === 0) return e;
  const a = new Proxy(e, i === 2 ? r : n);
  return o.set(e, a), a;
}
function _n(e) {
  return zr(e) ? _n(e.__v_raw) : !!(e && e.__v_isReactive);
}
function zr(e) {
  return !!(e && e.__v_isReadonly);
}
function Xa(e) {
  return !!(e && e.__v_isShallow);
}
function Ja(e) {
  return _n(e) || zr(e);
}
function de(e) {
  const t = e && e.__v_raw;
  return t ? de(t) : e;
}
function Qn(e) {
  return Ga(e, "__v_skip", !0), e;
}
const ti = (e) => (Pe(e) ? gs(e) : e),
  ed = (e) => (Pe(e) ? L_(e) : e);
function $_(e) {
  Dr &&
    Ft &&
    ((e = de(e)),
    T_(e.dep || (e.dep = Jf()), { target: e, type: "get", key: "value" }));
}
function D_(e, t) {
  e = de(e);
  const n = e.dep;
  n && _u(n, { target: e, type: "set", key: "value", newValue: t });
}
function je(e) {
  return !!(e && e.__v_isRef === !0);
}
function re(e) {
  return F_(e, !1);
}
function M_(e) {
  return F_(e, !0);
}
function F_(e, t) {
  return je(e) ? e : new vE(e, t);
}
class vE {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : de(t)),
      (this._value = n ? t : ti(t));
  }
  get value() {
    return $_(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Xa(t) || zr(t);
    (t = n ? t : de(t)),
      Eo(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : ti(t)), D_(this, t));
  }
}
function te(e) {
  return je(e) ? e.value : e;
}
const yE = {
  get: (e, t, n) => te(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return je(o) && !je(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function H_(e) {
  return _n(e) ? e : new Proxy(e, yE);
}
function Dp(e) {
  Ja(e) ||
    console.warn(
      "toRefs() expects a reactive object but received a plain one."
    );
  const t = ue(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = j_(e, n);
  return t;
}
class bE {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Z1(de(this._object), this._key);
  }
}
class EE {
  constructor(t) {
    (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function Oa(e, t, n) {
  return je(e)
    ? e
    : he(e)
    ? new EE(e)
    : Pe(e) && arguments.length > 1
    ? j_(e, t, n)
    : re(e);
}
function j_(e, t, n) {
  const r = e[t];
  return je(r) ? r : new bE(e, t, n);
}
class wE {
  constructor(t, n, r, o) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new Qf(t, () => {
        this._dirty || ((this._dirty = !0), D_(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = de(this);
    return (
      $_(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function TE(e, t, n = !1) {
  let r, o;
  const s = he(e);
  s
    ? ((r = e),
      (o = () => {
        console.warn("Write operation failed: computed value is readonly");
      }))
    : ((r = e.get), (o = e.set));
  const i = new wE(r, o, s || !o, n);
  return (
    t &&
      !n &&
      ((i.effect.onTrack = t.onTrack), (i.effect.onTrigger = t.onTrigger)),
    i
  );
}
const go = [];
function ka(e) {
  go.push(e);
}
function xa() {
  go.pop();
}
function j(e, ...t) {
  Po();
  const n = go.length ? go[go.length - 1].component : null,
    r = n && n.appContext.config.warnHandler,
    o = SE();
  if (r)
    tr(r, n, 11, [
      e + t.join(""),
      n && n.proxy,
      o.map(({ vnode: s }) => `at <${jl(n, s.type)}>`).join(`
`),
      o,
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length &&
      s.push(
        `
`,
        ...CE(o)
      ),
      console.warn(...s);
  }
  Ro();
}
function SE() {
  let e = go[go.length - 1];
  if (!e) return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e
      ? n.recurseCount++
      : t.push({ vnode: e, recurseCount: 0 });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function CE(e) {
  const t = [];
  return (
    e.forEach((n, r) => {
      t.push(
        ...(r === 0
          ? []
          : [
              `
`,
            ]),
        ...OE(n)
      );
    }),
    t
  );
}
function OE({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "",
    r = e.component ? e.component.parent == null : !1,
    o = ` at <${jl(e.component, e.type, r)}`,
    s = ">" + n;
  return e.props ? [o, ...kE(e.props), s] : [o + s];
}
function kE(e) {
  const t = [],
    n = Object.keys(e);
  return (
    n.slice(0, 3).forEach((r) => {
      t.push(...U_(r, e[r]));
    }),
    n.length > 3 && t.push(" ..."),
    t
  );
}
function U_(e, t, n) {
  return Ye(t)
    ? ((t = JSON.stringify(t)), n ? t : [`${e}=${t}`])
    : typeof t == "number" || typeof t == "boolean" || t == null
    ? n
      ? t
      : [`${e}=${t}`]
    : je(t)
    ? ((t = U_(e, de(t.value), !0)), n ? t : [`${e}=Ref<`, t, ">"])
    : he(t)
    ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`]
    : ((t = de(t)), n ? t : [`${e}=`, t]);
}
function xE(e, t) {
  e !== void 0 &&
    (typeof e != "number"
      ? j(`${t} is not a valid number - got ${JSON.stringify(e)}.`)
      : isNaN(e) &&
        j(`${t} is NaN - the duration expression might be incorrect.`));
}
const td = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core",
};
function tr(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (s) {
    Pl(s, t, n);
  }
  return o;
}
function an(e, t, n, r) {
  if (he(e)) {
    const s = tr(e, t, n, r);
    return (
      s &&
        Yf(s) &&
        s.catch((i) => {
          Pl(i, t, n);
        }),
      s
    );
  }
  const o = [];
  for (let s = 0; s < e.length; s++) o.push(an(e[s], t, n, r));
  return o;
}
function Pl(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy,
      a = td[n];
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, i, a) === !1) return;
      }
      s = s.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      tr(l, null, 10, [e, i, a]);
      return;
    }
  }
  IE(e, n, o, r);
}
function IE(e, t, n, r = !0) {
  {
    const o = td[t];
    if (
      (n && ka(n),
      j(`Unhandled error${o ? ` during execution of ${o}` : ""}`),
      n && xa(),
      r)
    )
      throw e;
    console.error(e);
  }
}
let ni = !1,
  vu = !1;
const kt = [];
let kn = 0;
const Xo = [];
let Sn = null,
  kr = 0;
const z_ = Promise.resolve();
let nd = null;
const AE = 100;
function Gt(e) {
  const t = nd || z_;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function PE(e) {
  let t = kn + 1,
    n = kt.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      o = kt[r],
      s = ri(o);
    s < e || (s === e && o.pre) ? (t = r + 1) : (n = r);
  }
  return t;
}
function Rl(e) {
  (!kt.length || !kt.includes(e, ni && e.allowRecurse ? kn + 1 : kn)) &&
    (e.id == null ? kt.push(e) : kt.splice(PE(e.id), 0, e), B_());
}
function B_() {
  !ni && !vu && ((vu = !0), (nd = z_.then(W_)));
}
function RE(e) {
  const t = kt.indexOf(e);
  t > kn && kt.splice(t, 1);
}
function V_(e) {
  ue(e)
    ? Xo.push(...e)
    : (!Sn || !Sn.includes(e, e.allowRecurse ? kr + 1 : kr)) && Xo.push(e),
    B_();
}
function Mp(e, t, n = ni ? kn + 1 : 0) {
  for (t = t || new Map(); n < kt.length; n++) {
    const r = kt[n];
    if (r && r.pre) {
      if ((e && r.id !== e.uid) || rd(t, r)) continue;
      kt.splice(n, 1), n--, r();
    }
  }
}
function Qa(e) {
  if (Xo.length) {
    const t = [...new Set(Xo)];
    if (((Xo.length = 0), Sn)) {
      Sn.push(...t);
      return;
    }
    for (
      Sn = t, e = e || new Map(), Sn.sort((n, r) => ri(n) - ri(r)), kr = 0;
      kr < Sn.length;
      kr++
    )
      rd(e, Sn[kr]) || Sn[kr]();
    (Sn = null), (kr = 0);
  }
}
const ri = (e) => (e.id == null ? 1 / 0 : e.id),
  NE = (e, t) => {
    const n = ri(e) - ri(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function W_(e) {
  (vu = !1), (ni = !0), (e = e || new Map()), kt.sort(NE);
  const t = (n) => rd(e, n);
  try {
    for (kn = 0; kn < kt.length; kn++) {
      const n = kt[kn];
      if (n && n.active !== !1) {
        if (t(n)) continue;
        tr(n, null, 14);
      }
    }
  } finally {
    (kn = 0),
      (kt.length = 0),
      Qa(e),
      (ni = !1),
      (nd = null),
      (kt.length || Xo.length) && W_(e);
  }
}
function rd(e, t) {
  if (!e.has(t)) e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > AE) {
      const r = t.ownerInstance,
        o = r && pd(r.type);
      return (
        j(
          `Maximum recursive updates exceeded${
            o ? ` in component <${o}>` : ""
          }. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
        ),
        !0
      );
    } else e.set(t, n + 1);
  }
}
let Mr = !1;
const Uo = new Set();
Ya().__VUE_HMR_RUNTIME__ = {
  createRecord: Ac(G_),
  rerender: Ac(DE),
  reload: Ac(ME),
};
const wo = new Map();
function LE(e) {
  const t = e.type.__hmrId;
  let n = wo.get(t);
  n || (G_(t, e.type), (n = wo.get(t))), n.instances.add(e);
}
function $E(e) {
  wo.get(e.type.__hmrId).instances.delete(e);
}
function G_(e, t) {
  return wo.has(e)
    ? !1
    : (wo.set(e, { initialDef: Bs(t), instances: new Set() }), !0);
}
function Bs(e) {
  return Iv(e) ? e.__vccOpts : e;
}
function DE(e, t) {
  const n = wo.get(e);
  n &&
    ((n.initialDef.render = t),
    [...n.instances].forEach((r) => {
      t && ((r.render = t), (Bs(r.type).render = t)),
        (r.renderCache = []),
        (Mr = !0),
        r.update(),
        (Mr = !1);
    }));
}
function ME(e, t) {
  const n = wo.get(e);
  if (!n) return;
  (t = Bs(t)), Fp(n.initialDef, t);
  const r = [...n.instances];
  for (const o of r) {
    const s = Bs(o.type);
    Uo.has(s) || (s !== n.initialDef && Fp(s, t), Uo.add(s)),
      o.appContext.propsCache.delete(o.type),
      o.appContext.emitsCache.delete(o.type),
      o.appContext.optionsCache.delete(o.type),
      o.ceReload
        ? (Uo.add(s), o.ceReload(t.styles), Uo.delete(s))
        : o.parent
        ? Rl(o.parent.update)
        : o.appContext.reload
        ? o.appContext.reload()
        : typeof window < "u"
        ? window.location.reload()
        : console.warn(
            "[HMR] Root or manually mounted instance modified. Full reload required."
          );
  }
  V_(() => {
    for (const o of r) Uo.delete(Bs(o.type));
  });
}
function Fp(e, t) {
  Ge(e, t);
  for (const n in e) n !== "__file" && !(n in t) && delete e[n];
}
function Ac(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r),
        console.warn(
          "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
        );
    }
  };
}
let xn,
  Ds = [],
  yu = !1;
function Ai(e, ...t) {
  xn ? xn.emit(e, ...t) : yu || Ds.push({ event: e, args: t });
}
function Y_(e, t) {
  var n, r;
  (xn = e),
    xn
      ? ((xn.enabled = !0),
        Ds.forEach(({ event: o, args: s }) => xn.emit(o, ...s)),
        (Ds = []))
      : typeof window < "u" &&
        window.HTMLElement &&
        !(
          (r = (n = window.navigator) == null ? void 0 : n.userAgent) != null &&
          r.includes("jsdom")
        )
      ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ =
          t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
          Y_(s, t);
        }),
        setTimeout(() => {
          xn || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (yu = !0), (Ds = []));
        }, 3e3))
      : ((yu = !0), (Ds = []));
}
function FE(e, t) {
  Ai("app:init", e, t, { Fragment: Ae, Text: Br, Comment: pt, Static: Zo });
}
function HE(e) {
  Ai("app:unmount", e);
}
const jE = od("component:added"),
  K_ = od("component:updated"),
  UE = od("component:removed"),
  zE = (e) => {
    xn &&
      typeof xn.cleanupBuffer == "function" &&
      !xn.cleanupBuffer(e) &&
      UE(e);
  };
function od(e) {
  return (t) => {
    Ai(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const BE = q_("perf:start"),
  VE = q_("perf:end");
function q_(e) {
  return (t, n, r) => {
    Ai(e, t.appContext.app, t.uid, t, n, r);
  };
}
function WE(e, t, n) {
  Ai("component:emit", e.appContext.app, e, t, n);
}
function GE(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || He;
  {
    const {
      emitsOptions: u,
      propsOptions: [f],
    } = e;
    if (u)
      if (!(t in u))
        (!f || !(Or(t) in f)) &&
          j(
            `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Or(
              t
            )}" prop.`
          );
      else {
        const d = u[t];
        he(d) &&
          (d(...n) ||
            j(
              `Invalid event arguments: event validation failed for event "${t}".`
            ));
      }
  }
  let o = n;
  const s = t.startsWith("update:"),
    i = s && t.slice(7);
  if (i && i in r) {
    const u = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: f, trim: d } = r[u] || He;
    d && (o = n.map((m) => (Ye(m) ? m.trim() : m))), f && (o = n.map(mu));
  }
  WE(e, t, o);
  {
    const u = t.toLowerCase();
    u !== t &&
      r[Or(u)] &&
      j(
        `Event "${u}" is emitted in component ${jl(
          e,
          e.type
        )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${or(
          t
        )}" instead of "${t}".`
      );
  }
  let a,
    l = r[(a = Or(t))] || r[(a = Or(Mn(t)))];
  !l && s && (l = r[(a = Or(or(t)))]), l && an(l, e, 6, o);
  const c = r[a + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), an(c, e, 6, o);
  }
}
function X_(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (o !== void 0) return o;
  const s = e.emits;
  let i = {},
    a = !1;
  if (!he(e)) {
    const l = (c) => {
      const u = X_(c, t, !0);
      u && ((a = !0), Ge(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !s && !a
    ? (Pe(e) && r.set(e, null), null)
    : (ue(s) ? s.forEach((l) => (i[l] = null)) : Ge(i, s),
      Pe(e) && r.set(e, i),
      i);
}
function Nl(e, t) {
  return !e || !ms(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Te(e, t[0].toLowerCase() + t.slice(1)) || Te(e, or(t)) || Te(e, t));
}
let ct = null,
  Ll = null;
function Za(e) {
  const t = ct;
  return (ct = e), (Ll = (e && e.type.__scopeId) || null), t;
}
function MD(e) {
  Ll = e;
}
function FD() {
  Ll = null;
}
function be(e, t = ct, n) {
  if (!t || e._n) return e;
  const r = (...o) => {
    r._d && Zp(-1);
    const s = Za(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Za(s), r._d && Zp(1);
    }
    return K_(t), i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
let bu = !1;
function el() {
  bu = !0;
}
function Pc(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: s,
    propsOptions: [i],
    slots: a,
    attrs: l,
    emit: c,
    render: u,
    renderCache: f,
    data: d,
    setupState: m,
    ctx: g,
    inheritAttrs: _,
  } = e;
  let T, y;
  const E = Za(e);
  bu = !1;
  try {
    if (n.shapeFlag & 4) {
      const C = o || r,
        I = m.__isScriptSetup
          ? new Proxy(C, {
              get(S, M, F) {
                return (
                  j(
                    `Property '${String(
                      M
                    )}' was accessed via 'this'. Avoid using 'this' in templates.`
                  ),
                  Reflect.get(S, M, F)
                );
              },
            })
          : C;
      (T = on(u.call(I, C, f, s, m, d, g))), (y = l);
    } else {
      const C = t;
      l === s && el(),
        (T = on(
          C.length > 1
            ? C(s, {
                get attrs() {
                  return el(), l;
                },
                slots: a,
                emit: c,
              })
            : C(s, null)
        )),
        (y = t.props ? l : KE(l));
    }
  } catch (C) {
    (Vs.length = 0), Pl(C, e, 1), (T = ae(pt));
  }
  let v = T,
    w;
  if (
    (T.patchFlag > 0 && T.patchFlag & 2048 && ([v, w] = YE(T)), y && _ !== !1)
  ) {
    const C = Object.keys(y),
      { shapeFlag: I } = v;
    if (C.length) {
      if (I & 7) i && C.some(Wa) && (y = qE(y, i)), (v = yn(v, y));
      else if (!bu && v.type !== pt) {
        const S = Object.keys(l),
          M = [],
          F = [];
        for (let A = 0, D = S.length; A < D; A++) {
          const L = S[A];
          ms(L) ? Wa(L) || M.push(L[2].toLowerCase() + L.slice(3)) : F.push(L);
        }
        F.length &&
          j(
            `Extraneous non-props attributes (${F.join(
              ", "
            )}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
          ),
          M.length &&
            j(
              `Extraneous non-emits event listeners (${M.join(
                ", "
              )}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
            );
      }
    }
  }
  return (
    n.dirs &&
      (Hp(v) ||
        j(
          "Runtime directive used on component with non-element root node. The directives will not function as intended."
        ),
      (v = yn(v)),
      (v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs)),
    n.transition &&
      (Hp(v) ||
        j(
          "Component inside <Transition> renders non-element root node that cannot be animated."
        ),
      (v.transition = n.transition)),
    w ? w(v) : (T = v),
    Za(E),
    T
  );
}
const YE = (e) => {
  const t = e.children,
    n = e.dynamicChildren,
    r = J_(t);
  if (!r) return [e, void 0];
  const o = t.indexOf(r),
    s = n ? n.indexOf(r) : -1,
    i = (a) => {
      (t[o] = a),
        n &&
          (s > -1
            ? (n[s] = a)
            : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
    };
  return [on(r), i];
};
function J_(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (ns(r)) {
      if (r.type !== pt || r.children === "v-if") {
        if (t) return;
        t = r;
      }
    } else return;
  }
  return t;
}
const KE = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || ms(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  qE = (e, t) => {
    const n = {};
    for (const r in e) (!Wa(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  },
  Hp = (e) => e.shapeFlag & 7 || e.type === pt;
function XE(e, t, n) {
  const { props: r, children: o, component: s } = e,
    { props: i, children: a, patchFlag: l } = t,
    c = s.emitsOptions;
  if (((o || a) && Mr) || t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? jp(r, i, c) : !!i;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (i[d] !== r[d] && !Nl(c, d)) return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? jp(r, i, c)
        : !0
      : !!i;
  return !1;
}
function jp(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !Nl(n, s)) return !0;
  }
  return !1;
}
function JE({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const tl = "components";
function ln(e, t) {
  return Z_(tl, e, !0, t) || e;
}
const Q_ = Symbol.for("v-ndc");
function $l(e) {
  return Ye(e) ? Z_(tl, e, !1) || e : e || Q_;
}
function Z_(e, t, n = !0, r = !1) {
  const o = ct || lt;
  if (o) {
    const s = o.type;
    if (e === tl) {
      const a = pd(s, !1);
      if (a && (a === t || a === Mn(t) || a === bo(Mn(t)))) return s;
    }
    const i = Up(o[e] || s[e], t) || Up(o.appContext[e], t);
    if (!i && r) return s;
    if (n && !i) {
      const a =
        e === tl
          ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`
          : "";
      j(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return i;
  } else
    j(`resolve${bo(e.slice(0, -1))} can only be used in render() or setup().`);
}
function Up(e, t) {
  return e && (e[t] || e[Mn(t)] || e[bo(Mn(t))]);
}
const QE = (e) => e.__isSuspense;
function ev(e, t) {
  t && t.pendingBranch
    ? ue(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : V_(e);
}
function Tt(e, t) {
  return sd(e, null, t);
}
const Qi = {};
function xt(e, t, n) {
  return (
    he(t) ||
      j(
        "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
      ),
    sd(e, t, n)
  );
}
function sd(
  e,
  t,
  { immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i } = He
) {
  var a;
  t ||
    (n !== void 0 &&
      j(
        'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
      ),
    r !== void 0 &&
      j(
        'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
      ));
  const l = (C) => {
      j(
        "Invalid watch source: ",
        C,
        "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
      );
    },
    c = y_() === ((a = lt) == null ? void 0 : a.scope) ? lt : null;
  let u,
    f = !1,
    d = !1;
  if (
    (je(e)
      ? ((u = () => e.value), (f = Xa(e)))
      : _n(e)
      ? ((u = () => e), (r = !0))
      : ue(e)
      ? ((d = !0),
        (f = e.some((C) => _n(C) || Xa(C))),
        (u = () =>
          e.map((C) => {
            if (je(C)) return C.value;
            if (_n(C)) return lo(C);
            if (he(C)) return tr(C, c, 2);
            l(C);
          })))
      : he(e)
      ? t
        ? (u = () => tr(e, c, 2))
        : (u = () => {
            if (!(c && c.isUnmounted)) return m && m(), an(e, c, 3, [g]);
          })
      : ((u = Wt), l(e)),
    t && r)
  ) {
    const C = u;
    u = () => lo(C());
  }
  let m,
    g = (C) => {
      m = v.onStop = () => {
        tr(C, c, 4), (m = v.onStop = void 0);
      };
    },
    _;
  if (li)
    if (
      ((g = Wt),
      t ? n && an(t, c, 3, [u(), d ? [] : void 0, g]) : u(),
      o === "sync")
    ) {
      const C = aT();
      _ = C.__watcherHandles || (C.__watcherHandles = []);
    } else return Wt;
  let T = d ? new Array(e.length).fill(Qi) : Qi;
  const y = () => {
    if (v.active)
      if (t) {
        const C = v.run();
        (r || f || (d ? C.some((I, S) => Eo(I, T[S])) : Eo(C, T))) &&
          (m && m(),
          an(t, c, 3, [C, T === Qi ? void 0 : d && T[0] === Qi ? [] : T, g]),
          (T = C));
      } else v.run();
  };
  y.allowRecurse = !!t;
  let E;
  o === "sync"
    ? (E = y)
    : o === "post"
    ? (E = () => zt(y, c && c.suspense))
    : ((y.pre = !0), c && (y.id = c.uid), (E = () => Rl(y)));
  const v = new Qf(u, E);
  (v.onTrack = s),
    (v.onTrigger = i),
    t
      ? n
        ? y()
        : (T = v.run())
      : o === "post"
      ? zt(v.run.bind(v), c && c.suspense)
      : v.run();
  const w = () => {
    v.stop(), c && c.scope && Gf(c.scope.effects, v);
  };
  return _ && _.push(w), w;
}
function ZE(e, t, n) {
  const r = this.proxy,
    o = Ye(e) ? (e.includes(".") ? tv(r, e) : () => r[e]) : e.bind(r, r);
  let s;
  he(t) ? (s = t) : ((s = t.handler), (n = t));
  const i = lt;
  rs(this);
  const a = sd(o, s.bind(r), n);
  return i ? rs(i) : vo(), a;
}
function tv(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++) r = r[n[o]];
    return r;
  };
}
function lo(e, t) {
  if (!Pe(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), je(e))) lo(e.value, t);
  else if (ue(e)) for (let n = 0; n < e.length; n++) lo(e[n], t);
  else if (p_(e) || mo(e))
    e.forEach((n) => {
      lo(n, t);
    });
  else if (h_(e)) for (const n in e) lo(e[n], t);
  return e;
}
function nv(e) {
  $1(e) && j("Do not use built-in directive ids as custom directive id: " + e);
}
function ew(e, t) {
  const n = ct;
  if (n === null)
    return j("withDirectives can only be used inside render functions."), e;
  const r = Hl(n) || n.proxy,
    o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, a, l, c = He] = t[s];
    i &&
      (he(i) && (i = { mounted: i, updated: i }),
      i.deep && lo(a),
      o.push({
        dir: i,
        instance: r,
        value: a,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }));
  }
  return e;
}
function On(e, t, n, r) {
  const o = e.dirs,
    s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    s && (a.oldValue = s[i].value);
    let l = a.dir[r];
    l && (Po(), an(l, n, 8, [e.el, a, e, t]), Ro());
  }
}
const xr = Symbol("_leaveCb"),
  Zi = Symbol("_enterCb");
function rv() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    it(() => {
      e.isMounted = !0;
    }),
    ad(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const tn = [Function, Array],
  ov = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: tn,
    onEnter: tn,
    onAfterEnter: tn,
    onEnterCancelled: tn,
    onBeforeLeave: tn,
    onLeave: tn,
    onAfterLeave: tn,
    onLeaveCancelled: tn,
    onBeforeAppear: tn,
    onAppear: tn,
    onAfterAppear: tn,
    onAppearCancelled: tn,
  },
  tw = {
    name: "BaseTransition",
    props: ov,
    setup(e, { slots: t }) {
      const n = bn(),
        r = rv();
      let o;
      return () => {
        const s = t.default && id(t.default(), !0);
        if (!s || !s.length) return;
        let i = s[0];
        if (s.length > 1) {
          let _ = !1;
          for (const T of s)
            if (T.type !== pt) {
              if (_) {
                j(
                  "<transition> can only be used on a single element or component. Use <transition-group> for lists."
                );
                break;
              }
              (i = T), (_ = !0);
            }
        }
        const a = de(e),
          { mode: l } = a;
        if (
          (l &&
            l !== "in-out" &&
            l !== "out-in" &&
            l !== "default" &&
            j(`invalid <transition> mode: ${l}`),
          r.isLeaving)
        )
          return Rc(i);
        const c = zp(i);
        if (!c) return Rc(i);
        const u = oi(c, a, r, n);
        si(c, u);
        const f = n.subTree,
          d = f && zp(f);
        let m = !1;
        const { getTransitionKey: g } = c.type;
        if (g) {
          const _ = g();
          o === void 0 ? (o = _) : _ !== o && ((o = _), (m = !0));
        }
        if (d && d.type !== pt && (!so(c, d) || m)) {
          const _ = oi(d, a, r, n);
          if ((si(d, _), l === "out-in"))
            return (
              (r.isLeaving = !0),
              (_.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              Rc(i)
            );
          l === "in-out" &&
            c.type !== pt &&
            (_.delayLeave = (T, y, E) => {
              const v = sv(r, d);
              (v[String(d.key)] = d),
                (T[xr] = () => {
                  y(), (T[xr] = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = E);
            });
        }
        return i;
      };
    },
  },
  nw = tw;
function sv(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function oi(e, t, n, r) {
  const {
      appear: o,
      mode: s,
      persisted: i = !1,
      onBeforeEnter: a,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: f,
      onLeave: d,
      onAfterLeave: m,
      onLeaveCancelled: g,
      onBeforeAppear: _,
      onAppear: T,
      onAfterAppear: y,
      onAppearCancelled: E,
    } = t,
    v = String(e.key),
    w = sv(n, e),
    C = (M, F) => {
      M && an(M, r, 9, F);
    },
    I = (M, F) => {
      const A = F[1];
      C(M, F),
        ue(M) ? M.every((D) => D.length <= 1) && A() : M.length <= 1 && A();
    },
    S = {
      mode: s,
      persisted: i,
      beforeEnter(M) {
        let F = a;
        if (!n.isMounted)
          if (o) F = _ || a;
          else return;
        M[xr] && M[xr](!0);
        const A = w[v];
        A && so(e, A) && A.el[xr] && A.el[xr](), C(F, [M]);
      },
      enter(M) {
        let F = l,
          A = c,
          D = u;
        if (!n.isMounted)
          if (o) (F = T || l), (A = y || c), (D = E || u);
          else return;
        let L = !1;
        const Y = (M[Zi] = (ve) => {
          L ||
            ((L = !0),
            ve ? C(D, [M]) : C(A, [M]),
            S.delayedLeave && S.delayedLeave(),
            (M[Zi] = void 0));
        });
        F ? I(F, [M, Y]) : Y();
      },
      leave(M, F) {
        const A = String(e.key);
        if ((M[Zi] && M[Zi](!0), n.isUnmounting)) return F();
        C(f, [M]);
        let D = !1;
        const L = (M[xr] = (Y) => {
          D ||
            ((D = !0),
            F(),
            Y ? C(g, [M]) : C(m, [M]),
            (M[xr] = void 0),
            w[A] === e && delete w[A]);
        });
        (w[A] = e), d ? I(d, [M, L]) : L();
      },
      clone(M) {
        return oi(M, t, n, r);
      },
    };
  return S;
}
function Rc(e) {
  if (Pi(e)) return (e = yn(e)), (e.children = null), e;
}
function zp(e) {
  return Pi(e)
    ? e.component
      ? e.component.subTree
      : e.children
      ? e.children[0]
      : void 0
    : e;
}
function si(e, t) {
  e.shapeFlag & 6 && e.component
    ? si(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function id(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Ae
      ? (i.patchFlag & 128 && o++, (r = r.concat(id(i.children, t, a))))
      : (t || i.type !== pt) && r.push(a != null ? yn(i, { key: a }) : i);
  }
  if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function Re(e, t) {
  return he(e) ? (() => Ge({ name: e.name }, t, { setup: e }))() : e;
}
const Jo = (e) => !!e.type.__asyncLoader,
  Pi = (e) => e.type.__isKeepAlive;
function iv(e, t) {
  lv(e, "a", t);
}
function av(e, t) {
  lv(e, "da", t);
}
function lv(e, t, n = lt) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((Dl(t, r, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      Pi(o.parent.vnode) && rw(r, t, n, o), (o = o.parent);
  }
}
function rw(e, t, n, r) {
  const o = Dl(t, e, r, !0);
  Pt(() => {
    Gf(r[t], o);
  }, n);
}
function Dl(e, t, n = lt, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          Po(), rs(n);
          const a = an(t, n, e, i);
          return vo(), Ro(), a;
        });
    return r ? o.unshift(s) : o.push(s), s;
  } else {
    const o = Or(td[e].replace(/ hook$/, ""));
    j(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const fr =
    (e) =>
    (t, n = lt) =>
      (!li || e === "sp") && Dl(e, (...r) => t(...r), n),
  ow = fr("bm"),
  it = fr("m"),
  sw = fr("bu"),
  cv = fr("u"),
  ad = fr("bum"),
  Pt = fr("um"),
  iw = fr("sp"),
  aw = fr("rtg"),
  lw = fr("rtc");
function cw(e, t = lt) {
  Dl("ec", e, t);
}
function To(e, t, n, r) {
  let o;
  const s = n && n[r];
  if (ue(e) || Ye(e)) {
    o = new Array(e.length);
    for (let i = 0, a = e.length; i < a; i++)
      o[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    Number.isInteger(e) ||
      j(`The v-for range expect an integer value but got ${e}.`),
      (o = new Array(e));
    for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (Pe(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (i, a) => t(i, a, void 0, s && s[a]));
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let a = 0, l = i.length; a < l; a++) {
        const c = i[a];
        o[a] = t(e[c], c, a, s && s[a]);
      }
    }
  else o = [];
  return n && (n[r] = o), o;
}
function uw(e, t, n = {}, r, o) {
  if (ct.isCE || (ct.parent && Jo(ct.parent) && ct.parent.isCE))
    return t !== "default" && (n.name = t), ae("slot", n, r && r());
  let s = e[t];
  s &&
    s.length > 1 &&
    (j(
      "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
    ),
    (s = () => [])),
    s && s._c && (s._d = !1),
    se();
  const i = s && uv(s(n)),
    a = tt(
      Ae,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (r ? r() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    s && s._c && (s._d = !0),
    a
  );
}
function uv(e) {
  return e.some((t) =>
    ns(t) ? !(t.type === pt || (t.type === Ae && !uv(t.children))) : !0
  )
    ? e
    : null;
}
function fw(e, t) {
  const n = {};
  if (!Pe(e)) return j("v-on with no argument expects an object value."), n;
  for (const r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : Or(r)] = e[r];
  return n;
}
const Eu = (e) => (e ? (kv(e) ? Hl(e) || e.proxy : Eu(e.parent)) : null),
  _o = Ge(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => $s(e.props),
    $attrs: (e) => $s(e.attrs),
    $slots: (e) => $s(e.slots),
    $refs: (e) => $s(e.refs),
    $parent: (e) => Eu(e.parent),
    $root: (e) => Eu(e.root),
    $emit: (e) => e.emit,
    $options: (e) => cd(e),
    $forceUpdate: (e) => e.f || (e.f = () => Rl(e.update)),
    $nextTick: (e) => e.n || (e.n = Gt.bind(e.proxy)),
    $watch: (e) => ZE.bind(e),
  }),
  ld = (e) => e === "_" || e === "$",
  Nc = (e, t) => e !== He && !e.__isScriptSetup && Te(e, t),
  fv = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: s,
        accessCache: i,
        type: a,
        appContext: l,
      } = e;
      if (t === "__isVue") return !0;
      let c;
      if (t[0] !== "$") {
        const m = i[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return r[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return s[t];
          }
        else {
          if (Nc(r, t)) return (i[t] = 1), r[t];
          if (o !== He && Te(o, t)) return (i[t] = 2), o[t];
          if ((c = e.propsOptions[0]) && Te(c, t)) return (i[t] = 3), s[t];
          if (n !== He && Te(n, t)) return (i[t] = 4), n[t];
          wu && (i[t] = 0);
        }
      }
      const u = _o[t];
      let f, d;
      if (u)
        return (
          t === "$attrs"
            ? (At(e, "get", t), el())
            : t === "$slots" && At(e, "get", t),
          u(e)
        );
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== He && Te(n, t)) return (i[t] = 4), n[t];
      if (((d = l.config.globalProperties), Te(d, t))) return d[t];
      ct &&
        (!Ye(t) || t.indexOf("__v") !== 0) &&
        (o !== He && ld(t[0]) && Te(o, t)
          ? j(
              `Property ${JSON.stringify(
                t
              )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
            )
          : e === ct &&
            j(
              `Property ${JSON.stringify(
                t
              )} was accessed during render but is not defined on instance.`
            ));
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return Nc(o, t)
        ? ((o[t] = n), !0)
        : o.__isScriptSetup && Te(o, t)
        ? (j(`Cannot mutate <script setup> binding "${t}" from Options API.`),
          !1)
        : r !== He && Te(r, t)
        ? ((r[t] = n), !0)
        : Te(e.props, t)
        ? (j(`Attempting to mutate prop "${t}". Props are readonly.`), !1)
        : t[0] === "$" && t.slice(1) in e
        ? (j(
            `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
          ),
          !1)
        : (t in e.appContext.config.globalProperties
            ? Object.defineProperty(s, t, {
                enumerable: !0,
                configurable: !0,
                value: n,
              })
            : (s[t] = n),
          !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: o,
          propsOptions: s,
        },
      },
      i
    ) {
      let a;
      return (
        !!n[i] ||
        (e !== He && Te(e, i)) ||
        Nc(t, i) ||
        ((a = s[0]) && Te(a, i)) ||
        Te(r, i) ||
        Te(_o, i) ||
        Te(o.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Te(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
fv.ownKeys = (e) => (
  j(
    "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
  ),
  Reflect.ownKeys(e)
);
function dw(e) {
  const t = {};
  return (
    Object.defineProperty(t, "_", {
      configurable: !0,
      enumerable: !1,
      get: () => e,
    }),
    Object.keys(_o).forEach((n) => {
      Object.defineProperty(t, n, {
        configurable: !0,
        enumerable: !1,
        get: () => _o[n](e),
        set: Wt,
      });
    }),
    t
  );
}
function pw(e) {
  const {
    ctx: t,
    propsOptions: [n],
  } = e;
  n &&
    Object.keys(n).forEach((r) => {
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => e.props[r],
        set: Wt,
      });
    });
}
function mw(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(de(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (ld(r[0])) {
        j(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: Wt,
      });
    }
  });
}
function Bp(e) {
  return ue(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function hw() {
  const e = Object.create(null);
  return (t, n) => {
    e[n]
      ? j(`${t} property "${n}" is already defined in ${e[n]}.`)
      : (e[n] = t);
  };
}
let wu = !0;
function gw(e) {
  const t = cd(e),
    n = e.proxy,
    r = e.ctx;
  (wu = !1), t.beforeCreate && Vp(t.beforeCreate, e, "bc");
  const {
      data: o,
      computed: s,
      methods: i,
      watch: a,
      provide: l,
      inject: c,
      created: u,
      beforeMount: f,
      mounted: d,
      beforeUpdate: m,
      updated: g,
      activated: _,
      deactivated: T,
      beforeDestroy: y,
      beforeUnmount: E,
      destroyed: v,
      unmounted: w,
      render: C,
      renderTracked: I,
      renderTriggered: S,
      errorCaptured: M,
      serverPrefetch: F,
      expose: A,
      inheritAttrs: D,
      components: L,
      directives: Y,
      filters: ve,
    } = t,
    ye = hw();
  {
    const [W] = e.propsOptions;
    if (W) for (const U in W) ye("Props", U);
  }
  if ((c && _w(c, r, ye), i))
    for (const W in i) {
      const U = i[W];
      he(U)
        ? (Object.defineProperty(r, W, {
            value: U.bind(n),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          }),
          ye("Methods", W))
        : j(
            `Method "${W}" has type "${typeof U}" in the component definition. Did you reference the function correctly?`
          );
    }
  if (o) {
    he(o) ||
      j(
        "The data option must be a function. Plain object usage is no longer supported."
      );
    const W = o.call(n, n);
    if (
      (Yf(W) &&
        j(
          "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
        ),
      !Pe(W))
    )
      j("data() should return an object.");
    else {
      e.data = gs(W);
      for (const U in W)
        ye("Data", U),
          ld(U[0]) ||
            Object.defineProperty(r, U, {
              configurable: !0,
              enumerable: !0,
              get: () => W[U],
              set: Wt,
            });
    }
  }
  if (((wu = !0), s))
    for (const W in s) {
      const U = s[W],
        Ie = he(U) ? U.bind(n, n) : he(U.get) ? U.get.bind(n, n) : Wt;
      Ie === Wt && j(`Computed property "${W}" has no getter.`);
      const Ne =
          !he(U) && he(U.set)
            ? U.set.bind(n)
            : () => {
                j(
                  `Write operation failed: computed property "${W}" is readonly.`
                );
              },
        ht = ie({ get: Ie, set: Ne });
      Object.defineProperty(r, W, {
        enumerable: !0,
        configurable: !0,
        get: () => ht.value,
        set: (Ke) => (ht.value = Ke),
      }),
        ye("Computed", W);
    }
  if (a) for (const W in a) dv(a[W], r, n, W);
  if (l) {
    const W = he(l) ? l.call(n) : l;
    Reflect.ownKeys(W).forEach((U) => {
      bt(U, W[U]);
    });
  }
  u && Vp(u, e, "c");
  function Z(W, U) {
    ue(U) ? U.forEach((Ie) => W(Ie.bind(n))) : U && W(U.bind(n));
  }
  if (
    (Z(ow, f),
    Z(it, d),
    Z(sw, m),
    Z(cv, g),
    Z(iv, _),
    Z(av, T),
    Z(cw, M),
    Z(lw, I),
    Z(aw, S),
    Z(ad, E),
    Z(Pt, w),
    Z(iw, F),
    ue(A))
  )
    if (A.length) {
      const W = e.exposed || (e.exposed = {});
      A.forEach((U) => {
        Object.defineProperty(W, U, {
          get: () => n[U],
          set: (Ie) => (n[U] = Ie),
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === Wt && (e.render = C),
    D != null && (e.inheritAttrs = D),
    L && (e.components = L),
    Y && (e.directives = Y);
}
function _w(e, t, n = Wt) {
  ue(e) && (e = Tu(e));
  for (const r in e) {
    const o = e[r];
    let s;
    Pe(o)
      ? "default" in o
        ? (s = Me(o.from || r, o.default, !0))
        : (s = Me(o.from || r))
      : (s = Me(o)),
      je(s)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (i) => (s.value = i),
          })
        : (t[r] = s),
      n("Inject", r);
  }
}
function Vp(e, t, n) {
  an(ue(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function dv(e, t, n, r) {
  const o = r.includes(".") ? tv(n, r) : () => n[r];
  if (Ye(e)) {
    const s = t[e];
    he(s) ? xt(o, s) : j(`Invalid watch handler specified by key "${e}"`, s);
  } else if (he(e)) xt(o, e.bind(n));
  else if (Pe(e))
    if (ue(e)) e.forEach((s) => dv(s, t, n, r));
    else {
      const s = he(e.handler) ? e.handler.bind(n) : t[e.handler];
      he(s)
        ? xt(o, s, e)
        : j(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else j(`Invalid watch option: "${r}"`, e);
}
function cd(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: s,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    a = s.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !o.length && !n && !r
      ? (l = t)
      : ((l = {}), o.length && o.forEach((c) => nl(l, c, i, !0)), nl(l, t, i)),
    Pe(t) && s.set(t, l),
    l
  );
}
function nl(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && nl(e, s, n, !0), o && o.forEach((i) => nl(e, i, n, !0));
  for (const i in t)
    if (r && i === "expose")
      j(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = vw[i] || (n && n[i]);
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const vw = {
  data: Wp,
  props: Gp,
  emits: Gp,
  methods: Ms,
  computed: Ms,
  beforeCreate: Lt,
  created: Lt,
  beforeMount: Lt,
  mounted: Lt,
  beforeUpdate: Lt,
  updated: Lt,
  beforeDestroy: Lt,
  beforeUnmount: Lt,
  destroyed: Lt,
  unmounted: Lt,
  activated: Lt,
  deactivated: Lt,
  errorCaptured: Lt,
  serverPrefetch: Lt,
  components: Ms,
  directives: Ms,
  watch: bw,
  provide: Wp,
  inject: yw,
};
function Wp(e, t) {
  return t
    ? e
      ? function () {
          return Ge(
            he(e) ? e.call(this, this) : e,
            he(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function yw(e, t) {
  return Ms(Tu(e), Tu(t));
}
function Tu(e) {
  if (ue(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Lt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ms(e, t) {
  return e ? Ge(Object.create(null), e, t) : t;
}
function Gp(e, t) {
  return e
    ? ue(e) && ue(t)
      ? [...new Set([...e, ...t])]
      : Ge(Object.create(null), Bp(e), Bp(t ?? {}))
    : t;
}
function bw(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ge(Object.create(null), e);
  for (const r in t) n[r] = Lt(e[r], t[r]);
  return n;
}
function pv() {
  return {
    app: null,
    config: {
      isNativeTag: d_,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Ew = 0;
function ww(e, t) {
  return function (r, o = null) {
    he(r) || (r = Ge({}, r)),
      o != null &&
        !Pe(o) &&
        (j("root props passed to app.mount() must be an object."), (o = null));
    const s = pv();
    Object.defineProperty(s.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        j(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now always unwraps injected refs in Options API."
        );
      },
    });
    const i = new WeakSet();
    let a = !1;
    const l = (s.app = {
      _uid: Ew++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: il,
      get config() {
        return s.config;
      },
      set config(c) {
        j("app.config cannot be replaced. Modify individual options instead.");
      },
      use(c, ...u) {
        return (
          i.has(c)
            ? j("Plugin has already been applied to target app.")
            : c && he(c.install)
            ? (i.add(c), c.install(l, ...u))
            : he(c)
            ? (i.add(c), c(l, ...u))
            : j(
                'A plugin must either be a function or an object with an "install" function.'
              ),
          l
        );
      },
      mixin(c) {
        return (
          s.mixins.includes(c)
            ? j(
                "Mixin has already been applied to target app" +
                  (c.name ? `: ${c.name}` : "")
              )
            : s.mixins.push(c),
          l
        );
      },
      component(c, u) {
        return (
          ku(c, s.config),
          u
            ? (s.components[c] &&
                j(
                  `Component "${c}" has already been registered in target app.`
                ),
              (s.components[c] = u),
              l)
            : s.components[c]
        );
      },
      directive(c, u) {
        return (
          nv(c),
          u
            ? (s.directives[c] &&
                j(
                  `Directive "${c}" has already been registered in target app.`
                ),
              (s.directives[c] = u),
              l)
            : s.directives[c]
        );
      },
      mount(c, u, f) {
        if (a)
          j(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          c.__vue_app__ &&
            j(
              "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
            );
          const d = ae(r, o);
          return (
            (d.appContext = s),
            (s.reload = () => {
              e(yn(d), c, f);
            }),
            u && t ? t(d, c) : e(d, c, f),
            (a = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            (l._instance = d.component),
            FE(l, il),
            Hl(d.component) || d.component.proxy
          );
        }
      },
      unmount() {
        a
          ? (e(null, l._container),
            (l._instance = null),
            HE(l),
            delete l._container.__vue_app__)
          : j("Cannot unmount an app that is not mounted.");
      },
      provide(c, u) {
        return (
          c in s.provides &&
            j(
              `App already provides property with key "${String(
                c
              )}". It will be overwritten with the new value.`
            ),
          (s.provides[c] = u),
          l
        );
      },
      runWithContext(c) {
        ii = l;
        try {
          return c();
        } finally {
          ii = null;
        }
      },
    });
    return l;
  };
}
let ii = null;
function bt(e, t) {
  if (!lt) j("provide() can only be used inside setup().");
  else {
    let n = lt.provides;
    const r = lt.parent && lt.parent.provides;
    r === n && (n = lt.provides = Object.create(r)), (n[e] = t);
  }
}
function Me(e, t, n = !1) {
  const r = lt || ct;
  if (r || ii) {
    const o = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : ii._context.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && he(t) ? t.call(r && r.proxy) : t;
    j(`injection "${String(e)}" not found.`);
  } else
    j("inject() can only be used inside setup() or functional components.");
}
function Tw() {
  return !!(lt || ct || ii);
}
function Sw(e, t, n, r = !1) {
  const o = {},
    s = {};
  Ga(s, Ml, 1), (e.propsDefaults = Object.create(null)), mv(e, t, o, s);
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  gv(t || {}, o, e),
    n
      ? (e.props = r ? o : N_(o))
      : e.type.props
      ? (e.props = o)
      : (e.props = s),
    (e.attrs = s);
}
function Cw(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Ow(e, t, n, r) {
  const {
      props: o,
      attrs: s,
      vnode: { patchFlag: i },
    } = e,
    a = de(o),
    [l] = e.propsOptions;
  let c = !1;
  if (!Cw(e) && (r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (Nl(e.emitsOptions, d)) continue;
        const m = t[d];
        if (l)
          if (Te(s, d)) m !== s[d] && ((s[d] = m), (c = !0));
          else {
            const g = Mn(d);
            o[g] = Su(l, a, g, m, e, !1);
          }
        else m !== s[d] && ((s[d] = m), (c = !0));
      }
    }
  } else {
    mv(e, t, o, s) && (c = !0);
    let u;
    for (const f in a)
      (!t || (!Te(t, f) && ((u = or(f)) === f || !Te(t, u)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (o[f] = Su(l, a, f, void 0, e, !0))
          : delete o[f]);
    if (s !== a)
      for (const f in s) (!t || !Te(t, f)) && (delete s[f], (c = !0));
  }
  c && Nn(e, "set", "$attrs"), gv(t || {}, o, e);
}
function mv(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let l in t) {
      if (zs(l)) continue;
      const c = t[l];
      let u;
      o && Te(o, (u = Mn(l)))
        ? !s || !s.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : Nl(e.emitsOptions, l) ||
          ((!(l in r) || c !== r[l]) && ((r[l] = c), (i = !0)));
    }
  if (s) {
    const l = de(n),
      c = a || He;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      n[f] = Su(o, l, f, c[f], e, !Te(c, f));
    }
  }
  return i;
}
function Su(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const a = Te(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && he(l)) {
        const { propsDefaults: c } = o;
        n in c ? (r = c[n]) : (rs(o), (r = c[n] = l.call(null, t)), vo());
      } else r = l;
    }
    i[0] &&
      (s && !a ? (r = !1) : i[1] && (r === "" || r === or(n)) && (r = !0));
  }
  return r;
}
function hv(e, t, n = !1) {
  const r = t.propsCache,
    o = r.get(e);
  if (o) return o;
  const s = e.props,
    i = {},
    a = [];
  let l = !1;
  if (!he(e)) {
    const u = (f) => {
      l = !0;
      const [d, m] = hv(f, t, !0);
      Ge(i, d), m && a.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l) return Pe(e) && r.set(e, qo), qo;
  if (ue(s))
    for (let u = 0; u < s.length; u++) {
      Ye(s[u]) || j("props must be strings when using array syntax.", s[u]);
      const f = Mn(s[u]);
      Yp(f) && (i[f] = He);
    }
  else if (s) {
    Pe(s) || j("invalid props options", s);
    for (const u in s) {
      const f = Mn(u);
      if (Yp(f)) {
        const d = s[u],
          m = (i[f] = ue(d) || he(d) ? { type: d } : Ge({}, d));
        if (m) {
          const g = qp(Boolean, m.type),
            _ = qp(String, m.type);
          (m[0] = g > -1),
            (m[1] = _ < 0 || g < _),
            (g > -1 || Te(m, "default")) && a.push(f);
        }
      }
    }
  }
  const c = [i, a];
  return Pe(e) && r.set(e, c), c;
}
function Yp(e) {
  return e[0] !== "$"
    ? !0
    : (j(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Cu(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Kp(e, t) {
  return Cu(e) === Cu(t);
}
function qp(e, t) {
  return ue(t) ? t.findIndex((n) => Kp(n, e)) : he(t) && Kp(t, e) ? 0 : -1;
}
function gv(e, t, n) {
  const r = de(t),
    o = n.propsOptions[0];
  for (const s in o) {
    let i = o[s];
    i != null && kw(s, r[s], i, !Te(e, s) && !Te(e, or(s)));
  }
}
function kw(e, t, n, r) {
  const { type: o, required: s, validator: i, skipCheck: a } = n;
  if (s && r) {
    j('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (o != null && o !== !0 && !a) {
      let l = !1;
      const c = ue(o) ? o : [o],
        u = [];
      for (let f = 0; f < c.length && !l; f++) {
        const { valid: d, expectedType: m } = Iw(t, c[f]);
        u.push(m || ""), (l = d);
      }
      if (!l) {
        j(Aw(e, t, u));
        return;
      }
    }
    i &&
      !i(t) &&
      j('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const xw = Jr("String,Number,Boolean,Function,Symbol,BigInt");
function Iw(e, t) {
  let n;
  const r = Cu(t);
  if (xw(r)) {
    const o = typeof e;
    (n = o === r.toLowerCase()), !n && o === "object" && (n = e instanceof t);
  } else
    r === "Object"
      ? (n = Pe(e))
      : r === "Array"
      ? (n = ue(e))
      : r === "null"
      ? (n = e === null)
      : (n = e instanceof t);
  return { valid: n, expectedType: r };
}
function Aw(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n
    .map(bo)
    .join(" | ")}`;
  const o = n[0],
    s = Kf(t),
    i = Xp(t, o),
    a = Xp(t, s);
  return (
    n.length === 1 && Jp(o) && !Pw(o, s) && (r += ` with value ${i}`),
    (r += `, got ${s} `),
    Jp(s) && (r += `with value ${a}.`),
    r
  );
}
function Xp(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Jp(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Pw(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const _v = (e) => e[0] === "_" || e === "$stable",
  ud = (e) => (ue(e) ? e.map(on) : [on(e)]),
  Rw = (e, t, n) => {
    if (t._n) return t;
    const r = be(
      (...o) => (
        lt &&
          j(
            `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
          ),
        ud(t(...o))
      ),
      n
    );
    return (r._c = !1), r;
  },
  vv = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (_v(o)) continue;
      const s = e[o];
      if (he(s)) t[o] = Rw(o, s, r);
      else if (s != null) {
        j(
          `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
        );
        const i = ud(s);
        t[o] = () => i;
      }
    }
  },
  yv = (e, t) => {
    Pi(e.vnode) ||
      j(
        "Non-function value encountered for default slot. Prefer function slots for better performance."
      );
    const n = ud(t);
    e.slots.default = () => n;
  },
  Nw = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = de(t)), Ga(t, "_", n)) : vv(t, (e.slots = {}));
    } else (e.slots = {}), t && yv(e, t);
    Ga(e.slots, Ml, 1);
  },
  Lw = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = !0,
      i = He;
    if (r.shapeFlag & 32) {
      const a = t._;
      a
        ? Mr
          ? (Ge(o, t), Nn(e, "set", "$slots"))
          : n && a === 1
          ? (s = !1)
          : (Ge(o, t), !n && a === 1 && delete o._)
        : ((s = !t.$stable), vv(t, o)),
        (i = t);
    } else t && (yv(e, t), (i = { default: 1 }));
    if (s) for (const a in o) !_v(a) && i[a] == null && delete o[a];
  };
function rl(e, t, n, r, o = !1) {
  if (ue(e)) {
    e.forEach((d, m) => rl(d, t && (ue(t) ? t[m] : t), n, r, o));
    return;
  }
  if (Jo(r) && !o) return;
  const s = r.shapeFlag & 4 ? Hl(r.component) || r.component.proxy : r.el,
    i = o ? null : s,
    { i: a, r: l } = e;
  if (!a) {
    j(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r,
    u = a.refs === He ? (a.refs = {}) : a.refs,
    f = a.setupState;
  if (
    (c != null &&
      c !== l &&
      (Ye(c)
        ? ((u[c] = null), Te(f, c) && (f[c] = null))
        : je(c) && (c.value = null)),
    he(l))
  )
    tr(l, a, 12, [i, u]);
  else {
    const d = Ye(l),
      m = je(l);
    if (d || m) {
      const g = () => {
        if (e.f) {
          const _ = d ? (Te(f, l) ? f[l] : u[l]) : l.value;
          o
            ? ue(_) && Gf(_, s)
            : ue(_)
            ? _.includes(s) || _.push(s)
            : d
            ? ((u[l] = [s]), Te(f, l) && (f[l] = u[l]))
            : ((l.value = [s]), e.k && (u[e.k] = l.value));
        } else
          d
            ? ((u[l] = i), Te(f, l) && (f[l] = i))
            : m
            ? ((l.value = i), e.k && (u[e.k] = i))
            : j("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? ((g.id = -1), zt(g, n)) : g();
    } else j("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let _r = !1;
const ea = (e) => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
  Ts = (e) => e.nodeType === 8;
function $w(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: o,
        nextSibling: s,
        parentNode: i,
        remove: a,
        insert: l,
        createComment: c,
      },
    } = e,
    u = (v, w) => {
      if (!w.hasChildNodes()) {
        j(
          "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
        ),
          n(null, v, w),
          Qa(),
          (w._vnode = v);
        return;
      }
      (_r = !1),
        f(w.firstChild, v, null, null, null),
        Qa(),
        (w._vnode = v),
        _r && console.error("Hydration completed but contains mismatches.");
    },
    f = (v, w, C, I, S, M = !1) => {
      const F = Ts(v) && v.data === "[",
        A = () => _(v, w, C, I, S, F),
        { type: D, ref: L, shapeFlag: Y, patchFlag: ve } = w;
      let ye = v.nodeType;
      (w.el = v),
        "__vnode" in v ||
          Object.defineProperty(v, "__vnode", { value: w, enumerable: !1 }),
        "__vueParentComponent" in v ||
          Object.defineProperty(v, "__vueParentComponent", {
            value: C,
            enumerable: !1,
          }),
        ve === -2 && ((M = !1), (w.dynamicChildren = null));
      let Z = null;
      switch (D) {
        case Br:
          ye !== 3
            ? w.children === ""
              ? (l((w.el = o("")), i(v), v), (Z = v))
              : (Z = A())
            : (v.data !== w.children &&
                ((_r = !0),
                j(`Hydration text mismatch:
- Server rendered: ${JSON.stringify(v.data)}
- Client rendered: ${JSON.stringify(w.children)}`),
                (v.data = w.children)),
              (Z = s(v)));
          break;
        case pt:
          E(v)
            ? ((Z = s(v)), y((w.el = v.content.firstChild), v, C))
            : ye !== 8 || F
            ? (Z = A())
            : (Z = s(v));
          break;
        case Zo:
          if ((F && ((v = s(v)), (ye = v.nodeType)), ye === 1 || ye === 3)) {
            Z = v;
            const W = !w.children.length;
            for (let U = 0; U < w.staticCount; U++)
              W && (w.children += Z.nodeType === 1 ? Z.outerHTML : Z.data),
                U === w.staticCount - 1 && (w.anchor = Z),
                (Z = s(Z));
            return F ? s(Z) : Z;
          } else A();
          break;
        case Ae:
          F ? (Z = g(v, w, C, I, S, M)) : (Z = A());
          break;
        default:
          if (Y & 1)
            (ye !== 1 || w.type.toLowerCase() !== v.tagName.toLowerCase()) &&
            !E(v)
              ? (Z = A())
              : (Z = d(v, w, C, I, S, M));
          else if (Y & 6) {
            w.slotScopeIds = S;
            const W = i(v);
            if (
              (F
                ? (Z = T(v))
                : Ts(v) && v.data === "teleport start"
                ? (Z = T(v, v.data, "teleport end"))
                : (Z = s(v)),
              t(w, W, null, C, I, ea(W), M),
              Jo(w))
            ) {
              let U;
              F
                ? ((U = ae(Ae)),
                  (U.anchor = Z ? Z.previousSibling : W.lastChild))
                : (U = v.nodeType === 3 ? nt("") : ae("div")),
                (U.el = v),
                (w.component.subTree = U);
            }
          } else
            Y & 64
              ? ye !== 8
                ? (Z = A())
                : (Z = w.type.hydrate(v, w, C, I, S, M, e, m))
              : Y & 128
              ? (Z = w.type.hydrate(v, w, C, I, ea(i(v)), S, M, e, f))
              : j("Invalid HostVNode type:", D, `(${typeof D})`);
      }
      return L != null && rl(L, null, I, w), Z;
    },
    d = (v, w, C, I, S, M) => {
      M = M || !!w.dynamicChildren;
      const {
          type: F,
          props: A,
          patchFlag: D,
          shapeFlag: L,
          dirs: Y,
          transition: ve,
        } = w,
        ye = F === "input" || F === "option";
      {
        if ((Y && On(w, null, C, "created"), A))
          if (ye || !M || D & 48)
            for (const U in A)
              ((ye && (U.endsWith("value") || U === "indeterminate")) ||
                (ms(U) && !zs(U)) ||
                U[0] === ".") &&
                r(v, U, null, A[U], !1, void 0, C);
          else A.onClick && r(v, "onClick", null, A.onClick, !1, void 0, C);
        let Z;
        (Z = A && A.onVnodeBeforeMount) && nn(Z, C, w);
        let W = !1;
        if (E(v)) {
          W = Ev(I, ve) && C && C.vnode.props && C.vnode.props.appear;
          const U = v.content.firstChild;
          W && ve.beforeEnter(U), y(U, v, C), (w.el = v = U);
        }
        if (
          (Y && On(w, null, C, "beforeMount"),
          ((Z = A && A.onVnodeMounted) || Y || W) &&
            ev(() => {
              Z && nn(Z, C, w),
                W && ve.enter(v),
                Y && On(w, null, C, "mounted");
            }, I),
          L & 16 && !(A && (A.innerHTML || A.textContent)))
        ) {
          let U = m(v.firstChild, w, v, C, I, S, M),
            Ie = !1;
          for (; U; ) {
            (_r = !0),
              Ie ||
                (j(
                  `Hydration children mismatch in <${w.type}>: server rendered element contains more child nodes than client vdom.`
                ),
                (Ie = !0));
            const Ne = U;
            (U = U.nextSibling), a(Ne);
          }
        } else
          L & 8 &&
            v.textContent !== w.children &&
            ((_r = !0),
            j(`Hydration text content mismatch in <${w.type}>:
- Server rendered: ${v.textContent}
- Client rendered: ${w.children}`),
            (v.textContent = w.children));
      }
      return v.nextSibling;
    },
    m = (v, w, C, I, S, M, F) => {
      F = F || !!w.dynamicChildren;
      const A = w.children,
        D = A.length;
      let L = !1;
      for (let Y = 0; Y < D; Y++) {
        const ve = F ? A[Y] : (A[Y] = on(A[Y]));
        if (v) v = f(v, ve, I, S, M, F);
        else {
          if (ve.type === Br && !ve.children) continue;
          (_r = !0),
            L ||
              (j(
                `Hydration children mismatch in <${C.tagName.toLowerCase()}>: server rendered element contains fewer child nodes than client vdom.`
              ),
              (L = !0)),
            n(null, ve, C, null, I, S, ea(C), M);
        }
      }
      return v;
    },
    g = (v, w, C, I, S, M) => {
      const { slotScopeIds: F } = w;
      F && (S = S ? S.concat(F) : F);
      const A = i(v),
        D = m(s(v), w, A, C, I, S, M);
      return D && Ts(D) && D.data === "]"
        ? s((w.anchor = D))
        : ((_r = !0), l((w.anchor = c("]")), A, D), D);
    },
    _ = (v, w, C, I, S, M) => {
      if (
        ((_r = !0),
        j(
          `Hydration node mismatch:
- Client vnode:`,
          w.type,
          `
- Server rendered DOM:`,
          v,
          v.nodeType === 3
            ? "(text)"
            : Ts(v) && v.data === "["
            ? "(start of fragment)"
            : ""
        ),
        (w.el = null),
        M)
      ) {
        const D = T(v);
        for (;;) {
          const L = s(v);
          if (L && L !== D) a(L);
          else break;
        }
      }
      const F = s(v),
        A = i(v);
      return a(v), n(null, w, A, F, C, I, ea(A), S), F;
    },
    T = (v, w = "[", C = "]") => {
      let I = 0;
      for (; v; )
        if (((v = s(v)), v && Ts(v) && (v.data === w && I++, v.data === C))) {
          if (I === 0) return s(v);
          I--;
        }
      return v;
    },
    y = (v, w, C) => {
      const I = w.parentNode;
      I && I.replaceChild(v, w);
      let S = C;
      for (; S; )
        S.vnode.el === w && (S.vnode.el = S.subTree.el = v), (S = S.parent);
    },
    E = (v) => v.nodeType === 1 && v.tagName.toLowerCase() === "template";
  return [u, f];
}
let Ss, Rr;
function Yn(e, t) {
  e.appContext.config.performance && ol() && Rr.mark(`vue-${t}-${e.uid}`),
    BE(e, t, ol() ? Rr.now() : Date.now());
}
function Kn(e, t) {
  if (e.appContext.config.performance && ol()) {
    const n = `vue-${t}-${e.uid}`,
      r = n + ":end";
    Rr.mark(r),
      Rr.measure(`<${jl(e, e.type)}> ${t}`, n, r),
      Rr.clearMarks(n),
      Rr.clearMarks(r);
  }
  VE(e, t, ol() ? Rr.now() : Date.now());
}
function ol() {
  return (
    Ss !== void 0 ||
      (typeof window < "u" && window.performance
        ? ((Ss = !0), (Rr = window.performance))
        : (Ss = !1)),
    Ss
  );
}
function Dw() {
  const e = [];
  if (e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${
      t ? "are" : "is"
    } not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const zt = ev;
function Mw(e) {
  return bv(e);
}
function Fw(e) {
  return bv(e, $w);
}
function bv(e, t) {
  Dw();
  const n = Ya();
  (n.__VUE__ = !0), Y_(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
      insert: r,
      remove: o,
      patchProp: s,
      createElement: i,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: d,
      setScopeId: m = Wt,
      insertStaticContent: g,
    } = e,
    _ = (
      p,
      h,
      b,
      O = null,
      x = null,
      $ = null,
      G = !1,
      z = null,
      K = Mr ? !1 : !!h.dynamicChildren
    ) => {
      if (p === h) return;
      p && !so(p, h) && ((O = X(p)), gt(p, x, $, !0), (p = null)),
        h.patchFlag === -2 && ((K = !1), (h.dynamicChildren = null));
      const { type: B, ref: le, shapeFlag: q } = h;
      switch (B) {
        case Br:
          T(p, h, b, O);
          break;
        case pt:
          y(p, h, b, O);
          break;
        case Zo:
          p == null ? E(h, b, O, G) : v(p, h, b, G);
          break;
        case Ae:
          Y(p, h, b, O, x, $, G, z, K);
          break;
        default:
          q & 1
            ? I(p, h, b, O, x, $, G, z, K)
            : q & 6
            ? ve(p, h, b, O, x, $, G, z, K)
            : q & 64 || q & 128
            ? B.process(p, h, b, O, x, $, G, z, K, Q)
            : j("Invalid VNode type:", B, `(${typeof B})`);
      }
      le != null && x && rl(le, p && p.ref, $, h || p, !h);
    },
    T = (p, h, b, O) => {
      if (p == null) r((h.el = a(h.children)), b, O);
      else {
        const x = (h.el = p.el);
        h.children !== p.children && c(x, h.children);
      }
    },
    y = (p, h, b, O) => {
      p == null ? r((h.el = l(h.children || "")), b, O) : (h.el = p.el);
    },
    E = (p, h, b, O) => {
      [p.el, p.anchor] = g(p.children, h, b, O, p.el, p.anchor);
    },
    v = (p, h, b, O) => {
      if (h.children !== p.children) {
        const x = d(p.anchor);
        C(p), ([h.el, h.anchor] = g(h.children, b, x, O));
      } else (h.el = p.el), (h.anchor = p.anchor);
    },
    w = ({ el: p, anchor: h }, b, O) => {
      let x;
      for (; p && p !== h; ) (x = d(p)), r(p, b, O), (p = x);
      r(h, b, O);
    },
    C = ({ el: p, anchor: h }) => {
      let b;
      for (; p && p !== h; ) (b = d(p)), o(p), (p = b);
      o(h);
    },
    I = (p, h, b, O, x, $, G, z, K) => {
      (G = G || h.type === "svg"),
        p == null ? S(h, b, O, x, $, G, z, K) : A(p, h, x, $, G, z, K);
    },
    S = (p, h, b, O, x, $, G, z) => {
      let K, B;
      const { type: le, props: q, shapeFlag: k, transition: R, dirs: ee } = p;
      if (
        ((K = p.el = i(p.type, $, q && q.is, q)),
        k & 8
          ? u(K, p.children)
          : k & 16 &&
            F(p.children, K, null, O, x, $ && le !== "foreignObject", G, z),
        ee && On(p, null, O, "created"),
        M(K, p, p.scopeId, G, O),
        q)
      ) {
        for (const Se in q)
          Se !== "value" &&
            !zs(Se) &&
            s(K, Se, null, q[Se], $, p.children, O, x, P);
        "value" in q && s(K, "value", null, q.value),
          (B = q.onVnodeBeforeMount) && nn(B, O, p);
      }
      Object.defineProperty(K, "__vnode", { value: p, enumerable: !1 }),
        Object.defineProperty(K, "__vueParentComponent", {
          value: O,
          enumerable: !1,
        }),
        ee && On(p, null, O, "beforeMount");
      const pe = Ev(x, R);
      pe && R.beforeEnter(K),
        r(K, h, b),
        ((B = q && q.onVnodeMounted) || pe || ee) &&
          zt(() => {
            B && nn(B, O, p), pe && R.enter(K), ee && On(p, null, O, "mounted");
          }, x);
    },
    M = (p, h, b, O, x) => {
      if ((b && m(p, b), O)) for (let $ = 0; $ < O.length; $++) m(p, O[$]);
      if (x) {
        let $ = x.subTree;
        if (
          ($.patchFlag > 0 && $.patchFlag & 2048 && ($ = J_($.children) || $),
          h === $)
        ) {
          const G = x.vnode;
          M(p, G, G.scopeId, G.slotScopeIds, x.parent);
        }
      }
    },
    F = (p, h, b, O, x, $, G, z, K = 0) => {
      for (let B = K; B < p.length; B++) {
        const le = (p[B] = z ? Ir(p[B]) : on(p[B]));
        _(null, le, h, b, O, x, $, G, z);
      }
    },
    A = (p, h, b, O, x, $, G) => {
      const z = (h.el = p.el);
      let { patchFlag: K, dynamicChildren: B, dirs: le } = h;
      K |= p.patchFlag & 16;
      const q = p.props || He,
        k = h.props || He;
      let R;
      b && eo(b, !1),
        (R = k.onVnodeBeforeUpdate) && nn(R, b, h, p),
        le && On(h, p, b, "beforeUpdate"),
        b && eo(b, !0),
        Mr && ((K = 0), (G = !1), (B = null));
      const ee = x && h.type !== "foreignObject";
      if (
        (B
          ? (D(p.dynamicChildren, B, z, b, O, ee, $), sl(p, h))
          : G || Ie(p, h, z, null, b, O, ee, $, !1),
        K > 0)
      ) {
        if (K & 16) L(z, h, q, k, b, O, x);
        else if (
          (K & 2 && q.class !== k.class && s(z, "class", null, k.class, x),
          K & 4 && s(z, "style", q.style, k.style, x),
          K & 8)
        ) {
          const pe = h.dynamicProps;
          for (let Se = 0; Se < pe.length; Se++) {
            const Be = pe[Se],
              _t = q[Be],
              jt = k[Be];
            (jt !== _t || Be === "value") &&
              s(z, Be, _t, jt, x, p.children, b, O, P);
          }
        }
        K & 1 && p.children !== h.children && u(z, h.children);
      } else !G && B == null && L(z, h, q, k, b, O, x);
      ((R = k.onVnodeUpdated) || le) &&
        zt(() => {
          R && nn(R, b, h, p), le && On(h, p, b, "updated");
        }, O);
    },
    D = (p, h, b, O, x, $, G) => {
      for (let z = 0; z < h.length; z++) {
        const K = p[z],
          B = h[z],
          le =
            K.el && (K.type === Ae || !so(K, B) || K.shapeFlag & 70)
              ? f(K.el)
              : b;
        _(K, B, le, null, O, x, $, G, !0);
      }
    },
    L = (p, h, b, O, x, $, G) => {
      if (b !== O) {
        if (b !== He)
          for (const z in b)
            !zs(z) && !(z in O) && s(p, z, b[z], null, G, h.children, x, $, P);
        for (const z in O) {
          if (zs(z)) continue;
          const K = O[z],
            B = b[z];
          K !== B && z !== "value" && s(p, z, B, K, G, h.children, x, $, P);
        }
        "value" in O && s(p, "value", b.value, O.value);
      }
    },
    Y = (p, h, b, O, x, $, G, z, K) => {
      const B = (h.el = p ? p.el : a("")),
        le = (h.anchor = p ? p.anchor : a(""));
      let { patchFlag: q, dynamicChildren: k, slotScopeIds: R } = h;
      (Mr || q & 2048) && ((q = 0), (K = !1), (k = null)),
        R && (z = z ? z.concat(R) : R),
        p == null
          ? (r(B, b, O), r(le, b, O), F(h.children, b, le, x, $, G, z, K))
          : q > 0 && q & 64 && k && p.dynamicChildren
          ? (D(p.dynamicChildren, k, b, x, $, G, z), sl(p, h))
          : Ie(p, h, b, le, x, $, G, z, K);
    },
    ve = (p, h, b, O, x, $, G, z, K) => {
      (h.slotScopeIds = z),
        p == null
          ? h.shapeFlag & 512
            ? x.ctx.activate(h, b, O, G, K)
            : ye(h, b, O, x, $, G, K)
          : Z(p, h, K);
    },
    ye = (p, h, b, O, x, $, G) => {
      const z = (p.component = Xw(p, O, x));
      if (
        (z.type.__hmrId && LE(z),
        ka(p),
        Yn(z, "mount"),
        Pi(p) && (z.ctx.renderer = Q),
        Yn(z, "init"),
        Qw(z),
        Kn(z, "init"),
        z.asyncDep)
      ) {
        if ((x && x.registerDep(z, W), !p.el)) {
          const K = (z.subTree = ae(pt));
          y(null, K, h, b);
        }
        return;
      }
      W(z, p, h, b, x, $, G), xa(), Kn(z, "mount");
    },
    Z = (p, h, b) => {
      const O = (h.component = p.component);
      if (XE(p, h, b))
        if (O.asyncDep && !O.asyncResolved) {
          ka(h), U(O, h, b), xa();
          return;
        } else (O.next = h), RE(O.update), O.update();
      else (h.el = p.el), (O.vnode = h);
    },
    W = (p, h, b, O, x, $, G) => {
      const z = () => {
          if (p.isMounted) {
            let { next: le, bu: q, u: k, parent: R, vnode: ee } = p,
              pe = le,
              Se;
            ka(le || p.vnode),
              eo(p, !1),
              le ? ((le.el = ee.el), U(p, le, G)) : (le = ee),
              q && jo(q),
              (Se = le.props && le.props.onVnodeBeforeUpdate) &&
                nn(Se, R, le, ee),
              eo(p, !0),
              Yn(p, "render");
            const Be = Pc(p);
            Kn(p, "render");
            const _t = p.subTree;
            (p.subTree = Be),
              Yn(p, "patch"),
              _(_t, Be, f(_t.el), X(_t), p, x, $),
              Kn(p, "patch"),
              (le.el = Be.el),
              pe === null && JE(p, Be.el),
              k && zt(k, x),
              (Se = le.props && le.props.onVnodeUpdated) &&
                zt(() => nn(Se, R, le, ee), x),
              K_(p),
              xa();
          } else {
            let le;
            const { el: q, props: k } = h,
              { bm: R, m: ee, parent: pe } = p,
              Se = Jo(h);
            if (
              (eo(p, !1),
              R && jo(R),
              !Se && (le = k && k.onVnodeBeforeMount) && nn(le, pe, h),
              eo(p, !0),
              q && Fe)
            ) {
              const Be = () => {
                Yn(p, "render"),
                  (p.subTree = Pc(p)),
                  Kn(p, "render"),
                  Yn(p, "hydrate"),
                  Fe(q, p.subTree, p, x, null),
                  Kn(p, "hydrate");
              };
              Se
                ? h.type.__asyncLoader().then(() => !p.isUnmounted && Be())
                : Be();
            } else {
              Yn(p, "render");
              const Be = (p.subTree = Pc(p));
              Kn(p, "render"),
                Yn(p, "patch"),
                _(null, Be, b, O, p, x, $),
                Kn(p, "patch"),
                (h.el = Be.el);
            }
            if ((ee && zt(ee, x), !Se && (le = k && k.onVnodeMounted))) {
              const Be = h;
              zt(() => nn(le, pe, Be), x);
            }
            (h.shapeFlag & 256 ||
              (pe && Jo(pe.vnode) && pe.vnode.shapeFlag & 256)) &&
              p.a &&
              zt(p.a, x),
              (p.isMounted = !0),
              jE(p),
              (h = b = O = null);
          }
        },
        K = (p.effect = new Qf(z, () => Rl(B), p.scope)),
        B = (p.update = () => K.run());
      (B.id = p.uid),
        eo(p, !0),
        (K.onTrack = p.rtc ? (le) => jo(p.rtc, le) : void 0),
        (K.onTrigger = p.rtg ? (le) => jo(p.rtg, le) : void 0),
        (B.ownerInstance = p),
        B();
    },
    U = (p, h, b) => {
      h.component = p;
      const O = p.vnode.props;
      (p.vnode = h),
        (p.next = null),
        Ow(p, h.props, O, b),
        Lw(p, h.children, b),
        Po(),
        Mp(p),
        Ro();
    },
    Ie = (p, h, b, O, x, $, G, z, K = !1) => {
      const B = p && p.children,
        le = p ? p.shapeFlag : 0,
        q = h.children,
        { patchFlag: k, shapeFlag: R } = h;
      if (k > 0) {
        if (k & 128) {
          ht(B, q, b, O, x, $, G, z, K);
          return;
        } else if (k & 256) {
          Ne(B, q, b, O, x, $, G, z, K);
          return;
        }
      }
      R & 8
        ? (le & 16 && P(B, x, $), q !== B && u(b, q))
        : le & 16
        ? R & 16
          ? ht(B, q, b, O, x, $, G, z, K)
          : P(B, x, $, !0)
        : (le & 8 && u(b, ""), R & 16 && F(q, b, O, x, $, G, z, K));
    },
    Ne = (p, h, b, O, x, $, G, z, K) => {
      (p = p || qo), (h = h || qo);
      const B = p.length,
        le = h.length,
        q = Math.min(B, le);
      let k;
      for (k = 0; k < q; k++) {
        const R = (h[k] = K ? Ir(h[k]) : on(h[k]));
        _(p[k], R, b, null, x, $, G, z, K);
      }
      B > le ? P(p, x, $, !0, !1, q) : F(h, b, O, x, $, G, z, K, q);
    },
    ht = (p, h, b, O, x, $, G, z, K) => {
      let B = 0;
      const le = h.length;
      let q = p.length - 1,
        k = le - 1;
      for (; B <= q && B <= k; ) {
        const R = p[B],
          ee = (h[B] = K ? Ir(h[B]) : on(h[B]));
        if (so(R, ee)) _(R, ee, b, null, x, $, G, z, K);
        else break;
        B++;
      }
      for (; B <= q && B <= k; ) {
        const R = p[q],
          ee = (h[k] = K ? Ir(h[k]) : on(h[k]));
        if (so(R, ee)) _(R, ee, b, null, x, $, G, z, K);
        else break;
        q--, k--;
      }
      if (B > q) {
        if (B <= k) {
          const R = k + 1,
            ee = R < le ? h[R].el : O;
          for (; B <= k; )
            _(null, (h[B] = K ? Ir(h[B]) : on(h[B])), b, ee, x, $, G, z, K),
              B++;
        }
      } else if (B > k) for (; B <= q; ) gt(p[B], x, $, !0), B++;
      else {
        const R = B,
          ee = B,
          pe = new Map();
        for (B = ee; B <= k; B++) {
          const Nt = (h[B] = K ? Ir(h[B]) : on(h[B]));
          Nt.key != null &&
            (pe.has(Nt.key) &&
              j(
                "Duplicate keys found during update:",
                JSON.stringify(Nt.key),
                "Make sure keys are unique."
              ),
            pe.set(Nt.key, B));
        }
        let Se,
          Be = 0;
        const _t = k - ee + 1;
        let jt = !1,
          Gi = 0;
        const hr = new Array(_t);
        for (B = 0; B < _t; B++) hr[B] = 0;
        for (B = R; B <= q; B++) {
          const Nt = p[B];
          if (Be >= _t) {
            gt(Nt, x, $, !0);
            continue;
          }
          let En;
          if (Nt.key != null) En = pe.get(Nt.key);
          else
            for (Se = ee; Se <= k; Se++)
              if (hr[Se - ee] === 0 && so(Nt, h[Se])) {
                En = Se;
                break;
              }
          En === void 0
            ? gt(Nt, x, $, !0)
            : ((hr[En - ee] = B + 1),
              En >= Gi ? (Gi = En) : (jt = !0),
              _(Nt, h[En], b, null, x, $, G, z, K),
              Be++);
        }
        const Op = jt ? Hw(hr) : qo;
        for (Se = Op.length - 1, B = _t - 1; B >= 0; B--) {
          const Nt = ee + B,
            En = h[Nt],
            kp = Nt + 1 < le ? h[Nt + 1].el : O;
          hr[B] === 0
            ? _(null, En, b, kp, x, $, G, z, K)
            : jt && (Se < 0 || B !== Op[Se] ? Ke(En, b, kp, 2) : Se--);
        }
      }
    },
    Ke = (p, h, b, O, x = null) => {
      const { el: $, type: G, transition: z, children: K, shapeFlag: B } = p;
      if (B & 6) {
        Ke(p.component.subTree, h, b, O);
        return;
      }
      if (B & 128) {
        p.suspense.move(h, b, O);
        return;
      }
      if (B & 64) {
        G.move(p, h, b, Q);
        return;
      }
      if (G === Ae) {
        r($, h, b);
        for (let q = 0; q < K.length; q++) Ke(K[q], h, b, O);
        r(p.anchor, h, b);
        return;
      }
      if (G === Zo) {
        w(p, h, b);
        return;
      }
      if (O !== 2 && B & 1 && z)
        if (O === 0) z.beforeEnter($), r($, h, b), zt(() => z.enter($), x);
        else {
          const { leave: q, delayLeave: k, afterLeave: R } = z,
            ee = () => r($, h, b),
            pe = () => {
              q($, () => {
                ee(), R && R();
              });
            };
          k ? k($, ee, pe) : pe();
        }
      else r($, h, b);
    },
    gt = (p, h, b, O = !1, x = !1) => {
      const {
        type: $,
        props: G,
        ref: z,
        children: K,
        dynamicChildren: B,
        shapeFlag: le,
        patchFlag: q,
        dirs: k,
      } = p;
      if ((z != null && rl(z, null, b, p, !0), le & 256)) {
        h.ctx.deactivate(p);
        return;
      }
      const R = le & 1 && k,
        ee = !Jo(p);
      let pe;
      if ((ee && (pe = G && G.onVnodeBeforeUnmount) && nn(pe, h, p), le & 6))
        fn(p.component, b, O);
      else {
        if (le & 128) {
          p.suspense.unmount(b, O);
          return;
        }
        R && On(p, null, h, "beforeUnmount"),
          le & 64
            ? p.type.remove(p, h, b, x, Q, O)
            : B && ($ !== Ae || (q > 0 && q & 64))
            ? P(B, h, b, !1, !0)
            : (($ === Ae && q & 384) || (!x && le & 16)) && P(K, h, b),
          O && Rt(p);
      }
      ((ee && (pe = G && G.onVnodeUnmounted)) || R) &&
        zt(() => {
          pe && nn(pe, h, p), R && On(p, null, h, "unmounted");
        }, b);
    },
    Rt = (p) => {
      const { type: h, el: b, anchor: O, transition: x } = p;
      if (h === Ae) {
        p.patchFlag > 0 && p.patchFlag & 2048 && x && !x.persisted
          ? p.children.forEach((G) => {
              G.type === pt ? o(G.el) : Rt(G);
            })
          : mr(b, O);
        return;
      }
      if (h === Zo) {
        C(p);
        return;
      }
      const $ = () => {
        o(b), x && !x.persisted && x.afterLeave && x.afterLeave();
      };
      if (p.shapeFlag & 1 && x && !x.persisted) {
        const { leave: G, delayLeave: z } = x,
          K = () => G(b, $);
        z ? z(p.el, $, K) : K();
      } else $();
    },
    mr = (p, h) => {
      let b;
      for (; p !== h; ) (b = d(p)), o(p), (p = b);
      o(h);
    },
    fn = (p, h, b) => {
      p.type.__hmrId && $E(p);
      const { bum: O, scope: x, update: $, subTree: G, um: z } = p;
      O && jo(O),
        x.stop(),
        $ && (($.active = !1), gt(G, p, h, b)),
        z && zt(z, h),
        zt(() => {
          p.isUnmounted = !0;
        }, h),
        h &&
          h.pendingBranch &&
          !h.isUnmounted &&
          p.asyncDep &&
          !p.asyncResolved &&
          p.suspenseId === h.pendingId &&
          (h.deps--, h.deps === 0 && h.resolve()),
        zE(p);
    },
    P = (p, h, b, O = !1, x = !1, $ = 0) => {
      for (let G = $; G < p.length; G++) gt(p[G], h, b, O, x);
    },
    X = (p) =>
      p.shapeFlag & 6
        ? X(p.component.subTree)
        : p.shapeFlag & 128
        ? p.suspense.next()
        : d(p.anchor || p.el),
    J = (p, h, b) => {
      p == null
        ? h._vnode && gt(h._vnode, null, null, !0)
        : _(h._vnode || null, p, h, null, null, null, b),
        Mp(),
        Qa(),
        (h._vnode = p);
    },
    Q = {
      p: _,
      um: gt,
      m: Ke,
      r: Rt,
      mt: ye,
      mc: F,
      pc: Ie,
      pbc: D,
      n: X,
      o: e,
    };
  let Ee, Fe;
  return (
    t && ([Ee, Fe] = t(Q)), { render: J, hydrate: Ee, createApp: ww(J, Ee) }
  );
}
function eo({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ev(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function sl(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (ue(r) && ue(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = o[s] = Ir(o[s])), (a.el = i.el)),
        n || sl(i, a)),
        a.type === Br && (a.el = i.el),
        a.type === pt && !a.el && (a.el = i.el);
    }
}
function Hw(e) {
  const t = e.slice(),
    n = [0];
  let r, o, s, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (((o = n[n.length - 1]), e[o] < c)) {
        (t[r] = o), n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        (a = (s + i) >> 1), e[n[a]] < c ? (s = a + 1) : (i = a);
      c < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), (n[s] = r));
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; ) (n[s] = i), (i = t[i]);
  return n;
}
const jw = (e) => e.__isTeleport,
  Qo = (e) => e && (e.disabled || e.disabled === ""),
  Qp = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  Ou = (e, t) => {
    const n = e && e.to;
    if (Ye(n))
      if (t) {
        const r = t(n);
        return (
          r ||
            j(
              `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
            ),
          r
        );
      } else
        return (
          j(
            "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
          ),
          null
        );
    else return !n && !Qo(e) && j(`Invalid Teleport target: ${n}`), n;
  },
  Uw = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, o, s, i, a, l, c) {
      const {
          mc: u,
          pc: f,
          pbc: d,
          o: { insert: m, querySelector: g, createText: _, createComment: T },
        } = c,
        y = Qo(t.props);
      let { shapeFlag: E, children: v, dynamicChildren: w } = t;
      if ((Mr && ((l = !1), (w = null)), e == null)) {
        const C = (t.el = T("teleport start")),
          I = (t.anchor = T("teleport end"));
        m(C, n, r), m(I, n, r);
        const S = (t.target = Ou(t.props, g)),
          M = (t.targetAnchor = _(""));
        S
          ? (m(M, S), (i = i || Qp(S)))
          : y || j("Invalid Teleport target on mount:", S, `(${typeof S})`);
        const F = (A, D) => {
          E & 16 && u(v, A, D, o, s, i, a, l);
        };
        y ? F(n, I) : S && F(S, M);
      } else {
        t.el = e.el;
        const C = (t.anchor = e.anchor),
          I = (t.target = e.target),
          S = (t.targetAnchor = e.targetAnchor),
          M = Qo(e.props),
          F = M ? n : I,
          A = M ? C : S;
        if (
          ((i = i || Qp(I)),
          w
            ? (d(e.dynamicChildren, w, F, o, s, i, a), sl(e, t, !0))
            : l || f(e, t, F, A, o, s, i, a, !1),
          y)
        )
          M
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : ta(t, n, C, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const D = (t.target = Ou(t.props, g));
          D
            ? ta(t, D, null, c, 0)
            : j("Invalid Teleport target on update:", I, `(${typeof I})`);
        } else M && ta(t, I, S, c, 1);
      }
      wv(t);
    },
    remove(e, t, n, r, { um: o, o: { remove: s } }, i) {
      const {
        shapeFlag: a,
        children: l,
        anchor: c,
        targetAnchor: u,
        target: f,
        props: d,
      } = e;
      if ((f && s(u), i && s(c), a & 16)) {
        const m = i || !Qo(d);
        for (let g = 0; g < l.length; g++) {
          const _ = l[g];
          o(_, t, n, m, !!_.dynamicChildren);
        }
      }
    },
    move: ta,
    hydrate: zw,
  };
function ta(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: c, props: u } = e,
    f = s === 2;
  if ((f && r(i, t, n), (!f || Qo(u)) && l & 16))
    for (let d = 0; d < c.length; d++) o(c[d], t, n, 2);
  f && r(a, t, n);
}
function zw(
  e,
  t,
  n,
  r,
  o,
  s,
  { o: { nextSibling: i, parentNode: a, querySelector: l } },
  c
) {
  const u = (t.target = Ou(t.props, l));
  if (u) {
    const f = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (Qo(t.props))
        (t.anchor = c(i(e), t, a(e), n, r, o, s)), (t.targetAnchor = f);
      else {
        t.anchor = i(e);
        let d = f;
        for (; d; )
          if (
            ((d = i(d)), d && d.nodeType === 8 && d.data === "teleport anchor")
          ) {
            (t.targetAnchor = d),
              (u._lpa = t.targetAnchor && i(t.targetAnchor));
            break;
          }
        c(f, t, u, n, r, o, s);
      }
    wv(t);
  }
  return t.anchor && i(t.anchor);
}
const Bw = Uw;
function wv(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
        (n = n.nextSibling);
    t.ut();
  }
}
const Ae = Symbol.for("v-fgt"),
  Br = Symbol.for("v-txt"),
  pt = Symbol.for("v-cmt"),
  Zo = Symbol.for("v-stc"),
  Vs = [];
let mn = null;
function se(e = !1) {
  Vs.push((mn = e ? null : []));
}
function Vw() {
  Vs.pop(), (mn = Vs[Vs.length - 1] || null);
}
let ai = 1;
function Zp(e) {
  ai += e;
}
function Tv(e) {
  return (
    (e.dynamicChildren = ai > 0 ? mn || qo : null),
    Vw(),
    ai > 0 && mn && mn.push(e),
    e
  );
}
function _e(e, t, n, r, o, s) {
  return Tv(N(e, t, n, r, o, s, !0));
}
function tt(e, t, n, r, o) {
  return Tv(ae(e, t, n, r, o, !0));
}
function ns(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function so(e, t) {
  return t.shapeFlag & 6 && Uo.has(t.type)
    ? ((e.shapeFlag &= -257), (t.shapeFlag &= -513), !1)
    : e.type === t.type && e.key === t.key;
}
const Ww = (...e) => Gw(...e),
  Ml = "__vInternal",
  Sv = ({ key: e }) => e ?? null,
  Ia = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Ye(e) || je(e) || he(e)
        ? { i: ct, r: e, k: t, f: !!n }
        : e
      : null
  );
function N(
  e,
  t = null,
  n = null,
  r = 0,
  o = null,
  s = e === Ae ? 0 : 1,
  i = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Sv(t),
    ref: t && Ia(t),
    scopeId: Ll,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ct,
  };
  return (
    a
      ? (fd(l, n), s & 128 && e.normalize(l))
      : n && (l.shapeFlag |= Ye(n) ? 8 : 16),
    l.key !== l.key &&
      j("VNode created with invalid key (NaN). VNode type:", l.type),
    ai > 0 &&
      !i &&
      mn &&
      (l.patchFlag > 0 || s & 6) &&
      l.patchFlag !== 32 &&
      mn.push(l),
    l
  );
}
const ae = Ww;
function Gw(e, t = null, n = null, r = 0, o = null, s = !1) {
  if (
    ((!e || e === Q_) &&
      (e || j(`Invalid vnode type when creating vnode: ${e}.`), (e = pt)),
    ns(e))
  ) {
    const a = yn(e, t, !0);
    return (
      n && fd(a, n),
      ai > 0 &&
        !s &&
        mn &&
        (a.shapeFlag & 6 ? (mn[mn.indexOf(e)] = a) : mn.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((Iv(e) && (e = e.__vccOpts), t)) {
    t = Yw(t);
    let { class: a, style: l } = t;
    a && !Ye(a) && (t.class = Mt(a)),
      Pe(l) && (Ja(l) && !ue(l) && (l = Ge({}, l)), (t.style = Ii(l)));
  }
  const i = Ye(e) ? 1 : QE(e) ? 128 : jw(e) ? 64 : Pe(e) ? 4 : he(e) ? 2 : 0;
  return (
    i & 4 &&
      Ja(e) &&
      ((e = de(e)),
      j(
        "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
        `
Component that was made reactive: `,
        e
      )),
    N(e, t, n, r, o, i, s, !0)
  );
}
function Yw(e) {
  return e ? (Ja(e) || Ml in e ? Ge({}, e) : e) : null;
}
function yn(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: i } = e,
    a = t ? Fl(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Sv(a),
    ref:
      t && t.ref
        ? n && o
          ? ue(o)
            ? o.concat(Ia(t))
            : [o, Ia(t)]
          : Ia(t)
        : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s === -1 && ue(i) ? i.map(Cv) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ae ? (s === -1 ? 16 : s | 16) : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && yn(e.ssContent),
    ssFallback: e.ssFallback && yn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function Cv(e) {
  const t = yn(e);
  return ue(e.children) && (t.children = e.children.map(Cv)), t;
}
function nt(e = " ", t = 0) {
  return ae(Br, null, e, t);
}
function Ov(e, t) {
  const n = ae(Zo, null, e);
  return (n.staticCount = t), n;
}
function we(e = "", t = !1) {
  return t ? (se(), tt(pt, null, e)) : ae(pt, null, e);
}
function on(e) {
  return e == null || typeof e == "boolean"
    ? ae(pt)
    : ue(e)
    ? ae(Ae, null, e.slice())
    : typeof e == "object"
    ? Ir(e)
    : ae(Br, null, String(e));
}
function Ir(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : yn(e);
}
function fd(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (ue(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), fd(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(Ml in t)
        ? (t._ctx = ct)
        : o === 3 &&
          ct &&
          (ct.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    he(t)
      ? ((t = { default: t, _ctx: ct }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [nt(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Fl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Mt([t.class, r.class]));
      else if (o === "style") t.style = Ii([t.style, r.style]);
      else if (ms(o)) {
        const s = t[o],
          i = r[o];
        i &&
          s !== i &&
          !(ue(s) && s.includes(i)) &&
          (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function nn(e, t, n, r = null) {
  an(e, t, 7, [n, r]);
}
const Kw = pv();
let qw = 0;
function Xw(e, t, n) {
  const r = e.type,
    o = (t ? t.appContext : e.appContext) || Kw,
    s = {
      uid: qw++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new v_(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: hv(r, o),
      emitsOptions: X_(r, o),
      emit: null,
      emitted: null,
      propsDefaults: He,
      inheritAttrs: r.inheritAttrs,
      ctx: He,
      data: He,
      props: He,
      attrs: He,
      slots: He,
      refs: He,
      setupState: He,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (s.ctx = dw(s)),
    (s.root = t ? t.root : s),
    (s.emit = GE.bind(null, s)),
    e.ce && e.ce(s),
    s
  );
}
let lt = null;
const bn = () => lt || ct;
let dd,
  Do,
  em = "__VUE_INSTANCE_SETTERS__";
(Do = Ya()[em]) || (Do = Ya()[em] = []),
  Do.push((e) => (lt = e)),
  (dd = (e) => {
    Do.length > 1 ? Do.forEach((t) => t(e)) : Do[0](e);
  });
const rs = (e) => {
    dd(e), e.scope.on();
  },
  vo = () => {
    lt && lt.scope.off(), dd(null);
  },
  Jw = Jr("slot,component");
function ku(e, t) {
  const n = t.isNativeTag || d_;
  (Jw(e) || n(e)) &&
    j("Do not use built-in or reserved HTML elements as component id: " + e);
}
function kv(e) {
  return e.vnode.shapeFlag & 4;
}
let li = !1;
function Qw(e, t = !1) {
  li = t;
  const { props: n, children: r } = e.vnode,
    o = kv(e);
  Sw(e, n, o, t), Nw(e, r);
  const s = o ? Zw(e, t) : void 0;
  return (li = !1), s;
}
function Zw(e, t) {
  var n;
  const r = e.type;
  {
    if ((r.name && ku(r.name, e.appContext.config), r.components)) {
      const s = Object.keys(r.components);
      for (let i = 0; i < s.length; i++) ku(s[i], e.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let i = 0; i < s.length; i++) nv(s[i]);
    }
    r.compilerOptions &&
      eT() &&
      j(
        '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
      );
  }
  (e.accessCache = Object.create(null)),
    (e.proxy = Qn(new Proxy(e.ctx, fv))),
    pw(e);
  const { setup: o } = r;
  if (o) {
    const s = (e.setupContext = o.length > 1 ? rT(e) : null);
    rs(e), Po();
    const i = tr(o, e, 0, [$s(e.props), s]);
    if ((Ro(), vo(), Yf(i))) {
      if ((i.then(vo, vo), t))
        return i
          .then((a) => {
            tm(e, a, t);
          })
          .catch((a) => {
            Pl(a, e, 0);
          });
      if (((e.asyncDep = i), !e.suspense)) {
        const a = (n = r.name) != null ? n : "Anonymous";
        j(
          `Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else tm(e, i, t);
  } else xv(e, t);
}
function tm(e, t, n) {
  he(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Pe(t)
    ? (ns(t) &&
        j(
          "setup() should not return VNodes directly - return a render function instead."
        ),
      (e.devtoolsRawSetupState = t),
      (e.setupState = H_(t)),
      mw(e))
    : t !== void 0 &&
      j(
        `setup() should return an object. Received: ${
          t === null ? "null" : typeof t
        }`
      ),
    xv(e, n);
}
let xu;
const eT = () => !xu;
function xv(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && xu && !r.render) {
      const o = r.template || cd(e).template;
      if (o) {
        Yn(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = r,
          c = Ge(Ge({ isCustomElement: s, delimiters: a }, i), l);
        (r.render = xu(o, c)), Kn(e, "compile");
      }
    }
    e.render = r.render || Wt;
  }
  {
    rs(e), Po();
    try {
      gw(e);
    } finally {
      Ro(), vo();
    }
  }
  !r.render &&
    e.render === Wt &&
    !t &&
    (r.template
      ? j(
          'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
        )
      : j("Component is missing template or render function."));
}
function tT(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return el(), At(e, "get", "$attrs"), t[n];
      },
      set() {
        return j("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return j("setupContext.attrs is readonly."), !1;
      },
    }))
  );
}
function nT(e) {
  return (
    e.slotsProxy ||
    (e.slotsProxy = new Proxy(e.slots, {
      get(t, n) {
        return At(e, "get", "$slots"), t[n];
      },
    }))
  );
}
function rT(e) {
  return Object.freeze({
    get attrs() {
      return tT(e);
    },
    get slots() {
      return nT(e);
    },
    get emit() {
      return (n, ...r) => e.emit(n, ...r);
    },
    expose: (n) => {
      if (
        (e.exposed && j("expose() should be called only once per setup()."),
        n != null)
      ) {
        let r = typeof n;
        r === "object" && (ue(n) ? (r = "array") : je(n) && (r = "ref")),
          r !== "object" &&
            j(`expose() should be passed a plain object, received ${r}.`);
      }
      e.exposed = n || {};
    },
  });
}
function Hl(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(H_(Qn(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in _o) return _o[n](e);
        },
        has(t, n) {
          return n in t || n in _o;
        },
      }))
    );
}
const oT = /(?:^|[-_])(\w)/g,
  sT = (e) => e.replace(oT, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function pd(e, t = !0) {
  return he(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function jl(e, t, n = !1) {
  let r = pd(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (s) => {
      for (const i in s) if (s[i] === t) return i;
    };
    r =
      o(e.components || e.parent.type.components) || o(e.appContext.components);
  }
  return r ? sT(r) : n ? "App" : "Anonymous";
}
function Iv(e) {
  return he(e) && "__vccOpts" in e;
}
const ie = (e, t) => TE(e, t, li);
function at(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? Pe(t) && !ue(t)
      ? ns(t)
        ? ae(e, null, [t])
        : ae(e, t)
      : ae(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && ns(n) && (n = [n]),
      ae(e, t, n));
}
const iT = Symbol.for("v-scx"),
  aT = () => {
    {
      const e = Me(iT);
      return (
        e ||
          j(
            "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
          ),
        e
      );
    }
  };
function Lc(e) {
  return !!(e && e.__v_isShallow);
}
function lT() {
  if (typeof window > "u") return;
  const e = { style: "color:#3ba776" },
    t = { style: "color:#1677ff" },
    n = { style: "color:#f5222d" },
    r = { style: "color:#eb2f96" },
    o = {
      header(f) {
        return Pe(f)
          ? f.__isVue
            ? ["div", e, "VueInstance"]
            : je(f)
            ? ["div", {}, ["span", e, u(f)], "<", a(f.value), ">"]
            : _n(f)
            ? [
                "div",
                {},
                ["span", e, Lc(f) ? "ShallowReactive" : "Reactive"],
                "<",
                a(f),
                `>${zr(f) ? " (readonly)" : ""}`,
              ]
            : zr(f)
            ? [
                "div",
                {},
                ["span", e, Lc(f) ? "ShallowReadonly" : "Readonly"],
                "<",
                a(f),
                ">",
              ]
            : null
          : null;
      },
      hasBody(f) {
        return f && f.__isVue;
      },
      body(f) {
        if (f && f.__isVue) return ["div", {}, ...s(f.$)];
      },
    };
  function s(f) {
    const d = [];
    f.type.props && f.props && d.push(i("props", de(f.props))),
      f.setupState !== He && d.push(i("setup", f.setupState)),
      f.data !== He && d.push(i("data", de(f.data)));
    const m = l(f, "computed");
    m && d.push(i("computed", m));
    const g = l(f, "inject");
    return (
      g && d.push(i("injected", g)),
      d.push([
        "div",
        {},
        ["span", { style: r.style + ";opacity:0.66" }, "$ (internal): "],
        ["object", { object: f }],
      ]),
      d
    );
  }
  function i(f, d) {
    return (
      (d = Ge({}, d)),
      Object.keys(d).length
        ? [
            "div",
            { style: "line-height:1.25em;margin-bottom:0.6em" },
            ["div", { style: "color:#476582" }, f],
            [
              "div",
              { style: "padding-left:1.25em" },
              ...Object.keys(d).map((m) => [
                "div",
                {},
                ["span", r, m + ": "],
                a(d[m], !1),
              ]),
            ],
          ]
        : ["span", {}]
    );
  }
  function a(f, d = !0) {
    return typeof f == "number"
      ? ["span", t, f]
      : typeof f == "string"
      ? ["span", n, JSON.stringify(f)]
      : typeof f == "boolean"
      ? ["span", r, f]
      : Pe(f)
      ? ["object", { object: d ? de(f) : f }]
      : ["span", n, String(f)];
  }
  function l(f, d) {
    const m = f.type;
    if (he(m)) return;
    const g = {};
    for (const _ in f.ctx) c(m, _, d) && (g[_] = f.ctx[_]);
    return g;
  }
  function c(f, d, m) {
    const g = f[m];
    if (
      (ue(g) && g.includes(d)) ||
      (Pe(g) && d in g) ||
      (f.extends && c(f.extends, d, m)) ||
      (f.mixins && f.mixins.some((_) => c(_, d, m)))
    )
      return !0;
  }
  function u(f) {
    return Lc(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters
    ? window.devtoolsFormatters.push(o)
    : (window.devtoolsFormatters = [o]);
}
const il = "3.3.11",
  cT = "http://www.w3.org/2000/svg",
  io = typeof document < "u" ? document : null,
  nm = io && io.createElement("template"),
  uT = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t
        ? io.createElementNS(cT, e)
        : io.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          o.setAttribute("multiple", r.multiple),
        o
      );
    },
    createText: (e) => io.createTextNode(e),
    createComment: (e) => io.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => io.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, o, s) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === s || !(o = o.nextSibling));

        );
      else {
        nm.innerHTML = r ? `<svg>${e}</svg>` : e;
        const a = nm.content;
        if (r) {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  vr = "transition",
  Cs = "animation",
  os = Symbol("_vtc"),
  md = (e, { slots: t }) => at(nw, Pv(e), t);
md.displayName = "Transition";
const Av = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  fT = (md.props = Ge({}, ov, Av)),
  to = (e, t = []) => {
    ue(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  rm = (e) => (e ? (ue(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Pv(e) {
  const t = {};
  for (const L in e) L in Av || (t[L] = e[L]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: o,
      enterFromClass: s = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = s,
      appearActiveClass: c = i,
      appearToClass: u = a,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    g = dT(o),
    _ = g && g[0],
    T = g && g[1],
    {
      onBeforeEnter: y,
      onEnter: E,
      onEnterCancelled: v,
      onLeave: w,
      onLeaveCancelled: C,
      onBeforeAppear: I = y,
      onAppear: S = E,
      onAppearCancelled: M = v,
    } = t,
    F = (L, Y, ve) => {
      Cr(L, Y ? u : a), Cr(L, Y ? c : i), ve && ve();
    },
    A = (L, Y) => {
      (L._isLeaving = !1), Cr(L, f), Cr(L, m), Cr(L, d), Y && Y();
    },
    D = (L) => (Y, ve) => {
      const ye = L ? S : E,
        Z = () => F(Y, L, ve);
      to(ye, [Y, Z]),
        om(() => {
          Cr(Y, L ? l : s), qn(Y, L ? u : a), rm(ye) || sm(Y, r, _, Z);
        });
    };
  return Ge(t, {
    onBeforeEnter(L) {
      to(y, [L]), qn(L, s), qn(L, i);
    },
    onBeforeAppear(L) {
      to(I, [L]), qn(L, l), qn(L, c);
    },
    onEnter: D(!1),
    onAppear: D(!0),
    onLeave(L, Y) {
      L._isLeaving = !0;
      const ve = () => A(L, Y);
      qn(L, f),
        Nv(),
        qn(L, d),
        om(() => {
          L._isLeaving && (Cr(L, f), qn(L, m), rm(w) || sm(L, r, T, ve));
        }),
        to(w, [L, ve]);
    },
    onEnterCancelled(L) {
      F(L, !1), to(v, [L]);
    },
    onAppearCancelled(L) {
      F(L, !0), to(M, [L]);
    },
    onLeaveCancelled(L) {
      A(L), to(C, [L]);
    },
  });
}
function dT(e) {
  if (e == null) return null;
  if (Pe(e)) return [$c(e.enter), $c(e.leave)];
  {
    const t = $c(e);
    return [t, t];
  }
}
function $c(e) {
  const t = F1(e);
  return xE(t, "<transition> explicit duration"), t;
}
function qn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[os] || (e[os] = new Set())).add(t);
}
function Cr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[os];
  n && (n.delete(t), n.size || (e[os] = void 0));
}
function om(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let pT = 0;
function sm(e, t, n, r) {
  const o = (e._endId = ++pT),
    s = () => {
      o === e._endId && r();
    };
  if (n) return setTimeout(s, n);
  const { type: i, timeout: a, propCount: l } = Rv(e, t);
  if (!i) return r();
  const c = i + "end";
  let u = 0;
  const f = () => {
      e.removeEventListener(c, d), s();
    },
    d = (m) => {
      m.target === e && ++u >= l && f();
    };
  setTimeout(() => {
    u < l && f();
  }, a + 1),
    e.addEventListener(c, d);
}
function Rv(e, t) {
  const n = window.getComputedStyle(e),
    r = (g) => (n[g] || "").split(", "),
    o = r(`${vr}Delay`),
    s = r(`${vr}Duration`),
    i = im(o, s),
    a = r(`${Cs}Delay`),
    l = r(`${Cs}Duration`),
    c = im(a, l);
  let u = null,
    f = 0,
    d = 0;
  t === vr
    ? i > 0 && ((u = vr), (f = i), (d = s.length))
    : t === Cs
    ? c > 0 && ((u = Cs), (f = c), (d = l.length))
    : ((f = Math.max(i, c)),
      (u = f > 0 ? (i > c ? vr : Cs) : null),
      (d = u ? (u === vr ? s.length : l.length) : 0));
  const m =
    u === vr && /\b(transform|all)(,|$)/.test(r(`${vr}Property`).toString());
  return { type: u, timeout: f, propCount: d, hasTransform: m };
}
function im(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => am(n) + am(e[r])));
}
function am(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Nv() {
  return document.body.offsetHeight;
}
function mT(e, t, n) {
  const r = e[os];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const hd = Symbol("_vod"),
  HD = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[hd] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : Os(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), Os(e, !0), r.enter(e))
            : r.leave(e, () => {
                Os(e, !1);
              })
          : Os(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Os(e, t);
    },
  };
function Os(e, t) {
  e.style.display = t ? e[hd] : "none";
}
function hT(e, t, n) {
  const r = e.style,
    o = Ye(n);
  if (n && !o) {
    if (t && !Ye(t)) for (const s in t) n[s] == null && Iu(r, s, "");
    for (const s in n) Iu(r, s, n[s]);
  } else {
    const s = r.display;
    o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
      hd in e && (r.display = s);
  }
}
const gT = /[^\\];\s*$/,
  lm = /\s*!important$/;
function Iu(e, t, n) {
  if (ue(n)) n.forEach((r) => Iu(e, t, r));
  else if (
    (n == null && (n = ""),
    gT.test(n) &&
      j(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),
    t.startsWith("--"))
  )
    e.setProperty(t, n);
  else {
    const r = _T(e, t);
    lm.test(n)
      ? e.setProperty(or(r), n.replace(lm, ""), "important")
      : (e[r] = n);
  }
}
const cm = ["Webkit", "Moz", "ms"],
  Dc = {};
function _T(e, t) {
  const n = Dc[t];
  if (n) return n;
  let r = Mn(t);
  if (r !== "filter" && r in e) return (Dc[t] = r);
  r = bo(r);
  for (let o = 0; o < cm.length; o++) {
    const s = cm[o] + r;
    if (s in e) return (Dc[t] = s);
  }
  return t;
}
const um = "http://www.w3.org/1999/xlink";
function vT(e, t, n, r, o) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(um, t.slice(6, t.length))
      : e.setAttributeNS(um, t, n);
  else {
    const s = K1(t);
    n == null || (s && !g_(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, s ? "" : n);
  }
}
function yT(e, t, n, r, o, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, o, s), (e[t] = n ?? "");
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
    e._value = n;
    const c = a === "OPTION" ? e.getAttribute("value") : e.value,
      u = n ?? "";
    c !== u && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean"
      ? (n = g_(n))
      : n == null && c === "string"
      ? ((n = ""), (l = !0))
      : c === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch (c) {
    l ||
      j(
        `Failed setting prop "${t}" on <${a.toLowerCase()}>: value ${n} is invalid.`,
        c
      );
  }
  l && e.removeAttribute(t);
}
function zo(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function bT(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const fm = Symbol("_vei");
function ET(e, t, n, r, o = null) {
  const s = e[fm] || (e[fm] = {}),
    i = s[t];
  if (r && i) i.value = r;
  else {
    const [a, l] = wT(t);
    if (r) {
      const c = (s[t] = CT(r, o));
      zo(e, a, c, l);
    } else i && (bT(e, a, i, l), (s[t] = void 0));
  }
}
const dm = /(?:Once|Passive|Capture)$/;
function wT(e) {
  let t;
  if (dm.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(dm)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : or(e.slice(2)), t];
}
let Mc = 0;
const TT = Promise.resolve(),
  ST = () => Mc || (TT.then(() => (Mc = 0)), (Mc = Date.now()));
function CT(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    an(OT(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = ST()), n;
}
function OT(e, t) {
  if (ue(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (o) => !o._stopped && r && r(o))
    );
  } else return t;
}
const pm = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  kT = (e, t, n, r, o = !1, s, i, a, l) => {
    t === "class"
      ? mT(e, r, o)
      : t === "style"
      ? hT(e, n, r)
      : ms(t)
      ? Wa(t) || ET(e, t, n, r, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : xT(e, t, r, o)
        )
      ? yT(e, t, r, s, i, a, l)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        vT(e, t, r, o));
  };
function xT(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && pm(t) && he(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return pm(t) && Ye(n) ? !1 : t in e;
}
const Lv = new WeakMap(),
  $v = new WeakMap(),
  al = Symbol("_moveCb"),
  mm = Symbol("_enterCb"),
  Dv = {
    name: "TransitionGroup",
    props: Ge({}, fT, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = bn(),
        r = rv();
      let o, s;
      return (
        cv(() => {
          if (!o.length) return;
          const i = e.moveClass || `${e.name || "v"}-move`;
          if (!LT(o[0].el, n.vnode.el, i)) return;
          o.forEach(PT), o.forEach(RT);
          const a = o.filter(NT);
          Nv(),
            a.forEach((l) => {
              const c = l.el,
                u = c.style;
              qn(c, i),
                (u.transform = u.webkitTransform = u.transitionDuration = "");
              const f = (c[al] = (d) => {
                (d && d.target !== c) ||
                  ((!d || /transform$/.test(d.propertyName)) &&
                    (c.removeEventListener("transitionend", f),
                    (c[al] = null),
                    Cr(c, i)));
              });
              c.addEventListener("transitionend", f);
            });
        }),
        () => {
          const i = de(e),
            a = Pv(i);
          let l = i.tag || Ae;
          (o = s), (s = t.default ? id(t.default()) : []);
          for (let c = 0; c < s.length; c++) {
            const u = s[c];
            u.key != null
              ? si(u, oi(u, a, r, n))
              : j("<TransitionGroup> children must be keyed.");
          }
          if (o)
            for (let c = 0; c < o.length; c++) {
              const u = o[c];
              si(u, oi(u, a, r, n)), Lv.set(u, u.el.getBoundingClientRect());
            }
          return ae(l, null, s);
        }
      );
    },
  },
  IT = (e) => delete e.mode;
Dv.props;
const AT = Dv;
function PT(e) {
  const t = e.el;
  t[al] && t[al](), t[mm] && t[mm]();
}
function RT(e) {
  $v.set(e, e.el.getBoundingClientRect());
}
function NT(e) {
  const t = Lv.get(e),
    n = $v.get(e),
    r = t.left - n.left,
    o = t.top - n.top;
  if (r || o) {
    const s = e.el.style;
    return (
      (s.transform = s.webkitTransform = `translate(${r}px,${o}px)`),
      (s.transitionDuration = "0s"),
      e
    );
  }
}
function LT(e, t, n) {
  const r = e.cloneNode(),
    o = e[os];
  o &&
    o.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }),
    n.split(/\s+/).forEach((a) => a && r.classList.add(a)),
    (r.style.display = "none");
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: i } = Rv(r);
  return s.removeChild(r), i;
}
const hm = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ue(t) ? (n) => jo(t, n) : t;
};
function $T(e) {
  e.target.composing = !0;
}
function gm(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Fc = Symbol("_assign"),
  DT = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
      e[Fc] = hm(o);
      const s = r || (o.props && o.props.type === "number");
      zo(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), s && (a = mu(a)), e[Fc](a);
      }),
        n &&
          zo(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (zo(e, "compositionstart", $T),
          zo(e, "compositionend", gm),
          zo(e, "change", gm));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: o } },
      s
    ) {
      if (((e[Fc] = hm(s)), e.composing)) return;
      const i = o || e.type === "number" ? mu(e.value) : e.value,
        a = t ?? "";
      i !== a &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          (n || (r && e.value.trim() === a))) ||
          (e.value = a));
    },
  },
  MT = ["ctrl", "shift", "alt", "meta"],
  FT = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => MT.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  HT = (e, t) =>
    e._withMods ||
    (e._withMods = (n, ...r) => {
      for (let o = 0; o < t.length; o++) {
        const s = FT[t[o]];
        if (s && s(n, t)) return;
      }
      return e(n, ...r);
    }),
  jT = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  jD = (e, t) =>
    e._withKeys ||
    (e._withKeys = (n) => {
      if (!("key" in n)) return;
      const r = or(n.key);
      if (t.some((o) => o === r || jT[o] === r)) return e(n);
    }),
  Mv = Ge({ patchProp: kT }, uT);
let Ws,
  _m = !1;
function UT() {
  return Ws || (Ws = Mw(Mv));
}
function zT() {
  return (Ws = _m ? Ws : Fw(Mv)), (_m = !0), Ws;
}
const BT = (...e) => {
    const t = UT().createApp(...e);
    Fv(t), Hv(t);
    const { mount: n } = t;
    return (
      (t.mount = (r) => {
        const o = jv(r);
        if (!o) return;
        const s = t._component;
        !he(s) && !s.render && !s.template && (s.template = o.innerHTML),
          (o.innerHTML = "");
        const i = n(o, !1, o instanceof SVGElement);
        return (
          o instanceof Element &&
            (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
          i
        );
      }),
      t
    );
  },
  VT = (...e) => {
    const t = zT().createApp(...e);
    Fv(t), Hv(t);
    const { mount: n } = t;
    return (
      (t.mount = (r) => {
        const o = jv(r);
        if (o) return n(o, !0, o instanceof SVGElement);
      }),
      t
    );
  };
function Fv(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => W1(t) || G1(t),
    writable: !1,
  });
}
function Hv(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        j(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      },
    });
    const n = e.config.compilerOptions,
      r =
        'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return j(r), n;
      },
      set() {
        j(r);
      },
    });
  }
}
function jv(e) {
  if (Ye(e)) {
    const t = document.querySelector(e);
    return (
      t ||
        j(`Failed to mount app: mount target selector "${e}" returned null.`),
      t
    );
  }
  return (
    window.ShadowRoot &&
      e instanceof window.ShadowRoot &&
      e.mode === "closed" &&
      j(
        'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
      ),
    e
  );
}
function WT() {
  lT();
}
WT();
var GT = !1;
function na(e, t, n) {
  return Array.isArray(e)
    ? ((e.length = Math.max(e.length, t)), e.splice(t, 1, n), n)
    : ((e[t] = n), n);
}
function Hc(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function YT() {
  return Uv().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Uv() {
  return typeof navigator < "u" && typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : {};
}
const KT = typeof Proxy == "function",
  qT = "devtools-plugin:setup",
  XT = "plugin:settings:set";
let Mo, Au;
function JT() {
  var e;
  return (
    Mo !== void 0 ||
      (typeof window < "u" && window.performance
        ? ((Mo = !0), (Au = window.performance))
        : typeof global < "u" &&
          !((e = global.perf_hooks) === null || e === void 0) &&
          e.performance
        ? ((Mo = !0), (Au = global.perf_hooks.performance))
        : (Mo = !1)),
    Mo
  );
}
function QT() {
  return JT() ? Au.now() : Date.now();
}
class ZT {
  constructor(t, n) {
    (this.target = null),
      (this.targetQueue = []),
      (this.onQueue = []),
      (this.plugin = t),
      (this.hook = n);
    const r = {};
    if (t.settings)
      for (const i in t.settings) {
        const a = t.settings[i];
        r[i] = a.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, r);
    try {
      const i = localStorage.getItem(o),
        a = JSON.parse(i);
      Object.assign(s, a);
    } catch {}
    (this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(o, JSON.stringify(i));
        } catch {}
        s = i;
      },
      now() {
        return QT();
      },
    }),
      n &&
        n.on(XT, (i, a) => {
          i === this.plugin.id && this.fallbacks.setSettings(a);
        }),
      (this.proxiedOn = new Proxy(
        {},
        {
          get: (i, a) =>
            this.target
              ? this.target.on[a]
              : (...l) => {
                  this.onQueue.push({ method: a, args: l });
                },
        }
      )),
      (this.proxiedTarget = new Proxy(
        {},
        {
          get: (i, a) =>
            this.target
              ? this.target[a]
              : a === "on"
              ? this.proxiedOn
              : Object.keys(this.fallbacks).includes(a)
              ? (...l) => (
                  this.targetQueue.push({
                    method: a,
                    args: l,
                    resolve: () => {},
                  }),
                  this.fallbacks[a](...l)
                )
              : (...l) =>
                  new Promise((c) => {
                    this.targetQueue.push({ method: a, args: l, resolve: c });
                  }),
        }
      ));
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue) this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Ul(e, t) {
  const n = e,
    r = Uv(),
    o = YT(),
    s = KT && n.enableEarlyProxy;
  if (o && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s)) o.emit(qT, e, t);
  else {
    const i = s ? new ZT(n, o) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i,
    }),
      i && t(i.proxiedTarget);
  }
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let Pu;
const ci = (e) => (Pu = e),
  zv = Symbol("pinia");
function So(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var Ln;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(Ln || (Ln = {}));
const zl = typeof window < "u",
  ll = zl,
  vm = (() =>
    typeof window == "object" && window.window === window
      ? window
      : typeof self == "object" && self.self === self
      ? self
      : typeof global == "object" && global.global === global
      ? global
      : typeof globalThis == "object"
      ? globalThis
      : { HTMLElement: null })();
function eS(e, { autoBom: t = !1 } = {}) {
  return t &&
    /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
      e.type
    )
    ? new Blob([String.fromCharCode(65279), e], { type: e.type })
    : e;
}
function gd(e, t, n) {
  const r = new XMLHttpRequest();
  r.open("GET", e),
    (r.responseType = "blob"),
    (r.onload = function () {
      Wv(r.response, t, n);
    }),
    (r.onerror = function () {
      console.error("could not download file");
    }),
    r.send();
}
function Bv(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {}
  return t.status >= 200 && t.status <= 299;
}
function Aa(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent(
      "click",
      !0,
      !0,
      window,
      0,
      0,
      0,
      80,
      20,
      !1,
      !1,
      !1,
      !1,
      0,
      null
    ),
      e.dispatchEvent(n);
  }
}
const Pa = typeof navigator == "object" ? navigator : { userAgent: "" },
  Vv = (() =>
    /Macintosh/.test(Pa.userAgent) &&
    /AppleWebKit/.test(Pa.userAgent) &&
    !/Safari/.test(Pa.userAgent))(),
  Wv = zl
    ? typeof HTMLAnchorElement < "u" &&
      "download" in HTMLAnchorElement.prototype &&
      !Vv
      ? tS
      : "msSaveOrOpenBlob" in Pa
      ? nS
      : rS
    : () => {};
function tS(e, t = "download", n) {
  const r = document.createElement("a");
  (r.download = t),
    (r.rel = "noopener"),
    typeof e == "string"
      ? ((r.href = e),
        r.origin !== location.origin
          ? Bv(r.href)
            ? gd(e, t, n)
            : ((r.target = "_blank"), Aa(r))
          : Aa(r))
      : ((r.href = URL.createObjectURL(e)),
        setTimeout(function () {
          URL.revokeObjectURL(r.href);
        }, 4e4),
        setTimeout(function () {
          Aa(r);
        }, 0));
}
function nS(e, t = "download", n) {
  if (typeof e == "string")
    if (Bv(e)) gd(e, t, n);
    else {
      const r = document.createElement("a");
      (r.href = e),
        (r.target = "_blank"),
        setTimeout(function () {
          Aa(r);
        });
    }
  else navigator.msSaveOrOpenBlob(eS(e, n), t);
}
function rS(e, t, n, r) {
  if (
    ((r = r || open("", "_blank")),
    r && (r.document.title = r.document.body.innerText = "downloading..."),
    typeof e == "string")
  )
    return gd(e, t, n);
  const o = e.type === "application/octet-stream",
    s = /constructor/i.test(String(vm.HTMLElement)) || "safari" in vm,
    i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || (o && s) || Vv) && typeof FileReader < "u") {
    const a = new FileReader();
    (a.onloadend = function () {
      let l = a.result;
      if (typeof l != "string")
        throw ((r = null), new Error("Wrong reader.result type"));
      (l = i ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;")),
        r ? (r.location.href = l) : location.assign(l),
        (r = null);
    }),
      a.readAsDataURL(e);
  } else {
    const a = URL.createObjectURL(e);
    r ? r.location.assign(a) : (location.href = a),
      (r = null),
      setTimeout(function () {
        URL.revokeObjectURL(a);
      }, 4e4);
  }
}
function vt(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function"
    ? __VUE_DEVTOOLS_TOAST__(n, t)
    : t === "error"
    ? console.error(n)
    : t === "warn"
    ? console.warn(n)
    : console.log(n);
}
function _d(e) {
  return "_a" in e && "install" in e;
}
function Gv() {
  if (!("clipboard" in navigator))
    return vt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Yv(e) {
  return e instanceof Error &&
    e.message.toLowerCase().includes("document is not focused")
    ? (vt(
        'You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',
        "warn"
      ),
      !0)
    : !1;
}
async function oS(e) {
  if (!Gv())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)),
        vt("Global state copied to clipboard.");
    } catch (t) {
      if (Yv(t)) return;
      vt(
        "Failed to serialize the state. Check the console for more details.",
        "error"
      ),
        console.error(t);
    }
}
async function sS(e) {
  if (!Gv())
    try {
      Kv(e, JSON.parse(await navigator.clipboard.readText())),
        vt("Global state pasted from clipboard.");
    } catch (t) {
      if (Yv(t)) return;
      vt(
        "Failed to deserialize the state from clipboard. Check the console for more details.",
        "error"
      ),
        console.error(t);
    }
}
async function iS(e) {
  try {
    Wv(
      new Blob([JSON.stringify(e.state.value)], {
        type: "text/plain;charset=utf-8",
      }),
      "pinia-state.json"
    );
  } catch (t) {
    vt(
      "Failed to export the state as JSON. Check the console for more details.",
      "error"
    ),
      console.error(t);
  }
}
let Vn;
function aS() {
  Vn ||
    ((Vn = document.createElement("input")),
    (Vn.type = "file"),
    (Vn.accept = ".json"));
  function e() {
    return new Promise((t, n) => {
      (Vn.onchange = async () => {
        const r = Vn.files;
        if (!r) return t(null);
        const o = r.item(0);
        return t(o ? { text: await o.text(), file: o } : null);
      }),
        (Vn.oncancel = () => t(null)),
        (Vn.onerror = n),
        Vn.click();
    });
  }
  return e;
}
async function lS(e) {
  try {
    const n = await aS()();
    if (!n) return;
    const { text: r, file: o } = n;
    Kv(e, JSON.parse(r)), vt(`Global state imported from "${o.name}".`);
  } catch (t) {
    vt(
      "Failed to import the state from JSON. Check the console for more details.",
      "error"
    ),
      console.error(t);
  }
}
function Kv(e, t) {
  for (const n in t) {
    const r = e.state.value[n];
    r ? Object.assign(r, t[n]) : (e.state.value[n] = t[n]);
  }
}
function dn(e) {
  return { _custom: { display: e } };
}
const qv = "🍍 Pinia (root)",
  Ru = "_root";
function cS(e) {
  return _d(e) ? { id: Ru, label: qv } : { id: e.$id, label: e.$id };
}
function uS(e) {
  if (_d(e)) {
    const n = Array.from(e._s.keys()),
      r = e._s;
    return {
      state: n.map((s) => ({ editable: !0, key: s, value: e.state.value[s] })),
      getters: n
        .filter((s) => r.get(s)._getters)
        .map((s) => {
          const i = r.get(s);
          return {
            editable: !1,
            key: s,
            value: i._getters.reduce((a, l) => ((a[l] = i[l]), a), {}),
          };
        }),
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n],
    })),
  };
  return (
    e._getters &&
      e._getters.length &&
      (t.getters = e._getters.map((n) => ({
        editable: !1,
        key: n,
        value: e[n],
      }))),
    e._customProperties.size &&
      (t.customProperties = Array.from(e._customProperties).map((n) => ({
        editable: !0,
        key: n,
        value: e[n],
      }))),
    t
  );
}
function fS(e) {
  return e
    ? Array.isArray(e)
      ? e.reduce(
          (t, n) => (
            t.keys.push(n.key),
            t.operations.push(n.type),
            (t.oldValue[n.key] = n.oldValue),
            (t.newValue[n.key] = n.newValue),
            t
          ),
          { oldValue: {}, keys: [], operations: [], newValue: {} }
        )
      : {
          operation: dn(e.type),
          key: dn(e.key),
          oldValue: e.oldValue,
          newValue: e.newValue,
        }
    : {};
}
function dS(e) {
  switch (e) {
    case Ln.direct:
      return "mutation";
    case Ln.patchFunction:
      return "$patch";
    case Ln.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Wo = !0;
const Ra = [],
  oo = "pinia:mutations",
  Ct = "pinia",
  { assign: pS } = Object,
  cl = (e) => "🍍 " + e;
function mS(e, t) {
  Ul(
    {
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes: Ra,
      app: e,
    },
    (n) => {
      typeof n.now != "function" &&
        vt(
          "You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."
        ),
        n.addTimelineLayer({ id: oo, label: "Pinia 🍍", color: 15064968 }),
        n.addInspector({
          id: Ct,
          label: "Pinia 🍍",
          icon: "storage",
          treeFilterPlaceholder: "Search stores",
          actions: [
            {
              icon: "content_copy",
              action: () => {
                oS(t);
              },
              tooltip: "Serialize and copy the state",
            },
            {
              icon: "content_paste",
              action: async () => {
                await sS(t), n.sendInspectorTree(Ct), n.sendInspectorState(Ct);
              },
              tooltip: "Replace the state with the content of your clipboard",
            },
            {
              icon: "save",
              action: () => {
                iS(t);
              },
              tooltip: "Save the state as a JSON file",
            },
            {
              icon: "folder_open",
              action: async () => {
                await lS(t), n.sendInspectorTree(Ct), n.sendInspectorState(Ct);
              },
              tooltip: "Import the state from a JSON file",
            },
          ],
          nodeActions: [
            {
              icon: "restore",
              tooltip: 'Reset the state (with "$reset")',
              action: (r) => {
                const o = t._s.get(r);
                o
                  ? typeof o.$reset != "function"
                    ? vt(
                        `Cannot reset "${r}" store because it doesn't have a "$reset" method implemented.`,
                        "warn"
                      )
                    : (o.$reset(), vt(`Store "${r}" reset.`))
                  : vt(
                      `Cannot reset "${r}" store because it wasn't found.`,
                      "warn"
                    );
              },
            },
          ],
        }),
        n.on.inspectComponent((r, o) => {
          const s = r.componentInstance && r.componentInstance.proxy;
          if (s && s._pStores) {
            const i = r.componentInstance.proxy._pStores;
            Object.values(i).forEach((a) => {
              r.instanceData.state.push({
                type: cl(a.$id),
                key: "state",
                editable: !0,
                value: a._isOptionsAPI
                  ? {
                      _custom: {
                        value: de(a.$state),
                        actions: [
                          {
                            icon: "restore",
                            tooltip: "Reset the state of this store",
                            action: () => a.$reset(),
                          },
                        ],
                      },
                    }
                  : Object.keys(a.$state).reduce(
                      (l, c) => ((l[c] = a.$state[c]), l),
                      {}
                    ),
              }),
                a._getters &&
                  a._getters.length &&
                  r.instanceData.state.push({
                    type: cl(a.$id),
                    key: "getters",
                    editable: !1,
                    value: a._getters.reduce((l, c) => {
                      try {
                        l[c] = a[c];
                      } catch (u) {
                        l[c] = u;
                      }
                      return l;
                    }, {}),
                  });
            });
          }
        }),
        n.on.getInspectorTree((r) => {
          if (r.app === e && r.inspectorId === Ct) {
            let o = [t];
            (o = o.concat(Array.from(t._s.values()))),
              (r.rootNodes = (
                r.filter
                  ? o.filter((s) =>
                      "$id" in s
                        ? s.$id.toLowerCase().includes(r.filter.toLowerCase())
                        : qv.toLowerCase().includes(r.filter.toLowerCase())
                    )
                  : o
              ).map(cS));
          }
        }),
        n.on.getInspectorState((r) => {
          if (r.app === e && r.inspectorId === Ct) {
            const o = r.nodeId === Ru ? t : t._s.get(r.nodeId);
            if (!o) return;
            o && (r.state = uS(o));
          }
        }),
        n.on.editInspectorState((r, o) => {
          if (r.app === e && r.inspectorId === Ct) {
            const s = r.nodeId === Ru ? t : t._s.get(r.nodeId);
            if (!s) return vt(`store "${r.nodeId}" not found`, "error");
            const { path: i } = r;
            _d(s)
              ? i.unshift("state")
              : (i.length !== 1 ||
                  !s._customProperties.has(i[0]) ||
                  i[0] in s.$state) &&
                i.unshift("$state"),
              (Wo = !1),
              r.set(s, i, r.state.value),
              (Wo = !0);
          }
        }),
        n.on.editComponentState((r) => {
          if (r.type.startsWith("🍍")) {
            const o = r.type.replace(/^🍍\s*/, ""),
              s = t._s.get(o);
            if (!s) return vt(`store "${o}" not found`, "error");
            const { path: i } = r;
            if (i[0] !== "state")
              return vt(`Invalid path for store "${o}":
${i}
Only state can be modified.`);
            (i[0] = "$state"), (Wo = !1), r.set(s, i, r.state.value), (Wo = !0);
          }
        });
    }
  );
}
function hS(e, t) {
  Ra.includes(cl(t.$id)) || Ra.push(cl(t.$id)),
    Ul(
      {
        id: "dev.esm.pinia",
        label: "Pinia 🍍",
        logo: "https://pinia.vuejs.org/logo.svg",
        packageName: "pinia",
        homepage: "https://pinia.vuejs.org",
        componentStateTypes: Ra,
        app: e,
        settings: {
          logStoreChanges: {
            label: "Notify about new/deleted stores",
            type: "boolean",
            defaultValue: !0,
          },
        },
      },
      (n) => {
        const r = typeof n.now == "function" ? n.now.bind(n) : Date.now;
        t.$onAction(({ after: i, onError: a, name: l, args: c }) => {
          const u = Xv++;
          n.addTimelineEvent({
            layerId: oo,
            event: {
              time: r(),
              title: "🛫 " + l,
              subtitle: "start",
              data: { store: dn(t.$id), action: dn(l), args: c },
              groupId: u,
            },
          }),
            i((f) => {
              (Lr = void 0),
                n.addTimelineEvent({
                  layerId: oo,
                  event: {
                    time: r(),
                    title: "🛬 " + l,
                    subtitle: "end",
                    data: {
                      store: dn(t.$id),
                      action: dn(l),
                      args: c,
                      result: f,
                    },
                    groupId: u,
                  },
                });
            }),
            a((f) => {
              (Lr = void 0),
                n.addTimelineEvent({
                  layerId: oo,
                  event: {
                    time: r(),
                    logType: "error",
                    title: "💥 " + l,
                    subtitle: "end",
                    data: {
                      store: dn(t.$id),
                      action: dn(l),
                      args: c,
                      error: f,
                    },
                    groupId: u,
                  },
                });
            });
        }, !0),
          t._customProperties.forEach((i) => {
            xt(
              () => te(t[i]),
              (a, l) => {
                n.notifyComponentUpdate(),
                  n.sendInspectorState(Ct),
                  Wo &&
                    n.addTimelineEvent({
                      layerId: oo,
                      event: {
                        time: r(),
                        title: "Change",
                        subtitle: i,
                        data: { newValue: a, oldValue: l },
                        groupId: Lr,
                      },
                    });
              },
              { deep: !0 }
            );
          }),
          t.$subscribe(
            ({ events: i, type: a }, l) => {
              if ((n.notifyComponentUpdate(), n.sendInspectorState(Ct), !Wo))
                return;
              const c = {
                time: r(),
                title: dS(a),
                data: pS({ store: dn(t.$id) }, fS(i)),
                groupId: Lr,
              };
              a === Ln.patchFunction
                ? (c.subtitle = "⤵️")
                : a === Ln.patchObject
                ? (c.subtitle = "🧩")
                : i && !Array.isArray(i) && (c.subtitle = i.type),
                i &&
                  (c.data["rawEvent(s)"] = {
                    _custom: {
                      display: "DebuggerEvent",
                      type: "object",
                      tooltip: "raw DebuggerEvent[]",
                      value: i,
                    },
                  }),
                n.addTimelineEvent({ layerId: oo, event: c });
            },
            { detached: !0, flush: "sync" }
          );
        const o = t._hotUpdate;
        t._hotUpdate = Qn((i) => {
          o(i),
            n.addTimelineEvent({
              layerId: oo,
              event: {
                time: r(),
                title: "🔥 " + t.$id,
                subtitle: "HMR update",
                data: { store: dn(t.$id), info: dn("HMR update") },
              },
            }),
            n.notifyComponentUpdate(),
            n.sendInspectorTree(Ct),
            n.sendInspectorState(Ct);
        });
        const { $dispose: s } = t;
        (t.$dispose = () => {
          s(),
            n.notifyComponentUpdate(),
            n.sendInspectorTree(Ct),
            n.sendInspectorState(Ct),
            n.getSettings().logStoreChanges &&
              vt(`Disposed "${t.$id}" store 🗑`);
        }),
          n.notifyComponentUpdate(),
          n.sendInspectorTree(Ct),
          n.sendInspectorState(Ct),
          n.getSettings().logStoreChanges &&
            vt(`"${t.$id}" store installed 🆕`);
      }
    );
}
let Xv = 0,
  Lr;
function ym(e, t, n) {
  const r = t.reduce((o, s) => ((o[s] = de(e)[s]), o), {});
  for (const o in r)
    e[o] = function () {
      const s = Xv,
        i = n
          ? new Proxy(e, {
              get(...l) {
                return (Lr = s), Reflect.get(...l);
              },
              set(...l) {
                return (Lr = s), Reflect.set(...l);
              },
            })
          : e;
      Lr = s;
      const a = r[o].apply(i, arguments);
      return (Lr = void 0), a;
    };
}
function gS({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:")) return;
  (t._isOptionsAPI = !!n.state), ym(t, Object.keys(n.actions), t._isOptionsAPI);
  const r = t._hotUpdate;
  (de(t)._hotUpdate = function (o) {
    r.apply(this, arguments),
      ym(t, Object.keys(o._hmrPayload.actions), !!t._isOptionsAPI);
  }),
    hS(e, t);
}
function _S() {
  const e = Xf(!0),
    t = e.run(() => re({}));
  let n = [],
    r = [];
  const o = Qn({
    install(s) {
      ci(o),
        (o._a = s),
        s.provide(zv, o),
        (s.config.globalProperties.$pinia = o),
        ll && mS(s, o),
        r.forEach((i) => n.push(i)),
        (r = []);
    },
    use(s) {
      return !this._a && !GT ? r.push(s) : n.push(s), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return ll && typeof Proxy < "u" && o.use(gS), o;
}
function Jv(e, t) {
  for (const n in t) {
    const r = t[n];
    if (!(n in e)) continue;
    const o = e[n];
    So(o) && So(r) && !je(r) && !_n(r) ? (e[n] = Jv(o, r)) : (e[n] = r);
  }
  return e;
}
const vS = () => {};
function bm(e, t, n, r = vS) {
  e.push(t);
  const o = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), r());
  };
  return !n && y_() && X1(o), o;
}
function Fo(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const yS = (e) => e();
function Nu(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      o = e[n];
    So(o) && So(r) && e.hasOwnProperty(n) && !je(r) && !_n(r)
      ? (e[n] = Nu(o, r))
      : (e[n] = r);
  }
  return e;
}
const bS = Symbol("pinia:skipHydration");
function ES(e) {
  return !So(e) || !e.hasOwnProperty(bS);
}
const { assign: rn } = Object;
function Em(e) {
  return !!(je(e) && e.effect);
}
function wm(e, t, n, r) {
  const { state: o, actions: s, getters: i } = t,
    a = n.state.value[e];
  let l;
  function c() {
    !a && !r && (n.state.value[e] = o ? o() : {});
    const u = Dp(r ? re(o ? o() : {}).value : n.state.value[e]);
    return rn(
      u,
      s,
      Object.keys(i || {}).reduce(
        (f, d) => (
          d in u &&
            console.warn(
              `[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${e}".`
            ),
          (f[d] = Qn(
            ie(() => {
              ci(n);
              const m = n._s.get(e);
              return i[d].call(m, m);
            })
          )),
          f
        ),
        {}
      )
    );
  }
  return (l = Lu(e, c, t, n, r, !0)), l;
}
function Lu(e, t, n = {}, r, o, s) {
  let i;
  const a = rn({ actions: {} }, n);
  if (!r._e.active) throw new Error("Pinia destroyed");
  const l = { deep: !0 };
  l.onTrigger = (A) => {
    c
      ? (m = A)
      : c == !1 &&
        !S._hotUpdating &&
        (Array.isArray(m)
          ? m.push(A)
          : console.error(
              "🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."
            ));
  };
  let c,
    u,
    f = [],
    d = [],
    m;
  const g = r.state.value[e];
  !s && !g && !o && (r.state.value[e] = {});
  const _ = re({});
  let T;
  function y(A) {
    let D;
    (c = u = !1),
      (m = []),
      typeof A == "function"
        ? (A(r.state.value[e]),
          (D = { type: Ln.patchFunction, storeId: e, events: m }))
        : (Nu(r.state.value[e], A),
          (D = { type: Ln.patchObject, payload: A, storeId: e, events: m }));
    const L = (T = Symbol());
    Gt().then(() => {
      T === L && (c = !0);
    }),
      (u = !0),
      Fo(f, D, r.state.value[e]);
  }
  const E = s
    ? function () {
        const { state: D } = n,
          L = D ? D() : {};
        this.$patch((Y) => {
          rn(Y, L);
        });
      }
    : () => {
        throw new Error(
          `🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`
        );
      };
  function v() {
    i.stop(), (f = []), (d = []), r._s.delete(e);
  }
  function w(A, D) {
    return function () {
      ci(r);
      const L = Array.from(arguments),
        Y = [],
        ve = [];
      function ye(U) {
        Y.push(U);
      }
      function Z(U) {
        ve.push(U);
      }
      Fo(d, { args: L, name: A, store: S, after: ye, onError: Z });
      let W;
      try {
        W = D.apply(this && this.$id === e ? this : S, L);
      } catch (U) {
        throw (Fo(ve, U), U);
      }
      return W instanceof Promise
        ? W.then((U) => (Fo(Y, U), U)).catch(
            (U) => (Fo(ve, U), Promise.reject(U))
          )
        : (Fo(Y, W), W);
    };
  }
  const C = Qn({ actions: {}, getters: {}, state: [], hotState: _ }),
    I = {
      _p: r,
      $id: e,
      $onAction: bm.bind(null, d),
      $patch: y,
      $reset: E,
      $subscribe(A, D = {}) {
        const L = bm(f, A, D.detached, () => Y()),
          Y = i.run(() =>
            xt(
              () => r.state.value[e],
              (ve) => {
                (D.flush === "sync" ? u : c) &&
                  A({ storeId: e, type: Ln.direct, events: m }, ve);
              },
              rn({}, l, D)
            )
          );
        return L;
      },
      $dispose: v,
    },
    S = gs(rn({ _hmrPayload: C, _customProperties: Qn(new Set()) }, I));
  r._s.set(e, S);
  const F = ((r._a && r._a.runWithContext) || yS)(() =>
    r._e.run(() => (i = Xf()).run(t))
  );
  for (const A in F) {
    const D = F[A];
    if ((je(D) && !Em(D)) || _n(D))
      o
        ? na(_.value, A, Oa(F, A))
        : s ||
          (g && ES(D) && (je(D) ? (D.value = g[A]) : Nu(D, g[A])),
          (r.state.value[e][A] = D)),
        C.state.push(A);
    else if (typeof D == "function") {
      const L = o ? D : w(A, D);
      (F[A] = L), (C.actions[A] = D), (a.actions[A] = D);
    } else
      Em(D) &&
        ((C.getters[A] = s ? n.getters[A] : D),
        zl && (F._getters || (F._getters = Qn([]))).push(A));
  }
  if (
    (rn(S, F),
    rn(de(S), F),
    Object.defineProperty(S, "$state", {
      get: () => (o ? _.value : r.state.value[e]),
      set: (A) => {
        if (o) throw new Error("cannot set hotState");
        y((D) => {
          rn(D, A);
        });
      },
    }),
    (S._hotUpdate = Qn((A) => {
      (S._hotUpdating = !0),
        A._hmrPayload.state.forEach((D) => {
          if (D in S.$state) {
            const L = A.$state[D],
              Y = S.$state[D];
            typeof L == "object" && So(L) && So(Y)
              ? Jv(L, Y)
              : (A.$state[D] = Y);
          }
          na(S, D, Oa(A.$state, D));
        }),
        Object.keys(S.$state).forEach((D) => {
          D in A.$state || Hc(S, D);
        }),
        (c = !1),
        (u = !1),
        (r.state.value[e] = Oa(A._hmrPayload, "hotState")),
        (u = !0),
        Gt().then(() => {
          c = !0;
        });
      for (const D in A._hmrPayload.actions) {
        const L = A[D];
        na(S, D, w(D, L));
      }
      for (const D in A._hmrPayload.getters) {
        const L = A._hmrPayload.getters[D],
          Y = s ? ie(() => (ci(r), L.call(S, S))) : L;
        na(S, D, Y);
      }
      Object.keys(S._hmrPayload.getters).forEach((D) => {
        D in A._hmrPayload.getters || Hc(S, D);
      }),
        Object.keys(S._hmrPayload.actions).forEach((D) => {
          D in A._hmrPayload.actions || Hc(S, D);
        }),
        (S._hmrPayload = A._hmrPayload),
        (S._getters = A._getters),
        (S._hotUpdating = !1);
    })),
    ll)
  ) {
    const A = { writable: !0, configurable: !0, enumerable: !1 };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((D) => {
      Object.defineProperty(S, D, rn({ value: S[D] }, A));
    });
  }
  return (
    r._p.forEach((A) => {
      if (ll) {
        const D = i.run(() => A({ store: S, app: r._a, pinia: r, options: a }));
        Object.keys(D || {}).forEach((L) => S._customProperties.add(L)),
          rn(S, D);
      } else
        rn(
          S,
          i.run(() => A({ store: S, app: r._a, pinia: r, options: a }))
        );
    }),
    S.$state &&
      typeof S.$state == "object" &&
      typeof S.$state.constructor == "function" &&
      !S.$state.constructor.toString().includes("[native code]") &&
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${S.$id}".`),
    g && s && n.hydrate && n.hydrate(S.$state, g),
    (c = !0),
    (u = !0),
    S
  );
}
function vd(e, t, n) {
  let r, o;
  const s = typeof t == "function";
  if (typeof e == "string") (r = e), (o = s ? n : t);
  else if (((o = e), (r = e.id), typeof r != "string"))
    throw new Error(
      '[🍍]: "defineStore()" must be passed a store id as its first argument.'
    );
  function i(a, l) {
    const c = Tw();
    if (((a = a || (c ? Me(zv, null) : null)), a && ci(a), !Pu))
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    (a = Pu), a._s.has(r) || (s ? Lu(r, t, o, a) : wm(r, o, a), (i._pinia = a));
    const u = a._s.get(r);
    if (l) {
      const f = "__hot:" + r,
        d = s ? Lu(f, t, o, a, !0) : wm(f, rn({}, o), a, !0);
      l._hotUpdate(d), delete a.state.value[f], a._s.delete(f);
    }
    if (zl) {
      const f = bn();
      if (f && f.proxy && !l) {
        const d = f.proxy,
          m = "_pStores" in d ? d._pStores : (d._pStores = {});
        m[r] = u;
      }
    }
    return u;
  }
  return (i.$id = r), i;
}
function $u(e) {
  {
    e = de(e);
    const t = {};
    for (const n in e) {
      const r = e[n];
      (je(r) || _n(r)) && (t[n] = Oa(e, n));
    }
    return t;
  }
}
const ul = "lastVisitedPage";
function Qv(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: wS } = Object.prototype,
  { getPrototypeOf: yd } = Object,
  Bl = ((e) => (t) => {
    const n = wS.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  jn = (e) => ((e = e.toLowerCase()), (t) => Bl(t) === e),
  Vl = (e) => (t) => typeof t === e,
  { isArray: _s } = Array,
  ui = Vl("undefined");
function TS(e) {
  return (
    e !== null &&
    !ui(e) &&
    e.constructor !== null &&
    !ui(e.constructor) &&
    cn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Zv = jn("ArrayBuffer");
function SS(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Zv(e.buffer)),
    t
  );
}
const CS = Vl("string"),
  cn = Vl("function"),
  ey = Vl("number"),
  Wl = (e) => e !== null && typeof e == "object",
  OS = (e) => e === !0 || e === !1,
  Na = (e) => {
    if (Bl(e) !== "object") return !1;
    const t = yd(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  kS = jn("Date"),
  xS = jn("File"),
  IS = jn("Blob"),
  AS = jn("FileList"),
  PS = (e) => Wl(e) && cn(e.pipe),
  RS = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (cn(e.append) &&
          ((t = Bl(e)) === "formdata" ||
            (t === "object" &&
              cn(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  NS = jn("URLSearchParams"),
  LS = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ri(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), _s(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = s.length;
    let a;
    for (r = 0; r < i; r++) (a = s[r]), t.call(null, e[a], a, e);
  }
}
function ty(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const ny = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  ry = (e) => !ui(e) && e !== ny;
function Du() {
  const { caseless: e } = (ry(this) && this) || {},
    t = {},
    n = (r, o) => {
      const s = (e && ty(t, o)) || o;
      Na(t[s]) && Na(r)
        ? (t[s] = Du(t[s], r))
        : Na(r)
        ? (t[s] = Du({}, r))
        : _s(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ri(arguments[r], n);
  return t;
}
const $S = (e, t, n, { allOwnKeys: r } = {}) => (
    Ri(
      t,
      (o, s) => {
        n && cn(o) ? (e[s] = Qv(o, n)) : (e[s] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  DS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  MS = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  FS = (e, t, n, r) => {
    let o, s, i;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
        (i = o[s]), (!r || r(i, e, t)) && !a[i] && ((t[i] = e[i]), (a[i] = !0));
      e = n !== !1 && yd(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  HS = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  jS = (e) => {
    if (!e) return null;
    if (_s(e)) return e;
    let t = e.length;
    if (!ey(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  US = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && yd(Uint8Array)),
  zS = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const s = o.value;
      t.call(e, s[0], s[1]);
    }
  },
  BS = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  VS = jn("HTMLFormElement"),
  WS = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Tm = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  GS = jn("RegExp"),
  oy = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Ri(n, (o, s) => {
      let i;
      (i = t(o, s, e)) !== !1 && (r[s] = i || o);
    }),
      Object.defineProperties(e, r);
  },
  YS = (e) => {
    oy(e, (t, n) => {
      if (cn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (cn(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  KS = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((s) => {
          n[s] = !0;
        });
      };
    return _s(e) ? r(e) : r(String(e).split(t)), n;
  },
  qS = () => {},
  XS = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  jc = "abcdefghijklmnopqrstuvwxyz",
  Sm = "0123456789",
  sy = { DIGIT: Sm, ALPHA: jc, ALPHA_DIGIT: jc + jc.toUpperCase() + Sm },
  JS = (e = 16, t = sy.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function QS(e) {
  return !!(
    e &&
    cn(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const ZS = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Wl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const s = _s(r) ? [] : {};
            return (
              Ri(r, (i, a) => {
                const l = n(i, o + 1);
                !ui(l) && (s[a] = l);
              }),
              (t[o] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  e2 = jn("AsyncFunction"),
  t2 = (e) => e && (Wl(e) || cn(e)) && cn(e.then) && cn(e.catch),
  H = {
    isArray: _s,
    isArrayBuffer: Zv,
    isBuffer: TS,
    isFormData: RS,
    isArrayBufferView: SS,
    isString: CS,
    isNumber: ey,
    isBoolean: OS,
    isObject: Wl,
    isPlainObject: Na,
    isUndefined: ui,
    isDate: kS,
    isFile: xS,
    isBlob: IS,
    isRegExp: GS,
    isFunction: cn,
    isStream: PS,
    isURLSearchParams: NS,
    isTypedArray: US,
    isFileList: AS,
    forEach: Ri,
    merge: Du,
    extend: $S,
    trim: LS,
    stripBOM: DS,
    inherits: MS,
    toFlatObject: FS,
    kindOf: Bl,
    kindOfTest: jn,
    endsWith: HS,
    toArray: jS,
    forEachEntry: zS,
    matchAll: BS,
    isHTMLForm: VS,
    hasOwnProperty: Tm,
    hasOwnProp: Tm,
    reduceDescriptors: oy,
    freezeMethods: YS,
    toObjectSet: KS,
    toCamelCase: WS,
    noop: qS,
    toFiniteNumber: XS,
    findKey: ty,
    global: ny,
    isContextDefined: ry,
    ALPHABET: sy,
    generateString: JS,
    isSpecCompliantForm: QS,
    toJSONObject: ZS,
    isAsyncFn: e2,
    isThenable: t2,
  };
function ke(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
H.inherits(ke, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: H.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const iy = ke.prototype,
  ay = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  ay[e] = { value: e };
});
Object.defineProperties(ke, ay);
Object.defineProperty(iy, "isAxiosError", { value: !0 });
ke.from = (e, t, n, r, o, s) => {
  const i = Object.create(iy);
  return (
    H.toFlatObject(
      e,
      i,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    ke.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    s && Object.assign(i, s),
    i
  );
};
const n2 = null;
function Mu(e) {
  return H.isPlainObject(e) || H.isArray(e);
}
function ly(e) {
  return H.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Cm(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, s) {
          return (o = ly(o)), !n && s ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function r2(e) {
  return H.isArray(e) && !e.some(Mu);
}
const o2 = H.toFlatObject(H, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Gl(e, t, n) {
  if (!H.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = H.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (_, T) {
        return !H.isUndefined(T[_]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || u,
    s = n.dots,
    i = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && H.isSpecCompliantForm(t);
  if (!H.isFunction(o)) throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null) return "";
    if (H.isDate(g)) return g.toISOString();
    if (!l && H.isBlob(g))
      throw new ke("Blob is not supported. Use a Buffer instead.");
    return H.isArrayBuffer(g) || H.isTypedArray(g)
      ? l && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function u(g, _, T) {
    let y = g;
    if (g && !T && typeof g == "object") {
      if (H.endsWith(_, "{}"))
        (_ = r ? _ : _.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (H.isArray(g) && r2(g)) ||
        ((H.isFileList(g) || H.endsWith(_, "[]")) && (y = H.toArray(g)))
      )
        return (
          (_ = ly(_)),
          y.forEach(function (v, w) {
            !(H.isUndefined(v) || v === null) &&
              t.append(
                i === !0 ? Cm([_], w, s) : i === null ? _ : _ + "[]",
                c(v)
              );
          }),
          !1
        );
    }
    return Mu(g) ? !0 : (t.append(Cm(T, _, s), c(g)), !1);
  }
  const f = [],
    d = Object.assign(o2, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: Mu,
    });
  function m(g, _) {
    if (!H.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      f.push(g),
        H.forEach(g, function (y, E) {
          (!(H.isUndefined(y) || y === null) &&
            o.call(t, y, H.isString(E) ? E.trim() : E, _, d)) === !0 &&
            m(y, _ ? _.concat(E) : [E]);
        }),
        f.pop();
    }
  }
  if (!H.isObject(e)) throw new TypeError("data must be an object");
  return m(e), t;
}
function Om(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function bd(e, t) {
  (this._pairs = []), e && Gl(e, this, t);
}
const cy = bd.prototype;
cy.append = function (t, n) {
  this._pairs.push([t, n]);
};
cy.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Om);
      }
    : Om;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function s2(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function uy(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || s2,
    o = n && n.serialize;
  let s;
  if (
    (o
      ? (s = o(t, n))
      : (s = H.isURLSearchParams(t) ? t.toString() : new bd(t, n).toString(r)),
    s)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class i2 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    H.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const km = i2,
  fy = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  a2 = typeof URLSearchParams < "u" ? URLSearchParams : bd,
  l2 = typeof FormData < "u" ? FormData : null,
  c2 = typeof Blob < "u" ? Blob : null,
  u2 = {
    isBrowser: !0,
    classes: { URLSearchParams: a2, FormData: l2, Blob: c2 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  dy = typeof window < "u" && typeof document < "u",
  f2 = ((e) => dy && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  d2 = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  p2 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: dy,
        hasStandardBrowserEnv: f2,
        hasStandardBrowserWebWorkerEnv: d2,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Pn = { ...p2, ...u2 };
function m2(e, t) {
  return Gl(
    e,
    new Pn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, s) {
          return Pn.isNode && H.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function h2(e) {
  return H.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function g2(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function py(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    const a = Number.isFinite(+i),
      l = s >= n.length;
    return (
      (i = !i && H.isArray(o) ? o.length : i),
      l
        ? (H.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !a)
        : ((!o[i] || !H.isObject(o[i])) && (o[i] = []),
          t(n, r, o[i], s) && H.isArray(o[i]) && (o[i] = g2(o[i])),
          !a)
    );
  }
  if (H.isFormData(e) && H.isFunction(e.entries)) {
    const n = {};
    return (
      H.forEachEntry(e, (r, o) => {
        t(h2(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function _2(e, t, n) {
  if (H.isString(e))
    try {
      return (t || JSON.parse)(e), H.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ed = {
  transitional: fy,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        s = H.isObject(t);
      if ((s && H.isHTMLForm(t) && (t = new FormData(t)), H.isFormData(t)))
        return o && o ? JSON.stringify(py(t)) : t;
      if (
        H.isArrayBuffer(t) ||
        H.isBuffer(t) ||
        H.isStream(t) ||
        H.isFile(t) ||
        H.isBlob(t)
      )
        return t;
      if (H.isArrayBufferView(t)) return t.buffer;
      if (H.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return m2(t, this.formSerializer).toString();
        if ((a = H.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Gl(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), _2(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ed.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && H.isString(t) && ((r && !this.responseType) || o)) {
        const i = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (i)
            throw a.name === "SyntaxError"
              ? ke.from(a, ke.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Pn.classes.FormData, Blob: Pn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
H.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ed.headers[e] = {};
});
const wd = Ed,
  v2 = H.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  y2 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (o = i.indexOf(":")),
              (n = i.substring(0, o).trim().toLowerCase()),
              (r = i.substring(o + 1).trim()),
              !(!n || (t[n] && v2[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  xm = Symbol("internals");
function ks(e) {
  return e && String(e).trim().toLowerCase();
}
function La(e) {
  return e === !1 || e == null ? e : H.isArray(e) ? e.map(La) : String(e);
}
function b2(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const E2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Uc(e, t, n, r, o) {
  if (H.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!H.isString(t))) {
    if (H.isString(r)) return t.indexOf(r) !== -1;
    if (H.isRegExp(r)) return r.test(t);
  }
}
function w2(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function T2(e, t) {
  const n = H.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0,
    });
  });
}
class Yl {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(a, l, c) {
      const u = ks(l);
      if (!u) throw new Error("header name must be a non-empty string");
      const f = H.findKey(o, u);
      (!f || o[f] === void 0 || c === !0 || (c === void 0 && o[f] !== !1)) &&
        (o[f || l] = La(a));
    }
    const i = (a, l) => H.forEach(a, (c, u) => s(c, u, l));
    return (
      H.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : H.isString(t) && (t = t.trim()) && !E2(t)
        ? i(y2(t), n)
        : t != null && s(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = ks(t)), t)) {
      const r = H.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return b2(o);
        if (H.isFunction(n)) return n.call(this, o, r);
        if (H.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = ks(t)), t)) {
      const r = H.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Uc(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (((i = ks(i)), i)) {
        const a = H.findKey(r, i);
        a && (!n || Uc(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return H.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Uc(this, this[s], s, t, !0)) && (delete this[s], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      H.forEach(this, (o, s) => {
        const i = H.findKey(r, s);
        if (i) {
          (n[i] = La(o)), delete n[s];
          return;
        }
        const a = t ? w2(s) : String(s).trim();
        a !== s && delete n[s], (n[a] = La(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      H.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && H.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[xm] = this[xm] = { accessors: {} }).accessors,
      o = this.prototype;
    function s(i) {
      const a = ks(i);
      r[a] || (T2(o, i), (r[a] = !0));
    }
    return H.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Yl.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
H.reduceDescriptors(Yl.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
H.freezeMethods(Yl);
const nr = Yl;
function zc(e, t) {
  const n = this || wd,
    r = t || n,
    o = nr.from(r.headers);
  let s = r.data;
  return (
    H.forEach(e, function (a) {
      s = a.call(n, s, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    s
  );
}
function my(e) {
  return !!(e && e.__CANCEL__);
}
function Ni(e, t, n) {
  ke.call(this, e ?? "canceled", ke.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
H.inherits(Ni, ke, { __CANCEL__: !0 });
function S2(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ke(
          "Request failed with status code " + n.status,
          [ke.ERR_BAD_REQUEST, ke.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const C2 = Pn.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, s) {
        const i = [e + "=" + encodeURIComponent(t)];
        H.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
          H.isString(r) && i.push("path=" + r),
          H.isString(o) && i.push("domain=" + o),
          s === !0 && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function O2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function k2(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function hy(e, t) {
  return e && !O2(t) ? k2(e, t) : t;
}
const x2 = Pn.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(s) {
        let i = s;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (i) {
          const a = H.isString(i) ? o(i) : i;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function I2(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function A2(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    s = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const c = Date.now(),
        u = r[s];
      i || (i = c), (n[o] = l), (r[o] = c);
      let f = s,
        d = 0;
      for (; f !== o; ) (d += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === s && (s = (s + 1) % e), c - i < t)) return;
      const m = u && c - u;
      return m ? Math.round((d * 1e3) / m) : void 0;
    }
  );
}
function Im(e, t) {
  let n = 0;
  const r = A2(50, 250);
  return (o) => {
    const s = o.loaded,
      i = o.lengthComputable ? o.total : void 0,
      a = s - n,
      l = r(a),
      c = s <= i;
    n = s;
    const u = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && i && c ? (i - s) / l : void 0,
      event: o,
    };
    (u[t ? "download" : "upload"] = !0), e(u);
  };
}
const P2 = typeof XMLHttpRequest < "u",
  R2 =
    P2 &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const s = nr.from(e.headers).normalize();
        let { responseType: i, withXSRFToken: a } = e,
          l;
        function c() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        let u;
        if (H.isFormData(o)) {
          if (Pn.hasStandardBrowserEnv || Pn.hasStandardBrowserWebWorkerEnv)
            s.setContentType(!1);
          else if ((u = s.getContentType()) !== !1) {
            const [_, ...T] = u
              ? u
                  .split(";")
                  .map((y) => y.trim())
                  .filter(Boolean)
              : [];
            s.setContentType([_ || "multipart/form-data", ...T].join("; "));
          }
        }
        let f = new XMLHttpRequest();
        if (e.auth) {
          const _ = e.auth.username || "",
            T = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          s.set("Authorization", "Basic " + btoa(_ + ":" + T));
        }
        const d = hy(e.baseURL, e.url);
        f.open(e.method.toUpperCase(), uy(d, e.params, e.paramsSerializer), !0),
          (f.timeout = e.timeout);
        function m() {
          if (!f) return;
          const _ = nr.from(
              "getAllResponseHeaders" in f && f.getAllResponseHeaders()
            ),
            y = {
              data:
                !i || i === "text" || i === "json"
                  ? f.responseText
                  : f.response,
              status: f.status,
              statusText: f.statusText,
              headers: _,
              config: e,
              request: f,
            };
          S2(
            function (v) {
              n(v), c();
            },
            function (v) {
              r(v), c();
            },
            y
          ),
            (f = null);
        }
        if (
          ("onloadend" in f
            ? (f.onloadend = m)
            : (f.onreadystatechange = function () {
                !f ||
                  f.readyState !== 4 ||
                  (f.status === 0 &&
                    !(f.responseURL && f.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(m);
              }),
          (f.onabort = function () {
            f &&
              (r(new ke("Request aborted", ke.ECONNABORTED, e, f)), (f = null));
          }),
          (f.onerror = function () {
            r(new ke("Network Error", ke.ERR_NETWORK, e, f)), (f = null);
          }),
          (f.ontimeout = function () {
            let T = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const y = e.transitional || fy;
            e.timeoutErrorMessage && (T = e.timeoutErrorMessage),
              r(
                new ke(
                  T,
                  y.clarifyTimeoutError ? ke.ETIMEDOUT : ke.ECONNABORTED,
                  e,
                  f
                )
              ),
              (f = null);
          }),
          Pn.hasStandardBrowserEnv &&
            (a && H.isFunction(a) && (a = a(e)), a || (a !== !1 && x2(d))))
        ) {
          const _ =
            e.xsrfHeaderName && e.xsrfCookieName && C2.read(e.xsrfCookieName);
          _ && s.set(e.xsrfHeaderName, _);
        }
        o === void 0 && s.setContentType(null),
          "setRequestHeader" in f &&
            H.forEach(s.toJSON(), function (T, y) {
              f.setRequestHeader(y, T);
            }),
          H.isUndefined(e.withCredentials) ||
            (f.withCredentials = !!e.withCredentials),
          i && i !== "json" && (f.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            f.addEventListener("progress", Im(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            f.upload &&
            f.upload.addEventListener("progress", Im(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (_) => {
              f &&
                (r(!_ || _.type ? new Ni(null, e, f) : _),
                f.abort(),
                (f = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const g = I2(d);
        if (g && Pn.protocols.indexOf(g) === -1) {
          r(new ke("Unsupported protocol " + g + ":", ke.ERR_BAD_REQUEST, e));
          return;
        }
        f.send(o || null);
      });
    },
  Fu = { http: n2, xhr: R2 };
H.forEach(Fu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Am = (e) => `- ${e}`,
  N2 = (e) => H.isFunction(e) || e === null || e === !1,
  gy = {
    getAdapter: (e) => {
      e = H.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let i;
        if (
          ((r = n),
          !N2(n) && ((r = Fu[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new ke(`Unknown adapter '${i}'`);
        if (r) break;
        o[i || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(o).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? s.length > 1
            ? `since :
` +
              s.map(Am).join(`
`)
            : " " + Am(s[0])
          : "as no adapter specified";
        throw new ke(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Fu,
  };
function Bc(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ni(null, e);
}
function Pm(e) {
  return (
    Bc(e),
    (e.headers = nr.from(e.headers)),
    (e.data = zc.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    gy
      .getAdapter(e.adapter || wd.adapter)(e)
      .then(
        function (r) {
          return (
            Bc(e),
            (r.data = zc.call(e, e.transformResponse, r)),
            (r.headers = nr.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            my(r) ||
              (Bc(e),
              r &&
                r.response &&
                ((r.response.data = zc.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = nr.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Rm = (e) => (e instanceof nr ? e.toJSON() : e);
function ss(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, f) {
    return H.isPlainObject(c) && H.isPlainObject(u)
      ? H.merge.call({ caseless: f }, c, u)
      : H.isPlainObject(u)
      ? H.merge({}, u)
      : H.isArray(u)
      ? u.slice()
      : u;
  }
  function o(c, u, f) {
    if (H.isUndefined(u)) {
      if (!H.isUndefined(c)) return r(void 0, c, f);
    } else return r(c, u, f);
  }
  function s(c, u) {
    if (!H.isUndefined(u)) return r(void 0, u);
  }
  function i(c, u) {
    if (H.isUndefined(u)) {
      if (!H.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, u);
  }
  function a(c, u, f) {
    if (f in t) return r(c, u);
    if (f in e) return r(void 0, c);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (c, u) => o(Rm(c), Rm(u), !0),
  };
  return (
    H.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const f = l[u] || o,
        d = f(e[u], t[u], u);
      (H.isUndefined(d) && f !== a) || (n[u] = d);
    }),
    n
  );
}
const _y = "1.6.2",
  Td = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Td[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Nm = {};
Td.transitional = function (t, n, r) {
  function o(s, i) {
    return (
      "[Axios v" +
      _y +
      "] Transitional option '" +
      s +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (s, i, a) => {
    if (t === !1)
      throw new ke(
        o(i, " has been removed" + (n ? " in " + n : "")),
        ke.ERR_DEPRECATED
      );
    return (
      n &&
        !Nm[i] &&
        ((Nm[i] = !0),
        console.warn(
          o(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, i, a) : !0
    );
  };
};
function L2(e, t, n) {
  if (typeof e != "object")
    throw new ke("options must be an object", ke.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o],
      i = t[s];
    if (i) {
      const a = e[s],
        l = a === void 0 || i(a, s, e);
      if (l !== !0)
        throw new ke("option " + s + " must be " + l, ke.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ke("Unknown option " + s, ke.ERR_BAD_OPTION);
  }
}
const Hu = { assertOptions: L2, validators: Td },
  yr = Hu.validators;
class fl {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new km(), response: new km() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = ss(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 &&
      Hu.assertOptions(
        r,
        {
          silentJSONParsing: yr.transitional(yr.boolean),
          forcedJSONParsing: yr.transitional(yr.boolean),
          clarifyTimeoutError: yr.transitional(yr.boolean),
        },
        !1
      ),
      o != null &&
        (H.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Hu.assertOptions(
              o,
              { encode: yr.function, serialize: yr.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = s && H.merge(s.common, s[n.method]);
    s &&
      H.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete s[g];
        }
      ),
      (n.headers = nr.concat(i, s));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (_) {
      (typeof _.runWhen == "function" && _.runWhen(n) === !1) ||
        ((l = l && _.synchronous), a.unshift(_.fulfilled, _.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (_) {
      c.push(_.fulfilled, _.rejected);
    });
    let u,
      f = 0,
      d;
    if (!l) {
      const g = [Pm.bind(this), void 0];
      for (
        g.unshift.apply(g, a),
          g.push.apply(g, c),
          d = g.length,
          u = Promise.resolve(n);
        f < d;

      )
        u = u.then(g[f++], g[f++]);
      return u;
    }
    d = a.length;
    let m = n;
    for (f = 0; f < d; ) {
      const g = a[f++],
        _ = a[f++];
      try {
        m = g(m);
      } catch (T) {
        _.call(this, T);
        break;
      }
    }
    try {
      u = Pm.call(this, m);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, d = c.length; f < d; ) u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = ss(this.defaults, t);
    const n = hy(t.baseURL, t.url);
    return uy(n, t.params, t.paramsSerializer);
  }
}
H.forEach(["delete", "get", "head", "options"], function (t) {
  fl.prototype[t] = function (n, r) {
    return this.request(
      ss(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
H.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, i, a) {
      return this.request(
        ss(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: i,
        })
      );
    };
  }
  (fl.prototype[t] = n()), (fl.prototype[t + "Form"] = n(!0));
});
const $a = fl;
class Sd {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let s;
        const i = new Promise((a) => {
          r.subscribe(a), (s = a);
        }).then(o);
        return (
          (i.cancel = function () {
            r.unsubscribe(s);
          }),
          i
        );
      }),
      t(function (s, i, a) {
        r.reason || ((r.reason = new Ni(s, i, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Sd(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const $2 = Sd;
function D2(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function M2(e) {
  return H.isObject(e) && e.isAxiosError === !0;
}
const ju = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ju).forEach(([e, t]) => {
  ju[t] = e;
});
const F2 = ju;
function vy(e) {
  const t = new $a(e),
    n = Qv($a.prototype.request, t);
  return (
    H.extend(n, $a.prototype, t, { allOwnKeys: !0 }),
    H.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return vy(ss(e, o));
    }),
    n
  );
}
const ft = vy(wd);
ft.Axios = $a;
ft.CanceledError = Ni;
ft.CancelToken = $2;
ft.isCancel = my;
ft.VERSION = _y;
ft.toFormData = Gl;
ft.AxiosError = ke;
ft.Cancel = ft.CanceledError;
ft.all = function (t) {
  return Promise.all(t);
};
ft.spread = D2;
ft.isAxiosError = M2;
ft.mergeConfig = ss;
ft.AxiosHeaders = nr;
ft.formToJSON = (e) => py(H.isHTMLForm(e) ? new FormData(e) : e);
ft.getAdapter = gy.getAdapter;
ft.HttpStatusCode = F2;
ft.default = ft;
const H2 = ft,
  yy = (e) =>
    [
      "/login",
      "/",
      "/pricing",
      "/contact",
      "/register",
      "/emailSent",
      "/verifiedEmail",
      "/resetPassword",
      "/resetEmailSent",
      "/resetPasswordSuccessfully",
      "/changePassword",
    ].find((n) => e === n),
  j2 = (e) =>
    ["/login", "/register", "/emailSent", "/verifiedEmail"].find(
      (n) => e === n
    ),
  { VITE_API_URL: U2 } = {
    VITE_MINIO_SUPPORTED_EXTENSIONS: "application/pdf",
    VITE_API_URL: "/api/",
    BASE_URL: "/",
    MODE: "production",
    DEV: !0,
    PROD: !1,
    SSR: !1,
  },
  dl = H2.create({ baseURL: U2, withCredentials: !0 });
dl.interceptors.response.use(
  (e) => e,
  (e) => (
    e.response.status == 401 &&
      !yy(window.location.pathname) &&
      (window.location.pathname = "/login"),
    Promise.reject(e)
  )
);
const z2 = "modulepreload",
  B2 = function (e) {
    return "/" + e;
  },
  Lm = {},
  st = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const o = document.getElementsByTagName("link");
    return Promise.all(
      n.map((s) => {
        if (((s = B2(s)), s in Lm)) return;
        Lm[s] = !0;
        const i = s.endsWith(".css"),
          a = i ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let u = o.length - 1; u >= 0; u--) {
            const f = o[u];
            if (f.href === s && (!i || f.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${s}"]${a}`)) return;
        const c = document.createElement("link");
        if (
          ((c.rel = i ? "stylesheet" : z2),
          i || ((c.as = "script"), (c.crossOrigin = "")),
          (c.href = s),
          document.head.appendChild(c),
          i)
        )
          return new Promise((u, f) => {
            c.addEventListener("load", u),
              c.addEventListener("error", () =>
                f(new Error(`Unable to preload CSS for ${s}`))
              );
          });
      })
    )
      .then(() => t())
      .catch((s) => {
        const i = new Event("vite:preloadError", { cancelable: !0 });
        if (((i.payload = s), window.dispatchEvent(i), !i.defaultPrevented))
          throw s;
      });
  };
const Un = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  },
  V2 = { class: "bg-gray-900" },
  W2 = {
    class: "mx-auto max-w-7xl overflow-hidden px-6 pt-10 sm:pt-10 pb-7 lg:px-8",
  },
  G2 = {
    class:
      "-mb-6 columns-2 flex justify-center sm:space-x-12 fldex-col flex-row gap-x-5",
    "aria-label": "Footer",
  },
  Y2 = ["href"],
  K2 = ["href"],
  q2 = { class: "sr-only" },
  X2 = N(
    "p",
    { class: "mt-6 text-center text-xs leading-5 text-gray-500" },
    " © 2023 FileQA, Inc. All rights reserved. ",
    -1
  ),
  J2 = {
    __name: "AppFooter",
    setup(e) {
      const n = {
        main: [
          { name: "Terms of use", path: "/terms_of_service.html" },
          { name: "Policy Notice", path: "/policy_notice.html" },
        ],
        social: [
          {
            name: "Linkedin",
            href: "https://www.linkedin.com/company/fileqa/",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
          },
        ],
      };
      return (r, o) => {
        const s = ln("component");
        return (
          se(),
          _e("footer", V2, [
            N("div", W2, [
              N("nav", G2, [
                (se(!0),
                _e(
                  Ae,
                  null,
                  To(
                    n.main,
                    (i) => (
                      se(),
                      _e("div", { key: i.name, class: "pb-2" }, [
                        we(` <RouterLink
            @click="scrollToTop(item.path)"
            :key="item.name"
            :to="item.path"
            class="text-sm font-semibold leading-6 text-white"
          >
            {{ item.name }}
          </RouterLink> `),
                        (se(),
                        _e(
                          "a",
                          {
                            key: i.name,
                            href: i.path,
                            class: "text-sm font-semibold leading-6 text-white",
                            target: "_blank",
                          },
                          Ot(i.name),
                          9,
                          Y2
                        )),
                      ])
                    )
                  ),
                  128
                )),
                (se(!0),
                _e(
                  Ae,
                  null,
                  To(
                    n.social,
                    (i) => (
                      se(),
                      _e(
                        "a",
                        {
                          key: i.name,
                          target: "_blank",
                          href: i.href,
                          class: "text-gray-400 hover:text-gray-500",
                        },
                        [
                          N("span", q2, Ot(i.name), 1),
                          ae(
                            s,
                            {
                              innerHTML: i.icon,
                              class: "h-6 w-6",
                              "aria-hidden": "true",
                            },
                            null,
                            8,
                            ["innerHTML"]
                          ),
                        ],
                        8,
                        K2
                      )
                    )
                  ),
                  128
                )),
              ]),
              we(` <div class="mt-8 flex justify-center space-x-10">
        <a
          v-for="item in navigation.social"
          :key="item.name"
          target="_blank"
          :href="item.href"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component v-html="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div> `),
              X2,
            ]),
          ])
        );
      };
    },
  },
  Q2 = Un(J2, [["__file", "/usr/src/app/src/components/views/AppFooter.vue"]]),
  Z2 = {
    class:
      "relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20 h-screen",
  },
  eC = N(
    "img",
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply",
      alt: "",
      class: "absolute inset-0 -z-10 h-full w-full object-cover",
    },
    null,
    -1
  ),
  tC = N(
    "div",
    {
      class:
        "absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",
      "aria-hidden": "true",
    },
    [
      N("div", {
        class:
          "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",
        style: {
          "clip-path": `polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          )`,
        },
      }),
    ],
    -1
  ),
  nC = { class: "mx-auto max-w-7xl px-6 lg:px-8" },
  rC = { class: "mx-auto max-w-2xl py-32 sm:py-48 lg:py-56" },
  oC = N(
    "span",
    { class: "absolute inset-0", "aria-hidden": "true" },
    null,
    -1
  ),
  sC = N("span", { "aria-hidden": "true" }, "→", -1),
  iC = { class: "text-center" },
  aC = N(
    "h1",
    { class: "text-4xl font-bold tracking-tight text-white sm:text-6xl" },
    " Talk to Your Files with Our Chatbot ",
    -1
  ),
  lC = N(
    "p",
    { class: "mt-6 text-lg leading-8 text-gray-300" },
    " Interact with your files like never before. Get instant answers to your questions and valuable insights from your data. Upload and talk to your files, Simple as That! ",
    -1
  ),
  cC = { class: "mt-10 flex items-center justify-center gap-x-6" },
  uC = N("span", { "aria-hidden": "true" }, "→", -1),
  fC = N(
    "div",
    {
      class:
        "absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]",
      "aria-hidden": "true",
    },
    [
      N("div", {
        class:
          "relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",
        style: {
          "clip-path": `polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          )`,
        },
      }),
    ],
    -1
  ),
  dC = {
    __name: "heroSection",
    setup(e) {
      function t() {
        const r =
          document.getElementById("feature").getBoundingClientRect().top +
          window.pageYOffset -
          100;
        window.scrollTo({ top: r, behavior: "smooth" });
      }
      return (n, r) => {
        const o = ln("router-link");
        return (
          se(),
          _e(
            Ae,
            null,
            [
              we(" Hero section "),
              N("div", Z2, [
                eC,
                tC,
                N("div", nC, [
                  N("div", rC, [
                    N(
                      "div",
                      { class: "hidden sm:mb-8 sm:flex sm:justify-center" },
                      [
                        N(
                          "div",
                          {
                            class:
                              "relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20",
                          },
                          [
                            nt(" Get to know us!. "),
                            N(
                              "span",
                              { class: "font-semibold text-white", onClick: t },
                              [oC, nt("Read more "), sC]
                            ),
                          ]
                        ),
                      ]
                    ),
                    N("div", iC, [
                      aC,
                      lC,
                      N("div", cC, [
                        ae(
                          o,
                          {
                            class:
                              "rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400",
                            to: "/myspace",
                          },
                          { default: be(() => [nt("Get started")]), _: 1 }
                        ),
                        N(
                          "button",
                          {
                            onClick: t,
                            class: "text-sm font-semibold leading-6 text-white",
                          },
                          [nt(" Live demo "), uC]
                        ),
                      ]),
                    ]),
                  ]),
                  we(" Logo cloud "),
                  we(` <div
        class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
      >
        <img
          class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
          alt="Transistor"
          width="158"
          height="48"
        />
        <img
          class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
          alt="Reform"
          width="158"
          height="48"
        />
        <img
          class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
          alt="Tuple"
          width="158"
          height="48"
        />
        <img
          class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
          alt="SavvyCal"
          width="158"
          height="48"
        />
        <img
          class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
          alt="Statamic"
          width="158"
          height="48"
        />
      </div> `),
                ]),
                fC,
              ]),
            ],
            2112
          )
        );
      };
    },
  },
  pC = Un(dC, [
    ["__file", "/usr/src/app/src/components/views/heroSection.vue"],
  ]),
  mC = {},
  hC = N(
    "svg",
    {
      width: "100px",
      height: "50px",
      viewBox: "0 0 803 184",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      N("g", { "clip-path": "url(#clip0_1_2)" }, [
        N("path", {
          d: "M795.34 181.88H745.7C745.07 181.88 744.45 181.72 743.91 181.41L731.42 174.32C730.87 174.01 730.26 173.85 729.63 173.85H668.53C667.9 173.85 667.28 174.01 666.74 174.32L654.25 181.41C653.7 181.72 653.09 181.88 652.46 181.88H602.82C599.11 181.88 597.79 176.96 601.01 175.11L634.93 155.59C635.48 155.27 636.1 155.11 636.74 155.11H761.44C762.08 155.11 762.7 155.28 763.25 155.59L797.17 175.11C800.39 176.96 799.07 181.88 795.36 181.88H795.34Z",
          fill: "#8800FF",
        }),
        N("path", {
          d: "M796.79 165.65L763.9 146.71C763.35 146.4 762.9 145.94 762.58 145.4L756.38 134.82C756.06 134.28 755.89 133.66 755.88 133.04L755.69 118.68C755.69 118.05 755.51 117.44 755.19 116.9L724.31 64.17C723.99 63.63 723.54 63.18 723 62.86L710.57 55.67C710.03 55.36 709.57 54.91 709.26 54.36L703.86 45.15C703.53 44.59 703.36 43.96 703.36 43.32V4.45C703.36 0.739996 708.27 -0.580003 710.13 2.63L801.75 160.69C803.61 163.9 800.02 167.51 796.8 165.65H796.79Z",
          fill: "#8800FF",
        }),
        N("path", {
          d: "M601.36 165.65L634.25 146.71C634.8 146.4 635.25 145.94 635.57 145.4L641.77 134.82C642.09 134.28 642.26 133.66 642.27 133.04L642.46 118.68C642.46 118.05 642.64 117.44 642.96 116.9L673.84 64.17C674.16 63.63 674.61 63.18 675.15 62.86L687.58 55.67C688.12 55.36 688.58 54.91 688.89 54.36L694.29 45.15C694.62 44.59 694.79 43.96 694.79 43.32V4.45C694.79 0.739996 689.88 -0.580003 688.02 2.63L596.4 160.69C594.54 163.9 598.13 167.51 601.35 165.65H601.36Z",
          fill: "#8800FF",
        }),
        N("path", {
          d: "M0 2.5H102.81V26.08H24.83V77.99H94.33V101.45H24.83V181.43H0V2.5Z",
          fill: "white",
        }),
        N("path", {
          d: "M122.65 56.77H146.48V181.42H122.65V56.77Z",
          fill: "white",
        }),
        N("path", {
          d: "M203.88 2.5V181.42H180.05V2.5H203.88Z",
          fill: "white",
        }),
        N("path", {
          d: "M350.86 116.04C350.86 119.62 350.69 122.74 350.36 125.4H250.17C251.58 136.8 255.97 145.86 263.33 152.6C270.69 159.34 280.11 162.71 291.59 162.71C300.32 162.71 307.85 160.73 314.17 156.78C320.49 152.83 324.44 147.57 326.02 141H349.6C347.27 153.98 340.7 164.38 329.89 172.19C319.08 180.01 306.06 183.92 290.84 183.92C272.7 183.92 257.53 177.66 245.3 165.14C233.07 152.62 226.96 137.09 226.96 118.54C226.96 106.73 229.75 95.89 235.32 86.04C240.89 76.18 248.57 68.41 258.34 62.71C268.11 57.01 278.87 54.16 290.59 54.16C307.48 54.16 321.74 60.02 333.39 71.75C345.03 83.48 350.86 98.25 350.86 116.04ZM250.92 105.56H325.29C324.29 96.74 320.53 89.55 314 83.97C307.47 78.4 299.34 75.61 289.61 75.61C279.88 75.61 271.43 78.27 264.53 83.6C257.63 88.92 253.09 96.25 250.93 105.56H250.92Z",
          fill: "white",
        }),
        N("path", {
          d: "M553.37 181.42H524.8L513.82 168.44C498.76 178.76 481.63 183.91 462.41 183.91C449.76 183.91 437.85 181.54 426.66 176.8C415.47 172.06 405.88 165.59 397.9 157.4C389.91 149.21 383.59 139.39 378.93 127.95C374.27 116.51 371.94 104.35 371.94 91.45C371.94 74.48 375.87 59.01 383.73 45.03C391.59 31.05 402.45 20.06 416.3 12.03C430.15 4 445.52 -0.0100021 462.4 -0.0100021C474.96 -0.0100021 486.83 2.34 498.02 7.04C509.21 11.74 518.81 18.14 526.84 26.25C534.87 34.36 541.21 44.07 545.87 55.38C550.53 66.69 552.86 78.71 552.86 91.44C552.86 115.81 545.29 136.61 530.15 153.83L553.36 181.41L553.37 181.42ZM462.41 160.21C475.72 160.21 487.57 156.63 497.97 149.48L455.55 98.57H483.87L513.82 134.38C522.97 122.07 527.54 107.76 527.54 91.46C527.54 78.98 524.69 67.55 518.99 57.15C513.29 46.75 505.45 38.58 495.47 32.63C485.49 26.68 474.47 23.71 462.4 23.71C450.33 23.71 439.32 26.69 429.34 32.63C419.36 38.58 411.52 46.75 405.82 57.15C400.12 67.55 397.27 78.99 397.27 91.46C397.27 110.84 403.53 127.15 416.05 140.37C428.57 153.6 444.02 160.21 462.4 160.21H462.41Z",
          fill: "white",
        }),
        N("path", {
          d: "M146.48 2.63H122.65V26.46H146.48V2.63Z",
          fill: "white",
        }),
      ]),
      N("defs", null, [
        N("clipPath", { id: "clip0_1_2" }, [
          N("rect", { width: "802.25", height: "183.92", fill: "white" }),
        ]),
      ]),
    ],
    -1
  );
function gC(e, t) {
  const n = ln("router-link");
  return (
    se(),
    _e(
      Ae,
      null,
      [
        we(' <img src="@/assets/logo.png" alt="logo" /> '),
        ae(n, { to: "/" }, { default: be(() => [hC]), _: 1 }),
      ],
      2112
    )
  );
}
const _C = Un(mC, [
  ["render", gC],
  ["__file", "/usr/src/app/src/components/common/logoImg.vue"],
]);
function Qt(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((o) => `"${o}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Qt), r);
}
var Vr = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Vr || {}),
  $r = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))($r || {});
function St({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: r,
  ...o
}) {
  var s;
  let i = Ey(r, n),
    a = Object.assign(o, { props: i });
  if (e || (t & 2 && i.static)) return Vc(a);
  if (t & 1) {
    let l = (s = i.unmount) == null || s ? 0 : 1;
    return Qt(l, {
      0() {
        return null;
      },
      1() {
        return Vc({
          ...o,
          props: { ...i, hidden: !0, style: { display: "none" } },
        });
      },
    });
  }
  return Vc(a);
}
function Vc({ props: e, attrs: t, slots: n, slot: r, name: o }) {
  var s, i;
  let { as: a, ...l } = wy(e, ["unmount", "static"]),
    c = (s = n.default) == null ? void 0 : s.call(n, r),
    u = {};
  if (r) {
    let f = !1,
      d = [];
    for (let [m, g] of Object.entries(r))
      typeof g == "boolean" && (f = !0), g === !0 && d.push(m);
    f && (u["data-headlessui-state"] = d.join(" "));
  }
  if (a === "template") {
    if (
      ((c = by(c ?? [])),
      Object.keys(l).length > 0 || Object.keys(t).length > 0)
    ) {
      let [f, ...d] = c ?? [];
      if (!vC(f) || d.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${o} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(l)
              .concat(Object.keys(t))
              .map((_) => _.trim())
              .filter((_, T, y) => y.indexOf(_) === T)
              .sort((_, T) => _.localeCompare(T))
              .map((_) => `  - ${_}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((_) => `  - ${_}`).join(`
`),
          ].join(`
`)
        );
      let m = Ey((i = f.props) != null ? i : {}, l),
        g = yn(f, m);
      for (let _ in m)
        _.startsWith("on") && (g.props || (g.props = {}), (g.props[_] = m[_]));
      return g;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return at(a, Object.assign({}, l, u), { default: () => c });
}
function by(e) {
  return e.flatMap((t) => (t.type === Ae ? by(t.children) : [t]));
}
function Ey(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let o in r)
      o.startsWith("on") && typeof r[o] == "function"
        ? (n[o] != null || (n[o] = []), n[o].push(r[o]))
        : (t[o] = r[o]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0]))
    );
  for (let r in n)
    Object.assign(t, {
      [r](o, ...s) {
        let i = n[r];
        for (let a of i) {
          if (o instanceof Event && o.defaultPrevented) return;
          a(o, ...s);
        }
      },
    });
  return t;
}
function wy(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function vC(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function";
}
let yC = 0;
function bC() {
  return ++yC;
}
function sr() {
  return bC();
}
var Qe = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(Qe || {});
function EC(e) {
  throw new Error("Unexpected object: " + e);
}
var Xt = ((e) => (
  (e[(e.First = 0)] = "First"),
  (e[(e.Previous = 1)] = "Previous"),
  (e[(e.Next = 2)] = "Next"),
  (e[(e.Last = 3)] = "Last"),
  (e[(e.Specific = 4)] = "Specific"),
  (e[(e.Nothing = 5)] = "Nothing"),
  e
))(Xt || {});
function wC(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(),
    o = r ?? -1,
    s = (() => {
      switch (e.focus) {
        case 0:
          return n.findIndex((i) => !t.resolveDisabled(i));
        case 1: {
          let i = n
            .slice()
            .reverse()
            .findIndex((a, l, c) =>
              o !== -1 && c.length - l - 1 >= o ? !1 : !t.resolveDisabled(a)
            );
          return i === -1 ? i : n.length - 1 - i;
        }
        case 2:
          return n.findIndex((i, a) => (a <= o ? !1 : !t.resolveDisabled(i)));
        case 3: {
          let i = n
            .slice()
            .reverse()
            .findIndex((a) => !t.resolveDisabled(a));
          return i === -1 ? i : n.length - 1 - i;
        }
        case 4:
          return n.findIndex((i) => t.resolveId(i) === e.id);
        case 5:
          return null;
        default:
          EC(e);
      }
    })();
  return s === -1 ? r : s;
}
function ge(e) {
  var t;
  return e == null || e.value == null
    ? null
    : (t = e.value.$el) != null
    ? t
    : e.value;
}
let Ty = Symbol("Context");
var ot = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(ot || {});
function TC() {
  return Li() !== null;
}
function Li() {
  return Me(Ty, null);
}
function Cd(e) {
  bt(Ty, e);
}
function $m(e, t) {
  if (e) return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function Sy(e, t) {
  let n = re($m(e.value.type, e.value.as));
  return (
    it(() => {
      n.value = $m(e.value.type, e.value.as);
    }),
    Tt(() => {
      var r;
      n.value ||
        (ge(t) &&
          ge(t) instanceof HTMLButtonElement &&
          !((r = ge(t)) != null && r.hasAttribute("type")) &&
          (n.value = "button"));
    }),
    n
  );
}
var SC = Object.defineProperty,
  CC = (e, t, n) =>
    t in e
      ? SC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Dm = (e, t, n) => (CC(e, typeof t != "symbol" ? t + "" : t, n), n);
class OC {
  constructor() {
    Dm(this, "current", this.detect()), Dm(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && ((this.currentId = 0), (this.current = t));
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let $i = new OC();
function Qr(e) {
  if ($i.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = ge(e);
    if (t) return t.ownerDocument;
  }
  return document;
}
function kC({ container: e, accept: t, walk: n, enabled: r }) {
  Tt(() => {
    let o = e.value;
    if (!o || (r !== void 0 && !r.value)) return;
    let s = Qr(e);
    if (!s) return;
    let i = Object.assign((l) => t(l), { acceptNode: t }),
      a = s.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, i, !1);
    for (; a.nextNode(); ) n(a.currentNode);
  });
}
let Uu = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var In = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(In || {}),
  Cy = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(Cy || {}),
  xC = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(xC || {});
function Oy(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Uu)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var Od = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Od || {});
function kd(e, t = 0) {
  var n;
  return e === ((n = Qr(e)) == null ? void 0 : n.body)
    ? !1
    : Qt(t, {
        0() {
          return e.matches(Uu);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(Uu)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
function ky(e) {
  let t = Qr(e);
  Gt(() => {
    t && !kd(t.activeElement, 0) && Fr(e);
  });
}
var IC = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(IC || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
function Fr(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let AC = ["textarea", "input"].join(",");
function PC(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, AC)) !=
    null
    ? n
    : !1;
}
function xy(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n),
      s = t(r);
    if (o === null || s === null) return 0;
    let i = o.compareDocumentPosition(s);
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function RC(e, t) {
  return Gs(Oy(), t, { relativeTo: e });
}
function Gs(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}
) {
  var s;
  let i =
      (s = Array.isArray(e)
        ? e.length > 0
          ? e[0].ownerDocument
          : document
        : e == null
        ? void 0
        : e.ownerDocument) != null
        ? s
        : document,
    a = Array.isArray(e) ? (n ? xy(e) : e) : Oy(e);
  o.length > 0 && a.length > 1 && (a = a.filter((g) => !o.includes(g))),
    (r = r ?? i.activeElement);
  let l = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    c = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, a.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, a.indexOf(r)) + 1;
      if (t & 8) return a.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    u = t & 32 ? { preventScroll: !0 } : {},
    f = 0,
    d = a.length,
    m;
  do {
    if (f >= d || f + d <= 0) return 0;
    let g = c + f;
    if (t & 16) g = (g + d) % d;
    else {
      if (g < 0) return 3;
      if (g >= d) return 1;
    }
    (m = a[g]), m == null || m.focus(u), (f += l);
  } while (m !== i.activeElement);
  return t & 6 && PC(m) && m.select(), 2;
}
function ra(e, t, n) {
  $i.isServer ||
    Tt((r) => {
      document.addEventListener(e, t, n),
        r(() => document.removeEventListener(e, t, n));
    });
}
function Iy(e, t, n) {
  $i.isServer ||
    Tt((r) => {
      window.addEventListener(e, t, n),
        r(() => window.removeEventListener(e, t, n));
    });
}
function Ay(e, t, n = ie(() => !0)) {
  function r(s, i) {
    if (!n.value || s.defaultPrevented) return;
    let a = i(s);
    if (a === null || !a.getRootNode().contains(a)) return;
    let l = (function c(u) {
      return typeof u == "function"
        ? c(u())
        : Array.isArray(u) || u instanceof Set
        ? u
        : [u];
    })(e);
    for (let c of l) {
      if (c === null) continue;
      let u = c instanceof HTMLElement ? c : ge(c);
      if (
        (u != null && u.contains(a)) ||
        (s.composed && s.composedPath().includes(u))
      )
        return;
    }
    return !kd(a, Od.Loose) && a.tabIndex !== -1 && s.preventDefault(), t(s, a);
  }
  let o = re(null);
  ra(
    "pointerdown",
    (s) => {
      var i, a;
      n.value &&
        (o.value =
          ((a = (i = s.composedPath) == null ? void 0 : i.call(s)) == null
            ? void 0
            : a[0]) || s.target);
    },
    !0
  ),
    ra(
      "mousedown",
      (s) => {
        var i, a;
        n.value &&
          (o.value =
            ((a = (i = s.composedPath) == null ? void 0 : i.call(s)) == null
              ? void 0
              : a[0]) || s.target);
      },
      !0
    ),
    ra(
      "click",
      (s) => {
        o.value && (r(s, () => o.value), (o.value = null));
      },
      !0
    ),
    ra(
      "touchend",
      (s) => r(s, () => (s.target instanceof HTMLElement ? s.target : null)),
      !0
    ),
    Iy(
      "blur",
      (s) =>
        r(s, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
var pl = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(pl || {});
let zu = Re({
  name: "Hidden",
  props: {
    as: { type: [Object, String], default: "div" },
    features: { type: Number, default: 1 },
  },
  setup(e, { slots: t, attrs: n }) {
    return () => {
      let { features: r, ...o } = e,
        s = {
          "aria-hidden": (r & 2) === 2 ? !0 : void 0,
          style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...((r & 4) === 4 && (r & 2) !== 2 && { display: "none" }),
          },
        };
      return St({
        ourProps: s,
        theirProps: o,
        slot: {},
        attrs: n,
        slots: t,
        name: "Hidden",
      });
    };
  },
});
function Mm(e) {
  return [e.screenX, e.screenY];
}
function NC() {
  let e = re([-1, -1]);
  return {
    wasMoved(t) {
      let n = Mm(t);
      return e.value[0] === n[0] && e.value[1] === n[1]
        ? !1
        : ((e.value = n), !0);
    },
    update(t) {
      e.value = Mm(t);
    },
  };
}
function LC() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function xd(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function Di() {
  let e = [],
    t = {
      addEventListener(n, r, o, s) {
        return (
          n.addEventListener(r, o, s),
          t.add(() => n.removeEventListener(r, o, s))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        t.requestAnimationFrame(() => {
          t.requestAnimationFrame(...n);
        });
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          xd(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, o) {
        let s = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: o }),
          this.add(() => {
            Object.assign(n.style, { [r]: s });
          })
        );
      },
      group(n) {
        let r = Di();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let o of e.splice(r, 1)) o();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
var Fs = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(Fs || {});
function $C() {
  let e = re(0);
  return (
    Iy("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
    }),
    e
  );
}
function Py(e, t, n, r) {
  $i.isServer ||
    Tt((o) => {
      (e = e ?? window),
        e.addEventListener(t, n, r),
        o(() => e.removeEventListener(t, n, r));
    });
}
function DC(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
function Ry(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.value) {
    let r = ge(n);
    r instanceof HTMLElement && t.add(r);
  }
  return t;
}
var Ny = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(Ny || {});
let xs = Object.assign(
    Re({
      name: "FocusTrap",
      props: {
        as: { type: [Object, String], default: "div" },
        initialFocus: { type: Object, default: null },
        features: { type: Number, default: 30 },
        containers: { type: [Object, Function], default: re(new Set()) },
      },
      inheritAttrs: !1,
      setup(e, { attrs: t, slots: n, expose: r }) {
        let o = re(null);
        r({ el: o, $el: o });
        let s = ie(() => Qr(o)),
          i = re(!1);
        it(() => (i.value = !0)),
          Pt(() => (i.value = !1)),
          FC(
            { ownerDocument: s },
            ie(() => i.value && !!(e.features & 16))
          );
        let a = HC(
          {
            ownerDocument: s,
            container: o,
            initialFocus: ie(() => e.initialFocus),
          },
          ie(() => i.value && !!(e.features & 2))
        );
        jC(
          {
            ownerDocument: s,
            container: o,
            containers: e.containers,
            previousActiveElement: a,
          },
          ie(() => i.value && !!(e.features & 8))
        );
        let l = $C();
        function c(m) {
          let g = ge(o);
          g &&
            ((_) => _())(() => {
              Qt(l.value, {
                [Fs.Forwards]: () => {
                  Gs(g, In.First, { skipElements: [m.relatedTarget] });
                },
                [Fs.Backwards]: () => {
                  Gs(g, In.Last, { skipElements: [m.relatedTarget] });
                },
              });
            });
        }
        let u = re(!1);
        function f(m) {
          m.key === "Tab" &&
            ((u.value = !0),
            requestAnimationFrame(() => {
              u.value = !1;
            }));
        }
        function d(m) {
          if (!i.value) return;
          let g = Ry(e.containers);
          ge(o) instanceof HTMLElement && g.add(ge(o));
          let _ = m.relatedTarget;
          _ instanceof HTMLElement &&
            _.dataset.headlessuiFocusGuard !== "true" &&
            (Ly(g, _) ||
              (u.value
                ? Gs(
                    ge(o),
                    Qt(l.value, {
                      [Fs.Forwards]: () => In.Next,
                      [Fs.Backwards]: () => In.Previous,
                    }) | In.WrapAround,
                    { relativeTo: m.target }
                  )
                : m.target instanceof HTMLElement && Fr(m.target)));
        }
        return () => {
          let m = {},
            g = { ref: o, onKeydown: f, onFocusout: d },
            { features: _, initialFocus: T, containers: y, ...E } = e;
          return at(Ae, [
            !!(_ & 4) &&
              at(zu, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: c,
                features: pl.Focusable,
              }),
            St({
              ourProps: g,
              theirProps: { ...t, ...E },
              slot: m,
              attrs: t,
              slots: n,
              name: "FocusTrap",
            }),
            !!(_ & 4) &&
              at(zu, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: c,
                features: pl.Focusable,
              }),
          ]);
        };
      },
    }),
    { features: Ny }
  ),
  ao = [];
DC(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      ao[0] !== t.target &&
      (ao.unshift(t.target),
      (ao = ao.filter((n) => n != null && n.isConnected)),
      ao.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function MC(e) {
  let t = re(ao.slice());
  return (
    xt(
      [e],
      ([n], [r]) => {
        r === !0 && n === !1
          ? xd(() => {
              t.value.splice(0);
            })
          : r === !1 && n === !0 && (t.value = ao.slice());
      },
      { flush: "post" }
    ),
    () => {
      var n;
      return (n = t.value.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    }
  );
}
function FC({ ownerDocument: e }, t) {
  let n = MC(t);
  it(() => {
    Tt(
      () => {
        var r, o;
        t.value ||
          (((r = e.value) == null ? void 0 : r.activeElement) ===
            ((o = e.value) == null ? void 0 : o.body) &&
            Fr(n()));
      },
      { flush: "post" }
    );
  }),
    Pt(() => {
      t.value && Fr(n());
    });
}
function HC({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let o = re(null),
    s = re(!1);
  return (
    it(() => (s.value = !0)),
    Pt(() => (s.value = !1)),
    it(() => {
      xt(
        [t, n, r],
        (i, a) => {
          if (i.every((c, u) => (a == null ? void 0 : a[u]) === c) || !r.value)
            return;
          let l = ge(t);
          l &&
            xd(() => {
              var c, u;
              if (!s.value) return;
              let f = ge(n),
                d = (c = e.value) == null ? void 0 : c.activeElement;
              if (f) {
                if (f === d) {
                  o.value = d;
                  return;
                }
              } else if (l.contains(d)) {
                o.value = d;
                return;
              }
              f
                ? Fr(f)
                : Gs(l, In.First | In.NoScroll) === Cy.Error &&
                  console.warn(
                    "There are no focusable elements inside the <FocusTrap />"
                  ),
                (o.value = (u = e.value) == null ? void 0 : u.activeElement);
            });
        },
        { immediate: !0, flush: "post" }
      );
    }),
    o
  );
}
function jC(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  o
) {
  var s;
  Py(
    (s = e.value) == null ? void 0 : s.defaultView,
    "focus",
    (i) => {
      if (!o.value) return;
      let a = Ry(n);
      ge(t) instanceof HTMLElement && a.add(ge(t));
      let l = r.value;
      if (!l) return;
      let c = i.target;
      c && c instanceof HTMLElement
        ? Ly(a, c)
          ? ((r.value = c), Fr(c))
          : (i.preventDefault(), i.stopPropagation(), Fr(l))
        : Fr(r.value);
    },
    !0
  );
}
function Ly(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let Wc = new Map(),
  Is = new Map();
function Fm(e, t = re(!0)) {
  Tt((n) => {
    var r;
    if (!t.value) return;
    let o = ge(e);
    if (!o) return;
    n(function () {
      var i;
      if (!o) return;
      let a = (i = Is.get(o)) != null ? i : 1;
      if ((a === 1 ? Is.delete(o) : Is.set(o, a - 1), a !== 1)) return;
      let l = Wc.get(o);
      l &&
        (l["aria-hidden"] === null
          ? o.removeAttribute("aria-hidden")
          : o.setAttribute("aria-hidden", l["aria-hidden"]),
        (o.inert = l.inert),
        Wc.delete(o));
    });
    let s = (r = Is.get(o)) != null ? r : 0;
    Is.set(o, s + 1),
      s === 0 &&
        (Wc.set(o, {
          "aria-hidden": o.getAttribute("aria-hidden"),
          inert: o.inert,
        }),
        o.setAttribute("aria-hidden", "true"),
        (o.inert = !0));
  });
}
let $y = Symbol("ForcePortalRootContext");
function UC() {
  return Me($y, !1);
}
let Hm = Re({
  name: "ForcePortalRoot",
  props: {
    as: { type: [Object, String], default: "template" },
    force: { type: Boolean, default: !1 },
  },
  setup(e, { slots: t, attrs: n }) {
    return (
      bt($y, e.force),
      () => {
        let { force: r, ...o } = e;
        return St({
          theirProps: o,
          ourProps: {},
          slot: {},
          slots: t,
          attrs: n,
          name: "ForcePortalRoot",
        });
      }
    );
  },
});
function zC(e) {
  let t = Qr(e);
  if (!t) {
    if (e === null) return null;
    throw new Error(
      `[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`
    );
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n) return n;
  let r = t.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(r);
}
let BC = Re({
    name: "Portal",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n }) {
      let r = re(null),
        o = ie(() => Qr(r)),
        s = UC(),
        i = Me(Dy, null),
        a = re(s === !0 || i == null ? zC(r.value) : i.resolveTarget());
      Tt(() => {
        s || (i != null && (a.value = i.resolveTarget()));
      });
      let l = Me(Bu, null);
      return (
        it(() => {
          let c = ge(r);
          c && l && Pt(l.register(c));
        }),
        Pt(() => {
          var c, u;
          let f =
            (c = o.value) == null
              ? void 0
              : c.getElementById("headlessui-portal-root");
          f &&
            a.value === f &&
            a.value.children.length <= 0 &&
            ((u = a.value.parentElement) == null || u.removeChild(a.value));
        }),
        () => {
          if (a.value === null) return null;
          let c = { ref: r, "data-headlessui-portal": "" };
          return at(
            Bw,
            { to: a.value },
            St({
              ourProps: c,
              theirProps: e,
              slot: {},
              attrs: n,
              slots: t,
              name: "Portal",
            })
          );
        }
      );
    },
  }),
  Bu = Symbol("PortalParentContext");
function VC() {
  let e = Me(Bu, null),
    t = re([]);
  function n(s) {
    return t.value.push(s), e && e.register(s), () => r(s);
  }
  function r(s) {
    let i = t.value.indexOf(s);
    i !== -1 && t.value.splice(i, 1), e && e.unregister(s);
  }
  let o = { register: n, unregister: r, portals: t };
  return [
    t,
    Re({
      name: "PortalWrapper",
      setup(s, { slots: i }) {
        return (
          bt(Bu, o),
          () => {
            var a;
            return (a = i.default) == null ? void 0 : a.call(i);
          }
        );
      },
    }),
  ];
}
let Dy = Symbol("PortalGroupContext"),
  WC = Re({
    name: "PortalGroup",
    props: {
      as: { type: [Object, String], default: "template" },
      target: { type: Object, default: null },
    },
    setup(e, { attrs: t, slots: n }) {
      let r = gs({
        resolveTarget() {
          return e.target;
        },
      });
      return (
        bt(Dy, r),
        () => {
          let { target: o, ...s } = e;
          return St({
            theirProps: s,
            ourProps: {},
            slot: {},
            attrs: t,
            slots: n,
            name: "PortalGroup",
          });
        }
      );
    },
  }),
  My = Symbol("StackContext");
var Vu = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  Vu || {}
);
function GC() {
  return Me(My, () => {});
}
function YC({ type: e, enabled: t, element: n, onUpdate: r }) {
  let o = GC();
  function s(...i) {
    r == null || r(...i), o(...i);
  }
  it(() => {
    xt(
      t,
      (i, a) => {
        i ? s(0, e, n) : a === !0 && s(1, e, n);
      },
      { immediate: !0, flush: "sync" }
    );
  }),
    Pt(() => {
      t.value && s(1, e, n);
    }),
    bt(My, s);
}
let KC = Symbol("DescriptionContext");
function qC({ slot: e = re({}), name: t = "Description", props: n = {} } = {}) {
  let r = re([]);
  function o(s) {
    return (
      r.value.push(s),
      () => {
        let i = r.value.indexOf(s);
        i !== -1 && r.value.splice(i, 1);
      }
    );
  }
  return (
    bt(KC, { register: o, slot: e, name: t, props: n }),
    ie(() => (r.value.length > 0 ? r.value.join(" ") : void 0))
  );
}
function XC(e) {
  let t = M_(e.getSnapshot());
  return (
    Pt(
      e.subscribe(() => {
        t.value = e.getSnapshot();
      })
    ),
    t
  );
}
function JC(e, t) {
  let n = e(),
    r = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(o) {
      return r.add(o), () => r.delete(o);
    },
    dispatch(o, ...s) {
      let i = t[o].call(n, ...s);
      i && ((n = i), r.forEach((a) => a()));
    },
  };
}
function QC() {
  let e;
  return {
    before({ doc: t }) {
      var n;
      let r = t.documentElement;
      e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
    },
    after({ doc: t, d: n }) {
      let r = t.documentElement,
        o = r.clientWidth - r.offsetWidth,
        s = e - o;
      n.style(r, "paddingRight", `${s}px`);
    },
  };
}
function ZC() {
  if (!LC()) return {};
  let e;
  return {
    before() {
      e = window.pageYOffset;
    },
    after({ doc: t, d: n, meta: r }) {
      function o(i) {
        return r.containers.flatMap((a) => a()).some((a) => a.contains(i));
      }
      if (
        window.getComputedStyle(t.documentElement).scrollBehavior !== "auto"
      ) {
        let i = Di();
        i.style(t.documentElement, "scroll-behavior", "auto"),
          n.add(() => n.microTask(() => i.dispose()));
      }
      n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
      let s = null;
      n.addEventListener(
        t,
        "click",
        (i) => {
          if (i.target instanceof HTMLElement)
            try {
              let a = i.target.closest("a");
              if (!a) return;
              let { hash: l } = new URL(a.href),
                c = t.querySelector(l);
              c && !o(c) && (s = c);
            } catch {}
        },
        !0
      ),
        n.addEventListener(
          t,
          "touchmove",
          (i) => {
            i.target instanceof HTMLElement &&
              !o(i.target) &&
              i.preventDefault();
          },
          { passive: !1 }
        ),
        n.add(() => {
          window.scrollTo(0, window.pageYOffset + e),
            s &&
              s.isConnected &&
              (s.scrollIntoView({ block: "nearest" }), (s = null));
        });
    },
  };
}
function eO() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function tO(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let co = JC(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: Di(), meta: new Set() };
    return r.count++, r.meta.add(t), this.set(e, r), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: tO(n) },
      o = [ZC(), QC(), eO()];
    o.forEach(({ before: s }) => (s == null ? void 0 : s(r))),
      o.forEach(({ after: s }) => (s == null ? void 0 : s(r)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
co.subscribe(() => {
  let e = co.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      o = n.count !== 0;
    ((o && !r) || (!o && r)) &&
      co.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && co.dispatch("TEARDOWN", n);
  }
});
function nO(e, t, n) {
  let r = XC(co),
    o = ie(() => {
      let s = e.value ? r.value.get(e.value) : void 0;
      return s ? s.count > 0 : !1;
    });
  return (
    xt(
      [e, t],
      ([s, i], [a], l) => {
        if (!s || !i) return;
        co.dispatch("PUSH", s, n);
        let c = !1;
        l(() => {
          c || (co.dispatch("POP", a ?? s, n), (c = !0));
        });
      },
      { immediate: !0 }
    ),
    o
  );
}
function rO({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  let r = re(null),
    o = Qr(r);
  function s() {
    var i;
    let a = [];
    for (let l of e)
      l !== null &&
        (l instanceof HTMLElement
          ? a.push(l)
          : "value" in l && l.value instanceof HTMLElement && a.push(l.value));
    if (t != null && t.value) for (let l of t.value) a.push(l);
    for (let l of (i =
      o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null
      ? i
      : [])
      l !== document.body &&
        l !== document.head &&
        l instanceof HTMLElement &&
        l.id !== "headlessui-portal-root" &&
        (l.contains(ge(r)) || a.some((c) => l.contains(c)) || a.push(l));
    return a;
  }
  return {
    resolveContainers: s,
    contains(i) {
      return s().some((a) => a.contains(i));
    },
    mainTreeNodeRef: r,
    MainTreeNode() {
      return n != null ? null : at(zu, { features: pl.Hidden, ref: r });
    },
  };
}
var oO = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(oO || {});
let Wu = Symbol("DialogContext");
function Id(e) {
  let t = Me(Wu, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Id), n);
  }
  return t;
}
let oa = "DC8F892D-2EBD-447C-A4C8-A03058436FF4",
  Ad = Re({
    name: "Dialog",
    inheritAttrs: !1,
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      open: { type: [Boolean, String], default: oa },
      initialFocus: { type: Object, default: null },
      id: { type: String, default: () => `headlessui-dialog-${sr()}` },
    },
    emits: { close: (e) => !0 },
    setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
      var s;
      let i = re(!1);
      it(() => {
        i.value = !0;
      });
      let a = re(0),
        l = Li(),
        c = ie(() =>
          e.open === oa && l !== null ? (l.value & ot.Open) === ot.Open : e.open
        ),
        u = re(null),
        f = ie(() => Qr(u));
      if ((o({ el: u, $el: u }), !(e.open !== oa || l !== null)))
        throw new Error(
          "You forgot to provide an `open` prop to the `Dialog`."
        );
      if (typeof c.value != "boolean")
        throw new Error(
          `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${
            c.value === oa ? void 0 : e.open
          }`
        );
      let d = ie(() => (i.value && c.value ? 0 : 1)),
        m = ie(() => d.value === 0),
        g = ie(() => a.value > 1),
        _ = Me(Wu, null) !== null,
        [T, y] = VC(),
        {
          resolveContainers: E,
          mainTreeNodeRef: v,
          MainTreeNode: w,
        } = rO({
          portals: T,
          defaultContainers: [
            ie(() => {
              var W;
              return (W = Y.panelRef.value) != null ? W : u.value;
            }),
          ],
        }),
        C = ie(() => (g.value ? "parent" : "leaf")),
        I = ie(() => (l !== null ? (l.value & ot.Closing) === ot.Closing : !1)),
        S = ie(() => (_ || I.value ? !1 : m.value)),
        M = ie(() => {
          var W, U, Ie;
          return (Ie = Array.from(
            (U =
              (W = f.value) == null
                ? void 0
                : W.querySelectorAll("body > *")) != null
              ? U
              : []
          ).find((Ne) =>
            Ne.id === "headlessui-portal-root"
              ? !1
              : Ne.contains(ge(v)) && Ne instanceof HTMLElement
          )) != null
            ? Ie
            : null;
        });
      Fm(M, S);
      let F = ie(() => (g.value ? !0 : m.value)),
        A = ie(() => {
          var W, U, Ie;
          return (Ie = Array.from(
            (U =
              (W = f.value) == null
                ? void 0
                : W.querySelectorAll("[data-headlessui-portal]")) != null
              ? U
              : []
          ).find((Ne) => Ne.contains(ge(v)) && Ne instanceof HTMLElement)) !=
            null
            ? Ie
            : null;
        });
      Fm(A, F),
        YC({
          type: "Dialog",
          enabled: ie(() => d.value === 0),
          element: u,
          onUpdate: (W, U) => {
            if (U === "Dialog")
              return Qt(W, {
                [Vu.Add]: () => (a.value += 1),
                [Vu.Remove]: () => (a.value -= 1),
              });
          },
        });
      let D = qC({
          name: "DialogDescription",
          slot: ie(() => ({ open: c.value })),
        }),
        L = re(null),
        Y = {
          titleId: L,
          panelRef: re(null),
          dialogState: d,
          setTitleId(W) {
            L.value !== W && (L.value = W);
          },
          close() {
            t("close", !1);
          },
        };
      bt(Wu, Y);
      let ve = ie(() => !(!m.value || g.value));
      Ay(
        E,
        (W, U) => {
          Y.close(), Gt(() => (U == null ? void 0 : U.focus()));
        },
        ve
      );
      let ye = ie(() => !(g.value || d.value !== 0));
      Py((s = f.value) == null ? void 0 : s.defaultView, "keydown", (W) => {
        ye.value &&
          (W.defaultPrevented ||
            (W.key === Qe.Escape &&
              (W.preventDefault(), W.stopPropagation(), Y.close())));
      });
      let Z = ie(() => !(I.value || d.value !== 0 || _));
      return (
        nO(f, Z, (W) => {
          var U;
          return { containers: [...((U = W.containers) != null ? U : []), E] };
        }),
        Tt((W) => {
          if (d.value !== 0) return;
          let U = ge(u);
          if (!U) return;
          let Ie = new ResizeObserver((Ne) => {
            for (let ht of Ne) {
              let Ke = ht.target.getBoundingClientRect();
              Ke.x === 0 &&
                Ke.y === 0 &&
                Ke.width === 0 &&
                Ke.height === 0 &&
                Y.close();
            }
          });
          Ie.observe(U), W(() => Ie.disconnect());
        }),
        () => {
          let { id: W, open: U, initialFocus: Ie, ...Ne } = e,
            ht = {
              ...n,
              ref: u,
              id: W,
              role: "dialog",
              "aria-modal": d.value === 0 ? !0 : void 0,
              "aria-labelledby": L.value,
              "aria-describedby": D.value,
            },
            Ke = { open: d.value === 0 };
          return at(Hm, { force: !0 }, () => [
            at(BC, () =>
              at(WC, { target: u.value }, () =>
                at(Hm, { force: !1 }, () =>
                  at(
                    xs,
                    {
                      initialFocus: Ie,
                      containers: E,
                      features: m.value
                        ? Qt(C.value, {
                            parent: xs.features.RestoreFocus,
                            leaf: xs.features.All & ~xs.features.FocusLock,
                          })
                        : xs.features.None,
                    },
                    () =>
                      at(y, {}, () =>
                        St({
                          ourProps: ht,
                          theirProps: { ...Ne, ...n },
                          slot: Ke,
                          attrs: n,
                          slots: r,
                          visible: d.value === 0,
                          features: Vr.RenderStrategy | Vr.Static,
                          name: "Dialog",
                        })
                      )
                  )
                )
              )
            ),
            at(w),
          ]);
        }
      );
    },
  }),
  Pd = Re({
    name: "DialogPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      id: { type: String, default: () => `headlessui-dialog-panel-${sr()}` },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let o = Id("DialogPanel");
      r({ el: o.panelRef, $el: o.panelRef });
      function s(i) {
        i.stopPropagation();
      }
      return () => {
        let { id: i, ...a } = e,
          l = { id: i, ref: o.panelRef, onClick: s };
        return St({
          ourProps: l,
          theirProps: a,
          slot: { open: o.dialogState.value === 0 },
          attrs: t,
          slots: n,
          name: "DialogPanel",
        });
      };
    },
  }),
  Rd = Re({
    name: "DialogTitle",
    props: {
      as: { type: [Object, String], default: "h2" },
      id: { type: String, default: () => `headlessui-dialog-title-${sr()}` },
    },
    setup(e, { attrs: t, slots: n }) {
      let r = Id("DialogTitle");
      return (
        it(() => {
          r.setTitleId(e.id), Pt(() => r.setTitleId(null));
        }),
        () => {
          let { id: o, ...s } = e;
          return St({
            ourProps: { id: o },
            theirProps: s,
            slot: { open: r.dialogState.value === 0 },
            attrs: t,
            slots: n,
            name: "DialogTitle",
          });
        }
      );
    },
  });
var sO = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(sO || {});
let Fy = Symbol("DisclosureContext");
function Nd(e) {
  let t = Me(Fy, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Nd), n);
  }
  return t;
}
let Hy = Symbol("DisclosurePanelContext");
function iO() {
  return Me(Hy, null);
}
let aO = Re({
    name: "Disclosure",
    props: {
      as: { type: [Object, String], default: "template" },
      defaultOpen: { type: [Boolean], default: !1 },
    },
    setup(e, { slots: t, attrs: n }) {
      let r = re(e.defaultOpen ? 0 : 1),
        o = re(null),
        s = re(null),
        i = {
          buttonId: re(`headlessui-disclosure-button-${sr()}`),
          panelId: re(`headlessui-disclosure-panel-${sr()}`),
          disclosureState: r,
          panel: o,
          button: s,
          toggleDisclosure() {
            r.value = Qt(r.value, { 0: 1, 1: 0 });
          },
          closeDisclosure() {
            r.value !== 1 && (r.value = 1);
          },
          close(a) {
            i.closeDisclosure();
            let l = (() =>
              a
                ? a instanceof HTMLElement
                  ? a
                  : a.value instanceof HTMLElement
                  ? ge(a)
                  : ge(i.button)
                : ge(i.button))();
            l == null || l.focus();
          },
        };
      return (
        bt(Fy, i),
        Cd(ie(() => Qt(r.value, { 0: ot.Open, 1: ot.Closed }))),
        () => {
          let { defaultOpen: a, ...l } = e,
            c = { open: r.value === 0, close: i.close };
          return St({
            theirProps: l,
            ourProps: {},
            slot: c,
            slots: t,
            attrs: n,
            name: "Disclosure",
          });
        }
      );
    },
  }),
  sa = Re({
    name: "DisclosureButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: null },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let o = Nd("DisclosureButton"),
        s = iO(),
        i = ie(() => (s === null ? !1 : s.value === o.panelId.value));
      it(() => {
        i.value || (e.id !== null && (o.buttonId.value = e.id));
      }),
        Pt(() => {
          i.value || (o.buttonId.value = null);
        });
      let a = re(null);
      r({ el: a, $el: a }),
        i.value ||
          Tt(() => {
            o.button.value = a.value;
          });
      let l = Sy(
        ie(() => ({ as: e.as, type: t.type })),
        a
      );
      function c() {
        var d;
        e.disabled ||
          (i.value
            ? (o.toggleDisclosure(), (d = ge(o.button)) == null || d.focus())
            : o.toggleDisclosure());
      }
      function u(d) {
        var m;
        if (!e.disabled)
          if (i.value)
            switch (d.key) {
              case Qe.Space:
              case Qe.Enter:
                d.preventDefault(),
                  d.stopPropagation(),
                  o.toggleDisclosure(),
                  (m = ge(o.button)) == null || m.focus();
                break;
            }
          else
            switch (d.key) {
              case Qe.Space:
              case Qe.Enter:
                d.preventDefault(), d.stopPropagation(), o.toggleDisclosure();
                break;
            }
      }
      function f(d) {
        switch (d.key) {
          case Qe.Space:
            d.preventDefault();
            break;
        }
      }
      return () => {
        var d;
        let m = { open: o.disclosureState.value === 0 },
          { id: g, ..._ } = e,
          T = i.value
            ? { ref: a, type: l.value, onClick: c, onKeydown: u }
            : {
                id: (d = o.buttonId.value) != null ? d : g,
                ref: a,
                type: l.value,
                "aria-expanded": o.disclosureState.value === 0,
                "aria-controls":
                  o.disclosureState.value === 0 || ge(o.panel)
                    ? o.panelId.value
                    : void 0,
                disabled: e.disabled ? !0 : void 0,
                onClick: c,
                onKeydown: u,
                onKeyup: f,
              };
        return St({
          ourProps: T,
          theirProps: _,
          slot: m,
          attrs: t,
          slots: n,
          name: "DisclosureButton",
        });
      };
    },
  }),
  lO = Re({
    name: "DisclosurePanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      id: { type: String, default: null },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let o = Nd("DisclosurePanel");
      it(() => {
        e.id !== null && (o.panelId.value = e.id);
      }),
        Pt(() => {
          o.panelId.value = null;
        }),
        r({ el: o.panel, $el: o.panel }),
        bt(Hy, o.panelId);
      let s = Li(),
        i = ie(() =>
          s !== null
            ? (s.value & ot.Open) === ot.Open
            : o.disclosureState.value === 0
        );
      return () => {
        var a;
        let l = { open: o.disclosureState.value === 0, close: o.close },
          { id: c, ...u } = e,
          f = { id: (a = o.panelId.value) != null ? a : c, ref: o.panel };
        return St({
          ourProps: f,
          theirProps: u,
          slot: l,
          attrs: t,
          slots: n,
          features: Vr.RenderStrategy | Vr.Static,
          visible: i.value,
          name: "DisclosurePanel",
        });
      };
    },
  }),
  jm =
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Um(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "",
    o = e.cloneNode(!0);
  if (!(o instanceof HTMLElement)) return r;
  let s = !1;
  for (let a of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    a.remove(), (s = !0);
  let i = s ? ((n = o.innerText) != null ? n : "") : r;
  return jm.test(i) && (i = i.replace(jm, "")), i;
}
function cO(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n
      .split(" ")
      .map((o) => {
        let s = document.getElementById(o);
        if (s) {
          let i = s.getAttribute("aria-label");
          return typeof i == "string" ? i.trim() : Um(s).trim();
        }
        return null;
      })
      .filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return Um(e).trim();
}
function uO(e) {
  let t = re(""),
    n = re("");
  return () => {
    let r = ge(e);
    if (!r) return "";
    let o = r.innerText;
    if (t.value === o) return n.value;
    let s = cO(r).trim().toLowerCase();
    return (t.value = o), (n.value = s), s;
  };
}
var fO = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(fO || {}),
  dO = ((e) => (
    (e[(e.Pointer = 0)] = "Pointer"), (e[(e.Other = 1)] = "Other"), e
  ))(dO || {});
function pO(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let jy = Symbol("MenuContext");
function Kl(e) {
  let t = Me(jy, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Kl), n);
  }
  return t;
}
let mO = Re({
    name: "Menu",
    props: { as: { type: [Object, String], default: "template" } },
    setup(e, { slots: t, attrs: n }) {
      let r = re(1),
        o = re(null),
        s = re(null),
        i = re([]),
        a = re(""),
        l = re(null),
        c = re(1);
      function u(d = (m) => m) {
        let m = l.value !== null ? i.value[l.value] : null,
          g = xy(d(i.value.slice()), (T) => ge(T.dataRef.domRef)),
          _ = m ? g.indexOf(m) : null;
        return _ === -1 && (_ = null), { items: g, activeItemIndex: _ };
      }
      let f = {
        menuState: r,
        buttonRef: o,
        itemsRef: s,
        items: i,
        searchQuery: a,
        activeItemIndex: l,
        activationTrigger: c,
        closeMenu: () => {
          (r.value = 1), (l.value = null);
        },
        openMenu: () => (r.value = 0),
        goToItem(d, m, g) {
          let _ = u(),
            T = wC(
              d === Xt.Specific ? { focus: Xt.Specific, id: m } : { focus: d },
              {
                resolveItems: () => _.items,
                resolveActiveIndex: () => _.activeItemIndex,
                resolveId: (y) => y.id,
                resolveDisabled: (y) => y.dataRef.disabled,
              }
            );
          (a.value = ""),
            (l.value = T),
            (c.value = g ?? 1),
            (i.value = _.items);
        },
        search(d) {
          let m = a.value !== "" ? 0 : 1;
          a.value += d.toLowerCase();
          let g = (
              l.value !== null
                ? i.value
                    .slice(l.value + m)
                    .concat(i.value.slice(0, l.value + m))
                : i.value
            ).find(
              (T) =>
                T.dataRef.textValue.startsWith(a.value) && !T.dataRef.disabled
            ),
            _ = g ? i.value.indexOf(g) : -1;
          _ === -1 || _ === l.value || ((l.value = _), (c.value = 1));
        },
        clearSearch() {
          a.value = "";
        },
        registerItem(d, m) {
          let g = u((_) => [..._, { id: d, dataRef: m }]);
          (i.value = g.items), (l.value = g.activeItemIndex), (c.value = 1);
        },
        unregisterItem(d) {
          let m = u((g) => {
            let _ = g.findIndex((T) => T.id === d);
            return _ !== -1 && g.splice(_, 1), g;
          });
          (i.value = m.items), (l.value = m.activeItemIndex), (c.value = 1);
        },
      };
      return (
        Ay(
          [o, s],
          (d, m) => {
            var g;
            f.closeMenu(),
              kd(m, Od.Loose) ||
                (d.preventDefault(), (g = ge(o)) == null || g.focus());
          },
          ie(() => r.value === 0)
        ),
        bt(jy, f),
        Cd(ie(() => Qt(r.value, { 0: ot.Open, 1: ot.Closed }))),
        () => {
          let d = { open: r.value === 0, close: f.closeMenu };
          return St({
            ourProps: {},
            theirProps: e,
            slot: d,
            slots: t,
            attrs: n,
            name: "Menu",
          });
        }
      );
    },
  }),
  hO = Re({
    name: "MenuButton",
    props: {
      disabled: { type: Boolean, default: !1 },
      as: { type: [Object, String], default: "button" },
      id: { type: String, default: () => `headlessui-menu-button-${sr()}` },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let o = Kl("MenuButton");
      r({ el: o.buttonRef, $el: o.buttonRef });
      function s(c) {
        switch (c.key) {
          case Qe.Space:
          case Qe.Enter:
          case Qe.ArrowDown:
            c.preventDefault(),
              c.stopPropagation(),
              o.openMenu(),
              Gt(() => {
                var u;
                (u = ge(o.itemsRef)) == null || u.focus({ preventScroll: !0 }),
                  o.goToItem(Xt.First);
              });
            break;
          case Qe.ArrowUp:
            c.preventDefault(),
              c.stopPropagation(),
              o.openMenu(),
              Gt(() => {
                var u;
                (u = ge(o.itemsRef)) == null || u.focus({ preventScroll: !0 }),
                  o.goToItem(Xt.Last);
              });
            break;
        }
      }
      function i(c) {
        switch (c.key) {
          case Qe.Space:
            c.preventDefault();
            break;
        }
      }
      function a(c) {
        e.disabled ||
          (o.menuState.value === 0
            ? (o.closeMenu(),
              Gt(() => {
                var u;
                return (u = ge(o.buttonRef)) == null
                  ? void 0
                  : u.focus({ preventScroll: !0 });
              }))
            : (c.preventDefault(),
              o.openMenu(),
              pO(() => {
                var u;
                return (u = ge(o.itemsRef)) == null
                  ? void 0
                  : u.focus({ preventScroll: !0 });
              })));
      }
      let l = Sy(
        ie(() => ({ as: e.as, type: t.type })),
        o.buttonRef
      );
      return () => {
        var c;
        let u = { open: o.menuState.value === 0 },
          { id: f, ...d } = e,
          m = {
            ref: o.buttonRef,
            id: f,
            type: l.value,
            "aria-haspopup": "menu",
            "aria-controls": (c = ge(o.itemsRef)) == null ? void 0 : c.id,
            "aria-expanded": o.menuState.value === 0,
            onKeydown: s,
            onKeyup: i,
            onClick: a,
          };
        return St({
          ourProps: m,
          theirProps: d,
          slot: u,
          attrs: t,
          slots: n,
          name: "MenuButton",
        });
      };
    },
  }),
  gO = Re({
    name: "MenuItems",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      id: { type: String, default: () => `headlessui-menu-items-${sr()}` },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let o = Kl("MenuItems"),
        s = re(null);
      r({ el: o.itemsRef, $el: o.itemsRef }),
        kC({
          container: ie(() => ge(o.itemsRef)),
          enabled: ie(() => o.menuState.value === 0),
          accept(u) {
            return u.getAttribute("role") === "menuitem"
              ? NodeFilter.FILTER_REJECT
              : u.hasAttribute("role")
              ? NodeFilter.FILTER_SKIP
              : NodeFilter.FILTER_ACCEPT;
          },
          walk(u) {
            u.setAttribute("role", "none");
          },
        });
      function i(u) {
        var f;
        switch ((s.value && clearTimeout(s.value), u.key)) {
          case Qe.Space:
            if (o.searchQuery.value !== "")
              return u.preventDefault(), u.stopPropagation(), o.search(u.key);
          case Qe.Enter:
            if (
              (u.preventDefault(),
              u.stopPropagation(),
              o.activeItemIndex.value !== null)
            ) {
              let d = o.items.value[o.activeItemIndex.value];
              (f = ge(d.dataRef.domRef)) == null || f.click();
            }
            o.closeMenu(), ky(ge(o.buttonRef));
            break;
          case Qe.ArrowDown:
            return u.preventDefault(), u.stopPropagation(), o.goToItem(Xt.Next);
          case Qe.ArrowUp:
            return (
              u.preventDefault(), u.stopPropagation(), o.goToItem(Xt.Previous)
            );
          case Qe.Home:
          case Qe.PageUp:
            return (
              u.preventDefault(), u.stopPropagation(), o.goToItem(Xt.First)
            );
          case Qe.End:
          case Qe.PageDown:
            return u.preventDefault(), u.stopPropagation(), o.goToItem(Xt.Last);
          case Qe.Escape:
            u.preventDefault(),
              u.stopPropagation(),
              o.closeMenu(),
              Gt(() => {
                var d;
                return (d = ge(o.buttonRef)) == null
                  ? void 0
                  : d.focus({ preventScroll: !0 });
              });
            break;
          case Qe.Tab:
            u.preventDefault(),
              u.stopPropagation(),
              o.closeMenu(),
              Gt(() => RC(ge(o.buttonRef), u.shiftKey ? In.Previous : In.Next));
            break;
          default:
            u.key.length === 1 &&
              (o.search(u.key),
              (s.value = setTimeout(() => o.clearSearch(), 350)));
            break;
        }
      }
      function a(u) {
        switch (u.key) {
          case Qe.Space:
            u.preventDefault();
            break;
        }
      }
      let l = Li(),
        c = ie(() =>
          l !== null ? (l.value & ot.Open) === ot.Open : o.menuState.value === 0
        );
      return () => {
        var u, f;
        let d = { open: o.menuState.value === 0 },
          { id: m, ...g } = e,
          _ = {
            "aria-activedescendant":
              o.activeItemIndex.value === null ||
              (u = o.items.value[o.activeItemIndex.value]) == null
                ? void 0
                : u.id,
            "aria-labelledby": (f = ge(o.buttonRef)) == null ? void 0 : f.id,
            id: m,
            onKeydown: i,
            onKeyup: a,
            role: "menu",
            tabIndex: 0,
            ref: o.itemsRef,
          };
        return St({
          ourProps: _,
          theirProps: g,
          slot: d,
          attrs: t,
          slots: n,
          features: Vr.RenderStrategy | Vr.Static,
          visible: c.value,
          name: "MenuItems",
        });
      };
    },
  }),
  Gc = Re({
    name: "MenuItem",
    inheritAttrs: !1,
    props: {
      as: { type: [Object, String], default: "template" },
      disabled: { type: Boolean, default: !1 },
      id: { type: String, default: () => `headlessui-menu-item-${sr()}` },
    },
    setup(e, { slots: t, attrs: n, expose: r }) {
      let o = Kl("MenuItem"),
        s = re(null);
      r({ el: s, $el: s });
      let i = ie(() =>
          o.activeItemIndex.value !== null
            ? o.items.value[o.activeItemIndex.value].id === e.id
            : !1
        ),
        a = uO(s),
        l = ie(() => ({
          disabled: e.disabled,
          get textValue() {
            return a();
          },
          domRef: s,
        }));
      it(() => o.registerItem(e.id, l)),
        Pt(() => o.unregisterItem(e.id)),
        Tt(() => {
          o.menuState.value === 0 &&
            i.value &&
            o.activationTrigger.value !== 0 &&
            Gt(() => {
              var _, T;
              return (T = (_ = ge(s)) == null ? void 0 : _.scrollIntoView) ==
                null
                ? void 0
                : T.call(_, { block: "nearest" });
            });
        });
      function c(_) {
        if (e.disabled) return _.preventDefault();
        o.closeMenu(), ky(ge(o.buttonRef));
      }
      function u() {
        if (e.disabled) return o.goToItem(Xt.Nothing);
        o.goToItem(Xt.Specific, e.id);
      }
      let f = NC();
      function d(_) {
        f.update(_);
      }
      function m(_) {
        f.wasMoved(_) &&
          (e.disabled || i.value || o.goToItem(Xt.Specific, e.id, 0));
      }
      function g(_) {
        f.wasMoved(_) && (e.disabled || (i.value && o.goToItem(Xt.Nothing)));
      }
      return () => {
        let { disabled: _ } = e,
          T = { active: i.value, disabled: _, close: o.closeMenu },
          { id: y, ...E } = e;
        return St({
          ourProps: {
            id: y,
            ref: s,
            role: "menuitem",
            tabIndex: _ === !0 ? void 0 : -1,
            "aria-disabled": _ === !0 ? !0 : void 0,
            disabled: void 0,
            onClick: c,
            onFocus: u,
            onPointerenter: d,
            onMouseenter: d,
            onPointermove: m,
            onMousemove: m,
            onPointerleave: g,
            onMouseleave: g,
          },
          theirProps: { ...n, ...E },
          slot: T,
          attrs: n,
          slots: t,
          name: "MenuItem",
        });
      };
    },
  });
function _O(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function Yc(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function ia(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Gu = ((e) => ((e.Finished = "finished"), (e.Cancelled = "cancelled"), e))(
  Gu || {}
);
function vO(e, t) {
  let n = Di();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e),
    [s, i] = [r, o].map((a) => {
      let [l = 0] = a
        .split(",")
        .filter(Boolean)
        .map((c) => (c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3))
        .sort((c, u) => u - c);
      return l;
    });
  return (
    s !== 0 ? n.setTimeout(() => t("finished"), s + i) : t("finished"),
    n.add(() => t("cancelled")),
    n.dispose
  );
}
function zm(e, t, n, r, o, s) {
  let i = Di(),
    a = s !== void 0 ? _O(s) : () => {};
  return (
    ia(e, ...o),
    Yc(e, ...t, ...n),
    i.nextFrame(() => {
      ia(e, ...n),
        Yc(e, ...r),
        i.add(vO(e, (l) => (ia(e, ...r, ...t), Yc(e, ...o), a(l))));
    }),
    i.add(() => ia(e, ...t, ...n, ...r, ...o)),
    i.add(() => a("cancelled")),
    i.dispose
  );
}
function no(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Ld = Symbol("TransitionContext");
var yO = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(yO || {});
function bO() {
  return Me(Ld, null) !== null;
}
function EO() {
  let e = Me(Ld, null);
  if (e === null)
    throw new Error(
      "A <TransitionChild /> is used but it is missing a parent <TransitionRoot />."
    );
  return e;
}
function wO() {
  let e = Me($d, null);
  if (e === null)
    throw new Error(
      "A <TransitionChild /> is used but it is missing a parent <TransitionRoot />."
    );
  return e;
}
let $d = Symbol("NestingContext");
function ql(e) {
  return "children" in e
    ? ql(e.children)
    : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Uy(e) {
  let t = re([]),
    n = re(!1);
  it(() => (n.value = !0)), Pt(() => (n.value = !1));
  function r(s, i = $r.Hidden) {
    let a = t.value.findIndex(({ id: l }) => l === s);
    a !== -1 &&
      (Qt(i, {
        [$r.Unmount]() {
          t.value.splice(a, 1);
        },
        [$r.Hidden]() {
          t.value[a].state = "hidden";
        },
      }),
      !ql(t) && n.value && (e == null || e()));
  }
  function o(s) {
    let i = t.value.find(({ id: a }) => a === s);
    return (
      i
        ? i.state !== "visible" && (i.state = "visible")
        : t.value.push({ id: s, state: "visible" }),
      () => r(s, $r.Unmount)
    );
  }
  return { children: t, register: o, unregister: r };
}
let zy = Vr.RenderStrategy,
  Co = Re({
    props: {
      as: { type: [Object, String], default: "div" },
      show: { type: [Boolean], default: null },
      unmount: { type: [Boolean], default: !0 },
      appear: { type: [Boolean], default: !1 },
      enter: { type: [String], default: "" },
      enterFrom: { type: [String], default: "" },
      enterTo: { type: [String], default: "" },
      entered: { type: [String], default: "" },
      leave: { type: [String], default: "" },
      leaveFrom: { type: [String], default: "" },
      leaveTo: { type: [String], default: "" },
    },
    emits: {
      beforeEnter: () => !0,
      afterEnter: () => !0,
      beforeLeave: () => !0,
      afterLeave: () => !0,
    },
    setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
      let s = re(0);
      function i() {
        (s.value |= ot.Opening), t("beforeEnter");
      }
      function a() {
        (s.value &= ~ot.Opening), t("afterEnter");
      }
      function l() {
        (s.value |= ot.Closing), t("beforeLeave");
      }
      function c() {
        (s.value &= ~ot.Closing), t("afterLeave");
      }
      if (!bO() && TC())
        return () =>
          at(
            Xl,
            {
              ...e,
              onBeforeEnter: i,
              onAfterEnter: a,
              onBeforeLeave: l,
              onAfterLeave: c,
            },
            r
          );
      let u = re(null),
        f = ie(() => (e.unmount ? $r.Unmount : $r.Hidden));
      o({ el: u, $el: u });
      let { show: d, appear: m } = EO(),
        { register: g, unregister: _ } = wO(),
        T = re(d.value ? "visible" : "hidden"),
        y = { value: !0 },
        E = sr(),
        v = { value: !1 },
        w = Uy(() => {
          !v.value && T.value !== "hidden" && ((T.value = "hidden"), _(E), c());
        });
      it(() => {
        let Y = g(E);
        Pt(Y);
      }),
        Tt(() => {
          if (f.value === $r.Hidden && E) {
            if (d.value && T.value !== "visible") {
              T.value = "visible";
              return;
            }
            Qt(T.value, { hidden: () => _(E), visible: () => g(E) });
          }
        });
      let C = no(e.enter),
        I = no(e.enterFrom),
        S = no(e.enterTo),
        M = no(e.entered),
        F = no(e.leave),
        A = no(e.leaveFrom),
        D = no(e.leaveTo);
      it(() => {
        Tt(() => {
          if (T.value === "visible") {
            let Y = ge(u);
            if (Y instanceof Comment && Y.data === "")
              throw new Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }
        });
      });
      function L(Y) {
        let ve = y.value && !m.value,
          ye = ge(u);
        !ye ||
          !(ye instanceof HTMLElement) ||
          ve ||
          ((v.value = !0),
          d.value && i(),
          d.value || l(),
          Y(
            d.value
              ? zm(ye, C, I, S, M, (Z) => {
                  (v.value = !1), Z === Gu.Finished && a();
                })
              : zm(ye, F, A, D, M, (Z) => {
                  (v.value = !1),
                    Z === Gu.Finished &&
                      (ql(w) || ((T.value = "hidden"), _(E), c()));
                })
          ));
      }
      return (
        it(() => {
          xt(
            [d],
            (Y, ve, ye) => {
              L(ye), (y.value = !1);
            },
            { immediate: !0 }
          );
        }),
        bt($d, w),
        Cd(
          ie(
            () => Qt(T.value, { visible: ot.Open, hidden: ot.Closed }) | s.value
          )
        ),
        () => {
          let {
              appear: Y,
              show: ve,
              enter: ye,
              enterFrom: Z,
              enterTo: W,
              entered: U,
              leave: Ie,
              leaveFrom: Ne,
              leaveTo: ht,
              ...Ke
            } = e,
            gt = { ref: u },
            Rt = {
              ...Ke,
              ...(m.value && d.value && $i.isServer
                ? { class: Mt([n.class, Ke.class, ...C, ...I]) }
                : {}),
            };
          return St({
            theirProps: Rt,
            ourProps: gt,
            slot: {},
            slots: r,
            attrs: n,
            features: zy,
            visible: T.value === "visible",
            name: "TransitionChild",
          });
        }
      );
    },
  }),
  TO = Co,
  Xl = Re({
    inheritAttrs: !1,
    props: {
      as: { type: [Object, String], default: "div" },
      show: { type: [Boolean], default: null },
      unmount: { type: [Boolean], default: !0 },
      appear: { type: [Boolean], default: !1 },
      enter: { type: [String], default: "" },
      enterFrom: { type: [String], default: "" },
      enterTo: { type: [String], default: "" },
      entered: { type: [String], default: "" },
      leave: { type: [String], default: "" },
      leaveFrom: { type: [String], default: "" },
      leaveTo: { type: [String], default: "" },
    },
    emits: {
      beforeEnter: () => !0,
      afterEnter: () => !0,
      beforeLeave: () => !0,
      afterLeave: () => !0,
    },
    setup(e, { emit: t, attrs: n, slots: r }) {
      let o = Li(),
        s = ie(() =>
          e.show === null && o !== null
            ? (o.value & ot.Open) === ot.Open
            : e.show
        );
      Tt(() => {
        if (![!0, !1].includes(s.value))
          throw new Error(
            'A <Transition /> is used but it is missing a `:show="true | false"` prop.'
          );
      });
      let i = re(s.value ? "visible" : "hidden"),
        a = Uy(() => {
          i.value = "hidden";
        }),
        l = re(!0),
        c = { show: s, appear: ie(() => e.appear || !l.value) };
      return (
        it(() => {
          Tt(() => {
            (l.value = !1),
              s.value ? (i.value = "visible") : ql(a) || (i.value = "hidden");
          });
        }),
        bt($d, a),
        bt(Ld, c),
        () => {
          let u = wy(e, [
              "show",
              "appear",
              "unmount",
              "onBeforeEnter",
              "onBeforeLeave",
              "onAfterEnter",
              "onAfterLeave",
            ]),
            f = { unmount: e.unmount };
          return St({
            ourProps: { ...f, as: "template" },
            theirProps: {},
            slot: {},
            slots: {
              ...r,
              default: () => [
                at(
                  TO,
                  {
                    onBeforeEnter: () => t("beforeEnter"),
                    onAfterEnter: () => t("afterEnter"),
                    onBeforeLeave: () => t("beforeLeave"),
                    onAfterLeave: () => t("afterLeave"),
                    ...n,
                    ...f,
                    ...u,
                  },
                  r.default
                ),
              ],
            },
            attrs: {},
            features: zy,
            visible: i.value === "visible",
            name: "Transition",
          });
        }
      );
    },
  });
function SO(e, t) {
  return (
    se(),
    _e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
      },
      [
        N("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
        }),
      ]
    )
  );
}
function By(e, t) {
  return (
    se(),
    _e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
      },
      [
        N("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M6 18L18 6M6 6l12 12",
        }),
      ]
    )
  );
}
const CO = {
    xmlns: "http://www.w3.org/2000/svg",
    "xml:space": "preserve",
    viewBox: "0 0 256 256",
  },
  OO = Ov(
    '<g style="stroke:none;stroke-width:0;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:none;fill-rule:nonzero;opacity:1;" transform="translate(1.407 1.407)scale(2.81)"><path d="M45 90C20.187 90 0 69.813 0 45S20.187 0 45 0s45 20.187 45 45-20.187 45-45 45m0-86C22.393 4 4 22.393 4 45s18.393 41 41 41 41-18.393 41-41S67.607 4 45 4" style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:#80f;fill-rule:nonzero;opacity:1;"></path><circle cx="30.344" cy="33.274" r="5.864" style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:#80f;fill-rule:nonzero;opacity:1;"></circle><circle cx="59.664" cy="33.274" r="5.864" style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:#80f;fill-rule:nonzero;opacity:1;"></circle><path d="M72.181 65.49c-.445 0-.893-.147-1.265-.451A41.075 41.075 0 0 0 45 55.795a41.072 41.072 0 0 0-25.916 9.244 2 2 0 1 1-2.531-3.097A45.08 45.08 0 0 1 45 51.795a45.092 45.092 0 0 1 28.447 10.146 2 2 0 0 1-1.266 3.549" style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:#80f;fill-rule:nonzero;opacity:1;"></path></g>',
    1
  ),
  kO = [OO];
function xO(e, t) {
  return se(), _e("svg", CO, [...kO]);
}
const IO = { render: xO },
  AO = N(
    "div",
    { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" },
    null,
    -1
  ),
  PO = { class: "fixed inset-0 z-10 overflow-y-auto" },
  RO = {
    class:
      "flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0",
  },
  NO = { class: "absolute top-0 right-0 hidden pt-6 pr-4 sm:block" },
  LO = N("span", { class: "sr-only" }, "Close", -1),
  $O = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" },
  DO = { class: "sm:flex sm:items-center" },
  MO = { class: "my-3 text-center sm:mt-0 sm:ml-0 sm:text-left w-full" },
  FO = { class: "mt-5" },
  HO = {
    __name: "CancelSubscribeModal",
    props: { open: Boolean },
    emits: ["closeModal", "confirm"],
    setup(e, { emit: t }) {
      const n = t,
        r = re("");
      function o() {
        n("closeModal");
      }
      function s() {
        n("closeModal"), n("confirm", r.value);
      }
      return (i, a) => (
        se(),
        tt(
          te(Xl),
          { as: "template", show: e.open },
          {
            default: be(() => [
              ae(
                te(Ad),
                { as: "div", class: "relative z-[1000]", onClose: o },
                {
                  default: be(() => [
                    ae(
                      te(Co),
                      {
                        as: "template",
                        enter: "ease-out duration-300",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "ease-in duration-200",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0",
                      },
                      { default: be(() => [AO]), _: 1 }
                    ),
                    N("div", PO, [
                      N("div", RO, [
                        ae(
                          te(Co),
                          {
                            as: "template",
                            enter: "ease-out duration-300",
                            "enter-from":
                              "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            "enter-to":
                              "opacity-100 translate-y-0 sm:scale-100",
                            leave: "ease-in duration-200",
                            "leave-from":
                              "opacity-100 translate-y-0 sm:scale-100",
                            "leave-to":
                              "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                          },
                          {
                            default: be(() => [
                              ae(
                                te(Pd),
                                {
                                  class:
                                    "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl",
                                },
                                {
                                  default: be(() => [
                                    N("div", NO, [
                                      N(
                                        "button",
                                        {
                                          type: "button",
                                          class:
                                            "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                                          onClick: o,
                                        },
                                        [
                                          LO,
                                          ae(te(By), {
                                            class: "h-6 w-6",
                                            "aria-hidden": "true",
                                          }),
                                        ]
                                      ),
                                    ]),
                                    N("div", $O, [
                                      N("div", DO, [
                                        we(` <div
                     class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-6 w-6 text-red-700 transform rotate-180"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                      ></path>
                    </svg>
                  </div> `),
                                        N("div", MO, [
                                          ae(
                                            te(Rd),
                                            {
                                              as: "h2",
                                              class:
                                                "text-xl leading-6 text-gray-900 text-center",
                                            },
                                            {
                                              default: be(() => [
                                                ae(te(IO), {
                                                  class:
                                                    "w-26 h-26 text-secondary-color inlidne mrd-2 text-center mx-auto my-4",
                                                }),
                                                nt(" Sad to see you leave "),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                      ]),
                                      N("div", FO, [
                                        we(` <InputField
                    class="pdt-4 pdl-6 border-2 !w-full rounded-lg"
                    :css="{ '!py-6 !text-left': true }"
                    :withLabel="false"
                    type="text"
                    placeholder="Write your feedback.."
                    v-model="msg"
                    @keydown.enter="sendMessage"
                    :disabled="isResponseLoading"
                  >

                  </InputField> `),
                                        ew(
                                          N(
                                            "textarea",
                                            {
                                              "onUpdate:modelValue":
                                                a[0] ||
                                                (a[0] = (l) => (r.value = l)),
                                              rows: "4",
                                              name: "comment",
                                              id: "comment",
                                              required: "true",
                                              placeholder:
                                                "Cancellation reason..",
                                              class:
                                                "bg-white text-lg p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:leading-6",
                                            },
                                            null,
                                            512
                                          ),
                                          [[DT, r.value]]
                                        ),
                                      ]),
                                    ]),
                                    N(
                                      "div",
                                      {
                                        class:
                                          "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",
                                      },
                                      [
                                        N(
                                          "button",
                                          {
                                            type: "button",
                                            class:
                                              "text-secondary-color inline-flex w-full justify-center rounded-md bg-transparent px-3 py-2 text-sm font-semibold shadow-sm hover:bg-secondary-color hover:text-white sm:ml-3 sm:w-auto",
                                            onClick: s,
                                          },
                                          " Cancel Subscription "
                                        ),
                                        N(
                                          "button",
                                          {
                                            type: "button",
                                            class:
                                              "inline-flex w-full justify-center rounded-md bg-secondary-color px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary-color sm:ml-3 sm:w-auto",
                                            onClick: o,
                                          },
                                          " Never mind "
                                        ),
                                      ]
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          },
          8,
          ["show"]
        )
      );
    },
  },
  jO = Un(HO, [
    [
      "__file",
      "/usr/src/app/src/components/Chat/Conversation/CancelSubscribeModal.vue",
    ],
  ]);
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const Jn = typeof window < "u";
function UO(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Le = Object.assign;
function Kc(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = Zt(o) ? o.map(e) : e(o);
  }
  return n;
}
const Ys = () => {},
  Zt = Array.isArray;
function Oe(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const zO = /\/$/,
  BO = (e) => e.replace(zO, "");
function qc(e, t, n = "/") {
  let r,
    o = {},
    s = "",
    i = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((r = t.slice(0, l)),
      (s = t.slice(l + 1, a > -1 ? a : t.length)),
      (o = e(s))),
    a > -1 && ((r = r || t.slice(0, a)), (i = t.slice(a, t.length))),
    (r = GO(r ?? t, n)),
    { fullPath: r + (s && "?") + s + i, path: r, query: o, hash: i }
  );
}
function VO(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Bm(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Vm(e, t, n) {
  const r = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    r > -1 &&
    r === o &&
    Wr(t.matched[r], n.matched[o]) &&
    Vy(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Wr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Vy(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!WO(e[n], t[n])) return !1;
  return !0;
}
function WO(e, t) {
  return Zt(e) ? Wm(e, t) : Zt(t) ? Wm(t, e) : e === t;
}
function Wm(e, t) {
  return Zt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function GO(e, t) {
  if (e.startsWith("/")) return e;
  if (!t.startsWith("/"))
    return (
      Oe(
        `Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`
      ),
      e
    );
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/"),
    o = r[r.length - 1];
  (o === ".." || o === ".") && r.push("");
  let s = n.length - 1,
    i,
    a;
  for (i = 0; i < r.length; i++)
    if (((a = r[i]), a !== "."))
      if (a === "..") s > 1 && s--;
      else break;
  return (
    n.slice(0, s).join("/") +
    "/" +
    r.slice(i - (i === r.length ? 1 : 0)).join("/")
  );
}
var fi;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(fi || (fi = {}));
var Ks;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Ks || (Ks = {}));
function YO(e) {
  if (!e)
    if (Jn) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), BO(e);
}
const KO = /^[^#]+#/;
function qO(e, t) {
  return e.replace(KO, "#") + t;
}
function XO(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const Jl = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function JO(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#");
    if (
      typeof e.el == "string" &&
      (!r || !document.getElementById(e.el.slice(1)))
    )
      try {
        const s = document.querySelector(e.el);
        if (r && s) {
          Oe(
            `The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`
          );
          return;
        }
      } catch {
        Oe(
          `The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`
        );
        return;
      }
    const o =
      typeof n == "string"
        ? r
          ? document.getElementById(n.slice(1))
          : document.querySelector(n)
        : n;
    if (!o) {
      Oe(
        `Couldn't find element using selector "${e.el}" returned by scrollBehavior.`
      );
      return;
    }
    t = XO(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function Gm(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Yu = new Map();
function QO(e, t) {
  Yu.set(e, t);
}
function ZO(e) {
  const t = Yu.get(e);
  return Yu.delete(e), t;
}
let ek = () => location.protocol + "//" + location.host;
function Wy(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    s = e.indexOf("#");
  if (s > -1) {
    let a = o.includes(e.slice(s)) ? e.slice(s).length : 1,
      l = o.slice(a);
    return l[0] !== "/" && (l = "/" + l), Bm(l, "");
  }
  return Bm(n, e) + r + o;
}
function tk(e, t, n, r) {
  let o = [],
    s = [],
    i = null;
  const a = ({ state: d }) => {
    const m = Wy(e, location),
      g = n.value,
      _ = t.value;
    let T = 0;
    if (d) {
      if (((n.value = m), (t.value = d), i && i === g)) {
        i = null;
        return;
      }
      T = _ ? d.position - _.position : 0;
    } else r(m);
    o.forEach((y) => {
      y(n.value, g, {
        delta: T,
        type: fi.pop,
        direction: T ? (T > 0 ? Ks.forward : Ks.back) : Ks.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function c(d) {
    o.push(d);
    const m = () => {
      const g = o.indexOf(d);
      g > -1 && o.splice(g, 1);
    };
    return s.push(m), m;
  }
  function u() {
    const { history: d } = window;
    d.state && d.replaceState(Le({}, d.state, { scroll: Jl() }), "");
  }
  function f() {
    for (const d of s) d();
    (s = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u, { passive: !0 }),
    { pauseListeners: l, listen: c, destroy: f }
  );
}
function Ym(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? Jl() : null,
  };
}
function nk(e) {
  const { history: t, location: n } = window,
    r = { value: Wy(e, n) },
    o = { value: t.state };
  o.value ||
    s(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function s(l, c, u) {
    const f = e.indexOf("#"),
      d =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l
          : ek() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](c, "", d), (o.value = c);
    } catch (m) {
      Oe("Error with push/replace State", m), n[u ? "replace" : "assign"](d);
    }
  }
  function i(l, c) {
    const u = Le({}, t.state, Ym(o.value.back, l, o.value.forward, !0), c, {
      position: o.value.position,
    });
    s(l, u, !0), (r.value = l);
  }
  function a(l, c) {
    const u = Le({}, o.value, t.state, { forward: l, scroll: Jl() });
    t.state ||
      Oe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),
      s(u.current, u, !0);
    const f = Le({}, Ym(r.value, l, null), { position: u.position + 1 }, c);
    s(l, f, !1), (r.value = l);
  }
  return { location: r, state: o, push: a, replace: i };
}
function rk(e) {
  e = YO(e);
  const t = nk(e),
    n = tk(e, t.state, t.location, t.replace);
  function r(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const o = Le(
    { location: "", base: e, go: r, createHref: qO.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(o, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(o, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    o
  );
}
function ok(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Gy(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const br = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Yy = Symbol("navigation failure");
var Km;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Km || (Km = {}));
const sk = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${
      t
        ? `
while being at
` + JSON.stringify(t)
        : ""
    }`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${ak(
      t
    )}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  },
};
function is(e, t) {
  return Le(new Error(sk[e](t)), { type: e, [Yy]: !0 }, t);
}
function Wn(e, t) {
  return e instanceof Error && Yy in e && (t == null || !!(e.type & t));
}
const ik = ["params", "query", "hash"];
function ak(e) {
  if (typeof e == "string") return e;
  if ("path" in e) return e.path;
  const t = {};
  for (const n of ik) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const qm = "[^/]+?",
  lk = { sensitive: !1, strict: !1, start: !0, end: !0 },
  ck = /[.+*?^${}()[\]/\\]/g;
function uk(e, t) {
  const n = Le({}, lk, t),
    r = [];
  let o = n.start ? "^" : "";
  const s = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (o += "/");
    for (let f = 0; f < c.length; f++) {
      const d = c[f];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        f || (o += "/"), (o += d.value.replace(ck, "\\$&")), (m += 40);
      else if (d.type === 1) {
        const { value: g, repeatable: _, optional: T, regexp: y } = d;
        s.push({ name: g, repeatable: _, optional: T });
        const E = y || qm;
        if (E !== qm) {
          m += 10;
          try {
            new RegExp(`(${E})`);
          } catch (w) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${E}): ` + w.message
            );
          }
        }
        let v = _ ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`;
        f || (v = T && c.length < 2 ? `(?:/${v})` : "/" + v),
          T && (v += "?"),
          (o += v),
          (m += 20),
          T && (m += -8),
          _ && (m += -20),
          E === ".*" && (m += -50);
      }
      u.push(m);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? (o += "$") : n.strict && (o += "(?:/|$)");
  const i = new RegExp(o, n.sensitive ? "" : "i");
  function a(c) {
    const u = c.match(i),
      f = {};
    if (!u) return null;
    for (let d = 1; d < u.length; d++) {
      const m = u[d] || "",
        g = s[d - 1];
      f[g.name] = m && g.repeatable ? m.split("/") : m;
    }
    return f;
  }
  function l(c) {
    let u = "",
      f = !1;
    for (const d of e) {
      (!f || !u.endsWith("/")) && (u += "/"), (f = !1);
      for (const m of d)
        if (m.type === 0) u += m.value;
        else if (m.type === 1) {
          const { value: g, repeatable: _, optional: T } = m,
            y = g in c ? c[g] : "";
          if (Zt(y) && !_)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            );
          const E = Zt(y) ? y.join("/") : y;
          if (!E)
            if (T)
              d.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${g}"`);
          u += E;
        }
    }
    return u || "/";
  }
  return { re: i, score: r, keys: s, parse: a, stringify: l };
}
function fk(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function dk(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = fk(r[n], o[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (Xm(r)) return 1;
    if (Xm(o)) return -1;
  }
  return o.length - r.length;
}
function Xm(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const pk = { type: 0, value: "" },
  mk = /[a-zA-Z0-9_]/;
function hk(e) {
  if (!e) return [[]];
  if (e === "/") return [[pk]];
  if (!e.startsWith("/"))
    throw new Error(
      `Route paths should start with a "/": "${e}" should be "/${e}".`
    );
  function t(m) {
    throw new Error(`ERR (${n})/"${c}": ${m}`);
  }
  let n = 0,
    r = n;
  const o = [];
  let s;
  function i() {
    s && o.push(s), (s = []);
  }
  let a = 0,
    l,
    c = "",
    u = "";
  function f() {
    c &&
      (n === 0
        ? s.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (s.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          s.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function d() {
    c += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (c && f(), i()) : l === ":" ? (f(), (n = 1)) : d();
        break;
      case 4:
        d(), (n = r);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : mk.test(l)
          ? d()
          : (f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + l)
            : (n = 3)
          : (u += l);
        break;
      case 3:
        f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), i(), o;
}
function gk(e, t, n) {
  const r = uk(hk(e.path), n);
  {
    const s = new Set();
    for (const i of r.keys)
      s.has(i.name) &&
        Oe(
          `Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`
        ),
        s.add(i.name);
  }
  const o = Le(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function _k(e, t) {
  const n = [],
    r = new Map();
  t = Zm({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(u) {
    return r.get(u);
  }
  function s(u, f, d) {
    const m = !d,
      g = vk(u);
    wk(g, f), (g.aliasOf = d && d.record);
    const _ = Zm(t, u),
      T = [g];
    if ("alias" in u) {
      const v = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const w of v)
        T.push(
          Le({}, g, {
            components: d ? d.record.components : g.components,
            path: w,
            aliasOf: d ? d.record : g,
          })
        );
    }
    let y, E;
    for (const v of T) {
      const { path: w } = v;
      if (f && w[0] !== "/") {
        const C = f.record.path,
          I = C[C.length - 1] === "/" ? "" : "/";
        v.path = f.record.path + (w && I + w);
      }
      if (v.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (
        ((y = gk(v, f, _)),
        f && w[0] === "/" && Tk(y, f),
        d
          ? (d.alias.push(y), Ek(d, y))
          : ((E = E || y),
            E !== y && E.alias.push(y),
            m && u.name && !Qm(y) && i(u.name)),
        g.children)
      ) {
        const C = g.children;
        for (let I = 0; I < C.length; I++) s(C[I], y, d && d.children[I]);
      }
      (d = d || y),
        ((y.record.components && Object.keys(y.record.components).length) ||
          y.record.name ||
          y.record.redirect) &&
          l(y);
    }
    return E
      ? () => {
          i(E);
        }
      : Ys;
  }
  function i(u) {
    if (Gy(u)) {
      const f = r.get(u);
      f &&
        (r.delete(u),
        n.splice(n.indexOf(f), 1),
        f.children.forEach(i),
        f.alias.forEach(i));
    } else {
      const f = n.indexOf(u);
      f > -1 &&
        (n.splice(f, 1),
        u.record.name && r.delete(u.record.name),
        u.children.forEach(i),
        u.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(u) {
    let f = 0;
    for (
      ;
      f < n.length &&
      dk(u, n[f]) >= 0 &&
      (u.record.path !== n[f].record.path || !Ky(u, n[f]));

    )
      f++;
    n.splice(f, 0, u), u.record.name && !Qm(u) && r.set(u.record.name, u);
  }
  function c(u, f) {
    let d,
      m = {},
      g,
      _;
    if ("name" in u && u.name) {
      if (((d = r.get(u.name)), !d)) throw is(1, { location: u });
      {
        const E = Object.keys(u.params || {}).filter(
          (v) => !d.keys.find((w) => w.name === v)
        );
        E.length &&
          Oe(
            `Discarded invalid param(s) "${E.join(
              '", "'
            )}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`
          );
      }
      (_ = d.record.name),
        (m = Le(
          Jm(
            f.params,
            d.keys.filter((E) => !E.optional).map((E) => E.name)
          ),
          u.params &&
            Jm(
              u.params,
              d.keys.map((E) => E.name)
            )
        )),
        (g = d.stringify(m));
    } else if ("path" in u)
      (g = u.path),
        g.startsWith("/") ||
          Oe(
            `The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`
          ),
        (d = n.find((E) => E.re.test(g))),
        d && ((m = d.parse(g)), (_ = d.record.name));
    else {
      if (((d = f.name ? r.get(f.name) : n.find((E) => E.re.test(f.path))), !d))
        throw is(1, { location: u, currentLocation: f });
      (_ = d.record.name),
        (m = Le({}, f.params, u.params)),
        (g = d.stringify(m));
    }
    const T = [];
    let y = d;
    for (; y; ) T.unshift(y.record), (y = y.parent);
    return { name: _, path: g, params: m, matched: T, meta: bk(T) };
  }
  return (
    e.forEach((u) => s(u)),
    {
      addRoute: s,
      resolve: c,
      removeRoute: i,
      getRoutes: a,
      getRecordMatcher: o,
    }
  );
}
function Jm(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function vk(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: yk(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function yk(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function Qm(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function bk(e) {
  return e.reduce((t, n) => Le(t, n.meta), {});
}
function Zm(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Ku(e, t) {
  return (
    e.name === t.name &&
    e.optional === t.optional &&
    e.repeatable === t.repeatable
  );
}
function Ek(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Ku.bind(null, n)))
      return Oe(
        `Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`
      );
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Ku.bind(null, n)))
      return Oe(
        `Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`
      );
}
function wk(e, t) {
  t &&
    t.record.name &&
    !e.name &&
    !e.path &&
    Oe(
      `The route named "${String(
        t.record.name
      )}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`
    );
}
function Tk(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Ku.bind(null, n)))
      return Oe(
        `Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`
      );
}
function Ky(e, t) {
  return t.children.some((n) => n === e || Ky(e, n));
}
const qy = /#/g,
  Sk = /&/g,
  Ck = /\//g,
  Ok = /=/g,
  kk = /\?/g,
  Xy = /\+/g,
  xk = /%5B/g,
  Ik = /%5D/g,
  Jy = /%5E/g,
  Ak = /%60/g,
  Qy = /%7B/g,
  Pk = /%7C/g,
  Zy = /%7D/g,
  Rk = /%20/g;
function Dd(e) {
  return encodeURI("" + e)
    .replace(Pk, "|")
    .replace(xk, "[")
    .replace(Ik, "]");
}
function Nk(e) {
  return Dd(e).replace(Qy, "{").replace(Zy, "}").replace(Jy, "^");
}
function qu(e) {
  return Dd(e)
    .replace(Xy, "%2B")
    .replace(Rk, "+")
    .replace(qy, "%23")
    .replace(Sk, "%26")
    .replace(Ak, "`")
    .replace(Qy, "{")
    .replace(Zy, "}")
    .replace(Jy, "^");
}
function Lk(e) {
  return qu(e).replace(Ok, "%3D");
}
function $k(e) {
  return Dd(e).replace(qy, "%23").replace(kk, "%3F");
}
function Dk(e) {
  return e == null ? "" : $k(e).replace(Ck, "%2F");
}
function di(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    Oe(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Mk(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const s = r[o].replace(Xy, " "),
      i = s.indexOf("="),
      a = di(i < 0 ? s : s.slice(0, i)),
      l = i < 0 ? null : di(s.slice(i + 1));
    if (a in t) {
      let c = t[a];
      Zt(c) || (c = t[a] = [c]), c.push(l);
    } else t[a] = l;
  }
  return t;
}
function eh(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = Lk(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Zt(r) ? r.map((s) => s && qu(s)) : [r && qu(r)]).forEach((s) => {
      s !== void 0 &&
        ((t += (t.length ? "&" : "") + n), s != null && (t += "=" + s));
    });
  }
  return t;
}
function Fk(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Zt(r)
        ? r.map((o) => (o == null ? null : "" + o))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const Hk = Symbol("router view location matched"),
  th = Symbol("router view depth"),
  Ql = Symbol("router"),
  Md = Symbol("route location"),
  Xu = Symbol("router view location");
function As() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function Ar(e, t, n, r, o) {
  const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((i, a) => {
      const l = (f) => {
          f === !1
            ? a(is(4, { from: n, to: t }))
            : f instanceof Error
            ? a(f)
            : ok(f)
            ? a(is(2, { from: t, to: f }))
            : (s &&
                r.enterCallbacks[o] === s &&
                typeof f == "function" &&
                s.push(f),
              i());
        },
        c = e.call(r && r.instances[o], t, n, jk(l, t, n));
      let u = Promise.resolve(c);
      if ((e.length < 3 && (u = u.then(l)), e.length > 2)) {
        const f = `The "next" callback was never called inside of ${
          e.name ? '"' + e.name + '"' : ""
        }:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
        if (typeof c == "object" && "then" in c)
          u = u.then((d) =>
            l._called
              ? d
              : (Oe(f), Promise.reject(new Error("Invalid navigation guard")))
          );
        else if (c !== void 0 && !l._called) {
          Oe(f), a(new Error("Invalid navigation guard"));
          return;
        }
      }
      u.catch((f) => a(f));
    });
}
function jk(e, t, n) {
  let r = 0;
  return function () {
    r++ === 1 &&
      Oe(
        `The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`
      ),
      (e._called = !0),
      r === 1 && e.apply(null, arguments);
  };
}
function Xc(e, t, n, r) {
  const o = [];
  for (const s of e) {
    !s.components &&
      !s.children.length &&
      Oe(
        `Record with path "${s.path}" is either missing a "component(s)" or "children" property.`
      );
    for (const i in s.components) {
      let a = s.components[i];
      {
        if (!a || (typeof a != "object" && typeof a != "function"))
          throw (
            (Oe(
              `Component "${i}" in record with path "${
                s.path
              }" is not a valid component. Received "${String(a)}".`
            ),
            new Error("Invalid route component"))
          );
        if ("then" in a) {
          Oe(
            `Component "${i}" in record with path "${s.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`
          );
          const l = a;
          a = () => l;
        } else
          a.__asyncLoader &&
            !a.__warnedDefineAsync &&
            ((a.__warnedDefineAsync = !0),
            Oe(
              `Component "${i}" in record with path "${s.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`
            ));
      }
      if (!(t !== "beforeRouteEnter" && !s.instances[i]))
        if (Uk(a)) {
          const c = (a.__vccOpts || a)[t];
          c && o.push(Ar(c, n, r, s, i));
        } else {
          let l = a();
          "catch" in l ||
            (Oe(
              `Component "${i}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`
            ),
            (l = Promise.resolve(l))),
            o.push(() =>
              l.then((c) => {
                if (!c)
                  return Promise.reject(
                    new Error(
                      `Couldn't resolve component "${i}" at "${s.path}"`
                    )
                  );
                const u = UO(c) ? c.default : c;
                s.components[i] = u;
                const d = (u.__vccOpts || u)[t];
                return d && Ar(d, n, r, s, i)();
              })
            );
        }
    }
  }
  return o;
}
function Uk(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function nh(e) {
  const t = Me(Ql),
    n = Me(Md),
    r = ie(() => t.resolve(te(e.to))),
    o = ie(() => {
      const { matched: l } = r.value,
        { length: c } = l,
        u = l[c - 1],
        f = n.matched;
      if (!u || !f.length) return -1;
      const d = f.findIndex(Wr.bind(null, u));
      if (d > -1) return d;
      const m = rh(l[c - 2]);
      return c > 1 && rh(u) === m && f[f.length - 1].path !== m
        ? f.findIndex(Wr.bind(null, l[c - 2]))
        : d;
    }),
    s = ie(() => o.value > -1 && Wk(n.params, r.value.params)),
    i = ie(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        Vy(n.params, r.value.params)
    );
  function a(l = {}) {
    return Vk(l)
      ? t[te(e.replace) ? "replace" : "push"](te(e.to)).catch(Ys)
      : Promise.resolve();
  }
  if (Jn) {
    const l = bn();
    if (l) {
      const c = { route: r.value, isActive: s.value, isExactActive: i.value };
      (l.__vrl_devtools = l.__vrl_devtools || []),
        l.__vrl_devtools.push(c),
        Tt(
          () => {
            (c.route = r.value),
              (c.isActive = s.value),
              (c.isExactActive = i.value);
          },
          { flush: "post" }
        );
    }
  }
  return {
    route: r,
    href: ie(() => r.value.href),
    isActive: s,
    isExactActive: i,
    navigate: a,
  };
}
const zk = Re({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: nh,
    setup(e, { slots: t }) {
      const n = gs(nh(e)),
        { options: r } = Me(Ql),
        o = ie(() => ({
          [oh(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [oh(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const s = t.default && t.default(n);
        return e.custom
          ? s
          : at(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value,
              },
              s
            );
      };
    },
  }),
  Bk = zk;
function Vk(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Wk(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (!Zt(o) || o.length !== r.length || r.some((s, i) => s !== o[i]))
      return !1;
  }
  return !0;
}
function rh(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const oh = (e, t, n) => e ?? t ?? n,
  Gk = Re({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      Kk();
      const r = Me(Xu),
        o = ie(() => e.route || r.value),
        s = Me(th, 0),
        i = ie(() => {
          let c = te(s);
          const { matched: u } = o.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        a = ie(() => o.value.matched[i.value]);
      bt(
        th,
        ie(() => i.value + 1)
      ),
        bt(Hk, a),
        bt(Xu, o);
      const l = re();
      return (
        xt(
          () => [l.value, a.value, e.name],
          ([c, u, f], [d, m, g]) => {
            u &&
              ((u.instances[f] = c),
              m &&
                m !== u &&
                c &&
                c === d &&
                (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
                u.updateGuards.size || (u.updateGuards = m.updateGuards))),
              c &&
                u &&
                (!m || !Wr(u, m) || !d) &&
                (u.enterCallbacks[f] || []).forEach((_) => _(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = o.value,
            u = e.name,
            f = a.value,
            d = f && f.components[u];
          if (!d) return sh(n.default, { Component: d, route: c });
          const m = f.props[u],
            g = m
              ? m === !0
                ? c.params
                : typeof m == "function"
                ? m(c)
                : m
              : null,
            T = at(
              d,
              Le({}, g, t, {
                onVnodeUnmounted: (y) => {
                  y.component.isUnmounted && (f.instances[u] = null);
                },
                ref: l,
              })
            );
          if (Jn && T.ref) {
            const y = {
              depth: i.value,
              name: f.name,
              path: f.path,
              meta: f.meta,
            };
            (Zt(T.ref) ? T.ref.map((v) => v.i) : [T.ref.i]).forEach((v) => {
              v.__vrv_devtools = y;
            });
          }
          return sh(n.default, { Component: T, route: c }) || T;
        }
      );
    },
  });
function sh(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Yk = Gk;
function Kk() {
  const e = bn(),
    t = e.parent && e.parent.type.name,
    n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (
    t &&
    (t === "KeepAlive" || t.includes("Transition")) &&
    typeof n == "object" &&
    n.name === "RouterView"
  ) {
    const r = t === "KeepAlive" ? "keep-alive" : "transition";
    Oe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`);
  }
}
function Ps(e, t) {
  const n = Le({}, e, {
    matched: e.matched.map((r) => rx(r, ["instances", "children", "aliasOf"])),
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n,
    },
  };
}
function aa(e) {
  return { _custom: { display: e } };
}
let qk = 0;
function Xk(e, t, n) {
  if (t.__hasDevtools) return;
  t.__hasDevtools = !0;
  const r = qk++;
  Ul(
    {
      id: "org.vuejs.router" + (r ? "." + r : ""),
      label: "Vue Router",
      packageName: "vue-router",
      homepage: "https://router.vuejs.org",
      logo: "https://router.vuejs.org/logo.png",
      componentStateTypes: ["Routing"],
      app: e,
    },
    (o) => {
      typeof o.now != "function" &&
        console.warn(
          "[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."
        ),
        o.on.inspectComponent((u, f) => {
          u.instanceData &&
            u.instanceData.state.push({
              type: "Routing",
              key: "$route",
              editable: !1,
              value: Ps(t.currentRoute.value, "Current Route"),
            });
        }),
        o.on.visitComponentTree(({ treeNode: u, componentInstance: f }) => {
          if (f.__vrv_devtools) {
            const d = f.__vrv_devtools;
            u.tags.push({
              label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
              textColor: 0,
              tooltip: "This component is rendered by &lt;router-view&gt;",
              backgroundColor: eb,
            });
          }
          Zt(f.__vrl_devtools) &&
            ((f.__devtoolsApi = o),
            f.__vrl_devtools.forEach((d) => {
              let m = rb,
                g = "";
              d.isExactActive
                ? ((m = nb), (g = "This is exactly active"))
                : d.isActive && ((m = tb), (g = "This link is active")),
                u.tags.push({
                  label: d.route.path,
                  textColor: 0,
                  tooltip: g,
                  backgroundColor: m,
                });
            }));
        }),
        xt(t.currentRoute, () => {
          l(),
            o.notifyComponentUpdate(),
            o.sendInspectorTree(a),
            o.sendInspectorState(a);
        });
      const s = "router:navigations:" + r;
      o.addTimelineLayer({
        id: s,
        label: `Router${r ? " " + r : ""} Navigations`,
        color: 4237508,
      }),
        t.onError((u, f) => {
          o.addTimelineEvent({
            layerId: s,
            event: {
              title: "Error during Navigation",
              subtitle: f.fullPath,
              logType: "error",
              time: o.now(),
              data: { error: u },
              groupId: f.meta.__navigationId,
            },
          });
        });
      let i = 0;
      t.beforeEach((u, f) => {
        const d = {
          guard: aa("beforeEach"),
          from: Ps(f, "Current Location during this navigation"),
          to: Ps(u, "Target location"),
        };
        Object.defineProperty(u.meta, "__navigationId", { value: i++ }),
          o.addTimelineEvent({
            layerId: s,
            event: {
              time: o.now(),
              title: "Start of navigation",
              subtitle: u.fullPath,
              data: d,
              groupId: u.meta.__navigationId,
            },
          });
      }),
        t.afterEach((u, f, d) => {
          const m = { guard: aa("afterEach") };
          d
            ? ((m.failure = {
                _custom: {
                  type: Error,
                  readOnly: !0,
                  display: d ? d.message : "",
                  tooltip: "Navigation Failure",
                  value: d,
                },
              }),
              (m.status = aa("❌")))
            : (m.status = aa("✅")),
            (m.from = Ps(f, "Current Location during this navigation")),
            (m.to = Ps(u, "Target location")),
            o.addTimelineEvent({
              layerId: s,
              event: {
                title: "End of navigation",
                subtitle: u.fullPath,
                time: o.now(),
                data: m,
                logType: d ? "warning" : "default",
                groupId: u.meta.__navigationId,
              },
            });
        });
      const a = "router-inspector:" + r;
      o.addInspector({
        id: a,
        label: "Routes" + (r ? " " + r : ""),
        icon: "book",
        treeFilterPlaceholder: "Search routes",
      });
      function l() {
        if (!c) return;
        const u = c;
        let f = n
          .getRoutes()
          .filter((d) => !d.parent || !d.parent.record.components);
        f.forEach(ib),
          u.filter && (f = f.filter((d) => Ju(d, u.filter.toLowerCase()))),
          f.forEach((d) => sb(d, t.currentRoute.value)),
          (u.rootNodes = f.map(ob));
      }
      let c;
      o.on.getInspectorTree((u) => {
        (c = u), u.app === e && u.inspectorId === a && l();
      }),
        o.on.getInspectorState((u) => {
          if (u.app === e && u.inspectorId === a) {
            const d = n.getRoutes().find((m) => m.record.__vd_id === u.nodeId);
            d && (u.state = { options: Qk(d) });
          }
        }),
        o.sendInspectorTree(a),
        o.sendInspectorState(a);
    }
  );
}
function Jk(e) {
  return e.optional ? (e.repeatable ? "*" : "?") : e.repeatable ? "+" : "";
}
function Qk(e) {
  const { record: t } = e,
    n = [{ editable: !1, key: "path", value: t.path }];
  return (
    t.name != null && n.push({ editable: !1, key: "name", value: t.name }),
    n.push({ editable: !1, key: "regexp", value: e.re }),
    e.keys.length &&
      n.push({
        editable: !1,
        key: "keys",
        value: {
          _custom: {
            type: null,
            readOnly: !0,
            display: e.keys.map((r) => `${r.name}${Jk(r)}`).join(" "),
            tooltip: "Param keys",
            value: e.keys,
          },
        },
      }),
    t.redirect != null &&
      n.push({ editable: !1, key: "redirect", value: t.redirect }),
    e.alias.length &&
      n.push({
        editable: !1,
        key: "aliases",
        value: e.alias.map((r) => r.record.path),
      }),
    Object.keys(e.record.meta).length &&
      n.push({ editable: !1, key: "meta", value: e.record.meta }),
    n.push({
      key: "score",
      editable: !1,
      value: {
        _custom: {
          type: null,
          readOnly: !0,
          display: e.score.map((r) => r.join(", ")).join(" | "),
          tooltip: "Score used to sort routes",
          value: e.score,
        },
      },
    }),
    n
  );
}
const eb = 15485081,
  tb = 2450411,
  nb = 8702998,
  Zk = 2282478,
  rb = 16486972,
  ex = 6710886;
function ob(e) {
  const t = [],
    { record: n } = e;
  n.name != null &&
    t.push({ label: String(n.name), textColor: 0, backgroundColor: Zk }),
    n.aliasOf && t.push({ label: "alias", textColor: 0, backgroundColor: rb }),
    e.__vd_match &&
      t.push({ label: "matches", textColor: 0, backgroundColor: eb }),
    e.__vd_exactActive &&
      t.push({ label: "exact", textColor: 0, backgroundColor: nb }),
    e.__vd_active &&
      t.push({ label: "active", textColor: 0, backgroundColor: tb }),
    n.redirect &&
      t.push({
        label:
          typeof n.redirect == "string"
            ? `redirect: ${n.redirect}`
            : "redirects",
        textColor: 16777215,
        backgroundColor: ex,
      });
  let r = n.__vd_id;
  return (
    r == null && ((r = String(tx++)), (n.__vd_id = r)),
    { id: r, label: n.path, tags: t, children: e.children.map(ob) }
  );
}
let tx = 0;
const nx = /^\/(.*)\/([a-z]*)$/;
function sb(e, t) {
  const n = t.matched.length && Wr(t.matched[t.matched.length - 1], e.record);
  (e.__vd_exactActive = e.__vd_active = n),
    n || (e.__vd_active = t.matched.some((r) => Wr(r, e.record))),
    e.children.forEach((r) => sb(r, t));
}
function ib(e) {
  (e.__vd_match = !1), e.children.forEach(ib);
}
function Ju(e, t) {
  const n = String(e.re).match(nx);
  if (((e.__vd_match = !1), !n || n.length < 3)) return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return (
      e.children.forEach((i) => Ju(i, t)),
      e.record.path !== "/" || t === "/"
        ? ((e.__vd_match = e.re.test(t)), !0)
        : !1
    );
  const o = e.record.path.toLowerCase(),
    s = di(o);
  return (!t.startsWith("/") && (s.includes(t) || o.includes(t))) ||
    s.startsWith(t) ||
    o.startsWith(t) ||
    (e.record.name && String(e.record.name).includes(t))
    ? !0
    : e.children.some((i) => Ju(i, t));
}
function rx(e, t) {
  const n = {};
  for (const r in e) t.includes(r) || (n[r] = e[r]);
  return n;
}
function ox(e) {
  const t = _k(e.routes, e),
    n = e.parseQuery || Mk,
    r = e.stringifyQuery || eh,
    o = e.history;
  if (!o)
    throw new Error(
      'Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.'
    );
  const s = As(),
    i = As(),
    a = As(),
    l = M_(br);
  let c = br;
  Jn &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = Kc.bind(null, (P) => "" + P),
    f = Kc.bind(null, Dk),
    d = Kc.bind(null, di);
  function m(P, X) {
    let J, Q;
    return (
      Gy(P) ? ((J = t.getRecordMatcher(P)), (Q = X)) : (Q = P), t.addRoute(Q, J)
    );
  }
  function g(P) {
    const X = t.getRecordMatcher(P);
    X
      ? t.removeRoute(X)
      : Oe(`Cannot remove non-existent route "${String(P)}"`);
  }
  function _() {
    return t.getRoutes().map((P) => P.record);
  }
  function T(P) {
    return !!t.getRecordMatcher(P);
  }
  function y(P, X) {
    if (((X = Le({}, X || l.value)), typeof P == "string")) {
      const h = qc(n, P, X.path),
        b = t.resolve({ path: h.path }, X),
        O = o.createHref(h.fullPath);
      return (
        O.startsWith("//")
          ? Oe(
              `Location "${P}" resolved to "${O}". A resolved location cannot start with multiple slashes.`
            )
          : b.matched.length ||
            Oe(`No match found for location with path "${P}"`),
        Le(h, b, {
          params: d(b.params),
          hash: di(h.hash),
          redirectedFrom: void 0,
          href: O,
        })
      );
    }
    let J;
    if ("path" in P)
      "params" in P &&
        !("name" in P) &&
        Object.keys(P.params).length &&
        Oe(
          `Path "${P.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`
        ),
        (J = Le({}, P, { path: qc(n, P.path, X.path).path }));
    else {
      const h = Le({}, P.params);
      for (const b in h) h[b] == null && delete h[b];
      (J = Le({}, P, { params: f(h) })), (X.params = f(X.params));
    }
    const Q = t.resolve(J, X),
      Ee = P.hash || "";
    Ee &&
      !Ee.startsWith("#") &&
      Oe(
        `A \`hash\` should always start with the character "#". Replace "${Ee}" with "#${Ee}".`
      ),
      (Q.params = u(d(Q.params)));
    const Fe = VO(r, Le({}, P, { hash: Nk(Ee), path: Q.path })),
      p = o.createHref(Fe);
    return (
      p.startsWith("//")
        ? Oe(
            `Location "${P}" resolved to "${p}". A resolved location cannot start with multiple slashes.`
          )
        : Q.matched.length ||
          Oe(
            `No match found for location with path "${
              "path" in P ? P.path : P
            }"`
          ),
      Le(
        {
          fullPath: Fe,
          hash: Ee,
          query: r === eh ? Fk(P.query) : P.query || {},
        },
        Q,
        { redirectedFrom: void 0, href: p }
      )
    );
  }
  function E(P) {
    return typeof P == "string" ? qc(n, P, l.value.path) : Le({}, P);
  }
  function v(P, X) {
    if (c !== P) return is(8, { from: X, to: P });
  }
  function w(P) {
    return S(P);
  }
  function C(P) {
    return w(Le(E(P), { replace: !0 }));
  }
  function I(P) {
    const X = P.matched[P.matched.length - 1];
    if (X && X.redirect) {
      const { redirect: J } = X;
      let Q = typeof J == "function" ? J(P) : J;
      if (
        (typeof Q == "string" &&
          ((Q = Q.includes("?") || Q.includes("#") ? (Q = E(Q)) : { path: Q }),
          (Q.params = {})),
        !("path" in Q) && !("name" in Q))
      )
        throw (
          (Oe(`Invalid redirect found:
${JSON.stringify(Q, null, 2)}
 when navigating to "${
   P.fullPath
 }". A redirect must contain a name or path. This will break in production.`),
          new Error("Invalid redirect"))
        );
      return Le(
        { query: P.query, hash: P.hash, params: "path" in Q ? {} : P.params },
        Q
      );
    }
  }
  function S(P, X) {
    const J = (c = y(P)),
      Q = l.value,
      Ee = P.state,
      Fe = P.force,
      p = P.replace === !0,
      h = I(J);
    if (h)
      return S(
        Le(E(h), {
          state: typeof h == "object" ? Le({}, Ee, h.state) : Ee,
          force: Fe,
          replace: p,
        }),
        X || J
      );
    const b = J;
    b.redirectedFrom = X;
    let O;
    return (
      !Fe &&
        Vm(r, Q, J) &&
        ((O = is(16, { to: b, from: Q })), ht(Q, Q, !0, !1)),
      (O ? Promise.resolve(O) : A(b, Q))
        .catch((x) => (Wn(x) ? (Wn(x, 2) ? x : Ne(x)) : U(x, b, Q)))
        .then((x) => {
          if (x) {
            if (Wn(x, 2))
              return Vm(r, y(x.to), b) &&
                X &&
                (X._count = X._count ? X._count + 1 : 1) > 30
                ? (Oe(`Detected a possibly infinite redirection in a navigation guard when going from "${Q.fullPath}" to "${b.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),
                  Promise.reject(
                    new Error("Infinite redirect in navigation guard")
                  ))
                : S(
                    Le({ replace: p }, E(x.to), {
                      state:
                        typeof x.to == "object" ? Le({}, Ee, x.to.state) : Ee,
                      force: Fe,
                    }),
                    X || b
                  );
          } else x = L(b, Q, !0, p, Ee);
          return D(b, Q, x), x;
        })
    );
  }
  function M(P, X) {
    const J = v(P, X);
    return J ? Promise.reject(J) : Promise.resolve();
  }
  function F(P) {
    const X = Rt.values().next().value;
    return X && typeof X.runWithContext == "function"
      ? X.runWithContext(P)
      : P();
  }
  function A(P, X) {
    let J;
    const [Q, Ee, Fe] = sx(P, X);
    J = Xc(Q.reverse(), "beforeRouteLeave", P, X);
    for (const h of Q)
      h.leaveGuards.forEach((b) => {
        J.push(Ar(b, P, X));
      });
    const p = M.bind(null, P, X);
    return (
      J.push(p),
      fn(J)
        .then(() => {
          J = [];
          for (const h of s.list()) J.push(Ar(h, P, X));
          return J.push(p), fn(J);
        })
        .then(() => {
          J = Xc(Ee, "beforeRouteUpdate", P, X);
          for (const h of Ee)
            h.updateGuards.forEach((b) => {
              J.push(Ar(b, P, X));
            });
          return J.push(p), fn(J);
        })
        .then(() => {
          J = [];
          for (const h of Fe)
            if (h.beforeEnter)
              if (Zt(h.beforeEnter))
                for (const b of h.beforeEnter) J.push(Ar(b, P, X));
              else J.push(Ar(h.beforeEnter, P, X));
          return J.push(p), fn(J);
        })
        .then(
          () => (
            P.matched.forEach((h) => (h.enterCallbacks = {})),
            (J = Xc(Fe, "beforeRouteEnter", P, X)),
            J.push(p),
            fn(J)
          )
        )
        .then(() => {
          J = [];
          for (const h of i.list()) J.push(Ar(h, P, X));
          return J.push(p), fn(J);
        })
        .catch((h) => (Wn(h, 8) ? h : Promise.reject(h)))
    );
  }
  function D(P, X, J) {
    a.list().forEach((Q) => F(() => Q(P, X, J)));
  }
  function L(P, X, J, Q, Ee) {
    const Fe = v(P, X);
    if (Fe) return Fe;
    const p = X === br,
      h = Jn ? history.state : {};
    J &&
      (Q || p
        ? o.replace(P.fullPath, Le({ scroll: p && h && h.scroll }, Ee))
        : o.push(P.fullPath, Ee)),
      (l.value = P),
      ht(P, X, J, p),
      Ne();
  }
  let Y;
  function ve() {
    Y ||
      (Y = o.listen((P, X, J) => {
        if (!mr.listening) return;
        const Q = y(P),
          Ee = I(Q);
        if (Ee) {
          S(Le(Ee, { replace: !0 }), Q).catch(Ys);
          return;
        }
        c = Q;
        const Fe = l.value;
        Jn && QO(Gm(Fe.fullPath, J.delta), Jl()),
          A(Q, Fe)
            .catch((p) =>
              Wn(p, 12)
                ? p
                : Wn(p, 2)
                ? (S(p.to, Q)
                    .then((h) => {
                      Wn(h, 20) &&
                        !J.delta &&
                        J.type === fi.pop &&
                        o.go(-1, !1);
                    })
                    .catch(Ys),
                  Promise.reject())
                : (J.delta && o.go(-J.delta, !1), U(p, Q, Fe))
            )
            .then((p) => {
              (p = p || L(Q, Fe, !1)),
                p &&
                  (J.delta && !Wn(p, 8)
                    ? o.go(-J.delta, !1)
                    : J.type === fi.pop && Wn(p, 20) && o.go(-1, !1)),
                D(Q, Fe, p);
            })
            .catch(Ys);
      }));
  }
  let ye = As(),
    Z = As(),
    W;
  function U(P, X, J) {
    Ne(P);
    const Q = Z.list();
    return (
      Q.length
        ? Q.forEach((Ee) => Ee(P, X, J))
        : (Oe("uncaught error during route navigation:"), console.error(P)),
      Promise.reject(P)
    );
  }
  function Ie() {
    return W && l.value !== br
      ? Promise.resolve()
      : new Promise((P, X) => {
          ye.add([P, X]);
        });
  }
  function Ne(P) {
    return (
      W ||
        ((W = !P),
        ve(),
        ye.list().forEach(([X, J]) => (P ? J(P) : X())),
        ye.reset()),
      P
    );
  }
  function ht(P, X, J, Q) {
    const { scrollBehavior: Ee } = e;
    if (!Jn || !Ee) return Promise.resolve();
    const Fe =
      (!J && ZO(Gm(P.fullPath, 0))) ||
      ((Q || !J) && history.state && history.state.scroll) ||
      null;
    return Gt()
      .then(() => Ee(P, X, Fe))
      .then((p) => p && JO(p))
      .catch((p) => U(p, P, X));
  }
  const Ke = (P) => o.go(P);
  let gt;
  const Rt = new Set(),
    mr = {
      currentRoute: l,
      listening: !0,
      addRoute: m,
      removeRoute: g,
      hasRoute: T,
      getRoutes: _,
      resolve: y,
      options: e,
      push: w,
      replace: C,
      go: Ke,
      back: () => Ke(-1),
      forward: () => Ke(1),
      beforeEach: s.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: Z.add,
      isReady: Ie,
      install(P) {
        const X = this;
        P.component("RouterLink", Bk),
          P.component("RouterView", Yk),
          (P.config.globalProperties.$router = X),
          Object.defineProperty(P.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => te(l),
          }),
          Jn &&
            !gt &&
            l.value === br &&
            ((gt = !0),
            w(o.location).catch((Ee) => {
              Oe("Unexpected error when starting the router:", Ee);
            }));
        const J = {};
        for (const Ee in br)
          Object.defineProperty(J, Ee, {
            get: () => l.value[Ee],
            enumerable: !0,
          });
        P.provide(Ql, X), P.provide(Md, N_(J)), P.provide(Xu, l);
        const Q = P.unmount;
        Rt.add(P),
          (P.unmount = function () {
            Rt.delete(P),
              Rt.size < 1 &&
                ((c = br),
                Y && Y(),
                (Y = null),
                (l.value = br),
                (gt = !1),
                (W = !1)),
              Q();
          }),
          Jn && Xk(P, X, t);
      },
    };
  function fn(P) {
    return P.reduce((X, J) => X.then(() => F(J)), Promise.resolve());
  }
  return mr;
}
function sx(e, t) {
  const n = [],
    r = [],
    o = [],
    s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const a = t.matched[i];
    a && (e.matched.find((c) => Wr(c, a)) ? r.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((c) => Wr(c, l)) || o.push(l));
  }
  return [n, r, o];
}
function ab() {
  return Me(Ql);
}
function UD() {
  return Me(Md);
}
function ih(e) {
  try {
    return JSON.parse(e || "{}");
  } catch (t) {
    return console.error("[SSR] On state deserialization -", t, e), {};
  }
}
const ah = (e) => {
  window.location.href = e;
};
function ix(e = ah) {
  return {
    writeResponse: () =>
      console.warn("[SSR] Do not call writeResponse in browser"),
    redirect: (t, n) => (t.startsWith("/") ? e(t) : ah(t)),
  };
}
const ax = async function (t, n) {
    !n && typeof t == "function" && ((n = t), (t = {}));
    const {
        url: r = new URL(window.location.href),
        transformState: o = ih,
        spaRedirect: s,
      } = t || {},
      i = await o(window.__INITIAL_STATE__, ih),
      { redirect: a, writeResponse: l } = ix(s),
      c = {
        url: r,
        isClient: !0,
        initialState: i || {},
        writeResponse: l,
        redirect: a,
      };
    return n && (await n(c)), c;
  },
  Hs = "/";
function Qu(e, t) {
  return e.startsWith(t) ? e : t + e;
}
function lx(e, t) {
  return e.startsWith(t) ? e.slice(t.length) : e;
}
function lh(e, t) {
  return e.endsWith(t) ? e : e + t;
}
function cx(e, t) {
  return e.endsWith(t) ? e.slice(0, -1 * t.length) : e;
}
function ux(e) {
  return (
    typeof e == "string" &&
      !(e || "").includes("://") &&
      (e = "http://e.g" + Qu(e, Hs)),
    new URL(e.toString())
  );
}
function fx(e, t) {
  (e = ux(e)), (e.pathname = lh(e.pathname, Hs));
  let n = lx(e.href, e.origin);
  return (
    t &&
      ((t = lh(Qu(t, Hs), Hs)),
      n.indexOf(t) === 0 && (n = Qu(n.replace(t, ""), Hs))),
    n
  );
}
function dx(e) {
  e.forEach((t) => {
    const n = t.props;
    t.props = (r) => {
      const o = n === !0 ? r.params : typeof n == "function" ? n(r) : n;
      return {
        ...(r.meta.hmr || {}).value,
        ...(r.meta.state || {}),
        ...(o || {}),
      };
    };
  });
}
const px = Re({
    name: "ClientOnly",
    setup(e, { slots: t }) {
      const n = re(!1);
      return (
        it(() => {
          n.value = !0;
        }),
        () => (n.value && t.default ? t.default() : null)
      );
    },
  }),
  mx = Symbol();
function hx(e, t) {
  e.provide(mx, t);
}
const gx = async function (
  t,
  {
    routes: n,
    base: r,
    routerOptions: o = {},
    pageProps: s = { passToPage: !0 },
    debug: i = {},
    ...a
  },
  l
) {
  s && s.passToPage && dx(n);
  const c = VT(t),
    u = new URL(window.location.href),
    f = r && cx(r({ url: u }), "/"),
    d = ox({ ...o, history: rk(f), routes: n }),
    m = await ax({ ...a, url: u, spaRedirect: (T) => d.push(T) });
  hx(c, m);
  let g,
    _ = !0;
  d.beforeEach((T) => {
    (_ || (g && g === T.path)) &&
      ((_ = !1), (g = T.path), (T.meta.state = m.initialState));
  }),
    l &&
      (await l({ app: c, router: d, initialRoute: d.resolve(fx(u, f)), ...m })),
    c.use(d),
    i.mount !== !1 && (await d.isReady(), c.mount("#app", !0));
};
var _x = Object.defineProperty,
  ch = Object.getOwnPropertySymbols,
  vx = Object.prototype.hasOwnProperty,
  yx = Object.prototype.propertyIsEnumerable,
  uh = (e, t, n) =>
    t in e
      ? _x(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  lb = (e, t) => {
    for (var n in t || (t = {})) vx.call(t, n) && uh(e, n, t[n]);
    if (ch) for (var n of ch(t)) yx.call(t, n) && uh(e, n, t[n]);
    return e;
  },
  Zl = (e) => typeof e == "function",
  ec = (e) => typeof e == "string",
  cb = (e) => ec(e) && e.trim().length > 0,
  bx = (e) => typeof e == "number",
  uo = (e) => typeof e > "u",
  pi = (e) => typeof e == "object" && e !== null,
  Ex = (e) => $n(e, "tag") && cb(e.tag),
  ub = (e) => window.TouchEvent && e instanceof TouchEvent,
  fb = (e) => $n(e, "component") && db(e.component),
  wx = (e) => Zl(e) || pi(e),
  db = (e) => !uo(e) && (ec(e) || wx(e) || fb(e)),
  fh = (e) =>
    pi(e) &&
    ["height", "width", "right", "left", "top", "bottom"].every((t) =>
      bx(e[t])
    ),
  $n = (e, t) => (pi(e) || Zl(e)) && t in e,
  Tx = (
    (e) => () =>
      e++
  )(0);
function Jc(e) {
  return ub(e) ? e.targetTouches[0].clientX : e.clientX;
}
function dh(e) {
  return ub(e) ? e.targetTouches[0].clientY : e.clientY;
}
var Sx = (e) => {
    uo(e.remove) ? e.parentNode && e.parentNode.removeChild(e) : e.remove();
  },
  Mi = (e) =>
    fb(e)
      ? Mi(e.component)
      : Ex(e)
      ? Re({
          render() {
            return e;
          },
        })
      : typeof e == "string"
      ? e
      : de(te(e)),
  Cx = (e) => {
    if (typeof e == "string") return e;
    const t = $n(e, "props") && pi(e.props) ? e.props : {},
      n = $n(e, "listeners") && pi(e.listeners) ? e.listeners : {};
    return { component: Mi(e), props: t, listeners: n };
  },
  Ox = () => typeof window < "u",
  tc = class {
    constructor() {
      this.allHandlers = {};
    }
    getHandlers(e) {
      return this.allHandlers[e] || [];
    }
    on(e, t) {
      const n = this.getHandlers(e);
      n.push(t), (this.allHandlers[e] = n);
    }
    off(e, t) {
      const n = this.getHandlers(e);
      n.splice(n.indexOf(t) >>> 0, 1);
    }
    emit(e, t) {
      this.getHandlers(e).forEach((r) => r(t));
    }
  },
  kx = (e) => ["on", "off", "emit"].every((t) => $n(e, t) && Zl(e[t])),
  Vt;
(function (e) {
  (e.SUCCESS = "success"),
    (e.ERROR = "error"),
    (e.WARNING = "warning"),
    (e.INFO = "info"),
    (e.DEFAULT = "default");
})(Vt || (Vt = {}));
var mi;
(function (e) {
  (e.TOP_LEFT = "top-left"),
    (e.TOP_CENTER = "top-center"),
    (e.TOP_RIGHT = "top-right"),
    (e.BOTTOM_LEFT = "bottom-left"),
    (e.BOTTOM_CENTER = "bottom-center"),
    (e.BOTTOM_RIGHT = "bottom-right");
})(mi || (mi = {}));
var qt;
(function (e) {
  (e.ADD = "add"),
    (e.DISMISS = "dismiss"),
    (e.UPDATE = "update"),
    (e.CLEAR = "clear"),
    (e.UPDATE_DEFAULTS = "update_defaults");
})(qt || (qt = {}));
var hn = "Vue-Toastification",
  pn = {
    type: { type: String, default: Vt.DEFAULT },
    classNames: { type: [String, Array], default: () => [] },
    trueBoolean: { type: Boolean, default: !0 },
  },
  pb = {
    type: pn.type,
    customIcon: { type: [String, Boolean, Object, Function], default: !0 },
  },
  Da = {
    component: { type: [String, Object, Function, Boolean], default: "button" },
    classNames: pn.classNames,
    showOnHover: { type: Boolean, default: !1 },
    ariaLabel: { type: String, default: "close" },
  },
  Zu = {
    timeout: { type: [Number, Boolean], default: 5e3 },
    hideProgressBar: { type: Boolean, default: !1 },
    isRunning: { type: Boolean, default: !1 },
  },
  mb = { transition: { type: [Object, String], default: `${hn}__bounce` } },
  xx = {
    position: { type: String, default: mi.TOP_RIGHT },
    draggable: pn.trueBoolean,
    draggablePercent: { type: Number, default: 0.6 },
    pauseOnFocusLoss: pn.trueBoolean,
    pauseOnHover: pn.trueBoolean,
    closeOnClick: pn.trueBoolean,
    timeout: Zu.timeout,
    hideProgressBar: Zu.hideProgressBar,
    toastClassName: pn.classNames,
    bodyClassName: pn.classNames,
    icon: pb.customIcon,
    closeButton: Da.component,
    closeButtonClassName: Da.classNames,
    showCloseButtonOnHover: Da.showOnHover,
    accessibility: {
      type: Object,
      default: () => ({ toastRole: "alert", closeButtonLabel: "close" }),
    },
    rtl: { type: Boolean, default: !1 },
    eventBus: { type: Object, required: !1, default: () => new tc() },
  },
  Ix = {
    id: { type: [String, Number], required: !0, default: 0 },
    type: pn.type,
    content: { type: [String, Object, Function], required: !0, default: "" },
    onClick: { type: Function, default: void 0 },
    onClose: { type: Function, default: void 0 },
  },
  Ax = {
    container: { type: [Object, Function], default: () => document.body },
    newestOnTop: pn.trueBoolean,
    maxToasts: { type: Number, default: 20 },
    transition: mb.transition,
    toastDefaults: Object,
    filterBeforeCreate: { type: Function, default: (e) => e },
    filterToasts: { type: Function, default: (e) => e },
    containerClassName: pn.classNames,
    onMounted: Function,
    shareAppContext: [Boolean, Object],
  },
  rr = {
    CORE_TOAST: xx,
    TOAST: Ix,
    CONTAINER: Ax,
    PROGRESS_BAR: Zu,
    ICON: pb,
    TRANSITION: mb,
    CLOSE_BUTTON: Da,
  },
  hb = Re({
    name: "VtProgressBar",
    props: rr.PROGRESS_BAR,
    data() {
      return { hasClass: !0 };
    },
    computed: {
      style() {
        return {
          animationDuration: `${this.timeout}ms`,
          animationPlayState: this.isRunning ? "running" : "paused",
          opacity: this.hideProgressBar ? 0 : 1,
        };
      },
      cpClass() {
        return this.hasClass ? `${hn}__progress-bar` : "";
      },
    },
    watch: {
      timeout() {
        (this.hasClass = !1), this.$nextTick(() => (this.hasClass = !0));
      },
    },
    mounted() {
      this.$el.addEventListener("animationend", this.animationEnded);
    },
    beforeUnmount() {
      this.$el.removeEventListener("animationend", this.animationEnded);
    },
    methods: {
      animationEnded() {
        this.$emit("close-toast");
      },
    },
  });
function Px(e, t) {
  return se(), _e("div", { style: Ii(e.style), class: Mt(e.cpClass) }, null, 6);
}
hb.render = Px;
var Rx = hb,
  gb = Re({
    name: "VtCloseButton",
    props: rr.CLOSE_BUTTON,
    computed: {
      buttonComponent() {
        return this.component !== !1 ? Mi(this.component) : "button";
      },
      classes() {
        const e = [`${hn}__close-button`];
        return (
          this.showOnHover && e.push("show-on-hover"), e.concat(this.classNames)
        );
      },
    },
  }),
  Nx = nt(" × ");
function Lx(e, t) {
  return (
    se(),
    tt(
      $l(e.buttonComponent),
      Fl({ "aria-label": e.ariaLabel, class: e.classes }, e.$attrs),
      { default: be(() => [Nx]), _: 1 },
      16,
      ["aria-label", "class"]
    )
  );
}
gb.render = Lx;
var $x = gb,
  _b = {},
  Dx = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "check-circle",
    class: "svg-inline--fa fa-check-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  Mx = N(
    "path",
    {
      fill: "currentColor",
      d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",
    },
    null,
    -1
  ),
  Fx = [Mx];
function Hx(e, t) {
  return se(), _e("svg", Dx, Fx);
}
_b.render = Hx;
var jx = _b,
  vb = {},
  Ux = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "info-circle",
    class: "svg-inline--fa fa-info-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  zx = N(
    "path",
    {
      fill: "currentColor",
      d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",
    },
    null,
    -1
  ),
  Bx = [zx];
function Vx(e, t) {
  return se(), _e("svg", Ux, Bx);
}
vb.render = Vx;
var ph = vb,
  yb = {},
  Wx = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "exclamation-circle",
    class: "svg-inline--fa fa-exclamation-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  Gx = N(
    "path",
    {
      fill: "currentColor",
      d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
    },
    null,
    -1
  ),
  Yx = [Gx];
function Kx(e, t) {
  return se(), _e("svg", Wx, Yx);
}
yb.render = Kx;
var qx = yb,
  bb = {},
  Xx = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "exclamation-triangle",
    class: "svg-inline--fa fa-exclamation-triangle fa-w-18",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
  },
  Jx = N(
    "path",
    {
      fill: "currentColor",
      d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
    },
    null,
    -1
  ),
  Qx = [Jx];
function Zx(e, t) {
  return se(), _e("svg", Xx, Qx);
}
bb.render = Zx;
var eI = bb,
  Eb = Re({
    name: "VtIcon",
    props: rr.ICON,
    computed: {
      customIconChildren() {
        return $n(this.customIcon, "iconChildren")
          ? this.trimValue(this.customIcon.iconChildren)
          : "";
      },
      customIconClass() {
        return ec(this.customIcon)
          ? this.trimValue(this.customIcon)
          : $n(this.customIcon, "iconClass")
          ? this.trimValue(this.customIcon.iconClass)
          : "";
      },
      customIconTag() {
        return $n(this.customIcon, "iconTag")
          ? this.trimValue(this.customIcon.iconTag, "i")
          : "i";
      },
      hasCustomIcon() {
        return this.customIconClass.length > 0;
      },
      component() {
        return this.hasCustomIcon
          ? this.customIconTag
          : db(this.customIcon)
          ? Mi(this.customIcon)
          : this.iconTypeComponent;
      },
      iconTypeComponent() {
        return {
          [Vt.DEFAULT]: ph,
          [Vt.INFO]: ph,
          [Vt.SUCCESS]: jx,
          [Vt.ERROR]: eI,
          [Vt.WARNING]: qx,
        }[this.type];
      },
      iconClasses() {
        const e = [`${hn}__icon`];
        return this.hasCustomIcon ? e.concat(this.customIconClass) : e;
      },
    },
    methods: {
      trimValue(e, t = "") {
        return cb(e) ? e.trim() : t;
      },
    },
  });
function tI(e, t) {
  return (
    se(),
    tt(
      $l(e.component),
      { class: Mt(e.iconClasses) },
      { default: be(() => [nt(Ot(e.customIconChildren), 1)]), _: 1 },
      8,
      ["class"]
    )
  );
}
Eb.render = tI;
var nI = Eb,
  wb = Re({
    name: "VtToast",
    components: { ProgressBar: Rx, CloseButton: $x, Icon: nI },
    inheritAttrs: !1,
    props: Object.assign({}, rr.CORE_TOAST, rr.TOAST),
    data() {
      return {
        isRunning: !0,
        disableTransitions: !1,
        beingDragged: !1,
        dragStart: 0,
        dragPos: { x: 0, y: 0 },
        dragRect: {},
      };
    },
    computed: {
      classes() {
        const e = [
          `${hn}__toast`,
          `${hn}__toast--${this.type}`,
          `${this.position}`,
        ].concat(this.toastClassName);
        return (
          this.disableTransitions && e.push("disable-transition"),
          this.rtl && e.push(`${hn}__toast--rtl`),
          e
        );
      },
      bodyClasses() {
        return [
          `${hn}__toast-${ec(this.content) ? "body" : "component-body"}`,
        ].concat(this.bodyClassName);
      },
      draggableStyle() {
        return this.dragStart === this.dragPos.x
          ? {}
          : this.beingDragged
          ? {
              transform: `translateX(${this.dragDelta}px)`,
              opacity: 1 - Math.abs(this.dragDelta / this.removalDistance),
            }
          : {
              transition: "transform 0.2s, opacity 0.2s",
              transform: "translateX(0)",
              opacity: 1,
            };
      },
      dragDelta() {
        return this.beingDragged ? this.dragPos.x - this.dragStart : 0;
      },
      removalDistance() {
        return fh(this.dragRect)
          ? (this.dragRect.right - this.dragRect.left) * this.draggablePercent
          : 0;
      },
    },
    mounted() {
      this.draggable && this.draggableSetup(),
        this.pauseOnFocusLoss && this.focusSetup();
    },
    beforeUnmount() {
      this.draggable && this.draggableCleanup(),
        this.pauseOnFocusLoss && this.focusCleanup();
    },
    methods: {
      hasProp: $n,
      getVueComponentFromObj: Mi,
      closeToast() {
        this.eventBus.emit(qt.DISMISS, this.id);
      },
      clickHandler() {
        this.onClick && this.onClick(this.closeToast),
          this.closeOnClick &&
            (!this.beingDragged || this.dragStart === this.dragPos.x) &&
            this.closeToast();
      },
      timeoutHandler() {
        this.closeToast();
      },
      hoverPause() {
        this.pauseOnHover && (this.isRunning = !1);
      },
      hoverPlay() {
        this.pauseOnHover && (this.isRunning = !0);
      },
      focusPause() {
        this.isRunning = !1;
      },
      focusPlay() {
        this.isRunning = !0;
      },
      focusSetup() {
        addEventListener("blur", this.focusPause),
          addEventListener("focus", this.focusPlay);
      },
      focusCleanup() {
        removeEventListener("blur", this.focusPause),
          removeEventListener("focus", this.focusPlay);
      },
      draggableSetup() {
        const e = this.$el;
        e.addEventListener("touchstart", this.onDragStart, { passive: !0 }),
          e.addEventListener("mousedown", this.onDragStart),
          addEventListener("touchmove", this.onDragMove, { passive: !1 }),
          addEventListener("mousemove", this.onDragMove),
          addEventListener("touchend", this.onDragEnd),
          addEventListener("mouseup", this.onDragEnd);
      },
      draggableCleanup() {
        const e = this.$el;
        e.removeEventListener("touchstart", this.onDragStart),
          e.removeEventListener("mousedown", this.onDragStart),
          removeEventListener("touchmove", this.onDragMove),
          removeEventListener("mousemove", this.onDragMove),
          removeEventListener("touchend", this.onDragEnd),
          removeEventListener("mouseup", this.onDragEnd);
      },
      onDragStart(e) {
        (this.beingDragged = !0),
          (this.dragPos = { x: Jc(e), y: dh(e) }),
          (this.dragStart = Jc(e)),
          (this.dragRect = this.$el.getBoundingClientRect());
      },
      onDragMove(e) {
        this.beingDragged &&
          (e.preventDefault(),
          this.isRunning && (this.isRunning = !1),
          (this.dragPos = { x: Jc(e), y: dh(e) }));
      },
      onDragEnd() {
        this.beingDragged &&
          (Math.abs(this.dragDelta) >= this.removalDistance
            ? ((this.disableTransitions = !0),
              this.$nextTick(() => this.closeToast()))
            : setTimeout(() => {
                (this.beingDragged = !1),
                  fh(this.dragRect) &&
                  this.pauseOnHover &&
                  this.dragRect.bottom >= this.dragPos.y &&
                  this.dragPos.y >= this.dragRect.top &&
                  this.dragRect.left <= this.dragPos.x &&
                  this.dragPos.x <= this.dragRect.right
                    ? (this.isRunning = !1)
                    : (this.isRunning = !0);
              }));
      },
    },
  }),
  rI = ["role"];
function oI(e, t) {
  const n = ln("Icon"),
    r = ln("CloseButton"),
    o = ln("ProgressBar");
  return (
    se(),
    _e(
      "div",
      {
        class: Mt(e.classes),
        style: Ii(e.draggableStyle),
        onClick:
          t[0] || (t[0] = (...s) => e.clickHandler && e.clickHandler(...s)),
        onMouseenter:
          t[1] || (t[1] = (...s) => e.hoverPause && e.hoverPause(...s)),
        onMouseleave:
          t[2] || (t[2] = (...s) => e.hoverPlay && e.hoverPlay(...s)),
      },
      [
        e.icon
          ? (se(),
            tt(n, { key: 0, "custom-icon": e.icon, type: e.type }, null, 8, [
              "custom-icon",
              "type",
            ]))
          : we("v-if", !0),
        N(
          "div",
          {
            role: e.accessibility.toastRole || "alert",
            class: Mt(e.bodyClasses),
          },
          [
            typeof e.content == "string"
              ? (se(), _e(Ae, { key: 0 }, [nt(Ot(e.content), 1)], 2112))
              : (se(),
                tt(
                  $l(e.getVueComponentFromObj(e.content)),
                  Fl(
                    { key: 1, "toast-id": e.id },
                    e.hasProp(e.content, "props") ? e.content.props : {},
                    fw(
                      e.hasProp(e.content, "listeners")
                        ? e.content.listeners
                        : {}
                    ),
                    { onCloseToast: e.closeToast }
                  ),
                  null,
                  16,
                  ["toast-id", "onCloseToast"]
                )),
          ],
          10,
          rI
        ),
        e.closeButton
          ? (se(),
            tt(
              r,
              {
                key: 1,
                component: e.closeButton,
                "class-names": e.closeButtonClassName,
                "show-on-hover": e.showCloseButtonOnHover,
                "aria-label": e.accessibility.closeButtonLabel,
                onClick: HT(e.closeToast, ["stop"]),
              },
              null,
              8,
              [
                "component",
                "class-names",
                "show-on-hover",
                "aria-label",
                "onClick",
              ]
            ))
          : we("v-if", !0),
        e.timeout
          ? (se(),
            tt(
              o,
              {
                key: 2,
                "is-running": e.isRunning,
                "hide-progress-bar": e.hideProgressBar,
                timeout: e.timeout,
                onCloseToast: e.timeoutHandler,
              },
              null,
              8,
              ["is-running", "hide-progress-bar", "timeout", "onCloseToast"]
            ))
          : we("v-if", !0),
      ],
      38
    )
  );
}
wb.render = oI;
var sI = wb,
  Tb = Re({
    name: "VtTransition",
    props: rr.TRANSITION,
    emits: ["leave"],
    methods: {
      hasProp: $n,
      leave(e) {
        e instanceof HTMLElement &&
          ((e.style.left = e.offsetLeft + "px"),
          (e.style.top = e.offsetTop + "px"),
          (e.style.width = getComputedStyle(e).width),
          (e.style.position = "absolute"));
      },
    },
  });
function iI(e, t) {
  return (
    se(),
    tt(
      AT,
      {
        tag: "div",
        "enter-active-class": e.transition.enter
          ? e.transition.enter
          : `${e.transition}-enter-active`,
        "move-class": e.transition.move
          ? e.transition.move
          : `${e.transition}-move`,
        "leave-active-class": e.transition.leave
          ? e.transition.leave
          : `${e.transition}-leave-active`,
        onLeave: e.leave,
      },
      { default: be(() => [uw(e.$slots, "default")]), _: 3 },
      8,
      ["enter-active-class", "move-class", "leave-active-class", "onLeave"]
    )
  );
}
Tb.render = iI;
var aI = Tb,
  Sb = Re({
    name: "VueToastification",
    devtools: { hide: !0 },
    components: { Toast: sI, VtTransition: aI },
    props: Object.assign({}, rr.CORE_TOAST, rr.CONTAINER, rr.TRANSITION),
    data() {
      return {
        count: 0,
        positions: Object.values(mi),
        toasts: {},
        defaults: {},
      };
    },
    computed: {
      toastArray() {
        return Object.values(this.toasts);
      },
      filteredToasts() {
        return this.defaults.filterToasts(this.toastArray);
      },
    },
    beforeMount() {
      const e = this.eventBus;
      e.on(qt.ADD, this.addToast),
        e.on(qt.CLEAR, this.clearToasts),
        e.on(qt.DISMISS, this.dismissToast),
        e.on(qt.UPDATE, this.updateToast),
        e.on(qt.UPDATE_DEFAULTS, this.updateDefaults),
        (this.defaults = this.$props);
    },
    mounted() {
      this.setup(this.container);
    },
    methods: {
      async setup(e) {
        Zl(e) && (e = await e()), Sx(this.$el), e.appendChild(this.$el);
      },
      setToast(e) {
        uo(e.id) || (this.toasts[e.id] = e);
      },
      addToast(e) {
        e.content = Cx(e.content);
        const t = Object.assign(
            {},
            this.defaults,
            e.type &&
              this.defaults.toastDefaults &&
              this.defaults.toastDefaults[e.type],
            e
          ),
          n = this.defaults.filterBeforeCreate(t, this.toastArray);
        n && this.setToast(n);
      },
      dismissToast(e) {
        const t = this.toasts[e];
        !uo(t) && !uo(t.onClose) && t.onClose(), delete this.toasts[e];
      },
      clearToasts() {
        Object.keys(this.toasts).forEach((e) => {
          this.dismissToast(e);
        });
      },
      getPositionToasts(e) {
        const t = this.filteredToasts
          .filter((n) => n.position === e)
          .slice(0, this.defaults.maxToasts);
        return this.defaults.newestOnTop ? t.reverse() : t;
      },
      updateDefaults(e) {
        uo(e.container) || this.setup(e.container),
          (this.defaults = Object.assign({}, this.defaults, e));
      },
      updateToast({ id: e, options: t, create: n }) {
        this.toasts[e]
          ? (t.timeout && t.timeout === this.toasts[e].timeout && t.timeout++,
            this.setToast(Object.assign({}, this.toasts[e], t)))
          : n && this.addToast(Object.assign({}, { id: e }, t));
      },
      getClasses(e) {
        return [`${hn}__container`, e].concat(this.defaults.containerClassName);
      },
    },
  });
function lI(e, t) {
  const n = ln("Toast"),
    r = ln("VtTransition");
  return (
    se(),
    _e("div", null, [
      (se(!0),
      _e(
        Ae,
        null,
        To(
          e.positions,
          (o) => (
            se(),
            _e("div", { key: o }, [
              ae(
                r,
                {
                  transition: e.defaults.transition,
                  class: Mt(e.getClasses(o)),
                },
                {
                  default: be(() => [
                    (se(!0),
                    _e(
                      Ae,
                      null,
                      To(
                        e.getPositionToasts(o),
                        (s) => (se(), tt(n, Fl({ key: s.id }, s), null, 16))
                      ),
                      128
                    )),
                  ]),
                  _: 2,
                },
                1032,
                ["transition", "class"]
              ),
            ])
          )
        ),
        128
      )),
    ])
  );
}
Sb.render = lI;
var cI = Sb,
  mh = (e = {}, t = !0) => {
    const n = (e.eventBus = e.eventBus || new tc());
    t &&
      Gt(() => {
        const s = BT(cI, lb({}, e)),
          i = s.mount(document.createElement("div")),
          a = e.onMounted;
        if ((uo(a) || a(i, s), e.shareAppContext)) {
          const l = e.shareAppContext;
          l === !0
            ? console.warn(
                `[${hn}] App to share context with was not provided.`
              )
            : ((s._context.components = l._context.components),
              (s._context.directives = l._context.directives),
              (s._context.mixins = l._context.mixins),
              (s._context.provides = l._context.provides),
              (s.config.globalProperties = l.config.globalProperties));
        }
      });
    const r = (s, i) => {
      const a = Object.assign({}, { id: Tx(), type: Vt.DEFAULT }, i, {
        content: s,
      });
      return n.emit(qt.ADD, a), a.id;
    };
    (r.clear = () => n.emit(qt.CLEAR, void 0)),
      (r.updateDefaults = (s) => {
        n.emit(qt.UPDATE_DEFAULTS, s);
      }),
      (r.dismiss = (s) => {
        n.emit(qt.DISMISS, s);
      });
    function o(s, { content: i, options: a }, l = !1) {
      const c = Object.assign({}, a, { content: i });
      n.emit(qt.UPDATE, { id: s, options: c, create: l });
    }
    return (
      (r.update = o),
      (r.success = (s, i) => r(s, Object.assign({}, i, { type: Vt.SUCCESS }))),
      (r.info = (s, i) => r(s, Object.assign({}, i, { type: Vt.INFO }))),
      (r.error = (s, i) => r(s, Object.assign({}, i, { type: Vt.ERROR }))),
      (r.warning = (s, i) => r(s, Object.assign({}, i, { type: Vt.WARNING }))),
      r
    );
  },
  uI = () => {
    const e = () => console.warn(`[${hn}] This plugin does not support SSR!`);
    return new Proxy(e, {
      get() {
        return e;
      },
    });
  };
function hi(e) {
  return Ox() ? (kx(e) ? mh({ eventBus: e }, !1) : mh(e, !0)) : uI();
}
var nc = Symbol("VueToastification"),
  Fd = new tc(),
  fI = (e, t) => {
    (t == null ? void 0 : t.shareAppContext) === !0 && (t.shareAppContext = e);
    const n = hi(lb({ eventBus: Fd }, t));
    e.provide(nc, n);
  },
  dI = (e) => {
    const t = hi(e);
    bn() && bt(nc, t);
  },
  pI = (e) => {
    if (e) return hi(e);
    const t = bn() ? Me(nc, void 0) : void 0;
    return t || hi(Fd);
  },
  Cb = fI;
const mI = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        EventBus: tc,
        get POSITION() {
          return mi;
        },
        get TYPE() {
          return Vt;
        },
        createToastInterface: hi,
        default: Cb,
        globalEventBus: Fd,
        provideToast: dI,
        toastInjectionKey: nc,
        useToast: pI,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  hI = { class: "flex h-16 items-center justify-between" },
  gI = { class: "flex items-center" },
  _I = { class: "flex-shrink-0" },
  vI = { class: "hidden sm:ml-20 sm:block" },
  yI = { class: "flex space-x-4" },
  bI = { class: "hidden sm:ml-6 sm:block" },
  EI = { class: "flex items-center" },
  wI = N("span", { class: "sr-only" }, "Open user menu", -1),
  TI = ["src"],
  SI = {
    key: 1,
    class: "inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100",
  },
  CI = N(
    "svg",
    {
      class: "h-full w-full text-gray-300",
      fill: "currentColor",
      viewBox: "0 0 24 24",
    },
    [
      N("path", {
        d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z",
      }),
    ],
    -1
  ),
  OI = N("span", null, " Current Plan", -1),
  kI = {
    class: "bg-green-400 text-white px-2 py-1 rounded-md capitalize ml-2",
  },
  xI = ["onClick"],
  II = N("span", { "aria-hidden": "true" }, "→", -1),
  AI = { class: "-mr-2 flex sm:hidden" },
  PI = N("span", { class: "sr-only" }, "Open main menu", -1),
  RI = { key: 0, class: "border-t border-gray-700 pb-3 pt-4" },
  NI = { class: "flex items-center px-5" },
  LI = { class: "flex-shrink-0" },
  $I = ["src"],
  DI = {
    key: 1,
    class: "inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100",
  },
  MI = N(
    "svg",
    {
      class: "h-full w-full text-gray-300",
      fill: "currentColor",
      viewBox: "0 0 24 24",
    },
    [
      N("path", {
        d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z",
      }),
    ],
    -1
  ),
  FI = [MI],
  HI = { key: 0, class: "ml-3" },
  jI = { class: "text-base font-medium text-white" },
  UI = { class: "text-sm font-medium text-gray-400" },
  zI = { key: 1, class: "ml-3 text-gray-400" },
  BI = { class: "mt-3 pt-2 space-y-1 px-2 border-t border-gray-700" },
  VI = N("span", null, " Current Plan", -1),
  WI = {
    class: "bg-green-400 text-white px-2 py-1 rounded-md capitalize ml-2",
  },
  GI = { key: 0, class: "mt-3 pt-2 space-y-1 px-2 border-t border-gray-700" },
  YI = { class: "mt-3 py-2 space-y-1 px-2 border-t border-gray-700" },
  KI = { key: 1, class: "border-t border-gray-700 pb-3 pt-4 px-2" },
  qI = ["onClick"],
  XI = N("span", { "aria-hidden": "true" }, "→", -1),
  JI = {
    __name: "AppHeader",
    setup(e) {
      const { useToast: t } = mI,
        n = ab(),
        { currentUser: r } = $u(yi()),
        { logout: o } = yi();
      function s(u) {
        return n.currentRoute.value.path === u;
      }
      function i() {
        n.push("/login");
      }
      const a = re(!1),
        l = t();
      async function c(u) {
        r.value.membership.isCanceled = !0;
        try {
          await dl.post("/membership/cancel", null, {
            params: { cancellationReason: u },
          }),
            l.success("Your subscription is canceled", { timeout: 2e3 });
        } catch {
          l.error(
            "Something wrong happened while canceling your subscription",
            { timeout: 2e3 }
          );
        }
      }
      return (u, f) => {
        const d = jO,
          m = _C,
          g = ln("RouterLink"),
          _ = ln("router-link");
        return (
          se(),
          _e(
            Ae,
            null,
            [
              we(" <ClientOnly> "),
              ae(
                te(aO),
                {
                  as: "nav",
                  class: "bg-primary absolute inset-x-0 top-0 z-50",
                },
                {
                  default: be(({ open: T, close: y }) => [
                    ae(
                      d,
                      {
                        open: te(a),
                        onCloseModal: f[0] || (f[0] = (E) => (a.value = !1)),
                        onConfirm: c,
                      },
                      null,
                      8,
                      ["open"]
                    ),
                    N(
                      "div",
                      {
                        class: Mt([
                          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                          { "!bg-primary": T },
                        ]),
                      },
                      [
                        N("div", hI, [
                          N("div", gI, [
                            N("div", _I, [ae(m)]),
                            N("div", vI, [
                              N("div", yI, [
                                we(
                                  ' Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" '
                                ),
                                we(
                                  ' <a href="#" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Dashboar '
                                ),
                                (se(!0),
                                _e(
                                  Ae,
                                  null,
                                  To(
                                    te(gh),
                                    (E) => (
                                      se(),
                                      tt(
                                        g,
                                        {
                                          key: E.name,
                                          to: E.path,
                                          class: Mt([
                                            "rounded-md px-3 py-2 text-sm font-medium",
                                            {
                                              "bg-white text-primary": s(
                                                E.path
                                              ),
                                              "text-gray-300 hover:bg-white hover:text-primary":
                                                !s(E.path),
                                            },
                                          ]),
                                        },
                                        {
                                          default: be(() => [
                                            nt(Ot(E.name), 1),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["to", "class"]
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]),
                            ]),
                          ]),
                          N("div", bI, [
                            N("div", EI, [
                              we(` <button
              type="button"
              class="rounded-full bg-primary p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button> `),
                              we(" Profile dropdown "),
                              te(r)
                                ? (se(),
                                  tt(
                                    te(mO),
                                    {
                                      key: 0,
                                      as: "div",
                                      class: "relative ml-3",
                                    },
                                    {
                                      default: be(() => [
                                        N("div", null, [
                                          ae(
                                            te(hO),
                                            {
                                              class:
                                                "flex rounded-full bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                                            },
                                            {
                                              default: be(() => [
                                                wI,
                                                te(r).picture
                                                  ? (se(),
                                                    _e(
                                                      "img",
                                                      {
                                                        key: 0,
                                                        class:
                                                          "h-8 w-8 rounded-full",
                                                        src: te(r).picture,
                                                        alt: "",
                                                      },
                                                      null,
                                                      8,
                                                      TI
                                                    ))
                                                  : (se(),
                                                    _e("span", SI, [
                                                      nt("\\ "),
                                                      CI,
                                                    ])),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        ae(
                                          md,
                                          {
                                            "enter-active-class":
                                              "transition ease-out duration-100",
                                            "enter-from-class":
                                              "transform opacity-0 scale-95",
                                            "enter-to-class":
                                              "transform opacity-100 scale-100",
                                            "leave-active-class":
                                              "transition ease-in duration-75",
                                            "leave-from-class":
                                              "transform opacity-100 scale-100",
                                            "leave-to-class":
                                              "transform opacity-0 scale-95",
                                          },
                                          {
                                            default: be(() => [
                                              ae(
                                                te(gO),
                                                {
                                                  class:
                                                    "absolute right-0 z-10 mt-2 min-w-54 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-left",
                                                },
                                                {
                                                  default: be(() => [
                                                    ae(te(Gc), null, {
                                                      default: be(
                                                        ({ active: E }) => {
                                                          var v;
                                                          return [
                                                            N(
                                                              "a",
                                                              {
                                                                href: "#",
                                                                class: Mt([
                                                                  "flex justify-between items-center",
                                                                  [
                                                                    E
                                                                      ? "bg-gray-100"
                                                                      : "",
                                                                    "block px-4 py-2 text-sm text-gray-700",
                                                                  ],
                                                                ]),
                                                              },
                                                              [
                                                                OI,
                                                                N(
                                                                  "span",
                                                                  kI,
                                                                  Ot(
                                                                    (v =
                                                                      te(r)) ==
                                                                      null
                                                                      ? void 0
                                                                      : v
                                                                          .membership
                                                                          .title
                                                                  ),
                                                                  1
                                                                ),
                                                              ],
                                                              2
                                                            ),
                                                          ];
                                                        }
                                                      ),
                                                      _: 1,
                                                    }),
                                                    te(r).membership.isCanceled
                                                      ? we("v-if", !0)
                                                      : (se(),
                                                        tt(
                                                          te(Gc),
                                                          { key: 0 },
                                                          {
                                                            default: be(
                                                              ({
                                                                active: E,
                                                              }) => [
                                                                N(
                                                                  "button",
                                                                  {
                                                                    onClick:
                                                                      f[1] ||
                                                                      (f[1] = (
                                                                        v
                                                                      ) =>
                                                                        (a.value =
                                                                          !0)),
                                                                    class: Mt([
                                                                      E
                                                                        ? "bg-gray-100"
                                                                        : "",
                                                                      "block px-4 py-2 text-sm text-gray-700 w-full text-left",
                                                                    ]),
                                                                  },
                                                                  " Cancel your Subscription ",
                                                                  2
                                                                ),
                                                              ]
                                                            ),
                                                            _: 1,
                                                          }
                                                        )),
                                                    ae(
                                                      te(Gc),
                                                      null,
                                                      {
                                                        default: be(
                                                          ({ active: E }) => [
                                                            N(
                                                              "button",
                                                              {
                                                                onClick: () =>
                                                                  y() ||
                                                                  te(o)(),
                                                                class: Mt([
                                                                  E
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                  "block px-4 py-2 text-sm text-gray-700  w-full text-left",
                                                                ]),
                                                              },
                                                              " Sign out ",
                                                              10,
                                                              xI
                                                            ),
                                                          ]
                                                        ),
                                                        _: 2,
                                                      },
                                                      1024
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1024
                                        ),
                                      ]),
                                      _: 2,
                                    },
                                    1024
                                  ))
                                : (se(),
                                  tt(
                                    _,
                                    {
                                      key: 1,
                                      onClick: () => y() || te(o)(),
                                      to: "/login",
                                      class:
                                        "text-sm font-semibold leading-6 text-white",
                                    },
                                    {
                                      default: be(() => [nt("Log in "), II]),
                                      _: 2,
                                    },
                                    1032,
                                    ["onClick"]
                                  )),
                            ]),
                          ]),
                          N("div", AI, [
                            we(" Mobile menu button "),
                            ae(
                              te(sa),
                              {
                                class:
                                  "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                              },
                              {
                                default: be(() => [
                                  PI,
                                  T
                                    ? (se(),
                                      tt(te(By), {
                                        key: 1,
                                        class: "block h-6 w-6",
                                        "aria-hidden": "true",
                                      }))
                                    : (se(),
                                      tt(te(SO), {
                                        key: 0,
                                        class: "block h-6 w-6",
                                        "aria-hidden": "true",
                                      })),
                                ]),
                                _: 2,
                              },
                              1024
                            ),
                          ]),
                        ]),
                      ],
                      2
                    ),
                    ae(
                      te(lO),
                      { class: "sm:hidden bg-primary" },
                      {
                        default: be(() => {
                          var E, v, w, C;
                          return [
                            we(' <div class="space-y-1 px-2 pb-3 pt-2"> '),
                            (se(!0),
                            _e(
                              Ae,
                              null,
                              To(
                                te(gh),
                                (I) => (
                                  se(),
                                  tt(
                                    g,
                                    {
                                      onClick: y,
                                      key: I.name,
                                      to: I.path,
                                      class: Mt([
                                        "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white space-y-1 px-2 pb-3 pt-2",
                                        {
                                          "bg-gray-900 text-white": s(I.path),
                                          "text-gray-300 hover:bg-gray-700 hover:text-white":
                                            !s(I.path),
                                        },
                                      ]),
                                    },
                                    {
                                      default: be(() => [nt(Ot(I.name), 1)]),
                                      _: 2,
                                    },
                                    1032,
                                    ["onClick", "to", "class"]
                                  )
                                )
                              ),
                              128
                            )),
                            we(" </div> "),
                            te(r)
                              ? (se(),
                                _e("div", RI, [
                                  N("div", NI, [
                                    N("div", LI, [
                                      te(r).picture
                                        ? (se(),
                                          _e(
                                            "img",
                                            {
                                              key: 0,
                                              class: "h-8 w-8 rounded-full",
                                              src: te(r).picture,
                                              alt: "",
                                            },
                                            null,
                                            8,
                                            $I
                                          ))
                                        : (se(), _e("span", DI, [...FI])),
                                    ]),
                                    (E = te(r)) != null && E.name
                                      ? (se(),
                                        _e("div", HI, [
                                          N(
                                            "div",
                                            jI,
                                            Ot(
                                              (v = te(r)) == null
                                                ? void 0
                                                : v.name
                                            ),
                                            1
                                          ),
                                          N(
                                            "div",
                                            UI,
                                            Ot(
                                              (w = te(r)) == null
                                                ? void 0
                                                : w.email
                                            ),
                                            1
                                          ),
                                        ]))
                                      : (se(),
                                        _e(
                                          "div",
                                          zI,
                                          Ot(
                                            (C = te(r)) == null
                                              ? void 0
                                              : C.email
                                          ),
                                          1
                                        )),
                                  ]),
                                  we(` <MenuItem v-slot="{ active }">
          <a
            href="#"
            class="flex justify-between items-center"
            :class="[
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700',
            ]"
            ><span> Current Plan</span>
            <span
              class="bg-green-400 text-white px-2 py-1 rounded-md capitalize ml-2"
              >{{ currentUser?.membership.title }}</span
            ></a
          >
        </MenuItem> `),
                                  we(
                                    ' <MenuItem v-if="!currentUser.membership.isCanceled" v-slot="{ active }"> '
                                  ),
                                  we(` <button
            @click="showCancelModal = true"
            :class="[
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700 w-full text-left',
            ]"
          >
            Cancel your Subscription
          </button> `),
                                  we(" </MenuItem> "),
                                  we(` <MenuItem
                    v-if="!currentUser.membership.isCanceled"
                    v-slot="{ active }"
                  > `),
                                  we(` <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      class="flex justify-between items-center"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      ><span> Current Plan</span>
                      <span
                        class="bg-green-400 text-white px-2 py-1 rounded-md capitalize ml-2"
                        >{{ currentUser?.membership.title }}</span
                      ></a
                    >
                  </MenuItem> `),
                                  N("div", BI, [
                                    ae(
                                      te(sa),
                                      {
                                        class:
                                          "block rounded-md px-3 text-base font-medium text-gray-300",
                                      },
                                      {
                                        default: be(() => {
                                          var I;
                                          return [
                                            VI,
                                            N(
                                              "span",
                                              WI,
                                              Ot(
                                                (I = te(r)) == null
                                                  ? void 0
                                                  : I.membership.title
                                              ),
                                              1
                                            ),
                                          ];
                                        }),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  te(r).membership.isCanceled
                                    ? we("v-if", !0)
                                    : (se(),
                                      _e("div", GI, [
                                        ae(
                                          te(sa),
                                          {
                                            onClick:
                                              f[2] ||
                                              (f[2] = (I) => (a.value = !0)),
                                            class:
                                              "block rounded-md px-3 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
                                          },
                                          {
                                            default: be(() => [
                                              nt(" Cancel your Subscription "),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ])),
                                  we(" </MenuItem> "),
                                  N("div", YI, [
                                    ae(
                                      te(sa),
                                      {
                                        onClick: te(o),
                                        as: "a",
                                        class:
                                          "block rounded-md px-3 py-1 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
                                      },
                                      {
                                        default: be(() => [nt("Sign out")]),
                                        _: 1,
                                      },
                                      8,
                                      ["onClick"]
                                    ),
                                  ]),
                                ]))
                              : (se(),
                                _e("div", KI, [
                                  N(
                                    "button",
                                    {
                                      onClick: () => y() || i(),
                                      class:
                                        "block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white",
                                    },
                                    [nt(" Log in "), XI],
                                    8,
                                    qI
                                  ),
                                ])),
                          ];
                        }),
                        _: 2,
                      },
                      1024
                    ),
                  ]),
                  _: 1,
                }
              ),
              we(" </ClientOnly> "),
            ],
            2112
          )
        );
      };
    },
  },
  Ob = Un(JI, [["__file", "/usr/src/app/src/components/common/AppHeader.vue"]]),
  QI = "/assets/demo-80a48571.mp4";
function ZI(e, t) {
  return (
    se(),
    _e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
      },
      [
        N("path", {
          d: "M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z",
        }),
      ]
    )
  );
}
function eA(e, t) {
  return (
    se(),
    _e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
      },
      [
        N("path", {
          "fill-rule": "evenodd",
          d: "M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z",
          "clip-rule": "evenodd",
        }),
      ]
    )
  );
}
function tA(e, t) {
  return (
    se(),
    _e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
      },
      [
        N("path", {
          "fill-rule": "evenodd",
          d: "M10 2a.75.75 0 01.75.75v.258a33.186 33.186 0 016.668.83.75.75 0 01-.336 1.461 31.28 31.28 0 00-1.103-.232l1.702 7.545a.75.75 0 01-.387.832A4.981 4.981 0 0115 14c-.825 0-1.606-.2-2.294-.556a.75.75 0 01-.387-.832l1.77-7.849a31.743 31.743 0 00-3.339-.254v11.505a20.01 20.01 0 013.78.501.75.75 0 11-.339 1.462A18.558 18.558 0 0010 17.5c-1.442 0-2.845.165-4.191.477a.75.75 0 01-.338-1.462 20.01 20.01 0 013.779-.501V4.509c-1.129.026-2.243.112-3.34.254l1.771 7.85a.75.75 0 01-.387.83A4.98 4.98 0 015 14a4.98 4.98 0 01-2.294-.556.75.75 0 01-.387-.832L4.02 5.067c-.37.07-.738.148-1.103.232a.75.75 0 01-.336-1.462 32.845 32.845 0 016.668-.829V2.75A.75.75 0 0110 2zM5 7.543L3.92 12.33a3.499 3.499 0 002.16 0L5 7.543zm10 0l-1.08 4.787a3.498 3.498 0 002.16 0L15 7.543z",
          "clip-rule": "evenodd",
        }),
      ]
    )
  );
}
function nA(e, t) {
  return (
    se(),
    _e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
      },
      [
        N("path", {
          d: "M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z",
        }),
        N("path", {
          "fill-rule": "evenodd",
          d: "M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z",
          "clip-rule": "evenodd",
        }),
      ]
    )
  );
}
const rA = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512",
  },
  oA = N(
    "path",
    {
      d: "M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113c-9.3-9.4-9.3-24.6 0-34s24.6-9.4 33.9 0L63 101.1l55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L63 261.2l55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32m-64 160c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32M48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96",
    },
    null,
    -1
  );
function sA(e, t) {
  return (
    se(),
    _e("svg", rA, [
      we(
        "! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc."
      ),
      oA,
    ])
  );
}
const iA = { render: sA },
  aA = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 512 512",
  },
  lA = N(
    "path",
    {
      d: "M216 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v33.3C119.6 157.2 32 252.4 32 368h448c0-115.6-87.6-210.8-200-222.7V112h16c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40zM24 400c-13.3 0-24 10.7-24 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24z",
    },
    null,
    -1
  );
function cA(e, t) {
  return (
    se(),
    _e("svg", aA, [
      we(
        "! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc."
      ),
      lA,
    ])
  );
}
const uA = { render: cA },
  hh = {},
  fA = { class: "bg-whited" },
  dA = { id: "feature", class: "my-32 sm:mt-56" },
  pA = Ov(
    '<div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto max-w-2xl sm:text-center"><h2 class="text-base font-semibold leading-7 text-indigo-600"> Everything you need to know </h2><p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Upload Any File and Start Chatting with it! </p><p class="mt-6 text-lg leading-8 text-gray-600"> Experience the power of our AI chatbot. Upload any file and start chatting to get instant answers and valuable insights. Check out our Live Demo Now! </p></div></div>',
    1
  ),
  mA = N(
    "div",
    { class: "relative overflow-hidden pt-16" },
    [
      N("div", { class: "mx-auto max-w-7xl px-6 lg:px-8" }, [
        N(
          "video",
          {
            width: "2432",
            height: "1442",
            controls: "",
            autoplay: "",
            playbackRate: "1.5",
          },
          [
            N("source", { src: QI, type: "video/mp4" }),
            nt(" Your browser does not support HTML video. "),
          ]
        ),
      ]),
    ],
    -1
  ),
  hA = { class: "mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8" },
  gA = {
    class:
      "mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16",
  },
  _A = { class: "inline font-semibold text-gray-900" },
  vA = { class: "inline" },
  kb = {
    __name: "index",
    setup(e) {
      const t = [
        {
          name: "Time-saving.",
          description:
            "Our service can help you save time by quickly finding the information you need in a long document or file, allowing you to focus on other important tasks.",
          icon: ZI,
        },
        {
          name: "Productivity.",
          description:
            "With our AI-powered chatbot, you can easily process and analyze large amounts of data, improving your productivity and efficiency.",
          icon: iA,
        },
        {
          name: "Decision-making.",
          description:
            "Our service provides valuable insights and information that can help you make better-informed decisions based on the data and information available.",
          icon: tA,
        },
        {
          name: "Convenience.",
          description:
            "You can access our service from anywhere, at any time, using any device with an internet connection, making it a convenient solution for your file processing and analysis needs.",
          icon: uA,
        },
        {
          name: "Scalability.",
          description:
            "Our service can scale up or down to meet your needs, allowing you to easily process and analyze files of any size, from a single document to large datasets.",
          icon: nA,
        },
        {
          name: "Security.",
          description:
            "Our service uses secure servers and protocols to protect your data and ensure your privacy, giving you peace of mind while working with sensitive files.",
          icon: eA,
        },
      ];
      return (
        re(!1),
        (n, r) => {
          const o = Ob,
            s = pC,
            i = Q2;
          return (
            se(),
            _e("div", fA, [
              we(" Header "),
              ae(o, { class: "!bg-transparent" }),
              N("main", null, [
                we(" Hero section "),
                ae(s),
                we(" Feature section "),
                N("div", dA, [
                  pA,
                  mA,
                  N("div", hA, [
                    N("dl", gA, [
                      (se(),
                      _e(
                        Ae,
                        null,
                        To(t, (a) =>
                          N("div", { key: a.name, class: "relative pl-9" }, [
                            N("dt", _A, [
                              (se(),
                              tt($l(a.icon), {
                                class:
                                  "absolute left-1 top-1 h-5 w-5 text-indigo-600",
                                "aria-hidden": "true",
                              })),
                              nt(" " + Ot(a.name), 1),
                            ]),
                            nt(" " + Ot(" ") + " "),
                            N("dd", vA, Ot(a.description), 1),
                          ])
                        ),
                        64
                      )),
                    ]),
                  ]),
                ]),
                we(" Pricing section "),
                we(" <pricing /> "),
                we(" FAQ section "),
              ]),
              ae(i),
            ])
          );
        }
      );
    },
  };
typeof hh == "function" && hh(kb);
const yA = Un(kb, [["__file", "/usr/src/app/src/pages/index.vue"]]),
  bA = () =>
    st(
      () => import("./index-97e68d80.js"),
      ["assets/index-97e68d80.js", "assets/index-92d630d0.css"]
    ),
  EA = () =>
    st(
      () => import("./verifiedEmail-b8b9f64f.js"),
      [
        "assets/verifiedEmail-b8b9f64f.js",
        "assets/AnimatedSuccess-4600b7db.js",
        "assets/AnimatedSuccess-6c903d0e.css",
      ]
    ),
  wA = () =>
    st(
      () => import("./resetPasswordSuccessfully-5a9dbaa7.js"),
      [
        "assets/resetPasswordSuccessfully-5a9dbaa7.js",
        "assets/AnimatedSuccess-4600b7db.js",
        "assets/AnimatedSuccess-6c903d0e.css",
      ]
    ),
  TA = () => st(() => import("./resetPassword-9d2b7775.js"), []),
  SA = () =>
    st(
      () => import("./resetEmailSent-53383f3e.js"),
      [
        "assets/resetEmailSent-53383f3e.js",
        "assets/ConfirmationEmail-120954ce.js",
      ]
    ),
  CA = () => st(() => import("./register-a3bfc64a.js"), []),
  OA = () => st(() => import("./pricing-15ca842e.js"), []),
  kA = () =>
    st(
      () => import("./mySpace-a11fdcad.js"),
      [
        "assets/mySpace-a11fdcad.js",
        "assets/document-8589ce0c.js",
        "assets/AnimatedSuccess-4600b7db.js",
        "assets/AnimatedSuccess-6c903d0e.css",
        "assets/mySpace-225c1b74.css",
      ]
    ),
  xA = () =>
    st(
      () => import("./emailSent-41249d89.js"),
      ["assets/emailSent-41249d89.js", "assets/ConfirmationEmail-120954ce.js"]
    ),
  IA = () => st(() => import("./contact-ad82d5c0.js"), []),
  AA = () => st(() => import("./changePassword-a253b19c.js"), []),
  PA = () => st(() => import("./about-fee5b130.js"), []),
  RA = () => st(() => import("./README-edb91771.js"), []),
  NA = () => st(() => import("./Login-856c61a9.js"), []),
  LA = () => st(() => import("./_...all_-7066a854.js"), []),
  $A = () =>
    st(
      () => import("./_index_name_-87eef56b.js"),
      [
        "assets/_index_name_-87eef56b.js",
        "assets/document-8589ce0c.js",
        "assets/_index_name_-365584db.css",
      ]
    ),
  DA = [
    {
      name: "Checkout",
      path: "/checkout",
      component: bA,
      props: !0,
      meta: { title: "Checkout", layout: "home" },
    },
    {
      name: "verifiedEmail",
      path: "/verifiedemail",
      component: EA,
      props: !0,
      meta: { title: "email Verified", layout: "clientOnly" },
    },
    {
      name: "resetPasswordSuccessfully",
      path: "/resetpasswordsuccessfully",
      component: wA,
      props: !0,
      meta: { title: "email Verified", layout: "home" },
    },
    {
      name: "resetPassword",
      path: "/resetpassword",
      component: TA,
      props: !0,
      meta: { title: "Reset Password", layout: "home" },
    },
    {
      name: "resetEmailSent",
      path: "/resetemailsent",
      component: SA,
      props: !0,
      meta: { title: "Reset Email", layout: "home" },
    },
    {
      name: "register",
      path: "/register",
      component: CA,
      props: !0,
      meta: { title: "Register", layout: "home" },
    },
    {
      name: "pricing",
      path: "/pricing",
      component: OA,
      props: !0,
      meta: { title: "Pricing", layout: "home" },
    },
    {
      name: "mySpace",
      path: "/myspace",
      component: kA,
      props: !0,
      meta: { title: "MySpace", layout: "clientOnly" },
    },
    {
      name: "index",
      path: "/",
      component: yA,
      props: !0,
      meta: { title: "Home", layout: "withSidebar" },
    },
    {
      name: "emailSent",
      path: "/emailsent",
      component: xA,
      props: !0,
      meta: { title: "email Sent", layout: "clientOnly" },
    },
    {
      name: "contact",
      path: "/contact",
      component: IA,
      props: !0,
      meta: { title: "Contact us", layout: "home" },
    },
    {
      name: "changePassword",
      path: "/changepassword",
      component: AA,
      props: !0,
      meta: { title: "Change Password", layout: "clientOnly" },
    },
    { name: "about", path: "/about", component: PA, props: !0 },
    { name: "README", path: "/readme", component: RA, props: !0 },
    {
      name: "Login",
      path: "/login",
      component: NA,
      props: !0,
      meta: { title: "Login", layout: "home" },
    },
    {
      name: "all",
      path: "/:all(.*)*",
      component: LA,
      props: !0,
      meta: { layout: "withSidebar" },
    },
    {
      name: "chat-index_name",
      path: "/chat/:index_name",
      component: $A,
      props: !0,
      meta: { title: "Chat", layout: "clientOnly2" },
    },
  ],
  MA = { class: "h-screen overflow-hidden" },
  FA = {
    __name: "default",
    setup(e) {
      return (t, n) => {
        const r = Ob,
          o = ln("RouterView");
        return (
          se(),
          tt(te(px), null, {
            default: be(() => [
              N("div", MA, [
                ae(r),
                ae(o, {
                  class:
                    "w-full !h-[calc(100vh-0rem)] sm:!h-[calc(100vh-2.75rem)] overflow-hidden bg-[#ECF0F4]",
                }),
              ]),
            ]),
            _: 1,
          })
        );
      };
    },
  },
  HA = Un(FA, [["__file", "/usr/src/app/src/layouts/default.vue"]]),
  jA = {
    404: () => st(() => import("./404-e5e9daf8.js"), []),
    clientOnly: () =>
      st(
        () => import("./clientOnly-2d4da3f3.js"),
        ["assets/clientOnly-2d4da3f3.js", "assets/clientOnly-e583a933.css"]
      ),
    clientOnly2: () =>
      st(
        () => import("./clientOnly2-70317d50.js"),
        ["assets/clientOnly2-70317d50.js", "assets/clientOnly-e583a933.css"]
      ),
    default: HA,
    home: () =>
      st(
        () => import("./home-41f8463e.js"),
        ["assets/home-41f8463e.js", "assets/clientOnly-e583a933.css"]
      ),
    withSidebar: () => st(() => import("./withSidebar-62554e63.js"), []),
  };
function UA(e) {
  return e.map((t) => {
    var n;
    return {
      path: t.path,
      component: jA[((n = t.meta) == null ? void 0 : n.layout) || "default"],
      children: [{ ...t, path: "" }],
    };
  });
}
const zA = [...UA(DA)];
let rc;
function BA(e) {
  rc = e;
}
const VA = ({ from: e, next: t }) => {
    const n = localStorage == null ? void 0 : localStorage.getItem(ul);
    n &&
      (localStorage.removeItem(ul),
      window.location.search.includes("redirect=true") && t(n));
  },
  WA = (e, t, n) => {
    const { currentUser: r } = yi();
    if (t.name && !r && !yy(e.path))
      localStorage == null || localStorage.setItem(ul, e.fullPath), n("/login");
    else {
      if (j2(e.path) && r) return n("/");
      VA({ from: t, next: n }), n();
    }
  },
  gh = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "My Space", path: "/myspace" },
    { name: "Contact", path: "/contact" },
  ],
  xb = Object.prototype.toString;
function Ib(e) {
  switch (xb.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return ir(e, Error);
  }
}
function vs(e, t) {
  return xb.call(e) === `[object ${t}]`;
}
function Hd(e) {
  return vs(e, "ErrorEvent");
}
function _h(e) {
  return vs(e, "DOMError");
}
function GA(e) {
  return vs(e, "DOMException");
}
function Dn(e) {
  return vs(e, "String");
}
function jd(e) {
  return e === null || (typeof e != "object" && typeof e != "function");
}
function as(e) {
  return vs(e, "Object");
}
function oc(e) {
  return typeof Event < "u" && ir(e, Event);
}
function YA(e) {
  return typeof Element < "u" && ir(e, Element);
}
function KA(e) {
  return vs(e, "RegExp");
}
function Ud(e) {
  return !!(e && e.then && typeof e.then == "function");
}
function qA(e) {
  return (
    as(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function Ab(e) {
  return typeof e == "number" && e !== e;
}
function ir(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function Pb(e) {
  return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue));
}
function es(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function vh(e, t) {
  if (!Array.isArray(e)) return "";
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    try {
      Pb(o) ? n.push("[VueViewModel]") : n.push(String(o));
    } catch {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(t);
}
function XA(e, t, n = !1) {
  return Dn(e)
    ? KA(t)
      ? t.test(e)
      : Dn(t)
      ? n
        ? e === t
        : e.includes(t)
      : !1
    : !1;
}
function Fi(e, t = [], n = !1) {
  return t.some((r) => XA(e, r, n));
}
function JA(e, t, n = 250, r, o, s, i) {
  if (
    !s.exception ||
    !s.exception.values ||
    !i ||
    !ir(i.originalException, Error)
  )
    return;
  const a =
    s.exception.values.length > 0
      ? s.exception.values[s.exception.values.length - 1]
      : void 0;
  a &&
    (s.exception.values = QA(
      ef(e, t, o, i.originalException, r, s.exception.values, a, 0),
      n
    ));
}
function ef(e, t, n, r, o, s, i, a) {
  if (s.length >= n + 1) return s;
  let l = [...s];
  if (ir(r[o], Error)) {
    yh(i, a);
    const c = e(t, r[o]),
      u = l.length;
    bh(c, o, u, a), (l = ef(e, t, n, r[o], o, [c, ...l], c, u));
  }
  return (
    Array.isArray(r.errors) &&
      r.errors.forEach((c, u) => {
        if (ir(c, Error)) {
          yh(i, a);
          const f = e(t, c),
            d = l.length;
          bh(f, `errors[${u}]`, d, a), (l = ef(e, t, n, c, o, [f, ...l], f, d));
        }
      }),
    l
  );
}
function yh(e, t) {
  (e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
    (e.mechanism = { ...e.mechanism, is_exception_group: !0, exception_id: t });
}
function bh(e, t, n, r) {
  (e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
    (e.mechanism = {
      ...e.mechanism,
      type: "chained",
      source: t,
      exception_id: n,
      parent_id: r,
    });
}
function QA(e, t) {
  return e.map((n) => (n.value && (n.value = es(n.value, t)), n));
}
function la(e) {
  return e && e.Math == Math ? e : void 0;
}
const De =
  (typeof globalThis == "object" && la(globalThis)) ||
  (typeof window == "object" && la(window)) ||
  (typeof self == "object" && la(self)) ||
  (typeof global == "object" && la(global)) ||
  (function () {
    return this;
  })() ||
  {};
function sc() {
  return De;
}
function Rb(e, t, n) {
  const r = n || De,
    o = (r.__SENTRY__ = r.__SENTRY__ || {});
  return o[e] || (o[e] = t());
}
const Ma = sc(),
  ZA = 80;
function ls(e, t = {}) {
  if (!e) return "<unknown>";
  try {
    let n = e;
    const r = 5,
      o = [];
    let s = 0,
      i = 0;
    const a = " > ",
      l = a.length;
    let c;
    const u = Array.isArray(t) ? t : t.keyAttrs,
      f = (!Array.isArray(t) && t.maxStringLength) || ZA;
    for (
      ;
      n &&
      s++ < r &&
      ((c = eP(n, u)),
      !(c === "html" || (s > 1 && i + o.length * l + c.length >= f)));

    )
      o.push(c), (i += c.length), (n = n.parentNode);
    return o.reverse().join(a);
  } catch {
    return "<unknown>";
  }
}
function eP(e, t) {
  const n = e,
    r = [];
  let o, s, i, a, l;
  if (!n || !n.tagName) return "";
  r.push(n.tagName.toLowerCase());
  const c =
    t && t.length
      ? t.filter((f) => n.getAttribute(f)).map((f) => [f, n.getAttribute(f)])
      : null;
  if (c && c.length)
    c.forEach((f) => {
      r.push(`[${f[0]}="${f[1]}"]`);
    });
  else if ((n.id && r.push(`#${n.id}`), (o = n.className), o && Dn(o)))
    for (s = o.split(/\s+/), l = 0; l < s.length; l++) r.push(`.${s[l]}`);
  const u = ["aria-label", "type", "name", "title", "alt"];
  for (l = 0; l < u.length; l++)
    (i = u[l]), (a = n.getAttribute(i)), a && r.push(`[${i}="${a}"]`);
  return r.join("");
}
function tP() {
  try {
    return Ma.document.location.href;
  } catch {
    return "";
  }
}
function nP(e) {
  return Ma.document && Ma.document.querySelector
    ? Ma.document.querySelector(e)
    : null;
}
const ys = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  rP = "Sentry Logger ",
  tf = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  ml = {};
function No(e) {
  if (!("console" in De)) return e();
  const t = De.console,
    n = {},
    r = Object.keys(ml);
  r.forEach((o) => {
    const s = ml[o];
    (n[o] = t[o]), (t[o] = s);
  });
  try {
    return e();
  } finally {
    r.forEach((o) => {
      t[o] = n[o];
    });
  }
}
function oP() {
  let e = !1;
  const t = {
    enable: () => {
      e = !0;
    },
    disable: () => {
      e = !1;
    },
    isEnabled: () => e,
  };
  return (
    ys
      ? tf.forEach((n) => {
          t[n] = (...r) => {
            e &&
              No(() => {
                De.console[n](`${rP}[${n}]:`, ...r);
              });
          };
        })
      : tf.forEach((n) => {
          t[n] = () => {};
        }),
    t
  );
}
const V = oP(),
  sP = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function iP(e) {
  return e === "http" || e === "https";
}
function ic(e, t = !1) {
  const {
    host: n,
    path: r,
    pass: o,
    port: s,
    projectId: i,
    protocol: a,
    publicKey: l,
  } = e;
  return `${a}://${l}${t && o ? `:${o}` : ""}@${n}${s ? `:${s}` : ""}/${
    r && `${r}/`
  }${i}`;
}
function aP(e) {
  const t = sP.exec(e);
  if (!t) {
    No(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  const [n, r, o = "", s, i = "", a] = t.slice(1);
  let l = "",
    c = a;
  const u = c.split("/");
  if ((u.length > 1 && ((l = u.slice(0, -1).join("/")), (c = u.pop())), c)) {
    const f = c.match(/^\d+/);
    f && (c = f[0]);
  }
  return Nb({
    host: s,
    pass: o,
    path: l,
    projectId: c,
    port: i,
    protocol: n,
    publicKey: r,
  });
}
function Nb(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId,
  };
}
function lP(e) {
  if (!ys) return !0;
  const { port: t, projectId: n, protocol: r } = e;
  return ["protocol", "publicKey", "host", "projectId"].find((i) =>
    e[i] ? !1 : (V.error(`Invalid Sentry Dsn: ${i} missing`), !0)
  )
    ? !1
    : n.match(/^\d+$/)
    ? iP(r)
      ? t && isNaN(parseInt(t, 10))
        ? (V.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
        : !0
      : (V.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
    : (V.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function cP(e) {
  const t = typeof e == "string" ? aP(e) : Nb(e);
  if (!(!t || !lP(t))) return t;
}
class An extends Error {
  constructor(t, n = "warn") {
    super(t),
      (this.message = t),
      (this.name = new.target.prototype.constructor.name),
      Object.setPrototypeOf(this, new.target.prototype),
      (this.logLevel = n);
  }
}
function wt(e, t, n) {
  if (!(t in e)) return;
  const r = e[t],
    o = n(r);
  typeof o == "function" && Lb(o, r), (e[t] = o);
}
function gi(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
  } catch {
    ys && V.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function Lb(e, t) {
  try {
    const n = t.prototype || {};
    (e.prototype = t.prototype = n), gi(e, "__sentry_original__", t);
  } catch {}
}
function zd(e) {
  return e.__sentry_original__;
}
function uP(e) {
  return Object.keys(e)
    .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
    .join("&");
}
function $b(e) {
  if (Ib(e))
    return { message: e.message, name: e.name, stack: e.stack, ...wh(e) };
  if (oc(e)) {
    const t = {
      type: e.type,
      target: Eh(e.target),
      currentTarget: Eh(e.currentTarget),
      ...wh(e),
    };
    return (
      typeof CustomEvent < "u" && ir(e, CustomEvent) && (t.detail = e.detail), t
    );
  } else return e;
}
function Eh(e) {
  try {
    return YA(e) ? ls(e) : Object.prototype.toString.call(e);
  } catch {
    return "<unknown>";
  }
}
function wh(e) {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  } else return {};
}
function fP(e, t = 40) {
  const n = Object.keys($b(e));
  if ((n.sort(), !n.length)) return "[object has no keys]";
  if (n[0].length >= t) return es(n[0], t);
  for (let r = n.length; r > 0; r--) {
    const o = n.slice(0, r).join(", ");
    if (!(o.length > t)) return r === n.length ? o : es(o, t);
  }
  return "";
}
function Hr(e) {
  return nf(e, new Map());
}
function nf(e, t) {
  if (as(e)) {
    const n = t.get(e);
    if (n !== void 0) return n;
    const r = {};
    t.set(e, r);
    for (const o of Object.keys(e)) typeof e[o] < "u" && (r[o] = nf(e[o], t));
    return r;
  }
  if (Array.isArray(e)) {
    const n = t.get(e);
    if (n !== void 0) return n;
    const r = [];
    return (
      t.set(e, r),
      e.forEach((o) => {
        r.push(nf(o, t));
      }),
      r
    );
  }
  return e;
}
const Db = 50,
  Th = /\(error: (.*)\)/,
  Sh = /captureMessage|captureException/;
function Mb(...e) {
  const t = e.sort((n, r) => n[0] - r[0]).map((n) => n[1]);
  return (n, r = 0) => {
    const o = [],
      s = n.split(`
`);
    for (let i = r; i < s.length; i++) {
      const a = s[i];
      if (a.length > 1024) continue;
      const l = Th.test(a) ? a.replace(Th, "$1") : a;
      if (!l.match(/\S*Error: /)) {
        for (const c of t) {
          const u = c(l);
          if (u) {
            o.push(u);
            break;
          }
        }
        if (o.length >= Db) break;
      }
    }
    return pP(o);
  };
}
function dP(e) {
  return Array.isArray(e) ? Mb(...e) : e;
}
function pP(e) {
  if (!e.length) return [];
  const t = Array.from(e);
  return (
    /sentryWrapped/.test(t[t.length - 1].function || "") && t.pop(),
    t.reverse(),
    Sh.test(t[t.length - 1].function || "") &&
      (t.pop(), Sh.test(t[t.length - 1].function || "") && t.pop()),
    t
      .slice(0, Db)
      .map((n) => ({
        ...n,
        filename: n.filename || t[t.length - 1].filename,
        function: n.function || "?",
      }))
  );
}
const Qc = "<anonymous>";
function ar(e) {
  try {
    return !e || typeof e != "function" ? Qc : e.name || Qc;
  } catch {
    return Qc;
  }
}
const Fa = {},
  Ch = {};
function Lo(e, t) {
  (Fa[e] = Fa[e] || []), Fa[e].push(t);
}
function $o(e, t) {
  Ch[e] || (t(), (Ch[e] = !0));
}
function vn(e, t) {
  const n = e && Fa[e];
  if (n)
    for (const r of n)
      try {
        r(t);
      } catch (o) {
        ys &&
          V.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${ar(r)}
Error:`,
            o
          );
      }
}
function mP(e) {
  const t = "console";
  Lo(t, e), $o(t, hP);
}
function hP() {
  "console" in De &&
    tf.forEach(function (e) {
      e in De.console &&
        wt(De.console, e, function (t) {
          return (
            (ml[e] = t),
            function (...n) {
              vn("console", { args: n, level: e });
              const o = ml[e];
              o && o.apply(De.console, n);
            }
          );
        });
    });
}
function Ht() {
  const e = De,
    t = e.crypto || e.msCrypto;
  let n = () => Math.random() * 16;
  try {
    if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
    t &&
      t.getRandomValues &&
      (n = () => t.getRandomValues(new Uint8Array(1))[0]);
  } catch {}
  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (r) =>
    (r ^ ((n() & 15) >> (r / 4))).toString(16)
  );
}
function Fb(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function Nr(e) {
  const { message: t, event_id: n } = e;
  if (t) return t;
  const r = Fb(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || n || "<unknown>"
    : n || "<unknown>";
}
function rf(e, t, n) {
  const r = (e.exception = e.exception || {}),
    o = (r.values = r.values || []),
    s = (o[0] = o[0] || {});
  s.value || (s.value = t || ""), s.type || (s.type = n || "Error");
}
function _i(e, t) {
  const n = Fb(e);
  if (!n) return;
  const r = { type: "generic", handled: !0 },
    o = n.mechanism;
  if (((n.mechanism = { ...r, ...o, ...t }), t && "data" in t)) {
    const s = { ...(o && o.data), ...t.data };
    n.mechanism.data = s;
  }
}
function Oh(e) {
  if (e && e.__sentry_captured__) return !0;
  try {
    gi(e, "__sentry_captured__", !0);
  } catch {}
  return !1;
}
function Bd(e) {
  return Array.isArray(e) ? e : [e];
}
const Bo = De,
  gP = 1e3;
let kh, of, sf;
function _P(e) {
  const t = "dom";
  Lo(t, e), $o(t, vP);
}
function vP() {
  if (!Bo.document) return;
  const e = vn.bind(null, "dom"),
    t = xh(e, !0);
  Bo.document.addEventListener("click", t, !1),
    Bo.document.addEventListener("keypress", t, !1),
    ["EventTarget", "Node"].forEach((n) => {
      const r = Bo[n] && Bo[n].prototype;
      !r ||
        !r.hasOwnProperty ||
        !r.hasOwnProperty("addEventListener") ||
        (wt(r, "addEventListener", function (o) {
          return function (s, i, a) {
            if (s === "click" || s == "keypress")
              try {
                const l = this,
                  c = (l.__sentry_instrumentation_handlers__ =
                    l.__sentry_instrumentation_handlers__ || {}),
                  u = (c[s] = c[s] || { refCount: 0 });
                if (!u.handler) {
                  const f = xh(e);
                  (u.handler = f), o.call(this, s, f, a);
                }
                u.refCount++;
              } catch {}
            return o.call(this, s, i, a);
          };
        }),
        wt(r, "removeEventListener", function (o) {
          return function (s, i, a) {
            if (s === "click" || s == "keypress")
              try {
                const l = this,
                  c = l.__sentry_instrumentation_handlers__ || {},
                  u = c[s];
                u &&
                  (u.refCount--,
                  u.refCount <= 0 &&
                    (o.call(this, s, u.handler, a),
                    (u.handler = void 0),
                    delete c[s]),
                  Object.keys(c).length === 0 &&
                    delete l.__sentry_instrumentation_handlers__);
              } catch {}
            return o.call(this, s, i, a);
          };
        }));
    });
}
function yP(e) {
  if (e.type !== of) return !1;
  try {
    if (!e.target || e.target._sentryId !== sf) return !1;
  } catch {}
  return !0;
}
function bP(e, t) {
  return e !== "keypress"
    ? !1
    : !t || !t.tagName
    ? !0
    : !(
        t.tagName === "INPUT" ||
        t.tagName === "TEXTAREA" ||
        t.isContentEditable
      );
}
function xh(e, t = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return;
    const r = EP(n);
    if (bP(n.type, r)) return;
    gi(n, "_sentryCaptured", !0), r && !r._sentryId && gi(r, "_sentryId", Ht());
    const o = n.type === "keypress" ? "input" : n.type;
    yP(n) ||
      (e({ event: n, name: o, global: t }),
      (of = n.type),
      (sf = r ? r._sentryId : void 0)),
      clearTimeout(kh),
      (kh = Bo.setTimeout(() => {
        (sf = void 0), (of = void 0);
      }, gP));
  };
}
function EP(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
const af = sc();
function Hb() {
  if (!("fetch" in af)) return !1;
  try {
    return (
      new Headers(), new Request("http://www.example.com"), new Response(), !0
    );
  } catch {
    return !1;
  }
}
function lf(e) {
  return (
    e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  );
}
function wP() {
  if (typeof EdgeRuntime == "string") return !0;
  if (!Hb()) return !1;
  if (lf(af.fetch)) return !0;
  let e = !1;
  const t = af.document;
  if (t && typeof t.createElement == "function")
    try {
      const n = t.createElement("iframe");
      (n.hidden = !0),
        t.head.appendChild(n),
        n.contentWindow &&
          n.contentWindow.fetch &&
          (e = lf(n.contentWindow.fetch)),
        t.head.removeChild(n);
    } catch (n) {
      ys &&
        V.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
    }
  return e;
}
function jb(e) {
  const t = "fetch";
  Lo(t, e), $o(t, TP);
}
function TP() {
  wP() &&
    wt(De, "fetch", function (e) {
      return function (...t) {
        const { method: n, url: r } = SP(t),
          o = {
            args: t,
            fetchData: { method: n, url: r },
            startTimestamp: Date.now(),
          };
        return (
          vn("fetch", { ...o }),
          e.apply(De, t).then(
            (s) => {
              const i = { ...o, endTimestamp: Date.now(), response: s };
              return vn("fetch", i), s;
            },
            (s) => {
              const i = { ...o, endTimestamp: Date.now(), error: s };
              throw (vn("fetch", i), s);
            }
          )
        );
      };
    });
}
function cf(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function Ih(e) {
  return typeof e == "string"
    ? e
    : e
    ? cf(e, "url")
      ? e.url
      : e.toString
      ? e.toString()
      : ""
    : "";
}
function SP(e) {
  if (e.length === 0) return { method: "GET", url: "" };
  if (e.length === 2) {
    const [n, r] = e;
    return {
      url: Ih(n),
      method: cf(r, "method") ? String(r.method).toUpperCase() : "GET",
    };
  }
  const t = e[0];
  return {
    url: Ih(t),
    method: cf(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
let ca = null;
function Ub(e) {
  const t = "error";
  Lo(t, e), $o(t, CP);
}
function CP() {
  (ca = De.onerror),
    (De.onerror = function (e, t, n, r, o) {
      return (
        vn("error", { column: r, error: o, line: n, msg: e, url: t }),
        ca && !ca.__SENTRY_LOADER__ ? ca.apply(this, arguments) : !1
      );
    }),
    (De.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
let ua = null;
function zb(e) {
  const t = "unhandledrejection";
  Lo(t, e), $o(t, OP);
}
function OP() {
  (ua = De.onunhandledrejection),
    (De.onunhandledrejection = function (e) {
      return (
        vn("unhandledrejection", e),
        ua && !ua.__SENTRY_LOADER__ ? ua.apply(this, arguments) : !0
      );
    }),
    (De.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
const fa = sc();
function kP() {
  const e = fa.chrome,
    t = e && e.app && e.app.runtime,
    n = "history" in fa && !!fa.history.pushState && !!fa.history.replaceState;
  return !t && n;
}
const Rs = De;
let da;
function Vd(e) {
  const t = "history";
  Lo(t, e), $o(t, xP);
}
function xP() {
  if (!kP()) return;
  const e = Rs.onpopstate;
  Rs.onpopstate = function (...n) {
    const r = Rs.location.href,
      o = da;
    if (((da = r), vn("history", { from: o, to: r }), e))
      try {
        return e.apply(this, n);
      } catch {}
  };
  function t(n) {
    return function (...r) {
      const o = r.length > 2 ? r[2] : void 0;
      if (o) {
        const s = da,
          i = String(o);
        (da = i), vn("history", { from: s, to: i });
      }
      return n.apply(this, r);
    };
  }
  wt(Rs.history, "pushState", t), wt(Rs.history, "replaceState", t);
}
const IP = De,
  Go = "__sentry_xhr_v3__";
function Bb(e) {
  const t = "xhr";
  Lo(t, e), $o(t, AP);
}
function AP() {
  if (!IP.XMLHttpRequest) return;
  const e = XMLHttpRequest.prototype;
  wt(e, "open", function (t) {
    return function (...n) {
      const r = Date.now(),
        o = Dn(n[0]) ? n[0].toUpperCase() : void 0,
        s = PP(n[1]);
      if (!o || !s) return t.apply(this, n);
      (this[Go] = { method: o, url: s, request_headers: {} }),
        o === "POST" &&
          s.match(/sentry_key/) &&
          (this.__sentry_own_request__ = !0);
      const i = () => {
        const a = this[Go];
        if (a && this.readyState === 4) {
          try {
            a.status_code = this.status;
          } catch {}
          const l = {
            args: [o, s],
            endTimestamp: Date.now(),
            startTimestamp: r,
            xhr: this,
          };
          vn("xhr", l);
        }
      };
      return (
        "onreadystatechange" in this &&
        typeof this.onreadystatechange == "function"
          ? wt(this, "onreadystatechange", function (a) {
              return function (...l) {
                return i(), a.apply(this, l);
              };
            })
          : this.addEventListener("readystatechange", i),
        wt(this, "setRequestHeader", function (a) {
          return function (...l) {
            const [c, u] = l,
              f = this[Go];
            return (
              f && Dn(c) && Dn(u) && (f.request_headers[c.toLowerCase()] = u),
              a.apply(this, l)
            );
          };
        }),
        t.apply(this, n)
      );
    };
  }),
    wt(e, "send", function (t) {
      return function (...n) {
        const r = this[Go];
        if (!r) return t.apply(this, n);
        n[0] !== void 0 && (r.body = n[0]);
        const o = {
          args: [r.method, r.url],
          startTimestamp: Date.now(),
          xhr: this,
        };
        return vn("xhr", o), t.apply(this, n);
      };
    });
}
function PP(e) {
  if (Dn(e)) return e;
  try {
    return e.toString();
  } catch {}
}
function RP() {
  return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__;
}
function NP() {
  return "npm";
}
function LP() {
  return (
    !RP() &&
    Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
      "[object process]"
  );
}
function $P(e, t) {
  return e.require(t);
}
function DP() {
  const e = typeof WeakSet == "function",
    t = e ? new WeakSet() : [];
  function n(o) {
    if (e) return t.has(o) ? !0 : (t.add(o), !1);
    for (let s = 0; s < t.length; s++) if (t[s] === o) return !0;
    return t.push(o), !1;
  }
  function r(o) {
    if (e) t.delete(o);
    else
      for (let s = 0; s < t.length; s++)
        if (t[s] === o) {
          t.splice(s, 1);
          break;
        }
  }
  return [n, r];
}
function Pr(e, t = 100, n = 1 / 0) {
  try {
    return uf("", e, t, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function Vb(e, t = 3, n = 100 * 1024) {
  const r = Pr(e, t);
  return jP(r) > n ? Vb(e, t - 1, n) : r;
}
function uf(e, t, n = 1 / 0, r = 1 / 0, o = DP()) {
  const [s, i] = o;
  if (
    t == null ||
    (["number", "boolean", "string"].includes(typeof t) && !Ab(t))
  )
    return t;
  const a = MP(e, t);
  if (!a.startsWith("[object ")) return a;
  if (t.__sentry_skip_normalization__) return t;
  const l =
    typeof t.__sentry_override_normalization_depth__ == "number"
      ? t.__sentry_override_normalization_depth__
      : n;
  if (l === 0) return a.replace("object ", "");
  if (s(t)) return "[Circular ~]";
  const c = t;
  if (c && typeof c.toJSON == "function")
    try {
      const m = c.toJSON();
      return uf("", m, l - 1, r, o);
    } catch {}
  const u = Array.isArray(t) ? [] : {};
  let f = 0;
  const d = $b(t);
  for (const m in d) {
    if (!Object.prototype.hasOwnProperty.call(d, m)) continue;
    if (f >= r) {
      u[m] = "[MaxProperties ~]";
      break;
    }
    const g = d[m];
    (u[m] = uf(m, g, l - 1, r, o)), f++;
  }
  return i(t), u;
}
function MP(e, t) {
  try {
    if (e === "domain" && t && typeof t == "object" && t._events)
      return "[Domain]";
    if (e === "domainEmitter") return "[DomainEmitter]";
    if (typeof global < "u" && t === global) return "[Global]";
    if (typeof window < "u" && t === window) return "[Window]";
    if (typeof document < "u" && t === document) return "[Document]";
    if (Pb(t)) return "[VueViewModel]";
    if (qA(t)) return "[SyntheticEvent]";
    if (typeof t == "number" && t !== t) return "[NaN]";
    if (typeof t == "function") return `[Function: ${ar(t)}]`;
    if (typeof t == "symbol") return `[${String(t)}]`;
    if (typeof t == "bigint") return `[BigInt: ${String(t)}]`;
    const n = FP(t);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function FP(e) {
  const t = Object.getPrototypeOf(e);
  return t ? t.constructor.name : "null prototype";
}
function HP(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function jP(e) {
  return HP(JSON.stringify(e));
}
var Xn;
(function (e) {
  e[(e.PENDING = 0)] = "PENDING";
  const n = 1;
  e[(e.RESOLVED = n)] = "RESOLVED";
  const r = 2;
  e[(e.REJECTED = r)] = "REJECTED";
})(Xn || (Xn = {}));
function Oo(e) {
  return new Kt((t) => {
    t(e);
  });
}
function Wd(e) {
  return new Kt((t, n) => {
    n(e);
  });
}
class Kt {
  constructor(t) {
    Kt.prototype.__init.call(this),
      Kt.prototype.__init2.call(this),
      Kt.prototype.__init3.call(this),
      Kt.prototype.__init4.call(this),
      (this._state = Xn.PENDING),
      (this._handlers = []);
    try {
      t(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  then(t, n) {
    return new Kt((r, o) => {
      this._handlers.push([
        !1,
        (s) => {
          if (!t) r(s);
          else
            try {
              r(t(s));
            } catch (i) {
              o(i);
            }
        },
        (s) => {
          if (!n) o(s);
          else
            try {
              r(n(s));
            } catch (i) {
              o(i);
            }
        },
      ]),
        this._executeHandlers();
    });
  }
  catch(t) {
    return this.then((n) => n, t);
  }
  finally(t) {
    return new Kt((n, r) => {
      let o, s;
      return this.then(
        (i) => {
          (s = !1), (o = i), t && t();
        },
        (i) => {
          (s = !0), (o = i), t && t();
        }
      ).then(() => {
        if (s) {
          r(o);
          return;
        }
        n(o);
      });
    });
  }
  __init() {
    this._resolve = (t) => {
      this._setResult(Xn.RESOLVED, t);
    };
  }
  __init2() {
    this._reject = (t) => {
      this._setResult(Xn.REJECTED, t);
    };
  }
  __init3() {
    this._setResult = (t, n) => {
      if (this._state === Xn.PENDING) {
        if (Ud(n)) {
          n.then(this._resolve, this._reject);
          return;
        }
        (this._state = t), (this._value = n), this._executeHandlers();
      }
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === Xn.PENDING) return;
      const t = this._handlers.slice();
      (this._handlers = []),
        t.forEach((n) => {
          n[0] ||
            (this._state === Xn.RESOLVED && n[1](this._value),
            this._state === Xn.REJECTED && n[2](this._value),
            (n[0] = !0));
        });
    };
  }
}
function UP(e) {
  const t = [];
  function n() {
    return e === void 0 || t.length < e;
  }
  function r(i) {
    return t.splice(t.indexOf(i), 1)[0];
  }
  function o(i) {
    if (!n())
      return Wd(new An("Not adding Promise because buffer limit was reached."));
    const a = i();
    return (
      t.indexOf(a) === -1 && t.push(a),
      a.then(() => r(a)).then(null, () => r(a).then(null, () => {})),
      a
    );
  }
  function s(i) {
    return new Kt((a, l) => {
      let c = t.length;
      if (!c) return a(!0);
      const u = setTimeout(() => {
        i && i > 0 && a(!1);
      }, i);
      t.forEach((f) => {
        Oo(f).then(() => {
          --c || (clearTimeout(u), a(!0));
        }, l);
      });
    });
  }
  return { $: t, add: o, drain: s };
}
function Zc(e) {
  if (!e) return {};
  const t = e.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
  );
  if (!t) return {};
  const n = t[6] || "",
    r = t[8] || "";
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: r,
    relative: t[5] + n + r,
  };
}
const zP = ["fatal", "error", "warning", "log", "info", "debug"];
function BP(e) {
  return e === "warn" ? "warning" : zP.includes(e) ? e : "log";
}
const Wb = sc(),
  ff = { nowSeconds: () => Date.now() / 1e3 };
function VP() {
  const { performance: e } = Wb;
  if (!e || !e.now) return;
  const t = Date.now() - e.now();
  return { now: () => e.now(), timeOrigin: t };
}
function WP() {
  try {
    return $P(module, "perf_hooks").performance;
  } catch {
    return;
  }
}
const eu = LP() ? WP() : VP(),
  Ah =
    eu === void 0 ? ff : { nowSeconds: () => (eu.timeOrigin + eu.now()) / 1e3 },
  ac = ff.nowSeconds.bind(ff),
  Gr = Ah.nowSeconds.bind(Ah),
  Fn = (() => {
    const { performance: e } = Wb;
    if (!e || !e.now) return;
    const t = 3600 * 1e3,
      n = e.now(),
      r = Date.now(),
      o = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
      s = o < t,
      i = e.timing && e.timing.navigationStart,
      l = typeof i == "number" ? Math.abs(i + n - r) : t,
      c = l < t;
    return s || c ? (o <= l ? e.timeOrigin : i) : r;
  })(),
  df = "baggage",
  Gb = "sentry-",
  GP = /^sentry-/,
  YP = 8192;
function KP(e) {
  if (!Dn(e) && !Array.isArray(e)) return;
  let t = {};
  if (Array.isArray(e))
    t = e.reduce((r, o) => {
      const s = Ph(o);
      return { ...r, ...s };
    }, {});
  else {
    if (!e) return;
    t = Ph(e);
  }
  const n = Object.entries(t).reduce((r, [o, s]) => {
    if (o.match(GP)) {
      const i = o.slice(Gb.length);
      r[i] = s;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function pf(e) {
  if (!e) return;
  const t = Object.entries(e).reduce(
    (n, [r, o]) => (o && (n[`${Gb}${r}`] = o), n),
    {}
  );
  return qP(t);
}
function Ph(e) {
  return e
    .split(",")
    .map((t) => t.split("=").map((n) => decodeURIComponent(n.trim())))
    .reduce((t, [n, r]) => ((t[n] = r), t), {});
}
function qP(e) {
  if (Object.keys(e).length !== 0)
    return Object.entries(e).reduce((t, [n, r], o) => {
      const s = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
        i = o === 0 ? s : `${t},${s}`;
      return i.length > YP
        ? (ys &&
            V.warn(
              `Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`
            ),
          t)
        : i;
    }, "");
}
const XP = new RegExp(
  "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
);
function JP(e) {
  if (!e) return;
  const t = e.match(XP);
  if (!t) return;
  let n;
  return (
    t[3] === "1" ? (n = !0) : t[3] === "0" && (n = !1),
    { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
  );
}
function QP(e, t) {
  const n = JP(e),
    r = KP(t),
    { traceId: o, parentSpanId: s, parentSampled: i } = n || {},
    a = { traceId: o || Ht(), spanId: Ht().substring(16), sampled: i };
  return (
    s && (a.parentSpanId = s),
    r && (a.dsc = r),
    { traceparentData: n, dynamicSamplingContext: r, propagationContext: a }
  );
}
function Gd(e = Ht(), t = Ht().substring(16), n) {
  let r = "";
  return n !== void 0 && (r = n ? "-1" : "-0"), `${e}-${t}${r}`;
}
function Hi(e, t = []) {
  return [e, t];
}
function ZP(e, t) {
  const [n, r] = e;
  return [n, [...r, t]];
}
function Rh(e, t) {
  const n = e[1];
  for (const r of n) {
    const o = r[0].type;
    if (t(r, o)) return !0;
  }
  return !1;
}
function mf(e, t) {
  return (t || new TextEncoder()).encode(e);
}
function eR(e, t) {
  const [n, r] = e;
  let o = JSON.stringify(n);
  function s(i) {
    typeof o == "string"
      ? (o = typeof i == "string" ? o + i : [mf(o, t), i])
      : o.push(typeof i == "string" ? mf(i, t) : i);
  }
  for (const i of r) {
    const [a, l] = i;
    if (
      (s(`
${JSON.stringify(a)}
`),
      typeof l == "string" || l instanceof Uint8Array)
    )
      s(l);
    else {
      let c;
      try {
        c = JSON.stringify(l);
      } catch {
        c = JSON.stringify(Pr(l));
      }
      s(c);
    }
  }
  return typeof o == "string" ? o : tR(o);
}
function tR(e) {
  const t = e.reduce((o, s) => o + s.length, 0),
    n = new Uint8Array(t);
  let r = 0;
  for (const o of e) n.set(o, r), (r += o.length);
  return n;
}
function nR(e, t) {
  const n = typeof e.data == "string" ? mf(e.data, t) : e.data;
  return [
    Hr({
      type: "attachment",
      length: n.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType,
    }),
    n,
  ];
}
const rR = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  statsd: "unknown",
};
function Nh(e) {
  return rR[e];
}
function Yb(e) {
  if (!e || !e.sdk) return;
  const { name: t, version: n } = e.sdk;
  return { name: t, version: n };
}
function oR(e, t, n, r) {
  const o =
    e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: ic(r) }),
    ...(o && { trace: Hr({ ...o }) }),
  };
}
function sR(e, t, n) {
  const r = [
    { type: "client_report" },
    { timestamp: n || ac(), discarded_events: e },
  ];
  return Hi(t ? { dsn: t } : {}, [r]);
}
const iR = 60 * 1e3;
function aR(e, t = Date.now()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) return n * 1e3;
  const r = Date.parse(`${e}`);
  return isNaN(r) ? iR : r - t;
}
function lR(e, t) {
  return e[t] || e.all || 0;
}
function cR(e, t, n = Date.now()) {
  return lR(e, t) > n;
}
function uR(e, { statusCode: t, headers: n }, r = Date.now()) {
  const o = { ...e },
    s = n && n["x-sentry-rate-limits"],
    i = n && n["retry-after"];
  if (s)
    for (const a of s.trim().split(",")) {
      const [l, c] = a.split(":", 2),
        u = parseInt(l, 10),
        f = (isNaN(u) ? 60 : u) * 1e3;
      if (!c) o.all = r + f;
      else for (const d of c.split(";")) o[d] = r + f;
    }
  else i ? (o.all = r + aR(i, r)) : t === 429 && (o.all = r + 60 * 1e3);
  return o;
}
const fe = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  Yd = "production";
function Kd() {
  return Rb("globalEventProcessors", () => []);
}
function fR(e) {
  Kd().push(e);
}
function hl(e, t, n, r = 0) {
  return new Kt((o, s) => {
    const i = e[r];
    if (t === null || typeof i != "function") o(t);
    else {
      const a = i({ ...t }, n);
      fe &&
        i.id &&
        a === null &&
        V.log(`Event processor "${i.id}" dropped event`),
        Ud(a)
          ? a.then((l) => hl(e, l, n, r + 1).then(o)).then(null, s)
          : hl(e, a, n, r + 1)
              .then(o)
              .then(null, s);
    }
  });
}
function dR(e) {
  const t = Gr(),
    n = {
      sid: Ht(),
      init: !0,
      timestamp: t,
      started: t,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => mR(n),
    };
  return e && cs(n, e), n;
}
function cs(e, t = {}) {
  if (
    (t.user &&
      (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
      !e.did &&
        !t.did &&
        (e.did = t.user.id || t.user.email || t.user.username)),
    (e.timestamp = t.timestamp || Gr()),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : Ht()),
    t.init !== void 0 && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    typeof t.started == "number" && (e.started = t.started),
    e.ignoreDuration)
  )
    e.duration = void 0;
  else if (typeof t.duration == "number") e.duration = t.duration;
  else {
    const n = e.timestamp - e.started;
    e.duration = n >= 0 ? n : 0;
  }
  t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    typeof t.errors == "number" && (e.errors = t.errors),
    t.status && (e.status = t.status);
}
function pR(e, t) {
  let n = {};
  t ? (n = { status: t }) : e.status === "ok" && (n = { status: "exited" }),
    cs(e, n);
}
function mR(e) {
  return Hr({
    sid: `${e.sid}`,
    init: e.init,
    started: new Date(e.started * 1e3).toISOString(),
    timestamp: new Date(e.timestamp * 1e3).toISOString(),
    status: e.status,
    errors: e.errors,
    did:
      typeof e.did == "number" || typeof e.did == "string"
        ? `${e.did}`
        : void 0,
    duration: e.duration,
    abnormal_mechanism: e.abnormal_mechanism,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent,
    },
  });
}
const hR = 100;
class jr {
  constructor() {
    (this._notifyingListeners = !1),
      (this._scopeListeners = []),
      (this._eventProcessors = []),
      (this._breadcrumbs = []),
      (this._attachments = []),
      (this._user = {}),
      (this._tags = {}),
      (this._extra = {}),
      (this._contexts = {}),
      (this._sdkProcessingMetadata = {}),
      (this._propagationContext = Lh());
  }
  static clone(t) {
    const n = new jr();
    return (
      t &&
        ((n._breadcrumbs = [...t._breadcrumbs]),
        (n._tags = { ...t._tags }),
        (n._extra = { ...t._extra }),
        (n._contexts = { ...t._contexts }),
        (n._user = t._user),
        (n._level = t._level),
        (n._span = t._span),
        (n._session = t._session),
        (n._transactionName = t._transactionName),
        (n._fingerprint = t._fingerprint),
        (n._eventProcessors = [...t._eventProcessors]),
        (n._requestSession = t._requestSession),
        (n._attachments = [...t._attachments]),
        (n._sdkProcessingMetadata = { ...t._sdkProcessingMetadata }),
        (n._propagationContext = { ...t._propagationContext })),
      n
    );
  }
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  addEventProcessor(t) {
    return this._eventProcessors.push(t), this;
  }
  setUser(t) {
    return (
      (this._user = t || {}),
      this._session && cs(this._session, { user: t }),
      this._notifyScopeListeners(),
      this
    );
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(t) {
    return (this._requestSession = t), this;
  }
  setTags(t) {
    return (
      (this._tags = { ...this._tags, ...t }), this._notifyScopeListeners(), this
    );
  }
  setTag(t, n) {
    return (
      (this._tags = { ...this._tags, [t]: n }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtras(t) {
    return (
      (this._extra = { ...this._extra, ...t }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtra(t, n) {
    return (
      (this._extra = { ...this._extra, [t]: n }),
      this._notifyScopeListeners(),
      this
    );
  }
  setFingerprint(t) {
    return (this._fingerprint = t), this._notifyScopeListeners(), this;
  }
  setLevel(t) {
    return (this._level = t), this._notifyScopeListeners(), this;
  }
  setTransactionName(t) {
    return (this._transactionName = t), this._notifyScopeListeners(), this;
  }
  setContext(t, n) {
    return (
      n === null ? delete this._contexts[t] : (this._contexts[t] = n),
      this._notifyScopeListeners(),
      this
    );
  }
  setSpan(t) {
    return (this._span = t), this._notifyScopeListeners(), this;
  }
  getSpan() {
    return this._span;
  }
  getTransaction() {
    const t = this.getSpan();
    return t && t.transaction;
  }
  setSession(t) {
    return (
      t ? (this._session = t) : delete this._session,
      this._notifyScopeListeners(),
      this
    );
  }
  getSession() {
    return this._session;
  }
  update(t) {
    if (!t) return this;
    if (typeof t == "function") {
      const n = t(this);
      return n instanceof jr ? n : this;
    }
    return (
      t instanceof jr
        ? ((this._tags = { ...this._tags, ...t._tags }),
          (this._extra = { ...this._extra, ...t._extra }),
          (this._contexts = { ...this._contexts, ...t._contexts }),
          t._user && Object.keys(t._user).length && (this._user = t._user),
          t._level && (this._level = t._level),
          t._fingerprint && (this._fingerprint = t._fingerprint),
          t._requestSession && (this._requestSession = t._requestSession),
          t._propagationContext &&
            (this._propagationContext = t._propagationContext))
        : as(t) &&
          ((t = t),
          (this._tags = { ...this._tags, ...t.tags }),
          (this._extra = { ...this._extra, ...t.extra }),
          (this._contexts = { ...this._contexts, ...t.contexts }),
          t.user && (this._user = t.user),
          t.level && (this._level = t.level),
          t.fingerprint && (this._fingerprint = t.fingerprint),
          t.requestSession && (this._requestSession = t.requestSession),
          t.propagationContext &&
            (this._propagationContext = t.propagationContext)),
      this
    );
  }
  clear() {
    return (
      (this._breadcrumbs = []),
      (this._tags = {}),
      (this._extra = {}),
      (this._user = {}),
      (this._contexts = {}),
      (this._level = void 0),
      (this._transactionName = void 0),
      (this._fingerprint = void 0),
      (this._requestSession = void 0),
      (this._span = void 0),
      (this._session = void 0),
      this._notifyScopeListeners(),
      (this._attachments = []),
      (this._propagationContext = Lh()),
      this
    );
  }
  addBreadcrumb(t, n) {
    const r = typeof n == "number" ? n : hR;
    if (r <= 0) return this;
    const o = { timestamp: ac(), ...t },
      s = this._breadcrumbs;
    return (
      s.push(o),
      (this._breadcrumbs = s.length > r ? s.slice(-r) : s),
      this._notifyScopeListeners(),
      this
    );
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
  }
  addAttachment(t) {
    return this._attachments.push(t), this;
  }
  getAttachments() {
    return this._attachments;
  }
  clearAttachments() {
    return (this._attachments = []), this;
  }
  applyToEvent(t, n = {}, r) {
    if (
      (this._extra &&
        Object.keys(this._extra).length &&
        (t.extra = { ...this._extra, ...t.extra }),
      this._tags &&
        Object.keys(this._tags).length &&
        (t.tags = { ...this._tags, ...t.tags }),
      this._user &&
        Object.keys(this._user).length &&
        (t.user = { ...this._user, ...t.user }),
      this._contexts &&
        Object.keys(this._contexts).length &&
        (t.contexts = { ...this._contexts, ...t.contexts }),
      this._level && (t.level = this._level),
      this._transactionName && (t.transaction = this._transactionName),
      this._span)
    ) {
      t.contexts = { trace: this._span.getTraceContext(), ...t.contexts };
      const i = this._span.transaction;
      if (i) {
        t.sdkProcessingMetadata = {
          dynamicSamplingContext: i.getDynamicSamplingContext(),
          ...t.sdkProcessingMetadata,
        };
        const a = i.name;
        a && (t.tags = { transaction: a, ...t.tags });
      }
    }
    this._applyFingerprint(t);
    const o = this._getBreadcrumbs(),
      s = [...(t.breadcrumbs || []), ...o];
    return (
      (t.breadcrumbs = s.length > 0 ? s : void 0),
      (t.sdkProcessingMetadata = {
        ...t.sdkProcessingMetadata,
        ...this._sdkProcessingMetadata,
        propagationContext: this._propagationContext,
      }),
      hl([...(r || []), ...Kd(), ...this._eventProcessors], t, n)
    );
  }
  setSDKProcessingMetadata(t) {
    return (
      (this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...t }),
      this
    );
  }
  setPropagationContext(t) {
    return (this._propagationContext = t), this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  _getBreadcrumbs() {
    return this._breadcrumbs;
  }
  _notifyScopeListeners() {
    this._notifyingListeners ||
      ((this._notifyingListeners = !0),
      this._scopeListeners.forEach((t) => {
        t(this);
      }),
      (this._notifyingListeners = !1));
  }
  _applyFingerprint(t) {
    (t.fingerprint = t.fingerprint ? Bd(t.fingerprint) : []),
      this._fingerprint &&
        (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
      t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
  }
}
function Lh() {
  return { traceId: Ht(), spanId: Ht().substring(16) };
}
const vi = "7.86.0",
  Kb = parseFloat(vi),
  gR = 100;
class qb {
  constructor(t, n = new jr(), r = Kb) {
    (this._version = r),
      (this._stack = [{ scope: n }]),
      t && this.bindClient(t);
  }
  isOlderThan(t) {
    return this._version < t;
  }
  bindClient(t) {
    const n = this.getStackTop();
    (n.client = t), t && t.setupIntegrations && t.setupIntegrations();
  }
  pushScope() {
    const t = jr.clone(this.getScope());
    return this.getStack().push({ client: this.getClient(), scope: t }), t;
  }
  popScope() {
    return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
  }
  withScope(t) {
    const n = this.pushScope();
    try {
      t(n);
    } finally {
      this.popScope();
    }
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getStack() {
    return this._stack;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  captureException(t, n) {
    const r = (this._lastEventId = n && n.event_id ? n.event_id : Ht()),
      o = new Error("Sentry syntheticException");
    return (
      this._withClient((s, i) => {
        s.captureException(
          t,
          { originalException: t, syntheticException: o, ...n, event_id: r },
          i
        );
      }),
      r
    );
  }
  captureMessage(t, n, r) {
    const o = (this._lastEventId = r && r.event_id ? r.event_id : Ht()),
      s = new Error(t);
    return (
      this._withClient((i, a) => {
        i.captureMessage(
          t,
          n,
          { originalException: t, syntheticException: s, ...r, event_id: o },
          a
        );
      }),
      o
    );
  }
  captureEvent(t, n) {
    const r = n && n.event_id ? n.event_id : Ht();
    return (
      t.type || (this._lastEventId = r),
      this._withClient((o, s) => {
        o.captureEvent(t, { ...n, event_id: r }, s);
      }),
      r
    );
  }
  lastEventId() {
    return this._lastEventId;
  }
  addBreadcrumb(t, n) {
    const { scope: r, client: o } = this.getStackTop();
    if (!o) return;
    const { beforeBreadcrumb: s = null, maxBreadcrumbs: i = gR } =
      (o.getOptions && o.getOptions()) || {};
    if (i <= 0) return;
    const l = { timestamp: ac(), ...t },
      c = s ? No(() => s(l, n)) : l;
    c !== null &&
      (o.emit && o.emit("beforeAddBreadcrumb", c, n), r.addBreadcrumb(c, i));
  }
  setUser(t) {
    this.getScope().setUser(t);
  }
  setTags(t) {
    this.getScope().setTags(t);
  }
  setExtras(t) {
    this.getScope().setExtras(t);
  }
  setTag(t, n) {
    this.getScope().setTag(t, n);
  }
  setExtra(t, n) {
    this.getScope().setExtra(t, n);
  }
  setContext(t, n) {
    this.getScope().setContext(t, n);
  }
  configureScope(t) {
    const { scope: n, client: r } = this.getStackTop();
    r && t(n);
  }
  run(t) {
    const n = $h(this);
    try {
      t(this);
    } finally {
      $h(n);
    }
  }
  getIntegration(t) {
    const n = this.getClient();
    if (!n) return null;
    try {
      return n.getIntegration(t);
    } catch {
      return (
        fe &&
          V.warn(`Cannot retrieve integration ${t.id} from the current Hub`),
        null
      );
    }
  }
  startTransaction(t, n) {
    const r = this._callExtensionMethod("startTransaction", t, n);
    return (
      fe &&
        !r &&
        (this.getClient()
          ? V.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`)
          : V.warn(
              "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'"
            )),
      r
    );
  }
  traceHeaders() {
    return this._callExtensionMethod("traceHeaders");
  }
  captureSession(t = !1) {
    if (t) return this.endSession();
    this._sendSessionUpdate();
  }
  endSession() {
    const n = this.getStackTop().scope,
      r = n.getSession();
    r && pR(r), this._sendSessionUpdate(), n.setSession();
  }
  startSession(t) {
    const { scope: n, client: r } = this.getStackTop(),
      { release: o, environment: s = Yd } = (r && r.getOptions()) || {},
      { userAgent: i } = De.navigator || {},
      a = dR({
        release: o,
        environment: s,
        user: n.getUser(),
        ...(i && { userAgent: i }),
        ...t,
      }),
      l = n.getSession && n.getSession();
    return (
      l && l.status === "ok" && cs(l, { status: "exited" }),
      this.endSession(),
      n.setSession(a),
      a
    );
  }
  shouldSendDefaultPii() {
    const t = this.getClient(),
      n = t && t.getOptions();
    return !!(n && n.sendDefaultPii);
  }
  _sendSessionUpdate() {
    const { scope: t, client: n } = this.getStackTop(),
      r = t.getSession();
    r && n && n.captureSession && n.captureSession(r);
  }
  _withClient(t) {
    const { scope: n, client: r } = this.getStackTop();
    r && t(r, n);
  }
  _callExtensionMethod(t, ...n) {
    const o = ji().__SENTRY__;
    if (o && o.extensions && typeof o.extensions[t] == "function")
      return o.extensions[t].apply(this, n);
    fe && V.warn(`Extension method ${t} couldn't be found, doing nothing.`);
  }
}
function ji() {
  return (De.__SENTRY__ = De.__SENTRY__ || { extensions: {}, hub: void 0 }), De;
}
function $h(e) {
  const t = ji(),
    n = hf(t);
  return Xb(t, e), n;
}
function Je() {
  const e = ji();
  if (e.__SENTRY__ && e.__SENTRY__.acs) {
    const t = e.__SENTRY__.acs.getCurrentHub();
    if (t) return t;
  }
  return _R(e);
}
function _R(e = ji()) {
  return (!vR(e) || hf(e).isOlderThan(Kb)) && Xb(e, new qb()), hf(e);
}
function vR(e) {
  return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
}
function hf(e) {
  return Rb("hub", () => new qb(), e);
}
function Xb(e, t) {
  if (!e) return !1;
  const n = (e.__SENTRY__ = e.__SENTRY__ || {});
  return (n.hub = t), !0;
}
function Ui(e) {
  return (e || Je()).getScope().getTransaction();
}
let Dh = !1;
function yR() {
  Dh || ((Dh = !0), Ub(gf), zb(gf));
}
function gf() {
  const e = Ui();
  if (e) {
    const t = "internal_error";
    fe && V.log(`[Tracing] Transaction: ${t} -> Global error occured`),
      e.setStatus(t);
  }
}
gf.tag = "sentry_tracingErrorCallback";
class Jb {
  constructor(t = 1e3) {
    (this._maxlen = t), (this.spans = []);
  }
  add(t) {
    this.spans.length > this._maxlen
      ? (t.spanRecorder = void 0)
      : this.spans.push(t);
  }
}
class qd {
  constructor(t = {}) {
    (this.traceId = t.traceId || Ht()),
      (this.spanId = t.spanId || Ht().substring(16)),
      (this.startTimestamp = t.startTimestamp || Gr()),
      (this.tags = t.tags || {}),
      (this.data = t.data || {}),
      (this.instrumenter = t.instrumenter || "sentry"),
      (this.origin = t.origin || "manual"),
      t.parentSpanId && (this.parentSpanId = t.parentSpanId),
      "sampled" in t && (this.sampled = t.sampled),
      t.op && (this.op = t.op),
      t.description && (this.description = t.description),
      t.name && (this.description = t.name),
      t.status && (this.status = t.status),
      t.endTimestamp && (this.endTimestamp = t.endTimestamp);
  }
  get name() {
    return this.description || "";
  }
  set name(t) {
    this.setName(t);
  }
  startChild(t) {
    const n = new qd({
      ...t,
      parentSpanId: this.spanId,
      sampled: this.sampled,
      traceId: this.traceId,
    });
    if (
      ((n.spanRecorder = this.spanRecorder),
      n.spanRecorder && n.spanRecorder.add(n),
      (n.transaction = this.transaction),
      fe && n.transaction)
    ) {
      const r = (t && t.op) || "< unknown op >",
        o = n.transaction.name || "< unknown name >",
        s = n.transaction.spanId,
        i = `[Tracing] Starting '${r}' span on transaction '${o}' (${s}).`;
      (n.transaction.metadata.spanMetadata[n.spanId] = { logMessage: i }),
        V.log(i);
    }
    return n;
  }
  setTag(t, n) {
    return (this.tags = { ...this.tags, [t]: n }), this;
  }
  setData(t, n) {
    return (this.data = { ...this.data, [t]: n }), this;
  }
  setStatus(t) {
    return (this.status = t), this;
  }
  setHttpStatus(t) {
    this.setTag("http.status_code", String(t)),
      this.setData("http.response.status_code", t);
    const n = bR(t);
    return n !== "unknown_error" && this.setStatus(n), this;
  }
  setName(t) {
    this.description = t;
  }
  isSuccess() {
    return this.status === "ok";
  }
  finish(t) {
    if (fe && this.transaction && this.transaction.spanId !== this.spanId) {
      const { logMessage: n } =
        this.transaction.metadata.spanMetadata[this.spanId];
      n && V.log(n.replace("Starting", "Finishing"));
    }
    this.endTimestamp = typeof t == "number" ? t : Gr();
  }
  toTraceparent() {
    return Gd(this.traceId, this.spanId, this.sampled);
  }
  toContext() {
    return Hr({
      data: this.data,
      description: this.description,
      endTimestamp: this.endTimestamp,
      op: this.op,
      parentSpanId: this.parentSpanId,
      sampled: this.sampled,
      spanId: this.spanId,
      startTimestamp: this.startTimestamp,
      status: this.status,
      tags: this.tags,
      traceId: this.traceId,
    });
  }
  updateWithContext(t) {
    return (
      (this.data = t.data || {}),
      (this.description = t.description),
      (this.endTimestamp = t.endTimestamp),
      (this.op = t.op),
      (this.parentSpanId = t.parentSpanId),
      (this.sampled = t.sampled),
      (this.spanId = t.spanId || this.spanId),
      (this.startTimestamp = t.startTimestamp || this.startTimestamp),
      (this.status = t.status),
      (this.tags = t.tags || {}),
      (this.traceId = t.traceId || this.traceId),
      this
    );
  }
  getTraceContext() {
    return Hr({
      data: Object.keys(this.data).length > 0 ? this.data : void 0,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
      trace_id: this.traceId,
      origin: this.origin,
    });
  }
  toJSON() {
    return Hr({
      data: Object.keys(this.data).length > 0 ? this.data : void 0,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      start_timestamp: this.startTimestamp,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
      timestamp: this.endTimestamp,
      trace_id: this.traceId,
      origin: this.origin,
    });
  }
}
function bR(e) {
  if (e < 400 && e >= 100) return "ok";
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return "unauthenticated";
      case 403:
        return "permission_denied";
      case 404:
        return "not_found";
      case 409:
        return "already_exists";
      case 413:
        return "failed_precondition";
      case 429:
        return "resource_exhausted";
      default:
        return "invalid_argument";
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return "unimplemented";
      case 503:
        return "unavailable";
      case 504:
        return "deadline_exceeded";
      default:
        return "internal_error";
    }
  return "unknown_error";
}
function lc(e, t, n) {
  const r = t.getOptions(),
    { publicKey: o } = t.getDsn() || {},
    { segment: s } = (n && n.getUser()) || {},
    i = Hr({
      environment: r.environment || Yd,
      release: r.release,
      user_segment: s,
      public_key: o,
      trace_id: e,
    });
  return t.emit && t.emit("createDsc", i), i;
}
class Qb extends qd {
  constructor(t, n) {
    super(t),
      delete this.description,
      (this._measurements = {}),
      (this._contexts = {}),
      (this._hub = n || Je()),
      (this._name = t.name || ""),
      (this.metadata = { source: "custom", ...t.metadata, spanMetadata: {} }),
      (this._trimEnd = t.trimEnd),
      (this.transaction = this);
    const r = this.metadata.dynamicSamplingContext;
    r && (this._frozenDynamicSamplingContext = { ...r });
  }
  get name() {
    return this._name;
  }
  set name(t) {
    this.setName(t);
  }
  setName(t, n = "custom") {
    (this._name = t), (this.metadata.source = n);
  }
  initSpanRecorder(t = 1e3) {
    this.spanRecorder || (this.spanRecorder = new Jb(t)),
      this.spanRecorder.add(this);
  }
  setContext(t, n) {
    n === null ? delete this._contexts[t] : (this._contexts[t] = n);
  }
  setMeasurement(t, n, r = "") {
    this._measurements[t] = { value: n, unit: r };
  }
  setMetadata(t) {
    this.metadata = { ...this.metadata, ...t };
  }
  finish(t) {
    const n = this._finishTransaction(t);
    if (n) return this._hub.captureEvent(n);
  }
  toContext() {
    const t = super.toContext();
    return Hr({ ...t, name: this.name, trimEnd: this._trimEnd });
  }
  updateWithContext(t) {
    return (
      super.updateWithContext(t),
      (this.name = t.name || ""),
      (this._trimEnd = t.trimEnd),
      this
    );
  }
  getDynamicSamplingContext() {
    if (this._frozenDynamicSamplingContext)
      return this._frozenDynamicSamplingContext;
    const t = this._hub || Je(),
      n = t.getClient();
    if (!n) return {};
    const r = t.getScope(),
      o = lc(this.traceId, n, r),
      s = this.metadata.sampleRate;
    s !== void 0 && (o.sample_rate = `${s}`);
    const i = this.metadata.source;
    return (
      i && i !== "url" && (o.transaction = this.name),
      this.sampled !== void 0 && (o.sampled = String(this.sampled)),
      o
    );
  }
  setHub(t) {
    this._hub = t;
  }
  _finishTransaction(t) {
    if (this.endTimestamp !== void 0) return;
    this.name ||
      (fe &&
        V.warn(
          "Transaction has no name, falling back to `<unlabeled transaction>`."
        ),
      (this.name = "<unlabeled transaction>")),
      super.finish(t);
    const n = this._hub.getClient();
    if (
      (n && n.emit && n.emit("finishTransaction", this), this.sampled !== !0)
    ) {
      fe &&
        V.log(
          "[Tracing] Discarding transaction because its trace was not chosen to be sampled."
        ),
        n && n.recordDroppedEvent("sample_rate", "transaction");
      return;
    }
    const r = this.spanRecorder
      ? this.spanRecorder.spans.filter((a) => a !== this && a.endTimestamp)
      : [];
    this._trimEnd &&
      r.length > 0 &&
      (this.endTimestamp = r.reduce((a, l) =>
        a.endTimestamp && l.endTimestamp
          ? a.endTimestamp > l.endTimestamp
            ? a
            : l
          : a
      ).endTimestamp);
    const o = this.metadata,
      s = {
        contexts: { ...this._contexts, trace: this.getTraceContext() },
        spans: r,
        start_timestamp: this.startTimestamp,
        tags: this.tags,
        timestamp: this.endTimestamp,
        transaction: this.name,
        type: "transaction",
        sdkProcessingMetadata: {
          ...o,
          dynamicSamplingContext: this.getDynamicSamplingContext(),
        },
        ...(o.source && { transaction_info: { source: o.source } }),
      };
    return (
      Object.keys(this._measurements).length > 0 &&
        (fe &&
          V.log(
            "[Measurements] Adding measurements to transaction",
            JSON.stringify(this._measurements, void 0, 2)
          ),
        (s.measurements = this._measurements)),
      fe && V.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),
      s
    );
  }
}
const Ha = { idleTimeout: 1e3, finalTimeout: 3e4, heartbeatInterval: 5e3 },
  ER = "finishReason",
  Ho = [
    "heartbeatFailed",
    "idleTimeout",
    "documentHidden",
    "finalTimeout",
    "externalFinish",
    "cancelled",
  ];
class wR extends Jb {
  constructor(t, n, r, o) {
    super(o),
      (this._pushActivity = t),
      (this._popActivity = n),
      (this.transactionSpanId = r);
  }
  add(t) {
    t.spanId !== this.transactionSpanId &&
      ((t.finish = (n) => {
        (t.endTimestamp = typeof n == "number" ? n : Gr()),
          this._popActivity(t.spanId);
      }),
      t.endTimestamp === void 0 && this._pushActivity(t.spanId)),
      super.add(t);
  }
}
class TR extends Qb {
  constructor(
    t,
    n,
    r = Ha.idleTimeout,
    o = Ha.finalTimeout,
    s = Ha.heartbeatInterval,
    i = !1
  ) {
    super(t, n),
      (this._idleHub = n),
      (this._idleTimeout = r),
      (this._finalTimeout = o),
      (this._heartbeatInterval = s),
      (this._onScope = i),
      (this.activities = {}),
      (this._heartbeatCounter = 0),
      (this._finished = !1),
      (this._idleTimeoutCanceledPermanently = !1),
      (this._beforeFinishCallbacks = []),
      (this._finishReason = Ho[4]),
      i &&
        (fe &&
          V.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),
        n.configureScope((a) => a.setSpan(this))),
      this._restartIdleTimeout(),
      setTimeout(() => {
        this._finished ||
          (this.setStatus("deadline_exceeded"),
          (this._finishReason = Ho[3]),
          this.finish());
      }, this._finalTimeout);
  }
  finish(t = Gr()) {
    if (
      ((this._finished = !0),
      (this.activities = {}),
      this.op === "ui.action.click" && this.setTag(ER, this._finishReason),
      this.spanRecorder)
    ) {
      fe &&
        V.log(
          "[Tracing] finishing IdleTransaction",
          new Date(t * 1e3).toISOString(),
          this.op
        );
      for (const n of this._beforeFinishCallbacks) n(this, t);
      (this.spanRecorder.spans = this.spanRecorder.spans.filter((n) => {
        if (n.spanId === this.spanId) return !0;
        n.endTimestamp ||
          ((n.endTimestamp = t),
          n.setStatus("cancelled"),
          fe &&
            V.log(
              "[Tracing] cancelling span since transaction ended early",
              JSON.stringify(n, void 0, 2)
            ));
        const r = n.startTimestamp < t,
          o = (this._finalTimeout + this._idleTimeout) / 1e3,
          s = n.endTimestamp - this.startTimestamp < o;
        if (fe) {
          const i = JSON.stringify(n, void 0, 2);
          r
            ? s ||
              V.log(
                "[Tracing] discarding Span since it finished after Transaction final timeout",
                i
              )
            : V.log(
                "[Tracing] discarding Span since it happened after Transaction was finished",
                i
              );
        }
        return r && s;
      })),
        fe && V.log("[Tracing] flushing IdleTransaction");
    } else fe && V.log("[Tracing] No active IdleTransaction");
    if (this._onScope) {
      const n = this._idleHub.getScope();
      n.getTransaction() === this && n.setSpan(void 0);
    }
    return super.finish(t);
  }
  registerBeforeFinishCallback(t) {
    this._beforeFinishCallbacks.push(t);
  }
  initSpanRecorder(t) {
    if (!this.spanRecorder) {
      const n = (o) => {
          this._finished || this._pushActivity(o);
        },
        r = (o) => {
          this._finished || this._popActivity(o);
        };
      (this.spanRecorder = new wR(n, r, this.spanId, t)),
        fe && V.log("Starting heartbeat"),
        this._pingHeartbeat();
    }
    this.spanRecorder.add(this);
  }
  cancelIdleTimeout(
    t,
    { restartOnChildSpanChange: n } = { restartOnChildSpanChange: !0 }
  ) {
    (this._idleTimeoutCanceledPermanently = n === !1),
      this._idleTimeoutID &&
        (clearTimeout(this._idleTimeoutID),
        (this._idleTimeoutID = void 0),
        Object.keys(this.activities).length === 0 &&
          this._idleTimeoutCanceledPermanently &&
          ((this._finishReason = Ho[5]), this.finish(t)));
  }
  setFinishReason(t) {
    this._finishReason = t;
  }
  _restartIdleTimeout(t) {
    this.cancelIdleTimeout(),
      (this._idleTimeoutID = setTimeout(() => {
        !this._finished &&
          Object.keys(this.activities).length === 0 &&
          ((this._finishReason = Ho[1]), this.finish(t));
      }, this._idleTimeout));
  }
  _pushActivity(t) {
    this.cancelIdleTimeout(void 0, {
      restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently,
    }),
      fe && V.log(`[Tracing] pushActivity: ${t}`),
      (this.activities[t] = !0),
      fe &&
        V.log(
          "[Tracing] new activities count",
          Object.keys(this.activities).length
        );
  }
  _popActivity(t) {
    if (
      (this.activities[t] &&
        (fe && V.log(`[Tracing] popActivity ${t}`),
        delete this.activities[t],
        fe &&
          V.log(
            "[Tracing] new activities count",
            Object.keys(this.activities).length
          )),
      Object.keys(this.activities).length === 0)
    ) {
      const n = Gr();
      this._idleTimeoutCanceledPermanently
        ? ((this._finishReason = Ho[5]), this.finish(n))
        : this._restartIdleTimeout(n + this._idleTimeout / 1e3);
    }
  }
  _beat() {
    if (this._finished) return;
    const t = Object.keys(this.activities).join("");
    t === this._prevHeartbeatString
      ? this._heartbeatCounter++
      : (this._heartbeatCounter = 1),
      (this._prevHeartbeatString = t),
      this._heartbeatCounter >= 3
        ? (fe &&
            V.log(
              "[Tracing] Transaction finished because of no change for 3 heart beats"
            ),
          this.setStatus("deadline_exceeded"),
          (this._finishReason = Ho[0]),
          this.finish())
        : this._pingHeartbeat();
  }
  _pingHeartbeat() {
    fe &&
      V.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
      setTimeout(() => {
        this._beat();
      }, this._heartbeatInterval);
  }
}
function SR(e, t, n, r, o) {
  const { normalizeDepth: s = 3, normalizeMaxBreadth: i = 1e3 } = e,
    a = {
      ...t,
      event_id: t.event_id || n.event_id || Ht(),
      timestamp: t.timestamp || ac(),
    },
    l = n.integrations || e.integrations.map((d) => d.name);
  CR(a, e), xR(a, l), t.type === void 0 && OR(a, e.stackParser);
  let c = r;
  n.captureContext && (c = jr.clone(c).update(n.captureContext)),
    n.mechanism && _i(a, n.mechanism);
  let u = Oo(a);
  const f = o && o.getEventProcessors ? o.getEventProcessors() : [];
  if (c) {
    if (c.getAttachments) {
      const d = [...(n.attachments || []), ...c.getAttachments()];
      d.length && (n.attachments = d);
    }
    u = c.applyToEvent(a, n, f);
  } else u = hl([...f, ...Kd()], a, n);
  return u.then(
    (d) => (d && kR(d), typeof s == "number" && s > 0 ? IR(d, s, i) : d)
  );
}
function CR(e, t) {
  const { environment: n, release: r, dist: o, maxValueLength: s = 250 } = t;
  "environment" in e || (e.environment = "environment" in t ? n : Yd),
    e.release === void 0 && r !== void 0 && (e.release = r),
    e.dist === void 0 && o !== void 0 && (e.dist = o),
    e.message && (e.message = es(e.message, s));
  const i = e.exception && e.exception.values && e.exception.values[0];
  i && i.value && (i.value = es(i.value, s));
  const a = e.request;
  a && a.url && (a.url = es(a.url, s));
}
const Mh = new WeakMap();
function OR(e, t) {
  const n = De._sentryDebugIds;
  if (!n) return;
  let r;
  const o = Mh.get(t);
  o ? (r = o) : ((r = new Map()), Mh.set(t, r));
  const s = Object.keys(n).reduce((i, a) => {
    let l;
    const c = r.get(a);
    c ? (l = c) : ((l = t(a)), r.set(a, l));
    for (let u = l.length - 1; u >= 0; u--) {
      const f = l[u];
      if (f.filename) {
        i[f.filename] = n[a];
        break;
      }
    }
    return i;
  }, {});
  try {
    e.exception.values.forEach((i) => {
      i.stacktrace.frames.forEach((a) => {
        a.filename && (a.debug_id = s[a.filename]);
      });
    });
  } catch {}
}
function kR(e) {
  const t = {};
  try {
    e.exception.values.forEach((r) => {
      r.stacktrace.frames.forEach((o) => {
        o.debug_id &&
          (o.abs_path
            ? (t[o.abs_path] = o.debug_id)
            : o.filename && (t[o.filename] = o.debug_id),
          delete o.debug_id);
      });
    });
  } catch {}
  if (Object.keys(t).length === 0) return;
  (e.debug_meta = e.debug_meta || {}),
    (e.debug_meta.images = e.debug_meta.images || []);
  const n = e.debug_meta.images;
  Object.keys(t).forEach((r) => {
    n.push({ type: "sourcemap", code_file: r, debug_id: t[r] });
  });
}
function xR(e, t) {
  t.length > 0 &&
    ((e.sdk = e.sdk || {}),
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
}
function IR(e, t, n) {
  if (!e) return null;
  const r = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map((o) => ({
        ...o,
        ...(o.data && { data: Pr(o.data, t, n) }),
      })),
    }),
    ...(e.user && { user: Pr(e.user, t, n) }),
    ...(e.contexts && { contexts: Pr(e.contexts, t, n) }),
    ...(e.extra && { extra: Pr(e.extra, t, n) }),
  };
  return (
    e.contexts &&
      e.contexts.trace &&
      r.contexts &&
      ((r.contexts.trace = e.contexts.trace),
      e.contexts.trace.data &&
        (r.contexts.trace.data = Pr(e.contexts.trace.data, t, n))),
    e.spans &&
      (r.spans = e.spans.map(
        (o) => (o.data && (o.data = Pr(o.data, t, n)), o)
      )),
    r
  );
}
function AR(e) {
  if (e)
    return PR(e) ? { captureContext: e } : NR(e) ? { captureContext: e } : e;
}
function PR(e) {
  return e instanceof jr || typeof e == "function";
}
const RR = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "requestSession",
  "propagationContext",
];
function NR(e) {
  return Object.keys(e).some((t) => RR.includes(t));
}
function Zb(e, t) {
  return Je().captureException(e, AR(t));
}
function LR(e) {
  Je().setUser(e);
}
function $R(e) {
  Je().withScope(e);
}
function e0() {
  return Je().getClient();
}
function cc(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
  const t = e0(),
    n = e || (t && t.getOptions());
  return (
    !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
  );
}
function t0(e, t, n) {
  if (!cc(t)) return (e.sampled = !1), e;
  if (e.sampled !== void 0)
    return e.setMetadata({ sampleRate: Number(e.sampled) }), e;
  let r;
  return (
    typeof t.tracesSampler == "function"
      ? ((r = t.tracesSampler(n)), e.setMetadata({ sampleRate: Number(r) }))
      : n.parentSampled !== void 0
      ? (r = n.parentSampled)
      : typeof t.tracesSampleRate < "u"
      ? ((r = t.tracesSampleRate), e.setMetadata({ sampleRate: Number(r) }))
      : ((r = 1), e.setMetadata({ sampleRate: r })),
    DR(r)
      ? r
        ? ((e.sampled = Math.random() < r),
          e.sampled
            ? (fe &&
                V.log(`[Tracing] starting ${e.op} transaction - ${e.name}`),
              e)
            : (fe &&
                V.log(
                  `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
                    r
                  )})`
                ),
              e))
        : (fe &&
            V.log(
              `[Tracing] Discarding transaction because ${
                typeof t.tracesSampler == "function"
                  ? "tracesSampler returned 0 or false"
                  : "a negative sampling decision was inherited or tracesSampleRate is set to 0"
              }`
            ),
          (e.sampled = !1),
          e)
      : (fe &&
          V.warn(
            "[Tracing] Discarding transaction because of invalid sample rate."
          ),
        (e.sampled = !1),
        e)
  );
}
function DR(e) {
  return Ab(e) || !(typeof e == "number" || typeof e == "boolean")
    ? (fe &&
        V.warn(
          `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
            e
          )} of type ${JSON.stringify(typeof e)}.`
        ),
      !1)
    : e < 0 || e > 1
    ? (fe &&
        V.warn(
          `[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`
        ),
      !1)
    : !0;
}
function MR() {
  const t = this.getScope().getSpan();
  return t ? { "sentry-trace": t.toTraceparent() } : {};
}
function FR(e, t) {
  const n = this.getClient(),
    r = (n && n.getOptions()) || {},
    o = r.instrumenter || "sentry",
    s = e.instrumenter || "sentry";
  o !== s &&
    (fe &&
      V.error(`A transaction was started with instrumenter=\`${s}\`, but the SDK is configured with the \`${o}\` instrumenter.
The transaction will not be sampled. Please use the ${o} instrumentation to start transactions.`),
    (e.sampled = !1));
  let i = new Qb(e, this);
  return (
    (i = t0(i, r, {
      parentSampled: e.parentSampled,
      transactionContext: e,
      ...t,
    })),
    i.sampled && i.initSpanRecorder(r._experiments && r._experiments.maxSpans),
    n && n.emit && n.emit("startTransaction", i),
    i
  );
}
function Fh(e, t, n, r, o, s, i) {
  const a = e.getClient(),
    l = (a && a.getOptions()) || {};
  let c = new TR(t, e, n, r, i, o);
  return (
    (c = t0(c, l, {
      parentSampled: t.parentSampled,
      transactionContext: t,
      ...s,
    })),
    c.sampled && c.initSpanRecorder(l._experiments && l._experiments.maxSpans),
    a && a.emit && a.emit("startTransaction", c),
    c
  );
}
function HR() {
  const e = ji();
  e.__SENTRY__ &&
    ((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
    e.__SENTRY__.extensions.startTransaction ||
      (e.__SENTRY__.extensions.startTransaction = FR),
    e.__SENTRY__.extensions.traceHeaders ||
      (e.__SENTRY__.extensions.traceHeaders = MR),
    yR());
}
function jR(e, t) {
  return (
    t &&
      ((e.sdk = e.sdk || {}),
      (e.sdk.name = e.sdk.name || t.name),
      (e.sdk.version = e.sdk.version || t.version),
      (e.sdk.integrations = [
        ...(e.sdk.integrations || []),
        ...(t.integrations || []),
      ]),
      (e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])])),
    e
  );
}
function UR(e, t, n, r) {
  const o = Yb(n),
    s = {
      sent_at: new Date().toISOString(),
      ...(o && { sdk: o }),
      ...(!!r && t && { dsn: ic(t) }),
    },
    i =
      "aggregates" in e
        ? [{ type: "sessions" }, e]
        : [{ type: "session" }, e.toJSON()];
  return Hi(s, [i]);
}
function zR(e, t, n, r) {
  const o = Yb(n),
    s = e.type && e.type !== "replay_event" ? e.type : "event";
  jR(e, n && n.sdk);
  const i = oR(e, o, r, t);
  return delete e.sdkProcessingMetadata, Hi(i, [[{ type: s }, e]]);
}
const BR = "7";
function VR(e) {
  const t = e.protocol ? `${e.protocol}:` : "",
    n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function WR(e) {
  return `${VR(e)}${e.projectId}/envelope/`;
}
function GR(e, t) {
  return uP({
    sentry_key: e.publicKey,
    sentry_version: BR,
    ...(t && { sentry_client: `${t.name}/${t.version}` }),
  });
}
function YR(e, t = {}) {
  const n = typeof t == "string" ? t : t.tunnel,
    r = typeof t == "string" || !t._metadata ? void 0 : t._metadata.sdk;
  return n || `${WR(e)}?${GR(e, r)}`;
}
const Hh = [];
function KR(e) {
  const t = {};
  return (
    e.forEach((n) => {
      const { name: r } = n,
        o = t[r];
      (o && !o.isDefaultInstance && n.isDefaultInstance) || (t[r] = n);
    }),
    Object.keys(t).map((n) => t[n])
  );
}
function qR(e) {
  const t = e.defaultIntegrations || [],
    n = e.integrations;
  t.forEach((i) => {
    i.isDefaultInstance = !0;
  });
  let r;
  Array.isArray(n)
    ? (r = [...t, ...n])
    : typeof n == "function"
    ? (r = Bd(n(t)))
    : (r = t);
  const o = KR(r),
    s = JR(o, (i) => i.name === "Debug");
  if (s !== -1) {
    const [i] = o.splice(s, 1);
    o.push(i);
  }
  return o;
}
function XR(e, t) {
  const n = {};
  return (
    t.forEach((r) => {
      r && n0(e, r, n);
    }),
    n
  );
}
function n0(e, t, n) {
  if (
    ((n[t.name] = t),
    Hh.indexOf(t.name) === -1 && (t.setupOnce(fR, Je), Hh.push(t.name)),
    t.setup && typeof t.setup == "function" && t.setup(e),
    e.on && typeof t.preprocessEvent == "function")
  ) {
    const r = t.preprocessEvent.bind(t);
    e.on("preprocessEvent", (o, s) => r(o, s, e));
  }
  if (e.addEventProcessor && typeof t.processEvent == "function") {
    const r = t.processEvent.bind(t),
      o = Object.assign((s, i) => r(s, i, e), { id: t.name });
    e.addEventProcessor(o);
  }
  fe && V.log(`Integration installed: ${t.name}`);
}
function JR(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n]) === !0) return n;
  return -1;
}
const jh = "Not capturing exception because it's already been captured.";
class QR {
  constructor(t) {
    if (
      ((this._options = t),
      (this._integrations = {}),
      (this._integrationsInitialized = !1),
      (this._numProcessing = 0),
      (this._outcomes = {}),
      (this._hooks = {}),
      (this._eventProcessors = []),
      t.dsn
        ? (this._dsn = cP(t.dsn))
        : fe && V.warn("No DSN provided, client will not send events."),
      this._dsn)
    ) {
      const n = YR(this._dsn, t);
      this._transport = t.transport({
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: n,
      });
    }
  }
  captureException(t, n, r) {
    if (Oh(t)) {
      fe && V.log(jh);
      return;
    }
    let o = n && n.event_id;
    return (
      this._process(
        this.eventFromException(t, n)
          .then((s) => this._captureEvent(s, n, r))
          .then((s) => {
            o = s;
          })
      ),
      o
    );
  }
  captureMessage(t, n, r, o) {
    let s = r && r.event_id;
    const i = jd(t)
      ? this.eventFromMessage(String(t), n, r)
      : this.eventFromException(t, r);
    return (
      this._process(
        i
          .then((a) => this._captureEvent(a, r, o))
          .then((a) => {
            s = a;
          })
      ),
      s
    );
  }
  captureEvent(t, n, r) {
    if (n && n.originalException && Oh(n.originalException)) {
      fe && V.log(jh);
      return;
    }
    let o = n && n.event_id;
    return (
      this._process(
        this._captureEvent(t, n, r).then((s) => {
          o = s;
        })
      ),
      o
    );
  }
  captureSession(t) {
    typeof t.release != "string"
      ? fe &&
        V.warn("Discarded session because of missing or non-string release")
      : (this.sendSession(t), cs(t, { init: !1 }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(t) {
    const n = this._transport;
    return n
      ? this._isClientDoneProcessing(t).then((r) =>
          n.flush(t).then((o) => r && o)
        )
      : Oo(!0);
  }
  close(t) {
    return this.flush(t).then((n) => ((this.getOptions().enabled = !1), n));
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(t) {
    this._eventProcessors.push(t);
  }
  setupIntegrations(t) {
    ((t && !this._integrationsInitialized) ||
      (this._isEnabled() && !this._integrationsInitialized)) &&
      ((this._integrations = XR(this, this._options.integrations)),
      (this._integrationsInitialized = !0));
  }
  getIntegrationById(t) {
    return this._integrations[t];
  }
  getIntegration(t) {
    try {
      return this._integrations[t.id] || null;
    } catch {
      return (
        fe &&
          V.warn(`Cannot retrieve integration ${t.id} from the current Client`),
        null
      );
    }
  }
  addIntegration(t) {
    n0(this, t, this._integrations);
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    let r = zR(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || [])
      r = ZP(
        r,
        nR(
          s,
          this._options.transportOptions &&
            this._options.transportOptions.textEncoder
        )
      );
    const o = this._sendEnvelope(r);
    o && o.then((s) => this.emit("afterSendEvent", t, s), null);
  }
  sendSession(t) {
    const n = UR(t, this._dsn, this._options._metadata, this._options.tunnel);
    this._sendEnvelope(n);
  }
  recordDroppedEvent(t, n, r) {
    if (this._options.sendClientReports) {
      const o = `${t}:${n}`;
      fe && V.log(`Adding outcome: "${o}"`),
        (this._outcomes[o] = this._outcomes[o] + 1 || 1);
    }
  }
  on(t, n) {
    this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(n);
  }
  emit(t, ...n) {
    this._hooks[t] && this._hooks[t].forEach((r) => r(...n));
  }
  _updateSessionFromEvent(t, n) {
    let r = !1,
      o = !1;
    const s = n.exception && n.exception.values;
    if (s) {
      o = !0;
      for (const l of s) {
        const c = l.mechanism;
        if (c && c.handled === !1) {
          r = !0;
          break;
        }
      }
    }
    const i = t.status === "ok";
    ((i && t.errors === 0) || (i && r)) &&
      (cs(t, {
        ...(r && { status: "crashed" }),
        errors: t.errors || Number(o || r),
      }),
      this.captureSession(t));
  }
  _isClientDoneProcessing(t) {
    return new Kt((n) => {
      let r = 0;
      const o = 1,
        s = setInterval(() => {
          this._numProcessing == 0
            ? (clearInterval(s), n(!0))
            : ((r += o), t && r >= t && (clearInterval(s), n(!1)));
        }, o);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(t, n, r) {
    const o = this.getOptions(),
      s = Object.keys(this._integrations);
    return (
      !n.integrations && s.length > 0 && (n.integrations = s),
      this.emit("preprocessEvent", t, n),
      SR(o, t, n, r, this).then((i) => {
        if (i === null) return i;
        const { propagationContext: a } = i.sdkProcessingMetadata || {};
        if (!(i.contexts && i.contexts.trace) && a) {
          const { traceId: c, spanId: u, parentSpanId: f, dsc: d } = a;
          i.contexts = {
            trace: { trace_id: c, span_id: u, parent_span_id: f },
            ...i.contexts,
          };
          const m = d || lc(c, this, r);
          i.sdkProcessingMetadata = {
            dynamicSamplingContext: m,
            ...i.sdkProcessingMetadata,
          };
        }
        return i;
      })
    );
  }
  _captureEvent(t, n = {}, r) {
    return this._processEvent(t, n, r).then(
      (o) => o.event_id,
      (o) => {
        if (fe) {
          const s = o;
          s.logLevel === "log" ? V.log(s.message) : V.warn(s);
        }
      }
    );
  }
  _processEvent(t, n, r) {
    const o = this.getOptions(),
      { sampleRate: s } = o,
      i = o0(t),
      a = r0(t),
      l = t.type || "error",
      c = `before send for type \`${l}\``;
    if (a && typeof s == "number" && Math.random() > s)
      return (
        this.recordDroppedEvent("sample_rate", "error", t),
        Wd(
          new An(
            `Discarding event because it's not included in the random sample (sampling rate = ${s})`,
            "log"
          )
        )
      );
    const u = l === "replay_event" ? "replay" : l;
    return this._prepareEvent(t, n, r)
      .then((f) => {
        if (f === null)
          throw (
            (this.recordDroppedEvent("event_processor", u, t),
            new An(
              "An event processor returned `null`, will not send event.",
              "log"
            ))
          );
        if (n.data && n.data.__sentry__ === !0) return f;
        const m = e4(o, f, n);
        return ZR(m, c);
      })
      .then((f) => {
        if (f === null)
          throw (
            (this.recordDroppedEvent("before_send", u, t),
            new An(`${c} returned \`null\`, will not send event.`, "log"))
          );
        const d = r && r.getSession();
        !i && d && this._updateSessionFromEvent(d, f);
        const m = f.transaction_info;
        if (i && m && f.transaction !== t.transaction) {
          const g = "custom";
          f.transaction_info = { ...m, source: g };
        }
        return this.sendEvent(f, n), f;
      })
      .then(null, (f) => {
        throw f instanceof An
          ? f
          : (this.captureException(f, {
              data: { __sentry__: !0 },
              originalException: f,
            }),
            new An(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${f}`));
      });
  }
  _process(t) {
    this._numProcessing++,
      t.then(
        (n) => (this._numProcessing--, n),
        (n) => (this._numProcessing--, n)
      );
  }
  _sendEnvelope(t) {
    if ((this.emit("beforeEnvelope", t), this._isEnabled() && this._transport))
      return this._transport.send(t).then(null, (n) => {
        fe && V.error("Error while sending event:", n);
      });
    fe && V.error("Transport disabled");
  }
  _clearOutcomes() {
    const t = this._outcomes;
    return (
      (this._outcomes = {}),
      Object.keys(t).map((n) => {
        const [r, o] = n.split(":");
        return { reason: r, category: o, quantity: t[n] };
      })
    );
  }
}
function ZR(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (Ud(e))
    return e.then(
      (r) => {
        if (!as(r) && r !== null) throw new An(n);
        return r;
      },
      (r) => {
        throw new An(`${t} rejected with ${r}`);
      }
    );
  if (!as(e) && e !== null) throw new An(n);
  return e;
}
function e4(e, t, n) {
  const { beforeSend: r, beforeSendTransaction: o } = e;
  return r0(t) && r ? r(t, n) : o0(t) && o ? o(t, n) : t;
}
function r0(e) {
  return e.type === void 0;
}
function o0(e) {
  return e.type === "transaction";
}
function t4(e, t) {
  t.debug === !0 &&
    (fe
      ? V.enable()
      : No(() => {
          console.warn(
            "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
          );
        }));
  const n = Je();
  n.getScope().update(t.initialScope);
  const o = new e(t);
  n.bindClient(o);
}
const n4 = 30;
function s0(e, t, n = UP(e.bufferSize || n4)) {
  let r = {};
  const o = (i) => n.drain(i);
  function s(i) {
    const a = [];
    if (
      (Rh(i, (f, d) => {
        const m = Nh(d);
        if (cR(r, m)) {
          const g = Uh(f, d);
          e.recordDroppedEvent("ratelimit_backoff", m, g);
        } else a.push(f);
      }),
      a.length === 0)
    )
      return Oo();
    const l = Hi(i[0], a),
      c = (f) => {
        Rh(l, (d, m) => {
          const g = Uh(d, m);
          e.recordDroppedEvent(f, Nh(m), g);
        });
      },
      u = () =>
        t({ body: eR(l, e.textEncoder) }).then(
          (f) => (
            f.statusCode !== void 0 &&
              (f.statusCode < 200 || f.statusCode >= 300) &&
              fe &&
              V.warn(
                `Sentry responded with status code ${f.statusCode} to sent event.`
              ),
            (r = uR(r, f)),
            f
          ),
          (f) => {
            throw (c("network_error"), f);
          }
        );
    return n.add(u).then(
      (f) => f,
      (f) => {
        if (f instanceof An)
          return (
            fe && V.error("Skipped sending event because buffer is full."),
            c("queue_overflow"),
            Oo()
          );
        throw f;
      }
    );
  }
  return (s.__sentry__baseTransport__ = !0), { send: s, flush: o };
}
function Uh(e, t) {
  if (!(t !== "event" && t !== "transaction"))
    return Array.isArray(e) ? e[1] : void 0;
}
let zh;
class uc {
  static __initStatic() {
    this.id = "FunctionToString";
  }
  constructor() {
    this.name = uc.id;
  }
  setupOnce() {
    zh = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const n = zd(this) || this;
        return zh.apply(n, t);
      };
    } catch {}
  }
}
uc.__initStatic();
const r4 = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
  ],
  o4 = [
    /^.*\/healthcheck$/,
    /^.*\/healthy$/,
    /^.*\/live$/,
    /^.*\/ready$/,
    /^.*\/heartbeat$/,
    /^.*\/health$/,
    /^.*\/healthz$/,
  ];
class fc {
  static __initStatic() {
    this.id = "InboundFilters";
  }
  constructor(t = {}) {
    (this.name = fc.id), (this._options = t);
  }
  setupOnce(t, n) {}
  processEvent(t, n, r) {
    const o = r.getOptions(),
      s = s4(this._options, o);
    return i4(t, s) ? null : t;
  }
}
fc.__initStatic();
function s4(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : r4),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
      ...(e.disableTransactionDefaults ? [] : o4),
    ],
    ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0,
  };
}
function i4(e, t) {
  return t.ignoreInternal && d4(e)
    ? (fe &&
        V.warn(`Event dropped due to being internal Sentry Error.
Event: ${Nr(e)}`),
      !0)
    : a4(e, t.ignoreErrors)
    ? (fe &&
        V.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Nr(e)}`),
      !0)
    : l4(e, t.ignoreTransactions)
    ? (fe &&
        V.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Nr(e)}`),
      !0)
    : c4(e, t.denyUrls)
    ? (fe &&
        V.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Nr(e)}.
Url: ${gl(e)}`),
      !0)
    : u4(e, t.allowUrls)
    ? !1
    : (fe &&
        V.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Nr(e)}.
Url: ${gl(e)}`),
      !0);
}
function a4(e, t) {
  return e.type || !t || !t.length ? !1 : f4(e).some((n) => Fi(n, t));
}
function l4(e, t) {
  if (e.type !== "transaction" || !t || !t.length) return !1;
  const n = e.transaction;
  return n ? Fi(n, t) : !1;
}
function c4(e, t) {
  if (!t || !t.length) return !1;
  const n = gl(e);
  return n ? Fi(n, t) : !1;
}
function u4(e, t) {
  if (!t || !t.length) return !0;
  const n = gl(e);
  return n ? Fi(n, t) : !0;
}
function f4(e) {
  const t = [];
  e.message && t.push(e.message);
  let n;
  try {
    n = e.exception.values[e.exception.values.length - 1];
  } catch {}
  return (
    n &&
      n.value &&
      (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`)),
    fe &&
      t.length === 0 &&
      V.error(`Could not extract message for event ${Nr(e)}`),
    t
  );
}
function d4(e) {
  try {
    return e.exception.values[0].type === "SentryError";
  } catch {}
  return !1;
}
function p4(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
      return n.filename || null;
  }
  return null;
}
function gl(e) {
  try {
    let t;
    try {
      t = e.exception.values[0].stacktrace.frames;
    } catch {}
    return t ? p4(t) : null;
  } catch {
    return fe && V.error(`Cannot extract url for event ${Nr(e)}`), null;
  }
}
const $e = De;
let _f = 0;
function i0() {
  return _f > 0;
}
function m4() {
  _f++,
    setTimeout(() => {
      _f--;
    });
}
function us(e, t = {}, n) {
  if (typeof e != "function") return e;
  try {
    const o = e.__sentry_wrapped__;
    if (o) return o;
    if (zd(e)) return e;
  } catch {
    return e;
  }
  const r = function () {
    const o = Array.prototype.slice.call(arguments);
    try {
      n && typeof n == "function" && n.apply(this, arguments);
      const s = o.map((i) => us(i, t));
      return e.apply(this, s);
    } catch (s) {
      throw (
        (m4(),
        $R((i) => {
          i.addEventProcessor(
            (a) => (
              t.mechanism && (rf(a, void 0, void 0), _i(a, t.mechanism)),
              (a.extra = { ...a.extra, arguments: o }),
              a
            )
          ),
            Zb(s);
        }),
        s)
      );
    }
  };
  try {
    for (const o in e)
      Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
  } catch {}
  Lb(r, e), gi(e, "__sentry_wrapped__", r);
  try {
    Object.getOwnPropertyDescriptor(r, "name").configurable &&
      Object.defineProperty(r, "name", {
        get() {
          return e.name;
        },
      });
  } catch {}
  return r;
}
const Zn = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function a0(e, t) {
  const n = Xd(e, t),
    r = { type: t && t.name, value: v4(t) };
  return (
    n.length && (r.stacktrace = { frames: n }),
    r.type === void 0 &&
      r.value === "" &&
      (r.value = "Unrecoverable error caught"),
    r
  );
}
function h4(e, t, n, r) {
  const s = Je().getClient(),
    i = s && s.getOptions().normalizeDepth,
    a = {
      exception: {
        values: [
          {
            type: oc(t)
              ? t.constructor.name
              : r
              ? "UnhandledRejection"
              : "Error",
            value: E4(t, { isUnhandledRejection: r }),
          },
        ],
      },
      extra: { __serialized__: Vb(t, i) },
    };
  if (n) {
    const l = Xd(e, n);
    l.length && (a.exception.values[0].stacktrace = { frames: l });
  }
  return a;
}
function tu(e, t) {
  return { exception: { values: [a0(e, t)] } };
}
function Xd(e, t) {
  const n = t.stacktrace || t.stack || "",
    r = _4(t);
  try {
    return e(n, r);
  } catch {}
  return [];
}
const g4 = /Minified React error #\d+;/i;
function _4(e) {
  if (e) {
    if (typeof e.framesToPop == "number") return e.framesToPop;
    if (g4.test(e.message)) return 1;
  }
  return 0;
}
function v4(e) {
  const t = e && e.message;
  return t
    ? t.error && typeof t.error.message == "string"
      ? t.error.message
      : t
    : "No error message";
}
function y4(e, t, n, r) {
  const o = (n && n.syntheticException) || void 0,
    s = Jd(e, t, o, r);
  return (
    _i(s),
    (s.level = "error"),
    n && n.event_id && (s.event_id = n.event_id),
    Oo(s)
  );
}
function b4(e, t, n = "info", r, o) {
  const s = (r && r.syntheticException) || void 0,
    i = vf(e, t, s, o);
  return (i.level = n), r && r.event_id && (i.event_id = r.event_id), Oo(i);
}
function Jd(e, t, n, r, o) {
  let s;
  if (Hd(t) && t.error) return tu(e, t.error);
  if (_h(t) || GA(t)) {
    const i = t;
    if ("stack" in t) s = tu(e, t);
    else {
      const a = i.name || (_h(i) ? "DOMError" : "DOMException"),
        l = i.message ? `${a}: ${i.message}` : a;
      (s = vf(e, l, n, r)), rf(s, l);
    }
    return (
      "code" in i && (s.tags = { ...s.tags, "DOMException.code": `${i.code}` }),
      s
    );
  }
  return Ib(t)
    ? tu(e, t)
    : as(t) || oc(t)
    ? ((s = h4(e, t, n, o)), _i(s, { synthetic: !0 }), s)
    : ((s = vf(e, t, n, r)),
      rf(s, `${t}`, void 0),
      _i(s, { synthetic: !0 }),
      s);
}
function vf(e, t, n, r) {
  const o = { message: t };
  if (r && n) {
    const s = Xd(e, n);
    s.length &&
      (o.exception = { values: [{ value: t, stacktrace: { frames: s } }] });
  }
  return o;
}
function E4(e, { isUnhandledRejection: t }) {
  const n = fP(e),
    r = t ? "promise rejection" : "exception";
  return Hd(e)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    : oc(e)
    ? `Event \`${w4(e)}\` (type=${e.type}) captured as ${r}`
    : `Object captured as ${r} with keys: ${n}`;
}
function w4(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0;
  } catch {}
}
function T4(e, { metadata: t, tunnel: n, dsn: r }) {
  const o = {
      event_id: e.event_id,
      sent_at: new Date().toISOString(),
      ...(t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
      ...(!!n && !!r && { dsn: ic(r) }),
    },
    s = S4(e);
  return Hi(o, [s]);
}
function S4(e) {
  return [{ type: "user_report" }, e];
}
class C4 extends QR {
  constructor(t) {
    const n = $e.SENTRY_SDK_SOURCE || NP();
    (t._metadata = t._metadata || {}),
      (t._metadata.sdk = t._metadata.sdk || {
        name: "sentry.javascript.browser",
        packages: [{ name: `${n}:@sentry/browser`, version: vi }],
        version: vi,
      }),
      super(t),
      t.sendClientReports &&
        $e.document &&
        $e.document.addEventListener("visibilitychange", () => {
          $e.document.visibilityState === "hidden" && this._flushOutcomes();
        });
  }
  eventFromException(t, n) {
    return y4(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", r) {
    return b4(
      this._options.stackParser,
      t,
      n,
      r,
      this._options.attachStacktrace
    );
  }
  captureUserFeedback(t) {
    if (!this._isEnabled()) {
      Zn && V.warn("SDK not enabled, will not capture user feedback.");
      return;
    }
    const n = T4(t, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel,
    });
    this._sendEnvelope(n);
  }
  _prepareEvent(t, n, r) {
    return (
      (t.platform = t.platform || "javascript"), super._prepareEvent(t, n, r)
    );
  }
  _flushOutcomes() {
    const t = this._clearOutcomes();
    if (t.length === 0) {
      Zn && V.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      Zn && V.log("No dsn provided, will not send outcomes");
      return;
    }
    Zn && V.log("Sending outcomes:", t);
    const n = sR(t, this._options.tunnel && ic(this._dsn));
    this._sendEnvelope(n);
  }
}
let js;
function O4() {
  if (js) return js;
  if (lf($e.fetch)) return (js = $e.fetch.bind($e));
  const e = $e.document;
  let t = $e.fetch;
  if (e && typeof e.createElement == "function")
    try {
      const n = e.createElement("iframe");
      (n.hidden = !0), e.head.appendChild(n);
      const r = n.contentWindow;
      r && r.fetch && (t = r.fetch), e.head.removeChild(n);
    } catch (n) {
      Zn &&
        V.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
    }
  return (js = t.bind($e));
}
function k4() {
  js = void 0;
}
function x4(e, t = O4()) {
  let n = 0,
    r = 0;
  function o(s) {
    const i = s.body.length;
    (n += i), r++;
    const a = {
      body: s.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: e.headers,
      keepalive: n <= 6e4 && r < 15,
      ...e.fetchOptions,
    };
    try {
      return t(e.url, a).then(
        (l) => (
          (n -= i),
          r--,
          {
            statusCode: l.status,
            headers: {
              "x-sentry-rate-limits": l.headers.get("X-Sentry-Rate-Limits"),
              "retry-after": l.headers.get("Retry-After"),
            },
          }
        )
      );
    } catch (l) {
      return k4(), (n -= i), r--, Wd(l);
    }
  }
  return s0(e, o);
}
const I4 = 4;
function A4(e) {
  function t(n) {
    return new Kt((r, o) => {
      const s = new XMLHttpRequest();
      (s.onerror = o),
        (s.onreadystatechange = () => {
          s.readyState === I4 &&
            r({
              statusCode: s.status,
              headers: {
                "x-sentry-rate-limits": s.getResponseHeader(
                  "X-Sentry-Rate-Limits"
                ),
                "retry-after": s.getResponseHeader("Retry-After"),
              },
            });
        }),
        s.open("POST", e.url);
      for (const i in e.headers)
        Object.prototype.hasOwnProperty.call(e.headers, i) &&
          s.setRequestHeader(i, e.headers[i]);
      s.send(n.body);
    });
  }
  return s0(e, t);
}
const dc = "?",
  P4 = 30,
  R4 = 40,
  N4 = 50;
function Qd(e, t, n, r) {
  const o = { filename: e, function: t, in_app: !0 };
  return n !== void 0 && (o.lineno = n), r !== void 0 && (o.colno = r), o;
}
const L4 =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  $4 = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  D4 = (e) => {
    const t = L4.exec(e);
    if (t) {
      if (t[2] && t[2].indexOf("eval") === 0) {
        const s = $4.exec(t[2]);
        s && ((t[2] = s[1]), (t[3] = s[2]), (t[4] = s[3]));
      }
      const [r, o] = l0(t[1] || dc, t[2]);
      return Qd(o, r, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
    }
  },
  M4 = [P4, D4],
  F4 =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  H4 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  j4 = (e) => {
    const t = F4.exec(e);
    if (t) {
      if (t[3] && t[3].indexOf(" > eval") > -1) {
        const s = H4.exec(t[3]);
        s &&
          ((t[1] = t[1] || "eval"), (t[3] = s[1]), (t[4] = s[2]), (t[5] = ""));
      }
      let r = t[3],
        o = t[1] || dc;
      return (
        ([o, r] = l0(o, r)),
        Qd(r, o, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
      );
    }
  },
  U4 = [N4, j4],
  z4 =
    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
  B4 = (e) => {
    const t = z4.exec(e);
    return t ? Qd(t[2], t[1] || dc, +t[3], t[4] ? +t[4] : void 0) : void 0;
  },
  V4 = [R4, B4],
  W4 = [M4, U4, V4],
  G4 = Mb(...W4),
  l0 = (e, t) => {
    const n = e.indexOf("safari-extension") !== -1,
      r = e.indexOf("safari-web-extension") !== -1;
    return n || r
      ? [
          e.indexOf("@") !== -1 ? e.split("@")[0] : dc,
          n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
        ]
      : [e, t];
  };
class bs {
  static __initStatic() {
    this.id = "GlobalHandlers";
  }
  constructor(t) {
    (this.name = bs.id),
      (this._options = { onerror: !0, onunhandledrejection: !0, ...t }),
      (this._installFunc = { onerror: Y4, onunhandledrejection: K4 });
  }
  setupOnce() {
    Error.stackTraceLimit = 50;
    const t = this._options;
    for (const n in t) {
      const r = this._installFunc[n];
      r && t[n] && (Q4(n), r(), (this._installFunc[n] = void 0));
    }
  }
}
bs.__initStatic();
function Y4() {
  Ub((e) => {
    const [t, n, r] = u0();
    if (!t.getIntegration(bs)) return;
    const { msg: o, url: s, line: i, column: a, error: l } = e;
    if (i0()) return;
    const c =
      l === void 0 && Dn(o)
        ? J4(o, s, i, a)
        : c0(Jd(n, l || o, void 0, r, !1), s, i, a);
    (c.level = "error"),
      t.captureEvent(c, {
        originalException: l,
        mechanism: { handled: !1, type: "onerror" },
      });
  });
}
function K4() {
  zb((e) => {
    const [t, n, r] = u0();
    if (!t.getIntegration(bs)) return;
    if (i0()) return !0;
    const o = q4(e),
      s = jd(o) ? X4(o) : Jd(n, o, void 0, r, !0);
    (s.level = "error"),
      t.captureEvent(s, {
        originalException: o,
        mechanism: { handled: !1, type: "onunhandledrejection" },
      });
  });
}
function q4(e) {
  if (jd(e)) return e;
  const t = e;
  try {
    if ("reason" in t) return t.reason;
    if ("detail" in t && "reason" in t.detail) return t.detail.reason;
  } catch {}
  return e;
}
function X4(e) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(
            e
          )}`,
        },
      ],
    },
  };
}
function J4(e, t, n, r) {
  const o =
    /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
  let s = Hd(e) ? e.message : e,
    i = "Error";
  const a = s.match(o);
  return (
    a && ((i = a[1]), (s = a[2])),
    c0({ exception: { values: [{ type: i, value: s }] } }, t, n, r)
  );
}
function c0(e, t, n, r) {
  const o = (e.exception = e.exception || {}),
    s = (o.values = o.values || []),
    i = (s[0] = s[0] || {}),
    a = (i.stacktrace = i.stacktrace || {}),
    l = (a.frames = a.frames || []),
    c = isNaN(parseInt(r, 10)) ? void 0 : r,
    u = isNaN(parseInt(n, 10)) ? void 0 : n,
    f = Dn(t) && t.length > 0 ? t : tP();
  return (
    l.length === 0 &&
      l.push({ colno: c, filename: f, function: "?", in_app: !0, lineno: u }),
    e
  );
}
function Q4(e) {
  Zn && V.log(`Global Handler attached: ${e}`);
}
function u0() {
  const e = Je(),
    t = e.getClient(),
    n = (t && t.getOptions()) || {
      stackParser: () => [],
      attachStacktrace: !1,
    };
  return [e, n.stackParser, n.attachStacktrace];
}
const Z4 = [
  "EventTarget",
  "Window",
  "Node",
  "ApplicationCache",
  "AudioTrackList",
  "BroadcastChannel",
  "ChannelMergerNode",
  "CryptoOperation",
  "EventSource",
  "FileReader",
  "HTMLUnknownElement",
  "IDBDatabase",
  "IDBRequest",
  "IDBTransaction",
  "KeyOperation",
  "MediaController",
  "MessagePort",
  "ModalWindow",
  "Notification",
  "SVGElementInstance",
  "Screen",
  "SharedWorker",
  "TextTrack",
  "TextTrackCue",
  "TextTrackList",
  "WebSocket",
  "WebSocketWorker",
  "Worker",
  "XMLHttpRequest",
  "XMLHttpRequestEventTarget",
  "XMLHttpRequestUpload",
];
class pc {
  static __initStatic() {
    this.id = "TryCatch";
  }
  constructor(t) {
    (this.name = pc.id),
      (this._options = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        ...t,
      });
  }
  setupOnce() {
    this._options.setTimeout && wt($e, "setTimeout", Bh),
      this._options.setInterval && wt($e, "setInterval", Bh),
      this._options.requestAnimationFrame &&
        wt($e, "requestAnimationFrame", eN),
      this._options.XMLHttpRequest &&
        "XMLHttpRequest" in $e &&
        wt(XMLHttpRequest.prototype, "send", tN);
    const t = this._options.eventTarget;
    t && (Array.isArray(t) ? t : Z4).forEach(nN);
  }
}
pc.__initStatic();
function Bh(e) {
  return function (...t) {
    const n = t[0];
    return (
      (t[0] = us(n, {
        mechanism: {
          data: { function: ar(e) },
          handled: !1,
          type: "instrument",
        },
      })),
      e.apply(this, t)
    );
  };
}
function eN(e) {
  return function (t) {
    return e.apply(this, [
      us(t, {
        mechanism: {
          data: { function: "requestAnimationFrame", handler: ar(e) },
          handled: !1,
          type: "instrument",
        },
      }),
    ]);
  };
}
function tN(e) {
  return function (...t) {
    const n = this;
    return (
      ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((o) => {
        o in n &&
          typeof n[o] == "function" &&
          wt(n, o, function (s) {
            const i = {
                mechanism: {
                  data: { function: o, handler: ar(s) },
                  handled: !1,
                  type: "instrument",
                },
              },
              a = zd(s);
            return a && (i.mechanism.data.handler = ar(a)), us(s, i);
          });
      }),
      e.apply(this, t)
    );
  };
}
function nN(e) {
  const t = $e,
    n = t[e] && t[e].prototype;
  !n ||
    !n.hasOwnProperty ||
    !n.hasOwnProperty("addEventListener") ||
    (wt(n, "addEventListener", function (r) {
      return function (o, s, i) {
        try {
          typeof s.handleEvent == "function" &&
            (s.handleEvent = us(s.handleEvent, {
              mechanism: {
                data: { function: "handleEvent", handler: ar(s), target: e },
                handled: !1,
                type: "instrument",
              },
            }));
        } catch {}
        return r.apply(this, [
          o,
          us(s, {
            mechanism: {
              data: { function: "addEventListener", handler: ar(s), target: e },
              handled: !1,
              type: "instrument",
            },
          }),
          i,
        ]);
      };
    }),
    wt(n, "removeEventListener", function (r) {
      return function (o, s, i) {
        const a = s;
        try {
          const l = a && a.__sentry_wrapped__;
          l && r.call(this, o, l, i);
        } catch {}
        return r.call(this, o, a, i);
      };
    }));
}
const rN = "cause",
  oN = 5;
class mc {
  static __initStatic() {
    this.id = "LinkedErrors";
  }
  constructor(t = {}) {
    (this.name = mc.id),
      (this._key = t.key || rN),
      (this._limit = t.limit || oN);
  }
  setupOnce() {}
  preprocessEvent(t, n, r) {
    const o = r.getOptions();
    JA(a0, o.stackParser, o.maxValueLength, this._key, this._limit, t, n);
  }
}
mc.__initStatic();
class hc {
  static __initStatic() {
    this.id = "HttpContext";
  }
  constructor() {
    this.name = hc.id;
  }
  setupOnce() {}
  preprocessEvent(t) {
    if (!$e.navigator && !$e.location && !$e.document) return;
    const n = (t.request && t.request.url) || ($e.location && $e.location.href),
      { referrer: r } = $e.document || {},
      { userAgent: o } = $e.navigator || {},
      s = {
        ...(t.request && t.request.headers),
        ...(r && { Referer: r }),
        ...(o && { "User-Agent": o }),
      },
      i = { ...t.request, ...(n && { url: n }), headers: s };
    t.request = i;
  }
}
hc.__initStatic();
class gc {
  static __initStatic() {
    this.id = "Dedupe";
  }
  constructor() {
    this.name = gc.id;
  }
  setupOnce(t, n) {}
  processEvent(t) {
    if (t.type) return t;
    try {
      if (sN(t, this._previousEvent))
        return (
          Zn &&
            V.warn(
              "Event dropped due to being a duplicate of previously captured event."
            ),
          null
        );
    } catch {}
    return (this._previousEvent = t);
  }
}
gc.__initStatic();
function sN(e, t) {
  return t ? !!(iN(e, t) || aN(e, t)) : !1;
}
function iN(e, t) {
  const n = e.message,
    r = t.message;
  return !(
    (!n && !r) ||
    (n && !r) ||
    (!n && r) ||
    n !== r ||
    !d0(e, t) ||
    !f0(e, t)
  );
}
function aN(e, t) {
  const n = Vh(t),
    r = Vh(e);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !d0(e, t) ||
    !f0(e, t)
  );
}
function f0(e, t) {
  let n = Wh(e),
    r = Wh(t);
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r) || ((n = n), (r = r), r.length !== n.length))
    return !1;
  for (let o = 0; o < r.length; o++) {
    const s = r[o],
      i = n[o];
    if (
      s.filename !== i.filename ||
      s.lineno !== i.lineno ||
      s.colno !== i.colno ||
      s.function !== i.function
    )
      return !1;
  }
  return !0;
}
function d0(e, t) {
  let n = e.fingerprint,
    r = t.fingerprint;
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r)) return !1;
  (n = n), (r = r);
  try {
    return n.join("") === r.join("");
  } catch {
    return !1;
  }
}
function Vh(e) {
  return e.exception && e.exception.values && e.exception.values[0];
}
function Wh(e) {
  const t = e.exception;
  if (t)
    try {
      return t.values[0].stacktrace.frames;
    } catch {
      return;
    }
}
const pa = 1024;
class _c {
  static __initStatic() {
    this.id = "Breadcrumbs";
  }
  constructor(t) {
    (this.name = _c.id),
      (this.options = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...t,
      });
  }
  setupOnce() {
    if (
      (this.options.console && mP(uN),
      this.options.dom && _P(cN(this.options.dom)),
      this.options.xhr && Bb(fN),
      this.options.fetch && jb(dN),
      this.options.history && Vd(pN),
      this.options.sentry)
    ) {
      const t = e0();
      t && t.on && t.on("beforeSendEvent", lN);
    }
  }
}
_c.__initStatic();
function lN(e) {
  Je().addBreadcrumb(
    {
      category: `sentry.${e.type === "transaction" ? "transaction" : "event"}`,
      event_id: e.event_id,
      level: e.level,
      message: Nr(e),
    },
    { event: e }
  );
}
function cN(e) {
  function t(n) {
    let r,
      o = typeof e == "object" ? e.serializeAttribute : void 0,
      s =
        typeof e == "object" && typeof e.maxStringLength == "number"
          ? e.maxStringLength
          : void 0;
    s &&
      s > pa &&
      (Zn &&
        V.warn(
          `\`dom.maxStringLength\` cannot exceed ${pa}, but a value of ${s} was configured. Sentry will use ${pa} instead.`
        ),
      (s = pa)),
      typeof o == "string" && (o = [o]);
    try {
      const i = n.event;
      r = mN(i)
        ? ls(i.target, { keyAttrs: o, maxStringLength: s })
        : ls(i, { keyAttrs: o, maxStringLength: s });
    } catch {
      r = "<unknown>";
    }
    r.length !== 0 &&
      Je().addBreadcrumb(
        { category: `ui.${n.name}`, message: r },
        { event: n.event, name: n.name, global: n.global }
      );
  }
  return t;
}
function uN(e) {
  const t = {
    category: "console",
    data: { arguments: e.args, logger: "console" },
    level: BP(e.level),
    message: vh(e.args, " "),
  };
  if (e.level === "assert")
    if (e.args[0] === !1)
      (t.message = `Assertion failed: ${
        vh(e.args.slice(1), " ") || "console.assert"
      }`),
        (t.data.arguments = e.args.slice(1));
    else return;
  Je().addBreadcrumb(t, { input: e.args, level: e.level });
}
function fN(e) {
  const { startTimestamp: t, endTimestamp: n } = e,
    r = e.xhr[Go];
  if (!t || !n || !r) return;
  const { method: o, url: s, status_code: i, body: a } = r,
    l = { method: o, url: s, status_code: i },
    c = { xhr: e.xhr, input: a, startTimestamp: t, endTimestamp: n };
  Je().addBreadcrumb({ category: "xhr", data: l, type: "http" }, c);
}
function dN(e) {
  const { startTimestamp: t, endTimestamp: n } = e;
  if (
    n &&
    !(e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST")
  )
    if (e.error) {
      const r = e.fetchData,
        o = {
          data: e.error,
          input: e.args,
          startTimestamp: t,
          endTimestamp: n,
        };
      Je().addBreadcrumb(
        { category: "fetch", data: r, level: "error", type: "http" },
        o
      );
    } else {
      const r = e.response,
        o = { ...e.fetchData, status_code: r && r.status },
        s = { input: e.args, response: r, startTimestamp: t, endTimestamp: n };
      Je().addBreadcrumb({ category: "fetch", data: o, type: "http" }, s);
    }
}
function pN(e) {
  let t = e.from,
    n = e.to;
  const r = Zc($e.location.href);
  let o = t ? Zc(t) : void 0;
  const s = Zc(n);
  (!o || !o.path) && (o = r),
    r.protocol === s.protocol && r.host === s.host && (n = s.relative),
    r.protocol === o.protocol && r.host === o.host && (t = o.relative),
    Je().addBreadcrumb({ category: "navigation", data: { from: t, to: n } });
}
function mN(e) {
  return !!e && !!e.target;
}
const p0 = [
  new fc(),
  new uc(),
  new pc(),
  new _c(),
  new bs(),
  new mc(),
  new gc(),
  new hc(),
];
function hN(e = {}) {
  e.defaultIntegrations === void 0 && (e.defaultIntegrations = p0),
    e.release === void 0 &&
      (typeof __SENTRY_RELEASE__ == "string" &&
        (e.release = __SENTRY_RELEASE__),
      $e.SENTRY_RELEASE &&
        $e.SENTRY_RELEASE.id &&
        (e.release = $e.SENTRY_RELEASE.id)),
    e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0),
    e.sendClientReports === void 0 && (e.sendClientReports = !0);
  const t = {
    ...e,
    stackParser: dP(e.stackParser || G4),
    integrations: qR(e),
    transport: e.transport || (Hb() ? x4 : A4),
  };
  t4(C4, t), e.autoSessionTracking && gN();
}
function Gh(e) {
  e.startSession({ ignoreDuration: !0 }), e.captureSession();
}
function gN() {
  if (typeof $e.document > "u") {
    Zn &&
      V.warn(
        "Session tracking in non-browser environment with @sentry/browser is not supported."
      );
    return;
  }
  const e = Je();
  e.captureSession &&
    (Gh(e),
    Vd(({ from: t, to: n }) => {
      t !== void 0 && t !== n && Gh(Je());
    }));
}
const Ze = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  ze = De;
function _N() {
  ze && ze.document
    ? ze.document.addEventListener("visibilitychange", () => {
        const e = Ui();
        if (ze.document.hidden && e) {
          const t = "cancelled";
          Ze &&
            V.log(
              `[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${e.op}`
            ),
            e.status || e.setStatus(t),
            e.setTag("visibilitychange", "document.hidden"),
            e.finish();
        }
      })
    : Ze &&
      V.warn(
        "[Tracing] Could not set up background tab detection due to lack of global document"
      );
}
const Zd = (e, t, n) => {
    let r, o;
    return (s) => {
      t.value >= 0 &&
        (s || n) &&
        ((o = t.value - (r || 0)),
        (o || r === void 0) && ((r = t.value), (t.delta = o), e(t)));
    };
  },
  vN = () =>
    `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
  yN = () => {
    const e = ze.performance.timing,
      t = ze.performance.navigation.type,
      n = {
        entryType: "navigation",
        startTime: 0,
        type: t == 2 ? "back_forward" : t === 1 ? "reload" : "navigate",
      };
    for (const r in e)
      r !== "navigationStart" &&
        r !== "toJSON" &&
        (n[r] = Math.max(e[r] - e.navigationStart, 0));
    return n;
  },
  m0 = () =>
    ze.__WEB_VITALS_POLYFILL__
      ? ze.performance &&
        ((performance.getEntriesByType &&
          performance.getEntriesByType("navigation")[0]) ||
          yN())
      : ze.performance &&
        performance.getEntriesByType &&
        performance.getEntriesByType("navigation")[0],
  h0 = () => {
    const e = m0();
    return (e && e.activationStart) || 0;
  },
  ep = (e, t) => {
    const n = m0();
    let r = "navigate";
    return (
      n &&
        (ze.document.prerendering || h0() > 0
          ? (r = "prerender")
          : (r = n.type.replace(/_/g, "-"))),
      {
        name: e,
        value: typeof t > "u" ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: vN(),
        navigationType: r,
      }
    );
  },
  vc = (e, t, n) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        const r = new PerformanceObserver((o) => {
          t(o.getEntries());
        });
        return r.observe(Object.assign({ type: e, buffered: !0 }, n || {})), r;
      }
    } catch {}
  },
  yc = (e, t) => {
    const n = (r) => {
      (r.type === "pagehide" || ze.document.visibilityState === "hidden") &&
        (e(r),
        t &&
          (removeEventListener("visibilitychange", n, !0),
          removeEventListener("pagehide", n, !0)));
    };
    addEventListener("visibilitychange", n, !0),
      addEventListener("pagehide", n, !0);
  },
  bN = (e) => {
    const t = ep("CLS", 0);
    let n,
      r = 0,
      o = [];
    const s = (a) => {
        a.forEach((l) => {
          if (!l.hadRecentInput) {
            const c = o[0],
              u = o[o.length - 1];
            r &&
            o.length !== 0 &&
            l.startTime - u.startTime < 1e3 &&
            l.startTime - c.startTime < 5e3
              ? ((r += l.value), o.push(l))
              : ((r = l.value), (o = [l])),
              r > t.value && ((t.value = r), (t.entries = o), n && n());
          }
        });
      },
      i = vc("layout-shift", s);
    if (i) {
      n = Zd(e, t);
      const a = () => {
        s(i.takeRecords()), n(!0);
      };
      return yc(a), a;
    }
  };
let ja = -1;
const EN = () =>
    ze.document.visibilityState === "hidden" && !ze.document.prerendering
      ? 0
      : 1 / 0,
  wN = () => {
    yc(({ timeStamp: e }) => {
      ja = e;
    }, !0);
  },
  tp = () => (
    ja < 0 && ((ja = EN()), wN()),
    {
      get firstHiddenTime() {
        return ja;
      },
    }
  ),
  TN = (e) => {
    const t = tp(),
      n = ep("FID");
    let r;
    const o = (a) => {
        a.startTime < t.firstHiddenTime &&
          ((n.value = a.processingStart - a.startTime),
          n.entries.push(a),
          r(!0));
      },
      s = (a) => {
        a.forEach(o);
      },
      i = vc("first-input", s);
    (r = Zd(e, n)),
      i &&
        yc(() => {
          s(i.takeRecords()), i.disconnect();
        }, !0);
  },
  Yh = {},
  SN = (e) => {
    const t = tp(),
      n = ep("LCP");
    let r;
    const o = (i) => {
        const a = i[i.length - 1];
        if (a) {
          const l = Math.max(a.startTime - h0(), 0);
          l < t.firstHiddenTime && ((n.value = l), (n.entries = [a]), r());
        }
      },
      s = vc("largest-contentful-paint", o);
    if (s) {
      r = Zd(e, n);
      const i = () => {
        Yh[n.id] ||
          (o(s.takeRecords()), s.disconnect(), (Yh[n.id] = !0), r(!0));
      };
      return (
        ["keydown", "click"].forEach((a) => {
          addEventListener(a, i, { once: !0, capture: !0 });
        }),
        yc(i, !0),
        i
      );
    }
  },
  qs = {},
  _l = {};
let g0, _0, v0;
function CN(e) {
  return rp("cls", e, xN, g0);
}
function ON(e) {
  return rp("lcp", e, AN, v0);
}
function kN(e) {
  return rp("fid", e, IN, _0);
}
function np(e, t) {
  return y0(e, t), _l[e] || (PN(e), (_l[e] = !0)), b0(e, t);
}
function bc(e, t) {
  const n = qs[e];
  if (!(!n || !n.length))
    for (const r of n)
      try {
        r(t);
      } catch (o) {
        Ze &&
          V.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${ar(r)}
Error:`,
            o
          );
      }
}
function xN() {
  bN((e) => {
    bc("cls", { metric: e }), (g0 = e);
  });
}
function IN() {
  TN((e) => {
    bc("fid", { metric: e }), (_0 = e);
  });
}
function AN() {
  SN((e) => {
    bc("lcp", { metric: e }), (v0 = e);
  });
}
function rp(e, t, n, r) {
  return (
    y0(e, t), _l[e] || (n(), (_l[e] = !0)), r && t({ metric: r }), b0(e, t)
  );
}
function PN(e) {
  const t = {};
  e === "event" && (t.durationThreshold = 0),
    vc(
      e,
      (n) => {
        bc(e, { entries: n });
      },
      t
    );
}
function y0(e, t) {
  (qs[e] = qs[e] || []), qs[e].push(t);
}
function b0(e, t) {
  return () => {
    const n = qs[e];
    if (!n) return;
    const r = n.indexOf(t);
    r !== -1 && n.splice(r, 1);
  };
}
function nu(e) {
  return typeof e == "number" && isFinite(e);
}
function fs(e, { startTimestamp: t, ...n }) {
  return (
    t && e.startTimestamp > t && (e.startTimestamp = t),
    e.startChild({ startTimestamp: t, ...n })
  );
}
const RN = 2147483647;
function dt(e) {
  return e / 1e3;
}
function E0() {
  return ze && ze.addEventListener && ze.performance;
}
let Kh = 0,
  et = {},
  Cn,
  Xs;
function NN() {
  const e = E0();
  if (e && Fn) {
    e.mark && ze.performance.mark("sentry-tracing-init");
    const t = FN(),
      n = DN(),
      r = MN();
    return () => {
      t(), n(), r();
    };
  }
  return () => {};
}
function LN() {
  np("longtask", ({ entries: e }) => {
    for (const t of e) {
      const n = Ui();
      if (!n) return;
      const r = dt(Fn + t.startTime),
        o = dt(t.duration);
      n.startChild({
        description: "Main UI thread blocked",
        op: "ui.long-task",
        origin: "auto.ui.browser.metrics",
        startTimestamp: r,
        endTimestamp: r + o,
      });
    }
  });
}
function $N() {
  np("event", ({ entries: e }) => {
    for (const t of e) {
      const n = Ui();
      if (!n) return;
      if (t.name === "click") {
        const r = dt(Fn + t.startTime),
          o = dt(t.duration);
        n.startChild({
          description: ls(t.target),
          op: `ui.interaction.${t.name}`,
          origin: "auto.ui.browser.metrics",
          startTimestamp: r,
          endTimestamp: r + o,
        });
      }
    }
  });
}
function DN() {
  return CN(({ metric: e }) => {
    const t = e.entries.pop();
    t &&
      (Ze && V.log("[Measurements] Adding CLS"),
      (et.cls = { value: e.value, unit: "" }),
      (Xs = t));
  });
}
function MN() {
  return ON(({ metric: e }) => {
    const t = e.entries.pop();
    t &&
      (Ze && V.log("[Measurements] Adding LCP"),
      (et.lcp = { value: e.value, unit: "millisecond" }),
      (Cn = t));
  });
}
function FN() {
  return kN(({ metric: e }) => {
    const t = e.entries.pop();
    if (!t) return;
    const n = dt(Fn),
      r = dt(t.startTime);
    Ze && V.log("[Measurements] Adding FID"),
      (et.fid = { value: e.value, unit: "millisecond" }),
      (et["mark.fid"] = { value: n + r, unit: "second" });
  });
}
function HN(e) {
  const t = E0();
  if (!t || !ze.performance.getEntries || !Fn) return;
  Ze && V.log("[Tracing] Adding & adjusting spans using Performance API");
  const n = dt(Fn),
    r = t.getEntries();
  let o, s;
  if (
    (r.slice(Kh).forEach((i) => {
      const a = dt(i.startTime),
        l = dt(i.duration);
      if (!(e.op === "navigation" && n + a < e.startTimestamp))
        switch (i.entryType) {
          case "navigation": {
            UN(e, i, n),
              (o = n + dt(i.responseStart)),
              (s = n + dt(i.requestStart));
            break;
          }
          case "mark":
          case "paint":
          case "measure": {
            jN(e, i, a, l, n);
            const c = tp(),
              u = i.startTime < c.firstHiddenTime;
            i.name === "first-paint" &&
              u &&
              (Ze && V.log("[Measurements] Adding FP"),
              (et.fp = { value: i.startTime, unit: "millisecond" })),
              i.name === "first-contentful-paint" &&
                u &&
                (Ze && V.log("[Measurements] Adding FCP"),
                (et.fcp = { value: i.startTime, unit: "millisecond" }));
            break;
          }
          case "resource": {
            const c = i.name.replace(ze.location.origin, "");
            BN(e, i, c, a, l, n);
            break;
          }
        }
    }),
    (Kh = Math.max(r.length - 1, 0)),
    VN(e),
    e.op === "pageload")
  ) {
    typeof o == "number" &&
      (Ze && V.log("[Measurements] Adding TTFB"),
      (et.ttfb = { value: (o - e.startTimestamp) * 1e3, unit: "millisecond" }),
      typeof s == "number" &&
        s <= o &&
        (et["ttfb.requestTime"] = {
          value: (o - s) * 1e3,
          unit: "millisecond",
        })),
      ["fcp", "fp", "lcp"].forEach((a) => {
        if (!et[a] || n >= e.startTimestamp) return;
        const l = et[a].value,
          c = n + dt(l),
          u = Math.abs((c - e.startTimestamp) * 1e3),
          f = u - l;
        Ze && V.log(`[Measurements] Normalized ${a} from ${l} to ${u} (${f})`),
          (et[a].value = u);
      });
    const i = et["mark.fid"];
    i &&
      et.fid &&
      (fs(e, {
        description: "first input delay",
        endTimestamp: i.value + dt(et.fid.value),
        op: "ui.action",
        origin: "auto.ui.browser.metrics",
        startTimestamp: i.value,
      }),
      delete et["mark.fid"]),
      "fcp" in et || delete et.cls,
      Object.keys(et).forEach((a) => {
        e.setMeasurement(a, et[a].value, et[a].unit);
      }),
      WN(e);
  }
  (Cn = void 0), (Xs = void 0), (et = {});
}
function jN(e, t, n, r, o) {
  const s = o + n,
    i = s + r;
  return (
    fs(e, {
      description: t.name,
      endTimestamp: i,
      op: t.entryType,
      origin: "auto.resource.browser.metrics",
      startTimestamp: s,
    }),
    s
  );
}
function UN(e, t, n) {
  [
    "unloadEvent",
    "redirect",
    "domContentLoadedEvent",
    "loadEvent",
    "connect",
  ].forEach((r) => {
    ma(e, t, r, n);
  }),
    ma(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
    ma(e, t, "fetch", n, "cache", "domainLookupStart"),
    ma(e, t, "domainLookup", n, "DNS"),
    zN(e, t, n);
}
function ma(e, t, n, r, o, s) {
  const i = s ? t[s] : t[`${n}End`],
    a = t[`${n}Start`];
  !a ||
    !i ||
    fs(e, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: o || n,
      startTimestamp: r + dt(a),
      endTimestamp: r + dt(i),
    });
}
function zN(e, t, n) {
  fs(e, {
    op: "browser",
    origin: "auto.browser.browser.metrics",
    description: "request",
    startTimestamp: n + dt(t.requestStart),
    endTimestamp: n + dt(t.responseEnd),
  }),
    fs(e, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: "response",
      startTimestamp: n + dt(t.responseStart),
      endTimestamp: n + dt(t.responseEnd),
    });
}
function BN(e, t, n, r, o, s) {
  if (t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch")
    return;
  const i = {};
  ru(i, t, "transferSize", "http.response_transfer_size"),
    ru(i, t, "encodedBodySize", "http.response_content_length"),
    ru(i, t, "decodedBodySize", "http.decoded_response_content_length"),
    "renderBlockingStatus" in t &&
      (i["resource.render_blocking_status"] = t.renderBlockingStatus);
  const a = s + r,
    l = a + o;
  fs(e, {
    description: n,
    endTimestamp: l,
    op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
    origin: "auto.resource.browser.metrics",
    startTimestamp: a,
    data: i,
  });
}
function VN(e) {
  const t = ze.navigator;
  if (!t) return;
  const n = t.connection;
  n &&
    (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType),
    n.type && e.setTag("connectionType", n.type),
    nu(n.rtt) &&
      (et["connection.rtt"] = { value: n.rtt, unit: "millisecond" })),
    nu(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`),
    nu(t.hardwareConcurrency) &&
      e.setTag("hardwareConcurrency", String(t.hardwareConcurrency));
}
function WN(e) {
  Cn &&
    (Ze && V.log("[Measurements] Adding LCP Data"),
    Cn.element && e.setTag("lcp.element", ls(Cn.element)),
    Cn.id && e.setTag("lcp.id", Cn.id),
    Cn.url && e.setTag("lcp.url", Cn.url.trim().slice(0, 200)),
    e.setTag("lcp.size", Cn.size)),
    Xs &&
      Xs.sources &&
      (Ze && V.log("[Measurements] Adding CLS Data"),
      Xs.sources.forEach((t, n) =>
        e.setTag(`cls.source.${n + 1}`, ls(t.node))
      ));
}
function ru(e, t, n, r) {
  const o = t[n];
  o != null && o < RN && (e[r] = o);
}
function GN(e, t, n, r, o = "auto.http.browser") {
  if (!cc() || !e.fetchData) return;
  const s = t(e.fetchData.url);
  if (e.endTimestamp && s) {
    const m = e.fetchData.__span;
    if (!m) return;
    const g = r[m];
    if (g) {
      if (e.response) {
        g.setHttpStatus(e.response.status);
        const _ =
          e.response &&
          e.response.headers &&
          e.response.headers.get("content-length");
        if (_) {
          const T = parseInt(_);
          T > 0 && g.setData("http.response_content_length", T);
        }
      } else e.error && g.setStatus("internal_error");
      g.finish(), delete r[m];
    }
    return;
  }
  const i = Je(),
    a = i.getScope(),
    l = i.getClient(),
    c = a.getSpan(),
    { method: u, url: f } = e.fetchData,
    d =
      s && c
        ? c.startChild({
            data: { url: f, type: "fetch", "http.method": u },
            description: `${u} ${f}`,
            op: "http.client",
            origin: o,
          })
        : void 0;
  if (
    (d && ((e.fetchData.__span = d.spanId), (r[d.spanId] = d)),
    n(e.fetchData.url) && l)
  ) {
    const m = e.args[0];
    e.args[1] = e.args[1] || {};
    const g = e.args[1];
    g.headers = YN(m, l, a, g, d);
  }
  return d;
}
function YN(e, t, n, r, o) {
  const s = o || n.getSpan(),
    i = s && s.transaction,
    { traceId: a, sampled: l, dsc: c } = n.getPropagationContext(),
    u = s ? s.toTraceparent() : Gd(a, void 0, l),
    f = i ? i.getDynamicSamplingContext() : c || lc(a, t, n),
    d = pf(f),
    m = typeof Request < "u" && ir(e, Request) ? e.headers : r.headers;
  if (m)
    if (typeof Headers < "u" && ir(m, Headers)) {
      const g = new Headers(m);
      return g.append("sentry-trace", u), d && g.append(df, d), g;
    } else if (Array.isArray(m)) {
      const g = [...m, ["sentry-trace", u]];
      return d && g.push([df, d]), g;
    } else {
      const g = "baggage" in m ? m.baggage : void 0,
        _ = [];
      return (
        Array.isArray(g) ? _.push(...g) : g && _.push(g),
        d && _.push(d),
        {
          ...m,
          "sentry-trace": u,
          baggage: _.length > 0 ? _.join(",") : void 0,
        }
      );
    }
  else return { "sentry-trace": u, baggage: d };
}
const yf = ["localhost", /^\/(?!\/)/],
  bf = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    tracingOrigins: yf,
    tracePropagationTargets: yf,
  };
function KN(e) {
  const {
      traceFetch: t,
      traceXHR: n,
      tracePropagationTargets: r,
      tracingOrigins: o,
      shouldCreateSpanForRequest: s,
      enableHTTPTimings: i,
    } = { traceFetch: bf.traceFetch, traceXHR: bf.traceXHR, ...e },
    a = typeof s == "function" ? s : (u) => !0,
    l = (u) => QN(u, r || o),
    c = {};
  t &&
    jb((u) => {
      const f = GN(u, a, l, c);
      i && f && qh(f);
    }),
    n &&
      Bb((u) => {
        const f = ZN(u, a, l, c);
        i && f && qh(f);
      });
}
function qN(e) {
  return (
    e.entryType === "resource" &&
    "initiatorType" in e &&
    typeof e.nextHopProtocol == "string" &&
    (e.initiatorType === "fetch" || e.initiatorType === "xmlhttprequest")
  );
}
function qh(e) {
  const t = e.data.url;
  if (!t) return;
  const n = np("resource", ({ entries: r }) => {
    r.forEach((o) => {
      qN(o) &&
        o.name.endsWith(t) &&
        (JN(o).forEach((i) => e.setData(...i)), setTimeout(n));
    });
  });
}
function XN(e) {
  let t = "unknown",
    n = "unknown",
    r = "";
  for (const o of e) {
    if (o === "/") {
      [t, n] = e.split("/");
      break;
    }
    if (!isNaN(Number(o))) {
      (t = r === "h" ? "http" : r), (n = e.split(r)[1]);
      break;
    }
    r += o;
  }
  return r === e && (t = r), { name: t, version: n };
}
function wn(e = 0) {
  return ((Fn || performance.timeOrigin) + e) / 1e3;
}
function JN(e) {
  const { name: t, version: n } = XN(e.nextHopProtocol),
    r = [];
  return (
    r.push(["network.protocol.version", n], ["network.protocol.name", t]),
    Fn
      ? [
          ...r,
          ["http.request.redirect_start", wn(e.redirectStart)],
          ["http.request.fetch_start", wn(e.fetchStart)],
          ["http.request.domain_lookup_start", wn(e.domainLookupStart)],
          ["http.request.domain_lookup_end", wn(e.domainLookupEnd)],
          ["http.request.connect_start", wn(e.connectStart)],
          ["http.request.secure_connection_start", wn(e.secureConnectionStart)],
          ["http.request.connection_end", wn(e.connectEnd)],
          ["http.request.request_start", wn(e.requestStart)],
          ["http.request.response_start", wn(e.responseStart)],
          ["http.request.response_end", wn(e.responseEnd)],
        ]
      : r
  );
}
function QN(e, t) {
  return Fi(e, t || yf);
}
function ZN(e, t, n, r) {
  const o = e.xhr,
    s = o && o[Go];
  if (!cc() || !o || o.__sentry_own_request__ || !s) return;
  const i = t(s.url);
  if (e.endTimestamp && i) {
    const f = o.__sentry_xhr_span_id__;
    if (!f) return;
    const d = r[f];
    d &&
      s.status_code !== void 0 &&
      (d.setHttpStatus(s.status_code), d.finish(), delete r[f]);
    return;
  }
  const a = Je(),
    l = a.getScope(),
    c = l.getSpan(),
    u =
      i && c
        ? c.startChild({
            data: { type: "xhr", "http.method": s.method, url: s.url },
            description: `${s.method} ${s.url}`,
            op: "http.client",
            origin: "auto.http.browser",
          })
        : void 0;
  if (
    (u &&
      ((o.__sentry_xhr_span_id__ = u.spanId),
      (r[o.__sentry_xhr_span_id__] = u)),
    o.setRequestHeader && n(s.url))
  )
    if (u) {
      const f = u && u.transaction,
        d = f && f.getDynamicSamplingContext(),
        m = pf(d);
      Xh(o, u.toTraceparent(), m);
    } else {
      const f = a.getClient(),
        { traceId: d, sampled: m, dsc: g } = l.getPropagationContext(),
        _ = Gd(d, void 0, m),
        T = g || (f ? lc(d, f, l) : void 0),
        y = pf(T);
      Xh(o, _, y);
    }
  return u;
}
function Xh(e, t, n) {
  try {
    e.setRequestHeader("sentry-trace", t), n && e.setRequestHeader(df, n);
  } catch {}
}
function eL(e, t = !0, n = !0) {
  if (!ze || !ze.location) {
    Ze &&
      V.warn(
        "Could not initialize routing instrumentation due to invalid location"
      );
    return;
  }
  let r = ze.location.href,
    o;
  t &&
    (o = e({
      name: ze.location.pathname,
      startTimestamp: Fn ? Fn / 1e3 : void 0,
      op: "pageload",
      origin: "auto.pageload.browser",
      metadata: { source: "url" },
    })),
    n &&
      Vd(({ to: s, from: i }) => {
        if (i === void 0 && r && r.indexOf(s) !== -1) {
          r = void 0;
          return;
        }
        i !== s &&
          ((r = void 0),
          o &&
            (Ze &&
              V.log(`[Tracing] Finishing current transaction with op: ${o.op}`),
            o.finish()),
          (o = e({
            name: ze.location.pathname,
            op: "navigation",
            origin: "auto.navigation.browser",
            metadata: { source: "url" },
          })));
      });
}
const tL = "BrowserTracing",
  nL = {
    ...Ha,
    markBackgroundTransactions: !0,
    routingInstrumentation: eL,
    startTransactionOnLocationChange: !0,
    startTransactionOnPageLoad: !0,
    enableLongTask: !0,
    _experiments: {},
    ...bf,
  };
class rL {
  constructor(t) {
    (this.name = tL),
      (this._hasSetTracePropagationTargets = !1),
      HR(),
      Ze &&
        (this._hasSetTracePropagationTargets = !!(
          t &&
          (t.tracePropagationTargets || t.tracingOrigins)
        )),
      (this.options = { ...nL, ...t }),
      this.options._experiments.enableLongTask !== void 0 &&
        (this.options.enableLongTask =
          this.options._experiments.enableLongTask),
      t &&
        !t.tracePropagationTargets &&
        t.tracingOrigins &&
        (this.options.tracePropagationTargets = t.tracingOrigins),
      (this._collectWebVitals = NN()),
      this.options.enableLongTask && LN(),
      this.options._experiments.enableInteractions && $N();
  }
  setupOnce(t, n) {
    this._getCurrentHub = n;
    const o = n().getClient(),
      s = o && o.getOptions(),
      {
        routingInstrumentation: i,
        startTransactionOnLocationChange: a,
        startTransactionOnPageLoad: l,
        markBackgroundTransactions: c,
        traceFetch: u,
        traceXHR: f,
        shouldCreateSpanForRequest: d,
        enableHTTPTimings: m,
        _experiments: g,
      } = this.options,
      _ = s && s.tracePropagationTargets,
      T = _ || this.options.tracePropagationTargets;
    Ze &&
      this._hasSetTracePropagationTargets &&
      _ &&
      V.warn(
        "[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."
      ),
      i(
        (y) => {
          const E = this._createRouteTransaction(y);
          return (
            this.options._experiments.onStartRouteTransaction &&
              this.options._experiments.onStartRouteTransaction(E, y, n),
            E
          );
        },
        l,
        a
      ),
      c && _N(),
      g.enableInteractions && this._registerInteractionListener(),
      KN({
        traceFetch: u,
        traceXHR: f,
        tracePropagationTargets: T,
        shouldCreateSpanForRequest: d,
        enableHTTPTimings: m,
      });
  }
  _createRouteTransaction(t) {
    if (!this._getCurrentHub) {
      Ze &&
        V.warn(
          `[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`
        );
      return;
    }
    const n = this._getCurrentHub(),
      {
        beforeNavigate: r,
        idleTimeout: o,
        finalTimeout: s,
        heartbeatInterval: i,
      } = this.options,
      a = t.op === "pageload",
      l = a ? Jh("sentry-trace") : "",
      c = a ? Jh("baggage") : "",
      {
        traceparentData: u,
        dynamicSamplingContext: f,
        propagationContext: d,
      } = QP(l, c),
      m = {
        ...t,
        ...u,
        metadata: { ...t.metadata, dynamicSamplingContext: u && !f ? {} : f },
        trimEnd: !0,
      },
      g = typeof r == "function" ? r(m) : m,
      _ = g === void 0 ? { ...m, sampled: !1 } : g;
    (_.metadata =
      _.name !== m.name ? { ..._.metadata, source: "custom" } : _.metadata),
      (this._latestRouteName = _.name),
      (this._latestRouteSource = _.metadata && _.metadata.source),
      _.sampled === !1 &&
        Ze &&
        V.log(
          `[Tracing] Will not send ${_.op} transaction because of beforeNavigate.`
        ),
      Ze && V.log(`[Tracing] Starting ${_.op} transaction on scope`);
    const { location: T } = ze,
      y = Fh(n, _, o, s, !0, { location: T }, i),
      E = n.getScope();
    return (
      a && u
        ? E.setPropagationContext(d)
        : E.setPropagationContext({
            traceId: y.traceId,
            spanId: y.spanId,
            parentSpanId: y.parentSpanId,
            sampled: y.sampled,
          }),
      y.registerBeforeFinishCallback((v) => {
        this._collectWebVitals(), HN(v);
      }),
      y
    );
  }
  _registerInteractionListener() {
    let t;
    const n = () => {
      const {
          idleTimeout: r,
          finalTimeout: o,
          heartbeatInterval: s,
        } = this.options,
        i = "ui.action.click",
        a = Ui();
      if (a && a.op && ["navigation", "pageload"].includes(a.op)) {
        Ze &&
          V.warn(
            `[Tracing] Did not create ${i} transaction because a pageload or navigation transaction is in progress.`
          );
        return;
      }
      if (
        (t &&
          (t.setFinishReason("interactionInterrupted"),
          t.finish(),
          (t = void 0)),
        !this._getCurrentHub)
      ) {
        Ze &&
          V.warn(
            `[Tracing] Did not create ${i} transaction because _getCurrentHub is invalid.`
          );
        return;
      }
      if (!this._latestRouteName) {
        Ze &&
          V.warn(
            `[Tracing] Did not create ${i} transaction because _latestRouteName is missing.`
          );
        return;
      }
      const l = this._getCurrentHub(),
        { location: c } = ze,
        u = {
          name: this._latestRouteName,
          op: i,
          trimEnd: !0,
          metadata: { source: this._latestRouteSource || "url" },
        };
      t = Fh(l, u, r, o, !0, { location: c }, s);
    };
    ["click"].forEach((r) => {
      addEventListener(r, n, { once: !1, capture: !0 });
    });
  }
}
function Jh(e) {
  const t = nP(`meta[name=${e}]`);
  return t ? t.getAttribute("content") : void 0;
}
const w0 = ["activate", "mount", "update"],
  oL = /(?:^|[-_])(\w)/g,
  sL = (e) => e.replace(oL, (t) => t.toUpperCase()).replace(/[-_]/g, ""),
  iL = "<Root>",
  ou = "<Anonymous>",
  aL = (e, t) => (e.repeat ? e.repeat(t) : e),
  Js = (e, t) => {
    if (!e) return ou;
    if (e.$root === e) return iL;
    if (!e.$options) return ou;
    const n = e.$options;
    let r = n.name || n._componentTag;
    const o = n.__file;
    if (!r && o) {
      const s = o.match(/([^/\\]+)\.vue$/);
      s && (r = s[1]);
    }
    return (r ? `<${sL(r)}>` : ou) + (o && t !== !1 ? ` at ${o}` : "");
  },
  lL = (e) => {
    if (e && (e._isVue || e.__isVue) && e.$parent) {
      const t = [];
      let n = 0;
      for (; e; ) {
        if (t.length > 0) {
          const o = t[t.length - 1];
          if (o.constructor === e.constructor) {
            n++, (e = e.$parent);
            continue;
          } else n > 0 && ((t[t.length - 1] = [o, n]), (n = 0));
        }
        t.push(e), (e = e.$parent);
      }
      return `

found in

${t.map(
  (o, s) =>
    `${
      (s === 0 ? "---> " : aL(" ", 5 + s * 2)) +
      (Array.isArray(o) ? `${Js(o[0])}... (${o[1]} recursive calls)` : Js(o))
    }`
).join(`
`)}`;
    }
    return `

(found in ${Js(e)})`;
  },
  cL = (e, t) => {
    const { errorHandler: n, warnHandler: r, silent: o } = e.config;
    e.config.errorHandler = (s, i, a) => {
      const l = Js(i, !1),
        c = i ? lL(i) : "",
        u = { componentName: l, lifecycleHook: a, trace: c };
      if (
        (t.attachProps &&
          i &&
          (i.$options && i.$options.propsData
            ? (u.propsData = i.$options.propsData)
            : i.$props && (u.propsData = i.$props)),
        setTimeout(() => {
          Je().captureException(s, {
            captureContext: { contexts: { vue: u } },
            mechanism: { handled: !1 },
          });
        }),
        typeof n == "function" && n.call(e, s, i, a),
        t.logErrors)
      ) {
        const f = typeof console < "u",
          d = `Error in ${a}: "${s && s.toString()}"`;
        r
          ? r.call(null, d, i, c)
          : f &&
            !o &&
            No(() => {
              console.error(`[Vue warn]: ${d}${c}`);
            });
      }
    };
  },
  uL = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  Qh = "ui.vue",
  fL = {
    activate: ["activated", "deactivated"],
    create: ["beforeCreate", "created"],
    unmount: ["beforeUnmount", "unmounted"],
    destroy: ["beforeDestroy", "destroyed"],
    mount: ["beforeMount", "mounted"],
    update: ["beforeUpdate", "updated"],
  };
function Ef() {
  return Je().getScope().getTransaction();
}
function dL(e, t, n) {
  e.$_sentryRootSpanTimer && clearTimeout(e.$_sentryRootSpanTimer),
    (e.$_sentryRootSpanTimer = setTimeout(() => {
      e.$root &&
        e.$root.$_sentryRootSpan &&
        (e.$root.$_sentryRootSpan.finish(t),
        (e.$root.$_sentryRootSpan = void 0));
    }, n));
}
const pL = (e) => {
    const t = (e.hooks || [])
        .concat(w0)
        .filter((r, o, s) => s.indexOf(r) === o),
      n = {};
    for (const r of t) {
      const o = fL[r];
      if (!o) {
        uL && V.warn(`Unknown hook: ${r}`);
        continue;
      }
      for (const s of o)
        n[s] = function () {
          const i = this.$root === this;
          if (i) {
            const c = Ef();
            c &&
              (this.$_sentryRootSpan =
                this.$_sentryRootSpan ||
                c.startChild({
                  description: "Application Render",
                  op: `${Qh}.render`,
                  origin: "auto.ui.vue",
                }));
          }
          const a = Js(this, !1),
            l = Array.isArray(e.trackComponents)
              ? e.trackComponents.indexOf(a) > -1
              : e.trackComponents;
          if (!(!i && !l))
            if (((this.$_sentrySpans = this.$_sentrySpans || {}), s == o[0])) {
              const c = (this.$root && this.$root.$_sentryRootSpan) || Ef();
              if (c) {
                const u = this.$_sentrySpans[r];
                u && !u.endTimestamp && u.finish(),
                  (this.$_sentrySpans[r] = c.startChild({
                    description: `Vue <${a}>`,
                    op: `${Qh}.${r}`,
                    origin: "auto.ui.vue",
                  }));
              }
            } else {
              const c = this.$_sentrySpans[r];
              if (!c) return;
              c.finish(), dL(this, Gr(), e.timeout);
            }
        };
    }
    return n;
  },
  mL = De,
  hL = {
    Vue: mL.Vue,
    attachProps: !0,
    logErrors: !0,
    hooks: w0,
    timeout: 2e3,
    trackComponents: !1,
  };
class Ec {
  static __initStatic() {
    this.id = "Vue";
  }
  constructor(t = {}) {
    (this.name = Ec.id), (this._options = t);
  }
  setupOnce(t, n) {
    this._setupIntegration(n());
  }
  _setupIntegration(t) {
    const n = t.getClient(),
      r = { ...hL, ...(n && n.getOptions()), ...this._options };
    if (!r.Vue && !r.app) {
      No(() => {
        console.warn(
          "[@sentry/vue]: Misconfigured SDK. Vue specific errors will not be captured.\nUpdate your `Sentry.init` call with an appropriate config option:\n`app` (Application Instance - Vue 3) or `Vue` (Vue Constructor - Vue 2)."
        );
      });
      return;
    }
    r.app ? Bd(r.app).forEach((s) => Zh(s, r)) : r.Vue && Zh(r.Vue, r);
  }
}
Ec.__initStatic();
const Zh = (e, t) => {
  const n = e;
  (n._instance && n._instance.isMounted) === !0 &&
    No(() => {
      console.warn(
        "[@sentry/vue]: Misconfigured SDK. Vue app is already mounted. Make sure to call `app.mount()` after `Sentry.init()`."
      );
    }),
    cL(e, t),
    cc(t) && e.mixin(pL({ ...t, ...t.tracingOptions }));
};
function gL(e = {}) {
  const t = {
    _metadata: {
      sdk: {
        name: "sentry.javascript.vue",
        packages: [{ name: "npm:@sentry/vue", version: vi }],
        version: vi,
      },
    },
    defaultIntegrations: [...p0, new Ec()],
    ...e,
  };
  hN(t);
}
function _L(e, t = {}) {
  return (n, r = !0, o = !0) => {
    const s = { "routing.instrumentation": "vue-router" };
    r &&
      $e &&
      $e.location &&
      n({
        name: $e.location.pathname,
        op: "pageload",
        origin: "auto.pageload.vue",
        tags: s,
        metadata: { source: "url" },
      }),
      e.onError((i) => Zb(i, { mechanism: { handled: !1 } })),
      e.beforeEach((i, a, l) => {
        const c = a.name == null && a.matched.length === 0,
          u = { params: i.params, query: i.query };
        let f = i.path,
          d = "url";
        if (
          (i.name && t.routeLabel !== "path"
            ? ((f = i.name.toString()), (d = "custom"))
            : i.matched[0] &&
              i.matched[0].path &&
              ((f = i.matched[0].path), (d = "route")),
          r && c)
        ) {
          const m = Ef();
          m &&
            (m.metadata.source !== "custom" && m.setName(f, d),
            m.setData("params", u.params),
            m.setData("query", u.query));
        }
        o &&
          !c &&
          n({
            name: f,
            op: "navigation",
            origin: "auto.navigation.vue",
            tags: s,
            data: u,
            metadata: { source: d },
          }),
          l && l();
      });
  };
}
const yi = vd("user", () => {
    const e = re(null),
      t = ie(() => {
        const { firstName: o, lastName: s } = e.value;
        return `${o} ${s}`;
      }),
      n = async () => {
        const { data: o } = await dl.get("/user");
        LR({ email: o == null ? void 0 : o.email }), (e.value = o);
      };
    async function r() {
      await dl.post("/auth/logout"),
        localStorage.removeItem(ul),
        rc.push("/login"),
        (e.value = null);
    }
    return {
      currentUser: e,
      currentUserFullName: t,
      logout: r,
      fetchCurrentUser: n,
    };
  }),
  vL = N(
    "div",
    { class: "fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" },
    null,
    -1
  ),
  yL = { class: "fixed inset-0 z-10 overflow-y-auto" },
  bL = {
    class:
      "flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0",
  },
  EL = { class: "mt-3 text-center sm:mt-5 py-4" },
  wL = { class: "mt-2 text-xs md:text-sm text-gray-600" },
  TL = {
    __name: "GoPremiumModal",
    props: { open: Boolean, currentLimitation: String, subHeading: String },
    emits: ["closeModal"],
    setup(e, { emit: t }) {
      const n = t;
      function r() {
        n("closeModal");
      }
      function o() {
        r(), rc.push("/pricing");
      }
      return (s, i) => (
        se(),
        tt(
          te(Xl),
          { as: "template", show: e.open },
          {
            default: be(() => [
              ae(
                te(Ad),
                { as: "div", class: "relative z-10", onClose: r },
                {
                  default: be(() => [
                    ae(
                      te(Co),
                      {
                        as: "template",
                        enter: "ease-out duration-300",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "ease-in duration-200",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0",
                      },
                      { default: be(() => [vL]), _: 1 }
                    ),
                    N("div", yL, [
                      N("div", bL, [
                        ae(
                          te(Co),
                          {
                            as: "template",
                            enter: "ease-out duration-300",
                            "enter-from":
                              "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            "enter-to":
                              "opacity-100 translate-y-0 sm:scale-100",
                            leave: "ease-in duration-200",
                            "leave-from":
                              "opacity-100 translate-y-0 sm:scale-100",
                            "leave-to":
                              "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                          },
                          {
                            default: be(() => [
                              ae(
                                te(Pd),
                                {
                                  class:
                                    "relative transform overflow-hidden rounded-lg bg-white pxd-4 pbd-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:pd-6 max-w-[90%] p-2",
                                },
                                {
                                  default: be(() => {
                                    var a;
                                    return [
                                      N("div", null, [
                                        we(` <div
                  class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
                >
                  <CheckIcon
                    class="h-6 w-6 text-green-600"
                    aria-hidden="true"
                  />
                </div> `),
                                        N("div", EL, [
                                          ae(
                                            te(Rd),
                                            {
                                              as: "h5",
                                              class:
                                                "text-bold leading-6 text-gray-900 font-medium text-2xl md:text-3xl cap",
                                            },
                                            {
                                              default: be(() => {
                                                var l;
                                                return [
                                                  nt(
                                                    Ot(
                                                      (l =
                                                        e.currentLimitation) ==
                                                        null
                                                        ? void 0
                                                        : l.headline
                                                    ),
                                                    1
                                                  ),
                                                ];
                                              }),
                                              _: 1,
                                            }
                                          ),
                                          N(
                                            "div",
                                            wL,
                                            Ot(
                                              (a = e.currentLimitation) == null
                                                ? void 0
                                                : a.subHeading
                                            ),
                                            1
                                          ),
                                        ]),
                                      ]),
                                      N(
                                        "div",
                                        {
                                          class:
                                            "flex mt-4 gap-x-10 bg-gray-100 p-3",
                                        },
                                        [
                                          N(
                                            "button",
                                            {
                                              type: "button",
                                              class:
                                                "border-indigo-600 border-2 m-auto inline-flex justify-center rounded-md bg-gray-100 px-6 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2 hover:text-white",
                                              onClick: r,
                                            },
                                            " Close "
                                          ),
                                          N(
                                            "button",
                                            {
                                              type: "button",
                                              class:
                                                "m-auto inline-flex justify-center rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2",
                                              onClick: o,
                                            },
                                            " Go Premium "
                                          ),
                                        ]
                                      ),
                                    ];
                                  }),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          },
          8,
          ["show"]
        )
      );
    },
  },
  SL = Un(TL, [
    ["__file", "/usr/src/app/src/components/common/GoPremiumModal.vue"],
  ]),
  CL = N(
    "div",
    { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" },
    null,
    -1
  ),
  OL = { class: "fixed inset-0 z-10 overflow-y-auto" },
  kL = {
    class:
      "flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0",
  },
  xL = { class: "mt-3 text-center sm:mt-5" },
  IL = N(
    "div",
    { class: "mt-4" },
    [
      N(
        "p",
        { class: "text-sm text-gray-500" },
        " to reset your password please contact our support team "
      ),
    ],
    -1
  ),
  AL = {
    __name: "comingSoonModal",
    props: { open: Boolean },
    emits: ["closeModal"],
    setup(e, { emit: t }) {
      const n = t;
      function r() {
        n("closeModal");
      }
      function o() {
        rc.push("/contact"), r();
      }
      return (s, i) => (
        se(),
        tt(
          te(Xl),
          { as: "template", show: e.open },
          {
            default: be(() => [
              ae(
                te(Ad),
                { as: "div", class: "relative z-10", onClose: r },
                {
                  default: be(() => [
                    ae(
                      te(Co),
                      {
                        as: "template",
                        enter: "ease-out duration-300",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "ease-in duration-200",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0",
                      },
                      { default: be(() => [CL]), _: 1 }
                    ),
                    N("div", OL, [
                      N("div", kL, [
                        ae(
                          te(Co),
                          {
                            as: "template",
                            enter: "ease-out duration-300",
                            "enter-from":
                              "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            "enter-to":
                              "opacity-100 translate-y-0 sm:scale-100",
                            leave: "ease-in duration-200",
                            "leave-from":
                              "opacity-100 translate-y-0 sm:scale-100",
                            "leave-to":
                              "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                          },
                          {
                            default: be(() => [
                              ae(
                                te(Pd),
                                {
                                  class:
                                    "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6",
                                },
                                {
                                  default: be(() => [
                                    N("div", null, [
                                      we(` <div
                  class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
                >
                  <CheckIcon
                    class="h-6 w-6 text-green-600"
                    aria-hidden="true"
                  />
                </div> `),
                                      N("div", xL, [
                                        ae(
                                          te(Rd),
                                          {
                                            as: "h4",
                                            class:
                                              "text-bold leading-6 text-gray-900 font-medium text-2xl",
                                          },
                                          {
                                            default: be(() => [
                                              nt("Password Reset"),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        IL,
                                      ]),
                                    ]),
                                    we(` <div class="flex mt-4 gap-x-30">
                <button
                  type="button"
                  class="m-auto inline-flex w-[50%] justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                  @click="closeModal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="m-auto inline-flex w-[50%] justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                  @click="closeModal"
                >
                  Contact
                </button>
              </div> `),
                                    N("div", { class: "flex mt-4 gap-x-10" }, [
                                      N(
                                        "button",
                                        {
                                          type: "button",
                                          class:
                                            "border-indigo-600 border-2 m-auto inline-flex justify-center rounded-md bg-gray-100 px-6 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2",
                                          onClick: r,
                                        },
                                        " Close "
                                      ),
                                      N(
                                        "button",
                                        {
                                          type: "button",
                                          class:
                                            "m-auto inline-flex justify-center rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2",
                                          onClick: o,
                                        },
                                        " Contact Support "
                                      ),
                                    ]),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          },
          8,
          ["show"]
        )
      );
    },
  },
  PL = Un(AL, [
    ["__file", "/usr/src/app/src/components/common/comingSoonModal.vue"],
  ]),
  RL = vd("app", () => {
    const e = re(!1);
    function t() {
      e.value = !0;
    }
    return { isCommingSoonModalOpen: e, openCommingSoonModal: t };
  }),
  NL = vd("premium", () => {
    const e = re(!1),
      t = re(null);
    function n(o) {
      const { currentUser: s } = yi(),
        {
          membership: { maxDocuments: i, maxSize: a, maxTokens: l },
        } = s;
      return [
        {
          headline: "max documents reached",
          subHeading: `max documents is ${i} documents`,
        },
        {
          headline: "Your files are too Big",
          subHeading: `the max file size is ${a}mb`,
        },
        {
          headline: "Your can't send more messages",
          subHeading: `your max messages credit was ${l} messages`,
        },
      ][o];
    }
    function r(o) {
      return (t.value = n(o)), t.value ? ((e.value = !0), !0) : !1;
    }
    return {
      isPremiumModalOpen: e,
      openGoPremiumModal: r,
      currentLimitation: t,
    };
  });
function wf(e, t = {}, n) {
  for (const r in e) {
    const o = e[r],
      s = n ? `${n}:${r}` : r;
    typeof o == "object" && o !== null
      ? wf(o, t, s)
      : typeof o == "function" && (t[s] = o);
  }
  return t;
}
const LL = { run: (e) => e() },
  $L = () => LL,
  T0 = typeof console.createTask < "u" ? console.createTask : $L;
function DL(e, t) {
  const n = t.shift(),
    r = T0(n);
  return e.reduce(
    (o, s) => o.then(() => r.run(() => s(...t))),
    Promise.resolve()
  );
}
function ML(e, t) {
  const n = t.shift(),
    r = T0(n);
  return Promise.all(e.map((o) => r.run(() => o(...t))));
}
function su(e, t) {
  for (const n of [...e]) n(t);
}
class FL {
  constructor() {
    (this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this));
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != "function") return () => {};
    const o = t;
    let s;
    for (; this._deprecatedHooks[t]; )
      (s = this._deprecatedHooks[t]), (t = s.to);
    if (s && !r.allowDeprecated) {
      let i = s.message;
      i ||
        (i =
          `${o} hook has been deprecated` +
          (s.to ? `, please use ${s.to}` : "")),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(i) ||
          (console.warn(i), this._deprecatedMessages.add(i));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, "name", {
          get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0,
        });
      } catch {}
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = void 0));
      }
    );
  }
  hookOnce(t, n) {
    let r,
      o = (...s) => (
        typeof r == "function" && r(), (r = void 0), (o = void 0), n(...s)
      );
    return (r = this.hook(t, o)), r;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n);
      r !== -1 && this._hooks[t].splice(r, 1),
        this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n;
    const r = this._hooks[t] || [];
    delete this._hooks[t];
    for (const o of r) this.hook(t, o);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t) this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = wf(t),
      r = Object.keys(n).map((o) => this.hook(o, n[o]));
    return () => {
      for (const o of r.splice(0, r.length)) o();
    };
  }
  removeHooks(t) {
    const n = wf(t);
    for (const r in n) this.removeHook(r, n[r]);
  }
  removeAllHooks() {
    for (const t in this._hooks) delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(DL, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(ML, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const o =
      this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && su(this._before, o);
    const s = t(n in this._hooks ? [...this._hooks[n]] : [], r);
    return s instanceof Promise
      ? s.finally(() => {
          this._after && o && su(this._after, o);
        })
      : (this._after && o && su(this._after, o), s);
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        if (this._before !== void 0) {
          const n = this._before.indexOf(t);
          n !== -1 && this._before.splice(n, 1);
        }
      }
    );
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        if (this._after !== void 0) {
          const n = this._after.indexOf(t);
          n !== -1 && this._after.splice(n, 1);
        }
      }
    );
  }
}
function HL() {
  return new FL();
}
function jL(e) {
  return Array.isArray(e) ? e : [e];
}
const UL = ["title", "titleTemplate", "script", "style", "noscript"],
  Ua = ["base", "meta", "link", "style", "script", "noscript"],
  zL = [
    "title",
    "titleTemplate",
    "templateParams",
    "base",
    "htmlAttrs",
    "bodyAttrs",
    "meta",
    "link",
    "style",
    "script",
    "noscript",
  ],
  BL = [
    "base",
    "title",
    "titleTemplate",
    "bodyAttrs",
    "htmlAttrs",
    "templateParams",
  ],
  S0 = [
    "tagPosition",
    "tagPriority",
    "tagDuplicateStrategy",
    "children",
    "innerHTML",
    "textContent",
    "processTemplateParams",
  ],
  VL = typeof window < "u";
function op(e) {
  let t = 9;
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function eg(e) {
  return (
    e._h ||
    op(
      e._d
        ? e._d
        : `${e.tag}:${e.textContent || e.innerHTML || ""}:${Object.entries(
            e.props
          )
            .map(([t, n]) => `${t}:${String(n)}`)
            .join(",")}`
    )
  );
}
function C0(e, t) {
  const { props: n, tag: r } = e;
  if (BL.includes(r)) return r;
  if (r === "link" && n.rel === "canonical") return "canonical";
  if (n.charset) return "charset";
  const o = ["id"];
  r === "meta" && o.push("name", "property", "http-equiv");
  for (const s of o)
    if (typeof n[s] < "u") {
      const i = String(n[s]);
      return t && !t(i) ? !1 : `${r}:${s}:${i}`;
    }
  return !1;
}
function tg(e, t) {
  return e == null ? t || null : typeof e == "function" ? e(t) : e;
}
async function WL(e, t, n) {
  const r = {
    tag: e,
    props: await O0(
      typeof t == "object" && typeof t != "function" && !(t instanceof Promise)
        ? { ...t }
        : {
            [["script", "noscript", "style"].includes(e)
              ? "innerHTML"
              : "textContent"]: t,
          },
      ["templateParams", "titleTemplate"].includes(e)
    ),
  };
  return (
    S0.forEach((o) => {
      const s = typeof r.props[o] < "u" ? r.props[o] : n[o];
      typeof s < "u" &&
        ((!["innerHTML", "textContent", "children"].includes(o) ||
          UL.includes(r.tag)) &&
          (r[o === "children" ? "innerHTML" : o] = s),
        delete r.props[o]);
    }),
    r.props.body && ((r.tagPosition = "bodyClose"), delete r.props.body),
    r.tag === "script" &&
      typeof r.innerHTML == "object" &&
      ((r.innerHTML = JSON.stringify(r.innerHTML)),
      (r.props.type = r.props.type || "application/json")),
    Array.isArray(r.props.content)
      ? r.props.content.map((o) => ({
          ...r,
          props: { ...r.props, content: o },
        }))
      : r
  );
}
function GL(e) {
  return (
    typeof e == "object" &&
      !Array.isArray(e) &&
      (e = Object.keys(e).filter((t) => e[t])),
    (Array.isArray(e) ? e.join(" ") : e)
      .split(" ")
      .filter((t) => t.trim())
      .filter(Boolean)
      .join(" ")
  );
}
async function O0(e, t) {
  for (const n of Object.keys(e)) {
    if (n === "class") {
      e[n] = GL(e[n]);
      continue;
    }
    if (
      (e[n] instanceof Promise && (e[n] = await e[n]), !t && !S0.includes(n))
    ) {
      const r = String(e[n]),
        o = n.startsWith("data-");
      r === "true" || r === ""
        ? (e[n] = o ? "true" : !0)
        : e[n] || (o && r === "false" ? (e[n] = "false") : delete e[n]);
    }
  }
  return e;
}
const YL = 10;
async function KL(e) {
  const t = [];
  return (
    Object.entries(e.resolvedInput)
      .filter(([n, r]) => typeof r < "u" && zL.includes(n))
      .forEach(([n, r]) => {
        const o = jL(r);
        t.push(...o.map((s) => WL(n, s, e)).flat());
      }),
    (await Promise.all(t))
      .flat()
      .filter(Boolean)
      .map(
        (n, r) => (
          (n._e = e._i), e.mode && (n._m = e.mode), (n._p = (e._i << YL) + r), n
        )
      )
  );
}
const ng = { base: -10, title: 10 },
  rg = { critical: -80, high: -10, low: 20 };
function vl(e) {
  let t = 100;
  const n = e.tagPriority;
  return typeof n == "number"
    ? n
    : (e.tag === "meta"
        ? (e.props["http-equiv"] === "content-security-policy" && (t = -30),
          e.props.charset && (t = -20),
          e.props.name === "viewport" && (t = -15))
        : e.tag === "link" && e.props.rel === "preconnect"
        ? (t = 20)
        : e.tag in ng && (t = ng[e.tag]),
      typeof n == "string" && n in rg ? t + rg[n] : t);
}
const qL = [
    { prefix: "before:", offset: -1 },
    { prefix: "after:", offset: 1 },
  ],
  k0 = ["onload", "onerror", "onabort", "onprogress", "onloadstart"],
  Er = "%separator";
function za(e, t, n) {
  if (typeof e != "string" || !e.includes("%")) return e;
  function r(i) {
    let a;
    return (
      ["s", "pageTitle"].includes(i)
        ? (a = t.pageTitle)
        : i.includes(".")
        ? (a = i.split(".").reduce((l, c) => (l && l[c]) || void 0, t))
        : (a = t[i]),
      typeof a < "u" ? (a || "").replace(/"/g, '\\"') : !1
    );
  }
  let o = e;
  try {
    o = decodeURI(e);
  } catch {}
  return (
    (o.match(/%(\w+\.+\w+)|%(\w+)/g) || [])
      .sort()
      .reverse()
      .forEach((i) => {
        const a = r(i.slice(1));
        typeof a == "string" &&
          (e = e
            .replace(new RegExp(`\\${i}(\\W|$)`, "g"), (l, c) => `${a}${c}`)
            .trim());
      }),
    e.includes(Er) &&
      (e.endsWith(Er) && (e = e.slice(0, -Er.length).trim()),
      e.startsWith(Er) && (e = e.slice(Er.length).trim()),
      (e = e.replace(new RegExp(`\\${Er}\\s*\\${Er}`, "g"), Er)),
      (e = za(e, { separator: n }, n))),
    e
  );
}
async function XL(e) {
  const t = {
    tag: e.tagName.toLowerCase(),
    props: await O0(
      e
        .getAttributeNames()
        .reduce((n, r) => ({ ...n, [r]: e.getAttribute(r) }), {})
    ),
    innerHTML: e.innerHTML,
  };
  return (t._d = C0(t)), t;
}
async function x0(e, t = {}) {
  var u;
  const n = t.document || e.resolvedOptions.document;
  if (!n) return;
  const r = { shouldRender: e.dirty, tags: [] };
  if ((await e.hooks.callHook("dom:beforeRender", r), !r.shouldRender)) return;
  const o = (await e.resolveTags()).map((f) => ({
    tag: f,
    id: Ua.includes(f.tag) ? eg(f) : f.tag,
    shouldRender: !0,
  }));
  let s = e._dom;
  if (!s) {
    s = { elMap: { htmlAttrs: n.documentElement, bodyAttrs: n.body } };
    for (const f of ["body", "head"]) {
      const d = (u = n == null ? void 0 : n[f]) == null ? void 0 : u.children;
      for (const m of [...d].filter((g) =>
        Ua.includes(g.tagName.toLowerCase())
      ))
        s.elMap[m.getAttribute("data-hid") || eg(await XL(m))] = m;
    }
  }
  (s.pendingSideEffects = { ...(s.sideEffects || {}) }), (s.sideEffects = {});
  function i(f, d, m) {
    const g = `${f}:${d}`;
    (s.sideEffects[g] = m), delete s.pendingSideEffects[g];
  }
  function a({ id: f, $el: d, tag: m }) {
    const g = m.tag.endsWith("Attrs");
    (s.elMap[f] = d),
      g ||
        (["textContent", "innerHTML"].forEach((_) => {
          m[_] && m[_] !== d[_] && (d[_] = m[_]);
        }),
        i(f, "el", () => {
          s.elMap[f].remove(), delete s.elMap[f];
        })),
      Object.entries(m.props).forEach(([_, T]) => {
        const y = `attr:${_}`;
        if (_ === "class")
          for (const E of (T || "").split(" ").filter(Boolean))
            g && i(f, `${y}:${E}`, () => d.classList.remove(E)),
              !d.classList.contains(E) && d.classList.add(E);
        else
          d.getAttribute(_) !== T &&
            d.setAttribute(_, T === !0 ? "" : String(T)),
            g && i(f, y, () => d.removeAttribute(_));
      });
  }
  const l = [],
    c = { bodyClose: void 0, bodyOpen: void 0, head: void 0 };
  for (const f of o) {
    const { tag: d, shouldRender: m, id: g } = f;
    if (m) {
      if (d.tag === "title") {
        n.title = d.textContent;
        continue;
      }
      (f.$el = f.$el || s.elMap[g]),
        f.$el ? a(f) : Ua.includes(d.tag) && l.push(f);
    }
  }
  for (const f of l) {
    const d = f.tag.tagPosition || "head";
    (f.$el = n.createElement(f.tag.tag)),
      a(f),
      (c[d] = c[d] || n.createDocumentFragment()),
      c[d].appendChild(f.$el);
  }
  for (const f of o) await e.hooks.callHook("dom:renderTag", f, n, i);
  c.head && n.head.appendChild(c.head),
    c.bodyOpen && n.body.insertBefore(c.bodyOpen, n.body.firstChild),
    c.bodyClose && n.body.appendChild(c.bodyClose),
    Object.values(s.pendingSideEffects).forEach((f) => f()),
    (e._dom = s),
    (e.dirty = !1),
    await e.hooks.callHook("dom:rendered", { renders: o });
}
async function I0(e, t = {}) {
  const n = t.delayFn || ((r) => setTimeout(r, 10));
  return (e._domUpdatePromise =
    e._domUpdatePromise ||
    new Promise((r) =>
      n(async () => {
        await x0(e, t), delete e._domUpdatePromise, r();
      })
    ));
}
function JL(e) {
  return (t) => {
    var r, o;
    const n =
      ((o =
        (r = t.resolvedOptions.document) == null
          ? void 0
          : r.head.querySelector('script[id="unhead:payload"]')) == null
        ? void 0
        : o.innerHTML) || !1;
    return (
      n && t.push(JSON.parse(n)),
      {
        mode: "client",
        hooks: {
          "entries:updated": function (s) {
            I0(s, e);
          },
        },
      }
    );
  };
}
const QL = ["templateParams", "htmlAttrs", "bodyAttrs"],
  ZL = {
    hooks: {
      "tag:normalise": function ({ tag: e }) {
        ["hid", "vmid", "key"].forEach((r) => {
          e.props[r] && ((e.key = e.props[r]), delete e.props[r]);
        });
        const n = C0(e) || (e.key ? `${e.tag}:${e.key}` : !1);
        n && (e._d = n);
      },
      "tags:resolve": function (e) {
        const t = {};
        e.tags.forEach((r) => {
          const o = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p,
            s = t[o];
          if (s) {
            let a = r == null ? void 0 : r.tagDuplicateStrategy;
            if ((!a && QL.includes(r.tag) && (a = "merge"), a === "merge")) {
              const l = s.props;
              ["class", "style"].forEach((c) => {
                l[c] &&
                  (r.props[c]
                    ? (c === "style" && !l[c].endsWith(";") && (l[c] += ";"),
                      (r.props[c] = `${l[c]} ${r.props[c]}`))
                    : (r.props[c] = l[c]));
              }),
                (t[o].props = { ...l, ...r.props });
              return;
            } else if (r._e === s._e) {
              (s._duped = s._duped || []),
                (r._d = `${s._d}:${s._duped.length + 1}`),
                s._duped.push(r);
              return;
            } else if (vl(r) > vl(s)) return;
          }
          const i =
            Object.keys(r.props).length +
            (r.innerHTML ? 1 : 0) +
            (r.textContent ? 1 : 0);
          if (Ua.includes(r.tag) && i === 0) {
            delete t[o];
            return;
          }
          t[o] = r;
        });
        const n = [];
        Object.values(t).forEach((r) => {
          const o = r._duped;
          delete r._duped, n.push(r), o && n.push(...o);
        }),
          (e.tags = n),
          (e.tags = e.tags.filter(
            (r) =>
              !(
                r.tag === "meta" &&
                (r.props.name || r.props.property) &&
                !r.props.content
              )
          ));
      },
    },
  },
  e5 = {
    mode: "server",
    hooks: {
      "tags:resolve": function (e) {
        const t = {};
        e.tags
          .filter(
            (n) =>
              ["titleTemplate", "templateParams", "title"].includes(n.tag) &&
              n._m === "server"
          )
          .forEach((n) => {
            t[n.tag] = n.tag.startsWith("title") ? n.textContent : n.props;
          }),
          Object.keys(t).length &&
            e.tags.push({
              tag: "script",
              innerHTML: JSON.stringify(t),
              props: { id: "unhead:payload", type: "application/json" },
            });
      },
    },
  },
  t5 = ["script", "link", "bodyAttrs"];
function n5(e) {
  const t = {},
    n = {};
  return (
    Object.entries(e.props).forEach(([r, o]) => {
      r.startsWith("on") && typeof o == "function"
        ? (k0.includes(r) && (t[r] = `this.dataset.${r} = true`), (n[r] = o))
        : (t[r] = o);
    }),
    { props: t, eventHandlers: n }
  );
}
const r5 = (e) => ({
    hooks: {
      "tags:resolve": function (t) {
        for (const n of t.tags)
          if (t5.includes(n.tag)) {
            const { props: r, eventHandlers: o } = n5(n);
            (n.props = r),
              Object.keys(o).length &&
                ((n.props.src || n.props.href) &&
                  (n.key = n.key || op(n.props.src || n.props.href)),
                (n._eventHandlers = o));
          }
      },
      "dom:renderTag": function (t, n, r) {
        if (!t.tag._eventHandlers) return;
        const o = t.tag.tag === "bodyAttrs" ? n.defaultView : t.$el;
        Object.entries(t.tag._eventHandlers).forEach(([s, i]) => {
          const a = `${t.tag._d || t.tag._p}:${s}`,
            l = s.slice(2).toLowerCase(),
            c = `data-h-${l}`;
          if ((r(t.id, a, () => {}), t.$el.hasAttribute(c))) return;
          t.$el.setAttribute(c, "");
          let u;
          const f = (d) => {
            i(d), u == null || u.disconnect();
          };
          s in t.$el.dataset
            ? f(new Event(s.replace("on", "")))
            : k0.includes(s) && typeof MutationObserver < "u"
            ? ((u = new MutationObserver((d) => {
                d.some((g) => g.attributeName === `data-${s}`) &&
                  (f(new Event(s.replace("on", ""))),
                  u == null || u.disconnect());
              })),
              u.observe(t.$el, { attributes: !0 }))
            : o.addEventListener(l, f),
            r(t.id, a, () => {
              u == null || u.disconnect(),
                o.removeEventListener(l, f),
                t.$el.removeAttribute(c);
            });
        });
      },
    },
  }),
  o5 = ["link", "style", "script", "noscript"],
  s5 = {
    hooks: {
      "tag:normalise": ({ tag: e }) => {
        e.key && o5.includes(e.tag) && (e.props["data-hid"] = e._h = op(e.key));
      },
    },
  },
  i5 = {
    hooks: {
      "tags:resolve": (e) => {
        const t = (n) => {
          var r;
          return (r = e.tags.find((o) => o._d === n)) == null ? void 0 : r._p;
        };
        for (const { prefix: n, offset: r } of qL)
          for (const o of e.tags.filter(
            (s) =>
              typeof s.tagPriority == "string" && s.tagPriority.startsWith(n)
          )) {
            const s = t(o.tagPriority.replace(n, ""));
            typeof s < "u" && (o._p = s + r);
          }
        e.tags.sort((n, r) => n._p - r._p).sort((n, r) => vl(n) - vl(r));
      },
    },
  },
  a5 = { meta: "content", link: "href", htmlAttrs: "lang" },
  l5 = (e) => ({
    hooks: {
      "tags:resolve": (t) => {
        var a;
        const { tags: n } = t,
          r =
            (a = n.find((l) => l.tag === "title")) == null
              ? void 0
              : a.textContent,
          o = n.findIndex((l) => l.tag === "templateParams"),
          s = o !== -1 ? n[o].props : {},
          i = s.separator || "|";
        delete s.separator, (s.pageTitle = za(s.pageTitle || r || "", s, i));
        for (const l of n.filter((c) => c.processTemplateParams !== !1)) {
          const c = a5[l.tag];
          c && typeof l.props[c] == "string"
            ? (l.props[c] = za(l.props[c], s, i))
            : (l.processTemplateParams === !0 ||
                ["titleTemplate", "title"].includes(l.tag)) &&
              ["innerHTML", "textContent"].forEach((u) => {
                typeof l[u] == "string" && (l[u] = za(l[u], s, i));
              });
        }
        (e._templateParams = s),
          (e._separator = i),
          (t.tags = n.filter((l) => l.tag !== "templateParams"));
      },
    },
  }),
  c5 = {
    hooks: {
      "tags:resolve": (e) => {
        const { tags: t } = e;
        let n = t.findIndex((o) => o.tag === "titleTemplate");
        const r = t.findIndex((o) => o.tag === "title");
        if (r !== -1 && n !== -1) {
          const o = tg(t[n].textContent, t[r].textContent);
          o !== null ? (t[r].textContent = o || t[r].textContent) : delete t[r];
        } else if (n !== -1) {
          const o = tg(t[n].textContent);
          o !== null &&
            ((t[n].textContent = o), (t[n].tag = "title"), (n = -1));
        }
        n !== -1 && delete t[n], (e.tags = t.filter(Boolean));
      },
    },
  },
  u5 = {
    hooks: {
      "tags:afterResolve": function (e) {
        for (const t of e.tags)
          typeof t.innerHTML == "string" &&
            (t.innerHTML &&
            ["application/ld+json", "application/json"].includes(t.props.type)
              ? (t.innerHTML = t.innerHTML.replace(/</g, "\\u003C"))
              : (t.innerHTML = t.innerHTML.replace(
                  new RegExp(`</${t.tag}`, "g"),
                  `<\\/${t.tag}`
                )));
      },
    },
  };
let A0;
function f5(e = {}) {
  const t = d5(e);
  return t.use(JL()), (A0 = t);
}
function og(e, t) {
  return !e || (e === "server" && t) || (e === "client" && !t);
}
function d5(e = {}) {
  const t = HL();
  t.addHooks(e.hooks || {}),
    (e.document = e.document || (VL ? document : void 0));
  const n = !e.document,
    r = () => {
      (a.dirty = !0), t.callHook("entries:updated", a);
    };
  let o = 0,
    s = [];
  const i = [],
    a = {
      plugins: i,
      dirty: !1,
      resolvedOptions: e,
      hooks: t,
      headEntries() {
        return s;
      },
      use(l) {
        const c = typeof l == "function" ? l(a) : l;
        (!c.key || !i.some((u) => u.key === c.key)) &&
          (i.push(c), og(c.mode, n) && t.addHooks(c.hooks || {}));
      },
      push(l, c) {
        c == null || delete c.head;
        const u = { _i: o++, input: l, ...c };
        return (
          og(u.mode, n) && (s.push(u), r()),
          {
            dispose() {
              (s = s.filter((f) => f._i !== u._i)),
                t.callHook("entries:updated", a),
                r();
            },
            patch(f) {
              (s = s.map((d) => (d._i === u._i && (d.input = u.input = f), d))),
                r();
            },
          }
        );
      },
      async resolveTags() {
        const l = { tags: [], entries: [...s] };
        await t.callHook("entries:resolve", l);
        for (const c of l.entries) {
          const u = c.resolvedInput || c.input;
          if (
            ((c.resolvedInput = await (c.transform ? c.transform(u) : u)),
            c.resolvedInput)
          )
            for (const f of await KL(c)) {
              const d = {
                tag: f,
                entry: c,
                resolvedOptions: a.resolvedOptions,
              };
              await t.callHook("tag:normalise", d), l.tags.push(d.tag);
            }
        }
        return (
          await t.callHook("tags:beforeResolve", l),
          await t.callHook("tags:resolve", l),
          await t.callHook("tags:afterResolve", l),
          l.tags
        );
      },
      ssr: n,
    };
  return (
    [
      ZL,
      e5,
      r5,
      s5,
      i5,
      l5,
      c5,
      u5,
      ...((e == null ? void 0 : e.plugins) || []),
    ].forEach((l) => a.use(l)),
    a.hooks.callHook("init", a),
    a
  );
}
function p5() {
  return A0;
}
const m5 = il.startsWith("3");
function h5(e) {
  return typeof e == "function" ? e() : te(e);
}
function yl(e, t = "") {
  if (e instanceof Promise) return e;
  const n = h5(e);
  return !e || !n
    ? n
    : Array.isArray(n)
    ? n.map((r) => yl(r, t))
    : typeof n == "object"
    ? Object.fromEntries(
        Object.entries(n).map(([r, o]) =>
          r === "titleTemplate" || r.startsWith("on")
            ? [r, te(o)]
            : [r, yl(o, r)]
        )
      )
    : n;
}
const g5 = {
    hooks: {
      "entries:resolve": function (e) {
        for (const t of e.entries) t.resolvedInput = yl(t.input);
      },
    },
  },
  P0 = "usehead";
function _5(e) {
  return {
    install(n) {
      m5 &&
        ((n.config.globalProperties.$unhead = e),
        (n.config.globalProperties.$head = e),
        n.provide(P0, e));
    },
  }.install;
}
function v5(e = {}) {
  e.domDelayFn = e.domDelayFn || ((n) => Gt(() => setTimeout(() => n(), 0)));
  const t = f5(e);
  return t.use(g5), (t.install = _5(t)), t;
}
const sg =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  ig = "__unhead_injection_handler__";
function y5() {
  if (ig in sg) return sg[ig]();
  const e = Me(P0);
  return (
    e ||
      console.warn(
        "Unhead is missing Vue context, falling back to shared context. This may have unexpected results."
      ),
    e || p5()
  );
}
function R0(e, t = {}) {
  const n = t.head || y5();
  if (n) return n.ssr ? n.push(e, t) : b5(n, e, t);
}
function b5(e, t, n = {}) {
  const r = re(!1),
    o = re({});
  Tt(() => {
    o.value = r.value ? {} : yl(t);
  });
  const s = e.push(o.value, n);
  return (
    xt(o, (a) => {
      s.patch(a);
    }),
    bn() &&
      (ad(() => {
        s.dispose();
      }),
      av(() => {
        r.value = !0;
      }),
      iv(() => {
        r.value = !1;
      })),
    s
  );
}
function E5(e, t) {
  const n = v5(t || {}),
    r = {
      unhead: n,
      install(o) {
        il.startsWith("3") &&
          ((o.config.globalProperties.$head = n), o.provide("usehead", n));
      },
      use(o) {
        n.use(o);
      },
      resolveTags() {
        return n.resolveTags();
      },
      headEntries() {
        return n.headEntries();
      },
      headTags() {
        return n.resolveTags();
      },
      push(o, s) {
        return n.push(o, s);
      },
      addEntry(o, s) {
        return n.push(o, s);
      },
      addHeadObjs(o, s) {
        return n.push(o, s);
      },
      addReactiveEntry(o, s) {
        const i = R0(o, s);
        return typeof i < "u" ? i.dispose : () => {};
      },
      removeHeadObjs() {},
      updateDOM(o, s) {
        s
          ? x0(n, { document: o })
          : I0(n, { delayFn: (i) => setTimeout(() => i(), 50), document: o });
      },
      internalHooks: n.hooks,
      hooks: { "before:dom": [], "resolved:tags": [], "resolved:entries": [] },
    };
  return (
    (n.addHeadObjs = r.addHeadObjs),
    (n.updateDOM = r.updateDOM),
    n.hooks.hook("dom:beforeRender", (o) => {
      for (const s of r.hooks["before:dom"])
        s() === !1 && (o.shouldRender = !1);
    }),
    e && r.addHeadObjs(e),
    r
  );
}
const w5 = Re({
    __name: "App",
    setup(e) {
      const { isCommingSoonModalOpen: t } = $u(RL()),
        { isPremiumModalOpen: n, currentLimitation: r } = $u(NL()),
        o = ab().currentRoute;
      return (
        R0({
          title: ie(() => `${o.value.meta.title || ""} | FileQA `),
          meta: [],
        }),
        (s, i) => {
          const a = ln("RouterView"),
            l = PL,
            c = SL;
          return (
            se(),
            _e(
              Ae,
              null,
              [
                ae(a, { class: "font-poppins bg-white" }),
                ae(
                  l,
                  {
                    onCloseModal: i[0] || (i[0] = (u) => (t.value = !1)),
                    open: te(t),
                  },
                  null,
                  8,
                  ["open"]
                ),
                ae(
                  c,
                  {
                    open: te(n),
                    currentLimitation: te(r),
                    onCloseModal: i[1] || (i[1] = (u) => (n.value = !1)),
                  },
                  null,
                  8,
                  ["open", "currentLimitation"]
                ),
              ],
              64
            )
          );
        }
      );
    },
  }),
  T5 = Un(w5, [["__file", "/usr/src/app/src/App.vue"]]);
function ag(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ag(Object(n), !0).forEach(function (r) {
          mt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ag(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function bl(e) {
  "@babel/helpers - typeof";
  return (
    (bl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    bl(e)
  );
}
function S5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lg(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function C5(e, t, n) {
  return (
    t && lg(e.prototype, t),
    n && lg(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function mt(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function sp(e, t) {
  return k5(e) || I5(e, t) || N0(e, t) || P5();
}
function zi(e) {
  return O5(e) || x5(e) || N0(e) || A5();
}
function O5(e) {
  if (Array.isArray(e)) return Tf(e);
}
function k5(e) {
  if (Array.isArray(e)) return e;
}
function x5(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function I5(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      o = !0,
      s = !1,
      i,
      a;
    try {
      for (
        n = n.call(e);
        !(o = (i = n.next()).done) && (r.push(i.value), !(t && r.length === t));
        o = !0
      );
    } catch (l) {
      (s = !0), (a = l);
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (s) throw a;
      }
    }
    return r;
  }
}
function N0(e, t) {
  if (e) {
    if (typeof e == "string") return Tf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Tf(e, t);
  }
}
function Tf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function A5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var cg = function () {},
  ip = {},
  L0 = {},
  $0 = null,
  D0 = { mark: cg, measure: cg };
try {
  typeof window < "u" && (ip = window),
    typeof document < "u" && (L0 = document),
    typeof MutationObserver < "u" && ($0 = MutationObserver),
    typeof performance < "u" && (D0 = performance);
} catch {}
var R5 = ip.navigator || {},
  ug = R5.userAgent,
  fg = ug === void 0 ? "" : ug,
  Yr = ip,
  We = L0,
  dg = $0,
  ha = D0;
Yr.document;
var dr =
    !!We.documentElement &&
    !!We.head &&
    typeof We.addEventListener == "function" &&
    typeof We.createElement == "function",
  M0 = ~fg.indexOf("MSIE") || ~fg.indexOf("Trident/"),
  ga,
  _a,
  va,
  ya,
  ba,
  lr = "___FONT_AWESOME___",
  Sf = 16,
  F0 = "fa",
  H0 = "svg-inline--fa",
  ko = "data-fa-i2svg",
  Cf = "data-fa-pseudo-element",
  N5 = "data-fa-pseudo-element-pending",
  ap = "data-prefix",
  lp = "data-icon",
  pg = "fontawesome-i2svg",
  L5 = "async",
  $5 = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  j0 = (function () {
    try {
      return !1;
    } catch {
      return !1;
    }
  })(),
  Ve = "classic",
  rt = "sharp",
  cp = [Ve, rt];
function Bi(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[Ve];
    },
  });
}
var bi = Bi(
    ((ga = {}),
    mt(ga, Ve, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      fakd: "kit",
      "fa-kit": "kit",
      "fa-kit-duotone": "kit",
    }),
    mt(ga, rt, {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    }),
    ga)
  ),
  Ei = Bi(
    ((_a = {}),
    mt(_a, Ve, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak",
    }),
    mt(_a, rt, { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" }),
    _a)
  ),
  wi = Bi(
    ((va = {}),
    mt(va, Ve, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    }),
    mt(va, rt, {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    }),
    va)
  ),
  D5 = Bi(
    ((ya = {}),
    mt(ya, Ve, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    }),
    mt(ya, rt, {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    }),
    ya)
  ),
  M5 = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  U0 = "fa-layers-text",
  F5 =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  H5 = Bi(
    ((ba = {}),
    mt(ba, Ve, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    }),
    mt(ba, rt, { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" }),
    ba)
  ),
  z0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  j5 = z0.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  U5 = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  fo = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  Ti = new Set();
Object.keys(Ei[Ve]).map(Ti.add.bind(Ti));
Object.keys(Ei[rt]).map(Ti.add.bind(Ti));
var z5 = []
    .concat(cp, zi(Ti), [
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      fo.GROUP,
      fo.SWAP_OPACITY,
      fo.PRIMARY,
      fo.SECONDARY,
    ])
    .concat(
      z0.map(function (e) {
        return "".concat(e, "x");
      })
    )
    .concat(
      j5.map(function (e) {
        return "w-".concat(e);
      })
    ),
  Qs = Yr.FontAwesomeConfig || {};
function B5(e) {
  var t = We.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function V5(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (We && typeof We.querySelector == "function") {
  var W5 = [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ];
  W5.forEach(function (e) {
    var t = sp(e, 2),
      n = t[0],
      r = t[1],
      o = V5(B5(n));
    o != null && (Qs[r] = o);
  });
}
var B0 = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: F0,
  replacementClass: H0,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Qs.familyPrefix && (Qs.cssPrefix = Qs.familyPrefix);
var ds = ne(ne({}, B0), Qs);
ds.autoReplaceSvg || (ds.observeMutations = !1);
var ce = {};
Object.keys(B0).forEach(function (e) {
  Object.defineProperty(ce, e, {
    enumerable: !0,
    set: function (n) {
      (ds[e] = n),
        Zs.forEach(function (r) {
          return r(ce);
        });
    },
    get: function () {
      return ds[e];
    },
  });
});
Object.defineProperty(ce, "familyPrefix", {
  enumerable: !0,
  set: function (t) {
    (ds.cssPrefix = t),
      Zs.forEach(function (n) {
        return n(ce);
      });
  },
  get: function () {
    return ds.cssPrefix;
  },
});
Yr.FontAwesomeConfig = ce;
var Zs = [];
function G5(e) {
  return (
    Zs.push(e),
    function () {
      Zs.splice(Zs.indexOf(e), 1);
    }
  );
}
var wr = Sf,
  Rn = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function Y5(e) {
  if (!(!e || !dr)) {
    var t = We.createElement("style");
    t.setAttribute("type", "text/css"), (t.innerHTML = e);
    for (var n = We.head.childNodes, r = null, o = n.length - 1; o > -1; o--) {
      var s = n[o],
        i = (s.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(i) > -1 && (r = s);
    }
    return We.head.insertBefore(t, r), e;
  }
}
var K5 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Si() {
  for (var e = 12, t = ""; e-- > 0; ) t += K5[(Math.random() * 62) | 0];
  return t;
}
function Es(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function up(e) {
  return e.classList
    ? Es(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter(function (t) {
        return t;
      });
}
function V0(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function q5(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + "".concat(n, '="').concat(V0(e[n]), '" ');
    }, "")
    .trim();
}
function wc(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function fp(e) {
  return (
    e.size !== Rn.size ||
    e.x !== Rn.x ||
    e.y !== Rn.y ||
    e.rotate !== Rn.rotate ||
    e.flipX ||
    e.flipY
  );
}
function X5(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    o = { transform: "translate(".concat(n / 2, " 256)") },
    s = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    i = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    a = "rotate(".concat(t.rotate, " 0 0)"),
    l = { transform: "".concat(s, " ").concat(i, " ").concat(a) },
    c = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: o, inner: l, path: c };
}
function J5(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Sf : n,
    o = e.height,
    s = o === void 0 ? Sf : o,
    i = e.startCentered,
    a = i === void 0 ? !1 : i,
    l = "";
  return (
    a && M0
      ? (l += "translate("
          .concat(t.x / wr - r / 2, "em, ")
          .concat(t.y / wr - s / 2, "em) "))
      : a
      ? (l += "translate(calc(-50% + "
          .concat(t.x / wr, "em), calc(-50% + ")
          .concat(t.y / wr, "em)) "))
      : (l += "translate(".concat(t.x / wr, "em, ").concat(t.y / wr, "em) ")),
    (l += "scale("
      .concat((t.size / wr) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / wr) * (t.flipY ? -1 : 1), ") ")),
    (l += "rotate(".concat(t.rotate, "deg) ")),
    l
  );
}
var Q5 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function W0() {
  var e = F0,
    t = H0,
    n = ce.cssPrefix,
    r = ce.replacementClass,
    o = Q5;
  if (n !== e || r !== t) {
    var s = new RegExp("\\.".concat(e, "\\-"), "g"),
      i = new RegExp("\\--".concat(e, "\\-"), "g"),
      a = new RegExp("\\.".concat(t), "g");
    o = o
      .replace(s, ".".concat(n, "-"))
      .replace(i, "--".concat(n, "-"))
      .replace(a, ".".concat(r));
  }
  return o;
}
var mg = !1;
function iu() {
  ce.autoAddCss && !mg && (Y5(W0()), (mg = !0));
}
var Z5 = {
    mixout: function () {
      return { dom: { css: W0, insertCss: iu } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          iu();
        },
        beforeI2svg: function () {
          iu();
        },
      };
    },
  },
  cr = Yr || {};
cr[lr] || (cr[lr] = {});
cr[lr].styles || (cr[lr].styles = {});
cr[lr].hooks || (cr[lr].hooks = {});
cr[lr].shims || (cr[lr].shims = []);
var gn = cr[lr],
  G0 = [],
  e3 = function e() {
    We.removeEventListener("DOMContentLoaded", e),
      (El = 1),
      G0.map(function (t) {
        return t();
      });
  },
  El = !1;
dr &&
  ((El = (We.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    We.readyState
  )),
  El || We.addEventListener("DOMContentLoaded", e3));
function t3(e) {
  dr && (El ? setTimeout(e, 0) : G0.push(e));
}
function Vi(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    o = e.children,
    s = o === void 0 ? [] : o;
  return typeof e == "string"
    ? V0(e)
    : "<"
        .concat(t, " ")
        .concat(q5(r), ">")
        .concat(s.map(Vi).join(""), "</")
        .concat(t, ">");
}
function hg(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var n3 = function (t, n) {
    return function (r, o, s, i) {
      return t.call(n, r, o, s, i);
    };
  },
  au = function (t, n, r, o) {
    var s = Object.keys(t),
      i = s.length,
      a = o !== void 0 ? n3(n, o) : n,
      l,
      c,
      u;
    for (
      r === void 0 ? ((l = 1), (u = t[s[0]])) : ((l = 0), (u = r));
      l < i;
      l++
    )
      (c = s[l]), (u = a(u, t[c], c, t));
    return u;
  };
function r3(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var o = e.charCodeAt(n++);
    if (o >= 55296 && o <= 56319 && n < r) {
      var s = e.charCodeAt(n++);
      (s & 64512) == 56320
        ? t.push(((o & 1023) << 10) + (s & 1023) + 65536)
        : (t.push(o), n--);
    } else t.push(o);
  }
  return t;
}
function Of(e) {
  var t = r3(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function o3(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    o;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((o = e.charCodeAt(t + 1)), o >= 56320 && o <= 57343)
    ? (r - 55296) * 1024 + o - 56320 + 65536
    : r;
}
function gg(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      o = !!r.icon;
    return o ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function kf(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    o = r === void 0 ? !1 : r,
    s = gg(t);
  typeof gn.hooks.addPack == "function" && !o
    ? gn.hooks.addPack(e, gg(t))
    : (gn.styles[e] = ne(ne({}, gn.styles[e] || {}), s)),
    e === "fas" && kf("fa", t);
}
var Ea,
  wa,
  Ta,
  Yo = gn.styles,
  s3 = gn.shims,
  i3 =
    ((Ea = {}),
    mt(Ea, Ve, Object.values(wi[Ve])),
    mt(Ea, rt, Object.values(wi[rt])),
    Ea),
  dp = null,
  Y0 = {},
  K0 = {},
  q0 = {},
  X0 = {},
  J0 = {},
  a3 =
    ((wa = {}),
    mt(wa, Ve, Object.keys(bi[Ve])),
    mt(wa, rt, Object.keys(bi[rt])),
    wa);
function l3(e) {
  return ~z5.indexOf(e);
}
function c3(e, t) {
  var n = t.split("-"),
    r = n[0],
    o = n.slice(1).join("-");
  return r === e && o !== "" && !l3(o) ? o : null;
}
var Q0 = function () {
  var t = function (s) {
    return au(
      Yo,
      function (i, a, l) {
        return (i[l] = au(a, s, {})), i;
      },
      {}
    );
  };
  (Y0 = t(function (o, s, i) {
    if ((s[3] && (o[s[3]] = i), s[2])) {
      var a = s[2].filter(function (l) {
        return typeof l == "number";
      });
      a.forEach(function (l) {
        o[l.toString(16)] = i;
      });
    }
    return o;
  })),
    (K0 = t(function (o, s, i) {
      if (((o[i] = i), s[2])) {
        var a = s[2].filter(function (l) {
          return typeof l == "string";
        });
        a.forEach(function (l) {
          o[l] = i;
        });
      }
      return o;
    })),
    (J0 = t(function (o, s, i) {
      var a = s[2];
      return (
        (o[i] = i),
        a.forEach(function (l) {
          o[l] = i;
        }),
        o
      );
    }));
  var n = "far" in Yo || ce.autoFetchSvg,
    r = au(
      s3,
      function (o, s) {
        var i = s[0],
          a = s[1],
          l = s[2];
        return (
          a === "far" && !n && (a = "fas"),
          typeof i == "string" && (o.names[i] = { prefix: a, iconName: l }),
          typeof i == "number" &&
            (o.unicodes[i.toString(16)] = { prefix: a, iconName: l }),
          o
        );
      },
      { names: {}, unicodes: {} }
    );
  (q0 = r.names),
    (X0 = r.unicodes),
    (dp = Tc(ce.styleDefault, { family: ce.familyDefault }));
};
G5(function (e) {
  dp = Tc(e.styleDefault, { family: ce.familyDefault });
});
Q0();
function pp(e, t) {
  return (Y0[e] || {})[t];
}
function u3(e, t) {
  return (K0[e] || {})[t];
}
function po(e, t) {
  return (J0[e] || {})[t];
}
function Z0(e) {
  return q0[e] || { prefix: null, iconName: null };
}
function f3(e) {
  var t = X0[e],
    n = pp("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function Kr() {
  return dp;
}
var mp = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function Tc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? Ve : n,
    o = bi[r][e],
    s = Ei[r][e] || Ei[r][o],
    i = e in gn.styles ? e : null;
  return s || i || null;
}
var _g =
  ((Ta = {}),
  mt(Ta, Ve, Object.keys(wi[Ve])),
  mt(Ta, rt, Object.keys(wi[rt])),
  Ta);
function Sc(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    o = r === void 0 ? !1 : r,
    s =
      ((t = {}),
      mt(t, Ve, "".concat(ce.cssPrefix, "-").concat(Ve)),
      mt(t, rt, "".concat(ce.cssPrefix, "-").concat(rt)),
      t),
    i = null,
    a = Ve;
  (e.includes(s[Ve]) ||
    e.some(function (c) {
      return _g[Ve].includes(c);
    })) &&
    (a = Ve),
    (e.includes(s[rt]) ||
      e.some(function (c) {
        return _g[rt].includes(c);
      })) &&
      (a = rt);
  var l = e.reduce(function (c, u) {
    var f = c3(ce.cssPrefix, u);
    if (
      (Yo[u]
        ? ((u = i3[a].includes(u) ? D5[a][u] : u), (i = u), (c.prefix = u))
        : a3[a].indexOf(u) > -1
        ? ((i = u), (c.prefix = Tc(u, { family: a })))
        : f
        ? (c.iconName = f)
        : u !== ce.replacementClass &&
          u !== s[Ve] &&
          u !== s[rt] &&
          c.rest.push(u),
      !o && c.prefix && c.iconName)
    ) {
      var d = i === "fa" ? Z0(c.iconName) : {},
        m = po(c.prefix, c.iconName);
      d.prefix && (i = null),
        (c.iconName = d.iconName || m || c.iconName),
        (c.prefix = d.prefix || c.prefix),
        c.prefix === "far" &&
          !Yo.far &&
          Yo.fas &&
          !ce.autoFetchSvg &&
          (c.prefix = "fas");
    }
    return c;
  }, mp());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"),
    !l.prefix &&
      a === rt &&
      (Yo.fass || ce.autoFetchSvg) &&
      ((l.prefix = "fass"),
      (l.iconName = po(l.prefix, l.iconName) || l.iconName)),
    (l.prefix === "fa" || i === "fa") && (l.prefix = Kr() || "fas"),
    l
  );
}
var d3 = (function () {
    function e() {
      S5(this, e), (this.definitions = {});
    }
    return (
      C5(e, [
        {
          key: "add",
          value: function () {
            for (
              var n = this, r = arguments.length, o = new Array(r), s = 0;
              s < r;
              s++
            )
              o[s] = arguments[s];
            var i = o.reduce(this._pullDefinitions, {});
            Object.keys(i).forEach(function (a) {
              (n.definitions[a] = ne(ne({}, n.definitions[a] || {}), i[a])),
                kf(a, i[a]);
              var l = wi[Ve][a];
              l && kf(l, i[a]), Q0();
            });
          },
        },
        {
          key: "reset",
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: "_pullDefinitions",
          value: function (n, r) {
            var o = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(o).map(function (s) {
                var i = o[s],
                  a = i.prefix,
                  l = i.iconName,
                  c = i.icon,
                  u = c[2];
                n[a] || (n[a] = {}),
                  u.length > 0 &&
                    u.forEach(function (f) {
                      typeof f == "string" && (n[a][f] = c);
                    }),
                  (n[a][l] = c);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  vg = [],
  Ko = {},
  ts = {},
  p3 = Object.keys(ts);
function m3(e, t) {
  var n = t.mixoutsTo;
  return (
    (vg = e),
    (Ko = {}),
    Object.keys(ts).forEach(function (r) {
      p3.indexOf(r) === -1 && delete ts[r];
    }),
    vg.forEach(function (r) {
      var o = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(o).forEach(function (i) {
          typeof o[i] == "function" && (n[i] = o[i]),
            bl(o[i]) === "object" &&
              Object.keys(o[i]).forEach(function (a) {
                n[i] || (n[i] = {}), (n[i][a] = o[i][a]);
              });
        }),
        r.hooks)
      ) {
        var s = r.hooks();
        Object.keys(s).forEach(function (i) {
          Ko[i] || (Ko[i] = []), Ko[i].push(s[i]);
        });
      }
      r.provides && r.provides(ts);
    }),
    n
  );
}
function xf(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
    o < n;
    o++
  )
    r[o - 2] = arguments[o];
  var s = Ko[e] || [];
  return (
    s.forEach(function (i) {
      t = i.apply(null, [t].concat(r));
    }),
    t
  );
}
function xo(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = Ko[e] || [];
  o.forEach(function (s) {
    s.apply(null, n);
  });
}
function ur() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return ts[e] ? ts[e].apply(null, t) : void 0;
}
function If(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName,
    n = e.prefix || Kr();
  if (t)
    return (t = po(n, t) || t), hg(e1.definitions, n, t) || hg(gn.styles, n, t);
}
var e1 = new d3(),
  h3 = function () {
    (ce.autoReplaceSvg = !1), (ce.observeMutations = !1), xo("noAuto");
  },
  g3 = {
    i2svg: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return dr
        ? (xo("beforeI2svg", t), ur("pseudoElements2svg", t), ur("i2svg", t))
        : Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      ce.autoReplaceSvg === !1 && (ce.autoReplaceSvg = !0),
        (ce.observeMutations = !0),
        t3(function () {
          v3({ autoReplaceSvgRoot: n }), xo("watch", t);
        });
    },
  },
  _3 = {
    icon: function (t) {
      if (t === null) return null;
      if (bl(t) === "object" && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: po(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
          r = Tc(t[0]);
        return { prefix: r, iconName: po(r, n) || n };
      }
      if (
        typeof t == "string" &&
        (t.indexOf("".concat(ce.cssPrefix, "-")) > -1 || t.match(M5))
      ) {
        var o = Sc(t.split(" "), { skipLookups: !0 });
        return {
          prefix: o.prefix || Kr(),
          iconName: po(o.prefix, o.iconName) || o.iconName,
        };
      }
      if (typeof t == "string") {
        var s = Kr();
        return { prefix: s, iconName: po(s, t) || t };
      }
    },
  },
  en = {
    noAuto: h3,
    config: ce,
    dom: g3,
    parse: _3,
    library: e1,
    findIconDefinition: If,
    toHtml: Vi,
  },
  v3 = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? We : n;
    (Object.keys(gn.styles).length > 0 || ce.autoFetchSvg) &&
      dr &&
      ce.autoReplaceSvg &&
      en.dom.i2svg({ node: r });
  };
function Cc(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map(function (r) {
          return Vi(r);
        });
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (dr) {
          var r = We.createElement("div");
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function y3(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    o = e.attributes,
    s = e.styles,
    i = e.transform;
  if (fp(i) && n.found && !r.found) {
    var a = n.width,
      l = n.height,
      c = { x: a / l / 2, y: 0.5 };
    o.style = wc(
      ne(
        ne({}, s),
        {},
        {
          "transform-origin": ""
            .concat(c.x + i.x / 16, "em ")
            .concat(c.y + i.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: o, children: t }];
}
function b3(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    o = e.attributes,
    s = e.symbol,
    i = s === !0 ? "".concat(t, "-").concat(ce.cssPrefix, "-").concat(n) : s;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        {
          tag: "symbol",
          attributes: ne(ne({}, o), {}, { id: i }),
          children: r,
        },
      ],
    },
  ];
}
function hp(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    o = e.prefix,
    s = e.iconName,
    i = e.transform,
    a = e.symbol,
    l = e.title,
    c = e.maskId,
    u = e.titleId,
    f = e.extra,
    d = e.watchable,
    m = d === void 0 ? !1 : d,
    g = r.found ? r : n,
    _ = g.width,
    T = g.height,
    y = o === "fak",
    E = [ce.replacementClass, s ? "".concat(ce.cssPrefix, "-").concat(s) : ""]
      .filter(function (F) {
        return f.classes.indexOf(F) === -1;
      })
      .filter(function (F) {
        return F !== "" || !!F;
      })
      .concat(f.classes)
      .join(" "),
    v = {
      children: [],
      attributes: ne(
        ne({}, f.attributes),
        {},
        {
          "data-prefix": o,
          "data-icon": s,
          class: E,
          role: f.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(_, " ").concat(T),
        }
      ),
    },
    w =
      y && !~f.classes.indexOf("fa-fw")
        ? { width: "".concat((_ / T) * 16 * 0.0625, "em") }
        : {};
  m && (v.attributes[ko] = ""),
    l &&
      (v.children.push({
        tag: "title",
        attributes: {
          id: v.attributes["aria-labelledby"] || "title-".concat(u || Si()),
        },
        children: [l],
      }),
      delete v.attributes.title);
  var C = ne(
      ne({}, v),
      {},
      {
        prefix: o,
        iconName: s,
        main: n,
        mask: r,
        maskId: c,
        transform: i,
        symbol: a,
        styles: ne(ne({}, w), f.styles),
      }
    ),
    I =
      r.found && n.found
        ? ur("generateAbstractMask", C) || { children: [], attributes: {} }
        : ur("generateAbstractIcon", C) || { children: [], attributes: {} },
    S = I.children,
    M = I.attributes;
  return (C.children = S), (C.attributes = M), a ? b3(C) : y3(C);
}
function yg(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    o = e.transform,
    s = e.title,
    i = e.extra,
    a = e.watchable,
    l = a === void 0 ? !1 : a,
    c = ne(
      ne(ne({}, i.attributes), s ? { title: s } : {}),
      {},
      { class: i.classes.join(" ") }
    );
  l && (c[ko] = "");
  var u = ne({}, i.styles);
  fp(o) &&
    ((u.transform = J5({
      transform: o,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (u["-webkit-transform"] = u.transform));
  var f = wc(u);
  f.length > 0 && (c.style = f);
  var d = [];
  return (
    d.push({ tag: "span", attributes: c, children: [t] }),
    s &&
      d.push({ tag: "span", attributes: { class: "sr-only" }, children: [s] }),
    d
  );
}
function E3(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    o = ne(
      ne(ne({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(" ") }
    ),
    s = wc(r.styles);
  s.length > 0 && (o.style = s);
  var i = [];
  return (
    i.push({ tag: "span", attributes: o, children: [t] }),
    n &&
      i.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    i
  );
}
var lu = gn.styles;
function Af(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    o = sp(r, 1),
    s = o[0],
    i = null;
  return (
    Array.isArray(s)
      ? (i = {
          tag: "g",
          attributes: { class: "".concat(ce.cssPrefix, "-").concat(fo.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(ce.cssPrefix, "-").concat(fo.SECONDARY),
                fill: "currentColor",
                d: s[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(ce.cssPrefix, "-").concat(fo.PRIMARY),
                fill: "currentColor",
                d: s[1],
              },
            },
          ],
        })
      : (i = { tag: "path", attributes: { fill: "currentColor", d: s } }),
    { found: !0, width: t, height: n, icon: i }
  );
}
var w3 = { found: !1, width: 512, height: 512 };
function T3(e, t) {
  !j0 &&
    !ce.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function Pf(e, t) {
  var n = t;
  return (
    t === "fa" && ce.styleDefault !== null && (t = Kr()),
    new Promise(function (r, o) {
      if ((ur("missingIconAbstract"), n === "fa")) {
        var s = Z0(e) || {};
        (e = s.iconName || e), (t = s.prefix || t);
      }
      if (e && t && lu[t] && lu[t][e]) {
        var i = lu[t][e];
        return r(Af(i));
      }
      T3(e, t),
        r(
          ne(
            ne({}, w3),
            {},
            {
              icon:
                ce.showMissingIcons && e ? ur("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
var bg = function () {},
  Rf =
    ce.measurePerformance && ha && ha.mark && ha.measure
      ? ha
      : { mark: bg, measure: bg },
  Us = 'FA "6.5.1"',
  S3 = function (t) {
    return (
      Rf.mark("".concat(Us, " ").concat(t, " begins")),
      function () {
        return t1(t);
      }
    );
  },
  t1 = function (t) {
    Rf.mark("".concat(Us, " ").concat(t, " ends")),
      Rf.measure(
        "".concat(Us, " ").concat(t),
        "".concat(Us, " ").concat(t, " begins"),
        "".concat(Us, " ").concat(t, " ends")
      );
  },
  gp = { begin: S3, end: t1 },
  Ba = function () {};
function Eg(e) {
  var t = e.getAttribute ? e.getAttribute(ko) : null;
  return typeof t == "string";
}
function C3(e) {
  var t = e.getAttribute ? e.getAttribute(ap) : null,
    n = e.getAttribute ? e.getAttribute(lp) : null;
  return t && n;
}
function O3(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(ce.replacementClass)
  );
}
function k3() {
  if (ce.autoReplaceSvg === !0) return Va.replace;
  var e = Va[ce.autoReplaceSvg];
  return e || Va.replace;
}
function x3(e) {
  return We.createElementNS("http://www.w3.org/2000/svg", e);
}
function I3(e) {
  return We.createElement(e);
}
function n1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === "svg" ? x3 : I3) : n;
  if (typeof e == "string") return We.createTextNode(e);
  var o = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (i) {
    o.setAttribute(i, e.attributes[i]);
  });
  var s = e.children || [];
  return (
    s.forEach(function (i) {
      o.appendChild(n1(i, { ceFn: r }));
    }),
    o
  );
}
function A3(e) {
  var t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
var Va = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (o) {
          n.parentNode.insertBefore(n1(o), n);
        }),
        n.getAttribute(ko) === null && ce.keepOriginalSource)
      ) {
        var r = We.createComment(A3(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~up(n).indexOf(ce.replacementClass)) return Va.replace(t);
    var o = new RegExp("".concat(ce.cssPrefix, "-.*"));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var s = r[0].attributes.class.split(" ").reduce(
        function (a, l) {
          return (
            l === ce.replacementClass || l.match(o)
              ? a.toSvg.push(l)
              : a.toNode.push(l),
            a
          );
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = s.toSvg.join(" ")),
        s.toNode.length === 0
          ? n.removeAttribute("class")
          : n.setAttribute("class", s.toNode.join(" "));
    }
    var i = r.map(function (a) {
      return Vi(a);
    }).join(`
`);
    n.setAttribute(ko, ""), (n.innerHTML = i);
  },
};
function wg(e) {
  e();
}
function r1(e, t) {
  var n = typeof t == "function" ? t : Ba;
  if (e.length === 0) n();
  else {
    var r = wg;
    ce.mutateApproach === L5 && (r = Yr.requestAnimationFrame || wg),
      r(function () {
        var o = k3(),
          s = gp.begin("mutate");
        e.map(o), s(), n();
      });
  }
}
var _p = !1;
function o1() {
  _p = !0;
}
function Nf() {
  _p = !1;
}
var wl = null;
function Tg(e) {
  if (dg && ce.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? Ba : t,
      r = e.nodeCallback,
      o = r === void 0 ? Ba : r,
      s = e.pseudoElementsCallback,
      i = s === void 0 ? Ba : s,
      a = e.observeMutationsRoot,
      l = a === void 0 ? We : a;
    (wl = new dg(function (c) {
      if (!_p) {
        var u = Kr();
        Es(c).forEach(function (f) {
          if (
            (f.type === "childList" &&
              f.addedNodes.length > 0 &&
              !Eg(f.addedNodes[0]) &&
              (ce.searchPseudoElements && i(f.target), n(f.target)),
            f.type === "attributes" &&
              f.target.parentNode &&
              ce.searchPseudoElements &&
              i(f.target.parentNode),
            f.type === "attributes" &&
              Eg(f.target) &&
              ~U5.indexOf(f.attributeName))
          )
            if (f.attributeName === "class" && C3(f.target)) {
              var d = Sc(up(f.target)),
                m = d.prefix,
                g = d.iconName;
              f.target.setAttribute(ap, m || u),
                g && f.target.setAttribute(lp, g);
            } else O3(f.target) && o(f.target);
        });
      }
    })),
      dr &&
        wl.observe(l, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function P3() {
  wl && wl.disconnect();
}
function R3(e) {
  var t = e.getAttribute("style"),
    n = [];
  return (
    t &&
      (n = t.split(";").reduce(function (r, o) {
        var s = o.split(":"),
          i = s[0],
          a = s.slice(1);
        return i && a.length > 0 && (r[i] = a.join(":").trim()), r;
      }, {})),
    n
  );
}
function N3(e) {
  var t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "",
    o = Sc(up(e));
  return (
    o.prefix || (o.prefix = Kr()),
    t && n && ((o.prefix = t), (o.iconName = n)),
    (o.iconName && o.prefix) ||
      (o.prefix &&
        r.length > 0 &&
        (o.iconName =
          u3(o.prefix, e.innerText) || pp(o.prefix, Of(e.innerText))),
      !o.iconName &&
        ce.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (o.iconName = e.firstChild.data)),
    o
  );
}
function L3(e) {
  var t = Es(e.attributes).reduce(function (o, s) {
      return (
        o.name !== "class" && o.name !== "style" && (o[s.name] = s.value), o
      );
    }, {}),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    ce.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(ce.replacementClass, "-title-")
            .concat(r || Si()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function $3() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Rn,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Sg(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = N3(e),
    r = n.iconName,
    o = n.prefix,
    s = n.rest,
    i = L3(e),
    a = xf("parseNodeAttributes", {}, e),
    l = t.styleParser ? R3(e) : [];
  return ne(
    {
      iconName: r,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: o,
      transform: Rn,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: s, styles: l, attributes: i },
    },
    a
  );
}
var D3 = gn.styles;
function s1(e) {
  var t = ce.autoReplaceSvg === "nest" ? Sg(e, { styleParser: !1 }) : Sg(e);
  return ~t.extra.classes.indexOf(U0)
    ? ur("generateLayersText", e, t)
    : ur("generateSvgReplacementMutation", e, t);
}
var qr = new Set();
cp.map(function (e) {
  qr.add("fa-".concat(e));
});
Object.keys(bi[Ve]).map(qr.add.bind(qr));
Object.keys(bi[rt]).map(qr.add.bind(qr));
qr = zi(qr);
function Cg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!dr) return Promise.resolve();
  var n = We.documentElement.classList,
    r = function (f) {
      return n.add("".concat(pg, "-").concat(f));
    },
    o = function (f) {
      return n.remove("".concat(pg, "-").concat(f));
    },
    s = ce.autoFetchSvg
      ? qr
      : cp
          .map(function (u) {
            return "fa-".concat(u);
          })
          .concat(Object.keys(D3));
  s.includes("fa") || s.push("fa");
  var i = [".".concat(U0, ":not([").concat(ko, "])")]
    .concat(
      s.map(function (u) {
        return ".".concat(u, ":not([").concat(ko, "])");
      })
    )
    .join(", ");
  if (i.length === 0) return Promise.resolve();
  var a = [];
  try {
    a = Es(e.querySelectorAll(i));
  } catch {}
  if (a.length > 0) r("pending"), o("complete");
  else return Promise.resolve();
  var l = gp.begin("onTree"),
    c = a.reduce(function (u, f) {
      try {
        var d = s1(f);
        d && u.push(d);
      } catch (m) {
        j0 || (m.name === "MissingIcon" && console.error(m));
      }
      return u;
    }, []);
  return new Promise(function (u, f) {
    Promise.all(c)
      .then(function (d) {
        r1(d, function () {
          r("active"),
            r("complete"),
            o("pending"),
            typeof t == "function" && t(),
            l(),
            u();
        });
      })
      .catch(function (d) {
        l(), f(d);
      });
  });
}
function M3(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  s1(e).then(function (n) {
    n && r1([n], t);
  });
}
function F3(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : If(t || {}),
      o = n.mask;
    return (
      o && (o = (o || {}).icon ? o : If(o || {})),
      e(r, ne(ne({}, n), {}, { mask: o }))
    );
  };
}
var H3 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      o = r === void 0 ? Rn : r,
      s = n.symbol,
      i = s === void 0 ? !1 : s,
      a = n.mask,
      l = a === void 0 ? null : a,
      c = n.maskId,
      u = c === void 0 ? null : c,
      f = n.title,
      d = f === void 0 ? null : f,
      m = n.titleId,
      g = m === void 0 ? null : m,
      _ = n.classes,
      T = _ === void 0 ? [] : _,
      y = n.attributes,
      E = y === void 0 ? {} : y,
      v = n.styles,
      w = v === void 0 ? {} : v;
    if (t) {
      var C = t.prefix,
        I = t.iconName,
        S = t.icon;
      return Cc(ne({ type: "icon" }, t), function () {
        return (
          xo("beforeDOMElementCreation", { iconDefinition: t, params: n }),
          ce.autoA11y &&
            (d
              ? (E["aria-labelledby"] = ""
                  .concat(ce.replacementClass, "-title-")
                  .concat(g || Si()))
              : ((E["aria-hidden"] = "true"), (E.focusable = "false"))),
          hp({
            icons: {
              main: Af(S),
              mask: l
                ? Af(l.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: C,
            iconName: I,
            transform: ne(ne({}, Rn), o),
            symbol: i,
            title: d,
            maskId: u,
            titleId: g,
            extra: { attributes: E, styles: w, classes: T },
          })
        );
      });
    }
  },
  j3 = {
    mixout: function () {
      return { icon: F3(H3) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = Cg), (n.nodeCallback = M3), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          o = r === void 0 ? We : r,
          s = n.callback,
          i = s === void 0 ? function () {} : s;
        return Cg(o, i);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var o = r.iconName,
            s = r.title,
            i = r.titleId,
            a = r.prefix,
            l = r.transform,
            c = r.symbol,
            u = r.mask,
            f = r.maskId,
            d = r.extra;
          return new Promise(function (m, g) {
            Promise.all([
              Pf(o, a),
              u.iconName
                ? Pf(u.iconName, u.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (_) {
                var T = sp(_, 2),
                  y = T[0],
                  E = T[1];
                m([
                  n,
                  hp({
                    icons: { main: y, mask: E },
                    prefix: a,
                    iconName: o,
                    transform: l,
                    symbol: c,
                    maskId: f,
                    title: s,
                    titleId: i,
                    extra: d,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(g);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            o = n.attributes,
            s = n.main,
            i = n.transform,
            a = n.styles,
            l = wc(a);
          l.length > 0 && (o.style = l);
          var c;
          return (
            fp(i) &&
              (c = ur("generateAbstractTransformGrouping", {
                main: s,
                transform: i,
                containerWidth: s.width,
                iconWidth: s.width,
              })),
            r.push(c || s.icon),
            { children: r, attributes: o }
          );
        });
    },
  },
  U3 = {
    mixout: function () {
      return {
        layer: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            o = r.classes,
            s = o === void 0 ? [] : o;
          return Cc({ type: "layer" }, function () {
            xo("beforeDOMElementCreation", { assembler: n, params: r });
            var i = [];
            return (
              n(function (a) {
                Array.isArray(a)
                  ? a.map(function (l) {
                      i = i.concat(l.abstract);
                    })
                  : (i = i.concat(a.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(ce.cssPrefix, "-layers")]
                      .concat(zi(s))
                      .join(" "),
                  },
                  children: i,
                },
              ]
            );
          });
        },
      };
    },
  },
  z3 = {
    mixout: function () {
      return {
        counter: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            o = r.title,
            s = o === void 0 ? null : o,
            i = r.classes,
            a = i === void 0 ? [] : i,
            l = r.attributes,
            c = l === void 0 ? {} : l,
            u = r.styles,
            f = u === void 0 ? {} : u;
          return Cc({ type: "counter", content: n }, function () {
            return (
              xo("beforeDOMElementCreation", { content: n, params: r }),
              E3({
                content: n.toString(),
                title: s,
                extra: {
                  attributes: c,
                  styles: f,
                  classes: ["".concat(ce.cssPrefix, "-layers-counter")].concat(
                    zi(a)
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  B3 = {
    mixout: function () {
      return {
        text: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            o = r.transform,
            s = o === void 0 ? Rn : o,
            i = r.title,
            a = i === void 0 ? null : i,
            l = r.classes,
            c = l === void 0 ? [] : l,
            u = r.attributes,
            f = u === void 0 ? {} : u,
            d = r.styles,
            m = d === void 0 ? {} : d;
          return Cc({ type: "text", content: n }, function () {
            return (
              xo("beforeDOMElementCreation", { content: n, params: r }),
              yg({
                content: n,
                transform: ne(ne({}, Rn), s),
                title: a,
                extra: {
                  attributes: f,
                  styles: m,
                  classes: ["".concat(ce.cssPrefix, "-layers-text")].concat(
                    zi(c)
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var o = r.title,
          s = r.transform,
          i = r.extra,
          a = null,
          l = null;
        if (M0) {
          var c = parseInt(getComputedStyle(n).fontSize, 10),
            u = n.getBoundingClientRect();
          (a = u.width / c), (l = u.height / c);
        }
        return (
          ce.autoA11y && !o && (i.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            n,
            yg({
              content: n.innerHTML,
              width: a,
              height: l,
              transform: s,
              title: o,
              extra: i,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  V3 = new RegExp('"', "ug"),
  Og = [1105920, 1112319];
function W3(e) {
  var t = e.replace(V3, ""),
    n = o3(t, 0),
    r = n >= Og[0] && n <= Og[1],
    o = t.length === 2 ? t[0] === t[1] : !1;
  return { value: Of(o ? t[0] : t), isSecondary: r || o };
}
function kg(e, t) {
  var n = "".concat(N5).concat(t.replace(":", "-"));
  return new Promise(function (r, o) {
    if (e.getAttribute(n) !== null) return r();
    var s = Es(e.children),
      i = s.filter(function (S) {
        return S.getAttribute(Cf) === t;
      })[0],
      a = Yr.getComputedStyle(e, t),
      l = a.getPropertyValue("font-family").match(F5),
      c = a.getPropertyValue("font-weight"),
      u = a.getPropertyValue("content");
    if (i && !l) return e.removeChild(i), r();
    if (l && u !== "none" && u !== "") {
      var f = a.getPropertyValue("content"),
        d = ~["Sharp"].indexOf(l[2]) ? rt : Ve,
        m = ~[
          "Solid",
          "Regular",
          "Light",
          "Thin",
          "Duotone",
          "Brands",
          "Kit",
        ].indexOf(l[2])
          ? Ei[d][l[2].toLowerCase()]
          : H5[d][c],
        g = W3(f),
        _ = g.value,
        T = g.isSecondary,
        y = l[0].startsWith("FontAwesome"),
        E = pp(m, _),
        v = E;
      if (y) {
        var w = f3(_);
        w.iconName && w.prefix && ((E = w.iconName), (m = w.prefix));
      }
      if (
        E &&
        !T &&
        (!i || i.getAttribute(ap) !== m || i.getAttribute(lp) !== v)
      ) {
        e.setAttribute(n, v), i && e.removeChild(i);
        var C = $3(),
          I = C.extra;
        (I.attributes[Cf] = t),
          Pf(E, m)
            .then(function (S) {
              var M = hp(
                  ne(
                    ne({}, C),
                    {},
                    {
                      icons: { main: S, mask: mp() },
                      prefix: m,
                      iconName: v,
                      extra: I,
                      watchable: !0,
                    }
                  )
                ),
                F = We.createElementNS("http://www.w3.org/2000/svg", "svg");
              t === "::before"
                ? e.insertBefore(F, e.firstChild)
                : e.appendChild(F),
                (F.outerHTML = M.map(function (A) {
                  return Vi(A);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(o);
      } else r();
    } else r();
  });
}
function G3(e) {
  return Promise.all([kg(e, "::before"), kg(e, "::after")]);
}
function Y3(e) {
  return (
    e.parentNode !== document.head &&
    !~$5.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Cf) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function xg(e) {
  if (dr)
    return new Promise(function (t, n) {
      var r = Es(e.querySelectorAll("*")).filter(Y3).map(G3),
        o = gp.begin("searchPseudoElements");
      o1(),
        Promise.all(r)
          .then(function () {
            o(), Nf(), t();
          })
          .catch(function () {
            o(), Nf(), n();
          });
    });
}
var K3 = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = xg), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          o = r === void 0 ? We : r;
        ce.searchPseudoElements && xg(o);
      };
    },
  },
  Ig = !1,
  q3 = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            o1(), (Ig = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Tg(xf("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          P3();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          Ig
            ? Nf()
            : Tg(xf("mutationObserverCallbacks", { observeMutationsRoot: r }));
        },
      };
    },
  },
  Ag = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(" ")
      .reduce(function (r, o) {
        var s = o.toLowerCase().split("-"),
          i = s[0],
          a = s.slice(1).join("-");
        if (i && a === "h") return (r.flipX = !0), r;
        if (i && a === "v") return (r.flipY = !0), r;
        if (((a = parseFloat(a)), isNaN(a))) return r;
        switch (i) {
          case "grow":
            r.size = r.size + a;
            break;
          case "shrink":
            r.size = r.size - a;
            break;
          case "left":
            r.x = r.x - a;
            break;
          case "right":
            r.x = r.x + a;
            break;
          case "up":
            r.y = r.y - a;
            break;
          case "down":
            r.y = r.y + a;
            break;
          case "rotate":
            r.rotate = r.rotate + a;
            break;
        }
        return r;
      }, n);
  },
  X3 = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return Ag(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var o = r.getAttribute("data-fa-transform");
          return o && (n.transform = Ag(o)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          o = n.transform,
          s = n.containerWidth,
          i = n.iconWidth,
          a = { transform: "translate(".concat(s / 2, " 256)") },
          l = "translate(".concat(o.x * 32, ", ").concat(o.y * 32, ") "),
          c = "scale("
            .concat((o.size / 16) * (o.flipX ? -1 : 1), ", ")
            .concat((o.size / 16) * (o.flipY ? -1 : 1), ") "),
          u = "rotate(".concat(o.rotate, " 0 0)"),
          f = { transform: "".concat(l, " ").concat(c, " ").concat(u) },
          d = { transform: "translate(".concat((i / 2) * -1, " -256)") },
          m = { outer: a, inner: f, path: d };
        return {
          tag: "g",
          attributes: ne({}, m.outer),
          children: [
            {
              tag: "g",
              attributes: ne({}, m.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: ne(ne({}, r.icon.attributes), m.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  cu = { x: 0, y: 0, width: "100%", height: "100%" };
function Pg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function J3(e) {
  return e.tag === "g" ? e.children : [e];
}
var Q3 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var o = r.getAttribute("data-fa-mask"),
            s = o
              ? Sc(
                  o.split(" ").map(function (i) {
                    return i.trim();
                  })
                )
              : mp();
          return (
            s.prefix || (s.prefix = Kr()),
            (n.mask = s),
            (n.maskId = r.getAttribute("data-fa-mask-id")),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          o = n.attributes,
          s = n.main,
          i = n.mask,
          a = n.maskId,
          l = n.transform,
          c = s.width,
          u = s.icon,
          f = i.width,
          d = i.icon,
          m = X5({ transform: l, containerWidth: f, iconWidth: c }),
          g = {
            tag: "rect",
            attributes: ne(ne({}, cu), {}, { fill: "white" }),
          },
          _ = u.children ? { children: u.children.map(Pg) } : {},
          T = {
            tag: "g",
            attributes: ne({}, m.inner),
            children: [
              Pg(
                ne(
                  { tag: u.tag, attributes: ne(ne({}, u.attributes), m.path) },
                  _
                )
              ),
            ],
          },
          y = { tag: "g", attributes: ne({}, m.outer), children: [T] },
          E = "mask-".concat(a || Si()),
          v = "clip-".concat(a || Si()),
          w = {
            tag: "mask",
            attributes: ne(
              ne({}, cu),
              {},
              {
                id: E,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [g, y],
          },
          C = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: v }, children: J3(d) },
              w,
            ],
          };
        return (
          r.push(C, {
            tag: "rect",
            attributes: ne(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(v, ")"),
                mask: "url(#".concat(E, ")"),
              },
              cu
            ),
          }),
          { children: r, attributes: o }
        );
      };
    },
  },
  Z3 = {
    provides: function (t) {
      var n = !1;
      Yr.matchMedia &&
        (n = Yr.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (t.missingIconAbstract = function () {
          var r = [],
            o = { fill: "currentColor" },
            s = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          r.push({
            tag: "path",
            attributes: ne(
              ne({}, o),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          var i = ne(ne({}, s), {}, { attributeName: "opacity" }),
            a = {
              tag: "circle",
              attributes: ne(ne({}, o), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            n ||
              a.children.push(
                {
                  tag: "animate",
                  attributes: ne(
                    ne({}, s),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: ne(ne({}, i), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            r.push(a),
            r.push({
              tag: "path",
              attributes: ne(
                ne({}, o),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: n
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: ne(ne({}, i), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            n ||
              r.push({
                tag: "path",
                attributes: ne(
                  ne({}, o),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: ne(ne({}, i), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: r }
          );
        });
    },
  },
  e$ = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var o = r.getAttribute("data-fa-symbol"),
            s = o === null ? !1 : o === "" ? !0 : o;
          return (n.symbol = s), n;
        },
      };
    },
  },
  t$ = [Z5, j3, U3, z3, B3, K3, q3, X3, Q3, Z3, e$];
m3(t$, { mixoutsTo: en });
en.noAuto;
en.config;
var pr = en.library;
en.dom;
var zD = en.parse;
en.findIconDefinition;
en.toHtml;
var BD = en.icon;
en.layer;
en.text;
en.counter;
var n$ = {
    prefix: "fas",
    iconName: "flag",
    icon: [
      448,
      512,
      [127988, 61725],
      "f024",
      "M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z",
    ],
  },
  r$ = {
    prefix: "fas",
    iconName: "arrow-right",
    icon: [
      448,
      512,
      [8594],
      "f061",
      "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z",
    ],
  },
  o$ = {
    prefix: "fas",
    iconName: "heart",
    icon: [
      512,
      512,
      [
        128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829,
        10084, 61578,
      ],
      "f004",
      "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z",
    ],
  },
  s$ = {
    prefix: "fas",
    iconName: "arrow-left",
    icon: [
      448,
      512,
      [8592],
      "f060",
      "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",
    ],
  },
  i$ = {
    prefix: "fas",
    iconName: "gear",
    icon: [
      512,
      512,
      [9881, "cog"],
      "f013",
      "M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z",
    ],
  },
  a$ = {
    prefix: "fas",
    iconName: "magnifying-glass",
    icon: [
      512,
      512,
      [128269, "search"],
      "f002",
      "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z",
    ],
  },
  l$ = a$,
  c$ = {
    prefix: "fas",
    iconName: "xmark",
    icon: [
      384,
      512,
      [
        128473,
        10005,
        10006,
        10060,
        215,
        "close",
        "multiply",
        "remove",
        "times",
      ],
      "f00d",
      "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
    ],
  },
  u$ = {
    prefix: "fas",
    iconName: "paper-plane",
    icon: [
      512,
      512,
      [61913],
      "f1d8",
      "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z",
    ],
  },
  f$ = {
    prefix: "fas",
    iconName: "plane",
    icon: [
      576,
      512,
      [],
      "f072",
      "M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z",
    ],
  };
/*!
 * shared v9.8.0
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */ const Hn = typeof window < "u";
let Jt, Io;
{
  const e = Hn && window.performance;
  e &&
    e.mark &&
    e.measure &&
    e.clearMarks &&
    e.clearMeasures &&
    ((Jt = (t) => {
      e.mark(t);
    }),
    (Io = (t, n, r) => {
      e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
    }));
}
const d$ = /\{([0-9a-zA-Z]+)\}/g;
function vp(e, ...t) {
  return (
    t.length === 1 && xe(t[0]) && (t = t[0]),
    (!t || !t.hasOwnProperty) && (t = {}),
    e.replace(d$, (n, r) => (t.hasOwnProperty(r) ? t[r] : ""))
  );
}
const zn = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  p$ = (e, t, n) => m$({ l: e, k: t, s: n }),
  m$ = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029")
      .replace(/\u0027/g, "\\u0027"),
  yt = (e) => typeof e == "number" && isFinite(e),
  h$ = (e) => a1(e) === "[object Date]",
  Tl = (e) => a1(e) === "[object RegExp]",
  Oc = (e) => Ce(e) && Object.keys(e).length === 0,
  It = Object.assign;
let Rg;
const yo = () =>
  Rg ||
  (Rg =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Ng(e) {
  return e
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
const g$ = Object.prototype.hasOwnProperty;
function Ci(e, t) {
  return g$.call(e, t);
}
const ut = Array.isArray,
  qe = (e) => typeof e == "function",
  oe = (e) => typeof e == "string",
  Xe = (e) => typeof e == "boolean",
  xe = (e) => e !== null && typeof e == "object",
  _$ = (e) => xe(e) && qe(e.then) && qe(e.catch),
  i1 = Object.prototype.toString,
  a1 = (e) => i1.call(e),
  Ce = (e) => {
    if (!xe(e)) return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object;
  },
  v$ = (e) =>
    e == null
      ? ""
      : ut(e) || (Ce(e) && e.toString === i1)
      ? JSON.stringify(e, null, 2)
      : String(e);
function y$(e, t = "") {
  return e.reduce((n, r, o) => (o === 0 ? n + r : n + t + r), "");
}
const Lg = 2;
function b$(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let o = 0;
  const s = [];
  for (let i = 0; i < r.length; i++)
    if (((o += r[i].length + 1), o >= t)) {
      for (let a = i - Lg; a <= i + Lg || n > o; a++) {
        if (a < 0 || a >= r.length) continue;
        const l = a + 1;
        s.push(`${l}${" ".repeat(3 - String(l).length)}|  ${r[a]}`);
        const c = r[a].length;
        if (a === i) {
          const u = t - (o - c) + 1,
            f = Math.max(1, n > o ? c - u : n - t);
          s.push("   |  " + " ".repeat(u) + "^".repeat(f));
        } else if (a > i) {
          if (n > o) {
            const u = Math.max(Math.min(n - o, c), 1);
            s.push("   |  " + "^".repeat(u));
          }
          o += c + 1;
        }
      }
      break;
    }
  return s.join(`
`);
}
function yp(e) {
  let t = e;
  return () => ++t;
}
function Bn(e, t) {
  typeof console < "u" &&
    (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const $g = {};
function E$(e) {
  $g[e] || (($g[e] = !0), Bn(e));
}
function l1() {
  const e = new Map();
  return {
    events: e,
    on(n, r) {
      const o = e.get(n);
      (o && o.push(r)) || e.set(n, [r]);
    },
    off(n, r) {
      const o = e.get(n);
      o && o.splice(o.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((o) => o(r)),
        (e.get("*") || []).slice().map((o) => o(n, r));
    },
  };
}
const Sa = (e) => !xe(e) || ut(e);
function ei(e, t) {
  if (Sa(e) || Sa(t)) throw new Error("Invalid value");
  for (const n in e)
    Ci(e, n) && (Sa(e[n]) || Sa(t[n]) ? (t[n] = e[n]) : ei(e[n], t[n]));
}
/*!
 * message-compiler v9.8.0
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */ function w$(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Lf(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const T$ = /\{([0-9a-zA-Z]+)\}/g;
function S$(e, ...t) {
  return (
    t.length === 1 && C$(t[0]) && (t = t[0]),
    (!t || !t.hasOwnProperty) && (t = {}),
    e.replace(T$, (n, r) => (t.hasOwnProperty(r) ? t[r] : ""))
  );
}
const c1 = Object.assign,
  Dg = (e) => typeof e == "string",
  C$ = (e) => e !== null && typeof e == "object";
function u1(e, t = "") {
  return e.reduce((n, r, o) => (o === 0 ? n + r : n + t + r), "");
}
const me = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
    __EXTEND_POINT__: 17,
  },
  O$ = {
    [me.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [me.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:
      "Unterminated single quote in placeholder",
    [me.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [me.INVALID_UNICODE_ESCAPE_SEQUENCE]:
      "Invalid unicode escape sequence: {0}",
    [me.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [me.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [me.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [me.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [me.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [me.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [me.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [me.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [me.UNEXPECTED_LEXICAL_ANALYSIS]:
      "Unexpected lexical analysis in token: '{0}'",
    [me.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
    [me.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'",
  };
function ws(e, t, n = {}) {
  const { domain: r, messages: o, args: s } = n,
    i = S$((o || O$)[e] || "", ...(s || [])),
    a = new SyntaxError(String(i));
  return (a.code = e), t && (a.location = t), (a.domain = r), a;
}
function k$(e) {
  throw e;
}
const x$ = /<\/?[\w\s="/.':;#-\/]+>/,
  I$ = (e) => x$.test(e),
  Gn = " ",
  A$ = "\r",
  $t = `
`,
  P$ = String.fromCharCode(8232),
  R$ = String.fromCharCode(8233);
function N$(e) {
  const t = e;
  let n = 0,
    r = 1,
    o = 1,
    s = 0;
  const i = (S) => t[S] === A$ && t[S + 1] === $t,
    a = (S) => t[S] === $t,
    l = (S) => t[S] === R$,
    c = (S) => t[S] === P$,
    u = (S) => i(S) || a(S) || l(S) || c(S),
    f = () => n,
    d = () => r,
    m = () => o,
    g = () => s,
    _ = (S) => (i(S) || l(S) || c(S) ? $t : t[S]),
    T = () => _(n),
    y = () => _(n + s);
  function E() {
    return (s = 0), u(n) && (r++, (o = 0)), i(n) && n++, n++, o++, t[n];
  }
  function v() {
    return i(n + s) && s++, s++, t[n + s];
  }
  function w() {
    (n = 0), (r = 1), (o = 1), (s = 0);
  }
  function C(S = 0) {
    s = S;
  }
  function I() {
    const S = n + s;
    for (; S !== n; ) E();
    s = 0;
  }
  return {
    index: f,
    line: d,
    column: m,
    peekOffset: g,
    charAt: _,
    currentChar: T,
    currentPeek: y,
    next: E,
    peek: v,
    reset: w,
    resetPeek: C,
    skipToPeek: I,
  };
}
const Tr = void 0,
  L$ = ".",
  Mg = "'",
  $$ = "tokenizer";
function D$(e, t = {}) {
  const n = t.location !== !1,
    r = N$(e),
    o = () => r.index(),
    s = () => w$(r.line(), r.column(), r.index()),
    i = s(),
    a = o(),
    l = {
      currentType: 14,
      offset: a,
      startLoc: i,
      endLoc: i,
      lastType: 14,
      lastOffset: a,
      lastStartLoc: i,
      lastEndLoc: i,
      braceNest: 0,
      inLinked: !1,
      text: "",
    },
    c = () => l,
    { onError: u } = t;
  function f(p, h, b, ...O) {
    const x = c();
    if (((h.column += b), (h.offset += b), u)) {
      const $ = n ? Lf(x.startLoc, h) : null,
        G = ws(p, $, { domain: $$, args: O });
      u(G);
    }
  }
  function d(p, h, b) {
    (p.endLoc = s()), (p.currentType = h);
    const O = { type: h };
    return (
      n && (O.loc = Lf(p.startLoc, p.endLoc)), b != null && (O.value = b), O
    );
  }
  const m = (p) => d(p, 14);
  function g(p, h) {
    return p.currentChar() === h
      ? (p.next(), h)
      : (f(me.EXPECTED_TOKEN, s(), 0, h), "");
  }
  function _(p) {
    let h = "";
    for (; p.currentPeek() === Gn || p.currentPeek() === $t; )
      (h += p.currentPeek()), p.peek();
    return h;
  }
  function T(p) {
    const h = _(p);
    return p.skipToPeek(), h;
  }
  function y(p) {
    if (p === Tr) return !1;
    const h = p.charCodeAt(0);
    return (h >= 97 && h <= 122) || (h >= 65 && h <= 90) || h === 95;
  }
  function E(p) {
    if (p === Tr) return !1;
    const h = p.charCodeAt(0);
    return h >= 48 && h <= 57;
  }
  function v(p, h) {
    const { currentType: b } = h;
    if (b !== 2) return !1;
    _(p);
    const O = y(p.currentPeek());
    return p.resetPeek(), O;
  }
  function w(p, h) {
    const { currentType: b } = h;
    if (b !== 2) return !1;
    _(p);
    const O = p.currentPeek() === "-" ? p.peek() : p.currentPeek(),
      x = E(O);
    return p.resetPeek(), x;
  }
  function C(p, h) {
    const { currentType: b } = h;
    if (b !== 2) return !1;
    _(p);
    const O = p.currentPeek() === Mg;
    return p.resetPeek(), O;
  }
  function I(p, h) {
    const { currentType: b } = h;
    if (b !== 8) return !1;
    _(p);
    const O = p.currentPeek() === ".";
    return p.resetPeek(), O;
  }
  function S(p, h) {
    const { currentType: b } = h;
    if (b !== 9) return !1;
    _(p);
    const O = y(p.currentPeek());
    return p.resetPeek(), O;
  }
  function M(p, h) {
    const { currentType: b } = h;
    if (!(b === 8 || b === 12)) return !1;
    _(p);
    const O = p.currentPeek() === ":";
    return p.resetPeek(), O;
  }
  function F(p, h) {
    const { currentType: b } = h;
    if (b !== 10) return !1;
    const O = () => {
        const $ = p.currentPeek();
        return $ === "{"
          ? y(p.peek())
          : $ === "@" ||
            $ === "%" ||
            $ === "|" ||
            $ === ":" ||
            $ === "." ||
            $ === Gn ||
            !$
          ? !1
          : $ === $t
          ? (p.peek(), O())
          : y($);
      },
      x = O();
    return p.resetPeek(), x;
  }
  function A(p) {
    _(p);
    const h = p.currentPeek() === "|";
    return p.resetPeek(), h;
  }
  function D(p) {
    const h = _(p),
      b = p.currentPeek() === "%" && p.peek() === "{";
    return p.resetPeek(), { isModulo: b, hasSpace: h.length > 0 };
  }
  function L(p, h = !0) {
    const b = (x = !1, $ = "", G = !1) => {
        const z = p.currentPeek();
        return z === "{"
          ? $ === "%"
            ? !1
            : x
          : z === "@" || !z
          ? $ === "%"
            ? !0
            : x
          : z === "%"
          ? (p.peek(), b(x, "%", !0))
          : z === "|"
          ? $ === "%" || G
            ? !0
            : !($ === Gn || $ === $t)
          : z === Gn
          ? (p.peek(), b(!0, Gn, G))
          : z === $t
          ? (p.peek(), b(!0, $t, G))
          : !0;
      },
      O = b();
    return h && p.resetPeek(), O;
  }
  function Y(p, h) {
    const b = p.currentChar();
    return b === Tr ? Tr : h(b) ? (p.next(), b) : null;
  }
  function ve(p) {
    return Y(p, (b) => {
      const O = b.charCodeAt(0);
      return (
        (O >= 97 && O <= 122) ||
        (O >= 65 && O <= 90) ||
        (O >= 48 && O <= 57) ||
        O === 95 ||
        O === 36
      );
    });
  }
  function ye(p) {
    return Y(p, (b) => {
      const O = b.charCodeAt(0);
      return O >= 48 && O <= 57;
    });
  }
  function Z(p) {
    return Y(p, (b) => {
      const O = b.charCodeAt(0);
      return (
        (O >= 48 && O <= 57) || (O >= 65 && O <= 70) || (O >= 97 && O <= 102)
      );
    });
  }
  function W(p) {
    let h = "",
      b = "";
    for (; (h = ye(p)); ) b += h;
    return b;
  }
  function U(p) {
    T(p);
    const h = p.currentChar();
    return h !== "%" && f(me.EXPECTED_TOKEN, s(), 0, h), p.next(), "%";
  }
  function Ie(p) {
    let h = "";
    for (;;) {
      const b = p.currentChar();
      if (b === "{" || b === "}" || b === "@" || b === "|" || !b) break;
      if (b === "%")
        if (L(p)) (h += b), p.next();
        else break;
      else if (b === Gn || b === $t)
        if (L(p)) (h += b), p.next();
        else {
          if (A(p)) break;
          (h += b), p.next();
        }
      else (h += b), p.next();
    }
    return h;
  }
  function Ne(p) {
    T(p);
    let h = "",
      b = "";
    for (; (h = ve(p)); ) b += h;
    return (
      p.currentChar() === Tr && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0), b
    );
  }
  function ht(p) {
    T(p);
    let h = "";
    return (
      p.currentChar() === "-" ? (p.next(), (h += `-${W(p)}`)) : (h += W(p)),
      p.currentChar() === Tr && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0),
      h
    );
  }
  function Ke(p) {
    T(p), g(p, "'");
    let h = "",
      b = "";
    const O = ($) => $ !== Mg && $ !== $t;
    for (; (h = Y(p, O)); ) h === "\\" ? (b += gt(p)) : (b += h);
    const x = p.currentChar();
    return x === $t || x === Tr
      ? (f(me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0),
        x === $t && (p.next(), g(p, "'")),
        b)
      : (g(p, "'"), b);
  }
  function gt(p) {
    const h = p.currentChar();
    switch (h) {
      case "\\":
      case "'":
        return p.next(), `\\${h}`;
      case "u":
        return Rt(p, h, 4);
      case "U":
        return Rt(p, h, 6);
      default:
        return f(me.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, h), "";
    }
  }
  function Rt(p, h, b) {
    g(p, h);
    let O = "";
    for (let x = 0; x < b; x++) {
      const $ = Z(p);
      if (!$) {
        f(
          me.INVALID_UNICODE_ESCAPE_SEQUENCE,
          s(),
          0,
          `\\${h}${O}${p.currentChar()}`
        );
        break;
      }
      O += $;
    }
    return `\\${h}${O}`;
  }
  function mr(p) {
    T(p);
    let h = "",
      b = "";
    const O = (x) => x !== "{" && x !== "}" && x !== Gn && x !== $t;
    for (; (h = Y(p, O)); ) b += h;
    return b;
  }
  function fn(p) {
    let h = "",
      b = "";
    for (; (h = ve(p)); ) b += h;
    return b;
  }
  function P(p) {
    const h = (b = !1, O) => {
      const x = p.currentChar();
      return x === "{" ||
        x === "%" ||
        x === "@" ||
        x === "|" ||
        x === "(" ||
        x === ")" ||
        !x ||
        x === Gn
        ? O
        : x === $t || x === L$
        ? ((O += x), p.next(), h(b, O))
        : ((O += x), p.next(), h(!0, O));
    };
    return h(!1, "");
  }
  function X(p) {
    T(p);
    const h = g(p, "|");
    return T(p), h;
  }
  function J(p, h) {
    let b = null;
    switch (p.currentChar()) {
      case "{":
        return (
          h.braceNest >= 1 && f(me.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0),
          p.next(),
          (b = d(h, 2, "{")),
          T(p),
          h.braceNest++,
          b
        );
      case "}":
        return (
          h.braceNest > 0 &&
            h.currentType === 2 &&
            f(me.EMPTY_PLACEHOLDER, s(), 0),
          p.next(),
          (b = d(h, 3, "}")),
          h.braceNest--,
          h.braceNest > 0 && T(p),
          h.inLinked && h.braceNest === 0 && (h.inLinked = !1),
          b
        );
      case "@":
        return (
          h.braceNest > 0 && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0),
          (b = Q(p, h) || m(h)),
          (h.braceNest = 0),
          b
        );
      default:
        let x = !0,
          $ = !0,
          G = !0;
        if (A(p))
          return (
            h.braceNest > 0 && f(me.UNTERMINATED_CLOSING_BRACE, s(), 0),
            (b = d(h, 1, X(p))),
            (h.braceNest = 0),
            (h.inLinked = !1),
            b
          );
        if (
          h.braceNest > 0 &&
          (h.currentType === 5 || h.currentType === 6 || h.currentType === 7)
        )
          return (
            f(me.UNTERMINATED_CLOSING_BRACE, s(), 0),
            (h.braceNest = 0),
            Ee(p, h)
          );
        if ((x = v(p, h))) return (b = d(h, 5, Ne(p))), T(p), b;
        if (($ = w(p, h))) return (b = d(h, 6, ht(p))), T(p), b;
        if ((G = C(p, h))) return (b = d(h, 7, Ke(p))), T(p), b;
        if (!x && !$ && !G)
          return (
            (b = d(h, 13, mr(p))),
            f(me.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, b.value),
            T(p),
            b
          );
        break;
    }
    return b;
  }
  function Q(p, h) {
    const { currentType: b } = h;
    let O = null;
    const x = p.currentChar();
    switch (
      ((b === 8 || b === 9 || b === 12 || b === 10) &&
        (x === $t || x === Gn) &&
        f(me.INVALID_LINKED_FORMAT, s(), 0),
      x)
    ) {
      case "@":
        return p.next(), (O = d(h, 8, "@")), (h.inLinked = !0), O;
      case ".":
        return T(p), p.next(), d(h, 9, ".");
      case ":":
        return T(p), p.next(), d(h, 10, ":");
      default:
        return A(p)
          ? ((O = d(h, 1, X(p))), (h.braceNest = 0), (h.inLinked = !1), O)
          : I(p, h) || M(p, h)
          ? (T(p), Q(p, h))
          : S(p, h)
          ? (T(p), d(h, 12, fn(p)))
          : F(p, h)
          ? (T(p), x === "{" ? J(p, h) || O : d(h, 11, P(p)))
          : (b === 8 && f(me.INVALID_LINKED_FORMAT, s(), 0),
            (h.braceNest = 0),
            (h.inLinked = !1),
            Ee(p, h));
    }
  }
  function Ee(p, h) {
    let b = { type: 14 };
    if (h.braceNest > 0) return J(p, h) || m(h);
    if (h.inLinked) return Q(p, h) || m(h);
    switch (p.currentChar()) {
      case "{":
        return J(p, h) || m(h);
      case "}":
        return f(me.UNBALANCED_CLOSING_BRACE, s(), 0), p.next(), d(h, 3, "}");
      case "@":
        return Q(p, h) || m(h);
      default:
        if (A(p))
          return (b = d(h, 1, X(p))), (h.braceNest = 0), (h.inLinked = !1), b;
        const { isModulo: x, hasSpace: $ } = D(p);
        if (x) return $ ? d(h, 0, Ie(p)) : d(h, 4, U(p));
        if (L(p)) return d(h, 0, Ie(p));
        break;
    }
    return b;
  }
  function Fe() {
    const { currentType: p, offset: h, startLoc: b, endLoc: O } = l;
    return (
      (l.lastType = p),
      (l.lastOffset = h),
      (l.lastStartLoc = b),
      (l.lastEndLoc = O),
      (l.offset = o()),
      (l.startLoc = s()),
      r.currentChar() === Tr ? d(l, 14) : Ee(r, l)
    );
  }
  return { nextToken: Fe, currentOffset: o, currentPosition: s, context: c };
}
const M$ = "parser",
  F$ = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function H$(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function j$(e = {}) {
  const t = e.location !== !1,
    { onError: n } = e;
  function r(y, E, v, w, ...C) {
    const I = y.currentPosition();
    if (((I.offset += w), (I.column += w), n)) {
      const S = t ? Lf(v, I) : null,
        M = ws(E, S, { domain: M$, args: C });
      n(M);
    }
  }
  function o(y, E, v) {
    const w = { type: y };
    return t && ((w.start = E), (w.end = E), (w.loc = { start: v, end: v })), w;
  }
  function s(y, E, v, w) {
    w && (y.type = w), t && ((y.end = E), y.loc && (y.loc.end = v));
  }
  function i(y, E) {
    const v = y.context(),
      w = o(3, v.offset, v.startLoc);
    return (w.value = E), s(w, y.currentOffset(), y.currentPosition()), w;
  }
  function a(y, E) {
    const v = y.context(),
      { lastOffset: w, lastStartLoc: C } = v,
      I = o(5, w, C);
    return (
      (I.index = parseInt(E, 10)),
      y.nextToken(),
      s(I, y.currentOffset(), y.currentPosition()),
      I
    );
  }
  function l(y, E) {
    const v = y.context(),
      { lastOffset: w, lastStartLoc: C } = v,
      I = o(4, w, C);
    return (
      (I.key = E),
      y.nextToken(),
      s(I, y.currentOffset(), y.currentPosition()),
      I
    );
  }
  function c(y, E) {
    const v = y.context(),
      { lastOffset: w, lastStartLoc: C } = v,
      I = o(9, w, C);
    return (
      (I.value = E.replace(F$, H$)),
      y.nextToken(),
      s(I, y.currentOffset(), y.currentPosition()),
      I
    );
  }
  function u(y) {
    const E = y.nextToken(),
      v = y.context(),
      { lastOffset: w, lastStartLoc: C } = v,
      I = o(8, w, C);
    return E.type !== 12
      ? (r(y, me.UNEXPECTED_EMPTY_LINKED_MODIFIER, v.lastStartLoc, 0),
        (I.value = ""),
        s(I, w, C),
        { nextConsumeToken: E, node: I })
      : (E.value == null &&
          r(y, me.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, Tn(E)),
        (I.value = E.value || ""),
        s(I, y.currentOffset(), y.currentPosition()),
        { node: I });
  }
  function f(y, E) {
    const v = y.context(),
      w = o(7, v.offset, v.startLoc);
    return (w.value = E), s(w, y.currentOffset(), y.currentPosition()), w;
  }
  function d(y) {
    const E = y.context(),
      v = o(6, E.offset, E.startLoc);
    let w = y.nextToken();
    if (w.type === 9) {
      const C = u(y);
      (v.modifier = C.node), (w = C.nextConsumeToken || y.nextToken());
    }
    switch (
      (w.type !== 10 &&
        r(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Tn(w)),
      (w = y.nextToken()),
      w.type === 2 && (w = y.nextToken()),
      w.type)
    ) {
      case 11:
        w.value == null &&
          r(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Tn(w)),
          (v.key = f(y, w.value || ""));
        break;
      case 5:
        w.value == null &&
          r(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Tn(w)),
          (v.key = l(y, w.value || ""));
        break;
      case 6:
        w.value == null &&
          r(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Tn(w)),
          (v.key = a(y, w.value || ""));
        break;
      case 7:
        w.value == null &&
          r(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Tn(w)),
          (v.key = c(y, w.value || ""));
        break;
      default:
        r(y, me.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
        const C = y.context(),
          I = o(7, C.offset, C.startLoc);
        return (
          (I.value = ""),
          s(I, C.offset, C.startLoc),
          (v.key = I),
          s(v, C.offset, C.startLoc),
          { nextConsumeToken: w, node: v }
        );
    }
    return s(v, y.currentOffset(), y.currentPosition()), { node: v };
  }
  function m(y) {
    const E = y.context(),
      v = E.currentType === 1 ? y.currentOffset() : E.offset,
      w = E.currentType === 1 ? E.endLoc : E.startLoc,
      C = o(2, v, w);
    C.items = [];
    let I = null;
    do {
      const F = I || y.nextToken();
      switch (((I = null), F.type)) {
        case 0:
          F.value == null &&
            r(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Tn(F)),
            C.items.push(i(y, F.value || ""));
          break;
        case 6:
          F.value == null &&
            r(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Tn(F)),
            C.items.push(a(y, F.value || ""));
          break;
        case 5:
          F.value == null &&
            r(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Tn(F)),
            C.items.push(l(y, F.value || ""));
          break;
        case 7:
          F.value == null &&
            r(y, me.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Tn(F)),
            C.items.push(c(y, F.value || ""));
          break;
        case 8:
          const A = d(y);
          C.items.push(A.node), (I = A.nextConsumeToken || null);
          break;
      }
    } while (E.currentType !== 14 && E.currentType !== 1);
    const S = E.currentType === 1 ? E.lastOffset : y.currentOffset(),
      M = E.currentType === 1 ? E.lastEndLoc : y.currentPosition();
    return s(C, S, M), C;
  }
  function g(y, E, v, w) {
    const C = y.context();
    let I = w.items.length === 0;
    const S = o(1, E, v);
    (S.cases = []), S.cases.push(w);
    do {
      const M = m(y);
      I || (I = M.items.length === 0), S.cases.push(M);
    } while (C.currentType !== 14);
    return (
      I && r(y, me.MUST_HAVE_MESSAGES_IN_PLURAL, v, 0),
      s(S, y.currentOffset(), y.currentPosition()),
      S
    );
  }
  function _(y) {
    const E = y.context(),
      { offset: v, startLoc: w } = E,
      C = m(y);
    return E.currentType === 14 ? C : g(y, v, w, C);
  }
  function T(y) {
    const E = D$(y, c1({}, e)),
      v = E.context(),
      w = o(0, v.offset, v.startLoc);
    return (
      t && w.loc && (w.loc.source = y),
      (w.body = _(E)),
      e.onCacheKey && (w.cacheKey = e.onCacheKey(y)),
      v.currentType !== 14 &&
        r(
          E,
          me.UNEXPECTED_LEXICAL_ANALYSIS,
          v.lastStartLoc,
          0,
          y[v.offset] || ""
        ),
      s(w, E.currentOffset(), E.currentPosition()),
      w
    );
  }
  return { parse: T };
}
function Tn(e) {
  if (e.type === 14) return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function U$(e, t = {}) {
  const n = { ast: e, helpers: new Set() };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function Fg(e, t) {
  for (let n = 0; n < e.length; n++) bp(e[n], t);
}
function bp(e, t) {
  switch (e.type) {
    case 1:
      Fg(e.cases, t), t.helper("plural");
      break;
    case 2:
      Fg(e.items, t);
      break;
    case 6:
      bp(e.key, t), t.helper("linked"), t.helper("type");
      break;
    case 5:
      t.helper("interpolate"), t.helper("list");
      break;
    case 4:
      t.helper("interpolate"), t.helper("named");
      break;
  }
}
function z$(e, t = {}) {
  const n = U$(e);
  n.helper("normalize"), e.body && bp(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function B$(e) {
  const t = e.body;
  return t.type === 2 ? Hg(t) : t.cases.forEach((n) => Hg(n)), e;
}
function Hg(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && ((e.static = t.value), delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null) break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = u1(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const V$ = "minifier";
function Vo(e) {
  switch (((e.t = e.type), e.type)) {
    case 0:
      const t = e;
      Vo(t.body), (t.b = t.body), delete t.body;
      break;
    case 1:
      const n = e,
        r = n.cases;
      for (let u = 0; u < r.length; u++) Vo(r[u]);
      (n.c = r), delete n.cases;
      break;
    case 2:
      const o = e,
        s = o.items;
      for (let u = 0; u < s.length; u++) Vo(s[u]);
      (o.i = s),
        delete o.items,
        o.static && ((o.s = o.static), delete o.static);
      break;
    case 3:
    case 9:
    case 8:
    case 7:
      const i = e;
      i.value && ((i.v = i.value), delete i.value);
      break;
    case 6:
      const a = e;
      Vo(a.key),
        (a.k = a.key),
        delete a.key,
        a.modifier && (Vo(a.modifier), (a.m = a.modifier), delete a.modifier);
      break;
    case 5:
      const l = e;
      (l.i = l.index), delete l.index;
      break;
    case 4:
      const c = e;
      (c.k = c.key), delete c.key;
      break;
    default:
      throw ws(me.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: V$,
        args: [e.type],
      });
  }
  delete e.type;
}
const W$ = "parser";
function G$(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: o, needIndent: s } = t,
    i = t.location !== !1,
    a = {
      filename: r,
      code: "",
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: o,
      needIndent: s,
      indentLevel: 0,
    };
  i && e.loc && (a.source = e.loc.source);
  const l = () => a;
  function c(T, y) {
    a.code += T;
  }
  function u(T, y = !0) {
    const E = y ? o : "";
    c(s ? E + "  ".repeat(T) : E);
  }
  function f(T = !0) {
    const y = ++a.indentLevel;
    T && u(y);
  }
  function d(T = !0) {
    const y = --a.indentLevel;
    T && u(y);
  }
  function m() {
    u(a.indentLevel);
  }
  return {
    context: l,
    push: c,
    indent: f,
    deindent: d,
    newline: m,
    helper: (T) => `_${T}`,
    needIndent: () => a.needIndent,
  };
}
function Y$(e, t) {
  const { helper: n } = e;
  e.push(`${n("linked")}(`),
    ps(e, t.key),
    t.modifier
      ? (e.push(", "), ps(e, t.modifier), e.push(", _type"))
      : e.push(", undefined, _type"),
    e.push(")");
}
function K$(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n("normalize")}([`), e.indent(r());
  const o = t.items.length;
  for (let s = 0; s < o && (ps(e, t.items[s]), s !== o - 1); s++) e.push(", ");
  e.deindent(r()), e.push("])");
}
function q$(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`), e.indent(r());
    const o = t.cases.length;
    for (let s = 0; s < o && (ps(e, t.cases[s]), s !== o - 1); s++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function X$(e, t) {
  t.body ? ps(e, t.body) : e.push("null");
}
function ps(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      X$(e, t);
      break;
    case 1:
      q$(e, t);
      break;
    case 2:
      K$(e, t);
      break;
    case 6:
      Y$(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      throw ws(me.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: W$,
        args: [t.type],
      });
  }
}
const J$ = (e, t = {}) => {
  const n = Dg(t.mode) ? t.mode : "normal",
    r = Dg(t.filename) ? t.filename : "message.intl",
    o = !!t.sourceMap,
    s =
      t.breakLineCode != null
        ? t.breakLineCode
        : n === "arrow"
        ? ";"
        : `
`,
    i = t.needIndent ? t.needIndent : n !== "arrow",
    a = e.helpers || [],
    l = G$(e, {
      mode: n,
      filename: r,
      sourceMap: o,
      breakLineCode: s,
      needIndent: i,
    });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    l.indent(i),
    a.length > 0 &&
      (l.push(
        `const { ${u1(
          a.map((f) => `${f}: _${f}`),
          ", "
        )} } = ctx`
      ),
      l.newline()),
    l.push("return "),
    ps(l, e),
    l.deindent(i),
    l.push("}"),
    delete e.helpers;
  const { code: c, map: u } = l.context();
  return { ast: e, code: c, map: u ? u.toJSON() : void 0 };
};
function Q$(e, t = {}) {
  const n = c1({}, t),
    r = !!n.jit,
    o = !!n.minify,
    s = n.optimize == null ? !0 : n.optimize,
    a = j$(n).parse(e);
  return r
    ? (s && B$(a), o && Vo(a), { ast: a, code: "" })
    : (z$(a, n), J$(a, n));
}
/*!
 * core-base v9.8.0
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */ function Z$() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" &&
    (yo().__INTLIFY_PROD_DEVTOOLS__ = !1),
    typeof __INTLIFY_JIT_COMPILATION__ != "boolean" &&
      (yo().__INTLIFY_JIT_COMPILATION__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" &&
      (yo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Zr = [];
Zr[0] = { w: [0], i: [3, 0], "[": [4], o: [7] };
Zr[1] = { w: [1], ".": [2], "[": [4], o: [7] };
Zr[2] = { w: [2], i: [3, 0], 0: [3, 0] };
Zr[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1],
};
Zr[4] = { "'": [5, 0], '"': [6, 0], "[": [4, 2], "]": [1, 3], o: 8, l: [4, 0] };
Zr[5] = { "'": [4, 0], o: 8, l: [5, 0] };
Zr[6] = { '"': [4, 0], o: 8, l: [6, 0] };
const e6 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function t6(e) {
  return e6.test(e);
}
function n6(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function r6(e) {
  if (e == null) return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function o6(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e))
    ? !1
    : t6(t)
    ? n6(t)
    : "*" + t;
}
function s6(e) {
  const t = [];
  let n = -1,
    r = 0,
    o = 0,
    s,
    i,
    a,
    l,
    c,
    u,
    f;
  const d = [];
  (d[0] = () => {
    i === void 0 ? (i = a) : (i += a);
  }),
    (d[1] = () => {
      i !== void 0 && (t.push(i), (i = void 0));
    }),
    (d[2] = () => {
      d[0](), o++;
    }),
    (d[3] = () => {
      if (o > 0) o--, (r = 4), d[0]();
      else {
        if (((o = 0), i === void 0 || ((i = o6(i)), i === !1))) return !1;
        d[1]();
      }
    });
  function m() {
    const g = e[n + 1];
    if ((r === 5 && g === "'") || (r === 6 && g === '"'))
      return n++, (a = "\\" + g), d[0](), !0;
  }
  for (; r !== null; )
    if ((n++, (s = e[n]), !(s === "\\" && m()))) {
      if (
        ((l = r6(s)),
        (f = Zr[r]),
        (c = f[l] || f.l || 8),
        c === 8 ||
          ((r = c[0]),
          c[1] !== void 0 && ((u = d[c[1]]), u && ((a = s), u() === !1))))
      )
        return;
      if (r === 7) return t;
    }
}
const jg = new Map();
function i6(e, t) {
  return xe(e) ? e[t] : null;
}
function a6(e, t) {
  if (!xe(e)) return null;
  let n = jg.get(t);
  if ((n || ((n = s6(t)), n && jg.set(t, n)), !n)) return null;
  const r = n.length;
  let o = e,
    s = 0;
  for (; s < r; ) {
    const i = o[n[s]];
    if (i === void 0 || qe(o)) return null;
    (o = i), s++;
  }
  return o;
}
const l6 = (e) => e,
  c6 = (e) => "",
  u6 = "text",
  f6 = (e) => (e.length === 0 ? "" : y$(e)),
  d6 = v$;
function Ug(e, t) {
  return (
    (e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function p6(e) {
  const t = yt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (yt(e.named.count) || yt(e.named.n))
    ? yt(e.named.count)
      ? e.named.count
      : yt(e.named.n)
      ? e.named.n
      : t
    : t;
}
function m6(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function h6(e = {}) {
  const t = e.locale,
    n = p6(e),
    r =
      xe(e.pluralRules) && oe(t) && qe(e.pluralRules[t])
        ? e.pluralRules[t]
        : Ug,
    o = xe(e.pluralRules) && oe(t) && qe(e.pluralRules[t]) ? Ug : void 0,
    s = (y) => y[r(n, y.length, o)],
    i = e.list || [],
    a = (y) => i[y],
    l = e.named || {};
  yt(e.pluralIndex) && m6(n, l);
  const c = (y) => l[y];
  function u(y) {
    const E = qe(e.messages)
      ? e.messages(y)
      : xe(e.messages)
      ? e.messages[y]
      : !1;
    return E || (e.parent ? e.parent.message(y) : c6);
  }
  const f = (y) => (e.modifiers ? e.modifiers[y] : l6),
    d =
      Ce(e.processor) && qe(e.processor.normalize) ? e.processor.normalize : f6,
    m =
      Ce(e.processor) && qe(e.processor.interpolate)
        ? e.processor.interpolate
        : d6,
    g = Ce(e.processor) && oe(e.processor.type) ? e.processor.type : u6,
    T = {
      list: a,
      named: c,
      plural: s,
      linked: (y, ...E) => {
        const [v, w] = E;
        let C = "text",
          I = "";
        E.length === 1
          ? xe(v)
            ? ((I = v.modifier || I), (C = v.type || C))
            : oe(v) && (I = v || I)
          : E.length === 2 && (oe(v) && (I = v || I), oe(w) && (C = w || C));
        const S = u(y)(T),
          M = C === "vnode" && ut(S) && I ? S[0] : S;
        return I ? f(I)(M, C) : M;
      },
      message: u,
      type: g,
      interpolate: m,
      normalize: d,
      values: It({}, i, l),
    };
  return T;
}
let Oi = null;
function g6(e) {
  Oi = e;
}
function _6(e, t, n) {
  Oi &&
    Oi.emit("i18n:init", {
      timestamp: Date.now(),
      i18n: e,
      version: t,
      meta: n,
    });
}
const v6 = y6("function:translate");
function y6(e) {
  return (t) => Oi && Oi.emit(e, t);
}
const Dt = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
    __EXTEND_POINT__: 8,
  },
  b6 = {
    [Dt.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
    [Dt.FALLBACK_TO_TRANSLATE]:
      "Fall back to translate '{key}' key with '{target}' locale.",
    [Dt.CANNOT_FORMAT_NUMBER]:
      "Cannot format a number value due to not supported Intl.NumberFormat.",
    [Dt.FALLBACK_TO_NUMBER_FORMAT]:
      "Fall back to number format '{key}' key with '{target}' locale.",
    [Dt.CANNOT_FORMAT_DATE]:
      "Cannot format a date value due to not supported Intl.DateTimeFormat.",
    [Dt.FALLBACK_TO_DATE_FORMAT]:
      "Fall back to datetime format '{key}' key with '{target}' locale.",
    [Dt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]:
      "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future.",
  };
function Ao(e, ...t) {
  return vp(b6[e], ...t);
}
const f1 = me.__EXTEND_POINT__,
  ro = yp(f1),
  Et = {
    INVALID_ARGUMENT: f1,
    INVALID_DATE_ARGUMENT: ro(),
    INVALID_ISO_DATE_ARGUMENT: ro(),
    NOT_SUPPORT_NON_STRING_MESSAGE: ro(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: ro(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: ro(),
    NOT_SUPPORT_LOCALE_TYPE: ro(),
    __EXTEND_POINT__: ro(),
  };
function er(e) {
  return ws(e, null, { messages: E6 });
}
const E6 = {
  [Et.INVALID_ARGUMENT]: "Invalid arguments",
  [Et.INVALID_DATE_ARGUMENT]:
    "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Et.INVALID_ISO_DATE_ARGUMENT]:
    "The argument provided is not a valid ISO date string",
  [Et.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Et.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Et.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Et.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type",
};
function Ep(e, t) {
  return t.locale != null ? zg(t.locale) : zg(e.locale);
}
let uu;
function zg(e) {
  if (oe(e)) return e;
  if (qe(e)) {
    if (e.resolvedOnce && uu != null) return uu;
    if (e.constructor.name === "Function") {
      const t = e();
      if (_$(t)) throw er(Et.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return (uu = t);
    } else throw er(Et.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else throw er(Et.NOT_SUPPORT_LOCALE_TYPE);
}
function w6(e, t, n) {
  return [
    ...new Set([
      n,
      ...(ut(t) ? t : xe(t) ? Object.keys(t) : oe(t) ? [t] : [n]),
    ]),
  ];
}
function d1(e, t, n) {
  const r = oe(n) ? n : Sl,
    o = e;
  o.__localeChainCache || (o.__localeChainCache = new Map());
  let s = o.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let i = [n];
    for (; ut(i); ) i = Bg(s, i, t);
    const a = ut(t) || !Ce(t) ? t : t.default ? t.default : null;
    (i = oe(a) ? [a] : a),
      ut(i) && Bg(s, i, !1),
      o.__localeChainCache.set(r, s);
  }
  return s;
}
function Bg(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && Xe(r); o++) {
    const s = t[o];
    oe(s) && (r = T6(e, t[o], n));
  }
  return r;
}
function T6(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const s = o.join("-");
    (r = S6(e, s, n)), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function S6(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (ut(n) || Ce(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const C6 = "9.8.0",
  kc = -1,
  Sl = "en-US",
  Cl = "",
  Vg = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function O6() {
  return {
    upper: (e, t) =>
      t === "text" && oe(e)
        ? e.toUpperCase()
        : t === "vnode" && xe(e) && "__v_isVNode" in e
        ? e.children.toUpperCase()
        : e,
    lower: (e, t) =>
      t === "text" && oe(e)
        ? e.toLowerCase()
        : t === "vnode" && xe(e) && "__v_isVNode" in e
        ? e.children.toLowerCase()
        : e,
    capitalize: (e, t) =>
      t === "text" && oe(e)
        ? Vg(e)
        : t === "vnode" && xe(e) && "__v_isVNode" in e
        ? Vg(e.children)
        : e,
  };
}
let p1;
function k6(e) {
  p1 = e;
}
let m1;
function x6(e) {
  m1 = e;
}
let h1;
function I6(e) {
  h1 = e;
}
let g1 = null;
const A6 = (e) => {
    g1 = e;
  },
  P6 = () => g1;
let _1 = null;
const Wg = (e) => {
    _1 = e;
  },
  R6 = () => _1;
let Gg = 0;
function N6(e = {}) {
  const t = qe(e.onWarn) ? e.onWarn : Bn,
    n = oe(e.version) ? e.version : C6,
    r = oe(e.locale) || qe(e.locale) ? e.locale : Sl,
    o = qe(r) ? Sl : r,
    s =
      ut(e.fallbackLocale) ||
      Ce(e.fallbackLocale) ||
      oe(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : o,
    i = Ce(e.messages) ? e.messages : { [o]: {} },
    a = Ce(e.datetimeFormats) ? e.datetimeFormats : { [o]: {} },
    l = Ce(e.numberFormats) ? e.numberFormats : { [o]: {} },
    c = It({}, e.modifiers || {}, O6()),
    u = e.pluralRules || {},
    f = qe(e.missing) ? e.missing : null,
    d = Xe(e.missingWarn) || Tl(e.missingWarn) ? e.missingWarn : !0,
    m = Xe(e.fallbackWarn) || Tl(e.fallbackWarn) ? e.fallbackWarn : !0,
    g = !!e.fallbackFormat,
    _ = !!e.unresolving,
    T = qe(e.postTranslation) ? e.postTranslation : null,
    y = Ce(e.processor) ? e.processor : null,
    E = Xe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    v = !!e.escapeParameter,
    w = qe(e.messageCompiler) ? e.messageCompiler : p1;
  qe(e.messageCompiler) && E$(Ao(Dt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const C = qe(e.messageResolver) ? e.messageResolver : m1 || i6,
    I = qe(e.localeFallbacker) ? e.localeFallbacker : h1 || w6,
    S = xe(e.fallbackContext) ? e.fallbackContext : void 0,
    M = e,
    F = xe(M.__datetimeFormatters) ? M.__datetimeFormatters : new Map(),
    A = xe(M.__numberFormatters) ? M.__numberFormatters : new Map(),
    D = xe(M.__meta) ? M.__meta : {};
  Gg++;
  const L = {
    version: n,
    cid: Gg,
    locale: r,
    fallbackLocale: s,
    messages: i,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: d,
    fallbackWarn: m,
    fallbackFormat: g,
    unresolving: _,
    postTranslation: T,
    processor: y,
    warnHtmlMessage: E,
    escapeParameter: v,
    messageCompiler: w,
    messageResolver: C,
    localeFallbacker: I,
    fallbackContext: S,
    onWarn: t,
    __meta: D,
  };
  return (
    (L.datetimeFormats = a),
    (L.numberFormats = l),
    (L.__datetimeFormatters = F),
    (L.__numberFormatters = A),
    (L.__v_emitter = M.__v_emitter != null ? M.__v_emitter : void 0),
    _6(L, n, D),
    L
  );
}
function xc(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function v1(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function wp(e, t, n, r, o) {
  const { missing: s, onWarn: i } = e;
  {
    const a = e.__v_emitter;
    a &&
      a.emit("missing", { locale: n, key: t, type: o, groupId: `${o}:${t}` });
  }
  if (s !== null) {
    const a = s(e, n, t, o);
    return oe(a) ? a : t;
  } else return v1(r, t) && i(Ao(Dt.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Ns(e, t, n) {
  const r = e;
  (r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
}
function fu(e) {
  return (n) => L6(n, e);
}
function L6(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n,
      o = r.c || r.cases;
    return e.plural(o.reduce((s, i) => [...s, Yg(e, i)], []));
  } else return Yg(e, n);
}
function Yg(e, t) {
  const n = t.s || t.static;
  if (n) return e.type === "text" ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((o, s) => [...o, $f(e, s)], []);
    return e.normalize(r);
  }
}
function $f(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3:
      const r = t;
      return r.v || r.value;
    case 9:
      const o = t;
      return o.v || o.value;
    case 4:
      const s = t;
      return e.interpolate(e.named(s.k || s.key));
    case 5:
      const i = t;
      return e.interpolate(e.list(i.i != null ? i.i : i.index));
    case 6:
      const a = t,
        l = a.m || a.modifier;
      return e.linked($f(e, a.k || a.key), l ? $f(e, l) : void 0, e.type);
    case 7:
      const c = t;
      return c.v || c.value;
    case 8:
      const u = t;
      return u.v || u.value;
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const $6 =
  "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function D6(e, t) {
  t && I$(e) && Bn(vp($6, { source: e }));
}
const M6 = (e) => e;
let Ca = Object.create(null);
const Xr = (e) =>
  xe(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function F6(e, t = {}) {
  let n = !1;
  const r = t.onError || k$;
  return (
    (t.onError = (o) => {
      (n = !0), r(o);
    }),
    { ...Q$(e, t), detectError: n }
  );
}
function H6(e, t) {
  if (
    __INTLIFY_JIT_COMPILATION__ &&
    !__INTLIFY_DROP_MESSAGE_COMPILER__ &&
    oe(e)
  ) {
    const n = Xe(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    D6(e, n);
    const o = (t.onCacheKey || M6)(e),
      s = Ca[o];
    if (s) return s;
    const { ast: i, detectError: a } = F6(e, { ...t, location: !0, jit: !0 }),
      l = fu(i);
    return a ? l : (Ca[o] = l);
  } else {
    if (!Xr(e))
      return (
        Bn(
          `the message that is resolve with key '${t.key}' is not supported for jit compilation`
        ),
        () => e
      );
    const n = e.cacheKey;
    if (n) {
      const r = Ca[n];
      return r || (Ca[n] = fu(e));
    } else return fu(e);
  }
}
const Kg = () => "",
  sn = (e) => qe(e);
function qg(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: r,
      unresolving: o,
      messageCompiler: s,
      fallbackLocale: i,
      messages: a,
    } = e,
    [l, c] = Df(...t),
    u = Xe(c.missingWarn) ? c.missingWarn : e.missingWarn,
    f = Xe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn,
    d = Xe(c.escapeParameter) ? c.escapeParameter : e.escapeParameter,
    m = !!c.resolvedMessage,
    g =
      oe(c.default) || Xe(c.default)
        ? Xe(c.default)
          ? s
            ? l
            : () => l
          : c.default
        : n
        ? s
          ? l
          : () => l
        : "",
    _ = n || g !== "",
    T = Ep(e, c);
  d && j6(c);
  let [y, E, v] = m ? [l, T, a[T] || {}] : y1(e, l, T, i, f, u),
    w = y,
    C = l;
  if (
    (!m && !(oe(w) || Xr(w) || sn(w)) && _ && ((w = g), (C = w)),
    !m && (!(oe(w) || Xr(w) || sn(w)) || !oe(E)))
  )
    return o ? kc : l;
  if (oe(w) && e.messageCompiler == null)
    return (
      Bn(
        `The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`
      ),
      l
    );
  let I = !1;
  const S = () => {
      I = !0;
    },
    M = sn(w) ? w : b1(e, l, E, w, C, S);
  if (I) return w;
  const F = V6(e, E, v, c),
    A = h6(F),
    D = U6(e, M, A),
    L = r ? r(D, l) : D;
  {
    const Y = {
      timestamp: Date.now(),
      key: oe(l) ? l : sn(w) ? w.key : "",
      locale: E || (sn(w) ? w.locale : ""),
      format: oe(w) ? w : sn(w) ? w.source : "",
      message: L,
    };
    (Y.meta = It({}, e.__meta, P6() || {})), v6(Y);
  }
  return L;
}
function j6(e) {
  ut(e.list)
    ? (e.list = e.list.map((t) => (oe(t) ? Ng(t) : t)))
    : xe(e.named) &&
      Object.keys(e.named).forEach((t) => {
        oe(e.named[t]) && (e.named[t] = Ng(e.named[t]));
      });
}
function y1(e, t, n, r, o, s) {
  const { messages: i, onWarn: a, messageResolver: l, localeFallbacker: c } = e,
    u = c(e, r, n);
  let f = {},
    d,
    m = null,
    g = n,
    _ = null;
  const T = "translate";
  for (let y = 0; y < u.length; y++) {
    if (
      ((d = _ = u[y]),
      n !== d &&
        xc(o, t) &&
        a(Ao(Dt.FALLBACK_TO_TRANSLATE, { key: t, target: d })),
      n !== d)
    ) {
      const I = e.__v_emitter;
      I &&
        I.emit("fallback", {
          type: T,
          key: t,
          from: g,
          to: _,
          groupId: `${T}:${t}`,
        });
    }
    f = i[d] || {};
    let E = null,
      v,
      w;
    if (
      (Hn &&
        ((E = window.performance.now()),
        (v = "intlify-message-resolve-start"),
        (w = "intlify-message-resolve-end"),
        Jt && Jt(v)),
      (m = l(f, t)) === null && (m = f[t]),
      Hn)
    ) {
      const I = window.performance.now(),
        S = e.__v_emitter;
      S &&
        E &&
        m &&
        S.emit("message-resolve", {
          type: "message-resolve",
          key: t,
          message: m,
          time: I - E,
          groupId: `${T}:${t}`,
        }),
        v && w && Jt && Io && (Jt(w), Io("intlify message resolve", v, w));
    }
    if (oe(m) || Xr(m) || sn(m)) break;
    const C = wp(e, t, d, s, T);
    C !== t && (m = C), (g = _);
  }
  return [m, d, f];
}
function b1(e, t, n, r, o, s) {
  const { messageCompiler: i, warnHtmlMessage: a } = e;
  if (sn(r)) {
    const d = r;
    return (d.locale = d.locale || n), (d.key = d.key || t), d;
  }
  if (i == null) {
    const d = () => r;
    return (d.locale = n), (d.key = t), d;
  }
  let l = null,
    c,
    u;
  Hn &&
    ((l = window.performance.now()),
    (c = "intlify-message-compilation-start"),
    (u = "intlify-message-compilation-end"),
    Jt && Jt(c));
  const f = i(r, z6(e, n, o, r, a, s));
  if (Hn) {
    const d = window.performance.now(),
      m = e.__v_emitter;
    m &&
      l &&
      m.emit("message-compilation", {
        type: "message-compilation",
        message: r,
        time: d - l,
        groupId: `translate:${t}`,
      }),
      c && u && Jt && Io && (Jt(u), Io("intlify message compilation", c, u));
  }
  return (f.locale = n), (f.key = t), (f.source = r), f;
}
function U6(e, t, n) {
  let r = null,
    o,
    s;
  Hn &&
    ((r = window.performance.now()),
    (o = "intlify-message-evaluation-start"),
    (s = "intlify-message-evaluation-end"),
    Jt && Jt(o));
  const i = t(n);
  if (Hn) {
    const a = window.performance.now(),
      l = e.__v_emitter;
    l &&
      r &&
      l.emit("message-evaluation", {
        type: "message-evaluation",
        value: i,
        time: a - r,
        groupId: `translate:${t.key}`,
      }),
      o && s && Jt && Io && (Jt(s), Io("intlify message evaluation", o, s));
  }
  return i;
}
function Df(...e) {
  const [t, n, r] = e,
    o = {};
  if (!oe(t) && !yt(t) && !sn(t) && !Xr(t)) throw er(Et.INVALID_ARGUMENT);
  const s = yt(t) ? String(t) : (sn(t), t);
  return (
    yt(n)
      ? (o.plural = n)
      : oe(n)
      ? (o.default = n)
      : Ce(n) && !Oc(n)
      ? (o.named = n)
      : ut(n) && (o.list = n),
    yt(r) ? (o.plural = r) : oe(r) ? (o.default = r) : Ce(r) && It(o, r),
    [s, o]
  );
}
function z6(e, t, n, r, o, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (i) => {
      s && s(i);
      {
        const a = B6(r),
          l = `Message compilation error: ${i.message}`,
          c =
            i.location &&
            a &&
            b$(a, i.location.start.offset, i.location.end.offset),
          u = e.__v_emitter;
        u &&
          a &&
          u.emit("compile-error", {
            message: a,
            error: i.message,
            start: i.location && i.location.start.offset,
            end: i.location && i.location.end.offset,
            groupId: `translate:${n}`,
          }),
          console.error(
            c
              ? `${l}
${c}`
              : l
          );
      }
    },
    onCacheKey: (i) => p$(t, n, i),
  };
}
function B6(e) {
  if (oe(e)) return e;
  if (e.loc && e.loc.source) return e.loc.source;
}
function V6(e, t, n, r) {
  const {
      modifiers: o,
      pluralRules: s,
      messageResolver: i,
      fallbackLocale: a,
      fallbackWarn: l,
      missingWarn: c,
      fallbackContext: u,
    } = e,
    d = {
      locale: t,
      modifiers: o,
      pluralRules: s,
      messages: (m) => {
        let g = i(n, m);
        if (g == null && u) {
          const [, , _] = y1(u, m, t, a, l, c);
          g = i(_, m);
        }
        if (oe(g) || Xr(g)) {
          let _ = !1;
          const y = b1(e, m, t, g, m, () => {
            _ = !0;
          });
          return _ ? Kg : y;
        } else return sn(g) ? g : Kg;
      },
    };
  return (
    e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    yt(r.plural) && (d.pluralIndex = r.plural),
    d
  );
}
const Xg = typeof Intl < "u",
  E1 = {
    dateTimeFormat: Xg && typeof Intl.DateTimeFormat < "u",
    numberFormat: Xg && typeof Intl.NumberFormat < "u",
  };
function Jg(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: r,
      fallbackLocale: o,
      onWarn: s,
      localeFallbacker: i,
    } = e,
    { __datetimeFormatters: a } = e;
  if (!E1.dateTimeFormat) return s(Ao(Dt.CANNOT_FORMAT_DATE)), Cl;
  const [l, c, u, f] = Mf(...t),
    d = Xe(u.missingWarn) ? u.missingWarn : e.missingWarn,
    m = Xe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn,
    g = !!u.part,
    _ = Ep(e, u),
    T = i(e, o, _);
  if (!oe(l) || l === "") return new Intl.DateTimeFormat(_, f).format(c);
  let y = {},
    E,
    v = null,
    w = _,
    C = null;
  const I = "datetime format";
  for (let F = 0; F < T.length; F++) {
    if (
      ((E = C = T[F]),
      _ !== E &&
        xc(m, l) &&
        s(Ao(Dt.FALLBACK_TO_DATE_FORMAT, { key: l, target: E })),
      _ !== E)
    ) {
      const A = e.__v_emitter;
      A &&
        A.emit("fallback", {
          type: I,
          key: l,
          from: w,
          to: C,
          groupId: `${I}:${l}`,
        });
    }
    if (((y = n[E] || {}), (v = y[l]), Ce(v))) break;
    wp(e, l, E, d, I), (w = C);
  }
  if (!Ce(v) || !oe(E)) return r ? kc : l;
  let S = `${E}__${l}`;
  Oc(f) || (S = `${S}__${JSON.stringify(f)}`);
  let M = a.get(S);
  return (
    M || ((M = new Intl.DateTimeFormat(E, It({}, v, f))), a.set(S, M)),
    g ? M.formatToParts(c) : M.format(c)
  );
}
const w1 = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits",
];
function Mf(...e) {
  const [t, n, r, o] = e,
    s = {};
  let i = {},
    a;
  if (oe(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l) throw er(Et.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3]
      ? l[3].trim().startsWith("T")
        ? `${l[1].trim()}${l[3].trim()}`
        : `${l[1].trim()}T${l[3].trim()}`
      : l[1].trim();
    a = new Date(c);
    try {
      a.toISOString();
    } catch {
      throw er(Et.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (h$(t)) {
    if (isNaN(t.getTime())) throw er(Et.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (yt(t)) a = t;
  else throw er(Et.INVALID_ARGUMENT);
  return (
    oe(n)
      ? (s.key = n)
      : Ce(n) &&
        Object.keys(n).forEach((l) => {
          w1.includes(l) ? (i[l] = n[l]) : (s[l] = n[l]);
        }),
    oe(r) ? (s.locale = r) : Ce(r) && (i = r),
    Ce(o) && (i = o),
    [s.key || "", a, s, i]
  );
}
function Qg(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
  }
}
function Zg(e, ...t) {
  const {
      numberFormats: n,
      unresolving: r,
      fallbackLocale: o,
      onWarn: s,
      localeFallbacker: i,
    } = e,
    { __numberFormatters: a } = e;
  if (!E1.numberFormat) return s(Ao(Dt.CANNOT_FORMAT_NUMBER)), Cl;
  const [l, c, u, f] = Ff(...t),
    d = Xe(u.missingWarn) ? u.missingWarn : e.missingWarn,
    m = Xe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn,
    g = !!u.part,
    _ = Ep(e, u),
    T = i(e, o, _);
  if (!oe(l) || l === "") return new Intl.NumberFormat(_, f).format(c);
  let y = {},
    E,
    v = null,
    w = _,
    C = null;
  const I = "number format";
  for (let F = 0; F < T.length; F++) {
    if (
      ((E = C = T[F]),
      _ !== E &&
        xc(m, l) &&
        s(Ao(Dt.FALLBACK_TO_NUMBER_FORMAT, { key: l, target: E })),
      _ !== E)
    ) {
      const A = e.__v_emitter;
      A &&
        A.emit("fallback", {
          type: I,
          key: l,
          from: w,
          to: C,
          groupId: `${I}:${l}`,
        });
    }
    if (((y = n[E] || {}), (v = y[l]), Ce(v))) break;
    wp(e, l, E, d, I), (w = C);
  }
  if (!Ce(v) || !oe(E)) return r ? kc : l;
  let S = `${E}__${l}`;
  Oc(f) || (S = `${S}__${JSON.stringify(f)}`);
  let M = a.get(S);
  return (
    M || ((M = new Intl.NumberFormat(E, It({}, v, f))), a.set(S, M)),
    g ? M.formatToParts(c) : M.format(c)
  );
}
const T1 = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay",
];
function Ff(...e) {
  const [t, n, r, o] = e,
    s = {};
  let i = {};
  if (!yt(t)) throw er(Et.INVALID_ARGUMENT);
  const a = t;
  return (
    oe(n)
      ? (s.key = n)
      : Ce(n) &&
        Object.keys(n).forEach((l) => {
          T1.includes(l) ? (i[l] = n[l]) : (s[l] = n[l]);
        }),
    oe(r) ? (s.locale = r) : Ce(r) && (i = r),
    Ce(o) && (i = o),
    [s.key || "", a, s, i]
  );
}
function e_(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
Z$();
/*!
 * vue-i18n v9.8.0
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */ const W6 = "9.8.0";
function G6() {
  typeof __INTLIFY_JIT_COMPILATION__ != "boolean" &&
    (yo().__INTLIFY_JIT_COMPILATION__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" &&
      (yo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1),
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" &&
      (yo().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const S1 = Dt.__EXTEND_POINT__,
  Sr = yp(S1),
  Bt = {
    FALLBACK_TO_ROOT: S1,
    NOT_SUPPORTED_PRESERVE: Sr(),
    NOT_SUPPORTED_FORMATTER: Sr(),
    NOT_SUPPORTED_PRESERVE_DIRECTIVE: Sr(),
    NOT_SUPPORTED_GET_CHOICE_INDEX: Sr(),
    COMPONENT_NAME_LEGACY_COMPATIBLE: Sr(),
    NOT_FOUND_PARENT_SCOPE: Sr(),
    IGNORE_OBJ_FLATTEN: Sr(),
    NOTICE_DROP_ALLOW_COMPOSITION: Sr(),
  },
  Y6 = {
    [Bt.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
    [Bt.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
    [Bt.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
    [Bt.NOT_SUPPORTED_PRESERVE_DIRECTIVE]:
      "Not supported 'preserveDirectiveContent'.",
    [Bt.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
    [Bt.COMPONENT_NAME_LEGACY_COMPATIBLE]:
      "Component name legacy compatible: '{name}' -> 'i18n'",
    [Bt.NOT_FOUND_PARENT_SCOPE]:
      "Not found parent scope. use the global scope.",
    [Bt.IGNORE_OBJ_FLATTEN]:
      "Ignore object flatten: '{key}' key has an string value",
    [Bt.NOTICE_DROP_ALLOW_COMPOSITION]:
      "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze",
  };
function Wi(e, ...t) {
  return vp(Y6[e], ...t);
}
const C1 = Et.__EXTEND_POINT__,
  Ut = yp(C1),
  Ue = {
    UNEXPECTED_RETURN_TYPE: C1,
    INVALID_ARGUMENT: Ut(),
    MUST_BE_CALL_SETUP_TOP: Ut(),
    NOT_INSTALLED: Ut(),
    NOT_AVAILABLE_IN_LEGACY_MODE: Ut(),
    REQUIRED_VALUE: Ut(),
    INVALID_VALUE: Ut(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Ut(),
    NOT_INSTALLED_WITH_PROVIDE: Ut(),
    UNEXPECTED_ERROR: Ut(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: Ut(),
    BRIDGE_SUPPORT_VUE_2_ONLY: Ut(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Ut(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Ut(),
    __EXTEND_POINT__: Ut(),
  };
function un(e, ...t) {
  return ws(e, null, { messages: K6, args: t });
}
const K6 = {
    [Ue.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
    [Ue.INVALID_ARGUMENT]: "Invalid argument",
    [Ue.MUST_BE_CALL_SETUP_TOP]:
      "Must be called at the top of a `setup` function",
    [Ue.NOT_INSTALLED]: "Need to install with `app.use` function",
    [Ue.UNEXPECTED_ERROR]: "Unexpected error",
    [Ue.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
    [Ue.REQUIRED_VALUE]: "Required in value: {0}",
    [Ue.INVALID_VALUE]: "Invalid value",
    [Ue.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
    [Ue.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
    [Ue.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
    [Ue.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
    [Ue.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]:
      "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
    [Ue.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]:
      "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly",
  },
  Hf = zn("__translateVNode"),
  jf = zn("__datetimeParts"),
  Uf = zn("__numberParts"),
  ki = zn("__enableEmitter"),
  zf = zn("__disableEmitter"),
  q6 = zn("__setPluralRules"),
  X6 = zn("__injectWithOption"),
  Bf = zn("__dispose");
function xi(e) {
  if (!xe(e)) return e;
  for (const t in e)
    if (Ci(e, t))
      if (!t.includes(".")) xe(e[t]) && xi(e[t]);
      else {
        const n = t.split("."),
          r = n.length - 1;
        let o = e,
          s = !1;
        for (let i = 0; i < r; i++) {
          if ((n[i] in o || (o[n[i]] = {}), !xe(o[n[i]]))) {
            Bn(Wi(Bt.IGNORE_OBJ_FLATTEN, { key: n[i] })), (s = !0);
            break;
          }
          o = o[n[i]];
        }
        s || ((o[n[r]] = e[t]), delete e[t]), xe(o[n[r]]) && xi(o[n[r]]);
      }
  return e;
}
function O1(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: s } = t,
    i = Ce(n) ? n : ut(r) ? {} : { [e]: {} };
  if (
    (ut(r) &&
      r.forEach((a) => {
        if ("locale" in a && "resource" in a) {
          const { locale: l, resource: c } = a;
          l ? ((i[l] = i[l] || {}), ei(c, i[l])) : ei(c, i);
        } else oe(a) && ei(JSON.parse(a), i);
      }),
    o == null && s)
  )
    for (const a in i) Ci(i, a) && xi(i[a]);
  return i;
}
function k1(e) {
  return e.type;
}
function J6(e, t, n) {
  let r = xe(t.messages) ? t.messages : {};
  "__i18nGlobal" in n &&
    (r = O1(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
  const o = Object.keys(r);
  o.length &&
    o.forEach((s) => {
      e.mergeLocaleMessage(s, r[s]);
    });
  {
    if (xe(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length &&
        s.forEach((i) => {
          e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
        });
    }
    if (xe(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length &&
        s.forEach((i) => {
          e.mergeNumberFormat(i, t.numberFormats[i]);
        });
    }
  }
}
function t_(e) {
  return ae(Br, null, e, 0);
}
const n_ = "__INTLIFY_META__",
  r_ = () => [],
  Q6 = () => !1;
let o_ = 0;
function s_(e) {
  return (t, n, r, o) => e(n, r, bn() || void 0, o);
}
const Z6 = () => {
  const e = bn();
  let t = null;
  return e && (t = k1(e)[n_]) ? { [n_]: t } : null;
};
function x1(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e,
    o = n === void 0,
    s = e.flatJson;
  let i = Xe(e.inheritLocale) ? e.inheritLocale : !0;
  const a = re(n && i ? n.locale.value : oe(e.locale) ? e.locale : Sl),
    l = re(
      n && i
        ? n.fallbackLocale.value
        : oe(e.fallbackLocale) ||
          ut(e.fallbackLocale) ||
          Ce(e.fallbackLocale) ||
          e.fallbackLocale === !1
        ? e.fallbackLocale
        : a.value
    ),
    c = re(O1(a.value, e)),
    u = re(Ce(e.datetimeFormats) ? e.datetimeFormats : { [a.value]: {} }),
    f = re(Ce(e.numberFormats) ? e.numberFormats : { [a.value]: {} });
  let d = n
      ? n.missingWarn
      : Xe(e.missingWarn) || Tl(e.missingWarn)
      ? e.missingWarn
      : !0,
    m = n
      ? n.fallbackWarn
      : Xe(e.fallbackWarn) || Tl(e.fallbackWarn)
      ? e.fallbackWarn
      : !0,
    g = n ? n.fallbackRoot : Xe(e.fallbackRoot) ? e.fallbackRoot : !0,
    _ = !!e.fallbackFormat,
    T = qe(e.missing) ? e.missing : null,
    y = qe(e.missing) ? s_(e.missing) : null,
    E = qe(e.postTranslation) ? e.postTranslation : null,
    v = n ? n.warnHtmlMessage : Xe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    w = !!e.escapeParameter;
  const C = n ? n.modifiers : Ce(e.modifiers) ? e.modifiers : {};
  let I = e.pluralRules || (n && n.pluralRules),
    S;
  (S = (() => {
    o && Wg(null);
    const k = {
      version: W6,
      locale: a.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: C,
      pluralRules: I,
      missing: y === null ? void 0 : y,
      missingWarn: d,
      fallbackWarn: m,
      fallbackFormat: _,
      unresolving: !0,
      postTranslation: E === null ? void 0 : E,
      warnHtmlMessage: v,
      escapeParameter: w,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" },
    };
    (k.datetimeFormats = u.value),
      (k.numberFormats = f.value),
      (k.__datetimeFormatters = Ce(S) ? S.__datetimeFormatters : void 0),
      (k.__numberFormatters = Ce(S) ? S.__numberFormatters : void 0),
      (k.__v_emitter = Ce(S) ? S.__v_emitter : void 0);
    const R = N6(k);
    return o && Wg(R), R;
  })()),
    Ns(S, a.value, l.value);
  function F() {
    return [a.value, l.value, c.value, u.value, f.value];
  }
  const A = ie({
      get: () => a.value,
      set: (k) => {
        (a.value = k), (S.locale = a.value);
      },
    }),
    D = ie({
      get: () => l.value,
      set: (k) => {
        (l.value = k), (S.fallbackLocale = l.value), Ns(S, a.value, k);
      },
    }),
    L = ie(() => c.value),
    Y = ie(() => u.value),
    ve = ie(() => f.value);
  function ye() {
    return qe(E) ? E : null;
  }
  function Z(k) {
    (E = k), (S.postTranslation = k);
  }
  function W() {
    return T;
  }
  function U(k) {
    k !== null && (y = s_(k)), (T = k), (S.missing = y);
  }
  function Ie(k, R) {
    return k !== "translate" || !R.resolvedMessage;
  }
  const Ne = (k, R, ee, pe, Se, Be) => {
    F();
    let _t;
    try {
      o || (S.fallbackContext = n ? R6() : void 0), (_t = k(S));
    } finally {
      o || (S.fallbackContext = void 0);
    }
    if (
      (ee !== "translate exists" && yt(_t) && _t === kc) ||
      (ee === "translate exists" && !_t)
    ) {
      const [jt, Gi] = R();
      if (n && oe(jt) && Ie(ee, Gi)) {
        g &&
          (xc(m, jt) || v1(d, jt)) &&
          Bn(Wi(Bt.FALLBACK_TO_ROOT, { key: jt, type: ee }));
        {
          const { __v_emitter: hr } = S;
          hr &&
            g &&
            hr.emit("fallback", {
              type: ee,
              key: jt,
              to: "global",
              groupId: `${ee}:${jt}`,
            });
        }
      }
      return n && g ? pe(n) : Se(jt);
    } else {
      if (Be(_t)) return _t;
      throw un(Ue.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ht(...k) {
    return Ne(
      (R) => Reflect.apply(qg, null, [R, ...k]),
      () => Df(...k),
      "translate",
      (R) => Reflect.apply(R.t, R, [...k]),
      (R) => R,
      (R) => oe(R)
    );
  }
  function Ke(...k) {
    const [R, ee, pe] = k;
    if (pe && !xe(pe)) throw un(Ue.INVALID_ARGUMENT);
    return ht(R, ee, It({ resolvedMessage: !0 }, pe || {}));
  }
  function gt(...k) {
    return Ne(
      (R) => Reflect.apply(Jg, null, [R, ...k]),
      () => Mf(...k),
      "datetime format",
      (R) => Reflect.apply(R.d, R, [...k]),
      () => Cl,
      (R) => oe(R)
    );
  }
  function Rt(...k) {
    return Ne(
      (R) => Reflect.apply(Zg, null, [R, ...k]),
      () => Ff(...k),
      "number format",
      (R) => Reflect.apply(R.n, R, [...k]),
      () => Cl,
      (R) => oe(R)
    );
  }
  function mr(k) {
    return k.map((R) => (oe(R) || yt(R) || Xe(R) ? t_(String(R)) : R));
  }
  const P = { normalize: mr, interpolate: (k) => k, type: "vnode" };
  function X(...k) {
    return Ne(
      (R) => {
        let ee;
        const pe = R;
        try {
          (pe.processor = P), (ee = Reflect.apply(qg, null, [pe, ...k]));
        } finally {
          pe.processor = null;
        }
        return ee;
      },
      () => Df(...k),
      "translate",
      (R) => R[Hf](...k),
      (R) => [t_(R)],
      (R) => ut(R)
    );
  }
  function J(...k) {
    return Ne(
      (R) => Reflect.apply(Zg, null, [R, ...k]),
      () => Ff(...k),
      "number format",
      (R) => R[Uf](...k),
      r_,
      (R) => oe(R) || ut(R)
    );
  }
  function Q(...k) {
    return Ne(
      (R) => Reflect.apply(Jg, null, [R, ...k]),
      () => Mf(...k),
      "datetime format",
      (R) => R[jf](...k),
      r_,
      (R) => oe(R) || ut(R)
    );
  }
  function Ee(k) {
    (I = k), (S.pluralRules = I);
  }
  function Fe(k, R) {
    return Ne(
      () => {
        if (!k) return !1;
        const ee = oe(R) ? R : a.value,
          pe = b(ee),
          Se = S.messageResolver(pe, k);
        return Xr(Se) || sn(Se) || oe(Se);
      },
      () => [k],
      "translate exists",
      (ee) => Reflect.apply(ee.te, ee, [k, R]),
      Q6,
      (ee) => Xe(ee)
    );
  }
  function p(k) {
    let R = null;
    const ee = d1(S, l.value, a.value);
    for (let pe = 0; pe < ee.length; pe++) {
      const Se = c.value[ee[pe]] || {},
        Be = S.messageResolver(Se, k);
      if (Be != null) {
        R = Be;
        break;
      }
    }
    return R;
  }
  function h(k) {
    const R = p(k);
    return R ?? (n ? n.tm(k) || {} : {});
  }
  function b(k) {
    return c.value[k] || {};
  }
  function O(k, R) {
    if (s) {
      const ee = { [k]: R };
      for (const pe in ee) Ci(ee, pe) && xi(ee[pe]);
      R = ee[k];
    }
    (c.value[k] = R), (S.messages = c.value);
  }
  function x(k, R) {
    c.value[k] = c.value[k] || {};
    const ee = { [k]: R };
    for (const pe in ee) Ci(ee, pe) && xi(ee[pe]);
    (R = ee[k]), ei(R, c.value[k]), (S.messages = c.value);
  }
  function $(k) {
    return u.value[k] || {};
  }
  function G(k, R) {
    (u.value[k] = R), (S.datetimeFormats = u.value), Qg(S, k, R);
  }
  function z(k, R) {
    (u.value[k] = It(u.value[k] || {}, R)),
      (S.datetimeFormats = u.value),
      Qg(S, k, R);
  }
  function K(k) {
    return f.value[k] || {};
  }
  function B(k, R) {
    (f.value[k] = R), (S.numberFormats = f.value), e_(S, k, R);
  }
  function le(k, R) {
    (f.value[k] = It(f.value[k] || {}, R)),
      (S.numberFormats = f.value),
      e_(S, k, R);
  }
  o_++,
    n &&
      Hn &&
      (xt(n.locale, (k) => {
        i && ((a.value = k), (S.locale = k), Ns(S, a.value, l.value));
      }),
      xt(n.fallbackLocale, (k) => {
        i && ((l.value = k), (S.fallbackLocale = k), Ns(S, a.value, l.value));
      }));
  const q = {
    id: o_,
    locale: A,
    fallbackLocale: D,
    get inheritLocale() {
      return i;
    },
    set inheritLocale(k) {
      (i = k),
        k &&
          n &&
          ((a.value = n.locale.value),
          (l.value = n.fallbackLocale.value),
          Ns(S, a.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: L,
    get modifiers() {
      return C;
    },
    get pluralRules() {
      return I || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(k) {
      (d = k), (S.missingWarn = d);
    },
    get fallbackWarn() {
      return m;
    },
    set fallbackWarn(k) {
      (m = k), (S.fallbackWarn = m);
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(k) {
      g = k;
    },
    get fallbackFormat() {
      return _;
    },
    set fallbackFormat(k) {
      (_ = k), (S.fallbackFormat = _);
    },
    get warnHtmlMessage() {
      return v;
    },
    set warnHtmlMessage(k) {
      (v = k), (S.warnHtmlMessage = k);
    },
    get escapeParameter() {
      return w;
    },
    set escapeParameter(k) {
      (w = k), (S.escapeParameter = k);
    },
    t: ht,
    getLocaleMessage: b,
    setLocaleMessage: O,
    mergeLocaleMessage: x,
    getPostTranslationHandler: ye,
    setPostTranslationHandler: Z,
    getMissingHandler: W,
    setMissingHandler: U,
    [q6]: Ee,
  };
  return (
    (q.datetimeFormats = Y),
    (q.numberFormats = ve),
    (q.rt = Ke),
    (q.te = Fe),
    (q.tm = h),
    (q.d = gt),
    (q.n = Rt),
    (q.getDateTimeFormat = $),
    (q.setDateTimeFormat = G),
    (q.mergeDateTimeFormat = z),
    (q.getNumberFormat = K),
    (q.setNumberFormat = B),
    (q.mergeNumberFormat = le),
    (q[X6] = r),
    (q[Hf] = X),
    (q[jf] = Q),
    (q[Uf] = J),
    (q[ki] = (k) => {
      S.__v_emitter = k;
    }),
    (q[zf] = () => {
      S.__v_emitter = void 0;
    }),
    q
  );
}
const Tp = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent",
  },
  i18n: { type: Object },
};
function eD({ slots: e }, t) {
  return t.length === 1 && t[0] === "default"
    ? (e.default ? e.default() : []).reduce(
        (r, o) => [...r, ...(o.type === Ae ? o.children : [o])],
        []
      )
    : t.reduce((n, r) => {
        const o = e[r];
        return o && (n[r] = o()), n;
      }, {});
}
function I1(e) {
  return Ae;
}
const tD = Re({
    name: "i18n-t",
    props: It(
      {
        keypath: { type: String, required: !0 },
        plural: {
          type: [Number, String],
          validator: (e) => yt(e) || !isNaN(e),
        },
      },
      Tp
    ),
    setup(e, t) {
      const { slots: n, attrs: r } = t,
        o = e.i18n || Cp({ useScope: e.scope, __useComponent: !0 });
      return () => {
        const s = Object.keys(n).filter((f) => f !== "_"),
          i = {};
        e.locale && (i.locale = e.locale),
          e.plural !== void 0 &&
            (i.plural = oe(e.plural) ? +e.plural : e.plural);
        const a = eD(t, s),
          l = o[Hf](e.keypath, a, i),
          c = It({}, r),
          u = oe(e.tag) || xe(e.tag) ? e.tag : I1();
        return at(u, c, l);
      };
    },
  }),
  du = tD;
function nD(e) {
  return ut(e) && !oe(e[0]);
}
function A1(e, t, n, r) {
  const { slots: o, attrs: s } = t;
  return () => {
    const i = { part: !0 };
    let a = {};
    e.locale && (i.locale = e.locale),
      oe(e.format)
        ? (i.key = e.format)
        : xe(e.format) &&
          (oe(e.format.key) && (i.key = e.format.key),
          (a = Object.keys(e.format).reduce(
            (d, m) => (n.includes(m) ? It({}, d, { [m]: e.format[m] }) : d),
            {}
          )));
    const l = r(e.value, i, a);
    let c = [i.key];
    ut(l)
      ? (c = l.map((d, m) => {
          const g = o[d.type],
            _ = g ? g({ [d.type]: d.value, index: m, parts: l }) : [d.value];
          return nD(_) && (_[0].key = `${d.type}-${m}`), _;
        }))
      : oe(l) && (c = [l]);
    const u = It({}, s),
      f = oe(e.tag) || xe(e.tag) ? e.tag : I1();
    return at(f, u, c);
  };
}
const rD = Re({
    name: "i18n-n",
    props: It(
      {
        value: { type: Number, required: !0 },
        format: { type: [String, Object] },
      },
      Tp
    ),
    setup(e, t) {
      const n = e.i18n || Cp({ useScope: "parent", __useComponent: !0 });
      return A1(e, t, T1, (...r) => n[Uf](...r));
    },
  }),
  i_ = rD,
  oD = Re({
    name: "i18n-d",
    props: It(
      {
        value: { type: [Number, Date], required: !0 },
        format: { type: [String, Object] },
      },
      Tp
    ),
    setup(e, t) {
      const n = e.i18n || Cp({ useScope: "parent", __useComponent: !0 });
      return A1(e, t, w1, (...r) => n[jf](...r));
    },
  }),
  a_ = oD;
function sD(e, t) {
  const n = e;
  if (e.mode === "composition") return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function iD(e) {
  const t = (i) => {
    const { instance: a, modifiers: l, value: c } = i;
    if (!a || !a.$) throw un(Ue.UNEXPECTED_ERROR);
    const u = sD(e, a.$);
    l.preserve && Bn(Wi(Bt.NOT_SUPPORTED_PRESERVE));
    const f = l_(c);
    return [Reflect.apply(u.t, u, [...c_(f)]), u];
  };
  return {
    created: (i, a) => {
      const [l, c] = t(a);
      Hn &&
        e.global === c &&
        (i.__i18nWatcher = xt(c.locale, () => {
          a.instance && a.instance.$forceUpdate();
        })),
        (i.__composer = c),
        (i.textContent = l);
    },
    unmounted: (i) => {
      Hn &&
        i.__i18nWatcher &&
        (i.__i18nWatcher(), (i.__i18nWatcher = void 0), delete i.__i18nWatcher),
        i.__composer && ((i.__composer = void 0), delete i.__composer);
    },
    beforeUpdate: (i, { value: a }) => {
      if (i.__composer) {
        const l = i.__composer,
          c = l_(a);
        i.textContent = Reflect.apply(l.t, l, [...c_(c)]);
      }
    },
    getSSRProps: (i) => {
      const [a] = t(i);
      return { textContent: a };
    },
  };
}
function l_(e) {
  if (oe(e)) return { path: e };
  if (Ce(e)) {
    if (!("path" in e)) throw un(Ue.REQUIRED_VALUE, "path");
    return e;
  } else throw un(Ue.INVALID_VALUE);
}
function c_(e) {
  const { path: t, locale: n, args: r, choice: o, plural: s } = e,
    i = {},
    a = r || {};
  return (
    oe(n) && (i.locale = n),
    yt(o) && (i.plural = o),
    yt(s) && (i.plural = s),
    [t, a, i]
  );
}
function aD(e, t, ...n) {
  const r = Ce(n[0]) ? n[0] : {},
    o = !!r.useI18nComponentName,
    s = Xe(r.globalInstall) ? r.globalInstall : !0;
  s && o && Bn(Wi(Bt.COMPONENT_NAME_LEGACY_COMPATIBLE, { name: du.name })),
    s &&
      ([o ? "i18n" : du.name, "I18nT"].forEach((i) => e.component(i, du)),
      [i_.name, "I18nN"].forEach((i) => e.component(i, i_)),
      [a_.name, "I18nD"].forEach((i) => e.component(i, a_))),
    e.directive("t", iD(t));
}
const pu = {
    "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
    "vue-i18n-resource-inspector": "I18n Resources",
    "vue-i18n-timeline": "Vue I18n",
  },
  lD = { "vue-i18n-resource-inspector": "Search for scopes ..." },
  cD = { "vue-i18n-timeline": 16764185 },
  P1 = "vue-i18n: composer properties";
let Vf;
async function uD(e, t) {
  return new Promise((n, r) => {
    try {
      Ul(
        {
          id: "vue-devtools-plugin-vue-i18n",
          label: pu["vue-devtools-plugin-vue-i18n"],
          packageName: "vue-i18n",
          homepage: "https://vue-i18n.intlify.dev",
          logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
          componentStateTypes: [P1],
          app: e,
        },
        (o) => {
          (Vf = o),
            o.on.visitComponentTree(({ componentInstance: i, treeNode: a }) => {
              fD(i, a, t);
            }),
            o.on.inspectComponent(
              ({ componentInstance: i, instanceData: a }) => {
                i.vnode.el &&
                  i.vnode.el.__VUE_I18N__ &&
                  a &&
                  (t.mode === "legacy"
                    ? i.vnode.el.__VUE_I18N__ !== t.global.__composer &&
                      u_(a, i.vnode.el.__VUE_I18N__)
                    : u_(a, i.vnode.el.__VUE_I18N__));
              }
            ),
            o.addInspector({
              id: "vue-i18n-resource-inspector",
              label: pu["vue-i18n-resource-inspector"],
              icon: "language",
              treeFilterPlaceholder: lD["vue-i18n-resource-inspector"],
            }),
            o.on.getInspectorTree((i) => {
              i.app === e &&
                i.inspectorId === "vue-i18n-resource-inspector" &&
                gD(i, t);
            });
          const s = new Map();
          o.on.getInspectorState(async (i) => {
            if (i.app === e && i.inspectorId === "vue-i18n-resource-inspector")
              if ((o.unhighlightElement(), vD(i, t), i.nodeId === "global")) {
                if (!s.has(i.app)) {
                  const [a] = await o.getComponentInstances(i.app);
                  s.set(i.app, a);
                }
                o.highlightElement(s.get(i.app));
              } else {
                const a = _D(i.nodeId, t);
                a && o.highlightElement(a);
              }
          }),
            o.on.editInspectorState((i) => {
              i.app === e &&
                i.inspectorId === "vue-i18n-resource-inspector" &&
                bD(i, t);
            }),
            o.addTimelineLayer({
              id: "vue-i18n-timeline",
              label: pu["vue-i18n-timeline"],
              color: cD["vue-i18n-timeline"],
            }),
            n(!0);
        }
      );
    } catch (o) {
      console.error(o), r(!1);
    }
  });
}
function R1(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function fD(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (
    e &&
    e.vnode.el &&
    e.vnode.el.__VUE_I18N__ &&
    e.vnode.el.__VUE_I18N__ !== r
  ) {
    const o = {
      label: `i18n (${R1(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185,
    };
    t.tags.push(o);
  }
}
function u_(e, t) {
  const n = P1;
  e.state.push({ type: n, key: "locale", editable: !0, value: t.locale.value }),
    e.state.push({
      type: n,
      key: "availableLocales",
      editable: !1,
      value: t.availableLocales,
    }),
    e.state.push({
      type: n,
      key: "fallbackLocale",
      editable: !0,
      value: t.fallbackLocale.value,
    }),
    e.state.push({
      type: n,
      key: "inheritLocale",
      editable: !0,
      value: t.inheritLocale,
    }),
    e.state.push({
      type: n,
      key: "messages",
      editable: !1,
      value: Sp(t.messages.value),
    }),
    e.state.push({
      type: n,
      key: "datetimeFormats",
      editable: !1,
      value: t.datetimeFormats.value,
    }),
    e.state.push({
      type: n,
      key: "numberFormats",
      editable: !1,
      value: t.numberFormats.value,
    });
}
function Sp(e) {
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      const r = e[n];
      qe(r) && "source" in r
        ? (t[n] = hD(r))
        : Xr(r) && r.loc && r.loc.source
        ? (t[n] = r.loc.source)
        : xe(r)
        ? (t[n] = Sp(r))
        : (t[n] = r);
    }),
    t
  );
}
const dD = { "<": "&lt;", ">": "&gt;", '"': "&quot;", "&": "&amp;" };
function pD(e) {
  return e.replace(/[<>"&]/g, mD);
}
function mD(e) {
  return dD[e] || e;
}
function hD(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${pD(e.source)}")` : "(?)"}`,
    },
  };
}
function gD(e, t) {
  e.rootNodes.push({ id: "global", label: "Global Scope" });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, o] of t.__instances) {
    const s = t.mode === "composition" ? o : o.__composer;
    n !== s &&
      e.rootNodes.push({ id: s.id.toString(), label: `${R1(r)} Scope` });
  }
}
function _D(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [r, o] of t.__instances.entries())
      if (o.id.toString() === e) {
        n = r;
        break;
      }
  }
  return n;
}
function N1(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find(
      (r) => r.id.toString() === e
    );
    return n ? (t.mode === "composition" ? n : n.__composer) : null;
  }
}
function vD(e, t) {
  const n = N1(e.nodeId, t);
  return n && (e.state = yD(n)), null;
}
function yD(e) {
  const t = {},
    n = "Locale related info",
    r = [
      { type: n, key: "locale", editable: !0, value: e.locale.value },
      {
        type: n,
        key: "fallbackLocale",
        editable: !0,
        value: e.fallbackLocale.value,
      },
      {
        type: n,
        key: "availableLocales",
        editable: !1,
        value: e.availableLocales,
      },
      { type: n, key: "inheritLocale", editable: !0, value: e.inheritLocale },
    ];
  t[n] = r;
  const o = "Locale messages info",
    s = [
      { type: o, key: "messages", editable: !1, value: Sp(e.messages.value) },
    ];
  t[o] = s;
  {
    const i = "Datetime formats info",
      a = [
        {
          type: i,
          key: "datetimeFormats",
          editable: !1,
          value: e.datetimeFormats.value,
        },
      ];
    t[i] = a;
    const l = "Datetime formats info",
      c = [
        {
          type: l,
          key: "numberFormats",
          editable: !1,
          value: e.numberFormats.value,
        },
      ];
    t[l] = c;
  }
  return t;
}
function Wf(e, t) {
  if (Vf) {
    let n;
    t && "groupId" in t && ((n = t.groupId), delete t.groupId),
      Vf.addTimelineEvent({
        layerId: "vue-i18n-timeline",
        event: {
          title: e,
          groupId: n,
          time: Date.now(),
          meta: {},
          data: t || {},
          logType:
            e === "compile-error"
              ? "error"
              : e === "fallback" || e === "missing"
              ? "warning"
              : "default",
        },
      });
  }
}
function bD(e, t) {
  const n = N1(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && oe(e.state.value)
      ? (n.locale.value = e.state.value)
      : r === "fallbackLocale" &&
        (oe(e.state.value) || ut(e.state.value) || xe(e.state.value))
      ? (n.fallbackLocale.value = e.state.value)
      : r === "inheritLocale" &&
        Xe(e.state.value) &&
        (n.inheritLocale = e.state.value);
  }
}
const ED = zn("global-vue-i18n");
function wD(e = {}, t) {
  const n = Xe(e.globalInjection) ? e.globalInjection : !0,
    r = !0,
    o = new Map(),
    [s, i] = TD(e),
    a = zn("vue-i18n");
  function l(f) {
    return o.get(f) || null;
  }
  function c(f, d) {
    o.set(f, d);
  }
  function u(f) {
    o.delete(f);
  }
  {
    const f = {
      get mode() {
        return "composition";
      },
      get allowComposition() {
        return r;
      },
      async install(d, ...m) {
        if (
          ((d.__VUE_I18N__ = f),
          (d.__VUE_I18N_SYMBOL__ = a),
          d.provide(d.__VUE_I18N_SYMBOL__, f),
          Ce(m[0]))
        ) {
          const T = m[0];
          (f.__composerExtend = T.__composerExtend),
            (f.__vueI18nExtend = T.__vueI18nExtend);
        }
        let g = null;
        n && (g = PD(d, f.global)), aD(d, f, ...m);
        const _ = d.unmount;
        d.unmount = () => {
          g && g(), f.dispose(), _();
        };
        {
          if (!(await uD(d, f))) throw un(Ue.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const y = l1();
          {
            const E = i;
            E[ki] && E[ki](y);
          }
          y.on("*", Wf);
        }
      },
      get global() {
        return i;
      },
      dispose() {
        s.stop();
      },
      __instances: o,
      __getInstance: l,
      __setInstance: c,
      __deleteInstance: u,
    };
    return f;
  }
}
function Cp(e = {}) {
  const t = bn();
  if (t == null) throw un(Ue.MUST_BE_CALL_SETUP_TOP);
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw un(Ue.NOT_INSTALLED);
  const n = SD(t),
    r = OD(n),
    o = k1(t),
    s = CD(e, o);
  if (s === "global") return J6(r, e, o), r;
  if (s === "parent") {
    let l = kD(n, t, e.__useComponent);
    return l == null && (Bn(Wi(Bt.NOT_FOUND_PARENT_SCOPE)), (l = r)), l;
  }
  const i = n;
  let a = i.__getInstance(t);
  if (a == null) {
    const l = It({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n),
      r && (l.__root = r),
      (a = x1(l)),
      i.__composerExtend && (a[Bf] = i.__composerExtend(a)),
      ID(i, t, a),
      i.__setInstance(t, a);
  }
  return a;
}
function TD(e, t, n) {
  const r = Xf();
  {
    const o = r.run(() => x1(e));
    if (o == null) throw un(Ue.UNEXPECTED_ERROR);
    return [r, o];
  }
}
function SD(e) {
  {
    const t = Me(e.isCE ? ED : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw un(e.isCE ? Ue.NOT_INSTALLED_WITH_PROVIDE : Ue.UNEXPECTED_ERROR);
    return t;
  }
}
function CD(e, t) {
  return Oc(e)
    ? "__i18n" in t
      ? "local"
      : "global"
    : e.useScope
    ? e.useScope
    : "local";
}
function OD(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function kD(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let s = xD(t, n);
  for (; s != null; ) {
    const i = e;
    if (
      (e.mode === "composition" && (r = i.__getInstance(s)),
      r != null || o === s)
    )
      break;
    s = s.parent;
  }
  return r;
}
function xD(e, t = !1) {
  return e == null ? null : (t && e.vnode.ctx) || e.parent;
}
function ID(e, t, n) {
  let r = null;
  it(() => {
    if (t.vnode.el) {
      (t.vnode.el.__VUE_I18N__ = n), (r = l1());
      const o = n;
      o[ki] && o[ki](r), r.on("*", Wf);
    }
  }, t),
    Pt(() => {
      const o = n;
      t.vnode.el &&
        t.vnode.el.__VUE_I18N__ &&
        (r && r.off("*", Wf), o[zf] && o[zf](), delete t.vnode.el.__VUE_I18N__),
        e.__deleteInstance(t);
      const s = o[Bf];
      s && (s(), delete o[Bf]);
    }, t);
}
const AD = ["locale", "fallbackLocale", "availableLocales"],
  f_ = ["t", "rt", "d", "n", "tm", "te"];
function PD(e, t) {
  const n = Object.create(null);
  return (
    AD.forEach((o) => {
      const s = Object.getOwnPropertyDescriptor(t, o);
      if (!s) throw un(Ue.UNEXPECTED_ERROR);
      const i = je(s.value)
        ? {
            get() {
              return s.value.value;
            },
            set(a) {
              s.value.value = a;
            },
          }
        : {
            get() {
              return s.get && s.get();
            },
          };
      Object.defineProperty(n, o, i);
    }),
    (e.config.globalProperties.$i18n = n),
    f_.forEach((o) => {
      const s = Object.getOwnPropertyDescriptor(t, o);
      if (!s || !s.value) throw un(Ue.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${o}`, s);
    }),
    () => {
      delete e.config.globalProperties.$i18n,
        f_.forEach((o) => {
          delete e.config.globalProperties[`$${o}`];
        });
    }
  );
}
G6();
__INTLIFY_JIT_COMPILATION__ && k6(H6);
x6(a6);
I6(d1);
{
  const e = yo();
  (e.__INTLIFY__ = !0), g6(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const RD = {
    ar: {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["حول"]);
          };
          return (e.source = "حول"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["رجوع"]);
          };
          return (e.source = "رجوع"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["تجربة"]);
          };
          return (e.source = "تجربة"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["الرئيسية"]);
          };
          return (e.source = "الرئيسية"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["التغيير إلى الوضع المظلم"]);
          };
          return (e.source = "التغيير إلى الوضع المظلم"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["تغيير اللغة"]);
          };
          return (e.source = "تغيير اللغة"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["vite مثال لتطبيق"]);
          };
          return (e.source = "vite مثال لتطبيق"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["عرض لتوجيهات ديناميكية"]);
          };
          return (e.source = "عرض لتوجيهات ديناميكية"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["مرحبا ", r(o("name"))]);
          };
          return (e.source = "مرحبا {name}"), e;
        })(),
        aka: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["معروف أيضا تحت مسمى"]);
          };
          return (e.source = "معروف أيضا تحت مسمى"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["ما إسمك؟"]);
          };
          return (e.source = "ما إسمك؟"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["صفحة غير موجودة"]);
        };
        return (e.source = "صفحة غير موجودة"), e;
      })(),
    },
    de: {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Über"]);
          };
          return (e.source = "Über"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Zurück"]);
          };
          return (e.source = "Zurück"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Los"]);
          };
          return (e.source = "Los"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Startseite"]);
          };
          return (e.source = "Startseite"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Dunkelmodus umschalten"]);
          };
          return (e.source = "Dunkelmodus umschalten"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Sprachen ändern"]);
          };
          return (e.source = "Sprachen ändern"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Vite Startvorlage mit Vorlieben"]);
          };
          return (e.source = "Vite Startvorlage mit Vorlieben"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Demo einer dynamischen Route"]);
          };
          return (e.source = "Demo einer dynamischen Route"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["Hi, ", r(o("name")), "!"]);
          };
          return (e.source = "Hi, {name}!"), e;
        })(),
        aka: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Auch bekannt als"]);
          };
          return (e.source = "Auch bekannt als"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Wie heißt du?"]);
          };
          return (e.source = "Wie heißt du?"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["Nicht gefunden"]);
        };
        return (e.source = "Nicht gefunden"), e;
      })(),
    },
    en: {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["About"]);
          };
          return (e.source = "About"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Back"]);
          };
          return (e.source = "Back"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["GO"]);
          };
          return (e.source = "GO"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Home"]);
          };
          return (e.source = "Home"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Toggle dark mode"]);
          };
          return (e.source = "Toggle dark mode"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Change languages"]);
          };
          return (e.source = "Change languages"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Opinionated Vite Starter Template"]);
          };
          return (e.source = "Opinionated Vite Starter Template"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Demo of dynamic route"]);
          };
          return (e.source = "Demo of dynamic route"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["Hi, ", r(o("name")), "!"]);
          };
          return (e.source = "Hi, {name}!"), e;
        })(),
        aka: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Also known as"]);
          };
          return (e.source = "Also known as"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["What's your name?"]);
          };
          return (e.source = "What's your name?"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["Not found"]);
        };
        return (e.source = "Not found"), e;
      })(),
    },
    es: {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Acerca de"]);
          };
          return (e.source = "Acerca de"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Atrás"]);
          };
          return (e.source = "Atrás"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Ir"]);
          };
          return (e.source = "Ir"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Inicio"]);
          };
          return (e.source = "Inicio"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Alternar modo oscuro"]);
          };
          return (e.source = "Alternar modo oscuro"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Cambiar idiomas"]);
          };
          return (e.source = "Cambiar idiomas"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Plantilla de Inicio de Vite Dogmática"]);
          };
          return (e.source = "Plantilla de Inicio de Vite Dogmática"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Demo de ruta dinámica"]);
          };
          return (e.source = "Demo de ruta dinámica"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["¡Hola, ", r(o("name")), "!"]);
          };
          return (e.source = "¡Hola, {name}!"), e;
        })(),
        aka: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["También conocido como"]);
          };
          return (e.source = "También conocido como"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["¿Cómo te llamas?"]);
          };
          return (e.source = "¿Cómo te llamas?"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["No se ha encontrado"]);
        };
        return (e.source = "No se ha encontrado"), e;
      })(),
    },
    fr: {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["À propos"]);
          };
          return (e.source = "À propos"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Retour"]);
          };
          return (e.source = "Retour"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Essayer"]);
          };
          return (e.source = "Essayer"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Accueil"]);
          };
          return (e.source = "Accueil"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Basculer en mode sombre"]);
          };
          return (e.source = "Basculer en mode sombre"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Changer de langue"]);
          };
          return (e.source = "Changer de langue"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Exemple d'application Vite"]);
          };
          return (e.source = "Exemple d'application Vite"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Démo de route dynamique"]);
          };
          return (e.source = "Démo de route dynamique"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["Salut, ", r(o("name")), "!"]);
          };
          return (e.source = "Salut, {name}!"), e;
        })(),
        aka: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Aussi connu sous le nom de"]);
          };
          return (e.source = "Aussi connu sous le nom de"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Comment t'appelles-tu ?"]);
          };
          return (e.source = "Comment t'appelles-tu ?"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["Page non trouvée"]);
        };
        return (e.source = "Page non trouvée"), e;
      })(),
    },
    id: {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Tentang"]);
          };
          return (e.source = "Tentang"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Kembali"]);
          };
          return (e.source = "Kembali"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Pergi"]);
          };
          return (e.source = "Pergi"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Beranda"]);
          };
          return (e.source = "Beranda"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Ubah ke mode gelap"]);
          };
          return (e.source = "Ubah ke mode gelap"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Ubah bahasa"]);
          };
          return (e.source = "Ubah bahasa"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Template awal vite"]);
          };
          return (e.source = "Template awal vite"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Contoh rute dinamik"]);
          };
          return (e.source = "Contoh rute dinamik"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["Halo, ", r(o("name")), "!"]);
          };
          return (e.source = "Halo, {name}!"), e;
        })(),
        aka: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Juga diketahui sebagai"]);
          };
          return (e.source = "Juga diketahui sebagai"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Siapa nama anda?"]);
          };
          return (e.source = "Siapa nama anda?"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["Tidak ditemukan"]);
        };
        return (e.source = "Tidak ditemukan"), e;
      })(),
    },
    it: {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Su di me"]);
          };
          return (e.source = "Su di me"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Indietro"]);
          };
          return (e.source = "Indietro"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Vai"]);
          };
          return (e.source = "Vai"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Home"]);
          };
          return (e.source = "Home"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Attiva/disattiva modalità scura"]);
          };
          return (e.source = "Attiva/disattiva modalità scura"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Cambia lingua"]);
          };
          return (e.source = "Cambia lingua"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Modello per una Applicazione Vite"]);
          };
          return (e.source = "Modello per una Applicazione Vite"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Demo di rotta dinamica"]);
          };
          return (e.source = "Demo di rotta dinamica"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["Ciao, ", r(o("name")), "!"]);
          };
          return (e.source = "Ciao, {name}!"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Come ti chiami?"]);
          };
          return (e.source = "Come ti chiami?"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["Non trovato"]);
        };
        return (e.source = "Non trovato"), e;
      })(),
    },
    ja: {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["これは？"]);
          };
          return (e.source = "これは？"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["戻る"]);
          };
          return (e.source = "戻る"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["進む"]);
          };
          return (e.source = "進む"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["ホーム"]);
          };
          return (e.source = "ホーム"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["ダークモード切り替え"]);
          };
          return (e.source = "ダークモード切り替え"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["言語切り替え"]);
          };
          return (e.source = "言語切り替え"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["固執された Vite スターターテンプレート"]);
          };
          return (e.source = "固執された Vite スターターテンプレート"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["動的ルートのデモ"]);
          };
          return (e.source = "動的ルートのデモ"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["こんにちは、", r(o("name")), "!"]);
          };
          return (e.source = "こんにちは、{name}!"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["君の名は。"]);
          };
          return (e.source = "君の名は。"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["見つかりませんでした"]);
        };
        return (e.source = "見つかりませんでした"), e;
      })(),
    },
    ka: {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["შესახებ"]);
          };
          return (e.source = "შესახებ"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["უკან"]);
          };
          return (e.source = "უკან"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["დაწყება"]);
          };
          return (e.source = "დაწყება"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["მთავარი"]);
          };
          return (e.source = "მთავარი"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["გადართე მუქი რეჟიმი"]);
          };
          return (e.source = "გადართე მუქი რეჟიმი"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["ენის შეცვლა"]);
          };
          return (e.source = "ენის შეცვლა"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Opinionated Vite Starter Template"]);
          };
          return (e.source = "Opinionated Vite Starter Template"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["დინამიური როუტინგის დემო"]);
          };
          return (e.source = "დინამიური როუტინგის დემო"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["გამარჯობა, ", r(o("name")), "!"]);
          };
          return (e.source = "გამარჯობა, {name}!"), e;
        })(),
        aka: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["ასევე ცნობილი როგორც"]);
          };
          return (e.source = "ასევე ცნობილი როგორც"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["რა გქვია?"]);
          };
          return (e.source = "რა გქვია?"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["ვერ მოიძებნა"]);
        };
        return (e.source = "ვერ მოიძებნა"), e;
      })(),
    },
    ko: {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["소개"]);
          };
          return (e.source = "소개"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["뒤로가기"]);
          };
          return (e.source = "뒤로가기"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["이동"]);
          };
          return (e.source = "이동"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["홈"]);
          };
          return (e.source = "홈"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["다크모드 토글"]);
          };
          return (e.source = "다크모드 토글"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["언어 변경"]);
          };
          return (e.source = "언어 변경"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Vite 애플리케이션 템플릿"]);
          };
          return (e.source = "Vite 애플리케이션 템플릿"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["다이나믹 라우트 데모"]);
          };
          return (e.source = "다이나믹 라우트 데모"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["안녕, ", r(o("name")), "!"]);
          };
          return (e.source = "안녕, {name}!"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["이름이 뭐예요?"]);
          };
          return (e.source = "이름이 뭐예요?"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["찾을 수 없습니다"]);
        };
        return (e.source = "찾을 수 없습니다"), e;
      })(),
    },
    pl: {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["O nas"]);
          };
          return (e.source = "O nas"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Wróć"]);
          };
          return (e.source = "Wróć"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["WEJDŹ"]);
          };
          return (e.source = "WEJDŹ"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Strona główna"]);
          };
          return (e.source = "Strona główna"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Ustaw tryb nocny"]);
          };
          return (e.source = "Ustaw tryb nocny"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Zmień język"]);
          };
          return (e.source = "Zmień język"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Opiniowany szablon startowy Vite"]);
          };
          return (e.source = "Opiniowany szablon startowy Vite"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Demonstracja dynamicznego route"]);
          };
          return (e.source = "Demonstracja dynamicznego route"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["Cześć, ", r(o("name")), "!"]);
          };
          return (e.source = "Cześć, {name}!"), e;
        })(),
        aka: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Znany też jako"]);
          };
          return (e.source = "Znany też jako"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Jak masz na imię?"]);
          };
          return (e.source = "Jak masz na imię?"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["Nie znaleziono"]);
        };
        return (e.source = "Nie znaleziono"), e;
      })(),
    },
    "pt-BR": {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Sobre"]);
          };
          return (e.source = "Sobre"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Voltar"]);
          };
          return (e.source = "Voltar"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Ir"]);
          };
          return (e.source = "Ir"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Início"]);
          };
          return (e.source = "Início"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Alternar modo escuro"]);
          };
          return (e.source = "Alternar modo escuro"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Mudar de idioma"]);
          };
          return (e.source = "Mudar de idioma"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Modelo Opinativo de Partida de Vite"]);
          };
          return (e.source = "Modelo Opinativo de Partida de Vite"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Demonstração de rota dinâmica"]);
          };
          return (e.source = "Demonstração de rota dinâmica"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["Olá, ", r(o("name")), "!"]);
          };
          return (e.source = "Olá, {name}!"), e;
        })(),
        aka: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Também conhecido como"]);
          };
          return (e.source = "Também conhecido como"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Qual é o seu nome?"]);
          };
          return (e.source = "Qual é o seu nome?"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["Não encontrado"]);
        };
        return (e.source = "Não encontrado"), e;
      })(),
    },
    ru: {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["О шаблоне"]);
          };
          return (e.source = "О шаблоне"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Назад"]);
          };
          return (e.source = "Назад"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Перейти"]);
          };
          return (e.source = "Перейти"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Главная"]);
          };
          return (e.source = "Главная"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Включить темный режим"]);
          };
          return (e.source = "Включить темный режим"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Сменить язык"]);
          };
          return (e.source = "Сменить язык"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Самостоятельный начальный шаблон Vite"]);
          };
          return (e.source = "Самостоятельный начальный шаблон Vite"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Демо динамического маршрута"]);
          };
          return (e.source = "Демо динамического маршрута"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["Привет, ", r(o("name")), "!"]);
          };
          return (e.source = "Привет, {name}!"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Как тебя зовут?"]);
          };
          return (e.source = "Как тебя зовут?"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["Не найден"]);
        };
        return (e.source = "Не найден"), e;
      })(),
    },
    tr: {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Hakkımda"]);
          };
          return (e.source = "Hakkımda"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Geri"]);
          };
          return (e.source = "Geri"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["İLERİ"]);
          };
          return (e.source = "İLERİ"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Anasayfa"]);
          };
          return (e.source = "Anasayfa"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Karanlık modu değiştir"]);
          };
          return (e.source = "Karanlık modu değiştir"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Dilleri değiştir"]);
          };
          return (e.source = "Dilleri değiştir"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Görüşlü Vite Başlangıç Şablonu"]);
          };
          return (e.source = "Görüşlü Vite Başlangıç Şablonu"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Dinamik rota demosu"]);
          };
          return (e.source = "Dinamik rota demosu"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["Merhaba, ", r(o("name")), "!"]);
          };
          return (e.source = "Merhaba, {name}!"), e;
        })(),
        aka: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Ayrıca şöyle bilinir"]);
          };
          return (e.source = "Ayrıca şöyle bilinir"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Adınız nedir?"]);
          };
          return (e.source = "Adınız nedir?"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["Bulunamadı"]);
        };
        return (e.source = "Bulunamadı"), e;
      })(),
    },
    uk: {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Про шаблон"]);
          };
          return (e.source = "Про шаблон"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Назад"]);
          };
          return (e.source = "Назад"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Перейти"]);
          };
          return (e.source = "Перейти"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Головна"]);
          };
          return (e.source = "Головна"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Переключити темний режим"]);
          };
          return (e.source = "Переключити темний режим"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Змінити мову"]);
          };
          return (e.source = "Змінити мову"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Самостійний початковий шаблон Vite"]);
          };
          return (e.source = "Самостійний початковий шаблон Vite"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Демо динамічного маршруту"]);
          };
          return (e.source = "Демо динамічного маршруту"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["Привіт, ", r(o("name")), "!"]);
          };
          return (e.source = "Привіт, {name}!"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Як тебе звати?"]);
          };
          return (e.source = "Як тебе звати?"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["Не знайдено"]);
        };
        return (e.source = "Не знайдено"), e;
      })(),
    },
    vi: {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Về"]);
          };
          return (e.source = "Về"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Quay lại"]);
          };
          return (e.source = "Quay lại"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Đi"]);
          };
          return (e.source = "Đi"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Khởi đầu"]);
          };
          return (e.source = "Khởi đầu"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Chuyển đổi chế độ tối"]);
          };
          return (e.source = "Chuyển đổi chế độ tối"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Thay đổi ngôn ngữ"]);
          };
          return (e.source = "Thay đổi ngôn ngữ"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Ý kiến cá nhân Vite Template để bắt đầu"]);
          };
          return (e.source = "Ý kiến cá nhân Vite Template để bắt đầu"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Bản giới thiệu về dynamic route"]);
          };
          return (e.source = "Bản giới thiệu về dynamic route"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["Hi, ", r(o("name")), "!"]);
          };
          return (e.source = "Hi, {name}!"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["Tên bạn là gì?"]);
          };
          return (e.source = "Tên bạn là gì?"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["Không tìm thấy"]);
        };
        return (e.source = "Không tìm thấy"), e;
      })(),
    },
    "zh-CN": {
      button: {
        about: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["关于"]);
          };
          return (e.source = "关于"), e;
        })(),
        back: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["返回"]);
          };
          return (e.source = "返回"), e;
        })(),
        go: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["确定"]);
          };
          return (e.source = "确定"), e;
        })(),
        home: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["首页"]);
          };
          return (e.source = "首页"), e;
        })(),
        toggle_dark: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["切换深色模式"]);
          };
          return (e.source = "切换深色模式"), e;
        })(),
        toggle_langs: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["切换语言"]);
          };
          return (e.source = "切换语言"), e;
        })(),
      },
      intro: {
        desc: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["固执己见的 Vite 项目模板"]);
          };
          return (e.source = "固执己见的 Vite 项目模板"), e;
        })(),
        "dynamic-route": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["动态路由演示"]);
          };
          return (e.source = "动态路由演示"), e;
        })(),
        hi: (() => {
          const e = (t) => {
            const { normalize: n, interpolate: r, named: o } = t;
            return n(["你好，", r(o("name"))]);
          };
          return (e.source = "你好，{name}"), e;
        })(),
        aka: (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["也叫"]);
          };
          return (e.source = "也叫"), e;
        })(),
        "whats-your-name": (() => {
          const e = (t) => {
            const { normalize: n } = t;
            return n(["输入你的名字"]);
          };
          return (e.source = "输入你的名字"), e;
        })(),
      },
      "not-found": (() => {
        const e = (t) => {
          const { normalize: n } = t;
          return n(["未找到页面"]);
        };
        return (e.source = "未找到页面"), e;
      })(),
    },
  },
  ND = {
    en: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      },
      long: {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
      },
    },
    fr: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      },
      long: {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
        hour12: !0,
      },
    },
    es: { short: { year: "numeric", month: "short", day: "numeric" } },
  },
  LD = wD({
    legacy: !1,
    globalInjection: !0,
    locale: "en",
    fallbackLocale: "en",
    dateTimeFormats: ND,
    messages: RD,
  });
pr.add(o$);
pr.add(f$);
pr.add(l$);
pr.add(c$);
pr.add(u$);
pr.add(n$);
pr.add(s$);
pr.add(r$);
pr.add(i$);
const $D = async () => {
    try {
      const { fetchCurrentUser: e } = yi();
      await e();
    } catch {}
  },
  DD = { position: "top-right" };
console != null && console.log && (console.log = () => {});
gx(
  T5,
  { routes: zA },
  async ({
    app: e,
    router: t,
    isClient: n,
    url: r,
    initialState: o,
    initialRoute: s,
    request: i,
  }) => {
    const a = E5(),
      l = _S();
    return (
      e.use(a),
      e.use(l).use(LD),
      await $D(),
      e.use(t),
      e.use(Cb, DD),
      BA(t),
      typeof window < "u" &&
        window.location.hostname !== "localhost" &&
        gL({
          app: e,
          environment: "production",
          dsn: "https://a930959ae99a4b23a21e3265b9d7a529@o4505133737443328.ingest.sentry.io/4505133744914432",
          integrations: [new rL({ routingInstrumentation: _L(t) })],
          tracesSampleRate: 1,
          replaysSessionSampleRate: 0.1,
          replaysOnErrorSampleRate: 1,
        }),
      t.beforeEach(async (c, u, f) => {
        if (c.meta.state && Object.keys(c.meta.state).length > 0) return f();
        n || r.origin, n ? WA(c, u, f) : f();
      }),
      { head: a }
    );
  }
);
export {
  BD as $,
  Ov as A,
  Cp as B,
  vd as C,
  NL as D,
  Re as E,
  Ae as F,
  Pd as G,
  Ii as H,
  uw as I,
  HD as J,
  $l as K,
  MD as L,
  FD as M,
  mI as N,
  je as O,
  R0 as P,
  _C as Q,
  By as R,
  Xl as S,
  ie as T,
  Ad as U,
  Rd as V,
  st as W,
  Dp as X,
  cv as Y,
  zD as Z,
  Un as _,
  ae as a,
  xt as a0,
  at as a1,
  jD as a2,
  ad as a3,
  px as a4,
  ab as a5,
  Ob as a6,
  Q2 as a7,
  N as b,
  tt as c,
  we as d,
  nt as e,
  re as f,
  yi as g,
  Co as h,
  UD as i,
  it as j,
  dl as k,
  _e as l,
  hh as m,
  RL as n,
  se as o,
  ln as p,
  HT as q,
  rc as r,
  $u as s,
  Ot as t,
  te as u,
  ew as v,
  be as w,
  DT as x,
  To as y,
  Mt as z,
};
