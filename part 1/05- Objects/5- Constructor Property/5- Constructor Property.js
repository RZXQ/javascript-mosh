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

// ===========================================================
//                   Additional Notes & Conversation
// ===========================================================

// Question Summary:
// -----------------------------------------------------------
// Q: Why does object created using Constructor function have
//    a constructor property pointing to the function itself,
//    while the object created using the Factory function points
//    to the built-in Object constructor?

// Explanation Given:
// -----------------------------------------------------------
// Constructor Function:
// - When using the 'new' keyword, JavaScript explicitly links
//   the newly created object's constructor property to your
//   custom constructor function itself (like Circle). That's why
//   this points to [Function: Circle].

// Factory Function (Object literal):
// - Factory functions simply return object literals.
// - Object literals "{}" are syntactic sugar for
//   "new Object()", thus JavaScript implicitly sets the
//   object's constructor as the built-in Object constructor.
// - Hence, the constructor property points to [Function: Object].

// JavaScript Primitive Types vs. Wrapper Objects:
// -----------------------------------------------------------

// JavaScript has primitive types (number, boolean, string,
// symbol, bigint) that behave as primitives.

// For each primitive type, JavaScript has corresponding
// wrapper objects that allow primitives to temporarily behave
// as objects to use associated methods and properties.

// Wrapper classes for each primitive type:

//  Primitive Type     Wrapper Object
//  -----------------  --------------
//  number             Number
//  boolean            Boolean
//  string             String
//  symbol             Symbol (ES6+)
//  bigint             BigInt (ES2020+)

// Example of using wrappers explicitly (not advised typically):

// Number wrapper
let primitiveNumber = 10;
let wrapperNumber = new Number(10);

console.log(typeof primitiveNumber); // "number"
console.log(typeof wrapperNumber); // "object"
console.log(wrapperNumber instanceof Number); // true

// Boolean wrapper
let primitiveBool = true;
let wrapperBool = new Boolean(true);

console.log(typeof primitiveBool); // "boolean"
console.log(typeof wrapperBool); // "object"
console.log(wrapperBool instanceof Boolean); // true

// Auto-boxing (automatic conversion from primitive to object):
// JavaScript internally uses wrapper objects automatically
// to allow primitives to temporarily behave as objects.

let str = "hello";
console.log(str.toUpperCase()); // "HELLO"
// (internally creates a temporary wrapper String object)

// Important Note:
// -----------------------------------------------------------
// Although wrapper objects exist, explicitly using their constructors
// (new Number(), new Boolean(), new String()) is generally
// discouraged in JavaScript as it introduces unnecessary complexity
// and confusion due to their object behavior:

// Example demonstrating unwanted behavior due to wrappers:

let a = new Boolean(false);
if (a) {
  console.log("Unexpectedly true!");
}
// "Unexpectedly true!" prints due to object truthiness, even though a is false.

// Best Practice:
// - Use primitives directly for simplicity and clarity
// - Avoid explicit usage of wrapper objects in most cases
