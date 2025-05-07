// ===========================================================
//                      Parent Class: Shape
// ===========================================================

function Shape() {
  console.log("Shape Constructor");
}

Shape.prototype.sharedFunction = function () {
  console.log("sharedFunction");
};

// ===========================================================
//                  Child Class: Circle
//
// - When we assign Circle.prototype = Object.create(Shape.prototype),
//   we replace the original Circle.prototype with a new, empty object.
// - This new object’s prototype (__proto__) points to Shape.prototype.
// - The new Circle.prototype does NOT have its own 'constructor' property.
// - As a result, Circle.prototype.constructor is inherited from Shape.prototype,
//   which points to Shape.
//
// - If we want Circle.prototype.constructor to reference Circle again,
//   we need to manually reset it: Circle.prototype.constructor = Circle;
// ===========================================================

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.draw = function () {};

const c = new Circle(10);
console.log(c);
