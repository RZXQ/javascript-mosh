/// 1. This example demonstrates ways to iterate over an object's properties and values.
///    - `for...in`: Iterates over all enumerable properties of an object.
///    - `Object.keys`: Returns an array of the object's keys.
///    - `Object.entries`: Returns an array of key-value pairs as subarrays.
///    - `in`: Checks if a property exists in an object.

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// 1. Using `for...in` to iterate over keys and values
for (let key in circle) {
  console.log(key, circle[key]); // Logs each key and its corresponding value
}

// 2. Using `for...of` with `Object.keys`
//    - `Object.keys(circle)` returns an array of keys
for (let key of Object.keys(circle)) {
  console.log(key); // Logs each key
}

// 3. Using `for...of` with `Object.entries`
//    - `Object.entries(circle)` returns an array of key-value pairs
for (let entry of Object.entries(circle)) {
  console.log(entry); // Logs each key-value pair as an array [key, value]
}

// 4. Using the `in` operator to check if a property exists in the object
if ("radius" in circle) {
  console.log("yes"); // Logs "yes" if the 'radius' property exists in the circle object
}
