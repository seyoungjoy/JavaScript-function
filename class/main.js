/*
25장 클래스

1 클래스는 프로토타입의 문법적 설탕인가?
-클래스를 프로토타입 기반 객체 생성 패턴의 단순한 문법적 설탕이라고 보기보다는
 새로운 객체 생성 메커니즘으로 보는것이 좀더 합당하다.

** 클래스와 생성자 함수의 차이
(1) 클래스를 new 연산자 없이 호출하면 에러가 발생.
    하지만 생성자 함수를 new 연산자 없이 호출하면 일반 함수로서 호출된다.

(2) 클래스는 상속을 지원하는 extends와 super 키워드를 제공.
    하지만 생성자 함수는 extends와 super 키워드 지원하지 안흔ㄴ다.

(3) 클래스는 호이스팅이 발생하지 않는 것처럼 동작한다.
    하지만 함수 선언문으로 정의된 생성자 함수는 함수 호이스팅이,
    하수 표현식으로 정의한 생성자 함수는 변수 호이스팅이 발생한다.

(4) 클래스 내의 모든 코드에는 암묵적으로 strci mode가 지정되어 실행되며
    stric mode를 해제할 수 없다.
    하지만 생성자 함수는 암묵적으로 strict mode 지정 x

(5) 클래스의 constructor, 프로토타입 메서드, 정적 메서드는 모두
    프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false다.
    다시말해 열거되지 않는다.

2. 클래스 정의

class Person{
    //생성자
    constructor(name){
        //인스턴스 생성 및 초기화
        this.name = name;
    }

    // 프로토타입 메서드
    sayHi(){
        console.log(`Hi! My name is ${this.name}`);
    }

    // 정적 메서드
    static sayHello(){
        console.log('Hello');
    }
}
//인스턴스 생성
const me = new Person('Lee');

//인스턴스의 프로퍼티 참조
console.log(me.name);

//프로토타입 메서드 호출
me.sayHi();

//정적 메서드 호출
Person.sayHello();

4. 인스턴스 생성
-클래스는 생성자 함수이며 new 연산자와 함께 호출되어 인스턴스를 생성한다.

5. 메서드
- 클래스 몸체에는 0개 이상의 메서드만 선언할 수 있다.
  클래스 몸체에서 정의할 수 있는 메서드는 constructor(생성자)
  , 프로토타입 메서드, 정적 메서드 세가지가 있다.

  5.1 constructor
  - constructor은 인스턴스를 생성하고 초기화하기 위한 특수한 메서드다.

  5.2 프로토타입 메서드
  - 생성자 함수를 사용하여 인스턴스를 생상하는 경우 프로토타입 메서드를
  생성하기 위해서는 다음과 같이 명시적으로 프로토타입에 메서드를 추가해야한다.
  - 클래스 몸체에서 정의한 메서드는 생성자 함수에 의한 객체 방식과는 다르게
  클래스의 protytype프로퍼티에 메서드를 추가하지 않아도 기본적으로
  프로토타입 메서드가 된다.

  5.3 정적 메서드
  - 인스턴스를 생성하지 않아도 호출할 수 있는 메서드를 말한다.

  6 클래스의 인스턴스 생성 과정
  (1) 인스턴스 생성과 this 바인딩
  (2) 인스턴스 초기화
  (3) 인스턴스 반환

7. 프로퍼티
  7.1 인스턴스 프로퍼티
  - 인스턴스 프로퍼티는 constructor 내부에서 정의해야 한다. 
*/
const person = {
    //데이터 프로퍼티
    firstName : 'Ungmo',
    lastName : 'Lee',

    //fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    //getter 함수
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    //setter 함수
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
};


// class Person{
//     constructor(name){

//     }
// }
// class Person{
//     //생성자
//     constructor(name){
//         //1 암묵적으로 인스턴스가 생성되고 thisdp 바인딩된다.
//         console.log(this);
//         console.log(Object.getPrototypeOf(this) === Person.prototype);
//         //2 this에 바인딩되어있는 인스턴스를 초기화한다.
//         this.name = name;
//     }
// }



