// ===========================================================
//   1. `this` in Methods : this is referencing the object that is executing the current function
// ===========================================================
const video1 = {
  title: "a",
  play() {
    console.log(this); // Refers to `video1`, the object that is calling the method
  },
};

video1.stop = function () {
  console.log(this); // Refers to `video1`, as it is dynamically assigned as a method
};

video1.play(); // Logs `video1`
video1.stop(); // Logs `video1`

// -------- Exception: Using Arrow Functions in Methods --------
const video2 = {
  title: "a",
  play: () => console.log(this), // Arrow functions DO NOT have their own `this`
};

video2.play();
// Logs the outer lexical `this`:
// - In non-strict mode: global object (`window` in browsers, `global` in Node.js)
// - In strict mode: undefined

// ===========================================================
//            2. `this` in Regular Functions
// ===========================================================

// 2.1 `this` in Regular Functions (Global Scope)
function playVideo() {
  console.log(this);
  // In non-strict mode: refers to the global object (`window` or `global`)
  // In strict mode: `this` is undefined
}

playVideo(); // Logs `window` or `undefined` (in strict mode)

// 2.2 `this` in Constructor Functions
function Video(title) {
  this.title = title; // `this` refers to the new object instance being created
  console.log(this);
}

const video2 = new Video("b");
// Logs the newly created object, `video2`

// ===========================================================
//          3. `this` in Callbacks Inside a Method
// Common Issue: Callback function changes the `this` context
// ===========================================================
const video3 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
      // Callback function:
      // - In non-strict mode: `this` refers to the global object (`window`/`global`)
      // - In strict mode: `this` is `undefined`
    });
  },
};

video3.showTags();
// Logs `undefined` or `window` (depending on strict mode), and each `tag`

// -------- Solution: Pass `this` to the Callback --------
const video4 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag); // `this` now correctly refers to `video4`
    }, this);
    // Explicitly passing `this` as the second argument to `forEach`
  },
};

video4.showTags();
// Logs `video4` and each `tag`
