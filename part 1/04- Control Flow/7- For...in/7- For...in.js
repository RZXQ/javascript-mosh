// ===========================================================
//                  Iterating Over Objects
// ===========================================================

const person = { name: "Reacher", age: 33 };
for (let key in person) console.log(key, person[key]); // Key-Value pairs

// ===========================================================
//                  Iterating Over Arrays
// ===========================================================

const colors = ["red", "green", "blue"];

// 1. for...in (indices)
for (let index in colors) console.log(index, colors[index]);

// 2. for...of (values)
for (let color of colors) console.log(color);