// class Person{
//     //생성자
//     constructor(name){
//         //인스턴스 생성 및 초기화
//         this.name = name;
//     }

//     //정적 메서드
//     static sayHi(){
//         console.log('hi')
//     }
// }


//생성자 함수
// function Person(name){
//     this.name = name;
// }

// //정적 메서드
// Person.sayHi = function(){
//     console.log('hi');
// }

// Person.sayHi();


// class Person {
//     //생성자
//     constructor(name){
//         //인스턴스 생성 및 초기화
//         this.name = name;
//     }

//     //프로토타입 메서드
//     sayHi(){
//         console.log(`Hi ${this.name}`);
//     }
// }

// const me = new Person('Lee');
// me.sayHi();



// function Person(name){
//     this.name = name;
// }

// //프로토타입 메서드
// Person.prototype.sayHi = function(){
//     console.log(`HI! `)
// }


// class Person{
//     constructor(name){
//         this.name = name;
//         //명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
//         return{};
//     }
// }
// // constructor에서 명시적으로 반환한 빈 객체가 반환된다.
// const me = new Person('Lee');
// console.log(me);


// class Person{
//     constructor(name, address){
//         //인수로 인스턴스 초기화
//         this.name = name;
//         this.address = address;
//     }

//     intro(){
//         console.log(`hi! name is ${this.name}, ${this.address} kaka`);
//     }
// }
// // d인수로 초기값을 전다한다. 초기값은 constuctor에 전달된다.
// const me = new Person('Lee', 'Seoul');
// me.intro();

// class Person{
//     constructor(){
//         //고정값으로 인스턴스 초기화
//         this.name = 'Lee';
//         this.address = 'Seoul';
//     }
// }

// //인스턴스 프로퍼티가 추가된다.
// const me = new Person();
// console.log(me);


//클래스
// class Person {
//     //생성자

// }
// //클래스는 함수다.
// class Person{
//     constructor(name){
//         this.name= name;
//     }
// }

// // console.log(typeof Person);
// // console.dir(Person);

// const me = new Person('Lee');
// console.log(me);

// class Person{}

// // 인스턴스 생성
// const me = new Person();
// console.log(me);

// class Person{
//     //생성자
//     constructor(name){
//         //인스턴스 생성 및 초기화
//         this.name = name;
//     }

//     // 프로토타입 메서드
//     sayHi(){
//         console.log(`Hi! My name is ${this.name}`);
//     }

//     // 정적 메서드
//     static sayHello(){
//         console.log('Hello');
//     }
// }
// //인스턴스 생성
// const me = new Person('Lee');

// //인스턴스의 프로퍼티 참조
// console.log(me.name);

// //프로토타입 메서드 호출
// me.sayHi();

// //정적 메서드 호출
// Person.sayHello();

// class Person{}
// var Person = (function(){
//     //생성자 함수
//     function Person(name){
//         this.name = name;
//     }
//     // 프로토타입 메서드
//     Person.prototype.sayHello = function(){
//         console.log('Hi My name is' + this.name);
//     };

//     //생성자 함수 반환
//     return Person;
// }());

// //인스턴스 생성
// var me = new Person('Lee');
// me.sayHello();

// class User {

//     constructor(name){
//         this.name = name;
//         console.log(this);
//         //this 가 User 생성자 객체이기 때문에
//         //인수 존ㅇ User.name = 에 할당되는건ㅅ.
//     }

//     sayHi(){
//         alert(this.name);
//     }

// }

// let user = new User("Jogn");
// user.sayHi();

// class User{
//     constructor(name){
//         this.name = name;
//     }
// }

// class User{
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         console.log(this.name);
//     }
// }

//생성자 함수를 만든다.
function User(name){
    this.name = name;
}

User.prototype.sayHi = function(){
    console.log(this.name);
}