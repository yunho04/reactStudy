//1.falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 3;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

//2. Truthy 한 값
//-> 7가지 falsy 한 값을 제외한 나머지 모든 값;
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

//3. 활용 사례

(person) => {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
};

let person = { name: "최윤호" };
