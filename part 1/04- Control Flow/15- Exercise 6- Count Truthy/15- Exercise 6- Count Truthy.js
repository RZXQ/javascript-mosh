// Task Description:
// Implement a function named `countTruthy` that takes an array as input and returns or logs the number of truthy values.
// - Truthy values: values considered `true` when evaluated in JavaScript (e.g., non-zero numbers, non-empty strings).
// - Falsy values (`0`, `null`, `undefined`, `false`, `NaN`, `""`, etc.) should not be counted.
//
// Example:
// Given array: [0, null, undefined, 1, 2, 3]
// Output: 3

const array = [0, null, undefined, 1, 2, 3];

function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) {
      count++;
    }
  }
  console.log(count); // Outputs the count of truthy values in the array
}
