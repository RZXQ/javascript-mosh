// Description:
// This function displays numbers from 0 to a given limit,
// and indicates whether each number is EVEN or ODD.

function showNumbers(limit) {
  for (let i = 0; i < limit; i++) {
    console.log(i % 2 === 0 ? `${i} EVEN` : `${i} ODD`);
  }
}

showNumbers(100);
