// ===========================================================
//         Strict Equality Operator (checks type and value, NO type conversion)
// ===========================================================

console.log(1 === 1); // true (both type and value identical)
console.log("1" === 1); // false (types differ: string vs number)

// ===========================================================
//      Loose Equality Operator (checks value ONLY, includes type conversion)
// ===========================================================

console.log(1 == 1); // true (values identical, same types)
console.log("1" == 1); // true (string "1" converted to number 1)
console.log(true == 1); // true (boolean true converted to number 1)

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
