// The rest parameter `...args` collects all additional arguments into an array
// The term "rest" is used because it collects "the rest" of the arguments into a single entity
function sum1(...args) {
  // Sum all elements in the `args` array using the `reduce` method
  return args.reduce((a, b) => a + b);
}

console.log(sum1(1, 2, 3, 4, 5, 10));

/////////////////////////////////////////////////////////////

// Example: computes total price after applying a discount
function sum2(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum2(0.1, 20, 30));
