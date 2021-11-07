
document.addEventListener('DOMContentLoaded',function(){

    //변수 지정

    let $sliderWrap = document.querySelector('.container'),
        $slideContainer = document.querySelector('.slider-container'),
        $slide = document.querySelectorAll('.slide'),

        $navPrev = document.getElementById('prev'),
        $slideHeight =0, 
        $navNext = document.getElementById('next'),

        $slideCount =  $slide.length,

        $currentIndex = 0;
    //단일 선택자를 쓸 때 querySelector
    //여기서 개별로 다 할일이 있다하면 배열로 만들어줘야함.



    //슬라이드의 높이 확인하여 부모의 높이로 지정하기 - 대상.offsetHeight
    //리스트의 높이 중 가장 큰 값으로 부모의 높이를 지정한다.
    for(var i = 0; i < $slideCount; i++){
        if($slideHeight < $slide[i].offsetHeight){
            $slideHeight = $slide[i].offsetHeight;
        }
    }
    console.log($slideHeight);

    $sliderWrap.style.height = $slideHeight + 'px';
    $slideContainer.style.height = $slideHeight + 'px';

    //슬라이드가 있으면 가로로 배열하기
    for(var a = 0; a < $slideCount; a++){
        $slide[a].style.left = a * 100 + '%';
    }

    //슬라이드 이동 함수
    function goToSlide(idx){
        $slideContainer.style.left = -100 * idx + '%';
        $slideContainer.classList.add('animated');
        $currentIndex = idx;
    }

    //버튼을 클릭하면 슬라이드 이동시키기
    //다음버튼을 클릭하면 할일, 이전 버튼을 클릭하면 할일.
    $navPrev.addEventListener('click',function(){
        //goToSlide($currentIndex -1);
        if($currentIndex == 0){
            //$navPrev.classList.add('disabled');
            goToSlide($slideCount - 1);
       }else{
            //$navPrev.classList.remove('disabled');
            goToSlide($currentIndex -1);
       }
    });
    $navNext.addEventListener('click',function(){
        //goToSlide($currentIndex + 1);
       
       if($currentIndex == $slideCount - 1){
            //$navNext.classList.add('disabled');
            goToSlide(0);
       }else{
            //$navNext.classList.remove('disabled');
            goToSlide($currentIndex + 1);
       }

    })
});
