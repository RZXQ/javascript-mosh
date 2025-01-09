//--------------------------------------------------
// File: 2- Prototypes and Prototypical Inheritance.js
//--------------------------------------------------
// A prototype is just a regular object.
// Every object has a prototype, except the ObjectBase

let x = {};
let y = {};
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)); // true

//--------------------------------------------------
// File: 3- Multilevel Inheritance.js
//--------------------------------------------------
// -----------------------------------------------------------
// arrayBase
// -----------------------------------------------------------
let myArray = [];
console.log(myArray); // Logs the array and its prototype (Array.prototype)

// -----------------------------------------------------------
// circleBase
// -----------------------------------------------------------
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);
console.log(circle); // Logs the Circle instance and its prototype (Circle.prototype)

//--------------------------------------------------
// File: 03- Prototypes.js
//--------------------------------------------------
//--------------------------------------------------
// File: 2- Prototypes and Prototypical Inheritance.js
//--------------------------------------------------
// Every object (except the root object) has a prototype (parent).
// Use Object.getPrototypeOf(obj) to get the prototype of an object.
let x = {},
  y = {};
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)); // true

//--------------------------------------------------
// File: 3- Multilevel Inheritance.js
//--------------------------------------------------
// Example of prototype chains in arrays and custom constructors
let arr = [];
console.log(arr); // Array with its prototype (Array.prototype)

function Circle(radius) {
  this.radius = radius;
  this.draw = () => console.log("draw");
}
const circle = new Circle(10);
console.log(circle); // Circle instance and its prototype (Circle.prototype)

//--------------------------------------------------
// File: 4- Property Descriptors.js
//--------------------------------------------------
// Use Object.getOwnPropertyDescriptor to inspect attributes
let person = { name: "Reacher" };
console.log(
  Object.getOwnPropertyDescriptor(Object.getPrototypeOf(person), "toString"),
);

// Use Object.defineProperty to set attributes
Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});
person.name = "Jack"; // No effect
console.log(person.name); // "Reacher"
console.log(Object.keys(person)); // []

//--------------------------------------------------
// File: 5- Constructor Prototypes.js
//--------------------------------------------------
// Prototypes are shared among all objects created by the constructor.
function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.draw = () => console.log("draw");

const protoCircle = new Circle(1);
console.log(Object.getPrototypeOf(protoCircle) === Circle.prototype); // true
console.log(Circle.prototype.constructor === Circle); // true

//--------------------------------------------------
// File: 6- Prototype vs Instance Members.js
//--------------------------------------------------
// Prototype members are shared; instance members are unique.
function Circle(radius) {
  this.radius = radius; // Instance member
}
Circle.prototype.draw = function () {
  console.log("draw"); // Prototype member
};
const c1 = new Circle(1);
console.log(c1.toString()); // Default toString or custom implementation

//--------------------------------------------------
// File: 7- Iterating Instance and Prototype Members.js
//--------------------------------------------------
// Object.keys() returns instance properties.
// for...in includes both instance and prototype properties.
function Circle(radius) {
  this.radius = radius;
  this.move = () => console.log("move");
}
Circle.prototype.draw = () => console.log("draw");

const c2 = new Circle(1);
console.log(Object.keys(c2)); // ["radius", "move"]
for (let key in c2) console.log(key); // Includes "draw" from prototype

//--------------------------------------------------
// File: 8- Avoid Extending the Built-in Objects.js
//--------------------------------------------------
// Avoid modifying objects you don't own.
Array.prototype.shuffle = function () {
  // Custom shuffle logic
};
const myArray = [];
myArray.shuffle();

//--------------------------------------------------
// File: 4- Property Descriptors.js
//--------------------------------------------------
let person = { name: "Reacher" };

// ===========================================================
//                      Get Property Descriptor
// ===========================================================
const objectBase = Object.getPrototypeOf(person); // Get the prototype of `person`
const descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor); // Logs the property descriptor for `toString`

// ===========================================================
//                      Set Property Descriptor
// ===========================================================
Object.defineProperty(person, "name", {
  writable: false, // The value cannot be modified (read-only)
  enumerable: false, // The property will not appear in enumeration
  configurable: false, // The descriptor cannot be redefined or deleted
});

// ===========================================================
//                      1. Test Writable
// ===========================================================
person.name = "Jack"; // Fails silently (non-strict mode) or throws an error (strict mode)
console.log(person.name); // "Reacher" (the value remains unchanged)

// ===========================================================
//                      2. Test Enumerable
// ===========================================================
console.log(Object.keys(person)); // [] (the `name` property is hidden in enumeration)

// ===========================================================
//                      3. Test Configurable
// ===========================================================
// a. Attempt to delete the property
delete person.name; // Fails silently or throws an error (strict mode)
console.log(person.name); // "Reacher" (the property is not deleted)

// b. Attempt to redefine the descriptor
try {
  Object.defineProperty(person, "name", {
    writable: true, // Throws an error because `configurable` is false
  });
} catch (e) {
  console.log(
    "Error: Cannot redefine property 'name' because it is not configurable.",
  );
}

//--------------------------------------------------
// File: 5- Constructor Prototypes.js
//--------------------------------------------------
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

//--------------------------------------------------
// File: 6- Prototype vs Instance Members.js
//--------------------------------------------------
// ===========================================================
// 1. Before: c1, c2 Each Have a Copy of the draw Method
// ===========================================================
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const c1_old = new Circle(1);
const c2_old = new Circle(2);

// ===========================================================
// 2. After: Shared draw Method via Prototype
// ===========================================================
function Circle(radius) {
  // Instance members
  this.radius = radius;
  this.move = function () {
    this.draw(); // Call the prototype method
    console.log("move");
  };
}

// Prototype members
Circle.prototype.draw = function () {
  this.move(); // Call the instance method
  console.log("draw");
};

const c1 = new Circle(1);
const c2 = new Circle(2);

// ===========================================================
// 3. Practical Use Case: Overwrite Default toString
// ===========================================================
Circle.prototype.toString = function () {
  return `Circle with radius ${this.radius}`;
};

// Testing
console.log(c1.toString()); // "Circle with radius 1"
console.log(c2.toString()); // "Circle with radius 2"

//--------------------------------------------------
// File: 7- Iterating Instance and Prototype Members.js
//--------------------------------------------------
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

//--------------------------------------------------
// File: 8- Avoid Extending the Built-in Objects.js
//--------------------------------------------------
// Don't modify objects you don't own!

Array.prototype.shuffle = function () {
  // ...
};

const arr = [];
arr.shuffle();
