
class Vector {
    constructor(x, y){
        this._x = x;
        this._y = y;
    }

    get norm() { return Math.pow(Math.pow(this._x, 2) + Math.pow(this._y, 2), 1/2); }

    get x() { return this._x; }
    get y() { return this._y; }

    add(x, y) {
        this._x += x;
        this._y += y;
    }
    addV(v) {
        this._x += v.x;
        this._y += v.y;
    }
    static inPdt(v0, v1) {
        return v0.x*v1.x+v0.y*v1.y;
    }
    static outPdt(v0, v1) {
        
    }
}

var a = new Vector(3, 5);
var b = new Vector(2, 7);
console.log(a, b);
console.log(Vector.inPdt(a, b));