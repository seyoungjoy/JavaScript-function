//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners

todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(event){
    event.preventDefault(); //버튼 클릭시 기본 설정된 페이지 새로고침을 막아줌.
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

}

/*
변수 선언
이벤트 리스너로 클릭시 해당 함수 작동하도록함
함수 설정
*/