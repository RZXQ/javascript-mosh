/// 1. This example demonstrates the use of `every` and `some` methods in JavaScript:
///    - `every(predicate)`: Checks if all elements in the array satisfy a condition.
///    - `some(predicate)`: Checks if at least one element in the array satisfies a condition.

const numbers = [1, -1, 2, 3]; // Define an array of numbers

// 1. every(predicate):
// Checks if all elements are greater than or equal to 0
console.log(numbers.every((n) => n >= 0));

// 2. some(predicate):
// Checks if at least one element is greater than or equal to 0
console.log(numbers.some((n) => n >= 0));
