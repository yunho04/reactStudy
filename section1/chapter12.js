//1. 함수 표현식

function funcA() {
  //console.log("funA");
}
let varA = funcA;

let varB = function funcB() {
  //익명함수
  //console.log("funcB");
};

varB();

//2. 화살표 함수
let varC = (value) => {
  value + 1;
};
console.log(varC(10));
