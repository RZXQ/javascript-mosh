/// 1. This example demonstrates the use of `map` and `filter` methods in JavaScript:
///    - `map`: Transforms array elements into new forms (e.g., strings, objects, or other values).
///    - `filter`: Filters elements based on conditions.
///    - Methods can be chained to perform complex transformations in a step-by-step manner.

const numbers = [1, -1, 2, 3];

// 1. map(function): Transform elements to strings
const items1 = numbers.map((n) => "<li>" + n + "</li>"); // Wrap each number in an HTML <li> tag
const html = "<ul>" + items1.join("") + "</ul>"; // Combine list items into an HTML structure
console.log(html); // Output: <ul><li>1</li><li>-1</li><li>2</li><li>3</li></ul>

// 2. map(function): Transform elements to objects
const items2 = numbers.map((n) => ({ value: n }));
// When returning an object, enclose it in parentheses to ensure `{}` is treated as an object literal
console.log(items2); // Output: [ { value: 1 }, { value: -1 }, { value: 2 }, { value: 3 } ]

// 3. Chaining methods: filter, map, and filter again
const result = numbers
  .filter((n) => n >= 0) // Step 1: Filter positive numbers
  .map((n) => ({ value: n })) // Step 2: Transform numbers into objects
  .filter((obj) => obj.value > 1) // Step 3: Keep objects with `value > 1`
  .map((obj) => obj.value); // Step 4: Extract the `value` property from objects
console.log(result); // Output: [2, 3]
