# JavaScript-function
자바스크립트를 이용해 기능을 구현을 연습해봅니다.

## TodoList 만들기
[유튜브 참고 링크](https://youtu.be/Ttf3CEsEwMQ)<br>

### 원하는 form 복사하기
### preventDefault
폼이 제출되어지는 것을 방지한다.

### document.createElement()<br>
이 메서드는 tagname의 html 요소를 만들어 반환한다.
```
document.body.onload = addElement;

function addElement(){
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("환영합니다!");
}
```