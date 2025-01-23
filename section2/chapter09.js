// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환

let arr1 = [
  { name: "최윤호", hobby: "서찌만" },
  { name: "박서현", hobby: "서찌만" },
  { name: "김찬영", hobby: "최찌만" },
];

arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});

//2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 변화
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
});

const mapName = arr1.map((item) => {
  return item.name;
});
console.log(mapName);

//3. sort
//배열을 사전순으로 정렬하는 메서드
let arr3 = ["a", "b", "c"];
arr3.sort();

let arr4 = [10, 3, 5];
arr4.sort((a, b) => {
  if (a > b) {
    //b가 a 앞에 와라
    return 1;
  } else if (a < b) {
    return -1;
    //a가 b 앞에 와라
  } else {
    return 0;
  }
});

//4. toSorted
// 정렬된 새로운 배열을 반환하는 매서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

//5. join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "douknow"];
const joined = arr6.join("  ");
