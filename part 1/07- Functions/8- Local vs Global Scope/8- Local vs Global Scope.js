// ==================== Global Scope ====================
// - Avoid global variables when possible to prevent unintended overwrites.
const color = "red"; // Global variable

// ==================== Local Scope ====================
function start() {
  const message = "hi"; // Local to 'start'
  const color = "blue"; // Local 'color' shadows global 'color'
  console.log(color); // Outputs: "blue"
}

function stop() {
  const message = "hi"; // Local to 'stop', independent of other functions
}

start(); // Calls 'start' and logs the local 'color'
