/**
 * core class
 */
class CORE {
    static get nb() {
        return "+";
    }
    static get nt() {
        return "!";
    }
    static get lp() {
        return "(";
    }
    static get rp() {
        return ")";
    }
    static get lb() {
        return "[";
    }
    static get rb() {
        return "]";
    }

    // small application
    static get par() {
        return this.lp + this.rp;
    } // ()
    static get brk() {
        return this.lb + this.rb;
    } // []
    static #toObj($0 = "") {
        return this.lp + $0 + this.rp;
    }
    static #toFunc($0 = "", $1) {
        return $0 + this.toObj($1);
    }

    // objects

    static #toArr($0) {
        return this.lb + $0 + this.rb;
    }
    static #toNum($0) {
        return this.nb + $0;
    }
    static #toNot($0) {
        return this.nt + $0;
    }
    static #Join(...$0) {
        return $0.join(this.nb);
    }
    static #Strify($0) {
        return this.Join(
            ...$0
                .toString()
                .split("")
                .map((_0, _i) => (!isNaN(parseInt(_0)) ? (_i == 0 ? this[_0] : this.toArr(this[_0])) : (this[_0] ?? this["_" + _0])))
        );
    }
    static #string = this.Join(this.array, this.array);
    static #toStr($0) {
        return this.Join($0, this.array);
    }
    static #Prop($0, $i) {
        let _0 = false;
        try {
            _0 = eval($0 + this.toArr($i)) == eval(this.toObj($0) + this.toArr($i));
        } catch {}
        return (_0 ? $0 : this.toObj($0)) + this.toArr($i);
    }

    static #boolean = this.toNot(this.array);

    // basic keyword
    static #false = this.toNot(this.array);
    static #true = this.toNot(this.false);
    static #undefined = this.Prop(this.array, this.array);
    static #NaN = this.toNum(this.toArr(this.false));

    // numbers
    static #_0 = this.toNum(this.array);
    static #_1 = this.toNum(this.true);
    static #_2 = this.Join(...Array(2).fill(this.true));
    static #_3 = this.Join(...Array(3).fill(this.true));
    static #_4 = this.Join(...Array(4).fill(this.true));
    static #_5 = this.Join(...Array(5).fill(this.true));
    static #_6 = this.Join(...Array(6).fill(this.true));
    static #_7 = this.Join(...Array(7).fill(this.true));
    static #_8 = this.Join(...Array(8).fill(this.true));
    static #_9 = this.Join(...Array(9).fill(this.true));
    static #_10 = this.Strify(10);
    static #_11 = this.Strify(11);
    static #_12 = this.Strify(12);
    static #_13 = this.Strify(13);
    static #_20 = this.Strify(20);
    static #_21 = this.Strify(21);
    static #_30 = this.Strify(30);
    static #_31 = this.Strify(31);
    static #_32 = this.Strify(32);
    static #_33 = this.Strify(33);
    static #_34 = this.Strify(34);
    static #_35 = this.Strify(35);
    static #_36 = this.Strify(36);
    static #_101 = this.Strify(101);
    static #_211 = this.Strify(211);

    static #false0 = this.Join(this.false, this.toArr(this[0]));
    static get false0() {
        return this.#false0;
    }
    // undefined -> "u" "n" "d" "i"
    // false -> "f" "a" "l" "s"
    // true -> "t" "r" "e"
    // NaN -> "N"
    static #_u = this.Prop(this.toStr(this.undefined), this[0]);
    static #_n = this.Prop(this.toStr(this.undefined), this[1]);
    static #_d = this.Prop(this.toStr(this.undefined), this[2]);
    static #_i = this.Prop(this.Join(this.toArr(this.false), this.undefined), this[10]);
    static #_f = this.Prop(this.toStr(this.false), this[0]);
    static #_a = this.Prop(this.toStr(this.false), this[1]);
    static #_l = this.Prop(this.toStr(this.false), this[2]);
    static #_s = this.Prop(this.toStr(this.false), this[3]);
    static #_t = this.Prop(this.toStr(this.true), this[0]);
    static #_r = this.Prop(this.toStr(this.true), this[1]);
    static #_e = this.Prop(this.toStr(this.true), this[3]);
    static #_N = this.Prop(this.toStr(this.NaN), this[0]);

    // Infinity -> "I" "y"
    // 1e+100 -> "+"
    // 1.1e+21 -> "."
    // 1e-7 -> "-"
    static #Infinity = this.toNum(this.toObj(this.Strify("1e1000")));
    static #_I = this.Prop(this.toStr(this.Infinity), this[0]);
    static #_y = this.Prop(this.Join(this.NaN, this.toArr(this.Infinity)), this[10]);

    static #_1e100 = this.toNum(this.toObj(this.Strify("1e100")));
    static #_PLUS = this.Prop(this.toStr(this._1e100), this[2]); //&plus;

    static #_11e21 = this.toNum(this.toObj(this.Strify("11e20")));
    static #_PERIOD = this.Prop(this.toStr(this._11e21), this[1]); //&period;

    static #_1e7 = this.toNum(this.toObj(this.Join(this._PERIOD, this.toObj(this.Strify("0000001")))));
    static #_MINUS = this.Prop(this.toStr(this._1e7), this[2]); //&minus;

    // Array.prototype.at
    static __at = this.Join(this._a, this._t);
    static At = this.Prop(this.array, this.__at);
    // function at() { [native code] } -> "c" "o" "v"
    // function at() { [native code] } -> " " "(" ")" "[" "]" "{" "}"
    static _c = this.Prop(this.toStr(this.At), this[3]);
    static _o = this.Prop(this.Join(this.true, this.At), this[10]);
    static _v = this.Prop(this.toStr(this.At), this[21]);

    static _SPACE = this.Prop(this.Join(this.false, this.At), this[20]); //&nbsp;
    static _LPAR = this.Prop(this.toStr(this.At), this[11]); //&lpar;
    static _RPAR = this.Prop(this.toStr(this.At), this[12]); //&rpar;
    static _LBRK = this.Prop(this.Join(this.true, this.At), this[20]); //&lbrack; &lsqb;
    static _RBRK = this.Prop(this.Join(this.NaN, this.At), this[31]); //&rbrack; &rsqb;
    static _LBRC = this.Prop(this.Join(this.false0, this.At), this[20]); //&lbrace; &lcub;
    static _RBRC = this.Prop(this.toStr(this.At), this[30]); //&rbrace; &rcub;
    static _BRC = this.Join(this._LBRC, this._RBRC);

    // "($0)"
    static toPar($0) {
        return this.Join(this._LPAR, $0, this._RPAR);
    }
    // "{$0}"
    static toBrc($0) {
        return this.Join(this._LBRC, $0, this._RBRC);
    }

    static __constructor = this.Strify("constructor");
    static __entries = this.Strify("entries");
    static __self = this.Strify("self");
    static __return = this.Strify("return");

    // "f,a,l,s,e" -> ","
    // []["flat"]["call"]("false")[1]
    static __flat = this.Strify("flat");
    static __call = this.Strify("call");
    static CALL_COMMA = this.Prop(this.toStr(this.toFunc(this.Prop(this.Prop(this.array, this.__flat), this.__call), this.toStr(this.false))), this[1]);

    // execute function
    // []["at"]["constructor"]("$0")() -> (() => {$0})()
    static Anonymous($0) {
        return this.toFunc(this.toFunc(this.Prop(this.Prop(this.array, this.__at), this.__constructor), $0));
    }
    static AnonymousDebug($0) {
        return this.toFunc(this.Prop(this.Prop(this.array, this.__at), this.__constructor), $0);
    }
    // retrun value
    // []["at"]["constructor"]("return $0")() -> $0
    static Return($0, $SP = false) {
        return this.Anonymous(this.Join(this.__return, ...($SP ? [$0] : [this._SPACE, $0])));
    }
    // Run function []["at"]["constructor"]("return $0")()("$1") -> $0($1)
    static Execution($0, $1) {
        return this.toFunc(this.Return($0), $1);
    }

    // [object Object] -> "O"
    // [object Window] -> "W" "w"
    // [object Array Iterator] -> "b" "j" "A"
    // [object HTMLTableRowElement] -> "H" "T" "M" "L" "R"
    static Object = this.Return(this._BRC, true);
    static Window = this.Return(this.__self);
    static Iterator = this.toFunc(this.Prop(this.array, this.__entries));

    static OBJECT_O = this.Prop(this.Join(this.NaN, this.Object), this[11]);
    static OBJECT_W = this.Prop(this.Join(this.NaN, this.Window), this[11]);
    static OBJECT_w = this.Prop(this.toStr(this.Window), this[13]);
    static OBJECT_b = this.Prop(this.toStr(this.Iterator), this[2]);
    static OBJECT_j = this.Prop(this.toStr(this.Iterator), this[3]);
    static OBJECT_A = this.Prop(this.Join(this.NaN, this.Iterator), this[11]);

    // array constructor -> Array Object
    // number constructor -> Number Object -> "m"
    // string constructor -> String Object -> "S" "g"
    // boolean constructor -> Boolean Object -> "B"
    // function constructor -> Function Object -> "F"
    static Array = this.Prop(this.array, this.__constructor);
    static Number = this.Prop(this.number, this.__constructor);
    static String = this.Prop(this.string, this.__constructor);
    static Boolean = this.Prop(this.boolean, this.__constructor);
    static Function = this.Prop(this.At, this.__constructor);

    static CONST_LINEFEED = this.Prop(this.Join(this[0], this.toFunc(this.Function)), this[20]);
    static CONST_m = this.Prop(this.toStr(this.Number), this[11]);
    static CONST_S = this.Prop(this.Join(this[0], this.String), this[10]);
    static CONST_g = this.Prop(this.Join(this.false0, this.String), this[20]);
    static CONST_B = this.Prop(this.Join(this[0], this.Boolean), this[10]);
    static CONST_F = this.Prop(this.Join(this[0], this.Function), this[10]);

    static _O = this.OBJECT_O;
    static _b = this.OBJECT_b;
    static _j = this.OBJECT_j;
    static _A = this.OBJECT_A;
    static _m = this.CONST_m;
    static _g = this.CONST_g;
    static _S = this.CONST_S;
    static _F = this.CONST_F;

    // (String).name -> "String"
    // "to" + "String" -> "toString"
    static __name = this.Strify("name");
    static __toString = this.Join(this._t, this._o, this.Prop(this.String, this.__name));

    // [object Undefined]
    static Undefined = this.Execution(this.__toString);
    static OBJECT_U = this.Prop(this.Join(this.NaN, this.Undefined), this[11]);

    // [object BarProp]
    static __statusbar = this.Strify("statusbar");
    static BarProp = this.Return(this.__statusbar);
    static OBJECT_P = this.Prop(this.toStr(this.BarProp), this[11]);

    // btoa, atob function
    // base64 <- ascii
    static __btoa = this.Strify("btoa");
    static Btoa($0, $i) {
        if ($i === undefined) {
            return this.Execution(this.__btoa, $0);
        } else {
            return this.Prop(this.Execution(this.__btoa, $0), $i);
        }
    }
    // ascii <- base64
    static __atob = this.Strify("atob");
    static Atob($0, $i) {
        if ($i === undefined) {
            return this.Execution(this.__atob, $0);
        } else {
            return this.Prop(this.Execution(this.__atob, $0), $i);
        }
    }
    // toString base radix
    static Radix($0, $1, $i) {
        if (typeof eval($0) == "string") {
            $0 = this.toNum(this.toObj($0));
        }
        if ($i === undefined) {
            return this.toFunc(this.Prop($0, this.__toString), $1);
        } else {
            return this.Prop(this.toFunc(this.Prop($0, this.__toString), $1), $i);
        }
    }

    static ATOB_EXCLAMATION = this.Atob(this.Join(this._I, this.false), this[0]); //&excl;
    static ATOB_QUOTATION = this.Atob(this.Strify("000i"), this[2]); //&quot;
    static ATOB_NUMBER = this.Atob(this.Join(this.Strify("0i"), this.toArr(this.NaN), this.false), this[1]); //&num;
    static ATOB_DOLLAR = this.Atob(this.Strify("0iS"), this[1]); //&dollar;
    static ATOB_PERCENT = this.Atob(this.Strify("000l"), this[2]); //&percnt;
    static ATOB_AMPERSAND = this.Atob(this.Strify("0ia"), this[1]); //&amp;
    static ATOB_APOSTROPHE = this.Atob(this.Join(this.Strify("0i"), this.false), this[1]); //&apos;
    static ATOB_ASTERISK = this.Atob(this.Strify("0ir"), this[1]); //&ast;
    static ATOB_SLASH = this.Atob(this.Strify("000v"), this[2]); //&sol;
    static ATOB_COLON = this.Atob(this.Strify("0006"), this[2]); //&colon;
    static ATOB_SEMI = this.Atob(this.Strify("0007"), this[2]); //&semi;
    static ATOB_LESS = this.Atob(this.Strify("0008"), this[2]); //&lt;
    static ATOB_EQUALS = this.Atob(this.Strify("0009"), this[2]); //&equals;
    static ATOB_GREATER = this.Atob(this.Join(this.Strify("000"), this._PLUS), this[2]); //&gt;
    static ATOB_QUESTION = this.Atob(this.Strify("0j8"), this[1]); //&quest;
    static ATOB_AT = this.Atob(this.Strify("00A"), this[1]); //&commat;
    static ATOB_BACKSLASH = this.Atob(this.Strify("001c"), this[2]); //&bsol;
    static ATOB_CARET = this.Atob(this.Join(this.undefined, this.toArr(this.false)), this[2]); //&Hat;
    static ATOB_UNDERSCORE = this.Atob(this.Join(this.NaN, this.toArr(this.false)), this[2]); //&UnderBar;
    static ATOB_GRAVE = this.Atob(this.Strify("02A"), this[1]); //&grave;
    static ATOB_VERTICAL = this.Atob(this.Join(this._f, this.toArr(this.NaN)), this[0]); //&vert;
    static ATOB_TILDE = this.Atob(this.Join(this._f, this.undefined), this[0]);

    static ATOB_C = this.Atob(this.Join(this.Strify("00"), this.toArr(this.NaN), this.false), this[1]);
    static ATOB_D = this.Atob(this.Strify("00S"), this[1]);
    static ATOB_E = this.Atob(this.Strify("001"), this[2]);
    static ATOB_G = this.Atob(this.Join(this.Strify("00"), this.false), this[1]);
    static ATOB_H = this.Atob(this.Join(this.Strify("001"), this.toArr(this.Infinity)), this[2]);
    static ATOB_J = this.Atob(this.Strify("00r"), this[1]);
    static ATOB_K = this.Atob(this.Join(this.Strify("00"), this.true), this[1]);
    static ATOB_L = this.Atob(this.Strify("00y"), this[1]);
    static ATOB_M = this.Atob(this.Strify("000"), this[1]);
    static ATOB_P = this.Atob(this.Strify("01A"), this[1]);
    static ATOB_Q = this.Atob(this.Strify("01F"), this[1]);
    static ATOB_R = this.Atob(this.Join(this.Strify("01"), this.toArr(this.Infinity)), this[1]);
    static ATOB_T = this.Atob(this.Strify("01S"), this[1]);
    static ATOB_V = this.Atob(this.Strify("01a"), this[1]);
    static ATOB_W = this.Atob(this.Join(this.Strify("01"), this.false), this[1]);
    static ATOB_X = this.Atob(this.Strify("01i"), this[1]);
    static ATOB_Y = this.Atob(this.Strify("01n"), this[1]);
    static ATOB_Z = this.Atob(this.Strify("01r"), this[1]);
    // static ATOB_Z1 = this.Atob(this.Join(this.Stringify("00"), this.toArr(this.NaN), this.toArr(this[0])), this[2]); //<-same length

    static ATOB_h = this.Atob(this.Join(this._a, this.toArr(this.NaN)), this[0]);
    static ATOB_k = this.Atob(this.Strify("a0"));
    static ATOB_p = this.Atob(this.Join(this._c, this.toArr(this.NaN)), this[0]);
    static ATOB_q = this.Atob(this.Join(this._c, this.false), this[0]);
    static ATOB_x = this.Atob(this.Join(this._e, this.toArr(this.NaN)), this[0]);
    static ATOB_z = this.Atob(this.Join(this._e, this.undefined), this[0]);

    static BTOA_EQUALS = this.Btoa(this[0], this[2]);

    static BTOA_C = this.Btoa(this.Join(this[0], this._LPAR), this[1]);
    static BTOA_D = this.Btoa(this.Strify("00"), this[1]);
    static BTOA_E = this.Btoa(this.Join(this.Strify("0"), this.toArr(this.NaN)), this[1]);
    static BTOA_G = this.Btoa(this.Join(this.toArr(this[0]), this.false), this[1]);
    static BTOA_H = this.Btoa(this.true, this[1]);
    static BTOA_J = this.Btoa(this.true, this[2]);
    static BTOA_K = this.Btoa(this._PLUS, this[0]);
    static BTOA_L = this.Btoa(this._PERIOD, this[0]);
    static BTOA_M = this.Btoa(this[0], this[0]);
    static BTOA_P = this.Btoa(this.Object, this[11]);
    static BTOA_Q = this.Btoa(this[1], this[1]);
    static BTOA_R = this.Btoa(this.Join(this.toArr(this[0]), this.true), this[2]);
    static BTOA_T = this.Btoa(this.NaN, this[0]);
    static BTOA_U = this.Btoa(this.Join(this[1], this.toArr(this.NaN)), this[1]);
    static BTOA_V = this.Btoa(this.undefined, this[10]);
    static BTOA_W = this.Btoa(this.undefined, this[1]);
    static BTOA_X = this.Btoa(this.Join(this.toArr(this[1]), this.true), this[1]);
    static BTOA_Y = this.Btoa(this._a, this[0]);
    static BTOA_Z = this.Btoa(this.false, this[0]);

    static BTOA_h = this.Btoa(this.Join(this.toArr(this[0]), this.false), this[3]);
    static BTOA_k = this.Btoa(this.undefined, this[3]);
    static BTOA_p = this.Prop(this.Join(this.NaN, this.Btoa(this.undefined)), this[10]);
    static BTOA_q = this.Btoa(this.Strify("00j"), this[3]);
    static BTOA_x = this.Btoa(this.Join(this.false, this.toArr(this.false)), this[10]);
    static BTOA_z = this.Btoa(this.Join(this.false, this.toArr(this.false)), this[11]);

    static RADIX_h = this.Radix(this[101], this[21], this[1]);
    static RADIX_k = this.Radix(this[20], this[21]);
    static RADIX_p = this.Radix(this[211], this[31], this[1]);
    static RADIX_v = this.Radix(this[31], this[32]);
    static RADIX_w = this.Radix(this[32], this[33]);
    static RADIX_x = this.Radix(this[101], this[34], this[1]);
    static RADIX_z = this.Radix(this[35], this[36]);

    // "string".italics() (Deprecated)
    // "<i>string</i>" -> "<" ">" "/"
    // "string".fontcolor() (Deprecated)
    // "<font color="undefined">string</font>" -> "=" "\""
    // "<font color="<font color=&quot;undefined&quot;></font>"></font>" -> "&"
    // "<font color=true"<font color=&quot;undefined&quot;></font>"></font>" -> "q"
    static __italics = this.Strify("italics");
    static Italics = this.toFunc(this.Prop(this.string, this.__italics));
    static Italics_Pad = this.toFunc(this.Prop(this.false0, this.__italics));
    static __fontcolor = this.Strify("fontcolor");
    static Fontcolor = this.toFunc(this.Prop(this.string, this.__fontcolor));
    static Fontcolor_Empty = this.toFunc(this.Prop(this.string, this.__fontcolor), this.array);
    static Fontcolor_Font = this.toFunc(this.Prop(this.string, this.__fontcolor), this.Fontcolor);
    static Fontcolor_True_Font = this.toFunc(this.Prop(this.string, this.__fontcolor), this.Join(this.true, this.Fontcolor));
    static Fontcolor_Empty_Font = this.toFunc(this.Prop(this.string, this.__fontcolor), this.Fontcolor_Empty);

    static ITALICS_LESS = this.Prop(this.Italics, this[0]);
    static ITALICS_GREATER = this.Prop(this.Italics, this[2]);
    static ITALICS_SLASH = this.Prop(this.Italics_Pad, this[10]);

    static FONT_EQUALS = this.Prop(this.Fontcolor, this[11]);
    static FONT_QUOTATION = this.Prop(this.Fontcolor, this[12]);
    static FONT_AMPERSAND = this.Prop(this.Fontcolor_Empty_Font, this[31]);
    static FONT_SEMI = this.Prop(this.Fontcolor_Font, this[30]);
    static FONT_q = this.Prop(this.Fontcolor_True_Font, this[30]);

    static Compare($0 = "") {
        let props = Object.getOwnPropertyNames(this).filter((arg) => {
            return arg.endsWith("_" + $0) && typeof this[arg] !== "function" && this[arg].length !== undefined;
        });
        if (props.length > 0) {
            return props
                .map((e) => {
                    return this[e];
                })
                .sort((a, b) => a.length - b.length)[0];
        } else {
            return undefined;
        }
    }
    static get test() {
        return function (a) {
            console.log(a);
        };
    }

    static get toObj() {
        return this.#toObj;
    }
    static get toFunc() {
        return this.#toFunc;
    }
    static get toArr() {
        return this.#toArr;
    }
    static get toNum() {
        return this.#toNum;
    }
    static get toNot() {
        return this.#toNot;
    }
    static get Join() {
        return this.#Join;
    }
    static get Strify() {
        return this.#Strify;
    }
    static get toStr() {
        return this.#toStr;
    }
    static get Prop() {
        return this.#Prop;
    }

    static get array() {
        return this.brk;
    }
    static get number() {
        return this.nb + this.array;
    }
    static get string() {
        return this.#string;
    }
    static get boolean() {
        return this.#boolean;
    }
    static get false() {
        return this.#false;
    }
    static get true() {
        return this.#true;
    }
    static get undefined() {
        return this.#undefined;
    }
    static get NaN() {
        return this.#NaN;
    }
    static get Infinity() {
        return this.#Infinity;
    }

    static get _PLUS() {
        return this.#_PLUS;
    }
    static get _MINUS() {
        return this.#_MINUS;
    }
    static get _PERIOD() {
        return this.#_PERIOD;
    }

    static get 0() {
        return this.#_0;
    }
    static get 1() {
        return this.#_1;
    }
    static get 2() {
        return this.#_2;
    }
    static get 3() {
        return this.#_3;
    }
    static get 4() {
        return this.#_4;
    }
    static get 5() {
        return this.#_5;
    }
    static get 6() {
        return this.#_6;
    }
    static get 7() {
        return this.#_7;
    }
    static get 8() {
        return this.#_8;
    }
    static get 9() {
        return this.#_9;
    }
    static get 10() {
        return this.#_10;
    }
    static get 11() {
        return this.#_11;
    }
    static get 12() {
        return this.#_12;
    }
    static get 13() {
        return this.#_13;
    }
    static get 20() {
        return this.#_20;
    }
    static get 21() {
        return this.#_21;
    }
    static get 30() {
        return this.#_30;
    }
    static get 31() {
        return this.#_31;
    }
    static get 32() {
        return this.#_32;
    }
    static get 33() {
        return this.#_33;
    }
    static get 34() {
        return this.#_34;
    }
    static get 35() {
        return this.#_35;
    }
    static get 36() {
        return this.#_36;
    }
    static get 101() {
        return this.#_101;
    }
    static get 211() {
        return this.#_211;
    }

    static get _N() {
        return this.#_N;
    }
    static get _I() {
        return this.#_I;
    }

    static get _a() {
        return this.#_a;
    }
    static get _d() {
        return this.#_d;
    }
    static get _e() {
        return this.#_e;
    }
    static get _f() {
        return this.#_f;
    }
    static get _i() {
        return this.#_i;
    }
    static get _l() {
        return this.#_l;
    }
    static get _n() {
        return this.#_n;
    }
    static get _r() {
        return this.#_r;
    }
    static get _s() {
        return this.#_s;
    }
    static get _t() {
        return this.#_t;
    }
    static get _u() {
        return this.#_u;
    }
    static get _y() {
        return this.#_y;
    }

    static get _1e100() {
        return this.#_1e100;
    }
    static get _11e21() {
        return this.#_11e21;
    }
    static get _1e7() {
        return this.#_1e7;
    }
}
// Object.defineProperties(CORE, { writeable: false, enumerable: true, configurable: false });
console.log(Object.getOwnPropertyDescriptors(CORE));

