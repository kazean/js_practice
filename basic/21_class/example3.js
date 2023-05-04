// 멤버 변수
class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
console.log(new A('Mark', 37)); //A { name: 'Mark', age: 37 }

// class field는 런타임 확인
class B {
    name;
    age;
}
console.log(new B()); //node 12v 이상, chrome 72

class C {
    name = 'no name';
    age = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
console.log(new C('Mark', 37));