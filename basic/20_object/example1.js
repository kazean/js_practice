// 생성자 함수

function A() {}
const a = new A();
console.log(a, typeof a); // A{} object
console.log(A()); undefined

// 생서하면서 데이터 넣기
function B(name, age) {
    console.log(name, age);
}
const b = new B(); // undefined undefined
const c = new B('Mark', 37); // Mark 37
console.log(B());
/*
undefined undefined
undefined
*/