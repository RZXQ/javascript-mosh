function generatePattern(rowCount) {
  let pattern = "";
  for (let row = 1; row <= rowCount; row++) {
    for (let col = 1; col <= row; col++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  return pattern;
}

console.log(generatePattern(5));
