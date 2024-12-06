/// ### Function Declaration and Expression
/// 1. `walk`: Declared using a function declaration. Hoisted, so callable before its definition.
/// 2. `run`: Declared using a function expression. Not hoisted; callable only after its definition.

walk(); // 1. Function declarations are hoisted, so `walk()` works before its definition.

function walk() {
  console.log("walk");
}

// run(); // 2. Uncommenting this will cause an error as `run` is not hoisted.

const run = function () {
  console.log("run");
};
