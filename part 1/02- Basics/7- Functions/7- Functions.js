// ===========================================================
//                     Define a Function
// ===========================================================

function greet1() {
  console.log("Hello World");
}
greet1();

// ===========================================================
//             Function with a Single Parameter
// ===========================================================

function greet2(name) {
  console.log("Hello " + name); // 'name' is the parameter, the argument is the value passed
}
greet2("Reacher");
greet2("John");

// ===========================================================
//            Function with Multiple Parameters
// ===========================================================

function greet3(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}
greet3("Reacher"); // Missing lastName, outputs: "Hello Reacher undefined"
greet3("Reacher", "WANG");
