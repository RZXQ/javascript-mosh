/// 1. This example demonstrates the use of `join` and `split` methods in JavaScript:
///    - `join`: Combines all elements of an array into a single string, separated by a specified delimiter.
///    - `split`: Splits a string into an array of substrings based on a specified delimiter.

const numbers = [1, 2, 3]; // Define an array of numbers

// 1. join(): Combines array elements into a string, separated by commas
console.log(numbers.join(",")); // Output: "1,2,3"

// 2. split(): Splits a string into an array based on a specified delimiter
const message1 = "This is my first message"; // Define a string
console.log(message1.split(" ")); // Output: ["This", "is", "my", "first", "message"]

// 3. Example: Use split and join to create a URL-friendly format
const message2 = "Creating arrays in JavaScript"; // Define another string
console.log(message2.split(" ").join("-")); // Output: "Creating-arrays-in-JavaScript"
