// ===========================================================
//                      Base Class: Shape
// ===========================================================
function Shape() {}
Shape.prototype.duplicate = () => console.log("duplicate");

// ===========================================================
//                  Derived Class: Circle
// ===========================================================
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype); // Inherits Shape's prototype
Circle.prototype.constructor = Circle; // Resets constructor from Shape to Circle

// ===========================================================
//                      Usage Example
// ===========================================================
const c = new Circle.prototype.constructor(1); // Create an instance using constructor reference

console.log(c); // Outputs: Circle { radius: 1 }
console.log(c.constructor); // Outputs: Function: Circle
