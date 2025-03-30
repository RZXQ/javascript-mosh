// ===========================================================
//           1. Transform Elements to Strings
// Remember: split() works only for strings; here we use join()
// ===========================================================

const numbers = [1, -1, 2, 3];
const items1 = numbers.map((n) => "<li>" + n + "</li>");
const html = "<ul>" + items1.join("") + "</ul>";

// ===========================================================
//           2. Transform Elements to Objects
// ===========================================================

const items2 = numbers.map((n) => ({ value: n }));
