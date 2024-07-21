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
    static toObj(s0 = "") {
        return JSF.jlP + s0 + JSF.jrP;
    }
    static toFunc(f0 = "", p0 = "") {
        return f0 + JSF.toObj(p0);
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
    static Stringfy(s0 = "") {
        return JSF.Join(
            ...s0.split("").map((s1, i0) => {
                return !isNaN(parseInt(s1)) ? (i0 == 0 ? JSF[s1] : JSF.toArray(JSF[s1])) : JSF[`_${s1}`];
            })
        );
    }
    static getNum(...args) {
        return JSF.toNum(JSF.toObj(JSF.getRaw(...args)));
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
            b0 = eval(s0 + JSF.toArray(idx)) == eval(JSF.toObj(s0) + JSF.toArray(idx));
        } catch {}
        return (b0 ? s0 : JSF.toObj(s0)) + JSF.toArray(idx);
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
    // undefined -> "u" "n" "d" "i"
    static _u = JSF.Prop(JSF.toStr(JSF.undefined), JSF[0]);
    static _n = JSF.Prop(JSF.toStr(JSF.undefined), JSF[1]);
    static _d = JSF.Prop(JSF.toStr(JSF.undefined), JSF[2]);
    static _i = JSF.Prop(JSF.Join(JSF.toArray(JSF.false), JSF.undefined), JSF._10);
    // false -> "f" "a" "l" "s"
    static _f = JSF.Prop(JSF.toStr(JSF.false), JSF[0]);
    static _a = JSF.Prop(JSF.toStr(JSF.false), JSF[1]);
    static _l = JSF.Prop(JSF.toStr(JSF.false), JSF[2]);
    static _s = JSF.Prop(JSF.toStr(JSF.false), JSF[3]);
    // true -> "t" "r" "e"
    static _t = JSF.Prop(JSF.toStr(JSF.true), JSF[0]);
    static _r = JSF.Prop(JSF.toStr(JSF.true), JSF[1]);
    static _e = JSF.Prop(JSF.toStr(JSF.true), JSF[3]);
    // NaN -> "N"
    static _N = JSF.Prop(JSF.toStr(JSF.NaN), JSF[0]);
    // Infinity -> "I" "y"
    static Infinity = JSF.getNum(JSF[1], JSF._e, JSF[1], JSF[0], JSF[0], JSF[0]);
    static _I = JSF.Prop(JSF.toStr(JSF.Infinity), JSF[0]);
    static _y = JSF.Prop(JSF.Join(JSF.NaN, JSF.toArray(JSF.Infinity)), JSF._10);
    // 1e+100 -> "+"
    static _1e100 = JSF.getNum(JSF[1], JSF._e, JSF[1], JSF[0], JSF[0]);
    static _PLUS = JSF.Prop(JSF.toStr(JSF._1e100), JSF[2]);
    // 1.1e+21 -> "."
    static _11e21 = JSF.getNum(JSF[1], JSF[1], JSF._e, JSF[2], JSF[0]);
    static _PERIOD = JSF.Prop(JSF.toStr(JSF._11e21), JSF[1]);
    // 1e-7 -> "-"
    static _1e7 = JSF.getNum(JSF._PERIOD, ...Array(6).fill(JSF[0]), JSF[1]);
    static _MINUS = JSF.Prop(JSF.toStr(JSF._1e7), JSF[2]);

    // Array instance method
    static __at = JSF.Join(JSF._a, JSF._t);
    static At = JSF.Prop(JSF.array, JSF.__at);
    // function at() { [native code] } -> "c" "o" "v"
    static _c = JSF.Prop(JSF.toStr(JSF.At), JSF[3]);
    static _o = JSF.Prop(JSF.Join(JSF.true, JSF.At), JSF._10);
    static _v = JSF.Prop(JSF.toStr(JSF.At), JSF._21);
    // function at() { [native code] } -> " " "(" ")" "[" "]" "{" "}"
    static _SPACE = JSF.Prop(JSF.Join(JSF.false, JSF.At), JSF._20);
    static _LPAR = JSF.Prop(JSF.toStr(JSF.At), JSF._11);
    static _RPAR = JSF.Prop(JSF.toStr(JSF.At), JSF._12);
    static _LBRK = JSF.Prop(JSF.Join(JSF.true, JSF.At), JSF._20);
    static _RBRK = JSF.Prop(JSF.Join(JSF.NaN, JSF.At), JSF._31);
    static _LBRC = JSF.Prop(JSF.Join(JSF.false0, JSF.At), JSF._20);
    static _RBRC = JSF.Prop(JSF.toStr(JSF.At), JSF._30);
    static _BRC = JSF.Join(JSF._LBRC, JSF._RBRC);
    static jBrc = JSF._BRC; // "{}"
    // "(s0)"
    static toPar(s0 = "") {
        return JSF.Join(JSF._LPAR, s0, JSF._RPAR);
    }
    // "{s0}"
    static toBrc(s0 = "") {
        return JSF.Join(JSF._LBRC, s0, JSF._RBRC);
    }

    static __flat = JSF.Stringfy("flat");
    static __fill = JSF.Stringfy("fill");
    static __find = JSF.Stringfy("find");
    static __filter = JSF.Stringfy("filter");
    static __constructor = JSF.Stringfy("constructor");
    static __entries = JSF.Stringfy("entries");
    static __function = JSF.Stringfy("function");
    static __call = JSF.Stringfy("call");
    static __concat = JSF.Stringfy("concat");

    static __return = JSF.Stringfy("return");

    static __finally = JSF.Stringfy("finally");
    static __if = JSF.Stringfy("if");
    static __else = JSF.Stringfy("else");
    static __for = JSF.Stringfy("for");

    // excute function
    // []["at"]["constructor"]("f0")("p0") -> (() => {f0})()
    static Anonymous(f0 = "") {
        return JSF.toFunc(JSF.toFunc(JSF.Prop(JSF.Prop(JSF.array, JSF.__at), JSF.__constructor), f0));
    }
    // retrun value
    // []["at"]["constructor"]("return f0")() -> f0
    static Return(f0 = "") {
        return JSF.Anonymous(JSF.Join(JSF.__return, JSF._SPACE, f0));
    }
    // Run function []["at"]["constructor"]("return f0")()("p0") -> f0(p0)
    static Execution(f0 = "", p0 = "") {
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
    // Array -> "A"
    static Array = JSF.Prop(JSF.array, JSF.__constructor);
    // number constructor -> Number Object
    // Number -> "m"
    static Number = JSF.Prop(JSF.number, JSF.__constructor);
    static _m = JSF.Prop(JSF.toStr(JSF.Number), JSF._11);
    // string constructor -> String Object
    // String -> "S" "g"
    static String = JSF.Prop(JSF.string, JSF.__constructor);
    static _S = JSF.Prop(JSF.Join(JSF[0], JSF.String), JSF._10);
    static _g = JSF.Prop(JSF.Join(JSF.false0, JSF.String), JSF._20);

    // boolean constructor -> Boolean Object
    // Boolean -> "B"
    static Boolean = JSF.Prop(JSF.boolean, JSF.__constructor);
    static _B = JSF.Prop(JSF.Join(JSF[0], JSF.Boolean), JSF._10);
    // function constructor -> Function Object
    // Function -> "F"
    static Function = JSF.Prop(JSF.At, JSF.__constructor);
    static _F = JSF.Prop(JSF.Join(JSF[0], JSF.Function), JSF._10);
    // function anonymous() {}
    static anonymous = JSF.toFunc(JSF.Function);

    // (String).name -> "String"
    static __name = JSF.Stringfy("name");
    // "to" + "String" -> "toString"
    static __toString = JSF.Join(JSF._t, JSF._o, JSF.Prop(JSF.String, JSF.__name));

    // [object Undefined]
    static Undefined = JSF.Execution(JSF.__toString);
    static _U = JSF.Prop(JSF.Join(JSF.NaN, JSF.Execution(JSF.__toString)), JSF._11);

    // btoa, atob function
    static __btoa = JSF.Stringfy("btoa");
    static __atob = JSF.Stringfy("atob");
    // base64 -> ascii
    static Btoa(s0 = "") {
        return JSF.Execution(JSF.__btoa, s0);
    }
    // ascii -> base64
    static Atob(s0 = "") {
        return JSF.Execution(JSF.__atob, s0);
    }

    static BTOA_EXCLAMATION = JSF.Atob(JSF.Stringfy("If")); //APOSTROPHE APOSTROPHE
    static BTOA_QUOTATION = JSF.Prop(JSF.Atob(JSF.Stringfy("000i")), JSF[2]);
    static BTOA_NUMBER = JSF.Atob(JSF.Stringfy("I0"));
    static BTOA_DOLLAR = JSF.Prop(JSF.Atob(JSF.Stringfy("0iS")), JSF[1]);
    static BTOA_PERCENT = JSF.Prop(JSF.Atob(JSF.Stringfy("000l")), JSF[2]);
    static BTOA_AMPERSAND = JSF.Prop(JSF.Atob(JSF.Stringfy("0ia")), JSF[1]);
    static BTOA_APOSTROPHE = JSF.Prop(JSF.Atob(JSF.Stringfy("000n")), JSF[2]);
    static BTOA_ASTERISK = JSF.Prop(JSF.Atob(JSF.Stringfy("0ir")), JSF[1]);
    static BTOA_COMMA = JSF.Prop(JSF.Atob(JSF.Stringfy("000s")), JSF[2]);
    static BTOA_COLON = JSF.Prop(JSF.Atob(JSF.Stringfy("000s")), JSF[2]);

    // :	A,I,c,g,o,s,0,4,8	6	j	o,r	O	g,i,j,l,m,n,o,r,s,t,u,v
    // ;	A,I,c,g,o,s,0,4,8	7	j	s,t,u,v	O	y,0,1,2,3,4,5,6,7,8,9,+
    // <	A,I,c,g,o,s,0,4,8	8	j	y		A,B,F,I,N,O
    // =	A,I,c,g,o,s,0,4,8	9	j	0,1,2,3		S,a,b,c,d,e,f
    // >	A,I,c,g,o,s,0,4,8	+	j	4,5,6,7		g,i,j,l,m,n,o,r,s,t,u,v
    // ?	A,I,c,g,o,s,0,4,8		j	8,9,+		y,0,1,2,3,4,5,6,7,8,9,+
    // @	B,F,N,d,l,t,1,5,9	A	0	A,B		A,B,F,I,N,O
    // "false0".italics() (Deprecated)
    // "<i>false0</i>" -> "<" ">" "/"
    static __italics = JSF.Stringfy("italics");
    static Italics = JSF.toFunc(JSF.Prop(JSF.false0, JSF.__italics));
    static _$lash = JSF.Prop(JSF.Italics, JSF._10);

    //
    static Atob_000v = JSF.Atob(JSF.Stringfy("000v"));
    static _Slash = JSF.Prop(JSF.Atob_000v, JSF[2]);

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

    static __try = JSF.Stringfy("try");
    static __catch = JSF.Stringfy("catch");

    static Error(s0 = "") {
        return JSF.Anonymous(JSF.Join(JSF.__try, JSF.toBrc(s0), JSF.__catch, JSF.toPar(JSF._f), JSF.toBrc(JSF.Join(JSF.__return, JSF._SPACE, JSF._f))));
    }
    static error = JSF.Error(JSF._t);

    // static __values = JSF.Join(JSF._v, JSF._a, JSF._l, JSF._u, JSF._e, JSF._s);
}

var tt, ba, pt;
window.onload = () => {
    try {
        tt = document.getElementById("text");
        pt = document.getElementById("props");
        ba = Object.getOwnPropertyNames(JSF).filter((arg) => {
            return typeof JSF[arg] !== "function" && JSF[arg].length !== undefined && JSF[arg] !== "JSF" && arg[0] !== "j";
        });
        ba.forEach((arg) => {
            tt.innerHTML += `<tr><td>${arg}</td><td><xmp>"${eval(JSF[arg])}"</xmp></td><td>${JSF[arg]}</td><td>${JSF[arg].length}</td></tr>`;
        });
        pt.innerHTML += Object.getOwnPropertyNames(JSF).sort();
    } catch (error) {
        // console.log(error);
    }
};
k = "";
v = !isNaN(parseInt(k));
// v = JSF.Prop(JSF.Btoa(JSF[0]), JSF[0]);
console.log(v);
console.log(eval(v));

console.log(typeof eval(v));
