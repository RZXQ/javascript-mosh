// ===========================================================
// Note:
// If the parent method `duplicate` does not use `this`,
// we can directly call it as `Shape.prototype.duplicate()`.
// However, if the parent method relies on `this`, we must bind the current instance
// by using `Shape.prototype.duplicate.call(this)` to ensure the correct context.
// ===========================================================

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
function Circle() {}

// ===========================================================
//                  Derived Class: Square
// ===========================================================
function Square() {}

// ===========================================================
//                    Utility Function: extend
// ===========================================================
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// ===========================================================
//                      Extend Classes
// ===========================================================
extend(Circle, Shape);
extend(Square, Shape);

// ===========================================================
//                   Method Override: Circle
// ===========================================================
Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this); // Call parent method with correct `this` binding
  console.log("duplicate circle");
};

// ===========================================================
//                      Usage Example
// ===========================================================
const c = new Circle();
const d = new Square();

c.duplicate(); // Output: "duplicate" followed by "duplicate circle"
