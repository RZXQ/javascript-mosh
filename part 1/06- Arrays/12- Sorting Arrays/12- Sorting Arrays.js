// ===========================================================
//                  A. Primitive Sorting
// ===========================================================

// -------------------- 1. Sort Alphabetically --------------------
const numbers = [2, 3, 1];
console.log(numbers.sort());

// -------------------- 2. Reverse the Sorted Array --------------------
console.log(numbers.reverse());

// ===========================================================
//                B. Reference Type Sorting
// ===========================================================

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

// -------------------- 1. Function Version --------------------
courses.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

// -------------------- 2. Arrow Function Version --------------------
courses.sort((a, b) =>
  a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
);

console.log(courses);