/**
 * jsf
 */
class JSF {
    static #basis = RegExp(/^[\+\!\(\)\[\]]+$/g);
    static regexp($0) {
        return this.#basis.test($0);
    }

    static #LINEFEED = CORE.Compare("LINEFEED");
    static get ["\n"]() {
        return this.#LINEFEED;
    }
    static #SPACE = CORE.Compare("SPACE");
    static get [" "]() {
        return this.#SPACE;
    }
    static #EXCLAMATION = CORE.Compare("EXCLAMATION");
    static get ["!"]() {
        return this.#EXCLAMATION;
    }
    static #QUOTATION = CORE.Compare("QUOTATION");
    static get ['"']() {
        try {
            return this.#QUOTATION;
        } catch {}
    }
    static #NUMBER = CORE.Compare("NUMBER");
    static get ["#"]() {
        return this.#NUMBER;
    }
    static #DOLLAR = CORE.Compare("DOLLAR");
    static get ["$"]() {
        return this.#DOLLAR;
    }
    static #PERCENT = CORE.Compare("PERCENT");
    static get ["%"]() {
        return this.#PERCENT;
    }
    static #AMPERSAND = CORE.Compare("AMPERSAND");
    static get ["&"]() {
        return this.#AMPERSAND;
    }
    static #APOSTROPHE = CORE.Compare("APOSTROPHE");
    static get ["'"]() {
        return this.#APOSTROPHE;
    }
    static #LPAR = CORE.Compare("LPAR");
    static get ["("]() {
        return this.#LPAR;
    }
    static #RPAR = CORE.Compare("RPAR");
    static get [")"]() {
        return this.#RPAR;
    }
    static #ASTERISK = CORE.Compare("ASTERISK");
    static get ["*"]() {
        return this.#ASTERISK;
    }
    static #PLUS = CORE.Compare("PLUS");
    static get ["+"]() {
        return this.#PLUS;
    }
    static #COMMA = CORE.Compare("COMMA");
    static get [","]() {
        return this.#COMMA;
    }
    static #MINUS = CORE.Compare("MINUS");
    static get ["-"]() {
        return this.#MINUS;
    }
    static #PERIOD = CORE.Compare("PERIOD");
    static get ["."]() {
        return this.#PERIOD;
    }
    static #SLASH = CORE.Compare("SLASH");
    static get ["/"]() {
        return this.#SLASH;
    }
    static #_0 = CORE[0];
    static get [0]() {
        return this.#_0;
    }
    static #_1 = CORE[1];
    static get [1]() {
        return this.#_1;
    }
    static #_2 = CORE[2];
    static get [2]() {
        return this.#_2;
    }
    static #_3 = CORE[3];
    static get [3]() {
        return this.#_3;
    }
    static #_4 = CORE[4];
    static get [4]() {
        return this.#_4;
    }
    static #_5 = CORE[5];
    static get [5]() {
        return this.#_5;
    }
    static #_6 = CORE[6];
    static get [6]() {
        return this.#_6;
    }
    static #_7 = CORE[7];
    static get [7]() {
        return this.#_7;
    }
    static #_8 = CORE[8];
    static get [8]() {
        return this.#_8;
    }
    static #_9 = CORE[9];
    static get [9]() {
        return this.#_9;
    }
    static #COLON = CORE.Compare("COLON");
    static get [":"]() {
        return this.#COLON;
    }
    static #SEMI = CORE.Compare("SEMI");
    static get [";"]() {
        return this.#SEMI;
    }
    static #LESS = CORE.Compare("LESS");
    static get ["<"]() {
        return this.#LESS;
    }
    static #EQUALS = CORE.Compare("EQUALS");
    static get ["="]() {
        return this.#EQUALS;
    }
    static #GREATER = CORE.Compare("GREATER");
    static get [">"]() {
        return this.#GREATER;
    }
    static #QUESTION = CORE.Compare("QUESTION");
    static get ["?"]() {
        return this.#QUESTION;
    }
    static #AT = CORE.Compare("AT");
    static get ["@"]() {
        return this.#AT;
    }
    static #A = CORE.Compare("A");
    static get ["A"]() {
        return this.#A;
    }
    static #B = CORE.Compare("B");
    static get ["B"]() {
        return this.#B;
    }
    static #C = CORE.Compare("C");
    static get ["C"]() {
        return this.#C;
    }
    static #D = CORE.Compare("D");
    static get ["D"]() {
        return this.#D;
    }
    static #E = CORE.Compare("E");
    static get ["E"]() {
        return this.#E;
    }
    static #F = CORE.Compare("F");
    static get ["F"]() {
        return this.#F;
    }
    static #G = CORE.Compare("G");
    static get ["G"]() {
        return this.#G;
    }
    static #H = CORE.Compare("H");
    static get ["H"]() {
        return this.#H;
    }
    static #I = CORE.Compare("I");
    static get ["I"]() {
        return this.#I;
    }
    static #J = CORE.Compare("J");
    static get ["J"]() {
        return this.#J;
    }
    static #K = CORE.Compare("K");
    static get ["K"]() {
        return this.#K;
    }
    static #L = CORE.Compare("L");
    static get ["L"]() {
        return this.#L;
    }
    static #M = CORE.Compare("M");
    static get ["M"]() {
        return this.#M;
    }
    static #N = CORE.Compare("N");
    static get ["N"]() {
        return this.#N;
    }
    static #O = CORE.Compare("O");
    static get ["O"]() {
        return this.#O;
    }
    static #P = CORE.Compare("P");
    static get ["P"]() {
        return this.#P;
    }
    static #Q = CORE.Compare("Q");
    static get ["Q"]() {
        return this.#Q;
    }
    static #R = CORE.Compare("R");
    static get ["R"]() {
        return this.#R;
    }
    static #S = CORE.Compare("S");
    static get ["S"]() {
        return this.#S;
    }
    static #T = CORE.Compare("T");
    static get ["T"]() {
        return this.#T;
    }
    static #U = CORE.Compare("U");
    static get ["U"]() {
        return this.#U;
    }
    static #V = CORE.Compare("V");
    static get ["V"]() {
        return this.#V;
    }
    static #W = CORE.Compare("W");
    static get ["W"]() {
        return this.#W;
    }
    static #X = CORE.Compare("X");
    static get ["X"]() {
        return this.#X;
    }
    static #Y = CORE.Compare("Y");
    static get ["Y"]() {
        return this.#Y;
    }
    static #Z = CORE.Compare("Z");
    static get ["Z"]() {
        return this.#Z;
    }
    static #LBRK = CORE.Compare("LBRK");
    static get ["["]() {
        return this.#LBRK;
    }
    static #BACKSLASH = CORE.Compare("BACKSLASH");
    static get ["\\"]() {
        return this.#BACKSLASH;
    }
    static #RBRK = CORE.Compare("RBRK");
    static get ["]"]() {
        return this.#RBRK;
    }
    static #CARET = CORE.Compare("CARET");
    static get ["^"]() {
        return this.#CARET;
    }
    static #UNDERSCORE = CORE.Compare("UNDERSCORE");
    static get ["_"]() {
        return this.#UNDERSCORE;
    }
    static #GRAVE = CORE.Compare("GRAVE");
    static get ["`"]() {
        return this.#GRAVE;
    }
    static #a = CORE.Compare("a");
    static get ["a"]() {
        return this.#a;
    }
    static #b = CORE.Compare("b");
    static get ["b"]() {
        return this.#b;
    }
    static #c = CORE.Compare("c");
    static get ["c"]() {
        return this.#c;
    }
    static #d = CORE.Compare("d");
    static get ["d"]() {
        return this.#d;
    }
    static #e = CORE.Compare("e");
    static get ["e"]() {
        return this.#e;
    }
    static #f = CORE.Compare("f");
    static get ["f"]() {
        return this.#f;
    }
    static #g = CORE.Compare("g");
    static get ["g"]() {
        return this.#g;
    }
    static #h = CORE.Compare("h");
    static get ["h"]() {
        return this.#h;
    }
    static #i = CORE.Compare("i");
    static get ["i"]() {
        return this.#i;
    }
    static #j = CORE.Compare("j");
    static get ["j"]() {
        return this.#j;
    }
    static #k = CORE.Compare("k");
    static get ["k"]() {
        return this.#k;
    }
    static #l = CORE.Compare("l");
    static get ["l"]() {
        return this.#l;
    }
    static #m = CORE.Compare("m");
    static get ["m"]() {
        return this.#m;
    }
    static #n = CORE.Compare("n");
    static get ["n"]() {
        return this.#n;
    }
    static #o = CORE.Compare("o");
    static get ["o"]() {
        return this.#o;
    }
    static #p = CORE.Compare("p");
    static get ["p"]() {
        return this.#p;
    }
    static #q = CORE.Compare("q");
    static get ["q"]() {
        return this.#q;
    }
    static #r = CORE.Compare("r");
    static get ["r"]() {
        return this.#r;
    }
    static #s = CORE.Compare("s");
    static get ["s"]() {
        return this.#s;
    }
    static #t = CORE.Compare("t");
    static get ["t"]() {
        return this.#t;
    }
    static #u = CORE.Compare("u");
    static get ["u"]() {
        return this.#u;
    }
    static #v = CORE.Compare("v");
    static get ["v"]() {
        return this.#v;
    }
    static #w = CORE.Compare("w");
    static get ["w"]() {
        return this.#w;
    }
    static #x = CORE.Compare("x");
    static get ["x"]() {
        return this.#x;
    }
    static #y = CORE.Compare("y");
    static get ["y"]() {
        return this.#y;
    }
    static #z = CORE.Compare("z");
    static get ["z"]() {
        return this.#z;
    }
    static #LBRC = CORE.Compare("LBRC");
    static get ["{"]() {
        return this.#LBRC;
    }
    static #VERTICAL = CORE.Compare("VERTICAL");
    static get ["|"]() {
        return this.#VERTICAL;
    }
    static #RBRC = CORE.Compare("RBRC");
    static get ["}"]() {
        return this.#RBRC;
    }
    static #TILDE = CORE.Compare("TILDE");
    static get ["~"]() {
        return this.#TILDE;
    }

