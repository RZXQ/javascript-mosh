// ===========================================================
//                      Arrays in JavaScript
// - Arrays do NOT get their own type string from "typeof";
//   they appear as "object" (use Array.isArray() for identifying).
// - Functions DO get their own type string ("function") from "typeof"
//   due to their critical role as executable ("callable") objects.
// ===========================================================

// Define array using array literal syntax [...]
let selectedColors = ["red", "blue"];

// Access elements by index
console.log(selectedColors[0]); // "red"

// Dynamically add new elements (arrays expand automatically)
selectedColors[2] = "green";

// Arrays are dynamic – can store mixed value types
selectedColors[2] = 1;

// typeof returns "object", not "array"
console.log(typeof selectedColors); // "object"

// length automatically updated when items are added
console.log(selectedColors.length); // 3
