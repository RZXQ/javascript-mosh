function Circle(radius) {
  /* ===========================================================
   *                  Private variables (closure)
   * =========================================================== */
  let color = "red";
  let defaultLocation = { x: 0, y: 0 };

  function computeOptimumLocation() {
    // Logic...
  }

  /* ===========================================================
   *                  Public properties
   * =========================================================== */
  this.radius = radius;

  /* ===========================================================
   *                  Public methods
   * =========================================================== */
  this.draw = function () {
    console.log("draw");
    console.log(defaultLocation); // Access private variable via closure
    console.log(this.radius); // Access public property directly
  };
}

/* ===========================================================
 *                  Usage & testing
 * =========================================================== */
const circle = new Circle(10);

console.log(circle.defaultLocation); // Undefined (private)
circle.draw(); // Accesses private members via closure
