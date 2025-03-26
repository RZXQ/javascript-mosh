// ===========================================================
//                        Typing in Programming
// ===========================================================
// 1. Static Typing: Variable types are fixed at compile-time
//    (e.g., Java: `String name = "John";`).
// 2. Dynamic Typing: Variable types are not fixed until runtime,
//    meaning they can be changed as the program runs
//    (e.g., JavaScript: `let name = "John";`).

// ===========================================================
//                  Dynamic Typing in JavaScript
// ===========================================================

// At runtime, JavaScript assigns "Reacher" (string) to name
let name = "Reacher";
console.log(typeof name); // Output at runtime: "string"

// At runtime, JavaScript dynamically reassigns name to type number
name = 1;
console.log(typeof name); // Output at runtime: "number"

// ===========================================================
//                      Number Type (Runtime)
// ===========================================================

// At runtime, JavaScript determines "age" as a number type
let age = 30;
console.log(typeof age); // Output at runtime: "number"

// At runtime, JavaScript still treats it as a number type (no integer vs float distinction)
age = 30.1;
console.log(typeof age); // Output at runtime: "number"

// ===========================================================
//                      Boolean Type (Runtime)
// ===========================================================

// At runtime, JavaScript assigns boolean true to isApproved
let isApproved = true;
console.log(typeof isApproved); // Output at runtime: "boolean"

// ===========================================================
//                      Undefined Type (Runtime)
// ===========================================================

// At runtime, the variable firstName is declared but not initialized, implicitly giving "undefined" type
let firstName;
console.log(typeof firstName); // Output at runtime: "undefined"

// ===========================================================
//                        Null Type (Runtime)
// ===========================================================

// At runtime, null is assigned explicitly, and due to JavaScript quirks it's considered an object
let selectedColor = null;
console.log(typeof selectedColor); // Output at runtime: "object" (JavaScript quirk)

// ===========================================================
//                       Symbol Type (Runtime)
// ===========================================================

// At runtime, Symbol generates a unique symbol type
let symbol = Symbol();
console.log(typeof Symbol()); // Output at runtime: "symbol"
