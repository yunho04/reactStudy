// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  if (a >= b) {
    return a - b;
  } else {
    return b - a;
  }
}

export default function multiply(a, b) {
  return a * b;
}
