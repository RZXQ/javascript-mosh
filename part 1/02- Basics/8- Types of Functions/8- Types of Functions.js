// Symbols in JavaScript:
// ( ) are called parentheses
// ; is called a semicolon
// , is called a comma
// : is called a colon

// 1. Function performing a task
// This function accepts two parameters (firstName and lastName) and prints a greeting message
function greet(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}

greet("Reacher", "WANG"); // Output: "Hello Reacher WANG"

// 2. Function calculating a value
function square(number) {
  return number * number; // The function returns the result, so we can use it as a value
}

console.log(square(2));
