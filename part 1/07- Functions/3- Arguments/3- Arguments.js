function sum1(a, b) {
  return a + b;
}

// Case 1: No arguments passed; both a and b are undefined, result: NaN
console.log(sum1());

// Case 2: One argument passed; a is 1, b is undefined, result: NaN
console.log(sum1(1));

// Case 3: Two arguments passed; a is 1, b is 2, result: 3
console.log(sum1(1, 2));

// Case 4: More than two arguments passed; a is 1, b is 2, extra arguments (3, 4, 5) are ignored, result: 3
console.log(sum1(1, 2, 3, 4, 5));

////////////////////////////////////////////////////////

function sum2() {
  let total = 0;

  // Log all arguments passed to the function
  console.log(arguments);

  for (let value of arguments) {
    total += value;
  }

  return total;
}

console.log(sum2(1, 2, 3, 4, 5));
