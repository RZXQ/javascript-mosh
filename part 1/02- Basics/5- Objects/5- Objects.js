// ===========================================================
//                   Reference Types in JavaScript
// ===========================================================
// Reference types in JavaScript include Objects, Arrays, and Functions.
// Unlike primitives, reference types are dynamic and mutable.

// ===========================================================
//                      Object Literals
// ===========================================================
// Objects store data as collections of key-value pairs called properties.

const person = { name: "Ruizhi", age: 33 };

// ===========================================================
//                     Accessing Properties
// ===========================================================

// 1. Dot Notation
// - Used when property name is known and is a valid identifier.
person.name = "DOT";

// 2. Bracket Notation
// - Typically used when:
//   a) Property name is decided at runtime (dynamic access).
//   b) Property name isn't a valid JavaScript identifier (e.g., contains spaces).

// Static access using bracket notation (property name is explicitly known)
person["name"] = "BRACKET";

// Dynamic access using bracket notation (property name comes from variable)
let selection = "property";
person[selection] = "BRACKET";
