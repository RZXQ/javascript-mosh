/// 1. This example demonstrates various ways to clone an object in JavaScript.
///    - Manual cloning using a `for...in` loop.
///    - Using `Object.assign()` for cloning and extending.
///    - Using the spread operator (`...`) for a concise way to clone and extend.

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// 1. Manual cloning using `for...in`
const another1 = {}; // Initialize an empty object
for (let key in circle) {
  another1[key] = circle[key]; // Copy each property from circle to another1
}
console.log(another1); // Logs: { radius: 1, draw: [Function: draw] }

// 2. Using `Object.assign()` to clone and add properties
const another2 = Object.assign({ color: "yellow" }, circle); // Copies circle into a new object
console.log(another2); // Logs: { color: "yellow", radius: 1, draw: [Function: draw] }

// 3. Using the spread operator (`...`) for cloning and adding properties
const another3 = { ...circle, color: "yellow" }; // Spread all circle properties and add color
console.log(another3); // Logs: { radius: 1, draw: [Function: draw], color: "yellow" }

// ==================== Object Definition ====================

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// ==================== Manual Cloning ====================

const another1 = {};
for (let key in circle) {
  another1[key] = circle[key];
}
console.log(another1);

// ==================== Object.assign Cloning ====================

const another2 = Object.assign({ color: "yellow" }, circle);
console.log(another2);

// ==================== Spread Operator Cloning ====================

const another3 = { ...circle, color: "yellow" };
console.log(another3);
