// ===========================================================
//                  Constructor Function
// ===========================================================

// Using constructor function explicitly creates a new object
// associated with the custom constructor function itself.
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle1 = new Circle(1);

// Logs [Function: Circle], indicating that the object was constructed by
// the explicitly defined constructor function 'Circle'.
console.log(circle1.constructor); // Output: [Function: Circle]

// ===========================================================
//                   Factory Function
// ===========================================================

// Factory functions return regular JavaScript object literals.
// Object literals are implicitly created by using `new Object()` under the hood.
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle2 = createCircle(1);

// Logs [Function: Object] because this object literal was implicitly created
// by the built-in Object constructor, as object literals are syntactic sugar for `new Object()`.
console.log(circle2.constructor); // Output: [Function: Object]
