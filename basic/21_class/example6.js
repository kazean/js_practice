// static 변수, 함수
class A {
    static age = 37;
    static hello() {
        console.log(A.age);
    }
}

console.log(A, A.age);
A.hello();

class B {
    age = 37;
    static hello() {
        console.log(this.age);
    }
}
console.log(B, B.age);
B.hello();
// new B().hello(); // TypeError

// static name 은 클래스의 이름을 뜻한다
class C {
    static name = '이 클래스에 이름을 C 가 아니다';
}
console.log(C);