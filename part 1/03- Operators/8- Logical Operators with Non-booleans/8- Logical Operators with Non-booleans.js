// ===========================================================
//                  JavaScript Falsy Values
// ===========================================================
// A value is falsy if it evaluates to false when converted to a boolean.
// The following values are considered falsy in JavaScript:
//
// false          - Boolean false
// 0              - Number zero
// -0             - Negative number zero
// NaN            - Not-a-Number value
// 0n             - BigInt zero
// ""             - Empty string
// null           - Null value (intentional absence of value)
// undefined      - Undefined value (uninitialized variable)
//
// All other values in JavaScript are truthy (evaluate to true).

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
