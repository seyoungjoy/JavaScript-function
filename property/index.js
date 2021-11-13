/*
프로퍼티 어트리뷰트
1 내부 슬롯과 내부 메서드
- 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다.
  일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공한다.

2. 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어리트뷰트를 기본값으로 자동 정의한다.

4 프로퍼티란


*/

// const person = {
//     //데이터 프로퍼티
//     firstName = 'Ungmo',
//     lastName = 'Lee',

//     //fullName은 접근자 합수로 구성된 접근자 프로퍼티다.
//     //getter 함수
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     },
//     //setter 함수
//     set fullName(name){
//         [this.firstName, this,this.lastName] = name.split(' ');
//     }
// };

// //데이터 프로퍼티를 통한 프로퍼티 값의 참조.
// console.log(person)


// const person = {
//     name : 'Lee'
// }

//프로퍼티 동적 생성.
// console.log(person.name)
// person.age = 20;

// console.log(Object.getOwnPropertyDescriptors(person));

//프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// const o = {};
// // o.[[Prototype]]
// o.__proto__


// const o = {};

// //내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다.

// o.[[Prototype]] -> Uncaught SyntaxError: Unexpected token '['
// //단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.

// o.__proto__

// const person = {
//     name: 'Lee'
// }

// //프로퍼티 어리트뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// const person = {
//     name:'Lee'
// }

// // 프로퍼티 동적 생성
// person.age = 20;

// //모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
// console.log(Object.getOwnPropertyDescriptors(person));

