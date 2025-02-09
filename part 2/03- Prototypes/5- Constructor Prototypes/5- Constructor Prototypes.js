// ===========================================================
//                      Circle Prototype
// ===========================================================
function Circle(r) {
  this.radius = r;
}
const circ = new Circle(1);
console.log(circ.__proto__); // Circle.prototype
console.log(Object.getPrototypeOf(circ)); // Same as circ.__proto__
console.log(Circle.prototype); // Prototype object of Circle
console.log(Circle.prototype.constructor); // Points back to Circle

// ===========================================================
//                      Array Prototype
// ===========================================================
let arr = [];
console.log(arr.__proto__); // Array.prototype
console.log(Object.getPrototypeOf(arr)); // Same as arr.__proto__
console.log(Array.prototype); // Prototype object of Array
console.log(Array.prototype.constructor); // Points back to Array
