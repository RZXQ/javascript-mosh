// ===========================================================
//                  1. Constructor Function (Pre-ES6)
// ===========================================================
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

// ===========================================================
//                  2. ES6 Class Syntax
// ===========================================================
class Circle {
  constructor(radius) {
    this.radius = radius;

    // Instance method: Creates a new copy for each object
    this.move = function () {
      console.log("move");
    };
  }

  // Prototype method: Shared across all instances
  draw() {
    console.log("draw");
  }
}

const circle = new Circle(1);
console.log(typeof Circle); // Output: "function" (classes are constructor functions in JS)
