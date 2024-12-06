function sum(...items) {
  // Check if a single array has been passed as an argument
  if (items.length === 1 && Array.isArray(items[0])) {
    // Spread the array into individual elements
    items = [...items[0]];
  }
  return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));
