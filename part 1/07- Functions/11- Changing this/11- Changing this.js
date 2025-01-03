// ==================== Losing `this` Context: Solutions ====================

// ==================== Solution 1: Passing `this` to Array Methods ====================
const video1 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag); // Logs `video1.title`
    }, this); // Pass `this` explicitly
  },
};
video1.showTags();

// ==================== Solution 2: Storing `this` in a Variable ====================
const video2 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this; // Preserve `this`
    this.tags.forEach(function (tag) {
      console.log(self.title, tag); // Use `self` for correct context
    });
  },
};
video2.showTags();

// ==================== Solution 3: Using `call()` or `apply()` ====================
function playVideo(a, b) {
  console.log(this, a, b);
}
playVideo.call({ name: "Ruizhi" }, 1, 2); // Explicitly set `this` with `call`
playVideo.apply({ name: "Ruizhi" }, [1, 2]); // Explicitly set `this` with `apply`

// ==================== Solution 4: Using `bind()` ====================
function playVideoBound(a, b) {
  console.log(this, a, b);
}
const boundFn = playVideoBound.bind({ name: "Ruizhi" });
boundFn(1, 2); // Permanently bound `this`

const video3 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag); // Correct context using `.bind(this)`
      }.bind(this),
    );
  },
};
video3.showTags();

// ==================== Solution 5: Using Arrow Functions ====================
const video4 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => console.log(this.title, tag)); // Arrow function inherits `this`
  },
};
video4.showTags();
