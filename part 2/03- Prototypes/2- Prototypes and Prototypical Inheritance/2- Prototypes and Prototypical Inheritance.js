// A prototype is just a regular object.
// Every object has a prototype, except the ObjectBase

let x = {};
let y = {};
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)); // true
