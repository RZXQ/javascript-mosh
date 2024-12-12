// Example: Using private properties and methods in JavaScript
function Circle(radius) {
  // Private properties (accessible only within the function)
  let color = "red";
  let defaultLocation = { x: 0, y: 0 };

  // Private method (accessible only within the function)
  let computeOptimumLocation = function (factor) {
    // Logic for computation
  };

  // Public property
  this.radius = radius;

  // Public method
  this.draw = function () {
    console.log("draw");
    console.log(defaultLocation); // Accessing private property
  };
}

const circle = new Circle(10);

// Attempt to access private property (will be undefined)
console.log(circle.defaultLocation); // Outputs: undefined
