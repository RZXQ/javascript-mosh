const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// ===========================================================
//                      find()
// ===========================================================

const course1 = courses.find(function (course) {
  return course.id === 1;
});
console.log(course1);

const course2 = courses.find((course) => course.id === 1);
console.log(course2);

// ===========================================================
//                      findIndex()
// ===========================================================
const course3 = courses.findIndex((course) => course.name === "b");
console.log(course3);
