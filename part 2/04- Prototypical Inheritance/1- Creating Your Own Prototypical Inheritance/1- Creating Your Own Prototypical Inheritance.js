// ===========================================================
//                      Parent Class: Shape
// ===========================================================

function Shape() {}

Shape.prototype.sharedFunction = function () {
  console.log("sharedFunction");
};

// ===========================================================
//                  Child Class: Circle
//- The **original** `Circle.prototype` (with its `.constructor = Circle`) is **gone**!
// - The new object **does NOT** have a `constructor` property of its own; it _inherits_ one from . `Shape.prototype`
// ===========================================================

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
