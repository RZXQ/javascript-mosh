const first = [1, 2, 3];
const second = [4, 5, 6];

// ==================== 1. Combine Arrays ====================
const combined1 = [...first, ...second];

// ==================== 2. Add Custom Elements While Combining ====================
const combined2 = [...first, { id: 1 }, ...second];

// ==================== 3. Create a Shallow Copy ====================
const copy = [...combined1];
