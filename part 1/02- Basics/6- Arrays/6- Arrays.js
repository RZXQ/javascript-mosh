let selectedColors = ["red", "blue"]; // Initial array
console.log(selectedColors[0]); // "red" - Accessing the first element

// -----------------------------------------------------------
//               Adding Elements Dynamically
// -----------------------------------------------------------
selectedColors[2] = 1; // Adding a number to the array
console.log(typeof selectedColors); // "object" - Arrays are treated as objects
console.log(selectedColors.length); // 3 - The length updates dynamically
