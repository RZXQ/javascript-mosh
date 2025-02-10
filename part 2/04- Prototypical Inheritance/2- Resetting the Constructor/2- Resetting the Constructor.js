// ===========================================================
//                      Parent Class: Shape
// ===========================================================
function Shape() {}

Shape.prototype.duplicate = () => console.log("duplicate");

// ===========================================================
//                  Child Class: Circle
// ===========================================================
function Circle(radius) {
  this.radius = radius;
}

// ===========================================================
//                  Object.create() Mechanism
// ===========================================================
// Object.create() does not copy the prototype object but sets the new object's
// __proto__ directly to the provided prototype (e.g., Shape.prototype), forming
// a prototype chain. Example:
//   Circle.prototype = Object.create(Shape.prototype);
// Here, Circle.prototype is a new object with __proto__ pointing to Shape.prototype,
// creating a single-layer reference instead of duplicating Shape.prototype.
//
// When setting inheritance via Circle.prototype = Object.create(Shape.prototype),
// Circle.prototype’s __proto__ points to Shape.prototype. However, the constructor
// property of Circle.prototype gets overwritten because Object.create() creates a
// new object without an explicitly defined constructor property.
//
// When accessing new Circle().constructor, JavaScript searches along the prototype chain:
// 1. It first looks for the constructor property on Circle.prototype (not found).
// 2. It then searches up the chain to Shape.prototype.constructor, which points to Shape.

Circle.prototype = Object.create(Shape.prototype); // Inherit Shape's prototype

// ===========================================================
//                  Why Reset Constructor?
// ===========================================================
// Circle.prototype → Shape.prototype (created via Object.create)
// Shape.prototype.constructor → Shape
// Circle.prototype.constructor implicitly inherits from Shape.prototype.constructor,
// pointing to Shape.
Circle.prototype.constructor = Circle; // Reset constructor from Shape to Circle

// ===========================================================
//                      Usage Example
// ===========================================================
const c = new Circle.prototype.constructor(1); // Create an instance using constructor reference

console.log(c); // Outputs: Circle { radius: 1 }
console.log(c.constructor); // Outputs: Function: Circle
