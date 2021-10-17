// //XMLHttpRequest 객체 생성
// const xhr = new XMLHttpRequest();

// //HTTP 요청 초기화
// xhr.open('GET', '/users');

// //HTTP 요청 헤더 설정
// // 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정 : json
// xhr.setRequestHeader('content-type', 'application/json');

// //HTTP 요청 전송
// xhr.send();

// //XMLHttpRequest 객체 생성
// const xhr = new XMLHttpRequest();

// //HTTP 요청 초기화
// xhr.open('POST','/users');

// //HTTP 요청 헤더 설정
// //클라이언트가 서버로 전송할 데이터의 MIME 타입 지정 : json
// xhr.setRequestHeader('content-type', 'application/json');

// //HTTP 요청 전송
// xhr.send(JSON.stringify({id:1, content:'HTML', completed:false}));

// //XMLHttpRequest 객체 생성
// const xhr = new XMLHttpRequest();

// //HTTP 요청 초기화
// xhr.open('GET', 'https://jsonplaceholder.typicode/todos/1');

// //HTTP 요청 전송
// xhr.send();

// xhr.onreadystatechange = () =>{
//     if(xhr.readyState !== XMLHttpRequest.DONE) return;

//     if(xhr.status === 200){
//         console.log(JSON.parse(xhr.response));
//     } else {
//         console.log('Error', xhr.status, xhr.statusText);
//     }
// }

const obj5 = {
    name : "Lee",
    age : 20,
    alive : true,
    hobby : ['traveling', 'tennis']
};

//객체를 JSON 포맷의 문자열로 변환한다.
const json5 = JSON.stringify(obj5,null,3);
console.log(typeof json5, json5);
//string {"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}

//객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기 한다.
// const prettyJson = JSON.stringify(obj);
// console.log(typeof prettyJson, prettyJson);
// string {
//     "name": "Lee",
//     "age": 20,
//     "alive": true,
//     "hobby": [
//       "traveling",
//       "tennis"
//     ]
//   }

// //replacer 함수. 값의 타입이 Number이면 필터링되어 반환되지 않는다.
// function filter(key, value){
//     return typeof value=== 'number' ? undefined : value;

// }

// //JSON.stringify 메서드에 두 번째 인수로 replacer 함수를 전달한다.

// const strFilterObject = JSON.stringify(obj, filter, 2);
// console.log(typeof strFilterObject, strFilterObject);

//string {
//  "name": "Lee",
//  "alive": true,
//  "hobby": [
//    "traveling",
//   "tennis"
//  ]
//}