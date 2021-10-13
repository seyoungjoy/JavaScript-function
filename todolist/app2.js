const plusBtn = document.querySelector('.plus');
const plusList = document.querySelectorAll('.plus-list');
// console.log(plusList);

plusBtn.addEventListener("click", addTdList);

function addTdList(event){
    event.preventDefault();

    //create li
    const newLi = document.createElement('div');
    newLi.innerText = 'hello';
    newLi.classList.add('todo-list-item');

    plusList.appendChild(newLi);
}