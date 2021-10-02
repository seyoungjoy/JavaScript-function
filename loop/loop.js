var fruits = ["apple", "orange", "cherry"];
// for 
for(var i = 0; i<fruits.length; i++){
    document.getElementById('for').innerHTML += '<li>'+fruits[i]+'</li>';
}

// forEach
// i += 1, i= i+1, 
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