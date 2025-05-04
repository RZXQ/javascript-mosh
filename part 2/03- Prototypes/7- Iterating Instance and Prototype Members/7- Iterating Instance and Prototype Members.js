// ===========================================================
//                  Circle Constructor Function
// ===========================================================
function Circle(r) {
  // Own property: Each Circle instance gets its own 'radius'
  this.radius = r;

  // Own method: Each instance gets its own 'move' function
  this.move = function () {
    console.log("move");
  };
}

// Method shared among all Circle instances via the prototype
Circle.prototype.draw = function () {
  console.log("draw");
};

const circ = new Circle(1);

// ===========================================================
//              Iterating Over Own Enumerable Properties
// Object.keys returns an array of own enumerable property names
// ===========================================================
for (let key of Object.keys(circ)) {
  console.log("for...of =>", key); // "radius", "move"
}

// ===========================================================
//              Iterating Over All Enumerable Properties
// for...in loops over both own and inherited enumerable properties
// ===========================================================
for (let key in circ) {
  console.log("for...in =>", key, circ[key]);
  // Logs "radius", "move", and "draw"
}

// ===========================================================
//                Checking for Own Properties
// hasOwnProperty checks if the property is an own (instance) property
// ===========================================================
console.log(Object.getOwnPropertyNames(circ)); // Lists own property names
console.log(circ.hasOwnProperty("radius")); // true (own property)
console.log(circ.hasOwnProperty("move")); // true (own method)
console.log(circ.hasOwnProperty("draw")); // false (inherited from prototype)
console.log(Object.hasOwnProperty("toString")); // false (toString is inherited)
console.log(Object.prototype.hasOwnProperty("toString")); // true (toString is own property of Object.prototype)
