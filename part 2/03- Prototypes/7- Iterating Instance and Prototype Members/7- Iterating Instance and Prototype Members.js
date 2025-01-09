// ===========================================================
//                      Circle Constructor
// ===========================================================
function Circle(radius) {
  // Instance property
  this.radius = radius;

  // Instance method
  this.move = function () {
    console.log("move");
  };
}

// Prototype method
Circle.prototype.draw = function () {
  console.log("draw");
};

const c1 = new Circle(1);

// ===========================================================
//                  Iterating Over Keys
// ===========================================================
// `Object.keys()` only returns **own (instance) enumerable properties**
console.log(Object.keys(c1)); // ["radius", "move"]

// `for...in` loop returns all **enumerable keys**
// Includes both instance (own) and prototype enumerable keys
for (let key in c1) {
  console.log(key, c1[key]); // Logs both properties and methods
}

// ===========================================================
//               Checking for Own Keys
// ===========================================================
// `hasOwnProperty` checks only **own (instance) keys**
console.log(c1.hasOwnProperty("radius")); // true (instance property)
console.log(c1.hasOwnProperty("move")); // true (instance method)
console.log(c1.hasOwnProperty("draw")); // false (prototype method)
