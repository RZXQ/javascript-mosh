// ===========================================================
//                      find()
// ===========================================================
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// Callback: (course) => course.name === "a"
const course = courses.find((course) => course.name === "a");

console.log(course);
