// 객체 리터럴
const a = {};
console.log(a, typeof a); //{} object

const b = {
    name: 'Mark'
}
console.log(b, typeof b);

const c = {
    name: 'Mark',
    hello1() {
        console.log('hello1', this.name);
    },
    hello2: function() {
        console.log('hello2', this.name);
    },
    hello3: () => {
        console.log('hello3', this.name); //undefined, this가 다르다!
    },
}

c.hello1();
c.hello2();
c.hello3();