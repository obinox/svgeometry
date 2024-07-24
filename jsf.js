class JSF {
    // basis
    static jPlus = "+";
    static jNot = "!";
    static jlP = "(";
    static jrP = ")";
    static jlB = "[";
    static jrB = "]";

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
    static toArr(s0 = "") {
        return JSF.jlB + s0 + JSF.jrB;
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
    static Stringify(s0 = "") {
        return JSF.Join(
            ...s0.split("").map((s1, i0) => {
                return !isNaN(parseInt(s1)) ? (i0 == 0 ? JSF[s1] : JSF.toArr(JSF[s1])) : JSF[`_${s1}`];
            })
        );
    }
    static getNum(n0 = 0) {
        return JSF.Stringify(n0.toString());
    }
    static string = JSF.Join(JSF.array, JSF.array);
    static toStr(s0 = "") {
        return JSF.Join(s0, JSF.array);
    }
    static Prop(s0, idx) {
        let b0 = false;
        try {
            b0 = eval(s0 + JSF.toArr(idx)) == eval(JSF.toObj(s0) + JSF.toArr(idx));
        } catch {}
        return (b0 ? s0 : JSF.toObj(s0)) + JSF.toArr(idx);
    }

    static boolean = JSF.toNot(JSF.array);

    // basic keyword
    static false = JSF.toNot(JSF.array);
    static true = JSF.toNot(JSF.false);
    static undefined = JSF.Prop(JSF.array, JSF.array);
    static NaN = JSF.toNum(JSF.toArr(JSF.false));

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
    static 10 = JSF.getNum(10);
    static 11 = JSF.getNum(11);
    static 12 = JSF.getNum(12);
    static 13 = JSF.getNum(13);
    static 20 = JSF.getNum(20);
    static 21 = JSF.getNum(21);
    static 30 = JSF.getNum(30);
    static 31 = JSF.getNum(31);
    static 32 = JSF.getNum(32);
    static 33 = JSF.getNum(33);
    static 34 = JSF.getNum(34);
    static 35 = JSF.getNum(35);
    static 36 = JSF.getNum(36);
    static 40 = JSF.getNum(40);
    static 63 = JSF.getNum(63);
    static 101 = JSF.getNum(101);
    static 211 = JSF.getNum(211);

    static false0 = JSF.Join(JSF.false, JSF.toArr(JSF[0]));

    // undefined -> "u" "n" "d" "i"
    // false -> "f" "a" "l" "s"
    // true -> "t" "r" "e"
    // NaN -> "N"
    static _u = JSF.Prop(JSF.toStr(JSF.undefined), JSF[0]);
    static _n = JSF.Prop(JSF.toStr(JSF.undefined), JSF[1]);
    static _d = JSF.Prop(JSF.toStr(JSF.undefined), JSF[2]);
    static _i = JSF.Prop(JSF.Join(JSF.toArr(JSF.false), JSF.undefined), JSF[10]);
    static _f = JSF.Prop(JSF.toStr(JSF.false), JSF[0]);
    static _a = JSF.Prop(JSF.toStr(JSF.false), JSF[1]);
    static _l = JSF.Prop(JSF.toStr(JSF.false), JSF[2]);
    static _s = JSF.Prop(JSF.toStr(JSF.false), JSF[3]);
    static _t = JSF.Prop(JSF.toStr(JSF.true), JSF[0]);
    static _r = JSF.Prop(JSF.toStr(JSF.true), JSF[1]);
    static _e = JSF.Prop(JSF.toStr(JSF.true), JSF[3]);
    static _N = JSF.Prop(JSF.toStr(JSF.NaN), JSF[0]);

    // Infinity -> "I" "y"
    // 1e+100 -> "+"
    // 1.1e+21 -> "."
    // 1e-7 -> "-"
    static Infinity = JSF.toNum(JSF.toObj(JSF.Stringify("1e1000")));
    static _1e100 = JSF.toNum(JSF.toObj(JSF.Stringify("1e100")));
    static _11e21 = JSF.toNum(JSF.toObj(JSF.Stringify("11e20")));

    static _I = JSF.Prop(JSF.toStr(JSF.Infinity), JSF[0]);
    static _y = JSF.Prop(JSF.Join(JSF.NaN, JSF.toArr(JSF.Infinity)), JSF[10]);

    static _PLUS = JSF.Prop(JSF.toStr(JSF._1e100), JSF[2]); //&plus;
    static _PERIOD = JSF.Prop(JSF.toStr(JSF._11e21), JSF[1]); //&period;

    static _1e7 = JSF.toNum(JSF.toObj(JSF.Join(JSF._PERIOD, JSF.toObj(JSF.Stringify("0000001")))));

    static _MINUS = JSF.Prop(JSF.toStr(JSF._1e7), JSF[2]); //&minus;

    // Array instance method
    static __at = JSF.Join(JSF._a, JSF._t);
    static At = JSF.Prop(JSF.array, JSF.__at);
    // function at() { [native code] } -> "c" "o" "v"
    // function at() { [native code] } -> " " "(" ")" "[" "]" "{" "}"
    static _c = JSF.Prop(JSF.toStr(JSF.At), JSF[3]);
    static _o = JSF.Prop(JSF.Join(JSF.true, JSF.At), JSF[10]);
    static _v = JSF.Prop(JSF.toStr(JSF.At), JSF[21]);

    static _SPACE = JSF.Prop(JSF.Join(JSF.false, JSF.At), JSF[20]); //&nbsp;
    static _LPAR = JSF.Prop(JSF.toStr(JSF.At), JSF[11]); //&lpar;
    static _RPAR = JSF.Prop(JSF.toStr(JSF.At), JSF[12]); //&rpar;
    static _LBRK = JSF.Prop(JSF.Join(JSF.true, JSF.At), JSF[20]); //&lbrack; &lsqb;
    static _RBRK = JSF.Prop(JSF.Join(JSF.NaN, JSF.At), JSF[31]); //&rbrack; &rsqb;
    static _LBRC = JSF.Prop(JSF.Join(JSF.false0, JSF.At), JSF[20]); //&lbrace; &lcub;
    static _RBRC = JSF.Prop(JSF.toStr(JSF.At), JSF[30]); //&rbrace; &rcub;
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

    static __constructor = JSF.Stringify("constructor");
    static __entries = JSF.Stringify("entries");
    static __self = JSF.Stringify("self");
    static __return = JSF.Stringify("return");

    static __flat = JSF.Stringify("flat");
    static __fill = JSF.Stringify("fill");
    static __find = JSF.Stringify("find");
    static __filter = JSF.Stringify("filter");
    static __function = JSF.Stringify("function");
    static __call = JSF.Stringify("call");
    static __concat = JSF.Stringify("concat");

    static __finally = JSF.Stringify("finally");
    static __if = JSF.Stringify("if");
    static __else = JSF.Stringify("else");
    static __for = JSF.Stringify("for");

    static _COMMA = JSF.Prop(JSF.toStr(JSF.toFunc(JSF.Prop(JSF.Prop(JSF.array, JSF.__flat), JSF.__call), JSF.toStr(JSF.false))), JSF[1]);

    // execute function
    // []["at"]["constructor"]("f0")() -> (() => {f0})()
    static Anonymous(f0 = "") {
        return JSF.toFunc(JSF.toFunc(JSF.Prop(JSF.Prop(JSF.array, JSF.__at), JSF.__constructor), f0));
    }
    // retrun value
    // []["at"]["constructor"]("return f0")() -> f0
    static Return(f0 = "", NOSPACE = false) {
        return JSF.Anonymous(JSF.Join(JSF.__return, ...(NOSPACE ? [f0] : [JSF._SPACE, f0])));
    }
    // Run function []["at"]["constructor"]("return f0")()("p0") -> f0(p0)
    static Execution(f0 = "", p0 = "") {
        return JSF.toFunc(JSF.Return(f0), p0);
    }

    // [object Object] -> "O"
    // [object Window] -> "W" "w"
    // [object Array Iterator] -> "b" "j" "A"
    // [object HTMLTableRowElement] -> "H" "T" "M" "L" "R"
    static Object = JSF.Return(JSF.jBrc, true);
    static Window = JSF.Return(JSF.__self);
    static Iterator = JSF.toFunc(JSF.Prop(JSF.array, JSF.__entries));
    static HTMLRow = JSF.Prop(JSF.Window, JSF.false);

    static OBJECT_O = JSF.Prop(JSF.Join(JSF.NaN, JSF.Object), JSF[11]);
    static OBJECT_W = JSF.Prop(JSF.Join(JSF.NaN, JSF.Window), JSF[11]);
    static OBJECT_w = JSF.Prop(JSF.toStr(JSF.Window), JSF[13]);
    static OBJECT_b = JSF.Prop(JSF.toStr(JSF.Iterator), JSF[2]);
    static OBJECT_j = JSF.Prop(JSF.toStr(JSF.Iterator), JSF[3]);
    static OBJECT_A = JSF.Prop(JSF.Join(JSF.NaN, JSF.Iterator), JSF[11]);
    static OBJECT_H = JSF.Prop(JSF.Join(JSF.NaN, JSF.HTMLRow), JSF[11]);
    static OBJECT_T = JSF.Prop(JSF.Join(JSF[0], JSF.HTMLRow), JSF[10]);
    static OBJECT_M = JSF.Prop(JSF.toStr(JSF.HTMLRow), JSF[10]);
    static OBJECT_L = JSF.Prop(JSF.toStr(JSF.HTMLRow), JSF[11]);
    static OBJECT_R = JSF.Prop(JSF.Join(JSF.NaN, JSF.HTMLRow), JSF[20]);
    static OBJECT_E = JSF.Prop(JSF.toStr(JSF.HTMLRow), JSF[20]);

    static _O = JSF.OBJECT_O;
    static _W = JSF.OBJECT_W;
    static _w = JSF.OBJECT_w;
    static _b = JSF.OBJECT_b;
    static _j = JSF.OBJECT_j;
    static _A = JSF.OBJECT_A;
    static _H = JSF.OBJECT_H;
    static _T = JSF.OBJECT_T;
    static _M = JSF.OBJECT_M;
    static _L = JSF.OBJECT_L;
    static _R = JSF.OBJECT_R;
    static _E = JSF.OBJECT_E;

    // array constructor -> Array Object
    // number constructor -> Number Object -> "m"
    // string constructor -> String Object -> "S" "g"
    // boolean constructor -> Boolean Object -> "B"
    // function constructor -> Function Object -> "F"
    static Array = JSF.Prop(JSF.array, JSF.__constructor);
    static Number = JSF.Prop(JSF.number, JSF.__constructor);
    static String = JSF.Prop(JSF.string, JSF.__constructor);
    static Boolean = JSF.Prop(JSF.boolean, JSF.__constructor);
    static Function = JSF.Prop(JSF.At, JSF.__constructor);

    static OBJECT_m = JSF.Prop(JSF.toStr(JSF.Number), JSF[11]);
    static OBJECT_S = JSF.Prop(JSF.Join(JSF[0], JSF.String), JSF[10]);
    static OBJECT_g = JSF.Prop(JSF.Join(JSF.false0, JSF.String), JSF[20]);
    static OBJECT_B = JSF.Prop(JSF.Join(JSF[0], JSF.Boolean), JSF[10]);
    static OBJECT_F = JSF.Prop(JSF.Join(JSF[0], JSF.Function), JSF[10]);

    static _m = JSF.OBJECT_m;
    static _S = JSF.OBJECT_S;
    static _g = JSF.OBJECT_g;
    static _B = JSF.OBJECT_B;
    static _F = JSF.OBJECT_F;

    // (String).name -> "String"
    // "to" + "String" -> "toString"
    static __name = JSF.Stringify("name");
    static __toString = JSF.Join(JSF._t, JSF._o, JSF.Prop(JSF.String, JSF.__name));

    // [object Undefined]
    static Undefined = JSF.Execution(JSF.__toString);
    static OBJECT_U = JSF.Prop(JSF.Join(JSF.NaN, JSF.Execution(JSF.__toString)), JSF[11]);

    // [object BarProp]
    static __statusbar = JSF.Stringify("statusbar");
    static BarProp = JSF.Return(JSF.__statusbar);
    static OBJECT_P = JSF.Prop(JSF.toStr(JSF.BarProp), JSF[11]);

    // btoa, atob function
    // base64 <- ascii
    static __btoa = JSF.Stringify("btoa");
    static Btoa(s0 = "", idx = "") {
        if (idx === "") {
            return JSF.Execution(JSF.__btoa, s0);
        } else {
            return JSF.Prop(JSF.Execution(JSF.__btoa, s0), idx);
        }
    }
    // ascii <- base64
    static __atob = JSF.Stringify("atob");
    static Atob(s0 = "", idx = "") {
        if (idx === "") {
            return JSF.Execution(JSF.__atob, s0);
        } else {
            return JSF.Prop(JSF.Execution(JSF.__atob, s0), idx);
        }
    }
    // toString base radix
    static Radix(i0, r0, idx = "") {
        if (typeof eval(i0) == "string") {
            i0 = JSF.toNum(JSF.toObj(i0));
        }
        if (idx === "") {
            return JSF.toFunc(JSF.Prop(i0, JSF.__toString), r0);
        } else {
            return JSF.Prop(JSF.toFunc(JSF.Prop(i0, JSF.__toString), r0), idx);
        }
    }

    static ATOB_EXCLAMATION = JSF.Atob(JSF.Join(JSF._I, JSF.false), JSF[0]); //&excl;
    static ATOB_QUOTATION = JSF.Atob(JSF.Stringify("000i"), JSF[2]); //&quot;
    static ATOB_NUMBER = JSF.Atob(JSF.Join(JSF.Stringify("0i"), JSF.toArr(JSF.NaN), JSF.false), JSF[1]); //&num;
    static ATOB_DOLLAR = JSF.Atob(JSF.Stringify("0iS"), JSF[1]); //&dollar;
    static ATOB_PERCENT = JSF.Atob(JSF.Stringify("000l"), JSF[2]); //&percnt;
    static ATOB_AMPERSAND = JSF.Atob(JSF.Stringify("0ia"), JSF[1]); //&amp;
    static ATOB_APOSTROPHE = JSF.Atob(JSF.Join(JSF.Stringify("0i"), JSF.false), JSF[1]); //&apos;
    static ATOB_ASTERISK = JSF.Atob(JSF.Stringify("0ir"), JSF[1]); //&ast;
    static ATOB_SLASH = JSF.Atob(JSF.Stringify("000v"), JSF[2]); //&sol;
    static ATOB_COLON = JSF.Atob(JSF.Stringify("0006"), JSF[2]); //&colon;
    static ATOB_SEMI = JSF.Atob(JSF.Stringify("0007"), JSF[2]); //&semi;
    static ATOB_LESS = JSF.Atob(JSF.Stringify("0008"), JSF[2]); //&lt;
    static ATOB_EQUALS = JSF.Atob(JSF.Stringify("0009"), JSF[2]); //&equals;
    static ATOB_GREATER = JSF.Atob(JSF.Join(JSF.Stringify("000"), JSF._PLUS), JSF[2]); //&gt;
    static ATOB_QUESTION = JSF.Atob(JSF.Stringify("0j8"), JSF[1]); //&quest;
    static ATOB_AT = JSF.Atob(JSF.Stringify("00A"), JSF[1]); //&commat;
    static ATOB_BACKSLASH = JSF.Atob(JSF.Stringify("001c"), JSF[2]); //&bsol;
    static ATOB_CIRCUMFLEX = JSF.Atob(JSF.Join(JSF.undefined, JSF.toArr(JSF.false)), JSF[2]); //&Hat;
    static ATOB_CARET = JSF.ATOB_CIRCUMFLEX; //&Hat;
    static ATOB_UNDERSCORE = JSF.Atob(JSF.Join(JSF.NaN, JSF.toArr(JSF.false)), JSF[2]); //&UnderBar;
    static ATOB_GRAVE = JSF.Atob(JSF.Stringify("02A"), JSF[1]); //&grave;
    static ATOB_BACKTICK = JSF.ATOB_GRAVE; //&grave;
    static ATOB_VERTICAL = JSF.Atob(JSF.Join(JSF._f, JSF.toArr(JSF.NaN)), JSF[0]); //&vert;
    static ATOB_TILDE = JSF.Atob(JSF.Join(JSF._f, JSF.undefined), JSF[0]);

    static ATOB_C = JSF.Atob(JSF.Join(JSF.Stringify("00"), JSF.toArr(JSF.NaN), JSF.false), JSF[1]);
    static ATOB_D = JSF.Atob(JSF.Stringify("00S"), JSF[1]);
    static ATOB_G = JSF.Atob(JSF.Join(JSF.Stringify("00"), JSF.toArr(JSF.false)), JSF[1]);
    static ATOB_J = JSF.Atob(JSF.Stringify("00r"), JSF[1]);
    static ATOB_K = JSF.Atob(JSF.Join(JSF.Stringify("00"), JSF.true), JSF[1]);
    static ATOB_P = JSF.Atob(JSF.Stringify("01A"), JSF[1]);
    static ATOB_Q = JSF.Atob(JSF.Stringify("01F"), JSF[1]);
    static ATOB_V = JSF.Atob(JSF.Stringify("01a"), JSF[1]);
    static ATOB_X = JSF.Atob(JSF.Stringify("01i"), JSF[1]);
    static ATOB_Y = JSF.Atob(JSF.Stringify("01n"), JSF[1]);
    static ATOB_Z = JSF.Atob(JSF.Stringify("01r"), JSF[1]);
    // static ATOB_Z1 = JSF.Atob(JSF.Join(JSF.Stringify("00"), JSF.toArr(JSF.NaN), JSF.toArr(JSF[0])), JSF[2]); //<-same length

    static ATOB_h = JSF.Atob(JSF.Join(JSF._a, JSF.toArr(JSF.NaN)), JSF[0]);
    static ATOB_k = JSF.Atob(JSF.Stringify("a0"));
    static ATOB_p = JSF.Atob(JSF.Join(JSF._c, JSF.toArr(JSF.NaN)), JSF[0]);
    static ATOB_q = JSF.Atob(JSF.Join(JSF._c, JSF.false), JSF[0]);
    static ATOB_x = JSF.Atob(JSF.Join(JSF._e, JSF.toArr(JSF.NaN)), JSF[0]);
    static ATOB_z = JSF.Atob(JSF.Join(JSF._e, JSF.undefined), JSF[0]);

    static BTOA_EQUALS = JSF.Btoa(JSF[0], JSF[2]);

    static BTOA_C = JSF.Btoa(JSF.Join(JSF[0], JSF._LPAR), JSF[1]);
    static BTOA_D = JSF.Btoa(JSF.Stringify("00"), JSF[1]);
    static BTOA_G = JSF.Btoa(JSF.Join(JSF.toArr(JSF[0]), JSF.false), JSF[1]);
    static BTOA_J = JSF.Btoa(JSF.true, JSF[2]);
    static BTOA_K = JSF.Btoa(JSF._PLUS, JSF[0]);
    static BTOA_P = JSF.Btoa(JSF.Stringify("00O"), JSF[3]);
    static BTOA_Q = JSF.Btoa(JSF[1], JSF[1]);
    static BTOA_U = JSF.Btoa(JSF.Join(JSF[1], JSF.toArr(JSF.NaN)), JSF[1]);
    static BTOA_V = JSF.Btoa(JSF.undefined, JSF[10]);
    static BTOA_X = JSF.Btoa(JSF.Join(JSF.toArr(JSF[1]), JSF.true), JSF[1]);
    static BTOA_Y = JSF.Btoa(JSF._a, JSF[0]);
    static BTOA_Z = JSF.Btoa(JSF.false, JSF[0]);

    static BTOA_h = JSF.Btoa(JSF.Join(JSF.toArr(JSF[0]), JSF.false), JSF[3]);
    static BTOA_k = JSF.Btoa(JSF.undefined, JSF[3]);
    static BTOA_p = JSF.Prop(JSF.Join(JSF.NaN, JSF.Btoa(JSF.undefined)), JSF[10]);
    static BTOA_q = JSF.Btoa(JSF.Stringify("00j"), JSF[3]);
    static BTOA_x = JSF.Btoa(JSF.Join(JSF.false, JSF.toArr(JSF.false)), JSF[10]);
    static BTOA_z = JSF.Btoa(JSF.Join(JSF.false, JSF.toArr(JSF.false)), JSF[11]);

    static RADIX_h = JSF.Radix(JSF[101], JSF[21], JSF[1]);
    static RADIX_k = JSF.Radix(JSF[20], JSF[21]);
    static RADIX_p = JSF.Radix(JSF[211], JSF[31], JSF[1]);
    static RADIX_v = JSF.Radix(JSF[31], JSF[32]);
    static RADIX_w = JSF.Radix(JSF[32], JSF[33]);
    static RADIX_x = JSF.Radix(JSF[101], JSF[34], JSF[1]);
    static RADIX_z = JSF.Radix(JSF[35], JSF[36]);

    static _h = JSF.BTOA_h;

    // "string".italics() (Deprecated)
    // "<i>string</i>" -> "<" ">" "/"
    // "string".fontcolor() (Deprecated)
    // "<font color="undefined">string</font>" -> "=" "\""
    // "<font color="<font color=&quot;undefined&quot;></font>"></font>" -> "&"
    // "<font color=true"<font color=&quot;undefined&quot;></font>"></font>" -> "q"
    static __italics = JSF.Stringify("italics");
    static Italics = JSF.toFunc(JSF.Prop(JSF.string, JSF.__italics));
    static Italics_PAD = JSF.toFunc(JSF.Prop(JSF.false0, JSF.__italics));
    static __fontcolor = JSF.Stringify("fontcolor");
    static Fontcolor = JSF.toFunc(JSF.Prop(JSF.string, JSF.__fontcolor));
    static Fontcolor_EMPTY = JSF.toFunc(JSF.Prop(JSF.string, JSF.__fontcolor), JSF.array);
    static Fontcolor_REC = JSF.toFunc(JSF.Prop(JSF.string, JSF.__fontcolor), JSF.Fontcolor);
    static Fontcolor_TRUEREC = JSF.toFunc(JSF.Prop(JSF.string, JSF.__fontcolor), JSF.Join(JSF.true, JSF.Fontcolor));
    static Fontcolor_EMPTYREC = JSF.toFunc(JSF.Prop(JSF.string, JSF.__fontcolor), JSF.Fontcolor_EMPTY);

    static ITALICS_LESS = JSF.Prop(JSF.Italics, JSF[0]);
    static ITALICS_GREATER = JSF.Prop(JSF.Italics, JSF[2]);
    static ITALICS_SLASH = JSF.Prop(JSF.Italics_PAD, JSF[10]);

    static FONT_EQUALS = JSF.Prop(JSF.Fontcolor, JSF[11]);
    static FONT_QUOTATION = JSF.Prop(JSF.Fontcolor, JSF[12]);
    static FONT_AMPERSAND = JSF.Prop(JSF.Fontcolor_EMPTYREC, JSF[31]);
    static FONT_SEMI = JSF.Prop(JSF.Fontcolor_REC, JSF[30]);
    static FONT_q = JSF.Prop(JSF.Fontcolor_TRUEREC, JSF[30]);

    static __try = JSF.Stringify("try");
    static __catch = JSF.Stringify("catch");

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
            tt.innerHTML += `<tr id="${arg}"><td>${arg}</td><td><xmp>"${eval(JSF[arg])}"</xmp></td><td class="jsf">${JSF[arg]}</td><td>${JSF[arg].length}</td></tr>`;
        });
        pt.innerHTML += Object.getOwnPropertyNames(JSF).sort();
    } catch (error) {
        // console.log(error);
    }
};
v = JSF.Infinity;
// v = JSF.Prop(JSF.Btoa(JSF[0]), JSF[0]);
console.log(v);
console.log(eval(v));

console.log(typeof eval(v));
