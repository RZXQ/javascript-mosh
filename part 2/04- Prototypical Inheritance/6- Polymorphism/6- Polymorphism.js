// ===========================================================
// Polymorphism in Action:
// - Polymorphism allows objects of different classes to be treated as objects of a common parent class.
// - Here, `Circle` and `Square` inherit from `Shape`, and both override the `duplicate` method.
// - At runtime, the appropriate `duplicate` method is invoked based on the object's type.
// ===========================================================

// ===========================================================
//                      Parent Class: Shape
// ===========================================================
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate (from Shape)");
};

// ===========================================================
//                  Child Class: Circle
// ===========================================================
function Circle() {}

// ===========================================================
//                  Derived Class: Square
// ===========================================================
function Square() {}

// ===========================================================
//                    Utility Function: Extend
// Sets up inheritance between the child and parent classes.
// ===========================================================
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype); // Set up prototype inheritance
  Child.prototype.constructor = Child; // Restore the child's constructor
}

// ===========================================================
//                 Establish Inheritance
// Both `Circle` and `Square` inherit from `Shape`.
// ===========================================================
extend(Circle, Shape);
extend(Square, Shape);

// ===========================================================
//                Method Overrides for Polymorphism
// Each derived class overrides the `duplicate` method to provide
// specific behavior while still being treated as `Shape` at runtime.
// ===========================================================
Circle.prototype.duplicate = function () {
  console.log("duplicate (from Circle)");
};

Square.prototype.duplicate = function () {
  console.log("duplicate (from Square)");
};

// ===========================================================
//                      Usage Example
// Demonstrates polymorphism: the `duplicate` method is called
// on each shape, invoking the appropriate override based on the object type.
// ===========================================================
const shapes = [new Circle(), new Square()]; // Array of different shapes
for (let shape of shapes) {
  shape.duplicate(); // Calls the overridden method for each shape
}
