// ==================== 1- Variables ====================
let name = "John"; // Reassignable variable

// ==================== 2- Constants ====================
const pi = 3.14; // Immutable once assigned

// ==================== 3- Primitive Types ====================
let num = 42; // Number
let text = "Hello"; // String
let isAvailable = false; // Boolean
let nothing = null; // Null
let notDefined; // Undefined
let uniqueId = Symbol(); // Symbol

// ==================== 4- Dynamic Typing ====================
let variable = "Dynamic";
variable = 100; // Can dynamically change its type

// ==================== 5- Objects ====================
const person = { name: "Ruizhi", age: 33 };

// Dot notation
person.name = "DOT";

// Bracket notation
person["property"] = "BRACKET";

// ==================== 6- Arrays ====================
const fruits = ["Apple", "Banana", "Cherry"];

// ==================== 7- Functions ====================
const sayHello = (name) => console.log(`Hello, ${name}!`);
sayHello("Alice");
