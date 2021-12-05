# Errow Function
## 화살표 함수
본문이 한 줄인 함수를 작성할 때 유용하다.  
<br>
## 문법
```
let func = (arg1, arg2) => expression
```
<br>
위의 표현은 아래 함수의 축약 버전이라고 할 수 있다.  
```
let func = function(arg1, arg2){
    return expression;
};
```
<br>
인수가 하나밖에 없다면 인수를 감싸는 괄호를 생략할 수 있다.
```
// let double = function(n){
//     return n * 2;
// }

let double = n => n*2;

alert(double(4)); // 8
```


