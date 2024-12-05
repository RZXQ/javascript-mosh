const numbers = arrayFromRange(1, 4);

function arrayFromRange(min, max) {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(numbers);
