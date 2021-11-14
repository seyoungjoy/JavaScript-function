/*
21장 빌트인 객체
1 자바스크립트 객체의 분류
- 표준 빌트인 객체
- 호스트 객체
- 사용자 정의 객체

2 표준 빌트인 객체
- 자바스크립트는 Object, String, Number, Boolean, Symbol, Date, 
Math, RegExp, Array, Map/Set, WeakMap/WeakSet, Function, Promise,
 Reflect, Proxy, JSON, Error 등 40여 개의 표준 빌트인 객체를 제공한다.


*/

// const strObj = new String('Lee');
// console.log(typeof strObj);
// console.log(String.prototype);

// const numObj = new Number(123);
// console.log(typeof numObj);

//string 생성자 함수에 의한 String 객체 생성
// const strObj = new String('Lee');
// console.log(Object.getPrototypeOf(strObj));