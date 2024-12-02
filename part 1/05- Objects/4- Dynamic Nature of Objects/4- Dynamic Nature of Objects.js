// 1. JavaScript objects are dynamic; properties and methods can be added or removed after creation.
//    - Properties: Key-value pairs in an object (e.g., radius, color).
//    - Methods: Properties whose values are functions (e.g., draw).

// 2. Using 'const' prevents reassignment of the object reference, but its properties can be modified.
const circle = { radius: 1 }; // Initial property: 'radius'

// 3. Adding properties and methods to the 'circle' object
circle.color = "yellow"; // 3.1 Adding a new property 'color'
circle.draw = function () {
  console.log("Drawing the circle");
}; // 3.2 Adding a new method 'draw'

// 4. Removing properties or methods from the 'circle' object
delete circle.draw; // 4.1 Removing the 'draw' method

// 5. Output the modified 'circle' object
console.log(circle);
