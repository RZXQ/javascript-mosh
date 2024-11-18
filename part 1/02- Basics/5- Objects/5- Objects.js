// In JavaScript, reference types include the following:
// 1. Object
// 2. Array
// 3. Function

// Example of an Object:
let person = {
  name: "Reacher",
  age: 33,
}; // `{}` is called an object literal, a way to define an object with key-value pairs

console.log(person); // Output the entire person object

// Updating the 'name' property of the person object
// There are two ways to access and modify object properties:

// 1. Dot notation (cleaner and more commonly used)
person.name = "Ruizhi";
console.log(person.name); // Output: "Ruizhi"

// 2. Bracket notation (useful for dynamic property names or special characters in property names)
person["name"] = "Ruizhi";
console.log(person.name); // Output: "Ruizhi"
