let x = {};
let y = {};

// A prototype is just a regular object.
// Every object has a prototype, except the root object (Object.prototype).
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)); // true