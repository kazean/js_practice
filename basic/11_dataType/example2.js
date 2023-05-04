// Boolean
const isTrue = true;
const isFalse = false;

console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);

// 이렇게 사용하진 않지만, 내장 객체로도 된다 : object
const a = new Boolean(false);
console.log(a, typeof a);

if (a) {
    console.log('false?');
    // object이기에 조건문에서 true로 리턴
}

const b = Boolean(false); //Primitive values
console.log(b, typeof b);
if (b) {
    console.log('false?');
}