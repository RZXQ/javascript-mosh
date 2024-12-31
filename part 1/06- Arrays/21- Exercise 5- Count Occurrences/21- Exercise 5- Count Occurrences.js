const numbers = [1, 2, 3, 4, 1];

// ==================== Approach A: Using a Loop ====================
function countOccurrences(array, searchElement) {
  let count = 0;
  for (let element of array) {
    if (element === searchElement) count++;
  }
  return count;
}

const countA = countOccurrences(numbers, 1);
console.log(countA);

// ==================== Approach B: Using `reduce` ====================
function countOccurrencesReduce(array, searchElement) {
  return array.reduce((accumulator, currentValue) => {
    return currentValue === searchElement ? accumulator + 1 : accumulator;
  }, 0);
}

const countB = countOccurrencesReduce(numbers, 1);
console.log(countB);
