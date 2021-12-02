// button.onclick = (e) => {
//     if(e.altKey && e.shiftKey){
//         alert('야호!');
//     }
// }

let box = document.querySelector('.box');


box.addEventListener('dblclick', function(){
    alert('click');
    this.onmousedown = () =>{
        return false;
    }
})