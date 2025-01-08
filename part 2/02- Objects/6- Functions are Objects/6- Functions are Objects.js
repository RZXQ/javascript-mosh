// -----------------------------------------------------------
// Constructor function
// -----------------------------------------------------------
function Circle(radius) {
  console.log(arguments);
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// -----------------------------------------------------------
// Function metadata
// -----------------------------------------------------------
console.log(Circle.name); // Logs the function name: "Circle"
console.log(Circle.length); // Logs the number of expected parameters: 1
console.log(Circle.constructor); // Logs the Function constructor

// -----------------------------------------------------------
// Function calls with explicit this binding
// -----------------------------------------------------------
const circle = {};

Circle.call(circle, 1); // Invokes Circle with `this` bound to `circle`
Circle.apply(circle, [1]); // Same as call, but arguments are in an array
const boundCircle = Circle.bind(circle);
boundCircle(1); // Returns a new function with `this` bound to `circle`, then invokes it
