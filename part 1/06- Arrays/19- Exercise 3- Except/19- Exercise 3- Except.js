// TASK DESCRIPTION:
// Implement a function named 'except' that takes two arrays as parameters:
// 1. The first array ('array') contains the initial set of elements.
// 2. The second array ('excluded') contains elements to exclude from the first array.
//
// The function should return a new array containing all elements from the first array
// that are NOT present in the second array.
//
// Example usage:
// Input: ([1, 2, 3, 4], [1, 2])   => Output: [3, 4]
// Input: ([1, 2, 3, 4, 5], [1, 3]) => Output: [2, 4, 5]
//
// Demonstrate two alternative implementations:
//
// (A) using a `for...of` loop with the `includes()` method.
//
// (B) using the built-in array method `filter()` combined with `includes()`.
//
// Verify your implementations by logging the examples above to the console.

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
