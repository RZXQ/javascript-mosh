/*
===========================================================
Task Description:
1. Write a function called `countOccurrences` that:
   a. Takes two arguments:
      i. `array`: The array in which to count occurrences.
      ii. `searchElement`: The element whose occurrences are to be counted.
   b. Uses the `Array.prototype.reduce()` method to determine the number of times the `searchElement` occurs in the `array`.
   c. Logs the current state of the `accumulator`, `current` element, and `searchElement` during each iteration of the `reduce()` method for debugging purposes.
   d. Throws an error if the first argument is not a valid array.
      - The error message should say: "Invalid array."

2. Use a `try-catch` block to:
   a. Call the `countOccurrences` function with invalid inputs (like `null` instead of an array).
   b. Handle the error and log the error message to the console using `console.log()`.

Example Usage:
- Input: `countOccurrences([1, 2, 3, 4], 1)`
- Output: Logs intermediate values during reduction and returns `1`.

Example Error Scenario:
- Input: `countOccurrences(null, 1)`
- Output: Throws an error with the message: "Invalid array."

Notes:
- Use defensive programming to validate inputs and handle edge cases gracefully.
- The `reduce()` method is used to iterate through the array and maintain a running total of occurrences.
===========================================================
*/
const numbers = [1, 2, 3, 4, 3, 3];

function countOccurrences(array, searchElement) {
  if (!Array.isArray) throw new Error("Invalid array");

  let count = 0;
  return array.reduce((a, b) => {
    if (b === searchElement) count++;
    return count;
  }, 0);
}

try {
  console.log(countOccurrences(numbers, 3));
} catch (e) {
  console.log(e.message);
}
