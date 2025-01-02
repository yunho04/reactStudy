//1. 콜백 함수
function main(value) {
  value();
}

main(() => {
  //console.log("i am sub");
});

//2. 예제
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});
