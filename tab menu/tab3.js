const tabItem = document.querySelectorAll('.tab-container > li')
const tabContent = document.querySelectorAll('.content-container > article')

tabItem.forEach((item) => {
    item.addEventListener("click", tabHandler);
});

function tabHandler(e){
    const tabTarget = e.currentTarget;
    const target = tabTarget.dataset.tab;

    tabItem.forEach((title) => {
        title.classList.remove("active");
    });
    tabContent.forEach((target)=>{
        target.classList.remove("target");
    });
    document.querySelector('#' + target).classList.add('target');
    tabTarget.classList.add('active');

}

/*
==========event.target 과 event.currentTarget 차이점===========

target은 내가 클릭한 자식의 요소를 반환한다.
currentTarget은 이벤틑가 부착된 부모의 위치를 반환한다.



*/