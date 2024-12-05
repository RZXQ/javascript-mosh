/// 1. This example demonstrates array search methods with objects:
///    - `find(predicate)`: Returns the first element that matches the condition.
///    - `findIndex(predicate)`: Returns the index of the first element that matches.

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// 1. find(predicate): Finds the first object that satisfies the condition
const course1 = courses.find(function (course) {
  return course.id === 1; // Traditional function syntax
});
console.log(course1); // Output: { id: 1, name: "a" }

const course2 = courses.find((course) => course.id === 1); // Arrow function
console.log(course2); // Output: { id: 1, name: "a" }

// 2. findIndex(predicate): Finds the index of the first object that satisfies the condition
const course3 = courses.findIndex((course) => course.name === "b"); // Arrow function
console.log(course3); // Output: 1 (index of the course with name "b")
