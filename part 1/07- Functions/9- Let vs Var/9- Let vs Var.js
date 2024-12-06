// 1. Scope issue: `var` vs `let`
function start() {
  // let => block-scoped
  // var => function-scoped
  for (var i = 0; i < 5; i++) {
    console.log(i); // Logs numbers 0 through 4
  }
  console.log(i); // Logs 5 (accessible outside the loop with `var`)
}

start();

////////////////////////////////////////////

// 2. Global variables and the `window` object
var color = "red"; // var => attaches to `window`
let age = 30; // let => does not attach to `window`

console.log(window.color); // Logs "red"
console.log(window.age); // Logs `undefined`

// 3. Functions attach to `window` in global scope
function sayHi() {
  console.log("hi");
}

console.log(window.sayHi()); // Logs "hi"
