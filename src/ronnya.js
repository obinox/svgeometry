const p = Math.pow;
const h = Math.abs;
const g = Math.sign;
class Vector {
    #x;#y;#z;#w;
    constructor(x, y, z = 0){
        if (typeof x === "number" && typeof y === "number" && typeof z === "number"){
            this.#x = x; this.#y = y; this.#z = z; this.#w = 0;
        } else { throw TypeError; }
    }

    get x() { return this.#x; }
    get y() { return this.#y; }
    get z() { return this.#z; }
    get w() { return this.#w; }

    set x(k) { if (typeof k === "number") { this.#x = k; } else { throw TypeError; } }
    set y(k) { if (typeof k === "number") { this.#y = k; } else { throw TypeError; } }
    set z(k) { if (typeof k === "number") { this.#z = k; } else { throw TypeError; } }
    set dx(k) { if (typeof k === "number") { this.#x += k; } else { throw TypeError; } }
    set dy(k) { if (typeof k === "number") { this.#y += k; } else { throw TypeError; } }
    set dz(k) { if (typeof k === "number") { this.#z += k; } else { throw TypeError; } }
    set px(k) { if (typeof k === "number") { this.#x *= k; } else { throw TypeError; } }
    set py(k) { if (typeof k === "number") { this.#y *= k; } else { throw TypeError; } }
    set pz(k) { if (typeof k === "number") { this.#z *= k; } else { throw TypeError; } }

    norm() { return p(p(this.x, 2) + p(this.y, 2) + p(this.z, 2) + p(this.w, 2), 1/2); }
    static norm(v){
        if (v instanceof Vector) {
            return v.n();
        } else { throw TypeError; }
    }

    add(v) {
        if (v instanceof Vector) {
            this.dx = v.x; this.dy = v.y; this.dz = v.z;
        } else { throw TypeError; }
    }
    static add(u, v) {
        if (u instanceof Vector && v instanceof Vector) {
            return new Vector(u.x + v.x, u.y + v.y, u.z + v.z);
        } else { throw TypeError; }
    }

    sub(v) {
        if (v instanceof Vector) {
            this.dx = -v.x; this.dy = -v.y; this.dz = -v.z;
        } else { throw TypeError; }
    }
    static sub(u, v) {
        if (u instanceof Vector && v instanceof Vector) {
            return new Vector(u.x - v.x, u.y - v.y, u.z - v.z);
        } else { throw TypeError; }
    }

    dot(v) {
        if (v instanceof Vector) {
            return this.x * v.x + this.y * v.y + this.z * v.z;
        } else { throw TypeError; }
    }
    static dot(u, v) {
        if (u instanceof Vector && v instanceof Vector) {
             return u.x * v.x + u.y * v.y + u.z * v.z;
        } else { throw TypeError; }
    }

    cross(v) {
        if (v instanceof Vector) {
            let _x, _y, _z;
            _x = this.x; _y = this.y; _z = this.z;
            this.x = _y * v.z - _z * v.y;
            this.y = _z * v.x - _x * v.z;
            this.z = _x * v.y - _y * v.x;
        } else { throw TypeError; }
    }
    static cross(u, v) {
        if (u instanceof Vector && v instanceof Vector) {
            return new Vector(
                u.y * v.z - u.z * v.y,
                u.z * v.x - u.x * v.z,
                u.x * v.y - u.y * v.x
            );
        } else { throw TypeError; }
    }

    scalar(k) {
        if (typeof k === "number") {
            this.px = k; this.py = k; this.pz = k;
        } else { throw TypeError; }
    }
    static scalar(v, k) {
        if (typeof k === "number" && v instanceof Vector) {
            return new Vector(k * v.x, k * v.y, k * v.z);
        } else { throw TypeError; }
    }

    reverse() { this.s(-1); }
    static reverse(v) { 
        if (v instanceof Vector) {
            return Vector.s(v, -1); 
        } else { throw TypeError; }
    }

    unit() { this.s(1 / this.n()); }
    static unit(v) { 
        if (v instanceof Vector) {
            return Vector.s(v, 1 / v.n()); 
        } else { throw TypeError; }
    }

    inverse() { this.s(1 / p(this.n(), 2)); }
    static inverse(v) { 
        if (v instanceof Vector) {
            return Vector.s(v, 1 / p(v.n(), 2)); 
        } else { throw TypeError; }
    }

    cos(u, v = undefined) {
        if (u instanceof Vector) {
            if (v instanceof Vector) {
                let _u, _v;
                _u = Vector.b(u, this); _v = Vector.b(v, this)
                return Vector.d(_u, _v) / (_u.n() * _v.n());
            } else {
                return Vector.d(this, u) / (this.n() * u.n());
            }
        } else { throw TypeError; }
    }
    static cos(u, v, w = undefined) {
        if (u instanceof Vector && v instanceof Vector) {
            if (w instanceof Vector) {
                let _v, _w;
                _v = Vector.b(v, u); _w = Vector.b(w, u)
                return Vector.d(_v, _w) / (_v.n() * _w.n());
            } else {
                return Vector.d(u, v) / (u.n() * v.n());
            }
        } else { throw TypeError; }
    }

    sin(u, v = undefined) {
        if (u instanceof Vector) {
            if (v instanceof Vector) {
                let _u, _v;
                _u = Vector.b(u, this); _v = Vector.b(v, this)
                return Vector.c(_u, _v).n() / (_u.n() * _v.n());
            } else {
                return Vector.c(this, u).n() / (this.n() * u.n());
            }
        } else { throw TypeError; }
    }
    static sin(u, v, w = undefined) {
        if (u instanceof Vector && v instanceof Vector) {
            if (w instanceof Vector) {
                let _v, _w;
                _v = Vector.b(v, u); _w = Vector.b(w, u)
                return Vector.c(_v, _w).n() / (_v.n() * _w.n());
            } else {
                return Vector.c(u, v).n() / (u.n() * v.n());
            }
        } else { throw TypeError; }
    }

    
    // method rename
    a = this.add; static a = Vector.add;
    b = this.sub; static b = Vector.sub;
    c = this.cross; static c = Vector.cross;
    d = this.dot; static d = Vector.dot;
    i = this.inverse; static i = Vector.inverse;
    n = this.norm; static n = Vector.norm;
    r = this.reverse; static r = Vector.reverse;
    s = this.scalar; static s = Vector.scalar;
    u = this.unit; static u = Vector.unit;
    static #v0 = new Vector(0, 0, 0);
    static #v1 = new Vector(1, 0, 0);
    static #v2 = new Vector(0, 1, 0);
    static #v3 = new Vector(1, 1, 0);
    static #v4 = new Vector(0, 0, 1);
    static #v5 = new Vector(1, 0, 1);
    static #v6 = new Vector(0, 1, 1);
    static #v7 = new Vector(1, 1, 1);
    static get zero() { return Vector.#v0; }
    static get ux() { return Vector.#v1; }
    static get uy() { return Vector.#v2; }
    static get uz() { return Vector.#v4; }
}

class Poly {
    #v;
    constructor(...v) {
        if (v === undefined || v === null) { throw TypeError; }
        if (v.every((_v) => _v instanceof Vector)){
            this.#v = v;
        } else { throw TypeError; }
    }

    get vectors() { return this.#v; }
    
    norm() {
        let _v, _l, _s;
        _v = this.vectors; _l = _v.length; _s = 0;
        for (let i = 0; i < _l; i++) {
            _s += _v[i].x * (_v[(i + 1) % _l].y - _v[(_l + i - 1) % _l].y);
        }
        return _s / 2;
    }
    static norm(p) {
        if (p instanceof Poly) {
            return p.n();
        } else { throw TypeError; }
    }

    area() {
        return h(this.n());
    }
    static area(p) {
        if (p instanceof Poly) {
            return p.a();
        } else { throw TypeError; }
    }

    sign() {
        return g(this.n());
    }
    static sign(p) {
        if (p instanceof Poly) {
            return p.g();
        } else { throw TypeError; }
    }

    path() {
        let _v, _l, _s;
        _v = this.vectors; _l = _v.length; _s = 0;
        for (let i = 0; i < _l - 1; i++) {
            _s += Vector.b(_v[i + 1], _v[i]).n();
        }
        return _s;
    }
    static path(p) {
        if (p instanceof Poly) {
            return p.p();
        } else { throw TypeError; }
    }

    cycle() {
        let _v, _l;
        _v = this.vectors; _l = _v.length;
        return this.p() + Vector.b(_v[0], _v[_l - 1]).n()
    }
    static cycle(p) {
        if (p instanceof Poly) {
            return p.p();
        } else { throw TypeError; }
    }
    
    // method rename
    a = this.area; static a = Poly.area;
    c = this.cycle; static c = Poly.cycle;
    g = this.sign; static g = Poly.sign;
    n = this.norm; static n = Poly.norm;
    p = this.path; static p = Poly.path;
}

class Plane {
    //TODO
    // 1. three point (v0, v1, v2 )
    // 2. a point and a line (v, l)
    // 3. two intersect line (l0, l1)
    // 4. two parrall line (l0, l1)
}
class Line {
    //TODO consturctor
    // start point + facting vector(second point) (v0, v1)
}

//test area
var va = new Vector(3, 1);
var vb = new Vector(1, 8);
var vo = Vector.zero;
var vc = Vector.inverse(va);
console.log(va, vb, vc);
console.log(va.n())
console.log(Vector.s(va, 9))
console.log(Vector.n(va));
console.log(Vector.cos(va, vb))
console.log(va.sin(vb))
console.log(va.cos(vb, vo))
console.log(va.sin(vb, vo))
var pl = new Poly(va, vb, vo);
console.log(pl);
console.log(pl.p())
console.log(pl.c())