    constructor($0) {
        console.log(delete this);
    }
}

var tt, ba, pt;
window.onload = () => {
    try {
        tt = document.getElementById("text");

        pt = document.getElementById("props");
        pt.innerHTML += Object.getOwnPropertyNames(JSF).sort();
        ba = Object.getOwnPropertyNames(JSF).filter((arg) => {
            let [o, $] = [JSF.regexp(JSF[arg]), JSF.regexp(JSF[arg])];
            return o;
        });
        let ba1 = Object.getOwnPropertyNames(JSF).map((arg) => {
            let [o, $] = [JSF.regexp(JSF[arg]), JSF.regexp(JSF[arg])];
            return arg + " " + o;
        });
        console.log(ba1);
        ba.forEach((arg) => {
            tt.innerHTML += `<tr id="${arg}"><td>${arg}</td><td><xmp>${JSON.stringify("" + eval(JSF[arg]))}</xmp></td><td class="jsf">${JSF[arg]}</td><td>${JSF[arg].length}</td></tr>`;
        });
    } catch (error) {
        console.log(error);
    }
};
v = JSF["\n"];
// v = JSF.Prop(JSF.Btoa(JSF[0]), JSF[0]);
console.log(v);
console.log(eval(v));
// JSF.CORE[0] = undefined
console.log(typeof JSF["\n"]);
