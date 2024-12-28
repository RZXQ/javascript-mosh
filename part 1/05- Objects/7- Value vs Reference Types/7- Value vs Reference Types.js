// ==================== Primitive Types ====================

let x1 = 10;
let y1 = x1;
x1 = 20;
console.log(x1, y1);

// ================= Reference Types =================

let x2 = { value: 10 };
let y2 = x2;
x2.value = 20;
console.log(x2, y2);

// ================= Primitive Types in Function =================

let number = 10;

function increase1(number) {
  number++;
}

increase1(number);
console.log(number);

// ================= Reference Types in Function =================

let obj = { value: 10 };

function increase2(obj) {
  obj.value++;
}

increase2(obj);
console.log(obj);
