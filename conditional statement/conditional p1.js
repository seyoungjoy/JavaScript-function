var num=-1;
    var kind;

    //if문
    if(num > 0){
        kind = '양수';
    }

    //if...else문
    if(num > 0){
        kind = '양수';
    } else{
        kind = '음수';
    }

    //if...else if문
    
    if(num > 0){
        kind = '양수';
    } else if (num < 0){
        kind = '음수';
    } else {
        kind = '영';
    }

    //if else 생략
    var num = 0;
    var kind;

    if (num > 0) kind = '양수';
    else if (num < 0) kind = '음수';
    else kind = '0';

    //if else 문으로 - 변수가 짝수인지 홀수인지 구별하기.
    var x = 1;
    var result;

    if (x % 2){ //2 % 2 = 0, 0이면 false로 암묵적으로 강제 변환된다.
        result = '홀수';
    } else {
        result = '짝수';
    }

    //삼항 조건 연산자로 바꿔 쓰기
    var x = 2;

    var result = x % 2 ? '음수' : '짝수';

    //만약 경우즤 수가 (양수, 음수, 0 일때)
    var num = 0;
    var kind = num ? (num > 0 ? '음수' : '짝수') : '0';

    console.log(kind);