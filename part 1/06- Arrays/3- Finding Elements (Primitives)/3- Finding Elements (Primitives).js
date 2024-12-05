// 1. This example demonstrates methods to search arrays in JavaScript:
//    - `indexOf()`: Returns the first occurrence index of an element, or -1 if not found.
//    - `lastIndexOf()`: Returns the last occurrence index of an element, or -1 if not found.
//    - `includes()`: Returns true if an element exists in the array, false otherwise.

const numbers = [1, 2, 3, 1, 4]; // Define an array of numbers

// 1. indexOf(): Find the first occurrence of an element
console.log(numbers.indexOf("1")); // -1 (string "1" not found)
console.log(numbers.indexOf(1, 2)); // 3 (search starts from index 2)

// 2. lastIndexOf(): Find the last occurrence of an element
console.log(numbers.lastIndexOf(1)); // 3 (last occurrence of 1)
console.log(numbers.lastIndexOf(1, 2)); // 0 (last occurrence of 1 up to index 2)

// 3. includes(): Check if an element exists in the array
console.log(numbers.includes(1)); // true (1 exists in the array)
console.log(numbers.includes(1, 2)); // true (1 exists when starting from index 2)
