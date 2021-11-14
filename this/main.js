/*
22장 this
1 this 키워드
- this : 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는
자기 참조 변수다. 
this를 통해 자신이 속한 객체 또는 자신이 생성할 
인스턴스의 프로퍼티나 메서드를 참조할 수 있다.

- this 바인딩 : 식별자와 값을 연결하는 과정을 의미. 
예를 들어 변수 선언은 변수 이름(식별자)과 확보된 메모리 공간의 주소를 바인딩하는 것.
this 바인딩은 this와 this가 가리킬 객체를 바인딩하는 것.

- 자바스크립트의 this는 함수가 호출되는 방식에 따라 this에 바인딩될 값.
즉 this 바인딩이 동적으로 결정된다.

2 함수 호출 방식과 this 바인딩
- this 바인딩(this에 바인딩될 값)은 함수 호출방식, 즉 함수가 어떻게
호출되었는지에 따라 동적으로 결정된다.

2.1 일반 함수 호출 
- 기본적으로 this에는 전역 객체가 바인딩된다.

2.3 생성자 함수 호출
- 생성자 함수 내부의 this에는 생성자 함수가 생성할 인스턴스가 바인딩된다.


*/
// const person = {
//     name : 'Lee',
//     getName(){
//         //메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
//         return this.name;
//     }
// }
// //메서드 getName을 호출한 객체는 person이다.
// console.log(person.getName());


// var value = 1;

// const obj = {
//     value: 100,
//     foo(){
//         //this 바인딩(obj)을 변수 that 에 할당한다.
//         const that = this;

//         //콜백 함수 내부에서 this 대신 that을 참조한다.
//         setTimeout(function(){
//             console.log(that.value);
//         },100);
//     }
// };
// obj.foo();


// //var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티다.
// var value = 1;
// //const 키워드로 선언한 전역 변수 valeu는 전역객체의 프로퍼티가 아니다.
// //const value=1;

// const obj = {
//     value:100,
//     foo(){
//         console.log("foo's this: ", this);
//         console.log("foo's this.value:", this.value);

//         //메서드 내에서 정의한 중첩 함수
//         function bar(){
//             console.log("bar's this: ", this);
//             console.log("bar's this.value: ", this.value);
//         }
//         //메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는
//         //전역 객체가 바인딩된다.
//         bar();
//     }
// }
// obj.foo();



// var value = 1;

// const obj = {
//     value:100,
//     foo(){
//         console.log("foo's this: ", this);
//         setTimeout(function(){
//             console.log("callback's this: ", this);
//             console.log("callback's this.value: ", this.value);
//         }, 100);
//     }
// }
// obj.foo();



// function foo(){
//     // console.log("foo's this: ", this);
//     function bar(){
//         console.log("bar's this:", this);
//     }
//     bar();
// }
// foo();



//this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
// const foo = function(){
//     console.log(this);
// }

//동일한 함수도 다양한 방식으로 호출할 수 있다.

//1 일반 함수 호출
// foo 함수를 일반적인 방식으로 호출
// foo 함수 내부의 this는 전역 객체 window를 가리킨다.

// foo();

//2 메서드 호출
//foo 함수를 프로퍼티 값으로 할당하여 호출
// foo 함수 내부의 this는 메서드를 호출한 객체 obj를 가리킨다.

// const obj = {foo};
// obj.foo();

//3 생성자 함수 호출
//foo 함수를 new 연산자와 함께 생성자 함수로 호출



//this는 어디서든지 참조 가능다.
//전역에서 this는 전역 객체 windows를 가리킨다.
// console.log(this);

// function square(number){
//     //일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
//     // console.log(this);
//     return number * number;
// }

// square(2);
// // console.log(square(2));

// const person = {
//     name : 'Lee',
//     getName(){
//         //메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
//         console.log(this);
//         return this.name;
//     }
// }
// // person.getName();
// // console.log(person.getName());

// function Person(name){
//     this.name = name;
//     //생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
//     console.log(this);
// }

// const me = new Person('Lee');


// const circle = {
//     //프로퍼티 : 객체 고유의 상태 데이터
//     radius: 5,
//     //메서드 : 상태 데이터를 참조하고 조작하는 동작
//     getDiameter(){
//         //이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
//         //자신이 속한 객체인 circle을 잠조할 수 있어야한다.
//         return 2 * circle.radius;
//     }
// };

// console.log(circle.getDiameter());

// function Circle(radius){
//     //이 시점에서 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
//     ????.radius = radius;
// }

// Circle.prototype.getDiameter = function(){
//     //이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
//     return 2 * 
// }

//객체 리터럴
// const circle = {
//     radius: 5,
//     getDiemater(){
//         return 2 * this.radius;
//     }
// }
// console.log(circle.getDiemater());

//생성자 함수
// function Circle(radius){
//     // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
//     this.radius = radius;
// }

// Circle.prototype.getDiameter = function(){
//     //this는 생성자 함수가 생성할 인스턴스를 가리킨다.
//     return 2 * this.radius;
// }

// //인스턴스 생성
// const circle = new Circle(2);
// console.log(circle.getDiameter())