/// 1. This example demonstrates common Math methods in JavaScript:
///    - `Math.random()`: Generates a random number between 0 (inclusive) and 1 (exclusive).
///    - `Math.round()`: Rounds a number to the nearest integer.
///    - `Math.max()`: Returns the largest number from a list of numbers.
///    - `Math.min()`: Returns the smallest number from a list of numbers.

// 1. Math.random()
// Generates a random number between 0 and 1
console.log(Math.random()); // Example output: 0.654321

// 1.1 Generate a random number between two values (min and max)
const min = 10;
const max = 20;
console.log(Math.random() * (max - min) + min); // Random number between 10 and 20

// 2. Math.round()
// Rounds 1.9 to the nearest integer
console.log(Math.round(1.9)); // Output: 2

// 3. Math.max()
// Finds the maximum value in the list
console.log(Math.max(1, 2, 3, 4, 5)); // Output: 5

// 4. Math.min()
// Finds the minimum value in the list
console.log(Math.min(1, 2, 3, 4, 5)); // Output: 1
