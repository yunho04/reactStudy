//1. 배열 순회
let arr = [1, 2, 3];

//1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
}

//1.2 for of 반복문
for (let item of arr) {
  //console.log(item);
}

//2. 객체 순회
let person = {
  name: "최윤호",
  age: 22,
  hobby: "서찌만튀",
};

//2.1 object.keys 사용

let keys = object.keys(persons);

for (let i = 0; i < keys.length; i++) {
  const value = person[key];
  //console.log(key, value);
}

//2.2 object.values
let values = Object.values(person);

//2.3 for in
for (let key in person) {
  console.log(key, person[key]);
}
