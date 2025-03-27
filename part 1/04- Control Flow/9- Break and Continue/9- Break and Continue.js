// IMPORTANT REMINDER:
// Be cautious when using 'break' and 'continue' with a 'while' loop.
// In a 'while' loop, you must manually manage increments or updates carefully,
// especially when using 'continue', to avoid accidental infinite loops.
// Consider a 'for' loop for clearer iteration control whenever possible.

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
