// ==================== 1. `this` in a Method ====================
const video1 = {
  title: "a",
  play() {
    console.log(this); // Logs `video1`
  },
};

video1.stop = function () {
  console.log(this); // Logs `video1`
};

video1.stop();

// ==================== 2. `this` in a Regular Function ====================
function playVideo() {
  console.log(this); // Logs `window` (browser) or `global` (Node.js)
}

playVideo();

// ==================== 3. `this` in a Constructor Function ====================
function Video1(title) {
  this.title = title; // `this` refers to the new object
  console.log(this);
}

const video2 = new Video1("b"); // Creates a new object, `this` points to it

// ==================== 4. `this` in Callbacks Inside a Method ====================
const video3 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag); // `this` refers to `window` or `global`, not `video3`
    }, this); // Explicitly pass `this` to ensure correct context
  },
};

video3.showTags();
