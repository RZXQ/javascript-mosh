// ===========================================================
//                      Base Class: Shape
// ===========================================================

function Shape() {}
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

// ===========================================================
//                  Derived Class: Circle
// ===========================================================

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
