// 1. Value types: Number, String, Boolean, Symbol, undefined, null
//    Reference types: Object, Function, Array
// 2. Primitives are copied by their value
//    Objects are copied by their reference

// 1. value type:
let x = 10;
let y = x;
x = 20;
console.log(x);
console.log(y);

// 1. value type:
let number1 = 10;
function increase1(number) {
  number1++;
}

increase(number1);
console.log(number1); // still shows 10

// 2. reference types:
let a = { value: 10 };
let b = a;
a.value = 20;
console.log(a);
console.log(b);

// 2. reference type:
let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj); // shows { value: 11 }
