/// 1. This example demonstrates the `reduce` method in JavaScript:
///    - With an initial value: Iteration starts with the initial value as the accumulator.
///    - Without an initial value: The first array element is used as the accumulator, and iteration starts from the second element.

const numbers = [1, -1, 2, 3]; // Define an array of numbers

// 1. reduce(Function, initialValue): Explicitly sets the initial accumulator value
const sum1 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0, // Initial value for the accumulator is explicitly set to 0
);
// Process:
// a = 0 (initial value), c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
console.log(sum1); // Output: 5

// 2. reduce(Function): No initial value; the first array element is used as the accumulator
const sum2 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
);
// Process:
// a = 1 (first element of the array), c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
console.log(sum2); // Output: 5
