/* -----------------------------------------------------------
 *                  Constructor Function
 * ----------------------------------------------------------- */
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(5);

/* -----------------------------------------------------------
 *          Adding Properties to an Object
 * -----------------------------------------------------------
 * - Dot notation: Use when the property name is known and fixed.
 * - Bracket notation: Use when the property name is dynamic.
 */

/* ---- Using Dot Notation ---- */
circle.location = { x: 1 }; // Preferred when property name is static

/* ---- Using Bracket Notation ---- */
const propertyName = "location";
circle[propertyName] = { x: 1 }; // Use when property name is dynamic

/* -----------------------------------------------------------
 *                  Deleting a Property
 * ----------------------------------------------------------- */
delete circle.location;
