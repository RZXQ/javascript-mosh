// ==================== Hoisted: Function Declaration ====================
// - Function declarations are hoisted, so callable before their definition.
walk(); // Outputs: "walk"

function walk() {
  console.log("walk");
}

// ==================== Not Hoisted: Function Expression ====================
// - Function expressions are not hoisted, so callable only after their definition.
// run(); // Uncommenting this will cause an error: Cannot access 'run' before initialization.

const run = function () {
  console.log("run");
};

run(); // Outputs: "run"
