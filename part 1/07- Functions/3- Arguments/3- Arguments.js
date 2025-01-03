// ==================== Fixed Parameters ====================
function sum1(a, b) {
  return a + b;
}

console.log(sum1()); // NaN (a, b are undefined)
console.log(sum1(1)); // NaN (b is undefined)
console.log(sum1(1, 2)); // 3 (a = 1, b = 2)
console.log(sum1(1, 2, 3)); // 3 (extra args ignored)

// ==================== Variable Arguments ====================
function sum2() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum2(1, 2, 3, 4, 5)); // 15 (sums all arguments)
