//1 content 내용이 안보이게 한다.
//2 

const targetLink = document.querySelectorAll('.tab-menu >li a');
const tabContent = document.querySelectorAll('.tab-content > div');

for(i=0; i<targetLink.length; i++){
    targetLink[i].addEventListener('click', function(e){
        e.preventDefault();
        
        const orgTarget = e.target.getAttribute('href');
        const tabTarget = orgTarget.replace('#', '');
        
        for(x=0; x<tabContent.length; x++){
            tabContent[x].classList.remove('active');
            document.getElementById(tabTarget).classList.add('active');
        }

        for(j=0; j<targetLink.length; j++){
            targetLink[j].classList.remove('active');
            e.target.classList.add('active');
        }
    });
}


// var targetLink = document.querySelectorAll('.tab-menu a');
// var tabContent = document.querySelectorAll('#tab-content > div');
// console.log(tabContent);

// for (var i = 0; i < targetLink.length; i++) {
//     targetLink[i].addEventListener('click', function (e) {
//         e.preventDefault();
//         var orgTarget = e.target.getAttribute('href');
//         // console.log(orgTarget);

//         var tabTarget = orgTarget.replace('#', '');

//         for(var x = 0; x < tabContent.length; x++){
//             tabContent[x].style.display = 'none';
//         }
//         document.getElementById(tabTarget).style.display = 'block';
        
//         for( var j = 0; j < targetLink.length; j++ ){
//             targetLink[j].classList.remove('active');
//             e.target.classList.add('active');
//         }

//     });
// }
// document.getElementById('tabs-1').style.display = 'block';

// var orgTarget = a.replace('b','c');

/*
- addEventListener()
지정한 이벤트가 대상이 전달될 때마다 호출할 함수를 설정한다.

==========event.target 과 event.currentTarget 차이점===========
target은 내가 클릭한 자식의 요소를 반환한다.
이벤트가 발생한 요소를 반환해준다.
currentTarget은 이벤틑가 부착된 부모의 위치를 반환한다.

*/