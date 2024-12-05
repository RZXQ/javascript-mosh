/// 1. This example demonstrates the use of the `filter` method in JavaScript:
///    - `filter(predicate)`: Creates a new array containing only the elements that satisfy the condition.

const numbers = [1, -1, 2, 3]; // Define an array of numbers

// 1. filter(predicate):
// Filters the array to include only elements greater than or equal to 0
console.log(numbers.filter((n) => n >= 0)); // Output: [1, 2, 3]
