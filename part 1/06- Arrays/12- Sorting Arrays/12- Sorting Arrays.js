// ===========================================================
//                  A. Primitive Sorting
// ===========================================================

// Sort numbers alphabetically (default behavior)
const numbers = [2, 3, 1];
console.log(numbers.sort()); // [1, 2, 3]

// Reverse the sorted numbers array
console.log(numbers.reverse()); // [3, 2, 1]

// ===========================================================
//                B. Reference Type Sorting
// ===========================================================

// Comparator logic for sorting:
// Return a negative number if first item should come before second
// Return a positive number if first item should come after second
// Return zero if positions are equal (no change)

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

// Sort courses array (function comparator approach)
courses.sort(function (a, b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  else if (nameA > nameB) return 1;
  else return 0;
});

console.log(courses);
