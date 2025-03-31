// ===========================================================
//           String Primitive vs. String Object
// ===========================================================

const message = "This is my first message"; // String primitive
console.log(typeof message);

const another = new String("This is my first message"); // String object
console.log(typeof another);

// ===========================================================
//            String Properties and Character Access
// ===========================================================

console.log(message.length);
console.log(message[0]);
console.log(message[1]);

// ===========================================================
//              Searching and Checking Methods
// ===========================================================

console.log(message.includes("my"));
console.log(message.includes("not"));
console.log(message.startsWith("This"));
console.log(message.startsWith("this"));
console.log(message.endsWith("e"));
console.log(message.indexOf("my"));
console.log(message.lastIndexOf("my", 3)); // search backwards from index 3 towards the start of the string

// ===========================================================
//                String Modification Methods
// ===========================================================

console.log(message.replace("first", "second"));
console.log(message.toUpperCase());
console.log(message.toLowerCase());

// ===========================================================
//             Whitespace Trimming Methods
// ===========================================================

console.log(message.trim());
console.log(message.trimStart());
console.log(message.trimEnd());

// ===========================================================
//                 Splitting and Parsing
// ===========================================================

console.log(message.split(" ").join("-"));
