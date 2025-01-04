// ==================== 1. Function Declarations vs Expressions ====================
// Function Declaration (Hoisted)
function greet() {
  console.log("Hello");
}

// Function Expression (Not Hoisted)
const sayHi = function () {
  console.log("Hi");
};

// ==================== 2. Hoisting ====================
// Variables and functions declared with `var` are hoisted.
console.log(a); // undefined (hoisted)
var a = 10;

function greetHoisted() {
  console.log("Hi"); // Hoisted
}

// ==================== 3. Arguments ====================
// `arguments` is available in regular functions, not arrow functions.
function sum() {
  console.log(arguments); // Logs all passed arguments
}

sum(1, 2, 3);

// ==================== 4. The Rest Operator ====================
// Collects all additional arguments into an array.
function add(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(add(1, 2, 3)); // Output: 6

// ==================== 5. Default Parameters ====================
// Provide default values for function parameters.
function greetDefault(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greetDefault(); // Output: "Hello, Guest"

// ==================== 6. Getters and Setters ====================
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};
person.fullName = "Jane Smith";
console.log(person.fullName); // Output: "Jane Smith"

// ==================== 7. Try and Catch ====================
try {
  throw new Error("Something went wrong");
} catch (e) {
  console.log(e.message); // Logs the error message
}

// ==================== 8. Local vs Global Scope ====================
let globalVar = "I'm global";
function showScope() {
  let localVar = "I'm local";
  console.log(globalVar); // Access global
  console.log(localVar); // Access local
}
showScope();

// ==================== 9. Let vs Var ====================
// `let` is block-scoped; `var` is function-scoped.
if (true) {
  let x = 10; // Block-scoped
  var y = 20; // Function-scoped
}
// console.log(x); // Error: x is not defined
console.log(y); // Output: 20

// ==================== 10. The `this` Keyword ====================
// Scope Definition: In JavaScript, a scope is defined by functions, modules, and blocks (using let or const).
// The {} of an object is not a scope; it is merely a data structure used to store key-value pairs.
// `this` depends on how the function is called.

const obj = {
  method() {
    console.log(this); // Logs `obj`
  },
};
obj.method();

function globalThis() {
  console.log(this); // Logs `window` (browser) or `global` (Node.js)
}
globalThis();

// ==================== 11. Changing `this` ====================
// Using `call`
function greetCall(age) {
  console.log(`${this.name} is ${age} years old.`);
}
const person1 = { name: "John" };
greetCall.call(person1, 25); // Output: "John is 25 years old."

// Using `apply`
greetCall.apply(person1, [25]); // Output: "John is 25 years old."

// Using `bind`
const boundGreet = greetCall.bind(person1);
boundGreet(25); // Output: "John is 25 years old."

// Arrow Functions
const objArrow = {
  name: "Jane",
  arrowFunc: () => {
    console.log(this.name); // `this` refers to global, not `objArrow`
  },
};
objArrow.arrowFunc(); // Output: `undefined`

const obj2 = {
  name: "Jane",
  showName() {
    const arrowFunc = () => console.log(this.name); // `this` refers to `obj2`
    arrowFunc();
  },
};
obj2.showName(); // Output: "Jane"

// Method Assignment
const obj3 = {
  name: "Alex",
  greet() {
    console.log(this.name);
  },
};
const detachedGreet = obj3.greet;
detachedGreet(); // `this` is undefined or global, not `obj3`
