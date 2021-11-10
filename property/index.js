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

