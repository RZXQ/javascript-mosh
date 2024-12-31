const first = [{ id: 1 }, 3];
const second = [4, 5, 6];

// ==================== 1. concat() ====================
const combined = first.concat(second);
first[0].id = 10; // Modifies the object in `first`, reflected in `combined`

// ==================== 2. slice() ====================

// 2. slice(): Extracts parts of an array and returns a new array
const slice1 = combined.slice(2, 4);

// --- 2.2 Extract from startIndex to the end ---
const slice2 = combined.slice(2);

// --- 2.3 Create a shallow copy of the entire array ---
const slice3 = combined.slice();
