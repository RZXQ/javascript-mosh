// ===========================================================
// This: the object that is executing the current function
// 1. method -> this references the object itself
// 2. regular function -> global (window, global)
// ===========================================================

// ===========================================================
//                 1. `this` in an Object Method
// ===========================================================
const video1 = {
  title: "a",
  play() {
    console.log(this); // Refers to `video1` (object calling the method)
  },
};

video1.stop = function () {
  console.log(this); // Refers to `video1`
};

video1.play();
video1.stop();

// ===========================================================
//              2. `this` in a Regular Function
// ===========================================================
function playVideo() {
  console.log(this); // Refers to `window` (browser) or `global` (Node.js)
}

playVideo();

// ===========================================================
//          3. `this` in a Constructor Function
// ===========================================================
function Video(title) {
  this.title = title; // `this` refers to the new object instance
  console.log(this);
}

const video2 = new Video("b"); // `this` points to the newly created object

// ===========================================================
//     4. `this` in Callbacks Inside a Method (Common Issue)
// ===========================================================
const video3 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this, tag); // `this` is `undefined` in strict mode, `window` otherwise
    });
  },
};

// Solution: Pass `this` as a second argument to forEach
const video4 = {
  title: "title",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this, tag); // `this` now refers to `video4`
    }, this);
  },
};

video3.showTags();
video4.showTags();
