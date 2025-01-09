//--------------------------------------------------
// Prototypes and Prototypical Inheritance
//--------------------------------------------------
// Every object (except the root object) has a prototype (parent).
// Use Object.getPrototypeOf(obj) to get the prototype of an object.
let x = {},
  y = {};
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)); // true

//--------------------------------------------------
// Multilevel Inheritance
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
// Property Descriptors
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
// Constructor Prototypes
//--------------------------------------------------
// Prototypes are shared among all objects created by the constructor.
function CirclePrototype(radius) {
  this.radius = radius;
}
CirclePrototype.prototype.draw = () => console.log("draw");

const protoCircle = new CirclePrototype(1);
console.log(Object.getPrototypeOf(protoCircle) === CirclePrototype.prototype); // true
console.log(CirclePrototype.prototype.constructor === CirclePrototype); // true

//--------------------------------------------------
// Prototype vs Instance Members
//--------------------------------------------------
// Prototype members are shared; instance members are unique.
function CircleInstance(radius) {
  this.radius = radius; // Instance member
}
CircleInstance.prototype.draw = function () {
  console.log("draw"); // Prototype member
};
const c1 = new CircleInstance(1);
console.log(c1.toString()); // Default toString or custom implementation

//--------------------------------------------------
// Iterating Instance and Prototype Members
//--------------------------------------------------
// Object.keys() returns instance properties.
// for...in includes both instance and prototype properties.
function CircleIteration(radius) {
  this.radius = radius;
  this.move = () => console.log("move");
}
CircleIteration.prototype.draw = () => console.log("draw");

const c2 = new CircleIteration(1);
console.log(Object.keys(c2)); // ["radius", "move"]
for (let key in c2) console.log(key); // Includes "draw" from prototype

//--------------------------------------------------
// Avoid Extending Built-in Objects
//--------------------------------------------------
// Avoid modifying objects you don't own.
Array.prototype.shuffle = function () {
  // Custom shuffle logic
};
const myArray = [];
myArray.shuffle();
