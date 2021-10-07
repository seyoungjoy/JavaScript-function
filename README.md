# JavaScript-function
Vanilla Javascript 공부 중입니다 :)

## TodoList 만들기
[유튜브 참고 링크](https://youtu.be/Ttf3CEsEwMQ)<br>

### 원하는 form 복사하기
### 📌preventDefault
폼이 제출되어지는 것을 방지한다.

### 📌document.createElement()<br>
이 메서드는 tagname의 html 요소를 만들어 반환한다.<br>
ex) .createElement('h1')은 다음과 같은 요소를 반환한다. 
````
<h1></h1>
````

### 📌document.createTextNode()<br>
이 메서드는 선택한 요소에 텍스트를 추가한다.

ex) createTextNode('hello')는 hello라는 문자열을 만든다.

### 📌Node.appendChild()<br>
이 메서드는 선택한 요소 안에 자식 요소를 추가한다.

### 📌Element.append()<br>
이 메서드는 노드 객체(Node Object)나 DOMstring(text)를 추가할 수 있다.<br>
또한 여러 개의 자식 요소를 설정할 수 있다.
````
//Node object 삽입
const parent = document.createElement('div');
const child = document.createElement('p');

parent.append(child);

//결과
//<div><p></p></div>

//DOMstring 삽입
const parent = document.createElement('div');
parent.append('안녕하세용');

//결과
//<div>안녕하세용</div>

//여러개의 자식 요소를 설정
const createDiv = document.createElement('div');
const createP = document.createElement('p');
const createSpan = document.createElement('span');

document.body.append(createDiv, 'hello!', createP, createSpan);

//result
//<div></div>
//hello!
//<p></p>
//<span></span>
````


### 📌Node.insertBefore()<br>
이 메서드는 tagname의 html 요소를 만들어 반환한다.

