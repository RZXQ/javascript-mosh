/// 1. This example demonstrates JavaScript string primitives and string objects.
///    - String primitives: Immutable strings created directly using quotes.
///    - String objects: Created using the `new String()` constructor.
///    - JavaScript allows primitives to access methods through temporary wrapping in a String object.

/// 2. This example also covers common string methods and properties,
///    such as length, includes, startsWith, endsWith, replace, and others.

// 1. String primitive vs. string object
const message = "This is my first message"; // String primitive
console.log(typeof message); // Output: "string"

const another = new String("This is my first message"); // String object
console.log(typeof another); // Output: "object"

// 2. String length
console.log(message.length); // Output: 24

// 3. Accessing characters by index
console.log(message[0]); // Output: "T"
console.log(message[1]); // Output: "h"

// 4. includes() checks if a substring exists
console.log(message.includes("my")); // Output: true
console.log(message.includes("not")); // Output: false

// 5. startsWith() checks if a string starts with a specific substring
console.log(message.startsWith("This")); // Output: true
console.log(message.startsWith("this")); // Output: false (case-sensitive)

// 6. endsWith() checks if a string ends with a specific substring
console.log(message.endsWith("e")); // Output: true

// 7. indexOf() returns the position of the first occurrence of a substring
console.log(message.indexOf("my")); // Output: 8

// 8. replace() replaces the first occurrence of a substring with another
console.log(message.replace("first", "second")); // Output: "This is my second message"

// 9. toUpperCase() converts the string to uppercase
console.log(message.toUpperCase()); // Output: "THIS IS MY FIRST MESSAGE"

// 10. toLowerCase() converts the string to lowercase
console.log(message.toLowerCase()); // Output: "this is my first message"

// 11. trim() removes whitespace from both ends of the string
console.log(message.trim()); // Output: "This is my first message"

// 12. trimStart() removes whitespace from the beginning
console.log(message.trimStart()); // Output: "This is my first message"

// 13. trimEnd() removes whitespace from the end
console.log(message.trimEnd()); // Output: "This is my first message"

// 14. Escape notation for special characters: \n, \'
// const message = "This is my 'first message'"; // Example of escaping a single quote

// 15. split() splits the string into an array using a delimiter
console.log(message.split(" ")); // Output: ["This", "is", "my", "first", "message"]
