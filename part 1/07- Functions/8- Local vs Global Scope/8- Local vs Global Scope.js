// ===========================================================
//                     🌐 Scope in JavaScript 🌐
// ===========================================================
//
// | Declaration     | Global variable?           | Attached to window? |
// |-----------------|----------------------------|---------------------|
// | `var color`     | ✅ (Yes)                   | ✅ (Yes)            |
// | `const color`   | ✅ (Yes, script-scoped)    | ❌ (No)             |
// | `let color`     | ✅ (Yes, script-scoped)    | ❌ (No)             |
//
// ===========================================================

// ======================== Global Scope ========================
// 🔸 NOTE: Avoid global variables to prevent unintended overwrites.

const color = "red";

// ========================== Local Scope ==========================
function start() {
  const message = "hi"; // Local to 'start'
  const color = "blue"; // Shadows global 'color'
  console.log(color); // Outputs: "blue"
}

function stop() {
  const message = "hi"; // Local to 'stop', independent of 'start'
}

start(); // Logs: "blue"
