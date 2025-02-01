// ===========================================================
//                     Scope: `var` vs `let` vs `const`
// ===========================================================
// `var` is function-scoped; `let` and `const` are block-scoped.
function start() {
  for (var i = 0; i < 5; i++) console.log(i);
  console.log(i); // `var` leaks outside the loop
}

function startWithLet() {
  for (let j = 0; j < 5; j++) console.log(j);
  // console.log(j); // Error: `let` is block-scoped
}

start();
startWithLet();

const x = 10;
// x = 20; // Error: `const` cannot be reassigned

// ===========================================================
//                 Global Scope and `window` Object
// ===========================================================
// `var` attaches to `window`; `let` and `const` do not.
var color = "red";
let age = 30;

console.log(window.color); // "red"
console.log(this.color); // "red" (same as `window.color`)
console.log(window.age); // undefined

// ===========================================================
//               Functions in Global Scope
// ===========================================================
// Function declarations attach to `window` in global scope.
function sayHi() {
  return "hi";
}

console.log(window.sayHi()); // "hi"
console.log(this.sayHi()); // "hi"
