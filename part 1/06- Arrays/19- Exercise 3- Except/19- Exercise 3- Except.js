// ==================== Approach A: Using `includes` and Loop ====================
const numbersA = [1, 2, 3, 4];
const outputA = exceptA(numbersA, [1, 2]);
console.log(outputA);

function exceptA(array, excluded) {
  let newArr = [];
  for (let element of array) {
    if (!excluded.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}

// ==================== Approach B: Using `filter` ====================
const numbersB = [1, 2, 3, 4, 5];
const outputB = exceptB(numbersB, [1, 3]);
console.log(outputB);

function exceptB(arr, exclude) {
  return arr.filter((n) => !exclude.includes(n));
}
