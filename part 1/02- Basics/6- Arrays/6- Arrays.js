let selectedColors = ["red", "blue"]; // `[]` is called an array literal, used to define arrays
console.log(selectedColors); // Output the entire array
console.log(selectedColors[0]); // Access the first element, which is "red"

// In JavaScript, arrays are flexible due to dynamic typing:
// - The type of elements in an array can change at any index
// - The length of the array can also be modified dynamically

// 1. Changing the type of an element:
// We can assign a number to the next index, even though other elements are strings
selectedColors[2] = 1;
console.log(typeof selectedColors); // Output: "object" - arrays are specialized objects in JavaScript

// 2. Checking the length of the array
console.log(selectedColors.length); // Output: 3, because the array now has three elements
