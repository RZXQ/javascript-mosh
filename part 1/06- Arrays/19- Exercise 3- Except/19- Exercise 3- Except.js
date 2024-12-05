const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 2]);

console.log(output);

// approach A: using includes function
function except(array, excluded) {
  let newArr = [];
  for (let element of array) {
    if (!excluded.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}
//
// approach B: using filter on each iteration
// function except(array, excluded) {
//   let newArr = [];
//   for (let element of excluded) {
//     newArr = array.filter((n) => n !== element);
//   }
//   return newArr;
// }
