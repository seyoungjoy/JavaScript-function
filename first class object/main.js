/*
18장 함수와 일급 객체
1 일급객체
- 무명의 리터럴로 생성할 수 있다. 즉 런타임에 생성이 가능한다.
- 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
- 함수의 매개변수에 전달할 수 있다.
- 함수의 반환값으로 사용할 수 있다.

2 함수 객체의 프로퍼티
arguments, length, name, prototype프로퍼티는 모두 함수 객체의
데이터 프로퍼티다.

2.1 arguments 프로퍼티
- 함수 호출 시 전달된 인수들의 정보를 담고 있다.

2.2 length 프로퍼티
- 함수를 정의할 때 선언한 매개변수의 변수를 가리킨다.

2.3 name 프로퍼티
- 함수 이름을 나타낸다.

*/
// function foo(){
//     console.log(foo.length);

//     function bar(X){
//         reut
//     }
// }

// function sum(){
//     let res = 0;

//     ///arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수 있다.
//     for(let i = 0; i< arguments.length; i++){
//         res += arguments[i];
//     }
//     return res;

// }
// console.log(sum());
// console.log(sum(1,2));
// console.log(sum(1,2,3));


// const increase = function(num){
//     return ++num;
// };
// console.log(increase(1))

// const decrease = function(num){
//     return --num;
// }
// console.log(decrease(6))

// const predicates = {increase, decrease};

// function makeCounter(predicates){
//     let num = 0;

//     return function(){
//         num = predicates(num);
//         return num;
//     }
// }

// const increase = makeCounter(predicates.increase);
// console.log(increaser());

// function square(number){
//     return number * number;
// }

// // console.dir(square);
// // console.log(Object.getOwnPropertyDescriptors(square));
// console.log(Object.getOwnPropertyDescriptor(square, '__'))

// function multiply(x,y){
//     console.log(arguments);
//     return x * y;

// }
// // console.log(multiply());
// // console.log(multiply(1));
// console.log(multiply(1,2));

