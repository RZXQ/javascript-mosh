// ==================== String Primitive vs. String Object ====================

const message = "This is my first message"; // String primitive
console.log(typeof message);

const another = new String("This is my first message"); // String object
console.log(typeof another);

// ==================== String Properties and Methods ====================

console.log(message.length);
console.log(message[0]);
console.log(message[1]);
console.log(message.includes("my"));
console.log(message.includes("not"));
console.log(message.startsWith("This"));
console.log(message.startsWith("this"));
console.log(message.endsWith("e"));
console.log(message.indexOf("my"));
console.log(message.replace("first", "second"));
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim());
console.log(message.trimStart());
console.log(message.trimEnd());

// ==================== Special Characters ====================

const escapedMessage = "This is my 'first message'";

// ==================== Splitting Strings ====================

console.log(message.split(" "));
