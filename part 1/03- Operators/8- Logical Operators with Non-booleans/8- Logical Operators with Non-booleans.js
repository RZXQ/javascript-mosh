// ===========================================================
//                  Falsy Values (6 in Total)
// ===========================================================
/* 0, NaN, '', false, undefined, null */

// ===========================================================
//                  Logical OR (||) Operator
// ===========================================================
// Returns the first truthy value or the last falsy value.
console.log(false || "Reacher"); // "Reacher"
console.log(false || 1); // 1
console.log(false || 1 || 2); // 1

// ===========================================================
//                  Logical AND (&&) Operator
// ===========================================================
// Returns the first falsy value or the last truthy value.
console.log(true && "Reacher"); // "Reacher"
console.log(false && "Reacher"); // false
console.log("Hello" && 42); // 42
console.log(0 && "Reacher"); // 0
console.log(null && "Anything"); // null

// ===========================================================
//        Example: Assigning Default Values with OR (||)
// ===========================================================
let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor; // Returns "blue" (userColor is falsy)
console.log(currentColor); // "blue"
