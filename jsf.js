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
    static #__at = this.Join(this._a, this._t);
    static #At = this.Prop(this.array, this.__at);
    // function at() { [native code] } -> "c" "o" "v"
    // function at() { [native code] } -> " " "(" ")" "[" "]" "{" "}"
    static #_c = this.Prop(this.toStr(this.At), this[3]);
    static #_o = this.Prop(this.Join(this.true, this.At), this[10]);
    static #_v = this.Prop(this.toStr(this.At), this[21]);

    static #_SPACE = this.Prop(this.Join(this.false, this.At), this[20]); //&nbsp;
    // static #_SPACE = this.Prop(this.Join(this.NaN, this.At), this[11]); // in firefox;
    static #_LPAR = this.Prop(this.toStr(this.At), this[11]); //&lpar;
    static #_RPAR = this.Prop(this.toStr(this.At), this[12]); //&rpar;
    static #_LBRK = this.Prop(this.Join(this.true, this.At), this[20]); //&lbrack; &lsqb;
    static #_RBRK = this.Prop(this.Join(this.NaN, this.At), this[31]); //&rbrack; &rsqb;
    static #_LBRC = this.Prop(this.Join(this.false0, this.At), this[20]); //&lbrace; &lcub;
    static #_RBRC = this.Prop(this.toStr(this.At), this[30]); //&rbrace; &rcub;
    // static #_RBRC = this.toFunc(this.Prop(this.toStr(this.At), this.__at), this.Join(this._MINUS, this.toArr(this[1]))); // in firefox
    static #_BRC = this.Join(this._LBRC, this._RBRC);

    // "($0)"
    static #toPar($0) {
        return this.Join(this._LPAR, $0, this._RPAR);
    }
    // "{$0}"
    static #toBrc($0) {
        return this.Join(this._LBRC, $0, this._RBRC);
    }

    static #__constructor = this.Strify("constructor");
    static #__entries = this.Strify("entries");
    static #__self = this.Strify("self");
    static #__return = this.Strify("return");

    // "f,a,l,s,e" -> ","
    // []["flat"]["call"]("false")[1]
    static #__flat = this.Strify("flat");
    static #__call = this.Strify("call");
    static #CALL_COMMA = this.Prop(this.toStr(this.toFunc(this.Prop(this.Prop(this.array, this.__flat), this.__call), this.toStr(this.false))), this[1]);

    // execute function
    // []["at"]["constructor"]("$0")() -> (() => {$0})()
    static #Anonymous($0) {
        return this.toFunc(this.toFunc(this.Prop(this.Prop(this.array, this.__at), this.__constructor), $0));
    }
    static #AnonymousDebug($0) {
        return this.toFunc(this.Prop(this.Prop(this.array, this.__at), this.__constructor), $0);
    }

    // retrun value
    // []["at"]["constructor"]("return $0")() -> $0
    static #Return($0, $SP = false) {
        return this.Anonymous(this.Join(this.__return, ...($SP ? [$0] : [this._SPACE, $0])));
    }
    // Run function []["at"]["constructor"]("return $0")()("$1") -> $0($1)
    static #Execution($0, $1) {
        return this.toFunc(this.Return($0), $1);
    }

    // [object Object] -> "O"
    // [object Window] -> "W" "w"
    // [object Array Iterator] -> "b" "j" "A"
    static #Object = this.Return(this._BRC, true);
    static #Window = this.Return(this.__self);
    static #Iterator = this.toFunc(this.Prop(this.array, this.__entries));

    static #OBJECT_O = this.Prop(this.Join(this.NaN, this.Object), this[11]);
    static #OBJECT_W = this.Prop(this.Join(this.NaN, this.Window), this[11]);
    static #OBJECT_w = this.Prop(this.toStr(this.Window), this[13]);
    static #OBJECT_b = this.Prop(this.toStr(this.Iterator), this[2]);
    static #OBJECT_j = this.Prop(this.toStr(this.Iterator), this[3]);
    static #OBJECT_A = this.Prop(this.Join(this.NaN, this.Iterator), this[11]);

    // array constructor -> Array Object
    // number constructor -> Number Object -> "m"
    // string constructor -> String Object -> "S" "g"
    // boolean constructor -> Boolean Object -> "B"
    // function constructor -> Function Object -> "F"
    static #Array = this.Prop(this.array, this.__constructor);
    static #Number = this.Prop(this.number, this.__constructor);
    static #String = this.Prop(this.string, this.__constructor);
    static #Boolean = this.Prop(this.boolean, this.__constructor);
    static #Function = this.Prop(this.At, this.__constructor);

    static #CONST_LINEFEED = this.Prop(this.Join(this[0], this.toFunc(this.Function)), this[20]);
    static #CONST_m = this.Prop(this.toStr(this.Number), this[11]);
    static #CONST_S = this.Prop(this.Join(this[0], this.String), this[10]);
    static #CONST_g = this.Prop(this.Join(this.false0, this.String), this[20]);
    static #CONST_B = this.Prop(this.Join(this[0], this.Boolean), this[10]);
    static #CONST_F = this.Prop(this.Join(this[0], this.Function), this[10]);

    static #_O = this.OBJECT_O;
    static #_b = this.OBJECT_b;
    static #_j = this.OBJECT_j;
    static #_A = this.OBJECT_A;
    static #_m = this.CONST_m;
    static #_g = this.CONST_g;
    static #_S = this.CONST_S;
    static #_F = this.CONST_F;

    // (String).name -> "String"
    // "to" + "String" -> "toString"
    static #__name = this.Strify("name");
    static #__toString = this.Join(this._t, this._o, this.Prop(this.String, this.__name));

    // [object Undefined]
    static #Undefined = this.Execution(this.__toString);
    static #OBJECT_U = this.Prop(this.Join(this.NaN, this.Undefined), this[11]);

    // [object BarProp]
    static #__statusbar = this.Strify("statusbar");
    static #BarProp = this.Return(this.__statusbar);
    static #OBJECT_P = this.Prop(this.toStr(this.BarProp), this[11]);

    // btoa, atob function
    // base64 <- ascii
    static #__btoa = this.Strify("btoa");
    static #Btoa($0, $i) {
        if ($i === undefined) {
            return this.Execution(this.__btoa, $0);
        } else {
            return this.Prop(this.Execution(this.__btoa, $0), $i);
        }
    }
    // ascii <- base64
    static #__atob = this.Strify("atob");
    static #Atob($0, $i) {
        if ($i === undefined) {
            return this.Execution(this.__atob, $0);
        } else {
            return this.Prop(this.Execution(this.__atob, $0), $i);
        }
    }
    // toString base radix
    static #Radix($0, $1, $i) {
        if (typeof eval($0) == "string") {
            $0 = this.toNum(this.toObj($0));
        }
        if ($i === undefined) {
            return this.toFunc(this.Prop($0, this.__toString), $1);
        } else {
            return this.Prop(this.toFunc(this.Prop($0, this.__toString), $1), $i);
        }
    }

    static #ATOB_EXCLAMATION = this.Atob(this.Join(this._I, this.false), this[0]); //&excl;
    static #ATOB_QUOTATION = this.Atob(this.Strify("000i"), this[2]); //&quot;
    static #ATOB_NUMBER = this.Atob(this.Join(this.Strify("0i"), this.toArr(this.NaN), this.false), this[1]); //&num;
    static #ATOB_DOLLAR = this.Atob(this.Strify("0iS"), this[1]); //&dollar;
    static #ATOB_PERCENT = this.Atob(this.Strify("000l"), this[2]); //&percnt;
    static #ATOB_AMPERSAND = this.Atob(this.Strify("0ia"), this[1]); //&amp;
    static #ATOB_APOSTROPHE = this.Atob(this.Join(this.Strify("0i"), this.false), this[1]); //&apos;
    static #ATOB_ASTERISK = this.Atob(this.Strify("0ir"), this[1]); //&ast;
    static #ATOB_SLASH = this.Atob(this.Strify("0i8"), this[1]); //&sol;
    static #ATOB_COLON = this.Atob(this.Strify("0006"), this[2]); //&colon;
    static #ATOB_SEMI = this.Atob(this.Strify("0007"), this[2]); //&semi;
    static #ATOB_LESS = this.Atob(this.Strify("0008"), this[2]); //&lt;
    static #ATOB_EQUALS = this.Atob(this.Strify("0009"), this[2]); //&equals;
    static #ATOB_GREATER = this.Atob(this.Join(this.Strify("000"), this._PLUS), this[2]); //&gt;
    static #ATOB_QUESTION = this.Atob(this.Strify("0j8"), this[1]); //&quest;
    static #ATOB_AT = this.Atob(this.Strify("00A"), this[1]); //&commat;
    static #ATOB_BACKSLASH = this.Atob(this.Strify("001c"), this[2]); //&bsol;
    static #ATOB_CARET = this.Atob(this.Join(this.undefined, this.toArr(this.false)), this[2]); //&Hat;
    static #ATOB_UNDERSCORE = this.Atob(this.Join(this.NaN, this.toArr(this.false)), this[2]); //&UnderBar;
    static #ATOB_GRAVE = this.Atob(this.Strify("02A"), this[1]); //&grave;
    static #ATOB_VERTICAL = this.Atob(this.Join(this._f, this.toArr(this.NaN)), this[0]); //&vert;
    static #ATOB_TILDE = this.Atob(this.Join(this._f, this.undefined), this[0]);

    static #ATOB_C = this.Atob(this.Join(this.Strify("00"), this.toArr(this.NaN), this.false), this[1]);
    static #ATOB_D = this.Atob(this.Strify("00S"), this[1]);
    static #ATOB_E = this.Atob(this.Strify("001"), this[2]);
    static #ATOB_G = this.Atob(this.Join(this.Strify("00"), this.false), this[1]);
    static #ATOB_H = this.Atob(this.Join(this.Strify("001"), this.toArr(this.Infinity)), this[2]);
    static #ATOB_J = this.Atob(this.Strify("00r"), this[1]);
    static #ATOB_K = this.Atob(this.Join(this.Strify("00"), this.true), this[1]);
    static #ATOB_L = this.Atob(this.Strify("00y"), this[1]);
    static #ATOB_M = this.Atob(this.Strify("000"), this[1]);
    static #ATOB_P = this.Atob(this.Strify("01A"), this[1]);
    static #ATOB_Q = this.Atob(this.Strify("01F"), this[1]);
    static #ATOB_R = this.Atob(this.Join(this.Strify("01"), this.toArr(this.Infinity)), this[1]);
    static #ATOB_T = this.Atob(this.Strify("01S"), this[1]);
    static #ATOB_V = this.Atob(this.Strify("01a"), this[1]);
    static #ATOB_W = this.Atob(this.Join(this.Strify("01"), this.false), this[1]);
    static #ATOB_X = this.Atob(this.Strify("01i"), this[1]);
    static #ATOB_Y = this.Atob(this.Strify("01n"), this[1]);
    static #ATOB_Z = this.Atob(this.Strify("01r"), this[1]);
    // static ATOB_Z1 = this.Atob(this.Join(this.Stringify("00"), this.toArr(this.NaN), this.toArr(this[0])), this[2]); //<-same length

    static #ATOB_h = this.Atob(this.Join(this._a, this.toArr(this.NaN)), this[0]);
    static #ATOB_k = this.Atob(this.Strify("a0"));
    static #ATOB_p = this.Atob(this.Join(this._c, this.toArr(this.NaN)), this[0]);
    static #ATOB_q = this.Atob(this.Join(this._c, this.false), this[0]);
    static #ATOB_x = this.Atob(this.Join(this._e, this.toArr(this.NaN)), this[0]);
    static #ATOB_z = this.Atob(this.Join(this._e, this.undefined), this[0]);

    static #BTOA_EQUALS = this.Btoa(this[0], this[2]);

    static #BTOA_C = this.Btoa(this.Join(this[0], this._LPAR), this[1]);
    static #BTOA_D = this.Btoa(this.Strify("00"), this[1]);
    static #BTOA_E = this.Btoa(this.Join(this.Strify("0"), this.toArr(this.NaN)), this[1]);
    static #BTOA_G = this.Btoa(this.Join(this.toArr(this[0]), this.false), this[1]);
    static #BTOA_H = this.Btoa(this.true, this[1]);
    static #BTOA_J = this.Btoa(this.true, this[2]);
    static #BTOA_K = this.Btoa(this._PLUS, this[0]);
    static #BTOA_L = this.Btoa(this._PERIOD, this[0]);
    static #BTOA_M = this.Btoa(this[0], this[0]);
    static #BTOA_P = this.Btoa(this.Object, this[11]);
    static #BTOA_Q = this.Btoa(this[1], this[1]);
    static #BTOA_R = this.Btoa(this.Join(this.toArr(this[0]), this.true), this[2]);
    static #BTOA_T = this.Btoa(this.NaN, this[0]);
    static #BTOA_U = this.Btoa(this.Join(this[1], this.toArr(this.NaN)), this[1]);
    static #BTOA_V = this.Btoa(this.undefined, this[10]);
    static #BTOA_W = this.Btoa(this.undefined, this[1]);
    static #BTOA_X = this.Btoa(this.Join(this.toArr(this[1]), this.true), this[1]);
    static #BTOA_Y = this.Btoa(this._a, this[0]);
    static #BTOA_Z = this.Btoa(this.false, this[0]);

    static #BTOA_h = this.Btoa(this.Join(this.toArr(this[0]), this.false), this[3]);
    static #BTOA_k = this.Btoa(this.undefined, this[3]);
    static #BTOA_p = this.Prop(this.Join(this.NaN, this.Btoa(this.undefined)), this[10]);
    static #BTOA_q = this.Btoa(this.Strify("00j"), this[3]);
    static #BTOA_x = this.Btoa(this.Join(this.false, this.toArr(this.false)), this[10]);
    static #BTOA_z = this.Btoa(this.Join(this.false, this.toArr(this.false)), this[11]);

    static #RADIX_h = this.Radix(this[101], this[21], this[1]);
    static #RADIX_k = this.Radix(this[20], this[21]);
    static #RADIX_p = this.Radix(this[211], this[31], this[1]);
    static #RADIX_v = this.Radix(this[31], this[32]);
    static #RADIX_w = this.Radix(this[32], this[33]);
    static #RADIX_x = this.Radix(this[101], this[34], this[1]);
    static #RADIX_z = this.Radix(this[35], this[36]);

    // "string".italics() (Deprecated)
    // "<i>string</i>" -> "<" ">" "/"
    // "string".fontcolor() (Deprecated)
    // "<font color="undefined">string</font>" -> "=" "\""
    // "<font color="<font color=&quot;undefined&quot;></font>"></font>" -> "&"
    // "<font color=true"<font color=&quot;undefined&quot;></font>"></font>" -> "q"
    static #__italics = this.Strify("italics");
    static #Italics = this.toFunc(this.Prop(this.string, this.__italics));
    static #Italics_Pad = this.toFunc(this.Prop(this.false0, this.__italics));
    static #__fontcolor = this.Strify("fontcolor");
    static #Fontcolor = this.toFunc(this.Prop(this.string, this.__fontcolor));
    static #Fontcolor_Empty = this.toFunc(this.Prop(this.string, this.__fontcolor), this.array);
    static #Fontcolor_Font = this.toFunc(this.Prop(this.string, this.__fontcolor), this.Fontcolor);
    static #Fontcolor_True_Font = this.toFunc(this.Prop(this.string, this.__fontcolor), this.Join(this.true, this.Fontcolor));
    static #Fontcolor_Empty_Font = this.toFunc(this.Prop(this.string, this.__fontcolor), this.Fontcolor_Empty);

    static #ITALICS_LESS = this.Prop(this.Italics, this[0]);
    static #ITALICS_GREATER = this.Prop(this.Italics, this[2]);
    static #ITALICS_SLASH = this.Prop(this.Italics_Pad, this[10]);

    static #FONT_EQUALS = this.Prop(this.Fontcolor, this[11]);
    static #FONT_QUOTATION = this.Prop(this.Fontcolor, this[12]);
    static #FONT_AMPERSAND = this.Prop(this.Fontcolor_Empty_Font, this[31]);
    static #FONT_SEMI = this.Prop(this.Fontcolor_Font, this[30]);
    static #FONT_q = this.Prop(this.Fontcolor_True_Font, this[30]);

    static get Compare() {
        return function ($0 = "") {
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
    static get toPar() {
        return this.#toPar;
    }
    static get toBrc() {
        return this.#toBrc;
    }
    static get Anonymous() {
        return this.#Anonymous;
    }
    static get AnonymousDebug() {
        return this.#AnonymousDebug;
    }
    static get Return() {
        return this.#Return;
    }
    static get Execution() {
        return this.#Execution;
    }
    static get Btoa() {
        return this.#Btoa;
    }
    static get Atob() {
        return this.#Atob;
    }
    static get Radix() {
        return this.#Radix;
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

    static get At() {
        return this.#At;
    }
    static get Object() {
        return this.#Object;
    }
    static get Window() {
        return this.#Window;
    }
    static get Iterator() {
        return this.#Iterator;
    }
    static get Array() {
        return this.#Array;
    }
    static get Number() {
        return this.#Number;
    }
    static get String() {
        return this.#String;
    }
    static get Boolean() {
        return this.#Boolean;
    }
    static get Function() {
        return this.#Function;
    }
    static get Undefined() {
        return this.#Undefined;
    }
    static get BarProp() {
        return this.#BarProp;
    }

    static get _SPACE() {
        return this.#_SPACE;
    }
    static get _LPAR() {
        return this.#_LPAR;
    }
    static get _RPAR() {
        return this.#_RPAR;
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

    static get _A() {
        return this.#_A;
    }
    static get _F() {
        return this.#_F;
    }
    static get _I() {
        return this.#_I;
    }
    static get _N() {
        return this.#_N;
    }
    static get _O() {
        return this.#_O;
    }
    static get _S() {
        return this.#_S;
    }

    static get _LBRK() {
        return this.#_LBRK;
    }
    static get _RBRK() {
        return this.#_RBRK;
    }

    static get _a() {
        return this.#_a;
    }
    static get _b() {
        return this.#_b;
    }
    static get _c() {
        return this.#_c;
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
    static get _g() {
        return this.#_g;
    }
    static get _i() {
        return this.#_i;
    }
    static get _j() {
        return this.#_j;
    }
    static get _l() {
        return this.#_l;
    }
    static get _m() {
        return this.#_m;
    }
    static get _n() {
        return this.#_n;
    }
    static get _o() {
        return this.#_o;
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
    static get _v() {
        return this.#_v;
    }
    static get _y() {
        return this.#_y;
    }

    static get _LBRC() {
        return this.#_LBRC;
    }
    static get _RBRC() {
        return this.#_RBRC;
    }

    static get CALL_COMMA() {
        return this.#CALL_COMMA;
    }
    static get OBJECT_A() {
        return this.#OBJECT_A;
    }
    static get OBJECT_P() {
        return this.#OBJECT_P;
    }
    static get OBJECT_O() {
        return this.#OBJECT_O;
    }
    static get OBJECT_U() {
        return this.#OBJECT_U;
    }
    static get OBJECT_W() {
        return this.#OBJECT_W;
    }
    static get OBJECT_b() {
        return this.#OBJECT_b;
    }
    static get OBJECT_j() {
        return this.#OBJECT_j;
    }
    static get OBJECT_w() {
        return this.#OBJECT_w;
    }
    static get CONST_LINEFEED() {
        return this.#CONST_LINEFEED;
    }
    static get CONST_B() {
        return this.#CONST_B;
    }
    static get CONST_F() {
        return this.#CONST_F;
    }
    static get CONST_S() {
        return this.#CONST_S;
    }
    static get CONST_g() {
        return this.#CONST_g;
    }
    static get CONST_m() {
        return this.#CONST_m;
    }
    static get ATOB_EXCLAMATION() {
        return this.#ATOB_EXCLAMATION;
    }
    static get ATOB_QUOTATION() {
        return this.#ATOB_QUOTATION;
    }
    static get ATOB_NUMBER() {
        return this.#ATOB_NUMBER;
    }
    static get ATOB_DOLLAR() {
        return this.#ATOB_DOLLAR;
    }
    static get ATOB_PERCENT() {
        return this.#ATOB_PERCENT;
    }
    static get ATOB_AMPERSAND() {
        return this.#ATOB_AMPERSAND;
    }
    static get ATOB_APOSTROPHE() {
        return this.#ATOB_APOSTROPHE;
    }
    static get ATOB_ASTERISK() {
        return this.#ATOB_ASTERISK;
    }
    static get ATOB_SLASH() {
        return this.#ATOB_SLASH;
    }
    static get ATOB_COLON() {
        return this.#ATOB_COLON;
    }
    static get ATOB_SEMI() {
        return this.#ATOB_SEMI;
    }
    static get ATOB_LESS() {
        return this.#ATOB_LESS;
    }
    static get ATOB_EQUALS() {
        return this.#ATOB_EQUALS;
    }
    static get ATOB_GREATER() {
        return this.#ATOB_GREATER;
    }
    static get ATOB_QUESTION() {
        return this.#ATOB_QUESTION;
    }
    static get ATOB_AT() {
        return this.#ATOB_AT;
    }
    static get ATOB_BACKSLASH() {
        return this.#ATOB_BACKSLASH;
    }
    static get ATOB_CARET() {
        return this.#ATOB_CARET;
    }
    static get ATOB_UNDERSCORE() {
        return this.#ATOB_UNDERSCORE;
    }
    static get ATOB_GRAVE() {
        return this.#ATOB_GRAVE;
    }
    static get ATOB_VERTICAL() {
        return this.#ATOB_VERTICAL;
    }
    static get ATOB_TILDE() {
        return this.#ATOB_TILDE;
    }
    static get ATOB_C() {
        return this.#ATOB_C;
    }
    static get ATOB_D() {
        return this.#ATOB_D;
    }
    static get ATOB_E() {
        return this.#ATOB_E;
    }
    static get ATOB_G() {
        return this.#ATOB_G;
    }
    static get ATOB_H() {
        return this.#ATOB_H;
    }
    static get ATOB_J() {
        return this.#ATOB_J;
    }
    static get ATOB_K() {
        return this.#ATOB_K;
    }
    static get ATOB_L() {
        return this.#ATOB_L;
    }
    static get ATOB_M() {
        return this.#ATOB_M;
    }
    static get ATOB_P() {
        return this.#ATOB_P;
    }
    static get ATOB_Q() {
        return this.#ATOB_Q;
    }
    static get ATOB_R() {
        return this.#ATOB_R;
    }
    static get ATOB_T() {
        return this.#ATOB_T;
    }
    static get ATOB_V() {
        return this.#ATOB_V;
    }
    static get ATOB_W() {
        return this.#ATOB_W;
    }
    static get ATOB_X() {
        return this.#ATOB_X;
    }
    static get ATOB_Y() {
        return this.#ATOB_Y;
    }
    static get ATOB_Z() {
        return this.#ATOB_Z;
    }
    static get ATOB_h() {
        return this.#ATOB_h;
    }
    static get ATOB_k() {
        return this.#ATOB_k;
    }
    static get ATOB_p() {
        return this.#ATOB_p;
    }
    static get ATOB_q() {
        return this.#ATOB_q;
    }
    static get ATOB_x() {
        return this.#ATOB_x;
    }
    static get ATOB_z() {
        return this.#ATOB_z;
    }
    static get BTOA_EQUALS() {
        return this.#BTOA_EQUALS;
    }
    static get BTOA_C() {
        return this.#BTOA_C;
    }
    static get BTOA_D() {
        return this.#BTOA_D;
    }
    static get BTOA_E() {
        return this.#BTOA_E;
    }
    static get BTOA_G() {
        return this.#BTOA_G;
    }
    static get BTOA_H() {
        return this.#BTOA_H;
    }
    static get BTOA_J() {
        return this.#BTOA_J;
    }
    static get BTOA_K() {
        return this.#BTOA_K;
    }
    static get BTOA_L() {
        return this.#BTOA_L;
    }
    static get BTOA_M() {
        return this.#BTOA_M;
    }
    static get BTOA_P() {
        return this.#BTOA_P;
    }
    static get BTOA_Q() {
        return this.#BTOA_Q;
    }
    static get BTOA_R() {
        return this.#BTOA_R;
    }
    static get BTOA_T() {
        return this.#BTOA_T;
    }
    static get BTOA_U() {
        return this.#BTOA_U;
    }
    static get BTOA_V() {
        return this.#BTOA_V;
    }
    static get BTOA_W() {
        return this.#BTOA_W;
    }
    static get BTOA_X() {
        return this.#BTOA_X;
    }
    static get BTOA_Y() {
        return this.#BTOA_Y;
    }
    static get BTOA_Z() {
        return this.#BTOA_Z;
    }
    static get BTOA_h() {
        return this.#BTOA_h;
    }
    static get BTOA_k() {
        return this.#BTOA_k;
    }
    static get BTOA_p() {
        return this.#BTOA_p;
    }
    static get BTOA_q() {
        return this.#BTOA_q;
    }
    static get BTOA_x() {
        return this.#BTOA_x;
    }
    static get BTOA_z() {
        return this.#BTOA_z;
    }
    static get RADIX_h() {
        return this.#RADIX_h;
    }
    static get RADIX_k() {
        return this.#RADIX_k;
    }
    static get RADIX_p() {
        return this.#RADIX_p;
    }
    static get RADIX_v() {
        return this.#RADIX_v;
    }
    static get RADIX_w() {
        return this.#RADIX_w;
    }
    static get RADIX_x() {
        return this.#RADIX_x;
    }
    static get RADIX_z() {
        return this.#RADIX_z;
    }
    static get ITALICS_LESS() {
        return this.#ITALICS_LESS;
    }
    static get ITALICS_GREATER() {
        return this.#ITALICS_GREATER;
    }
    static get ITALICS_SLASH() {
        return this.#ITALICS_SLASH;
    }
    static get FONT_EQUALS() {
        return this.#FONT_EQUALS;
    }
    static get FONT_QUOTATION() {
        return this.#FONT_QUOTATION;
    }
    static get FONT_AMPERSAND() {
        return this.#FONT_AMPERSAND;
    }
    static get FONT_SEMI() {
        return this.#FONT_SEMI;
    }
    static get FONT_q() {
        return this.#FONT_q;
    }

    static get _BRC() {
        return this.#_BRC;
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
    static get _1e100() {
        return this.#_1e100;
    }
    static get _11e21() {
        return this.#_11e21;
    }
    static get _1e7() {
        return this.#_1e7;
    }

    static get __at() {
        return this.#__at;
    }
    static get __atob() {
        return this.#__atob;
    }
    static get __btoa() {
        return this.#__btoa;
    }
    static get __call() {
        return this.#__call;
    }
    static get __constructor() {
        return this.#__constructor;
    }
    static get __entries() {
        return this.#__entries;
    }
    static get __flat() {
        return this.#__flat;
    }
    static get __fontcolor() {
        return this.#__fontcolor;
    }
    static get Fontcolor() {
        return this.#Fontcolor;
    }
    static get Fontcolor_Empty() {
        return this.#Fontcolor_Empty;
    }
    static get Fontcolor_Font() {
        return this.#Fontcolor_Font;
    }
    static get Fontcolor_True_Font() {
        return this.#Fontcolor_True_Font;
    }
    static get Fontcolor_Empty_Font() {
        return this.#Fontcolor_Empty_Font;
    }
    static get __italics() {
        return this.#__italics;
    }
    static get Italics() {
        return this.#Italics;
    }
    static get Italics_Pad() {
        return this.#Italics_Pad;
    }
    static get __name() {
        return this.#__name;
    }
    static get __return() {
        return this.#__return;
    }
    static get __self() {
        return this.#__self;
    }
    static get __statusbar() {
        return this.#__statusbar;
    }
    static get __toString() {
        return this.#__toString;
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
    // constructor($0) {
    //     console.log(delete this);
    // }

    static get Strify() {
        return function ($0) {
            return CORE.Join(
                ...$0
                    .toString()
                    .split("")
                    .map((_0, _i) => (!isNaN(parseInt(_0)) ? (_i == 0 ? this[_0] : CORE.toArr(this[_0])) : (this[_0] ?? this.#Unicode(_0))))
            );
        };
    }
    static #KNOWN = "AFINOSabcdefgijlmnorstuvy+0123456789";
    static #BS64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");

    static Infix = [true, false, undefined, NaN, Infinity]
        .map((_0) => {
            let _l = Array((undefined + []).length).fill(null);

            [true, false, undefined, NaN, Infinity].forEach((_1) => {
                _l[(_1 + []).length - 1] = (_1 + (_0 + [])).slice((_1 + []).length - 1, (_1 + []).length + 1);
            });
            return [
                [
                    _0 + [],
                    Array((_0 + []).length - 1)
                        .fill(null)
                        .map((_2, _1) => {
                            return (_0 + []).slice(_1, _1 + 2);
                        }),
                ],
                ["x" + _0, _l],
            ];
        })
        .flat();

    static #Ascii($0) {
        let $4 = $0.toString(4).padStart(4, 0);
        let $$$_ = this.#BS64.filter((_0, _1) => {
            return this.#KNOWN.includes(this.#BS64[_1]) && $4.slice(0, 3) == _1.toString(4).padStart(3, 0).slice(0, 3);
        });
        let ___$ = this.#BS64.filter((_0, _1) => {
            return this.#KNOWN.includes(this.#BS64[_1]) && $4.slice(3, 4) == _1.toString(4).padStart(3, 0).slice(0, 1);
        });
        let $$__ = this.#BS64.filter((_0, _1) => {
            return this.#KNOWN.includes(this.#BS64[_1]) && $4.slice(0, 2) == _1.toString(4).padStart(3, 0).slice(1, 3);
        });
        let __$$ = this.#BS64.filter((_0, _1) => {
            return this.#KNOWN.includes(this.#BS64[_1]) && $4.slice(2, 4) == _1.toString(4).padStart(3, 0).slice(0, 2);
        });
        let $___ = this.#BS64.filter((_0, _1) => {
            return this.#KNOWN.includes(this.#BS64[_1]) && $4.slice(0, 1) == _1.toString(4).padStart(3, 0).slice(2, 3);
        });
        let _$$$ = this.#BS64.filter((_0, _1) => {
            return this.#KNOWN.includes(this.#BS64[_1]) && $4.slice(1, 4) == _1.toString(4).padStart(3, 0).slice(0, 3);
        });
        let _o = [];
        let _s = [
            [$$$_, ___$],
            [$$__, __$$],
            [$___, _$$$],
        ];
        let _fix = [];
        let _basis = [true, false, undefined, NaN, Infinity].map((_0) => _0 + []);
        for (let _i = 0; _i < 3; _i++) {
            for (let _f of _s[_i][0]) {
                for (let _b of _s[_i][1]) {
                    let _prefix = [_f];
                    let _postfix = [_b];
                    for (let _k of _basis) {
                        if (_f == _k[_k.length - 1]) {
                            _prefix.push(_k);
                        }
                        if (_b == _k[0]) {
                            _postfix.push(_k);
                        }
                    }
                    // TODO: 앞에 패딩 "", 0 (3), 00 (9), NaN (6), false (3), false0 (9)   index 0(3)<1(5)<2(9)<10(11)<11(13)<3(14)<12(17)<4(19)
                    for (let _m of _prefix) {
                        for (let _n of _postfix) {
                            let _k = [CORE[_m], (_m != _f || _n == NaN + [] || _n == Infinity + []) && _n != _b ? CORE.toArr(CORE[_n]) : CORE.Strify(_n)];
                            _fix.push([_m + _n, CORE.Atob(CORE.Join(..._k))]);
                        }
                    }

                    for (let [_k, _v] of _basis) {
                        if (_f == _k[_k.length - 1]) {
                        }
                        if (_b == _k[0]) {
                            let _y = [this.Strify(_f.padStart(1 + _i, "0")), _k == "NaN" || _k == "Infinity" ? CORE.toArr(_v) : _v];
                            if ((_f.padStart(1 + _i, "0") + _k).length % 4 == 1) {
                                _y.push(CORE.false);
                            }
                            let _x = CORE.Atob(CORE.Join(..._y), CORE[_i]);
                            _o.push([_f.padStart(1 + _i, "0") + _k + (_y[2] ? "false" : ""), _x]);
                        }
                    }
                    let _x = CORE.Atob(this.Strify((_f + _b).padStart(2 + _i, "0")), CORE[_i]);
                    _o.push([(_f + _b).padStart(2 + _i, "0"), _x]);
                    // if (this.SNIPPET.flat().includes(_f + _b)) {
                    //     _o.push([_f + _b, _i + ""]);
                    // }
                    // _o.push(CORE.Atob(CORE.Strify(_f + _b), CORE[0]));
                }
            }
        }

        return _fix.sort((_0, _1) => _0[0].length - _1[0].length);
        // return _o.sort((_0, _1) => _0.length - _1.length)[0];
    }
    static get Ascii() {
        return this.#Ascii;
    }
    static #Unicode($0) {
        return CORE.toFunc(CORE.Prop(CORE.String, this.Strify("fromCodePoint")), this.Strify($0));
    }
    static get Nonv() {
        return function ($0) {
            let _0 = String.fromCodePoint($0);
            if (typeof this[_0] === "undefined") {
                Object.defineProperty(JSF, _0, {
                    enumerable: false,
                    configurable: true,
                    get() {
                        return this.#Unicode($0);
                    },
                });
            }
            return this[_0];
        };
    }
    static {}
}

const foo = new Proxy(JSF, {
    get($0, $1) {
        if (typeof $0[$1] === "undefined") {
            return "6" + $1;
        }
        return $0[$1];
    },
});
console.log(Object.getOwnPropertyDescriptors(JSF));

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
