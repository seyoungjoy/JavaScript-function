class ItemDragHandler {
    //전역변수로 설정.
    el;
    downHandler;
    moveHandler;
    upHandler;
    shiftX;
    shiftY;

    static answer = 1;

    constructor(el) {
        this.el = el;
        this.addEvent();
        this.isMobile();
    }

    static setAnswer(idx,arg){
        ItemDragHandler.answer[idx] = arg;
    }

    isMobile() {
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            return true;
        } else {
            return false;
        }
    }

    addEvent() {

        this.downHandler = (e) => {
            this.onDownHandler(e);
        }
        this.moveHandler = (e) => {
            this.onMoveHandler(e);
        }
        this.upHandler = (e) => {
            this.onUpHandler(e);
        }

        if (this.isMobile()) {
            this.el.addEventListener('touchstart', this.downHandler);
        } else {
            this.el.addEventListener('mousedown', this.downHandler);
        }
        this.onStart();


    }

    onStart(){
        let startBtn = document.querySelector('.startBtn');

        startBtn.addEventListener('click', this.onMixHandler)
    }

    //start 버튼 클릭시 순서 섞기
    onMixHandler(){
        let piece1 = document.querySelector('.piece-wrap:nth-child(1)');
        let piece2 = document.querySelector('.piece-wrap:nth-child(3)');
        let piece3 = document.querySelector('.piece-wrap:nth-child(7)');
        let piece4 = document.querySelector('.piece-wrap:nth-child(9)');

        piece1.style.order = '3';
        piece2.style.order = '8';
        piece3.style.order = '1';
        piece4.style.order = '7';
    }


    onComplete(){
        // if(document.querySelectorAll('.bg>img').length===0){
        //     console.log('hihihi');
        // }
        // let puzzleBg = document.querySelectorAll('.bg>img');
        // let test = function (){console.log(document.querySelectorAll('.bg>img').length)};
        //
        // let puzzleCont1El = document.querySelector('.bg:nth-child(1)');
        // let puzzleCont2El = document.querySelector('.bg:nth-child(2)');
        // let puzzleCont3El = document.querySelector('.bg:nth-child(3)');
        // let puzzleCont4El = document.querySelector('.bg:nth-child(4)');
        // let puzzleCont5El = document.querySelector('.bg:nth-child(5)');
        // let puzzleCont6El = document.querySelector('.bg:nth-child(6)');
        // let puzzleCont7El = document.querySelector('.bg:nth-child(7)');
        // let puzzleCont8El = document.querySelector('.bg:nth-child(8)');
        // let puzzleCont9El = document.querySelector('.bg:nth-child(9)');




        // if(
        //     puzzleCont1El.dataset.order === pz1El.dataset.order
        //     && puzzleCont2El.dataset.order === pz2El.dataset.order
        //     && puzzleCont3El.dataset.order === pz3El.dataset.order
        //     && puzzleCont4El.dataset.order === pz4El.dataset.order
        //     && puzzleCont5El.dataset.order === pz5El.dataset.order
        //     && puzzleCont6El.dataset.order === pz6El.dataset.order
        //     && puzzleCont7El.dataset.order === pz7El.dataset.order
        //     && puzzleCont8El.dataset.order === pz8El.dataset.order
        //     && puzzleCont9El.dataset.order === pz9El.dataset.order
        // ){ console.log(true);
        // } else{
        //     console.log(false);
        // }
        if(ItemDragHandler.answer.length==9){
            return JSON.stringify(ItemDragHandler.answer) ==  JSON.stringify(['1','2','3','4','5','6','7','8','9']) && alert(true);
        }
    }

    debugEl(el) {
        return el.classList;
    }

    onDownHandler(e) {
        e.preventDefault();
        console.log(this.debugEl(this.el) + ' : down');

        this.el.classList.add('down');


        if (this.isMobile()) {
            console.log('touchmove');
            document.addEventListener('touchmove', this.moveHandler);
            document.addEventListener('touchend', this.upHandler);

            this.shiftX = e.targetTouches[0].clientX - this.el.getBoundingClientRect().left;
            this.shiftY = e.targetTouches[0].clientY - this.el.getBoundingClientRect().top;

        } else {
            console.log('clickmove')
            document.addEventListener('mousemove', this.moveHandler);
            document.addEventListener('mouseup', this.upHandler);

            this.shiftX = e.clientX - this.el.getBoundingClientRect().left;
            this.shiftY = e.clientY - this.el.getBoundingClientRect().top;
        }
    }

    onMoveHandler(e) {
        console.log(this.debugEl(this.el) + ' : move');
        this.el.style.position = 'absolute';
        this.el.style.zIndex = '1000';
        this.el.classList.add('move');


        if (this.isMobile()) {
            this.el.style.left = e.targetTouches[0].pageX - this.shiftX + 'px';
            this.el.style.top = e.targetTouches[0].pageY - this.shiftY + 'px';
        } else {
            this.el.style.left = e.pageX - this.shiftX + 'px';
            this.el.style.top = e.pageY - this.shiftY + 'px';
        }
    }

    onUpHandler(e) {
        console.log(this.debugEl(this.el) + ' : up');
        this.el.classList.remove('down');
        this.el.classList.remove('move');

        if (this.isMobile()) {
            document.removeEventListener('touchmove', this.moveHandler);
            document.removeEventListener('touchend', this.upHandler);

        } else {
            document.removeEventListener('mousemove', this.moveHandler);
            document.removeEventListener('mouseup', this.upHandler);
        }

        this.onLocation(e);
        // this.onComplete();
    }

    onLocation(e){
        let puzzleCont = document.querySelector('.piece-wrap');
        console.log('locatio');
        this.el.hidden = true;
        let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
        this.el.hidden = false;

        if(!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable')

        if(droppableBelow){
            droppableBelow.append(this.el);
            this.el.style.position = '';
        } else{
            puzzleCont.append(this.el);
        }

        if(droppableBelow.children.length >=2){
            let firstChild = droppableBelow.firstChild;
            puzzleCont.append(firstChild);
        }

        ItemDragHandler.setAnswer(droppableBelow.dataset.order - 1,e.target.dataset.order);
        // window.answerArr[droppableBelow.dataset.order - 1] = e.target.dataset.order;

        this.onComplete();
    }

}

let pz1El = document.querySelector('.pz-1');
let pz2El = document.querySelector('.pz-2');
let pz3El = document.querySelector('.pz-3');
let pz4El = document.querySelector('.pz-4');
let pz5El = document.querySelector('.pz-5');
let pz6El = document.querySelector('.pz-6');
let pz8El = document.querySelector('.pz-7');
let pz7El = document.querySelector('.pz-8');
let pz9El = document.querySelector('.pz-9');

new ItemDragHandler(pz1El);
new ItemDragHandler(pz2El);
new ItemDragHandler(pz3El);
new ItemDragHandler(pz4El);
new ItemDragHandler(pz5El);
new ItemDragHandler(pz6El);
new ItemDragHandler(pz7El);
new ItemDragHandler(pz8El);
new ItemDragHandler(pz9El);

// start 누르면 섞어지기
// img를 div 로 한번 감싸준다.
//


// 퍼즐이 모두 맞았을 때 컴플리트 액션
// 시간초
// 랭킹 시스템