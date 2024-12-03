/// 1. This example explains data types and how they behave during assignment and manipulation.
///    - Value types (primitives): Number, String, Boolean, Symbol, undefined, null
///      - Copied by their value; changes to one variable do not affect another.
///    - Reference types: Object, Function, Array
///      - Copied by their reference; changes to the original reflect in the copy.

// 2. Primitives are copied by value. Objects are copied by reference.

// 2.1 Demonstrating value types:
let x1 = 10; // Initialize x1 with 10
let y1 = x1; // Copy value of x1 to y1
x1 = 20; // Changing x1 does not affect y1
console.log(x1, y1); // Outputs: 20, 10

// 2.2 Demonstrating reference types:
let x2 = { value: 10 }; // Initialize x2 as an object with value 10
let y2 = x2; // Copy the reference of x2 to y2
x2.value = 20; // Changing x2 affects y2 because they reference the same object
console.log(x2, y2); // Outputs: { value: 20 }, { value: 20 }

// 2.3 Value types in a function:
let number = 10;
function increase1(number) {
  number++; // Increment the local copy of the number
}
increase1(number);
console.log(number); // Outputs: 10 (original variable is unchanged)

// 2.4 Reference types in a function:
let obj = { value: 10 };
function increase2(obj) {
  obj.value++; // Modifies the referenced object
}
increase2(obj);
console.log(obj); // Outputs: { value: 11 }
