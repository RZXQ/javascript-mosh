// ===========================================================
//                   Reference Types in JavaScript
// ===========================================================
// Reference types include Object, Array, and Function.

// ===========================================================
//                      Object Literal
// ===========================================================

const person = { name: "Ruizhi", age: 33 };
console.log(person);

// ===========================================================
//                     Accessing Properties
// ===========================================================

// 1. Dot Notation
person.name = "DOT";
console.log(person);

// 2. Bracket Notation
let selection = "property";
person[selection] = "BRACKET";
console.log(person);
