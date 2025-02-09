// ===========================================================
//                      Array Prototype
// Note: Objects created by a given constructor will have the same prototype
// ===========================================================

let myArray = [];
console.log(myArray); // Logs the array and its prototype (Array.prototype)

// ===========================================================
//                      Circle Constructor
// ===========================================================

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

console.log(circle); // Logs the Circle instance
console.log(Object.getPrototypeOf(circle)); // Logs Circle.prototype
