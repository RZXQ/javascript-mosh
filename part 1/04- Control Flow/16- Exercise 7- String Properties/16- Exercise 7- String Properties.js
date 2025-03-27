// Task Description:
// Implement a function named `showProperties` that accepts an object as input.
// The function must iterate through each property of the object and log to console only the properties whose values are of type "string".
//
// Example:
// Given an object: { title: "a", releaseYear: 2018, rating: 4.5, director: "b" }
// Expected output:
// title a
// director b

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let i in obj) {
    if (typeof obj[i] === "string") {
      console.log(i, obj[i]);
    }
  }
}
