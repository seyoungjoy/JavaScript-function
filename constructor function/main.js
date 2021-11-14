/*
17장 생성자 함수에 의한 객체 생성

1 Object 생성자 함수
생성자 함수란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다.
인스턴스 : 생성자 함수에 의해 생성된 객체를 인스턴스라 한다.

2 생성자 함수
2.1 객체 리터럴에 의한 객체 생성 방식의 문제점
객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다.
따라서 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매번 같은 프로퍼티를 기술애햐 하는 비효율적인 면이 있다.

2.2 생성자 함수에 의한 객체 생성 방식의 장점
*this : 생성자 함수로서 호출되면, 생성자 함수가 생성할 인스턴스를 가리킨다.

2.3 생성자 함수의 인스터스 생성 과정
생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한
템플릿(클래스)로서 동작하여 인스턴스를 생성하는 것과
생성된 인스턴스를 초기화하는 것이다.

*** 생성자 함수 내부에서 return 문을 반드시 생략해야 한다.

(1) 인스턴스 생성과 this 바인딩
바인딩(식별자와 값을 연결하는 과정, this 바인딩은 this와 this가 가리킬 객체를 바인딩하는 것.)

2.4 내부 메서드
함수는 객체다.
function foo(){}
함수는 개체이므로 프로퍼티를 소유할 수 있다.
foo.prop = 10;
함수는 객체이므로 메서드를 소유할 수 있다.
foo.method = function(){
    console.log(this.prop);
}

2.5 constructor와 non-constructor의 구분
constructor : 함수 선언문, 함수 표현식, 클래스
non-constructor : 메서드, 화살표 함수

- 일반함수 정의 : 함수 선언문, 함수 표현식
function (){}
const bar = function(){}

2.6 new 연산자


*/




// function Circle(radius){
//     //이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined
//     if(!new.target){
//         //new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
//         return new Circle(Radius);
//         this.radius = radius;
//         this.getDiameter = function(){
//             return 2 * this.radius;
//         }
//     }
// }
// const circle = Circle(5);


//생성자 함수
// function Circle(radius){
//     this.radius = radius;
//     this.getDiameter = function(){
//         return 2 * this.radius;
//     }
// }

// const circle = Circle(5);
// // console.log(circle);

// console.log(radius);

//생성자 함수로서 정의하지 않은 일반 함수
// function add(x,y){
//     return x+y;
// }

// //생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
// let inst = new add();

// //함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환된다.
// // console.log(inst);

// //객체를 반환하는 일반 함수
// function createUser(name, role){
//     return{name, role};
// }

// //일반 함수를 new 연산자와 함께 호출
// inst = new createUser('Lee', 'admin');
// //함수가 생성한 객체를 반환한다.
// console.log(inst);


// function foo(){}
//일반 함수로서 호출
//


//일반 함수 정의 : 함수 선언문, 함수 표현식
// function foo(){
// }
// const bar = function(){};
// //프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
// const baz = {
//     x: function(){}
// }

// //일반 함수로 정의된 함수만이 constructor이다.
// new foo();



// //함수는 객체다.
// function foo(){}

// //함수는 객체이므로 프로퍼티를 소유할 수 있다.
// foo.prop = 10;

// // 함수는 객체이므로 메서드를 소유할 수 있다.
// foo.method = function(){
//     console.log(this.prop);   
// }

// foo.method();



// function Circle(radius){
//     //1 암묵적으로 빈 객체가 생성되고 this에 바인딩된다.

//     //2 this에 바인딩되어있는 인스턴스를 초기화한다.

//     this.radius = radius;
//     this.getDiameter = function(){
//         return 2 * this.radius;
//     }

//     //3 암묵적으로 this를 반환한다.
//     //명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
//     return 100;
// }

// // 인스턴스를 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다.
// const circle = new Circle(1);
// console.log(circle);


//반지름이 다른 여러개의 원을 만들고 싶다.
// function Circle(radius){
//     //1 암묵적으로 인스턴스가 생성되고 this에 바인딩 된다.
//     console.log(this);
//     this.radius = radius;
//     this.getDiameter = function(){
//         return2 * this.radius;
//     }
// }


// function foo(){
//     console.log(this);
// }

// //일반적인 함수로서의 호출
// //전역 객체는 브라우저 환경에서는 window, node.js 환경에서는 global을 가리킨다.
// foo();

// const obj = {foo};


// //생성자 함수
// function Circle(radius){
//     //생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
//     this.radius = radius;
//     this.getDiameter = function(){
//         return 2 * this. radius;
//     };
// }

// // 인스턴스의 생성
// const circle1 = new Circle(5);
// const circle2 = new Circle(10);

// console.log(circle1.getDiameter());
// console.log(circle2.getDiameter());


// const circle1 = {
//     radius: 5,
//     getDiameter(){
//         return 2 * this.radius;
//     }
// }

// console.log(circle1.getDiameter());

// const circle2 = {
//     radius : 10,
//     getDiameter(){
//         return 2 * this.radius;
//     }
// }
// console.log(circle2.getDiameter());
//객체는 프로퍼티를 통해 객체 고유의 상태를 표현한다.



// //String 생성자 함수에 의한 String 객체 생성
// const strObj = new String('Lee');
// console.log(typeof strObj);
// console.log(strObj);

// //Number 생성자 함수에 의한 Number 객체 생성
// const numObj = new Number(123);
// console.log(typeof numObj);
// console.log(numObj);

// const myInfo = new Seyoung(123);
// console.log(typeof myInfo);

// // 빈 객체의 생성
// const person = new Object();

// //프로퍼티 추가
// person.name = 'Lee';
// person.sayHello = function(){
//     console.log('Hi!' + this.name);
// };

// console.log(person);
// person.sayHello();
