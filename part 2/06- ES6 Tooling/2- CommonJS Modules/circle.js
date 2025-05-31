const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  show() {
    console.log(_radius.get(this));
  }
}

// Named export - allows importing as { Circle }
module.exports.Circle = Circle; // module: => { Circle: XX }

// Default export - allows importing as require("./circle")
module.exports = Circle; // module: Circle function
