// ==================== 1. Function Declaration ====================
function walk() {
  console.log("walk");
}

// ==================== 2. Named Function Expression ====================
const run1 = function namedRun() {
  console.log("run1");
};

// ==================== 3. Anonymous Function Expression ====================
const run2 = function () {
  console.log("run2");
};

// ==================== Function Calls ====================
walk(); // Outputs: walk
run1(); // Outputs: run1
run2(); // Outputs: run2
