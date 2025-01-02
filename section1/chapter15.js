//1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; // 객체 리터럴

//2. 객체 프로퍼티( 객체 속성 )
let person = {
  name: "최윤호",
  age: 22,
  hobby: "테니스",
  job: "숭실대 학생",
  "like seohyun": true,
};

//3. 객체 프로퍼티를 다루는 방법
//3-1 특정 프로퍼티에 접근
let name = person.name;

let age = person["age"];

let property = "hobby";
let hobby = person[property];

//3-2 새로운 프로퍼티를 추가하는 방법
person.job2 = "fe developer";
person["favoriteFood"] = "삼겹살";

//3-3 프로퍼티를 수정하는 방법
person.job = "educator";

//3.4 프로퍼티를 삭제하는 방법
delete person.job;

//3.5 프로퍼티의 존재유무 확인하는 방법(in 연산자)
let result = "name" in person;
//존재하면 true 반환, 존재하지 않으면 false 반환
