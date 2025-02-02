// ===========================================================
//     Solution 1: Passing `this` to Array Methods
// ===========================================================
// - `forEach` accepts an optional second argument to explicitly set `this`.
// - The callback uses the explicitly provided `this` context.
// ===========================================================
const video1 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this); // `this` passed explicitly
  },
};
video1.showTags();

// ===========================================================
//     Solution 2: Storing `this` in a Variable (Closure)
// ===========================================================
// - Store `this` in a variable (e.g., `self`) to retain access via closure.
// - The callback retains the outer scope's `self` even when invoked later.
// ===========================================================
const video2 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this; // `self` preserves `this`
    this.tags.forEach(function (tag) {
      console.log(self.title, tag); // Uses `self` from closure
    });
  },
};
video2.showTags();

// ===========================================================
//     Solution 3: Using `call()` or `apply()`
// ===========================================================
// - Both methods immediately invoke the function with a specified `this`.
// - `call` accepts arguments individually, `apply` as an array.
// ===========================================================
function playVideo(a, b) {
  console.log(this, a, b);
}
playVideo.call({ name: "Ruizhi" }, 1, 2); // `this` set via `call`
playVideo.apply({ name: "Ruizhi" }, [1, 2]); // `this` set via `apply`

// ===========================================================
//     Solution 4: Using `bind()` (Permanent `this` Binding)
// ===========================================================
// - `bind()` returns a new function with `this` permanently bound.
// - Unlike `call`/`apply`, `bind()` does NOT invoke the function immediately.
// - Use `bind()` when you need to defer execution (e.g., in callbacks).
// ===========================================================
function playVideoBound(a, b) {
  console.log(this, a, b);
}
const boundFn = playVideoBound.bind({ name: "Ruizhi" });
boundFn(1, 2); // `this` is permanently bound

const video3 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this), // `bind` ensures `this` refers to `video3`
    );
  },
};
video3.showTags();

// ===========================================================
//     Solution 5: Using Arrow Functions
// ===========================================================
// - Arrow functions inherit `this` from their surrounding lexical scope.
// - They do NOT have their own `this`, avoiding context loss in callbacks.
// - In this case, `this` refers to `video4` (the enclosing `showTags` method).
// ===========================================================
const video4 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      (tag) => console.log(this.title, tag), // Inherits `this` from `showTags`
    );
  },
};
video4.showTags();
