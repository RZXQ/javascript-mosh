const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// --- 1. find(predicate) ---
const course1 = courses.find(function (course) {
  return course.id === 1;
});
console.log(course1);

const course2 = courses.find((course) => course.id === 1);
console.log(course2);

// --- 2. findIndex(predicate) ---
const course3 = courses.findIndex((course) => course.name === "b");
console.log(course3);
