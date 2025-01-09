// -----------------------------------------------------------
// Object Literals
// -----------------------------------------------------------
const circle = {
  radius: 1,
  location: { x: 1, y: 2 },
  draw() {
    console.log("draw");
  },
};

// -----------------------------------------------------------
// Factory Functions
// -----------------------------------------------------------
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
const factoryCircle = createCircle(5);

// -----------------------------------------------------------
// Constructor Functions
// -----------------------------------------------------------
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const constructedCircle = new Circle(5);

// -----------------------------------------------------------
// Constructor Property
// -----------------------------------------------------------
const obj = {};
console.log(obj.constructor); // [Function: Object]

// -----------------------------------------------------------
// Functions Are Objects
// -----------------------------------------------------------
function FunctionExample(param) {
  console.log(this, param);
}
console.log(FunctionExample.name); // "FunctionExample"
console.log(FunctionExample.length); // 1 (number of parameters)

// Call the function with different `this` values
FunctionExample.call({ context: "call" }, 1); // `this` = { context: "call" }
FunctionExample.apply({ context: "apply" }, [1]); // `this` = { context: "apply" }

// Bind a function to a specific `this` and call it later
const boundFunction = FunctionExample.bind({ context: "bind" });
boundFunction(1); // `this` = { context: "bind" }

// -----------------------------------------------------------
// Value vs Reference Types
// -----------------------------------------------------------
// Value types: String, Number, Boolean, Symbol, undefined, null
// Reference types: Object, Function, Array

let x = 10;
let y = x;
x = 20;
console.log(x, y); // 20, 10

let objA = { value: 10 };
let objB = objA;
objA.value = 20;
console.log(objA.value, objB.value); // 20, 20

// -----------------------------------------------------------
// Adding and Removing Properties
// -----------------------------------------------------------
function ModifiableCircle(radius) {
  this.radius = radius;
}
const dynamicCircle = new ModifiableCircle(10);
dynamicCircle.color = "red"; // Add property
delete dynamicCircle.color; // Remove property

// -----------------------------------------------------------
// Enumerating Properties
// -----------------------------------------------------------
function CircleWithProperties(radius) {
  this.radius = radius;
}
const propertyCircle = new CircleWithProperties(10);

// Enumerate properties using `for...in`
for (let key in propertyCircle) console.log(key, propertyCircle[key]);

// Get own keys and values
console.log(Object.keys(propertyCircle)); // ["radius"]
console.log(Object.values(propertyCircle)); // [10]

// Get both keys and values
console.log(Object.entries(propertyCircle)); // [["radius", 10]]

// Check if a property exists
console.log("radius" in propertyCircle); // true

// -----------------------------------------------------------
// Abstraction (Hiding Details)
// -----------------------------------------------------------
function AbstractCircle(radius) {
  this.radius = radius; // Public property
  let defaultLocation = { x: 0, y: 0 }; // Private property

  this.draw = function () {
    console.log("draw", defaultLocation);
  };
}
const abstractCircle = new AbstractCircle(5);
abstractCircle.draw();

// -----------------------------------------------------------
// Getters and Setters
// -----------------------------------------------------------
function CircleWithAccessors(radius) {
  let defaultLocation = { x: 0, y: 0 };

  Object.defineProperty(this, "defaultLocation", {
    get: () => defaultLocation,
    set: (value) => (defaultLocation = value),
  });

  this.radius = radius;
  this.draw = () => console.log("draw");
}

const accessorCircle = new CircleWithAccessors(1);
accessorCircle.defaultLocation = { x: 1, y: 1 }; // Setter
console.log(accessorCircle.defaultLocation); // Getter
accessorCircle.draw();

// -----------------------------------------------------------
// Key Points Summary
// -----------------------------------------------------------
// - Object literals: Quick way to define static objects.
// - Factory functions: Create reusable objects with shared structure.
// - Constructor functions: Create objects using `new` keyword.
// - Functions are objects: Can have properties, methods, and use `call`, `apply`, `bind`.
// - Value types: Copied by value.
// - Reference types: Copied by reference.
// - Enumerating properties: Use `for...in`, `Object.keys`, `Object.values`, `Object.entries`.
// - Abstraction: Hide implementation details using private variables.
// - Getters/Setters: Use `Object.defineProperty` for controlled access.
