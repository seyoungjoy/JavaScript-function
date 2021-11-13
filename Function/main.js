// function add(x, y){
//     return x + y;
// }

// console.log(add(1,3));

// function add(x, y){
//     return x + y;
// }

// const result = 0;

// result = add(1,2);

// //함수 선언문
// function add(x, y){
//     return x + y;
// }

// //함수 참조
// //console.dir은 console.log와 달리 함수 객체의 프로퍼티까지 출력한다.
// // 단 node.js 환경에서는 console.log와같은 결과가 출력됨.

// console.dir(add); //f add(x, y)
// console.log(add(2,5)) //7

// function foo() {console.log('foo');}

// foo();//foo

// //함수 참조
// console.dir(add);
// console.dir(sub); 

// //함수 호출
// console.log(add(2,5));
// console.log(sub(2,5)); 

// //함수 선언문
// function add(x, y){
//     return x+y;
// }

// //함수 표현식
// var sub = function (x,y){
//     return x-y;
// }

// function add(x,y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
//     }
//     return x + y;
// }

// console.log(add(2));

// function multiply(x, y){
//     return x +y;
// }

// var result = u

// function add(x,y){
//     return x + y;
// }

// let result = add(2,6);

// console.log(result);

// function add(x,y){
//     return x+y;
// }

// result = add(1,2);

// console.log(result);

// var add = function (x,y){
//     return x+y;
// }

// console.log(add(1,2));

// function add(x,y){
//     return x+y;
// }

// console.dir(add);

// function add(x,y){
//     return x + y;
// }

// var result = add(1,2);

// console.log(result);

// var f = function add(x,y){
//     return x + y;
// }

// function add(x,y){
//     return x + y;
// }

// const add = 

// //함수 참조
// //console.dir 은 console.log아 달리 함수 객체의 프로퍼티까지 출력한다.
// //단 Node.js 환경에서는 console.log 와 같은 결과가 출력된다.

// console.dir(add);

// console.log(add(2,5));

//함수 선언문은 표현식이 아닌 문이므로 변수에 할당할 수 없다.
//하지만 함수 선언문이 변수에 할당되는 것처럼 보인다.

// var addFunction = function add(x,y){
//     return x + y;
// }

// console.log(addFunction(2,3));

// var add = function add(x,y){
//     return x+ y;
// }

// console.log()

// function add(x,y){
//     return x+y;
// }

// //함수 호출
// //인수 1과 2가 매개변수 x와 y순서대로 할당되고 몸체의 문들이 실행된다.

// var result = add(1,2);

// //매개변수는 함수를 정의할 때 선언하며, 함수 몸체 내부에서 변수와 동일하게 취급된다.

// function add(x,y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
//     }

//     return x+ y;
// }

// console.log(add(2));

// $.ajax({
//     method : 'POST',
//     url : '/user',
//     data : {id : 1, name: 'Lee'},
//     cache:false
// })

// function foo(){
//     return;
// }

// consoe]

// //매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
// function changeVal(primitive, obj){
//     primitive += 100;
//     obj.name = 'kim';
// }

// //외부 상태
// var num = 100;
// var person = {name : 'Lee'};

// console.log(num);
// console.log(person);

// //원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
// changeVal(num, person);

// //익명 즉시 실행 함수
// (function (){
//     var a = 3;
//     var b = 5;
//     return a*b;
// }());

// var res = (function(){
//     var a = 3;
//     var b = 5;
//     return a * b;
// }(5,2));

// console.log(res);

// function countdown(n){
//     for (var i = n; i >= 0; i--)
//     console.log(i);
// }

// countdown(10);

// n만큼 어떤 일을 반복한다.
// function repeat(n){
//     for(var i = 0; i <n; i++) console.log(i);
// }
// repeat(5);

// //n만큼 어떤 일을 반복한다.
// function repeat1(n){
//     for (var i = 0; i < n; i ++) console.log(i);
// }

// repeat1(5);

// function repeat(n,f){
//     for (var i =0; i < n; i++){
//         f(i);
//     }
// }

// var logAll = function (i){
//     console.log(i);
// }

// repeat(5,logAll);

// function add(x,y){
//     // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
//     // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
//     console.log(x,y);
//     return x + y;
// }

// add(2,5);

// //매개변수는 함수 몸체 내부에서만 참조할 수 있다.

// var var1 = 1; //코드의 가장 바깥 영역에서 선언한 변수

// if(true){
//     var var2 = 2; //코드 블록 내에서 선언한 변수
//     if(true){
//         var var3 =3; //중첩된 콬드 블록 내에서 선언한 변수
//     }
// }

// function foo(){
//     var var4 = 4; // 함수 내에서 선언한 변수

//     function bar(){
//         var var5 = 5; //중첩된 함수 내에서 선언한 변수
//     }
// }

// console.log(var1); //1
// console.log(var2); //2
// console.log(var3); //3
// console.log(var4); //ReferenceError
// console.log(var5); //ReferenceError

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
//     //아래 변수 선언문은 자바스크립트 에진에 의해 var 키워드가 없는 것처럼 동작한다.

//     var x = 2;
//     console.log(x);
// }
// foo();

// //하지만 let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.

// function bar(){
//     let x =1;
//     let x =2;
// }
// bar();