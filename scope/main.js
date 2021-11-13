
/*
1 스코프란?
- 식별자가 유효한 범위
- 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
- 모든 식별자는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다.
- var 키워드는 중복 선언을 허용하나, let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.


2 스코프의 종류
- 전역 변수 : 어디서든지 참조할 수 있는 변수
- 지역 변수 : 지역이란 함수 몸체 내부를 말한다. 지역변수는 자신이 선언된 지역과
하위 지역에서만 참조할 수 있다. 즉, 지역 변수는 자신의 지역 스코프와 하위 지역 스코프에서 유효하다.

3 전역 변수의 문제점
- 지역 변수의 생명 주기는 함수의 생명 주기와 일치한다.
- 암묵적 결합
- 긴 생명 주기
*/

// function add(x,y){
//     //매개변수는 함수 몸체 내부에서만 참조할 수 있다.
//     //즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.

//     console.log(x,y);
//     return x+y;
// }

// add(2,5);

// //매개변수는 함수 몸체 내부에서만 참조할 수 있다.
// console.log(x,y);

// var var1 = 1; //코드의 가장 바깥 영역에서 선언한 변수

// if(true){
//     var var2 = 2; //코드 블록 내에서 선언한 변수
//     if( true){
//         var var3 = 3;
//     }
// }

// function foo(){
//     var var4 = 4;

//     function bar(){
//         var var5 = 5;
//     }
// }

// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(var4);
// console.log(var5);

// var x = 'global';

// function foo(){
//     var x = 'local';
//     console.log(x);
// }

// foo();

// console.log(x);

// function foo(){
//     var x = 1;
//     //var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
//     //아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.

//     var x = 2;
//     console.log(x); // 2
// }
// foo();

// //하지만 let이나 const 키워드로 선언된 변수는 같은 스포크 내에서 중복 선언을 허용하지 않는다.

// function bar(){
//     let x = 1;
//     //let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
//     let x - 2;
// }
// bar();

// var x = "global x";
// var y = "global y";

// function outer(){
//     var z = "outer's local z";

//     console.log(x);
//     console.log(y);
//     console.log(z);

//     function inner(){
//         var x = "inner's local x";

//         console.log(x); //inner's local x
//         console.log(y); //global y
//         console.log(z); //outer's local z
//     }
//     inner();
// }

// outer();

// console.log(x);
// console.log(z);

//함수는 중첩될 수 있으므로 함수의 지역 스코프도 중첩될 수 있다.
// 

// //전역 함수
// function foo(){
//     console.log('global function foo');
// }

// function bar(){
//     //중첩 함수
//     function foo(){
//         console.log('local function foo');
//     }
//     foo();
// }
// bar();

/*

*/

// function foo(){
//     var x = 'local';
//     console.log(x);
//     return x;
// }
// // foo();
// console.log(x);

// var x = 'global';

// function foo(){
//     console.log(x);
//     var x = 'local';
// }
// foo();
// console.log(x);

// var x = 'global';

// function foo(){
//     var x = 'local';
//     console.log(x);
//     return x;
// }

// foo();
// console.log(x);