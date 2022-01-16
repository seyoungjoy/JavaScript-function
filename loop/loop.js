// //for 반복문

// var fruits = ["apple", "orange", "cherry"];

// for(var i = 0; i<fruits.length; i++){
//     document.getElementById('for').innerHTML += '<li>'+fruits[i]+'</li>';
// }

// /*-----------------------------------------------*/

// const arr = [0,1,2,3,4,5,6,7,8,9,10]

// for(i=0; i<arr.length; i++){
//     //console.log(arr[i]);
// }

// /*-----------------------------------------------*/

// //두 개의 주사위를 던졌을 때 두 눈 의 합이 6이 되는 모든 경우의 수 출력하기
// // for (var i = 1; i<=6; i++){
// //     for(var j = 1; j <=6; j++){
// //         if(i + j === 6) console.log(`[${i}, ${j}]`);
// //     }
// // }

// /*=======================================================*/

// //while
// //주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행한다.
// // for 문은 반복 횟수가 명확할 때 주로 사용하고 while 문은 반복 횟수가 불명확할 때 주로 사용한다.
// // while문은 조건문의 평가 결과가 거짓이 되면 코드 블록을 종료한다.

// var count = 0;

// while(count < 3){
//     // console.log(count);
//     count++;
// }

// // if 문으로 탈출 조건을 만들고 break 문으로 코드블록을 탈출한다.
// var count = 0;

// while(true){
//     // console.log(count);
//     count++;
//     if(count === 3) break;
// }

// //do...while문
// var count = 0;
// do{
//     // console.log(count);
//     count++;
// } while(count < 3);


// var y = 0;
// do{
//     document.getElementById('dowhile').innerHTML += '<li>'+fruits[y]+'</li>';
//     y++;

// }
// while(y < fruits.length); //조건 : 이게 참일동안 발동.



// /*=======================================================*/
// //break 문 - 레이블, 반복문, switch 문의 코드 블록 내에서만 사용.
// /*
// if (true){
//     break; //SyntaxError
// }
// */

// //식별자가 붙은 문을 레이블 문이라고 한다.
// // foo: console.log('foo');

// // foo:{
// //     console.log(1);
// //     break foo;
// //     console.log(2);
// // }

// // console.log('Done!');

// // outer: for (var i = 0; i < 3; i++){
// //     for(var j = 0; j < 3; j++){
// //         if(i + j ===3) break outer;
// //         console.log(`inner[${i}, ${j}]`);
// //     }
// // }

// // console.log('Done!');

// //문자열에서 특정 문자의 인덱스(위치)를 검색하는 예다.
// var string = 'Hello World';
// var search = 'l';
// var index;

// for (var i = 0; i < string.length; i++){
//     if (string[i] === search){
//         index = i;
//         break;
//     }
// }

// console.log(index);

// /*=======================================================*/
// //continue 문
// // 반복문의 코드 블록 실행을 현 지점에서 중단하고
// // 반복문의 증감식으로 실행 흐름을 이동시킨다. break 문처럼 반복문을 탈출하지는 않는다.




// /*=======================================================*/
// // forEach
// /*
// for문과 마찬가지로 반복적인 기능을 수행할 때 사용한다.
// for문처럼 index와 조건식, increase를 정의하지 않아도 
// callback 함수를 통해 기능을 수행할 수 있다.

// */




// arr.forEach(function(element){
//     //console.log(element);
// });
// //arrow 함수로도 표현 가능.
// // arr.forEach(element => console.log(element));

// //홀수 배열 만들어보기
// const oddArray = [];

// arr.forEach(function(el){
//     if(el%2==1){
//         oddArray.push(el);
//     }
// });
// // console.log(oddArray);




// fruits.forEach(function(item, index){
//     document.getElementById('foreach').innerHTML += '<li>'+item+'</li>';
// });



// // for of
// var item;

// for (item of fruits){
//     document.getElementById('forof').innerHTML += '<li>'+item+'</li>';
// }


// //배열안에 있는 하나하나의 값을 item으로 부를게

// //for in(객체내의 값들마다 할일, 객체는 값들만 나열되어있는것이 아니라, 그것들의 타이틀과 세트로 이루어진, 객체 = 변수(property) + 함수(method) )
// var person = { pname : '홍길동', page : '200', pgender:'남성'};
// var x;
// //person[pname] -> 홍길동
// for (x in person){
//     document.getElementById('forin').innerHTML += '<li>'+x+':'+person[x]+'</li>';

// }

// let sum = 0;

// while(true){
//     let value = +prompt("숫자를 입력하세요",'');

//     if(!value) break;
//     sum += value;
// }

// alert('합계 : ' + sum);

// let i = 3;

// while (i) {
//   alert( i-- );
// }

let x = 3;
const y = x++;

console.log()