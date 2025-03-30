// TASK DESCRIPTION:
// Create a function named 'includes' that takes two parameters:
// 1. An array ('array') that contains numbers or any other elements.
// 2. A value ('searchElement') to check for within the array.
//
// The function should loop through the array and return 'true' if the given
// 'searchElement' is found. Otherwise, it should return 'false'.
//
// For example:
// includes([1, 2, 3, 4], 3); should return true
// includes([1, 2, 3, 4], -1); should return false
//
// After defining your function, test your implementation by using the array
// [1, 2, 3, 4] and checking whether it includes the element '-1'. Print the result
// to the console.

const numbers = [1, 2, 3, 4];
console.log(includes(numbers, -1));

function includes(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) return true;
  }
  return false;
}
