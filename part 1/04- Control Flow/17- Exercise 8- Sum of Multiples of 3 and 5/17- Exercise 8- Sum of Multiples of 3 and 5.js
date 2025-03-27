// Task Description:
// Implement a JavaScript function named `sum` which accepts a number (`limit`) as an input parameter.
// This function should calculate and return the sum of all numbers from 0 up to the provided limit (inclusive), where each number included in the sum must be divisible by either 3 or 5.
//
// Example:
// Input: 10
// Output: 33 (since 3 + 5 + 6 + 9 + 10 = 33)

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}
console.log(sum(10));
