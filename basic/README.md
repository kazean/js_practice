# JavaScript
## 1. 자바스크립트란 무엇인가
프로그래밍 언어
- 스크립트 언어, 인터프리터 언어
> 자바X, 자바스크립트 엔진에서 해석되고 실행(대표 엔진: 웹브라우저)

## 2. Various JavaScript Runtime
각종 웹 브라우저, Node.js, Electron
- ECMA(ES5 ~ ES8, ES2018, ES2019)

## 3. 실습을 위한 준비
chrome, VSCode
- chapter1/clip3.js
> console.log('Hello JavaScript');
>> (terminal)node clip3.jsㅈㅈ

## 4. Expression Statement
값을 만들어내는 간단한 코드를 표현식 이라고 합니다
> true, 26, 1000 + 900 + 90 + 4, "Anna", "Hello" + "JavaScript" 다 표현식이다

- 표현식은 값을 만들어내기 때문에 함수의 인자로 사용할 수 있다.
> alert(arg)
- Statement
> 하나 혹은 여러 개의 표현식의 모여 문장을 이룹니다  
모든 표현식은 문장이 될 수 있습니다  
(보통) 문장의 끝에는 세미 콜론을 붙입니다  
> true;, 26;, 1000 + 900 + 90 + 4;  
var name = "Mark", Alert('Hello');  

- 한 줄에 여러 문자을 적을 경우, 세미 콜론으로 문장을 구분해야 합니다  
마지막 문장은 세미 콜론을 붙이지 않아도 문제가 없습니다  
마지막 문장의 결과가 반환됩니다
> true;, 26;, 1000 + 900 + 90 + 4
>> 1994

- 조건문(if), 반복문(for)도 문장입니다  
이 경우에는 마지막 } 뒤에 세미콜론을 붙이지 않습니다  
문장들이 이루어져 프로그램이 됩니다

## 5. Keywords, Reserved Words
- Keywords
> 자바스크립트에서 특정한 목적을 위해 사용되는 단어  
이러한 키워드들은 예약어(?)로 지정되어 있습니다.
```
var name = 'Mark';
return
function
for
```

- Reserved keywords
> 이미 특정한 목적을 위해 사용하기 때문에 사용할 수 없는 예약어
```
break, case, catch, continue, ...
if, in, instanceof, ...
```

- Future reserved keywords
> 앞으로 특정한 목적을 위해 사용할 가능성이 있어서 사용할 수 없는 예약어
```
abstract, boolean, class, extends, ...
```

## 6. Identifier(식별자)
코드 내의 변수, 함수, 혹은 속성을 식별하는 문자열
- 대소문자를 구별
- 유니코드 문자(ex, 한글), '$', '_', '숫자(0-9)'를 사용할 수 있지만, 숫자로 시작할 수는 없습니다
- 예약어, 공백 사용할 수 없다

## 7. Comments(주석)
- //, /* ~ */

## 8. 변수와 상수(variable and constant)
- const 이름 = 값;
> 바로 값을 대입해주어야 함
- let 이름;
> 변경 가능, undefined

## 9. 변수의 유효 범위(Scope of vairables)
- `const, let의 유효 범위`
> 블록 스코프
>> example1.js  
블록(조건문, 반복문, 함수, arrow 함수)
- `var의 유효 범위`
> 함수 스코프(ES5) > 블록 스코프(ES6)
- 함수
```
function() {}
```
> example4.js, example5.js
>> `var라는 키워드는 함수 스코프를 가지고 있기에 에러가 나지 않음, 보통 프로그래밍은 블록 스코프기반이라서 let과 const`

## 10. var와 호이스팅(var & hoisting)
- Hoisting
> ECMAScript 2015 언어 명세 맟 그 이전에 사용된 적이 없는 용어
>> example1,2.js
아래 있는 선언을(만) 끌어올리는것(함수, 변수(var))

- example3.js
```
console.log(name);
name = 'Mark';
console.log(name);

var name = 'Woongjae';
```
> !undefined, Mark, var name;만 위로 올라간다.
>> var name > let name은 호이스팅 문제가 없다. name is not defined

