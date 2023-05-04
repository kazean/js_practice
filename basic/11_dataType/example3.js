// Null
const a = null;
console.log(a, typeof a); // null, object

// Undefined
let b;
console.log(b, typeof b);
b = undefined;
console.log(b, typeof b);

if ( a == b ) {
    console.log(a == b); // true
}

if ( a === b ) {
    console.log(a === b);
}