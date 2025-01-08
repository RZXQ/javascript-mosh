// -----------------------------------------------------------
// Value types vs Reference types
// -----------------------------------------------------------
// Value types: Number, String, Boolean, Symbol, undefined, null
// Reference types: Object, Function, Array
// Primitives are copied by value, objects by reference

// -----------------------------------------------------------
// 1. Value types
// -----------------------------------------------------------
let x = 10;
let y = x;
x = 20;
console.log(x); // 20
console.log(y); // 10

let number1 = 10;
function increase1(number) {
  number++; // Local copy of number is modified
}
increase1(number1);
console.log(number1); // 10

// -----------------------------------------------------------
// 2. Reference types
// -----------------------------------------------------------
let a = { value: 10 };
let b = a; // Both point to the same object
a.value = 20;
console.log(a); // { value: 20 }
console.log(b); // { value: 20 }

let obj = { value: 10 };
function increase(obj) {
  obj.value++; // Modifies the shared reference
}
increase(obj);
console.log(obj); // { value: 11 }
