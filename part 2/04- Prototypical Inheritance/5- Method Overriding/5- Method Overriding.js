// ===========================================================
//                      Parent Class: Shape
// ===========================================================
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

// ===========================================================
//                  Child Class: Circle
// ===========================================================
function Circle() {}

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

// ===========================================================
//                   Method Override: Circle
// Note: JavaScript will find the first method from the prototype chain
// ===========================================================
Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this); // Call parent method with correct `this` binding
  console.log("duplicate circle");
};

// ===========================================================
//                      Usage Example
// ===========================================================
const circleInstance = new Circle();
circleInstance.duplicate(); // Output: "duplicate" followed by "duplicate circle"
