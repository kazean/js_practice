// prototype

function Person (name, age) {
    this.name = name;
    this.age = age;
    // this.hello = function () {
    //     console.log('hello', this.name, this.age);
    // }    
}

Person.prototype.hello = function() {
    console.log('hello', this.name, this.age)
}

const p = new Person('Mark', 37);
p.hello();
console.log(p.toString()); //object, Object

console.log(Person.prototype); // {}
console.log(Person.prototype.toString); //[Function: toString]
console.log(Person.prototype.constructor); //[Function: Person]
console.log(Person.prototype.hello);
/*
Person.prototype.hello = function() {
    console.log('hello', this.name, this.age)
}
> [Function (anonymous)]
*/

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person); //true
console.log(p instanceof Object); //true