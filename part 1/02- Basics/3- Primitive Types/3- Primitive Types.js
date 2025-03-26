// ===========================================================
//                        JavaScript Types
// ===========================================================
// In JavaScript, there are two categories of types:
// 1. Primitives (or Value Types)
// 2. Reference Types

// ===========================================================
//                Primitives (or Value Types)
// ===========================================================

let name = "Reacher"; // String literal
let age = 30; // Number literal
let isApproved = true; // Boolean literal

// Difference between 'null' and 'undefined':
// - 'undefined' indicates a variable has been declared but not initialized with a value (implicit, system assigned).
// - 'null' explicitly represents the intentional absence of any object value (typically assigned by developer).
let firstName; // undefined - variable declared but not assigned a value, system default absence of value
let selectedColor = null; // null - explicitly set by user to indicate intentional absence of any object value

let symbol = Symbol(); // Symbol - unique and immutable primitive value
