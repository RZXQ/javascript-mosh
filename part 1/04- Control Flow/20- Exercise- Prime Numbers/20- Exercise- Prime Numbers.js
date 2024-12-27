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
