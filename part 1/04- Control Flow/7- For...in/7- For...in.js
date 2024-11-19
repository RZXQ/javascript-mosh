// Traditional loops: for, while, do-while

// Extra JavaScript loop: for...in loop
// Use case: iterate over the properties of an object or elements in an array

// A. for...in loop example with an object
const person = {
  name: "Reacher",
  age: 33,
};

// Loop over the properties of the object
for (let key in person) {
  // Dot notation is not applicable here; using bracket notation to access the value
  console.log(key, person[key]);
}

// for...in loop example with an array
const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index, colors[index]);
}
