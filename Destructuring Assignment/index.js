//구조 분해 할당
//함수에 객체나 배열을 전달해야하는 경우
//그리고 객체나 배열에서 필요한 일부만 사용해야하는 경우
//객체나 배열을 변수로 분해할 수 있게 해주는 특별한 문법

//코드 양이 줄어즌다.

// let arr = ["Bora", "Lee"];

// let [firstName, surname] = arr;

// console.log(firstName)

// let arr = ["Bora", "Lee"];

// let firstName = arr[0];
// let surname = arr[1];

// console.log(firstName)
// console.log(surname)

// let [firstName, surName] = "Bora Lee".split(' ');
// console.log(firstName)
// console.log(surName)

// let [a,b, ,d] = "vo so wo ao".split(' ');
// console.log(a);
// console.log(b);
// // console.log();
// console.log(d);

// let [a,b,c] = "abc";
// let [one, two, three] = new Set([1,2,3]);
// console.log(one)

// let user = {
//     name:"John",
//     age:30
// }

// for(let [key,value] of Object.entries(user)){
//     alert(`${key}:${value}`);
// }

// let guest = "Jane";
// let admin = "Pete";

// [guest, admin] = [admin, guest];

// console.log(`${guest} ${admin}`)

// let [a,b, ...rest] = [1,2,3,4]

// console.log(a)
// console.log(b)
// console.log(rest)
// console.log(rest[0]);
// console.log(rest.length)

//객체 분해하기
// let options = {
//     width:100,
//     title:"Menu",
    
//     height:200
// };

// let {title, width, height} = options;
// console.log(title);

let options = {
    title:"Menu",
    width:100,
    height:200
}

let {width, height} = options;

console.log(width);
console.log(height);