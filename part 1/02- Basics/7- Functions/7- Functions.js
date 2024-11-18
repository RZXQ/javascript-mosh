// 1. Basic function demo
function greet1() {
  console.log("Hello World"); // This is the function body, which defines what the function does
} // No semicolon is needed here because a function definition is not a single statement

greet1(); // This is a statement that calls the function and outputs "Hello World"

// 2. Function with a parameter
// `name` is called a parameter; it acts as a placeholder for the value passed when the function is called
function greet2(name) {
  console.log("Hello " + name);
}

greet2("Reacher"); // "Reacher" is called an argument, the actual value passed to the parameter `name`
greet2("John"); // Outputs "Hello John"

// 3. Function with multiple parameters
function greet3(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}

greet3("Reacher"); // In JavaScript, parameters without values are `undefined` by default, so it outputs "Hello Reacher undefined"
greet3("Reacher", "WANG"); // Outputs "Hello Reacher WANG"
