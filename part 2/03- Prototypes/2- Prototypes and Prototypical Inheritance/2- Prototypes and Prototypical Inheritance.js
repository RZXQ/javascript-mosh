// ===========================================================
//                      getPrototypeOf(x)
// ===========================================================
// Note:
// 1. x.__proto__ is deprecated
// 2. A prototype is just a regular object.
// 3. Every object has a prototype, except the ObjectBase

let x = {};
let y = {};

// Check if two objects share the same prototype
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)); // true
