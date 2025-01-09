// ===========================================================
//                  Constructor Function (e.g., Circle)
// ===========================================================
//             +---------------------------+
//             |       Circle(radius)      |
//             +---------------------------+
//               |               ^
//               | .prototype    | .constructor
//               v               |
//             +---------------------------+
// Parent       |     Circle.prototype     |
// Prototype    | (Shared by all instances)|
//             +---------------------------+
//                ^
//                | (.__proto__)
//                | (Object.getPrototypeOf(circle))
//                |
//             +---------------------------+
// Child        |        circle            |
// Instance     | Instance of Circle       |
//             +---------------------------+

// ===========================================================
//                      Circle Prototype
// ===========================================================
function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle(1);

console.log(circle.__proto__); // Points to Circle.prototype
console.log(Object.getPrototypeOf(circle)); // Same as circle.__proto__
console.log(Circle.prototype); // Prototype object of the Circle constructor
console.log(Circle.prototype.constructor); // Points back to Circle

// ===========================================================
//                      Array Prototype
// ===========================================================
let array = [];
console.log(array.__proto__); // Points to Array.prototype
console.log(Object.getPrototypeOf(array)); // Same as array.__proto__
console.log(Array.prototype); // Prototype object of the Array constructor
console.log(Array.prototype.constructor); // Points back to Array
