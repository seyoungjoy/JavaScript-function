var fruits = ["apple", "orange", "cherry"];
// for 
for(var i = 0; i<fruits.length; i++){
    document.getElementById('for').innerHTML += '<li>'+fruits[i]+'</li>';
}

// forEach
/*
for문과 마찬가지로 반복적인 기능을 수행할 때 사용한다.
for문처럼 index와 조건식, increase를 정의하지 않아도 
callback 함수를 통해 기능을 수행할 수 있다.

*/

//기본적인 사용법
const arr = [0,1,2,3,4,5,6,7,8,9,10]

for(i=0; i<arr.length; i++){
    //console.log(arr[i]);
}

arr.forEach(function(element){
    //console.log(element);
});
//arrow 함수로도 표현 가능.
arr.forEach(element => console.log(element));

//홀수 배열 만들어보기
const oddArray = [];

arr.forEach(function(el){
    if(el%2==1){
        oddArray.push(el);
    }
});
console.log(oddArray);




fruits.forEach(function(item, index){
    document.getElementById('foreach').innerHTML += '<li>'+item+'</li>';
});



// for of
var item;

for (item of fruits){
    document.getElementById('forof').innerHTML += '<li>'+item+'</li>';
}


//배열안에 있는 하나하나의 값을 item으로 부를게

//for in(객체내의 값들마다 할일, 객체는 값들만 나열되어있는것이 아니라, 그것들의 타이틀과 세트로 이루어진, 객체 = 변수(property) + 함수(method) )
var person = { pname : '홍길동', page : '200', pgender:'남성'};
var x;
//person[pname] -> 홍길동
for (x in person){
    document.getElementById('forin').innerHTML += '<li>'+x+':'+person[x]+'</li>';

}

//do / while
var y = 0;
do{
    document.getElementById('dowhile').innerHTML += '<li>'+fruits[y]+'</li>';
    y++;

}
while(y < fruits.length); //조건 : 이게 참일동안 발동.