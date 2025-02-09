let person = { name: "Reacher" };

// ===========================================================
//                      Get Property Descriptor
// ===========================================================
const objectBase = Object.getPrototypeOf(person); // Get the prototype of `person`
const descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor); // Logs the property descriptor for `toString`

// ===========================================================
//                      Set Property Descriptor
// ===========================================================
Object.defineProperty(person, "name", {
  writable: false, // The value cannot be overwrite(read-only)
  enumerable: false, // The property will not appear in enumeration
  configurable: false, // The descriptor cannot be redefined or deleted
});

// ===========================================================
//                      1. Test Writable
// ===========================================================
person.name = "Jack"; // Fails silently (non-strict mode) or throws an error (strict mode)
console.log(person.name); // "Reacher" (the value remains unchanged)

// ===========================================================
//                      2. Test Enumerable
// ===========================================================
console.log(Object.keys(person)); // [] (the `name` property is hidden in enumeration)

// ===========================================================
//                      3. Test Configurable
// ===========================================================
// a. Attempt to delete the property
delete person.name; // Fails silently or throws an error (strict mode)
console.log(person.name); // "Reacher" (the property is not deleted)

// b. Attempt to redefine the descriptor
try {
  Object.defineProperty(person, "name", {
    writable: true, // Throws an error because `configurable` is false
  });
} catch (e) {
  console.log(
    "Error: Cannot redefine property 'name' because it is not configurable.",
  );
}
