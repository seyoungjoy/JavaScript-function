const obj2 = {
    name : "Lee",
    age : 20,
    alive : true,
    hobby : ['traveling', 'tennis']
};

//객체를 JSON 포맷의 문자열로 변환한다.
const json3 = JSON.stringify(obj);

//JSON 포맷의 문자열을 객체로 변환한다.
const parsed = JSON.parse(json);
// console.log(typeof parsed, parsed);

const todos = [
    {id : 1, content: 'HTML', completed:false},
    {id : 2, content: 'CSS', completed:true},
    {id : 3, content: 'Javascript', completed:false}
];

//배열을 JSON 포맷의 문자열로 변환한다.
const json4 = JSON.stringify(todos);

//JSON 포맷의 문자열을 배열로 변환한다. 배열의 요소까지 객체로 변화된다.
const parsed2 = JSON.parse(json4);
console.log(typeof parsed2, parsed2);