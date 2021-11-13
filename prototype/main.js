/*
19 프로토타입
1 객체지향 프로그래밍
- 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임.
- 실체는 특징이나 성질을 나타내는 속성(attribute, property)를 가지고 있고
  이를 통해 실체를 인식하거나 구별할 수 있다.

- 객체 : 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조
- 객체지향 프로그래밍은 객체의 상태를 나타내는 데이터와
  상태 데이터를 조작할 수 있는 동작을 하나의 논리적인 단위로 묶어 생각한다.
- 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조.
- 프로퍼티(property) : 객체의 상태 데이터
- 메서드(method) : 객체의 동작

2 상속과 프로토타입
- 자바스크립트는 프로토타입을 기반으로 상속을 구현한다.

3 프로토타입 객체
- 객체지향 프로그래밍의 근간을 이루는 객체 간 상속을 구현하기 위해 사용된다.
- constructor 프로퍼티 : prototype 프로퍼티로 자신을 참조하고 있는 생성자 함수를 가리킨다.

4 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입

6.
6.3 생성자 함수에 의해 생성된 객체의 프로토타입
function Person(name){
    this.name = name;
}

//프로토타입 메서드
Person.prototype.sayHello = function(){
    console.log(`Hi! My name is ${this.name}`);
}

const me = new Person('Yang');
const you = new Person('Lee');

me.sayHello();
you.sayHello();



*/ 
function Person(name){
    this.name = name;
}

//프로토타입 메서드



// function Person(name){
//     this.name = name;
// }

// const me = new Person('Lee');

// console.log(Person.prototype);
// function Person(name){
//     this.name = name;
// }

// //프로토타입 메서드
// Person.prototype.sayHello = function(){
//     console.log(`Hi! My name is ${this.name}`);
// }

// const me = new Person('Yang');
// const you = new Person('Lee');

// me.sayHello();


// function Person(name){
//     this.name = name;
// }

// const me = new Person('Lee');

// console.log(me.constructor === Person);



// const obj = {};
// const parent = {x:1};



// const person = {name : 'Lee'};
// console.log(person);

// function Circle(radius){
//     this.radius = radius;
// }
// //Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를 공유해서
// //사용할 수 있도록 프로토타입에 추가한다.
// // 프로토타입은 Circle 생성자 함수의 prototpe 
// Circle.prototype.getArea = function(){
//     return Math.PI * this.radius ** 2;
// }

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);

// //Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는

// console.log(circle1.getArea === circle1.getArea);
// console.log



//생성자 함수
// function Circle(radius){
//     this.radius = radius;
//     this.getArea = function(){
//         //Math.PI는 원주율을 나태내는 상수
//         return Math.PI * this.radius ** 2;
//     };
// }

// // 반지름이 1인 인스턴스 생성
// const circle1 = new Circle(1);

// // 반지름이 2인 인스턴스 생성
// const circle2 = new Circle(2);

// console.log(circle1.getArea === circle2.getArea);

// console.log(circle1.getArea());
// console.log(circle2.getArea());



// const circle = {
//     radius : 5,
//     getDiameter(){
//         return 2 * this.radius;
//     },
//     getPerimeter(){
//         return 2 * Math.PI * this.radius;
//     },
//     getArea(){
//         return Math.PI * this.radius ** 2;
//     }
// };

// console.log(circle);

// console.log(circle.getDiameter());