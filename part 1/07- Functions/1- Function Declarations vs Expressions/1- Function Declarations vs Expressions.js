// 1. Function Declaration
function walk() {
  console.log("walk");
}

// 2. Named Function Expression
const run1 = function walk() {
  console.log("run1");
};

// 3. Anonymous Function Expression
const run2 = function () {
  console.log("run2");
};

walk();
run1();
run2();
