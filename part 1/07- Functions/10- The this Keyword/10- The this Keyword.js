// Pre-required knowledge:
// 1. **Method**: A function that is a property of an object is called a method.
// 2. **`this` keyword**: Refers to the object that is executing the current function.

////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. `this` in a method -> refers to the object containing the method
const video1 = {
  title: "a",
  play() {
    console.log(this); // Logs the `video1` object because `this` refers to the object
  },
};

video1.stop = function () {
  console.log(this); // Logs the `video1` object because `stop` is now a method of `video1`
};

video1.stop();

////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. `this` in a regular function -> refers to the global object (window in browsers, global in Node.js)
function playVideo() {
  console.log(this); // Logs `window` (browser) or `global` (Node.js) because `this` defaults to the global scope in regular functions
}
playVideo();

////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. `this` in a constructor function -> refers to the newly created object
function Video1(title) {
  this.title = title; // `this` refers to the newly created object
  console.log(this); // Logs the new object created by `new Video1("b")`
}

const video2 = new Video1("b");
// When `new` is used:
// - A new empty object `{}` is created.
// - `this` points to the new object.
// - The function sets properties on the new object.

////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. `this` in callbacks inside a method -> depends on how the function is invoked
const video3 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      // Using a traditional function inside the callback:
      // - `this` here refers to the global object (`window` in browser, `global` in Node.js).
      // - This happens because `forEach` calls the callback as a regular function,
      //   not as a method of `video3`.
      console.log(this.title, tag); // `this.title` is `undefined` because `this` points to the global object
    }, this); // Explicitly pass `this` to ensure it refers to `video3`
  },
};

video3.showTags();

// Key Points:
// 1. When using traditional functions as callbacks, `this` can lose its context and point to the global object.
// 2. To fix this:
//    - Pass `this` explicitly as a second argument to `forEach`.
//    - Or use an arrow function, as it doesn't have its own `this` and inherits from the enclosing scope.
