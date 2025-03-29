// ===========================================================
//            Object Keys: Strings and Symbols
// ===========================================================
// According to JavaScript language specifications, keys in JavaScript object literals are always either strings or
// symbols. If a symbol is used explicitly as a key, it retains its type as a symbol. Otherwise, all other keys, including
// numeric ones, are implicitly converted to strings internally.
//
// Example object with implicitly stringified keys:
// const circle = {
//   "radius": 1,
//   "draw": function() {
//     console.log("draw");
//   },
// };

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// ==================== Iteration ====================
for (let key in circle) console.log(key, circle[key]); // for...in
for (let key of Object.keys(circle)) console.log(key); // Keys only
for (let value of Object.values(circle)) console.log(value); // Values only
for (let [key, value] of Object.entries(circle)) console.log(key, value); // Entries

// ==================== Property Check ====================
if ("radius" in circle) console.log("yes");
