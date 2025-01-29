// ===========================================================
//                          concat()
// ===========================================================

const first = [{ id: 1 }, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
first[0].id = 10; // Modifies the object in `first`, reflected in `combined`
console.log(combined); // [{ id: 10 }, 3, 4, 5, 6]

// ===========================================================
//                          slice()
// ===========================================================

// --- Extract elements from index 2 to 4 (exclusive) ---
const slice1 = combined.slice(2, 4);
console.log(slice1); // [4, 5]

// --- Extract from start index to the end ---
const slice2 = combined.slice(2);
console.log(slice2); // [4, 5, 6]

// --- Create a shallow copy of the entire array ---
const slice3 = combined.slice();
console.log(slice3); // [{ id: 10 }, 3, 4, 5, 6]
