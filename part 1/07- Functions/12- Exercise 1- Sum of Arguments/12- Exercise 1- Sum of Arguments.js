/*
===========================================================
Task Description:
1. Write a function called `sum` that calculates the sum of all numbers provided as arguments.
2. The function should support two input formats:
   a. Multiple individual numbers as arguments (`sum(1, 2, 3)`).
   b. A single array of numbers as the argument (`sum([1, 2, 3])`).
3. If the input is a single array, spread its elements into individual items before summing them.
4. Use the `reduce()` method to calculate the sum of the numbers.

Example Input and Output:
- Input: `sum(1, 2, 3)` -> Output: `6`
- Input: `sum([1, 2, 3])` -> Output: `6`
===========================================================
*/
function sum(...args) {
  if (args.length === 1 && Array.isArray(args[0])) args = [...args[0]]; // Spread the array into individual elements
  return args.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3]));
console.log(sum(1, 2, 3));
