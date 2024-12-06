// Function Explanation
// 1. `walk`: Declared using a function declaration, available globally due to hoisting.
// 2. `run1`: Named function expression, its name (`walk`) is local to the function scope.
// 3. `run2`: Anonymous function expression, referenced by the constant `run2`.

function walk() {
  console.log("walk");
}

const run1 = function walk() {
  console.log("run1");
};

const run2 = function () {
  console.log("run2");
};

walk();
run1();
run2();
