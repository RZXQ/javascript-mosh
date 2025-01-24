// ===========================================================
//                      Loop Control: break
// ===========================================================
let i = 0;
while (i <= 10) {
  if (i === 5) break; // Exit the loop completely
  console.log(i);
  i++;
}

// ===========================================================
//                    Loop Control: continue
// ===========================================================
let j = 0;
while (j <= 10) {
  if (j === 5) {
    j++; // Prevent infinite loop
    continue; // Skip the current iteration
  }
  console.log(j);
  j++;
}
