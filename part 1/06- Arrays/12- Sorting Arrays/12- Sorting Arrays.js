const numbers = [2, 3, 1];

// ==================== A. Primitive Sorting ====================

// --- 1. Sort Alphabetically ---
console.log(numbers.sort());

// --- 2. Reverse the Sorted Array ---
console.log(numbers.reverse());

// ==================== B. Reference Type Sorting ====================

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

// --- Custom Sort: Case-Insensitive by Name ---
courses.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);
