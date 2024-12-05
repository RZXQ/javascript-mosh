const numbers = [1, 5, 3, 4];

const max = getMax(numbers);

console.log(max);

// approach A: using traditional method
// function getMax(array) {
//   if (array.length === 0) return undefined;
//
//   let max = array[0];
//   for (let element of array) {
//     if (element > max) {
//       max = element;
//     }
//   }
//   return max;
// }
//
// approach B: using reduce method
function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((a, b) => (a > b ? a : b));
}
