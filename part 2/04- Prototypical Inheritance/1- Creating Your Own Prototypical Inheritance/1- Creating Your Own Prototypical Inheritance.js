// ===========================================================
//                      Parent Class: Shape
// ===========================================================

function Shape() {}

Shape.prototype.sharedFunction = function () {
  console.log("sharedFunction");
};

// ===========================================================
//                  Child Class: Circle
// ===========================================================
// Note: Chrome DevTools' right-side panel displays the [[Prototype]] property,
//       which points to the direct prototype of the current object.

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.draw = function () {
  console.log("draw");
};

// ===========================================================
//                      Usage Example
// ===========================================================

const s = new Shape();
const c = new Circle(1);
console.log(s);
console.log(c);
