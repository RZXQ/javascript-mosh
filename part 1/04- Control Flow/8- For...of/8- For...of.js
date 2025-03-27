// ============================================
//        JavaScript: Array & Object Iteration
// ============================================

// 1. Array iteration (for...of)
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color); // "red", "green", "blue"
}

// 2. for...of in Object.keys() & values()
const mixed = ["red", 1, "blue"];

for (const key of Object.keys(mixed)) {
  console.log(key); // "0", "1", "2"
}

for (const val of Object.values(mixed)) {
  console.log(val); // "red", 1, "blue"
}

// 3. for...of in Object.entries()
const person = { id: 2025, name: "ruizhi" };

for (const [key, val] of Object.entries(person)) {
  console.log(`${key}: ${val}`); // "id: 2025", "name: ruizhi"
}
