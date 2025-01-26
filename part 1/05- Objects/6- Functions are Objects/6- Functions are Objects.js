// ===========================================================
//                Function Properties & Methods
// ===========================================================
function Circle(radius) {
  this.radius = radius;
  this.draw = () => console.log("draw");
}
console.log(Circle.name); // "Circle"
console.log(Circle.length); // 1
console.log(Circle.constructor); // [Function: Function]

// ===========================================================
//                call() and apply()
// ===========================================================
const obj = {};
Circle.call(obj, 1);
Circle.apply(obj, [1]);
