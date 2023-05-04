function Person(name, age) {
	this.name = name;
	this.age = age;
}
const p = new Person('Mark', 37);
console.log(p, typeof p);
console.log(p, p.name, p.age);