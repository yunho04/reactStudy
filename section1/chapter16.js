//1. 상수 객체
const animal = {
  type: "고양이",
  color: "나비",
};

animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color; //삭제

//2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "최윤호",
  //매서드
  sayHi: () => {
    console.log("안녕");
  },
};

person.sayHi();
