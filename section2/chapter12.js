function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1 + 2, (value) => {
  console.log(value);
});

//음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function coolDownFood(food, callback) {
  setTimeout(() => {
    const coolDownedFood = "식은" + food;
    callback(coolDownedFood);
  }, 2000);
}

function iceFood(c, callback) {
  setTimeout(() => {
    const icedFood = "냉동된" + c;
    callback(icedFood);
  }, 2000);
}

orderFood((b) => {
  console.log(b);

  coolDownFood(b, (a) => {
    console.log(a);

    iceFood(a, (c) => {
      console.log(c);
    });
  });
});
