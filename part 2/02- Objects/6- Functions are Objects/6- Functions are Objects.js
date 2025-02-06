/* -----------------------------------------------------------
 *                  Constructor function
 * ----------------------------------------------------------- */
function Circle(radius) {
  console.log(arguments);
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

/* -----------------------------------------------------------
 *                 Function metadata
 * ----------------------------------------------------------- */
console.log(Circle.name); // Logs the function name: "Circle"
console.log(Circle.length); // Logs the number of expected parameters: 1
console.log(Circle.constructor); // Logs the Function constructor

/* -----------------------------------------------------------
 *                        call
 * ----------------------------------------------------------- */
const circle = {};
Circle.call(circle, 1); // Calls Circle immediately with `this` bound to `circle`

/* -----------------------------------------------------------
 *                        apply
 * ----------------------------------------------------------- */
Circle.apply(circle, [1]); // Calls Circle immediately with `this` bound to `circle`, arguments as an array

/* -----------------------------------------------------------
 *                        bind
 * ----------------------------------------------------------- */
const boundCircle = Circle.bind(circle);
boundCircle(1); // Returns a new function with `this` bound to `circle`, does NOT call immediately
