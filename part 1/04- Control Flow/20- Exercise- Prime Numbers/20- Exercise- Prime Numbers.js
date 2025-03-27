// Task Description:
// Implement two JavaScript functions:
// 1. `isPrimeNumber(number)`: Checks if the provided number is a prime number by returning true if prime and false if not.
// 2. `showPrimes(limit)`: Logs all prime numbers between 2 and the provided limit number (inclusive).
//
// Example:
// Input: 10
// Output:
// 2
// 3
// 5
// 7

function isPrimeNumber(number) {
  let isPrime = true;
  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrimeNumber(number)) {
      console.log(number);
    }
  }
}

showPrimes(100);