## 11. 자료형 (Data Types)
MDN web docs 자바스크립트의 자료형
- 동적 타이핑
> 변수가 가지는 고정 타입이 없다, 하지만 타입이 없는 것은 아니다
- 데이터 타입
```
기본 타입(Primitive values)
	Boolean
	Null
	Undefined
	Number
	String
	Symbol (ES6)
객체(Objects)
```
- example2(Boolean)
> 내장 객체

- example3(Null, Undefined)
> === 비교

- example4(Number)
> Number('36') 형 변환, NaN

- example5(String)
```
'', ""  
const a = 'Mark';
Template String `${a} Lee`
```
> '', `Template String `

- example6(`Symbol`)
```
const a = Symbol('Mark');
const b = Symbol('Mark');
console.log(a, typeof a); //Mark, symbol
console.log(a === b); //false
```
> 고유한 값을 만들어 내고 싶을때  
new X

## 12. 조건문(Conditional Statements) - 1
표현식이 참으로 평가될 때 실행되는 블록
- if () {}
- 표현식이 거짓으로 평가될 때: Falsy
> false, 0, '', null, undefined, NaN
- 표현식이 참으로 평가될 때: Truethy
> true, 37, 'Mark', {}, []
- else {}

## 13. 조건문 - 2
- else if {}

## 14. 조건문 - 3
- 논리 연산자를 이용한 조건문 평가: &&, ||, !
- 논리 연산자를 이용한 조건부 실행
> 표현식 && 표현식: 앞 표현식이 참 일때만, 뒤 표현식을 평가  
앞 표현식의 평가가 거짓일때는 평가할 필요가 없어 실행하지 않는다.  
표현식 || 표현식

## 15. 조건문 - 4
- 삼항 연산자를 이요한 조건부 실행
```
n % 5 === 0 ? <true> : <false>
```
- switch를 이용한 조건문
```
let n = 5;
swich (n % 5)  {
	case 0: {
		console.log('5의 배수 입니다');
		break;
	}
	default:
		console.log(n);
}
```

## 16-1. 반복문(Iteration Statements) - 1
- for
```
for (초기화; 반복 조건; 반복이 된 후 실행되는 코드) {
	~
}
```
> break, continue
- for(;;)

## 16-2. 반복문 - 2
- while
```
while( 조건 ) { }
```

## 17. 함수(function) A
- function
```
function hello() { }
console.log(hello, typeof hello) // [Function: hello1] 'function'
```
> [Function: hello1] 'function', 내장객체이다  
매개변수, 리턴
- 선언적 function과 익명함수를 만들어 변수에 할당
> const func1 = function() {}: (Hoisting시) func1 is not defined

## 18. 함수 B
- 생성자 함수로 함수를 만드는 방법: 자주 사용X
```
const hello = new Function(인자1, 인자2, ..., 함수의 바디);
const sum = new Function('a', 'b', 'c', 'return a + b + c');
```
- function과 new Function() 차이점
```
global.a = 0;
{
	const a = 1;
	const test = new Function('return a');
	console.log(test());
}
```
> new Function: global인 경우만 인식  
function(): 블록 안에 변수를 읽음
- arrow 함수: () => {}
> 항상 익명함수, 매개변수 하나일 때 괄호 생략 가능, 리턴(중괄호 생략)

## 19. 함수 C
- 생성자 함수: new 함수();
```
function Person(name, age) {
	console.log(this); // Person {}
	this.name = name;
	this.age = age;
}
const p = new Person('Mark', 37);
console.log(p, p.name, p.age); // Person { name: 'Mark', age: 37}, ~
```
> arrow함수에서는 함수 안에 this가 생기지 않기 때문에 생성자 함수로는 사용할 수 없다.
- 함수안에서 함수를 만들어 리턴
```
function plus(base) {
	return function(num) {
		return base + num;
	}
}
const plus5 = plus(5);
console.log(plus5(10));
```
- 함수를 호출할 때, 함수를 인자로 하여 함수를 호출
```
function hello(c) {
	console.log('hello');
	c();
}
hello(function() {
	console.log('rollback');
})
```

