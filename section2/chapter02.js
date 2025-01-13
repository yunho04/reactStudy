function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
