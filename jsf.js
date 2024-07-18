class JSF {
    // basis
    static jPlus = `+`;
    static jNot = `!`;
    static jlP = `(`;
    static jrP = `)`;
    static jlB = `[`;
    static jrB = `]`;

    // small application
    static jPar = JSF.jlP + JSF.jrP; // ()
    static jBrk = JSF.jlB + JSF.jrB; // []
    static toObject(s0 = "") {
        return JSF.jlP + s0 + JSF.jrP;
    }
    static toFunc(f0 = "", p0 = "") {
        return f0 + JSF.toObject(p0);
    }

    // objects
    static array = JSF.jBrk;
    static toArray(s0 = "") {
        return JSF.jlB + s0 + JSF.jrB;
    }
    static getItem(s0, idx) {
        return s0 + JSF.toArray(idx);
    }

    static number = JSF.jPlus + JSF.array;
    static toNum(s0 = "") {
        return JSF.jPlus + s0;
    }
    static toNot(s0) {
        return JSF.jNot + s0;
    }
    static Join(...args) {
        return args.join(JSF.jPlus);
    }
    static getNum(...args) {
        return JSF.toNum(JSF.toObject(JSF.getRaw(...args)));
    }
    static getRaw(...args) {
        return JSF.Join(...args.map((arg, idx) => (idx == 0 || eval(arg) === "e" ? arg : JSF.toArray(arg))));
    }

    static string = JSF.Join(JSF.array, JSF.array);
    static toStr(s0 = "") {
        return JSF.Join(s0, JSF.array);
    }
    static Prop(s0, idx) {
        let b0 = false;
        try {
            b0 = eval(s0 + JSF.toArray(idx)) == eval(JSF.toObject(s0) + JSF.toArray(idx));
        } catch {}
        return (b0 ? s0 : JSF.toObject(s0)) + JSF.toArray(idx);
    }

    static boolean = JSF.toNot(JSF.array);

    // basic keyword
    static false = JSF.toNot(JSF.array);
    static true = JSF.toNot(JSF.false);
    static undefined = JSF.getItem(JSF.array, JSF.array);
    static NaN = JSF.toNum(JSF.toArray(JSF.false));

    // numbers
    static 0 = JSF.toNum(JSF.array);
    static 1 = JSF.toNum(JSF.true);
    static 2 = JSF.Join(...Array(2).fill(JSF.true));
    static 3 = JSF.Join(...Array(3).fill(JSF.true));
    static 4 = JSF.Join(...Array(4).fill(JSF.true));
    static 5 = JSF.Join(...Array(5).fill(JSF.true));
    static 6 = JSF.Join(...Array(6).fill(JSF.true));
    static 7 = JSF.Join(...Array(7).fill(JSF.true));
    static 8 = JSF.Join(...Array(8).fill(JSF.true));
    static 9 = JSF.Join(...Array(9).fill(JSF.true));
    static 10 = JSF.getNum(JSF[1], JSF[0]);
    static 11 = JSF.getNum(JSF[1], JSF[1]);
    static 12 = JSF.getNum(JSF[1], JSF[2]);
    static 20 = JSF.getNum(JSF[2], JSF[0]);
    static 21 = JSF.getNum(JSF[2], JSF[1]);
    static 30 = JSF.getNum(JSF[3], JSF[0]);
    static 31 = JSF.getNum(JSF[3], JSF[1]);
    static 32 = JSF.getNum(JSF[3], JSF[2]);
    static 33 = JSF.getNum(JSF[3], JSF[3]);
    static 34 = JSF.getNum(JSF[3], JSF[4]);
    static 35 = JSF.getNum(JSF[3], JSF[5]);
    static 36 = JSF.getNum(JSF[3], JSF[6]);
    static 101 = JSF.getNum(JSF[1], JSF[0], JSF[1]);
    static _00 = JSF.getRaw(JSF[0], JSF[0]);
    static _10 = JSF.getRaw(JSF[1], JSF[0]);
    static _11 = JSF.getRaw(JSF[1], JSF[1]);
    static _12 = JSF.getRaw(JSF[1], JSF[2]);
    static _20 = JSF.getRaw(JSF[2], JSF[0]);
    static _21 = JSF.getRaw(JSF[2], JSF[1]);
    static _30 = JSF.getRaw(JSF[3], JSF[0]);
    static _31 = JSF.getRaw(JSF[3], JSF[1]);
    static _32 = JSF.getRaw(JSF[3], JSF[2]);
    static _33 = JSF.getRaw(JSF[3], JSF[3]);
    static _34 = JSF.getRaw(JSF[3], JSF[4]);
    static _35 = JSF.getRaw(JSF[3], JSF[5]);
    static _36 = JSF.getRaw(JSF[3], JSF[6]);
    static _101 = JSF.getRaw(JSF[1], JSF[0], JSF[1]);

    static false0 = JSF.Join(JSF.false, JSF.toArray(JSF[0]));

    // words
    // undefined -> u n d i
    static _u = JSF.Prop(JSF.toStr(JSF.undefined), JSF[0]);
    static _n = JSF.Prop(JSF.toStr(JSF.undefined), JSF[1]);
    static _d = JSF.Prop(JSF.toStr(JSF.undefined), JSF[2]);
    static _i = JSF.Prop(JSF.Join(JSF.toArray(JSF.false), JSF.undefined), JSF._10);
    // false -> f a l s
    static _f = JSF.Prop(JSF.toStr(JSF.false), JSF[0]);
    static _a = JSF.Prop(JSF.toStr(JSF.false), JSF[1]);
    static _l = JSF.Prop(JSF.toStr(JSF.false), JSF[2]);
    static _s = JSF.Prop(JSF.toStr(JSF.false), JSF[3]);
    // true -> t r e
    static _t = JSF.Prop(JSF.toStr(JSF.true), JSF[0]);
    static _r = JSF.Prop(JSF.toStr(JSF.true), JSF[1]);
    static _e = JSF.Prop(JSF.toStr(JSF.true), JSF[3]);
    // NaN -> N
    static _N = JSF.Prop(JSF.toStr(JSF.NaN), JSF[0]);
    // Infinity -> I y
    static Infinity = JSF.getNum(JSF[1], JSF._e, JSF[1], JSF[0], JSF[0], JSF[0]);
    static _I = JSF.Prop(JSF.toStr(JSF.Infinity), JSF[0]);
    static _y = JSF.Prop(JSF.Join(JSF.NaN, JSF.toArray(JSF.Infinity)), JSF._10);
    // 1e+100 -> +
    static _1e100 = JSF.getNum(JSF[1], JSF._e, JSF[1], JSF[0], JSF[0]);
    static _Plus = JSF.Prop(JSF.toStr(JSF._1e100), JSF[2]);
    // 1.1e+21 -> .
    static _11e21 = JSF.getNum(JSF[1], JSF[1], JSF._e, JSF[2], JSF[0]);
    static _Period = JSF.Prop(JSF.toStr(JSF._11e21), JSF[1]);
    // 1e-7 -> -
    static _1e7 = JSF.getNum(JSF._Period, ...Array(6).fill(JSF[0]), JSF[1]);
    static _Minus = JSF.Prop(JSF.toStr(JSF._1e7), JSF[2]);

    // Array instance methods
    static __at = JSF.Join(JSF._a, JSF._t);
    static function = JSF.Prop(JSF.array, JSF.__at);
    // function at() { [native code] } -> c o v
    static _c = JSF.Prop(JSF.toStr(JSF.function), JSF[3]);
    static _o = JSF.Prop(JSF.Join(JSF.true, JSF.function), JSF._10);
    static _v = JSF.Prop(JSF.toStr(JSF.function), JSF._21);
    // function at() { [native code] } -> (Space) () [] {}
    static _Space = JSF.Prop(JSF.Join(JSF.false, JSF.function), JSF._20);
    static _LPar = JSF.Prop(JSF.toStr(JSF.function), JSF._11);
    static _RPar = JSF.Prop(JSF.toStr(JSF.function), JSF._12);
    static _LBrk = JSF.Prop(JSF.Join(JSF.true, JSF.function), JSF._20);
    static _RBrk = JSF.Prop(JSF.Join(JSF.NaN, JSF.function), JSF._31);
    static _LBrc = JSF.Prop(JSF.Join(JSF.false0, JSF.function), JSF._20);
    static _RBrc = JSF.Prop(JSF.toStr(JSF.function), JSF._30);
    static _Brc = JSF.Join(JSF._LBrc, JSF._RBrc);
    static jBrc = JSF._Brc; // {}
    static toPar(s0 = "") {
        return JSF.Join(JSF._LPar, s0, JSF._RPar);
    }
    static toBrc(s0 = "") {
        return JSF.Join(JSF._LBrc, s0, JSF._RBrc);
    }

    static __function = JSF.Join(JSF._f, JSF._u, JSF._n, JSF._c, JSF._t, JSF._i, JSF._o, JSF._n);
    static __constructor = JSF.Join(JSF._c, JSF._o, JSF._n, JSF._s, JSF._t, JSF._r, JSF._u, JSF._c, JSF._t, JSF._o, JSF._r);
    static __return = JSF.Join(JSF._r, JSF._e, JSF._t, JSF._u, JSF._r, JSF._n);
    static __entries = JSF.Join(JSF._e, JSF._n, JSF._t, JSF._r, JSF._i, JSF._e, JSF._s);
    static __try = JSF.Join(JSF._t, JSF._r, JSF._y);
    static __finally = JSF.Join(JSF._f, JSF._i, JSF._n, JSF._a, JSF._l, JSF._l, JSF._y);
    static __if = JSF.Join(JSF._i, JSF._f);
    static __else = JSF.Join(JSF._e, JSF._l, JSF._s, JSF._e);
    static __for = JSF.Join(JSF._f, JSF._o, JSF._r);
    static __concat = JSF.Join(JSF._c, JSF._o, JSF._n, JSF._c, JSF._a, JSF._t);
    static __call = JSF.Join(JSF._c, JSF._a, JSF._l, JSF._l);

    static Execute(f0 = "", p0 = "") {
        return JSF.toFunc(JSF.toFunc(JSF.Prop(JSF.Prop(JSF.array, JSF.__at), JSF.__constructor), f0), p0);
    }
    static Return(f0 = "") {
        return JSF.Execute(JSF.Join(JSF.__return, JSF._Space, f0));
    }
    static Func(f0 = "", p0 = "") {
        return JSF.toFunc(JSF.Return(f0), p0);
    }

    // [object Object]
    static objObj = JSF.Return(JSF.jBrc);
    static _O = JSF.Prop(JSF.Join(JSF.NaN, JSF.objObj), JSF._11);

    // [object Array Iterator]
    static Iterator = JSF.Prop(JSF.array, JSF.__entries);
    static _b = JSF.Prop(JSF.toStr(JSF.toFunc(JSF.Iterator)), JSF[2]);
    static _j = JSF.Prop(JSF.toStr(JSF.toFunc(JSF.Iterator)), JSF[3]);
    static _A = JSF.Prop(JSF.Join(JSF.NaN, JSF.toFunc(JSF.Iterator)), JSF._11);

    // array constructor -> Array Object
    // Array -> A
    static Array = JSF.Prop(JSF.array, JSF.__constructor);
    // number constructor -> Number Object
    // Number -> m
    static Number = JSF.Prop(JSF.number, JSF.__constructor);
    static _m = JSF.Prop(JSF.toStr(JSF.Number), JSF._11);
    // string constructor -> String Object
    // String -> S g
    static String = JSF.Prop(JSF.string, JSF.__constructor);
    static _S = JSF.Prop(JSF.Join(JSF[0], JSF.String), JSF._10);
    static _g = JSF.Prop(JSF.Join(JSF.false0, JSF.String), JSF._20);
    // boolean constructor -> Boolean Object
    // Boolean -> B
    static Boolean = JSF.Prop(JSF.boolean, JSF.__constructor);
    static _B = JSF.Prop(JSF.Join(JSF[0], JSF.Boolean), JSF._10);
    // function constructor -> Function Object
    // Function -> F
    static Function = JSF.Prop(JSF.function, JSF.__constructor);
    static _F = JSF.Prop(JSF.Join(JSF[0], JSF.Function), JSF._10);
    static anonymous = JSF.toFunc(JSF.Function);

    static __name = JSF.Join(JSF._n, JSF._a, JSF._m, JSF._e);
    static __toString = JSF.Join(JSF._t, JSF._o, JSF.Prop(JSF.String, JSF.__name));
    static __btoa = JSF.Join(JSF._b, JSF._t, JSF._o, JSF._a);

    static Undefined = JSF.Func(JSF.__toString);
    static _U = JSF.Prop(JSF.Join(JSF.NaN, JSF.Func(JSF.__toString)), JSF._11);

    static Btoa(s0 = "") {
        return JSF.Func(JSF.__btoa, s0);
    }

    static BTOA_a = JSF.Btoa(JSF.Join(JSF._a, JSF._a));
    static BTOA_true = JSF.Btoa(JSF.true);
    static BTOA_b = JSF.Btoa(JSF._b);
    static BTOA_c = JSF.Btoa(JSF._c);
    static BTOA_d = JSF.Btoa(JSF._d);
    static BTOA_e = JSF.Btoa(JSF._e);
    static BTOA_f = JSF.Btoa(JSF._f);
    static BTOA_g = JSF.Btoa(JSF._g);
    static BTOA_i = JSF.Btoa(JSF._i);
    static BTOA_j = JSF.Btoa(JSF._j);
    static BTOA_m = JSF.Btoa(JSF._m);
    static BTOA_n = JSF.Btoa(JSF._n);
    static BTOA_o = JSF.Btoa(JSF._o);
    static BTOA_r = JSF.Btoa(JSF._r);
    static BTOA_s = JSF.Btoa(JSF._s);
    static BTOA_t = JSF.Btoa(JSF._t);
    static BTOA_u = JSF.Btoa(JSF._u);
    static BTOA_v = JSF.Btoa(JSF._v);
    static BTOA_y = JSF.Btoa(JSF._y);
    // static _U2 = JSF.toFunc(JSF.Prop(JSF.Prop(JSF.objObj, JSF.__toString), JSF.__call));
    // toString radix method -> h
    static Radix(i0, r0, idx = "") {
        if (idx === "") {
            return JSF.toFunc(JSF.Prop(i0, JSF.__toString), r0);
        } else {
            return JSF.Prop(JSF.toFunc(JSF.Prop(i0, JSF.__toString), r0), idx);
        }
    }

    static _h = JSF.Radix(JSF[101], JSF._21, JSF[1]);
    static _w = JSF.Radix(JSF[32], JSF._33);
    static _x = JSF.Radix(JSF[101], JSF._34, JSF[1]);
    static _z = JSF.Radix(JSF[35], JSF._36);

    static __catch = JSF.Join(JSF._c, JSF._a, JSF._t, JSF._c, JSF._h);

    static Error(s0 = "") {
        return JSF.Execute(JSF.Join(JSF.__try, JSF.toBrc(s0), JSF.__catch, JSF.toPar(JSF._f), JSF.toBrc(JSF.Join(JSF.__return, JSF._Space, JSF._f))));
    }
    static error = JSF.Error(JSF._t);
    static __italics = JSF.Join(JSF._i, JSF._t, JSF._a, JSF._l, JSF._i, JSF._c, JSF._s);
    static italics = JSF.toFunc(JSF.Prop(JSF._f, JSF.__italics));

    // static __values = JSF.Join(JSF._v, JSF._a, JSF._l, JSF._u, JSF._e, JSF._s);

    // static __consolelog = JSF.Join(JSF._c, JSF._o, JSF._n, JSF._s, JSF._o, JSF._l, JSF._e, JSF._Period, JSF._l, JSF._o, JSF._g);
    //function String() { [native code] }
    //0123456789012345678901234567890123456789
    //   static _flat = JSF.Join(JSF._f, JSF._l, JSF._a, JSF._t);
    //   static _fill = JSF.Join(JSF._f, JSF._i, JSF._l, JSF._l);
    //   static _find = JSF.Join(JSF._f, JSF._i, JSF._n, JSF._d);
    //   static _filter = JSF.Join(JSF._f, JSF._i, JSF._l, JSF._t, JSF._e, JSF._r);
    //   static _func1 = JSF.Prop(JSF.Array, JSF._flat);
    //   static _func2 = JSF.Prop(JSF.Array, JSF._fill);
    //   static _func3 = JSF.Prop(JSF.Array, JSF._find);
    //   static _func4 = JSF.Prop(JSF.Array, JSF._filter);
    //   static _func5 = JSF.Prop(JSF.Array, JSF._entries);
}

var tt, st, pt;
window.onload = () => {
    try {
        tt = document.getElementById("text");
        pt = document.getElementById("props");
        st = Object.getOwnPropertyNames(JSF).filter((arg) => {
            return typeof JSF[arg] !== "function" && JSF[arg].length !== undefined && JSF[arg] !== "JSF" && arg[0] !== "j";
        });
        st.forEach((arg) => {
            tt.innerHTML += "<tr>" + "<td>" + arg + "</td>" + '<td><xmp>"' + eval(JSF[arg]) + '"</xmp></td>' + "<td>" + JSF[arg] + "</td>" + "<td>" + JSF[arg].length + "</td>" + "</tr>";
        });
        pt.innerHTML += Object.getOwnPropertyNames(JSF).sort();
    } catch (error) {
        // console.log(error);
    }
};
v = "([false]+[])[1]";
// v = JSF.Prop(JSF.Btoa(JSF[0]), JSF[0]);
console.log(v);
console.log(eval(v));

console.log(typeof eval(v));
