// ==================== Scope Issue: `var` vs `let` ====================
function start() {
  for (var i = 0; i < 5; i++) {
    console.log(i); // Logs 0 through 4
  }
  console.log(i); // Logs 5 (accessible outside the loop due to `var`)
}

start();

// ==================== Global Variables and the `window` Object ====================
var color = "red"; // `var` attaches to `window`
let age = 30; // `let` does not attach to `window`

console.log(window.color); // Logs: "red"
console.log(window.age); // Logs: undefined

// ==================== Functions in Global Scope ====================
function sayHi() {
  console.log("hi");
}

console.log(window.sayHi()); // Logs: "hi"
