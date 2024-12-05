/// 1. This example demonstrates different ways to empty an array in JavaScript:
///    - Reassigning the array to a new empty array.
///    - Setting the array's length to `0`.
///    - Using `splice()` to remove all elements.
///    - Using a `while` loop with `pop()` (less efficient for large arrays).

let numbers = [1, 2, 3, 4]; // Define an array with elements

// Solution 1: Reassign to an empty array (disconnects references)
numbers = [];

// Solution 2: Set length to 0 (clears the array in place) (preferred)
numbers.length = 0;

// Solution 3: Use splice() to remove all elements
numbers.splice(0, numbers.length);

// Solution 4: Use a while loop with pop() (less efficient for large arrays)
while (numbers.length > 0) numbers.pop();

console.log(numbers); // Output: []
