// ==================== Using Rest Parameter ====================
function sum1(...args) {
  return args.reduce((a, b) => a + b);
}

console.log(sum1(1, 2, 3, 4, 5, 10)); // 25

// ==================== Rest Parameter with Additional Arguments ====================
function sum2(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum2(0.1, 20, 30));
