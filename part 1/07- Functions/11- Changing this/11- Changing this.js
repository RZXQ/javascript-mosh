// Losing `this` context in callback functions and how to fix it:

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Solution 1: Passing `this` as a second argument to array methods (like forEach)
//
// By passing `this` as the second argument to `forEach`, we ensure that the callback
// runs with the correct `this` reference. This prevents `this` from defaulting to
// the global object.

const video1 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    // `this` is `video1`. Passing `this` to `forEach` ensures that inside the callback,
    // `this` remains `video1`.
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

video1.showTags();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Solution 2: Storing the current `this` in a separate variable (e.g., `self`)
//
// This method is older and not as clean, but was commonly used before ES6.
// By assigning `this` to a variable like `self`, we can reference the original `this`
// even inside a nested callback function that would otherwise lose context.

const video2 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this; // Preserve the current `this` in `self`
    this.tags.forEach(function (tag) {
      // Here, `this` does not refer to `video2`, but `self` does, so we use `self`.
      console.log(self.title, tag);
    });
  },
};

video2.showTags();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Solution 3: Using call() or apply() to explicitly set `this`
//
// `call()` and `apply()` allow you to invoke a function with a specific `this` value.
// - `call(thisArg, arg1, arg2, ...)` passes arguments individually.
// - `apply(thisArg, [arg1, arg2, ...])` passes arguments as an array.

function playVideo(a, b) {
  console.log(this, a, b);
}

playVideo(); // `this` defaults to the global object (or `undefined` in strict mode)
playVideo.call({ name: "Ruizhi" }, 1, 2); // `this` is `{ name: "Ruizhi" }`, args: 1, 2
playVideo.apply({ name: "Ruizhi" }, [1, 2]); // `this` is `{ name: "Ruizhi" }`, args: 1, 2

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Solution 4: Using bind() to permanently set `this`
//
// `bind()` returns a new function with `this` set to the specified object, without invoking it immediately.
// This is useful when we want a function with permanently bound `this`.

// 4.1: Assign the bound function to a variable
function playVideoBound(a, b) {
  console.log(this, a, b);
}
const fn = playVideoBound.bind({ name: "Ruizhi" });
fn(1, 2); // `this` is `{ name: "Ruizhi" }`

// 4.2: Use bind inline without storing to a variable
playVideoBound.bind({ name: "Ruizhi" })(1, 2); // `this` is `{ name: "Ruizhi" }`

// 4.3: Bind `this` inside a method to ensure callbacks have correct context
const video3 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    // Using `.bind(this)` on the callback function ensures `this` references `video3`
    // inside the callback, not the global object.
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this),
    );
  },
};

video3.showTags();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Solution 5: Using arrow functions (ES6+)
//
// Arrow functions do not have their own `this`. Instead, they inherit `this` from their
// containing (lexical) scope. If `this` is `video4` in `showTags()`, arrow callbacks will
// also use `video4` as `this`.

const video4 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    // Using an arrow function inside forEach means `this` is inherited from showTags(),
    // so `this` remains `video4`.
    this.tags.forEach((tag) => console.log(this.title, tag));
  },
};

video4.showTags();
