// 1. Global scope, but it's generally good practice to avoid defining variables in the global scope,
// as any function can overwrite them.
const color = "red";

function start() {
  const message = "hi";
  const color = "blue";
  console.log(color); // Local variable 'color' takes precedence over the global variable 'color'.
}

function stop() {
  const message = "hi"; // This variable is local to the 'stop' function and doesn't affect the global scope.
}

start();
