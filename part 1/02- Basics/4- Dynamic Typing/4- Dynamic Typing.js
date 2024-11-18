// Two Types of Programming Languages Based on Typing:
// 1. **Static (Statically-Typed)**: The variable type is fixed when declared and cannot change.
//    Example: `String name = "John";`
// 2. **Dynamic (Dynamically-Typed)**: The variable type is determined at runtime and can change as the program runs.
//    Example in JavaScript: `let name = "John";`

// In JavaScript, we can check the type of a variable using the `typeof` operator.
let name = "Reacher";
console.log(typeof name); // Output: "string" - currently, name is a string

name = 1; // Assigning a number to the same variable
console.log(typeof name); // Output: "number" - type of name has changed to number

// JavaScript Number Type
let age = 30;
console.log(typeof age); // Output: "number"

age = 30.1;
console.log(typeof age); // Output: "number" - JavaScript does not differentiate between integers and floating-point numbers; both are of type "number"

// Boolean Type
let isApproved = true;
console.log(typeof isApproved); // Output: "boolean" - a boolean value

// Undefined Type
let firstName = undefined;
console.log(typeof firstName); // Output: "undefined" - both the value and type are undefined

// Null Type
let selectedColor = null;
console.log(typeof selectedColor); // Output: "object" - null represents an empty value but is considered an "object" due to a quirk in JavaScript
