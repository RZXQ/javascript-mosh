// ===========================================================
// 1. Prototype Inheritance (sharing methods via prototype)
// Methods defined on the prototype are shared across all instances,
// so only one copy of the method exists in memory.
// ===========================================================
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

const c1 = new Circle(1);
const c2 = new Circle(2);
console.log(c1); // Circle { radius: 1 }
console.log(c2); // Circle { radius: 2 }

// ===========================================================
// 2. Override the Default toString Method
// - Overriding Object.prototype.toString globally is not recommended,
//   as it affects all objects in your program (arrays, dates, etc.).
// - Overriding Circle.prototype.toString ensures only Circle instances
//   use this custom string representation.
// ===========================================================
Circle.prototype.toString = function () {
  // Provides a custom string for Circle objects
  return `Circle with radius ${this.radius}`;
};

console.log(c1.toString()); // "Circle with radius 1"
console.log(c2.toString()); // "Circle with radius 2"

// ===========================================================
// 3. Interaction Between Instance and Prototype Members
// - Instance methods can call prototype methods, and vice versa.
// - Be careful: mutual calls like this can lead to infinite recursion.
// ===========================================================
function CircleEx(radius) {
  this.radius = radius;
  this.move = function () {
    this.draw(); // Calls the prototype method
    console.log("move");
  };
}

CircleEx.prototype.draw = function () {
  this.move(); // Calls the instance method
  console.log("draw");
};

const c3 = new CircleEx(3);
c3.move(); // "draw", "move"
c3.draw(); // "draw", "move"
