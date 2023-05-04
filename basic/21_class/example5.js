// get, set, 내부적으로만 쓸때에는 '_'를담(형식적)
class A {
    _name = 'no name';

    get name() {
        return this._name + '@@@';
    }

    set name(name) {
        this._name = name + '!!!';
    }
}
const a = new A();
console.log(a);
a.name = 'Mark'; //setter
console.log(a);
console.log(a.name); //getter
console.log(a._name);

// readonly
class B {
    _name = 'no name';

    get name() {
        return this._name + '@@@';
    }
}
const b = new B();
console.log(b);
B.name = 'Mark';
console.log(b);