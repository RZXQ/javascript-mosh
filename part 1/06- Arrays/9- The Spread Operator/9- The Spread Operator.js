/// 1. This example demonstrates the usage of the spread operator (`...`) with arrays:
///    - Combine arrays.
///    - Add elements flexibly while combining arrays.
///    - Create a shallow copy of an array.

const first = [1, 2, 3];
const second = [4, 5, 6];

// 1. Spread operator: Combine arrays into a new array
const combined1 = [...first, ...second]; // Combines `first` and `second`
console.log(combined1); // Output: [1, 2, 3, 4, 5, 6]

// 2. Flexible: Add custom elements while combining arrays
const combined2 = [...first, { id: 1 }, ...second]; // Adds an object between arrays
console.log(combined2); // Output: [1, 2, 3, { id: 1 }, 4, 5, 6]

// 3. Copy an array: Create a shallow copy of an array
const copy = [...combined1]; // Copies the content of `combined1`
console.log(copy); // Output: [1, 2, 3, 4, 5, 6]
