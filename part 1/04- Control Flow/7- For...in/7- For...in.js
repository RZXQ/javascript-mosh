// ===========================================================
//                  Iterating Over Objects
// ===========================================================

const person = { name: "Reacher", age: 33 };
for (let key in person) console.log(key, person[key]); // Key-Value pairs

// ===========================================================
//                  Iterating Over Arrays
// ===========================================================

const colors = ["red", "green", "blue"];

// for...in (indices)
for (let index in colors) {
  console.log(index, colors[index]);
}
