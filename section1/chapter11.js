//함수 선언

function greeting() {
  console.log("안녕하세요");
}

function getArea(width, height) {
  function another() {
    console.log("another");
  }
  let area = width * height;
  return area;
}

getArea(10, 20);
//호이스팅 (자바 스크립트는 함수 선언이 호출문 보다 뒤에 있어도 호이스팅 되어서 아무 문제가 되지 않음)