## 20-1. 객체(Object) A
- 함수, 클래스(틀) > 객체, 개체, Object
- function 틀() {} > new 틀(): 생성자로 함수 객체 만들기
- 객체에 속성 추가하기: property
> 값, 속성

## 20-2. 객체B
- new Object(): Object로 객체 만들기
> 기초 객체, 내장 객체
- 프로토타입 체인: .prototype
> 프로토타입으로 모든 객체를 표현할 수 있다, 프로토타입을 이용한 상속 방식을 사용

## 20-3. 객체C
- 프로토타입을 이용한 객체 확장: .prototype
> 프로토타입 체인으로 객체를 확장할 수 있다.
- 객체 리터럴
> {}, arrow func의 this 다름

## 20-4. 객체D
- 표준 내장 객체
> Object, Function, Array, Boolean, Symbol, ...

## 21. 클래스 A
- 객체를 만들 수 있는 새로운 방법: es6 class
> 기존의 prototype기반을 좀 더 명료하게 사용할 수 있게 도와줌  
class A {}, new A();
- constructor: 생성자
> constructor 생성자, 멤버변수  
class A{ constructor(){ }}

## 22. 클래스 B
- 멤버 변수: 객체의 프로퍼티
> 멤버 변수, 직접 지정(런타임)
```
class A {
	name;
	age;
}
```
- 멤버 함수
> this, 객체 자신(arrow func 포함)

## 23. 클래스 C
- get, set
```
// get, set
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
a.name = 'Mark'; //set
console.log(a.name); //get
```
> '_' 는 내부에서 쓴다는 형식적 표기, 외부에서 값을 바꾸지 말자
- readonly
- static 변수, 함수: 객체가 아니고, 클래스의 변수와 함수
> static  
new B().hello(): TypeError  
static name: 클래스 

## 24. 클래스 D (extends)
- 상속의 기본 extends
- override: 클래스의 상속 멤버 변수 및 오버라이딩, 추가
- super: 클래스의 상속 생성자 함수 변경
- static: 클래스의 상속 static 상속

## 25. Promise-1
`Promise` 개체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과값을 나타냅니다.
```
const p = new Promsie((resolve, reject) => {

})
```
> pending, fulfilled(resolve()),  rejected(reject())  
p.then(callback());

## 26. Promise-2
- Promise 객체 생성 시점(실무)
> function을 만들어서 활용
- then(), catch()
> 함수의 인자 활용, Error 객체

## 27. Promise-3
- 일반적인 callback과 Promise 차이
> 메서드 체이닝
- Promise.finally()

## 28. Promise-4
- Promise.resolve(prmoise or value)
> Promise 실행 또는 value 반환
- Promise.reject()
- Promise.all([promises]).then((messages) => {})s
- Promise.race([promises]).then((message) => {})

## 29. async function과 await-1
`async function` 선언은 AsyncFunction 객체를 반환하는 하나의 비동기 함수를 정의, ES2017  
암시적으로 Promise를 사용하여 결과를 반환합니다. 표준 동기 함수를 사용하는 것과 많이 비슷하다.
- async function 함수이름() { }  
const 함수이름 = async () => { }
- async func, await
> await: Promise 실행, await는 async 전역에서 실행되어야 한다.
```
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

(async function main() {
    const ms = await p(1000);
    console.log(`${ms} ms 후에 실행된다.`);
})();
```
> rejected 경우, try-catch-finally 사용

## 30. async function과 await-2
- Promise와 async await 차이
> Promise 메서드 체인, async await 마치 표준 동기 함수를 사용하는 것과 같다

## 31. 프로젝트 개요
## 32. 리스트 페이지
## 33. 로그인 페이지

## 34. 책 추가하기
## 35. 책 정보 보기
## 36. 책 정보 수정 