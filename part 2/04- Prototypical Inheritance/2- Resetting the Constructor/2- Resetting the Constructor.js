function Shape() {}

Shape.prototype.duplicate = () => console.log("duplicate");

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype); // Inherit Shape's prototype

// ===========================================================
//                Why Reset Constructor?
// ===========================================================
// After setting up inheritance, Circle.prototype becomes a new object whose prototype is Shape.prototype.
// This new object does not have its own 'constructor' property.
// As a result, Circle.prototype.constructor refers to Shape, due to prototype inheritance.
// To correctly indicate that objects created by Circle should have Circle as their constructor,
// we explicitly reset Circle.prototype.constructor to Circle.
Circle.prototype.constructor = Circle; // Restore constructor reference to Circle

console.log(c); // Outputs: Circle { radius: 1 }
console.log(c.constructor); // Outputs: Function: Circle
