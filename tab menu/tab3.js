
const tabItem = document.querySelectorAll('.tab-container > li')
const tabContent = document.querySelectorAll('.content-container > article')

for(i=0; i<tabItem.length; i++){
    tabItem[i].addEventListener('click', tabHandler);
}

// tabItem.forEach((item)=> {
//     item.addEventListener('click',tabHandler);
// });

function tabHandler(e){
    const tabTarget = e.currentTarget;
    const target = tabTarget.dataset.tab;

    for(x=0; x<tabItem.length; x++){
        tabItem[x].classList.remove('active');
    }

    for(y=0; y<tabContent.length; y++){
        tabContent[y].classList.remove('target');
    }

    // tabItem.forEach((title) => {
    //     title.classList.remove('active');
    // })
    // tabContent.forEach((target) =>{
    //     target.classList.remove('target');
    // })
    
    document.querySelector('#'+ target).classList.add('target');
    tabTarget.classList.add('active');
}


// const tabItem = document.querySelectorAll('.tab-container > li')
// const tabContent = document.querySelectorAll('.content-container > article')

// tabItem.forEach((item) => {
//     item.addEventListener("click", tabHandler);
// });

// function tabHandler(e){
//     const tabTarget = e.currentTarget;
//     const target = tabTarget.dataset.tab;

//     tabItem.forEach((title) => {
//         title.classList.remove("active");
//     });
//     tabContent.forEach((target)=>{
//         target.classList.remove("target");
//     });
//     document.querySelector('#' + target).classList.add('target');
//     tabTarget.classList.add('active');

// }
