const numbers = [1, 5, 3, 4];

// ==================== Approach A: Using Traditional Loop ====================
function getMaxTraditional(array) {
  if (array.length === 0) return undefined;

  let max = array[0];
  for (let element of array) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}

console.log(getMaxTraditional(numbers));

// ==================== Approach B: Using `reduce` Method ====================
function getMaxReduce(array) {
  if (array.length === 0) return undefined;

  return array.reduce((a, b) => (a > b ? a : b));
}

console.log(getMaxReduce(numbers));
