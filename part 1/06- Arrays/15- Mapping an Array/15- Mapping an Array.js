const numbers = [1, -1, 2, 3];

// ==================== 1. Transform Elements to Strings ====================
const items1 = numbers.map((n) => "<li>" + n + "</li>");
const html = "<ul>" + items1.join("") + "</ul>";

// ==================== 2. Transform Elements to Objects ====================
const items2 = numbers.map((n) => ({ value: n }));

// ==================== 3. Chaining Methods for Complex Transformations ====================
const result = numbers
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);
