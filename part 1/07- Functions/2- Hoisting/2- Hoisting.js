// ===========================================================
//              Hoisted: Function Declaration
// ===========================================================
// - Function declarations are hoisted, so they can be called before definition.

walk(); // Outputs: "walk"

function walk() {
  console.log("walk");
}

// ===========================================================
//          Not Hoisted: Function Expression
// ===========================================================
// - Function expressions are not hoisted and must be called after definition.
// run(); // Uncommenting this will cause an error: Cannot access 'run' before initialization.

const run = function () {
  console.log("run");
};

run(); // Outputs: "run"
