// Function Declaration
function walk() {
  console.log("run");
}

// Anonymous Function Expression
const run = function () {
  console.log("run");
};

let move = run;
run();
move();
