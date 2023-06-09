// 표준 내장 객체: Array
const a = new Array('red', 'black, white');
console.log(a, typeof a); //['red', 'black', 'white'] object
console.log(a instanceof Array);
console.log(a instanceof Object);

// 리터럴
const b = ['red', 'green', 'yello'];
console.log(b, typeof b);
console.log(b instanceof Array);
console.log(b instanceof Object);

console.log(b.slice(0, 1));
console.log(Array.prototype.slice, Object.prototype.slice); //[Function: slice] undefined