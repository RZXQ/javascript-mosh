/// 1. This example demonstrates sorting in JavaScript for both primitive and reference types:
///    - `sort()`: Sorts array elements alphabetically by default.
///    - `reverse()`: Reverses the order of the array.
///    - Custom sorting with a comparison function for reference types.

const numbers = [2, 3, 1]; // Array of numbers

// A. Primitive Sorting
// 1. sort(): Sorts numbers alphabetically by default (as strings)
console.log(numbers.sort()); // Output: [1, 2, 3]

// 2. reverse(): Reverses the sorted array
console.log(numbers.reverse()); // Output: [3, 2, 1]

// B. Reference Type Sorting
const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

// Custom sort: Case-insensitive sorting based on the name property
courses.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);
