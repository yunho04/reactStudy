let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var5;
console.log(var5);

let userName = "최윤호";
let userNickname = "Douknow";

let displayname = userName ?? userNickname;

let var7 = 1;
var7 = "hello";

let t1 = typeof var7;

let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수면 ->"짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
