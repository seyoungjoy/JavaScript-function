import hello_word from "./hello.js";
import world_word from  "./world.js";
document.querySelector('#root').innerHTML= hello_word + ' ' + world_word;

//entry 파일, 입구파일이다. 
//웹팩을 이용해 이 입구파일을 번들링한다.