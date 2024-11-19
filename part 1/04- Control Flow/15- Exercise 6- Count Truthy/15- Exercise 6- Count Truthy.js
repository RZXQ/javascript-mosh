const name = "Reacher"; // Truthy(true) value

const array = [0, null, undefined, 1, 2, 3];

countTruthy(array);

function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) {
      count++;
    }
  }
  console.log(count); // Outputs the count of truthy values in the array
}
