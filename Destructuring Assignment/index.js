//구조 분해 할당
// 객체나 배열을 변수로 연결할때 사용.
//함수에 객체나 배열을 전달해야하는 경우
//그리고 객체나 배열에서 필요한 일부만 사용해야하는 경우
//객체나 배열을 변수로 분해할 수 있게 해주는 특별한 문법

//코드 양이 줄어즌다.



//배열 분해하기
let arr = ["a", "b"]

// let a1 = arr[0];
// let a2 = arr[1];

let [a1, a2] = arr;

console.log(a1);
console.log(a2);

let [firstName, surName] = "Bora Lee".split(' ');
console.log(firstName)
console.log(surName)

let [a,b,c, ...rest] = [1,2,3,4,5,6,7,8,9,10]
console.log(a)
console.log(b)
console.log(c)
console.log(rest)

//객체 분해하기

let options = {
    title:"Menu",
    width:100,
    height:200
}

let {title, width, height} = options;

console.log(title)
console.log(width)
console.log(height)