function greet1() {
  console.log("Hello World");
}

greet1();

function greet2(name) {
  console.log("Hello " + name); // 'name' is a parameter, argument is the value passed
}

greet2("Reacher");
greet2("John");

function greet3(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}

greet3("Reacher");
greet3("Reacher", "WANG");
