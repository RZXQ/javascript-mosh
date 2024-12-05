// 1. This example demonstrates two ways to iterate over an array in JavaScript:
//    - Using a `for...of` loop for simple iteration.
//    - Using the `forEach` method for a more functional approach, with access to both element and index.

const numbers = [1, 2, 3]; // Define an array of numbers

// 1. Using `for...of` loop: Iterates over array elements directly
for (let num of numbers) {
  console.log(num); // Logs each element of the array
}

// 2. Using `forEach`: Iterates over elements with access to both element and index
numbers.forEach((num, idx) => console.log(idx, num));
