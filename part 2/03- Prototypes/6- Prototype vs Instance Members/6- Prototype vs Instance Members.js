// ===========================================================
// 1. Before: c1, c2 Each Have a Copy of the draw Method
// ===========================================================
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const c1_old = new Circle(1);
const c2_old = new Circle(2);

// ===========================================================
// 2. After: Shared draw Method via Prototype
// ===========================================================
function Circle(radius) {
  // Instance members
  this.radius = radius;
  this.move = function () {
    this.draw(); // Call the prototype method
    console.log("move");
  };
}

// Prototype members
Circle.prototype.draw = function () {
  this.move(); // Call the instance method
  console.log("draw");
};

const c1 = new Circle(1);
const c2 = new Circle(2);

// ===========================================================
// 3. Practical Use Case: Overwrite Default toString
// ===========================================================
Circle.prototype.toString = function () {
  return `Circle with radius ${this.radius}`;
};

// Testing
console.log(c1.toString()); // "Circle with radius 1"
console.log(c2.toString()); // "Circle with radius 2"
