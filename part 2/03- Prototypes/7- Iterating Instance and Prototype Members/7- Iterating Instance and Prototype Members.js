// ===========================================================
//                  Circle Constructor
// ===========================================================
function Circle(r) {
  // Instance property
  this.radius = r;

  // Instance method
  this.move = function () {
    console.log("move");
  };
}

// Prototype method
Circle.prototype.draw = function () {
  console.log("draw");
};

const circ = new Circle(1);

// ===========================================================
//                  Iterating with for...of
// Note: Object.keys() => returns only own (instance) enumerable properties
// ===========================================================
for (let key of Object.keys(circ)) {
  console.log("for...of =>", key); // "radius", "move"
}

// ===========================================================
//                  Iterating with for...in
// Note: for...in => returns all enumerable keys (instance + prototype)
// ===========================================================
for (let key in circ) {
  console.log("for...in =>", key, circ[key]);
  // Logs "radius", "move", and also "draw"
}

// ===========================================================
//                Checking for Own Keys
// Note: hasOwnProperty => checks only own (instance) keys
// ===========================================================
console.log(circ.hasOwnProperty("radius")); // true
console.log(circ.hasOwnProperty("move")); // true
console.log(circ.hasOwnProperty("draw")); // false (draw is on the prototype)
console.log(Object.hasOwnProperty("toString")); // false (toString is on the prototype)
console.log(Object.prototype.hasOwnProperty("toString")); // true
