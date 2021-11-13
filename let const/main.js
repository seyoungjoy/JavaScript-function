
/*
let, const 키워드와 블록 레벨 스코프

1 var 키워드로 선언한 변수의 문제점.
- 중복 선언이 가능한다.
- 함수 레벨 스코프에서 전역 변수를 남발할 가능성 : 오로지 함수의 코드 블록만을 지역 스코프로 인정하는 함수 레벨 스코프를 따른다.
- 변수 호이스팅 : var 키워드로 변수를 선언하면 스코프의 선두로 끌어 올려진 것처럼 동작하는 것.

2 let 키워드
- 변수 중복 선언 금지
- 블록 레벨 스코프를 가진다.
- 변수 호이스팅 : 변수 호이스팅이 발생하지 않는 것처럼 동작한다.

3 const 키워드
- 상수를 선언하기 위해 선언.
- 상수는 재할당이 금지된 변수를 말한다.

*/

// const person = {
//     name : 'Lee'
// };
// //객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능한다.
// person.name = 'Kim';
// console.log(person);

// var 키워드로 선언한 변수는 런타임 이전에 선언 단계와 초기화 단계가 실행된다.
//따라서 변수 선언문 이전에 변수를 참조할 수 있다.

//런타임 이전에 선언 단계까 실행된다. 아직 변수가 초기화되지 않았다.
//초기화 이전의 일시적 사각지대에서는 변수를 참조할 수 없다.
// console.log(foo);

// let foo;
// // console.log(foo);

// foo = 1;
// console.log(foo);

// console.log(foo);

// var foo;
// console.log(foo);


// let i = 100;

// function foo(){
//     let i = 100;

//     for(let i = 1; i < 3; i++){
//         console.log(i); // 1 2 
//     }

//     console.log(i); //100
// }

// foo();
// console.log(i);

// let foo = 1;
// {
//     let foo=2;
//     let bar=3;
// }

// console.log(foo);
// console.log(bar);


// var x = 1;

// if(true){
//     //x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x 변수는 중복 선언된다.
//     // 이는 의도치 않게 변수값이 변경되는 부작용을 발생시킨다.
//     var x = 10;
// }

// var i = 10;

// //for문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i 가 있으므로 중복 선언된다.
// for (var i =0; i < 5; i++){
//     console.log(i)
// }

//이 시점에서 변수 호이스팅에 의해 이미 foo 변수가 선언되었다.
//변수 foo는 undefined로 초기화 된다.
// var foo;

// console.log(foo);

// foo =123;

// console.log(foo);

// var foo = 123;
// //var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
// let bar = 123;
// let bar = 456;