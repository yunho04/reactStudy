// 5가지 요소 순회 및 탐색 매서드
//1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

//2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

//3. indexOf
// 특정 요소의 위치를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

let objectArr = [{ name: "이정환" }, { name: "홍길동" }];

objectArr.findIndex((item) => item.name === "이정환");

//4. findIndex
// 특정 요소의 인덱스를 반환하는 메서드
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그럼
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item % 2 != 0) return true;
});

//5.find
//모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "박서현" }, { name: "최윤호" }];

arr5.find((item) => item.name === "이정환");
