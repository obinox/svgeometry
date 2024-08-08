class JSF {
    // basis
    static #basis = RegExp(/^[\+\!\(\)\[\]]+$/g);
    static regexp($0) {
        return this.#basis.test($0);
    }
    static #nb = "+";
    static #nt = "!";
    static #lp = "(";
    static #rp = ")";
    static #lb = "[";
    static #rb = "]";

    // small application
    static #par = this.#lp + this.#rp; // ()
    static #brk = this.#lb + this.#rb; // []
    static #toObj($0 = "") {
        return this.#lp + $0 + this.#rp;
    }
    static #toFunc($0 = "", $1) {
        return $0 + this.#toObj($1);
    }

    // objects
    static #array = this.#brk;
    static #toArr($0) {
        return this.#lb + $0 + this.#rb;
    }

    static #number = this.#nb + this.#array;
    static #toNum($0) {
        return this.#nb + $0;
    }
    static #toNot($0) {
        return this.#nt + $0;
    }
    static #Join(...$0) {
        return $0.join(this.#nb);
    }
    static #Strify($0) {
        return this.#Join(
            ...$0
                .toString()
                .split("")
                .map((_0, _i) => (!isNaN(parseInt(_0)) ? (_i == 0 ? this[_0] : this.#toArr(this[_0])) : (this[_0] ?? this["_" + _0])))
        );
    }
    static #string = this.#Join(this.#array, this.#array);
    static #toStr($0) {
        return this.#Join($0, this.#array);
    }
    static #Prop($0, $i) {
        let _0 = false;
        try {
            _0 = eval($0 + this.#toArr($i)) == eval(this.#toObj($0) + this.#toArr($i));
        } catch {}
        return (_0 ? $0 : this.#toObj($0)) + this.#toArr($i);
    }

    static #boolean = this.#toNot(this.#array);

    // basic keyword
    static #false = this.#toNot(this.#array);
    static #true = this.#toNot(this.#false);
    static #undefined = this.#Prop(this.#array, this.#array);
    static #NaN = this.#toNum(this.#toArr(this.#false));

    // numbers
    static 0 = this.#toNum(this.#array);
    static 1 = this.#toNum(this.#true);
    static 2 = this.#Join(...Array(2).fill(this.#true));
    static 3 = this.#Join(...Array(3).fill(this.#true));
    static 4 = this.#Join(...Array(4).fill(this.#true));
    static 5 = this.#Join(...Array(5).fill(this.#true));
    static 6 = this.#Join(...Array(6).fill(this.#true));
    static 7 = this.#Join(...Array(7).fill(this.#true));
    static 8 = this.#Join(...Array(8).fill(this.#true));
    static 9 = this.#Join(...Array(9).fill(this.#true));
    static 10 = this.#Strify(10);
    static 11 = this.#Strify(11);
    static 12 = this.#Strify(12);
    static 13 = this.#Strify(13);
    static 20 = this.#Strify(20);
    static 21 = this.#Strify(21);
    static 30 = this.#Strify(30);
    static 31 = this.#Strify(31);
    static 32 = this.#Strify(32);
    static 33 = this.#Strify(33);
    static 34 = this.#Strify(34);
    static 35 = this.#Strify(35);
    static 36 = this.#Strify(36);
    static 40 = this.#Strify(40);
    static 63 = this.#Strify(63);
    static 101 = this.#Strify(101);
    static 211 = this.#Strify(211);

    static #false0 = this.#Join(this.#false, this.#toArr(this[0]));

    // undefined -> "u" "n" "d" "i"
    // false -> "f" "a" "l" "s"
    // true -> "t" "r" "e"
    // NaN -> "N"
    static _u = this.#Prop(this.#toStr(this.#undefined), this[0]);
    static _n = this.#Prop(this.#toStr(this.#undefined), this[1]);
    static _d = this.#Prop(this.#toStr(this.#undefined), this[2]);
    static _i = this.#Prop(this.#Join(this.#toArr(this.#false), this.#undefined), this[10]);
    static _f = this.#Prop(this.#toStr(this.#false), this[0]);
    static _a = this.#Prop(this.#toStr(this.#false), this[1]);
    static _l = this.#Prop(this.#toStr(this.#false), this[2]);
    static _s = this.#Prop(this.#toStr(this.#false), this[3]);
    static _t = this.#Prop(this.#toStr(this.#true), this[0]);
    static _r = this.#Prop(this.#toStr(this.#true), this[1]);
    static _e = this.#Prop(this.#toStr(this.#true), this[3]);
    static _N = this.#Prop(this.#toStr(this.#NaN), this[0]);
    // Infinity -> "I" "y"
    // 1e+100 -> "+"
    // 1.1e+21 -> "."
    // 1e-7 -> "-"
    static #Infinity = this.#toNum(this.#toObj(this.#Strify("1e1000")));
    static _I = this.#Prop(this.#toStr(this.#Infinity), this[0]);
    static _y = this.#Prop(this.#Join(this.#NaN, this.#toArr(this.#Infinity)), this[10]);

    static _1e100 = this.#toNum(this.#toObj(this.#Strify("1e100")));
    static _PLUS = this.#Prop(this.#toStr(this._1e100), this[2]); //&plus;

    static _11e21 = this.#toNum(this.#toObj(this.#Strify("11e20")));
    static _PERIOD = this.#Prop(this.#toStr(this._11e21), this[1]); //&period;

    static _1e7 = this.#toNum(this.#toObj(this.#Join(this._PERIOD, this.#toObj(this.#Strify("0000001")))));
    static _MINUS = this.#Prop(this.#toStr(this._1e7), this[2]); //&minus;

    // Array.prototype.at
    static __at = this.#Join(this._a, this._t);
    static At = this.#Prop(this.#array, this.__at);
    // function at() { [native code] } -> "c" "o" "v"
    // function at() { [native code] } -> " " "(" ")" "[" "]" "{" "}"
    static _c = this.#Prop(this.#toStr(this.At), this[3]);
    static _o = this.#Prop(this.#Join(this.#true, this.At), this[10]);
    static _v = this.#Prop(this.#toStr(this.At), this[21]);

    static _SPACE = this.#Prop(this.#Join(this.#false, this.At), this[20]); //&nbsp;
    static _LPAR = this.#Prop(this.#toStr(this.At), this[11]); //&lpar;
    static _RPAR = this.#Prop(this.#toStr(this.At), this[12]); //&rpar;
    static _LBRK = this.#Prop(this.#Join(this.#true, this.At), this[20]); //&lbrack; &lsqb;
    static _RBRK = this.#Prop(this.#Join(this.#NaN, this.At), this[31]); //&rbrack; &rsqb;
    static _LBRC = this.#Prop(this.#Join(this.#false0, this.At), this[20]); //&lbrace; &lcub;
    static _RBRC = this.#Prop(this.#toStr(this.At), this[30]); //&rbrace; &rcub;
    static _BRC = this.#Join(this._LBRC, this._RBRC);

    static #brc = this._BRC; // "{}"

    // "($0)"
    static #toPar($0) {
        return this.#Join(this._LPAR, $0, this._RPAR);
    }
    // "{$0}"
    static #toBrc($0) {
        return this.#Join(this._LBRC, $0, this._RBRC);
    }

    static __constructor = this.#Strify("constructor");
    static __entries = this.#Strify("entries");
    static __self = this.#Strify("self");
    static __return = this.#Strify("return");

    // "f,a,l,s,e" -> ","
    // []["flat"]["call"]("false")[1]
    static __flat = this.#Strify("flat");
    static __call = this.#Strify("call");
    static CALL_COMMA = this.#Prop(this.#toStr(this.#toFunc(this.#Prop(this.#Prop(this.#array, this.__flat), this.__call), this.#toStr(this.#false))), this[1]);

    // execute function
    // []["at"]["constructor"]("$0")() -> (() => {$0})()
    static #Anonymous($0) {
        return this.#toFunc(this.#toFunc(this.#Prop(this.#Prop(this.#array, this.__at), this.__constructor), $0));
    }
    static #AnonymousDebug($0) {
        return this.#toFunc(this.#Prop(this.#Prop(this.#array, this.__at), this.__constructor), $0);
    }
    // retrun value
    // []["at"]["constructor"]("return $0")() -> $0
    static #Return($0, $SP = false) {
        return this.#Anonymous(this.#Join(this.__return, ...($SP ? [$0] : [this._SPACE, $0])));
    }
    // Run function []["at"]["constructor"]("return $0")()("$1") -> $0($1)
    static #Execution($0, $1) {
        return this.#toFunc(this.#Return($0), $1);
    }

    // [object Object] -> "O"
    // [object Window] -> "W" "w"
    // [object Array Iterator] -> "b" "j" "A"
    // [object HTMLTableRowElement] -> "H" "T" "M" "L" "R"
    static #Object = this.#Return(this.#brc, true);
    static #Window = this.#Return(this.__self);
    static #Iterator = this.#toFunc(this.#Prop(this.#array, this.__entries));

    static OBJECT_O = this.#Prop(this.#Join(this.#NaN, this.#Object), this[11]);
    static OBJECT_W = this.#Prop(this.#Join(this.#NaN, this.#Window), this[11]);
    static OBJECT_w = this.#Prop(this.#toStr(this.#Window), this[13]);
    static OBJECT_b = this.#Prop(this.#toStr(this.#Iterator), this[2]);
    static OBJECT_j = this.#Prop(this.#toStr(this.#Iterator), this[3]);
    static OBJECT_A = this.#Prop(this.#Join(this.#NaN, this.#Iterator), this[11]);

    // array constructor -> Array Object
    // number constructor -> Number Object -> "m"
    // string constructor -> String Object -> "S" "g"
    // boolean constructor -> Boolean Object -> "B"
    // function constructor -> Function Object -> "F"
    static #Array = this.#Prop(this.#array, this.__constructor);
    static #Number = this.#Prop(this.#number, this.__constructor);
    static #String = this.#Prop(this.#string, this.__constructor);
    static #Boolean = this.#Prop(this.#boolean, this.__constructor);
    static #Function = this.#Prop(this.At, this.__constructor);

    static CONST_LINEFEED = this.#Prop(this.#Join(this[0], this.#toFunc(this.#Function)), this[20]);
    static CONST_m = this.#Prop(this.#toStr(this.#Number), this[11]);
    static CONST_S = this.#Prop(this.#Join(this[0], this.#String), this[10]);
    static CONST_g = this.#Prop(this.#Join(this.#false0, this.#String), this[20]);
    static CONST_B = this.#Prop(this.#Join(this[0], this.#Boolean), this[10]);
    static CONST_F = this.#Prop(this.#Join(this[0], this.#Function), this[10]);

    static _O = this.OBJECT_O;
    static _b = this.OBJECT_b;
    static _j = this.OBJECT_j;
    static _A = this.OBJECT_A;
    static _m = this.CONST_m;
    static _S = this.CONST_S;
    static _F = this.CONST_F;

    // (String).name -> "String"
    // "to" + "String" -> "toString"
    static __name = this.#Strify("name");
    static __toString = this.#Join(this._t, this._o, this.#Prop(this.#String, this.__name));

    // [object Undefined]
    static Undefined = this.#Execution(this.__toString);
    static OBJECT_U = this.#Prop(this.#Join(this.#NaN, this.Undefined), this[11]);

    // [object BarProp]
    static __statusbar = this.#Strify("statusbar");
    static BarProp = this.#Return(this.__statusbar);
    static OBJECT_P = this.#Prop(this.#toStr(this.BarProp), this[11]);

    // btoa, atob function
    // base64 <- ascii
    static __btoa = this.#Strify("btoa");
    static #Btoa($0, $i) {
        if ($i === undefined) {
            return this.#Execution(this.__btoa, $0);
        } else {
            return this.#Prop(this.#Execution(this.__btoa, $0), $i);
        }
    }
    // ascii <- base64
    static __atob = this.#Strify("atob");
    static #Atob($0, $i) {
        if ($i === undefined) {
            return this.#Execution(this.__atob, $0);
        } else {
            return this.#Prop(this.#Execution(this.__atob, $0), $i);
        }
    }
    // toString base radix
    static #Radix($0, $1, $i) {
        if (typeof eval($0) == "string") {
            $0 = this.#toNum(this.#toObj($0));
        }
        if ($i === undefined) {
            return this.#toFunc(this.#Prop($0, this.__toString), $1);
        } else {
            return this.#Prop(this.#toFunc(this.#Prop($0, this.__toString), $1), $i);
        }
    }

    static ATOB_EXCLAMATION = this.#Atob(this.#Join(this._I, this.#false), this[0]); //&excl;
    static ATOB_QUOTATION = this.#Atob(this.#Strify("000i"), this[2]); //&quot;
    static ATOB_NUMBER = this.#Atob(this.#Join(this.#Strify("0i"), this.#toArr(this.#NaN), this.#false), this[1]); //&num;
    static ATOB_DOLLAR = this.#Atob(this.#Strify("0iS"), this[1]); //&dollar;
    static ATOB_PERCENT = this.#Atob(this.#Strify("000l"), this[2]); //&percnt;
    static ATOB_AMPERSAND = this.#Atob(this.#Strify("0ia"), this[1]); //&amp;
    static ATOB_APOSTROPHE = this.#Atob(this.#Join(this.#Strify("0i"), this.#false), this[1]); //&apos;
    static ATOB_ASTERISK = this.#Atob(this.#Strify("0ir"), this[1]); //&ast;
    static ATOB_SLASH = this.#Atob(this.#Strify("000v"), this[2]); //&sol;
    static ATOB_COLON = this.#Atob(this.#Strify("0006"), this[2]); //&colon;
    static ATOB_SEMI = this.#Atob(this.#Strify("0007"), this[2]); //&semi;
    static ATOB_LESS = this.#Atob(this.#Strify("0008"), this[2]); //&lt;
    static ATOB_EQUALS = this.#Atob(this.#Strify("0009"), this[2]); //&equals;
    static ATOB_GREATER = this.#Atob(this.#Join(this.#Strify("000"), this._PLUS), this[2]); //&gt;
    static ATOB_QUESTION = this.#Atob(this.#Strify("0j8"), this[1]); //&quest;
    static ATOB_AT = this.#Atob(this.#Strify("00A"), this[1]); //&commat;
    static ATOB_BACKSLASH = this.#Atob(this.#Strify("001c"), this[2]); //&bsol;
    static ATOB_CARET = this.#Atob(this.#Join(this.#undefined, this.#toArr(this.#false)), this[2]); //&Hat;
    static ATOB_UNDERSCORE = this.#Atob(this.#Join(this.#NaN, this.#toArr(this.#false)), this[2]); //&UnderBar;
    static ATOB_GRAVE = this.#Atob(this.#Strify("02A"), this[1]); //&grave;
    static ATOB_VERTICAL = this.#Atob(this.#Join(this._f, this.#toArr(this.#NaN)), this[0]); //&vert;
    static ATOB_TILDE = this.#Atob(this.#Join(this._f, this.#undefined), this[0]);

    static ATOB_C = this.#Atob(this.#Join(this.#Strify("00"), this.#toArr(this.#NaN), this.#false), this[1]);
    static ATOB_D = this.#Atob(this.#Strify("00S"), this[1]);
    static ATOB_E = this.#Atob(this.#Strify("001"), this[2]);
    static ATOB_G = this.#Atob(this.#Join(this.#Strify("00"), this.#false), this[1]);
    static ATOB_H = this.#Atob(this.#Join(this.#Strify("001"), this.#toArr(this.#Infinity)), this[2]);
    static ATOB_J = this.#Atob(this.#Strify("00r"), this[1]);
    static ATOB_K = this.#Atob(this.#Join(this.#Strify("00"), this.#true), this[1]);
    static ATOB_L = this.#Atob(this.#Strify("00y"), this[1]);
    static ATOB_M = this.#Atob(this.#Strify("000"), this[1]);
    static ATOB_P = this.#Atob(this.#Strify("01A"), this[1]);
    static ATOB_Q = this.#Atob(this.#Strify("01F"), this[1]);
    static ATOB_R = this.#Atob(this.#Join(this.#Strify("01"), this.#toArr(this.#Infinity)), this[1]);
    static ATOB_T = this.#Atob(this.#Strify("01S"), this[1]);
    static ATOB_V = this.#Atob(this.#Strify("01a"), this[1]);
    static ATOB_W = this.#Atob(this.#Join(this.#Strify("01"), this.#false), this[1]);
    static ATOB_X = this.#Atob(this.#Strify("01i"), this[1]);
    static ATOB_Y = this.#Atob(this.#Strify("01n"), this[1]);
    static ATOB_Z = this.#Atob(this.#Strify("01r"), this[1]);
    // static ATOB_Z1 = this.Atob(this.Join(this.Stringify("00"), this.toArr(this.NaN), this.toArr(this[0])), this[2]); //<-same length

    static ATOB_h = this.#Atob(this.#Join(this._a, this.#toArr(this.#NaN)), this[0]);
    static ATOB_k = this.#Atob(this.#Strify("a0"));
    static ATOB_p = this.#Atob(this.#Join(this._c, this.#toArr(this.#NaN)), this[0]);
    static ATOB_q = this.#Atob(this.#Join(this._c, this.#false), this[0]);
    static ATOB_x = this.#Atob(this.#Join(this._e, this.#toArr(this.#NaN)), this[0]);
    static ATOB_z = this.#Atob(this.#Join(this._e, this.#undefined), this[0]);

    static BTOA_EQUALS = this.#Btoa(this[0], this[2]);

    static BTOA_C = this.#Btoa(this.#Join(this[0], this._LPAR), this[1]);
    static BTOA_D = this.#Btoa(this.#Strify("00"), this[1]);
    static BTOA_E = this.#Btoa(this.#Join(this.#Strify("0"), this.#toArr(this.#NaN)), this[1]);
    static BTOA_G = this.#Btoa(this.#Join(this.#toArr(this[0]), this.#false), this[1]);
    static BTOA_H = this.#Btoa(this.#true, this[1]);
    static BTOA_J = this.#Btoa(this.#true, this[2]);
    static BTOA_K = this.#Btoa(this._PLUS, this[0]);
    static BTOA_L = this.#Btoa(this._PERIOD, this[0]);
    static BTOA_M = this.#Btoa(this[0], this[0]);
    static BTOA_P = this.#Btoa(this.#Object, this[11]);
    static BTOA_Q = this.#Btoa(this[1], this[1]);
    static BTOA_R = this.#Btoa(this.#Join(this.#toArr(this[0]), this.#true), this[2]);
    static BTOA_T = this.#Btoa(this.#NaN, this[0]);
    static BTOA_U = this.#Btoa(this.#Join(this[1], this.#toArr(this.#NaN)), this[1]);
    static BTOA_V = this.#Btoa(this.#undefined, this[10]);
    static BTOA_W = this.#Btoa(this.#undefined, this[1]);
    static BTOA_X = this.#Btoa(this.#Join(this.#toArr(this[1]), this.#true), this[1]);
    static BTOA_Y = this.#Btoa(this._a, this[0]);
    static BTOA_Z = this.#Btoa(this.#false, this[0]);

    static BTOA_h = this.#Btoa(this.#Join(this.#toArr(this[0]), this.#false), this[3]);
    static BTOA_k = this.#Btoa(this.#undefined, this[3]);
    static BTOA_p = this.#Prop(this.#Join(this.#NaN, this.#Btoa(this.#undefined)), this[10]);
    static BTOA_q = this.#Btoa(this.#Strify("00j"), this[3]);
    static BTOA_x = this.#Btoa(this.#Join(this.#false, this.#toArr(this.#false)), this[10]);
    static BTOA_z = this.#Btoa(this.#Join(this.#false, this.#toArr(this.#false)), this[11]);

    static RADIX_h = this.#Radix(this[101], this[21], this[1]);
    static RADIX_k = this.#Radix(this[20], this[21]);
    static RADIX_p = this.#Radix(this[211], this[31], this[1]);
    static RADIX_v = this.#Radix(this[31], this[32]);
    static RADIX_w = this.#Radix(this[32], this[33]);
    static RADIX_x = this.#Radix(this[101], this[34], this[1]);
    static RADIX_z = this.#Radix(this[35], this[36]);

    // "string".italics() (Deprecated)
    // "<i>string</i>" -> "<" ">" "/"
    // "string".fontcolor() (Deprecated)
    // "<font color="undefined">string</font>" -> "=" "\""
    // "<font color="<font color=&quot;undefined&quot;></font>"></font>" -> "&"
    // "<font color=true"<font color=&quot;undefined&quot;></font>"></font>" -> "q"
    static __italics = this.#Strify("italics");
    static Italics = this.#toFunc(this.#Prop(this.#string, this.__italics));
    static Italics_Pad = this.#toFunc(this.#Prop(this.#false0, this.__italics));
    static __fontcolor = this.#Strify("fontcolor");
    static Fontcolor = this.#toFunc(this.#Prop(this.#string, this.__fontcolor));
    static Fontcolor_Empty = this.#toFunc(this.#Prop(this.#string, this.__fontcolor), this.#array);
    static Fontcolor_Font = this.#toFunc(this.#Prop(this.#string, this.__fontcolor), this.Fontcolor);
    static Fontcolor_True_Font = this.#toFunc(this.#Prop(this.#string, this.__fontcolor), this.#Join(this.#true, this.Fontcolor));
    static Fontcolor_Empty_Font = this.#toFunc(this.#Prop(this.#string, this.__fontcolor), this.Fontcolor_Empty);

    static ITALICS_LESS = this.#Prop(this.Italics, this[0]);
    static ITALICS_GREATER = this.#Prop(this.Italics, this[2]);
    static ITALICS_SLASH = this.#Prop(this.Italics_Pad, this[10]);

    static FONT_EQUALS = this.#Prop(this.Fontcolor, this[11]);
    static FONT_QUOTATION = this.#Prop(this.Fontcolor, this[12]);
    static FONT_AMPERSAND = this.#Prop(this.Fontcolor_Empty_Font, this[31]);
    static FONT_SEMI = this.#Prop(this.Fontcolor_Font, this[30]);
    static FONT_q = this.#Prop(this.Fontcolor_True_Font, this[30]);

    static #Compare($0 = "") {
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
    static #LINEFEED = this.#Compare("LINEFEED");
    static get ["\n"]() {
        try {
            return this.#LINEFEED;
        } catch {}
    }
    static #SPACE = this.#Compare("SPACE");
    static get [" "]() {
        try {
            return this.#SPACE;
        } catch {}
    }
    static #EXCLAMATION = this.#Compare("EXCLAMATION");
    static get ["!"]() {
        try {
            return this.#EXCLAMATION;
        } catch {}
    }
    static #QUOTATION = this.#Compare("QUOTATION");
    static get ['"']() {
        try {
            return this.#QUOTATION;
        } catch {}
    }
    static #NUMBER = this.#Compare("NUMBER");
    static get ["#"]() {
        try {
            return this.#NUMBER;
        } catch {}
    }
    static #DOLLAR = this.#Compare("DOLLAR");
    static get ["$"]() {
        try {
            return this.#DOLLAR;
        } catch {}
    }
    static #PERCENT = this.#Compare("PERCENT");
    static get ["%"]() {
        try {
            return this.#PERCENT;
        } catch {}
    }
    static #AMPERSAND = this.#Compare("AMPERSAND");
    static get ["&"]() {
        try {
            return this.#AMPERSAND;
        } catch {}
    }
    static #APOSTROPHE = this.#Compare("APOSTROPHE");
    static get ["'"]() {
        try {
            return this.#APOSTROPHE;
        } catch {}
    }
    static #LPAR = this.#Compare("LPAR");
    static get ["("]() {
        try {
            return this.#LPAR;
        } catch {}
    }
    static #RPAR = this.#Compare("RPAR");
    static get [")"]() {
        try {
            return this.#RPAR;
        } catch {}
    }
    static #ASTERISK = this.#Compare("ASTERISK");
    static get ["*"]() {
        try {
            return this.#ASTERISK;
        } catch {}
    }
    static #PLUS = this.#Compare("PLUS");
    static get ["+"]() {
        try {
            return this.#PLUS;
        } catch {}
    }
    static #COMMA = this.#Compare("COMMA");
    static get [","]() {
        try {
            return this.#COMMA;
        } catch {}
    }
    static #MINUS = this.#Compare("MINUS");
    static get ["-"]() {
        try {
            return this.#MINUS;
        } catch {}
    }
    static #PERIOD = this.#Compare("PERIOD");
    static get ["."]() {
        try {
            return this.#PERIOD;
        } catch {}
    }
    static #SLASH = this.#Compare("SLASH");
    static get ["/"]() {
        try {
            return this.#SLASH;
        } catch {}
    }
    // static ["0"] = "";
    // static ["1"] = "";
    // static ["2"] = "";
    // static ["3"] = "";
    // static ["4"] = "";
    // static ["5"] = "";
    // static ["6"] = "";
    // static ["7"] = "";
    // static ["8"] = "";
    // static ["9"] = "";
    static #COLON = this.#Compare("COLON");
    static get [":"]() {
        try {
            return this.#COLON;
        } catch {}
    }
    static #SEMI = this.#Compare("SEMI");
    static get [";"]() {
        try {
            return this.#SEMI;
        } catch {}
    }
    static #LESS = this.#Compare("LESS");
    static get ["<"]() {
        try {
            return this.#LESS;
        } catch {}
    }
    static #EQUALS = this.#Compare("EQUALS");
    static get ["="]() {
        try {
            return this.#EQUALS;
        } catch {}
    }
    static #GREATER = this.#Compare("GREATER");
    static get [">"]() {
        try {
            return this.#GREATER;
        } catch {}
    }
    static #QUESTION = this.#Compare("QUESTION");
    static get ["?"]() {
        try {
            return this.#QUESTION;
        } catch {}
    }
    static #AT = this.#Compare("AT");
    static get ["@"]() {
        try {
            return this.#AT;
        } catch {}
    }
    static #A = this.#Compare("A");
    static get ["A"]() {
        try {
            return this.#A;
        } catch {}
    }
    static #B = this.#Compare("B");
    static get ["B"]() {
        try {
            return this.#B;
        } catch {}
    }
    static #C = this.#Compare("C");
    static get ["C"]() {
        try {
            return this.#C;
        } catch {}
    }
    static #D = this.#Compare("D");
    static get ["D"]() {
        try {
            return this.#D;
        } catch {}
    }
    static #E = this.#Compare("E");
    static get ["E"]() {
        try {
            return this.#E;
        } catch {}
    }
    static #F = this.#Compare("F");
    static get ["F"]() {
        try {
            return this.#F;
        } catch {}
    }
    static #G = this.#Compare("G");
    static get ["G"]() {
        try {
            return this.#G;
        } catch {}
    }
    static #H = this.#Compare("H");
    static get ["H"]() {
        try {
            return this.#H;
        } catch {}
    }
    static #I = this.#Compare("I");
    static get ["I"]() {
        try {
            return this.#I;
        } catch {}
    }
    static #J = this.#Compare("J");
    static get ["J"]() {
        try {
            return this.#J;
        } catch {}
    }
    static #K = this.#Compare("K");
    static get ["K"]() {
        try {
            return this.#K;
        } catch {}
    }
    static #L = this.#Compare("L");
    static get ["L"]() {
        try {
            return this.#L;
        } catch {}
    }
    static #M = this.#Compare("M");
    static get ["M"]() {
        try {
            return this.#M;
        } catch {}
    }
    static #N = this.#Compare("N");
    static get ["N"]() {
        try {
            return this.#N;
        } catch {}
    }
    static #O = this.#Compare("O");
    static get ["O"]() {
        try {
            return this.#O;
        } catch {}
    }
    static #P = this.#Compare("P");
    static get ["P"]() {
        try {
            return this.#P;
        } catch {}
    }
    static #Q = this.#Compare("Q");
    static get ["Q"]() {
        try {
            return this.#Q;
        } catch {}
    }
    static #R = this.#Compare("R");
    static get ["R"]() {
        try {
            return this.#R;
        } catch {}
    }
    static #S = this.#Compare("S");
    static get ["S"]() {
        try {
            return this.#S;
        } catch {}
    }
    static #T = this.#Compare("T");
    static get ["T"]() {
        try {
            return this.#T;
        } catch {}
    }
    static #U = this.#Compare("U");
    static get ["U"]() {
        try {
            return this.#U;
        } catch {}
    }
    static #V = this.#Compare("V");
    static get ["V"]() {
        try {
            return this.#V;
        } catch {}
    }
    static #W = this.#Compare("W");
    static get ["W"]() {
        try {
            return this.#W;
        } catch {}
    }
    static #X = this.#Compare("X");
    static get ["X"]() {
        try {
            return this.#X;
        } catch {}
    }
    static #Y = this.#Compare("Y");
    static get ["Y"]() {
        try {
            return this.#Y;
        } catch {}
    }
    static #Z = this.#Compare("Z");
    static get ["Z"]() {
        try {
            return this.#Z;
        } catch {}
    }
    static #LBRK = this.#Compare("LBRK");
    static get ["["]() {
        try {
            return this.#LBRK;
        } catch {}
    }
    static #BACKSLASH = this.#Compare("BACKSLASH");
    static get ["\\"]() {
        try {
            return this.#BACKSLASH;
        } catch {}
    }
    static #RBRK = this.#Compare("RBRK");
    static get ["]"]() {
        try {
            return this.#RBRK;
        } catch {}
    }
    static #CARET = this.#Compare("CARET");
    static get ["^"]() {
        try {
            return this.#CARET;
        } catch {}
    }
    static #UNDERSCORE = this.#Compare("UNDERSCORE");
    static get ["_"]() {
        try {
            return this.#UNDERSCORE;
        } catch {}
    }
    static #GRAVE = this.#Compare("GRAVE");
    static get ["`"]() {
        try {
            return this.#GRAVE;
        } catch {}
    }
    static #a = this.#Compare("a");
    static get ["a"]() {
        try {
            return this.#a;
        } catch {}
    }
    static #b = this.#Compare("b");
    static get ["b"]() {
        try {
            return this.#b;
        } catch {}
    }
    static #c = this.#Compare("c");
    static get ["c"]() {
        try {
            return this.#c;
        } catch {}
    }
    static #d = this.#Compare("d");
    static get ["d"]() {
        try {
            return this.#d;
        } catch {}
    }
    static #e = this.#Compare("e");
    static get ["e"]() {
        try {
            return this.#e;
        } catch {}
    }
    static #f = this.#Compare("f");
    static get ["f"]() {
        try {
            return this.#f;
        } catch {}
    }
    static #g = this.#Compare("g");
    static get ["g"]() {
        try {
            return this.#g;
        } catch {}
    }
    static #h = this.#Compare("h");
    static get ["h"]() {
        try {
            return this.#h;
        } catch {}
    }
    static #i = this.#Compare("i");
    static get ["i"]() {
        try {
            return this.#i;
        } catch {}
    }
    static #j = this.#Compare("j");
    static get ["j"]() {
        try {
            return this.#j;
        } catch {}
    }
    static #k = this.#Compare("k");
    static get ["k"]() {
        try {
            return this.#k;
        } catch {}
    }
    static #l = this.#Compare("l");
    static get ["l"]() {
        try {
            return this.#l;
        } catch {}
    }
    static #m = this.#Compare("m");
    static get ["m"]() {
        try {
            return this.#m;
        } catch {}
    }
    static #n = this.#Compare("n");
    static get ["n"]() {
        try {
            return this.#n;
        } catch {}
    }
    static #o = this.#Compare("o");
    static get ["o"]() {
        try {
            return this.#o;
        } catch {}
    }
    static #p = this.#Compare("p");
    static get ["p"]() {
        try {
            return this.#p;
        } catch {}
    }
    static #q = this.#Compare("q");
    static get ["q"]() {
        try {
            return this.#q;
        } catch {}
    }
    static #r = this.#Compare("r");
    static get ["r"]() {
        try {
            return this.#r;
        } catch {}
    }
    static #s = this.#Compare("s");
    static get ["s"]() {
        try {
            return this.#s;
        } catch {}
    }
    static #t = this.#Compare("t");
    static get ["t"]() {
        try {
            return this.#t;
        } catch {}
    }
    static #u = this.#Compare("u");
    static get ["u"]() {
        try {
            return this.#u;
        } catch {}
    }
    static #v = this.#Compare("v");
    static get ["v"]() {
        try {
            return this.#v;
        } catch {}
    }
    static #w = this.#Compare("w");
    static get ["w"]() {
        try {
            return this.#w;
        } catch {}
    }
    static #x = this.#Compare("x");
    static get ["x"]() {
        try {
            return this.#x;
        } catch {}
    }
    static #y = this.#Compare("y");
    static get ["y"]() {
        try {
            return this.#y;
        } catch {}
    }
    static #z = this.#Compare("z");
    static get ["z"]() {
        try {
            return this.#z;
        } catch {}
    }
    static #LBRC = this.#Compare("LBRC");
    static get ["{"]() {
        try {
            return this.#LBRC;
        } catch {}
    }
    static #VERTICAL = this.#Compare("VERTICAL");
    static get ["|"]() {
        try {
            return this.#VERTICAL;
        } catch {}
    }
    static #RBRC = this.#Compare("RBRC");
    static get ["}"]() {
        try {
            return this.#RBRC;
        } catch {}
    }
    static #TILDE = this.#Compare("TILDE");
    static get ["~"]() {
        try {
            return this.#TILDE;
        } catch {}
    }

    static name(params) {}

    static __alert = this.#Strify("alert");
    static Alert($0 = "") {
        try {
            return this.#Execution(this.__alert, this.#Strify($0));
        } catch {}
    }

    static __try = this.#Strify("try");
    static __catch = this.#Strify("catch");
    static __fill = this.#Strify("fill");
    static __find = this.#Strify("find");
    static __filter = this.#Strify("filter");
    static __function = this.#Strify("function");
    static __concat = this.#Strify("concat");
    static __finally = this.#Strify("finally");
    static __if = this.#Strify("if");
    static __else = this.#Strify("else");
    static __for = this.#Strify("for");
    static __big = this.#Strify("big");
    static __fromCharCode = this.#Strify("fromCharCode");
    static __fromCodePoint = this.#Strify("fromCodePoint");

    constructor($0) {
        delete this;
    }

    // static __values = this.Join(this._v, this._a, this._l, this._u, this._e, this._s);
}

var tt, ba, pt;
window.onload = () => {
    try {
        tt = document.getElementById("text");

        pt = document.getElementById("props");
        pt.innerHTML += Object.getOwnPropertyNames(JSF).sort();
        ba = Object.getOwnPropertyNames(JSF).filter((arg) => {
            let [o, $] = [JSF.regexp(JSF[arg]), JSF.regexp(JSF[arg])];
            return o && typeof JSF[arg] !== "function";
        });
        ba.forEach((arg) => {
            tt.innerHTML += `<tr id="${arg}"><td>${arg}</td><td><xmp>${JSON.stringify("" + eval(JSF[arg]))}</xmp></td><td class="jsf">${JSF[arg]}</td><td>${JSF[arg].length}</td></tr>`;
        });
    } catch (error) {
        // console.log(error);
    }
};
v = JSF.__constructor;
// v = JSF.Prop(JSF.Btoa(JSF[0]), JSF[0]);
console.log(v);
console.log(eval(v));
a = new JSF(123);
console.log(a);
