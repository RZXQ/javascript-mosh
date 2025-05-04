// ===========================================================
//                     Constructor Prototypes
// ===========================================================
// Important: All instances created by a specific constructor function
// share a single prototype object.
//
// For example, every object created by the Circle constructor
// will point to the *same* Circle.prototype.
//
// This prototype object exists only once in memory, regardless of
// how many Circle instances are created. Shared methods or properties
// should be placed on the prototype to ensure there's no duplication.
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
