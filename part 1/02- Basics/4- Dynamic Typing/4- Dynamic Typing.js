// Typing in Programming:
// 1. Static: Variable types are fixed (e.g., `String name = "John";`).
// 2. Dynamic: Variable types are determined at runtime (e.g., `let name = "John";`).

// Dynamic Typing in JavaScript
let name = "Reacher"; // Initially a string
console.log(typeof name); // Output: "string"

name = 1; // Now a number
console.log(typeof name); // Output: "number"

// Number Type
let age = 30;
console.log(typeof age); // Output: "number"

age = 30.1; // Still a "number" (no distinction between integers & floats)
console.log(typeof age); // Output: "number"

// Boolean Type
let isApproved = true;
console.log(typeof isApproved); // Output: "boolean"

// Undefined Type
let firstName;
console.log(typeof firstName); // Output: "undefined"

// Null Type
let selectedColor = null;
console.log(typeof selectedColor); // Output: "object" (a known JavaScript quirk)
