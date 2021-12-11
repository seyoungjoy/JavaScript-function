//문제를 일정 부분 이상 맞추면
//그 값에 따라 그 사람을 천재 바보로 결과를 내주는 프로그램
//그 문제를 각자 만들수 있고
//점수에 따른 그런 결과값도 지정할수가 있어
//그에 따른 이미지같은것도 지정할수가 있고.




//조건문
//1 if...else 문 : 논리적 참, 거짓에 따라 실행할 코드 블록을 결정

//switch 문
//월을 영어로 변환한다(11 -> 'November')

// var month = 1;
// var monthName;

// switch(month){
//     case 1: monthName = 'J';
//     break;
//     case 2: monthName = 'F';
//     break;
//     case 3: monthName = 'M';
//     break;
//     default: monthName = 'Invalid moth';
    
// }

// console.log(monthName);

// 2000년은 윤년으로 2월이 29일이다
var year = 2000;
var month = 2;
var days = 0;

switch (month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invalid month');
}
console.log(days);

// var num = 2;
// var kind;

// if(num >0) kind='양수';
// else if(num<0) kind='음수';
// else kind='영';
// console.log(kind);

// var x = 1;
// var result;

// if(x % 2){
//     result='홀';
// } else{
//     result='짝';
// }
// console.log(result);

// let x =2;
// let result = x%2 ? '홀' : '짝';
// console.log(result);

// x % 2 ? result='홀' : result='짝';
// console.log(result);



// var num=-1;
//     var kind;

//     //if문
//     if(num > 0){
//         kind = '양수';
//     }

//     //if...else문
//     if(num > 0){
//         kind = '양수';
//     } else{
//         kind = '음수';
//     }

//     //if...else if문
    
//     if(num > 0){
//         kind = '양수';
//     } else if (num < 0){
//         kind = '음수';
//     } else {
//         kind = '영';
//     }

//     //if else 생략
//     var num = 0;
//     var kind;

//     if (num > 0) kind = '양수';
//     else if (num < 0) kind = '음수';
//     else kind = '0';

//     //if else 문으로 - 변수가 짝수인지 홀수인지 구별하기.
//     var x = 1;
//     var result;

//     if (x % 2){ //2 % 2 = 0, 0이면 false로 암묵적으로 강제 변환된다.
//         result = '홀수';
//     } else {
//         result = '짝수';
//     }

//     //삼항 조건 연산자로 바꿔 쓰기
//     var x = 2;

//     var result = x % 2 ? '음수' : '짝수';

//     //만약 경우즤 수가 (양수, 음수, 0 일때)
//     var num = 0;
//     var kind = num ? (num > 0 ? '음수' : '짝수') : '0';

//     console.log(kind);