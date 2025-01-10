// --------------------------------------------------
//                     Base Classes
// --------------------------------------------------
function Shape() {}
function Circle() {}

// --------------------------------------------------
//                Prototypical Inheritance
// --------------------------------------------------
// Circle inherits from Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Rectangle(color) {
  // To call the super constructor
  Shape.call(this, color);
}

// --------------------------------------------------
//                 Method Overriding
// --------------------------------------------------
// Base class method
Shape.prototype.draw = function () {};

// Derived class method
Circle.prototype.draw = function () {
  // Call the base implementation
  Shape.prototype.draw.call(this);

  // Do additional stuff here
};

// --------------------------------------------------
//       Guidelines for Inheritance in JavaScript
// --------------------------------------------------
// - Don't create large inheritance hierarchies.
// - One level of inheritance is fine.

// --------------------------------------------------
//                   Using Mixins
// --------------------------------------------------
// Mixins combine multiple objects and implement composition in JavaScript.
const canEat = {
  eat: function () {},
};

const canWalk = {
  walk: function () {},
};

function mixin(target, ...sources) {
  // Copies all the properties from all the source objects
  // to the target object.
  Object.assign(target, ...sources);
}

// --------------------------------------------------
//                  Applying Mixins
// --------------------------------------------------
function Person() {}

mixin(Person.prototype, canEat, canWalk);
